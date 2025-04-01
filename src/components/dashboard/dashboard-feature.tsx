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
    "212kgLuPe2XgW9frM2zGWcfF3ZBa2fC6ts6DSWmTYVxZUTsuCZdH1xW3qzpKq7Hr3yP7ae4ds5gFayUPopesTxjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxfnoanAiVaVWjHygYos8Bgt6f6LYAvvo68EPyC1tYpUR3KDgEW8vLVsNwWgBPJS9Gk1v2PkYyztoLsYZfcAJyc",
  "key1": "37YoEDCMhQ3mb3BNvAVdtYTAkcZEooiBigjBEYp5zeXhKGBdtbKMDYBCjYBicTJ3vXfD4iAzHc4uBZKTGAihXded",
  "key2": "U8sd15UyULkmXMhBzH7zXmBG5D1Xq6iQANjvsjDVmNV3mJdbvbGj4DqMtUopGpLvkBGsA1aqYaGAFLziz7MWkGC",
  "key3": "61H4PgqACRQekGh5ZdsV3bs2e9SevaQMCsd2votxtVdtdTpPv6tJy1uP8PbUTDSbsCRDGnSJdHJ2jMZ8gGKyo1T9",
  "key4": "3NY4WxBdUeV39JJYUPjtnY5FaVraYZccKm8yzUjiE6eajS4dQSpGyLwDkAWpAUTSWBtacvkjpn1SFBX2pAP8AGpS",
  "key5": "58EQoN2BkV5qq8x3hmDfdXe52PFuQrCdpKAjWo8mUXMM234Geq2pMcpZVGZ7M6jNUMvgm7RvaQpo6dHW74i62bCX",
  "key6": "2eRWT4ykjtP16p4owv6eLLZoaexQ7HAM7CWfxs5uu5GNCyk6owkcaGUcM8U1KNvJDmVhFFSNEJnXZ2UjFAz7npKL",
  "key7": "2JT8AbXcV9JkdCcuqUFKT7FpaC1N8KkJXo5knd4vgrZteD3rFdb2Vk48U1NCG7J5VtzW2w4B1Gx59Vq6xRru5GZc",
  "key8": "5rMBrPVSbH8AJJHMF41CdeATFmyiuKvjwhXRsBLLEyTa8mE1U8nWEFeP4U7SNGhFMdAqfLHsxkpk6cdy2LQzXw2q",
  "key9": "4wBzC9bXQGKcJBt2sFHPTACdrrRqrBYHspLcUw2EWGyCiYLse9KS7jHWfPtwodHRNk8v73tNLsqMXD1LQNQUKFqg",
  "key10": "4Xkw3swAM7L8pd3rbZDhzexYGbyiYCLQbyVud2apYy1Yu5HW8gHxYGEyJcvif7nnQndF5kLV8VHkLVAecXLsB3CX",
  "key11": "2gkmZuPxEjUpQmgBr8xJ4rya7Qw1cCPZNnYin9MxUS1r7cSRo361TXGvv52xLiyQuprQH3dAYtXtvxKSXbFct7S1",
  "key12": "5d6pb3WiZgmeHL7FGG5YGWfTa5tahhdoToFoi5serEueFUxYS8m8NsMTKkETSN8LZs3iZ6ReDBwTRsDjxFvaxeCb",
  "key13": "45iBTnQAANXP6S9tYhKpNLZp4VETJ6DEg7XH8RmCREKMDaiAJVAyh24GGLxdWVFrexCKCXKMBdcvq9sSrp5gEYYY",
  "key14": "26m531kh3h1puCxjWZUSGoKXXC9pN6abC8v1tuzp9Eav34gJRstA3GVjsVQSKoeMcqKXU6JgMvaMDasHvb3QMes6",
  "key15": "3TPqRhxW8DLQyXMye685yEcRsdG2CawQ1XmuQQRsdReYbE7BmnzRAbMsgeeL1oVYjCRy9C8GZP4BFhCib7xJsMar",
  "key16": "2xpPzaEzS1xoc1zsFu7U7vtvzSvS8E65LLBUbHzChQDxFskP6QUchZGMGx3pggEynBNiNBHmaR7gCYB6u39qtQ9J",
  "key17": "2k7kprrVg5x26euu9Bje4oZJnkkBPB5HP4EoTAR2xp8h5d7d68MFucWYrNAgko9jLqPb8uANiK9k7hj6tfRgiizt",
  "key18": "2TzjPJQZGNLbM7waireDgtDxf8bs4tzFJ4Ycwavw7WB5pStbXwKN5JshXZ5Di7B7z41DR1RzN4f1GbyhGgvGroeh",
  "key19": "2hr8bRCEXoeQ3oCjXq2QvYEGthHph2pPKeWLP9JYePAq92Prg3AbSDkeBWb237yYjXRxHcRwoVudaBvjwQ3rMaZ9",
  "key20": "5DM1m1HdedC1uMaKG5nsauSB637reXQQfKC8LiuBcTgUASmGytygy7aWMTXWpxpB9FA7bJt5MFiEfcZoGbiU6FrS",
  "key21": "3m8PHdiKwob7yyfvsiNnaCMS85XTM5TDkQnX2U8auBq6mXtAcHhrJfLXh1GEYWMLsAYe6gDB49P7Xw96gGcDXVmC",
  "key22": "2t5LJbggLkCiEc71E75qFMV7Gt1htDCvVvszGeJXWehwBJAetdv37uESebAFV8gWTazYo7CVHhwarYL18Z6x91aP",
  "key23": "4uvE7CesgBrNVTs17Us7NN4XW95uUrNcvsT4QjHynpWDNicFL2346CMyf6hvfFbMfUJgy7zbSmgimx8KdE5oJW3d",
  "key24": "2Pn1G72vuzsnUUue2ycH4HkCHn9UBLSfK71hqYYnbQdvLTVb1HRPoYZtmWMMfVUDpV5ozEvm5bq9MvbuCESE1iZh",
  "key25": "Fk93oBbfs9W9nJFWHLgArQvtXaHg8poFeTY8C58PSWvVUkuoLjTTAQyYwDyFTm2mBJq4YMc9kvCA3ystzxJHQhe",
  "key26": "5ux9KTHnaRyq8AkTNdH4ty1KeLkBeiD2yZZMXzpRVYKJRW2bnpAR7K23PPCsEb5CqJ5ZkCdvLHvKEoxiCBkrwDuN",
  "key27": "5hqA9BuEabyYXcsbYPjX4KAnkJo92btEieckWWMbx85X3qGZiW3KNcfQ3Ams7ULYxE88v7KwojapuY9ZDqAPwkc3",
  "key28": "3DFxUZQCdAhFFcDnw6FyMhuFtUm5PHaX2oxqmQHUy5qvpRCyPmmBDDQom4QmYtE2pSkE9nHTw3qrAVqadKMjst8C",
  "key29": "tPzEkvccRC2Qti9RsEz5SsysYcDC5QXrfExWVt8gdgynrVvMNDf5QMjjo6Gw7wwncdYFnP7wigsjZaeThii7Q1M",
  "key30": "3rDcUmhNdQu29S7RU1TDbTCE5kWm1M29GkUCtJrJg62J5jnuAXKk5HpuiKZQWuutYQ11VwsGkZpdCejLiKYE9ng5",
  "key31": "57HjoaxaXHSCCwcdHo6wdukowxDNtn76YibxUbxYGtFcvj3Y6BPTctAUjejGedXyTqQvZcNZsYd9A6rAYYNCz7jv",
  "key32": "5DRXfGJ83Cx7VL4KW85hb6r97SyZwZUkkEzZJ9uEZCPTaCeWq9wQfBqcF2u2KF5YyBuG7NVmoGBTU8VPzRJydKCi",
  "key33": "2f29ccW4KdZzX6oCc9wvB3B5pGvFC7SJ7dGwGyVqyaRowtbFJGqZhR2XvXkJN25RAZT9XfbHLdf9G899V7sZ1vMy",
  "key34": "5GvcdFJ8pb87NXf74himij7ypTD9Rxxsrz95jPP94AdzSADRkPjXpwiKtTZgnGxZ5tRSLhwdREmRjCcqcrqDDxHr",
  "key35": "4rbum1SAAyaP1KWXJYFrZFBENzgbq5wFr48TT4nDUjWmMHqAxZsw2kYGFhnzJq3hbN3PKrKx925cuBsvLatmwuG9",
  "key36": "4pbUv5wBqR45ruhsaBm3A3pBhfZNvRg7Rbw4GAgZ19Tf5m3h6qYsmjtbvnXdoPn35TSUd8SYpAorJn8sXDJjBXC6"
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
