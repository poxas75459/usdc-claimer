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
    "nmr3dnuRpD3okLqQs6tYR4fuSEueo68ttzxXAFPzH1ga6V9AY1m4n3qhYpCuxqARS1ZfPTAhpYfygXPbwq6hpKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6DnggnyfBeV4ggs9cTAWo4hutGLD93hCiStgyXtmoamEXrf52VZ4aXzJKFNKNcyEHD2LdMYMGWhNtSq3Srimvy",
  "key1": "3GKy1AoJSeCZ23XJdd8JsAV3bXNPMVgVG4UNsSoB47KwhZunDZevoEGhJZg2zm172fZRuXSpSgZn3GooB4tTbodH",
  "key2": "5r2kHy4gKwkp8gsobK6yFbHM9J1svnk53UMZR8AP7MkR7yPXXgkYHTSgrP3RtqkLS9cXHRDzVoWYR7D9UfRrnfPp",
  "key3": "4fEG8vEpsopK4LizMAhJnroCtvjsr8K4pmi9FG2MrPhC8XsFT4kVYB1AQv8ww8efVvvsvUBWDKm3TnDk29K4JjFD",
  "key4": "2qzrropo1k3yn66vLoFmvZWgUXeae73BWuFw4iW7sXPYkpqMYq5JJsFTVyzfwZjLDQ9uB6Ra8M6ZTAZGzVyvNhpQ",
  "key5": "5WBmgskmeZekPJSNZxonCXfocyBXw7on8WGRAyr6chFjHv42C7Z4aR44Vp7tPAwjaqkGSfG7nVFc1EuaSNxxXvCA",
  "key6": "2KrVVYjvaqKm3UacFhuuW1c39HJT7f5Yo2n1s3kjfPtSqXzMaLmoX7YgwQwcD3yZx3cpdEjxVZVCLiFQCwQsxLtD",
  "key7": "4vof6HJbdPk26UViwu3Tjwar25pk7hf2BKUVi2kSjet2VYCMYnVSrsovNR3Vu3RRwEGCDPXJ3ESg7TL6ekF4aFHG",
  "key8": "CJSvoSN9pXU9mc8KMoZyMxarALvGGXq8GxdhxrfVoPVjqLHRLBmXeF5fvNA9CiuspPsQPPCbzk2LpN2QHe1RYxm",
  "key9": "5Rc4vcBUAgSzuUqATJDpDrkRVfkDheB4eWEyZNLCFEcQcFbVbpERfUNZoNgt2aRQxvLknB6baEQXAfo7N2UrUTbQ",
  "key10": "4EHxLRqyVtpKP22F9msAsxPNTC6ga1wrDAiF6KziydieABcPtryfDwW1GooQNCEDRUJ8gYfXZLrtH1iMzVC72Zi4",
  "key11": "5EQb95Y3fLbAJGNQPFHtkrpk5b8nJqj7ZuCK5G8gyLFEYLQw3Zv78jAfo7XuZGUAqUtrtnevtYzPQCbpMMmaZexv",
  "key12": "4pun7Apvmg5KUD6VpMaVvGLJ5wtzV2BLv7Uh65fr3Gpt8Z3c2jgchYbj593PxaWKhSwZaUhGq1Vez39XVgkvxny3",
  "key13": "5KdTmx92JgcfCmPYC8dC4WXDDeWrVopnYK4Sg18bRbVMZZNrzHmyiVTkAyS5FPMw4JPgdvQVf4fuxNKrXNfJow9Q",
  "key14": "5Z48wu53MLkRUSVVfYWgms2GRbxQVLwTkLR724pENRFUWmttUiDsRwReMYoBGD1FyE55gR2hXpip4tPX4wMgLLeU",
  "key15": "3n7pZdJaE5FWRjwYNq4BND5yoSDRYGuxbfMmFrsFGw87xWNqRHBsRiemxsehFseCHj7MN2EgxJCxXC4GwzsQ2tDf",
  "key16": "3UFVe93SktAh94JhtdzHyZnnbAoju7wHPun8zHJYCVictjB6RyyLNa5328P3GiwXjkct8jvM7WMNLgJQ1HVSySd2",
  "key17": "3irGhQeXDR5NVieb5fProSrBfVNqJQhNxoGfQDTzU3RgtQKDW1Qh2md3kF36k3UCHQhHPfWKsvFG4iZXfDn2MVz5",
  "key18": "2xb3Qke16dxCSpmhDqT6ffgPd6xNt7kE5RrJNnDWUfhxnRSYJ1uQ4Q5rAopqtvoKCeHh2sQ5GazRLuCxjwARD3Yw",
  "key19": "TB1gAbHJ4dyjBdYqCuHU7zBpJfQS3yjKgj5Zv1zrLN2kw17YjCkzj9i5gUYBoSGBZishEBdnTAJSUfKMkQRPRNQ",
  "key20": "2CUvGTcDaLxTteEXvQoWxam33kSDDn8NpWBxcWLtD9vbUTPxi74XAnwYFPc3mFckPBxC4qbXtXqGMBhvgQRNgHek",
  "key21": "5pjVUyxaG2ojvCDYi55DVZXRDYgc6zzVAYoRSyPPGF6uCwC5smP52m91X47jSYKxeFkXJZm6KsB9Zk1MHHSjumdE",
  "key22": "iyjgcsQBzYj6DgC3k31jZHyE1WwNoz6ZcFwBZfWs26ZqL5zFGDz1nXrdj7cX9qH2oJwucDBXrHBC1L9WHS7zxFm",
  "key23": "2RCE6orM4TdbQeZpMNWEWGZdhcaVQyfDNv4dwDkHwdHD1Y744J4SodH8Vg5K9BoXWHRZaU377MD7GsPMZdwroWFU",
  "key24": "3dMPhKLS47MEjTQqXFp2rRoGTm3BEYdBEM6mQw3QzytwHSgU5f6GCE45xrFiABHY8NHankjS9nH6bvVujaNMziYN",
  "key25": "4i6NThdWaErGg4oufbAkj2ox4TUAMm8RLx3DV1JWXcneUoXjk93L7zuBGEokLtSB73f6a6Q36jMzFUnvyjVy4jX5",
  "key26": "2nAEPN9XGVWB3ZwzT3Xgh6Bz94BGu8dsVh4Cy8owdg4MN8uzNyFyuSMWKf2kvF8dRf8DXVkHoeMUVysJVyzecofP",
  "key27": "4yeHmMHCSU4jWiLzB4RbKHNSfaeYmwcpibkAApcuNbBBw8XadV7VV7F1GzmJ3X2rG9wYF4nAetZwboERg3XzpN3r",
  "key28": "3uS7Q5a4EhiqNgrMDyEaWWpMWDJwrVSCU7B5Zbg2MoovirkfxD1B18pCdPpa8RTRmE5kgH7bYXt6MbVBEp69iN4G",
  "key29": "5hMBUsiLmcVEaBKHj6819r9vjzkHjjH9xLGgRWB2rXYHtXuiC7kY4yYTuH1rmioS69sgriZbgK3LW88nx7Jf2RLw",
  "key30": "5T72CigswcLn486h71EZmtqXpd3EzzEZxjMoXBm95k2Tbnw9uFVUSiUnYVFASKb2gY9kpPbrxRTV6Uonk6Gpq5do",
  "key31": "4YYUBKTBJRr2TtKanDGK2rw6CaueWg2Bfpu2G5nNS5dEjX6YMA5G2CbsvcouuqzaEZ8aui2Zyxzxm6ufyEp49jUA",
  "key32": "msmxiGBF6vPh8FT5phgfpFHCs1Wov3Y8XUpYCS7L7JYxXSmyiDY8pZHDAvNFhV3eebHWWCeE3PejoSRktZimskm",
  "key33": "57k8iy6uN867ryCuo5knYsUzw6TrvpSJivwj3NPgFgiEeAAJpNDcAjBwwxGWeTMV3zHJDrGFSsKpPnthjRfXwPYy",
  "key34": "5NGEMrQFtzzKNB4gr7WzWzPBL9oiAkP2ku2Wg5RYwzSemarRdAHAv9yevTgC2SSwcDgE9Xfh7EwaHvf6hcc8PwV3",
  "key35": "RThYz5a7uUz8y9NrwtoTGszcTdSxukZWpTx6h3VqWgbuPdrsJPu9ABLJGCMwdFAZ4uc7UAD5MYM2ScBYvU5KaDL",
  "key36": "4cDDL8dsBf1FHb5LF2DXyDH7x2t9hxEzGJR1nk93nCVfgfyM9JtivRwQYeyzBBq4PQVGAum7aYuptQsNkabkVB6B",
  "key37": "5J6L9VcSnxs3dhiX3yNxbNPALVz5YfRvY6QdDAWKJneG24psWBTzqdYKw3phWtBC379BYQ1CF4cZZW1MUDNnUeyP",
  "key38": "2ui8JS8iXNYKJTUv84ofKfwmbk6ps383avtqvaUbHb9vN3ie8rWGnLFoKDggk62tpKQZgzpbVFkWnu8JnxJXgehv",
  "key39": "2iR3vQw8QGz9q3JU82ggiHa8zNZBVdRseR6cqoEQGY3cUMdDp5WvWJyJkHeWkbnQEHRszVoeSQuKxc8vcWJEFqqZ",
  "key40": "3avEH1YEM2KnPFtNePHYM6RvZhuCXoPM4GbHv6GeWwKAYep1iH766iwMWdFKTJs1HHDdGvQEWAyLVQvmMUywjL5U",
  "key41": "3wsuaGMLrp28x7Dpr3TpQ2fzR6BfrnpvuMWjWPxoEjpKXyr32P3czEetSVJ4zGdsb5PCXk8wpScyxoD22HNS5JvS",
  "key42": "4RDAchyE7DbZ5WcuUbstUVsWdkEG5AdgErSh73CWfEmhU8AerbDDxMt1yzFKvHDYspeLFFz6zGew1ZxbLdsN9GN4",
  "key43": "3YsH2bdbWC7KgJdtNkV1izwBwPjZqbwzGUZ333eSpPLQ2Vq2Fn2P5kcWujBPYH9efBFdHh35yCuj5RDTr6CU2odP",
  "key44": "5c75sdEfw2Y2xzcfM2VpXqUn1CF8pkghirN2b8yfxm5z2nE9xCfJGrJRT83SBmkkPpHG7jMFbQGoHrmRkw714cW1",
  "key45": "5FaSRMXAQKNqtpmtaVPGiqxQTi98FNnrwSprTVQMPdcpBHiMCaBoHUUcSLEweiw7Fc6GWyFTDmfvxL4eqC77F1B2"
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
