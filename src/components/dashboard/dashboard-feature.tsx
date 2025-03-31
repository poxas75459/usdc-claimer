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
    "4dFiR5pWmdRYh1EseyDxudMvGYkPvaPDfRC9gHrJ3eXB8caVqciXJKHZzKkR2njPJsQr5Jixq7arMUQUG7XiMkan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "122TzXNUTs3pgH3kqSTiAYcs6dkmvoRmeBXs1QxBP2a5vaSRtWLZgE2Ls4oJkqK4hxzFuvoEbXUMGvQM9ZZvKf7f",
  "key1": "3Tftw5ACpFuuowJhisLciSRp9HY7UTv6kSALHExqtqHjDLq4ihiwXjWYH9nbyjfshWyArA3bC8YvyasLbWF5Xdbv",
  "key2": "66Y4hakcbEsB9USRBPKwwnvavnkcjvjuaDS17yUoKyt9bza94um3cdSAT62Xrdjpt4bHpCkkE7BVBBJwuZyzaLcw",
  "key3": "2o82faFftHWvpNs3v8hW34kQbzNs9D6Cp4Qyq1ax3GJheJ5z432c58PvdC9DvJoNFdV39yd4mY6T3kNAiQc4KTtm",
  "key4": "3Q2p4Eh6qfRZezKigFE9vSpjEpbAW3Lyr1zVXnqBjNVawAMHaKin2jEWcJhNPAnHqx89HAK2D3YTcSvNLRLuzaJe",
  "key5": "57Lf7xuc4VqwqWFRWmAkeLQZ1amiP1mReJUQdo8PqfxkVRJ3texDTp5ngorRbVjEkvMVW3TrMvfKKbXETV3sDhXz",
  "key6": "7PJqUoVJ5sxh2mCZ5pd2ueDSkb2Ld6SjvetFSrFeXncVhvDm6UarCVkPnJxTcWb7qsEjNrLWxiytiHssgmVq3S2",
  "key7": "2aSx8ficuo3Uwcah4XXsztGGqs3qpAegoRauEjg1dXBo8JcCMYYTqqEBw3iHEgFsLwbc3wXA9Q4EJhM4SriknoSW",
  "key8": "4jvLhCLKvoF4dzEcC5q9pWYiPJonNVsrsPhrX4KTipuWH1ihzYs3fBEAFbFUywgezqaBSniqupD9yV8doxs8pzjK",
  "key9": "4rn3DARCgqTBK7KDc3dNiZsUnVwjpXnuepRabZkJnWNhVfsxFp61ckFFGT7VFgWrzVRHEivc2CXzrABavEykAAmD",
  "key10": "4Wv6aoYYhVCakuwomBj3ETTaj1veGBLYzySKqgS9N36oSFuJpySQ18K1CYxeGtkqhZ8h4hm8jegH1gMnUvBuxnUX",
  "key11": "eyZZEmDX6LEzTtFNiNEitpf6pzpEDUe7KMWWgur2K8XLKHzgG1yTzQkGmBCnWvodeJJRC6Fs6AbSY5mLN4Cmutg",
  "key12": "3nPH9aJrNH4eLjmxdhmtusn3pjasMk9eowrwFThpdRZLBHxCoRizbTuKni2V4HgrVLaEboCzondpfozrkaZtYNwc",
  "key13": "34UR3JBsKz2y2a7aSe9yFktiJYnkiL6n3wUBAfwWpNJUE1iE4aLM6HrbvL7wBUEzq8FJvQkawM2tkkb9uphr4KqG",
  "key14": "4dcvdDd7tdGDk1L3NKD5sZUvMT1brzuMJx3bxcPDXSSueETJFLCHDjEjtcMB1dZ1W2soYzL1vcxEYd2z9KupJKib",
  "key15": "3My58NoZotFVdrKEqXgnyioT6q8LSKwWpPQnPoSbGe1oRYQSuwurDvrWd9kuX7E99QtBqRCSa1iTnSvcnaMYvyKE",
  "key16": "JyVvW5nydFF8EdMTXNocQ27aJDhsx2MBu6DJt3jJ54hbNabDdnFLnGHUByJS6oQEFwZTP6J5KuzB7XNxbVeK5SQ",
  "key17": "4mhxUD6d2qjAc9Tin1RqHrB5sAf4VX86Ej2oBSxyry3zQ627seUSCPPMoJmEGmN2YuWyusQ9paimvBVKkduRRQip",
  "key18": "4wFVJ2ysyX848gkWJGoeAsJoKRLVCVyCCTo2xecceJ31hLcosJHZoHy7zrrg9zQeymQLwMCpyTWDPkAanwUfPVTR",
  "key19": "3VxT9bXeu63UrWuqVZKxBubdHjFhC5eTbcvxMaTAmwhDtrXN8HBxmPMiybw751MpDwhbDv5bneoqkPPmf44URj9v",
  "key20": "4EG6AfJ8DtTJa81QTNbjidbgKQnEHxGdpL2rBc7QdPdkKfWR8Qp1equTgXMiZ3ZBDiuzBb1nbKa48wkphL8yxtz",
  "key21": "4nV9WK2UYdU7VtkrcV6At4CBrig8766UE97nr7GB36tWP34znBTM2QoMBY4QxaoaLogAHcKpCPHdNK3yrpLwnCAc",
  "key22": "5k3PnypycLFA7vsBvWpHMUtyrk9NGhzuv82b3fNetAeGwofRwk3rBurnBEQATGKjF9ZoThbXw4j8zRA7iwsXnPtd",
  "key23": "222i7nx3WNaUDge9d8LHAXU54skNT9gmhHToCbxkZpmtbqtNJrH3DyjefBHi7m7f9CCYFXfFeFcDGUErn4f5ZyoN",
  "key24": "5qiABEAFRHdBRHxsZcaFvZssZHDLTL34crdYC8CX3BmTJ59jemJAKgBLKxXsXx8hQZVe1pvfoAvF7AYBmr8KJVdr",
  "key25": "4xpZiQT3JLigC5gF3a4GwZ7wtoLTSBxMhZLUqRNKjk4xyQbYuWPFyDwabmwpUnBZvJ1Yd9h4vSsrohLN5b5SCV43",
  "key26": "5neYujPWnuEEpNJQzRggHj8PewTBbrWmDQRfgompLMno3U5JNcRpdyeBaeHS7FFGpQvUFVeFbqqdxRAqwr4KCfhR",
  "key27": "31zmprpY4sZj8QgLVywbmgx52He7ZcBZJCrh5w9BqjpwbsiFxQb6VWF7aiXHGYjch9Br6nwW1ZosB1YEjXG3jc3J",
  "key28": "4LQPLWsTbXbGVAdx4iuiuaTRjBxCXk9ggkyCSgWeGwvKNzFxhtWjNxTq1SBmdQAZpvgk2cMb2BZPfRoLcuvcqaSN",
  "key29": "4tf2oAkJzareypmb5iAZqs7aEcVedZq4eJKvtVejj674rE7SFZxFDo2dtEwrmkupYmjjUYKveXj5f65oZ3guYm3k",
  "key30": "2HtrU5W8D2cca5HyNtpyomQwbdnFfpnpaAUoXnLGQqsRFRjTaYNqXmCFvtfAF7SispUzgGCa11kHLeCw24WrzNkr",
  "key31": "PCYuK5s1LVtUJ9EqwSS7cnMRSortzqzgjykDc2dcvjkCXuXhZDhxbx7HyER6exbu5418EXn4uoTRYEXE8hAsNcT",
  "key32": "2zeVupy6tf6p1hPG38MQFGARw4AYZriAwAgUvmZzEuzRdLvLdcMG7xmNn3N1Qk7ZdBs1FPQLSoronAtz9kbPSxat",
  "key33": "5TuTETge8q4PAh13zRrWtUoMNRwikccYDrgwW5hBZJqT5DgLPYcMQmiQLjqUJD8qxJD6P8x4E8FM6ipGJfd2f35G",
  "key34": "Q3wfN4bTDyA2rJd18H2JLzNVyBWhKa1VdXz53ki55LnfULboHJNLa6mQTHg6Pozn7Yzriw6jGNhC6SsExshr5G8",
  "key35": "Sggkje4nHPNDLLgrq1roLz4SnCJeWvMGF5pZqcFHzWj1zAiPk8rCyfBSnZ5ycDTzvoffZnbDfkTj6UnRGXyaMzv",
  "key36": "3aWHnU2FSvKEqVBpUMRiaLuxNeCofNuLNEmrXf78vWjNPU9LWWFkQmPL48zrCgYjK8PbBXeqqDYj32kWUzNHcToa",
  "key37": "KqjvkjvNoGuWZdHTRm7uQnVz7ZDPbbzKGndGqJfrVKS2MsxUjvRKHa1BgB4hT7vo7h4TWptrNgczBh9UxN4CCFw",
  "key38": "fAz8r7fMrM5mHsvt5rvsXrD3fRUpKCJ8Hz8AdsfDXvZ3b63iD6JsNSE9YRdyJmpqd1tv2VhQhkAK9eTKEchWpdt",
  "key39": "56bJgS7mKY3frhGAkZtGsoY7Pidzcgudy5NQzmnEvmwu3bwyUKXwDJn8tT5E65CqeeiPs4Gfb35RNiPfMpq2ghb7",
  "key40": "5w1V7HchE8fA5wGm9Z2P5uirFmsXEWqdGGgLRmDfe9jQr9Ew8PQ8qxzEDpFKo4oWkrpKdx5m7RZ8BRNbN1FSqyjg"
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
