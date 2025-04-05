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
    "4RAJUfSDESeJBTf7xqTL2wiwFY9wUCk4FN98okf62PgZm3i4veA6RT3yhxEkXTJajdeFgp9rtmY3tdJQj3uWcLQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Efm81fVXBptME8UvwXKBvyh3pKNY9sYYjBZ62YEtZgozvfXAFsAHfZ2AspaKjmNQ6UEcNBm3udhFZwH36PsqjRc",
  "key1": "owgXnU5rWo6nAiWwUaaZq2YASLRHfJUGzvYSSsTF5pyFtUugAzxcxzqjQ2xfCVQtzMMNzto9MyG5ucsfnKLvPuh",
  "key2": "3SBBwyH3nVD2bxCVkYJiDmChtaeyy43XaFiN11XS4iU1np8ia5JPEtpNhkdFMPWxWWdS3CPkFiAi4FsjRjJpZc2n",
  "key3": "PTA9Ro2Mbc6s5R2hSW7vowa8RhqqQ7iHX9AGKS7XmESyJCEQvCNYW39sUpM6MrAG7VLxG5bx93R6Bfsbk8qpYu5",
  "key4": "2X6ahpBAH6kKYufiC4p12qJ2trEEF5fthPQE9rgfBsXGn5hGQLbDEwDJth5SP29vepkd2S7bFWcHMvgmd2HmgJuv",
  "key5": "3T3QHcUU2BrfZyQ7YFtsJfMzPxvzj53ygWqRBGtGxRXLX8XQHwDL7xkuqPiqYuEpqAsJtqMDPSegespqumtbKeeP",
  "key6": "3yhhGrykmfewU3qWYS8jz9yzPisUyLH6tv53DPpCENX3gfS9m6NNW6XEnvbaHmPQWdKpXPkL9zDJCZTwk9o4HwNz",
  "key7": "3R662sPYbnMpCTLq6BPQyFdK2JM4Z7y67LqTFFmz9xRMZj5QtFHPN6GtUNifpY3B9uBmG7q8bxbfbcNGcB8BTpHQ",
  "key8": "4oBE4KTfjvVvN88DkeTkpbagCcvQHkGNXqEAMUKNbCPNMYAtadmJnoh4qHyHoZYWB8TgVFdYurTBHQF1JaApgZSS",
  "key9": "4rhf14SYDaYTDxU19ACa7k2ovMQAvwrLr781JhomBfSMXhW1A7yVz2FXDinHdRD28GSBi7dj43hgMrnN7EGAH8JH",
  "key10": "3zR1H11r9ivkX8F3xrxMYHpAVYVNx6Jvy4pakwwciGCKcvfn52NDwsjgJwXmDDE6kHXPLTnYXr27KMns8Ep8uYbk",
  "key11": "2hyaBk5ATS6tLLQHxaU8FUguChg9HuVRA3LBsDd8jNpHZousZEn3T93VeJwjqLFA7Em72f1fcE4tbmT9BChaY5nF",
  "key12": "2zvdzoiixGekRA3a3GYK8eEpEi8FL7JuJizdw2GWxtLvqKGZmeGaoqT4PeDRYnDjgv2GpKqzMRLcECPH3g8LGz1i",
  "key13": "4RfUoPp1igS41qtHSQmYR3GW587yLgjhs8PYPPsTNtV6p77EfCAoQcx8RArG1m1bPnNF9KCfKXgTzuBK6fRMw3qz",
  "key14": "4qheadHT9YkETbZwUvyp4hJWHChRhWY2ZGvh5VRivwMkND72BeatRPqSr7mvDdFA5bxWQi5WtP5Cjc8FE6oLv7bF",
  "key15": "4drnwsTPKs4WLkQDeRHRh4cQykMwcTxBJ9YHVoV46WiTEEk1vmjNRGBiXeYP4Zu5AoqU5maci7cA4WYQy3Gqv8H3",
  "key16": "9Eq6Uz3Gp2yFrBE2KQpXoGZsBr6UKPJrZsLMhY4ehnUe3QUks5bftDGkceKCXSLmYGEpBFhRAWLfEgyQXgzJiq9",
  "key17": "3vwqaYcNq7owBUP7hJXhSJ6g1cMTYDP78UZroLpuQqHCfBYWGCMgk9PWiWfmjzcvUkMREgcG3w9yQHktXD1DyVpk",
  "key18": "3KXKtcJh6b5rPsDmNwHBAiqm9hBgn6VhuZoy5jFuttA6kYkFcCf4ehJokBMjfXaJBCpkPpER2qgcWFiwqG4BMJnv",
  "key19": "oDVY63gEZZewxNKArRTPPELjesQwkfskTkAeJ2DkF7qBSXirztanBHXKLvnjy2DAJoNhP1sSkKFKZr46rG5PJyH",
  "key20": "2r4agrk1zbCCZDQNseKa8GWaGvWARwkZ1PGU5JYeJNLdseTQGb9QSotkU3gw4n9bwAxKcSC6ej1oLnRSrrDZZE9H",
  "key21": "4GrtL7158reuu6dD5kmMp471zLCNHaS4DXTejKpLQQmHnsagBghe8MqdpckfqDEDauHx5GD6ZfvenTDHyy5PpwEA",
  "key22": "4vWoYQxFEJozcyt7jbAeLWGTRgWSBk4Cmm2Y1Ahwu679G32YpFzfpv6KWyGmZfrkKwPeJMLYDweegsCKR7kPMXh2",
  "key23": "2Y4gV7UFTm21Diof16EHBd55DmAA3rRfh5AyhevUpfYhW5jdiXhYuwCxVY9Nk1LKtjTpGxPpqTqUoyNtW5GGiqKz",
  "key24": "2viNwDAHjBixy8LpxFmaVQ1exdU7NeZszbEdcw2Rbr8vWB4b3Nb7GqX5qZKUs3UjJYUzz6zJdaTsvFDjxPWa5FWJ",
  "key25": "2rZcFTS24AnKNEpoxASzFctjoqzoBHzGcgP1Q1mjfWaaoWpuDH2YqGnV9JwQDNDjPdrdJNH6G5uXNvpJKJ3fxFB7",
  "key26": "317cDcgSXJJaXnhf6mWxGtEaEPcRhVYoaVoBmSnEjDT7CjT6nV25XAYY2sTevb58ZWKmRwqCd2kMk1VCT4xSJmYS",
  "key27": "3VZyUYeTga85Hx7RHMMRMhmQtqPMVkChPBWKJZEb4rkje9kBaD3Pp76rFhZDCwoK2SWpGNouRS3aBdxc1pTVZrA6",
  "key28": "22GG5gYKKSs44fcbVBmvkFMEfgWpcFSGcVb3oz5DYUQ6VqeUpvA5HS7vxAsgXC61RouRhYYRN1N1LHbKxusyVzXX",
  "key29": "3pTj1giiAqBrCKwUX4MPXbWfnRE4ampMTdMqTJF9TwDtToS1XHTs2xe27Txzm1YXBJe1VKMS81Fi56P4sDMA8mvm",
  "key30": "5mip4kEJLRjgmbrqUumCoBydG6PrEmzG1Qc8CjdJC69sgKqhUgGnsSL71SDmcmJ5HtVogTJGMYFHPCYmDkyx3Knj",
  "key31": "2NTdWFBCUQDFUVQLedQKZJ9unwaYDZiu7qpdde8odw14MjzYy3bFxtUCC45LY9PB7jFYqcXCpX4Tets15EBSaEA1",
  "key32": "hALhAksERmBdRZ2WfkZHoXtdbtEVSc6kXq6S3y6DLxfytjdUfx3kp35ZfuLH1HSecQhGuM52Heec87jUZw676zx",
  "key33": "21Q3x9Qj5wztPPic5LJmeQyc8CyjZgJz1uDKa1pxQuSasgCwDCJFuGsgdfkpNXHy6t551kKciKLhUCXpsfjv3fYa",
  "key34": "2cgAkHWKJ1nbdMi3aQMYgzwpwikGnpEXPToTiAJUZfNJWfvbDUMoBUDDQzNqqmfw4j17r8DtdcFbbQ5j29Btqk2a",
  "key35": "21hgdERwJ7NaWAu6WjvCaL2NrvaLJ28mcx9om3xJYBbaYW4wqCxCZu5aDEVhKHb1aqQ5rcmJ8BxewmipjwoQWN4E"
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
