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
    "5HkWGHYDHBK7WSfTvxfUAyktWT7UzFs2SkcURMZvX62vn9Lf6CoPUEHCGff8AJzyhf93qsD2GM5r2BJ6EuDKyCHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNbCcZ8myEz1yn64GsQtUp5VHcDMUfZ8Cc74iTfvaGuSsiEBDQ4YowhEyJAcXbBxXHzLKrffrAJ9eF4wdkUY5Sh",
  "key1": "XWWpP3X4rLNAj6tUkdm29PDoV2Rck7LD9FjTjEYweRUxUjGYyUMmN3ekptNWHG8yRM4H9ww2eQxjKD5RDMSkW2N",
  "key2": "6mZBfnJZ6gknXc1nQ9gf5LxXdvAdcLdhAjhppaiNd31UsKxc4nGWuCFrKGcefjmFqFAZjSX1SbT83ap7GzWQfRJ",
  "key3": "4amA1SxjUSwdXmj9fMkzWTX6imFwRNfT2j8RPQdjuaULynFp1i5pW8oDmHYyLaPqf4cEdSdfhZjQvtpbXaBp7sxF",
  "key4": "wtecAB4mYf8eLSiVVAtGVuei1mtWY2GF5hgiigTbF6KBkE3SNpPQbm1mTnv4JEMeqnTeyWF2kbucn6BdXKSptJn",
  "key5": "5W9oBTDkUU67EPy4CqChSkHAR2otVC8c1AGDCgt9KGRb9V3pdzWjFBgwGuttPxqq3B2h5WoV2zThsz8aXTWkrLud",
  "key6": "4DM2ujFPesBdo3icG1VY7miJRH1AdpsYTit8fBpTmiFnKvYtv8GLQwUKSfdDgCsgWGiB1EKz8GM2oNwUCgTkbhhJ",
  "key7": "5bPHs6rNEsEU6w1ouVE5udMkP4mHZsvPM5Cy3gQ5zozhH3qynds2J2ebZhL7aJsoyjyEqorBuypCY2HSuqB2J5oh",
  "key8": "3FHbFYF4gKwWYGwh34vtxwMuR2fvmNS6vrDNt4yhwW8DRXVYi53BYh98gXBZQfqeuYC7ZjYFvpz2D6tYwSvhAY1k",
  "key9": "3Ro36qGTQaKt2BmDQrXYGZYT5Dyeg5JNQLCh9zVx7yAtTZn1Fu1XKv61453vwfdwRTFCnWNjq277gJRSLs2k5hB5",
  "key10": "5txUpk8VjxwFvK457NiJ5FXB4EGUwbgLFt3zrKCb3yPqtRWrQdcxqY8nYvJqzrvMnR5XPz3mvosafrSMf8qH12Kj",
  "key11": "4Nf32cgpRWFQHEVnkXms6PE3MEu52ieXCSrx84RqboNxWSZRAPtNChX4MFsSwyo1WHeZjtDtTnE1GP13uPnDRqtw",
  "key12": "5biF3paTpEpFXeTc6UWQ3vgib4inoacaFAgQj6PTcKt1JbUK73vzj4GRMMRXcMhmq5SezCsDyYK4ZK78jHzVqxpU",
  "key13": "4ay9FohZkQQShm5PnJXDMUJJuFnVjLavAVbW5Vihb2Tq8gfsxhegSqbNGe7HYFfcjhRQHjvRAZeUKFhWUiVxHZ84",
  "key14": "2paZ92cZMCZpNWqAFT7iyuj8hidTdUdj1eHK2HjKecuzd3HCKri5oWMsPX81QRV6AkZfTU4pKjfwBAb714k38igQ",
  "key15": "44y553qurkRf9CT6mHaN2BoLFTPsLRTtitcwDcbSTjFN5EfW1L1vq46NNzAMyZ8wrV6Dx3rzACcnbKf3ERtfBGR3",
  "key16": "4Eek5GNRZXuL21Vs57sja9c628HYk6NoskwFj9wVorn7hQobdHVdj4yXQR2EmJkbd2Bscv6uyPCF6qRRm2cvTAXk",
  "key17": "4NJRaGxCYtRidF6arWuNeRo9sEwMGGDSqrxFZBkGBcesHXwqWNLgNCXqNnhvMgwqbiyt9JH5yxvSqWNQHtWwPzEU",
  "key18": "2X9WPo6r3FUDjUfp5fMagf64qH6qx96bS3xXzbGTcHh3m1GQfAUMEsZLrh3r4CPQguiqz8grgB9EB2yLLpdGanMX",
  "key19": "42BmQmyk9R4cBtuj4HQSdasmAm11EtW45hvauiZxcqbAFnXA8nuaxe7hkp1tCkKurV36kmu1r7JKqYsJ3Phs3FD7",
  "key20": "5fruhVjHRoAMCRH9PXQjowzmQaCa7ZRvyCJenVUuS4HR4EUDJ2qD73XRKmYVPuQTrKiZpKjttxcsoXNv5QfbfzQZ",
  "key21": "yf6JzjCAvnhqYpr8AHC33xSx7AX7wkbmKSvmVKBUkWDc49fgCyvVsawnJwAtzptqHtARoxmXAD2wxrG9n9SmyDg",
  "key22": "5Fg4NpkzVpHc84bQ4G3drAxq4DcVYD6vhL7z3bvGTcakR9vxKS4smrwUPgJr49d3yp461uxXnCdzF2HJE53QuDWy",
  "key23": "47gZy5jWfMM7c3fAuCzRaGNebZjXJXFq7fHSz6eMbaHP4LBt4rt15RjcEjCYkYNJUiAS7vvhudi4eFj7zwpA3fX7",
  "key24": "4V6BrT4cSdGuGZiTUeYjeyfcSxAMt1jXQP2atomncVpKa92kcb44dUVnH6HCHobgDLmPhYDbMBzuj1jzwysWoja4",
  "key25": "3ca4UuUQYTsJLddj1NhKDtJrbTENs8A1vnc3Uo1pSUAExrED3Ex2so48FnEZLWTtzLCvUYNLuQmApNe8pNRf5QDK",
  "key26": "njm2D8kYTr3ygkYvoh5t1cRDeRRCWZxjugUdKggfSEVjkvFA5EqxCX2Du2wzYt7nEiPHEvtPJijVJXWkmLuS4X8",
  "key27": "3WcLd4LRgz1QjpTrtGDAqVMaj5LFvZgjMYGBvog7WBBmhqhZnFMmHNVM2963hakN5oSxezp3uZvAaprAy12NeB6N",
  "key28": "3mTYJ455y9ZiinfTTL5kaoRNm1PkpKNPZWhJ9M5jhLTRdV98VsKUgq52vNVVKCxKkAmQT4aMkNj7aFWo7rkXhL6t",
  "key29": "3DQ57w6VuxJ7bBA2XxLyAinF6PbrmELP1ounFsqRs59Gx3R3E3Z85EirCj4mxRNioxCCunUbhuDgyibfzQ1163cj",
  "key30": "2Q6LpBUYidUPErb3mAL4W6ERagxn8kSXyJqd9LHWsCpaD3vzYtg2TQDciktokySGNGXfcL6CACW9Jh68WHmG3TZz",
  "key31": "5NVJzVX6ykiegUpC8W8EpHPGXdpL3AJyrQaXhiCCKEv4Av25cv8LgWVWE7RYgdcuAsxB32Xew3VNziQb9JVfYxkb",
  "key32": "2eJ8u7SKSEYH6JZeBRjM9t289RFxqjj4GTiKHDRtEFrBWHjWmCFPpPYGY4DsH9fBh2AKachcqpraegUsLFUJ7zuc",
  "key33": "5vAfp2Jm314fCUh8LBQWQjLdXdxxj7kezyBpfa8cqSx9MkhN3hGtYpXQVCbjcg9aHcobS3ZvVV7XQkmbG3AhKMTa",
  "key34": "5VCDD4ZssZDjavuv7ZicHLfdpvA7zW57GYEuvPJGUVSQcgWf9AP2QJA3ndaC3Ak14q6infjEpcKLR42rAJMekFpq",
  "key35": "3nWSUrvEnfhsEtsHD5mrabj7hjR92yrq9mWfCcAcxug1dV3Ar4PjZA1QvnCceVNjTsq8vbcy7VR4FRTeoSt9JyXs",
  "key36": "3YddFE4n76LQqq58uSiZtKCsnNUFiX4ebjvgsiK6Y5tVCiAUZUCQzwsTmSvFn1T4LdJH4RVxT7UZrrgEKu2uRUSy",
  "key37": "iG3CdzsUN8nuSmoePX3TGsaLruGc9DPUtXkTPACcRtnWb4citenV7j2xeuogJ7RtqkysiGmzUjynFf9ree4BVF1",
  "key38": "59sDrPkJzKjJ5ttNKBhYUCovFZJ6wYRagERFbbDZSRYeFeJjHrZ5DRtN6PY46ZDM8GSdmXRBujPVMjZmEiRXJfkm",
  "key39": "4AYRjNovxFxeNLpAw32fE4VhY6Q2YZBxNZDR1m1fiYuojMDAaAng27vqVs32ppMoNjqsfUjviYF7vV3XXARZM1U8",
  "key40": "5Ns4VvCVUdSKE5t27mpbYTYHHtWxB6aUCzKiQFtQcnU3hetuYZTeuKqbmYpkwunkQNinKyMo6ABMWSz6oiw899rW",
  "key41": "1VAr9LWSQqiE4rRk3HfXzg8SU5fM2yu9ZkikpotPRbLqMQoWC3CjbDqWb3vSDG7ZeQRwvVonHnaEs15Ve7X4c4c",
  "key42": "5M2Sdudbt8R21GxmUyBjfQxbh5ChbctXtb6cfJxKFfWc8BaCrhF5m1EKQNZ5fLKB3RuwtR3A5foW5iJAYczYbR9r",
  "key43": "5iwdAjqMhQy7AzEyDGyRgXvu4mJLBLdjSojoHbTCPXodAxSchSMxF1ZCSySTGf14S3wFqMg6Q9uciRgZ2jWRb7Js",
  "key44": "DoUQbwAxkpmsJgnqk5HGnYokUtTi3WpqYgWyAa5rym7MEdZGAoUbc32U5RCUUZBDMzyr7Adp7UsRaPpb2otd6q4"
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
