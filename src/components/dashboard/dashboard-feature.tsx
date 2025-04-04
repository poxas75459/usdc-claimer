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
    "2vw3WqGPExL3mpcRgpvk2AS5y3Qby2v6dHYPN42xWCZNGRWVhodQKPCZ4aqGyZEDo6vN2QFBnKoGMoW9VhiDqmzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNasf4dgAzth6VwUtf3uHMEoep87KMyHtgaAYuKhXbqKerAqNsmoAWmt7YDqLKGUwAf9hqDoMCrdhizsqWNmrZQ",
  "key1": "67g46HiyAyjck6VHgcRcCze9Yctdn1X3AS6ymL8kUc7UBLZwPrAC1tLJUmqsFZ9UtDS45a6MApuQ8jxptkLoof5m",
  "key2": "3EaLVANU9sAv2vi6BnTQm636hW8dHkWpBPxq1DWeekCZNMGZtjC6oeNvHsmACev94LbmZEwZcbnMkEynBYDCfkCT",
  "key3": "5gTHZfK28UrgzrouEczhzvVT7B6HkqyqK2Tdd7ZfJP3tGFQy52Esae9u7WhQT6UFf2LhSNk8UaZHhUNyiWcZXbLA",
  "key4": "39AWPejQTeWEPFKCVe7wAvLtLXqc3kBA2DQ6j4ctMJgkKnEjdFyqKwAN2qHnNTfGLaZUVyAQTCuHKTzyqRbr5qay",
  "key5": "2xqnkjPf1vAGCPpdMnAsXjjYHQf32BRVirUaRWDmt2JXCfKcep59jowKC3nN89YELLzrmLkJYVSGUxo8e7PkPC4h",
  "key6": "3L8kL3irWtX8Z6fccRb8TcQdjkf8xW9AWt47kHfyyJhLq9jDn8sWP5TUfg6qPj2hbNwUaGXjR7RioGWmNfWi1Ffz",
  "key7": "4p6WNmEuuskXsg4Nmwoat9YXGsTwG1D4ZDth6M3VWBSz87g2YPocEf4GWLj6pUcWuAQhT64SjSfpVqeuW9213YgM",
  "key8": "61NYgf83oqxZxuUu5M5kLDgDX4SVboHm7wxZh71VQ5wpZrcETeQ9hxueYvVtJVXS8bQh6ZTnt4T5qb4vx2aFGEYD",
  "key9": "fmnPToJsUq8H44eJfeVNXwacLCkSsyPYDsHzsUhxtyh39sLzfqQx8PJAck4YZPhZZ4LykfEYZ8dELsimwNrR8X3",
  "key10": "31ikMqNbSCgyHikiqvVsNRxkFBg6saCtPpCgevNrLvw8TZAQvR68X7WW489R7udj1Dmqi3zor9mSgnqnJXDUC9u5",
  "key11": "3YG4ygFEvuKCxRaF4s5dqqseA9nd7ER8L9P2yGhHqL8UvcHBRk3DpRdoQSuaqXJSP83VDMkNMUSTsaYe7t69DzzE",
  "key12": "SRa9qSjbgSCdNsYNNvsA3rX43rSdJAmtRNK5nbsNyqFHKHjC2RoRQXuKYYA1Jfz2vHBG67fF6u9sbGwgFoo5Brm",
  "key13": "4JANQPxyHqKJjEjZjzVk7WvWb1WyxjGDih2VcRTEHLnykBPKL5VUrDf6ahfqBXkD5e6rFxfR23LQZ8iEwzPyr4tm",
  "key14": "3bqECd2D1Qae1Djb3KJKKyocRBu2vwqFA1WWuVMTF8n9pVsnAJhgVn24HiLRUXr8CGmKYoFhhwcAPM8PQ742FbmF",
  "key15": "5xnaQtbnqUm3kW8N3hPqUJduP46hJvrhwGKFDEn1PMqxh81ewgssG1bSwSFub97Tv83uEPFZ1AELsjQ1DtW3xXyC",
  "key16": "5fxAGAN3GvBjUysbfD5JSWdBZ8dNyek5w1ZJVLwG899n7hphvC6pWBUWfKAPJxMurHHT6z6mqWprUWLwxa9yRW3B",
  "key17": "2wD1QGmKWdXBVFHCMnZYaLwjzcZMNfCnnAGbP9xUzw7D5CxunZb7KtPcFNDfwuTkXUraen8DvMm8dp63wn9etGKP",
  "key18": "5tVNbpfPfTWjCwN6i55XXq6ufE9s3rR9P2K4BadPAFo3py8DAB7QpkrP6wyhM2Rfi94hTjZGfDvyDy53hctwhUHN",
  "key19": "mhF9oxAKUF7bsTGfH52Tfu7idwsaareJKoz4Sg3wbAK8kThP4V8LbVM8LUM2Y1xyvicmSBbFMNgydyZ8gq14nGh",
  "key20": "3ojxzya8LRTkZG9Z6mBWLyw156mp2gARECSARKVQTNFfT6k2EJscvuLPJtGrS6GFRd875skyggGU37F4yxG7tZQW",
  "key21": "5xc1i8EYjEiVkCRTLwXtfsJbr9TprPW6FtxgoHCinNXNVWmUH8rbwT8E2xNz4jR817PLNJr9VicrQyt9b5Rzdvvu",
  "key22": "5tVv66PCgNvA8jt9C5R4VxsvkErFY9GhPoymAiFcBqHrD9iRUtkkuNFwirvTZ19XNEinPC6PRK5dzUzLCpqqsYgE",
  "key23": "5JazqJexC1Y6WcBoEw8gxeN566BRN19EJ34S2KVdVDNQdPBRcxP42ZJ8pEehXxJ3d3qT8wUs6dvGtmG3CM8thaRg",
  "key24": "49Yqpn9AUM11UEwRHs3g3NEEyQmqpMWvHgouUkxvo9RTro6jwYnD9Dus6tSKgxyRiFobiiDKLTiXzgHAxLJHsLad",
  "key25": "4Hw2FQ3ABuHAXkLNxe4YuFG4cUeKPcd71X4eoL53HFhEyyNRhpu8gp5wQ8jncECD1FUTY3jLJhqZRAcGUH9aqF3U",
  "key26": "525kUPMeqS4KTsrQ1usyGXhXYgS5mZTkjfPSPc4AMS516F7Kvh1YMqvAkQEdfRKvdgeEsgcAHbBQNtKEDYQx2mGB",
  "key27": "3BhfWr7w2nMKMu87X8Msdf3aTqYkawZwEoS2PkD9AxxUarg2QsTzgb47h9B2ymrXHNJxxTKWENCJq6HMh6axkYZW",
  "key28": "4CsQYiHCoEUvUTeJFCsrMtRvYdN18aN7kqJEne3LRHJe8u6Lj2HH8XasHEzfAJ9VY8DXnMmWyBxLfuopqYjg15vK",
  "key29": "2s3L8wdAwR7zFbVZnVUet9gk3zhCspB7KTf3SbbkbwieFECGceq3KnSh38Z5EHkRhFUHhHX55oU1SGXUmBXgZmyg",
  "key30": "5xruYRkE3cuLvDRTrJabJcVW7pnv6jhkKvGLhYqAePpHTyHMrQj3KvdtMBNuRm4qwoUsYF2ZhD2u5cU9fhATmGZa",
  "key31": "2hTRewu9hd37h5m9smWGMX9a11UcEsneYmUjswnHovo3UUT4h7KaFRPTYNBsayKRE69J1Us2kT9A9spXNYWtiN7Y",
  "key32": "4sZx8jR1vKiCw1uPknWu1s8AkEMmzLNTByLv4fcMmJMm3eQh8S99KbPpHQ9CRBTogxZx8HuxGMFTgpNQmYBHbQHw",
  "key33": "3HdLUKdcLiogccqVRHJmSwwMTp9n3MN9nTApo7nBLP1Bvwv3BQEDmCUU3nhW7BPvC5PMZ7R88xYzPPTS8KeYfu6M",
  "key34": "3fArerv3Kr4wtxRTeB6ZhRSuHveaMDRWccrtucxdHWcNbe53vCsSeMugwjpoFYm3gQA1GLtfyuFb6tSrRqKumg6G",
  "key35": "2viT55TJ7Bs1Ne2vbM9eUdCxwGSXX5EwvtBMhezVc2nJs5EnvvvQaBfJQ9YkxXE7kYVXoRQaXCGenj4hsMh32iMt",
  "key36": "EeNKhRXGgLB9Mt6XLPPXc5Vtj3EYpoFUeRHcnAQUs6oYp24SY1Par223myGiHQx9st5mioqWk7CMZ3KcSLKSi6c",
  "key37": "4ycD3sAsiNhDTuo8JV4ibruTbtwegwnsUHTYoAECuVJdCDsAjcJY76WKjRgfYsngU9KnSve9GGRbDjkbXibQ9rJp",
  "key38": "3G8EL8b5AhZh1m3Kd2WTmB7dGHefcx8MBvvJWpPmmKX1usAxFKRo8koKSAe63qqNdFtqfaX7xHnQ9esia424TXBQ",
  "key39": "3sEKqAAPkWf8XhNLXpNnaWiECP8TdbHKNH732D82ArsCoMh4NGRmzPJVNfqUVqqH13b7mBnEFYpDyLUNs8AGhqcJ"
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
