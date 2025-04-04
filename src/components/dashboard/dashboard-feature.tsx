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
    "5tF9a52aooM88J3N7MiFUPF3dDLQ7T3a9ss7pypgZY7anESZ4CwfR5mtk2qh95DQWe99CnkaawFN7Z5oHnxfZ2Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9nE5eYxQY1eBR2T9kXdVJ8VXQH9p8ntZmBjxuERPAx64END2JTQrt9eKmDEhqR4k8cBcmPEE2auzt54rYdDnBF",
  "key1": "2UGRpbfiGdbpVymKrEpnVpkJ5JMHuu9gYmvmhEMY5saXDVNTTgguTkwZuu9Fm3Fq2rstqUuk6UoN9sy22VhtdMob",
  "key2": "3UUCNpmp23s35Uec5SfiKVshNeKwLxtSKL29fnta1RK1LLXhzG6o2zeCbagtX169DDZVP8ngCxeMaLKP8aQAF6FF",
  "key3": "3z8wW6TpZX2ucYtsRf9M8WUanXyPaszRXxGwCTTnUeGBWxfZSvfjrXn7ZDzj2k7NcpLCbN7iG3jM6zWEbE2gwhAw",
  "key4": "2fvnQphkwn2tBPZKHqN1gtYLnicHrDFHUgwSPNRD7WGarbGsG6GrjWwK6vxFGuziEBui6qFH1AtM8KnspVaXPPep",
  "key5": "3AbA5dhuoPwG8cJZJRyoHEoVTwBHoKTrcdBo3RgbLW5WZUugWUo2BLNph4AY18ieYa1tnk8Hn3XHtPfMgVCig8tj",
  "key6": "3WxeP7Yxgrr37QcLbu5rfuEKczf3CudiM1aWcemmXin7Y36cL8kVzdgLxE1zthB2GuVzVeLUziH97QX3U5xtWbJE",
  "key7": "2MUrMYhdH99Qn6L9aRrhcCu125QqU14Kz3Dbbb6agz6GBwbAw5cmSvToqrUb3Yg5me43HqT3V3m25R3K1M2nvzfo",
  "key8": "3DaUKmnhU2cPQPj9YJtUJGWWoBj51igahEcvqXNXGxLeqnTXZ5bow29dr4L3JF4mgQv8UbeMdbMRzgGN7pTtx5dw",
  "key9": "24kKtpnxmQF1RjYcEVateT7j9xKqem6BJiGFqVaLvvytahrktABHnp4gcj8LBLM4JiAkNmjrS3HVibPpxeip1HQj",
  "key10": "4axY1MfUjGEaGfF4Lbjqf2AuJYSQQYUH9MdKDvAZmWa4cet5TTLRg1FPqBbQJY5kCXMWYYp2wjP53bWX18t7f9sf",
  "key11": "22LQW71AP9sYQFauVSWQBAJiSD1tViHcTfa1Lse4seVwuDHzDNQs1V5z3qP9iWEMnLd93tPWghgFLgfUzZeReR4u",
  "key12": "4QscdfBHTDBpm8zFNT2Q2NGQVLwt1FqB81RQHgGBgsJ6WLzD3n1dVDzm9AFp5XSHPNunv8RQeghwR1Dhch6Ww23k",
  "key13": "AjJfzmWA6a87BLnsoULyeJ8ebSa9fZsP7pG4fDQF3Rd8b77vaRCzyVbrSQFzaSjHxMvQEid5BWZH75zjeMi9Df3",
  "key14": "2xz8o5Fbpi97JLpeU8UHJ8J9cKsFDUJoS5Sqw94WQgsqhCEHNpEhy4T42cjJML1fRrCnpR3NRUqz7oBaa3RL2GGC",
  "key15": "3DXifdf6AGPpFZK9bxany4AdkLNekkY9fapZgTXByZa1N8kwAzh3V8JS1pPR6yNTcbKLRkEQKK73jnvvKdAphWRY",
  "key16": "3pUSXBCYzu862uBpGFZUiTWXt6MirWx5EbmSDz9XMxevpUw1VZ5WLzKCfbVADeBjkdUWiWv3VNGG1R4dmJF4PZcD",
  "key17": "3wsTfjzN5BaG7ZmEHdrk5AZAtPejJ5TqDy93fSrkyicpFh2PyPfYhPdw5RYRPyeD8apFGf2teSidiRVLCUTjozVz",
  "key18": "64UpN6HRMesHEVkmZmZ2mGRRMqbmYw2fLMvJ3K7edzNPcdFg52A8XzUf9914QBLHsabkJkDyTFW4Bg8Pr4qCS9N5",
  "key19": "252sFHb2Yjn2KPbbjSgk7uGUXccRxQyGVYF6G4roGH6dQSBhRgVos54eCiTnH93Ru7kYthKQP2gXyzTXgCuFmQLn",
  "key20": "48ZCgJBSaNMN8jgjfYg97ba3L3x6hhTxge4TXZwNkXqz22M7YJ7ZqjCSVRfrHJkHtzkmHKryx5Xhd21jmLnvsSrk",
  "key21": "4x2usW9tiZ5gp5pMBuuBA1g3tSoXxzq8myMdAgFwc1hRwP4DWrFpkkqARdUx1F74cY1J6YHVK3uBDMCbDafNkCgv",
  "key22": "5WQ1KfsaGmKVFEkaZ3CqR61Sx3oyYqaY5Q3qRc7n8qEoMB9pmxeU3dja39WPEAxYRPXcPbYLSLkUdoBiTY6T5oHe",
  "key23": "2LByYWnXxfeKtWYKEH5nG59vs1ChmnGSUB7SoZgi6Umy1x67JqaqhDUQnVSF1g67XRez8TownNHS5ep3r928Lz4i",
  "key24": "557hHbN3QqGcDyadtPurjAwXxhdX7Sj4ufwhfQnQGM8VpEem5Ny6oqV1bvFwnRRtB2VfdsNAgZ5nyTqxjQSHXvbm",
  "key25": "4Kvsd8d6SW8zMphuYyg3WhiuAZLHXeedwTbsfUxqAbyBRitJ3XFZLodzUi37RfeKZQsgMZZb2N2Xvj2ZVskpMbgv",
  "key26": "2WEUAtgjvqewi3jpovHNSVs5dvsT1EJaWTsxsp3nryhTU5d4uUPBjFEhhkSpjKSRu3NGkSLnC4tsBwcPUnS9WTCe",
  "key27": "3f3DsqGL793jbfypVAhFeEbWoNSgHd9MriinA6hH8BeqpTjQYKQh5EeogqjQWjCJaauc3anAB9SR7xBHEsWoY1dR",
  "key28": "3RL5pfYkfL4kzQV97DfTVt8WXBPDTPv9tW55933MvcaY6sqLMQpg2hRYXdqmp8QThL6gGPsqt94GtZqH4FGK2ErK",
  "key29": "5yG45Hevjerq4BwXgLRN4fxr9XQ4EATXHu6VnVSLCHbfrHi6phvDYZfioxHL7M8txvMYWojUcY9GgPSTaisuRv5Y",
  "key30": "2ULagd5iTWBuaqEVdp8yfyVmGF2nMNCmBTkYf7dygfGfweQxLJCeGQ5aMezywNdg8ezdxiSXjvKSzio2kZrmbnPR",
  "key31": "3knXok6ehCfgg9psP64KnGPxMnFon7Yi35vDcocajDPBFUMQW3Lw5JRTasYDu45WNC2AyXQS6vP714KJ7zfuR8nZ",
  "key32": "Jx2i5NXsk2uy8sZDEpmBBvoHpJ7CTfjFFfBCiT8Gi5PKVqKb8WrqktSNTfKU8xmnbYdiwUX7dunBmwpjDiXGddF",
  "key33": "585LMCVhQ9DPSXHVAAPzdBqdDh25kkzJaD2EKN5XcKkhSYaZyNBARDyBNS7whdkxdUk5x1t4qL5VcqehKzJ5754b"
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
