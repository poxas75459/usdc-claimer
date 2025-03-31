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
    "5XTzDagif93ftEf3BNUaFT3t7qqB3H4Bkh9yFdvXnRvTNG6uHb16wtrQtcDG5REWFSbEGxshitUYu4Vuqbs4Sx24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHMXB5WWZ46FM3fgu2k7CTmYE5ciMTTQfKpLg81fh5z6rB2tQujwMabM6WFF49WkUJQGzdwhqv3ALnwB2qQjAJC",
  "key1": "3JLnomsY7T61yh6dY6X9wtgani6GBGxxGrSKAgTuZiaJbN8HC8f8W4H1JDuTXFTaJLRQxzBZzosPNVDm2vFVKdpo",
  "key2": "eY7vDU5u8ina7F6FzJqcQ3UpsR5izoGmLJyJUmDCGh6FRwCEQrkyT3MTaNoEfsyhdqVCAe4xbmWwyHnWUhFYLqR",
  "key3": "3zDjyFVNnRmhuTYL6Mm2QX7S45DQsUpNX8LCPLhkciohtPueaZDmpN9jEsFiPAp1b8nhjqZgudf6FPuAFbGKwnmn",
  "key4": "2M1Uo2KLpwf4RDCCJcv3yGa79bEvPciNUs2NtooCcZcHZnForpceBHnD68sFnnQak9e61tAj3i71MUae5CRn2Rjj",
  "key5": "4F9ciB1Y8KkpbRVjq1RHnwQh2tyb57GcZRs1vahuL8CiQVVJc3VL8pCGThTJF6ccUSq1esPgL9dh46h69EY4R1P4",
  "key6": "49Kxg5xY6g7ygeCwKvmDvCsHs6ZaYBEi4wgtzEJ3qQj213EEU4cyhyNMvt5myKVFUajM9shpWwgVwn3dUtdEPwGV",
  "key7": "4XneZnsaVwpiWSaLczE8Lh1bRxbAwjaAn1J8cgnLPadMCR9NmQivmMKVeGuwPwNjuBEskQGmmqk3AgHQQPns6W7b",
  "key8": "jeyc6T5n6fWAwNbXNmERQgLzoApdVAE69LZZnKD5wwVp36cEWxJsiCBMrtFBAPbnz9NomBhHXgAYbKe1jeyDy6b",
  "key9": "2BmmxQ5VtJX4RCVVHi4DA3MND5dCsH6DA8d9xgtWessgqbeYf8KGsqZTP3cXjm2QHrHqjTjeVcNd8mpXdkYmtGEm",
  "key10": "3FZdRDYNnpuiKtM7tymxfhT6H1DRkfEPhDA4UEvcJxg3nEbUcRe9D1Yvk67AsdPGG7oZiRNdSYH54qwXZmMRLKwW",
  "key11": "4QHMv9N4C5wRs7nArterZQKmVvms4gNxE8xWp24SKxP6dYgrawd2TkeZWHkMuEU5JdKqLDzKf9Xahf3fPNUHcEfy",
  "key12": "SWccVtyV64RRUC4Bf26ktPnFNfoyjY6xymzRF9Uu6F1aXH9D5dtguyjKeShxJyZKV2sWnxeoth2x9drNFV7EmJQ",
  "key13": "3diRJLgudX9bjG5GrUFJDXkWy8FE4JSCuo1juyLVwcma1akUwSkQfkdvTtWeqTnJhJX1trCLWLsDsCPsHmfz1UmG",
  "key14": "4uwPXunzuUkd7GTcrUVNDVcxgWvv6Q2gcwZ8jrmRwE1QfcuMAKryF9iKz8a9MbDYC7nqPe8KKGdPYjW81Xp9EA8Y",
  "key15": "52yDJ7vDkquUJ4dqxoBbbK1NhaUNiKc2xX9mbWdhemTPbTtUEJyRzudtR6MVj6gLd3X9aL2NsiMymJeGyZxsSpJp",
  "key16": "5cszwTTGqcBpmi1k3cgpfGLy8hNYUooxdHQW8Bbimg6ibrge53LHUCwiDF74A6DW6QDLUZw7F8Kza7ppbSJKVxw7",
  "key17": "2Mi8ehVTL18UFm1VbA2QLtrJEPdzfFw6aUdTb6UKAKvahsxMrbmDrSMtFbUuNKw4SRdzhCcHCaMNQxoxGo5YsSS3",
  "key18": "7Tgr5Fk4AdpV8wnL6KgcM6JeNzBWVgwj43igaCyLA67AeY4Fr1hpj3TevW3X27Qvne47vWpQbRSxJpPABC621xT",
  "key19": "B3B5g3RqX6qRfoWo51SEaicxWGfebSvqpRRoLDAARxxRK9cWE9TR7LDD7iv9vhFUV3BSYCJNcFo9imUwyakRaDy",
  "key20": "2iWc9Hdaqojg61w3XN77yX9YuDqj8yc7xRQ4QsnKnNRsXtDaUp8ARkgUtmhHzSERwqRiUKbcEGzBmYfUv6td4K14",
  "key21": "3yHaYiNFmQCXXhmwgCURARgB44zhVCHoQZM1jqysg1Sa7gMq8Hs2BWz3owXAcc5nS6NCgkNtNSozVC4G5DofAKSu",
  "key22": "4yAKwNmdLz6LezktQPcRxT6yvgdPu4HaeCcQoSADxE5FdFxumsSE5dE6yQ6KX3kYiE7P69VCDmz7eZ8f94MhVjhA",
  "key23": "obVCADnt2zYY5rqNJsKBZRGZVYohL1CfFjyEAdpLLrVYyuSUiKSL1AkjgQemT1KHVrr4rQXS6HWaYLBkbuHN9Xq",
  "key24": "CK1Pd7VHKXe9FzD9jJrg9n4B2BBYHjYAwabhbULPn1AqN9oE8Egf2yAjBWtQzsAaJabXwTTVAk5jp3QURrLCuEm",
  "key25": "48GMXeqSx7Mep5bFwvo1hVQAskxeuuKYU5LwkKPx7T2SxJnzyXAHYurCSVY4uPFyU7Ztfq29D4Sa8foqVf1Gwgs",
  "key26": "3CMWSDQvkDFGcz8LBMFaGSSVS8yEZaPeHdtdtE6uVd9g68J5i9QNmNFXBshtJtpJ4qw4Gdp8rX3HZMv19JuWGB9k",
  "key27": "3vaot7gd26jkCXfj59eQ7T7uWtU7wVSYGkjTXRsWRNXW5pekDZwYkzgEGBTzzvmRz3DABhfCZcPCMuoHbKFvhgmG",
  "key28": "3f9iERh6QEawXx3ZLNYhyMUnyTmv6SY4H5eBVSBVdNu5nUw9bv2U7LfXPRCqhp8ZkmEvcvH8iqx1GXnYt1sWC3Mw",
  "key29": "qy9bSrxUwULhpt2HgEYcZKok3YtztsyXs47XekNRww6swHXsCQbJj5sbjwNQfLJUvhpchGnmK6HyMY2WVcVczmH",
  "key30": "3zUW1zJWYWykCJTrSTS1xbi4svFjgeS8sjpsVnzs2dDmsDjsofXLDUZSZ4y7yB9yZhkqzpF8UqEXu3dUXVxJW6KT",
  "key31": "b9SwnwR1TxGGTBucEQKhftH6cykdKDyyFnD8GbRvaRBaSvB6isGzJg3nApgaKp3nFiQ7cu2j8837mSBoibvN1NU",
  "key32": "WeNbELMSnrGQPA9ZJJbfV5aeByvEr2XWWPKq1K6GD6cPgom5DQqmr9nFhzHScuSoCDQBQqRsDVCrN8j6oCs4T1L",
  "key33": "5in6g8RdQVS1Vt5kmkbxzGc6FkVjE6cAkg4XAVDEpgVTsW3sq7SAdmqrJVi15MLFx3K5TL2XgR6nkVMAFUt4SihV",
  "key34": "5nMZ9YCeUeLRJms8h9ucfEfzqqR4yX1r5c29TftyRCNZ9akrPEXMXNDzuUi9SDhmdueExHzoyKq6LAbjeWdtqcKk",
  "key35": "4zLNHouWGrn5RuozB7pmKJ6mogU8qBH3FPN4gWC3jcUG9gZ4qzBrAuAQMvbitRpNLPkRkdU68GYwho6v23JWBjqL",
  "key36": "qG5n9aiVzYeDkGnapqs7uBFwFAGaiz6biGtmW9o6z73gL3U9m2uvuBSJJVyr2xzMW7mAVzX2sw4C29neg1mentS",
  "key37": "3Usq3m6oZExshR9M9bpvTVmGdEwbM5CHYhQsH6JePhjKhB6jixHURUQnUGSuBiTw6W81NGDDc9kEuAKSYfUo7iqz",
  "key38": "24C2xipjZHUmaNsAZxw6i1pdEBZShdCZwFT21Ee4mPkNBXjgPpfNrVmnBvAm8hd9UZWADM9kL7iH1NWfGwZUNPAt",
  "key39": "2dBAfqjmYzW2qJYCvMh7pAzCpBERrbziQFDVym52Mm2QTrcxML67L9PfYGwWvRqtEPW7ASnB6S6PYQ9C3XSDbZv4",
  "key40": "3J4reDYhgEL1AsPGtuuZ933FDWni1mRaCDD8zZG6dEosZYME1i8SiNaNU698CF6eh54AocN9HvAfKZkcbPEwDcRR",
  "key41": "4A6W2rB2ZZDmhgSjCYbR7i1kDenCxuM3SJqc7fL2qNbboQTHvgR4JoCgUVVJf26f7VZf9BZxY6314KVtQrsLTNzK",
  "key42": "5eA3fA2hVzmg51s8iC1wEpqt7tKWmTnSd9mfQNfrgtLooKEHP5k675VEPqYL9CuHQ7nAFHb9cimgKT9S7hB4Codj",
  "key43": "4qpX7rmAfsTaEan6SAzRjb1AXBQbzmn9xL39dEC6Lgz5GuSBUXDEy3W7qLPTveViugzqU1XCEmsHSnxLSgjsdUUd",
  "key44": "4Kpt55Zeoi6m1BUbv7KpFjMoqXxBxkWFBDor5EKksQB5jCFKzwqpeKRk3o32K943Um8pKiLcSNdDt1nBjJACm2S",
  "key45": "3VxZ3S1fztHsDhZFMwjn6WmGCofKd7ozBMzi5WgQQgRsxDJkvqfZ3NjXMYRPTWf7nCo5ifkgAbcbJpXoBVDQ1Ssw",
  "key46": "hRx1RcX1k9iyVKAv7CtBTPxNfFqwQo21JdfEhpoeTJpgnFZtASkSWGVSXFs4otd2UVehrEhQP6s4EfQMjcneS3N"
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
