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
    "3BDJkyxpJu2ms7rDMwyxpBVKgDtA86u8k5oYnkNRiJbxTUeBdzXxNdaXLeFG9Ukk9n2aLzHa15YHvMC8nTHxf75w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UkQ1bSEQA1D2tbyf4BQA7MkSYCw7W9STZGrMQXFQStc2fP8HFU9MZfhAwiYhnZmTusv7f3GmaXVSUVe8QjFsNCs",
  "key1": "kNV4Lg8i3twSsaia87BgkjJYdWYYYTqVSHpcQvQV1yVWVDCzg3Jf5zycM5S9CuAQghSKNnJxQVTSxXZqSwFkjaS",
  "key2": "2zdgE3ZcBfxj13pPNdG91aUSyffZxEpZDkSuxWeJFXvCZieDxt8t1QDbjGjV6eVUdbsd7qTrBbKaHpSy6qrQizam",
  "key3": "3htyRMc2SMozZcM6c9BFNj4GCqQkQz9f83z6N6wgfyRekyVUJsxVuwk1YEFvczbWNQHX9e1NUiNzEkdLaJVXuKdt",
  "key4": "455MkcZBZ4L3NxrFH7xRyecvTRkYNyS3ZCiAqmX3Hojt6WcAY29mRGukRag2RaCKA6fnvVwGbHzoaN57v4go2jSf",
  "key5": "45BYpw55YdGLPrHeuWWxQ9DQ1cASZ2fqxWd4PoW4FoX7Z4jKs4w2qzEiSeb7Qpj3CyhJ6sEMoUn8HqX6YLCfaZTA",
  "key6": "jyg4LAAh8JzwMk95YWNJnNHnDK8q9gT6tdr9soEfLYa5jAxAd8LxmkCyvqgcrC8HQpoAuiiXVmcLLbbV9WQ7B8o",
  "key7": "5rqKnAkCRuKyBFEkNRrb4tYcfVZG1S5n56WUFAc9bDLvJZ5ZCxnjaDiLVREYTPvz3rLtVL6NMV3CKj1iPs1NDupS",
  "key8": "37Ax9ctKMVGAKX1sVbes2G8HfpvayYZQaJ9YFhJatmhyvVzA4Tw2WzneicJvX1HcVRU2sD7Q45zJZoo811zKVmv9",
  "key9": "agtEnVLLDxYr2nEgP3QWT5g5WTnSGMaxVMyLrJcwkhMbX466ebx84rdqLmSo1BCc2nDjsaHmkXxZdPLVY15i3tm",
  "key10": "mZ9ELGGr8t6RaEskCcJHmhxECWWcGTD4KxUTREAh728Zcz3GrYc2u1BvLfCzrnGky4YGBMytsCme8AaJmAcRUv8",
  "key11": "2WwWqTxQnuttN9PsEuoAWEBwQhY8Cg1hm81C1MqwxbpMkMFBaSHJG4iaF1s6kQwfNwYS7ZFbbDTR2MsqE32DCyAt",
  "key12": "QKGcxR4YN9aEDUqpTUeDJqPHKLuZon82umucTScFQv2gEMJDFppVQ4Gha1briL2MYQU9v399ci68vGcCoJkj7zC",
  "key13": "2Zun82J5PDRQCb14uCV4QrgKs12WLQ98UgrDMAGDMWBrcUE59GMrbxZzCPuNTrxGNP9aSPigqATt9Qn3CKvnfcYD",
  "key14": "3oiUUDRKZkavbGfmeeAynfrzKd9QPJuLpYjs9KxSmPo54c8EPRJaoRK6BRfrwyFn1k2ZrwB6enkWy5z1kiY91h6w",
  "key15": "3kFQJzbB4fxkca3e719zT6kNKV6r9B2fPL2k6VitQxddDEyxJ3QUPebqzeUUzLN5CHhzZzJ9cH1XpLi3Z8PRFpQP",
  "key16": "3asmx9rAeuNSNBLKWMTMyAzPD2mnGH61xzKJ9xuywQAHpbP5HFksoCzbjYZs89EFKKtfUbmXQQ5qtTz4bcF9ZryK",
  "key17": "2DsMfiENWcbPfEbbS7VYVuJee5i4QxpysecCaJhT1QJ2zoJVaS9AJ7yCEsDg9FGtd6vsrtia1zsdH2YvMsKGgLb",
  "key18": "5fs6nAKRN1w4vetqpEjbDMWEeQw721ygXvLfJGrkoAJobMnjL3drY83FMmBNNKunxLjVDr4ua4avJeXBxUCysJsR",
  "key19": "4qGfMdT1cekihbp39KjXxbfPnmfy6V7ssLZ9s7QeD1rGZKPJTyLRaG5PByDkWRcKjrt9pnFytTPBWgGS5Q1gwPc3",
  "key20": "3eupRZqwGeWkwqHV24kXqgJfM6kA5wmrvKBqoHqm25LxgJjVR7A9czZSYZ9W8M5Rug1RRgSqztw5Ax6jKYLR1WUa",
  "key21": "9uffNDyMRVCzhieX71gigiYEvmqfPWrMEPRYf9Sq3uhunyMyaSRcboGryxKFeLkEHxU89ggeMhM7pn4qXDjrQb9",
  "key22": "4R3gr7pbSk8vrKSSQtZk7k5UZK31mr1Zwdx48oWZtcb99DbmbxD425yaYo5ZjYkXoJZqjhAmsvQNTf491YKX1Z4c",
  "key23": "4WD7eoFLJSeuYWzH3nhGzwybqLazYzZWBsJ5vk2jbbxEvtWsFhh2tfF5PErcxAcjJHppXTPJB3pqGr4XX3PYjeJt",
  "key24": "4p76CqTCxLNC6By6bAsrBpoGiq3G84Z3nvpsGuDsiNXKnPXR3D5PDVoMNTT2nXSHi2xkb2YC5FxzbtNrDQz4q9g7",
  "key25": "3giL8fQVGZ4qqGS6uMaTFmuu5F2iAKeuDFtPcA8YYbAaG8SaFL9BVXoFFn1qAFENj7Y6NGW4SXnxBkuyJJJnegXm",
  "key26": "3uAEvK6oG5URWhvH1fN9mEim7rM3PAiMNHowb9ahzVuwYKi5kEgvxDeSE4xtT5PUoaLekQC32Ydzj1CNatvUcMy8",
  "key27": "46a6Zh16N42VpMy1Zkfc37438hjBM7GoMiFXbDfAKuHMrmUeZbzVYLZGZDvBjb6VocwvKztF3nVKaL6LW8DMrboN",
  "key28": "3WqMjeaZgofafbLR1zgVyfom811tHvTCmKySE5YmgsNMtpStLZkSK9P9rgFTb1DnLBUuG23Vezin6VFukbcUwQMk",
  "key29": "3tpgMndfEk2rCHQanAHy3rZSF9bEgYJR4fRiQ8fYDDZ8KcD5ouuWpProLfa7Jd1up6WSTcSwd9ASPiiAac55ZCmy",
  "key30": "e8BrZAtjhqQHx4AHxpxtQkk1h4ZY5XPoxBAfhBHyFom5AfLYbKrQrUBqLxAedzLXJnpRoeEpMddepjsJ1CynnEA",
  "key31": "25Z9fGcG4VuXFE3ckP9TH5RoJyNDJS2DiD4rK4HwNmf3jnsYc8TkaZ2tWzvd9iAHsiuLMaGUZyX1Bb8GAhqwzZwy",
  "key32": "2dahgFRbbvFXfKng84vW2juUxftfDjUG1c32sqWtoQQbAg3RYoY5eysRbC3RsTcgwynVv5YyguDMxVwqViHvWfAC",
  "key33": "5RFxJjMbUGd4Ff56Z4auvJsGZkkb1NrEyeVxSJRhsdh9wC1AYyRskxXwxk78hYBmt3EvdVeKqJTpKWEkVqnSbzE1",
  "key34": "eupwbdKDCi2e5rFf8Q3PG45SQfdehYTRoaE7LuwAikpzJyShZgRe2Z85vEME3XbLAn2iQK6vZmRw3nRf8fC4SBw",
  "key35": "3Rkjd1b79UumxwUBkdfvzb4nDMcQpMennbd2Fw4V83ASvhoNvPmpzr1KaSn2VSa9bdVQxeiuuwejtLifFrZa6kFw",
  "key36": "4dGbjcRHrStMFRokz4FBqykTw1ZeycMvAmkib3RQtzqQSmj68efCvm4ky1VBg6eFqCSytcphDV5RzcKQmfSH56dF",
  "key37": "2Qc5NN8msnPr61Kmjrq95YHB9Z7BWDqFcDGCzdNa2iF5Ajwsdx7QaZNQ1kGMiQkF5M5tnrB1mzfdY1HNuXUzjfiJ",
  "key38": "4NHgfPxUpWaFYXmQnEYwQ6JTN6nUo6ztdxK8H8iEXXCJAhBBy6SQz2MLzagbzZ4P2J4dgj5W2ECgNqHPNZXQkpLd",
  "key39": "669cPMc4AsEQtecXea3wyMhSzoC5zCuk1DUNhS1pQaJyid8b23pqPuHj9U8kSKSdbq7HZM7ymttznYR23jf1uNCK"
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
