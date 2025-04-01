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
    "4cAemZLWgZvFo2BZaGGsByaUE8T2ELj7JLw4mBVyFJAn1eaTP9jgWuwovFjakNjCZ7zYCo4MFg8PNkect2g5Lefx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBYKfBLEqjvU3fcvUmxTfcKfPdwmDrZ9tpxwUW2h9X21hTkz8pxzbJPs5Xm2xY4uW6XgYVwhZ6Z2Bu6UfGgft48",
  "key1": "2J73k7LskxM4Un5fyCeZA9vejexwaSN6Mi8EWrhFwVcUUhbxbjn8z9A9pTMDGTgDGnfBCQL9t5EkNKQewafjNZem",
  "key2": "5TH8pXqawwpNBVa3GupjyKbb15zSUH7Ey29kqTyNHeikn3w8MthjxNwLA5VPuSVYCZo2DwVM3HALUkomG4PrPXrU",
  "key3": "2MBUDqYUUaaVVSnf1rL4NEHhDh4AWbVw2KePfD2nQeuuf1ZooVVZt9Fb8VtHbj5aBMQAXnba2g5qZ1Gq1uRpforR",
  "key4": "4uvhnoMvuZhjNq6r6vtJEdBEtqu1ovbZyUHk5xxBWNLnLka1QhF3tprfXz2aisAVqVqtNzaCjgwRjsDso7bonrWn",
  "key5": "4dL4w6ZsCZ4iydy4dwQCeebXssQ7unyN9Zbdvj1W2tUcuFcSdgyY2XKZxC4FEXKyy8aAh1ArxuswL5UTzHdnhQw1",
  "key6": "4XBkXEq7CruQEzLwPFviNDxinakd8AFsyut7JRqn6E7FLJh3AFQEe46W1miJAaRfZo5r6Ejr78YD8H5vSSEYzmMh",
  "key7": "VD9b8rBPyKpy6AfcK5QjVoQVHuC9Q57ngrycAieGYVnhkphDiokwbFx3QvmyR1y8eB7c5T2GBM4kaEKHx2imFpJ",
  "key8": "2RM6kYWrsCWoeQcQzDwC5NYVwv6tWSC6VLZT2bNqo34fJFWL4bTHZL6bpBoSBBMPikmJfvMYjJee71HaL3uAQEPg",
  "key9": "3tZ59h2Nh6JfkJJdqnHMygAsV21j8SxRm7a9k7bqyu9LKcWBQqboFBGKLqT8tpHvKRw8feiCU8q78ccBwPKGhYfy",
  "key10": "SBrDNJSZH7LG9XNeE7Z9H2da4UJE3LmXprmM5HdJpbRjcoetmtiYy64BMRNtUbVr5mUd7vmzrDUdK4vgR8UhcA3",
  "key11": "2aaHYtjhAYbomhxwS74R3Y2MtUC7KUTziBG2juYugSuC27UQfKjEW4F3pzyCEiPhvkHXdFfWVt9iPBFS8FVb9Hsm",
  "key12": "5CdAxsChekt74KW6jncqAa2ZNn32Hj5ucsRGsoifbHVBhPNPgeNQA5YKzLf6WD1zGKdA3UZdR4EU6sANZup8omiT",
  "key13": "2FVxZ4xYJVWqPHYmnNtNZBP5k4GgdkvzdiVLoiy5YCQrMWaCFtnbL2vf5zhgmwi7VSGme73vwYXXPHE6Zd9A15bZ",
  "key14": "79SnPXJoit3XzbfUmmMytz1NG7ZL3nE12vZLTipuUgNAZbDV2d2RjgTchFPY9mrYKsVb9xjnXwaWg76iQ2cM2Si",
  "key15": "4qDQa49cavB1xZRWN3KpsEki7DJHsSqhguZRv4xAq3vJFnrfB5SnbvQ6TfaQ1kf8ZUmToEoEkHjqJ8xtLV1Wwuys",
  "key16": "urN8D7K8h4V5sjexVePQdCW1LUkDVTuepF6PTHhF4HkmsZ3aPxRdZhNBR37Ee5RAcdqjjwqQppxvJUbHrgH5LCx",
  "key17": "4RM55PMPgMvfSbA1mqrNzPioei1dg5UvVpHk6azaYCwFXyFQUWhKQXrt2LKF88wMnJzXci7e8L6LELjGUiNUve54",
  "key18": "4zEuvet15zBfnVCrtEtMYKUoGwELP47eszY5GU2KiTuf3bNZoXJVPfvFYNfcrcSWRNCtuhrAbvjYhqxDeDouJpDx",
  "key19": "5qFK1giZsG2a8qfa2HRenuXzXK4W2iDtNSCRYGY6LMnJwcUM7B3aX8su7fp9VgwA6XZD6mvPwQpRPUdrNef15bbd",
  "key20": "3dw8KGJaDSTHh7bWDYU4ZqMFysXEDS9RPEu3HuzVp69mkkdo3jPr1mZNG7fPXaEnh4e2xeqccQ3j2gW6rW7w8hrd",
  "key21": "4StMSTt2NnzFLL6F2xLg9V4ovWwF9oq5AxHT1kx4X3zWQ3JeT8sE9vgoACWsovWAXWVcfpNSG8Lfmrtveo9bQiwF",
  "key22": "32ftLFQgWSWwhL6WmrnKjrvXzfiNcAH9CSTDtNywu7tTHsARHe1HfWN2Sxqyt4hHbuAtsfjPHtqYh89kC4KnKwfP",
  "key23": "4oiibL2fD4YKuAt4v47woCVvVefW4tPyj1Ko4W4oC6CvyqEJFbZFxFn8bhUgLctvNuQn2qkmspkzQ8yYUsi3WzM1",
  "key24": "4DAxjkBne8AjELfbfNrGNDHhQ1jSPCnZwU1GB4p7rAzxDaevbcKhJutzYMN3DKWAYk6VJRMARXcKTgGbCYTy3nDU",
  "key25": "4g7XJiAjGcVerK8E3ewo58NBxsb7jnVYCdVDnSjDosmWSE9xTYB4Unxx7VnByry7iAr7WFqyTiAY4jSq4hqmLADc",
  "key26": "5dTLBgZk6vEdoPttL6wGEiM4hNzjJJHm67WUh4NWXoP5EzqSz9ptMZCH6qEneTB1NH8Gbzv42FGfbRVUXN1QW5Ld",
  "key27": "4qi6svyjx8gYnKxXtfKmACTvgkoDLMTJSYP35qiHjS79TTxPaqF9CvwKB5tVpB9K4rBb8SYtVoV47ueFvt7gfcX5",
  "key28": "3QZoZa2TGJLeBTLtACYRG6cQJ2huh4p23iyPQtxp7GszXGWjWt8my97cE3GZwx4pa6y2qZqXG7qJ1D3nE8ta6sMo",
  "key29": "D9L261wtksfDWoNzjScp5x18jEPF8oiUKyMxLxQiqkNYdaXmxUx9RtwGcAXuaogdi27RsPRTRYHUaSjX7n7eqCm",
  "key30": "5FMZpGcu4h8KjTBpUiF2sxZTyxDKR8E6xN568MJ9Q7FvDC7UU1RANtZ13SRgTKyHBj4rPha2TNYNnJkSTxiDzhZB",
  "key31": "5XSgNVx51c8r7UeSosPfuMerG1cauVLxpN2mrdNof4hPsdQfyJtVfW5hGPRsomJCyZvv64SkXuvaWrnEpyA1SmcD",
  "key32": "2zQjkaBorLA8FozvJYbA7qzrdDS3uSMsWg6TqakqCXoJcDvFkBdtCgUs2N4Sp7Bp8GzvpD7W27XR4UbCFK4634xC",
  "key33": "4ohadCMoyTj3wji6Hp3HDMQWF9QvSDuGfqJxCS6JP178sVNf2ori2aGtsvAVuu2BD8ANiEmj1bGRD9iX48Yko3jY",
  "key34": "5ed2iXBCfdS6DwB4JUJNzxPLX1y5RwNycP8a6K6s3sQ3rvUMxwjMdoHDgQ1FFS3KX8i8eKQoX1ccAjPAWRD2ixiR"
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
