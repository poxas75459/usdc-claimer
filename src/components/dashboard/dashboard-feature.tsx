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
    "5FTBn8ySi3bwVxvbvZVkudLK2dujj7HKF3fRYHfXmdrqhjkkV5GhcbmRLcvXHSHq3pVrjC16fSZG23hZHBwfGWiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5YzySJHhFrgoxfDEEYZJhfBhaq9dMkzPjqh9wtw6dyDF7whfXWmJq4LXe6dvdwZSd4Et682Sxf1SAEN4ZD9LGQ",
  "key1": "4FFHR636aQWhxM3JKJyG6TCSeMWZ2eT6bUVQATiFXBnykXLkbwnMaf8uquFgfWBF8hRMzfviKs7FaYPuizfvAshT",
  "key2": "3ujyxBPnKxPNKUgC9gds3hzz5EameAxm1cWkq3m5hUcVPpRTeUrHuN82vCwCYnGviHVZRQLLW7xqqmAsvzn1Z5xZ",
  "key3": "55UVwUnwmKm4ksGivV8MZNQQkvujdywysT5vkyXEjSW6GJ8HyMPMizJ9hyz5aZuJj17L3QesU1EH6JSwj3qikw1U",
  "key4": "3V8fxZMpeWsbVyiMdJaK9FLKzQzvLnvDiPqW6wX3jiCwjXJY9AA5N4axqKzndtGxXuCn3tLwpxgtoP2qPtnqM93T",
  "key5": "z6szW9EFJQjaQA1y2rggVE3FFCzPQuwzvUHQbvW7pa5b3nGJCX1KRnYGxuNwW8oWBHpYeNWy9cQvrMM8Lm1kzKY",
  "key6": "WFmVHxQM9iSBTzxbt6X1dCYwgGaUx82otNRmJAP8z4DpbTme3iUYeyo4v6NgJMFiSrSdcvCccEvUWGAsjjCEvZ5",
  "key7": "rvoLXUXF4jYeQ8bZDGgBu5mXencEE5ubuXmuYJakYvnEkUcZcQaJw47DMLU4nvc1etg6rFQK3dRASBqY2DER7Rm",
  "key8": "34p4XJBwcPZmSF9VsG1v7KTYm6SnRHAUkzvbaPJF17ozpu3Hho3tnG14vUvtaBDZoqJzXpf9DAnsgC37AqDQ147Y",
  "key9": "57ysqwthEAh9oFwM5FEUHJJyEtrmWekmPbT1EUKYRvSJuDzAMo8y3AFKDiqZ76W7dcWCJwAo2YRjBQHnZvQik4rM",
  "key10": "2qkGFZwQiVyPzCNaed7ocXQDEby4HaSNqXY9ZarTgHwbGkS3Yv2rMinv3bzyrreEtDLbdnicZj9cmuwhpyAbpk3e",
  "key11": "4NdfNwQztfFRJtkS5wrhFRgzZHV3EEKRTr4Gyr5p5UVHrnVSq4rVaRBsttAXUR8Z3ReM7WXmf4hKYBHSBGjvCQqh",
  "key12": "YrC5XpjbN5VTuPBYKvSSs5sMhtkyzjk3STvDsVQXLddbx481JbkoSFUBzD4aaL8Lfip7q2Q27yqTcAD44hCaem8",
  "key13": "5cqUkcwPg5h2kXey17URjrQ9u9wDa8EN3KpYLi6Usz4pqnbPyjc8vePngSoE6CjNWakSukMAgF2ZKZxJjdd8gKfE",
  "key14": "5xCa6y5CnidUoc9yagGX1e2CihLYPetrpkn1Zv1CypZQKXf7HmXWUwbaBqodSaFXCd5xDWWWZcQkSLFMdweFK6dF",
  "key15": "4W6E27ftwPCwV1gDJimkYBeVfSGPpo7UnqRSxRKfJTvFhDH1KoLBQQMZKX44j1k7FkTvDko8uaSqVNMePkoCA1MP",
  "key16": "4Jc4Lxw25Jfqi3uV9HuhggiQfATsnwgU1bqr8twNWK2b6LNWnYyiSCeu6TwMmQE3T1grFLnHUKif1jixKvu85b79",
  "key17": "2Pume6uv4982Mdyoxpk3Q4SjZyoT9pY1ormBuNDwcbgzwqM8D5ND45Yn6y8jMKSahgTHLHCd4KjHnJW3PPYsW5pX",
  "key18": "8FPp4uF8kBnb4BJnnRAZYNK9sctgw942Uwis4r2EUhSEWz9z1YUhXANoiBzG2QYiaX8Ys4GmuBaJKjRzzJRi4S6",
  "key19": "3kjbRH1Y93CabzntePcjGjkuiFWrq14eeku8oedpA2bmoogwacss5iETmJXqhfBtLS7rvrNwigPUCmqRD3bb633b",
  "key20": "XvH546HhaKrqTXtFjSVG2aXV4p5FX7Ki8FRjUeNZJC4wAXD8jjXx23GNcCoc9cJATqbyFEQHRFM9ECUGjFYG2ca",
  "key21": "32rB5Gih5e6MkMbekkcW7ekbVNu3g2F1CWbqzbcfPcg7gG9xRScebWXpoKJHFXoxDTRjgC6mZrZZ9n5BAz4hCt1f",
  "key22": "3cMh1DL8ZrKpsNFQCVNDeVjebyXpg4DGuLaL1Xbrm72S9Nz1cxUEcNsX8Yj8NLm7hAbPS3bMTCRuQ5pz2Kpny56N",
  "key23": "453sQvq6ggeJ2yS91MWuxAWxqDTuQZS7jBimhNPEkXusdqqddQtHJDE6UZcuxNK1etETGJZpRgcBx3ZHcGnPKfTq",
  "key24": "2eBRyDNkmCc6bnoo7dCUJTMSH9qPtchYEtTAGfnk1cr2pDBd5VUUPzU2S2ngFxYPo3pSVT4YdX7XPswXFgoZR6y3",
  "key25": "2yuJxN6Atv8V4WsuU2XjNWiUVCHNJHU6juGee29rAUWdd2wEVUyAiYCShNKuPWP6fZLQsN8roqxwhbJkWDsqbhLA",
  "key26": "3iJ6EpzBzBgQadNmrDJgbcxRMoi41Be71RUpWHSkXScYA773NRbkeFY4ZzwJXdGTTJjHk7gb3foc3Vdb8YfpJrJi",
  "key27": "2uZK6p16y1syKaFMa3JZReqK7MskhxxtDNMocqGT8VSYbLDBZ2TF9GhPPZsbB6mFTt6GQnaF7DQeTVuM1qmPDC3L",
  "key28": "Lfxjc5Uiqz8s3Tm9nVH14hYt4DVdQPNKC26fDLcKixphhYaDLmeTqaET5kvNfqsZgviYAviML5NDHbQ6djwhUJx",
  "key29": "2G17aZBG5UaR876LoiWHojB7eaNxXki2YZYrochobALo8o4ioQcYj7mnSuMNv7LKrYGcgrdBTLVbjCP4dv7MPsG6"
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
