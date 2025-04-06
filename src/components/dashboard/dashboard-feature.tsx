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
    "3K8zeEMu2DwrCNRAYuNd2meQxqYTotQNyDcTbyrt1Y9EZEkuqK7WqZPfoELP3BRSryCLsHMduHZagJz63FugbECu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgj8z7qxzuAeu4ZCCcyCwSZz1aVcTuBL1LtzWNcafQrASA9RG6fZvnsxwuCjjRueCAMmSFD8w6NGjzFVJdn6ahz",
  "key1": "4qU1jBnDcvd4UywcWrz5hczhL7eZkvtny2eYNYdcDd77YNA8uk1RoFG1muhGXYT1SAqWokQcPU4EMTbHs88gQmvq",
  "key2": "3kUSn8CDQrfU5J1HV8wnfJzCySpxjAGsNTUFLTpVSsQGj3sr6EyJrvKYpDUwbAbrfY6fF9jtCtD5G2CdhF9w1Nqv",
  "key3": "2au7iUWN8BqykoVS65dzs1uhT4g4A4Q3JaVNcNAiZRcic351UuYX1iZiJqcVfAvUWrk2RCgkUFjefv9ZWG8Wf7Yn",
  "key4": "62jUobtWwLhGegxVUfmHw2G5We1BkpUHCpPqefsv8v91qcnUeuzPAnCWpJNhkKKtPP3jjHVFXVd3tQGkmjfeeX7x",
  "key5": "3mxw8dPyU9UCLHCi1tKmH453rraWicuF8KBUcyCJz8SSp3MR1kPh8xTSP5jz2Fkt2jkURUjTKaPHsRR6DMaE7QJv",
  "key6": "234zau1JXhBkh8AoBmCFfV7ZFrzy5gP7A9ku1qcbbHwHZxMdg384BsVsvPGhUnwbVfu91vi62fNVN7TmukS6X6gR",
  "key7": "3LJwhn5c8vjRZnf72m6RfCJqbZeGe6YF2Gj2m7kct97cJDKDh6tGQVttTVPnSqtUzbaxRHVrLwKVkX7MnC1qkXqu",
  "key8": "d9m96LVo2pSf6ZRVbiuyyCSJeYh6VH4Ygnt5xdSCtbuzXfEUK34bWuSkYEez2PwKDAdwnULh728ivt7dRT2oiNj",
  "key9": "5dEQRjhcYTKdM4kbXeeB4157Ne1NHJoJjRC8FV6dY6dPrvkqDVhCRNQc4QVYSmsKHNWvr9GjFSuVTy77H9dau3aL",
  "key10": "5WjThFa4rzXEhS4sbNji3QE9wqFA9f7jV4vHURiS1mtqcBm9oddHqihUjncn94WF6MjTtXh5SqiKBNmpFzuk29nD",
  "key11": "SthZwh8VVtBu2hBeSYk9EfKK6qnDtDwo6HjP1YqYH9wD8LjpVANADpAkZSiH16CQoA1Y4SH22vj8qyDD3oWDma6",
  "key12": "3LBsnbneobYp1PSRJqBCgPsKp1NfkLM7tUGJcr5Fe4Z78A5NpkdV9BnpS7Lma4wHcj9fFmv1zpVEAWbVUaqhPwJA",
  "key13": "53D2GYyMVMCghxPxWJmyfwzzCfM4gRcYU6wd7LfshzazGh3LAgCsS5vWxgo3C3gEXVXmqn6Mr7D8nniViZv44ffD",
  "key14": "5pAgKBUp7uidGXRbKQgix359Ho2Mho4PZ73ExBcsJeLaMksyYUg1NeLFvLvVCWb9LgNdJCbxRFBUpsKAJyUd6Bc5",
  "key15": "2NtRnXT8fWfNeG8hsrD8genqzsEMKoEAs7twcLdPcbZaKCK9XRfpWmecBeDuRsdUgdMRdXibFQBxWfAmoX7uMkUm",
  "key16": "JNuCEDxHfYwku6NdsmnwuqkbYGUqKp2qBpzt9t5Xwau3eMTqieu1YeECroTAUt7EiMAXjCM2B7CHVhMGKr1ANhJ",
  "key17": "SbTC1vWou4XKf6nmT1GcDGrghje2nbaVtPuT5UWB5ku68M33LhCrFH3FzuM5DoVArcWZydmcuPya25ZR1qTcDVV",
  "key18": "2aivCYPFTQv3eS2NvNpo9ZiVeX8bt1kGwZRECVM4vbBzSMcKhTuRLyxTW3W3mATQRGmtvs7K3RkeHG56khGyfJ3q",
  "key19": "38Uu1pzJbtgTbEbQEysLGrkrhLtyJLwG9dq2FijUjeEZki43dWDehDM8KfztbzLrfw8UdAiXVDXFUG4wUyRnxeWW",
  "key20": "NQ5yppmDDEMCGLfgNaNDtbbwrF31N2Dy5kGgkgsa2MKDf12937cLYYK5d7763bM3NKQU6pc9vmoGPk3MaQE5F7c",
  "key21": "4PQBZgQvZ6aid7n747QJzfUhq7SJeEpp6DgYDRtA28PL2fEZFTqfztnmxbYbXBGEoqvH2YuuH32ZVKDqTbjjH535",
  "key22": "3BK2ZzjStDZZ74W6xYQr9tD8dyZoS83mdJz6BLYNA4WBv8JNjyGcf8poNyjrcT24P4QBckSyNZB4eg9ZBSQKuEAj",
  "key23": "63xSGiPNJ6dAhjYTRYFwz3AQMiMgqGMbdwj5GQVrAFvp4f9S8uJF3oVA7L1ZxPEQX2ns4GUiUEZcA6My6NTsqHN",
  "key24": "9susZHNZ5x7t5N9ip8ibPFdxrTstq5RsBBMmZJWQ5LG8MER9RcnrfSYDgsfPkaxTQtF2qTTjh5kWJox7uukqNyJ",
  "key25": "2dw3e81qrFwFiNkJARwjiVrbYVJei2dsFhSwZdb1D4uu8JBmodczgpgXc8x1n9cnLQA48e9FmjCRs9dKUrQ639FF",
  "key26": "2SzqQsdnZANtUKfShbUjNi3zhFc48SLLrTtnDpXrQwpApPq896LMP9Fo8h5cnEevigHBvWUVdhA6xQdQnDXxAdHh",
  "key27": "48oHnQ8nLE2vnemdwYULcsvNjUv37gfqLs4wQpepbz7aiA8aG66vqwShU7eqyLxRSEBD9XfgUktqgkNRMu9pnuA7",
  "key28": "5hLmPTPcGNHZ8KPtFm4evM2fGLct2vnVkScC5fBkYPNU8XxQRPVB53Tjd1ixhYuNcxtHWmihNDtdWJqt6cZZ458e",
  "key29": "q5qcaPivEyYgbzPLUQz3PxfNYL4ZYsJHnyUvkapkWKiTp2ZUGh3NK3a4Cd7NKtpu5Ry5yXHmfSjUJNnWswDnhkv",
  "key30": "4oTnVh8rMzHLXAkCrrGJgQhavZ41vW12tksE7cm3RyzrB51QkWp8tzvoTxa26gnYFdwFogBbmDaRddJMEzinpEMX",
  "key31": "3U71gfA6P552yeHX8M9dR1cirfMr5DTfYfD3G8MsY1tDfvsVmyxMzAkirFBF9NRrybJajCa7GmF7LJNoSyKRgmA4",
  "key32": "2Bf8yRmyUgCrTS78GsWEwzPa5t17BBsqreqrQNTGn3SKyAW9WFqZpDrAC3Yqy63pVTug8tMeGWnoSFXUUnp1seiA",
  "key33": "FxN4CMmDACjhCLqJZSquBh1ptGmq6ZEyJQVhxMsSoTjMoNci6gdnt6yJAq7noXmA8RCZM5B94AoDt3FKhYfMnQk",
  "key34": "23Mp84BFQWGiYmA38QQ1MmRvin7jggVQfzpPpSPydeEyZMt6Mh5feTuL6S7MXKogHpmWtZJsnFdgMSfqD3K7Ns4e",
  "key35": "4S3ckXhCvWhQLFcx4e6NG7KQXKV3TE6BR79zxs4CvNRnQJt3KG2E2Q4u88NHiDUWJVH8yMeJEDYUdeZXtBhKiTvY",
  "key36": "3haQCXPK8R83dGmH9c1KSicadf3CeAbdXXWGArumY3NYzZfM7QggufFZwxdrQ5JCptfZnJ3Y8d7C6tNGcnruQXne",
  "key37": "3E9hKXsf4p7DqNN2Ho2UzBReSqwWeMy7axgDmHgnjnyfdwEoV6rG1UrSk4VEFD8KDhPBZLG19RfmoKPSceYPANUt",
  "key38": "21r9w9wYQ2H1XTYzinWST3DpZfBF8nYp5Y5Mm1wjq23zVHbgqgiB81HXzxtqt5d4HBQXx1HwpmmFfj8bKALc82V8",
  "key39": "nNihBu5tM393mSTS19xjrW9GYNbGjm9kiRGYeFwM4EGTKm6HJhjVYrkxsLJgwwuooRMQsNVo3iDXeXjfGZDD5ZJ",
  "key40": "2WakZUCQ6GsZNaKKhdfe8WRT64uGkAcUfNM5ozEaRHMKZAtFWzty2biNdjKzrMfQkptmnXUfAmJQMDY4gPvNiJAE"
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
