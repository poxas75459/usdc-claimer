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
    "WXMDxQ3LZiEBkgySNt8zYKR4dGdYmwQGZqini8ZgQcFiszMDQJgRKihFhoLxfqvxEAxe3AnNZyegZRM5Ro7a3tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRxf6tNrQHzsdeHm9nTWPfbKGXbRTC3FGjAW4oupWCNNGNkQnCHe6mbr23gYRDo3wce6Uuv3k8eDzYNBxWeFV7h",
  "key1": "3aCoULZSXkvwTcwGo1zxkAJ8UYZNvBSR6jkBzDC9SL2m1iPPwCmNDCxUbRGhg4D3GMdpQX8HX78s7uEggiAWo9Tm",
  "key2": "Vs4qwa1xFJ8ZygAwVNTRJ4Sju45rgM74mcX3uSfrgFHURWRK6E3sW99yhxb3ZSTCQUfZp15nac67FZU1DS5AAVZ",
  "key3": "3MeixKs2HmYFok5hwCf1p2gQh1xAYWw2ExVt5whMX9qvq4CRC3nYq5ckHZW7vV9XDky6qqtd7KGroA7sbvj67Xs6",
  "key4": "2bRuvsvoDZPHM5s4snWxQw83ZJQe8BFYJGvuQ5k9iWen4G7qoMTzh7ZiNT58jvPhrdDYfCVNWHf6bUrKR3EzZh8m",
  "key5": "5jDAYCa5cZ55ythvF3NLkWvRepjhJduHh1ev7Gftc3XrWJz5Pn2qXRieDCuLqzvoSdrw512iWQy7nYvu77SdKa4m",
  "key6": "4aGBFZ6g9Jp6oa35AjyDAkekYSXzEstP6uHQk5esdnDbeMaCDq7ev6jUZ7mfsH2QxbEfiV3gWosXgMHAvmAjffiK",
  "key7": "2mA4gfc1qpYSM5Jq4MnAHSGSFFpQBczYcTrsFs967Pz52zxpK7wFfmnnsSuKGcU1LSNfRnQuMT8LYQixf3eoQnvK",
  "key8": "4mRXaDBF1EVVwLBouvzW4suRvyBucpD8RskVrVUaaft6yEGFnBsFzBfXJXy3B9iMQxrJakwRE1oJg1otsDX12tDi",
  "key9": "5WhHpUVUX23E4EAAq2EpTtJroVKcoTk65cywyepvgxvroX5uHNwC8CnfkDab2ikrr9jSgczKcmdSGqwSvdzEwXvz",
  "key10": "5A2z9cPJsmrwhnfrrnxyWD6cgaqoVUnEv4hZnKuPG5K4hei3WjnvXbkgtLMwAwf48L7WpHGya2E7nGrgw6Exykxe",
  "key11": "5EhM4neJgEuQ2R9bVkuHX4Ts5jsUxHpTPwYPDLMXcU3uxGVWE23cBadwTxbEerhknjCDP5QVfPSNCBLVejCgyFXv",
  "key12": "5Cf7ZgAbWW7eaEY9d7sYTrtpYZwsT8iBFjVFpLWJF5x2YXc1tAkbA85Us4pCT1JkzmhP5Anz1gAACfnPPcajD4TZ",
  "key13": "5xAGEGKJzRiNXs39gxFQVNzb8zAzxMGmvkH2YuLXDAnKCgEDt2n4ehv9ZEYQexD9XUBzKoiVKvPxsCfRLZS3e3Uu",
  "key14": "3U3kGwY97QNgs9TS847ZQisr6jxE5v9xUQZgboYUt6QtoHHH5T6Xf7T9W6CAFPut5LVfuugDsaczi7yWD9hG9s8r",
  "key15": "3wwZ2thfCsh2wJZRBjWYoRsArNEy4J1uwRG91p46HAwHZcmxzbqWmjkUY7j3ny7Z6QM5FPioKwVYdDBg8KxgSrKj",
  "key16": "2uMty5HpKgpXA4XDuM5jaUUiDUtJQBnWr7dPXHQ4HjrAhByVwAt8VkyK5BguDky7q9sXN385bbG6nfbzzM9KBB63",
  "key17": "2oPnUUf3Tc2uXWuRMPdF8r8YL2uy1XM3KWz2ZQ8RpXXV69KvT39tUW2D6yEaHqyzr35tJJDgrYfKKwTfCP6NMUNV",
  "key18": "5b7hDfGvTfCvQswHPMuNh8oCgyuVknwPy5FzzffHJGL5k2xHVwS7aCAGYevnFW5RuWc9ziPTrJoHbEwtNsJhyBFv",
  "key19": "3PXvH6t6eEwBCDYAKHHFGhh997zdn3DicuWPLpmZWWoG7z8KQCqk1UZVXk7xpV7FzzUxF2SfzJEmyz3tnM3DsTvt",
  "key20": "qX7yr9YW6u15TbrvzfyQX3DbibAz5jjJu8SYPTJrewacJ35JyYqaxzjanMCXhPVR4fnH6xZ5AtH29sKYh6Kax3a",
  "key21": "2QCXDTR6UHwb85khwVJtmnSC8hD9VXqQrSkrLTjo7QFPX2ukyJ2UkqXGnPuzXKPU28AYT7uxrnNyqCTxeCfiZCLN",
  "key22": "2jj23SUkM2rDG5AbDue3NP6KncCHC4uhpySPjYSRfk81Fxj9m6vPK2Xn23HkNSf9rT11DbPvS6iUZPqVdExmF5ix",
  "key23": "4ECeJyWa4gc1qV9JrxBe2RaGGq3JYjNoVp8wom57pXjr59EdrbQgPx75W5zKPPK1p6WBpEw8DMa6FmFSFHFNTBCo",
  "key24": "5XDLwsWQ8PEpDQWkmsRKTwN3z2xzgjUUFShr96hAZ4yRnL5gbThA8adxBxyyu5TNqiqJ2oR4aUKZoUwCFCAqXwm2",
  "key25": "36XpMDMRwWjhFzUX8M7j7DmrtwjnPCjf8y7Jry85BBKNjKnAAvnwPkHRU7ZWz9i5fTVhefXMVf2YKaaoxkgkB5Td",
  "key26": "XvnRkuLpNz6x1QYK8ViDk7awe1x6ifcfgV36dzmGoXobutAEXPgRdJF4HKr1Nz5pDAGN2pAXvqFiXPWVhRK5634",
  "key27": "413FpgBa7k781PmDjhAMoBJEjcfcCHvzjgWvbEv5wNJJeDzTR7cG4xh5RH5AoysbiVsTJqrgkYrJtjxiWGRLPLG1",
  "key28": "4KLYTeZqwwWkXFAqsSurrV1exoha2G4yBAPK7mbN4GuycJ48iSTvh9jmvVQNNzFdt77BFtqqh7GLDugGLyG57ivK",
  "key29": "28pcL5RwUNwrKhFeQyVis1h8jZjAiYEXfvc2r211jzjhuTL4PWMN5ATq7UEhNB7S5mBWr51WnCXFCLdYni5zRXxG",
  "key30": "7sMpKSjqtQWjLSVhNcmuDY1QoVpyFG8s4K7KN53QzzUEJ5Jnj3ugdwCNiRVnb5DmChEq9AZA2k4pHvLAVghNFHR",
  "key31": "Lp5UzjimsMAnvCFcd4aW4dZvBZGJ6eFMJz12esiJCHNHUoyPvVjrVA2Yet5r8swp4m7o2Dgw99xXbKBBjFFFcsi",
  "key32": "2rBEaHoFYnfQVJyWykZtWvXvTuw3gTqPNqz39U2V2JwVF738EReBbLW5rRyYiMLcJ1ZxDFo3a82vtLC1kcRTvsSY",
  "key33": "5ewDu8A57CpCGgcHVxqQarfEXEyRjY2JTsZ1VbaQ3GEysFWfgSjqoNy3xyVyunjkXCG93cTE7RE76twuwFKizzqd",
  "key34": "ohtUft1o8rYVEGSicVS1Pdm6aVXHWB11g4NcPFydRKNAcMRpDZzDGQLFLkQoaDAsvQ6RsbsYvSD3RkPcmpMyYac",
  "key35": "2UemdxhTFeRJJMKJJqDGk9TmdkGuAjSqU99UEgtfjN5cheaPncDoL3gv7nniukqP8k9YFVUdqiyoHDKsBJomK4h2",
  "key36": "5xT67kQLYZmebz9vV3wtbvzZcUKCLr4DhAbzJeLe5TP9hzSY6pMxwCQMysGWxAtR6wxBFbN9HgrE9QspBy2VSDPD",
  "key37": "JNkZuitwdsWxkvgGSgFakh1v5u9QvmzNkiqhxaMt7fqvHvXWVTastqpNghJdEnq6vd9KDT8dPoUzKNdzcUXabrR"
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
