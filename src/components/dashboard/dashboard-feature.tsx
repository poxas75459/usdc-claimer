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
    "5Af8df3Jg7yoJ75vYZhBFNdEwzV9d7RraqW2PhqdNhngkYFA5Tkkw7b2BTkS2dq2nQ7Jz4SW6UU8yQAiRr9RA4Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uamssTFXVddKGbXCgDug8UDR9XAKLcjb4HGmJa1JsLuy94t94qWoDCy25BZaAEgkp58CwN7aX5DwkAfGre3jhJe",
  "key1": "5sN9WLPxbUkQmVFWu6TqhWmcnpPTnmGoYr9GcbUvCW2XWTCZLLZ9anWaF3YJgB5ehWe6fFJ2gSbnPYs4sp5JQdG3",
  "key2": "qHnDuzu5Y7zpYRBqcGQMrH4mZT4ryKUX5vTQAtCxePcKGGUTKAFfnUESRwVYcWArjR8vF6chV4jjXuDSYtjPj2H",
  "key3": "5QJUfp7kMPH2Ha7jmJsY492zYJRy8WudDjXFJ8fpN2DYgZPuuAufctpvmZrqXiRjF5LrryEDDKb4iw3XhQz4CrmV",
  "key4": "5Z2MD7FuYixPuM39ptyG5UrRMfpKemxGH7rnBQ63dC3N9D34MWJcSoDuQ6hdDNQ8Hz5caddA1NrLSd6sBCBdUxY4",
  "key5": "4bXsK59x85mbp3pr5jAND3Vo11NTD49i7EFVUGzfT6CyHi9LhhHug2u5DRdYvrwtQEwcn5SSBvtgojZ5TRoTQzkR",
  "key6": "5bfBjUCWKKQ6xdBp6c7hz2Y8uzummF5N8J8NfQ5m5aMyQoVg478A1SsccKpJiTgVTsrtnjsJtKkEQawWkAxEAgdh",
  "key7": "jsCFZjMqsN6TjiHGgxrhL7MY6JqqAgvYA5zdppZ3VoADY232PSF2uDwGpvap1unfr6EHqXK9pHMoJ5LofRmkqEC",
  "key8": "569SHzvpQHdiCG7z44cs7sdPf3zXjffGf1n34o6YUhs5CyFRAwG3iGQto66X89XPTCxNiknPtcTv4muVcFn4Jbh5",
  "key9": "vZAo7Xjg8AaYYmN1RdGFHRZHZZSD9oMxmK18zNohBG8Za7EEvLms9x2NsfLRwTP2URf1NrgqQ1FhTt4tckoqm4N",
  "key10": "4H2tmad4fNzWYh5tqMd2D6rRATG2HqdaMYCfZeKfbEBXuA5yoxA46NkZTUDnpfQj3FHPCh1uvLoWBjodSxfcNJrL",
  "key11": "4MmZQKncS4MwvSaBtNSdrRvcXJnqitLFjGY7UEEYLqtLvfZAdcRpKt2shvyrNkuejcDUq8vFqsZiBb1gYJyQaQ7E",
  "key12": "2coxAhkGjrLu92BUFmTRUVvQb4mGV6G7sZLC6iVpEdePwMrgPviXTRy92n6rQtfxPexqCaNySrYm5h9XFGBsdND9",
  "key13": "2Ng5FHTKkDXku7oR8mxcMu1XjBXyK2iLAen7jx7eZFR7jk612Ek9hKQ1mYPp4uLQDw9DyFqQ3TRs5kNsQnC2qwoG",
  "key14": "5cex4SUN2HqzNc9xqJ8xjVkx3tF8byn6XayiMN53HENnwCQSrVny3HYi2sDxnn5Nmj5oyf4SfqHdJAoPd5B1kCL5",
  "key15": "LX4Si5koEAAG7fLDzqE5t8ba21D8ukhULseHEHPTnwSkUj4FTa9aPjhZ9Bx2K7YV8whbCtrDobsdyLsQ2QNPdfd",
  "key16": "559KeRk9jzNv8rxfnqVAa8knAtqNscDUqF2ZttdRJQek3SR11y4swfny4YdHUhzXBo6kGig9zYxqxd5CGMLajSED",
  "key17": "3oKTzeRWpgf8iqGjjPpoaKv7SQwaF9kd1isQNr4US1xioGePmredjRNG8dg1SpN8Tgk8nvtLMbbZPg7BQPMB7v3S",
  "key18": "3dB1XzSmZv6rjc1fWye1voXcDeuSMfhsUgbiHjJQmWe7PVYeehnT69D6LK7FpsoQSzW5XK7g4Rj1sQjHbrTS7mAi",
  "key19": "2upaX9BckgWHa2bFV7AL21cZkrqc269VTk7hsBJcm2gYjURid8LBJeJ4CtcFi6HUGTQWTgfX9Q2tby435w4Tjrth",
  "key20": "2CBmpztcpLoDaG3AG1jRexYPfCdoHzbmQXesXVCW2g4EkcBU652LywPE3QhHQMfgXPeASTDMWMuNEyLHCC4eippQ",
  "key21": "5nRhZWMfUZPc91rLXDjiDh1eT4GCcuvuRwRNuvzdErLpbwMKE3CoAh3a5S6bnenAoCgQfVgFo6kGUJgeFN95rm8p",
  "key22": "4h3V6Hi4HLFQWE5oF654haaHuQCYYzX7qqnT6kPBWwnAmG2nFbV9xnwhVBXkmTw59ZMWQM3NiFAddDSgFSt4UH3E",
  "key23": "5KSixrMtHATN3kZz2K1LXj9savfhv2VJPHGT2ZtmpWBPjhVzkDvevBeiuRrzawkQjSRKxTLjxtMZgBiccZS3RCDo",
  "key24": "9GjKiU4QnrZ4oif6ZQXswY7SSvjXV6NY9RmfaBnGZEacpBRS9NPX2bYmZP997ncLD7Hjjcx4mGA3mMM65adNVdv",
  "key25": "51CEcJ8qWQwqqt59aqMTu8Pek1NQcEyvwkJy8Ca3Z3bJShqKHgKYq6YZnAFWSjeeYtNhbQuUxAod3Rab6kkKk2fp",
  "key26": "5XybrYu344THS6urW4PswTPAFC8zppf7xJ71MYZNzCzYNz8UfBzUDafuNHU8FbfV9gS7Ep4QGD15ahSsKCRF1oKY",
  "key27": "Peg6JrVqvrj31Xwe9HtKXqsFiXjTTxEmy3dcYr6u34VhGWx6FyXxA5bYBhqQkoc1LrmL8UQUcSAtCmqS5RKrEQf",
  "key28": "2sY1auiemdJDX3xVUf7ZHjaSGjBUArULka8Dn8uYoJyHjEBaNMfAkt6kCiqg5NgruDazP8sDkNcu6g2KLCENoXfq",
  "key29": "4biA5SV7ujMmXEUGiVUWVFvPqn43AoeAuVafzKbqnyn1KaNKCRpzkXeB2gEwY4QiArdwW5UvMpnqG6aRcKczRM8m",
  "key30": "3JkQkWpMoAbPkD25AuiBUDsczX5x8Kpa8HnTfMqer4pLEKwFHFz3X28uRJJnDWME7MKpm7AbzcXJEoQjeA41Ym6T",
  "key31": "G6DWLmXiirdMoyyjBFXwPRuSGTUfgnXqqoym7MniPzFzcWdBXEbe39m5D4nhYKQEXNcubSDknvdmc9x7YDB9t99",
  "key32": "4WP5aUGMMYP1bg8t3WwjxPPSkkYQmoQMLhLPEMCWqLdF7nhWKGYZn8AtymAZCLEiLMxK5xSuax6i8N2a8LtuDbcQ",
  "key33": "3t8q8rkBp9Rx3fsD6NHs67FXA17KoUeKsScQyhGNwe94GQtoYoSrJVsphEwkSNT3zhjMjrvLP6CeCeRB2y3ss1FD",
  "key34": "4AarbVrJkCSD1hvU6qKkMCd4uexKhAs9pfjHtQbLjimqL7SuzonGf8ErXF5HRs5dh9hXvVVM28iKTrGYQdv1oyiK",
  "key35": "e6oh4pmL8Pt4uihYFe1hFc5ZZwP84zNT6B4NHvm19dnq7XNRpbEYtGT26GANYz6wCQD8xa9fw3jCERPkuwQ4uXu",
  "key36": "5kxMkDNESNsjzqPFVJq2EACBZWsy4GtVdhrPbEwRsJM3fX3YENhyWjkh9NLJXisd2GARtFfNgnGeTWa9bfSyFLuu",
  "key37": "4ik44LUKPvKEYhoVQaEkAicbAWVZxTq7bWw3zVcpgQJopd6qDUJhJkiAZEtjKRVPo7EfaLdhe3PyseKPeZT8jYYa",
  "key38": "53GbSCgiBEagNy8dr7ZqhayzAjsPLRSJy4SB36jsQJmTfjatsvXP5gmRoC4JRpdcPN6iQaaAhKF1oEKfqwmWHYw9",
  "key39": "53bHLVbDmEE63C6LD9N79BavcyJx9AUm6FCkTkLNsYpUtW7e6JQfkeeyHxmbpi1JHj5bhWcRbTxdP7ZP2sHr153r",
  "key40": "2Q8brnaGeuGsbzdZ2q2eQwNsXa1yecgwRVDEXpns9mZi4WJtBmKErQTX8PFprCB9LQgKNZU18fHb8F6K8NAAq39H",
  "key41": "58WcoaDRbDMb1kdrhH7LPDUwhnripPRo6pZeGZazwpEYn5W6m261t6mtkScp8dviKGbxWfYtvZUvAjzQPNyoe1iw",
  "key42": "3aSaz6WnH8ToqNeKUMMgdg6MeKCWPKfzRf9BUhGQrefANEk6LJwEkqxCXFuZkZ4qvdAHy7JsK6Sup58onhQywLsm"
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
