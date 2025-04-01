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
    "2PVR6yHRJ9YHtpw5y78iYNcivUoVyAjPzu6qR3b9VQfthjVfqU546QWyzruiraAdU8C2SJZVdrdHMbWSnghVMrrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435SF4ngedJUQT5naJvCg92JdnVSHiR2LwjBdwfSL4VYhchG5Tf8GSN236paqpCUE66M8noxYhVJ2YHYsV8U8pWS",
  "key1": "5xoVpP5otMYan3gu8eDqhvM1tGXnbfs5wJuJZ2K96Kda5UAfo2rRGAbxXRnMX9RwXid8qxs8BRYxzZjwjDT6mwvG",
  "key2": "xWsSZJrdzG9aB69NdefxwDrdNSeN14MhntWAor2bKsCmJUjYJVZcgMwEFKQtXvMt5Av4mJZajLmpamznMXkBf2i",
  "key3": "4PRj5oRxLPm6Rbh6jtuR77uKZZBwmZphudqH9aYiVwkGQ7hT9P7t7wKTGDv7ALuqoumRmLZm4uWKd6m6D8CbHQTs",
  "key4": "3on4vxdvfvw1pBKDdawVQTLq83YnFNkvZpHEQW2QPuiyNun7HAvcGidudnyp7JG2estHWZPNenDtiwW5cp5KNT4J",
  "key5": "2J7oh7sawUf77xhLQhXVXRoJnyRcYBTYhuPE4Aou1h1eY7MThzNCXBnzwwxNKhTbXuoxpqY9PjyR1VtasyyHpSWF",
  "key6": "2n2XcDtV4notY6FQ6fCaCUg6pewKczHY9ejfxuAFTjaGuJqadYnRqtNHPippDqo7AddLpvXtj3WeheKRDZsthH2a",
  "key7": "4cUgHFRkkPi6HShvkrQPkJhWpagsdSyf4EL61NV7Ay5r8HtU7Bwhis7YgrtA7NSXDXMj9hZaJUarjt49Yqrkkm1V",
  "key8": "2TKyRuHDx2keTioMuX4VMWzspiSJMwx89FgJXWaRDSaC5GnnB8gLaaAwT1t3UvftECDg7Cs9XUB4dbqXQhFD7KUQ",
  "key9": "csoe7Vxc1HDvsPBaHwzsFqTmjArhTwTKthzsF2BoXhBT7xUyVS91wbex9gMqSUgKfav9hiyvLpE4Ebnr6Mdcrp1",
  "key10": "4Ya67riC84rEwzy7S9gQ3W5Vn3wG7sdQk2gjZz3NM7suYhCLRLVvx925txCNdanXZM9tH6sC5cdoqg5xUNRicjeN",
  "key11": "5kYzkhcxMscwz2CeuhCaLiq3i5mzgLzYfUAc88zcYo9aSguAsrT7aMDrMNHBb7VqLU7mvby9poy2X3RK2BqWEUXK",
  "key12": "27WdZLcc3KEFCvUoN2TNuGLQVPNaBqEcjpEFxQxrXRrhqaPxSDnWY4jTA65TdpP97ArG9gf1jF895gNW75sh4cg3",
  "key13": "3Vmio7PxvLzztNfYMs78V5xPB9wM3VN6mnBPbjDXpFS5AbFW6ZJjNxGAygoEb5WJHT2wWGQgADbEr6tj3yMbyK1g",
  "key14": "63oXwjJFxHH7vdGFdndYKH8dowE9MkR5Ue6aW24HswMbPWKGrzPc2PQUio8C6r4M9ywMTacu9rc7DhepGewSx564",
  "key15": "2gV2yeBaLy4RVpDBAeWcw57WT6Fv9EpdQwctwq1urabYvxhq5e2aWHywFSzf1fuEk6RLk1ax1GFazfEamQwZjcna",
  "key16": "5QwLwFbZEircNyc42jDAAwpnYTaaTEBQ941QAKBKrABcfiiVuq3mQq14v5bpcZCokoWdApKXkrjuQVURDUGBD5wx",
  "key17": "2FE39iKEs8TY51fLCp4uMH2MQZpLHxzQiJLtN1CFsm5Q8XX6gVFHDh2hyoUDpCnsqP9cNUrztXQvti8q68mm8rMt",
  "key18": "3FzioTjn4HJCLogYjDmftVud7NZ8nCo8voevgoPEaMNJDkEtig3WfcjwaHf6MdwHjYNof9u7JbACvQj5exQLRn8W",
  "key19": "31JV7i2D7r81VeXWPbjCmDaVnpazwQ5uNnba2hKMtEXbiJVCnKKNnjy6RSKH2LpUTr7e62Nr89PA3ULxD93vhCL2",
  "key20": "k6iFSzTHa2qnrwAKZD8UZJqh1oMdMip7nsMkGUP4yKKA6aKq6oGgEtBuag26NnfushMCNdM9qaSugY9BfarpaMb",
  "key21": "3ccMbBbdXEXm8qn8FxvouAeUvF1o2Gy1ZVQfmiLAMB7V48GiRGSQn6M6Rdg6zFXHywev4LpvXEKFrJm6cQuiT3vL",
  "key22": "wvMuQwXSz73bgkyctmyS6iLA9q5hCLZV1FZc8VSU7fBvYb2de7w547scYtQxEYmsNnf68MMuZ4ieMjcc3M3RiJt",
  "key23": "3NaSjT1prrPoMFjjtspFVDWdL8gV5HyrxoZ5QRbRPZL1eu7wPuT2y8B9Ma4qBJZxh5t3obhmhXJJuJGRca8Af7HY",
  "key24": "3kCkXh5vriG4BzZidSkLTReqRKMzAmjtK7oiu1Ce6WL7DCpwKfbTjbGqWnSUcLz1kddTy5UUkYs22Z3yaG2PnZRr",
  "key25": "5KM9PV84fPUZXgAv6WpwBCvkf6wF4kkRf4W53vEzi8V8sSVfQYYDtL6EcPoHCQU818NAs32StGa9TBffsQyhym2u",
  "key26": "1NhzPySipNN8RkR2HjErwRTqTQQBKZaKBuw3KbHfQJddmAeTUWSwfDo1hf2B8hZomm6BX5z77H9jeQwJ159Wxws",
  "key27": "2EeRJBgF7kG7V3CRDLiuLdJZYvYH7Mrq29MZGjnEzhTQvXHzoPcsE7FZegNiYby8JnunnVeWnnXiX48wgVnsi7Pp",
  "key28": "mTieKnv4kEkK5vTh5QgJyQTZ1mrHqD6PkkxThpSDGjKEDk8u8UKxzF1GXdxYpXU7L6qZD8YaLyyd53WTrRSz96j",
  "key29": "5iN7x1W7SGRXRjLiDYURoZ5s7BvUgZQkRJX3PLNyRm9KwELtyH9YvmUUnSMZ64XN1ZjSPLqd7fmvgfDz56f6yX9W",
  "key30": "1eX7bR3ZyeEkzFzZJVGrHLtYLSvL7WcfpG2FYc62964q9hyhV8UXAw23r6nt85JSFFpYK41zTGHRymuBnwwCY1B"
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
