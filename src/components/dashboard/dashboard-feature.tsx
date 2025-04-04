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
    "3oFu7zqQgRv3AfT5bwHARzADH7xsLSqMb3P9oWnjFktY5NkAB1RSVTsbY29BMAFS5Q9CE6TuiBqwzzN89VrFSjKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFKR77C7kg1YXVUDCnJcEdEhmtTX5piukeW5gvFf8M3UHXmiQNebYxvr38TEw5TJ56akNnHSDDNSV5K9dBRq1d3",
  "key1": "x1admkSESqo8HKax8FcuKqv6bm5zkNbLWfsTQQFruSBGswp2hbQKm1N1Yj2bVeax7m7Sg8gbQhpr1S9tNDiUdmx",
  "key2": "4QQBW9Eq56JKmCqpYtEh9aU7KdGL5umfVMLwQV85BNzPweMEy85eQQhvAT3tkwBE3oTStPApVRSYVbrxHD7P6gF8",
  "key3": "rjZeWt6xxT43zC2N2jsUF6YEdCQnVeeumPHYPc3LLehEewDzJERybG5tHASMhfX8WJKSFRWVb7Tuozvjzb9VAiS",
  "key4": "4dG5EWde6zr2hsif3AWRg7ed2ZpZNEVeMHk1dbsQspmDLAR62hfMLfwVh5zpL96hMNffgdGHDx2CP1czYjzcL1XZ",
  "key5": "ZNA3Y7rC9uhnepw9JQJneRf5DWHTnR9L41f3uDKjXLLnBDVCJkfmXAHyBbPro9n8eHN9LHeMBqACoMDJhMRH7JG",
  "key6": "V9v22eyxaSKeh8noSXV8vFWdumWQu5dDW6RMeUiKu6ZTr1zX4ea8c4MJ6YkKxRagGoibqHHseMvMSYZYtP1HJ9U",
  "key7": "Q2VVkJa1TakTd6pTYVby5XvyNGj9HpY2aWE65bZ2oskMmyRyvHiFoF3X9KS9AtpWEFoi3cAj91pvRD3jRudzroJ",
  "key8": "3SxsEQ2b8Joy3geySsakb8HH8CaVyTBaWcHTK9Ci8rcmxc9AJnLQH6Nr1tR2sYMqC3N8qRU5NnmQWxeB4N1hcWkh",
  "key9": "4zUcp7AwX9vRwHLjShmtu6dNF3MtUU4Mqan1o27SXwqSco3ohkW18UneuGAu5H613BGepy2R4Ke9smyvfARjwhVw",
  "key10": "4zyhT7xYivzNcNKtWLGbJYxwFkDWdo1zdHEruPGtZikKWXZuiicX7djVg5kTxmhcQg2gXUgzVQPBjSDdkdGDQ4WC",
  "key11": "59pHaMCnA36vsyvP23J1dFRefkVwjbhKdeAXdH3Na3hBLDokcnyJ2R9UM3QjALsr99VLYWfC5VBSCncfYiGbdAYe",
  "key12": "4o41Sq2uDfDtUPxDkad2x7c71jvqhpGQ8DCCSouU2hsxwhmoicDzAwQBc86f6pHdGMx7KDnFxpc67sYReDGPBqTL",
  "key13": "46vnomF8G8E1Zawb3QEowbc9JDM2NuthwQXe2e2zMW5ZXxJ373Wo1cu2jVYx8DupvFaVwacpTjv3zSX4M9dsY3vT",
  "key14": "3fzFDKXMdQmQXxe4t9NqLg3UmXHxHBTbdM4bbENWvLek1g1dhmzAPE5ydqC5Yu9henrroJUU15e2U4KkPF3Ycjyx",
  "key15": "EmaVii887qFVovdV9W8xozW2dxxGeFKjzAUYekd6j1s9FwG6fgjksDt531aLpAmL9HiryQYDNwRX1ZDUJ1LUfQs",
  "key16": "3XwHW7H1YqdH5kDwjzjJ5kvHe7XCnEt9tg3HNhaeAS3jEGpfBXEj5DrcGa9i7kSvSCfoCnyPQktpC8QRwcSRXeDr",
  "key17": "4irGRmcAaog8hMgrMYWxJGhizDkAQVWXatZgoUEcNPmm1tvMjpoYovH8yLvzLFQJRx7vojavBnYNsRDFS5ViTQDv",
  "key18": "2m63n6fjQ29ywP94RUxd2Q3XcV6XWtxf72i627KksU8Aj1HNsG8u2aFK4R5f4RH9xG1yfdbZiYt15Nukh5V8tuy4",
  "key19": "2q619jgRiBp4UHL9s8mJHJ4ywBKJtWhuXqtAHUts7Gy39Vfmi3DbZVpWinwDfaq7VtSqqyAHXpg9wBwfnfhtJANk",
  "key20": "GiDWF5VUzqukWLxKhso16XxrgAYdDWNRLV33iCkRzrCnncD1td9XbUsc511LkS93E8n5HbV2CatqtbFKnexhHzb",
  "key21": "5Am8VcRmTUjzFoDyViaU2DVqV5bXFupkDTCwmT2Wz4YZGcrAs667dM2nG3KyNrUi1XSEEBw9PTrV22RopNmYzJQA",
  "key22": "Y2BowZ68xTubZn5HidZEUyB96ETECmJDSpqNMTWqqgKdkmBR6SFru31zNsuoMu1fwWiXGCohTcGH3HcN7Axbgx3",
  "key23": "eJMf34v4jCfoLhBhDgz15omYHvLKLnPWHAsjrK2gMGbvCjdwWDhjGjquJWZZ9Be3f3TatFTvKvRXMhMwvnmf6tQ",
  "key24": "2eM79VEoDndU3iwa9ufa1Rde89Xo3WNoq52RUDvvErBVPQ9tUPt1om41ASuRsJLeSNJYHBNRtVkjJf6vhr5aZEiC",
  "key25": "J6b8YFEfWYp5Ni1M9xFktBak9JtU6iMNt4UoM23mnmW2oszyqJ3v8GL7nMQQfbeADjaHh9DWuDXvrF8K4vipwwu",
  "key26": "2UqShiYhwEP2CTFDez5DNoEm5X3qC8qydzwqCDrmwk1yaMBx8NJ1ZjTM9ffbme6E3yWs5pWwgF9HDtKPwgvfwi9v",
  "key27": "dqzKypTWZkfRnhZXiMBaYV9yQWwHEB7RYS5kvJXTVwd7j2t5UWCuaq4SSpwEQMKRUvtUPXMSnzuHqiZ5kg6jFiW",
  "key28": "4Ri3u7EyzzXhigidSM1Fp5fNcaX3nvnLL1EfBPjT46UeG83GdNZkmnwa17CmrrUUswYjovgKe3uwQNh4NeRQCdrt",
  "key29": "491QjNNDecuuZLfxL564zHtBG4iWEtSNxtq7DG4o86PuvGMMWTsQhHyVyTymXgqnj1fwcWWQ5BW6JjuifPQy6eai",
  "key30": "3akop3XeAJAfM3evSGBuGYzVqaRjNBjZufn3jnvehz2GRjNui8nMvF6mTxNKyvC7Fzo3As5nW7NZMt9KRYFFkk3X",
  "key31": "wnwoDavncEUj8DUesGZ6h5z51K64kt98rBLSzift62VEZZPwsrPnshMoUjERB2ehFQRcdmyyAQxCR8dtfbRg458",
  "key32": "Jttck5Rnjt1c5VfmiUh48ifmCYBtnnhi1Y14WVEPYtBWPZaWRui6DY9fUpHXjbT4pAvb18S8QvgEvQVF7F2tgGq",
  "key33": "2ouzDiDqdVaM1JTZkzoVz1NXtEfzdJqsvzJTKjLPTdMASydTnTQkepVx5GBqStBkfBEZTkGBPqGD9GzmbQQ2vKoh",
  "key34": "3tyqoqDxjf6yTVDbA2bci5iPY4Y8kDdaF5LMjjDKCJoCEbs71gfZBskMbNfmtXbA2d6XEwUJp8fvPjYxn3nZZdS1",
  "key35": "2fZQdLErGzrpGxddgg9CnkNNXUogzpEYGaoFd1XJdgXZDvrDMjarCz42MD7WpMmNdivEhti9H9h6Mg7tvRyzaRKu",
  "key36": "BUVpZDGspjPUtdMWPJoSeDuMh8GnY9mLNWNTtKXZQWnAK3yT9RDrP2gpC8i9yaP7ootf2ubBZDm1anhcFTEX2PN",
  "key37": "52PQscMJrRc6VSpnnq6CQNobWGvuexKTaXriumSYA6fTiNck4Hrx3aT4JNsgYw5TgZpLE9kNrSZU1VxFwBBWBXpY",
  "key38": "3GopWjyBLzUcgiCeorjZ2ms89pAqSwe57cuGrCKWEM6K67RCaU2KMy3RsjvyHRCP7VYxuKfhUGCPQksyb4Y5yvJC",
  "key39": "5C3gWdQqw6i9vJe48nJkxBb3EXd7ULccsg9tcppZbjpYpEZU1nhJ44CiA1mgqBrdW5tqpVcPx5oCwR1YWrXHHmZq",
  "key40": "4Fn9jfbJY1P2BZkVYpRgo3QN4rymMQ1Vx3HVoZ7JHSzGDH3yN31G4ttkDaKbpUageYgvXNReGwdhbwY1JZEpt4ra",
  "key41": "3twLjsMpK8NeLXhuyEy6qsTdpNwUB8P7W5v54hTNwCPpyU3zorrh5ZVYDGvSjmDNMaNhc1XTtv6hGh74FYgCx8X3",
  "key42": "53WykyYuUn74yaNr8zpgp8v4tEBgxAUqnU4DN6uShuJsNgFwzsA3JjREae1yAykhfo1HZDeGgji3XMppxJyWrboR",
  "key43": "3Mg2Z76Lp52MX1X3JDywc78meCWeGmDmPY45LQJpDJ83GPcwyJpTphwkSEzmqcTo4GiDicPzJHSXnHaJywV7z11w",
  "key44": "3DzasP9AH2gYDahZAihussj1Q4EBpWWkE7iDjnCD4DJE8miTj3qmyXwou7YAPdM3kF2BH1P72vbDqdHgTYEKKjw8"
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
