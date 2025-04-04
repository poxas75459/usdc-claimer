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
    "38yMyzNTnDNLu9ihhXbZZFvcFfVgzUtdRMiku3iaqwmH3bucrwmDSgCvB7udU7nR2dmu321nsPQs1k4wGwKYyTz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jx1ZXUuF5U8FF2C29eP4VxfULeYHPn5XTAu1agvQzwVCPyxGxW1cE4VaB5EjEKTfcQF7macFseoejKpUMzwixGf",
  "key1": "5VAVZN7WTkmNX1yTiUHSUbLP5r14PQ8KxSVKpYnkE9cYXkHY3fwxGBj8EzsjMR5KYBe3W5CtRVdU1XvZUx2da57A",
  "key2": "66q3AvLPZbsstSB5JsUS52FshTTDGNoNNKPjnY9qSbB1j8VFrR14obVNF59LXvLdEHWDAbLWJHpBmmM59DJBk3ov",
  "key3": "2cE2b3dqDNnCKzAH7fyo1ux7rwxeoUTw8eVmKZynNCwG9j2Rq2tyaG2Lffx9o99WP1ozhksvowX2h8a4zMXLhNVw",
  "key4": "121Q5ADsxSJvf9VPFwrxwUUTs7TYmJF7xjEHhPUX6p7b7qSaPARN8W4WvFkuujCUEeU1qDfNgp6DZXa7Bz19csr",
  "key5": "2FMhMkFbnEXGfF4SDcVbiuF4ZrmgXuy3KT8HM7gibe6X5XHQ3FafHtcBgEta4VSn7JSt4HuKkdkrsoU3PY2WyfyY",
  "key6": "4YUs9P8DZCzzUZZ9joGG2Cg4FVqoLekPHnSTr6PrLuyRa8A8aKvNu4qwzkemjbXPNTZGwssGsCXNrNv3vDYs5CBL",
  "key7": "3TA1oz7UnVgSWL3NWfULjg6nWe9rF6yiqBZFfZknbji4yCE1jce7SD3kF1C9o3LQsgib5JEfuAN5QHr8btr5rRA9",
  "key8": "4L6yCJ67mtX4zRMGY43EXbYXoymQf7byeQvgCQtyyVMQoARyZUDrxEGaptWKMTV1e315zNHuFKkLHCaDF7fAgXZY",
  "key9": "3ASGzEUvJyXgHW5t6Gdf1ybrxvLgbGAc8zGHhez1Gkx1jTBaimu3eFu8M3nU7rCqCU6g4dhXvvk4s5VEroKhaiGi",
  "key10": "zV2XyL7AYfa4jQRCSdq57sCpyNms3sf91GkNmmptdP2oaCUYVJMEC88Uj8y7xXAiC9BHb2tPkpWCsYgNpJ3zZAR",
  "key11": "sCfEBKmtu3nfcgbMJPAHgd3EM9qojQx6RWLhLzYBPN6sWqroriBvTgdxE7yVmJ3AS5JuRXqyCnrtape2b2rxQoP",
  "key12": "2KHRBkJNn13vmnT4SPPoJS81EuUyZw5fXZsUW1UzextAYDomLPxjUFJFrXz4L7FZQ6o7BMB5KVdHXbQJ5pfTpheY",
  "key13": "33GQgf7BgHswH6T94Nft9zxVzLyBSK1rHtzbBqqvNPpS6tGceMTGM5cvJpnAebeWEP3sprXem7Bco8NHNDpsczzr",
  "key14": "26i9pGauptyJsAN5BqVDCMPkSoXpjqhgqGkSgkLJ9xBVCUg8hUJgqKiLvbbGiZKCFSyZdwHMb9B41zQCMoaXDtcM",
  "key15": "51Z9QqHX7ivZ8kQSDjEeHtWiGd52b6qXAc9hFdR6kn8Arf5rMW7KfyU1smQRn1sk4QtAT9tMgDFEpV5Xg6MtMn4J",
  "key16": "hzTeSQnpZFxbyV7beoPuDEXf1emNNSRyYSZPoQNcbiyu3e6X5cEdkfXqJtgqTfEjgLeXRobu2bGNCdFt4og2VEy",
  "key17": "5P5hR1NUgHXA9bCuEVnGAN6qYhchAx9Dq4kaTqJvUCGiJFRGApuKBdvqACzk7Uc9QwQFNrZPxaemKwT6S9cSRJoU",
  "key18": "57ymy522SJX93ovuuyFLDv2eA6cuZHRTCmC6TSHvmhehhqZjPQF8JQNyPJB69zRtRgccWjh2j1ikp4HiF6C9H8uz",
  "key19": "2TQcLXcS6Sa2AA2AQpHvLgPWJaKEsp8swsdAj6NWym6cj2eu7GhopH2s5Uvytd4DT28kdcKQEZXcBKYFFbwS3FSU",
  "key20": "g4vuWpcwEvRgtT7AbLjoFyQi2ggkgQj4R2CBhvb6tfANxShMPw5kkNVxZzPPVpJYGeVRcD3MdkqWSRS2XLpTpfK",
  "key21": "VNHQAw1sDmKGqGfNxa8VxsfpJHv6iREqFVn2aCeTThPtQuHHQdQs1zNcc5wrnhsYY1C8ELVZGzg9pxZ4ZbQv7xi",
  "key22": "5b3TVicyJdGXEegLjbTXouyGyZSKArLQZCJMenrN2YvBAP5Xq2NpxYQHRX7y4wvNTKhEZDZGGUVMSnnrf2cNPP65",
  "key23": "5ugqj3oiCGE5yxZMVCcC4PaT5gYPBCDRPPzvUWYWUb6be2DKCA7BVeRaGQzXPnNjWRq1nx54KSfFG34vSPcv9Qw4",
  "key24": "29yZtMUMt2fRDgBnm5v8UvnyrpEg96YqgeuoZiKo79hEYfFwR9b9QiwdjXVmgXWizyCcBPhSiP8tcBwEUmiHszwH",
  "key25": "ELLNAWWZTvM5E9d9LWTQWRB96MBaSTZiYX42br9R8dcmJyTxkb6KDYt6xF9yoieTbYjL2KaSgD81oj5QSVoLP6c",
  "key26": "zaQUCVzNmse6DtpYEhMxkL8npV8ZJxr9B97cAARCYA94zV8xX8EdFzooDBTr6t3yJuS3m7VWb94WiFyuFybzBRh",
  "key27": "4EdLWKbSN3VM3HvL7oMSw3cEbPKT48TVvJDiPi1PgaBZqrij8B5mimhB1o9RGAU1dY6J7ezA64YGhQtYoJupjwpE",
  "key28": "5WifX28EAmB5Cen7gULi2MHEi7x2uAtKZJv3bnsemUqzYAh1pHqkSz9EwabeCXHRfsf6ebv1dHVJEsMFkxDFHJdp",
  "key29": "57Uu66k2xrch7mqEE6BrYP1eNfusKw8op29YQU9AdULBGHsTEc7kcCJ5GkfcSgatVinVx9WLnAeJ1TQoV594E4on",
  "key30": "3EgpYKPiu8FSc7yHTwW32fTfE3A4y4CT8VMioWqQyYWVv8GnmZqmcP72LyzudkhPGBGktaY558DTfaYhMFFtPLi6",
  "key31": "saso2XCVtiknNoLWRE62bx8fPL4yGerVAx1kHD2osz25phTSXVf67JhKd91LA6gaUHy5o9oJoKcFMVBwvV946Ji",
  "key32": "2FdmNd7RD8NoMwvG11jzZJ9skgopX9USFNhDZFN384gHBFDvkgfxyftKqFydBGuskQ6bvVygNKjRsdN2FTMXwJe8",
  "key33": "2agw4yJC3WT3NH92i233hYLxMVgHUMmiRQe2g1zUJ8n6T9hHE3ugjeFtUYE1di1sfMaopzBvsie3LWE45fSoJvB9",
  "key34": "3VvAirg8h65t2AeC4fk8qcM4pQ549G54rwkyppxddPM64f2unQ1abQb9AaMFFPSQC7dhx4bP2LepD3LGJCRFLTHt",
  "key35": "3MQZaoqUgn2QbFy5Znmjmvw45rNgkc1uywAJxJMcuyMa8kAL9GSb1ofGU9u3XhoxK232TF9uGvZDd4QHG2iKRhKs",
  "key36": "3Gz5NBbW52zHxdxwEN5deP1d1UohzL2mcARUTrb34vjSj3cma1yC9WJ2ykKkKBQk1GUNFdS2uqAbs7jtnLu2rnA6",
  "key37": "5n3Lp6CJw4B4ppTJRbo162zSwKWc7CgaDkS76kiAXKQBE7vAgHGUv64BokZPS6QKA1LmbibkgyDvwmUTyUFXDWZg",
  "key38": "XaEdKnWRePpe5yKo9eWkjDy417KhiD72Lr5qZxkJYTL6S1AuckwvjBL1yEYm1FHK8tGsHeU3eFvVtX3fRGrY6Ci",
  "key39": "5zC6DczF6f8me1yBa5YFkiffCFD8izjsnjBgUuqaSSvAF1d11RcPu4aDGPsVpwK9zmGVKmfiaNZxSMFzF35fYZEa",
  "key40": "2mVLsc5a5cffT4zZbw6ymKtwFi3a3bqe91H7xEPSAm3yobonZqrsRwQa1My38Dza8UXicfo2LZiNn6YApZwhRyRa",
  "key41": "5QPU4h4rFNmzWj2t9sgQ2AebFiUYFAFMHaM8LKTwUUNkap9jTF87L1ZMfrQ5YdfARd5DyCnstRLPyuvY5vQiis3J",
  "key42": "1qeJZidxnXZFcXyYpqkxobuBkrzu3g9DnwEDzvhsHVwAtVyVCqqBAyi2D25ptvsqBzuQFuMTgc2sNE6Vigr5G9m",
  "key43": "3zL44h7ikYfXfAmQUXPQsdy92ekvje3Jo2W49pkK7Ar3xZn4wXRwWheVYNzbLQvNV5DARcb6xMNNm2F7DanUHM6L",
  "key44": "5LHi9MkehPy3gCqToiFMirPqAgnZXiBguEhT2WPuabCa9HjS9L53zgsLxuD3v5KDmCQ9k7ikFayPbXPESdt3EWVy",
  "key45": "3t2cRZhb4kfzSsDVW6yZH7cZjFbXh2JH3XoWWbJhPY6twvZPuauZAGYpWEChUzvvWNTSEYW2vctEYXBdodVD1ZxP",
  "key46": "3ShLJWmiaBPVi5ZBW11zgn8tXtiJUxiNt1FxXFaB6S3WTAhLocGz3XWJSp5G5E7dx2s1vxrqy22KXgjvW9g9Hcoo"
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
