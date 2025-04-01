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
    "2kqp3T6ugaieUeMxfV1nj3GxDbA55uwka57MRwaQfivBxSzMaNh3YbRv8kH3aPLCMkPrKp1jVPn7j6C9X6MgXowC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBFPiAPBsjXAJVhZpYvYVSf9FZ2Huat86hJroNEUGSD5XnamoUzfasMvq6rHhhtYi1cKUtAz8JzVCcJ4pSW2E38",
  "key1": "4hWPa2nxP7QcvLZYR9Ue4VuhRcaR4eytdc2tvo5FxmpyDTrnUx5ZcVux3Dvcno5KEHgaZW3NdMFSHQnnzTmU1MQW",
  "key2": "4k4RtH8JqAPpmNQxUYKKHXqV32XNUxBpTSCV9ix9ffncPWi9JUK6Fgja2BXKGZTeXLFtwmEeQny2hTKHen8Tdxd9",
  "key3": "2Ao5vs9YwbppxDBRqYE8beBAVD6tGr6MWrt8HgT3onDRehzixDQRKjQ1s4ZJbHBfoWcSKB6XUbK2wn6PDxybhaFL",
  "key4": "AfFzxqyiypDNrpLhxisfcPRSR9uuEy4SRDwXSvgQQMNNttnoGfPqRouVykzMju7LmeYVZEyQu9esdLhm1jjv9A9",
  "key5": "4WqfBBZsf8FhDiz8Qpo3PMVbzM6ckA1tYBCoRGLcV4G9w6PJT64G8SCn32WGjX4NANpne7Pm7xJ7dH3PcZwQ8QFF",
  "key6": "4dr8LJeGxNuuVhW4fBNJNaFQ6uZocvcDmmP7H3JkositSLyqCTsfcuYM99zKxHcHLcFAZNN65nLYLPLXgopXQZb9",
  "key7": "3KHftgtFMUAdoAAqnwSUNRSFpBUZ39ioXfCwnybMBK7ineDbArS2FogfeGYY4QDjtqrQWJdXCWULTUDRFyKJRWdq",
  "key8": "4NExZ3CikNk6HqCUvXZKqD5Pzrc9fjM9zvx1FMxb2fjLzoPrTnveG7381S7cweRP7ecsmdVKoRmdYxXrhiS7WKEc",
  "key9": "2kBVxKoyt8edpp3W92Zk2WYdZqqrFrYRe3yjiVvFneJh5BnjTvCCp3CiyA7o5FuhKXgLHGe3RMQpiMZsrdxThu9D",
  "key10": "5hm7EtiWvdL9ZScVtVT3P4piRrFM4jpCU1waX7FBz19A48NZDQRn3fek84aUn6g5RZvvXoYP26hxhCRUAVEoM5Gh",
  "key11": "LJfEMdVsDPkammwjYxymSGRRBU4F5c8TC9YRJGYzi3PHDHSTukr4fw7weB3zkUpoGy7EqmhZTfoq7ore2zsqECE",
  "key12": "phW7DvLp7zcnxD1W9f3NbjNXHwpYZMwPMFcnNezfoKWRxnBrzBXBMYEFrxqw1dXvZe6XM8LgPPyRk2vembujGqd",
  "key13": "3F8uSkYueRLURcUthbVMy5M8dy2LoAwv8rJNfDU7phdCRe1mNytXiZogoQRg8DNRwxJ59eZaURa7yEDU9tuQdmWw",
  "key14": "3r1ppJ4kQdsQcbKQF17uXkF2yaXkysF6xUxRXDhySingpYtX71AUnj6xh9D2xpUERccbfErcbhdMiRL5cp3Q2Bcs",
  "key15": "2sniBWFSy4F6JRcemCGBSS8mCZaXeTXx1UuCaG5mWf4PGJvCW7DzqdvDXULGuMg2Whg8mrwFgjrKkLgY2s6iD9vA",
  "key16": "31KtAmj7wungjfKxgq3kjEdFwKaR35Y1Hwrk5gsqmQGusajQxHnU9ARfY5Ah9fQtDkU2wtu41KCZFDyuZZk5tz74",
  "key17": "35HtqkzpAUF3i5t4Wef1F1BsZwhB4javfoTn6r6yJjSyXWdjxx2ngdcmmqYm6LR5q3yunaizsjgnaqp42dzYCWus",
  "key18": "2bucA2u49MhAp99y54SkABv5MnnwewfuERmXw88P6KGSp4ZqMXnADZ4HfB6tApTpXKha3oqBDmkQ7sEj5tWYrMCn",
  "key19": "rDFNQ9NzmDq2fpSeLKjgto3jwfjbQqdm4yQJYE3DAotuBi2yckKpXyT9fuyiYh8s4th9mRXGQU5D8KhAT3Xd7Xe",
  "key20": "4rqHZRXFsQYGcbjGTceWEdXVESEHwMjbCZTRYFcMS9K2ATfGUwp7KkdGJhLVH8qgjM8KZVM9NZAW2HN6iDWw9THi",
  "key21": "4vKaoNazh6M6EfqujNW5m8hQkshB6w93dXXHJFt89xTck2KPHxhmfommbfTbc7qt4xk35wtZMr9rhC7ePziF3YkE",
  "key22": "5cT7jB9GWTg5pmfngme35c2BUbzLNv2ULHL6c9Em6G2hmkUrDYSDDFaqmJCCw3qVdSe18iATPNEEjJXtaxp64iwE",
  "key23": "2Xd5fNKiqyMoLcEWdmuoFrRyHkx8bJVNZSGBrnwHta1v8GmA11CbKNHRtQYy1dPvoXgzdJ3jq5XV3B1dz2j753ow",
  "key24": "5BtL2kP8qk9mXM5wFC2ST6r5F9JKeYre4UHRwbAgEKPiBR4yWtsw3tvPUMJqX3qVgRy4494bhMP6DBzQ3225eaqV",
  "key25": "5YotmABKsKmN3vy2rHB7AeokusWHDsYAmRCFGK9tMp1ZavVHeL6gRE7F9moWHiaTtcSuFazvNZPjZmW4cJmmYxoa",
  "key26": "2RoCdnDN9ZqzPgVdLNBhtDw9zAxgcbbQCAMv9K8q5ZySapRGeKRHhJsmQsJowJkQyGmSvNEdAJys18kpUcEpMqKG",
  "key27": "51frzXufRHaMpLNJNAFuSSRS2X4AM6GeQ6mTqNQKCDADibN5b7Em6WMHHEZaBta9QaDB7XaGdREB7PEVvENr5a3j",
  "key28": "2Q4utT62iThzz6TswowFDKDt3TUrmV5owjMtYQGyogt7FH3Mn19gwrNZ2iH4kY2NdUbkdNKKwCMPWQbW2VPdepLv",
  "key29": "vGFaptQGxvcqdgtuGpRmGoCqcmD36nokH63kTV5TZ9VEjBqReHmtgkQhrPj2AjW1utUW8vLwwMPwFDmm5s7uB7j",
  "key30": "34WFwVBkvZ3MS5gQLYCJ1MUpxYXDuDGbqq9RWH9GR6oRpE59aHY6eCjuJK8VmMFcrCQBJn3NxFqkKgRBfoMv2itW",
  "key31": "3hsgekGM3n2Xw7o3qGPWXBHP95exLM6iGkonZXrLN1VHKNdZafaYYNENgY8gATr5VBLwrAa2EuroB2m3bREU5mR5",
  "key32": "2KTnP1HauNpAQ3wTP7Af5cLzRFcAAecVrJtdLmmb27u6XKGgeNUQ6JZuo9smnZp3S7Dqyz8P6aDD8rqg2SsqGjcD",
  "key33": "3YEhsnxcP2Kgs2kGpp2os1Y4jvB3aymERnpCWLrbsUbzzobaeXL5uHKVZ3ATMBe9hP2CEaKm8bfTykFze3vbVSzK",
  "key34": "47DD1BXsqJ7uxVA9ZdujP65YXCZ2iAnkb57jD1YqkA4y3gxr8ep3J9eVKdybC9YA4hcU1cXNMj16NjKvA5QeF8ep",
  "key35": "4CneH1SJMjALvsQwp2Jd1AYQUodbqjuHh1usihKsp7goh2oa52jQaQQsdei4w8EKuY2vHw3zG3k8tGX6xzoQ1cie",
  "key36": "48FtcvcsH7K5Sxk6FuVXjMpBQkJ6tuxpQFzAGKNAiJGk3raVYLjmksxqRMgHwcZWTLcBrcNkjx5BBC8irYhT9oU8",
  "key37": "2Kd5u91Desz6XouxhtqodA5zjtTn4mPf7P28fXCehoA4YYMdUThMuVrjHa5WnqSKevGZGuz8ad9mvAEtEUXQhkjU",
  "key38": "4r8vmRDJrnCEHi8KQKqwdnMSnZ6sURbXoTfPAFAdrNTYUkoRjQLjnMDn2RDjmyq8LwEzqqZJAH1zm8CLyX7NMrrE",
  "key39": "4PkBuy4ELyHPMjspensSKRqhZtqdKkFZVQbFUQhuwmtjLGvBirFE1oZmMGY3ovubQpt2M7RgNW1jbK5VMhneF8GE",
  "key40": "432G765avfGWCT12igx4ewCK5sGfMVejmCdnnswsE9mt167jfyVW8ZvDrZhL2EW7x3kXQTS9PJTLSubV9s67Pzq6",
  "key41": "3bYaPF2bhBZuEt3r8E81abAoQ9wdfuSTgitxxHNpqWd9gmPng4NqKuEwyJRRBJrLz9Rd2GxK1bD2v8PbSdMKKnk",
  "key42": "27xqvgFyaydyrWyJcW5KVP4w3bFK2ohmVePbq6H9pwdz97ZiW2JNvZnQFWoKwBkS3JiTb2soVyxDbXgd2KPrq3Cu",
  "key43": "41kfhd5pGQLptWYHNpr9QH13xWcFqUYDa2kppMEYuHuM6StA45mERubqfBeokUf4ahikzDMXempoMRoEuTvqeUCE",
  "key44": "4xNwZ1n7vNt8fu5xgs2Rx1hdskTUiLCLJ7Eefv1vV1XX2Ax62BqM3zQ8TEF7iufV9ffa5c5h3Zip5yYS1WnwTk6C",
  "key45": "gR49mQuHRLvw4JpZ1RirRLzMx8BvDW1HxtxZaGCpprEARHwVaqEayK63DDFVtCJizzq87XHTQPD8PhsgnCDhkWv"
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
