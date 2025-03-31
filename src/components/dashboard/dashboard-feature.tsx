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
    "PuLZcYmvbKTHwGrjRbx7cb9WeD6rUBpbRwBNSuS1MsnLFHu7bCKiV5QHEtnku9p6cgZDjDR25aTj85KcSqwQ1Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sg4pCxrrctimwwzFF3ppYXc6WzeJRpkeJjer9t37hKFg2Lb4emnNLcFhNMXDEd6k1GmuvTdZbfBNS6qtXjeiz7e",
  "key1": "7y1pK3Dy6vC7KoJajuw6EWbBUc3gfzvPbKPMPGNqakSzkekze25BNJ8QSg2LtNFtPF9rvftaravycrg3EufqKFW",
  "key2": "21WAL5waoU6dZ4nB9DDSd4CZMNL9Vgjf2xE49mdWwjANighTuZHiARUf3U75qV9qRtu5PoMTxxXo84gke3H24gZK",
  "key3": "5mM7Ya1GAAKYL7eZUyvW1K9DrBfnuyJkZuHPJ6KJRuVxYuhdKc2sy7zwi3pu9wagNhcrnLiYEbhNBrCjYSYQfiAr",
  "key4": "39AGYa8WpfrHAEvx1ZYFhLTDjpi945Egc89cpbMBv2KukLTCDD7wx4ZmHhkhdaGmJuXyXsMEYYkRDTH1FiwZcsRT",
  "key5": "3rCgPRo6aEmstktbRef1Jcur1T4wFws46KhRkHUovEzTo5ozBZYPRYiyr5YwPM3UFC4tuy9XQ2idUGmRRAF97Y2a",
  "key6": "4B3UVCrmu3ECfcwZofQohu9KfL6Xrww1RQKscN5X3tcCC93y1iomggY5jW46nmC6yR1wVgH3HNP4nWUaZ6TAq75N",
  "key7": "judWwzurbpDhHi4dwiT9oaEKYzkSR2NhpgeqQFcKg2SZUar7g68NSjWA8DsubCbG1sUHDqocBNzwWX8bm3ktkQg",
  "key8": "5ETDmmMnyPna3L4JGzmF5pXPomLRNu2Xa53i3ohibkhvn4RMeGuDpxVS8eeQ9mDpcFGbn9RFe3L6zs1tyi8PLwst",
  "key9": "53D4nsTKQWfW43hEXJvNJZTAvYyD3VSo4ronn6FbiCMgK57ibLee7dmCXsjDTu2bKN2CRQ9eXZ58Hok2UGCUFgu4",
  "key10": "CDNnMdZKTbBWzQMobaBHrPTFEVNGaq121mGEEkKnKMjgBTxQ6JBhyxedWmzJQSmJmscggqGAdz3r7cjVTrV5CW4",
  "key11": "qg74VzCdJEnS71obHBVQ9uqvromx45oGu1xCvm7iBkJyN6Q9QUXub5u5Y16S2GtgutRYPEkqeiw7WVwMaEwo3R7",
  "key12": "4JYhqsmV8K8ZUKE5MhHdE6vd84jbbk82MNpJeBNNJSBW1cHkwHN9kkMesfYEmqKXKEnArJbHLJg63nFczbwTzB2J",
  "key13": "2oRpaNW4ae7k6mXEe1P4ao3iNWFJ6ZPoETNeayJ8mDgx53h2FY316EDb9pXKk3r91jiFbYQPxN9Hy763rXqsoGbv",
  "key14": "3j9JE7nwzE8AmiMniv7iEWaBLnHWzUuAkosDYiKXAxLTGUJukQUoYrFSNzH64kgdLfHQ6eoukXgVqMTitj6S3KJC",
  "key15": "bsw7XaTmwPiNu2vEPnjCVMN8bBq1xhMmnY7QYa822o62S9wC7xhFqho4H6yK8yiBQ6QrUAuGdZiapsXkrMHtDiM",
  "key16": "5pRHqge3pwPcq9jd3Cv8mQ6suRSqGPubn5X7UjF6UKi4HF8BGESrQY7y4Yn4gEMKwpdWRQn1R3kzCTMiX9ng7gaY",
  "key17": "4eo2QmtqzYyq3LnUVDLpL58NvBDj8boQCb1QYNRpFH77yRTbRRwCJHUU2wC4W1tT1T1LZpmTuTqX7vzScSBCMrSE",
  "key18": "2hwze3Wh63H2tQwGt7WWfLoJJLjeum1XAXGwFUQHMD78pBW9YAUwzsrmBXPyvbi6YcA6qqeoh1rteRVtu7yrqpM5",
  "key19": "5H6GxQCVqoKh2bCgU69rQECf8cefTwTZHLYCYbFGUWbTS97BwNDJdmQ3DHS3KSx1nQfADXdwHVRcrhvCa1qGiGtT",
  "key20": "5AKjBPW3WtANpa5BVJskUmDbTa2CFfjGgSfrHw2s1bngYR1Pm3PD1pesBa6cYih4ghePcJWqwrre1MVdTp254ygv",
  "key21": "5jCRHtMhKcL9Yx76Y6UXDcjvE1bcDtvBY62kmxGtdAeuHRAdrbMMB2bYK7p7Y9gKZgpDASRm4P7TiFTDinD8zdYQ",
  "key22": "3HAHu3PKThnPsmer11PfRPgw7YFp1SBeBgWCg1as9BqV2sUk8d5PZtm5ha24PEaMb5HXNapiLZ5TEvCgjF94C8rW",
  "key23": "4yZSFPifudE5rkf41pVH9mswjnmMTm6HWCd38ByAd76vDJ439wVeo5FtfwhmUpyGAgsRShbMptTa3TJqtzKPQixt",
  "key24": "32Yi3q94hDfyKiER4TAd6iRH7yEoKiHq8vkPCkEEhoiMrXNKaTqygRbkad4YkCQ5ZPHZnbe2jjes4N52ypSkyA9J",
  "key25": "2oV4oJv2F2dcFZ9TyL5mFpbsUhwPzFJnxPXBnhd7hifPqtUgoEgojnJGzknHnCZBDqrnN1qc6aLEUqJo2pXFTuWL",
  "key26": "5qGbnMj9Wuare4xkfr4w2Z9x9AZy3tBzdd9t7BSBQujrPFZi7jGPbeHjvUXXNQCDzjoPZGQ6SEKbmc3B1dEvrCJX",
  "key27": "j5dYXJAgDRgUDNYARQEgLAy5eKbhAbQ44UozrHVZFhXKVcwSFLn9htgoRAA2Y2CDaPTef4VzWFnDb6eRqKb4GWd",
  "key28": "5GEyYsNV747ZxbSiMbo43zsHGqsdYXdjxDXp1AFZ6m7cLb4cojw1Vv14owqUDQ8EZCGDRHHAh7tAGFgGQnPmyoSz",
  "key29": "4w89mX1nucMWmqvEuC9jcStQ9EFX6UsM8do3Ex87HE3c7rX6aYCGoskhAATVYrEWpGyNzAbW8ma55kJCqDSjGFpn",
  "key30": "5APz7CLgcn9SCXGWU5vd3PucbzVjBZbvK1fUzvJPpV1xvmci4FzScTv9oSS62a4wQ7iT935rUapwENkZ9nCsPTDy"
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
