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
    "exUZYKZncVRmhDSGsMTxHMHxtZJwxsXYAFLvWTtj3yyjfepmSgHrPY3fd3F9Fpk9bEdQdLSiZS8anc4oKv4qUhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "av5tK9g5ejH4zsHu8z4yTaVvoT94EoG9V44mZz2Rc2pGhrdbix1zqZveFrAivF1U7pgXchFRNnbB67u6r7MSCND",
  "key1": "4gKWPQNUiNi7CUszF6vvD2kq15W8y3RoWeZ23xuLqUaqqoGn9y89EsxbocsLe9H9UkrP1zZMXVajAM5Vnvfdzowm",
  "key2": "4roEQy52GMJEujMZqUizb6Ea8vtBdFqavkCqcBVgyG1TvwovHfKjkAUhrZUe5qHJETJHVgzD2sb8Ych1FihSiAXC",
  "key3": "Fvc4D2YfB3LRWXSBckz3BQCfK9yHGVyetxYw994sGYvecJm1V8APzqjGunjXCZKDbRcCRtrrKjdWM3E6sCL49Bo",
  "key4": "4NV5vJq7zADwiF4NcUh342oXuFcR4gDD9uj2woMw9LthknE6S5kqrd4BKhwHRtgDX47x3eYaEEbjZuCrYZKW6CTw",
  "key5": "64RurvdRPHxsXFahqNWwNtBu2An5JvbDv3CsavRgMCbfP9LfJ2uZgNKk4cAeGn7szJJbaEKsh7pXvE3DQfuatgnp",
  "key6": "3V7XPeE7L4z1v5mHUa3UHmJdnpzxCxzxbvvcnV4PBX6jXNsX2N91EHwmAyi6H2XnpZiC5NHwhEPFkVBPxWa5k4h7",
  "key7": "37zP8fV4XYdfhZPJJfAN94fVeaFM4EzX99CmNFWS1gMN7ZMbjQQhoAew9LQNy6R6weRWKvYUvYDzeum4rrxonHGa",
  "key8": "XsAz5xno9X8HixdMeECq8T7QYYG4oWvzEU9uBJUoNRspUNUiSvPm1czrQPiCdyJLPFCEcatWZDrwHiyFWoDU7N1",
  "key9": "2WGCX2NixHjb32XQcP8ZLjiKNzCa8j8LQkUZwiGF25vEDkiWg7JVTUEjcxdJoWLGN7e5zdMzMPwka6Kb1Y2W9aV",
  "key10": "LrBthV8xSVns8uySscgRGHtXafnDbJzjtxX4tVE9jeUbPANYaRM5NnZG1nGR7BHfRJrqU8AFCvPJkM6DgCn49ak",
  "key11": "5HBTbAK6CHDZaSyHickyQ73S7y26nj3uh5Xf5GjtTmyap294MiZ31jvAq9wT8DxjHqxfMVf32Q2MoiCLmLKyrfsM",
  "key12": "42KzsAEgtohZVDnpZxzVy5XFo8idogfwkqZYnDKj2FpN3y3tmSAjjSL99d6ov3YvNifo8ES7sWmrJf6wbQ4xb6Ei",
  "key13": "5sx5RZfWJiWizQoYrjRWZZbbsuRZJJXL8dqZWYvQFy9mH3iwNhkzKFeZ1DHGYnxjYqo7bEohRMSksoRBZSh5cJZP",
  "key14": "2pN8EwfWimtrXD42v6QxfzWi3KNjgtGMkz33kBpaQzwaCz4VrzguXRYxcVBgKkM5yRGCBRNx9Tn3DHD3zUg9TBiG",
  "key15": "3okZmZppo9rAyrisEppvYp7vbSRQhLuceCT7Dm2RY4QRqj2GjN77hU1pFnVmKfiX2W2qZZdpMg2tsapXUXBmnZFn",
  "key16": "4KmykPSGnfMvKud2VwxsDZKJFyaArpJmi2KipMQk7iXZKqiVxzMByDW6kXgyszYHe24MRYPmW4wScUWg2MZL43EQ",
  "key17": "49WycgE2zTGDyLVqqVVu98nFDLfW1uKXTXmabg7L3iQsp5gqnz2h4G6jbmQcUxRLf7EhrFKLbPyqEYW7FAh4wFFf",
  "key18": "4u5mi9wKFBNbnFVDRVh8yxmyrZ6tmnC3Nx3ByPVDdAU2Jo4f1Kd2LrmwWHmNBwRWFEjfrMzqb8ffN3dxQ8ojRMT5",
  "key19": "5zRvBZ9fvdGPku6vxJZvT4kFCU5a64QXu7T5xQZKbdLLBqN7FofjzXDQS55Sjhawvr5esc6R57ZHLGbXfP3FEdn3",
  "key20": "3KeZqUeskk9m5b83wz13dTF25H5jL8Qk4JVNeHCEBCjrgBHSfg92HSSyAG4t4bc5wTz1DS3tYcECyPUEEFopzQNR",
  "key21": "4SEHb2kQmvY1SmEXCVcJSzq9zgHTQekmXCZLSCCrYHtp3Y4UXzwznGV1ZqFxahMyucTni2RUnePiP6PgRuo42jYn",
  "key22": "4XDjxupj1vFhwD88vs1y95BeJMbqRGqv9W8r6YUUGif2t5Ms9edrMcaP5QhFbg5ur5964KjcEGRNMUVHBD5RjiXF",
  "key23": "5HCq8tARTCw7gCSkL7tcdjbbm4V1N5XANtgSx69GDxYx92AifrmLLPqKZzukFWt73QcV6JN6nivg5cK6M8WvdV5n",
  "key24": "4bFjUhNAsKVeu9coL1qQo8DQR4tR6T6xVmgndaQesNjrRskK4oVZLfMeuETHKePNgHLc3329r8h1reoBzVm3DAUG",
  "key25": "2xqcUetMbtaxAr6Zbs443adEgjAjAebUo9X4sESW29CpQ6V3AQVf6inXbZ4LhYsnFiu2PXfVdviJymgFKPkYstzY",
  "key26": "2CNAoMobvaeZSfEkLpQftipysHv9QURBKRer3GqU77eAXfzPsYXX1FsY2qzmLocLteSG82Pr1fNsxu69CSBXR22D",
  "key27": "3adXTE8dWsmHQbKUYHdjyDdCqaKzGCSa6W9vPzVcGU2ZZU73gUD8iMqcLCoVEjemv56BAndFn3uxCbg9tKZTbZzL",
  "key28": "3XMg7BXTXVHUCr9LDVsRtkp15X1dabKffUqcy1ZfDKX1BYDs4uS3oFUxA9mLQNTSG7a7Sx6sWSTsQEQr8z7d9zrK",
  "key29": "34zTxZ2MUea5zQTFn8GtQyGNUiC9DvELAnSBtr1TAxQEs9vzusvMUpKjr8Xh8TrDxW7kZpuJjN4v9zbnYHUnJcgV",
  "key30": "BqUbudRKYtUwtPx2WvBriLsMMpy5YiatAx1NccGLT4L6QYz769E4gTogM2JTeMQf7DXamrZnpJDAV3xmR7DdcpP",
  "key31": "2vsxgjLR1ALKVVbuUMvmFh5n3mtdaue7Rfbf3P3RKWtWLRcHwKqDYw4AtRHDY1cHrpUkrNtUsdfDMaA7BExZmxg",
  "key32": "3mjtcQHzhpJRNUp2A7ZLXjvvmP8umPT11KByndxFeKsjg2Zzc4rzZZhSkyT2UNzqf35PP4RRm8LJf1HPqjsBhsbb"
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
