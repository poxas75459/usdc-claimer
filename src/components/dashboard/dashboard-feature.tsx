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
    "SCHjBxcoXhjtE5a8N2eCiKwMTMD3Cmz47Kr5vW1yqb7kRs8C5kkokENyAVkeE9ersaRjRAU8LpdjkzfbwNpdbHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7eL3RfNYZYUrADZd31C346Lty5Digw4c2u1BqVmuu4DHpu96n2oVSPyJi3hoxTZUEUHQxU5R3Z2PPkUcsdEiu6",
  "key1": "2Wmtux3zm8Dbd717vcsxscG3cx93Qx2MYr8xDXtuQex3YQadT8WGLtQ9ArmJSRMavy3H3LovqfahXhFPfdNjakr4",
  "key2": "2B6bwsFSHQ9W9fFfARbWGDReChfBy33u8J8kRuaDcjCdNZo3md5fSLUe77cfTc88TRwp1UBkMNeuf6snaTvZmKYd",
  "key3": "3worPBbLBeZ7fDyYEhHns1TsQH79oDH8Um4oWrXoypASyjjDZPLg7cB7768pNzggPDfZaKpB7VEwKsFv2oCkMqci",
  "key4": "xT9RPaKRScGiyZC1BN7JVQJzJ6YDazrzgA4JK2mrr33vteuwgYDWsjAXT6riCDf84NYdfnDwkUoUhevpRM8hiDj",
  "key5": "5GHMEwDvBF18jU3KJnF5gooDcCqFueXEBf8Jo35BC5xjtoYg6eZ2upu1wGqT3L7tdFApnh6LFEE5tANEc7ioUCsj",
  "key6": "2PteSqro6D2rCXiSg1Yjmeej1sKMHm6s9ArZA3VjyHaYTQg8iwmSkjkgBgLndyBCLHrw48eZZZgnZzkCKqyDzXCs",
  "key7": "3DJWGVyNr9D2BnX2rvAS3KFHXBJ9qUpPzCRqCrtvxYpAzf6eK4pxvjFe6DHfXV4Ajx7djHAAEpAFM5wLEB24kwpG",
  "key8": "2H5ZAfa4uUZWa2DNpJSf8vBQbKCXFc2bihyfhmKGaetfxNtYqprS9baW8QVmBNJxVWRpyZPrGG15UygP9ZczEpS5",
  "key9": "9oZM5dMKyi8d4bDxbHPquccw1mDK8BhpeA19x6hsbKhBhvJNoRTzymbWLQQNbeX5pUfssr1uFBu7fy3AiQS4FfC",
  "key10": "3JH3GJgUSzosESz5wCtN2FwRAZE68wnAznXXsZAYBF3GUaEJ6B3wpNZjMD4oZQfre9mkf6HfAgsWgJufz4PrxMAh",
  "key11": "3NmSoRuzDMfSSrzsZ7rWvMsTiowkS6jySbu7J3Mh2YFFrco35xqDF144pFP3hBiUrfYVTZ3tb5tEpSnio5mj2YGQ",
  "key12": "2hEUodCZiactmvft9WvRtXM4DChW8k7PBiB6UXeu7mWJXsHwbRoQ6pZpCVyvyQMP1naogdezmhEskMpiuQAwcvvy",
  "key13": "4Zq5zcYAgm3Y4aBp99FPQuu5LTr729FKwyp3CvrH4iAASZMXiv2UChnXxEgpWpvRNLS118bf9gJn7PdmmXH22N5q",
  "key14": "4tpfR1ffgdnrEz7oSvPtU5ak2iiJe5jf5RwJpJmRoFcoUvaawSeHheacp13epUyrfb3fsGRVRarK6EQM5NCC4nZY",
  "key15": "QG7eBLF7ka5LieNv5ycum8Pe9fNHxbrrVM4xktjABk5BwH2LNSG3vi5DiuCEpWdMn7AEKeR8MkpaeQeVRPikuYH",
  "key16": "21eXSNvUcwins2TDCHxEQaTUqf7z2XCisvhLkzxut6bfq4WmbfFtQmWHAva7g5py4Z9DpNLJMSC2dMaUfYGC9Jmx",
  "key17": "2Vw1tJrYRhPFsVLY19wsQykikLCYgNHKyAH6SnHCgcaqFQQMMcqr2D17QKDXnMKoKYMH9GNVytPDDT3QZ4XACAkE",
  "key18": "5fnkbaqTBPWhRz23d3JKAf5wVmvdpWaa91ZWXef1MMsxNK1uL4kqAkSjCZGWdGeN1phNddm7foCBUoBhrrYWTKG8",
  "key19": "5D9ib7PfqwhNGUdKW78w3pYWGQ7TFvaRbkGLuwfCvDhfLYXxDLfAvhdj825RLwjYLNH2cSiiTYs6jXaosPU2Mc2R",
  "key20": "QWcGKCRHggBhYj9qxcD6SkLK9RhYbSj9Po1pwRqGyyL8sUD1a8fXJmmu3z6SMWqLhV37HSHtFpv5zWjqDNrmgFG",
  "key21": "2QJxRad45FCVsoZaaFHPUU9nA4tEbv9tTT3K6uGiffisqpshS8CZubme529R6pxU5EGoDC41CQ6tbLp9DsXshWGK",
  "key22": "3oYryT5NxJrr2o9AbsmurrsFVRfWfnHbDV5zspjLWvHGiNmSEhaqxdR5iFkEM3yydxLm977CJBhSCEqoHevN2Kd",
  "key23": "58GKbLeMZYZz1ooqqLCtXF7XVkAvzrawPZdRZYDCqw52acWSTNTFefAuQiK7JCBqg8X6iNATa3en8F9dVcZo3dWC",
  "key24": "9thMdxXPVS1TrQ3rQLCHiff1c3zTfa8Siy4KcEybxxqigsnz57GqRQjz2iwb7DFCpJJkcNceN46bJfd3RzuZ9zT",
  "key25": "4UM5B2MCFE19NyhDj4S6nfobSLa1BKmcr4N1ZEQvX3oucUeebx1CtBYAf3SxJDYk8ZF7DcwMr58n59Cu9UqHCgR4",
  "key26": "XRFPodYLpwSXa6e7GckY4qWm4cLRJ14qo2ymBQFUjgHpZFGpNuMKg7DbR6QhYhgNhBJKRpEEGVHb1272Uo511h6",
  "key27": "ozkUT8Kt16xznQPmNF2iJqRaGa9UBGLRTWV1RbijafZ4dX5vVFrxGpJ43gpf8HEtE9qmRrkMp8WiewFLWfK8VDE",
  "key28": "vxMt5NGpLHCKxeaxiCgR6JqcKoQHuj5c2iVkB5fLG24C5h6j4rcy7nMp1NYsDXgK6uvcgAmyTtqfVD1vaqwwb5i",
  "key29": "4j7GRUdpYxADbH3JWs1ooXXJue4tKZtpZhVfkxiyhXde7XduiVmTb7meg5urqMAkNADH6cKcz5MeSaEFfJdw5ic5",
  "key30": "Zqsd196gvjTz4CdwZ3fGXdTdMMVDY8DmmJJkQ17Vn9j8ZGKoVbafgv8Yk9dFZtFgqk36yUdm4K4H7ADjJdY2qYK",
  "key31": "2FV95TQpLx4Fto5jynsMnnNcWHEGdVqJsE4qfuY1pmeVuSbac8cKuscBABXHyWLKmoN4pa7HQkD1DPiZoro9WKda",
  "key32": "3eY6rQcCHa4zrsz4XnhCKqpRQhFMM3qAE7c8BjbFCKk3Pag5eMGWwQfYTeC8qQjfH1RVyWDc1wouYNwx8nND3827",
  "key33": "4Hcyndcuqpe4W4nhL5ZZfRrXg8Wjt21jYxGELoyxtXUhkAaNWCzU7fKi4ni23MEk6ouQoEzmbDHXnm3aZQYiWThi",
  "key34": "5FefSpnqnvEqmTX322GwuPNXK7W9Pj85vxRcuj6MZyJVnFKCQxm98WNGwNczh76WH8u28yqtPJg3qLaedJA3X7uq",
  "key35": "28hXsAhiU9U3Ln7aqsAu3N9S6WnDw5AfqcnTeaLRaPynEjJLFGHRuTB5KqzHBs6hFGzVU3B1YEYFuDJAj78zCVUq",
  "key36": "3LMx4YkGp1UvpVLnYUfcvNfTqfkTfnG29AGb8t1dj4kXozHzPPWFeCo2pRgqJMFuZtNa9CghHRZToUL6BbvxScD6",
  "key37": "52opvyvpCTroZmUQ4i1A1yoGx32q5fgSkMDXmT1oE4TKZboq4oCNE4Y4ivoPG6pTajBn47rDbhG8qrnAiWS4Mu1f",
  "key38": "63qvhuGE8Eg9wNW8ryNMPAqTeMLH4qWp62Pz9Ww7x56abZNB9DKZNzU49qFqBVXV5Y6oGEomteVZcTKea2i3Fu34",
  "key39": "4FRuMFkeJUHY1ySFnrkuXu6rrEQH91UVsfy4G8bpqB9k668Kk4nAdkCG4jUsCC1YKz24YJqANrrviBivCeyK4Hqf",
  "key40": "338kphjbyXMX9eGB27brNwWN42TpGNznuxb1ZZj6J4cUnS7NVcuG62R4THPN9kcHo5pLVmxtuTb2kXBRUUiNW5sn",
  "key41": "2VfBkKHa1Ps7zmsKC6WFAcQ2V9dgS8gnuoYBgA7gRRRRmUa9FQzZdsupQGAxqrkGRjZUKf5roUTmrjgF86TqAvCY"
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
