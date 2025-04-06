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
    "2aJkqygRThXQUuTiWQFqcsYH7ihQMBn7wSwkWDiA1PzCAEMZKPujDtvdKPoYrGHkWjX3xVoistfyQVi3b9NUaGbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACn6SFdbDBxiUzAahxrYFpRMYqQSdpRYLjwxrXX3ku2HTDZx6aViKocQNbb9quGLDRfFDbFVqSZHhEaBRBxk2ih",
  "key1": "2qzcwYum2aSEtJakuq8FuhPDUFES7AQ6FZ6jeNPnD8VwTgskeroYzLGzEvmEGFZzafYLKn8G11zrZvukKuDLy64n",
  "key2": "5U81dmGaSpahHsWmFo1GdgJ4jaPUpsu658SUo6kgbZSWKJXEa8ikArDJD7vmBCWcpq5if3iEMW9whEt3taqEkpit",
  "key3": "2DmenBhM5LgV9APJTh1RGLLJJmrDWcWcAekr8quePB3efWqoUTLG8HKAkcoxNzQxc6jyjDACmKLkzDiz18dfLfQ7",
  "key4": "4sofA8mviu135Sqy7tVXwvQWeWYK3myTfk1tAA98vuTg4iYSRpZET1uk4kadniJVrWZi8zxM33SnLjTSxY4dNCx3",
  "key5": "63aB6KNgWE9fyvmsJdnxRHWSoCTNsyJysCpq84ax8H2UPj7nR7ux3fPefKKvyPfpKyWy3iQrWm6YWxqjv92EgiZs",
  "key6": "4y4BZevz1CNKQacseB7973tQM3UuCx1wzfSjn3frNhjstSQ438gqFZXzt1QNiHFL5mVTkLEm3N4iLxiq9DSr98HS",
  "key7": "26ikCRHjE7R5sUqBBdYiBY459WAsJrns1GHeP8kLBaeZNwasDdMn2xLEEQoSnRASRK22fAuXE8GcskrmGjen3vYU",
  "key8": "4QfejumtoZKQUbNSVNU1xN7uz3L524b1xDRYe6KPigiVMYNpfNZgYvZv8rkq1kYeX3o8W9CfFPLZKNTwMQFTimw8",
  "key9": "2L1aWmCfNrB8VHweDdWre6QfydepavpxqgPYRUp4FTAhCwf1ADeCrgjGMYQzqtvevvgg8y6L3qAmWvDZGbjKspFo",
  "key10": "55pfRsCLAJc1qPQPqTKQAQvmiqcDXotHkighhNXHyziDPp9DHp4XV9sukyyiHDaXwnZYNgaCJKhxjHVuP5S9mDwT",
  "key11": "HAXthpRsq5a8bixo5aWzijWw8fzuh4NpQCibhiFwajnqtbfT69KSLs81BdKFErZzD6USr4jpTJUW4pDSEg7mrKe",
  "key12": "35sBTpbbkCr7xtvYPGSFfy6ZFY9j5e8oATzGZ1SuxQBuFxnq8LVtcz1ub2E4WMeP6rS15ac5Agq7uDrvYySuwDnY",
  "key13": "3iTHSyfHudFg6iuat74zLy6d1BoHGBQRgR43vzEcrc4QbbqdgbmBexG1nicHBeuDkdw9jmnwYpbEXYHYv1YHYowr",
  "key14": "4p38Tu8mUv567DR8m74ynKkrFEWVNs8SYw4XUncYBi8BYvFRDiWriG1N5NrM3QUkTBgztMYzpZrfk6mJxsybMVzd",
  "key15": "4Ecu4QC71TPdJcHDw6rfv58FDhfEmjTJV8fj9TPZoRPdNRqvzvH67UqGdT1VM91qwujuxeFyTBnKi7uL1hSAfkm6",
  "key16": "33DRiB6MwXf715igjpNkegSAebNyTcM2uhBdjJVQMNTjKLDge84DzP7U6NNUvDyVRb9w2rjgtMABRKNc5EnUKbnV",
  "key17": "2PTECkpA7R5xDMWv2DKCfEnheka52jJVJdDQcYRjD6dDgN1fMxd3M2NaML8BrMGtJs46a6qau3HuqaWKBcVgJamo",
  "key18": "1xArQ1o3sU5P6anEYowgHzeNX4kqCPbLPR4n3wewg8Q2kPGqK8UeyxzSTAx6ERHAmUQmj2caWGQKTK3HQ2pZJwB",
  "key19": "YapVPVk6hP88bnukybK75qxToPvwDx3ttSNsNAv6o3LHKXp7Nh2ndsFrzC83H66QoAVJBbV4zHTMgpRj3UA9NUz",
  "key20": "2wLhTaySfGvzTdwEem1yFhxkfnSr8kFHaFQmtwesovKQAbSXv3KGN3KP3bBd7Vz7vqaEKAtajACyQffMYexfNw5M",
  "key21": "WBtTfdqudMnZ1SfVmCAfZKZU8VDdu1ThhEH8L1MTSk2SKmCoYyCmhfRiLAdG1tv7nhwLef4ASjodCgNmWRFdNyb",
  "key22": "4SVG7qEVSP5WSTsgxDy9amvVB3r2quQesGgg28c5qTBBWeZzLF3UgrqyAYPYECAQKiQKrmnba4CxPjVSLBBzTnXQ",
  "key23": "2wiwbHc18yo16GbqqxGVnb3QLsGJxUPkkpXJrkvmZqkF3LZTyW1rP451dnBxxsbRtFq8XYLULT8Fr4iQYTCagD1C",
  "key24": "2fkzyZC7LX81AB8LFRB852JLFN5EKHrbuNsFD2SVQ8UP7qtVHXQRrASrcTBFVmsr4T6wMPDWXrhKnhVb6xKNhpYb",
  "key25": "4qkC2Q3Kd12Q7jSUhLL37uwbuawQmFtMaXjNAsdgLYCeiXNCqC3AfFNVg2DWJ6xGnqSDXvBUgPAD6zcH9wuuTWiC",
  "key26": "3yksHacMEELY2qPzwwDhnfunQJFZ24rk4BkDVx54J9YBpzQTUvEJqZYzNbMByDiJUWQcmkqqVic7RTmqab9hPVog",
  "key27": "4tHsqaHkJqAe6vv39iZdzZxrDscs16tEvQ3WmQqXqgoXpFpQpjTi2FGMeDHJJ2253TrH2Zstj9HNCgv9DBTQrHed",
  "key28": "zHvjH2SyLgyCpzBLHccqZE7QW6xd1FVGd3XT39AXQHo6eMG8uiXkyeSKNBZjMVpxbJ69u3425gmH37vpz44e1x3",
  "key29": "3Y9v8rR64FsXEzF7m7W6Co19433XRbBUyr6ojPMS2nSXR8oXDJAjPWnt86PtKEWCef2WPsBqc9CNB3qcZM1GMVq2",
  "key30": "sFrf1MEwrHaGYHTJNRm4AerEpb1Heqfvwt5mvmCDMQLcSRoUwcnLEiw69TrD6rFkpAKPGH1EHh6Mi7ZPfwdQHPG",
  "key31": "4zLEUQSqh4rns9JGobhbrd2HMpYeBFBmzA5nxBYeg6HJXb1Kr46muncJXDDzqNcpygmxhwwPz6akzP68VdgkgjAi",
  "key32": "2k3Yvb7ovtiFNtNnmrC5MjkcZ8MdHoigUsWtPiRcKiHA9zcsYdKahyLixaVvJjgAn9Na5mHbgzZFgFZaot9HmFFx",
  "key33": "U2tvqvjGkVPCRyqVtKVxziRHFRhjvzqtXd8DYReYWowPTunvb9W6szhnUHx7yigXRtQ9X5RH7x7fPaQTVDJE5Fh",
  "key34": "uyJ8QpTbayiJWEHQ6VAXFLbTvajvL91gFrhuGFgndLSPhSj9ZY76QvBWv9QTSHSLy45QhBSfnJ3jrtPREoE1JnQ",
  "key35": "3XeqEjmhWMHSogHcydFePzo1dRHM5vBc5DP6BoUDPGttLoZvum7jxgEJGuupW9m3eXZJAQS3rDkQhur7gog2gQ77",
  "key36": "4NvabhnuK54UGdPFSofeoTEbYEqJZ9eNUfdwhBoeNdW2duSA5btbdS6gCuxJivd1uAMSM1ov7zrmgdaDsrp36rEJ",
  "key37": "2cKQp8e5q5g2pf6JNznLt8bC837bQTB4q1goaE9m1kYcPraGiWpjMwucq9M9AS3Mb6REGjEyy8dFSxr62Jq3Dmcy",
  "key38": "5jtzk2wqoZkguhUYVgp9Ah6F81fCcJbmmTRdBjmR2BKbAAzXSCkzL88JuikfEoXBn2TwUWBRoqYYfGvZtDD1K7qN",
  "key39": "3LTszQpbs7XvzC32xKmUSvRTjjWaMrCDhMLQnPmNsReBQ6MgtUqEt1wYvWgYen6H8oUeKkD7VBKTFNKN7ga6rREr",
  "key40": "32LGcU9RTCGEZjKLJqieo6jXJSqMz2U2C24xpdA593vv6hZGYTKCkyv5xQyDas3XQiGvmczirtzTSYxQAFGUJvAX",
  "key41": "4vvEiAKFyV1BMtnyEuxj758JvJo3FwqAp5GtgHodSNLPnFz8buuGSzzHS34GpHLKQMaWHGdnyUzmmkHRvHH12UKR",
  "key42": "2PXdKJSh7CrSDXXs45dffpo1oHkXPo7GeYfVWhCe4bxpHSd3Y1hxPm62DHh2yPHScp527E34RGjvjjMZ31EJjtJQ",
  "key43": "3DnDLEp3TW3VHkdg4uu5VuLqJLMFeohtmTAKCKYx6VYqjo32RcqRrfKJiAa975W58KiXdmhtKr9U9bU95h3ss76M",
  "key44": "2PdmKoVHihrSt9ptsDwSjNQS8qhAwprthpXrLCALapSjbEwvLdkupE9usyNZxx3hx17m4S6FYKRgTyP8KG2epxi2",
  "key45": "4kJzTUdubcqx9ujPJLzXbKYtpDwHUdp4LLAu5kyB64sgJ5SuktLy7AcHew9yAZDrvoieDsiFA5vAFnf2oWkzAPbn"
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
