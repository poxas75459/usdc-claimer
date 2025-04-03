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
    "4FLcQqozBHkv5r9YcJmSUWaheLSzX8C8cftu81vXb5sd4U9nVokaCK9FcxXsdQgHiVkfsnF71Gnu1x2UKB9ZXE8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bXNUTzxo84dGn7yWuZ1Lf3RcujVhbzXt66myYagLXs9iLgY6HnwDCfPLP2D3EHXmX1RPGYgjSUyLgTC2A1PMd",
  "key1": "5Qm88m7RLusnbPcRL63cCkegeMyMb2qs4RJFiEpshSU3CayfgKpeY6fjXnh12EAretes6T8A5fP76hb7YvNjTb2g",
  "key2": "4F3gDyVLvSdEBQb8JyeNNXP2T9WSHsagWWWMrKq4SA66w7AFrwBZFPREXz9YQFbDKgu9PgQSXeQmQ9H4gM329La6",
  "key3": "5tXMNtDN52pmw2j1ULJBgNLkyyJ9pj8HgEtBzbKRDbCPQsVvvRrtfLd4MWXrSDGFJwdEgK4bz4sntHv8tFb4869z",
  "key4": "K9KJhUHHbG6jtpcMcwUh8rCgsj7LsahxeJkEds7AhisTxjenhwhtecuYoPoRoeScy4Qvb4Q2rBgHxD3KxYzT5ac",
  "key5": "5n3ZhYysqQTPbDMQFfFvH9fcuKDupAyGtsLABg8X9A4YbzEPhrWG1hDJ4mpiNTZKLGN9dn6cjQMtMNzCV6NWfaW2",
  "key6": "2a5uASRqjtJnZ8S6VjhxEtnzGqYJUnwBEMf1RknFW4UgZ6ahVqio2Y57DyKr46mmZ639Fd39kEvEhL5Pd4wikna1",
  "key7": "5HCWmjUEz9YZ9pPnrAuzeyTqjdG2r8psUZ7aXMk42d5ySbT6KQXzTFR3L6KxuDRBVmeHSgYxqsPZUv6mMcArDVWL",
  "key8": "32APR3uNBwGtMeFoi44Uhkd6uyg39Q76JkMzvyYjTP4cPqrwJ5fvgm2zKYt2GkKYM9MMXPFoNdMFj3D7ZVaPDbxp",
  "key9": "Uw1LQsctuXoPyMQoBMF7HdTZhUz8d14GNyMV36mXeqMavFDfyCZ3jF6tJTdHXYkaT1ma6TftHsJp6rriSRpHvQJ",
  "key10": "3RE9GMWqrUrDYmGqw76C7V95UEGVfEsD8dfAb4nEeYXCEQGJE9LWbuELia2uYNW6dCz8LP2vZUgAfWeFpFudDpKb",
  "key11": "5Kh8kMobsNBMzHKPFkRUHbwV7P3X1fkMpMiRNzBNZCdVFkZ9TWoam3Qp19heRpyb2QPEpS4YaSGGDkkkHLV44qCc",
  "key12": "2AQ8EDdWJdgCQ2eKdF86K6eMQFFcYcG4FYDMNSPEGaxjq6kejdMiYdVsu71WeCvpdHn53YnSWYfwTgP8uRxMTip8",
  "key13": "5KyfGHqvcrM38LooxtBuX5hj8WD9evDAAxvrkDsMbjWNBGddhQzQdL6VKJtT9sda8z3op6VhA6DoLJwDdbYb5Rw7",
  "key14": "4ezf1gLY5r49C4SYeD4j7ncSY6NSWYMPbhz8jinPVnA9huuoAjxhWGbzvHcbxuxop3pGMKG9tBz7h8UEJFr5SWt5",
  "key15": "9tq7VfgPCzZgZMRWtdrYJTn394MGk9mkSm2FPB86Pk7ftMovFsYw2xAAMrETT9hcQEe81HBg57F8kifMNjiVEjb",
  "key16": "47KGsdyBxzASNe7iCQBuhaqdzfZwV6mqLtxMzvuugrnp5Zp5Ddy8FhQ7BSLzu2i81tsU9g5BMJGSeyXSmNiyZB3r",
  "key17": "5JDdrX1exdLLJmjUCHYgDfBxuqoUa8BB96MC5yd9AFALUJTDFJsWn6RDZWNrvvKeWuE5FhWdEniFoNXNtm5iPL6N",
  "key18": "3WAPYQnLYu3TAeuQhqJeQAHh3ULLgKVfpKuacRUaAeYBFGs3Dyzx9TfxDGXpJiWJHhBPR9Wy4C3AvTN3rT8ukMvP",
  "key19": "2fbP5aDTevenaLpdByeRav7cZyTB3RFCm5ou9a3F5FnH54BjRAEZwVosaBRxQBgcnuqxfEbw2EvkvMbSj4B2ionU",
  "key20": "HktCGpwn9xDTBNdU3cZLQrm62jJsaB4j9zCkn5rCfnsrGEvGJUepDuVzoRRQE7jVEbRkT9J553ziPYSaaNf28Px",
  "key21": "249vcsyJFpvNFjCEW4yWRer5bHkERgbap4pc5i7eBy9CYntpsbfJ9yrkXfneQont62VcAHgWcPzacemQjcYM39DT",
  "key22": "37gRLkptFV4n4WKVytA4sc5SVuDqawhHQHLK9A4rXYwnYD9PugrJcGuSdjJtCiJ3WEs1aAY9tWkmG2mqk3crMTNd",
  "key23": "2nVLaZuAi8THfAqU5A4Wj6o2nboeTa9FVDnWbi4Z6ShMAyV9x7gBHvLWnYqaKdFwc86JGbvE9TbutLbAMcnEBdN2",
  "key24": "5QbfHby83HxJfn7aua2dZ8LsU8Qe1doih4zEQnhQRTKMDRpwJzv2R2tpzAdauuCQNo9Ym2swjt5dnb1FjmdmPjym",
  "key25": "QwmVW1wvsAGfbjCQJx1aH4QqViaY7GBksBQv2jwE6YSrH4dffGvvWu3BkNYgkPZvhVy3WCNeLSUPTwkXDVigXuS",
  "key26": "LDmYhMyEZTGavvCctmGJWA7xVGsdHzwBDaVigFE9q2ciYaFvjEAXhg8RsdQ7yqnarvQ9HfhhP7mtmFFYMpxSsd9",
  "key27": "4w4TWmGRFMuYwnjJJ1JuBQYYs8XUzKmXRWxrCjE9sxfuRbvEmfdov66L2nNmzYJcSPR5vbvcjW2tmigNDXmAWKqB",
  "key28": "RYVxUSp2V6x8fjHNs5hJpTpqjLRgs7XtPnqw5o5HaD7uLXigPb2QD8US3M5Z8bJBHZwhEYGZSTqcfwExqWc1iAw",
  "key29": "2KwtnqpXi2KZBMrqp1vpppnqdwMqub1jeHj84ssQfaKSkNUNXRbvChs9FoEwUBRTv2jsEtS34EbMfmFMCe7u3YJS",
  "key30": "3zSXeBpo9eE6RGgEGAu5ySUKnBZhhKwBSbDsgDTMffds1tttmd779S4oc8uG731b7y8bjEv5EhCqTTPKyeLfygVK",
  "key31": "PrpkqFcH3uhvYEZ4ERt5sLbFN6P3TX6Cit8yQWXgxCspUenfaFhXb9qEy97i4Un8hKndtEpTUAaqQDWgxPhN4Tx",
  "key32": "4VzPsBZqDpcs1bxqmoxWDEa8yJtRGdEnMvmtrdKB3fMYAiLcgSFAr2BkRAiHADP6Emu5oJEfxVtCTWmvKCbmmZ3q",
  "key33": "4hVaQC5krSTyyN4rfZTPmEViaJXbiDZKCPu2jxZ6CpNbybCsma1kDKbYwWiAL7TfCdYpWCFZs1NkibFMNeoPn4XX",
  "key34": "3seJhD4q887WTGf9oDh5sZSDuyBMYAt85ahmfWzDe9WJromFbTYKAqqr8Zx9r79PWKpPdjoEMo8q2E7ijAoMgZrY",
  "key35": "551AM1eYpimqieTAC3FGN6vEC86P8z2qdRcrYkxiebV19vcfNFHXrjcj1LmsEKQBfrMkgDBvEr2bJByjV7nQdQGo",
  "key36": "51tRiGRhnwYdQvsG8M3iegDfrBmoqRsqTcGNubd3Zz3cbY1pam5nhDB6zKAVawqaUnvu8tmVDa14rxNvxGX19gA6",
  "key37": "4e9FVf11xzPzVdCcikf7JHesfTvx2XcEsxXA6EfT74YNgUUPZNL1bww46yyC2h8ZMjhESY7ewExXGQyBVRSVRTpg",
  "key38": "5sB5aTaJH2p1kBuGxikYCM9VeTUuwzooDNZz1Su6E4cgBW5PiLf82ZNDsbDgk2dwGJfc3zh6fqXpEVjS3H4VXs8x",
  "key39": "3SDzFjbRpt5Cv8v4FehHta3hksNjUvYLJ7tSvPGrwGEF3fUWhXSttbwQpHaSyJhn57xXCK2FnJnBtiJbtErtJLQv",
  "key40": "54w2VQZ2bb8u36zGqhzj8FMC8GkkABb4eFnqR2prFvKCPpMgtaHpYW4bpEz7v47xrYY1uW78dh1L9KPeuXxEGp18",
  "key41": "37wbBDhH5eCzN5FfRQVQZqxkiLqndxMvUB8kTbgR6i4c9gCsPjg2WT12RarPeVND5YcKcfKzicZo8LkRTikTU1B8",
  "key42": "2GcmZAWoRV2Rg2RtfhiA81jpP8AccJDEX2fKGnJ1cPnwdijXUqmi13uXdoUA2KBQ8vnjkZpSoevtrk5aTiQsLyG4",
  "key43": "5kkFiUjhTeXCnw7v66N6XSg5jvdYuKZ1BkPu75BQLN7vzJLMknmUxFJkkDY3tJDeMA5zFx3RvKTEA9cZd5H49DYx",
  "key44": "31yaFwypL5mJLNnSMv2ERXZx8eESeqA5D7UtsEWxYKQ2DS74gkPZMKDnvXJoip9m5jh6jSh4pfmNWt3gbQQ5Fxht",
  "key45": "HkL1P8X6tX37RYoWz9Tc7tyRgmpoP9AY4mB5khZAKDRHaPepLfLXNRy6RrDXpF6fWP1iXZwV766XhqzSVZo9NSo",
  "key46": "2G34xFhwBcXCqoDbM7wdNwDDdv3eQUWFvD9aoWQ6MWequTpZR5dvhqE1rjiVbwVBoFWmH6W8zY7u2FRkwWLeLKgV"
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
