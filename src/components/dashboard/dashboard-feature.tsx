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
    "DAaUA7nSMh6x1CFWZJ38SUuBSD6E1r55Yw4iDNUmk8ethfXqkccEWTkbYpFVV7cwvVMkviqx3XYj7p2Kmw4hEiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7dGzFimTFNpqov2ey5f6B1EEk1BS7x3PodUXN7U6UvE3nNJPDeu725xnAovxH6TPDqsooWcKdiLvVHYU3sAew6",
  "key1": "4qTh2JYPYbaebZjWqbG55iHvz926voiTKipjUT2kW7bqqC1x57WbTDcmmN4jzN3bqNfPxYxhQNwKiYaAaNNe3tDs",
  "key2": "3QwmymErnoLLShnATcoRhggVKwoB5n1Yd8MP256miW8JS3eB8DRP52ME1gqQG9jzS7v7nNqu8mH6qi5sQrbdb5sJ",
  "key3": "3PTCt6s9dqsnkQf7F3yEQbq4R3xzgJZ2Q7oUEQ2DnM7XApNf8Hth8n7y9X16jDVokt4GBxTA2vZPNDTxxL9vk7kK",
  "key4": "Qaohg4BbuJmsxEHRMYansUWcAWuMyM5CYa3rBTFbRrQpDJLMaqGCPtWQ5mkr2jimp88rQCvo1w132SAPg321vXe",
  "key5": "2MXhTuoD58vqU7JPCXAUbBY8j7KKPXitTueCj4xrUn8diK52DHFGfmrrQ54YMmJ3eQqz842E33b3Zz8WixN2ndBn",
  "key6": "2AbF6MfbdSZSrd5n9ewnndtUNgvE5Bx9H2hRrmFDp1hGcUzeUm49yipPeCNs5qTdQxbgTeh5Dbh686kRKHqBNYoZ",
  "key7": "462yKpvTDjjy78WEZ1UwzXsq8LXa2aMKwFD2KsNqaVgXAuRrDM2xRQi9LiDSFrDxFXsT3jBtWSiAExSQL5bUZkb9",
  "key8": "3P5sTA1iShA3yEGpRUuXdBZnoysXRoqsrC4TUNg8yAYTbjixCGfJKX32WfnbUiDgm2X5g2TyKwATwW1DoX5mTf6N",
  "key9": "5Qyq63ZFGezFocXjxeUEawJfJEXty3v47pNbc2psFLtt7dvBh5RDHfBoHjoyV5gSdqDyiQkaT4hYD3TfeoavEzkN",
  "key10": "2TSuk1VNMraCzkazp2fQjLyzL9ekzbQuiHRs5RWVrk7TUhtym37inre17Wa8yVgkdG7BTxDSZm13hE33KU9CHn2a",
  "key11": "4m75nnggvvyHafk3YnbUQ9y7rBkMTrqZ4y9BG2FYm2jD9AVje321Dn23XWsgaNJ9tM1sugsa2JGw82SGVyQp9AiU",
  "key12": "5Ui579uJLLY41Ueow9chmd4JvBovCkk2E4Ssju1YtSjD6EtqKSwTXDzC67aQT1mZ8ukurkNKNJWp3cqS3itUHuoc",
  "key13": "5bJC4pkNgGgeycrwD4zVt2yuSaPh6m6VjH1DkoJTZzRo9N5PACXZEJned2NZ28h3LFgkb5qdW8evwViaNUFisxG6",
  "key14": "5ktz1DyrBNR4zDGwFbZ7ycGbJi7ne3guFQpugEaUnY8GAwu7jQUMi8w5w32cQbsMDs3tBvxPQJDn2KDfGscNtfyU",
  "key15": "jF48iN7wSCJLiFQtTj8ybjMee9CEtGzPWCMGaXbMkBEYj2HQZmi9Jd4Q15nLceCyTN5mQaUjE7mPfYdLVJtwxjV",
  "key16": "5Vdf16StjtuHPhmA387hfvMVjdLyvNMRtPxFu9C9Pr35A78HzS5WjDwoSVwNotPu8shJ5Ptc7oo2vPjtcN6RxpYA",
  "key17": "4K6sGBnFR3RPFyQnf9G4MZZqMSwGesYf3snf65iBJGVRyWosnBa9WWYJXVYjuUmqCdsNZk9qXTM2AMaGxEp2PtTU",
  "key18": "22WVwxbuz2mTenu4BHw8MPPZkd6EjT35gpypVY19bBJofBTy9GTKszYhsEQafBj1RTVFpJ3g7bX2DBSwGSiCKHwW",
  "key19": "4emQS2Qkb3663LvkTE6UUwfrSxXc1tkDxZV7VmQsAfh5JhRqQGRzynu2QJTPQGM4cgM8Y4HcBRkYaCfB99pyRqTm",
  "key20": "4a24UgC8y2RqSM9ezMxV4CYoDq6NZiEf3c3V3kfRbmyrMQfGCRrpp6Y3PF3m58wRxR9Ma2SiiNtnrQSHpp8iBxTd",
  "key21": "3a9ZJt7Jh9KT9bAMqe8J1W6oiaFntTS5PGCqz2hFyVncLkp9j1kUGCpfPHfQfmNkWAXDS1nXfv7v8aom966qqnMA",
  "key22": "bYkHW7x3E8ZPpojW7Abjk6GaaYNUvXe85N4tQsyQvxJarUafXugbWmcW6LGwTeaifoSFrPFERDK4wLdLscuvUdj",
  "key23": "28JBJb56d6d3hxxzhqG8wXVyzxLk2sLovX1qLKsz8gYVzYsmDJuuvUFcWz3VbLLrU9uHbXaYMH5K7bHAEFNVSnhj",
  "key24": "sAQYfEAzABqgCWpSm5XJicMgxjDSRrLBdGaWUieR5QcV1Uzb7bNAEwECpD3HCKKdHz1EVCjwBbbqNSrtLFBDMz1",
  "key25": "2o7WWv2maZ5njQTFHUkchQqVmKDvCRDj8D7KvGRdbvDSaT6pdi562dMuF1D7zRf85cowWAFMXbNnH4d7jZk862LA",
  "key26": "5aSBjzZRWJhspzKZRNxnpByfDXZT5byQNKzBPAxy3vbtNogFJTDFPqeNHUGYyq29j61V7mFHTRP4bqx7p7vea8pC",
  "key27": "7HtMF4MP2nZYWk8ZNHWKSwSxXNJ9butiY74EHbVHKqgtvZmSh9FuqtaMyCfZVC8xRbdJvSqSMZwaLhVU8XPHeEb",
  "key28": "2iZdNSGywQGGPZmCVkehtu3QPUusoionxfsf7a4Tg76PUK1waHLfpcYdr648WDPdbNaBoK8BfB5XXXmtPzSarnGL",
  "key29": "4N32rHcHK9ovZ124aWaKzX14NmhTyM9AnPJwp1Y3uGD6Ht6PPMFtRkq6A4ZL3j8bvpUEzUuzxUzUCih6uzRzfYE4",
  "key30": "ftNmptTMxjV5crkX6bTaxtkFHsi28c9UMp2MpDMd1hqtqcE81Hd3KDgF7pGXpsS383yYQhnoP3ZQB2GQQQya5Ut",
  "key31": "4ZKepVBVU7zZE1iJQXX36J3axLNkubBT3wWaZcfHRrxohpsdQQdb89rerKRgs8pfKahqmq94Tc7DETF6RAKkMB3D",
  "key32": "57yzqZYR8ediHM7beQ455G6sLmJrW4WrpdnvHmMU1z5o1WMguLb1R824hJyFwRfgarniDTHYhjHWjGUd7MTY1jVc",
  "key33": "5PYSV87M3at2JcSWxfhjmsML5HaCm1cEP2GvGCpVvaU2SY5MrS7jK8sdVrdd45iBR7uhYwPSHXyEcnh7JuGiT4qh",
  "key34": "29P3JVLoJn796iKbq7tRcNxY3ydTWgWbAMKftWU8nVFmDCkGxs11cWccZRjJWNTBzo81FT6SXeYLCfv4ABZBmjf7",
  "key35": "r9VeM7eRHw6oJNvWUarsuu79tya5V8KrGugVitehHiesQ5nh1FHPPpheUnu82rRtLvepTUm9u5ZHs9CZNmyU8fy",
  "key36": "4yQv8sXPdZCpt86JsSSnxsgwxGH3c2WomyoGuYQcWHkZohJgUCsRYe6KU9qAgraAsTE5h8Qe5p5mirFm7rfm3SW4",
  "key37": "4XjX1kfbXcdLuBA7CC4nzriB23LCYJA63wgwp29Dkq4pmTXZfyw4BEvWJmJjdq7UCMBRqWZXgCueii3NnB2pQvzJ",
  "key38": "AnWfHcys5gQF86SHCWZNQYDfNpJemX8FuZMM8YptR9VFNRiX3hTo5sWTbtf4V6G5h7YYxGf3EzojyPUaLBESmWD",
  "key39": "3fv2hhoyU9oLvzVtGXsRE2vV6SZrhCSzuUuyoVHkMzrenR4JedwWAnNQ2KmHSomjrnkkoDHmQ51uJnVYwxdusb6n",
  "key40": "54yYRruZeSHbQKnevEfU29SFo7MrVm3X3qnnXEVdJXLdND6Z59qD2BfPGMpZTDW64VWmkqnKKx6hbEvdL73VHvL",
  "key41": "4S8YZgcGtijNpWDZHAkHJ6F9n2SbJR3fe49emdDxHUkLs4UjtwCTzXWPuNNSi4o4N4GaVydkJxK41GwYar9fftuo",
  "key42": "4hwVagfSXJRedv2V4K3V5m1xPVLEkpgGApTjB961Cbc3CQn4dxfVPrYPzr4h9MzKBqAttSpzuwruLwHNvwCLEEBc"
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
