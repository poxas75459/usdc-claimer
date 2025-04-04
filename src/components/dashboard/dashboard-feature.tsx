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
    "4E53unNg9vxbKRJ3E1XHLhm4S258AKcGCBToNiVDf7w3KmB6dWLhqW6oJcmSgec73VhUwwhtKJCbQrZtfxvRabRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7b4FWGpNy5CSYzZ1qPTsVhaYSokFbdga3hnMZe7DgquNa23vW478KC5wUwi2mUn9V2QN8jWxZz6SxaXGPnzidk",
  "key1": "5hqtHaP8LAhhkVERZodoS1T9eYSMJnN2DbhB8GQ1w1wUJL1mySCFVn677a3iWsmbN3ZLts7NTe8NuCLBssTYXaAe",
  "key2": "4RdGNdpYWdBQmhtgBR3ExKHGy3xkx36oerKnX8JQHnwxtueG7wbyNiWxuShko8irdJoikmcqv9GjmF5Kv3gHGTYv",
  "key3": "HmrTDxcoWvZvTPbDVF5vdHm2tJasTXrJK57FR1d3HyMADBZJH4SHPGy235Mghhfg8NEVhXUoZdtbCCGhXiPNbzz",
  "key4": "2FJQ1EUaNg5o7gUB2SofHGi4trXRvYMzdsDS34qHG8fnzUgRv4JEDrQq7fCqDk3gNvxiHGRzSFKSdK2ZYkdQmAuQ",
  "key5": "5SxTAS5ah529U5CQsAp4X1JNVi1gWYx62zcY5qZVXmTwzPGF7BJU2gu3YRjR746XWALZk4BRbrjB6GcDndmGTGZb",
  "key6": "4FAAFxJaS2mawHWBfwVoGnNENH2J85RS9S7G7nhyEq9zP6MRKRKnq4MqGTUdHtC42PsmYo9Uf7aFDyo5aCZph9YR",
  "key7": "5t7Cv1rbn5xWneFw2jBbwpbujEFx2uBBQEahqPdkNDzgLDXDJWqhF5kwLD1tNHzfegyutAfht4jPN9m6dXf3L4ro",
  "key8": "3Dkxuv7gk5eheyZyJvYmkfrisXdUFKaX9rUHUyJLkHRNt5Ss5nKPsqpQFyTycMyhNXyzPUnd7AjqHBZQymU7CQTh",
  "key9": "2W8Pn35e7X7xLtB33ifNWacPw1DntRBKWGvkjPotnm4yDUbpGZTxHhhJPtz8xhD3n55zQiftvsvEMurT7B4jZNBz",
  "key10": "2iN7Bpj1rv8ysX24o9KquwWdgbJvhzX1kb2BKS38N1qdQppv8TTbouibJUe48XhrRsTNmhriJrqt979G4q6ftQGz",
  "key11": "3bFr6aarFvu1ox1nDyz3KprTUQKX2LxMxuo85XrLau8UmGLkjcShf1jL7gpHSbtACqZ6aMAdZ399gRXPXSjxkACT",
  "key12": "5bqT1sQ1i6yMased62TAHZuVXGosiZkbz8S63vSeEE6ugoWeS4mBMJpGFcsnfFMjsXiigc6G4Hpc5FSfYjUoVawL",
  "key13": "459Y9BJXXpDPxpZqd2jqBN554Auk7Pt4CbiCvfPB86kpAs8VH4RN3seS5zB4gDixEcfSZGqNCP28AmfSdoiBkgAX",
  "key14": "5XtUACZNyRKc9UsesjpRnhD1b2RgQeZG8pX5wFaqnhNVYhEE8scRH5QkEqxV27uZbbGi8JK5i2iX9e5q1i4PEMv5",
  "key15": "28P1hF8ow7kCUKRwGJR1GmuFWQ7LvdW4At1vDSVLXrhH3dZ3Pdt6FTP2At6cfRN84XmKhMcnUtY6TowFXE3M8JNE",
  "key16": "3681YacVxKKodaKbvSMhrQJhnQcVo8Lb7S3dwgAB76cLQbMrQjXyPqNHXsgJgVDB5PSPdR8i9MHUjt4a9R8fDuC2",
  "key17": "4XhpHMA7pna9MktyPFEKcRYxjoxKf8BXkXtcCdv6JtQsa6jhbWJqbtcPwvKAqJhs8tG3FjFiMtaP3A5TryF8q2fM",
  "key18": "2ZHRmMYGdKBreGBZy5fZBSPBdxKnLgo48iCJTXggKLmxDguwtBLe7qCMK9shtf53evN7ovQ7cUFFE5CkP3CJC2ya",
  "key19": "rM2Pv3i8192ePfkbU5FiufKiroDC3WMRNiJhAD2MRYWmLz4xtwXR4uUYC3s4VD7vQCAqaqfER81QZ7NXmxxXcjj",
  "key20": "3icy1aTDJFxYPZHXAmS2PSpeDqV2Ydw9MgqXq1WpxTZQGQesposNyqEgE9bBAvWTqYdmGmWSnwaNfsz1FPkoirRE",
  "key21": "66r9vUdYzVGYdQUw2cHbv7LagqpEXUezCxdZyw5hTrAUiLatcWRa2TMCLpTFPRu1Z37ZTTkfyHoR2qwBtgknyrrj",
  "key22": "uo5yWMPh9S9C5eZdhXwtiV6p4dMuVAsXDrWXPo5TLHMECvh6yjYjXVxMsk76xv4JUmobfPMf6aLVWhcpuvXhvoF",
  "key23": "4kYw95zxkfqhM5fbzhRkW1EGxXc8BJ6dC3oxVddyZfmdVHNnKYjABoHGmte3uAEssT9oH9RT3b5BaEqBmQTyk7Mr",
  "key24": "4yLjm7kd29eoEvFtMnatGjYw6pWPXQDKa4RpbGid1gAanyX2MEdDNZogyjazDTypXgX2reg1FkjZw47aiZhzRnjs",
  "key25": "2pC7FqtQbWpmknwm8EDuN2wJekYaULVHw989dJyZxNfNpVQPtSdsXhoQ9Wk7wib3Vfu4AnviECZsKTKaPAVjqU5S",
  "key26": "5bUFzWCvMZ59tnkkpoJh1GXGRdkST9hP4Qn77qiHr2xv9Qs3VRPCmgiFZM8zXvW6mxtztJBvGrWRpDUAwfb3ceXH",
  "key27": "2FVJsz7iFPpyvCZNTfbqhrynRcwagKViojRUpb4VvunrNnMQ2RJHUTs1Cg8Y4QiqppLNTgqaNoxw7jAYrwRZbY4a",
  "key28": "48YVM4QfQGTgycGTuEi9YsfhXFJTqMnFwxAk9F4y6j6Yz6u1MXn6EVrgXKiSUzWKqMhwei3EaeEeTuWBB6zk2NHf",
  "key29": "4naiwpbqqszeqRhVTNA5qG9rdhj2GFSLKsarDyQUhaLSw1V3EnCAKNMstb2wnj3kZvEBCKk3MLXTsJq3hA7QT55X",
  "key30": "7nfC2GzvnDvqfUjo1wW7fcgm5dTZT6SrohFR8eMpuRhrDWy5W1AeQtrFv7T4kuDY489btruTRibhmURLGjqG1W2",
  "key31": "5B3z325RYoM52G1dhngRcCKVVip2mvzXJfpTc7X6eXNW6RcTW44cGoBv18L8PoQiHHNwzyJei4pASEgDjR7Mc8mM",
  "key32": "3LMcsznmwkcx1bXsBB6QE8WdyKKjD82jYLSLsSdAc19NrFZHhjv5HmRzaLPfsQ6jX4YwKVxvidWxWJ5XuouDzXG8",
  "key33": "oN5htPs949EKpCVhXttcWuogYwjkFMkbkkeVawiy6EWS5o5tZbGtiShwnWFnvZagnnbmqBR12G18H3dgTQuUg7b",
  "key34": "4mooTgQTnP4MpSSYgDjChMqdJ3zEWUCxPiGXT8m3kgi3oUmhMd9UysjiTKon6N3zpJFwFM4T8jGD4z1FgZVak3wQ",
  "key35": "53YrmeCKtjubuAxG9yDFwMwRRmUxrMNDxdKCaqhHKKhwY1MURef8EHFaURzPV3BdKJj5HPNSt54x6xcKArxYW9yg",
  "key36": "4yEeQn5TBwi9wVwK5vpLtUrN2ewVtTrdbf63KeZaXmyUvSa2EY78BtWdEQsd7ZuewrJoLifS2LUWwNtntpYi9fFJ",
  "key37": "3AvRfLomfRDCFDRj1XoCK7t579rjopVWuEMoDDEnFoRQJQNSXYpT9xaV9QqiNwZK9NqwfErj8vwnpfrnrfMdx6X",
  "key38": "4QnNPsxADhVeGqYiQXuf1tRBvYzfXGVsFuGC2Lq5R6x1GWdEEd38h28ZQKMQZycp13RmVKfjBBuhfStZVURckCga",
  "key39": "dYVVpXVNioViMotN9YMfxJm3aTmmM9bpb3i7y4MgxLteUBXRFCreYi4ePhSAwtWqpSrBQPKp8D61R9txU59TDYB",
  "key40": "fzQa2dv2vqounB4Y7m5L35M4FcJkjSr1V1Y4d12SobHQKirAHfQJNsCboGjKQ51QRSCwDAKFhGevobb5xzBciLA",
  "key41": "43KsYbRNp28mGiMYC9JS5KXfGYbZdP7Sa8XuDPkeG4zXqRfbPhwemTMyFpWYuaPLvLkuhWj1Vv4pAFChD9xnqNRJ",
  "key42": "4WpaQdhiLCKoyW3SSM7BHac2RTqAVxXVvgJrYQKq9M9frGGWmMrAc95hLNt8wvbUZEkjNDHEvhK6rXZFDT9CzCgV",
  "key43": "55kC7nwKTdTahSD8mrCjkpxD2y3E5nBbRyiW39h1ugvkHMRkBQGgPoM8AzvzLS2rUeThbtkqsxceUdQ74WVuhKZU",
  "key44": "2diRSqm6EYgFqDDWE1SFp2K7TXbGq4myDoGNQyFmk5BJ2XCFwhzmzMbvxY1GsHSmjGtKKvyiY9epYKyMDGyqXSZX",
  "key45": "491jUo84iCVpssZEfD8JShmKyyUELNfGcYC5u4WRkX9PTufV3pCpSvwEFi27B6XfpyNqprL7sAoid5k5KWPq2LJ7",
  "key46": "3ZT2uc8La8VUQ4dv5cGjN3LqYZz5MZrbJAzY9gGgxDbgDwwNqASM57uWpbjkunuWZ3PYLFRPcARxRjZEjUC7R7QA",
  "key47": "QU2bGKuUvwZ9s9s3SPJ83WEKjGXdHvv4xVkGB1NADZdXb7mRbjEEwGMwYjs3AKc7KMXZafxUbUwaRNXsDh23zo7"
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
