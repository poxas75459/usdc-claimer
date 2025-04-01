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
    "38d8jFxwaxUWMbucEeqnDzQvTZemuPZFREstdpCGXb1mbmEQuGesqw4V5icHRqneGx7q9L6KPWDJbMqusibFwx4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xPfkxkpAtQtAxwvZfMYBVRA5P1uVsG2Au8K58DskqejdinTUThyiHBaHhHxnjGL5cr4sRfvA1kvdhpGq4bJxoS",
  "key1": "qpg8DJ4bNw5RNP8TGT9uBeFe76mx24VG8DkbtsdTTGFpK1Mnf9hNxWAY5uZtzjgWpDd3KJJztSQCdkw3p3qa5Gi",
  "key2": "tGHJnn7MXnsjcXZcRPjPUhZtVHrR5zZLuZDryfaX4Br4KeduFJSao7auWAeLP2us5msfB7JFbFURYJcKzSB6rpC",
  "key3": "ucgzSiCYW7LkuPW1FSJ5KrxCRhnJBQo7jUuriZXNHspDAVWHwYjnCo1frzr3kWzSXjofgfd3hB28PiPbGS3F8S2",
  "key4": "3mxUAbKZdj5KGBwnMikts9Q58ZcWzkxxGgkjaL1d6AzcG9gSeG13hMdvMheEGqGYPasrW28hsCzHeHkiwQLCt2T8",
  "key5": "HfCBtb3tWsZV5A6hWc6rNpyEFimw5GunkAUSbAghSzDy9G8ANN7GKvCLjteSHesh9MMP6NzhEbYnq6zuaLs2jhg",
  "key6": "5KMxPbbXKbY4TRA25JyAoZLYjbuETj1gDTxC5xSRHgeDd49vGfqWWiX6vah66z1NAet2NJnsAkZTNYB4DEw5CgMu",
  "key7": "4EuMNsyyTNUbpfZp32HK9WrEeY44Aez9sRihQ1MUyJAYaDLr1nUGbFHVYcP6173i6cAxJsiKZj6sQSM6MwzL6Kj6",
  "key8": "26YFBE7zyEfAocWmz5LxV7TASn5iusUVB5rvjh6eaMFqumGn5b9GaXDv3QY3fDSE52A6QVzSxDAmaxZutFyKprxN",
  "key9": "3eJSDiEYruB5aymKCQ9fPVwUdvyGBMPqe8fMkEYAxagyBnhULS1hErYeV115yNzftfw7MLaTV5zQqmV3RvzghceW",
  "key10": "2Uj66U1jzQMNS1FWotbFRDAHAM6Pk1UaQDFDkA5mkHEvotUbL2FhqBD1y3V6xSTmUPwsMezgnr1e2SHbCVZwYT46",
  "key11": "5t5Ho3FzX4GxrhfTKTNVUTDHoqoaaeSj2Wn1qgU8MA4ae4k7RC3tC7khZK7R3qHXeLoUbsri6UmWFjJ5Rs8MGyzB",
  "key12": "25pdveRVbq5RYyuS6ydoy5P1Nc8PQMJFv7QBo3LwHYdbNi9Ro781W35MRPvnbd9rFPWsQDbkenYGKTXSkz9og7m8",
  "key13": "37pMYeBPY8kF8H1oFmwQeJLuxrxzDF8VHxK3HsUC5q9Aa7Mb7crsXd7Mcgw8iXV4FqE4HAfWgSEnUvGDu8jHMU9S",
  "key14": "8c3QeMAyh4VL11RPXmkWibEPtRTca8eF2Rxmokg6qr4wTJ6W7hn5ZJWY22HdPi3MYmyQRs26jyz4W3BNBSw3Dpi",
  "key15": "uMXqdC2t87QmhgnJuqYnvWp14wBefsbM8D1oAn1gCSvQiutSgRdqgHLjynLXZW3H9FtYc5hFvXuYhgmCQY4sFYA",
  "key16": "gDgpm5pTToP42chbFx9jpY39y3YxbwJfdngtmRyXDm9uQPsDiEPmv1113eJgvCtG3S3jXDE4EP9bJb5BwwBvQrv",
  "key17": "66mabWhBjzyS6Fpbh7hJqidapZVVZkYTh1Lfxag9i2ug8sE3yMuGMjUeierTG9s4VKEGw1Zd7iAzSMhkpFqvyYSZ",
  "key18": "2XKgi2Ga47WkojDjKSbUKfaytcMNBre7zhJYwHcSTApFBc6LSWBRT1zsRLqnqiHQqLBJ1awTM5bKzuzpVASE3KNV",
  "key19": "GyUTdjg5iPboN14iZFa2V9dsTmwvpt7aT7Bre2GKVMKsWjpPfZvrQRMqDutqwhfc7bTyXEjJfVTT5XLt1x7GnQY",
  "key20": "2nLTEuCAb9nJzXPTXA1Y2q6pAf4E4UTDZ1hTWR4NPFV7MK1m3LSN8V8Yb1Cd6JtXGohWp8FS8gofHjaFCtS26HQ8",
  "key21": "5TD9NvzchD5Dq8oQNycS6nn7PrUT4z426xcFKFy4QXjeyZzPJhRf7dQ5XEu7LmWEYVWcNGGLK1RLsuhgeSoAicBW",
  "key22": "5bWHEWngahsuFyZYSNCNFVTHBbqVaD1hK3z8zpRqKtkkLDiQwEHFXgSoEvxNuJV1xTEhVxxk8oSPXCoQknsFSksC",
  "key23": "2Ahh2gLzg1qQWKtYcgPUaUSj4hwfSLGCuVNLxmMnU4iaSvrKAWNxTxmqPHAxgRhmq8pCcRdSAtAz6SPKhxaAsvAt",
  "key24": "3i6bDGoo5TKK5n1T3PMLnXL6RYLzM87i755coZcdNbvgE8n2gjVMgnS7VhHwM7u49q4rCaycYoxFCeRpDG6aZniV",
  "key25": "4pXMETBhUHHDXZpDaFMvoC4y2QrSPazhdfxVGyE9pTtXPdFpHy8LrMfTJfw1CDfXqYghjwCxtaryQfWjsH78qD32",
  "key26": "4g35yMwtgP37wDQd2fzHTcYzZ9FYDkktoRh2DUrPNYhp2PA86MroBjosZqMynB1nvrruLr4StV4hVQdydhi84jZ1",
  "key27": "45mV98m5a9LYyy2533LQ4cQmzwQBGPNqpX2KKdJ2hLrzaogK8FouQ6ED9sTsQR9G4KUSo43eoT7s31ZCCjaiY9tS",
  "key28": "3bXL3SpR9ybKQj7DpRyt48x4ZzvmtRk6xopNXjCwzNoyxRpBBTxdyDnbMuso7m9X5uoe71YfzNPkZuSsBMC6MPs2",
  "key29": "4r5wP7N53BUiE6TSn8jaC5XTUENv9eNMraJjg2e6tVE8L1gYGfPDXvxSWuCN5jLhAUjrSYYxGjGP89pY4hdFb5Lg",
  "key30": "3X9tdfN7F4gUkVyX8i744EAddpdqVnR6izT66D53AS25SPpqHmJczy8DsCPjoGcG25RnYRjhnYsuTaYVvfro6oKn",
  "key31": "25fzr8ZcYpRZ5nR3DZJYxYydpsu376iEiQvhWe2jzLEXFgd9Ku6dRJ9Agt9cREyhhqh3Wab4op8T72tNHEEDX5x7",
  "key32": "7UvKbrSsEexhAC1VWa32iYbchzvfEV3PVWrC9cHqei5syt1LjVZANcj2gVDtqGQrpFXXqYKsFiwfvZ5P5rZ4EDu",
  "key33": "2AWnUfqDLuHm2nmcmRU5YHfkidQtUWq1uVQ6pVJKWnhZpr5wYHwoqgdq9EapAje1fFw2wmkKYpUH22w6Ve4aYYTY",
  "key34": "23aodzt4imfBWbzsDHnwYomf1f7b4BL7g7QHZkxc4rgvmEQUQ854JoBrHNCdpsboFwcLNxqEVpDxa1bqDseL1Ds9",
  "key35": "5j8KemKFyQsUcA9snmELayA5nwEjgR3JQjfbsB4oKJK3SAmNRZc8gGHirVaUMNbpJeW3kRNfJuGydHmQ6Z21ychq",
  "key36": "2NDagDyoudsVLo7zL3zFFhPcArTngtUtauNKi46zuq94tyfSKhwQfRZcpgmBaghLgq2zCrFRPMCWR17KS8sYcbJY",
  "key37": "2fwd9kX8wRaAr8FDpgQEw1taZ4arhsohv9kFzLHqQTSPFf35dYR62cjXnunrZAV2J6XHss6TXL3tAdYcK2M8Du4D",
  "key38": "5s7rsnx6nH5PyLiXEQELLmoeuFaYJQEvQ93dkzYNzzMfx1cknuLHp9WQ62dheYyVYaBZRKoB5RAxv8EY2qCQEYKR",
  "key39": "4ahCsfFaU1B79W3aDEUdNpzSTakf4U22JxkUrRbwJbAbjNfaDhziE25B2hpKkgdhJ8f6n3U6ejRTz2sdq4TDwuqP",
  "key40": "5M4JBWmGBASUFSAiGQ3sEGXnfQ2cauHXXAzG9WQuoGVfwPihWfcYq8vsXUFzwJmgN9YfhLt8d4Xq2SPinAsrk7Tq",
  "key41": "3a9L8Xb5FyGRSiwa9V4o9dXBguaxbL9gR8sxqC33f6Pvkj5uKxBSSB1oAdgww95LffZvXhdJ7FJp1m3AzyUUjhTT",
  "key42": "mG46Hw8Shg4gQdY6hU63LL4s7DTfdPQGuXMzQBrpdujrUuW6AvMdSwE4EuBLSfdttmEudkicKAD7ZjTMMVgEWjs"
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
