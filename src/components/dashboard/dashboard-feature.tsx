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
    "3AsiiSvA3e1r73aEXsqc6SqBFkcxgsj3RdJ4j9vKmGXn7wkLMfxAgHVr7bBsjyHuRegykwDUMutY5JLGJGtWQUjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBu51kk4ibRDgQoVWio39Rf1KZFFgXeEAmnAzG2wXzMBuupTxepxszxacomqmbVMYHVDXQXjoV3C9PYACJ1wu1z",
  "key1": "4C2Ddb8ATEThU9wpkWSSTqvSBNQoUPnuiRc2uEH1FU8KuEwjXyWqrnGx6GXkRzbGTY2VygmH4bKGoctERwAkUVub",
  "key2": "4m77wVM92xjA5WETJ9yrXJzRAkuSuwwT3p1NwRK4imufqjjXxw27Et6o5ycYFzauGLuzZzjpcYiPUArxybk8DgHJ",
  "key3": "5pdwuUj2asdSmYbv2sNe3PzEjxwtmWx7oMtYBw8B6N4hKzsRX5GxweFvyaY5sNcVvfPPyWp4fB9jWFqwmy5JC66W",
  "key4": "582U8mB3RVZNwyo6WNxBxmjDBHoYVVRXyScfiAE6SPNK36FqtLfHrbKsF6EqmwFzwarDo43NyBH8kyoMAfcWwK5f",
  "key5": "zJuDhttSE1QxCidy3kgZFz1wLwRJ8BJEBbgWiuPr4riB78mXnfUHZPWybjYdEj9a1AptHRG1vV75FzgzDhDKiHA",
  "key6": "HyJLgfiv7aAsqgKDXLLBz8UHFBjxYtpaDxkebF5hp6Gadgw7YCqMaL3b1dJYmwEa5M5sWw2DnPyT6i7fnTBxFCX",
  "key7": "5B9BoM6iDA3SowVEsmXN4Dj6c1GkaGhLjfzYZk7tTBRK56k6iTbvPncABoS2kRLQGqEdHbekUu7Vpw6soHbGopLN",
  "key8": "5o9qt3DMxf6N57TW5KRVuvDSKVCZ41JU4uZUeQ11ffNmxt5RioTLNmLHQEYLYHg8YjSqYJPnewgBAHjsWGMyapp",
  "key9": "214CogUgb5fuoaAJDUZ8FKvP7U61hp47SnebKyCb1JWZ5DpSpKP6RwXFJXvqacaDn5qcXZvMbR4pNC16SrnrxPn5",
  "key10": "4wh2x1fKxzyZeM8oafT7HU28rpuHCbyQvATqPqvFofHb6fEYKSSaD31LMT6gA3oNMPEUa1GSugEzZaXUU8YK7S2D",
  "key11": "2174LhHEkYysfQJgeufex9W5btWrqBPKwTLPVWTz6M1JhetXkLVWetK8Wm28a9ZgrsUVyqvkaGBzMLhXEKUuHLZN",
  "key12": "5PUyf1yjFzx5K8Bt2X2Hnpd5hvMtk9yDqkhXyyS1H4aHhkSKFVJCr8BWJUuL5yEQsVsvGmyXSdqE6m2hf3Ag8HRs",
  "key13": "34he5UahYY9DszfXm8BGzzK3WEcSHwqMzocFvz5p1aeXPJnaioPtuKTxrzgQgA4afWAa3PFUxM7pJjKTNWFKyRsA",
  "key14": "b77Ea5WwPt42BXV4sC6PHRaG2f9pUwQXFBVB7SEgAJhPVbwhLov9YdyifsbEKoXig1hs8Ht3j2YEGycKajSxDpR",
  "key15": "qUkJtBehxwLXFRHeUHZfkjzY9wt4q91MjGxSBMcgMYN8GEi4ESS2KwAtaQxuCR3amvmAV28cNJb9SsXLr4tpcWg",
  "key16": "5m6XvfMPHUsUHrY1ALErqZfgKTf6uPw86gfJ4Y12XRQfFbYtxtr6iQ4LHm74jwYP9U5BQuNtDMPGzLxzpaCb4ftS",
  "key17": "24cFUnbe3UbtJiD3Dt8uSAKV2M2Uz9Hi6CH5AYe6jbLzZqJ14Am1fXL6Sps3muFUUxTKdF8SE1nrFNbHg5V9jZtm",
  "key18": "3Jm5aTvF73d4E7NEAtNDdzR1YcDjvyaZage9vLxmV8pbdpwtjmVYTWkb4YkHMKfJgWKv4pC4JRfLdxXPAVMPZGaq",
  "key19": "3Jme4J5oU2CqFpaLg1L7FiyK9tXeHRM3UgtW6Widxooyhb3sxxtF6rNfUbr4EPj5YjqbJgKNS9cGaYwRBkXXhLCF",
  "key20": "5vd8hUcpFMxxrAHjhYPvU6MHiLy7NuzpwYQbVDBLtAfMNN7vPPhN8WGSL72RtoTmgAVJdFcjpgUjKPFyv778zZhk",
  "key21": "3DKWsb9HpQBehrormxPjGVs1j3HtpEPVqNRWCQHaU4rSzp2VqFQpVaVKZAg1v6cj9aPBM4dXfiGVvHo7sMJU1Mhj",
  "key22": "4mNNGJvdrUwP9wLfuzoAFWGQMPp3yxK1YimeUu4SXitdaCxkvNzmYbpdhqRQ3yhkV6kvDsc2Ca5irnVeWzABMqt",
  "key23": "59f1VAXeUcy6TLrZ2HhS9DYTQyBZvWg6J3cDqagouz5EoyEUwRVqp8V1o9db2Y74L5Wnh8EdCNH3ZTnAXb3WRSWd",
  "key24": "3GsQF6YraHpkG4cysrC8Pbp7K5kbyZ5fZPoA87Nh1kF3uaGooDkQMVc7QVTwU7bnfZLtmSJqL7CBxNPd1KHrYa7h",
  "key25": "4juzQ9oUG8HZMdddTb5prt9tasFeQfJ7Sr4F8fupqrh8HQSV4ji4QUsC4TbEswUCFKXU5VCnLwYJo7C4iv9RSvyM",
  "key26": "3ywsq2zoaJ2irbYjrVNwKCgjskUi3Qa3vmXy5q14TBax1frfKQGt98k1WnRj4RwVvgnBzM2zgojv7jKtGuQzJspF",
  "key27": "3EP4azGB86CaSFHPc4LeVYtMyxus6kRUCebKqhiUm7ddgqB91KLkpQD92LLjEyHK2hyVi7kpTYyWspFzonn7K3PJ",
  "key28": "3eazJCRXGixWgphBtU2CGM92QoLEHyHvrZwovbLMYVABJM8bKMY4Pwhht43F6gzxoSSpZ11yaTvnPWymbs11vCNa",
  "key29": "3S4CYn7iT3YfpAENU7CZoLobUamzU2KzSPKBGpfvs7FUhH3KcgNArq9ZYt3rxtGR8wCeGGLS9LyLKZ7zXxa9dAzf",
  "key30": "3MjYfSHAjW3qBQiDiazmffxivr15D78Qbwj4K9p7463FhQvoXULKfL2qDMy6hebquK9yj1sVkuxFZA8qL6RC85c1",
  "key31": "ND73uYRh7ifQD4fT49ZeWkcZVsNMh9sQFYRBtwjKNzEaoRh5mfswPTNcqfUhDS5uiTAvHv5HvKu9nk6bzFEpVRA",
  "key32": "4X4Qnui31vh8p4vL3hbmi89u3WvXYx55q4nwqv1T66JYZnF1aXnk7Qd7EKR9G85wjbayNXUWVTYdGNq17gph8NJF",
  "key33": "2pGKstxY7FDjXVRprXxJJu3gcKUWMMbWoMCW7vand1bU3fqVX6JUAsSA4RzvzwQTGv1oCzxNsVSuZKyeufeh5h4W",
  "key34": "4oZ2Zfcpq9zCKSz8Xo4ydPgPQJeqAM9Z8DGdzHEHNNNZDJ4QhhffTErnzQGn1B4uyTefqKTqFnvfzWDRqn4im4d1",
  "key35": "4fxwqBZmhLW5jb32axQzeJdMXn57rXeFAVbLFfzAYsg2iGojuxqQRn77rJajr7mfgXKfmDoeeHA6bK6zN3hZ8TUa",
  "key36": "5tx1RMZH581VtAXWF3UXi6U8m7YNF153PLUiVzLe91WkCz2kVQg9PhGgTUu3vwr2s5oDEVEbimcp9X1CLjmmgZEU",
  "key37": "5GgG4uPz7JigLqGx5ab1epDhquZpqMrDcJ8E69JzeqASSFjJQQRkZ88jmfe5ta4Kp8pvFKnC6GevMeJ1QnvXQCc7",
  "key38": "BUoHbqragJsLiMxsn4ojkwSFQEUYwUn2eAy7Vo2QcJwrJfwYbDFzitnoUZNKN1tiaKEzEXMBbvQ2i1Qqsj8jVab",
  "key39": "48oAcou4NRxPYrWcVCbZDk5P2nRe8TVwkLwm5QXURWepwNJVRcZgry8dxLrQMg1LWJEszopzaMJ1spvPqNHT2idk",
  "key40": "525wjQB3GGQVA4Qv7Wgd1f6kLpTousCXVZzGA4o6jRwqt78hFqMbvdMjtocTTwRvuVSmYtpyJHP3UKeE6ttM2dbA",
  "key41": "PZ1rdiNfHLFTpPmXXQYBUAdVefvuGVSXAk885DXARCSdVPR4urQCW5Fo7iQgM4z9beSfSG8GbPrt3jsBBB86vnW",
  "key42": "67f4oKUcrqyPss3MfjyTeoCz2X4ZoLAp8gPBfJtHNUnNcXwNHbPykPENFGCjLVCzerxMU77gjVUroooTkNDdmmM8",
  "key43": "MDpfFVZ6r1z3StYTNCyrZ69QYQKfH5mUb4B1BLEAA2ui3pcM1PjSs1nQnNYQ8bK4b1Y9L5QpWVpytVawEZgaywN",
  "key44": "42AW6q7rmqnurRQUGd5wRDGTxTB7vgTvhWEZDDgZi6K7FPXwPtrKrddNvhMJYNyxWGgjPUmhu6cJmZ6rd2Tm4zaJ",
  "key45": "456wgxFcMc55M9suaH7y8Ld4PWLxsRKawG7ikH82zQ19fmJZ1yqToHMrDCscepvNoyke46VmCbwS52FbQ81W7Sgf",
  "key46": "2FYmjHXnaXtgTyzTmA1tBzVERBWdTEY1m5xRoiJnKayz4q6Pu2zuUxyYnWQ2XWZXiU7k7h43oT54D8NwUEcqWzZn",
  "key47": "4vDMVbpmbDoCViEZbUukW7QFx941i2ie8LmG3juscrkjqVwJk1KcTVkuxZf7GBqzgzywV43hziYmrjRTpBCKLDbL"
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
