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
    "23RAhXUtFARLZVsLgP2RDHVqmcsbtm1B3GP2wvZ9PdgnQr8M4NuA1t4bjeePbxXEQH9721yoxXDd347deBkkQmFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MrsJaDm1Tz9gcKu5skiJ7cBNrcnkCvB8hSYa2YncKxkGN74dNcwSkrdmk4vCwbgscet3cD8gfecWTJNxUEu8Dp",
  "key1": "3LwQ5DnMtgj3JkmnbFGJkdEBXyKLqK4Z5ayREtN9VKc9G5sjDBZru7cMSMEJuneXfBjaJzVQrGyE8CCYUEUfDWD",
  "key2": "32ZbxrvSYqpLciVoECFkrYqjuM7N6EuMryZUN8S4LNVnKpE34NfF25NkLa88EfS2j62fCgxUbMe9TMkGpEVxHh9f",
  "key3": "4W86KqnaGYvbfHrtCPc8XZG7TfmqdxDstebaV2yRxMjkXqfhdDvrDdcb326MzwiqNekHEHxKqMNmR1daaaKjf7yj",
  "key4": "4HQH45v9TnBGsTv5o8d3Mu99ieVxqEKA6NtVdp6zHCp248hrC6Z9UxLBgxvVjku128q3Z1y6weuajrnQtmC5AosV",
  "key5": "4RYDWr7HzmuR773NsHY3LXDAFJHHyaJfpCJRosTaWvEh7g5K65LE97ENsH1dg1HydbFqg4hDcA5WhbhqWW4aaU78",
  "key6": "2GH9fbman8gMW5G44KzBqHyxJy8xM8wWsera6kJAZkXhgLacXetoNjsQqHrURS8uKJXPUm6zmzPW8DmwWK6aRGph",
  "key7": "3Y6UHYo8PSQqdpfMYF7QByMEAdPHJWbdBZrfEziin68YBjv7uEsQGgMq96jWaA58CHqMdEYvucwk82M3vV4Svii2",
  "key8": "66xo8XGcQuVYcnBDT2KiKBY6fEs7U9DMQ5LABksBUCwasFi7ja5XfkHYE6kQVbFa3TBDVPt1JechoMB41rcm9zP3",
  "key9": "2DEJqEKimaPF3vjQNsd8st1gYLjvojpY7kaMuw9FmU5H4tSDGKv4rUQUEQp7wPFTghth3pwTcNPHspsjTxEGEY2H",
  "key10": "3tbqeHMvTEMQdsM6kARx1a4V1ZDHCFDVMaoThS7Zz2bsZK2ywPVomEmrh7z7wsW8u99iPZid1aaGQQMMDnCGDw1Q",
  "key11": "4RrkDySBhFREzNirG17pJKnB7PFUddsYk7k7W1GDEpGaCw2nEjZJYB3oN297QoeGrbmiD5PxsruS1fCrcn8MXtC7",
  "key12": "4jgsMeLsAL2G8rmje8j8Ynsxkt8HsEAVsriTRcxBMf4eH8rvBnyhd293EVUPxHs2eAycS7Gv5ZBbfS1aHoeUzojQ",
  "key13": "2vvwsqPPrBA4yQFoZzvdTLBewUnhFaMYNuie8x99x8wHXecQPqJmoyY266LiRQZizokbz9Kv4TJnA1cRyuEUcsSv",
  "key14": "2iRE4aagJ4jGwsY1KTMGSL37gR731eXcZ3s9NXZwKFM8egcc5Q8vc9d2KfJNjLvTKF6W1cNqS7Lmh8mvmqBAccsN",
  "key15": "3uakh5dWunxHrmVW5rMR3LSZmKgHepJPVMceTrvm3BywxN73suswfUHQchaL99QJeCLwYTbbks8Y3UADqgTLxxxd",
  "key16": "2TADpWkEdjwdvRMg3UsHKoVxcgHAzWnnocw8v4hZ25FkB1tAyE3UCLfw8UtoeAG2XWwRG398kF4ZFEdQ7d9iGGxG",
  "key17": "3LGSvNd2svScmf52dpuec2mioWQUwKznFhUgSfJGkM99Km7vRpxWXj5XzAZPeCBjY1MYrVYpVEpXaijkPNsXP1Lf",
  "key18": "2hMu1azXquzqUC2DJU5tPADgv6X1N5PBsr5h1EFopszTUeT1my1EnuNLn8SuTJsFBW3NaQXpAQ6nv6AJGeAA6d8k",
  "key19": "LCnuTfpBEDtrvSAXw7vaG4jSdBe16d31zS4n5GewHNtp5vaGqwySU947SLM24nEDYGaXGrcJGXBDdH1NfZ1yj5w",
  "key20": "5w3sYZ3WkL6rgJDtL4inQnjkPoqtgJrvYcNoSJxcYKdZRotM2R8pNka3rJ3aUjiKXRWKTLXKs8vweqMms4AjmzQZ",
  "key21": "2cQ4AX9cdxFuY2Y9b3ZA6qrfAcT9h33qbFPZ9nCEF1igseXgETHRCsr9WHSwSAeqRZ5SsJFF5WvV2UzRjifx4FJH",
  "key22": "3VKVzkNz2GoG8VvENu1Z7TW448cnN3uJQ3c92Zhq8pGc8pn6Di7Ws49Rt5tkuxcczn5dVA9iCAEJy73fujiops8z",
  "key23": "49pcjzNHkMNdwkqpK69Lj4KiN17Pza15xTg47nsYHo6HqigiYLYfR6zTy7qXKNCwcriuHfkTpbaU6nbWwbDAjJpY",
  "key24": "4oYqbwfkpx1wQfJ1nE4YXtfQ5MCuiRVBwJ5FDStz9rst2djs9THybj9SJ29RNo5hQfc272Hbo7v96DiNnNonJKmn",
  "key25": "2dKPL5xF55v7c4WmuybMs5xmK43jomtGJLkpHGAK2jQZY3rYxphCMEHjUcvkTRN1DrwxC9AhdRW9AbMMdAX7eQPM",
  "key26": "24MBea7TpM8wmFhxhDf7ZAdyZJR1m42KgS2kvUAhSvs9fCk2bYw9rLYbn3d344vugsnRjzMonANzRnqSjm4i4X8b",
  "key27": "5Q9AL4wfvAznuicbSUR4Pci6cxP1LGFJemU1aLmgchhitXnEco6uoYArZJR3y2mLBvWMzDoTNU9qJtLrMLpqcz8c",
  "key28": "VDpLaNhYf3H9JcokLS5ETxaGNdrAj7Vx2P8N3bWa12E7Ay3REvJtrhjBgKY6cN3MLvYrh2tjmuY4hNu4EUQBjQy",
  "key29": "5EVQZJoKz7pp5Hv6xbNiPot46YP1ZqMTPANkE4JW2BLTFjydU22pDSbqfyqdaENgevHRqjQwSykown19WEKCNkN2",
  "key30": "4yrVE4EEVXNDhhATjKPMr8cZYYktahftwQhJFn4LKGfrU1DXziZsqRY4GrXyeYJvxSzJpnXbc516GQqbg2iy16pz",
  "key31": "5s2RXqQCbNPLkv7RGd9zUbEu4C82hkvQ9mLrD8JcnWgL8onVaymTDqLtiKFLvaijWiwFJsYVxxsrrSzk4zj8FUvr",
  "key32": "3AukrC8w4rx2Fmsi1JJn5uRUXF6fRmvCMLstTczatT4zFXkaJKr9xL8BuR1VmPtGa6ed2S3TCUC4YNhrULRWx6LZ",
  "key33": "3pqvoEkNHR1FfjSBa4MxQ6stS6xKES4f1nZ9Evxdn6R5L8mquFicmTxvc18pgcTvC4S63b6333DVMLhcqnjF7qC1",
  "key34": "8nCn6ws3F75AQUXb1ot5W1WnPXUKEBxf2wiezYAD49w3zDCrNNdsfp9UH14heF8AaB7gbVfY75z3fEca6RYgoJN",
  "key35": "65siFncCFpgZe4QxuoBvHgmKnM4m9UfymjaENzbAANufSDe3FEYh6xRK6JAxqz3aamnKvifNr9pGxyGmQhFH6T9Q"
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
