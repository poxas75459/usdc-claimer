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
    "5mwQTq4kxu2ZGKxpUt5CWuP1AMcjewfHsKCa4DZ3ZaXsh9exAMH2zKNKcGKU3WTmDbG3Kk7UQTTPWEwq8r7DAQMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wdtd3jd9KR3NoFvNp1WGbewXc9Uer8EUGcKsgzaMsBi5qR5j5sPjKkNNjyr5oco2LEWGJfNSPKe2EHje24Qwf64",
  "key1": "34q4Vc9bDXhEuJYmAUDw2KnpcPKpdtBQAJZ7EiW2cRXBJBK2dE1PecGbA9WpaArmbDjBopwAX74411FxX8M2Zz5E",
  "key2": "Linh6xt7qbJt9icJyqtToFuac2cksTMxihqBTciPhGzfRQfbnawAxXtPV4o9HFBBXymdT2z3RRxDUDWrNKnEoE3",
  "key3": "FBun1i4WWmxcKzXZVxgpbuCFcXACpTsweqWiDk2tTfUoW1iX44e8nVb1gabxvCsEEnU3tCExCqurebii6fSMpfj",
  "key4": "4zE3wChjQdGEVePYmvFqygymF6S3qiuzhwgXmGUDYJKwZietrxRJyY3B9U9v6GGSRgrUUEo8NfzDqvjnQGAtKAMQ",
  "key5": "5YbKXcp4qfea4fYgeMp2tQygmsN4HD5mdqJnTuRDQ1AHNsBziYDDZwoPYEXAozgZmmMd5SZ5mx3C1vCXTYUtDT4Y",
  "key6": "48TVLGAR7VRoE9wsKJ25wabF3Hrnqpz8xxCVNjMwomD8RumgQcsnZfCsbDG5qaTDTyvYQySnbB79LRB6zSNkGY5Q",
  "key7": "Qf4Dp11zC84M1ZWtPBBwU3RrZa8e9FhGe2s7wf9boV1tTdQEKtHwwTHr4oqv9y6Jqyb6an2SvDS7zVr7dLnrau5",
  "key8": "5t2bae5tMuLRi9e2gxpME1Jvr1jRGUg3TWbigmHnVZu5eiGhGmJNzMjnk8gFhSXNoTXp3M36QBeaHdosjiAtQCLo",
  "key9": "14ZsN7neaTkTp55gALNttaGebnZfqwwLFd1K2nQK1jWRUHpNWU5CKtwu7hdi6uJcs8YCu53NskvXpHeUNtvpbbc",
  "key10": "5HEJo9WpEAfqBcpu9tri6patwJisUNvUb9WMPcnch9jrPeYzGmxcraX8zifsY1DpX7ohGcDCJa3JbzcnosUiiMeV",
  "key11": "51ySUzcGsu2XN6sXx3UXCYdw91ovxxmWXdabxFch8pKnBz8tJULvJKk1vnDBmTvQWbwFS5NKesWhQHZUkNCuLura",
  "key12": "48jfygHHX6cw8XnsfU2GKM5Fg68WuCrnr2uTJaoVtboAugWcyKievEBRBF6JHHHjSkzAts3WSJda49mpkT5jRMsJ",
  "key13": "2BogmREQegPAMxxUydi2frFoWLmPiLhrKej1rJAWNeR9iaP5enFzf3xRX1sE4SbToHiEni4mHztaeqhBDCjWu3w7",
  "key14": "2y1SvbLRB9P8V4G2g7Gcny6KRb7qpZcewyk11zfvrQZ1hnaRjnzBbGpK1aKudB6zoEFMLJGEwSZvv25Dep9e3qmd",
  "key15": "4uMssv3jFRexWHAmLaawUtTN6bP5m6HXrRkL4sLtn3ebEfYspUBnNiDmUah2PtZx3D5zwGZ8wqKp9A3QPVr8T2qR",
  "key16": "2Hum9U4mt5NA8WZz48wYvdQ29v4r8LGe8a2ET4KFaWj2cdY67UQQLs9Wz1gwcfsYZk2Pk8pQXHqdZj6CmkNi4qHV",
  "key17": "2UeT9qh3qpQRm6W6SyB9p7Z3pYwf3KfuX7CxLaM5kpt3y6PGePCpbjZ9MQwJxd3qFq7hmgEYHrQRotS3yqRMcHxY",
  "key18": "2tnAh22hVpjGFtkPHYqbC4Uyk7XfjHYumm8Jw8u1mzmAFzEw7GnzuLbavjXcwTgobKt2CeEQmdWEZumgareBemmw",
  "key19": "5Q2owqQWhh7Z4r134Bqm7PTrWJ9ZxQf6uG4Mn16THyXeyZnBcdrU1uB7vk49Sy4B8QoWyRFNg1qL8sPFr2SpmbSh",
  "key20": "5DUJ7mCFH1a8S3oVhRqaKL45SB5oBDpL94ysqK8Ltr21Q4VUvwJrRCSuoWXPtnYq8nVC3VEzL2HizWHtiaqZ256f",
  "key21": "4i9MVgYD99JvHU3ksa9pBzRPuY3vSLQ2nukRk1BD9Y9f3WNAZrEEuAs6SCz2xHCMnxUQqnU1ppg23pevJbm3Mc29",
  "key22": "3C31df4tUbDrZ5rfJmnvXriEosMPNx4f2HpuXero5CCM6jZqLXhK88uvjj4Q4Jtjiu56C8SzoZvYKyWWoCH5XPM4",
  "key23": "17iXvfQ6SqawaxyhHsbB19QRBE5N6ktECYXDyw4vojj9QB62dfj3dqNXMX3jHnM6izYFEGf8P3PoiAtCYzLkG4u",
  "key24": "qmxGbKPUFpbuwMhhNELftMPBKj6wxst2daN8uCxyG6C9PrHbTxUPmMHwf4HGDsDC2tb3GWQVbcgLsYX2u2cRrgP",
  "key25": "67cs2BwXivLXcaRYPKnCE37nESEs3KdCQgUTGmk8yiM1kbPDdnwb49KKXQ5VA9FuicWJsbiS8wo3EPf4BBEi6Sjg",
  "key26": "3fY9vCqyfeJ9c9ah5T3x31NrH8WBVoaxtZYzpHSEu8wVyuMR2PWctQHSkb3GMZryhekQhKTaYhnVAwyioFo4exn5",
  "key27": "21ugQYAmRWyEQ3zT6WjLkRhZUKE4PywqwAwvYmGwGKqSDkqt29ZxtvaxbFSS28x3TimC2ZwEDpHjaxxUzKMGAwAq",
  "key28": "cz1HNQmvrgJhexahWyfzGbYCLLwnSs1w5G7Fws9m6yxhwCGwmaimyJCQgJYZip6PCDLJdTPmubFuexPXtK3Aohv",
  "key29": "U8ZpEN6X2JqpvHT31tmzMsM2JvHtySnGEZDbGC8vwrxsK7B3jgo4zyXEwVBDHqhweF7fwCEdmQFao3jSex2G1fi",
  "key30": "5bE33WMXgH1G4mz31EKJJUFBpUiKTewQ7LBReZDcGKH3ir2ah1wR2bES5qySuuJN8am4x9zxQ13gmA5NCKgTjZBJ",
  "key31": "3hWuwPxn3QmJ4G2hwTYMZQKYpbxA6DNT1ZysFH67F4hHXXVh6NpFzubveJ5QarohX8JoXfXRKZaYrtZrUhcqit5E",
  "key32": "5A9HN6gEoPHNepHJdNQrBLWTwf3q7gXGyTviRNp8aH3NCswN7FhHRkFUvofBWfrSKTeYNmdtrG9PMmHnkyiZwq41",
  "key33": "3wnV1Pb9DdG4VN6VLXTFuF4hoDvxYKXMP2cnVsHWDXeaFp3DeVfTEpwcAQE3fgVpzFHzK5UeF1X5aQp4SBmymfkE",
  "key34": "3TUBAkQt8nqXcH1diZPgcUsxP9LzcRNcBsy3yFG95yQxnqZNN1ucoX1uyaSN4T3hsBbd33RnCnauTf8mForzzb8o",
  "key35": "2zuh21iWgbjUC2fXFxsPbhcdijj9zRmNxZaaze2CdZ58e63DY5Z9dZWB9yQXiyRc5BHmnKDo21rBZeZnHKLjXmR9",
  "key36": "2FLRZuAa15gLRTHZAFnvemXnGPZx4D4dq7iVZMPmwiDp51cVJVJTY8Rr3RfXPx9zXMGvuJ7XcdrDs2MszDK6Pkjb",
  "key37": "3XcFfBTQynQdHzu9r6Vu4cd3MUVVTTjuTMrNJCe3zH6zj9FHgKCidToEPTPttcoRnnMkAWcATG6Df8CTFUo2DA2L",
  "key38": "2B5Zoqyw47cBvpbWsZixh1eqxps33ZKKitdM1WmoD5Cj3TGWR2u3h6zeeXzVRM7CVWtLF2x2LxyYvn9pUE7ESPNc",
  "key39": "2rrZiLw3eZgvqbzRdcEzdkGEkhhH4MrysfmDj3ezQEQWJcoBJ3pudKT8caAwrBZPLsZFPrMnP8rirsGYeibeCZhB"
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
