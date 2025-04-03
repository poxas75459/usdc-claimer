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
    "2q2SHiVNAqSh64BZ4m4dF5JivumxL7DMgUQ72eLH6aGoeuHTgBdtk4UUhfFSNmrUMbQ7Kq9Js4jqwc1VmrLAdkzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8W1SRh4txE3qnkTjDDr7Xs256WzA5SPPLHpCPr3nGFvd1M9ciVqPpaJZqGgPw875c2t1rjynvih49gWoA1fc1e",
  "key1": "2r7AQVVZrZbkF4GemFpDNRvRey9A7fGidwCGG3NkezM3aLgdinZtP6kJd8nJmZNVH8kmuaATnPuaZkfUrFhgQkDZ",
  "key2": "5hojJFHWWrRf1dBetd7QAJysDtpGdcRWAaZ1Xkq4GZwbVxfiJa8hn1K2xS6pqRFaKHCzBorwf79QzQ5UuT99YZrt",
  "key3": "43NFY5Z8pdktNusaTzuLqcHYc6GarpPURYvfqaUJuBKFX2JJr2bkjQyxJctNWAwzoDXtTfWHoradF4TxnvRDsVLc",
  "key4": "4pgQTC77ZkUaVbANGfwiimiBFvyQLEuGxXggsRMP4PjZHmp1xMkH63Jo8SGsouAAaXFtC62cxGxmcSTUKCin9x3o",
  "key5": "4kqWUHvyEdMjDUAirG2USrrExmpX9vQCymsAjiN5HLfxfiQVyzKhTAWCZwk6C1EtvfzEPvwP1fXsyLuJ5AUecLNS",
  "key6": "4jhtDr6PFJaAR5LKCKwCkaMEwfVaXL7vgEJcQEBLfyHngqBe6iA5ajhChj1KqBsiT35qgWw2n8Zfxnjzzo8yfNxL",
  "key7": "4qkevSNEzMiyMwea4JLjA37UUgh5jwZbW2BHKSwt4bZ918DY1gFopTJDtje21zPdPNxwdb7J2BTSe42eh1qsPmsL",
  "key8": "4vH7usuXWUcgazYSv3WN7rMWSBjPYcFAWJ3pLZ8sFAykj2SQgtid6pg8N6YgskZKFaahWBgfKhURQRVkVBGeQmWa",
  "key9": "25V2C1o8ofBeZY1EQHrx8HPwxWB9pjLhJ7ciL5Mv9rB7BiGmxWqvXEcTQgAmbVRLLBJXM2RT5snEzk8y3JMf2mKo",
  "key10": "4W4j8Y5MgGTos7e35TtyRLwpnqefUj86FBDzpDkMHo2demZieGiVb2ZweXbHYSCYprX5ww11gvPJiNPysnryBag3",
  "key11": "5LBKHzMTbc1FbEYe6DNp5JGb6sck3nFkrRMgdBtqgRQsQ7PMQGczFyu1GbcQmD3Nrw5uFXtxET9qVMrBFu61Xs8R",
  "key12": "2cY1DnUyjoNpgsTG24QE1nyF1sz27QacAMU7ojwCCbVJ74VVwjTn5UPHz4vymNDHyjhoozVymuBygTQvPkKuB3in",
  "key13": "5YfsbBG9V3hd6VwsVREMvREWDnWuYMxu63UXDUuhfFEYyMzR3bcGcr2om7JshUCsTUou1M2SBoUZpf3jYxmBr4d9",
  "key14": "4QPpcXTuMsSy7fv7wiWJdJi7oGpjXnvFM93KWeUAGQkQBVm213cmfJazoHBRbGgLMsZCuuNfN59sH7nTLtW1jxXJ",
  "key15": "5zsJSa77NxKfznbmM8NcPBmxbWHR6kZQabG6rrsSZMLFMzaTWkuu8atQsS6vTHvUrHCir3EWXMQ9RC676UByYZKr",
  "key16": "4WAGekamBn746ssLwkuKvY5ZkWGjdcF4jPvPhZFYk4ZYgHzzcrQyyh9vacBogvta8hr6NDfE4j9R3M1Bwnq1PCN9",
  "key17": "4woJxuxcigbJUbzD7gGG4Wx7W9mupL9EdkmtDmgDdAjtpVF8Wvix3qYbncdYbCie84Va1gsSWRW3hSTMuvk8yxDW",
  "key18": "2owzr21956Fv7zArnYV7jHtQcHQszGxKcXyER11FXRn8kxZ7WNaqWkpTCJRHNovm15mG8L5L4144wTWAW9UKELhg",
  "key19": "4t4RDU1nicVAwRYwkQj264XgJRHuzxNN3jHewwodtCe3RYJPYZtTMkpRzk7kqtDzYaWa4UKyg4d11sy11e56J4P9",
  "key20": "2JLtUzgoov3HNbdD3ffmDvpny5Kp9UrTuQQ9Sa9Nf9nnivNRXkfiaPQzDj8wpXt5Yb4sDPrR4FNAnbAQoQJmYKLG",
  "key21": "4QuGoDDKZsncdD76f8giYcKiEC89FrbiDbhRE2faxrzkYA9FYpteBKGFeMQcfPtgfrMTx5z178NZJUbzQjdc8Yo8",
  "key22": "2FnvXrZGRA8uaWXWuDGNWR3aVmSZE77xSpS9QhbHBssWyLACfnqDhcvPmxH6i2X8aF2Q8SEeCberpRj7d6sJSbUc",
  "key23": "3qgaqowX42KotMQiQuVZDCjW7igvQtiQcCeftbLbkCVzJ1pHNeRzLPVZ9kKNfiEDdJypH7nfHUiW6JxdPhyoP1Kw",
  "key24": "5mtgT3BpCxSvFChww8MVyg4V5xoeLgs9PmTw8oxr2Pxqox3d9eJxUSeSPsdn33dEGSx2bKssrLQfWXgoEXKdf7nm",
  "key25": "5SHEUEAgoYkiNYfZRWU3fzdPxGBpBC5fQA3z32GpRAYqkriSscbfzUpiYGehu6KcuA1onycBJ3ehXbB1tCZJGQNY",
  "key26": "HMQmHv7Tm8XftQVQX9KNg5u53PcXKKZ4G9E5TvyMhb2yXZrKXi6PBBySxLSmoV7PHxKVo3XPuzj5kZ694Tzf3nX",
  "key27": "3MyfHb5P842dyi1np4L8XU7ph3biccrKCsCEDjdBvmpyZEhej1wZCvpDFSetc7K9jUhdPR55TT67q3QCHjsAUmkD",
  "key28": "5aRMtorzEkE9vZxPpBFAHNANY7Vh2WxhAktdAwDrgh3Lg7W4vK9tEXLEbQR9ERPB4yhPgPvtyBH2FUCxRQf1VR3B",
  "key29": "21yfQz9EFtWm1qAPeVXVDaVx2HSJjCBDTBSLxueWXaygNKVBCH95J85YPZ5Fo2yFdvj4U8WdcisHLieUWR9oXW1F",
  "key30": "5YLY1YnV6iAWhUMRCsLFEtsfeW9jQjBZrZzzVWYY7qPxYd8UmQQVgA8xHoijZvA39eKkmwf3EmAoNr8yY24i9c7E",
  "key31": "cmMDEt3vzWnkXtbp1oSpaJVWFPGwmvg2CaNZEcKrjjkMVKzgKEf3tZE1xktaE595vj2yWxt5sYh2UmcbD2EnWo6",
  "key32": "2vpqhwdszy6Z86KuoTTYzj26Pmeqh6XvtxHhW7nV7rfCUcsiETYibijJfrPgok71mLiE4hgPwkHZ9D8QixaweB96",
  "key33": "3y3E8JiBK2KjUwsF4zzwEuGpubVNkNHEnkr4f1Z7PyKYqRKcwogg4voQHagd7HoDR9v6DezGPt6CakviHTNpkr4j",
  "key34": "4EXzjsJ7CBWKPKPzdokfz5msQGREG8VWZsj8Wr9u5mnM4KbnRYWDvhRhcoWtxPTanAhzqrCzbGK91rrkKpod7Pbm",
  "key35": "5vrMpf7nTNaY7QU1qFyT83MKkL19RpCguTJHZnBpbvCzCxacKsPhyHFVsM5UC4kLMKpJARP9awFZV7PsMzSZ4FJt",
  "key36": "p6eJqVfE8VoDCtUpwiFWqutpCJnVaukUi6TYnvUPdkJwWggmukUvxfVXxuiuogKZ7UN9bMAVAF5LRYEtEEKpPbg",
  "key37": "BzZLWDYjGDUn52gg2Apz928qGwwPQW3gava6x81S4Hug1p2TBHupGqQkP7yuq9NhcqKJkvV315ub1HcFde3Qkjc",
  "key38": "3mib9qQ2tsV1PDGgvrEopvyaQupa4bM29oLW3fsVthmfNNE5kVXUBvv75FLTwxzrtg8wvmSiUXkonXVq5buicZis",
  "key39": "5jFkW65jpLcHfuYeugSzAk9irrExoCgQ4paCJQV2B4rDHnvnmgJd2r3g8NgDK1s3Va9F31cKE1Bv5hSNPT4YfKR",
  "key40": "4o2dG8xmm93cYwtAdHDGHMH4XnXRcBWUGYBpCfo5H17XzFHHuB1BgM5Y89HXPyCmqxtpcw6dPH9rVFYjP3kGbkva",
  "key41": "2N8UsD9UTrdTDsASw78fLn3WsT5XmVNW7j1bQ66YZkSBvtEbgZcpEoFBceR6fE7fo2125N59zZtZJ3ChUpESnEmi"
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
