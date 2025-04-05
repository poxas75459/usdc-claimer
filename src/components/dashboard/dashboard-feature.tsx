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
    "opaQB3a2j7dWh3iKxCR9RdzG5p5a41yYY8FoNSCxYr23HAucs7ym42WpwCvAYQ9jHPyEbDKp4XrkFf3QBxVwEeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vh7R2jkk7zrqmUwkUyzCywgJPiqz6wBAfXw4qp6uPUPbuS1oUTu2nZKog27CY9AbNdhNLapSXa9VshboMzpbS4F",
  "key1": "5JbSQZZfBBvXdxK2XkuuU9pzscqykBCUVx481e9hfBAVARmUiXj9KMGofPFpiR4pLp94XycNWfdWiKeznSS9HvTk",
  "key2": "5qzQvGYFjsEZdWRvxefPPgzB32rzcJ5kiLBqaL1uGAAKXKKTx7YEQBJWfArZVqVdCggT14fqZcv3gXPKzchCkQ3E",
  "key3": "4DeAi7mF7gmBKsLQ4KfWita5zjEBLFR16ZGqrF6DncrN4LZuoY93SiBh2swGcMjVuXjKDi4cvhVtoTTAWVqBM5t5",
  "key4": "2GXa37HqcmKw9EZBvHsUC8tv56C2Gj61bgNS4Nd5JwbvmAnJ879YwWBizgqyLsziSY2eR88nKEJ6NqGadQ1JGdLJ",
  "key5": "4V3MHmcrLQg5B3bSh3dL7yTMWh4J3WDTDHndgDg4LS6QTS8b2xkS2uoXsdhhYW5ynTBhwuHyXr1eFK3aNiCB7tiF",
  "key6": "4saAbEEaMCy4La995rhNevPviWBUouNf4VYbsyrSB2ZCtL9kDP4JgNZFKURqcrvzwMCyq3GVcKerdZCScewTtJBA",
  "key7": "3ccj9bsey7XBonPGyi3LPkkb7ZK4DwCWQAShiGw4JrwSTwJpLQws21xQqhwV5bH5vogzDueYrKUm5zxaX75UVngQ",
  "key8": "4znsV7D8oK9aFfmad1W1nrW5Zw5xncLqUeTAwU5pmE3foe7Nn4zKvFndaX4A8HF2SsvF9U72NsVj7fwnWS78JEnz",
  "key9": "3CwfgRrzr4DKDytH6rBiyQ6UgaFjUQVCz86fc87aGUTzf6shc5pdFUj7aCb7ZCQ9wmV86wxLXLRWBrBs6xJKw7gV",
  "key10": "3SXZ7fdamwHVicoQvfJi1cZfzzSiDxp3fHhaezyqoGHSCtVfjYBsH8oCdYTFQD74vHFPdFRFRKAYyWBKhQ7FfyRj",
  "key11": "3wSmE5Bwqu7FV5HjeA3b6aucupo19XQgGH1G48aMVcPKfFfF13QSoeUQpTayKYZb3trqqk6DAybQVwXwtH1udXQf",
  "key12": "44caFzNha7cEQTfgFhhzSxsehU1X249r2FmSqMduSExkkvKbSXGfPay9hfPL5a2fs6FDjZA2WnMaujU5PqDwmDyq",
  "key13": "2js9R6mZk1dvZn1Csq2AFMkbpidHHno4oHnrsqTgEvzd99T6n2uN6XRnTZHs2Pn7FLHBaUXGMrSXi64PRm7Dkhc6",
  "key14": "3xsDdXPL7Wqjweyi1v9FmKmHKqRj71BQYSkR6uGiB92zyVntVGD3Gk7CTctfB54y8mk1FVBtAJLEp8Gy9yurjk2y",
  "key15": "2Cvtx1oQSDuUwPLVCrz5w3n7cQFAueXktw49514vNeeLjcA5oUUX6nPgujZrXSW9a5Gd8ykBrdX2UYxrpCogPEad",
  "key16": "2iWEEW31kiqo4rCNDFbmmEg3GemNXuZjpp3JfA84xb3pRz7AS9KcZ7s7Nr5F5miM78hKdEHGbSC1gtdPgvjgh2bY",
  "key17": "3pv9NKPGtN8NRX5S4SsuBDmA4PgZi3a51L1UHM3LtbgtU9xBsHgjW72HRpQT63pyNz3SjZ3Yv4NzVJwZbq2HEbKv",
  "key18": "2C4F5GNQbJSZDB3Dtuw2cBtd7u5ZbHAWaRpxeQdnQuC28NS2Sow3r6FRJL3xhPUGNq4N5BqNkUWPCNckk1WA6y1z",
  "key19": "5zRtL2xVoa8SRczZxFZ6RmBWDTfQ9d8oGMEj627Xfok3xtTW8HiPsSARtxUKWE18wNm5RWjvQxdaP4VVF2jJftfw",
  "key20": "33YBnFViU5gmsHHpA53SeKrMqfNhSnaM5FzgeVJqWNkG6K9VUYzg1V1GyQEEAkyUiukyt9NsYG6UUGbzNR1JdYjZ",
  "key21": "3UNcKpCXW9ABHCwTdjgmwYaMtGDoVCVHRCK3inGawf4rchAAjJ2UTCq8zXYTeozsWVLddUx4fJCHeUrV26VEoyQ9",
  "key22": "2irkmNecFiGtdFH9HbgUJTfjXgchwX1niNCrGLk38GYYgviEGJDZSCp5KXQVtHtYoqvzzMAEAZyZqvCPwefbyaTG",
  "key23": "3n6oTyXgrk8bw2EjgDFPfRxqSRp3aHfzH1771ecupJ5uQwZEQBwTNtXxw2juSckpsJ7Sw9qmiumFkhgTu5h8AG6D",
  "key24": "5NMkrWfbVwo88SPEvXoy6cZ1PDUtBXTD8wZMYrMos7R1EYiwvca3xvJU3TDYx3f7a3GScNDFKQrQkvv59fuCEgWF",
  "key25": "5i4bcTBGembkGmVwrZwkuoNwTsrQYmTfq5E3Su6qbZ7KkUFEsdKMgtxkHWi3ZxFZGYCuFgqMFD4afG3LMPh8vDUm",
  "key26": "2dQhEgXF9iiuA9BQfAq8cxDjzknxZDm4PKQ7i588hFspEWZgz2PaSKu81d41vBeEhSzsn76aMqNTmnjL3weqekBG"
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
