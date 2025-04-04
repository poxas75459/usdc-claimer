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
    "3Aokc94nbwXbJGWrit4zVuW9D6hgZRQ4p7J7HRLZR1Q2c2cFwZuvqCiG1pJ2HaUVGSByyf7Fyq4nQJPx3iqnFVrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNVaUC7Ax4hRNauA666fQ3MeBZnmq6airrVCsznd1KUPsCq8XUiKCQKvptGRVcNVHpd59dVtYWeYvFBQhnHa8v4",
  "key1": "daubnMCDMsezPVVN1aVfG9eW7gWH2SHiuYKXKUeYLubbSxUnw4PEpERDGpgoXLBp26EiHuGZ5Nkx3X6UMoy4iAW",
  "key2": "3eaJjvpfjtxPtQERdJK1pWsudrTYg88ys2Kw8NTxcrHHoRTAg3ZExbenWMvwJZa2615v4kkinEwFXVonGu91iGNT",
  "key3": "3C67acheHoiu4LZTPUhWiwhNgMbdmFHaJtmDmoD8mxCXYDmZZeFYB6385tku72rk477wExTJBpw6uNFiPAKrsE52",
  "key4": "4nx2gyFSQ1ASrbVFfJm4NdPQvraE2fPRKi6vqxMF9Ps86dXjhWxYJA1i6pRQAAL8WrWaqmcQv5JvLW6vYjuf1ugG",
  "key5": "vYD46TR2RwKQ28ft2Ts7z2Z2L5ZVePkZakPr7LW4TynoWtEXwPL6wqVhY1ppAn4cCHKNgmZpwKGe1z4gXsATjEn",
  "key6": "3zeWunXPyEwxL8VxKhrnXy9hSRAAXZC6gdbNZHEtrjvJkixH6J2GBqMUXDW7SWUhiip3n2bXATtg129iiBp6EeLS",
  "key7": "B5vFeREHD3dJGb2GF1BgZinCk6EdMDW8aN3eUwamubWCYGYaJP3LBeWskucEAFNadAw9CxTZTGw9AhpEpUoxhMa",
  "key8": "4tZxZndZ5KCnBkuSBHnmYj2S8Qy74ahrcrqsTTUV4c2b2NVZ8szRvmBwQAfvoKYfYAo3v54mAdAxsVzmbZVNutPm",
  "key9": "f3FnYGSTDQxpZbrMkGr8YHTTiTurkBhj8jVEyZkD2EG3GRiRDu1K6vLQyN9QWfGxvGmuSKnATmwL7MCbz5oPJDt",
  "key10": "mmYBmof5Ex2N5wHYt9RpET8dXAizvr3FkYkcjFRTXEs89GXfH8mm1fCF1EGsjGecPfhMnLStRBNRgoUT7A2uWjH",
  "key11": "5htybzbNiGNbc4J7NcBrW1jmYEB8TXMuZZRvpWc3xPp4VmA8wbdma8LGYSkqAnLTyq7FmjmgjZCSkxEkTc3BtCuz",
  "key12": "FSuHduYZHV5er53co3ZxnuW9WTVxtgrwL3ndqoX7WvmQz9QS2xBhpK4sjsVD7bZpkvYdsi465VJkscHbi41hj36",
  "key13": "RwJ59UZwVx7QLUHATmHcryGHQBWAADkgMJUcumMvQhTmAnYJYnJ3hJQp1TqYQSsctM7YTdTRJzyboEpuv8akxBq",
  "key14": "42zq8na1bdMqLgNFpRFV3Y4JfsohsrujrvxSsj9TL9LL4RBE3YRwBgdrXPw8QFwGz1ydk4PXrbMjdMiaYFSTdcB",
  "key15": "4fm3dNYDSHUEyvAyt8XYV44StpMuTo1CsgARmnqpqwbawNUtFEXiDvfnjcijfJmJjw7J3kZFzL5ugULhpU7xuJzV",
  "key16": "2dBAtH67to8uCpnEdxvCrN7URpnTGeWU9DjMPpun7gi5onuh7MUd8QKJDoWdE2aSwHy35TmKqV5zCzqnZj7CA8Zw",
  "key17": "5BPdbco954biJy8HwzCzdZhGg5PgzPUDgr8QH9dV85Xj9h1SwidX1RdMVmQs7vm5hS7JC8RsK6SKzbfNGyA6fErE",
  "key18": "4QKgDc8CZ15GfptJfSEFo6yttvRNYv21fCgQpdMKpRA8dLzonWd9aAyMnMvJRwUsMRFkGjyEmrjELDaQdFGzMShu",
  "key19": "xqPHpNLPobJ2CHTVBp2HjL6RugysErmnyd9aAPhhx8r1GZ243aUTma6eZojsJMecTpT61iFy8RGgkMCMuARb2Xo",
  "key20": "5LHQU9rXhzouyQy4eCJd3ApTqeoTGW3c7QyeQ34wypKfNBr9bymmiSEcFEuao1d8qNVkkQaAVU7ryYERaETSoH65",
  "key21": "4Rg5GxKWVnoyzjotRGhwwDzbgTML7WpebJ4wqrJmRnhZxJJbPgAJy9834Xh29y9ep28WvBibR4eMtv5BH28rXZ7m",
  "key22": "5UMZnm1C9EBKddbanBNmwxaPG9jDdR1XiC2dcc2hPBeUJUD7XCnhRkWBdZTR77P6s5hgsHuT7qMygUNgWDwvTzjJ",
  "key23": "5c8CsSFabdvJTKq1KTZGZEKf6hqs21P9VGCGUC7QegbvSqfVEi8FfC68dbxjYrsGLvYEp6YTj5CCS1W298HnBbM1",
  "key24": "4RHZBYX1a9YHFRLEViRQmA9jMGVJGQ5gzpiaPdHuDNDQvkxB3S2tZtxqcLoVgeRRosTiLeM7r3fGoyJq5U1kizaa",
  "key25": "4JbASWUpwXqJ9STyTsgmRSrWEcxhrtaqL63ScUYaDuGzz5kv6BF9GfftWm1y369H89fX5cqsuwhFAUNbZ2Uii8kh",
  "key26": "21iqoVBghrYJRqqyo3Kq6TfPFytQRG6MQCAALZCgZ5pdsmtUQ8M3Hag2Dapued8rPrJpmu3aR61YA9shFs8CEJ5r",
  "key27": "b1kzJkVmDE6K2rnXwb2mbxfbuLhC9HtKE7mUDVrVvy9sSriXKpcXyFvyZ9MQw6137XfehP5CXXmBSQGyY4oy2oP",
  "key28": "2FMnqA6tU4VzYVk15fv8RToRvGRfSsjeAaD2ftUS2ct6gDc4hbTCW1Ygo7bFBi7LzaeekxreSxhr85VKWfWTgS5A",
  "key29": "E4zaseuo46KSvjAGKDwj6FFsqo3y4iLmou38DqxZkxMpKNk9v7kiXxzETPAkgfiMUU7cU6qZ2M1jLitvt3G58bA",
  "key30": "3bWEz76qfw647oSyaKrcY2HLPpR5bnAvSZEcJYmFdduFAwsvYeHQ6chFAt2AAm6RppSq1pcZqC1e5XiSxfpMGnnJ",
  "key31": "JukG32G2TUncFsBEmRBHrmtFTBHhnq1aHdvj4Ts4hkvrq2qRCo88taHeHvEdrZYxPw72HZU2K6Ut1tR8ftdjVca",
  "key32": "66413MrTTh8m5D92brxx4Ky2kVnL4zcy75Wyk94Z7BRT6vB8TXKMBnbiHvZsWoXGX7EYctTiwaUK38XL2D3DWmuQ",
  "key33": "5kxobvANQ6Au9MLZw4tLGLYbY4M1PqeDUyEfxr2wsUj4wfxuJNNkFfhw3Yb8ywFk8c1JUDqBYy4WXysLwwfS25M1",
  "key34": "25n7me87jVwiBgDgxA4S7AoUVX6zcgHh6EBbCmV1VhaGEP5zwJ6hfhiPcNe5LauHAHJMm9Ktj756fG34NuPAw4wJ",
  "key35": "2DmVEXqJoNFwJVMhArYqXxP5AHmzsFWgQehZxoAPJuPgJ6ZoKYf94rR9tT6Jofaf3vHS2moPTbSdyxQaFQGqve2r",
  "key36": "2srhdGudLgXz9thfRjA8jbj2JuWSEUN54ybCVqqiL6oDBzxmY7NwqbV73Eb9293cgNn4Nf6EdZi7rbhSe4zEf2BE",
  "key37": "46NBFQjF4rUh6YbQQFDS4fBEu4voNyFHwSTu7UrpqRLf5ARi9vSE7Fpeh6Fip5dRgzH1FwiaZ7MZBxsP8ogsiBiy"
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
