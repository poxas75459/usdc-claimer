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
    "8Hy5zZ7iNpGBSueZkigUxPUAWY9DtXjsmeBtpEYJMiGoxPicHFW5AG8UVAw5tFxvCHmbTAiGayK74eUB1SZAspC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RpSEhLsadaAxVC2sqyDQP52zaxHHZ1PuYPZkQbBQT4gy4vPZQVXNiiBCrp5wLNhqgvWzVkNQ9DXXT6K63ddDkg3",
  "key1": "4v1FN1uAUJYeowPchUyiu6Xz9zY93SEZ5oxPAFUHkLRB7A5gGbKqPFU4Ao7Vi9h4s2PEcvuRkcrqmhBjbgMrW3LW",
  "key2": "33Hh7TwCUWXc6hbWzhBYQqtcDk5UPLA2bK31Vkm8jXbhNWERT9bgQMC8P2XfgddhD8NA71Vabr9CC5sSnmKRVk9i",
  "key3": "2sWFw2cBCdaEUmSHvgmbtSBUZbVBkzXyt9BU4GHXXZ8sfjuBvJqE4AXwuM82dpXPFYubijDhXS832a3FnJ5xen8v",
  "key4": "2EgbHq7FnkDMwLeVXgV5CJTBkE4JKHmPkVDHcs6npukQCU1U9EtQ2RDpdq6NFcDcXV78tEF3XAsoeHsfRSiyJyAu",
  "key5": "zL62et2ftTQXRVwTTe8e1f5CfXgXDkpiPKvAeBh3F3MVifcmU77E2rZaXB8Jgnxcv2fH8LLdaURYi23jNeRgboA",
  "key6": "5Ba8DVqss9R9Q7GqCZZicZ3dcicAgLRRAnBrxJsaY2UhaUj3Kh5eUM37wbGLHCS5JWEtVCuJUWyqmVt8ZnEiMPXZ",
  "key7": "WZhMN54XBjEyPHiicGck2Huv1JcL7u8iioe8Gpmhgxbe7LVdFugSJLZzYhvQF5F2m3K4sGWXHpQoKZmF5x9n7KU",
  "key8": "2A8AQqf1AU7qAdm5ndQuqpFnKGdfcKpUSKy2G8cF75pakP8zqp7fwtdwWXgEsdGrDazaiuD122SZBqKzxsytfoeX",
  "key9": "xQSkkqVffzmeZKszgqtT2G8vhevdLwcwsQEbYq7VxeJpmLHsUM9RGAZiCrgGeE5AYpphvGyAsWpcq3p2gdfYPZy",
  "key10": "4GoA3Hn2bruggh8sEjz25XQSDDUKE4j7iNQJEzS2YaCg6PsoUuF3HMmgA83P18Nh4JSEfb6kyyEa9SMKKA2FJruv",
  "key11": "2YEiyhe4JeFyqeLPeNsKnGuWNgixB6x5CDfpuW7A5JBfBpmGVBYLdyj5gSbs729SkvsF71szWsvJrNDiuT6bFodv",
  "key12": "5WBXGk42Kk7HKgSD3doXnrhmy2K5qEThWQ6yoaGqKrN7W7YJUk1Uk2Vy7mKLxuJBSLhDUEJiSAB97YZdNkfAKsfq",
  "key13": "hQshsq5VczPoKumzTf3oagHtcev2F7xxEUTosqTH5xbuq7P54Zuj1T3yjUaWBzPrhHhFYGTthzfcu6cjSZc5SBG",
  "key14": "525ZUPXwJfqCDMMQtXzHTtQxwRaP8sowzuZnsPnsxJqsRiEJkYuGYiAhbrBJSjgoDPftuXXrbwj2ujAFbVffKiEu",
  "key15": "3QZVTnqhwuEuaCocXrjnrKaJzhEAAzZQkbXQarj28xBoWoXkeABbXzGCDtdw2XxaF3aKBkBKH5mEBSJwXQaQKpXo",
  "key16": "51QrQ48nVDA9JrU9U5EQpGgXQpfyLezch9MFvgk4nBYrmLsx2vU49wnWrQnymEk4kBkjoLZwhpSmrZp2QUBeiJPz",
  "key17": "2fi96xP7cp8mveDNov85ueBxk71gmiLqegEP4LKLUqZawEWQLL6m6PNdrdTd3dtdHroKb8PvRJFuRcbTXRezDpJr",
  "key18": "3x5Nr6RsHzbpvuWXnD6PdKZWnYZxCyGMGqx3jnEbnpN1FUkTFwDr7R5dHDDjC3V75K1m8WCfLwzJ6wwqbru8v4ef",
  "key19": "2LjatyG1BoCokQJGsmEcDWFe9whi2VNYAqrwvtD44qNozvUhE12QzyJGAdjWJ9W28ZyExiu5Q2SYCL38RfqUMBuC",
  "key20": "3osgCnmVsrtBVsZoq9Li36fR5mp3Sogrc3Ju6vvA2ceHRtQmhxv4fV3PP95ncLyfKpDqHSjPqviWLJRzSK9fDv6Z",
  "key21": "5rktybGoN6dPQncnn5DUf36Ybx8Vso93qyWAw1QN4y7Q6G85d95yxD6KeZfUymVX7Sgj1Aow3XcUkoABtKuPctnp",
  "key22": "4L6WcXzhYUhxvNNEJmq6ELc5qeT3GwDjHeVzGnrQcYk8rynm4vghNhPcxzU3YmPwxrfE1ZX2q9JJPmbdgQPdzUGJ",
  "key23": "4K326vMKUqVLigRmWLH8jCw3UPwkVxsp7WWFoUrTszKZMDSPcM4oHhCrrPEsBEVjGJSdXaez6NSoG4XU4vFvZt6F",
  "key24": "3PGV98SEczX17zoC8Ai5G6ntqG461p32tMwFdCbRNCcU1qWdBjqx4bQQFfG6mVBKKHFBzTgbRudwKvqKSmumtVec",
  "key25": "4f7UZSGqk2b2GDsgdVhLRQevyQigeze5RZZ25wXHhGTNSwysP61knLcQ7zLSt91F2tqtcaJaeY9kGFX13rUQQNdv",
  "key26": "5B8CA7Ttx3xkxywEyYsdPByNXtVornhncAak7hf2mxfXaVwdTdosxU6Q2sdjuU5weMEPKHq1MgBJrfhMXWzczbhf",
  "key27": "4p5uF4wytgSZCDevncgrr2qgJGFtuZ8rjh9yr7xd6xAg6a5VvVk9uzZZj2C3Cj5oFAsMBsVW5ZjWNRoqgdfquPX8",
  "key28": "5qXGmgCuGyxuGVarvfEwZrnKif7G6rDhDFB76WPg4yfnWL3aHnQyvMWMaK6QhDk5qE3W7R937KCj61NYpLZjdA9C",
  "key29": "3p2ZbSD9MYqwJzix9Vau3xo3dJDf2awLvjJ5v9f2CyaeBdvcrZnJuUzNANdoUpwys6A9A5CQTx2c9VR1JxqqegCe",
  "key30": "MP5YDJRRZA1EwjGxCjisagNbPvkebkAmMc74t8k6JMgjrokSDxFVJ31xzv1398XKe4a1zgDY4pcrKSYFvhtM3Pg",
  "key31": "4vLxRdSNpPTStncaUVVv2ESipodWdPfCJxB6KJVq1XCaZJqVu6YV5aYU1qzopTT1brUH6HXve62MPiP25Kk4L3nn",
  "key32": "4SmjfhHrN7HWKsgZDKtBDGxd1rEN9WCYcxHbeaRpVh2DZ6M43qssSS4iUVkKvPAVE8fAQAbcKMwEfPoCQbzNSWv4",
  "key33": "25WVhJftQGfdEfLnNzSuCNmCTYn2M46uw6EezYUQnvyaZaM3HhPGT34MdpvFjkqwMGoCSnkrca6sU3KMmpvJpeYS",
  "key34": "2ojszG9iRrxGg5iLy4Nfu9GvkbTnqg2o7Xs9PUszJCMnzHqM8E6KoPihaN2rmNtFgGNogiybiVnboLu3DtHKBjvn",
  "key35": "4iunVYc9YVFE9vVTATsiUuEyZSduRLLgZ6iHvUNw1TPQ3aqyZVcLaVmg5j8yAyUuzxdoMxYpUyAXyTAWC3fyjj1Z",
  "key36": "4y6Y5mMHyojrNrUYM2aAcLQKCUFuNXFEzNxYMg7XhFZ4xnH5vN5XpM2HmoENk5EJcUXYzXcheaM2h76DcwauWwYx"
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
