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
    "2X51bC9uxerX6yBFzfAP2QtsnrZgKfEgV8Py6o89h2s1nuADZEGywr6QofVZqC2c5uQq9JFoxiUfGyAi6NfmQDuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hFgNJLdweT12MPwxvMHQyF2Le7NPcYWDrs7B9rcBYdypRRQpWL3t5rtFPqRRWQykraoJ824tYjQ88hBDijHqbF",
  "key1": "4KRHtf8r6xRgj8u4N1ZxY5EfLgwsfXxm1VJNdhdoiPzXPFQ72FFcy7j2bxSR77s8wL5vUfJfXcq8tLogy4xCybRU",
  "key2": "ZJFKQ8MJNxms8xnNLMP5NQdna1coLpiAzgEttyVN4FPZF6GBbzVMbRi9NyJdbi9gcCLVjwjcw5uxPr1MEXRq8A9",
  "key3": "31hNPoZ2Fm38nso2dkTcXfKCFfG7j97F5RFUVDxkkCAaJsqM7XQSywvQabVb1gcdtxjSp1BSjhMJ7bLNnCF4nTgy",
  "key4": "qeMPStMQRHdfqtKvNjEw43F23yqTiGw5DXe9yFYd3KHQRizVA1gzUnECNxpJQXa1AR5YtUy959KPgBKwYDHfMi7",
  "key5": "4tbcawjHs2CzPJeLG4BFUPmYMxSo8CQ3dy7neaTQT1Hqq3qNpumErGmzB7LHw3JZC9XPiQWb1DLH3MXkXfqRNCYf",
  "key6": "4ZUHwcmtzG4m8XBhoqeMswn4agycUmoYAvhJkSmWdVnt3fir5Y2qYL5zj8SrYXJ8RuN1Lg8zZ81PDFm33iBjdhno",
  "key7": "4NHXNDFi5ravosejztrZmSpatDzSTNVW2QQgTXaeGvifov1t4AMKQur6Ce45oyr1nJKLcnPZxkKj47Jwdw1RrxxA",
  "key8": "2VG8uVSti1Lt2AUXFmwXgQKXHwp2zDMk9BsrL14rdMLrEoYPNNGgHFbqyZEtUU8gTCFR7CQhTS7dn3azabYB2jyK",
  "key9": "5o1tvwaVmHCqF8h5U7FKj3zTBq8zNWPy44i7MpdEUbossAEzqJGBG3FkopGSjAErEkwLhVvMGUochsjRScBxqyMy",
  "key10": "2FMLWGVpneWmMA4vcXuirrxakcWZhbAVV8QUtq5S49Ffqr1x7MstwearZD1j52NAEGHovS1QAexddP3PT6b6Qkyq",
  "key11": "3unnCubD68JY7TVf8ew3TCxD1hKFnmFnQkn6m53t6KdCC4euwoj9HpSRjDkvxyWcKhagVYEFBbYCbkPuKngUnqC",
  "key12": "5p1Lw2QU3FehS39S1Jx4Q7WDA2y6GvcBPx1wrqaUj2D8Zx1TfZrqzqBCFmXcxpZWmDK216x71RUcKZS7vYCRpy8o",
  "key13": "35LrHHLLntP2wfPtWTvwXmNrURNgPsKDmvAW1G9sJHq6UCsCy4sUQHwTX2eqrzLiDiZuNANRgVhPRWRz1eeEskaf",
  "key14": "2HdvMHUTQG42b5wuehTgG2EpG3VUKNynZ16QFijkZQJCRtjhFb1KFvizvKtBXcUzmYuhWBxoAvh6rvmXGqYXm1ZK",
  "key15": "4nS5RL9CapVP19KBask4tR63G4NtCY46gV7pBbPTbksqXgGeKaDQdMxNBgCjacBMtHLJzRi5RfEmWJxwC3SBntyn",
  "key16": "43bSr4toSZgdeSJrsDHNSYBkAt9LXvJ7v5jULu6jcWoVE3iSTiSey8jQdhy4VohhjVvA41TCf9erZVwSSYVe3TPQ",
  "key17": "4juNd39VbV2GDK1cSes1hdi1qAprwcs9nZHavLocCnRN8V5WWEj9roAJrzePALjDdFiAjQWGiEmqM4E1JiwPoGgD",
  "key18": "5uWzidUMW7XJMkLAbEscV393WNHSGojbtyaiBfEPoiwAJN1mLRVBW2bVj1WRg9x8iCbZQAjhUTFL7cQBvgXbqLLL",
  "key19": "1J6DaSUyfB83JRnzYeTA3eAECCs1P219TXxgcze3K1EHtaq8TJoPGnkmKBghSA1BGLS66jYk7HPqyAQDoN9BBLC",
  "key20": "4hH72Pb8wD26LWGt3499xSKvpGZLw2Bbpm3N6jUphcUava1CPsXhyqmdJwSjuYqxhB2kkcNoF2YqnioVx4AW1d4w",
  "key21": "2Yd1gYEj4hfXb5BXVyh5vUri2Lx7tJoqsFGBkQKE9ESAxa52EUBZp7VBKBhV6Ngv7Zi7CoMsGk5xNteXLvH1vLCi",
  "key22": "H363ZkrnUvjJyu4SdvMsWJLTdxiWPgf14aBNYUVQAYjBJPxmsCPeY7Db8DSn99RPUkxkCarJMmYB9WpUkM7XdoA",
  "key23": "4WDWYG2ojShA9XgaB2sdSrAvzNS3npbmpXVc7vRM93YnVQ5rjSP8T5ruSxeD89MgHkxeHDQiwZLCBob5YEmCJ4XN",
  "key24": "4uTQ5aiuCpfMMpwxSwQZGzJ9s1ii6kVYysmYjpqhVCx2vLUoXVwGBGkG5LttG318QrsFPwvq8mWiLkhU887e65MM",
  "key25": "2dxx8AaUfumuS9aggn7DAr94mLci4odEurm2B4TE9CAekHhDCL1uRjcmiHCPqKB99uxbpWCg5vYZuw9o2aJNGvy2",
  "key26": "38oaN7Po937a3t7TUDPX84QJNEhkSJbmNchRFCp6M5u9xpiGiFxbpCN4eKUMoNuwiVfFWh7bJQhHq8EuQQEi1n9B",
  "key27": "3A5kvWJibWoTR5b4EcrSAtfCCuuLBvnjQvbaoNsjdkfpn6infJ8uzBsT5CAqGNMTf7VKF1mWRGX3FL76CPUM6VFf",
  "key28": "541Qh9st8cdnsiMPiFdmX7jRXTwLgH2m5fB958uoSsCwLzPEuvVGDdn6UUuH5sHvaVhkggTynsKWBjoPASrSCiZB",
  "key29": "5Sz36C1E5zN2hs4Mq5SZCYrKULFAnM3D8KQWuxxfsA9tey1WkF5AEB3AbyZMx82Hf1yLpEp8wdqtocqjZT2PWg84",
  "key30": "2vMXRvxTDXffTYxfxrTTXwYqsRNDdAaKRb9YwJ7EKZnmKizM3pwZ3Bjmv9TprjwDrV8NRcWWyUTYVZnGG2HxMoqd",
  "key31": "53GpeNwMD3airji34pGnEM7YFBg4AH83t6ydPokDeyeg2iiSQiV2xWBvtvqxRQMcU9NAm73pfDUbuH7Tk5pRApNR",
  "key32": "4JD8Y8L8bMTPPF3kAiRNA59X1zKzRR54rxrr47WqbChmnqyU2mPY9tiVVM1FUXntyB1VeBtAk9gSLGgrpvoWUkp8",
  "key33": "3zmGpwb2kcaF2zNqEKYCQMemAutGe3EbQV1oLtEoDGDfCo8vo5HVbNhhyE73C39HFUGZjhGDNZKeutuBGe44VXjU",
  "key34": "66GwkHzgyAhrgATDo7QwqL5cAjJsQFi3q5WDBXG2qhCiNG7wAR7qSYZZ2X4PN6gLqfAFiNVtYLjNjdLonqETfqeA",
  "key35": "43qBENFXfEB8ktWJLrt8uds8yCAMG3jnTkrQFBd1TNjFqYmipvrwgQ7CvnVwKnc1JVopdwR4ztNLpS7vBFME4hxb",
  "key36": "fhuTX6uuJEieiKhECoBjCwL7sejviTuGk8PDqyrQq1ZBDFgR5Qm6vHkkYixjX5LzJ7Uhkv2s5pPYvMXF9bPF6nQ",
  "key37": "2bJyTfnZ9uGb8FH2fdkAEGoEFh5PovMBLqQRxVd7Aw6eW8jEwUntXCG9MTRdAKPuAsk1Fib2vCkHHS6VWWqbXBTR",
  "key38": "5juSHFq8s4vWMWBFyp3dZzZBGGALFAiScDPCNrpFMPvneg41BvvNQ51bEnNaChjfx6xZ8eZt4Mbu48RPd53jxnxu"
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
