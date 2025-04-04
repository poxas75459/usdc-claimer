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
    "4wLzASxiAivfXx1obw1WH6t72G9PMPZyNgadRVU4Y3ChhSxNP9WebNNzGZ1zMMWLCN5kaYAUpN4tooEzfvGoxnRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQgNAwoUXsT2tQjbf4hcx8MXvU5QnHQqewak7dgSzEBPosAM6PomjywtBPVmmxZtKhvMxuGCC6H8n7WSuoWtZnW",
  "key1": "1ZRxAA69n1P6jHL7RxPcqMEUNQWgPxTXqSDGDPHgJd6onF1pVzfieMjab7JZBEyQd1RxsbJterr6zYCyLA9omJA",
  "key2": "5VMwDDBk9ZjiZckz4gQsMUsyTAPik8szB4z8NMUAKkV7zwt7apW7qMkoUico3sqsPdVbpohPzPuWPTvQXsNBNtQK",
  "key3": "4ot3HbvAi5yBPx7oo4L3ZXcCESk2VftZovGNUeut47yEg8x3XhEQD3d8U1k1iRTGypWXf8uRRmP8JtsHueBSE6Yb",
  "key4": "2MMsmr6VirMecpL4fHEHp53eUrRQezU3uUZXLGgQ5DbpQg55LPSzYQgQAtBM15j8Lrdn2rVfNppNb3gp2nUfGiyG",
  "key5": "5Wu15UoQQVXBas1zkkUgG6xigpr3Wxnozc4ShJd7Nnb8e23iUfJdCdcrNsYpN3D8TJ4rzAtUiQVNSW3Xx39gWhTo",
  "key6": "3xqbWqDFixXs59kC3tUjeytY2VrYfY3MPfQcVqfeaMUzj6vpCZ44JLTD5DgAnqhFvaceeTJDvgMpWX98LJhNJA7U",
  "key7": "24JyX4hVYHhE81zzEGqZcVi5FYuF3uqPACDHFJvN4uW9WoxrP7FUNqmX9CgJDyunkbg2oqXLr5Xw44F83QHsFnHc",
  "key8": "4BUeipzFKMkDvk4jeLJ55HGVs4rH6yfWVARDskevFa9JuUvnANKQ4jrbWXk4tX5cASMuWCh1E7brBLXotC1QfQuF",
  "key9": "2CztUNMTkXLD1NG1vjx4ymygpF74ctiSZZ5rDoY4krjABmdofh4nSoeth6veRfPHosEC4wMtjEaro89bLHdDyiZ4",
  "key10": "3SMjLNvpLMXNxCe4X5nyX8HBicReioddjifn2Q8t1qGqZh4GUYkWdWkxj5zUPYbZCmLzUP9czYHqp1R8AFLno3Lv",
  "key11": "2hYkUH98ZVpoWTwsTP6NCYhwD4HRAmfiAf2aiiiJe25VJGo62EtcuKPWhG8zytSeEjw7zfxZbdNY87K2K6LWpBu",
  "key12": "2ee5xyU4esf3Sy6qYAamfgyRiCs1YfAUdDn73RXmT3G85zejQVoykiU9KW6jUQ2nX9i9m26K6dVHSw1edxE2G7rc",
  "key13": "2GTMDzDcuyLT3bpeUr4mUUr7zMhqY15L6RcSPWRUqYmXvUps7Ko1fTxCJuU9S1G4bZymo14bHjYJU4KRpTagqQJU",
  "key14": "D335k6SJRsfwj7xR5ujB7vXCi5dr39XnSudSvyKx94hNNd6k5WDyN7fSzABF1rUraSduViGD47nd3ht1x3gDj2g",
  "key15": "5jNvKmTcoeKZ3aFcjfubD7U21bK8fWumXt2Q99mGXaNeg7gkGWf2uxQvYEPY9KF2hcerYAE6zq5vJqofeH7UVt1H",
  "key16": "4dhwj4u43U39jym3dhd1rT9xiueowxRJcX1MjFg4g91GVDpuouBUPMoWWqT4bgWejV8D5ZP1PJqCNbdP5boKE6KC",
  "key17": "2dYMzCujwBm4ipPBvMxMDKLbkBPKXuE8sbKUxLFXRhqt8uJpJ3sbjHtmX3hoUu4jyhTev9AWiCAnPHE84S63aqa5",
  "key18": "3yJDFGtEAUDfDVkn5C3ZAYXG7vwrLPEGdiRXeLSoseBTMivVeRUpqiQWmyfEBw8Dp1FaJCk7CFsTpmqhceU4SBUN",
  "key19": "4tkkTURPWCzDsC7xzGbSaf9dGsmU9MgmoK5YMQouUZExqGxjHM3pmqUzuJx7F9cgkH1APN6iX8WuhHczTKKdNAKE",
  "key20": "5vn8t2ojMtBakiBQzXYWroyCRozF2TGpMwbEKVZKv3PcHexSDK4JfRzA1FMiGLPV6GLk8if2Fexub1pRJfsU3Juz",
  "key21": "3Qq4VvJqkK9gXB1uDPFyew7bcukhSTH39fX36hPwDsbWYcW7c1JWuf9Y7fFrC8xHUPXDm8yPFVhGgRkHTtWt2mt9",
  "key22": "4NfsAU9kafTg8RuNvG8wE2ZiqavDVtvgVnxj1YSgHT25btjq9JUkDuyLhRPDndUhJAMDF4AwB8xLHnWzqNoGFVPi",
  "key23": "4MDfMNaeHCzxd6GVViPGHpmFcUStPjFKpS45BYMHLS99Y1Kn8H6CNJSUvu7uw82vuoc5FnLGfLvSh4vUHSw1dqXs",
  "key24": "3VY8pLDZQuwk4o7FhJVf78KEq7HzRpdzehPX26xd6NMFmhzxvPFGYDq65omaZMzbUahdxeiboJop6uixX3Ka1V4i",
  "key25": "4yFEPa7AWcWr76SkiHvz9wBdP6GDQcfWLaqZJMGRLeFrzjvHnrBJuSvzfq8REPZnqWzKsaewhqHUASmHow5etXy3",
  "key26": "2RM74rAxk1aSHD9VBf9uZ6JkwRSJMgffLCShGjbmvU99kQ1pFyAozHrCaJwj2kUnGhJgpuj5hgtcU4CVFokgmgpK"
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
