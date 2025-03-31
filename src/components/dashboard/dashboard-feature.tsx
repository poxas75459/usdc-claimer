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
    "3PnFtGdTJC2FzHUHF1Fu5nb6tN2YmDvtsHogJ1Ka1uKXiHrAxQEVuNCj8oDHST9Bo3WGgijcdeQEpfLHFbVZtHFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGYDGtDWwk1SmmNs65eKStKCjMJWQpBPnSfZQ6EKWh3C7xMpf9uPtZW8hydoz3rW5Stb2aBzYAvDmvnA6mhhQPn",
  "key1": "4R1hWvx8JEQSjrybTR6n6bGzahCxgBWUT46cXMKbNY36TuNsAzC1npFYb6UXvdqAcTA79ZNX6RtixeaqK5zb5kdq",
  "key2": "2fXeud6cWGMuwP69XTC83T9XkagCuc9zQGigfpWKjKQqPYfNS2gQY3WjezVsj5rtdn4pZBk5csnDccUZSs3gkBkt",
  "key3": "3AeV6uFYnuLoX89ivdpwBMKj5mWaCoCBR6L9RgmSGZzp2yQ87iwTPKwpFLgqca8gTcMUU3uaQpXbheWeVEnMzhD2",
  "key4": "2n3jT4MsPjHJnKqxghtCk63xtRrQSW14UXkBhrRanJ8Lm75LC9AW69rJ4E1ZmrDmkowz77JDA3YoPusjW9ypg5J6",
  "key5": "KvcZGsYYoEPwABui3LQpvvs3umNNG8UdvG5PQCmCPxMwTYsRq5CpmWz2FR7TXmVNMwoBMn7kyVJE1VU5g4dPEDD",
  "key6": "29EFnKMR9rCFCbTyMWDTzddqubyr2YPkBgSNNqVA7UNWnbKSqgsvc6tgh3FdutAPnBUMqrdjRtB1hy8so74rPC4P",
  "key7": "4vtrrEmmhsdqNibWKbhehq1WkyTXA3kWcJRcUhzZHkXm6ytdCzs4SpZeHoSwcwqWpAaHECW1qAUtCppx2XqaRjde",
  "key8": "zHNVXW8NkKYY5DJTnEiXJSf3CYZMaKpJojhLwJbtakAvT55VE4pS73jTFqhHiW6f81qVDNP5B8jqMsjrpop6VVy",
  "key9": "2arqkMWTmfHp11SMSLc1rBykTGmks8vwexkYswXbJq2axAfLXSjAvyTeeJsgCuCRxdSc8yW555oZBZi2Xsma1MGP",
  "key10": "4iKhG4GH87guwTmB1UnZTbnLnrfEyQmk9AufEfbcBiM8iBoMKSXhP8D8ebhoMZfhigJBY1XVN8wBvZaw8K3Dbb3i",
  "key11": "5yMFiBgPEpfEV7QHzZesSNSRVt5LbAyT3ePVJaKWFLdNQ9Dbj2DQWC9BLkvySseWZwTUyKYVH5ht1F6zCVsMF5sj",
  "key12": "2fyGLKgRm6tHCVnk5EnYguYDDwHksTVWCyiKW6wdC65edc3QxAQXe2oRpfZ4grxHnoN55vSuQoKucJMgZqqwPupq",
  "key13": "2x7DvB1eyYAaeeNAAGKbv8qUvy7hSMEtovCPoKhDdb4NECygsj835NarbKtYguEtQPrx1hF53Gu7dtkLcWVjNH1W",
  "key14": "2qvN59MqNYDXerApBS22wt3Dhyno88RqRyghRYqBQrvHLbhGPg13KHprjKkKMn2teLM35geTrDmFU1CrSytdjLbz",
  "key15": "49eNjfsn5BE3RdgK3MJ8CL4dNy7VU2D2oUpQs7QrwBvVLzziyNbWLGiuip6PhoxRNGkdkQ3wXwam6aknb1RFTbHx",
  "key16": "Z4qmcHFh3gJbncM3ybBqp6K3vkZbkmsLWjSEGnnSQopaYByP2JEPPKRFHSVp7WQFLAoqLpkH8PgLzedqRTW6EZV",
  "key17": "4C2HQ94FQtZPhSNY6t9Pke4Yrm2ES9GZhiyouVub5QERHXhVnFRktJQsWKAhhktwgKf5DmDmskaXeiPuS3FSWKHm",
  "key18": "5iiP9Qj1TJWNwTGSoiTmXDRtFBFpkyTGwRp1UHC3RuJ6FMECU9CBjRbzQtBSDkRTF3kYVVbznjqQCErpM3sUpJ6L",
  "key19": "2A2285oszANWAsizXXsYjoG4PBwWVPEzSoRkxnaB6vSjvGS4S59YH8xEu7CfWXnF5vDvgz4KzBWmhc99KCXuz7rT",
  "key20": "5ydmGsxP1mdHx58oqgEnJPxTKCU4ui8NqPjfmsYWr1Q44GqxS2ddw8MaHhb4hZU5RmQvtDETd2gUjKJkxyZvmzKq",
  "key21": "3kXQq6S5fVRXLmpNQBoqe8x9sG43VbbtCdKR2rm1pRwA4FUYmc15PvPWfcL6BhXZDpDYCr1B29LFet2A2Vq2jNCD",
  "key22": "5y6nNLeK8QGjtMppLLq5rb7swQp3tPGotBVM5dZbm1tkSuL1otZkMP194MYaa3op2JhUte4T4NCZdpJfsWTzQTqZ",
  "key23": "372g2HdFSJbPiunyUjSnEfSSyXvPQpmeRR3vQy4eLYtXPZxTSoqu39oP9yXRgVb6cHEJQGNC64fAwuSYQBXZtPw1",
  "key24": "5qdKD8RCZA8VcAxZa6GJReRGymSCqgXqDv95pEu1HWUE41yvXkbfAYe16g2FQhy88HHGr86XDBbjebZG1M3Ykz31",
  "key25": "5Yg1B2xDf1GsHB2yKo6Yj67PD1ZCiZuWiuPzqTgG6RJnsk3RGmJ9LAyHDzo73t89ZpGHQHbTc52SYvcYaGtQ5WG4",
  "key26": "4eqMGn6QuZB76e6hypisfYrezNGZ1f5apELeNEYsLG7tmw6uNULzgA2bjDmwRcuMLMJZLR4mmuEADLPCtUwnyb3t",
  "key27": "2tjv8FGgrm2jAi5S6n2EK1w78Ztfj947vE6YkYQPTqKo14Dcd57T1CdHmQ6kqgiwoeWPJDypCJXYqTAwvRbZEmxn",
  "key28": "2NyWNb4Mx5HcKNacrk14VJc3yFR5EHm43NoYhMwmy28KokLcZS1BM6RGE4fc8PWVYktSkk2YxY78YUB8xyC5F4dw",
  "key29": "634bSh1Cf1njc1gk2TeRGSbsvq7BYgmBW1YhLtEVSh2Dv5u5Kf389hhJRSkhaGBDcK1AW3igpuVWc1ioEEqENyS6",
  "key30": "66tYc1Kj76xeDguh77LtN5P8PgqkymPJNL9S9R9sDCWD7aHtdZwtgxFpb3n3efAXxo5xwsLqDDtuvwbLy67npfV3",
  "key31": "KmSigbzsdPfCfRbSMZkjd7NpvcE2ZPF4SWe5cyQA9DsP3D9z5J27ASwUeDRXvsa2ZBfsgvWLR4HacaBHKvLmtdw",
  "key32": "5knueLjPsbNUCaHJh39on1J6ayaS4Epaz9HL1QUz7tMbHx7QrGBKrBrPvRiR9H3AiWGjhcquzZv94ytpEB8H7nry",
  "key33": "2HRz9kpVTCvtaWLyFyv91ZdmgH5vtSsaiZ9ZhUbu18fBvuPr82op121TTvpPGCsVKN22MDoxcmVvLspWfAaU5qAE"
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
