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
    "56Q94KgVn85PsTreZfWyGqDnz7aZmAuamNmRdr28xdPEgfawYBEzdHGj5H5ddAJ4G11fLnJhnpdqd8HdwG3JHWnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F56Shem5NLpvfoTYhgj7ZvsvrgUGMA4RtWcTq2Xx1nZNcKJ5qebSoJ5Tzt7TzYMWshN19c1pmbutPYszVB4KWfn",
  "key1": "thJGgjBuuyMoHurEbHvbkLJSaMy9z2FGREoyodwaYxAQdScNSM5pe9AEwy93numoqA2Mb9tFQcksTwRACoScLRs",
  "key2": "5qXZucPadvp8zUbJdHKmW3DCqnsmTy18qniwZeVa41XoFRW2DtNfYbsBhN4TXTKvdig9Hb5SzDFNH2Stqgx2qEP6",
  "key3": "5MyvqAErGTqgFe6xAkFB6ssqE5v7QbqfJyMhhTKGsNC6LwKmADEFzFW94k5wo62VWhrVvZnYxozo4rz6KGUhVosx",
  "key4": "5XGVXzYFHVeiUB1EByrav1DAAcYZCppcwX41ezo5NHZWvy3RTSV6zwDZYi8txESyvJABdm8UDWWCeKdTdz5bXYSV",
  "key5": "4WEyatAovbZ7noa3WmryJTPDfNXb8G9Q3ktbtJAjemcrL12yjpC5iqZX3f7EZMhHVjEenPzSm9QZNw1MGVHGBHy4",
  "key6": "2QCEepSFfDp6Uisu29p6wAfz6TmeMxu6hd4xH8PadgS6JdrSgNhmmhWD6rRifXJSKyW4art9YL3GpHKK8nYbQ9Ue",
  "key7": "T39QstJxDKxGQqXrCriSuCimcmDka82kUowmZ6CRrPw9MKEa8bhhGtYu66oRRQ6cFu3Bnvz2WJ3hnaSAuJHQTTH",
  "key8": "5hM1gUTBfDjFheHR1ue8ThFM2hRgr2TncaXF3xgPaLyBAK2mDpvfh8fCiT4ChkMsoHTZZusxLPDcmfvBQV3e7PmB",
  "key9": "2siT8jnFnpaP2mBABYVrPgwPTUoXjHUB32r1ssCWuPeLNQuV3jYSBXD79g8BPzE3VbSHfbWokxtTeR1uK2kCdCVB",
  "key10": "5oMqhCEsNpnckMp3d2zmeEx7M7fWPJqed3SFxgMVDfZfZqP6qMDDgP2XtJRx1aLfb2D7HMqqCvhjFTvTugs8ByDs",
  "key11": "5NQffFWaBxH9EJ9cfTjAM6Rgj5RfUFU4BMwbhtjGquqgW6qNCg5eWQZ5gRhLMeBZN3udndWWy5ri2Uyjr3itWUN2",
  "key12": "513zYRH79XVB9gQjxSMgoXKFydWDtcE3q4t9TP7a2yM4PdSoaCVMNGHxSgcvtVKMS6Lqm3VHQZk83HHBQ4v3zsTr",
  "key13": "2qm9Au1Bon1AoBJZA9ZeUAp19hiHz9a5SJhiRThwxP4SHkrGNvRCKK7RqwXfULysDunMZPzFPmm9fRvBWNedRdg9",
  "key14": "43foDtG546pcUgzDuwv6pQt7zCntYiQV6p1bTmVQgvsmSCHcEPdPWYM3xgNt8LQUiXGSaWzQ2SQQRskMg1EEsxRA",
  "key15": "GjzDHxvXGbknq76bYz5G3FJdYwAA4cqHKwnnbFaovECAjHzzMb3bhjQKuqfmeabBZFiXLwKETEfhyPQedyt7Xdi",
  "key16": "jTvXXPUfqBFyQeEYK68peH8zv3u536erPET252AmDX8mUG8aZV28iGdQqWwnjqshLX3EKqC2WfAEgiiAe15eCo8",
  "key17": "3FyoqtuNH5KB4ZNBiV8YBfQpxYonunJGXwvV6n3xpEZTohSuESiz6T2Pp8tSHrM5Cmiwr3MZLrk76XDtDRWTA9Gf",
  "key18": "xAi85cZ61qgcgszjeuMzqprjzqc1EBBF4nNJjwDo7cx1R54DuzBBw8vQr1VqvyL236XCFBsSVSrpAVg8sfTmKgL",
  "key19": "5m7ewpvrpEff1WjmDLSkM2H168b2tVtPPHv13eZgbA19PHyYjMX7edBKMzRvavLTJYcJKoi2236hx8iznBa3CMtV",
  "key20": "2ifYnAVLkyJQZumr2asX7StULbaZYPtTMF2ebJz6Kh12vNYLbhnuePzvvyDEXwTHKgEt9P7SCJbghhTZWwHHZdcV",
  "key21": "22x35zBrDMnUqzLyiYQ1iQkPgWS9YvHKF1BUsSHp4xSWiZCV67gG2sVdV5Md6i6hdob6odJJBYQ4Bs7bWbsLoZiQ",
  "key22": "5EcKxCaPzTnz7xoTLmdhMtufQxujWHWhQbxDWqEGq89tdZtaidqD6nQivcs6LcoNGbvKyjnpwyX3Jeh9thNk7B1Z",
  "key23": "gqNCNqwvJfcTo6Amq1JwjgX9LQanhtdtbYW4i8FASVFmTszGoUmUptxzyae3eTdV9FH7r7vD24Q5zmUtTihDkMB",
  "key24": "TTsbbwqa8LBd5zZamnoMpYnUHXHehPPKtxgFU924cMb9nPbT5rJQAzu2SsbDn2UDLLj4XkxPeqiXFBtaYfzBPAb",
  "key25": "zSGh9k2RKTGGxTVm2LCgRzZ8J3FBYnWdAvVEZPDK1eafevcecCnXofPPUyfh8GCqWE894Z8QW9UvKX3rvWm1Fgf",
  "key26": "4eKNbSTLMfRAahYc4rmyJCNbafo8FKmzz7ihNpvAX7nJ1HZhwqyx3Fpz5XVuMynrqiko1d8PjKe3TfUvTCbMWW2M",
  "key27": "4YfyWz9t6SHCPbiVG3aCieJ21aN5ArN5r4VESNzy6evZ4P7vuKV82ReAmCNt9jyPrPaK7sLarQeCX5NRgCUUYLXY",
  "key28": "45tqPrr3jPqqmK4TfRQQckyyt5aeb2qZ9fiiQXJ3KSRJe72xkPprnR6P6hoDTRd9PThej15ur2H92Bt8nSX8AC71",
  "key29": "2H7TUnRKwaDSLhF83ZQSccCi82KSWrJK71hsvGJdJd65A8PkCV8HrTWpx6V9UedZkgWxZJYNQ68GrDwSeYaZxhv5",
  "key30": "2sEpPpz5YAa6sJWW1xyJkHJdLBP34m8DtmLQKHEb4ioczyEzCrBKA8PULVqxipQZrJkGbGcmjEagY2ZVeZVT5CwP",
  "key31": "62W8eMc5BL9EEmaCxrFWL5Zuhr7GzihUkXGJWofCvowdu22Gr5L9PFa2XQQgEvGcqD8kVkvsb5Vu4WRzmA622Zp1",
  "key32": "3N4sWpPZrKx8uzwDtgxnDp3UDVgZPiznmh9LtpQ3zoFCGuTdjFuMvZc2RYqPhyB7M9yT38eBVdLFTXnrNz4CR2Us",
  "key33": "34WEGiwGHwArU98ASUfb5FaoFRQzuBzc2YxVwbhzTJNvozJdr9pKmzEbSfsfUBoQaQpmvUwdpEKLx4wbJPBwdvMC",
  "key34": "2GBVCeGbi1nqDp56yFxxwpmY5ram3KvsGd3J1kz72ZYibZGyeVrxNACLRwnCAVQK3jaa1y5LM5gmcgiS8L3xg2Fc",
  "key35": "3dWzkL17LC6kHxBaRkyvcpZrMb1qEmnafN2VtvegpERPEitKEfKEPNvJbACRVWbL1LEx8YisJwbkEE5NjZ1JWR5v",
  "key36": "2ebmX1MACQXpyHRJcunX8zmkAgtx6Hdb8p2ip9S5S7XXjHskDZZ3YQuFMC69fk6gTDwGktyZhAwo2EgxVMnWDiZe",
  "key37": "3rNiGFYPyc3BZLGKSuhatc8zG5gMj8x6esmm7ouXuHTTwuqVuBeW7tAM5UpxTka9TjqeA9JJo73qTfsB3Qv8EGuF",
  "key38": "4VafYuNJRsExAkrKo6JyucXm7ULJmg5YV9dDES4sWpngVYE2nmcU1tFgC75qgeAHuivkZMfp39MxNwkze97qK9sj",
  "key39": "jLBGYQfj8UhxW9QhFQzqtrMDQu3ZHbroCrezKEULGEHPqr8oBKPG7u7dgKbrEb6BgnsycNd2bZQsDQpJhJQV7VH",
  "key40": "2pXJycWoDgszwq6gUCLSc8urWtk2Hkgap89jvqeCu28oJXQ3dvz7ZXMAbnMUYbYANbkCq9NMMrr6xdDG51vwW11N",
  "key41": "5hMoaujvzxkocAWTBTS2RrxJuACHz4H6B3Ksud6dNQwvCMeqhbGWew3TZTFzwCviepthkbKCeerP7NzuZnpd3L1b"
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
