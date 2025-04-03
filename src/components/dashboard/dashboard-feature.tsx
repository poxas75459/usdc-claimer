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
    "3ziwjdMcZ9KFF4FEdQYEfyVYzv5DtLKCrGqd9CNjsa3Wso6LiXW1FQpb4m98t3jGbSFSVsWyDLNGKGNdutaj9FVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZma7wrkN9XpdQPUBz1Ac2M6GwVmJkvHUtqgXj3ojS8jM6YXiiErBQNWjcKmidgzx6VQXMZnQqGC5goivcEvsQr",
  "key1": "SxKYBFuVEt7vmyh7mq46k9kv1YRAd3FKmAkpxSAUKTwf8Yv5QY2PiC8g9Mhq4Qi7wGcNcRwfxKcrc8dvCnCNEzw",
  "key2": "nKPdDCvv1iUqAn1fmNeP9Lioh1tWzYL8DZhxjbcnSHdT15ZzieQLbdTyUAvZpA5Vm6t53u8dsFST1EkGWpnvXYs",
  "key3": "4hiktECgR9isBABHnLeXW9dJ4JEwyyQSQ7cWQrhByDXbufRd9WtSEmmVDMfjNjfX9Pf2HpqHCJr48iGUhE4yNUPx",
  "key4": "4htrbHtqEJYBtCH9XqkSgwkpXaTEaw6evWB8gSt8c71Hods3cwEf9JtqjH8ieJUURcRfPP8fEx2qHzVLLTZiDJSh",
  "key5": "MR9dvK5KgEv3mDejGv41Acx4wQ5BQoK1Za1sAkCNxWnu5X2uXzpTTjGAazZ6SEzzas5wUPGy9rVBQTAWnDYrgmS",
  "key6": "4DbpMr9fn1hRAtC3ZyBQ8moT2HHgUrfZDVfK9vsbBYBwVdLN3boKdrjk215b7Mwc1HmyFFNn5KuBTd7mBVPDdJKy",
  "key7": "2evEWgGpr7yYwFm8uBuxkYN7jZWXHQTgbrAc1hbSkHJk4VXpxnTWcFTYzPjW1E225XJYvkJZgw6G7dEKodi99Ko6",
  "key8": "5hrQxjeWXnxyTxturuFACYkpHR5rtmoDw83iC58nhUFm5MpaF5cWUHqu8zaCYKpknk3F8UfyNnhJhaZdTn17D9qA",
  "key9": "3iRf9NbkYSUUVTrGiAsVaGnfC19ZFbfkUYSxc8bWLWsPqTwg2Y4Pu4KgKLMk8pvVJgfb9k3tBPaF7M2MbuGnzMJG",
  "key10": "2YskXRC1ZxtEPJqYySaxe43fr7qkiCX8ya6btv1wL9dYmmopzbXM96sw3EhzkrTeABcMPvobZRYfLyxrdshPd7uX",
  "key11": "52NRuu7eEh84PgvA1o2XSVBrERJUodFPNCZrrH97igpVq4WnYsQDR88igvMAMSWMVU6DXWZz32mMY4du4qft1vcr",
  "key12": "2qkmPqj3Gku1hPV5vM5tWPvQHHs2JmkvkzSLk574WRZS8LqrDLmU95e44rRBCzZ8TefVzsQBdfh6qtfHCoiMgXTn",
  "key13": "49RHsXgdkUpSvPTgNTD3PobwdHGQjCR6qZkknUpyeUKejsfWNVTgayeqoNANs5LbnpfFWWhUHQxbpREPk1CBUXe8",
  "key14": "5VFcxST2BMGUCUoBuNQ59JdBGhd33bWuPf6fR6wM86muWNbuLrq2Giu5E4ceR5S9B3DT3oukSNswkELQffbGkLY7",
  "key15": "3tGBPA3GYDQAf5zFN2VAb7HsL79UZEr927gthTHDxDuVHchS93N94HGz3U29muK8MfDigpZKQEvtCMQuuCd3Bqrv",
  "key16": "2RsEM3RwmG9hjRbY3Z7sZaN6SdkfDtDuNH51tiEtL7bSCRCfLJsS66b3YXzW97vnkkSTvsfkCSZ7nrEhZLdihMxx",
  "key17": "2SmEfopYYhYFJSnVvVSjwgUAfXM4FxDS7BAw6eipPVMKPV24eEKB2gLCaFbsxcHtBNG8pMA4uvMG3X44qHRSQS6R",
  "key18": "3jcASA34VubyHQF9fXSHDyZjfESxH4WPoyHfHhawUspVgosoDwqHV45Dd2RWG9HvwonaeEA6qpsSjHwWi56t8C5s",
  "key19": "3QR3PDGPE8nUQUeVAKg1YsmjxfEcE5RNbJBwo5pgwUrE8rSbCoDvHBhMqpAYSXsntM1pxdomsgUpA1HpWPfgT5hk",
  "key20": "3cnmTn3hELJoRv6r8T8i1t8morqx2na5apH9quj6zpWkfM1DPifWsQAU9LReomrJwvM8PbGCz6wN2NrX8Vri5uQR",
  "key21": "2mrCP8jV7sEt5oLqHkp3pABNqwf69F3bTk7M4FA7nFbZGff6npGakjZimwwjeLotunMxTnnRATGVi42VAuezx44P",
  "key22": "3Ywm8A6EZFqCxzm1SYFriWSdS3d2wDukK9oJhgWGe57vFhW9bEGkasea7J6NoJbvfabPJJZCTiqvGidT2at6C3vA",
  "key23": "4nFWDc5ExdxWW6xi4V9ukzNBa1H7DdYENpSUvrDNAjSE9t5n5BaizuwY1PTJhGTWod6MDRY1L5WTfy8kFZow9dXu",
  "key24": "4yUug4QyiFkFwquzDqXKZXZ5fs75jsY51eNFHugm6FwezxHZuvMAXj3hiqKQThywz3ABAuKX4FMFm97KvCWkrEEK",
  "key25": "n7RXL6UJC6Thcw8NHt5YVH9kHvSkrN7j7B5mWFar978SYhW1aHKC9ta7M7m3od1pT3iQBmzWN4tcRihWYd9mmME",
  "key26": "23TWKcKr1zY2QCgp6su7usJquTzPMLcmtAM9bJVKsbdnZE8WgJyPiDnTxcKzPfgEdoWVFvMjAidbX9EoihjKEppj",
  "key27": "rc6kkV74fwY9mqwWLFXN4RChjnShKmHtWbz8KuQGNyfefVUMgbHyaNpR7Z6VACnRbAXuMV6oGts8HCK61uY4JxR",
  "key28": "2BvuUY1aCB5y4JhqLvCvHg59p3w92awk7zgoimQ2jZH5ubjtn6e6NQvV4VgKKm8LcH7quLzjDA8j9BCfFeR3mPQV",
  "key29": "43QoLErPbufXqCTBw7fe3Q6yqDPUKmZfFyGn1Fg9n29U5VdxbYJaY4fmwRXXdzpUgHzZyYmedKJE25yuAb1Sin8u",
  "key30": "Rd9ouAewfR9eJJ8tTbRVNjiVx8SUXxqBoBUCdRxNCFHYvrTEZgwAoGmmqPG4J5owqxnGwfCHogBddEx5eaGLcNq",
  "key31": "22bTsaMbE2ze66d3kUkHLpSL8WwC5J3sWnK7VPyxcBua6Wdi1VUoRphMoFsszkmjs5NiG725Zhp9RG1KjZa2rR9N",
  "key32": "4kUce7N43H68MXGqR3WBioa2y8ETx9bnPcdMVWzkTdYMBgeNrbNJLaQHYB8KGQenCWBxm8yji5HupsQ65RmPmMPH",
  "key33": "5jCFdCuVdR9Amx62SyKJTi1EHXYGHsLPXNvNNtFmpDdy5aFhFM1szpVVdruBQSXNbhrRnakS661Dh99oDPhtEEca",
  "key34": "3QycAytttHA8nCBUqa8SiiewaeEnXuXSHnF5UFghVWPmiZYxNaDGppcvSQ4xpH3B2JqGpC9sy5ux2ADSJe5XX2fk",
  "key35": "2khCFRkmVvkdCAQwndZ2svLigck6mp2g3ouiZxEcRmmFfMqaiJkR3ytCwqyeWH81XKY4sjChxDKtx61msR7eeXXt"
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
