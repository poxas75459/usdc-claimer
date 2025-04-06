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
    "Wv3sLVZBWc5xgCEeKDCyjVpjfftnmdbXV3tbnX16Mii3x5kPv9kPPzETekZf29q4tku3JygZejqyTEVAoHubYV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYyHz3DExZsA4FDNft93adndEn6RBFkJHbU5nRkrnUnYmnnXnFvGcMLEGzdMfx7Jgg4iQqLX35f7Lt1KAgVCyRE",
  "key1": "3UyTJnnxLn4RtK6CwLeEWW3KzdtLggs93CrrAMmgFEA2qaGtSfNBX2DimjLZtRDCu7hUtrRZS31ZjEnAcfHiSTB4",
  "key2": "2gY5NMjEaeuhzjTWEDnNs43ztJ4eZ7YENHVAkUWJUMiKhgum9gu8tSLandCVh8h6TkbJz3J3tLShtSgKsBuRX9Mk",
  "key3": "2FE24813zBD8cto9omr6wgJ39JyWEW9yKzCdapbfRVdy1mDH1aRHUfw8bnV3rt5uoYeKMaDxbkCwKyWqdoBaJY9a",
  "key4": "32bhaX95gMfYMvsHXafj1dBUcNKXRzuRHYVhSvqqwKcyiGunUEm22S6kKn6CL3VzBeFFFM1ntFJV36goTWE41CaV",
  "key5": "2esKLMG398qXjfi6YvLexbxVhAg9TeMsginuCG7cySqR8SgZcY3DCY1FTndGMKWGgbexa198qwVuLVpmf5qSXzuT",
  "key6": "56A4Dg3BTRt9c3CYT5TnAs92XYmveEQVhiWmSgfcJfQrC1U8XTKUkhBZ6rWioJqohpbakMyWcPbQ2M1rcLgWKgbX",
  "key7": "5XgSou9CRRJWKyYRUKxZDayfCPTS2JrA4ebrw1ckqxEH118kznKuvkyT3KQJr9GeAEGYWguahddqoaj2kKereco2",
  "key8": "2LSGqCDAJNGBstRc1yjXVDNF4yAizfxJNV5mm3XEzAupRawemmJ3sCzCaAY1YwcDxQvNtbYBX6dso2sHvBhprmtF",
  "key9": "nTip3j8DyqzjQLJEqjHmd3yKBWe2iqDAzuCbZHo8kVrWWs98qh9Ynz9W7dG77Us6VASLiLZsbM8QSL6ZJ3A9M2t",
  "key10": "4AVWxUsSH2Kk6DECHDs8WioKDF3wLS9gx4Jdk49HBk95YMMJWdnGVXBtWbmguTuhKnLLZeYZYHTYjXZGdPspxdh6",
  "key11": "46J12RoJVS7kLxRk7Yi7Z9M7ALBjQJ8ezEMNFX2zJj3t3TucnTLdJCLrTPjLUA9DaE39CK7Co3b4b7wVGN9XfwME",
  "key12": "3qfKcAzSyosZdRKiR729Ap33qAa3jE4uVbyrUbWa5Zqk7BDhQM5sxmhgVho7mhVb4tutgwyW1ShhncDKg1dMiocN",
  "key13": "2g1JUaeWkHDaJh6H7LShbN7GXj5xtPAyF9kdGNz63o86JkwaYwHJJyLnV5yxnxR4pmqsDmfU855zkcQQCm37mHCR",
  "key14": "5PLTf3EzaBSL7vnJVHMHkLyZLw4a1RaZ2SN62JeVce3J3Ag5169JCtW1DwvYLgV7Nh2ordqHBcBScrXGcX7hHKMK",
  "key15": "3UmKmQmrJqEeNfqGtGVriCpVbrtnUEUaLwszc1u3HoQr6J7vuRemkkBLRAXgazhDBGmyt2w8x9N1dkGu6xaK2WUM",
  "key16": "5MyYnWPMnySy3fFHtMSXNxUUvtSPa3GD68SKGgWSw2L12X7EihWqQJy4zubzFhq7b5cHYUEc5WmkW8ZcZqPdA3RX",
  "key17": "4uccdBgcsEfSdJdHPcwKxH5J7odH59aJGAz7Ky2ZpMAwEG1ErNnvo3wDsCoSXferEAnnHaQjAF8oCHLWfKQ1ys4g",
  "key18": "27Y4v1owosMCEz8DE5pHC4tpFNcp2mk8oWYLodyZ9hLUAcTYRkQNKNhA4JPghG9RjsMFG1LAvfzK7rUGgA6U2xP7",
  "key19": "3UCyoUEtAU7PBQstS6wBD1sT5ZNaLw4Wsqrb8mw5titQEwRpaYVeamwCqkmVmeFFAQph6ZeFLKqpgSbR9GEv6nay",
  "key20": "W6yY4pDcZyxTjjP6xeV3Fezd9NZyot98bKiQ5gEdbP86ajUd4eJfZfisvUN74aPm7kecRWYQLbBwTsZ6UtoXBJQ",
  "key21": "51HKyhFSRNWq4zKditCfUunm42WBdQ8DW9rfr8HteNtkB5Nob82J825f31Nt1xAnGhonXVB83G6HXXpUMviUUwWi",
  "key22": "CbGr8J3NVMWnDehbE11nj5apbVXhbtWY1iqiEyZeFzaqNxkbFwpUkw71vCmF1GstkNk6J5G8UWyDCLfAfW8dC3d",
  "key23": "2RG8UD7DmD1cmBhusDjN4H9jGiZMWKzvGrUB7pGXEAdQr4jDecmzc3WHaMZ27fWiAqrrd2myF9ts5W1adanbnHRk",
  "key24": "62h48V8CAGH3NLNrEQR1RPcGLprKN9wdbbwcFahwR4uyFAmtdaZX15nxNX7UKP8wJL3BRVD1dcyMk5rURko3GHRn",
  "key25": "tSEv73qZhhcrAwHDd6zmvBTYDiMUwk6DgdYb5D84Q7ouY4Rtk9F36z7XRVywBa8ULP6MTYZhNtJCczCrhDfJrJX",
  "key26": "4nFCDLMXMkwMphW8qXP7JaeXTsGk3FNsjNipYL94ajHBvmXUZSCoP5Eoog9BdVHcwSjghsA3LsLSiobZ3WjVhNLS",
  "key27": "3HFSwbtUQ5Nicaj13GP4x5dckA2UK7Et644SkvXdQcbs1Ty6M3NvZizTpay3az2waVW4NsLjGbLrsxYfPzWSfZMM",
  "key28": "28g33yMBfiRmjrbLuRBBSUaseDPMqgZ2KEfAqB3W5ujBrZA3Nn2CYwKWvBMbBe6d826QMsxJjJGJEwSwMePpvnHs",
  "key29": "T7svNXGruTikgJWnCu7XFeB1KM9XG3brjLpHMh9CZtpFAknbVWkLyttumtiPEU746aujUNJJr1Qg9gYUYszuU5S",
  "key30": "36TpxGb6fqCQ5QxdvbxiDBWcv57VH6jLt8hGV3N3f5DRCprqVsvjCiRsMLnG416VDeGvm6gZRimRDkvaWAuDBHrL",
  "key31": "2rBusLQ1brJK5YnXy7xUhfjFrpWdBkBMuz3BHBbFuoJZAKPTB6PFKY74ybZJ6xkHxPJ9QupLRjFWUPX78EwJWS53",
  "key32": "2zEZB9DubfVh516Uu7KLVA7Wt6SYKDojfkiofNDaR4CiYVw7R3ZUF6fCFd7HKetuijpRnVLzdUZB4aGnvGxRNQMA",
  "key33": "39zVPX4xY8TECHzUJMGrZCV2hdanrNgxNM7bifQaEATESSBmejnMkvCzzYrEKHKhS1EfkUR5qyj81ee9xd4nysf8"
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
