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
    "4PM1KAZEMda7r2PNV79xEcHxsZH1GhuR6UwrMx8YUcFzB1az8kSYX3QfhED3mWXr5w3Wjy5G14S7jPinjFZwgqaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M4W1L1naGiy4BA8m6PxGUfEoxYZkXiT5wHyFmLX2mkW93WHgQGZFFRLqiFc8dZUTurWxBqUDb3A2BcU41pfxQ6h",
  "key1": "33KLCff2sWSwDNTb7xKQL4nGtS6jdViptXJLjkj2F1bxfFjoc5eRXTM5hG7tP7hQCCxCYVcVNda4zEGbijnE9D6Z",
  "key2": "2UqgYaiGxTxwSFQGAquALgga9ce7J7escnBGpx4Pp6dw2NFHUuxwPjW13rm3j81NofukoMLHmuqemr7wnn1dHx1E",
  "key3": "9xyPXXDJW1M5J442HXV15w3Hvq5PASu2WYQR3vQsu6qEnKbEytkv9px1Vejvk6bYdu8jqfaafqGFsPqKX8dagKD",
  "key4": "pKuPegjvEW9o7jmiaLPGqewCXQuc1mEtVEkq3zQqeGbFw8BaRnegZKJeAtPvTSWXEKThoTi9trgHPFEgWuuNSfo",
  "key5": "37Yjm6TkhHKESzwFRQ12hYBEXapyHv4JcqXHunYk1WZv3FUimXyqBWFAu7a8Q2mhFEe21NF7Us4WHXr5k6pYApxM",
  "key6": "2NXcHyKhVF7Nj5DDizcqUJiLpcndsxQp3JLtsWvJDXQSQZ9PjBTV8k6mELGfYUU5jk3Sk2M5UF5Dxc4UFWuy9omm",
  "key7": "3o53jVaEs18Ww5qmiQDJ1fWNSJ8TyuKR1QJe29nEBej76kNhBZRA8JpTLrN3UitEaEQHuT3uMwLEDZ2QJx4sPsGf",
  "key8": "MtQrFhp38T1QQDvfapcGUPRuoGfpB88e4hXX1Ftc1pJrBR9ZZQNW2qgf9EDYTHvvNqhNBpWCGegB46wdTcN4XiB",
  "key9": "52qC6SF3AXXcMTyTzSeP2dACnfNYsFCkHCyeAxHsPk7wrZARiS5zxrJERzaR2Cyp77MLjw2ZNQU6p12ntHu5J1GX",
  "key10": "5qjFiJdygQtFQRLPPgrudj4Fs9Mf6nxzaVemREJQ66KRY2JteYSpLLAUxHRQHhLVLpMPgjVikWyyMGA24rTKMKeJ",
  "key11": "3RB7CYeeQYYjp32stS9eaFwyHookQRwupaPaeXXYj5Dq32JmqiGwzCfxRUJW422BAeRXUNnz2z1JSVmp4TwkrRpg",
  "key12": "4eD46xh1c2GdBJxhVjioYvmYn6gNMb8LAYDZ4mgrwUUW7bHqrzBD2R6Qd9RQBeLn5fihA7JMPofc9SixR17xHaBQ",
  "key13": "45EBcuwGp7BkWpHg5Ch7JEyHWJ5CW3VJE1EmjKHxLKkiL2QNpmnCUQh8a3a627dRNeJEqEVtzXRGsuwVoBoQWcTs",
  "key14": "57cwTejmHXTvp1y6LoCMUsM4h87NZFV3ogZ8sD1En5X3VqtieVoD4L7SzDqiiukXXkCQEGfP8dngfcwXU5RHux2H",
  "key15": "3QRJ3d2TmS5qoUsWa2dqL2f6u7NxwPyqQot7JDSesK64BDDcRHatMCHnxcz5MF1c6y16HfAkGJ7PRJsJc2omYH4a",
  "key16": "CgaDDkQcniaZLaYnyMmNjcYGxXHtVt67L7dHnPWmz36YbzgrLQjmshhUYEetXapp3xLhHVm2pduzxnX2jXxkHUe",
  "key17": "2yEQoUuevcrJiixWXqUaRTZUYkFb4HdBSg5vYYMB6qsbjPiRvjtfxLs1nyGZEFVRJJYdXqytzQBrXpCP6NckzY1p",
  "key18": "2FVdvNN38V9rd5ME4Ee8xkiZihu6hQEgVZPWJj3AuQB2sQ5raASNcE9YVePgqxAZzjpfqn1dxWWNGdttzF5XCfPg",
  "key19": "2k6CiF4LLdHt5N5Hbhnx6LPo8LoVn4dNfNvXp8qJoskNmBUX7U8n2eeWd9hmZmH7YBqDaVZr4b8MxNiuJDH4Me5k",
  "key20": "DH78ZBMqAKDDJdvthAn9WftyoihvmbnSaR2nEXgD2rW7VEPY4xztEPEGLMKU1wQjQJfY7u333fxbEbJtPRUHtL6",
  "key21": "31tH7jwk6zLX7VUj8jyTvfzf399PLq3wyexxBMRhPZcWKKYViQU4a4gStbWojzxuuN2G2GZGe4UpWg7Cw8EfqxwK",
  "key22": "44phziWWDqRTKApRPei9qUtuGf1KPBEY65ggZWt5NvQYVsER1RjKWnoH4H1KwvUmNKVsZv2dVKvRpwuqGaR4yrCV",
  "key23": "4KdnP42edpJqji9aEdkbFWdJGwhnZog6agt3SMsimKHUWmZCjSCHaq4DottZUaDEHj2r8sNbr3mPutK7UuyRJUFo",
  "key24": "5awHZmrALWXcudtzSxsPTu7QtX13hRaV8qRQ3ciUKKAvVhUcBrNXfjUSuVCHY5hW58Us1DaWqkDVmcirMiiQuST2",
  "key25": "57AQS1bLzquZDng8Mu6LG8TRAxYSr4jr39BgiRjjDyTt5QTq9j3AghpnahE4k8y83y2CziEiYxEsrdes2UFHtFYK",
  "key26": "2sef94TXMuBa6bf6dEeNrMaisBCzPnNh4EsLkduDUnBQwZumyd9YT16DT4LxCp6Zcdu1Ls2s3SEv2ZkkiaAWBLUj",
  "key27": "4QPQunaoYwVFxbiWvPH6vVd84uEzMKZr8Et7zxvfrZLY1MegJRRC2EYV8PUN1SAqHpM7YUox4mM5Hdq276781MVd",
  "key28": "5MvY62WtTV5PmE57c7rKqGfrNQbcrTenhX3BqevrU2XoFmxrGDtZTfWhLZirJpAifu85sBz7xAURtQjAfQZNKnnU",
  "key29": "5vELJXLiX4RdA19XeKYZ4yB7bzqVd1VZsrWaWddNs5btX5cxGAzSwy5AJVr5yT5kbRJrKEo5WQi6SEYFN9GRwKMf",
  "key30": "5gUNpMFppsRmh3egvrNc8AhTELDxD3w5v23HhQJifeLiN2VhPw7kiHgfy6DMAaan16wtKLwhM8nPbsguV8aK88ga",
  "key31": "2ddvNzCbebohKRC27kbGTFqimPFGXB3T2xfQLN5Hrs56M7AYTzn2dLJVLE7u86YRJPKxBoSbfmAYcK8YzCy1ULdX",
  "key32": "2GqrxaJKsecKhGYo9PdC33azQnJeeU9faBE5rvkjjew1KQ4fcrcwDb9etKgehyeZTzq17ejzJ51GDPaqszVYgzrS",
  "key33": "5WFbaVJvYYmr7YTGTHFWRPXxnk38j9wzBd55sfttmYyo75JkQSyVgdVf5AfSaRsePL6MfHWDb77DhJjFRiBAKuPq"
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
