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
    "2ErvBeLXtRYai1J278yigLdgpnEBvMByLaZ8wMeNGbkkxBhjG31kfXpxd4G2L9R4pRoCao6wiMJjGQh9nGLbmo25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsMaadUzybruVnmpGgwgYAQrvVxCZfEgyWiR5wRToYvpn4HjEnfAmguSzAj2ENbWWp1TrcVfQtiyBxo4v2gtAAU",
  "key1": "3Jj6LLwtEfnrXb2iXzNmwtuGDkL59qz48H2fyFfgEX5cCc9WkESQ5vVU7yXiAgK4CRCBzSHtDYenKFrfKwSLuwq",
  "key2": "53ppnVDeXuoyj4vwEX1ntd4TkVVK3mSbqh92msQPEmCrPY5sV37nCeUhwtxu97X2yUnRcef6k4v7Kd7ZFCD4fSDM",
  "key3": "5dBP8if8hbuvyZUisJ7stbUyvRMPBeTC1XKYt3SMuR2gjzaacjkUMS4emZxoNAULCwxKm5QK5MN4JXNqxToF2HVh",
  "key4": "5LPaiqioFbSZNkMusHkcGtmoecZWcHb5uM9RotX66F9A6f5yQQZdQEHFsHxcw53k5yS4wc9HTZLtZSnM6ukRV7od",
  "key5": "5UsiNobKZcAPoVA9CY2uwQ5u8zHu9tzAVyNaXkrz2EWpvYqKRabXQc3sD7dWYKBYotSS8hdAXW68u2kYbJBcVwbt",
  "key6": "2WuxqJJmt3YcBxuu6T7XUhe6GSAKFRfsiWgeLiEzZeqDj53QQRrEvbTHgi5y114tU5cU2CKM9DuvsxCVBr373Caq",
  "key7": "2N1UWRev8A4wTXspMGhpwThY9DezacFaurQZQh2uZcJ9tGDjJxtPUdSk8czUqZgZfiHr8MrzmJ7mLXVEFDwW3zdB",
  "key8": "45BgfiehJuL3Rc8YrPZaWbr5GQim7PqBKDcV6VFrvcWPy6nStQ77JJ2jBxydbFFHwFZLUwwNjcBsSe2dQXaewP2Y",
  "key9": "Kk8UPRnWz64uxfDu9vcwot298qehTFWoH2doarCsdUiL53vamsryBf9FGnn8AwjhkYeuQQ7ZQB1mQYda4KYUg4b",
  "key10": "2NmgXqLjfGXMq6WRLTHx59yiJQW4udt7n1EN2WNPqgAWzFfqYvn3MNyAWiwRANfgiKQtDJ5kjUbC4bipUDeg8HZH",
  "key11": "53KThcpZVFFamB4cNnxfvNAiSbiDKBUuYpKZSdpLFicRhpVX2muQnjLnKYrNskAFV2G6EGAtVB276qPJHGAsFdRy",
  "key12": "46wrH85vzw5EbfCzpnp62EK6wKMA6uWZGzYJdYGRDGPvaHWwMCEXKrVntHzKdYEjP1Ac13dTo5J24xSAzKVCAGRJ",
  "key13": "5D3RgfzBLywavukqcvE2dFWXcshdFR4PiBHpEUHdJ4pyRYLptonSuyMSbeCPfELP6WLJGMQoHaSgXdSyKPbZ1E2t",
  "key14": "5kq2KWWLzhD4WJRRPskabVcCgZK4TUvcQxH9QJMtv9A6Aj3GXCKGbGXKM3bvvntaE4xvc1o2P1KijUuh5dCe8g7P",
  "key15": "5nqHDm3JGSz5WuvXxhFT3Z2u3hRWw5Hc167t49KUEutyFXoaU6VcPutSbR6nLH4K1Z8YuEPZwsiVJ15GJNij8yE7",
  "key16": "bsC9CzuQhtBp4M2zvTxKyULLWBgQYsR2Lw2SjSQgUZRYJeqAJgDaLkZMEWQa1qVVaxpWGRdsuY22hN2boawqseY",
  "key17": "rR3FMbKi7EJHH7mnh9pU8z28uPvF772UcJ3jpd6L1bUSDWiVqpX3CpnZusVoqNZNRXWtAgfRmADYxCYraaWgyW7",
  "key18": "2uktib4NUDD8WUScb6r8dySquCDYxN2ftMEqerSk5agAPEdPqjanhABgdzNRrJYeQwk9hnetRLrsh2nTqHSQ8fx8",
  "key19": "4GEMZVx8s733jEyD3iMJ8sC4cu7LQ7ur5cRGWZyAPtVZrr4B61WPAC9w3EhRAuBue5JGj6uA4Fx8j4Ha36pVQWq5",
  "key20": "2e64R7ngjxiK9z8mmgu6yVfBJKKbjiRo84c9SfSWFd8j91CtoxNKakiVURLhTbzyJ7sw8xmbTUghSePBaQpGvNuL",
  "key21": "2Y3pKDMci8i8YXk75kjDsSXoaXHf8pK4Zc1CVNWqXReaJ7XHpJbHN6SwD519bYvMLdQixnDtuERUonjQJHjdxK4Q",
  "key22": "3t8Seq3FF36ZFzGuw3Ap1R9egAVeNcyvD6PPKKdRz7AwTrbPaoNVPE6tZcdx4Dp3Ped8GcARAwFqc4FTpE7g9xWe",
  "key23": "4pN8CxZkAkkVc8TDK7iXkaNe6QH14UKFye4mPmVhwJDivyYpHVc58NFCQRmVMcT5tYd85qkSpWdYtBvxA6TrSEXg",
  "key24": "zr4nmwZVnpjuNXfC4FY26cRxCjtea1HxJH9hBK8shMnXCUum2bjn6vMkuXaN5smH9Y7JnPRenFTGQEZivT88utf",
  "key25": "NcxdBrFJvRi1WZvRT7hQryjDg6hrCg9dWh6QfAxKxp1VSGRxTn7SppScsTp6GXMximrXoCyZufBpMNFyCApJLKB",
  "key26": "TcwodHBpurjygerzapxk73JJao3xRQhUh79whC6mULeBfY3M2A2Ccj1oZYwY7X4VPGcJeBPwhMPKf22nxJeKThv",
  "key27": "VisgP1wiG8T78zJUF1jGwfCZgXyJVvT8wS9zuSq21enarkoWXRg5vPKRHcmmKgu47k8KHKQotMLEpHh9j4D93Fh",
  "key28": "63BAHDxiNk7xCLbGGXNa3fErsSgQ2xprts8Ma1ktk8uuHctUYy5kR2AGWvAyPgan5gisuc3c6Kt2JU2cxcBsWzVr",
  "key29": "3pKo2TuavPMSeb5i38RKwDkD9wo21Mk7WLjFi4KxmmmTL9t1H4UXdF7fD9VkRTvjFLrPFXetsYu3KtFsSqzCv8fc"
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
