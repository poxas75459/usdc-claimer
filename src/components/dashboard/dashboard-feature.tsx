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
    "5sQwh1YxF1jkHQZqos5GnFiMLEpCrgdFB1W6xGTtLrkT3AVcgzueG2vTs1Lvkr85EnzbgwpDMJ8fHvFEvWfNt7en"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGpq1WHq5U7FHXjEqBfPdVQcFg3J46iL8BZvqCfqESKfLonz1mkFQMXobe9xDuZvpmLj8SFmUQnoiR1wtRp1F4J",
  "key1": "2iWTkUHrFF3aT4unrc6WrbuW74QDV9hSCNttLcjpnK6QozXvu39pgTDaTn6KYBHwti87o5axGvA3TnCKnfB1YxbK",
  "key2": "M1xXkYFTEyNo5BVmauAQLVgu3cDEEouBLJwuX5KGguj4eCNo8c2vysHTmKGPAf8xHTf1H4MpMxKeVQkrFth2zFb",
  "key3": "2R2e9kfXwS88sycf4r5uJm4J3jcFjCvfV6kUMoLMykZhotDpuS87L5xaL3Pxu2VxfaCyhxn2KeMdc3RStPvWv3wm",
  "key4": "5Hbk2WDcWmD1DcKS7UzKo3ySHAmS7B7qVjuQHAemZPrtjqF2ZmUnaUtp5r6GYVGtiJmeEUwFFLEhjKBEnimcms5v",
  "key5": "Rv1NzS5kyxWCx5umVAXDXsLygUWqsXahuyaXdG6ZnQJtweDpHXbGYGh3iVKGqLhaJxFio1Pw7WaX3JxX2a38SPE",
  "key6": "5SpjNXFfGAnZHXhj2Xv8FPhUqYVRppuJtgWBqps19ddQAWhVmmA6cjuY9uo1UBXdxjUA1su3Pt6gqkSodMhXskm4",
  "key7": "4pBSjsUxSoUZZSktzb4xef9mEQzY2qx9Y34HQeNsE3NHgSDDtwEUgmYCKny6XNEULjiXE346SGe6TTwUCwXAcgBN",
  "key8": "ABnbmSn6L9U5E5NMMRvoHs3HW3UnbFkcx4VfbPYxNCxoS3xgKrTgFc4JYAv3SnCRzF4zWXgP9k1qRN4TSr1bCDi",
  "key9": "4xxz1PkoH1sEa74mGhjQp9uQS4f7utUumfKEGNrLMHQDR7SmRKxtbRJamtirFtKsgyWkS31CfpR3k4Ze8VuUpV8N",
  "key10": "MGxjbAs54ceQ8BdGdboqtCYBtppaLR7W6VHFqxTN2UB3tdSVMbpo41xVZRQLKQFkD2fcT1pUGcEVFCFEjCCeDw2",
  "key11": "3Y2AVNESC7yFQHbwFtmrhTtatkLNEsxgWTQar4iafmeEBSW17zpyWSo5WuCEmvtNKEtWruqnq8YXyXfct1VDSX1P",
  "key12": "2XtaYGnrxHUiKnoemKdHgANeDDPA2T16eyZciXjn9XZW44Gt8eq2T9SXz6uZX4QrQv43p8Bvke5UfrG9MMWChmGw",
  "key13": "375Uk9cjU8C2uR2U4n2LtckFxf5ypGcbiFeYAQ5yLqEHh8KvJmAfLhaJixkf43XUufnf4XZb61J2ZLrmxczJ4JQG",
  "key14": "51WNTsUb384n1qpWQwoQuTwRVaieKardvMxk4t1yzeY1iNE3pPAmKFAKWDW8EUBxpu8g21uc4McpteEs6eM7Uee",
  "key15": "2dPQWNKs9f9c5TLjzqxXh4Q2zYwjeP5Hsh3RqPYJt51MTC1rot3obMw9SyKDcr1psiKQJQrCS5oitCtGqtSEKVYm",
  "key16": "2FDMq4cD7fJCVAxrTwmZThaS3sR9QPNd4QYnxkndTXMuYn8HSE5xv3GCYKhocFDcPhXPJRQ8LTNvQC3bkSiUD6dM",
  "key17": "3UtpYEPEvS7mTuixfep6kVSxZ7ciPQdCTNcKAHauGPyoZHa2ujkP44nxyE2G2rAsjKMsNLSHYMUJPvboY5gxXhk2",
  "key18": "4FRhVGMDW2hpsPqzJHuSkBPftDBPStV9fXB9kCNZ4yKo3hBYx891F4ovRFu5YtepKJUfj7u8wvJNEERTMTRiZLAF",
  "key19": "4c9d2RNLRX46bGMmFAk6k22hafVxL3uXBVEeFWJUCAeiExG44FmNe6TPLd8xSCJFFQEDVFyWtzAG8TNwLU62qeWw",
  "key20": "2RHpCEj8vG3yWu2c22RrU1noLNMW1T2VhgaSzXbaxiz1iSpNuPHJtgwUq9GyQSrEykDgDbn5cgsU1BMGBH7RVqMK",
  "key21": "4qfDwMYcz5mo13ga5L3zdvNDqWznMhb9qPws3GG8pjZRvH7wneZwWmYmsDFfLkyJAZEjZnpxPieJCkNaXmTcC5PX",
  "key22": "3qaukHQfPnD9jbsueFJBfb7YDr46QGpTJeRPMPnaw5byGT9hWjrFvvteCMNhvY1nY1WYr66V63iuu5doMevTBCoa",
  "key23": "3b1g1Gt8XX69fB7JW4U5r5XLFyiUVK1G2PUH4YdwgbpVdCVCeTD7sJVptk2zcdRwzdFig4MdZYocMuBGVykJGWME",
  "key24": "2zVH6dS7jHxFJixf4EnGPmfqq8yvPg6SMw2jF2h7vYXgyvinMmcreTGpjCx7BDRYVUDhwVSNBrv4ato75oVSeLya",
  "key25": "5AyHNAbTtGd8dzzd1EzPKKyjpmUMW5hR5cRu3NYxHTgEAmoSU4mWv9KncRXprcUnAdfUAxDsBEgmUwNwAAuKe9e2",
  "key26": "5qf7ifGW9VbUSvRpHQ3DkWFW2rMC3sRbd3RjwDj6XyRUVSyymT29iGMzEkAA8oSp3KEzackmhvt2HerRBCEQxwuq",
  "key27": "5fUYzayFsLuAuptwpfhnvBPTj4RBVKXj4DjX5U7eBJiQSxVqxSBWBXgHMDmGix6AQmMWacpD2FAKq9tbPm5LjCWb"
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
