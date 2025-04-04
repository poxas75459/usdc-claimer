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
    "AXEMuNn4SdFDc6keMiG75pofPiXY5pqtdgbUqn11J29HWKqJwok88sZMQ3AWmJBz8nS4MpZWvBjVgkeg2FEYzzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocfvH6xvatHPg5t52d4q5WXoS25G1T3NtTj12kZzDGWviQokfs1S5ZxWm4x8LiNAyuy764NC9dRj1XXk4SSVucM",
  "key1": "4r17gqbj3WWxZ1UTRAgUdzE4L9NJDVLnMt6uganPNCYzDbitkAa6zvvmLnTLKLbvFUSuC1yJGnTsnKRXTx9GHucU",
  "key2": "36NbRBg5VoyWbsrS3ji1cB9z6BhsH1C7rjqaGDso1EYeHSzprB3D1em3Non5w5EYxgThkJcVW84L8jHsj93A2HFb",
  "key3": "3D5ZTHtfYWtRifkJBhkMwKhBJ2S94BDDrPjhAwizx65Pi6UbPL4yGPSdnNxriMQdK3d88NxyXGpEjYaiJSUqBV3E",
  "key4": "2e3BErkuhi9CyvDWM3S2Jez6UELp96DxLUiQJnSkSCVwU1HtMpnmHJnBm32Vo2NZdcpuypgvftD1CzeiULWFUASv",
  "key5": "2Bm4N597wK7dW8ZweP8ga1MGFMV8fAn3daf7avFwtqJ4auyi45QWt9YVSPvnd9spWwbo4nTzvkkCHAeiygzYzGFN",
  "key6": "2MnE8RYEjLkTfhvboq8kViDVUyLfmb464Jf6rMCrrGmt4oFdaZuFmZ7Ewshv5yJ8Uz7JY7c7NCxbHHrJmfotAz5G",
  "key7": "2HJJHufku4PAPTEtspmcVGjf5Pibnyqdt2sGdhFR6545CaQYKHNX1U8YLnuJiJQAifrHby9aC7vQbsRjf4dJMvDA",
  "key8": "29ixgnGpW4LpefZyRvKTbip5wUVvc4ZgrGdk1KKxBFFK9H1JLbYeSDYJZKrBTHRf4MG4pQhbgGxdBgjRckr6J3aR",
  "key9": "57K9JBAzqovbKKCoRU6yBbf7s2sf5rCfppLxSZCjhYKfgikzg6BfMyEyDpdwKhDibFxkDdpymJKx3Z2o5fXAcfdR",
  "key10": "5AsUwVdNutricKwp7K2uRyRDoE3wWXa6krTawmvVqfJ41zNgz7tn6R8PkpuL7XVNEsntdMhUv9DqPfRVwmcf4fmw",
  "key11": "4HtVbLxmoSxtXqGMEkM9kd4gQhas54CxHfYyTDsYdAP6j4EPc4nnRztkmtVW6psKy7Vu8rZq4Byp6oGjpqgAbDob",
  "key12": "5JMN1quwuQCRbvSra378YwUHeiP1f1Ntyu5PqtBvxVzJo5jJLWjVW2782FxGSuxWFEG5u4zHnruBqd4sEcpaXDDJ",
  "key13": "2nJJSnKWiRMwjtboS8BobcseUjJt5VjQvZQUihRzw1cDuMs568kYtxtGMTr2ZtdwujBeRJcQ3krFNGFTTS8hdAMB",
  "key14": "jRcte9Zv6mf7XdkPYPNjeN4fZcwDeb3V3Ce9NW7FdX51BcuPJJu7fMcgFTmE2KR2k3mXm3B47akhya9iawB2AHy",
  "key15": "cEkpW3vrZaTV9bfRz5aj5F3Exe9zCZbezR1XYXnVrZtZzjHFxs8cHp17KMcZQr4fsWpbMi4EHmdrp1M3Xp8gbvQ",
  "key16": "67QQpEXZ42obzFDLDjPChFyP83tDKzc8KVaoa3V3xXPoLz3ZLEDLAyLmAv6pRYUTs9rcTm2aQ4AZ93ZJrfuCKagZ",
  "key17": "2NH9WCNVeJ14GYUwkjzzpMeY61Pgwv4JvzdgSXa21J8K7j2cdTeM79xCEToJLFwLjHARUzRG15mfqZ6wss1bkNgg",
  "key18": "3xujh6PLCC8cTBicFF7U3rqfKY7BWmEhnrk1ffRLYom3jXFuzEMVVS48BHfgcUd5FkZHuFBtXYnozGsQ7gT2QpJd",
  "key19": "4nv3buahmbonECc1Yr7zTZHz3yx4y9QGdauzW3PyMmvZVrjTUwoJTAhFgEWtW32ALNc8v2s84rnB17d9QnFssLWR",
  "key20": "5HpdoxZhGepJZMnJDUYYmNrVkSP4xt4u5p3ZdzvtTmtXT4ndUt4pg3QiNzKSd5yG6XSEWEQedbF8LjbeNrNMZsmx",
  "key21": "2PGpKjtYJSjbWrhGApmumBWeKrdNevgxiELi282NCNx82EiNktEGmoMhGonfckkDVoAfWNU3dQs2JAr7Pix37CJF",
  "key22": "3VwhmzC2gTtanikdNV7yLXvekTFtzr237BZgXQBn1Km2xpD1MTzgnut6WWBig18njsWPMSYYdwPSXck38DyAh5kL",
  "key23": "5dRUPqixLeoo9m3d2UDGTv97VKgigAiwUTbmKoRmFD44796ANEM5jLHPRng7S6XqD2GMMtLDp8R1yRU1nN4k6N63",
  "key24": "3vD1xxxyNmhvaje7nAq99DPN6M2P79vUjXZ8f5MiQRhP57z1dyDKuS9Xhed9KLr3GXV6SJCj3JUH6Dwtm3DXc7Em",
  "key25": "4Vfv2C4Jxxkckt8aWtSB2WFjQ7Gkux6uzn7aCHxTGiAW4L1BnbzEdMFF9vbj4M8imxJ9c1dhLAwhHRLSqihBfHgg",
  "key26": "4KaXxEEVThWP7JHpJWxgviWrBT78WnMpgMFHwyL3hSVNxvkoWkmhTZnZN1iFhsDRo13ncXhBwnQPQ6P1wUgMhNN",
  "key27": "3kC69dvL7c5Fy5yMq1W9B4QYTkTnYDneDoDWxNjJmH7uhWREyV8V6uRXKha9pP6NVJHVxX6TxeYERDHZFr1EGHow",
  "key28": "4RPkMddMUHq3yTU7sbBDPDjZbcjqW1mgpRzg97omLTckrGzyTEyU3jCXK1ovi7U3RZMwhCnvhyfyAnCUtyi1Apvg",
  "key29": "5iRcJ9nbGujs12uCp3ead3HMtRUrWqgTsMZhtYQD5aDyDSu9FgMqMGjxjjTUPUejnNpNpxjBU3zpD4zyxFQq48M8",
  "key30": "83y4uaSySKrdVWNUzwZZbrsaoNNrBJdTUEWgF7YRxrcpVpaHMjSx8ZXQLZ3k4TZG6CF7XezWteQmwxe43z8SuzA",
  "key31": "3Q8aYQMgvoqpBDnuVxhX42gH1KQPnPALsMbXyYnoNbfpJ3SouWUPCF9LtD8dAbyCjBbmnNYDW1z6FAyxpJ2h4CL2",
  "key32": "56c3C6GggU4wpgB2gNEefigKJViksMdsnhongvb7QdsmVHfc837HUHT9pNSDEBjumgMcmjD6ExdEC4ByABmQq7gw",
  "key33": "38Yj4ziuPyz3NkzsycatucQ4C3sJgMWDwX9evcd6Cetj1wnaHou5diMnZTZacGWbTobQowDgNcVsYB2c3J3crVF8",
  "key34": "yymcfxUmTx8aeR8sQ8ATKXu5uRZWhZbcXGtyuo3tkG95GQXMfjwiayUHBMR63wXi6c3amZ5vuz5GdvHgUsnrYBh",
  "key35": "BLvRvxQkbwfwGAUnSMNqDds8nKYuvHyirXR2z21sPtgbCnJpC3XHRY65JivJhX71NnLPvpkEUVboVWm5RnuLgvS",
  "key36": "3GJLz8vosrkr45tuY3TyDSiUSruFTbbnDNZjsgBY7K7TMnmiCLVXCuPQeEVz4kzqmofwLfKJNQc1gjS2azTrFZEp",
  "key37": "4fQu69JHYh18vwf4MWxZ2pkRwDxMvQDkdFmA4R1BK6RxGCJP35hjJc46YXNGY72vBg5ZnAEtucTY11hWeN8qzHJG",
  "key38": "3C6AqVcSS9QRqgd8WHUQoQWFkczfEfzHAJECZjFX5K4VE7UvTGHE1R66QKq5JNime6T6P8p7YGe7N6Rfkw9LUJUp",
  "key39": "5UyoCyXM365yrLQ7bdUZXfK15d3xRHzK1jUYxbeqjUZamH2FTPQonC147reErSGQKQkKeo37iCUd9cXnjTGfvKbx"
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
