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
    "v48SpCnLHYxB8yLWUQpKvkjsTc9qAYyKknZTBjHZefU7T6g3enuPRTUtsLBSxuoD6cKzn3G3EPmHnBjgfTb7BZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5narPm2LittMYrMEzqtjrsyUuNCVt3xkCuS3nke2ueE5HCGWvn7D7XU2RudCmt8TeJxob8kerGwQKBkfwqiNSkSo",
  "key1": "2E6vqtGMHCcUh5zmxaNLN1BK5KNdrJ6jfDY1LBbV6Kso4nWhWxFmzPenjVCRYVt4y7Ufu1qAuYxew7DVNj7pX2F5",
  "key2": "5QCEcDcy1KSUCTPETsfrT1F1arwcgiyeoWu5T5gR7EtUe9H2zB41uzC2Apv4wK4GeSKa3uZ7dmqBhEHK2L67B64F",
  "key3": "ngKJM7KE4sH6G2tuUn57MxSc4gkKvy6B9Ym1LFX6nRRTJ4gpPmMLg9UKVgE5fmXDyBdT2KTbeQ6PW1Zv29VANDD",
  "key4": "64fNkBKhbK9XwsZqjfA1PLzQvkPKbeGfg2XZWnRW83Chpa54LZFPNbf4DADWLfv379xWZMRa4KXy8Z1qrAMjDNSu",
  "key5": "JWp6hwkTtVU5i9eVFeB4ucTzSH2K29LcvWnZp9Wi6zTWF5bxiVVhA8dCVhq6qVqGnLX3Xy95fqHwVbZ1m7x2zBz",
  "key6": "55HcPrUEMB541oZtxAQaccdjRwMo1wZF9EyJMYttWQ5wzed1SwPV8gCspBFsVQmopV7dcS1rLFUBQk7LP37ajb8i",
  "key7": "2213w54TFqcLeGDDZAQeBP5iBCLHNiFfJDcki7ziqFHuMWPNZMdBsV3XeBc8HjCHnSkhLgsvJ8QnGVYtZQdLKdKQ",
  "key8": "PcieSebhdQRwfBqHuRi4RqKu4oERvvqiQQeD5bwz4oRWe2BiiE2vB24EsHBWtUjVSCXd3Jvb6scWSWGFF83vQu3",
  "key9": "4ojNTrBbQ98jFJqBqRXoUDpru25j5TZSGrXn2AyEF7Ni9YmYJ4F2bMtn985XJtF3NuicCdUpDdmYUxvmVZ9kmoi8",
  "key10": "4sobvvxFVW9jV5JUqZ4GLLZCw6t116YBfSxVTo3GtwFDsh7SmmqQ1stMAdcpjeWR371J5FwLmbEJTaesyVH2fZfP",
  "key11": "5GDGf7vMfJNAxHAm9HnmeyzmXsEDcvCd3pqUp6HQ4933qi65N9G3TJfWjiSNAWGr7biEXs1ZpvyDt7r6X97So9Xi",
  "key12": "5LgLfV3AYX4ryR6mTbeDxvkC55SgLPN9rMjPrZVfD5bkd84MVA58miZA22yEYMJVR5RHrAjyyxVJCfntsJidRZdr",
  "key13": "5gDraavYp1zY33PxTrjem7UvQL5VaGVzxDtSG4pZ3WmVUgGTTfmq3TsXi1pLWPxrp1D7pPQVW6HvCzCGGudE7k8Z",
  "key14": "q9T32hgFMXrFKbWuJDM6p3SmS2CVafTGUqoVEo451AxtuTcLcns7xLat8H5TH45HG132TrjH6HqMSJHWXHVBXGo",
  "key15": "2obbrKz8TRVJiHW1fppQU6sTP9VSkGgX2XUGNrpErruxu9LEkpMUKdgp9RprJwmV3EEQ4v8LMcPhjBjQFjPXmHwy",
  "key16": "4hPzcZgRU6u3D62YXKxbUiPTvmSo7HkWYJRYuHbxvH1v7wYeTMofz2jotC4BY5FFLhf42jFEUzrcabAmKpR99d2d",
  "key17": "28LVc2RPm6w6A3wG8NATXiSyyJ2Vy8vAJdvSAu46Gj88MQC3JdcvpzfncDknHU2YfL7PP4LAWa1Vq5sA4fTZrtRL",
  "key18": "4hBHZ28kTEQWL16VJCw6cT2NqEHYP3Psy7D1SvT8pwcF7v9M33E3Y8usMnVJFaCKGk51KeMdxMRgprDcuEic4A9Q",
  "key19": "3JXve3b6HopQLHfhA9ewLPhjaeC9TuFHvuS3duC5JQiYGWW9YVMjc6rYFXZ6NYTmptWpj5QVHSen99ZicJ7RQudW",
  "key20": "3hqxZxUbvZjgheRfZM85guXEcbe7VMrdGtuUYxEgya9GevuBENJAjK6ZqSR9QWQLz7QN9RCY7hVUg7Ui2Trqexrg",
  "key21": "4riVZZY5XiPing9z5NoVqhR95Vqj95XVbCuysbTseU7P3q3UjZhyGeg68SvzDFTPk8z5we2dxFvYkudZabLRNPJB",
  "key22": "2HiovutBuri1WN4Fn1ufHDDTSPSPQFgiY4PRsoBa2BBYdrtCtGfqpjwQgDRdy99D5NGNUxTHGgAmPAdMtGkzFkpg",
  "key23": "RjMJoTCwjNdfHByMHQc6K66MZPfG8oPLcPXRyQMPRjs4Jf3KYqg8F6RQkBom7Ue81DtzugiZLYL7itn393w5MsS",
  "key24": "4Ens3qr6QN3kHGrTTxFP6zs286bZu8AJpcfkXeycLAjUcdBvkeQo1jxuEcQ2AuqWMVAmoPm624cpWHYLFMg1JgCh",
  "key25": "5zTFMZJwMz9tQTYu68UpVy1vdicoNgkDVNfcySRvCfvuMD5SpGD4oaCE323DQTts2Cqsfohdb5Bf59zw9cw3dMZg",
  "key26": "xHESFYdYqoPbupzYFhure6CWkJfTET9zqvWVjESPGH1ds1fRvJDpGmTBxumm84kGupgxq5MQtJL51nngdUyxfLN",
  "key27": "3PqpeJerk9Rui3o1M9busvsqWaQ5wUDVhLFqYrJQWtn2A1ffdtF84gABAg11m9hHwyNVREXZymXQW8thqadAaCx",
  "key28": "58ZCrRF3c2oj7FRttwVSiDq9QENNrkTjMM7yZoBpxtSMFWzzEH8Wfh1PZS4TKeMZRnHZevm9PKtPcfbPq9uxJZv2",
  "key29": "dtLd9C6gxdTEKLq2nzYzdWTHJzoGN4nUGdSVRiJ7X7oNUC53SWGnMEbzuBQExsEy1gvj6FAUTSn7BxHUSayTHu7",
  "key30": "4tPdVYzzguMhtCLRpD7KaGf75wPwBTv5q4mPkCJpwTAzsb2P9eU5bj6Mftb5UbMXmeF1Dtv38zQSQ4Q657L1ifnf",
  "key31": "4YzbDt3Go4sMdykV2UPkEetYuAL8quj4k9tL5KJMZH8FnJ76bPoTvvcxkHb8aYZpdcEtuqiMDeKjq9odn7mbgyTq",
  "key32": "ywL12C9CC51eDMsfn49iWSfBN3iHiHHtCJWP7AnBEnNxKYjz4gHTXhEB5vuvfdJLDNJLSkoWuBktLkjcmbLUY1W",
  "key33": "3UUdDfXoi1fzp8J4unAYwsvXW9pNUKDjPCTe5yeyGgGiDqh2hph2gkx4WptgD6z9VSdXHgEi4RS3LNz8ZnWNdcuE"
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
