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
    "TyEQxdYC4CSmgTJNABThSh3hKJKsqhkbHABf1E1wLcQBpUm77tR43pTHJsNC23CTe8Y7ZcFVM56ZYtXyUfJrUK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27U2BYEXANMAChqbhEVXjVzf1U4rmTp9L2oetfHuZopqHnAeKwEFFPu2RxJEf7PFap6UTz6GtoxnK7pjH18f7Mw3",
  "key1": "2Ee3M6gLCuD22xbBezMfBdZskSMNSDiQGJb9FvEiimUeUMYUkjNTprfUXAZbNtFTKGoM7918uSKdXLvwdDwRryKf",
  "key2": "4wHp3FvVWi4CU4BFKHzuKSmCjMg7EBXn6VQARaJ2XPDLk5fYvFdBfLRgyqcjYiprsbUXLCAgsvqqQqdkQgTARPBG",
  "key3": "QgaAos1BHGrbacA9hZKif7aKV9Ke4FyKmmnMvwLBo9hPWUHv6a8ED6wLgQTCZsfkE1w76dFNXaFseRuqBXVcNN9",
  "key4": "5egppnzcgcHHmoCz55Rm9HB4RYoQTd5qG2qxqMUjNC9zoyMN9HBjvMfahPKrZV2PsYm6JieX7BBq4Fu6N1JHbYsm",
  "key5": "42hnj5oYNivpXcHBCrWHpLytBxYhQGpWiDtcAy1b78FCTEkvD7JjfQXJhREyLpN3nUUdsytQEPtr9JRdXD85wkh",
  "key6": "5pcQDpus95j853pHhP6LUcecsrWy2dPyd9W6fGg1CwwqYwDx9J2SkUZ8jWLSX69Q6WyMGJMAcd3fRPGcrocKjMz4",
  "key7": "4fHNihufeNpjq94w9vAWoM7fwH8gGggo7m8WQ6xsinuMWwierMWCR77LXeZwerbdsuy8g2xo3aTNXoyo95PuTLVD",
  "key8": "2dZRubkfunStzN4AfFaXma5hR5cPz9CTX7842XrpGFzwrTWyBkhec2SpSFSN7cBbAiDDn6jBnjGdT3AAy2siFaEn",
  "key9": "4ZDL3y2ZGzm9MKHLUTsLFxj8DvjnkDswGNBv6YK7AWisJcWVCd5xkGV4HfwEVDRZT5JFQFcKzWmKTCgd7ppoTxnF",
  "key10": "5N4fHJNwkuD6V96grKLYeZGatGXz55qSL7EQAs7nHxV6NUusoDn7T5xv69u9aGetZk8KwfVFDFYBDLfoN5aAsBCq",
  "key11": "4uxwnX19rLZ89TeZcsBtJq9BmzzWUX7EG33vUKdscp9xCwFupvNV3m2sc7wBohPg7ZRmqMezd3okUEMJ8Wv6FmC8",
  "key12": "4e8GRGrfC5qGkXEZLEwb9a2oijzGpKd8TDSeKYgT75e7dPHYmNBkKiMy3boHoBMMJ96HebugzrB7gw6YgiADDPRP",
  "key13": "BLLUEN5C2FJL8ivtd6figM8wm8noy33U9mU7oPQTuK3uS8LrbFZwARv6tuPpEAFtifQku57dPXg14ad6HzEahJ3",
  "key14": "3dnPrp2T67FpNkWmiT8Zhhvupncp9SdxHYx8rtPzMqJxqPhYqgCAmjRRNPq7ZsxYHk7THhq2ewHEF2xJ95E1STUR",
  "key15": "2cLD8y7UwfdpHhdDVrhdGopWi2DoBr81eXrXbaDWobgFDow4VW1zoSkzjQthus3cPTpfrczoUXqhdPZqEp1wKKCN",
  "key16": "64EERP3Z1Kkn8wWCPxesK2DVjuGoddeSnzfDYiVqAfoEpYtWQgCs36KePtexCSzmnUj82qirX1Wu6QwMTDF23xec",
  "key17": "42dG796e3MQnGfSzkzApEa25WZXGwJyy8SXRMestMwtRUWgkJHBhCn3Pwcnbt9W2EqWBMsZk7EEZ9iD4B4csHF11",
  "key18": "2tq5WZhfBYkfUs775Bt7wqgTrSuduQ7mVKkYaCCsiDKJ4z9sr51jyoDG49H6eCogbYKE1uye6WvPEyMgEAtAs6R9",
  "key19": "5DmxShxFm2HdJXzGBVTANR9zroQs4TWW3qNAKeGtqDHuGv93RXND6Gwmh9fiVnLxH5CWazvczh8Vuy29r6wXcrY",
  "key20": "4FfcSsKTQweMuHvYFyFeBcKFeGDsXHGsnNjj9yD4Wuej4pY5cm9cTphxLNis1aFCk9fudEQqh3FLDiBy5fs34pYG",
  "key21": "5admd714XtWBMXoXVUfvNriswDzfUVn3jbTCfasqcyvvxuBGnqewberkRB2BciEpdmFrkbyVTKjEuJHMiGyHpjDB",
  "key22": "gyc9k1D32wDc6Lz6ZXu2yXCZTaiHAJsZ6Zv1bMsP4KXgtHsCfzw7hZW3EsaVnqbmxYzMAxknirh6QTBxZXiR5vc",
  "key23": "267sNd1gusvZWWX69qcUQq32YZwCE3URScedHzMJtY4ryCcUCi9omWdRQGpeEN1cUQexTzxRdAQSL5S8Ft1MdZTs",
  "key24": "bQA2BkYrtRGwsqKZzyYMk6Loc8utcoUkFBdwYuqYaeTp13ppE4YJkUtY8mzZn1BgvSNmSr2p6jwXsDgoyuctHEW",
  "key25": "4n5oYAar1rMjnnT4s1fMHfRae3cc6Cw7b4apR3nX3yFuX6nZiwQuRQH2HQeDT6MvZAxDx2FJjGaXv1MgbUMnTX44",
  "key26": "2XCSg9e8Kc5nVGDscRfo7XqbhQUR1X58K78jAuPUusyYsnv4umvvuw6Mtheiz3K9VHFGQqfMG5VGPxQb79c7Vkgf",
  "key27": "5VeEmzgQUXbP5TEvJvuaRXwHrYapHnH9gtKVDM96K2aFpqbmznbBzMemAwVzkLzxtaaWSmfsi7KmuNabrLxPiaQr",
  "key28": "4ntExDieLkfxg1i4wyDBqKXPJu84gGewyZ7TjDDZuZEaipKUJFGmxkvZXxCEWLjRyMj7oBLnnFVt9nTEycThM1vu",
  "key29": "3Dw58JSgt4Z1cFxc2Exyc9HEFKf34BzoCB4CtrHdptt9VCVuXc9fTaFo7mLhL7ovPjHij1j1KioctiC2vqvJojD3",
  "key30": "uX9PtQ1B8LaEWXyapSv8XvEdwE84FyPnoXqMFshvJdrgHkc3FgEuC4fUD1umMYtnnjmYt6NCBDzxxGH3ggojqgY",
  "key31": "3NdcN6EvQGfd6EFvWgQnVsPq3q49rxgoXzD8L3QKgCDNpDDH78UfZ44Fae1JzPrCNbD7DAWHuu24kXs3LAgqbTQz",
  "key32": "CZKg1QXZZJjv41mWRKbY6avdwsDopP6aigmFExQ45i18ASkqMBCPQA3Si94VRQB823Grp6eggsbNsp6ufw2xZQT",
  "key33": "3YfRuXjEPwoVo8b3FrCdxQq2UroXc3Y8o6foLxH6ujmNkxjHp5z1sXLeDzJENknsvuN28EMLj76pqjMTZ5tT25Gb",
  "key34": "3cn4PksNoHdy37BrGLXfse8QgL8eV8EbWubtpL73YeYj8z9s9x12dWCU1YwHbsNVs2w6tTnKp47vg6FCWj4jmTiC",
  "key35": "4pzvbBT8DohLJn27htkzLMeFo5keyZ6Bp68oGzXfvqWzqVPbp5EkkobnQNjcvbAYMZDrCRUFbSo3MMgnrR68C2JL",
  "key36": "otaxX2aZJEjcR6cn3uvtvXY6oG5CzMmvsWtpy1xytMWpkvkv1FgGJqATU9jc3WbZm8TNGBLckiq7K8qPiY5epp9",
  "key37": "5dB52QJQcdTGvDAderaaiS5VDfvaCK9RqjR1ZYMPtrKQJAUr9UiYErzLxnfdLBNtniM5pk7mA2QRGaHQoPzNkp1b",
  "key38": "25S87L3GbbkQa3trHcnPModTRem8Rx8BUdPkqQEqvXUQn8mAJcUgqkBgaG2M5PszerQy5wAS1Muv6kv3TfjLebwZ",
  "key39": "49taNxVnygsrb6nkZqX1D7ubBFwUhFtBtWM9VwJSEaSuY96hzwLiKaF14DjbmKfJJYjc5ZbkAfABZ2uiTLc8wLSB",
  "key40": "2axboBHFBYJ343uj7wweifkejmkTX7zJmUAk4RZhDJSrSpTbwBjfDytKCycATrCwp2cMitBN95WMh5A6Juw9n2KZ",
  "key41": "4FtCoeSYMHw2qGDYmV3jHSqpZTsteXCiQwMnHYgW1XAwwYLGABqvLQodCpYc9Uy2o9Ut7mXUig2RoWoNfadbY5Vv",
  "key42": "4Fe7fxCfN2qGqtqssD1H4DMDgbPUn7Y5BqfKmeafkannmamL81WVY4GeqaRusGCVbJEbXbV4rq2qKVxWtordtgw9"
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
