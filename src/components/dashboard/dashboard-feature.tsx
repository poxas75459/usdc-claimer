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
    "T9wCHzfAgogCvb8Z2NjxuNxGm74JpDHyvprHTyWhbsXgXejCfjDGMMZLiCWxiCyECN3GK7Ec6udRhcJJmoL6NaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6tK9EUvvPxvowrz1uRvmX9hpcz4JkgJ9ociHrXy8gv5E5H1KJGHQdin5vYRN8v5PMHVPsWkkWAMHorH8N5xM5n",
  "key1": "28xGmQEj8t5SLUje89EnXCPnYjRsXU9aq4jKibNVsStbhiBBbMbU3NiH7Pjr5Unaj9GWCosDSg14XkuaAaCpxCEH",
  "key2": "4UPq9p8iTXby4G2UFiRK2YShJYjgLcdviDMUmVM6kTDAFqStPZ7g5ucXPHLWuy8kZ8hkLP7qgNcJnxvjHEgb86LQ",
  "key3": "4vVuYNETiXQcYGYoamHBm6UNbeNQHsQXqmk7pvogeY987LaRzmQAjj9gK1dtGpqX8nGEu2ugnhoZbqxGa1qBhkyf",
  "key4": "2wMYjeJKQbcFL5eaWihyQjHM3H6jLi4znJLkJyDhheDWPYYu87wLKNKZaVj9mMgFhNQy4gJkurdmpn8UNdf5pgsZ",
  "key5": "u6k6HdDNf4VZ8LBXr4fsDc5LaiCffTVVD4NjHtCKcEiwGiWxKRv8Ltd8QhRP9VRMisdntPFVcFfgU9suNMyUbfj",
  "key6": "3p61ynbA4PJgnH65nxtgqvte2QicAdtwvrp9mLAGH5wBm7tu9FZgWMuj9ot4PkVhSaJ24br2Ut7xjY9gRjyU1xht",
  "key7": "3kuNoKPvNFybTb5fq5E8AjSWrwS1WGGxr2Atr5oRVsBypZ8r1Bri1kop6hCECVLCxTNRFX2vYQ8av9PgQfgB9TJr",
  "key8": "3DA82gYhjFv9owcyD3J7tJqXuMUdtyFvqHzMWuu85wX2mLFQqT3DgX8B8rr2fuWWxmxVtxnoRvEfc3uboHUzKgFL",
  "key9": "5EzVHNguJh8wdqaH2RrGr5S9nAxunSnybfLcpmSnukPeGwrSjYu6YsUaL3fjzAvqdieNJjdQ3H69HTUhdwti944",
  "key10": "3k65sPhDSMr7S2GzkXXWMYwMEUcFRtM1xpkzDidJ8CpQj1rqKvCdPPYGtU1tTvLpWoyTzrPJrfGec8mKgQwbm9L6",
  "key11": "2Vo2MhqhYnw9fQJ3uicegjqVEq6yGSZf7C8iPvrqP9mcAjpoBgsfBcPkzSy6b2NNqtfBSqXZLujr6yzm1jxED8Nx",
  "key12": "2NhHqr9Jpc9vxpvadWyK3ZTKoitcubV1eaVDpnGYzDzw6VQBRzj6qFvDtVpKkBVLAvG4p3oMZY7QCRHqNJR2Hmw2",
  "key13": "34LRoiGiD3DbHPozdxqq8TPV2WGmcXkfeSrBo1gJm1eX16RmQpdMRX3oGeYDVQf5uj77eTD2u4jtghTtKDvYeKZR",
  "key14": "6rW5PbXuKaHfcSX4RQAZ9ZAcLwxYRynR49GPKFf1GwuFNNr8UzaRQBVPczNRw3p3L4GcogzCkC6AtJidXsyFfwp",
  "key15": "2FEXqiQWkqWw4vnYADNhcpPzsYvRBYsRheq1ud2qjAadcDH9pnBfR1D8L9iWaks6qiRdaurTeF1ukr7cQrjbvHoM",
  "key16": "cGyryYrgkMkbFTGDwWoL44wyHuHtgoqoy5QVp8SXtYLP1RV9oSh3ouMjUUWXWEhvBqvNbKXDMjZq3Wce5yVA5ob",
  "key17": "27CsyJA7LweMhBexvExGxSQzRh8vS7YFMLQ69mrFJ2ab51CaBkzgUQvhEMrKmHN4TZ7TbjJKkAt4QhZiq2LeppSB",
  "key18": "4miPaa7bpX65qhgxXUWBdkgHXMBJguUoxufq9o7jzqrZkHGKkbET4ix2hANhkf6aTVVRqPdyRaD4kvSaHxw6nAX9",
  "key19": "2m1mziHQL1uTeqKpYajqgCdLWtQbRR6ow4RfW9Wj9bWRzuSAb6xDXFXmcpYcFp5tURQW3nVxZ3RhHxALHZPdCXGg",
  "key20": "5EYG7L944ewKYw8GDgzHVvgfv4nHX3ioG25njnL14AafLYg9b5HhjmrhyzLh4Mjq4EEhEnhmPHM9aws9Kc1eYUoC",
  "key21": "VSHVQfqp2HW4p5CgxWCHwCQmikZXAiiqbBbh3GyGMebErKgBcz566LWYoTuZbP4FgqZagc75FGYMUFXhR5Kzm22",
  "key22": "2EsmCJo2dWJ6HxipDJpMibCbvf7EoL5GpYq5me61w5V4WbrADLCuS9PQAa7i8W4CxSyx698jG5MUGck4eyeHdrFa",
  "key23": "5JqbUSHuZu4EakbiDjtnSQnkpNEMiDLP6KkzGVbNwMErXFyJG71yFEzrfH7hHD9eX5HVKdRiiMu34SGEYtVvc9QF",
  "key24": "2bozDGianDSCT7jhSXExGmTQHnpEoLPyng8H9BFL4xzPrgUumpfdsd7KgPNpfxhjXjaZ6RijtuzwiieZrX8Po4DK",
  "key25": "2Q7hDYCqTznUqfKvWsC1cCaouXzyXcGJTr8bSS4SDh3R6JjM4E7ieoosUbgQz4Gdc9hFkxgNy7wgRvgNvMbshUUx",
  "key26": "rFJQW2FBJUyyt4bJHdcmnW1fVkKwYFhvUNsqnRAPD2MHLouaYhDrSPGWAP3eeSv2coxdxiHRS6CNd5sSriRGywa",
  "key27": "32NuVu1XS6Yfh9dBEB7ZEhVb9o4Boxp3825Y7fQGFBfRuGDRbfs7AT4ds6NYxMkp2w5XaxySXXPS7QAYwbpUGNBC",
  "key28": "5EgRgTENqGRQSxWhcFtar7Bs7D3Pswa4eAtpeFZSNGuRTjX9pedkJj4JbjmZnGQbQMLMuVLJbYzAJ8FZH4GF4xaC",
  "key29": "4QfA3MUjW5SFLxFVa9PLd31ECGtqXSnoNME3KNzK65S7NfBwjkL7xMafZoiCCxmkTyki1gzEUteXvJ3f3ub1zxft",
  "key30": "5KPa5tTdYvcPhLE3vrpxYpM4bdhRDeQ4eietY6mHMStoaSARZhw7UpnowN38xYWywTcvV5dynGLM1hGaqmRnRYiG",
  "key31": "3jBqcGYV17ycTbr2u4Q7hHDydYVZEc91Gm7fhVoCeNaCfMEjtiCB2H1NAbdHo1SV3wEDKNV29pMGsoU54JZSr1Pm",
  "key32": "64waBC2NCYMhmhg8u6AyATJpL9ahGphVcwqtj2G3UHUSihGFCGpc8ok4KtnP6n8qvbk5F368NVDuFDfNg6VWKHKT",
  "key33": "5c4pF3oNpmN9zgRWpuRGZsbnf387dZBjw5fTBULs8YxnCbzaC1v3QThuZCnV5qH2SSRoGLvcLJEgBCjPuHwaRQ97",
  "key34": "YwP7imMa3PrAJUWmETbwfoMsJCthZMeDSSRKGv8EcHJPh4BVD38D7XjYkKYJZWe6UhBaJqUGnxCjcAESpaGxV5M",
  "key35": "E46FG14NozcymiobKCepoGZ4roMX5BczKaWMwKZsKQWycKg74WS6xdYfqTf1AfAcEGkDEczkEgXgSQm5SzgcmZL",
  "key36": "3pRhEqe9FKfVzqNvw3v2AtdMJG4jyF92iURxBVTN4s8UJBP4L3cWBS3Zt3HHVVw3nsnJyAfEGu74opoGuU1LeQ2B",
  "key37": "5GPUMjJwWbWJUvdE52ao2boEv8RGH4wfSpv6ELLMqJDUX5KMbHg7zrZGCejnkhThD9cRWmRuXx8aDSonrmHa3o3M",
  "key38": "271JcdJU2897nFZYmiTkjKVqLyE4uXVxfj1HoNbmVNCaNPKgDGH7uJGoRtmcmVRVVwxVUA36L1M3po2JoQsgzCxY"
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
