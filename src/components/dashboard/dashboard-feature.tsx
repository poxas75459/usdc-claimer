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
    "5HEFnhNXjbCVVAxvZkWxz35fmd3t4YYXPSbEGwtjNUizX4YdzKfJ6fWiw5GK48RDuThM3cYocwzobXkcNwkTf8vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzeUiYAHrE3V6xnUcft6gUbsttmAXf1RXEZmygF8AEGXNtYPffzXYeaKUa4vUmLkRDjAqqzeuAQxR3vS1JBmJQb",
  "key1": "3T9ED3f3tpNZHL7emXjaHBsfWBGci3rk5DGisNAHPNU18YgKfcTwpmXz1GBncd9aDDnaw3Za2MLZxQujU13XZzks",
  "key2": "2SH814wdUJyyhRedY93qRqk3z9hpAGHMz74Mfq9tFygphsw7pWKBnUhLpPyfnGrdAnH3HCevSUTgeph4MFnhC5SX",
  "key3": "Bpx62LN5Rg5PSSUuPQjN5bvCJ29TdMyg2qPGJZofML9Hb1ioXcceY8cA8QAuhbGvuqMXYj6oPvdiFDTceCh1q9P",
  "key4": "2X1BNC13JdPtrAZ1SM8mGNT8ZHiqSSG4AJ67jywweLaGtu8Vg3siYRdQEiHTupn24S6XV9H9jjs87xHZk1Z4uH26",
  "key5": "2i2dXNghpFXtheFNBS6y6e35soPwskfaCsEfp3MtYcL3s838VLc6VS5Lf9Fyib3njJwiqvC2ftrCkySwPSv6taCw",
  "key6": "2tXdsfJvVzmm54Hkn7NgpDYnPj4BYab9grsBfAu2Fb2VF65gH2i5VfDtcgK7qYZ3dvq2QAULprWT5LMrvUpiFk7S",
  "key7": "qoA6Lg2BTkzE3rC1FRfLApvfnPGBNNrZ3JxnjiSABt57UL9hFsccGeEKmVbbzFqDoBBP2XTNyS8ZTYaqeDas6PB",
  "key8": "5yVUhuS8z3ENZcvZ4NdWf1wTVq14u7bM6a8WERED64MNyACptJZGC8j5Acns3wXSPRjr5LVvcQSqSj993xYCJKR",
  "key9": "5zm9ydtVmYpqkyvCDBQsp3eRqX1KF9rRYiLApqtUm1E4x6Yjq9CQeGKuEPmUnivFQY1DwauFFEPjucLPLiWzQrZt",
  "key10": "2skzvQcUsDSGt64zPpq79Mahr3DhMMsyBZ7HhAMM3zsvKoTv5sBMtAqx9saErPMTFmEm5QBLQ7rAsxS5fUqKXrUv",
  "key11": "32BHLETgWjJB74NhmnpxTnhdyntPxSMNVetrxapdKuRmHzwbqyHB4jfgKdsRY11FkgrXynuSPeUEaBNEagBWCn6b",
  "key12": "5cDeMuPd41WS6RZYnBynhJPVmpVCDWLfTYFTJoQRXbFQr3FiLag2iW9KyM4XxH6YoyvWQck4r35JM36oooJipxba",
  "key13": "3mM8D6JGF62YycQzEF1K2wu8tewNGHFkDyBqRzDQqdz1BXrBZ1Xyj8DLo4AnZZozAPn5dYPAQuNxMYcpxxCVzfwb",
  "key14": "4y95J4KTsqTgNGW2J5TSedJ7VhyWMgvK8yjBqeSeHkTrTdYv8qwDfRkqVXriYGpXg9cxo7LdsWBv9WWT8utK1uTT",
  "key15": "4xSG5v548zb4F4LfecjYDezMkMRky9unzffS8nYsfi9CwqqqfC7H9bimwhTCQ7U9rx33Z7vfv9zQK2h25YLHFVw8",
  "key16": "62kAXWr5VpUT5MeRnt63A9x5kmPU6Yvoh8ged5Doto7jCwETtEkgUJZmQj5mHMtrG2vBxnpRj6roUCB4Epqusx2E",
  "key17": "5wBEuHLiP6TskwNa7hs68hKNsZUSZqnaoiWiqJfj53rr2J6mQjnVKaoLH6rQv2yzcGqxfT3ieDdDZW5ne9uVJLQP",
  "key18": "3WihAcj7DEeJc5SCa24gwFRSUzAUbJ6i23r2wYWa7MN35Vjxh3sVwpoWJ817ds21omVPM37W72HVTUrfqigZBVhX",
  "key19": "WURuBJ43tQ7bCuZR63PgDcVYG7sdXhmcjjdmodH5CR1NeeJyYroeUQXYtAvzSK5YSZoE8YG1kiwu1udBKMLDdJr",
  "key20": "4SjWmbDm8wkf5V2VVxok4uwxeJDwmigUxpKuZBUjRPULDAfHkJ12F3d6ExUJx8zyjAfN1HaRrGQXPxYELNAUAAQd",
  "key21": "3bahZDc2DVcqgoxPUdwhBav1Cfc4FYxocJ7vMeMhHx8trFhtvDQaDLRFoEAvDUWZMmQn78cHHQo6sELEnyZxqvmA",
  "key22": "VR1PByofSaFtNvXvzDv5rMuvqax7kzs9tME3pmjGPqSrkHQAAmidfF8cWv2Pp2jKG1uALDh9MszE54vG2QjNcPQ",
  "key23": "25BAkWCDFntkcW9QT4VJPQVoQnqNsTuvgP2iHWeNiovW3unGsfBzZd1T8793UwmfvV3YpHgFvMZ4qFCXXViDkQom",
  "key24": "3g1JZQgStJjJjUCrAJRdNH3feVQqnFTL9jqUZYSirK3oHTEn8GJkn61Rdh6dwwhT2CWRh1fvTn3eVKcLxvVP8foE",
  "key25": "yaq4v3zmnbLqMZSkKZ1ZJZihdPo5z4xVHiFz3XpzemvSDbzUPmD4jS9H8PaxGa4AcKVPQizK2FZeXUBShfEzzVc",
  "key26": "44cDnmRpFthivb1qQqv9kMoQnrQg8UD2YhhZnLfSVug5AP14i6MhyQaY4JKibmVRZTUaw9rKpqMqm2qPohLYkbLw",
  "key27": "3TTD7mm3QJwChtxARnZrJeMhzwMw7LLeqndckNKzcjyFB4hxPRg7SLmRfq4zN95W8mS1BX38FDwLBr64pgoBhheQ",
  "key28": "3n6szHwxkdZUCDP8RVCZi266PBQnp7xJsg6AQP3S6h4vhnLBnKKufbDZS64NyzbDdCCBjwX5SpJXie62JGPaY8wD",
  "key29": "4ygoFiidgm1k6Z7pMrazgRU858hhJvC5GWzkvEuNxcRv2fhkXT5E1ddMJv7mteydW3cucTmDxVyweUQj8NaEWLxR",
  "key30": "2wJ4EuB1XVd9swFzt9FMvcAgHysYgdLZym1Js7Y4poZYNDH5EWxXhAEhhw3f1eaNK9WApZRvf6r1pAwgFHpPH6H8",
  "key31": "5zjF84QFYWsPn5K3sQWNoP5zMK8zfihvvky39Gect1ayV9DcvCPDHs36xXYxThQwo3h8PSgdLmBhntRgQeBUrYz1",
  "key32": "5EHQyWTKSzPt2ziaG8oxXstidrGmDirSzZTuujnLFk6ZNr2AcyCS42tV7EjbkUQKPvd5BwFkievRugP2mMhWuoFL",
  "key33": "64oxB8q5FXkkY8xZ5GzsKxJ2u9CuQ1HXRx86CrVyeWMtmfkkAq4vqVtMuN6DQ1tBJkcB76SW1uLbf6iWVgfdkP1c",
  "key34": "3u6ousHNmWvcYbCihyW2us5MNmSLg5zbBZvNS5pKDg6ypKiKBYnVHdiGeH42FCorWhv2HJ1sXFZSwaHg5L8hegSi",
  "key35": "3ZWsaHRLZqnTPN2iDYPMYPeBR9Q3zkuReKh9STFsMysi6xoMk2TdoxTxj6dHMtMQndf5HFTmZ8uBtVBpZPpWYudY",
  "key36": "5ixKXFwXxAmsUB33ozdLtvbaNDrnv6zn1Sg1KyyERCuDfXeKpUKN9QzJfMtCYMpUg2RjRBG4wzMgnPtFRzQQpiDs",
  "key37": "2U9EDvVm4WGBXk8johFcfPpupJJijeiZYAC2v4ZnuzYJjqmPhb2QN57VvvusQtxGnJNhpUC543P3FJX49mbEXe9v",
  "key38": "3MRcAmNULUdtXSyEh98pWjCspq78w3CRyjyth2MKp7Bv7PqZ6qkqvG6HprDVxbGJpmLBziqzbUd7CY1omntE9CkN",
  "key39": "4sQ2hx74iAU457BG9AyAWJC14EfcG4xkn5t68FPW1jVKpXSe6hqUxX62aqFmGqFGsijTTZUvjLJGh9GUoX4cQSH9",
  "key40": "28wLhkgYeGa9LLfk2KhBbDXPSQooey1wot3YqveBauVJXiahBJrjKVSrbuVc5vDMHwMNaRr9n72du4iPUiqaJv4s",
  "key41": "5EoeTKw4ASg7wVJFH5nFp24FWR9rxKx9PG8s82LBL3PqWB5sg5nzT8t1N6iX8yCtzhYZ7LPiaJETmgz6WJ6q9WeW",
  "key42": "4sB77WkoHeUzzPn9nUMFZrkbVGAVDznaFvPanaaFoT6n7bS5SR6ucqvMB8s4USigXjXYJCAfFTgXyM1sNvesRFKY",
  "key43": "2NWxsfMWeRoMc1k4piaWrrGFX5gCW796D6WAJ3b2i4ddUKnYTkM1htBCKxJfqnemRA3hMoAUgeMmJXWLtX9QffHz",
  "key44": "DSoWfsSPq3bG57a2pAxBvMkPYGVJ1qHmQ43s3Nk5QEKUzcoEUdoHZm13e9zikpRLCE33xaPGxWorot9dX5rcBg3",
  "key45": "4ixtDYivpZtaafWJTgrfWWtSaYc1wA89iu4kZjyRqCj4scVY1bfp4s6EyAWcMbRgfKVYacdE3PAN2bfk3RYZST5f"
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
