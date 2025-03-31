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
    "YMLyM9wfVeS3yq2fDCTEEeiQYk9jE2mi2mYWJ4ZBa5XfbHA34ygpuPB5PGyfceRUG4XrjfqvmJBnCruSbfTeQjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAWCVqkTkDHNaiPWAH2WokKLnVMZEWYHrZvWg9WLJzDdEJohrJGpWiCP4TnCEBKcWBVaBDHM9mErt8VseSUEv6o",
  "key1": "33tFhXwp58tKgYtCv88xqyo4MALvDVnC8dfRPrSWRXrzU42BFZqQvwn9vgHouxDkyPW1Fsdk4gfy8WZqa4DpeVZj",
  "key2": "2azdAqH884EPJs7USZrof6BB3xEKiN34dmjRvsg1Nn8kQwdCY1XKQouQD4dcRWqecXiupQeaMun1y3RfzsuXAmLz",
  "key3": "5GK2b5hF6w2mfBFrU12iieyuHEQFFcnc9RY82HRfNypav8CeFRJWmNb193kNQu8cNMiNLmFiZ8RXwe3upxd9Kv71",
  "key4": "35y4uNELrkrASZkMmVta2JGVHFxLrwKeTB1t8nb9qbCQwz66V8SkZbznYRuWXJQ3khTN1ch9HhruX2w6AKuBEMn4",
  "key5": "4B6ozaj9XHFnFpXx2ns3u7SXcBzdngYeyrCBA54jPGHjnZ4JdAJ22DFLaix4ofNHzMA1wH7qdsovsHjyYVUBDtPA",
  "key6": "119rBbm2ZeMsT9brBF1Nd9KgiU1az4FTVCVw9adge3Laa9FBeTV9qvcumsaNQgp6t1pQKUvVZsmSJt39U44vof",
  "key7": "23rpPGgufJgjm4q9awzjKbK7PUpoGyeJAFyNquH6bpTCye8vh8CQ2DwwKnzMjPcH8U3zCb6r2hmtcqRxFpUtjYRq",
  "key8": "2L7r8CFSEDQHyZnu2ZyfVwJ5viWYcbzFxdwrxLb3BwLzPYb7abiK5cw5ZjHbEKyJTtiNiUcAYg4kYkoqHEfZhLJf",
  "key9": "5gGfFGJYpjigdkdkcKBocTqT8hDNirUe4U9j6XrfxXHAD6XN8L9aQRe5kfLNxndr22yDdKVwcqCBxeuyTag61LLL",
  "key10": "2C7CfzfYoB7RPiXfKbdjZTQwxfuVvc7Lp84NqHZ3uhuxaTTjiX9V5D5mi9eVLvEMG8V8oGEdGYwZJDVGGAwTA1ki",
  "key11": "4oerkA839kMfjWbSU8WmojBZwwn948PjLKFfXzRCiY1brB4YFdykwMtupZPtXDPQm6bvr4E8kr5ANsBWeEYz9HFt",
  "key12": "5HW8wjrwyD4CbD8wrw6bTWwrN182tkp1ozZcFq79ok4HbENgbYuGmQ3JSBm3cWu3mHtfmJvyWkTSFBiMPFpBCwWJ",
  "key13": "2r7d61kWBui7hcpTsqR8tQUSZzHiQqfFLf5uHzQdpVu2oQkSNfeQpDpdoSsxc6vjSphBfX8Wz386C6AYGmib533o",
  "key14": "i7ZytsDz7Nni74saDYMzgzSJ9UudpEZt3gFrLUmY16h9rUUUBZtGc1GELWzaFr2cuCX9vq4trxWchfxzKtxPcAv",
  "key15": "5s88iEToG8zYQ12chvB46fuNrNRrdGd4DcDURvQBATty35Rfwi3z52tcMusJeVpsjFdVsnxvNptxU84M453iNJf9",
  "key16": "5w6JyFQmqDF4WECvJvVNtamGE9JhPktCxdzBkDcf7JxwcSPUAKzCdn6vuGcHRMFgKBejqmqsD1FRg8maQViAp6DS",
  "key17": "58XPh8zpxTk2HRCLXd1X3o93UvcKtEoF2GFsnXbZueiShoE8Y7GvFwS9TGREhGjDgPnFH9XkYZdwamtdfiwCutd8",
  "key18": "3XyhAFJMxZ9XryHBRyncqmEigBV1bdCnA6poJxkQadZk7CTWCuKJyySJD11exVWhgU28cZVngJWhEQWsW2U6gqvC",
  "key19": "5zb3VWbDB2c7KbXiumC1Xmex64xTK4DEqQAX8jV7JBGzEiqxvDspXvBHRVdw4H7wyGB8vrjm2FJzwETzXSUxYNCG",
  "key20": "4AAz658AzANj1UQB9jtspq2KKsavgeh18rKfJinqp2weDhb7Q7QLbtBUkRc4W2irNUC4NaPJTwAHyhcsMGxsL8cd",
  "key21": "2WvBSAyshRR7veCi53ERDaUtkdXJw8KnhiDGQH6Yku5YS1XUJZEN3BvDo81QxHD2Dnpw27rPNtZLWbeouFGYYJUF",
  "key22": "29TUsNXRC7S8kbPZf5hoaD792EqbGdNARveUNzSNKcLtZsrH2n2BJgySyYJinop74zdtVBjRETJwHoEeBT3u4J3o",
  "key23": "hii48dUz6FUcUCV3dZ4X7XEBkpczBeMU1jiu8Yg2fwufThhMGtrHfAk2C53pYnZP6Xy2v51NXmR7pkozPMZV5Fb",
  "key24": "JWwFTwKkbPqMMDuzA1WFkD21as41UjZJe1LipkD74uDDU4t7WbdbXtvYjaHCGpfXNhDQV6sGPk5eu4qcGRvidfo",
  "key25": "5xkiJ3MxBpVi7GDPNJqGTTX7U7caqzCH8ATGo8KNNp5WTu9amLdxpj4SEtU9muWmQ2bwCwuVWzUqEHAiQSJd1gVS",
  "key26": "5duqRQMdCEEEmY4VX3CmScTPaecjaXLcb4jYy14FaitfEdDYzMMyPXP3C3fhU8gv6yq3ZqgKtuuDQdTEidyzZHGM",
  "key27": "5bzV9v7f581xqWDwx52L8cBkR993CnDPoQqirxbwyA7ze8Z1J97rY8k8pbpkjWHx5ghX4BfNM6YWymF4odJ8YNRP",
  "key28": "3bdCJjVpjuW5t9dqgcrHV73rrYm9kZkJkkzSj1vEUM8kA39LuGVmUg6qYYHCw1TXrDBUPSYYC8LyZ9wpq1jYAEBB",
  "key29": "5PKYzy3SvVRyqET46f1YqAeQcCKCyHMghWGoL87sw6S35b1k3xC4LBCFRRKqub57wGdfQTpaB3jtR7KFMPtuwbc5",
  "key30": "532iaPoZT9N3m2eA3PhBzAXvaUyVbumZB5bTQ2AxwdhihyiRwC5kHZYSVpT23JmVH215WfsW1uVfJGLc2PGCLPbG"
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
