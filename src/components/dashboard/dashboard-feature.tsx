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
    "4Fpo1tt9wiaFwDqy85DHcT31yNnHE8bnYhxaa2MZ65Nxxh5VSpUskBw9J8MmrJeDXKXzFzXfcsr3oErzKfwPnAES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12kWfZvMsK25e8XKTuFQzCtffQ4mADnUD39n3w6SRua1EVttc3jTvQRLT3DWMRfFBECimsBuJEANyHvSBQDsqe1",
  "key1": "4s5DWzf4sJK9G92PKA5kLTck7bbB1NT8nrNp5ytsFwmffeNzYCkq5U1DVPgsDAKzVP9j5WSP1L6bLBCZKeYaB2Rd",
  "key2": "LPNrPAoVgyDxqyumzicQxbJDVzUc3LZL6Wo5XpgcH3apGwyG5vn9DEP5GT4EoFMmyKuou8jFMfGUKBSLAbzTVT5",
  "key3": "u2cJDXDC5HkHkWc45RHgGk17Zs7pmQiwQs1QLbF6gMoZde7tjEVzLZSedmrAnTYqXXikXkw686p3v3Vy65XrjJ5",
  "key4": "36y3bne1iaaigCbgxFd6Ae52ttTfNj8vAYD6gdnGs9EC2fscPfznvNpUZt5DmUsegxtn5H1TUaKoYpUXABcxf2Xo",
  "key5": "36Umwkxu5J78xnmERactH6x7PGqRi35MYbb6b4QHyo2zKRFAviPFBsnkbQbQaijTh8acLN8pcr6mwXWx213UkuVH",
  "key6": "5ze93B6AVBVru196wN5iV1n3L2iYQhosKJawXZUWqNn9sS5WaRqSRBXdW5nykFDBDTDSxp6Tawmhpra8vSoP5Ns2",
  "key7": "5DdNWQndJxqxy7PPxDKZvrU5qUexAMf7sDu8qcakG7nPYp98BrUMCBSaQCifgfW7brLqMCCAYGxxEPgMaydjTRqB",
  "key8": "2iBimuoC2AEmSLppwTi2Z3pdTzESoSSbxv2L8cQm3BuxFvz36coFwQRva8dQg1K8bK9HEJrgrp1uSsFoDtep4sWH",
  "key9": "2kboKdSsVo9rwFXYtUd9oFuTXDMpUgmt3aP5a87nhZ2Sk4ofpEJU2nEbPGPeGGyQv5nuUfPH9F9zqZSK2PBVEJdp",
  "key10": "5ZdU35rztuydghEwfwNJ7EVXs4Nb2doTgo9Qhvho4mo5u2D8KmVjcwQDQkqMwEayA59PDHH7RS4K1aixVu5fmqMT",
  "key11": "5e5shzPbPJD6G64zZpSZ94eMKsp4prV4n6PkhfoKmYtAAU7baD2aGJMML95nuNPUAUneHqBCzkrT6L1CecVAx1Gw",
  "key12": "3CHCWG8oQ3xCc28ZHhrJ2GS4bURT2DLdd7vWmxhXPp4KsLtMYaNGa3uEcMy3pJeDN9aVpQpwuGVuYtiDqSzbpWsb",
  "key13": "22xgbYsAUF2m6GvkZ1Pp7Mf1AXWGGAUptH8xK6uxd8XWdc6X5hBhM9A34XfQhmPRmdjt6GDahkBi44G9zp87WUmj",
  "key14": "3mY7Ws6trvouRGUzj1etfxzgtqkJW95Arz7TvhsdDQ6e3fS5VBAq7Xfb8gGxLtBz7jbDQhb5qmU3JGiMJxDDijnh",
  "key15": "61yXHTa6x6pJCu5zAqep87prvnEkcnrrXFxtFaCHb6o37BjrKXoa4yt9njtRTY51WZ9SZLrVoA3gJvaNKEzDtiWY",
  "key16": "5LgHot4EzKtXCqCCjv8tU2iP5CFhf88YPCkquJMuJUHiwVQswLTd6nbjRGtLfximmCR4bsHYFryRt4ij6Z2Gysvk",
  "key17": "3WSTsP13GoaKbtRSXktQWJ717fDZPKodnUeFHywazaQH33miEFHupLJBM6aH1dXGG7TbwEGz2ijEsGo5XpuWE8jJ",
  "key18": "23CiUinqP3ZoDBC4FuePUppeZEdoXaJZE25CSv4DKFRW7WFdpVGrt8y4iEH4V75VDvj1P82HEyUgQh5EPSNUbneb",
  "key19": "3MyYwgkGqcNBka9EEzBB2p4DyBzmWBaDboMKnyenDncWh1tDYJJ2ZZuUuhDRDq2eCUYPYhBZ1gefXS1ERxMSLvZx",
  "key20": "2DNVz1PXjVih2GmVWxAHwkiiRLuNv6VgTo3PLu2VJX2zpjU3sQKpia9Q7TANFXCnpSt4ii9b1tHwb1LgiacCjpo2",
  "key21": "4yBZY4yVwF4jbhCzMmwWtUrKZu2nvuhvhn5BbNt5ErJJhh6DQrQJqD7kzh4bjeEAYr5z541sfLSeE77NUZ4zFamf",
  "key22": "4TEuWh75i4W9uF8bufc7q2Vvyvwsr7wKBHVB63qLEN688hVtLwdCufDDLvEg5LHGETReQfkrbd9sRdjRQ9npZZcj",
  "key23": "5u3cBbYYuo11GQNB4rZrwhLDrd51sdKgq9XgfsEprckDtj2afXVvf3H3ycf6bDmDbCZAxvXKXbGJh1u6yZU7BhbX",
  "key24": "GTp9c27gS6fDRNuKqGTfZUs8H4sk2kJFpARWCpHYqzWfzwPigfFrxeXQJdv1tXaF1KDizBtefL5DzXnVsVTymks",
  "key25": "3q1hJoyCWkq65woXXwBr8ZgdBYDn8TwpoPEEF1gXVUFsqNALcbh2dbjY5a2hjufCQSCZcZEW7YEmcdD2oDZdkY8k",
  "key26": "3LVwd9bR9pRjwtbD2wSWae8heKbaoSEK5RpFxdQPohrTBjmnUTNCZwoBGwE8atZihCT52U5vmxf4phELkKZW7aCv",
  "key27": "LoEJzrRucHiYJat29BT2Cmh4ctdc66cHdRCCGvtWTz43ZRkNidfGPoNVRWVwWXeQCQ6pv9oT8pWCKtmuVsUY5sd",
  "key28": "bSDGRMiBQXLK7DPwjBNfyTpP28GJTYuGGxuwKAAUKJBFev4afQMoAE2kHBW37tbNZEX7yyVgLAWNJ627gh6PNAz",
  "key29": "2CSfUC1MZCEeBmXb4dr6wJ3E1SmkLWmxdK3e4WrvTFrMskmRfMwQaKA1jBYWTLAezQNBf6Rh5DXRNr4Ju4XhukEK",
  "key30": "4U8VSRfemSx6tGNvNk1Av6wkuWytPFCmg5Y9jm578zHZW2dszaU942DT1TuggF86QpmdqYHtLHNtLci65n4nHKUE",
  "key31": "3Skf3bXMq7Ar34VRzcvrrYwTrgp14x3Lo6XZPhBQ2e3CqCxWEqYjf8iYtFQzasi9avmvZqTemeMNtxrPewZiKdr2",
  "key32": "k8q4XoVzqqoJp4MTrEBfQdswjGzbNX1JnQuzAibVdBaSnX87iHpX9r6UA1JM7mFojzBjpyULumA9vBmA82bnLUf",
  "key33": "3JgFPJyP8n3LgdwQEypfeEsS6rF2hAvLBUTwVoToPQBeax1J1ha3kfz9J27McQMZ5Am4oHPrPAoShjjM5RbUMqEb"
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
