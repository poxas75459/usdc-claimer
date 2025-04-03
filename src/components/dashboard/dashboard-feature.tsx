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
    "4CVrMEHDcTMKPj2FvwaFCbYuzJbqrqseeHYXU8eCXgV5qpYYXT1iYTJihGzbAic9cXgNrxVxotpG5An5gHAhHskA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuxfDX5saVDDBdJ1jv8BvzoNLqtBJkNwcb7XLVTYaojhvxxzrkKQ7QngQXnJXo6STvp9DxziDniUkZdaYacHzGr",
  "key1": "2LKAmNd8cfsuemoCpyaFEmG3jnKa79akw7bdHWUrMaRtsLLGyd7Es1jFLcsskUv3qUQLMaLxmBgtxn4hG8hxQSsp",
  "key2": "3zf57vtTm3S9HdFQc95sFD5zz4rFWTiPKaa1nJyeCMtSnqkZwxWMpNVMxwmRHtMoY1MKABQLsdXo1V77yEbpHw8u",
  "key3": "rMs2as6yviBY7R7tNeDjMW6LYWj1SfAKtSDYZ9i6BfFUGp4kYkWxgiLuwiK6RV8GtgWKDTLd1xNmcMYMLEAZuu7",
  "key4": "5K5Egs67mej33bW1n3HZW8d5XCnbLUw2wkdjzds7Xw1RL1G9VB7kKKWd2WJnbtzeoMnBjHPy5KU7dPo2hvE3jQra",
  "key5": "3Bpwc4bTE5FKbtA5HpLeA2xNGh7Sm68wLBQ5XZjVncX7g14S9tn33JxtHKhapGCKX4VcsDLpyLaYien2saRgnPXD",
  "key6": "3CaWSAqy7GNCXR4ucdsRKtvYxEPyvo9FsrnAXauZJywUxdakCFYVLX46sHNJfSSs9gt2vmecLXmj2xrwXzCptbhd",
  "key7": "5aH22i6ePJ948BwcWtLMTL855ESZJ8s1GdwpoL1BeZgecbYynyefZaBbvfW5dSPFRPCtE9DHjNzBcrqCMr7tzuAg",
  "key8": "5JLMQq4Fje5X69ycy4DLvdNvwHU3QRZoENxLk1c77NEmXB8gzsawmKiTgRu4utELzPEXz7gGnuXyLF13JCpTUNpw",
  "key9": "5Lby6Wobaeyh5AdhSwU9PaTFaENGxFXPmRGFiaFhva8Hy4gNoA9DuAMLzdWGow92CkWnNCpbrAT2hGCZvWc24Gtj",
  "key10": "3W6EjDwPsypf7dfLrsGkaQ1WdbGg8PZSBGc8MqtnRxa3RwnfTNzik3RdD59N96sRx9Qsnmvb1ZnCapATcZnjA5Tk",
  "key11": "4VfmMjsfDBjXFe5V4whvuGL9NirhekAUgkB7bjf7NnG7JMyxoBrQmXwmAXycvtXgq92nNceaBouz6oCc7ATxabn3",
  "key12": "2vMnVQXqqKEmJRvhSFkZ1Ra5P8pimGLESsoeSNG44rcWvo4Cu8YB1jBxufnwmQ5rvG3qUKTRsNrFyY7CNPY9hJwX",
  "key13": "2kE2gWid1jEDyaW78oLw8CZ3ff9QbfPtXZ2fhJghRGjGFgqHcqL9hZi5Vtoib7sEyUtv9SDwQMKR6wkSzrwAzqCh",
  "key14": "2x2ciEv3ngQSu6jVdddsyYAeJrYEV6dtHWgRiMneuJ343s8SLrBMQx4yzyFyqPztEuiFzGtrKrHGAzkJLrjhhGtL",
  "key15": "5hVbZTpZhwt5nAn5ZDqEPCk7GUhLRfLGRQmZuJZJZDaZv5vPiV4PYJV5pbYZMW5zYgb8Sg2qE3EMnibE1thRq1VP",
  "key16": "5vRMRqSN19wfozEjoWv3xECrWc6WPiYyZ3A5vYT9bFKkuaNh7BxP6XJvBWgPTMAd1q4wXeaQv9NqPRh6mC7c9VQp",
  "key17": "5unMqVeWheGyr4bax8DtMjeg3Ymw4KqrAZipVxvaj7c3Esy86SEX4psnCi9zM8TTc7xB5jVkZsm4x2NLRHhDbmU6",
  "key18": "5mTdL4TDWup8xFtuZGWA9AGqMa7RGuZoCmGp1c7Y5UhSL3a8aQX8RsCUgAdWge9fg6meR6sUvCmdB3yrYkmotLvW",
  "key19": "4MckEtXXqKSopfgqW1wRZ7BnzCvvipVBGjBspJUFiX7ktp3Xb1soKsX1ejyeTRnRSFd1bVN6DJN7ZWN9PJfntWLq",
  "key20": "4rfbD59mt3hNJ76f72Yw5qvNquYSxg3jYPf9bx6Ey57fFiJtKkTKLF3JN3ogVVfAg6jmNaNnnpNvTgvz1pwmpHrv",
  "key21": "Za3P2mETjznqA7LovZTmHdAqN7QUoPYyzeRdYRUgN96wjNncQKhumTJCKDGwQhj1o4fbCAEmm1iWkztrHVFXP7Z",
  "key22": "561GnBBKy8rCQKxVEq5pAdVs8dHjZk4C9wRHTS1DzY6oErGzFrTfp2gSzvVbtJnNraSg56RkEVLqMTNNwUieewoN",
  "key23": "McV55bNki3r3anHMExVpPzRsg6RsJ4whTCj7uvXwEZikCwgQUbPsTxqwMP7mCkM3FSNvVxr28x8hznKDVeAFHqE",
  "key24": "4QpRro2HZy9D9bWAifJdzCAXXyk6vviQiXnG3mgQH4E9wUngyKTWFSasdbnih3gMwTNBGVHhcBtmPj7SfeQHcgJ8",
  "key25": "5VBtdPnR8EKu2b2ZTzUhoFDox3E5hKCxUjKeZo7xkAumixEsMjFQNsKXhvA7dgBu9trD7TtB2uwB5ef3s8VB58fN",
  "key26": "3GRshusZwN1Xucrf93n1VyQfkuurqmdmfTBstXC3NxS8KijY6oAh2ejAkQU4KyqyuKxq6bUiewGCyiE4mWwjPug6",
  "key27": "67D6Upr8ihx8iC6isniYxHgob5tVJqLd4S6vHvJiQRxvCoy8taNs5RQYz8hXEa1kTxswme5pBJc9pRqqscfLGRrU",
  "key28": "46BsxWYGrzr7gbFSmU5PBGkjnGPXa9Nws1n7DDWcUqXcB36VzuUExUEYniaBwQJbXmoK9AXawGT1NiF7guoWo2WK",
  "key29": "43yzrvpVJaRjMfuk2TWtxBosQXjKaTEvygThZXmX2totJVNSPDPenomAPgkdPfm52cJfPxYbSC3DHy9EwwF5PNAP",
  "key30": "3Z96zGyT3SP5QCW695WxdhJTTXqsaQy5tzp3NYoWXw8Uo585DoH16Lz9xCUxNyTcGU6WukFwNLLc5Jcz4bAVekmd",
  "key31": "2MV5D6DyJbji38jZwZG99ZcanZ3sfycWNqzJJwK6jo3C67G31WVTjKENa5wWoy9UUkeWYfMhfkk8mAoU33fyRhoa",
  "key32": "3WhebHGyRyvhT5Z5SsC4qcQbQA2BxRvFM6165VQVjNfyhSY2DY4KZGfFPesjHo7h7VDf9HkRRXHCXdks6LEeSVrQ",
  "key33": "3rDydZJNyPw7r4fK7DXpfRkMP5Vnd5LVYWnsB9f249kWAFBzBQ7PbnbBCsvZGCXrZZLs7jXaXwGc67nkMpy6avNa",
  "key34": "3sE4TdCUD8jaDsSMTr9zYo1PHgQ8KhZ2CDytsVeXDAZArqrZyS8L1k56fWKPdM3zUXntUxEUqSeTjEhaLE99Ew2f",
  "key35": "Wad1Xjg5esdd2tEo524uDuJA9xMytnKBu3ukLcjm1aL2crmMEV1gdyqtZKebnRFFn3YmJTjSgZnAyWXomtmMccd",
  "key36": "MmzU97vZDQRYtEd8LL6ngDaNVwCsyBa8Yy6LHrTZX15StfV7Zp6FEN4RbRFMb2pLXHzq4Mb1TAnMYDr2Vo63veP",
  "key37": "5fHueUJrnregdcbzPPRfB7DjxsRybVE73oWeaQFuDQ5s52capzXcUWVcvZzSvoRaveSBrghki2G9Cunwa8jVQjFM"
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
