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
    "AwqHSoe2675pSoNgPqdDiaitDeGjpcPsrdhKCUEffHwVR1uycVugyTwem5ZQ9mH6XpuTGFBrVVjddcPD1JuBEy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jM3Fov7jo6zYE2FeG6LthcP4tEusduLViEnsjZHgbNHHWj4WXFrXkRJBkNFpiXpxbAKPpm8zsL6T4Ha2GD4tnZE",
  "key1": "4smCJeHnaAkKpByhEKXSRy6nPfFJmhXjeXL9r68s6hNMPa2FwiBbHYPdduzihksANadd81vadueAJLTFbdptCc8f",
  "key2": "3Cv9vXBaSfx3gMmXVCoTewRa1CNpkXhDh5tYs7YtcCZr3AkMjudkJth89PzbpHhc7b4u8eiYGStkA96cuLQFCE3p",
  "key3": "2NSLZqLnHEp9opdwkRfb3ZcVio5vAf1u51zRx3hcNdDVDuNwh8jP55PVeYervgMpSs8DdUwNq5gvDBtFGVoFPzvR",
  "key4": "4tMX3AcCG7dfJtmZt2b4gzAAUm7aG2MaFtDphaX2fgDPds4cpr9wXUFDWdP3TyDugwoacdZSuywaSw6cYKxBidf8",
  "key5": "4x5spDDL5qgVFSyoQt48NYFt2Jx5U5LNvR1HTYNkF5D6PTkrfaCp3EJxS1cTsuHiQQq1D8NMaQVEmfzr26t4KkE3",
  "key6": "ug2JtkyuijeMeEFUtL8oPYa1MpbF8mWHbA3A8XqmzuMKuvjicpmNUWxx3PUEzJ1HaGxHKLmx5yrCEmE5Yz5F8Uo",
  "key7": "3Gei6t18Zjqk4XTYMDyHG8idkq1Lj4xAAiJKiTHnr9MQJiuzGTf5d1Gj1x1vNruh9GJ5bKGo1xstJ62mQ1F1VyTT",
  "key8": "4ZUjz8wWPqeUjQJaT9xsYPd5tpDHJo9UZB2MSy88AH9GM7vsDdEsfN4BL7prQwiapiRRTn4naU3Q47CXLue94wSe",
  "key9": "29QTCnnfMWoenwYVAEKwwgAfhyzGcgFXcawRxxL4KRyjEZb39ZcnJ2UkSzNf87PL5TrXxu2kiyp6TUL5i6yvD3id",
  "key10": "5CqXKDhfBYC792ckkYk72ZktsB7WK8mtptnGrancjvBdQBbsw8ZogY6VsHmhkHZZV22c4MhKMDBDpivgCBjdQtNY",
  "key11": "4weAGMsVmJnVSHc7mtfGqZTGcX9cSLZU8r6ndYxxsPpZn5snxFDjGTmftUueerDkxwFQuCZiJJ3xemVmk6gxtA3p",
  "key12": "64DqG4Qf6CVwtz98BJB6xdgr6XkFX334GszrkJW4i9cZ87Cu8p6tesH2ULFF8VFybWd5UHgvBmRt9rzXwz4Ga4Mc",
  "key13": "62gMkrenZ8NbS3TuaRqrUf347SX84ELumQabbsACvbFWtGkPyBMHLooLcZQdSvdv7XtTABsp8x4eZoDNVDaBc87K",
  "key14": "35JKvZH7zV9ohczjLYgT63rFAbnwGirWdEb2jtDv8Z8hWK3SpMRdRfR7g2cqBWqqJZvF6FcvzFkj5MYPBudjvQB5",
  "key15": "4dU5FrHKHttceHn4yJajmZx5McLNNM9N6LFmmCrgbYLJhzoji65FbFyyrPep7Mi2EcNA8sdXYKiYU6LntEEicBEq",
  "key16": "2ws71KKe6KTe8tA9t3k5TQineyx6tw7JUStPTQNTPPfNJbtFnRWCw4c8rNoTPKe4FPp6vHwrUE3dxHtjw7HsVpPV",
  "key17": "1svfYK61aDzo4rXEEnCR2SM4thXJjYutg5NA59GN4pq5XoJhnNmMLXrt6CLtkX74xALSV6qeMGBKQxn3vp6gVPB",
  "key18": "5aKy1hmkw8XKkwPM7yZRK9e25LFCXy8rosyzPyUxUbSy9qzUCPgahke9z1V8pfjYAy4YmuyT6Tdw8JiozMAA8HtK",
  "key19": "F8spggFE3igpWrAjwfXs96ZtgoX6MMbAx2RjqmHW8qqRtZEisXSfBD9qqVJePrpiijQaUbuBmEgaGVCxV8qbAcF",
  "key20": "5gSLpW7tii9zwHJjDjFDRdy7YxWou8hEZ3VACHyFuoYGbE3xUpZs4zKjhzCyaXrAFrt6qtWni8F8vjCztC6hMQLp",
  "key21": "hDp6dbPSZDh6PVjj4L63DHwi86wrmyMAxhju4XvE6n3APpYHe5qxCB9ZjBsRp5jh2b6xP35LkSA9P4jLcc836Nq",
  "key22": "2JQW1w7jqeEHTRQTkjQywbvKJ7HxQEB7zPoZhgpZMWP97sYrNWPBCC3YaNsVdJCZZeR4ybb5gw8GXJ8kqTXUitn6",
  "key23": "3YAg917zHp6XNc84EMBGteDmHZ7wTbE4ko8trTKE1bbsT9RarzVVpyfVF2A2Ckj9qm6pDrEBm9TwVvgJAKW5vkRq",
  "key24": "2caf5xDuXCCR1NqMiU41igpWhG8pg4fdDnQyu1EGmEQASh2UhpdzLNU8g78dHXW7pc8nuikPwBueW5SPeNybvoc",
  "key25": "5SzNRqxZcQm59cgFUKpPtD6tWJPL6wBJ2dba5wr9oCeBhi2GmBu4nVVkuz4fRfZ1mYa3FkXZjrHH9PjESK1RT99Q",
  "key26": "53T5sLVfG1JaJbMZzEmAE2AJyMgXFseEF2VBADb6CKwz1gkEKZT2oHf38znaAqUHonfdMLgYqDAfLfsdTHaWtXqb",
  "key27": "41rtsUDAqfba1mEgPs8MnhmoSp6WMtbRmeFjznN3T9BF96QhrpuKWzg7pvGwYSjPgHTmjyDH4pkRWa4zd6Lrbatd",
  "key28": "8ShQwzF4t6UB3LoKbV2Wy9qABV1866Xtiz1rfzhMzSQsdgs8VRa8JEWq7Ft3RdGetFNgnyV9GoFwsd4x4etwHRf",
  "key29": "4yExviwaKyTUHga8wnbLWHViGSFpWFnuBXNa5WebosxS1x7Hv8CCP3DyJTCPouf3AFE1yw5xjciwEVQtiMgiBS3w",
  "key30": "56o2VhYyQDNrNEEC4JmKxQGJMjxiUVGFS9mdrFi6A4mUJs5dRK4s9d1m314wQWQAVTSqvfvQFXQajUf5dupfsyeK",
  "key31": "4scE1292659wehe2a6Bz82i3oMm833QG7Eyw2F6MoasDRNWEfgV7pVNyp5RHWaYE7WtAFkbZ4DTaKn7jFgS3qZ1x",
  "key32": "3gJkuU8yvewD1U1ZcBvRQGbABVjoEVzRxUbtBjzkXtUsj2QkPALrGnQjcR7PgTkTWPYBnuZ6Pw7HC5CC4KrTHRQq",
  "key33": "5JYRMuaY53XZsw2KyxMf7ms2xkWU8ZXrAxhMCKJ1gLFWtLSWtYXnXevcLXFhdcrb8YwRcxeVNsuB2BGx5rp4bPRv",
  "key34": "4MmNaAdRwm6Vn1f2k61fwQtqwWSsb39eax239dvY8HzVaDWLegvksADYuaAyGjzAzfff9Zg4mVryRBvhf8FNcLoP",
  "key35": "4faJJgw2EGMffrT5viicRC4AntTPemgWbcL5mSDR2YFvHycaVPa7LxgWoTkDFHKfEy9iTeaQgTGzaN7ksZw5eQ8E"
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
