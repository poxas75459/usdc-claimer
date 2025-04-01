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
    "2KWAtqc4bmUMXNRFiJRGxykt3BTrGgVByGbboy42ij7QrevnBqaxAs39Q4ie2y928hpCGiAXWfGtdqL12K5xKjP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBA55aSKsMYvDgCtwhD5Y6zdW43cXAegTeDYwxcfwc3j2mjbnPYWGW8BBpRB8XPH2fbUNb2GiQbfURwShHnjn86",
  "key1": "5FzXQMwQpELqUvR65LRJKFpRVSfqNAEr2kinbfEYF1nsgJYnZsnqyattRhoPHLFKoSDdums7XCarrhP1xxPuPLnm",
  "key2": "43sRE7bFTn8g2X4DJNxf1G4WZ5wwgdWPnSoohvGXGrbpeYAFGc2QtsKDqFhEQayvJEPxEwdrEMUod4j8upoWtxEN",
  "key3": "5XQ59uC1k67vbqn97PqGJLPx15JcTRZKytD2MjmjEbHggq5F24v3UWqsM5XWeKsFAsDEqT3JSS3TAQt6mudwK6Yt",
  "key4": "2jHzedNMV6b2vaEB4SUdUio97gSZbwnx7T8EkZbZJw9R8SEnLYzBxR8ehM6x99YyYWa4HhoKBFZTCyG8XAxDeMoC",
  "key5": "4EtFR4kPaAjRSkyWNM54k8BbiaotUoT2viDdbAh3hK9yfiB5vm39RygatTziUZvxnFSJHsQABzgeZitB7h1nJWe8",
  "key6": "3872WRrBfL7UnbgnTqLbhdBoZHedcFLH6vJrFf6fZj6Cg5Gth5VKPd42quCS2ufeoEnJ3a1UNGicGFN2L6QvKnvY",
  "key7": "4oDF3jGoh8Qxy3Zj1zwkiwsemZG3dLKnc845sKRyNGYCz39FpEi5iWFsCVEUhuqbBsgEQD3NyVLps5jSfEhKt6CJ",
  "key8": "362ra7bZBkkyHLCQkBCkLn9TqxmYZ3YtEhCfrqg7EA2RUs5zDYXmCU16ttJTYeN6ugLQ2X8XKBVTySK843XVcEWe",
  "key9": "2DZSs2fCqjLXi8Uy9HQB88w4TR9jHZqcm1TqZKtE3Nw3NCoTFRxytRHDRkvnK4rzFPYJY8ocSf76odWCqomuYxyh",
  "key10": "iiPeRh921TnGHCGwQPq2kko3cFAvzjvicsmAX8KEB4tUFfa5AwYvcs6pCTPFK7KN1BfUQ9abE5mDyJ3a4eNJr3R",
  "key11": "2D63yUHtGRRMM89EVRwn9FHhWKMfcEXNehzq1kxpHLb5J6GuTpoSALsYgCJvhgkHC4WkS3dhFLVgEy3oQ8krzSN6",
  "key12": "3LKjogycK551EKuv62VwkXiVu6HNgqd1CgLzF5QUhY5Qf5BCeTRtfm2vuuwR3gFh8RREBMhDEaf7sv8Af1v4MeD7",
  "key13": "5KeFQh2NHNs7qyNPw967HFSweoMFPRsdgFY7zDeTo5f88os9SfF3GJPadXUwPH1GNksJNbHdZ1dqAsNRLa9Pvr4m",
  "key14": "3oaZwggPmeaFGmR3MCRJBJEDT2TWYNVmKELUF6jq63gu27skG3ByYXRMtgD3smBLWmaaEb9vdkLfjvQe2YTpiKEx",
  "key15": "2JV3j2PSXUCzpFay4BBvwHS6nH1hsD98QGkUwxGU7sbGzguTvEJAVhPzCAGYSpeJE89L96atRpBqWH3AWBpBNvSm",
  "key16": "5Bv4mocbueVyrFNYjfP6S789mcpCKtWyPS35yESCQKzsjAB94U9dhFa7TDSuEdiKEkVS8Srj51yUdgxr1gZmTnQW",
  "key17": "5sPr9yE3iJBTnYhuHGsZKpw9sFi8saEdFsmprgSoNnpZFGXRKDypfBHmi5CFwLcdw7pwEpvo1u2hpYrbAEFc215i",
  "key18": "3ktuduZmAxNQWCwXwNGsMvVpEQDTWqec2awRptXqThUhSmshxAbY4jikyuRZUrT6gwa58tZsEyTnpz8BETHb9CFF",
  "key19": "6buEwXrDrApcuYr1jZEb2SMhHnFXFbV7kBaHek4XDorzGKSfJr9T2LkSL2bNsYNQVM1FpcGYe5B9AdjxgGyqQS9",
  "key20": "24F128SxhuWYtFeANssWbFgEqj8VQ3tyfFvyBZQDMbT9J3mCGYs2tqALNGTWHsx2dYeHZCbg5cLHUobVxcrNUwhQ",
  "key21": "4nyHHT8UxEKLRmjTEZxCdeJ5Q1WkMZo9WDJMeWWDQNAij2Bg9qPDu3sfG2iv5Kcg4Dz2qFaub6EftFt96ZkR4JU8",
  "key22": "2EmPkm5SPt9SAGXPxBH4pVL6ZW1Y7ZdT4bRSH9a4TBV5fvoVYXU5jxYZyent4WJ78ATpAR9r4TvTJRuRuzNKtdhG",
  "key23": "5CivNVjiUyt2BpVB8rJPpxWrqW9rdpkNFuKQv1JA1kMsk8BxAzaWX5Gqkxxbh1r5Bs99gtLBs2rWKAeB4s5VHwNj",
  "key24": "2gpUyF2JoqZVh8eNkqQ9PodEcXx5RbaGJzK5NnptPBwgqhzm6rku2jc8QrFbcv53DLUEsTuDsjEmo5HB6FLYNSvd",
  "key25": "2R6j1mvY8R8yWS7MfeM9FyF5eYYANA8Eswi8a1RDWDpyMMveAztkCtLKUdjcKN8XBsBLunqs34ujWq8jqLKAGTfA",
  "key26": "5NQ7xvNXxE2nDvcYSiK7aTawfpMyEE1NbXvwRf2S4khpVSCCRADgkiht5sBVaZ4UUCiLwpVcL1mjwbUtbTX7RUpD",
  "key27": "5UfEwbqxCYqDqdyyrK49Z5UMW6fUC3q4mPLJGSPfKKFebPnpEq1KVLJCuP84RaEmkzgW5LupxN5dnMvWKy3iLCrr",
  "key28": "4UFpKA9mt5YWQf1noqqwgzYo7ygtHi58AqAXCUC6s8WMJ3ebFYjn9fnnH1n56bM5Vw3sRq5AFQoJzujbVLpCz2zy",
  "key29": "2A6TgYTSFoZjYXDwF6zpAiSz93mSuxj9vmZLsAVQgnVcFRGBxP1VQ9e4ozsVg5QaVek8gPvfvMnxTLfP4UoZy7LP",
  "key30": "4qkZF515CdRSzL3QX79dpDLVzBFyDf1cvDGVJ6fhwJMutnzHat4iLhgeVdCvkB3ddpHFbNcWTohU9RGqCbgGWuzn",
  "key31": "3QVJ7VJhakuB132p6wVaXemvk8s4XtZWikQUF6h9wgVdT6qsdDa9kgp3ko481nrtxPReKa8DnW4eFuNZFp5yUDix",
  "key32": "3Ej3X5vUKK3Z6TygnCAQZZPLc1ag77o37UD7MwfEuRhekVExSxSSRpBQXuHpPjDxosGWhkT8Xwh6zz2qbYZ4PnTW",
  "key33": "3vUFRgV1FwPhwiwcCsoVoA27BMjvg6ovUmg96N3D1CbDZM31mZi2vjegYpmpVJq5qkYyxsF2tdqZ8928MPKgchiR",
  "key34": "bvBtTkAKs8kEtzeXPzLZuGyX9TQSaLsj6D1d8kcy4UT627pFeApQxHwpiqSQUX1f14mEBU3kpv6J7LRmX82V7Gf",
  "key35": "59SbnZaEQhhuBVEr5c7pJpX1Wtd8oGy2wXHfNcvcoweQoHs7cfdExuuD3gyugGCu9wZ5moGNhmtHAuZ7ARwLmDD7",
  "key36": "3GHQ5eBovWk7ntRGQ821trhykXF5pJWauXZqKWjUZE31Abg9ejMyBaRwoGHmgfkhCWNKFSefry2WvE7TBXEnZMyY",
  "key37": "58AE1xUnV88vvU4kW4sXtKKke8xFLVn8nNKDA9Ncv7B6orX6bY7gLkEEzsrWFWxzWRuLrTo2PHaSyYu252on8V2T",
  "key38": "4te9iXtKxYh6qEQUyjYGAc5PaXScrnu5w3vW2BZhGwpE34fjdjUWmqdPdDfAvZzf83JKwQ6x7GXCGSW3Y2J7T9Qo"
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
