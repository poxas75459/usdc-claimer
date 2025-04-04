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
    "mgP1KoyBM8Wg7EDirSFGjkwpGE2QWDec44FBBYMZbPBA3oAF3sJ7tLXfKk8cj5mLgxSNVGC5JCzis7ec5R1aXGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hb7ff8yXdTZMc3c5gcPLpxHvPbT88GTMMPvd7VZXqKTazTdDpgCJwpUE9htZXypNgtfom2k51YTZp9jTEhjAuj4",
  "key1": "3WcTiMXvyn8MSFihd4Mr5V5W5QL5BR2Fz3RczquyQZHqMvUH3sA9rfeLwYDhF7TM2iA6aaMncVLBfiTkGZG1pvRr",
  "key2": "3qQENP4BkMd6Bb5bTN1W5vycS7Nizh382kyMa1hbNo3TjXAZ2JgFDURmadtvUB5Ty6eFt6p8eCr79toefZXEvq2g",
  "key3": "3fk1TLVgu9v1JoYkdpk5cPfoCpjxQCFGpJp1srSawanmD5jVTpSCL7pmNNAzPDi4GUKxx5s9STnpQK93CTL8jAXT",
  "key4": "F1PxoQcmCv8vdAN1RiVekPnforvEXv9qpqUyyBQgfBd3nvgffm2gg1GhdrUN9LzgRJjvPhZm6vaAWzWmgwHKpRv",
  "key5": "e5rFdShnfqxDgEejSeWrNPvQwV3TdYpxYzzCnp4AqnxN2ckXwKEdgACMEtL4CiompowPgKE25ynkJ6PZEa8yh87",
  "key6": "4Wv4vwy5ADfh3toNW38SkAu2EENnU53hoj32EuBhFv79BwgDGwGNSvTiiscSZ1aPYtxkp1iUT1eGY2GYjSfcpG5y",
  "key7": "wD4up5NMznCABUzahMDZ6y97miDUWv2gfgvtnwVVZkagbvh2hDQTAXBt7s2jfaeAE3uPhWR6N5WCjCkBmgJHnD8",
  "key8": "2Bny6LmFFkvwdTW5n8TXmP1gU6oJLoGUnsM6KAFD9LkAbRdwM2SxaEnTJV9zKpV3qRgq4JMCXMuXFHUP3kwzfCPw",
  "key9": "3Uh3u5TJ1ajFtf82jSYPa1DTEeZ4dbsh4HwtULLVktPVSfdeHeppdc5rdf2J6T86Kz2YEfMSbkexz6ioL4RAKc8G",
  "key10": "2y7SaDtAimtf5RddKbn3yKHPmBSBCGtAx2f9pxpRyNkQS65HGqiJvmrKHYmE4LyLEa1yP33MV43szbspbHaVxe4E",
  "key11": "3w9qYCB6DsUYEDYMpGJDbhgJogJK42nysu7samvTjqtxqoMZaWhhThQtsa4f5iJnKHfbQ6u6xBippnqNQBcQBXt7",
  "key12": "yCFFKU5y957cDXqwrRYrjgML76dCcEDm8kqRgnwyHgc3ny41rRF9aRZcavdeoRjjdC5NTUe7Snv9M5Rsk24rbd8",
  "key13": "4sWFWiwNVGBxYPa1QFR86h6bGYMu4GiUoZ7GCRFN66eG92w22H27dPxRkLNMrQ4T5TPqmkvd46Z9S3c5qaz44cfY",
  "key14": "3wcD5Emyhw9LoKve7CvrFzwmQLvoR49UrfAzFMdbWN3BqXQnuNPEMTcHvW6T1RwBqPWEZUwJri7awbMpczr9X26P",
  "key15": "unJ2DnozX4dTShV6fNxcF2KTaYmeCDy42yu8tkPMXF3XKdsCTwbjUT5YnGDt67moPAJ4hepfYLE8F1it47M1Nc8",
  "key16": "4Q9Dhn9AXEKaTh4SKyurG5XsDactvwJJMg5LiztqYtkoDqgojRLXGboMdTnrXZJ6K2TvUsvh57HXLswJFMSYZqfc",
  "key17": "31aziPBNxsCrJdSzaNj9j2CaiCiMnTrw4pUKYx98XknemuvKHPSQbqzqWda2VrH1Qe3dW4svQWht6i7U2DuJiDVQ",
  "key18": "4md1CDU28XbZw6d7hyTn9U14mXCsxX5sqR1UE5MFhkB9TeFMLXnfJNtm8Yd8LokFjEV4cRt4ZJTDpt8Vn28mRQfe",
  "key19": "3eddrKf2jutAtDN7yGBNp6jtxmwFmVPuva2fHgjJwngsP5TxcWuZh8QhyZhGkPMuTicgCQB4wi6AzMDypxrB8aPs",
  "key20": "3neBAq1GXvgPY23wxZhMsp3J8WCa5vezG4VB6LKHaFhdnCob6FtKiZcLKKfkpsD2weK4BEH12SLJ3JVQWLNBQC1G",
  "key21": "4waRiUdWfh67KC8MjLqxr1MFYGFpak6NR7bCUC1S6CRw8EfaUAYahFjwJf8k7c6kUcZmyrvKM5GDsxNfHDBiT8B2",
  "key22": "37XwhEvjXjs14SrSmZ5QtKFkXE6ktmzHKQJf1216Hgj2ba4UaCqUuxf6yKbbcLh6zMMmWmXuwPo2xugqeRFfqR7k",
  "key23": "2JaAKz1tvGKzqnJ54576m6gnfYJxSpRaWBgg8sHF6Ssq7GeoSnCc4vMy5nF6zbK4w4spfqGpVjW7wW8ng2JBobJv",
  "key24": "2z2HWibinSwcnz9x8Vg6cvEBbTxT2L98whNaGXbMDksncMDJG8YQjsTPVj2XrvLargycmFGKvFSf6gFVp2YjyZJu",
  "key25": "4Yrnfqk83w8MQ3hjCZDoCYeXBae115ZK7Rw7inb5w6n9RQiSSKx2Vz4XNGoYDmA3wTSpYpuV1UXCpG2SZEx5PWvT",
  "key26": "3Abtubveiv8ja1GWM7Nz6u2uW6U3VdR1dNBhgATLM6wTrkFMfinGLyYRkV4dko9pchK3jXBS2LxWuFPN3Syi8j66",
  "key27": "m2PoVPem4QFNWCDzVmjCpwMRZxgP3UXKwpyvsP7oeFXkqGXgVW7CwX7KNLPQWA23hUJS9LDdViiHgNhKJNaoEM3",
  "key28": "3UkjWQzfrGwLqZAkkzi24EPXRaDGFfuM9B3gajEJzHEVCxoYaBM5gC8UzgAw4fPFZuYordrUGKsSr8aqSyJSstD3",
  "key29": "3qAVyargqmj3R2hP1PwidArAYwZRG9z9Pso9NqCQog3UQdU3aQFcxxcKqpJMor2nyhANUDHMvcVYvjxESBeMaHUr",
  "key30": "5eT8RFGQN5y2shKahX3SNXtUMWXpre5mVLtTeXiUYLCUiwWFo9o33VyEwHgLTMmutvMQMzjbyDByMDUxpJrt1Cr5",
  "key31": "45g4D15EPMrbJMtPHv5FLk16cReYKwKbNMSqktp7CPCVFg4u2rprehf6rqTxk71cy9oS8K1eLBvu29N18WsJgAmf",
  "key32": "5MFTLuftuzTi2pPGCSt6L8CbpffRytFYwGaefVkpPFYxP7k5eFJXCcnrZNtkpse4eUiDpYneVLjzjzEkrgkzhKbH",
  "key33": "5y6n9ZQwLQtdJsH83WeS3xJQpCEUNk77igjowWGB7pqxvzf9utd9jnTG18eGgFaP5fy2FYd6rFqetYx4wJrRHRoQ",
  "key34": "288iRGBGcFuvVyYVxJznGRLyBUVHLLpDUNExGoF7JtUKsbcWfn6aNZLwaUPhyQ18Dz8o6C4iuyuZ8mVgCh9XYWcf",
  "key35": "56paNbBwnu8DCEyK3WNGxpCaKsjUH3T4xY3cashCvojGQ7VUrjey2Rnd5hBCsm3qBwwZvPeU2VosSPYympuWCbD3",
  "key36": "2ccBF1z9SHe7jGcQSerZHDTpgLBCSPAh9K7kPTGokV9ekdHzXMoLSJmGQMasRo8iXrPEmyhovhjYwmDPL4gY9Mjg",
  "key37": "3Q5HosZpeKpw2GS4mzA1B5tbnoDranSPjBg8unLH5AnYGx8ivcB4D9TnkJoz5Cqrdg7K1AReGNCMxuRwXRVe33eT",
  "key38": "2MsqcXWnbYWVFXTo8ufy4dZJemDda8ViZpTkcRraRagWsiy4mYQHQ7ykLYnEQwmH1Nci9Tq9y8YoVsPgpM8MmcJF",
  "key39": "4wKLBPxbiDBpqTqVNvJUuemRtN7pgdJjUZy4Kk5vkYDj4jL8oQyAWeQezf7xEgWmTy8VJ9ZUFtUpeGvrXqgVCFdc",
  "key40": "2wZgKDCeQQMwjin3vSUjD4X4uewzr5Vn6C3f2nJQDDkHiVcvKbYdWmeFpynRw1A3SsrNGF6W3ghL27SNjT5x6PMy"
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
