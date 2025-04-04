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
    "WBEVa9pADsBGiF2FZbJUAXyoSoHRKfc81mHLUciiaEZSze6SjF3m93g7yu3TW6SBRtVoYzXcxhVzuCJRvsyZ1Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5vhAAvWpcdN8Pw8uBuDExnqDpdvVHLDYM7bV1qDeKzmc3QBDHiQMjBDzgeJy9uJ6A9Tp74BhEm9Ec6dFFDAPyT",
  "key1": "642GT2k9VfzArw7QCxwN9ArtwFkYXmboKsSPePibXnQUriyQcCkQJQaawMxqR85poYUgFrg4vzjqfLxkH5ogdsdZ",
  "key2": "25tVcq144LSoxcoYsgLzHttKXpiRuR375vNX8ZNEwFiyrH4gDTm82AELa2FiaiuHCnw6G7kRus4q1tfq9bJZCtSS",
  "key3": "uMay543G7bD12cpDmpiNkMduoA1vRcg7ZFoAbzG4ZHZiVtr42uWF25zo21w1FhWbKrYvej5SZGF7aV3mFRjAL6L",
  "key4": "55VLGhj5oo2QYMuQEwuAm9WB2bRQhn41JNDZdkcqek7RH5Ac3KjGcwrjR3ujZk3ewva5LWUYjAYUeyojfuhVRtQe",
  "key5": "5T3UAsVp3KzuFvNTitEUWErXNXZmYKsD3Rmaa2H3StevPNufuKJE3V6FHLTgdb49uaNE3zf282jVqFb6zF9LxhdF",
  "key6": "49b3odE8wRLQ4cRzQgyetcYFvQ4iS6NXCuijhPtiska9aZMcbiYxi1vy4ePkJBuVXcrMmhL5AMCdqNVFDcrS751r",
  "key7": "5oeM4x9djGBuWq62CUeFych4pjv3fXPhcHrg5Zvoc6Cypx4AuNoCW9pkxJPJbbMdLiG6kANfYXHxHT8y7Ropyrs2",
  "key8": "5UHAJJm2e8arFVQM673Q4h4ohVdmoSiaws8D4mwQ5MPAVaNt7Yew95kLYW7ARScbzwotZrRq15SJ9uVgiJQTwxyY",
  "key9": "cGMfpX33GFGmKrkjUopqGG1tKWCEzT5uZAppTy2TA4Mf9gthvkm5P2CL8VFBDX172LTPMpsnE4X9xScekTuxNJh",
  "key10": "znxPKCbWaBMvkGR53TZHmLz8cUZtraT2rQRyHpZreL57egCFk9foifDekNMNLBTXq1S7eE5bwGk2Xq5PmvBFMw5",
  "key11": "VQPQMom5PWFkfH9C6FHw2mKvcTs1ssAFwawNH72yfXyuLgo8k3PYjx66HDG1A3JEMSPhyU1H7GFkFshGr7AKZVF",
  "key12": "6kVA52Rn3vQqaxmYms3b66vyuqD6ZLZxP1TtZc6GjdyuGwVLjRZ6moVPbu6UHGMVwHRQBDtFvsL37pCTLx6xVwF",
  "key13": "2rxvcbgDkNXCMdptswpBpvvC6E4RcAVvgj8T7z9N5i75d1utLdegdJEW5iZBwywjzLd38hdz3RB2jHP4vfYbVxCy",
  "key14": "5SAT7ZSovGJVp2WPLPHA64ShWz7QDyua3nCstEqkN2piPA5B4tB9bXLfMWSYeQUY1SdmREKdExNSn7njbWU7Pirf",
  "key15": "2tWBzYPiouA6ZoF8nzLZpxPU6ixx28dtnGd9zTLXNbpFM5NyyZQcN1THEod8TW8G5Yb9Jm9VTHRPJ6y1PgycnM7K",
  "key16": "5EYMzc5Wm4NHHWiBaxynZPHFNV7vuciAdCiXxwDJmsgcT67nmPnd7vqafj9xHHcpSowToSEjQPaWnCvRRyZM5QB",
  "key17": "X13WHSWwS5hWtsLA2nPKjGj9wrVw9THYo6NfTewtSsSEyQTiE99jXNpa8z2R47N8KBVpWW4Yb1UcoM9pPQpYTcM",
  "key18": "4YRqAMVSRTXzAvfjHqPjPuK8qVtAXDhJ8ybhPx4u3idUfUEke58ey8jBoJNEQgyX68p5kx77Ue2QNtxTJWXc37Q6",
  "key19": "2irbKqFfCkrtzC4ZEa6nVYLbdoqb77Yq7xrXXDtfZja55pVj5bNbM6CD2p975ypg77A7n56wJ6Qbium9811Sf9oR",
  "key20": "3vdc9kzvyUucdzaSua7bp98xJEt9msMfrzYh1CLQLAKgxdji6BYTVXTJEynw8qMKinKsb7D89DEkx9VXiz6RD8SM",
  "key21": "2hvk76z2Y6XtHExda2ZsEgVM1VtV9fobrRq3kwbwEUNQVXmMFyKMyLb5HNvuSX7MjXAv26xa8hFQpJgCTNzemgWS",
  "key22": "2JxrW5oPA1PVtB6aZWR28zzqz6tCu2LYZo1XruRqCS2S3Nwe1yuRcwNst9M9rj8egqqgpevZ5i1w3YxNLQA9oQgF",
  "key23": "zcVSgcbR4bSJqQBtTFtVHjtfiybtmUEDzDX81hRDhesAL7w8rPYGa92CJKj7JQgBJpiqeSbRUEG2rKbNgmuomPU",
  "key24": "3xRn5yjj4siF8fZvUrT2E4uZpCQWDdhJShVCYzMzEmpYeWAgkyi53TvBG8hzyYE7LfN4hqvmQYg95ygQdSw6KGio",
  "key25": "2ZyP1GNZJLJnrXSzCXK9F3azMsKdZH16mRbWX4hwsTcyD9unqh2LVKWcFFhKSxNBZ5kutGpJWdQnAXdfMnjPqLi6",
  "key26": "38oDLN2yj1mqqxe5N4Hdzm4XpCyoXzMkgTh36YzXe298H48devTo4258xzbBxRRgtAC2iZnXTcG6926LNFh1txFk",
  "key27": "5FtcLXxPLMabC2kSQENQWVe5M2nYdBo5Xbx7zZFNK1sQa4kAeRKRNSxdBqpZ56ttPHzzUtEYCVCwA94ADB7SaFLk",
  "key28": "oVJcSnTcaYSHUA7unyAbMGVtRjJpiZFrPHb4PrRsE3Q9B73q5ErAXf9hSpuLaNd71jVDDDghXbSap64TxEX4CqW",
  "key29": "2rMrWQR7gRT5sswcx7LdYb8b8MkW9aTL5h5zZ7cYuimRjavAPCNZhDagVFRzDMKVUg7TANP55LDeCcVApJNWrEBP",
  "key30": "5api8XTZm1Hx512imVrLMCCsrMuZVenWPjhPS85bqwLPoyv7cbM7t8RJg3QknWKkUyPnkwKeE6s7HANfJKrEW1sK",
  "key31": "5hPbnn42Ga1yL5pEuYYHMzt9mcgQBoDsDQp4V4DXp1w9NKN6HU7M1b6K9xoRXnum19g3PtsfUuNkviyAwm2mDaLh",
  "key32": "4PktifJJQ12dkBnTAC6WN6SF91AmFMg79AMubXUVRWNiPMjqxLuicN7Lxtfea4PM56gyiJ4dCWLkyVhJ8K4kFHJZ",
  "key33": "5p2tiGkXzsMB4eQR7xvb4aWTHh2auiQbjrWQjhPjcYjep4REci6WiPEZ9vCJUZDFFwNM5DzMuuvSoeCM2dgsGKhK",
  "key34": "3zuWppf3odh7WvpxMSsgaFPqCwhyHbXxzsQnMX3bCtKHjEj1KuvT9ShohCujPiGKSCweSznEGBVdFBC4yVWf7s6j",
  "key35": "3eDd53jeeeQ5r3Zmor3PZNCYDHuK9Nycck8BBirht8DbcRvqtzG7xzZfydTGjxMG9rLReiYVEsz6tT4n4ycHCkqM",
  "key36": "49icN4qjkTbxUtk9r5egj4YKvBzzKkba77QnHURUxGfofSE8HX75UwReVJ8zvGBgPHUoDnioTGBs9zbzMzYZPjPD",
  "key37": "4W4N2kfoPG9miZvF3ceCa3yahmUYqARkieG2g93znU4A8U7vw1AnWCF3cmSrhkGB4QjfhKXizYDx7sR93uGJCUZh",
  "key38": "4jmfWcjaWtxKMAtNaxtQHpxKKDMnjGGt2nNPwtbaw4qUXXzuEQcMsWRyUW3S9454qmdijGa1gkgwdXG4WUZWGDLZ",
  "key39": "64fuEZMK8rQh9W7Py1ZiceFjHuyiW2jDnm1aiLmwMLZhoaDkvw3WyNfLqPmrsV7UXpxMbifF1gn57QkskyDURaCb",
  "key40": "7Ri5QYLH6nRuh15zrysp9d3fjNPhi3EtH2Ud6S1pVQqsynQQRhWHfrGw77vhrn7oyYrnLr9m7yRGomXeZmFVBzo",
  "key41": "xtmbgXokLPkcUFw3hUDgsSsR2GFRQAHJzWck69DF4Kq6K9UsGesNED1MagRE2LzqTTWgf9LQZdXZnwbEbGEt8Gs",
  "key42": "YMHia1HCWX67MjyWFfcUNCWijyXhEn2CQezztQCudV4xtMnFLPsXndTCseVgagjSsRYGcBccvyUczoZ6iy6t5Fw",
  "key43": "2k6eshp8uapi1tFGc2v6iLBJsbLF8CxGagN6nvg5pCPC2QrWD5EUXkfdh3UHJSgLGopKFcBN8To7nRDBkvQMMk5E",
  "key44": "2jfxECXgDc4tM97aRAYJJa2VG4XAEsdYAyASgnhR5ooydDjrPDS3o7beD4rb7pUL151hXtdr5VtefeT6mbXzL3sw",
  "key45": "2Ar4mLnhaz1KpE8m951hEY8ij4rzyqDXZLjdjetKpXXoCyVenD7dtbj3SqWmACkaMi4d1qZDSfPPuWfsNkLLTu6U",
  "key46": "3Uk6oYmUquFca9VoFZnsPf7nYTAbXauoAcvfDQoZyaMCcw6NNe8jSScR24mski8fqxTJn33fYdLVqUPxhamCMzww",
  "key47": "2KhBPSPBbmXCJb3S5Pw3vc2ZXUxVa12V43nQ6oqeWbsrxJCLeWpyNXs76ZF6Yw5bmYpqhzfAy1DYVmgx5kFJY6Po",
  "key48": "393LHjph87Tau76w9nFMwQQz9fHYy1dYp7LEYJatmzqVWu5hYb3Uq3F3qmu2GZP46sp5cdcVoK93cD2gDB4ncEC9",
  "key49": "3TadW3guEiu38pd693Y2PEMMAGNLVdkDqqju3JxdLdjHRKD3xrc3kLKF48TcmW4FZxck2WqTUyYG1eMXAVAQR9ZC"
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
