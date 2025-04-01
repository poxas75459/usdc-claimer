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
    "3rcFsMGHguwD7nX6t1Xaz9vaTApHnXqXFtjmq9rj5h4eTe6tDE6buB5c3gPWm8CWNC9nM45UAsVcE9kLcfz88ssA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbNARNVwE6UxhbaXW7SP5moxtTzyYwFKJb2oe85dVeuw9ihWBDh8burpfeq6Z4ARgVaC8yZy1wEtEcNgPZySJi3",
  "key1": "3vJG9jB1RHDBdsS14Y5hEdibv2NExwXtGX8A9gLLRjuFcLh9hpCDTm1qe4rkYeBcmAKAGrYWZwLXxvMjNFPNEY8Q",
  "key2": "3DWHs3qpkUQk99aPwGhDsadBZcT8W2PZpzLrccSBCAC8PyDcqXujZ97KzgDaHYT6ReaKdKHvEW3H56qmSFH689mV",
  "key3": "4QDAC7zZYVV4CV8845pbWhbqNEepPSnMwn2dxv61KTkP6whuwdqQ1jSHsvucrL3DX5m7wKCdZjPzURU62FEdaNwF",
  "key4": "5UmcLHRuCgPmF3LGvAbg6S4QdV1Y83uFBmAAAB3D5sfbCje2KKJbqbKdUnENa1Pie6FVKnSwGXYUVaECaJVPK1Uv",
  "key5": "2YAQxcmAoCDi5rm1GBNwf1y9Nw6EBEaTwwmgZksDBrF2vvSi9NtDCrfP6VH2KqEfsBmTfutFCTkXci4uTwLujX8t",
  "key6": "Gq1j3tLWmkbcq5ZNgvdAfUrTNTa7B6KoopDvKVCksXgYWLqe7jV5wh6yj2Dj9wnNLzqJ1Xm6X9fGtA4TL3AQoAM",
  "key7": "hLFUnKf3t5bB48N3CwzZMGj827Xxjf4c5SV9pQ2jCQwsfoqVxKLNWnNRMqX4vJyGWiW7uLYWNb4TnVcQr4rMaGN",
  "key8": "2Y8LjqsgdTzSo5h6dWByaF3hbRd1nAJmwKgUNZiH68ZxyxUpt3GWqrDJmugZyJLtdZcg2eDjRAfrNsmLuwesugET",
  "key9": "3cQodrLMXFcPP7XYGnw4wdS1jxonevFSZXLhnCyzAVf7DmgkvraZjVaFhCm5Qd64qHE7sQyy3ZS2c8Z6RME9QtuZ",
  "key10": "cYeUoBr8GXCEAmE9vHDgstkmViy8ALkZh7hkovE1tYBZmkGVw8HzWN7Fr5JYF7X3j5uyXEZAGJqg1bfuyoUj7hN",
  "key11": "4KGzZRHbeJebKWn2Yoo7HoWstnvHkb5GnBWSMh1njMWJH2XZWbGCiRVQaXbqB5rptuR3RxAcjRiX4TU6Qvveqgnf",
  "key12": "4fWdiw2y9DGGsjxLv3WEUMFihzfVWJ628mQHVhbFMj4rDFmL944JJj2UMq7zy4n7tvpsZbuEYTKozdtcFcVQKY6n",
  "key13": "4xyPE4aqvkyqPwtiNK3ueLWxuQJw9ixwmoxQqRGrXENPL8VRgZtA6pdxjreCzmn3XevCe9BHnjGtnvMRY976jVkD",
  "key14": "3Wpomkhfk2XbxhJY3dX33kSNaV6n2KVaSVdYtSkbGnmiYZkekhGQe3zVpsX6HaCtBU14z1mu9FLHhQxKX1wmez3N",
  "key15": "31BNr95Gwt2nxLUcRediU1X1b2qitcpSVN7mcgrLjZFMKjFkMa2BweLvj3AejPnhiZEk8fzS56NH7WAjaU7RtZ31",
  "key16": "2z6oqeMwn5zuLWo7L8tcYDTo1zGpj9Cn6Mqiv5fXY1R6fAYWBxKSLZXcyeDWf3337jq8RuhB1q6JnCAFppGt4ggJ",
  "key17": "4BGU9Xs9hf2amPtw58dt94kQaWoNcCTTgazfijtGnD5HUGYE5k1xUVbrCfSPjcLcEJxXB1ECCHxRsztggH3inuRa",
  "key18": "42BXTLVn7Y53Dg5S2PyWj5p5UMS9d6G7FsodphRFMyHzWT7xM1xvFyq9wvdyL7fefRiPsKWquFSsd1rEdVxtWDH2",
  "key19": "3B4RfaH5YihYQBFARk6q4n8SCxRb6cM5CvtYaYRWEoe1eFfigf1E3uRnBWaHN9uvdRe2Y7j4VRqxwz4PXA8ssCQM",
  "key20": "3gXzQStnANLQ8ALwJvaeGBaqMctMzwruBr1ELTvxxfed94T7ELzcVD8Hs2o8NeQfnTHpG6zWKoSgTGPJHeHvyfWA",
  "key21": "3qd2FGbY2JfXFQ6c16Mkb8FxVSkfP2yZsofsctvVDtMQjAY9t2WiJwVeKHyhfoWy5MxXvRc5j2oRk8WkXxdFRimH",
  "key22": "pYxf4FwNXSJt2iUcKHfzbXWGv1LiyXLhAuChAvrg56XduayaHtet8Ek5TuPETg73wWBLLkNrmWegMQZgivFN7uB",
  "key23": "43uUDU2GHzJstQRH8dJg5dntAyuXc2VW9j7NdM2wJtip52EuPspaReiRdAk6RpdV993GaQ3EUvJBEQjyJ4DBtYb4",
  "key24": "3NUj5aRmpDKEKQwfsRYvVjLHmDn4zYwKQVgFfw7KuLwHqPshW6srdc2ohhYaQzU648BELrtyx2iWhWqE9JCexj6w",
  "key25": "2XtNnt8mu7PTDa6sEGJHUPd1PbA9CSbACnsfPWWejquG5UFbogfar7aTuQb8PSYF3Hzxj5vqgkFxYCHFHVc3EEyE",
  "key26": "tMxbwsbf6mEEti4bNopRtyHFbVxfr6fZuKoPX9i5VeNN3vdvusuWdNcmSopd3KTnJZ4WXwGBYPbCQnLe3bZeHwc"
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
