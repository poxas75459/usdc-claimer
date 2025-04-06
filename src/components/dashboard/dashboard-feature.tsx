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
    "4u2ZUw4FaX3WbTYnEDANkPURiCw84nwHT8oSJQovLwi86WXdhAXjDnPxNTEEavFB7Xq3rqaUs3jmsfTWozES5RpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddWEqLXwQEY1n35egmpbvocW8AD7KxTCt91VtQS36nKNxpvaodYmtUdtoExkwEw9F2nr4t5BB1vWoj6aomym4kL",
  "key1": "5tyQx4D4zPqtA7kRdZgYgHUjSZ2hyVX5f5vzvnjLxLCX5sGbuVVB215HrtaFq2sDSuyVin9XQHvQxZRGbuaSz3ru",
  "key2": "4oskLfyMMYFxEmBEofes6FHFiJRPj7uRS7NabWxCKRpYyY4SHbSZa1ujqUwJ9MXSoohxsioqKLYrLPuRVxRNGfn9",
  "key3": "J1NSs5Knu4cwkdrQ7ZEm17xKyEVRiwoghb63oMcs1WF3j1i8TrgffdGZy5zJWfZrQYBebXbDbLH633ip7Ph7zLx",
  "key4": "677WycziWbvUGwrQFaqidNz5oLKNzpHF93ACBumc2SpkjAfJnGuSmX3zUC9vVZVQygQi4ysfy8LpwdicnrQvkpzh",
  "key5": "3jXLJWQZNvz2oXJUsUV2Y5XJKcmBkMm1xYi5qUz9RM9WrYqufiAiiLMdU7nLwdeFniUnbATmhyzmxU7ZGde23gnS",
  "key6": "2J3WZ25XRpPKd6yTvPEHy4EwkLhKkFoa1pjjCTnhsNjhY553izjHKEhrPhTHXQL2bKNdzyi145pRLDw1nGRvcuw4",
  "key7": "5bVqU8Vb32YX4gjnMwopmrW8sZH3hmgkgobo57u5PwWsVCscZJ2uk865ziworumdMNVF3MAoNY9CZU2H6BZBWi3m",
  "key8": "Y9oAVuJESK5YJ7D6fq75wCGEcbjah95i2Hfj6o9o6x8JvVBefXDVVN3LLr19h5Etyw36EaGQKLN8RvoPkmtaW5m",
  "key9": "4pNXUAH77h2iRcHKZUtv4bhtWyMtkQVmMUD4zxgC2ewJeasNWYq69EPjqPmqonovFt3sbaYUNYQzuKELC5AqiVmh",
  "key10": "5erhoyPWrFKgWMkAuRUgf4QhyZzMCX5KicwqZP5vQTtYG5NFivph9V7HteUPYhtMhdy3YFh64pWTaeTEu2XdKSeZ",
  "key11": "41BA3Z4fnM2vndVxrUsRofqrfHj6uFitzEMHfVQ6HH3vfGbAezEq1w6aSvNYaco2f1nDte7Qz5nXZNR9GKZKoVmD",
  "key12": "fQ6wvbjzR7KjHvVJh1VquEtALfVyV6ERBaz1F3Px5oAPyJq9bfQzCadZjqvMkNqH69GqBshYZxxqjfCuYw73ARA",
  "key13": "5sVz7La3ScU2JpR7JF7PP4UQpC2QQo5CHGV3ASi2PWBvHXkDVenByatQ6kdv3CL17EUydytxgofQRdvMxa112oDe",
  "key14": "fNsGXHVLCvVLDDY69xJcYxEg8iCFkJScFGaUHSTCkDTHsmHbyj1DZixZ7FqH34Tt7exkX2F6SphKkrgWtXvDQb7",
  "key15": "2Q5XweQzqjVBXqxBt49kR6StZnYTu3zjLui4YYsoHxCWYoEjWzd3BJW5U1HCY6Tm6fix1iTyrHyd7bsDDyeeJNjY",
  "key16": "2MoPg3UdNFd9S2HigNxfRadNJMkFNqsngkhVdXXdhBeH649Xu6GkbCniamW9sJ1o1hVQETEB8uxJA35hbnGMQo8q",
  "key17": "58QDi3BAs6z2QAoRcAu2ztPhWMECiLgrCHRVG5jKJ7acthfGJ1hX8ZQsVSDfEiWVfR5pWC2g2NJTtMRAK2d9bgzF",
  "key18": "53aYZ4Mtr69YEEtuUFwHptqFN9tE2t7Jj9nuMvN6Wtay8i3nBd9Ys8nfTDS6cEQva7SdU1EG5DWNFQgFzBoQ1hAP",
  "key19": "hUKVv8F5LNBFkBD3HhKNnjXASQnbr8ftEB8PukdRvwEoePRkbbVqZgqUyJ8esm4qQsweVEXVmvXD2dVPkG4LN2S",
  "key20": "mfKbtBa5MUF9WkjXf9iCuEZrY9TFbsBAABwQVaEEhuhMpzyn5tLEH77j4rBrP3GPHfpjfPoDCNr7ARznZcP9kNk",
  "key21": "YuP5Ui6BWXwt52moWChfUpetHA9rxy975eb8taWSJhg7h5A4gv1XzRsyBg6FdCYxRmcZXTAxvKwZHfcrBD13j58",
  "key22": "45a83kgi8S689Ws5jfRrEHy7jnZJh8mxkLLj63D17KM51eAYVGdPDnZobuFLqv654DRK2xNjp9uF13GYoqPLWsVo",
  "key23": "3XoVyaC8EM64EH6r5KFuTME51vF5E9tfY3uVLhCMMsYmEHXq3pKe2f8tFq5EEtb3uH9bzE1fUQnsLBPouy79d7Za",
  "key24": "65GrkQrUF9yxjqcSYxBgbpVKQvi4noiaBd7UC1s9WqtfJ48ayv5w5Dv2wBWyyf838vxaciS55BVw6Pd1g7d2gx8g"
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
