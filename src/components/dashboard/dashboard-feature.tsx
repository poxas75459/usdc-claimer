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
    "1wtdDf92oFBqAVAxYMKwqrL7aw7k92RHvFY8uxQp1Zci7EipEofn2eiLioSgFf2T2PRm1CqCVo9azq8db4pme8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQ2R3J1rtsLWbCNhc2E6w2JkjaZMaEwSaiNv8tGRkHdXgb936m1ooG2TPCkuU9dUNRgE4j9Nv5zbvAW986joaGs",
  "key1": "4ygNbx7Xd7h819qcZaq9YGb2Q6jv1JbZyeSG21eGy9T2i4y3c4jVBb5V1RYT6C3Xrjq7Ef6faDpxh9QnA1Z7wJUw",
  "key2": "3upQMPvRQ8WGkTFp2s1nqi2YxsMgH2u1s7Kz1t3suajm6xp9HcvRCdbqFLaeDpVFHvLJLJrAfMo5i8KN66PiopT2",
  "key3": "uguVfNPn9gR1Q5Q9pCQmWrWXo4YS88K5BMmP2WguzmhQSy78exmBM5HFJFPQXA99ZrQjnbehEN1pnyUTQVnbzo2",
  "key4": "58uUpuaxoBGs9iTQk1yWEhtD4Bs6d859ZSFWjzhhN4eHgReRFiZvQFFHMEMe1eLzB7wfuLs29zW6i7tPwn7MAKbr",
  "key5": "23wEJm7oSZgJHbrx1sZer8MwhqLKZxcBeHx4ycusC9FTXLXtJDXxFYYoBp67GkLphrJZtytTM2GZZY57kStCPumk",
  "key6": "3WLhNPchV8TwjHF8agVjmJ1AwZNiDohZSLteA1GQugiyjBVXUKgynePMc1oqKGcfZu68eHoGErFoDWG3VigkgnLJ",
  "key7": "3qJfSTk6ixfuqufrpXCX3sR3EYkmLz4LZYzpK8gvoZLxAYJ69dfsenmVjkLbLsQMeLTuxugvNmkxeTRYSxpTvoLG",
  "key8": "5vLUi478V4W9PQxGD9dCecK3dLu5zu3BaDAhQkYo5TW632j3DsXTXm1arev2CXpfazxHSFBLQsX8vhkctGSBW1XL",
  "key9": "9LTD5y23Y5wkPAxu1CVCTEqmGJhWgvcF1xfeq7M2bWYPF36kmwQBywx2uWeB9m8B3Afu39yUDFLqSBAA3odWudc",
  "key10": "4aXvGKVt4bHdVq9aazwcsyCHQkTYXijxQFNHzqp2X136mzPQVENnWBVeHz2zjvsLhKN2b2RLJ75V9gDRfJBHSP4V",
  "key11": "52XMjf7gtkMB2bJf8zuvf31PDTbTMx7wUdnRmf1LuSX4h4ibZ5YKoyCcJV9RK3nL5zFWsgX1spEdN5QQgMgYjsfw",
  "key12": "41cZdu9MR4bekRZPVMtSZPvURbo9vDyDSTMDX292f1AJq36Dh4JeR5oxxS71LkJzDQqYqZtaHNqbVocCzpWJ8Wns",
  "key13": "39KZZZSjpsmg4fuoHtPHAxYqhERtMVKr9S4dcCkvwxsSmNDadYfr1oN562P4xq9az2vwpHmiUvP1X6dLy3iqg9kW",
  "key14": "2QHZU27Lyq74chapJWHJL9jSek5QgAyidMgdHH68AJQYxkXDZLmbVYq3kZLGooRynLrmEzntvTdHFzDE2gaGQSDC",
  "key15": "2e3RF6Lh8NLxEvdupWRj4DXSG33YoQPKdytMTHtEi9bzabWpFiz2JpCN8DbhnctWnUuG7DVdWqa8hYegNfm2YZKy",
  "key16": "2BjnVs2BwnHdEEMWRYMizmNieSmasoQc34qWkVDkHfmgz9UMaK2ppMdTg7kfSaREbDDTfC689ikBH2nbUKX52yc2",
  "key17": "4VLgCTYsNDk6LJ5bVs4dQa7ckLDpKtX7Huutssa59tT5MFg3ohkndbpWvsgnLbjHP7mWeiDsyDefiqc1vznYgd1M",
  "key18": "2mmLCWptMY7m2DNfkugHke9FdyS4e3xgaGSLwxM6YmmxD1hCQZQjSUENK4LTUhr21BZTvNP3yYqDu3zvo6y8dXcU",
  "key19": "45eVo6ihL8qPMx3FC1FvqCfgHgyE3iz2LcSDYo7ABzCU7STJpLkmXJ8pEKmZAZucmrAJcRgET97AFp7dswYVEhAm",
  "key20": "4NxF77S9wYvE4hMYnRZPpuBsMVeQeashMuftCPVFHp28ajeHUtgMzZrQ1ocR7HYiTC8QVJ3Po7xmXbg9BBYy8iSr",
  "key21": "4g1gMcoapdfDVBKqcDvoHEod9z28g181woGDj2F989vWVCyAVw9LLXLXPdMGbjsu3G1EnT1wddjntBR8AYTxH6QZ",
  "key22": "B2teWWmhc2w7ghLjkrFMuXLM1NKfwhLaBa4KhV8C2ugQjPq9kEwyLchf6seJNvCJDNHa55GdQ6PgRUYVGPaegwg",
  "key23": "4ptFqwsa5f1rRsahXCjLAPHXkorrLnnrGbVhStLZdABx7rL4D9EPJUpthg46bPjG3Brqq5BRgxybgDWD5EcQErLG",
  "key24": "2HQtmwa9dyJxqYbAe2rL5CDtE9aXyh7ayY4BRVW6GbntzVymK4j1FYJYjtGdvbVpgoWPe7hLbWoALZ354MyfWYBs",
  "key25": "4LwcwwKgGhbYFR4QDWPdiAaHxZke1wrmFuuZirBnw6UJNHwN3zFMpy3bf74AYhyGQ5CFdTTFFZRdrULYyd5VMFtr",
  "key26": "62PVpRCJu2H3ykfdh1HTEHRW8jd3jkvwKav9C3XcGVnyN1AYfHAK6jwZmHZM1daJSTBtYchyB6iYcR8Xnw1U8R3E",
  "key27": "ysb1erZi9j72MstEoGEQo4cfH2c596Z9g9E6N2bBjSzVYD3BaRmVbtLbKnsMnXh46sQJei2XuwSGUYXPG5DErHj",
  "key28": "3DtkHwfR5Q9UvB8NGJbxFoLC2KULNgZobuDUa45sWETDpE9zyLxoh5EM3QmDA2SXKenTn4mhmpfUrxkDWzFJjwVJ",
  "key29": "5fK5WgVqHJmTQKJzQShka4F3LC66yqdynQCR9vwF9grAMWbserBj6vuHxLVZjsGCSRufnz6sTbjZgZWC2RXsSwxZ",
  "key30": "3mY547crqCrQriuT5tJdTZnvhtzf8wHkyoTCtXdCi8kW5fHKD3H5Wtn4pSAdSiRHtz2z2QXGiGZ2NKBBWEKUW2WZ",
  "key31": "2gbpFZcGzxPS6iyroKY7ZYygMTuJ7Fa8xqfNRjSnB2MvcERVyquc3fXowwdchUXHKqG93yFq349maBjjFDK5LxHm",
  "key32": "4McJ5MYGFPdGLvUkftGdmSFtm3XZKL4zrFrqHHaWXDLvdPdZWpsgcTyNmemczMyoDt56yszSvSBYBnmC91esCw1B",
  "key33": "2PjrSSJHYu84QwFz2EuoDEJpBZcxVqUYzcEBF6eVb6dMLYXnh69aQ2taRJ4jGqnoV8SAqm6eCNBrDp9SmpirQhiE",
  "key34": "5vqimK7pDPMUUL8r7NCpq3t7mCHSuAEc6p5tCWRkGuG9Mnrk3WAK7EDTNxH2a6uhFa85JPaSWyqauKrD9TTRyJDB",
  "key35": "ys9WHVRFHMmV6K8dzTjjEJ6xr5VzTDgFX9qygGpZtJQh3qgVg8dx9UWta9WA4hXLtNyjbdiY7D8FhJWcHDi1XkM",
  "key36": "eAanN7tpjQxRR81QkmcAqzJAbhUhy92bdykxtaQrFvJsaw7xYdhVX8xqXJe5hXNRv5EuWG9mhEP5RGdzZBDTRxY",
  "key37": "66VLs3pVoL82S2f39w2meNm7uvvEuEgNnE26Dj6X8D1bQQM88HzRWDaXRXe4bbSxc5hzwCt43g9siqmUWAbVnfVM",
  "key38": "3Ni7QMN6j6nDdxFCrc4rv5Nw8xqmKw31kFaoH4kb5YASoJ1AdBr41TyoQw3PC7ta8wYoMkV6G82zwMb7ZP3AzdFi",
  "key39": "2VKcTtNzPqw1XMoBviQGJVpZqyzXcvnZ5m4d8QYC3HFMNk5bAcvcMX7mM8hSd1DxY4LWB3VZRYEUGwtqmQ8TfSdS",
  "key40": "39hSJb9DDkDtodpFfcpxN7xiEtjCefvu4gBqRXyFEVv59cdfeTtTvQwE3xrHMMSgmebGMGzczu8yyfaRTyV1uVvm"
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
