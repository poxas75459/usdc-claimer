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
    "5oLc7iNdWUizdr5xJxeiDRQpKXzEenBJ1M3SpgP9dYfkYeSUeHZo5D9xq3iTe78TUWN2nNXE9WdVHQs6wGwGuw7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tt4Mk7S8S2zjHmrD8hEz7UZM485EuBKAVSZNfUsZfSSCGKAwGWTzKHayVpcwLTEpH1K1u9JURmW7H5bihNnmPpy",
  "key1": "45viaHd3CLNrRQMBb5W3v93gXdyDVVZdCRASckRC9CUziQyFoNBWi3UGo3vJ81pLUXsCtQue4TXJyRmf6RiQpev6",
  "key2": "3TipYsHmEKnRv4oadYnwepvcPCpQR2Xg1MVrLR6qT7jS6KCX1fRj6LLLok3mMWAVxT2wcWii1nv8vD6FE42CRrFE",
  "key3": "2psxWpWBMzmJiEncM36xiyrNsCuAqJ35NswBtn7mLWZ5LHdjP6EeuQq4J5tP8RtHPnSYsdSyHUHWkkrzoe5LpuA",
  "key4": "5qVcFz24HisCd1bK8uZ1EGd4oiep4yzUhmHPRqCDDuohiAvk3JzWNHSDgnDELcY244ujiAhDAMfbjebDWPEcgDjc",
  "key5": "3n9xF6iKc2UEWGZYUsy1SwRKHt6Hx6qox8AyxNoMvsB2ASydyWRG6DbpQ1rUdpmkyc6YAS1Fm8dLY2qSggq4AcY6",
  "key6": "32tWBJgqabixnpiXg8Biv5cBij3t5DeQY9ZD9C82TpihYKCsqTJ6iAFakKnZcyTPFxUC4zM3NdHPBcaA8mq98abV",
  "key7": "35vbFA7Ybu8ds8SErbiazxyHysSHdQYdKsfVQBFkF1CJU9CSF15rJQRstKAPPZEqFJ9jhRh2hJpg3cMd99ZE1Fui",
  "key8": "FTHpmDPn6fQiReyNkzhhYGk1yAPCwPkPTenCjCaZGjud8AhM4ui3XduNiH7LF9Dv4WpzS1fwBpHWJVywDiPwDLg",
  "key9": "3TNCuoP6WQxSBR9Eqrjk49L7poLAd2NsUDJuxJ637uC7F1fwdfbDdrJWbpmqh1W6YMjUdoH8cTEwXQgCDZgQymSt",
  "key10": "3x6JhksPNPrrhfKdF3bC1hZsmnUkvTH9Nj3VhxfN8h1TfsVmh1kSNm81G4FApYeMQrqtHA7gJ16dGwqjwc7fgb74",
  "key11": "3thD4QbvwVoSW7Mrb1pKG367YPW8EWnm2SSJmxFdtzCFMykVpQUnCvQ7QqsQgRKBiq8ewGw5nHGCziBcNpUMRWNM",
  "key12": "29qppD9Amysn9YDzs3vZBYdSZNxUi2TdwXRrVWNM6oS3AG2PZW6QKpMwrNMNrpm6vzWftLUpJjsgS9U8rpuPTfcH",
  "key13": "4oUKHzRvgMoLK11cRoT5hpdtMfJRt91kuorrQ6tanStVVhY99ctkPGaUjtuA2EU8zHA6bfheXFeQuDrhLJSb2uDu",
  "key14": "4yAUiZJYLJL4y4tWf1QNdFjmcAVxnzDydvTtpAERVrYTWTaAxBguYJSMESFdnJP3cJzCixnN88Jbg6gdY9Tb4y7v",
  "key15": "5ZDyB1X3Mtnpr8S6QcV4DjLgj8bsSi64zUZ5kxHQXDz9ghMehHxGjwu3jL1eCVyDTLBzM4nyUGBJfBposMNvXrjU",
  "key16": "wgn4d5X4MA8JmqbyJzJuChW3qqw9ZYWPggCSZc23Btw8BVKfgDkRQjHLxsBZurVSidUrQfYnSqvsDyxRrhifzhc",
  "key17": "2qzUBgMwTwUabSaTqh4pqNJSTikWyftfXWiCgPvGfLKV1t7TQrjFgsqUX6uQLzXpNG4WrSDXCZRvRMLvuCTZEA5s",
  "key18": "2KmCyJpJ4LJkkXgLUiY6GAJMvX1Cex5VZ7Kq7JDEmphtgw7GvjeRPGyduB264RJjHaJqbvGaFM3TrZN4ftgaGZPR",
  "key19": "4fFXQu77kip9NSQMSW7cBwWwqwRpkbUU43penaDADigUPZtbL7jWtdwj5gfR1jZuzFKK923p6FWcuTweDg7ubxyG",
  "key20": "o9Yx3Drdshm3oZ4Eozm49pYM8rxty6gZeqmLEaJjei2vWjSawSA2qr87njGwdZLkduZUJ8oWPWuQninB2wkTKfa",
  "key21": "3YsNczEkzUdQscpS8J5YQne6pYw65Jn4rE6oZqPbsM6K6gf5AL6SjLun8Li9d4gXNy7tVTzy7GLTHvLrbDbUJJ8Z",
  "key22": "37FaXsNeYpLJaY6NcmbqLK4i3BMzig8UwD2TaD6yaERuV4e2Sp8ozhSpKo636gEGUD234jmQKYhCyYjqLNkJfCyT",
  "key23": "4UX5VL6RFucWo3Mh2xzMdwrUK2eKn1EFuDoq7tgWDaaPLjatQVDQuuNyxyCHJcUAWyKyZ73pANUtLmsLu1k6SE8Z",
  "key24": "4RrHrvVKwkFEQAmK94Z7w42eE7PsXxcvqx2gjDUNMavMwpe9CKxZRjvJovCxoUKVhnAtZYdKfZ7BdFuxn9FQtsnd",
  "key25": "3isfDkrGCL9sYHknBbhEATpq35jL1xfZAuiqUCUd5NNJxn727SugVxY3R4KMQXp968iPWVTpB6fPk9zLYjVuT3FB",
  "key26": "4e6mJQcWaNk9dP2VJxFUMchgXqRkPd46eojE4UZ39qwSMExWKiWRC74xPpT3hA3RR8oEGzQC2nDQ8mYqztLdSmCJ",
  "key27": "5xEU7z2oFww2Ajed4JToBB1Dysw8RupVN4qTAzygZKfCeMpgRnGs5GxiizBud4B7f355zp1vhcsKNwi6KudgAvjc",
  "key28": "4Kkk9gAqM7o1y825exbSnXvZq7UJvrcNmgqis3dWbviV4aY8N62fuTwwUbLRPmSipKnEeoqfyHuLXokn4b8MNv8j",
  "key29": "EjCVQzwQ5wDDWZerpFyqh8tdqZXiS3uwJJgb6YsWLPezWmy8sWphdDjXqUqngMVWapPRZe4AAhnA7B3XYfBRzUB",
  "key30": "2GsuzqcFVzPj72RXfnxrKZcVju6NRKEH3PhtpPmEzaFwBmHUxKY5WuZec5CEbXJr5RKUEpvoKjRgYsSJyt9vSPxb",
  "key31": "4nbQ6Lbor1ZENBkqQUTuN9ifDgrupqcz72ZF7iYi5oXcnoEqGTt5vf92axpH1wgFjY3Wb59P3xhh6Qxh9anPzZM5",
  "key32": "2LPb7kiBzDkJjrWST1BxYHQnBVXuNSp3NxAJAPaGrsNDS4d82RpqXfjP5Sp7gNcioT5RWrWvwZtTDsnSJ7aSRuM3",
  "key33": "3RZsgwtdRy8ej271aDWUycEr8vmwkgHSEUEgN7bXEEoEYnWexSdLYgh96QKXJShMgLz5Bx5q6GhGyd7131fG3bqh",
  "key34": "4AChtqK2vkLvxgm6KKeBbWcRNzgscxuDr68bn6i8FAAbGaWvRDogendZUdU3swE7XQmW4FX4cEoiBtvvEpNJHgnj",
  "key35": "YyZtYT1g87nkkUNES5CU7wauhNNBwvN1LjSJb9CVxvCxAKSB4u4VqzFnKxqkYPqeF3gEcvfirPBvJpFMKFtBan4",
  "key36": "F9GpAuAuNmye6PvA9arzfQAM3UC6h9vUrExD7bobRXCh6ndgrPQ2orByEoPHGhp7Jn2jdguScHw2KUaWUkGiCNU",
  "key37": "mwfyMuZ2hwfNtmqUFfcqthbgLxQ7Vb882WigFJPjDre6uB3A13sAFuj6fF6PvRfQ8Azy5JYXaURXhFqFaBGLBxQ",
  "key38": "4qbEaDiBcMyxFCBvbBjQyMFc6MCFeaLjPJXuKTkDX6T1dXTVUq5EEcQKBsAzrCp5J4MUNYBCmy6V2n95HCyA7Pfh",
  "key39": "5krZ4vqbZbWSaAszr4bBo1g7iSfd24rRjfWsxbgKWj7qknZqJv84F3UVC69wrLEuyTHudpRQ5mMFRy2ZQzWgY6Tw",
  "key40": "3dxRmQTZ1Kst8RV9oLGPM8MGqwESSGVdB83MFV7m3cbbkhfQ4KyXhrAXJr547Xas3CoR5cE3HAjeztiVHifbrvMN",
  "key41": "2wSLURnaMnP9Ge3b3wtEbCQBDYhjTjWh4JmRB5bSdsZPGzt48DnuCrZ6sZen4UUvEKHEfu7imrTrgezQN9fLNm4j",
  "key42": "2qSA6ugQHeu9guz14zSQuaFZwmV9uMAsfaZns8pazY5sdAVujfQhDXsX6Tm2LkXwTarNwreA6tdLtheF6ZxZ7g2j",
  "key43": "2CW3VetTHUUJCBHnHtaU21SxF68CDQ3pkCKiB97AiAX4hzh3vNPUW9Z7mrAycnh9zEAhHbun7rHvEDhnk2hnBrze",
  "key44": "4piSFJ4u8LQbc1Hg8CHtfz1yEbgbfFdBFQnGVHBmL4yZWLFVP1DEJUKP31kqGgMSDyF6LCuH8sGjr5mpYPUQ5j5G",
  "key45": "sGU3S21RKn5ygp4Yk8gCvqvBpuTyXd9Fibz5pbJznpe1RkAaNRtFUtFL5HqevSzRUaSATV5Y8XLLGEg3tkoDCjr",
  "key46": "3MekpH5FA8c4fR5pPDip5AeUvjmxqJoeyXj87GAPYcmpxZAJ6hwNcoZy2ftpwznPK6twCp7D7KeZquCPde4GNSuD",
  "key47": "tnZqxF89dyXrGpBBc79PiL36MewA3r3JsLmxLfNdqCXScmcBD9UAKiHo8Bpvo4ZjmSHqTWGJrBiSL5WRaYGKAJh",
  "key48": "2y6bTn3A3FTziAAdmnE8aFvk9zzSh3FuJx8jS8Y2gfPTg7Evno25jv2Yk4g7CgRz7HW9ay7MXbdpqrdt588Bdgwv"
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
