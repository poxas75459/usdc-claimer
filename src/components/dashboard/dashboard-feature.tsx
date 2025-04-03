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
    "StLwdTJnmQkoSLAXAuxoK15da9xAv4hnHYwGodYDQCbLk2d9CctjxYwQEG3Hzpp7Dm7hmEjg6cJxGyPKt6v7YnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYHupvCCV8uy6MFbbMHEt5trG1gFBigiaavi1yWPqAqtH3We3GWRGSy3mNv4fQvSdC5TPRggENhcvRwNi8Z6H3x",
  "key1": "51fqp59s8VYkndGXHsUYmgHiqweV59Ccij4VKZQgu2RfdoFuWVyBp9KALSZcVtSJmr383Gg9DBkXZA6w3FUz6dSr",
  "key2": "3ueKU52bNfX9KCTNfsntaPSa5imSQNP2KUSHCb1UayDAqcRv9bigVhEPcBv2kpfcXA8MZ7ofQo1dsitnUhcexVFh",
  "key3": "44rd1W7p9z58EL7kCHNeKvGDVD7MQCtQ8JQpGVB2Gi5hkftxrKgHCvRf46dyjgdfNe5VBiERjGnveuUft1H2hK4N",
  "key4": "38pc4Sh2KvV2UTWVCFZQv2mWPCUYk6xdBvxntsBi8T8JbVNAHqxRKFAeXtqUdt8oc2LaKKF6hvkUD7V9oe4gFJE9",
  "key5": "4jQmo9Apo6rqhTSBv4D7AbV63oeKr1FWTELGZX2kHAGWjYZrACwFZKzUsU5CcX5imRaeQSbC4MDAcqkVbVeaANfw",
  "key6": "5mT5eMWgAwpRx8sy9PiC3jii8GLk2RAUocTJkgwP958ozvr8baDrAR1ksANyyoS77upkDi1vUTVX1ovPQUMcjbkg",
  "key7": "2D91EFksSbG3LymDQdcz7npmsQLyJNGLLQHagvjqNp1yxD95kjeSkWnD29NaUodVxbMiXfWYV8hrqBkuKVX2NKmF",
  "key8": "3dZH48PcLcXALt9UfoLaD3Bqf9iwMUXhe4JPELosUpGxe81YZMLN5nCSqBRLwaBWNgunqDqhe6ExNcxpoDWpGQfb",
  "key9": "3oBpeYjtzZJcQZGWzTx4oHgYLxkKHXQFsG8Sezac8zu9fbAaPGzzYzZUZafkziQeXvESaAHjLDLEw3zWwC92c3wP",
  "key10": "66VVZbpmKSLNJx1GW9SW9nrQ8YxERb9V3YNzR6JQQoeAHu37EUP1o7gNzRqpmVDGpBMSmrQs3gR1BiHwXPjm2iKo",
  "key11": "4yw6KeYywFXfGsgTSARx2WN4rLHEVpnVH86dhtDmkxi1TysCT9PQktx2UDhr4oowM7NqodJXrh8SnnM4CSNcAikp",
  "key12": "5JZXAY1g6jc3NejHKvy3KnAofamw9qJzMo82922oAs1FbLsD2izHodBj8dYe1EJs1ZpEiUcRgh74MvRZCkpWq9gP",
  "key13": "2dshim8bZyjCPbdrVwpmEgtswevcAMyGt3jPKw5xDCattLazNEnPASc8BzDbQgGDTug9gZZP45mhHVrBVrywMAAP",
  "key14": "n3pj6PSA6NPpARVd2q3VZXnYyJDaoqMgfC8oeATiP8rzNZNwQavTKBFqshDezHXxsNJ5TH4PYfyWSc5QndMYyFF",
  "key15": "5wHNhdK9Hv5z59c9bXPuJT3JJhSP8wNud1e2HUM7e5UAmw9juV2sgyoTGiEQuWKLEikWi33svghMJNZTyiAK5Ps7",
  "key16": "4bvessNu2pfUAu2BpAm2KWBx8NwgQE3wtu83FWhZXkjaZ6Au13ei8SYJq95cYPdAqbQc4tQZVUJwfj4TPth3Wk6b",
  "key17": "WK7MTZshdw9tw27kD1r4N4Wcxdz47YGzQDyWrAwLpq5AdGUrcMHuorqFVLo616u4MHpSbucC5mNg2F6gjMCW48W",
  "key18": "2EbaMK72gf3yoi4Ac2ur7arC991AFED3i8GGkKy1vGAsM4KycpS79Wz3wXmKh7Wj6hcLLtgJmpHtxLWfhZa6V5C6",
  "key19": "FiqCVvcZ6PYXXyCqTe6HCzf7ibpGv5vg6zWbFWLGzsfM2MV8VDmV5kACkfMMz8UMr1scLzTpe6A5c3c3jw9jxBz",
  "key20": "2W7t4KJddFD6v84ohJV8go7VrZ9U6yMbtbQHGDdue5ZtREL52vSwjBessnviUaERFkSm8m1Dp61WeiEP3TDsoF9",
  "key21": "GPY4yvR9qdyWqQiax6ofDkBRx5iFc7vhHLGu2KXFS2LcZsycGqF35QCwNjsZ3W6fdygGiQQSyghvV269YaLoByg",
  "key22": "5i4164b3iCoXFZqq6txF8MfYr2zBn2xJ6fZJtNj2NH4eqPFqgXDsh5jJbhScESoPwfJzeAaEt3Vq3pNga7FTj79t",
  "key23": "21y1m5t1gHBPHE36zGRNcLUjkmk7RD26TZZZnDDCg1HzCR5qMPi8riQSSMvZGNhfzc4C1CwbX5z1UZ3ZGAgUrCS9",
  "key24": "KHKjETHCYwsYC9c6beBdqLnE8zG8bFYttn2unryQQ9cZVkJUjhpL7TSuyheUrWRdXf9h1d5wbEwKpbT8fffWjGR",
  "key25": "PLwKbX8qzqqSX9aPUzSPRrQq75kbACjSmJRbo9K2pTekDUFfsy6VmnPQ3ADL47KrSg34hRGLyUnarMktdvCySYP",
  "key26": "2TBm96LDvQxkDmhGXW4zKuStpvSCSBY9p7VQWJFakVcgAHi1FFFCQryj88KdR9u9FaGhvmHas9v76G9XT9BEMXfG",
  "key27": "5M3uhH92oMKE1hRisexy7mBTixhyakhRxh617akAB5DqYcxXERH4zhGiuNCV41qLqfKYoyRP3XKPGSLWpC9GdNys",
  "key28": "ruRsPWSicmoZvL42BYp521CbZWkp98Mq848qkBJSoexWqbRt4xmeuzQtAaEQUe5qkGMTQLKc5tptDBLF6fMpCgX",
  "key29": "2YXqkP1iuEpWF3xfeRHCqAgXDfPXg7ra3LRuJoD5yJdG9T6TzTKhTp7rzJmPxgPZwQ98rjN4j33hNULdUgdqeiM9",
  "key30": "4DrFPiQf2gPxJ2xEYTFh8jcYmdHoPKbfB3FJzd7fjdfsGdm6ZVHT8VXy5p45adPAdnLRXBFvvQfnsRQ1WdAANqHH",
  "key31": "2Btf9hmL1oZ5e5vpuDRsrmHkgkKiwHs5xsYA9JQ4rWmuZtRz3oYboELrRPxdhTHFDEKikGZxFdBgSfhxbb83erPB",
  "key32": "2Y2yzy2WSi5cnZvgn6mGpJeSs1iuwTY7CX1ERdCD4veuczVDXvrAuFMX9jysmditSoxVK6sHJhMwZgNg6wLg6VT6",
  "key33": "3y8waA8VW6x1H6MXGuKLh7t9aeGzXEtRMzKDAJPrA1orqm2ZfCQXGssTQMhaYv6HjjagWy7XerTwfqcjFN4pDnKk",
  "key34": "2PxH2okdPGb79qnZLfkiGqEWMEw5A5GbGS8yixbc6tQu8ThMbutKXKic3PHYGzwEELxSRwSDSbVcfFmSGDyutN7c",
  "key35": "5rYM4A9RkuuAFekkYrmYUZj4kDExVUVmEuHp9AroDZSLpA2JZXG16togNe7EwaYiZkuPStnexDRTPSLxCJiTDBmy",
  "key36": "8NNni7uZhEr1uyhMXQLnAkdsnxo1X98p434Urwdy12egRmRDgLfweSRL3aoccYNbHu1VBuoiKZDjcWZY7CDWtAQ",
  "key37": "3QnvDcvDsShqNvFGWrjLCvzMQayEVsQno28iMu967grgUWnGWomK3kwKP5ZpSwtozwDLhBAa94CTE9M5uHmYr9Ea",
  "key38": "57t2JQRU7Eau8kYQ8kx8uQPhX4uJkf9b9FBWV9s1yezk1TZernjcfUJpvDHrnQkCnT1DPeuEeUf8t4i6X6YHVbX",
  "key39": "4BtKLFt3U3fkSR6pfbWXiWvPB3jWeJKuJKwLdMPew3Es1M7VpVzrfCzuwvgQ8Ya9vKppCB5bNBrGGwEtHHK6cWuS",
  "key40": "5Ajenm7E6dv6riBav2LxHSDUAcymFqHKBj58Nouh8p4EyysMNQwXmijKxRawWJ7cCjnTR2ijMj1UNRr2sPpUtkVw",
  "key41": "5v6kHkwnQSUmTk1nzKjFVAYbf4wf9wf97pbMUQ3Me9GF58vGxEDb6TPBsYaPghcBb1XsPD3LFQfPqHYSippM4U31",
  "key42": "5siiQ2vNGdGw6fvs5usT8nqXwtByXwBkazJvjd3f5gMaocFNQn2SzKREVssRqPLKFu77Jphox1UpjgyXe8z3xgtg",
  "key43": "WeMy3CNEXHPphJyqsDuhA4AC6RLtbw3WLPFgeHUwkYHawkRLP8DTFdxjGF6cstxd6PNVmaK5EheDfJUFt4uHZL3",
  "key44": "5je5tmNPD5LZvEW7XMfgExhiopMpefWQEGS8sTgBEsNmJVvNxAiKyzV9voshCS8BZqhW9zNeeMucSc8741Xw915v",
  "key45": "ZbBK56GE9EryPo9oveYpteZnHiZyKA1GPgAAUBRYKt6rAS2BCqkXtW2XhqwoMGoY8URpQimigxNRHztv7bhEXiG"
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
