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
    "Ea55HNFmd9oEFNJVR659qVuqkA1HC6owi32cTC4BBrYFDPrML2zHUAcFHSurtnrmdXJdLanL43ErTC27Vg83h77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54pkfARAsprPDQjvDdrXeS5EWFhGvpCVc7A4tFuWzMKcxpRpkfebjZgkBjPCodb9iJ1KgHL3vwPkVqphixP9Xs8V",
  "key1": "65LYyL1GL6YHFceBxcWebut9yBDaiJ2t9s3aTNwvX4pY21LR9HWts8JfaQyyoxMfVURHM6UHq7wy9FaoaNjhB6hr",
  "key2": "22k2LzdyPPwxmXh5hbHdjUJZKjeW3hCnYAkVkZ9VNPTgmq6qCmrZTai6LGijKgBE6npYUjSCL5HQu2MNJGNgDKNW",
  "key3": "2MQgbUPQMm819KVG9gP1wTSjw48vbfBxjpjZXS1qwyAkHAaaWLwBH4BMkpfqWmKCtdw37NP1C65BgbHhEsXWnEiV",
  "key4": "5gmAcNQUjY8zozq1AsKUqP9Fvh5TsuStzfdvyjSTeMnLvi1fBSUUiqVqBtX6cYvwaqDAMBqnHVTGy8GmrGSFdhRz",
  "key5": "5E91tKitNDA4iGPXxXgnKXSzodugusyAKYgGVGP6LFwU9jix6xxgBuWc2xqVrGrwZb9irPN2S8Lz6TPQhkYvmqJ",
  "key6": "JiPGu6qgTCzrzsmtEpWxbmp4EwQXhsLxtyEgJwJCUfYXGoHA1uuZzJnb1gbg4ES4X4ajywTUsyUqWxSHkWJokj7",
  "key7": "qdczLRQsZs5AFWgScUkgMdytH4AmUbgGKcBkqx4P4zNaQ8EtVD5baTaVxUw4UJMKgw3MXtVQFZ5hNNqsizwduwd",
  "key8": "3ksXvvqdjo35Q2WmrXryjpwc1Wj8yL842FHkahxZNLWEcx4VMpfBdhiYw9b8GxTSi5pqhZdUtGEM4fa8SxB6dshj",
  "key9": "5zLwGauoMUa3o814rs23KWRT97LNE6ttepgZtZJJtMNsez9EJKx6VHnaWj5nZ2bJ98zm9k23KBAdb5zWowGabwNk",
  "key10": "5a988dLLTEnnScF17ccxQLNjMwck6FV8abVQmLKfinTdBCG5dSanFtr8pU1p6sUTZNXqkAVBMsiTQYMZQSvNZbSk",
  "key11": "2jpfTuz5PJe2vhjUwr8imyzERQupedYY4BtHTa8Wo3XcjT6YAaEJFXSMN7XY1S45WjDBaecMpJQMgdEMfZV95QwG",
  "key12": "5qeTjn6w5oEHhfGgj5hUFouNHYiP8AjuWyqQyFKr4aJWmPTaCnHRnfL7ahWRkVZ8QCTP3ir4WJ5NrcxgtGab3o4G",
  "key13": "QJUzz4DaLsv6XBManTqSSuSKHRCGnNCMN7BNhvBkgpVRoJPrynU52B3QH6RcLd7vcQmd3afFTqx2QB3onA4DVWd",
  "key14": "mGrB5ZyVu48vi7YS8znTqm9acAXTJyBqJ71PB23DF6wcZWVuJqiJj6CPNXJ6kVZgYjT3o2xqvA652QcBGWV8vxu",
  "key15": "3ZRmzYcgakYgdtQXGbvbQRkZQS4y3BxD6x28w9KH6Cwzf8myqF5DXr8h7UhjibpUGj8GLfzDHAqBKtLqXJCxbBgd",
  "key16": "3XpzqXQbdSqqcndy4u5gbo1gLxwmqYbMhztAysbFXwng6keoefUejQzVB8UHoitR8DkoENpsDuLEzdcyC4trGHke",
  "key17": "4ty7kbquPXCmSr6jThFmi1zaBmyzxG1p5zkfcqpyi4ignsTiuSZe4zeJUACvFHtwRgPKLyc2414P9EuWyJoCrV8s",
  "key18": "2n6CLW6RijQJqqoj4AbkRyNiLzCvycHMkMWQGk8xM7qyciBCp2z7hVtJoZWae3wT84gbFupR9VBcUg4nV8ZSg3CT",
  "key19": "55nLnsPF6pjat7Fn3KFvDjEmHP2jQUkJm6evpu1SH2JGSjtaLAVszAmMFHdQftxBPqZkAYapd1AMkx8nvjRd5mAu",
  "key20": "4Kf2UJ7VFWqWeNFn3ZuiLNJXedjG7Fywv4xyYzsGPh1GopaGeAoaAYwmEvWgqdampiistAsBgYXEpPmw5JEKteZP",
  "key21": "VV69iNfa4FpwsjYgPAGbga2WwpeRX7Fe1LMPqFXfoLfpGNQZz6WtXL54MTUCDJPv4rVZsWC9ZpsBSEZZLtAzjdc",
  "key22": "9xDzTGyLJjKnvbzeAUcHnH9dSzeN4bNLCHxgPLtkcXWAtiHLetgt7rjfrpJXSzgfshpWbkoRc6tYVkFEESqk6BW",
  "key23": "41ZbwHNbnQYsrWf1njrXCWPTcf68m7aebsd6YtBX1kA98Df4xmQ2dx7qgTu1Cp2Xsh2ZomV4u5GacxxBYQekhTwc",
  "key24": "3987C1HjFGhj6kkyxCoR5LJENCD4AmFQvP37R4WRVPKxUoLWijrLBQhMRz6TSo5p56Dtytxj7RGT2WGh7ndXeiCY",
  "key25": "5nqpKbF4iHNNZ4hrqS14owFoNixQnwwrJTHVe2MuyUX43YJhKBoN5ufuB54g8hcDyidfnddyrZFBkxPqwceQb4pq",
  "key26": "32qPLQhXuamvKCzm3t5EqrcDprRJBK7inu6cqRXTnKb9MR2SVwtZB2qpChDMRU3aaiAT1T2MHLBXQMpPViWncWrQ",
  "key27": "16J5ShAhbKwPTb7DXx9GAgEKyawMeAEMBzdfyCCSfZ6QP2q4FM32StpAuzjDMFY88tiWspbo6ZgCipXAunhad2v",
  "key28": "5JJxRSWaSZcvBbDWTphq92QfSwkRmofTvDC7nR7g6x3c3T43X8RR75tzsQqMoYRoywj7KPcwYwHjCZr1558dK7nK",
  "key29": "42Bf5fsJdBMLuRPqyDhCTFm9s2ybf5sPFYwRE4xX8pQhCrAnZz88xNQ6mYrstLLdWGKkJxXFQc6FL5GQWmqaZ5Rv",
  "key30": "2Bd87wxkXpcVqiCSYQPHi6CvvuzUoRTY1Nip9XXx84ZL2brRyjfaj9gQH2GYMFgEhZWhhCchkGTwe4CeZpyNu4Mx",
  "key31": "4M6R7bByWdFNW5eKXTQkppLmQ3uBPRMRWWnH5nyzsyEx5ArvnQJwNWVcsvG7jwWDn4Z5RqaAEPoxJuhxLuA6xFCh",
  "key32": "2h6f99tepz5c2Wq8ojv3CMHc9p5NzEQk3sooA5ZPL77X4gmBsAoPoVpqMZmbfrZyTHBL2GY5BYSpvsVzv3LvvzUm",
  "key33": "3wskCNz1pUG29H97vHNiDB2M5891iCEV5ATJcG1EEyzWofVsRUYzvVyn36AKHF7Se91ZBFzvFPf6nhaCKcJqFTr",
  "key34": "2ntesSSm19EQvBu1caHKZz2HabavjxJoBMXUQRhfbgUtcxsGXi1v9ZMzXwD29oHL8Ynj2jWAo2dc1gHChhojhuGV",
  "key35": "3wQRyQkUjjppwGqJpATmmPk1Fc2cxc8TZAsJQRG1hU9aShArKbsvo7fXovuH4ysV957LpiUHePTjuaAYU461yKbc",
  "key36": "ob1tgLgAsQcArDps7VcEeNBqxapU9CZT56kwtemMAdURr6djmQSpEnqvftghYrLVvtZ49XmQJCd92vz3uv81Z5t",
  "key37": "55CmPyfxBqvNWQsH7gAuNGsmbHiNkbifAvDvFUGv1EUpmxMCmYA8X81nZPih3Ps3KVHB7djeYUe1Md2rz78KBkdq",
  "key38": "W8uzjW5qC4ZEwQTSTKPGixDEGThsnRd7rnpvq3HefYsz3a5WDpJGaf34xv1CxwDt1y4yoy6Rhvij8ZH8oGW1SjL",
  "key39": "ktvq4aCABzXnYsJoQU3KX9GwCSqLhM7DhGYEcFai3Y1qyaGkFM8LR48ik9Rp4vqQyspT1bAMFyBLYZsfGV8VHoD",
  "key40": "61JrqtrzJgRgkJywuV5n83t2Zd8Eepp3UFUaH8KNuXXsDGu3Tmse6Sxvox3ZJvVoVMQ5FmjroT5jpZJHtLK7c4m5",
  "key41": "34UeS1aHr8bstcZWjT6p1ZPQRH3YiWdU2vL6tcpWb2NGjS6rmTcP8GkyJebkvUnLtsgVdMFcaCB6LmXKjS2kD7iR",
  "key42": "2UhXfn5NHJmJTSuzfnzq2Uy6B658HGX1JrRgiVgkJdpFHZdvrGHweBSHndAWefHh3h6vVjM8EqRy5M8okdzhK3Ri",
  "key43": "aNTLhPkwWC6dqKGdFNDFd2iecrr1Pt3GCEZ7MepqacBvSjMNGzywhrXLuNRMxoFa3kkgo5dN4urXtWvivrXjAuP"
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
