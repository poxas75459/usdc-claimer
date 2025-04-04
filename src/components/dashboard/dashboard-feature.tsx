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
    "5wxX9VVjYtkD7iUrGeNwGwVGrNgBQQWmSimTyhy27fk36wJ7eFB4LxQkE1vDqjRPLSCHpEv6rop7X13pAQ3EQTUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2veSybCgJ8LeZzeQE8RR9SbuchfFujW4LhGLZs51CD94PzjdcxczLLWgWjm9Xn99MVx2Uk6ehF8iAEayUHhJbj",
  "key1": "3o5DyF2CqqeFNXK95UEs2NBGoUiRaCvPhifq2gUDc9u78RBhqvBsBbv6rGXo5kdXrXEQ525rivUmXFmeqczv87Jq",
  "key2": "7JNrNZw6DKEFU34ioroaAHDBCG9AQnTXR9hJ6nwueuCUsygVJd3bD7EoWMqiRF59ja1ZhqSqPvgc8tUgJ6epJ2r",
  "key3": "38RkKsHsViXeCTz1KZjZAfaUptaVKW1mjFGhGGdKmcz8sxpuGNMKuJWRFZwzMEsPQSitmVg4aNsQf62waVKs2YdD",
  "key4": "65rzJsM7i4uDZccgkwEFEZfEYb3G1XehLf8J7xTFrmPjFZtybytADdiFZhsDy6F4uyut1Wnzh2yN7voBEhn2WeeB",
  "key5": "9x6Fd14ePu1SMxGbJW2UASGNWrLDtcBrVfJ65CqQMqmnDXyd2dyTRxQWXtSBBDUo9MQtSZzjEVroM52y8utWer4",
  "key6": "4XeAc9hoTBZzryZHdb2sKryAhBdd2ZTJzr9wJwuXnqPmkhtp9Lp6DxRe7n1K5XqiKnyAMNJwoPsHx6anLGBEj4ED",
  "key7": "48heWNe7BoVFyXtUmFhuGJCRTtyUZmMsxi9KWHXdeKkvfRVmsbmQa43R5JNjmVfTpa8za1MitDycNLbFFnncEygG",
  "key8": "21b59QvHzC6i6uS97DA1NyGtuGjU2jshd9jKqSZG1Xu5nKFf32SEocwoCKUpUkxe1QhqpSe8pBmsqf9K9bRZL2WC",
  "key9": "25uBWpstbcshsGtoM67og7JQpzNPT1Z2XXEYPav582dV1XsvjU3GSe81zcD3shzEM6CaKE4MLPAUasczjxJrSTzZ",
  "key10": "5KDwKLYcmkUK3WMkqr7my2dDtwUCf23oHDwgshAf51k1wv84G6ZDDjJmDTpyFi6PBestHRN5eN6SA5rjAUANT2ny",
  "key11": "4z3D6u9nNGVcRbnvo5RKq3hoGBqoUMsspqqkxNPrr8CRUCNrHtcZwJ2vWkyyxUmzmPKkmSCS4mtGKfJwNJsFRtHG",
  "key12": "4ws1owCgXzDJ9dvRkydUWgzthNQePjVdDSgRqeVZryLvmw4LgWrghL8MZRBLLCwvBRmgPkdWw5sQP8kuag4SfH7r",
  "key13": "5g9dmVsg56Z8HDWqAjaX1G6Tv68GgmoLUSK5UBJnR5SU87K4PgVfhCdu4pyVsaYzUe4QjEXSQRNV8NNRG94dqZLE",
  "key14": "5y6LGEwpMLryZDC4YyTUfruEHR1EXoHiZbF5yhHdHvwSh6P8dUMNuRCa2iLvNwMZqSoKVcNdhyfavk5kuwdiNUd",
  "key15": "21Sg5e913UhA8uT8jp9q5EjYbfDGz7Y2fE78gcUx65vHn6tFHZ4hAiYXoHR5NdHsvETAQQQ3QAxompN9yKhe9Qbk",
  "key16": "5TZsQG14UWEgFU3qmd3Muted95SutHLL252QRXGA5CQreqi3n22XFpJ4SbrEzxHF1oVQLPWggZPFfMV1t1V6y4UT",
  "key17": "51MLCYEbYCcYWZDHEhYf14MiTWWnUb48Q1AJct85Hz2L6BJtPn2gELLphnW9RN1VsxyYkZvQW6x45ZvZkR9iirto",
  "key18": "3NVbhPMA41GrsLs3TG562DEXoRu8eccd51YdHgPCdg7H49oh7ZL83gkVC1pzs4TxYZ3pQDntGL3RdPzSgEYeGAVw",
  "key19": "sWJiTLkgMrB1Vd14adQ9H9o9wVmPrzZXhxYxCnzNsTf97Gp3UJJsL39se7T2v1RiKd3kofGiWWGB1xm64fPC6tJ",
  "key20": "3Xbhr5BMMq9HCggtz8BfS3Pc2n5SCp2Js4Qk2GejcoE41W32ex72KZU3RutMjzXjfyAByaPQnxoqmjW9UdEY2wuh",
  "key21": "3GFDy1NXGRkPACmKyFk8XxsHJqKC3dYvvHF46sp82G5YftR5uJvn2TMojgoCSdDLBARr6Mh8LGCtYgc4qhLU1ZHv",
  "key22": "2QS2TGRvud6NuZNhAFnihFC4BXiYyrjrndqHKsSZmjPDDwGu8R59NtNYvQv1g6RVJCUMAbdEF6d6hnysfXxbQJ2t",
  "key23": "3Z1J5BUEVoGijLenUMo9A8X57aXmoFK8dXtdEdokwDBKHyBT95aiaS1B1CbmbkpADr1nrUtYEgsX9Vmnt7LpuNzt",
  "key24": "ecgsZMmybWFY3KKeU2VrvSpEKFrR1d8nNpXf6MWNRF1CSsDg2nzVdAPLqHsmDJ8g8hq7Sesd4JBtxus7u511qNh",
  "key25": "4sPRDisXf4iRUq3CpCiepydHNFVnabJzKY9in12FTZne2M72qL6aW5Sqcb74A4XBaxm9HEkNYauemkzJhxsxXHVq",
  "key26": "5AMQsaWCHbS1NLDeNZk11ngwVLv63XgTtoD32fiqAChAke8r35iGr47mVifqmSFp3NsfT17wHkEHPwWse4g8BEqZ",
  "key27": "53cFapXr1QKiYmzyaNJYdGyUPxpMhEFsEpNKmYioCqwrS2Rstq6uVvByaTNse7sFAkpAgxZ7o4ZyXGiPF5hxWwsH",
  "key28": "48TepYr1GTZX1kbPA2UoQJczepA4CdMAVVrqFAtQeWhMxN8igdD74UNfwHBk5h4Bo2F5M3ZZbL53TKEBPk44bawW",
  "key29": "2VPpJyjxpMRrMytgCbwWFEDkSfq2XEsRCHwgWWLGdNRQN8oQW4tD2fP3nPY46ZKBDPNSNdv8vhP9Z5JYUSnzbQn3",
  "key30": "5K4SMr6PZVWCXd9PxKEjnv4UDVE6eQg3JjDadpmk8xmuZsFRAxW3PsqXchbWXkSBYi4NE9oEDc9DXRSQGpVpiZNw",
  "key31": "4y7KoxPh4fPAjCh3cRQdigqAfE8TNQFRVVh9QKHyajj4ApTKR456rgxngcXfZpuZPAsqfh7PYRPoNYdGnpJr3xR4",
  "key32": "2AGFhdfCqXAz4MHwqM5T6bBHcJuPqfdXwmmtDA14gnJxWLdnuK5D3TPXT5hnzF4NHUqEy4pDnABnxkiMVoaLE4MN",
  "key33": "7pBUPegLtYM1248CBUtvE5ydchXRD1eb2AmBjpERwFWUVMZRCQDvKAr7VG1vTLiVCTfrHqToQJZ7m6GxjxyVS3a",
  "key34": "33x1QARAHydQMr5J6L2B5H7BKE9seoFxUfg1Pbo6u83fWvqqi2fqrTWR6HFJhjUJEmWmrzUfoRxsrMtypzE6GNXV",
  "key35": "414cKzEatGf6X5zoa2HUSQPfBzCZRtdr39uPeRL2hGRryBow9f9LAqWMmaZtM5qPvTBDbSFx1bGcg3xgQiRvDkZg",
  "key36": "4r5LUxginsUv667AMtNPRmfb5gno7EpeeVVo3JgGFGWJQjSM4QTuYwNfABh5usaAWCFJW12PHUgcYJveiUQgszV3",
  "key37": "P8A4cnKKirSoiKT81jpfsuutC3Gg5rLsABGDM8LMGCkyv3KScf6giD1H2s5Mo7fheWBNcZuufEjFkZ9xdwogNqx",
  "key38": "4Yu3pHs2Bn1utTCoYd1mcyDhoJTBJuoUFmYq3kAwax6u3VKu9dUyNJjuGAVrq8vGh14f1n9j11n9883KeMM7pc6P",
  "key39": "nhyYBuKKneGNKGmi8Zj5qvNqeFEnrLngtRvivohjPYUbmcxBKrtNYGfdaN6FHwMqADhhJQBqvisVnNBeovDtFn4",
  "key40": "4MJ9578fhi61zQkXh82a6kgKSoZabW2Lw996edFjLSwwyUSC33j7xPKJyfM8pjp6V4zu3ZUNATWfspSaKPpuqcp7"
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
