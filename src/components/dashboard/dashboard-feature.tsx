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
    "3tezuXzCDEDW9nXurEK6G414BjVgwhr2wPzCmBtpnHxZCUfLggpHzVLVvNh8PZDkD32ar3vtxZmjbyLRKCHHBBbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xMNdYvPVsf6bF3Pm3ozTywC1RZ6oV6fpqPhSNGXJ74vqxwfvy7C9gJ51RN1Ksac4UihUFWenqc6hi8ABZHbfVKC",
  "key1": "uryq6oZRQTWy4NjH1Un5GG3h75jLUfiNkEgNzHfBvvhjpbDRp8RhQ9vUogHZnfXi5iy4kHZCAjjGDFcfuePFR9u",
  "key2": "3DSm4o33wBxaD6MEuTQy3boVeanzVdChPfL5oF32dsUGBhkkST4V3MjWWU8vLNHCfp3ULjmP69gg5j9Lf2ZotsPx",
  "key3": "2hNwtnFymTS9aFX7gZNFtsZHm2HYah6GjGqDop943mDs71oC52ETBQoAXK8guBRhqXPNskSSqYCM61AmAbsbrGWc",
  "key4": "5TgrFi9rRz8tUsMb8KWQDd8s1y9oYLMf3wSjSBazekdcn9cW2KR4TGHTrMpheubkByLtYC7DE8hXNLonvMJP81ap",
  "key5": "5qbKdmZFrD7BrE88RM7rhYn54TCshW2RhiPUty4KRJq82tpqESMwbwZ7M3TkGHgZ9RBKXA4kpNoRoqxsf1UPncjJ",
  "key6": "39WUEU3PrTDHQyeMpQkodCs3MP5i9JX8CRQjTvxyus3KPkyrahAf8d8WPWsnc8XZCb7gLYMFWxwuVeTmy6Bphtki",
  "key7": "2sdNzfSar8fYFgSGbRHsv1cVdh4CyfD94nV5qBbfja2pQf6EMYHZcQUQGWjvuYfZush4idVSRq3ftxXT2hhL5mdD",
  "key8": "3HUtxQ28NfH95d17hCh87EQZyLPDa4f33og5Mhx5qxKBGxGBZFRUTWdDWuoR55mGrjLntpmWxaXc1CiToEQW2fFH",
  "key9": "nYqSmGVQH1WdVrWXzX8MSXUF52U6cUMwdXjnEg5EDbPsKcKVb6Ltn1jhuWXcoF8wXSXWLgKUgyzdxprEaTWyrKx",
  "key10": "5AAf6b8N77tuApiianWWixFrGnHyCFu43Ub37ZWAST46MJZsNJgZS6uYg3GhHXA2eU9djyJAyhtTS9CRo3kFVfde",
  "key11": "5Fjbx3Q8R2EDVatNyaapTAYuUjMGFnAqkL15jeyWZivR1bCFssxbW8FcrwJZ8jkdcySYm6rPtijDAKx4pXpxqtca",
  "key12": "3HJSGuDYjwBhkHeH7JEuXsowjoU2JEBykqgMJdozs2RdQMUqWo4tUUwE4F1d8BuZBKLg2umP4Te4C9pHCUJbrguF",
  "key13": "65JaDTJy6ftm5seEpsyDPbJsnNwaVoFxkQKiSxZtWLtPPrKVSXmtKaaQfjxKweroMBH2bntUAQQVeVZjyJVz7JR3",
  "key14": "5M6rYaJCroHTX9wmX7bB7FvskoHErLMq7WczSrqHyxvp3mAwCxVVrETMFzkmZ5LBn8tHggmpVvtUTRstdXBF3QNR",
  "key15": "3G8KWAvRkMB7JH8dYLturQ2itUkPL58Tq9cf6ZUHD9nB6yJdq73oSNeRzBetvzd7brDg9deZefaDund27zoFfkQh",
  "key16": "5u1tZwXxdTa9scPaPxmTt9SS9zwJFgepQzJSawRfBFor4T9fJi4eeCjfwzvx1TnEtbUy5DgEPpgJUhJcYHP3PYnw",
  "key17": "AVCwgnqxtHhVeJp2j12Qb1n5tgh1SHx1xRdtT1DzaHLXb7d3tH5Qw53haCHWrre8dN8thSVTgpSUmkM8WWiU7Wh",
  "key18": "2ZAaULpdoWW7nBRffPorwhhMgE8XFiZCQojx2UPdDkqwBcydfEGQAcVhi9HcgmZJBoavvAQC7aywpKDgv5QfqGcY",
  "key19": "4f96xSDd9U4Z3AvPbjJ26nZSc5NdTs2ywZj4gwtegG4ZmMGCJsQcxpkJs6wk1yqCziyQHGYqPaRdQw8urSgyX6yC",
  "key20": "4UoWgz1vG7oRvEMaMBautEY4dcKGQJZkfuTZRNS7XTPrwBAUQoc8mh68m21sFTDKNdovtqsYjiV5TS5tUSgMgmcX",
  "key21": "5Ragitu1xM2pjcNrshV8BYw3aAYPKWKMurXDDTj4X2ad8iZQxwmjyCoEGvCz9L56h8E3uZQE4WB2vfcrmkQ2NzSK",
  "key22": "2HZgTkD6BQyEJ1gtLVuCbBiXdw3PHXnUQqzBTnQY511oEEVLdsqx872c8k83fYuxnuzVVT6BsXEyLjjCpGNwcANu",
  "key23": "3ArEHLoZiKbbFk7Fw8wFm51boAAF6BzKPbENuXNXEBmusKjEaJbmk3Wuo8riTWhTPHPFgDH2sTdDZhT87H4X5YJ1",
  "key24": "4o4GjPrq3fmsjCkLAcbkg4PhyEhyz95Ym7xgtdukQgCD7mRoGSxTLDvQEDiQwSxu8YTFtV8csjKWrPscJA2zXKWj",
  "key25": "2X3DoprGCDefefAWpc8iiyA4GqWcFXVecyBuJPGHondaox5TAUgHKVhd5pwnQHRrNyqpgHvjXcVkKFc9EY7ZuLbY",
  "key26": "3xTqbhWJxn6P8RCowDAMkcsFc3VNt92nuBMJkguXF7mxwkpTDLywnwMnBa8fvr5RWHkRCmhvHTgNuRULTouCw7o2",
  "key27": "h3sjQ29k8ckEhXPnpU6iEUUCRh9rV5bjuSyijAy7AnmviMuLSb1GGeTszWHwmg6P8Csof2sdWJjuCm1qzWihiaD",
  "key28": "4B6MY9tPH7xjr1MDqFwQQCWHdjGr5GxXbjhDmWxPJVQphJ1UbuX8tH6x7qAUsGGEe5B1wqG2fj5dDv5VKDLz1Aj4",
  "key29": "5W9V8rTGxvPJ4utkD8s3nyCn5U9FDksggvAKmVszQ8Hbm3oN8NWDZ6bkfsouonFkEkYQFJoRTzbBaaqp3xQ3Bk7P",
  "key30": "cArKPQWfZiKZb8oaKoQxW4d85Lphai2wdktzTcQQSVnMwYDiCS4KGLQG7uPKMaX2X5jDZHmQBhK5umKikhqfUmQ",
  "key31": "RJCK7fXXy3Ka1AUqScUr1aZ4m62inRvk9FrnBEWQaV3WJtbbqFFxYRgRNaza6dFTXjKC1TLwuK9qJFYQVGG14L1",
  "key32": "idGqGVVTnbZDqaYvES8GdTZpFwGWqPVnZ8wjkqgGFAKH4hvK6irFDNDUSB57WybYGdFx65JqqgsmWeZXuzLeSjS",
  "key33": "VkVW22JR9X4x8TnXvp1GtwS1fG77PSbs5o53VrK6x8zCfFcLX9khBznE3YntR4ubYfy2R9zWnvuqDCCDv1Zi5yR"
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
