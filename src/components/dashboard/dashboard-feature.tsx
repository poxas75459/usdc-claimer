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
    "4UnFT7x8r8Mgc5mmcegfPvH7q8mzKP54NpRfa22TDbSthuFnscv4NxmBjo2bVEypu3Ysv8dCWABVpEDjg4qWCwDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juK4ixw5oWDJZufSBQZeZEJyHuFnJiyvp6KNKT1haehBsmcJNJiDe6ghbcskKeJQMvhTiVGDyvuFEhDGBmwr4Yb",
  "key1": "5co6fVSExsfvWm8rT98AAfufxgqyNeJ5Y38xmfBBa97npUCdnTKjqDJPgs8JSxDdJHejfAJ7ZK1r9fgpuZTThKZh",
  "key2": "65TtRKmx3tAUyLbnTEzTCKV9ikV5oetGasTCXRco6kUFJb3iF2vr6wb6gkcvRRoubezUUfTi12M4cKxjsSj6NFmi",
  "key3": "3ZbfeeMjBeGd3d2sP62PkxoujWnkUM6tq13Jg1Hpmtiw5NY36baRa5aaCB8ZwFnPL7hrC3cKqJUgh5y8yZKS3Tvo",
  "key4": "4dHegm1nJCUTQvRRCiCWKpZ8N9iT1TvUnCwSxRJVQcnnQAhAmD7qVSjJ3bTMNdJ12rxMqhBkMnRtLHXwKhCU7hJt",
  "key5": "45t9oWa7mAGQzfxF2UbR3bbyqmamcTBBfxCHZ3GMoRzQPBp57HkC3GC91NdiAAY48mCKmQq7TRGhi3bDkKUw27Gt",
  "key6": "HEZS735m8AP6kWTXxpdVTTg5a9Zr8PGKkHzfyEAyUUWzLgjyujmTEQVXzaf99rxscwfDCnpSQ5gGPHhCvnpYxau",
  "key7": "ZoZsZbFgaR54u9gbqjvkDwNRdgp7GxyN6Nm6uwBxJreVNnCktgNwyM94KMuivL55cVsiPv5XFwyEGeqbs7hqSgq",
  "key8": "w3ZxPPVDDXDsjjZsvbAESVahyEQd7c5MqeTP18XnwymhgjFjsT5fdMjc1KFnTmE9EgmjLuGcFHeugFYoAth4cGX",
  "key9": "3jXCuNmwKDoAJ6z7ZakvPf6NWDd4xQxEpck8j3S8qgcRtFEFiS84NEw63eNe1Ddaom9Rct6qLHtLRBjN1EsQdoiM",
  "key10": "48Mgia1xrDpmcC289oVxx5jsPuauWj1hkn8umSzdc2LKHcA1bwCJJQmk6i2ZiBSvJG7K511LNhbxHZquNgz8bBse",
  "key11": "3ggPH9d1BaBdAznusiYSnHktTz7Xb9vD3AQi6fg5Lv8nbfTv5UE3MXod4QgsFJ7GR2TYVaxA12P38Etmw5LRqiwS",
  "key12": "2zgBo9S3HgHHHYKFYRnhfxsmDN1KwsxL3xcbZH6LYYd7rN3PdKTrqyzBRwNhekZvGEvQUsuFm5bLhispyUk2d9Cc",
  "key13": "2W3je9fxvc6PLz4XuFYUwxPFnRJX7bdKCXp6MLAjfAgphRvc5PckaDzVVfWksnCkCfV2Jc2iepoEWEn725vknTWM",
  "key14": "4Um1JnBfKp6uBGoJsEPyGsA9Ue6FXk4CQGNh3bgQ9iBvkPDUgkbCxejzFMoVtKF9nxwPnx9XnAAmkXHfF5zbS4tt",
  "key15": "5DYQP5tfBudkBPbkoBKJHidHvZVLHpwUkXjkSADtj4HiBH5bmiCxmgZC7s2xAEBgvSzMHeXsTJrgKSqugCG4uxqP",
  "key16": "scy9cAeWR7XdPjfVcDnPwd6uQBgwY8bvYURvyBianKWqR6zhiqDU7bkDq2pQCU5bxTLN8A9He6hAtTrPCypTCfb",
  "key17": "2SnwcXQoBksdsTKsqB3AoLDm3KP2agT1XC8bqAuWkXF5mowinMdHkXs7my1erzexs6JdRxx43iyNbbjg1STfVoSg",
  "key18": "7sX7zQNFj8kwX949R4tHsu46QkK2h7DPuQGRrKFAmES3AJc6AVWzLtMLpr79wzjbrwXozWYUXXAaViFw6hF1LEr",
  "key19": "4vinzKXERXdH1kwhW8ugstfKL4LefCf4dNBTeUcKrF7akstj3JZEmoTU8zqhh82J1VmannjtDD1WEqa97MQv7n4j",
  "key20": "2mCAeAcUWExvCgEHgn2VcPs5jR7CmAZTMHTNWXtxGTAPFWvtJRvXBpbHbjMpLruUMjruygytgV6Ew9JnTvcnaXoa",
  "key21": "3Pj6xD1o5QXSPNcBMaPi6VsevbiniHWUM6ga3EVS2gNBoaXDyYMHAqwgnSJkii7hEdbUBPx5dUEwWGciLGfqeDyi",
  "key22": "3tqAeR9UY2XaEiisjWoAH8zvYFAqFAQpNmqd4sEPcW9kxvBNonSRV89fMAsXjQVKEcJsRXo6JYbnNyH95QLVFP1e",
  "key23": "4583tLJY4g9zw3TJQEvEffNh61m7PYMTyxJXxmMWYAA5S5b2evaqfYn82o9jdyJ6PuLLxEjFbVU81kRZiYCpdw3K",
  "key24": "66j2X2Dw5JJrpKkdzH2JGtJoSpmuM2VDwZKN5QUKw6LVTHXGTjhS2Fj4MLJN1rVzup7gGUDWHpe3GvBs7vST1dw6",
  "key25": "4Bx9YQttAutu8RZFt6bsLB9kPd3MKy5mHUnFGxvs83YcgavfroiHZGtZbPfYiHW5VFjXaCNZh3pM9cvd1336mcvi",
  "key26": "58PvtpBANXfgHNgco4jz65Xu18gksGmyWubT8mgXq9CAGkcHDXb6vbUri2cMoXfFceT5gQpYfa9dNnCQCQDKtb9T",
  "key27": "4GtSMyych7gWBpNoRXE76WV2ENmbJh7VnMeV6xXPHfHQPKtBcLAkDFV6GmmPfToBKqao4KrKKyLcXfP8FbW1bmHb",
  "key28": "5Kc76Fsm6SvLNgP7ahe88LJgFtQQXNh8xbpBWCnv1L4zgvYdaoMuXkXGfJGzcApRVKBA4KjPR5wRJ8eL8qSdCZdy",
  "key29": "4krSjKvcTAeXEdrgDK2StSJ8xxjDGFFpkUtk4uzWwESjwm6Ec3P6aupez6wF994EFycRc2v6XXENTyBxQeLSWBty",
  "key30": "5pw3CGaX7fznTYjBe5V9wBvCYQrjKVynb146kTsNUJHqrKUQgNLRtnuernn6ZyBs3QEnd7aUfix1oi1diD28Wgwr",
  "key31": "28fxND1JD4ioaMSXfENQTq9GBYobgTKBHaUJXrWAJbadqsXbr29HXMkq7TjBoy2gQfYLo2e2PTmjfEnQfqyNdLRJ",
  "key32": "5drvkUGx8YW8Rwy8CiT9TcUBnkoxLpVfFVahhvbdQUKy3bAPysjMAfA71FSa9ep4MNk6X2ugBeXfHd1fgSusQo5o",
  "key33": "4ddTrNukcC9DB5NiQgWmBfepddHj7UWKAotwRYHPXyLVaES4gGoTTpncAQMW7yLoo5DiczrZpwPPZ92r1SAuZDio",
  "key34": "ogPKq6Mkf939zKhNHaUJGZPSncvYvj1ULEvorV7a4iBj522SM6prhTaBxhz6Fnpiw6zeii6bMGkeeAfjhKun2WP",
  "key35": "4fhhRvAxc48EWAQHPWoHyUhNhiQSyXQ1gGt4uEfqKSRtQLH2ozBtcNzxAuNBQvCcD7hzhKAuaKyynqHPTa3LRhyd",
  "key36": "5H9wkqYmS2Cr4nxXrPXgPusASxSonaozKU4BLKGqbeM5xn3jPs1mM9dwKMjPyTfCJbqhXQFpzGGv9uWkTZSP2aq7",
  "key37": "4zwBTnTLddqch7T8nYycfWYEN7iqT3fXMyjb38MVzBiRKtKJo1D5Xk5SkWahz3JFfHm12qQwKXZyhUdmGK7hbdaP",
  "key38": "YL7rBcmqLcn5bMk2qXksVzS4w7ByDCJG5M2nrXH7FdoJH9vMK4Hdc5NokNGfYhbpHLiLVZE2KUzSHaAUcLGhFHu",
  "key39": "2867Y4CEK9QQzxpst8NgtHQKSvPrbMWR7QogevHKgxuYzPD61bxsudKQ8uXqXpZA4PMZB26E37QQSGpRf2J3ZD3M",
  "key40": "a7XfzUix4CZrgJEbJeNz6seNpDpbRahPd6U9QvLfVQs3HDFAGkQvUkDYMHfzzN64JZyRQg9LKThst3BxBVqJv4m",
  "key41": "2ZscPYwVBL616h3Kw6ci2qmKGpYh4kE8FuLE3fVngNfxebK2jUTcjTBjfs6b87enN5dDnUgafMtc3EKtyo9sbDtn",
  "key42": "5byp5tjKGnEptAP28dmBJ6nHX355pbcvbSdKMs8Bt5YfnYdP587PangXzvGb55XhVU2VEkniPiLZ8MSJftpmv2mY",
  "key43": "4aSesecJ5URFeRCD7BPuKge9jyxvtfCXN6KsTcmK66dzZhNT4qCt2sb4nVxK6GAc1aKm8sHkHSvcc8qNTJAmaa5c",
  "key44": "3S2kCHPrGmgtxnge4HT8SoVnEyoPeGVEpFfXiJVuuKdUnbZaDvCJqXnzpQiTpzDuHtjfhfNnWPWpjajjiBR9DGMh"
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
