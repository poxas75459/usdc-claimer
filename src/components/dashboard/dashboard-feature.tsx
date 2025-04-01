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
    "oQmXSL6rT8EQwaURPZHKkz9Lxv1xFzp2ZYVrr3NqwznnVe996BW2YV2tNVDhjdGfetariG5vG6kEFmu6v464JX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxEKz7jCT6fFpsygK4ECoGAZK4TaY8XwJjHCJbHRqK1kierh38YLoAYUcdkbRzuwsXPSLgu6yfTR6TMUcdrBPV5",
  "key1": "3JeNJr3xtseyvhW5VVjvJiSTEVtfSXkw6i61XR2fHmG2LCYgAyMhRLMd9DvPXfgVskp97W9FG8YsnzTN4LuxGqQG",
  "key2": "2iz4YAsBw9QYaHcagak9k28k837BVVzN1m26nt8hYSY3E3DDTNVvdsf5PPW5UrFKmQTRphozC7KxSZ8pVXQcpsao",
  "key3": "cjqkvNoPz9riz4SWR4JpCi3zjRVtp82hBMj6vHXWSbEnyqn2MfyacjyHJ4FJcKPfaRMvz5FycuWF5ao6AFPoNnM",
  "key4": "397S3pyWPsn7xERR2sxkqqFaqFK9BzzNnnzbn6323MDwB8iXJD8y3EuqsNtvXrWQ7uxoWs2xsnjdf4BMhzsm95gc",
  "key5": "3qLAC712igyEKux2LZ6MDTBZnsv7vVPXPefwwZewVbbgKxoG9dK7rzxLD8j7MwgEdjgJMwpMVVw57AZxGcEvd4CU",
  "key6": "5QuSkKttkmqxq4H9WZh7AnfHwiwXL8ivejGywvMDdPicCciVtJyE6uuUkjgnu3Hgvf9KvgC6eq9xRJqYNQxb7tM6",
  "key7": "PUaHJpEBCJXgNnypS4xYLZ1hkBBd6tkJ8X5NEfdFte1BeZtd3j4Pg3gnuZNFGSiYz2ULv8GxFBM7DuD63YMh5XS",
  "key8": "5Nyhx8PVoNwfsnqz7pxZvdRtGhM3NaduDikJVCvsHUAK7kcVTfHzp81yZwVSVkmfZkgUBFaxWE7ybsxJUNYgpqkb",
  "key9": "3Qhfu952YsMorchhHJAXkF5pK4WDg8byyGP3bx6zfK34dnwJPYaFasALThAhmkVJqPEZuXBxJxE6Az7ykpnTbgFE",
  "key10": "5zXFLypgWKRaX8yaFtQ1WsieqjR6NGw69nm8aVZDBYRPJyKhHCbkKY3s2LHt31848wRNsf9qXiXWbPrjToLTfEAJ",
  "key11": "Bt1KDGJpNk7kJiens4846PrASsc8utakxjRfsvvU5o38pR3ndncGz8uo7ShVVK93LoTrBBLsm6QvEarNLUmykDA",
  "key12": "3XQ7kT8g8JVmKZBQe2hjtTnWdxnuRUWSANVumUcpf1jmLNmVdpwXqCTF55Fm7JLmJ7JRYMJmzv4wLuJYdbyVRB3E",
  "key13": "5zMbrLXr1zBeCTSpLsB98FXdgNuV1jC5oMUiWFWjAeEWDqySUJyRhsnbjFVZy6SZt9d5WgojemnrvwRPTHi3mHrs",
  "key14": "3k242BxLg32XLrqdtvM44zHV9JSVcMm1hDShMfEmnCqcG3Axd8v7zgMW4YD1CHDGWRSKQkBuMi5raP5HSyCuxwst",
  "key15": "53Ln9D8W3iSCWTMmepaU6KDToVwAKRf1xxdjbV3xayoVeyw7PNPe1LMErZjhFrc12KwNyCiQBqkS8PKhYVbsztKc",
  "key16": "5xL7kniE8CwXUL6yq6UTLEQr3krirQSvBxqZyvfhpov166uwGbEMLDqZSt4eKAAdbiPu4hDRYbaCZjcpfL9wVeSY",
  "key17": "2Fgi4AKXKPmT9tuu3Two2AT1bdBxM9vw3XG9vpK6we3eHEyYvsCSADW6GVXJnb1VHgkSm9CyUFG3sfo7miQMLAuu",
  "key18": "4HbXwTSS5fvfnxPRJvxnoPrGuRiAyCeCTuk3xt1SujnCzyXNeJy4Z7itug7xg617wnwSAyXko317RgdgiYPpoNdL",
  "key19": "543beroveWQn7qPhRuAuePrMrtnJPwDyHJ7vTEgatzUezPdob7uBDp4EsvRuHn7XG9NPRV4vQoAsdYVpJpdGA5og",
  "key20": "57EZFZ1RpKx99XkCyaq3x8ozg1iLbowCQ3BEoNoEM5j32cP8G8TSBgsbG3WBs79Hb86MFQsJLyBi67rtjnhWEDTF",
  "key21": "45rV7jbu5ShfAr7RGJfw8GueQeiE5obJeGibaPYsCSXPmm84DXiTCWsFUgZWhMR2eDtBSHsdWR8hhfphsxB5drke",
  "key22": "4e2mTPPbvDx8tJp5kgs9TB8tFFG2Y7oo9ojZfJq7YHs7w9sVXTY29VfbTG7Badb2MJgYAGkeYiWgS3k4vEVgxijs",
  "key23": "2VTRzWkzBZwWmHG8ZnU6skggwxRLuuKW7EwNnwsFQEHK5bS31zDDsZyhK2UR9fT4DuhCcaR5NfS83grnBds3MDeB",
  "key24": "2SBt3xL4vE1yo2ayqU7nqdBQfbwmrBQmuQhrrvh36CopVpqiieT3xqHtYVdRuBqgPRuaaQZ8kTVyYqmtJ3V7u4vX",
  "key25": "kexoWVda4xpxnipmACqFEABRmxwaBJRKPdFniUvR2S8rxEHAtKr96MD2H79o7WjJqZyN8XX3TYSX8cpFerkRwL8",
  "key26": "1kZ6trPBMrYzoezF4K3x9LkxPy6NspdgF8fsaACiWS4am1TaoDVD4zCAuUh8pWwKkgz8q25aCUbiThUxYKfH4ic",
  "key27": "5ij2Q6WkNsL2MWXDWrxW2Q3cfNFqBzhbAdpg8i3DdZ3Yi3fySgbLgybFBz8E6Qt1pZ4Qbk5SH5q7C43su8yRAtM9",
  "key28": "4keoxpDqV2odax11NdqpD7LGSgQXcVJjm8UEoJDuQssJsXK64tf77zDtaT8j3r9NQKGhUFY9j7XQtdXxZs6RireP",
  "key29": "5iJNhYyp2fjqyikz7f71tnK6jh2tnuW8R3eixfsTwMig9EbmP4t9XoqT1NHT8zqAiiRm22JvTTubyu76FNyVjH8U",
  "key30": "2Rde1NY1ve1L32hQT5tV3M87wX9wENjF5VzDED8J9QWCWaGdejTAX6zLtuZZWkNt7BiCVeMZJEdUGn7frez9zR16",
  "key31": "3fsq8SyDfMeasRcrFW3e84D5gWtqPT4YwxqcPp2GHmbgX1g26612ZmxoruP1ZbzfVdeFTKuRXzENJmbjZgKDrPSL"
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
