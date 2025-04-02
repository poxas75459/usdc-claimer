/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3u1tAq2Ah2qPMeMJc2wiKHdkpedd6QBmq2VYT5CKXP6UejwVjTwAcfo9bA5uVHHU966wZnGCLMVMwktVxfwTusEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfbayqXAMi26fmaJ6fPvNawuKuRBvL76P9Z3vCBi5hxKkHZZtULDyUF5kPaVresCAQNoW8gaoQCzi2RrwZvGqrj",
  "key1": "4gSepXZkvDDxt7RLrAPMRJ8D14FMuxBc3zzE31e9WNtcznFc1JNbUnqFLxw7JBEBtjLofmpQCgK9x7WBxT6wXeuT",
  "key2": "wSa2jvYyWNE6Jnb4Qk3VbgMaA5QAsmdde2RJ4coUSV9r4qasvW2XQrQW7UCdNncF9iAE5cerQB4s8LLh8BLCf6y",
  "key3": "5aCgYDYngbXeUbtGDQimoazH6jry1U9z83AwEgZ9K1RKgn4noaeRXQ97dGdZyYSsQ8ZbtvRHiDPqZC2AmX2gSgy1",
  "key4": "5FrLZxoaZsDoRrBGUSv7m7FMxjXzxaQyP6vajSVECiucwQUd2cBUV1ParX3cWmPP3DQZGchSaecj7ML6919E5nzw",
  "key5": "5vA3bTxe812BVzxJ9WSGZiM2RzFCtciwVzdxeUBzXYAopM3nFhffJ7crkpwnqRaZSQFPVBs5XmHQiUC5XAkfxcJf",
  "key6": "337AUCsdYk8WpvhSojz1dZhWfcbYLSL9S3y4y8hKLbUVLxbQwx2Bhgkk9QhdjkmaVEapZ46CE5FPWxXyms2gTM6u",
  "key7": "3jzczch6BPv8AbKzdxtULmioG5WRtXSJTQaSgm45Pkj6PPyisqWSXZDBtLvw8Vev3ayMpBiErEbMY58U5uyjrRjp",
  "key8": "3YxbKBtry5wKYyVR7LtkfPeDnU7cZWnziAKUtj5kLGeo7bS4ycHB32a69kroVDGYE4tNzjuU57fJJWSrwXdJPiMo",
  "key9": "3U2UvEJPjaJJuL1EQMij9KZE7CgPDtWsMN1CDtrB2iJG1PadHNe4E1nX6EWevFrRRK3DT2qVu4XDKXq3FEeZe2i",
  "key10": "4GngB2UQHecESfzsf6GbFnV8bDgyAqjK449YZg9epebCEpECuGufHQPRtcNeYySMPfW2Q59RtSjQntv6mJm9oLXw",
  "key11": "3nQhMLY9qm2M8KPpRkLg2qZrY2bhdxK4wSnNuog48UknXmZZXbJfDCVfQzXkakZUcTWuCXCNx3hKBGe5PtZJQs2r",
  "key12": "5ER6gxYEBV3p4Xf7rMENBNspC9kwgEAsv2ZRYt9gfcYAcmxsv1SRcMRcmi6QuaAJ6x2KNU8njYB6aYJDVt94xZaB",
  "key13": "46VGKz97zum5ZAJdGmJJTycwEZLYpQpYVy4TBdrcenzUwXWvQv1dWTQTsYN7LNXnfmm7BJbZKoZhQTYhLkmmB7DM",
  "key14": "PbgTn9MzbgJqxnCrT48EYiVbRiQXWXHoAaG8WwT8mnQh62q33UYALzCRYgSm9enV2T2srHsk5EhGMGBuZui6dWh",
  "key15": "2EMUBiWgUgyWm892Av21pWivvM3TagVRQW1toaobC6TRkSdDRnNZqbPfbVBkLJ9iJyzcsr3h3FLZhtGQjvbVH6a6",
  "key16": "ZzXBRVNTsifxri3ahq74vgmpECTPPz4zM4e1dSZzAxgguTYuDd5uQv5ijyWkEvLNSSrza2RpS2UrAj8WNyjsLqy",
  "key17": "2cdAigzv18Z8v1xNM8TSj4coEizTdRvEXJmms7PS6x77aKTinrNqL9cK2JsgB5oqPhJorj6FQfZ4EafXGsnpRYq",
  "key18": "DKJ5ErLjJT898nEUYT1FAs8t8hciKTZsjtaseDuBhPU6w1g1BVoWSej2vqMakfqQxHDnSLrzVHMuKvf8LjnsNAd",
  "key19": "3RrUmK7YGVuxHwvxPwy6W4RscdFwyyxxNP6vWviFnxLZEZngmt6PE4diqWUCqTgP2Hqmw1pWRyABYqGQfTPX1nwP",
  "key20": "5Uc5W6k7vN4BNmmwzXywvs7kPXWiCBEU8kSyTqq9pxfmCCtsYRL8mMDtUN2wohf5aM53hs7i9EfJbsGb6cBVLF1x",
  "key21": "NEpNuupCkYfvrkBZcgpco5GCTHCZqYPRJwRhqoesJ8ey9LWJjnvrJrRdhm1xd8A2EVGxEqH4wK2iW8S2KRQCXwe",
  "key22": "5C7c56wYNqSWiUtkwgcymwoBJUND1ykZBQAybKYFgXeSn7iJWXAFZmyujdHNeYgQAqhpvJ18TB1q2wi1qnPKfBdT",
  "key23": "ChxQ6yUtWa9cgHGKU9VSRf7NtsZyHPCgBWMVKRzwrXG4ViMqRNWLBQb9KRYFFnWr5493BmCSgcCwm7FgkmraNiw",
  "key24": "215kZsQqS18bemQR7aB5LX6y1nkPHnzcd2F7n8yWruYKsrNQRKdf6EiyM4yY6cgkDKFGrA5imxMfjKu13TxqsUEV",
  "key25": "3KY3bAqu5w8xMCNTtweSjKQtpkdLyHwCCS9hCtnzwFiuY6bPZ2fnx6FwCTa8rPXvS5rRoe2G1Rsh8beDEEEXJnJt",
  "key26": "54UeR5DDQFa75EdNkXw68YXVBPj3HP6S3C8kNAReLJQqivWNnN9SznTwTvYLByweLAtXp4fL4upaDMLFJmm1XKwY",
  "key27": "2rV5GMkhpHhBmuatRyMa1943ynP3J41ee6dXgbiQtv6UK5kFXSAwzayU4Gvn4T3uD7sXttmbkiZe3yzegKJdh6j3",
  "key28": "3TSz3adrHViQFAM23i14ggC1maEBmjwwhitXRZFE47DGYx8NuQiHqf5NxuG9zUG9Z4193JLfdWmm3ttcxf5L5Z7o",
  "key29": "2qmJvXh83fQzwvV3PPn6V4AH4AcpGskU6TzRS7oxvnCaqKHkvoAekD9UwbTRMbz2PAqCi9HRASRX3LHM1LuibFhy",
  "key30": "5e1nTx4M6KgvxRz2a2paPw59mhhBugtU9KomPhK5GJ1kbH5UmyAASda1SBzBU2k4aasws6QNxUezdoyWYtYjHgbc",
  "key31": "3PDRjR8nGtnGErydqsaPcvrWWNGKR7WBg3bCwmEfnLbYMkT7nVKQwNGeLizB5rCbNiDdUJuQwqk5q9hLiBD3wybY",
  "key32": "3nx1CUfUnZkjd8CTtJBjkkPVrBbgqcLv6o12JekkFJ33qDefFQd8gLbg5ymFE5wu7Uhtqjwf737V3MfbzzRFBa5C",
  "key33": "oanmjHYsWTzUSR833vTGpvyELA7LfGBWm1DQZWfWFxMocU3PJheCnfhbQAT2pxcKJ5BJ8pdXUcMZ5S9aT7TT3uH",
  "key34": "5YzRgWA3eu2yyr1ySGTYjEGKu1azVjFz9fE7EZGaNFHSjvmt3PmotbCi41PzX4nYjhmWuMitSapjMw1GRCE8ywj2",
  "key35": "4oW5nmRdzwGi213sraAVNzUkBCnp4eovkcUfj3fVqJSDg8V9HyQoJDEsUNcQjr5vJXiPQafVV3nCtDbQtyMNGW2Z",
  "key36": "3VGTPEJNCJ98n6Vh763fF6ciiY12LUH4JLMMzfWVBAHpFx8YXDYEDxzE1PGdarwKiLDxPkfjytBHiEENMMKaSdB4",
  "key37": "4m18i3EmdRMG785gCUqLB2sET7prBWitKzo3ut1iDd7SLY9okfAmoo65uP2wuu96yBdfqaYkCkwinjF76kGXmHpt",
  "key38": "4XUzmYjwVCJLnVc16znk3a5eaoVAKvf4ymUa622tet7fTiKRAfGRDCbbXyRyaMotouiMv7m74KZtgrVJn8FqVadr",
  "key39": "2u6tDxQYnV8jAqX1pSDiwuALF7NpaU2d7iZzkh4oEJV8gHuzB4E1yXxEoKJwAyt1U7qzRgrUbkDd1gtktDta1ctZ",
  "key40": "3hLme8PAsiNc711mETSyCwNqSrxQeoGfEAmyh1m6ZvpUtFznCb2uXvJ4o8DcVmwu3wyNCPVN95YT4WDM62areCSh",
  "key41": "5WZqGVefEhy9Ui7nxc7LkD9g8A3mRkhpxNAWDFD8nvhrejjxJo8VtxKix2pNh2fGHMYhDSZjZBYziKawRG5VvEB8",
  "key42": "54Pzz65oiGUFoB3xXkx1GoVmvaCTXktc4wEvTXjC57mfsJQ7NLUXZoooXTuKRXUGBfDueCfFDXaossbMzwHKxehp",
  "key43": "4RqHf6Q5aHdNc7w5YQWQ4gFsCNPE13oVP2wmCGHHikW5ZfBLHmjaHn9tW3LkkgYTxSr892UYRBGSAMYxRDFW5cPT",
  "key44": "47EJTwV1Ce49uu81LroaA6E4icmgJ2rBM6zGeY9H4WUNvFin2Zo4eGRyv65jyPJM9kg5yr8h8mrupDK9oa8eCznL",
  "key45": "38KaByczLqcUqv1mYfJ7mhBFeQhXowKeZYt4v2UGHdkhYJKjSo1F2Hk5XQ5SgeSHBYT4HpM2tTfi2XmKKF3MrNU1",
  "key46": "26719QFQyv1VYh8TjoR69n6QZB65SZmRbPbfyWTeHaZrRHLhssgxHrF8Mp2odbWRyY6QEhEdeSPsVkBMTVsXyY95",
  "key47": "4RHpxhGeeJtFzAhYrGZUG5H3WjoDfvjfSRkzJ5HwUmC8U5kkdYDEoVS9A1Az4vDNkN1ubuk5chgVADnTkDqwSTiC",
  "key48": "5usKsT3imm8DQzAx3B32goSXQPxrZApkUHs4AZwSoLWSZgPLNTzx5LNCaTCtCcax3h2K8dxgpwJr72PMqju8apcQ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
