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
    "2ZiC6QhMJemUGjEXsdXQQa49dT4yRHsWoxyRDfmjjwd6Bc3f92qtm8BRa5Lpg13gfpLMnDV8zxBcUk54oDzXX7Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uz1RYexhnoji5PKbcWvxYHifLAbYnR84KdmLu7Z4r5SravB1KMGLwfVocdbpNMb4aoVN7NGKwBhDCU6u947eqCo",
  "key1": "2u3s4twnHXTQQHDpeixBjSJkpDc6jEfY64TuyfPXpKuHTM2wCYhVdf8iHs8hk8scbXNpktLpEWpcho9pEYyMGK1x",
  "key2": "4oaW84XU2DHxEx87iw6296HqxbD97hxZpDceN5kAewgCtNyjE7GMjvpvcNJN8hWXz7AwoF495cVWj4x9gZZXhHuQ",
  "key3": "3LyjsTkByUeyjVqScZoUgC7XWGfvFiCaNzth5nrbgQ3WcVk1q8FKbKaHMBzwGxeWDCJrxw39f4WFRAXbVVUhF6zi",
  "key4": "4QQyFwL5vDdtd3NyHVZFt7CvyptZWVezV9SmWwHUDbTPRNGXXLZpdWpadjStd3Fp7q4AvgjP8KnwETFQALqa96Xm",
  "key5": "rA8hMvG5GuobojmWMqH6NdbBFkqVmht5wMp9dN83Gdxx5jRJgBQonc2YGi2ovay34DoZA57gRLEqnSoKKsFSEhC",
  "key6": "5tSQ5X8SActvTbKKLfAu6FsXECZex7cDgyDwP6Zr7mSicTPhkVx6ARDya32oVDy25im4CaTKo1MZ8YxXn5B9mDGH",
  "key7": "5kHfTm1rCmJ3S2WyqtYnJ6CUyhwSz9cLPdV8AitCEJMSV9RVEGen7oJapYEMNZsqLdWpyuFqfEeJV5FHPRg2Uvqn",
  "key8": "7SovqTUsyrxNnr4aEuif7dxNAZdg8t1kjkmkiRfefjBJ4iZ86CphmqmFnGnT7EEi8T9RMmEWfCL4eVe6R5RQe5g",
  "key9": "M8GPexfmAyLCGG8joGzCa8PpqFJMWWocSvPYYXiGxCEsSLHohe14Avjk9qtyg515hJB8jrfJGSjUVtTsoCTVWAJ",
  "key10": "5dydac9oTHodDv41LZtNNuDABdG1CnbDs7L99rrxdWMKXBaVbTejHE2m2ZkZgpZzFoybzE6NhNYLuN8GLrkdezVU",
  "key11": "3kgT46i289Wn4eANoLBvWbWUL51SCoESTKZx9MrmtqJjh78LNB2y7aK2woocqCFxdxxLtL5GVdTzTChCbPF5bt35",
  "key12": "4p7sn11KqiJMhmUK3s54Bg6an5YWV6uErMvk3dMVt45VykvtMxuxBgLHcyA8oKajaJcUXDYyfcizFZJhxhyqNK6B",
  "key13": "4ZULmcwpwNwwrPifeDUPJHnrXQvwuGB8UXC7A27guXiVVKKAjnccwAz2AEfmWjbQtMAQM4E3uBeBADrxt22qAcPM",
  "key14": "3ZDBTCy8E1fSJ1mcga6pnJD52CuGZyYcyQgvbtmqTjMmUskiRgV8BbkxpbHf3EcKdHniBHQ4HvjTquGVMjsDrQr1",
  "key15": "3WGg6AeaMKgj13WsU3B41nQngMxe7RRiagfqY4zdESyYW8tJwi7GfcQznjzbXAxCntqaAV54znZgKNnXyVTVS2k6",
  "key16": "5Lk71ryz8DGCvg5AVRAv1ymhbLN2ibUufS91yVQ7975YzyStUqGMT62E4WZtZQXG2oGqFdqjX5iUBB4N1DHHm3mp",
  "key17": "5Sz518u7BkyLRBYBnXc19qX6ADty7gpWEXUtm1tnBvk4CzUSdus7xTFaDV9FwMxwp2e4uApvBfNW1zV4T2k9X34M",
  "key18": "uqnrtuNbb3rtkXHoJc4GqQvSCgYVVSQU55Qrx6yTrBjhmJctTtE7NRXyBKunQA5MJkBoU5VXrgMn9LavBEvPbN3",
  "key19": "3Wf2hr9iuACAHAJKzb7zDnaAhQR66WYgQHxygYfqubWuUdpXEBi5uKcyRjKRGywc7dufEbf4AcbDRN4ju6bxw8N8",
  "key20": "5mpTaHrprtBZqi19cGS4EhvbpZiDJ2chp74P1kRqgwyfr9X1jyUFpvmbwz7sLHowvrPQpyGuKjS8c6U7zBr4bLqC",
  "key21": "3FCPHx74wyYrufs23DDgdY7CxGfvKS2B8fDuK2Gy4MhS3tsWKmYEnYzB99SfgAApi9HQwe5vhdGofcnhDXp4E587",
  "key22": "4up7zWaLL5J7EWC385Juyw2rK9hgRVjs4xXpF4uHKRBR8PCNCF6ZeXAK5npomDov3r2C8fZPzTPoeyeygPEu5f3s",
  "key23": "AzJ1YAFBi774LMNy78ju2NHYXBijKxQn1qQtWiK53i7ETguU3pTXAwQaRFzPeg7pbEk9QpQrS922W7MyvUie43c",
  "key24": "23ps68eg6643dApWGmnGYoBv8FZ89uTtawNt13MBmRf3UmjqCzku5LfpKs7PS4adzVRiQKfq7HUu4BRJ7JizmPQE",
  "key25": "2GKDoxEwnGghvGbv434ptFTCGthDcJXp5e2f2bd2TRCXCCvmAfA6XKHAG2XzmLCRbztevTnyi8XfA12skz1vWCyi",
  "key26": "2wnkrSvLRLn4YYKqEpSECDrUtgcd9tZ4jjJ8ma6vAWTxLcdwNA94dudbLTe1BEvZhNNMjcmsK3gebnczvnJ9BG5p",
  "key27": "34cXp1ETbTAXNW1a3fFdC5vmcnRk8tAeRZmN393xzL5FdS2dYdV8fkCGU97FkqsnGd7eGsgT9FFvcVdXW1oFc8QC",
  "key28": "61o7ZpSw2ba8Lskkh2ApCjT6zDzGcMNUXTmA4YLhY6oYr7H93unhoSWKaP5bxGyAEDshmRBENzh5giUjud7SfML1",
  "key29": "4ds2mVyA4t5RF5WUwY42GkihXyzqEF9QT4yFbSbQHFuzqrHNUHMBRehZadTpDjiXu9UiNRweY8sXmqNNS4zD4mog",
  "key30": "2MvYALzfwWjW2vPiwEM9L6vCW7Q9y3BMGvDGzLW85C16yK8JVU8ZybFyNH6PzCe2Nj5vCMsYv7r362ogAswj4Tab",
  "key31": "wGKoRW8XnVogc2SCYJ4RpoPtNqoLk7zub7LBmdhR7k2hm4PT4nuR8o7gMaojRuns5qRyV7XzDJusscPF77kmFuf",
  "key32": "zCjB6Gan5UgqyM8WMQtUc83J1s7vGRtmsB36gsyM78P6E8fdpMe5Kn9B39T14BQ6CuLvggapYwPf5SJe3kkwFP9",
  "key33": "4sLe83r3dpwEbc4uFSYekyKdV6nz6zfN9kNHzpAChRWb6sU4s8EEQt3C53HESBrVoVb7PZLgKaiVvDNgiCLK1tbM",
  "key34": "3e1puzPK5pLZEXW8MsnVDeKX1SpLwH4bs7wijZsGKLy7o2UpoKKWth4N5gb7hrrVkPW64vHEerD233cuWQ1BmM1U",
  "key35": "4EYqNvJEhsGYRDbwwFkNQWXH3SeaiUs4oLgVCo8Hcb2icAaLEQyLXG7XkrJzBCr6b3odgs36ANGJPBo2Jz74wLB7",
  "key36": "5cuKvJvyq1rKWcuwA3KneRKnJFt7o22SLC8JFLu5d6BULigafhtMdLYvmAttYSzuTrxUCR8B3fzvdoytVU5m9bQ8",
  "key37": "26FwiEGY7G4TkmuLjnvmzReLvhVZiSrVoRn5uqZ23wgqbDQ2AmqcW8LnY8m5sSqHUbZxqwyTnW2gthcsbYcoPPHf",
  "key38": "4nbBuUhnpnNhhjT9zrsZeU7mBWnmXaDJhBTaPktuvgxqhL7ubURnLbGEnjygVjzFN3P731hNhWCPt3NTiuAmWzdH",
  "key39": "4cRa7qGaXhSpS4LwviA9vC7EBjiputQvrpHQadVDWMwoT9KxFP2jxcQMXqvMT94AEWt8Yq5TRubvZyqfo3Qudwe",
  "key40": "5LDRJdmwpkXstPneQypjQXUCMry9fCTcY8Sp23JpgiBFpet3MZ65z2wHF9kpgnfnpP49EuWyHiWV1drdXb2Uy3L9",
  "key41": "3Cva8wZX9X26jdXsc6w9p1SsKp239ELH7zzxPKjucP984xMWweqW7iR9LT6vrAxhjyLP4fYb8BmBR3HWWRP6honw",
  "key42": "5ssE62Ms4C7pkihZMpzmUgLVjrcxaHAhKuA5AUDe7kr3f336nB1yGnN8myFtMNUzpVcUM7euLVzQ28jUNq362gUg",
  "key43": "5cdbPqPZZJxFVwEdwGDWLHng1EuPe6uNwHez4dSKAdjtyWh7npdLyYqptuKoMZ57ScB8AzWjmd5cm4ppJLZdwkVV",
  "key44": "3cWTnr7gs5ycmjSt3aH9ZfbkSuiwLZYyXAe8KoQsJecvGkzvVVLmAiiTSezEDu8QYQAXrVwGKKNBR27pLBiga7hN",
  "key45": "4E62zbXehZ5pZgyoo9v6ECbTUVCfLo8paX33QTdUyFzX4pJidHnu6zS5Hmy4eeqWKV88YLsje4Ymw6iozgmaDMbP",
  "key46": "5BtE76CT15t63wM77vR4R48ux2cbLXPbTEZSf6Cq7oPXcj1XbhFicAQQnnog8nLBCuhzFXqHdoWkjYvTY3n31WaZ",
  "key47": "5sraV6JpRgGjmtTRj6Mrc5MpZYUF7BzGvJqtzLpgvHgPM5A3SQYVxbfkNV8wkKnssZ698qjw1mrWvSjH375a86a",
  "key48": "Sz8sakpabMdh8FJRy3XTSHkSP1kWSznxqsT5Nsw6eCMhByMrW1PppcRv3Hbg8LkyNU1gEvEQ2qdLU1r3Zd7UCvy"
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
