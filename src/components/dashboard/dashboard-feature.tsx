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
    "2chvcmGS3hgv5TLwYKH1wUxZx3XxdLuyFapJKfAXwVhiUkUYErbNuW5tXpcAN2YarrxTTBqb1Me6x8zm85QLSenZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWXP9gnNfCxY8v7WkKYFTRr2GLRxjL4etXvrn1iv8ZVjR3qgTYCnrtzQoUPxm3sggBRsSQ9BWWtQ2yavWbGKPqJ",
  "key1": "2kezk5ZErue4efWFpMxAhpV5xva2jZviQBcgXgJ85R1Rcom9o51vmwe8z4jzqok3v4QKwSnaEfL9YoUFLLuDkM6f",
  "key2": "4RPdEge8cUe8oMcKxs32rnJJKfS7QZKhioN1jEU3ohwjR4QhBWeW8xz8RnmGeosLbGjBmZ7YWvxmPXTiVy4GNuZa",
  "key3": "DgutXfGRauAJBYPNrsUUcgYnTcsJ3hYGcFRhLoexjD16rBQ7TmSpj5r29Pqhd4xTTPxB5dnPF3zidi8NDPhDGQu",
  "key4": "42W4FZPX2eihnyjTVRnGKEks4Sqnhxw3G3qpLt4Y18nN8XD4sjo9DLgnWfVqZRiA1nFfqevFMQkFGzNBVHBLQ4HD",
  "key5": "5Rj6hi9bx4WGmLXwF3VRFCtDSJQWg48NzZrrCxqc82DQGdxtc24LEWJrChme67CCbs79mj9qAb5bqmZvy1BAjZSw",
  "key6": "2RgaENw74T52gs3bssR8M8iNH7MUpMx3xLoDET3feT9Aq7qcQmavBEmVWFzb3Dkmwtkzw68pvcB5kwx5PHyHhUGn",
  "key7": "29V9EZ34Ct5PerW7Jfvxx7cQc7Y3xFpysktjvn18Lt4nv3FNtnqsfJpzxWCLtVfmcA7WnsGvZZSz3DERERwKw2GY",
  "key8": "jLG8TnKEmRy7hzVbR4Nm8MA18fhJHpzRQQU7djZX4YbJWCbyXzsomDajXJim9rAFSTZmw6v7ryXLa4fjCQSiddA",
  "key9": "3XRNeq3gWEGBa9TE9qMC5wvCgAY8D8jtFn3kJ3VfRPj3xQL8evVmpzfxthw6Au7QyAw9JvLgNKCqcLmAosGFaBri",
  "key10": "4BUrcknZr3PApdCZmiQyrRexoPAz85Fozq5Z5bwQ8iaNFo5MMYxavfkkUzFRHti2Sub5Eb3Q412JKVaSBChen2BW",
  "key11": "4S7TN1Ce8SsYL91NgcVHwM3vGEvR387q4btTQbEV1efcEhzxHjHcGTXneygdUtKoPm9UNVLC6uJXmorYv5ppUA8H",
  "key12": "4YRa5diFNKwdqz1eJV3ciSspATaYAxMSx8wpZTGnYRDujDh21ZwqNGe2uwHKFStW3jTu9KwWjC5MmXN8L3mM1Vt3",
  "key13": "3gEMse8mpX6VSiWveaxRLkdHQHuLiLgCdRqpcfPcMs8pcqX2PR9sf7PbekuHLSoa12FJhkm7B85zek2AtpD7csGa",
  "key14": "LmYbe5iup3oFkHBkzyGEp3i7S4FRBxtcCXk35nRC8VEK6uGEgAWcCPV4hUS72tq3jiRV6WXga7xbzGc6SrPr4Wh",
  "key15": "2o655aaoHcKbjBYQCc5An9PukQTy7QbeNJT9VXRqtgZMmyyByTJjVfQb23aWppFMLZgfueQSiRN1VUU8g1JHwSG3",
  "key16": "DD1xdKaQG8g1HcGpvFm6j1XtgxmwW3jCiofaG8J1ND42HP4Hh3G4rZDtPXgtGn2AWUyENyWCGyW5DvAJ6JHdTDH",
  "key17": "HtTCUpD5VA6x12bygPFXVHbj4yzHzK1GoexyC8j8S5pSr5E9oeewydPCtyoqLHZUUN3TWWmY3vtaKzWBiwSYTVk",
  "key18": "3eKK92956ZTwhUcMXRZR7Fm3UQnS3Y1cYBcaadZzCeuroz7ZMt2aRL62nCcdnv9UHewzZVPU738sBxbTyhU5ChnP",
  "key19": "4vWBwwmt9tG3MVtFP75NgvVuRtDL8SraAEiNgD9swn8Dgp2c7T2Bgafsisv3pCN6DMTshvhSTYtfdiYfnXAGRuZw",
  "key20": "4yXQjBKubL3u6rhnrXf7EoeP1bwQhPV7Jj9x1QDmPoWZ8gg387h6mu4BQQPdEQ86vRNbUaxtWn33os8mwQ9eeGB6",
  "key21": "3ySJ2byfgkPkhiDHeJLUYYo2ttnpTZDS1pWv7qzvFJ2ZZbHYVCJ3PCUqLYHxLNxXo9BoMFkWeXQnZE9sjWDUMGuk",
  "key22": "42iDhZ23rPdHKzdBMWFuEuaJSk5m8mwsAe3yxUPGeMchWNR6hmtBWUb4no8owcBw3CBd9eM4SSafq3jhkYoTj3WB",
  "key23": "R88eiSUW3urSAVEp1qDfmmj4jNeifSxdbMBN6RAnRDaQxPmQVWYEbhK7EE7c4Kf1fHMvLa19vk7nfRndDoByN6F",
  "key24": "25yMGkhftEBoxS4eojScpRkKdMyodCuVpLfLYaUw4YDwW6k8HPygcdB2GMm92YpZe7onbcG9hz4adD1moBdg6Lia",
  "key25": "AgEKaQiw8PEMHHfVBSpra5dchjoXjVmRRjnUVamHMo63fcZduqbcTV5XSnuDajc39m1dF2XYhZhyHkD1kZSYgZ9",
  "key26": "3G6kuXygTJmMdxtReZy3y9Ga4dE6uQf35x1cKtioguP3qMiNncLzQmpuZNUzTUz8zJPX3WiTRULa7iihmuHMe4L6",
  "key27": "2yxrUe6UYx57SmaBFbE7YDV3ytMQYsUoqoJcy5sHtJ7vYVo2AgXpqojojoPGd1iR3YLzyLKEafbWvKGF6Mh7bCvF",
  "key28": "3B6Bfz75V6o5zDDrqJTcZG2QyUnGaA4s9xvgWnhyZh6tAMd2hozZAte65SdTQ8m9cMfRjWzjfV3sJWXTa2s4dcc2",
  "key29": "4GojvbFqewkERF4szN4ZGBdd17nGdNt3CNxFawdN8gGY2mj6CtijmrcqbUPMMsNNFwMD1yQpMk2R4szKfSDaTeAt",
  "key30": "516zKHiw8pVzQ5TWjJ4ffeSXyGNu2jG7CbxbYtCsUzRkqWar5CEkt2eHu34HxmpDThxpuBiG78N2eBT3dHAAYxhZ",
  "key31": "4TDZqzNJW1qsMRHd9rX2VTC5LErqrRNpsfNqwxh92NV9epC2LVAEZuh8mwNVrHdwzNW9DT3ewVGicT7fbCLB7UhQ"
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
