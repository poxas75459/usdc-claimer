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
    "3qvpXQ2JLbP6fJ23ST24QQkPRjqtr8kBYks5w811ThaTz3mHLftTyocGFAZykuTpxP5NEM51KH5Q7S8tEP3oTSgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GZPF9xgYFFz9Tp67VV5oWhE8Mo65u7BozSFDPyXs92jdYH3oD7RJKa4XaEkhtzwMpYaQBXzBbTSyZDV3iVQwAg",
  "key1": "4mdN7RwKKZ2mWA2wbS2E7MQUShFCvxwQhcFv5ZQC63YGrboPoucmssGTJ5eBXcukU4nXQVKKGmUKi5FbiDjERB4T",
  "key2": "53sNH5yTKG8bpGiQKc7ZijFjJqsFitYxfnPjyZtWWLrdti25heySQ3jAdDo82MfJHdztJBgffDCT87AYAWmoRNwu",
  "key3": "TreP8KYNA1RA32TEGwnj6hK5fZXddjSo4tDpuBas7VvFdipkJZvz5gfV48pLcrsuZqrTHyCTJ1TMyXB9UVMJh1w",
  "key4": "3cUZnt4ahQrt83fwSVGnBX8zqjZoNc9Jrd7pdzrYCSdM7Z4xyx59X58vQVYjvsAff71B4NMNSda4DpZsEvQzNVWz",
  "key5": "3NCsgMrLnYrNEPddaa9ChVRjbP4E4NF1HGN2ZjZTBdVBiBVdDmnmPAaVnc1ANoKziQdDaQkiYiB4Barh832pwTB7",
  "key6": "2BuHzcbHmcDFZMZrLqQ7jFv49pZ5drWALa7ZMCev3xYdjYgSzZrz5tjstL8ivrhRgkJwbYNmMZE4TFGoz5PXkDBG",
  "key7": "4urabMqFrG4gNpEs2r7WoKSPfVwG119VkhssywrxMpT1Y3V97D9f38wW4FpTB5SmoW7g6qyuXJJmc6Gb3QTK9CKB",
  "key8": "62F93pykJNQ2t6QSacZXoiTmGoxYMgjta6uSfoeGfXwyi5WdVm6PXg5iu9qdB9xCz7NUnQyc9bVxNdTKV4gU1Q98",
  "key9": "4tc5MSz5UKNsz6kDXs6vHbqBu8w8SRyBeBUkh9m85mFL4WkZa3NcmYNZ5264wBbv55A1vXtyjW2wjSjh48faaEV2",
  "key10": "2zdxhj22QahBYgmYGbpPgKyDSai2cF9Hm4LJYyaDZjQUn9zeg8kd2nrvbdLJmjHjZVZcoUsR9yxNdocFvE9o9yVV",
  "key11": "66Vmg1ic22URpMtwtyihztfvrCZmTPw1bD4gjVS6caFNQXrwW6GEqerhbtQg6sypLKP9sXakNWp65r7VXnSh3drV",
  "key12": "6fPbRVpt176jssCvevZr73bV7TVMH5HnkFKvAvQwrJoscPZYVEVGnEwiKXgAT9jc2JzEqyx4oKQLADRnvUzTXwG",
  "key13": "2M4RuvrohQERtM3ia3P8XLnex5DtNMMVX2NjLFecPZDmzp8HetVfwuSy5x2Uki9B4oZMz3bCCkGrSUixdSyS3Rtj",
  "key14": "4pKtvhXW9ACsaMrpbAcagU3veeHzyhoShvsmJsCHNuGVhT6F4iLUgcvFVZyvsfFBXPAztLmKGGQWkBqhwpJN4vzC",
  "key15": "39UyWKCS3qe6PU9Hmqnp8qwhy7dQgWbkBV86SjKUGxEV233jfS7Z8w4bYcyDc6MMn3wf8F3mSdeWmwATSSySZ29",
  "key16": "4xiVAHHPRUmAeqNMF5PbHjForuCTPxxESW2G73K9FwxFFDSXn6awSaV4iQHLxQWKw4pWvcHGyNdwADbaBpDxCxz5",
  "key17": "UW9RNyZnkomvMCeUxob1zvwKDz2P3k9HYSZ1KjrpAYxNFwSTHB3kbS3zTCyg468iJ7q7wPBKNhRf85EKi4MbYhx",
  "key18": "1Hy4KfA81KX6dmsXuntCGS4r5nQk1kbgpUzJ7FZFW3WuPR51BYXm6BY2wfd7FrFbrVfk2LLj1M1fqBJRjVwo5S4",
  "key19": "1YLXVcK8NXoj2eyXd5hwCQ1YM4WHGoLw8riBBAyAkiJjWVHBbznkywGxdixsaf5XnUGHXTszhe3qzbiCnmaPp7E",
  "key20": "4sGejKFz81FfbULpcyiRmMq4a93XjT6XTYSkjzERvTyEXF9ubmFdW2HiNJt75cia5qnrLzyFS7kw95ibdFpCUF9",
  "key21": "BkDkk2RS3na7QHyppAuWA5pXjBuZvJbnHWyQb889yYWomrJc8H9weWmfbhTTjqsqE1bYj7m64K7npHo6GkUBDoP",
  "key22": "4YyGhuNCKy6Yq9RDqqYxbfskSaxqoqn3939LD5jRsYGkPTAzEHVt84AQP8kXDKJYZ7rzi1F7mtRJ9SqbCUnkChER",
  "key23": "2gJiQAzi6sn5DFs8654n2eBy8yYTn57PwXqhf9iSMvMTeRaBkJcQL6JavF1zNP9BqKpH3bNz9uWryeEP9CKajMc1",
  "key24": "4Ptjcj6HG6v1wGjpxvvfccpcCpQ66GRQMfibjxbUTKSXYHveN8cAmA848pe8W9aXe31i7EQbPBVBAxWjMfozy3HQ",
  "key25": "3aVJvXyRGGV1juYhGRHfAt9KX6Dc8CGBJCWGbHRUvktf5LMmj6C1BX6wraPmy1kDRMk8UMMM4NvmzPjuVrbo58FC",
  "key26": "2zMErncsXkvFqd25KKPh3PGfanuNvpr9jBiZ7wTyyMoMVbT68MxrFqUPrFChPsVy8D4qLE8EvoUPvtwa9sUPzikg",
  "key27": "5Cagmr8X8NotmsuC2gvzySVGB7XZrZFF3vZJFtFhbT66RXW55njFqDtx3xrfNBc41WKP9psRQYy8D6SnWSJj7TRV"
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
