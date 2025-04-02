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
    "4MhECsVSdoeDgaP5mEzsbzcvruvBTjapo7TQvxFqMNB1rch3Q9hQjznVa2xSP5psFR4x3TkRt4u1ghZAVPjAgWHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDWSQjwcjFiP4D7Va8Nbg91JztL4x3iCStHmpVh3xbQvZQboJLysw6CCt7Sa5ftYfahveqK6JY4dVRqtLKEwwiz",
  "key1": "53WVne6yoWPpamHb5guV1eXcjfZd6MpgenwEJBc7CWyJgbnqnh6C3zdrChnMyM43p48ejwR6ba4VR6sUGrC3uTNs",
  "key2": "7J8DFwqijf8Xz1CpEXai2XaJXRray6PGve8eqXmkTVsdBRF9SfHJJMRmHtaG3v5NHkNoxJACbwKw3Wx1XdVvnGa",
  "key3": "4M47gGnun2J9TTQ3cwfAkoF6iPTNM7Z1sWqABCfGkeLAA5VvqsqbTJsxcoMdkDHrxwMUtuVKC1Wxv7nadd43UY3p",
  "key4": "5pTCTBx7J1MFsSzxHXvdwu1xTaZAzo1GH9VH5NjbrwwzPDz7Zja6UfXhcAx4K6PZXZxeoFhUZWzDEQCwDcCEY82Q",
  "key5": "3EMMH3gZUUX6njdssSxHvk4xwVt9WEMvERW2CTFPxwQm5axjFouTt8GGtLhzuePpfXvrHRPU4bTuZukANsBLcre4",
  "key6": "5fFNRjJa3s4xh8h9soskBLwjrT8L33vtohozCGbyaXFPY2iVHVJT9kxa2smfBzbxhX4tjVbrCoAMGxBLb1AbHq8j",
  "key7": "32vp2xvVestzvw5G39pwav6g73jhqDzkbgHS498xbGEGWFfQu1DiWtJWcYiAZEsdYQ9jFFJKAkmLJ7W45Kc19qEV",
  "key8": "4hi3SYgVzg5AioENtMvd5A7EmpXK42cFYjothrD21mUU8AiykhukAcGT5nx2z2U8bdm5mNNUvRJvJ6J9Z9H1PUFi",
  "key9": "62SissTrgUP9QtPaxS7bCjQP4go5Fumyr9gjgiixk8u7rR3vwsLtHfg2zypdRSP6NPpQForcrtvu3pUJbcKSycn1",
  "key10": "5SGw9B8DrV9QzpgPh79TYdrmUeYwCMaCeym54JyGb8qQZNKRttJSuvLf6FwwgcZdV3s2HgzBrFtZF6cbc2ZRz33M",
  "key11": "5ivSmCmRedcbxMYvYVw5L2L958TFMcLpqi7omH45JWCoqXWdbuazh6WM6MUvENnhST6JQo5LZ8H82XYsQfTZ31ZL",
  "key12": "59kyjxzHRiWBEzcsYu4b3vA6HqXcT7QAjv5HkDqYCBcefrKjKxNF8DziKkkLKAJ2tBHN1ZLksws6rXFMnw8vmk2f",
  "key13": "24uss6wLxKwyLiExpPpoTFYvex1MdMz6x29UxogEb4KJU7kigofRTkVzbcvXf88p6qqZeUeS6j8SD1bMbos7EXUA",
  "key14": "euei1iedyn6s49LA4yohetbr5Xz2Z5PGs8M6eJ2B8RQfonBLEeg9j1kvpVc3XkHraGdLZrBoU5c2bBz4xwWRret",
  "key15": "3zdEk4718PNeEt1M5bE43XBa1qCGjGwuy6Km448TQsZmRHEn1eruVB2wXeNBaN4ZQUx7MXixr97QrvQQunbnT9L3",
  "key16": "2Go1QHjANWo4FmDPDk9EmYz7grUW59oBPw4cw8BpEijaVEm7GXwkd5F9crTpaqDY6LhaNeRma92yt2HfFi1P6wft",
  "key17": "5sV5G4hawi7wdvGNY7JLMVYvytc9ayB3FzVaR9HCvtwM9XtzDZ11gDyMvXGba1p7uQJfkoKhiN2nhz4w2FJXKvDa",
  "key18": "53M17RsaWnjS1DjuDZbc9a6qWvWTbcjaS8HUdK1Jf1rEtPPUm4N2KvrAbCSSNcrAepzgJJHjGfP4Lp1sLR7FW3Rk",
  "key19": "36YSc24zFjUTfrcDM7uTSFiLnVWmhSMBND9bcjm5fcubhSTRAxP24StZTvTVNy9MN7ytnV4vzEdPDn2mjoTqoSHh",
  "key20": "5EchnbE9U3cvvSfmFbEGYAhWTr2xXVSj6xKZH54Jao141PA7t7XYrvxCgwB8aLwaAA2v1pSHF3rab9p2ujq61onk",
  "key21": "5TKQB2xmM8iEYvHeTrEWP6yftjoVJasZJ875qUTBnK5d5MnaDD3DWKTj1esxxjUaYMbDq3gjHMDcUSJtzp7LiWnu",
  "key22": "2R817fdZnmPevsSyNtapqbH3LDAt1CeSjhRgZTwEM2tRFHNufvKKL2wDRwn77KDN3GaGCFiAKuxYGsAhRJPWkf2P",
  "key23": "zsqRKKQKafoHceubyD4XbEhZECA5wUZBY3DTsQNVjfrDminxkWLogQ8NwQ1Sz1MT3mSxMZYiyP1g7yAgaqFnqV7",
  "key24": "5PpKEXcJTGtFhKBrvckNm61yc3FX3VTnsrikVkKXfXHGWAcHk1Z8EhvXWWeBpstgncU1uM4h87R5LLLHwg3eMVsj",
  "key25": "wM8gUBdC3JqyjVydRY1haiDgM2GacMhsbNASPPYHhV8PGn1ugtJXCJmU3AteMBTKhkXv1nBqnL1Y23YniwH7zfF",
  "key26": "NE6tHq9rVM9g9CoSA3PtLp18vqHtCEK2G8Q5dn8TCKnGTyjKzVdvTNWVvfQCAQRcRJcxbeG615MyN89Lo1BvyoD",
  "key27": "4GJBMVXfRB4ca8zLWHChfMCtXtFVZt37SFVdB4JjyeqB4BBa3X3PtQLz8zG5XgNFARZs7qpLUq2HzAW9p5VB2wVA",
  "key28": "4ebotJuSqJoHAy7zPmJq1xePf7d84Eb6JpK8RE5YW5fyn1w249XZ1cHbGeLWVVMkiiwUWnbA9jtaa4p8USv29mfK",
  "key29": "2doLw3UBA5VWg1HaDzQ9yMgWQLRVTei24c41bz5DsDizQ4Ws1vwFta2BAExdhhBauv6g2VmG7qgX9x9fC9P5jpMg",
  "key30": "5cyXLGXkzitEYng3HeWU75C2zWJwHHJJJDGan4GydpwT4UhkQS3F4jPEvYrdSJB7Dv7MV2NG577XsDhA8WUEtBe1",
  "key31": "48hUX2XUFLTNWJ1q85umhMjAxJmD7ddqprUvg8zEtZmBSqdhMAdg87ffJtomv1V4RU4ZJ4eik3QWTuKbHGQghDjR"
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
