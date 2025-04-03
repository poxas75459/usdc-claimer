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
    "5aWb23bdfFUtWfjf4o9QiVcK7i78GKVqsToAnoJzj991pAEC3vYxL5bMd6XkqT48aMSG2VLStBd5LRjM7oLFa7Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46L3RNGXbDBT8uqRGR3e6P2rAo133wr6UN83V3X1BqQsA1XPT9DYf4vY8jyK58zxrLukSEPBkLC5o7qUqkMSQ9b8",
  "key1": "2FekaGvFMT8Ru2LUuZsK9s1NWga27yE3rqU9TPNyJMZ5AookVf9Uz6FkcQoxXz8AiTPiJ5TE7T1fM57dJQkaBENH",
  "key2": "2RDt6mPiY8zjM11dChQ4vt48B7sd3ekyhaZKM7MQJJVGtFEoNDNNU9vJDRHqMh3XpYBBxRWQebDgc3J5hKbtNysG",
  "key3": "jfyBVS3M4YQwMPcQeAts33RMd9wvbZ9kZBSkkjXd7aqCVgC91WYSsojWhmJ8a6XZGv8DMYf1PDWRjoPMYFEGefn",
  "key4": "Sq7UvLLmBr4WTDAxovs3kabwGy5uJSUm981jgVvXwsthPFEcmLSDESjgTLRjw6s6BF8CST26oMv1JFCi8wiz1a4",
  "key5": "3ocmGJ7SP7MC9H2BCpihcJyL9sW7Df2TJ4exxq87wPefZWmUSPrPswc3tPJ17SVKMXLmhdzMqxZ8iZ1rUuSxjzbg",
  "key6": "4CCRHfyJj5DmPrNMBFjKML1JQNQbvFes8sCq83rNbuMtAANRvmh55yjCrau6EhVZhKFjyXJWMhYFguCTyBdPby6",
  "key7": "cnSxYd2jQLDaoU5cGLqc6hj81L9SEPjSz2UVagnHxcPL6Qr14vPSoHQK35T2a7rzMR5V8zTTNrM6PDGmiQdKyf6",
  "key8": "5ubkuMDf55wm8Ja8wRrW9gEETeRAkadSnEvAeVxzXyANnr6es7r65Dbtjc23RQFhLgw7naCMtCzLVYH3Wafye8kX",
  "key9": "VhLCeeCiXUyXHRnj47xKVpwayrHJwL3G7uqaL89kAbDM41zH4inUa18b1UUC67BJkSo63ZLe8e4PjmW2RZrmSWF",
  "key10": "3bJpThx5HpcjyJVysVvT2JvEN4yfYWzhWVoptNJuT6wFghAjWmjeqNgnNGGDTqUTXcrkHeq4NSaikGMcKDSjF2YU",
  "key11": "2qzdtV5U2BMbQrdXMyGcdADiiAVFec2ugCVt9gpBgaUbdxmYTFSxJP2LrW3cuHtKWffdfNQJNDXxAEKiSJR2acE6",
  "key12": "628QZvXVW6eKCaRG5udZmrsPKbSb2yqoBY3umbumCaTydSyYQXvupEEfuSS2BMaTCGZZA2fzYpdNGWf5CfwP89j3",
  "key13": "GDT2sSMZU2MFbxB4XPUP6DVLomZNxjmibTGKSuYzfG4TzeHHLqouQQB1RCke9ZNSHAz1fie7A9v54NC1738hVPs",
  "key14": "4odqKfNLT8yub8BAHYVcy7cSkkcrytVzRvQGAyRPYb99za7e2pEhVinYrUinQvNaWJhfQsHg9qHkUyLJrN2dANjL",
  "key15": "5T8QPfMhJgCGg8xUzzCU5QnjLjPQjvtVkmHFYyPMjov533Wdp6WUFZ8BBbomUg1xHuLN4WMudBzg5Lhm3SpchJ6n",
  "key16": "qAbb4yadSmMR2QPnyVer3smjxTweBuAX2vWTY2BMhTZGsS3cMNj26SWXUig2hVUscMGojZBRfmDNVm7rMQLqGMh",
  "key17": "5gx2DkwBzKP3fK5YVZtG5GEfLhvPpiTPMbMHxFuxGBMMFvceLHxo6bqoc8Kyd8Ln9j2r3NxVxPu2XyJceBeyq6Cc",
  "key18": "4q8b6aj8ajTcraYN3rvYHNniYYXCETGxfMT6piVDaDhE6WiJkKhtCHubhPT3GEhLr5ZiuCVyaaXaRW895mbuX5Aj",
  "key19": "3fuvsEpypm92m2BS92oTJmFQJbBY4cxquPEavKAy3bm9qCNRQejoczQakZsiaghsVJSs8SCH9wt6LB2N9fKT4sF4",
  "key20": "5zD1zsdpf1StDDDWtpNJK7SAkVj6oEvA7SWWX5DB1ud9wzi3UekU4to7aM2cvLk2hwdfhmN5XYWVuCYztpX6xJfu",
  "key21": "5CHy7FURJFA5FBni9rZEdAADDBqdjcCSsdraaazktY22DqFQ3cWa83d52QatypmYARfAVacLTDivDwgtBbzT81MC",
  "key22": "5masGGE6gBXNAzNfvfzSmcrfgH85s25Aoc6XdLevBND2ZyBZap9Hi3nHnbYC7CWbvT97un5iHAMji1cwtYBrmo6o",
  "key23": "1rTJczc3BfZAGZsvCaPjM3jHCnyTzdAArMyNk7DUCtJVUpCnw9deyi97NHjDdKUG854yTgQJa4HrVC8mUiMU1Lz",
  "key24": "27NgKByJerSAoGq5VKv1LPq8PRz4EnMaJfGtbuVsaUUH4KsA52oEwNxznEgNJqqwx1FbMnkDgEH7J7BL67Z8HzsF",
  "key25": "27yxTWLFvs8PvSNHYUaye85AUgykwbiC2Mi6U2BwFmCzC6fcGf5PfEmNFpxipkmUeqnu6LHGohEDiUGuDNitdhs7"
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
