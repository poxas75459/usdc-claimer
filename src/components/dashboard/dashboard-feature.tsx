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
    "3YB5bebB8GmEH7zy7AszfgMbcjm8iiPrZsmwZ1tt826i7ja8a9EQTiw9ocJvY9LZDu2xE7fkGgMtMrawyvVrxKTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g81kYquVGCFj8E3ATdhYApNKgQ9FLuPUYAaRKjc2vU9UtkSyuWyfZRtx2iwaFRdFXKTW8TukNZUGUvPvr9x7LWr",
  "key1": "2Vi5TMYh64kZAJQYA6CGCTWmnMUTS8Uu6Z4mMrUJ3rDjpMf3CqHnZ7Q8e5brnG2g1D8vtZMAcCV1wUAv21sc7U15",
  "key2": "38oZKC9AtbATg3XnZJVYCrZ9X3QiYL16u12QAU6yWpjVF3GHAvYJXMQRgngswapdiDQ4HVHM2ZTGCUkBX33w12LA",
  "key3": "kV6tAjqU5FgMrFDvr64t1ofd4hdggow3piayMPmTV56aiLaN8tTJY2ZaqYUezHctFWVFRp4dgaWeK54SSJxF7XV",
  "key4": "3Y4uL6PcXF8MKVujkc5qtRA89VrTqXwXTNDAwd6caYsPnZQhxGAJ5QjvgsmbH9mZ966LYqc52eMqvD6NWteqZPJp",
  "key5": "2Tg2msWpTZSuTP4B1p1B9haUhKn9XLAr4cuo7FKeDVkpfMS7e8i7bZhqswCePLVtUvG8sqeuxjLhxgkJiWektYRE",
  "key6": "3L9qZVbqzJbotWN5NDhQKc7AtfvJYtEyERkqj9aWk9bUjs6U9ekhh6wFAeWAgU5zxUcftnLRWUNpnpsa3KJSM4bX",
  "key7": "9QD1fnRgxZy524EvBYjQKuzg7RZFYeGV1VxP4WGWiryimnXQSh8KLkJySF2QppfJHGBAEXbDeeVYw3bcLtWBzq6",
  "key8": "65qurzBSnn4C15Mpxgm2wLWiM49wBfH1QgaKBG8c73iU38BqfcQnLr1nneVoryNGWdiXyJEKVRDTU8QN5yBvp4kW",
  "key9": "3dS3emvpFa7niS1XLRctSx21Ug1uHDwiTccz46GBpRQsQDXgMMuqhYBv8mvVQKNuVzAoaMdSBed5JBToZvVdQBKe",
  "key10": "qKiBqbMUjyh8At1QB37mqWYPDfqaMPAPj1osVgSNHRJT4Q6ZFJJVvjsU2tGhZJo9T7aSsfHGxPFSpWdQmgmZWoU",
  "key11": "4NmHhgMCc5aqrtrbaWs2PmwVgWrXVwjw7LYoqUnbHgRYpBJkVUDAukjxiDa3k4cZhTynCcuBk3dbsRwu2zQi2bei",
  "key12": "52xGCseFqMkgCSVveAHbwWduQm3nqA7AeC8NoxCF52DvQNqLWA5xFDJkUbd8ZGbrTezqZcpMW1kyAUznH2Gsvnrr",
  "key13": "4hSoED1C4rLcZRyyzfquwi7pU2BsAXJY632TtMGrJQ2a8j9n2hs5WVKkG4k5aUQHCS1gqkB8tsgvUfWQYZ8k6R4J",
  "key14": "3tNBiyB1YJ7cAgeVbq1kYSHnKLANcucq61Vgwy4bNPJf7XNx8hw16m2zxX3uYCxbzd49krHZzYKDi4CFoy4qdbyp",
  "key15": "4bRS5xGcx2W9o1XgJQNGbvVMF6KSPx2vwjWVW6TrQARyHayxvR68upJ5YAYirNbsAa5gtUMEqrjTG3p9mhy7M3zy",
  "key16": "4Q3PqCNyej6ro91LXFiEykTr45dZNsUuKQu1TxCHPW9cFxVPENArAMatGfNnSAABcipzsTpKkJta2wpryfyCPyew",
  "key17": "5iu24Pb4fs1eb3qYXCSq3ZoBEQhhKf6tShvpYeqn9cufw1uRbhDUFDde8EfjNY8EzPVa79AWWX7z65nNqoQrGyEW",
  "key18": "4m69LoXVX8geSqKjPMGDgFerxV5vc4r6QxUyw3n1VSMf21WfL9v4PBnvfvBVGVg9nw2jvxaNpchn7STBs7rGxh3J",
  "key19": "R6MWTRtzCH6io3kkNXNipegbu9n9jUxSG7LknjAjyVFn66CLmLjWmGgtLyFjUPvej5mo2QYMkaRRwCMrD3bPKH6",
  "key20": "5p57SAgEt5QZuHDyqYYtcRWYqPHn2Sb1eBBreqHtkjnajJmUkyVNHabM9acnaW91mkFEHbpe25pVbYe54J2WHgbt",
  "key21": "4FzEZA5ooz5di5emnuDrponz6PpYtxUxzQtZrnh5yZQiex26J6nMxTnpRtEGs9mm3sU41wNCsraqZ9yuJ2PCmLko",
  "key22": "2c6Yr5w2DUehGkU2PVMjN6rHBW3X999KVCXFZc9vEA97miCgjpJABrxcto8zkpUYCtRboKruc1nFABaQ1TPhnsXt",
  "key23": "3Lmb5TXRmrziicGG8wgCcYtCJeJ6c7adFjLrWzbvb48igi4drTE98rZbYJxEZ88mAzLMvGVj5WHJ4WHgajHem8dG",
  "key24": "wamQgqsbq5ErjWRAJ69ZzV2ECeYGLMU9oGfvs7sM38M4y9YF1iqbqug7EKhWv8rrsjxBPoUwsPpJj6xH8XdbGgC",
  "key25": "4xYLmfDgVnbSpdMMJp8bfTXBanMXX5UvSG8RmKG4nUu4jSFJmR6SpMe57ejVzp4PBm13K2WngCuSkTff8zQrNsbp",
  "key26": "4tKBDH9uz7HpaMXdbHEA3KoJd1nUzUaUgZZuBQ9pckZ2VAu2nPvRpp2vwRRaUCP7Dyb4pUjNiU8WgNraMNpzUkjc",
  "key27": "CR6DPByVoUeEGEW6j2LmbDjZVBiiWcDSwwVMMLcGhgbmh2z97nzLp5cYUhtLNVBoH2R8o3ocCwhKKZycmXQDcZU",
  "key28": "5e4LSocbBzwKWyi5XBBFx6WthyYXMJPKAixqx2z9Q3hCZfqSCz4sqpkPotHuEsLRQidYAR5jXJDNuApLM1BAs2Jp",
  "key29": "3MGZ2s3aRiqqfAjzPuwTPwtfT63ddmZiD9mf8v9xbFkVUQaJ8HN6HnyJfhTwGhzMhca4jdE9BB6mEC3gfkBnakr2",
  "key30": "3xiKFtKanGhcvzHZCD6pUgirR4xpqRHgRtnCzGNwQhLqbngH6dcPehf5366AYTKdJpteHWecBSiZH358uWxdWCRP",
  "key31": "2tT4MGE3QXNPKoKng7gwJumTqXErA8wyMP2ru96cSHCxCkLmLrRXBSypvssE2uGJZX2VjgXHPNsnNDJVVdkctXks",
  "key32": "5gBJjyBk5EpUAKV4U88yNidVdZteJ4JLdirYXoinhwaWP9z1tWArJz1toBDiYsG7qGnwy8WnDv2XQtG7PTpvv9jS",
  "key33": "VN4XVD6ENrzkDcRoBkkEUt2Dmn7J77ztwAB3QbMX2oqPouHwCZSdnUyroPAAHaB2h2edyrNAPeYKCzLEyayuyaV"
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
