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
    "2chS9XufFuwAhxDVoXYjLigCQq7Ub3bFx7QnV6Q54pvLG9bY9hVRdrZyyEqytqXkUr9urXjmbkDfn3JjFL8eCnYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgeQmNGKK6dBNyRWKngScyBy3TEvfQqDAzEyv28cAAJCPg6vr65WVRmS82S7V8Z7XnwGC47DLk9xEhJSL15Z7iU",
  "key1": "UcCQ99EP1wVVZNeqnWWqZXo1tsWDgTMKxKNhdbCYfRgvPPupd2xHFxv67NrkjYUBbeRcJm5EGHFCpu99ZLevSD9",
  "key2": "4iyYfzPwYrvHtmm4hrRjvmJqQ3mgSzn3ESw3zHssHbfQLytWNSBxqoTBuPckmMM8TK6ErevjEPEQEgGWyFopDaUf",
  "key3": "3eGFaVyDf9ArnTwyu2KtC6pGQQBnB37VvDgTebYaFpjn5fqGzprjk86n8q27xY3MS4uJEiG4wTZxAnW6nevkoyZJ",
  "key4": "31JtTBU3qXhU79HiWrHDLj7BqW1jtM4YqXSxaXcbewsxnaiH7yHNgPocbSyBEkYoERQiyuxaRu9182p1E53Zo99z",
  "key5": "4eNNwGaxWrmkN2LYzXCNSND3SUTGSybFMPfDbcENfPoFp2tZTo9mmZ9D8b8MX9NqfGvLEFVy5syxmg4Vz6ifLMqb",
  "key6": "3iokFczgpvWMzmPz14NoaQhgWJz5rC1k1d8T6Cbrq1dBTRTcbeaMrfsBdLBFZy7JP69pq512UG3MV6cY5HG7JCiv",
  "key7": "9oRJwsRYwXbPeFeV56URFe1BYkYbPXfb4citzxpKJwrEEeaEDASXhC5eZLbvnudJG7R4ZW3v8p9zjMUSzVDkGYU",
  "key8": "N2mUK5HqHmWtNFP6wAy4rvVenjDkWivAfDq3isdT19YXuA1AqRm6z2D1x8JakpWk5CT6mS8DL574EHQoCvC18jH",
  "key9": "Z758g1mRxXQyUBZdBCx2cCDUzr68NaRB6hzjV3yEY9ZFXmek5xySq2DY5UkpHsCAmpupkQFjpCV9bbzjzuQbQYn",
  "key10": "54wt61vJvZXvvpi6igQm84ktYFhTMH3MnDXpyFqtym4zHKXPXk3oVKjhConstA3YL6XA25AACLfkbCeXwS8gNoUB",
  "key11": "52duxVW2D4JLHFiHCLHGc32pikuY77NkXiqrJfTLCBg2RsfnbUTcFdGmQmyGq71zgTZ8SbT4NoLcfHVsWtwHLJvk",
  "key12": "4z9cwXhsBsvfhndWyNPQWeon7Y9CGAB7mMR2xpF9iG6ZZ8hmyyBvqBv6tCPTxBc8CxL96gv6Ng6HBsCXCc9deqsN",
  "key13": "4XpeFCyUqHKdyRwDzZuXJxaPoWgif1gce6HvyRK17D1oRAoprr2cF2sGYywy9oZrARUWrP7aUJMJoGowr3PxtTcp",
  "key14": "5n4Xx1b3Us8A9MSn2LQXm3eKFJuxrWpo8ygEkP8y2mLqjfVRRjet4xPbfBDwsDKog4Q3ZVyudR9fmGmrvGnAzcJ4",
  "key15": "2WrYSm9pamg3A9rJwHjooB6Y2pTGC4zTAcRrod9vJHyCwHKTRcSbWqoW1iimnxTAcmMvFJAnztSpryazf1QetLBt",
  "key16": "murHtSapvprSWWaxVB2vCcXXMNohgnkuhg4noSr8Eg61k3S2dqJZALqHaf716J2FEFMe13x6GcJK4f3t7gFLPkX",
  "key17": "3yho8McggtEfdcucX7ZjAmxT8pMYCwjZL7yCnE1WooXPGWk9qqAPs52QS6eqPr2hQ5RuXCW9pEXSndgzbsaAhjhx",
  "key18": "2bQoT3fQioa81TGCyMXm4aPLXJ33qXnkRQuS1bASBXMvaeA2A1jSkk5ydNFWUt8ernGYGQarAtiJiuA3VtavPUce",
  "key19": "3czpTV3JWohjHhgnXDauvZ1cV61zRxWpun6uXZa7aocR67aR4Znj32jxpH59T3t6CnypBSpUxDh3RAU4BCNW9B1D",
  "key20": "3HFoU64GfKVcNYHfhLishWjCgoD45Ey78xkCdurvJMAMkzG1kdCJn8poTpdihAMRUc2eMU1K9EAa4nBY1MSwGLbC",
  "key21": "57iMVqDT2uqhFeWSMoktwgdqSwgsmDPdUGcfYEei9dj5MH5rq3BcH6mmYg6wwiSc3QdmCh342V1ZU26TVmAc3AZf",
  "key22": "KMYKBAnqMtzzKDZGtZpsLbyMiRUuVM3bRX61gB95eTzurpjtt7x2pc4Kx347Xnmc8uuoznk7p97GF4ii2g1kzb9",
  "key23": "5JucqfFQCh7p58WTGH23YeYVpq3d1nYqwFzAhFgM8MKqDZtqYWethRDyouK81PZyKGzH2NS5RnYN9zvaX3N5n4gF",
  "key24": "3mk8AmP4npqi3RiXto1RnnM4fZVe4iLMFAGisgWk6LG4CkkMsNYg7bGUAyjPyoytNxsdabSGZvrxkfbUyYSEV3BR"
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
