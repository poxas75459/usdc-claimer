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
    "64JgTo2dE4xURoQLLe5D46JLTBMiRPBHcgK6rXFKUNuAEDvusahea2hWnZGRbwRWsob4796eBpE56b3rFn8hq8nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6cJ5c2KPJmfLTiUtCgQSqUBqxqhhFn9MtnTDyyDoCSYimJf9J97yfyRyaMZNu4m8qxU4AsAxj3bwsqmhb4vNz9",
  "key1": "3Jq6pzyWtHWQZKHRm8iSTwzydEkEzLNASZPiZKR3LjQPBwoJ9BPcecg9Q45p4NqZGufdr7AaoXLgHjAvEz4R5dbw",
  "key2": "3VDtJgDF5sE7ACPLN9RMJwZyR4cAM9T8BQmyiRoTg2syhAerv9HVSc2aNj4bDtPCvKqudcgqvMBSXyBHTYqSfieH",
  "key3": "4DRbuRiR1vn5TuDtKyvZccDXbUJwCaMoobtnEymt9syYX7YGHXYyhyR4rNHjJd2hM2CqS68iD4aMuczpzj9EW1zU",
  "key4": "3McCy3YdwgjEKPUd6fzhGnLG9DoE79c7bVN32aNUs5JaFJJnQaHsfSvZL4u1H4kJXxvEZFuCGAPVXDWEGaz4XaGi",
  "key5": "4JkjLXgp7N2Gqwg7D8jB9G33GHZ7cBD3T3zENDFt8Q1g2o9pRQpUtFKGSZYRuFPQcCgd37tHJksgboKPVj8HZrwK",
  "key6": "4MRm1o7c4zxaiNxMx8SrGjEk8XnUbYyTB75B4i2BUYg8hPnZmbe9kkdwu6moj2rMW3xcZymoLtSQmWTs3uxZ9Xx1",
  "key7": "4X1aygdP927yKGYzgNaY5jCbQ4uAsDpnfgZQMwUCoXZQrcvxkarjTC1Vb7zf1SSwt8gqzvvZXypKjVjMZk6NUTdV",
  "key8": "4rWYTjo2xRYyHr2GLiGAhLsrkapXhf9UBcZHb9F155ZXfxTyGf6ENdVgqnWTjmAraHDbuZ6Si7JKKMsJFRDiK7oy",
  "key9": "4nNav7WxVTMxCqBasE8Y9kUsFxEQc9LKjipSKGznfio5BrkyDFJ2qmS1qGY8pcRdWVRrJtQntuxXA9H1g5bUhah2",
  "key10": "4qJjJy3Dhdyk9M9Pv3rip9xXvrbuKRLkqpsVE4W6gznFN5pwgZUwbCRqs18jgJ66xRgFpNesCjobqaFRQbJPzbbi",
  "key11": "53ocbTs2dNFgrFTTPW4T27LZJeZcHXpKYgeVBgt9b8Y7wFqZ3CRrMoRs1tBE5Zx6GzisKZ6vjLiXhDCr7LCdhpct",
  "key12": "5WKW32CzgezxD5RsA3qPTbFLAoKPze5zUaiDT4GnkXtUocWfSkGGVii6zhicN8QU7PMfnPTMCkkWKtniJGJnafB2",
  "key13": "3VksAgy2YRmYHGi1gqnJMRb2ZMAhwiCoh6LMYByLpTVZqAT3h8WMkeTYTMS5fQ6wsrRue3M7uN83GagtnjxJy6G9",
  "key14": "5mKGLKDa5Su8Ldk251FM4J5Wn3gojT47zbPNQxrHxqEZHBCSnBNCZGWxRrT7VGRvH4bfKmFKcDCfmVijiDsT5fwu",
  "key15": "28i8vxowemscQovgjMPAGDWaj4qsd83VpUgPNWpe1uLCdPNPoTz9yxvkDF2R6PS9hVzNg7c1gDP4axkPjG5Gfehk",
  "key16": "vwwQVCwdEve1J4jRx7mrLoRC2vBCsPK2kjfjjwpL1FdbmqV5sSadUksALvygCs3GLHNrF1RhVRY16jkk8PF1hhw",
  "key17": "2A6TfjkCXwC8ET5NNxp856Wgs2MiL5EZby8d7vfx4toh68DHJBAUgrMy75QsKxNSUeBKYTUKvAasGgXDTyCgq3bX",
  "key18": "5BigSKup4LthjcpkjddoPsjafghgiZdVDeBSUb8XcU29na7wYZkfRKP1MS1SYacuXP89ik8M5jZbBzSTBtDVWwJ3",
  "key19": "2HW5WQRddNP29yjbYymB3t8oqqYf7vwVqezMteLn8tFJGBXLQEtkE7A4RGD5FcaknkzfhgKDGviSqS8PfSTJjtiZ",
  "key20": "57o8Ev5YqYCnKDpzrcz1vDoebybFr9UehAZhJf3iWzjNiiSAXpqVnaAbzBR93vS9httrPaHyhgeBPQV39R5nUxRp",
  "key21": "4R8dpBsH2NamHifFatfZ3LsU1q6N7Z7uSrXRk4CdFkWfsKNS78LA86mFUbz2pp43QGdf4Nj9xaRweDYHfCZcrh4P",
  "key22": "3tGCHLhJYAn1gDNibEFhcWHMM5vybQ9NdXnJwa9H5UtiZaookQjQCWWodYmYK36fLd3QNK3uRWtciuwqM5eMzAuy",
  "key23": "2WPDEoFZ3CxNBNSvrPBHUqqJkg56Bgp7FwExeZVqpx7N7bXBHN7yZpn4GpSES1C4tU4AQwWoXiumgw3o3qW568wp",
  "key24": "3ucERQjJMGpUeReL5PeuSifGjE9bEocpCxBvkVTmCaDjbYo8WX8fMKv4Z8uDTyUrFcmwgTeeLNMd5m6FJxE4cDDj",
  "key25": "oB1qZzgLwZo5AHCYPX5TvGP6g1JVEUjHZrd1Byni5UeNhfNSAcLz5zKLEVuxcLwuk9xJrDVDZe8asqw9UpscsaW",
  "key26": "2YnqFMTkJXDLjkBFqL6tGbceGvfVb9WJZUHe9NGVEomVDNRNHyBET9HJdEznrTfmuiMfqbzmFCcoqQEjC1D1AniP",
  "key27": "mGEeffjxxX49wVsCyVNPUWdDwtyPyZW1buWi7P6q15szaytUnFVTcQwskkiWH8K4QdszAhhhEByDv5hYLAD8BSh",
  "key28": "262yptdsMTmca2EHYhRzLW5qbTdVrp8aVUpUXqugur6NsSEMbCsBDzktK8PeTeHX3ixAZLBfdF21iwNqvyMB7kVL",
  "key29": "34qFzvaCmu13x7NGVLRErVZi9wgdmXomrBws9rB33EE26rMgmZr4Hft4rkEXpWAEvfCPHiJH8jB6QzScENyHv6B",
  "key30": "6K9cGdbMv16xobBLKA8tbsC6JoAa8uyeEfxqZRLs4ZeiVhQHtNbdzV6h5JwtxWPfGPgFW5s5Zrroe8bDPJHFfXu",
  "key31": "hwXmGmfugaEPdcVay6vQCX8uEaZ26f6nwwUKzUSFYdkgwMC6ZkrxBXfoZ8YS4UfYMMDkfzQzUiRjNQ2NPk81hdJ",
  "key32": "5CYZx6nSeYpdcNtLtuLFRGL9bYkgp7TTcTqGMYdgHWwSti1or67kTcDiPKLf1UmyC5Dg9LR1WCG8WKLZ32LApWBa",
  "key33": "5DYuLxUwT8eJUP7Bxa82jEa9Cemc7hpZU4aB42BXLE1k489LDbBYwsNboZqwXzSiU6e7wntsDiMxM8wDDnegCG6o",
  "key34": "JrftZXm4nFFag5LZCyttNv9TeJo7zVEMRo6xZDwDEVNMUA3CvEXT2wpJdtjo8tQRihhtMN9dCiVzseFr4VorK4n",
  "key35": "3bxXn6fd7z4rXyNQ1D4hwCaC51VgrxGxyzt7Vt1vb8NMeWewEoMmjwxdtXdgQ8PYvoX8dgZ7peNDVtHFM1mKhMc",
  "key36": "3Bf2VmaeX5JZurgAfjQxA3M2kAoUT1aGo8PqCqfSd2ddezkeKcmipLAMJVSBPVoK9zwW3kWBDA7K6ZvrvNDFdSy8",
  "key37": "wfeKK1dTrhcrHH4rZPRoBheg812YTaWjhX5JckHEB7BtZUjKhJQpvqrXTF6NS2DGhTBNrPW9X6yiRvHQDzcqeBB",
  "key38": "39nPmQ5kooh5HsmRKvDPzXEGJ3B2t3TVyWX6KrbrrZRvLZy4JXJjkBtFmRYjSygxJeRnPBWY8Tf2QyNE1FMrKvup",
  "key39": "3rJuE5en4gomTLE1JtNMnMt5ocpMWTnPGguPLAXW41f3236TptH3fuspTqgvXtpvmbFReNLnYUXJXUHiyz23jF3W"
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
