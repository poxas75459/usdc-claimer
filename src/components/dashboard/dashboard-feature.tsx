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
    "2rzwxH1TwZJ3YCnQ7WVyYbbVWB6LZE1ckwxeeegkNSWbHT7W9315g5m6UUCZRi4NoPTR6TKngmBissqAG2EVdUJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r7iXJHa84Ym4SDqChXEeZz6ehCfAQm3uVzpvEFUWCLANrpFJYQBdnv7PtwmmVptiwAtnJHrP4VR9NC59SDh2fpY",
  "key1": "39xBi4JNBZVTBHjn2ZnX3q1rrNci6HFn2QHQYbXEjpkFk4mxMBvNaRjhnMoNqavYcxz4rRkYMV9x9CQHZVfGfYA3",
  "key2": "2mxVK4EUW39fZmCVRR95EM6h8D8iNsH3L8S74bZNKyHCuGdCEiecky2Z5ny4Wag3hiWzWnjJKvKpJEMqpPMRyptP",
  "key3": "3zC7iPWxv1siUCXSdGGLKC2M1GJM1hum9P92dQFbP3wwCpxRfxRPNNV5poKW8ufivXT6VSHYUcADxrBKTWJd4xqd",
  "key4": "5nELYwr7zsbKjZa15nkZmRKdfALQbkX3ofzLvRfYsmRbdSv8o78zWhL2Ue9MwrN6pQiuJpN26Ww3qCSt9DB2n1nx",
  "key5": "4qFwVqYmBXZ13Dr6ZMqJToWiTYJezfev5tdTtCLxD2aN4TtWXZdoS5pT9rJ6n5Ps2fn7aiYhTnUoJSmirUGWbxuX",
  "key6": "2Fwhmekd4zP3tuQygKzDYscfHsyhhWbusT7uuwmWKpheNAuhw4F17SSFz5j7QAFghZrYZfTFsgyK1391Y8gMM9MG",
  "key7": "2Bd57nPRpdqqcRrmtE26QkWm9sGZX6PLqPhbzNHwiAEZd2gyzPu8C9UWv6G6M7N9BhqbHU4VuJjZ4Ab17wLv7jyL",
  "key8": "2X2NMheWQe3Vpoc5aoRxwA22S3FFp2Qai47X94drVTyELKDRaUKi9zSGj731oTjbP6bqMtJsvvQrG5cHaYa3kcCe",
  "key9": "2NrBqqNg2z123g8vmPuR1pEF6F1kQNaExDBHRaLWLpdLRqMKFuhMPEWk4yPRWriZgjxGxby1oqpxzsb3KdKaaEYG",
  "key10": "3oFhMEq3gz6K81yzSGTVXoEhhsMrQFKK39PPs1GTjD9zJZFCBvLJL2eVzQPq5qzALriteeTpKvmsgM9q7WFE81r9",
  "key11": "2WJjm48cCeeBFddog94TsytqoMWEroJy4iX1XRswniFYYhoHLgV5zyN1YG18GBtVFJSDHqdf71dX2oqBafz8uAFf",
  "key12": "4qny1cMwfDWm5dYYbYKu4nJQ8ao9ic7can2hYu2aJ3xMvUBmqqwwk5iQVUCGzwjhJYpzqVxvb6Q8K2hvp1RkrqYF",
  "key13": "2owp38dqNduXdT7Qvf4EhM7eHcrSTfCdcKUt3XhoLD2yxkQPPu5HjURh6MLyXAtGan76VDDgzWUecQ63w3r1C93n",
  "key14": "4SQToR1eS6daS7ZKLuGPVq3W2Gjt9jeHgrZoFdWx6q4Ck4F3Xbzx95eJzvRK4AYEaDPS5fH3tXHNdJMfidKGCYmd",
  "key15": "7gtrnvEhdwCGNis7tHyzhzrLUt4y1MxBirwACFBi1YxV2ntBYgjF32vRxi83nW6XmY7Ftr1cYXom9URXuK9c6KV",
  "key16": "369K28CfdZuCtY4khDoV1cV889sVMfn38J34f3632fg6vQYDoYnVkwgWhUTkq9S2rLCnNUgGAag8Vdhoyhm3mhrB",
  "key17": "38yVqDuQ6f1EWiHguwTr4vf9c3DHHuXDFmqwgDhWPebeG539ygT3c72Hoi5MrexJrBS7ZnPts1hqJJ98DEGAbuZs",
  "key18": "2ymsn6YqcKFWJrvCGwYUDDCHT8N1tiweUr8rs19M6SwD8pfXg5uYEJdRb1LtfyeofZGCnP8NqrNHnAaMztp3v48J",
  "key19": "5sgEeafFpL9SmM7SjFSQrJYHtHCeRuDdhjR8XdcuLQoCu5jEioizE3cPUzwpA99xwYKhADUYWfdHQU5Urkfgc3zH",
  "key20": "2MHyqxiBH7rbEkJmxW1LSt8824V3SqGGExHyNDwU4oPeQCEob7YHMzHaZHqtXnnHxcitTqGLoAGe9edBfUN51BGF",
  "key21": "63oAMx2pLMMDrYZSNvdW6X5ktdDVrAUT3cPVLvn91mLKZKL1mhyrcP88w359W2JffajtNjqh9HtfXUG81rx2FqQH",
  "key22": "5nCqdSG4YYe8BEA5vftmqS3K1pAirfg9bwGYx4Yp8Stp1PLne1j2tHhnCg8Jf1zaJHdyCqNbXpB2Vx9USEjgcBpB",
  "key23": "3fYNQs2b3zC1qgCD1rEYjAQYp8K97yQUQ1xdBZFxuuoH1VfixEZb31bzM2tDw4xWGu3bx4ExcdkWWYya7srmWDgN",
  "key24": "px2Dud44rZjAXeNtY2u2ZRt6Fzw6FKdAQ5RoZWTdNNvBQ6EdEc49zCaCnuj9Kh5Re3aiGcLo3sn6toxx8reM69B",
  "key25": "24thNc9uGQbraoTE6ydej1bpSGFcGcKEJjBCcNrWmqjGp81BPu6UiDrJxxpwTco9Sna4QNx6MfybnG3Txotekyk5",
  "key26": "5HQfjfDAMjvd7ZSS9upXMiTZH8b1CffGK5ByrD3V5WYPr5FPRDCUqNzxJHjpXeAPs95PHDut6qoMQ4aFaFpNsGpR",
  "key27": "2AhERLXezi293REg5HJUK6WQoHbwtFG3K9QN5ZmViKyogs99z483W3LUmF2NvQWE3C7CteLd2yP6EMCwboVjKy9A",
  "key28": "5beb7SpSbLFaD1egZasRSpzFQ6FTdNxiDz4HAmrjiXu9zap7nitQZ5muKY6UZFpm5YsF8cagsN7fmzyhhHqM8q7M",
  "key29": "5Mg3YTc6Dj4yJNbNUkEEs17RT9PrVgJGw2KpykhTtjgu5prpagKwKKPX6KqDgoDqthfNnY87dxEaqv2ZMSPvQyKd",
  "key30": "DJHAWD9U7B9NEScMD6reqFqLJ2BUQ1cZsJrLHWqRq6nRMh798zy1CBveSYGKycSn7D49jKifyMsDhxY9d37Cg4T",
  "key31": "4znWWehBfhSWEDtJDmETawoDczeaxDm8BsQrrt6B3HM1igpsdXVe3E561aU8g6rbfxs3mWpoJfRy4yN6QWoY8mTj",
  "key32": "4EQLDLxbBRVnpeZMkyEDHjQaL7VCzmS9UUyr9iCghAArUBj4kaMYJkJdJ8jRLX6TMbx5RoFqcG6ujLC275Y8aRnT",
  "key33": "2UfwzxDtV7k8zkh95Jenup4nuU1Tq5pudjxHnQF2H8oGvapYqrnWvtqfVByPKGaU2DvXur27xEVux5d7UDWrFGrt",
  "key34": "mCUpw47gcXHCWhEgnmPxrEGgeA87B9vt71ad8of3qTN8XhY7DC9zGjtMpiQ7TUV9Ze1MMHr4MAL5RpMdcytXnsq",
  "key35": "2B5oLDFh5QjyikCGvMJZA2ehMmWu2tsnRkrSR3bQn5WTs8mkmShmAxPLr4GSUZdeEAMXRLauhs7Pa3Dz7kssdThg",
  "key36": "21w2MguPmD3thjXGpLN6osZjitrYJRgzdHL2RcRDvA34WUMKQ9Fvnn5dujMYxmq7Xb75dZGKkYLsnD2Wo2fTmH2n",
  "key37": "Fp9kA7HtbdC6P2tbeakbgNhFBYXuYM33ZvBjZXbFFJsrMyicGZE3xobsRihqbka8Arq3LGyb1pwaKW3esNvFpEk",
  "key38": "wVhvZNBiRSqDcE8LVHUMjcbhVTYnVpQj3VkjKYqdFpEAXiRCZM4SnpXef3PPeJZ8DNNUrXpmD9VYcHzofv29Vzb",
  "key39": "gZ8sSTphirdg5pGYVsP57tQ8HojMdys7QCZ3bRtJMrixf9dW6b5dmzqEXH7DgTuCJJJXUbVue5xmqimH9Af6h9i",
  "key40": "5oo6xbbmeLiEhJCmEz6SfvQdcDA7873BDW7mdAnJS8d1r8mHeCc9yWFAHzisCeUVaif9Hmbjx5P1TYYBKjXkU8yc",
  "key41": "fw5TcMVKLzaoVeVfyi1tsHi1cs732WdFXzHK6zP8uV68Axm2Xq8T8Y6HkzQtsxbVUuQWf6aFYpjTHh5Eake7WVo",
  "key42": "4reURRKYqwm89QxdDMVSqG7woi7jxiGPUpEtePvgPsK7XcU6t3oiNLAS8nK2gm5n9Bhp1B5QbhoCtvo8G4wh3Q95",
  "key43": "4Vv25JfW2gBu6dtnftpeMxghAt5E2pSLakdao1eok16ogS4QDSpxo995KvahWZZyXZe1B5sMAic3Vcf5jGvpgEWX",
  "key44": "4wVgCafvmwnr3JsKdXy417A9NB5XsUvPcLkT1WSjE6dv4kpk9UBVLAJMevZhE3jo71TkmKGfv4QZtGkaSd9GapT8",
  "key45": "5NLU4wLcgGKM3t3edgjGbojR8VDjvSPmLAL42Kn2KHCot6PvYaqq1s1JtUtYYR87vgVkQANjTYKxP9SNYpQ8bc12",
  "key46": "2seBWaEWqLipUyvsaA4sqv3ML6YsKgEWk4LPiXSQBhQtCVWpDrjsGx6cBe9ftBaBh5H4GgEPbwrXosuSbMHgPKxf"
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
