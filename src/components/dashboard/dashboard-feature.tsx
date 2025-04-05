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
    "2Z2qgedw48k7ypx6ikWuE3Zkr2yNHsGiXbkT6bssWsoNYZhAxf8Mq9yYDaEbJ4H3YPEdP8DextJE7A6scVQD2Hcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8hnGTYd72fWXDob2z3wrv9fYk6t6WvRe9EyuXQBjUtaRKn1EuxraB6eEHUoYMQNEKcPLazc5QwthqL8C4TFJ8D",
  "key1": "2hDdFfWXV3uj3Y8RPmPYwikJHoMSKP6YKz3zVtQZb3o95wjrAqWjZmNSM1R2ypy3eroNLbMYx1wHKTFvZPCzDjpZ",
  "key2": "58jMM6fmzvYDXF29KQGwAEq14Q7NHkuFAgTsy5WgUeUBNmh6PtpTZdPUEMAjHVk3NzmwuC1KyqbqQ2NHqfhJVtV3",
  "key3": "R5Wi659Sbk55q4zKJ6YHtksEwbvTwPdJhS7NSYSVe7y1L7P4qPGfaQBNWE3hKGpkE1NczUbXn5sV6T9Sa25ENWQ",
  "key4": "5hQKVBq34b1p8rkG4uojEgf5CSVmDX6YW4TvFRswcdp8Te9yZyWvLPTpbBmK9zFvAirdLwASNUUDZe4JXdvRRWbb",
  "key5": "4FrfNivFc87o3muXvAm3dQQkcmNie5aN9kyjfRS2jVmigUDXWJhsKWhHjuJSb5bgrdamSsLPwKQ3VL13s1CBebUc",
  "key6": "4uTVWAF2TnzFQBcM8q46zfi2hWHEcRxh2sMYS5SrGVykQqebMnwzp6HTr9LWNF1wHn7fqsimtNH7s8oGdMUSNq6H",
  "key7": "5kPbX8TwQH6okhqBmAkZHLkXJGjcBSUieq2DYh2Z6EzTTnLhw13i9CXPFjSrRnZpoR4gmJQdDpmfLBEseZPV5TWV",
  "key8": "3pqFEmZBzMyffRoPz1xVMDW4UxkXhcXFHLUQA8gW1XHVEyvtcSdz4vgE3JXBEmmX6AJRQBXVt5D2sNeJn6WuB8DR",
  "key9": "4FgLt5zUyjH7gWvAC6P17EJQw4DAFJjbmFdxhH4NKDGzz4awgmVh4myDr6uHFBbtGmVPyZVuGyrPAGkMXb1pxZ4k",
  "key10": "piJyELjfNQLZ1QBnwXdBQu2b5vji6gLqJM9kTavMdj2iT65L5Pf39EQeSss1VYyE6JaKPmaCYMa89EQGRPc3ejY",
  "key11": "5NYZWcNnXGomn2f3x3yPZVqLHsmjBry9xpXsHWU2B5JWQdUaBF1QujyzjdWZjycrTvWKJpVsri3RyMksitGcvigZ",
  "key12": "5AX6JPcDh6dwsGh8DRXHTHjYcQ82QKf1tfiyTqH4YPrN48vkd8dcvkdJ4BnqL4XX5TXB6fR2U4NFKNehsTG3NDhF",
  "key13": "4pHbDon5xgBXt5zgZLnmB7eq9ra8bgfooh2NgscWoGiodz3r8dSAzFmNrxHzRJKuHivuf2DgWq7R2TkcW85DC6kj",
  "key14": "5Nk4hDQAZZ71ajQd3JFC937VLyuAMSMyhXSCossNEbZS38ZF5BwfPbiuGPgQMahQKcjo5Y1vCPKdP4gFfRZYTGTj",
  "key15": "5mpEAwfQCkcnhsjKchrQxpxZoJbLzUZWSnrxGB2Lv7A3NgH7pcvsDpfbCisYP4knkoujcwPDRrLyfeeEHb6bjsu4",
  "key16": "4qvN8KLo3mbYB45p71apaFPp9NZTMFWE7XupjNyxjZTc3QxJBZNur7mUTsLmMBEwGPifkxYyN8hxKX2XPf8dxxpq",
  "key17": "3V3unmb13o9oa3zsDThTjMhnDYcrYTwBu4P5NtiPrGk9YCzv8oa3kpAEoF5dyAUU6TpFiLcjokx8Zqfk3GvKEbH4",
  "key18": "5hmV7C19nvwGauDx6VrSJpMFxUUjk3xqSpWcbMxEH8adsYLiNRNoi2eY7yJt8SYhRfbC8cYrkYyqeTetEF21xPpt",
  "key19": "43vT9xhNKhDLQGMk1RREBjjBgApvbC1iBPuZrayDsLd2bt356pq3a2yveZSCDeBQVA7iddz7uPBCdtKcqTDT1Dev",
  "key20": "32fprZNFwTkL411e67gZ8UJwr1eAoRDjUF21R113dn4oRewhM2CxjnMurq5w2iB4s2Q27a16iKdpvL4j38rbkqJD",
  "key21": "u8AdwCth66DmQae9BUqSW7tMXstHp3uikSpEeagsDhhN49VN2oK6ESm2FT3rh3EiLwJLzJjxtSY4DVRmsWNDNmH",
  "key22": "54EAjZWcz3FjqV2SMgfgmAwMAZyU8YkqCTtRtHP25HzwymMdcRvpmcSX9W8Ei9z2Vm4QDC5e3eSdeuZAEzaT9duP",
  "key23": "5dtY5GeEM3afaNVeDBgLpNu1FBpBRN9Hx8EGmZebN6nEbPKFFnMt9jbm1jVi9qUkReq1bPztjoxiAXvo6ggE3qLW",
  "key24": "G7wAqGPvDDYiaHXzy81PuUY7zonZCWsccm7Lc9dD71uob1kNPUErqB6EAFXmirLxrnZZ2d2K7zehG8XxDFCZ1gw",
  "key25": "5ZNyzb4dSqSiouCP6o8bcmr2V4NLKukvThU3Tcmhd8gV4fooWpWk19cEXvzmcjKQQReggic3uxAK8meRtsWwP1qu",
  "key26": "3XrRd1o79veFWz8u6pwBaQLqvy2hkcggtDk86V3ADc9sGhMP9GWWqj33WTb7fF3sU18Jzvb8MhAwQ2mUNmnbqZup",
  "key27": "52tJ8oGfbSKrSrvxQrb22KckPq3TkNF9WkuQaB6Bcg9J9nhLfvP8cL5FyGkksiWgjPz311UtpjdhCGNFY4SggrrS",
  "key28": "3YyK9ZqJEEfhK59Y1FZkU9dKLhr9CkbGkYVtZ8jAED3ukaBQjdqvs1K8derESyuhpqDix7TdJ3Laijmj3Nq5iQAY",
  "key29": "2x59XMeYjVQdVV6F5XqJmuPpdw5zY9D8KT4fWmzhzbMr41BY4Mcw7bYxieDtRQ9c4DFUGLJdQXKLGN33vjHpdu8t",
  "key30": "3j6LYGcsqAef34SjAtkTMsjSWrtNqkagfwBzyqJ7xCfWxB55V3BCc5Wh9CH3WRkLyjTTP4CHA893ysbG3PQ5qoWh",
  "key31": "2J7GmS2DUzv25kVsukTcdBYy7ANBE7oRpQF2d1Lb7nAsZgGoxTEKjM7HdmZmEC5x9KxpPjwqZNHx7F78TQn8GuQo",
  "key32": "4TBWJE1A7MZ6qzGCb97C3zaMiJX2q5gqTtiTyM1LnAURMSaWVvTYyaZ7pCgR18aykCfAh5WMwZ4bokenh6Lnm5ob",
  "key33": "n8WsJL3pVFaZZKxEzLvYTANWALxZi3NdnJwDj5qCtR25zHzEeFtdgDvSEn2KPSiX9KvZ2fDToVFi9e3mwE3hW2g",
  "key34": "4TWAofFTM7GqoP7ae3zg9s59svWBQfJAJBzU9X3tNTYfFWPb8yGeFna367eLGeetyypnV8vHs1ptu4LZHra6tEr8",
  "key35": "5RJSbJWgDEhnhVA8CCAqxWgZTzsjWftP3yVpowU7aGZdZFLB63GbgE19MR2RjmQZqFcyQKK6T9hEtuWkACvu6AoG",
  "key36": "53CZfKSABWcNBKnHR7csDwuH8jhQ4bCaZNgtPv9hS4dyP635nX9gukVYsradboN6vVk2rSK4gpPBuzW8jQtpYasc",
  "key37": "2xgVJbuvZmNY1KLS89eKUBJawxFZvKb1dXsSfmRTdqA2aCJHiR641Cz4vDEwtkcKvJW9bgFD8iWVtgy4mrwDYhna"
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
