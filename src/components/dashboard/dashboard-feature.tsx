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
    "4jj8nh2wTSYT3KaotKwChbmRc8cqKpKVp4UxDBJCsSbaTRCdKT4LtUw95ioNGdvMK49j3e15v2KSeQPLrtvd1gdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAgbVSPMZxY42uPsbhJGg5GR4DspJE2jd88Cv1euutyudbuK8EpJeyhkNFdzPGMqkQBPrRSRjbLNTdz9wMmgGh6",
  "key1": "591AHFjqshZokPYNghS9NyYbTpv5HEBx42pFrK2GZiw2n494UFwh85Gj3kzdKFyh9ZwBcePBwDSJgYiQY86ArDBz",
  "key2": "4gV7VsXySqHvgzumEhfjPZo7fhCUgJT4V6ZasqEDet1CfhvRkeueY3oHUBbDD1VkdHPL5NoJMdBiZTnn5CUZAgyX",
  "key3": "42hP2KK9GkPaAtGiqdVchz31i1o8pUP5tNGHVSuWrg6LVaRtrQj46z9Cgk6CFrdTNvQyFR7uMit13GiMRG2r7Kqg",
  "key4": "2YKgDFhByYxGJdNTmayWTSe6fKEpoPSZ4qYVuDhZUqXBWdC7o2qVDQerzPWnj3ii2QM3UYay6igVvbJzFBYr3gkn",
  "key5": "3TExZDBSM9E8esA4XnLxoXPyJmV7EasWfAZXudNcZAziKqrYQ5Af3o4GX27t3W53czwJ9GoR5mZpw3SU1yQr2HkT",
  "key6": "671rcCvHNrtaD1rbei5mwbxEzAMBsX65mm3DckMFQLEMxxcrHgercKrDdX7gJkJzurjHxKdLze2CLnYBRLhuwMMt",
  "key7": "34Exbqe1XzeTKadqWCnfYj2h9GAhpLGPYzY9ScHpCFcaeAoEBCX6zrRKbouUeuptyc63EMBenjxXXexXEJGuCGgJ",
  "key8": "2shZxDbjbCysYg1CSH91Ldu38zv2vdW2ack1yRvxQybYkr1huV2BvZ5NvLF89k2yPgwMKvSraWPyizNzeicAeowZ",
  "key9": "5P7KbPPc6GujpnEGp2ftC1S7nwxQ76xw7Sy1p7GjFYp5GZEngAcycGjsCy9eNNXynyYDNS14MZPAtm2K7nwAyvcS",
  "key10": "5BiMeLTubBXnfNV3mg5gKVcfE7XphH9desVF198xx78M5MnvFbwWZ6PjeJnpwPS6FPHKput4HNqZVe5xFE18G6ur",
  "key11": "3dU6hbJ4xnHJr1ktN6urKtrcL7jngV3mjvTD2h1HG1jy4LeuHAvRSM5nrubF26beKV2sGo4C6Qti7wLYHuRrhEKo",
  "key12": "5vNftwzWhh5NFk6FJqjnxDaKWKDav93LQmQckN58MzT7AXgK1ZupAAWsaYbB6dS71sX1MLyBxGzzJAQdmyjSJXHu",
  "key13": "5cPuxLbc28pvzF96HKBRgy3RavcVwkc3L6upP5r3S4F1ZiZdRBdi4jaB64trzb1LT8ekBCvDrz4jLFC28SdHJUPs",
  "key14": "gWPCysG4yRseP8uBq1UmRBqMbke5MJuhzzrxPghBz4ZZN3DejYhxmHEAy4nyFGf1DCHHSnwMHZvyKTNUCUGn69i",
  "key15": "4yLket7RRNHNKyDy2zRdjRjLsmT7NXdzd67diHB3Fd6iEEijqvBTBKYuk2GV21zi8ZfAV7JusnSbXZ8rQRGbt9Yh",
  "key16": "63hsNoP3F3mHr4EKyHC7fJoY5hMyCFSab9EMPSHQuCv4GbvRRbBvYsPAc1oQL9EdNvbfGnCsRq8g1sfn8BzmJxH",
  "key17": "5g6P2PPr5PCShVqHcki7uA18JMfLKMZaUm5ePbYFadNWBBpfnbduVDWMMsMkxpnWFCmWuKCNuXCNFn6wkDJLEhLH",
  "key18": "eV6fMvdKiNHBG69kziVbcbibSm3mENvQFZP8NELSM95CEEAJPeQaPr27EjiKmbaut6nwZ1aNcXwFa2ZGjmakhBW",
  "key19": "412vPqeb57jV7c5iz1hZzpdQdLj9BY45aXNDbjiyMVhmuDKC49fjRCoKSc12S516T2qFJv9k4CVRweeyADVCLaBg",
  "key20": "hJEgdD1fmUvXgzTutB46fDjQKaj1xDVEy18P7zaJcKt2VveHwoxKCpCH5DZPdFbrKRQoqfBKDoJm3YxBie2c983",
  "key21": "WA38e8LuhPyKu5seVQVcr79ufg2DngjPt22gpnbe38a4wkJkCX3e5E7uCy6spVkvd75Sprd88nyh1JWvXWH3jqs",
  "key22": "jcRogh1JstQ87rBTuswc76jKM5Q3RuSpiqFvYV1Q6JpS8XTQEeLaSfiJxjnksziSPPsKJ5MigMasLeapUTdnQVd",
  "key23": "62yBjuEFqPqMiiSLNRc3f7Hv1kMRY2BHfJN9fexxYuwk3gGNi3YF37WKi7AhQL29yiEkFbXUi1BB8WUtuub95px8",
  "key24": "4obiSg3o5ZiEz3WLj6TmLnhXfXsX9KY8L93ZggnwyS2fZTyhk3XroorJfh1htGNn7D3czRFqd8veuXgShUX8HbB6",
  "key25": "4Va7akxM4FjGo6RPLsVAn3wVA6qZKzu2xohtk5bnypq4WT8iUjBMHP1nqX7rJreMWgpreZ1vLWw7LZFj6z5xXuQU",
  "key26": "3NsaZYVedY3ks5eGNKswFJqteYYk67SaEngZJnf5WLjc4VYYHTZapf2yNZBgrqn3AE6sDPQFx9Fr6qkBgF9BR2du",
  "key27": "4XzRRnwbdCoCAg6CCKzaeWYRTuiPtoGYCqoNdbjqYQSruLLYiUe3N5jTP8uwL7KFLhc6LoAwx8LQstx87oLapEqi",
  "key28": "4x47jkCiTSrAhT38E2duMAmPcdAtrZtbTfc3UyWkNaC81D3Vdbu4V7qm1wvneDzHHJu1wKXN9zc7onRhFCo5z7XF",
  "key29": "3hYxqb1osWKgisaWgp4DwzvYAzkL11tvfq1bbAWD1ERPf9mbcVe2XqxdaSPyFR7tpGSpBbF8A8RBWJh5jUShi1gi",
  "key30": "2vwjL63vPUAkGmsTxW7pMnnvAE7ecr3jpM53TgMoJzFBoVaDd8trM9TerLNL9efBucSYSBKnX3NU4jyMfBaHgAJ9",
  "key31": "ukBAeWSZ3Yf1yQWt6r5NzSyPwFqFpS7BDNnRfGf6DxoQTvBSgUhtBjStggeuvoRUDe3MZAQUVWWDvG5eLTTR5zJ",
  "key32": "2T1MdPHnJjdjc2PX3WxVnNpwDWZ7uWkYGWva6niH8MPoaXP6E3ggRoBxZ2rnzL16AM21nH3XzNMn8dZsw7ihNons",
  "key33": "2qN7fydoUsJZzzQway255mJUqK7RxF5EonaS2UabVSiJtx2Z1n5ViQXNQJTzuXXiDTM2NFt3U1to9FqsZhaZy5yK",
  "key34": "3Xysbe6fGcmxLnvcqUaZin9ptvP5tQErd8YMoxgm3EmrtvWono6dwfZ1B3k96XfHin1cGhMZ9w5SGgUBf3U6u323",
  "key35": "3YA4J2wPnAdpYe7hUuzCjPryvaeprVc95ky3gGwezZXdWJJmfcmrcojKekc6QBV1GGT6JubxnrStMru5mYQNJjvY",
  "key36": "RDkfbBzKHh1cDrGnUbEq7qFp9pUKVPjiyD7VYYruYcPMxtqYQwoXmpjHEf522RQMVfHizEcSWannk79d1CjphG8",
  "key37": "3rfmN59igqRMULnRxyV7DGchaT1gVFjiVMsKTtxRvmJijyChMDkQvPAdauR1NKsuSbFfhSaQoc68dHzYtrdmsC5k",
  "key38": "4NzxghNW4NQJPyoxAGtqkLHDg5W7bkPXJk6X2vHFpa9tfvXk6HowZdYucLPKjJ35AN6tAkMP7vNpXLy7gtRYqUut"
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
