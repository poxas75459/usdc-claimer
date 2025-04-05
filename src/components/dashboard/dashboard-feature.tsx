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
    "2Xr3SDD61s4vc7X4zipubkx1fgv79V1kd14cc6mZZJBG8raxtngXZKwJ8PbY2Hkk2k9B2DRkMf2fZjP11yQmpdsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6154cu6ogizGrM2jHwP6nmH892uVGC5kEnrGcSNVvDTsf5rRgqhZcyE9AKXmkmroADxKag4GqLkrEmmtrrVjyzt1",
  "key1": "4T5t8MKxGkKwPQc67cXfPu6k7x2EQbK43GyJ2P3xtBxGMVaS8Nb1aG3iptW9ev7tStDiMgLWqJ8iQhiKDocv8ff2",
  "key2": "MFrqdA6RSowosn3v2x4obcnnzNzq3t4vwGp2uobwn4M8o3dtv6a6naEGQtyGiBfpzqN65JEk6kE78ViTR5wCZPe",
  "key3": "4NzRCwvkwikxc3Zuhe6F9cLp7Kd8eYAhPf82zyNNLWTy4hSWLgtRBE6eWwNFbTeBawJPEnT89nWdzwpaYxiUexNb",
  "key4": "2t9nPyrexNRnGCXDKtkGWeBESDKP6cVdEnykG4tejZ99dpXFbR3KEvVn721n5mwBToWp2vEfcq5K8qecbibmCYGr",
  "key5": "4CVguTDaRgiFmj62Fp8ovNDqV3QDrk22FpVkjJPzpQQHhdt2BvTgEKCkfMG7b98nQhWKZKeDx3LXN4Rc4s5dVsrb",
  "key6": "3UqWnJ3vxLXEzdt1WQSHZxqgn8DUkCXNzh6wSwbg5k1Hom5eYvesCMk71yr6DKk8PyP8BT7XoiJMUPW5NEotNLcw",
  "key7": "2xtfZewqvvqtsx6oDna82eZRT25HeXyheFCkKjZ1erQNEKLoMeUjyGSyacFReLrWXM7Nn5wg7W7jejjKpgHtzVPe",
  "key8": "5wyEAVhi4mvDUzBcUJeB29syd9F8tcMscuZTzgoz9M4Z59gRRAY1vF4e1WddtB7GwQRUN7gUgjFz1CBpXCTRkmLQ",
  "key9": "2Xf2FxLdBijjNStTjG61NQbNCWbyfq9myc2KefBL3dh3enodCtooBENRjtsNo64dYM376fvN1iLwEsjENKAjqEjh",
  "key10": "4VNAZ1R9FaSv2TiWpsBVmowtKU9fmscKV7rRHThHFfRAKiKqvvzx4iQZxM1ne4eakMs1ke6brjooNkFe7j51weDw",
  "key11": "5yEp7nT4LNVtePX3vLWAFvBPB7CqBqxeMVzjWraS6ALTT1ANLPXdzTaqbJXb3z1DvQSVbU8tafj3wsi666fkd5VM",
  "key12": "3HCPTTGdruVWk1nfgFmz66xpAdNrrGfV72VvtzeCfQYc21vrfAcyWFpXRG3ihyFd7LZazKoc5GJo5AyJxrc8eFHt",
  "key13": "4AXPdf88YzoCibzEm3KmChYi9yfSCAn49KVEEhyir3JyRfN84yEzu3WXo42Aybjniy5EXsTa6xnmeU91ApJhxzj8",
  "key14": "1TLSDL3ivDh3Uhz4oqCMiZpszZkn2FAqABySrJGhRQbFBXp4462b5WZUGN7tL1EQasBfnjQxymDWMxHT9ZaoA1W",
  "key15": "3jY6BjpBbEoMN3pKCWr1uvkUdTyJCeLKEGqLWM9mvjgR9jWRfG2QH93JN7UTAGQESuwoA3DNrennXntyspMqXZFB",
  "key16": "2pPnNvXAYBmaAMJGK7a57xJ8ukrCkpn8dJwr56ZKNEbD6gZ4ZxWDYstgnoijWjU5KdL6tvuMFBQxbBanXRVgHvHb",
  "key17": "5Peeo38qfThpjqwcvixLmg8hbfKwEv5wXbV3kHPkCeds8uVo5MNEGrXh9wSd1xUGDhDCsLujRCqmHUhzb7GjfH8B",
  "key18": "5dWS5392vvoAGYm5FwoZziwR1c8izxdw3ENAZuRctAQwMqqUxVd3jcNo2Tr15UfQXMKvYNdMh5uHeBqihj59LPMv",
  "key19": "2QhcgBenZfDBjAYnp3Sqvwbh2eez1nxiXwUwSq5aDZwXqUiRTFXz51rY6KNiJkGXzRVDFDdMqNJSdwgut5gPugWw",
  "key20": "nmmD4NqcvXWfkp1idFC7nJzCfSiCkBCezFereAXz6FZsiRbvXNT1REzWk4hdUDFGtrgmd7s2hJJSS1gAPZnfwzV",
  "key21": "472dCybHrnqhRG4wDVmcGjy4kHRFe3AMS2AYDBDKm968rNu1ZNqrkkou8abKMgQKkxvTeffyTfapUgmzWRM1ySTM",
  "key22": "Z7bgE4YjAYCGvMu8YGzRjEhuAnPstagBFdhXWNWGeHfE8tRjxNi95NZ8KWzhTJBpFC5cwApb4ZxJX7wNvVWZbKg",
  "key23": "4JKtvR36h94Rss18wKHXGnsrEXtq4NzsFPu4dwQ4QCejkzTGX5j1y5t5hE1p9Wi94KuwiqKFzba99mpPzbKBUvCb",
  "key24": "4ycnpKX9YWm8DxNoypt9WGztfw6Ez41rZbFPJUPtmTZZctdE9PHVfU7PMAftR99VTwzn7MuC4TbG19zwtC2fQnLR",
  "key25": "3UfMt5PJwiPaySZ2mPpcn4fMJwE5miwdJnK3QazzqpNZCGMd9XjsGT1S9bMkHDLq35uehshTj1rYJLhChVxbFVvn",
  "key26": "3p5SiT7aXc96c4HuKxKzrqeVJFFEj6ujGh3HeDyZ4QDSNzBMvYBYVnxcy232aFNfBPuJZTTiAQENwNwTtGLBK7vc",
  "key27": "3dFnLJGbPFzceN3YVKC6WTNQTcp3GKHkXp6rqSdPpkda1b2kvC9z4HkbEAVrDSfYYeWmbXRq9pXGY53meVzfT8Ka",
  "key28": "TE9PGVMV5ymP5hA4aif88nAXsUhjfmq9Cn9FUC1CmbbC3nMu1RL6eiHu5nvdKsPS8hiPoWzM49W9dp6XR6A1sGt",
  "key29": "BSkaNLv6FGpqGHcC32136XKphFsVFjfPbjXXxZJKqj1ojCSSaXPW8GQcZ9LnVU8kqGPorxQGVykF5LmQ4ChW9tX",
  "key30": "63szoj1HhtD4g5YcYyojS6LBKCeq2yijfa9oE2kaLMSqHKi9LuLJytuWQKex1qvsuABiqfqLPojK8zd7eUCiHPdW",
  "key31": "vuqSXGFjhea7L4MgCWDY8EEUf1GaCP1v3YZdN266EyWis62rQ4c1Ghf4XykYDyv7DvSd5tiD35BePL5oYPmLjwU",
  "key32": "5P3Fgyg5NGjCDvxzUowMy5cmFW8TtnAQukAKmubXPh1VPtzFqNWRZzs8LSHTTB6CgVx8nG3dxHxgS7uRtZuesSTJ",
  "key33": "2trg6SxBdvBK4Gp1eemsMzQhFWdZTwLJ4YXxafY9MSB1uxMUNLoJ8EhggV2w4kaZWEEsZgStgVAmTEYRmrF4ztUN",
  "key34": "48E5cL7c5S6vRbGQmMTCPGV6jKy2CnD7HBJrK18oZtq61xumiM8L6Xe82Tey9jkDoBmvM1yJinKPzrce3GTMvX95",
  "key35": "25MkfDon8tdhokQkSYnpB9bv8Wpxu5JhywWA9P3fntKcX1ZhM13NtLqeBLJuknSozedF5WrqCh1xPpEzqwyCn2ey",
  "key36": "5mwYcWpWjFSi17sAArZVvnGaUSvbH7be5ReVxEwREiM1EkrLFLUVGFTG17ouR29CjQ4A2tSzeaAnU3THtWvgmX7T",
  "key37": "EPjYKTVZ9iwHiU78THSABED2uDL9vT95We1mC2bD4Gopnmm1gqYQsv9q4ZBZNbduB9K9y2bJZbTfZsVVNk9tKDc",
  "key38": "2L4W4fseHuhoPzMh2fxA35ZSJ2U1RkwKvLVNtqaYPTEvNBYGuoPZVw97eri48Qer7zgJjfY7kzymPZgaW5Zmv5wi"
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
