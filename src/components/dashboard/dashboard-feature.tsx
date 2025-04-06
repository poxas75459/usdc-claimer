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
    "2SrUwsXAjk32tBHDUGqLq9hGW1CzoyzuNHW8sr6kCSeDPgWY4hV9UWGtYMVo66kCnKCEuTNBkKjCAFX18VBJE72v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NFpt8LHfy156i4uwA6GBBsi8NhW3HuSLwWhDAdD3v1Lvv17vDJKqQZcHqUUDyRF5hVv4D35QxxwRrqfcCsrpAuB",
  "key1": "27XHS713VMYiGD5x6Xp3MWqhH7YCkTAesb1zroYNwkceVwnvMaaLa6u5iQtsM4wCSmnFTSv57y4GwjHaQQJ9k86s",
  "key2": "5aVfTECwYhJTCHuNgjoPYekp6wmuu86WnHW8Y7MzardXQQpdGa1Zw3sL2avQKpdU5mJk3avNXjbEARGRmGpAMBTG",
  "key3": "3jMHwDSNH9RuFi19D7dyN4eBt1ngB5C1czdn6PHZr5VrJeNKrecWNtqeUCt3uwsqT4EqFCB7mfT7Gi6smTRDoSuk",
  "key4": "4SejpiNSTmy6Ud6pS1Ge4Y2c3xjzTmJypL5WEd17X6kXv31GEFRfYuo8yxvLutLUygSLFa9agW7VLwZh3QM8Sqd4",
  "key5": "3FJTtvddyrFPyVzcauxRuMUwg7MwkqguUXy4ZBG9WMwvTCt8rEoHNcy7CZoVjp57HMz2F4SDDqsiVGULF12mmT1r",
  "key6": "RvJ3mFVVrWL5kCEkH391CFSz8uWoAvvA2Mu5WD4sSoZjJzK1fDUZiJWPAXxRGphNrFat5VLXdL5QbTt7Cek96A1",
  "key7": "2oy854GZXG31eyYf7cRE3bEZZ5NMuQYmgv9kswPwtLDnHxrSwQh1Z7LW6mk8JC43G4boAeEk2nAhGFVNbCysqcMF",
  "key8": "3P5sdet2Sqm3F2qhLxtbx83PajEryNuMVi9RNb5xQXBCdKr49syk1J2LE6iFrvtv1Xwsh1Rmti24fZchuWRh8i5m",
  "key9": "3FgbGQmBcZ6XsDZRoCXbdMzGz9DFTscUehzK1iZLaeSBdy6T37vDK3FJm3h4KUzzSeT3jWtBv3RXp9iXVU8YWbmH",
  "key10": "3rgh8HrMULTuiFknmkKUkqnBZwaubVC5ajcq78FNPpMLmUbKY9PoohTrDKaKsCTXwcFW23czswr1ZZVPkQTHGnZG",
  "key11": "4uQha6D62C527PQ3DDfNnTVvZ3rEjfetnBmgZzGYautnhR224bVBDkSfuxuNERvEp2GvxbjdeRsEZaeTe7LrAiFD",
  "key12": "vgo8ePP5FzZ5U5zXdwC2KiWQKiAHbaDSai3TfLNVTXeKDsaJpoe6TuBXsRHNeLNcpiQcbUSJXJoSFSBUzYzozai",
  "key13": "3mr2kSMw4NkHoesvtZazM2BQEPucLgnq5EBdjkbh6VrPg68TNrZE3hiVPpzhgZWauUYAdVhBDZfLjcYagC4mePhq",
  "key14": "2F2dig2JFCjubYJ8mXsDWqNKg2Zzr7UQw7o8YVLo58NQYnM8heJ8z44hLJXHZNiaLUBGcMZe1dpXa1oD9heqmpux",
  "key15": "2VuQ5XcsJNTR81y69sgiFpMEy1rEtJaWH8ApFnmp75Z7UgYR4NExb31FpfvvpPGRnHRxz7zaPa179a7fgFRaiUHZ",
  "key16": "4RWsNc1gBizV8fkrWZYbghHh8XVUQDVqryeiEyF1GF7dsmcQYJn3c77GedB58PK3QYm1Ksc1GVCH8YPjgwimKZeH",
  "key17": "KdjekHsdHp9pwoFCyrsbktLPRQRPAjFo1GPJdDJaVaaYe1FFKCXVaHzfPdX2we76BA3GDtpXQWzV2BommUTYMQw",
  "key18": "4tdk9wwHU6BjtP2oiQ3cfvUZ2Fw9a8bEhyLnPfW2jm1PgFYyrBPCV7KwnKyzJmvatVKZkDuRzymkNG4hn99BQohS",
  "key19": "5modr67nxHy6wz5SU1zVHAFcQ3YYw4o38FcTmHJ1X4GYK7pdqEZW8rP4iBwH5449thnrUseCKznqA9zYWcRhdaLz",
  "key20": "4SgFhddyA5UKpWxUyAZoqMuoHK4a9NgNtB2cT7fjc5bc722o5PWDNTLHYtCC4tvQg2s3xDQMHX7fgQ6BkpyYp2wK",
  "key21": "4rMWKJZBrRaiy16rE4SzSEdq4kpuiWjcJbFtBUur77xqp9TpCiD8sXZf4D796KVEdguDEEUwxEbvMBzgdzRa9yiM",
  "key22": "4xYT2ideEYaGdqUmYZq8ZK9mF4rJT6Vh9qyo83s2EDhz1pa4KHi6rA3fTCLg4zSuFyFUjpj743oprNooZrsPwrv",
  "key23": "61c5Tpez3MnLC8XrRY6hLgt3yb5UHdRHFssKfKJNGkhr7NFuytL7dQmPVsdyNywLkGbQbu6pqwY8eZMGdFSvQUcW",
  "key24": "3KzJDwmjiTaduRtwtkzxz82NscswnwRN3jgCtcaXJM4JDfmDf3E3djesG3WYT8QK5yxhQVtu53YWQVysiJJAQGFb",
  "key25": "4oWsE2rmsT2Fmjfnb5cUjYSad3XAgY9hnPWbUoeWb55Bwack9pMD7YBybQzdYHcS48dDaYvVLfyL4yAbKN8nHJiv",
  "key26": "GT6gmMhqL4c6PbkwqbX2C9HJyo3kJVR8A8A1YzLpnKPv53KuvBSZ7JFMh5s6QWGtUJ1vuk3uX6AY6i9MMF4zi1D",
  "key27": "3TKkyY17cAbsfPuWokRLPV8ZkPTnSnagBDMTKf5aMstxAZ7LhqnWKpqmjRaaZzQDSRks3H9EJ1rPLgNGtDrE1LM",
  "key28": "4mT2giKgK9ts2Lw7EKdFMCDZS5S6ZLYHoBRuanERGcpcmjBqm1wqUAmFZD7qS3WcVPp3WsASRHzfGwiFTYEbBEdR",
  "key29": "62taukEzytk8HpM8qJKonXQvPJxkShrgJgkiUEviUeQKqQJkvSc7ZHyTA7UAHwAYVkh2dToRb9aPZ9T45UMJ3FcE",
  "key30": "HrqHMmEdsKw6yGPoQnv2CZSqMwXQbwqZM5BTNhw6NR4qKJ99TkqgVj6dtCkA5M83dL3B5GBeaiXYUYqpz2NG72E",
  "key31": "pLnxPjdFzRFZsh7NQn5DR3hJuRtmwvJc31kyrRqCdWBMtA1WMrCPgMqsBjrEjzv3Ju4XcM83235sX1bVWHzkrJC",
  "key32": "3oCqfHxuEYuDBVbWZLbRyXFJMYxjxePki7YcSQHKCHxnYCnhMyDZuVCBtcujW9x5sPbMSLf1VRdyD4a28ykbyjGn",
  "key33": "4mPpCPvprnJ5br3WGW9dMuZsxvjmuJ6xJszNq3trNZ3x4n9rVRGYL6UxvxWvYXNTq3asJit3xjwWqViyQ3PCPDrz"
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
