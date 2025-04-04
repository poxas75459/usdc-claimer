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
    "F18cM7LrePp5aNXZ1tTdCPYqb5ASWmcpRPbNkvfHBxdgLHsNtgsXQtfcCmrrypgwoj3eUCxa2yd3C1eioUirzE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBskmhup91BWdJ6Xx7s2u8646tqiwMSWD78sLkng7VFgJtQ6LMzj7mPC6VuZ4EnMvX4CB9TTRvLXodZWZfFGh3E",
  "key1": "829Ghgu56weQYp8e8y869JR1zz7UWZ4BVH36W1XinNX79Jy1CF9NjnHVxt6D3anuSnshRK9gDjzWPsnrGn91mML",
  "key2": "31T4Mjy1RCJW1xwfkPBmnFzaJNBiEAWPaNHtxoPEwY33A3Jh9Wq3umZhGs3EkBv1EJxgh4TA5F5eCPTjYAnDCroi",
  "key3": "9owQ3No4SSDLbph31gkbJWnh86DofyoCfojGFF2887QqWHKaf5FMwsx2J6HJboRuJbQLnqbdcb8dBj2GyPZ2mim",
  "key4": "63RuPuvVwLKz6H42qxiHJc1exMg876ZVKjXKFzbcs2MFc3eaDkBksDVmeNKNmQ4BSQKwDbpqxRdV84F3jr4LNa2F",
  "key5": "5FioRm8dGocs7Xtx33KCJBDnt7TRxn2nucCUs44UKnD5biEb3VCs84tYKUuVHyPH5wdbi1CrbfCLGj4dykMWxBAr",
  "key6": "BB6xU7wFT2iiAqF8m3cjZG4f9nWe5zoDBwE6xR1iH8qvYwCrwL7DsRQByN1giPAiY28CmiHLBSGfEkzcsaa83HQ",
  "key7": "3VvKjcXgCv1WEck7AQzWBFsjGqrK45JyiMUx11gmGyfY3D1mKMFddd7THG4ZuvvpkNQWRSVv9W4SRXfVwm3wYPnY",
  "key8": "4ufJXnNhaneHSEr9KAXqNh8Y5KkLwgeaFWYzrH7PGW8VnTpXy6Xdrywo349NsGv2DGu94YQF6mYYNvpzYiPVAntF",
  "key9": "31SQRLkvBGRHL65WVosjE78si28cdoYBZi8Un7hb7fgoFmpm3cvNpB5RoYHpuZNZWzmLciULRr7PiAtdjv6sXLDL",
  "key10": "4f43NABaLBHAqG3A9uAbaMuVnPyb7hwavTrjEd7Qn1ycnnv8cKw6tqrMCGj3ukxLbSwW8PSsAsQfXNr7YLXi8eDd",
  "key11": "4ASyCxFZtG2g6MhDmzcGKUuiJ12XLvBVPhwDwmmnYsRZLF6gE2v6DkqgRrTsQpw2wtQtRTaeWNaBmtdzw6C7ajGS",
  "key12": "3MJyMsKz9r8P1MY9p7uXvBjvVGmT6Qo9PSTe9cpivwezBrpiEmCTKAiZYD41bvpi5o9rCjwSKj39hhoFb7TkkUfk",
  "key13": "5rhZeALi6b5LrDssB4Cjn5Xu29HAXhGhTZz6PATK4LntpzMuXiSb7bc3h16UEDNeuAVCAxrqTpvGw1R1nZnMgdKX",
  "key14": "5xpDGq3ZTtG56k5GahUC5y2TnTxwbLcWffYNTsHeCiqDRtPz1oGGNtT8ZUVBxF2REEYnYjvBZTSCzp2YoyVsN7zx",
  "key15": "4HmhTyBbWPVZ7VRRo6wvSxJW2N95mGA7GJ6PxVM9ikCEHq9q8vhauwPmhD5qoc823Ea5Vkqv6smZerSBhXeRWdwK",
  "key16": "3ySAVC5V1WwRFAdstojAxk8kRXYUXDBCcPR37pKPUZ8wZ577fm2sTAKvgE8DuReJCHvebxyBLYQsPFZdG4PEwZEy",
  "key17": "QLUt5wVhPN5uHBviEZYLhauVb8iDmcQLfgeCLSjhVSvvyzqkEQweBGt7yEAf2iqpAvRH1vQTnUqNMpBGTtG4KFf",
  "key18": "55Ba2nnztwGTH4NjrmpkEVC3w76KQivMQMi5jenzbGPLAT9MWCAptmjD7WyQJWdybT6bk9svERgeynjU1RR2fWi9",
  "key19": "RWPvyqAn4BuGRh82CyTxc8jFP9eA6wakqpbwowogGqyS27pj4HcTEHN3UHthqmApMi9HufKQFkcTZeLNBEC6778",
  "key20": "2UrTYLbNQNVevKVgPwL3WRqKwXzocSvvELhfASuvtPpWkSvoBYAaksZ8SNSgz6W39drifnqPeNbcGoERfVBCGLhw",
  "key21": "46xsu6wvMV1u1uHvrChEPoDYaAzhyhaBx19oCd68Pg1FYgMCccvSM4axSiZbwgHdVFe4MvYGii6QqZ5mM6Edej1a",
  "key22": "66fmodipVVdHg9ARGw4YpCngeWeUP3wWRqirtY5g56vWXAXWi6h8uYAsYDpkz9BLgTLMsxRoKZbaJbcQQUQj4DCP",
  "key23": "4XDWUXb34huFjVXdGPSRbW98fRQ1FDm3CVJYR97D48XaJdojJ4vbXsXxN7WxhViHWm2RrswXkgj4ENtuTczTD7Ds",
  "key24": "4cxWkVwZ3rdx9MN4322r4t3UTNEeaMPQsUAQ8tFw64pcJ9CcMMztTkTf6QKUvMMNAhfW4zh9Wpto2ZAXtkdP64JZ",
  "key25": "4gKxfYXq3XuoGWHPR6bZD4nzvbgwLSbQ11A9jnqP9kRfjRQAPKo8Vd9mbKwxEux6KWs59NTcSZNaR7SpsKxDJU5b",
  "key26": "3rpTkpFodBJZtK4gK1gPDRf5mY1QbmxEH5oUfykxsxsrKyKRUAHh1HkkEPf5H7jqmmBHec7sdHsNNXpRRMDLuvhR",
  "key27": "3pVRnTNyy6adAskswDWXG4MguwgoWGkmptFdMYRqnH8TEsBFPJVKFeQMaR8qz5euVEtJL1w4X7dVyrTor2hBDBH5",
  "key28": "3hVYwV9bQj9La173H6P2ehWvoWdZHU4SpDuRW9FU17mgTirBjpehMf1QUTyf4yuTqwJS4JSHWmoHYfeXXzBLHcFV",
  "key29": "3GzqFzBiASU4q8ngEcrDyzbeYmNGmm3ToAFidxZDha8YfaDE35Eh1aQ5PckMAPMJGfZbLwLWH7prNQWMXvTHuFzw",
  "key30": "2bi4cWQDKECAW57gu8WewFSiYs2c8adV5fYCxXb9ktU8bDaiL69TaLYRnGeHgShLWeX1RiBbMQDizGK28FRYfyA3",
  "key31": "kQp3JgE4pQ2qW6KVkcjMbVVNeoEp4fDRimGrnXgKTLe16QZoRfCw4jZDULykG2hPRhmvyj69zHGy3DPYJ272Hn9",
  "key32": "4yQ7RKL44FMgKCumU8nTYvsECAsx628U61qQMf3QYhhDYfANCMrg5J8kjiNpp2mpkbseA4pL5Pbea9GELfnsm9US",
  "key33": "87x6EzWtfviiqBaJ69MhisuFsvTE7Vjg9bvQmnhJPdpHuAtjGEZfUGwWGDWW5z3fvoXyVNQT2useobD65Vc43tn",
  "key34": "H9vRoYMaCdJpezuV8nGVcr1DZF2DBTm5WzLo2jzz5k6DSRQ1cGc2fReEbNMjHVFThnhMt8cBvN489mQdyuY2CtX",
  "key35": "5HfyBsqydASNkWoFBTTdEFzwgYtRVFhN6fhV2mLFVjkRcj58yTX46rRjpiKsU8uDg6on4gExwVv5S5k4vfjhwN5L",
  "key36": "3ZFsUkZ7fdd1ksdh2ZeuR4AicE7jykQU7zcxoRrk3DKfXTfpRCC1pH1khhGZb23d4CHAB2RQ73YXPGG85wMLyC4M",
  "key37": "34iVX4cgoCewZjAUTNfYd6Ravfn986yadrjrsTzTTbsTARYUwNAKQo2mYKgz1B81hV34cgBHvRGi1MNakZrKQ3kt",
  "key38": "3DPDEAt42Gqok13YtrAssiHkRo8BLdLpd9yojpo2sJQkKWaBXBXE6o1fDckWzTR8kLXEJMhPncjvuULsaUBJCkXx",
  "key39": "4gXQNLo5fRVnAS3kq7oAVG1TPggu2iUKNwS7hnbwcpErz9fVs7ShjXBtmP5WVG35ik2xeTJDVFw7DRS83C6HJ1BQ",
  "key40": "2n2QPybFLMpS7uaG6yXRisuh6NLEonSQqCDDeuubqZBP1z3dfJRmKvkPX9yMMgy2V7Roej7ACaYa1eCEEtge9S9B",
  "key41": "3BxysCww14UNHYpQPnjf9aPyQ9V6okSW39FkfKLFStfpR57paR3SbccLHK4EDHSDbX2T7pvrXy4wEhN1ENyxh8Bt",
  "key42": "5YtkfZD4dw4Sik65f8NsJBLFhNvr3m2ucBpPxgfvNpoJwJobcTbgRm5K7KRSmiULRxThRSn6Pi6mw8dJvEouNfno",
  "key43": "2EPAZGNqRhftsf1WHDFfKcqMYd3cFCqryJeBw8ULPXPkroCjfJerHQccP8VGBwjbV7uvuME4v2NdMi4dXn97jSwL",
  "key44": "Q9E5d2P82dReK91jinPg9FkDs21V8SdNVfStDcpUfRSS7dAHJmsKj9WU5RD94T2Q9NDNkqsTprtKgGwqPVp8pqE",
  "key45": "2HyfE9kTndAmJAsFAGTVdC9wks3eLCYDqVAp7shxmrtntQVvVk9gVXyVuHfCw77zevVHTDCayCpkqBCm23hC7Tmi",
  "key46": "3k3s3GH73ivrfMihWk1S6KVyzKw7Y3qUby69vu8Ww4Gq9nAZLBHA8fbTmTNBJxcGZenSR1jfZ1vveNbGev9RPEMP",
  "key47": "34obaRKSV64GyCJbexjhpAD4zdfmzCEvVQdHdsfLLF5xLkAMpC81hS5yai9jQYQaaJ5f2XzUHHeXTi7xjXCzBAti",
  "key48": "5qtGFKenBbPTfF2apM6g5uqX829PdkxHqj97JSNumrj7L5Z5YgCvaVA2q3vxhqLQ4ekfi9yJQGHhdPAtyjYfdsPA"
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
