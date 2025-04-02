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
    "3pYc15PSq4P52B9kPjLPB5bWKWdJgMB7AohAAGgt9ZLt31wZCan8YA3CHgWQKjXEUdgruR8Y3KjCbktfcvRWnKgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Wqj4CH3KDXPjZcnC67k8ZApcrSgkg2ddxaUF4eqkVbseBSQVbJMz3BatVTA47KrQHumwcd5SFFKiEQqQt3Mebd",
  "key1": "4nfzAJHbYRgtLLiuKehPKwfyP7rXCwekMm9pkjSLjjtmS14ctXeKQ3E7X2e6s2EgEZaJsYXia5QvzWpUdgF5XUpd",
  "key2": "3vxp6i1g25tKX5xYVieUeXXteU6WkAZQm2v9cXMHZTfgsuFdBhVMMTPwRB4RkKGxGUEvmgVDPLkc6KYf4MfbSc23",
  "key3": "wwLvUWTRwqkorHQVFV7yvCiDvFtS8zJMCpA3KKfbV2J6K1JSRrX82N7k1zLvbMEMQj3u3L6Upaz5RNWyxZuXpxZ",
  "key4": "2F1nMxYS1Rmt2xZbxhRwsDpDfGPweY9d4aDvZ1jUJLNNcEHoH6ZkX5tqPPNBYrhZQuPxoVz4Bhr91XAL8EJdRmpA",
  "key5": "Y6numCL9sCzstJsZjXxgVew5cLM3hCy4PvXCDPtMX4AWvb4qtNmBTpTaZXoav3rfdrHZsAUnCc4F1hn8HNAxytj",
  "key6": "2jdchsyh3xAzmV1Tod7aPjfTRaoMXLgxoFQn6qcji6DbJmoPbuiEE6sRC4CMQBKKXUqNPCgL7H25isRDFe9XoJx9",
  "key7": "443GdAkZJcwwCZJivcCzXjYwbBSYRGexTuJpKGL4Vh972F7viRdJaS2YXvKPmtF2sGDvECrTziEWBqS8csaRkmXb",
  "key8": "H54zmTMaPfqFJAJKeeYy7ByWrJRgzweA9zptY9PcYV8bGYDcekzg8r2Xttf1PAzGjYvZ2EpvuXkqRcT3WmYsCUa",
  "key9": "3iyw3xh6CvQJACcxDFF3QP1JCrV9A1o8xjWhZzv7h47CXqd5LgfDnmET3oonQfM34XqYqmCUY1kuwtSRKjhhmrG3",
  "key10": "3hnvx9t7JwDFcJWtJqQTQv41r2XkkzVtsPJ4WNdNt6PL4v3rETY1AnuTZ6gLr8GFT2KeSDesXjZdzoUtkU1szd5u",
  "key11": "5tE24Rmvu9GyhmftJgAjNnFSEZSVfn6RRmQwVoXyveRM7kRXW9x4zYQa9gUDGPfq4kjvjJcoT6XmThUSzF8tJJfd",
  "key12": "2ZaAPyKRfsim8nqAf5QXTHij7Vm298UNpfp4F65bCE7UNwyVqNar3V7PRC4ZYjk6qfRrUZEE5a7mPg9jF7ofbagZ",
  "key13": "2pDYk18iGMWc4F6coSDmN512DfDqxkxJtprcGmujvrstziFCJrqY7qEuwLEhFPXCnBVqhUaMdSyuAPd7UCBDeJV3",
  "key14": "HsKGscxx2KkwKJHHjeJk4WyHDG3YfyHwLkuPewxvoB8b2mMUrSvaf4cKAbcSFeJhodY3v1buCYkFi4ppnNjtFNb",
  "key15": "TEHEN6NWPcDUpdUSRtyJZnmWXqkcZZKxQV2igYMEQ5e4zKfejHTRKjXeeM6SKnPcHvMCQs38bqCYJdSBvxHKUZh",
  "key16": "v7PMhsemzQ1fnse9qoVVjjpr2ebKNt61mCqNbkWQNMrUc6qiqNNdRwExNohBB1wMMBuEwND5bzrz2V69BroJHam",
  "key17": "2De37KrtpkUMyAuE3Yw1CbpDS87FgymATSMkF6Ndmn9kVyaEomYpfvMSTQx8D18XgMdFQquqmfWQvYBV8KnGLda",
  "key18": "2f9kNm6G1EZWnoo6eo1Ysypgj3DB3myA2gJZYKoyo4g2X847AorsQoEw2ntcZr1pCVmim9u2VxAgrqCaLqWpcQdE",
  "key19": "385t9iu2Xu3UAWJr4YkpqRwwBkGuvVC6oayx7S3K3LNWBWjjcmfEDnhQmL28X6BjPWZnUsJ3WuZRVcbQsjNZxUnG",
  "key20": "6Zg67uZhyJpYYXkdkxiLLGyqa6iNEr4VHceSAse2cZk6GC81NjqTM3Qc6gMt8ZzJi98GkrXhKgNfZzkhWfAPrpS",
  "key21": "5Q88nPt57fTE5oaCwNc2GAm6RMZwuVkDFP4qJW9gKDQhLh21jchN9nU8TXJ6X5q51ZB28DhCwXVAaCwQP9EBNqrR",
  "key22": "5Tq5NDy3Y2f8NAr5u2zhhuQU6MGjr7iufzrTcVguhHrEBogYx4NEhVDUKf4LsPKcjyp7w5xrCNswVXEczSfxvXoU",
  "key23": "5MGqJQXmpiXNthP1gPm1vejHTJgBbWR1sdZDc6ume9k6g2mYQ7yybGgtKDNRdY6mqfhKrFAPYVkMeWC7oTnzQfcH",
  "key24": "4qbvuLzz47D9m11tordvjPnWnwJ37iLzxeMqyV2Vsaji2EV9R4iaetXvYGn6agHptoBuAj57rXnNmgo4BbaCN3ab",
  "key25": "3UWwS89p6hebzGWHEUmv1fKkv4z5yZMDm3ibSKp2HKShWWUBYL3aoc1K1xU7nXboitxWvQ8EaWSBJYHtedGvnADm",
  "key26": "335AU8CNvkdbWuHqHTqoxqsH7MJV4xRR3Y6dN9Ugtep3n9ghBeMnLyEzLqST6hpDuxmswvzDNNo3YsXELKXaqqVr",
  "key27": "53nP783yQBeBkXL8weWwCUj8fdxqsUHVkBg49J4hMxALmENk3c5BfqxTkTpeZFUgsqb2VBG5RPdnbxpMoiig6UuN",
  "key28": "4rxzKrUyhmcTMXwhH3zzjvdcxrMeMNoP7cpZqn8QYkVQxuiFEDHWWcC9U56ch7zQzP5xyiKPR7hbTT694A1BokWU",
  "key29": "2MabgzYkb4uydKS8rJnNM9Cn2SJXimtzeJH71bubMf6fqwTEdYGeiWsHCBDhJmVKEhTr5tATvs3LXGqyocdL2uyT",
  "key30": "2F1EtKLREuwuSPecFpstUXriNAfvgqBsKr4z4DYasVMvADbzBQ8gL7mpgYM9yH7Ti5jYApDz1m6abMjrbx74Wa7G",
  "key31": "5EJ2mmn7fmnqrTivZSz8oYeeySo5UZwLKZsqw9vs1UnKJfyVoV6JCcjmFjrGbNDRubdhJX9YVAFobACzsqGqpquh",
  "key32": "Vwc33AtoJK2ecBdbiRxCwV7GVjALTFP5WfRm6TnSDsuCn8MqARxowzUbRECiQLURznwsUqZ5T6v1Kk2nko7D5cN",
  "key33": "45VCmrRKVJRRws9mGHhM2WP512oDLHxUk5xQy1xnQXSaF5C27Z7ZBbCHyQLVgNug7CaRjdxd1p5DZNuN79YamHg1",
  "key34": "4JKxfzosAYHVFW2Kq1DXeFjHwA4eZcfxDDLCLNv9Prq1ZMLiVX49usqPFF9NAmwbu946eWguqRSgFktfbZDRWTbP",
  "key35": "2LahUB2RH32cgNBKRfQWZqriyNwaySy69hJnQJCaFVWuMhM1ASV1oCsCGytJ2no6gJSLVrsbq8FuMMot8ME6SvC2",
  "key36": "QHvEzwn4yFfUFXh7wgup2M83PWSbW816MqjLz58M1BAjSKCAo28AFNo7j5aZsaXkeeKYaNVPiDVFynzWbzfgB5e",
  "key37": "4t4yGudke5cnryoyJvwFBJihj9ayDdMQA6ZMNMkX7Ya99tsgGLgNgXyVPEobgfLPyKT9UCGyWPhnV7CoktFtM1RK"
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
