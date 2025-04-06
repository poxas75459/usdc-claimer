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
    "3s9Tiufpu2fGjf5U1kEgtHnwAJ25ru3WwsbXe5xTyDuHmuf59NkrvgexvJz8HQKB2sGqmncvdqNE4fWLWezHDpKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFKnnnbJ6LQg9m8wCRkAjsbeaMibcEZqc1zJ5aVz7148i3RuYPyRtGyTejmUHRiXnH5bKfJAmRC44AEzBZN5q63",
  "key1": "4SM6YcVR3KikZBKZzUR4C6LmwAhGqvYSP6ocfyoHV9SmHFQ9bai6Y114k62AKYnMJKPo281NN2R5KfNFtwTx7rMd",
  "key2": "356GDPBcbziNuR7N6pJAcjwWkSwaZnHpdtFrSWDKC6vDpMbJGMsxeuwkHWyZNbvjuovLRN8V8zYz8uH2kxZpF1zS",
  "key3": "5gunM9oCcAsMjNGh2wbbDaZr5cLCPniLXaxgNrXVW3wSkWpeAGPtdb8qH83AGQbNqmjQcvfdvZ4Vbus4qxjB6GcV",
  "key4": "2gro4T4QfN8TSmYD41vswK3NYKhCLS9TLzRAHbKNFqDahdCDA98GbEeQrLsp787kHchFjN3p8fwtiVVhPoRzBzrh",
  "key5": "6jR1Vdcohumeenjdr7viTeoFC2y8qeDmAJpZyUbASMBgRNYz7R5wRkwkRCf3Mc8ushMFhiDKUSdEv8L3qX91ux1",
  "key6": "48KC5P6L8itmUTW3nFHZGrVQQCMv6M66oUh74g7uwyKdEx6HXkgd92dHYZ6aWMMxoumH2kBuAEhP9trzHy1DG6pX",
  "key7": "2DxM4QLRmV1YsgqDDzju3hmNtQjQUsYwPhrv9afFyNzZwAqfK7sa5A4YZNDPqP8gFdiQ3ucW5WCnfYrJ4Vixaco1",
  "key8": "5HzbZ3Uw6UGvbeogn9Gzfjk8jLgX5Agc2XEAijQ9jUFBs4fnRGX9WmJX3xCPXSXQGs7roV5sZdqGjneKTTZKUA5E",
  "key9": "4oYUuqmfKKQnCJpM5bdqj7dCLwmZTc5bKLCMzctPkHNxKdN1JpB3SmxGQSmgm6oXjG4wdr7yYvp8HfN8iPrGKVSn",
  "key10": "5RvDPfSd11bB4Vx6WDtR9f7uf9FJymMkb5wHvXzuE4H8TdNP64UoPif11FMZzuogR7fpJLV92o8vS65Caahtgm2s",
  "key11": "2ADsg2cTnYEEopvSiGUgjnPo9XDfKCctFrtE2f2AHGqUHcSXf9zSdppsQcXxpReKf9i27CbCttteouoR362bWoXy",
  "key12": "2ebUawWjAP4kQXsQvfJ1VykCco3Kz61F5TAcNzZ7ZP1c67k9AaLRezPqKmGwTBChc58bJKsEcNKX1fP5YuQzhAUW",
  "key13": "3to9oRcpS28r2ekzFZdYm7qidLvmfd7mNhxQBcmzJF9vEebPP5DtVcGc6WvYoAwkpwT7DwCbPGFa7eR2sKtvK3Ux",
  "key14": "2akbd1U8z3mfY5JNrDK2ZxTP95gTDZTRne7WVG7GpCXNVsfZgHzwxmixMicST18oJSdtKBxJWdyYkYUKFfv4kZvi",
  "key15": "4hQEkn1PHUzvNxzpcfAaeLoWTfkTr1fcPPiA1UcZWuz8fjLpTVMCx4ymjYJkAcE9hD4CnteJjDmUM84Uw83TbGa8",
  "key16": "4JyMQxCYPMJDpCwrXmgMZBaBaZJ3PmTNXv5iUcKmycJou34UpXb3rrzxqev8xCokZUpiLR8UpPbW1Jv7KJmdzmY8",
  "key17": "5ojKQGnaDE7vTg964zV3wjvaBe2ZuTJEojq8uFxM6g1egfcRRxwgqeuFmLbmAigDJo4gFj4g2vd72z6xgY1EkYWj",
  "key18": "EQ5jLxNf4rboxYz9BTwZ6RBXJJM1K6hV8hPcyjwcqU9o2CF2JQm8CStqCniX1GsSNN7C6yCV7LNPyfhFyaHRsL6",
  "key19": "64gdrjQ4LaFifkHmKpr4Nxc6o3bd5LnSCLcBx2iT36jMtuMDEZjFb5ivMuYw7Y6xZPE2Eq1ZNmsaBhaja538B3CQ",
  "key20": "4znP1ToMF7HA2VQjatKSW7Xn4F95RrKHBqyvBQgk5XZjQ1aoigXrQf1AzLdGiK1m9w1fj8gYMLb7jZSByHYo3GKi",
  "key21": "5tZkV49MfxaLVPYGB5UK1UxzehcHhKKWXDUFftVwKKd2byYDh9LA4BVss9TVRREqHyJpPCB42seAwJKWx5VTPZNA",
  "key22": "2GFvMNGY7fHC3EVQmaBCcKpCqw9JEhuXEvMqJYnTYDLz6vZvXau9FEHPJm69Hk2kRiPr3bJGxo8TTfMbp5f2unbS",
  "key23": "66eMf9NDwHdKxng6kCSkJ8HGfuGtSaG2CepF2WznUkSsNTPBjs2noBPPmKFaRFCaxvatcEmXQuGGWV7MqSgC25ea",
  "key24": "3LsNsESRjNM8UJ7TfEjYpx1nSgCkyEnXKM1RBBus8JXFwDYJfVmGy7b6r7MntzMYE2nPnwTtJJhDp5jkyhp3FKxf",
  "key25": "21Qyyhdcm9vptMSVDi8U23kbFjcRX4W5RzDZbTTbhympsUh96kGU18SRQKvBrU9DGcg83tcZrog99uxjkC9TRbhy",
  "key26": "5vhdwAv7LLZuLYWKFExCAtejBg4TCxNzVzV3rbcmarKdbDk6EcDf3ggF2zYDaQ3o8twXg1FCvE4WBupzrPgwZSUf",
  "key27": "3e7BSsuzwSdBC2BX6Lh6132JpvnSgrGAHpC17Mi4UmFhyoxqQCks2G3U7tMXXF4RgqT31ammmFHymyEX93KMV8xx",
  "key28": "3oPUjM2xh2ETq6CmqtZM3TDnykft2QtWmdsNsjq9fhjmCYffVGLajYKJW9Ym6iVKGzD6eUD7U9rgaym1kksvRUFP",
  "key29": "37HtQMWPaaE8eUjx6yVySH4Erd7sHsrp1ZcJP61F7BdpPFvCmdYLXrFNtrELK9bDgNfZvsoniSPu4fGvxMRuiNd2",
  "key30": "Aw8LFdARPR9V1cJkje55MqUBJcvN91rzkcLCiypw7iSMK5zYKigVaZzDnuaSDf2T1HBZ96dSxwUoup5Fcqc1Mwg",
  "key31": "2uZSDaKULTWy8eaKukjYPDt8mVkBckuJE4kCHtLRJjfWMA3vHSr4n3b5sc4foLiFJznpKP8nVxK6YG4DhqbopK2Y",
  "key32": "4ZBjSb9Mb7RGAtvDKijSHvjpNqzAVg7ZxQCp58tn8E4nfFQtbGJHVMToorzAqSV1stzYik4t3M3yrZUzX296uNwV",
  "key33": "4Un9tKVn8cgs4g3337ugcFNCogZ44hCLCmwimwV5HjjVks7eVCC14gnvk3ErUYKukFw4vBtfNM5696F5StfmsS6f",
  "key34": "SrQS9N7bkHKtwJ2WMhcmW68f7eSuHC33xtRiyeMu9b3oaWCLAxR319ktRFdA8x5oWG5dfF6ukoCYRCAkywWwymK",
  "key35": "2eKPKFi9Dzi6ddh9H3QG1ELowdX6kNyMC3KSRMUtVz9PdkAuUWM6DVaqBwvKTzKoYaiBXYuqaJqMxiPn3iMPMSAv"
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
