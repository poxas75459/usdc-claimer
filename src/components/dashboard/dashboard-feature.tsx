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
    "3PNtdtoCQBwtDTfEwDZLNsxKBtPH3YEsYUf3nn5ZkV39LmPgNLmV7wF8Q5sHTW9y5Cfmy5M4xuq1vwFTNn9TDmyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Az3gEzPmxGJ1b3fYY67YGWxnv7eJcBvH9NS4WBCvmycE7BBnyY4ifqjNporAVNkwriiFF9bZejoiAPiwvbip5KW",
  "key1": "2ZRqjVLWZmuyZTbahZctsDtfFBBfdoVZzvHumL3XpjP6rv6oUecdbKRTqLR68UzdyXjD39VAuSarDJ4iyXd1RdCm",
  "key2": "3V7DtxbeXsKt5gteVTgsVVtzEnW5hbAAz7iL3VicovsPpvpM2fKaRGCpiafDXFB79Fwar2GfeC4Gw5mpjushnr69",
  "key3": "4NC5NkA9Phwfopu9ZJEg4BHm8sQWnmQPFimkwgE12SYLvsJBgQvDS3oRsJqAccwHvq9X2dsTBgJo25TTfRrdkWWa",
  "key4": "vodSCiBg2y65ehqHLADw1bV6p9mm3sgFDHnS5MXDDGKKGeRv2MrNexmfrCCPfN3kkermaSeH1uzVPqjNWdK3BhE",
  "key5": "2EaKJXcAnsiu1Lsrm8gQjhBF2mcdLi7vca4mJLSRePKJ7Sqw5JbgTN9oCdFHKRhyuPjdw3fPhRGNVLNCgHBzn1gh",
  "key6": "3FSgAVTcJp21Ma5f3dMJcokGEv1TBMowgT7WveRwbCzF98Cv818bRAFqYLWtwDyUZrJF5TkUu7mzNEswSGiT4xDs",
  "key7": "5JokkJt8QNoBZPNGPvKUifVWsbLUjTA9ZU3AxQXAdGY9N3XucwRjwrRo2Mpaav9ToZJJBp2nC3M3roiz46LiYAhH",
  "key8": "3r4SNtWqpyjT8MvL5x1hM9msEW8aNWq1CSWpPaEtEW8cdwZp2LAheFBMwBuijVRQ5sEtKF2nywAZ14hcsxjpBFBL",
  "key9": "35ZaUUeNirE1oaGgDmytohZAF5xfhRCwrXTHfp38Ek167FhzDfXVtMZvb1ZRRt8j3CgG5nZtHsAysTYnsLawiDBW",
  "key10": "2kywkxUs5fFgzMVkfcNZmdqJ8GXerSQyxeXHq1Ny2TnautdkAgLSv9K9APYxsRoyqpq24hZaMENKdfpUX4xikrFn",
  "key11": "3UGUAyc2QSEEZ1CkMXXzVvZFDj77Xk11KfGDoGSRNwioyiq82Za9zAHAxtfp79wvCLb4VMyJT7B77tt9sSjWXBfk",
  "key12": "58NXS6ckDfNEEiMEehhnFEt6KTpBQKrxhtW33JSGwUVSCchEvZeNboVqT7TnS4E8UcC44EgH8droGvNPZCoWi7J1",
  "key13": "3AXQPVRCv88WZF25ZPqayZzwTmKuAyjpZSvtXWqZnsGPL7LnHKqLJM9URGipZjGMJEgSJ2gybmdMDPbLvS11ndf9",
  "key14": "4PJEJukgWNdRCaRk9G75JmmScQwENqvevMQAvdQQN5RMGnC8fThXUjAnsDYngeQ4RXV9q2UtWMNddcrarhxBwj7o",
  "key15": "4rUTm43UZbzkhYpjoYpZAYRtDWGgwUzQb9j7wNgGkSbWQfvNn8o7CVkQVY1xqQuD1cDkFAmSHvgw8RrfEtzMr76e",
  "key16": "CfqfWy8RyvV8pgEZHzdvrSZPYZKKZsZzJHgT9PKhBzzFbav8rg8xgAeVjEqg6mLfTRvz2nPTY6jPpY9Ms8ytG4s",
  "key17": "3LXPUr3RzRYhNJWmExXdPTWPUYHMPte8FYrTHwY19xAKFo7QxmFthu7Le827bwtwij6zYENHSsxJnWPrApqHc5UJ",
  "key18": "4CQDsQFSo3dg9uGXh9ALtfNLGKnWGrPkLZHyihNAwBGhEWoUs97CpSa2MwDBjuZ1ButW1BBsH3mbwSit8KVDbgfZ",
  "key19": "3QUyJWyu7pvsdw73nCXDf3ZFVWjbYNZJHcgL4rtYAHR13bAzTgWTzmFirbgyvfTT65xXELr8oEdJ6ks55vXbWpc",
  "key20": "kcyenk4VugCsdPqDUy4roH94uFmS1Um4Y6jwLetwqcjdscEVsHLwAefeegutqMNggZZR7PNUxiG6JEJNxcS28AX",
  "key21": "3Nxjo2g4VPnMUzb7S3ZVBEraUQJQvRBwaC8fk2ysQnuowN4gmRZSCtZ21iqJgRmCVTKo8p3McoD6nTstEfKZnm9B",
  "key22": "4186DDm1Nt1DXRPXzbUtL56jiizxDu8h7BQnGLtiypzgNQLJswMchPAHhs397o56VLox76mfhpUnnXVri58G7gqJ",
  "key23": "3JxBRW7ftsapdEAhGLXXW1Q9kVisTDKeXUVZQhCLRgD7zA6oSH3NyhcV953WyxE6Jg4GdZgzU3g2gXcJYpAr7hW5",
  "key24": "3hHMN1rWAwJXhzBymE8xDB8WuhsN6MJocSizYBgGuSgH47jk5PqLmFDn47PkBM45SDCbj4A5zGiYSnfcsode4HzP",
  "key25": "ppw2RrJ3fjTUfcUcuUyTDyWrxRUYJRk1oFkunznb68LUrcSRJPuan4uRLLMCy29m2sY4bjB88c44JZPATTC1PE8",
  "key26": "3XqB4xkNhEznZtoWqKFJwQPKcJUAJm2zUpqPi3kKEGxDsdySR911h5t9dsHFuV4pF2XmkBuPJ5PHqRqLtXfVJEcc",
  "key27": "ivEfDXgYk2sqtGaJcZmu7anUVN91bj2hrNKAaZycXtYpbrtGCKdi49uaEggZnCA4houA1LvQ8bW4S3W6PEbPD2e",
  "key28": "23N181hNNzVPMa7uosJGtxjJE7466JVNBk16ZP34uQkvJxRKa7m8GShts7gtn5PiZe4ePaU1sNYZ2XKEZXoC745g",
  "key29": "5Dr82Q5pEF5veqDsAWW2uW77oXtKK5YsisPU8pftZW8AS7ZbdhEKTsrfd17DMgxtvKkfNnQFg4mAWtMbzBn4hi86",
  "key30": "34hyWnLnbXfBppxdoqd54ExAbWMx44RQtb7kLkbauyKCBhHrTVSckroNzPcYhP29vXhq7dZ6ZttHHT41eXuCYXpd",
  "key31": "5SBAf2zavi7t7hxBcvR2KpDmak1eogCDpWGDwWRhumeXvP2ib8QFR68kr2Ldbu4HzNzL7MdP7q4sKt5VYUuFvDwc",
  "key32": "3H2fFB4e2pvSeLfLfRLKrKDPAoMdZc4aqXRbrei92s3GYqcrr4ogGzSNy9c59vqe2hzCdvYYx1rd5WZEVE8bSqAj",
  "key33": "4439SUqGh6Lh8FtKTiUAtj3ozWN7NK8u1NDZS7e7MVG2cR6QMYGZLCFa9fEwk87zaUw4GvPptcjUCX9YMEeL1nh8",
  "key34": "424Yp8KsdGW4543pmHvr9RsMLFD4gEFd7HfEiXYxaiHdndyiM2d276fo9Vf5KwDXMMj2KHmrUJZ1cnrBVriAB8cp",
  "key35": "33KtBhB8FgLHX9kbg3apGvA9FrHmNctc5ANF9ce7EwxiGT816NCQJtkhuCS3egn6A63pRSdD3Su4TsKrd6g2fzam",
  "key36": "2Dx4jfyBh9gt7p6zGQL7HgCzdYoUJ8wobRpa591bYTFyqr9sHXfZpRxDpYP2LR2xGXDgPiegoguwecSHtQfh8B5S",
  "key37": "5HJcH5cnYhx9UH3Z6EEYHCqSZTvEZ6ixEkhjY8fmpsKaL21MzPxTE67adTHuHB2DhWYLLr5FzhYLU8EZVqDMDVoH",
  "key38": "4vYs3sjWicJGEeM98mUdt67cboWzXC2zx8QTGFkqozFHfjAyNtmmQuzXqUSoh1F5gXiQ6sVgafr3Xd9JUJ5LidoG",
  "key39": "38xxUTXqLA4mgHb2gcLuqrdsegfrvyNDDK9Txwjxz4mVaRNzug7eDZFNC58UBgHZCzKJuPcRC3AuUoKwS9vuZTP9",
  "key40": "4gFFDpcMyz9M9XifY6x8Fz7PuQZVLPhf5rYN8Q8qZLk6fEDH5bet2vTCAr4nGTC2ozqpiokLKUj7UyiznhYW9tJC",
  "key41": "3kK7KCHhmW9jy8CWLqgd2gLYxkakNM8nNcXeQXLeZRzHjPapVjywhTbFM1iXhMuYWAsTk4wizCe7az5CtVxBKmaK",
  "key42": "4XCCkjERmWAU5w84TNkr6urRkSen6TpVuVB318fpNikWF8g1UAzyF9aty9WtfGPpFCLKJYmrMGYvKXmi5cu2vgGS",
  "key43": "38FPQAisDrJou9u2a8b3xmF3t86SUJxG8C4ftNVWH7tGWhPq9sW6GLi4PJzmox54Si96KDRvdNVz6VcoiC87wDiu"
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
