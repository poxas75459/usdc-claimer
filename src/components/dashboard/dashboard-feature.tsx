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
    "3DSfTfTvPo51VscXNXnngjxPhS4adR6KSUnoMWCtyig9mLkkBUkY4ovVuuZdKrW6fULuLbH6E12M4u9g57xLL65i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxXr8bRh6UTcnSagKP6azD2zz6QbXGm5YHduTpQtcpuF34ZquS1WoZGjy9Jv2D8YhGMMX9eC8itk3m1p3bBdAnc",
  "key1": "31pfoFigCkkdpvLSVwQw7R9b1WNHjPFi173xoQhGuWW1HpgUk7ZV8U8D55RBpbQ8MyvaJZnZJ5J2Wo5usNKcDmDC",
  "key2": "2uiu1YGWQ9wiQN3LNBn4iu8zRRtUqGR2pfMSAmjRvHrjWNJ7V2RjfhBQSwJhtWePDko8zpA95c7Mo1U6bkmkKuUF",
  "key3": "2g64JCcC9wWY7vJtfa7YpoTxPwNteX7ujdnhUb192gstsRk8jrhWqd9sUtVCZkfvriEKZftoEtFgnga5HmQZ3Tjv",
  "key4": "61yDdJLhokbSoLZX2FKuKnqX7Jd8DFYe9Gy5RqZjycGZj1T4XJ4akMFnMi2CUXG8Kg6aD6Xwt31DEanXrmCx3XPD",
  "key5": "NehK7v4d3qeQwjqg7r1W7zA5tfPizqJomBbz6KffEF7KYQBUQQuMfG4SjJDioPba2cYL2DffDnUuEkFQ7cR6Xtu",
  "key6": "33tq4DHoxPU1EKWzgs7K9Uf1QXAG23uJGvggBYELWcSxN2F6w4x4FbeXweGtw3fvc6GpNZm4psUBNaYpN2LZtazc",
  "key7": "Eaa58T7NyvKC96ZaAdtCZzomQgDh429RTJcF4Lqqy6ZYT6cMvh6q4EbbG54RTuNw6Q2GPHH4cLa7TWZjtXeNQpW",
  "key8": "4AQ88SRMWtwfSEMvroYpeFgRQRvXxJFvQyeCTQ74WsaYZ4eZ4Mpufifo2NRRWWdfZCQBk4WGzoRDf89RbjeVs5iR",
  "key9": "6EN2r5oyUA6dXU9wXZqP2AkBKG4PKhHdy6geqSLvCSDvfaVU1Uxg47F75JxF6GzQVwTQmjFMD9H3eQCQctVYX14",
  "key10": "2RhR53NZVawNgZZUG2apdtkSkKyhY85M8u3aPLifg9ejTbfutwXQsK8sFfLnCh5CGaz2sAhZ8KVZd7JkZ4t2hu4M",
  "key11": "3gGVEqweTA7F8A7ywx5T9EgspTEPrn4QUAzguJGfAFkDbGHBLReQqrSwL5mf5WqBzTFL92dUQaPGoMSSvwFo9oCq",
  "key12": "5TZ7bXaQhuqJSjsP71GbcMy7ABA9y1y2TBVsd1xjKvWUJFbTHjY46e1y8CQDZwJR6hkRWn7Qth5KahP4SfZjnoMh",
  "key13": "CyUgkQvgeApGqmebKzbk4HyKmuJqHNXfcFSQV32FiUXL2ord5TqzUM4AtUs71u3zQaat6gornVEeCTyE8WWeb8v",
  "key14": "4XvT43ZhHEjtnJ4L6q7pq3QtrdAnoHgrwtJBGo7KeFdNdkK9hbQtPZP7VsT9tiVv4MzRsvrxXHtkYYpaDg547Wst",
  "key15": "3MWJnm8cJtAKJD3ricaGSN7FR42i9MP38BasfLrB9TVcRkrLvcRorPCipPqSFnQf8mfTkZBZYFXbjJ6JQyPNkoRF",
  "key16": "aJ7PTn8hXoG9FLnFnxUgdMP4o9Nw8AZwW1Fz8u5n8ZGhvzzLAhJy1c8TnKJnRvnbaAHttjxTSuwWkTuoYoAc2Dk",
  "key17": "4AZeA9MQuJJHXWAUmmKPA1tL2yiuewMjkFR3BV8JHc2pZz5CjbyXHLjTAd2dobW6oWav5Ya9BrXksY6m6gwtPAW6",
  "key18": "2nR7Zza1WoDQvY6421J7UCqeFQ1KNsupWkyQqKGcXFuScfnTvcCbm56REpG53FHxKfMYoB17YmcokZgfdAgYqLML",
  "key19": "2fqTzfpzBb6whyv74rHR5F6Yx7B4ptK3138b2oETmfJEWDto6JUG8V2bseQj4HhWy41qgQEJuzYePTp7R8nGkibr",
  "key20": "5iViktXGXmdRhyZsGvzW825mFkJ6RLMw6dLYY4cZYx9RPmiK8rjt4RYqFaC14SNZP3ZXogu6GALm4fbjgyB7jf17",
  "key21": "4T8LuYGVADpCS7a6uipzPX1SUNuQuQnvEurYCSyJ3uaK1dkHxuV2gDqCchCR2MadZDX4ULWdzoCbLJpd29K2bhhM",
  "key22": "63dHYEBLhfwCZUQ9bSaQK9UpdqJJmRgygbnmtbNwQEv2fhr2oPQu2HRxcWSp1i1wtcvMfpUvhwNTAhXWySdSAGBz",
  "key23": "2DREt8x2mjucs9DUXJYSszUZJ1wpJCvax1hyheAjNdTWSg97D4tKAF97nZ9bxgHQgaJGtk2F1jSKZoxYz7Pigedu",
  "key24": "F9DhkCq8Zj7HhvwusHc9ZJRYsqKxTAm4aBAdTs3xHjS6DfBs79bSSun6FidymxxRLKm1ci5F7ZKLpY4UXTotPmu",
  "key25": "4FCFCpezzGF6FU8EzWXyjFw8vL5DBHZFFKCKihgqomgZJxCRuACJ2zof3mUahPJ5QYggWPXWuguEEjqde1HPfM9o",
  "key26": "3zJeSrbmnQSZdxhtsfZdKs3AojPT8YbZ85KngmSef5VmuAAmEgtuvZCdGXo27yV8TgT7N1GRyPcCn3RGFYRMpRfq",
  "key27": "3MuHWhTsAHAVcLKgW4MjW138SKTVz2rKzgWdtpMJfmw67fiJXLqzcjkp8NxSnUE4MuGcDVPWZafvhEEQw9YAypPe",
  "key28": "qWCq487mYBGtbQ8tALJV4MDqzUrAk3xvZK3U6GTtdFwheDTmjoYyYd53LkTVw2m45cgp596qpdwaX1F5TbXjkQX",
  "key29": "aAFS1Knv3d2bYmGMuP8r7yDh56yvV5AM26uqqj8GUbgnYtHKc3QuESkx2YiLon2fNb2M1DYQKw31oquNMg25cbv",
  "key30": "Z3PDysmg7XFTtbBzcGH2wrEF6k5R5k7XGyVrYSYb4yBR9wetU4ouUXaAJMQeAwkZHK5pSiLsL7km98DfMV5nouw",
  "key31": "frs3nZuRmAmWEKgdXfyhUcLdCoCJM66CqWtKk4edtc44RJB3M8tQb52WVXjFPpukFueh44sv5jtJnBZBwinL1f6",
  "key32": "3n88HC316AZRF9Ddxc5RKsCbcc5CDQtiq1xjEMiUSp3drW2YUyNEGQin9PM9WTyvVYvvDoPVNo9BhYW7uMxQf2pq",
  "key33": "2tz6jSMtUKDTnKCPZhBycZf6Lb6VgG6sifLMjRSH6SB5HaeFp3cVAMzJGVXjtoHweqzxhYzvRrHYxXy3B1eFBMYQ",
  "key34": "3pFGEThaPj9fxESMp3m3dNzVsx3r3fLqzGbu1wYwqrYZYiinV3phx4hTo6AcYZHvDU7QWGkDRebsDxM4TL2TUQiV",
  "key35": "4dZeHRwQKDoEy95oRVuyYFpzr8tAqyAeMy8vNUa71f7zEbFj7E2AvHFaUZtVLdCeEh5tBLqPEjMdnDETaA16C4sF",
  "key36": "5tvJHEALscRuch9jNUUf3Bk1kRpS3vgWEJ6axN5qqj2r7qPber5y2uu1dpG9R9cxFMnwt3aB8ecz2kGjtLKGKHUh",
  "key37": "hYakDYsfQxoMxw6vZ2CiHimaxMrQhpHiRhohxoQvAfk7CmUuk61jmno1djcokyBXjJ3cRoRdD31SwfLwWBQta6b",
  "key38": "3HnnvVnLV4Ap7yioJ1AKBafybQkBQZ54W5ULfGASzYLKS3RRLgG7UDQZJEGFrQ5NigzoVJ8ZQziaHiR5Sup3KBq7",
  "key39": "51y3b5Bg16WTeQbr5t7oHhHMeaQ7egpMkE641uMHdPRt4Gf2eADwnaNM4P6c9sKFUa2vTNNUNKAm7hADHa72fnpF",
  "key40": "5hSS5kY9gap56knEMbL6VVTqCmkKYYHZrhi9wiJd9HysjbamFRSApQtakmSXdBJeidUBon7JihFpTkrrfxKL7Rc6",
  "key41": "5uZKma3oR6pR27MMxVQHtGnhVuNwk2E9iKVHWtD86Cv3MwJVcNXb5JUiQcSTGAkNksHTRtTq5mCZcEEucEpfDWZJ",
  "key42": "2bRFY6ENKLNDzMgpcWQ3dsebkWkkuJ2vcrJ7LtspGkFEBzGP4tRhaxnw1nFVPeSuQsFBcoBhd45RWdrFtksVfhF2",
  "key43": "4k7cnD6NAs9eSsvwS79MR5oRxokmvqMxsZ3J3eSGrkS683sN5W5bqmSSBg1WW3XKrFnec1xBEo7d6TTKjgKn6T83",
  "key44": "2uBsWE8gYcWpBhyGcn5L3Yn6vHbkdkjhjzxQVCBZonroaXfUFS7KVadYPfBr9bZTRv89iZazVK2kGx3rQBsXHdec",
  "key45": "3oH27EoZBTKytGBSdSxouRdbP8qoZHJvV7qGfd1aNdMPDWJ77DpFH6GG5eRbLgADg6SKLLXhN44tffZTotuZfMs4",
  "key46": "22qHCm1zWjn1ZmecEgxgrUmFbG8AZ9uvtScNnmAnnnxW7DdQJ9YpvRvmM5rMb79pWLB7zoQ1ZQsUL8YHNSXMEmxx",
  "key47": "5XxTbHBvVJPq5u5YFPNVpJWkUZoTM89Z45GkQHJ7Zi1s8d9kLzQgQVd4gXuJtiDHNQqanidtf7vTpHwjyTEK5oot"
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
