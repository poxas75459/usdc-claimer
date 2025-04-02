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
    "h9dYdhGXPxWgTnzeF9kTy9cjrqCAjBBzDJ1fqc2rfGeBb3yxa2fXYxXaNWKX9kQJ5r2P1keTWN2sBX3UU1Lb9ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Db57Ka1ZqP2B6ZF3Kwa3mWAH9NY6mRcDQ7gyRCFt618oqz9b2UCwMygmLRPnsf7L4MAUNdYDEgqnzC9JLZHVVx",
  "key1": "cejNLFi34EVSkYvEKag4CEbCQPCLmoom8npxHMJogqMtw7ySK5X3mQq6WxrGou8AQPa3N6anRwhamHE3DG8dpbw",
  "key2": "5Ly5msiqSJEL2RFkiw1v4N4wjp7QnaMqSRrYpknkw7qHRBAKNT93rWc2tPyJ2yAiNQMdUyAjfHWBKUcAWy7pP3p5",
  "key3": "UpubUP1mfLFvbHgRT54M43AfXhvSPb3scCPYAQuwF1o9wAuLpC9aFLCScqbvTAkRZQUaqcj8pAZzAYHJ78Kh6hP",
  "key4": "JyNMhTLF7aXqNhkJ3ybW4ke4bHhTgUYtmxopQY5BvxUJ98kgZPtmMQaVVABoES1Pdci6Fm2U48fpcZ3jZwdTnVR",
  "key5": "2gBLp1s3P5f99VCxAqxa3n96YRwakYNSWbjqZV8SLJLWm3sN5kc3NdoAPYpz1Th92PHEDqHCFjXG1QcoNyFCi8vL",
  "key6": "3jSNFaVg37FFTdJowQTNU5oYa38QTL7zcqRQQ3W9H9eqDnXxoH7e1uc6MvAixokP3TDzxHm3Bd1xSY5Z19bgEnWN",
  "key7": "2duxpkAKCcdf5nvYztNzsLTyovjMfTZ4P5tBMBWtNBCHrh7EwrhUen1AHoqQqXpGZnkFRd2JGUqxBPkAir18ML6U",
  "key8": "4ogs93nV2zMoqSjcd1Xb68CusoKWKKjS64nDdCxyCKLjZ79Qbv3LrkL7bDbJ5Qt2qrJj3jriur8kaFgJgVotAWYz",
  "key9": "5duEEAn2CAUdqZthybEgpymTg6e9ZP9LtFnpnVMoZA9idK1FZFTsE6aneHnNwDKweqtedpbPGKMsMzkt8GWdrjhK",
  "key10": "qMhVwN2LsF4bnCnZjmMDcneFeM9V67wsViN6NwDxEAnVUQC6niuEyPZV9ytgFS7pJbhDFGbMguvmPJsesR1jEow",
  "key11": "2DWrTHzRFQgewzyYXPgGe7i56KwfYxBWFHnzvsSBKrmjocHFFazjTxdnPC9fHJAk9f5thcu9gFRhSb47fpc6wZ26",
  "key12": "2N93fRjYtaLCUiTs7tMJckKaBmytD7BLzGoEzWdZhRELKHYh9HggrnWbPF9k77Lqv3zr6SfXK2WjoyqDgp5p5pw1",
  "key13": "5iwx51FyY1xoNqKwosY4ksK7pWje5pizYoqumQxEkEGoebR7aLpbbreJKcSQKtciMLhGEuSuCY4WfU9mNdKWvJef",
  "key14": "2cMHYrX5PGsGx3jawRJsKTQ7Ph7zxUT8SDcCd3WbCqeV18NBBz3rxNz54vKfZ3hkKKd5qpkgmUDfzwvX6w6yyMPM",
  "key15": "2iw8jdTd3M2YEKDxggmshXVzemCFUXChF5ePfRxQNpEfDy6VW2yJqbPLXEnhm1i7ppBxV2aaQZJLbHgCY33hWKu2",
  "key16": "dGb5RPs8gURGoBFTHLtmvd37qLZE5iwCwk2JKSKomCdKHTrP1hpmBGDP7YFzAkAQDLwwLspMrga72MvLFm6zcKL",
  "key17": "JDdrH1Q3JwN679yumQWJmfzfWkCAiFugiowbuazqWWTQP3y7DBV7b3ihftPuhF4o7JifwYu5Cg7uHjUZshunp2D",
  "key18": "3fVcypVagMpqTZ8CEh2VKhgpsLb1L7ipxx861Vko6M6NadiQbeDLi9WWFdithN4E7PEKeWDvmuNdQhAh6HpcZuqq",
  "key19": "4tuiTvRW1r5oqEzXuUvzuymXSvAjY2dUYbH1d1HtBqrPCAsfc4rWzibPKko4ebTwpNQy93RpwE5W94MF7WJo49bQ",
  "key20": "4rvJ6rpDQqYTKWoXLcgNuTemdCFRiTTGmW2qUpiatrnTbmKkPhgBG36n6CDCqxPAnM4YSSUV4gqQLn1MYnHkYJGF",
  "key21": "48F3REKUtWDLYMoLebnSJfBR3jyehD6c4D4Kbo75v52TFuByt2vTyAAj8WE6hwsdkbQpJPssKTsmtjwpmtz5yQVq",
  "key22": "5VqLRMTqTtvQkiB9jDrB7xkijREUT9WcQh3PazPBtGhL6F3QNuNWJQXQY3aHxYnWL1vPtSRnPz9Xd2SyMgeUnmMc",
  "key23": "4z3jR3BSs5RRn9nSfRFyM2UWiEWojTVVSms73qTB92K3SfGJqhwQAR6FfFutrzLCdyYxc6tRn8TSQqwKuGXXk92T",
  "key24": "5pEsued42Ux3yPCZBRus6KJLptQo7hwQ9qmCXHizH6ehQGS37RkiEoHFt6K9TSa3YqsB1Z6aqF8F7fLBmMKEYQLH",
  "key25": "5MKXvRCRbmNncMt7NAVyaCrtXCDwHcJt2hnXLXMccNjcP3jH3es36oCr121RCvi8qvp7sPEx3kkBSgjvRdLkQaMa",
  "key26": "2sys5CTyRT1RG14Cn6xkjM66bWPH4mdjGQkN83jYFd71Dc7oHAk4KxysFgzSuPTnjJdBxW7hSs4Ugax5E86XBZWN",
  "key27": "5RXwjKuoeUcMHwqPMVYcKPHYpH36a9kLUzGyAUdvSFWFW66CpwvbDDYiXkW2Cskbe4r1EtdxAWwQaDD88C1P8aH9",
  "key28": "2TMpzEJKLKYZAvycpobbF9P27yAJzZXMN1Z7ZYWh6gcpqSbuhd1RiohiU4spUzH2L59rSbys1dgWNjmCDTMiAGTs",
  "key29": "5jXLUVTpbwWPY63HUS17tyXvGCPEr83NqnvESiitBB8ZHzHjeoKGGxQTWQotjee7r6FAfpraGPc2UnYHGN33bbqq",
  "key30": "516fWpTRrvz6hBGGJTwwSdyqQDtHfM3nBfrQEBF5T2oFL2xzCgCai7qW1n4HJ5RQTjFAinAMUCyVFMhALuuAxgTj",
  "key31": "2mqgukPMw37w585M8ufo19FKvU6vkL4CiKuNXBdtz94XtVn88qg3unW8hWXabWLjC6jCVCmkx6To3b5QiQULAQBz",
  "key32": "4XN78y5GQ91pPbCtFJiWGns2ZrqW76vULUYRaGKy5own35QQW9ox11WegjjWLZ5ZQVBxCPRtNRRGVFHcPobqPbVM",
  "key33": "4p48AjiNF5CjaSESfUT7MNksBxDcn92gM3VdzFXpuTYwJdu2qecUdKzY2JhCzushFWSCLne9yAyxLhRr7G1qNc2N",
  "key34": "2PnK99kEksD9GGKfBv8ce51fNeh7i9nmszB26ZEbQg3gi2bNqGypNXZ9dqmngg7WAP3rjhcC3P8eH4AKxK14aAee",
  "key35": "FDUkcFb8xkfLT9zLath91tdLtadgCoAdivuRyEZ9ZHKqJxPdUJepVoaX9JhqZwjfLWoWBxwT5zKQCLymQzk5LNv",
  "key36": "3LYVj4WX32H3NrjBJhifb444VRQaQu6Ggx9bERuqS5F6ckff2VY5oMENAMhKZGSaeF5X49wiWw7YVrMM8sSgPs7b",
  "key37": "2Z2gzAyFGEXUK6admF85w558MSdGgZpixxnMC5w26U2GEYKAAofJ7xU76Yfbty4T4qdmSgYWCJKUamEHNmUc7GJJ",
  "key38": "3sgrGGifnMVKMKHtuS2jqHpAeXYm9mYejXr194MqUPAfFjPKMJwAn2gF4yoYrGHpmBmaiiyBaxvvB7XUbd4kwPju",
  "key39": "61DATubDAE2czQvVD32wXd5p68pYQjrwB9jiZsJx8xYPi39c1kKcyP3C8Njwfo6RBL8NzabG7NxMY34d6A11Z1z4",
  "key40": "3s5GyitqDBJWkh3X3U9pBDcXia4T32Cemw9K7bQjUB9ajwM8TA9yd9HhpTgwEp6beaWye5LsB7GU8s9hFNnms9xX"
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
