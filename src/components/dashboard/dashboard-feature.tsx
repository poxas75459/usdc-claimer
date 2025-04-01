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
    "3hnbqYQ193feo93MESkNabY2yNMpYqyotVPB2t2oBNpJvdxSRfyJSjrex5kowwgEpPey5LfooarenS8e1uwhRpTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTD7gfmzAUQ6f3fohxgoFHqxMyRkUyTjBesL87sH56rbhVCeabGLFPF8mWMU8SJWrqtUEcVnU5kL6NZzyDFckMR",
  "key1": "3J4MftyGbbRUJ5HCcmQSitL9uv5n63AHViBb8TBoSuetoVooGVqzknSu85ArEP55PdtJfhBLL46JYowGUrV1rHKG",
  "key2": "4JmPoiSDR1WCEg4RgDToS6dxSbtRCsL8tMADdauMTgYrryVtDYgJ8sF77QSz7BSE6rnFAGmX3nYVCPbo2xYaw2Du",
  "key3": "5HGMJzNQ7v2igCvgAh6FYkm3j4mpdiR6G3mgmaX2MDAEL6s3MnqnJBwkPVUxb9i3PS6ZfRAzVgvKiKe7Y5UeqrZ",
  "key4": "3H84sV6G7GSFXwFwY8WqKb9vbr1YkSkRMWZtL3FCMpSZq4tyJTwcaSSggp9tb4LwpGxrncRTydnCGbTrmJMtfD4t",
  "key5": "53KUrTvJeRek3aXQyf5QTPRkKZZNiwYuw9LNp7R2exfU8PvnMozyVXSQnaFj7LmsTKfXHNfiH3eizNG3qF43v9hg",
  "key6": "4KBi2nw9zx7zLomJ3Rnm94qaGcZtBnqqdV4QJLzyCoPBSExchVTbUHDN3e68sHRVX7ZpGKotFSRxM64GSRwauV2G",
  "key7": "42K5Bm1AqgWckgEd9t1nwVirVZB6H7mfkSWd5zjuptaQ9STAfia6aVhAQdGDz2K1C2JwZeDnk48vdgXtz415FUpV",
  "key8": "3XLF9pTe7m4CZ21Cgr2aqs7HWsP7pszNxvRU8XWwmYqkdBe1qzteXvVEniQBxD8ny6bmDGYf8FqDWNa413FxEdyx",
  "key9": "2CQgsb3fhGYNzZGn7XG3qGEjfpo96HT1rX4VdnSd81RJ5WTFSdUQo25VqaTvuQj1mvXpWgSutBxZRCheTdmJA5Eq",
  "key10": "33878USakTN2PvnkmE81FMKNjoykbkt6fYK7r9LybCVGbH5myJTZg8msboJZavcZwGKTmj62MdZBa6TogB5cecLj",
  "key11": "23W8j8sNhJdYtEA4FmB3ZjnsMD8mqFKKnThsHZUE7nbmrsaPDkbF2zuhwWVA8FmcGMz7XA4guPchRKqkcxdBabmj",
  "key12": "2Mc5SPw3rDyQvFQoEHyAhPXsYb3FchSdS2FBiWw72td4WEs5N1Fz7JpfWsP1j2Fzb7HvuAbxGtNbwwt7NzLrfXB6",
  "key13": "3BAdm8s77J7BMZj6D8vhzKkGj4G4rcsffCqhv1qXfnfQ4MJ21cVANZfvpFQBwCxJfaNZKKDXieVeVZadUjvwzQid",
  "key14": "2b7W5t9Mq6A8ReVK27x85bza6hT96V57QZ1ubiSZoLgNfxa9kR5QPDabtb7ehSz9vbMEEeCToo1NibVn5q9AAZSG",
  "key15": "2PwkUEEm2dK9oboQYZvSsyrtC1vsJADWprLe6GQerUzYBpok8CLi3ZdQyiC2xNstnWoMTKcih1urWjpBHJRHkZ3K",
  "key16": "d2MUgogceZQ4EbBMRRtfiC8KbcoCYzRau8Yvp4R3qNyfEXkrcss11m8XCPAgpVcbxob4Z5F48EjPfWRJDzgTT2o",
  "key17": "3ojxKHbfwV5zZrpvKWiSoNNArgWRKSa5sRq6gpRAL7FxPiuZJhKRnsXGYM237fx3Tp1UCboHBL9RhPdtFqwj7XqQ",
  "key18": "3riVNwMiZdXRnGEonNwf2zqtoqyh7v9wWi4q5xYEyApSQ2T9RTT2v8eUguTra9KvHSo3nUiAFGMnjEJ8EPvJQncW",
  "key19": "5tDjXp9hE8GSsg2upbm2HGu5o3DiQixeaednBgUa7TedBt5hP6RutcVCLmFYmjVFjYAhVeVm62kGmgziX1kqc1wk",
  "key20": "3gp96jHGjxYP6cXxJWLZcZ6LV72dxraVJDmQTe3QF7Keg5S1MRuCRwF9EUw2gh9j7FusmsQdY21tJaLgKHUCXKUk",
  "key21": "5fzbPR3eohBsiFNrwpYa5a8mszW7VvEHS25iNvJ83VDGF7mxqFeaSh6wr9KVVE9oTKYXZxTHwzjHPrZvnUdEc1Ke",
  "key22": "ehxzPmAXuKqZDzDQZKu1DmnMmeXoLuANsdD7ZeymRBN7VyQ7Xja1at6bL5WYSsfGwtEWcVTxSvK21zirksZ2X7s",
  "key23": "T3V6mN9n764UMpAdwkP8cb2ZX9vJ3gSC29peEUto1QA6MnYfF8HRtraFQoozBHjVLo57W2639V747ohkNXywKJv",
  "key24": "5nvjX6jKZEawDeimxAewVQcT4TDtr3qXbygQaKa6fQfCHEGuPW9nGqyXpWYnP4FAM4MXo4ht1axCykqHzHBoDJrk",
  "key25": "3x3S8wAQ1KojY38Vcpp5NWJn2ioaRZ2AwgH5KDhx797rfHscR2TMm3QXJ52M7Fp8VQ18KvCdzcAqiwq6QoxxEHDu",
  "key26": "7f4CSLub3y3WTMNr2Z3axWvnkmQsQhTApekzv5cCrBdd7YyvS7Gv5GZZLh28X9Mqhi3z65um62ysqUnDGDPJG56",
  "key27": "62XPKQFsbCE6131geA22GWE2g17sehxZ19drLJypptqz4dCx96veNh7hRVBcEBZZSZ4NhniEAGJKuLDpBb5mFX7f",
  "key28": "3mMjZQ1ACtZWfbRbnfFn4KPYKPMbfuAGgAyqJuCNgCvKbbGswJSDb4HrYTsZquV8HurBr3nerJj3z31sDbJmCTNc",
  "key29": "Nt5d3VnjmDthoVMBEdFcED3Nc32HLypgbxC3CZ6nCmDTYCBSTuPe1frjrYL2vf4zuFm7AAmpartFwD7RPGkfToQ",
  "key30": "KSb4ng66gzp8M3uUdtfHz9NgAigH3Cooz9crVsUxGnNtoaPg4PSXVqRdQN5YmofaCBouDhYvYbaFx63TGxqwtkd",
  "key31": "42DGRu55dQhCZpzhxqeqAaWrhpe8KtQGpzbASzZL7hbyYDNhNoSs22jigMd3nMWCJu2jxov799mscPFYB2jEWFzc",
  "key32": "3n6dynqUcUtvyz9D64qDCz618LrJaA5hyLcKAfoDd67PDJkBrujkd4oNYLozfMpSPZN6xNQv4BXhLobV2NzTLRRs",
  "key33": "47j1bEm6eA5Ci3KyVEF1z9D4bu5yMQX5wYUG35QP5brcgWCr57PH47v6P2aagJsGjc5y9zT1tfZrfEa6V834esTN",
  "key34": "5JKueZrLKTuwW3wUQqM35CJntmhdwdwR1oo8CBpgqR2fonVQHmBDzm8KxtgJiHAyREh4tmVB7GzsfYXU4HcCzCo7",
  "key35": "a84mBAiY4WBrcHNRjWgTgTcAndmPsw3qq6LPo82qcJJ8rVfU4dp181cfyLRSjUcbZaqtMAYNQ6kxit4Jz5oDXNE",
  "key36": "3EGE3mkroujKVjvJxsVEQYwHNjBS3r7MadwPNoUNHPtnFZbhXKbPwjvRDMmdXdvnHGwNBFcaWpfqoTX4JT4zRcQC",
  "key37": "3c7MGXZ5MnCe2vTKUeBWmL3K63P5CkKbZeSvDLCbfSqcy6FH7tMSTQJDBD3YYdvjv9jhxSWJgmnJC2uXGzWwHNtE",
  "key38": "5RTbc6DFQNZbr5mPqCjdxxATLErH4BPi7ypHfmrcz1xLtqgWUqFkMKhSGBBUs7G2iSnPEyVfLjbhyWcmNLhdux26",
  "key39": "3LWKuctyYfkpC19BpoS1RohFoE7CcLHkud88rfgr2PLeu9mp6DTp4tKjfkVWhBuM4ZVtjiVDokoXuTipMdqBa93w",
  "key40": "53u5kfXJFoiSLXfMA5fumCatEp7D8rYRFKpKBo6zvcgHSoLoX7PYxb7mYADswMjP6BsZs2aPZjNcGcexdxvwxQWX",
  "key41": "6239AqJek3ymF9AMpiFeS1AMSjpHmC14vdt6qHor7MnTWntviiNkZCkjaRgBNpabet4JJnai8GtEkPmomGkDs8su",
  "key42": "3SQohW8WcGu57hLvUz3kC2BTK6nQACLm2ck9iAUoDnPk3BW3FHXhzdgVd4S2FRtaDNBwLSQyrcHXxFWJN3BibcaF",
  "key43": "3q9gh1QoyqUo2b5qRUTK2Dr6UVqNex1tTsssEdYkTCimYgRpUA4zx4D94BGRfCM82hoZSBCQVYBFjJqofjLsrDc4",
  "key44": "swsUvQknkbfaAxVrDZDDkpU8vw6LAtES8bWPWikK1vp8Ft9ViPA54uguTonnPjbDumB4xcxuCJTHepaSsHTHXXD"
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
