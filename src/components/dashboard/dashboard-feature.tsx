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
    "4kbDKSVyVvbkLsKBF6CtejkyRqErFiDNDCYYYTCFaCBCU6YPBrGrVrGzMKB5LEZv3WdY92nHLPE3KHy1pjn3xojt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UL9GEY4ax66cTji1fB4iCqoVC6o1FZLZYPDk9UuEiR9SewHq4fNjbfGdUc1i2BbaqjRa2eY4mmeuaxcA85aZubG",
  "key1": "2n9D1TuWcqvk5ctixtydKGN3qA5sDu7bEDQsdJDS36NKTXMm5AyJMiQqkVswfLPaDgv4ydTvPcZ9uQHWEVXadutn",
  "key2": "4b2QifNMu4TE4Z89PwSyv9jGiDeqQyLzu81infY17p9tAeweech7sDc5TWL7XHWfQJzeC42Ho3rcRSVzt4CQBoRW",
  "key3": "s7VuuY4thZiHeMrPLxp39o2UCid4GX32koWBHSVV8KS4Tq2VWX43acBp4Kd4SPsZEZkEE7yX3hcefLdXQ2Ht8Ys",
  "key4": "56LgxrYLZqvbUk4RoGAHHTUmbaKu9vEUPvGaCw8EeFhp3jWJtpJSfRrY5iFpjcwMG8gX6CnDHUpRi9MSXtCKxbFj",
  "key5": "349BsN8q9BQ48NTV6dek5LGFdncNVWLjYWgwdx74qNXMBZzT7Z6MncBXAoYaiksHWe9jseYFnmdWK93FrP8iz9G1",
  "key6": "4P51T9ZTdmYjAHbdHVeydvyBvoj5qEh5621rKsMRshkNUr4HWodMtGddbMFADgcYu4VoZx5H1KG4XWirSEXsyDWB",
  "key7": "2vWm2UpFc3XuNvbp4jjP2rry2b9NTUU9bECyMbYajjjodwVca54PnvD4qq6Dc3StCjFhGTZNcSFBSA1Wx7aCCjJW",
  "key8": "45XL5N4N1PpTRkySbqYrGNoD9doFgz86p8GCmJ6jVXDLZR8nYCovoJZKoVAwzoe34CDZm2UjRZ3yoMSshBz8rDUL",
  "key9": "3VvaXJDsnRDhLkZ1a1Gu5eyp5iSZC4zBMPewiwgBXQVrJWCM7YM2DmbR7j1cDMMg8ep5gcpQkYUPLSzd7x6P4Bpt",
  "key10": "4FDjnjTQVFpTfcvHMMwauCthEUC9imZCK1puyQ33tbXTGpawMThqRygpEUVKMjG8nYotHvAGS98hknhSnrMGdVYy",
  "key11": "2J8GmavW9tctBprcNmpT3He4WpBJC6UUYs4iEZRHpH3QQ2gdwWUr83B4uCXMwqa1PKDess4SfRtz7ecaGPYLmD2E",
  "key12": "4NEFTEkLoWqDdosKzoGtmVqWnfRyALoWoxv9yDxySKpsjzu7L1VRoq23quZZohz6HPGZGFcfAidJh1shXC38rLoR",
  "key13": "6Lu3skmYGfeGTUF2APySzK2a7PKkT4hnHfsxciqkYydBKPoiRxhp1PHRdY7X4JJNekTTMmk1EzRdsw58Wn1Pxkz",
  "key14": "b6nbSQA5mMrhPPx2tYr9gBKtsokbFCJmMcDfcWGLvYxCL6Tu9YuCu4R3sYEnC6rgPYscCwH9yQWnRPP9aqDshi3",
  "key15": "5PpwucK8P4XY5GgRFvdBgT32hEnGpDMQFtU4qAV9Rf92uDccubGHvoY7ZcgTmGpew9hyNG4xRSjMbxDD7B97NpQX",
  "key16": "3tvhaSm7NhwwRFvPaLbZXbGXu63V1e4WhDXRqUKhAAimtLJfLGiPJHWjFuN7sPipSYiJBZJrnHjgh8pdfLarhSHq",
  "key17": "2pDuksSBexWHvWi8sUitoUKXjFfK6RvkXg4VRqJi1HBpqKwgBvRakY6KJTAhAUshPNdTMaknWpQQCp9TodWZ7yPY",
  "key18": "3GkcoHuFwPDheLW1pqLVdsicJEd6fQBhmwZwgss5aqtxkPfENVqVgeuPmZdzV8X5kN4BQC2WmBmVpCeccsEQmU5V",
  "key19": "6u3KRKWkujd4j68E2dQb3VSxRfY9XE6q4uYoLNWpwSaTUzyqUKGwamS63mz1teEcHUXG2vF9EZZ4dzfk8R1sDN1",
  "key20": "AbHk6wBDBn8R5gzx89CewJzTMamejis7jcA2AZJLtn2hZ2Gaq5H78Ks95n1crnBJXQwSJXZEbNAZmL2jSbinGus",
  "key21": "5T2rtsZWZyUJKGuzMUzWv8unEVx3YshwXnN8fLqULYwK9UnZZ2R1cCNCmVP73ZrffZh9WrJZVVKU8zpK47eTJ1LQ",
  "key22": "3aFUp32g9tGW85U5CJxqA6JYYMvaF6TcXjNxJkRGLqJJX91zsDfSspwcrV6hzPNR3ASggF43xWgWr9ZmbJnzNPFh",
  "key23": "5BoahLSVLivmpkbxD9KVw5dKGJP4iS39KwUw21ZRuYknrbvrYmtzpDchER5han7WLaecwqZ8TJ9V2FLGG618pVMe",
  "key24": "42oxHR7b2m6sDBZMC2dSQ1tzMWpeefEN8n9Z6XULMy7iiVYq9bF3cgDTv3YZL1BVDcG5sU34VE7ry6HDEZbdomGf",
  "key25": "gEp2eVwnrmFvNvoW2VbQGHeaLVge1o445V2BAJkP8yZVRYvHEEtwa7tXWxA84nPUGor2gd9qsLvVTetqUeiLy2B",
  "key26": "3LQRA7PSbur4tPohkQ5ZxFRWoBUHrSuVAy9ankWGfhm5XZeMWXHdjRqVVh5SfvBH8o3tW3ec1vAadxJUv3h8cD1g",
  "key27": "5kZrqsaNEZtEwh13aeTEp96GAySyLkrPmPR6JRmXvVGWkKJZU63h3d7jnt9Nmfe9r6ihboVnsaJUQLTfkVu7d8f7",
  "key28": "2X8unXaheM6sheRwLiRDime5GckzwEhTPJ8mV67PSENwWMcpKxJzU14A3FCmHWe8xVMkpZjzL5K2eZJGGZpZeC7z",
  "key29": "5AAhqqnExiGSaUAkMWKPTBTTbkWFHzWCkKLicbHmLkCYjuA8NHYBnhNPzaMxkGJtBM69sXFyUH5PzZhAWozdzaiN",
  "key30": "38zGfsU2jUxoZwzPgvfd7eNy8UB8XjPUH7ppegGg6iJWjvEwS57s2xbe95u8UDn5riRkdm8wU4XF3pcTEHjwr4nS",
  "key31": "zZJ22nZFgMhNC2HK9BW2ftFWuA7Qw7PvYRDDx2SsjekUUPj2Jv17YbeyEfgwcCZ1HqEu1UfV5gErH7kFMHt7hyk",
  "key32": "24NGjnjUqTAagaWQNm4x6R3EpEi9nfo8SHTH1tJnv7NNX9PXJu6SWTvoXbn5zEaKwuxZpoQ7UjFSTPSQgwqhmTdG",
  "key33": "3zdCLbkVXPEDEL5fNug2yvzJ1ty7QGgYj1BfFU1jcZ2Uuckaq95592eBXwfH1sRuPRr8ChreCvb7cjD7VDYb1v17",
  "key34": "3EsoojYtZbPQ5dPoP8JTp1Q5Fd6CPZshiPYfR2WopsTR2dbHvv57z7FqqNUgYqdeAnjhGrbAkinwjgYmTihReyJz",
  "key35": "5bqa4WuLRyXnDkxdmC2HzwQYVGzmJWMpV2yW967SwV8vEZWZMzTd7x6TjbdvzPfgfDPFCmi9mnqTnzarcn3oSUNp",
  "key36": "53FaLWRoTjhEfb31sKujJck5hGKFvhf5n5vnnqePFJmvMzzUuwRo919DBZaZuDHQJ2oWzEPnjt6StK4Yf5BAzu5",
  "key37": "5FJ9i4gB8NadAWXCaERWdJUHcsbMnojo9NXUU24CWydAGMt9iqaEJj6DNJTUhP3T7Kx3hbMzoUnydpdRJZqqnac4",
  "key38": "2APxgfNXdCvSFGSxB5ZnXoFuMdKyoSZHShfmLK971TrLNcbCkyJGd3LmmfkhioFe4rDqbiLeCztx32B7zSCr88V4",
  "key39": "21hbNSgUGrG5y6CqD2Agr2vuDNyTSd1z2bwDe86nB4Pm95c7mmqLiMAsc8gUedUk5NybDpQ1vEHbQQVHz2zTG4eC",
  "key40": "2hz6nvFCM2LQAy1T36ixqZWJH6vGuBt3ADpqmtXyQi2pSCtRz1fygAjXn9svdNij3xoWqRBgF412UHWCgMw4KgQG",
  "key41": "2ZczgdrTosb5pgpPuJ8ha813VFrmFbf7oXx1Z2a9YxMFg6ji3E9JdbcPb8wpaWmKX4iwzHmykdsEbfW7GABNHdQo",
  "key42": "34rCfQkGLtfZ95nzUPJb4obwMAVhDD1ioWbSrmS4B8no8H5mWSFPqh4nh2jg7Bt3dr4VLkGF8JaLDjeCcpKRcUQZ",
  "key43": "62eWSi9ZjJTpDZeaqmPPeNwTa4n2n5AtFwYzSm1HZbhGtDA3syrWqM7s1QttAdsSQQhxXaWikodnCSCpVtQ4Nb9u",
  "key44": "hfx1SwMpydyAgvHTLU6V2fA1wpMeoUncuEpF8voN9ikCpnb8zkrb6RnHf2X8yJgWcsGnA2zz5gysEmLBEqXCexE",
  "key45": "2nmqR64Ts3foJ8PsetNXXLJWUU7tBGLpM3T1ZE1UoGnYHV7tv9RyxdtWAXK1Rbe8wrJ2xEE44sbjr6CFv8wRq1J2",
  "key46": "4eAHUh1HM8nkqQjKpaVFdEigjhsPrXTE8YaF2FXZBAL5YVoi7FgEfghzJM7vitYZnzJTT9r8LBzYpJjyUtiYcYa",
  "key47": "4yfhaxTzPfx2jVXD3fRUBiSrrw3fXEJxP9piFhDRdpEYroTFmvi6psvnNHGRHduaEXWhdKq9M6zXxogXhkhxKzH9",
  "key48": "WT6XiKgD4fupv3xKzk6VAcQ6H8CgkVYBPJR2dTQV3dTSfSG6MJPUKMLLSR3xERRea55SxsWPKjxwnSQQeQN3aUW",
  "key49": "2b1RoRN3vsmuuzJgYFc4EuChBwKEmTDbDzxrZ7jwjk3B57uamc76F7okUQQp29jzvDgZ6j4mq7yWBfEACyffmyvG"
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
