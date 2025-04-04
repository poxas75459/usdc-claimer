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
    "4mJr2hZaYrWn5r3WcTtahcJR7z1RdszEZFCEiojfWa2rSpudwCQ2m5feRLkuc68eFrsMAK7dZk3rbPUFFVXmhYuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4ktzR2DvEUP7rMen5ujaU6NTCXU2qepbhSwyRo6mNEqudFoeQXNFCJkw79LGMr6qxuq9Jt5wsd2KifUVZHsDcX",
  "key1": "jYZvDqucQeKsTw9ZhkUD4F7jKFNk8EKDYj3Cia34b5QMM26dkTcjwcweEzs1UiUBkBjxC7YBV5wjWupGt96ifAY",
  "key2": "2hUhaS7tRG5ioTiwTcFToHRmzVeo7orWVkKhcRxXqzv2KQBv7z6KBr5uiRhKF9dL9bfuTezNSheUgZsmCcLhhz3F",
  "key3": "4SSd2ksgBWUiRLAd3xvPbUcMzVK2qoWouRE2G5H79a8nvpeFvvCzTNHJ8aqvNhsBdjzjpmWe4jwjyR4mE3qemExJ",
  "key4": "4YsDiz4fhyebnPeBP1MTQiwfKH7EEbgc9KePCKq47j9cb6C91ewaxjfPwFBNwNwhHdha61zttHHxJXckUuLvu8hN",
  "key5": "2aVPTtYQgdsbDAQdBR9BiQ7WXRAWLdYtsS8ZjZ6PAwcSsWS2dSNarxzwBJWg62fUbhLhGgd5QW8PHyNptM92A67j",
  "key6": "2pQHsFe6GsAzzpmXbZpL3q57ZFAtKjDrCSnGck9dkk2kfUwZmdXgCbkPddiBcahS86Ket6Q17Z7RRPtpfn5U8S6s",
  "key7": "5iUvjKnzud3CTxHbqAGQjnhFsdfgusWG4YrQNWzYTmXugPjcijGbMqvkxUScfrzgBRZMusz6GMdcgjT3DpnD5tBY",
  "key8": "2ABMC6k1ELcNP4gryB41XHUdTyoXbu5wKjPyiXTY1rqE3XFjfNtP6UP5sc18DePgTgJJ41FeaK9x5pqyyFcZjyc8",
  "key9": "4A86TQbmcSS1QmBMDmEWhvdkUFeNHALnDAQVVmfjoWxto76UwAVmnvKTvVXzm6ZdcUhSEg1tdtEVkvJ4d7vQkHsT",
  "key10": "iSHaHyWkjdWGrNYB1CwZyNPWyrrVgN1MsAP498pTBTvxUmpfHatbBVqL7Wz24EoTwB9ugewLUuDRxjr2LgphoA3",
  "key11": "mursHwL7nRknKqcALQbh5NY5uQFULbguqfPLNGjpKfsMRi9bx9zqZmwKFoYFMgMyNA3x72T9dKbvLxxNQy2pepu",
  "key12": "3ntgfCkAw8BbZu25JZuVvY4XLHFhTM5VnehVp9GtDbFdFqHps1Wq2JcZfsWjKLpKg4ddmipPzEc7tvXHoUk6SqKa",
  "key13": "yvJfoHPpVQmP78ZgVtVP5bukxnXdLxsdi9g3e21nzj1UqExusdLAi2Z1D26gSvhfvjDHjRPxZ9orNhwVhDPmb4R",
  "key14": "3ZLq1kYgUNB1W2moyVCxDQRpLDa9vHaBwdh4msZGArzKjPYqzgWcrg2vWqDHmK9om3msakhs9eSHdjFSiBjStLFj",
  "key15": "4Qy4hEjptCzW371vF5zGtqPafYZmzyjcsYzMgWSJqsGjswbqHxZoVcEAKYpkRPfGtszR5ZbEArhYLhQa5GdiGxNP",
  "key16": "4qWB8wBMQ2kwTqkYTBhFy1TEufNvGCXgKvoMzUXQv1reRkxsAUenuiTtDQJrTJYFWzfrT1ePLWWpBZv4YcptaGZE",
  "key17": "5pvd3wvBZRG5wVpe5HM6CU5SGhLghLbEgNoj63AbtSvaRqTxYbqDrRXVaRuSP6pNpovG296eKg4gW4XtYBE5VPTt",
  "key18": "4E9fqwraf68ySGsGJLku17xkdjH89iGuC6gp3ACsyzhnR2ERmfX5B586i6AfPTN1nTya3PKQZhrAQd8VbsxQt8Zn",
  "key19": "PejfvLaF6NTU92C26XH3Z2hENP2UBAYAYiYZpaSzxj6TXCi2YAxH6dcok88PMFMhnPqws9K8L5pHVi11fqkzzUa",
  "key20": "5bAFxdRLB7a4PRAGZqo6w3kAuWLJxegg8A6LKBpQVkMdMgKsJeVVrfBcckMtkKNaKmMYSEue4BpYSqFCpfzFEz7f",
  "key21": "5nCG8wLTkgK5XPa9TyG8bpzS4aTTFX9CM7zBQBh1bJAwqJXR5reaffoPXYP5kRm2nXRgBpDLkzjEPQTT4SP3Quwe",
  "key22": "27qmSDLafbkBNhVekmz2NjyQukwzbrQd42XwvLe8QJViNe9mKQBF2fkXgfYdw4vgwKBvhGwRmLxRUJagbE3ichVa",
  "key23": "5iSf6kZNgzKFa2W2DTCDtJQBSKSgij5RH62wd4jEkcvC2vea4nUyuHEGLmvzoPg7oaJ3vvfWU6dZUhVh9fRgewz2",
  "key24": "BD9jSEAcyZuMehvAxqSruCKwL6J4xe6ZkMzQAV4BtecsaLi9R3tsMVgsU7U2tQZzYJ4mWN8kNjaPXDG4Rd35uUv",
  "key25": "4Vq61KL8xBpuMb2QPLYW5hFKfjsAcHn6CJqqBQa4s6nmD8PRPvK6RGAsHTc7HSdXX9d6fj5zPvsCFdvq9UG7PxDv",
  "key26": "3EkJNzurbRbk7TAYbqgQq4CFNsEvH4GWqBLsDSxBjPDRG3MQNXXCKuZgFCBSMzhiQ8G7GakS2ugcfqfrMPbM3GWt"
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
