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
    "4NDEeMHuhZUb5CgjNFTNmPuiPQnSUHEb7jvtSnEH7rt1MsnK2Bm5F8B5xwPdtJztUJ7Vy3zLdULGNcCjB1KBgQJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjdRptSA7CaJRfM5wZzfEeWkQoY5YTTrTuDQAT4whxdThP9pQvgVhZmhBpnXBiuDHEbDus9BEuTM4GBtdfvhmXs",
  "key1": "DSjEzQVXugyxN44ZXFExZ8qNGjJHuj44NmThJ6aXcvX1akX1X65vuWDoEe65TTW5amuYZZBdfXcMpXTCy5AXFqn",
  "key2": "36J7ZevgXeVXJzbP5gVGcjKimbhzAEue4uxnfh5ZFjEo5B6TFbyRx6if2xPEL9dDVLc5ysJ2jrPMXUeVhBLvsZL3",
  "key3": "5H4BHdmyFZh4o2YP7kU7oAqqVwvMrop3CRnNJfvm63so9feJeBLekNdeZZmseD95xHPLcrndYKJ7wwQ7KyLz5QPd",
  "key4": "3AzWjBfump7JeoLL1d2Sfh7HrqoPfRZ8oF92xYY7fVVjez78ynr1kfzjEuNij4fPDGwUyL8pgvBAjYY9VLCVF5nw",
  "key5": "5ub83YXwjuh23RK4Ayfeubiy5aC7cVU6GenWb2diShBDbXCTG9c4NeCtTTXeMppM1jHVLfyC5eLQZoNFUPWevmns",
  "key6": "5gCp5zZEW4EB9KvW838bjFNbS1qKVLsfidPgogKtRoQvXactca8pgBa7yoNmggo3TRaoVRWBa1bhvpZ3Pm23VRNu",
  "key7": "3viJDi9dZCmZmADUrAxcasoHzMNebBCyRVE2ugxcznR3FU9dtzMArf4sPcauNRTXbe1bC5iA2w9mqoeDcum65H51",
  "key8": "5fgn3H13QjAu53ECQoJPKpwKw1HSjYLFLU6tKJqLsqfUgXCcyacXJ7FEGKo8uyspYqiaXPzaAMt9zUbBZ3pDFgVe",
  "key9": "5nLwTx4WBQHNH2cGqtWjqFaqu9w8JXc5D5naqKGJcCrwiS8MXfYNB6QnyP2bW81hSXyJ3eW9PWU8Sg6skDXUq5Em",
  "key10": "5uaD6psQsTWSqwmh8fctNvUiMKJ1fmRQRnC75edLULPHoo5Sz19SG1ViBNT41nAbnQKkHGfLxeRRDEYP7TT7iYMr",
  "key11": "siSxNkcA1CZNRitb3ZanrQjPmvJu8WdabLpbYninneCyV4qtzGbktjMiH6KXWCZFpb2eMxJaRPLzQgCQPE54pXD",
  "key12": "4sCb9vzJRrejsJtF4qAQNFADcRbGcRHL6kNVtvn8z3EbQWkYPgJp5TEveS4vJRgNm9hbKEyV9PRUaNv16mJNRLUe",
  "key13": "66FmHXT2pY1k4xJhu8QqFKnVQ1vk5B7vqhSBnLbwsHTa6kC4rZn7mernzKGSTzanHtFYXRm9HjsacrrwfbKtwRYV",
  "key14": "4Y9k9pPug8SntL8A2aivfRafFvgAQUvMayKGyLF37CT6L2v8tMRtuxsGY6NCZRLUidQHiHzmmX9qtoLLa9AoYrRM",
  "key15": "2LmrRMc8veoHVknmqHYCCBN3iKdvoPrHLYndzsAooM48L8oRLftBTZUT32GUbaHBEoWhJY8Fs8RR7TAjEMGE3ysy",
  "key16": "62JJWc4rp54ohPuBCvqhascRLC4iYCch7K2NThMnPpt2Es63EfKFmCNVs74JHKNmYiePJAhqhwYnELxRkWw5a7tf",
  "key17": "3z1xyVKQBUAogzyabSHf63dA9YrYbps6SdzpeMDswSx1KAJWhXmYq7jNabWSCKQuAd9TtGfXbszK17WcrHa4L9u3",
  "key18": "5NwNwkuBCsmUoXtmPYoacZriWXYp163rzA5nKQ2SozftytBcHnBdGbUcttaK48kEcVTD59sGVvpmW5JDFw5JV8Ua",
  "key19": "2RKgKsWvF7DCwa66jTokyzwNCuSPZF5VEXkELcaSAGHwxjkytmiKKrADSpV33jhcHGVzn6xYtTgyUQRrSHUDP2m1",
  "key20": "3JgmJBUBM6SdAnrGaxUH6ER7ixwKQPMJ9nuyewFWEam8Jvadc1fjJMfZzfGtT4FZVdKrudqxbGnt3bLLFtLqWzTr",
  "key21": "2f6Ks98HMXt7stPGRRQH9LRKVGdWmZNg6NvB5VgnX9ketBxDpR7u9HEGQqv54oUdMnHLfis2uhW1WFp6Bya4TzX2",
  "key22": "4Mt2M4ACXV2BngtjQqwoVzmvXAKxNuReaKwgF4RKmU4zcS3ykosd37GLiXVeve9T4DgWtkZftvvg8KGuXGgztX5W",
  "key23": "3GXbB33DAiXfXNFn9SA7MiuyRgRjFZLnEVpUdbA9gC6PjPp3gbcaA85xCkXj7FXDhzdzLHdL91W5jjddtzAMr3VU",
  "key24": "3t5uNuhohCYVjqMf87YXUKA9FGT6vTMnd3k9szgJfaWaxAn1Fo5oCCbLj4PUQ8HVyZwzkEdThW5MyuoYBkRqs9Zj",
  "key25": "2ktzPAvn7bp82s6dSsdud6Pw8uUL2MJffjnmqkuu7RkGsm2fxwY4jucFsvUstrN1AYy4Kd5wTXc3nE8o6oT1RXDm",
  "key26": "Jad9ySXD9KqPVyvdC67TEaPcZDTmp7T6wQcXhRZU8hECthS5DH4Dh3LbAkv9rxquzu31iFkBX6BV8copZjysgbK",
  "key27": "DetHCNtyPG4USTqKbQBfsJ4pNceGygsLeajri4fFMEvbVmzgYnZWnW32Zq9CxNf7KqaBhM84TF91pE9YJdqQAow",
  "key28": "PLeLjVKwu3MVBnC6BuNx6GwAAn1H9E57egrxTT1Lp2Lqq4vatakCbN4nLQG52ZXE747XyoYT4Ev6VM58nH5W65h",
  "key29": "2w1dCgfzwD8yvgkW4JGQomutfpKTUpX4AG16k98ErwiZUgVnEuyjAQM5mYY6Jpvh7jmJ2P5e4bTZf7tneB3weRG4",
  "key30": "eiWDVvS2P6gv91HFgdQWYwTN4cc84NLyd7sLEe4jaZp8TrMciUCMsxwE9tNp29ZSRsJgkMw9E7mkevFGbycc3cj",
  "key31": "5eKqwYyuH7VoU7wj8SrXtBTKDRucs2jeBHrwPgJdLF7wZ5ehgiUaC3TE6ERvcnipeGvGcEo9k8bTTK6D418Ww8CJ",
  "key32": "3oN69wiiRGrgKYkk6eMjehu8LwRXUTor49eXcjnEEEMmrfUjhHLtysNMvCPMH5xCvKNLGAfH1YGQBJBVWjPcf6Fo",
  "key33": "9Y5VwpT6VCjgwVL4e8BNVBisWYrqMyfyqt9E4ez66ptYPqD8pGb7nTveM2WSZcFfaezWhF2Uqm54abmb3r6t1rf",
  "key34": "5vCrM2t8qRrn7Bz3m2Gpu9C8f6JFzGvms5rKHQiWyTs7diUJfosaL7Cpy3nd7UysDop7TxjqR5PBVEQT1Qcpsmnq",
  "key35": "HVNWEfHnNJ6uya3mP4eE2HiF9ymqtPTUnEgCWxJGtbXWAaQyKrd8oyE4JJxzxoReqossMG7Udk1pozGF4vGPGCB",
  "key36": "25DcU9ku13CkzrygXdMMMBb9e8ezKuyRBZQXgwY9jkC7LMXYyz8jB4PsCr78xWFa9VQcqL657e4YFxNFd4U7AGdY",
  "key37": "2u85uENYHSVwjGatDUz58ykopiboHBCCPAdo3CxNw65QnUy6kt69Hk8dujyX32eM1ZXahRTeFSt5cNhKhzVVrShq",
  "key38": "3n7ePkPf1WhhzSj27RqzvAZQ75wkprR916GPKSmS7oeJvLUbLv6HVAUQjSuLWvGh86wmpiBJNwJSW95A1XfJ4ZKm",
  "key39": "5hgxVpQG7qRcSXUheKd2GP5zw23UtfMsi1jkPyafnQWeF5Bw2ZEbfhq7V2C2MyQtFu7zUiRnLtv9s1w1YaoPyUVN",
  "key40": "pXaDCXJA8TfjPhMahakBTizLXB2Tt1nx1PqBc5YSi2aNM9WjmuDxX2XGu4Ftwj36P47Gqwften9ZZdejTnxmPiD",
  "key41": "28tXwMHzJDPpD3g7MjxNdA8bTzayt35HPVvbSXw5MM55xzvR84nnC3BA3H41JrDopy5DTJisuKXwDBBayTMAdo3D",
  "key42": "2RnSJCUiAvRV8ioSLsehqMccyHFp6Xm3D6wVfHBUmAiffd8o4JiP1TyPqB2bKsW7WEMWThXBLahgGnZAoNrVvZy",
  "key43": "5g1yv7q8ZjHegBALKNv8JoYS1HqMKRnpXSs6CCUfhWRw8D1vfHteHbtuv641s1MrSSDYfjkHVmqmJqKNnjRu9wGD",
  "key44": "47LpVS8YGTt7FVrfvGFqmNXEc6g2eQNypvugxuELtFoP45uNieAdBwcaKkJTLqfQgT1mHbXySdCuVErzvPR3TDsE",
  "key45": "4R8shJ2p3yiakXKgtTofJnxxZ1hqT4na2YWLsjNXzMjiwUHWXSbiGSTBgLrn3asMF3q6MavsnEkVD1KaHT1TV5fY",
  "key46": "4TvjH5ioKCrUP3A83Tf65vMTeiTuTNckeHAy44Ksdeb9DH73qQe97Hhv1YX36dhh12fdBqHqsoMXzS8F21mosw7T",
  "key47": "4NKwEpw9PYQxjVV1UbQcU7bbGtKxQZecSMizW2Co1XmK8Q3AqPFpD1EA3bUFvsD6d4gDJBith9182ZVnguUquypb",
  "key48": "n1c8EWT6nMU4wmuHgE7vTgoqgLLYrEYKFtSyyig13kp1USLKjLqFkURNyGSEtd5crL268Sfi55jgKDHGnAA9ySq"
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
