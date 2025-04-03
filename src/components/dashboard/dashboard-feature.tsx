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
    "5t3RdjptZW5w1myNqpBFjeDCFq2nkq4JNrpbDxD9RrcbXEhGJFfYR7LKauuvFGqY3HgyydPGkzPuX6SBHf4yoJpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGF3fo6nRaaD2GJXnrckUqLN84JyWYszG1bmhAhDu7UtYtNDRA3HPYuksSgyKgpX9m4qqGCN83ktKh3T6WeT3nW",
  "key1": "39xEUjSS3KSRHDNJXSEA89w4923xg3rM9BYDa2SXVYtc23SzDdEJdJK8HdR28VaCdEj6qWBp2oPpYxAdYDk6nDDn",
  "key2": "4J4MN8dLKqCVZaoBTWnfwHPz6BE27KhXz8tTZzJEb1ZVjnzs4CZw9eGMgSf5K7cCNXNhTqrpiBiTfb8HAmgv2uJu",
  "key3": "tcVHCLUPgoxwoLLmEqGmwqp1adhyb7xQRdMnrnjDWVNJnec6aSmMKZHn5fAdofxrTxdwyJV6injrFD89H6Dv2mc",
  "key4": "NDe8zcS1XLKJwQN1gfPU7UNbAqzfsNVfBY7ixDvr9cCUbczGmAuYgncVQVoAYdyKyhfM4q8ycjHW1jm9LtPcuJU",
  "key5": "2fEWAqs6vWpRFHqMeGbU5bMChRiPhLLUDGdy7yjX8GmaCexvVK1h28uGbZTP6t81h3HFCok7kudca5z1dFMvD2V6",
  "key6": "2Dxhi24wVkR2caa5EHKe6ymxa4GqzYZuHsjNmvpTWEVrWsxVfffUKEwByAjWWoWdCmvL4XyK8eV7Dobvm6ZwftAj",
  "key7": "2E7pJH7Esaq5ht63JTR8MD6wMQdoQjaxJgU6Svm7u51CeFtWvQKnyzPKQpKZkKiSLwCnzGCNMcJRZYA8HQqM6dM8",
  "key8": "5rebmHarus9UDJfNA3QgrZGjw2hKhkUn4vChhno1oPDCLwSZRXunb39CHbYjLY9YHkTd9DRMvmaPJbUGeE5RszdY",
  "key9": "4aJVRqLpg3iJTdzzXqPXJeAQofrAva6LQoxZh3JpNnJmy44cyVoVmeu99QkcUkRjNsBqCxmggBsHf6ZqeewLTCXD",
  "key10": "5P8S72nXYbvEyfYi8GV39kNHMY1bkim28hr8ArP5mNJT2nFdHf2QbJg7kFLgb5Eooak8dSw9L1Cv9mcVWxrBUJtg",
  "key11": "4NCStrjTeEdXYH1fD7mo5jEcLaapRnGseijW4HHbzP511UmtWd1HZY3okYP9D6fyGE49kgxieYZWT6xrqqCyxHvy",
  "key12": "VB8bFE56d33oPeVNxzZgFY18hyzmDWpQ3jiN3TKdyQcFoJPHZr844aZUxK2Jxah8AfFZr82reXA4fzfecy4U46o",
  "key13": "3fCWp6N6D48DRB7d5UHpt35UBLJpv45y4YUvgqyGScqeVNV6bsvGgqi4AMDLUrJbakUKyMztttuNUHQhD2TEfrxr",
  "key14": "bUvARWtpa4a3jPj5KgX2oco7UcLa1QvKW4CmwB78moDWCKJDJCkr6tDZTQribFWWeKgU165r1sm11i66Kyfcwwj",
  "key15": "3tvj8zQfkNuD4vcc8eobwNDh7BtdMP4gTNmavAw11bVXXxNZgqDr1bQVm3bgx1pRh5JR9kZjemyLxyPQ4x77vS7Z",
  "key16": "3uvekec6ESq2sBNDoSzK9vywpyKDoTVWfiscqkoCCpznvThcQwXAC331QX2twrgAmjZHfcDybAJ6aGS14beghJgX",
  "key17": "9pFGtxN8BUamJJ7AukDS2648wtJgmQePSzz4oaHyAnCpqqecuHDi7VEKYfHn7aWNhPtDCFN5vNGEbC7KQygqaKo",
  "key18": "xw5HdVkA1R5nTBQTxwMTC16xWAtQdC97apmNmiuxppUCf6dzyuvmATgDBESSvX47rVWNLLT7LptaahRMKS8B4X5",
  "key19": "44YpuJfJuS5iV1Q8N64XQyWpUipGiudKR3iC94YAuuzN3ykDmk9SiS1ETPPEQo64xR8yxDE2HDGaqfXqda8BGoDJ",
  "key20": "fYidCk4abuNkus2MWe2t16jaDVHw3aCoKnYZVqSDZtTPktttPYRzfT5PkZQG8sMizu26oWkX6t8tGWoTuGTdkg7",
  "key21": "2bSvmguR3QJhngi4Vz7BYsCSjrgJhgzcyJmU1bw1VmHhLuuvCpTY9B5vbzPNMQpPM7XG6Zpf5qhbufonqeVRhUhv",
  "key22": "3WpVoyjpvDk6DLeEx7qibreE3y8VqQgVNbz4Dq9tPzG5yzxLJ4WnHDjHq1dMEwPbuUCTGTNA2DM8hC34Xq67to7S",
  "key23": "58bpyzDwuUZY7GJc2aqeStbDLS8gNVVrtkMRYv7aeMK5nHo6oarUVoG4qdQ7r4dxSzegk6Si8dcaYbaoucKNhFVy",
  "key24": "3mNKcRuQQ76UqrnKgjtqm27LRz41A8zuZVz3U1EiNf3AkEJ7kLcUfbscNu8GNL3SHYvij4E7zNaggxRvt4pRWc5Y",
  "key25": "2j68i3DkNpH4pUvcAZBrwHJU3exQaRzbvVHEaU9YDdVFNvi2Eufd8po3sHVqtddA6GgywMxthNMKpQdmvpVt369y",
  "key26": "3w2nMJ53oATdTgd23Gzf6nboosUBp4j7BEFufdYbC5wBeyLCZ55a2Qx4TkUM67PzY3Zet8AaQPrYNDgX6f3YJjMC",
  "key27": "2XpimCCKxs3qE5BEZjHRYS37651ukjF9aB3ESJThwnXQFUzd4cuTLQ7NphZCkkaAqJt1CkDm6feG5xiMV2qQnHy9",
  "key28": "koCvbK9aRj7afaBAiJAydeY13uVDmFrXPdPLusBE6dA1fQvqAnS3sfNaap51BCBhkLfvidYtX4HSpRA5bRxcGRW",
  "key29": "59wN2LaoqufgQD6A5QMd1GtP4r55P4AHF4uckEPicZ6531PUU6mtxYnP6EmFsrVmR5qFzjLKEpEw2zNksdgEa7qc",
  "key30": "2jTtbvJEkogJRqWrj74TGsxfrexqupg7o913HLWue9tSDF1S4hNGPbB3sPu3eqvX4eJZUFhAsajcvReKWtF4FSoP",
  "key31": "3SKE5MSXvWAoTUBimaqeFDSxmG5Aj2LL1crXKAdLTpqStRTjTaRUdNW4VVAhE55asowZA7cKkK1N6UzfhL86vJ6y",
  "key32": "5mQ6TcwxUmUzBZEuhm8oJRWdK8bBW76LG3D5CzghajxSyJs8MsmLDcmagp9NZHXaqxtiZz8JFQA3vJdjCuesP7AE",
  "key33": "4MyzFebD6xc6DhPmQtMbsvjtUtWtJ9gxn5S9LGLBnHCQrJ9swqrzkKScJ481aKdPB1tdtF7rTMs4XP1uNryfAE9k",
  "key34": "3TiHJizcxZ1QuDn9g5VsotkNEYkbr54kc2W9JnmgZ3LBqvHNMreEhR3yezaZgNUUqmHQJCSyF2GDPTdkpiqg5jnw",
  "key35": "2VcEf6YMVHAYms2vDnXup3RUGwiTFFDWyYV7NS3onPfaqMV54njjGnnFY7E6FRVVFGuGYXKdz1Vpxx2TyYgFxiFD",
  "key36": "sgxLZ1Sy1PmWjW6214YRHsaxoxYWzg5UMspEsHfVtJwKwFiq4aUZ2AqE3CxRV6GEbDQCwRkb4syZZhBet9iLPMq",
  "key37": "5DBZeZqCScsk6FZHKhx5YiivzNhjrjZv4UBHib7a9ZBHLz8q5s7NK4wx5X6H5abg1sELmDgvFpFvzx3KukNScnQ5",
  "key38": "3tpy4sD3KPAPbkY5k43SZvVABUWN3shNRUmPtWXe4N8Ldi9KMMZBoUTQeopK3X5YPW7w6UVFcMDw2GKAqatEbbr7",
  "key39": "7gBumdBUUsALKvPa6bZXNDDvkYAcZZwiqTECDUuk98Mn2Ky9YqyY7n41sSKubL8whpqsbSkBdsGSDejzLHZo417",
  "key40": "2DoGonRMN8XJv7pZJkaGNWCK6qPqowMLuNyGAa5sgwgyt7fcUEexx5JjRNWw5HTsUwnx3Cedv5gp7YovDCTqvv4K"
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
