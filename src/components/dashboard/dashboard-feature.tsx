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
    "2L3tzAojLNUEsLoeky27J1KB93g9kByg9MVqsNgJeqxU2gaiNN8YCnzSmQ8Ld329vrucN3cHUEMG68htgsMt65bK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675Dip53L7EKqo4FM5EdmeCDVuJVkYWpqocXt1L31StByhzsXfYbGJQuseVixJH9ZPbc5yZizsGQkfdR5uuYvhdk",
  "key1": "3hY5BCCZynodh4iSHngY4eAGGznvqh4Fzta9STMxePP6q3FY2QhMzsqZMSPhFbJxVxqerngZqZXtEULFK8eWrrTh",
  "key2": "3FKdbjZrNLtzfCeGJrMCR6yRjXmaDZdCAg8YzQiwuPh9265gLjh5Tsmw5kQpKrUrk3RrifLAY7QwMxe3WK79w81x",
  "key3": "4anL6qxXfNWvjtPdF486ddKNgYW1sdthYhTf4sJLS3frerrfSg1zsj1CWq2rjtu18r4ByT2icpKt9dtydchABeSy",
  "key4": "2W6m6dDUTAYZiSDxZFinaEdJj4DnykjLc3BZP64FeDTcUA8FgDuArdxGKJjV9Pen6syRqf5b6L9BPoHta2676i8E",
  "key5": "mdPTzSAVeghQTEkQDYz59QBWPTe6kRENpqQcj6VDsrAQuqUXmjm3bwJZfJRtDuKqGUy31mdGf4vEHUxvkA3E4Gv",
  "key6": "5sbc7sL7RuxuCuiom4moUqU6YVpEhLEsyfyK3J1fmHQxkgWZrZu1pf8X88FqV5yNCsPaVt5jFPqsfpgtqqMupTw2",
  "key7": "3Jc6cKHgCGiKXBn7dwyW5RDsx5ZwuYuGTBsu8QweUCqgmV8YEq9gBn3u82D4CHH3KQL9UtxpQUGnGJ3G7R7N7YV3",
  "key8": "2WFEgqAyuexfeQK3YwbgH66yCyJe7jLWJV7kY4rxLtK9xwJ5iCwUXtmLKEsAyRD1BKHK9fyZN1epi5kqVmknTaiD",
  "key9": "2AzgWMTZdXBNFQ5AWLTvfeLNfdebx9L6ZDyGo8vNGumT5kZLQ6Za2fGcfFLe65kEJuT1YyZvMhpzY397fMJTxXb5",
  "key10": "PzwUPX1csAYpgEg87MzJfZhtXEzQPA9XSDAF7XDcyfDQhfpUBjNL9QePPAsyi3ikzGCyiLGqEWRr6Vp9Uy8wNZr",
  "key11": "VLFNzt245PWpHpde1ZzVRDXTP4wzNL2QtyJnQQvdL8YQa3gqppcQb9JtyrJ5XmfCgMesKSj1mv1DyXdPZ9VyULG",
  "key12": "MGYtgNeGyCxYbgYRxAjG8FRyWhcvQ7NiUjDBnLQgjZrSPCEY6ccN16dKsZi3xr7WCfKij27PAjwEy9KGW7BHHLo",
  "key13": "cR6nn6A34ekSy8kz8PRpXbTswqLRToBYXJRmhEnk3mhrsZCY814uotTEt7gzLJok2eLeNo8BeenoxvaWDoCtU7g",
  "key14": "4UD2y6826zcm5GAiqM52qRcPRgK7SRx8onX2xy2yxmQJjJW2i29fgqhHMYWMN1HUwpnWUAX7atZf6aU29TgipGtT",
  "key15": "5JAuG786KYjmZwWhic1jQbQLSFmKVcGTmsBUGzrchhJ1TZp8Mhr9ZSHcWv4k1DLCBw1ykF2TcfYFvot2EXUJu6iS",
  "key16": "4MrkpFDWkRbjz65WCAKRCdrPuDj6WipVyL11ZbkRMMzZ1gQ31fGYT1QCUM63R2ybKaZe1cx3eDz6UQjb68x9kxUW",
  "key17": "5YtGnWzghnRefP7NYnEBnADDyZruCZbDWK1oNRH5ULk3smHE7M7AdnaPvL9puMLH7Anwz4xfD1aBDCe5WJyKZWBp",
  "key18": "5s4Lt9xMi4uXyqnEEpwmNSx7rrgECfhLdfSB8BUdbbxfVSGkEcQGuZe3DkDnz9fk3hFicYQw4jRmkyQupBny1NH8",
  "key19": "2v2VD6Y5Y71mg5aQZtHJ1Az2kAhu3Yro3FfAzJE13tfspKMj3zq6cM7zrdzvbwivShC9ay4xxCjnSmoQD9Q7j2CM",
  "key20": "3L1kuVBdBMaXsR3JVP9t83STFnFM7zikktqdVUscBjNhmajcAzN3iSFHWaJkiJ7nUSkepzVsstBRPpQQHVY5ikx6",
  "key21": "2ordDEBeySKiPUnH23BfVvUpFk74Vrcfqsm3CaZpyexQsWkPar1wzWdbVdyoPjbzAfwFYhxYJfRrtDmokPcCjegb",
  "key22": "3A9KqV3WVqEe86fLNvyLbzab6XbU5GnhoMdHFBEQBaV1jiBWb2esLjUY11STwtWdjWLReN4hmJvMsCpjacoKNLiC",
  "key23": "3S7yWVqityqHRu1p7gaNUCxiLYSrGjvc1Vx2E1LVd7gQqGFBYivRFmqR3F7ZTZV7q88S7LH1aUzbeWX2AnRuqkLA",
  "key24": "26gkF9KGrmSvj2wxpxrCw1XY8STnTqQ6jW5ptDCpG2eCytEhPei4ntQhmJtiVdg8bFhUtAcfD49iBFXGGFHhiEFf",
  "key25": "3GqxcepVujCpEzKPhZxtLk8QNqTW2iVo7hMHvFhufCXqH8TsdefnZm5zkaH1GBRkK72FJA7hVCgXnF2AYwBjYVGg",
  "key26": "4EVZbyEDthmeSRFDDbxF8F79GssTjBsMVRB3AcehvdqzzgZtb4X7kzGgJEtwUCTt8Crk7mP2sdyXhYXHEsQP7Vvo",
  "key27": "3AGTVFBrjVQBQC1jtA1KBB7fjnLtnn8C7riZDTTEpkCoGRQLYbCwgfvMHJLuerkLJTWoDdGcrS3Saev3ZoEhftGH",
  "key28": "PyQFAWP68BZNb3RVVFuyVEBZtZZ5q5t6vrSZsUkTbFUVrhT57FuEqsiiaPM7uMgJWrTVwyJSG5JeF4FEUaZhHep",
  "key29": "57Lxiz5y7knT8tZ4td1AyTcE9Awq9GmbvVamppujigwA7MZQntVWc1wCvFsL9Y4SKQ2Be89Hfej8RAcVSfFpy6rd",
  "key30": "4NkPmnrqkKYMnXhgr5AN1Yfv8g1ezx2eYd2ZXgj1atTq8heeLeydTzWSyZ93gAGs3ZjsTmpcCe7M5EM23SwQUYkd",
  "key31": "kv8Yv78yHPi8KzPvMPbZxj3tSdX2raaWdHA3jzh8uLsihCqTZRTJbKzsMmyFsPckKL5p7hp86duhYziha9jUHDm",
  "key32": "4b1KW8b2CEFhYZH1DVqFGCVsyDkugeAHrnS4Ttvu8uYC41mMU5XbCYppVnTd8Hygv3N3vHhPH23Ste3Lwru3ronm",
  "key33": "5uU1SuV1RjEPFUMdxxZRzvsRvyB26yZo1XX6aFRnS9TDUGpDVA1o3iegoXr1V9NBC1qfvnSJp2paf6ydzeoC6nct",
  "key34": "3EwXgaVxAxQimgXkzxNiisDaUbkdrZ9fxs8bVCAF897jKWoZ7FPZS9pWaMBDNpqM1u7sWgatd6VYYQjXoVgsK3cM",
  "key35": "4jqXupAEh5wFCVdTYxRRfVvVuDMeXqk3YvnkhzDgD89dZyR5ZVQ2S6rbYbtyYyrTKSQ4fHzu9HRqjgTYz5JZdV97",
  "key36": "798JWRdBCUbEpvR4ZvQcd1knRUBZjDVLNgCvsJpfJksJZ6DbuC8BWjLpPeZsVmivMbnLuoCHBBTdfPZyTuV5UtV",
  "key37": "5mR5knHJPZxXtePZc8sXcz2zPh3mwdN9xUeEoV8ECtxe86ZYv4PUDxHzb4uyk2czLnk2qpi4LCobtagULB1MpRUo",
  "key38": "4bcebjMfUHQMHYzZkHnvc9SUvD4LMB9FXP2Yz2gykwG2oj62a8kaXMN7ZveSEiVdkTr9RYgB9ZaVBP4fyMMjWfhA",
  "key39": "SQaJiv54LWe5TNu2icamKLEjxCSM2U4bo2bA36p2c9TyYHtMnuoV1M3SuYL6YT1gGFBSDwkoPWZgNbxPpsWEUvL",
  "key40": "23LNu1ahsUCD5eifjB4kWKQREYtSTrU7X3ntRQA5CgqRZmrTExBJFwcfRdV3RvJ9iAsAhyzatBEFxpxtVuunk4yK",
  "key41": "4pkTERoBpHfpdWFGt48GMiEbwfiWJiw9CGpLKoryYJdofkNnBfiMXEr45SREEERo8qTMD6Qtz5QkyU5uBLHmiW3R",
  "key42": "2ivm4VDY5xuWa4DFThK8xCgKfoiK3nx4o1SP71rCq7H7iko9tBiEDDQ1ViBjQd9MmvycrtviHiwdoxPAc9MQM3hZ"
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
