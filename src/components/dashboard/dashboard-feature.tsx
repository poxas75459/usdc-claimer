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
    "565yJPbP4X2Ackp4TmT8ULJBpgB8WJqzRwogCyuyKPFF27hZU9VDjFMJHCqh8qJQaRvGeEoJ6E2gkvc8rbMMWvvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bFmNRqArznkVLcgAkrHN9B5yDALdo3nR1sDRyqEJyCVLowZk6e8FuP7neeH9G6raSFNk1U2pTEmowmvXRBsiXW",
  "key1": "2L3URUtYnkU4dfc89qDjthUw5Q3oz9MdcQZej4A18wiMQn3di8vWBZhQF8n9wMqFfPzug9GMQj5npXTRUJzubL16",
  "key2": "3fsH3trAKMohzEcRMUei5vW57pG9aqTUA9xyv15HEh8hoW3Yofh8k3SyUAMu29oqYysthXtsUnSz1jRk1FLQQN6T",
  "key3": "RQdjmSovg5mvHS8VWCX2R6f8iAjNuMcDNSE619817txiCcPUEDqQ1hjmmBz7swqTRvAsnA9xMqPsBXScj1iDpp6",
  "key4": "3ZUfa8Wut4EWz4dkg5CG9AsHgkenfK5YcuRLSDyjtfQGABZw4wdd4165Svg31ZtxMmcd4gjGvokfehc5XyPiDDUh",
  "key5": "2mvTkNKVubqT2xYikSyzTRCZryf89ANMyvYdeHQ7zXwqQA5rbYkYx1gJcp2JAgTVarzsKJso98kcP16moQSvCLN3",
  "key6": "M9wM198xTedF9aPy1hMSKqYw7VTzvwdy2qnE9D4VarJGbF2ix4ZEWQfocuvDDzcnn83cFxPcBy2amqtKdUnYLeT",
  "key7": "3dqcjqy1nAuMLnywY814hK5RvnbtXuCKb2NPBB94UuwCCzme6uoLU65S5n1oMzNeJ3eX2ZLY2f2BLBMVf3vR4HBY",
  "key8": "3qAR2Sj2923qfWds5tzDNeAU5hwZPyWcyRffweqAwoKrrEGYjsrUJczjc9C8hKm7JMBZadW8DVVAfkM2kgAPErdN",
  "key9": "grFb8J7acR8CyUo3au9ix6oioUNgHaeYcQKaqtermeqWzF8eUjDBR4oGHeWmp1qhFnDXWgqemdLjq3LzbqL67Sn",
  "key10": "2ZYNJWvwu6KtcyXfoJVsmXgs3Bawr2hbshSSAFTrBcNGLECGGVF9YA9SxvN6MeB317CRVxi3gagJ91zRpFaHgNeS",
  "key11": "3BhgdjqfyY4367qEkYwRgR5hjEAZsh669Tp28XxSebzysq5MVnotUw57uxPQb9L1wDeUG82GFYvkD8nn3Jmyq9Q1",
  "key12": "sNuo1jCVAxRzTZ2g5rfnkv7cSU4vBmE3H4GpMD8raFPZXEq78F6BEK24RbK9icjvC69WWsNtwUcTe28TYupUkcM",
  "key13": "3gep9NPugeSrGaW8mdfebPRxuDZDZumkeReXcioxMjMDS4yJYYCxJsG98pRpvrgmXcuH5rtXvuGpzFDdxFSn6xmS",
  "key14": "4JdGj68K1hxz4DutpbVU9fNXZ3UzZMSM1ZHjDKkdXmwyoNjiGSq8VVonapdhuUGYuhXCbNYxRYf3NaUD6HZdouza",
  "key15": "3TJ2Dmdqt9QQjzqSAZsE8mpDm3Ce8vz32ZQ7zewMYs1TqGa7w1ckvcPXzN3qDh1oeVdimwxLiadSZiTRRA9wUWt2",
  "key16": "4ZsBfNVAFH5yhKpCSEZtHRx2gQ2y2BG7ABf2keMwqPHS6mBqQGLqQ9vNzaeSihK81rmLzvqHh9PTygRDosDjS8wN",
  "key17": "3Qqa8jcpbZtKwfnz2UPeHiXdabzcgcvjYHxLyxPo2aP42a8bfVqNmdWgYbkjgBFnp4top4KXWQcqshNMBSBfWc1M",
  "key18": "yLseptUJyX4t9d2GKRoPnahGsssXYWFYUbwF6ikF4kw3A9cRfsHwpWAXvZGkbpU6eCxuCEyJ4TJuctrRmfh8Yti",
  "key19": "2vzX7Q3AE8idMTXsimqwYyS5cZewBfsMFqBBKqsUadTVguYhiibHtfHtCMT8xA2BnxXUu9RAvnwtRP7ZSsJRegJj",
  "key20": "23c2mQs8e8KejihFZwNYAuZNRgPn7xmPEcNnS5V37DXV75fc9RRzLUEkoDMErqEeMd2wkR59hM1Bigr781broW3H",
  "key21": "jCpajbVdQR1YEV1B7ZGvVJ7jgB2QAcCt7ezmr6rriB2zdwxgvaAbaFLg1HhVXz8FFH5vyTJEnin9mfqAw6gLpUs",
  "key22": "51dcoyD8ev16BkWu8xZyEnf8Rx2Z73w4ADCapskCFyASZ2GZX3vdfNynFWnpQ2UVJb1qwM7X8nuV9SS6i54aXPAt",
  "key23": "kGAmtcdquizQyfo2wGbRSUcZpJrkhWE5dy2hz1nPunmVNTv6DfnJ3w8hjdBRnfnuYEKWa5wjchwTiqZtMLDBZSR",
  "key24": "2BhKkRDUeCBzZtSmZuUb34G56NTKqPhQPFzjVeoaVcHZbvFrqeodMheiK4rBCsdRnML1naoos9dHWLJbk9H4uac",
  "key25": "3PYaPXs6HSPKTBYaGWZZTkQSyjFdzmodB6YrGUwKrnaQWmhwg4no5GLbyNVKUbm4aSyt56jGiXYJQ5xa46pLypDc",
  "key26": "4fu8CUsYzKDjqYRAVKd2orpgUsDhPxFysgjUPiZqby5dsgSZx94C2UitfhCZaTNadof9UHw7VRFbM7CNWZFAN17a",
  "key27": "2MnfJzdsSHtCfZicJcKe8WniQxUK6sjK1p18cpUjZhCFgWxxqwZH6i6YqRP1YrtqY5aow1orKBpbVAcvttcFxnX8",
  "key28": "2975Es8gQLBMBwZjH4DtcyJDXtVmf3mNeZDgr8EKdR7K6Hx3ncT8R6M5gpodLuGqQJUruEmBmW5D5r9A3CvAgn75",
  "key29": "oxwhkWdWwo1SAPg8kiKzZ2SJTXq6sgUbUiG4r1a5uDfikqEQp9eaM6MtKkRRwsnBdxLRxBb4DoyaYVJW3vXLcCa",
  "key30": "2rLqJAfoN9Ws4VADGEFUBMKsZkCBomVZFG7ALqY6gQwFKSECFhRWbEpgvbnTNhEymkWb5nHwJ4zteTnNSkWJQ8RB",
  "key31": "3xRLh2QJw3v43qdCpbqLA6twhgj2yatUYssrufVsEZ1AZdnhFeuubN8njkLDuXVEn1mrvTA9Prs9rrBXUUeqAfSi",
  "key32": "5PnTFHkrsrnpLrJCGVFmtdj3WeYhE391rc9HhXctcPt1vZe54WsyqWXJMwkarKuDtBgqN9Xe7QHuapLKVJHkTzNw",
  "key33": "B5cSCAj6U4eDQvX2TucAkZoBGraNLk6nzuiMkofrFqP5p5UGyvNaWmkeBf8cMDD9ma7LVKqqrPSQYPvUyY84KUj",
  "key34": "2VK2NEXJJpHMMvNwWz6rb5kZaU6gqTVdmbFU6wwqDgRBtdHE2Hv5AtqJXGtX8Sn8BH3h5dxhLbzPYQe3a3K6RDQ7",
  "key35": "2JcAhJeEvcoSxBgeULVXBc9ycYMqJTYcCTksnLxgEJeL3pF351F7scPpsT1Us1zjiJAcUXubwoZkaKzm9qoHHRaa",
  "key36": "zK56KTSseeqKF94wq2njbzy4BnYpzRVksx5Znuz72Y6dtKYvyRobhxx1ZJsaeYEEb4DJdZKCuN4bYEPoJD62t3u",
  "key37": "4pLTPLvfMSWT1o9KF2zKVyGmL7BMMiGziKS34CJp8oJeqS4iCYss2jhbnNtt89dY6GNUB433V7N7xiTXj7Fz4KbV",
  "key38": "5v6hRQg6Lh6ZZyvFpDBkboMoZ4TjSS3nktP2FTx2g4tCDKWvpGBPeLUVVZJSKp9Kb4zvrJKrw9jP7agtuSYcWPtf",
  "key39": "3vt3bmrNzZSjLMsG8H63KBJBw19ncn982qKevChmWe8mZuhnbLGQeHjFjVKYCdkJ1uCRBeiXsUx1yYqf5iWJXUMG",
  "key40": "2S8xoTNxxf1jEgtKHYTxSYBFEqCMSkKLgoHipB74yC5dCtUBt8SQKNauXsXBWKY1VWxWxJEUuHTgS13uRU2MXHzU"
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
