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
    "ASfQ4VvPqnkbWUUGZ7Tzcb2n4S3RbfpMjGW2AnqprbWizsZrsPYPNHoGyVKakSJFyenMFGudiJsvLgYxNHhFfPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTEFD3jhcYnh8Qhfy278P5EDwnF8RgbLbdBe9xg2mvdVXnsfS1xyPD4atdwUg3N9czmpMFLvUq12k2CLpHrM8uu",
  "key1": "5afYKS2DLzzUBZpuSjHJ7cZoNoXWxthzhptkijowNc3WDZjNuLY83xq9QwJQYJnkTowB1uXjzfDJ7bUH8QuzQism",
  "key2": "4MjivPBCbJHXNhBpqNH6J8jP7yceDohccCiZz8myQgfBD8vQvhxVDPyeAi2cN9L1qe86t98WNhDh5myH6uHaEwzP",
  "key3": "5bRaP2btd9KXvkSbSZReynhYKk2786wsCm5nHmDgPfhUF6u3R2evwr1DSYd7GkTJNTb17QLF2m7W9dbgkzHkWKMB",
  "key4": "55wo4ukxm4DsaWY6SSvigRchhFHSsBGR2d66JSFbgMp9qgLZE4C1x2wqGjaVd6WYyNjAzVY718n77n3cPPvMw1nQ",
  "key5": "roJ38soorpHT6Jvdaf2Jv3FJPQfEXMQJBsiVBGDCYmBsC42DA3xxtixrLZne61ki8HLCPmhb3bH5A2YjPEVVvUt",
  "key6": "hdSJL8Gnkhx7jTRBBzKHkFXEeGSUpJcTRRm9mtC2MvYDvW8GgmQYenSR7is22P3iVBDgo8i7g79q1G14jyc38AX",
  "key7": "42Tb7vShFbSEa72SYcr7HGgXLws4tELu3HeHDnXNbaAqY5Zz4964rMQUY6ZdLT8sNhtcZVYGqoSf8oKDd9m14uaA",
  "key8": "5PuASSKG2FMHqNLtBFnsEgekg4BJWK1NbmSJgJ39kjrLe2Y5Z2XhVwgY47wqzHs7nquG7XVwgpGxLN4KamwrCmZm",
  "key9": "5QCUQSmXkB6xvK5TQbNXHVucaopghFJLPf1RQ4VKF36XERuaC7jC2C3fST2MY4BE1BcEeqRL4qHnwLLobnCVvSXr",
  "key10": "2GsRL4i5xpXmgbypCR9xVHC1aNjNHrsepAQMxSs23pzzGc6AXm46uBdviAPJPKZrwJBLTfpuszduaatp8wkHHzC8",
  "key11": "3WQQtDzU5wbDqFCgPZDeSF4zFYLt3zSP8kirqnxAx2ugPjEkfmJRZjZRmT5vnPKwHYvVdoodDVnTMFyMzfKeosNx",
  "key12": "2oXzAJUHhmshE4wUiw5Heb2PK6WfMD1MZNX8snRb24WTsfT4vducuC3g9NPCoj4oUXyjqcKHN5Jzcv6rGe52VuN1",
  "key13": "5B6qHqF11cAtqjqsPQyHVPUpHErq3YSWFD4VTZ7zDpFAgkHkefQTYRvDQAiokhjw7gvPzAuCU4QqGdr7v62bVRXy",
  "key14": "43XJSfrqrctN91Y3aaJKEZqeC8rCeWzqNKCcLLmAcWDwAGjGhRsaDdqsev2EPooQ6BZQmGSc1JvqXYVZEyxJmtTf",
  "key15": "4q4WBzMjeEErqcc94MXvFA1HTJ4FxyvjgRhBWotYHg3ArgSczWcCAUHpoLnjLoPDmEnnDDnxS6ddTEEznctjDAgV",
  "key16": "28v38UnPNX21UrkKRmW4Rb7goHFPGMDGFZwJPAenBzx48X39Mve6F3LSox8z9Bczgfo65SXVU3pxQYMBJU7XXttt",
  "key17": "5GHrYG7JNzTbBeygKrRkLbY1stLKGnC9SsGqAYGUMkMtptWG9LdieiLiDidNT1rRPJPDkVzvtT413xxZdPTYN9hf",
  "key18": "5WuCFwhMWawhTFYp7hxEPzwh8u5R8u57yit9NTJ2Eh8MVmYtFfzom37ev3VB62EPxckF8zvchfieeZ8rjwPXMazZ",
  "key19": "3cNpBR4cncU4ui7WJ79uNrZFojrYgQVm9VWRZpLehgCQeRfPDYVwVhH8LeWt6D1hybEmiAmMcC4w9rAK7yjSsaKP",
  "key20": "22bzQ3aFQtPDSfr7Aeq1aCCumFWhsEtfnFU2bSjgJyYdf8jP3GFANQ6ZFDouNWot4iEeZNoDbMCnbf1egBpVzZFs",
  "key21": "2U8rwJ2f2p352x2GDzctAWBeDrBvMdGzpCikKjHe1ZKS1o1o5NT7izuG6ZYPfFanEz15TQWapkCG7x1pVX2NuTsX",
  "key22": "235uYxL347JcSBanAMvssLbD72mxqmReyugCyNWs6RpS76pk7S5cS3Yzpo2CtB9Vc1nbRmTKqH3c8qodcrv1yePq",
  "key23": "4HR49ty2cMs4EYhLCvEwmD2sdvKT4oHFt8qZwsyntq4pSfHg6EvtZWNM3FKYC9gw1xyVjJGivHM6bmFJA6btsCbH",
  "key24": "66TCPSFTd9me4ZR468iDhMLyv52ae7Z9CyGKu2pHrdBqu1FLSSKN8RZhScCYJnGGz3vbV7dMnTJDpnUZcWKeSxpc",
  "key25": "5zgiBdB7vxVindiPZcycYNxXxQKRhgpsi8TozSPU7syhJ8mjLGR7wEywR9DydtNvhmbbGJbBAzUVUyePHaWQA2eM",
  "key26": "4nnUAAXHpu7FExkgDWWsH4aGgXThsF7k59HPNi3fEAM5aR2m6uDHPxeekgNw7ctHEYqfLNeprQ6Y4txbTYy1HeSW",
  "key27": "AS3YLBPX3zWLtiUgZDaXbXbre8PWp48boPZ6hTmfrbc398RvWpwWL5VeMs7etgTV81RoUSqNhuz2AFrQC29nZaD",
  "key28": "3NKzqKZVHk6nPFQMWbTqZ5rdo6cK7jYTgvcGrv3cXRGVjH67dijrvjgswi4v1vAHiKJcba7kmez9nJvZYVh96kAQ",
  "key29": "4DhTupAzGTd2bhRU5rFucWo3tRPnD2nDRNjwMXB76gau5EAU4rRWrzwAHVz7mSirZVGaqLug7YwAfDGakAZWdXhr",
  "key30": "4zkoLLkKt7eHn2LtKH4Qn24zvnDhEjbv5bsxZLDGgPzRamLeiLu2Se6MNks46etAHfyML83UD9pZ945qJe8BM8c7",
  "key31": "5AHxw4qTMKJphE4B4LMYwTCr7zmCbP9VyXA7BmGySdNJdEKq73JEqmZNKb1knYfZz8nS3ccCf8z774eJcaLxizMo",
  "key32": "49cZ8tFuaW2Hd76UkDuFfsB2oDQyP64ugZ9eE5dEffjvzXmWhdJnLBTsm2sUgNMKinaN2hkJ4xcCQDqNCB9yyTAL",
  "key33": "aLq4LW8q8aP2aoXvhG6LVq1njdqP3Zf5waZzRPSwJNzM24fetZohth91Dru5H6rui17Esxz7apL7WUAD4r88wCU",
  "key34": "2qWmiQcooZVXuJCbrDVDiSGGJFLenv1AP7o3uEYuodUEEbFvmGxwXfCWf7Zb4wBDdtACHxydw5ZQKuJHQn4s1LdP",
  "key35": "4yJJtvoP6dkSj6rsE77rwYEfGRmneg4HBzVMDVw78dagKemyey7caBLA6b5sP25kqyFDyCWBPG7Ce7UwwvVrFdmU",
  "key36": "3ZmrbBzZp2cExUh7m1Wb6afbRMBfNs5fvgSdwcwnYiNztmc2Lhgvum1FGnfRR5o5jtQyonfUTuU191cqTaD6vdYB",
  "key37": "3uETtjPA26SUH4eEvuQdggJmfgbhmC9FBctd9Vap6MrEdFD14tVCQgQXZWpZ6UGvqi3Z9tHymH1Xm4p2dEkyeMvU",
  "key38": "3ZEfpy67gxtR1cPuHEo5McJiUEe3fNDG9yGMMQZWTzJQ5V7FUc1cZeWs5b4K9vdMbxFrdxRZEgM3ykW5Y1YYPsaJ",
  "key39": "149qxVwYibpSa8sFr9wGr6ug137Yo2mtus5up5SB3WT7GLquDRB3ow761Ak2d9CTHZfqSpNb9Dqck1uHykXDe3d"
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
