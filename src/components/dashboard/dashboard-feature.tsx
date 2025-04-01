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
    "47dsUrxR9wRk7t7Qrvk4y3dFpqLrhwTBgDKrycZkA4oEBT59aEdpgPvELw499dXb5BDzx9BbULZ14xWwHnBKxZRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugVqtcDtAhhRmPRY2h7imzfgVoTghXddY4GsXei1voTqY1hr8dAXfkLKBpjNwdaJorL9X5fhysf2Y8T9FpHr8Yx",
  "key1": "3EZ9WmYfRV6n5VBdCkC61ww2k7t2Lt98Gf1U5aNQAMfU1rpqVFG61MN3j77icv3rabKNwNPCM5i612u9AbthVx1s",
  "key2": "4cANFqo4TdsbkdJEkeifRuMPEALsMR1qi2cZMCAbipDW3yrLNwZG3F7vdEcHBJVseSaoSdZhZ2HtiD1eDwuKLNxB",
  "key3": "335kmbgELvNoVKtRYB4fqkSJW7Px9MMMGBkqqqQG2S7t6mtPBGcencH8hxqzXjSpXaAb2UR6vKeubJtD489AeJ9w",
  "key4": "2By8mg5bQP5hJDwecYnKUXTQ1QgwzXS3vBnNwkuwxZbggTLT5PJ1Yr841FXAKjHm6u8fD2S4rVB9bQwFKvMVRYPK",
  "key5": "2thumEWYZPB6eXUwcPtQb36epSR1Fus6ah6ZAPDhmKTFnZ9NZznR7gs1Bb9dz5vt5mHvBX28UMP9EZ3oQve9hPS6",
  "key6": "5RQjrW7F4nBHGmvMbVTAVEr1eHaokPgX7uCeP4Xqshuut7wjWjQErs9smuuH5rphQj8LzcVTAcqR1tVBgz7aCdhZ",
  "key7": "24Gs2symivUtp9umwBpwE4wydsJde6omRsmCPZKvyXUwxzbJBkYG46zTPvDpgtJefedAVmkCo72idUaZMJ3ey7Gx",
  "key8": "4kh8CwY2fEgJ9Bzpsiy32ATCQi3sc8YwQmHbonoUj1ktTygsUeMKLX29xayTffpdqfUYBXtZShMH4gAtoDi486WY",
  "key9": "2GMyf12C7SXveEMXgGD6awgu8uPQgw5KPf8AGPWwEAE7dafxuUWT8xNg8bNyshFqCNJoZqpzwBYFRv3eMr9nhw7k",
  "key10": "2ZHxFYqdCn4UoHFVAQ32K5bhGZLDKqUjCwUYAe6i45sMCrDkZedXCy9gia552xDPfLc2xyTcYKkFoKQWsrqnABBq",
  "key11": "4xaekX8v6k6m5tX1Zz4kps36CcYyKN5ccST7cjJejTGN45BZUoaAvjE5MgLvW5uawVMv8d4GHRyBDELyBMtFKoXZ",
  "key12": "2uNJLdudPeSJcVeHe31KwM2ffcVxfX181YGXaFo3D19bhrAkCriTYFgJgcEcZKwyGaUx4yHNwi6nT8kTraEKC3RC",
  "key13": "51oeV2TT326jJ63wdPZ9FZgqoSyrEzQpbLuRBfSMXg9eYXKh5WKX67nhkrEGvQDR3ZGmrW9Hc37CxHf5CRjvWbDL",
  "key14": "56N4sAEME7jRRwbfdaXy2EWHtvwMDwhczpvfvrZepUnPRzfycGU4KYU7T3ydU9oELvtNpwk4eh1m9pbRgu7Teytp",
  "key15": "24EJjLeFTGgroU3jP8uCdrijWGgP89nLh7gqbnAfJLTriU1NPrqyQy8qSZdfFeSyDqgHp6KHXtNoW4rFuiYDFrcG",
  "key16": "4BDiL9KohZcJzPCcvggmS62RXJkzUDU6HA8UoSPCUQLRU18uTyCFap65z2tw9FwuAGxXmTvN3z3GgcivKYihhzkF",
  "key17": "5zBUsjQYHHmNzAHyJUXwUKoprFGZH65bjzirgyYxffBLxdD8xqW1335u7xQgLHoeANatBosvaR6M4UtFAF7XsdNm",
  "key18": "579oiTeZVrK6E68Qkw4wBDoRgDmF53QUzc6PXZpmqzkiS9H5Qk7WJ1vLuDep2Z8YuDXyHugXKmc6a5ogGSr2bfxS",
  "key19": "3PfrcR3Gpz8Zn32Uk4Ca3wAVPrQ1MrWyrVSU6zvGfBEjYoz8oaVN8sgsbHYwG9NN3QFVnYTmZXa5AdsHNr41req",
  "key20": "4udT7tZepHcL8cwTXqqoqqiDPZZh8FVHsMZ2Hc441eP4BLNDZHSWXsUkSUCWL89yJRTL1BFjqzw1dcgrcGP8isBu",
  "key21": "4z5hzqn9dv2NskaaTo5VgA61Q9Z1Wrh9gRHz5RgQpeaAudY1hUr3RkALhX4xggEAdbyPWm5e5K6yQBoqAodLeisP",
  "key22": "itgemFngRoHiweE9PDvxLKA5WJpBKBSrEf2sGgYoTxcoxizJuhBBeYYxc2mA9FqQD7N74EdC7i1RFoZVXkU5DoK",
  "key23": "5c3bdsfkV8qhJ9msCnMVCcK7xjDjYr3fF68pGSqdQ44pe2sHQZVispwzpNss9xfWCKmeWv5eavgzSSd7Y1YLXTZq",
  "key24": "2aCShJ7LLxRTg4dQEiHadYHQABSDhomtfYRerAcwd6h5rn12iYSMjM6dprdGJ9FDvtuKAmxTvrRFMQ9CUQ96o2uB",
  "key25": "3JcQSpxm8fNE7hyjZJfZAydLNMBVLgqmbyeXJUsDm9jgoNDK2eKtEuxCHaDUTCqy9eC283fahfuLK5JXNE19rE2L",
  "key26": "564iCdxNa8tniGVx6LGbRAQsvdtzQrupHtoYyQa7P1CCjMeB5epdYbWNKHe1CDZ6meUZczjYzQsgExux12tmJQdf",
  "key27": "382hMgwbiFmdcEhxyeKJkCQDSNLvMjCs6rYcjPu8a516ZV3CcUnWFP8i5Lr9BzyYHgv31XeyDZdcvoj2vrxLv61v",
  "key28": "xsPHrCvi1prk1dWxQuZrA6bS4HFcVwdgqn2LcmFVz3ehtgqekZUndeWT7JB33GdzP1R3NSxgHhYJpfCdGtD1p27",
  "key29": "3GGb2okRMJMUEQKZ7K3i3Vm4ocZ2a5EfiGPrcAfVgsb9kmyiPMXZYcDaNNQVWxs3YUJHEFRHXAjw5CDpyhHupEBj",
  "key30": "3swKL1DNcd2RPnjup9UWwQTSKVawRLwGKFfkudiYACU92GyfDNFZj4kmaQgp3xxUmDXELgyJ5sjdJKLno2xt6vZt",
  "key31": "2YbGgqM8TvUPNPsJco7vWs6VgKYdb2QmVRB2QdfSNtpHJzwCuADCpwgCNPkWDAhnK5tnbtHuFm2zdJ3VLaH8wdsU",
  "key32": "JNDw8DYYcEFya17XwM1xUBgQnSmssR8ZWa6JFrG8J3Zaw7ptcqMRZz9p5DowHoWCeaHzBUpWKdjRj1w9zYSGGBg",
  "key33": "4a2jpRo6buUjZTQBsjFXoFZRY8VTskeQ2GeBtzcwTNBoRAUusZym1gqjDo7uvPQ4pJNgV1L66EgLpTmE32ryFNLb",
  "key34": "3zfLCsp9uRE1Roe11SEeFhnS8AcDkC2c6EAyLDenie5UBpSk2jUFg2QxXv9X3xUGEHsQnXv5qLdQRX53nDwPuV8v"
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
