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
    "RXXByHaUbsxorVkmVAVvG128kPASCk7mjTRp75VcoVKM32oceHbntXKuhmfS996zonzWsnJHnh4G41wekBSNF94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TwwhxRA4UNFqfe44xpUHF1d3ttG3qMfc59fcojbvFjJgsFXBNP2Xy7NVSP3ZUNxGw2wZy6FWwhLBQQAiMnFQan2",
  "key1": "49hTuRm6VMVymPcMw3jAdJG3DXDrKsQF26EpGD41mzHGApCysVZRXUJsmDhDPu5rfvjeF5qTRKsfNnqGvTiPFpNk",
  "key2": "5CK17qqgKYVxj6RjeiGBd7w5wr3rXSM1Pmhv3pasmW41froiSHf85ab3AxdFm19SwbhHBvgTKAFRtJi9QVhU2SaL",
  "key3": "AaZ5S7HXFL85MQbZ73cg6VfARc5tP3t2pWRdZnoBAvN8y8qA1kFAXQmzmmBHTi9ARdvvQ6F6w6xKPp9t2nJb6Y3",
  "key4": "3M1AJ3qqEtn6THNm8doj4UjMjHxTiXGZTeU2hfJd6qpAcizLdBgWq61gYc3dAdASFfohkGGn8uxzr8hFA9bSNTNL",
  "key5": "ZhHKtH745UFwTXpDyck5sF6vYfWygLiPCb9xmfbxVT4UFPdRzRoNjA7TdsykTXnkD5YSNFFy8LWPYUJ12YM5pnD",
  "key6": "BTqGgpJDTLrbR2LsS2XNcNqVCS4db3GjAbzqwDqepeSZPVLK9RyPFxHmpr3sceFe18jB5Va6MaXCYoo25Eb3e36",
  "key7": "2DXj3Pj67FTV42doXB2c3LoHvLFnabPT3VBuh6qAuS4Zm4unCc33VHQTzKuy3oEgG6QCJFuZWKCZJFtBBQDn66de",
  "key8": "Uxz1HQ1CmpmFKLx5w2Z8YXzgzhKP1nUy4nE4uf3jumMYMG6sKkJgiej9sNQF8i2Sv9vuMJDxFWYoQYy5TQAac65",
  "key9": "53XeC6swL1mw1TJr56WKvbUuGPCFD7Z9CPDpFowwHAdrT5xDe2v7GVKf5Z5yzYNDXe3TSZRrJF32D3s8jrQ9Tq9H",
  "key10": "3rWB1sMU94Lv56s56hD6DtV4grLvAzckV3w34xjAdwhtM4rHxqDfQ4C33goKGVjZiwsH7EXYm8exuzCtTcUea78h",
  "key11": "4GErSZktFxkUQsZgVLXXqVgaWUL4vQuriq4p4LTsRuX6crCMQ4Ee2xkSYYoEFhX7iwFFFe2QcCxjGT7X52ZBkwUR",
  "key12": "2s72Ve3VrCBCTmba1f7MyVYUK5UYajnLQEpvoArrrGkVPzvXD7wbc56TGg8BKkRqaKb8BofoDWY9GFgD2pNAvzaE",
  "key13": "56C9F6TDrzAWPw9yRG9Tjagkz7HoTGjVRhz9bK2kQ6Y3VFZSvkh6VVDSQhmjGC1GV6rWbmMqoh6yAuiSuz6KzmXu",
  "key14": "3oRrqAsujH4ZujEajztfSYWosDevuoo7u1L1khxLuJJauHsDZXbYfKX4TgwKzsUz9KJPJf8gD6GXF1i849RM9UHq",
  "key15": "26n9tyMMX5Jt4wFaw8XKXmuPheAxZwWzzebF6YUP3YmwGTtUuRmJAMDWqXdZZpEbE67WXwZvPeSARQ2hVb5VAYfG",
  "key16": "Yh1c4Vy8cxdju56UidXMDcaKf9gLtGGBWNuiA6frsT1Zida8s73WAjbq8DyLhWjZVXcc5zzMxiAADQgLv8G1EY8",
  "key17": "2yFL9H5svihumhJFfxRCQTmdptGCzaBdpgzjdL4kiw5aMPBWSiLw3WY2h31ZcEvgXUmqLSgsdUZqaqyhHc5wTZoi",
  "key18": "32ijRJP3pMfG7hP1hrha23xq9Z6LQwhfgKKXiuuVA3hGEGdfmck6qwNYbQYKeSCfDNXrAkk2cTcpSUDEjnGXvUin",
  "key19": "3HwiEVvET3SXh3XBCeZSErHqoKceiB4WimFemfddgdsSe2iA437jPvtht13LwrhnzLLpVrgAgEKTN12W82gXbSBy",
  "key20": "2HCRRuxLLWvFBt1cZF93xDV7Cs8cRfJxZDVkSz7jxdWLEPuh266bj8tcTyFsWKdNXMZkJqC7DvYZSwMVT1jYiAX5",
  "key21": "5g7Sn9QKytf9CtQ5CHcSUDr74PfoDf4ppxqxYsftm1dQxkSKu4zWmeaBXo4ELekb54hg8GQiybgJXRDRsEwHnsHB",
  "key22": "5WeaggtF5gKFLCYSGqQEstF3F1npfy3RECwpsZdwM8PKg9qkRGzgnhvsAbEomZ43bJ7jdj5RnjnT3htPhhqf8tKg",
  "key23": "3MF3mCHioDUYt4XmWLkU7D19PPSmofX1emzJ3pTXZ6o7bWGHQD1c3pS8m53YV9ZFUBYYJySjjfChVg556UYwu3wH",
  "key24": "2Ct9qGFVAYjn9skRjXC8G2JVji2uDoAt5sBwma9EHsBjLtXZaweVLTnLgZtpGcyTqtvVLWYCSXnMoq8cqRGdDtdM",
  "key25": "CKLHbX1ghzmHw36ivWNgUYCiHBRtTuyaAwxrncjreLposEUZsk8TzAhV6jFv7BvYHigyViX1f3iMFoDY3zdqUFE",
  "key26": "526SwjYHJTUmpqqCHd8HLizgQUKcVxXFXqfBDT7Ba8GM8pKjJfWZW1LMCXVt2QAWX31C7VRhzHjrRRduzdp3WJpk",
  "key27": "2Jq6XPbUekHumke6iLuFjbgLkTQpzyVnwVccyYXTyjKpjnRdunowxYvVJSpcf2RG4psW3cMLQsqMCPyq25F4GgzF",
  "key28": "4hnFnpcFjZkLhdgF4xQrSfbx9aV5S6eAjaTf7kpPuEE1GqRkTJsnF94FSX4Exq4QJtVp7exHF85CXWKJ6EFLETDT",
  "key29": "2BrjoTZhXEuxgjY8dvsSNprMdJkQB9eCfZXxuvjwYjeLu8auN1DTP2mfSiT3WQ2FGVmP3XHyssg73a8mAFmTtSJP",
  "key30": "3vW2ZEKvAqAMTWXNpH6EhWcCeygNbFqe6CnAHuXBR2cUVndUX7jr7f4Vszr6m6BJXqzVViuMe4Zt28fB8q68DyNK",
  "key31": "5Ev3uwnyx1ssribUqJ9NrRu2wG3CWPZcv8MLooArtvqDB7vPVGff9ANB4tRVkCd3Zs7mfQgx1oDCmXiipYvfFNoV",
  "key32": "BZ92sxmxKPdJtUJoANvdd5uKQbcVSbGjTGfCd1v2i74cmAuyUKsVuwGJMdoA4vhtL1zqynpRTREiCVFMh33u119",
  "key33": "2qWQokUER1wvMHTUDavp1NXKMTJHNAStcvo4jHmFDX34qjFkQbJBsa6nRK8KSCZhfbDVuKGxTikec1QYXi28RiyK",
  "key34": "2JoVZhLhn4N7BLaJQQYFgpS2jGeUCVbBuWNrkQzjBKxXqn2YfkkdyvxMKKpTjc5GFgSzTzmkCLU73MoYggCrMzPD",
  "key35": "3MvyTaktSY83GfhqpdR7rH8RDXvYUomx9PGHpS4jkyfuPiewWUdv1aPBTktZVmXRUZGoMGBMfSdgHT6zDQPCe54D"
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
