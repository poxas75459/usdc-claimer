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
    "XnF1o2o1goRRVksNXkK5nQorppf3KLApr2dcPs1dgv95omnoAyxXii6FTx5Gzq8YvmE9zcEg5Kx8gi5aLidZqdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1yxyXPUj7wBErYczqPmx4VVwDDUHE688cwBh3y6z8jpoo8n5xoXzBVrQRS1RRRHKPgQPna989vMdU763dFmRMX",
  "key1": "4XJ6k5yUBCUEzbYDU3gvC3MKStqX4CU9DeMSGE6d3qvBQE8abWoEWKwDianqTC6FYbb4q3MAL6DPLzf2RfvpH1yC",
  "key2": "5yGeqSKfJQc2Vwv1VHZr21nhbd2iQE8JFb1MJW3MTG8YeMxHP3zTjwza5iZ4cr2DnS6EKson2aXEkqPwh4WckHz2",
  "key3": "66v1rEzPFoS9stmBMtskYswY451qPztziWeX2XNBtEUg9kt3VJ6r3qD74iHDWyBXno5XrcmALth7GPygrctjEsDd",
  "key4": "3wwsg88sandPg25ztc4HHuYtQmUAWQo3fA5nUcez4uwL4fXmgWvej5SAnromJo4fvCcKmJpb6mE2HzLafDVjPNpY",
  "key5": "ougmKdiZFbmqc6aEgFs2ZJqDUiG1MBBoa3kTsRhsrHmHDj2KDfPocenWFjXQEY9BwjosUPL48GkShTKcPzaKXkg",
  "key6": "4zxZc81D1gTPgbxznvxhfHQRFZHbdhGwcptqqThyGgZ4hB1PEkVekzWTSYZfjgSSxQ9f8ZxWXv719H9xteoFXKVs",
  "key7": "3aYBYeUPMpvnLPR1ADhhcwY1gVpYskYm9GALtmVKVHrcu1RAbSv2CZJoTYcGHZgj8dC6xY5tNMADKL8bmm7pB9Az",
  "key8": "3JHm5beMyDkkkghjn1jqniQub49bySYfnTHYiCEN222jZM5LnQYQXZ5JeaCeyqay1mws9MNMuZuq4pnTGZd4MEpQ",
  "key9": "4kHpTs3ccVm6vy4bBkENdttZgC3L9ZBgz7C37jRHNBUvU8VqerrhFF3wVde2pYDBCd2F1ovpJBXJ1F8YuYs5fWPe",
  "key10": "4QL3v7cLXkbU4DqEHifskToHQw8B9NKdjsS1euNf4oJoxXndPiWavfULooH3PS7xsqKiGidzRd31jGYtjWKou2Ld",
  "key11": "21hCXndHLifpW4g547i6JxVKEFjdDH9r4je3MENT7DtbZWRDAMkQ42qeXCL6AjnHkD7gqAkQT8zzg1jAEuPk7BAs",
  "key12": "2uiduGqKNQWAbsxPspbT5CcLMWBmoHBfoj6UDWFxBPUuQepNQwDio9LWHHbavr7rpxZ7m3jXPAUr2mRfD24Vxb4V",
  "key13": "2RTqi3DNmS34ptmxtWKjuAbEzXmTxh44ebz8qDBTV7q5QgJsRHWj6bCgGecBwENY8tVYweHAGcemLFFzwWbZcd7W",
  "key14": "4AE6EnnkVeGh3ggCFgng3T1ewMPrqStvCG95qfXFPtZPyU51nQeHx6cJm6E7rFeizYvDHjHa2ozBXcGCXjzDqWpf",
  "key15": "32FAX9ZW36SNEpDWQLTvVA8iFtMe5iJnuY4536R4NBpZVWcFBUiCY677RoqT5x5hLES67gPBatcUYJ1R9zPUy83K",
  "key16": "2VqcmmkzFsxDuUgPefCW1Eqkz1fEUnKc1cPpM8Ks6nKjTShzmomdm1Qx9LwqagNi4shSp1NUuvBEfVHthmBjjwDj",
  "key17": "5pBFA7bztZADDa7WWxWQhEa7KkmVr33kqZJP7tLRx4uhSfbMHn27T4vieaaJgDayHiRPpGu5FZnRgNmvgsumUmfc",
  "key18": "373XJ5htrL76tAjmJi3dKFjoSryNZFBR7LxJMPVQdtVCkFfetWrCawfehDJQ4JyDj69pAA2WFUgLxa8Gg3qCC2hT",
  "key19": "2xhuqQgHuJVJGPjSR7VxL49dbfyghopXrmMNo1Bih9woMmBJtBGb3U4Acgvym1S9Zha8PCgYW7awabZV3jVz9VP6",
  "key20": "c5yTv5dCncFttdFsyLj192HoB3EdpH6JKuqQV49kdBhfRDMen5NYcVHpc1evbqhVKC4eDX4rBYKtm1QdqG7JYz6",
  "key21": "3XKYf51VygA5JqSDDFhmeJdo4pju9Kt3j9Bo5GrqBhmqUwssQWcF1NncqkTZ1eNtfuJ3m17YGPcdG3p5q5kgNDeG",
  "key22": "4J85YskJ9xV2t1S23X9FDzEKdfYHZccmdun1kxeNd7fwUTtiqMB7P8Jr5N4gzUKF72Lhdfu79v9q9DibeRhz5rNo",
  "key23": "2Xu1HSP9T1hGbfDHqLt67vRFBUceeesZ3axB1Sq292ddYwx96WhcxxzGXCnRp65ia8GnNPTg41gQFSqkaxDPwaSQ",
  "key24": "37BgLFvs1CAnmGykyBG2SyhupXa2q1LML2qxc3cMJQxw867cksKLd66dSRnZdo9iqXX6kHyBgBoGiXhqgrarNWEV",
  "key25": "3TVpZzLihvUqYe5aEGcqgQNHFSkiSTxuB5CfqpZmxuMDWwY8SRbbYtkyyuCTfhCWg3zprYB7XDX7NbXfGFwecTut",
  "key26": "478yM2XxzkSgPAse9oz49bNi6CBdG3PfbfLq4H9RqRton8XU6vxNS9tkdG4cMN92Vvn1jrzVmGyPwrzKTTvaBNGL",
  "key27": "5uu1Xx17idGh3Tvjkb8BdTR8Dmj9KAtwSW8xZsw5cwPVTTdPua9RWr5u252rU62StvDdnW3E5SahCwsHsVoNmxdF",
  "key28": "2h1RNM6QmtpAXia8VPVX43u8C2F75Ez7URB99fzasT3f9M2kuqeqviXW7siY6RC3Ku3R6yhBAsGWY4Yb7HbtigjE",
  "key29": "5kPbBnkaKXeSWD2nVEyTwSWUgU3sWpLq985r2wDMtRqnuWJB9zG5aYLZeeNE1RHqgdakSwJaUuucggKqQY72RmUp",
  "key30": "1jfnN3DVo572WwuViMgwHERTnCYvP5qkNeSoM3Lpz2wmE1m6VnkjhicTiVRPAkD62MSskyg93XmE4QEFmRnn41E",
  "key31": "4swrSD4pSFjwTcifNPSBe16ciLnkdWJVGwE99GtSbMQEnXVRmqAzvL9cwv2VWnewrkmQBSsQmZDBGmwTQ3196K3z",
  "key32": "2Ez21iZ36HpuXQzji1v5GxP5at3zorUtFFAnPTfhvCyAxbGLsHTaqrmsbcPesguPn9reVkgaUcvQopnjAbaTbfpA",
  "key33": "5PTBE5kHFo6Bo5hJrTyvXBZp9TgaFoJNooNwtJXKycSwyP1jr2MxNJBy4FRJEoEC1nXiRWPNTQzeQzxJMs6uPU4D",
  "key34": "3K9fYbPHcRGeVfj2jdeqde38oQHv7vXGci23rmBDL8fx9wbJHvv6LNq1U1GfnLXJWPRYqfqnA4BAb8yGJboFCDtZ",
  "key35": "66Htz3Xeo7Vro9NUMNkS3FLUXRLaJSM6cYxUZ9oFmB38qMzZLCmC5HDxjhN4CsjqcQ6ReyeccVLNttWXTXpHSAzS",
  "key36": "28xcrvXpd57jnuTNxM8ntQG25ZUT2XVaYGK7dUzjxUnXC4LYXg9Ai7NdN8EzpVS6Vd3m64PJKUu9d4NsCXVhmmMY",
  "key37": "55fjzPCaPHRwb7EDcRjyL319AbMKvCdkCn2DAxf2xmtdnUJVCBST6P7dTxDiDkFSinnPz2kdarerhtVNW2UPq3vZ",
  "key38": "36WXSJ4igdJ3S9wRXxmS5h7pGDQ2cSThpTrGNnmhnFdmdRYsXKcUGLBBRtNAaynnTHfPRTj7GsJJ2VPzatMiXPmE"
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
