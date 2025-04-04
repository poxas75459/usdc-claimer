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
    "4KspjZDyt7K5fnpmjSgckwwPfprPeNRriLpM6dG9dCuSgFjsVL5N4mUqQNh3APMFK3AwcwAQw4k7TRziT9zohqu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jF9ZkC5JuaNXqkcDMA9r5FRdhQddwJ8VHbRsHGA6uVUPz8HNqVYpdnGgVisVSQ4q6q2tMUMT4av24XqbzFdDUC7",
  "key1": "5pfDBNukxLhBv71HJJcNzmaQL1B9Ui2ufkyX1LELktLdSss8b8AVHYetkTQ6CiK9TdN1zCqMQ4oAvpKv3UeLk9NN",
  "key2": "4RXm8w2be6XZJxQT7Modnwi6sgZ3kYjJBirfuTQAXw7zSGgmduxxJQ3J4ucSJh9B7jrXrHcwHYkCyioUX7k5N2Cj",
  "key3": "3oa8gFX2Qt5hUdFAibZmbSWjA465fBKMD9hWQ8ZfDTFSMULSEZZPYfygcvuujkWx9M8ajuipfkkYj7Z44v8EaEZy",
  "key4": "5FmhGjtvaU9AhZVaak8Xzp6tiqwYLBGjBB859WfMt8LEnG8FqWp1mLQnGL1bauRvGZciNHYQPh3nBpLiTphFFfBy",
  "key5": "X4VKU22Sxk6tBx9RzghRwcDZj1Tr4TjLT6mxo5ugK95NJcPV9VUZHNht8S8uzy8Wqu8qmQgM2uadXxejtreyR4W",
  "key6": "F9UESwFS8NLoGGfiFjJuyr24HhoF46fQZ6PtdaYBhbdaFPRLk4PwNM6WBHZZvWn4pK9MZwoAJZkKM2LcNPmLqmY",
  "key7": "9GdNke1cydfpjb4zCvYY6d8Fhvi6QDQs61UVpLnQ1aRke51N4UVc9W59hXFoJVmQNMnwetU26LG9XbYuRXAhKxE",
  "key8": "4Yk4ZN8LvK5sBULV6io8aMgMFfty8t9hxnkAUoJruk9Ys46bBPYsHQ3pq3hmbjdb96bPmSnyLVT2jSpy91NE97vg",
  "key9": "2vNUnHniW57VAPWyEnM1RFpW3f4bXzVKJdKCDZA11BpRJJov9wshcqDEn7Tm9n7kqcXP1vEUtWRpcyUesLq2FtN4",
  "key10": "5jJY8BizrCnWadxjrmkJuCpXuw8yPQzkqoLYdYyjuhXUcVFutT4TmMG6vM4WptvJcasFJEYjVDVA7EdCagqLmeTS",
  "key11": "4JuwCvJZTdh3X566sSCSQqEgDr8juugKsY57wydaBxJYV3uCvEG9fh1zAanLasidJFG6hidPcTvF9k4fGWLRR31J",
  "key12": "4yeNej8MhAH9TxHCNZKjedCCn5yR87j9qQGnM7NjCtEHxhNVaEXiCfnu7J9NrAPRD2rpPVFBwjUnChoQVDqBA43Q",
  "key13": "43wcfBDWnHs7S3h9tVRBR2mhn67WzrhA1zGydnunLpyAgB1LggUmYXnJe1L4YX97CP8gKgTeBmZrQjrfkR1MJjaR",
  "key14": "4y8V5BzuzweR7HN8coA5HyhiqKwXc6j8Po6whY1HC8i1AfSMN5HdmtLozMihuRLzvDb4wGZhWgfpdfzZdaZRtbez",
  "key15": "2TYvjkNRrRLqGUpMXeRXXmDZJZhESDAvxmKh4PfNp1p9o8PCBLQd866Lm4ShHnYKx69mBeWtpnrW3gyie9sGrNiV",
  "key16": "kz1wxAq3DsURaSstEYQETsSJ9JYWBeSo5VnaKmx2atEA75AmCakK3TnPSBFAuMNEirZzV6zPSaNECZMJipZcMnE",
  "key17": "3BTVF57aJhazGDMbbPPSBsNbe9EPch5tNyQ9Yva7hyHoTVn5jpijRYMZYDYmye5Pnove2HctD6o77btyKxXH7aGJ",
  "key18": "5KPWNmnPC9ErsPFg4EwFJUFtptDCP8kR2mrGknnwcR3ij4euJ14xvRhX9q8o2RoicZDUCpJon76tr9uYjc1bWmVU",
  "key19": "RCbE2AcjsUCG7nhiEkTVtehc7p43T2aAfy4JVV2DvzTzv5LwBxxkngak4YmgM6pcS6oJzVt492AvSkXZzQ7zuZG",
  "key20": "2EURxZT8Mmg2rYFvaYjrmM7Ee4YEXyGvv9UVxMta3f9rYNpEdtVJV6m4qrvLokhfAYoobaiQ36WpC26f2KKKidhL",
  "key21": "5XQNuo7snji3RngZ62972LqjWEGxi1789zM8DphBmEF76d9aTm8fAs8bQ6HZZZUnNDnAxTLpURNvywXv6RVw1k9J",
  "key22": "2xoqenChhpQt8W5rEodxXSNwFp7JMrYZ6AH8626FbyLFSmao6muGX6aejg4Jb57G3A7n6w4Fq64hArjGRrp4Zd18",
  "key23": "2iwNJFdmSg7Usm32pHxyphT3ABSdiTzmAi2uqNwjqGNC3rWqBdv5ZD4nahnVGsQCF32QCMNZPtT5ZccUm4WRhA6W",
  "key24": "2Z9jP5dqjiofix1S34wrai2GtZcMpeHHwUKoRUWhaJFnHWx2cNMYZcGXminBrd4MBS1oSny4vUB4k1Si3XBwSfM7",
  "key25": "3hfEPmHMMz3BQWK5oqZ9HP3RUCMYZ1byTHmPJGK6x1ph59riGvMGviVo8Bnq9GNZPGNvAqMCWvTsbtknvtgzK4eK",
  "key26": "2HFZ8gppVqN1MfhWNC26TZW2veRKtrbEPn8Wc5W6e1BgKi7KkWf35de4M68QTvo16foW2GYv8KXATT7QyMHHLuCA",
  "key27": "3ysrQDmzmXU1S29rXV9eT4zhY79NchSkBhn8epy8uh93uvmzzy8tbHKJPc81TKYWH631cQwJam5TenEFL8CDAtND",
  "key28": "3rVWqnPdvVNg7YxLHCYaBmw8HwGtFTN8GJVbUBPaCi7mabZNHC8T52A5Mj8q9c3kvoK1RU5J7KS6WXeB3g2swZg1",
  "key29": "3JztQQrPU6ny3yQLfQ8f7Un5caNvHoD8NxtMucWTPvpsKnDeatk4baon9KZuqUSojQVmp4Dc66paEJrxqcnLfgYv",
  "key30": "26fsTV3RqTmA5VnDjCgFKnTVtYjjkiAyo8h15iyAMwiuXbN4mtn2u5CCcnmVwVk4qs4jq29PaUZWR3zEVa3og5Tk",
  "key31": "4qK7ascEndRqkbCfFME3q7EWg9azXG4x4cS4dpBJi7n1aEcWwtfLjyiTAKfgFmHRpwmLy6bRDfP75cr7sx6tssk5",
  "key32": "5PZ7n6Lr9A65X6mDQDdxMhciNDJXpFiiK5BkEmUA7Lj4rDK5KYeGYQWQAp6Rm64sycQ9NkW1GSQmuqYCQwAqZ2z",
  "key33": "2wL8N61xfo2bXAR2sJdW2YMbbtM3UmsNJRRioj8RwpsjztWbLA89Vodi5G1kXfLD2ZUPXXG13jHueqeQSSPUS1Hc",
  "key34": "3DRzFGBSEpbsnES9btyHubZag2iCTRUiFWazJtA8eKGYKf9ya6vpWAaPVQcxhEiJM1w6dkFJex488QtCEydarnzP",
  "key35": "3tYEkyYFQ3NVeVnuyidc1jM4G9QPsveVuU8im2rcc4DABeSzNqgSLCg5hgGgzLnrHLL3jaQHhwsdDoNksZhq8i7N",
  "key36": "44W7Ly2hudxgY299aUvtte58miPVidYReaSD49mm2wqzeGU9R6XHTv3u2FTHwp3tghx8prX8umkgyaUM94FPaBsC",
  "key37": "3jDR1EEXUUHf8urRDpmqYZS8DFqUraZWzJpEQsxhYKvU7NGQWhoHKHeDK3NjJ89EDcGCFu5PXqWRQu69qmsH6XVY"
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
