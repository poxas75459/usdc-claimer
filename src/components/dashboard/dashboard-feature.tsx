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
    "3yV98sXRx3WHoGbB2ugHHwu6rMxcckhks89jKYC4Wt4q9z72RLPvMZrBHCBYDetaGR8bfVEcuWSnukDQtnZs7pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpsjBmruqR5A7kDJZPM9FeaY24nYPXbsFy5XjuT4ABvXeFrtMku9xSaB92ybsxKWv15WK6C5DGsA3yDEftJJ5RG",
  "key1": "53ms7NMSE47Wa6aiFHwVPe74xmHJqPasETRB4bQDnMap3pCpytFUU2mgj3jTDrwYNXh3W3hoejJsiQDFWqeUwNHe",
  "key2": "kdKtKBQFRb8WKF6s2ijw1o4Rc68MUHytDReDr6JPGN37yXj8vTs1deJpiTEyD7bFEH6BBgNw3uJFA18JNMN62QL",
  "key3": "5JMaYknQE9bSeQRYABqRrgBPxYVuxnqkTUFoPuLHd7H8JPAy9FYytrz4cye1dKm8bfYPwgvw2nvi2c4Kfptv1dC2",
  "key4": "YmgwToEpYX6Mz3VMzKLFn5mTYdABYPHtXa1NGSgBuYw7KqNxuTP3p8345U7LoeJvm4gP6dceHSCduuyGX7kAMzb",
  "key5": "2MMCoCQBwkdFNvk6qQCmeP1VcUXb2pZGCm3q4kQFsHimCRmeoj32mLvsqUgA6DVRbdaRYvwKavipnDWTNkq6G2R9",
  "key6": "3JzrDL992VWVz7Tzt8aXmSqGf9GC4Tdj1uqHobYDYQFDxKbtiQXCU8o1m4AFiLeQR6BZe4YqB4Sv8VABMhabZ4VX",
  "key7": "2nFDeLnx6PozMnPtXn2t3kozTDJFEGacscQWapwaSFDJKp66z97WtdrJ9c19x6QFftg4D27oyYWqAcsBWpEgN7qb",
  "key8": "479mYpTgqG8cc4yr99gyyAjaDJDPQDP1Z9tcuAnWCNmnay2Cb3THxm9LZgA5J1oR8Yr8KPDr3dSKSjuFKDshAMJ9",
  "key9": "2rfnsFwiAGYQ7RoAgC79yxvQeqjHL3txc6L6U8wJwxkddbMU9yEYsmtCA1pZBtApqarRbSHRrnthGmrntsMPCUNp",
  "key10": "43jC5DPgfXg8nWjX8awp9nvDGdL9FePrHdMX9ZeZiXBRFyx4ZJeCkGHebbZob6Ufjhrb2Zyh9osSoN552qyzTuFf",
  "key11": "ndzJzCt2PZdNLim2RcCr8FL1US1Kg6v3nrTwd8KQmKguHDGWBag14ah5TiJuYDGCCWqZX2XwdRDRBJsKVFM4fti",
  "key12": "3sosg1Zceiy3sy1YoADAGWV76rMdzeBuXE8L4bxRKCUQAnsE7fTzSagC47tGHEvw4KjSJoL7L2r4AQB8597Kyscs",
  "key13": "y6m8UoHVZXgzJtTQZQ8SgkCbJNG4yA9UbGeXwZGbnHnsVkxcshkK9E291sEyfyEgYnEtax3aeNk5UepZBSf5WX7",
  "key14": "2wevB5NU4Pf1R3YE7d9HJQ9ewWMS8ztXcQtBp1GHdaKzFrBReZxhJydFav7qVXLJgqvF3Zti6mk2ecpjd6EFjSdZ",
  "key15": "2qcnzcTW7sEzjwjUytWCjgu4eukA7fLsEHEY9fhXvFNifQ3AibFUPZLqUaebVye7yk9SYGNWBJL13T69qV4Ydo9F",
  "key16": "Kc2U8hZgSTFXLZrNg4FVGL6MkSDJhhNSotfEq64AgXi62ffAFjYFpxM9wQumvspLCFDtosVLrzo57dfHncfrtkp",
  "key17": "2XAuuSwWd2rguh6ssw9u2facXmX6637DKS8QfcmaD1scqYxcyr6NWkcYQYMifYzgUwuzVci1iBUzhyYLHPpLQq7o",
  "key18": "ECPbKmPysjCGz7rxXbgu4kTBae6MaGN5kY8avgDgG8uoQbzBd74bxutKZR8TPaAUSSADcKgWHhLatSRgYERE5sx",
  "key19": "T8gF2XwiebCshoehw3oBd82wi5qRShUJmYjyvneaz6dorREoeyitjaMNszmd7meqdV3PCLNRDybBcjqr62P78JH",
  "key20": "NyRJzTxJQFumUXA2YgrioXDVmR1neiYc6zQGEhamK5zzX72Q6TvvRn4ZBh17xhQgvVN2RrGLHi9PbqgibxGvCVo",
  "key21": "3gELR8Xr4VAtrYBHDDe7ZZteQhfesRJ4Dvx23V9YyHaGTfHk8KMHinSaaKBDRyfGwqRFTym4acDYszURcKwsyVWM",
  "key22": "5Gz1UNokQEkYcXCkAypenBsbvdeKYSBzVcRtLXwu5Jz6CdGFGGknkxYNkRBm1ujzw8oYuzCA8QviZhqGzYAyrYQP",
  "key23": "3w9FjtKoaZqLUq9R7PkH68sxLQ75geWwoi7cjWbBfNBjXYKV33Yu7myH1SSEo2rj4rGdmTR9uJDpkbTXdefFLhqk",
  "key24": "5woxxQcY4qjFFTXpm6oH15V6YCYXXemwpcwatwXYuPAJc9C7WYY3oXeCDxdQwB1Nh11qthVSjUdGiPBBG1HArMcw",
  "key25": "dBYumHQYepoBzriGPREqUvPmqPxdfjB1ZwAG83oFtVSm4W8FkaSSMhCaBwZNjUVkQTzsAhUcb7Az6NtLCLbxxaA",
  "key26": "2A1RAPuFKkrwFH2ae5tKfvRmjPxV6xGEqLxdgYeAugRsHk9KY2HCHExPAKh8AfCZFy2QhjGuhZWVqqDba8WJn5Vc",
  "key27": "51fNK5rAhnFPDMhru1arfYPRSFoBdN2PRJEqv3rwS6dS8vrooQa5RwDLK1DE4pNzNqoKvC57PKofcZquUZQbLQW",
  "key28": "jafHb7uNw5Htmr32UbTHgtJdD9S5XBVYvCyrGMhgnUEZyi6kkBWPx7AH5izWFvS2t9XAy7PGMtYvpWUsLYfbZdD",
  "key29": "2o3jUCENjUMU4c7Cup4vkLQLg94zJNdqFSaSnJuWvtsCJYN5JSC2v8BufXzvJwb6Ygwdu7HPA8nfr6Y3EMVgGQxX",
  "key30": "iZCw1xoGzxnHe1mGg3h73XVjY1ASrCUsaaFknG1v2wRzZVaNEdpaYdG7oG8cKpe1b9AJbFZZH8vgvnGwMHNdkNW",
  "key31": "4D1Ck5MNfsS5ybv8wbS2R4JfBCWdA5zyHmKQskL7wKE5MvhQsDwXRfkxx6FvEZ7DB8mo9V2uwaPzwuBHe6tJPy1b",
  "key32": "3ZzVdx8HfZV3j4WcUkvxYqYUpJYBJAvy9Wkk4TtKoP8kcwTdAXAJhN8dg9Nikzn2A1rf6m8KY9DbEmPSKnRWrcwp",
  "key33": "3Ui91tXfzWdpVqbWRqzzkzWch2M2UT7v3oLFigEpQJXmLRJNvDUeeBwUrTr2DSLw9h7Xbc4fvnAr5DJxU4fbnEEi",
  "key34": "5aZC3mAEDLfAuPBrYoFWD1WKiBJC2i7LwTbgF3gdN5Nf2Dk6T8AvYFtB4KdYYTJrw3W9SQTEZxvLR5gai15ouJT4",
  "key35": "3EXbv3vRQJmioHrXYLsUPztjJnLHwrci778yswEzFKTuuMtkCrxxSShHCQ1Ygk7DxDY5shj51BgqBnLmwdpkG4Rb",
  "key36": "5tAQYC1hWnj4QPK51vEmKpqs9YBtgeV6YUvkNWzXpXe5yDWy8n91LVq3QXeqP6HbBwwbD8Tmx6QZ3Zp8iywhzKtV",
  "key37": "5xbLUMtBXfaHkX5LCX93eMYcQcqic1zbvkAV6GGZkFrx4imiuXRKvp4dAiJUzV1eTCstJ3oDJUABzoXeCzoDkmvg",
  "key38": "27W6zpybx4Pvq1DWb5XYVpQXKEwhsZpXRz1y7uLR7KP39j6obbZAmmZUPH4RmoWTTXJe55iG3SzdufDQvzAzATYo",
  "key39": "5nYFbaG5a2BfebEFzwpdwLhV1mhxTSAjXP7eptiy4MHhFXHc9Nf4UzUo1aQ5KPb3CuwFe7XZKz9abCTe9ZjAX8up",
  "key40": "4VtQSQSmoGCpUZmWiJnjFE2bwL6JnxXPbRDugbLBVDVzCYgsK92ZY9oqPKncccK4squnzk9JZSQNP4TZoG9Be8ov",
  "key41": "2qrfbFQXFRz6KJQMiB25MV7HWav8getvvCHq9vG9LadPR4TXmeRyvcqb5P3xfQjG7zbegyioaV5NsWzp4soh2QmL",
  "key42": "3amsnk7Rq26gdoUEx83JdbA8VwjDq9VWMeVkPFEcHxFHJEvJ11x1cjDt3FMbyKFMK31iPDzVwE6Pcen452aCCSdc",
  "key43": "iVjnVzMxtev1kSmUd3YrqkmcXmngn9n9aHW29ZLAtMghsRLYVQu2ejM6Sq2HLeMxpryHYrhquSgQREf3R3EzDuu"
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
