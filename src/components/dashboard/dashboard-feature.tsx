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
    "4HoLWF2UhEkDVdpV6u8yyGuvBA33AP5mEwau4fAejoeZZsUBSmNZe9RkH1nzXj3UAagvYKBgwxS2zBDvmawA2ogF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47X3jXzEovDRoZwFPpE5BdoZbUAZR99CoTN5LeMUrzzrTqAuX9gCBShLp1R6Fr1E3spP8FHtiEYZYmftbsq3UfVi",
  "key1": "5K1UsZhe52eEqyxPiazjhjMfkKMaPBeTTyRqrirrZRAZ5BGoWE5R5oP4E3XFY8ssY14a93HvivjM6VPQEYcRVzPd",
  "key2": "4fgyzwBqencWUdcBwzuLo1PpZqSw55zab3Fotos9ai9uFENKGxFSiLKntR51KV5pvqRzdSWmS4cJZTUyf94QxDMd",
  "key3": "3xw4jrcojgyBunT6oCs19HRWxbjhN73ghmreM2k7rkLezVfz3dLFVtRt8ny5CAkLbyh5sqis5Umm7xFZq5RxASBy",
  "key4": "65Vzhiu4fGvNJBzP7fZFgAWqqMUryPLYr53VmTeNcaz3LCGV3nNnPfKnuJCPCQRcGBQVsi9Am9UofUw2nLDELAk9",
  "key5": "5fXFnParz5RtFg9zGWZzMK1RSeSEWU7cdkHGNrhB3kfZrNXTc1AxoFbUB3p6C1CYmPUk496XzKTDW3yP8Qvg1EPF",
  "key6": "5WUYeBdjumBqiwXAGDKjeAMN9Mq4btQqXHdGoS7bJVtzKRnrQAW6tKRZYPYVLYPczJJ5p4ukXzurcWg7juTdtiAe",
  "key7": "2PxCU5xcAgSPgmhfuLjmvQ7nCBfNn8tabpy9RC3NcMPKHDvpK1tL14NdUo3tN9xBLPKnSqmMN7VRxD4CjwWwM87Q",
  "key8": "26gWxVTKijdcGaqXqx37TbC9ia4ZYw31Yy1zrpHdpCg14EtW2YPZk88263JcvniFDW4nEQ6FVnVnZJ1S6MoT2DCX",
  "key9": "3rDFYBQvg4BRTYa4DzzwE26zFPRq6dWDCkAvQi4SzALiBcYvxwRcVFpsn4Cf3LHk4KmR2hGqo2a26kEnSoWQaJyB",
  "key10": "5zdGKNgyAQHqLSTEUYgZvqSjt2ofn8fxsoGK2cnxPCjaTyAgjJFD99ConD71aTLPQLxhFvxejACfzcZZbUDHt14E",
  "key11": "3Nmm5NotWgWJCX76kXjaUFT7YTASeEZ7vYdRSQgQFVG496S4CwZLeFPJW8egXGYDowr1Vmhw9SVAv8QuHAFyvYyH",
  "key12": "8GFf9JHM8dFX8Euv3SfYv2MscUuwSLzP6C3sJh6V41qpuEsMuk52Z4KpzEzpxaq4Rt35xN4cFJP1U7YpsyPFEMu",
  "key13": "4vpL4RdXgJnvZcuZZVP1XFWc43yiHXeSoikBr1gYprnU6guGLMULb9jHhQ63dFh28sNaAyKXTHqApAzB1bQ85UvW",
  "key14": "34JYfULmsmQGqX9amJdmBvv4d4V5XbUt2GHLzFeZdZzJEXtzkD38rCoefHmV46hzcgdLuDxp3ac8tT9aaobSdZeB",
  "key15": "3SrmZmiZ5ooQ19y8Q4KoeexkEWB9UAmVi1cbCPuy57L1Li7aQxVEr7te7PgvLzUdm3ekXweVfPL8gmNVTxE1WNce",
  "key16": "31c8B8otZcutLCNPRJCfabKrL2eFSYJK88S2BXiFguUxDjryvi8yUiFHm55umCcBiHRVoDNehRFZXoLPfXNWMajq",
  "key17": "p5tRwMaFQYCWBPpvD4VLDPZomd9P8mZy16XfbB5z8HsF2HGK6u9Z5j1chAe1UUDAZLbJJKtLbxWdaCbJZJys6t5",
  "key18": "4SLRoYL6gFYEhCUHvJGpnokKHN2mzdEyVoBKR1XormBsRhJdWdz2jdtWCE3eG2cYrhXooZuHHFiMynpE83YF9mBY",
  "key19": "4kPfA1ybvr1pM1WpGNedrBCE7mYhbDBzQf1awVdmCaDbLMuNijaG1mPSxtNe7E8j3DKBfqp8hYndWEy9fghBGufp",
  "key20": "5GZvHMc2oxH7krtqDCUtHUursmoJd7hq4VHAdHQ4pug59sA3BBpjftmKD6sn1stcT2Jqjtcf9p4p6pAkzZcYK272",
  "key21": "Etbo5yGaxm4cfn6vJLcowo2d45aWch2n2W4dVKBL3ojuejogCAhDpLM893DyVkGUrAoUqQdBB6tVXgjzTLFF5dd",
  "key22": "gH2qpeTvDxpoeLNUBNoTJpMPm7jyCP5w7m4NdP2ut6c6EnZmQERnCzZ1E8exSzXmPHdJgg8DHZVihUPq3ZkamNn",
  "key23": "4y8M9cqBaMYduw7G7RpBk1koPehkTzpXbRuDBw2bqfhx2oK9X9ugi9GJPw9MuLWkziLuLM41pKFg1dg6gBDyyKz3",
  "key24": "61V4FvV7UX1bRF9ppaZVmZ2PYfYLm1oo7qqZaaw9r6TzHgJoYPkAr4LvVgQpzCf6k64yhm4yYSri5h3MStGB6Fw1",
  "key25": "4pqfwedswmiZ2HLgx515GDaC4ugzSwnMsMtPKEpbbRW1ZjFGvnPjYAwy3dBaSKd9z5dSUfwohrkZC1tSANEVbDdK",
  "key26": "5ztdwQSbVHuh2hbw1iunh1wqhoLDc8xHkQxmYpBD6LjVAZ78qceYHqTz2U8LbynxSvxUL1oQLdecn54xu2CYcL5C",
  "key27": "4xoeEpKfie8vAZW7HgzgXNh4ReWebKYXew5d6YAKj5BVqAXgFNG6LyttVcbkymu4FuhwqLhLgZLwYgVdjRBjajVB",
  "key28": "AJNU4cGKP27d6wjdiXhED9Yy4DpzJYZyzvcGgJjG25E6fbjf5J12VDjggJbwKy7thiyguKxDWNvtbtgfmbyAvXP",
  "key29": "2Yv5Fe3ujfyh3fFf9mHXw7kpgCSmyii7YJCt1KMdt3Ee6H3y5H5PUG9T8tHbh2QTWhRr6vLFpG7UJx9dQiX2NTco",
  "key30": "5TQKmAPEFv8WKfafbgs6qgWFrCVKaBujSXWSaDVYD6bQiiPShE6CQP7Em9nhPf5QS6Y2A8Lf2roCvAwC1UvcME4a",
  "key31": "5kxdAgCxpuDKE2qztt7oZSGVocHiAN6tBDC1M3KzYJ2DYUccH1cnBA2UtFTYCJXQM2uqiPbot6ySepwGjZxepYT7",
  "key32": "5Jni57pmyHWQnCHae2bx5d4P8yLNEDF3TY1zxo3Npw4cVaniMadj8inmh2NaxxGFyGbBtoezvDjAL6jFY18MP3my",
  "key33": "2N2LGJCe1fCRoK3S2x98UWv5StubaML2YTV3tZY7XzNnDdP2aN2nGeA5DEsuq6nkAzz51YjrvAn2hWmjdXdkXQwj",
  "key34": "2r7fdY2EuqzBz9JJUXS5sxc6bnxVPQEBAyvJJYS8Daz8L89XxiVpB2qvcjmFV9HPQrRUUxjTDUxZFyCKpZLQKxoy",
  "key35": "5wZbuzxTqk5xZjmojpHK9XfXy9pRWpGRxWabr6FDwSbd9X4GQn82wFevitQecM9gotAGjECoHv1KiAHxbRj6M1CT",
  "key36": "5sjeW15Xet7EkevWnvB8mnGWY8g32NUfuFX7wzffZVNNbz266urQfzkQ9bPYYHpG32oswsCMNmLpyk3Dkn1zjP4Q",
  "key37": "5BfXB1jN2QZXF4C7U8ChJ8grVVCA2eaeP7jGwtDgVY61X4dUtMZzywHxuH7iUB2vYg4kqheLifETmPPZpp5QxZSm",
  "key38": "nU7u18fooGu1AtrFejZSf2yKrC2HxM2FQeEqS95T8BdrZ1QcFHqSt4awkikq8XeU2DYdzJx5jVkBM8jjpMtrbUR",
  "key39": "5WDYve9oaoW6kbDe2L5fWNZWY8PfAmPHGzKgZRULDs74hcUcC4pMN7W8S9cz9UBqSobSRGFkfF5gMMu3QpLhLDG7",
  "key40": "3gQKUzMUq1zK9xcyCS33HyR4Kezb6115QGxExU3bmagVn2fkZSvHeXfAYp4KrQSNRGVNHZ8YtAXfmZ55tyq7dzn9",
  "key41": "5xudUGJh5PUbmMUCjw726JW4AHLcnTfah4jpD8T8JDtrpGnTsz3FNw8Rg4T5txNSWgbs56e2qQgvei9TYsZJXzM2",
  "key42": "5bLSkeVr2vRZJFr97kVbPXRVx1v9XwMHLbXFGcdo9skkjBjxouMnJ8HNCWFBpfE9u4Ybi3sa1thpSSW6q93d7opt",
  "key43": "3g8FCaimgj9RL8mathHJijjoWqXBSqTbxHGa2rM97MwiARAnpxigXpdKyJxVvA61vtaTPsuKYfrBUXy4c78CquEG",
  "key44": "3NriyFKH48mY31ozsN1VjM7TKPG2SCvoQD5w72h7GZNPbpXPas5cBBYhidKKXsN1jM3KDXAc2gEFHozkGj1ZJoFt",
  "key45": "2FTPdGxaxEHiJ9AFQ3HsrTLvHrH9JXPF5gwu1xSXpQYSarjaUz6HvJWnzwpykvgNCmPTEEoiLhhAF3di5KRu17xc",
  "key46": "5pNkwrXKUnKk5EGZFHxzvjgJz2fr9F2YuTypSkExXniZuXhcu6BuVR8FTpvTAyc7Erb5MBsp5Zpm4EEgfktuhjxc",
  "key47": "41PGUoQpw85Sg27gx6fCvd4G486mWgNUXsc59GbYpQuYHgGgxQ2BqaodJe9csp47ujxfB9r7fnfiMqBqQuEbz95s",
  "key48": "54PhnuAYyeL1rJ2v5utChb6Hne2PexS5T4vJWTu4vkBLCotdHzNJdmDqQTRr92ntA1niRDuumMUf6LacamNfF5YK",
  "key49": "WnaLfSuCoSJsY6vdUGnKg1oXgkrBAX5VjHxdr7NNSui1GoxMGm13QA8tybNQKzsAzQ6jckKMdm4K5bduRxcU4nh"
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
