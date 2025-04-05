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
    "3mxRQrXi35KUL1FAvHBrT92PxFjUSpLQ3FYKMhkwFSS8jSA7quV5sacdmUuJysCJtU9q18UBP4iN78yoHbpGSBk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349dxuGGRSqjcUEFSFWf5KTUEUAYRaqgmcU7dV5chHysJVXMbFcJVK69e1yJQieQAzso3vtRXHfBvrfgbq1t8tkD",
  "key1": "4rrfZepgMPHQTrMqUSBJBipk5qEqwK2engL4BoS6WutBSVBKpJQknViZ8VaRkdC4Lv64AR6o5HQx8j65UnikqKz9",
  "key2": "Wc77g37PVHn1MVUqTGZgBJNwdzdQQ7awaXs3uTuBtgBNQkAhQxMZS2Bd48MwS8U5uRD1CXbMgLCaDjugvfXYqyC",
  "key3": "5GZ3Vy5FzuWbuVymLegY2TPw3GBCoKPzjoq4vqGSx9PvbmuucKP3dBM33hjyUpAh2dpd8s99xxFx5SXogHDtDeTX",
  "key4": "3tJMKjdL6BGA8jThhnKrgWpxGputosUjQZtx7E8UL768Hwwa5JfKZzrfEQT9LSsbMJGQxabJNy4BJ9zWke9nYndJ",
  "key5": "33wUuTctEKTaLPkWHvnQSUY67C7rdz89brooMHqYmJi74ZBGtuZB97m5q88KvCr6M8RaiPA6WcM9oBntqZVcbvLh",
  "key6": "2SCqZVrL23foFYNEM5DpDqGzXzP9cYCXR94CtA1oLaFEWCm45LZEnJEd1Aj3oBtxAr7VZsaJAkoaqd3XybfXf8dV",
  "key7": "489uYE3YngQLLaHMFkkH5W84sRgyDYcTCFfGoXBmbn5c9kW9gpiUz64m18BT62xb9JA5mh7SmtrqmppiFBme5stw",
  "key8": "3H5BpG7nMRcW9a6buscJKGKiofaC4uj1p1x3z7emoKndhC2b872xEGg63ips4GVxBZ8jijFBjzjo7WroqZ2gUUBV",
  "key9": "Zt7bEUPfDKy3qjB6zvz5dK3yyKgyHf7fsvcjYxBpUaGa51keVoFW8a1vNnpRLWVCKNeTcMiVmnVTJ6UzjsXN4H9",
  "key10": "3qpK6Eym9kgAZxQEUa3p2TVMEahEcFkrtYLrz8JLNTw6stSCcK6bZoHdH4xgPmuA34jX217CuqTVSCoKsGk73CLF",
  "key11": "3WwvMdUQxxPEfvHJKzq7rKGaGMkeiTwqyiZYqqhX83uKsort5dJEeonGti5Bs73XDteBPaMvp6ppARUT8wWrgvV2",
  "key12": "3qEgBJzaG84oBHt7jprTkUBp3bpBCu3Dcy2fBb8FWHLmispzdggk35Xf7rCpigTyfYnRdfZSvVQRbhTRbH4ZMBa4",
  "key13": "3btdTG3HMM6EJwzf9n5KYSqNJv9wiPnn1umtm3aodudE12uSYHVMb3xDcCQw3S5DNexbzXZkrNCLYbUKKbAAQP5K",
  "key14": "9DjwA6dn44EbMYKUXQiiXYWZcmvJjWRrJvvphFoHZA6KJ5p1MJEnR8HPKbbCZ3uApD9PPaoS2Z3xdJdu24GioTB",
  "key15": "3X3NZtaKfmvAy2Lm286YfS7GhDWUTkyJ1byBsKDJXW8JT1sjABz4fMAvPZnPCykQit9qh4LNEyqZDUUADZArTZqp",
  "key16": "4EBXrZLYHL3Dxd69VncxVWeAAXThjWB92wEbHADbX6yG2C88EFujRp6wsPc6yLgCHGHXEn6e8nxTC8ERgdcdzVt1",
  "key17": "3KcmyUJgRBTxHgifWu9ETpk4wJw1YATSsWVz5eF7G31zEEGN8HJoMt9GKtD2a3k8bdrpvTLkRadwZbLzMMGfhw1q",
  "key18": "26TgHFHkgFZQdjsA2zr5HArJxr9dPge1euExXhehEcCqUeSA3XEeMRVVSG948pkuWXqs88D6VVeZRgZug36iG8v6",
  "key19": "4sypkKbX4rCo4ohJrY6KszoKwJt4KyghVPH5CsmccxRAo3kLCgYrhFEHQH2NBFgG7GiTEQnzBhsPesrBChNC5616",
  "key20": "3giuz7FoksjuyR9x6ngENAHXJyvXB28v7sD5Tc6NWGRBd57ZJvBVbArLhpe7L8kHt9Dqv2dKwexfcvkpSTTNBMdk",
  "key21": "5QEJV1mQMdGQsC25ejUESAFKj4aj5Kkf1Wcup8nB2Qs7D4vFf9HU19UK2SuoKjUzxufMUUiktuEhK3ZdCCURZTcp",
  "key22": "3jVeqt5pySt31CGZvd3GwJviCCzdxm3Rcs5iTkQ59tfXpjwWxY51L5J64noRfr3GN7ubC6QyUaVxqd4aCypScDso",
  "key23": "5jH7jWpPYUm4AFm9ppGKqzoruFhobZMQvuqpxxbQBZ2xyQx9iS98TbVWwbnKqBRr75HQWFhTMfELZULmQQX2CLLs",
  "key24": "4vbCZPZPUUWg11G4BMb1WSKt4KLhzqNLSL8HUbLzoFw1rvSWLUiJ1dvf8R4WTS5cVjAboDnohrsDfNS4urUttCQq",
  "key25": "3QVu3PeXvagtNd1R6r7CGfDfKYktWTzufAjeUUYs2dJpeRq6HPUHMRMjryuGjo7JDdUAnLDifXTxrecyC9zFp7nm",
  "key26": "iA5kSCDU7TrFkeTMFkbrJW3MQeokNMooS64n5JkEWaTzU8Y72qfFi8Hqdfmurh6Frai9sGpn2uLAZLvLXvukKbd",
  "key27": "4e5oF6D6RGGuzfkdieDR79wtdCfnMAFwcw6wKsLDjfHJZ62bKJoJ4zu1ohWe5UahdjB9u3SR37q9zPjNJn1STnPN",
  "key28": "643kE8mzrmevFqkyUo1XgEKfFZ5o3qReRtrrberLw7WE7JaNMQeXytmNDYC8vXdoXmMFSgAwi55GtD89diWoBWtt",
  "key29": "gB7zZbkvQD3YCaQER3Qypcw6pU3mwDDgpDsKixJ8YBEgaQ5M8CZoZ3LKLKGqeryWTnJPhxMu1VJPTBn7cuU4Nc3",
  "key30": "2BqeH2L3Z5yLWDhC4XqdKJc1gVqn6hLbX7QDNFd8bNEkExEM7o1cuPZX4CQ8biRBHrbyZuNHXbDg1vwGGMxSJHmM",
  "key31": "cZqN1StP3epF9VCUzJ2t3nQEbnL4fvxmqKAZzEZ2JhPr7cjcHYStNJ1MMiZMksEm2DsYZ59eUuN7LkWQgVcsrEu",
  "key32": "2aDrUvjN1ZFL8yVrcmYeNTTkFHGE6uFagtbKRsv5ZtZ2bjybWDAQHjFodC7V6tekQyqTyL5cSwgvWtaco2QW6x1R",
  "key33": "CB31k5rN1eQy7poqH3kpVUg2i5axNaLMzZZqXPQ3qHB8G2Jx3kavbmURK4QhB24Kv8AXRcWyxgaDzMsUEcwQhP5",
  "key34": "4igikjAqHAJRXrpd6EYQ8f7vctQbnWoKn37hUAezi5RaTLnQ4tEmSK4ybgFL3ejjVUJ7e6mkTetdi6PGbrsa7gCU",
  "key35": "3Min1Q8XaAFBtuogJkipXJXX6JJFtmYhYxCi46BPneKYx4JEgSPWJiLenaghPvjLDmyUhJ4Jn2x9tLHFsqGrDFkT",
  "key36": "AFVgPpCgfcMFaLHAkvFSAJhHH5298XDK5nqb3P5RaqhoR4FP2mxYt9NDFEMYMFx8zqVZYoeXm9mKWeWjj4LsTGD",
  "key37": "r3hb3TuBnJN8spwG1ouBYJ88ZKheVkxK3Ck5zHAqfMWgKj6BpwjggcqA3psEpvLWpypNSMhmzLLfFWVHBGkLRnn",
  "key38": "SAyDiEq4RboPfHUS99GdUeqDmj4jw7Gq3P2L76bcKVjSNAgJexcCSnPWnxPxNQivEQrNqBaeYj4H5mXiB6S9h2P",
  "key39": "4FgoCd7y8oZmqv9JCD57Qbvy8buRQQoViaDdQ2vBBbEG1kNFEMaqFzPsQzxADRsD8mthdDE14nqyQq9G7nL5nGux",
  "key40": "4znnXVBjLPn1oYuW5LiwgfGh2JhtJpE1KmSfFMVaoQntbFkj2DiQYctRWAR31RKBSTyCw9b6ozQzYpCarBXySY1e",
  "key41": "485GwQ8sZr1nwPgEpVq14YMfVMPHRsUj6waJAQ65ipdeX6MAH4joXRpfJ222ZLjs2NGReDASiqcaCzJdHywVKeti",
  "key42": "xdyhjBj4k2mjP4wj2hceH9TYan9czwMaF3A3EUJWCGKsdv9VmEu5wmo7GxsZaAHLKpjgjKgKgM8NDHuNgBnePYA"
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
