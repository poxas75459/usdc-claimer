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
    "5mvWRXKmnV2i6ZGsVAAAkpfs9GkrTe5ejoAcJau4q4yQm9YnTgKr7pRXy8EXTrP3DfkHAGBE22i8ffCmxENM5CTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtfDztY8wf6HFEjf3YfnshCn8Gwm191QURt2MrCzzL2xXCbURBdvPz6SdELQ926UTnF9Rw4nJeLddgEQpJbTb7f",
  "key1": "4A3i4KhJdCC9MrzA7S4ncdqZej6xwxDuUZEzc89Fbp58kz6pADQZEJyumyT2UJqXc1e2HDyzXgLzuxAdnpeasLeR",
  "key2": "4KcpwETmFjb5Wnh3hwVAN4hu2xfxAvG2w2oFRhy5LMv7GHvrDzDL3WxcxvCSWnE3TfmiZVrz2FBqRGVM2hfHrvVp",
  "key3": "3oyApm3CwvFVSCvxcw9qCn74MUQhsKAMFwP2cUGtpCegPfNUd5Zy7tdpWq4CizGtHmg9tz5YmTuTMvRtBRVn1o5v",
  "key4": "4EfZdL8TvExqt2fg4DM5DEn64Ji85Us88unPFjFZtSmnBnNi8Tewf5dKADHjicafH1VKgJPweLarpkVtmWtVZ4T9",
  "key5": "5kkZBSGUUWLphUppSdzJU9BiDmaZyDJpPkW3ECwas6oH4YqvaFJBeMDMnB2qb3fte2gbkZtwRN8ofBZLJBAKWhEP",
  "key6": "2gqH1UjcZHLZAENbUx36A5QqzxQmhKEwrKQgUrCUdzXDhcwZ8DuJ3cbt8xhUNiJc2yYtXwx2LVRimnh7VWdiK2Us",
  "key7": "2pw9zPRDb1vAtfe1JAAA9wAyJGSih1LLuvy2axKBxFxk6r8zgxSFZJPmNmKcsM6rHjkAbWTkAdWZv35m4gbRRFce",
  "key8": "5TNojyeGPrAy32xkUDA87wrMuTP5jZzTJWN8EHbV8TwgPVWEfnXKCVMboHRHdMDBodnnBTEs6dNtJ5VKSb7DxUwV",
  "key9": "A7HFGsCUPFD1ttfBxaaJFzDdsL4Raa5zotQ3peNLx2S5T1Sh2Q9j4aimHdJCZS5q5KGeUpLpArMieserpHQMXky",
  "key10": "UxoNJeBGQtPCGvJKsQYNbqdiKes152dcgrS1CyNSBMyB5YezbgXyEJjqiSMjkaoGeEkXDrnNsDLzHtsgvLtmwds",
  "key11": "3QiKaN1DR25gefV7X6PL7uDny4aogSHBwvKYGJVmqE45GrDdGZXkGPxUNCAGNfGJMH5H1BLE86G1N7aDhXG1pEG7",
  "key12": "3L7q7q2N1t6R91j2DhDt9xABY6bp6tG5vPAHYy6ffkQehPEmMNayvS7MA7MoUgB2E1ZJ5sVeJBAPGAA2JKoMFYzE",
  "key13": "499wM1Rzv8DtHyjJZd7qcn9ymkfgUNowRWV8G8rUHw6PD2XSkfVibPDe1bZSXm99VrJWbZv9qHAAsD5gUupLyf7n",
  "key14": "5TJcKD2qqsCFrbzawL9jMFKpCexpQT3AHtX5d97DEzaK9f4aXhcRKimGm9w2p93gy5xokJP1FhFG2b6k1FFKiCp4",
  "key15": "4uNSK3YzQEEGqHd2P7CUqvfENZR6n2DeL5xFgSQTFa3BVP2wty5snKMkWziuYJBWbBefPSQJvobTEkgbJeBLcnjM",
  "key16": "3kbFsCSh4s3Aad8uRtdC6oqGC5iuBesiTaM35CCkPSLoa2vUqSx5MdkK3F23c8VLQecQ2FgYpGDqtypHogVV7YsR",
  "key17": "XEx6CLo28XiKjs4Q58nzMmjBgJBJB9Sd6cLNGWAUVDqmyDNr7AqYQ4TYHG2ox78xCLLnpUCd8dntdAJFTtAZkRD",
  "key18": "52FPRhRknP6kTZmFmKSuGEfkYsh9RTWh4FH6g6kZR8GU9S8YKWjvVUaTmKQYSuN1z6LgSDp2Y2CsC5TffhJWSbEC",
  "key19": "4fFEqANMWnzuxxnPkpb3YdZXR8w6WsKhAVWLaeY5MqAyCmc3mPZbkz6VHMEz53xWyc3GQju4zdWiDS6q8ZnGRBZc",
  "key20": "4rsv9iNPQrGs2HgU8sfeZgz34RqF4F4favcZgWYSCpvPoCoWFpc2hNJTffW5qw4doQKfU6b8Gm6MJBY5bZHbpwfo",
  "key21": "2MriPCDy1d1SCBHQvRHMm4r2coo5HGojhjQQujsNY65JMB6x2eN6Rg4B1ucEh49R6N7iKuTs9SMcuSxd2cYTy5HG",
  "key22": "2Ho3WexCy4g1CRCrbgNB3Yvam5ayxQsfFKjffoHBJtUgmWv19gnprTqi6r8gN3zgtRRcUaXc8uX7Kakxj4hEB1A4",
  "key23": "2ft7NdneX5DWDnhnReo2TaGH8U2r6qFJXQtMJB7sR8tekiSq182VXtcbxSq7LiUutR19GEEoPy6LzEeyXdynqyYD",
  "key24": "4SGJDwbGGP6BsqtMXkGKi9LZT299VY8br79JzrwyxHaRZzTAcoEBFufaJkjDCukBvV6vym9fyH3utxf6yUSE68z5",
  "key25": "5S7Bh1TQAaiS2Ab2iHmXBudrfLT1gCXVhdYBrASL27kihWCoebM9seRvjtWL5wMKc5zRDMLZ3jgL4BJqdrcBbwv8",
  "key26": "bCRVA3U1ZLyvX5WTJKCWaAADjmMA6uM4kVxgmwzJDy5iWekAuTDMi6j5iobqUSYWuRBpcsDoprFXHbdUbyicBXH",
  "key27": "52Uh6pjMe7Qv2YKV8PjNxKqpbpofFQ56V59M5gUxVp3e7XePwRNvijSpXGZztJ945CznXp2j23sRXyx5hvwaPRsj",
  "key28": "F4mxgfF9LrTCWbugY3TRgp42PETHHzDCmwC1dU8Zhcp13YUB9RpBYcFqN33WLL2XuY25LrLckbJ5Vy46EDSz5SR",
  "key29": "2NhRetz4vNBDKtv5YFqrbRhG1hiu8s6X3aqXuXBuGiRJAj3WuYectq3662sapMKd7ArsC7RawHbfWUQy3P1R7dc8",
  "key30": "4JS6eq8MdbBBnDKod9gCCZBLnrz1EPQttnszAzjwPDTYXf8ALe9u3ZMbmUSGeuRwzjfuSJS8wybYWK7hkQVeUfSc",
  "key31": "3SyuBN55A8GVSp7DB4z9G2SAExKEmRchnPyDkeEUdqZhbDAK1WQ5Kj7e6mR2A6zNRX7PxVTJ9hREyEYynssgBgYA",
  "key32": "4syQkpJ6t6xJcqmTC6rVGwuvapjYKzkgoQqVc4aiJwGMyuCQbxXbD2WRjFg5dM24ywUaaXPkLNdToqQgLTeDYG1y",
  "key33": "2vaTpr3yusxBWWLV8rmfPBGMbEWcixJ3F62J3kDLpQV81NTYM2m99N6KEiLbCjgnJ86nrVdAcPoTG7p5JL4mKzBD",
  "key34": "3x9cySZZzfGMZ5MhZJ7aUVTE3MojNygiByexVu2Kpka5geZ2rUrJscR6gsKPmjxju2cWFWJwhuxq1svzwMwtbAvo",
  "key35": "1RUCmfVEvfbBxQWxENtzEXeyjf6WdCFTaWJLxwUaNX5Ke7BpjBvF58ey9wiff1xp8EsYbXoC7p4aUGRxsMch5oW",
  "key36": "2sFo9pz99Dj5SSSL3ygzC7Ker5YTitnbN9dK49j1PVpNQHiWBm1LmvUnmeYLLgxnoDJqsPBZKrr5D92dkDmYEMxJ",
  "key37": "5LEGZuc6Lt6BejJMbHTa1KHdCGA7ZNe7dKngYX5X8Gmuby3e5E6WtAX8wQVVN1a81JpypFpvKtomFURdrBMxwR5",
  "key38": "3cyuNeASL8HNKUFPoc587fpn4DXwwpVxV1N7c2cJ5wgiF9a5d4Dt77i5erz65weBZqyrNc6qNtZPEuNDFFjXoP9f",
  "key39": "2RxT8ftCMjc8mYkGfRM6te3Lh3bj9aLkU14CSKNee5igXeuPBsfvggo9Hoy7gAJrWmy5eYfL61kL1meHdzMYe3N9",
  "key40": "5sEeGg8NKCqF62ar56ubzgMt4VhxGbUxyee3iaD6z1FfPp94ycuWoWbTHcqMNrRD3L2H3pSi713vMKNw7Z9fbbqp",
  "key41": "x9D4TxSKpZ2b9UqJD5C14dxGdVmfECqG8kBWTkRgyE3EtehchhEXcWpEif7QEgRnE2CSG2dW792VbkeU8LteuRr",
  "key42": "CjxmHtdmVYcAdFPaKAudQZJsezo5HqvfSC9mGS7evsfk7m9nomqkYa66Fp4sP5VKaRuWH47Y13UwNwNntrEbrJH",
  "key43": "62okSK7aih9AWAL57XajyRhBzH9VFUmxo3EBuHEacUJwb9gd9WQGRx1fbUV9cLjH3gSK9WJDmoZqEvrR2SVE2TYE",
  "key44": "4RVwsbrKHiRuhAn2UVjnLt1YLfLkXo75sL5nH1Q1UbEa1wZKVBSJ6cyJ93ztRZYtYqngLP3YrXu7hzewtAsvfJAW",
  "key45": "4zfJUEMacuX9YtXNfm6WCV1HCK7WaLsR8yZ7QJK5tmSCqZRykk7UL56dJeWanMFC5Jw6R5zFuKjNnz24vTxRf4vA",
  "key46": "491jNiN2GvNuY2nvESNxQSD4K1gVqUTM3sXm4DikopsP57NWfsaXy6vVqASNRc8WF6J5YDVAGZQkDRYYNZLcsneu"
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
