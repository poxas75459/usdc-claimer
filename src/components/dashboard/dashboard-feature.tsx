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
    "3L8Z5DXqbiuTK95yYUnJawSbwKfM9TdrmkHBbMjy8u8bK7J6we5LpKjnC5FkoJpJSDv1L7Yvj7Vz3KrLYTbMqeXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReFuA1CfPYmA7AL9dSvhTfAtJYh662KMJTucLp61T8Nkz4EW3p9jGhiAPDnoZZH39YkLF55doiummbg31H9vPbe",
  "key1": "5ExyzLUZH4ZpSYMrxSjWAtyKZL3zzraCqfHa3fxx7X6ZB8YGWh7sEbqMPe9AaQrGc9t7ryeH1hPU4F4xD6oyqQao",
  "key2": "4s1T6mEL67aqJwr9fzHoRtqKE7BmcKMVxLovNcwoVRHRdmu2YFUvNYYv3nRksQWrfrfq2xh5qJSVTFN17qgNU3qL",
  "key3": "37F1w5MUTb96Cx7f6oTmP7xNrBbU2QVN3ciR7UqUgbkkAeptfmh3kgdN7kPqYsPTSA1XkcGMwvPpWo3isGUcppJH",
  "key4": "2NJxQahsWJrLz1GTwnCeTx1rh9BNrU4RZVFhgHqfv7HYLkegm7FzcxboqVksgsbjqder2TzQRQgGA1Wku3JUDZk3",
  "key5": "27AqaHwS8PycEMCd661sh5bNDLNMrqH1WC3X35hnPifog1vnNMSKyL4EzhEip4d2cHkB17xUj1e7TKPKUjwwuuBW",
  "key6": "3bSmrq4hEpCi5vrJDLiVqUDnXdYdEPYEiCTcGCKAWt2DmXpkm1nu9ueziGeN5jfRjAMtYS2PYUjAWVwjXWTwfxmA",
  "key7": "bFzn9htZs7adWZdeDrc28xXHd4H9mRrL3m7WjvuV9X7Z5diT3UDs72vkUqki1UhFtv5Soyet7BcCBVondodZEce",
  "key8": "5UrrVa9YHd94ic9s7qdTzBcKbKzx88FsVD8YSrj1qE7Ei1VjX8q8FzGeGwUyUDj1g5w2a6fLCBiX4iNYfmaFzDq7",
  "key9": "pMxcS9znHGXDZ4xUACRhjbNcBSXe14NGJ4snRNRk7gbG2MgoSSncog1Y7x5LuynQGfEtYeoewzNRdpC3DGSLDig",
  "key10": "5vuzUvd8WSJRy6qxbZBomexfuGVTH7Y2yryJWWb5aiD8aS9FsZwsKrWsFpqqQACB3UB6mFUb3KpE1XeRZvD7HPyS",
  "key11": "564zgUvB753uKTjUWCKjLP9xmULBgXmSTwPBSv1gT4Jrsi8yCDgpYWKChQoDwbspRdfctcEL7ZLAYL5yRXojgVqJ",
  "key12": "5c8yB2pw4R3bNCJjX7AUXw11xHqkowZn4FK6ZDbKmtrNvWufDku8oQkVpFS11kxXmdzF6TmE4rSQLLxaK6RxFGMG",
  "key13": "3R1AYJzWuYTznXvcPV7yD2tQ4HBUY3HLwE99nEEnzLEoHaDK8A7gXXGzCSmu5gQdCEpm4fhaZWUACCAmyA28ubXU",
  "key14": "aNgTYrqBqpMwVUUSisVcGMSkvAx8vCPVUhoYZVFnJo77fCNzXXN4jpwfvSdnhXp7kCN6txewuGJvKdw9LzfJxxv",
  "key15": "2Pae965LLBZBXkfJb9GhGsMLxdV4W7ArcM7CUhuTy1UF4daGYvemTA8rRabAFLFEqJexXZSy59aUjHuBHWGfxvLj",
  "key16": "4RCij4Sf1Hjpu6ux72ATtL4BKwRevLAqDHnQgz7zNKDib8eY7bDyzdH317SagnLXCi9nCmqKYTqWpdD4YZ2aMWJ4",
  "key17": "CA6ZbbNv4yx4K7ot7o9E8bxVeGJyyMWrthBDbCVxtat6APtMvNQtFYCpPLKPwUHBTwii89z92C7eRutAhQupKq3",
  "key18": "4VvwjFVPRYRPiEVSekXMSShVAoDv33qVzhWmWN7o6hxR8WszUPBXMMYdqxewREZ7Lbs9B8wh8wPoxHTe8RAghujV",
  "key19": "2KGTAcJB3WFxH5dB5W93BwqXZsmeWsmnc3eudLJ5SftLwv6EKw3fXocBH9JvP8jc5Vw4LPgkEmcXfdvYNuvf4fGq",
  "key20": "DiapRzN2kRgtstoBhwd3px5tSL4Yv59oTpP9TFUZP9EqhZ8UqwDsGmxJbNFEvNbHM5Fv9WVZ8KvMjz4y4wQb8zc",
  "key21": "5ASa2FURGP2XeBE3Ky1AKwWFTRmvEdYTpBDLfbdKBaSS5u8VysZ3a3GhuNM1gTtduhxcwXP59WpZxnQTgMCJXwZR",
  "key22": "59jdsxYWn993WNC9KPuzqKYU1dYVFHuDvkDqk3YfQGS7bqADKzE57STb7Gatf4yA4sKLWRZu7vQU5oyLjoFWoPWN",
  "key23": "29NbBaPpHh5ZDWijHhx1ba3eFFxkskzgcUaDnJ893vYnrKVse9NyMgHoBTTvGk5PwGEKPUHVFBA6pRsqNF4FC75a",
  "key24": "5Wc1EjNf7EMrTqRhsYxXbezqiKskefqmSMkGHPfcqrXzJ9qqGh1sgSVBHxzj7YmfGF9H74DCHyuN9UxjGpStgPKT",
  "key25": "3pXxdFq7DLahvXqcnRSqKyfv8A5tzyj9nVKE4REQL9PBJxbgUAzqUEujBQFr9od87xoPAqpCuCBKsogDJGbe592Z"
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
