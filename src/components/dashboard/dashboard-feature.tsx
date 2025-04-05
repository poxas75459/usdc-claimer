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
    "4GomTqTaDUFGkBqgtebRTdnNbTqPx4pQQohULH1SfhQnf7bqgmdtkhL3ApRCRvJMvGXjHUJjc2ZuE11ZLGKVZvcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6NBz4ws3wDELmAgaYoYe65unwSqChUuUz4UyBsXNWVvt8wS4i7AEUkQCFf4h5NB789VZzFe6PUd9XMg1y3VwWW",
  "key1": "2ML9ghdtoh5A48FqSfNV3gEuiUgH5VtUvRknQ7CaTMFLiDxpL86EVyeJYjVwCGKWkWuWtzUkrZQ6KvPQZ5ipb3ZF",
  "key2": "5yFhNGug8Q5nr9hqVzLvA6LVPpQEs4DDeBzLAvmXet78MexHv3bhs2PPx1KRMcRKXAAsgSCaS8bKzjw2kMz2uMkV",
  "key3": "4BecC4P4izpqRcvcMoyCHukRc1RuWCB5zWBZ6JrKKG8XG7hctFCKGxZZLTdh7i7Tz96joSngGJJ4p42oPA3bfSoF",
  "key4": "qbdAtDZeo6AVA3sSbnRj1ng7sXSTPhfATDypMxgQLF3zXygarGM5QDHw7ku8rLCsr45M3fzzA57vxRmAvCtxghN",
  "key5": "3S6u2r3RaYnUwnoKjGt945ZoXLTkMj4hE5n1G1qnhVsjKKzZk7LnQFdqQcUnBC7pCWciAvXpjZ8VjLqKCEatzP5G",
  "key6": "2yhertzUCC3Byxe3Uv9zErCwopxVJGkm5LWRHc8MVDPrH1PMFBiXmVnY2VC32zthY2zhskpNQeUpAgEjDkLnyb2Z",
  "key7": "3Cu4CPXaRFwAs8NFzQZrRYbZLKTAgsjsa4APF8mY8mzfvuKghCNGk7hxuyjguTkLmsyfHxNtcancUHA19iVc71Da",
  "key8": "2BfrYTprUFstgAmB1TWHFPZF72usvm9nn4MUrECbowM6S937qMc12Z9riZq1XQ8Sv1maUtJ6oAYoBVg9LDLLk2bU",
  "key9": "4x2DjWs9ZTmZiEpD4YCgXoYYUaRMpNkMMRoVzcKUzgfYD2g28XTVyTCD5WmEEsu6PQnKMSJ5rJstJmmv35wzAkWo",
  "key10": "2GYMgc4JbDfWZj5KbUq2duUmSnxwAiFA8iw8hiQJ2UmtToRvRNHPXKeRTHQfjXDD3QEtAvVTypVQk6xfDG78taEX",
  "key11": "LEJs7NEBBzP1jJ1qMLY941w1MNbUJDUQHb4TegK1D1WG45YjNCcrstNFfy2wSHBozvf9mYxeGa4TdeiQWS8pQPZ",
  "key12": "4UHRS42Mrravi54QA7xktFq4m8L6KnRrtdqB48wPXRWzNSjiXAnQMz9FebMNpiTrEVHGB6kt7uWJXFiHV5q7CS7f",
  "key13": "DcoWGUZR2Zo3kMEnLuVR8DEhS7L5Th1XX3kcWbhVfYodrQk32JDyMQWjmhHpuRPoJoPmXQEV77pBJKTzFPpDMQZ",
  "key14": "43g2LSQRLqxB9ecKzos1ujRW3PUWKMmyC4t2DRN4q4NgMBu5Vzdx6nuC3d2wEgVw6kJMzPRqGzJ1TFt6aCr4s51h",
  "key15": "4n13KpPTNdYZn6oFgwDCuC5ebhYym4bBv1rDLA7CQPcp279i5Suk5thnY6jZuMEEZLxz4bNRexVsfyLhsRRUYX6Y",
  "key16": "5fg9su2L2jvJ9mgRu4pRmrbj7snntyhBX6xTwRHjBFzeverQbyQq1AJnt3iZpmXCkW2SEqxGHceB5BrxR1sNmUuX",
  "key17": "57aEcH4PMuU37MCrLgZepCuXnhvmx4cLxDesqnsDP2ggUfU4ok26RvfzMRBoxEMqyRDBP8VNpq5Dmxgkkun3F1GL",
  "key18": "266PSyJ72BUEu2s3hiHkQfPbFdHRNMEejV4y2uCGTqJYmyoq8PHYgCiU2BmHnUBb4CHHTEetUhHzbwWExb3XezeU",
  "key19": "4jZRnqKpxevYckJZnvN6XYDP42ivRMFXg39a7SYYvh1ynzZupW2B8F5Zt4wbp66zoqvRe8HG7dLYdNS19QmV1SFV",
  "key20": "3WN45XJAqDPkjwJuoSsS6GZWUHmk4LSc9xo86M2Q9dJHfYLvMqn5uXfSfifabPCcDxymie33VSYXgjZETEFqGARS",
  "key21": "4WJVWVPGXS8zxsdmgWwusLmz8AXiLQbpJNm695bLaDwQbZxptHbVvKiiCDwJfoYMutbX5dUxJCBqWbxrN8WG4rQf",
  "key22": "66BGLepgK66oKiiNYcP4ADGtW62Nu1tJvcXYM5Kc4CmykNtzU6deHrSCY6vd93yJBwbmKgLbYKbFz29ZDymCek8Z",
  "key23": "5XoSRBkGD9zX6gAtkEg16TCcdkgLK2nV94fEy8uzwLGFfG26snpqZ3ub9b2JMbT4HQFB8Rfi7hJCzUY2knMThgKR",
  "key24": "5Z9q1VgZnoJ8irbzXnS4iepkwJwjqczmrKsEkVwKt2H3NDKs1L5BMsZ4GsqX7sPBHro4SQTYb6V8Xqfq1bArmxTW",
  "key25": "3rqX4jZ2yYaCkCE9ZQQB9nj8411kokRgccdFfU4evLK8sUugXi8MdCAGaLomr5nQuR3SvUWFYMTC9DySKzkXvbui",
  "key26": "6cPLUS8xcneM3KaGHiaLS7yf8An6Aa3mjaGbAmg6yYNH7KTdpYuThnKXwRHa3H1P3bGEj6Ma6gcWK5twKD2VTCr",
  "key27": "38bjATdh3AreGdPhadvsa6isx4oerkK6uaQY4Rdp9tN6PMsd4iRqs3aQPkmQDYVwjTQUiFaoB8E7N8BTJGP26Bm3",
  "key28": "2bG6afKKeMSgyR94zYvw1tGUxmU68K6yQhjgeMf3V9xWNW9FTsmJLBkTFDzUo9xb1yJacJegG95CfCkR6LaK12hx",
  "key29": "NSc1uPXvv5yE9vy3iGcw7TXMj6zon9TYjHTQ6WJZVEsvHWH2hyTDnUrkN8b8fTJN4ebKp1Jy6GY6JeNmU1Uyz85",
  "key30": "34ikeDSxr9puZvAwA1dD1GEeTWPh3XXjYHrc3zWoS37Wi47zhtyiXj2FBim7wtwckzc8GTdvWqV57RVfuveRkQkr",
  "key31": "3KJrBhHayszn8W8ccxjWd3YLSMJfDtHY1gX4DAEmjxzNhvhns4H8KpLnFcwGsPpawRZxETUeHDGnoTKeuYdFAhZg",
  "key32": "3H5wmsqttSaQrvuH7waJXkGeM9TMgSgoJDqDcYQWLJjUH6YAJSksN4tpYRfHdvYGWwVXGtuCyGP21t2Si6cx8nS7",
  "key33": "5kzgyg6H6qFcDEB7GctZEE852nZmrTDGi9kxWQQpudifLTtSm3rWithZXQMxggRJHhtugggmssJV6PipxuT8iDEo",
  "key34": "2963rEEmrs8sW5bLK4JHLM2RQBkJWqAEWBBy5Xs4HqrTCNCmmWUXYC62vjgAfoTZzDUaUJcg2EABVozQgfGMfeCq",
  "key35": "4wM1ZgtBUyrCktw1LwKpdtfPoV9sMTJofhZEDhdQyiYSkQHwQMpmJTNGV6X3biF8NfooZyb523xteJ5cKKNSaFHq",
  "key36": "5WPEShu5SQeNkEHxf4cPsdNsJd6MPTf6XCJCk1VH7HYiuYbVq49nWwTfNeMUVN8QSgFjuz1zSWN1uK8XksLXwGfe",
  "key37": "5AaVsAjKKJBETuN3m1kwMGzt5MYaoLeXA5ophRcq79iATUkw9CBzDvBsxpYQXkhLDUqLrjNCN8eFruiV3qJmoe1z",
  "key38": "2Qg1LF96r7tSiHCi5EEDNrcCHbfD6CPvXvkp1Ucbxx5vEHPFxud9SQ7GCK6LVf82crxTvGx9Di2Gn42SFzjGt2QE",
  "key39": "4GYVYSuMpctJb14FZbrg6qcsDjooqcvimkXkifnhpjARLfuPhdaa4PSeUB3u2bxvF2hoNPymv8jX6G2UrPafamak",
  "key40": "3xxAQ2sMoSU6Af55fyPdJAzHhZYa33DXE2JFZWnb4KtNXbVDFSMGcMx8p9JDe8Hnpqzv8g5EqW3CaRaW1ZNpUzbq",
  "key41": "2ajrsH6mekN6g8VHzXBaaNozVEoyaekR6DnoYu89YwHPNRyeqTPUUvbhPT9DqohrMpii9C536HMANZBgvTk8V1fw",
  "key42": "3HYBxHxPGQpcMKeqaFHZ8sA823QPfiP8qz31wDZ115MeZfnTLRBhQmm6dpTbnrXWcSBQvksVE6LGP9qEbCfz6E5k",
  "key43": "34Qq27nz5SRhwyNWe9HF7S2N46hs8hQCbexzWX3g3XWbHKiXWj1KyyHHHoN73YdYZ1i2b4CNwAwWzseKwwSzdms6",
  "key44": "3tk4pi5nRkwQpQoWR76U4fVURT9DZjU4ESFkh7UWuSnJ232WjSD4fxizw3TfG72DfhANar8mGZyC1WULMRxQtSpj",
  "key45": "xiDNfCMJcdS6K4nUFCs2p9aMT9SFMqpMMFd1Z3SwM38QVGB2F5UvyagHNb5cQzA6k3KTgK7MhW9vW6keQaMz9N4",
  "key46": "4dYdYntDd58mdQYaCoTx5Hmk2EnK14zjCH964TYLAKZZ9Hu2Jsw7nFee6KtNRh3NNCAphmWf8Zq3MEUWzVzwGv8W",
  "key47": "4emjFAYRhDqDYFZWHkURBQHy7FhyRtXjD59bjhBheXBocDbDWqriTTWXdmizxnwcDUA8X7TepdiadF7hfkizkHy2",
  "key48": "222r4r1Tg9h6cX6sWDaNvxLNMhTgoZ5SLXX3NPeUYB7FQJ9JfaTidWKEM2BwMYp4WzCmfBLgj6buDXBLb19h4DMS"
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
