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
    "3tUtzJjwcCuKw4ivPpRQrbjzgZGsZaRaVVYGviiQFtgNTd6JM1HbgnsAsBzKdfARWJAhLhDsvpTr6DagFdBMiWXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vd3npvqEv9FTLgE5QGxVk1Cd8ibZd8bAvu1nxVLTivjSa9yMHvWdmGwcDMbeErcYD6E3brxTK6oerrnRSeg4rZE",
  "key1": "3pKWE6VQkhR2kr1YRuShsGzgqyscRnApux332Lx6gMDBtiwbUcPj4wCxG2HZ9xAmeRFSAmhSjZjimwXRXWZnAqRB",
  "key2": "4WkQ7n84roNnJRQcxRjEu1e26TbFgj29JK4nSzQpJhtiDqg1xxAmDzmh7nUTrpcjPGgJWM3Xmhb1qyxyuzakWUpw",
  "key3": "39F7v1mp4aAUbXRGSdfct4Yk4bPmNFZHQ3sCr2otzAn9z3yWydCHvPRk1Rof57go1A4M3fTZTqqMq5NWAaZD9gxx",
  "key4": "4hRZxUnsdp5m3Xm6s3p6eUQ5GyueRFwUsYiH2VS4YYgdUwofboQsbHr4NKVW4JnmxcRn8k53kHkcNs3Nk8hyMKPa",
  "key5": "2XqSAvojgFyB2wDgSTUZirhqwvCZmCJiw3ihcCLLkutTWyGVFFDcGxSxRPvpzn3ewicbNn8LJU8GSdiLXKMGvyeu",
  "key6": "2AP4dceghJf3VSSjHKtgm4r7f47JkcaDh5d1KpohFqdrU3LdPzwXq1vkUDv57BAnCoM7yT2WDunWsv6P8WULMGWu",
  "key7": "4gWtUjoupJrWCzgR6hTo9cXQERFfLobXms181SLqmvwCVDUS3PLXfzi8VzXwMLo9MvDLP44g3y3tDnPynuEQ2zte",
  "key8": "66d432q5LpGFCiNZJmtwu8Jv5nYRa6LqXLgD9P4H5Wcaq5FZFjoLBHGAJrgzJsXYD8T71Gw7xxoV2CgFFNArgvH9",
  "key9": "4vRByKQjCks3b4Eg6p8LVYwLuxoDJk8a7tR2W7DQCqPwq7rCTY6fbthJCKio3zzKsezzWxtPmhz372AoQWCMcsuD",
  "key10": "5T1rctAnnaq6xXCVSafFtqFuM3BG6ePh4L1Romf9NKPQECFtk8yKm6mNrEBDZJWPsW1tM8R7ztnAuVwvZ9XicmpM",
  "key11": "37iQL4Rf41pzFLbbpevm7ra9ektfP3kxt86ZwQufs3Zhi1NLEudaRozovVQJzDzDH4jMcatYAajapT1URb8QYdjc",
  "key12": "4ciHs8iDgxGR5N6SYsq1EQ4ERzxbLRYFuG1qJHj8zCeQUUDKqY7Z459SzWi4e8tCJqcnjsWJzLTP27wxd8Ek4fWN",
  "key13": "3CsKAsknq23CbdCZwFg5enxphGsNXRwvUcSQ79PKjcksFyi1qonATpfB2cA2akq9um2tFe679SAhMaRZHQaJbGX8",
  "key14": "2ebRtbhMSP9ZzA8GjwDKHavm7o6c3rgkx24QucrG3jcfBjd5boPDfpdkd8ZhxPQrnsfLzNz6oKaDcyYRr3dMH7Ro",
  "key15": "2JvWKVU3iCpj9Bvz3pRSY6diiWF8qRED8muaBm9WFV4CqEkhoQMXnVn3rPr8j3bfLwQNBAiS54ijPp2YYFJFB5Gt",
  "key16": "3PefV9ydeJKACxJPu6Hyud2Wm1ALDUChvAems29pbWYiMxBNRHGDjM2Lkm5gi9svLVchn8WG4DY4P9aRsuLpzRS",
  "key17": "McdyyPYR9RCeHhcb8eKGYQPBWu2x2iQpRi1JUwfWrDnF1pqCuTm75HcUDBG4m9khhRbw6GNy64ibLdmZbQiq6DG",
  "key18": "3yjaXsmaZVobNK1yfYpRyDxW777oeatUmsX6G3bkHzSfawq88m8TUha7guwjPYTuS2xoMtUwCZNoALNfbN2t4VJU",
  "key19": "4ZdBQ4FtHPiJFwz2M6Bgv6wCbQNx1UAHLFZziLTMS7mi9ThKwAUFgKVDmLv7tNjBN1b9XtbfTPvdt4bQPKFKnGWe",
  "key20": "2BdLy3DJCxt1Q8pUZnuY2ahef9c519vYaiK4DCkx5eb8r1LuHzkS1ghyroG8rACbMwRXfyqZ5Rfnu6KUXJrK9kUE",
  "key21": "YrBvH7Zj9ZZ7RvPv6B7U7AVBFrSBUJbL7BWHMU9CYrxqHkYHWijRn57yTVL2SVJRZmTFKgqJjNgExjgaCiEUAyv",
  "key22": "34wzee8Et23zf68kJW7y3YUCy8oj1q9nPkhyMcDrUYqeHCqc7fda7ie2nAfAEVBry7PfPfSBMV8AirgQA5ZnUhWc",
  "key23": "2abdcd8145eqPS7pqM244SCfrH1aix2uFjQEZ3hFztqVfECkio9KKyD6K1bxhYK4fUma9z79HTyv3rTGFMjmY3C9",
  "key24": "JKBZN7SyrueYDFNHpfrd1ieG6bHtgJh7AAEdnyLD4c2nqtGrRzqWQNANLzK2wVZELCDmwWms8Mudg4tzmxUtCCF",
  "key25": "3jHbA2BM1WVuKxoGdmAo2JteaYW1TBGsCnqibgs86bGjqx4fvpzni8qmVzG6Azx28JWcZiLnYbPS5gAgeuvDPeFH",
  "key26": "4BrzNEz9QfARtJDvtCqpzbfRjrDraDMJioT3ZaqCZSK2oRqFWQYrMeZB1zGWZQdjYWNsZbpvLuxKKH8eQEBeS5T3",
  "key27": "Je3KKLJgPVi2eSxJ3SAsLfC8dR9a8hLRUS7j1keL6pivdEXJXkR8zoYjPq8q49m5L2fCWFQGg8kfg3sF1FYf69P",
  "key28": "3tywykHJWb9iXhtRn4hBnYKkm2Ns2cX1UZ1UY7stWnKsXUboa7oXzbdDanXRGVC7n57fUA2hz88RU31jXHc4hNiB",
  "key29": "5B2SxA13xnLoYjX7t2zsWEWr5QZC6ThGzmPg4jbwbACADVN5hScWv8jh8o4sLrxQFP9rtb578ZbNmMhdqzu7zUzn"
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
