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
    "3EyaSUGXAaLbdrb5jZsoNb8EkuHDSHJKGBs9uETTYSAZhyFkuh3hoevV88oqd4z9L6UQJNcfGcJPpexwYyd4z3Xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duE6eaYfYvSCtwYKyi6Y1HBzCv45L9ctCdDfDEuDVh7w5JR1tNygNiAAYuq5zMgvvkLTsZuSPox3XTnQjErBCLz",
  "key1": "eLSz4JWmD3Ab3E6FQQ1qVQrTFNMRS3fQqxZH7hLwDkW9njk1jHfSJzYTRHFm7PnVDEY9hdMBmEh1fLWPzP9ALLZ",
  "key2": "4GokWY5xKPmj9yn2Z3QGHBQNfiLGhFnZrH5nkHQ6fwdHRmmrzHHYZTCi3HdmWmLcRGY8mwVufYvMC2Xt8sH6Ab1N",
  "key3": "5zdiUfKukxXwNxHqRdMvcGmcxx2iFCyCJpXgXHkG2NASEB4DDoMXhMfewiVAiARpJx5DhdrQkmv4ETfA92CYMEch",
  "key4": "4zYenMButha2kFzhmHqovGBHsvABWUKLB8evveDwLKpUkWjobTB4pM4jKWTmkh1dg9dr7YwidBnFHwXfuo3S8pAE",
  "key5": "4WKDwTgu7rC2PfPdbmvzYiQUYv3kWyiUKP1oRaggzvwx2kvbT3FBZeDF7rvQDKzFoBLGp2Qsz3s44KjYYBSWQQDB",
  "key6": "2ZWC8dJtzxEK8DxgKLjKU9cn8JdRCJbnmksK1mxJzxXq15YWZxUQcgGbnZkaHCq3VfobXdpMji9psWxY72uK6ym9",
  "key7": "FiuHxgG3viruSPg3zS1Mi3AVqHZfbg9KeFgKZ4hMvFYnSkhAc91SzfENmDYtvptFdzyUWKHAC44HVWz6mUe9i8t",
  "key8": "5JRqJiVn9B6GzU6PHyBiGCrYss5vujACFp74p6L6QjP2t55TKFvhUYh3haVwdDA54MxdRqPHtxdNUGq8DJgE18VS",
  "key9": "yyiCmJug2u2LAYw8oiQ1uZgsi5e4338ASiN7h4pSB9z1ifDgkNwrs2n8u56jy98SypAqNWU7o8mBx7TERH13Tb6",
  "key10": "2pSyXNjGdwYY1w2rH493nYZ8tSzjHqhs31uPURAQrfjeM33aZRj358HGQmC4yQLJVnJ3byxQixj23ySZMyH4qxks",
  "key11": "43AAP2kRbWGBe1bvHEpJe4BnKrCXfce1HfUZTJyfiPqTZFLNeFua7iFjCV9TGjRrMZjeYkc7rX766eheVQyK5K6v",
  "key12": "4P6Twn9YiZ7iCXNKgcGNsSof6opF3myzzNeYbRBGrM7x2CPrSnbTwcbrLKDWL3HA4cHosPK26o2w4ETKVF8REzNN",
  "key13": "2ppV3Hitq2ZPsvhxkQw9NmfF7J6kB5VzX7WTBV1jo6rTHog7Z9r4XWVAxHgjBkbfbxDbMQFexF4fiWyo8JCoZPKa",
  "key14": "3CYMi5VrYVn8cdvA2H8oMyeNYHwAH9BLEu1JW1ge3usAJgu7GzgxZaeS2vrQwbARrw1qGezWfHgdpbAeYD8V2hHQ",
  "key15": "4i2d5CjnWmje51gTjKRw3truQS5z882KjfDhiQAVEMUBefKZTCgy8LVo3zcmYGrBpK5ZHrLRUsFVWMHyVccg6Pea",
  "key16": "zUwjUs2rbTboq3gL7cRxRAkrRWvfCJ58o8DrVhUoGT8QrXqSNc9HYcgZQ8rt8fxw8tnRxWSjuFq8f2UWPTWU3US",
  "key17": "3N2rxF6PmD6SobDGUXGE6cYgTMiDL2Ue2A3AgwAdEAE4CWQbKoX8PAyZuKxbtKGjYhexU8muZEfosg7cNcDbAhcB",
  "key18": "57WzFLaSSCBd15U961DTJAfC8pBb8P5JXGEtG4Rvq5vQWhnkiWc7sVe7mCr5fqxef2Ygjm31hHi1XsXhQ7iT4XRg",
  "key19": "44jjP3k4KbcjwNjbJpBkpmFBsh1AubQA8ojrPor3j1CYmww2usqhz681hFKBVp8QskFPYrv2vJ2KM9bjXTXCCZir",
  "key20": "4fp6i7iCcudSt2TkY3cPqe18ioc8xLSxAjj8J9Jn6zJdbjjaHZx3csCt63rJh2SSWVyPFtgCzf7kEDt3jBrsbxcs",
  "key21": "5WZmzpm4ooUdcRwPGBm9Z3iP8aNW335kPEshS5YEJxmcJm1kRAD4LqZV3bERpQF3idyi6AjgEdaJ12ST8gZB3CSF",
  "key22": "34CG7fcENLZQGo5RiB9m7WWct1QLZV9C2uZrcnN1sRKhyfUCLjnZzKuPcBNrPKQcGwLpqTUvEBimrUD99yBdunwv",
  "key23": "65LXbHeNm7TAZPKmZx8vZGiDi1J1kedt4NMLsKNFGUebQRzNXNhtBm4T5vVEQC3DRgCyRhBBQKhRrtNmydSiuKXN",
  "key24": "5xPEvx1XjbBxXLsdfNjuo3LBN5QUe2WAbqXzorny2dWVUETtBWJzsnJRg8EvjuBfy29ihv9A88dBTcRBnd37PiZm",
  "key25": "2QZkqNvYrTdXSVoeaPw98FtSDTh3mrrDpvQNg2WWC9HHYCP7oUonvU4vogRGdibK9TUowyoiSuHUjPttqLx8pFZ9",
  "key26": "5SnKswLyakKbE4vPZUSeJm7jv7JuXm9rZ5VbML989Sko3EvzneAkKN8jDwsLjcWfSfwUAbnHZPfnRwJ63jD4VpYw",
  "key27": "43tPRpJnSTB4NeSyGijAJ3ELhNofG5eJHH8NXCzZjMcoQs8WEAFPprGNh2XtFavNZUSiHCSuJb7KdG1sP4BpL8eM",
  "key28": "2VRgo6z2Jb729kBkbptBKF6UzpHzUR4dyg1LMFknseB8GZpgGpHKFnQ8SZNfUj1DWGKeBr8qXaWyTQK7Ch14nRh2",
  "key29": "5FGWAf5riCUGETFtdXJ1nNzVfiyvjKznGXPYYh2WfMSeA4EZZJVe9ekRwoQQPaVg2LbhRrtdbkCY3Uw5SoVYrBbD",
  "key30": "ZvyvFBvu1ZZG7B4J7Np4aVpMYRyCMQunLCpbo4eKcpD3SJd5WnpX5cAfXGXEVW8ZE9uFHYDmps2XTgxJ51bhpGx",
  "key31": "4u1R4TUixZFM5Mq1JCaAPLVKZ5ahBy3C1m4S8cRN3KpoGnJhjxtCjoJHifGgCQHcE5LMYL2Q2s1ocpeduc67h1hD",
  "key32": "armwNh58RfcC83UZSqoU8XiDBqiVBTZNb6mdpGxpE89mWxsSHowKJzUPjLKBPKzaPJoKc6Mej1jYRwNDEuoVD3v",
  "key33": "58x2NXGgUakWK4MFyuwMxvA5vZ74gChg1vUr1n3N6CAwd3CWgmLjb3fGNk4eQahDrWbhZDA9R6XTVSKKYxxQW7Zs",
  "key34": "4LkGVXFhVz9HPAdJroNjgfYmLVXtxe7S7RgEEcXQ5WVeJxtqEqdU661xCVrjXQdvay27ywBYViTurvS5wiF6X67c",
  "key35": "4BwfnMCm7nLq9adJd96czydT3baEcfwNk8MM4WKvrUedxgR3dSYtDZWhz1fCRRj4AiMhikGudBG36nqj4WJjFncw",
  "key36": "5opi6ukkL7ApEa3jEQwydD7aeD4kcMsJRaGxijMRH9edtpTpe7CeCyDycaTB2Csj99vwF5XeuXkZ9tXZvt3HQfsa",
  "key37": "4mjcSKkjkNstaCkFfJ2AA4wgXo2j3RfPLE5tJqytuSSmyBtaacYj6TQ2ocmGHUfSiHSHuRUew2iM19PssSmZBJXp",
  "key38": "3Nw5FW81wd9JXS4NYP2sgkg7LLy8c1tCS5TnRHpJE5u3sLz94QLRmzMjzMTEVV8bPL2uW4HMtS7nY7Jo77rBKwbo",
  "key39": "3NLu9tkzv4yqtwtR9zfiWbveXxdfG34gtZuEooYfp3i8sN37MX9Ji5LadUrUcmTAGsc7hXnragGqJ2xgoqBDJxjW",
  "key40": "5SvBkuNsbhYVChiTaUtDEnZaCR3CkzZmjjLS6zZNMJhiSd29vV7sAd6ZtjPshitouSm41qBNqLC2NprY2Trjor63",
  "key41": "5qnu2c9BKnFbMQutkHn1i7xfaihCta1c9rpECtgD3VUzGy8j38Z5MuSCdqjFVgFhhBKoc2PKhhr9WQiMD5C1sWV2",
  "key42": "5zQPAdw5go13fTq9i72CdBcfM4kLw3mEL7qAF5exvw47SEhkPKCG4TqmRuejeYqusZz4mo97gRRBRicuwDEP37Bt",
  "key43": "4MqEmoJccGP58myoyDPS4NsrPZH5KtxV9zNDGNAe8MsEpY7YfvpnP5BzCFDtpnJAWfLB32h2MnSo6smFYiffrJVD",
  "key44": "mQv2ThYz5117AGNjdZwm9VA6Uj6eYbToCG3xRvEowuGwJTVz39HRzPdpbxZnnqkTEG21JVY3GESJCat1zy4fnp3",
  "key45": "3D9DN48aqMwQkRik98AHcgUkNchgCvCrh2GUrGdYRkGk4gYmh9vuZpVZTNAAxU5LsCNJF9BJH6th4jbSJKbSfUWA",
  "key46": "4mWfeMcmS9GMegKeZYNpo69SXEuN3Kf72s6Yk6JdtXtXzHXACyVaKgvjrprqyKs8B8P443xw4gTWpwjjZ3u6TqZj",
  "key47": "2XvwUzt9gQiP2kAR8AtgH6f62bodrgruMqVUEx58V5XvcFyASSdvXECLP9DwprY9tSmdmqs33JCkPoGPJqMpe8Gi"
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
