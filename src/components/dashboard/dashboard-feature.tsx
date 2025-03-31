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
    "5PJmLrsTKZjF9bQ1pBDNcDN3PqCgmBW9XvkYzcXrRfGBgHGtgfS18LwPdqYyMRsLXgscrDNCpy67t1BZz6yAcKDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qmqr3i3fPfBqehHPQPCFzw2KzxKgGyJy3sV3njZw3XS4ontFtpMGn8zMP1Gvnj4vqn7ecXvQ8BJXvshiDAYzFp8",
  "key1": "3NHipoHRoUgmJd7hnhUA6MtzeHWAShBFDuwZSmY43HDrsJVsZYxCfKDPNrX9VT8nAPp6uy59LPHE5qghpxQuoxrs",
  "key2": "3XwtxNGs6QNfg2RpnUUn5TZDC6SwUgj6D1kDty4D3squjN7eF8Mfi2mmfChFwYZxtp3c72jDmTDsJraKSvJLvHAe",
  "key3": "uxm2UfK7JiaHY49TbArewwRoMpMVVEDAD1ABZWZ98uyFVmXHZWyTV9RhzFo1UrtTDvZP2ByG1E5NcfND5WdGTE3",
  "key4": "4VhKsZqKLJvLm8711yjBXsf6x4zti8xrNnEsR1HBG4HxSkBW3GKFvryJuFYx76MtY4JtaPFxuXuQtDHmYgnTbp92",
  "key5": "QsB3TvA85aH7JiLop4yTqtuUGsQhi6QUZt7de3XUeeBUY3W9EmwvyzUcCv6WPAbjVzbmiEoB1DrZ9XcjEoE8R8L",
  "key6": "2DUHm9zZA8TUYRNbw2FUuC8HpgVYVFHeRDuhqzk1g4HS5mBE9BFSmQa5vyv4DNQKtPWWmCiVegJFicR4g3SkCy9R",
  "key7": "5RSYLbB1XNrtGupRsqny95EqaYpetmJhVWxdbYUefVVKtpHFZKZQhjxp7zc6QR5eUaAKyFhJRhsTiTkwhL5FJnE2",
  "key8": "3YnKmykyvHhY5QojxYVuwnF2i5REEY3UuVVLrnLrX7qGjxuzh7jd2MfWssYch7EvVsiziaQAm8mRuRhLTzkWzGTb",
  "key9": "ooumyj2d3gzDD2Sxu48KpGHD8fCWMxyf2GG5EiwagxeWuzA2dqjpsmFLXwuQtz3nWvvFCvb5CtTXf1KargY9gZ8",
  "key10": "5CEBmtSqsnPya579QjwnumenAhZfRp79KpvsXfWLLGT69B7c3zKVCTg8mn7VRPCzpXarQ1DYAbYoBqpDn9KX2MGg",
  "key11": "61CaXcviLT4NKeCafmLFQkqXAyxTcWbSBVXfL2vEaBF2AhSm1pEUWnrirjNo9fZr79cag4F4VVkkssdzk2xVpdhW",
  "key12": "2ScHu2Uo2g4GaRg2K3zWxuUAPdqhnwRVYvRghpagN56xgEfpVPLLuCnwT9cqKzDBERwJZeHKqyzMwnnMK3VG9nA",
  "key13": "4sNVK7THonT4NhdEM4ji5GBjjLvFmSWn6drboks4uQZ294zoAaTeUgAtPNBkz19bVuwLgEaxdBctkbdi7QaPJdPz",
  "key14": "pvSPHeXq3389LmTRS1cnL4bcm6uFvvJGXAykdALATnHUH3VHV6F7StHArSVQAQuNs9hrJHZY78yVW5Le2AfSgAt",
  "key15": "2zwbY5UnGynmQ952zFxX3Lsodkxe5voSkx61KDF6D1YWxe2iuvqL6qBtTc7SwwvQ2N6gity8H2kaMgAm1vZD9dxX",
  "key16": "4WJZqgiDfqft7fxnhvTzMQCy1jjpDiv8Z2f5ywJ3tEumSBzbVax7bDEAgzEStjHd3VKvrz7CsdgGpn8CwFLJFam8",
  "key17": "3ofkC6DXbp2S2u6wdKPXfXMNpUCs9DS2cEm27C8tVSp3gct5D5MpTP1MA4jkHG2Bz83TvLJ8bNvCvT1WCfiN9QKv",
  "key18": "3vHTHTkpgfoUVK9QBpKaCVAQqrAGW4dVTdsxAYE6fqeAr9eUcqBcsuE9G3dBwPjgPmHX7YP27KMMuCa7fVFZLf9F",
  "key19": "3vFPs6ynBaXJPoWUfq6VmvSHRq7JDCWDULMZ5r7Rp9iwETDktmLLY544GcGChMU2tB48TrVHqFPPzE7422pL6xHJ",
  "key20": "3L8GKH6JBhMTbV2c5sJHNKL9RsDtDKHnPuZSXHTnqRJSLQ38KUJfqZC7gK2ZSax7pPsWy36b8MgeZiN6u9gtRNVY",
  "key21": "2Ga6YVQknKbitcW5xm6PnSmJU7V8iL2sYo7LWDwnZRaYQR7MZgqJvz9rExri25YPfzGzcDmLVwstFdRw6PcFLwah",
  "key22": "nMhVnWaeAyG7izV64fa4xs4h6y3KobCZwXwHStnJhCgJfGVKtMrLMf1tH13AhaM6nK58wPoyfdaRUJE3ZqnGANN",
  "key23": "62rCbY2EmW4L3WCug9A9wt3HQFritQqTbnQ4zp8HF4EPqByhoGMJVmeXuHnxPqV8pjwHvNmgUK7NxzXyqYa1NGJd",
  "key24": "4rDEWdKHRGHUxgH2dUTburxjmU8KnWmk5DVFzAEaRV7b9is5H9fEBycM8eWw4p8bbWbm1jxv69GrgY2Ah1qYEjti",
  "key25": "2xST6wCsWDzFwb54xGZsVpi4JUj5MwGsUeZ36wJQZYdwwySC1ovsJZUDFPPkgXirn9tyjhCxEKeqPW9es7UmESoe",
  "key26": "VzzDxqti8RBGoPNjMnCs4ZGZzAikLkjsdQRfy2F65XQZJi4oh75YBdhL1uMgR5fTQSLYAX7wbHx2SnfHpmQUDZg",
  "key27": "5J6exrEdXaFvFrBctH6qQWHDH5rRCfEkpB9vAXHuFbpJjQB48e9rGQecUwc3BeCkyerfF2KgmfS78cECKVpgituv",
  "key28": "3fHc2rpQvyK1PYAqxzJXK54QMmjDWosdDv16GLCuqxmWeS54pCrYpvWZKdjP1cs4H6ye3Qgun81W82FmH79qUGj",
  "key29": "2nvga7KfpscT35qQq1GiLYBQHo6mesdrRpmGnnyUBDhQHm8N1H13KvsNtH198rqXzDwja1XpV4nofKaP7mUDmX2B",
  "key30": "5Rua3HPMH8CcYvuC1k4e2z5ivTmHcSrZwVLedmGf61k6J39FAqB1okyzy8RyPdYUF5D1C9Hx1w42h7s3Dvs8RCe1",
  "key31": "5PYxWbXgvuAbX51mx1gXWQdS54zswWdoy4WZHRBK9KJeZHRFWHnTHMsmiN7tQptHWAPuy7kG6wQWiTbuLYkz1wgk",
  "key32": "4jiXK9Kt8bvsQVSCsLDR3aXiuAVVQfnkX3bds5L6WtyVo4ABqYacZEhQVwmNL9vdqsCj2s8A4WAMXRX2sk5KGf4p",
  "key33": "64VP1xNDiRgAw4fwQZUh74u4ieAJSNDZyprhS5GGQhSFtaFC4hJa1981tnArqMu3A36CbmG8EbT8YAZ3TMfEJNoK",
  "key34": "3bTi6mhAdHrJLHRGANcsJdaaCqd5nkPFcM7MiMhdq5TGnCxtTuAXbb6q21tGwWiPnPSnnsMGUty3VcWTjfd6XR2f"
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
