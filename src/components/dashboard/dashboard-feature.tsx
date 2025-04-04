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
    "2swSYyYaG2FZb6CLpojWDqumsf5ApEmSvuhmoJDyQerZNYRp9nLRoBvp19XAyyE357gZQtJ5dgkjUXxpXn3wrwie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2HDf5pxXLpAMx517h3wKfimPeDhjZaJVFHmBpkHtbHF29RQ31g812C9uNtU6JFt4FHcrLgzryHuFGwJYQQT4C3",
  "key1": "3NLQy1Z59mTLuTWeF8SVnhGes2dB9HD2qBcZfVQy4ahs7C6Xr5tjVNZkDRgKBfp4eRs1uHq3s1wdzFp2yVJ7SgXt",
  "key2": "rr4AVWTaHiu4eaTJ3RTeei5NJCV5qogrbG9obwNsuiBrJyudtdq8ypvW1b57v9QfvQLCkwv8i52pEzbW7JtMXD3",
  "key3": "2FD1G8jsJpmB32MiMT7L1F7pLPpU79DU6F62i419Y3zVVf1iM8QQvvmvGEBgxoVdkV5z7yYNWbu943RKmh53aqsw",
  "key4": "3khxigD2AgyLxR2LhNGgXAGoyyGg16MLfCuRZYHJhP2djrectVrD2gzyBvNp9kFvVKrr7uqt66H7FQjJbp6M4uPb",
  "key5": "4d2QJTrNkgDU5YgJd27XH1qUwHZ7MLyJzDiTgMygpxKLhgXrYSicUDFpuJ5DC8QV8w5EXArtaMhBe8zpqQ61tz89",
  "key6": "3rhLdVBa9UFqJw1p6xdW77HSMNpaYrwuyfuhGNYm3kYikqSbdF5Drgf862qMA4PLfSG9uWmakea81zihzmM6GRhX",
  "key7": "PMYwxyXzmhfi94DDYfyQNTvxLpGrd8XJJAGbcSRxCP5Zm6v7nom9s2CkCnNKtKBEUoSEVNr89pop5YkcV3xQJE8",
  "key8": "4uW6WL3TPfaKbSDswK4sbJmKky4Kg5R56fG1rvrwRQ56tL1JxRZ5UU1aVcLsE9mP7udFmmpV9jjrkhcTrXAr4ud8",
  "key9": "X2xZniFmzk5YQC4RM59nkvWHkS2KEm1SzdFh983vZbMdvFj9rPa3U8Ch3DrSsLH9xUmazJDE8pmMcgkxFCGRVpb",
  "key10": "Gp7FcSZXX7B7PcieiGKZUMz7Mb1WpwbPDYAP2M5Mhmp3FVCRSvNdkwvZsvrghzafgMPCq2y8dRhz693nWpLkDwT",
  "key11": "3DNXYeRuTf1UgUQSzB7rYY2xCtPmp3wPaDGUBF23ZSuRZjMWeTkRrNfgpJBKWoPeirP7bHQH4ntNGCx3gotaoqio",
  "key12": "2xrCy5toheLQP3BJktQXyBtzSghHYbxPQ62Gks29hYMSTbqcGrD1sHEGRh72ntkfG8R3NDp4wVvEsEgPkuX9xhwJ",
  "key13": "3qin9MJTiwk1pbTPzr1mrhKX5w1d7vAdvAU38PKdBFj5Hf8oNJ5XyYyMcgAANbDG7FLVHRQhG1QM5aG17DV9Hat7",
  "key14": "xZTZ2zhE8ptvZgtYTNhLqDUa7JatyHmWJ8sCfPfUcjriNFc1TjEGa6nzgQdMKuorNyHFqccShxm2M1a9GfjR2KB",
  "key15": "5z9v4h1NeFiNuMW4b961Dku6hRSHCoh7VhNuP5BxixKfR1ErqEwsT9DmQPgUoYs5JABKAy4NtKnnAWch6Vj9qiJq",
  "key16": "5bnHUfjCxxFVgUGSeGcpApeebfrf5XMTDTQZRrr7cPXwxqkpVBRbroDdr6VBegzCjCm2LbxZ5Hf3M2fLhyHHZo7y",
  "key17": "zvkMJHwcZuKBkvYo64uctHUnPUMC9SwJz9bLbe754mNvBzLuAsPbKJuJ64aZntCzTkygN5w6ByCNQ9LU1FjFYjU",
  "key18": "3ph9qW1ejaTNuJvnkdzG1yyXfQ9bPJk1BuacbXZViLBPb2XAQEJnhcH8hDf7m8MRL78rG4BCXbvV8z1xBwYWTigx",
  "key19": "2vz5YFggyHefEkyeEvyeKy383duHmUvnQmvafG5My9wdq4ugbMPQghWyhvgfbbTX31Y6wdJW3b3NNdAdRxM4C7cG",
  "key20": "5fBnM1RLhvdkvxVNXMeRSEwPNVwCsdpC6P4QHQfpML75MZuyvkRJBNYQTqMY2DREHiU4KWgjkxvp5Rb6BBPtzi3k",
  "key21": "3cNuUTkxjyPBcLQunccbxPJzcNroMSkX4VxsvcUwDjM4PMp77AT4VLbfiNsC4Fwh3RRPzouTj63NLMcbDXUWoMts",
  "key22": "3nfBpnTR4hqX796TxsGLNocJ3GVzKAPyeotsnp7HyyWkCpAKekcPJPyGLWZQuZSVG85SDCeDTpisiUw3r4VNiEUv",
  "key23": "3AsUNJG6tmy8eTJctwRDUZFyZKXJmGWLgBjvfojHCAuVMr5aQgyBfh5d1VzK2GWXrLKEdaXmTs4BtGtLrQScT3i9",
  "key24": "32kvuyESzteQaqrpqiBDP9Zw7W6xY6uVv5t6zXFeuAF5kbaJdCGDPbMw2xCnBLvZVzHWAHEmdwm8v1bFppqK2Vaw",
  "key25": "atq556sGYEiQr7f8BRveEYmBRQsdT2EdoaaEEF1sBjVESp9USXqiLUz4s1vXZnEXvHxa49aiVTMvhnnQXonVnRA",
  "key26": "bUynzmocsVm6k44aSkjrYmopTqPJAt9nD2Cq9kFDPJwVTARCzVUNwJKqFJpqFg1Fcx8tEERnenx9HAccxdCFELB",
  "key27": "2Vjhizvr1GqutPVEFwk2XK59ByWJeveWHQYydq6MSHMouS1PwnZCG7YY4UJBxhE64acZwzo3biBr2vjzjnG4Lo6M",
  "key28": "4cuMrLMWx4iqWTuttK7tsEdriYQEktEuv5L4uQrPBoC2nUcz31Wg28V7NQVftMbPZjWAH9StZSTjBj1XLvnwiZPE",
  "key29": "48P4XY3xgFoRzR3TrDsFCrB2wpXuuHoHfqcx7866TQiM8vWXtYhyoergTbZ9Mo13Zmme6Apg715gVpTSocJGAiyr",
  "key30": "2WjxACT8fEtMpZfCqoUWRv2vBfNouXTWDos68Boc3vENnCW18okWw943AFuS3rDABw7LtEViEdaUXhhRp4h28ubR",
  "key31": "2LCL4eixLurHEbS8XujTvcfhJciVHdzhCjFSbdCQ9QJzX1mmcaoSGxAkDwQFX4kzTfvGL1PM4zUCrXuBvX515RkA",
  "key32": "4nEDGmP149U4MwtxGiuega7kusw9dfGeQX98n9tC2anB4gkA7sTocp7Axd5gLJDKJ9TaAj3KxiDSwot5utxNt72",
  "key33": "52ngCKPMFX2cLaZU3oHm77U7Y2dp9mdC7FSDFwoULVGE6sVMpDB6Qve2VURKDRY39vCi6bVPnEDAmABmxWLW58Qb",
  "key34": "5SbtodL3Pj2LxE9JnVwzVq42WvyV7QKWApFAzjtbBmHToi1wKdtK5QBHhLi3ZLkr87yWWfNvc6WFkm2bqH1bA8yj",
  "key35": "33xL1qNfZVXjGhap3kzFk694PtPMA4VAFZzdyPCTx5NW1YAWuTakz66yLp99wV9iupUG9Rdisgonsg7ajfsQpCFB",
  "key36": "4EH111ENQr37A737314LzXSXwHNuhTYNRFEyssc3LivLBJ6ZJvwLqVbK3dPt2sthnoWCgDSEGqHM9QW5ucozsqpC",
  "key37": "WwT1Sd9Fa9XeyBWuFjgT1B9RVWGi36CQ1cim5naQgDnSMgb3DfnpCS6FKSCGTQnJ7vJNE2rVJSq4sJ1DvA1Lj1e",
  "key38": "4AVnu7GptzmJmL5LefJW6vYhZNUmfQx2zR1rPNdoBbTvFECA4rYbm4MtLPBq1sfRS52fjkAokFC95BT4yfqRfJq3",
  "key39": "5naht8MtbgLMCkRjYQuU2DqSZ6asnMXpxPjMzxNRPGYySNwfrNjFRAHmqPQsHGXj1DSU4Ssn5zmPx7pfighH2BRB",
  "key40": "5MvZybJT61zdfF56B1VrQCSHaQxkgkGMpK3pfx9j2VfxzBphkabUKyMtTuHiDFLe6Zw6ZE9T58gkpVFaswfbyRz1",
  "key41": "3x49SKLg6e52Uqmf1eneUfrbMBLziWoZxRU7mNdcu7k7LCc5ujKsRJVp7vfrUhLsa6sMafegzq5CPxdNVAQCxeo3",
  "key42": "4vVePLob8q8LVWRut6zBoYrcZGknxAb6neeXoxfi9P5UsZyBfEKEk2aDzoKvaCaf1NH4JWyJqsbM1VW5asZtFdxt",
  "key43": "VtsLiDwbb9nN9UrTXwKHsa2e7Q7pMxM2zkwHvkgTD4w5aiAW9vR1arcRh8QRuTntBzrYjGJ78PEwNCxwhRbd9Vp",
  "key44": "4Eqd8KQ2sHAXpbT4yyhoKR3u3BVULpD6xEuMYPFH56YQzHkir9ASW2UBmLxJnQgtbXvP9CfnZemWNDnkK6cEL4rK"
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
