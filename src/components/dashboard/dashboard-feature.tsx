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
    "4s3bFRnieYbiiFbwzuK1jzPDRbnE9YfWHDveMJvDdtDoSxvp62ogyiRGwTdGWfTP6jNBnUDE3D3WnzNh7kLuoaY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5outtWaZoA43iYjr3t3vjbUF7nm7cSyLqXLXLS36NEBNzYrYn3AW7hs3MatQUGB3258L4Qxnb1ZKiyvtZ9UtKr8S",
  "key1": "2HESntL4SsZyYUADJxdgJFvSa2jxwt7WQncrvMDDfyN52WRkm9bPiWsTj7gchVAJhQH13afQpfAbSexPRm8C7SVe",
  "key2": "4iQr2oj2P3qidcVvFiwzDAdZ6hEPaJXnBbZ4ZptQpW57NwUJss3s5V1WvNwBQA9cwrk1bKbvNxW7y2CfwU2T9r6z",
  "key3": "61ZCG7K5DkLFdrJxMgbSNr8nVH8uRBr25eSbpUf1gQ4DaSuPz2qNRLyR3hLJkivt89LBd2mvfLoGPBfZRre2ZZf6",
  "key4": "5P1tZfJmqSQnyjghuFTqsmRLaXRkogcSBL4mTZTxgWnezq8Rbd9ndVQK3e16varqSPTt3dsiP7jpuATB2CXyeMtX",
  "key5": "5TcefWhnn4zqdEgMneVn3vmns2xrE9TWNnnBjt2TVE8ZBydThqvQ64HscDj7bKMpeHwnsnAt1bQwi2p1MALuiPTi",
  "key6": "3di7nPq41p7SmRF2bhQXSQopRWvTfaY1sVkLNEa6JaPEdrYBvkNPRKhgcJqFqT9SZP39T3ytpWxutA4ZfdPCeQWE",
  "key7": "3xPEfL2Ny8LjWXfpco1SWXnBtnKGrVTQfswqdmNjgSW6oz7FXC5AZKgy8Ww2BAY9Ava5vDVK6trbsCRJSVbP1sn",
  "key8": "3WQVWTwMFKdZ1PRoj2LQwQfEGCwvjgY6e2v99HnLnkdo4zjDMdGhoaGi45j14kuKPqYeURrGi5hUaQ4YFh4oY1Yg",
  "key9": "3ZRrWGbiJWV5nhcdM6Byx4ny4FWw9fMbqvbUP1J12UbpBC5cDqeJHXhJETbm38r74V8drTLtj8HLe4dMSToj18YD",
  "key10": "54QMzMAMUJ4NCfGSTWefmEHXip9kRjbGaVWzEZiM9rp1VvdVyUcY5BtsMpiWSZ4yQiTCraN6JwcaFetyvX3cugma",
  "key11": "552LFX22vZNMzpNBQwcbQbuTVFUim8TqRnt6wzw1TUGcBgScq9THjfTNM7VFrS8Qzx8oWENaGxL4SNig8iCreBj",
  "key12": "9rddGKR3zmP2pwe2M3q3vK9Eh5ArRLubRakYYaw5HX3VXkjf24demWExxfS812q6hURLnasC4EioqgWD9i7WaPc",
  "key13": "4tdQPupatw16x99AtC6HM9b6KGtSkRY5KebzPLWKrxYYxDdDMhATzXidMYj459RCntkfdBMSNSGQfkbpWdWuNMbQ",
  "key14": "5sQ9JDCQyDavNDEaEf6uUaD4q4c3Xh3o2mWeHzW7UCKHC2MsgSUZnj7xyzJfefLBNqgejCfYSM9z81ZYND5p9Qce",
  "key15": "dKjXzJLBKQqgT6K4MozKuadzHLSjNovqZ3xxe3jV6kg3tNLkanPsWtecdNhkwDQJpJiL2nXCU91JBnnVpBmEqVK",
  "key16": "2RJRQ3FquGvMAfMRCgEAnJziWvHG1topzBtumaCcudQZSYhYxFTM6ow4X5Fr8rgYu27dpN8g4dgKrV5Gx2XD3cmh",
  "key17": "2zDztu432cccvLCJgPXsefyi1qHWVWNopinnsfZAF8DZ4LNh9H1mkAipLsNqS8ZAkvtuHWxG7vnPJAc423jWemfh",
  "key18": "4b2Vq6pfxzoCyzQWTfhz9k4uisPmNQ3R32QKeDtWAXitAgkYPTnVWSs9MdaXXhYYL7TJ7A6NSEH2swqC5Khfo2Qv",
  "key19": "2CumDZrmH84QcWKUSM18315BowGLKhd9Dawq3CZgcvPGXPmWgRKTtPQoU7jR3tEssHH2nXbSmwqKKWNGdKJzC7yj",
  "key20": "3GiHHFCMbC896MVB1VkZbrTQwbLpvFgQkyFwFApLvg4gzcUYcamTHymMvtoAauXcorPwPv9joH6X8eqSRZULhgmz",
  "key21": "4CmNRsmg2TqVBemJ4sJMrGXM7hrjAaF5dN1qfgzzK8ZTCftSkP5nuadU8dNqWcYKmz41xnUCXXmoMSoSo4wv7C9Y",
  "key22": "4iGkCq61WrdAGE2EXxVBfVtmjsTDrxazPzHGdFmWVNxafDP8Wf3cJhdad7zqiW6NTD7qBwpo9CQCCQ5tqL32wSFB",
  "key23": "2RYUPWwrSjmpEFLB3CbwsHbr6xF2vFHEZJHXybxAmgy836pZLAmNmJqakhXsUD4marpXphABJys4Rmd23pzZa68p",
  "key24": "5tWEeqduJ3DSkfAWHQiV28SS9JEj3cvup4EvEhPNQ5u7ckLHYHNM9zWpbsqWvEpRfHqHwvYZZ4HFpxuUhfnYsEeE",
  "key25": "4nTv3RuKjquLvygQWMJwRnUPv5CZmmhw9jNt2GKuj7CVpisos8XeT6XXGxmiyMR94rUASqYbmBcA68qPU6zpJs7b",
  "key26": "3KncWDxUvuT4KXhmXFRY1RMQFxRvEhgAJ7w4HfvnAUuBCAFqdvm7jDMi3m46Y29Qsgb8NdJVdY8u6NG5iLqS9gmM",
  "key27": "3qWro231HFSRkS4m1PwFxrZhVTrx7ni6KBMKin3u1ex62UCuydCF7C75ssJFfD77zcQ3kVWYPjDwwCTViBnb7ANs",
  "key28": "5PFugcq3jBo6C5M9bjNL2gNskJNRh9G9zV93uFSGP41J6qWAnJopyWbPMaanEWy2pMv9ePggGFz1uKHeiNiHcctc",
  "key29": "27FEj9EvK6N4TFhy5kh8vC5mFvoQFYZwgZyjpZmEP4YiMyAzNjVbGi5cxqiMXfAwNq8DxiDKkefzgggtFCGV2TkC",
  "key30": "4RZWi6KqSUt8qAAjRvTMeb2uJSvBi8CjUnqC6xBMMb8jGTRM1wU2ZdSjYtZtEAv2mw7YsYJXPcVk2nmia6JSJVdc",
  "key31": "66qNopJhyDQy2oN2Rk1UFXhdbPkg2aWLvWF1Fsxjxbd7DEK2fbW2vpVr6QTCXwgPALoE8MWXnyQE4BsEYhoSkFcp",
  "key32": "5XYfnRhLsSwKknJNJZmj9w7ZZ9dPxAajpdnJV9dP22MqMV4XnyhvYw8vPSoy9u7pHmGCS9jyQxpGgum3txxh4aTu",
  "key33": "2UJMPDVwgVfp3YMkCpNxourXD9MidvtqpLs24FguRhMmb1bahr2dSwaiGmd4PYuCSaTBmrRWX2coD4C9DG8RkCPc",
  "key34": "2dUHHQYXZtsjYawgQy1a7cH6C79Pa4jXqkt98xWkwk7moboVyYSFmhLW9wsSMCMjna6qBrqnRUg3f9GnALjpMzw4",
  "key35": "2peNiSAzcakxf6R8mFuT1pawY9o69iGM4igJuJKrNNX8Miz5Etx39tajHfjQhMRDmYdFns5KGpm4FYXUFk4B1zdr",
  "key36": "kvmKRnM8Y1YRASzG5RMuivp8auf5NvNu1iUQEvdaXVGd9m355RzwYCrW3DtsCCLyL3tKv9nYDV2z8d1mwk42WKQ",
  "key37": "3F1QK8V5tFsQD18tyYw6DTvMvQfnv2FbMHASdvWZNHuAdqxzLDDoFQDcxmFy3R1mbzKaJucAF5WYegZeTvoAViHm",
  "key38": "2i8zPo8VLqWS4SJJozLmb1c7k4hSPQ3FzcMveTCi38qGAYmErPe59URGyddKNCE8TTnjY8rvKesjf6RFtww6Wtn4",
  "key39": "2DKrcEEVqmbqktnpfTtfFbvV1qdhMYvXTaT8ysJBQTu1dU63HpvLDkdyoksMPiXRvM3YLNfzX5CGBzZiWuhoRzQM",
  "key40": "3MiAzPjVNLwoUJn4QsKgEFkiswyLjXscivWvHR2gdXxewJz33Pn8XRQc6Rze9nPQzJw86A3P9am5mEFmCzcFEF3P",
  "key41": "1s5uMCTGQcyTNzifdnncJJ6rGT416Anjm5zFGRqWLCfW3NJirJ3JkZ6mXWmTsX7rh2NWNVehNdtsA9Tdqy1UtVZ",
  "key42": "22XAJu8HoFWo8XQrpJmUgpM9hz6drW9XHKFLNQopaAiHa4m8G5JzGffcxeFyeYma5k2VQrpTh6ieq6UMwh4gWzNC",
  "key43": "4oqebAynMxzYfaDe2ywV9UkPC5NCCayoUbbkv8QVe2TQK4M88LcBUt6bLaXPx2LUJWvxaEf6eBT7x6raQCF3fhZR",
  "key44": "4W6Z6zmANK7XLtzzKC7waiQdd4DnqrWLeQMuyJSBUKFPjZ84vcW36KGM2zLgpdAPRvhBpKmnuYbApgEhwyy2p5XV",
  "key45": "5UP1HR7YhekVWG6Qxf29pkMxFMXMuzLHQw1Epwqmf5KwXrVxTgRjM5Fv19ofNSPwGsahZWmhctdkT3yTafb9t7sB"
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
