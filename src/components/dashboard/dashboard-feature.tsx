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
    "2phCVeh2d7RpagtayRE33uw1jraZRLFAzKrA2Mrjj4fApqe7uo9FKdC8yBC7E23XKF3AV8nX4kWw2duaWF2vMKQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zEYPLLaFvZVC1KDfJegk64TiLAa3N7hqGf5kjwmLXRqWJicjhQ5mUrh6Ri8KBp2DAMmwajkddaTAQ2r9rbB9o1z",
  "key1": "TojJXA5VEuYZLXYd9yjYgznSMkTsXKcoxwrskXBFbWZwJ1heKuCs5pPaMZpV1rYV7CTi2jzG4xAU92i3SgPW5ar",
  "key2": "T4toUMLfKvfff9Ucx4wEPQ66FeVHS26GTsrdvXTWC9FFRGdnNozxBYX2TNvcU6GDBkWF4Ln8m6d49LaQ3vgXwxM",
  "key3": "2sBjhsFqMu4kmYWL58XkGgZ4QnsGo4F9gzKwG2vaWHHurr6uhLRRzdeYtqSjYr9WomPhTyLpG7uZPZSF9QT9HT3t",
  "key4": "8sGCof9K2YTdnRmgHuWRJPxwRVsTTna6XDGpWdHzocWa4rGiESDWVfAadUi5GtJbg7w5nFyshm3a6R1xnz7aCMS",
  "key5": "34H7ehYdhLwpa2rZKpzDirWEZH8m4pnCp2KVvetsR3QC6focQ9N9BAZcN7bUBex84PzRVzSeZsHodwdSgGyG8GST",
  "key6": "4xWdMzhj8gj1CFszQtr2gakTaFJQuypstE12VhYpnNZZzJvVYjenerjmeTzA6bA1R7j3cedWAwNGJKy6rzuZcH43",
  "key7": "67JNhprr9UNY1KSAht93srHEyqbYti5yzJ9TZJ4wVo3fgmwnaJb5yMr38EJajRkE9JjcgYsyw7RXARUDbA5KUDCY",
  "key8": "5hfnVzEckwrSEbS911nb3gXiLL39DvKiVmFVXivSqQMExaJVi6KtuaSn2Ne84WCzT5sT7W9oTBG9WG1Um35LXpmk",
  "key9": "5jzAsqh4JN1Vhys7UyYPNkrgBMPMEFXpRH6f6krPpFt1Vy5KtR9f8ZeEkH3dPEt7vnqAdpXdktzmVRJwrs479wRw",
  "key10": "3aAC65qtB1RpvfiAMbKm9RX3S2RGt7ZJacgXrdh2JMWzMjNHs4kTduz2o557X6XgA3FPEKcKDAcMPserqtkUhWnS",
  "key11": "3RRj7TcvmqMLLLWTGLdLGePer4fRZKEKjGZ8DVDgawukwTUTzHFHXKkHhiNsrcpp49ZVtmXxcxgHtMB4kAXvQGkC",
  "key12": "5KMHBYBMpYSwwhdKmmB2Do5ogQvqXJYS7bwEPshrrsQoc73CCPiw1gbkg6AtXcpi27ZTS6D4T4w6QaVB8YXDGmWj",
  "key13": "3gWTign3XjBiCY2xe9S6ieQ9XrpWP5EbV4G798hD6UB2Rm13Ry181cBxhaaextXsfTL33XLqNYS9T9Nidhg3arhH",
  "key14": "krCiBymPw4yGGcUuZ3HJG2bsUXQLCzvCrJosDsGsM58YzZ5d3J9iWrsKdrsaCJJLGBfn8XpmLNQUHDYG51p5NfS",
  "key15": "3LFeviTroeifAweguawyWUSCnNijcCLcPVkw9QHsPo2HNQ1w5ofz9KtwkSNWrb4XZFqch8CW3PFoM6U7XgvEcc5g",
  "key16": "27H68j4FWcDXqG7z5MUtEwgKUnMVLTF4tDGf8M9s179uJtFFAdQ2dMtKsRu9KmuAC9kbSnXaZ7dUv8KwA9CHq7ib",
  "key17": "xyrj6E71GK6fSGDhrCTxzdGwnPnYnnCajW5h3jiFzmYiXkwchNYTx9xMRufJ1VADpZsjMezdGDvrjFjEFVr2jMx",
  "key18": "4pDDVJCf8ByYHkCZfYEnqChLg5RkbcJ7VcnpoZWiBNgjpCsd1JQ14WhjhrkpD8RUKCYdCJP3iUsSchtPmMZZeS7A",
  "key19": "3gtJkahQF37ef8N7g1Fm6jCBAtsNkJSUjwhTxe9RZeB1br8CfomsPdNYThPLFJxRLjCV8WdH7eqV6UuQjDVYNSai",
  "key20": "52CiqrMjbgLkg9GmMDNxYEHjrZNRZ3CRTWR8dWM5zgQfhUK5kF8Edyw1tE1PP13sS1hEfYXA2CU7dH5cN9ejyEut",
  "key21": "3kyhFPQw4FN7pQtZqrMu22uF9iTzGCuXZ36PJ5mpH7TkbBFvWBfZ7hSjdeQfqxGbDKT7YU6LSd7fp8K8uzY8zDeV",
  "key22": "3E4Knu1qMYUQfmn2QsnHTU2au9nmkU3KFxCvt4seq8DQtytRzYAt6oDAfqy8CcqarnKbWc62tkzt1QXGzJoCandj",
  "key23": "3FvVEk1p8sX8YYiHeXbbTqKQufboqBUvDoVMjeW4m1Rgg6EBQe6JA4aFzPqZNEfJNL6F6cmDYiWyVVD9MPMxKNXX",
  "key24": "32a5SqH8wcpTnXJYmGrHsmA5dujLHna5DDCvQp3FgPr7LC11dMZhhTzphKV1GyJ1s3S3NAYjMnJyPGHGwY3xb7oi",
  "key25": "618kRtbuFyoERktKY2ytq1PfP4RrQ3hQTXiKaWGbuEGXx5Xu5tyq8yQmNCqrmDq3iXj48gMQVkb1W7qcvxEzo8Hy",
  "key26": "42rmdVoRf7pgw1UgMFJVhepKVoGKTAMKHompzdQu4hvDfnEG1fEULyijWLuTZisRfteRmmDgjVvNpxbq5gqeuUj7",
  "key27": "5nr2x5izcmxSSn3YLcgMSeF6gdniUeoDmgm9XmwbDHQeDJU1mPegpyV412yiRcthoFTxUy2ig56nCVrY2qrbgSL",
  "key28": "3CqoByXGxm1hhBAy8zxWULZTeMbaZ7nyg5QCKU42FUkkDkZvA1DZzvmmbfJhyfULvTVph1krZcxh29f4U6wMmTZ4",
  "key29": "5SdMeQB4FChBtkMqURA4Rbpazv6pc5qUGET3kwJYnYiuDuGbAUgKgNdzZRExp6k1RJot8UgYPcHhtWuqTnXik5Q"
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
