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
    "2eW6wPv7MBFD1NU7AudS95ANC77LDarpkWBncf5296eRmjL6Lo88tnpgTq3HXH49ofmNmXRoZLQqP8wXE9cAxsyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdLNyKiC7sQ9TFjGkxWFs5kSU7Q8y6KJch64HjiMVVJ3XVPmtXrzMu3epvozy9KkB7mGgMHnTC8rF3Dz2zWtuCs",
  "key1": "54658BHBYzsddRm5mL3p4vqbUTZG1PD1nAjtZUCYRMyTXkQnUK21GmMatCqJBY1ukz8TGfezt86AeLFpffVw4PS5",
  "key2": "YsyzuiMpi5NWnDxjih7cytL1kQ4hXELjHyNsKCcA6uo4kpmQL2AstLv1yfQ6GSPD4EnMALuvcAWzpQX6Cm6KbjG",
  "key3": "5LFXERfi6JW5ubeZm4GZodZKcqNhnt9p6w73jQv7sfg2Yfj63AzSP5zWZnMHgFjphHcgeotGCfB2bMtAtRKKntr6",
  "key4": "NovkdPrYHZtmCpdbxY4ThujYDEQvcGPvqrQfNLhg1xZQFUGi2sVZmrbTjKCDKgxthX6bQgQQ57LoiiLcrgocH8h",
  "key5": "29XpTsFDKRmZncWHFyZpArEiSxZPiQKrFNB3opAXczrih7MTvaYKzTHsvH5252HH6HQ5UAK4RP8E2YaPEsEZLvG1",
  "key6": "5TsvDBJwd5r5yePnrGMRVoVq3SpTGbpWdcrAUUWJSbFCHsGmPKhni6KgYKbqwqampM2WcQcVNgAuM1CjyMaWHnUW",
  "key7": "QjpGanuaMu43wr6hYpM9rcQKW5Wq28h3Bk6ykVm8S1fPJ6sDBAii5AqMiSednfCLKYJZHKswQeirCpbXrWi5WzY",
  "key8": "5mGBTRcNTNXS2cZBLXNUwAiHiE8gRnt4zoa6VkPKG5sLWcJ4R1cWJwRdBn1y577yBtz5rzz8wxz5CNUgaHo6ZFsA",
  "key9": "7s1TSucnLC5DoMqYXRjhUTEL7JTLciLnA1t3K75BzncRQNo75tW4trKgYCkp5hNj6T4Nq4RK7ia98vYFdG6SSkh",
  "key10": "3pZ8wcZuAD9sCnFeyXiNsWdYF5nkw8cFY6bUGJiinqQKEKU8cojZWQQm1xh4FTH86wKcwettudXF27rBtfpjg1BB",
  "key11": "62fCz5ZMY7XkS1KJWrEAkDArYk5MNiUQJNfxA9SgL3bggNcHvfsj9CkbY3zmjwWBFApSQ4Wnngebge233HitAWvn",
  "key12": "577qiLZhp9uRTBydrqLPRxsrwzXiYY1cGbiZCDM2VbTfEY52HwqdtvQwSoN4aPQDi1GYkhQz49HPfHvXAnmjetPv",
  "key13": "2KuVUDEeut3NRhAXPw8UjhYLDcuVuNot8BArJD7vQ6WDtuJbr7vDHJKLjyniHfwQaNnCpTECrnz6jtS6njybP4cs",
  "key14": "3pfgj5hKcHsFuk9RpGfD8AUpzX1VooXVakEbhw6v3h5Ew8qC3ev83tNHq9QH6buo7Yzrp7XBHvq8TFQCw9kitDeH",
  "key15": "3KguqYrtHG5961a17BbSkkTT4ctp3otkE3WyTanTdmsoznqGs4sjESAsqq1awhZ4CYDSZVLm7qQp4wTK3b1WA9SV",
  "key16": "53TpMu5RKadL66re7YwJoD3GfvMNoV7z62cnKZYBPG2ivoLnPbZQHUXyyMgDngeG7H2Koj8w4bK1KJGgRjGTpgUJ",
  "key17": "5vGHee5zJjJiH66ePR4ov9DktYxvGUMsmJJsPo1ac9wBCF1ruGAYfm9GxxyQgz9QWU7XdA3bV9CoJNNCiYJP2yKn",
  "key18": "3jYvuQztydNMTqfJK2GRy8Mi23sHPHhgCvhZUv2zYH2oGymjm6ps1dHnR2bL1T5YgaqbV6C8cNuUzVCzLgqdUCdY",
  "key19": "2Z4hNXZz479EpXWHXXxEYY9dFoxvVHeA2USju32kun7ALobcxLh8QkGMtL7jaczRnqC5iygWixcdpVXCgaJs6Ean",
  "key20": "4hjGVShUhBnvZXs2a6MbM9rGyrhxkEmY2uSNw4yArX7Grm6dr9m2R1bb3LifMhtN6uVtcDUSNpdm3fJMRtQmqygq",
  "key21": "52CZYsFa95YE11zvbxnfMxJUkbnERyQUKiQEzZbbUadw8tyAtX5axjkHieiMGmMigFM1HzumZpBeUPWLRThydQNJ",
  "key22": "ZspisYQ647D5FScHwMK2e2NJkSgfhhckQTJKi5JWJ8d6e4QZ21gHrwDCmzzzh83HcfDWwQFkjeWC3HEXMutY9ka",
  "key23": "5CSbR9QiQYXDznXzHdGEz7giLC6Vf45G4s5uaF6T4mLk6C4mkhzY99dKmo27A47imVK8aMmBmfJ8GXSATK9oMRaX",
  "key24": "22pBkyF9rjVsFDB2L7VQekPHKjWnBP7iwBShQSaSbQxzk5avmnkeRYGwYfT6fuPxH1PM8t1y4qMhkrmMSTeGc7k4",
  "key25": "5Zkswq37HJgREAUdU8TueMtPw7E9QBGi9ZWzjqjBUXorVgaG5e9pUJYmAirBXZECha7WAXmq6fDL6vknrKHj4i6y",
  "key26": "DDbULA67G1EuEHnWSvADUBuYfb7zGtyRYKL15wj7k6QTZNBC18Xxe4aVX3r3pUp7xv5z7BRfa1FH7T8Pj5hmXWq",
  "key27": "4AY3ecp17Z3Ryet9ZFdz33vTwiw7qokG7JRoUid8T14cLf3yNtNVEPrCC4kQ9zvGkeEJh35BwjUZdQqcQ7Hqn2SM"
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
