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
    "3wtVCc6cWJKor46qCyAfswxBwAuSNLrFS5Hzvdgb5yLhvgoqm2dDUjLNnpBv9TdUoRm6frQzWdS4228GX9WNVt69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TsLrBYKtaisSTVytUzrAKQCYaX8Qww3QgdFAHZepyb1aZBswk3YF6aWKRg6ckEto6ZQa4vK99725wHzRsJQqPP",
  "key1": "37FtxcpTQS6ZtJw4DcAwmYd5J2fW8bZKeUy4BKZxsKe7E3mbLbhL9kbkoaJkC3fJzEUvt3BSFDNMECXK2JZgFkr8",
  "key2": "2FL2o84ZHQ9gAdfgZwWSmHJ8zfNZzCUm9tXMPjR1fgeP9LtktNN8Vt461gUNRtFUeoPy9AgyJc6kLuap6rFQ6Nya",
  "key3": "GYCPioEWwx6sAizS7ugowPPYATcEn2gEZ3SQCmjy3UyD7uLoNQbwXWr47fNVyJdyZw5jsyqzaU2uvnHy4Suq15h",
  "key4": "2r9Szg3NgwnEGL34q847PLwLdLsRdYi8toi5bPQXdpbSctKvv4i4W4QWPdCtsY3TjL8xqpg5fg2YbJ7s42J4atrA",
  "key5": "2jhSvcdGdkDTzp5LeukES9kpk8HEC2vqvzoR4pmFSpg8K23DNWCeJwShtNs1haJqypF6Jcj9ej6vo9cMv6TFC9te",
  "key6": "33Ynk69baHeP8zUobKSFAxHkJtnLfch5xuxnzKnuQfmGqsWzWjozsEyiZPiL31zygVoYRPhiD86PimV3aTgMkaNg",
  "key7": "2MPfSFQQJqXZKx6JUTBYGxMgNL291EVGKd1hJ76dqMSNihi9CpBcjyfekqrvgwdPtAPEcv4NaJMZxa1ZTi2gquNs",
  "key8": "thiEjPKqhPtFDC6KyVEkvjw7XMDGZ2ZCbcqHsqeKXC8NKYBqrRERXyS1HSFo6WzhKScpS7E9ZBbZ4JYH8aqn7X6",
  "key9": "5RE6MsgfTxjx28U3nQALhhHGtwRnW7aTig2TcUMzuBA37yhViFoj9oKc9bwpB1xuZozJEoCfZAPCFHHFbeQMEz2Q",
  "key10": "5pSv7N1Un2pGnWodUBcAKyWcF67Hnyu12EdRKkdrGKk3KLEEPdRcwgkuaqxqhrt4h1JWMmVHynrSYzrDvmPLu7C6",
  "key11": "3Fajb8wAPDUTJvYydSSNQYfaAQnugyq7565R9Xbebsas9QCNpFwKsM6YT3gHWdC8NHs21cF8SKTsTtz6SyK1VaDd",
  "key12": "3TEkojcs7DczuMvqid5D2xzyrWrZ9pj8Ry3eQQnW8M1Ysui31AHxfzg7LZYXbYwbSoKgUabsV7rWrgBD1epr8RCP",
  "key13": "57RcW7ZXDB5reipfgbpNjZVdQLQB9LBchrMWpsneqNZgJh6qJYd1ZT1zK7j2iKSYrwTnZav3CjJC9G5PHEt3WEWJ",
  "key14": "3DmXBfjz3CUYrKTECbRPQEeNSNzRpE1B3Bi9ecav1xwuvgVzTB7NdpCRZtGxpFgbAryQczLk6xviZedEGVcy63sR",
  "key15": "HUdQ9ozmkXa1fw2ANS7i1Ww3r1phEgmZfdNce3KmtLJGDA26hcFQxZvT4pLfQ5onRuQSXG6NQXzzLTfqdzeZeBN",
  "key16": "2bxT8GWRQwErYZ7FPsdTzfXrp3HjkEZ9bu24kE228r8ez6Rzrqjrxc9tfPvHtUhFxxGVTzt99ujsDHAVkCPEDByb",
  "key17": "JjcdWm5b8GAHncE5GxZMKuJQiQGohrKnC69gKU4UTzUsUEEnHrAz4M3HDQeV2xDwa8otunPsFoRafsznRqAHzz8",
  "key18": "5pJ7Bv36WMT9WcdBeBcPANXMDyUceYPM65yKKa9B9hHASEGb6xiu5MuCXxECekD7GLCdq31xRCQzsxqisdrQPyP",
  "key19": "4UT6M1drXq74K3GQneyb7KkLrnbFYYry2Kh2VqqeLsP7yJ8pvkA3CMkVMWtGv1JqFgbEGmdnFiKueuLmAjNbj9vG",
  "key20": "3X3Z6hD4WQb3cEYLSTLzPbctrUxbGAZRh6qfKRKefrrhkAbX1G7dFk9c3db93m6afZfZV3uw2E2WQVZXeF5747Cw",
  "key21": "3Kx6PJ6B2Robi1f8tWKSXThqZt6WCZWJvf5zhnk78GupgAdFUQMLy8XvFLGQXEDL16Yu6LJ8PRfB1ybwrviVvTHU",
  "key22": "4QBUc3Ma8gQdgnEaUJgEGrCshwZj2x8fMQFqsNmBFdGw2bQMV2DuJBN4q8a9997cfMnqNanb9twmDQc8H6riUoJA",
  "key23": "5JKARP5YzkM5oJv9k1HL9ufnZSAfNihUNVEUdZJZHjDqxFE5DD6YaWmsvKwAzxFgqdqUyPeFmSJYbNmZeFQe9Kbh",
  "key24": "3vv9PoJJWgPJYTQmsWAMTRxYoRYSAkAQVjam5aZf1GYaUuSwgTz1pZPMHLPuZ1kBGgcoLQhhMDn6kZ5idcjBHwGM",
  "key25": "2aHic4faBx2xJoDzbAAhKk2MbEHh7SUx4s65Q8NZjRPdJwsadLbSbzSb9wjPjf2EpjngS6XM4b5W8ETVVYopZtq8",
  "key26": "PhGnkbVdwJwkbzPzuk1jfkCjMtTW8hvL1CBSp8uDgmdTcuZSJBjH6jtZpjCh84Svyd8W3gorgd7wyCNfrs2rCcp",
  "key27": "5CBvzoKXZ55SEUmZ6MKzchHYZpdgKSxBL7H1vn6GvTfCLefCbkax7KQshrzTNdE5YcqF2ybb3z4GrmfrLVBnPdgi",
  "key28": "5ApTpoSxhaLCfwAuD5VEEXAQr6PeEeNPyWSWhC59nLtSS4bQkgtx7zz1sTkdBSvvP8CVZBPUq6JScmEukSobWK6Q",
  "key29": "Ln8VNMckzXiNyGAVzgh1HFEWLFWNiZ1JuPzo6p5tYDctwmL8wUNXEUYo61MvkTK1xTQGh3boVCCpf147F6bynf8",
  "key30": "2sW7MBfBrLUGQChmc8a32Bzn3yZEUgQVXjmvyRfdSzANPPRYNU5sJYypaHpNa9aVHWGH2Q5iFMbmfa6tKuCGmThp",
  "key31": "29erYdr6bNwz5rp52cNxD7KvoNiRH5jvgENUzv3q1tFNFzEtcRrpaAnPQjn1qrpVFcb7bXi5ZxTwLTbULaoxVBNc",
  "key32": "4uNG5f8RLsMcZwC6LiiPc5Vxn4vAauFD7NDKjUg762vuxZzZBvvHf5ekiNf7DLCzYR3Yh8Cox6Qns64sRaCTPSDv",
  "key33": "5ssQexy9reNo2HUY4i7nPdvW68g9ZSsF6tjYidSjwQ2WbJKUC5LX2aZSUQ6SmuMPgM4MkGbbasaVRXqcLRi2EriM",
  "key34": "46x7YcdBTiCr8pXf89FzJq6PsCCjK3nziUJJfP7qy1VCu6hrfWh1Z4itHF7RMhHJXqDEsaJazHnHAMmBC9FX1NqS",
  "key35": "MBw2TiU2eJ24HFspCLQCJk5V8bVPZ8yHyNrTXtj9JQHiUqrgYszJMUkFPJVRv3BwtkAS13j7VoGxGEPCD4kXoqt",
  "key36": "2CuwPucvowpBdNNgCzuTTkCEm3hhFYQjo6iPDkxNphUAENDDg6BAY7r7v2RxjVNLTASvvnKg7v85nzg1M38MVx2a",
  "key37": "62THkbH7rrfA664N4nLqE7NaKXvGkJNoYKWBMKMrVKGaFUXeK8QEqZ88oadER9evciqUrYZtHi5kLX1iXJKytCqm",
  "key38": "31G6uWZ9aR3LBrcPTrvrJEtjKyqomofGe3URCxTppYNjNey4dmqxhs4obriXSEQxJBzurCe5JXGHtaX5qXdQiJro",
  "key39": "zGJV846mCQxf6bpTYVnNY4tUpGibzRtZFKeB7VwKkjiVzzzhM7xWBqAgEPVoMpC4WBHxsBY3Bf8BoodnwHXZC32",
  "key40": "3FowCsBt9NBwscADGNmqjoLxUjTmHkYifkYGvq814GbfXWoAgV7n9UriZ8hRy9iFL9WuZN6H1VZXVbAMLEYbu2e8",
  "key41": "2cK7LQAvHMqCWHuib58qfBuQNVVLYXfoNidzF3e76mQs7cmVgVB4w5Y7wRMiEWrxvTdsdSu7Y6kAywW4GJdsTD98",
  "key42": "2KTWq9mQjrzCpgAhVtvdXLwJSeeLUQDUpRrVxaYTfrsSDC3TNvmucmxad9WmK6h3gBPXHwuvgmEjmjR3DJ67wKgD",
  "key43": "4XF5NgkfnVEkLPVYQtJFXHXhxLFCaC53JKUQLAMRxLqve35pCPoL2DjPkhHdf6i2tgg3ckBQvzKf8m4tSLZa5FA3",
  "key44": "2fncAa6PF1kd3KSopHf37jGLfo3Y5zGKs2kbvkyf4cd45eeCFVN4A4vXzJvVwukwZyWZX23CWBhqfHqK8RkPKpbv"
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
