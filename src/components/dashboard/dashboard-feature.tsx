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
    "2wNB1PBho7DTFns3hCb3PfhaVeZ2vtwQavTndYZNArgvfNMMWkfDZMJ3YtwMiMJT6hKa7a4tMnxLj2kMKRmhnM3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUCtCnh1dRUSssTtHPMRFRwaQBZMmo1wvBPpqx368FboiSqhiHxX8GYMR7tGDYRTtHm3TswvfyQM1hLCyYAJ3bq",
  "key1": "26keXStt23pwHVFpBE9pRTGuykxPpbhduvodxovoF8VMiaviH2R8EgyURkDgPSPiinHG97uApjNovNTY5Uzdg2fh",
  "key2": "58cMLvhZU8ofoxDC7j6bZxspdZqrUmwPCvZWNrT9m1A94YxmzLoPoZc4pkTvBKEtwBhSa9jhrAVuhn7uR9aDn4tJ",
  "key3": "2Mge9pQH7Eqr21wWHDn4v9f6qb88RT7uqu2VEJLNbGEnSJTRLCkxUCmhQEQr3jUYJGbyuDZZbhGR3ciYcFfK9tms",
  "key4": "2XCmipFmwKYFYNrzn33mEXXWrHAodQ9uMU3PLsso5EECoBmgr7prAKvLwX3CnBtvZoGfgfMy1KogCy7dTVzZspdY",
  "key5": "5jp3UHCcEG9y7pBkS9e6MNw8Cj7TanpdPYYx6dn2UdgWkAauVoR3GftpQfaYnwQeNawc9fDxKNQbpAuARsmfdbNT",
  "key6": "2hNBZh3CNXng6pKTNzqvATDZZcQ8C1JwtybVQqgAWrrh2viX4n2tzZrqTvcD5MsVjduoMrPsvbMUTRCfxAy3Uisc",
  "key7": "2r6D1eJkoCRGS4UhRH4BfEko2GNCHrBfTC7HwanUksDnughuBZ1WF1v6HcHou1e3HiL85vvg8qeeuS5PbUtJQNd4",
  "key8": "4nRfhE9opmXFGSzCbBeUwZqW2FbARPLLfgsVLEBwnexBFrpbAuNioVkBaMvTzXjCHceTUrcZe7rn4Ho32hreS1YG",
  "key9": "2merfnkVjc9LCqzkZ769pCjjfrAVsNutW6HJ6YZTC7mubcFySDeiRQjoMPLBCAEgh9uF6y2QVHN718CkrrM7T8Ch",
  "key10": "35SD2QtVbYFLmSj4Yz7Z1FcrEL7ntGhBkQnmf6iLCGYQcxnxJVE4wvf82NHv8b7jsTVXXpeYbHdj1wQoYthr2yYx",
  "key11": "5pJUXZ253J7xay3XAtJdNHesKCh7GkQ4nNy6DDqzBqfTJhZbCfk2gwcfhztmuSqQEfsXu2kC6yaSkQHca1y4LpLT",
  "key12": "22kV8QWcjhya4jDqWB6Bw1MCwGCZmxCxymqpY4niBzAiLFBXmeuie2bh8KKQpZvPYJeG47FP9WGxLetPy6jZCSru",
  "key13": "5H67113SNAjTWEDabF39MX1vE5Q1f5gZWVyX1tYMfPoyquxC1bMiwFUgXnUVUjoJ1NqYu85m9tx1SCMGHaskdqwJ",
  "key14": "4A29gUgWoXMspYA4uo2uL24tK2Vt95P9oD9ytXLDZbV62TYhxBtdT6WLbgSKcjboRLR4cJJj4x1oJUmMbgdiftc6",
  "key15": "5dw2wRNCJ13x4dozdzBgeFLvB1pP2hp6RM28XAhiDTcmdmCdLQGEWuxfL6dFQpQ3h1mQEBt1oWEaqf3ZqCMihWox",
  "key16": "4REyhWsPejVyW3HHVJghvGXUgTqTRBEfpK3PRYEikXUvMi3MtgCnsm9aHCvhxjQABy5KRTxHd9jCb6RG3MQRVujT",
  "key17": "x3KdwynTP5w6KFYk1V42MCnSdyHVNhWSf5zfg8n7X4etuBkxA7Nyctm7W7tXC94YaoAvTPm5gGxz148ddMQwGWv",
  "key18": "fx2WHDPMYKQoyX2Hm249PJjdPZKsSRWQTWYT5QMgEMfpr5xuctx4kyfNFFEiVAJkTnuXSfqpZXRMehA2nxJQsH3",
  "key19": "5S9Q54mBL5hXJPKTgp4BaaQkasa1i8GSQe2aVJ9JjF3yDL7QUN2hs8cs4chvbb2uZKcUZytJgLaKqCUyoqigsfb4",
  "key20": "KgMPaHUF5xDXyu5mE5XEEsvTnXE9rLUe7xecvvCrMXLKcNkSjmtBY8qqZEYsTy1DMrXtZyoFpGFDBB1w7Tidg3e",
  "key21": "2SjQh2mw4L6wfDcTTMc8SXtF84uAPoSVVV5QobgBJ7aHG1CnPiVLntGLog4zBvogQL7MzLbcBdL7LgmDdcx8gk7A",
  "key22": "4et9aDu5MLSi9u4Mon41wboMpqKHWVmaKvWdndAjZEQEEgtzyM8gM1dek8i5C9Vzr5HNkxK2eW7DdxkWefNL2aWL",
  "key23": "mj5pDzRPbJN28LEbi55h186jaMWsbPpY2Q9iaYevPiHEFsEeqmRkwCJ1jMq43vyjspVmZFVApQPUycnNxADrTXg",
  "key24": "2aNY6KY3X7ZXpk8e52ekwV7mRXPKfcvDtqTZu5D26g9miCfutqQYHXJyZYYhkaACpbxgTvZqcxtqpArVrChHJM1B",
  "key25": "2H5yUUrQeG4kBA734ACxU9EXYHJJzmorP1tuJ5wmS6oUgp2iqbGkyMqdfWwZNLKb6GCrUqYwW47tXABDBLGKbwPe",
  "key26": "2EdqeVpZh7ZT7BPpDKkD5Kgcectup1Ya7yvQGe5AeE8o3Eg79X7VfZRfCjHemjnXHV6qzEqq95hUbupZkALLA6vP",
  "key27": "62V7jBNauv3VxdBNhFyEtZTuXBwNR9C5otnF7fqy9bXRieTDKxbLjY8nAeMP6MzUBffnFrF4Tks5cVFn1sby1bER",
  "key28": "2kqS179qapRYyPzjRvuXgaXvt9cX1kWAkfDVyvapVdG21oCzETgokV6yqaPcA7BMDY4LnrGsECnS57YoTiHXwXpR",
  "key29": "2g5ynzA25xJMfz32CV3URBBXihfBFJQLjrwhwBbaoaaSUw7cUkdYYC8wdx4HJbssXGU5YMbTCLqzrwB8DzrWtchT",
  "key30": "4kQ8ApTEwmfsV1spf6eXSAaaDF7adNQ4nGptyswLD43iWdTEU4x3Vzj8bVsrtqjVUcqpUwsZj1K729vGwDYb92R5",
  "key31": "5vMskH9LJWFTJhhZ3R1E8FfGYcX8jyzkbE74eTx2rM9BYzLHarViwyAGK8YWwNzhu6nSpaCDkKESoDmYG4yob4hV",
  "key32": "3ES4LAiz5ZcLJTK6JykJG1UYNhLaL61N9HB7Y9i4szSh1QkFRfmYB1sVQvhsYMUf9N7c6zureb1jkkpteRv5KYT7",
  "key33": "3JEQQran6EEnHQnv282Xvm6oyW429TEYJtSYtCS7d8bS6BcB3bVgpaxCwxCKuAVf1LKWqFg3kxg2AQN85razjg7t",
  "key34": "5oqqnAdNnLmgqv188JhDrRe4Cruj5xeF2KdyX8SLzKYXrWVRkxZANVY2NQWL86JBAGA3VeQDLfRfZznrgxkaPkjn",
  "key35": "5MjhdMCcqFG3FAitmtSfPfH2i2z6SfqDKmkxfxRovzueDPHjXa8NqrJYajNTx63fTqHKXKtJFBqJTCoCc9pTDnuN",
  "key36": "31J1Lr4TQxj49Kvs4sEEm6gjPJqtDB2nktFvdQKpuDorye9SJXFqh3BqrXd5ZFBvK3CJqMexHBYLodvjLxL4PqUE",
  "key37": "frrGcSo71hXG36pqVdTx6wVHm39TkRJG374Wm1KCKrhHRQBJXBQ8MeUF8a9Atnu7gMJcf5eNLCu5tnW3QJsuiBP",
  "key38": "2YUbiqubjXqrV4pJQNK1KwMbdseaAqpS757ukVEerzuywHD97FHupF1ZDwQmNdWskarZNUL5fhGjNAoBFw6y9mzB",
  "key39": "3pQ16TSrhMy5nqpfBRawmxZDGkn7vh4jSVyiUkxVSx1vZJhoqgVibQA17MPa5MbXJJj58tPP6gBamPfPf5xry46B",
  "key40": "5D7Yv7P2HTMJhx4mXtnfNGNwMdqB2BoPvFXnie7m5L1vmWXj6w4PvqKjPsuRYF3GEhfkbnXL8MbT1nYjZkERmW8H",
  "key41": "DcKFUFUfeocWEvrrupd9VpzrWWk2BmozCK7qQJqbR8TGisEGHQqpKNmnTiFnYsXma7eDwh5EGV5VXcHazfVW2n9",
  "key42": "3ARcpsUi79p4bysKbAUHh6bs1Nph26B3EhHVn7zVRDE549Lq6HWgJGbKz6sn7F91vHjoJ9shZYQyFa6WpvCFKMQX",
  "key43": "QNnNaaoo7aUEiazCViXqVzPRjXGjM6w7vQnqqmTKzZvcgpfEYjjkfT4fJ8yeLuaMaqzK1KKurFpBS4mSMC5NfAG",
  "key44": "3SBBXKin6a8PrVJU1dHwno8hownRTrXR7uVb9HDH5ohh7Agw5S3bS1kuUPKj2gFzin3DaYtJQTr3kYgmbfRfzjUV",
  "key45": "4Nk821oZwuPZnHvRtJGyBtpSKQwwCuJu7k8aWjy5pPR53dm66VnDjP5EjDH5tsCJwnYPnwNC4tUMciBk562x2x2W"
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
