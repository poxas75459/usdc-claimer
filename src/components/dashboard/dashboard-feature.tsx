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
    "5L3UvqL3JF319GnchDnZC99ieUZy3mXXU63PTtb66F4RFyf7LsgeHUibXhMKRqmdhVHjK7uVER8pr1JJShiKXmmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CGpvYc7nWrrDVQh4xJPdQkBoNesxUiU1auN9U9FcAvcgH1Weqg2hkC2EhJKj382gHbCEDpkjXX1tqDKBPZua6nw",
  "key1": "55GNWyGzZqxe6fCaX5GZWn9peAywKkyBdLGpDYtUQuWFvv61bYAgacC5neTzYMCGjG2xMtDvMT2xwwF49hBJQFhq",
  "key2": "5WJnPzBcEzU5gVVKkHk6gRCkYhCUE7qJPWbJA9YVzhiji2pHajUWJ7hnjo2Jt855QizxYBTLq6NrfxyvAGUdxfEE",
  "key3": "2nZXGZtFtmN3oWcA4ivEuEbxREjiiRh5wZbzgFTT3CU4hgnYzJSJCqEK29Vt1HHkwsBsksjZAK5kQ1MNck7EChAd",
  "key4": "2CAPykAmCXDrSo7M4D5o9k3mz7APbBJ9r7GeBBegS45Y7HFGaVpyppGcwLXSvDVY94195XPs3nM1BvsAbUVkvqM1",
  "key5": "zn4woFbzmsiK7K5CCCKMsWsLPa1oXvwESSvzexCYJuEjDFvSk3TeGHMCg6fDdSVubW37rD4tAEfUKppKcRnkXB6",
  "key6": "3pbPeAGaXRDq62k9eZ3Ncw2bnUH9i4gT4VNkzrVyGvhGLkFwREzfBDJVgUX5HzfZS18g8GcdtdomZM5ELYsdmyDC",
  "key7": "4WN3auhCyc9XnNQsy3Y3e5K47uk36k4J1vJ29GPLkqTqdrSdJK8JEB5nCExXY4FckFUpjR68x3WxhZVDxgFuRjL5",
  "key8": "3j8EyqtFseKz9Bps3eGXoiwe92MdNpixqpNmgYgRsuRMHtNXFqSwjPoymH84bSNNhyeAqo2FCuFz7cxmFMpmLBYF",
  "key9": "4NX19J5UnbVEXZaPkGNEywQJRHkGhJpUgLvJG9Pa6hqSMtnN2dbGY9wWEM9qumc8VYfRcE9uWSfVZHZ1fKbz4ksC",
  "key10": "p7A3AFmjuY7YbWMkoBc8D36d3qRPgvTFDEJnYeou5mUpdaPssHydCvH68kmAnymvCb9Amhi1CwFYnw2VfepXXtY",
  "key11": "5b4ksM5ybeqb2jTU54raXnox8gAgs89yJS3aNorEu5yDtfMmzZbTDoYxoj54mqCbDK3aXFRAr2cJFyA7WfYBmfUK",
  "key12": "3jnKm6viFvfvTUqV6k1RyL5GQVQLDJq7B6SSo8oERuWC7gbp1Ei1mSJpAcBoKKw6j7NRmN5QhznZFCQFexK4ocYw",
  "key13": "tD5bKfh3qM4mKZEYoyJBH98XcJZnHKTrYJdL4TD76aLTeereuCfzGmLAHNyV3TFMJZ5i94A1aFQ2KV6kYH1TjKf",
  "key14": "47DoDotNTVe9HGDh4LzisKf43pdZvajoPRSxtzKVfXhwa4QEWcT92bAWRXzBBqq6HpKzMDiayux9EnoZovSdrtDP",
  "key15": "4SKpLqCB8BUVNTtmM2uMkhHL3rBoUjqtzJYgsDQ7SGF9PPvT2wevVCUyJqVM3iLHQxwKqNeq9odYRvJfUNst4SKw",
  "key16": "wzQJkyAUDmKs9Yy9oM3ogRudZEWf72v3NEX1kq1xRkqaw9wFxxGPVvkFQm3j4unRUaZZYGogNF3rTFbvLD1hZs5",
  "key17": "jaUx69hZa5YtVw3NrWiiYg1tDqba2HvRkHZfk5D79LjAo1zVeUaehePPMMK7sWhMTkcUCyx7MZEHqgHDKiW6wak",
  "key18": "27CDoNb8UmGJtgrsJEghs6Cqge3bTEHKFAmnS7BzNs2YyWz7PCQN8jK3bHgLdeMwtTn6hZ4cBRrbEZJ9qmSSX4qH",
  "key19": "4KCx6xT2QXGhQQk9PcjKpCftBsPe763GyfHDRaq9hZ683nmXgLn2gE27RnRm5YMhwfGANp8xnY5vbQ4FG5j5v6on",
  "key20": "oErWJa3g491yZQjMCsadEisTPkyCVt7HCx832NmowtxQhDJEDJqnoFgmz6uA4hQZGYozBnARKNwY1W8phBZ7wJb",
  "key21": "eqbMtwevRccDGivGStDY96cpW2ZqzmzhS7JfmQraJ5GeYQ31eWJDaE2JwKTmS9KLEdfUMge3VqYPvVcnJY1D3pj",
  "key22": "4T74zGBWb1HRPoa5KVpoBjCKNykLjZMr6niHL7yiiDQwVFoNZZtBmxemPxprq89z7swGNy44xFuPuuumX51GR2Qr",
  "key23": "5vHx2bh1kkYoRj6JB5QkUwW4MxNCfGCVaxoZq2fdsLsHEqSNTsKH3JC5fneJm1AZvdmvhLAWKbbiqEeWb1t1QTcm",
  "key24": "3HVrXDAMdmQc1W6DcetnVBgw53iMrhPTCS5eTSBdytPVF3GrAUKv2HBiBxjyLnGioJieq62i12B788iPSUeUPjRV",
  "key25": "2yj8r2kBMT41hd95rYKrKWpky6bWgynAKpTWrXMaPw8jZKmjzmcYa5rsmaTP8ti2ogyC7k3g8hK1rkGbcPXTEhE9",
  "key26": "3hEoFgrL6BaYM39zN97YMkSc3CPixgo2RnTRKvQho9s6gZS34o34D85LvSmsebcc5odA1M8YUnEjeGhvdfjWTcfV",
  "key27": "33LBUm44nKoj5LhPdvWLKggLGZ6nkUz7GtAWX3xrRKX8z5cycgD1pZ1a2T1xRKgu6KPpTnqcmAebzCdRWmP456Gc",
  "key28": "4Cf9V7WV1QWVG5XLFUJRADfeHKGusPjB1xLY8uM4J7mgUWihG3Xn1czMEhKKeAPQWDzoB2cK3ehdzmNzxSMDfEbK",
  "key29": "5NRpoLRSvoq8p9LVW7Sz5b6dC7ZtNAiDW3qWMemEg11WHPuKpBTzgxb5QzkYuoE3uLUHNmRJTGCgYkzDsNS8rwuf",
  "key30": "5iLKWXWyAUKMt3Ck9zno15d1CwdkxtAJRpx418KftAhca7VYHW8iwDo3ncq3JXbboVUGxz7ofxF1nzEatEnR7EjP",
  "key31": "4BwLc8JSYPCvW1hQEDiGC9HxdEpupYRLCBQXrH2awBhWZevwgtbCtFW5uUxKvbmWZRjzi9YMDQ1dA1dNpAmPpwLY",
  "key32": "2ijMDvubbBui5uRhnAFUa6Kf3fzjWx4bCBcZwGVx3ZLFQMhX3QopiRNnyjYU8dHQJTLVEMmBS4Ue6SkTHJX4NzCt",
  "key33": "3yB6GhbChLGPx9tUuNdVEuNtAyzPG8yn5zg4EbRysCcK1rSpjtWM6M6mAPgxdYqbat4mQy1Uq6asUJKtLhQngvSk",
  "key34": "583Bd6RtqHucEcXY8F4HVG3FBYfenyAJzER35MxKRpFsr7rxvHKmYTHUMVYq9KGe1qZdQ96AjqhzDP2uZaKPjNMH",
  "key35": "3zeY69hkvmawY5Rt7jdwkndbQcDnwNwrFj8xZhxSycQj1pcskAKaeYD5d55uDTbANgPKPKuWKX91GEQkLKncXFFj",
  "key36": "rY3obAxwma9uhwTJqsbh973xD6yj8DhkghSmQYr7KNMGBFDvD8r8ciSKpEsXc14FnRovKC4nqmBoYbRhNtGzG8r",
  "key37": "NSbx659JRKPVmxQjz9zwpX6jWLiPhfrTyNmb8AMUJV4E1MVfDdXib3Ydz49DDapXRqSSPxqroU7njeTW1e4EvBs",
  "key38": "3AksbGK6eXWb4mw4UZQ3R9ANJgEBvZY23kvpAXk1yNxJaJ6uWVa3H1eVJXZxpT9ZiAren9DhskNe65vbwEUeUvmY",
  "key39": "4bfQ9P5neNpyyvkWqothpXPdUmQhEjd7DKDAJdrwGAmeeg3VaXJNEvo77xrcYmQUojxCWQowd8BpFqn4xDeZUDE1",
  "key40": "5N1KEYaNeU6WNWiq9CNrWGVY5BWM3nXNB5pn7Y8Zx4PQeHCfVq3qStuS6R8dAAkV4UovFNwkHEBouNeQmH2XuGJv"
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
