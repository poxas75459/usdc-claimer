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
    "2Pvj5cPXv17AozYXXxMbqL9LZkgGMeXPPu4Jya4w27A1jqtFHEV2ssHpVLjZwLFNdJ16nqa23kcYvyVJPka3rbxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgh9ocEH5ru72cTJoku64DTpU4qgs3Zz4RdeGN2Qhtk9tcXyu9hd1Wfn5Q2QAYSnnEuYYGCqKvLy1r47TX4iV53",
  "key1": "n77YvNqj45Bcjfg5miKD8qjPqzJGV9nynkAa4f9xHGp4XHadDVeaMwH1sVtE7ytJSTFXJa8BH7avUkrM9edq1KJ",
  "key2": "5bQKbgdXqE16MntqNpQ5GEaQ3dNjaz34uRVxx4xiAzU6KcYKgsCKsBaMfpppzUm8NLy9KduRuKjoX2mcnK28eCej",
  "key3": "3cHwfprW3UcjFSXScAnQU2oApiqykRdCWkRUmbAvujcXWveMuxoXbTTmR7JsuTGMd9MgjBVfPcMieiJLhpnjWL6u",
  "key4": "3ErqXEp9xLgdsuAvKawPV1fA5dgaqEgxzJ3EaimzQwHB5UUmnMxp5MrZA3jQAA5NSJfMPqbiJTWLuK4nSCLZQHPo",
  "key5": "4EG6zxt8RpMQn5Bnew6oKoLAf1M1sMgJXi51rHqp3r6dwXHs4SqqSbLjY31FQE3ZzuwGSaE2eKxkTPQcpt2YnVmB",
  "key6": "5kynPEbFAdQzBfm8uRUAmbHD1j3pdUebYBcgvSiVEWnHAe5CumwHUH3iiWYFN6TwyV21E5Mb5TAX7DuyHDjrAVLT",
  "key7": "2jv6151SMoH53zF12iZPx6JotTgCwRthN8uqYGGQmU9wuDBf5Y4EWyNh31cCTygYdrrtwgon4tFEJEErQNcNfjm4",
  "key8": "47sBgkN2tS81vrXABwJDMqMh78VvqkgMFgJnEqBbqBdgZ3k1ttmH3nHM3KXvPXgY71wqUpwumYR18cSZZppVrD4x",
  "key9": "5LVVHbEGmuCwK8jitMeXteHc5V1RjwiED1bTCQ9ZPF5diuDUktMv5bGmBw8eZCkeaUgyimram8EvyRRPHkZpyK9x",
  "key10": "3mpURuCGqx7rZkBSQxNuLHq6XWYFfEF6f7e5jfSstuGGVNBh3DJKQeec6gWeBvchVeg5AY7PzPoSdiBAiepMFSLS",
  "key11": "3YCNRKrFnsCNUCwx4EFMRy3gkT4amngWeJsyV4n6mA1oYqTD7r4uToNvU2JkGX47iLPU265qaAkaBqQA8p9Pzi2g",
  "key12": "57HXdNDwq9oGWvMtUeRXrRk51pdrXKZ5VVrkfhFfvuN1hv4fkzzq2axs8idijtP5qGpSEj6hYsXEzCCcyuWW77Zh",
  "key13": "2UFq7PAkouJmDWgewsztACEvoCHVsP22jAjeygLpDuD8mnRsVFy8WTY2A4Mxqcvv5qp9wZUKWrFxf6353vytXfwz",
  "key14": "3yoRYLWrAfJ2xmJfqfFKZx5BHUw7EKbQxURcJMRXQU1VdeqU7EsoPjrwRAT51T7N96UfH5Cxp1kGpw7D8JxJcJuJ",
  "key15": "5N4pH9wb8tXxs8VuC3v9RHg9bJpdJ6YSEW5kmzQPasRifCKH4FrUm3sne9kA43dP4iGL8jxrFVG8BLv4Dy2E7qZs",
  "key16": "3C3uPCn4gdHQyuaQiKo2s99t1i4gyE5nVpLs8HSYyy2rqRYm7qnAkmVEmXA1sbm7NNFe3rcbWLryz6DHwE4VNi1n",
  "key17": "jR1qMeRCfBGj8Lu2Ci7orSf3oszMc1X4z1i3CWRpWPA5kfqb1tghtD7pWHZRgQMH7UnesKMMcRhssZb9N64NwTN",
  "key18": "3qaQswBFkcQ4vgsdZfFdPRJofhVxqRD6oQDzkDq9tRKrS3mMDTwcpBp1GQ1VmTGZKbikMsByGnbHKxta22oFpbMd",
  "key19": "5wQDa5SKZ4NsKn9aEEMZP4J8RvQWcG3uuft8ctSvPAxZF4PLSGhaC7Fcc6UQaxNnNpDycWrFoXFrsvfePsuMePNn",
  "key20": "EgJBKCkddtP4pYyaEEvU64zbNCPy7SLdjrGUe7uR9QdfwPJ4178HEjB3guP8Te44pxA3Fh1ATJeTfrVHSVcGiGN",
  "key21": "2L6DBWnzdnD7bc2YTpVfP6z5GWVZYM2DprX9jSpSHmNhxGXSwGsou3K9RTC4byaCzRocVQ1ZLfS3TeVVgXpf9rXb",
  "key22": "Dj5DJA2SSSLYJMY8QHFudJkT3txsTwXqn1NY5hgcqpBJ29LMwTCfSyTr51YZqULochTVFYE3EMSWD8gFXWQVxbr",
  "key23": "5vjEzxSQjvx5xWZbX6RFx4YndjF33VeJsDA7seQA2gHNCxkfMKRhfkVDFUgwyCcUQGPVEVgLnb3bdEeRmJu4zeou",
  "key24": "47QqN1nmu5SDA9AJdy4BQgnEkYjyZeoJcfFkFLb5prTpaDWAkcsirv1tMFX8DWLTy5cGkYt5cgyjJ3spujfp6N4r",
  "key25": "NqJj9mMkiJTabfvkskqzjo5DSKjFEXVz4rzk2b48VtDBjzAfu3VMSr5ReVme7jFhFLpy66vM3v8JTtK19BbVBbV",
  "key26": "81k84Lez9uGJ2xiVGHeN1Sf4TDM5QJMhwh8A8SefUsPAy4oEQLLiCyAhRr1oJ97hQWZ7ozP1tjJrgEKCL72eMqY",
  "key27": "5sTevzAFi9EmfngA8aRk8MggLUkzsLb7rQxwEJ6atJQs3YRShDBiVDHcpDtvWgpVEatCymYsb9h6Fg1rgDs7dhkE",
  "key28": "2YxcsXBhVLZZaG16Vw7JtxLGww3YFFDLf9N866Hs2Xs9k4wqZGY8hkCWbZ2sPW1yaSE1vsG8sXt1Je1kqGjs8e4w",
  "key29": "2o7CLwHKEmMfxCTun3XMfhBwTtag1dsd9SdYC25YoBXPGiVjATni53UTfmNJaAJgArS2k6SWFuzLjTvWVXPqCVGB",
  "key30": "3BenWDVkeUyScTRjiCoEoPEFZzYX5XQbRRLhyQH29iQiRtWAKR3RiTpHi3B725mvkGE5V8fKLWdshBc3F4U3Xc1t",
  "key31": "3cufYsdJNPCrqP8tMxRMNSYdC723qxKWvopetECT81rP9n8tFKX6c7k6akgaj7W6Z3WUF73CG8vY6Mq9pdzTzDvC",
  "key32": "5V3hSnjC2YBngPDHbP2EacdmjHFvoN1nkQvbGghWE2M2w1gLkg1TzJNyXvA9WDcbLsJAcSL312SsoCAMjnATcq61",
  "key33": "6nXTjSrz9RuoWJHv4UVgivgQTmsDFn3MUK8FVrtqgPgovkkNXqTeTejRnGWRBEBXi8Wh7UfgFhfZaV39qKYU2px",
  "key34": "4wXweDGrp36Sh5gH7X73BBhyhu3iYn6vd6Wurh8qZLRrBGg7SikouezR7X2fvx63rLf6dfpUqNoCZd29F8CzbgTo",
  "key35": "5sckSGqsqH62XYrdmX8TNRA7ETyM1xcWKWe28PHrZ3WYTD6VDxehgKTiFB3pBgnBkTqmwToYxCkFfypoVUDViEzV",
  "key36": "5n5194CSpKn3LM4saRKyZp6Y72fNjdYuxvUhE8voM84Smej6nrpmmZTXpnausiQtgjdgkTJWJqypnC8x2eWNiBTq",
  "key37": "54RoL7dQf6Fdo9y9CLTZVNrEKvqTaBKtpkR9AU1gXPcUi7ZnuCZEBYaiHkw8bi5RejU74cVNkapnasfLfiwxNEkx"
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
