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
    "4nxLUKqfnbbtNonhwQRsWCC6a6tdQH4eqiH4cxEMNQ8szWsfxEXVyK1vRbyfcpiwVGuRP5CxyFAjjjgoRPFnXAEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBwdxjyMWKANuXn4Tnu7gpv7FTizdD5TKsqmJsUbZGStng7UWMgrWwqcjSXH53cQtNnGwq5raFCbQfAeK3AN75X",
  "key1": "CSPrNy7KR3jSK8zFXxwBJyXrbVBvrxCfYdyXxGtKqRnxbYVkHfPUfGbNPJ8iEfheNrqS1ijXPNBjzvXmE1i8G4y",
  "key2": "2nX7EkdUygwSamqRL4YJY1WpbS3MNUPH4PEWJM6fWnzweHSS6suMYnrjumZNugBendJYTDEUiPxy2gr6VPyh9ar3",
  "key3": "5JvCA94cSbKemtf2T7NnRNppomC3bQqnJonSYdJNAXNfuNvyxCLpXdKhUB9MxFDg4243HSWXi1QTcdQWrFE8NDbK",
  "key4": "4C6MNWM8iYbkkYZz9LPGpvnvS8R3Pz3WymUFtAGNYtg6mBXe8kGc9Zy47ME5YeX4KsErXTr6TmftyLg796HJn8cf",
  "key5": "tpJRD7qUVR58QSR68pbZ1TjCkdBxCeo9eMkd18rheg5PzuBATm6WqHWqUt6XCwN3qJhTFzEio5gtPLdGj4BN4Gd",
  "key6": "3yjZsEraLrZqMovyWazhbcuAZL3NLMY6fXZPRj86tWaLer5Db5n2iDoEuTdMnzGZytf57GQ8pWj918EDXLaSBFAy",
  "key7": "4CoGR3pe3NQYB3A1PSqghG83BYr5v2GwZyUnDPGiqmD418hEByx5f6wN94pWbGEo5PdxXyiPdhz8cs23nMBT98mx",
  "key8": "56eb48jKwWD4n2YnHMZvuyzWiMWp77UWGMuge2R32BtbRDHyQWutqBPM4zwW119znbWCWkkB7idLnmpJnz7cHtUH",
  "key9": "DjfvBLUfBJJvykFFab3W9jG8fTbSUYYSBkb6kcqC8zoHCUx4Ccoc4MiqqNzemMh1C1mQtWYfdcegQ55QEF8Je8e",
  "key10": "4njVU9WCudzhpRdwu2xTZyfjJx93x9eih7ZCBuibjqzUuLkbR74HHVdXStjcRSXhmrtwFWUJvf3nPQWrerngFNGc",
  "key11": "6697kpRUAv9evDvzHHQxsnDdtL95obkPKZin4PSJMjt4kxxamTCENBfH6t7Lu4G3R6heQKDqFf6TEjdLsKe2a6CL",
  "key12": "41rDc2cuN9cCGG8iYKhdf5RULNHAiaEPtJ5EMGLv1pokNbBeujU9nxYzP1kjnMnVPiDDLRnxAsK7oPrhz6uZrYDc",
  "key13": "2LnxGyvduWKmYVVeezgnyyLj1UhGvrk1AmZERrqUvs3kKXXQzqACGRB1k5C1YxLoCrto2yghLi8GU2L1Qr5G2nxh",
  "key14": "3kQkkR68jMUx5cZ326owHQftui1aQELPADwibnasPASsVSi1Zn6n4ESe8mxQf1VabApaHcW64qB2WuwLq2ci8iiT",
  "key15": "4XXRUkaakNtXKztNmtLfeZZTnEoMCTF3kdatVMUy47Lv83E1y3MF5vj62pkVK3Yq2wu44kAacN4x83ovkkuVVuyW",
  "key16": "3DKJ4hPb1p3iz3b3UupifurnTeoGTSSEiZsKCkQBmxEnBfSH3esUCJTLqPnea7ahjLFJtBBdv2bFeKUBJDnxaL8G",
  "key17": "4k84mcqqyN72CisGdiSMZqtkV8oKsLfsy6e1i5jAqNJBV4vinfEoesZ6pvenCr6pUtjyKttZpkTAVKcPTvMQW8q6",
  "key18": "4AVnS8De9Bp3vXMPqEPp1dMqrmRHj6DittLJJ3YrV75UgphZxSj6vqBVNBVkcZh8F7y7Se2znBty8184hehy4BBv",
  "key19": "4Mtw9m6Rpqj6KEa97BpqHE71B7o7sJYDLorUESCgP1o9ufM9iZ7kPLiaYBKpbNQ84afmveXSWV3uZRqUtmYFKzAR",
  "key20": "H1ZRBNdD1brMoNieNmRrTJsKYGPrTjxYC14iwJ8RhoQSiyxhpiCfigwMi7UvuEDLFnwCg4WBkfhVsEf13Svch5A",
  "key21": "36BZbu8JZFsZqVfX4uqGAQYD8YbfZXvv97hweqyF53UKbvH4Vnn6gzGF8VubY6W5MS1GgSBZ3D4Bxw5tZe8k9xpj",
  "key22": "4AuEEYuLMoJ9jTsWimXrUByHHKSBm1mT1tCoyo6raYWHpCWK4xEXfisEtv7jqyvErW6oEGpJhRywfPhttPqtrfEn",
  "key23": "5Tm4tbBsz5L4nhuZ8n3jaNCVtYgTodNjk3m77zj45aQnL28LvWsX2iUoLPaxSepk9ZqsTwUqRtMmWWKXaE9st5zU",
  "key24": "4dvfRtmwDvzkCqZhy7ryyVUAqDWWbNWRdCQ85EgGPbA2gHAnCEWAZWUCXw93GNBpHQwa7LFbfKBiz9qyRbxmjKiW",
  "key25": "3ziXYpw94K7XBv5sBM15zkBfQFYo3n3U8uukTs8iyx1inuc6JbBvUgUqnsKoJvetsvjGM593mL7Be8FbZwiebfxe",
  "key26": "2WgdosuwZuz3jTUJm2pHgXMZbKZS31EjfwVKR8sxtKJ54dC84GHKAyAupD7sL7SQL6LKDKQGtpVbBfMQpAgPKpgk",
  "key27": "2GnQxieBoDid68DSc6tep1vAwBYosCQCSnjw37tKrUSbAvSVVoNWbAHCPD8yMbijFHWV4We8XD2aHaojgwiBaoBo",
  "key28": "5W1AvXVmEQErwquCQrmpfCxvnSfCx58zLLvTa3ZPVY54pV9gNsNPzZvzYM9AX8cCnYiMSLkrchwKWMeQ7SsojLMV",
  "key29": "66ZRVerz7hDLrakNtv8cfAHz1gPzWdipHdgpRnexgPAgyiKFrS43NeaTkFiwuT6i7GTHymGYCrDqZoQYTUQerEnX",
  "key30": "49VJXbWrLfWiwTwybhwxa4zAsFTruzNgDzQBx1h2LUPK6tVVunX6FyraUijTJ1xkj4ZHTBZWbW4FXEbYGmodG7QB",
  "key31": "RV6SVSq8UDhNuf5vNUtrAJHetcJEo75cYbTq5UMqZmWf39YUru8zgkqxGnpUk6gJZpbuDTRsFdR1DMdnys7DBSr",
  "key32": "2mHU154nsoF35iWmgb83e8oaQV7PGPY2NGUo67ccvPxmoPvu8xryGuRuBvnj6TUeRLrgvkHaPiNXqs8ovUj8N1eo",
  "key33": "3CgxwscxUEgVaqZ75WHJkLeq274VkmAPFN6iwKFzk2BcEVaRrDr89TTLuBo37JBg13N6HNRgoDsB4jPGDM9RnNem",
  "key34": "2s6rRBhNJMFf1o3MX9ss74aLW4now6eJ9SVqWgLYuTjm5WFfnFdeiYUcWcbhQh4yk55Nx8w5poUGQVu2HyMiubSS",
  "key35": "4QmHpde1gXC7mCf5yvipUKAJiVgLSRkbUH3jJdHuqB7EhAhZBVRsqEJoVxJAW8FKdMRhBGzJu3et3uquvg8kfk3A",
  "key36": "5vvKu2yeWZGZ7RTeqwb9hBch4SmUoyyGL2BoMtzTsEf4Wg8PEi1mP7KCgPr5X1BLEaBgKCkxUkxuC6MCoyMrC3pi",
  "key37": "5aKURZ6A5iUDDR2m89FA9PB5riCNSnKUwXLB4W3yWTWggK3jBEJgSt5MMhXZTQGC6iseMij3dC1jQv94MRXhEGQM",
  "key38": "4y2HSdmiHWAEBBgBR5sq7NaWEQZz8ZGRTNFPiN6VBcoqkzdBJfTP6VttMfqH1c7NHrrM54jUA6iBxeKaeTFzQWxp",
  "key39": "3Qx1SWADeDZT8Rbpgf26HZ6Ng3JECGoJs2f5Pvj7KXGxctdnGSKXytD7Rv7pxKu2Ztj6FV9R8QmK4Ngx7xuMY9G4"
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
