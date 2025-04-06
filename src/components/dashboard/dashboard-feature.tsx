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
    "2MJeAWmof2NBxtQnTXcLLrx4bqRNYdcDmYv7HDK9pXBJfekKUMWMGRJyEd7V5bF2Lt6qjn3gWFErHqustzxVwicj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmuXGvDzydbgcpeKCpGJaKWGvR6BeTVNhjvwWGnr1CxXRmo1anYr8X6mr7LFJrrb757NKXoK4iQ9dGFB6p6Jh3j",
  "key1": "23NZ4wYU5mijkmBckFS9RNK7Jjnts3nK4UhPgPNzQfQCwDeBxS1qhnGbvz9zqAFfW53nE5xyevKoM4Q4RNow8vQ4",
  "key2": "4EAtnDq5CqzWBeTEqcDEqsi7PCQc4LBVMmR3iTPDpe4t2afEB7HBLZKeJEkpvfgKn7uFTSyHmshmdG9vZCxdHijm",
  "key3": "4BbfqDggg23WKAGNQ2dVtuGCXFtYyXH2svjLmF67QFbr2XRieB9mWfVvWsrGnSBDkSELVueK2LYUHf57vS1zdzYM",
  "key4": "fjiEGWFKNifH8y7ZBeXxSWBwihcEQBghhu4QS3hoXzaWkzXeSaBx9DZPhxL2Jrt7GEQXEjNeGwJ8v6ErGBney7R",
  "key5": "2LiB8Q81CQxgJevTTCUxpHfXdpxffzRumGN4c5VkivrQECNCFjEmXZ4TPFXsmVMFnr6S4W7CgjmF1V2UNRKrg2Hj",
  "key6": "5uCjHD9Vd6R97wKgb4XLtp7nCCSYwazG78PDQex8ZbaKxCo8zhhDPuZSniie3ikbEbTUySAtqDMW9VPDBNDdKpFJ",
  "key7": "ceXuwLzQneaP8rAwsGXP7WgqkiNxJDubhuxHDHnoGkAn8cgymSYA8pu5aEQwdFDmkwaNsna8h9PHgmJxC5tRHEM",
  "key8": "2TFv5EkJzZ94LSSGjG5PxnLX5J2ZnrV76Yh1XSyZL92X77gcGF7Zdza5c8XuAYisJRdTjMmkrmJPxJLQXx2mtao2",
  "key9": "5jmGtqyhQdnhBpPpP5ti2o5KY76bW1mA3Ri7Hxsyo2T4ABjehEjdHAzRvGJDdscscQ6awtNzVBRLQZzkuh7wymr2",
  "key10": "2gNHCVU2hTeckeB76tkCDYt8QpD3ZaJQHXfrjfgA4gx2uePPEi7nhGu14eLxbSQ2oe3h44nitoCHXVPNUkucacUh",
  "key11": "5K4kuNsb1vryGxJeHFacyKK3QjQ1VFoAJPzBxg5nLDnRTep24qiQKRFdFvgyPQ7gHyKUGfvYJp8cRMUFdDme2fsM",
  "key12": "U54WSHhF5upKZkciL6yg6aAakEhZ9fKou5DmMcbSfLduVNmrxv2EYrzH4QHhgMWcqiYxSnZypWhMzFvwQig4jgp",
  "key13": "2nLTJ7PXbgRU5nF3dViYfuLEn6Q6s8PqPJpjLUCQohUjNAMHPu5MC6hvEAxDBCmpEoh1PSufRZhQmWAET7WREhV7",
  "key14": "csz6rTutc4PQEyTEmhEzDcvdXVtABnJxjoxmy6nEjdoCJ4D37jMmaVND7Mfh1xF7P67HeRwdtXXFkTsX55Lfwsk",
  "key15": "5D5F8tVUXHpXzaRVKqQckCdoA9zF9tNcAPnzrnp15C36ZX5hX8oFKRZkmJv4CriutzTjmgrVzzNK6CJ3AR5d4Ut9",
  "key16": "pqvegyuUMzpCxUjKhuWBe6LrrL5PFuVGuapN5jYSEe5kk6wiKt7dmuw21QzDjDeQKczZ3B69J19vSLRVJxbTDqm",
  "key17": "53BwxPJvsoLzD91yQTi2oYgg9AgRQb8daSfVigWk7fFkLuh9xpXM3xYb7umKZuht5Sjgr9DnjSSmg5gdYfPAJqun",
  "key18": "5j82vBn694VbTS662XUomdnkU1XU2w88n1fhJYJN4MUMGVhWkzFATDPE3xNfcRe5S1zMgXuexzNJSjmaSdmjAVU9",
  "key19": "12A6GzNqYNHYuqYtVU5VwmcCqyMESsfkP5raFfQ1o1DLo8ZV2GgvYwQ3NuLXVfofskZRukfh4W2ifYDkNuxiTgkQ",
  "key20": "2QQGanp9RKgQepx3qL7ueSQn3TDRF8YvQMwv7nkSFh4w44V2cXo89WqVbAFRjpA13GbPe8sjER5nxLyb7F5JMsnH",
  "key21": "vG8AwCYXdcWrnNuzyzfZ9regsJTSQ3ezhaKq8abHyAUCDJo4Zvo3iWGNVx24h2YrYgc5SKA3w1FaH9T74aKkGpj",
  "key22": "3x1JJq5wsfQqfAZYFt3gtX76zibdQG5FSHeZrFz9TSREoxzD4U45AscapYFnWQptwxi5LZG6vbryjQxpg8t8dm85",
  "key23": "3ZdbTiVF74JD1e4ifxHBowKfCWNUUb7SZqqVd8krZiTFisNSKs5wFkVa4pzqteYfuyRMV1irFpF2hg4NAzZKcGNS",
  "key24": "3xV2ESm3897L48aUJoBrMVZG6i9aTGUjHY1hyk3a5NUMGBLs47qhHABL745Q9yCe3hNLBbQTjrCCWupmMDW5Ua7J",
  "key25": "4NJa4seBG8qXXCJDniiGN7p7jQSrG8baY34o2yZsHh6zTa2FeQPgUY1axRVgpxzjoboXZv89e6vkAT3F4sm9Sumb",
  "key26": "3k928oV5bR82uT3aq3A396nT98aiJ4mZwJowjR1S5mRTNaj5PeJESNhjcNiZLKesJXvsbUCkbRSvhvWiy2pnFeq4",
  "key27": "8kPkiQo8izTQKQFwUFza4jH3tbL88CKdBr1ou3AU32ub8vjUtPmc8SUkHAtgZPbQCpJK1invAwsbdCshmbeySQy",
  "key28": "2fdzCcpkU7kmDpEh8z1T5zvjYhtbvr6VvbUZNqu3PGagpLYf38r2vpYySvxXTig8c8ocbgWsLJxca7gTbH2c9Hg",
  "key29": "51tZYCKMLox4DbzMU1Sf72MxQs5vTtwLXHJwvfLhT9Tgfa1GRcpEZoXRjjMcyuogFeqMXPTfLH79vqTVN1v1ZidX",
  "key30": "3hvsff16z9YbpqYQPkB6JJdYCFzZfgnN2Y1TToo4Q5vKmbuW2BYsUj9wxNsJx8ogtt3MmGe8ysGDn2CzcZpKbWWK",
  "key31": "aVqPMqUjf4VA745yJG8hU7MpveqKcw2mr1afBsFhn7jgFg6HZ7X2oC2g3W4iMtSDRihejPhws4ACAAK5V2yUWtD",
  "key32": "5U2TittxBsVtSauDX7dFp6WhkGcFakwzoMC8kFsUA9R8BFGr2eSRnwtn28c5wURbG7Y2KCcm3Sk6DTvqA6S8YajT",
  "key33": "349mGBiuc5y4dTBSsxC1q9GLotcLQR2ejXH93XKrrEr7UDGa1CY8fDgRYWq7nPgQsi9Ex5r1sfK8AqBfXNuLMyoo",
  "key34": "CWSj1CuqsW8mvSuBZcj4aPvAiNxn5ixkKYMMW6zfn8zdZLRrBcsCGRH3wDxXz5rRw4baKxJDShejvKxFrHVweoA",
  "key35": "2oWvkxwPDFwYSD47Zp7Cuw1zdRo6JbmYh1o4V9Vjz8mjHf2zcdL4ELpsuPLzYQv3M1KAWaQnFDXLDPhLKD6GZcPj",
  "key36": "5xspUZ9aGKrGP7PVe7qsov3u6esEQexGdUQTm8aJYNVNMuhnDJmyvCuazPuBpbc8UgdJZGVWamcLjev6gVCvsgaS",
  "key37": "2CkA6W5aZNoXBiuqn72eif2PBQ4mdt59Qrd8FLA2N2UsyeZEf8oHtAbxJDuwzmHr352hyiyY8yk9dE8aFZdh8YhJ",
  "key38": "3fox21fHfyq38PXnNZ6CmEFB6zmmKfrEfFnR7EHsKjNz2hycS95eusu6L1GUZzfFuHLRLQeJYJfxp6gpRHP5S2SR",
  "key39": "2UVLQjELDQwp5g9rRJbRb9KsxogaYLiC6WjdrdtyNjJBnNMYBgZLsUTy6kBzLWzRWwYVBFFU3CRtntMAQNSHL7oi",
  "key40": "5D6tBaT1Mn5hsceP2Whesoyv6bNw2tZGSaavmVHETVmc34xPuwUEWfAxcjuBhDKgTLAtEDk5ym1eUUWF2yG5hP7B"
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
