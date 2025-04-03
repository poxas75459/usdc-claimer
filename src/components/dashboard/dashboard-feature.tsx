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
    "46CSBiAFynVsr4tMJEgTok4fT38q53atwmJuNC3zDbiZoMMgiA37qB26nnLdzksN4mSyLUQtbwhgvtG5hFEDx4uX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZkYp7VvNgNYwPsLCbGb21sFqAZYQ2fpNxMfFj4U9h7nwqt94yzTn8PuyQmnyw4V26rHqES2mmhy5Rz8nmtTNM8z",
  "key1": "2iU6D1tf3imGEu6FSFUwCXjyE6MYZrBVWfxPfFXWgkjXnVickwzTjdujKnti5PoTTguA8V8Jf12SudpVkNw9yoLC",
  "key2": "4JiURcDgSEQW5K8PjyNucLLSA99V7EGrQVFxNHPMU26zZLx7M1BsJh5ro3amzRjNjZ4sUgcYJGp1vbo4ETZASQyM",
  "key3": "eyz4Q4CLNJoiQUQsA8HK97Td6Q6fBnMjXc4nSLtBMYhKTwFpuowkMPUh9oQ4xmjFZQCHFrXdbgYSkcPk7Jz3pxA",
  "key4": "3gA44E9RCgX6wZUUBLtepbrp6Dv5CqFefDA1y6uWLroqJRXQief5heX7SP58TsUKsRCFa9mprdZUHMhKq8WmENTM",
  "key5": "67QJ81aWTevzTWV76sZZopCrfgSJNdvmo6A4t3TsREABzQG4YAbyhaU7xGdZxgN1pupWs6UQym8Auw7Ws7QyvrTL",
  "key6": "3yNJYkmHuaoFrun296CChFHnn7CgAGATU7KXNZnk2CxSm7fdf2HX8zYS1WSjrSXhE7snWSnhQzyToHVSN9yUZdiZ",
  "key7": "2TyDutCUVxfe9FK38om38DH7bKhzdMRv8dCx8WvSijFjMrjVaaWKXV1wuijyjnZ6Jxt9vs3vXjPa4siaQ478r7qd",
  "key8": "22uc2ygMwotyctHMeMwVS4Q1V9TdxaoYsfqZFtr9GaycoaHSTM4otV7hu3qzMvicTvHHnQ6ePVxoT21nKa9e1XEa",
  "key9": "4usukNzusEfYtsefNVv9otborkTXsJBofqZ7zmKkHZkSA5yaAj9DiUcKzu8h1JHNsiFo5MZnP2rgHTo38Z14phve",
  "key10": "5Pm1UUE5crho85SVXnTz2UnBmK2PqDvGEoQ5mqYwcFDkV8N4yYVzyar6G6Dgig5Xk1rHHVfcu7eapBkYgeJRZV42",
  "key11": "dkaXYmUx9PcFsZX1LiMGmjr1uDFyZdQEfhbwow63NorWmhT1YiQNt5RMrdbw1au8qxmdcq9E4CAT3vSyzHBz7jR",
  "key12": "j7UaLj1DgkgBkNKDya4v3RoM5wdfctbYoaqkEHayB5UcatcswbcGNmkdbudVf4Yy689u52iKZ1VaKShtiGvbwBm",
  "key13": "267T7C1sDo3WgqKRnR6xCSQLorj2XmMHC1Sk5nmtvtXDPEBhYkgp1kiBrxfzNFNnANFMBr6BsPLFqNj7CJg45xGW",
  "key14": "43DMKcHyBz2wyQUvKdk3EZABNm3rsirk3CjFTuJ6HZM3M1njbZ42aSLQenXHeg7x1v7XRsNnzaSNt8pFT4bE3UrC",
  "key15": "LHepQoPheqNvJm5oCtvP5h2rq72dbQgZCKmHRmdJxVHyFMUiiX8hDGLj7R7WtzAqNK1smoQ42gGxcsrCGAc9GHT",
  "key16": "5fwpqYDUxY4C1gWc3Qf5dqQ9qiNBxSpsgK7Xyg5fEXbnA1uhyU5TKqaeECgMVgRabM1ej3Brep26SBCpLCbdqD8X",
  "key17": "vHCas7sLbTiv5CHpLMnrj8se2fSEzekJ8LTZAeQh9VywmgvzhdvpnSHfSwv4VuwZRZoqt2w338LiLzA5jkVFr4M",
  "key18": "41kVHLtGsDyKP8ogmiKMXKqosqvU5JeW7tixfSYep7WYWez1WjkftbumKpcQpMS42XDn43pMfStuAd2tpALXoe9G",
  "key19": "4Fvt7sZTNLKeNfHcHYN8Akj2dhE65ZGtidKj4SiAZEyreU3QYryTK5wq83oQ9uaZzB5vFAEpmhgakG6JUXowi8RU",
  "key20": "465AjxPitQbCe2QMxVp4C9pNrN5EmhDPsd1WTaW1jJiha4hs1NuFrbKZKSyGfjQyE3fzRds1xFZFiQJ9FFnLvMmr",
  "key21": "9N66f71Yawbm1oooSM4gYQtwwnSS7kXdymRiPL7MtKbS3EjYiaNTSpXbQLVDmSxJ5KpZgwMQF1n7y9URUD6iCXM",
  "key22": "4k1NVi1DFgVKvrgTRQNdMooGqvUBNGKVZ5b8HHDMNX9XAXCJAbfRXBnSthGXsj4E2Q4bzsUGCJot5143oHo79tG4",
  "key23": "4BPqJv3hn6F2aRhUjRBNEE28x2wRPcdURqwovUQ6ocnHxeJG1wmApqC5raEZLGozUGVwmWvoXjK6qygDEqaS8imH",
  "key24": "4ffsEV4FgycAD4E8d42LE46NsL9gbaw7DnMoqGkpwkthPTq3B4Pt7gBZSTQpnWeUgJufBSVVjVYRd89aP2qTshrW",
  "key25": "3s7QDJc6TH3vuKWFVYVJEdhCDGcZMRV6Fe5ZKDKbf8XCJvgXu4SjzZHCNejC7hPgV7sU9iN9hS17TN9nSzkA1YRx",
  "key26": "2NhhT1ns7NAcLNQS4j2VJJ236sU8CLZBG4pqyUobdcmjYUkKDSZ8TH6Dd5ZLJfJhBQRW6jnXSUM8rAkKi4nCvMGg",
  "key27": "4RQWaew5SAtRu1gjzRKgUnptZ9nT5WGFnhEJpFNUsUTLGfnS465Rd59D3Q1Vk3qLyzU3a12ov8NWhBSvYGuQELc7",
  "key28": "41eSox8QiidwqyrRrunESWUGVVpiesG9v8nby2gvYPkaEnKP8PKUthiEaq2YSBugKBk63qCGCD6dakftDZCnSmGu",
  "key29": "67j2gG9mngj5vVuyUyWR5gAKUeA4b6weJpU88tBnNfbYnxJFiTpteVSat9QDaBK1GgtaJ2NPSymzGMSXCNTW4wJ7",
  "key30": "424GgMt9mBrvJaGokd3ortK7p1H8oRmWCwW2ptcpCq2Ch4y5CdeeHd6tKRQJeKcDTp8WiQrqYYisY3kdmFrenMHU",
  "key31": "42DTW2s1j4v9D6ytk4ScygtnmRocfmqEEnrhM1XtkxVc8zZfukFJ6uYfJMepS8R4nhE5yvSghBinbiP2cUuycPbU",
  "key32": "apeyQUHEy3p5MjjH19jRsYTed3m1xMgAJ1jDz5aPwFsmxF1Ur2e2mECvrYaKg1h9StQPgkzbUcdjJMxhZomh64L",
  "key33": "58YabPx8X2KNWzGTbsSb7oJ8ptn3MYeFNwKV2rxKdHMdPWdLfJtcYXQqbFgnwHSiWNhEwPHFhUMEN7YWsmxnz9rS",
  "key34": "3XB2PKuVn1ZspPfapGQC9hLf1qURPVc2rMxjZVMLUEdkzW4kLfvP3NtAy28jE2JzoCS5AZcZkELwwKPu2ACNPy7h",
  "key35": "2khCsD8g6Ei3R37TmUFHtYCMTNx5DTtPQz2wTikjnEzjmapLRGS2rGFYTPw4cunGHRNv9apevZYRgq2iSRG6pc3b",
  "key36": "5ydKLA1PTWoceWK9fLESHBUQBaEZwKF36E5pHghU8uqPf8r9q1mzFriynKArR1ma81LsumAkMMzDMuLhgX8poG1c",
  "key37": "2iZB5PB24mr5ZxWHAyRGiXV87pPDeZTcYvYgTd823yTBMTYeZiEb4Dk3rpNiWT1r65vzjqDnbNmyTUZAgvyzanNz",
  "key38": "Q46HtmCzTbAZ4RUMPsBGaNCGgiUkc4NBUxefJvGN6arnCf5zzA98TCwJ9TNm5C8WdH9thKoLFqSiDirC5vTH4y8",
  "key39": "zyqzD3eeMbYJdeyhiLZQyiMMd4RLUdjMnYKpdifopJkRbnPozmTBpjmHz5ie9BNLZKAQJG4Drtiwz4oJjGwyLCU",
  "key40": "3TTu9W6Vc8HqaDnnw45aCKsUzYiRAzkQ8tDVuEExYseyK8JZivvNNzXeiCC5z9xG78fehVZDFTWy9RJ96XvRUXiy",
  "key41": "rP1Fr9gCAVUzGRisRvLe8X6yVhedYVn15Rhx5E4Ha7i1ux4y1ku94Cz55LRgPRdR3Uoz22NG2tGEqmHKdmKq2HA",
  "key42": "24dU1goQ9AjXgkP7cZ7pMp2aiisn4CvFdW1Azoj5fE7hE5oYfQY5ynHEuSfRTdtHAKTqDHjRFdVuS89YVcaoV76y",
  "key43": "54bxQMFseCvygJ3fp1Qtz33ovcSG615cBAuhaMXgNqysy21LYuZkBywGxfvTVn2CdBnwTwQxVKgmBM3eL5jZTUHb"
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
