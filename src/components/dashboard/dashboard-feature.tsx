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
    "55PU2ZgsPHTvoWAbkv6CkyXmvGcmUBz1duiScsD7M4qohcM2W8DUWFisXJ9VrRV32JPAs3VtfYGo5p6AiJRn5Vtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdSnrXCW6AReUxSYetqLDvjG9rLdBfxKjfL9M7dJ9tUSS65sHABeT54jgeg1kYwDzvtZNsmzEX1wyBVwiLUzAoX",
  "key1": "8qtdYdfghvU7oSL2J5PAz2KVdWdw8SwYoHJVNuqZRc3dnzTwYk68qHX52FBqvT48j2nkPjpJ3MRGT62ZTbKg8Kv",
  "key2": "38JsPiHGKa4gMdTwEgsS7v2KfCYBQGcwd4Kpi35YoumARFVEg18smNtPqxNH1A7QiSrW27ygvToSxJgtwLBJfis1",
  "key3": "3FFifBxwM9CMiSjgwFxBtDasmQXKHWkY41qXeNCjp8UnPhroHRqeArSyujoexNbXRLq4oiBjngxVNM9hv6suScRY",
  "key4": "5aHtqf8mWXKVCizuMtDYFe3cRciK5zxifyaxZjkwJsZhy8wNu94zBGTugPgHdb6s6rfu32HvKKZAFsfHjRvKvnf4",
  "key5": "2C2TbMeH9FH4tdtE5cfsCWANuCKFGBjJzesKaHQsvzPVeFxwDVxL36FLUvCSbsgPfsQ91u3SFQqQ4mk4hNwaWgCL",
  "key6": "3h8JzJs9SuXF1TX7rbzfKEprF5kqQsWoJT5RVTP3qP9MMYcHMyvafU7RND3tRf5baZJYsRTx97btUv7VmkdCiaXi",
  "key7": "aJmL5PBNdFVVadNquVyhGYSBtJBNDxKZa8q9p5b3rSBrsctpX2QMTyhbKZoBZCuCgtH9jxtcDUGG3r6ExAnoKzv",
  "key8": "5ke17CEeXW5hFpGMTmTBKWHEynhMxGQ9Hbn7A3nWZK1DHPoJs3K5dz2gRU6pCzgKYMKTwKPmdwBi7g4G4Ftdo13y",
  "key9": "2o62FWjnY3VWdZjNG7i8sWKvHeTZcSnV8gK5TExddbZwp8A7E7t6KLz6nR82zPQ1KSJTCRnFHMyRpXB8T2rEGiZM",
  "key10": "24S6LhAp5dcVjDNyuJozvVHJJYAug6ZMzzE8vMx7MnzPkFSDXYpqsRrEprKtNG5hEKAxKnj3A2qQs2Gqd7V15Qnn",
  "key11": "2jr27emWtAxATv2rpdotQ3fFdUFbYScHdN753tuM8Pgb1mFoNzSmaRVMzdwvhy6Eae8pA5dDRjPkYpy7KkSjaBPw",
  "key12": "5XhfvzezC7wBbVxjUPfQxw1cXh5tvKCSwTzXEr4HZDrUhdUAcDrfPX4qciK4WoMh5YDRdnYEndEC8AXKKnUgYqe",
  "key13": "3ECdc45qbsFW3sp2cPpCxVhbb1GBuKZBBWdPNzeT58YkWAhMmJP384jjYkGSgCKEWT6aijQmhqgbmKe8SB9G9Puq",
  "key14": "zdQwLXtbuiMibpDZchSbCVHva1SubBdVk22Mcgf3GTEmgRg3D2UoPNR199J16xxg8rdVJYzNAJY7kZhowceTgxT",
  "key15": "3K38A3md9gCTCZyW25RvsEWVwa6BSSw8uFaNApqrJNhQb2Rn5dNWenoFsBamRAgKzhyiK5izoCLvKGXUcVtqro9o",
  "key16": "3gtXcGAr7KgNT5YrMH5nmMtCDn351NhsbyjM4qp7DBLfiF2cEBgVHr6AfZ8bVSCBqKGnG51wKA69HgkZ5wdc9C2B",
  "key17": "5wWJ5hoikQdjZ1ri9iDqLf6MRvVfR2FufUMZaYopeypimD7NkcEewwjjD6Sj18gEGSobCy6NYMHcp5JZBgTSFybA",
  "key18": "4rUMYoUnDGEUSp7RuLLC1n9PVPtpixEpqz4cQfnLzmjVwBEpfh9Sdhcir6E15bAdZr6QUnvrPP4Guu4YFxua8VXK",
  "key19": "4Ddr6edqGUmCdiZLCAQEopv5LW5M8LfFGum8SaGfveC89Ng2VHcegZLQkAVHLnypfz2BjTMnnZpUySEkmdUqJRSP",
  "key20": "2VgT1LtSqEgHpeaLDwAkp37uajgEyvCL99ydz5AubNqpR8Bd7kHgVEmaQmDtq5KTMf3SDmRJFy3TT2mvxXeChJvh",
  "key21": "2kSNzCjcdiUmCyJr7fiSe8HXMvv2QBRfKNJ4mK2AH7rJKKxWfizF4n5QaYJv1WiprwTRxSNQNmCjAaQSpnQz2oym",
  "key22": "5LPKGJkRaD3T75x32b4N7taiNBmRzR5EYJv21mnAJ1mFQEsWTBXCAZyKJw1HvnQYw3x4D2LHNE9fPwDtWDgaFLtF",
  "key23": "3jQ5DPy8jFzXVV6TBuGGpjpTQ7r3fJAi1MbSmqhuJpPniA41LXnRQiBqJwLKAq2wm7qT5NypS3rDgv9qEiqtpCWu",
  "key24": "3iBRzd8dPKR2sjdH4Ms5Cq5iawWLQtSaKAurmtcmEeFfsyuPXKUJ4kWyCwcpQL5WjqMNs5RKbQtPHUVUcwmxSrmF",
  "key25": "5HvsfHSgtKRe65nwko1y5x9JNtAZ8q39AiUePz8v8TvmgMewbDhXryvrKJcajJbVeT9CuTD5D3dtGD2t9aVkeUd6",
  "key26": "3BWKkqnJsMxyDCtnKeHyLesL9whXrpixREsdfzWSBQtkZjz8gJXVgUz9nF6ydnyWYK1g6C5eTBwFnf4h6KcrtRmW",
  "key27": "3vs245enRLc3S6frAZGtz4wxLVtXGTfe4BLNmHMXyoyZ6m718rk46iEavdTBiJj1ZiSW5pavfHDuSyDkMCfJa2g3",
  "key28": "4BSXpJc4tgvhhPkpvYbxuLAYue9sUCCkhVdx2renkp8k4HLMcFBbUxB4mn6JQN1umLHVtPFRDUgaDqRzu9rb6QQB",
  "key29": "BJbQLX6gDfhJhtztN4jnDPUfHCJJ5wgUWM9SBXTyqZqQj9fT5yUUdT85vDJkaozmTTKc47UYh4vAcC5uiUhiyt5",
  "key30": "2U2q6he1mku65qf1Gqv6Q8e7AswCyi3TNrJdwnnroBy1k8wTxC9GdL4QETLiZXWvsotHC5aT2oq5c2GkAH5vovyK",
  "key31": "57qqZaW9KbcuvoP89rUQZhYo2Teb2gTAyzkVrebhkVKmkaBM4BnUixBv4Fk77ms4b8Si5cR7LAGZp1E7xcgSS31s",
  "key32": "LVbSxMfFVuPr67Qj9mh4YSChCVrpM1h2SZ1V4ZL58Ss1LhXdpZT3sjG33QZ5Sra6N6GGXofZYbRjXADL6jeDHxu",
  "key33": "26JdHoC8UxRHodHgkofhapy4NPsP7Sm5tuoATmWTMbd71DJ8pL3K3TspFFzfCExZrZNiaGUuDeCWDRqB9KN8wXQR",
  "key34": "TM2NBWt6cZKnuqMa8sZtWoBF6Jho8RJqWQe5iPmswYrvPEhwPRH5Us8eW1a8yeYMbzeJHQbq6AEe3FRDaXHnzHe",
  "key35": "65XMdmP1snUgbefVdAxks2MzXPLt5VbSyrUnZ1afoiqbxGNA8BuPduPJS6skXaNrkfgdvHMw2ApqsMMpNxrUKsds",
  "key36": "5z5RY3FpgVprKzAneiqRFcKzwRMbbtu72PLx8mJzU8ncE9hv38TRAjkTW12rQr8X5RunrLEwQRaScHBvZAFES7hT",
  "key37": "2y52V7LfRyoEGfpDcMKVzDgUXKwf4q9uLrxtpiDX6m9K8LfqGrG3RqWznKTXthZ2nmzwGAxGHyLSH7cyeUv45xqj",
  "key38": "5jzkEwYgzKPSd9SRMvXKkYt58mFhg7rVcQHtjhcudygHtf3WzoS8vdHX6zhZjqxbW18b9gttpPy2VgCd9kvWe3if",
  "key39": "fJjmWtong7u3ECEVarZEWq4BLem2rwnLsnwSK52GYKcLuUawJuhPmhTaSbSzwVd6pejacekALycLwBhdyhpwUbV",
  "key40": "FpaXmmoC37pFxnov72zTnhc2QnkTcLB4c48WeTN5i6MoRL9hxA7UmjpWZFZmmAckMHBxHQPLpE7nEPR7jmJp7Wa",
  "key41": "4xSMkzz7wVkPbDkGrbJ7Ay46hVWhvk8VWViddfKN8V3K95gE7UqfER7pkBwB8cGy5uTRYYeRgz9smrxqFWzzKZLB",
  "key42": "62U8TrTCpJmrXhoVquYnpivGFhVwBFS449J5Tq44RvaQgiZsvZ9dzigJUEYs9QWXzTfDy9MSxKD8N2gwrr9cR1bF",
  "key43": "25YZY1gtiEDwQXJxH2wNaweCK1ts9TTjNoFZtpo8yGnPThr5ENCqNSW8oD9ugkxbGXjxz37eV8YLoWtzcz6GvTRQ",
  "key44": "JmND5Eb7q1bkuhxky423Jx6nfBiRDHU8iggiXvr6ijaDFERPisv6xLuPLEMWQ8KWBjYzSfq6g8nxWUGFAPwKjVC"
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
