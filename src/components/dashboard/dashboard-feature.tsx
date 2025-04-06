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
    "5sN7RBZsHiEWRXEQgZZ8LCW437X9taoDMme8tuYgUgmjwB927K5uWNrDyKJYvX486n9EBUfoPe5heKzoDV3JdyVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ye83J6dcDPvZV8djKh3KSFk3QBBZzBoRxrZNH9bVr1JThT4z2st16jowz9sGmnGi4hp4S8Y3X55zQMcbuv4P9Q",
  "key1": "5jti3XbtbMVNao7DYPjETMXFDCXih9M9kCTwg24chhqeg5h9jSiSL1YfpupoEXLJJ6za6n1yV3iS4pmi1VxMig6P",
  "key2": "2YFm7TG1wRqmJkR8BrVWnd1vQABQZgkGa9UEPbRPqsit678hsemtyMzKfWdbdT4DgYJPBxtrK4hWfonCbwEh45nu",
  "key3": "hgC4io5zaRBZrWiimxNPR9VtZUnQd7RrY9gyrn3R3jDadKWsxqwsDfxMK4k9h8xriVZwq3Dp2C43apRutAkZgui",
  "key4": "3L3hw8Ys9JY82gWP2PXxXKK6h31w3KN4CeHrpZ7pZLsrnTLNYP6QUZP3z5oDzPB93vqhVF7kFkreHiDkVwqvDn3i",
  "key5": "6TzyEYNxnZY8f79ADM1AU3t7iUd4gyb6SdRT6NU2JB4mbkyyCMwHccy8cLXZdGL8TnEXGz8VwP8gqqxjHBGpn12",
  "key6": "638WYdGQVdXk4kcjhvMtEjWQvZEo8AB3Ex3B8oc5yj9AAa5SjCprrNX9q6dv9mvxb5F966YpnyVcjJ8UbC4h6suG",
  "key7": "61uJAxXXBpFHJiWun117YxPXe7qici8gA2WC2UCCRLJjUtemwW9HnkEVxrTMDtVSFd1LwXdDtkfrwWHDKiC8cdEp",
  "key8": "5AQFr3bydRTtSjaN8EF4hsVmre2JsXQ5b4bXiLqfGPVzcoF6x6G8jp5rHyc8S7T9t1dsmMRay4CgWK5EShg5iuCf",
  "key9": "5ou9vqGGB1CzWLaSEpMmEvRWjVQFAjGnJa4WfoJQqECtj1zzSFQPwbum2LaoMAx4CFmpTHKYYqG2EV67jch7nhVc",
  "key10": "2xsUz5HztYcnEUjf5GX1D9eN1bRAoVNjJDP3QQfmwhqo9DmHWNuc2unCLWakuyRDnSY8gV8hxrKcD1siefv7tVQ6",
  "key11": "5s292KZfbTvbCRdqUwY4hw2yiqu73ezmDXDudheCa4Hjhd3PsPdjTKpkdc3xMfNrX55sa2tdezkmSq3w3Zp3Qt16",
  "key12": "4xcL9vbaL4tGSgUFvWNYrGhtruw6RJvmkgEXyG16V1TMFgo4tBCJ8zxYMavUSRb7f1Zzdjcq1mZaPc5Qwa7dxaEw",
  "key13": "5a97bZ4qpiKTeEWGUcjYPa7MCfkP89P7ajJEci9FaM45sJno8yKf7TXxC6rWNu1bq7ZVfBBwbKHkPrBrJ6rpVkLv",
  "key14": "3wtRni8hC7nFEnAEhohrqt6xrCR5MC5HVn6ynpHv5wARPeHcFpDEWX1C4hLJTNvRZppouFDdhqbcNVwXw1qN2RNE",
  "key15": "4UydRm79Qb29gTb3jagMyAKDyw18ZSbuA2vWxvRteJsqVq5XKHVzEZEtQGsVmhGG8qkqpSJdXmhFvC1coiZprpxt",
  "key16": "3of44hA19nARu6vb8Dv1uwWHwtVSaBM6EAcwxq7kdp8w4dgviVvaTaJyD8h1yX8GJJK7HYKEMoWKfaHzc4BsRux5",
  "key17": "3r4W2z8pe95M3ZpUxGn1Cx6SGQDyXvCmCqzNTtmSTv8yemhiULqsUXvVfHs45Cm8MKuZWgoCT1GRrnR5mQRbLL9S",
  "key18": "2GVuyFdnBR8aPzPuwWspXShuNTmu1FnJJV14uUPa3hZoKfrWqzwuQ6bojFM1j1K4xNyyajgVu81Mu44mPHcHFQaQ",
  "key19": "4YFwN2sjhAJDCKtZr6nJr721T3Bxo8SbXUssZrUst2gabsSGbDfxrHJDgEPzkCQW1bhaRZmfkPWnQ3h69jEAV9Wr",
  "key20": "22kqSzHDwMBwv28dj4aZWx2rbTqp1WrDKe3posHWocDFnZi5sCuaYR2GD55zh72P9jZx8yYSAGpJjatQsS2GRVYE",
  "key21": "4hwsdAJ5qQyycyrTsgPVxdxiKTzYbipMR5ViuUQExJ8d3qFJ8Qzha6wppuDUeaVXgF1GkWLrGuNfz2DYoyEcVxrJ",
  "key22": "BzEFMre5ntRZqKh3PSLgr4J2dVcJyYPBqELKVDj2jRQW5kt4aoTybhmvzUbXRQB762JiZm3ipXtmoJUfG4wgLtt",
  "key23": "2DdNkFQWXJ5RLno5rt6jX3npZPk2qjv2rVs6MULurJBKnfixKTh1gQbrjmsTG6GzgMATo2P7cxeoLnCU2Qe6a3Cx",
  "key24": "3pWJbgWGiEGeFehx4SMJpEFnXpNr44GJbQuhKD8R7hrvuUpZqzGtjoUVpHBrCrPKKJhftFMSQGMMfS5b887HUL75",
  "key25": "42nceQFcj1XT6DFELdtN6K5YZiw9jhPG4u5MUNjAjarZ3ubQBThD3AVLVdUBvzHMSPRn4mvDchmrcqD4QJsztkMh",
  "key26": "5GgZEnuadNdpVJACQZUgYVGBL7c9XhqkCF1Mu1rQB7asXfeBwnnVr53GtYMScrdGLLg9S3xfN9StjjafJqcqoYQv",
  "key27": "64Pv8HjwZJCuCtXo2ZXYeXeHfRzDurnXETnhZzkpApB7qyNG4jrJpjWJSRnhUVcR2gbTDWhLyaqgCxbgM4ML7fnG",
  "key28": "5d4mBUgvB4C2uJopH5LeHTqF2FkGYAuvFQYKjpANzwX7WQXh7KJWWSp8ueyyBuSxgLCmvDUbswd1aJj9dqUFT7nQ",
  "key29": "36fC8WvTKD5fCHJP9BB7oCtSppD3yh3ycefb9ykZ7zi5DALNtJBtYDYiZ1ujkmuxuWXA4J2jH5nVsg1ZCwyDSGFM",
  "key30": "3f6XxjrPQrBn3idxtQ74FDFfkpUs2VsVB7PLhbybLgrAW8uC1iQp4BbYAEcYhkCTHKxbwMA9XVQ9MdLYprQ3bkhY"
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
