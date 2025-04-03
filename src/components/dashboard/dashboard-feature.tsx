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
    "1bkcFPGVjW3Pf1FGizs5crPgrEgfUTzAF4XLLZX6JvDNrN9gTSiNX7upzn2RGgwJEoGJVkGjH9ZmVEL1aJztszp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DGL41Gc8MJiDdtN2qshWw3rQZKzz75ttKra9gmDtx3gmmVvcfLpkKEkYDEC3nvnrLUtTQvzG6qMX6p5fHBBB7t",
  "key1": "4ZpajPHv1ZBhSYaxytQGr5LNSzEbWSsGAju2YUSrw1772yNv3yLNXGPPJystuNu4vt93dqfi4avzp4HRi2BUPFox",
  "key2": "66cvsVtVbhkm3GKUikiRL9G5MHVrEQ532H3Bkh9Pden6FPM9YPmWjJxFVDyKFAPPBAg11qZXyzBx6WgAsaQYWAyT",
  "key3": "3CaYwb6vyUnN7cBCGZmjHpR1ZR6vSi4Ck6gKvUQidarkSvkiw7qiokPjyBvCRm3zLZi2pj6x5eg8xJMrvHDckRDW",
  "key4": "2jUUp7SwLwU6ffsXUR9pr18V9C5SBKrYWT1ChbapNnsavUucDD1Gtn9Z24Meo3W5PosT4w7joJgaf1GoeNKfJ6mS",
  "key5": "3UR49qshQbg8tdKMzRH6LAhQzLf92GJFnsNpNzei73ife2hX912HNdA6pNDMYjH1Tg4219GhTtAxyxaTtE379wAC",
  "key6": "2cFjyPAwt2ykgWNYBYQwyMFghjNmprtriPYTtjaAZZtszh1Cpg1zAM6uEwFD8GkJmGcKX3aRps1Sv4dwzKaRLhzs",
  "key7": "5ihzgjkoCCDXXaZexhdN1DAWg34YYND7saUNkY9crRcYHqSfw7d4H46wT4cfACnui7UHQBpTbPnMpuSFCbXDVvWX",
  "key8": "dBqMLxwA9Hz1QuM1FG1TxrZ55y1Z4YqQbALgD4zBNoMfgGH3aJxZcWzRSWAz8EcR6kiSiPtjE9zmqJp8h42QrAv",
  "key9": "46s5nattTDF4o71wS3AafkdRM4ssLUwiihAWVwLm8rjnpTiZgVeX2scs3FkHv2FxFzoSv7KBRPf2ZKt2fPsGJgu7",
  "key10": "4B14h3oKD4yAorisFunDsVAGGE2aJMoNB6KJFUnr1qm8pHqxruPJUo3fLKtHTSvPYEuyMjp88jVQUSfoaUo4DUKh",
  "key11": "LPc9N8EeSjt1HpRGDBySfDJasT2ZLA6RELRv5F9q5B1qKNfp14fpZ6JYyUobJGMUCow9SsAwqxRkxvzQ2f7Uoa7",
  "key12": "3ypvnNeXi2ECcL4nKAGHTiRMWm6Aejif9PWVVcBdHc3qLEinsHb2U5xdk1ZRL4njcnBrtydSm4XMxcXUa8LbiNWU",
  "key13": "2eThbuonaM1XymV8x5L6gd1LyuJeePYDYxTqAvDiaanDJt6U19wGNPGv6YjfMBYHZY7Ngho6w8g4cxMdzYgKYAgj",
  "key14": "3fKsPcS7A64heUX4obrArhqmUbZEy8mANqLH9en39QbHztJZB7pBhPDw8PrFc9c7T2B24GAi52z9sEPUgFWcrMrd",
  "key15": "3R9q4X1T5C6JdYA3JTnMYFLgJ9MmuBYAZJ8X7HyHQSDHr3fDZsqYKFhsRp8jf126FWNUcAcenuMmJ11aporzaRjw",
  "key16": "wVCJ8D8FWKVcubsMFt9z2V2ZJVKQ2rhRgGgfyKaumcBvbhim5FGvuUAAs1fzi1eoVmfMRhrWXPdruUf2CJfJ8Ed",
  "key17": "4ELokyjnmTYFB9xhvjsEeXmJHQiPm9zqSJesxWWy9LSJ3Awg2AaDdMxkHB8EekbZ5oHuqcPxnJjM9DG3VceHXXW",
  "key18": "35yEVpbdvRBgJQNteHNzuYvW96URAvTVc9ngw9b4JkhMqZvdd3VhsFyjCnRrNXG588wnCu1UcGygzXPp9LDLMNCn",
  "key19": "2a6vWkzSUAb6bRXdFxDDvwyEsorvFsKuj4mjp2UKfQ1jx5pv12m6RvCxSkJzQRPouPQHYavm7gV1w2sEPUgU8twi",
  "key20": "2R4Q72dafEdo5VMEPydcyPkxiu57o8XMA2guXbR22vuTU72EXBoGuzA1t4yuPS2ESfwuV45e2XgmxbgfHMofuy1N",
  "key21": "5bQmxAj4BWfqL3rK8UoWBbhePA9VNzzzkWE8yuyYkdkzZPjB3xsg1PbJpcVvHVfmVb25AXPWT6X8QXBqK5CBwC8r",
  "key22": "2bahJ8f4QL4GeXeHzpob9uz9QcNbbEwdG37KKPNFKnkE6hGJRBPb9tSnSNw4AdNWGJGuXTF13CCFAJk2nNxX5TmK",
  "key23": "3rFinniz2S6KWp8TfTVcoqAqZByzUtf12PEdVvSVeG1o1BEDt5XEkutMy6Sz8V5JxGuvU7LHpBiMRwsppPJwekJc",
  "key24": "8tjB8h55DbYSix141EgTeSsyepvcpSyog36ah53K9fvK4WKCFNFGbw5vsgc34514Gnw8S88mNqq3ZEmBPcGgSoq",
  "key25": "2pPvxTs8rQZr1AffQAiDRvSWqSks1Y7f28UrVjfjUTSyqVrv5qPJrpvRjPU5jq7oQicbd3gGcoWD9L5DrU46xRsm",
  "key26": "45odGwmrtfJJxRJ1GqZYbMCnJcZCUb8VakCNDtWV4NWR4gQdcjryi7MiYgC2nDRd1fvWrW5fgsbDNRMQc9TSDrA",
  "key27": "491ngye15zkqDM3aWJkkLkfCdbqqgtarueSvRAgBdUZGwhgPEYhz9U63GJ17P59keurqnX9Bu7gNJQwPYCSUU6pH",
  "key28": "4B82Jf7zsRqb5LjCftxAqmoq29DoBM7BmLQxV26XkkQwmC4MBUrxmBbyoQEXpDFUFftVE7uDwEymLChKffYvDx2A",
  "key29": "1b1HrS6pA4dfKfkrHyAntoomd4FmU7pkvxpw9UaQQf6Fp5h8PCnpwAknGJ9QUydJqXPxVf6C8tw7sezo5uSPqKA",
  "key30": "2N76BBviuaCoHPLvTPpQMJS3YxX3d26utASWuD7y1fqMCKdZQY4zAS2LpebKnsCvF9aSyKeQanbrTAyzBagLNTXY",
  "key31": "2XVKxKhbd6imBMwjhb6iDQtpHKdt5VUcwz7bsJtLbRijuAmLG4KReqvxHXfWM1jxsY8guSMqthXxDXfZdhjedQ1w",
  "key32": "3DpzjKSYh69hC7HHpgtnsdS57fqKr2WKy8YjLs58ZMrLBniSXFDV3UAUxvn7sRk1uJpWXDoFpenTKLN87yHVVw3w",
  "key33": "5kgNSJR9mgukt4cbguYCqHU5x5U8atUXLMYEX6mzFvgisZ1pCgayWLDhpWg9RJUSrKvt9bEQMevNi8Wmm2EKXSpy",
  "key34": "22Mo4G5QQv6w64ERESUpUUW6tDarpXUaiHncuSJQ9i7XkGK37fncFHpznJaKheP8eMQn9hYwVwiWQkD7LWe3nwQz",
  "key35": "4Z4REoQrPT3LXRKqFty2A9fKeSPbCHKYQyxgXq4fDsBspMdJPiN6dZMC5XUoxK1UKEp8eGfj9ahoGnZXW8Si91Bv",
  "key36": "2W4ZQLFPCbwSJkRayLVQAF7WBGNUxEgySdmXhVUxYq6cNWF9xGKrQ5SCMgWeXpqZdBqUMAyNeUjDuzMhdvK8e3k2",
  "key37": "3ALFmUEhXaMKUgpMCHPLCsDyrVdf2DSFTigcMCCSoMENqgjx71iXMKQzNGxY2soX61rG2vqPiMaqFFpB9q1k3RwH",
  "key38": "5m7gJ16zmgdrEJomxipAQ1URdVjUYnXgY6FA2fZ2mchsnuaSpSiUr9ykRzkgmu4z69ZT9M9dm39waHeWNbhvWZP4",
  "key39": "3iMGP7We6UzYrSX71H4wL552XW3jnCqSCMrE6aJPqoPvGhhEw9s39hL4NKbye5e5k9pJnqre1JuzheEkiURhf3m3",
  "key40": "2X69tKXf9VDe2THgywecykYV31qTKZRKEoGoSnd9pza9v76rFLRNkwHGXhSzrqyZWaMFW2wjABajf2fHUgBDXcn3",
  "key41": "vAVWSYBSZEEHMpSfdzReaXUzbpQ7pC9wEMoFpiLr5Z5UShSLyhjccpCq5M6FnHrxTrqGL3BnbAUVeUSqNfEGE3i",
  "key42": "3sRa1x5Kakt6o5ct7XJGgZk6kjLHJzD3T5sEEAubUVMkcyh4zywzJaBXAmjA6iZfJzJZt7UtNpFNrCryfzJ6JRUq"
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
