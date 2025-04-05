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
    "3Z2R2885VwwakRYtDm6uzALwUvYcXojpgetJEG4ZcaPEbrh88aWNFMccDfEUA5v2DmeaG566VhnCe8MrjvNAzv7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqkF6vvTMoBV846C6aMAPoh9wydRbU21Lo7dqeeCYdAm5SNhf8tMesidK6STYCzJjJxTwjxZrVRaVVn4QSMK2i5",
  "key1": "pyzASAN4T3aMADGcHE6L8Lqqs9JgYBYMZr9Uc6gh5WgQDvqXSfUzcfZ7SVxMfR9H92UP4FT3q65hMhaB7KN1XnF",
  "key2": "4P87duBKv2pcPYsA6ncKcpzpiZuaEDw8b1XwNKdkzMnHMh6WL2Rgu1NKJUGTW4RA7cKQRdE6mqxowLc3CFhWcNFU",
  "key3": "4yqmBWgV4FDb2Bdq5k7w4ykHiu4V1D7yJMpjfaxBphVFt8D9vQj7iz5BpiH6dZDPHo9MSCTfKk1BVe1BzyQhLQTg",
  "key4": "2CtkEaPe7g36uaavCkdSjajG9M1AYZPWdovJuMckQhZTF97WVPQzkXYJP3LarsCG5SUBrExDQ4PmHFhMVdwX1LHk",
  "key5": "5YxaujXr7TTyFzoHxrkMWmBNBh7Gb6RgibFoWf96x2zVz8XHrwwqt9uykjpydyLpsQU7gWa8bFuRTcwuyhmJTw7E",
  "key6": "eV48V9ySizMSDjKCwoc8pgT1JXSPmoxs8pmLDMYJHs9azKnFLfk3VKLCtNqax1ySxiAhMgD884iN9a3Hmv2qjLt",
  "key7": "3CBMdG17sLkoSG9i8fRP3ShAamq8dkh7ACAptFJn5sbxePBXsQNmoXEPFujKtYQ1MRM4f6mv4jezXv2gpDsgptr8",
  "key8": "5R5xHYCfQLxJ2MkCxWtiHAZZKiy8Gvhz1zPKwHZ16v5qEv6GEfyYUapVVP6Xk5bmGtCGhtLDdsY6ftxmSvhg95Bf",
  "key9": "5rma8F2EpzppFrJtkDpviqQtp4pAGJkfE5eTmtWnCkhiB9ggNPepQAnTzVx9Q72V5wrxgknPHhJ5gWbpT7mKgzVB",
  "key10": "3KtHwYtjLcxNqsse25jbz2NV8rVbePCdzPbzC2uJmHfvR35WJF7Brki9RCM4DMtbJzT67LXbfwkZtNe9grTZKTQW",
  "key11": "JpMxoxtGHKUdpdqovdCi6eCUirkX764eNVsAF5o3tcQsGp6WF7QZUsBvu9dZwgtHLoGqxn5xUDgodQi5ZsUk5zo",
  "key12": "TN6euBHxkydFmNFKAinZNUB1EU2JPAjq1b36sFxUCRXVHMmyfuo7zedhFgYbj24Z686PQgppEh5BjdzWLmrfcH1",
  "key13": "5DDyV2yTWuA81SR5QYBa9b7di3WxQfXfFGLcX8x2RUp7Q4E9KmT5trbekrHHpku6rrME9UddJPtBmABgnxPbLVzj",
  "key14": "3QGo72tEqCE1GaxmzipmVm6gNtzBvWinpQS9wuKVi1uMgpdr7ngerLAp2VoQxSfjWGe89RkcefzPN1YGqE82JNuB",
  "key15": "2FjFppbQASZnmfu5cKG6VkLXgqGp5jHqhHwxfFidu85dL2wBzyUx68Kesq27sj4TkCzf6XDfHMzT2pRsNgwwSyBp",
  "key16": "3pNDJPGQH1FisKzK4qX6jtsHrms7Rvy2bEFQtfsSXexbM1rQoMLec5WNQ2nd4UEVXBBag9jJrj6bbbWaGMJMvYQH",
  "key17": "GXJezUMsCKKSk8Z6erMc2FJAXwafag2QQGHJBh4QsbLPzht8xwjbZtofCTdq5SPf5odCVHQxQ1UE6YSAB4h5b7h",
  "key18": "2G6yU4CUjz5R3wDnZajoTvE4Rotjh7k1hAzh3zszosThbWvLjTpyKTFy99XqCZtXszhitMhftN6mCnFD11ivz8E8",
  "key19": "gyUK54m9mVVGLQRhBhGZMqL7ALdPczp8FzcaoZN8Dq8hSp2kqZZKnk8pz34pwVNS4WLWAQHaUJPAca2kAgUZ1LN",
  "key20": "5bMPJKwCkzdVYwCbEJpPt7EQ8qR31z8X9YoFm4MZrGPUTvo5QuPTEAiUitBMSbnd8C1JDMTUyLBpeg3FeX9JQQsP",
  "key21": "5uLbFRuUHdjZCArMMv6pLZGQJ8kmX2ipK5sQPjaXXBQ2KHsdKnQnmcp3VfDZvGTeFxkEF68soc1jFMpnMtiHGUyu",
  "key22": "2gA3tkNfC9BXNCcLiewCPmv3zUpoXxJAYuRZfvJTp9WrHBECvemtwjPDGGDeEFemSxLBQeyDgrwGsAbmpvoFEzeA",
  "key23": "54mtZFE1ZmXq2fENf2K4uMXNWx9KAKZSabLDT99GDEzr6vb6zwU7nRGtVpAuntnTUJr4JSB4Ermgk7cb4LSpf3ap",
  "key24": "5CXn5X6LDKqkf8nMYqPYzxU3dRBTFrho6Vdvv8Vvb9QGNeSPXmY9o1URG6sz3vYbp11kvLzr4BiZ5grR89QdSyts",
  "key25": "2CfmSyH53UWPzToy1sYTnpoTutAgLsi6HxNxcQgPmuYcqLmK9Xgte1rmevGaJZAkgFD3Jy3uiEqQevS9jszycF8A",
  "key26": "ed2L4hkJnFgrkJniB9gwjBqEUxLyzFWniUAtjRSutiQPrvtNPPh9gMrwfMTjKDsGzrq9cYbDZRyZGCCZovF4fvj",
  "key27": "3jgQXdphQiVyNetshCHJXe53kHQdu6mwLCbsZKEBmq8WFtG9qxCN1Tp6ufz8zqmyuoVwNXxdaU33nbWrBmjEScnY",
  "key28": "566RsAQRtGVX2CEXZTzBHWs6bfe7TAMv1YAWVDsqMcm1TDyE8MUiugtqrALLvZnimNW6VUn5gtN1UtaCSsQW4uqB",
  "key29": "5QRS7Na6aG1fx74AtTf1FrYpEJEG1ckKFdKAdtzaYdcrZNggBa9qw23oVgtvzgHTRgnyPKXjD2VwMFxeLLcnMSYe",
  "key30": "5VGJcbz5GYbwjwfRv9ZVBdth9GbFbmZT4rx71nQEXAhu7YaeVGv8CcQAMKUpwk6aDh1Z1SjkPmhVhN96FmhwPmPw",
  "key31": "297ug8MyoZy5DdkWXuAMaZSjKb1tQk1BFVsgZD1uABKarQSgJFfTvin8H8j9eoM79cRnhWbkdtNvJgE7nMmew5U7",
  "key32": "4WRjmUJxnvbznYkaL273kMTwU6drVHsQCm9au4ry3ZB2dghewQGRSsE4HZSF8Fv5rHz9Z4kwYjNGgSznoukJC5vF",
  "key33": "3T3Qookr95sfoqyqNrWjLtkCuzBut7y1QsqTQkKev5GbfAYeVWEWtwABchG4mRK2d6tb6RXkzGstWcZpzCmpF2MX"
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
