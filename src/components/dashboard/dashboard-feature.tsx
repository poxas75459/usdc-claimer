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
    "35cCNerdogkLa1iy4tTh1cqqSYwee6DFMXgAEFbUH6v6sx36Dj7NS66JUFHHBdGZVMfvMyQD8qSNnmqigW24Qbrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mf9vqToRHjQ7po7ZY82kHS5xwrYxeqjAcVgvDKnB1FMUY2jCBePmvpSe4ZpiqSerPwNArTZAebhMK2Qt9uGqtiJ",
  "key1": "3akqUho4th5wKsQzSiQE4F1xfRRnEDSXeScLRv6ynPZQmpY5XUyMGddTcTkBs61Pxa8HMhTDUMpYJrJH3D8hG3ht",
  "key2": "VBwWR1GKbZ5gADCEQ66spk8h6gMojdrJJYZPbbqBKhdKC4CEpTS1MfZpQwoqPrYtsLmCmgFCdtMP1H2vX4Qg6tA",
  "key3": "3dzDHFshsDcj872D8qpov1yjL2FtSpRmVrX1XVb2rRF43GAFKwtopEgEGHK2pnmKjK6cRSwGEo9iG6stx26PvrZF",
  "key4": "3Wywy3dU8Ac3uZmrdosudjYeexHj9wDxWHSsYeRnU87RK5uDboT9X4WzvAMuQwecNKoRa2hykqqWDFX9qN978arv",
  "key5": "3WfhwDi5z3hYfDdwuu3eaw1NZTQZ4Nz57NJ8DkfeA2qHyQLMpuVProQFvPTDsnne2vyEq7oxQevMfiDg7LKPjKX2",
  "key6": "3BgKVtqnRBinTnYwTNkL3dqyXa2LJXED2KutjyksrP6xCJ7So64zvCvetVa5ZeizrLKzf8uhdeDh2sdnBCP1tsP7",
  "key7": "3cbxANMNjEzbPGdgifAZmBeZYuFqZmUE2MjsaiXH5Urz3fJ1Vm4ydCmPdGZ4uUgef8v7mTBQXWnTzSsheGbgprev",
  "key8": "4n96UDEJBd9wy25xNT8MBkMYaagJLfH1AgPmxN7m2frqXqNsKwExWizSVpwNvCtWqCVUKB37L7iSV3w5EUUXsHqT",
  "key9": "24Stv7o22TzZ6QBGrq4zSmVgLUXAGwdq2geQ16fEgL3J27zN6wDFGV3CAEmkrhkmES2q7iAkCThkdvQ6f9KJqXoK",
  "key10": "3bgECqEbeV41fEmu9kwsZFctmLbsSyC7HKUbmi5qSTzXY7xsosYJ6ToJ1VuGTh6kvWajn8DwqbySw6eYPYLJEsF1",
  "key11": "358b7iRaStNk6GkiPuAV2T8pWNyZJnKqJn9C6ThahaXXnztFiPxghczJwK2toUsAkMm5QaN8e1rQQPzNbHojHhQk",
  "key12": "4gpdaRRCqPCP8cM8AzZmZYfABfXjxqA8dD6drjwkjvf1ShH33zuKckPyaQEkSd5wecxs6tDweRvnA8DyauzCaHDJ",
  "key13": "4TtthnSyABMnsHqFTCoeiqFVYhEoMjAn9KoUy6xXba2AdmEWXWbwvXTK8JJtMqScbaNFod8EFQ9ELEdV9CF3CvAi",
  "key14": "65HrMUVny4S911oReSCW2LYQkCYz8wj37RL5AX1n56bGgeFf4mqpNMqgKw3yKHwQHaFJz8ELH6hoCEgckNBkmmRd",
  "key15": "3TBQpFUovBn5V2dB9Kebu5nemCNDNG7wQr2FqVaxxAfaqcwAX71u5V7VAtf1BHANhnotfbHGn1ww2C7GeC2Jn4bY",
  "key16": "5UT39HKFeRLDhZrJT6cciSVqkPT4ZSdTL6GLxxmd2Q1Y8NwTfSUFYqVKb2C5bpGdCbMqiW48gzDDxtvsx3txZFUW",
  "key17": "5upjmYzeMKMPmK8cqy9o8NtaDiJyKZDopk59aj3ae4DGj6fiRJS336jfnvDvS7gQ9VEChnP4rG36xWYNHcFxULwN",
  "key18": "4TBPaMZ18jKZ6BQ3MEzRxDqsFf9UrxiR9SQUcvKPerxddqkvaX9HJm6qvRTi3A9WmveAUcdapmdQA66krxpzDth1",
  "key19": "iM1M97sdCAzW3wMfGiMyvP3BmNtKVgLrTyBhBX91fnr4AB847ZNXaivFD8eZtVnrpzAGvLPiDFwicE3Z1iC8anQ",
  "key20": "22QfrXZNyR9dvqrXUbM1MCVPGQWwpd1yUFCF7vFYF2JQCpbFuYAwK9ah4d2KorzcPh6V8qDX2zyzRL83XJn4Dyq1",
  "key21": "5vfLoPeyhcRb7GZYxGnib7PpqF4RQLgcMWHfGR4Q5JjMjNwYGy1xTrouBTpxSqqzHoheQ9Tr64QVmN7DheAPHYMw",
  "key22": "3RqeVTG9ZFjSab2dativJfYQ72EryP4FiLt4HB7gcihJUxdugxPxGRbzckSnYbjXTj8pFXWHTQPjEh1cSfBYcc7U",
  "key23": "4Na6ZtE1sRVhbNwMfyrVRhSydEdGXdLzihvBwFwvSJEQf6J34w3147dCL51zvRnZVh2VMaexkfckohzAb6tXzRsL",
  "key24": "3brwMFYBZARnGi4ERH1oF5r1zYX2Q9cp3vN8tZ5gUsrnDDrL6XhjLXQQfRpFHVwTR9zzU7E1nq9vWxZ4YpmsKgCq",
  "key25": "3D4nUeGhxtm7bSiXp7Hy6jwB5bUw2U53hYaVo5t9xpxp25A8M2P7yhTdXQRKfevZEaZ4peja2dDRTotSC1JcLdBD",
  "key26": "5oekRGWPyADQH6t6F47umv9PfHxPPNRF1xLmtHtrN7Pi8ujhMpyA4KPdvHtYa5m8p9eSCJdQDhq9YKopcKNFfh8s",
  "key27": "5JrqxxZrZw6W5d5ajo8GxBivxFFbRBfBbsTm5ZSNMHxE9YHxRPXnjKDfaBCE9wumcT3rxEj2715TXC5ku9Q1XEe4",
  "key28": "3X33VBYTJsisEgMPTjpJD87evEuqawZNotvHgeSBBbgX3xKPYhAgQviv6bkEjyhHAqDrcj5YxfV1NFJcGF7FBZ3N",
  "key29": "4NCBg5ajfMAR8ked2busiphqLDekNHDVd5Dux8WwBfSeeu1VQKZ49iJSf28kdB1TxGDThFcBFteyGqbwRtKVYtTC",
  "key30": "2QyDtu16aAZmWHpoVpgufuWZYjVPHiQ2mNo4NDq4TjP9G9YiXX9FTMDKKAgaagxEYNHwM9Lo38N4GWCrZYvT5w2",
  "key31": "41JtfGcTsVAFNJykrhghpy5DcoD4Dh3qTx4SjTBfFBLkfL9K6LWwctBEwKaETnXWWkwNs6Eob1AfvypxurNXsMah",
  "key32": "3iohFGGd2t9SNjmC3sH7buhuH9hxTrDMqk4R1cduWcfBSse4BUSme5x4YBxFRDYVzAU6WQ6mwhqz4YDMkHYcpF6h",
  "key33": "2zxMDXmLPGg97aAcN1KH4PXtzTppv5uQhMEoKzcZprwJ2oSHE9SEDYAJvxRZfxDGzUE4ZTDpdnLLowB6cydgEPzL",
  "key34": "Mm3Y8JsuYMU6b3nP4H4jmTDEYWBzKhuCoMr2mzpSRmYHgBRUYQBxiB9iat9zXoGZbSMqBYZ1rKPEmcYTmyUBQuM",
  "key35": "2aXB3Xgbmub5MS6gbm7eRppdqdcp7E4pvFcARugzM5iQvwT1TaYN49iNHm4pmzdwwSctMVApvfMYXzu7kxwAzedi",
  "key36": "2WtAvZ3S18RidAaLPoe3cfZmAVK1dFfMMVnDYp45m5yPGb29T9cpusggCLsrWqRAQwotDkngSPqJfUGZjfsfi41A",
  "key37": "2WDDVreAhkj4nnE1n7Fesj9kDaW8VURswoN9bt857BpTi6uXH6SZT8vxmohj9LsPWgARrB4WJNMGx4JFhEjyTu3x",
  "key38": "1269bvi7HGXaUUdDg3SGbH56R2QByWB5zCNedcfK1cKd5iy8uK6bGqNN7EbqdKJ7ivae7s6AmmPxek6yAXjjFAU8"
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
