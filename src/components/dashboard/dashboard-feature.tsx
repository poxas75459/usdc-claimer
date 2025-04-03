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
    "DJquP2TmpmXdfkB9sjdxyC8EWHwmvLG96sHtLtCVhBRvsuk8owkj7JjpmctogKunbZbeLxhLwmrfREJuEDvckiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBJtKqFYsZG66wGAeorNtvLKksnbr3Y7UBeauAXKLM6ukG4TTDJ15JP8Rm3x3JVkpjhHSZg2WRBGqKxFwKNkGME",
  "key1": "3yraUt3J6WA3mfktVcE9MuiVfLwFx16D1GyZ8Fruz27rZmLwYRY8iZ7BMyHoBbgMe7pXTKPqo89GfiMc8AGrQTPW",
  "key2": "5toJ2gGqDE5fysBGG3FFmji1kYuevLuciNAvhUXwqD4E3EpPKs1ac3iA4zPENd7vuvbHhbzQCzUMA33ZDJzk5GU",
  "key3": "5ud2czb74d8WebumKjPfEPuaYxcUD1JRAP3rF86UyCc9ShmQY1yckvNW4ovExPYrf42VhYGC8a1nHEyAZkeKNBJR",
  "key4": "5BCcZ2n6G6faGMmwcvWbzhE8DL2V1D4hvRcE59W6N2vDx9ULScMRsBV9wZyCV7e1ZgtdHkn9hzWwF77DWA1cXJdj",
  "key5": "2Fr2ZE2SrgwaGy3AHAYJEMDYa2mF3BB1iWKjrG7JAozzFzmo7jBJoohWfbjRoqvtFkdd1cqFjWL83k3xa8eci9Nz",
  "key6": "4QxLnAAvyJnHK53SSQCQ4FAbu7r4y5RLHDhTN25HTdekHn8ddgLAqkaxgvsHxWVdxQHNyESBGtoBoyxpZYEYK7he",
  "key7": "bSbcsJxJMvA4HP8ACjDZSxBVoyhb2y33kWY8sf91PZFHaAa7PeqpvpnyVBmD2cUgR2Nty11FVh3ZbvbezwUYZC4",
  "key8": "5t1UMTpjJExGyDV7tA14c7Rr672fifahUpTaxBdEyGoZZDVowhA2zXdEo93XrQGXGn3Z4qT4vJGgtR45yifyNNGo",
  "key9": "nX3bDh2rjm8zQ4P1n4JSzMgyy6SRdAgajtZN4DgbyT2B4HVwf2eNETQcpbeBExntaBGERWi2VCyRj9G5KHG1tNU",
  "key10": "3ZZhT58wNPcinQdfL6okRDckmMAPZHqThPAS6Q8uBLy7zbkg9XqVPPvGzth31sYNLz3T7hHaWZ3FARPpy882jQx4",
  "key11": "45J58iqtasUV6ScXHSHkScpjktnB5eaDb7YYAPPCuQbadv5DuZq4xQn6pf3e516S7rhudQgvDmbhxh2GQgi1ZYEt",
  "key12": "4jfgvEPA3j4euksBKEer7duNacrSna9PeDVMiekp6TsR2gBjdU8ELKdGYHET6HyoGgyFs5J4dx89A6LxXnZVZFNu",
  "key13": "5tSRTX7R7dDummMKU2hDWfHra6tuXZ2M54RBjrhktNZocybafLXrQnmnPG9Rw6JH6BnDLnsaqwsdLY43NRWF5cvR",
  "key14": "5FA7oE9DkdLE2UoBNiRySrAbNVA7JB2ah6YXsEvQDZzLVU2ng6zxusXr96etbW8xVqHBmPcAevdXiAa2XzQmaJsd",
  "key15": "5KxsrAdjQk5378GF2qPKHeGkk4Dnd6DmB7qu5HU9sRfhBpKoKxyq3mztNqgP34JX5k2cejs24Hr8dojLoZSe3XzX",
  "key16": "5ZMmAZs8JW88WpZyQo1cPYXLBGY7ELsJyjGVpf1TjmEET9LXrifoqrzHrJcJL824kDqumAn2RQpKgyHpvBey6LD4",
  "key17": "5r4RMskW8ZqfZBzoA8oYbyBF2Ny354FVuL7eCv7fBjRagTyzBavgqVVKCdYtkd5vp4cTprZ7ncGaXDiau9jomR2e",
  "key18": "4qyCJKPnSD7L3XWJCS2S9EjGRoDH58TnumjBrxrjYbr82JBjs8m9kBMuFVaRq9co2tqCxUzPYXGQeVsAt4nsPzNt",
  "key19": "59C885RMPm7K81yLxrwc5ws7eKuZg4KgXY9m6eFHXZ6nTNnjtXeNan4sBPShmgG6gmMrjmV31q1UtStX6j3dqkpY",
  "key20": "2MPwKVTpAUm7yJU3aYZ1eB4pH84Wq5A82wsaHABgzU4ufdDJt5VjJSWbxsoQsXCB9S9PuDbY3uwSshw8Lx4oeafV",
  "key21": "5uSo6RdUGk543RiXWyCwmAnBXPZDXQKHkky2RKbsNyQi5EnPb9DYVA3AZywpDdqtkyhXrDj3GzfQ6E1ezMhj3LjP",
  "key22": "26RiT2hceKZqBYHuJaZoMG1S9RT7HLmThoRxbbq5ufjcU1iGs4pwxn5abUgUEEeJyGMdBnPPcaqUt4jv1zBhNbJh",
  "key23": "5GyPz4WsAfzvXs5uF1mz1tX2j2VW6xroWQBSaZeQaMq5KeSHeKtQ36ejAVSZh8gP9ntJ9CheUbYKTvWZGq32T6if",
  "key24": "21q6J3hKNJJsqaefNShWbGuWuFGBmfDSqzewxN8dR3EHqw9sXV5veKvGa43gVmQCAdj4JAdXUtQ6gztzW9ssf9t5",
  "key25": "5MYr7Er1PG7vmNrhhfb2sr4zuHvbuYRQvt62uP6hjzuJXfvb8GsWvE6uGR7kRdKCFH8RdwcJyoDGU6nDZ1DeFj5P",
  "key26": "2QW5p9bPXZkWhVUfoswLayobrcnCdBfahAjgpwZfqNYrtJehUZVYuMiBeqshT4Zuvcx1NPnBT2TPRxX6bFvVCoKo",
  "key27": "5FJmSkF6iKM3awX7amLHKG5t5YZ5Rh2XEMsX7rx8VVa46YyBakLKz6xB6VLoPUMEPgGiXBzRfa128PXD8Mhm6egu",
  "key28": "FFvxtVbaR6HfNiDUM3mfbXt18eRoBvU7FZPp1zBwVXrriAzw987qPMSSuk9FJkBk9H7ptMAa8snTR2EVeRGiUD5",
  "key29": "3wwQufZD9aat2C1ASbPa9RhM2Zonghis395geYXjzeXvGjyYpqecMeujxrX26ruE777irhg7jV1AJ1XYKwBxLyEu",
  "key30": "3QBgsU97jPg5vqQF3vX2NHhakGWHw4mzEb93S8pJ6fSp5aXi5xKjntCWFt4bxStTp1FbZAd2TE28iYuJaUGxvDPP",
  "key31": "bPUWr7UcP4r73mx1xn1ctkyWq5nGSuKo1EXWkXdbNWrsymeRsd3AhGVq9ZyEF7bWuFDYRGsZEDVmgfRPzLTLoQa",
  "key32": "4Gm8ueXV9CtERcBLiQCrAc74Rz1pSMDX4pCkK9Fji5HJyoRe7GUE2u7MpqWwbnKdBqbmXGbtwLm2jAzV6YeknH1S",
  "key33": "5vZZKTkahrc51KZhvWPtruxGc4km7LwFgno5v2Qsj6K5oSxhrdUEgzJQNPUXnpE6CP4MwHcjRPa2BownfZPUzyQV",
  "key34": "4CK4exCUHmbHkU4inizM2RjpnTWR6JDupkkLez7VhJSQLPbS9TDbBuypao7RkpeK1hr3A8UDA8ynaNnZEem2Z5TA",
  "key35": "FmPQSxms6Ju2mLA9T93cafoTq8gxMvZbqR3HAh647jH9KX5rdTq6yHZKc4Mi1ebM12nuNhTzzZUTEHHhYBYZiGK",
  "key36": "3AmYf6axdUSxJ3pqyhC78R3WqWjP5twV4tp17kFmqLoPPQcvEh2dgUNG4oVURf8YCbtT5MgmGhHtffUCyRDTnADK",
  "key37": "5LtCjFLF6vguv6sXr5133mQCrDJZv7fCGDv6h3HyNeDV4vjTzLgNybE2Ria4SNac6Wn7UjcRzqFX6fw1FBA8Ep55",
  "key38": "4Znc9WEqwexUQYEsgjbkTEVUP7b2oju2j2tLAmCSWV3dc3nK94YR1GGHiF5XnWiNVq4HKPJHA6fCsJpU6THsXFk",
  "key39": "3YousJUsHvf7apwUKF4J1FD4o6qPB3mbPmGECHTUQLHTMznZ2WAnJnYgNVrmdm8nAa14gNHtALdbrokbAQ85bFoC",
  "key40": "3WNLAsX8vEDUjCiXthN1fr5EGmEj25sPSXWDDeBfNp8FpLP7JYgTevTdnbg6SKT3Mp3QNcvziKP4wdU7FD2uVKYh",
  "key41": "5RLxXcZkRHPb495YgnTXcQeqFEXhE4ppR7eVLR5CGKYdVP6swUBYXdrLxMThaHCf7mgGmxPsyKc5JMiWRemfFUt5",
  "key42": "5XRHRqYGB5D5fD373JNRAGhnAK1nrDnQmVRVERKMfsoesjuTUF3EejcQUVTY5qiJHsr2gV1iPvHf3ysPacyQKCcB",
  "key43": "3xqv1gHuMYtwEVyQ1TE4VrvjsaGoZpbVJ4dfH9hBgz3FVvbnoMcu5bxpX1G5AXYRVr93WdukAufmqUG7Rhw9hUp",
  "key44": "5xqoKsmQ7ASYk8Xdi4nb4Xu3Koj3uZcK9pKXeW5S8SfpRopVai4qGGcpLoJdhCZrb5mTikw3NdYmQaSkRv4xxhZ4",
  "key45": "2cijQki3cpvZi4fiZ6jBXFayqu5EYCd2NDa7ncWKfK7b6JGkaC7mhEPccANNovQzAUxzJ9r23JkkffG56HHDnHXq",
  "key46": "4gokyknkFa32xtyhrFChoHgomMPTPrxKBBThd9Dm59LniR95o3AVzQwKadD6gTewxpWedAuEQXadWYeCH9KHpEgH"
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
