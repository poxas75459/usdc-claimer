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
    "4VS8LB3RnB3N2zfsCqWFV5468eWGwNWD9FBLpZJfyJoUit4WAWXQPwvNTEubk9pLgRTYSkvW7KLL4PNopLk8wTvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y736Krda4fuivrf3HxxRryE6VWqVd3CYA6YoXeEPjszzafTmrcQRtd6SuxQtqCPKveuHyNPGsxwraamKH8i9vtc",
  "key1": "4j5wMRbmqAJx6v9K5N3UqkFszCx8pps4VPVaz3vtLGuFDnqELTJswWzFFFpMzudaob6MoBvKG3Cbmpf8hmLr5m3B",
  "key2": "4beD8uCDbHwZQLVpDYuXuj8wjoHMdgeeRNg43etYjVTXdnNovbQqDaRaswPX3RUt8FVt7yaSkgVG1bvrBbB1vKwN",
  "key3": "2LwB8wdfAq4vEo1ZDk8QToeEEynzqXoKjx22VjnRJadDV3N88719niiZUCyZfYJM5ZC6ebQHT2gnurs5vWw46zxq",
  "key4": "5DXcv3jSwSsSywBJXcyMhwXqV1Pr1wQWnWGocmZ5kvwDkgmPdkXJdGhzGrKVY5QCtShQTcoKgXo4muTAZNZecVwL",
  "key5": "52AtzoxqNu3LhDoQP6PfXUqRbCYCBzEgWHhUS3vWLR6FYCu9LEieF2jMFvksa3P5vAA6PKT7qdckLb5WNuwHu9Gv",
  "key6": "5qXExU1XQooww9i4msAB3eWACzWQjBNTHi6ec5HLvLd6dFPGK5NUiGpTgFnQ3Lacu9qn4MhpSp3eaPYkiQDHyuvk",
  "key7": "52eePmfAezUQ85xLhYBDdag4bjZ4XDyrwyRBNAhMhw38Vs88StM3fdg8JfqgU5Gu8QDsfHFeGkYPuiSkByEsoZRK",
  "key8": "5AZTYLg6CBDBam3Dj5cyrN1m9pX9aNkeM9cKnx2FAe8U56RgxYoNxXs7zrFTzRY6inG5o2fuh6VV5DhezehH4HkJ",
  "key9": "2u5h1etaYurdjGMLLndhVZP96LLkZRDuLv943t9ia6MRQmA81yUKrGoc6k9iaxgAMoaWokk4UVVnRs1YwG2cEWc5",
  "key10": "4HRqBSAQWQ5BTGB7a2LufEoc4eT13aVWnM6KQeAekVA4xEzT1c61X6KKugg7MvD3ZTkAg67SxGuLZRRG9bW6BzrN",
  "key11": "59u81BvPGPtPwGTNvcmh7TUKuWqzP6cNxZKimitm2mmMmZPZWtH4rojGzmrYdDWzdzDyBdfEu4RGT4C9ELjhPHMk",
  "key12": "4FrmKrpyiDz5tXiFyicxy2CVR5hgXsM3MYaLybCoarEVD8VwMxybtDESBMPVkqeS6xeNAqapWi5L4hetFY7zkeks",
  "key13": "npmd1o8inBmHsG4bcmHaBKFxPjsutbiLv8nr6zeMsSnxYaWaCNdJr4TtjBvpBWDxdagJTUMKv8fTZ6wayScWJQN",
  "key14": "3t94qPFgyY5jZ9fQkBMbLhzcUYNCUqfRsg82iY971sts74n1sA8QzQbfcsYpZn9qFG4GdiUcGbgGVarNkRGpdKZ1",
  "key15": "5o7WzvFgjieWKVnQoeANUwL99zJAzcgDotZpWyBfXeZbFcWX5PH1dLYRWgnVTfzpNnF9QY2w68pv5pwRZ26gsh6e",
  "key16": "5vaF9ChmQSXMwnkffxPYpb3U6wVVwj9Dh1t1vTFa6U77LFLHeLiyhS3ajeMhe47qehxdFpMoXB5URdjzsEZrMT4J",
  "key17": "NLXo5uVyUgjyjXyL85aK3uW4tapBVKn4ZbWacD8Fmdt36uDMkYHTrHPwYBVbRWkCyuRXVFpv5FRGUZn25pxpUQL",
  "key18": "4sXWGmMrTyvLWhwoMnk2uT4q1ZRrcLUrLoEiPk1ahn6GxZFDjRZH7qkL32Ed1YE34wbbYCumH4HbZWrJRMrpc73D",
  "key19": "2Y7WqvYmpxFNabbrkmwgcM7ASxQ4NNUcMDgEGkw2gZwqoBS7ceoW6sgmNDGVedeomGu72sMo7pYVBTxAzNMfBn6W",
  "key20": "5N6nfuEud2tHM4Np2FYgFwWZZxAPPATN5EKw6PKToYhkGug6V47ngWwMNWhJj6njaKdzP5HeZTFPfCB1Hp4dNNhU",
  "key21": "36BEqNGrjMq1mTzWJMMJLKZEisUNH3FPWsdqoNvDAxvmKNsjQAaSBBBvTUtmEfugY1rh66rPSxDji5gV2aLa78Nu",
  "key22": "3xYvT8E2WNWjkGtVU8D3sTT8a1tvq1ufRDcLoMdHa5iYZ1VKLKQtAK2qeBmYKhiQsjkrZv6kFTr7vk6EZmtfTdsx",
  "key23": "2LDxYnEuWcZvLH9y5HSWVJ4zafJcDcZqppgpY2UFjJ6Anxa3YfiwuwaPKhySZfUnBSnXpadWccqaHdrc3UuK2NbV",
  "key24": "2mdDTi7XLdMbS8mvG5KmLNR1Gk8S7jMTGY9LuUFevYJktbc2x5vG3vZwZN9kqS3z7iM5cVGhgVVF78h28HtmdwUq",
  "key25": "2rKEWDswfvXwPLErpb3UYEDA579fQdNeMd5LwMS16TPUTDHTm5NmG4LgMrkxuVoJwf3hHJUxyogTTeX91XmYGzJy",
  "key26": "295rtRFMaj3XM7QXqvYVqgjVsQbNuwDyC4ptiVDF9DPHXD752D2NVHe7XqWLu3E87s2Ezney22fRem8eBMq43xBG",
  "key27": "3YRMfrcCxk4HaWa1QqPYStADoNV5a4nZkkojbPiS56uaAXV65kd1WEXrWSMCKW8UaGVfHFtzAdXzv9yuyro88sNX",
  "key28": "5yKZ5TQiMKRx8jXQiAiU2MHGYdDpttEVgMg7TN2Fa5cvFEdTtQeQNksdzHjAY5bVrwmgBMze4gKSN7nCCBfuGjAY",
  "key29": "36Y1zBHFsgV9MEqPJhquxRZ8mzCsyXNakDuPz1rLWrXpXbxWp98RsgNwcsSyttfsBuzN7E5c7kH41hiJP3UcffyC",
  "key30": "2CZp95D6De9XPJg4whjsiDhwyP7qjPLnB7DN5ExChoQaD6tTkU5okkiYs1JR6j23wpMAbvb5x8GbRXmXGW667nvF",
  "key31": "2SohrqAjRP7aswzuiN9c3zSEwdtM7UyCKtNqk26zgcYCZzQWt7eH7owQzNLFDKmN1pa9DU5e26XC4SZ5mBkXcNy2",
  "key32": "5nHH6W4BnFZtYT3GkSV39XjfzQGboPfCYgc5egDvGBnaBbXVzUijZgYei69VaFJf7o4vfr4XpuH1DYfhrdAGzCsa",
  "key33": "2rQquKoi6TdW9c5TQE2UzJpdgYz84zm1yQYbPEbnnB6J9xmNRMouXAAN7Es7SbZV8pZ6N7juyBKXScVv1sdweRu7"
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
