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
    "Gcz7ForcZYoqTNwU88WMB6vhKFHRppR6nUsxm4qYPrNgHYAbL9Sita4bhwWZxdGxbvZRBXt1eLNoUcNiCBCMZcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJYbLTB4af7Zuy4f5mH4F7LHSWvvR4Tj3RG1NpRwu3jYCCYCvPWn7zJHzTFyYDkCRKnRVgRF7AiVC6JAgzHv2NX",
  "key1": "28cLUpFKmbqr2HS7nFAL6hiUYmRXbseuve6yNfyk6gesTt3RzTc3D16wR6sUTRDgnZFPomQH6Jmrt66ydgue6qVn",
  "key2": "5DSti3TBZ59mvG1LcvSeBQpRVaWHtUemqvVSMTg7NAvXUdPzU964kNNfS3z9kFn8ghfW1yeCvwfjJKaqN87H2uMg",
  "key3": "57AsLZZZhbvmsSSi3bUo3zJdxAFDeRxbeMy975WXJCfvnqpNfRcmvhzSDyPzMxXhyZ1hgjUULLwMsoJoaP9qLh3C",
  "key4": "3MXLBSMMCwc4ALo396KDZrXVjgMYERp6Kit18kRQ9yqB1LqfuimYnUFTEDNvgWXHsvGbYnCRJ58ub3PkasBMVWxL",
  "key5": "qb4CFSsmyMeqvgLPkDBHLq9Znvcs1KLnfGN2cfHVNQ6hPK2cVX98nKWQrYRGZsrRBXH83MXANDkqy7Ls6bN6TBj",
  "key6": "2oSNwafjMWHwYr1GBXDqAExYY4yG8pxyfeaxHs2fxFEUY4qJYXvebXQfCo7bFxhJFmu7BuQR1LQe1gCvcB1bvcJ",
  "key7": "3VSwPvFb5fU1LiuVabzyNm17gDAJ2uTegVHcZ2Z26XbarbCZfv6ruwcAjxxHF8kCeR3jHoRVtP3gyv2JN6JM7NRg",
  "key8": "49SNrs9kvqknokzLrdDmJLQoMx7Fiz777T5yPr4uSfbBaASL69GMvAnqUjTi9so7W5jRVktobWX6wBp6Zbjsx7KY",
  "key9": "2JhQiAHRBKcFrvPVjBgMHCYgYuvKaeiPKgjN3JzRsffKeuCDym4M4eDgw47kMHWuwkze8QwDmQNNj7ZiuwMeHeXc",
  "key10": "2PoxCDatnLjUQKE6zQjAQeYi4V9B3ToHg7BevTfXCUzLnPjciVnGu6Q7k4EHivgifanmg6sKiJHEYrpkYe5NZfVC",
  "key11": "5oM7DPek9NbW4eYR9wCg33bqWGocDBytjpQDKy18w8WEvrLtsQFDzjnFC6ho1eY3gigPiGF1NN6EyV91kekY3ecM",
  "key12": "5rgrTx1xFkkdbcpKfCaTSrk7aV3YJPUMLebH2fYXcGYqwhms27wtjkm1rs4aCHpnjmFsLZ4nA56DBNkYMXjgQZLg",
  "key13": "3pqVH1HJZRpde3FMiMZTZRTdtiRMAUYNLGi2C8mQ87bUy6g2gWTw9onnkcnygAiPmRaQyyzbA1aHHaDbD6ZU4kVm",
  "key14": "PakgCdL2vZjowpDv122DsQ6GLCzezsyy3Kuu4vdaufHC9NV38iYZ7CdPq7qoppGrWU4RqUaFEubJ7xdtYuetuMS",
  "key15": "46jPJw1Tx4pmF6r1fQMWi2GTSKqe8LZGR5pSyf6LBAK5jediykMF9ijMiP2tGn88MQeEcwxN6ufxKdzk6K8AEZC5",
  "key16": "3Rhqs4EednQe8LGbTXYj2njzDY17zRhrbPKnmcibjG9RQp6RBEJgFiNANaPiDYc8DkpoHiop3Cr1bTzfn47zb5dP",
  "key17": "R4yqpQxYDQtLpehvzcvLeHdFypwppYvRj9BtSvBnQDu2XzuwkWPxBXSh3CNhH328ifFC3EzbakBQhYkSu4KNXu2",
  "key18": "4QPAFMejjpYbo9MxgHpAJuHCTLot4QU6oYGsbriR2R539h5XPrc7iBAvURsABhcEikbaSUsyeqkW2QAcf9XpK6Tm",
  "key19": "3y36jFUGRS9zjhjo9DXKwf9x84xy3fWm8naK9SPs398o2JwzDGJ7VYSrkrbgCyrAqvT9v3YUxMy4HcDAzBuxpFji",
  "key20": "23oWZvFKrg3GL3xjJSzv2iD6J8QdfvjyrYdj2sjQVbr67Esk3WPmN8kWyLGYijWfgYPZW7Crc5kiKKFLGQJ9ccB7",
  "key21": "529qEw1tw813xthJwUquFUBwHzK6sYTRMVoRva3SHJaCxKGhheZy3EaczFd2Lt3qcm3sVDbcsSiutCiTkQPZKsZS",
  "key22": "2W9Zfk9XwBRJ5orbtGUVMkZUXEkZbcyeuFDsrSzkS5aFyv3B6YsN6QS7n6wAGUmz1JhHroqm8dzVwi1iZgvhuTsY",
  "key23": "2v5PcJgDoMRSqLwnW1HqXZgdSnQLYfVJBQ1SQgVPWYo4Lwe8XU1AjrasCvF5YL9G1zsNSXtm9RK9YW8WkAzutTjL",
  "key24": "ptVacV4cEUAuaAZqsD9n1CLzLFSMbX5wX3rphKuEqP4wNxeZCR1GaV5KSadDn9dNSi8UotdB1syQ4d2iTwBe4Qs",
  "key25": "2G6xVmkxNCyB949vX7e1d4eMUiVDdrz6cX1JY332ofEArZS17xoW9Mnr1nMogMhnKHidkqzr9JeiACYJcvn1VhMc",
  "key26": "2mhjrDuxLRmJWVNHR99zz7CvJUQZu9qnRzJfLxqvSNTkX2YH5FegVY5uzGmvdwWRbEcoRXN4wuYtZ24gkZiSCnxz",
  "key27": "2zJsTsrp3SwCApMgRPYFDqcFLnMytfmMg5HEetx3A5ph5PZUFtqJHntzCSQdQsFSMXm9xmBfiz44LD2aDzYgsqr1",
  "key28": "KjaAUAtu5biEJdUYE7a4KjYVnS481nu5cXeZQC5Mbt6j6YzWXoKFoMQRfcYLqiyDZ4k8dJkTUDXEBJLnjHQJEqw",
  "key29": "2uUEyMPo4z6qPouEaCDuvStRChRch51fs6L3HRkJ1VPf7gD36p8ett5f6nr7F8KXHXEgEmLuKXvSnmwAmFGibu1j",
  "key30": "2wwxvfToYQKm6MLrS4FLsR39UM4BYLGBoo5FGqf5byaZohcuxkAVpSxsW3eaiEvxB3kSjnusEyq1PcY64e86zNXN",
  "key31": "31NE55ffLvn62AerafngzaPQpTgv19vcFe3jvB81miJzgZDeKUZapADxY69hpPZgZ4W4iKKYofTPSgNx425LpEmQ",
  "key32": "NJz79X4ubNyPgbpp6Jn1xABfku555WSXHxXGPwqn8s83zm2gcKfeuCT3f7td7A7HvyXX4Amwc7XZGex6AU8bNJ2",
  "key33": "48NHvx1pyDdrsSYJMsF8RkA4jxeJqDdaKH1nTfWJnZwCDz7WWGFoWUB2h14cQ8JYx3ChaN2qytJvdgi5bH2P14b5",
  "key34": "3dyJ7yhaM7NLEQTe7h3xUEAa1SjqcNDwfRuU7Qr3wnrju2uWevQ1tHx5MitaNr2w9r9nxtbBoc2PUu9Zs7tMnRE9"
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
