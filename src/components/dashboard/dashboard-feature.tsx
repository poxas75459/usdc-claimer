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
    "ZMDFjk4EVdWvYh1FsY1PkeLN6vPD7VHp25f1wG2Bb7SHeHuZUT9MTNUbUn6WdB2qTBL3SW2mycrkMmDFLFBeVGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1QMVwtiajWwruubpjqtoJv93RHF7nvfwNzveeQNDNbmKfQ9xTrbGhUuUyVBbKs5bBK7RCGFvPVdENVDdZj1MKW",
  "key1": "jtFCJzvQifMmCbU6hUtXyXM5qT9Ge4yWoCbQqAnEBYFmeHvmxwgy4N1JTJLybaznc6cLpuAoMcfcBT2Hy8nyxh5",
  "key2": "HwFMjHLhx6qeXbTDR6sAJzChYg3YVLxoGPfBq43GSfkNYK37XGvY9bVAvv1knKtxikRHKtiVnwmc5aazywGuniP",
  "key3": "yZJ3vCJMWdC4cTMC6Yz5GRkds8W3HPMcRdiaq1sRMLgzjPPstppGMqJHfx4M7sGYJgZX6RHa3rQci6eFWWEWjxB",
  "key4": "YRk5SxLGmWhhQaQ8XuKSafvnL4GUaoj16AaTsZV7TGE6ELmpeLFqEF1DVs3boyFx4gbVj24dfQME7jWBZNjPye6",
  "key5": "2MGRoN3TTei81H4DbUrivAy6TiJr767V8WzGrekmRzzPfqFxDd59G82xw4XhTxXjnn73cz9Ea19FkXjjTBUeSujk",
  "key6": "4tzL2VnbnQj76Js7YgPAwonbpYo2uQXqusAFkfMe9d6Ntko38k4Tsafh67xXNxaqWSTfABzARG2MgjxeKmMKuJw7",
  "key7": "4pTv3mXJ4ULYH8M4DLwQRtzrnABGtaMNNXXN5BqRm6yQffEege1KUYWtY5VCgQ4xsS2R4MG1DY4uzpnxnQDD2yo8",
  "key8": "2dfYEmrGwLUcFNVFjhqL7oLBf6vosY7DoQsGq76V4S118xKxTdk1PGDUbik3wjdRvT2P4uuUdxLsdk6HnMjwHBxj",
  "key9": "zM9BxwW3TJ9jUBzh2SgFNSa6yewsroZCJfe2uiyKg7HLvMBYxdfm2NKm5aWgH2rRTxFresGNuxyZoF6HKRZhUqT",
  "key10": "4uHrSXj8dtPEH9k3BmHbEEDp2JvjTKvWhodzkkgYCUTms6uGZUtbJRi8QzqJ7QAWogfR1tWqDJg2bE4CyAxoretZ",
  "key11": "3Aw7NvBtD3tQ6YcLopx5LFs1hEmS2xpH32TGrtsBQTtJHuprP8zfqcxLxcko46FqP9r8AMwmssZCdsXJHch47sh",
  "key12": "WmFhbd3kHMcSPLDhRdLsBTz9XghKJU5CgWg7PhjdqX7JHEFAQoyFghMstqqdFqAzPxokSscjpqB1L1znHD49Hvc",
  "key13": "5xzoYZUAsHFSfCcnDkEu4h1BPLthz9VcMpjD8SSkJJPBRpPJBqKxMXMrq8GtKTVGEGktBvZJHXsbT1vWsZyRafcv",
  "key14": "3u4h1rPYmXEyQXQrZtYHP8ScY67Rqzbs3CUvkKqpen1g3m8TRjzXFJWkUEUaq476bUuqMkBd2oBsYYmgL889v874",
  "key15": "446yKvJfVrUCyFrgFCfx9pWH25dAL1JHdqved8rq6k9ptpKWZpkRapcDXtNMFiHNHqPH5dEBrkPYLfw8obc5gYYu",
  "key16": "5rgLkfAyEW2FUmaidikKAuYZKhmEDQYgrz4WcLk16iXPkoHKbTDUggncMmh27iNhpSYJqTCoRoWyLwLQrrtz77Bn",
  "key17": "491UnsnYrXWgX4X7Ry76qJLLrY5qJrUpJHAa3ofpVyEAHKWKUAgnJUY23cnEhaoHhUcdHWbb896hwXUbSPQB2XNw",
  "key18": "5LaGFyNmJyKbdJjKRyXuyhLFwdE9fQj5LciNz3c6sRjjWmbR6125zEY9w47e2NRaSDkimEJNcTHUh3BL3VHU2jWH",
  "key19": "4nyGC36m8eWKn7JHqFpLK3xetByJnstwWxNoAvForCZrcEBZwvw64EtNMvnWekmhMXHCytKNZCZ7ns1b5au5vGLY",
  "key20": "4ddrVUbL4bqaKNwt4Fx6ESC3xhzVTGmJCR2ZLQx6QWEZiig5YEzwPCbstUZBa2V4zrQANh5AbhGvLexhCdt4mUmU",
  "key21": "5cRzRQNHeX2xNHSpDFZeLEWMiXnGUGivfcovFMZCNoPcPat5JNtWBAASfEWjnpUQtKFZL1r2PUb7c2749Uu2Qu7z",
  "key22": "Cxzy87EzMz2XEK5NWwDSVg2HDy1Ze4AKizH4wFwyNPKuRxnoz6g3zQsekQMq58d2jedHZKfgDn4pPxJUiAmrXX9",
  "key23": "594N5eKyPk5TEagK7Rikdwm1NqMgda3AQfvz1PG1uUcrZ77yGRqS1rWhZ9MdHAJZQtsUKpnRxb35gv1j8HZ99kP5",
  "key24": "ckJFAdei79FPTtW8Pj6NK2zeb8viyJtpBN41F9bo6vusDCtsc5mDkdu68bUT2cLYgqhjunb82EBeoqnXtw1KSZU",
  "key25": "3s5933dQ1nNiTXN2VjivQMTtqKy9BN9EiKRvrMQJ93RxvmPRFRbDJVD3PFxuD4C9kmD5s6REK9j6nA2rDbyKRc3f",
  "key26": "xARoX2MEeED4WJv7hdSYhqaTtYXA6daA5VkCgd1fTa53ZQHgK1TNeqEFbHQ4GiqYjyn9vwMgoYnkbP6yi81SkDp",
  "key27": "59DT3ryeyUwCMExuUanWXe32HPCm2Pd7bfNEgraFmGkDuw8rMUeaRBAGdyxpKBEJBBJkjHLhytvyRjq215BV7J6d",
  "key28": "2uWj8bjHnuGZP5PkYWN9zc4tFmi88f4e7jXCRvxXsQ1ZQE6XT6GtoRnLq4jYNKhxyPkc37tjPp7uKt5KkWAarqd3",
  "key29": "3n4R2HzQ6okuYKYRus5CVdZqDyE42e3Py8RZxqoJiUKFQS6sMcq7xkQdutvtQ6R7RTRMhdcdJaHp93m9WN1oYJwt",
  "key30": "4FP5LLU3BU5KSqkAo6z2fTHs3vkL3FDcL8Dhd93Pxtk4EN7vojWMGAGnqdvz3oPfRMco8cA61mHPzAw6PDAGqsKr",
  "key31": "3mhQH5PuH7soKu4jkuFeMLyBm8ZR5H7gjBnR2LG9e3ihdnKEt6bGGmh4P7AczaL55CD1BZ8iJ2BbzZZ5GjiGWVzX",
  "key32": "3nyx4D67P4BZt8uQntMfzGQ2xMa6iGAVxmPX8UeP7mrgGZLuPRs1jZy6Nghpg2jX6AU4gbAG7Ecye41ktXL4LyQ5",
  "key33": "3HcAVHjciiJmLLtirxEou7S65rbyWuNb9Zbz8V9iM6f65kbHFxTjWYc4gap1ZKJGFcGJeLYeNDUv1P7APWNyJZ16",
  "key34": "5j339AWX7mkHwkPg66njW7k14j3Nzbg5FWN1kXEs693scsBdUWzrfU1sKYb3jxKLGUk9PUdmPPhQx4iD5fKsk7c4",
  "key35": "56GW8FYZtnLXgD14FhxnnQiqDMP9zR4zYSWLkgaHE5f5WdYtUEWDzuGGGhpW1dERZGapeuLzAjNe3Upzjb7c36cc",
  "key36": "4u3denhcpmXXqi7rhyvfozPz231nq84yVJkFsJW7Pp7MhfKkLAQsg88E15UdyBLjCrp3NH8ZgUQrdGThfMHNMYtJ",
  "key37": "3fAs5SVfswhBUWaTBeTyhi3nM9uTHFHqBEQ8YmboYwwYwiRjvkrzSXAc7YvEqmr4rB9BmVehEd2WAtBU2AQdJjpE",
  "key38": "3bLtrpTUVMhCwWxB7DNNjZBvWm6yECnULgPv24vBvdMMgccciu1PBvb2edU42tkVDcTbLZGxGmSKKZvvYuQzZP5w",
  "key39": "4YLmik8C5BpJbEZbzFFZbfVxrhzbxruYReiJebpFrFbV6gf8dT4MUbv7kZe9iYA9BLyrYZouF7aATeXkH1CCRuL4",
  "key40": "4ngq5LpvE9HDLxtpg8Dxsm9BGKBYopZpySDRMoswcgwwJ5SWa4nZdKmbEuAbpx6CKQ5crd2JB1LyMBhk8Sa7vQNt",
  "key41": "4gdjexjXBBChf7AaSRHM47fMNwkKjjsftHvgmAo4Hu34UyLEBa9M1V1osANn3zcUWSbMNoELAU3yFGiPvLf4vrHn",
  "key42": "33tyLBSENMHS71ctKRKC3dtDYwwpbruB2tY6VNsQBzsnLXKwZMCivjnimFQkFbn7Bo4VsC2tYyqLEEu6Hvvtn48Y",
  "key43": "Mi5rHJS3QkHjgmqETxgb1TfWiQXJJEa2xF4ueXtCg2bgcjbeafKMpbBrMKgRZuLqGsiVeuPzTcV9Dwjui9wvR4Z"
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
