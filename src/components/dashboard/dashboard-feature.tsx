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
    "RGQqitWH2dqW45YWyzxhmYkMd2xjb3W9keMU691eHLYsNevAYHgcVELXLpjDLUxqb4GPXyyvjqZjYj7S1KFs1Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJCMQe8vmSdABixicX4szFGE4Q6BF3qFyGVdhbLgPsYdVrdFc7mGV3tzxFa1Z15XeN4cA7c4XeNopvripth3W4f",
  "key1": "3NQ4fSXBjyxHUjtQCk5R4sSDD3zgmkXJb6oMiD1hjsrACS1FtHBTpStXXAiRGytc1DNseG5biaH4or5jVBVAEHdS",
  "key2": "3PJkMtnbv1HeoxrAPoRui7MydeCL2Lf1xShNHu1CH7UAQXZ56v3ZVBAUGd6MqyzgQ6pARByZjVd2VjV6HoRoGtiV",
  "key3": "3UsF47JKekiLXQNs5WjFodwhsETvdosPTGojsRi3bC4YpkAXYmeRcAojbS3KAxUMU6GuLQttqjvkb8qwsLgkAKgL",
  "key4": "3L1KAfsiRsrbhrGPTKjnWpvSiKpeaMRsvfJZ1qkMMStvvzMM3naFwyocoh3hQag3HXbr9zTLcjJW9kMdMUWAviNp",
  "key5": "5FRrRdTQJzgS6BQjUDFs4qEbeyQVzgb3stGusjxpEo5i527cPpAhWgcZYUrhRUoz7wozw6VzwmKh8GrFiY8aPVAy",
  "key6": "5RMkq7B5R8ZxkbMUHwFYdYS1x5xrLiZPwNJVuJEua2H7wnkcgNB5ZmHPvsu6MpDiDiB2xgpXpc83CDse2KFdE6mf",
  "key7": "2L44dPWbsNha6ZTWLzrQK9XGPb13C3mAinLsLtZTALqHCqFY43zcpwVyxDPwzMEYnoVxfe3kS8tLTKM3ELNYGxwR",
  "key8": "5WuinfQfSW6Qv4xFeNYcRGwnKUfeggySaFmMzCb3DPy69u8hVPy29Ldgq5FAygdw1qTQ2yESriyV76cGBe8iJJ23",
  "key9": "53D29YHHFLiCjWxersUmFuvPFZvreX2aZzjfMgDZ2zSyvaeryswCQQQyrKgf6GY3oVqSYRBu6ZDH8AkFq5Tv9z5K",
  "key10": "2eFikMdubCspRHFjWtRtTBANMDCubiFn8FqH1p8cjN38LBN6uThmKR8b9eD5SSe68hJ3eLt8qMfFsxc3fP8dKCap",
  "key11": "3vU23nutDxXANuGTSaNyiATWGypki9Hi8dvcjhBeF5L2jhN1JtFc9wM1afQyQkw8uTVfrcvNSd1tQ8uqUM1DMuFS",
  "key12": "4VwmVRe5aFEwm5seewVNwdQH2SuEU3tuy9erFoqz51nTAGK4vmbtL25JtSpud7QpXmz4drr6ryGp4ACFPgf22P1j",
  "key13": "2znYe98zRZSQuB8SST5qSQ3wkfUMHVez7NfwTy9L5ZAkJPTu9R1TmizLh25tdX47K9PxJEvjGnwxJtpkSETZNcho",
  "key14": "JHnVFcTK4MULZLxj47mBfxZ88Xx3dXss9nQgvRcSiGZoTq6kLZbNZHQb48BQ68QMc1BT9v8aCdzdxgGcoKgsE9D",
  "key15": "5KSMLbvdCehNugoRB2DSwmHxmNDhTsx1fbZXaE777PMYTwV7RcPZVPt8K5cQ3h9fowRPaAkjrKbDsvV3xXiH3zsu",
  "key16": "644hfZDYmEGCC34Z2fk1LG8QijhJQwA51RVoevAt9UfMMCwrF4BnqjPKsgvp5joL7N7MYXCB2pJ8X7M63aKUfQrF",
  "key17": "2rjdRoQpzA2h1283ANSzYDfi7r7U57EARX7vF72KfTZyy4eJviPNitJqNgRe6eT3Tc42tuyPgTCgvoLhe7Cke8Ks",
  "key18": "4gvyQFByf6wUTV8NijH6PmyCYSw84pCf8cW3wcp6HgGmr6uwkxYZsxU6etwp4ZC8VSHZMFDGDAakCVT8vRqDE6SD",
  "key19": "3fneJNVXLKXD4iFra9p9EN96HfAU2RYCJcAW7MGrnAbQe3Bp21SqBPHkgit8DJDeV3yBcR2QsV46G2CzXBSaYBNv",
  "key20": "58Q8MxgWmWWQSienSGTHPRjm2dvkRAnFSn6FqdfVhNB4BweuiHZhaLiMiC4BA6Acv4GbEfKUGQZM9DFVMPTZaRG6",
  "key21": "2QrRJJMGpXsahRyz11hdtZEvPan1iWGwUn9i2khtXeYeBebpC5KtjaejtVjLm881t2e68ngNJBKuCARjqassdSvy",
  "key22": "4hqFAQGp2qo5TaPG4fxr6AajDmeR3tMcBnri8kKLptYGEoDf8K86NxmgpnN6X5Ubj8xyYmP9ECD7JJoE9zWu1g9y",
  "key23": "5gNkqnrt1X7z1RAmBsnhXiFCfmp4z7eGT11W4JFrmf8Q9dhP3V5APMk9dUVKMXBHfFEDZpNV22EdqcGrfzsxXwaX",
  "key24": "Y58nR5NyEqLRnK99P2vnzWQXTCNVv77Z3jChTfF2cHRiokyaohqYqHM31LdT5krG4uHk7QDpk5UYfvMJ3nzwdRf",
  "key25": "4Kggr1HFtBqfBp8xXRo3pgMEt9VJYNGxupuWBipdpzjLdPvRrwYNBWVZQb3ChkYjma6joUi44vEH1sGEms3xzppN",
  "key26": "Fe75PaLLC9oXAdziSfEF6rQZxwSjVLUj1hLU8TahbTuc8fSUaNmUEEUgZr8jmHmTUqn3DjZMJNgSezzm76V2Dgp",
  "key27": "3B7drw3NoNvKnr3DwVYXjgeb3ZhQwM5pfVC22QsXvGmPjreBGFBLNSpZApa3ENrFAF24YsWnj3NMnPd2veYPNq4N",
  "key28": "4a3Ap9YN7uQCUBjYrf1rWgjVFKekXduCsYhgewtUbvCUjxVokLmp9oVVNdQLkbFAmYWD4gcLQCweTLCkGrWUjccU",
  "key29": "9huMrXHoruPiTyt9pPWiYTfUJzVc5hF5EK55bgYYAYW61nJz6trqmCv1FCkmPiHNAmYKuqFCFfm5C4Hmi77cL3M",
  "key30": "ytsp8judakF6yHSQnCUZAEatdBWv1ECJ1LgTg57UQDLsQHDpMKT6xh1p8onVybjGTzxMTvZXzTkwpvTJSQJLUBy",
  "key31": "3ZnLMrLZSZzTzFuPsmG8XwFzt7TzqT9gpfiWTGGXPSijnbhEyqaSqbwdYVbN6oamxG2ZPooZGHKbcCgkGJZNNPaz",
  "key32": "3LNSt5yzn7dkJpXxJsw8B3uuNUaQEuNB28ABEqeFVFtnVmgcVDYdqf8myjcasgJNomdq6gW8MtPxCoSy1U99inAY"
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
