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
    "3g7asGrzdLRF5Zjb2FdnAYkMhkmWDAMvvY8zctLcqBKT1EMbp8EvBFE3bQpMG9UnaryeTRSWxoWCBHCda9uGeVQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYorA2au5HB51Tw5fa5Zc5PPK8n2xUwMrrAx2PDT5pE2QXDoH1ccQVUQ986Dv7BekNuLsYHMovebkRZmH1drMAn",
  "key1": "iiKy9Ub3rU44CdsnY2K3V7KyJZT24AQz1rZEEyouVKMkAypUmgWYMxvQ6qtsRBVjdLDg8ufdodrES8761ydZ1Qt",
  "key2": "5V7eNVKbKy3bVYavEBwjAzS4qPNRaeAU9Z1jw3u4UGzU2MLufqkreU9QNk72gh8j8e3qiGEGqkHHLsPjpXH34uGN",
  "key3": "4AZZbPWrdfCWTZVfmetycjFdS5fH942tZ4xKfGuxRB345ged3sdjyHjXunKXqBuNJ1vtkZv2DqGKDkPjnpRrnamQ",
  "key4": "WRADd48eUoYRRYKJf1F4zWuMfMx4BCN6NcQbwpg1jgZmjMDwsDxSsYPYUQ86bEUSZ7JzSEwXbSdhW19WzLQF5X3",
  "key5": "2hHPAESKAx2RGDVHdML3PBRLYpKpvoyNMoY44tNwab5zpN2GGWrvDsbqYm6X4mFtXus3iscvHWfbrRRgwPoueubR",
  "key6": "267eMSzoHHE3zAkPUq3wA52UZWGtB2xyxmPt5RaYNc2KyWR627oytU9sSq2g8DhfkHHmWetxo9CyADAYb9UqUFie",
  "key7": "3ETz6TyAamBjQ9PsgJf6NWFm8AwnTnxoKTTGGkS7n722ux7mXGNVDwCRWjjhXq1Ke3PsV7QJGiU8pbZoRq1Q5x2b",
  "key8": "2dMUJ6sU4WQ7aRyU2evTNyTseFub5NdRnU5SRjaYhDcbhCkJbeJoHBXhgAZcgakrSKjPK14sNxkazQ1f6SXet2o3",
  "key9": "4ecL2ZWirSGTUdz2TH6LdzANYLT6bQ8GcPpfMRT3D5aF3H1ZtGJjz3mvg2zEcJyzYAC7WoJoBcw7CbBDogBtkw3L",
  "key10": "5h4gc6X3i3aYGkamEywth1bKqiwQAJY4EfTt6E7oqf3b7U9ffWBFzuhUAoRMzxHY5pssDddiRGqCvXps3ir3Q87J",
  "key11": "3h4e3hcc7sEi9kreP1GkKt1dbzpwhk7rqJVZffcvvcnwZPA1dG9U9rYeRzH4LE78Q4L34BtANjL7E31Bre9eg8yu",
  "key12": "5ojLR65TVqeeoc4uYKBwBdAjWJpqV9pWFHdBYMTdpSZaEkckRoXrgfZ6rkHvYj8tKXcQZ7CrkGqCsTBSnRXNczts",
  "key13": "3sv24qPsHNmrmKnEnwRt4nTeUaCus6wXWuS9EjVXx5CK12GEcWcbDs4eRSZMLAviBfzrMQNGXXEuYrASgADmVUjL",
  "key14": "4614ptwZNrsHYbrhXay2Q3DYiahbrYPZaGAbTyh7xNwrcrEt2TTYvw5MefnvqfPtT2KXu1Eu2bhzbPTR5XpR5DGe",
  "key15": "4yLrMMrZy5QB46a1ycYT8PxJL2jpn9d3okBZrPsu1GsUZd7KTKEBnFTcJ4p9jwCc9CNCXpJXfvfBqDQ4U6NThh4Q",
  "key16": "w6jb1931UFv9R1gQBpEvkgV1rxcw7PNtXPxRHAL1SydFvJVP3jFmLEb4HPEsKDNoJEEnpAJu76f1hGY1Us5N8RG",
  "key17": "drdGGUPwPCTqBhZZMqKHecyA332nNPDHQyTRAkfE8Nx6AfWxrWFxyF925LmW8ZHme7VQfHemC3VgYnFJFzhnKDB",
  "key18": "5W44MP9U69dFuugG6oSB5SB9kGYdzUcS4sVz7KtJfNtwnz3a6Vtm8XqyWLFQUoKQ3SJaLWrLemnTiqQnWpKf4ybc",
  "key19": "hcmf9ZyWRjJD834cRoo31q8NPTkogyS7yNfaRubNQMCAquQbFVZrKF2JKnMiC565qA5oqFkNyY5acNpmkjpamNa",
  "key20": "5nPysVwdpagAeFY5D9uJbQ3g3acZUstUa7gRTVcTrXbHRtiFFDBbBFp523fxf1PhieHcceWebT26WN1peD3mdJUi",
  "key21": "3YR86gAgWGxCtzEBV6azNqc2wRk7doiVbUFVRzmvUtvpPBsUwjZd3zznVHTovxgfawP3ydrpdipX1eMQpsBwDKFF",
  "key22": "F39HYCHV9KLNpskqXf58rTiX3a3YhrKetP1hCi8hbw6vrsS4ANcvg7YdrD5RmXyii4kbE5HV2ZjERLcwt7PJU1M",
  "key23": "eWN4oL1Vie6N33LG3bxWdap6YBwmGSw98DCRaApuRFUbWYEgJGgyMSgdbU17tKX6N6m7WxNfUHAvuHzMRx38qKG",
  "key24": "KvrjymDZUnRARFis5Su6AuQ2McrpLM4q4hTxv29zinsAU5bDc3FZPjgy5FSDLUZ91CsyVUTXY1pS6QXqyauhd9J",
  "key25": "2izbseL1uRGXSGz1etPbPLSZyoFLTDXMgN3BdA5FJHxcEHLmBH6LQi9MxXKsTa2L4FqSce7VhqNbeXYWJPKwEpw2",
  "key26": "3ongHXu1shLekL6xVmohwrQGnGDt94CurT9NFFYc6TCWk2EbCWFwsTEi4G5KQG9tZLBLNSMJRuzZhqWKHuz77RKB",
  "key27": "2WqEhjXiHRv41ny13E9jDCicwTtozPHqMpWsi62bkiBe2huSogLSxB4Hz4btLKp1HR2D7bCXoCFyjwyXneLANcgf",
  "key28": "3vogQ3AY4RcGA6RSjHuaAbdZkHivubuzyB4g6zKbid6SekyjSkZhKU6PdrjNW1V8YzegTnxU5Qsp8u7PmoUJsLRG",
  "key29": "3eUYML5aWMPsLrxP3ZNdn36dJEk2z6UzCGkxRCWm9M2wXXGJMEGT2xfqAC2pTiQLnPyppHsH8SZdbcdPcifxsWHz",
  "key30": "5pYaLnywCiRgB11x8VnNkcNk1xnWK8pQNNfEaiBP9Hc8EfHTywvtWdCX8VBjjpxpQZyY1DEwMmPJbLKBRVHsnqU2",
  "key31": "ALLkNsUExyGh1D4cHLNTnaWn6kSrUV4nbDhf5HACGxLpQWdxcHRmyDx6yzsaMN4NexuRYT2MP6ZvGmCwQJHBuW2"
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
