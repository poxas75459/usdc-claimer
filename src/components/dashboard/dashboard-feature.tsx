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
    "44hvyiyNY48Ky258H1WmnG2y8zzAMUxQ9LnvFYLrU8FifK31pqmDnziCr4QREKRJq4xS4TYT6F8ZU5si7gERGH6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqTDqExP7FRHWHHVhJB5dWu5HoGEhSs8JcSErgVN4cM5i8RCgdfP2cC8V7Eitbo6NaNJ42JsC6f8EN3FsZznHoz",
  "key1": "p2qcxjKB5jmo52hsnpZm3pW9JEyFChhawHb1aeNPYZhGJnjyN9d4pyFYByTfoiSuDaH86Gi7TvdsFGcTQxEcxdM",
  "key2": "3vqz8f17QzYrBqB5rJtK258ZBAvMpgcq6Jzpkx9wa69GYGG6pdWuaAbQNrQ17adLMeprCmJeWCh4RTppgsjQQSse",
  "key3": "fN7Q7dwARwkwNK4PMjaV2PwBXz4EP1iyNbKo1M6FiJMYkX3FJmm31M8UPbMW2iubc5VH4HFzxoiQUyLTrTtxZwk",
  "key4": "41BUFggTxrLuyzX9B5yrBWoAcSRiVibY34nvvYyXt55Sxq6CF3JkFdGJS3yg9FaqVzRdoJLSyxhfK8k7i1LWneGQ",
  "key5": "4ANVytAW6Gb1tbR2zxmx9EGLX559PHD6F6v8XhctcKz331iNpSyp3uV1do17Kcd6xAmuHyL9XFP8JydBTTUXFAZg",
  "key6": "vvY4WuxHoKHjPNxPp5jc8nzNVfGJTa7GDfp7vfBaYfoeFfnePXDovumQ4KZBDmsDriqftNJ74pgyaPd1vnsccem",
  "key7": "2kUe7fv16fu65MRhZMffvPARp1zDN5b8A7bSMAjpuN1KXzi5i9dWFth8Uq895cjgkWfpHrtxbhs4nTL1tfmFVY7t",
  "key8": "5h52zvt6jJuiz8aidNz9anYv7ANWG3Pki61JyZsVy75rdLXYahZ3qwD5KP5p4yAHhsNThzoB3UNaYboLBhb7Lvjt",
  "key9": "35aA54kxsvK7T8wmn8ZsE8HMEPoB5SYSerzpXp3uFHDbjYhwErBj88AjdVEjpndCn3zy8uU3rEv4YAHY7KADtz6x",
  "key10": "3pTXpwh4MEwY1Rk9iWEzoUTyBQQC2R2G196XzRrVJDHkkV2EAXnWeV8RsVciAY9U2M9wKL9zPX1VxELvZgWBVFs6",
  "key11": "ASVJ2xsNHKbuaTLrjhQehJ8aaoPwYD1sWKSzWENZpqQgRMxdf7x3kMFp6N6HseCzK3di2SAzxXsBydCdco551SA",
  "key12": "5eYh3whbHsLZCxL3abXZgWxCNRfEiqFrT2PAo1BXyx7eUQ86E7SCvViEMkK6uX6WzDGwof6Lyj4RDfxntwv6K9Ln",
  "key13": "5bWpp2h9oU5qQTgmDRdVfGh8npULSRdnGzQx9izqGh8TpJCn5oY5M8br6GPNpqjYN4n4FJvnqZquyTAHdXZXweRV",
  "key14": "pWUiQei2MMXJa4oANZtmxbMqTBxAsgwVpAfMsjrT23JgePkazcbC15h2Gby6pSBgwEkVDXLmfprGF62bTCN3XSw",
  "key15": "4PuuC5FSGLt7gyqHvzLMuK3Yo2VEh2rammDmA6UdhiZAwYHbmuegQx4QeqaFJW6va1J7y6Nnvmqp2WxdkQoN4sbo",
  "key16": "5MFaNzBSwYKTrhpGnAbK6jZkGBUWgqoJBZbpnrUuf7tRSQdieLfJni1U5LWnSme2EqZrXvPWLt7uaGDiJ5xVkPMN",
  "key17": "3SZM6vpf8fXzxEYns5453xbe5owdhS5DXZiy9RLTubqi53PRDg7Zn8NUbNnbw8stVgAGePEfBahXYyMrZmvmWtrW",
  "key18": "4TrxHHN5PRWpogGdS5yXWQUaQQEnGVN4zKefMev4p6VuacpC499XwNNuHaAqPweW6ZrY59eGk5MsrfnETnHBVJ4Q",
  "key19": "4G1oeCAq5xuLjvfnbxXoXDZaUXDiZ4EkThxaXeFabaYhg9Mde8Ax3nUiQJXzp7BSKC7XeP3WhpRao5NXBSXhEE7p",
  "key20": "26oYvw6dKgsDzLYb3WgJhKaH16hrHequz4gX4tBTTofTZ2vGvkujLRd3U6X2c2Yz6zLzwgcysdnnFMTtwEGxdpoc",
  "key21": "33ELbrH3qwUd8XetHAdR8ucW7FVU1Xm8hZnZyQTqnMh9Sm2r7NaZuUo6yhGra7zq89T84h4QnHsofHLH9x8mzV63",
  "key22": "2WQNhtQQUijQWbrqRazCfeZtuThSGc7Z8v392kn9R9TGxnzfTeH44f4egZkVJmH4Z8SrVv11sedcJwvpAyJyVzMA",
  "key23": "5U3prrBzFc8xtD8TYUmCHg2n1Gkh9XcVwUxwdSvUzXFfFx5KYK3pv5X6MehyQkLqRuCNdAK8VC1ENq53DKTWTcWK",
  "key24": "2zAicChLc2WA2BgPcEiaHDUAguGeTwymmDEBR3mFisK9qkZYGRz1uEwvGVK7hJm7RhxDusUeaYXGvT7bb39niDkD",
  "key25": "2z56nsV4LNeRKzc4SD242Q1ZFUk8rhmViUoTdD1Z9eKvFqLWLtLT66VpWB9LTRX3CqvA2ALpA6DBNzYBKnUSQTba",
  "key26": "5x3QX2KKuRpZCSxPthizzTwhA2gC4hHRTj8ev8cmkUdr9KqoMpRrhDuYvnVLiBNTzKm6tsYZY1pX2EaBnuy6498H",
  "key27": "3qkTSLsQmkpA4s2yqxUTXdsxqxwMbtVEmBXiXgAfw3uWr9yXHdTZen8VMceUR6prwdKyXcFAz3FCBPAtd5mHCxKG",
  "key28": "4o3WMozRQEYi1uvwx5rvkADBoLHZo9fFCVibLEszRe8FoMHo6ZeEQH1Maf76L4ZKpLVrMR3PerN6S7i6UAKj3gXu",
  "key29": "2K8eN7SYNKinnfKrd29NW3QW5EkPwGu1PLDiNbrfqcfwyLPPJUqS2BcN4jmD93hF9ZujQqTQDv8RjHavW95YTCqb",
  "key30": "4rnGpWhpMQ3HuN4QxfmuV1EdoMQFXtUFbGNMA7B35Yfuh5tMumxadjdoMcPCTteHxFibbG8mmxs9jkbTbQ9FG8iW",
  "key31": "aEJpsbbYJp8C3qCYQRGxrkAPAc3DuoZHcHsAynC7ogwcvJR1iW64WGyWgxARhNky27fkj9T81NEUmBYnA6Rw5fj",
  "key32": "5eVJFRiFSRD5hFkKJu5UFJgS7xYhKxGef16EjoiEJM2uDU6CbjD6JipA34UmqWTaMBCUUDyNrZdatY89KdXnK9zy",
  "key33": "5WSsgtPotZg3wSM3fq9pEXvwDARovecBBPPsz8tYm18kSt76cKx8J2u6iDdGcR8RDYNJHk6VG1PAM2KTmwqTPFdw",
  "key34": "2xarnZFu1r63XKT2wb1NTkkSJkjbgnJuUwFnjMSfsbMbssCqxSSooGrpvWrW24GBMQok5ioAqn1SKS3hE8ozjKks",
  "key35": "Wqk2GF2oCUkcg8CE4mSBvqdeCBBiDp89FM2TRN5pMWTz3HmfZ3eafu5BbA7up5USeepL9mfYjDZrFeonHf1yWUT",
  "key36": "4BNDsSMAbtJRhGuQTTsxm3XSy3Y7Kfy4dSzH6od4TRQ6uB1kpzZk8r9eK5pwCabXtaEU7PNKVEjXn2RHyJMr98r5",
  "key37": "XUioSiYaPDgA5t4Wcmc3uK4RhH3qk1iWGBFe7J4X8DRgnTPpLJCxgMXecF6aWa659EUbDGKWdEDD6qs3qZknsGa",
  "key38": "4egXHg52RecmCgBSMvqLnugL7rZUXshtvEnLMWy5TBZVm5BzNjAzqTUcVdUKYkmn8nCM9MGHGHWxZP4eRfc3htGC",
  "key39": "5EWZ2kB3j1CJyJpyXJYxv1dbHCwEFZyRgVwPVVou7e5TTVRNxehqQrKRAjQFWpkxa7w6h5BF844ydWGAEatoZmJR",
  "key40": "2gJ5anqxuvcrHgppm79w7AQc49AZbLLf3vDitHaf7RN87ChgG6BGiN7Txywj4ui236D9t1B5K9oUhvVHkhkSwqtr",
  "key41": "5MYXbdTU3118RHSbNdjfkbXG1Wgmj2vhzsfXaFuUpk3jaHUGkdH2AXpnPWydCibdmCv2AnuhDx6mxAfVJ42rx4po"
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
