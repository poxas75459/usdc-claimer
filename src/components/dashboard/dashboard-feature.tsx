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
    "2g5Gas65U5fwbmpU7YPRsyMb5yTQbXdq9cGaoHZJRdpEGQppSozQwtXyWwZikYAAt38P1D5wRzg7BS1ADncWh633"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iDPARANYinMRUj9Zek5AMg3jNeN41zQh48C95uoPjscHN59iA3iJKFG5NQaeJ2GpAPx3NYE43qze8q11AEttQkQ",
  "key1": "2gUVyGAf5gQxXZpde4GSi9hQqkoFPSnT6DwnmnVvFtv6MjnxN42N8Cw4rNaqZqV3mHE5qH2GovcEuVjA9ZfPemBP",
  "key2": "4ffBdBzWMg4jcFT1b7DpXehv1YxqsDtJefAFgK3oU2hD8uNNJDdFAmJk5JphsyNG6CrS7aYETtTC32SF3xm4WNKb",
  "key3": "66YWNRVWEbYM2k6G1PTBocxjzuaEMVT7W8MS21uej4zt4nxdyn6TngTCw15ATzKWKgPSfNXHRRMXZCQYYgv1peYL",
  "key4": "25wBuKFugzFTvtXWAyFFeeFEPEWT8fJukzd9MX9sejDB3kRRdiXmbBsvEfAkzu5Q5ws2y7C15rwHKBwkpMWAnzxQ",
  "key5": "3Lv2dPgRnKbpjodtPVjK19kGjg7Wg6HdQRF79Bp7Q4eXW1bYKHMpcNW7xpYH3eyTLAdAQ211egD6WiQTQHRKpL4i",
  "key6": "2UshPbu3Lrinro6pYShQ62ubaL2fKyr8cdKjpVnCDaRQXHZVwMUZ3YZujy5w4g2SevP5P9tnLC7JvW6Uof2i5gra",
  "key7": "3i6qnc32t8SGQ5QzjZZJiWexpkYm3BxNr8qh82bapjBcdxwP6t9Pa2vKLfRPLMFv8nQL8ELEUQqXLJNFXSZNiwe3",
  "key8": "4wdsEFLEndo4TvZiqNmSD4KyKWGC7LfBhcrxhwt2FQofRo48iLMbySGPPDZcqZwVgqP9ycQQh5UyqAeSm2zXVyd5",
  "key9": "3EE24ByqqEquN4X3MA7RzztvNjmWW5Na2a2FT9bAMDCabMkVRTTxBtwVz7hsFcE591x5kZ5MpiVt13UVbnFq3u3f",
  "key10": "E33SFmvYju9hGbLzVxwZKpwxHZEUc461tCLxBhXBNSjs1dB3176gzgeXYkKGpRkLJF9dmP5JH4cXKtm6gu4Yc6Q",
  "key11": "5f9gfCCt28gQsdqV973TXkaq3q24GH6AvkBtTJjmU2jthk4bY4AJFFgzsmQNCa3xsMGqHjrZoLDZejwSD4GMRdCQ",
  "key12": "5ZTz8GDmzPwrCSN6j8EKW2uiNMsAT7zfxS4j4vVvioyfsbMZfxGsrs9m7KUncZW1rT7QvdF1VYvxHvMPS9mxk8Qh",
  "key13": "3sUB5NBAb5yWA4p2nvppMkH4UrGpedr6odcJrTV9bJySK857HKaYz6h2pr5puGRuigsohVzUGHkBvBLB9uMHBgaw",
  "key14": "4Cwvoay6QyX3MBEjUqci94z8ktvwKhD8Fug9HND2Hz2SQTr3L9VHw5ebAYfsEKyWNpkbEUDLbsuG3ydrcTCERu25",
  "key15": "SubkUAjyd4ta3hZvvsAa9NxUtPX539ofRMf73fvx3SWEhdp9NAuzDJzWTED9YhhirHts2heS6AJDbnoikLiZu8z",
  "key16": "4QqcWdpvkLxqSdSdUT1FdjrA474oQjTtmNJVKPnFXQyzWcYoctSodF3u4UUzzdvQQPGN75NAwUFpqFEm67LPEfNq",
  "key17": "5jArbToiRbhKD8R5MAmy8aEcPqeieZ236HQ3jVWbXVdWm4PSnkZULSrPxuXKbPcCpeNUT9j1TQJ3GLnicEnX9sWi",
  "key18": "5yQF6Sqto4taZa24qnhub1zMnJv88Bu6hSqfSgDCKhG8KNHkpJCmaquSa8XKPLg8pG9sUQLtBwbCw13htDkji5hB",
  "key19": "4SMQuYGhZQwGUFK2cVZGuHBSWMdrXQyMujYuDB1kAuHes7wfnRwMcT5nCQ59jiUH8U2mfSAW4bn5snZhdBxFkZoe",
  "key20": "5PBRWYcJMdqQqYA99KGN6ZZCKdk7WToWg8cvMtRoAtqyT19oAAAJpWs2r1HuAxZhubzByzhYmsWgkG3aGn4Qo1yT",
  "key21": "4HkhFRQUNoHLLG2H2QZ7jUJ6gZJxyUcyJQj9sCuwW8VZizHFXiCQLQPTy1JvWybFFSBvcKphXZAWTq6q8gYtgq2F",
  "key22": "jbs23vNzEmncidJ9urqstpWJfSZAg2RYVENKRsCzsBmc5reDa9LejsL2DxibtP7JZEj1pZW81LqLD5fN1GKkwi8",
  "key23": "3B6RXzmrduhX1fwGngzwE1X3nW4F5disNQ778W3Qo9X3fhdeKwrtwRhC8cUAnixh2GEtvpCHXWwB4mhg5APjYiHw",
  "key24": "3NNceQEMvFcoUmx3G7sygiyJfjcddgj9AsouuThsTE7bveh5yZqNFiZz2JqoDdLLM7e9TwHATvyUYT8eqwCScu9x",
  "key25": "67MRtGxJ8t2gexLdYuiFM8LVUZg4h18Zp8gqXtXj7BbM1GfxRUCBgXqAntnGN58JNAqHujZ4uSpasjzSLA8yaGra",
  "key26": "YspjedtTfzxtvctgb9upQZGTjQAZXb2Br6ddLfaZtjGCX5kpgCeaXH9vyhCe9PkebsLnimHsFHS4sB1Fgx6tFDg",
  "key27": "2n1LuPKiVr2Wu1GGqVoewoscH16ZSbRVBGBwL6ujfE7cXCh1TBVsKY7pK9gpehhf2LSm4WhMB7T19nHhVZgGrcY9"
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
