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
    "2EEdRxtXp9VaucHWKYDTbkERrBGx9vx6Ag4J89DDwF3WVZaMhc2ZW1mriGBHZGZkeqqN94krFYUEfQPKVZbM1yko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9oh1MsYNC9KcGuwyaM5vBLwdF13qddAxTgNDQbfRHCVc5cBWZ5ktpowCS2sZPatnR4fcjwVhnhxF5axs2vTn7BE",
  "key1": "3Y8Hxg9qrgUpmbdJuniNbgqZcC3y1yMArGv9WaD8hXxUxJSv5Czud21UuafCiXwFjXh3LeuTeXCRMX9KJDchbMrz",
  "key2": "3ZpgPBp9rR3bXATLNdFYynpjU6eadUbkn2auV6gCZYUGkNdDuLNpcZVofVBL7V1Pm4LepsajbgyZNjKTeFfBfSgN",
  "key3": "3npZVwRpchhaXbUWzYUgRfTZhS2bBJEpmRyaqXGdM6uSK5PUip3Hj9Svkn6WQgothkBvZWoiAeCoPatbbcJSELBR",
  "key4": "5wyxq5PtM9YiGfYbKeSMCucmcDHeyrzZkskZ5XB6RghmFkysSYEA8Jf3bzRk7Re1D4stce1XCb5RWj2ag5hFwAsm",
  "key5": "5hYNrWShWpLPqBEVYFkVkHWB1mH7tKkU5hXaMfSLWhovULi5iK4BefbrUUb1K8W3D75ygZe1uKHeEZoqSZ5768un",
  "key6": "BoNDJ4dVTqsN5gEW2XiRBaDqj2MAcrRDJtmwTcPvdXEwALJBfbtmtmfQqKBUrraNrA7rmcizHb5Z4ZaAEzpJDNA",
  "key7": "2TjJ2QebDCK2VrznTjnUM6Dg1x6yERDBdAKzo9AmKb7DDejK3WzPbNoqd1XmiejHoakZbtny9FmwAJB8ckgY4xzv",
  "key8": "4pWRiwLhzMZisBLNP3hxxQqpZGV5p1yCicYJL39AKZvAuo67Rj1eKMkbXuiksH3W3zdwqwmxcv4xjWeRf7MZzcqS",
  "key9": "W12ir3YyH9DmVZBihj6myQbJ8nrjy56NJccvphTeRaXW6A7rMoLP7gqw3s7z3SCJ4VSHbSGsdSkZB7aEhy9aFKW",
  "key10": "4w26djcqsqkEpZL22gJ9kTuTNY741wYzZTzKVaJfk4acQ9hMAws92Wkhb92kwALc91dAQxzbxF44TCwnT7JjLqMR",
  "key11": "2e9zDxtRDKT5Ssj8nSmJo7rYoR6JsFZy26VQkMGpMhYBDLAkxfXjsp9JnywvT3oZycXJduRUtVfFWRUDfonxQ8up",
  "key12": "2Q1386FTt8ket4DVpM3HrJZnrQzAr4jcH8LQDUWGyL2DXaGDD6A4wyGd1A3NRGASuGpz4nmBYRB4CoXLK74cpB8A",
  "key13": "5DP9xj1qhdQA6HvzqDmXfPbACpAMH2zvoRv6o2MHkn2R8Tzi6rey9NaHecbcp2Hnx3CGFn6WupSTEGGwPF9YFZZj",
  "key14": "3cuWRrnA9wdaGGAFxbQ5rFnzhkg1pYGM4gUUq2GeuZNfxmz9gRMSQijBmPkVQWBpxvrsNP4TfoJM9DvMBEBC9bW7",
  "key15": "4UxmjNexK22EdFmHffKHJX1SFeEt6xBDao1322BCdYdBuCbwcY57P2xaVuwVMSmPfgNrYJ4UarLRMUoP3kfF22z9",
  "key16": "2kddivihSHZev8nDZMWi8hG4UnyY2NFrZW6kzwbrsSWTFoYP6MhZTKE3xcaGrvNNRE5gidTZgwzTUwSNNKPHAcyw",
  "key17": "WE5hZcj33LUcZKpw74Bw3Z45AoEwQcz7qbk5Gu8D5H9GWgByxJq43zfeCVvK1jozqPkWKAie772XJsFYPx5e6re",
  "key18": "5jVoxB1LkTLrufc17zvGPo2beL3W8RmVpWJDx5xo8DogyVUP9a9s3obvEEwqAHfWYmkzaXzWfsjRcJWATZLDbW8j",
  "key19": "5342Aa4JEmyiuT6YAaquZajZdcVYxS2on6PXs89rkY2knwQ1H1AAZd4HoCHJ3VACSDbS6nJv8nxLQZAd4fDZFzf9",
  "key20": "28G6owQRoZEaBi24tYkjNqwiFBjAJ4aRjj2Hbgofo22fUYH1wSRfoKDzbFrdrED4dqe3JrYxzVsoSmqTgJUwYrBA",
  "key21": "2UWarWGCqdVzetpscSc7i9wy7PRpKqKH71SFHbBxzdh5az2coA3DResBwJiXdytzut68UbWLCoq9FDMW7hq649TV",
  "key22": "bcaq4Vs9U2hREwxAEK2o1HsiurSK7WXADJmLQZHhmBnRMhUt8jqy9pNDvWa1DGnzQqWCLKHvE5VFTeps6tXJM2R",
  "key23": "35bJ24i5eHr6ub5pNadgk4GHxGfBZgrUB6JP7a1SAgdwLkRiECK7TNpKMkSVKiJJpjR79b2Fkby5QYUbF35g9LCF",
  "key24": "3tCgkRovrVXcR4a4wsmY8gTnrqzVrcZgAry8XkSZPUawfDbfceWjqdcEmayJZoJNFchwNwwdkJyYwA5oz96g2BFU",
  "key25": "4Wf51ovh71M657LwQBLYNh4xbbqQLDECW8JY8GTzsxw4y4q6vEFMoaCv1PDSHf9XUA85AsdxwsE4VdnVsbjHedEn",
  "key26": "3KiAQQuWA7hj4LSdmN3UvL3a6m2UBiQJ5FSVSm2hMmhdTv57V2P6ozw4Adn4JxSFCwYZHa8qW4qa52Z2UNQKpQBh",
  "key27": "8DehLWrVjVbPN5yXYDKyJ7itJ9GqSUYVQP9BpMdpmyXyR6fH1EJRtmv4zRhUyvJYaxKKoVn1adkv3k3ckuDnXGh",
  "key28": "2FJiBJA5ejCWVPVVSkUuYUZ2zq17opP44SaPtvscn7xfti3nhNxSJWoCkJ4mw1jcmjk4NVxWN8tGuhwELgUzdkER",
  "key29": "4b8PTbNLWukuTaGjuwHjyDZEDfjDcB8Yf96pDAi2D9VC14cRLPCoFyG2JKQKctvmwH9mNpo5FZdg6dB3durnRB5o",
  "key30": "2dbnYRVg3tvqmy3WHNG5ZsJnBpshxKt5T6s1CnWGnQAAARD8FvNiWXpzrwo9G8A3mPkpXc64nqFR91qMatRMrdwe",
  "key31": "5GzHEJGvb6wxfMcUMwVFLvqKb9uLnyR61PexM7FU8r4GXEbQSANPGifFVMnBBbELJ2BhdQavDK9anxjTwyAHaeGB",
  "key32": "cFYoGALNrYdMK8ov9baSEeKYpWsvsMs4T3RikGSCy31inyTRWsunFp8ZKyvkmHu9BgRf8XyzTZXgpe14qr4hjmr",
  "key33": "jPDtoexbWx9b4LGq6TKAAUKYzg1EFSvdiDe8X1fvg753T5YMQvnw4ZJzEwYJCoQVu9UnLuyFoeAu3mnbZXof1US"
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
