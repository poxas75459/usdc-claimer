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
    "5aHRDiiDu6Ak7NL6ZG8QXvnWgfe9Wp6FTzAPEur3e1s4WSEtca8oP34f6bW3YgYHay1wjesqvUQXc1QLq4asCfQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCduytkDMcyU5ByZysTGZ9mujtAzDUKPuVRkjPbS6tpZddfDe9fp5MiRAdhbwCHbKdTfdbYptv8a44w8GrwXbtU",
  "key1": "3iZ8EBL6he4iWNLnFJCbRQnkThxH3T2widC4mBdgJSNehDVuRtZtuSmjgn3SQmma1e8NqaNRJ48h6i8riWjQhcTt",
  "key2": "mH8B6nFicSJPo96gokWf5nrMTS3XH7GautvpUffNz7xhkDx43dg8pgdcnRU6eMm4VEfmt7VWU8sf5aqf5CdaYyp",
  "key3": "c76toEWjqG6wviMvSM2W9eRhDMZn21PRQmLFb6cjAhPVVXvwVA5GQLezLEyYB8ShLBknkfmUnUzDiA3rZH2R5d3",
  "key4": "5yeZVccDK8xfL1xbjVQb85Gzqxb3XwqWx8HSVUQH3iLQFY3QHnj6E3XYztLhci1hiFbsMZkw8sTM9jGcCLwZn6en",
  "key5": "5QR8qRgGdhmL5TwtPU5YuSiurW8VitMLnuyfFjUF1YPF9D741ZdfugLN36mZXSBekCfxr4UqcQZsndTXWdoHUjeT",
  "key6": "2YNeh3LrmuDR3s8c4ARKWfQJvuFsmuZrr9X1HduSHjyWcmc15rAMzFzYyqqYXy2qDHgz39vMgbi4Soy3W8G7AWwL",
  "key7": "51HZ2CAaCoRNxDYxNzTRAMaE1RcqDnUWJ6KJshUcW24hqVJFTtobq8sj3ZyWiY3cU4NsukuktQBTPvkZDUxjuDMw",
  "key8": "4DQtFZVkyPgBfd3NiC2KFjLY9uuQHGVAHn7A8qcitzNuv6CZ3UyWBTvqtFbtGTmUniApP5F66HzSWsMUbMfCB9Mn",
  "key9": "5PQK572eKfdWKs4Cv4u7AFQSfL3uZJXpUkvUseYdX1NayBC6JUQduYaiWSoeMV6vadpfcrCpPjSShPmqHfjQeXT6",
  "key10": "Rp7yh8MA267DYNE8iv9kdozyeWryBsTAKFTUUnni6me34DtNuxerG4Rq4B1CGHcCagQ32G77SdKD1DeVcxtJsQF",
  "key11": "4MAnaaNPPg6bDG3MGjpZ45TErcGGFb3y293QpmDSEqpYroMQoEt5SZf5gY76AXJwacAgfWx9WF4nMg1qiJ68ynsw",
  "key12": "tta43DBQVZkDn8a1fMvdTc2XATNWcsyLFoM5UVp7ue7oFJjA4nvWFNHsR7f8N6FJcf71Dgt9r24Rbe2XWVp4ny7",
  "key13": "4C7tzy9xHQWik4nYRiYVwBFYnumiBHBgwrJ97S2QDCcqD5jG8qqJ8Hf5FSuEoXAB1Gb7oRmCCgZcEuFeGFzPLG7n",
  "key14": "2DqsbLjH8MTNPFnDd29iFY3sCehau6rPe56gedc2v1zWaRQcXh7QJKRjg6aXuXpE3R2k92ARtRnvZaRSLfZDWZwz",
  "key15": "3sKTkvyChsaCM2S8Lb157YgBjX6Y1diTQt8kkwQJNXXm8AZKJR8xwrVz2KSLPqRHqKcAEzAsPkoBWdTxKDSdvrbK",
  "key16": "55VAWH1FdEjwocdicyeSV4oUgf6wuwiUKQ91THBxDTiZNaMUaRYjUnEu1XbEeBwb5fqtSomZhsBFMfaBvPymhQe9",
  "key17": "3UgpEPCaTZb6SNg44jM1yhmHtraw7gaCHZdbJy6dCuhEeR3qMtC3dFd8rN1SKGzoEVwpYaFPjPvk3uomBEXRsKE",
  "key18": "25NxgQPrKY38sXrAw4DbU1x1arqrn2M1o44z4YEtRt9VEppViYbT6L6tjHaAe8jKzFuLGc5VeymFs9ek4EKY2SE7",
  "key19": "2UsUThesuTbFfkbRLKogszo3Rsu1Usu8kQ5E9JNZ1Y6JbofBHydhCiWzN6Wid9ArmFamSrEkpU5ajLEUVp3J7vdc",
  "key20": "5UBnaCu5bmpHeDWoq6Hnp32Mtu6VC22m2t6aSRMqB1Ahxch8bArsW7EKfWZpEg2LYDSapb8rBfd1qp27ecMmP5vb",
  "key21": "2EHg3WCrBzCYzjmViaYZAd6NH2GRZNTn5nJUtBt3L5AcnarC9epTcYGvP8GHFhJJRRx5N7Jf7GC67gV285f1XyFW",
  "key22": "5aXmtUjfy3Nkr7BjuAP62L6zA37Sfm8GrqhafYG9FuEADd1fHbmLLUKASwS1iyBWSQ2bLkZZq2Gw9Hvq61V6G5Z8",
  "key23": "4eFUZmcKGxkA5iNTqYDpJeCaMbVEJaCmDz3epCPLKYF4umXzmA1u5tazhoLwc2LnkixZg8BkRuLSLnrGBbsBjRyK",
  "key24": "F1tAW9DmXejDDdF8eHWqmXf734ybo1WHQmLmXcK8oupP6SmG1iY1YRcgqxhS8vdkg5LXXBpBpVT7EHJKnKsykH7",
  "key25": "4hAni156i8tnZUZ7FdbkUcJe37kwfsMZi1u2Qs24Xagm8gXRESLRUaLXXoRiCWpjB1vGqc9seDv4rFGJHyzrpS9y",
  "key26": "yTsUcjNF77bELYveFoGdbQmbvHLHzL4DNaniGv3bxz7Lr5eUPCEG4yYMUDjQPtiSzeoWzwSvesx4tLrjcNCd8sG",
  "key27": "3ytVjGyUPX5Unn4ZddoUG5ujLCUrr5JgCn3Wqk6jY84TboKbBXc9hAELJQcj39TepWbvAxsmwgdYhPjGbsrkiAZL",
  "key28": "3MbpbPf3c8h79HzSyhKv426WBmJXHenVxNK5cZQdBNqL4JnzftVKL2N5JJLBihKpcs1vAqVUq4rkHpbtoUbDiirX",
  "key29": "3AfR64ypScNdyzbVdKVURWn3LpVtfkTV9keoZ1yYTfF8kuZ2vhr1G4fAhnQ6eBD3pn5YvVFKu8bakyz5C5bsDK5h",
  "key30": "4DK5KMAsZnJgpF3kduspafNZ3LXeDiPVMz4xTQxt2cNZ9BZ3ofspYhHjCZWYge89MuroRozfmphew4JoqfL7CyoE",
  "key31": "2mjHgYbg6kW7EGDzkcsWjTZpzMarj6u8TVT3sXEZMbBEMJa9TjQ8d3tsaNqYcLjKMmqkfd3LuJW8SepQAVBU8UJ4",
  "key32": "3HpawLLMgM6aTHoeQjtQ5fQxeDfu3KY1d6GrYzRJbhVteKM5MLNSxPKwpsVmGhAADqTNoNQMhH6njzqWTMLK1Ksu",
  "key33": "EqLnPv8eY4ZurEBLakZcCmwGuPxvFuWAtsTdY3x2XyFDEwu5QtkASkLyhe8pftn2ikhzvsRKWMGy2KhpPMSUibG",
  "key34": "4bio6n56Ybjh5c8atLrBqnANfvPYotJ5prPLUecUpwNPCFZwfgDNf6DTY5E6ycqjsKPkXykn3Zrkv8BoCqc6ZysS",
  "key35": "58AfNizDVHoTS3D31sm5cDf1k5dpVudRyum3DK6xS4byYMxWsmidPdj4wk8JK833KaLZydJKssZTSK5sNyzrZYmC",
  "key36": "qSTqfL4hcLNBRSbtDduycfHGRg87k8ih5VCXRpjthsCw3PoAg4fMovqhzRGxnzbk8aDcQ9hwcgRYUqVoBts76uK",
  "key37": "5gTLZ6QKCoiVsR6fqc1iLowxUCddsa66WDQpXRm2SwAgjxVF6mFDfPoSf1MAU9Vat2mpnhNjiFYn7kUbjx5xb2WW",
  "key38": "2edL3BjitGKGikqhdo5QmkLpkMjXcU6X69CNBQJKwD3RgnZJrwW8Gupse9GgxFsgwxbR2wcuP6BVwBZeRegCEvaf",
  "key39": "gTpJDgeKxrVd4kKBsf6PBdcrG2KHA7n4Y77vyxQdXxc4ZQb3zzyXVr6dHkNDY5YwUjdMkAP7UXm6JUw4DX6vCFp",
  "key40": "3nBo2ZYbqYbrjMpCLmujkPmStFBQRf9WvvL5zVgqXQh1RpAuNqTuaazZR56JguGkYkGVRP3rYfLXdG6q5Ee5TU9j"
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
