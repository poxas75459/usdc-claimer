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
    "5dAZujbyN8Cwcki1xEJSuaofjexqBQEbpE8n4PVxuzW2dvLXPi6uAZJ1yKg4cQmjop84WP4r7HcvVFLkp4jrj83T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Viu2nwgCRZALRbW9xU2bWv3ZbumraxDNHUroSTNNvWWS9jE6Kzfw56qowGwQMgRLu7Pj6GgpCSjCrSGGWCp168w",
  "key1": "65HfRdkeo1Kh6Pm2u9rXNcbbyRfpkjhjGN5kt6kE8HCVbi3dJEubjcPRwWFeU28QcT1odtASwSbMrTcCsbeAFqsf",
  "key2": "2jfHSJDmDzkdqwkmsReXzCZ8q2HUbu4mza8DELTA7z4dUXMcAde1dVdaU48dxMn5uosK9ZZCp3NXCi3oQJhUdUxu",
  "key3": "4tZZexSJc5McAk5vAuX61omBT3a6KVik3YTn3PU1G1yWbn7VV36yS7hVaUToyPQRmbxAZm3KCztqZNg6KgcEFY9U",
  "key4": "3YBvN68qb6gzppz7x6ESdN2PdBhr6VXzWefBeEzz7BasUFBUZ99AWnsbeg6TRbSckza9vzxokMv6qJYyVb4JppdQ",
  "key5": "4mc1vyhLzkKQqZWRbrX9ps3PQELrcV46bDgqEdgTeZ4rU4S3WyythAdGogWoEqMSNYW4xgm9uPtGhHwSwkravdMY",
  "key6": "4gNGDyYd32nBGKjuPANa3QRQjuBofhNxy9A35GQA91SexE14XVhW7RwGLnmLg2wfzBuncd34jMZniJGcRFKnWnky",
  "key7": "62rxiB5ahifBMqPC8ZizPMcewK1ir71gpdiB1JidAD4HhiHNLcJcG4hcmdR2H5S4wKD7USeLWKFPyb4jtu8u6Z3",
  "key8": "4KSpsKP4ULcQWhvhKRZX1s8qP7hyxBGGyHLWuJUGhYYfcJPwrvvXV5KLwBi2w1MnngAu7yGXbT13U1xLkmQDc7gv",
  "key9": "3Hg9DGKor8dyzvXhnDqUWghgCG5P7mqLRWMjd4gWhUsK8DayFYwAHRWeEct8W9g3HSMwk4LG311JbTPB1me2NfP6",
  "key10": "3DsNyrzRUM6CMUMRLQRGn5WPShK1KhC7t5x7pW9PjDHNPPYWw9CKxJ4VWhe8GmaSdnTPvxc6JyrMagZTZH87Fx7u",
  "key11": "nTTDDDz14qDENet1uouDhDYyNXLzHW4bqpzfLnyXdbGPWp2frERfiigkW8Ud1N1X3fphM6MXfBV8hSLv6DLfMQd",
  "key12": "4rGhkyiQHLpryCv64bXTtfCSd73K9j5BkYHZba9sjVxd2mdB9Qi6EtcQJGXqXG4cZCb7guYKDzcMMRHwCMa63HbR",
  "key13": "4KrQJAhES5x2Q5Mz48kZvCvqPRkkfN34k1dcvhm9vW1kKMSQZZg8B9uHjxSuQmA2EhPKmNXG2GE1vUmZQbV5bZm",
  "key14": "4CqeBLG58P23V2gPZJwHNS7QLxaw3PjA3HjUASHuj9xSA22x83JjWcRFLnXZKmV5tQMGZtfdbtVVisHD7bLGQA7L",
  "key15": "XbsSpJdEoSMXSKt2gGDfrULpTo9pBY8N2HCmQXRjzpcf9qhuRkdzcMmCGGEv3qxkGGEpBxEwCHCnxBhtYBhcTWg",
  "key16": "32Q6GrkLKQQmEx8Rr6C9juCNgnVxhUUVJfot4EWGJi3eqWkcEQNVcEtmM1ZX19m1G23oUzrNaERJ1jWv3RGA9bcW",
  "key17": "3XTcc94NHXWQbWvJzptTGfZkZjqA9P37LoKfdirtqSm5ReqPNwNtp9onmp81u8BVuKrKPjX41dUPbXoUk9k6feu5",
  "key18": "4QyN5tAquCu9Xw8Ram67YV1HESL29vejGYX7F8VrgmrFqzow1LhcjZ6tVbtstaTVPmM1QEijnBQgDm4eF3wGasGC",
  "key19": "ac9TqVPjxZ1mDLc8YHBSn2HVLkbquoTKmxsbHUcT651nApLkooFWNnTgsAnd57uZAJFPUnT1YAvvrLrzc1Yx9Yh",
  "key20": "2T46M7L4jtNnL32tZigoV4VQAqqQFaT9rFmwemZHr2DHDB34MR8vwgBFcVsZcCq2yL2c9qkdG2GT7yetWTxXu5gH",
  "key21": "5b5S4j584Rq2cnLgnJuzTitiZVmSFZqZp4TgKSPvAXKSYdEtZnpHbDgjzqWjGsVQyAjYRxKm4e2mbQh9286cYChn",
  "key22": "5a84D1N5eG12DCEyLRveKWuiDMaroM9qPirMD5sD3xYTsf2TgLdCYwwHe6SB68hQzdmYEMihiUSkNnnnxsdt4HW",
  "key23": "2bbt1kMtNQLMk7ja67jPiwQPc4C7VoNgCydtS6SNprNHdAVLWPAcp5UL39YUznfPbadSkFHKirLhLLiCA9ZNUbYF",
  "key24": "4JSHCU7PfaiojdMbFGKuiKcqEJZ1fyH1NfBQ4WJfnHvPB44JvnnfdgBTMMpDPXG1WYq1mkh58YCxrJKgXq94LX21",
  "key25": "66WQKLhoH1CYPreq65qcVDRxAMsNwxb7rgaQWPtbfzHiHXvAUnjiM34BXE2oZcR8P1Uw4hJTwFSrkG5GvwCPcrao",
  "key26": "3Zkekg2qa95WTLJVE5Rqb9UAFfPVjQ7GqsyuF3TNQ22hp1mYfDYUoMKVAsAQoDGVqsWWBRKQPXjexkGGibGKYJYv",
  "key27": "2EvNbZr91VmQY9eRgRmqqwTEGHUX4YweqFhZ2nUrLVwQ2r98h3JXzGppG2cLq9uy7ydwS2wst4RMsHTS2N23rWwR"
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
