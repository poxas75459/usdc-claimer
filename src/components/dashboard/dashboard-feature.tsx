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
    "2Ne8AVM9a5XUWAD8rpnutWjmqDJCtB8p7khjase2XsWi2JgST9DHJQj2EuEt2bVK8Wb1J9vdwi1mTkv1oFRX7nX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptEq1Bu3DK8YhBUBJKUmtjfbMMUWRA7YMvfaZ2frf2CshZmmhSQTN8MRWd3jTJMagRJwMeybKg4HhjstX61ew8i",
  "key1": "4X13K41iPGzFfcXuDjtog8BWQCPcKgMjdKsjp9nWLzFshSeX7FdtDmfJXYsmjkKiqi5T6aXxbBYBfSAFe4X8yeKT",
  "key2": "2kW31iLk66kUnxp7AKrRLjgSj6wRWEG3CL4zFAUuGCToWSUEZYUgZdrK8hRQkfe9JzFYv4cSFGMo1c8HWyGmKvWw",
  "key3": "4GEG1NQ1fGC1VDhzZsuGn6xanFpT6jNJKg1jPLjQpYNVJetJbmpdPdUXQxkcmQrKdbqeYHzewpKbefwwu2crt3iV",
  "key4": "2mtVQe1gdtqDgs3WPyKbrEDiUsuimVSdHEaHX9asKavLpkvPqNtb8kvWfvxfXzvbb51CmN3GtVkKoTkuT43VqMHt",
  "key5": "3VfB3KBd5ujDZ5NjWNjhCVwpNRW76zJZgZUnu8pfkQr6GFnANuWN1nnyP5V6qoSTEXPFHXEvPnKZgP2GCjQoGY6K",
  "key6": "5DR9MFv6H3XDqHwdBmh4B1qGwxnRioAnhDMrRRTJYRp5etmP4Pgu6Q3xPWev5zyPmazudKfUQh1WNdYZX3Ck6g6h",
  "key7": "qSwMYEsTRmcsxuyMVRgF9TLFL81ZMEn7Q7yQUCmdjuy4DtYTTWueDJHkQxVJd6iSaEsxVGhK6H8rLpw25fcJHzW",
  "key8": "ft89ZZqm2GmAtJKBQbJfHWaoFw4REcXXpXxfXXF4Yu1P4wMehwVjHqGQW8KybdYj813cwnJd1D2pUhTCaLYi7mb",
  "key9": "5oNUv1MrkrPH1sGvwYVbMMJX6ijeCzv17cgFwg8q1UDCm87Qdwm2JjETguKuAbj3GEE1AoiQq7hqRSnT7uGuZ26M",
  "key10": "5ftDxfxisuYz5nJewWhKu5xkQLo2rzDZztSxGaVbZsv3Dgf9aiDuhAtmUUA6oC1fG5Hoe5yxor7c9EMU1ELLn5e3",
  "key11": "4Xi2AFBUS65ko1ByhbYg9Wb5YQqaCTYVStrRxEpxKubB6oVKUpv3LK4hDSX2ymjbu16yjN2cm4x7fggcYUNBdbnc",
  "key12": "5uRuUreWFqnpixrcsS9nWKsuGq6HMAKxdscXNKBEUvzjkKZDs8RWjpsPthT1QaQgJqksQiruKEydpzsM9oS6b6fT",
  "key13": "Qndih5941rDnrLogz2j3zWw8t1jyWQiGKebx8N4Z77heUmbvocpRjCztmxSJPtAX7su7k9Mg5MkrW1AECLXirvq",
  "key14": "3GpuTGg9Ytr1wVxoEpUGoR16urvEFS1vRrPMqV5aUYADNn6rVEQn6yzzfMUaSECbW5JufzzDNyanQbjj5Mt78CQw",
  "key15": "TGEYqpTY5wHgkTjqGRGjP5HMEYAoFK5heXTxU3xcxbQLYtQ1AJ4c8hrA2mxe1dVXLBFuJCGK2LaGMT2ZFLKWR7N",
  "key16": "2a1DE3zJhc5uUHMxq7ZiVGUmUM2SbmMG8mNvvP6Cxt4PHmbfVUciTrgVhCobFMEDED5xJoAk16dDtK3DRFw9waj6",
  "key17": "3jPbqpcnBX6WdX8B82AbHofq4EYhiKeMhFkuNYC9wFa5ZkbGtDHE9c2EvMquEvkeKobqMQthYqcyoa2oz678Y5Qj",
  "key18": "3WetMGk51vHirQZfVy1xgY2y8ihGii9CFwqDGrwb9CTTHKSY7u5smNQu2A5ftFA8v21ZyAuZweHMfmVb9knoBKWf",
  "key19": "3Uw38DLVqEuEWEtA4KC7MVmjG4NqJNCKWKW8LuhXpZKqcM7NFZJmSjnALEPPNBNteWzSkPvh7gFD7KH4AB2hp365",
  "key20": "4hpLKeJN6DRK2gprSyqEiQhtM6XiSRd7uNoDGxKS8tm2CKMzTqYHAMEhqxwYKjDxy2TcvK9aFNQWP4LaCvRsVzcC",
  "key21": "2whDFZ869rUAFuNqP4CbgQoxcsU1acrW8WKvDkT4VuByvDhEdZeipbLSUmmxPxvmuPKLs5hSV2q3wrGTvmgF3XdL",
  "key22": "4heGZDnH9CtLJw5dPnp6DuUjcZFG8K1kQeFQvw5G1C1bJkxnSBRD6hX4FbwjpqyUE7CGB5K7BK12qBJe2uo2ccba",
  "key23": "3pEKnqgvv4Wnt3Nryr6QhfGTqQ7wWX2TVbPXg76L9gJHmQSVYmGT3sAcq45VAC9CCXnUpPXBWSpKY5xB2vLTxuZ9",
  "key24": "5yVwUvw9kZRKwTVEUmjhQTMxqewgunmqtvhcbmAg8a5T26m8bdGLbWUBFs1gaN66PBZjawNLCDCPF4uMHe6Hudv1",
  "key25": "i7udPRey1ayB6FGJ6bLL67pF1Ey5mfABX6rmxqRs7sao3pTszMjZdeJYbToe5sJF3xJrDpcJEMqht2AW9uXGJop",
  "key26": "37kPUSaBzoYyRi44NosXCquZHk7ZWH313nKde8FpnFvpeh6QXT3EMbPVqkVEJZXFcJZLMhra7JT2X4DBJjxs2vZ5",
  "key27": "3ey4LFsav1Xk1p9N3cHfesGquL3RjenHM2pCt9rSF2MYV82wupRXCg4tX3rSAq1hSuWdkuz2enjshFcGFV8gHxG7",
  "key28": "3aAsRTZaTFNBz6rTvfcUwqX3j18KnJq2Au8vNpUcimhShSCqnHaV9vLGAc2YmJd98u9AMLPRapA7EWrWx3iSaJ7h",
  "key29": "4PAXAevozRmgVAV7HnAFBW3ANQ23VPbN46uqtxYzuCTHucMCcPJ6qYqkAN3HX4K6jhSUK4KgwjUcyMEf6xLNSMNy",
  "key30": "5HhdxtrXyJSkV95Ytcfzh9nW4d4CsBPe9sh8YTWHZauxbbNhgUUmr5R7Gk189cpSQgu449QyDwf3mUDu11C8GNrv",
  "key31": "4ygeR9vKRJzWJRxrWCkqzbnXNd6p5T7od51BpJvwNAL9nqEua1jBBZ3bdDQNf9Qf8q6serChnrKau1GwTvhyXgmr",
  "key32": "32oW4tQes9sPPmcfELqgEoCoUf4MLyLNzxL1YZF3PT9RYLxe7MBUJZ1qk4RQcyHVB9MTLbqp7iEszXJHmtLf8ZVL",
  "key33": "3S9hzTpCxSkeL3QrAJcj5P4iB3NMQa9PYwJU5SZJ5nZDW1GDW9wTPKzFbg9zSUMbzie1aR9mJ2Zw46ujvBvLWe6E",
  "key34": "5MfJ8x1b3X7A3xcH8vNUidjMGjcNp8LuUYMmpHYoQvBoXD57tShkADYvG4PXLaL6ogNVZP99sv5PjPeje18Z3Keu",
  "key35": "5LqdP919odDmGKB1qKXRQSC6ja7xXzsAsCQaybc4JYwmETHfAEVbwUpcNyo7GqSkS4kVbSwR8H526BybQKZqTBBo",
  "key36": "3VBXPqLBHEAGHbreGrzv38LCphpp7AQ6AztSDdnucY2dYzWpFHDoc7fsQX6eiPaVBj2x4W4LrB5hA7NS9VfAj83o",
  "key37": "3dkV8pBWtEYr38LLdbufmYgKm9BRv1ejEFKgJz6aLr5V8rS5mE4D3scePuCCgmcG9sczJRuyYU74CisXaCTfAxZX",
  "key38": "67AsmNWM5ugRusBrJ54QouEbhcZFxw3XgUrzmUZBvie2W74kKAowykXNVUtPpZ48yLA6QPYXsjg7YWJiUN6eDnRR",
  "key39": "2NU3dHabgeFDpHWnGH4E3MQEhvLQTTyW95L7RXXvPy4sDtv4gWv1aTDVBJ6dYb4hHT6qYfRKWZ8y3YvTyW1Fq2ah",
  "key40": "JmPVDqmCniFC2rVtMYup8oS6aCQLzz9tFbScqDFrvBtNAMxP7MnBH2FzxKD1ND9YkB4BqzidPtFJ58P5NtmQ6Sd"
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
