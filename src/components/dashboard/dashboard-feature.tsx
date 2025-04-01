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
    "2gBd6YbscowFjy8EoY7fcu4x9J8GZaxFB3d8cJTzPyRatuVFp4FKDaeaYiCKaLyr2nibxBmmXXH9hxZR8i63Xmb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvKnuMbqvVYbsq1zwpqL51oybnCcVRFC3NtSgtGb3gbHT8H6jf7KaWzAkk8YN3spCJonLZ436Fa6EaR7RjKGDmW",
  "key1": "2dRyPXwwuZhe9wFcHTfH6JGfZTRgWkyuLZTHChpXyvA98PFSL2L8EpSiLNu44T4D8fnbgak6G3UKJ6PG3nk51c14",
  "key2": "4gHfvy6swBKmpZzRvRLeM76c1YmSKRFkdM1NZbuuz7KHg4VHkyjHTGANrDjyCmS7xVnEoUh36z2rJnkuAZmK3TyK",
  "key3": "24zMEjVkEbixmVfmmz4pg4GR73gNRwn3SGsFwaETWgM31DTmdePrWjh2nxxJN7fBMWwQNHBjrMoKzFhsomRJ6WpK",
  "key4": "r9G4E5o6vRzr5EDML2e2dAqM91hmG5EHbEEV4imAm9kjnziCQ4fRQNnRXaaS72fa5AbWSQkMi7aTXaBHaViycM8",
  "key5": "3aAfEPi6NDBbwEDfuz1cTnTZuMXsyWNNaJR7wVkLqaJxCTncfwkqY7ah1Thgz818nLYzXWijQn7YoPM3Uik7E5mb",
  "key6": "4DCfE6PMV548X45A9vejRdiNUnBjxciAaR2yeSZsJ35DPKKpjfnkCZGWsiDTWDEtZBE9vtjfYbM7r6d6VqFPfqPB",
  "key7": "3yqKzFMLe9F3Y1XLoELHpTZ2zh5CtumKs7UB2S7nwvECh42P1CccmoE1iTQpibxG5ucDd6gP2obYXD8eMWmLETWf",
  "key8": "T6RJkRjs2pUNbKGQkwPTq1zaY7aZ2Fz7LV9mfsXgsKjGUdaytiAc4h2Raedcm2Edbo9v4uc85CYQgZon5dsPV9p",
  "key9": "3LQ198kzZNso7tUM9Du1CEmP4weaGsnSmV7AA9nUQkWrXXgZQnKeXApQ1a3hcF43ExCRgHYttbeMX2wVEeG2YB4k",
  "key10": "4N25ZxvFMzc2cHcVobx2qsu1yx8FqKWw2s3nvB1tUmbWMZQXS3JXtbPBLaVhNkUq4Q3gU1CRjoUWeUWoP5sqNbKP",
  "key11": "4ir6vLFjhEqKkZmq4WsiqDJ2nTTskkZuCPvUPwat7GvVni4xFxQWYeZEnA5L1ZjyE25yNnbgBNQ7EGpuhEVaa8y8",
  "key12": "67S1D2stKajww2jS7gqnnc52iqRKRhFrKwUZeMUees8N2H7wdCN3unw5HAtNj3ue2tYDoVWSCfcNmA6kzPgoj4AJ",
  "key13": "5BoTRoJXebWSdJNcbyGvfrecVzWuB24uRf6boTfhWSxmuYkwvWiE5gMLJSKruSJSLvkPncBro4xm3KfPV9Uj5tsG",
  "key14": "PSKYfiZTQdxavCnM2w4eZVBS92dQgvnzdgmizYG23wm5Cs5or5PK9FQYifaz4U3NnTnvGHuTmMGcQSe5a6JwqSy",
  "key15": "2LNAMe4JaiEVUp96AUUsTwek8ZRpDbeAgRgfpcD2kHfFjoYLc67sAdfDHEggtJqyXehNFdnu9uALZq9VsgyvTt3p",
  "key16": "usbCXcwjnxhwccDf95ZqnACaDUnLUQRrNpzbUBYwE31rJc8TtUVdDhUDKesgDLnghD9ZhDzX9LDJwv8eanvnwvi",
  "key17": "5k5sLacRAERQZ2F4ocTVqQfB6mt3492GUtAeacEtXsbhg71ybuKTQ6S6Qv9TBpS7uWSn61FpraKPnQdzjXAdpnSk",
  "key18": "2SmAxF5kXsVo83evZYtb4ErU17ae3Jmv7Ljc5sfBmieASGTohnd11W8VfCspLcs4M84okabdWiNFB13k6oBTThF4",
  "key19": "5C4ftW7pvqYPEdeQUP6jCmMZkAzcRnVjsVwwLCwc39rSWDhbSVFdwc5nHX786ECc83q6g68uDdqmGx9qApx9iL67",
  "key20": "3LWct9zDxzzbEZPgbhcAfqiqKMKbZf6Zpn3dTecKprnsYHCPSU74Cx9iuaHtoNdgeaE3Sh8ZNo7MfmjeYvej6f8Y",
  "key21": "3Wg5ryzDBzu6C9ZfP4R7JWiTstLWADS7mpgZbShMcqyQF75C1hrGpeMGKoyosUEgQXoTKVp6DwAEQGMS8YGoECDm",
  "key22": "2ZZ1HC7q2DCzdkv56cPGVDMbpHfvyGSoRVUFGX9z6tiFCYQwsGnUdxUFxVk2TouMXJhwwpbZ9a7CXKQiqTbgjHw7",
  "key23": "KqVNCJypX6noELnNQfredpwHGRZ4kc1WNWhtC1cDVfXTuYpG4iitMx7i8KLUksFtm1MLbRc8WBFaDQn2BH9Z8t2",
  "key24": "4ax4fFUmPQ9SrDWqXNvFrU4RWsbb5v3r6R6wtd6QnBtnzSLtKPWYfPNayiW6UuGB3yaKLYWpPBTJ4KEXoQVEHmFk",
  "key25": "YN6aJo5Af4QGxJK4hWAPL2c9tqydA7gn9pMnyeARQLWDwyL1MWsQR5si4TkBPA9A6bfFPFjMgaJEtq7dEjL6pN4",
  "key26": "4GjfnZZswD61P6GZBVq5XHTtc9qJ4mm1vAUiHsF7pq2hBcz7tpLyqKDZRwJt5CLhbqZg7JuxkAqKKJub1F4uhfLU",
  "key27": "AmFqUoFYfWNCe4cNSYQRi6ySo8SmDpkmFHKCU3SPQQZHpTBo55kJTWpUMQuK9miBzTDKna47MqB6cA8FJnsLtYb",
  "key28": "5xpNyErRDgiRPn3WS5ZfX9gyrWoetnLW8nuWjjmEcM2s7U82kobFqNa25RPQSH6wCKErybDYxyU5ygxU72Mf2QL5",
  "key29": "3gByJu2UzAZavQ896QbZ3GZTceXu1aqhb73SkULRSqqnfrHySjgQo99vExj8zX5U7FMmFTYyYmD7HKk13qTWGKgq",
  "key30": "4xQBQVJfpqgu4TYtfjsJGeY4EojCuji4t8iJsuYCU1QDPhg97ZzJ1QsNKC6iJCWgdp5XHUvYJ2EGEuUqiqcpBGd9",
  "key31": "36scMfEsyD5YBYjJDd2ctcakonYFhEY81HcwqsW3G373xQ5LNeVWq7QD3HgqTWFGnLwMHEEn9gNhkPM8nssMMUYt",
  "key32": "32KAFXkjsXRpSbXrhRRzjWsrAvs9tnsdgTDELfSdGHcDmKZUeMfcZdVBKQM9hi7opWxDFqGazptL7QezGkW8KmCL",
  "key33": "2tK7W3ZWCe1CmNvhCqnvErLN12YPh63G18cm2tAqE5qiWL9xxuZBVLjtHkzGmwD6on3nSAH3Km6wyXharXYejyWK",
  "key34": "4bEJFvz3Bg4zjKSnvdjQXBRnQp6ncZRksVSycJpRtJdE983jvKT42dY9x94USZoLSpTLMWkbNUZ2iWSDKi3SzDbL",
  "key35": "Ls9F7wYrCEjxArdgefwnvjng3wUthpdECHPqexLX6ddqU32Y61158B6WfGfwNqwRZtv9QYKoktpiAMZihNYa3vD",
  "key36": "4iMBH6G8XWH4K66HyczWjSX5iVhjmgccgBUeNg4Rt2EhfF573LmWbnzAWg1dcpi1TaAzjnTUzBsxJrWWajiRrejm",
  "key37": "3jhkBpAxYSJD9bwogwQ7sEXSpGZ4PUJ7h7enHNqX4XPf4ej64RzJUatXf9WMWGZeGRKFGF7spyX4p7cyN9khjMhb",
  "key38": "2vxbgs6fC5NPugTwrsBPxVcSahkN9fAUNedtzv5MQZsudgmTu2mdRdYYiNCNrF6X7gNMSZCU9eg9HMi1E6vpU57E",
  "key39": "iMMCx7qjafASqVaAMvoK6N4jXuGUe2A7E5Mvwknicy7eBCKD8hZc2QeL9Ufe1A9x6Apqf3GhBneU1WCGyAvh4aJ",
  "key40": "4YHS4bY3VjjUQAMaaMq5T38KuWcKSCsErUwvYj4rVh7bCFS4ZnZcT9wUMD2z3oaRZyoYRzzTULWCnUQdg4WSxLCM",
  "key41": "5vaXYNVsGq9LzM9q23XUpBpQjffQyqnjTSMLyYvFyrBhA5xBbre64P82J3ME2q4i3Za9RBdRke9H3zXGpeMy2J62",
  "key42": "38h4sByRpxLMQbiZqnRW6dwKeuWo2VYaaBsz91nAFSM1UxBJ8P639jJUVWejuUXiH9ZczjM2SdrXutcBQU5pC2h4"
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
