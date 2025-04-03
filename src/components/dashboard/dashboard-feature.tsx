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
    "59qFaNT3ReJaY795ddj1FKNkZfjiaj2VFJLfedAqPQzUujxSeqd5NXrM7xJGXqKAqkckZbGM9b6BcjyF8gW9t14W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qLmu3V7gZbH5L2nMk6PkCncHaZo2iAWa2T4KersKMiFPjb7ZZHDZaNHr5UXDdBUoFKKSZanD4sQKR1ZJtD9ULGp",
  "key1": "vioifaDXq842qKcRcDzMrThkghi6tbGMfMe3Uzc2pKxhmPXSQiWBXYZZHxvKDof3DKEqdN6dyZv472W1qetm2oj",
  "key2": "2wEYQtbR9XRJiwpCUZr3ynybfTwK1Dz3ck689vk8izijUKZxCdXi7v4f1wiA7Anrds5FojcbjbU78Zdrm6yif7vJ",
  "key3": "CrnsVGZ2NdH1QZq76kpv3VuDztuWvxcsJXt6naGHAnb7Kk6Z1dgN5kNPji9RNMHMZbEjGNAZm7Zz9bPaN5oGaae",
  "key4": "3AZw5d4mfc9ktgxekiJCsL4Hm1YjCCMVro1obFsATp9XZnhFhte3NYuqk5SpwzNxbjZBS8kyqwKP3QsYuAza5Un6",
  "key5": "1oqtV3RSCqTkQq4vB3HowAacUtjMVjvRrXB2kZZgMFufHEPWKLh84SwANyQCyjzPgdDu2hiVfiDFS3TyK3RgWRc",
  "key6": "2ixqbZzxAATmScNcD5sGXxbfAUCsopyqaHiRaH2kURq6RhjkFtgNhchXrmZfBmzA1HwnVJWN2HXeusgEs9LYbmiv",
  "key7": "2bSbbXroQSTjyYqgyFegKmzRdaJWNhgy39SEEHeBShy2bMAsYsC1EgJZocdWCnDMBSgJx7wW9WELTKVX5QzWatdZ",
  "key8": "M6BKNPMaNDqt6vnL3Tk52R3Y1PzjtqW6oZFXuJGkqWzjAPoPPX8omhDKM3CSkQpwAPNWQjdCUzHcjhdc3FfkRLw",
  "key9": "2VN4o72hWZdMc7ZztZr7MmJmYoKEbgytzjFx6XJVDuUHpPm4Jp2JirfZkFr48jS5RdxASLnkK1HmodvCsXo6cQxL",
  "key10": "23kWqEuZXmqodqWPmV5NgywmbjA8xzCSQUiJ7vPencYB8yvwBFtyv9SDUjqZm6wCjpSXnVmVPRPwzeDjUaMLZDH3",
  "key11": "44xZU7uxVmp27JHxSdbbgV4sdmCzoXbHsPyAX8RursxyU8LdDPNDgea9F5HfsNTY4iGWuezhCWvW2pmhgJ6CybVe",
  "key12": "5VQKLNrY97BkK4vRYuGH8BMSZjFVMe2N8daZewahbf6AYcikrXUEh37nebCsFpTd2tBhX23m5L3eRC5pSbdk2486",
  "key13": "4gDXCtKM829M4AgGWPyv6v5T1JyNMXCc2Je986f4PizhL12P7zbv59TUS82a7NgMEPcgcTLWzsQm6tjz9mMvrWQi",
  "key14": "5Ec9q4Nd16ncFzkBHyG3BnN2TvzMJdSRegYKDG6QRzmiNK651ph5s34uf4mTvBmoEFbYqtQ9wxzyvYkqTjiMF2f1",
  "key15": "3kYis2jGq6rqj3uiGvC9ZCJj8ejrqKMtQMBvK9MvxjV2bHz7nj2LLdtsZvSS2D5Q6H6Jwup5CZtMk1TN9NapqDSw",
  "key16": "3MBJ8QcQh91WtgZPaLgB69MQUnVqcMDBM9gzGrpXaRCvz9LWpy4AUZaNjwB9g1GZkQhdSymymkBipUr5cYwG2sSm",
  "key17": "5qNCyGdVcyUywDr3p4NbQ3qr57gVwLszHTsJnH82c1fCNwF8TiNLDfDPvikRAtQQfFnJthzme6cjTH6QBr4xcwnA",
  "key18": "5W2kpyhvpT71NnUPgYhvaiAiW7ufhkwgdxhsBCFAB3NzwHZatawvFmjtyFbc9QECT8T8qMjVQGcXYUdVrA3TZC8d",
  "key19": "hhxNZrAC9UWUM7khy8uYiJdDFop3r9YuMQ7oF9uTwXemGcRpYiQzgyanmDVD6JfWPqk65CTjwSiQU53hWxtmwxi",
  "key20": "5uk5AqrCgM78NNBKbc9V82qKv6Gw2KCjZR5ZNNAWUVaY8UkNdrwdsCaensANtMKGTwZhPsq1ZMdsd1n8HBJwxmRD",
  "key21": "4BRCVNfHTmjYL8Z7S23c5Ys5asErtT7Cxzh6fvs5TdLZ1Gh7c3aoviGRsRRPfMttBwerwV8NCmX17j3vd5mYmmPU",
  "key22": "3C21vQxZytfQSXcZ4HF7J6VmvdSzehQpV2g99CTaPN8eTovP1p6UwnbsdKcSVDP6fDmkQwDWHwmWdyaVeGXUC9jg",
  "key23": "4tESSgesUN96nBKkaum1P8gb4Z3tuwgYwwfMKXrMfkytoxDU3U1pNF5tDwFhNtfa7DVrxs1J4b2mtHtc3kJri5Ta",
  "key24": "4DKXM8iDboCrth6yg5AADUwUHDja45ERwMyQqj5XPFJSsdbXdvRPwNKsB1Vbjz5RrnqcPKf2MpYqJCwfSn8ADhAd",
  "key25": "42rjAFmjEKEkDGZKtxj13CEWxMQ7tkKKtcDia8nnbbTWLkbgsgdLYkgMhi5g1W8bJtKHZ3x6f9QRX5t7Xh79yC65",
  "key26": "3xeMXe77UAqnvBcZ4ar47ksgpfp1VKAfjYkMze5YFLMe8f3F9cJDSKSbcUV5aR2vne5xSbFgZLXKMwXHGEjsQNCm",
  "key27": "3P1fJ3pWAQBjpKk6SPURvDCQcBaHgGCymWQZaHVxFVZqtCPP6GwXZWNBMt3L49QPuNTaVan47pbBGL33jKWXQEdH",
  "key28": "bL3AFuws95YnNxs4zwL3u55sLYmu9LEyYvF2YP8wkkNAy3cuXou8fnxxsG6XqSxD5jxWFJW7PtwLKmSS5YgquSt",
  "key29": "5ar1FrWbiiSxcHDFG21bnE3Wg97MWHokv49Aci9ZL8bSZEesHKaLCbwwz1nE7hRCjASQ3rjLBzYgw1eu9PaK5BsN",
  "key30": "32Ab84zWXSmqUXHLSGjTrXcD3jTNZN3VvPobhAkMigugp4UFsFTD9zMJVgANxdaLh2oHAYQpsFXqq6v75kK5Wjg9",
  "key31": "2j4EUsYi6x97mU9pJEg2RmAmkCGCXu5dFmKeDhax65BwE7yZ1V3dvd5RHVpfTMvFJstP2WMM68J2aYTTgTnrsKYo",
  "key32": "3JhV1G3Unkq1wCD9cBUBFL4u7Dc53FmchBngZcN5oqfcaVnnyeic3WTGkhRp7kGbc9K3sCJoW2uphnxqdrFpe3o7",
  "key33": "3rmQQcEsigW5rnw5tiR8xDcF9eWBbDiB4mwcfHU2iER5FS5rEptVZQxueZACDBAjGJjgvNRaXrPw4SVMsqcejwPU",
  "key34": "4re6UKWeH4K8MYw8BiKeyWRuenQQZT3oYax77oi4bHYJcgTc2kvFYatrxT6ac1U8P5UwPtwvH7dyC6T2eMMDw8uQ",
  "key35": "XbDoS124aUynzwDji8SJKpG1T7bT8wsUXzCSBboP38Hdz2cjnDMGsSQE1vGcsHNLq9KQMu693jQh744L3xYgnqx"
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
