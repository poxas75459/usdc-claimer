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
    "3jFPHHERikqT5BNCi4aWR5N4DmsdBtY9TpqEw5gAvdtjt4tfuMc51Gcmh8dKSQgbE8vZYMTboMDTJ6MndougB4gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547LLoXJqvAH8QT9zGzxV9q7gLT1WY2TvdffYoJKpKwhZkF9eLSPvMqi9ozGZQJfQzmkhzQrdEU9FMzKgRvgxVXr",
  "key1": "42tu2WET275qbNc3QQR4mjHTWk2g9zPLSeGBWwJ2ZfuJU99aEoKxwSugtiz2scmFTLJG8MLsaYoheZa7VYsDXzzy",
  "key2": "5G3NkciTnBoxjty1GcDEWbSKZRjcgCbCzsfZzNiAefrytE2oxD5HbVnbwSkXPXfvqZ5sesrHNwWpiRHKnPuuLQhZ",
  "key3": "25YUJ4WnNY6ixrcqdrN9EPSqJnMpaiMSngKrXT3Z3t49xv6TD9JEzV3GbmReXqSAU5sVGCVC1YZEZLfVPhKtc87j",
  "key4": "59dEUjYEaFDyKUNwF27KiEemUPYCdH8YKLY9asrYw7F6N1h6kENGQHa5vRNUMfAiWXuExxAfcCeJs3uN9TZ2GPqc",
  "key5": "4AouS4riKJu5drMEAUYJ3LoLZb4kYCWhucZzZNzWJJsrNJNn6iu5jmZ9FnwLgWSDub5NUB8k92JRYm3eS913uTge",
  "key6": "4QmE7ZZYKTByMrDiH4Da7ZoSoYmxDuaCAsExDqtvenN9245dHEamL6VDnqBuA41mpX4DnGb7aUkYgoc6HCKupaU",
  "key7": "2au4NwGXcjpJmsGHqsMMWzLRDJfJN7KgDjJXgBv85h6U3Z5f3HZPKzVSRqnQnQjHkDkXKfXEhkoTFCZtVyQWMDMd",
  "key8": "3M8SJH9RYNcWRjcrHNdyLyn6HM2wRtm753esPw6H4Wcw4PwGmPuWZfGw28X2nS4tZh6F8HP95azxFPRYV6gmXLzi",
  "key9": "4j6buAxYTVv8hdmi8x4VACX6HbvU56SoHmugr4wuRE7p75BXKtYcdEfu4bh99y6kTRJ5ePmvGhWkPS9NcN2Wj5Lk",
  "key10": "4RcRXgWCCcjxYgtGPsxwHC9EjC9bEEDjdXnATaiX2ZRywU27MFQ2wnZm9xKLb4Bdd1zzfp2syhmKMWicmjA6oe3s",
  "key11": "5CFkm31X3YqoFzh3zG3tbzQ2GiPdpKDKdhdHTjyL9qKu43LcPy585CUYkraUYnrbwzjp5GJ6vQHzzYmFZzND8EaL",
  "key12": "3y6Jcm6JtMWtpQs8vv3txicrLQ7eT4BzqYNQ7yEe7KYzLPV17pN9quXZUK1W59JTATpmbiAKeLTNALG6rMkm5ewD",
  "key13": "5AcrZ1g1XtDDA6b8oieoxjNQV8H3fkMP6sT694ScQ9MJtNdhN2QVDyinc34X5C4eU1BnoSbRjY64ptquW4eunisa",
  "key14": "Z5qGtd27ynKbDRXNLjuWtJhvPM4SEqjLM5twurkUuAbZFRscUBi8arbJcULJiWhGJCAAMGMpBFsU9dRLe8xyKDd",
  "key15": "CqrYMaasYkbf2QoL66xfGbrsz9nLS9F5cvfyAYWXrjRLj9Mdr7rpa5zWDwJarrc7XmRZYVNCk7yHG7h86nkqvxw",
  "key16": "4Mb67FY84ZjzHnSHTh5g1F23o2aFakQG6fSLePgfUbd4iC27cMNDryVrsYg2diPeqwneK9msinTTGK5c6KDUAV7Q",
  "key17": "6aimxVkY74iiD6mDC3Z8EPsVEYUR7TuXGphXxbeqB1zjGLvdh2fCo1iTPEtm33NBPLwEvBioNL7zPMv3h1BNJUx",
  "key18": "4GJwJzcZpvnemtrUrPyRykkzmhXWUKuN5fgZXfcSsLm19toxoGvWsNkwnJH9WhrNYwqUYsEJSCPM3Vn2B9AsRadh",
  "key19": "2UxcxsP17UzGc3WmR5PWYKdQD8ovjyTZ7qhygkyfGdexESpCeLQXSscSXk1RLJkwBNEmKmrbhdm9ZMbsf9Rr79dP",
  "key20": "4QMW4BavS2tDS9YHfd1asfDE6vo5ZURyVqVWqh6hx2iE7WDjMD3jL4vwAvxUCvaFU4WsQUMazXorA24KZGLbEpWo",
  "key21": "5VXDAbLiptzyJBgEHT1CzTxBt1hL6KzHoia2c18S38feGBm4hKm2on6XPAHH4VAmDnGnk5nxSNiFe83QCnY7WcQG",
  "key22": "sjTAr9iapLptfMvpwQkRtrXhRF78pSVBPGGG96yrADo5W334HJdP7zuu1hDRLQ3Ng2vJQ7p1fwTgQtyYBYVnfvB",
  "key23": "36H3fRBJKjF8i4Vf6tGVuW6KyKeUui7BsJn769r9Pkok7sfqGsKByZkaafTD3r4Rn9GWQyuzmt7NBaLAaZZM9nbF",
  "key24": "5KE7kS4jnZDhhukCW17FXHedHmfXRdkdNcV9odPzoKi4xW7JUJpwDGkpvctLqZhrpHRXAn27KJjWN3wSCVjJuDv9",
  "key25": "KaxMLz8pNdVoyzWZZxeS5Nz2SKPx2kaxE1WxNQpFt6aoA38EYfTTiiwajNVz9q9kr1oUVT4jsywzHb8N1TMSKHH",
  "key26": "2qLg8hng7pzdhHufnZoYw5XhxMM9ip5auw5mPpJXGowQuT2NqwEJg39rT1vV6XTyiFVumoU7ddw982p5Q7rEtXiT",
  "key27": "3Lgiw2m3wZyaS5MvpxpY9SSwHxk3sv3UHaJXJospQtR4KXUaBaRgx2pNvskfhUfChDezUn5G8w1V7aaLxAKKYqPf",
  "key28": "2CukY8xD8LAtZubcGoxrrmYXeXPaXqTuqwSityv3WmBin28ToNiVdqS4hwRd8b89Ne2F9NeZD4enPskDWXEcchRV",
  "key29": "26AR5GfNcXtVhmqjq6h4F5yP2u2y48wFuuinw5NpUaHdk14ZDWsdeZhzLq9FNvo4mGjxY8fs5ccZd29J883NhSpB",
  "key30": "5fdt5zcqWxQ2fnUmKTE4Fk6eDfpnsfSpsCH8TTAGBsgnSqhb5wmanopCTL4WPGVcptVevkL1atw9u4hBP2W36MZi",
  "key31": "64bSKpRqLhnHbcMv5B57j6z86u82xMKAHC3JgJxsieECN3161HJH2DqUW9nocgHjqaExpHugqLbkZdC8gtc17v14",
  "key32": "pqgaTCWmoyyVTmUW5gphUKYynEERpegLJ6j2WsvTRkUHN4rJphNPFqtAuJs941QcQ1Ue15hvPQ2cENLjSyngwzj",
  "key33": "3T5pw3yx6AR9ozEzSxzcxRqgvSry1ijxRdZKo1YUSWqhxzQVeG1UMaRGAiN89ZKzYgFyKcnNEqPC8oEDQHnYj1bU",
  "key34": "4h4erktwRVhFCjBkWRM5vcY8CMprwtWdRMFHyRujfsw7fNLo4oHYkMY1ZVMr5og8tp6bgFhxsTdpksEo5xnkm46M",
  "key35": "67SKrh68SVZBRHv1oHFCDxtTocZPoV1isUxKZy3gdrQnhh5Pnbqy6qhx6NwRDa5ozvAkaitiqY2wRT3nkRomEzUJ",
  "key36": "YXjUQPmNaQJzKDrkbctxAboAXKLb4ypsLZZ6Y7r1GRX5yS76Bs89knEiRA3GnfGQB12j4XCcGYSwVpaR7k9BYvj",
  "key37": "3tP4H5HKzwTSm6gdGhFjFh5XQCCHM1KSjH1xqbDqxvbHg7FVGHAuYE2r5zU3EzuZ2mWRMUJDgarTkM355ETz1VsJ",
  "key38": "5gBMYNe3rKx3yoJFCL4JNnQoVaqzxdq3Ymh9ywMoU151Aa529Y6MVDPNr8iQeqBuHnN2a6nmhgBbaSR1BEy2twSD",
  "key39": "3pyEDk46nMbPo63Xi3m78sCJuKVBUB5vxcAC3yEtV6ifHRqgE1mrpYQY84wfXUY7vv5fyrdwdGoYxLnTkkqwFhYJ",
  "key40": "CzYoymLTK4zDFZiXLvW9nXhF5QvymKBJ5sTHWPqfHp7v6QADjFfjEHaWLzPTRy8o2pvbGDYWDpSNxMmRTzfdL4g",
  "key41": "4HWk4rPT9eZKgurfq1JveCgAe7eTjL7ePd4eWdcoM9zizUozPStysXdQ2u9j88qsxXt3Ps1tCXM1teU3GT4ncg7A",
  "key42": "4ikxK9afwXRNSdbGUd1dWRWtU2QCeGvszRw95KmfwPkh5bL5LDYDEScooyXQSAWkxaQJuy4E4YNkpM81fsY7Fwns",
  "key43": "2pYjhoXJLjFWnqRkohsXrVoaNamDuS9Re9SjV9NPJ4Zt5K8pDZcp7kL8UQWdPGhdVzqGL19xuDr1U2MQzWehtQSy",
  "key44": "dwm7q5cb8u7XYeEw7s16A2JvAghPaYBw5dYSwQKs87EQxAtgX5QP7MRM8TJLCkut8jJ1xyBZ3WTWsgmJDeQraPB",
  "key45": "48mKN4HhAzLMRBELYMPu3ePhmCNrHFswKejpRonpPsZTRHnsNh3rKyqe5YXEgDCxv1npB8ega7vqd5LrVxejR2E8",
  "key46": "3aht5UNCaAAoMwS8Ac2LyW5YjhBqf9BTnoaR1LBLa5bd9Kn7NsypDHSTeFUiEqdgRWHBtHkZcgri2sKKPjCVQwzV",
  "key47": "2tbgBD8FAcoLsAPGHKiXSbvyc1Mh5x8LJQtUG9SEpeX4ZWPWoZHwBBQASwujUkT5jrAS9sBXThQTei3DX9Q4Y3MV",
  "key48": "5v94jEenckTn3MAk2mbyPPHtThiV6kVTF2jrgcVNj548qQoXyDKeCp5P8pkSETJptNzJKuyA1GStBTGM9aHDwjG8"
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
