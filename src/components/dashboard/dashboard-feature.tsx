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
    "2FeQhNiXaRuaHEu8KoYM8z1dz9uak2mhQZGY1SkxzuNYZCXVThuTyDXTahfWWqyYDbWdDdkH1P3VJmv1D4K6zYtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmUuXuhbDjL22EAm8QJKpQquWLFksLfAkdLN5dMMA5emfVUNHh7RHDaQaZZy41v9NorgrbRmLVJHxekoBwqpazV",
  "key1": "3KZdchFCBCE94qWEpJ1L6GpeyaoYK7sWbjiRXknc3FrVYQ5SMtoBEwPpgvaU6FW77BoQEDTFsmcigJLHMNw51wnY",
  "key2": "5RU7sZkdmGRTx1vU79HcMm7FY1FzT2PrhQorJB9gN5iPy9NFtUDvxzTww3vh6DQgSetDNT6FH5x7TArNJoF8Ds1p",
  "key3": "2k9iZsKjT3Y5cEEZqDBwQUg2rKM9iiZMrwypDSg17BM27CCJ77UeCedzgCFQC4DbDDPUiW26zvM9M1qfvHNTtPK8",
  "key4": "4KdVgxeh9PJukbtgyBLaXfBxX5hhRoFqhyg7LwqVMgc1skHsCroBkSHZ7KMzs2DJpwRJDLLRUSmJTMSPW4Fss7ZY",
  "key5": "2c6HQ1MvtZYGKonwV5YDJ5QfLjNwKQm41n9MUPCmncs2Au4PDFvmqJHksK9uzfVk8APXmDXjRBZQ2rfqe6MkjbUK",
  "key6": "5Axvvg477Nzd5BegiaLqHKAmYg7jDeAvk7x7ugEd5cdmNEj9MWM9f6n5XALfDJ8tzkdPrVkzggM5DoD3PTmzr5tP",
  "key7": "644UxtGsJgctHawr34q6e1zUGskRYpogy7DD77zTZgaHef3jTY5mwGJBDJJ9FcKto9SSBPJVFZT2v2MSawEBfxvC",
  "key8": "5Wefadryt4ZLy3YQtsWtBwwko32N2Xq1erptm5nxhJip1Xf54UTKz94Q2xB8UgjJf5pcWmscYnJ6KGbYxYFp1T9x",
  "key9": "2usiJvkuLPA7Q622K1ynFYAeuKRHmZSmGG3TmeWW1jdKPwkX4GNhCrVDQCa1PkaGigZ2U2dVSne87xBXFeK82PnK",
  "key10": "feMngC7w25KjsgNPhfSvv3vEJm3WefG4jofJ6ugFjfPyhsik7EQxH1swR7V2ZFsoGRYtnLcAq6yB77SW1CRZCme",
  "key11": "Nz6NhWLTcMDQbjwLYX81E5es9HPfBX3ZjqMb4acRHiAycJNkQWWcZksDM1xrWadf5bkrfZk5oRTFa1uBfbCXKYQ",
  "key12": "qiHS71MHyz5dc9njp1ABAo5zFEdqS6u9dbeds3B8Caen2whmEJD17P6wFjLFutvbwi1czM8rFJrFZpvC2RCdvSN",
  "key13": "3MdJC7SrdSmxmJ5pHL31t1Ub6nvavsrKoLKtj1Xo3D2jdqFrLH1FiAyPJ6PjskSVDjuXxXGqEkA6maD7CyA4pWjK",
  "key14": "4E4Sz4SuRRzCGk6Kt8HcBprSG4NpALrGYMKG7xtjvJdv29cbx5spoPrXVmLkbfRA1q9BrbHHgjSs2ubfphLYmRGA",
  "key15": "2vozP8uNWJV2UQeWgSsMidQPKjMtvXRP4h2gFg5q7WqUdVz9x4arRgDfbEaZsrXH2mmZD5werv8tRftCQzX8BT7k",
  "key16": "4EgRGYMmgGkoh2YHnqktt7TcAmSKS297kUsATKfjGVDa3QZBhkA9zyTm5gn67TJy1aU5Rq1VaBVRYN81rfH4tfdx",
  "key17": "zrfyhtUSbXaLKSBzmULg8yqwFAtfczKYjXxSGC3iWTmDJPPSSCzp81U6WZCUVB9A3A6S8JNdp2oqEzZi9Bknq7s",
  "key18": "vjtvXSnYWEyZhftuCxoEXZmQsJuhtNzuv6MHR5gLjQF21hUJbMypB1YMZz1fRsNRDsALVyysHhxRpxfQxNQTTSs",
  "key19": "3iQ7xeCiMXLemYpCXYURg6wQAd1JNmkK9op26e7GoTo5ed8Rr5aAFcJfujkkARtGdNHqDC7Hj29vDEYNSXrPcbd2",
  "key20": "4UqH6g8Bauc8XDmUjuuMTu6bqzniUEY7n7PfvF4NxGRvYbK2M1iC7ny3GKKugwf8WfMUj55tn7sVMYZRFneVmDvj",
  "key21": "U6k8Jp7mWe5Az54SHLdfW56C7Kdw7hwGe9W3RT5QJcGPUxK3sJuQ6Cm1rLmSRa4Qvtux9qLWDAKZ7gARPVuG1kg",
  "key22": "4mXCyqnbRZ1NnQZuXuxNeEEgcw3gDhFXZSQQYPrQEnGqmisBc4C8AwvbTZ3AtjSgAURU43muvQbpTowxuWYnV9yv",
  "key23": "2bMghem8CKAfhj357UrH9DjtoeQhwWwnofdPZVUscs4pghptKoE4GE4bLMkqqDEaTYeGaxLFmW4pk2KJpqsmkG9D",
  "key24": "26CkQQzSvmu4est5pv9fT4qHijFhbbb21Q9ZLo66ULFRpZNktKNyTzCfA1AqxdmVpsEEeuSpNUx3gGsJdmY22bLt",
  "key25": "3YZjQ7NzLENgu9PUUQC7XnG1Bp5fBnSDyJALB6fATw6AjWpuQhT2GdLY9NqRRi7XRYWfZ4w6qyAbvyo28XoRMVbc",
  "key26": "2XYNMMD5YDijjgzmGh9msouWVCEcm2Z8WWXo5pwTrymmqo5up3sNBiv8tjVnr3KMDLSg2wp6ckf1FciZKRBubscm",
  "key27": "21dH2M2sCuDXu6TbSwpMZnQ9dyxbQ7RJCNrWpc3xVjTnLLaWxQuQAkWg9erHf1imgV5NJVPucGwWuCEcuFTV9RyS"
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
