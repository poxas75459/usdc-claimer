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
    "2GzziTvCfyQFN4Bv99YLRsaV57JhFjqXYYA9UNyPpthKDbekYVidSWWoqvYi1XHH284eV49uR1kHVFH5uaEAjpLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suSa41YtmuCtfYWu7GS7Fr3ne8CKcpmXYD9ngf7fqM9tbFJvr33EGsz8oUZUdWjnMdSTJdKyyXoyoFn1wpoJnjC",
  "key1": "3ZaEPGD9WWfjqoHzBLMUfjMju7imCx5dEqR71S7YCarHmESaEn1gV3TVvrh5iHvGFVQzJUn9eoSjuSyMiUfSomAA",
  "key2": "4BDSnJrLg3GrfxQf4JqbH4ChwnAmWbRQd2hEXcP4J4V2FtZGAxB7LcDjzcFHtn5sF2wf32vVQKktZAZbzRgeHYdM",
  "key3": "5mfwF6oGdzF2MH623zvgLP4bQkYMzGgodkGP4UcUT1JjHoQCPKhphQkrUPTBq43HnNjBrq4kKC7Yr7TJ9XkN1puN",
  "key4": "62HhZGL182qS5ZkvcNQ1xSBqo7DRdB1ELzLP8nJFVxfz6Pu7ZvbU5EGGqSHbRoMsnsRijKocJQKEJZWy4rQxMigo",
  "key5": "3s51JUwovZWpLYp4JqaJgryHn26oRKvLm3VT94Rn2PQkNNfvhXybpEWXZmUsSZf2XRs9xhroyZLTJJWTKGXfvaAP",
  "key6": "2TvegCaiMCD5P18gznynwXvVhX5xNNTsnL4QtfUepSDhgBkmLZVSYhZRJnUpLLJYXU5w1hz7A3LBqzrrgCHN2khF",
  "key7": "2xxRUKrcdxcZFFz1uJ4fu2PEL3WUWYKrb8RJvrp2ZFbLtRuq6Wx3HwsbEjhsf8FaahVpqgk5JLkxoVeAbApZVBWi",
  "key8": "2ZXT2UbkGiJkp2uqtCMNPHHNqUcRYTkCopjJnLr82xn4QZT4AQsBNhPqjCj8ogr9gBmrzz8rUv6RZoNLgzNFVaj1",
  "key9": "4b5TTsR8PpQupST9DoqGJKF2FCZbL4aRUfqsXsJfvLfNSYqxbo6m8CUaqPsMVWedB4y3v76Vm2S9U7RwYTNy2vyH",
  "key10": "VsDYLNoUtViHEtPFBzYcRdamg4RqZFTJvWwoskYrxjR7VSD7T2j2Um8b6K47EcnFxGAhfMZogKG4HBfshTPyY7f",
  "key11": "3d8q7v2o7LTwTRCzkmkoKFKLE5aJF73fMVrYBnzRSsdFWR355heKehXccv5svnXYvJikW9uVjfn2VXo2Wkmpj8oz",
  "key12": "5x1NCpipuYzyjmD6pDVx6kJHp7sjAnw1uJztofpFwf4d3vibzJYp9TebtfH9nkCmUeHvXLcpnDUJpGxYuhQvne3R",
  "key13": "29tbVX2LbJYBNFX5FcTt3YKD73pG589984Naewh8hwtjrNWNgGSokCytbFpXgViyRAGYyLjF3CsUXrkZdVtNrKDt",
  "key14": "4wjdWqPwybVz6AvTmn9Ms1gLPTWX95d3uGWtMdrjAcbFqyh6tYmbLAJnhEBF2djPVSv9PgWu81oT4aYXfpjdTsgE",
  "key15": "3kq9VYpWLTT65QhSuVHki9iJUfdn4HD7yV1zZRbeHPbKYViqsgXnfeAemAiDVYCGXvLVXTJxgm6AucBHiUNztqWb",
  "key16": "3MNhustaKd4Hc22W9RXcFVhkF4HDSk952wXT4a2GNT9cXqqm2RvhQPexxkzsJrCHRLN5a2QoopJdtcoDwu57qwQk",
  "key17": "35q1pAV1XFESWfo6R3cGaRwACCLCVACsLtUUTX2EaBc4nBbHanPjEASfjrqv2oEXW3g8aMBAjSpL7tRL25F3NN4c",
  "key18": "65UbTremh7ArUPaPYmQFP1uNfHCpQuiy35aaiKxWnRHeMjduFYdgHAXxG3Gg1VpjYrYsB72mRhFEsyFa9o2BsqKs",
  "key19": "9wHf7pHts6F2n7bvY2KpxMbntZyRF1Ea7cf6HFdGqepWW7feTTke3Sik6fMP65yDxfYRqdPmcTJvPqoF33xh3oA",
  "key20": "wAr9P6bxsZTwyFfU5PmT2ksnEQ82Hwy1a7AGzeWcm2KKnAScEiAg4rKbamjVMMr4avcVG1KJG468yanjspkRUou",
  "key21": "k8drK5mTTRgTqiHSc2N3up7bNUQgQFy9XsvTYLqdpTCpLhUn1oqw1xmSEwG5joAsno58aVBY3d1f66CZQQNf245",
  "key22": "3ohJLpMP8VAHZDV2Zbt3c6KYfcqa9Yoc1nXpQNte5JeTX5rXVqzacUFcjnpc2iNi6RkLGFVWSNRjxFDXi7rDby9N",
  "key23": "pzZyLZVm79LMxse7wuV6p4UYKLpHaYJCniYTiezJKsixRApi8HhxtmxeW99PB1BmXUDA6Cd7x4PhRjXGDJFe8WL",
  "key24": "3CrpW85Jh4JKv3yjbcsKMi5dcpJjMLW33ihfYLhgUq8TS52zMNi5dsVyyiBTG4EjXUTmNxU2EiJFqLUuEGHtLTHr",
  "key25": "2xBSAggpV6Y9PDGHYEiuyCxnTVgMNGZrUEaB46fFgyp7iZbPqhH9b5dYL1Stzua7W4vjhMvJJPGYVpJkThdGK8iG",
  "key26": "3KLnXSGzQbGLhVKDpckUi6xmYE1an3RYDcAQv1bC9TigSjJ8mJW9sY5J6FrrKYgYaR4GeNWEJF6XyAH3hvAvWXrf",
  "key27": "kbtPztb1HYrZZQQfW6X6pLi96xnbtxFHi7kYM5DcEJKjr65MvNm4rEfv2tu6zWMcWsrRwcpzT6ocSZbJJ8z19eW",
  "key28": "62dPfcqJBbMhUJgrLDSxMTJ2aFd8McjTmYkNb4mXp4ffUsd61XjJx82p5M5MmQGwX4mJsPTMBgxv4JeuSy4KNCoQ",
  "key29": "2hBhpKm7eXtyCJzQsSvtpn3nD3n71n7K6azQy1Do3tri32c4CgAEkubz8XQgMQ18jRuqV8FSbeyWvXdocAcvESiZ",
  "key30": "3HyqnwdcAsfC3ry1GqrtQ64jtHTqWeNEcyYFTN5cgqDvKCWNEwfXFTKtF3aHvPQit9474jNo7NT4rfr1zptmSyGm",
  "key31": "W3okSUAdbfbGLgEFzZwVoYnT587ktEGf1yTQGrpdsV977q4vVPTDVLZeXXw8wNrEwy2erYmA3dPFakWsD2qe95b",
  "key32": "2dmmvjsCSFCKkpuiunE5r5ZHnHvmTJYU882ykr7JiHR4yLgM77qUaKu4jhQ4SRxu2TMVSAiJrf5E7U4YWYyLaBYJ",
  "key33": "3pSxr6b6PSB6gyTSnmFV9qtpoDwhBL5hF4cB383qkPWZPLNxsUcZZx7RtRUChemrwmFX1yzMG656BFm3A6WyCD9L"
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
