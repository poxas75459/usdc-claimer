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
    "5Wh7qa6EtifhqkXhFhVdH9p7mssWeLeaxuA9NQzHBr4fu1bg3KnLW637r4XjvcqEfZbpaL6fLdkSoCxdMpn6tVff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnaLGoPHRwaephJPoMQmXAYVFCFQkT5PLTMn5pmygdUXkYtT5DChmkm6ccF9QoF7PdMzJj3X3HRtdEuzhJfzZ1J",
  "key1": "4gaL7ZKpV2nYNaTuQiQ4Ef3hHoEJ6dPwZDofSeCtrDWGujA2tixiUbK4vo16HpAtD541FRdSTvoVwERQQvsgPGyv",
  "key2": "3nGPDwfFmLbPnS1nco3sJYmCr5wuJSzwZ8m4gDiS98sz4hSEhoQD5MxwSL4yo8Z5s4eS8Q611XEdLthuHpUqnV16",
  "key3": "4ZxTk52EqNZiS3ib325uuciouwGBwsg4A2sX1iLGHV8g7bGWXg3N4dtXmyFR1prpGB3YAKkGB9h358x2cws7ghiU",
  "key4": "5kwr7naPidRB4tYnR9YgC85WxGu9xpZs8utw4me8dxsVJrNvKmws8vAssu7YYPg7LUDFTFs7JA5xWuaqXy3Z9Xxt",
  "key5": "2CwfxVEgfZykqH7FdRDK54yPtgFNzdcT1eiwVCGyugXnBavGpkBrRDdMwkSXJ92SSPvqAL9ue9TVnHWw8s6U5gqB",
  "key6": "4BSwe2gSq3kTBjLTJMx7PxuePCsmFvhbGqYGDDSxHdhGTgjTXLvodoaY6ANPTHvyi9EHMb2YcoyEyhu4LvDt61hd",
  "key7": "2b2BnHgzDQ15kNusyyPtLQHDYMKCRAkzQAs8srgJMkcwQo7cst2jgDSkjDoCzgBqPAZe2XyZfnsSYxPJstky5Fw7",
  "key8": "2kkbWfNXPPsp3YgrayTyMvBFkmHh95M13rnpfeex6hM6YLoWdpHMPZyw48Pdgt1ZH3Y7EFiESCckNpzfWCcjZcTw",
  "key9": "4XRZDu9cmSU1oiEcgLdmQDhTbcnZAtPgrdW4WETYaKcDq93ef3QgVKy17EFUpBasLxUoivCTuJeB1FuM5YJWnt8F",
  "key10": "2jPmUZ9gUscniP4rxbhrbhE3E43jVN2jYqkkahAhxSpwVwzwkRzUkekFbKLvwBuQAduGtrQQcVmhHzBfirwN9UuU",
  "key11": "31umQFwLbgad2b5WFYFfEmRsPc8QisyYLFcd7du99ctatSkosq6nEQz2Dq31X35amRGtTnVbbEXwHpDAvmcQSvth",
  "key12": "2kpUGqjrEp4o8r4YiU7nGV6BB53by2kNYRarrkAtheABTQDf2BhyNU1TFEsdXQ9xwxbznPsfXbuH57yPCvryHiMB",
  "key13": "uxtFDsaFiPNqMNi3s4SZApRdnTNzs9XriBWU8DzXU5E2WHUmwbWcmG88eXKXo6yGPs4xBqfuyepzwRNRbjS6xCh",
  "key14": "3JemdA9Pi1RL7BTLPqZ22LRKMjnsZZVtUdUsg6HeK9RnqfdxtMHmsrSgCoEqJYGjFWRU8EaMN8EJGFVMsWf9fB5W",
  "key15": "CxYEPio8NzdNKdyV7PsBAgVVnuN3Wyt48d6mxwoVxjUTHtpQbLPw7uHLbnn8ZkrjovZTWfXejbu9k3FwByMuX8v",
  "key16": "3ypsd5ycosdiPuDsg5C2KSzWJD6xpoqEviF44c893pRjWMULwJazpMWDdhz7ANygdN1xU1FBc3kHE1yknjvbfVdg",
  "key17": "4XvcFjQYBUUEVxopXqEa2yTygWhLUSY35Kh6Fx3zgSjnBCcnkdg8Ngp1Tg9wk417vAm2DDdMPzaY5SaCTXj5iHDP",
  "key18": "4BeRnCbiLwgyY64g26WT2BcLxvbpNAzuEK3RNMSV8eNqhU25L7JPchDKepi7MzbkT3SKaXtfwMco8wowfSDJ87Nn",
  "key19": "RdJkhZNpGzrnwDsj8WoKQo4CW3h3n1pb39S4Fpc5aCAa7nfRCSWnKxPfcD7361zvKD31hH4mePsN77auM6qdD7o",
  "key20": "5jLHFNQsuPxp9c5sRQPWEyyruXSupFGJAkkeAT3iriBB8H9EvGdk1fpvgr1uCM24rEsGVcev2nzNE7x4YwaHjXge",
  "key21": "4zsSufAtzZcKajHCQoXUp93Zh54tYjt2xHco3m1cKnuegLSuf7Ja7DMDXuv61kawm8vx9iPeCGBoxURcLgAyFgn9",
  "key22": "5hLVMv9pChNS98rEuUoQH1kLKbFy9G2pXMWsBwwshKXyWqGKmqoDXTqLKG3JhHSjNgFLfX5Gg3zYbgnJqAaSfTpV",
  "key23": "4ET1nBMzjZXQM8bVmxPKPud5KR7nacc3g6DvcjMkfiKF13WTcqm9T6Fw9Pe41eUg2G7gxiUGdVmmgz59avSUbfXS",
  "key24": "2KjQd5LhgjVwgAkieJV4fW1nz3XsniE8UGCGFVG3MrimYMkcrqkCkDkfWuS6vPitMKfPWWywKVH8vVqnQ9Grirfi",
  "key25": "2KPp1ot3zoPCd8DgMN4nouKfvZo7jNCrY2G8ybfuarkLTR621eiQy58Q6LyNWLMi6SoJiREd3gVwPCsciqivTrMP",
  "key26": "5zGr1ugCpDJ44MgR4ix3LPbqWGnfEcoJ2CufqNKbpZyVYLq6VZWCs9QTK4PWiq2YdF6HehDRTW25Xz9ADWpWWWV2",
  "key27": "GoVH88WDTz3X9m2zUYdiNXHE8nahQ9R9okydg6UMptCsgtmoi1nxvUQsiFQxcx9dZ6h9dxuJi3ZCqFdAVoXvQBS",
  "key28": "4DLUdKvU82ky4pso1zbL1FqU4FzWEmEgANtizA4JTrs16jonR1yMUSMMrBotRiG1NiyE9MQUToRjNL3F9z9zrFqu",
  "key29": "4gwPXoPiBcQZJJZapRBm2FHLBUyxtXDS3XZnGsh1S2Y1aqgFtwwSRRqft3sK9ryEuR2UxAPnQTocQpS9oBdfMxYU",
  "key30": "5H8bW7P1GCWh6eJC4QoTjoyXD4f8G3WGFdyAWvZkrddNEVHE1x1sZcdXfUfvUCWY7YnQ7vzWmAmiWSKMNFS3BHjq",
  "key31": "Sd5fgmtLMrpn839G1ayW3P1cCpafgs3g3rSFLk34XYwNijExgkJXVLnzXW4NNwxsUr6uJ8iyvyvh5KJpYUADZGt",
  "key32": "5FYDuoyY9zgtoaoawa3n5i26YWAJ9DaT18PxqmohdqaRqY7TbnmnNZ5hMqwrwQv8iNQCvSwtzWFBVtHwEz3rQD7V"
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
