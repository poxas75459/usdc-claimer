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
    "4EEsZ7wDbYsM7ztfekQPGcB9yWUHb82md6B4EAXF6NBZVJx64Bx243bN9HuM4FhTFzz5BcDwpaLRr3qPTgQLPajm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDdpxFmy9cvxov5bzqY1bwPbSZpGY1sRDaN27tDLUAcLU1LYuMaWYw4CgjMMq6J7G6X3sMjPDY5DHjNMpw4wpYp",
  "key1": "2kyXLj61TxZbJ4iHB2WEbLJ8EBL67BB7p7UMt7XP3qPK5q3TECvPnFnmoKtfSBDwjo31719Ggygd9yf5GHNNkmXs",
  "key2": "Zm6XD67bQnKv54ydHzXJ86aC7RS5p9WQ4MFX2Ui1hsf7BC2ij1mdRtSYct2vDfbgM744QMZ5h8oiHVvvbxV2o9B",
  "key3": "55Qc1KsYMS8z4t8ap5RNFrounz7VPmM1Z4qjRwjdfaCmEBQYTMvqmcY6BNTupx6ayDXRCiTaPbeDhXNiFKQysZhL",
  "key4": "5TCuJCsHu7SpncUpYHFzDvGsZjWj4T6cBxXDcybWgcqa65nvE3Qn1H3XpxLhBkqjNR5Rgd5RYznFdq8SrEtBuqzX",
  "key5": "3ZrRZmyhcZcKSWSiCypvCQ68HBr893Q99eH6BXM9HWXMqLWXowmf8PzTCHkciiwKGxGhDo1fZGDpH9sAFGGJYWHC",
  "key6": "5Qc1iTkhwfGDqLVQzkqJYEAwb7vSyVHcu3mzGhjfjToyY4abgovuaJZqFFLKRkVLpXJhCYFviYKRewCZMB4RzLYP",
  "key7": "4sfdwvjnmHVi8Pm7tSxaNQhr6uwf8afuE9rYU6RnzzLjmoXMVRUUAker53vs3Z2UzUgh1HBpsJ7fiBDriSaGgLSy",
  "key8": "3rbSRudLYM2bpUns6LDWwPjXECMNQvYBejdxpsYZ4SmTJp7TsPqqKGSMqJQFhtHH9iZPMaeE6d9q8ion8q8ccnek",
  "key9": "4a2eAgJrzhpndQoVoJecJ9RrkEUcfCY7i1fEPZkrDK8QiMqzZ1EWYymi8rMzMytsD2CQKcUzBmB3QFRJQn6PRA71",
  "key10": "2gKqbxKqAufs7PmxNZ81Buhb2L38X6nJSbTNQfqtSCSd9KYz1nfteKFE1VrkvRRSutwP6TH5hPaR5fi59kwdQ8Me",
  "key11": "3En6h1JT7SoVsdtPEbHjqDD2vvTASU7hbBnLsQdGYdKGTCJmHS4ox1HgxaHim6HTgxkcYgKkukhZq6bWqvFyWX7a",
  "key12": "2UeAEfQEk4EhjMYDtrZxv6rk98ChqHzQVK3yW3NgUTyBDqeK5XYjrpbL9Q8ZN5Ccy8XLWEE7As5J2a6XtWZDN1e5",
  "key13": "599QALhVtbukH3L826sZFsnMkLcQUkQwiGAeB7KecTtwsKgniJAEvjkidi8aewxf2moUw7ayq7tQYJPiqz1qxpK8",
  "key14": "9LojuQ8rdi76ddJS1JzqnhwZqMDE2Vb2pJdCE9WFxL7ddtSuiKaX8u9zVZLjC8K7U1mtxaDbymkT9hu5MwY6mH5",
  "key15": "2wg2onapEwZAb4iTuPSTmmmdq57FSVesoiFeFXiSi4uCiNsTv8TgBeJQqLUbAp8Gu6jWMG6tESqt2VoShvezBeET",
  "key16": "2BcePStoytZDeBsDZtZugHE9Ca1DU1A866FsjyvFeDnUKALAzsZUvRoqkgKeqoMCEYYn4WD6phKPccsKBn6ovyFK",
  "key17": "39a44rMZj84xweDnDsgy8pESVbZvaDNnzYVGhu65s8ATAnJYAK15gUiRkKnZeuxhhGpdMxUHLa3U1UvRmum9SyKf",
  "key18": "qAGCNZPAMNzqCw99WvLfoCjVnVU9WCcyshZSBJHVEKpY8K11sUZqNoXnZ7TTA3y1rL1df1QY7crxAT2jo7TFcSz",
  "key19": "xAxCMWHcirPNuZERecCW5ooJT79tAEh6rV46QhU7AH2o65YFFzfw3odMRRTPvDY5svBRuuCQReJp7p2at2BZcCu",
  "key20": "4Jgrv76Ae8pUcvmiGNZHyQsuTRHWCFejVqggBYvvczKwbpMvFkPtQJft8QVkGNK358qTCvqHu2QAho1s5pxbAVki",
  "key21": "4W5DKEVRyfjhXuasu475dS98uwa9BvF3gtoMwogq7t4EXbhAzQ65u7hGDLuXAsNYennDf8XLNgHwvNkTPmL3qzpL",
  "key22": "26Lz3PkoCxgaHU5syC7cu9kiosQUJQ9tqSf2GYWGGNjNpYqhTDBV1o24g6QCGBYjENX6hABW7RXdpjLNWkd71kN4",
  "key23": "5JZrGFHBGMyTCvYMMsmCb7NhSi4kZidVSeJMSEezr3z1FX4J6wdojx5Bsz5xepY1XcnJDg3Ymn4MFpxiGGBA5XsH",
  "key24": "sRCKs6vqXw2XJkg8PHkvW6C1pRyvzN1ZFvLjMtwd74bMUiJ1ka54uZh3d8yHXWTsFpFoWfjr67qqwMJLfdN6pHG",
  "key25": "4LAnp3uyYShVq4qfNbm6vFraNYVPUopDxFqECBYfdmrVux81nkoBzLrfTZWqd6ZomsaMW1c4FNdfN7jrSabUtoVi",
  "key26": "4hz6ytcQP71oQ5p8Mfatk6PfVfMhHhmvDJJiJfDP8y8ALsTTbouW3QpSfP8MteQM4Zj4GtvzjR7fWA2ywopG7M2z",
  "key27": "66fShwiNtnr37J2mrFfBKZf5Pj9nAUiaWEMj2p6HEdFALefmL6AUJmxmZzggvgoCpN7UthjZXEpEdSSiBdYJZ8oV",
  "key28": "66YBfwqJFtVcm6h1UZGJAn2PDimkFcdffJ6NiVLfSgZcVJvErwJNurzwgVUqjnJCyfa9ZfNnT7H7J9ntFDkWiPcG",
  "key29": "5r2vvLF6t4xCsCxDvHcduy2BkpU8afwVsoK8Qv3A2aSzmxAh3MYFniCjmYQg4a2QxjtFyZKv1d6vPA2fKdZMGcWt",
  "key30": "4WX3SdKVXBKG8ozYKWAiVop2J1yih3sQUVEm6HX2CgzY3qpcv1PYLKNEAo9L2tLbUDg68mRztLhx9f5awYsi5ACv",
  "key31": "21NhaR5Pig9sFCHcAT9pGEmteXbSKiAKP5Eo8qpJemMuhoJghekoZeY8oWt6eWbtLJGct6gFjjyeXd39CnLGu6WJ",
  "key32": "4c1Py16C8a3dKHzvJDxsEfQ41u8YWqN3StueVnshEq4b6KnGjUA8LtTUF25m67gXw66ZD1pvorvGuPQymfBo8bjp",
  "key33": "3znLCegQ6viRAFf1cyHSdhptq4ntqd4s7FYpPBJD1HXM2ZkytgwRj9jVvF36N44VtBCWQQNcQ5FGeFW2jRT6XZwM",
  "key34": "3xWD8kWM6VzCaywYKQjBtcjknwp9X5Wiy166GrbXLd48eJja4XasXcyf36zLUn3c9ugUuXZKxVihyR7sggWXfnbt",
  "key35": "2zSadn5X4LGtofTzVid5w1oJsT67ZSuEHHbDE9n91BFf3RE94e7MrLj1UfYw6G5jCKsoVEZrAbeY8TJPH8b6e6L3",
  "key36": "469ssu3mrk7B1jPy5EU5HtLJHcJUe7pj25DeeemPBrPJspneDayNK1UwuNFYWdDFdHHVyB8WDJjZ1hG5zSh8e3dP",
  "key37": "WS9ZF5qVNaPc7JVwRtVwscv5AAPTzqkYk1JEdRqFarQGHGWe5q6KMqTEizUfb2tY691zJ7e3Vp5ipTAxHx9VoEi",
  "key38": "24zfPSV2LYhfSYDc9NRUUgaApt4scJn19povRkda8iS3B4N7j52zc7w9CyyAjKDVTenjLeMv31ky5npVjcCrHBhT",
  "key39": "33ptkN7SCBCXf4vXRqJGHQvMiwY7ac9EbdHZQGAfLwDFr5x7uVr4AaxEyq8xSramq9bVr4Xsieu27dQDGomT6bDJ",
  "key40": "24ztbK6REhpmhGo9abLvSr5waCfx4SVFdiNgDExSxY2Db93HduQAaQi3uEZGJ272pWmk75rCSfkAQp81VFDgdUue",
  "key41": "sgYbZVWnCkwGnXXnEWy55kTsXCZSJN2z8xKSpRuxmrsaW8XqBW7aVPXBeQzkLjVTjSsi1kZCm9XWcdB6KFxP7J8",
  "key42": "4phv5NmshviUNATeTgMAbAmdMrPY9EmTNSqwADSujKdbeXNTJfcy5xt81Y1ZmCj5Hm1qPLfDSr6jHa2EhQnM8cR6"
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
