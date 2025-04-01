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
    "4CCeKyVhfyrjwRA1wZjBnnbWNRnAskgPUKQVHVcLnaWq5WQZGvZooqT6kGmGcx6YhrWH9iiK9vj4Hoe45bWeRVUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AoN98xk97H5YAWHnj6uDNtWaxdcnxeGVNaqdTtZywNdJeqsidpyyViR1VsG6QGXhTi3L9agSci8Q4LK6KndJ2Sp",
  "key1": "65NpomToX2YuhCBjbvreGtF1jivmmE5cW2uCREDbBWFYNDyxun1AT5E8PsDnReh3p2m1ipcBD2PEUsLnwWyvcJfR",
  "key2": "BP22SjM2pqCHHyfcNsrX75qyKVy4UqeP9yYyTc6yHBzmYqnPkNWJoQbniH1fZ6CCCEAFxRFqNjh6ai7pduS9Gta",
  "key3": "5aDgrFEwHJihQdT5WvHXA5XezDYAe2cWQMPyPU2w84unq8TDxpaJr7sV7nbKDnUafnjrE9A1BX5TWRn93xsrEPA4",
  "key4": "4xz5ByUfW18RNSakBkKop2hYGK1G5iYXkr5oMYp4JhdjJxY7VaZRhnV8LtbwqPbvcnyqiZny8T4souQBp17gWezH",
  "key5": "3Wn5fdUaFWoQnvzNcUP5WxVEtq35aGMgbTQLCKGsWRRW4YsHHdHJQUpVzay665YpycmghV7gFeXdsYvfzGaPioa5",
  "key6": "4yZa2x3T7Xon61nPDfndb63x7HM2maWoMa1cVMwBmstNA75VGDmpsip1jVt2sFdqSKxf34w1zgmFmv6iGZZQcewu",
  "key7": "5nwM5GrQQQ2kUwxWQGWrWC9G7MEpGWJMFaD7B6kV4ZQBNAbRgg3WqbH5e6MAfGgSmWzbCqMM8X3qNi7B3TiYhGqB",
  "key8": "WE1qCJbQzJ6Q3j8CHE5rL3S3jBoRYjeqcgx4YtvcZ5Uh5bymzHLJJ47raqjGP1Q5JP79uAi5L3cm8MxSeAdbqTs",
  "key9": "2RS4eWCn4BvQNf68kbDNHdTnygD8znjnKH6tNrPX8HaTdmdNMUxwE6u94mPtMAT6ZMfpbC4jY1pquBNeZPBDkgZE",
  "key10": "2Vh8d8QWMbMM6dPsvPLxE1eun2x8D36RzNPeeXwMiSuK2aQQqQakzXsh6LSN3EtP7m7oavN3piDmHPGv8cZjFTaa",
  "key11": "3KbzQrfFua5nyrgde69teQG4Pu73q1NUfckXkuVcce4jruxicvHaLet98YzCCtamWA8L3L12m6BnqzADBF6hmubq",
  "key12": "6621jUNtUedxRrof5TrvF58Pig7LWBSeDfJZY23Vvkp5QzuqKY9drZPRHbcXdpzMHmgzeFAuhJL32AbHitNT4mBM",
  "key13": "4WGdPMZNDyUCy3betTDY1nkK3Y1yAh6oDzssLHaYEVPLPUsUNGgg7NMvxXZea254XtNUmgYqQTZ7M63EEeSGWs4F",
  "key14": "TCi9QnC7vTnPXXbNd5geSKA9RTotPALeoMJZFNEwG94Ek2shgtyLfnHevq52cZNXsUdbjqQ3wQ4MU5ybgtZADTp",
  "key15": "5wFj793UyVi2v6tE6BrWW1WLTMYJHCA5Jc77RsdAVLbyKfn6tmAkiFTA9oEZzu7tHsoEJkHNqHSd9fWWVziU86Ab",
  "key16": "4tHeAvmhudMr7vvtBB95yrA6Bb8kqCwK4s4TNjzAbZ17cGeQs4RuBuybzV6MRfdoHF1RFjyRi5tndRpxbtRSfcay",
  "key17": "58RNpeCKNVCKAWkyVDYNAu2zvhUDNg6kcoafjGdK9izAM8D6wKu94fqhXowV6Yt8msEDjRg4uL4EkeCsJbe3gGiW",
  "key18": "hVLPst8KuMM4xgdv99w7k9ETaCQaA6F3HXdobpk4Eb3hDTxJ8xqeh7r3U3jskT4xCcbqvSeP4naokxCZA9Eggn4",
  "key19": "2N7niSsPpMQ7JvCDoTchr1X85mvehX3AfwiX7wXECUCkdNvRKcEL7VkF6aoGoEYqReyYfFNk1ESSntKaDP3zgxN1",
  "key20": "3365ZS4uECA8gD7ktCNNHsmFHmAKJjBibquv2rEJW1hmE4C6dBzP2LPoPmgFEcy74BXd1ntqr6T15q4aMDcDD9rx",
  "key21": "4yZdJAJpdox23crC3DYmrSq94SRhi7ayhSDV4d7tPZJvkNXosMJpfcCv7EhQV1mzfZkoaVLJVcX8Nuua7oYBr9yN",
  "key22": "5QL7fwRJUZL4S86KjHcLS2jKP6ybf6mhiS48poQVa4fAgC7YDAZt2ZC1ZEjRpUqXSMbibWuPmUnnMSCcoWZFVFKE",
  "key23": "3q9WiqU5dT5BMxhgi1wiHMJmL3SthdPzmd1jrpQqopbEWL2JLLtFfaw6Gb6vLioy7NZ2wQd55mNabh7fY3E2Pwqt",
  "key24": "2bEbNJV32VtwgtJo9nkeTM7XbHtcfifMU47vx44FkF2KPhfzdFkeE486uU6GUWUvbbaBPB2wbyYU1hoDKaVLtKN6",
  "key25": "5Ro9DfG8ibzja6FQQEwRhZNETUMkKLXbyy2zhdtbcVTM8WzxuBHvFEpPNGma93DVHUiUvgUPX99JCxHvB6NLxaYW",
  "key26": "5NR84mHh6yBwrLUFKhAnvNGRQAf2hv7KHph8nyQGxzwKVB6ckho9eHnqPQAm3tjPh3jpSiFpFwB2d8XFrwRYUaxM",
  "key27": "4BbMfGtVwgqrJBfz5DwHXjzYXk1jp37GZVXtzgg26foiHtFh3J1qfTPxVU7xMTNfLn2DjRnowUKoC1MjZhrHA812",
  "key28": "5Dt8ehpvTrxEp1yUesJz9qcpwvSKg3NRH21wzLpp6XrtuDokUFzsEm8NmTbLwQZamHX8msDgAefaMCXoMJr29GPv",
  "key29": "57ydQpp2HwmHbB6TxwvEWQi2m69BWnQyMwNS3r75hMjpESz2oihsxgbQXPZ6YRmqgP2X5wnjT38gdzuHX7jLYHuP",
  "key30": "YqtYijUGvhohrKZghJoXsd4Ya7mKdPPAdtvZG1nYfob3dMTi8RicTFurWnZJwriByw8kjPFScV5ZLuBJmWMB2Ho",
  "key31": "3ShQemc5P2irjGA4Ks4mRQjmWPZ8teoQ6yeFs8aLAbkvqYeJ4hMi3LAwQBEc4kKf1352qHTTWVP56gncdWe83DbE",
  "key32": "4A2zjDgPPZGMbDVwhywBQsPahKmLkWUz7HHX4YKPXZ4hJ2jZv8xc9iMAynYMUWb9fP14TEq8FJQF9CoAa7EuBRZf",
  "key33": "2szRU8SAq1N8mZcX64kVajsHHpPgKkb5ad7vRELTBqtpVDCc7QTP8Qu9ZLZWQtN7B7UHgvSt54RmpwaZ7UbDv3YC",
  "key34": "62HaGFPXaY4ghxLgN2Z8JuuZcj4d9sg5M1Mdo2zd72CBr6DJwA6MFuvwxJDR7gD3SQ97kCCWHHm95ideXT4LGYoD",
  "key35": "3d53JGPuW6R7xeJXFVni6z8GexJwCJEx1Y22uTYqLxzKHfrLPY4AHR9oXm5N4T9Ft5u6KmKaFJKhJQfeGunipwFC",
  "key36": "2E5FxcHxURVFc7pjDuSpkjUp7ZXzZHAu2SB6FeC5tw47YhoC4WgPWsp2fwrS9qWn138MtJPAbLDTJwDQC8yrg2vC",
  "key37": "2PDGifEp4gtEGfQepq81GJjAgWxizAjKWt28RvpQWZ12bm6YjEssWVwDB4Xau17SG9qAUYcfXKWX9vFXf5T4RGRD",
  "key38": "5quKxvXg1sXGvi8SYMp6PCbkn4DHD87Lwj5UQCCJunHCToBhm8axuDSbuCbp5YHeYCfGewWn6HazUF483v1dMc8y",
  "key39": "3k5wcNbcir2rjgK2MT5YDez9SycLYbQ4iYiaTrrmYdgWECLSPFdgDw1FhDGhVaMHk5BPJXAPduC6oz6b9o4tvDGA",
  "key40": "2oxjHYm2EWeGTyTiF8tEdQCLLUWa5dW6Na1UKGSsmkFPyhZgncoZNmFfgerEDRtWVyCbLo6XrYhK4iprCkCGtQnk",
  "key41": "WZuzasqwxkHLJU2bfVNdB6WtVwaMK1LNwqAfgCvHdEgEBZPyVZ7rkxCR3ocP7QeC5RX9rBr4C6t1nNNusSwhgFo",
  "key42": "4BRQf9NUjxRJNs5D6BZ75fT8oy5TsezfA845m6f5GuQQXPaivhUNSLB4MHY76bGS3jtDZUH5jGtL4rgQbqQezfRD",
  "key43": "2wDpQoa5ejWAcFJedyFH66cBnpE6HSBQ3W2ELnyZ1XG3iyruyD3vEuMML2RgnVze7Fgp3ssqVDbhUsgU3vBcLk46"
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
