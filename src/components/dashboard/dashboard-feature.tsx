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
    "mPBSnF2PyhT3CiGDoCrHgvZFaT2ufDHXS7Suw8Qi9LAQk5RuMFixZ7uAzZAqQjNXoKTVXEDfnKZ9FTs88cntNZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzJ4cd62UgHptQBB7qcnPfwKySWqwdhWVqUXbdp9Vxo1SC8MHNg7occo44q3Kf9eYJXv9d7BCdDEudeAovmbvdM",
  "key1": "34Uy8LWpm1TxYDE3fAvg2AECGvuGj3BXhSHCLGrCuvVZGFnVHnQ7J9GhHTQrvYKPPP2f52EmtLR1jnhRbp26PVRW",
  "key2": "5raDiSk5G5mdHy85ZfbMg9rxpj4HBrYhsRSWudZRMeQkC9QxGTw3xMFKbRcDgH56HSzDK7CDb4DrCJFE6oQRJkTy",
  "key3": "1Rr2KBH7hzSuqNAGz5RV86zEGUGr1GStfwS7p7v9bEKzZuMWyAcgXH9cLMuF2ufMxXeXoGzyNVxVKtqJ5v7L3xP",
  "key4": "4NvHSLWhvvm8tjgePb8DfycW6LtTGKDi9AYSAYbf7VbAt75WphZ8aQ5JpYXGPMJwSDrzPC3pno6kwYFH7sCo4JAm",
  "key5": "4P3SfiiDWo1NfWUX7UULVSh5UuhpBaiVFexVyV3wuCJKt2yBawGj9U13HoCiNCg4VLfRLoDmaQWFuCGitYHxNnp2",
  "key6": "4kTTFVtKe53MtBve6DJZT1mCc8GT9CW3pGf49rsNV18SwzEAMMiBuwLgQ3qRGjEe3hpPHTgnZD4Trt4q2sd7LPJm",
  "key7": "5Qwrzubk6eHNT2aqkgZYosD8DcbU9pPUcinKFqJJRM8TWnvY8kEiyVeGH4H9AhYi43DYhZLy17rZtf925ZeLrLV7",
  "key8": "5kpDRnG447Q9aH9RYNwWgWSbTJsRrweqifgmugzSgguub7jDL6rQ9UevTePyr6kWCrU8A1psD7toyNM3Ey1CecKh",
  "key9": "5YJErSSKsU7ogMiQZ7ujd14ii5UN8FM8uNfJoLTSnNJLEcjCU6agbUctEYADwRFfJKTg6sK2KFZj4Szu56KPzVjr",
  "key10": "56J5fvA7QQTtApK51TCfdWaPFX9726tjgKnp3dwBNWGnwHRzhV4LfaMNo9jyXqnUuMFFDMhSFHG5RAonpkh3Wutj",
  "key11": "2P7Awuxn8gq2yRR3U6z6SbosLqhJnC9p4mwGXDyfpA6GCDDz9dLRjHCJbD5fpUsgJMdgwa6wY7XSdYznfB9quweS",
  "key12": "d3oN8NVfoxeyu45PBK9vDpyrRABZmfEXAkdNS6iuHha1XFQ1iQo2KEKkjig3rUDEEDecB2CYS9vvqiKpmzX5U9A",
  "key13": "3MBcTNdwrk6HAJMrjUN7zot1ZHt3SyJb4CNYVr7vFJFAWdHeFSghc3F2LAqSh2MFpuTYa2aHqx5rLNq4zBqAgiLS",
  "key14": "2SmZNky7XAjN77FSiD66bwv8sQwabmLs9bANQcmeeZg65nCibR97qfHpzAhfS4L6v9ygAJDCorRuYd9pXRoPeHgd",
  "key15": "5Hrfjrwfp3KakqVqMR6AyEinNfPCJ7R2m2cqXCnUrmsxCeVLYHhgjfDegeDJDXn6yv3i1ZV3dsPaTKuBJZUv8SLn",
  "key16": "3XtBADAqhnggfrBLPAsFBNF9v4CNV3kBoP7TbG6CTLK8dXxCAm9ymDSAB3CvfCKaqpsC7pSBDubkYynyHm6pjmtT",
  "key17": "3B54czNoT8wEUq5KgnMmrJPauTGTwosrgRuKPXDD9gpWBMyP81rv9P7Twiwx7n3zc8XEyWLmxryYAEn8vbufrMZh",
  "key18": "4NtVX8Hj39vWav1sz2cF4WnC2Kr2WqQ2oM7eR59oKCLH2tRzRW1As1sURms3FiZcXB38Teh1Mk7VMYHrTs1U6P2F",
  "key19": "59mEHrTEhp9ZdLQgh5KnwnNFw8fGXoXpp9m3mp8eow65AmVw5UL5ZazAAqpUYNAL39VMF2eKaEYq1TdvZxVJ26bt",
  "key20": "2ZgKMANdGjA6ocWFGCqAcvcJBDkxLymEuP19U4GACzZCozGbUBRV338VxJxUfiHEVgprghZt4Q2U71DM6XUPkjup",
  "key21": "4qSD2AjiwiHBb2pXonJD3T5eSpfyPN9xvaMC8pVqo9WiBJQPaPQ46dGnANrfA5vf5tmf7DWuGiBHkLebNrh78EjJ",
  "key22": "3zENzdbhojsmtwQSeGdoKbKCvWa3ssMQg1C6iEagNL8ozTR5BVwkrofsga8ccC4c5Mcw9Si2wNUQFnTF5KgspraE",
  "key23": "2qQPhF6UW2sUV6XVbzUBXrGsB5fZypzowzTLCZuH9iq1TN6gpVCjmH6ifDSYUfvLoPthv9Nvx6H9UPquzS4ZrEiA",
  "key24": "5ELiv8ho8NDRRiT6rfCvgdAvFyLHKPUrqVMWX3Ga6zyHETKbT54UQcLamGAkkp7VEKjJZhvdkyZ1mCjKoawS6XRQ",
  "key25": "5M1NbREeFDUEAMbdDsb4tsJFWktYfittPruqGbxrSXeRH93sbetvGybuPZaG4Tmj3oF7hvbaT1NKMB74U47pz49K",
  "key26": "2gnNRiTXihJdaiYrRqdnBPdPohRjWjXqkADzRNEDAiTbs1HatrN8U7xUJ6Y9Ax9u6kaD9H2w8vH5r4oeB5cZr2PZ",
  "key27": "5R1MgdVvmUg2mQjb43dbbFpcLihpNzCNWTTS4L621edfzJuCRtG4q6CukwLakc6Wcur7qcmdo8H6BR4iyrK7FYX4",
  "key28": "EPYjvWyY5beuUbDcghv8jqeGQcHMqztmKi6xxzGMv6ov5eQ5GSua6wmXd3P2LTrMb2QsE2Q36BFNZNPDnMKQz5a",
  "key29": "3ArDwe9ZAZa1oUdU6cHefuNjSkPxzAWiXnaBW8Gd9SwA2RopNggTMaQB7vk8pw2QWtJhscfEayvu5bFPb8n3ikgc",
  "key30": "4XBnHZNrZBAgoyQnZiofR33q7AbMS51u8XE7jvkQtv9NQjpEii1n8Ci4Rz5TUba24FpJRGyvQkMfzxqEzCYvzy8K",
  "key31": "42bbAVWYdgkTY3dqRNs3fm7TiVjX9MGsdSWAfa1tGAsiKLJoYbAhJV7yVUhaqBkfZ9oQp4MZLGKTp67kMR2LuRuH",
  "key32": "5CqnBM6r9h1JiRaDPx4pYMLWtdQRHZVRbjN4jPDAxo72bhwgenbco5g9KQXJKgipLT9i25WJWoTgP5nPSDM81B58",
  "key33": "gxj19vvqKWzhA8EsiFu1MaCuTHMxUcjFBynK58yuhyS7pCc7yDSJGz2eb8idq7hRkA7yzS8d8HHoPYjGcyYGsCG",
  "key34": "ocvABgPVgHeT3SDWv3ZHSVZAzh4ss2AMDYvWnK81gJ5BqMraTQ4TFmdQ8wgsr56Y3HHPCa8uXxkCyj3eWthdGk1",
  "key35": "2VJ3P8NVRMfBfp2hpGtcrtSjTuxbxZ1dr4XpfFRPpmX7DLPTbWpF6mhepzURwyMHxZDRkDXyrWm1s9orJnzbVEFZ",
  "key36": "44kf3CBxjTqGE9Bpx1Lnk3XQG2mf8fAhzrWuufsVwCSSPcfvvCAqkwZ1VtD72F6uE8oZdB1wvSBuLfbGA61bQzVP",
  "key37": "5oVUZtL8VZpu8ES2XLQmQw2G3rhM8x47VEc6WMJMVos8RHa4XPyDSi4RHmoK6TCcoT75WMDgsq46BozZMjH19FQC",
  "key38": "2niMHpk2rPRkbXoow84RcLSL6uKJpArB1FgTikguoFzTUhqbavwLQSGt9rS3WjYgakKneEa6crtmFiRomQTtkHkk",
  "key39": "21rJpsbY7oksUxmvFgqBKRobCq1hAWNcPCcNTGgXzZZmYTkhRcvhDQhvvXE74Ln68dapi4i5KCg61uLNfpPvwVeD",
  "key40": "62js7mbN8G22eh1C3JP44dWrZzJBYxSWmuxpCNyuZHMPJZe16QXJHmtE6uy7zQJ6myQKQ7UKkXcKEjvf6c9EbVmh",
  "key41": "2gNLdMJ3FvPyhgnbirVs94YJC5pshanHFEuQFZSvyRnFbvKAKvWsTJW12hq3zXAEKvR7znDz1WLcv83nYSEnHkrg",
  "key42": "3FAK5MzG2Zf3GorKcwTn9NH64pk4bvs9vfhQzxzPhE9vGG4oyLk5n8aK4uKRpicX6mpX7QethGrXAMheLTsuu41R",
  "key43": "42vTfmiy8Jtg8D6QoW94BrAoBrJ8P6ih5ozjGFKG9TafxwYgDos4FXP2CiDYqZM7DE9isMV6ATGbCcrsoBT2gQCs",
  "key44": "aAj38kVSDMBP93YnhiQov5xR2yFa72GMx9ScApqjLcGGNzZyu9u3q8AXtwbDjSD1wnVmrrYgTxNXGypZtjo8fho",
  "key45": "5K3pHH1EP9CdQBw4o5vQSbFnSDbdFNvRWeuMtBDSxsTkoFjDyez42uWew9dVkLQYwFeHEqwPaMbuRCkxE33xyob5"
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
