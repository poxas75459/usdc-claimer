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
    "46qh2BFDzdFtvgdhUkE9V4AXvdhJu5s1McbiSr4UKrYchMQrohzPduB5rqo3XRjk9t2gMYT7MRM9YUwNg5FPWewu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCLhaD8oExegW2CYacFXVokUHQ3qNkXXWqvW676hstRmTHuPF5wHUwKuqdPKgEUi4uvQNb22iSCm2Jwc8fLzueW",
  "key1": "3Lw36FE664QXTZDXpKvZ8YsWQ2j3VtzRHkX3myHBq3CzRSkkRj2f5ofYkeqHaq8LsBVgoBHGd9S9J8cEHgbQhRVg",
  "key2": "4cWxJxCFrJjHPEsRdqj4DisMQcNd9UbLRCEuN2N4UDstmZTcndynA43roatLLMVB8eA9hBt2cz9vjFqqCBZkkKHv",
  "key3": "4a1UFXwpG8jQhXC1MMh14Kzj6Sm8hQkfSbARrdaTcFyjTLcYuc2otSiTkdzM6NKEC4qWNskg1L5hkMGdSbuXszh9",
  "key4": "4e46VPxdygQ1NzVwyv8ooagidr4VkoXYjwmv9PQPV8gPc5LhfzbxGnL9127mzJamTsWqBxAQiWdyhakjYmCRGnuP",
  "key5": "4q4UcUxYdwHEALGHR7pn759M569qJT1mNYoHyBJxBVwJyAk7z1vRnr8tXUNBkFebZixHNELtqsicWpfbEADyNyUt",
  "key6": "5rDcaeZZin75yBxh6LUspGKnUQVkWGR6q2hV5RaNk4NUx2hxFzkm9FpdhiFUANGvydwGnyVbR2JHDKTTsE8T6w2j",
  "key7": "LtHxHY9VZL6MXBSurNLuknSS2P68bwTtozWrp3mgCEdvetNhut9fp8QJUMasz48Fh6ikfPb3sGUDMNhUTmPw33T",
  "key8": "3NFbk4SwteAXUHEcuMyoN6bXyukCi8BhSe1pq5RxkwyiveptAFBabzp7fcBAUZF6rnnMpqDiL8E1GbGwQVArG6w8",
  "key9": "2ZzQjWkpjg9s7V6AY2McjaDwBzipBDeV7dnXuFfbocDxiXT4wyc1A16BBm5dzWE3JHdJc8zJhYCC9Yk7temPCFvg",
  "key10": "2o3aKDmCsJNui84zQAkhc1oy8W5MXPmmahgGzVbrXe39exfueWdFAG7JpRVbFcXoYiDEnaywAxJojpSo76TSHqPU",
  "key11": "5cmDGaEDZuKWyF8XQunhesLZCYmBLkoPbMXdqrqXXCyiUPQywaW4neF31Xm5GteDjqZVSMVsUSBxyhSS8TCfJjZZ",
  "key12": "4EzYrpxZXVGDNrYhzJHgrK9FpCj91ELA54BWsJjb3ev3sZmh3G4YGxREQ3dCz8FdFP1pbzBRRskXjcdZvLY3hjiB",
  "key13": "z6Hg5ki5soYoPHNGeRFMydrSL1itmwDriSx7K7dguCxuRFYqhCtB44ctPL651HTBVinBcFN4CXRC4VvfnR27SR5",
  "key14": "3Wxq8NqbN9UAx8qmvr7SRCk2Y2DM6iiBQbPJzjvTzV6L5mmJduQ9Ru1FJSEewBM5KYndVJVTtMZfc2Vif5mMYQWX",
  "key15": "5GdZmNh4Yn6Yc9b49JKpzmbo5UoKKLU3wwadxwhq6RTrQMjnJwxmzYeJf1TqTPgw3t6K4oiTSdypzbL5QnKan6EL",
  "key16": "55gwzi8f3cJ5PL8aeJu2deWqyDKeEFBLR3SiLNWadM97z8ciM39kU2pbZrMAsKnF9HRNuLhpfP4qnsQDa4BHW9uF",
  "key17": "4x7GcoLkmZEb79GettaPUqBHZ5BnaPg7SYMz4oMzkC6NiwwQobUFLBCpt1auTjLbSYvf73j7fVWeRsqM9nPWWoE7",
  "key18": "3bYgpx1xQKLwjL34am52oz8oZyz9wj1esXAeaaf8R2YBaYy5fY8xxMeW4gE1pyPfJszvZFhdUZFZrqjNv1WfAxE",
  "key19": "JMnM3QGJjpxhU6QJH39wnRmstyAWUXH4Zd1pjdjqPCExR4DUxix3hq7jyjhqMxLkaCauJcTsztDrSVQAUuKzgua",
  "key20": "9AgP3hSnwH4wuK5CA2GZB36CWM9K2yC6inhbKZCcfRSu2XPWafLoKoSt7P2dPzW85BPpHd5T48D7XhiCwkV1mWK",
  "key21": "rFLCBwa9WLSjLdciqSucuDJrDkVWXvFTQuM49vfxFB4qWxRReYtrvQZjfqyADQcX39f2vcLykDNQZJkJBgbkATq",
  "key22": "3mQhDLXsgLP1Vx7YtEmSpkYViBUFhHEkEyerjhuYEGwADSquPFrNvxZJAHEUE4mAZ61DxmmMPZpKjcVGF61TThpY",
  "key23": "5gWwNusR8wFtuCXbfLUBspUy78nyCh7r1fF8RbE67z6DmKHy2wJrXcX36g8cFYscMY6s9L9ZpmRXX28wrV8cKyds",
  "key24": "4EYWDq9ZVcVdQLyrq5tornUcbgjuV5Pj3wNmfzo3yqwn3YDX1e4K5sNkRyjHx6fy1qi9irEm8neU5oY1HwNgYhmu",
  "key25": "SsEPcLJGaGhMpGpXeG8BhaoMwqQaL2n9uPtZYpF6pizNmEch2sbg2iZvYZUCRV7aYiBV7mXMTL5ErpyDrgfGpPz",
  "key26": "2PAf9pFh5FQy4PJVen7Kmdgw7NNKRzXy94gAnAnAqNQJ6AVQUto9zPb2uad2MVGby9eaSBZTGmCqPf7vnPj7xDyp",
  "key27": "43RRJ8sCVCrJoRjui9CR53BVQpYjtouPCyFtkP7CWVBdKvMbq2CRiFgo93hcWfQ2wWycDgQqF3Br5uYJt3UPrPqE",
  "key28": "3Z41TnzkPHk82eafGGqkDu5g4CK8JTf5nYUZMabk7WrrDXdnKi7g2tfSTWEm2bv4bVSRFbUtg4HmBYwcLm65He1n",
  "key29": "64Rf7pjWpKS7e6bCJssTKCHFK7HZ5MBCPsaFXTQQTykNDx3WLQBkd7fYcTEzAg6izs4QCJTx6Da8AD1Rgh6CBh9m",
  "key30": "67oBL2eJnYXuhLLmFn19BRgb2tLSTGHYxLp7sG1Cwx2Np838bqhRkGJuhzYoQnxSdWpmT4DP6pNvu9zpjH7xB9G6",
  "key31": "2F8qa1FDFVbSwiZggqbMpSPi9ND5LZceazCVKJMyWhpWNwiAx49Z3sFxSxKCEEx63CRkWh73kk8Te1bvSmZsz2BF",
  "key32": "3DkXjbBrynzwYH8BWnDJC5B1PyLvFKz75rn7bB3H3oJu8F6Sbjo3MdRTwDAFWVDRoNiBUrR4QHhLHSBYr7WJqaKs",
  "key33": "F7YruGz8fPcD44SqUi3wBVXZWwUMMtH1zedoMGxdUPnXNqx8FXVG1A1uccwiVK3iEiMHw2ChrvHyR7Ex8beJBF5",
  "key34": "4qS5SCsVufPpbREkHuTSYibo3YvfJHwpomLft5P7gemz78Dw7Jun8S2UogFcR7ra3s8SYpgtVZTuyGTwuSorjSZS",
  "key35": "2kbd3oB9YPWPPub4Rhj6KgwwJrqMUcGgzVvb2MSUHs2zb9PgcgXeDuVqUUg3vPqFJ6njxtZdpP7Bm7mxbRes7JMQ",
  "key36": "3PtBrLsjA5dkjsdVTtY8wZvtuBgmd9f2AxK46LHhLjqQU97fNEy3WNBNQgm6QNSjdAwNAVtGcAcBCRDJCWjzNf6E",
  "key37": "5xaiTzCbuGGvSQGAvBpuFjtDBaghBFc9WqmyeEAEZf6b7bzZMKfx4cVcSuN26VA3FAJBaimayDEgHvF1pCTeGWyQ"
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
