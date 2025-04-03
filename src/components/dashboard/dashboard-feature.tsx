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
    "b4RKe5qnMrCzb12zRAU7vXRXsFLpzp1jeDHeTzpdrxpB7v8rWAYZxFFecZuZWXRBWPnkD94PCgy2Gk3rsTKN9ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27hmm1m58d9K6QxosNrEVki1tF3n2q1hJ7jx6HY2HfX6CLHhczHQsh6XNdRStYho6EykHvPuGC3QiHd7RKFnhcmJ",
  "key1": "LYeHdDwMhGCFcrWfymCrVg6YyYLNKtNSadmnASgthKu45ai1NB5vyZsqEXJPg5ywLFkuqDyQsWGGMUtGfwVcoEa",
  "key2": "3v8VLXGnUW8URwvDftx23qTWxm2NwMu2ivXkHpGDmr4q8cyQQTziuPr9nFQDNvFJbc3bZppr1JSwRu1AcFvsF2XR",
  "key3": "45Kts2QLGM9YTYgsfx6dKwKc9Tx3HrCTLzm6rwvKjen2jxtmZu2MefbEkCL6qyznVVTyHrUMa2KmNT9obk5RDWSz",
  "key4": "zq9zDAwRehzZDaGDXuePzcQTMPfGHAqcxbMheKxdemJkwH15gQXySf62NuDcCkHNnm2ZHQ5wWuDir7M34KbVa83",
  "key5": "3XzxBc6XW68TJTWUxjivdGohX8qQJSYspUxvGkUUt7HaSXnhvuwnPG29JNsVA4tDcnTCkNDB6jNpXm81z9Cz3zEc",
  "key6": "4m4rv8g1UwjTVdVthVvntw4VzEk6RoqQmi6NmLELyiEsyadQuYmfcAHhZhviGTejwh35EWtWcJdaZuHB435J9Qn9",
  "key7": "7EfLMbtAwRCDmLXLv7L6tNemxagL4KozyUQKnC8tchCEfutQr449cmwwco8gqbs1eBNCPA5CxmZ7waEM6D6ktkw",
  "key8": "2gdAqgp6YBiMcDRCkMaBb9massnesssUv4RnpByUgzeCWZRb3KUKuj755yYJ77E71v3QugxEaXe9cP3Qc3h1KjbJ",
  "key9": "b7z2HoUjGeE175qG9CZcyJmtKqHgv9fDuGHwbi46gCcT1ymEhw9rQVYeeMF3JeotgWzQ2SnYYpgpKZy3MMq4XX9",
  "key10": "qpmtHFq9WXw89yQNZomhxocKHtWLt1BwFVXzSNNPinXVwy4gyK6ttmwZbg1C8rV3a7hty686k9cv8hg6i1yXjZb",
  "key11": "5RR4QaSe4AFraRwYLHgAf1csSaxwVm3HzfHKDeCE6ZHmkW5Wj9wHhRMnsYp8BjCcPxVZZZNVxxXLdEDFSuARfzN9",
  "key12": "2dUx9n4s3y22tfv4RTrCLMSkz1HyqmzQYjW1m1dNbARGyTYe92fQfoXymSWGaYH4sAL4bWRALRzbwHGJjuv76mh7",
  "key13": "3N4s3huH4R2XzmfAnxFnUjKvFDDKQrH7Ug1rWf8umF7G3cSGYbgakb9aUauExqwJGmcVTyHS7jQ7F94WbvXiKYNu",
  "key14": "uDK8gKzkAA86MxQqSAnAXoHtFRJMcrXBXZLrRS9RQ9B41RLqAWtksB68cFusyK9dnZLGxuEL2f3XBdinjPvgbjm",
  "key15": "3qRYSmAyhCVCS3fqS7sBm9tfaeABtUMDMzCeJ6yFYgqM4NhJwm6hqUzt2evURvbXVde2Fwh4o53pinwyNRHTepo",
  "key16": "4UJGzYDSshTUi5iebZeMeTtdshYemQg9JyA6a1iuMn9CYrE3CiGxqFL28QsnMPLUCt12pdmLbUhz84hcxSgsXSZe",
  "key17": "3jH4fxW2fFdLLmRczw7ztGAwV1jzGcJhNkaevxDKYNGwz4pAFdsctMK9j87w7FoRCcr4rs2FWszYNACzQfQPJm58",
  "key18": "4VrGZrQKzi4YVSTUNoHM9EYEvQXyp3vMPdT7dGY5wuj2eADRKqCgjVNWbFbJpJnKisGuC6Di43bEAiZXJgq3BBeU",
  "key19": "2oqEw6zW7nVodbxfScT9LgbUoHPTv7oXZ7wHxbXn8kESdE1QJy6QcKLfWYTcKGCHoqTVQX6hVGRqiPbiaZGejvbp",
  "key20": "wCiiyaU5cWYv6UeZJ4B7xLZBEFdnESwfqki2u5cwXwN6e77ziH9wX3RGhFp9DiudWgvDXUVZDGHFYdki5gvzMWY",
  "key21": "4D2bQvw8htFh1X7jCGxqYuJxWW3fEfbLpDiuuQTUiDNgF9KE9wXUDpEsk9zd8vaQdhTAQob2A2pcJoLT7QcPvpAU",
  "key22": "3K9b5UPBXp9Auj47z2bEp7t8FM17AAfHcYa2f2mNopSghYdZCQA2BxxBNmy8aQC8V3p7uHd2hrWWi1enuMkQKgLP",
  "key23": "3SPHfwoHfxhQAP4pkYeV2M7Lg8P4VPZ1vDLP9Ta6mVsxAEpHBMdq5a2jpnoJ8So3Ekrxt3sYY1vrEmN21dNSvHRU",
  "key24": "5k74b65RDCikPdhoqUxcoP9Rk6VtSzGM4DFEujwmAJStmVkAh3vi4oqFMQuTT83droJV1xq1Uid8V2dKvuSSQas8",
  "key25": "3d1Egu3yxbRdeDkK12PM6w8cQjuS83ywK9XeR5Z7vgkadnckrsRKGVpJFjioiSieCJ4F53zuckbES5Wafd7iCbKb",
  "key26": "2Fcoc6HX5WebQnSN3zJ41FLL961uuDo1faCg2XJqfgz8LT82Pm7mfTMrGkzpQJe28wcxpz7w2gu4CLpcBfV5qrEs",
  "key27": "zBPuDns94B5iwK1TxNjkYzvwePvTdaKxKB5nZhb7PiFHSqLXcgJtj93aPAWnwaT9WAQYrDekZ1p6Wknzkz6xJMP",
  "key28": "652CuXJNpuoAjnU88ffYhUJctfbH1FfEp18JKrMww4b3stGT7YKDTtcEDVVc7isAMQrGKAL4yhWozTxGASonW8JQ",
  "key29": "5GysAQzfEXbsbmmtcZ7DN5uCMm3BeNTTuBcESKPRaf21o2V5rMw8TGFJMPFrZrms12JqwCoiGUxATg8b5Vv9hBkc",
  "key30": "u4cveHMhKu1UnrN1LpJqN8Nobk6wfnhWJTMhJDkDtQa8U5xiUkhCs6AYxBnEbUVR3WWTSb2SBXnQ7qLud3PndCW",
  "key31": "Zw5PwERaxHcKcHAiyYBvtnD4MxDDqLzZGC5QfuUn8RBBwPPjxEetAHYXjua1xrnyiqRnVfiJzi4jK5mVYnSwSSL",
  "key32": "2rkgBhfEGGXjMWG6UQ3Yv8BXTHwmoP4S5SMLzsorzK9MMXJNTsxDvbmLZGksy3bTV5v4epES6WmWrYZaTpuTnBuS",
  "key33": "5mimYvbR4oVin4GzMcFsqVARDuZyypHPhqSjVGwEV5Hf4FK2rM9c9nT3Fp6QDMSaTvY9s5mvERpH6ckoMQ9zhcH8",
  "key34": "2871M1Gsz3QbMN75ASXatjrJbfyQSFKqavz76rpQwkVsNVnBNwwf3zk7LZrW17QFT8YNjPxkcVM4pbnBDbuh6FRj",
  "key35": "2nZ4YvYwiTC4ueRbph7czQ6NA7M6F1fFj3veV56P9Rc6nxo7MyE89cRY4hKsoRJViT8LoDiBwXPbPGeXXmK2bNic",
  "key36": "HacQgL1qT41uNZzC6SmudH4CWWiWtzxvt4BeYYua5XvdtaMmFJ6Um6DQEpxMWfXa77Py77czg7gJ9A7QNpemwSx"
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
