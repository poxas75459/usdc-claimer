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
    "D1amgiNfnBmGfJv532t28pSb1ZZyyakDf882VvtVgNRaSzwua1YM2x93M8GZX2uqf58j3p51PaNbFwTtmQfcNLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEX1ZuFT6vjVkzjJsGK1USatucpL1RYxuW71miVbxfFcu8KbwAUpu94owktgMLZWMPXWuxAwKMwmWF9Bp2GYnzi",
  "key1": "5UHUGQ7fE1KWgEm13g13eKX4Lkk9PzcgrTgVvG2mXS4J4nC4MvNA6TsyEnHyxKDayiaBtRqcbhNrzmcUsZVNxCSR",
  "key2": "3jLW7mt7kx4MSeTsEdorxyCvbLv1zL1GryRsj6GCTmnpCABbeRd9HgoGHRVVKppwjpAnaek9RkeTj2VBnw2Lfn5H",
  "key3": "M5xWRdHMp3aGvrBdFzr6cV1NjmpXdfD3dhJTfKqpJCxFJneMY8ydT6HaUTep6xbVAVwb1F6jJC5usPyKG7fxnex",
  "key4": "GeM7cGdwPhGSsJxTC9obrLtTtQBGf7EEMDaAU4dAoNFREMwZMqCw5Z7erwv28zWocUUqj96rWoBEp9HftEN4Afs",
  "key5": "m8SFHEc7RAktV9XhtFPQhpeDhsf9wjRfUiKWMdy1UjoQnVFFqwpcQxVcZDt67CHsD5mPv24ACPkYz2GFHyJV9py",
  "key6": "2MeqhyjVttfoMNmBqYJKjGCHyazpXVQrRKxcUaorACx3atxAM24WPxPFZBtZyLziiKG3mQHJs58KMnpQonPsE11D",
  "key7": "QAmZ7gF5QqXFxUnVG7BnkKgDaeF3vTiVAFbkVo36cteuuWqSZe86gv8sSAHMYAFkMWMKa64oMDMUgfB4tzEdhe9",
  "key8": "554JJkQZrNENPfL2aY59t6jDuAwvbNaAgNjsc1bUbdrEdvQPJ2ocWJBq2JyHzzMjMSJWfHDgiHz2Qp2AtMa749Yj",
  "key9": "4bfZVowgQmEjNeoaP5NuXK7YQPRpSzDSQM6Nmppfh6VSFVPdjt4yuzJ5vyy9PfzUVmoFZxBxbNyJaXS1cQkr3t4d",
  "key10": "67mWuzEVmxM2BzcKAWvLP2XP5wBEX75W1c2gXpc6KWzHqkrr78u3ZZeyb1mmFG297M4W8zwQiieSqTMvAv1qZPx5",
  "key11": "2hUBVFPScsZxWPSdSBvBwEHfi2Y7PFV6x9XMGJ2WzvvkdoWCJh4PfHAdKZrRoy4rmFyoHuWTj6qU1UsDojh5vZdH",
  "key12": "2JgaGKvJyQPYeCDgLvdxkharf5eKLkBYgud8K14odK1Bbvxyqkq1oKCKRgpT7izHA7AtyMgDuiBBbrgeDXCHQSo2",
  "key13": "3XyDEzcGsiMawC54Wg7UexLpTkYoz5Vpd9mwwzosTU2rZKFPKdjVKiXRmwadkojCoWEFvzJvhCYR9VKU5FRJAER3",
  "key14": "67XPes4hY56P8SdJcmmXMBKwkxFy2pPSCy4rkn8HRbedauiXNxa8UwbJ9dkAyvYVP7hNu94ZWebma2gzuB89XAaF",
  "key15": "4LXgPn6gQjiyHUPSa8vSmtF9rbN7BLjqtxjT713iPLHke5LUtVvarqtvBDoZpS29Go4WTFLsxB7mCXFiCWkhzpMN",
  "key16": "4aE7UkuF9F2SfwX43n6XxVPsMgPZss15yFP7brA6ZrfWM2XXmHsRnseKUf8wdPetEqNw3Nr3zXvD7Cw95ZW9TeRc",
  "key17": "xYP8y15zRjfssHJZqZ27LWpEWxr6ZsYUUFqYMKpa8pzEeXUCyG97HPyKUFyupUigRnWZtW3rTEwXF7w7Ds32gMb",
  "key18": "bjEkdXT6yQ2TVV94QhokTnssB42X3hbqnjeqa3h4fefS1vZRUPdt3UL2fXRYfnCrfRyXr5T3CDuzKGEUGMxXeGB",
  "key19": "2SqQ4pqL8oKBAQFokJHPPSYfaKs2BSKnJtFDzpwWKSnKhQPcpKwop51Ldi5r6nyRNeTpfM3qmidDvkUXHmciT7sx",
  "key20": "2FhAejs9dyz7nkyNBz86cfbfrHVxpemFxBkUAMZFT1hx77h6XBc6gubGpZujM9rfpfz3gFfqP4wHL5uJxLmESG2B",
  "key21": "3T4P4TTn5fdssJG57eVVYgvZCpb8gDKhJrMm8NZa5XSf21KbNFTHrRu9fAN8uELzbWMsq3FonWKcL12fzqNmWUAz",
  "key22": "3y8FTvgG1GuqZADf3UoAqA6f5pCcWguXdhmYcgk6J18NvtwWY6dHk2m3aCR5FJaZ2ofwsk13USezvikqsNxjHyuZ",
  "key23": "3MRHno8TcKbehGg1ieq3Qnv3YnB1ictAxbD8Xo9oN29zMhCjggSbvEqJat1jYeFnTC7o4oTcgy8nfKHpTQBBfH7J",
  "key24": "3uLnZsztWxxtdx3SYvS1kaV89V1FsZK2oF9xLA6TVKbCh3DUpGJCX9VQY9x4wBk9xEm6fREzJ4BY6LctrQu9JSyw",
  "key25": "2wFVwUxSmkLbzL2bqXZJhJyEdKjMpDmvWQDprsqWER9MrtcknA6LkbWBo6r6v7DRHS81xRCHpgHaAWH9WPivJ3we",
  "key26": "4n9BdEoVyrozhF5NwKZCxof4XZoFhH2gtKa9TZ7BnohNNNV7QGm4LkRhWCi3EDfnhgpX94nnqxpjL5rNc9avuiVt",
  "key27": "bDu61tkF1XPiSTqPbSsLceJUARD7HZzj8krV8fFRsyhbmvvyCoU9FiFA7FWpEhY3rEXdmQHV7AqvQ7DSejSnMo7",
  "key28": "2QtKNnkSQyczSo4d2LnYdfrkBnnUzAGw3UBuCQyB9K84bQNZase1udT53ddWBvvJa6bdGiwsZnKJCUdw7jwRe4Xh",
  "key29": "2v8ZjNtiwvL7ysaesCg5xYHHfhnkEUrvP2vaEm9RDwH5kxjpWbTyNkvTfGyUDhJ1PjTMtiGf7UzXkQaCHFQ4zKrR",
  "key30": "33B35ctBT7bCnGaRRvEdccGkhgfi7q6GZZdsprjeUqhDRiryktB1BFKpV8Lm7h4zvYTKfv9yGMkYEr3KnbzqqoUR",
  "key31": "2XJBJWcGwNwyoquBFhZsj18XQjkwVWzrTHo9gmYnUivMvF8mYxYQCHPSPHYFPuLPoJ8H3GaFfYu1jkHCrTz14uJt",
  "key32": "2emJj1pMnzTDhJLwMphxJTafp9cbdeqSqmEjELx5PCAMsSkFjCSnCfqUkvT7Kwd9QJTMX5dd4WPRX4Q7Xt9QQu1p",
  "key33": "4kAGdjC6hL8jh5PhjneVQhFF1s4zpscgRo4QCfs92ANu6Bahbz8PQEReDC9ViNuXDW5LnAomfkYn3RDcNyVJfeFE",
  "key34": "Xw4v5udYpdcKDRm2ZpiKV3bcEznM826KsZ3cDCdRJZu11MBwc5GdBxQ9FqeHU5seMia63dLfKmJKdyfEgRt7rpz",
  "key35": "pNYFqSyJcbSa4kQ7KztDc8HeGFM556pduZ7gvJZP73KzAN3g4XdY44R3dEZTTB6dUeK4kugCYywJJphi5uuQJb3",
  "key36": "Hy8ACytYYrmqLD4HYZDUR5y8ntsSjb9qT5pSd94HDTZNwAXUBy4LqmiSSvsTcgoqs4LP35QuHTPGtVK2mjKHHJh",
  "key37": "3oyUMSXBdgoZ4hL3E5AxCsiw3AbPUZoDXT1GcBFDUM6UkMzaFkMQmMDvb7bZrxLZdUNi82NDYSeoi71W4XfFD4Fe",
  "key38": "3mM3meqw2HC2JgLWPbkN69h6Sf9BRbsgX4ngobfr8Jotfky5bXc6GSJUvJSQcjG6DPhPG1pNu3odZTYeaYTq1ut4",
  "key39": "5n72FPpg2KXKuP1UMkPt93xGwA1hPeNV3WofiDMDgKBCvA9p7GeacbsGu8S5Xt5jtxdtnWRHqGUhY4kVVSYscqN3",
  "key40": "2V8vgz57BzjAtoLQZiWTXWmeBEnQCsW9NpUZqG8Xj5rMBFgQv42uyXzHDth8yrgaXpDGATsi2etbBpCTYdEFTxTu",
  "key41": "2DqwATc3HSRvXr9J2mW9R9n1AfMNdb7SUg6R9zTnbkyutDgMRKjMbTCG847ZAwQHkui8Sn6yBDhYnpLAYF9yncSu",
  "key42": "5ZGbjDzmBvD1t6x8bhDZ7b6Wd4sxaDiB9HaNHPnoYQj51B5DFRaFCQ3TX5RXtkem66S9cJbAFJtJo6VUGp5dUqp2",
  "key43": "5T8NRAP7BSVj7sDV8DUvPRHndijdZUwXhLk3L56AD3fXZsndajeXYYXpY8PU1CsgQm7uexLxbKktnh5SXboBkgPY"
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
