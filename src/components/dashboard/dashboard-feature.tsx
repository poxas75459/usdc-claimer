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
    "42m8Avy9B2vwkfwrm88nBo1e9dS3hqZr5mdZRCTtqavGgkAXgzUhghTEPtqeNCvvbbkkCcSKj6nVUXnjZAq255Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woQmdv7YAxg21d4eH7Q98D9sgYY3xWM59LkNaQ4b2PJYZnBTGZaGsk5ZUBm5vhfWih1h5BVf5c35HTQ3DR7Tyoa",
  "key1": "5GY5HCVnSsggYy1Q8izYuppZtxzFGL82VXcdwcEfkMxQtMdBp2uPCiJzT67hCk3TkhfnDQBqWPjAcNmtmyJGZgBu",
  "key2": "3aeP9TpE6KHRsyHEz4npE9zRDZkAsCo6oeFKQ5UsBFJRgKM29DKvVczv3tLuc59fcJ24N4GcrvVGbw2Ajwj5Ccrw",
  "key3": "3rNqSVS4KDkZGe7PJWT3u8TxyKHfxHM4BD6QmvnMxnfvHAPxcVREX3W4yCUydtL2qeQTRAi9PrnhyLL92koP1Nsr",
  "key4": "23YtwSP2H2bLCNxNZ8zyRSKpB1iBv5k8iozije7oVZTS8J3zkM7DK1PDkUJCEgiwG1G7fo9pCr3CgXr2VTnsX9Er",
  "key5": "35rsitm9hDtJd393X5W7PKqyUJLuDFkvQMeTfNJqZvv1JLecByKmtAVbCmAykAS7C13bjKZPsFoihYCmcFa4YbAo",
  "key6": "5T35Q4RAvrHFGPU3cJWgem4ePKWTDjGDu9p9QBNgRtrbMMqwU9Kw4huvssafqUWu6BrRcrkw5jrRJbQYi5zAwSYM",
  "key7": "5eAK7ig7kCeRN8WYrPcRieiGUnpSfjKyDBf9XXoUgXCLjGbwBbZjwu1G55puABtSDLJUqmmrYDyafrfgr2n2E6ss",
  "key8": "5LmVzTpkLLHxpV9VZeq3aWwdNJr86Fb7hDycwGKhWdiYPkJbq2ueuF9mm7ZznMgtQcbyMiNXWHVC6hQv1JkjtPNu",
  "key9": "53AyM8mo2hs1KpWAwhH7ijwQjacuk5VoJXrJmCaRcWBjQJMduyKGQ39qcFPRZrkbbF8uX65HjeHkB8DyeQjYtcjP",
  "key10": "4jLN3RAoR8YtUhWJjAYGiEKyBqZa47muL9VxzLgt7FN1H6p1ta6vLt8uMxqHR9kMWjabiNQaVNmQ5vttAZ7eSVXk",
  "key11": "2vEca4ttcJEcKcWA6w5wP1Q3SX8QwbutuVAAN5N5zTMV8r7BH3n7NkhD8q7Bbxasbwrt2a4NW1ysBaypAERXhb4n",
  "key12": "54DEcsMKfuZL8RWNb87F71KxcPkgVBpCiQ9pA9pydHL7ZmA9cEPYBjEb8yzySVp5DN6koFkaeyiiCN6APAWSJcm1",
  "key13": "2AjjFYJJ19pMHawmZWKd2teHRteFGU8prXahvyHE6WcxTm9egPrv53qemDwDv7dPEtbstyGuBb7BiJefbeXSbt6u",
  "key14": "5kSkWr8KP4hain3ZrDkannFBG4kHxmwgb7NjNUsVWG1xKtMScRgcjVUGfm3e36SjC48keRphEk1Y9KzDdoYj8j26",
  "key15": "MnpkZzUpjeZfPCRiVyFfAfGsYJexpst34jVAUSNdrUBZ5bm4impwqfEzCc7azE7fd2oSSQUjKnuqBLTFLm8wUQN",
  "key16": "3oBLKqW5jsVZnm7JCpBrtjmKoCyQGDEc8yFfQsCPve8wN1qMbKgjKdEYpPxtN8V9s28UMs281V8JtZej43eHR6US",
  "key17": "3Kvxqnvb9mJBUTtpzV1h3PZMg5D5X4hJ9n3niR967DMCmdNLYa5GgAQmocR833YT8K9gQKQpeBqjL2YzmqDEDgSd",
  "key18": "4CfAjickGbqFDCbN7Adq8FZ96f4Bq949Ndxoto76ae52ZPEtijjNH4f1d1uVrw5nXbXbGYJphn5PbtACQVZr9hJj",
  "key19": "2Wdv2Tj5pz82z2RSDqDj5UD2oNdXDK7C99DkPgRvZ1eQ211vFqu7u7CLg2e9GmCPEdj9mV6tRj8d96FekMcgo8bb",
  "key20": "4o4fPc1HFBucg6vwxJmBrXeDrCsiqnGrn7XGTc4PYG68pQh9XJKv9JziVodR1vELq1QFbwnB6wgistKFgKTmHWBT",
  "key21": "5K7SHnAUQbeJFnR6hGEWHwXgd8vYUioJ4fE2mmBVUg2Jx9MFgAUycV3CggeBy4N13AVU1LSHBDZ13suip2ZKzLgR",
  "key22": "5AgVmwDD2WZLRoi2LseJrQb3BUGTmkU5y3UfxoQ2KsiCbhLPc8iRhUSU1z2Wbz3JmM2Qc6Q99uWPLKTPF9UgfaHH",
  "key23": "ww7VAMsBd2wBphPnPodqpe9PjZZvV1ekuVg2VGyMLjDstcecrXKXPbmR3vbyxxBsVTAQoUy7QNSQdmPJmknaVgf",
  "key24": "3AogxdgEvQ3vsFUnrLRXP7TT1F19Xk441TUFzxA2ori34ydNMxS61Cr4wWpDYVve6uJr5RRGaMZWvBNNmo8Z3NFZ",
  "key25": "3tN3fKCEYqqov83aBxVFSoDXrk6eTeFXHMGm7Sdm1zxMZ356qNKyeHdQ7TDuiAEooKDKmqMGiKiLsBwPvPKv4EQq",
  "key26": "5ALNEzHh8hS1ha9j1hvVwhYi7KMQRbyYuVDBfjD1iFgCgpMaeMPdUhBLxR5WRPaqvSuCjiQCC2KWTrFnFS6QKDKP",
  "key27": "5tEnH5A3fWKFP7c9hgDxgN3tyf38cYgrwekX6XgReV4sAu8xz6cxGpyvEDufupNUkMg8bNmx3eWgWcxAS4yvaYTw",
  "key28": "5ia2ijktBxiqDeSmWSk8PbmdESwfxfHud2y7Aya25YmZ6AB2im7VFACdJ2JH8xoZZCcrrmNoFwr4pTZ5iYbfBM5m",
  "key29": "3isUTreJZeK4komK6BpepMkuS4MM1VPu5nTeGbyMger8Tzypmwp4ftv2WHJhRzKsq57ci8ehgbcC6v5yjSnxaDgX",
  "key30": "BDzX55QTMdtgzZPDeqJmuvmsbx6LLVR6st82pWiY9kyEpi4iDdqEUf6fAzmUU68b1NMHnBjK4dJTHjYnRn4aQKF",
  "key31": "43eM1mJWQtkgMxVfDhH3voy7g7FkcAsx2RLtvqN4EwRpm6Qh6bj9K8D8jV82B6HMpEZvLb9AGmnQbAqrDsNC92s7",
  "key32": "2kvMRW26yQcbUQhBEMSwjSM3KjQ99uoALxBzGVEocJZ11By5Qec5oVWSGMWCUyeQ8CYuoB1sgPCSzvHqc4WMqA69"
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
