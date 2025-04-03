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
    "3XKpjRGEyLi2gCYjb3gwMtGp85zVj63iZ99RTTxadExhe1MyLXFGf1Rti2KAQqJGHkRWTKD9bkm3ANxnK5g1UPvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KL2uEG8b4FWDLgiWcTGeqmbPQJLEaiHqtGt5QmtZhHTvj4MscCG6ChHhz7c6KiW5qYSkAsDtuX8ZWAR9AMEVvk9",
  "key1": "4qaLkK9Xfm2RxZxhF32hUMCJwP2wHEmWLEpnPQAAtpR8byWbaK2AHaXnpbVrf4kVAapvzSFuGFGzq1fmhQmXc5E8",
  "key2": "44ozfuu1Xik5CHZbuzMfmgnZFSWpqkb6YK9he9zVpYfdqmCrvyFiV48gPqLGthBFTCUTLsjRFVRzmvtjx2WG5xhG",
  "key3": "2Cv99HLheFyDemyWhd971NoczsmsEdU9894rukJJVad5zPSSyQ7KREoG9wNDBphNExSHTNXypi1zNkXEXsHGw13E",
  "key4": "BfUzSjxb13AQbapAzUPCix4rt83124t6U5C6yhAHQF89beHNG9Fei9uoqjdCY4PF4vzZJEUzXbjTdRDZLxaZpjx",
  "key5": "5v2iysPxPJrj6VhC4BCeZpWHkQmPTgRcJBcCo6KcBMHPp1iZGwjqH7ot2JohNind9cS58GrQuhdbCpW3LW9yc4j5",
  "key6": "5FfrykPVeSM1c3FLAZwDuMqgnJoG4bDBZodiFxQX192WyRCccGcv9t5vuyCCpkKRtDWWBGBirVhKSKBAwaR7SQJc",
  "key7": "2BxgXJGge72HgWRcX7WhWbMnGhoCFuTUnC5ZrpJ7wLZDiVM6AEz7DDY4jvd7LTB4nr4RCW3FkWv5CUJWABTh9Gn7",
  "key8": "2Pi4gEndcp8gUA9cqvh4vt1wsYW4rF1mTpnss4FgCg7rSPEuL9oiTUrJneQNEzHgMub1gvfX4JQtuvxr9dxzaALP",
  "key9": "B4RqfjPgBRQx43s9zGkT9RFPq1WDGhHEocPyKuh5mHaADqH6RxzUusVmpov3ibyuYWppCeGpcEZBxfJRwtX98m4",
  "key10": "2qpdqBgwHweFst3WRyfh6WMAFKJVowV7ysiAES2gp1gTJxoxTc4KrJTAtPr1LdBjYmUSLZ3nWC9dzZ2YTwYhNZZd",
  "key11": "aPtEHGf2f9pZDXR2ZUxCfz1GZixjvQCXDM8HkvHZfKfTskZueJZy15GJ3kAt44RmaENq8fBwAqHZUVaFZGdw7uh",
  "key12": "5k8RKwWoSUec46upad9YAN3NiDgoNMvgNMkQTqEnrssBJ1b4n6KY926KRyH5FyMdcD2t6mS2G4EAXvwkbTtd5BuP",
  "key13": "3F6KZKkBnJHYj89XDE2QB4EeWzECdGMDf7w6mQRWLR2MUspwmS1pHkoxC67LD6PN1KqcuVC91Ww24aqfJ1qYXTwj",
  "key14": "5szMEHWdyzrUNaN7v32RuVfu9t59mbeM4T25d36SKb745axS1WG7VKpQ3zSUTKtLtfyuUcP2A7WA9FSrjH48dC1z",
  "key15": "fvoHmsJVVqPz3ESferHuhPe6sDqaYf7iJdHVm7GwQgEo9DEXah4XTLuCBqxPSyj9xwCzjEBWdmcyDp13AzMmfsn",
  "key16": "4iYvVHeLFJWCAVXPp9AYWYXRD9uW97xy87po9vcJBYfibFuyB6bwocBwKvpPXfMhxamQjtHvvHM98Twopqv8jHEN",
  "key17": "3nnFHn3aK4MQEzzyi1thDYSXNWir2B8dMdD232Tr4QS54AnUXLpLEugSkxK8j75zzSy6vFEGZnWiUrDQGwQy66zY",
  "key18": "2RRD74ZxrGb8wf9EuXA28Ht9HvGqVpAggByCayjsqwccvQioarGZ9EwMVDQxF8Vh9HC1xedrbabPcSmNJiTGcnQj",
  "key19": "2CbdNHDTcLTyGgvXYGBWFiyNkp9XRRba7Zftoc149n3jeNmwZRMUt4fKsRXLEP5noBmUaELSq8sxMPqU73jqFDNW",
  "key20": "5oevqQ81ugMosLAYRD8eFLyDiipQCUSHh5XNtjfCZ4A8m6wgqygsBngQpXf5mnVNRKt9F4Wu3YNuWqEqoLPfNPCJ",
  "key21": "3wc7LSD24PPMZ1QEzPoScr7sxhVj9RHetaw3c1xkd2ZKcJkRC4bRLyutDfMaiJ8VWjXeGvakN3qrYSpGddanP9aE",
  "key22": "ja2eyg8yJXSpBtt4qSqjKZo84ryn6ZvnxqGNAc95tLJEzddXn529eY8oy4TvuDJX687W4BxdNwyy5xNwanbp6vM",
  "key23": "3ZAkzRm7sFePM751JbVSBzqWkDiWnDWnqLmjWBo3teAf6gXQJKbP96mbQe3YpbjfGwAbYnz75MLETzHEW85HoFoW",
  "key24": "4ct615cCgGm4yM3Kh9iCuNR5yVh6gDCfFm52xiK4jqeBZpEDcoz4Y1mxVBBCcomGJnPZe5vgh8q6gxFPCjn8mpQq",
  "key25": "5iucn7XciTBxXdHjTECQC5pGmkmXu84QfKzyCdtNdegz2vKsy1QfykFQCo8MzUtmsKoYqVTyoKgbBXoncw85P7oz",
  "key26": "5q2dq3p9uLPyFNg7kvWnAJp5DgqvayMQzW4VRYsmdK5x7HpNfm8uB2cC3fFu92rhxN6C1ECQXYQFL6MnNzZLG18v",
  "key27": "5n1rQgpRT2rNawCB1ygdo4v2oGoG86s7ocnJMzs3QrCdvaVRm2x1vR6cAS4XCETDnMnVePhAuVmuN15s69GmtYiL",
  "key28": "36yMK31PUMA18vMUXqAwqvLeez28hCZHTkBr1C2evt8oKFpJvgRf9qd7izQ2vKtYbjRPwfs3h5MkR37TvgmnAkQM",
  "key29": "4fBju6WvD6QHSvTM4FXSRx3LNLKGutsHLCPoS6A4tQJR5aUfSbtM4SFccqmysjdnZpyB1Ly2HGBpJZbZVF45Jbxv",
  "key30": "5xmjdtYoGR67CfynnePyQ5N49iRUPE68MWzc5JrmpSm3FNVhhQbUsLmfJSjRqKWgSrp7rzK1dMWAhnSdiWEW3Wkw",
  "key31": "4gsz974x7kG5XqVgrCheoK7reMTED6fcZVpkx6Wvxk76Np5aHAsFHAy6qtfabiVacrrCTjSnGPfMeTmvBVf2mzR3",
  "key32": "3UhRbio3PLGfcwE9v4XrLs6wAeJsBE9YTnXMi7wkf6qqQdcP8aigyfS2SHLjLUaoXue1FFGjvv9NBVzAqoQDurBK",
  "key33": "dQ1UveYhKqaP4DVkYb8kvxY92AJFYwtyeEotxgrD4iadCv1RAv4rEtchqXFvzCES4uoQ5JeRJLPMkYnu6iw6i1c",
  "key34": "3bWHjqS8JmoDngeqcPRoUnKbbJTnQCk6VdnENcdpHAtjQXHR7VH2ubsQeGPmV6FWqtsGtCPW6iGpWpsN2Z3hN6dN",
  "key35": "3y5XNna3KHnRydGesrsF3bC2fpLYJtPKeKWGVvE4ZRCuPzVjn5Lqwke591ejHKrPXVsEjHHwebUiHY6hn9VYNM18",
  "key36": "56gpRLrA6gJ73dNXWfqgCcxD5DChka1nNGiHTCh38s9sPLtrJJfgSkGDA6wvAyseaiLYM8u8kFnZknpdYkmvszTp",
  "key37": "4dSNwSVh5Wj9tY2qADmQvMmUuAsDTZ73pKtVFZs5UKa1f61qrYRbW6yd7o861my3qtQ1m4K5gHNh4r72GbDW8teE",
  "key38": "fvvLtLrcUNqB4FrsbxqXNsNyQmjfMy5LWZLTexeKL5XbjhdQ34cDg1T8eRq55Wa13L6E3z7t26AbCyo7pqrm7jx"
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
