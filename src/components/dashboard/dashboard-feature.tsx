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
    "3F8QP3RNkLq55fP7PVSfiRxG6CgUMEHhcfo4jWdRqfKZ4h9Zu58vQ2bB4mexwrdNTVMuyqZR9GB1cJ1ayj9qrj69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7MDuYmjXz2RGdYvRXLpuCi5RwciQmWTdXuipcxNctKoZKKPEwXokTSG5HiwsrYk4u6KUvZs5PsGJkX59Fcb9fh",
  "key1": "QAgrsLrzSgn9T8N9He8c8wqVqCS1aezEZtkdbKwxotC7YEgtxA8da1uqoeof9cfBJLrYNXHbuKz2c8KNCFrKEwM",
  "key2": "2gghdkNWtcoVnW6sLVrVVM3v5NpE8vUb6sy7SdRNEwZ5a9SomFBv1R8YHMLEcVeXyjqDfmXuY2b9F46S3PMUJwzS",
  "key3": "3j27UdFJ7jxWkR66f3s5HHfoBq3WVCLYPZUy9wWhhMi42J2b8PNudvwEJo3ivWLeT8LcDCZSeVrgCM2m7eC9bUJz",
  "key4": "4s7GSZmYoX8tues1PpCaSMdd6p1Q71TCLWKcWaJkTVfrtr4owBmxEPnpFiURdRsYJgCmNnMe6oYyzrMBHVfjvauR",
  "key5": "4r8au8o41vfuhhha5Q8ejJvWKfb47pBaKhRejo2myvUjnjGXwYtPyuqy9vH4MZ4eUwPyycnUR8aMxUmotQtSFg6s",
  "key6": "3gKgwZTTmswBKYSnq6eedU1RxZ5oTFvYcLShXMa3WJL3vfornVpp4gjmY7HkZvhivLXKjVsPWWtyynC59MYNDLwS",
  "key7": "4mJfRx2ancuisVdgZtHTL4c84NNxAS3fPrmjMmGhERKRMxqGuVmCfKPN36Uhd8YPLpxCkMQR52d7zhYoQvyRtccJ",
  "key8": "3ADGocyLMtAbQsqG6qSEiufhdb72ax9QzvAazuPKqxfBfBa4pYKq9Ynw5bdfA1P9N52N7jfAMSkQX171g6FuxNej",
  "key9": "5eSk2a7e8FKynookniNxF3YVXvSwydMiHtSDozvxS8jEKioyWCAjKJFsuZvrJzfkb4h6MGnsAhbFmMSCnu9yHMm4",
  "key10": "4uGp1hh6BuMZDteQHzexJ7XJwC9gG165UFwQpeh7A8H3T1eHHSmGj4mWTK8GxPntGBWBGsLCoYNZzi4r395EEW8x",
  "key11": "VBuZMpbaQ3JMbaSbwUVS2wRA9YaBxunNk8pgn2BL9NvQWWy2e9UCwzPdjLFjyGNmemRV8xfNySvnA2pT1WfNSM6",
  "key12": "4xfzjjzSa2UJ4A6nJjeEqn87QsbtEAgvNkgweuTpNQHAqcHVYoB5ho7TTBjWvih17EJcJyv559X8xUHaJCKCwzFN",
  "key13": "33mzsT3FcHRS1xPUwn9j8jyQhL1VBK3We7sWbir5sUAmFpRsHRjuGHYnDGDwgg7nDtM4vVn7NTRBdvb9YW3iYD1",
  "key14": "5wPt9JWpqybVi3oLe1C3rVfpszWmKqcxZUuW3oJCFUoc1pmPBJz34JH41rHLK7yJbHY3SHDDcFRKB7JEaffabFhf",
  "key15": "4Ppq2V3ym3TPqwERXhXfsuTT12k2ZQLqHh5yDbtm9pYeJJro9Sjazjr5w4LbBtZHaYqwG1KF2C4cvGx4WEBYHeta",
  "key16": "EDMSv35n6SFEZYyeKKjT9S8U3TjVGWauvpYktCy8o6dphrt4UT5MYn94r9LQVTHRwg4RKx9pWrg61t4MjupfNzz",
  "key17": "5isdY49xSTYmVE6VJaARrQo2ChNEj4uyvtaUCdasLAJ1mKZ6ifc1836XkiJAD9BPqbJmUHNYVCndn6NqPsvN2yiq",
  "key18": "3nftJzsE5nCWzQRxPUNpN2fW6S1vY6jqTk2ymroYppmnUCWZ1HKGanD1R4QPDVBNpS7Fyh8b9sALh7QoHqHVaPK5",
  "key19": "2eJd65va5Dw1BLhUuQcPft1VG7tXXetznhi1SgJ7RXasdK9Mfd8y8MJk3VKRTbbzg6wQfPUkxRoQaDVUBXxBtZug",
  "key20": "283dR3ega4WKXFEi9m4DFyERBb39NpXbRFqGTpstFeN2Cz8KwnruQkt3KkyqySmfQtZvojF4KATCBSRP3bF2L2CD",
  "key21": "d6vGK7cav7MzHEuqbh8LCWPNHbGURAAxxDzdBmQqew67ASaSg6Dex3FHFsdMjzsitUuHeKg31LjHNTN1zJqjTay",
  "key22": "66kbc1tSXE9eYotBAV8ct5uyj7hzztjrWvDsArPLiHBnVbtYM4PMG1VkFWXA8QFCu69evJnJUxva7bMe12HHVfqD",
  "key23": "2HbwePLjUXTdGNbHFuZSCTmfdUodgK8qVr8zhJXLCWarDUZxHepYxD1WbXZ5x6VH5DQ1aREwNEpLpGayGACDfMTm",
  "key24": "63zh7Dqk3TfF6N63Eei132QuatN8rUqnxUYiY1MUeje4qpkvUD4BWSSgSWo5gTJoVBe2tb7UNXQsTD16Ghae8jaY",
  "key25": "2uqYFpQakMBjm9FMGmpejij2j77ZQoBVLatiJJeVCbAf45iYtpZj3avsSoGWQ6h1Hzm3PwnXy1Xq3e9NYjk2dADE",
  "key26": "f2iVKQacnTqj46i7zKstN4Z8DaDaBTfk6VcNXJS76NZbaFX9QdJmkFqcyw3dtecvMjkrNzvRXVrgrC1PPZ5dokT",
  "key27": "i1h4A9eZb29aY1XuqUwUfNobN5PTBEGmNS9KXpnjfZBo2Ua5MEJN1jfvHm7CEzR4e2nHTERWHjF4sh8KWgCQ93V",
  "key28": "5yMnMXBxqcytJ2BcD1t4Jj5V8R5uVZSyma9VPyPx3vexkbH8Kb5eZLXVSF6XfWDEDZ2ynzEY3guCwq34HLt7ZoTe",
  "key29": "4mH1jk2amzGbMXERiwSCpDwpQaU5QNa2oA2yKwzEkfb49nkTon4KLh9WxRc79NS6kJ6ZYsKFPc9hzoVBGChg7NHB",
  "key30": "3XtxRk5XdTRUAW2vZnrk2QaB4FuuhpMNDpKbcCmrzb5eqr3NRB5HuVCp6PX74ikvgNzJjms8d93or8gHbH9uvTf",
  "key31": "2MMViuRyvgEuHMzpVYtXigrrZ3qyJR673EzTMJ7xH62GiLdgKYbXpphjK47XWtt2SZK5epBRYxgJKVmFD9VRiHnZ"
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
