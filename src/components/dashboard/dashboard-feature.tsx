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
    "hBhq9hxWTUZZM7AtXtK6pZ7V3owWiMUeUYNWDAg3x5SihFb69jCncVCBo37sLjVFgTN7EmrFnzLSTvoPbxtY2e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Yno4u2GfkhyJzFNT6aaRdbQdFPihcuy9g3ZMbVkJAnSHtQK2vqADkt6RH4RMTu5AeMhE3YPj2MoMBhnEZs36LN",
  "key1": "3LXNgraCC4PfUQSHApkDESL81o245QjCjLnHoYsoKXQNnDSURBFk5ZdzQGB58HKipMqXR8VsDt2diaqZGK6kD2kt",
  "key2": "21aNep6qgZRDy44uUDWBjvFG7EnywvQ1kzaiZgKEC5mTvLN32yDr5ox8oQKF88LZf11a7dY6cP7KH4QwGAwUDwZh",
  "key3": "4f7CxwXRviLzZMf5u3rc5K7q6dsSzqsrRiULmCamKE2eEy4kVrvYNxRTUmqaESpuebmsjBfvdBb49BLhTBkSsigE",
  "key4": "38iUy3DVWJfn8wjwdDwxnmCQqHxzupLaBG3z79989Zm1dqGVh48DQ2H2HinP7ei3Ja2m6cRxaH5BwFZeiDgzfMpG",
  "key5": "41L4wtSawnZKiH7y92LNJjUSxoN7v9HCrfh5jH88RazUcq4twNniw6p8zicmZu7zhojD9scLdkAUedLjRMP2jWTE",
  "key6": "36Ef4DDnAPtLHrBZgmfFH8E5bBz5UCrabVvodvxQBbDrdJXdJQJz3zfYbprncQq3RqRTpxikU9SH49jxUmGDmkEV",
  "key7": "2titkc3YGAHYCrjbD8XYDGKVzwjiEDMK8tucpPtg6zPLeVP8EZavNRAULkQzKEQ3XAYiaWqNCHzXqyYc29tBf51J",
  "key8": "5Avwsn2SAtTXKjKYLvFquEEtx5T1qw5nbuzL3x1Y6tSF6XADz7QUDBBNkdaDeDkGjEa38Z2xMLyYzBw1xcer9HCU",
  "key9": "49VZy9X4KT8h4uNM1mYwAzveKUfgwhCcyChFPBHe2Zx28fGzLMuGhrHtCdVBkcvcbK4kH9kv5NP2H8jheWVtDA5i",
  "key10": "64SheiBsM3qXyxqFyijr21VHyvgyjwEJR39sqCQ3g9FWjNG89rzg5Xf3WGyaQYvMXk8nLQxWKYZaQuJwHfATaXxT",
  "key11": "35WVZQVn7b8AMWX4hsHMe3oH8WN4uMZn4ySUQVusp94jKxL23534vtEiggfgfzgLrTExKJKhmnCX789U65iYBL3k",
  "key12": "4EQPQ6CQ1stVJsPPCVkG8kjsDkPZb5kmHy2EiDa2eR3ngxRfPDJqD3cfiMqY96siRNnDBwD2HrjRpUS5KoqX3sjY",
  "key13": "1P8GKZJ5J5kCxiCcCNrL5Er7oUGh8o9eCKfDbx6i8GWrzKFhoLu6W3gns23WjTXwrTFKLxMYu9Pn5PZwhzn45AK",
  "key14": "2qZocjQmrByv6kA9x3cXAcZwtLuAWe49aMeAdZzKjTHPsKvhakW55e8ykDp89rEQTJxyvvxHrGDfKWuQC9V1NpzM",
  "key15": "4bweGcgpCzMwfs7z3VWx5LjFomwouDPjCqk8HUKdtUBCbZnLmDS3w14rskZzWV7sMzimtKqGpCCaD3YyySLUQZpa",
  "key16": "51s9YnS3cMTQRqNHAsPu6pX1QupxYkaoyvWQfmQDRDg2NiS7NWJEPCTTVa4UuMTyfReEEaCthm5j6Wuhp4W64Gh2",
  "key17": "4WboNmicfUMDUoy5HfbjuPQgF2dFQ1me4au9zRp8MTZy6sqzpGzFFGzE3yf39RGQ2TsiyWhfzuDg1oyvuY6WxQfE",
  "key18": "4i71EFikWZQEc8KVXnAJpnAcFkWJYqgPFbz3y2DLmByLmdqRwoRaqQjDZgocBouHbmBc8pQJULtRgBJXzmnKsu7n",
  "key19": "3YVgHhgoKhDe4tLAmru9zf4PNwpe7Y9mNoS8jSNq1KnGwrXiJBzWRS3VoheFBQyCH4g1FRLgeHkWgrB8HVe5nz7j",
  "key20": "yxaS3eBxHii4UXtt7wj8JraLVQM6DzCfR34ocFPcAH1RE244AK12bmo5AGSE6ftm47N4GBGSfs8kRvxgUjrYgAj",
  "key21": "21uFv3zEmhkxidcZkUXBVkcjDkStisoKnsA3V472HN3yvNcM5qqRjpR2bkHDjteeQkqm5jHYoWb39LMTG8AcDiTo",
  "key22": "4kUk4jncFd9YawmBQaAqQkitwv4xVTmFWxw2ifw1jF88pb8LnzdRtEZgUPzjea5mfoJd4K5PrZ2N1ueks6UFLe6A",
  "key23": "2tZcMCS6Uarr2oW6P7DzzCzTMmhGwviiEsicMP6ZaBUpUX4afx5eAeGQHcKhsP3wznB1QX9BVgQGgg5S4yBYdxSW",
  "key24": "4dtEEqzKB3Xy1KsmKs48wxNACDcqHbifjVi9469jMyrQsNE5WhoMQEBRGNtk3dQWN9LXXHsVGxqhFng6rPfFMewy",
  "key25": "4zDRQcYswWjMDGZAm3cbnK6VH6AVww6cezW1tmQdayxF3gjkUtFTAhfAMNcVaerhPbRyrTrGXvBd9pKnqMU1yQgv",
  "key26": "67ZfFpAWTykWKxHJwnohSgLAGCDbVBrPc5UsZm62W9ME2APDLHaU2Utx7skSXQN8AHMEzqvUdcE4RbnWBJfJUwi3",
  "key27": "43cffGyp5c4CjPRGic2htrTGfktApty6K8QLBZP1jnGaD4sXgidEyJ7Jj2BEr5YfK67QRihskcce9jPcTJtL8pLD",
  "key28": "3wZomTXD6ARaPhoeSmUVYkVhWyjL7A776e9uN3DezVqiz6gShKYqwpHoJYUVKZg7sfwiJvbyB6ooHWGiMaHn1c4c",
  "key29": "3YbuM2d9sVu5gWtMbzmeCcFkb6P4d7S1mP1UJfssKxQ181qi6PFuZ977BKgGzgdHXpYqncikrTMdLED2epP5paU2",
  "key30": "5L7LtwvemTQ9JHKqFCckEpaZx2J2y5TapRieB5Wsnv1YEyno157Pmbs8TEn7HUMn7MCZSKa3axwp3ZTJhWFYkFWN",
  "key31": "K1SsrD4jZgW9vmLUQESSnQTVbQKFrm3pmWoxcqzebwA5GdSd3qAyGtNmkNrWWTzCLsFPTAKn9rTLmDeTG1LBGGu",
  "key32": "5KfYw5CAsvheNDuUo3DvJxsHdqMJCdgAfB9m3MAKZyBM23uM9x1qTGW8EGm1uvTnMHDC9sHsQL97Q6fofu4wnMFk",
  "key33": "42Ku66v2N97A24es5GYq5bJzDzujJuUnKHWdP9KSfGGdm8tiEim6wxL9RrbFLPYrTDEMQsFAXiq2RxPN5xSebDtB",
  "key34": "DdB7cjf1AysfeaQBkNEUxTM8s82VQ4qvJ58mDLwr3QjDHK86wwhpBqDVajzaLTyms1RG4QY2uYnqNV3T9YH14d8",
  "key35": "21Fph493wP98P1yiugrVUGt9EpZi6QwwAfKqVQQ2a7LaK8fGjTJt9j5RVJkHPTKFA3RWS5WJSY6XHXgVzdP4tcdH",
  "key36": "5i6CxtQjCAtiaB1dHiw2YfztcFkMYqcxZ6NKrrsCKsDK25GxqF1kXe1Ge19VHaT3bhXzVLs58zYjC7aBscHSyyKC",
  "key37": "3wRtuCxAXibaqEFLExBgmsJJ8GiT3oExxtDyazap51x4NU4qxx9avo6qNGcbs5AriEiQJ8G6PMH4yBNX3uD12B8u",
  "key38": "KbAT96uUGvHWZLugFvCmuicU5coeRxiLq6w7waE4DiZ6ymVBKpwaM1FFurev5vW3LQXXEFWDuKLagfT3X4NoyiS",
  "key39": "4VxQLFFxjjn3CjbfBjo6mFaXtdAe9Y4DMbDJLCQxJheVPFmNSg4UJ5EFeLQnH2UxMpdDmYC3YGCBKXaHspjaNxtn",
  "key40": "2p2radLM5sanLJvTgF6ggMHUuYwCpHMQ4qupSNU7VHnpoYk18xnFBkLioxwz6YwDYSyvtwPx5H1qQMxdCMiYHy7Y",
  "key41": "5SqkwijZdUpicWRzJNKV5QmmCP8krxAuXDpcsxWayDVJWueyk8kdTJEawy1W1iLwYcYf2BGn2LY8x2VJJxvWH1a1",
  "key42": "2sb6jL6HpwFfVKBZSBGkC69GaEP1TDSrcXXYCbv2CNVNuc8wj5kYu2ZSVuzfaWmr8WpoW1PU7pC7S6Fus1LEojft",
  "key43": "2aWwcfCvzreUW4Q5yiYu1nMSttzwVmmnFX2EFZKuqGFu2wc2B7NYMaMkWRru4TNQSpx39vCiM38Xnge3is9RjXoH",
  "key44": "4HJcgnRnEpsMcQ8wuqJUnV64HPSPMdwm1tNES11h6qp3YtPGSsGU8kMX3o6tczsNx4MYxEfQNg1Jna6GbM7heLiX",
  "key45": "51Cz9BjgjC65DSRJg9eu2579kAwbKGvAWEwnS3cVE2fEN62kCmbDFQHk6RuyKSqXqD293dCBg55hZXntgydnvspj",
  "key46": "4zKZmVmnnk2YA87MLnLFc2xTkoEuCi6E28XrggvqQrCKNJqb1gbKWW8SdSdLEg2rSK9HV6XbMERQZenHxrLySnvP",
  "key47": "4vw5kJmdCLbCdMeURg5vLwpzx3jYgTmNccMyS2XeBxKgkArUqm5Dv7f4SZxkXgsANZ2SPd1q9E2q8swkHTUJaK5H",
  "key48": "3y2u7Dq8tCcmp3Yyn4kKrXEp5Yyd8EKX7cjfzPjVythbHjdihKtVxhde4E3W6TpDdyUXsGs53qxrHhBmDRXfqAgH",
  "key49": "55bM7KNkNusF92hFQ2snAcr1ak8H1yS7sqqviHRZvzfuLmhechuPTrEd32VLdX7gAWn6PpZzG4iDoJxA1gU2ZC2H"
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
