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
    "3ww8guX2XuZJ43Y8XrcoBxFH2xaTWzirwKgcRR5AF5XsPQZHVkyVG9iu7BwJJPoPPvwq6Cy7urhrMLna9C2uoUQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4bKJe6JiQyKsYQTVjKp2pWVKqVWS43cgZAV6tgUHGsAnGQia8fkwteHpmmmrzR786MpdQYyna5yCFc3p3Wmntn",
  "key1": "67ihHWHB4D2haxBofvT3zagEnxGnXVhS18KNqVoaUL1dTm62o3aE4rQDAT3TwZspAAM5rX87opz7Pu418AoJ3nNV",
  "key2": "3EeuF2txkAdbdwVxR4VogCJMARYSQRZ27DKkAzUodF1Vi4cYVrcdDASw4QGrtV3wpK4L49cFEv7bi8dATxi3xE4W",
  "key3": "3cXw8xonjUKhxs5MBnDDTsqf8TNRuFnxf3VKf8nnNNJFVPjnv8dgry6svJCqe6ii3Bh4XwWW8KGWxdeGHKk1vRc4",
  "key4": "3ogjtr9wJW8rmJpfCp42Aqm3SmgLayEkYpTq75qW16U6fqzRKiphNU7bqgQo1iRT4nxQTt1YL6EVXBQix9akvS8J",
  "key5": "5r5b3k5SSa8v4HYDvGGFy4a1hvhcY76dW2y4m3dDM5UXdPJJUDkZ6rQC33cwh65LVU7E9WFSisVtyoedNJsSHwkg",
  "key6": "3LvvWxTxovUrgbiqQCvixEhYZqADRbkKj62zaahvzY7scz1kAHcW8Lb2xsXLPnQbYMvMMNfvRh62fuLWouBTpUJu",
  "key7": "2u6tkWnFVT7zprt59VDYszMQ5FYdesvgNdrsh1v4EnVDcjb6FUgMjydBdEx8ztqAthVSTA1CmdB1GXWB8iTj6YzR",
  "key8": "5oehyEpTzVM543yHe5ytD3nBdjTiHgou8woD7M4rQ4zMgYLQcNNfLR34pa98ZFB8aNKKX2P6EFEDV2kTmQQFSrkg",
  "key9": "2dES65xP6yroxiBQUciDWbdi7GdtdDFhTF2SoUMGTsjawFpPwfNQFVtbLAHnHC3zUHNLdv1MmVtLaqAtRqCvV9g",
  "key10": "63ws2Ffsgobr9x2CBfLN2p6zzfZHhiN3MKM3PjmrRG9gNEUUvoJNM9UmigUZr2Dgv6SfQkJrTjhy6dAmsCGR6zS3",
  "key11": "3LKo4mMPSYpz5vCnpjFSF6KYpTu7u1YE4Zns9Yv1SNoBFMJ3n3NMfLMZDE5MeUPWTTGyAxgBgjy646hS2z735XKu",
  "key12": "2JVLoQZEASkMtGHnWzJ9Q2Jcj5UxpT7v2RwwpiHyj2bF7NzHPiqzcm5DQBDGMtGdpPF7nbhFVN1sWhmuNYcTBo3i",
  "key13": "2DbjUdvtjhRK6c8ZHanuvhGufFmtx6WTpEu6DdBZvR6VzQTw8zJFzGxJqEhZggSpSTQK7mXm5JYks8z1swzZKzVU",
  "key14": "4kY5WkwAso9Wm67HpT8b2PaD1aqqnUzPtp7icHYmvetcRiTJxTSYEqiKCjYLtzpq5pCGQbvN5iwfMviJZRhGnLeF",
  "key15": "fapj1jPMNxuQBV6NQeC7UYnXhPSbvYVLY31C5WdDnSXeENcPJ3m7c8LaPNzGxfWoiPfSEAsM9AKsmVGcJU7B7Y6",
  "key16": "2G4yRPVm5ygitXCHHfWuqhQ6PE4s9gYF2hG47HVhEmdabQKE9xeUvWcfL1c566Xgbm7nyLgf3sCyKJFYiKn1zMZZ",
  "key17": "6tVZ1KGwMGdhfHfoEezhWbYTyPqDPR8jCwvEXsWiCvpUTHtdo6CyD6Nz83QpGxDvAAuPGNo4XAWz2YdsnTuUYh8",
  "key18": "2SA2WBKrk76rVseFTvZpJbcTuLA7eyWmn7cLN3zQWVQbzxBwD7byc91DSSYAYNffrAbXhSSRmtsanwFhB9QVbmL4",
  "key19": "4nX6Zdw4YiybkujGoJ1rWd2Pa2rkPLYcpxL7ZKxZkx8kiGWrmP3fyMnC7UGLYxN5YL3FCHnQEBhsruMGqTD7HkjY",
  "key20": "5ANrT3knSW449ZAPH3WLk6niXGQRjMtVVfzoi1HVQkvfyDow88fMNSQhob4Z3HFbCoHJuM3ScQhLcTbqt2ceyZYN",
  "key21": "dcZRMV6qfDYZyJ9aXNsUS2sHmMMvxvho3WMzvK4afA5HkxEVxV6THM3SbVnYZo8jXySnoEnkPc3vrLYjhYskSvV",
  "key22": "4vSbdif89DcabEcGMADsRkuioDnFB8rwJ3gxFzzNeJrfiytYFGbonRTdkfXBAhRvb323LZeW31ogRc4qymKaCBmA",
  "key23": "28oFnDyGtYEfQ4QarTUcCFpFNLyX5V3iwgTZo3Scyj9H8R5GBRnhSzpXhMfg1rtm5B8hcsUJkrJJXxT56vL6KSPt",
  "key24": "4kKs3EHA1zJqEEoH2jnkuMSeUrtaemsyg1BKobwXSV5S9MpdgjmjgWYfDs9s9Hx8sbdrzboUvuQrKG4wYcjPXJuU",
  "key25": "5cbHY63hCfiizE6DU1GpAJNHuRTeZ8SPWFcd1PynbdKfbyjuxAeQH7hG6rPMm3vVpQXRSzxSUDUmVtZ8vcWrExSU",
  "key26": "2ywS2F746f3BLnqAr9YgVkGKUE5CBkCiCfrmpCGaLbP8gGMcF6EyzGt6dQc8TYArACueF7m5RnXzHhKNVxYn2yUg",
  "key27": "3mzNGGQvoVQCdgmTJm64Y2Mi6ebGv2CbeoJmrvKN7cBFJr9A1GHJJpGGdV76oLe1Km8Ld4xaX1VMTVrteohhH7LL",
  "key28": "3QsbQQyfR89V8byVbWVkpzoZtMpD4GMJye7TA61SAyQLHZXp5Dh8wYPAPnKYWjSRrdZFm5ZpfEu4vJ2UFhZvLRUN",
  "key29": "cztnaagftenJrazGT7D21QWuEHv2d48YfzBMPf1VPV6ubYb8BZqVErZg6w6QHss9KxCHXABSkWkguhowjD2uZzL",
  "key30": "2RG9nRfMx9GD5MYeVxqAF35mpGCNgD1Dz3uQHGoWNWq1hAhAwUzW66CKpE2J1x8w77t95BXpE9BPwJ5zqMWyKsbz",
  "key31": "5b1S7BMX7UME7cC3vNgibHUogYSqMqWSXMPcJQnejasAViQGfsdoqei4W8hpuPBraLKneKefe7RD1CPYAnLMjGis",
  "key32": "3bVgTUU4q9uvgWyU6qf2nzEPDJEpsELd7HLzZkHTkV3WL3Wh9ELyKAM3UGycFDNBK9mAt5kmtYDm2WTw6oGiwEvy",
  "key33": "5hsRTJrrHF3zGLcRnxP3nhuY9r2bZfiYkMXLxg418oPtqSiKG435CZeE7E24i5S1yLXSzL1zkPJw2ThwF3PYk6VM",
  "key34": "2jBwRVWx1eWUcGhtNcqsAssazpysgEK6A2HH7A9rEAmyqFAqMamR4RpfT3V3vbsrBgYtwD4CKA3Zeoaj3sPTnaKp",
  "key35": "3fntE4KiNcRnLnwn3xaevqTWbcVUFvrswGwEptYX1sNj4j5rk8mDha2sBwb6NzFwBKLfcQJWdyt17J7a5R28Xxex",
  "key36": "2KWXTkVrgEnNhsGt89Pr4QLCVpcZpM6GEfk9u3Rh1FyCu3vXbgvpaArKWHDDRAukaDJeWKQ3kifQh2gStBMLRY3v",
  "key37": "5QfZ6hquuCVpBKSfCPCkZbwhC3Dr7TFP86yZNaN12nwuTvaFu8SLPPxchDgYs5sLqRpuAGSQQ5XSBCjguSuCoCdC",
  "key38": "5E8ia9aufLRhCB22EXaZ2wWjqXmxdUphYG7kzvUSnKw1HqoQJmxR793SuqBVCm43Ebuz4HJaNPnBwuGXW8hp65f9",
  "key39": "3Pt6DikS9YeaGaznCreQxUgcQ2U9xGHSe8MEKWkTKM6TSBHWaV9MEHb28JF6pRT2crWbfcBRc1QijtBNqYrKmLD6",
  "key40": "3T8wUyirfekrYEeSuPA56pNr6L2er7yg8Z2hMAYmeUtk6gJkWm3x4KNqrW5ctPRDXs4gjrYhBa8NMvUBGZX3aBbV",
  "key41": "57CD3e2L6S59oindyscPsKWHTNvRv1Du8tg6xM3vF2xbXs3ga6DGXCYZTMrT4hwbazazvb4kVtaz2hMDbmrDB61X",
  "key42": "4AqH45kCQAfMD3yq5Vuw8tzwQdpo5ga8yee3JpztTWfC8dzNpM2PozcD63bGR1FR95DdSVnuVUAVsieV444g5fFx",
  "key43": "4fZo88UMk2AYB7FpjNYS9eK5FiJW5eXkUMhuh6NXNCxyD9f2ALRnkJaRSdWt8QQ7V8Dsfu8XWfxuc7ZgPFxUc4N8",
  "key44": "b3E1FVXyqyd8wy8MDRwS57F4EPSqjLnivrGaBfL8NvWtGAmFvx76BzN7AkudXku2WsdhJF6hwJzH1i3tCh15zrU",
  "key45": "3KdwGj9oAd2k7as45iwiFcbTB2TaFxduSXDF5hhvg2MfJSdey9t4pRbcbadWmtwukLRofVgv4U1stFUppgLoRCLq",
  "key46": "2KZCwPS6tRkPvctH2AqszuzG64kjK7ZqthDWBQyuCjhbwjVFoW2aCCHh3i7DXUk7eJPoYxwT3SNAJEGdSVcajon6",
  "key47": "4rXVHfmHKb3P8KpwvWQsg8kUMdNcogKyatxjgqxiFWrFxAX4Ky3ix8pyWBpbXYL46KwLFRCni8rjrHV5JJ4cieQr",
  "key48": "vvE9wJ6a6c5XuG7jEMcQzK52Dvay4heaE1nZbLX6rmQt1LaT8Z9WLQ3wKPcVLaVBdmd9qavtDwao6SvacM53W1Y"
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
