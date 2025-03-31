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
    "5NBaHJ9FhMTWmSpfFxXPLFQp5hkyTkabiBQ5JKBySiEpmRu2rzi5DUk52ntTTUiACq4q38wp57BCxMxYCD9ASCK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eb2ZcgrBW7SZ5LfY2a6H19dzj8vspbiZ6vc71a56HQYE571zCsUgY21VKCB9YX3WChyiuCKprkH7nQ3561Y31XU",
  "key1": "4633nWDBBrzmB8QmbLfkoTn9yKwR5GA1EikAiFrcrWEyBuqqpjL3riBqsezAwdF3AtQZ2ZtYu6Scg58REkCts35y",
  "key2": "5Ya5p3uyPXaVzoYESbxJcuDXSFjySsUNu9tzrfPtpicC5xWNnEt4PJYXdvkvnSWFLCpAHbh9XMM2KKws4RPHVcPZ",
  "key3": "61VhE7AEjkRi7sjJxhuxg7Mc7NUpCWU993CwDYSKFcXrS2CJtUbKxwNb8XxzvuDPcE71j3RfWQh9ncQ4bYdYbso9",
  "key4": "3j9XADq7UN59ta2mXNAhECh4SufRyudwMLXML3SRoMZ9QnUT7vMqEh9TLsjj7PG1ousqTVyecBwaiGGWibTLf7J7",
  "key5": "24BThceJUqNPXCQbaV3p1X5fxCvePMzXaAuUSxoVu3EMsErxhrqPUhVJaH8SauLMKZtEi1t8LEtRMkVM7sTko1XY",
  "key6": "46PeydWyJhvNvEKkyPQ4DFw24nsbsfe8bNcapx1DUJAJxCAZCGnqeGWXykmCo53sAUxM8yf7hg2Y5fHB9dzaeDbD",
  "key7": "4QKiGHAqGr5KhY4tBV5YyYCceY2QpEaJVrBtbYffG7uKTNyDeSU9v4nCTAao3d9bKeLUn17ZqCYivVVBc7wTxyUu",
  "key8": "4CMT9K8VBSQCPRt4gkQRG2k27nuT5kxiSDDszwD8txNqgcJU8md4gpD94eWfp9mar36q4j9NKv3CLhBzgVwQqCcW",
  "key9": "3AbcyFT4DsBHeLxcYAdWZGx9K5HDtnkurVC7a7r83Yj6gtAtz4Y8o261NAdJ76mcT6sdJQS4YmsPvXU6UhMW7wc",
  "key10": "3o8uqEb8owyhmQUVXrUFG6Xvi1ZGBFskeDojUAjPnqkcfubvFo9QZH1MnnV56LA28eVnkAvYPNv4jcy9MBTavFu3",
  "key11": "YfP1FzybNpEW18qbE5QJPdd6ipfeDuEcyyayhn42ms1nLSWe3VvhNqtRubmNz539o9oZyppptUTpdKZgFXUvCQd",
  "key12": "2c8FHeGTZyh6eHRyLDeYiK4uP2D33znU9fsZ1Xmti2bFgKJ3btptrzkSAj4VzLCs5v7ednDAqDLHDH84CDXxksEr",
  "key13": "2W9QRXefVjdVMR1e2czFKbX3QyAaHEpNATz1EaNUNT9b9MGX7wmdvMKNc8bodUDpgqxWpodQaCa4ScM4ZPUdWrjb",
  "key14": "2dxpeKFPNw8mapExYv1PQ3RpqgtbuVCoEFMgDxFnMAKe7yfZYpvPbBhCV99QHmS1FSqdckouoEb3NmUuZjkf8EJE",
  "key15": "3rMwcBFYQ5GpqSkEDdTfSb5cRjwKd7zEVgex3TLhfk1k1mfRXojbE8q7oHcRLWqgPoWvzvijt4HssV4SQ3Jspikc",
  "key16": "3sS3prtbjhSxSZHUgrzVdEgxLhd5nt5Bt8XdUeJx9SfxDnmU83c7QgGhramy5cohUEt6mdxmuvWMX5xBWgC1jxDq",
  "key17": "5ZknWUBeK46hgJWEia4U1C6ssXL2gdhoCR5Z6EbXjZFpi7ZAbccts1SXSMLQzcpXh1VVvNvz7AaLuqCZXAuWrS2c",
  "key18": "4Hvcvtv1EP3D15kdVbMCwwerNhQT7DkCbkk1J6f5WRG7SQeufXH86jMSiifJ8MZ4FiUjwvryqDhrMjcHQ3xioZat",
  "key19": "9vAJrMfe7ygqdvCK1aJ5K3Gmynv2Ku8Zf8xVYQQw34E99R5uWWPftmZ8vqPLH8gUjM9QnvT9hQ9nvdc8MzdkYhj",
  "key20": "ay1wHhXSavRgybxPvdxDRR5WbbXCXAME5NmzFD1kmnnzzhA9dsuue6xpBSxTM7QgmHWCgTRSZcUXtnFEECdUkiN",
  "key21": "4UycRUHqSbLsKSr9HsPUJvBKDVj8DzocjfhVU6B4XNGNB5mc72wq5McfGDzpwJx8yTiH6ictENZrkCoUQPdvDWWd",
  "key22": "5muSyvsDUK2mCtsoYgAbG4FJb3nDBiAEH7AqLynAUgyK25y9BRvi8DLfoDmBecn1v6FTsistmcKAzkQ4Zdku2oiP",
  "key23": "3BkcefpwFiSrSZsAhP9998TUTrqmyzZdHTab7ZEe8UafXuNDDKyqr577hvhSAmW5zHaFHj2hrSSP2J5n7yAWhzhw",
  "key24": "4TSFtPDqkQsDi1UdpdzSawERHZ1BBwEUddWMCWNmZfSxFCsh6PvoTyb2vq7nWsSrd4vQCo39cbmQE4Bz7ppzXaTs",
  "key25": "3wkZNzWF7kRfzp5pL52ktTmKqwH6rmKBFwj8kqFcLuJ7DXAAARyhwEVLSaTKZtkUcTdRjQEfjDDBSMqpZQYBsog2",
  "key26": "sVK9ygf8enT7jd1vVCvyhSVQ43LE6NHWNjR1DDi7ybm6kw479feuJsd21pLCr9MRmhHGRY3UEcBsqEkdvnN2MRR",
  "key27": "2uVqF6jfMdQKUfDZDmgqDRMmUknSR8tUFq1GhyEZY7dwU48g6hDap57bTCpqBohyTaxWM9jg7u4j1dPPZbA8X2N6",
  "key28": "4G7weqDrEuWMfEHJbtjrtCv6Un5gRLupojDvbWSvdPPsHunrKyQxK3kYPFGwyzXKFKJFxb7BPgfdggKeGFybhvD6",
  "key29": "2aHWAB8ePMMVh8PqLKuvdRp8piF7CM4ze6bViN2TQUr7z6wRD2t6u6cxr7FLRYkxiQR586VUSaUhgtGiuWLbR7Fg",
  "key30": "46dVHQvtvqUdSFVLu53XoKaALuUsiB9ETYDbPFTeD8T447eXha38HK59Gp6iLsa3acDn2fQ46rQM8nsmY42FDCGj"
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
