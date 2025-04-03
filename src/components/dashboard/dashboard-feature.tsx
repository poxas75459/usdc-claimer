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
    "5NFBQsWe6Wvd9Fn1vFu2HMbYumGmP14NXboR9yHtZqKCiyVrNtickvhxx2oPAG6S6zupwXmLNbBATwn2g9tddQDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnhpt2HdX225XV7qSppNqjBNYzJmAoevPjS9jk1uniL1heX1JGSdPGHZQhWF2dgwf16YHjyhSndRgwK11MtRtpr",
  "key1": "2QmzRGHLk26SJs2qgqXuuH43U5qx32dz6yi6TYatUCYdsb2LXnzbLZL6dsie5x74TW7Gc8rdBRbGHtcCu9eaHhLs",
  "key2": "4xjtsXFFyMGHSgt8QvP4UD43w8qawtnkoqtsCN8prkTDgzPu4rfRsLYsWdXAz3yvmghrxSMFLphXGz3V7K85okvJ",
  "key3": "2SERPxzHJJGfMjp7eAvEotbjpSGzAJXUf8FMnhctfDJdLCZdnVLfyCJCxrCykc5WPfEjH1vhZF1qh3a9tRE8eMJo",
  "key4": "55rnzmjev2H7bGYeFRu8fv78TPw3YBqFzuqLWE72yyR7HwCwpqMPrPqf9RYaLGY5sNRr721CSEXgKMjHBdX1xX2R",
  "key5": "6otkPZjE2SsHY8a3u34RwUkJckXPJ2u4QC1b4pUWeqbnCfiGpRavmyRYSA2E5e7FP4xf4Rp4YveyEQx1U1sZJAa",
  "key6": "2VtBZ7a7Sa9dg7AYxUWurBrKro9L7mfuFAzXpeEeB2uCnNzRcYcXntnvgLpdDXRpe3R7CgmYP3Mz9qTb3ej7Zph2",
  "key7": "5sLKsbspZUAQ7o7LtPSRXUtieVcVkLdCsNtRrfFu2qiLsbRm2FaCiTzCtuAjgUMqfEPMtXjjr1dNChZYiycCdyNA",
  "key8": "4GRZzsEpuaUFZkwJDUNHmPbPBzhEsqTAgTSmwVVM3WZivYxekjV65vEd5P7mz9rGwjtFtpBug648aRTE9ZawPWnK",
  "key9": "4vk1w9nuUCg1FYg7ATAKZYsaQzKm75jdu81BmiUSihB8qEC1UuqA8tcjow44zHVEzoNztsuxJPFM7XhhYXWWvuqB",
  "key10": "4CYQpeEUB3EBfTq9cjkdYnZm1AXvVTo8gJmiWRA2Fgc72wjojMTPCGjfeYCqztMY4Fou8ZWpg53TzYtHe1fkerfy",
  "key11": "24h8s5VYz6JFB82xF6Fc2rWXEp1LMV9JKRcYqinYfe9JXEJT1rxazkU7TwCqraNv3oMBYvLH14MHi1gjm2oyqRUK",
  "key12": "5WbaKMzvaKRZHYtLmCdLnBTY8mavkvWwZEaUemro6tuYWcRe7uFdQbiphFWbx4NhvJNCu9cA2bqK4bFMzN8i4ngb",
  "key13": "59vnhpHd7eibybs9bU3f2TX3JR39sk2TLhDxTJQMqc22uGQntaZRx2rRM3E6n7XEfezFNWDSdZS39Mvh9kEdpd26",
  "key14": "ySsH3djntdtkJmyZZSJv5mqUfS4yYHfJVETr68p4bUp2nrSTEnRvDdDGuy9Pm5XDhQLYU1ckhEgCkbdHMdb7UZg",
  "key15": "2PHxMjXebNQR31u8YvMin6WToD5ZiL76AVHu75fspYG2sCco9d1s7GonRpgWRLDv3wdtZ2nTTeuXCVZjjxwXhUDF",
  "key16": "4GGdhPCfeZKb6PVqmfFRvQ7DhT3Q19vg7GZsHodpjF86YvKQX3hHLBdkNyT5s6NDE7KKnuc6jMTHGXYWfumr6uW2",
  "key17": "4PdEcHwRK58BYiW7a4zfotTZUF3uFuQQAJRpD3Usi7HNBbuvMhDvc1TSVBSQ1oALGDAroJX9rGotcacLqGCjqgw",
  "key18": "543a3okkWfyEDq7xx4ST5ngTFzCquij3vh1gHuTnXxgfNbEvWSJx93gyo6YLxCfjeJJsD1qJH2Fsmaz6qLyAevxh",
  "key19": "YyKPZ1VjL3wp8BWXTTdbVhUV1654ahSCVQcNCo6o99ejtud5cNzM66yRnWzcjzaHoBSJPgjHUGQ61LPBy2H4vzx",
  "key20": "3gpbrRQsMB6Vck5UhRG1WRUjSkiKzSx7y54TqYrEJzKku5Kz2Qs5zPBsS8PRfu5iZ4XGkCvioNgHizQYPsH9p4PM",
  "key21": "Zhb2tMXj7jjeGg9nKxowfakdULx1yRWmSyvJ4xtQW5jNTJ7F182ARSrn4LLzgJY8YEGJJTHB4hg52vXymzoV2Ru",
  "key22": "2XgFjzSf4NkgH1VVYW5aP2dys3W9SjRsLwEBZyssWN7aKPJLeYKVZ7KomBazW5JSKUv77nJTFNEsUo8bmgEE8oqT",
  "key23": "5E5QhE7gE3YsFhE7YSHep9xU9yN5Z6pYEGXGdtNPSn7KkK2R4p2PqSknkS6FRkPqttbK441cwQ7MqBfAuVBGcNBQ",
  "key24": "2HTfix4AaePqo2kTRsK5WBo27VvKbEe2f1JYoCwCFRhzmS6hC4d5jmmqWPRU9ioyD7EEpogzM73HgZRMfJcDKmpd",
  "key25": "39GbANTwJWFTJUpk4fuoaQ8d1mNWEYSvTLFFCRs8orxA1YpL18i8YHX4nT7QZijdJ5YxVXy4Y7XYFfvPKdKpbvNU",
  "key26": "5qBK4KkhQBSYZ9VErk3YpSqFxi4yEvVP5uxFjySxitQWWXi2vTtoZRGEzWUMfvgyBkLcixLv5Lo1RsUZ5dZ7nqyK",
  "key27": "JocwcHzB6JSMr4GEHv4e2yniq8vj2yC25FvaYk3hh171G6WCJTcsMWczmVvigZR9RziPSgP9TyjmAE9cqwWjYiD",
  "key28": "2irJMqNogmtxrE3djtG8S7gruXn5X9KNr1zb7Y5yYLbE6jKrd51JHDeUFhyvhKKTTGaRZvCpGzndShX2JHuqCF6a",
  "key29": "3sSkhPHRH1B1k2aFAh9hCx3qoThNjYWUizrCAsw8kAnT2d7eC6BJ9mnLqmsBP1nKvyZbR7yTjW2Aq9SMTvRGUd9m",
  "key30": "3J4GR49PnB9eBZw526zBQrYKXxPvJocGvybNLXn4eGZ7AJmVzihFtsPMFJbbraEXPa2mbVo5wJSY4EkyfYVVp5eH",
  "key31": "yBDTPRTEREEBNziS3S4jcjRdWJHEuAmABgWUK2dV3kr2F55C2FfV4S2dLHazEPAEv56WJ6R9gCENvyoYFh6M3zy",
  "key32": "78eHpMq7zqqoH4ZYgF8VD1VcNdBNmQUTHPkQyTeLmBUHi2sToJf5H4K7AMMT1nUpRbR68FN1X9xswEvtV3Yu9GV",
  "key33": "2TPXcDvgVGWZ2HB155e2WPP2NedSHDoJ2F9f4wA5YF2gjGXXUJxsZPdK7n2WMcCevJU3hWqrgsrbmsVFsbVnThEH",
  "key34": "4axQJUfMfe6quXUJT1Rr5ywHCvHioJ8ma88ULj8Zy5XqGen6FLHnfq6C7Gi5QfTez2fnpFWJAWYYoeDsNU16SUJf"
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
