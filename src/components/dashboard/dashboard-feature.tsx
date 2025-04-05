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
    "59hLBVciRQ5QW4QUzB4QJZnnTD9niZYx4VYtbm3yLPRRToXji81dM3YxSNgc2Q8QC4AKSAGmkmSfDBfbd3mPqxSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmWJAjGS9AaUntXsYJw63LUxpHaNwD2qVX5H4zbeKH1GHieLDmyq2f7Zqks83wQeN8P3YvsN7DpSTePaqwDSXb7",
  "key1": "dmqZgVqd7Epnq4pz5uVESK5CJRxgf2B8YMkspX6KG7woBuQR5WU89kTFS2y1FktJxZvoCGDvLNd1QUjxRqNXrEQ",
  "key2": "2kcfXHMxhfsewFJPnhhJJcMXXRfgn2bmVjvqrpGVr7w7Wiii3zhhVW7dJ7rYKYVaXn3Gmmc7wfuYSDAPCEJXN3DB",
  "key3": "2rtf71dJ9xZf3PgDt5fzSmePg5sNMfgs4NUtNdU15qsXB3qKhZoLzLKesT1JLppmgwxxc9LWCThmH4ZsVbnLiXvA",
  "key4": "3fnuJ2LTJ73WnXcXXb7ynVXrV3Psdm9GzjiyvnbxTE41wCktfwQSwfzuiXtqNMJg9Z6bfrcD4Ck4B2Lf6h5ppFF6",
  "key5": "5WuWN4GctzZQJopJZ9ujH3dDkgi8BLA5MgMBaADqb2LhzqpoYHTktBZNdgmSpZD9dzW16kuv3ZFuMhZLPG3x9Q5d",
  "key6": "4Uce4rTCu3DeBE89mMpSdzjAuXVP7BwCj3LG2Jgt1xsPpGeRoaw3q69HGbGVsy3yh5BkZmiztACLntVQ5MTrD3pQ",
  "key7": "5GwhVu5obShLmqnFmCsAnP7N5fukh36hpvnuX1UNysQaUPE6hQaTTM2MQAPhPHyWkQijHpryUFfLtzTFCbDaS1CT",
  "key8": "2x5R1NGs7VFtEFyqK6U1r1T2ztVhZnqmKJzaor65us7hEYLDoi2PvDiP1H5bHog5GaRDVbHnbDWMJdvB4uHZZxXS",
  "key9": "3h3cyLCBn434Jzk33zuUJaZik59XQrUp3UT5z3EzB6bwSnvghYDsK9QTEwAFGQC7wgePTcr6yPwrzQxTxE7WbEsJ",
  "key10": "5S2bYn316WQSsiw9CgjEMnx8ZtagBTx41pSsBHwcpYpYhE4LbFs2nMNYs2DtgEco5dfizbgHzfdj17wvZMwr1AeT",
  "key11": "2Ku5wJJkJvPN7jZztJ5XzHxcYpn5QFWApvFXGT44atbBogzfMMTDvtzSsN55RW8Y22QfSn9RP1GV2Zqy6yptnAka",
  "key12": "3obCzjmeKf6vuagaZFQ9quLo1VtkscHwogFGbqGGoFnaHu7onPZWC2neDNz2fD9wzdANfRyK2qmuSaoSS8RdwYad",
  "key13": "TcRe8WW4fRutzXdVsYNnTvv5cxHyfMYJG3gNsqktnAGjchh8eiz7399TuzXx7m3zuNA8L2QYdM3ae33fKZauSfd",
  "key14": "3bj88RCmSsDuwPFat1yVwXr3pCnuFJZbvKPSXwK3EgparHmJ9Y4BPjQ1ZTDVea3vXKm9pSFS4J7itB1QX8QLGBDD",
  "key15": "4XjVBZ9d2DH15dQKQHdQd2AX8qFSnjKJu1At2pSWkUEhEXHYaJS77kUiL3zgiwteYuBqN5QK5NZuYdLLfHCvAhk",
  "key16": "5wdvZr7H4eTiTRatyz8JzjkLyvG9d3wc8eqMv5xtAzj1iPZKzYhuPQByDUSRyLNB1chJ6FZ2ucHubmr7m9JajHCv",
  "key17": "5WniHVs2LkMdjJrkKgBxXUaaaad2TfXUFBoW7rRAshPqzgV42M34tD7yTCGaUhMPGbZDwtuCpub3oYciSN5EhpUZ",
  "key18": "j1Ntx6TADFmweuGzdkgzxHSx6pUR7n2wvj6M1pB4m2F4wtEgo46uYV3XvyTYJaYMFdxJ4g5Twpa3AbbmbjCawmJ",
  "key19": "3Eq7u92wrGM3DjK6MLFmUZoWykzqiVapBfZX6BgUZLJyJora76vD8MxkA7kQ8nanNWuKDUBVwjs5HzJgjQ1PjpA5",
  "key20": "3UbxVXpevqhdGvqLdik6qVbyHDxQfw2YH6MjzSH66KQ2ZcuKJ4pv1uc3tp1YoTncLgxTrebyHjEs8cdB8rwtU3VB",
  "key21": "3eJXWufPBGmRSWbir88oqTWnk3foM9Mxzgm2w6Ts6kf3dA5LkPvdNvRNr94uAKDnPoUaGQTjXh6jzaoCBSGtv3u7",
  "key22": "T7V86FMistisXzo1oAfxskFi8ZHRVNccCmmbFzC2sAf3kKmn7jbStpt3CML6xLGXZWGzRqx3PXoMqvmTvwvuSJc",
  "key23": "4iwh6nPpVTNt449epHG8GqnjCTs5qkigL11SdRLMGteFL89Q9NgLTPRPvHrtUJCp7yZLVsoN4fR3mYUwHpcRvGLk",
  "key24": "3UX8EHGnGqLxeNwnP8wMnn4fc94wdn54Po8dW99qoYzz98H6TnApZxuKMvst6qkwZEnqAfYqnbRw74dwJPumhJZd",
  "key25": "5WkXiPegcbG12sfgsWZKEtjE2JLQ62ENiZHtaHge6pQ1ctTfpNQToZdEz83aXgRqn8f2j5F4Pik6MM3ctE43HPbq",
  "key26": "4NLwJBJ3j4yr3nV8JuBsyfwJHjsLDGJ3vKUJdibHAgvcZL9pPwuYiwQSuY1SNPmiPqkQAznkoge2ezcJfdbYRd91",
  "key27": "3SNdXvVVBXKRGegS2pcnP2B2WXzQvKpvdjJhMShkfAvhEg9AUtX9Siu6CBDH3g27yjecJAP9Hd8RgoiNtkHY8DMk"
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
