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
    "2E7TKDmsHvTvgDhAzRu9mE4WeKSeAbQFeXN6uhQSVueuByKRFLmUXM81sSXh9HC7NgCDMEBGJ2krxzYqxo4zKBhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZ8y89NfbzcJ1MyjHoHcUrPbcCLb5benC3j3NRK9uKnWrxkCwzFZqxZDSZYvcm7nU3w5Vm6H8PzESZ5zbGALXak",
  "key1": "K8veFz8RU81jvKy9m9iiuG2RiwQNq3TcFXNbAJikn6NBq1gHWEucD6VXTyd15K6FcEG5RpMzU6zkWjBoxZp1k9B",
  "key2": "iSjZqLbWjmkWjDrZZuTi7UYw9ug8HpvU6FCTcN9bNJs6oZdgs8f91T6TdJAaui37bJFnmKiYaGmMELj8NY6ovR5",
  "key3": "962Hcwd6WuzfhCYnawC8bh3pPNqtpNVVpVuksEEhoqT3jQgsMerxpj1AedSVRyd69AGiWEhWGbbWD955S7cWDQG",
  "key4": "dYFhRGSh9DL6YmELTpz87sbAGXTWyachgZmtTcvCTpaUn1nJytXh91uqoPXxqoyojiFkDccbRVYMxckdR4T9now",
  "key5": "xoymyHrFSXRMvjjeqeLMKrCCuYz5KcHTv79ukkhghBmny6zUsD5NjWPWKD5FyrbLMo1F3V39yncsvj5YgYzBJG2",
  "key6": "4EnvN58CS46VK9sjpaYJMSn2VvfXnYuPx2dyfU3gv9rfHhm2wffJcS9E8j3u18wdPhNFVYf6TGy5p5TRQ4L7EWnP",
  "key7": "47oL1i9win8LoStdxvm5TyoC1APbZhxs4RMRhGKXSeLK82ynNwTixXvQtVt4TQcKd1S4Hmz56UM7dRyyEAQZfEQK",
  "key8": "2t9fmQA2cUPh4vFdwTrtUpC4czt5PSW3oBakaYpQs6d5TzZLcoXSaF1oFtE4VkytKEuJDSNwARE166FzsZvRLzmu",
  "key9": "2x4838xnUvdLJqsCzGSv8tF9jHf2axoxJcK9fiZR174x2EeCyyN4x1an8LAkQLbdMetE2cahWdvaKkq2HHVGzk1M",
  "key10": "56LyaVkJ7MvsXU1nLSozujkvCTpsUhCsyPc4GQxgPTDqE7PMcnoiJ9SD71X5h7EseUWVhLELMr82QPnWV9BmXNee",
  "key11": "4Y5P15oZdg4QWqu8PtXkPmYo1fWNpCafLjAvENKQHV3Smnhqd75gN6PtbJg29VCYUyMmh9hsEgjr7mBH9n6AWcLn",
  "key12": "2qN54no8bTK8QoP2JPTvGt9szu77Mz6G1482U3Xm6QRYpXjmD6YLbUPKwAjeq2zvLrwLsFLddMF7izULnqcrV1Tn",
  "key13": "4rDhZcUCKmCutPvvGeJwqQRFTRgHXWMATBtGLgLbFkM6t5swry8NiBUS85h8FRbHvcXjxXacqo8aLnqveB2tfMZq",
  "key14": "2jwEFWAbGLcWQdeRQZ3ZkifRKFQ4QAPmJnth3r2uMiTPRK7GPNEK72FRvV7YQ9vP4WTs28tKq9xQiT368QAzv3wH",
  "key15": "FhFo37DbeJrTMfpez6vqd7G9gZB84WA9aSGzQWagpoPTfrvvxUmh6J6f3DYYK7KPEDvxr5dueN2U597NhXHW3bQ",
  "key16": "3XtuTDYHF91vPzw5MmDPhhXmxMrHjZsYLszYLUiVrGWSn2wV5Ah4E3FVZ6N7XPW9fep2dYUGvJ7ZrXxfUDaoCMtn",
  "key17": "4FoTzTdRTBSPjsWUnhmrrL9WMuCTiNAYFow18dzBDZ5j6PZbYmcTkzXRanRbARgH3AuCG7wDj9q6ATmLKJQ1JbPd",
  "key18": "3L6wZD3HK5fs8N2vEgtNi8Z7FNVGVd6RAUR1xVZfpqnEKPP7BJDfYKVcXmFnwTJ6oMuTVHw89oVP1vy32qjKraze",
  "key19": "2MJqZD9pGgEnShjKjhWTUmLXLiWvryBHMTREWZzh8hJa3vDZzFdG6HtU7rDfu4Hurd8wjiFxzLwUtVpfAfXrN4zp",
  "key20": "4JbFadRuw8Er2pYbsDk4sdvPgwyWFGT2aGuT69A4T6SQavXyhE63QpeGS37ecN1oroPvu5Cwm4dDfQqPFHcfEaoj",
  "key21": "2QZ9enLBGWsCWPwtwa2jXgWToV5ThSUJVxE92gV3fGhTEqhyCUPF3ZnSdJFhMq4BiXJtbqVXsqNZtgGg95jGpZUs",
  "key22": "3FxZepHTW1kWvYUXbS8XP6WVoLc1vuJaWmip41fecPZTekDD27RoQTpS4MaSRUXGpZJryznMn1KX7ucC2UpV58cW",
  "key23": "4KFKZcEJQQhyBJSrEGPfDdNmHny885cPrpHsSiBVGDcVE83K48pRGxMeM81BNTydT29KaAvyPNftgxykzvynumdU",
  "key24": "usR8Yw7Nx9Mcs8shmxbks6nJygD895oSPSLujjweh2LrJtaFF1GHhfHXRWREohgSF2V8pEJkrX4aVsdgnRUug9W",
  "key25": "26NQLzAyg3QALYMjTyfYabY2B1R2cd9Wjbam5ZDtcHZbeKpCQnjimcr2dtYuVUhR7gcK3Ys7r4HBrR8iQjeaKhAg",
  "key26": "4qbmqNMczBQa7GqtgJdZJ4gAgUfxs3AmoLCqQgJWgTtRtNiqPNVBRjH3bJzs7UcXZ4VVx6piTCQiUaQABXHsusnH",
  "key27": "3aWv4bYeZQ8ovbpbB12bW9A4fueg9LWGbckHQq4iiSoVLz5BUexhhW9wXfjnHGapofoLzPUUw1gtx3aYukR2hoX2",
  "key28": "5tpU5x6QByQvvJuqqp8va5QzkG2GpfjQkVxwEWgtYyR41yNP5j8TLDEhfPNKHbc46bAKKb5XEkumczi967PULsez",
  "key29": "4tz5fd6MwYKzGswYqfevQKB55AgnpCPqwhv6CHQvQC86zwDoP1HLU9K6ekYWLBXCUMRjQvxZNWVjFC78eSY5BVFE",
  "key30": "3aVpf74VYd69HzS8n9VcLAht7pHgDsuTUMhY8ABXzLmyDFvNSUYWNBu98eypu1NofFi5ZNyv1L6MtpKvMq8aSSmT",
  "key31": "4QoJYHg2E5jQ1xgEgBsiRjNnqVRKtwQt25FMfgGHpSh3ETNswiEKJsRYzKjon3emH7nc7fbRiZuDwcAaJ6qSFVs6",
  "key32": "wetvtRHiTJw8cCJcbFAE26RViGg3FBFF1Nnhhtj2UnJwvjbd4V5kbHrCFy22sKHkUJ4vhP3xHwpVWHe5h2yjrm4",
  "key33": "ndV7nLdZmf639r4NSubo2b74vyUQTunhxf6ZAeKs3Tg6FGVtKQkrpUDRpFjN5rtyQharzM8EVrizwXi2mtTgsKS",
  "key34": "522fEc8JcPCj18NqAmmhMCfW8vvZzbXJ5nuLNQCgRqQG5mdgZPHSzneBn7vYCnrJb9MvobNKw8oMavQ743VcTk84",
  "key35": "zEg8LRsvFiHE6FekLdbUf9CkFkXFAxtrS28GSrNGEexzhhfUKsSUUp8ZJ91ptawJhABnmQ5kE4ZZCR317vTJt3s",
  "key36": "vU2qNCKmxyAsRdmDAqKVzsw4BHKyRwxJmFV9pq2cjUzAu5TyZiNWUreYXmiRCVcecw4arYdAi8pgiEpQW9E3J3J",
  "key37": "2cw5iws35NWQW8wz1qFQ81wQw5iACVcquyfQZAf7E7dDR1PcTn1suMZ8cECSZmmnDYSbTUM6cNXrhVbxDQDmGzUA",
  "key38": "3kD1rcG9EvECuBQUuRHayRC2b1vXc6r2t3pNCyPvGG8VXQa723LHsE6hdd485n7iYNGm1TkvXY47KAtgfU1nrPxv"
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
