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
    "5nBZSdsNTjL99EXdjp2EtYHCmBHLy1tHpt179fi8VGxcmQsZsqBPzYJE891fxq6FNGEZsi8ixnBWi521VPQDbKVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Cch9zT6Lj4yQXUySCpfW2ASmY7R7WZ28WpToo9WuaLVLz667ieMnhNa3jsUZpJQFm9bQgjgzxkcSupZwLC2KcR",
  "key1": "4BM1mtAyy9CjXfzFCyLYSpGh9ptv63QswvMX9jNvhiCDRprdQ2dnAiggJcTh9yn8Ux7XFpEubcantN4vYuURhLhQ",
  "key2": "3ri3LcXXZq1fSVZ4kCQtSvi8PEi7rt2b4MKNbeJzVwXEEJ7tgA7qyUR1C3ohhrTdFbJyBp4onHJ1uXWXAm724bQX",
  "key3": "3R1hBf7DMjT4FmRfBP66ysaESbrSujnsnKKpULkg3rRPoPH5WQeztQeH8c8Hj2mXt8FNVNT5Y7qk19JXMetXU4yp",
  "key4": "3ZNwFv8jocWsNUZ4X3T8HH79ztmEkoUpV3Zz9QQzRsRhEARd8AJQ3K9iXexi6KNsSDWdGNdUtoskezsrdpB1iUuc",
  "key5": "gKdVocWKZNQQ4Xgme1wLTBhNd1MKDNijAqmiUMWka9qsafKHap1kfJ4WwgDkwnMyDwGSSRnywkHpneZxVdXJkgn",
  "key6": "5PW7hGqHdGB1YR8ASd8CDwsHiQrnM3dnWe7YKSMufnF8vJLnd3i1JeSPvvWsuAJYMB4HhiGhc7cXBN28mQ9vMPGx",
  "key7": "5SmJH7y5mnw9gD7tu6y98pN9MytCDATmPGvV3ovxRHST7qxmbchTZBHjTLuwAAudCdZSwDdMdthyC1T6LL5c3JkP",
  "key8": "2Bo8Pxdy6FcynonX2VaLacBJNe6DaWymRnDKfJnZTAwSeLUCM6uVv8R2Ub72fxkNbzqqp6QDbkVqAjVoYwmL8art",
  "key9": "3n3JXgfsKgTPYUbvsmTcmx4C3ZSS4vkb8Uz7QVwGJUQG8VQryraTYoBo4CKofik6DiAPzcRXvmhGG6cQcBaRmzoT",
  "key10": "5x7FHL1CBKL1rR3UpYMkhVhazRJYYKDCtZrAqRG7cgQefUACgWWfihJhtYSSMRpknvrfbSxZkX5353NjVYV8MvcZ",
  "key11": "5uRyN8JXmeQja2mnh8kzQTpCsPgwQ1zUSonrDVzjKcWFuHLan8A8kcK8ucNVsbeEiqC13yACH7akTnn29gY7uSxY",
  "key12": "DXzF2siYD4pAEFDT2pjWjQBJYfdi3djDKwH6DfLNxDG5Qd7NzSdSUGBDvyUhG6eAL5QA2a2x7Kw4M1vF72xyRgr",
  "key13": "5cJ6kGqR7Pd3y12D7BayZwbJL53gDbawP7wTSg8GjLzxB2kaoUgAEiKVyZDypqxSXehCQNbNAYfRw2VnUGQKcx7E",
  "key14": "4kzX74tntaNmXMwxqbump8gUBu1PzCnbM7oUCTPFzrTFNQJbUYWVJnZSLzvV25fZyzg6APDWBT8x2Z3Yf4rFiNtE",
  "key15": "3Ckb6GoUFLM1uwR88JNqnnZQsRxTTrt2U673ocTQWAa59h5CRw7bvkWXEDswXWPR23c5t5RjPNrvxyjGy4w6Y6kV",
  "key16": "4GVrKAeoywGdnXGNNRt6mVhTBguDnhzMPyvaWt5UBTGysEV1Lidmg1poppi6JDxCwG5U6wdT29dwSVFWjYwEEY47",
  "key17": "5hbZRoUNbUFRUmkcUAL95iUjj3crgocTqJbXjYiwt75RtXJKEoLL97Jo2dzALGTfUAcaGF94JZGraoxAqBV35FBo",
  "key18": "5jpqm5MoMtmEGVVUX1yLRnNZDUVmuw6JYBdTo5VHfDqbnkweohTLNuypujpS5pytQBGcgRAWPat8waz73i88oqLn",
  "key19": "2ix8MLLi4jpSUNGSPtntnH1tcJR4HR567EEhKsoBv7T1tPX9bwTeGpjqZHHUB6r6kHPHrnB5qLjb81AuT8bFqQbf",
  "key20": "6VVPo1LE4dJEKjfBMejneUydkotD2rQR8LLpqGkgoF9MCevwL4fDvHUKUHKLb4RF2xjE8Ny5QJPjPHzxYu4QGEy",
  "key21": "3HoW49q9GwqpeRnKKhyRAQAbLnqKteaBuZonSbiJFsCytGRZA9EnZFQXp4oZQ81UbBVfowj751mZLpjekbTZxxb1",
  "key22": "4YmByUAyUKzNp9UJWY72XXB8N4n9Uyn48reGBqwX5rpHN3vUTFYeyUHnrWZntecNhzVNZqSFjS3kE6NUF2qqiuMv",
  "key23": "3UVoU7XCctSGZ15eJxFSQUFUaReZ4bxxQwzLFY4p86RRddQ24ZkJTNBgbThULXeJq8GApwFMAwjLxb4SznJgWkbK",
  "key24": "2x23mwYVfKPyMhuGpXvbX8y3iA8KUefAhMeokWpdgEzD19AMC2LW5QnPWoBJghrLJpmjvX2h4Dg9qUdDLzf9NBbh",
  "key25": "63EpQcCWUrHdHivtMJY817m52ymE9Bd3FgEmD5crtbSpwXYjRfL2DKVe2xkqwVRQA9UjKqvMjDrGXgbCPTxjs3eB",
  "key26": "4nEp72Lyo7T5sFDVmhRP3WdTrhgwHwh6KPmkXV9snCowB9T2Wcr2wJCs16GzAiw9Hk3ehxbJCB1XXVQqt3RGmLXG",
  "key27": "W8hhELkWUrFckD26C8EMnH3Fs9iHu9PJAuHVLXWAe8QtMG4nkEmnq9HPz7tR2YQCex2TLHWgaPszatoBW8sFa2N",
  "key28": "5UtpKKREg1KRs64qzDQP38axCeuMtnQuvcDjqUb29AA3ktmUzLRCtAU56nPrrJjtFjbMK3X2EXJcy3FoUVSPmVCp",
  "key29": "3Sb11pw7CgqVtZz4Shz8r4PDjEj7ga9bWESU4X2QzhEfFhS19wu2uyQ19fayJoQtE3QvEKesqN2Zi31etqAYqMiN",
  "key30": "yjNBhBcsdKzBT59c1p9KFWWrRcfLUVZ2Fzm5QqhmoxbcKWE3vqLaPyJb33SVND95T3N7SnzJgb5EWyUTWLSfbAu",
  "key31": "565HDB6P7KREFzQZizGTApkZLj8cgRVNunnBB2RRomxWQXQkraaqxmu4rjZd5LHTmFTzdGkmqytWfEnfM9W9yYup",
  "key32": "2G5BrAmeXbcV1hWPxmdx5fqP7s5pqTaxodTB9RJi2YKmH63H4Vh22osjibEbtsxa8BdVTxZmUN49e6gRJg59ii8U",
  "key33": "58xWWM6LGe6Pzcc5gzR4DQmJuy5EoShaL8LTVTkfUh3EM28hGzoL8dKWTkKEvzixmEjy8YpnAzPMnbHvHjtP3EKL",
  "key34": "5SSPmm57ZvE9RTDyi7RnQiVscgwGpSjeiUo52YMxruPSX7mhBMVpJyaBt3UDaHU3kCdCfLqASi2jZq6jVJJHSXY2",
  "key35": "EuReKcFYuuEX1WiWsxawQWLyMbYgWZWARYyDUye4qWy1pTLo9DzNhfTrukp6HWCPCaqjkAwUxfgj1r4jriAv6ag",
  "key36": "5fUQYtR3HEZ5cfEDTftzgZJ2ZrKKYp6iVfRBfbpRC2cK5Ff52advXTZdhpvZSHS9wb7jgb3XtwmgWD6RQM6evSrv",
  "key37": "3Vh5fTFhYKxad7xZVA8hH1BL6UGYc1BgfPukLg4N9TH5GsQZE6wE92YaVPTtkQSJT6kgYhCMpxaXeMSwN66Z4CBQ",
  "key38": "5TsbAvZN1yFxZ2BRHoBZCXdmFonJYX5ZA4LoUcYsa7q4ewQAxF6FUdLUe9MT4Hhcv2dvh1xvgMsNB53sroefaLHa"
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
