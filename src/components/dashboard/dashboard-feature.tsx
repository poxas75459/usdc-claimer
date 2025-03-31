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
    "5w2SeV8nczteg64tUUgcNuFyamnk3m3RtU1WibbRZzQgdQLEwWoNa4vSPxotLxhvUaUHEh39wN8nAJoHF4Q9uoS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpWtx9H1Q1ejjyPV4U19RFtDF2JcVD3T6aHxDb9RehCoekAWV8snq4QcD4ib4snaygXTBH3uF2yUHAEGdy9xiYX",
  "key1": "2Tx5Yf6ZqM4pkDc532wbpo1N2LTk6njNNa7rRDHbYSwQDutU3UdwPp8m3KPC3DQCiqiEyp3mbv6RyoL2Ek73mL7S",
  "key2": "295dCQSpzqEP3cyqkJVCwdQTrHzLcYzFvZhHwoMnyzpfZ8ShR8WZXkRqoWXNY5sE4NeC5eVC3baAM4KM5FcdLoP3",
  "key3": "4aL2BnGPvkAAz4XPSMAXuZTqturTPcWKtLXRzFoD1M7UG2vJ8PVhnVKQ9m11ZtMDxLy3JmiGwcr34N2VB19WcFGT",
  "key4": "4EKULAU44y9SzrfYfz4j7r8pjFKNEYfvx9kwyPXazrDhXd1u91yMTeL8CywHerg7zFpWGBGJah6KWRsrCJYoS96t",
  "key5": "5ErQJwnLMXLjsKXonAshXyYcW6ppu32ZngFEKJqQ4AZRWCF8EgoDtgLasUwrs9M9SPYno281skc57VSyXKnKHUMm",
  "key6": "5JJvJoFjdmWjo4MRtMsxCAtfSz1cefEPVR3C1TAd1d2GjxyEd1DNyj5XDmsA7B5Rd12yWGMbFRCgXCXEmXWSDEAu",
  "key7": "44dRxcPS2iAbG9ubeFd4bvUawoCyKUscw5HzHLJcs55cqULvxZeyhfKjm3fcqQXrCyDtHkr7Jyg9f35fwxiV5JGP",
  "key8": "3YQn23xAqrXFfs1gmeD7AABKuTuKt3iqAaxVQ2Axd5EuWgpojDr7pVeALHuPTU5A84b4Y7FQv24D7ULpry6QZWND",
  "key9": "2bBTKaFShNTYYycs7tvoGYS1Lqi52SPqRAyqZwaW3WqpFSJp3MtBYE8vVJdzo1SWrZiiPhBHGhNsQaT88vt4Gq9P",
  "key10": "4J1qyqb5aRHNrRHt4dET51HetV9MM1JoLbwNU8c13S1ARQbPrP6D55ePQH5z1fmGrK4YjKmK7BGWd5qHgQuWQs4g",
  "key11": "5ZLQpGm3gr154TpeCgLBfwAkTCqpxGH2UPk7tuAH8tt9kRXhzsKPFZbvFdrp2ipzHpN5BSFGgyQs2oJLf78DRbTV",
  "key12": "2S7NzGqxh2RRJaKfiwRDddi1NmVBdJSY11diXF6XocMNXCXaD5vDsFxyQaFyavTce6NdLdidmYyLwGZGWmE4whmW",
  "key13": "5W6JKwQwFEsycMQyJtgitTgFrDGZZH6gMcEnei5PWFiCj5Xt9iidmPXorR7qba3s2hSREiequTk9CMeiWLjRdaFb",
  "key14": "2WGCMXcTd6z2zzCGfBc6CAo9K8Wr5KWB2S4SZ6sHfbpdPv91wZcvwFES1Z2iDsk6PtuMbfkmnZmGqpUnVcRupPhL",
  "key15": "55HbhTk3ppS97ntBXWLL6bvXqE1BtGAARVxXXN9aj2UQgWnqxfRcFaMW8PM8TTGFenjdihMUMrD8UvpGPfLwYgaW",
  "key16": "Dhe7jhyvBrqENF2s9dhUbN1q2D4BpLGnQt5QE6dfMFbQdfqM7SFKcHJGjh2qfirmNqqdFAt5xQ5W8w2dWCficeJ",
  "key17": "3yqMvRWvxAUH6A8iqm66YdQmvuf5r3Fj3PLyvrWTQyvM7ojMxsQKa7VvxSsXBB7vKVEfggo49EUoR2XhXrEt2CJa",
  "key18": "vAyFJA1mB4CshLLnHL3kpJLcQ44Y5wiVcBqfF5c8Re29otWoJoctDTLjhhXU6q5aRHTHvSy44Qb5KvZNjb68Xw7",
  "key19": "5gZBCUQuPWy19WZsQ1KBy9KBStJzUtY3ebzJaz56nmLBwPAiZ3c7Z3B9iLW76dGrhaFM2u2eTFJ8WVH89SXPsnoD",
  "key20": "2po6LLcsSVzEh2r5wZEX8EpU1adiGkrqZXdaS2hv4yASiupinWw2PuxPWkvx6YqTtgdrn71qfGUgn3PKEBaFHDw3",
  "key21": "3PQrF1N14u5RmmgDQzhk1uaQE5BnLsnn25pHPYPX7VbZPqw35c2z8rnz1g8vRLPRR4gzBdPe1KMSULVhdhqpUG3M",
  "key22": "4oqiSE4L3aM4sN2JRj4eu8XAH9cE1peQ3EitZHve2TiRf23DP3LM3ZGcxJvtoURpEZYUA4qbi1N4ZLw5fQMCMKP8",
  "key23": "Jg6nGnDgYJ4Ug3x6CyR97Zi1odmRWmvipphMdTCF2Xp5gpczFc6xok4koX2LsW4PWENnZgiPaZwmP8rPfNkS4hN",
  "key24": "243xok1ZQwpovYjwo8JFtdGgjKi5jKes6VfWwttfTCoVDnvGFCg6zZfG6GDS556H553wX2kNcFD2t6EBcmdxZje8",
  "key25": "i8fZY9aqQRRqoNwKjRcGi385eig81pPajSFMuxEJy8sCMC4kdwbuCNAxHWk7vD9oPtiN1XPQyHoETAGyxrngY6j",
  "key26": "NYXuZ2MiPtFFEiwtMz2fEUC4FUasrYSqDDudm1HSJeSvegh6MxcpvKt2qNvKPjW95M1oe5ivKHk8REqXivU6WpK",
  "key27": "34QUW1tbc5h6PRhjDf7PKjR5pAgHQmefYaFvByso2ZgvDgnjzn7wqNmXjcRWcue9vot226rKiDvggHqp47s6Wfsy",
  "key28": "3qMG9QsQLBLVyiBQBRLz33u9pqXrYcURW2GG3xVTGdQW9PDFboY6MBhqJ4FNirYzFHDWePKqBg1yamQMXH2t19bB",
  "key29": "4wXJmW8i7zTv8rN9ucViBZUwXrkbVuHgW9WLGZGjcGPxkqmMQfZsFQkLFbSTtA2ohYvcUMEUDc7ovZ1Le3EHe6K6",
  "key30": "gU6Yj4jNmsrKTAta5Zk1s9NgqJ4a25cunX4GksLfctX7W73A19LKSZVHkGCh5vuM2Qz97i2cz37rQ5z6YH64SBw",
  "key31": "42bGLvGYhMZJqSotoD6PYbLqrPZTN1YRcfA99TxdE9cEPacUsZ329Q9FF6c2FdiPqVhrPAJRrB5y5PKDiiSKpmRW",
  "key32": "4ixt623Jr8jzzyw8FRXhm931RmqNsQCu8EVhjTfzryVEXQUKE2o8YkDvfRKbbx9UesavsoA2GuisTJe7Ay3vfVyL",
  "key33": "4KGDBfBpub2p1xzDfYPshSWoGNhMgEZoBoTvVCXAWvGSFeo3K8TXyQUMfMuUXoDfToAsryqufHHEsLR29MHsaFVx",
  "key34": "5ZmZ1YHfXYPpCkBCtEKxh6eeLPbcA9unsR42vH1Q8zfHbNDX9uh1STCHxGUqBCXUkFcNU8YvYNoHHpwQrXe4zcYc",
  "key35": "3CTeYSoc3kT1AW64QSgvZzLzGpr6qubLX6wXQpjGhi7DwEYjR8TfnKQme55HNk8p4GECPghUZBfEPzBHwmxg7LA9",
  "key36": "2N9zFic6TcfFDB2EYemhfb3h6SgqybCXie2k6pJcTjahApMAP6oaYde7PgScpCsHkNLmR6co4adWfVzFjVVkihbq",
  "key37": "3WhSSVmceaCgXVGrXhMjYxHQiY3MdpFHdsimAr6Q4j6HRfGC9hSyTkvbvBZHqM5vR4YDw4tdgepL1vnJPnDGx7T",
  "key38": "249jDyuEJNv4LxVmMmYaD15RmJF5MDsAUr8zRS7oJF7uCE1Zk6QnPyzDP47FoHbVeCKu1r9p7qygXb4JeYcd9hBt",
  "key39": "tH5pTTSN8r3itvVJSMT6D5R1ZyTbFgaH6MvDDySGC2zP1zB2ErapjCaT3k9ep1aJWLhBbbD32nhkLC9jPqZ1RtA",
  "key40": "25Vs6gDAFX7hxj5d4LjgRyzNsTiZ2dyZSJNRcdneqmKYTdqwrzzuY41kTDzVCemD3DAiPrnYeHZUGNKJEevCvJZB"
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
