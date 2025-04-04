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
    "3srjBZCTgoojgbR7UhqVy6PFAzRJRUZCAKXkenw4CT1VTEXhQbrLhvJFsKSeCBmYQcRGPE2DLjConkhhAUhkDVeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scoDrzWV1bFvubMuGz3e25XVafpmJwqz5PEjLP2HvBMdgi2rvi9mtmkU9mYN4pienibPVakjGb7RSJgXhQFbqGU",
  "key1": "uzYbsMMcNrNeG8hGTLmeV4ULqZUN4VXFWoDH5u3RRDZJjiHmYyR27f3VMkKKwHBJe127u3e2z7bqPPZpCXPF4Zx",
  "key2": "5C2RNesDmmuuYpzKdhN32ETrKB2r5tHLQJw38hgJNmCTcPJuJ6jkdJtNnL7Zah3fDah5pKrhteL751bi2KTDeTKi",
  "key3": "5syZK9QmRARLYUu8gkfAbcBMaV6cTZmwyeWbf5g23GHRqSn1hSvfJxiHyzRueMxw8mG38tJrtH5WfmUcYKkU8GgM",
  "key4": "Gh6oXJNsgJrPbmvAuVWuVAeE5GXiX7XH6xFdqS9Dt2eZeWYypSPBrTdxtBf3kngaaD5o6xAJGWDbFgz27A1tNFJ",
  "key5": "622um2K3hcv1gsFpSBDLy1iWNEZPiLHUmdTrTpz7tFtxEALiHAR4HJjk23ao5SBiz9YtSoC1LhUrKPiVEb9tRqMY",
  "key6": "DYEsmeXWLzjc4ZL1nvY4N4GGUNCfZqpmde95Mi8RMvX6hAH7s3kPLjp2Hb1a4PprkkHxXRvxR1cXsFsKZHvDzge",
  "key7": "Kbst2PE3N4GqezkqX1PoUoaSJXUDwhz7E4KLA9dWs6MCb8oVidpSh9bTu2yZUYpagv581cAdmXyeYbL5DtbL4WR",
  "key8": "2q3ZSMndmE2igA1qkZMLCychJAVRHUjLtH1QxrfDfgkVosVkDg2vQnryT2En8qQNiCfYgetgxJwY7ztfT7vJC3Ej",
  "key9": "2cVVS9mFP3DGqQNNveU1YhT4z4ByhRr74TTPP8yxtZhdqS9YTtovrB6jWepcS2arnJypngD8HSKivLHUcfzHTcrF",
  "key10": "3osgS52XR8594p2qb8cCSxCcHgnFKCEGzUNT7WsMaxM2RD1AJmzESxVjrHdrrfoadekuhs7n87BhXxZGCdhQrv3B",
  "key11": "3DsHTMZjyAa6dK9qmALx28SviXN5QAv7dLHVGyvw3PycS2i3JNvTACrDyh6sJWuAnPa27N4JTiP9rAKsjDh9y2FZ",
  "key12": "5E2SV23rKsPQp4vkvnVMBWrpdnvrVGbuQRUxv7EUucXuan5RKPtT4EFp89VZM6csevduEhjJN8XjNzfYbFvkgwgu",
  "key13": "37zusYNTYwonor4z4AHHCBnDbWNe7u4fKmJhAmCQ34LQ6AmWf1fJ9sXxwrxka38jhYu2YSuPrGYU1vMcDQgsSWEs",
  "key14": "42dbUa8AzcAUx5HaZnTYXxhGNBrLDqnC8h1sV9BjrhLMCDBLTjFGXyHYcZw9ihc32rPHHyU3VSiEWgagxz8Q2MkG",
  "key15": "2mKRbys4jjSHC2qLDMKHvAybjKNq9y8DCBqaW3VkeRpMKTaPCETAedqJ6RrnDr4fQrNaLqbAKvZpLfUAQWzmZwCF",
  "key16": "644FhPaKE5b82n1f8E36k76E1UNvBSz5NxUaywK6U9zuYKVyamqSpqeJbzKVqztT5ZkeLy1AkE8sJw5AYHrKnWdM",
  "key17": "24K8ZFEHbEiqRhYFFTChHLLYCzabhZSsKa1TEziqwRUGQJkBmEbyp1dQDXEHroXjHpVjqjUzdBkGvdDq4s8fUP6m",
  "key18": "2pT5gGa5rCqDHt47WbjS3eSWfpoGfEWCvfKZ9hLZwP4sS7xG5ZJTj5jbP1AoB9G7CAEGzfccj56wyuYRVZoofQc",
  "key19": "52Hy5vz86EARL85we4r52BvDafxAXHvasHr4aS25GJvnXBKmVrvrrESQzqcd58pkK2BfLmL1gdUCWkuLfqvoywe7",
  "key20": "2KLPU3Y3EVuqUxdmXbTt84sdRFtD4ZFYxsfQNh7eZvmmmmHwYkBDpVNhC6nRFWD1ZHttihLFHxrFPR8E1vHpLajy",
  "key21": "2FaH9FJuCCy38JA8oDtxK9aNwspS9GdeSWhrFhSEjUoQqXu3kq17aQ6MBJHungNUbStzCkNgYasxMmV5GxVNGPqE",
  "key22": "4euY7Zjz88pjfjFUo8A11PvgJDKaRGjMRPgJgayp82VaYhSEFuEvaAYc6NH2HbrGKM1srk2hoXCTC9kJBgKGv1Yq",
  "key23": "5438Uia8LCSvx3ttJCpHUC4HkoWDLNmGj2JyEVaZYptegfrRkAJzbZzUPrkK5PitnEVcqKcTgTzKm2FPK3UqZFn4",
  "key24": "5RyzbGTK2uwbzAxkd2aceSG4ieP719s4ud3dApP9fu5DT5L3JTjd8fobDCHEnivxRriYXsJuge3wa3yoJbYp9q8J",
  "key25": "3Go1vJshntUSkbRVJ7vhinYk3zJe2KT3rvu1EkdMCYe6jofjwr3SoW4mTVYSm7HDebu6LZVyFoqz6uKrxSto7xRw",
  "key26": "5jV7v9qzjNSYind1TWSLHFr3mviRhbpUBRBmGsDWBikUuDtSCmm19EPHKMga7T6WFMnkRqyWnuRxF97hRUCLUJQd",
  "key27": "3HCLqkKMyLVvUDij6tM6FPkWW6mkP8PD15ZaWLcPP58MHF3M8kSU79JaQQMxN1yu7pJpzXvSFd7ruQxcDCVRz1N1",
  "key28": "4RSsNHPGasEbEoU9v9V6TGBgWdubLiLH6cGxjgZLQHJixEKGwW9aK6b2QNmaiDj11PACGEyKBB8KYb6gUAas7ZRG",
  "key29": "axS6o6SsQJhvZBM8o1LKCYYbaEFa3s9mzTwTdskwpJTwVabjRQSnQ6ye5pKU7QoQdkmTPPNziTtvCzsyeMCqbZT",
  "key30": "48ATxYDFENd7mQjKo1Kda2yhvYSrXPeMBuqJBn4bGXX9XCBJvycEWJqmmGD9Tz32iYmRc3LDbZnda99q42eLpGNg",
  "key31": "2eeCb2anAPn5BCCdLKJpFxZmdQ3gxDEnD6rpG4WPDC67mTHEBDB3tZfvmsjgghYGqDNbXfpHHBHkZ2SRvQQs6uRC",
  "key32": "4fXfgK1v2rje5e7uBfKidaVwVJfpjgQDGqUuThcTsHzLbfNQgQbdDaaGHGn4wUgxkP6vBkkh1k9iwiRPN1EiLddb",
  "key33": "7drcN8x5FcNop9tDkZ9hH2PzxwGGv5J1zWve6N1TSB4XykxE3Qew2BjrCg4yWtdov5WPSh2ZHcFf3eCe37hJm3u",
  "key34": "5UDLSA7NifqoMfFqPgLTzAHFqnv73ARKNPdPAgStjGgpjvmKkaTqoUAGzjLRJFFafByUquif3DgQfbBXxaGnnXzX",
  "key35": "3ef4wmnx84uMhbpkN3sbFEroToZ2Pft1425nAfeD3j4C53r4y2fNunwgjAYs3Lp5eSmcc2r9tG9MegVWjfacf5r4",
  "key36": "4yHGbp5Haaij26fYJ2rCkL3kUoizjqiFB9Wf7BfKvXMTS6J4QZGc5BvDSoac7GQ8zeorZD7mgxy2huASXaDPx7UQ",
  "key37": "4LH8oceWJvRVjQzFAyK1DstkVK2SNwaDqSspZvhRMcwFUKN1836VDqxfjmru3Yo1CKNN8X6uwQnRb2PeWxQYuMzj",
  "key38": "5dnqvRrMc2m5sV92uqsPLsAgcmzHTEj6WdQ7z4mPgHEYVtj4brrJfwskaapZUnayzppYCa8upu9JkUGipmVvWxvU",
  "key39": "3HjXuTyatEZ9x8ShreX9J2EdbffZUhLBUSty7kRSUYxWMHs9dcSJYWzRUpMmQKYTWXuFb93dwuYckJgbLsfSgDCp",
  "key40": "3B3sNh4bGwbVqVC4puwoTyZqzoAHmvwwe1Mm65jwxUD5Gk8f8yVXJi1ReYXtHFEUomeX7pKPKsbEtSffVu6VJqM6"
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
