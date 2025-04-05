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
    "4Ac8FvGqYTgTAUMk7bqjnYD1fWmn7C2ssFVrfPuqskX2ujPXF5JpzcCfqrthruKUqQjz2NVvNoXyE8N8UAE58RSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMBocXnqACVhNLVbeAwQNs4YMhsdMu8jmKXpJ4DymCG3GUm8z2UuuNAv7nQL14ewadMxLvjZcDfpxU6Dqubd4k",
  "key1": "3ZsTV2oTRP8sg43gZz4UtkVsQHzvJDGMtauykrMbupRxG1yoY9qudi7DAE7uHPCPkTvzHSVXw3PyZc6fZVmXaGCk",
  "key2": "5JFY7wjHMtFFWxtdrNtrg3y6LEop8GUB9wyCaoTtjPNzpLW4zTrkYeWuEqunYAyvJJTm49C5h4onoBnE3iew3Znx",
  "key3": "5PKZajLURabaJdVqZZFCYiE6HF7Gg85Ub9trmpqqJ2pXync1tPvvZ5dfc18xYAu5oMUYGBRsGsaLLoiQYb2EAFaZ",
  "key4": "3bs7x6MW1S2PLEB5XvFmjjCFmMftg3rjncW19GfA6D89J4mbVGFxc12hWqjzixu2YeQsXLszrQBkTzXTDCUNKNws",
  "key5": "2BjfLNzvMHMr3BbBnztNwdG3bsg4RRkae7q1P9hHEAxuH7VWcc44emkM2WHXZ9EHcjroWq9ATZQiSJdUCcDtMBnh",
  "key6": "3eYJroikGSF4dwT55mFx8ND6kbt9cx86341Ln94611g7DrwK66pN2fcH1RQQhKkgFniZKtktizCSkJD6VqeWzwus",
  "key7": "2AhHSUBj1pkbHci5wvuTkHi47Yur4EQnY3HjrrCjE2W9hEuDdhEohpFnLxmKqcKUVgc2nYbysJmHLpXTnVKqhHX",
  "key8": "3UiWTCoViTd1coHKoKXhVRFemsYLXjwCBzFj3Rx5ARXRbvjVJsLi9emMaW4Fpnpt2ohqNg5ubZxo24FoN9a3dgdW",
  "key9": "3yQVJfuCY9Bf5ReQznCjiaNtAKXibYAwsoFf786sq7ZZNqBb58TqyBshkEwt9qQ4UUZoey4ascpeHGjQVbJ576wK",
  "key10": "2K8Z7A298Lqrneq9pz9ZpuffMKsXi6JC5aQousSo6n4HreMAK53Q6c9GrJ7GqdhqJUrzpwQFZZnjQqrVK5699CHL",
  "key11": "4cFkEhff4qbBCYQM1uk1CGuYxtPUjwuYdZVoa68G9AVGgbeRPn56HWtXrwrbekCjG2196q7DzNB8J32Ngyh9cLQh",
  "key12": "38BWhm9fzpmJDCtVmwmcpdxg3uDsyxXqr8j21BMaoj1ZeEVuYZy6aLQ9sJ38KVuLgPFsb1pH2HEhEBNkt9HuK4z6",
  "key13": "bCpShc43Av2bPhx2KntQUiYp3JkmNLawzJJgS4rXwvRJjX1ibtpcvRQK9BdczxVTk9H7g9bfeZdVYXvkMFiLaQV",
  "key14": "3SR3PyyXSnLAySrtTSvtGTXfJyVg3xE9a5NELb1h4uuHx7WubBKfEff963gwpk9vykKPmrdyp5hXeH7ToHgAQHES",
  "key15": "4RgfD4Ubd4NetduB6uUpHQo2nNbNhaksPurVFRvogdMof55FXaarFSSwgkSrVyZaeYsSh2Umxpe7baP3CWACt7F9",
  "key16": "2KD7svdt8RhSSKUWTdawYgNHKeWbT2U7MgqGUM9kTMVBH63MfJ3k3jT6xoE2t3s3Vn7GWV75jkoBqMcxBxTntY2S",
  "key17": "3ZMn1zLw9DfkVxomHoMvKJnvEhYvyKvdBUu4DqCMDrpgYAnasJPGNQVF64yy7NgDs4R3XwcL2xMwKCpL4SvTPipG",
  "key18": "45fJVhUSjrVTzAuGw5RshsihCFhn6GWJRniAbr4GP3j3w2CFQKEoQP6rW3PLWeB3tYC3zdzk8Lz6NSvLVt19XHEt",
  "key19": "fKSiSvh9fArqcnrvCiYx95gC2tW5UxijLvzPPGELVWSbNLHnCw6MxYjeMneQWLXuLH6xZgmcHkLDBAady79TxkQ",
  "key20": "3TrqbStZbL5xZVsMtnr6dnw4pzr8xcB2KKPNrjvDwtfBPf7qnoQjU3hkZnHH9xEoCDbS2Fd9pjve3AqztSyYCD3R",
  "key21": "37Sfc1PrnX2UpviHQmLddSeSDg3id6Q1JN77NZN3r7rkyZQsRbCVe6Y8hZYop6EWWBeVz8QVL9Mnmpw1eVpkssZA",
  "key22": "3S3FXs8GKMg4cPukGiXXHdu59iAADyMerH7GiXdxk3Q4Rh5tvJNnYA1GukpMp2HS8Yj6bejM43fgceTwi5kwrGiX",
  "key23": "4Ey1oYkZisPKTycoyeuiLF2vushEzwLNDwHutcAbQ5hRHb2DQZmXpn8X9gqWCHYS2xe5ATvi7hkj35gPVPVu21VT",
  "key24": "4rQ1MqCM8kaVf8Sf2JEMk7jafgpY4uihSAcDHdkogiT81YuKDjGnYyv3yed555iY3rZn6pCc4uGxLsYvn585az3r",
  "key25": "5pDGvStJBazofEpKSFuJ1p3YtbiCkBRfCbkFyAUXCbmALP4rsRieR5U3ipotpj3aUBxCKSHLYqFGWDPFV6SPpd6u",
  "key26": "5wP1BSjgo6qeZVWv3vegKLJk5XEwUFfQGo1dirwQuFc91wCZZpGYRv2VyiX3uoRn8H56LxbDtiQ9FRGfDgdnjoSy",
  "key27": "2XkWGi3ggPPUdAAua8KWSxi3coiZTg9QKMdfH6tysajPLvdAh4VBfro9i2HWToHyVRkEwE79JFAaeuPDdJGkgGYt",
  "key28": "mTTPBvyecG7xFTyvo1BY2EFEWNfwS5zogW1bTEBsVqFE4zUW1GvYPsBzNbeHuHn6oqDK8h791zDUeygUUYpoVgH",
  "key29": "QzZYXmSYq9EW6tiPt7nnesSqtfz7o11SNRmp33bkUgXXdx7TN4AFTs9PXo2Dk3U8ZpXyjuxaF4LZTQWAfh3x7pa",
  "key30": "4xZtDxkYdakDiheqDSBKDBs5ujMdFktxP8gQfa7KQqLPz6xYkCLUWJWBpHjUF8GowuGZrrzoCDQniuMjjDqbeo2",
  "key31": "4vHAzuKa5RXR4vRXuxAEyerLBK8N5UneXGzk11VqcCeLa7EJX4TeaSvHohiVgtMjtsAd8Ky8Ps1LCJhNQtLPTtSS",
  "key32": "wqRdgEmEK5QKKrayyBPJCUpHSViKXyk2bTBXVrxXuCnAwtyuDEH4VgpiZoP68iVLHPYkUESWKTw1go2cwzYAKtR",
  "key33": "5rqxeUbpGqKBJtZqoz7RwLSnoPqTR5cUvtYnUxjXMQLvbpXLDcirBT3zeUKiKCjkspXkvmtPrR7iUqKU61nZGFX6",
  "key34": "5Pavdj7UJbdbTwegcX2dXPVjQtnBBmcW4M3HY1CjEHmM8yCVfuZ91ropf6pFL1wYurYsSRh2MJ5veojtGoPyuVMy",
  "key35": "59yLdwNd2tdwsfWBWe7dimjjVwdUsVvqnTcDjf3tvWhJyc2bZiHu3pRC1KapNihBw56xxrvG2JskaXXR7JryHZCm"
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
