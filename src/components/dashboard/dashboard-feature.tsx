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
    "3LZgWnEeDP7XiD9jmGy9iegSUTjDacdnSqK4gTzzGh8L7tn5Q6Rq6mf3HdF5X63z8PcLsq3u6BJdCGHhNZbaGCRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EPsMmUegwbVXCpLCq2qHk6TdwA3tXricNX9447oELAFVJM9jKpAvzgx3pUr8VsZCmVDTnV59MDBCgMXd5bUzEkm",
  "key1": "56ai1Qb9WRP5TMUSzLjZYqdmhV5HqpmYbPhQCXYj3YMoJAzDTPqN4n4KfjWMcufynH12KJmFnqbSKJZLJ7y2yuf7",
  "key2": "5jLx4w3ivirc6jitMtQ3TP9cepTXBQXAiFeb2bxF6NHCYAJeAjZgFV8AccV1Ppj2uw8uqza3g3jirif1vZ6ZoHdx",
  "key3": "3Vb4d96VEAPqrsLnRZBA1TAgFBb8vj8Nz3cfEvpkjnQcdaaWXJ6pS8oqwEWFTJ1UKFwFrtERdQC7jKAarqUmpR7h",
  "key4": "4EUKEe1HRpRWCGGPwzB2oySsQe2zrEobjEpi8Bk8DNBsmtevXvg3ZUxK9VuCfQ7ghF6xHEtWwG9Grd159mLbfvET",
  "key5": "4gERaCm6bBGZsKDsbSvenZBmHX3up4nm9S4TcpAhrLBtPhfMJdaNQJpM43ckr3mLBVbC83UwE5AmT5rZSKhFZuRa",
  "key6": "4xypuCW3kLgkQfYqvdLZ28wuqrbcHbxB8C4VtKUXGoegDvHLiP8jKNdpLkgLpx9yRw2FSwETSP3W7CW8GFkMELra",
  "key7": "ncGtwjQUrPCMe2L49vP9bxbPu6gzwYFAymEWLWCVtaYLywG7Tsa51Qb5HNMcGMK2qJaFiVpArWekibrWJtRpHCe",
  "key8": "2R7rgDGR2w8xTQ6N11djFZH8rf1VaBrGNbj5MEKAEmkYHdePxiQztZt6GyanstGGW61b1Mz4MrtCwaXBWAT5gyEZ",
  "key9": "5fsNQsEb3XHqhatuCTRy4HuM28RwdFwCJiNa8pMLowJ5HFwnS9miuJAsxRNtcqaueYmh5878ra9pYXLU5xdF164q",
  "key10": "d6ypxZq7xW1VAfyBxuXXFAU5mdbzdTjFRDHRPV8CdPbkv7ZG83h6pEWpxBVvNbuhXYMVRoSGzogzpoUhbnSFxgR",
  "key11": "32EkswoGgpFNdT4CTfRxHXrbapak4tX4ZkP9LcWat8N5y68jUL3QGt7McBueHtbEjX2HXTkJTLDHTxxNGjRj342c",
  "key12": "4nZRKagd7wP8jcfdWzcGuxM4cupyubGBPdGuLeF3YFXm5xJXeEKN84SMr5nbbE9FKBr1qa2DAkp2DUyWPSqjTL3C",
  "key13": "2FtN6g2KKVRJ8F5yMj6P1mwHsjEt1efvKsd8LJqzNhhfL9KCt6WP3cRpibSXaYGK4pq88v58gcEgdGMx6V4GuQPD",
  "key14": "4fkcbhEd5Qc5nF7GyVR6YTvdDRhTRtGvrVsX1a4W8tsgbzp5ti8eHMKqU65ZUthhcr6vU3rZe66fVEwewTaUNpDm",
  "key15": "X8g5T9poA8rTFEZCZ9XiG2mteZNjAQXyjFsZLRcmeLqUFFuwDwjVW6DicWLYjdLBjaRFrzb8eJD9PtkDxPGkq73",
  "key16": "4JFmyufsEoJQzF7bJyFZqf2BdfiKvscYtLRFs2oei48v7AzbXp3XJir3AroZRihxqhjNGxDs9LmM3ny1rqQJRgCJ",
  "key17": "34BAmhDc3DjxzjjZTcC188kd3u1zu2ThckgAVj3Bv1AxEvJjkhmfnLugqPnjqk332HJsMNncJndrU9BNTdDbaGSK",
  "key18": "2Z2RJ3fUXBGGBXPD22dTJDhtqBfnvB3heVwB6TsxiNSHhbN6nH5n4ajQM4MaDSGEc1vd48ivNaDA7xE5UUjqw2To",
  "key19": "5QXdiEo4AbJJoS4V8329eaHW3svYC8RoF4nSZw8ZWdiiifKeeA4xA2D18szDW3zcMbxbmkkscVNJnnVSMBbi38Qv",
  "key20": "3rAh7c69tbKZUehq1k322AVAvQaZ2eqppRRgGFcTDKvGJexQ8W2taN9rDnz7Fuoin8yjCpc6DTHam2v8vRyMRT64",
  "key21": "5Ji8XbJMWaNbscRykmyT9iZNXp4bmYv4gWrU2RAQvX3gmsWq9MZdH33hj3CnENECesmM4F4PpcVfy9Qgx61hgwAQ",
  "key22": "29Z1ZAbpeCMnLuAn546XhtTpgnrvS9TMtjMfn4Zo8p4JAJyUHtfwQSC6oYmXNJEEEGxnRdoSJNzpqrmhqetff4w2",
  "key23": "2iLGJFUDrhpXRgEa8Qi45eGFZvfWPLp4JFxaekoiWbgvq8EzjCDJwf7E17h1srLWP75Gep2ZL2MkEXPd3QeYoCTM",
  "key24": "2MDRWLbpeaEFxThMTERQgXt6cv2hRS3WnkQW9VBWL3ms7vPuuEqhFwmvGA4L6fDq7WzcDx7UG3XsCs6vFvmLSkhc",
  "key25": "3o4oY2BSPsxJDAnVAUfR63a3mEXouSK5ATuESehXDL82BHkGsj8fY7h54PjxiHfb2ZDpeFa38fokVqTZJp1Kmk67",
  "key26": "4wHeGNskzDFws8dYsGaX4qQjNSQv9kLqG7Z6jk84z82m7DDAwpujbC33FYFQnvgQzESJyZTgm3SwzV4HKrn9QUf7",
  "key27": "27KeK9k3WDsVN4a8dBVbjH982HQnbqpbA7f3NNGZ8aNQsroBxf2E6SvtDDrp9KtYrVJxArVrfKZvhoU7fg9b3ADN",
  "key28": "ZrPJh26BgmZjqdBS67GMkoQ5uAEfsYQnAXmwzpGtEH9pB3LDffzXwRPGFMMCWE9mpq5kho5tVdavUUyyeYKgZTr",
  "key29": "51hFHL63L2jvFyczpgkWDEPaeXJxJEGpJRb9Vc5RF8eeYqzhz9WZsgksbUXKyTbqGRXvb6rJhzgeEEkQXEYB6xkz",
  "key30": "4eK1DBvrJgpUq9UDUwJHdjWFgMF4AcojsaXVLvmV9Zz1JPpdok4YL4zGSsRbEUD7unBfK58RrFZ5bp4bKqxKTVUG",
  "key31": "5VzwuMKgQBx6EZopsJ61bmdm2UdECzLHTssihnZ9zRYwcFmLoMMr7ryLWaSUiwq8zK1QrenDgQgtg2BZT1y3cxyo",
  "key32": "4oPw4fnXUJV9zvTq2jhWAHTNfrHgqAR347EpGT4woP5BnnKqtfx3L7snd4FXGEiTxprVjmQGHtQAXqznaTgg96GL",
  "key33": "243F4t6nH2czHwwrEJppEfgiyi9Epcziay7wRzYaDUiU4SS6Bg3Lu4yMn7zLBDn8bu4TgQF1aNTsj1Zb3oM9CJYU",
  "key34": "5b45HJXiW9uvgajXdKcpQ31B8YP9ieRwxRr8xfLnCgLrYFueW7PAUA2sQ1U4kkDpMAvtr8vMkDVcAS544VvqQQmU",
  "key35": "6ug4vaweafqkv7S84ygzkFNmEiGtchE2QVYcBinhirA1tZzcF6Eyt72sJn8h8JnJ21pBJH12nNyWQ1KYdP1o9EP",
  "key36": "287hRjWZ9dzQ38DbKZQ2k5kJtYGsYwNTi4eefBDzQ49qnttmbG1A4E9taf5h7DuRreo2x5xWMQ7FjxuBXZLmBspF",
  "key37": "3ynMfhrGyPEgLSoBw1VrW7dGDKGMHco8JPDvXHhhGmGRyCcKoYwx73tbreoahLLUYhwqNEwh2aaHEoMaW23ernQK",
  "key38": "3wg6gpr68Pzz8oRKDEVuzvDpogkbrHKy2SankCsddtqUfoHCKPFyDu7iA7Ujmd2L8DTpBjAQBNCCWzsTw7xET9Wr",
  "key39": "2RyeB8oXTDk8G9SfSVaZ8CDS49aNMqobLp1Brb9DoeHGq8aQutQBrketECiCbtR7UWSfd61yKjmxKY8bBBp9XWPa",
  "key40": "Z1iB8a2mRgFb1CYtfbu5BtAVfD2S8yfNduDtpLJKfW2L7cdqMnsb43nELyDvkQmH4XP2td86oBD8JCTDrnG3XxJ",
  "key41": "9UmW1NpAzCKGLnHvbYJ8keCKPkYDJgWDTbtnEsvCVUJf63YkENksM83KnWaKJJKJhEM1f7T7nr2qSCCy7AQSNgL",
  "key42": "5Pv2HHxDWxVWZ9PZKtzBTffxWSrNu7MSQ6QxkqxjBj3JP8FLcvpHpYr1qGs2WLM235Zqxn6Jz4ZxAQBfh9WC5LsW",
  "key43": "4voKqrbLF325ivThaSbQFxBtDJ2LFBV9ntcfgVu2zsH4Z2U67qyXJbp7kUiXFcGpAsk2c2aQ9wav8N7bFvMR7qd6",
  "key44": "GyqMKko3kp7dJxaxcMLsS9TAANnUhvcp52n3EXeFejmDNEDPFrm5yHvQJobi9xXgQ7xtZxkaBo1NojqJUeM3Z1q",
  "key45": "ik21B3LFUXsjxsAunw57ay9qhArdXXpatekvjFjZfq5Y4XPXw5hUWKSGck3qmfvG8Tb9tHRdAJemZLLxcz3g8Kj",
  "key46": "4hd924NT8hNaDJeeL1TD1vkiNMBHsDgGdcKo17hMTgeKnpvnZSxKKrwKM92nKNsCPc1V7HB3BVfUDypury796NBb",
  "key47": "gq24ZXfxYErwubcGnU4wWUhsLonv8DBrZuNdchZ6ZSbAWEq3X8JXxPzsPFKLpy5YFC7FoGhZMAnSUYhHszufByb",
  "key48": "4QY6rnWARCsE6SFnCJycAQ2giBnXWggRi2vtvWuW9yFayhoFfJyztoxnL77UeL4osp1bxxKRGadQGNpFKGqz6AKP"
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
