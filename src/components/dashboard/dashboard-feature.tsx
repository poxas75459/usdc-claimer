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
    "huJogvQ6r6cp9UprPVsq363Ff5M7JS64wk5B3FkBBZY2o6SsZWWem3EwSvrH3Q6rcmMZ8TB1CrFPox5JAgN6MhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuhKk6skTsSsre3sEg32jH9YUKxmBypuDtwPVE3GesL7Es4crKmQ264GpBK2YoirfxVAieV4aG7UNSJsaWggHa3",
  "key1": "5SCHEu4R66AMPczrMt96kuhMFEshQVBiGWzzdGEmFJAxEGb6RVrkHsFQaTbpJsJ5orY4W1mL91wAuewxy1QLLKcy",
  "key2": "5T6SAF4mC52W7m7ku5H9n2dr2wYS66dwfA7unRrpsRByu4vQAsUGQWvJvvGLZwChP3eTy3uvP2fexQudWvsmtSgW",
  "key3": "3N6Mi1yrDiHx9kdaePj7DSxNE1Buumwp24Rkha8SMyrZGtUMWEYf1YpGFsPM88PMArgtPYAyMShNQEyHRwMNjejb",
  "key4": "2zctwWEcC1D9x5zB4F5ZqirvMyFXLTJN34Lku78UokEsLCeWL8Z29cLvSpGBAnQJxxSa3sd1uns7yzEJTmckqz2J",
  "key5": "4QE8hjQSSN64fkCiARcextm5ZKSSQBUApGGA2bbTvbAdbynop6qGftKHFHWK4qXaDVmAhTds4vuVkzKRmWr1MvCe",
  "key6": "4E69YLTo8UtMpgpgHwJr18KBcDdywiHSuD4Tk3npXiSHvYGyoyjy4ZqXn6TgxbPo357a9C8EejjGZUwy5NFG9Dam",
  "key7": "35saN6DtgjSjZExsw8voApznyNyLAckJ3WS7WhSLheuntAMHkLzvERkQPAWK45ALdVFranWSQbzekE5EKsZYvbmw",
  "key8": "4yMtDRX2W4voJCSgUJoggSFamyHFcwNXor5Qor8V2P2nVNEiSJjenMUGuZuJT9Wuvk4Y9cnxxFqcXkmaaGq1pgbW",
  "key9": "2hByDbgo4yqqS6AqT6Sw9U6q4TaaWTeWvHjAXMf1hXwCtpnoxkcnnn8ZuhA53S6jyac6HiBw4PtpTgARiNADt6yT",
  "key10": "3zF5a8ZXWfbt77LgDxQrDVvN4zCaG7fx496vyHQ85JiE7CfTu3QeLh5Sa7wXZXVP74gnbMHzUAoe3rA18RF4cQpU",
  "key11": "3Jc2w7dLg3YXSZtZo1cZ3Q1jeu78sTammsF4sB2X1HbwozMSEcEbFJHQcesbQ7tDpqkBnp5PFCkWBRrxzXpcfjZA",
  "key12": "3EbDLk5EHScuVTLSpWNUYwSsrHvdWm4vWuv6gBgavJZWAT1VZNxwHbtvtRPfsfoHHSo76G1ohh41ZWAHAjaFDDJJ",
  "key13": "4xUPYbgLJHK4n1SRW4S3sCfs2aDjqbt5fFvYpskApdDeaCyZ8fjfXSjbLbcRT4srR6vvJE9THzrQ5Kso4jG3LHvu",
  "key14": "3ywZWoginpbW5yCsHiSutXyqXSQN3ctBFi7QBZG8a4EF9k6fSY8Ne6vDFEhLWU9wzxWtqGUxCz1XvsYeWKKumW7z",
  "key15": "2aFDuY7KbnxjnTPky6LDTA1hakDeM5U7EExHeGgmXnYHH4jv4Xk667XHDg2y3PJyyzpGoAdXDpEHvh8MMsrUMTbX",
  "key16": "ctpi5gT2Ywy5zXNeBYCAxjQJEtA2vrKPW51AXBtp8vzCyuNrthiAhvkVvsD5LYvRBsQTLdhMmBeezXbAE4XihLt",
  "key17": "2NY8xan2FVPEykvsgktpCpwUsTbaAawSdrSn3JTmecqMmAfVssjLdimGCn8Cwy3roPeuSbd1Jfpy75xMv6ZCnu5j",
  "key18": "67WsCB6GzZpvt1weAxZVmCxprq4QWUGFQG9zSMLAYadphCo91nKoaQVQyXDZ2TwoaWVVGxyt5RGjbrJGHNP3TxEB",
  "key19": "3UUyF7biLsiesn93VZyjbQpsfN6a7Mg9mkUoavbi4kp382SKuEJQwrUWdsSjGGypM8wqbNUkKWPcacr8vh5pUMf7",
  "key20": "fF4HXGSCEoRbSv6FJQZtgEDkfsoG3wDz4zRaxKReQLA9puK3jUNjaWMdMtfjWDmwVD1jVcuRHi6HA899MpjYw6D",
  "key21": "59hDvMiRjwuX766GXyiJZjG7xXwGQCMEAPp4mqMRTVYywExkuKiFLPzjxoFs6MpgsYUt5geyxe9BtC4F7fU7huWL",
  "key22": "61Jnp4FVNZBhAZodsBSaMXaEDtXxEb9JhTkg6VqLDvnmys1KnGQVDK44MjZdEdsPSbJeqCYvRmjHY6MWY1PEPu2J",
  "key23": "yd92xG38N8MUZE7BRDpWJPBykQYeCwPRKFaZVGHDE4ifZiNJC8acpeEUvgYyMkbJXbaCMPnuwjjZNgstNjoprqS",
  "key24": "5pUKy3Ziz8k4sdxEgPkG27vhEi8UjBqQzjpc5rMvdfaGoPF5FaNLLXbHAiqGDbzGSBgpi377PMPWL7PA9xP7VZeb",
  "key25": "5ZAT5hQyabuonPJFqjDxh66gJ1dpGsdVHVGJ3aMeViwxFtkC5cBBv4RdaPxpu9fVhQRZf3y13ghfmpnDHkkkeYR1",
  "key26": "Rs2G7NUbSCiLNJgce31Fqqi8FhhRggkdbCUakGCxM47fcPVSUQe5ZamWfmz1ddt9nF7qTgiT6Md9G7nJufs4w2o",
  "key27": "2DbRtshgyYWuA7XRZbEpQmYWhfZPbv8KVrsuxxJh9mEcuMuDhzwcw873EwxHK3kBKKpyv8PYDC6DGpBsJuZwcVKo",
  "key28": "4EWmpdw33ANxbxUtJ1NJeWmdPFLcM3o1Ptcr3LhiKQCjgdTRgnUaEtQg6NB12YjKHsin9sSSfivs7VPkphC8wgN6",
  "key29": "2BdmQnRtw7uUptCsNZRv1Mu3Uc535YyAzgmTUxiZzDPTjaLMBqWLEFBgpjT1yYTNZWKGJ7aFTxX27oQ8YuG56umg",
  "key30": "5QM8WrjMtLrWqyVbb58GNH2NHcCAzaKAZ4stoYfndX4HxHefQGWQPEk4vnxeTxvzyx2LTAsLQFQyjuY3dJV2evUY",
  "key31": "5eTiTbYuUcaxqtD87obgJjm7o2xgtd4nFfDC3N3Ww5kD4SJa4abwXaVtDCN46CzbmBU1ywBRJw5fJG4C2YVEgpPY",
  "key32": "45TN5Kvudi1wpGE9YuqpTijzEnMJRxiGPHnRwghzT4M1idchtzfkDPUFtLbPyRnScWLRDxuQEcLTUpkdDsqBvvmV",
  "key33": "4XCgEfojWoRt4FD1NuCiVjQoPewUcFWHhevTAEe3cx6Qgz634nB8Rc8nuLqyKsAkzwfUYQwjGFyYL9ufaqdeHN1N",
  "key34": "4ibfmByU7mivQxDFRo4LSY3AgPzM9Y6YVp1yXXfPuMF1JGBg3sB7CmMkv5aTksA3Rxusim8KfmzD4oHSsDBa7T4",
  "key35": "4e6hbe2a6kkd4x7Vd59XsupD2Hq85rxyL3SK7id7xjS1oqFxa58m15caXQZvQ9mM9kAdCcswJBCVgwzkNj2FMgVH",
  "key36": "4y4FAKXfgHzt51JxQH4QnAntf9YWgtphq4MSj4MYJAPVA8RJT3PF62RaNLVEkM6gbznBYZpBrkLFoVbUEVFbpSsv",
  "key37": "oxkgMgNreMDLN17bhe83PSGkxryVXMoW45mzAfZWBV4h1MiiSHzV2v2msvkxqkVZVUEjixreEr6KxUbrueZHTss"
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
