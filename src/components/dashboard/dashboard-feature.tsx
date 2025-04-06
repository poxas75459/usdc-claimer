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
    "562L7rvwD6xUjwM3aeHE8mTbGAxSwQveF22ttKGJdHhBnr6ptAFateAKa9Hh4wzwbrrucZkegVUqfSXa3kYfwkad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzULpV1huxzQk1bcie95FQYWkGfDmnqBivQCLK76SUZeuHFvDe2u12JLdiNc6XMrqKDrA5A42Wu1G7gpZbfRSCX",
  "key1": "3p84zDuSdK8YYakPsZskA8AiwE5iFRu2KCTZUEcDGRWPvmmp6anFuv2r51ECzZNX2vRzKrEHyEeH3VUnSVR2ZgB8",
  "key2": "24jhNYAxvQXS2EmZ3p5oepyyAhQkpgN9D9vsL6P8nmy2drp2PePeAYDGJpHkxQAhpD7zFz6S7n6NY2nk1uaeqNvx",
  "key3": "4KY3i3rtsEqCLBVfMZHKkwjgDMoL8Apbu3PUbAtKpE4UrscT3PdU5KAcTxrK2xJ1Q4qnWstxMYGPU9xDcBDB5Cd1",
  "key4": "3t4uWLXGs2ZL3gXdGzn16aRLNbpjK5ccxK3JnD6ausjQFaPJd6XPLQuee3o3i6BbHW2Tg3iUUU1uLC3Fgfk9WvuD",
  "key5": "4yCDsdJ9Xqp8JfSPDzwZ8Eof5Rjwq91nYJrfUzZVAoFCJS21w84oU9btYkrMsSkFbJQZ6aeBoS6LiVBp9DZDHmrS",
  "key6": "WUpiuhggv4qh3vzicibdWtveBQJRpsw8ZZxmWvWvWAN2ED3o3epjGgdw2grTKhy4Xtb5JrZi9DpZtxeh9GCRoYC",
  "key7": "4GZ5Wro8Uv5FfnvtXH2szbjUtFg5vcLvUpihd4q7iJQdCwfsxfBg2STyZTdMxukjJPNaecDL3x7vwNDjLSeeGD9D",
  "key8": "CfL7J1S2fGV2e2wTrkCuVNuMbZU25vUzKEfVqWNTEFFe4rTbuWmgvGWYQVDkHQUUM5U84u6YPfKDx4WLTdLA2ju",
  "key9": "zY6tmUbgci4NCYFgyF2fuyrnwgmnDoogvGhMTqFty7yvowpmBDYremgtGfvviJUDXXTot7N2YfooAocDrwVJFB1",
  "key10": "3nVaoxrgtgs4pqWpg1BVhaZpsJH4DBjgWPi5Dhkc4Y1TJTUBub3PCiX8ha5e2SappPC2oSDZv3cBoEdyrxiYDuWk",
  "key11": "37RtxQX2fMeL7wNS2TEjuWYXVqxEm5tXxVUB5ehJxFpe9m6BPmiXfcnvDxBCjFxgcJEsokSGaBKhfkVypgeftriP",
  "key12": "2o1vGqoKuateTjyozRoZDa49SEwJxJr8wiyyWU1xua9B39umEvXWbFp43ZAD1jisbpa6CEQwsXCRpu7qSp42AJCp",
  "key13": "5Q5cJsT9ry22U4sCeUMKKU1X4GVJAYceBDf6DQVUCQgJ8Y632mmCbTD19yCGeD4kPLVy8QNznDk7PQ5jtuyrL3H9",
  "key14": "3h4Somhk7tHcK8iRANqPBmgQKtsRjcRnYzN2gfV3sSMqCoBFbwxTDyq4MvUkePVgPPpXX83GcvZXNtSwiszUp7fs",
  "key15": "GRgo3EBzHj6LFjFEWVC1CR74oEsQE9ydX9TpwRxbEvtnZENhLtCPaSoKRQ1GfCw714owG1a4bgwLEKX5EGum1vo",
  "key16": "3vvHt3vTcTskowGenyuXQHUEHJjjL4YjxzLsk7bboQ4yXPB39bs3Rp2zx4HjHthzVHsU3cAFnedvrXMSRNMNRhss",
  "key17": "dPr1LKEV3QfY5PbeKWi8xTu9hn485g3dASHqZM349QKSYqWMp4GaGSjDKXBZuj3jWM2g7DRkP4WCwNB8NoJ8wXc",
  "key18": "dLfysF7ivq3h7HAFfkZ5tsuEB2fXLkL2UHJmYXENhgqrkAV2j21EfyRMLKp64pgtEPdxCBK38S8tUD6Yi1oKaoA",
  "key19": "4vUa5AnFu7PgEPrvwTzDdfr45PxpGQDJ3bCPboF7Bb3Z4xtWKYCMoLYZPkqg3igLDK35kbyVRjKArNCZDFjEqoJu",
  "key20": "4yH5C74sh7DEEAvz58VGAo6PRq6gRXtXfMGFZLcQwZoNLgjL9My71moX1fgDkCvfkSoXRtHU3n4AApJx3aRFxRAW",
  "key21": "39ie1Js3NhuZiL6ovXa1BPGA6aC1o2LX8XuajovtAfsHoMwBDzrQZE9mN8TdUH6fi59xoZPCtH5o7xuGZ8NTWyyq",
  "key22": "2qPbRnCwLxXCZtvzxUdtBJMMGyv6o14L66oczwogSN7roLMtqneUKds5bQjDrybea9S9BU68gDjG6NUgFWrndTg5",
  "key23": "2GPNah5TFsYVRkoc9drJnkimwTd9zUWuAWT3X46iL4Hh3bDzohq3e5Um3kYA7SemLaZB7NJustsFXwmLwAKFfixi",
  "key24": "5ydMiiYGStcEUwsmeVLz8qgf3xVzsHhxbKPgmSDtc18WgNF38ondXX73kmHtQ8Y3s78gYGk2svSgwu6FLBndS5YR",
  "key25": "eUSwFnksPsR5z7XQzyKCJCf6svnihLbXodXCpXTkJcJJF1VZ1pHKkPpoacdNnczneXstyrH9o96zfW7ZaCytzZh",
  "key26": "3VJ1oXwjVSCSzsSs5DZrqvnTihjkw3HkbnkFU5ag57v6qCHWoW8hYY7KctrTJB6WNw5eFnoAGmXj5Pj12pypxbXn",
  "key27": "2z35xtpbNofQEugKnQbYDEKvqE7pnjWFBR7cYtBU1JefTh8j7F6V6jaEiePtGgqfWxQ1WLNVBDrXEmAnpdqzN7ay",
  "key28": "24AeZuNcuSkPCqof2PXk8eKEL9ZdmcgfsfHoLSxr6TDT1nhRHn5VxUb4Mp993iHj8NkDaaewbsNtv5RNUjneHyJE",
  "key29": "VZeT8rLqb72rtN9ebisGDo5e9NWsrQh9KjrZKJEChbmAd2gwK9TRtQ6tx1bHfr1d9ikeJmcYywJ9YWRdJ6XvJND",
  "key30": "2DLqKwp1dAs41Y6s5AduZ84QkhKvLutcKLTK2ZRspNdMsk6ZKEwWgMc9AFdYHJVthoHvBCQh7YD6nDup2PrzRhki",
  "key31": "27xLDfLB7JqRwyHAFecHfpfPK3wvbRKpXtEYWuPZAZK5xE86w3CFnoqvLLZ9QvxJ94mQLqNQaKvD8d7B5p9xvZoB",
  "key32": "4am4hB89mJpcLxAEmeEY4smcxLBobrYcSaiJud3zox6r8M9b76kS8gWzdSfYUsGtVtjwUxpxDdq3u2ht4cNcJ8ce",
  "key33": "2pDy6YVMtajrYjS8pNZsN6gvCiwAHSjATgExEGHudtiEjg2JLYTxpcWsoogpjpGSvtd6SGrtERPi7P9Mxv35poJG",
  "key34": "4xrTNy58kmwRRvcMCHFexmkts3i8joCrbdeJHWaf6QiUBhnANSXvnfKxe7KL9R9aHGc63CEV7G3TDLYPkxscBKqQ",
  "key35": "4fyas2XVothtXDTvgWpP8zFsEk9vQna5up6C5TkyeJbid7F95VuuHxu8nrz5cZa6eA1Q4dWXeErbuRL46kCsmm8u"
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
