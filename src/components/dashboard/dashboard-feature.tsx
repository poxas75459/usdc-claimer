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
    "31aS1aeKfaX41wPpDanxu7rdTgjykC5SVY67VajrUDuuDAKC8f9p8E61WnYdv1UjbLNNDuB8Gp8cxw6mxXjXLvFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKRpcdaJnxg5rdJgDRAtvA7cGeooJMNmssg8r1yinrS3cUM6nqJ2txrQ3EHXVjSYFJWrBJfPyWUUiewNTPSNvQh",
  "key1": "2yTfnaqGRLMNkzjjzhLxwPa3uiDHKMcDHsnQEXLQqnkAwP3wgRt5gF79k2vqW9xVER3Gxy4kWyV66GYyQZQChEwd",
  "key2": "2csuKH7b9wqLSE7ePDbzVYSmyJvXigQnkiTYTpxReXAcPyNXHyKMcq7V9tLXfecMb9oCqYtahXB7m2Drad8LB6mQ",
  "key3": "4KYQgRRAuSosnxrAaX9xTaH855Z45JBYReP81afFNb1UyGAUUwSqjR9GuUmksvTjq7gpd3ftmhw9vcRnMoi8UjxP",
  "key4": "5vfrEPtu9wDVAr3zZznUbqHVsw55HQ7f8ZEyyg8m4UVsLFTxADJoKLbopoHSk8ifHA4NDpfyQqjmXKzK2D3MhPza",
  "key5": "2z2tt6Gps11ZKaCEe6mVf3eBFkiXrgJBxfQ9gFNrTKKg6QzV74Xa4uTF6cQ3GR5jm5D1NpeuxJGvwtj3HcNxUvTt",
  "key6": "2DbGjmnY5PgwK5VbHEgs2xWcuntS74zAow739NUB6AQqDyDxcVB5d9U6cFHy6DnTV8SzUurgrUc89Jvr8XBPZWcL",
  "key7": "5LZrXwVdmYmadGqayaN9DVPDZzALqEKVqVQHb43PU4aqtvua6MPiyTqVNKhwSm6swJSb5uJTEgAz6qRN81haDBLK",
  "key8": "5DBmfUPJ2qpHzZVBvJy5w2BgFURk8Ckqx35odCeQ3KR5iwR72FknQyrHXJLjbG2h4mAZv4Tn59toU1rxPi1NxJwo",
  "key9": "66VKN4sEDkn1RZnSCZmyCcHWJNwJCpFckxY8heqpBL6fwoDjU3JgY6sE34gJ6EzpvC9rH3MtnwcpXN8LrYPTHMHV",
  "key10": "5HMBdxYTmVxzq7rioxBUPRB8pWfjHDFtGESuAigV2kqtMFXdQ3VMPsF97GoUXMcKZrXygX1FPaudx1sCofWmU5dA",
  "key11": "3rTqtPicVkSANwvAjtAVbQKqjouqYTZznUNQ9dteY1oxD1kqafkVsonwgjZfkZaJt3JDVQx1sBZNzetzJSaxJHpY",
  "key12": "2szEhSPpdX8nXSufa7maBryTauiHgNZJejZ95sXXLYi5BnGobnXcppJx7pWEA2bLMUUDZbbVuVPEv9buCHZWinDZ",
  "key13": "2HZNcoPn3YGMZo4UmVxG8827rc6q4SGvrTX7cy2YmBGwvNXZyLPjgXAGjM4mEv4UHwcNzhJmgrXNxAVPY6QusWdz",
  "key14": "2CGxTDXpgXLgX6PA8CUHgE7rCY4AGPeki82jQiGvmm9oRbmYfZtBNLKjpYJ5ntrW2JAi5xL8c4VvSM1TdBh8gZhu",
  "key15": "4GEqUZQbMhdRYJkm6Jqv9A4AmPEsy4K5QbkmGTmQ4XYMRNsjbZ9Qnrt9W5vE36zFCGqyB8LMiGjxWeaM3Bwe2EPV",
  "key16": "M5DS6XfDFEQecRJ76CekjKd2WTwnFLn9grDvKp5LQZtSZ4tov91ex664nDjdVkZmDwarTHDEVodM6mtAghG6jaa",
  "key17": "rertvdnXzGmgWijBHFki57ja9Vrr392evHwQTYz6X9i81yDhPhSrxstqzTyREzWvXJUcL4yWyU4jdZHP7CmrPpP",
  "key18": "4vDKrYLhgozGm6Z3RiNfr76r3SiXvGqz8FS5JuYXYZegno3hvmPgACPVbznYiBApeAfWdip2hz3e5CSeBwbqNQRy",
  "key19": "4eLHd4z73VikZkZ725wkJ3z8R9ULZP8DKFL37RRAAM3rs83DsuTrVfyLEAWjhL9i9ARppNfcLzDkKuZcL9vWBvYV",
  "key20": "219CDcyehMzgVEkigveRjb2oqqabJhwGDPVx6GmQbRF551v3ZUcRCS4uCH27tDangC21kR8yoTKfBK9WDZRpSjn7",
  "key21": "XUadacH1rePDrbbPUUE26K9QZmeGCGky9CeM8UfmZaHdadjx8WRE4PgoRmZfXyHb1LBAKc33A8439vG5yTnSNAz",
  "key22": "ZM5jhM4BpHB2RWFzuFw5aSxfdvbr4r7jGRg6B17z7RKBNcRx7Sb6TgrG35RhdLWJxhY3bKFK2MdK7SYtN48fXLJ",
  "key23": "4vVpcN9GDm4oWCt46dVJmuhwLbEr8adkJRhuPiFQzyndkEAMo22huyxdC8QyCSwvdWJp27BtBkyMXwGtLjJJLk7j",
  "key24": "2JmbSrbHtpPdxWCf8MzED4kszzuhpe9eK6emdciTNi4Aqqh6ZmNrZD3jCjwFWKeEp1hFEdqtRfXtr3aRsqeg9NB",
  "key25": "2G3rneoUzRhWbN3FvvwRFKdG6ijhNtB6o5A2M1hKAGFdTbAhZzAJgZXXt3QEs3KoPjghBjQLrfLkJAkcBEjBEfzv",
  "key26": "3b3XokLqDuhcdE6a5f57QpKk3YnXmcFqcWpeXVw412y3osTcj4DXRixFaLyfK5BPV7UXEGnpkeyuRu753cjS11H2",
  "key27": "w75ADffYb7eAr1tCtcqfCcqSsRPtuvTYvmFud92XPwCjZadff1Qt19H8REP9t4BTsY6CzqWtWyrC2djsmTYZFZr",
  "key28": "25vP8PiP4XrCEYdX8akXgJMEwnJ6iEbCrmPbHPRQ9C9uCRXcUqQLrh4VTPYdqSDLSA297rYqNxuGr5qKEbq62QV2",
  "key29": "31mu4oUYr8ycqqhXfbVZebLRs69EtXTbVkTgMhdoamfCXMAerxtvesd3mFJ61nepMRaoKKAKzWrAhm8LJGK3eGeD",
  "key30": "NaeynTty51QQDdopaeT8LojSqkLvjVZZVfMuc3KobrdHAACWKQfgZnrX1cgE1SMYDL432Qieehj7XZJbQGEHZ9J",
  "key31": "2zQ3hFWGb8xDUUMCEqbkZtcXbfR1aM8zhMSJbvP8q7mye8nyMGT1NXXMHUWAyxK6EnzWjdeeTDhHmf6xatBVGjvV",
  "key32": "yWGVwRY2771RqnG1edpifuhC9xDXpEvvTqoRmz8Y8V8PqY5Mu7DvtJM6qas3Wj5aonQMuPQ9jjtn6uw8iUYXEt9",
  "key33": "4ivgH6SNAbHk8oRdoDL1SxHYFRVcczxNe4XYVxM7ZMDdfBTrRZduPZ51VVwfUGFj5sEvATfq6RSwkLtB3dbmaPqb",
  "key34": "3Bto7PYZ4AmTZ2vhyQnAuTLfDUdn2VvataMiiZMtFgLT1CPEDW2v2ZHRtkVYWfCoRKvJatRuNMe4fTwwcu3Mdzko",
  "key35": "4tkSLDfscr1vT8enuZ8jX4U6U5HF9YepBw65D9HQXEJcfpWmhVvjnHypXtPWCo7dNxEk8yUvnegBhLBCnwtFS8Rg",
  "key36": "4qDk1YyY3WDJ25gUGGmcKDHEnjJSRRiTaVWpJRoiRNktLbV3mCH5EfGdCfPyCrKdFSvf1bRkbmH6MFumZCPCgFWU",
  "key37": "3wQWwQMbbt2oQetEiJyvzqYq4BNujqUybGe18PdKzC11MHLm3RyTZnsviVxLegqFcMaBx3wPtb9WyUrhtsmektvx",
  "key38": "5925G2dLrVN2VnK7tTiMMbfU9HmQWNhP9cayQgZgx6ScjBQqgxSF9ZKPE8Uas6fABm6gPkP9vgsjHQ8kVe1uxhd9",
  "key39": "5LvLKAqu5JkNjwxYNvzYACBwtoPLz8AgT8ZicZzoeFvtz3iJD6K13p91VXFV8ejUABLewgUDqJPyRfPyZqFeHStL",
  "key40": "3dr1jvGW6Fx2MLZpEQxaCTLPSegjyiqb5reNKwMvPfw69EaL6Hbdabk9wK1U341fNXKAF71NDSBKMSSpPtT5BVe",
  "key41": "xyFYjkab18RW1E27MwfT7ked8gLCKbNfwDB4L2RidpFrRJd6Z5BZcsj62kWNV3ygTAbh5kxLJtDUvSPqQ9VtGxW",
  "key42": "UoM1TumYssyNSG5ExQHah9nwxKouMfFoUKdYgRew5PTrn989aRck6hoXvikyry9Frrx9fxfHsoxCLTKP6baYebG",
  "key43": "22Xz9LotRiKuNDHVgRHt1w3jPcDoNZQ48JQTSLqibTCJj6HWMwVEY6LAmp8kfNUURwJMU5rnFEaq3Yb1q6XXxsQ8",
  "key44": "67Bf6Piaip77V6LjQu682HxoiwH9TcKyYpYRizXbw4iSyNAGFq6ZJKVNyeCcVM5UwYZE4PR4xDrsL4GPkkE6JDJL",
  "key45": "5gk3JvAy1tLVM5QtiqJ2kncAWdvrxAuirrBv14YWkqpCqSC4CZZwEd2msSEneDDMaCrnrEqMwv4Jrif1NCtJjoXa",
  "key46": "2g4oE5VAWPnnByHXDKuxdUpbtjxW9RkqYpYcMmz4QZ1af7auPhqtnAkYeKJrjZdx9AwhWJSLyze9g4HfA29ouXGG",
  "key47": "4Jaejzh7zdDdcX7J5mVBTVMqNiuuSkbULpwtfWRUTSE4ny4EJVcKrKWxktwCSBXhNvxtVhd9iWMakjxjbyKuXUrV"
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
