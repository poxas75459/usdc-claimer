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
    "2aGMp8FZgow36ZFYcwTqqe3HmGtUZxDADvc8ssaB9gRyPSWXxvw9s8YGBUW3J1RF6ueEuBRY2nBfTeWhGmacKySR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vUKKHtmbhyYmGt2djTwbrumVUQyGKUrQWUedEpo28cfUTvpcyzkG5wgfvEjtBzA27WTonYZ34uCXSDUS6eH9X2",
  "key1": "gpMwfuFtvqb1mnSLHzWFhw6DHfwPRGqoA6ex3Nb5tk38CuoJuwvyMSF8cPFuuJR2jky9DN7NhTALaL8iRfTbnFD",
  "key2": "5bYCjHtnhumqMZQhNMsnoa6yPxBcJZsH5nd2DqD7fGhm7o4JDitecmrscw9PPozxEfeiAAkP73yeMzb4knYc84Hz",
  "key3": "5jwfmaHSRS6DMctfkYA7kcuzn2EwWjsgpC9S11HsAsrrsge7FSrfNrNmpJ26jqS8VAkioT3P9vxoZYoksy1GUGBt",
  "key4": "5VsXPKQMYjiSkSa1AmY9es2WMkZm7b6HymzB4QHNutVYU2769cCPndMusF3UGsairUPEP7B47EcvwRqUDrQWFbbL",
  "key5": "4AYiVeoJUCMMKqNHATEf3ytoZJLLZbrq65i3HcJNriJp5FHXd4yJEznGSq73mmAbHFmU6Am617nGPKvmyn6bLQKA",
  "key6": "2B1ixvsjCUxdrPNPc6rxGGrMwtyJjRePswohmLPtw9FNDa8eNH5xg67SZo14sJ7QoqxHwhZXyeGcfSBqCCDcrDvW",
  "key7": "uX1cGyY3dHPadWB28E4W6GE4k9fuAo7oy3cM4moHBbuCWtePekQLLEvdeS2zVrjAN4McQgRy8WaeTqaGfqeoFK1",
  "key8": "5Ebac1D3HCKaVGKsirvnky9qqFUoTWm4JCu2bUSbqo8o8qXAjYRibpiNbgkHuUgRty1fzhatgq19srkqAYN57tfH",
  "key9": "2wJ1bQzDpKpRCZEUD7rYTG64bJbooSALX52GCit1iSDCQ8fg8hB6UboFjsJn3K768zwiEptQYvxP5RnKfzMjcFdq",
  "key10": "2WxmLma1MpApdaYYx7UBDtPM9cZPJuqBLtVfJX2pwU8WEqx1n1VDH5QVXZ1oXGWdTktMZPeZTeSVRETSYzoVYmDe",
  "key11": "k2d4hYMj2252gqafa2gnxRmbxYpHa27AcDNsi86D3tvuNv8ALTQAzmQh2jkFjBwRd7CAMdQBHYFvvkCRgC5RzVA",
  "key12": "4DJx5XTTcQbUxmFaAhWZLDxmwhSw6mE9E3K1PQNoACUHm4CCiU68eZgbReLLKYAwE7GSRNAeMDaXJnTikJZrKmBL",
  "key13": "Bmg9vgvsN3TEGMbjopMYXgtqCKXWaLADKUxLvn3k3WAzyZzTZkSYPjZjRPURWNeZQaphBD6dhfT6yDjTQqa6SWh",
  "key14": "3hFqXuPcSeyYrstD8q8j4VYNe6aL1wWN4cUTbaX3h5FkWrqu3wb1cDAdkobQNCzREEe5mke15jf6g8viK4xiRJSz",
  "key15": "3nTfhbqbnBcBiykCQ9u5RHuwHPYCFwhP31zZnyNhGArs27EuHnJg9AacwmPbYwKQq6TGKAiPFnJFowQwxyiNFwtc",
  "key16": "2qRzhxfVpTgjpnTsF1m389xMZLnVSNNMhKCm2hGoLVs64YWnNzb6ZnVhVboJCNy9pcHs6VRpqpfK2z3ZqG6sL214",
  "key17": "P2HHkyWgnjhSvrL1pZot124Bqy9YiBJHX3eeDqe5aKMq47WdNF5RMTyWDjU7Mse2WKwidYWtUAFvKAM5ebH2qQY",
  "key18": "5uDimmUSQmJWjdfWLDjgv9YmP5jAyY1BFVtEc8aBQgebtaQW2MGGuxLvojGCFkMeykXefM8VNPy7duyMstXLwjP6",
  "key19": "4R4D9SZ5hu2SaSMMJ5dKTBTQ6CiWAzZGC9dLmDFpsUpg7ewrYLiRxuPxjoqSityfJNJ4pqZg4f3vi9agbwPXMjpc",
  "key20": "2q4Z8fNJFp766qdsGJvPVuwh7QCNmr34ii1r6KEiEku93UJmCYCW5YkacR7fUY4aTFDKjAVZ7URyHiENffP8hZST",
  "key21": "3UWzApkZRyhN9Jj4DrdLLamacw93wNQvjzeKm6QVaykZTDp2bKRedz32m1mYcCPMx5nWBuWac9qMjsfucWXecc78",
  "key22": "Ef32PVibnM5YvqAsyC4TahiNJeeU85xHLKpGYjghSXdNJWi9WwJACJZq2vNkoYGhZSTEMSbkMRXKskTtrU2qdqY",
  "key23": "2s7iL1bf4acf7h13p6a3SjkkYHFrM1zQeTxKJsYHJtmtmb4Be4dwJjQPrqur4ipPCUH2qw19Z6RtSMkDYx5qVUjN",
  "key24": "Q93GNUqN6ATbpsSBKFF6h3TgKkUdFYrzaVax1UUhfsyWHGsTdismvFPJJX7kqSCmiwMDyjQnEqn5fDYRqX1xcg5",
  "key25": "3CFjhHJnjtt9kPDL9rFg96fWSATGybPrPTEKNi2TbJBmKuYfebcCnEKTBLVWNxgrK1iQMH7DgfYDtYvLNwYnfBcH",
  "key26": "3cxB92DnkiHUqgMYotTvqeAe2dmJrUbGe9cbAJFDVCY9iPZurd6MHSGKsx98uQrSfKZCF7eySkw75GYYgbnjxdEK"
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
