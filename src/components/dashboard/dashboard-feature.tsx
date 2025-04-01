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
    "3Qk26PNUxyKYveYH1RyPb7JwmWqCqvHMiHDivuytQJ6bnC4av73yrsZTES4nk1PuXwGwuRsVBG2YYJMsLVYcKwDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usGPk6sGzjgHKcPpF9KXEiTDXBthorUWcvURz7kAwL2WgFqh9ctNRZSZnZgSB5ikhvZjic2LSxs8uizie8upbvn",
  "key1": "4MYEou833yARy72h7WRRjj22bNhFEYsMfzshgeqdaAnxPNmayAd3LKypZj9RQW25KhM76HK4VMCstv7JA8THoc7a",
  "key2": "5nM7V9rjkMCpNg8TAeFbqAzPbXBH47FydTZXK4NV6wUPansaExionBBP1ziKGNhtDLa7y8Lfha25TaLTf6yn2SnC",
  "key3": "58exvdni1XWztTuwtjWdvxxRQ8HSw3ymTSZ3VftFpbPqPoQaPgsLuZ3f1tgwV9Ap6m8wDYANNrJp32xcCUGUW5eY",
  "key4": "yBQPoaVNHAxFN972FYdiMadYmW7eqQRpVDrCdkYYWy7Rh2coapHBwyPv5aRxr1XfJH3KXKBvxYG6LR27bK4meLT",
  "key5": "2GHhH7gXSrYC1ovjTQDTBZ8uFT3xpwAnbhsF7nB197SWRg5MZVsMwuiifxrW8Rx441B28TUAou3qfR7d7jkXWfDy",
  "key6": "zLm2GhCiXvLcsbtTw93RAJrmu9gFgfnobqNPFxeThkWc1iCNnGNWJrauH4vYGGUy9juoRwMAXjtWbU8NV5XzJpG",
  "key7": "3HoCETy7wdwYjWgFQfowB3BZNZxBUBvQ4vK4FJMTwyZoGz3etotJABDqhPYCg24F7VW6UrT28wXCyuethWRFGykm",
  "key8": "29UUFTd8qRtfa9RZ53pjjMtieMWPUV8bheG51qCCvuixgr5SnkKRMyBE4pY94SW7MtBpomqktXTzsHPySYFKUapW",
  "key9": "4HRixWBNA9USkRjGHPXnGnMkAULhmkcpSfNWjL9rNUafRByfyjbMsFeHHy1NXBmLuNEsr5DCc47xdX1xUruZJd1j",
  "key10": "5uU8t1h8pnDdmHccRarZbZk3ycMYW1obDyGM4qSxjre2ti29hfCCQ73BQgpcrz2u8kpdZcenaxvRAXjib55BvXzf",
  "key11": "r7kRFS8Lx9KypiRjfDFLa1wubnxpzNmzYFNCTxxv4Q6mi2KDC3BJXbs4pVZSyqyJKWm6rwjTg81nvhpCmAW3xhd",
  "key12": "3TP818ooD38iMF6MpFaY5hi9CGNpn9XtckfxUKkcvKBTqK17TDBjb3Q5CxGZWRKknxNrA6o1nKGqKz9MoQusEm9h",
  "key13": "3rg7jFxSvs3j1YYyNpQ6ax5sK68AFircBUjbATPtc1DZoQBmrtM4Bau6Xv17iebhxk8ASPa9JvQ46npLWQ16p6aj",
  "key14": "53LgzXZnJEWF3xiT1LHZJ1nsDMbgCX7uxqiTXf1UEWMqkiWD1CmD1xuMcH9b7WR8ad9QLyz2Xwe9vWkyoMXkEwcX",
  "key15": "qCFWJrkYcop4nJt2nMA9oAz2Vmx6Kfb7pEN3HRex9VWNraXPL4dZA1o4kSdXcXdL6A3bDDUXBiuL7iQr7EAfd3D",
  "key16": "5nwZQrB7oCJiULcqNGWK3ZwkejUsU4k3jxs2HU6qvsjFswREdfQY295U72WHZeimawzwuc8nsGQKS7KQ8DWfLUwi",
  "key17": "7KvCy5p8vyZU4vKBbqfMpABuivQzanGa734LUoPx3grWuQqMYTWcB1uqZLaC5zZLniauFVcwwHWwx1BtvzAKSgy",
  "key18": "64v3eKSRpoLRTkg87E23reYHa6YSCPS1QZmfrjGAZCha2iPv53ER31efXUGjgVsYae65d6B8PHrF8kzy73SKFp6h",
  "key19": "4FP1FbGpUgu89bSWQq8bWRSVfJaH3tw1F3CsuHbvgHn4JqQN5DUy24cbXSQUcbn8EBYwAZeXUbioDXuw77LEP53T",
  "key20": "DimZrZaUFS9daEhvCuTKuLobEi3Kdh4JwcDxBhHxcs9ZPHEnUv3CnzaKoVtKBNq3i3HhUZTbLtsQ15W7dWSbztd",
  "key21": "4UptZDAaSkzd1cUngDnx42ZAodLKm6jY5wYV5hpgcx6eJZSEhqNSb6TMsHdLPTktKUm8Yn16chAvXp3GXZ2KnhPP",
  "key22": "aAFCeJ4zDg1SPnBWA6qbcG7nnmRkzv9ogmmTbsn7VKXx9XdWhaqZo6HB5TJWyBLdKLSfVpJwBoHrvA7buqkHnTd",
  "key23": "iouXjSEm95c9fEcE6tDKEAwiquU11x1Zgk3pDSvrwqbqCZwupf3sG8tVhfyVmu1zwcRALAwwRLBhmwonuk3jjMC",
  "key24": "ZR2ANQuUaZWwa9NnEWukTiKQrf8QE4uQBr11ZoK57kGu2NerMexN9eJKocU4t5UdXwHRH3RR8Tj81b7GVcJpmJc",
  "key25": "4zHZUu3XFK8ePKvdRyh7G3bRLhXmeURQfz6oSK29TyHPv6VAnwqApvkqNPtXpFTfJDQ7b7ubj4pmJnNZcPxpXTgH",
  "key26": "3amp3GYzKasYHJDHdM5Lm179T57qVyJVUkTnYEbfP17MG8Ds3fUETzhUTzVpQDrve3oTCjtZcN3W2ENq7bYPnxds",
  "key27": "3M11TDCZxD1cyaS49d19Fv2iCmwKAWh7u3xWubkFPFVMfUMk1BW4gmyJx4SJP9eJCXSCk7vQo3EwpbGHPJKd3ZvF",
  "key28": "4K1hdNFa8aY7ATFzL2NLdEVJYpwaWRdA1i16eAfhf7fczjvNZxpEHJojHL3tzKkHhZAurBZFq75RTAU3ZqvqfkHB"
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
