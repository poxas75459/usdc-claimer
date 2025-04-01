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
    "2tRrisFysR24QDzVkx463xZCA4wsekCbyD2fdmR9ZnoMHwndAsk1V35oNcxoYoruPP2fNKByHLLZT4vdLwRC7Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmSrSgbZ3mhPDusSPnRxzk91AnJaCUPNWBFjKSbtQQaGhZg328t8JRYVuM5zq7FgR1BbgeLTsQXfuxny5CPgJas",
  "key1": "4ki2E33xZV4n6TTSsWNZKvpMRZcHqYJ9AtFbD5cmNzCn5oas2kiCr11m16v3szLZ7a7XNJU2rYFUvYbUoy9opn2n",
  "key2": "pY3RaBcKmpaZEZ5gUtA5FTpGdR7FagcjuKtyS8kHSEAvezcKvNNNXAxhXpyTuuXS35QrBejzacWBCGVieTEp55K",
  "key3": "4Cx78bFEfTcm55nzP6ts2SYV2mw8bXXbJjdbMCJf7jfLbn3M3zVZNsVNeB36En4qiB5SsBhAEUWSnBbfMN93Z5zo",
  "key4": "f5LSqDZ9o6d8Xw3UWvJbMThHhDsMQGCkhRbRdNSFY1GG64JPzLNiXvisiTpDncWaj4cFU9whdtwXSUWNmcq2DMR",
  "key5": "4puR6JEGgHsjp2o6GLCgGWrT9nqCM2Zzy1AALDBiWvs3ozCZVVCyYJMk1wLXm8PoDvSqmUFM8QsNsignjwGYeYgv",
  "key6": "33MXTqz7BfWYwnpmoWEeqmkjvsJcNdFPAR6RoPS4WDrB3vm4VioXYA7jgvUKAQqGcFwcQFtKbVRJKCMK4mEwBn1J",
  "key7": "ydwPvCM4r6u7Yqj2hgyuD7FhLh7fiLt72yrPaqcxyoVm31iXsihQrYmFRa3V5m6XNxRYqPUy6gsuhcQHq17mAB2",
  "key8": "62ibCnwAy2evNJtAyksVrdXJtd5rDnan7xHi5Ry8MSj7SkmLfmdKw9DzP9qeG8wxmdiEy2B6bLrrwHCuVajifJfv",
  "key9": "5MDJwLGc7GmTRucXmC9ygCLpjbCp6qATT5fFa1t9nBcSioNGjTjsad7VNbgzMWanK6n3StGHE3zkoB4TfJquzrkp",
  "key10": "3T8CUZQiSso6WAieyUtqUfRxLVHHkWszJqaW2MkGtMuJqU66V3oHoGirYU35bPsSP7dVLLD1rnJaud9PAtNyYEu",
  "key11": "4TnRiEY854GKhm3nXsQF58x8NtXh4LhT18uHAa7jLbHzXnqZPTqM7fptDshHJhCgW4ZFBqeQBSwnZtZAZFFYzUma",
  "key12": "4LVZTXBtzEwcd3JBL3Qj2u9jN3TavBw5rNeeqJS1Jbmauvor3aQefc825UDef2HPH85NcpEowoEX5R6FksjQqzh",
  "key13": "4FUoq5eaFWzczEWHBtwGY8WfFSKBJUipG1UbA8d7e95cwSZ5XNmHtsBH75FM9Y3jaBEaQvHHqTvsptrb3py5VF7i",
  "key14": "2idbtHWHaUZjquiVVBRds9cRqbGjoWktuMUUPYmYXd4Y76sBheKXdXH4rVenMhwDRCgFAHAryvDBWu2X4e35xUVP",
  "key15": "RmxDUPA6S9XKcMohfchPXAHrCHEbDuDKU2tT64gLUgt2X2DF2sxG4iMFnB76tQX8ByxHt9RKWd9e4MBAAkzwhom",
  "key16": "5JBYwU18WCvzWUynmYyo2RmKGBuHrfVEKr8WDtNJT9DNEn9XFnzsY82WLZFA3BH9KdsW4uwRiNqZSiJ4F364tXa5",
  "key17": "4R3w9FwThQLDjuVPPv5JnPyHCpcVZD41wjyYD8hjTtryTZCJoBSvC6WJHAhAebFCmPjKUUVxdP6g5uxkK2iujZFA",
  "key18": "2iZWi7Pd6bjgnyWGpMCdWpyezNyjegcAFikVzUiiGqaa7HJRtNT3sZt3vS2MTaQxbXTGrxaxRi36k1bUKGt7mgsk",
  "key19": "5SNSzMn3tKWPdWb3WZ6KpFgiqFbte325RbENtQrUgXQaL7Je3sEAK2WRtSV7eNWraeWdS2tuGr3GT2ibtWW98Ckc",
  "key20": "5mJLYHXNXxmZEiCU5MJQcYxk6nJFaYZjo6GKB7BFAKARz1Sznw7M2gwcJubzJeweyBrR4vr4DMbgTCZmi1VpJHhA",
  "key21": "nz5iyB8nLj2T63VN1q3TigjCBstU6JmApETqqgHoGNuehh3y2GKNBntBkrnyB9Mh3jbRdrQYwfDzQa58V4RZnJ5",
  "key22": "3MqRum5C6h4rEd3DNgih7SxSr4ruYTQpQSGCAEdgGeEP1eggr7UhHpjMqgYyqtna1r4jmt6HHTgCus3cZs49d8Pc",
  "key23": "NZgufD5UAVHSR842beBLUPQBnHrW21iRK2hvivyywUJdhEiynB9ibS9LcBu2Sf4ZCiDH4rdNUcug6tS6qTcN8TC",
  "key24": "3q2d8iWU5ox65Z8WNAWQt9nSBNyqKPFhp1T15NHiFEU9y86GkHbML3dLek87538G4EKVVNBVDeqKycb1xB4hHkHc",
  "key25": "2a7BTvVVLQcKvAZpXvWKTu4zQNDAMeeLvxq2ipVLRrrLxqVCfv29uzmzNEB8THWWJxvKDJKfyh23GWaZ59p6ftuf",
  "key26": "4RG9gq6RGMyL2qzgyjsrszcsGy8D6EEaujQDcY7HuEwy9ZjpzotXBvAVbYs8RpfxCw9cFjWE7a3as25vwLLTL8mH"
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
