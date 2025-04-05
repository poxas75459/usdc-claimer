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
    "5J9szgqAkSXEKyJPcBGRP4CZj2gtbF5ASveFm46FHSKpZXHzgLf9j4KojzqQfLtug4BUoVbdGXbXLCr9t9eY5yzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMsSQb1V9c4vvVv9qdMRQkP3rQaVAo2b3UdAExLPHw3JAGHn9euSTNkL6nSNHZTTCAioFBjJvH6UJPYMD3yYBVE",
  "key1": "pPxEq2LKJcKU2uDd1eTtRLGRMc5fQD7ufFXEbiTSE1oph7Te7gh4n3QgJrzHpsC15QbcqTKkGSKJarBfHvaWSn1",
  "key2": "4Qnq95xms68hUBANo351WsJkmn67BTo5r1DNuf5tsw9iho9vhM9GVSLLqoXdXFPvPqUf1Sj2ZoGfBjAWPDz6inii",
  "key3": "3cq4xJzyiuCVjGutzHxNZ33xoceJnWwUMuPCYJd37tC7iQpkYkRgeeqxExaQrqhPg5f3nn58K6oMruW3Fshmgf7M",
  "key4": "3BQ7GKCjzSw9VGg1PxQHjku7Y6g1CvVKFX4Yfr4UTuFjQzXW18pzvZNmbnS2HhbqA1y7xSqefgnrnps4tVba3s4j",
  "key5": "8943CHCYKc66tGrTxUDvN6UHsUJQcKUeJsRiwxoG7ij9im3iYb7JkdZoeuMhRHamEWYBhDFWXiaXdWb6RxNUHny",
  "key6": "5e4rD44BQSZNGvnB8kjnKiZgNm4nNpZE6QtRhC6wvponVJydoFn58sW9f5asLrRhLLJwVXswB7BXUtXi4N7w4wqT",
  "key7": "5yQo9bNERybFMXtmNStLkVQuCeQ5DNn7NKuuAWx78kB2sHeHkufM2fhc45L4ZxzZRBCezxpaNbHtGyTrLhS5a7EK",
  "key8": "6ER3F6uGGCswWHiue6uY6moP1hyRHtSWrsSHVzmkKXNoTfmNiUgQ31gn7SWELqZ4iF1tix3DemvrUwpDuj6jnzE",
  "key9": "g9q9KUSP3MLeowqZsrz4o9i5cVduSKbFvKAQyi9zfrmigWLURKkyDAk1AhCgwukdXa9kuCovQGn8W1cXFAbV3En",
  "key10": "HnXtdt16EbCan5d5QiPxByes6GzWxEzdnVJsECJyGBLBE2enoqrkctXdBsmPqqtopDbpFkteGa5ZmotV9i6k6GR",
  "key11": "4nXgpCZQwpr8espcs2TXMT21VThBFABaYqL9295r5QMVGmXh5ojDCVYo2ueNKxTwoxkG79Y1Y5vnef8XSjmKXCow",
  "key12": "3rJx6A2hyhfJMZ1mry1crXyC237QFVkfaDaNCXgf5yLpdJhrdPX5vz1gKHGjvNVHNNrvhXZJBorw4LFHMqb49TbU",
  "key13": "3LoT771KKSR6k5rRxJQroAFg84gdpHHto3zAY41R3CWd9FMhrvH39Y4mZiyCiBrCfWfKabBqVEvJeEvxhYSYcUqB",
  "key14": "2oZqdWxHACU3UhXi2M4N7KkrhNeV2cba8riSyzjAwRKXgPj3MbFzjH61AFsRay3xdH5jRsxhQczW6gJyTMkPYP1X",
  "key15": "2mV9D5x15wpimfuypU1y3WP1CBvz1Pa3tRhE9gVeh559nkER3jqiYj38NWucWrmAx47qpYHkSH3EgkeqbXybNuC1",
  "key16": "38KTjK5rzJYtDyoQ46dvWpBpuqjS2gGVpDFNGarr1Be1vbtNd7cs4yrXCeGHH2ajXtefH26N6mUmqxsSYWTk2ybD",
  "key17": "3RfzJsmLy3ioadERzgHEguPuSnajWw1zaV68N3cMSysgcHrUA38C9Vno2VKrBGcDzpJH29i3rUiv5BDrWRNtXnb9",
  "key18": "4VA1Pz3Kqkb4zfghqmFPRqofCx9BjGXjDU4D9jsMjot5gkCdmzdwBhccLRSScVWY7qsofugxXGV1xK8rQGBgVrY9",
  "key19": "mfjBuptDwcqRFt6Ed7GT6eoxjDEY4NpB7VAV496zeuB6uyhkCorPa3EPQn2v5QkSeC63eba23no5pvTLbvHFvmQ",
  "key20": "3LzqoDcKVu4wP6Bn2k6RJ9juCiL2i2ihu3dLUyQvqmcn3W5WstKMT3FCUt49kkDyCfGRgFiECfMDphrPe9t8WhY",
  "key21": "4HvLkAco5QJAa7i2T5fX2t2tYVpqfijaLc3n1JR8UoRdjLBtKTKvKc2ugLqazWSr3HQ94xUHVMvFwQdiDJtBJa8r",
  "key22": "3NNJ5aPPgp23zBmjboWwXrr6XuRnFz8sCQxBt6HsXbb3et1Eo5dLmPPaLvhrN8fPmQPk3NBE591Jhny9EKVxzCEM",
  "key23": "3fGV4Y3ETLSvu8YE4QgxVwYKCvrxN29kWgShhV8Z71sqtttcq6WtxL489HwMcmuu7MDUnx6Ym3epLuPRPK9fdgFJ",
  "key24": "4zPvsLmka6hNFyh6b9dmn5ALaaicWngJuUjiMph45jtjfPDhZsZ2wnAeUSx7ipYubjCtFzGUgfLDxRXJHpGjbtUt",
  "key25": "3HxAGw919HySbVMMT7GzxMcRTcbKN9Hm4mGDiiZcHCHvoucBcVGQ9ndy1eb878vkAeWieEm7A6HhJA29LKywrNyF",
  "key26": "5kxowc1bE9mHJpqNThQc7aTwhzfcLMP12GphhneqMJ3KQFuRfiiouFqFKc6iXcEcryXc9ykzPCqyLDvzMVqRsKXg",
  "key27": "2VjcznBTfjGTwav58W84hdUw4N78r21ckDSu3pDWt7rgeJjNJMkfYSgXiduNYJwRdTCX4GVqLrgxtrRbtfsi8hz4",
  "key28": "5sxGog4bKY5kRCbXuFeri1yPZfDcweGdNPcuS7iBEYTMckApiSi6cR6G36h2WfwWTbubSHrn6y9ouZwn8bxBerHc",
  "key29": "GvJ1kcpiChygN6HdJyWX3tGLEXtRvrcrgxa4165Anaf3hN3p9vBRCXoxi2vWTGkTyPALhi8Y2m5UUBhw1nWX4xr",
  "key30": "4Rvd4o26yKBzh1BnSno28aNAcBoicKLYxJw8S7D4B7BPnZfGaLKkxKuAHzhQ4NxHL8yU5mUJedVEURqEuSFPCrvq",
  "key31": "4LbZVum9V1oCBLtdJBSU4FX9or4r2Zw2Fu6NeZhupRsyQms2YVppan1w2VcffsmYDan1unkvdTzGm4w8oqas6LGe",
  "key32": "3soA66s6wWtTGsT3e4FPaEdRv6sL4gJ1YLYukf3GHDQdF5FykxYnCo1Bv6kX5jy5kfWh8urEGAUPmYKQkm5gx1Hk",
  "key33": "4yNxhmAPaFPzL49BqrFMpFBmGwgtMB6cwAKucwLGarkjzu8D5xhgtrH7EJbhWJwvoKGoxRd3HARj7qUTc7XJyXn1",
  "key34": "38L9SidycaWTVzjkPHNpMFm5XZHYYCH4W55qdft4bhWYSeAXDptqi4zWiYaCBKZNDpxnEGSnALxH73MbTB5ttwkW",
  "key35": "4QAayLcUt86GzSpjKdZ2AEcUFpGY5BHEZNCfkBLDjJLJHVg1cD9eUSKNKvJgSgYSMHvXDiYSeiR7GZ46TF2AEkC4",
  "key36": "3Vy1jV2FgxtJoCcX4txBdvQXvd4HfH5c656pRpvSNB38kUgrwt9P8Fa5kcukaZibnafKRVQod9Lenefg8w3gM57D",
  "key37": "4txenJVyxQbcsjqBB5tc46RzbVeD5VGE79gnMsYW86zc2EhN8L6Xp6r8MEPr4Sp6tcv9e1nFmzKBdVrxEM4SxoXL",
  "key38": "3reUDGz9ojkSktoXJGKmyZuMXXLYmSjSWZbtV4zxxCKeBZ4hYfkNiMb3Fmh8nuZN8CAVYgbEabdnFepkvdD4RCF8"
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
