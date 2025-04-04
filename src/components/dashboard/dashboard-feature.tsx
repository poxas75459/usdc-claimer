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
    "2msXMe8H5FqtSNPeejv4dMFbpBjHo4zAwAGwPLRornzDkePJGeAwc4hTjujy8XSVK3Vaty9o2T6qEzd7koUsrjfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGK8U9g4pkb7ErNzXJ8vqMZ7DiY4Dg2xzSeVTYokuHh1Lt7sJb1WFe6zCMfAN1Jr1UNVg18QqFCNyqi3Rikr9nQ",
  "key1": "3wHx9PQzUN46qjwZqPbWa7YqgYU38XnAsMEvMJoWudadLKet6VRgVTn2qni6H4nWLQ19ca1kE1RFxvd7u72s9Fy7",
  "key2": "2CG1xhJfhATfvhe9Rz29RKXa9LwzdiZyDxEqEq67FgAbyyB7wMta5ZrvBALZoY31ky1FQNaAHTXrSDJVUojNEchL",
  "key3": "XL3kAqLwSvcejFu328AzC4kmHFqxVRA7uPgH4of5yXhWRpRMSV3VARWcsmp751Hbnjipqtu2hCbJzUCtAZ9FxXa",
  "key4": "5R6Qu1zYyE9V4tbhugenzQ3nEgiZJM7EPukb3TBkqbq5y66KxFTXGkiHhfc6F3J6dyEX6GWqMLnzTmFD6A8JDKor",
  "key5": "2PxA7gjV9Qgj4PGQNmSn2f3vfoY42emqPzWX1BJVPetXmXj4T9GQb6xRS3MPfvMVvA6vYb4GJgscGLedg6wtEYAf",
  "key6": "fADUs8yqZKVyZfuJYQmF64PNq7NRuCfonJfiMnTfdZC2RqHrFBrex92w7HmUHYUWtcUrynEhdSLFEakmYtkg7k4",
  "key7": "5tsQib3iRkZKZBsXQe7HeHdogvRtooEirmtE93DEZ3372DtTxA9KVCpPixXZNEZwHsdzy4p86LKoXhtwAMZSXqLC",
  "key8": "64aEVAqymXkhChFceb1vrzuPiwYTLeA3X2BTJvSmubtLQUmYFo6ucuBgvSSygKGKS4qJtrg3GhXTDkMsi52e8Vxk",
  "key9": "SV8WPTknh3R9zR2UtYuyzSfqFDSeVnMKia9u94Tby2gRG7bRwfHFAJRpvAEvp2UZZEXBhW4R2BmncDZhk4JAEmd",
  "key10": "2Mat1EHiZV47K2EYAm2C26aFvoeVxEhkJQjcKue4Dc5pBD8iLX2upfBYvjLcs3ZdZckVpZSsy2vjMKxgcGG32n4Z",
  "key11": "61LRph1er9w5WG4RKD2UW7ubept52ZUZpnsAhJ1t4XQNHWwXJa2VyA4vsvXvYUx8g2SSs3mx74ZrGHVozqseqRDA",
  "key12": "iLfnT7HuqnouiVvNtWiAdVcjsKUumMTHsL9jDeat3Pu7p6irYpacgu1ymwAWFtSRWbUzVeVjaSGFew9D21Do1qP",
  "key13": "sYwzhGktxmp3XUmC6g6DG71miBpWMmcMx17sAfPYR6syvDsAqB8M81YK2EdqthEdiMa1QAxW9dxdEqJMLitq3GW",
  "key14": "3embd3SVpHmLXAg3V9YMH9EQhkHxdQ4ifLeMnrKzw5egYfPvp93mLWV8NUxGsS45jqdkoMuczjpRQmbNgyi5XhWh",
  "key15": "3Ew6hBfdLNztLcagotZb58SPEKVXVzWNGPZQ8CRpp9T21AkJ9xSpy75iAYpckgwGJNDAjvtPuEDjXXG5hQTThVLe",
  "key16": "5o63MkCNDh4yYE3AhxqDZCYtVBjz4FkojtPTa1pustY3TQT5MrMHXDYhpdNRT565y4ys31d312EVVjVHKUDwskuj",
  "key17": "aDypvZpxhyUvAfHm7ft3KD56QtS47zNk7mQVj96qATyK7vzg5U4AD9hBxcw9LkQcNgazPWwUMYeBmSwixLyz81G",
  "key18": "4dLTvd56feySV33GAk9N7bWCVvXuPQVAPfmbiEJfQxyGWEvNXvWiXLSqiMPFpworARPHjWLqGnFZnEUxTc6VZ128",
  "key19": "3agtNnHBqrHKfaEBKoxK2UqWZjKAoBrXz8V5Vzi69penSrC4UCrcriG7fHoSX6sNMJAeWEYznrHzJEbYjmfabDza",
  "key20": "4gBt8PF6MPXAFwdQUxyuw5jJRHHqw53PyQavoy65Lnat2eobjiXJhTK8ftUYrK6Br4R9uqEECyRZyp5wp1wRTA99",
  "key21": "44L6FKqoxzmhZQZT5fnr8RyHpyY6HUEqF4x12tTwLoft2bGucZJT2BvS5ocaMdLKwpCRH9d19QdYq2VMa29UhFV8",
  "key22": "5AVWVSUV8QK7n7SZgTVPM2Yw1p5LqHJfhnkgNs8A3ca8A8MUV1jg2EJ2zgtMHNaQrynMZh9aL74JfBzaF5ucJrPt",
  "key23": "36jg8mc98aevTAAM6KKeX7PsHLTfusEFkUEDmXrYSiswJ4szmpTyhaoswDNZLDRqWP1spVzB7fRp7a2AZAGfrynv",
  "key24": "5QrjGp8bM5kdZjz5LVZx7BhbBJKvNo4T5CRsUyDNEBgJcoAxz6TFUtQyQAqWJ11bho2CXgWSibc2jofdBakBruxR",
  "key25": "3Zv9gRCJhL3Q58fCYpNR4jUqFd2diKLMtWrs7EExoMeeCQjyDJtwAAoHxig2CpAdTZj9mn8UhR9XS65Br4msxhf6",
  "key26": "23Q5RAib3RcEq3vpzkFPYDSDHyh4XwghToAcJC6GUGzGgfASR97nybR9A5LLzJ2qufPykCWi42vi6QLaNgJHTTnf",
  "key27": "5kGK6anmDmjuNm4V1MPMc4Dc5DRacYKyw3uFnjAUCK7JJau22AxjFrrYfR7aUM5oYjVWYR4w5Z4ou8YwMiHU1Nub",
  "key28": "DniEB9BQfbDRz7offYnyB3YxkBKyb1WoTm4uriwnz4pLybuEx9fUYL3hn2ZSn1eoz6kAgyQZwq7KTzfbcgg8mGL",
  "key29": "3tv6G6q51xCDTHWaPLkmpnE8HSWtq8ZKsYiPDcU34dakmEFCP4gKqv9QBryiiGPLjDkD4L1t7cxMXiLBXRF5nam6",
  "key30": "4ezNCwSd7sM1TDaCTtRVtUDrnagKjU2nMVPDDGFuv8HjBg33iGf7Wqeqr8iRdS2ADC1SE2wxJxNYJHnfNF5fueoX",
  "key31": "2dqdeb34VDGBokAnMVMo7yiF8AJNEc9voU5TuU6bscDC9ztJeg4NfZtz6pJWoowC5toa9ZwbbRPzPxFHK2RsYK6J"
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
