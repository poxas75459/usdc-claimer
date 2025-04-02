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
    "63kRTLkDi8NK4XRT28vEqEjGxQ1xHbAQQQqZz6NNCQY9ahgwpaYZwGrFhLtW3Yh4Zj799PhdCTiQE9pNCkKkzdNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfMz8x9XmAFNpuCiZV4NDf9o3w7iRd17yf5Pyi913xqvNiZ7NshS5rT1qVMqrKVRvQT5k7qdFQMSUEzYg18BXAm",
  "key1": "2VbACJiCiPWuczazMwLppVcui8DbF8pJV3eDC5zWLJ43K9pauKJdZCMnU9k53h125DgaKMqbNoM9VBtaht69HNuq",
  "key2": "4AEgMmwagz5L6EKHq6oxbuencJV7ic9pBFab785bQW7Z9sTirnZv1p7MohbTnc6x89mgoV5BXNfatzpvKV62LHoi",
  "key3": "2zxCaH6rYVXgxTEpFKmunVZoHDDnW6ngt5T2hK1FSijrjau5jWxxpETd115UbTGM8PVyKUXtJd6152SxWBGTznZH",
  "key4": "32LUzXC9YtudQ4hihKSikUicWa4v9ZfT7g2PvwYDkj6XYYKgKW3ephSmDVieAW24BaNNb7sdctmGkSAFPb7hH1y",
  "key5": "31VBNxqqXb4239zwqkd54muZufozjT9APgjUwhY2siKB83b4oBiszSvey4XPFq7HT3waprMpUu8JMyB9QbsKJnqV",
  "key6": "49TWuyUecHv1F7H63K6uEUNtKLB9d1vzr45Ve6AD2JpxHNvbxRP76AFGqCAK6eEMgsApPETsya1HMkyR7pGrKuEL",
  "key7": "QwQNLcLckU1JknHUoJibjjuimXArMMJyfYW53SSEd3ysjrZd2yAdV1uqGUrdBykTiSSwcXaTmWdU3d1tUvZk7Bj",
  "key8": "4cUrsAfPKig1q3fZ4qQTLfAK3TmeAXNN49L48nDUczs4Mx6yTXbWpZ94F5LTMiSbFSiNbQFoTKDq9cUwN5mJVQuQ",
  "key9": "3YLWAB7ptn87AztcWza6QLPfcf6yjbLVJwwM38WjeeiiWroDuxaiGKRx3Bf14JNpAntFBwjdb52x55dFBH8Grpch",
  "key10": "REodyWamAUrWPKBZzF3QD5qd54PSNj9JsWbz8fEzZ7ndHapCzT9CDnYEcBxFVYjeKALkzQw2MHEvXEgeDLnN5fo",
  "key11": "ig4b5MaLFC6T9TjgCQVLwCcFzGDnmbfm1ZPbqSTcNQqpgzzWdSEVFBhPT9fmzhFyhmtRJ8Hq6CtQSGoYQrGefqr",
  "key12": "2ZPLz1gDiT5ufvq1ugdSLmcciBNMV9m1gNrtpM5z3YAdapXjqmEaURuYpCMpTXSbCaK6dizZNv6MF1j8LcGyA9Ls",
  "key13": "3nvzNxa9ZwErjxiAuiCQmZvjgNPypeg8U9yeJ26oZPY2CJ4v1XQDkCoYxtoKNzM8iXxnTvLSVUxcAiA9J2B1LzPT",
  "key14": "5Xdpz1kNGPkHeWLH5sU9ubm1yTeJoo8yuScefrbTyoQXGAPsKUx5owH6eDncXgs2Dvcv1H1jDmcu55TQWoeQL1ns",
  "key15": "29z1KHvYmeTMEk7xLW62yb7ZRQePhVoqk6Q4Dphkx3HmvcqmLTREbfCxz996QhxdkuzizrWxW2sxjeekPUv9fsPH",
  "key16": "4kk7YEsRMoCQpW7rJPydvW8Qggprrv9YSWj1deSY3cPw9ZpGjo9d2piSSLhGsjxTMbwwD7jXCdkNHKqGAuXJzA2v",
  "key17": "CzKH2fkAgdh9mMXR5Kj3xa4eUoQzbAyFYwkdyxJhRzc3av4Av9LvK67AT2mya8z2vG7QE9JrnnNJcHb4jeupmtN",
  "key18": "4oGJMNM7JoKPNuQWFTnFSzFJj7n7AEs3NVwWiUogxzNaU7pzdnvaDKkci3yrd6nExUjrwQJBqw8rfYnAoRcKqiRP",
  "key19": "4Bu3E59qQzHMaQAMSDtizspsVrhFSz1ZUDHu5gGNnizUbXwpP5EonnYcQaY1dVKB5a8J4zmnbQf48T2xH2TUy2D3",
  "key20": "2QLBQu3h5gBGc38WdiEw2N76LKiycBsCBk4nwHiehuyrLeoFvhGbs3sJpaG5NQ5hr4jRYnPNs8D8YWey7WcdAxnD",
  "key21": "3PRfzSaUiJaVAJvu1KxwwiR2ULvXtmEYdRYEhxmm6rkH3JC5ncb2Nb3Z6V7i7r1Ss3ke4BqTBQ9Jv4inr84AExCR",
  "key22": "2pWXmFpgCZ5U3K8MTbCfTfev8DnwC8myNTaYgX9ntDqyNdRFLPXEah15jJNEhmgDJFJd5ZVnxynU3kRWSxewLiFZ",
  "key23": "U8SPkKUXLxFEQWneZC98dTsHrzby689CQYRJJXngxVooe3pTkWYPVE3MbSmaMoHBR2jRfzwPFz6VWPvH8ojLLCS",
  "key24": "4sAd9DoHYDysTXEFq64dmUUqyEC9rC6HK9mtEMavF7redqpJYXhRgHwjUWTEXMoS7u3knRgXpscmgXXzv872hxer",
  "key25": "iFULQvomUvFuPtciHuHEaUmKjU4Vajyi9Q42m5Rma1CzmJULPAjZztQJP1gHhgArVNY7LJeDb8EN88fJpXdg7is",
  "key26": "4tnXq6iyEoj27dqHN3kmaT2obE5EtpvA8c4FTw9Jtr6HfQGGNeUyfom6EUXSrCPxoLwMGh97b2g5B4zhnyk3kxNH",
  "key27": "3jzduCmji6aGKN7BqLS8Cv88DcoXM3Z8Z6B7kKJhdho9YUvTpSwt2GML1A1C1UaDpY7htDUpgaByhR8cB5E3pwGx",
  "key28": "5E9GJt5pW7oazyxM75UvCd2ZY9pHBKR2ZdHU2fWwmxVXyAk6WPCgDMt9KmNtyMRRr8wC4GDyP6tzpi4d3ZLy5J68",
  "key29": "43SnT2z84dqPR1u2Hr5ZaRMtoyuck8HQrYa2HX83kunqhc2gvBBauWpUkzioFfMedmiGcGiEX13B99ZjqQe53dHF",
  "key30": "4YrtZZJwVL5TwyJ3vHnnxvrzmJa9Zhf7nJsE7y1VoMbX2LCTRyN5kUNN15adgd4gH4uxsEfLBfdp23pnTeLmmyeo",
  "key31": "26hM9y1f3uvrPjoRWKX8LrsFbpfc5LMjG5AVUhjHqnRTpThM7UBHo4crgEeiTDDwBemehsQPpTH4qma5bmq2dL7v"
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
