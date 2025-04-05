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
    "5qrd72fPhsvyvJwtafm6T9spjoJiyMcHoefamrA7YtXb3j8yh3em9huVTVW8VDEPwoxppfkehkNHyzVaPaG3LEtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fakpuHHSFfJKyrQ118Bk18SaKQnRRsNA6EMTzrzRtwoxS3svSUuW55Bxhis8Gd7Mhc8dQFG3xDsLAKH35pifPh1",
  "key1": "61nNdnV8dTLWk3tDQfhYvfb5oTCe2XFbZX5NGuVNe1BZ9Gv7r2BAgPQBB2Y9C4JQ9fZURNbBwWUWah1QMx1KgY8m",
  "key2": "41bsevTKNkZ5jtPLpVd7ugx4ExzwYRYUiLcttNKMWhSVSjAVe96W2upBAu58VcC141eCi7kq6WrxzpGAmfpEzj52",
  "key3": "4eqnVYzGpqm7H5WFQEJFStL1grsZGbC4TMfjC43s7PLq9Y3p8EoX5KZfkP9q6JF3npJN1mM9TFUyWbLW631rDtww",
  "key4": "36sqTcrEdMnGkYNez1Eb7FHdrQtRreVFV9X1BkxBZcujNPWdAkxYEeoStkTbDnfu3oiEJ8BbphgoxHa4iKHe5hx6",
  "key5": "53vmE2dqNFiPi9p1qqXxdCvpBgxaHENZF4ZTxMHGT8BMaftkocYA28nPqJUzo97ZNQoLFVtZAXZ1JdpzzA846PrT",
  "key6": "d915UykCBEQoRFTgqN2FgSJu8wG13XkrSxTB8fnejj4WsRkf7oAqwvUTQnqkkfND8HXE5aPLKKbwbK34St3w2YE",
  "key7": "5nSRjUahfa9Gm1XZUSJ71qj5YW1ditZvuqzJ7jbSFzuCyh2wwxZBZY8VarcDTUJQTBexC65wyqYaqaKJDp7LNwcC",
  "key8": "2KKpLffd3GmiB4otZuUSFG3YkPAFc6isvu15ySKL3NtZADNyeriyjiZVFRa4gBdZVuWhFWmjSjddUfcKH1oxPWbA",
  "key9": "JJ89iY27cQDBRraKgKStcdaQ6WjLdDzwu5PpdQHiSTr1HCK9JCi6F3Tx5SRF3L7wSLEZm16PZLFuf6VgpdiAnVK",
  "key10": "5EL5E5FHGntuASG5o5Bh5ui7CWv7rkXCzDFMoQJKYWcabtUqTW1hkB7NNpX2JQsZiYqrW5mjbChbwazzgpWTP1xK",
  "key11": "3URw1DN9euATNwQ7WkozhJRd1vjKiq4jWHbpPtFFpLnRgPfPBCU6K2tfX8YqVL3Q8gooQzEU3cd8Wp9wmhKSGJ5M",
  "key12": "3Nq8WH6a1fxkkfbZbX6wjLBaLNqZtFbBrDNWB4toLx6rsqwcupQrJC99nX6bvo3XR2eL97EN4Vh3zWAMvKNjp6z2",
  "key13": "4QsmwDvR94nq69Ujf4jMNAdJHeJtRQa91XnMFNFJU94y9DnFSdsTH1gyELyouodB2KgLfgHX964mFAm5FFgVjonb",
  "key14": "4Uot3THPerA1g5FjbJbYWM7ePU9mvgEXz8Hxo754i1hz9ttThUNm4YZWnzqeqKn7ghETVooTPVGuqmyic5DmqnB8",
  "key15": "4rsGpeHZBJsZUELtn7cQq6adk5YzoCjZcNhvAzWM6G51ky48zxWJgCR9hSm3cHpek7KpixMGmoXqpjRLCMvhQ4xQ",
  "key16": "4dGLZayWJtn4YvethdLXGNewC8mQGvjqFdq5Zua32dUins7RbuoXDwiQAGqsFqdjiWAkJhaGERcuTfQwsVK4ukis",
  "key17": "4DNY6t8RDCZNaBMBR3GFPhYrEUpZ6jUuwj4VcmLoSeMLeBXUWc2FrhoaaMLxVfCf96H4RZ5Kj8J6n6kmdb7dpjf5",
  "key18": "3x6ir1rVRT7Jkuook68uvMATGQMbS7GAVsDSGn57uibPQTZ3NVkf6DZ8MPcFVGx5VbcDtgBhhg1sMMLD6PqZ7533",
  "key19": "2LwjLmc1NPqPhzdDFNChk2Lt745qbvmqqatex2ZTdcE8ZX73qD9sFJ9s6rEnssYz9S242BwCKzSYV4T1wF4CWjEn",
  "key20": "5tR4rDDUsVVVnLnS5oiLKh66KT3sz2HtB9i6zgXDWWUGeK1RQEtsBmQRRUAtjvQiKspohrPRLzGsz8uVKLmt3Hvo",
  "key21": "5bdaLobSqeYVFt1PAmjLJwaU2rSbNEX5vieTf7C1iUcg19PHL2woQ2V8fipgKg71KzSp8TiRzhWKwRJKbYFjs2vf",
  "key22": "3eJCvSop8gvqR7sRAjhJs9tJjr6cEPqWwohsXfzoPA5ZKjkKEUadTjeUayu7qLdYeWWgUAHvHvojGSJV59DMmzj3",
  "key23": "5ZtgA7pdeRy9TByyfCfGGxNUFsTUrnLeUw6PGLerAwujSkTH7LE7B2YsENX5QxJRe3BH73rfgUoXpxtHaypobkkZ",
  "key24": "2rJewNmKFyzCS6UXiChcajqNUVdME7BFyjtV6CRVpuEjHwjuDUcw5dxUVimcCzAwWyDSHtgTM3cFbxXSYRt9TWE",
  "key25": "4V4sCyz5DbyzZCqDYz9eBCVkuC3p1NqRVM5fWc7qUqiKnygzbH1YURhTpG8jd2hAwCWAh1gdyKJTBMNt5zPvMTv4",
  "key26": "2TSvFjkmXvrU9AvWTbCxprA9urduVC2sNMgLeNf55R8dnhmY5GjhLyYn1sHAVk7Qq87vPQ8iWxEbuhDV1ou5qn4E",
  "key27": "2WYjA7HhtpLyic2nLSK22k4SpdQtWAA6zzFPU5Y6sBbEb9oWTFYqUwDbQ8MgqDxQgWFUNSrvNom87hLCgVGEE7GV",
  "key28": "5Aga7jSoMiJ3TcpzqoYzZf8fSghFqAVoPLN51Dva4o5Ch4b8n9a9ArqsF55HfToQjhMvnJKwNqaUmb8fpZvnaSLM",
  "key29": "4ughjs2sCSsFkw4u3MzsUgTx3CqCSJCFFGbzCnL5q2GHvS2JM21r29SXxScAA6xB19fpGaW8sN9pcCYb6QPUtiFG",
  "key30": "3i3qDxSmfB16DMbHgF811Rmj6YBm5HNf8hnTBsXcTidMWUJj1f746BnVRMAt18Kr8yxxBrLRvAxZXaaE1zpaUoeL",
  "key31": "4qb27qzRbMiwuSLkaJvXmvc9nHZDJmFw1sNjWqsRDG1WetdWp3jFJUNVinR3u1TNNMe675CCGpwRJifGpnFL15pt",
  "key32": "2ZBhVjFGNg9Sk8TwdbTgyKzWmTsUij3evjcwFjPKKcHaNtTTk5YndUy7c4KJSfbyyAYzHV9whEjPn173CboGTFYp",
  "key33": "3JA2Mnh9BjB9fN1NMHnd8oW5i3z2ouBtAYkq8cYqNLKFzLjNojoTiMScVzpRjjVdes917ea9GEHhQYawStbEgahH",
  "key34": "2jAUJ3HY3YVKZVnWiRURguYKH7wRb9rTmEQP16w95Hx4jSXxKYC3EJAe3e1Pgefpc1e3kJ2wEnPF98zKs8kUiHww",
  "key35": "cYgvpXF3A3hStAaWzndzB8poCoWSvVrP351cprbC6niLp8CdCTTy1BxQKfPgEJHHSSbgvvhGvbnJBmWAv5t3fGg",
  "key36": "jXbPTvLZKD1Fe1xMwhmWL5tJwpuHU7WP6nYSfvULifgSCraBxHkpWkgnLPWSNNyRvtxTrEbCz7J9d9Mt5aQPcN4",
  "key37": "2CjFTA6bDRpwA13jxeDpAWBA6z5uo17ceXWeURUxjZ9wNBZZX18SVEjULjynMEKANWa6ey9VnhfZhGQp6RhZj7P9",
  "key38": "3k9yk3wFxPedm4DJkoPWRf6GNfso3Z4R9NTL6R87QNEDFAWK22LxgH3NnchTRodhJkmf8iaBcEmeL52edWJRjS9i",
  "key39": "iCCcVLreW7pJx52WyoVYsQHaNay3Dw4JJiQXWakskK19MoLN32fDXF8BTNu9K9mW6hATY5k7eiy2j2AjbiTT1PE",
  "key40": "754CBzpLidavNxRz5caM9eSVe3CxkwNEByW2wRNdQVhAwTYzUwmvNZ16owVNMFKnzLnAN9ZMVhuP6DbyktJt5xU",
  "key41": "2ywcq75ce3rLvwos6yXBcBxrJreLjJJd9TEr6BobuzY2xm1Rx8zre5nsqzKHtwbCMZyaf7j719zDGY7wQ55LB5vL",
  "key42": "4792EXrqUZ68dEtsYuqZHnZi3KviaQ1Lk2q2TKieSZsJWyXzYcfkGzkkPno4ZntNrKkaWoDyVC2d8Qoo8dRgbwZp"
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
