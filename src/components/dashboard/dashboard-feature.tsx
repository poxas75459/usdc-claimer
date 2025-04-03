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
    "JV3ksNjUPRWEUgjsEHMGNrmxfq9UaHRs851RGiCRAx5JrKx9adHn4SYTXrVzC1qmtNyts3HME9KpDxfcaL1RbTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Pxq4Lv1ami6UUkEgFAdTfRHHg2z82gjRuuufFcxjbFyZ2HrzkaJUKGiLhiYbR9oFyqKG9VM4vR5k3xBXhqx3Jk",
  "key1": "3Y6sq6k8XB7Uc3R58sojyL2ifYZwaXcyCrmL5QU1GFtCLbH1s8SipVY1uPk5abRd71FHV84AEXZ1a46ExQMLB7NV",
  "key2": "33FV834yvF8z7cVV3iQvLjZkTyoH2fY25d9JaiAvTudFxXh1o7GJ81TScXNktTj4JqCgwi3NWJbjvqjDYPCHCmJW",
  "key3": "3gCcMdUWpDjBGB3QSWNzEbSUD91uvfkHv5GGueSjvTas1iBh7N5x1hSj4j2Kzyakr6jXwryr4Hf9JYG9j7zEb6ZW",
  "key4": "4pHpyEC1QyScnZLE7TYoX2j8jNaeUzcVPQg7jPRQ35hgVNXo3ZtTbL3XrSkUbVC62KgsFNkURtKjEB4ZvFSvASjq",
  "key5": "2o28rfWxGN98BmbWy4vkMeRAJ4eNKqBJ2eX3tUUhPRyTNJPabYZTXXnjERPYXdPfJaP3ftDr1LKuzDy9sM1ZNMaf",
  "key6": "3NtR7EjwagrakwSxgw97rkJqD5BkH1i2gw61crAQQbffcEEmQ96QCRLFqkr6cis9ayds1gFRHBnN39AyVnzyDzTe",
  "key7": "3rvFhW1UhT8HYJe7gmByDyLJWRm8A8CoeZNrmDEgxQheYJrpKPbWSn8gUv5ND1ri8pqqFTkt97HPVh4dZLe5SbKV",
  "key8": "4UsRTpvvtJA1q2NjjFUJpMBekf9M4ozLGDkEzC4TFDdqM7phzBhKDG2GwCrvR5cXR5XhFdcNo5PGrEY2XxnVBpdE",
  "key9": "2vDJ5iF2TzHoKHfuwBPU4596za4P8ioKFGfWBaHGvpe3YCmvZ371NhuDVDjmR2bavH36vFQKCRet3oVGLAi7YjsP",
  "key10": "ymhCdkgzHZ2EJkGDHDRd6qvMfcHRUwyPAdQRy31YYKuGqKLHbiMM1NkTpXr5M5JVJTBiX5wx31UQxzUtoKtsNAy",
  "key11": "5zN9PtHzMo9FNFPGcp8UgJtJGeriAJWmqgzpMsyujyx8mRy8UAEArcXXiSTPBfReSkeUJHFWyhk9Py3WDRk6cCoA",
  "key12": "MWcrkB1rveNFUYmuQcMHLucNwE6eBvrhTm1nqTesgut2WYUhuSUgTDLC1CMHdDUuEr4fVKuwUcBWkjFP5j5Tu5g",
  "key13": "22PCyDstL9G1e4QQVJbi3Ksw8QjhZKVBCBaNmKn19cCGdJgmkmogjRopCmNDgKEJ9eKVTWTYPsgvbgcE3pkJCNJ7",
  "key14": "2EBGFzam8Nceh8bSQyheh12Gaqpxo2DMrgHLxUEdjZCjy6T57FFEhsrSmFdQmd6DKqTkFpNHNJykfmM1Fjwuthsd",
  "key15": "wXbXznpDYUJyBVJzyZEUp4FdRg6L5vDumHE73yfstmj8NAo7xfgxwpRQ1zNU7YLezEfFapT2wDe7ZMiQt5zBSGc",
  "key16": "2XQo3BbuSGEgMWdCS4QgzDr8WNtbFjpLL5pootjoaZuMnf4TfNmezxyLmnAUa8dQ4WDC8MxS5Swr5YUraDDP8AFP",
  "key17": "3E255oGMWFN4oEg5VNGrAzsLkZkn4UvGXc9iRCbjifbjKsKbYGJ2PZ3FyyVwUKKvEDUMMRwpauTkwmpNo2vYYjci",
  "key18": "5UTKRCRtiqBYLzuW3EDNeojz5rB7UL5L3FQ7nBuAFyvy3tz4Kd5954N1Kqckmm3jH67drZ6SGDmqChbMEZipwFtY",
  "key19": "2AZaqo5LSX5s3M9gtavCtPjd5AAWUim28NNgcuXE5Khb5Uj4xqwm6Zr5fazHKuAa2qevQCV4a5rMQ6cyC5E6FVou",
  "key20": "2cr7QqSKe6L4E8jZDKX6qA9xw24wre7HLtewzYcmD5YVfhc4V531qTvNdLcxjwpb5EFPtajcBmkQ4XZg8eFF98Cy",
  "key21": "VeqAB7h5V9Lp2PxNxfKqSN6ovhJodMk1VcUemmVU6AvKu8MYrm7ArqfGXNHU2y5fubqyUSpb1RyU6ZT8sPpjays",
  "key22": "2x9QKUGeH1PmgN9DbhAgJF7w6K1MaNnwdDfAyH2M8muH4P6g2TEjV4yTLDbUnfiUuN6QPV9oAj3neZFZnarqH3Ta",
  "key23": "2ZwzjHBYn7s7u34CBTBnjw4yp8NttEN9ZDq5yRBHG28ah5wSiF2rETDxrdvdX4Z6XHTrBGPLWinatCrRfto8nWaz",
  "key24": "4nngt29XquSimEhRTNsvZAEBRY7AMqi6sQDn7hb5J5mopxJD33aQCPxp5VfzcQXu1vvSGTtirMC6LRvWx7bmiYup",
  "key25": "F4Hm2q8Cbh2ig2ZHGxdoUcqkioNAAEkqHMZexvhcz2BTHBckeAhEU7z1EwWZCyaVAaLdoz7xfwcJEwABM61WVGu",
  "key26": "4x3Mzavy71QZq5p92x2KBUwW9ts74cn5bYFEWHDFeDkLyBVMeNguyr7XD6Wb8gzwno33793sCAciKDJdpWhPHb4e",
  "key27": "4gx6PCpMfzbX8PD8JJtRQamK2YURrEE7AvvWUoMHNKs6wNW6jkU9zPziuf926pE5PCvCkVBsMEe5GYqgruDk2ySS",
  "key28": "46nN1gfBmSA3D3hRDDqshch9W3MA6FnC3SJxv77mQNHekKabApF8Dy2fT2jorQ9xPdJiSLoBLfnTj5enGL4ShMNZ",
  "key29": "4ZqDjFjsgVAobV6WghKtCXRDenkX4JmdK76XqLvYzmNHn2hFsvJjNDTatWUUJzb3Utmk3swSDDDD5BTDt6b8JkEG",
  "key30": "23sNJ9TjbyoJwcTRzvL7BtMPiQiQViwHDxtgfdKE3Ek6HZkzQtHWfrEpHDCWJkcpJ6HsXfEmXD1zrfGEsZ2CZhzk",
  "key31": "4SLRqVbuDptUmwTyytdydTk98xi5VBdP8EeuHY8EJadgL3ExjS2rKr9BHYQz5Wkb1DJVQeVixHdGjDe8xWLnBjPZ"
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
