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
    "4mvF5reiZUw1nqFEx1WJw4AqiywNaFY4F8bG5o7pjCZcXzsP1N6V8uFUu5a5UJNYT6jaRwEPeBgbLYPDyUSEudEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FL2hZ2bE9SMtaycVxqCWK1RfcoAiUUXEoHdr76Z5b4LrfAQzXsQEfmV94Km1JRT2SLGCL9esYtKwTLubucKe1to",
  "key1": "8u36wtgqk2nCwx84NVhJ3j8z9i1MANC1MQnQAWAt59zhaebu3nwV4u8ZN4NiGjiti3yRWYwPkqJcqgAEZzrXuHf",
  "key2": "ApKSCuvCvaJeRJb7iuTfokKzxxVHoRpwSj56rkNTYLX2FqPSQAYjHKsh2bjxDqa3i1zTnsMXmTxY6PXjDGjuqDR",
  "key3": "5kz8ZBGtPowgLYDHmMQH9kAhokrKnK1fdAKgoCXyCjwBCXngUynaZ8esiNg8t8APbXkmfqHpdXGEjTdumj7PtM2P",
  "key4": "36rcWpgXJ58t3pAUsPozpHXzSh3Stt7JHavLJDELpFxMt6doQPScqPuAy6XpZit2vYKBU8NcoYU8DsK6YfZ5fiu5",
  "key5": "2tmQH2HZpqCnqVPNhetU9AXVuPBK4xDaNm8nKFPExFQfgCQE6tJah6Di6RgzkaaAiMmMsBkSJufNxZGzBQodboPZ",
  "key6": "5y6c6eDruPwLBCkqu1vHeFmBjKuG5sStukNXTen98RXqd1fqBuERHue1dst8mSpHCsr47iDkyHNamMWv1vkhoXoS",
  "key7": "4XEqzxdkFUL4PyTgBPjELCNBEKHEk28y8SsugzWY46JhaYcs8XC1DiCfhPtNA4CRiYCp7M7uK8P3SkwAnLsedstC",
  "key8": "22fNSgn1SMKZwznuGUoYYmWWgJpW5AuTtveJUeD562KdYfJTihvp2KrXkPLTv8XYv1rxG4EL8huTwrKfHink5qRg",
  "key9": "GCF1afrb8DMxC2MAe5QFC8nVsM3mLKqLr5t8BYzm9E7EgpcXy8uqVMpv81Cdd7X1kEi5r2oot4xzGvqrgDzgTJD",
  "key10": "2YATxnPYGi4W2gNPxZbXKwR7mZF57bgRoiBBwhYV9udHBtj2VSAD7bVgft97MX6Q5p7vbqGduWXG16cNFg4XpEG1",
  "key11": "4ad3fXru1AGobp6N9q5tVcN2ej98BLGPwhVGSdWWkRAr7BaJHutNpx4FvoWFq1DNc6q2bLLHZG4ScXSY63JkFFbg",
  "key12": "2ZAiVyxwgepr7RqbNiLwGL2Rt7XR7AyHQsDzSskcj21YCZJEu5mvp1UgkaQNZSMkuyKy2PRUuFC17WWgGothSYo6",
  "key13": "Fs2kCurdLV1hrGsY6vrsp4REnSjPz1zjbNXyvxuGASSTX3Njq8v1Qm57PYPj1RrDS8UQovKCY6966XxVYzH3ZPg",
  "key14": "qbPBwfKU5EoUzAef3u7PGyu7PW2xjgvAW2LYtvqBbsQGZfuzFZfX25n3yntf9yobahaSzaiBM7cdFGBGqEL2YwH",
  "key15": "3TzA29AfKKnbnrkhapZswCvYSr4CdDsACd9yFVS3iboy4VU6cyYP48sUviMYkC5cvzY4NSC7mknT41AocPJkDiR6",
  "key16": "59Gq9UFqkWsnGjZuxLy4erGo4vwmYXXhmPUZT9phpHD9tsTD8T9MzoN39PPhMLkM9wdVnLEzNEVJx3LYcAhaLuHy",
  "key17": "6sH2QARe1YXB2oEQs8DKwSdwGUWwAkL4SCZVowmCoTDPXQfh7cShh3SoxS6tFEbmH8aqmMPXmMHJ3Dxuo4mswjh",
  "key18": "DiWYWtfs4RBaD1vGmw8qMPtuDLgGQngcAsHmC6Euuaz7HxtDtKWGH7KBhxG5qQUyiQStjPbFxN8tvyGFVsSaSpG",
  "key19": "4MkeXAFGMg8UBYew2HYhSApX8SjtW6cSoqLd54zE4YAxCJgHnXhC38cFdfKF8RDZLrmKHx79vDRhSpzKMHkUTLtZ",
  "key20": "3eLNsEKTnFfsy7XgBavWc618bCJPsyF7PeHv7hmd5FV4JkapajZyx8kY1ganCCFUXNXWsg2Cu81ptaU5LvsVesSd",
  "key21": "uNtpfFA3deTB6VJSQApoYYtTZDGLKTCYn5wBqR5bPy9qxinHq6kVBJPjshPZFb2U8ZJgdW5ddcUAnjzFaAHCEPd",
  "key22": "3aAPJT5GCTPw6pARRpiFvFWhWvvuqBi7DW1KgufHnWB1qi75Ef1oYFojrkJXPjdHAGntR6LGVC2DgvTVLP9dQJRh",
  "key23": "krEsT85kmGSUCo2HtzMbcrafWZqk62KSA9VCLqXtswwtY4tpLgZjk5x5QP9EzLAy4nP8hMfkfYcBacXzqsJTatk",
  "key24": "4MeKDB9dExpFgCRcySaTa42GwS6eerPyyx9DHwfC9f7VVmdAJ8A3K8dYAtyuUDA1X93dwqamp2A57CLN7ybvBdrM",
  "key25": "9SGM1LwmjpWG7hbcm1mMfKonMpDue6Cn2cePX1797HseSek3PF8ZJRgpG1xKYMWY89sNXJzxzSBd98ACFnRXywy",
  "key26": "46StDRZRY8k6Ew4pBg3UMhU9Cvge387tZyKnwVjue5bcbwhNJUDHM7KeKGQ9DsGdMCqbSWeefPik4trmcWjCCtcW",
  "key27": "3gNHkXPz3ECq25BqqpMthM9s3zTS6uhEvUV5uvqhyw4bKAAs1fHtJNKaRiCmYADNhz3DQoHytj2zuc2YcumYhUYS",
  "key28": "3ARdwHdh8g7V2AnR7oWAfLa8k9AsRTCNrSVph95othAvNwYMg6XfnLw6EAVw7Ly1Ytvpsbttp2F7GBuYuAyJSoYq",
  "key29": "2Ff5aRaYLWqw35SA6viBpNjvWDpmm5wZmRNVUpDNPZgHe27T1MMG4aorhPWHeN1G69SiBqi3HLqqxSeSNkD7gocS",
  "key30": "5KSTmCWavUNbGkfDbEdSUTW1bZxqE3dTYSEPrZjBpR8Ukyv4mg9SE6mW8W186NxodXVZKhsHVySEzfsn1k35Pm6m",
  "key31": "2gayVczHRVFFM11kCs7r8s32XJMQqLZjkdRNzCFDs2FMMPbhm4iJMF9WXELanZfLB4rU9yvsknTJyeaEBXh6cSeL",
  "key32": "2BP7n3ZjaAmirZHzN5mthdc1nYNRFq4QLUeCY4Eh4Nx2prAYYg7SKPDypH88VDXecowstRWN17MRVgnXnzxHKjYa",
  "key33": "FrR4FhbhjUfAV6dbmwoHghhucj6EN6ZU8tjmWfGDWurjLXoyDZX5Htsi6fZdWt96Vv7xU8wsGPUQabCSikfiENp",
  "key34": "4PCo88385CHTm5hvpNjERSQ4RDPCrs3oBYPS5KYG9dHfHHDzq8KF8nBLmpEp2SFBrpHNBsEr86797mEgGCqKkCdp",
  "key35": "4hhF9YBbY1jew1XZgVyhvLKSYdfAtjpiJzobtPzzCmhjptMWztEXd6FRWDUg2kGXNfBfSv2Qag8trPihP5KNGJfu",
  "key36": "3RGzeTcjUdmWnPD7JhTg1RHPHpQHhaZhenac4cTyEykVuowRzELmbuejceKuLHQKgrQXJ4ors82PisQud2t2Wcnu",
  "key37": "5Wbn2GVgPhSXAv4J2D3YUxmQCzKJnjAzzZnwBaFpgQe132DsgSHrbHH3XvdpCpJsAkXxMfqRVgwgFxUAboKmWwJD",
  "key38": "4tfqLEzSgES1aV8y5PMryFA7Fg6k2gjLoYhzPnkZ7nU8JH7B5nBaYY4DVAhoVqTLz9Mi4af7NmyroiVrWhkTjT2x",
  "key39": "66aCMpXsfgNsStbkQ7CNXMdeiDh73GecoyjFJh3TFRwACFmfnhpVJgxqmLevHCKkMfmF4sCPfs2xrfaHK5mB9W1T"
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
