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
    "4DSvN1MwD16wtCGDxzWqobcy8LdyKbkCJ6QKKHVckWMmYvefyJY4EYeeP7pK2RtqezVgCcP4drCATe4CoWggMbNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qrvcu4Mad64NgMbnq496xEu5Egy2uYrEHR3PfjfCwSxFQY9pTPi7U8iB7GCmQ2KqfF5CcFzwSg5PQcuDZXNDmjU",
  "key1": "27CdM4ybSjBvbgK8djF3m5N9g8uPYAzznj2HH3bnPtF9nf8kpB8JFj9N2xLai1YaP2ZW2qcdrYB7KVtKUGnCzjPZ",
  "key2": "2cnyDJhUECueUYsA1A73BsZn8oKRwK9ZED4QBMXzUZQQznEDqgLZGWU4c1ZDzyXXMKPhTzbEZCrV3y3TgEPAo8pe",
  "key3": "3CHmL5nYj8sGztycV9Svm9fB8iYm5YJNht5qsoLXMpC6LkBDJvp4uNawRSkiQcVUTW4eFdsEbHtxQ1VZJUizgi2R",
  "key4": "2XLJ5DssckbSa8ANz47wQpDBNcrxrhz5V9nmWE1RehiTP4N4a9vCvw3EZ2CH1EPBgrMjm86dV4LwvppQ6fAqEs7y",
  "key5": "5isBg7LUXS2w2NvyZc8dkE5vDnyHiJvgzfnBFCyp2fFQhP7z5PhPexVKYnEGdBbeDUr9RtV4hwsqVKgCm9T84DB2",
  "key6": "crpC984xfQ87wBhYHhpcNoSyVR1tvMPgC72yFWdMhBxnEzjHZkLs1hXKUAttGzdzihqeUvqPeREgphf7RdEX6ya",
  "key7": "59v67vidDABHLYPozPdHHDy39oYg5oZYa9q1afSFPLQwk6Hm2xmsxx3QRMrWadmJZq3YP12N6JFEM6jqGTvwcpdQ",
  "key8": "27h1i5uk2FuAoB4G5c13VaBdyVAUaHtCjhdMmATt9JSzPg3vVtQf3Pts3Ez5vyQEQvMzhr7au6JWf18Hqd1yQXXn",
  "key9": "dkfvBXYMVTGSvemXorMtfHfYJqBopLME4KKhyJ2yVH69jaM8Fi2VRSDVH1bURewjDHsMZdMJ44r9YhwdQU8CSbo",
  "key10": "2b6AswafGygWqCGJxEEgg1Z3WUh9cSmbddAGatzuktgaDCQzAnhnAxFX36UUYoas64Vpfz1PgGWqBG36bVVHmNTf",
  "key11": "2AWJ6TttujM3JzJiopARbN9zWVv6pVUkHbRkNSrz5ziqYDTM9JBFsYkg68kyKfx1zdzV8y4L2u3c7zkt65Dj9btH",
  "key12": "65bc3cY5EdtEEXsxAMzSXJj5tiSb5ABJFdZscht8pocLYN8Fsh5QZypCBopCxYriCtThVGhtDZyBaGZGeLje3CNw",
  "key13": "3w5MjbFLp1oRU8TKj3JP9LnN9AkBf9Zk7UHFjgbFpvELMwAsrjYETscW2iCtG3hLvCZuxDtMLJwganr56PDX768K",
  "key14": "3CLNQdRYHorujVCfNm8hxR9p4FVprEPJsg32Lw7Y3ToJ6Ax3SBTuEHhTgHioXQ1pmVCK9zmjRBKcV72Gyt3HWvTY",
  "key15": "39i8bPFYYnCjXdFvXoY6CWdu6PzxdM83E1zsd4uaCCSgjAUzHg1ncpuS2UhL3PtaycqEaWPmQEJrnd8mR8VXkHuA",
  "key16": "5AhGEKqmkDeRBXfoYc7ETG7J4KBrK4PZR3tKJXkrqN8Ki3epmFKxPdde6uTZW949ffwoAMSMUH7v1hd6W4CXnXoa",
  "key17": "cxwFYXr2qQHjXTmbMJjzv1D4M6DYi5hwudnuA5X3o2rPyHjEdjFB45K4JkMtaHMUbDMjxJtTspVmHx3xgw7eXfd",
  "key18": "33mN43w81dd6fsNXyETybAsqhtbpQetUcaetKEsEm2SMhh6unB2SbLDAA4c7XN7BehqezxoZ9MgUBAU1xFi1B5tc",
  "key19": "4uvENLM3rNuHp3MEvWLYTSuia3gAfcXmxy4aucRgyEZAVvLrkv95pPdc3KuyN8VbzdQveiG4RPnk4pCXxJF8R4rD",
  "key20": "2p4FazP53x4K4G5jX7EECCLyjodJj1pLbSt7VvMSnpTtBvefJZzTvb13GtP6yn4tQyH5XJS8mMXVNZmuHDUWUspJ",
  "key21": "4zpamjnUDgWFHxpkjRCzRP8H7uNHbNtz5SHjD9ZD6rGipDvzbWSJ85s3mDMdXevVnnnCad4cfG32JgfieKJK4DR9",
  "key22": "29bHms4SPe7VT9tpnrWeYstvuKrYSQ5EbMfumphye4M4zj6AatRtc6DFGGbp8FSrPsnk2J3gavm2BDnA1sr3tdb2",
  "key23": "3Y5LmzWyfzHydjsqpNkhenvXc3ANJKs8ZstbS7K4DtiTVX6DM52hgK9JbYcB1TtDa6u8Yq44GHVYNDmFXMw1PU6",
  "key24": "5igkai6wCgvBNAieacNia6Gu3MqickRFXzB7se8XkorV8YcjcXJDoVNcL8WPs6DinzTC4ayFXBy9rSWaMgN9t37q",
  "key25": "5YYFfjXTtQfsEdwafrf5L6qDxhKQ2TJdJBJVe6b22uCyoPiauLPUHhqhRkJ1zfsFKdAkrTFig7wNXkGmn6NZUpg4",
  "key26": "ycjgG2GZh1mEkDtmtWTnUzhev2ZLnLAuNPmpHbsNgbgAo9BqoKvvuhdTCCyALg3yB3iohELVWzW17aPdJjy9Eqg",
  "key27": "3zLzW71s6dVdAb9WALx37YajiKHJwMdoehFFUj2EHewtk3QSFrzXNnPtXKxJdKLmM1dB7KJzgWYoteZFVqh7TkzF",
  "key28": "3CHfSHS26RTz4ntJjMmbdkZ5pGjFRCde88KjiG7rXcUbEVi3j5ZB8rMTJy5FDxamjUqgnakVGy62uGMiDF4Y5gWt",
  "key29": "52EhnwTWCXRpeeY8Aymg5VwAzpupHcVW5Dzc1wsCsnmd78FTCwAxW4VAtUfG4LckPWh6yhWk4pGyqU6vDc3CxKC6",
  "key30": "539tMiXX6dD5XkFXwVM4ywonSBRJJ9ZwSXg9k6G22Nc6MdknsNrxfdRCSVRY2SVYuV43xYHQuaQ5GXNhRN1YgsX2",
  "key31": "2o7RyReeB1xwRRDXivXTSXtLfDwajJpgBv8qcazXDn48gVigpF3mwd3X1tasKq8exJHsCqXqsg9iw7TeoJGVr3Qm",
  "key32": "5vg4VRrhjm1g6JXdqvrAqjD7JFxgsweX2QePgMxVPLgtRcEPTvE9Enz8Q2nrgFYwmiqKfAEeZKFNQ7fiKpVC4JLX",
  "key33": "5sovyv5BesWHdmTCR8hRa9eMpdkt1StR9GJg3qVGSztNbNCxnByCSEmRsYtrjf8wk8YtZGMoP6ZwpK73hEShh1pc",
  "key34": "5CA1dRc5AGj9wh9vm6x313RT3SDCtkZV1UR5PFHc2nStKR7NJH3XgELTp7VAtAMssD4SNxwpHrrevJH1z7Wz4Y5c",
  "key35": "56BqcW3mKzsd1uM2enGwJFeQEVSk2VCJfew4CQ2n7XH146GZemzNHJhhp8tJ9CSdQ6reMuSmzNpwUofToEjwqhMd",
  "key36": "3q42s68n9Lta1T7Z7z8iwhNg7LfoLdRHFGdhigyAuUCiFKqQ1dzNZubyekNsiN1yMBnTZdSRVupRJUpqxwgfnnkC",
  "key37": "2CE5E1W53QLEHFRaG7yJ8qxRJWNCEZj9v1UeajFkjtc5LrzQ8qZAvtSaPuhr5eds7K2RqTFHLRBoKeFhrQ6BbKv9",
  "key38": "419C75u63ssfriNtUTG7HA8D6SPBxTLwit2Xk1PHNnMdN99QycFA1ZLLaZAPwxKnRSPyoidzEMHuwoyKt6KNCdS5",
  "key39": "3HdA6kouYNrApGGyWjXP5wshwecnFFXig1mNZwBxvwAVvyQLcWXNRhEeDDD9r3fsmQXWYYCNPbAJppLU5tLBpQFr"
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
