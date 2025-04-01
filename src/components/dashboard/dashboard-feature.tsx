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
    "5i3ijFkYWxhxq5PFjHes4bkKc6UuztRXeEnNWVjhggeYL53JEgFeBDc3yA95WvGQrpxG2UXEaqaExh8DHJSmZQBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeyxpZoxUqtdMnxfqaNNkASDTbqPK9XZKSSd1o82rzbXxZfEyjg4Cd29zzXZFH7Zo9wnoBmJT3NkunYjhYfQ54",
  "key1": "2MsMEyDeBpprrCchvvB1a13BUMp8LYqNsrVE4jhqpVrU4ozh3T4GnvscBkAhi77n2C9Lqdy36PZHRccjHU3XUcmW",
  "key2": "2WEwbX5BQ6DKXfHHFdXTW8vuxjX1kM7ZyAnLKjrQuf7mJ2QjSi34z9nGQjoiB5E1SfyrSL1pawckFY1WHkfSBVUo",
  "key3": "2agvxgfRX57htwwKX8Tf8SQsXJKtxWybQt6tjFPhycPfep7g54U5fqcK7MM4P3jSSUQr8VbCXzh4dBfQvKU5wHYt",
  "key4": "f4te8w1RqW5iuyq8fnZSvUkDr8ZXvnLmj2mGznTditCSWPBdW3XpcyuGsrBaUgP2uX8n3sG5YNBjN9eCdvqh2zm",
  "key5": "3TnzBcQ2H3DbUFBLioV8nDapRo3WGLDejwu2CL1GodN27BPGHAffdW1v8s3t3WaHz7neLefQx4kszTezry2DpwU4",
  "key6": "3WHkejGftHr7mRrctdCdigvAE9x8ob29NqEcq9jeZD2TJV3h1HUAXAaqC8bFA7ZE7uXmahYWKvYxeaSoMqKgZ56y",
  "key7": "4WTdTRuPtUn5hYw471dGs3NSQH5Jd4AGMRaHoUEDMqNjoaEouRDzsY5PBTw9BhHbHpesjBk2wMisFbm328Aneoqq",
  "key8": "2AKQUnkoyqeMk6fS3X1GAvzZkFWuAwkA5n4m25DQ4HffDDtd93wy6uZXW5fuY5YzbRBntiXaLj9fmV4UtMr66VQo",
  "key9": "5PMuRstRvv24cvxa9eKzr6mYKvFZRW1UCF3YS213TKojWU71kzzFhvAC681jFD2iPaDBGjALKXZ8oVktjj1uFv86",
  "key10": "5VHtfwjqtGCgvyZREbgrVjbafvC1F9yPwKsv2qvetTgznqFNKqsrG1BuRQBFB6qJsFCRyBL37dzSnfVwh6gUZsDM",
  "key11": "iXAKS3UXZxn3wTM7jSq4GmAywV4g3fS95BkLqwnBndMWEDEHCyhF9afs2ZdpCZC2Srnse5YxLsJoRkkRUibisiT",
  "key12": "5UHvVEMtz32L1eGWD4AuZvPtDdcob8M8rHwboy9FkD5rpcF1Pgdu5THn5AkqYS63LuuhAEsVwH2SmBzUrCUvsJda",
  "key13": "S8eknxhu3CJH89Wer8RAAHt9zHmXLPaPdXJ1QtE3ZDGamzB5nSR42KFHxQV7sAxohcrg4aQNvBb89SqmHJiUmNb",
  "key14": "E6uq5zB4LDgBtc39tP1XLZAAMmaBefVnGmuVazmYkEW8SpyHrh3SZaiyz4K5qtHvFw3PVbVNNnLKVAqBL1te7s6",
  "key15": "3DkunspuE2D6wZYmNcgea4h4vruWTJCGPQsLTY5mCV3gj9U23vjxYKfKd7F7wA8jXvoJQ9DsoA9SC2q6yAJ4pMY5",
  "key16": "DyuL8UxN7HoDCSHe4yDQub4w4sqQyBou9jmcNfcYqUQDSScW3TT1mqzZteCSCruTWH3ttHpkU19uyqUBfREQihR",
  "key17": "3bVrTPjWYmLN32aQt6pLFBcYUJuKNW3pRyDhiZPbMQ8TgGahF9n13yGdbgCT9iTpKrhwTP6FQ5287uoyx3UQFkws",
  "key18": "2LyXwFfu5Ftwrrwr6su8kz3rqTdg1GBq8ftvWX3t1rYeDHM4TFZZVYT1Kv8LsjL5NW6V6ikeenhFiTS9C2jP7JvQ",
  "key19": "5cfaMyiUsqVJG3Hz4bnnjrYsuwSzgEE1d9bLCd59SrWLt2nu4SFAkxMHVrs9EtjF8iYrCrpV8a3UheuYjyztf9tt",
  "key20": "9REpAHGJNMw8xJVTsfKKFs8joxceAQBnTeW6TRYss24WihJkxFwc8YVPV2J3PghKhgv7UD6HHkV65Bk3bwJyzLn",
  "key21": "3dUKBYS5bkuPSWVvsixKFXLG834bN1ywfTruPnrRNkrwh9e9WYqkaKnX7NyvnUmPgoecKLbRawZpcXigFrcgH9d8",
  "key22": "4pQLEgARr9FLLb3GrM18BxntAZmLV3S7MbUzZGrXup1xCDPiFJSfkn8S53ej8B5AkCo4urnDDwj5eyktJE3C4UYu",
  "key23": "5mM6aN6QkRRWduP53wAGFoMnEQsb3AAawsE4CvYtjB8xxp5TKyfSirETQdZwoH8ctjv1mNVoAchywJCSJnv4iWk3",
  "key24": "4NZiqzYT4oQbJsxPDvhifjirNaPB3wGU7fnTSwo96zyt6BLFtddjUMv5sTXgEkNaAVxyyJuAymbceu751YqPbNg1",
  "key25": "5xhQjrjjTrVtgfiY3YMHw2AdaaUVpwznsWxnFXAYWTWbVhnUgbxJN39y3Ze9o23bBvsHB3PCqb584mGqnr2Eyi7G",
  "key26": "5AvSyjMMtSYVPJwJNUkuTZD2EYj3kpX24GxnKcH4o5HFyNrUENZeThTHa5sfEaqkUFsELpfSBDMPfSbCmSmzbT1M",
  "key27": "6waRAxFtW49yTZX8sg7NxzjQfMfY5QPe1DUTUQ7EGYSiSY6338pkAWavCDgXLmxpwSipW6WHzXgXnTcG4ceuSk2",
  "key28": "28jgnfQT1jc2W4ac5j2wmTUa1A9B3wfQSoGZpA67BjwvZwB4thwmX4d2c5xG5dC9CAw4VKrBttoWePtgsi5Lxfvv",
  "key29": "5QEAscJva9qXHprjdYAvHzSAxbyBVnf2y3dhYRHGpmq23Auidjb55LRbenPVnUkPgLAi41t8gBgg62qmLbrSbV1t",
  "key30": "4tTVNEHyUNytPjW8YyNzkwde2z7VDWjKykEAou5vnU4tPovk1xdT78hg2s11v8akBLxJRSfd7Cu35xsAvkTbLi4V",
  "key31": "4SVBbCrCbfAMi5rZphqRJXAmzrraZ6A34NCWpPZtbTHc9FjFNjhRkzZmDZj2MLKbRTU6GSHWuMHFAHZdcjs7V46v",
  "key32": "E7XAZQymAViEJSGeuTpyQTND4XU2patuBCUqhdGDbjKJk6FeD85zyAaGJMPDpZFr2T8HXz79BnpowxVJFugzkY1",
  "key33": "qLSuQSkPr6Fagxb83nqMGBaQKKoTks1F94PoWizk1s4Y6g9Cz6rD7WyUHXMZLB6HHxCtACcjZdQPYYyUQNEezpR",
  "key34": "3tyuYXjZKZwzWvUiUPjhPopqaFcqQqFAt2VU3Ugtwa3jpKbb69gCM7WA56q8pMXW5ncJpScrf19uujbfYhNzgZTv",
  "key35": "563rCYkZpqdznyRTTmNXEnKQkfv9QVBkmJaersN2i4VhyrrcsNPtBZopxjBwLwjNLwpkwzv7J2UUWQ94McUFFCSE",
  "key36": "YSpJnmEWzZPaWRPiJT2oD584kBh3X9q6tUiMenAKuysCB7Hme7smSUtg3dcmDxf8J2ycLmPJ15dVRMzgQbmBPpv",
  "key37": "5kqxoXMSwvYAKzSN8THY7KT1D7wbxFpfnXurfucwkH6YepW8q8hYLUv3yFrGntAqd1uymwFdUmfRre4bEpqAngPC",
  "key38": "3fVCvPkJUfCtpKNAfzd4nRPv1wLxvmXaBqtqVnCsAK1tQPJqcg64xpud9dY2GfF4bMVmQkMBX9sfKutJpurabFxs",
  "key39": "zMHBJ36zb3dvtE5v81ZD4U6mvQiEZKoNYdx6TZAdaZNKSBfBBigvFAsi3LD3iqJZFTVCsCzgZHJnBFVbyWGKJ3L",
  "key40": "28P4B6wAeFbPx8U1seyF5mknsp1tGdsBXRAYHym7LFXAitzB6LTHhANhsjdHQ5dyccMyYv54jPHoRsbh7og9mwkF",
  "key41": "2WZFu6NYcMMDrdRB1QzWnTqJqEWmmRPPQprLiFJKyuPPzWubeMi8TfSnoWYUax39TNL6c49f9bduu1rY2C9ADBx6",
  "key42": "onbxdW4tADHar7uwDRYk3RpD4onQkvnSmTEj6G2r1BybMM62uLHo19XBNVkPg9NHbXhaTFSCDDaiYknucBtsHGW",
  "key43": "5BdZhFSDpey7q9uZ69VcDuAVJqssMwMdY1YrDM5VvKZ4DX7xiXuXRFg1YkBdAEZ5baiM4i621s37iQ7LLJKwQEH",
  "key44": "2Z9bw7Rbyu2LSyGvu2X4eGovaKrGTKHLuUT8pMyRkJTTQgdJpmADGdxW29Np5UE3h2PPKjnhm3daJiLkqNP8Z5Vg",
  "key45": "4F1tT59vUo6t38JNrYLz2GmF8wBd7c7mfXxunLpvxusVNjkGUbsqGwaX3ccEaj6F2WcLn64ZLSBZFvWaW9ViyM9j",
  "key46": "sqV8vbeVQmhm2sZBQJas798VPL4YKzCmgMNFHux38bQ6RKFmF7FFACQgQmt6K3f75ABUoJ2qFWaTsLpP5D4YU3m"
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
