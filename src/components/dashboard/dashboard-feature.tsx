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
    "2PJNK2gjeGPqeKHyZsnQu2KY6c94UMrzTb9X2GahsaLm8HsbQvNdubkXzhdSanh377UWPUFox4z5KbXH2jo44Jcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676vbGv78wH7KmDonMA2hmuYfDNx45B3E3bRk3Towz35BMHnKY8sJzCqKgVfi9VBsUdjnXnRCwrCttJQaZPDwUjF",
  "key1": "275kEhWAM3wnYLwUmE1Z4gkMV3NXGQ9hUDxS1FLSgcTPV9scZEn7Dv3wccj9td38nwXWrnzEeMVDVKtgXstsRxVF",
  "key2": "2z7RRqpnDxZceUtpFRVe8BUoBjbkLcGtTJ52DvfQ4h4HTKp651rBayUrtW3AybP1GstjiZ3wJgXcuETR54ZrEh8S",
  "key3": "42zdYRYKhwJfdeJng4MRCPH15V7HadTnJiKWPe1vGhcNvyaj4APa6KHFRzeBhUxU9TC9FMzQPFZhoshAXWpkPf5C",
  "key4": "5JcefCR5gDBx9xMmBSQSpvBjyu5ZBebYoAq9RC3cC456xeVcTGKEtjsyFHQv2LMHUj1fqSbeJCpbhqgVSBT7T9t7",
  "key5": "63v5Z84sM2LDmuifVtQofXWcNVb3hcJviu1A1XGcSheb7WE73YRs3FRnE4sVo5H4XeXDHLfsNb6jtppYa1re9kTU",
  "key6": "4jDE1BmhysKHKmknfWgirnQ6VWpdXhLtt9rAzZGjqtkoDD2GU8skerTDSSey6bBZSY1r36WVynU663yW7g8NHBSC",
  "key7": "4SEHCeHuQsesWwkkTXBrS6iyqJBnxfed1yp1Guake8nDqyMpvZNMYGgc1jPeHpRDcceBKy3ExLc4sknqvm5ZEb9n",
  "key8": "2PCrmVcZBUPhparNV6E86GKiGaS2AKvdWqrQiPe2q4DVgBe6de1YAWyvCxyvJ2xJrrsgvE5YCpAhpidEdDXgJdFG",
  "key9": "36gEepZ7BZYV4ei6CdwJkpb1ZCXC9SRzH7naxcZhD4fQThrkPqU7F623yaoTKJxBMwcHe3avg72VPW4yVUhfM5uH",
  "key10": "3u8GKJpsjJA5HUmtUp5F8XHQ9HCQVjE6QvSEhbfP4AzFCfiTxMszoqwdffJwSmQw3pWifiiN3Ne9whWHY3FFAG5e",
  "key11": "AeU5RvRcgVFhFjjrNakfVZiBNyrotXQ5T93yVrsT3fWcbtDazbpjUDfGpS8A6K4UNtqYcJz959qCbbPkRiTqcp1",
  "key12": "2DezT7Pn9q8mrCVNZsok2iERnqv5GfJSFqc96Gkust4pezaggEw7EWRL2LkvEcVpQfXhCfnK3nPQA3vfeA7AEQcL",
  "key13": "2kBcS4w9w24pdvRPLFYQjTyz4778XTJ2WLvKsuTwdnVqnbB1YnMYfYzSkrZsWiQaBDBwBowDeW9yj83yzox4F9cs",
  "key14": "4fqdrowqf2vhdxS6p4yqjm9KS18xYVdt4EhusJdjDnXkdR8QRQGCAyisrZHABuAc7YYjortadoK1ujxnYJnAsFbT",
  "key15": "zbdMTxX9p4E4UiwxmQJZyqQe93m6vXcJnnUVFWy2fjpMMUPFVtk5ybAUJZyJdeRdKXa2ixs86T6nag6DpuVi6GT",
  "key16": "325y8kdKTFPpKHjaNpL5qHdDY7dKAp1YgdvEFmB1qGojaC5vCHdQ5AX6qQ5PtZvYW1ka3U93eFPWukFHV55mshid",
  "key17": "YaFZygfhN8MySZdLRxPFuAJKRLqfEdrpavhdpq5y2FzWt78h1czbLXXkshhJMfFxSP3wJAbttvm2WsKqfpMyPAe",
  "key18": "31Mby1PHwQ1EsvNYDe9Kszv1px27Ht5Z1vTBP64b74Q5VVrwBWL6abtJA2o4fb87vPM5zxhoYSmsLPDv2idzxWJ5",
  "key19": "58b56diLJevEhMUTf6r3w4M52gJv6U42vYBAxqTwHhvkTsYAv4EMd75BQHq726bjBaVhMf7oBGLwRcV1JSYF22uh",
  "key20": "5E5Ph2dr5r8x314585bx8DyKrr3Kwvutq3627ZP4FKY7utU3mLApUQNP5g51eXQuAMiso3bG5gHJd9vFs9t5fnRg",
  "key21": "4gsB8WreMA1w8qTxaoJGmxXhk7vAJk2q5DAKem8keYtpJGfEz8jdZMuMqTKSnDsBeHCPLCr4oLSBo15qnWgzWCMi",
  "key22": "2kzC27eBX8CGWrYqdjuitYNBWVhRzZtuhdZrHSovZAGaJBPxwGqBSVbTFAQmCkD62wuPtGA9JJ2eRRTfzg1RwvJd",
  "key23": "aRGTjcyT8UCyWAdVUCsimtaKSeHd1xXSJuSqKEQDzMAXfJ66xX5zUs7FT5zZ87cUz9nNFq5kKZQo5pdwt6N71D6",
  "key24": "3HnDmZUZ8V6Q2ri14VMWerSnLbc6gK2rgPJVX2QY1sm4QZ4tLiVkDMV25ZKxYqv5EhV72MYypguiDTtuJ7WZVTVy",
  "key25": "2G6V7kj6eXZHwAnJLZA2CZoJk64UxSssWTQbbPGpsVrvYPfd8VB7745SmaBdUCAfC4btS9DSHcFVgtzyNyBwm2i8"
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
