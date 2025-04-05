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
    "4LJJkLaHvuJFQVKWxzpXYzZxpvEbNqaBQQdE9QU2GQ7LgLvjT9hx2mHEig2UMrNnwtU1Vrxk5eNaxZS6rBHJUgLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGHhVTj4VuV6xALWt3kqQXCPZLx8XXzz4keeRCzWckxPKtUqmJxbB1S8j3GYoQxJerAV8XZre8vXoVdEVwMfved",
  "key1": "57z85gmi9NaAPzmwkuniRrCHzQb2vGJNcURQnJy18g2mGLLGVE4Ys13Nrq2Ld5iKavQTuEQkcMLdmyeBGdvuZLSB",
  "key2": "5QKvmdGqk1v7t5dmfHbjVPbbXYqj2JrzpeEo4X5Kvkz3MGTp6YtcwSoWRph4XCu5yWY6HUhMzqH4PN9Y3rJ2QHht",
  "key3": "3hagUZdLZeJoKRAky65T2fbh2UJHLoARinc6iVHdJVvCRLzFAmZTyhs6cf1vnikBadk6pzdcWk9SNATwDMf2vSsy",
  "key4": "3zShrR6hLP8iV3eViuPzeAvAuQo5PGNKRQAiEE7QGWshSEHwnoS7LmZbuoU6wfsGuP5Etu1Z73Anp8VFy2JM53av",
  "key5": "4VtucXisnyEKFkZoa2e7v6yt5DrKFFdMZDZzm1A4CEYTabvsGYFBwUr6zhpYKjH73DwRW1R2uXbp9s4SvvDdBTLy",
  "key6": "5XinK8HWaWqzUqGoXaas6CnKUuQyWxHfEZzQa4WvKHqx6AzaBxxhz8HagvtAH5yNcMU9qwY7k4yTvdZvdtD4HVj2",
  "key7": "VZMhy9Dwc5W7XsPwPy5DefjSAejzSyXvNAM9n199ERqnBiqM1PGuTYzYqayubZUd7MLYUyUUuGwgPADhv37pEfJ",
  "key8": "42iCiRpCznna3mXETwG5QzKDYV4TsUJKNinCmUTeP8v6vpcTrFVHrFHCrBpv9CnW8pgZQm6WgPPDncA3cBQoXwWu",
  "key9": "2EaXNaBGvREU8tkbzZmJDQVJjK3etRD1uHnQQGFdKTtYVTVyxJLBFqxWx6HnpeAQqe6rrCR5oiSrFmYTp56GorZg",
  "key10": "67c3P1zXAQfFgv3kL5xzuwbwLprqGp6ioGyUqTrZgqLe4NUnJ2MHyjAv33bbN4puL8fkkUZifcz2UZY9VqKg3EWh",
  "key11": "3AgDDrpp1Fz3W2uxzARg2ct1vm428F5B81ezJPBqR4seaceGCLa2UyhvqHscZuQaN3UF6hzJvWLZvbdJ8sCGrX5D",
  "key12": "2arkKV2DqxJ5mN8Aiimi7PgdTVjMbo2fRUdULhGihZQWhB66FQSfcNVp5zFK9ZXrbfqircqDzyF3xDGA7KepReuK",
  "key13": "R5Xi56r1iYGDxy6aUsX1nRXdpzh15LmRv8uWtUkXLg1CXv5PrUSnqamMLJAgmYwfeZa77HqdpKZeQNByVE9qxhG",
  "key14": "QwBYj5TRz9jbCbdo43XWaMgmsUMiNAu99XoipCCdj1NRhtwFDFRmCezEHQrxCuZgdnw712fF8xRzXpoN2ZXdXhh",
  "key15": "4B7jDRN9gQzwZwaQXs2wJcHSSaAUCUVQSfK7AQhbGEXjGgoYw7x7pYKuu1c9nuAvoq4Gmx5CBaRcZMDzcwugdHgu",
  "key16": "38RzNfCwCmWwPJ285Dw6EMf3prKSeiSFvGFsADmuJfG35NoLyJUDv8yGNNjYvauaW1peiNm44yzFv9bCiiRso8Gq",
  "key17": "iGsNtTkc3BAXehCewGUyjHKpiCCRsX7KwWPFn1hLgidwmtHPK7MJn7Mk8k7Anse63gxpaaHDhnbfRjXEUJQQEZm",
  "key18": "2H1zdsFXwczGBBdQR32VUcZgF4GEKaokkKSaTN4nMzaW13xtkDv4JLzqmYkhqg2vG3firZfpC2oWKMSxkkK9LUqR",
  "key19": "57TofX4yRW5dY9jiF6qiAvhKeTqeUdXs9oSNGZy3dT6nx6cGAu3jSuD2VWAHkHqnwKD84reZ1TyNWtujokQ98A5j",
  "key20": "2ftEqsrsEWqkMjpaU4rkBWKKumXG8e6pv6wCw3UdoKnXxSgnyS2k3jKPf48AH8NpKPQM2X6aq59eLFco84By4cgx",
  "key21": "2LzNK9a9wNUpiYnpt6UpGZwtMLj62CzbMNwQFrtr99aSQFUqTaGJpf5LocnLN87Kum2WCTPhhSeSKExP87BNQT92",
  "key22": "23V84RTCQg59h3e6i9eEeYc6tY6bs5YRNGHEeoTK5ptvB6amMnV2hzdxtYKSiWaj5DkGKK7h5CcbsgySqd6EgjTy",
  "key23": "3Nm2DPJquJLuZYV5RCkNLuxYmEmBrcRRYSvGAbRpuDmCoWVHrAkkyqUusHuiZ3BX3UhgqAGHGJFAuxkmR9jDPKb7",
  "key24": "3NnSMuSmhMuiWCBguqJPogn9Gwh9qyDDmgvmobyAu3nTURM2vZjTpTVtzFP8q1TvXHD5d1VoF3G7KW3ayZGcPiPM",
  "key25": "peaL7sXzhe83zq6RtSpFHESghnyND3r53WwBp8ZwreE7wcJsYGqowbYrNukUH4eNqSf9qZRwJymHQY7g2qnyxmX",
  "key26": "43PuruhH8zX9jWJmq5RRSRAhGNrYCh39JYLfKi8muiGuxXTVNt4uwCzgSLsH62fspfRcVzh46C4wHg1BcFvwiFLu",
  "key27": "qNANriNP5idt9chiJpqekiYNkHymX8RpDftypPxfGApeo3CHw9LhGiTShZuf9aiUNQsrp93hHMHqqK3RJMMefbi",
  "key28": "3RTdsc1eZFDLAKcn4fa1bCu5QedHet3tZab1SuuY6tAZjHLzdRjWZ9qFFyS4vWrSzCyTPRQozWpJze6PuLxNLwtB",
  "key29": "4PkjdREUHiVkqi9w2LBc4Xk2AAv8q1UR36SbL4ejYBhg9EBPwLTFqeTvGG4GCoqWT3sG3J1isZyZNBZ4JvQnuWNY",
  "key30": "4HV2Qrpev9UJuannHZngEyyJdS3FJXtUh1f1q9oRCmyLujrZHpGzQK1MqmxFuxepWyaTcktBtfyna7bfFgmFfeCD",
  "key31": "46ewUYhfxoM68hQwp4899RLaLPeAAi2ywgbNyXFhodMdxyfofTiqXYXr6ffr3z53agFustCdFuM9fBysZhnaB6jQ",
  "key32": "2iaezRBsza6ChjaML3stFZjTaE5KcRyR2b7ZDYJHkysae6Atv5bYQYEBqiVmpEDq9DiiMq47fdJLF2iuv4ixFW4X",
  "key33": "4rKcEhDZfeGVeePKE5w3bxiQwo24LvvLV77vSaFdRuVHWxrsZtxUfCyKMWgZaZpZrWW9sy1hCQtscXRUeUMkit36",
  "key34": "qJCwq8AGjaHaQA6tBR3rArWCWbvXTmWw4WAkNynJuPPuorGVDvU1FpYWUbt4RVph2UEc95o2BgVGpNvVdYd1HGW",
  "key35": "4bWpkr9HQVuxHbKsB7sfFZBbuDPJDtmybPp8E7ieM5EXpAtdmjShPtJ7FGgGbqf7YrYMzTCHr6LztaEqruPHFf2",
  "key36": "5u2yaAgAiuzdUrmbHWyiXYN8iPZCFLr8zZfMF1VYRDKxYJ1LyU9igskmpWDpuvRv1xJoa5D3yRodJpry27bMSd67",
  "key37": "4H8LtJKY8LGfRenNEc4fDBYUyfopM6MqT2xsGEoNLSic4WAbWCgmfukf4TohC1AAQ7vNbQGFVZZe7nQkEHfS5wvL"
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
