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
    "4tWyZJEBBvzUixRXVewHnwkKF5eTn1YJ7ZeU98GX2aeKuVC8dJj99PdnBzDpCUGZZqEQsvfRNPdfrswhbNEmNsLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbyAnXMiyiJkaM9skjXXCSoe3MWK6CqqQqyDksKDsS2icM8iU7fL6jmZN1JWEtQ8tyboAe5kd82D9MbaFbbmemH",
  "key1": "5f2aPicXYyBa7c6YM3tmR9yzoLpRuLX86Vp6UsqYKShLjvKkA34AQisuJHbC1nSoZEdqjzdaxBykRfgm62FgQSNQ",
  "key2": "36b49E3GnGxX1z1JgLs5xzZayW37xAfdxhPWggEkdBJLmMaX8e86nJTj758asq6ikZEuCsrVfVEptcXzpfNxNPHE",
  "key3": "24NC53xt4gUf64t128vumy7te5Kgjzq739qHEhDAbdwxBXszBQBTBukkhLSYy5qR3NzxEnqtvq9ptqd3uzcZ9Lfe",
  "key4": "2ehhGdpasedZxMw1i1tougRSMpug7uW6R2Su3Q7gTVzWL2vnM4WfMvjPgcTwPuube8S7c88x78uPSQEnSrcvktf2",
  "key5": "3snQku8FYBQ7udeCEn9GgzEoPZkuu5nW82wqujN4a9q66EuDFB73UVM7UrrchcSYmad6N3s5hoKr81TNQPiRuMoG",
  "key6": "4gvgc5PXgqY5tQbMk7gKQq4z3EtyXceikVZhcWsLdiuPErybfwnqNnRRX29ANwkR5yr7rpqNHKMYDmn3x46AmHAT",
  "key7": "f3LvdXunp5MU5ETrrE722By1J1gxLGihkf58sDNfTACknZGtZ5e9kyJdBEFiBfC11kjH9gtNGZyLmVBRJeHF1oJ",
  "key8": "4sZSQ8jpYzoTgod2vTEvtDV4Rx2MkxQQZvndqWfH34uq31vEy4xNK9Zzz2hKpXxx9YqpDivRiP5eNdjZUbRXNLAN",
  "key9": "42yq4dFVrbhJ3hNs7ScSrbs7DgH2yeR4pfHDrFL25wdXzreGtD2vDWSXYACsgoY5QKn4BXoAVsUwkFtdkrcSegYe",
  "key10": "2jBkMUKv6SrH5XDrzDRqrNaF4y6We4VQAZcxFeYgq3MT5Zekzgb3mWYzp8gFd34UjZAzgGkoRg7TqSyvp7cAmsR8",
  "key11": "4z9H2AouLVh5dFwm2xsLzr3gv7pXA6JKuvBaXpqiapzj8bB2RWxYPf6AC2sbVAK5N8xKTSmM7KMbP9qArNQVedDN",
  "key12": "4MUhSb7yHpot1y1K1GxSx9HZpjksgptR8sVZEtyaRyCSh1NLDyFUBZdUFLkFAwM9xmstfkZw2EQbYoTtv4YdWm6k",
  "key13": "4VEUhnB1gxjJMUTyfTB7Ud52MyfDA1MeqhAeqTvevcrphBvR7YprzqYuszLHG8YZQRMxkMxFGmNkBRXcJ7FbpCXJ",
  "key14": "3FNHokYC17tUnYGjo4jsaF7nRfEVSo5EjfFmbBxXNP4Nx3WJZWcnvNd6ZhYsUUHoGxcr3R6MJX7wmyYUsPA5XqFD",
  "key15": "3sQ7BDLD5iQfDDjVyDxHv3LpbPNJaBT37CmGLzQzgHj5dsPLZzDyyNJcCvbpgZAU1otaYwes4jvccCCEDWb97DZM",
  "key16": "3r9tcJcR9JR43DD6FWv9TYytwmi6B2d1dSTwSdV1TdPvmc1rsBhc95Hw6Xxqw6UmhUBkzEyWiaMnQJsHiHLaVSZz",
  "key17": "25aJdYc7uSkYuJCyqPkdaATK9VPM7n613J84eG1W3bXnASxTPZjra1kUCPHY6radY8uNUwDw56Mbm7xVaqSUhcdD",
  "key18": "5vojucnkruef1zcgcQ1pYAZEtTWJu21MBTA7HHg6PDQgXC6231ij3q9Q5NZktiLBa43kgRrRgmkuHFCLp2TWgbwT",
  "key19": "4Ss38m6jC9YHe234h4Lcg5yFhcfxbNmsQ39YR5suUsjJ77ArW4HnviciGdqJUsKfhG48o6tJydbQhyLT3qYdvmkR",
  "key20": "4QMetKUxH2DWgovzhmt15ARfw7Ghxg3oXYASNMjk33nnvUU884Bsjb4cpbaoKCPt2V2XRYRoFo5vexZ6rz2YseQ1",
  "key21": "3tsXRH3bVnfoMbT6c2kx2b5m6dUaWsXqZ1KtnbhpVQQWTWcFgvb6MnGdYviCoUPqaChnFppeiEkj9Kxi4vrpeBfk",
  "key22": "3WsBVuJm8TKbyJjuLoDjjKxoE9TSgKCREFAkkEGTef4DD3KDdd6xfMP3XWx42eF4BTJwUTZGAPj1RsVXTgwiiTHA",
  "key23": "2NupCZjatWksWCvydgyzNZcoxgU3UwtbJhZBQXqrsPJfehNZ2PUsGtPKnrTDdsvTWp5XT5b64qcG7rvp3RW6SQvA",
  "key24": "2DPXFuL2VF5nR2LLtgVxsV6dUeVUbfXAcyNcvfYpZmjPaaPN7Am3ce2zJJ4ztuiMkZBnCmKDdEXnBYzrDsUofBPA",
  "key25": "4Jxsbt5DFJEcpFFkESMaz2oL5y1GFGKaZ1bjreyYwZ69cs2XEBvfTtvwZQCpT9rHJ19pZoGLZBDjj4GZbaZAQJsb",
  "key26": "5PkpuJb8aSoXX5hnsqan734S5CBwP3Z71iL4kxX1Whagiw3LcDKZBC6CSVWCyMNoMgHZera2aJmCACJvkqJFFj28",
  "key27": "57v7FztyeCkT4pb9Di471opxvwwbFpvCfwmKPRRGNVvYuyYu2BNiF8jCEZj7tC2VKneBcHsVC3ANPDSF6kNMshPn",
  "key28": "5XZKKWaC5krHyyU4qxiTNc1R8EKBMTmvS88AuqdYB3C3gM45cKSwv581nj6HVLB8nxzcJGP8xAD39rSaHMkQCHAb",
  "key29": "56iParL8fnSQnrLgsVe4u6GvSBCDpF2fwpoQ5f6jKSjqe466GjbG8C2U81cgCEtzjP8XLaUhaLS4dh5Y45RyBFtn",
  "key30": "3MJXYmMCaAozq8BunX3oZnqKQEHXx3B7HzaMW9uSuFJBj1PvaG4yAgYPUMyuBK4zJEwnHTeSacTqrXeKsXN1YjaE",
  "key31": "4fpZ22VUbFcwr8JGwtKByUX5Ee1apiPsv4mENLeMzsDbeg1XbeDoPv1KVBNkQMMQZTLnxt8xVT9FTerkogNz4H6b",
  "key32": "7w8cM6CioqoahP5ncmacUiqvVCeNDFDMp4ii64w1DJLFNwuaKx6qZg7MXw7rLhMaxX1sC16teV3oArv2aRNCENo",
  "key33": "gYJW6UXSxALZqW8jbfqH33MvNRyLGr65wdg7jbn9kDofAz6JmVeMENfASM1MuaK6tfEuo5tMizJUN6Ts83p9jUD",
  "key34": "JYVNcieQqHnPSjmCCWM8K7iDXpWqkMsKDoizQfr7jo8EfXWu9EVpfmXKc3oRkd6vr6FQjZGP9PFfw1WDzTBrB3t",
  "key35": "2guRJJA8oqveNqg8drTa7sq5iwG8syiQVfYRteo5g6Nxnmsfsjsh1Yx3CXomy8nSnDppv32As8gCgouc19bv6XNx",
  "key36": "3nhCVvbtqhpbTqJpCaSP1KEmdW8WByvKx21mTTqAxCLrAkREK41CfFGE87wFPEind7D1pP2aRAopoa475CpLQLtS",
  "key37": "4HBDHvNNcsBcqvqWvFT5KVjjwBZMjyne1TLzgfUoVWGc3y4NDhwap55HtEZRmRwTGJzCmXXLtLEy8ha39u6q22pP",
  "key38": "3QC34tPcCSGo2N2DzhbKhX72ooXhhG6mtFJRT7keGjGE3c3pH9UjyWFvB6ciNEi5MBgVzhHXYWH8JQC1NC7onrjs",
  "key39": "4kEiAhx6PW96JsuYYmrg7KQx3qkwarTmzHrYgQkH1KMQm4PJjcjQGzeNjxmtmjaZA4FUnybB5PPVzkR7eCVBWDfs"
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
