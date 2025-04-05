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
    "65DDHiiwo8Yz1JakkzoKMXfyfBctniuqGTBi88NhvUm9JcjnZ442KZJacQjf5fChoPddfnz2JFL8YhVzjdURko6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiA4zQbX5yyadD2VMq5QeHgCTijHveG85fCv88WU8XLPRdLBkELGzedLm4KWBKKMTYSEsmXyYAmdHvcAxYkXX9V",
  "key1": "47UPAVEgfXXs3sjwbssaEUA6x1bCRqmLi8pwwCBiugez9qkQ6mymwsFgQCXr5259N2ZfF9MQVrc4JURCJmd22Uje",
  "key2": "64JffdFgHukVmchRCdgRA8DHJ9yC7zR9Ec3EF2v7YzSJT8LDEWy6rfdEdjyPrzMtrWMRo6LmfHPSjt7xuVwkxhS2",
  "key3": "3EccP9BDnRKJGxrXgMdj9wfZ5D6BENcPNhFg2NKVD6VgHvHpkzAUuGp2cawtfbAwd5h6AbG7vBk7uF2SScMwncvt",
  "key4": "3F6ubNhwVNLT1WcDk5fDn4n7QDNS1Nc6cd3aR76HQ9ZCNAZfyVSKkhVcZNNugkC9GCovumPAQqDS8Y2eUQH7s1H3",
  "key5": "2m2beckx4BDF5hDervxQ3F4TX1CYJMk1uGrxa3j6iW6nWUYVPXbUsqmXPHANDpauMvXkdPCtW2uVHcXWRgjd8pqf",
  "key6": "D4MCNYNAVehwkt13t6kHWyAMDrDZRBJicWUZzStpXvBskoBdAkzhxJT9JNMD3o8CWX1YuVxzC381ZKB2L9Q1At5",
  "key7": "RiUFLt68bkHvE4VxgmR4ckim9NZCfqt211GAJp4uWaZNzuqq6a1o4aGn6eA8TS8fgX1rWrRV9vnEJWhYFfM5smi",
  "key8": "3j7zkb4QQSxXKeYuYFHwAWuuXQMu3oQcdRHyuBtitPg5sTLSKW5q8un8726YiqNBVH7ZFg9dYUWj8rCHoSycjgBX",
  "key9": "45tBMgpvsdzY382Y2BTr1nN5C6W1vtg5SsAiqDo5ajsRroyVWJoXdH36D8zcBEHg9iJXZbwHpUaTW4Dp2jbhzebW",
  "key10": "3BivWM8h3tKH5o7aXHP157ih7yBNuXroJeowpqGbPeNKGZBbABV6hB6AQpQ6CJLWx7hkBvHJFSFPfXRFAzwNM71d",
  "key11": "2LbZSXXxyoVVpK1bQQsJFVwC2BYX4RemXrRaCF8HonGkxDA1yviMjRQSKf5diG5mpJH32VZ3ysvSxP5MM7PQ3F3M",
  "key12": "3xuzoZzzMjaN4iawkTcx4wpgdPAZzzff8TTD7KVedYNd1gAAHBwb44WPcYHwoc8nfFX3VCN7ogvab3ntzcXgbdvZ",
  "key13": "4Yp2WCtKid7wkG4hwf5qyegi1owVnhGGB4cTD8fTuJgKa9jupqAjhUznxaGKKvofqqivBar2cWjjQGGRg3cmMU17",
  "key14": "3bq2V3S5TMqquLu7kyUanXtM39yPy2d6XuTodoEsXRDyWUk711mv13jxWXjysE5TVLj1K6FkMjgP8N1KTqKsErQo",
  "key15": "5MfhkUiNqau2LekRUWad53gHvG5tRTYVpRP1o3w4xiDppnRhirtrYkppvRGVMYwKkcDrBXjLeowQoNxzQvFnKKpc",
  "key16": "wU3RRqC9DwENvz3V6SqNaUWKTScuWHL6ZxMotnGhpvnwJ2rHDx2hiGUovw21djFBa79d3EK6U9mwa4vivDKMxVK",
  "key17": "4HKD797A1nATAxzowp4SRVgCHPCN3XpvXBCWJThXwQokjJhCmVJdmHDZkDpoXSp7PdFGpwmMv9b77WwsRh9EjD5z",
  "key18": "4JxccBMsPHvuTh8geekqtjuq4XwUSH8jgZLoUZxtF57dqyFGLT23J5ahrBUFXABSmiEVHitDoakDLLsiCuFPbnLc",
  "key19": "5QAE4evdurC5Bw1gBDgQfgt5VVhMMPzRjYBpdaGfvcp6w6HGJkvj9XamrhLWwpzByqB9zZqXLVfb2ACQAuMyKouF",
  "key20": "28H2MSGhVtnjddPhTmSNix8uPAFcD4hvPBwCPyDij1qNJEAXyN27uPzfr3jNCdXtPczgZ5ejczhuaVPC4zaYxJDn",
  "key21": "j6ZM5xFV22gSS5TRrRtVSVRnzUisiohQqJhR3qYoxksxAJnCxySuSqESKf97rUxQVKcfnFV8d619rRfX8AGREGF",
  "key22": "4wyCPShyrKLTZHAwNTLi7GhjzGBX9bLXxTAgJX95nsrX5nRuBgDf6XAKGHpVMhpjHNaUm4NVWNDm8G3ngLb4WsX2",
  "key23": "3A3cfmQy6Th96z6HV4bvDq2kU8Nh5pKTpmSPyHqiY6evMqzyMr5RTxyU7zdLrvPbqruYDq57Hgd49XZdtiijZW4G",
  "key24": "3pm4o5iGCht1qETsJkoTcM5r2xAiJGcZRwmGj5QnYSSTtFfR4oHo2GpkPks22jiT9zzzCzap9BsjmLY9wVnAso95",
  "key25": "5azoBtHugSnndskvBFj5v1DFimTfycV7qjLC1eYHGEiTMgiugnj4WKCMuCMSwPuJtXny1YCXhswrBGRDamBijr48",
  "key26": "5PSwjXoW6Ep82HvHt8zRcrbFKJGDWACvGJxNucpki436ffDm5gxQg2BDRVWnfqHfF2S2yrqAr3z2n1Zvc1ATrjEz",
  "key27": "3SgAsKFHJc2jeKmxP8akgxcA5FN3J47XbFCeUAxAJmgcZ3gyyYEqYFEj1htdqHXhCV2WT96ZE5k3wzTLT9cN91kW",
  "key28": "5JLv87NcvkV78kn1Rd5iQcBTPKDB2deubqPJ3CDk3HsXy2hQ7khQgfgTn6DdbMSBFDZFHUNZYiLzhwHfK1qnkure",
  "key29": "4d17a2crKGmKq7AHhoJCEHy23pvd9m8Wr5tPGFAtZXkmtJj6HVuA8pNM5KFZXx9x532wdpTHZ2w1fXdK3yrYWyrC",
  "key30": "22nEoPpzioWrSXrBJTqr2T6bAWaTArFudteqhkfEnNSRdNabrkveQw7rA1exS9wgEvBeDPHwLjDtqHa8ejdJ5Np4",
  "key31": "658QyYPbBMuTwWTsMr5okH4pErg58iWMa4jaLeo8hLw6xpBo4eJaQbc4zHekbmYaWGRGDmD9MQ5Dznjg2MmHa1yV",
  "key32": "22g62V4vRqQq63noMaWvGdcjijz8LtWQz5xtDYmBCoQHdd74m3MaXKhp2Df3GfTrNuMGiyVzzHyCoZUnTRJTBMSr",
  "key33": "mZR3aC8FDZuybGV8yTsK572ZipaCt2CABHWmHyww34yD5He8PubEUkuDiakygK6URAzN8c1QvsgzJzLCFB4sj94",
  "key34": "3qHxgLM8pAbp8wZ4Edi2YLkZs4rmb3vG8gAfhU2oN4BwG8SRZwAPQuQ3z5JKFuJYyxfMJDvqCE2CwD4zzdeWGu7D",
  "key35": "2MQm5XKJNfdgF21QdwjTbg1ZytUigDmFCGGioZ1AsvNYCFoy9eDbHMUqsqU5sfDDWkwruJkWw3g9nomQ3m46STS3",
  "key36": "aj9Q7sTjrQFKdWASgpRmn3Sxe8VZVN89qXN8Db1681uC5GwVqRez6erAsTqFi8N6YcM4zMzGZtE6e78LaquWy6f",
  "key37": "5V3CauExjZdymnNBbS3jJJxjSdCzAZ3KemqUdN3ucu26jHpqtLLZHtHKc1igmmgNkE2jx1DC1nET92Vw25X4KLiz",
  "key38": "2r1zggPRYp6UAwy6LQFUisLGfzkHtAqyKmtDFuYpyPX2j5p2GxKnBowoREb645ZY53amj6gQYXnk4Y4jCLRJTfcP",
  "key39": "4wyzfJp6H1cV4qsRhwpZ3DFssS7ajZGYMfHs3qtpzPAYL8iYeRqkHF18nPDu7WbqdkwSWh1jxsHsyS4t5gZ3uEUE",
  "key40": "4QhPGkWJJz6EmQipHb94eCS19TF1VkbkTj3sDmt2NBPP74GNxAfyLLjtnKjMAKivTg6qg2RFvgrsemLw26fx3V2E",
  "key41": "2hFEPqzhouw9gi2cFrqEaHZmc2kWpmTGnmUPRdKqrYNUJ9jeAHFWapstC9u9Gv9NPzbQWpamNoC8rdG1nfhCAU34",
  "key42": "2NL5FdK3fZikCacbWaubLePd4EVPgeagPzo4F4gdFwFN4Qr6HiAQQaF2E1v1Hf2rY7owGzbr4DuTDkYAF21NXmnc",
  "key43": "ErJsUz2BwYzEjn8UmyvrWEJh4KZuEzySdrbvzbEEGKcWok9pCw9XX1QQeS9LbejjUC5eVKPrmrporm5HJxKpuH1",
  "key44": "2LHW76pap4LiSH8KAw5KoaR8KEzUSicNbxy5tc9xaUY9dGPdJ6HzhsR6uUNMSgudzgXmrYs9h6UParawTXQAJ8hC",
  "key45": "4ijw7s1mKH2mThe11QEHGgVTCgNTAZDy9Y8B6nGcQ9AMabZd4kNuXTmNsfcrjDB6rEeUYPrkKvHyZK5Mw67TfHXr",
  "key46": "52oMNEXsM8UjVFSNCWp5CRz7Fmwq8WDJBfdQaSPYXuPAoDCuxvq1dB1Weo6RqSGkHVrFfZ9jnaGNR6YuzE4ovscX",
  "key47": "4EKpHzLkNSXmBAq8rXF3Lnrjg63wWuHePBw9wpx2mpF9STxDwL8N2JdYKHLi2pA7C3r6xyXcEPKvpTUdcewakWCk",
  "key48": "2vHYGQ6LSDC2ViJSY4KHZLNaWqHw7isuLQSpwoViwYdKSvWzngiFeJoiAPGZnLfo98dCMQFZQGzRHa5cUfCR78tU",
  "key49": "5RTevzMb5SMsZKzHMViBXEDnK76hWng4hgPMBTaLPz7XEzaU2QAeeT6ebKSUF5owqH7VW7eC3LnPcCoBiTFYD3YA"
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
