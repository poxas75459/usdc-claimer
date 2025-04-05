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
    "4U2UiqWD8ivsvPggjEszV5ynznoKVhihZgrJU6kr6FQKZWZoc5xC9YAAy2HRiSw6oN9AavSmci8WfbRU4h9ZfFKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bhFHyY6fV4qzwLWWoq8TaZmQNN9YRRTKzyVTZqwmrNMZURQQ3hVtUJyjWVd4QuRfaCdQ2GPYzyuhaSb5GMMbnfq",
  "key1": "2bFvot8uAQQWhT9yLYcuMK7Mm67tNQMWadRunZdQF7Evjnk1shgz3xeUgcWddotJdupe3wFHHhjAfUhkhFFGG1UJ",
  "key2": "55qxT7eJyeauDUk8XNBmnv43UoDFmiDEnBDERmkFddu7bcnRkkDfn8dPS58S17fgi4HuxKH9GeH1dh64iXjX4NBR",
  "key3": "QudG8WjTkbZfVXGL8uR5GotrDRh6qLmEV7TGWLSpA64K3LxEFusaemDFaLZCVJEpndo7Q6KuZzQY4Wesz69engd",
  "key4": "3S5UToHedY3KFAb14Y5EWPztZPGHBmFbgjWx9fhojX9B3FgzdHqZddhatwShPVgqz3Eum8QRQM4qvqZnTdQBtUYg",
  "key5": "4q31VEKUfYC7MnCMYqGCjZNZLqj8dvmJR78eesYL4fJwYyPZbwhTR8UPaSv1gP8ZRgdn1tR9mEY5EV9CaNeNK8Yz",
  "key6": "GhiKbMk4Qx9YSRuLZdwPhBb1T998xd3MUoPZkoRxR85ufDpVqMVARXKsL1pi2CJr81Hu2opLw7WGpjJ93oJwiJ6",
  "key7": "b41aZcq1w9iSsj5DMVXv7X4wJbvA8ZCwwNuDWDuSHiTNWFqAiPWMeqHUU2eYYyk48CfHYKtVeW3WgdSmxPyNaEA",
  "key8": "3kua2SkAtL9Piw6iTjHHgb7NN8MMu4bGRaPTuNud7TNpBZSZA9YDyQLzpEzX1jnD9nt7LyuWAHBXuaYexb7JTBDU",
  "key9": "28aq3i8vs6rmL1udpWhRuDg7juFvYwFYX4QAYFMCDuL59Dp4f8n7toigMKSPSDTqg7caphTnNfiVqUoxdyr5qAuw",
  "key10": "54Gt58AcoS3pJJ2vW72u7GZjrxcaLt279uaW246dEmCSSErN7wyKzo4ib3qe66ecncBSe1MGacLJ4gaSmJC8jvqY",
  "key11": "3CAsFAkuqJsBdC5thvnbLzGjpp4w6Nm8mAJb21Yp2okFP7rnnVekNBuRonV1QGYkHoDBcGS1nY6wjWzrWP9bzk8w",
  "key12": "3QM3n9DWpHNXewohJHQcvhL1LCNSHeP7BmvSfnUEe6X4LrrpSnL24yaAW8a2XjiNekUDWDBnhsuRuv9wL9nrgyxA",
  "key13": "NRXDegYbYCRqTjVViCsmnrCSstDwz6FaQfYDTVQ2cNZtYLuAtGccYvJ9hGHp7u1HQsTecNXU6Nu1Gqy4sagWHXz",
  "key14": "JeUEapuwqm2oV5zEdt8t7VJV5B4Nvhqo5y7ctmAV2NedNmzpzcx4xBcxUM1bWFY8LRsLaT24nf9cmAgJpsy4CvU",
  "key15": "3eyuvcCqv9w3YGeG1ETveh6xaMqrr7xpuzLNjJfZm1Rgd2mHqUzh12PbXfrzP8vXjvbueai73jKRVQ9UdLCgTCXd",
  "key16": "P6CFrNJwhxc5hj5hEpZZtB4vUGFMToJVcL9Ji6mroQkDaYuBQCpsaxNc3K2QfP9ADiZWCtRrZf9RJCFCvRbADKP",
  "key17": "5BUTpNXFYvzHoDfUcQyCRzFB9kBnzNemTgkPRPeTmkMAVVM5qeX8mjvjf8YpSutMcb4F4qyyZAi5yJ3CoFw3Lt51",
  "key18": "2f2N1Gawg3LABkwYBPnu7BQrvtr8KqpUt4VwqqqAvy6zfXw2MwzwAsxATwGyJPooosuh3HRcxcsZJdwPvvB8FEDC",
  "key19": "4m8o9hwoCjbZGZKProKXTGmngHUgcRTyyqCZMZTkVd2x5Avp3r33qg65cqwgBFmfaZopZfgm4X1aRLJGzCe1XsFZ",
  "key20": "3vs7USGphziomTbMtzNrQDhvPhUgLh5ZWciikPamJsDsFosBPaENfMzVhMzgUWdJUe2HWnzZsDi5QuKb5Jocsd8G",
  "key21": "4ELY1tBLjY8ZL8HszfCVnVc7XGZjRQ2KXaEvcJgjYwpvczsdfeUzvmdUqCVWeaXcvDsXRRxyBczSUAWcGKM9RL76",
  "key22": "bPdNmqsb4cxWiveMpraBYFWJh5sVjoTCVWDyAmz5mbKiWKj6tyaDs4MUE8m4KEAduRSxT627opjQinwC4p2Kccd",
  "key23": "46pHiZXYKtL7S866EQ4pvctw97kxeNpzQd9Fwej3hAKpMow8NuBLcC7npS2q93iSRsXAB2AkYsmjPtfasffzHYys",
  "key24": "5WiDVfugN6Pdc61sN9YB4DwnWzej8W1zwK3sCuNkwDTyzAwSWQEWGuQzG6EPUiWUdeCLCRScNoUHh5weahAv3K8X",
  "key25": "41oHEJiSCaRT3UwNvYDk8SJokWrRoN8FcBc9oZcXePpVfRzuAYBAjuxvwcpwiFn79YBgBCuVxenaB1Z5ZXvHjQgh",
  "key26": "2PM6qff5pbhjgknekQKTvhtKJT6cspih5igYqoxpfrgSZmAZRDFvNEZk9zRAgh6h38MqkWSmfsZjpJBx8ReJTiJ5",
  "key27": "537Gd2c67xjBd1qtXXBh5S7K3hDPGsVpwTPcmVmPVeDGsRMb36gg8U5z8LNw1qDPdmue2haSy1gvknn8Hdrx7LtS",
  "key28": "41CLAD8FgqaJzFn7i1ngDNBYCon2TX2Js4J15UXK8wNTrcH4c1rU1ru7iRZXcWJGvcQqeZLkabpx671VY1jXp3rh",
  "key29": "42JFhqHuxLH8bExQa3kezkqokM7zuxneudrwVJygK98PHB1Tk9v5X3vGRygTGWovokQQEWdWM29HfjQ7KvmQCJeV",
  "key30": "CiGMeV9DE1E5sXojuaJU9DrJeSWqq1QBcCTz4zMtnxzQy1AsNPURMagb8vq4WtHtJHyvVNXgVJRJXZPC9N78xJM"
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
