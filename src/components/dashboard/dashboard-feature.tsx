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
    "5WJtJ5njuBkr4wa2deFvkKKbAn3Dt2nxsnpPj2Pm2KFBva8hHMjRgExq6tiF5dA6CJQk3TbxmRUX7h1rev9SJZhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uy9P6rbaGoou6xBGeTxNP3GoJ4zmKZ8qB8xePYLsXHdUJMkbCdampAfDcvnVHEcxwe3QKPi257ZJVgCCWBgwxMP",
  "key1": "2CKCHRfJsSgaAWJjajtNUq8TCYgukxqoUjGMZe6fDEZqAXp1bG9EZnvZx8QfEx1LhUUat65ARuSotp3VWqTCTH9z",
  "key2": "5erYKdYcZqomtH38GvVBc9Xkm2jNL8JKB59yWshT6N9exS9hxb4jyuhFnzSfHwKCuRbcAtxvM4g28TXuokMiar6g",
  "key3": "3XV8MySCxH86PcDh9vkWBkAu1T1bkUMLkDywDHfZTftFLKKnLDhAWb2KcL6JCY3GVr9rmg4sa943jQm7o7prCySZ",
  "key4": "QZaJoqkmG2ZZMtGPA4sy9PWNYwX2UabtDqB5bBpiAGcFUhigqhAmSKpiiCZissoW9m3pQQhcfmbZT3hrjodXwMH",
  "key5": "3T1rVUho8c7Ffw1ZAD6urSrui6U2G3x5H9u9jPmVwPSLvmvMV8C5QU9d8BoUqBrmHekbtvXj86zkLuDPZZTaSrq8",
  "key6": "4ssLpWkoHTJozRCUXPXew6zHztnpwduATz3CVc8q3FgN6HNtBYVC9KQDiRmSKMnBiW7hq2cU27576iB84rCoDdPk",
  "key7": "5TCgbVH2fGELWEZHCAszim5KRgfGxJ3oyyZArbwWTn6SqkNwtPZBcmCo47F2JxdXFBoxXR6zQqN6zzWJ8uEzNomK",
  "key8": "7fPFi6iMbzCssmPKqknwx7dbUWpvTNszjDAhVrUfmi1xHC87SQw5bsYUrQ7yfYVPBF64dmqyq4tbMFmCjkwjDwv",
  "key9": "xEs2yEJo1jSim36z1AeFcE68nqFJSRew8Wop9ypCByFsq2jP47kH7NxpT8Y1h1KpMgQk32fsY5SUrvs6EYEtPPi",
  "key10": "4pn3YSQ349vUiDGWeUj3aR6VDb6u1imwXMGfdLzDJ2ErvAjeVyKSV5HAVwqy6Z5vs692Vh2j1o2eDjQdCMTBEm3",
  "key11": "2kT6beuW3Jt1v7utbG9HtJAaxNFVNtLij9rCddvyqW2LiVK57DXjP8vTEQDVYf5PGVB6PPuj3Be8vih9NkxTqaEi",
  "key12": "4itWqr6thNC7Jcxv2xVgBc4uQN9UJxcSFpCURXgJHDCFNkrqpuCj2nnHw7sBDYoTtNv4knbPPJMAvp2RM9nsqdM7",
  "key13": "Aoom284VVzixURsq4RBKjQGJo8BhqzfN3myVrHvgQFywTuNzsxVau9EQunPQdVNWWHnF5nmhEBWyCEEKhXrRBCL",
  "key14": "rpK84ephg8WDtrzLYqUb1oUD4T4jMWMAzoQWTTUwxEod7Sjr312idwrvBmqinMF1ezQn5PGd8P5igkhv48vrkw1",
  "key15": "2Zr5b3VXP4mMSNZfF8xMVBzvKKXP1Mar5HsbNBqRMUq82vYs31s8Ko8mnp5rBd98nhvY8TcK4r6MhRF3jHPJFEbC",
  "key16": "4VRJcjVUXY4MgPYbxVY6uFsNMdq23Cebbm4ddGnLVx8dQqGyPpcvJ34ZdUKeh8g43e62sx3Yzm33mux3QaQFhKCN",
  "key17": "4uNzxkqttG8tQtdYzoEKEpXHCQ5QpjHtDFAxNn4oHLSF6mfZbm3KqC7k7nNjEzK49qLecA34XA8nsnQQ84VnhBUJ",
  "key18": "4VtTBGm754YGNWuo3UeuNhL9p9KJKs4Qk7dLvnMkYXyeNShVeNU72RMDYqMY1SjmdRXe4m84skKt6SjdX4k48cm",
  "key19": "ebWXAcjhMBe3cJ4HR4miaLmzLZ4SUjV9KXmTkY2FvVcpi2PhQpecXdK9L8bYCnEWaPyrYDsFCwkDEjMpb9LmqC8",
  "key20": "4BDHR6FTPczPqhJVWPWagXbQ6BRVtagUMcvPwJL99X6FRdBPu4B7HEdUYCucwQKGHdCVpMm4ZonjQumdngk7GdVx",
  "key21": "5yTn11RRfTNgasaK1ECygLTZz6xsgxmYjfnXgddjoXUF9cNh6KMixhJTBrdcnqtfjkaV3q3aTNjaVWv1AMZ1gNWp",
  "key22": "tA2NUowNFCAu4wydxinxXyoE3oxvtJYE7ASWK3tGgLTmUvkZJg2zcNykyRziSje99Z9EPs9c5MR8mDbm8ERV1y5",
  "key23": "2eP2YnLfyzXVM7Mw93tPBt9HUfbD8hTeKRcsq7kwg3TWhecEU7tVznm4cYe9o9eJK8Ynf6c7bX7eVvHKnM5MfM9z",
  "key24": "4yohbGqjiduNrLpsudvizRoatChf8KqRgTDHofocE6PCjDffGe9QzogdMKqqv6wc4A5Zq6PJq7YrAVRhhq5DD3up",
  "key25": "7nFE5MqkzDbtDL2ABsAttANvu74aZhdRmxdjDQMpGtbot1gi7Rz5qu6aHfQy3ArVfbqqcRTnWHV1eC4QqFDV2Ba",
  "key26": "3ysdRb5Zxpqe8JecfRBp1RnJvApgdvaGr3coCStPDyRrb4apZ1hPWie1hFchEshwFvrnd2q1kPb5j7iMqbiuNzLj",
  "key27": "3wBq8jQzACDs5SWVZykAFJuWBtHAXkntPmJkYaoDAaNayACGZNBWdGxMjuX2BHyD2QweVaNRjoDUHfgnwNXjKp4F",
  "key28": "4pEchN1eajKBzFAHptqQyo5L9LnDGkj7qHGoWbLVz6qmfY18ttneipJ5REePgAZPG3Uhmga1F42mGDcaaUkt4xqz",
  "key29": "3MrArPxVfhGqgSZN7RnJpZ24HDjkxVQ9Z5BhJxULif9gPoBDfnDYywsAANGVhQdFsfwaEa6MmDmrYWPMtPT51ZVJ",
  "key30": "2by7PCpKFeRJm3QCq13NHvFZWgTjzfrJ7VBaznCNdJN1FbczMb7b7htoQ44dDrgEseP2xwvZNRSM7Sx4Y5MaPGB1",
  "key31": "4LtwJXPwyUiUnKrd3DcqmRndW4xJSNdmf6CRhRft4jRK4AVnN5qpV79GWhweF7FS1MXrcxwZjLokRqoLYKLnoPv9",
  "key32": "5S4g6wQUgKSfsmtR1NToRfKoL4ciyXCUxyPghVNTXsZHZKAuXiRgQz87LXHPKzfpbHENkQEp8bnT5JgsMpetogTn",
  "key33": "2cwevhoUkgX4rR56fZP3HAgVVe2xXSSA6RM2Bjy65NTadUMac9Q5fL1HnwMGgK5eJcDDiAK8qxk2XJvpDvj9Uqn6",
  "key34": "MBZoGGSgi8mu1gHGF161GXNr6mtKFigdUK8rbXoHzTG7KuXCG7TPnJFqKWqD6PFFk29SBhMvyaikVWi9bQMY659"
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
