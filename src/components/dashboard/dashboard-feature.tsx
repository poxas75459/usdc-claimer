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
    "4wJnkTnh3MskiefrXudjdTiff1Htyy89SMCZGoDwFZmTykziukg42aP1qr4uemPfgu9BeBC3gQswonKiayecVzjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5tyNpVU2wcAFV8adfti9rvBD6JVjMnUuh3fqr7d2t56zM94Y5uY5H3UyVfehqq5xbGqtrMWxfbgQPcrS8S7opA",
  "key1": "4NNdbo1iHDvX9mqe5fzwK4YywHMYoi8rTjfThKeK9gR2AFB38BapVSTwGQzRDSVgwKv295sNfzuynMP59Nkh6dgj",
  "key2": "C7y6AmzHVgU7ZMqKFkAdFd5M9FU35TxfXY9pN35qtwLB2DBPcy3wqjJzvCmN6h9o4tdpkuP5sPcbpeYait6Lmny",
  "key3": "24ndyBdZNoUe1tg8RPqdppJ4wuDoT4rZNoM3sXtmNdeCoNs7ursqFuy34fqSwNiBfEnDMKDmRXVRUTSYJhKH7gXj",
  "key4": "4qSxjKLcSDjXUTtBmGAPxyPF1obP7GNAkdfrEzQq6QgNwgQozKoEQSgc8hSYzMxZaq9uYrzAetCncksvXc67EuZ8",
  "key5": "2G3t8nfA38nyTwrdVN97wXYKuy4YLNDqDtsLRiaqbRMjykEfPNthghkvCGTFDh3vpKzFQapxGgwRxMdt5uRAFSq9",
  "key6": "CkSuHvN7DUp75ZjbQb21FiATdX9QXoFvuscwatz6Lh25FuQzu5TDKo7dtnJgiDhRUYhDP8CAhEJmwkNt5jj2kjV",
  "key7": "N9wRaCJV2oSTJPm9i5G1ShuUR7E3XppLxK8Uk75P7rn37rg5WJuzbPenw3mxjje5LY8LZzZDqYRjBHpKJkc4cW7",
  "key8": "4v8F3ceXe8vUwc8nsVeNion7rh2KDxUEapjPch2TS3MYBqP4onmKUR4gwPbN984S39Nac9FGsgk8xx5harBnCaSx",
  "key9": "5KBdV9MgBDcvqQGzQEgF16V1s7rXfXFkjM8vYnCicvVFkywxfvmbfysF714NidQPokehGjq6p1LsA5o1FNpDVSfk",
  "key10": "4PBJj9w7e4NTyu2drb77WBKGxTmhf9pyazcQSSMppreVMrRNEZ5GUnNUWxYRXhCANzJcV83CPH2b5hvQF9Lt7Ub6",
  "key11": "dRQtLjaZgpe3vpgtWznMR5Tv5uNKFbPwu1o9udsgkULs9goVrsHdDEF1K1g2UxsVLPuuxLagXzmsDYJ4c14ceSs",
  "key12": "2B8yV5d4JSn6pzd5iVmPvzNeFLcbLHKJq8V3xkphJYFr7GKvv2qW2PDPng6EneTULWDzZVBNwjuW1bRDWPq6aSa1",
  "key13": "37m2dNQA2RQZNaTtHqAMV6qHq2TZPccqS38Z7jsiNNTLL8Xx4takdmQk5nkyz3LLUD4XHwtwZvBSZ2PCGg3k91mT",
  "key14": "4C8AcgNRZrhXLFfNw2ZWa5gN5ECLZQ8LgmF8sYju68BpKzz2JbBKuidQ1ws9ZJ4drKZnLPgJzDKs1JSgrPURp5vx",
  "key15": "3gprEt1hGFrjuhpNJEQ8gGS1YMZJgEqFchc2CpXRZwHjXDftR2Yxm7LjZRMzS4ZLdJgKNhFx8wHG8ZM2RkAQjQun",
  "key16": "2iT4vJUP6A3U2zAHvTkAN9cFsgq1sG8FawanrREZ7QFz3JMYSF5H3Q6NZPamNacaZxi8xEAJ6SfZnm6WmpTB5c6k",
  "key17": "vX8vHG5faV5NF5MsP8bzKnHwAhs2bkzWVBReLqRH24MYf5wPvR4Dwe8qZxg7ENE2WXEnZEBNuuetvkMXpmDTCmZ",
  "key18": "2cgPtkbPWkcYSmbX2Ej66GxLa7tv8uvB5ERvKsYjtu3FK7L5uP3sxXraSvcq8yiv9FadjYvqeueAAhsVB9R4yFkF",
  "key19": "o8Q6AnCjLFpWkY8LHWyJ7jgoby2k77u8WbdebUVtvgP97EsfyvoaNqCFGWSweWLKNYhGu3g5sxpjHxJQrVfxFfy",
  "key20": "3NmkqnBtFBmjbGEkn1YpC98epf8mab1NTCvahitEQSc3dAB6qRpnQtTsEFepkpkbqYiXAGhHubSCPogJSqi7jCeX",
  "key21": "KLxA6Ae4tcepEdfyenonDKUN4fR2bHeK3YDHWxCWz3R9YCdXiQos3zRF5o7Y7sA1f8g2iChXdvcQFjq71WZxhXz",
  "key22": "4ZJNtrXWW8u8bAq4fyHh3htuakwvdgq74Eh4tSW5bqzF1KYFsiqsKeU4vL3zE9PD4TXQgFDWW9sgRWcRciTMbNir",
  "key23": "3e37SwZGbM1tLM8yXH8pXom7owpf2v77ksNzq9ZXVGPAoMx8zA4ZqSF1e3pxdFSBvKmMMWHV7ab1k53YjSYH77L3",
  "key24": "4k4VheQRvqCKaWDqkGbZRH1Np92kJJxV6yDDJsKCv6svtTzH7X6wZeit6rvSsawDoLhVhGAMENZ7SYhhsB57hxQJ",
  "key25": "5Mo4bAHqkuTaCoynUe5tVZcZdMx76TdKFXwcKWdCcDum5B4MxKzutP9AerBJ7vkkm8cmJqQ4EkfQctDMLPys3F2x",
  "key26": "4fp895gHH4DayFbUB2nWQV25vHNGcu7eaW8LXT1B48ZnkqXHckXCPtzKjXCa2aS662Ep8EpqNx4rMVvd7f1iz8dW",
  "key27": "45hecN93r195qSnU9dt5dLsH7U7VcHjNkcQKbqJB2ZAhzzuVfoUGuBxHkrWNEBizohYihKPhRSzLjXLqQjDbKEgs",
  "key28": "29eQb5cSYN4mHGKYUHz9qkAGqZUTVTCXKewBGgJRXj7J76jjNW6rM1ZpzSwyYUP3zyBHnecrXkFmsUMMq11YHg7L",
  "key29": "HLjTcBh9Tw9xbMoLHnv8wvJiEjn9e9CfGXnqxsyKM8JXVLYEmufwsaQq666QmU94Tx2FcPjmZVAj4aTejZ25rh6",
  "key30": "63Ht63qKWJTS9TmtVaxAyrfKMzdSHckF6kCYg13fUBTC61AWTK1TF2d6ypuC5sdtMHAWTgSFnVgmBoCGXuHCuq5H",
  "key31": "2f7PzhKzBkPpQFm2aniSjNZNe7zunnDfM7yjJT6BHKKWWZaxLj8knhGmeXsB1rzKwMhtSQzXDzPBunoppUf1x5T3"
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
