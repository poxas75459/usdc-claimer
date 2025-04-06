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
    "4PzrT6sZfvCw1VUMSCMB8voYtbKGVhMBUkbm9nm93SKjGFABCBwAMS5tzU6Y2BJsULccYLJ2ELwTeXECHETFS3kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPHFTqNHTwQ6LoqV5N13E8brBzzsGWFpJLPX7CEMMzaCGcmFuqzpU2Rngr2uwoPUz6vV4iF1dU8oUiVqJcL44Ea",
  "key1": "567T9wYFztEwXPFtF6xBmVc34q8P7EfQ5RCZ4W76scwAEvyUKhm3uTXoP5Etwb7ePczTr8ZHzh6pMK8xepkyJEfS",
  "key2": "437TUS3ww9YJ2hYSJLZrcdxqMH8JiudpV4bSPcodANHmZbHwkbGAye8K2TpvfMQP6jZ1h59DyETHSGddUU8zNe1k",
  "key3": "4QeDjccFfApzLVVFR1bcDiukMNUBgtAd7pLBTALuD2wHnBkiv7vc2uFG7kqSeZTLESp5jDvLpG7ZEJEhhPcqRYMm",
  "key4": "662drMsTXygYusEnEA8t5YpAdob4LCjVMAwTa4bj6teDMVw3taimf2UU6bsYwVKKRH451QuEMS8bGcoB4N6UwYDT",
  "key5": "3QDBevWR13Qqp4ZBB2KUYq9kC22q3mzT4NNGaCw3Lj66vNMhnMyPS9MZ2ZezFxPCu9egWEN6Kb9B2VNB7GfauktQ",
  "key6": "33gADqCG6pysYkSf6mXaf9C4djzuoWueLqqdYz72YGCxyPBJkwy1ouna3G3gkYPNZjDHerMzB5DFj9Ga4pUqt32F",
  "key7": "3jP3U5CPMTAe5c7FFvVpKCP1fVvEbvXucZU9QN5VCenAie56RucB8QPw7KA9RaUNjtFQAKu2XtnkkurnXpNVKom2",
  "key8": "37sTaUDegVXMG8UETbwb5km4rsoFMeuC2BP6o7xBLzTpVtjycX4tb8UQaafUFAQs2HqEH8V3PpZn5BJKtD3XDVyK",
  "key9": "3KzZmHL53nXfV7aMChB8FqDr7Pdd2k4WGEkrZmomUKvMYqbCKozqT94WMMqYg5rdjBAzp2AejhMpDT8GT8VTEw5W",
  "key10": "3kbCRiUzKPgF9WadgnfEQG1WaKf7yqxYZipsDby73wRR74LdHvNtUhe3SpRyEBqNcH8u7rBf6o2fyWd5kZL9vHqN",
  "key11": "3Z3GZQzSWB6M89c2AL86oVyNdZQWAz1JahAEw25vWirMRESvaviqGfFetAgBSWLKgUbo6osy1LnXc8LCoKiBfkKc",
  "key12": "4BPxBoTef1sVgw3FTdtTjZR6pdmUJpF1eMog2cuQC2X22LtWoz8GWJGdWwYPFMgc8DX95CStvFU5btbszNPB9PwZ",
  "key13": "UJGXJAsXZaV8t828nJJhP3Kk15Ww4dx4HkjZnJ2D7xVCotbFGMSYkrwXYMho6443DcDF5FHaBajxUeJnd4rH1Jg",
  "key14": "2hSu2dRSRGvJLsjTjfBo3k3g16RaTd1aerRarFLMZs2GR5wtCMu27qpNCp7SCAUm3YJH8r4Fa59ZRQe1aJ9wd4di",
  "key15": "4yJz3natRyzkjzMwSTrmCZex8jDZRQDFoVGUoDdHTJMb1FJCGBAkXxzuR5QBW5pQ1Mwxc3puVPdwpraSeTL5Gfqn",
  "key16": "5qV3VnwDyoiFGTiE6GJya2wKCendhbWezPYqFad9Actm9CCo7WZvuRho8xZntm9EezXbPyfYajKhaQvrQHPG5jDK",
  "key17": "5bdNb8zrYEEXR2PKnqVENFKtnvaZqfLcdP9eWMNprtXpg4beX7euzyqeS7ed5NUYEShhPfwmrzBJsVHLMoRcywJx",
  "key18": "4aoL19HMbmuDesBxhAQXn8iyBg9jxh2sNi4XWYFsA59GbQf91ZU7EcTg78okfKUcYLaXFDQELHTycmwLWmo9opju",
  "key19": "zS1bkGBdWo6dZTNUgQsR3NmM9RNnZ8E3KDqBJ3uzhW8RXZ8rwoXvzFvxK1wDpWXuay9Gd4Vm6nRSP4PsE8RCm6Y",
  "key20": "2mD9Fbw9TNq11hmrnddpzt3jLbcmpBL1T8hV6DYHcM5VwFTwnanUtsHgTjkqrZi1uzBcNSrvc51cG5AH2oW2nCXt",
  "key21": "5k8YaLHkCwmheDYNLLUg5JqHCQ9UcQqrXzwgUmRqZk6JSsdsPQDde35smHm5mKzCv2Y5fCxRGhngjCr8Hrv7W5Vc",
  "key22": "5cgY2VujU7WcTDi8Zc89g6FYFtNsyw3Mq9drJ4oZ8fbApRAA24raR8v4AVCR2vbyqBmAKxvWAFnyP3aR5tHwPMsn",
  "key23": "5bg7Xgg7hxQdUySZAU9fphumHQrwavRn5vsub275vdEtGJJrZ3dBLFqWqctFspyAMKGJxqv7rCZSzngDd5vobyXy",
  "key24": "5Ttfp4Qsu1mszdHgxfLjKhak3aCqEZsZ5MpygiMiXXQp4nAEc61KrztiJ7TMmgixYEN9Cz43t1vZXacXcq69M32p",
  "key25": "2KnxXg7pcmtJi6bsgX4zjkdtWrxBoMh2fLF4bpya2jpYWU5RzkBi8gQCaYgB9EPiXrkiLvTXTSaviEfs3nVM6yJW",
  "key26": "4uHnMjngtKeXvHCxfmiKanzWWLjeywhAAmDXBMauY45iEmEomSuRtQfJaD1hczfrVgtcJ7oBiP6dbWLh1f5dGz9n",
  "key27": "5QkiUPke7djHZQzJQcbxLKhzL3559AwNHUrzbAw2D6CdxJ2DMTark8qUYACW2ZQQUzNSaPJUYAPaLSsSxtEmGrS",
  "key28": "3Tmartpqo9TH6ribXMd375HHWiDzZjbb34TWqUfZmgS7PNcUzXnZ1a5e25czAfe1U82ccoGcMct8WQ32xR4y8NRo",
  "key29": "3zBUG43yZMsiHHZRBUjnLPsnD4QEkajEXvt4fcTf33sQ4Ax9UGhRx91ZkKapxFGX2VXTccJeVErAUiJQhKy6CLkY",
  "key30": "5ymzFoUHVxFGkiWeYrto2tVHx4fFw4cKxbJ9yZ1sFsRyrTBigkAJ3JfXzXjNBVU1VhAGusTXADmL33DqPJBXd4At",
  "key31": "4zynyT7eyMymUfCdJJ5VBXELjoBnaPo1vDYaHtATmeniTGm9AxJS41gkJPnJnPkyuQtqrb35obmJhjqD6TQJExwU",
  "key32": "4hByWtqfMjiYK5SK9zFisiVsqqPuWv3cfjejZdaXrV64wDg1hGEfEAtDuuZPee9roLG929LiFTD7z1JuRTHHAt5z",
  "key33": "MpYEmFSTjk96hdwMrS1sPii9NLsNJAMTK5YDvrQM5gGrqNA4d4zZLipuYZSaMUNVN67xJdBp8cUEh6bvMHqEh4L",
  "key34": "5cLExfYL1BtQdfUfYgQVrdCwiVS7N1XKP3jZKJJ2vZPkYrqEUtoxNVpStuXXHAP5hcgA1gohtNtj3mxWu5N88eEr"
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
