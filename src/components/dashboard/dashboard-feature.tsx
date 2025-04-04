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
    "2ntBYfYiyz26GMskWtSEupMwSVyCMDqfAFryZSKMEsNGu2kU48LLjGLQUJtpTmfM2Ax5JAgvimFjCRq1dE7LjVVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TfMwAYF2vnyEEALiawt6FyLRcnMuPGekE6RBMmRLpKv2QXKTeoJbYJkFMd1ygHiNJix77QAtoRamDCXG9UZaJpi",
  "key1": "2yGcVUFtgPZzkDQaEjeX4hwNfWtQnHuivrFDiUkvMXnGX3PuFh5JjZWLmiyeLbut12N7youThs1mBf5Z9EsCno1o",
  "key2": "3hLj6H8MZNdXZStgXatQYbwsSUfrD2zk1yoarJj6wyYbPBL3DiiErRfx4BN24SYrtvwUzvxUnyRcAtaS5G4aheHY",
  "key3": "2xjfiZpmZayLsPoWFN2MrFzS43Ut6pBo98jUa93Uaqx1KTa9j5p2KC4m2jk1siDCMtcUaLS6LKccCwTagSj3ebhQ",
  "key4": "54o7d414G4XwHzJb529WQ971u7VY52Mh15GvP5tAr4KceXSyvGaz6vT9Mpc2FXWeV4h9SGCSnz2wTkrVbGzdzbxs",
  "key5": "sWpMtApk44wutodavRYA3GaHxTD25G7shpM9QxVDx4TUCpZWXvohrGpz3YHzrbscqAHFioUQF3ScDBk3JnHC3hJ",
  "key6": "4AssZQD5DZw9gb8EGwf7Z1jmk3s382KtgNvhbwnBznmVqzojMpSa5PoQkzZhVBd5SsLpbPie6r9a5gnhzBpe18M7",
  "key7": "KsQSDAPPsM2nAwbc4enA97LnFcJMiJJVKqaAyJ3FTHo2YThsizSuQDggmMwQoenBGhssNtF8Ma52tb76jWEU3h2",
  "key8": "2NgaSbK5C7mij2i9ezvS1etBDUZFwWW7VRxBLaaC7q3WqdSJpCkuKpbBKJPfwXNAcsicBLRD6J11T4K4KKeiqUWY",
  "key9": "2GUfZ8jiYGZZ5W1ej9BYHJbHekZ7mvEZpRbXeV3YxFbT18SizDWaW1xydB5hkMPkkmYe8u7GL2HPbSMLD9J6fzLo",
  "key10": "2jDA7gDD34Kj34jdWEyfkDCWQ72erB9m536JEadTusrSpsAGqraN4JgnMEEHkN8RaByXfsxd1FLxYujtEQkv7dfN",
  "key11": "34vSmyMo7dHUibF3ij7gz52G61g2Y31XmoUE655jLWmJuRXev5aLwYNacWCCkQRVWsHQhraJcN7H7W5i45SWfs3H",
  "key12": "2Z7SmRL1vGWYVuQ9Ue7xyqJMwkoSzXkEhENHQx5oTviiTMCtPGBUfVVr5rMXLhCsyXV1PwUVYSpKi7BsJh2X5d3x",
  "key13": "5GTDxZfr91StpybDGheYxDv6FcFUMrQpTxBcjgwWKM9efyC9GehLMkrrYWLehwqUu99epopjghuiPi2hmp2gXkXJ",
  "key14": "4Nj1Va6xjNyZ4CA4SYpcUND7sMRwkw3RsYbWV5e4rSQ3qFxYmVe8MXhM91kZv7N31RLozQjNb7ENijdhS3MAuoMJ",
  "key15": "5yHAvgxQ9zERhgkqEbspoG5wLrvSfrjcjiZzLszfFNjb8eFNCRZZfwm6q4YERM1m8v52T3YNWNQ763S4XYJRfmoy",
  "key16": "3oijTGsEoKHeMU41DmxFUNho9dpxJ1aqs7mtcSQ5M3sQ2q7rLAMFVqKi4tVf8npLB3JSHi8hTT1qQFbPCfZSGxzW",
  "key17": "3bXxitiS9XF3JiKYsNr6srnNggZuMxie1dZSFNBQcMRF9gSJG5z8v7boSRZ5avQPPsre1o1JDLEGP4vn2paj2hSA",
  "key18": "3athyTJrsPpSDSePMXas6NA66hhddZYX5dqr6fKT4Eqsm3x2noDmyx2VNFJuGSLes9yPM9w8eUJKvPG6nZbrLZFX",
  "key19": "5CpB2J3nP5WPTKn94AmYrrWAqvqYaUniDmwU5RYrpWHgZaqRZf97Lf5pxkjTxFmCY3d5XSkkFUEVz2sQew9teG7",
  "key20": "4HQhao1Mqxm36A4SzjJCSAxAe2XFpSQfxGBRfmaxMiSHEg31QVfYbaZFNkbJKaLP1mznPsNWvPr3iL3yg7pLThsg",
  "key21": "61uwbaUBEkKjwMR8HFdbJZUAHzkbZTdgBNdRqf5FRV3g6LNbajzwLAeydUVDBz776fYXqED7Xe88ag8FGHBP9PUu",
  "key22": "4Y8eYrcSd97Fd9mekA8EMpJ7TjqAmNWKzK1cefqFsgCWoGtYQ9wmT81zC5MWZTHTtsrgyE1KAzX1pBRXZ5b1MJWi",
  "key23": "4DFaQM4gQ4Eenq8Sqx1n3e1MEao8Jsmt1hubvHUeNVjUUf6vPL37D7Bd1N1kawCqgRdKN21MM88NNkBfKdPMsfdW",
  "key24": "2GHD3SFbrTZtkHQ1SPX8UA8ioSuHQUifbquftE4CDpahKWx97xVzhmvaYSJyHmfzf84gzP9ZXYXfodWzvtaakgZx",
  "key25": "4oZWDFgR2RjxaBBnqGVRLG8pmw7L8S5T5TQu7QGwmYWL9VmpXsHRuqxjCMujLVQxQd6CBDUncPbbNfkNBva4v4jy",
  "key26": "5uK7LGowV3adq1hoiJHaPyjsoBPMH1z1bA7WxH2o8V7sXeaQ4noNbpHbLuFxEAf852mRca91XVGhte8SQvuUsgKt",
  "key27": "63aXxG6zbeRZrmSiThjFuVVnxXvL5LVo8fBmupLcXGfXCPiwXjWquhuPPD4k8XyvuVdMBHYwrRb1vPm1siK6ncae",
  "key28": "5j9hQXTK74uJNW7BrtdUDCCMNkL5JbvmpLu32AWnwkF5xdHMMNeH4swAXPtNTybUhxriHUqf73jCYUWJBWXPVdt5",
  "key29": "2ZAws86UVXaD9fcWnKxAdkcWsgZBvkL35r5Bp3fcv5GYtE3xxsqkG6RuZPLUFXRVW85VsrjwJrhVmoDTADmURkEL",
  "key30": "3fZtHzMAASKN5Xsp7FWsHk5Zt9JgRAGA3tQpTDQmfeJkY52f7Bt4ewMbMj1bGxnpNKsPov8RjX3KJezDKa7b4CD4",
  "key31": "vvAdMq4CHoVVfSND9YzbWzEbZNtz1rE3Jq7HUbDDhDmWvfvdF6ebp6ytX1D5kPCVCszLGEQQy2b1XrrrRYCpAt4",
  "key32": "4w813NUX3dJ62Uxp9Bz2FCFEx1RhBs883MbyBmveYr8hZccjN1QjzPS4dGs81LsHiykz81iQB3Q8gKRhg22nUMC3",
  "key33": "4G5rXtjjW1r3gCAa16X47MbjaFgqjFmhmjm8NwvHfkiuSjrDo2C1qfxKJrpRbSeuFnbYaR5S6p4zt5dDTo4j5mpj",
  "key34": "5tHCw5nGLgSehhDE57e6kyajUjB6n5hSuad8kB5W7XcwJNc5ouxh5uFNFtuuLjAD7DRak9HShA5FHW448EiddVLV",
  "key35": "3SKY1D7RNGFvBwW3WBoDweFWNc2ytoJ56kmaiMHb3wACXJN6KKKsUbHYsRmHKw2SrBoNVkfmqWzRAbt4yavj9Kop"
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
