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
    "3rGoHDZ3RLzZzyCbdZs6WwJZpCeKTsrpPmZQFnjh8M3XoKuxadfAiBMrorFbjRTNreNBd4e3UvGoD36iChwBnbUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MuzLwUkWqVkXjLaedJL4HHo4WMAxcX17NmHYBoytGvxDWx8UKN5eDrKqqBJW3XcQiTJtM4Py56r1qMqpi8pVCba",
  "key1": "4Ek2C2UYovXssxXNKLy6N3bjazc6YsfSe4Y3Bp2Mz95Cm1ahxZXQ9Dx25XEwdexcBTZffgqtpD5293AAKvfKzYPX",
  "key2": "4GczEoPru1RFXLmbZSb5BpWAgpCRhwzqmjcRRSptiFLYKvPinssmfXUcxJearTwn2YLc3mcZjiAr399qyaNBwqn3",
  "key3": "4JaUp5yi4hKQSrVPvpGyQp6gcXvLtBYyKWPfAKcCvb6Y32tVcB9jqWG5J8prvhDyg4ZNcsGzt7L9xsribyze1b7v",
  "key4": "5r2P7dNYKqC3tK9driVcLCEmPzQ43hfoqWVkrbSF4mGwddaJqSSgbsjZ3GbKnpi62Lh6waW8uY3eCvt6gejrADxn",
  "key5": "5SjdJ5hCpZLreBjbCt5HmnBwk7ua65CPJ1T6mF4kW7usvErmCh3Pj9r5CEPuXhc2BsqgPpSuXkaCGS2Ai4iuHjp5",
  "key6": "4gVr5Md4xdMkN7Xkx3ac3wtTHnaHyGuBv187wQ6zAxFvn1vu6DA6MeuJwKRsZ5oeH36JLP6xjdkHyFVq95tsWZQY",
  "key7": "5ReHmQhaxFtfvPwu6HHdaPeGCtEDZjYwwzp3cde88quudQdDFit726Go33tGNZyu5c1cRYufFWyrUNeQ6es4jwkL",
  "key8": "2NVELnXCb2eaRCZnRuLwbjZMT9dvTnAXzhncC2Ycu8i457Vd83kVdGNkWi8VqfPDf526SMJUPgybKkRywWiXs9gR",
  "key9": "5CeGLqnyMhpqZ2tuntQjyFZvfxvcFAgwaxjs1NDK1cY5qzSrxusgJa16AcYE7VAC41vd6LZ7NvpkK52CF9mUSsbq",
  "key10": "574Z5pDFnomuzUzRpTexhGk1L8LAknJypvBusJ5z91McLiFN2Vjs9zBJFGQxDTeVwXdx6yVRnBYHBXypV3qmUkpU",
  "key11": "u2qjqqV8t6RK3cFHiVeutYSjcNWcffWpHev7PGxc79qFbBU5t8AMAaU3pv4DiqJc8mWayzA1qsZSnMvFyhqPuKT",
  "key12": "PT9xsDhxzsMVdGnr7oRs6qLKGKFuPsgV5xRhHVuQuhh2ZeBtXryUyTwAqp5Eeasqobcvoyfc27onyRtUJifMNYU",
  "key13": "47DQ2TeNaEn8PemJPmWfkCFKxoDD6Q9KAE4H8RZbpt6hZw3G6p9eXqH3N15RWSTkrp1GP8UxPHsLDT2rFFTTgVKp",
  "key14": "125SLYWdgGthdBSAZXJ3oSG2KRcCYak5CQw5UevoLqHqHqJD3hVVjSZK7T7Lg2ktEwJm82gyWa3BgD6FmDR8s2oV",
  "key15": "3C3Jbya1KYgFbcc9HWjgrrvRgwNZULGfKxSReavefUJMmskrPAtvuaoiDwrnaguDX7hkW2uBfkyQq1TNLFvpUact",
  "key16": "63Fb4sQkCVrNvLTS64A2bQZJ4sMfQJrPYaiyQhmR6n5bHVFf7TX9moxS6RAmAFqVYsFQYod8BFWBg4RorGJ9LCTW",
  "key17": "23icpBzNP73Js4pxr2fMav5Jcf4S6R8Fb2X7wtBHCBiXSuVic8sijS2u2tF9YgXz2ZnRQ69Ln7DPikVn12MavVZr",
  "key18": "5BA7Nnqsf9JK7kaL4iKysshoy2Xd7xj9yMMSNXvwMqqe93jRezjFBDEq5uTvTpXUpAVymxbcgk9U5aY2qfADukU4",
  "key19": "4B7amEAoyYzcCg6xWevFV4wacY44RzS9u4ijeMcz7MsGgMxwzAsuLH3zYTrXTs58ijYsN2wWvYVCricoFHDzRgxA",
  "key20": "JpEia1ymKayLHQgXhyV8vkLsxZVLfYyLZmun7rBsUWV5FRrFUi8iEZLgCLmDySUsuooynJYNP1Vyvi9XzADPuKN",
  "key21": "28bKNQ9XFtMxNBrRNsd7hngsw8L4L3Ye17tX49cx8ji2cCavzKJsVmpWooTTy2E5BsPYcKcRUAK9n8vkauShMaBF",
  "key22": "S6BZDX55BdVfMhQ6HYu64GakhKmH5dQBRDyXGxoMzj8szYfUkXCi2uyv5xsVMJn5sdkJ2NEWCQnxWhgc5rkN8wz",
  "key23": "2cygAY4aWdiSqWeVWxGDu6TFgDavaUUL2wxnhj3N6P4H7KJsfjfWTFiK6qmeLt8uuWBqcWZBG4G7ZptxeAdy1eE3",
  "key24": "41tyNHv5V2eadiYF4y8c74NwEnmoCAj2Brb8K1QfBqbmqfE8yPeuFSwb6XKUQpKcmp6xngVqN6Rwi9pYpnotVjT8",
  "key25": "54XfCYd1BV1bg4812NrVoQTK6y2DMuCMRhCakfuNrvhZzwzBLArdKbQGeG8jEz4CYqvxZKjT2dpmgJjDCwCjBn1P",
  "key26": "3WoJVWt3ypCLMfpHVuEsdBtfiWozdb61y5HjLndj1kkfPaARZG1hbkKvYMr4Q7vTwdYTN9DE1K91GV63fYZxNDc9",
  "key27": "4qxobDpuzKRbSGSjeeEuYofb8Sggv3jx68hnsnx1DefzSNGzm8s93hfqL4JZWCbpXd5VLQ92nwspvmhiGrwPwpA5",
  "key28": "66CGx5McrVmzGsxtw12KNChuCsvXBswaazWLLiap8kWxwj1g4ZEd27yhnhYcZxkwxfiT7dyu2Vn4zu12G7hynmoi"
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
