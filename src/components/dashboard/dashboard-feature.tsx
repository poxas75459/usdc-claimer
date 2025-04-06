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
    "AHBfdtw1CihhgBnhQKuEdWAJkKczBb6VPNVRqRVXuSpFxHa46pS28aWNiYkbFHCdSohdWhEdjCy7Bdddt9LHmJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAaot3ED2FKN4QqVjtGVXj4JeHEVu2XvKY1g8BJMkU9tEmWhpVDXWZUzn6DyX31yVbG2F1mmMm56S3ijod435Su",
  "key1": "37aMkMfGrFoYoGCSMfQ1rLDhmtrzcdVy6dQMCFQdSxzqeRvsPs2kNU614TUDh6N2qJoucDKCzBtd6iqmKjGEsHKp",
  "key2": "5yrrgVDdoVYg8jzRRu8HK4CBnuBKyb8dBLhtYE6UCu8nGEFtNVQbuwEXcPSn7FGFrZmME7gT6yoVLAtSQCrw5sn8",
  "key3": "3LEcee4JW9BHKhv3pcg3SvR1NzEBBv8yMN2YeDkbGKUmuBTkuEo1bhBrZikqGrQV9bzsKSuuvbpsaa8TiSQzHzup",
  "key4": "4zJ7uGPDueKLbtLZJjkuP2mkuRPtkK9hRgFXPSh15ff89RxUF2TdcQPsqKyo2V9Go49cETipwiKry8BirhnBupx8",
  "key5": "26owXwRAGXVQ98jZPMDH6vEx1yR4ZjyqFVa7ZmDfh4foj8DRZ5nLwkta8VTjSS7EUGCsDi947fUAY8o1uTDxakai",
  "key6": "37pMdadSuQM5jUkvwHGUo7mAiNgarjuesd2wayaar2MuRTWNBnGmnZ2m6B6kmzKMb1hsWXbj8qRM8n6UB4Hw7EZc",
  "key7": "3pSBJcUhN3gXSuoZGHDVsMvrCGZorPanimbgbU6CuD8AjRpjMjbGXWtjSnzB9PNpViESHpcP9Dje2Abe8XjgNt69",
  "key8": "wktSTxU9rAhSRktz2Nv6QsZih1MmvYwgB9SAd7G3FZfSeuEp2YhEctgLpJc7uaKud4Dwxu9R2mr2qC1dfqTswa9",
  "key9": "5RvUau54grtt9RCkoUHm9ZStmNh6ZTKrjb5XsmDN2cFrNsZeSPk1bTnBunmgUuRHSiVo6iA94vXm4cSLvB7TG1HZ",
  "key10": "4a8VQwVXheoDyF1ENjrCzmyuJDfpWpLGZzwy1cbrPrAk9yNnu2nz2he8S8PwA6EsiFmstsL6tQdTeD3RjiwTS4qN",
  "key11": "67Ty7GdKiYJp6TnrHiptPMKMmwXTZmcTm3uUPaJkVipAGeX3HUqYkuQwiXd6dQV1bmaYZdpZiHiZRodbfN75DRTs",
  "key12": "2SwiTPEGuJoQX7CdBQGZkFQckJF6eLimdMXpKiE8sXPEDhAe9Q7Cy74CvGSv3LcpdJDyQdbJcDHeZEimj4qiPpps",
  "key13": "45A2Z6KFXggNdVWnURhndSHcoESnfpmTfaH7pfnY1fFChwdGyhe8qDMLr3B8bVjUrJnjnq4WaD9ENYKo3D8JHagG",
  "key14": "Nr4L2pCkw4KrFfoPEu12kf4ip4NDPr85MnGC8sZ3MihD9NyTF2qNyL4vqondgUpzXYcZvZSGTVJNqbNHVi8EYUg",
  "key15": "5NSqx9rBrFThWdHm5mUZYRMSSs5CHSLMKt2M3aEJn6GmyDWH78N7dYqMV7bXck1mrk1B6Y4dvrqYoRaLe3N8LvXj",
  "key16": "5u3REBPmKef5f7cjgawV2Aae9T3SChz6LdUgZTTaGiAQ6NbxoJ5wotd5CvE6ZeLNNdE5kY9myk2YpMSUt1w4tip7",
  "key17": "2CD7goQgh6E93KycuoBz8n8sdZdhvxJZjPiBrE4XDWUAu17KyKUHhWjCwSYaomjAv5qZZJvaiRyLhZJmSJwm8dJY",
  "key18": "3qW2XnKVKTKP6gs3tCX2ErtSvKEFEqSajwu2PXnGriLdgjF7zPWYWSKRZy3Gf5brnHXGaySo9kZkUfv1XQbc9ZXy",
  "key19": "ERqqf69oTLeo69TKcgsX9PMm79PU7QoUD8pLrUZCiLGT16SzkhkgMV36eSb2GykHXY7V7FRQ43epJKmCofXmHhT",
  "key20": "72SnHU2GwzYo54Q1uKtwyG8vo3i8jvhMwW3ZYQrUP5Sj23gRgDZtG7sdhK2A73XemcB3yaWNYrsoBgj5vFfi2eh",
  "key21": "c35xcgFhAhpjbtm4efYVgCF5LRu7nCvBYZYhU6mYx3gaMdk2vrRTbecp8ekpgJvz5L2Rn3xqpuUp8wESbKQLUEd",
  "key22": "2ydDmMWJ86BvBe3AFkAQg3cAu2hf8YnFTKsMKkU63idxxKroycoQhuGF7W6ySWG4Tj3xSG9S2msJfv5kMjJ5A5TG",
  "key23": "59SwvQZ4Zd7s6W8Z2QG8HLJy9qyQ39b1uEfLfo3VmgpNGTFQC69z2mkLAGGdMQyYT2Y93zD487iNNVciipYmjrTo",
  "key24": "JXMA6Tm6A1RYRmX63w9xBPnkJ4vK8zrj4Tut4ZQ4xkNc5EQ8HtYZGMZUj82e68evFwTwfVC1KqUw268b9nP8HwQ",
  "key25": "651bWnSip4fQqsNy4mDcH9FvrL8XksfUCfG2kDDrtqz9PmxBehar4GU1VqupqEB34kGDEaKg2HynwNSFcfEAxUuB",
  "key26": "53nte6u4o6Nev9a6htFQc1bR1WyJbHxscg5u94Fz7rCTRdpSfZ5bYfwpDrc569wSL25oXWVnWAFNBV8RfAJot31G",
  "key27": "5X3qVpaf92dkdnYMEHzSwpe5BCyNQ2P8PffQtQ9LCh3pcWhT6k7dUu8Vswcwm69cq4vqDvsmQL6caWVC4X8YTJ2J",
  "key28": "rJLsxBABAHdKbdWa2XDREmcqunhQt8U71yxVy5aGntdKeWRPmStoEHcBKC41QquorW1FuMomX3bz2FNgAeHyCQs",
  "key29": "4Uad1fNnc3YMzXxUazimcheLVv2pNYDQib6pgdZkxrJr4omBjkdqB9LgWMzbU8aVqnN5JN5mquGMR8NyTCmAXHtE",
  "key30": "2EhTHSWqpUjVcvL4Pjy3oX4k1uLGTjtNhZpsbiFNmFxGfyGCGhx4TaM9DHN3pECw5V6mcQK2DhfTn9mZ5DqmtLCt",
  "key31": "52BiqGL74fyjoVzcn6PxXBDxtyhYxxGqcv4wijzFy3SQphgMz8XyKa5Ppq8q6p9TNimKmECui8ApnMexTEhmMH9s",
  "key32": "63BadqDbDhpvjBmciL6LVB2vEKR4CZGXjWnH88Jh93Y6L8PdeDo2RCBx98y3HaqVc1a3evMogXcQNyRLRp5mKCT3",
  "key33": "5zhcfGMCigjdoWwhnNUvqu4ea7ysVjhV1crtXuoWLWdSzWSBUr9qkSN4mGjpJKdfSpU9n67VGgRXZ1BhLx1b3CB7",
  "key34": "38WudqqjiSHHgGyg7gW3usnGqhuDsevhyMtTZ4vxxgr4Z11XoXx4Uah8Z4sM4pH7qMXNLzNwt5Vy8fXiK7WZinzk",
  "key35": "3BWYtQdRjydEmdvtWGP7jemPopL7x7Qjuqyf21aM3LHkuHYxgAqooLYGcqYcRy75x3QcY9kKGhoqLYcSfEzw1FAf",
  "key36": "4sbCpUmPJfPejDhFt7C5gUEaw8ZC98xVFqYQb7JH2yqUihudmdrPM5fFGZBpsRnzcnMG6kkjYeC7MSSx8EgBqEGL",
  "key37": "4q7by5cCE8SQxL7TpiyXrkMv8sPauLGvh7UR1KmHM7U3XgFAmZwfn1HhVME9vKxG1PT5DDbo9o3iEoPfX4VXmYkD",
  "key38": "3JpVP7mbvK6oXPTC78XDfSJnhdzZEqNQK4Vydb1R14abogK1qxxW5pJzVMR7exfWzTouCHLfGgQYDFEQzS5FCKxu",
  "key39": "4yL4NuF6hjQTN9Pgz29rMTNKU76w5NHDGyWi2M2UidGCnvsJ5XHpgrB5n41pcngm26D4NH86dVx8Qi8FXyhnpeNA",
  "key40": "22Z3aEVtmjDCcPNV3VThkx6dfMtX9hUHbvMKpQMEZzWu6TQApV74PBZPM4G3QaAf7CQpDPJTPFribkSc3TZ9NPDZ",
  "key41": "5QTPLmEW6saJKnXWrudW9T997FuqnjH4ENYR9aCRCUxppMMrv3ZBu22U8d5k8V8twJiNqqxELs6aTMFUT2yE3GB4",
  "key42": "2LixwHpMQiuAwNhce5ABMgioFzhrRQDuTZQ2F5EPjHqF1TDyyejyXrKxwa9QBU2jiWU9PZ8rpi2UKEsPPCzjx4k3",
  "key43": "GvBkBnkBJeNtytBfefZ6asgrT523eMhae11bCiwgkncfGYYdvePMDrYhFEo44BAqSsGjQ6ZzewMfKP6KfrBdpF9",
  "key44": "fo9Rx8veebSZig98ZQyGZhrY5ZtYyxpuVsE8aksMHchoH43RS73gNMxu8owFCi5ce1VaZhPxJBirVAohxW33SfB",
  "key45": "33ggjCiFbStA2HdWvZ38f5MX4kfC7EMt6D1mrM7D4CMFV5womxAYuUxcw3DhbS6bK1huqrWEhnZGz3e1zBCynJ7m",
  "key46": "5ro7DRLV4TBmLQazAbTz6VEhuXfcTrSc4nPngXW2yxZSmbxxyUHJuXLku4JyPyoeutjm7o4sbkbBhpuiPuy5pDWj",
  "key47": "4nXinJED2pnJXnnSZ6Kw51KPJkHNyNgF6MegUUNztZLFAHK7RRuwu21yEw9Utd7SnuDTFByX2Nj1wKLt7qAL3Y7A",
  "key48": "2cS1u9uQGGXcpEz5c66rnWmvx9pKb39Xf3QsRcRseZNkK3kSpWuRT2m1ijux1yGj7M6DD9AVBtNShPuo1bXWTi3H",
  "key49": "qPLvjttgaT7rSCxLsm3oWAggyeTL2shtkHHxdQxrnsXGomTqxCvibNsxrDAsoXQt5Q5ZMyt23tjwPD18jeYKK9T"
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
