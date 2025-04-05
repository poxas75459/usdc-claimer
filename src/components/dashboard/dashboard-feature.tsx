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
    "2rRJp2uAdC7AvUfiAjvhwLoGbydSzxLPGq3acdvdUmkEtzSPWAvTZmR8jPR2rW53p1E2fscpmxUKVdde66BfZjnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcyJwXAY6eoLEYq5ox9hgLyWmnGVUudsSy9KeAgjo3jTiTnzP82rtPiuBu6Mtdd7ADB59kYiA3soBLhyzjNV6ka",
  "key1": "4pchkm2GWF7Nd2Ktht28RkjvDRjreq7C1f98tpbtVtvhTu2oqaGkthL8sG5LpbhR1bUFW5ZnB8prwBJfERFYz83i",
  "key2": "4XYbeMMYPFkMZN1bzvDXakLJkcxR5kSYSiA2b9oy8opUVDo4HB3yULUWyeciEYNCEuUMc3ieWKYWDCEy6bqo4CD1",
  "key3": "1UGFJV2j6Ff7KptdQEW1rztZLn6twsJGbwsD4mgKAe4WGR5GkrLNsM13Qy2ExHnF6NmnGh4P6nTbJYZ7xuj9Jfp",
  "key4": "2waMyuEu2VyUu28gXszJtuNPdisfd4JvoZnD5V3oaSPpYtXgfbtt9jSvKQnkeZFYt44BdS294xQFjPQ9yRoZYpPi",
  "key5": "5APG6mEK4268juJHeMXZLPh1pHGqkfuNk2j9ELm6A795VfPznuNYbeMd7if8A1fvnpuHxWtD7JXydfFyhnndP8ZL",
  "key6": "4BRAio8Ko76LbUYip4GmvVHfdny4jCWaPTUbPudZBDDPUQQByWxCimoungtGmTzcY9LLM1361MTEY5ZQpYJJkXKX",
  "key7": "zzNfvTgfPxxMj7iitMLXNen44Y6Gp2GQPHcA5TDTwDyPp9PDewTQH1NmZgVxnbsrF5mPyryE8sA12v8v11TALbq",
  "key8": "3wkbkvGqUHQGMAUocxSwpuNotP7A1xQeYSdEnPUM4oiPGHEtzWL4TFEk3pL4LfbfZsGD5EGUyFiCrtb7Q1bfnzkD",
  "key9": "4JbnkYFFKiqjSgVRTFEQac4q5412qRMBcT8Redpdiqqu9HqdrfmLsS5AUoEpZVzimS4v6e7LrnrpnoWF3Q43jb5T",
  "key10": "4Nej881tZjzDYhB4nuJ3G6eVTDVBFLGsEAcFDaNCFTjghysptGqQx6YRSKBHzGop7hpNC6ykrHSbbgvrD4y897q8",
  "key11": "5rwHfwYVabmQNJQBVHgG2gtdHW2FpomsaLQhExwor9ZXxE2QrCbJHKgC9sNWwZe3mj7dxpXDzohMmyzA1rZJcJz7",
  "key12": "3BcKKcKmxaa5gnvpCecdzTYeWgoRE5161jdBdV7srjcy1y2jT41tn8uJpVMFekJcvjxPD45QcgP3CJR4y6LzTARm",
  "key13": "dfFQCLgMR1ZE8soqKzgbXAu1k4ZhAD42nwczRVwp8ZM3f7taoHaSna4sQYYqDCHyB1m1jv5n16Zr1LqHKD64yfD",
  "key14": "32hE5jDWHBc295f6Yib7c57aRefmPzjFuLSquiRkqHs1H186SVDChFwFjxBctSV9uX82K8f6f6pJh2eA73wCDQe5",
  "key15": "61XtsPHLGivNMhoX3sT2fFCuz8GCxxntXYCdMT852TqcaQhecYzMxLCzVxvJS975ySRK72ak4wLpBFxebYkWNVfs",
  "key16": "qWfAGPaU5u9L3MDjk2ubb2jQDNDoqsJouAavwdRJmd3C3Dipd26GVCshrpxn46V4cPccJNVNPgBzpm2iWtAdQDN",
  "key17": "SZBQ63dLoMLLt21vhLaoYmFN8t3Y6jMsvL65HpwthMbNYoaoGG6iijeibM7w6uywWVby8q3zrFNpVN2zwzqYipX",
  "key18": "3aJRQsi2i8xCH6LLz8QGCsbzCLsLpB1YAAN4nBEnm6ErcPDaMXDDqnBVVmeQRNfjmAKpQXtT2ngeJMgEYokcKprj",
  "key19": "fkmtL77Xyshdqr2GSiWVWRMhzu6ZEiLRHdqUeiQtMs6k71dUPZCrFXJzgQgYZnpWd9dGqdhfqEafivYpycDhvYW",
  "key20": "CGbjkaiPAgox3TARgqK9xQicd2Q6EGAUS9WgLM5Y1iEx5x1PKKvbtsUuZdeGqcB5ZeZCxbkprV2HBpVDnWG29Tn",
  "key21": "36B2F2AiL4GN2YPZSRVjgyTY3HjLjwL3nD2nz5ipiJZibie9y6qJXNLCEdvwhdGJQ1f1hUpY5wdtzWkBK89EXAjY",
  "key22": "4XnnFKQ5skqCy32znRdMN3EFwkiZLfxusW5WpDpXrYqtNxQ7KxgF3Dr1mABAE2HZdDZoiRtpT2QqLWpxbbP2FP4w",
  "key23": "5XeaajUm2rV8MLDDsTXVepXNMCKsvcMTi2LQC5Tw4XjNK1d3LderHBMy9ELKpWUsCaekAL7wmqTkUp8QoGgui2Z5",
  "key24": "5CLzMwfLdeJy41Gy6MwYkt81SCP8Leb7M8jA83EnUpxEMNS3cnvdVG86HZ1x4Z7ctDx9c58pCUTYMgC9GqcWWx66",
  "key25": "uACHeZquAToYE8dJhUEX4FvY6WVdVwebD5MaTBRRua189vDq7cH8KFu9eafsQ2XXZH6FV7bD4BbvMs2Ya6g5SEy",
  "key26": "2UAPVRnMhyGGpJZRABdAJVv6CGjS5rxqY5mzed7ZAeFwNHUKDHGnoi8ZPhktee7Z7159C1d5JbQL2AagaMtMxBXV",
  "key27": "4Yrxe7wDV1h8oCxsNRe3ob51xmV3yiCbM79ouT6MfLcnCsCCoL6UjqZEgj4FeZ2d6HqHvabSFts1sGEZnJTF3eay",
  "key28": "5N9yd85Lvvwkn8mASMkcugHyPGMEyKsn8esHucajEk2oBEw9VEajxij26NCjZGYZgt5BjC5LtEuVSUNonAPX3jg3",
  "key29": "3qwSpxoUAPBNzRkKDRDPs53e3Cv1J7Hzq4yQpf5PG1gYsHQXYWzdBgLDGW7FbsKG41yzLd7q8ppSsNnBh8K38fA5",
  "key30": "5CutcJTzfR3YijhfRxFsd847d9VM1jC3NdfbBJCgAkzjaMFXNfQKBrbLReRHQAgM5cLsYtFbTSnpkaaj9snDp5U7",
  "key31": "3jWadVJXksmmeLZADR8PbGahSGbWLU3k6rEMftLB7zaA9cSCiDzyxQTX9T3MPy7Mvuw93QXCdbNz6ZtNGXEYV2mE",
  "key32": "273boudT7ab81CuD5uhokPVeSCHMoAodovxNq9wtwgzmnhw7NTBLAPuM7JqKfQb8xMSig748LjV1MvCsdHGJvuyH",
  "key33": "5qQQGDB7MEAiwtpxawviAo5LyAdzmb4uifCagN8gVvfrEGH2xgm8LvS8YiJr9b72yjih7kkUDqdVdfJFFn5Bap2W",
  "key34": "579jXURDYjRc48h24F1Na8GfzpV1zHa1Nt55PHT1SjtvCSCWit99tsSfnM9YnLYfxTzUyCFd5gkiYJiqN6ZDmCvA",
  "key35": "2Bz8Ma3TXSPNJqwPt2wkvHdxgPUGy7V5i8JBkvdGmrxdPuBk8RZYFakNFgd97x8zqVSgsN4Br1LBtdRJAjQyKsgf",
  "key36": "5uep9fT5d4EJ6Ma8QimCwM7PQTRLTBJnsTCSehCS482V2iMH6qtp9R3EXasE5WKRfEmxRq5EjrhUMaaNsFE33mqE",
  "key37": "4NKfxjf2NkaTdxrhCLB65sFfD5QQfurdPGAagez1xXLP5PLs3kSD1M5D1R3pazNR6zoAn778iAGme3F4FfqWHrnG",
  "key38": "2mwig836ZHAWo8Nme5xjMak27xAQPoFSUk3fzyCbCA5yTriR9RK15QyXikQjKVSAz1kzmgFKtPkrFnF1uwAqBrkq",
  "key39": "26eKkVPL9TbC6GehDC6xYnpgd6ke6K4WRRhHeNCikn58xiDYLwL9ZqdhdGQWFJpqVqPnmYhDfg9oCNBYYn5uMTnC",
  "key40": "5jLRgwDgHcenaAR945qwGAKDxeHR598Dh13RrDjzAzRViL9td93LpAJaSfehwvtQkWa2rJm3U6SWA15btxc9xVxu",
  "key41": "5g224U8DXH6PLCx5gQ7ZRLtvUssZbMNmTn63hYvf8uNoLuPJJ9ZAzFb7uRg83r2rauwmJqxHWeiLTVhcFtBGBpah",
  "key42": "4Mce2oNnAsZZjiH6aQLsFii5QvmpgueHTzQvemxCotdLHcdtNaso3gKzZNr3z75HHap7H3ebTuiaLNeXbSEkDb3f",
  "key43": "4nZC82KFhc4TMiF9pzqjp7NbqxieWDH8wNB5vWJgTNjnR7pWw2Xy9Mg4WXCSNfbeujkhQzEG6kVmFJ6BX83vmyrB"
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
