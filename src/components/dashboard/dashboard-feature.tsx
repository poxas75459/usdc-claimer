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
    "2hrEsjGmLEZeoZDMyqCrYz8myx13nKU7rHw9X9EEccdWCKXAWMCYnUF26CPVUHw6Nz9BgzPnHZAv6CkvL31AfC5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Dqf4EoUipiDQHaMoPcfd1XcJfLCPwTPW98NpJ6CpaHfpokyeUtM4pTAdruvL16J28Je3NgHXoShANiGqaGi6dn",
  "key1": "3MmpjbmDLM1rm2vaxe3rHy88Ae4BZqNidqD9CQMyQ8M2d9oADqt9rCC27MH61PeQLTrpUEGEe924e1tXsJqduKTU",
  "key2": "3HeGt5QQFmpDr4QcuSE2GJhUCTHmozzu3Rrr43hZ7dpaW7Qh23eUL4yoDGsGersxoN7pjG7T2JK7LYvR2HP8dNpn",
  "key3": "5sY2yVGU8Vv7Zp9YECj7ZnzQ3bt1nTXud8aX8aGPEg1DmtkGHCMZ9aSHNjAGw1L8auUi8REdChYKBTdLgW9AdA6i",
  "key4": "4yi8mEtNyq1LDNNVbN7225LiVUZCVt8Tp5Medy4DusG2rn2S3Dc7phnLnFs6gzNaNFt5gwPNGSbKYvYsi2mPbHof",
  "key5": "LYjppqUeAw1YeT7XDQHFooCcSuwtqdMjVPaNmm2FvNjpPaGK8Wgs3GvtHmMt72ptZY1QS3PxV1bPpt4mrDNtJh9",
  "key6": "2zYP9k7uN3xLp35tkJcfonYHY2NhyQvpkdL4Uf3RacyZxpwvmdaCgjd51VttKpcTED49sHZGWoNDEYrZ3U4oMZGZ",
  "key7": "4SMWFskr4AT7AAXEvK95JHNk7YhsdnYd1SmC7JhnCUk4SZd2LHsPyw61kVTKKZB2N3UiwD84WPKBCymtngTkq7FA",
  "key8": "218jbyiJs9NpoRFpmGVCGcam9hEzrZqAmmPxBGRJpxs129eXfN9B8vL1XdKmUYacteKpyoW7JzA8rHf6WeghiDto",
  "key9": "rgWTJ3kmTpqWoguMpYeJx9yvqSD24dw7GMFfQLc7qoYHFWco2PPUHzafncNUVFhxP6jQdKPnC3nDdnptu7VrXWq",
  "key10": "3QRLYNzQVe1ok66WTGxU5mpeuEo3LLdkqFjKJ7K8RyppcBSAMtEZFfmGYaNiwXZeeLvrYTiah1dT5hiGc19Gscw3",
  "key11": "2M6N3oDsbQCN2Tj6jtnkkkvBDjcUaAR7pd8ywCBRCNjMx8ka1oAcmjZyyN6qKEhMQy7vCzDBQB8TGfaNELtPYAfu",
  "key12": "2jSgy8YUN7ULsRDbimJHvjCd3WtUpjQLEwGQaQoeLgoFBWAMYe4ZzsLfTEB1fsrtZH7YmYAHegFMNBYz9H8J2qNP",
  "key13": "537sQ582S8DD2GKMLs79pC9FtEceb1ZD1HYf54ZdMskuRZPgF1VhWW634vS8N4Ugei9vg9i3k3XYPvWUjMsuJJ32",
  "key14": "4UGtChwmL5nfStitC4GRLSW5CUhbx9nEZy7iWQA3mcZdDvp4uEDdES1MyEH8x9C3n54h2Ee5G3JVhYzd3b5bdwpV",
  "key15": "5DN5iWjS14uZrPJXE2p7DjCr8ZvxcPTUX4bQW8GmEPcV9mhhqcJrce5XTeEm4LGud5smvwVUCKyvBJsJy6Fi2HEG",
  "key16": "3gvms66EWgHzk1UG8FZHYFa3XCcsF1bC2QXioxWRTDEJ8u2VA2zht3BFZtcYcksw64YEcfWbfw9YzvaMCL366K2A",
  "key17": "3XbgFc2DuBqiubb1PxVXBog7oCBC8NfT2yDmNnYT6SfyVDL5CsXH3M5NL4fkFVDibY6oZQURdsv3A7o8i8Z6ecF8",
  "key18": "4WjV1UHfxkY2D5RMMUHBewEvucFokNAwmFeqpZowVMJPc5BXFMoGG1S36RhEYCUw51shxBscQ5nnJbKjQy9deTmA",
  "key19": "3TK1RtZL2LAYhdQNWfffgVSK4DLKvVhYqYXZ11EdF9Z5h8uXihCcCMG61zgD9BYfaKRLZRNrcLRSD3XAZHz8PZuG",
  "key20": "Ns1NMHJDa2n1FKwyKynUjTmacZ95ivXj54EQkRyAxi29sQhdpFLAe9K5fjPaPCUWZbDWkphRobmJowwiYtXFuMD",
  "key21": "SniuajHaQdpJzaBvDS1ydT4oPLsDJXQKWwVm4XPrGemq78DTUwZ8CKCUt9rRKF338whMTfbTNiiHS1R91kALY9p",
  "key22": "2kQvvbEhHbTAQYuicmp4fYaXeREdbtdjTviLJQFBv36c1L6Xo7972PDZxQ2VRpoDxzzmN74G5AyCksKcJAsryXGu",
  "key23": "4SJ7zBj1MGer2REVK4VkkF6JhkHs6agztuU7WoUfe2yt9fsQxT18d3weZB3w9YqhP4ZrpbC8c4zF3wSc8hV1KxZV",
  "key24": "4Lzz3HXvdCryMshANunoxScSvTavJaPqzyH4KUd7yBNtPWdhDA8knuT5XtcbtRpFvxreKQUqX3ah4Z4aJRoK22Bj",
  "key25": "2FEfQPp8bHKdYCMKmKA3tbSfxGbS3ste7EeS5kV6FBoPUuANaJjHmdm7qCGuBvit31XpAYzfGLEaMATgzUySiicU",
  "key26": "8HyZXWDG6g4R5Kxivk2GfhTdpNzuJmbBkgjUjyot4Zq3VJb71yHAjtW7xoRm9arECABopvG7zouXqFCRpWnJyif",
  "key27": "5ZwnbCQPuFnUsZwSPfhGLgeitaDtE7tCdj4V2S7Amuj5XnLjfMMqWvcG5NpvSu1yDLXzS7d8Y2jrHYqAFWutxmqD",
  "key28": "2BHkqJ4jG4NkYu9x9MsLNrWXLozeZ2GCHV8abUE5tsf9TyH6jG5hDgpMLYoafBU6enmGnvqcwDgJsypFjKudh9Qw",
  "key29": "g2G7b8bai8N1UCxKqVYfZVAz6fgCLTk2dYpcgH8HgDWMRAnm8N3QHy4dNANtfw7sNXS2XNLuzvzYWRPFzJj1LxB",
  "key30": "2LENXGyQzdX3HahYRyBD1t9cDK5mYBQdHLa6CxgksbjTiAyPbQbt45TTTjRsB8GLaxusDo9YYJNzGkeN4LN9uJx",
  "key31": "66CLtoBXHPyMHPdw1D9DsXZVWwNfD11ZdejsFiHKgvn9UwQ69PFisgFQyi4Gs4nandh8NjfPhqbkpkk9WjgHoiU3",
  "key32": "vduBHw6CSkZB3GXnL8ZzZrBdvrZkzPV9yGjnNgodrnwti3ESkaxyF6dsmLBmncgQNoa8x5Q9iBM8dRmUDcoG3sL",
  "key33": "4f1paNJjLLyspq8TSXvMv67BfWEGyAiFbNPBqEqq7WtZUB6W1GbpdNqLqjTST5DiPxNzgaRVe9YYk1UFSsX54kjR",
  "key34": "mbXhdRDXv3j3HQvibpbRRoyyaNG4dqtLadBsiGFtXXDTRzcsvjzQEcPAdzHhKUVqE1oRfqdQZcrmGSsFonFStW2",
  "key35": "vb6VdxnAhdyJa3MbV76rfHKfGgeZnVVEXJS6xnhT98X3Z8iwZbEh9DCv7BnBrUAjU8Y9KoEnevJuArjzLE6BowL",
  "key36": "LK9yX2YiFGufXkxMyXuAB8TCGvVHEG73FLy1FZaWFyfBFXFokdubNn7UWxudX8rQVbcqyeL41MruxKbFe188bPe",
  "key37": "GvyJHLPw7z4tjEHTnm7x6YPGqmzPErze7PvdmWxrbeU14NY5wqh6uDQDJxyb8viZKhWcxpDDN5SQ2xgMpNEr8vH",
  "key38": "4d3v6FZHhj1eGmN5gprgJL7r8nWBtNCWnz6buK9juh6JiLwCxuEBrSM1GxJaaJA8fZs4Q8EBmPVqn7B2TTbZh11y",
  "key39": "2yiVLCoRqrG5S1Wjj5mPLZQ48SMQ3w3iTUtg8KFWHcQopBPNUxEKkteR3SzmMBestA6rPZUS8daZ2eprjCEYi7JF",
  "key40": "axbYKaMTR25KtRqqB1uFZSKGBn9pDXk6ZquqdRiq6bygNyjxzEuZDBNzeB6LwHXbWViqzijLCAVpNpSTRHup14x",
  "key41": "5y96J3tpkXuaHSCpJRNjGP5iBgKpcf3eT2H2gEgjke5cEpmPfM3k51k4tX8j4sMKcwRkyVdULefM1B9aoH2oVrGT",
  "key42": "5Y89MhRAGKULpe3ZvXV97jAeGbbDNQcH6JNNQidiB8bdxhGxiUgrkdY7C1RRGwPTL7Myu9QMpezbVBG7j5drD97h",
  "key43": "4DiRo1niZCqsdsthqLWaqmgJFt1aemL3B33hQaar9P4zStkcPmpgV9AUecx1VgsGJsbCeUHg4JUECfWVBqCUDtGJ",
  "key44": "66825E3gU472pqkmv3GeTpXNQiMc9bUM6tUCbTVgWvohMGE2piwFnyxvHStCFMCsRR6rtBe9zMxWrAMDCaARy984",
  "key45": "5D8bgGxbq52paeKvkV3NKDvrLaKC3Fga4pSgWXavGvYawVryyUx7NuciqErGLJse9YfLAJwpstvjnwaMivWXZbWz",
  "key46": "4iC7pEVjoVHFKrS2yUy5w2TEYdYjnVnuCKrgvwMoy6BbtuhMwzx6KWmchYVudhxpChxBypuo2BTM8GBZRj5zbxkF"
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
