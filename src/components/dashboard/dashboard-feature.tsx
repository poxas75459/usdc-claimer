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
    "2b1YdJN7cp3XuSD89eUiwPw6x6XukGEerBJNjwBTmp6ES28GWzi4MtPk9iitGDe2jccr22Micm66aknwkesaScKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7Pbz8NisokBuD7nYDbdyyd1QooN7fYJF98EXRT8tiDbtxE19fGUJqqYLvN2q2EmLiguBHggtxsG6aWi9Zz56J1",
  "key1": "qW1rAghhmnVmAzevpfJVtLAxsedjUmj8R2qMgZ66WwpdCUFZCPqjLPVNM27BApLXqv2qCC5W8dQ7kr1XAzGR4d8",
  "key2": "5XQ8tZXe4uArref8DuGghZ3tK3jrgphabhCer6X2HHTNpVgzybPV73x2N4c5N8MajCpYoFknAg1WkBpEk1kARzXs",
  "key3": "2kobGSyjVXokD7Lvh9r1uN7WoQ3GEKwPPcsY5AF5ceSiiWhPFpjRrZ8rWfApDgegHGdj8Gg5THwjwpuHympoR19U",
  "key4": "5FMXqBcYd3UsVcCg5eUbZsg5Ty2Sck476ishbC59yLDyDuxRhjguXgH71dh1qHCykN6gioQrWBQHHkR26Y1EpzpX",
  "key5": "5UviVF3CehTmevQsXVSnNUYvUEQe1HaJATMzMBzgGgXDbjnkiy4njiMUCRFSHdotrTNuDmWcdQdA5db7oBsP3Sej",
  "key6": "3wN7WoMANGYX2FK5qCfTTEdhZT7corSr6bJnhk1tkf8F1iepzdmRcdkQAAR6tR8L7pgvxcT43Zm74pfUPgeyAA6d",
  "key7": "5pgs3AT7CPG8Dxjmv253Ehbe62BvpF9VniFb2JQgaGnMkLEexxAaiBzTYQQJSyDuzdfT5Dz9oLA496XdmbVKeTiW",
  "key8": "3zY6DoJp79ne6CeXuzeP7BV2Ceaw3fiNiA1AbVmZNEKd3KC1gbjU5pJwnLiCa8gKrrSrFUCHRhLGb8LA6SMFowai",
  "key9": "3aMq9qEadsvFzgQPFC8HPokfdnJzxTEjoZ3p1nttLQWfmBEoMpF3MNnrs6pEe8Z6JBEUhSwbH7tYDPnityBpkx5e",
  "key10": "rsrJHAAj6PjJVavGi4KRjHuT2x7gk8iByHvyQKBgCJgpcCZedahPFSKEPGxV3Yx1muGu32UZVQpSm8ENLjmfCwg",
  "key11": "4agJhXuom6T4AS4GKV1qpkfX1AHPGiqAyBHPEQsQbr7E35n9DgygxnZpqpNA1FrhW9gm94jo15CbYNFpGixkbJY5",
  "key12": "43hDTf7syBkqQH6Xw4NXPQFK8erx19YpXaKkk7YorD37PP73kD3aQ1fKHKLS2wuiD72fpdDm9ruaHWwa9PcYCnDn",
  "key13": "3yGRHzmomWS2fYKVBaZcmQDboHRN9b1k8GoPZrbdxAdmJiRynbqa2abyxdmgBiJ3DA3LTP2jFR2TZWDbZpw7bsEg",
  "key14": "3K7YaLurY3HDqfPchSQPGVNN8rnb4YkxwRzqNz1gNNB1e7e84J9xy6T2HFoiv9ncognETQon6qbsQWXjiV6S4SvL",
  "key15": "p38q5hhqZPntQSExS9m9fX1Qi7Z7BX1RzbqhS3vXgbmnrNABJE4382z29byeLui5bMVKAedwsWs5AucBMJAyLZE",
  "key16": "4Q8QuyamTkzNQmDmJXWA31rNm8L6ug2XV2VrDkbc6kvzmwXKb8e8AXYjmMKpu5kf6LPsWgsxdpizEtXLU2VPoA9y",
  "key17": "4NSkzYDYpwTwkwEtva3iQNBS7zazDZum2YFsBnrGvw3aTpsU7FHCV66n9FKNMwSVcWSPkhJHCLBo1eyUHprxUp3s",
  "key18": "5Gz4TXzzpwffyPwNowPXXFbv6MHaVBoqxwGrEowLe5y3q13MrTuTownTAniqJGoKXN9Am2kaVYZW6mBjv9MVdF4H",
  "key19": "2xD2ZUmhVVJ3BJsRxbA9RdmYV9viNEoKFdav5F6QJgagPjQCiQExqj8dyJnveoQgbBtVAcFmefvgzY4e6FuciGh8",
  "key20": "3cA87n7zAJLKMhku3ci9SJQ7bfunyHRHGdNAecDd8VQCytg7jrd5CiN97SXPEsHUH32UxGHRHH9QEvZn38nLGYHC",
  "key21": "MV9jpSb4zJxrFE7jzEhE91ScoyoFB4h1fKSvWj67d2JvjVVCrxLw3117t1yU2zcNeeeYPy6FmH74x3TD5KCMJdq",
  "key22": "5Uq4oGGFAsJ438BcwZNkvbnraJGpBx3R6tqMvbURQdw9YovSzDi7nnFtvBdRTbYeoQ5wkLtCDk5gYRGs9SYuG3dW",
  "key23": "4CZmxNkeymRaCz9ypYb4kd8udh91EMcUjeaE94fxBgZQ369PZaaGUWJPR7xbbJbvtVLHCBjnxEss4B5FQ2bUV3kF",
  "key24": "2cnjTcUEDGUjRdW6bKPrgS8NrdzCULvuTn8crYEm2Cd2erk5RDfiYPZj7nzRykc9sNRbY4qpRjo2dymaB7w2aqxx",
  "key25": "4KuAf9SSc8Cm5bwSQHDBNu2yLyYLiWo9MFngFvLTtkhDwycHkgEgN42As1NSvHwGdoWrAjEnyVTCJEZwq8XPAypy",
  "key26": "3MZrh4xdhFvpmQHi9oyWWvwXw2vAo3D38r4EydFhpJJLRDmGnkVXNLat15K6se3RDQCmhDcbYf5Wbs8MfS2ByetK",
  "key27": "4AjNcMHmftHiaf3WJqZHRj99cmgGfGLMiLXzwYeE3g7w9b1rfQkxq1zTM6LuGAeXacW4Rkv3MM8Bp7XjdW8zi6mA",
  "key28": "2NYCFDXJT3JC4t6p2cXxqkjy8aJR4R9b8n7rBYregCcwXJweTbsBU8dh66PxzWFGAQf4634cz7GzNXEhEe8TX1oX",
  "key29": "w5VUuWpsqU9kNbEwLqZZQsyaD7vt3vMRJnGHxLqEhFaTViQM3hERP5dxrbEew198oV3c7YuCBEDmkxrrLsiM3yR",
  "key30": "2ccYN4KPWBrGJ1jg5FVTPRqkuW4BwmJJxjBjSDyvq1BRQxdcjGU9NDUxzWNXumC5F6QRPvaB7h8EkNpXZ7mFhVqe"
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
