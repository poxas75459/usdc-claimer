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
    "3CGn4Y3mvbcqX7SgG2PyoheA78VivvhCUbyum9Jmww9yW7q2WNzWjosU8EkhDssfjYeYY7XnxLoe62n44HfeachU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CB2DxGjicqndLVyvduQafWNtytiCCU5BWbkGGfbva45y2UPBXRdhXuV1EgJUkVhDyjxWRVz1rued6mC6u4g2uJy",
  "key1": "5DLW8zccjrgLwMLxFcnuWv8iztiCVAKMy4qGXQkpwANXwFjKkPtjUcjXFYMVxJmSWVDKsUoug2tkWiGY12n6vzzt",
  "key2": "5ttKTQ8XbczrALQEtXdaEQn6aPQc2xcbAoj166N7jGwNST1daVWCpBbg9HUPh8AUpJJRH7qjrivRbQfw295RJpQo",
  "key3": "2q2kCbvWSmprSebqifqgFf9h1HQ7woJ1zQKqRXdvTbPwLRKetw2s6X3LmoH2aVbKbF3373qNar2AfH5UqLcHqqnz",
  "key4": "2953gGdtWSPPtuGqaEmwTUx5jYQHhBafb6tEkAAyUsAi29kibpSiWpYfwLDgRFJC4CdiYn9n13Jv6gdaMUAaCNe4",
  "key5": "2SRmLqvQHCZhr4jMvync9aaVGLTq7vgRKxsE4iGN6TKbpTiQVaXs8zZPhfPGTGvCzUurfCaPrYsuQV2KArKk9uv",
  "key6": "3mFgLgzDWBUacTLYVmCZjfev13xT1hLAbso3XFZepmyqDeto7Gpx2CCVHJVG3vxuWkxq7Hx1YPrwKXfEHmxcMjk",
  "key7": "2tTmz9k371xmD2pMGF3BCoYYnvUMCfys7xh9LWYgfHiB4ZXK993JUma8DSsZzkksiKMnQ49ZixmKmTE4tswLxNJK",
  "key8": "59Dv1GBKsq2CUUMuEbNxAj1x8PPztLGqvCzCvbZ4rbk1PxqohNSiM923tUPqaEi9BQ5fmUquSqZR6dwSz9jbC8oz",
  "key9": "4LF3rJfqwBFwWyXBoHpqDKzaVAF9hPnq4AQrKd3KLCiJXc1MTfiJpJ1EGPLcdTK7676XyGmXrsBoW7Pj3WUsdRo8",
  "key10": "5yf6XAT3XVBviaeJb1k5txeBJiR1yuxREwg2MoiX65JLQrLrKXMXL1ffspMBZT2YEQEzXuQB8JgezUcZLD2zvvhH",
  "key11": "EuBaWo6BUrwSk5dRZaHAQuANBz3q5T3crepPUA6vnKd4YBZASLXedV4ELaGdSgvkiEWV1mnj1orxGjBsrgXjeTZ",
  "key12": "2fMHd7BaFpKp3BcbHP4QJeej95Rz325s2RjZRRWghXDEMEboTgp8eix9zsWJKJyWexHsuSudz5nVmXQSqBSBKoLJ",
  "key13": "3c7Qf5zHiGehfFrRAf8fBi2VrEtWqsHsPsrahx2h6Do9E7yTsbhQ4vWuhVSn87DYbrE77wtdSFuBHYPcsdFCcBrz",
  "key14": "oY1opwaNPVAoBMkk1THYHWZjP3EEWgHn716fjZKj2B5f9RRwCzddW8dnQ4D6oEt6ie3qeF11Awo5KQ5rwhhki5a",
  "key15": "4pe6YKEsAEBNdS2dAHj31fth6oT4ZUfgGeg1xD72D7Utd1qiT8PQi32DDs7XHPy1k3itWqfovqmAtnMYXgH6q5PF",
  "key16": "4cAMfMtUkVjXT5W8x7JwNJEfZcNGSF21Mk6e82baqDZHChE9So2UBQ6LEygioneJKpS4ZyhBbqPpLBH3Zen1P8uZ",
  "key17": "RB2k4oAmMLiSDFumPMjAvZ8CJYAbDsn5ajo9FwNQdzoqGZpb2aFnWmoBdPtPk2vdAJfCMLH5sYyMa8mtrLYjSxX",
  "key18": "5sPyjpC5PX1kztkUhyDp5c4rapkFzhxjc8Ukn1hnRPoPNhnfjDXTzhLorutd9vpZoeFNYvMRJHVtgjAp9gVEwqRr",
  "key19": "4jgNW4jLjx7Y3842R8ewqmDZwqZFqR2ZyVLvwfPo2tfKaQ7koyZN2aDppRLpqEmNvR4vktUoLHsAzACtAxb9X85n",
  "key20": "4K6fa2VpmaZvCEmb2qB8eM8xqjGHakSmegiwtd9siYcdeNH5V1YRzvMvGv39kRrNoXvFLZUeNq8fafFvwJYPWT4b",
  "key21": "bACDyvvTKrUTUTu9ZUNG2MM32c4pvs3tiZtENDjqUphzK3YPDQF2yQC6QCkxKm1BiLG8QVFMvAQtgW4yiAidBLk",
  "key22": "4oPT6RwFLSm74CFzHtb4V8oKQtKRygEkhA5D8A4SndMA2vBCtSWxeM8EEixAvXK9SsNoyHb1NkzacAaVmzNSpPA2",
  "key23": "7jxZimLVoShAAxHbRTWg6Tfqx6djbDYWLprXZ7bKfJr1Bw5ee476bfRL1SqzAm7uu6v73TrXaS95wBWKiQ7y2Ju",
  "key24": "5z93wcGZkvcHsFjfPiLn4GiEUkJMGf52RzTQDDnh1tPhw87gf8uAapGGsjvmSBxwiMr3q63qWZMDAcuCsZx3ExHT",
  "key25": "39L5Tsz6MUdqUJ6hP5M3yjShCShshUCo5a4WSfpZ6oJnFDPVRSkUBedX2ZUNL6tTKaJYBRGM7ZemccREfQDBWxbe",
  "key26": "StopWfagDKG7MKTLsD7QDznzGsRqLx8eXW496oL3YFhn1dykCYf7S7AYQp28jvynw7EjekqEZKwVnhx2xikFZpU",
  "key27": "1AoBkncY5APNgS4hUUmj3Qum3WJHQCrHVDMJ1NxV9NNQD8vc6rbxkLjCwtenXLXwzFea7QukW7SCKnW3h4ydv49",
  "key28": "3JvR9GgEMCKFnT7EZS7S2jyxVqhbe4S8meeT4VZ35L8dVFs1Z2QLbFUsLbKjmToND8mTvnigC3ihzCAcDajt8M35",
  "key29": "53ispLf4gUrC3j1RFxzf17Z8vbqpAnTqbvRmfEJFLFWSKyaXgFwHcgjeshkU1ZCoC4DLe23MXzEXSeApJzLdFbEp",
  "key30": "5Z5a6ko5gZFBJcg4xQFLxicZBqUepBuew2XXw96tZ998KxvKUJiESRktGUS6NNrHXrZ2TuGzwDMscbiQhJa1pB95",
  "key31": "5EhxJFfCLZxgZy9C2y8SWrmd94v42CSB628DAATsZrYSGBgbYNCJECeTxshYLMg3YS6KjpU2nuAFYNAR1Tf3L6yu",
  "key32": "49KgnrbqZRegbVgyabFk7RgSQyVpvyA3v9s2YwopJh8peEXm9CbSZGMSaTsXbGxUfynywmd4o9CucNnaPWBe6hES",
  "key33": "xH7on9WF1Zzx827q7uhfcDZkEWyhZrHzvvs9CXCLFbkWnixBJmM3xJcPKbfuqJumjChsAjrnDdapoZiLhd9JxCu"
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
