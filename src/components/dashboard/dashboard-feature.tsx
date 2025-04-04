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
    "4jBqoU97xbWnmQTcfCrALUCppvNXvazSqE7evNmjZaLLQDYM92jThFtakPtohAeaaWMHPygMCTxHNFH6LZYHgZUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXg3Rci4XK2xCtDAr2j9VHLQtbitcfQnhR7yPjaPnAddTtvZYCFDCtDxjdjh1HFkUjUDv25xNdvWYvmtYYHCjDC",
  "key1": "5Y6VV8VpH7p6tWLzhVaPysJ3xEvV6uBMPbTJjkJAQmsp4FqudR6cipLkghJzb8ZFtoqrPWpkPGchyfrCQL8yRQXY",
  "key2": "1P5sAhyjEVrP58Ak5DpJfwZW596pXRmjDm7HNQno2TLphQjCpH1nbGP2y8BVADKpPJoYLw1y8ioRt8bUdHZQpPh",
  "key3": "4tadrJxEaPjG8ubd5UfZv5yqbse5QF2SBRK6jBWX3dnWZMJcRKZSwq2AgicWzGzkRMAm7sGcLPkYJUtV3oaoHAz6",
  "key4": "2rc76JLYZUzgJwWECRo6vnuBM3CmKveKKavqSNXmEC1rwYw3JaJMRyPYrPDAPk4j11FJ1LticK9uGWXgSGCUCo4L",
  "key5": "5fcPZ66fkUp7eoePmP9UmnswGKFsDfCBy9TNWPmgZJNfmqgXNvHRos4fibRFDfWimymAKmLgogZwkKGPrc2qeKaV",
  "key6": "2sXuscbZuJkvF7V1jXumDwCXvfvjHkWaRXEuUMC4V7Bm2Wok66MFdu38A1ikawyNckwfAwVf1SRrZjKEekdd45bq",
  "key7": "4SUTN9oNRnRTLJHfZtKWGfPirsjAxzLQAQuFER8Spzd9ATZhZ6L9FtJj1pm7zituxQA5UmR6zbVeNXwq9txcPyuX",
  "key8": "a85f83zfBWfGXt9rh8BhKbLgtMsHnDvpXCcZzDfVMNCPM7ykEcwp66T8UxcHdnDVkBbvUSpAQ55Y1PPPqiUKcc3",
  "key9": "4cJu1SsQvALiojsUeJWB4zMZcby9NXApdxWk2YmfCc6Q5aofqAqnVcU9qCZHdSjskoD2a6C686EorwydUeftmQ1r",
  "key10": "2HCQ4GuFX8hhdERJHt1wsxh8JL1iZ1SqrnzMEkHGYKHX5wX7zQfzYKDNNEMKbTVvMYFPJdccr8b9NE1oRBnRTomr",
  "key11": "3XwsrLmMnUWz5Cws14kHVUEJpKyt3wVZWVYVaFCD7qLqSsXq9g3Vypu35XxkzvDiiEaa5tRKKQVsd1aeTCkiSqXP",
  "key12": "jjD3oZJxcnR9ijW3FDJ4gcnkLLxPqCpNc9nPF4YW9dWaSEaL7shipXNosa1UHsinsAxNZvSPCZvd7uWnJS1maKa",
  "key13": "38NxtK7qsTveyGduSWr6br1XFGhQZLWCqBZXjXqeddjnKYjzK7tC3Rcn1TVnVyA3rYiHfFRmM8SGHP6fJrZwKrSG",
  "key14": "UCqkJmzB56woUwf1rASDnrMYsxj89wwV8yBpBV7ij8dyUUGwyAGDYZ9rGPq9AC8Fno9wRTUgHvPRxYZWE9DCehP",
  "key15": "4GhvnbS2p5LbW6wJcv2v4dzB8zuvFpEr9HTzcCdeC3YaG5X4EVbaCf8d9AWM4AB7X7ChgvhZj4XoUrrUBPv9bahR",
  "key16": "3UrFYCctNWYsuiZaagqJpJHraHWaZbZJoqyhsnPVusUC8JQ1ELnJVgGyjHUbXznBUDq3D7vDUzR39BQTEhTHHL2m",
  "key17": "4PgZyaykpP418x8bX3UMwyn4Cj7Jk3Vuo1D6R3a1NWLLEKYBF7iwKPPGf8iHhSiFNF3goYbTpXzVemQ9s93jRRYZ",
  "key18": "2JoWARA1NgEFA6zrMb9mbsJaE8fvhwo8TYcYVTsFEAg7xnMKjtqrZWFc91H6SqstNcyiDNXHmVbiwipvKP9ZzX5y",
  "key19": "4AfVtNVKhjt2u2e7g3EUJrKvq7mh8aGK5TdfxgwovhnnBd1t9yuGxbdAb1WCsrUzT7SSwXtXrxeSsYDSRG4Ms7iv",
  "key20": "5XXvfjXgbcKGGqVx5JJs5MDNJz8oFXqKVuyq9AM23Z4pHUjpFFHN6gscx4MyxktKtvECZnobZ65e3TUfGjupGRCW",
  "key21": "3Ba2SzHk7ijsxyyaxpZj6s2ZkNDRUKnE7opkRxBYbU97pZC5XaPdNRR47axxedSahWSMQnYti5o6UzziP2vgN4gH",
  "key22": "5etH95JhKxfc2nBs13QtCTGpnCmcvDHN5HNnF5KaQxje8zxk68QP77YPW8AQd5ceqvrVmCCFQu4qr19T9WRkYtRH",
  "key23": "63qeDoJpCCUefTwmrymxxoDtwsvvzavhMetAgdY8xUf3n3kGpJGTpWVt9m9Ud27MHwwZTTzTqviL7HxiLGDPNvow",
  "key24": "274sRQBVJ9swrqSE66KZhhb2sc7QzWzNNpkDU2m4C9T6oGMe8vXJBsdxr9eVtXPwnCBhBTfHwLnpRjixdwPeTfaH",
  "key25": "48mnhx6eW3qTShHi14YMzJTN45uQKkhyCGk9GpbBRXKTVFgmwVVkr6GRiQ4s42NmWmoUhQR8pLNUseVrtwUAyHrT",
  "key26": "3LNMopKE4Eh4nzu4Z8igZhB14NgxQ1crCbF3GmkF57QvRGesYwdRhaQ2vjK3M8LjaL8CrEia1gdvmaYCEN9tkvt8",
  "key27": "2kwAuDMkHQ1uJFhLho4ZqBkWkBVwAtwBfH6ykbFNG8AoH4jgJc8uKVP7d56C25dqgaeZ53ZmxgsUrhF5KbW8miDd",
  "key28": "3qpJHtJKVWqN5ARKsfjNLi3dFvbMLW2SZpogwcBqtTaXok8LdQRCV2DrvBSkaRTDKV34cJdy6EXCJK5spZLNaJNj",
  "key29": "2VvFRT1KKRA5hVeHYYr4Q37aezWCDxuxbE7ML9SAPHfF3v72iTGYTuxtUJCCLd6iFMkFX7stSWhEhtDcMuqrE9qx",
  "key30": "tSvfLwFnoWtGjiYKn6qFG6TDWfykzof12WD4cvs22wUzU4FNzNqshwpNiSebuGXBoTfwDjtTeUNVZRSbxm8N5yF",
  "key31": "9kDkVU6w1vZfJC7SdxY4CTmvuAADani5yDEJ4qqeEsnL7JoUrFd2kDcwyX6pK16N8UMJak4TwKvCeuitFJDKkJP",
  "key32": "4gTk2Fq1unvC3Mk96D3on2FyDhtGwPeMR2jrRHRcHWdBKapnCUfGez6om38jtz5pW77H277vA95vFuac8CcGfJ7T",
  "key33": "4kcGq4Q1SBd6FviicXVce9UgySxGy4shr9niunWvtYA6arnTJRERdsbyrMdCDeHNuyJUh99Q8Mh3adDLVDQ29BpJ",
  "key34": "5EYaMbJzumLy6qsFS8RKpZTxoBLqB1kESjpg3DWcPykSXRX5EFkfkNQERFPYWRUQ3XKhQsmiaRUGQbNizgUe8We1",
  "key35": "3inWHMXSs8xELgHAqDy8jsGaWaNfQy6ZRprKuAHHGvG74ebHYSqPkGWRLLsKSKPUqhWg5ngpDF98Q3czF5MfAvB6"
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
