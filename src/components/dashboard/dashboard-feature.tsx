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
    "2Ja4gNNW66orNGUUdBHRDW7Hg1qqS5dbcZjibQkqbUaz7Hu9ZVNWLm8W1BE7cm7fuJb2HfT92TwPadEXZWVwkbkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N7CLtHzpEqjkocKN2mMA6voMMFDTEABVpBbfnXWSbJfZ9WKkMtUrYENUokzE3pt1VuiinixDWwqD4mRJiEwK6QX",
  "key1": "gZfvLxS8K94dZQeKMAGefoYCHMzD7h5XGLwGkMQCdFxV7K3FqntoSWuodz6Ki1tDwE2E6K4qcRe2x6xzvr6TvkN",
  "key2": "4tLbjSX8Ehym1PdcgiDJsTRXyMms97jspnB4dsKkJPt68nk862veRE9sr3TEnwqvzKmzDpPVU8XsUc8bjUbgpS6H",
  "key3": "5CTedFcrn7yJYJGD87Ff6PMMYQGUABeWbhiBJsNL7MomNyPLpT913DSdoiLTuCkQkpVLRSfAuzJwUVKvEtT9nbKV",
  "key4": "2vjhZH1m1HZ7G2Ja3L9gEach9AUxRZBvsiyNFXiVTy6UMGau39Yguhjfi5aTjFbQAX5TZuaQwTU2ZDHM3Zpdqx9H",
  "key5": "4PPQKg6GsA59HkWY2rtgSC6x1btfNAMyKBkNvLofMvTsD87i4mTjFeFyYE7EybZgQXhqFGhY92FiW4FrqvUi8cE1",
  "key6": "38GzMVwMixq9p8aMo8xKduLn2g8Z9KkbKpn7AhexQ4KD1jNgb7kAe97CUygZ4YypSCSBBRUTN3KYdZyDp8JsTiD3",
  "key7": "zNSt1a9b95LhFSHR3b3V12B4X6Z4fmYAecU5g9fYxC6JKf3zjh21PmS5eEH2XoApxaGWkvVqsr8RM3CHF226m7G",
  "key8": "348jRuEuutkDpYX3oUQpeBUryqtGzm9G5bxMs8Ppzb6sihUhw782GbSCm479Jek2B2bJRZa24js1arPLKiZe7DUM",
  "key9": "2pCaqs9UqBke4fmdedbz89o8aYiWwH6DjzN1bhhpw679rjEEExuvAVnRbwpcbyh1jEzidivEv43dTpL7ekNH8em7",
  "key10": "5Zpx1cvjZcubTF25YWH3aeTGyvYESAemuEQr82dHgufxmMHzDxE2q1bQqgrNGM6Za6m3SuTYkh8Kxc1r9oScop4r",
  "key11": "5rdAfhLxiDGXwhu6TdFjRdcLAbNbWeyqpSMbqZB59KzvJ4RnGRELvJT5mUNVsr8KTFJV1DgND8QYkDz51vZrT7HQ",
  "key12": "5XqejuPMKpu9enMkQ4WNkAsDK7CyN5BrRmRWTeHxZk4UMparUX5kEn9aLS7u2M4rSxXGTQVfi7xqn3QNzT394Pqx",
  "key13": "5jr8DGhN39dtNCEoWZQYb7z9LahzCRv6zQJ5mMPsTdhBSN6szoLttD3XrHZTsuxWQrwzRSzmdvzrP8qRQkDqeEjk",
  "key14": "62T9ektMtTAo9Yw4hApCB37Yc762nFs9U2ggayZuPHPvVnUn8DhKH7HbhsmtLiBbktHMEgXphapcZ3vXgnQHkXvB",
  "key15": "2LkQD6NAhYP5FicJvavT17pWo3rht9ZVrNAMfk1amkbmbNdB3cgsaiEpwmSBAKq3dzsfpn8EgtEtDyUh1DPieHNL",
  "key16": "2UZstFEDVtoDmJ1M9J9EwPBCGtM4ZwPNnd3644xxPHG4aTEGSrkmvTwBUZahWMCAJcnMBsnZ89hF1XMwMG8Bb3t8",
  "key17": "3uwYz41Vn5rJ6zxYn2XWF5Wff24V9wodTbobLGwSzLiA5d9Fe512wuVziVXC3ppt6DbHEkFq6FQE6dwJWZh4hSaj",
  "key18": "2oTuThE19YhhydAJnF5wKPYqrqLEoMrfewYcS8DetJKvCNxJKcYzPCgTHUVDzH3LHqXYV2zQKHyHkqtuqLHbjDMU",
  "key19": "5oj4oz3Y3LYsLtkAsN7QsUnhFDKk9DQNRhc7yPj7iBSvcCUUhNb7rmLfHd9nW9EamhnMJnv1HBXj6A7SxWd2FU9a",
  "key20": "3ZmZrBA1YhngzX4pekFCL8wSR9ouMLf8RvHAPpbjy4vf4vBXE4UfePAf3Xto6iCQTaycQ7m4q1iWxrG1Tn2oMbv3",
  "key21": "2ZCsDNim4s3jz6xr4MFS9pokgLHDEF3KhsCYKBDVyybP1voM43Leq1sipoqpo5tCiMUhigCtTK5hkVAE7DVpdkeE",
  "key22": "4DVvfyRXZmeqYeB4JwegwFBNw8mxWRFsvizTE4mpURe7BQgy7Gtiev49KM2xBjJWKCMCR4riFoJFJPpXDdQ6eHMs",
  "key23": "329ySLgLPj3F7GPA1Gt9b79wgu3Dru482rm98nuXkgteyqzxTbS19gtDnFxsFjoYGtPdhkYGr1JuqttotQ5v1HKC",
  "key24": "5DSR8CJeerRirsxV9cuUmA6NbniDWmCwf3qHe5LUbDS97FiSA2rFw5xNxVf7pshANQ8TQhKvAsP5vdq3xEKjnNxb",
  "key25": "ys3wdpGujXPLahetNmcRK4qV3PoCbFBieYohwT23HUxYyhhAoYbnDaaq47iy8spiVizMEBTVo8BzynUu8RCe6kZ",
  "key26": "5sXihhBF84fEvdcMedqwtnZgwVfQapoT43o21H7NhXDqcFXGu9V4Sn6j9wn9p5epsC21x3Ay7U53K43QtThbkPBp",
  "key27": "3ap9MeZNKesUsDoJFv7537AG5YBoyv3X4R4gCHh4AgK9rHgjfWtjo4s5o9Qgosq8SHKc2pSB2oWNaXme6fk4mCRP",
  "key28": "2sxT6iBZLkc942Z2WoZw49SS1Hn6dC2Cje5jxdUnRv2QGyUhngXjKqfqqbHexgg9jgDqYeX5YSQYA1gXrJer4nAB",
  "key29": "4Q4URchkhFz9uaZu4ujYTJz4Jd48Um6WZm9iJV1TenGsqbZkfxzKzRDQKZcwrRdUWxfygp15oe7ymFXSqKvn9wW1",
  "key30": "5zkTLGQFMd63btqqsKegiXVhW4FymSgGdWkJD27nXGbGJyMzLRrdWUXAB71eeFkmGDNFfbmDq7ySHUrVfjnQo39X",
  "key31": "fhoB1YHjbda9spzePWrSwfjyZ8qa2n28be61AogpvKUKj3zrQS9umvGVgPtjVWZxMQFxWBpGanoN6GFnbxEVC2k",
  "key32": "5f8kfS7hVHbYYzWErnkaa9Dzz3k7FzGHr9opTbAMihHYJfX6sHqtviMSRADjL5jwrXcWyS73eaFdzaFtxfXY9tSq",
  "key33": "4LX2yHxZfYvegAcQAcvJfYwfUPLMrb5AMQ2nKBXnJN8cZX4k8pNa3AVS4aumR5D1LZeZpaC2nRiThPgZzmjyNMPY",
  "key34": "432LYeB69N6s9aSSthLtbusyY1uHc7yVgb6wwsU37UEXykoAfVn5xQxUMHzaSrNMdiPZFbLJk2CTkoVQhHPXfaXb",
  "key35": "7znaztWSFhUFp9QCcRNQqM4xxYSsrBeW3wnJZSWiFcZaXCDx7JKdc7a96v4SJh4AZqfhneMXKjWdayDTPMYdrck",
  "key36": "5HnX7K3sBeoGXC2e5ADzcwZgfnCjkes476H6HDyLxTMFWNbrTTZLULREVpSXD33C51hvLgmeygLxrgGcprAKp6jN",
  "key37": "u4hpS11FW4qkGLsUd87oQqA52Vz36mMK11GBQTUWjKJAqh1VnfUxGomzRjopfugknnrU8BgX47eW9gFd3LV53sn",
  "key38": "4uwBBxXURfbGLGyh7a8sn286iaUrkhTxJFHicJi2MQFDAebsSbooRcefaEpWxUBgaEJUPBGtutabjxhSBipYpDKq",
  "key39": "2vbifHzwJ8raL4g12zpLviR1eRgfjEcuhkHQL8j7qfXLfEArEwx5fDbdNC2WwHZ4t8uffzgaEiFMarCCGaNGmwym",
  "key40": "5roQ5W1JxtD5oFK3yCHudSszEYJsAfmhmfYjTbeDfbCNM2LorSQVH8CrKXCGjezTdiA1ttSdbDuzTGveY2VRvJ67",
  "key41": "2g6mzmWnb6E474iEZRac8fGSFvhPwirSVfHZhvLmENCD9QkQGvKcCCY1PdnLuSvWmCucM7YfKU3dHtPFq2d21EAv",
  "key42": "3ksYeCxHtUDtEtXcEbMotyvntJ36AehvbifqghNphjErFJzJ5KponP3tRViCrKYRexrXvyYUuwjrsXuuKfy6A64T",
  "key43": "2QHUTHPn35a561Dwnhr71QSn22tUb5BRDuHPDy3yq1yMEu6qm3n9wXh3n7GQnF8wRynZgk8daYJyxHkso4FPpjiH",
  "key44": "4adVMMJod8XZyEHBJzgJMyEgSmDzQPySDty9fXQXkEtf6vKBbHKu1F57fjtxzSzkpmyYK9jNiDfasDJdbnDtaYwv",
  "key45": "2wFMoa5Urhv2bB9oXc7HhhjTQDPzSx4WvJkzg4KoS84jsYukAMPXzvW3NJJATETmA5V1JC5giH93JwowygFDUZf5",
  "key46": "3YhEhnUQ48LkTRLuTiw7SpRYgDffrp25tTZCokei29ES2U8vz5yEzUpPY5nWHuK5PTgFvZ8zCQ1unDMAqqvHgWfx",
  "key47": "3soALQDcAujYcQKNJgm2gVpysbZDeis7QjN76zgq6c6ZzvNdXau71CsDvXziVL1qwHzZ545uorgbDYiivaFs5wmj"
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
