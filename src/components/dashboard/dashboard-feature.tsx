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
    "3ruTkaw8RyUPPApQPkuzh63xcX82gcYrXsFVjRPp1vT7svNGZHPArcKjSieyJkMnCH3yF4TkdfLD9efq525WtFsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHNXCN2yWQog7c73aQdk4Pv7JxcWbCz6xb3NtfUHyRgcfQVhMe4gYJupMWDyw4kTWoDpUP2skGiojhsqYKF6kQy",
  "key1": "5PHD6n8DDWxhWBfdZpQizu1MD7X9EVeHV5ftC2qHcVfK8fMzi6PNDPXFuCsmHhgfkgVHs7Egehyus6jcDY6Xs3Xo",
  "key2": "3mZgqx1HdtXLVoCmmDMAx2KjwE4DAqR6WxXt4hr1snVS56kfqRDhRQtTayrNLXF7bbvpsqREywUoyiJtLdQcuYt2",
  "key3": "2EHJ4iZ69dx2tnJc7NRbGFKFPUzaHEoHeuhG4wYvUcD78iQqQyrQDe5uHWKpr3YrrTuZYwEaNkBBouphLBzeousC",
  "key4": "FR6FJ3RxaAQNEzs9PBMtWR59HvXsDadSKyaxzg9xEEtMsJuQW5nxkrrPcRbams3q4thQg9vAannCVy4JYLbryxA",
  "key5": "4Zk2uwycdgeE9Mv5RpKBNmaPQ5q33QTG1nSxBYGXgDWusuLFMdFrn7ivQpB3qFjbNUcsx5QDje2QE4sEkLAmmvPp",
  "key6": "4XcMXX1qMjAcnHGZ6gryV8zLAq5mfCpkiAd8uWumvJfsPyQNqDvhp34PC4npoDna5ADxjrp53dcfYqJuUgqGhdpv",
  "key7": "2wQJvsq6DPXZtKk7NtLTffeyGSwh6hyJuxqitfd7n6UPJ162cC7pMXNjxXTFHQPzedm2qh7Bvz5Y5oMr7Z1ZFcY9",
  "key8": "61bHALXznNY9LxhR7D3m4qZV5yCjr7UZeMczQsWUziTxWYbrp6X2HjmKKUkmKxAHYTSJjLbMEyK75yMMpxhoF5hK",
  "key9": "UpcfgKAZAxyQxg3rNuoQyPFKh3SYDu7wcXmrJEjYXK6TaRGfoeUp5VHDks56gzsU8BhjXpRNwj3t3hUiWzJU3J5",
  "key10": "QmC9hCRssUZ6mNXKoHcavswmiA6b9oiAZThjWGSoeTJMoqjjJbYADNkeF7sFyesvb5TXvQ6brsbb3D61riTwHeH",
  "key11": "3MmxnoPSgAYHyzp8uytFHLxVy8ZzLbmt6fCxs6ArgYz1gahhoC4RCniQRVeXZTJGS7UWw8d5aXevvQpwpjAH9yVP",
  "key12": "3vMUQSRnAKQskMCSBAUU42i2k7UJC5M7STS8AhP8joakGKbJNgGJsz1BNn7mcabcAZeTr1XeqGda1bhf9oZNvq3B",
  "key13": "5XNCz9topFB8GZBhMBREFipvnuvbMbXQkQtiG1f54MKffVQWb3dQigwokujKAkSHxL5e8Ve6AEVjpDQKx49fDfgS",
  "key14": "35XTdQk1ovaBb5b3JqKt3nQ6RcpoM2TbpS5NcMBWp9fJVWKFPDc1sVUyJ277JrBUHZ23gmf46s75kwweDCeM6Y2W",
  "key15": "5TxsMUXdbqw53Qg5LuYmMGJh5v5Pds9Sw6ASe7SCszAoAsAqcqN4xnxTTUkCYztBu32k9ZHYJBe7b7XVeqLZwXkc",
  "key16": "4EhHsevqabYaMW2ea2f8WFqZbMtqhGZdM227rQFifjpz1zFtFUkD6ARyTzdSfiehSh48JDYbwdP5eEKwzpD8iNep",
  "key17": "2Ti2U4UaBK4UwHxC7QHro25ikbKJCkMKVytvEcjFNaG2aXTW6HqDZHdeQ1G7MJ61fvSZ6R7aiQQYAVKNmct4TavS",
  "key18": "3kAqP66nG4sWJnvhCfJ4pqbJXqStnsYN7bbW4RyAiK4VrNfvwH7rnyUWVraGhXyMP8JCdkandnFC9zSz58Lv2X1D",
  "key19": "2bvtj3qZfezRypTKkSveZ8Y8gWpc7LJKqRJpwBuEuBYkXoZHzWQSj2VxLdgMN7tRShFtcvJQNs8uvrbcDi5S1APM",
  "key20": "23F6nUkggvoDHh37BLWtQmFMaNpBFjMiyPZJksw7ZbqV97iLSehWyronqpwFoomp1D1M1XgXXBS8hKCcb2B2ahuR",
  "key21": "4VhzL5UJfHJCwxDudmkMvhdZra7UPcEGxcxGRAKu7qPeEArTww75tM4Z6VUcLSvEeenFqnQFqj1kSTmfXfgDK3EQ",
  "key22": "5xpWe5Uu76GoVa2idt2N7spHps7tZMriwznLBrifGk5LE7qV396Ky8wXdnyBeZeYndPbBzCdKQkVWBtjtAvzjtTk",
  "key23": "xh4TuqjHV5iniNwUGEkLLuBQNayWAvcgos3TGm5H4rCPhYNAug9sxQ2Un9nj3spLpVHWGgze6hFsvzjvKxVCeAK",
  "key24": "4UUvMBCsuCPtMMgKXBZyqMTtinuakcouT5MWXGzTxvrPhubmWCkxphbU6gd2G32GYB9f8Xf7QnrrS5iPFNy8YFZe",
  "key25": "4L3rCdPAca9867yPrS6JkCvbrrZCk8yU7UgqLqMA7juULG3dw5dJTkmwgov1fWBKS5Vf5TqoAyH7LdVgLJBLtiT8",
  "key26": "ewuGZvnYqRkNrrWgKjGV1GVVA1yexikvg2hyDMkJJ5sWM24N1PjaHFtVehsfrQHwXcPNaXtbdxQ15FjWVr7MWjJ",
  "key27": "eepd3G2usoq6oBux1oEEKnF3QjcxRpTaENekpQqXSEKY6YriCxfpyebumAH19nRDNGFd39879Wm5vRW6P7J6qDn",
  "key28": "61U47qgkNcqaLmic82ykK5XwEsMKbmfRAqeio6Mr7koAqUiTQ431qKqsd3zydzmwh5ffUikzovG5SP6fZS5k3BkN",
  "key29": "3b9VdibYp5HD2swBPNUia7dsG88QBRBSenezRujfLyqLDmcU5Sjh76FzvdFbfx4mRPuRKdSKsGTDGtfB8dHxuuQ8",
  "key30": "5zA6DjHydmdvkhuwW4QnFGEPGiSoH7Axn41J5kidoGM6T3xkWUNozuomhzqxV7v9KwcyARTzBkMjjC3cwgkE4kGs",
  "key31": "4Ri1wz6rns4tQpXvF4wucTnF2WJjkG89zr9T2iUVudCkgNKXLjmPMXADycVLhxJqnKyeroBDDUs5vJnmSAiCKaNK",
  "key32": "4myfrpqYMsbfpn1vav7Zq6YwizQX5e3NUUBNaQKQAqH4gox2sCEWcAVQW8FTPc9hNy3EBD8WYE78N9BKhxpYSQNp",
  "key33": "4pBWVAzcgXYWg4DybkhZAgdkDq5NUQaheuxfvDey8GBHaGXibLY9UJG9pwfa6K82nofjWPsHGyoDx2QAQj6nFRM1",
  "key34": "5CpKA1mQLAriaY4UCy3xqAR2AGuknk2CfzaLJnaTk6f7En9L8GoQ9CV5StvgdRJ8n132r1FhLRagUgRbuDzgZKjT",
  "key35": "4AxPG1wR9Z3oVrgJn9JrLfEupUYKruosoYSit4hFw4yyzW69tYVcyDB3seFNUReSEzVxdFyw7y6DwFsoP4Pu5kRj",
  "key36": "5PeXoj45YS6b8gdUCnQk378xB6VXK6LYhQhoWAZsbm4bV4GoF9pcft4k6kbsnKvXCovMhkf6dpcgCytxCqr6NKhj",
  "key37": "h7kXSrALHGMRBVzAQD9akjovrxGrGGTHpnf6m4wPuYAyb1gwzxDrN2AQLMPZfvrGZXWm3RxKZA5UdAKfhnZdBK8",
  "key38": "4gPnAmY9LsTjizqr1JedAcFXyu8BqbUSthJgM1YFAQAv421MvnyjCXit9Zsvh3Mta1FrJSQjaF7ZP4a73iWsjyb4"
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
