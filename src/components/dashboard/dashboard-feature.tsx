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
    "2ujz1SY73ZxLp7cqLAAFkrADNSyqfqwfSaw3Cgdgp5SbTzffZQ2Z2Lb4Mwi1a7pS37JhF9dJHT9jaaNPpHfA6JGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMX9iPQub6xcxKv4iYJV1wq7PiuBeeR5rxEbF6e2g73unHCE4r6BuXZ8uu7pRvUYV4Rwhr64jUDiNTAy1DKGATS",
  "key1": "3JEX32Pixr9kAGjpR9TUJueAZ2NuToa1DX8geZjchzk8hrYMjYQekLM8EZjEUR7LRrb8fMf1tLR12DNerUX8s4sA",
  "key2": "3VMh1iFkTyWEjX1n87uT4GnpMsAXrd7YZX5syUiyGvsdgDpDdBY79nHT3F2YsCi2fQEwMpiXaQuYurtEJuE4cEiS",
  "key3": "aX2hN6fAeaCGP2QvhY3NB3ZdCiJekWa4gfKpwwbRgxwitLoj8cLQq8FBhZQNLSqdNtkoMyKNVeVEC2op9F2BmzF",
  "key4": "4Z8iZ9BSESMJrrTEjTL6Yi3w1FiymnEgfKwHvWG1cjz5jkNS4hMDxcC4xhgkfkymcLs9eoVaecpdZApyKtPgbHPa",
  "key5": "32mz4fjto6cZW2338ULJYxRP6TqPb1TJd4nKdFnPHH19JQxAEhnR7FVzMC4uuPmfW2GgC3uJ2aY8h6PMNNSu31gd",
  "key6": "3xZp5cj1yPHeRBogCCzzDBpA2bxHio2quQB358sggtGn7wywnZwBRTAxSYC6VvNQ1VE5CmUnVUR6GVXNQLRoqA8M",
  "key7": "5BfwgpUXi6XiDTBrVx1Mt549yDPvb4WBxahqEU61HvTUKaUS7tCWWAWb8fjHXDuoBhQmK6RmrKkMAM1Vy2bsUM6N",
  "key8": "2gos7iUNHCt8wuJ3SjJkLkzti6116KNdckvePr3wTs5yMMLJxuJqsKCzNBBfGQocM2htpMr7okBDGVNBc9RmuFUA",
  "key9": "4zn16zdcjRdoqUsF3hkiVu3P9X5kWDV8v8TE1Xs7woyUWZnvRKuisFrbFx2k2JnqKFbzySq43M17c6KFXqcqt9oG",
  "key10": "3U1iVw2HEZUz9mG1YxWAUFcsgRxTEp88QGuGuj6LwfGa4dHMmhq9p15DVfjxPfAwzNcLMDwBbiKQyM1qqMpBeixv",
  "key11": "4TbXpsmnjLARB5ARm5PiW7KB4XJLvWEhSw25MaEqGmLuFwkGB1yAL1VuR4nDivFyUWpZWUHpoGtBh933sgrULVoF",
  "key12": "4CVwowVSdnvEisEf5wWDwgKB126xHTQ7rARocNstFgNErp3ir1V8JGXfHdG6xjustKFTSABknNKHP4W5npbeKosP",
  "key13": "oqwgKm7tGLhqcWAq1kNhz1L6VZRbyHBUg4mgv3seSEUTqYqUPbNmVYqQmXBoWh94JtusWeKYE1R1kZ4kCinXT7m",
  "key14": "3kLR9Up2CpYKDbq7d4nyFvGQPm7hJGJmz3X5R2kmtZtan6ECNSWJa1e4XPNZnuSkEoU4na9h2YH3YY6jWisJL5JJ",
  "key15": "2S2mRoVAD4vaFogTcuCPNMrx16AXsBbg1zYSRiq1rQiZNXhPAL4PLit2ZUsgUvCrd68ngnhKj4dLh3hWvEJQ33As",
  "key16": "4sSFV9dudmxXPWSPKHs52kLQ2ubwhuBUJg1S31qswvueUzQi386vqtJoL5QME8MVYjVyVTQwD1mAhh3zbSaMUMkx",
  "key17": "4mXTQFzofpR9PnU6cpVy3hAtsUNvULvvFpef9r9v2ogebj95w4t89ecPZCKpaa66e1uuVpRyntWVyhBkk7hvkpB3",
  "key18": "5mFMqxnqjcVdnnVU1jQxnUqwN8ta5uC6YN57ja5khLNuAGZxApXaTarsw3i3mmqZYczX7yv5Gx6Ku1uuTw1nhtR5",
  "key19": "67EZDFUMBNLBmaj2ZzhaQZRqj5Vaygc1H78wEYyLdPtENFW8T2Vs19RC83hJkn1dpREpEQ48PbwHy2qKqG3w9t8y",
  "key20": "4HQGowajc3vM7ufqbFjjywUFfQMYQ3pYov4MMqs95GaVVxfkAUL5giShYp3RLc5BXBGpAzar5J6832iVqCRpFWov",
  "key21": "5KpZUhENdkvH6NNxJ9hPi4XWXzKKFbqbqgphL2Fffo3c7TEAcj742k3Xng7VjQ37PY7ThKEYzpm3Ew8HUx6i79z6",
  "key22": "2P5Dm6zTq9GVErpTHVuM78SoHETDQeYft9QdJEjf4nFCGAHQZQwynqVMxkLL1UevZCF4raokqHZwzhH6EcteWsSA",
  "key23": "SejurngDHbaSsWkRDtEUvxp1BjwPUXyCRzqs8qupFhywvQLSeZCwFtyBx4LCzbSyZWthri4Pd2KUY9R8Sv6TSGE",
  "key24": "4XQiasXzSeXre8cgoJv2gCLiFyuYVU641onMYmc5fuLwAzsRcZzNXRbHq41sZw5gHEZ2NMJyRsiQxsUrzewMLNFT",
  "key25": "36Z98AFDX2xtkxtwgtmcZvJFi2iYKCcUCyUv849wU5WtMVs35fzukf11TmohLs37qo8BwTSPrvyoE7CHzKaxnihM",
  "key26": "5QKpsmwYzY1f4pmMYwfFbQLzbYDSNdbyRMSs4jWuRKn66Nmxn9zd3PSrjUNe4bBXLq7ZAXkXi3K7uoB3vyJtWzCi",
  "key27": "3MdWuTaNHgbEM2inraqE3PJDQ341niZbeta34qPoiuEEsenoyTgfruQKWovoeEJgPpVz7zJQAum7UXcUE51DmEPD",
  "key28": "52Ern2DJm3HcYsZuoXhAQT64vsSpJeUoG6CxwAgDN6U3KjsDVTPmvymXJoNLYezAaZL9Ebz2djVLE2RiXQeHAuQa",
  "key29": "4J7Ym4ZXqmHJ57CsMgExRazFrUAPkpQXaQZaW2VsWKwmNvbrZDgRCd5YdMUdxTwmkXFaf7geDqtsD4JbSHykyvJ4",
  "key30": "23CQjtofXMrYttUetbN3PoCfRTUEsnZrEQZ5xXtgt74d21rfWeuYJ6qADf4ox7mktL2cVB1PvVhcMfp3ymzcM7qu",
  "key31": "3UBFMwvKjsPQgzmBKzyNkYs6T2z9sYZCpzYpHJ4i3rYPGBBhwQ5BsLZXfCyRAmYPGYCdoXbmMzSTmFXUDQtafBJW",
  "key32": "4XeBGSqUTvxbVjzrk46Yg7mDJzdQkmvtxxv55zJL3yfsdbDEq31E8HkotGLnaSRK849vtVxZhMcPj6fb5Nitzg5s",
  "key33": "LeP4NFTwuF1m5LAV7XaiCkf1ZXXN17eWC8MtN9RHFv6B7g5xnQuME3t8wu2eSzn8NFt7qfv59Lfx7qmBYoNg9wz",
  "key34": "4rEZuxeVXzVX5z478uiTdRAM89merbX2yowRzHwQ7prtJVXp1LsJ4xJBn8D4NcjsjD1JQarKEkz3ov6mob6LYjnR",
  "key35": "VGGJMzUVxu44Cm8UUWtP72kL4FjGZU1MRbMmde2DMc7wXuKXq5FuuNvSaETMDpeuBkw4VcyiP2vCCHGJ3NyzZKb",
  "key36": "R74T3gcf1UUREg161WzQvmM3VZioxnzqvupRDxMqyGRB3c3oYAUhH9GYMi1gz4ST9qp5z14fZ1qWVzmdGu8juS8"
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
