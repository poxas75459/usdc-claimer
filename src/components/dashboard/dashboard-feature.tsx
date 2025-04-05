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
    "Adh1XoouiePr9QSMUwW8KuCnutpmfxHLaQzG2sbKWYrWXFfj6PXqZDKgW9RPjyG6cfGBxJ93TzActYfNzZoZ4m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqC6TXTjVPncA5dopYtHdBq1txDmr9ZYhTnspUvCw89K16gbPNfzpDbScxXxwoLMy6fWj77FTL7fxrEETamQSFR",
  "key1": "3pPHkC31MPpLYfHmgpVZ4wCGLMft6jyeJJZ7GUYWmrk5VGrZRYYUQqYa5tFrvaDVNoXcgqjnZwzACnhDfSN6Qb91",
  "key2": "3ucQgGnf8qRqSLYz4GBR23xqFd6VaEozPxoigNWemraXpFtU8N2aVjE7kDkofLaAKnsp5ahaPYBL9E6X4bmatuNH",
  "key3": "4qg493F5bFkWYiEKUYkeaJMUVLzsSPMQf3XFH97wJ6SvFfENQJERZfVF277DZKXG13N6eeNdxjCQ4WuYpLhx873b",
  "key4": "4a6NGfxx1eh2s45CtWhgipMyG5qWnDrnrdHmDB1GoYY5YCYacF4J2onhgv7PTjib9A28uRYVv4TXwJJjVjvAifGG",
  "key5": "3DPwZ1MfgRcGxESqNANGAMKjXmW9atWX3BP8nnJmYwpRiFtsV86dYaQZpacAA6rtMZG6nrGy1xcd7fQF8eaVXtLP",
  "key6": "23w5xQnmZUXvfTwqLwcDYBQFeDuEvhP1cN2STAU41M8Q8QNDayfEc4CubC9bq8JGy8xJnYrWK9fhJhwx6FGCe4SH",
  "key7": "3zm8aWihKt7PdgDAzo5ioBbge9ipVkFH4U3upHtDvdgPJwcMPG3StArntnozkmjA5T3GuEHyoh42FqUm8rFfZYk6",
  "key8": "5mQDpXxaUMFsSjBqPTwK7fpQA1V9JjYqQzis8hzfi7r28K2B5urYLVkT3m2LoQxPyzPYSMcygEwGWmxqyhHZe3P",
  "key9": "5cTbndGgHSGBVo2BjNMbbAb6H7astxQNofh4SoY2JSiWPbuYvAGe7kHQnmKr6Lp1DPWtgZ7UrN6zvcNx47rGzBEV",
  "key10": "3odTzDNfkrmRB3k6Fa5jAWWw4ofc1qEJN9Vnug13Gn8Y2SxyhPfZd39UV3anXZeD5nxmhwxrPJ6S5Lv9hCtrKjMW",
  "key11": "3PPLC8rztWZwyQLhrSTmqGiiiKnh7wKjcFxXoj6HPx3DR72CRHJ22zYmgprSjycYeTDHmYUG24RPoPhs2jxt3VBr",
  "key12": "5PdkDqyndHru4o549yq1RBMTxk6bneXhEFANdgVoHDcbKZqdHKKgLX1LGzh57xetKn7ygvZe2KuZNRwCECE6eq1x",
  "key13": "3per7YLv138bnQYoNJjdBxENYCLdLfyGL2PmDmKymZ5BEjixtqjGLTjVbG9uVBDxgbNQT4Eco89wPsYzttKkbqrw",
  "key14": "2cRVojEgPnriiLCV2mg7Trdy1ep6Z4FP8tPoR9UWDpPdjmZduFfhoGTuN6iVP1fju2NXrzwKC2CB164JmwwX8myo",
  "key15": "PCDVjxdBpT516gXzzE8JaSkzH2t8CHqXNvTyWKvZmUAkaX7u6XXdNiMJzpe6wMg8jWoUbpFF2v4qmszQX7BYbnS",
  "key16": "Vi7phzGLadsSwfnGvVSbdqBqcQ6gf8yDLiju6sp9PwG91raG8JfCtEWBhZKWok9aPxce19Hix5hByXjeUa94A1w",
  "key17": "4MNTpYh31fjZjPcuLaGR3XaBe8jcKejXfwAtnEo6Mm2B8CUSnXcwS3eD5xGtwyLV2gHzkhp5euu9Uu9awmPEpXC4",
  "key18": "2i8eo9hdrakJNV8ge32HDpWeiuihocYNUJYh3bQ4iRDzaoLeuTugeADpZMBjerRz81n82eo8YcF6BPtC1MpQuzWG",
  "key19": "2L3PgMsoxy28tKG2sWh3Zv1ACoFxWGxvijkyZGyX2MfFNhzNoRzVkwG5j5YwdXmSkrgvgtu2fFjtHnSTZ73MhzgL",
  "key20": "45KUxbbjb9mUZYPWsyqSPFKCMa1YCTGjYcLwpCns4dML9uTMocHvQ7KPGi7Btu9fNhGasbx59HJvP2xduCrxoWVN",
  "key21": "5U1EVxNycfQeB7njEhEQ1o5dGximFK9KV72YcGP5YRWibWz2o1EYMTrKb2vpKA8qVpTUY2ajNAyP5gN3RwKGf2xt",
  "key22": "5Gy8jLEsBacdHfrxg465htdySJfKpgTD9ZT1rGkCDKhob1wQD6ZAqSNLQ3iwVtt5RUJ4iePAghTpVHe7oaanz7j",
  "key23": "33UuTm1S6t7nt224iJrR1G52nh7KfcEe4yJEMwkdwZWnVULmknkRC7j8hScYn9N7nJ5tA2Cvv6MYbrhSS6phpY6g",
  "key24": "2h442BNKGUNvhTmTS6JyYFw3GQGD2H1tV656roUtumLj9wdutSxaR63JC9n99SADbgeM2itVYc6UjmPyz3eDa2xF",
  "key25": "25owLjWemhzNQuvcfYQNBNyewZ7VtyXng8oYrGMt2E3vCgWM3gz1RXGvR8dEwfQ6cLGsQPH5sQRszjxjxF1R7ntH",
  "key26": "4hG6S95U5Mkt8RMoiG2xfgJAJi89rUR7yM5y2abqb3SaDA5FjKAn8pkVeGj3paM5gM293Z2m1tQ5cHfriBzHXbrC",
  "key27": "3GBp8kD1B4fmU16pUyCzpUFmem3eXZLSRMVGKLnFjMP1DDH6NhbN8K9ceCLg64huVm1hnufjbK3LPdvMsGEZzGko",
  "key28": "2mGiqduBchkuuQ2Fu5Zn9jprGB7yVs88WXziHXdYy1j8zUBuGRzDbvfAJhaQdfvFNvj8zV5hTuduToEYGdDL2XwK",
  "key29": "24VEqjHSuqz6FgNaCoPirkWaFgYqhtjqWSGdfXzvkZ2tjmGNCtoCSMDRYwDRD9kqev99nK7ty2WsjdvwW82U5ghN",
  "key30": "543Ja5hwmmAwwHELevssfZuLyfgwCJiLNSBZXMCVX4VJ94Ge5QYnVb8DxJKaWMbBbJQTvtyfs8fBH4HLGpGAsrMA",
  "key31": "4xrpPb9t3P5ZJMZSG9SnZU9qHDQH641iX4G7dB2YDVvSpdxaZCS7A5c3EsSqh4DDjBLKK87oPzDEtrmyvFjd2enS",
  "key32": "1gA9s2NUML9pGthR8oRxaJmQSW4s4HFFh3vUuVMnkGsXu7hKWui7TTB6VBvuTXWVTEFuz3Te57FCRR47gBsigEx",
  "key33": "4YcgLajCEb6zaRu473V4F4tKhjKFDjk5rgm8kwZCf2zr4XYRyiVwn7WGPLAidw4E54kbPsCiJeEX88rmPfxgf9hq",
  "key34": "Pk9HhaERMk8eqPebPUfvqrYaxZFzKrwo5AvZPYw88oW2o177csVuJJPCet1AtmRxRXRLFaeYh5zjxYoc5BBthvf",
  "key35": "4RmS14DBzGQCtGexRyZ9B6T3pv5W2pLKGoDKstuq8p1vYdFfVrikJNQ9Zhf6mQ3FzoGHNH2UGhYdRCsGuAz6dihv",
  "key36": "3Zqhw4cV7Poba1N3WdwHy7RkbdLCKDCY8LnH9Mc6Jy8jaiswXGpMnTp3au22vwQ7SyDzfTYZ9GkwPRho2yJSsBnC",
  "key37": "33MJnguanu4FgGz3116ZBq7YmMU3jiAye6uHqcKr2aFwNuq2ef31cuHznWUAwZJZDtVfUMz2WEHRUYo3mNTMJFuw",
  "key38": "wGLSCWYdwSjaZpz7Dwjuo23JxpJCkJA8X1VC9UsV2A1MKfE1akf9kbeu83tzaNaXqFHySWMcwmXFZx7bueDd1jk",
  "key39": "5FJNffH71nPDcT39TgRnyT7oR98pDRrzCkhoSy1ywVmANKUmPuS9TEdzw4c6HSEUswZDD3Hw98onsJCrbFRAEJ7t",
  "key40": "59Vvev4XAwGMZCVWHycSQpZVQxoTmSPBZArhJyZQTXxDb4pMWeMpzahNBPBCYFwyPHMs3Cm2hJdtQabGVsLZ7YF",
  "key41": "4v9PYYcMaUthihdnv7BCFNiPqaFonk5mEFzj9XTVtoJCR7gfhUckyNQrLHeXsVnsKxeLCT6MSZVnFksoXB7Dkhvz",
  "key42": "2DZkxww5DbSyGS4MRtRvwsbzjnZMf5uYbNDiTRafpMz71Jxs6Pz68pXxDaLDLrXfmji49D3ZW6PqAPTgmtwH9Jkm",
  "key43": "MNXc3BRdu6XC5bAdscdZsNX8fzT7MsD4DycjQJ9PqmfuRdaQHndw5HrKTpq2yFo8jEBzUBzrJYxyCfoauZJqCSG",
  "key44": "5n5DZtWYPtmFY5SdtpqaJrqxBXC1zVZTmnqo8r2JB7NgVFHNrR9VQQYPjmTFWzpokFQe1QTPDMik8AyinCzucLTt",
  "key45": "5yBiergUKN7tF3stQE1WZgUESWU11EgZdvn3V4RWZiJRQuYYx5NWQ1B7W3Dw4Wd97zJUNpKqjzCMs4hWWERRfXAp",
  "key46": "2EDrYUBEPALHkDCdavwMWvWSYwYi2n8Q7V14CUcARh772bKDvGqQYs6sKvhnaRtLyrYTFfAiKE5Y54NqJ1mkRbSU"
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
