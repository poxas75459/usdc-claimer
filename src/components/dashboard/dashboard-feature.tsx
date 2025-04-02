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
    "3hudnwLowVazTBkMMmNWup2FEH4xKxyYvsSB8Ggh9WTuDTuvXV89SuLTA6AdPdvGcUkFspBBuWorr8kt1dZR65Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAmZ8Uy2JbbjzBTm4Pm2V6yQNeALHHLTcZ89141z1zBzKwt9h85wUSCY6h1ME2g7hZeTxssEaMSwUxXBk22xDNB",
  "key1": "45G81AHmE2ajR6YpdQqdcXSZWe2ezoXk2LvwWTKWgSnpqWgHRFUJcw7jRPeUbyt6DHV9Hqo8nLFXmEMpMxY88o5e",
  "key2": "5edAzbwHEZnu1soTgnKbuLrFxciNH5Jp2Ke614jPZ6qN57dQSkcNf4RuLopaFji4AwrrQZK9ewrdd8Zu29WC9sY7",
  "key3": "5i7BmKezA5MEXsVAjSgWNfSXPVdb6mkJxHTRq6QYqNyMQFTL3ykTndS2MggGBboDDVqn4be3e8CLKQPXmCBLXRuC",
  "key4": "2Vhfi4wsuZK84rPWpyWQHNw8SBYNPJYPbaRcHvoV4SkYB6gR6FmXgFtz1ooVkb4tAUcfhhSHo29ANqAkynRNxHGR",
  "key5": "66E7R7PHodBCz1Lp6wz8A6ngEyDTRgjFpthgbmgAfchcoAPnXzvKhtQqjgP1McXHXUX7s4jwxq7ZpRn1hKeRHcKv",
  "key6": "s2rwD6htFb9s3ZsRvqFvfcnTAsK8hnTzAVvds9MGkrkGhPytS4yzF5coyyddB2ECahH2ga4NyyJ72QeyoWUx6Dd",
  "key7": "3bNS7wDKye48Yd4h7n3yc7nqaWQz3ZkyZisD46pbB73w2ENy7LEdapP1Z6ChMWfMGzi66p6fo1oj9kfdxge8N1fL",
  "key8": "4VXM3Sw4sGFUVSRw4RNhS38BFx8ea2UXsGLVTqsViUynBdW192oQhYQ5hN7gxAsDVGpW8WKKrzAo8XHihebn7CQW",
  "key9": "385quqyYHsxAVx96hhibxJJWfhoQ23nq9ZNDkSsPhVgtvVPPN22BfxVbpejXtgEwWfKsMaEDD1bTZFx84C7JyG8q",
  "key10": "3KnWuQm9UeRbeE8bn28TsNRYRU6ZzqStJNpeqC1TgG3Qd7bQzssnyAzrbrKWUDuq49i7YgaZxVkMe5TyrAjzacGi",
  "key11": "534srEcj6o5rtUkxiCGzMVamNdaN9Mh6HhkQtKBRXUbnd2gMjtxgK8Y7F737LvHhGCYRKp9AC2xJw97exEmxVZR",
  "key12": "3JcyWMePvV9c9msLW121UKcVGXbL2ErkMgxtBfYDJaj1yc4f4iMzfunkwR4pX81yUrTKEdv4rT6FhitADBKRnzEX",
  "key13": "4zFBmHSRUpaXAfLVyvdePnYPQweNkZcwk8xsQuNMsWKNu5Wq5neSg13qKChGzVY59UAhpQEswaitHLpi88QSE6d5",
  "key14": "2ebKADiBi6LPGVutYC8yC3Kjb88V8sTt6pQpY9B6QUNzGdqnCUMMNwmerH4aQuqPquu5cJzN7kmgnkVVbTt7HpP3",
  "key15": "5B4mNSkTxQSEAKts6BEyVZwAB7FhCxj3N3FUSEXjTtES2Yt8LkeZ3cSunnpmLCV2xHhzcFgiBcLU6WZv7XHmt2Xb",
  "key16": "3WMgG5yB8ugzpvWipscGw3qA6vbjiSJtSpvR1RAWnjMp5f5yTKASmHhNgy2Abjk3sDrCM5nD6S67PXJPBWg9hazk",
  "key17": "3ABsNmvSzQLZ838ox7AiazBucF8SAyBKbsnnUXQmZN8FxwmfNu3y7mPaySWxdfzbvVx8B1xJiXoas3AbkVzTopFe",
  "key18": "4rZ1HXVodaELWHvf9brme2Xhw7nRLEnpUm2NFL85C5yYpCdaF21jRzVGJYjUutTBMnz5ZNDgFYm56dJtUyGbvwtx",
  "key19": "3aeQhXLH1ibKfhr3yh4BfCcXoUE1sFK6fgVvkm9C3B3UDvQNAChPELLTbuZyFofH8CmRSEQTozFMvP7UrNvxx8cc",
  "key20": "3aBVe5h1x2crwLnmcEtWH7xvYdf47u9tU3d4WwqD8v3vkrCV3LkumRLidtNTwgibXR1XgLUEfMSzkh6Bh3MrPhXQ",
  "key21": "4E2Q1ZkQ1HHmTqzR16k7vjJQ1hr3dbybRaxsRJ3uby1LZj7FFnJAzikoUtZ2yLuicpygB6z7vZ2YMfkFXqmnbFY1",
  "key22": "2YGc8JwQDVo1W5D9PUmth5eeWsE1ipcFCxfecwEzZK14QX3RDdstPXYoAkcy7WVVHnwsTDCM8z4xMgikvYPZ9f1J",
  "key23": "3cX9SJ8wzv2X8dohNW2hPZsz7kvWDsNBPv8fuadEWUVpzFCy4VG9E68EKjENP9eEvoknaiAe6e6xYiKrWqA4qaWS",
  "key24": "4TVUVu5XCXpK7fRoJtCUeXiMzGLrpLEjfTaovZaUaPotQqW8DfQ7G9VkvwUqk6Ev8gjCetmkw2ZggiQ61creNgNR",
  "key25": "CSmifZgWr9es3sY9rhMYGWEyjixT7fff8AbG8tSbvUXEjbNUfRPXG7iU9JuWRTEW36XVjZ6uYxB6PgU9VbRiivA",
  "key26": "5zpJaFpr8hPUTYun7WwsodCrdL3dttwsF92YAvi3X6RSqbDSQcRRE63xw6jMFHKA1pbXLDjnKigikhtgHYHEcT3K",
  "key27": "5yBjbwTmrcPfAmV8pGpupZ6SzoQpa6s5j5a3RVW53U4Fc3EDEJtWUMRGd9UG5nBCk5Rwb6ZBZmq1sXo5r5L8hqJV",
  "key28": "WHDeLtPTs8TLiBDXBu8fnHk8MqMqfK1D97m2hiTzNwKey2BWYa51VwrgCvmYqS6CiBbeWtqUGHUBWPDLkFmwQcA",
  "key29": "5Y8Zuv4wsM9ZqDd8M57iBH11YuZaYukwHyr1YpJ8ZWe8e9EZ55jd8vhaWbzbDsCkZ2wQvjzVQB9XkwbphRypmjwJ",
  "key30": "3KGMxGvx8L3bFabYJ6GN6mMbesGYFjR5EvNaPycWTjV5Z8p8FC6LDVf9ocT4zvfWHpjwCLYdyXpi5693L8ST32SH",
  "key31": "5SgL694oitkmbHUZF87Cu7L2JS9qke4Q4ThZmdXAKPScC6zrU4ziAhWjPcNrsppr4T3pMoUZYyJdW5E2SRK2Zn6n",
  "key32": "4usUCwoCn33xaY7FsLdhaeQPdZryR9VW44LbDNmGuxkqjvkXpziJakjXy2qqmbDh6ZNsdC4Lt4YCez9kgRFTUhbC",
  "key33": "5fC9Y6iTGXXTpzN6ABPZAGWo9bEM3HS6zYrxHXpeJGHar6Yq6rLy5htnNC7kkxjwevYs5aFfo9cHHU2Has4sMqdD",
  "key34": "5L4uJDQSSRtkyBnCtDp1odXKm7rKUL1H1oKoJHET5AcCEEaUNWb4Eb99Qv7Xdd8U9xzRMs5x7aeRSiCyziHL3wie",
  "key35": "4zh3WEXUn5fLHZZeZENUYgmXobpPkAFpdz1sv52ftxjoC48XeLF13rkxrQTJMRV8EhCy1RDEFab6wyjPyzWZaq6Z",
  "key36": "2W24hMt5atKhvyP4w4n2dfJxB5Mk2FQaPAizAqA5yLqsAiMkS7ZxJC5rUGSvyiZbmyNiovBwUoCZ1ZKS21iBC5Bk",
  "key37": "29n7DDxisdTiJcDQLfzE6RbitJotZF5xiXBM8ZrTZUJLqS3sS7SahY3cob8NcBR3ogoZcYWMkt5nQARvKcMsfYzZ",
  "key38": "4suE6nCYCvPoq87ArRhrNBHjpPacTWcdMvQxJe7Q2rMWD1ukrZgZW5wj4ohyQZ1PjQgvZD4gK8Nc1V6bwJtYJTfp",
  "key39": "GdaAwSjwhWT7Lkg55StgZL8a6h8eqCJ713P3zNGdHBym5KmtnqEGJHRjVtYqfVumpkvJZd8ExEME8T6wkaQWRXq",
  "key40": "2kcDmDRcyv7VSsxFmjCFJSsFdxqtyQruH8SFcQxAqh1uVxzbSg2NGGBvXSXJaeJeUhvFztjLjFKuJMMjeQkBaoUe",
  "key41": "5i4DyvFU1WxHYAd1HTmVUqS7oD4uTMfHn9k6rdmBXhA71yRB72dquomovpYf9jeBWmdKbT4zxkWh4fLqhyKToHB7",
  "key42": "5K27Qgr61HP4UvHZzi7ciTn6uhrvhyXiF8Qdh2wocmPZGoxQj2PkGswdWUV1UfoVK8Yp4UjKPFnVnsP1tZb9U9ea",
  "key43": "2Yx9oGS5QaWG48rEaAH4g7gZff2twGNBGzppncqGibe81T5uxppZfg3ejKyQYR384SVa9s22uEqtgosBjtbGhhgv",
  "key44": "3eL2T5RZ4s4YA2oPgJvxygegT3qwckPW3Y4uymQ8BiWdnaAg5pkcvtMB6ohDU6hCxAhG8KGd81kUkXXMiLE1stKv"
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
