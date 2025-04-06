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
    "3ELyATYN5wVJtqqjtuMmRSecPz7rPsHCAhPX2FxCrkwgsW5cjGR6MdTZY3Qprdkc6Ecah9sUZcmHrLDDM55yVkjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsRrfSZ4pEfbDo5zKggA7kWSrr4ypP9MUJq9GZrRtFx3A5KigVp3f2XxNDSrWp5FAWksAKXokm2CPe3pv3GgP4p",
  "key1": "3mRqhd5mV6Hf6pY5GCqnPNcSFChUuVbNJ9XGbgmV6Jy3B2HfjpG6U15Qx3BagLGrBK3imydCt33w4gmw4ZVaavCx",
  "key2": "4BSucB66AeGyLT53pjDQTRSgYgmifBdF1DBQY8nvE5dU5qSye6Ut8wmE7dgHCokNiJRi8wp7wbzrPi27QgFm8vSE",
  "key3": "4yETBBt7Xfe6pYm6jbiSmJVsers3gUR6FxuHM1mnbCmFUwPfYuPQKbbwpFBRJESgzi9YByBAUvM7LZ9hHYpEaNTX",
  "key4": "34QexDaEct3bTZRLZ4oAWmqUzDsYs8rXe23dMaGHijaR7qDYCruBtxDsXh3ztUQwhNQPENyeYRcHSEg1sF2D3bzN",
  "key5": "4jTQFR21jNcnnH5F3xjeEM2tLGnCEo7uDukmH4pusj8o8nRJAGy1MoLewgWbSGz1S8eJ5TaG2M8kpA4JbmbZEfCt",
  "key6": "26qsrjV2put8AienkHEey861XamEyu96Yma7uaoDb6uizZuoBoaDMrG2WVr1VYRXvCVaVF3qjtsnQ4KxJRfwCLsn",
  "key7": "5B9xqtePhvspKz48fXZkVDSnZ7aCwnV9pLL3ikiVt1j9e9HhwgtX3Hm865tdghs9GvkpPtiggDMbbb7hGxKpNoK",
  "key8": "5iuFNxsKgQiiwYHaaTPGW7sia5xe4jWS3UN9omSwbZqNRb13bA2Jj7xq2AQhCBdKrHnzYFJV2DFpaK7DSUmvD9p8",
  "key9": "pcoxR4iVRkQeWqUU3YXrmhjeSaUXccyE8QWkKRqRxBVj3q1ogHS3sFXD3qWzKX88szJeFaxMfgQrtCjbMaQhgsf",
  "key10": "52VaQepSov1Jzu25hbvArs2XfRWLE3HrEFsfe5G1Uo8CtJoRmbfX1Lgt4hLhZ4hHQKLSC32MzQepWE7KfbxUzKuC",
  "key11": "2Nx2Cx4FnRUM865FR98eRMEWVYEoaiTWnqQjpgEPrUTNLdJ9cmu4TzSghvNBTxrJyRfAWJw4e1sxna53GZeyaZqT",
  "key12": "3pGqg6P8KHLHHG8V6TEAfaQ1GaCXkaJoSCpWvLToZ3TWVVCfi9rm9NNqeHyARWqe9o8KWyDznJ8KPLWEwfbuSuvH",
  "key13": "K4CvQDLQFKmqs8E1zf7gMjJbWBLpeGb7n7msinmnWx46rio3cq5fPktex4wgXemwuf1f7o4YQ9oJnUM6qVg8tCH",
  "key14": "2g9Z9Q6yZopnpJKda13c88Fuvjcat2AVt6BfsF8zFQUViR2vW3XMbvgGH4xUciEMQZHyAQ82MMnaTSNXAYhFG8ho",
  "key15": "FMZxe9FdDLeiUrqDGDReyoQ8oL1fMfWMzVRqwY9BtkfaYwS6hy1sW8WTcVJehPmjVd47skZnLZ78jHzUnYTGttL",
  "key16": "3zBu8kUt5oX7mAY4JHgHwHAYQscbLJeKkbiaE9ycnAByzd2xZaWwCjJT1v2K7KJMK2oNVW8a5qezBBiNSweSGchN",
  "key17": "31LrX9psDpNssHP4GyKfjT3eKD4WiZXw8gYMzLT3ccGfD9QbTUJuCa85ndA5Q7njwGX5MKBGZyaYQaaCnV4ht5Ma",
  "key18": "5WqXhnQSmGXXBwXNNp6eaGW3VeSnVMvFhM8KZ6uZgpPy6ayVJkFDig7T6ZgY7i8N1uvCyhyahrm4N1aD9BChH1An",
  "key19": "4NPMsHKhcSsDx65fh4nVNhPiCbDYNuqmaHGDDzweHUXpTdZjmfEBa7k5xaKPh3U7HrkZ66EDJbwCdyfKWFjtTWpK",
  "key20": "2CMmCvJ2JFViH7YzVHtGt7sBeuXJMyCZ5vAa1Twxb63HvkPL9rpHoiLY87fJKUoAZHXMfwsmgNsZrFb3Y8KymShz",
  "key21": "3FQjesmQsvr7aecf9PWBqmp63dmy39S8oFJiQCe2AchLjCPbu7AY5hcrhjG51WgAXM3Qu9xSty41iTr7cdzyKCJr",
  "key22": "5vjKhnEkPZ2Fh9774h1HGjth8HgkmyFq3coNpXbvjNqCuoHeWx3onRwmnLX29Q3ztosHU7oDNU1x5VFYYo8HmkuW",
  "key23": "QZCPmuRNduMNFpJwMFWqCC28HbCqTHvnWPpt2nQdAV47mQrR9AmuhenW3vrgH2GrKSkXQn1yukXKW2Tobbs8Y1a",
  "key24": "5UL5GKh1UtGwxSFyNdJhCbwXxu5qEQwpyxNF44LyGQk23h1YFUJMA1VcdniqMHSTYX3npSYK7bxU6fwxkhfgTJWS",
  "key25": "4n2qZATXJ6TBWfsFZf3zGVCrLxdepWRLBX4CNKRHX5YZQDL1REeSbde7pub4XDfqte3FyfeTvfVXqi6JB7HJTsLj",
  "key26": "4XjamEUS511XJEuuhKtwYs9PzUkBC62Pn4ALE1asLjFNoziGGJF7iNuSa1Wckp93N9u1UkG5aAtZcWnMiAzUAkXg",
  "key27": "4SxhkWfAvsdkLq7boYvrom3EW4bzF44FCMj96MCiChEk8oYqhADaUYJHmGjnUhWoqnq3Rzfw55w7wchUjUMQAUWe",
  "key28": "5A51svBPshQ2tG3dtAfwX5sN9Q5D7PtWDJNkZNieTMbjca2CAhSMbGabWLbych82aJBUafC5XbFpvS6z1GGi9HpX",
  "key29": "2WDn8BJUS5eESguDxp4ufoHHeusRjpAYbBqZo1bKc19LLu5LftTNoEZHTjN1bMyKgG6jviU9tNWssdkQXgGJZCJr",
  "key30": "LL4L7nG58cRrPcqaM5Jz4qqS8zmGPzRwJ2jW7dGkkwUza8wnbhfguqfbEEv4VPLQFqDLwW2q71NsUFiXk3JytKN",
  "key31": "4AYbdZ3Mfs1Sm8sfJ8UvqsCddZ2NuND5jo8XffckiDEskEATUbZWuGAoiqMBtWDjo5NG6VevesMn1ETsjK21NdCE",
  "key32": "4YVKd3Ef9AxHHMpPWmaLtBnaPK14m5jciVMCC17yqjN3AyvKkdz7QfHzdv1mp17GztVYkKuLcdNhT5vwdBvbeh6G",
  "key33": "6iypt2DpcpHrpkV3NLqyCoB37nao4RpEPPZWN2X1PCa4ircuXM1DVWPwUXUXMxuzn2r39rsaryXo9YT8YXhuGSB"
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
