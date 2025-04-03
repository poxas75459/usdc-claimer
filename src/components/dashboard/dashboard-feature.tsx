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
    "2Yodyp1VYyCgaWaN9zs2XKRjv4vV7eGPeWWoekzpT6Hf3Ktwu5aZa1ttYHrEjAo9gGB6T4atYLKb2cqCXH3MjEHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9L81xxGXcngKFWzqe9ErD2TcjubbY9mAsQ4591q4Pc6qzYkUfBaPSxFHUA5qfCYAJEvtHMZ8s7WnThPc1PSnkmP",
  "key1": "3T1aN71vUPudUVh8BhEbsHc8vfRkhYFUTtB9wtL5pEZcx34fRqnitBXojudCx91zVgL8qDjCMEg6oEYZCVRnFiu3",
  "key2": "3RHrDuBzguphbfMqubUvovH5i71QVroQN6hapDRURmoNcLSkqbnDA4gf3s5WVU4nJR7gSGvuYSZydg5xBtNPmXdr",
  "key3": "2dT8zYhwVEa9qEiSkq3qx5d5WWZwBw2gGuSn7Qe9C3PX2shHcoutWNfm9CGqUVfVM52tT65nmXcfuj1zVWxru2ud",
  "key4": "5UU8mypxV1qzD5wez3TTAgeEZAbyck6eBguywXDC4nvgJLtMvqDcc6fvKgHys1Em83hxKxhxnxAFRqwMsQ5dnSQY",
  "key5": "wvbakLwquF89X4nPiA7McSa8DNJomRidztTRTtzJbzn92gv414WndnECEDS2QVHNdFsA4TAU5mqpqyuE1EMaFkZ",
  "key6": "JQ528LFcKaxqhHCxYsGzEu4th7kcYdFiKT7dreu8TrD9V8NmCchDkwbk4weDVRnyWv8khu3K7U4UJSpvvJzUoDc",
  "key7": "217YZRAUo7JoXTsMYzvPa79zp2F4baGt2NaQmr7hD6o9ChcDSUFmKhfDrg7mDFpXvsQHzsu36YuD4eczFdJaH5Xb",
  "key8": "5tLtz8eTAhZ9rXpEE4imaFyJHswU7PjmXtHx562jdYzJ6xdPLNgG73pXeHJ7XGYoqMR4jia2SsyTSBi7jssb5Am7",
  "key9": "2tcpDi7WRabqXCfu7ZbziHzaSyu5dZgMPYBwNNGF6H6Mo6zPNbAGnuFU4JMnhvDfWEoAXDB1vCn5nK4tMMViP8ok",
  "key10": "23WoTTcUunspZrTwrGwiimmkJd3VhkV6vGnnneH1WiJ1SYhgVi9tekA5c54kPq7wRUJkbmzNXUofkVV59G5G75V6",
  "key11": "3dTsGoWes77Q568TX8kKu8kj56eGYCQS1EL328vcgnTqhMV2r9TQn1p1QmTDYBvFd8tfFhrRErPUq9eA86FvDQrj",
  "key12": "3SxvzkjoQFYd4Xrc7yscQtGHo4UFWFu7rr6qXh2QBvz3HybQmQAhnJLGAXMP7tbYsFdB2UyzKKx3L8wz8Hoiszhe",
  "key13": "5RDT9tNnHqpwhuGbfDcofUzS1DtyagMGDzhitnLe2EewzezwKjhDGR5XFRX1NbwmbCeKRfAwSYiWf7UYnrbgx2Uu",
  "key14": "3ZZ8ZZXqcLk3EX2L9FHckZNXLdddtRr8iL7BGqn5AUY3neTSHL1nWL6P2X4i5b2hdkqriKhfT2DvNQafSqss5Tu7",
  "key15": "5wZUsurUtNd45AMYcj5cWRJck4K6pnjgusUZjJsBarhzyXWVfDYf55v6jL9JSYHGKAwU7sqeUhcobdcwWwy67nkC",
  "key16": "5Y1fCg8MppcWb9rx2ZCsYeorHLJqtBkJKD6RJ51maMhHCn5pRJBid6SxoAmZhr7wQgXbMPzBtkMaFeQihPd6b8Mb",
  "key17": "671nPF7JNjoBpQXenLqhyzUKDVj3zazirdZaVhonwL5vkLLZ5vmgHGHX9mZHDZGucw4mR1NhAoxnkL38hg2QGxuF",
  "key18": "2PDdmvGwWYJ2XjNT2rnYYthvhBxcBM3wWDwghDZo2TUfCGJmprwsE4ePwiTybjctBHkHAFn7635GPL2HktuL2M5m",
  "key19": "3nqGkhRTeTYAh3g4vHVk4XFjtWJQLotFQateX1t5QNxNN789J9cruvQraGz9aHMXCo2WRnWQZSSSsgtBF2SQGcHZ",
  "key20": "4oCEPkAGgSXgWbzfRpBv8WL4qKEXoMD4vbftQnE2HHorhYJqZnkHn7TzvxtGFnpoqtbGjmebuVVT5rzT8M5YWhrU",
  "key21": "4byhkBdXvh72cH5MrKDr8iMG9R5m1qXipeRrWBwDLxaRxANnjqyrXAECBEqXDGJhmZgHwYgj9roHmb6L9rEyLQj",
  "key22": "4aDeDRTWsFtWXYPK3PbdQb6va9NL3VWKtYrEZRG4UYCbKW8K7JpNer9kFudpNNSSwZQ92JQA43221y1H5z6fFy6p",
  "key23": "5gtkrS3bDaEHY3p2yzgicdACjaZVshPYT5UNTunVnXGUahKcfpVpib4euyBfAGnp3SFXnKYwCD7LdBYnT1emvU2z",
  "key24": "3ZgFC9D4ZwAqE1tSAwL6SM492f4eGdRTaW3MQZzLMpKXxHPGrCdDpqHe6fZD1hojw1bci6eQus6o53MyNv7QQF2z",
  "key25": "49QdCoKePWno3rotZSrgEDfHBZp6HHFPfhjQ68uZXqqTiqnEN3257Hi5BJLCpz8chRRD9dScAUyTSijMf91W8PWK",
  "key26": "429JRm4VSh1rEB1zWehMqUDEX3iyuMgJUvVL9jy9itjNkT7sVjuBgzj6827zRxibwgWW4G6uzsEiYSF34oemVHWq",
  "key27": "2G1PuCm5hTA5qS1wVHfAARFh2vTUrW3bXbisdu7dhyhfz8pQyhhZDPo1XBCT5rL6PXsz7Q82X4YsfDYrFLecKSdk",
  "key28": "4BijsSpLL2uPf3MNt6Ww2NpPRJvkv8FmnieZyVaS5av7p6KRopLW9EzavYR7a6Z81B1XiXnpyyyoHyXt9zUjWWZi",
  "key29": "3o8DmJfG14xUUBaKmcyqdtVhPVgD2181N5qXxHqvLFtig3nfRu7EPDc7MmEJPeoiUkwcb7LNazsELVaRymmjjXCj",
  "key30": "5PuJ6m38e518DjLwsBsaVBEZvVS5N8v4LtPzfdyQFrZGoqiZotVtPXdVYY6BD6Tvr8fMxYxFd1oJ9wDHY9aJNgVp",
  "key31": "4TtvsmMKi4QGAgdyRQnJ1wRN2AszdTCKDm1QDBHxqJNrgPs3ftWhEEyySJeYgmCB64psisYxFe5Qg4vpWrJjjxnB",
  "key32": "2y6r2L13EwnshDp7uScycPYEUtAkAqYPynq5bXgt9nFhmvcxCwLZuAvYx1nKMxPy6uBXxhD3DtEnA1kZBLEdLhP7",
  "key33": "4McG2FGEeYjwWsNC5M6kujCyQbCfZYNjp1eB6BRzRFHzS63cFwVfVrffxDHYN8pbEvngMi5o5rQZy7EgMWFqiM6o",
  "key34": "2ca5Eqz2JTQXMzdGQ3jR3beQEHfdxNd91N3TQCa4khydcvQp7gMUcrWEXnkrnAKEUTdGWcNWY6h7mpLsaiNhNvVN",
  "key35": "2dgjHqPp73x2hGoAG9vcdyhoE6jA856eTVRGLzkNHWwxEgAUzAAXTKTy69tYs116fnE8Ncwtn2nDBT7HKWazJKya",
  "key36": "2vXfAkZnf1B4FZbY3uPeSaGqmrqchXbLee13U4VVa3xYJQgDo2hZYzqmCmstYeUjwoqchTBHvdK1pYcSTKr6juFT",
  "key37": "4Z3sv7buJPX8BHbpQWdp33fgogwRXGVkzn6koHwhLwqMf3xSpMYzoAm5up68Dtrjte8PBDw6yJYWJXYmi51MKNXo",
  "key38": "2SDuDLThp5i7mRQsLp1vLKvYrDxdHRikFgS28MQNtzk9EDkrG6xCuyTgCyhsdvrz8cvgfpbvdxebe4uMy6HZ6xhi",
  "key39": "4ZumXTgm8QTF9Bm1pADtPAMhbhUPiCLkxticwpCRFGfFnR5uwW6u6ZTGpLcZ5nsukgJgS3Hby6HsPB5cDVsFCsHh",
  "key40": "3so2xWEjFMWtUVEPAaqdekKjfgSVsv91nP5Kvsm3DygYtjWQiPmK2ZWExhskYP5Q7i7SohFVGWBermQMEFmZFjCc",
  "key41": "46JUjP46hHQnwkLewSFcrQJncmYhH32tnkNQScyqH24B5PgDGiH6BVgF2MJWsVFJgRFjse7ke8zGVfgvPL9jCWC3",
  "key42": "4iKuLmNP61fQQ2rVrYeWVxEcwCiXbqtpt9gkGVyyifzQQECtqZ44g1dgcxgEM1FLKW3jFSc5yt6Yg8Aw5ozFhVWq",
  "key43": "2J1AZRt17LqYXCrvHE1tTsbbMVeSrUxE5xKGA6GS3fuptJRrFkiEW6tkFhQuQoLrhiWcGG4Jwoy4d3QLE84AVp3q",
  "key44": "2G9vDqsrbiWdnJPaVwxnxDnj1JrxoN5R1WoEJ5GkYUEu4euQGo8kr6uhwrQQfrFtEC2kjdV7adhbRV4aSqFgQUWa",
  "key45": "4BGTwM2Hvr3dMtS2yus38oykvAwm62avNmBCtQWdEczDzhqMXUtxFW7avXBmk8g7bhqA9K2FUZUbv21gm2ioXPX",
  "key46": "2cmQirBzUt655vVsUkUHUr799zLtGmcwyosdipuz6wootmVn6PfSkmbQ9rdoqyibmWpJFzb6Jb2y4GWRYHWb3GN",
  "key47": "5AS3VeT6TzeDrwf3Uxj9ShozVVmVDxcTnT7r2MdRJuXPUzYcSYT93DJvCxW38is3txvUFmeZu36RR7mEgwi15qrR",
  "key48": "3aWPvECqhThxuRoG1EV1BTUaCZTBuRWNE8XRAc8fJsxHhM9rJoxudQUiiqPPzDxXifNhEEQY3gTdPKEfrvYGv8jS"
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
