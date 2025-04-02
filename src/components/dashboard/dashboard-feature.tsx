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
    "3YyJXak9vfeXLNvCrShA8Lum3FqJacGRR3tGE1uTwmnoF9TuKei8MjHRdx3f916gKxZfEzABq4XotZH9d1hpjja7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ptrEYNBaQtAhdL7kDaT4MB5quwQn8jsjWUftrRkKxRX5hEsyd8HvLhQ1ykJD26Zu2sJJLtPDFNqeAK4ifNGc68",
  "key1": "3Nh5to1mGHKg7YbVduR7e222HJhHpqf5wPLkSogcD7323nDUAxGDkfBCmeAR9umCaivJAiJNMdJnAgbJgXuiXdKa",
  "key2": "4r67iaK5fdZqxF7ZUMs5FYDSp6e7wk3Q8R6Zx11ftV6Gve56FNqxRJdy7KrseDYpZwBiWAM4RJv48YxSGTfQ9x4y",
  "key3": "579BM8hTMgosPS19S4LaEFmyKR6fDowXTYmG3QG6EW8thMU82xFZNQ55gZGNcp44QcrjDcFupHyLbNTztMX8Y8e2",
  "key4": "3YCiTdsMQt3uzWXjrMM8uaCpt1zY1kmDyGRZFRm5BxosV5eeziLFqAiThgvDKm1oefgHrss21iio8Z6bgTMAeDNG",
  "key5": "39TAnZgPChWstmQspWZceoq3zPcFPVCs9RgGREUpdJy5JpoB9YjBnKa67NAiN9zaus2P56136as42umRnppfHPrQ",
  "key6": "125LUSz9W2fQGmr1ZXvuLEMkS2fZ7KfvKxy5ibXmjDjqEUN4r2XTY9BY4d2Cndse3rEbVrinkaMDFjq6RLomdBUo",
  "key7": "5ZK19wqFJMYth2tyAoBF5Hh4UZ3Uh7f5dayjkiGcPBFGgKk3QTEptv4XTQyubyXHEp9PjY2sozujvSmovV4SzKAP",
  "key8": "3o8mrTRECfJTnEDhujs9iuMjjE4VAUYpEHQibUnoSqLrX8XFBhct6DCBhYS1g5QuLrhhdT3cM3B5ixu4DWwrQyxE",
  "key9": "3EW7r87nm3vgnfaUS1CeQAwUZa5gtvJT8dLHZVWkTfZHmuNyKgqHJeTPAbLkn7W5Z38Wq3Q2ewZ9fxLj4rUGbMAi",
  "key10": "4BaMyhA9b2xiXLGGYnW4tzuUj399HS9f4jJDAMYmJ2792aDidXka82FQQ9NcC24PTmtdcPcm2FH3EUt1hsMLNZ31",
  "key11": "5r2epUUXARZEe3VgkbQZgfedC6zeBo9Btasbhue4tfevmgpXzk193wRCYmvoTPELKXUvoipJWj9S16ZrK49E7631",
  "key12": "5Q5zpaU8TRVGcr6fqVEims7rgrBnLXsmNHc8jhstUjNoRW3z4GjJUitNJEGNthqa8At7uPphpC3wageAMxb84NkV",
  "key13": "2NvE9p2MP4FFJcmfhbQADbivTDWGhbftXPL6nBUA8UXhzzJF4aAxLWt9iqykXDCtofM3AtKi1aiy96qBFczsg6c2",
  "key14": "5VDfYHhAHm7kAXfKswe1h4YNgpA54RzxJrDJ7CUDtM3jRQkx1t9rLJDSb3v9fPiuVXzGyAGgP5fKRMrhyDDtvHoS",
  "key15": "2V6WCRr5jBATj1nWW5eUm74z3zFTGuhL6QTTFFpLAJJ8wugKDHPix8zYtKdyhF5QMwbcYGQ2dHV55NAB6aN414tE",
  "key16": "4oJKsYPEpqSpmnqodPDRHoTwqDUxHJcQvJuohZ7Lh3snDdGH8E6fPLS8a4uhnd4k7sgv9esAZ16CEeq9huxxU42F",
  "key17": "4dMj8bApMEC4jxMnnhJqM9dJLM33EuGN9GkUdhtqYeT2SqbS2F3JxCybbFa6w82AwfsFQrn8pdDdfEWpGA2TwwnJ",
  "key18": "2di2P1ZMoNvyVBFuqGedvqPBZrr8Q96HmwJTq2QWXJot2Na4WjGEEnMg3xdZcZ8jrUPxKE4KcA8TKSVM5sdXzxFK",
  "key19": "4CpcTU2zTTEveHky3jeAuLki4sJJfbj4gf38yhy1WL75Yxw2EpntrDFddddicsB8dnAJ7fDHhzrvtDhGYHPnuQKQ",
  "key20": "5K4XJJbAhLo1tSwUDu3nBn1Dyo4rk4wanfWSZUAUnbkfYaRCcVRyY3N1UuYa3wLvTiWo2CdFFnXzpm4wyaP9sxRH",
  "key21": "5zCnKVWKXR8pBavfprzieMsgFryqGPoPdw3eUYdzZQcYxJZuzpNxtGTrrNqwC3x8uRfFiC2UodG7dzDYzLJWDUNs",
  "key22": "2vtMVc3wZKTmedEeSdeRuMBNDxZKd4mQm5tNzCsVtJbuC7doQnqu88zp9UvScPaveYu3s4EDtWtAoVYx2vVYsjPx",
  "key23": "4zPt3nRkbrMefEnuV6hv8m8k8a3nqTb46BpZGjHU3r7jXh17aib3hrbQZchfBmF5aKWcNyu5jHP67uE4YRNPVbhP",
  "key24": "4xAZ6BcRz7JxHsf7ZWxdQiJr7UB3HKHCYzCLvRy6s835Sk7j6jvPoRz9iAaJ1W4eMVKHW2ko2rpUdnbkoTMdRxrj",
  "key25": "5mLZwkLKA9QtDuivqjxk43mbfocDQgGVa3t28EyqJFNCFNpNi2BLxtsRDQaB67ftHU4zJy5851dVWePUPC9KgHiP",
  "key26": "2kmXaguHzkHKBrHx12pYgZqEpLtGT7q65tZj2AxxdYVPdmauKsZDwLWM5LLnkvHcxr7CJs4TE7donQFQAuYTMW1P",
  "key27": "vevGYv6ezPPbeiLNJsxZfDPKAi5Q1behaySdfWkZYwQrrykStPECkg7tyL4s5Lj8hSQrHcVdPS84r8aD2QJs9U6",
  "key28": "5PFmFu8DMj4MRwLmtFJ79kgmEq5UBRQQtvvvHNWgK5Rs3pkPmcuYEmTeNJY5Cb9fKTR1BaaGEB6hQJsmX9wEKNtt",
  "key29": "5F6NoAu448zB4cmHhJt7MDkPQWfcuLd7gBWx7ptSe9eHYG9BBS21wy9E2Boam7ZrisKWard66xPAWBDiBKkpv9m6",
  "key30": "2CnreDSSQ4DsU1BtfbFW7D5bZfLjknz8TCLWFz3j1n4SNJ31mF7BSbi5cGfu2ZLahRHkrRxukKjvMNx2BEAbwxtK"
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
