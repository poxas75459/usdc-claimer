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
    "2XPGXxnJ2zAgrDUsCSoEC4dkPcLpMZSC99YwrV13Ksn1HiPedetf2pyf37Rf46CwPeyDw4VndGxfh7TGus8BsrVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NcR2hx8QLMcX7NsQZbjvTAk48SJSDnfs9LNTmTky4vB7FKZQeQuBZpS7GE2sRRWbsmHg77W7e8ypnU5Jknd6Ae",
  "key1": "zYChzmZ7ADhAchtTG6G76raBqQNrQ8iTZTFSKrfYJTiESipYr8VGaLZFxSFtaMUNscSWsDXcnsiPEfenVSuJcUT",
  "key2": "3nDdUKZorHPsbphXfyYmx2jBc56nLDtwuXSFWAo5XQhWSRkwahnYoc1KRq5fbgtzNoByUHPDdYDfAWpmJLUsamrN",
  "key3": "4JAJDVWNVUMm7X4BkyXLhMyLnZfhKV7AkYYTZmTRk5dsiLbXXQuxTrD635KyvYoBrvBG9kCNJfA68j4TinEUnjsD",
  "key4": "3372ucNMzf1semVRHD9zBcpyndKU74hUmkPYgPvbLcq6tXYBUHyTwuWWH7DMhg6EDESCgf7Ma61GTkzhgm5y8dPv",
  "key5": "5ZLbVtxDTDK8KiuPgivcB8jAEPuBVJkkpnDjKQcxCKkivkiWAFPKov2REXZTxrX4XKVsqnTnovCGGBXsQpvR4Rwv",
  "key6": "5JJYw9ZAKrJJy8fjSYqTs8cucTjyj9NpPKy38ZBvCk5mAj6zfB2NyzH3msrXm6VBWP1UCDpUu1VcpWfSg1of9CH2",
  "key7": "5CLGi3Uqmaiu63r6mmUjjQaKLTzbpbtjEJeVDKEtKAupjjcdkYkzvH9XfPCeAB1bvwD5xCnTV82ZyQt3mVPP8EMz",
  "key8": "eExTKnFQrA7CnWsLdeUsKfVS5GxuNQ8N3P434jHpYW14V35fxiwxAPm4FgL5qfK1JxWdBXG9oXJVQcANHnt658K",
  "key9": "3rGRR1GzLebVnLfx3C3djoomzw6CaVTDG9tNpMxdGBLsNfzPxgJQVdpcUjtzwjg87wg1MSVYfuGhu6ECydQvBCjx",
  "key10": "2Wz1iETbTcfhASuA2UqPfmztgcRf76iqDR7bXg8q32bL9AChghB6PmiBEEN2nunZX7Q9V3CwYPwXuEcKLTSZtXnF",
  "key11": "4SLRuPdhDv9G37wjLBPoTUkGQjz5JNWMAbdSVstJ5tfd7AbJqdjYGzjj4qANyx3zp3gsaLEB3CH5oVw1dGvGECVx",
  "key12": "2mrKkPxjeUg5QfiP4vuHR46EsZNhrJQmqYEcPHgGyGiLdSAznC85KsXgrQUrDQGfpQgLMSjjnrf67JyRFeyvuWat",
  "key13": "5eJbNsB3mxdps3J1kfoCdiW9PpjgEG9yX39nqoumjqDcxP5G5GTk7nLnoqttLaHCEHdGNipkUqgJhwqvu5w82KEp",
  "key14": "5zmvfvPzCeqXmffS7akSnGeBorqdh236cMUTbP9h4GE22N9ZdQjfeNofRVTssVakZG4qWUTA729EMmaXgPYo1kpj",
  "key15": "3Kao9Daes5G5PE4Xu7XXRZUkbmJXHUqhDWqiNyt9cgSC51wXBm7uin328S13jy2G6fi8r47yk4D9HdcRKV9TrzuL",
  "key16": "WgLYxraKLyodzDXapJWzJT1nbWBJyZkxpo5XfxDKD5sPLEqp9DmUfQEy5BNtmv9JKzSzrvLHXgJdToZh8tpHXKc",
  "key17": "McfRpJkaSnRcnPG3uwUXcjw5jn6Nxg7dwn7k9Vyh2Ate9QpfNeX8Jpw35ucM96GiJq84jqa9UCiqcs8qCoRT86c",
  "key18": "2GHUsj2KEMB2MNtJ8pcbxZ9UPKwTr8odwrXCiojbLoZ9NR6jBKbJfivDLMnUyEFbaNN3bHtGc1jnpfpH4EodeA93",
  "key19": "4bwEwnhbQTXEPvkLHhsThu6CH8H17GHtCrurWekUdbpmmLLTrffApiARo56u7TkFwL9P8vrjNCxdx7DYAxqiwDaP",
  "key20": "4SYswVMh6DRSAucQFqZDBMMBHGg3PXmTYxa1gqzs3tHVzNZby3P4kLBcn4koo5m89Ua9ZqD92WMUZpEpaLt9Dkm5",
  "key21": "2jmB7u2WjP8vkfQr3br1cubtdF2aKg8LQ2C7qpSWffBDxQVf4JqpQ7WmvUeaAUapAjoRsPUxWYqBUuJqyzpfDdnR",
  "key22": "3yCzjzNYKgP9XKvF7SrqRRepfCkSWVAw3cZj2C1q4GAFuURZiHaHJtSxnvq1egMFU9VatqxEBLLSxhPJyt2yd1KL",
  "key23": "3ss8n2XdY7KBEUkj8MAenzCCrJzitERByE9SW2t3bUn53nmBQXFVHWimJtHrKHHYqBUGaALqV1i44Q3kCgkKNHPA",
  "key24": "SkcHWWHHZHVZDsSCCemxEGaeargbeSEVSeodWX81LVBUxsPrCmmZabmUHCsv8iRi1V4ynJLnRjiREpT8d485fQG",
  "key25": "2WUSYoywi4n4NwocuDgNpRjjLzk8y5VC8VErcsm24oL2wSJnwLhopJsSo7PBRKFLR1u4C5a3xa78AoNzcsfh1HSh",
  "key26": "DcVnRNvgsxNKUWCudkJgEuGnoN1bdYusT18zYtYEynpdxJVAS27X16ACwyVX1ePwjqXoYVVo3A1VdAWTw8oG4tY",
  "key27": "SXUnvyFLrnqDeJLCpt41nEFpmGp3GJQyaq2xejzd7tvNHvF61awmhqdrsjUGCB6eJV3XSaGKhEzqvuNBFntNRmV",
  "key28": "3PAL9AJs8W2tmdQzCFd1YJDzapCHtZRnbDU2zo1EDUEoLr3Gr4jSAuhn3PUqLoZzCg83PdvDpTuFeQxMKqkND6Lb",
  "key29": "3awTXuu1GgF4GzmDbNSQPMp58tzSQaWicZom23t8vL375AQskwJGNASwggWyiHQhP5qL7jMX493nDkCEuCNoKdEu",
  "key30": "5h9nFWmUxCqFtamabcvPgUgXdT26P3aNBXuGqXiPRx13vbFa9GfUzs2TryGYxz2wwYTijgD9QirXpRuamXVGkTG4",
  "key31": "FLQofbcjv3MTSn7fqcXvXzNgofqyDaCTZZtnc1T9XfAnZp3uRCGs4BQHuB4AQjCW2WayG1co3VDWEZmp87tADRd",
  "key32": "2uP7qvkEBTe9ywHPNGLdFiWQXo3EfE6RpmpJ76uaY5yWgcANHQRpAgnTy9TdegtT7X9w4XLs5EBJjYgDCiiGWDMU",
  "key33": "2aeJVZZo1ou7fgKTg7yxpuwkDjEYECznyfqxtTSJYSYJU6c3YiuASuW2Wa7LCtNVt1DsoFZxVhQhJFdafpTjdAd",
  "key34": "5sAW3wTiVf9L4jXTGsj8VzHYbZgJPvCshjxd6o9ojYtsFaWm2H5KHTMjZsWnZX9ZntM7kreb8u9CVVAC1s6j8nvh",
  "key35": "5FC15CLxCNdjc7SPRQ5ULNaAf2gvFHWTCKkwXiBqXtBtsFjGy6Ss2Z6p5jHjxK5m2WxA4cR8BXBHwS43ER6odCpW",
  "key36": "5tCpHb1siNQUkNNxKPx9NMHhfgSNiCUdMRGqcQ36YrwLjyC2SnTrkZm2Lifh3TtfpmZuq1zY2fDbcvFFnHEheVHj",
  "key37": "29TaqyBju1sqU7JRrGsZLWUV6J9Gzn4kkg2uyyzN9i55TzbKHmTta85YDie148P22tjbxQJFtpA5ZTSdeKJ2Ggwq",
  "key38": "4ir6r2UDny8sZpvwNcnJXEitzs56ppxx7tvUfLkRVEhhhCmBCyviHjBSkwxmztc3T3qAi4TkVf2LWYCKpShnGB69"
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
