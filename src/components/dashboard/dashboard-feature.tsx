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
    "2Aem6QiHgNvRbnQ5bVGqtuaNLdNrA9Vky8QGZ1RCj8Psa9Nex4Xjj9wsTWYsWVqbAhX9xfH5x28K6cD4uGE6uDZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G37idzLgj7QB4Q28YciRwmnkBufNT8e3uFmULzx84e4UMvy9U2dz3LDgzMSBYtbrxNvzx6wS2eeUFGCPnmSxHLn",
  "key1": "pW7k2AxExZcCezMtnwaYkDbyaob8zTxX5zLEFi3QBwTGzPvFbpNtxrYy73fdLqCJxWJtW25pUQSVm3zHWu7QHjo",
  "key2": "4bYusgQLCxK5VCvAyo2eVLn2Q3GBpCUxSFYQgunNL95Uu7FrvU5koVinUvHkRwbhqnCqGFxRqJxvrfbdgL5So6xc",
  "key3": "5oQSdYYz6kxvtwxNwSZcq7dLjqZBBRgveqHJCtjGRx5rYhuDcKRiPTWnc4kfQEYyQZwALFocj9QhtkRGjPxBKUcF",
  "key4": "2XikwtFJVhh4pAdd7Ugy7so63xFkfAJMsnhk3wxX43ePoGHvoo2e1qRPfB8ZLRmdfMF1Zbzb1cndemPQEyQoXrEc",
  "key5": "4wu4ekbocJD26sThAsqvhmhLKDi1QbHi3GEhF792HidPgX5RVLmHLrsWxbzgbP2JdvctP9ifa8Qo7DedemFtUivs",
  "key6": "4S4VLMWZdS8CnyEoHWCnSUSaGTbyEUSFM7vTQqmFSHB2gSrtsJET7oY5vBRuvA7NQpgtS2nyFgcATnbqRuzP7hdg",
  "key7": "3tZmBYMsmCZBVCBTCUkF9RV5KdGeMyz1FvpKsjMSCfMsS5o8hx1RLygHu5rtcJaKhyrBryvf7LcCwgw8mvUEfjPQ",
  "key8": "54tTWm3R8Gri5oBNaaBrEbGrPzkkvDXU5aYx7tVUbeyD2ZHisvtvbKo4QvYj8NmJ2U9qrLp1pdrAUmf8t4kHf2aT",
  "key9": "5zbLYb7ETyXor7NCKYezkGRCA72DAjkYC4dHuomnuiBEmVoZxJf7CHf5p1Q5RhFQKTb1mZouWnEweVUfgXocnqXt",
  "key10": "2EZKWLBqbcwvSSYmqv7rFdavASsnd4hcxa5BVZgZxWkzvseCNxhtdda27zxriihcYM5zPuihpZ68PoJz1N4oaSPa",
  "key11": "GUqx6zqaD91rYNxQo2fWGb2ZJqJzJQND7ApA1AYY3PhXVNozmtb9kU5kAasEfupmm9yLndeTp2rHmkfPLPWQWXF",
  "key12": "cXtqvoJJ2uhsaqWQEgxF2vHTEeTmtzzHDNiRETRjsqQWVZqXjQ1N8kajGywh7gN5M5HRTCYjgoY3NocnFgNoXgj",
  "key13": "4PTpEte9GCeiCBqJWtrN8Azwn8MAg5ha6fsTwpZDHscspBgGbG8FEh2s4CSieUB5TYBNaiPid18mhQNqU1XXdsW8",
  "key14": "2qufKaN4HtGw4AA5oDyVvPxxVA5d1KQK9xqjyQcuXc4JA2bamBDt2PLwNrhAboNvH8FdwA2NZsH6dDerTfNrnh4v",
  "key15": "4msiRnRa89o2LmaJLkAkQXmb58PTSsp41BgXcYN4iTGY98uWsGsbvagQFDXirLvrHongqoMkzfDwKLmsDaZ2SaiB",
  "key16": "45MeFEYpb5427nNzjA7UDNFrkBp4VDwwPEj1jYzxFxHVMQkD1ZXtxCTid5dEgPvsrZNY1u8Ktk5hKWQXxZYhbVmo",
  "key17": "236YgmzbEzRfwdXDux51TKGHLYf7tt9WYFAXa61QmxD1g7HHy3ge5ty4V4QxFZe3mtg9HqDMpfvgdVMcGwSFuvoU",
  "key18": "4gsA6HJ8uLN4PgcsctoRhAP61ZcjGysBdPhFyiTiAvLNTQuA7gWpZhNbfv4qh4dPfWEoq6iL5pnvqzXEE7LY47Et",
  "key19": "24G63kcVUQmHexabMiYGeugRtJ6TpsUsiWCPpm8Mwvnu7MYSXmoQaERvYR5c8Rqx7fzUMhNmvK3Hg4emJx3FvK7z",
  "key20": "41Mu4LannBDeSWTpV5QLE9JvCXxmtGg1YiZQ3YABQukhyEKuW7wbpei6LJYS2BLqkHMHYBYQ9fYeDr5wnCQpF3fz",
  "key21": "2UnR9ngmqwS4xKGGtJBfx5Jhyc21GsrUKNyHhXvE3v8Sz7NsDu1exiP3axJ6mKSvcCkvJVTsZxLVsjRYGE859EVx",
  "key22": "2fkkCfBJzDaxrPbjN3B2KdhgjQ6BjyZ8EkuXkrk9gQ6sBLYabwH9aXZPenM86SmGtQWeg3Zw5oH4Fbfa59gk3bHY",
  "key23": "37rwepKc2bpdqB5tuNgWMtqKjFXjrTdMQBPEgFzUF8Ybr62WrKERLGP5A5uk8aWvJ7YsTSicd3Vd5ftevpkpYyNu",
  "key24": "5A86ahLi7hjXx7D9PCbEq9w6ZrGsMET4jo2LuPzgtWMmFon3q9JDCLDjoLHAX4CNFz9nBuZ61MY4DEumSD43rkyB",
  "key25": "4rueyURRABjRtdqENbCPdZbKg1w9vW9cs7aCJKQQxAXLgz4RfU8cqgTjnpUPDGwHPw4HnbiXFryfwRuWnWd9ZibA",
  "key26": "3rx2fJNdLQin2VWA9pFUxrayqipo4GjA4WTVUj1oqXCXF6VyShL9cHAEexxSMoxsVJYVna7oCUW2qkN552TzLjDD",
  "key27": "5STHcaiiztaqCoCtqL8mycbVYW8GueKvfH2bMLLZK1wYGQxAUqxD5TyccRwKNw6LpWk11k2g4qFRMdgccnQ6ncGu",
  "key28": "65J87nR3eBfzSvZyDYTLWxcTGqYwbA89HJJnL7EnTHBUCHiYRxtrYfKoK33uwtXaMZw8QDaa4BVJnfXYg45Z1Xt1",
  "key29": "Qch21z8h9TjxDRkjRzt2L8ikjbvquBxERf5kzA4wRLCATAKZJbG3nnmq6swsPkd64F9hU7AZbRVKpjgtqAYVsow",
  "key30": "8R13KZxjLcC3pat9yAEzxA16nfsFXd5rE1PniLdd1XChg42WcuX8ZEeWkr5tb1KUZXo1gdmtipPXJYU55TW9FKZ",
  "key31": "AxdGN4Ak8n6p823WfTCUyebLFcxCS3vmpt17ZaEFaAjngw2QdHj8RdsakxwXQcZPSJY7jcFKwpF9RZL4bDhsSVq",
  "key32": "65yj2YAGLHwvKxS6E4yAt15nVCXk9m7JhgkiMRK3oGuzpRZ3GdWuwdkiZDmrAd87uaFu6PGR6CxWyunEXdNr43Xp"
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
