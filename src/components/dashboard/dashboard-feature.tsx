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
    "3cqmRJe5isH43KbFfjwT8mvrtvr1HwBBZiMtTti2SxeCVHzpa6mYCDffFTV6uExyH8h7XjJYdp3CuV6L9kLAQNkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52cVDvS3STLRjmiD9118a6L1of6dypJXSC5uXt1yzBq8q2DmHyX98ecZG4cfM1Bm9uYBch2mW3n6mrv52RyoiA38",
  "key1": "jJVfA8SUvvntUPq4fDdmBE2VHQ3yAGojWdBV7ZATRbrhLChaRZKWoNMwh4TjzzgN8NnqUfZq8D4hVx5YUc389ak",
  "key2": "967xsPP2UzamyDauFPDAaGUBwEJTLzdunMvie2GpWAbioaBkrD9VvhUm9Fcq3zty3ogg7K8grMEHtxDYgxmSsRs",
  "key3": "33aLnYmDGS3hCiQHSWYx1kBDvV4tcHsXk4exZ6SFo7PhXDhgfVad1XsW25hNPtkQmpC8DgL4hdPN8N1zLhM77gp",
  "key4": "2sxE2P5X9oL5CdpPjVLvHk1313qXbtpySz1TkrnDY2rWmpLnW3YXASXRbE9gPhzXpxi2CQCgu5ftCTrAmmMh1gvu",
  "key5": "3FBGwqP5dQPUCMHQNhdtdqBtHuUp6m5BgJEgY8LPktA4sWMaN33yWKAdW28sNbSjwtAwNooqdUJnTtyEGBjisiEE",
  "key6": "2rNjJJpJJDxf8J6Rv63xwnrk4TiWrS1nzzXTvVfw44drEfAMJp6jCgPwNxLXrffkAd6NU3iMiEknFs6yPzXu4b26",
  "key7": "4T4uSoTbHcsc3sJoJjPRFrZXF8PjXkU8dfFAb4NZip9HUFhxiPcxJF6Nx7e3gmpREMEJfR3ZXGsrReSEhLgaCr8y",
  "key8": "5PcbJuvD5QB2Xmt7v5xgf6NAJYZcQBfKgotrBvdJjairq5j6TeV5N6zzZQSQDMYgrSMBSHFZ37hBzNWqRM8qTcQE",
  "key9": "3sJ9zGQD1487PnEoLuTHmmqRcvSCW4fMvFaALYkUyWqKcYGPg2WYL5uzDrRneKt6QEwbhYgJMbgBDF1jrepc83k7",
  "key10": "AxnMb3FxHscQUwb256LiZtJnvbq3gqCZuFDE5FpStB7Gh79XUqxZxkNaJ3uoihw1sB98yyWRQrD7SMp4SZhHRU6",
  "key11": "5eJ4yNXD9EvCu1vNsExrUP628r6uAvdEE5JSwgL5tJFF7mbBUhrBPMpKaXv9pQva8GrPvVfZzLJqqCVfCcTTn9MF",
  "key12": "3QKjqM9mcxDPq1Ha4PJ2MHxaM6ZL9tCRu4LW3PpYL31USFoND94DGr9gYcdfWtpm4ZtZPDa54cSnYcPk62Yn6ozk",
  "key13": "NpBYRJaNNHsZvemgUBnVAFWBg4o11VnUp2NSKy7mrC38s9A2iZWezCEpa57bgtJMYXKZZwrskHcVSQaZRpkdcDA",
  "key14": "4wJi5fDbzQXM2cVPoy39fkfvoFXSoA88NSdPiejZHk7duxmNPN6ABui26ecfbQvSvKCNVdbWvuHz78CYgvBJrvQC",
  "key15": "3jSor5QcdFdXUbmvviSy5SGU38yMP8ZVdC8iboECbZPdWmkRCxFo9CvykDrehbMifRz2QjkXohDAQww1AhXumGp5",
  "key16": "4n2FkGPf2HEeQjAT5J6h6wTAzbXSxZ34nbL5ftHAvaZrBFUUKeoMZVLG7L2fLMdLRMeKALPHBFQQ2B1A1nyyjGfA",
  "key17": "2C2YGadu7cmAmjrxvjkSuV1G5qrMbo1dVtCxRbvkDWv4oLMrPVUTqe2a45pCcZgj7aF39zQMs8ZH1wfBgAf33pCr",
  "key18": "23PYg1ZBndvSoBwpt1k4nXDmZWXpJD7Mg9QkWCj7dU294GpBHEv6EDWxu4WXuYCJ8vujfq1Ns2iVPnZedJhNnJQh",
  "key19": "4KYEqSx2kdzcZ8K6zDRp1DxQTEgHefuFSQkWXB3mGHmnmhStquF3yR4NvYNvMGrY56ZnE4w71hic9YkqRJuuJq6x",
  "key20": "5rsp4uyYrabLg9cMfsQJuWL46HuBSbDvaAGvkrYmaj7rpKvzRwteuDAvSDQhhPQkH8uVPqBperyYNFEj7E3XfD3C",
  "key21": "5DTHHSeMWPPCc6Jnxbf9H5amj5UhcMWZdDRxXi6cxnrpokhZqeUuEHB4qcsjNxg4gbs4vAFWWghmuoE7Lfn6yP2o",
  "key22": "5J8WkQDD4bVdssq8tryAhcJfavdVMQaEhG22hCzNuPs2YNgYEWrZHN6mKWLGs8UKKJoP2YDt2xpnU2YunX5kQt5G",
  "key23": "5YdaicDKG8w7EjMirDXdf5hRTwSnMYzpGWHrGJC93XuTKwXaNZtVmJikLC2vVpw6CkT854QQ3z5oXSqteMFbE946",
  "key24": "4PzK1hhDCLgdPQ9GrDHZf8M2fVvHrZXJJbyCKwY1MSoEZnATgXFJxw81shPcEMqQYygJKAu6PAEfrwHPGEiRLRY2",
  "key25": "646Ku1f3Fc1ttMkPceGYdfXX2Xntrwq9rZUzbixKByF8rpB2x6ZXsYCXnnjAdUJAeRjwKrPadjhip4V2qmSdu1XZ",
  "key26": "5vNfHxvK2htZfXME8wpcDbX4NejbVzuBVUeHdnZrKyCrdZDRyy8Qmdy3hQKcN5hbbXDVGCQGUjm2iQSE1Ex1oHhr"
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
