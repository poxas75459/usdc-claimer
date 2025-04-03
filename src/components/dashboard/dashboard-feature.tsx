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
    "55koEsWMH4CgmH4G39agPdVAPZRDQiH5yqWFNkAZcy1FZWG37Tocp5qTT4qEnTUaSGBNuMcbqdCZq7PG2C72sFft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sujQo3FC14LETnjwEmGVwi1ccNsTtKHrHM1f9meXLQcTCoHnKKapVp2NDqppaT73qy3k5ugGb5cthANL8DT7NQ3",
  "key1": "4EHYBzHecMX4shU2xFiQBSWDMxtyKQ5Fjyw1XvxbDiCj7GcEv4Hz7WAYbx97zTXwKdUhzFQDB9YReGuq56wgHaEU",
  "key2": "2QZw2FoAfx3k3rsmDqSR43GPFRBXJDEb8nLWHJeafjaVDcSpY3GTBZxxUw4uZA3aZNibsYARUoEEPfbwodVzU6bb",
  "key3": "2ugivp1AZBVvyEEMFH335aV8FtwKEedCPkprhG5muDLqTJ2fhLj6Hsm3k57BNYiA4HHzHZMv9XRm35TXZZeKGinH",
  "key4": "2rE8FNUpaRWZP75XtXCFLoA29S2X6Kd9wxcnNPAV5jUAZx7kQ8Jx9mYuujsxCRQ7kFPuMdrucw22RNAxzQj87riM",
  "key5": "5yTxZxe2EeRTf9jLmKHzywZjoZdcthfL8Hn5eAC5Ev1fWwHf1P8q2rLu79F5479oqUb5ZW9aJX4U1mZE1qsdWzHz",
  "key6": "2rq5hw7oC3XM4h7aS9BFrNeqJPxBWMAGZkRv3pkuajDxrCzyyXb57exqkiZeyQBpgkBA76bQv8R2kfBEB3GNrZGM",
  "key7": "fcVH5HMGxQn2o7qx7mabggJdWJJcuA9nvaCTYwGAz1pgyr6QECkGKVecb5Zt5fGgFPLATWkpkyYF7Eb6WMXPHMf",
  "key8": "5B8JVEGM6nuUM4PzQp2ghYAqTUjkkfRvGM45FLKHsDRZJ8nQLt82sitekgtqvmzQNWtWWw5fe2sHGDykRupcRe37",
  "key9": "WuhMNuwurCta8Tjb1k2Kfhn2TYm6jMZq15yokYcCMNp96ZGLfCTFXmdCGBbcADJYscfXSH4bq4E7VjYMnZhhbzT",
  "key10": "5UtYbNGCfvs1GKfhFXMuCYW6Ui2P7u2VZz3hh7MB22YNjnuCKkRQRzaQ7Uvonfv3qFSZcwiU81fGhopFuh1Xvzz6",
  "key11": "2yHQvg4XPbFvZhs8eeRXk4yYb7EkRpiDX3H12KJfk6tGG5xj5mDYqjzNYzq1WG6K6VWFn8pYwBytCMpq6puHcjg2",
  "key12": "5pch7rf8T9tZhJ131AKKrzH2XTTFWicEL4stiYrWaJto73qZMiDS6YXWcMUAhsmxfYqB4kTTtqrXR6DxEVnzsB2j",
  "key13": "D6c8avk9fdB8kzg46YBTB4fQubfFGnhoV7pnzoxKw7pv2gM3x9k4oKRqXYpQ7nQ1Krbh36NQhDXjcMAJtvSsUsV",
  "key14": "LqveRbUfh1LohrwSQBBJeNcBm2vJhPWmeA5XNTzMa1ridsYvFRWzvPayBqyc8KeHDQZ2vFc2PXh1eq5n3GuaPNE",
  "key15": "41dn9TgKT1mfUAS5uRssMcsM5YdypGcaRYRAKQ2xr376QvQYEwB5NZvrgf6ReZRPTHewJfm68s7gkQSAkhSr83MZ",
  "key16": "3AyyEpYYzinAxLyi2MT6MPA21D5fziqktBKwyQX3EPBwV2H3nsAu83Ez5E9YdHQZW3MiQgLEBWaLyoD1txMu39e4",
  "key17": "4xv1toSrBrosFwSsovDig9FT5A7kFm3B89scamchrmfqAnWmqPi2jcjEoAzvYnHxxkproNSzgLK8V6PC2xXCMyU5",
  "key18": "2dnv5RNGKpvopGTSogRuEnn1vdEZtr5JkHB2MkwuFoBqdrv5iEukh3TPT2m4wtehY5abC9Z5mGN37p9GA1wQ3GRq",
  "key19": "1UkE7v1AKwQJeuPdhqNEAdzwbF1ifT9Ta1AEaGSFNwkVxa53SeToupABAfa81YehZfMZbvDz2S5ysThacdknGc4",
  "key20": "kRfMjZ3NmFH9RYe3ymisJFWuGk26ugkXQd5UrpqoAG6MEYdmJ6WL6Cu41QrFLJKxJhJJqQW6SemuzRq6MDphfay",
  "key21": "2k8hcxGnFMEkp3mPBLasi43kadkajEPsmMqyk2YohdE3xd3vtYGFbhABY1xaGseKs6ZoD4GK9gU79DvwZrBCApBa",
  "key22": "veLX49ZQ2VqwHWJtH9CDre1P1NtxVZz7Q3WGG8p7iZcvMgNbBbG1C2DGknw9aKHm38PeLWU1DLAcqD94U6KoVZg",
  "key23": "5p3Svw3hWLwoWiXgWTxhYKoGDr7QoqHUP4sEm2x41cxoJVsS8p6SVxUT8aAQc57mdmhdz7uz7YV628PyDvUoSH8n",
  "key24": "KXUNwTkhr1k2NDrPWj7PeaKo2vPZhgi3Q35T77x7CuePMNMK4V2MdLS9PsvzaNXUkc3ZBrNAsEUZVEU2XkP274x",
  "key25": "aHHCnp3StEJ3hRCnNTBNWkD7c4ix7rBNVevNqfGcohtWinNRkkM1fK4Ss7XynPLmT8wh5NxpGoBpYf16qeQwDGa",
  "key26": "2c3AcCkfz9tdB9ktuWXskcSJqeZomifz5fXKW6XXkUG1zZTjSHiLakoMz4uicfXmNk5fHijJvhP9RNTiJYyE7e8f",
  "key27": "kqyvUFvv3ERBDqbLptapSRv2vDgzW8hhRyH55GJH1FawpWi6TqkTGkxETPioJRANJrDUmwL9vBMy5SjZtTiLHdb",
  "key28": "33YLCEVHbP42xnfCpYXg8TdEAwi19efD1W9d1gpaLMLYQjaT1CcLJS15KoN228qxGqPMquk7Lbfo3gWzdeH4tHCe",
  "key29": "43PoBj1HbWgvhpBPGpX6heFfo3pMz8FAVJ3n8KNewrbTRXskDW8VNYC3w6ZS7aj5M4JmBjwc3HLCD1PrXEzyXvpa",
  "key30": "qUBJqv27tFHKrKeqFk6RQLRTXvixvorB9MZxyb4SB9fSdyine1DzDQfBidRPKBWG9tuU5WmhQgNtCWnVAC5mGfS",
  "key31": "4YHwYNAVdejCubYYLM3vbBR68SLW2ApEUGq7PJ5P2rdfbgNq9m9gW2GMQuPMcUWGdF6go6iaP627ve7NyKcmFB9p",
  "key32": "5RKjxVXEoCs8uE5Q6rmXoSHWbrojSegNgjXqUZMXAzasqhp6SRx2KqKx37XeheHNnhezNtJuP9NaD178BVsw1Dft",
  "key33": "4KPCWL56aaTmt2MTQBE6JVrNvcQWrzgrcLs9mJoEi2npJfXKK4f5KgfeWooP3Gx2oEbfNycL5GtLwAZLymjqGgGJ",
  "key34": "5JzPQwSWFMTUCfUWzyBXFriy1ZqZAejxBiYva1PwWDBQNKrCHqEeqPD3tecwL2tTTABED4xMEShc4qJuSH4GDiri",
  "key35": "mi2xQF55EkwzDnh42PPcH8cLNSQbE4CRSv5kyVQ3HDTtrHLR4qMeBtB3yp1n6XncWszzcAy9BLhy8NCg8PkpBBH",
  "key36": "3YyxFyXDaEwwVgtS18iqZz8XqU889aQrBzPFMeJWvVMcRhRwey3PTFabT7P6fybdWjdY56ZbfWLKnTTKWZaRP5KX",
  "key37": "45fbFYToDiCskKfneA8AyimG1cf5iCFZ6axf8C4TQM7m3P1MWQqbk1Gn99rdPLz9DTme39vye3xX7DZNHQ8USSr5",
  "key38": "67k25t1jRNH1VoFweuTppGqChb1uxbTqc6BQmgc59RfzMnjXKDuMV2ry6x6AmzBPtM2u7a486HUKp8i3nBGb2x6Y",
  "key39": "23vaarAVgQV2t7T3HMT15n9DirVSnEyEKwUha9Z5fVMMAR7njrmVSPjMnCRBwzbdemgeD6VZD6H6EgLLJMPA2rrJ",
  "key40": "nTuhav1VZrJHqgUr4hXDLji68UY1egyeX45aVxGZxjGX19joH7JEEi9XWdjSbgH5tRGtVqLwMXx9rPnHZtv8B1Y",
  "key41": "5nNrmauUxaQTrAiyBQk4soNcQNNehFguMtuNLcbHfT1ChzW6D8TDFP8mBzzGsj2jqpnQEEpczkAcyuvinLGLbenY"
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
