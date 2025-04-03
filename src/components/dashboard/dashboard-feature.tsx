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
    "2sbgyvdPBDUG8otzoNSsnF3TxT77WqGzcmSqsu4TDtueTFKJuBkeiCkuaX4oDtvaeDmYN3sBaeDHrxiA4rFs1VLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BDFezVeuBZutECXrP5rW2vmSomJuJj1FLEM2V6K8okGTVCowfuVZiF8WJxmQw7tm7emSUoMCvUPTgTCvBGG9Xi",
  "key1": "2eU2RHRJDucAjHmCnrgSCLBSDkh72vi3hUPgmMDciGpmM91LM1PzLxCLrZqL9sJskSYifQQK2WudvCSnqT3BsNG7",
  "key2": "4MfCjX7KRouW677oHoyozbPqoYqGb1qmcPagg5LAJ24AxafFYXz91JQBZWPQX9KCfXminDDYygVjGTUSNARGGHe3",
  "key3": "WggQbftTiiNsNqvFSEYKVosJsckcUSRszoNP2LLpNx87y1Ad4rYwqM4hKHeQyidn74MwxD89Ea5hhKmbBjRYgSe",
  "key4": "4MKhR8VppR2DeYzLPFV2DiVV929hg8d6n4wiSeUcJGfk5o9FpU3wCwzHP4Ueok37Qm25aP7JbvS6SC8USc917xpT",
  "key5": "Px82Xh5Eu3ngb9gFwjxmK5YyJA4FDfC2AEzEBnFRFGWHkCG9xidhDKZd6de2LsJ7Y7ZvP98bWrUfy6f2tz3rKU4",
  "key6": "3yPtuN9VebSgcf19sANJPDwA1cyqpmuqmQ3CFqXcAtRmr47grNmx5ytWR8bAFdc9Du8uesYqvySjf5YU7gJWKBtx",
  "key7": "3jZPFCeqoNLxqCTcTfBGGmb1A2yxu2sHszHFAmZn9k4GpYUV2Aa1qBZbTWWVTsL1P9DTVmQgYh9BDkkGMbjSfsc9",
  "key8": "5GdDkXg2nn135MyRN6chL2QAssRYhxGjcvdWU6LELWk8q4ZHgGwj8WzWuny38gcp7WmvuaC52Q72EQGdgNoSFUR8",
  "key9": "4ugcBE4XufoSnn4QJawMgdH3d8ktDhH5pc6yZ6aS17oeMtUTjz6EG2JDiVWVUZm3M3FXFZcZvJUg8tHq2TxNt6BL",
  "key10": "54i8UT5NQbNYVEJfvhjz5uTWhnAh5kxtVZnwT1wRX2K2gznvJmcNpi2FYPHcanPdXE5CBph7c1UGgLZ5pKHmjyCa",
  "key11": "66eA1dT1yxVCTzyrx1hxNPCqQmkkY45poTJ142LQ9xnxMAfzakZ453NBhdB3LKDhTTgEjQZYxBwsM3Y1CAi5hnic",
  "key12": "sB8s22k3xrQ4aGwZWrRVpUvJW9kq8k9kWg2AJbheu11Snkuyo1UjtFcm2ZKfx2nu94gr8SyoSfFtmsLRiUUBCTP",
  "key13": "5pB1p4GTYZLNKSnNyzUw4Dv43Pn39fHkK6i7aTqNcf6S32cSDz2oVi6Ns2adr64o8ckEyaYerF1nJzfGNdNk96B",
  "key14": "2eVJd34x7iF7k92v8wFvFf4awg9RLu5YWeK1hcGtbwzEDWRkn88icN2JUY9u6JQF71vbysxhDERKwGFmUJtJqtZN",
  "key15": "2HwPXQUdPKrSy6JpZUNXEqeVeimLN54Pvq3Mu2go2WWGxtu1kDtynmWiU9D3qqSKZEiUmKxtPTcfRTQcLhD8SBg1",
  "key16": "SBaua6GKHzWaykkf5o68dfmbh74oiQR5TrkJH2coTaKndvPgcjJKwKvhgph1UCDXXWiThv1u9EixM7K8FWgZWXf",
  "key17": "3dMQrXnaCBkjmaRNKHGeZdqNrfFVKViKyugjTNuBMC1sbaKENZXXrrGqFu2mbGVZsdyf83rwQTy2XR34uxf8wsP3",
  "key18": "4vTvYkyrbh5kNitQgKpApBjMWhmjaByyom2hoBoF1eSdWGqKcoKigieaAuQaSbYFBTtCa2WBhQs5TCZs9ox2ttqC",
  "key19": "5dhidkoo1vtwqzAP89r97cpzw1rFPCGnfQPoeew1rbh2nnHMftLFLr8kwRtDFgpcgwLb57cUERWymzm8vkpsDtgQ",
  "key20": "5khyfREwuggdxSrTXgU3sccyPb5eW9zz1mjVu8TpKazpf7sVY3473tooGvfinqnmGvjkNQ6go8UHmCYhVkHpvxax",
  "key21": "4b4ZUcwwbTeSwiD8uxERtNDJSU5jWzcpcDzPGMwKmajo4ZtAfTwRkQzmo1djoL5x3HAhwRPbvRCApH6dXjwYSWa6",
  "key22": "55aRKroDx9C33tuehcpwBqMRwantKMTVazU6kM2XRk2DuwXPkRW918aqguCxUYMCJHfnPxBuNbihLxZnLXgiopDL",
  "key23": "3LYFoAQYtAW86m8SAgcCKmnq4sdqJ3Zckq3SVphm7ARzg34oqsq9XWKPsvSaamXVwuNBUYxFmKxA9LLjr4VqGmum",
  "key24": "3ZNrym8UGuL6djGcb5fStQGf36hjtHfc1WK1Z11G6Tw5HBQ1n8z6vb9fo2atCyqfKaDoXWKXoqFL3RPtuzKoTX4q",
  "key25": "3ycZNS8evXz75fk64VR5b4jLVxJ8FvB16povMQUKiXReaE1bLF4Nnd9Y55C83x1QJNN219bKMJsS8xusgB3FFBtY",
  "key26": "4qUYhMQAabNUSgoBVGWqydH1RwoqfscLVA14aZTxSVhkvzbbWnqVpBhSRcNzPh5Kq7X6q4hPticUuzkNZYv5Td9u",
  "key27": "4g1BWVDWCFkBeQAGxBzq14L2vfiMYggNkQWsEhPCj7CvgLvT2sefXKZAwSwoFuUakTiFvDR5yzyqomczgs1Z7eR4",
  "key28": "3613tgnSUiqMF6ELFCwrXEJRzfgu42FdxHY9LDDdcfWRR7cmLMawn3ZPVc1xi6YZy4MbDG8KTQHdAaC8ACBzbxak",
  "key29": "2Rw3EBYZkvhSdwJfLvGE3yw5sNZZxwqTcSMoePTVRV9hiisbcRLYRFkunFRgEsjzZJcucWfShpc3hLBwbRhmn57Y",
  "key30": "6763xEGFFZnrHKyc51zJFpmkVmsTaE7c94VmbJ3oVY2QjDs2ooH3Jj1n3ZLBGLgTVhjW5VNBrtDerR792ntssNb9",
  "key31": "5PkbgTWRW7T1y9NhsT65mfiwcR78FizHGbRjf5tfa4VMV3YBTcutemifM9bMzL3YMfGcfVrSFjKJsJ2SZa1x6HPQ",
  "key32": "4Du5z2yWJE56YizkDR5vLVygjkKuBftqNojfQxGqd9fBE6bASk4hBtUARpurV1Pg1VW5YeADX5vN54w3fz9peWQi",
  "key33": "2TtsYtaRXeskrtc1hT5QnuQ5HtmiJAiDWVTiAh19NeDepkgkW5XB8YPE2gS2wDhzzeecTHZ8XX6hRruQJYPh6cDX",
  "key34": "2fXfCBiTYgyyp3y3TUs1aWJ8cZ312qJGzKym4ZEfURJTiVFKiLSjk16NtSqVQxCBiwzvcmap1bE4wVZMdLuhjgZC",
  "key35": "s94isVXc1fyrDb5CJRyE9sgi9svRZ5czkrax4eKeJFpRA9cMjX1HdqNE7fyuCDPUjWA158DntRYR85AjK5netsH",
  "key36": "8aN7TUjNT8n1Xsuo2XJCuxpc4C2uA3RnKzBf9NZFTCJ8xpKJuv7DrPamwKQMowSnJa8v4fwx7rDw1KhEUp69bGT",
  "key37": "SxFembcL6MNdHRqi4Yxb7cNHcvAJe22DvR6k3U7nVtN8fHMmcrW4mN16ZYQSjeHsJYnDLMNEQT7D4AUEK8kRnF8",
  "key38": "5jZowVBWUwu8MUQr1ghzCfmQ3c4oE3LBH5sjQadVar1LJgs6Q6exQitPegxBR4DTyE1yJg3YYoZgwoCAYghkcDUH",
  "key39": "5JGt1fiPPwbYSitbi3q2MaTwjvcgdQBeXTLTXk1SAePsCD9oVuUGJZoPEb8kaUNVUn3fAqJ8hzAeedSZ9bdwMSd5",
  "key40": "5wATdfBp9oDaVLVKT4f9Ese3HU4GMcYkXGeAT7Ke2qBbHFTD9Cy9QeMBqxNhNXac8mSpAuHY2DKpqM8wrqShDMM1",
  "key41": "3CYnx4KaFmS4d5Y5M7FWa4fUiZ2xXQueuUT1Su1mUQ9qW8rLSRBBw1Pt2A4B3t85GdDKw4FrrykPbMKXXu1EnS1H",
  "key42": "2Tkh5Wz5nsMpKqv9zBubukZrnHEU4WZV8E3wJghq4ojmMBfrdotuhGu4QdLhLWTS4xRKzvzUgnvknq1RAmEYPNMM",
  "key43": "2gM8uh3nXyAHKgLwPU9XQGUB6WcGVJyCmtuuApjyFUhMm3qcmVikxgHbUg5AExYihBXVsoPHAEcPcHf9nVfUX5X",
  "key44": "TUDjvT2RFwnKZbeeGaom9ZrrWRfhF4woe2ws5Z86fXgCsxFU7yTneEuECPEhGutwh4GU1h8jUpvVtEdLQ7kjYpN"
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
