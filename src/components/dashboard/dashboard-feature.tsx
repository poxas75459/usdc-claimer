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
    "4FrwBjTkecT5ECktHwySa5doDMNqqZ5iwTDexr17C5cwSeKY9RYpBghiaG3HjoGuVqN3mKRESyjmM7xTySpXC2LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krsZfmzFZe8kSm1pbasM2iLfdDUTHghgTbfBYeY8x7w93ve8xXTDwtx488sJFA6keEUTMgyd56CggRLby2YQCMb",
  "key1": "2dCnyWQrssZpA7pPoB9UivYyC4j3v8oDpeuQfsePfZpq1WiqgvzkaZYkcc5sqajXAqw1GNVGPbwAP7JSa81qDeV",
  "key2": "55QBTSDZKh3bXg61PQWem1aDQ7hFzAV1tF75A7cEJdVXAnyaj2Mximz8tgkfM4ccdzQSg3hi6kc7GQkVyjLnc1C4",
  "key3": "24QVeULuSxWsSH2DVbBUYpEECpv9eZgHa7tHtLwX3kmxS1VS9B8x2LPKErnRtZ1b65mqfGvidPtAxBuA4VA2wXFr",
  "key4": "4VsTVR9mVsRcWqjghC3dXnhBDrqmuNjMCEKmWUiK6dcBRvjG6TwKDpWV6JgbdqPCdUFKBmLfyWb8MBwn3V8Viijy",
  "key5": "4A1mXWu2f34P29hMogdqr2XEPduaYvytEw4uym7QZvMDJzvkKy5Vs7WQXstTyJmnND6JV7dVxWSxc294wytEYHVB",
  "key6": "4t9LDRw22QJ34CBHjZ6heNWVuEQg9SzLn1Q9Grxfrt9ZEezJbhpYU1u85t27PivfCLxd5MjJfs7K5j3JEYhJWqw7",
  "key7": "BCxxC5gtraxEVM1PyWubm3f5oNQx9zdoawZ43GtF6r1zeTzDY9QwjJV2AhjAbVmSjgm667Z2RNnSfVuG8myvdrx",
  "key8": "4cogNMvUSmEj6A4pQD35DkBEMfrfsWUpFgAkzyZCy58aQ2x8wsMyPguNs6XdkmVuP9QubqNA3ejjjyNSZg2stK5Q",
  "key9": "GxxNk4wcV8gA3fY5Z3nbVp6Ln8qjScvLdjJXsALeDC1XHmsS48fCmXckC36gzTDSqsSmMjyYv6NkHAkWZokbvv6",
  "key10": "NHXJkjhJp4TNbxzi4YEa6xy4BNbUU9tM9atya4uc3KFBTHHDYwQSyR2Hh9XVcWpKjzgsGCtT3zt3oCxeFQBas15",
  "key11": "5vCL9JyKHtatLRbdDvUDtgrKo5hJsQ2y4q5kNz1VNwvvo2wuckmxYXEtMaWqR4At5J4ZCqEG33BU8ygrwJ1yMug1",
  "key12": "mA2z9rARerUGF3e8tF4AGBBARk3bu2gj1hjmEdpQQYWibPk9eM7DfC4JKCyQQpwN1MQzb1FTcZdfQsCh9hkoLqk",
  "key13": "4aU7UNMsqCpMC3FyCPNHYDWeDGuoVUC7AeJjg53vGM6cyzDniUBCNBZbP4ftiX7YhKA9F8NLmjD916TgZZpttRR4",
  "key14": "4u8n9cPsxFF9qPCaqwH6TZYKx3MiZrTfcbwh6yEzbtF9Fx9oB64pKvNoWaC7fkNi9kMGRa48AWLUZ9Nw32tdiEav",
  "key15": "4Ju5HXD9ueJTRGnmGUXs43M7xaiNL1pVHi2KfrGZFeqvu8HZtDurRkmGnptmBhzgKjaYmo2jaGnpFNfZDhYbeoWv",
  "key16": "36dbbZzVddSmb9wkFh5fmuUZRo7NFPbXrYyUVorK4ZSMfX1kmWn6h5eyAqKuuiV7YYAR4rfmaowD83R2xHCt56hT",
  "key17": "5mB3han1xgRE5pon6Tjt56VqnZ8pQ8ygkg1Moqz3JSKbHsEJWSZZjCPefk9hEhtYN12Dh38WKP4crcmfzJaZoqVB",
  "key18": "4n7SR7QKDQVRVhGbPnjUAyJUeqFX6FBb7LnbJWHe5m5Q4hkunpmKSEEnCQXk9WUMkWacCC7mRH5DV3bsvrwGRnRJ",
  "key19": "TNFVtT2nYyZ4KmweYDz3iJBzQQo37VyiNdR8pE3PJgu3w6ixiFehQ7wgD2pTr7B8C49r7AuAcLSj83CHaWftbuw",
  "key20": "4EiAXHg7xqhj5Jc3omXbSYkfQKoaUzFJMsCEuUEnenwKoPcvXTookBnpVfpxF9YdBfsR72vjph5C5sqVSsXnM9vd",
  "key21": "5s4GF8NSUW8mJigrn2QMTtM65HBwVTKj4bDuCTvJ3tnfx6UtbzZT6KJkpgQY37eFeS8bNMiWg22TpVrdbtr3f6Jv",
  "key22": "URTHFNB1kQriQCzM5xkA44g2ZA8zbzqpcnESaKbdAK2tz3eGidDwJaD8pBJ6pRpt8ucsXq5XERTQrXBcZq9NrYX",
  "key23": "531uBr2xWHcDmxGuJudVqn8RWRDA5EoAawxWXqjqz9QwTm4dT7q91779mse2ceqeVawmo9mxmGMPMi7EGTmHtoU6",
  "key24": "MNboGUPYXrezVeDFgcZXuJ6knEYdJwWwnfLmRcyZYbejBFeJKvJEWrypfCKMXVi4pfyqHu6bAnMZ2X8whSi6w8U",
  "key25": "4AW38P6MzSNBUUYBK8KTv32fPmjHsRQa5RdTeUxYRUUurZ9sawkTtfcUj5GCx3NsCZ3F2TA2i338AbunGfjZcSy1",
  "key26": "5bwNsnwYNp21goNbuBVntcXbaRZCtsFDEJ3YvEBBwGeNZybr2CbvW6xk8S7MhfWuW2Y7oFkmBUtS3mdM8tBLwGrT",
  "key27": "5Ag3Sf6YjDWTajMUvJnFcRED8mn6ChtMHxYp4CtoYeZFmWnrfE9ra1h3TnY2aWexx9yeUVYQ5ryUz3NEbi9UskPW",
  "key28": "318QqK5dJ2bcvNnjb3mphWfYMVBc8RSXsMk6nRgAMXYXkjgjRvotk5rkZkGwVf5rMvfiT72eE8nKZueQ8q44VSc6",
  "key29": "5rhDNWuTxSMxXu8BFbjoKB3ApzLsknyBm62Nk1pN5NDriCbRYJdJdMCbVZBHD8R4PpJpb2uiFJQmcg2iFpFLsbsJ",
  "key30": "5Str6fVpfmUAwEg5hyDvpEw1jWV7TmAxbrWgTc7sLDk1nnu15NSAMXThkBxj4JRd9WxuhD5z2fT7KsB3cVQvwH1e",
  "key31": "QD5jDYR38NfmMMnKKa81ogM1i4q2dpYRtbHXupiKxjhUwC51CcBVBpQhCp1wiYRvxfa3NoFeecfaKg2vKKNapD1",
  "key32": "5BqGmNk6Zn73YmaqKJhWaaRxe5uqLKuhh97YR1BcojiwHMRYr3qbg5F9uv8SC6xzKA7j8JCaaRMfRqnq46HkiiZF",
  "key33": "C2uk7bQtbeFAGstpF3qcDT6dkkkWuEg76DbC67ngYzL5pjVG9rCQCwnXuKTHNVMB7bcatBJfeDXwLjMtam7tMHg",
  "key34": "6cpw1j5adojga1R32Yj6o5Eke3VNwHVTPq22mriiwyV5RCQSJ3eHyoGqyEdzCGT5hSkmok1w5BRqWzaUxfxPjtW",
  "key35": "ELhrqX76sSPrYo8CW76hkJERajo8bkmE1CTuMi3z417nk377fPLAEGBFBEJGC9kb1BxcQps8bmoWqq4u55zEt5r",
  "key36": "35CcnGgLaEc2jqTJy4BgV895rnUxeifPqqYbANMNf4pfmJdsRs62CKCiULsLi2GR4KvXFKb8HgitTTprxCVnhDkp",
  "key37": "23ZiEioEbYmBHFGRF1sYvuHPBaHTKSHdANoMPw3vtfXoF9jNmULgb7iwk1TanRmZdKXj4UjLCznqSeHc3woAVnuS",
  "key38": "yYMBUrkJu6TmnSzH4QksP9z3ekp6DXVhszD2JFLMaRt7S5g9ZEqCQfTfLPUDFXATUaiddwspV1BJX5sxMbTwsJw",
  "key39": "3DW89jGZ4xLJTQN8hn6owEcTuakPH13E5xDeMDathiiR5NjNczG9SFzjeu7ft1oR5mmYnEB48CwAQY63VmaL7x6y",
  "key40": "5NWuo9BU6PyoCoCHqaaxV6zuqDGjfEUF99pMsrwdeGi591QyT9Yu12iqzpiZHxfo187e7Pct2141kb7isoq6QnXJ",
  "key41": "JdphJGsb9YogTu4rX4bHxum5H87iayztnWfuW2CUWMjKRSD9HUcnfnGFMtiiRvsr67xj1Fky6h6qdcKXjnTTagG",
  "key42": "5DoA6pLFQ85fRb61Dy6C6mqVG1E2EqpgnqbP3ohzq64CfsLjV6b8hU49nWFMBgpeUv64YSZhUkYVGFBctxjQ73Uk",
  "key43": "3C7FprggwUD1auAigWuGqAC2kW1peE8rrnmKew48DNSS5mwMi7EtZMFPeTkjaE3TPbNn9UThQRnJZUKAh1W8xpBk",
  "key44": "5H2cCg13sjkRGUTihufUYnSSoaEgPwpRoXoWdwggeYJhJVxCRua1qVkH2DfXowwY5n4eTWNukddVZZ3Afs21bdzr",
  "key45": "5tuYqTRrL5Bo9a4zbRdRiYo6RhjdAXyPKMVnTVhXrkxfbXPkj5Vp4uZ7MFkVzGjZGUpCGCKYkbNgGbRqpNUd9gfG",
  "key46": "5YRyvrWyWGEyVmjcTzyCpgxfxCpcsPsMbgNd3HsmG3gn5pYRGdT6XXPHR8i2Qai1D1bj7z3jLJzCtjNe3ta7mKUV",
  "key47": "65sSHgY2Qfd4U5vJmEX4VzuVtFTT6vVNws5ZdHFvXMc475x1gmBDNSersmNx6v8gaJo1bTPNvjNpo7scYj6nneho"
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
