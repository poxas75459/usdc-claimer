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
    "2UbRVsbp1otVroKqqd4hEFdyztu4LAUFZpW2x4sbdE3w5wBWcGsW9WtnLeUyzqHd2Zag4w2KLQW7ZnEENYyQGMCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FyaM3rRtbwFEJs8RYdNyUaZPMcn2HDtttBSJ3GVLs3VLH5iM7VpMqguzeNcgoVwoaXDrYCpbydoa9nXr5Lsy7b",
  "key1": "HJfip3tTEbLoMZaLL76kSxjY3Eo34JSQzc6fbpCPaTqZkZCRSokKdvhvuFBuVwPLrwmUXT9BXMH3ekSWCNPfgvU",
  "key2": "45fTQgKyM51285kZBjQKDPNJfrY6bc5Qn9XQVQjVaZWnxqpBLWHBk9TizxfTb22ppG3eYRJAThGgZVG1QB33UqEk",
  "key3": "4f3JR5hr2Q7P98NcGvfmGXaGveGLK72WYmm4W5Ziyx4KGwUTXtjLJnDfxcJKQRe9eWmQc7zLwgdiRC1BUfEro8e8",
  "key4": "cvvqqWmhrpBAn1sWvyqkAqRAPEKdCr68UUX2pRBGf8LoqKxSG9Yocxh3WjZas7rojBA4i8dsd4vqik3dZv3xf8g",
  "key5": "54R5wWSJNoCDi4iiS2Fm3i38V5HvFBW3B76DKchkpUjLhFJRkUNMXUqvo7wRwz1cwfmd4MtW1VU1SBgfvC9S2Qoh",
  "key6": "34qxwW95YkMSswkSLxhC8ZvQ8gwYSu5SbMKJE6zEC3YjEPNNhRSqng5AYFqXSzk9C8A7DDj6o4on2dyRPnzH7znV",
  "key7": "5VgHC8vtZ3gYPnwY7JxUY9fJ1cjbX8TL7gUNvdG1fS8P8uBTv9ksN1WoXCTph2Krbe3fjRMaR36JoHg2wawE3k8A",
  "key8": "66BkWTgBbCHY3EHqzK7gizNsUWydJcwJXYzcow1rD75eV12pJKLAHfn7KNVk5nUmiPF6tF7mwn4GLvrB5xJYZb9E",
  "key9": "jWytRY16kTjXdVXLFsdoAYSnEPUEB4S6UNvVQ8fQ3etKgjxkdPhwapHsoZF7917xRSZ8W5393GVGcvpWCnDpQ15",
  "key10": "5R2oYRtEeYaguiZN5byQpY6F6AEuoexX1HMn6XseZC2AvPyFxW7moQe85AYdV2mQfU1YJFVPSyP8aXv93WAqyVj3",
  "key11": "5uqF3MyhLduGEjngGixLsVjvpF3uTiTHXVDzy1DGHNDUi7vG7XzknEAWDkxRvHBZ6VzxMWt7jHnfxmpVfiYsdwzw",
  "key12": "2PvAeWGayT69HzKjT5jMT4nbcK4XUmA1mgGbtU4HDX3dkb2VcHvdjvUcHdMeGJKpXyLed4CBwnmFNALsCsWDeS6V",
  "key13": "4qyScVY5qX3a1UzfsvJ5YkUss7bwBVjRKrQnumqPyUfQaYgh2RwtixYLjFbPqC3mwdiHNi4G15bFfBqVmd7YG6qr",
  "key14": "4uaVCmhgoxD8e9yQ7qUbd2TJhy9okdRkjUMUtvGR3uFGcfmeGsQXrtnQwbqRaqY8sQUx4kbKTokpw7f4HCJrDW3F",
  "key15": "N4Pmi5xJg7yJLbocuBHJty6ZbHH2mVnrHGgvGApgTDcstGztMj2tuD1bPaiMoXvTDXv7AyHmJ2RAuUGhLEHeQYy",
  "key16": "5DnqwNhRKN3KThu1Z62M358qQLo59z4rtX2jf7H4Ub6AbNWPeXfwFqJqSThUGBiG95a3sUTfrsuQf9jxYWwqd1Yv",
  "key17": "26ZLyDNHiYnqo1Y8mao4T3Zw2epN323mPEev19GMrS5WX1xqD3rySTHc9B6TMXy6oYsjmHLoJ39b34CZXwqZuydN",
  "key18": "2kwVtprJZ1swot11LWhSK7MVSgRDoVadBnoiNJn2Xqp8yg6FgdhEw1yBRudWDGuoH9ZTGSDiLPn8uEVnBD5YbgLj",
  "key19": "3ThQtS7mvniUFZB71csDfwu4PPXGdSEaGVqAthy6UEvCmxHdmy4ZKno5VGkSMUgvFkKHq5y7r6DfZHF5rmNwM2T1",
  "key20": "3h5VhPNYaR6xS4QgHZyxGzJp2Ps7zYzJoUnrHZS1TqJp3rYUNKHgywpciFxL6qj2CnXGXFXXFkMXN9WYe2h2bsve",
  "key21": "4n5GtG2aaTDSV25VqUA9pFsk3di4DDWBQ73SKLMVYctgzvatKvSfTWTiVFZo9uR3oYefdjWyGqFS1UngwEgANwnL",
  "key22": "3rfYih5cbSLHdRDmYhFbswnjsr5bkkM9qydwasNQEBeMfnU5zGRLpAvgfuiJzoPadnXWTnp3Vjnb12hoPSEuCSve",
  "key23": "2fcxLY3WH3nAvfSw2SbQ52DNDqDucRC1nrFdEjBNiJ9yerRto73asj7HmY5SFg4TUsvujUbXFpzzW1pUhSv9utmu",
  "key24": "Ei181Fo3aADKodkEXtSML5XN1fesJicyMVKqqJxYXD8b57w9cCfDXEjcyGRvpzqsLYB4C4R6aumUdL94uiCnyvi",
  "key25": "7gLCy1oic6XwLMBFMN19UhAJWYB71gSsmdcYqHEZHw6tptGQ9f6z5cKfAKH7pxgSP9Lf8FfkP6jibhfVxhBKpWL",
  "key26": "3PbJxPeHmf3HgqF8vDkpe1uZ1rBrsCjCNmLuifG3KUHUi8Qj37NwGKzvnxNyJhnLKDyn5rDtik3VgkK2H7W4bTMD",
  "key27": "4Hfrij64jJGaTbjfQsrUDCWKJp4VKvB7QBtxEeGU1u1GHJKaPi4zCEzheVtMFZ3KkCVKCH5RTBuXqbAbSFXyNPwB",
  "key28": "5isnWtHPXjBeB6JXaJ8paJj2FBEc6PayCAHyV1v8dUeFTtZT2erLPv44JiK1JCjWA5rsP2sMN8pQkJbuBpcKNQVX",
  "key29": "58B5vxezZZzTF1ZXuy3UADyEmmNaKZua33WcCuFXbKVVAbxbToTFzyzFk7q84mAvY2F2CRbSvyMFdUtVZsydHMi4",
  "key30": "xdcs72WBaT2J9aFwkBN77hgqCZp755B1zxMFsURxFqgGBQScswyx2cCVok83RwwZTBASyMysHQK4J53zpsJwn7R"
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
