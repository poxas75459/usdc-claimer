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
    "4mAcyHy7fuWe1PudF1Z41YwvAP9gBUMHoLBfXKRbFkgr9DsHuPHWBUJSsJqzeAVMhCupBwtE4U2qw2hW8wZpTnnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DfsKnA5TWkiYdcC34j1nEaJaNGW1umJYBnPBoXUkbMKomhVGh9dn4PFLM441aDrBH8ZehfYzZyJfQz5kq1fTqwE",
  "key1": "jigjgbdaY9adXsx1ZR7dSs8AJydTQZCTHwQ2CfNoZmyqXG4JEBkpX7GzuofaXRDqDP37cZKLzevyhMMPhpoXuKU",
  "key2": "2d2TmsRoAdKmMxVEDSi8P3ff5dfomeN8aZQ2M6K6JXzgpByUYt1p278M9qRrE5pXErZhdqbLkvvG1eawR1JV4mny",
  "key3": "1BAnHasvDvZM7u9AAGLnAeuF6QkBP1JQrEV6LmcYQ7Vvnxv7B4kREDFB5vUmDwg3FSPkT2V9HETZHx2Ym7cH9pj",
  "key4": "4qYeJfZr86ooKsRUsknrrhbLSCi9cQY6CkMYyQ9ce4ehbcAgBaNNQLeRLwqjaLKXryEeU8YhTc9B1HXyLMTcwEtW",
  "key5": "2WfbxpN6RmT261epLF8QBeujJdgmTKLySrhkKejLom42BEbJWZ7Mjysm3HnPfGBfAfB4ijmSGftT2jRknYoiUUV2",
  "key6": "3HGxcd61jnTDJKuM8mtKCoe2sKbUzYwtA2qZjPYmZaxdbKCwBLySu7zRqV5SiY9Cft8twmjB5KwW1NdGFrdrrEDL",
  "key7": "3CTqVUuQN1Vk9AfCspxgJHCXKVihdCSJFNnRMTrsxXSiBLgBYYMCewLnt8EJijfUHurshDr69QSy3kCoDMqYrw4S",
  "key8": "e46pMuhZ3S1DhhY3wVUDErHw1PuziT6r5jkKVRpRTt24gbpgXKgQuvY8LJQUDTxHoW5xMc5CbG26wYqyAujXGY6",
  "key9": "5aXu5Y6rJEpqBDx5QWFSeEJyMdcRsV4KE9X5eqBxEFuQgPRjhrrAqFogvfX6sS7DzpiZRuL8PM3xAph6iQYUftpz",
  "key10": "2WYsakEZZENMQkm7DGEV4KDfpKjPkeM4vKZqWDdfLkJHkqQ1Z8zuJiAHuedfRemuGCQ8Uv72vQ41kziihtBL7G2r",
  "key11": "4NqC1MpySnoMhUTotr2J5QMiW2EFGQmL7CZo1u92fZGs9EXHtpE1JSJcFpT7HbVhZW6UsF9rP2Hk85kRAHKXUHpq",
  "key12": "PT2RevhDNjzuE21TGaFs5eoLLVuZ27LmMg1x6RQRXDZfvXuzuK8mJzTKyhNeUbEUkcMS2LWCWoPsVhKZVogLuvb",
  "key13": "5uzpJsv2pKMo4SHDLGfcvTYBQ9rz6Ej2zxyW3judAHWn3iMcJkr6NFn6gTiozAWjgJdDWmjLpBPehUVLTERrpJq9",
  "key14": "62eHH7vQF96i2rv24jXbDw7zx6Q8tcqXYo3xmAoe4Pta6f3DgbjRFfiTSergWxxASB4xHRdLMJcQoHLqG66PiqBG",
  "key15": "3TywVRivXG4CvstMd2DSsj8Ukga4ah2qcaUUupBurUXYibehbqvz59Y3cDqWeh9UDPtYh9LUk1okqdzM1YYZupNk",
  "key16": "3fXUvj12V5wP2CrJEWBpvPzuz8ExYHeMfeNKFF3BuZPbe21zNkGFhzrBbXghZgPpBPjXijQEkVGPggPmmErXSqMP",
  "key17": "5WsEy3X516gwrqbiBe3HJHix5cswCk3prZTJU3rpzFwfLP6tApx3jL8XKfumLkjyuymw7ja44qEJdW8zJMzAk6ZB",
  "key18": "4AuujtqA5qakFqaH8rJud6WHUcytHrPfLsM5BDWVhtLGhudWQjkWFJHv7poEXsgVAYLXh8xFV6TBQCGg8GiRy9Ba",
  "key19": "CtF8PwHj3zMLAbRVdttAiU5gaaH2d5kNaYEpsKAMyUr6D6PKGrGoFcDUpJN7m6uCg3nK7SYzXP5jg1Nwm6VGAT7",
  "key20": "UTeJNEw2SHFEfGpLBgScsRE48RmH9dZjioWvC8arGjyBY72BqYt2wZQ4tXDhMXEHwGBs5WCS3KLGDdcUn4Lwirw",
  "key21": "2AxLDNRJCopwtEJVFWyqaM4Wbg8EymMLfJdnRhFFuKC2v94TKEFiTW4JYbSygrnABE3snaYnKXKRnCLpysCCwYoX",
  "key22": "8HBdoQ3fBz7XDajEjAHbUe1zaLRG7a54jFfnSrqjNFmHBr5RhtErbiMND1cCNXudamMcR8b6LD5SAsyfoNtZGpR",
  "key23": "5AFRLPfEWcHa66NSS8YyfJoM42wMSRhtLsWjdmGuMkhpJnFkX1WwCB9wCR6Z9Ejy9b7JBA9QeWMvbvDzD5y2KoMY",
  "key24": "3v9mxgE1Y54yFKwy1cL3u3x6Ukd93NvPq8a2WWkCHB3C3nVzJY1soTJmWD2JeRSdDQPnREfroL4k5X4fib8xxtUf",
  "key25": "42eezentuQkUB8kxwKGXdC9BHLfZSzmBkUtub5WdzrhUmUvQ2LGcTdW7668Mun6WyVXbcXB1RnmJfNefBz3vemDA",
  "key26": "5GJxxAad6HJgFC7zrC9dCFhZyEVqKgNmDrvRG2PEiG9BgYUy5n6myZa18EjWKyaF7WHJ1AchJxJUGrTtymuXiD6E",
  "key27": "4wNQxZSTh22nas9XGBztNtb7Dh1mzjEVcK9wzBorYULu3x1Qj5LTASDw9LUa98AujG8JHmXMfqUCn93qVLs2tafL",
  "key28": "2iwovaEQRefXyn1ZHovM2zDtUeAy5MpQ4SD69uQAkicPn4CvepgZ7ZfriR9mwQhpzMV8ii1tUDsZfvU7oFHrCAbN",
  "key29": "zYoq4RcgbkDQvrBTrfBeUayp9EgSqK2QRkUFpTTctGPnUUgtfNQ6himwyrvwm4aKa7tjHcJUAv5pwLcmisWMJm1",
  "key30": "4vzPdbRarC2M5s4exsjL9PZWFGw4LZxLUFwhsJ2p9UFjMHTAzP7HLjRZmMfgqXa9gcP1QniQSjRfaD9sGo9PMP3g",
  "key31": "45555F9rtXJp77CzfnfS5DznhB9tsfGmUueapWJ7y3hgWv16FcUcFdVoMyKVnMghoj6fWVWDLF2stnL9vRkkxXRu",
  "key32": "66nhqZiT4U5bjtrygq93hCJ96Xi9hdoQ769REY8nkDF8K9vxFKksJ5rYjSJrTkt84k3Kq8qbcM2wtop5QgKEDCXz",
  "key33": "oXsHFn6usr9iGVrs5Vzj6W252dXzrPQPyaUYuox2gk94QFeabjRe41Smw8pLPS6PgT95gSQyW245WhAG8b9DAtL",
  "key34": "5kxGSP9x4t7bSziKGGfzXMhm6Xtrra1fXNe5m1NRd3NvZjP7aTByLpinNoGQNw1rvT2APyVajPT9zZgjtLCxit1R",
  "key35": "3n7n2q14FAi3myf8GKxkY2dNUTGAgpH95fz77Yejp3Kqya2t21n3V1rNcz4yjLYTE5Fbw5psMtzPzygZEwFCPDLN",
  "key36": "34m4udTR7jxKkFYKuuTt248FhZPRgQ6N7zbnU1KrZ8yP2rEVDapRbMyrJhkgezv8brDp4wwVfjPg5asUHaT3bpD7",
  "key37": "4Tfyv3WF5NZeiws2Ccw2VBKufVd8AroX8suTSfhN65ETA86urfBA1ijWBWm36p9KUECiicgsdGj1ztnFebdgM4up"
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
