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
    "4FNK7ocyaLgbksvsWBuPz826ASDt4bRerZi8f5PAaCbRn4p4BrCLTJrsxbipgfNz1zfu2V5W5yPYv1yJP3KJLMzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WK3yKkzZqHD4usXy8M8ackzpNhgoVnCkr3mZaAw6L5QeKPvSXbdSRmG8iZnEXtmsfXWzj9Bckq4MbwLdvBGknbG",
  "key1": "3BGFFxeBf9NxC2UjyCCPyrVprSvrV4dK3ZQzULMACHD5GUjK3bV5En4t7sGrjNyeJGPywoJuBzxsnnMu8XFHw5Jy",
  "key2": "3auVnCuoL7mbqYTDTANox9QJ35UudeGQc7tjzw2k38TU4Xc8txGjreYEJJ3rTsSWrTYe5rwcnnR4xhj338ZLfujx",
  "key3": "4RB77EaGVEUj5QgKUqqEsR8s5qCxf177DYYfZEFZjBbqTpu5R3msyz96Y9g2XiAgrVmnfCRPSPuj48ekdqYh5Nbv",
  "key4": "5oNhZcZ3UwMd8BJ1kD52e3yxT6ZsPCYfsG35YXckChBxE6hBrd6AeSvgVZMUpRHWg7FJeRvkmjgg1fiuSHCrJ56v",
  "key5": "3w3ifgcyViX6LMaFLUjW4AGgUErPr1EPRcRQK4cKDeXfpY3RkvoonyAK8eAanKGRnuWpLdDy5xBN9mLP47QbmgEk",
  "key6": "Gt1ZnTrUXbUjVzMt5SdTxG3XEJsTEsMNxNQyXYnEaWxK2DktA31za47h5TFdfKRoWRWyZK3twpGAjo4dwGbdq5X",
  "key7": "4WeLbyiSvJCBJvjQ4awaCrX3UEEDy3bpBByJGZcZFqkdf6gCWbPbPro6MWzVryQwKoxsXkANEe2t3PanrDu3rN7t",
  "key8": "5ChTpGeBH3ooaFasUxEMXPpoHdmph4itUTLMeDA9PPkzDYnpJqtjKgnPXSzjBGrwjGcPQYepCUyYNec99hRFV7Ps",
  "key9": "fXPnHi9s8BmTdEhvAFrvXV75rgbpe4XDjCDcWLJf62mJjtBC3wQxvgpo3zZ7Lu8XA6YQCb91T2fgmpyRP2U7jgM",
  "key10": "56Pmo5RjGtGv811BYPBkeYWGQ3ojw3J54LvZWhHNzwLfNFSL3upENmK1NUfCegcXjDekqjdYTixdXWLpqc52Pndx",
  "key11": "4n25VfWp2q7eRHj5o3Tg81a78qF5M3X4UBqqs7kgqikWLM3E8HGJuUqbY6RcxChuTekzQspHszKdZAobqnHnMtug",
  "key12": "4a2SfQ5S1j1Bh67xM3Zsv4FpL5Sm4ERK3ef9T4dg9mk8mcL4vXxgDGZJt4A26MBkMYuX7xrSZD3jQjnT9hqQi3Vy",
  "key13": "2Kj7eaYfWLZzZbkfgi2z1GrX7jce7fyuBcYwnRWcSUjCXrBciRuUKSAzZvBHn2SadaFQMx9HdiSFwYr7aQ71GgSA",
  "key14": "2DXiP4fG6FunQfR7ApxQPtVugKSRkZd6qkTE9PzRkVe8KEUdXBgnk1UiV4ZBpBcDsiYe7cCPQ34518HM6Fkxo554",
  "key15": "mhqXiPaov2EXMDGcCyLZXWW5AAjhdFfD3DeFSiLWW3QiM7N6wiUhTXDNQW2xVgjKya9gXD96iN6AtWwDdruB2Lg",
  "key16": "5Ubf1x23yySY3PfQcSRu5ms8fQ2XrkK7K3eqbc5ConP2zErhShcVHrG4EhfTjYCa3twSvnreYYbbeEBXYEqLe9Qp",
  "key17": "2mEVPH4DbjLYzDKAGSSWHe4BbLHKNr9udntggjbxGosXm6QdMEr5izUcbSiGjCzSG2zc3cVYegKcVr4RMzPPAzsD",
  "key18": "5isAE5Ld5cmiaPUnJmKSCA8GCBWqv6XhhZ6NQzaoae2kpWVmy7xVqNwSin9Mgh5JneFFyz1dMHiP4uuxrg4Sp1zh",
  "key19": "5i9ahwxUt6h688XDwFyNzaMP1vkJu7GwHJcBHUM1VNzTntVuchGMTBPSnR7ktUogXqkNWEgfGXS9hH1Yqcsstyc5",
  "key20": "4NgcFzoagxRhVckzHeKqoTmWG97NXvUVCLRVv2FRV4x5YHgAS33Raph5ibqm6q27f89FsyC3zfNFfBd8LwA3CTTM",
  "key21": "2CkY3xnpd9ANZ7jYvzm5zkhKSuUdXsHPMtsgiAcaXbTZLQDEy8nPt9P52hh9qmWDiG4KZgQ3bnFXLQ49jjzmur4w",
  "key22": "2QAj9edVqzm1sDhfS2FzbZk2imzSyJQqdpUqJtpTEsbGBzAzUMwmmYC5AA3cLAvGQrDBaLnxjwsQxk6pfnAFDM4G",
  "key23": "w7SRHUS5ax8WdzZbSAj2DSuNtSbm7sLjkfcXuH5jEP7EAZw7MnVLZfh4Pmg4DMFDdrw4KVY2HsfUZkxM2xUM7ac",
  "key24": "5SeeKff6xhbh7R3J35Vip6ATUm2aBFpA4Wb99K9fhJXw2PuBWpeMoy871dNJUBHskrSrTSv795fj3LR16iGGx7EX",
  "key25": "P7bNK3oGPio8UQe8dmr8u1wyxyp7QaoTg7GN98Us8FrYiCHJKEdjgvzUBWbaW4LJrrSd7t2o2cW21kPEHS7fZbf",
  "key26": "35jESCHNCpw4bZNjodHyn6sRw2gQkvzkTqhsQHcoSnXcCs8i9PMx69sNwx9LMaa3Jp5qvYnuQEPgXNmBvK8yMbJJ",
  "key27": "5Xc4jZkTELyXevDUun8UaE2u1V631SwqXtZtbazpNvHN1G3c84DdsptpWxTZKmT5RWrMtrPWgfndjNbqSpWKHhZf",
  "key28": "FdycdMkSDzENPG9GxASy2kenv1E6kNuSWNjwb6XSyHEJpGMtBoYxFatDRPg2FgKTS9VVicn5f4Ka8Adx5fA8sjq",
  "key29": "4d81eTfXqQ8ybkwcvkWGpxy5TMZcRwhcyyD8P2k8aRRjK5nVKp5YbiAHJXW99GZdt4ytSFBcc4pSJCsP2nBM5pXR",
  "key30": "46zgReVkc81jM7GHw3eGFNBsZQhZvyZSymnkK1BeH6ffLHJ4NCSfyahxAA6LLbtM1sD4Vh39AfK3kRjqXbAgfuFG",
  "key31": "2gfNiXJ9ckCS6cLrA7wx6pu6oagQFNXccPHBBQ5MrXgJAhYTCuBRHAGxXFpUGWaH6cgtPzxaWPcRN6GEm8dmzs8o",
  "key32": "rLZjFPuU3JU7eLsoRjU9WKaGunf9wrevZKvEHzsLxP1Lg8ANNFzTgLXqDgtrT2kv92bU5PTFdERF5FmrLk431Ny",
  "key33": "QoPRDisqwN6CMoGi9xeVdxLCHcyKbsRHjXJL96WyAPnaMRpGaHfP523mTHWjEGKrX8bq9r4RNS34kP4mnQjA9oy",
  "key34": "2jPptysJ5321rGmYb16sbmdYSinvrfidWtbd2VuHY6Tcv4PKuCqBY2GzrmqSKHKjeERvmQwCdMpyJnMrzkFP6Jdx",
  "key35": "2PzWER3WcmHbiZsQei2dMZvoNNpJqqCX3Mg61UAdMqXZ4ZJFYpQasHmcNxUKs9jYVbkawbz2YSfwmaHv6CKjxctL",
  "key36": "2LDufF7obAGRMYnxcXJxDcPzeu4czEKL3WgjTA6F7z4LxeaWFzPrp7xQZQbPC7Kxb8fxm5Nne8kZLaMf81SwcVXF",
  "key37": "539c4PrNbuqVrV2h9Jgg8bkf3STMZwgNqFxmnaBE7j8sWEqHY8Lf941B7UJjvfE6tkgMhG4CmH31LMvBLzAqPsjX",
  "key38": "4HpSJ7RC1PNGigsZQayQosSe33PhvmJMkcw6MmzgbsqpsnCTukjefKX9RCpTL1SMvoKC5vFM2HL5LsN5zdGsF9XG",
  "key39": "3xFbpupWvJDPkNGqmhz3kgKeRAaZCsKVi1EkkKohD2rvZXjz8MpPVrMwQt6RMynwwbp2JoqthQSjaYDvJ8ABWybD",
  "key40": "5JNCCGQqtJmQkGvaXfNaf1epcJTXhmwijtuvBR82T6BY7iLonJkCRLxSK6gjfuz5ZNZub3MtrdzWW66WQmvLmFMR"
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
