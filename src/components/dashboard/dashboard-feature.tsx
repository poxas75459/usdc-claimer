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
    "32Z4bWnnkhEZvzaDDRAp45qnBxzvV3KX4pNjNbknZ7XVZSuKT3nMhrBgxbUXw15f3oXunA3sR76wSGsLvcGw8GJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WKMPJt1NA3wjULcnksjBFKLy3QAoUjXP8g2cGtrR5mL8i82xTEnJQzPtAiJMzobo2LySQ9a6PzrsvFMYj9xz42",
  "key1": "4meSzUNyEhaSLJunBiKsAZMmSRbGP6rCXsA9WU5VcJKZtLcMon7drS9hYPY1grgjvTz7wD3UjZVQMbCynAzyNTBL",
  "key2": "278cLDS8foUEGh9wXEGEZt4NvCghRUPyUXuVrm2ZN1qEB6EUTswD8SUey57XF2v6d54sUt2MBjjNiAdTzqZF1Bug",
  "key3": "3dzGnoaMprrHMwQNjcLs9NN1EGDjYvDptCWeYWrKMVpG8fczUUxQ82dUPizQZe4XiCWpe5qsxjR7tvqwtB4WAxKe",
  "key4": "3hAWcLyYY2hwsCKf6EmzUrmMuNamfyHFSdJw7NWpbLztokcM1coYFA1jUtMPQNQaGiGZm6pMidEXT2mckZNwe13E",
  "key5": "2i9zwJiE9wfBRZQX4zDHUA6VsQkxRAMBwbd5B825SAchbe6dsFhwy5N3Gmpfw4Xg6MncFsRsk64yQdZ9emSgdewc",
  "key6": "2ggQB4jCJzBQ5Jgo1W74xcvSbTnPYarXS2hBFbSLLBtPpZgT4fsreSro9tRPKYRbJkaYXzAw3QX9bQC7CdAVTF9u",
  "key7": "3hbALD35nARw2BChUBFth3TSqm1gfAB6QNkQjoDdzFXUd2yofYZ4Rb7TBKhreC2ennqKQ7dsWhdwGcTSrDMkX16a",
  "key8": "FRCbUraG1jqLakzZDq8LLUYPMYw2FQf1Q78XXkyTCastzvBSoNjnN2Ms9nSdamYP5jtWgtqPbj4KJgmbqKBhwEv",
  "key9": "2xrrb7DMC7gE9cvvsL5gdeuCVWSH9YrF9c6aBqpjVuEB3x6X48YHFrydQvQpjUfQUwsYRcp686NYuQjXCxUsi9Nt",
  "key10": "1sfEJqpaN2nBB51CwVMkiiDYeSEBzP8E1oiy9ybHEKU2woUbk8RsqvDYnqkkwD9Jd632TTmEBDtPHtUXRgXeEVK",
  "key11": "3um2Xd1tz23W5CUJxUUyYyKmeUhegQUuV7QUkR8vwRQDkiAVzCikJ9jeKVkVbpzgueXfjRPjzSGq24mM88FPKcLd",
  "key12": "3GuNoRhYMTecaEHgi8cpmnEF5Ghmy8M4QrN1j8ddNAQR1fuFu8qWJMHYoNTFsfgBJLfVbfw22wj9aTLNRJEmAgUc",
  "key13": "4ihCnKNpxeHekobJ32GJqHFenfXC7wS1TkUepS18qU87xmvYXA29QmwzLi8YDRkq7oJzfx1VA4qu7aAoHwTJ4n8v",
  "key14": "3upfCrEXGGFAjpwjqEascvn3m3i9o7mVqjBf9REzeh5o6A14aUDyiUTEVs5r3PPhBDgL7bRSNySLZMkpib23LNCj",
  "key15": "3BXTfhANBmH5vSibXFqm4tdXESebhFr4DVMvepaTa469u7F8pewp2fZNjkovHNZjN4z8FCfsAtLjoVBi9fMs9TKo",
  "key16": "62V9zT1MLALo2sM5rm4k3rhqNGAQjP4GrniLPVEsSMxa3cGDytLLnJiAcKjnkQTSw55hd3mUie388PGYbxkG1yvX",
  "key17": "5x5kgWcWQQQnmKqidh1Kw8KU5yEGdEc912CMWaJ69iSLe2vKibLPfW8S26S5xUKNYtrGfrAqknvJuDHUzpYF4SPi",
  "key18": "5WZU4XfWC5hUaAtU673jwk8HuC8HCak4Y2VAUdhhxjcDawoPAywebmGKdodbXUqio4ebxMupLt7oFs2gsrymKwEm",
  "key19": "4KKT5dowPRoDBw6tMQ9SHssPdVXEzckuBpJ2FycnaAkdVDGseuPkoTtUFYRAHv5AYNgVYcRxMG9xphmVyPeXKfpw",
  "key20": "3z167divG72MyYXT4h8Cc9C5ZnsNwCz1UG8FQ3N7vehqbbSQqNGJbyMi2e2Kfhv5jJaKoWn2q7zxVV76SPvH5rgb",
  "key21": "2CyAaE3ANndFe1MYNzbo6tLszsxDmYhEMK74xHJYqn1qZERUy9fg8rjYn9yJ1sTodqmrHZ2Pg5tM7LRj2Su39gBs",
  "key22": "4Cv2wFdjHLJWVzh89nQnZydtZynvXcMdyNEUkaX7T5nTvRRG3JRdRqhmrPwRKfuVoegZjz83xxZxa8Qmx8Ryh3fg",
  "key23": "2ZDRbNQgcR7mzNStwv7yqQF6zxVXAEANNEeDU4TzNbRACPui9fK3ZNswr4d3Y9yDxY4EciRG7AZnPR3NufquLyr4",
  "key24": "5vuPFtgoXQJGwpzVpgJwNjcsU3yc8eC9VmXMajSr7W4XWRtpZzeT1BJemwXzcUK4wAT2vSkUMWPeP5e33cb1KLfD",
  "key25": "5PB41PPqqFwzPPzCquXtKo6JMSAYN1hXq6kPaSRoXwsetvz76hxuzakRXqLRXFzJsVDnBubZSg42zgekMwwZEfmU",
  "key26": "2Erab4C1CLxVW156Cxfh3at5BwhiowoBCG6FbMoxScVD6ET7eSkiJKKJXqHjuPpzF7Svincr5qNV4CNw1MS76LME",
  "key27": "3w7Qt7tme9iXDVMRWAwXyzfhF6VGWTnHYEmJn2VxGvWyd1nuy27cs2Qyx8uayvHLrQf5UybCTK1Q4zFKGrLyrFhh",
  "key28": "2p1ZuExMJv6Qw899icRwCR7v63bSfBTHq2ZmrmnazwUxWrnvQmHUTARxGSz3v2yKg7rG18Yc8kRahhMRRD6iM8F4",
  "key29": "TVFFgxYQu2L9gmcLapSPWZZdGXXpmL7wSL3SqtzkY9t9Kt9eQQgUxJ6eowKjuyWCkqDwravwkCMHoTJp1kypLQi",
  "key30": "D9PoCiwVXUsoiB7eDYuqxoSGgxsdZJ7mtZHnnSTEamT8ZDRGSsbdvYSsht9FsnCy5FXX2hrSvDF6oC5J6hEs4Mb",
  "key31": "3VswTVCpgsVYeosgQbj3LJ7XTmMhnDYRy7eCyXWQaTnwqQfbm2QBkF1nPEQeeYb8zTWUoREG7mbu95wo1eJwMgwk",
  "key32": "4HjJAYPeux8sNJjczgJPLa3ujsn1YqWyBrzMH35tXouMAW6yA6v4eQoKwkhoGTT18nuWmqMM6TkTq1BMsDQHkCsP",
  "key33": "3FLjeoutG2SSf5LEMD8MvoUkqoxHSS9SkLvt1SibMed7hnrmpMESgWvoncwKwcYKWjxdWeecHs6NpWV1DQkEBpFb",
  "key34": "3MaNWzjyrHttPY2dXcGcjtEZSXmkmeaXaWoN47KbvNJycjHXVCFN5v8uurKbAJEdr1buJRTxkjQkVehvayBLoNsX",
  "key35": "2ULJfZzuv2GiKcUPBQxv1WHZAhfCBgEL2HpHMSUYKzsUtaBqQTMhe98rz9TaS4EXgdEMWTz5fLNK7tcbxf3X4Kat",
  "key36": "3Nkn7iYpKCUGmBf55WGvzvCV2h7ZcNoX7kpAyUffBigtsDQkbD7WYaR98xzvhdw6bxfSb6fUDeTAR5ia4eJMNtra",
  "key37": "3sNZz7NaeT4t9EeAcdMSVkVLsuqVQj3LsRqpkH5PH5QZsHUKoV24EifnquNUmwiJWPLBpBs4Yvvqn3iJQQWw1E4W",
  "key38": "5PEp9JVHgDf6BfhLZASe11THBVG5aTTGpAjjtSz5bQY4cj2wikG8AKSwkpbY4sQD3bpgJZptc3BggVwVpUkRDKUg",
  "key39": "3rLg6KuxNektEZ1P6s6K1R9AdwU55evZmBSsWSRXZXCnyhR8QjQYxdwkBQvZ5hmGQTeeyhiZj7ttMyQVC5APSorb",
  "key40": "4SzRs61zGvT4gPw5W6J9WdJc7GcU5sVTYeYEw9rfVDM5pSZYVqoD2Z72WcAFXqXazTZbssEbWLQcVVqU74d5zq93",
  "key41": "3mrggeXwBmG33P5qABMnAXuSnpRQRgw6PWK2hz3vQfyFAuwTQ4ndrWuL6Tsu5C6z3DVbFvbkJ8NCUfRt6QE4wmmT"
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
