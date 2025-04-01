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
    "3MU2s75HHtMXe91d6LKc7RKLpKiXG5XfZ3Ssz87KNYmdAhjHaxTLyQH8vYVvp2stjiaZwhLDMcYttH2ubQkSzMK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFoqRAt5WrPZYnPZTp47anpSoknT6MDm6C5yySFXq4MHgksuvEw6RNWhjnGSogXqFJHGkKcSgjqxHYLNMuUcFzh",
  "key1": "L8rk8ogFjePWyRXVtbFtFfWA6FZB7RYuAgkc1Ba1g845Qqm9AVB7LMkXyFfvC62672uv2DAaPT6K8bGhHgaAg8S",
  "key2": "2qKUuNSRzi5MUJxJBrAbwKbA7b43ySXnSPZ8dVdy3JEhbUXhL14113nmKozidAaYC6WCGDcF8jRKBjExRJh61tRS",
  "key3": "3h8MrLcfjpJf4WxCVXEmcy1czRH8QxGhqdGJNbzMkEtAHrNBa9nYijzovBgGSUgLuu7sTHVZxmqh3pdJ9pW4cnAX",
  "key4": "2DUCPbMEpmCGYFBaqtrESk4DGZbhwhbNfNciQTf3hFGF2ohbo1Z373CJTVb1MiscGATjSDngfbXztA9DwbH6A5rv",
  "key5": "SyvBx6gByNWx8d3vdqS91Wjoz5ZAFqeSwieQFm9ugqgKcr3qUyp4dj7Spof5EH6JkLL8ktDJeAahqVjUVVXJc4z",
  "key6": "3rhVJuMFFwEfJ1NzbzJmVVdyrpZVPbdGepx5z7vFdJbCTdyrCZbJrGisbeTxQSL69rK9GhWAyEMDCJ1vQEtWT1SU",
  "key7": "4mzmDTe2AcCWc8rc3P6L8LFF6b4xLcjPSDeQQbNfUqKJo3KzqPRJCUfKQBNMiniBBuEh4F43ZptcGoBXAV9wFs9u",
  "key8": "44F4r9XwbsNYFBNzWcrfdqDVvC1HnxX1xNUbeX17n74U7cLhGCcsgfb29QGPR8k2JEYEaj1uqrFJGHQryjWaZcEy",
  "key9": "r8XUfSo6ArPt74MjQQvt5os9har6mrZs41KcRTDK2f9cTZWFoHbRWz1W8saCHz6ppSqjdWhNt7WiCZjJPvQQMUA",
  "key10": "3DWqZ5HuDWxvdNhUwjViFhz6ead3VvrCs8gEDfE1rE1y4XPmDANV4bSZfgUzCvSinCabXM9nwSVqJiX2RFH8Peau",
  "key11": "hpN85fNVxEweBDdJkM8vpcnnyRR5cEir7B7GLDS5bnPjP1bWw9FTKDiZVUqXBJvWwBRGtLj4u4guUgUwgk8p4S1",
  "key12": "k6XzVJ2SNnR8c5r3GZAjm8Bt4NQqc1nB4Q6YcTNK2BvyV7gpR8UQScZt7GWwfL3yQy6PJqiaDHmdiMGhvu6ydzx",
  "key13": "5pcgWHRVr7cjztCvj7qgPvCqb5eie2CSCk8F4vq1uJi5uzNrRkj1JvqASZHY29VLD9XkYbJNsJtHvBSiMfTWCYqJ",
  "key14": "5hVCJ1WNKo2TWtKZiyAk92mRvNUYyjhBnc6rimfQ5BYSSPdNhjaGPRM6oHjwGEDcgq9TYmyfgm4vHVpBJuPwdEQ3",
  "key15": "61nF1nkzYpzBzQNj74Cujykro4rWUG91fFUZf6JqUTWoiHoU52NbS4vnMC188khoH5ebAKG6YbEUpkBVYjmiZFcb",
  "key16": "BA1CWABrw6hgXDhL3N3UsNmFhn6hVTZGNca9LmBJ2vxgE6Y91QiEVYfrQqQTeB2StBwT7Vt19jFPaGNzm47TvWh",
  "key17": "3GSW2tiSKUceZdG5SwCSvYny82pvK2WYDpT2Xnj4GhSfdUAmdnwX5jxPfULdY5a2Hmqm1LxRRESJb2QAQhg1Svtq",
  "key18": "7kzP2k9SDRJxZdaH6EtJQwttXec26qWvEB8tp7gqw6x9iV9YRQfMoQWWMRQYKfyDPNShocGy6YaGDSykHzpggH5",
  "key19": "3wx9B3kvivo8CriZyMAWCcQaqHdzX8ABcmZkAXrWvvt3kGDm4kKJmoGxSjaFQKVMa4nyUcKEmumotqRUC1rGFGoW",
  "key20": "56yJoyghqEHD2sbMY6jh2N24AfxsAG1GKuJ6tzW6YzUP4ZDkGSL1EQcqnDWdGQqdkHy46CqCcMqDG2jE5spMrRTD",
  "key21": "4CoPwYkYTXom398pyZ4grHCx96tkmaeZL5FcfKVzMy7siA7oRUD3r7VVeYZL6Q73vzWdnqJGPZdEtrenpB337Yoq",
  "key22": "33NoCXLE8mFQnNxmvBQjUFfGNeUeyJtt6UCae4eZWSzyV5UjjJcKy4dhjiSU3AaDsbZqGTZ6qv6bpunrkv5BSKBg",
  "key23": "3XTTXPY2XdFbcNF5eA44k8m9VdkxBJHUTB6MrxmDTrmmp8qcNQ8oJd7y7nVCuQnR5c8B6PFpvRPkMwjvoedfiru9",
  "key24": "5afhdSchyEp6xqfPMaeU5DdiW6z3vEKYLDEznLphkh4iowiWdycR9NN835drLJ9tDtnUKxAXDVBRaKRtm8JqQ9xv",
  "key25": "24JLG6ShFVJVwnWpA87TPse9TNsPS3eeRD3YyW9Dmtgn7FE9caEgPvkbc1dX6XUp49dpX63FAKYYvMHdebYsb9tm",
  "key26": "5Fyj6iQStVccfFYBHam8nZjZzZ2ufsrTS9KPNPCVCDr5q8FaUBFVxovJ3sJboixAkZJVFHbngi8wdSz7rroTqGKr",
  "key27": "5GXwvq48hEuwb9QSdyis1ENoTCBRHTTKYa8KFpr5wDomqmECoBuhGMcB2xvrZACXETywr9SeChoUNTu2RScMCcgh",
  "key28": "5deAC7gTkAhpgdVb8N4VV6myaNzSX13Re2eeQTRjZ8cyG65wpomDqnhGk2sYCiHdsXVShUoQBDYV9s38fGVVozNo",
  "key29": "4PYtHcpuPGiH3jdC3cS7snyFsz1hijkJyncKsrY7DZBcx5i9MEjtUh3GUcMbch2j6oSRLW64mTmLthNsXTUeHhz8",
  "key30": "5Lq2ovvn9wtCjfYb4AhE7mos4hrV8mGFKqZeiixghdHztAbsJDvhqNZDZuCRRzgCBQBtqQ2f5aUgZi4mtcD21Mvp",
  "key31": "2qiSVSwNhViX9ozJ4KrCWEkyFt8xs2SFyF5TdJN7taoSveHnzZBd96a5NeNhZRzgC9TeykgWjXNkofw6DCqfhiVZ",
  "key32": "49rqzDXL258R2g4vaqKpfizctxFMS52Q153icHoPU97Rh7GDYXrxm1FLUjoz1QnzNhJfbSZAqEQeLqQao1DwcAGC",
  "key33": "2bJ2KZhKfSTxV3jRFEZTTaZDYmHgBbHmVpgA9HeTn8huhLCMPnxXBNp95hMdGUE4Jetm6vcvkF5To2FXbEV9Pz3Y",
  "key34": "51zTBME3oVPtMDvnym1mrPhrZM3CZvn5mZwFwR3z925LPxGiBotnCmaThLf36PZvfMqguRCcWRk975WnPBK1n4Gc",
  "key35": "3gvJTrRvt7Eh5gGNjx19giYQcWjKJdshT2spWKDoMzDbGCpPnLvpx3jCEVQnNwZ3nRfcVvxGhven3y39xS9byXZq",
  "key36": "3Lcp5TfywjRrSVTTtXMXno5D3iWqGa9MAgy3r3Vvgz7fQNsgzDL1kjjcd5u1bLCgjkakd1FyECDKkRuJ55wM55L2",
  "key37": "2cz67zeTEhnJoFztNXy3eYhLXAFZkun12Wjurs6LUQhBSx7MVBhnvJdfZdW4u6HQ7ebEGLcXDxVmqcNGmFYx87v7",
  "key38": "2vVnkZxFLg2MT8WbAME2tzEdK8hQQwPrcYvGkKfKuojtFkQauAXUryDihtAig8BM98Z8EhpCq6uaBHx9JEYc85oL",
  "key39": "HPfCa6nJxkS6gMMDUJJWtfnUCV8d4VQd4qsHv4j3iwRjyXJmiUw7a5xGxidB94nZG29F5R8hmzHTHQdLFL9iLxU",
  "key40": "5z2tqHJMtabF884uyK6q4QW6KRbUr3RAqgXvPCEZss7Jog9CnUJ464t8tTNbukmiSTd6YWfjtQsuKGwHBDkYqhYx",
  "key41": "3qBuXUTmcAvYtNjPwBu96iWqHJiF43C8FZ8xbKyXddZSZy1da7d9oYtEKt1rGqXebJj33KXjUedPjgmApFDDewCV",
  "key42": "3KpJeRRFtnHx8STwcNFtGB53Qs6cJJC2xHqza5rjhydBFNpoW3KpNynNFEEMppgkCh7uNmWxL19WmuDXXzF2DxYz",
  "key43": "3Cv4Bfymr6oioicLubTcpx6SaJm3AKrhHaGPEHVG72FUn4R6qhfXUgENUaLUwXYZE5kK7T4fBxrHtBjK6hW4E4wm",
  "key44": "oSdLYFg8xLWFqCtS1kW43nw23popJmB3exmA4ivLZ8YwyQSoTFfJLQU97hAn89nRuqULJhjosGJo5oRTLiN3BUv",
  "key45": "9ejSyLjJFGM6oQNcnRHxGKT6qV6s4KvBHmE95UXQVhVVEPNFDZejhMiHXAE3BcDEZwJotMcXyri1zFi7Jnm7vAn"
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
