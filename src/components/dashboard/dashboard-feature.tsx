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
    "22W58eLtLPjedhbW6UGXbipDNS5FJEK9BPCjHomF8PV5ZrSjPtv2qL9cYPZxPbBY4jDdkpEyvaxt6gsEuHbeF5fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487EQBGVvAK3bjSzkRtfZneDX2Vte1XUkf5MnfbvhdMJWEHwyAsnvoohaXyYJq2jsZBRSybdfG355RGygNTGY8io",
  "key1": "4vYD4vDAHy561iJTUGGcXYKpAYoDD6yuSpoBmmjnoeQvoSdgNbH8K3DMR5hhsabvD3N8QjaZfS5VM4UxMA5dxBer",
  "key2": "3Z6GrQyYyDh7AZziXSC7xzyyBG5RasMJEEWkyiePvqS4s7kmGYj8AXq8jhPGCxc2NLhWQrjCmgGZfqVxBUTCBAb8",
  "key3": "2su9fGKqkiZWx3wknPSrryT1LS6KqUzVXXS2vjfkMXZNHkTSM2J522AkyFcvd5u88c1LPkhYSY4yntPDcdnm3yy5",
  "key4": "hL2aC1jHSQQQWE8987Z94jSFfpN8Bp9uJkMEgov7uBUz3NjFPNRDn56gfaR2yato4QYC4USTmk4fBpTWRpvbxZM",
  "key5": "2z1sjKnyXQHXHd1PiPi4YCBr15MKKawArUFDcFB2xS1Wymwk8CkVXagbBHxTKcDWQmCCirB9fXWYc791XMCFvu1f",
  "key6": "2xhsUE7jDKNUQcFdyM8Jze99cGHgxW5RKSFbzRY3BGPfBFGqpVQhihsVqgn1p3WM6jHxPb5uCcYWWeZJwcM23gtE",
  "key7": "3HbxvuGiyHkteTYn8UuLkLj8ADi6cfX4f3Cjawjp2gQd2mxS1YmwBWXrEx2CLH7FUUF5EgrqcEKEDMfWFpfbUzbt",
  "key8": "sXAXYLgdH7XUkJTLZWpCpiqXEdpTy69LN9G7CCvUJaEEbLV2qhqkKaqfJYBmGCk2f8N9xLpvgGULgDF6hHDsV9Y",
  "key9": "4n6kgu1gKCVdwDEcCiD9CDQ78ZZBZC44ZyWU7yuEFUfki8tysGShfHFzFVXBmHt5VUeygr2641yoh1VhATuSeGef",
  "key10": "WEfFFNeKNUMFHdjWSVJwwTyLqcJM2fjYfm1kGuUSvsP9ys8NoF4fw5NbAuDzoUbsQoAY845SJro4F1WfadmVMqm",
  "key11": "x5WuxUitDLMyEmQdnNcV8gBPh8kwDnwswnw3DBRzQaucjJdinLGQiuV7p6fAimDv7HAdnFLdBAMEea27LYK6a9j",
  "key12": "3skrMcQoDxtgm2EEwCsWbVcANsg2AtHKqJsMcqEDK3dJvradtcJTRR9J6swRhrtj4JPDbwJSs1YdQAingehorqz2",
  "key13": "3U3PDk9MzfP4nYr29suXUhBws4hhJjYoZqx9gFJrkkayTN2PW2GirdwQfbXpNff58vXV1fzAk2tkTLKoS9hwdwkK",
  "key14": "41a4eR2GHx3jWtyWkfqJ2uyLrSJdE8uPggM7ZhQHBd3ucq2XWM2TtG8cYgKXZ6TGWtNn6gGAHiZFHqyjB3K2v8pv",
  "key15": "4xo84x8pZbciXbFiWSmzfX25Dq83kYjhSA5JBGiPgEnYVybqMYiXjZ34pCvvYAQV1fqBKbBDnLpF8MLdjpKjaPVK",
  "key16": "2FncdrQHk9bCJY5e2wNVQpt1qha4meGjZdPiAH1q3iqFBZaYiKaSMndGAKD63hxjnXXX4yhUU7hd9hRcpTXRHXZk",
  "key17": "5Ds9NLo4j7rufnztf7z6NpXJXmhsw6JUs6bz6s29Nx9Ph6zBdnh8hg6fxotdUZCDfUKeRWYaKeq9zcQCncFJwqZW",
  "key18": "5PtYbhczjk1uoShkTXgwxxxpxCJwh4s7mFt15PXHFsUtpzBQUAR1iHGdEvTq1f7u7NzZRvefyC5FPaAwSBNGjYyt",
  "key19": "245CUWToFPEqi8CFdsBu8voU2XKxGAdjVMLzpAsjXe9Bt3sz5rnGgBvdYLZ5HM2aEtS6RQdikCPYeajivE344L39",
  "key20": "5VubjkijJUXB11DaJB2T2j7LvHj32SitrGjqPz5sHA6DJ6mFcdriuyP4j41VUWtVvBkRcWqr6rtMVm5GwScxiv4a",
  "key21": "Cd2DHA6PUqEGS9mJJvtAZpetQ5hpZoNqrAQWK6PxtUqQWHRb6aFrA1ck9UGBzotkUE7Rj3MbMw9StyGUcs4YBet",
  "key22": "3iBPiw37LPne9yFCF7G76SmnhpMn2iun2CkMtmtqTgvG4Ryg2rGskmhvM7h9WXWPinytSYkR8ZtjANLZ3JcbMRUS",
  "key23": "K1m2ySdqV6sVGedLctFf9twMJTqvBysyRYBa72X7kpVg771ZkESnfX6wsD4SLsQ9aDteDoLskB3MEUD63nEQQSc",
  "key24": "5c8WaXjfJZ27PQzg8DjZssDSuTLa3e7XFi7KoL7ch3i6agfFm7WZ9kKoMyTrF6SMALYNQcMNGn1Ks5ziN9rfP37Z",
  "key25": "ztZ2ydyaJfcGYiByownTkPv9wek9wHx9D8eU9sACNUFyCXGq8JyApwHEhUaJWCSoVtZwQymQTAtSPQZNNN2wVXH",
  "key26": "55d6JsGL7vNopiVdqgXBuE9DU8qGdFXxP7ZQntzg67u3qjEyknus17q715o7YhSdELjWkZHTt2xiEinWiXQ3McNx",
  "key27": "4mHdDVDjvRsGPMgZUfpd4S5pkbJA83za3PvN1eX9Ug38h1iBz6aiUfriRnbj6K2gAv3YPA1Us5hpV4HaQgmc6HoJ",
  "key28": "612wst6si4zAmwS8BVHP9MgFMdUyqSNotJizKoVfobwCBLUnBYxfyvja7cBZVfKvzxNTG9694GD9DAHy7bSm6zwu",
  "key29": "28bXNasFspNn9DPQvoc1yc2PL34mxvmVgFGh8x5jYdyrjHnPiUL1uipKujbZDQ8h2ah6SjgFJyKooW6WfZduF4wb",
  "key30": "2p49RzeHTNuHQJsNXMFwk7qYJEeksxqHNmcqVryKDnF9yVSbsY4hDLnaaiAF4pNoj4UU2LjDYzDtbFrevfoYbLS6",
  "key31": "UvMjxbVykczBrA9v3DyuRXQyAAqB6QADA92EUiTF2yydueR2TsszWxat9v16yibYij6HVxZbzdN7UiqZ7Ejp4k4",
  "key32": "4WghAmh5wty8f8TFFVMkWD2fL6tV1QSqiDTKkERtZa8TGMQaTcGmJeLrdDj2qpCMqdTTiwn45sKQMRjLAxABAq46",
  "key33": "3H8FAqLxGzEw8gaX6Tu1dHsWq91RySwPuw6RN6bymVzeeRrcfpz2rTB12T8F52o8kaRmm27eojJYpV3zZvjwLugW",
  "key34": "37MyBzFmTLs7H3kAXWjPLHGkb5HHcz2NUwupBwTAsvuWErGGJXQwzq5xVJv2vHrzj5eW93XQfEfinrwfmC4tCWDj",
  "key35": "4QXEccFXQZFJazwLU5JTXfgzhr1BhyfcpW8kZPkr3oQyrubxUFg2SR8fRUnEywn8w3oVGZif1tek2WCnq5n1MeEa",
  "key36": "2sjxiCixv7eXWnX58UrQDkGJCDrsb6av3RTcswF71scZovemG3WbhcjM3S5nKTCcJ12pgBx9hDfjmWQ3dWFchaCF",
  "key37": "5TrQw4ZEW7r38xDh3gZjcyYjRJvN9nBs7XuNcstWEBV5JuBUxfKHSaQscMcaEAZAyiF7k9b3dBWXfavPzVJYsgX8",
  "key38": "Tv32qyj9yjCtC5td1QDR5B9ENDTLyonNmgPnfCczfXDGtxH8YMjXhXZq5EyitES6yryrhhMkY5pMyLAuyLD3aGf",
  "key39": "2Q1Bm3waDoNLmH6j6T4NTT544iK2RjAWwmacADV63ZecgpvqpBb2A3DgB1TvRKQABQSSnJjGg4cqSCJEhaFNUqrg"
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
