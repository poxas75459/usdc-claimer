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
    "5wcKRaJ5pQLuQxQdzr2BpKZVzeWTCDqqsPtadxKG8eNh3Co3BkGJJ6KXchyq6MHVfr6K1kBkABE6H8EgQboAQtBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bSLoG55RLr1bzRQP3kUHDq1JRiENE9JxCWPixYjahB81nFmxK1MfDaUVAc3vfEA1xVwv7op92hCjXSSYkUsfDp",
  "key1": "rrasqs1dh1neap9HyGjcz8hBSth48pxpjKcCeFe5RLj99xstj9Go9c5UE4fmpyytUrvR4tr6PBxvQsbgHJAUnAm",
  "key2": "48a7bUVQ6ZyuKRoJuNv2KU46ti3Hs4gLdJKAt2ff4kYsDoEHp5ShT2yVXU4BGBzVMdTM9YYeWdeNzPfFcN6k7Rcg",
  "key3": "2sNZCSDT6MFxQSnHmh5zJdi6XvFFNsW1jCURBX3aVrQvrgKSRQinAbkHsw4m7psiXfyLFRXTdB9iJAj2xg8GAotQ",
  "key4": "ZgnXJThynfKi4WrdKfUF3MVP9Z3Bjs1tecoymk6ZVPkvzYrfqfGGwudu3yrE54jeNU1LqNkxFGtHxzRnwqQNvHS",
  "key5": "4MeBXeGy1jE5CDm4TCKEy8gb9ebFe25hy4766JU6P7MjPDDtu4HiBnjUnG5GqTPxUiNo4XnBf9WqeKcYn2Wck3tu",
  "key6": "8SqZ8t8fPyFrN8R7ZJwU8qtujKPBvevb9BTCqkgdKQTySr56VvPpNBSHC11c9KkDbPofXLiXF6zmegxcicHBcpm",
  "key7": "44r6hZzpQ6uFmLoYh11wuQfgDDNjAPEzPFjdjgkSXrXE7JHUB5mwE7RvH8eFL7MgnsG1c7eq9qzUBWGdUumbkZSq",
  "key8": "fXhsHnRUbzwKUYSwySvK6XWgzgA82oqu1JS3XrpnVdR9hhg7M7SuZ8Ph5RriEVJ8XrvbXe4vk2Tc8TRJPtWcRNf",
  "key9": "5b7Fdt9b8krt99KJ8MiuY3hYst8DU9PEdeAmRJSXBingSUM7dqbRUK1s3As9hAiZ46U1hVaBnAk4Sy7KQiV9DUrM",
  "key10": "385d6oL6pv2WS3Zvt7nnXMsy6jfpx4MAvazG2ko5vCTrG23nqj3CdmN7ymENYwTKcysMFjCV2sw4aVGPWDXkaD1X",
  "key11": "44SaH8H4MPrz5NHukxb7BNzTpWHaHadDj8yUHYuStHPBbATNFWFAMsDVuR9CC2yTutNFCGaUQTxTEdXJ2WRD2Dxn",
  "key12": "5pEikxZpgxqqR2kPsnaF8FVtb4eibdiKT7A9FmMHB77Ye9S3eDZYzSea1UXfUKSK2F2CMbPG27nL9RDjcKetTVWy",
  "key13": "auBNSfZbmkpv2K4p5Lp7YNHUAQohGpvzozLp93dUbxE74NEFLGSci58J7b67L76RqM5JJ93eZixzfFyBHMpKHAS",
  "key14": "4bFgZmTx7tzBLjPgky9pr6fAzdURdTKTK53zuUX4SdSnwHWuKGybeKoPn7zcHwv7NwXRHXUETBxbLBtvvjsjRHq6",
  "key15": "iBngKXUVQxEZG4uNTGjhD9hy5kWXh4aCMgWFVXzwZe6gRncSSemCJ26J5gkTBRUZjDDsAfLpBLqhuuL1HA2p651",
  "key16": "2HKRvxKpu7f664yaP2MuCR57mpNQJxDY5ZguZ4bVHPxtvEHt4j5b8SBSMZYNY1sywm4vzHdzHqwjzwqB74SGhL7Z",
  "key17": "cRUQeoLDwDYeNEfboGZjmRecYKsXQ7xhEJkedWGsGnppB7Csbtzy2RPQ8fm99RZcR5R9N8s6kPd6JBZ1WY4FBF3",
  "key18": "5bQtotvy8gpGsf6B647TSoEY6xefa9WmSiFeofiFV8c5e2vLRwZqxAgnvgJscrU7mn1eQgr6vtjj4Sp5fZGdUAiz",
  "key19": "57guVXin8PtAm8KAJ4rTZFf5QgtboVo1rASeWh6dZL4GKFkJu2RohMnRhG6TLfPdfb3uresYmcWFX7usXFsf6E5A",
  "key20": "S8T8QnDyPCDo4XA3EjhDvQgaqtA7JT2VS4jehVhibq7Vr8APiVzwRcy3cEng8j9HpcproJnqM9FWvQsU7gbDiUD",
  "key21": "67eMEjaVAk8cC7pv3zG1rcP7w78osnpTajXBf4ECZXf7HuSr4ZJfkL7YXHvM847UUdHU3cn6EFKWHRvkayuWSJgi",
  "key22": "4GpUCbx1Gy1kXWkak1bK8GMRDpEbsLbBYa6PrbqBjTR19fZ4jXB6LD7wTfV8CjXkXpj3jqDZByvRDgirLr2y7rvv",
  "key23": "3gHhNgKGKW8pxgzXGUN3RnLf7ZJsQEMagtvL98Si5CTC5F8Kjg3PkDJ8Voqk5PkQ7nmPxvLEGpEDYezGBKBCmnw9",
  "key24": "oPeEtsyXQa3hJuridakzrRzCRyzNu5Tdc37mQBmbbbYZoCDRGn9XhofMw53DFhkvPoRGj3pbdNHYKeNefhDfr9c",
  "key25": "2SpaG1s96CdfqiLA3YZCwzKVpymfuvS3679DzK67whjbTHxEeQY6vqW1gbWvfNiQxQwxps719C2TQGJkTNmGjmmC",
  "key26": "3h628hKSdgJY1nC5U7WcmpcJqNrgxJjNWVXDyXBFZEZZnbwSHdq9Qpn8Zbauffxcjj5QK6up2emVSRU22NpteP9U",
  "key27": "25XUGAzdEaNGgbVP7L9SUKno4rv3BpGHRGBDfXs6RaEwgCnhbeodxQx8c3str4PDtrkymQFRKgvczMrLYWFEA6mJ",
  "key28": "3w698WobYbDEm8goo2yYbYh3ySy1ZL9NuS52tmYBpqVi2FJ1eNZpTFp4RxpRkMM3yyrsfAomMG5utrVMuovTreAx",
  "key29": "3jFA1kuZSSNdUvZKERrUZXqsAnHKxDqFXcJ1cSzL8qzmJC9HmMMrP26S2Ztyh1ZKAexBjuzmYXZLsEVJtD7aHjPY",
  "key30": "31fQTboqEWUmLaapV7QB2P5YPiUsdSkWnEQy41YBU9FwNEC7xdCNyFP8BoNTLWna7bvEeSfBTab1LoHHTGnAawgN",
  "key31": "2q3hqTzxyEB8gJ3nLPamJcGEY29ZDvbBMCWxQSQzC6vK9fyp8e834dfoksWz4Xk2hnvB2PKzDbQP1bV4U5v7Drdu",
  "key32": "5Nqd4UoB8s7pKkJ8YKRaAaXiTrF42uQyzPr83WmZcGZ7ssmRRwD2s1Rx6rNHgjGTXaP5y9sXinGEzQNpH3B2Qzgf",
  "key33": "5a8AUrDXWvyPQNwBwfNHKTqqyr4az6gkGH9piopY64Qv3vJveQGVuwuL7NzCWQzrQuCUicG5uGj7VudGZoziXDwt"
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
