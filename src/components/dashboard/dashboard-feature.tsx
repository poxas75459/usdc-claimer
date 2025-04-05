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
    "4FQNsBh6Z81NGvsBVVdSdMypLV4UqaW9UrKEbMdEKXTCpBc9yMmrXWcAjFujXgNdUuBk51mQQ295P192uCe1ZrnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cw9KEABk5eBMG3WBYKdvyw3eYnqnECMa4ym4SEU7REpvr8bBLgjwA56me8XhukgagvuRZMbr7JknVQV5xciLceY",
  "key1": "PJJRWCyjYg8hXQQtiftAkSMU8yTA72io8uYcF247f6w7MwfCvj2JRzJpZQR6SzUfv7d7AyeqDjVohoXaUEWAPkg",
  "key2": "3SuD1MCgSduKpuHFW2MUsW4GBDe8p8fBEQABiA6aGXpdmuWSKkgi9iJ4AUPcedJntuW6BywvfTAyn5X8UQ9UxqA1",
  "key3": "5R9hLkhtvVmMZWxwcHXDThX1nQ9u5aZtCqGWfL4NtMdatpiFHyNQfNF27LEAMiqWYfDcYALh6epdL1dTQF1b56vw",
  "key4": "41FunVroHHGsorRiwQq5PMryks1otoCx6e6XJdbgdJoMFANL4McYBEJf9JCPszA5VHL1cxepteb9uh5S4Z7dzhiB",
  "key5": "5C3XUeGdXZLydANKCWdw8xe6nu6pyddvH2vLFUVpiAXam94senPnUsMg9U9P38kyvdsHid8Evfprh3CNEvwsgdXF",
  "key6": "65QB7K5Guks9sRKW4y9ib62UHhbWHAGAsTkLuj7ryRiB8KbVKbX6EbipASDiLRzMzQQ8BJGXgnpz4p9txmwjXKuK",
  "key7": "2Yn7kvKwth6FEiGqNANziVVNn3Mour7y8u1Fpq3oQmdk5Ev6yhNjYbtD8CpjCDQtxeSDSp1NY71LBYBRumifw76n",
  "key8": "5DeZWbTm5TsTN6tJwkhPsYJmqF8b27XK6jSen3V5f63p388RHLpnZaGbvX2MtoQF5r4fcynxgVnjoSka1Y5Jgynv",
  "key9": "3ZTs15rShs8JPjFU2LVknCt5NW6RzxD7gVdWNm7xGE244PcMEYaWeZtr5ppyvqgvpnGUJsRz5p1mKoBdyqVRUB3Q",
  "key10": "4QkKD4JWTBx9aHx9QoLXbfA4DcengKZzae1ai6CLwDBEJGqGrJx3EPwyz69QsUKg7kKmL1BYnv7ZKx6cVfgBKKmi",
  "key11": "3MZXUHj4GejTTeW9gcJKe3m6TCc73WwsEyAvKxTouuoAT8YUjeQKhDrjeyTyRvqV65QusynitRSWWbnQzeeThCYV",
  "key12": "5NjP1ALuxD8gZNksSWNG7ymUFHvpXKA3Sd8f9wG9TdtuwomEkgTJG7MXTgfctoNDxsetwzZU2ndsRQAvzy9N9Qcr",
  "key13": "2B1UBeVNUFFsdvP7JiE6BSqkw5hD4yDzBa8LSAsCaDiMsHWoVrBff9k7AJ4etrsKvkZpWpbiXi4mhorXByKFYTNs",
  "key14": "3EyLKRmpDUNug2y2x5Z1KtGnZcL7tP5DR8SHpGYPqvm4Ci8x5AqavrNvQ4BVk9TztmbQ73aQd9dTPK8qLmbxZynq",
  "key15": "2sk9bTjafo3dTk9ahbYvbdHFkfgKHYLaFW6t9U7jxzyffTvtZA7cG6RhXZKqsxfTLrfPhSkuFs2BvUVD4caR9YRt",
  "key16": "4Hhn6q4Gr6fhpsBm1LzaejxRcVToTbHVAVYSqrnpp427JzvxEGsWQho84NmhN5YjQFJNQ2pB5DJtgBieRJMZMdDu",
  "key17": "2oTmqS82WHG4kAJSh9pzozpu1LCd8uLFQ3AxgZUF1YXsMRVDV1deSzTqvNvPEc5ko3iUJXGzRx4pPprdsY4cUNX6",
  "key18": "2hWXpYMqfQFW8oeC7J15f9eV4o7s8CVqSWCZPCkA2rHqfgCAnV5c3CEtpYeMNA5f5QrQ69HPZEJrfRyroYQJkyBi",
  "key19": "4q2CowDhz6gQehesKRrCCUNMDqsVuean4s81Lq9zfe1Czo1bcvXzeevpafD2L6cUDBsNkGoAxVvMpsePzLgQFjeV",
  "key20": "2vrGsNaW85xLoAHRrWd3UJP8FY1gu78wvBvgtvg9wTt5gzWPdvp7B5uDsDJ9jm4Wkq8yWfp3FpP6py3qyM55BKnt",
  "key21": "5SDMyM4GS1UYGSX5BD61XABFLXYKBUXvCugLhwqwU1Y7Wd29sNS3D6A3848kAUVpJ2h2pG1pyatEdGYBGxjdDrbU",
  "key22": "5imrWdHJCk4vTVeiZenQNb3mXHDCEj3YTg3R2jgnQZFrNaoWr5k4Pgd2GXbBqsUyQZPgbC57LE1uSCgyxmL4fzEJ",
  "key23": "3BdrE3A3iZVGFu1GkxhErigqGegHNaiBLAPvVYfKuDejUBB5kR4GwHijPBkM8Xje3n8LUJbqStrJSHiDsMwML1uH",
  "key24": "51eDhbrZFE6PMc9HUZ3jW9YWC94z1cnB4iRe4LZM9T4Ykd7HasZFuhPE4MzhvFKJew59UdFuPvN2iurqJ4CHnXnm",
  "key25": "4DHYjRBgCcaZtcuys4BSK6tL4kXegErbkwoCEGzSs3XKuEnmaxAymK8Nh1BxX8x22fMuBaA4JJdLZz4XiuRwz19d",
  "key26": "56zEkBADjVccrUsrQTPBFekz5qDzXDWCax8KpWExtRM7hak1TjJibWb2gJpWeApJV1CmhfBB32am7hd2K1kEGDvA",
  "key27": "4dpsEf4U8bVUs5kbFA9wt9Zdm8eRMn7XnuDjJMnAnb4YhJ3vKp3wpEyGo5EDt44cHgycRpCLEwkMJDZR7jENsbQo",
  "key28": "4xFBkfdnW2LNW1s32GNnzGp8tuQ5WSpD8mMYLExxFiK3nF7ZzQPcLvBLZZMa4i6y73diXku3ctbWSfY9GA1iUceb",
  "key29": "4HdCSaENA6zzAEahm4zKFHn1XDJUz4bGVdSRCum8kQD94Z1NPJXLzXKXbHNXunccDp1caLWodcxHQpGkZ41c7HAt",
  "key30": "7z5MnTEYfb8ooaxh2SCm7AExm3nApkgFXRshQp3JBkLAbaCT6runnosoAYECe3vvFoytLjsDAkKT8EGaYC4GfaG",
  "key31": "5PXB6YuqiJBxRe7BUu6appNC6VUfaeoApEJtXio143gcVueiD8m7mYmNXFG5tNMtLEu9YPJwWzCt2RxnDpiBg7zb",
  "key32": "3c9PMTjU4te9kD7aBbLjkUD1JsoKsMbdCQdkP5DcukAmi5r8EcdfUCHbAqsVDqM6LQ2WbEsXL5Rzx5zkmC7nhYhj",
  "key33": "5SZccFghGHEuZzE6XgnywpMHmwWgZuks9wQv974anJEPGYWyfDJSvs2UtF6W2qtQjrFGa4AYT8xiMc6QqJ9YTCNR",
  "key34": "328VYU5RP88N2ip6DPtkjrDhNpUML141zMtbxKqYDmF5pUAen57jLXiihcgztgj23s1BzpKLwQ8GkbuSkNX5KcDR",
  "key35": "24oXWpXrVvsh7qeJawtX2pN9m1kWdWMTWVxEaEbB74V79BTidZPCS2qNmRP1EU1KUSxZ2n2sfYh5HDV8gHJVZdA3",
  "key36": "LTvCTHTq197KRB1eRgEpRbRfEAVdqm5TCfiVsoUqoZt5FJpN1zBbgGUZTho54zNcDvagbMKCUwKKmtEXf6vHCuh",
  "key37": "4SRz3AJ9MuTPGqp3Mo6ZzPXrR48KVi12v5LY7CTeu9y4WSu1CzhqJNFAQWAgqsYGBfVPAS9zQ5CEvCUwFSRSLfho",
  "key38": "5HnT6PAMraqokQ84BXS8FzSZyH4W7mT2G77wGSsVSEp9kr5X4gbQrRw6fgJwPkwUi4PYrx7A4kEDtPFw7dvRdKgg",
  "key39": "3MkdyxTXXeFqfNvi5iGG7MdLihFcThaRPkqshyXqRHi31VJRjGN7DednXLMugNmXkRbdUfwBnBLo8TUvmkBSpP5q",
  "key40": "5vHLVehL7UPUNhw4zereMZGmr4dTuLQ8mAGq7YqS3wtFfEFwv7k7QDB3N8ha8Z22ZRqQTYzorFSDFn7aNrntZpz1",
  "key41": "pz5PYKEGtb7Msv8LWo3YZEJWLFJsrmdedpC6Wdx9HahKaupvLK6CqkQPCBerH7uPNJYLmHUaa1TZVMZYR8wjXc3"
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
