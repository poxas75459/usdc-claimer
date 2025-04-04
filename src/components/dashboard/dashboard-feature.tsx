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
    "4g7PuMZLqdY8m8vW5DMhfusq328EnrvGjhAJzHXJySfY6Xr4UdmqAaXwXoognSWHYTEgZbJuy8wRMYnCY5buo8qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iMFT7WwdgsNVdwcfRdQCVBphjv7QExRbkRFihmd97bAf77GWeQjNuaNAVm3VGgCf1MiedSrXRJQX9gVzrQ1gqr",
  "key1": "RPs4PPF8FdjWiScWAyE2X7kksjK9AY7e4VCCfmy1tcVSPsZat1Z86EGqgmLhubtXH7bz1bCg8wapRuTgBvqFpxs",
  "key2": "rXJQan3kJQ5JD5ihgofJxBbyxq8GBV3i8yQtD2V2eEHTGk1SfHXasPNdKnzE2xW7wWwaTo3MX6aShctsTvH31Dg",
  "key3": "58fQHQadQ19EPg8CMy4bUsnCDqQxMauREFJKa15DY6pgau2EgyMwqQ182ABGM9wnUb18sbZ5eL9odMcaD1LyLdMt",
  "key4": "4PSQbVerBzQwCoW9ysUzwGo329mzb65aoWwaV5b7LTtYPmP6mnV3RZtQ3FdUFNN8n89huri84yDXuKkuwkUC9i2N",
  "key5": "4fziC9K9mquydNmeivYWPqb61Bzg7uDVdEJb1xdKvhQvJV3EvYpAYjdVtDy9GKw2V1iiMRqKS8iPe3TruGkf6FXF",
  "key6": "5quLUzXGmmiTvboHA6pki1Q3fVRvS2kgA2KcVt3iMtSWffeXo3joDoxLctaZ8gybsDToTfsxW4xEDk8fuArMWXGW",
  "key7": "2C4ucJvXhUkVmFrCpkbBoehxErSpRNbTsuV3QjtAJQZNrFGs5XgG8NdnKW6y1LHREje5FzCvYCsTWoLUj1PWVhck",
  "key8": "6FrM34ZQkYWkmt2XjzSkxwMGMsWTztgis6YydYU4zkWZKNy5mp17VbCQ4xofRAz7EFqcTpYw6qGDm1aT8HJjwsw",
  "key9": "2AnArwKEh4rgSW5sppfkcoFXJz7EpL8VY5AMU2YpLuRCiHzQErfqkEwvtBf6XfyD1TxyRw6nSgqfunr8Hk2wRgLV",
  "key10": "3w5dUJXDrfPCh617ipTP2oDMQ71EdB14j3BbQq2WfNLFNaMWAXJMALaq9ywvTjLaMWD4nmm9JxST4aCUmpkGSPHH",
  "key11": "66e2LkQPg3sZC1nNGFv9i1rQWQ6MjjGAVF7pCNfrKW6RN9cMFNNiHLnxbi596VvduFEjdRMwtMwn3FKj4wpdUDan",
  "key12": "vNE76MJWn71SY9EQXPuEPkFVWasxNVJVbeXMrhU5CK7kTNgt9d4PWmTaY3c93nJaNMoByYRcXAbKGzRVYKAYqjf",
  "key13": "Sq7yNpRUqqjwRrp2rQrarbNh4BknuWm1tA8FC9QhvcWJCCncK4qXozinftNcztnmRvsfmmufVMs9fEYq2SfXaCs",
  "key14": "onk734AyHimvcFXTkoY6KFgJJ1AhBmFnXhu2Wfys1eiyvFBrwsy1s3q8Z37wkYnaVVxT7F7WAQVLRd1DCoTidFo",
  "key15": "5W9dAKgTNuRfPcGnWn8CrYCuAfED2pts4G3qmUPWfDawJhT2hTpnaWYBhh4eauf3DpXU8gm7NTr3oJCS5YdyAjJe",
  "key16": "3zwPKbRTQf4aHQgx1Wg2qRdrAn8rHei2bKQq1cA9hfj1L4QCeTVgWnTSnoysH65A5Bpsj5Ds1ce8RZ3wkfR4YRFa",
  "key17": "5maAFLmEkWZWfNMz98Wq9uWTTMCWEcwULh6LLktuVzHR3Gi21wtuo7zx1Et8ApziY4FNqWpcStKyHPx95aziAuvF",
  "key18": "46P9BfPvPfbrxDM9XBH9V3jBzdU5jq2VwEXfS5kg1Yx3rSyKPhhd48zeZH8BND27GhcqzVXnHPJ44ncZWLMe9oXe",
  "key19": "5xsU1xWwBmRdSSvbuVTxPWDiQmfVBbLQbY5FaLK1TodFPpNd948kAVzpRSCfkGCwgCCKj3qHRrcogJVGaZkNmN3C",
  "key20": "4P5ATRiQS1beSJzcdRooHkhvcuSNvzMQW9EvTnDihq7T2CNiqAHXaSq2vYQ5iYtWZhAVAZXyXmWbVostrCHLudgB",
  "key21": "5VuJ6Jfbcp3swW3EgmNwbWEi6DTSbjGp4AcHrrGKpjKx1P32BDv49HHu4G2wcTTa5bXp8oc2vpRKH9YzDnRVTwCF",
  "key22": "4cZvBszvmR2TXwyQdFGGHhB6WK3GpRnR171fYwxwVxiYoU6F2GaGbYSyy82gnjcXdaArcBzDJaaHpCC16HQFsdo",
  "key23": "Y6UpLx5CjqXfikz14Az8n3W2kgtaXHyYLr1b5uQ1GD9ZwuiSjw9Zepk54nRCB3UBipMGTt1i4iwxWRCMz8ip4KE",
  "key24": "RTFqu66N9tjEoAsWniT6fnXVgEaF5HWUdL9iWs5DT14LhYwUmQsv3b3VKPM4HDkDxoighUMukzS1zoyGyfG1nwt",
  "key25": "5om7iLgAkL4Bb9J7qnVt3jyHbd8GDT2wdmRaHgcd99M6Bi6BDAZC88qt1pYbp5sJZnrjRPb9KHWDiJr8fs3vFzTa",
  "key26": "2KThptLFhhsaJgfeAegBCSY2Pe368ebNQCNhUAS7hBvbBdUsWRhARDkRCodbt52Gx6YV8Dt5Wr26rQeDZz7gvJGE",
  "key27": "6yBdARwGkKNCr1aFM9Cj4cdizGSLxevgc5XHU26M1CVLqQCu7KnqJohrdRoJR1J4ZedGj8Y55BfZY8BZ7G2ij5Y",
  "key28": "36w8Y8guHHaqBMXzRLjbsKgdyJqnoUQ2xNr6DxVnG22zWi8fZ2yRKhMyXov2sVYAkXLzeTs9f8htVqosDC4pYogf"
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
