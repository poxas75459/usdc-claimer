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
    "4gPVa9HuiSf2HpYEtT5EVDsc5QgQGy1VnpUUDPcdiZHYyXmn2F5ckfAjBAJZVjPHuGDMrUueHrv9rZN1vCiw868u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Km4KRxGUMj12VWF6jEXBTr8rrqa7dikpNK6aZS3Vfgu2pzQgjrGWvzgQK2aGnFYTGzT37qL2EucVjmusEzM2fBq",
  "key1": "53yGBLmduVZeB4epUf5V9MhsqV6QpBYGxUq67cZynHBQhosDZnNEqjVsR99whZTfKApYeA83aZUHxaJGJ4UBWNnK",
  "key2": "2za4WfimUgtVEaXqs2jw6r4UpH9wfjq1M91ivgajWHTFkXeDVXqhxi8yXm9cSTNLGWWt24ExxWP3ccRepACuRiYJ",
  "key3": "3ZrnbfvTirv7TVSuaXq9GGHosVPyX27NwX1wg1EZGGd82JnDqmEdvVDkZdnQjSbgH4pZQ1VJxYtrr2pijoEsuaGH",
  "key4": "in45znN4aL81bse49n1kVA6t5bWDyUsZGhyxa5Qyaw972zkoqfnQ917szWqdzj222pkk6WVFwbWDKn6q46YcLF3",
  "key5": "3U65KXX4sPj8fwDACtswbcr7K37FBRAmuuRP4TYTwEqHPMYs97CbVnsLEAt625Tf5mFSYunVLenWUbgBRYpkS6Q1",
  "key6": "4zf3C2Vn5n9zLw9TM1cA8tEBAtwxM6AEfbXoZa2wXMbrhtwLVRR3oP271xydHyRixrgM1P8qFYD4Xebx9S1pntVS",
  "key7": "5iErGseZW4Q5kEedgVSMTNrBkxHrH3vr9JYsrH9ZvjnvSoDQ7vGMSonwD5Wqm1Esrn5tRWRKwaJ2FmN1j3VCPQL4",
  "key8": "mKBJ6Ro4jci4LAKaqTYg8YUAi28z9bfpCt6bNDgWxvH4HAhicYHZz1aAr3GqgRB11dG5keWhaSVMATpMRNmnZ8D",
  "key9": "5pTEkmMqZeL7jhHZpbHb1TnNEmJ8HvMgV3rANuAVaswZB2K7NpyKSs5uiLuG919bD29CyvxwzEFTEjBcKaih2AWi",
  "key10": "se5KrH8xaBXsrNPBGQEaqnk5A369X3XinvUGkv5QUY4cnRstQxr2JTt4PcBjiMgiArPQWDyxhxAgMpjckc5bW9r",
  "key11": "2xPpyFEQZgHB7KcqbfgPJ2jGgBBPpVNw5nGL7FhwvdFXN5GK2Sj5P2NDvjtFRU4DpDA9Xg5BVKAPHLxLCocsRUH3",
  "key12": "38gxSfm7MNFonUZC9iyNkaCmvr6gZ3PDAqPukMk861QHjKVdLf15WFa5Ers8PBJYxbyJUEzEUdmyxeFqqP2NCibH",
  "key13": "5hmab5Ju9HeQYoU6wrFpbF8BRfQojpQ3qv8vYEWm33Ur8ncmATsbWq1JBrSofHjUMeq5Y2DiQVBDHrFd7KCq2QxA",
  "key14": "TeNTCEu4SuorXaiSZ8mh4RrbahyaNivjWRqAKYVsVwgJDsUsJADP5hv9z6hquWDD7uGbHAKQHoHEAC9htTkfNs8",
  "key15": "4Pw9gK1DwZzjegWiqJFMM7Mq57J4AwtLzot1wjmLU4oPQXWHyyKahpCXy6Wr2315NR5gdnCe8XQiSov6kixEPECE",
  "key16": "41DJq996K2mU4BfLbtRvNEi5xXKHgKjxXW5oiqW9CiWk3bn6cmHRSHxVkys1cXMb95DqrvfwMNhfLfphmn3R7gzA",
  "key17": "dSsEgTwqeHjnw9ByMDQSphKSUWUrqX2V5M3mywL7KzdjyUJQZVZdRw49R3wV17D413BH15YVLBfeeFUXTTgJScR",
  "key18": "3gqipPDimAuCCk9ox9jfnPKoBs7nu22xMzRkZdVPaWqTRGRsV1AnmNSnAgGn6CTR4v6tC72nQzpJVuySkUqzo6Di",
  "key19": "fi5JHnPRNw6CWFWghcU5R4tCvPGzC8ojjzGse7wcZgPpMqFs74tS5qF7mvZJKpEVmtzVG7RjtaL9ZT6Qx7DMWGD",
  "key20": "5TPnkFt5Aj1ecEH4gzpTSmuuLf7cMH6oWan5XWBU966G7PpB4JfCb3oj5mSRR3AoSn55WtGe589SFjjYFH9FBazC",
  "key21": "5Z2f5kpJwH1V5fpdBY2xP69xHhdt4tDqNshifwR6tGFhtcRYDyyRNaz5Xa73BCePiWUJay8qAW2fSgRWmw5YEWSK",
  "key22": "5vHLFsPEGhPUDmqvXwr36nRZoe41QTJod7Tydc69erC6TKfGDg963qTWAbKTchcKvSPtQynpbJkd2sbf7tk2SQz1",
  "key23": "28rjjSrxKhiGfkBgtf7fTJiHoMHfKVegpVUPVYrc6Gf9Jp2rNxqZ6JgAYxiBefEjW7nAkkC1YURYABEJsxcr9MVc",
  "key24": "22MLSvxZAu9hy2SKJc3BmTKJSqB9dz6D2gacrDazYU79i9e3qGkPBiJ2S9XchSEKnNnyv3dm9fh61qYJr1sruNCd",
  "key25": "5pzLc1kvtVYkNpzUU3zQKDzBuQTCPVnyvTvz5P51ctskZMjp2eqnfmdWVPk11qTg14voCDzkfGnSD6SSSTTd6HoC",
  "key26": "3HV1AXpAfhumJGw5P6nVnfXuaUnNzADhzxUN3GJcN16MoANTdMAtXeZWpWRKW4czCyB8D1oGzLMy8qkGGeFikcT",
  "key27": "4HFc8GmGdTqAdPAEW9X7qWfzFGKjGXwfzCbxhpAsddGBJJYr26CQdvpBqG4A3Sm8yisdGGhMbC9LyGmXcfeG3XMD",
  "key28": "2h9u77bcFS84ukquyBUcxFVx1ffc1eEvHghUVebz6EEZ4qjdPmaoeuqoTtxCa9qwYibjrBZHuheQ3RziQFbTTCRj",
  "key29": "4rKUmdJ4PBZBcLDayHg5rp9YxTdNFAbcRY5rJqkxpsLik9iJnzqhh8eb5Uiq12mkYDff3kNxDqH9bMtxDKEYnCdj",
  "key30": "5SGhsiFMXR4gmvFtiw73vAMWjFA218b3k5TZEe19NtdaJKsddQ9aMass932hfPuQqJkueVBqJgpUHfacp2rC8m5A",
  "key31": "45bh2Pm4bgTSrsFi3Y96LwBasNpKzaG9mJH9MvKZJxA3UregVzz115CRXvhvQAuhYrxNasXGQgxtghhNcD7GQbFg",
  "key32": "5um6kAdaviVemWFn7xBiEnUwez5fcmCAYgxjhWxQjCHGRnhRWDo3LfwqNvPwPGDZZQSFpqzR8ZPbBp3fHz9XkDKx",
  "key33": "52uCf9Tqnaj7BSivW2PpbYtmDMFGZAycndda2GdYj7s1ZMsQEc4U4Sk35RFzvnbPf3BoYjemW6rX5LRs6GicdmLa",
  "key34": "5GJcTXM2MTST7a9Vg4QyVswXEWq8hSjq9AWm2SLoH25Rk2X2gxwpBiAYGfNHRgPPQWvgDyySNm9BLqCcRMSMZ8bu",
  "key35": "2imiVNa6kDtyX68igZtaWCNv4Pgwa5gvXcqJBEgwJBNcfhuUVfZ1hjyeGF1WxGqgnceFzk5T1q5K7tUVN476mpHQ",
  "key36": "465YjDHS6hdB6uczbMSRGHsVDXaC1DquUaazpnuz3xy7VUpyi1htPhyUUARnjxWTLEe3JBkJC4QnyAvSvUZ6Urrz"
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
