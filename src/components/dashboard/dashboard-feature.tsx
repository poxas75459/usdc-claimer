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
    "4nKWBQhF5i1d1kSwhBpW4bHbbUJMVd7XZ72hwcJkXUxtmARukiVghty4LRYvCjSLq9BzSHgKgLT19jtEyjQdbyqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kBuFoetEpLXBATRcWDPM6EPydtHhUr6XHedEMZ6fwRWhHtrQfbpmzojq5RSk9KQSzDLCBTqD18t6BLgq5gFDek",
  "key1": "D2uWuHQbVJbPiG6XCttFndeTEd7uwLNrMDXSwhjuip5iptbgHHQQAdY1yBp3mGJNDqUKSV8ejkfC8UTWws81P5z",
  "key2": "YZBmvchg6MqZt9tW6shzd71wc4YvKBRcTg62XuaUz4WRtF7KyFE9YrAsMHk8F9g5bPuhJdeUxQgTyDkGc9BFyUF",
  "key3": "4yCm5pkgy3DxrkgRaJ41HeJ4YPtNNz5mWk3ABoxoWEKrsT94uvtxxF12PUJgNHCH53UMMdKQsVbVpZ34cZ7xwdXg",
  "key4": "5x1pNZKQ9kq8yxUezmqPCuv25NQefZ8HrwYNPbGZ9F2uq5EXvJoXGVFPtaRMqubjBeUu5AfSutUPXc9Y3bWNqQQ6",
  "key5": "56pBbEHHz7nWGx9xqvdjS4zovDLVjyZSosEnCTBfQCNcnaNQGYsJNvxFAr3KaCPd9WQCzR2dRqwqUBEPBhS3tixh",
  "key6": "hGPQsqW6AiyP7RUTo8j4QKsiGjQe5M1rEygZY23x1HLzsQLWEaoSagw4ap6ZkVMJjwLjn1nyGqrdaf1PzdaV4DM",
  "key7": "2xo5V7G3HEP8gFc2FtbgAcDwpVydwwZA7u9WYHux7aQQEyXRC4LqJAcdw3KqQcmqJNLQbe4cdyk1Q85e2DgsviBC",
  "key8": "32iPXymi6e5s2GGHCqtojzLnBfSE2QfHD7ua6pSjnUDtLCDeXAXf13AN2sEWBppnZQSyGGwdgxx8gfrY32LgEjme",
  "key9": "4xLfThDwtpkNRvo5gMYa5E65s7x3YyJtWJpmzDYrniVTowqbcQPMhRYj7WLpvi2cteJpGfqhA7vi9mrSqdjtKqFW",
  "key10": "5k397JbwgtM9CS3F3944jfCxk4orTrjEwavsUXWEGz8uEpDeS7f87HwL8W4UxjiACtHdLrtBoszVo4qRn7Pkb639",
  "key11": "3cfYZdSJHyo1v3acpxd7NxVpKHiQhEzUfTHDv58DPM5n59mCu5JJ2GCeRKdB76CKRzKpsj8Jbu5wU7MB6BoisTm6",
  "key12": "5UqGSMuW8E1M25cPbtHh44Q223iqJjizR2WBTTbdrtnKb6rKRWCM96kePVvtQHLzHCuABfy2g3NSy6UQB9CxV9Ym",
  "key13": "2NbRx4ijKeDtRXmWChx2vpyJnw3qGjAoSp7wY4XEvezdN8FTneE927vLbAuRQPhrqSdcYtvMfAGWagZrYxqusQgt",
  "key14": "QKUbCr7XcEvUAezfUmoi9k2XpVU9aptrgHCVz81yrGxW3dDGC2GdozRHvx3AnzJVPX5iovGS4SZEV2EfFn4jX1Q",
  "key15": "5KRgBerVDfTtuXsQgd9e2jah1r3yGZmbu5YN47FG4sVR5ZQuBRGKCpnD8bd4YA9HSu6xQPkejFiQc4dQdYmRdQgU",
  "key16": "5Dc3jgHYZEU36y3Fv92KGxCcXt25RBpBxms8Qp2Jr1BppV6cHegNeCip6ZawmGTPSG38RzVKuwyohDE4qgrNNQTf",
  "key17": "xGKnznJSqit6rY6K29iAs36yUDoYDNRXz1jYDjR1UCVUeeefucWyhSYD89CSJ9EXk6F7huJSWhBRgf8vib7bGYY",
  "key18": "3qBwoENxZJe8UYoHFy7nfPQ8L7zqH6Qgbk4upDes91R6QJ5cV3uEa1Rw1Gxh15EhtmkXsNpV7QwvgkTr3dyLyU4o",
  "key19": "pMoghCL5RdGmCVqNQd5tZJt5wFD2cSi79i19a13iB9AyADd1i7ptPy3Yjmxk6g27WdeNZt5NSPiNuSZUTRu5kE6",
  "key20": "4h5dzgjbUtuA8Wp2CYpE5kJbrkMYt2H2DsCGevHwfLh9oGNJ9cqUwCaLcun5v4qCGZF2QtC1uSixjVHWHh9BPzhB",
  "key21": "4Srbd3M3ksgx1vQ75YuFqYD2HRXWCbSPVqUHgNrwSD4qqq3oUiKVFcDdpMDgM88nAmQHuTpfKr6jRahoBV4ChNju",
  "key22": "58LCjyPqFzaKCd1EMuWXpGWcZ2oQLhe4D4SsY7bqGg7NscSJHXxCC6CQUGmotRQrDjZqcQSHubj6d8QbSPDkQQPn",
  "key23": "2mnWU62sqe61pLvEDU4VQuhJJSvFYrgjJQvPhohJbRtLjk2btzQTYbfg4Mz1dFYQYPW1X7ktdbCkpE3YL3jJ1qZe",
  "key24": "4zGZ4QWmPs3NDf1rbeJWmxEA3idSEj9xRPDQSAPqxxqcb8TkTZwKXHfWcjvrz2qPudCD58xWUQBd28fLtTRjnPVW",
  "key25": "65HRuSNSwbgzS9P9uYzdVEszqnYxicBshEdqt5ishkGxegHTam7tybecaJtL1fLRTcRVVkcAkxYyzb5aktE2whf4",
  "key26": "k2ekbxYNBBb63fstyY2TmEmdwHny4UNedLfMponrNY1XqexEo21CCtZqAijLLBytdy55GRQmZNce5tJ7sgjjSD3",
  "key27": "49JUqnLaSDWPK68fiexAVoAC9nZC8uLoTG2MFkBPj9yF5oJTqjr8pDK9ExHJ8HKYzDy1xun3ZYNV66tUUqqv3f9i",
  "key28": "Lj6oxaFLL6od4uTdQT8JfeKGpP2ni33mXAGQqLNXcNg7Pv15tXLLidQ6KMV3pomNmXQ2HB2LGkNqVmDPsHWN3g1",
  "key29": "2onMbPZjSoFmPpPH7KazdKuUSQKz6AGBnk1ygqYzvi9X4AaGCxdCqVz7v1NRvmVMxKU1kNJoSk1LzGcGHbCc6rbr",
  "key30": "3KtziBWnohnL1wibpEqixwGtZdoWzFKxpiFTck327d3wSK28QCJgMRMDwnPoKSmPGyz5D1DokiqDmvWtVFBAruDm",
  "key31": "2uLDDc3VZUJwtyNMG9Y82mRrYw3s7rjk61CYmnBRJfk5BUgCndfg6UqcskAgjhFvVntwRWRJiovsqh5CfiydFZNC",
  "key32": "4147VAhBgwzSUMZwn5z1RRgxThz4VZS39Th2brHsjmhNg525FBt3mQrU4GmkQeRKdL5G1PUy1cZyxwbSPUkhS6BC",
  "key33": "5cKnt8JWmPQoiBg86hKtMLZ8ktB1m6Xwe5TsRXWheaUFZYTN65r1NxQAgyz8X8sMq3deMCgvXa3oDKxEgsEWfAEb",
  "key34": "3e9dQ3bZbnjsT9bqtDEP8RR2DSW9LqHMM3Ahu9ucpF4CUUnJdvvNXYydTn2fE1GLFomWXp9EAYKxx4wE25uggtc3",
  "key35": "mtH73SVicK7YmSc1Y99CpNq9dzRA3AmJpZ6G317KR6GLow3UtueMKLzSotFLD5Zu8p8mKr9sG8ZfJjkxPo4AGHj"
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
