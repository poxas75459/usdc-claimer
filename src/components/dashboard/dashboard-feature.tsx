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
    "8PY5bzUaWphpHVXTAwKSa1zEZBGsda8ddGrquw7nyKJcn657J946hkM2BAwQ8EHSzaavjKqJn7n9u7jp92EznUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3ByPm7GiWwdx3SgdyfZv2vjEN4ddXeLiE4GWTTwbVun4MnzCjfCR83pyc7s9ztkwS8i5t2b7jb7YzsxzbegQTz",
  "key1": "243FLMtBeVYrvQHuK4Da6ewQG6e9VkyxTyCrG9dZyUUDMR3CTiMgDDVviJpf3njt6XsHjZGojhVUvKJJxuL3E8wU",
  "key2": "2jZ5Bn2JUfqN1C3zc9tBNVZ1X7oPAgX4bJBQawUARK3js7ECKKSe4He6ksHMcWLaNxfWu69GcWFVkAVkx7kCKiUP",
  "key3": "3S6xxLdQmkBAwxvWWc5iZepZC7Ph2yuwitJCr9ASr3TUDjjpFtYoiB7dtbnmNH3kJwwfY1i67YiVhzj7d2qoxrKw",
  "key4": "av22KErucesq9CMEnuBr17QWZh27WYZxbKBg4UMbojrtgNQDXU1vBVycHiq64naNYyCLuHfTDC5SMyMPwKjTEoc",
  "key5": "2SQAYaoCV3VPz1pXtAdfioYPAJJavhdVu298ZiWM6bxoK3sHT95JYL9twkQyfwxzvfavYCYE41pW63VJN6mtJjao",
  "key6": "4bD3JA4scx4GVWrFqKJjcNuYPkKu14MfGEAzHvJQrjEtanXQwUQ2gSWj2KhMQQQbJHxkABUMbtC1ntwV38aJ16Kd",
  "key7": "4JEfDDMBStyYPYxVE5S5Ji6kmawmaHuV1neix8Y6JBjSbaekcnYJcutPzQtuBgrdsmYtbrK9HqcdZfsHcmKTc6M5",
  "key8": "2F9e2zuHptz3EjAyyc3YXxQH8d9FUStbMm8mQRz8vkLmbokMvTKTzQYmnjhjP3eF7jjN5qUUkiPwgZ3bSUwWY997",
  "key9": "5Ux4MGCghq6xNdd1U1n7odQNJiDoG5Bjoy3YKTFwmL8eYBwiyDNQZJjAwcgTzZxkS62hwGDC3VvSRJxVb1JJRoMo",
  "key10": "49u3YHTeFwvyWsdEiH7JHtMZNsdKUsotkyE8mEYxKWfpuRdkeUbzFrfPNKgYVR4it1SrQZcEqKcJKi3giULZrve7",
  "key11": "3uYRK7B9ZQrgpAwWveRa4xAHoEAZ6MF9pNFsTjKtB3Qdve8PvTNFjpdYS3EcvJikoutZSNKLqiMUNQ3511tXjcDs",
  "key12": "4v5vECFuFvaudn6iHJF8F7hLdD72rFWcfhsk8ZbZMDMG1s11A1QJxZAYKqQBgHjxofiRimKW7Qsze2KCmbXvKZZ8",
  "key13": "FYgFSGLa7uejFi1fmdJ2T7fSxmePvFxaUZg3XtXBz5yijcfyFpd39NC13VYzZurA8oDtGtapAuBwDsmN49StQHZ",
  "key14": "4VzgbGqUMJfTyt35fkWK8ywAVYuy9eYGjV99PsRyPgD6EkPcxznYgV4cYFD3a9kPL6LCnapkWiB3pPW4ERVxniL3",
  "key15": "2CJ65gxqkSdrGUS9ExHnKFBeg545M4e4EQNxNZ9tJ6Q6tqU7LcHh3qyzEhqwyiLPCAcctv9TkyuBT9NJatcABQuS",
  "key16": "3h7Fi9HKTpLydNqH43ke11BMCS6EUca3G6roqBf4hU6SdyxjduCcpVDRuP7YftX9Q6Q13znjDsRgTm1QEXZznZiK",
  "key17": "2F3LeLNjNz4qckamZ32ax4UADjYXbhNu2HBNZogpGmDW2WtH5kf1brb6fxqvFnuC32eqEmQZpfg6LVvwvPNcRbJ1",
  "key18": "5aYGWdyyqrQtdP5HY7SHx36UeRuxeGYrJ53j3L26XKamfk5mMGaYhoQx8B3SPq6DdoTy2fUEqSFYGQsk7Pd7XxM",
  "key19": "4yP8xpEZUcoR8gc7p3S4FeF4tcMTprfJghkVYSP4VuZh3CooBcyyNPaAxxZHe4UMYvFg2BYNc67G1o9XGsNygfMb",
  "key20": "2pH5qBnDYUNX8jubyLKhsW9bHj2hYCUnkEKKx8FSJd6rSFwEh3ZkPNTUEctRbe8M4fY1G9MEoiLLgzeT3FGPLC8B",
  "key21": "3oCBeEMxeFnsRMHK35E8YXiVkg2S3zKTXXMgrxfZJFgGd64Sc5KRg9DrszKe4bjrPjwjKVaZSKq7XozarVaGSUqe",
  "key22": "4TcKNxwgST7cKKyKFdBcBCP1MppY2BGEmykatXAQKJ3UBezuNcZjGi8pvq2KWPeMHNfYDs6LL1Zw8sE86WmjQEte",
  "key23": "2Hgi23Trhe81cBqyUS2DrVQu9GNtF1nhMp4vSHShrDXFCACE9qbjiFFkCuPHhBiA5AyMvX6wZScuARY1ut4H3T4L",
  "key24": "3DZpv16w72GZ6F3KRcVrG8sZdCpjr7TvfoyD9KLX4LbNTuELwDXEXg4JoxkVpCyqLxVW5a4ew6khQxzdB1cyXcrQ",
  "key25": "3CGJmiHgjkQ9BCPEJe1TdzYtu1o5JuyXicM8YwkDdJBSH33BfuyoGpyz5mdQoK6tjJcEAsnGHZYFugZKUq45QBJy",
  "key26": "Mb7mzzNmrRz3d85gZBFWrid7ugoH2XzR17yhLUJ7vAnmzEnbf8ffoU2fNtkbpSSbeXn93LcnaYmiGkE9WFr2bQU",
  "key27": "4cGSpQW3L3pErb2MsoWoLE6nA9jJ141XgYemL4aFgP4wrwW7af7jx9P2ZQtmpCtSQWx1M55Jav1hbMGSwLZfneiU",
  "key28": "kCpucjqB3ra75XphJJFuRiwirZCc1eVLSFLM6tEYQJcco7Liw2Jvj9JcLMvQiLhGZqBapYwNM1cD4cBm9myHGtU",
  "key29": "5t3h9AdSbmwqjK52VutWKPLcLRD1kwqgxqtGYGpYtPDdLCbuQRx8ySxBfipxSbWNXpSjnK6x78sRe3biRktvpNGK",
  "key30": "4TdMDZP4H5q3txjKXgiM7nWxJHddnLjR26rRFtYN2G7JTpKY6PBZZ5exYb5EtWCS17gPwuVRq216rrdq6ismJxhc",
  "key31": "4FPEpuoivhyjau9N4H2d23GvrPaQc9pwAb6WDMLfNfTdnTWPzHLoAzvWJwQK5NWhrZNNxnvHWp9tGNhRwNU9ZKNJ",
  "key32": "2os3Yzbibd44iqAvXPfiqyWp3U273f5hBp3CnKqpgwxgCJQpwsei6L1tbiTdToF1AArwGFKP77x1uk9KjkjAvyt",
  "key33": "4PG14PDz3o4j4ojNQLWVye5ZTSfgC5nYcC59iCJmf6zqByMMh5gWikuMtmnc6LMDGvTXJuZeNxHM7f5RyskS8UUm",
  "key34": "2A9LC18Ebbo3pF7i2i6RbErNsq7S8PorzbWNVd9YNFi6Vr6eBWcQqXe78amJseq3hmAMR688u61GitrpW1RhZcJm",
  "key35": "64LHNRPsRdn1xWSWtjsHJM5dEoQzE5RJBPQUbwJdk7W6q4DT2AC7cK4C5GDv92mYtRzqLW7xvD4okUPnskzmF7cV",
  "key36": "626zV86Zs6UgK3EmunADkuijdcMdqNagxSFjLyEDyRLzk6nYXr1KJDUzRBvcoVnzqE4kL8U9JFfB9BAF6NaTRLUy",
  "key37": "2uP67xrvfComMCvkSaHRM31zmgooa1hZ51WxxmsumPi6rQbnPxjoVxrdK8RfFS5QkL1L2Gva6Jniq8qMxdcN9TpA",
  "key38": "57nHnmji2aozNQDbY8hvU2fzvEXE6n8LTWkkoz2je5WVTHG9CpVW2aVaT3GAgxbMce2Wzt8qFcbBrBMFo4eLbhQ1",
  "key39": "5yqwdcUMx6NR2Enkdwceukk5e5ZeJDPmvNrpZYGc8ufnFCDxHkrdgJ36fc5gYHVR48W6LZ2VW7j5vXFaSjwJurvc",
  "key40": "2aNV4C6rR6pkjGsgfiqWeohgE2dTcMSLj76tdEftwHAwoFY3ZxijyBBgVUhPMG2my5m7BJbisBUHaQHzxeJQSxnG",
  "key41": "3GTyeybucRMEDocpxHFuiGtsrMpdGLPwN1tVxSV3t48jS1WCJ951FYCbhGyF5EHfGsbj8YqZJCxpw3ytYGuxu8K7",
  "key42": "36HRd3567nL5ec8Y2Vmp83KFy8k8ZHHeAjZyYPEhKA1wTAVuG2UzFb5qJsnkxWwuFCMbEKT8BWUVGVW17BKgCtt9",
  "key43": "2oqKaVj9tpJ4JkH8o8PQMyq1eXQixQgHMWUWLWdNn7vMCFV2yYgnk9BziSbtZQvxpotK3uC9XSvNGJm9nPF87FNL",
  "key44": "5PgkV6LUiTaN5Wy1pf91PNYcsmmKT4n1v9XbWBQauYdhLpLx1VkpSvJ5v6R3UtWJWckWcwV1j6p6wctCe9WWQHYW",
  "key45": "9Bd3SJRQPFE8146Sqvt7NRRaDn8c76YgwpV8DNjgDcLpCTEA2SGsVjst12K3is9y33Qf5vrhcctYCNprijRsrGG",
  "key46": "5zBBZcyGD4oQQsDewCexK6LssFShWYhBmaEgLbmieTvd8dwnk2gszswK7SNvW6tUsSq3zzfAs7FjiUTN633H1mQy",
  "key47": "4EhXWRjP6a2hysExCKB2U3CpKXvskEywFAjcTW84uTthnzRvVp6pDJeJMLQuWr3NsiTJwegdMMpmDfyLj3qmbnKP",
  "key48": "53sxipBEBwtkK7U6EJTMzoKaTiomTzxMS4v5A5DZo6N13d9VuUi4YLXBw4eJMDomoUGDtnvWpQQUkhQU2xewp4i1",
  "key49": "iTW8kc4o8XG5HKsL5raBFZ8kpQzkXkukwQLRo3GfmXsWD1S27pjDCB3nv6eswB2ftt7HRncvH6pUSQi9STpERyA"
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
