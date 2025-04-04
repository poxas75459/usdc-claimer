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
    "4rgWE7D125mBHXoP28ruP5FMopuXgMnvikheiQ9Ni5oPMx4RTyLrxhsdKmT2P7YQxjL4eXEMa4U4dYEcR9nE3aVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mb99GYy4NtXKQXTx7d8j21X8MSDgGehAMHob3fQULHXhLd9cTBKwPBq1196bcdybw6wKHSea7bfHgSmrxURZkkU",
  "key1": "f63BFetVYGHcbv2CJV8QMxjbTsQfQwFhksT6YS6DUr4xwPzf9ZkRoEKbUKA7PcpTKak32z8kpDiYX4r9yLncq9o",
  "key2": "4LzBoRii6z2cCY352KP7tRywdioRTgW3YvGD18aTv5k3pqRGvdhh4uGdqCT9nK1kS4ubwSEzTafSXGKaCrQ8Hk2N",
  "key3": "4Ab1giFaLL8itphSYBvZ72rgAfforjAnQhHfWCXr2tuopz8atyk2EgfbCqqqzLQGjkkYRLrMqRfrTxCASe8mbU2B",
  "key4": "4EEWoALxf8vpCmx6Y9yJtSZrhHrkxbDywahYgtxLPJrHNFAX2oCyx6XFkYhutNqZuFijBxnc6rVbBhqChesCeaGx",
  "key5": "CYwNEVVB9VEsEcmKT1zZDy4K81524tKFNJR3m6iH4uctrD3M2QbY3B5kY7wJtKgxkZkDXys4pfUCENwSeSPr91b",
  "key6": "39x8eDXpDWkCZiewwXkDvRxUVW13EJKMqvPMFcsgCS7SvsSeatrY1GtE9HJGKkXeeQ2JnaTkKWDYgEHP9YtGB7NB",
  "key7": "4uaEKRL3wkwV4gu4Jda5VdF8UMGwQUzQdvHoDumxi8qmjohJjE5Zp9BKqEURJz65K7pTKupXCPn4aXot8AY1UKzn",
  "key8": "3ygpixHAuXmBNExgktmimE9S7HthT8kzAZfqUNbs68KxhNVgnBtHv474WFXoYXbktuaBr4dV6aQU6R8x2uxUk1zf",
  "key9": "nmxTdKjSphM8QraeNUfSQg5yC5YJVhXYDoX2JKPbbf3gD8eq8Ao5qxsssLAFLVdmb7RZed77rw7DpyjHSYxH7Qv",
  "key10": "2CxvSsRkQ9ms281kW9M7YtGq12KydwG6CnB3ALxwS3b8cD97hPCrRrMQSsZnG941TqVjXaTLy8EkSrSt7WiJuHwm",
  "key11": "5gMbSeaMWpi83qQGQANnmYrNqZQFcaimiwGrJKpnQ2b4ZcAKMDxFMggeznWhwKwxyi1gpbrwT1PNKSe5hx4ZqGXb",
  "key12": "d47AZJNvDZ1m31nQCjX6nv2oDpT1DxXZDZG3LVgB81s4BWBSCCRtxGD3vUUFA2Yv75yu5J9GCpwLWnqVtEVt2Xy",
  "key13": "5deybKrq9RnjAdAM5RBNUzJvvRmYAuWGz2qCYYXKyhaiXfebSzfQC9FsQfYWVsXyRZEdCHGJbTDh7yQb74QwDjKH",
  "key14": "5B61Ug6pi5xRec4jEokATVfrSNtcUEuspUAP4FUP1yBir7rX6dZAgafnnrVTWnm7JZKsJgwm14kebPGJWh1SXuUM",
  "key15": "58WXAiAWpzRMFk6CcwF5gRob6BUwzsdAb9vVpDa4xDUdAvpHWuLTXi1wPJy5Fo5RgSs7Yo7Q19mSjGE9mtgNvrqi",
  "key16": "5XWaXGtFN35v7MbJfCU4gqorKAUuA7dK2SRpMMXxb6tkLQykzRfh2P9nRddvN5Pyy8Fa7TZkjdcvtVPH5SZGVbm6",
  "key17": "65UC8ZEba7caG5DgAUKBhp6upo6qqWZi8QhDqxPMcRWb8yDJ7Tqd2CRkyhFByGhqkFozFkypQoL7HwCU2zrcJrQS",
  "key18": "5goh6gThWZArArV3YXMnxhJvgET8AZi4aJfvuuXYj3243CgAdHscwAjx6RQZn7LVgpJRnLfRKTSDaPBcfzDvhvNy",
  "key19": "2uq1B3YRAL61nHWcpuUcYtfDTn65Wgc9ZCKHowVfHYWUfKcF4m4KuDKCggJPT3RUHKeZ7pBK63AVBz75cjx3MMkB",
  "key20": "4bDpBeDPkg91PJNCenUKuxTg4S8EkUH53XU4aBsAZD3FS27Gsw7CLZ7psHaN92hcxk8ZpDWhSGwjuhWvuLePLjuQ",
  "key21": "4fNC6XGMsrJQMEu3VfkfmoqaF1RRGyxukBYYSGyXsNQsmta54sb9hekVtXw9dGYHSpHkbm5umQZ2Bae9Dn36M4w9",
  "key22": "9EXn4Vo4gboUspQcNCAw5AhGySKVhHYxs2D4XYRuPbYCvNZy6eoHaMPrdm4gvpo4ZTkEpkcHE1ojkoUBPkx81XB",
  "key23": "3G1K1q8XYVS9uZKp7JHnQCVc9TYDneMuZHQD4UTcr2AHzPxGfPQkgdA5X6Au9x5rJpj3S4b6ZEy2yVQaaEeYk3a7",
  "key24": "3aptNZ2NchkTcf9qJcpWYScrx2uB2rYwrv4GUvKeC7TuqPb2VzMRWi3qngeA5V1m5gXgckCBnAXoX6zVBkiwMUC2",
  "key25": "2TtWqwvfAZK9inQycPpnbSB7FgVNrbW3EMGQELZCra1McxHvWLqQVTKUc6GgB9S8asrLByhK2fC98Go4QVgZX8K1",
  "key26": "1x1pSwAZXDzYG3qzba2P8UTVDyn74EftDmp4jD5fAKvjLnCRU4roVcYcY1TCT6JbXXkeJz14nZdnCVmt14QtR8E",
  "key27": "4rRYXHtxSYuG3ijLBtY4FvyCgdX42EC5mX7S1G7JugEyXwffREJhsbvRj5216zpYaF8rR9Wa5csTpzLGaYhzuqtn",
  "key28": "3yh7VCscysSGa3Bx53UiUUWdtZf6VrX3wKSbEatLdgy79JgM3APKVvkLpvtB1vurcJvcQpxhCiJwzy7eNzkSNUVP",
  "key29": "3vRU8E74HZ8PejzJrwzc9m6xZDxWbH3XAJC5STgeKPatTzgbhD6cVx64DwntYLKRgCQNpvGZnuYe5zSP6MzM1J7P",
  "key30": "5AypZysnS1cuXBZbiWyU2fir8SooNnSnRWd4skecg9esoUaNaGp6ACdJPQW15KpnURrYV8493sYVxxgipgWGSDc7",
  "key31": "2yUD5Bk3qirhGkcb7ieArhmrf7gFMUAEd76csdAqjUMWWdkKT7pDzGGGqHvivCDiB9U1TqkUqA2nnXue4zv4dFTN",
  "key32": "dUhyASugtZNut2qNVQUFkqDCecXENpa5Jai3pRaicHco9fnDG7XjvFMDUBnwtM6zDk3YbijUGbZQUxTU6hHpbRr",
  "key33": "T7evkm3BvzvDpuTykWCS7qV4j12QDQxGnaaNCHTNM3vDKnctPq8Kq2So1hR13DL6kZYpbkGZrPAqpxWYGid2Yge",
  "key34": "EgEnxmzzhYGFCy5Jh6aYbrCGU5Vzk99G2jnKFgMhE6fy9uisQUaTiqNohk3byU7paCNJ9vPgBp2FCBBXzMoz16o",
  "key35": "nMZtZn6LnzKEqQpZLRCgQzSXyUzu3qdizMgKS8MKAxrwCfhngL9HTVnCA7pcmqRV3fK9ze43fFpNNWAfehQTd5Z",
  "key36": "5TG1pLY4hZ2L2AcUBVi7igy6hLdYGtkjETjSQ88wCZdndMvcEJ5jizZcbZKEHGjwTw192vNyrSi2CiG4Ym4Cv92r"
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
