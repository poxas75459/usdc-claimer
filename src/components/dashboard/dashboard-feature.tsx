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
    "41LnovFedbs4nq1vjyZvEc6Jrxgj3f4QcT2Ftk1CBHxzJ63DxCXdUXFTRDhh8z6jg7GJmFUj3XXiS8BGBeCLL3ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9GhCZRFU6vE17KVc5crYGzN1oi4w49C4suYuMP82xpP7Yfm2vJ4AsvKYhr44LfeHNuCvTsgZWWx4k1W4kZgjMy",
  "key1": "2aEoCY3xSr1BJj1UMN5oxxhHHUznGSvyGza2Vpzqe3zSJUNtaYAtru5uJi9VFCC9KkHCsfeqToJpND22cWKzEkM2",
  "key2": "zJpDXMxhbAh2cimctdTssyfvyDF6QNRTujCoo4dvVZciKMBvDjutFP5CNuf8QcWUb5AMzYFTUJYMQ5ykyDNTsAi",
  "key3": "2wqNonE5nPMTCeW9Q49UwC7pwfdLdmWb3tRL8AGtRxXaozcG8JVBd8ZbAvXJ4j9Nx9GdsDTjysxf4RNguELvDYhs",
  "key4": "4JEWHG4T2TCCDnHfdTbe2WwjUHgFfyFTeVTQTWyvDvhwrsgkFNvyomAZQwwox9xqSraoKpkeuHiuQNVDYJAg7CS6",
  "key5": "5MqLvihNFMHG8opnxcfDWt6ZWZPr67SwkkDh5zKPdnXkpr5tHqhazTxFwkbVzfnvK1uUTKhpTx2g5ccDFMYBGYRf",
  "key6": "2EQhA3MQheByUmuDvgBY55xTfQQgTN3gDZk6YHVZ7UnDJeMwZKDsa2w4iHuYemtzL2rJu1dMUer8JReshoaGw8e8",
  "key7": "3Etsmg9GpySUb2ULWp9VNT8X7ecf6dShNWsW4UnkrJzTst9UKSanvZEsAQ7UmxEdCP2jWK5FUqCMSyP4zDcLPzLC",
  "key8": "4niwFAs7nvwHoSJJQqUPqJq6HDQiivHYC6joaZHMB8wSuNvMwb5MtDH5baC6g84gvJLN4Cv95q8oCsNHnCPDSpt4",
  "key9": "33fTUhdTk2nTh63W3ixiHjRTVCFA9fpsCWhTyz2VCx1pe3Nf8jvZCZnmpXvNRpdUQg6TZwQaRkaa52CKgDH97qB8",
  "key10": "3nTSa5WJmT6X9SBRPAG6wP9Un9NN738me59KCeT5mFGf4XViNQPM4DdJRGyUPLRBwiorEWCfJSKjJZU95G3Z46zR",
  "key11": "33gfV4pa8Eh6cpAfuHWEmTRE1JLiygWw4AFkCmP5VFgZfPqw36c9yyozgBZ3Bsy7HNzdSqujHRbgCJrUMBsvmUac",
  "key12": "PP6PiyDTdLCcJWFcewfN6CanpcmCXUxmG5uwUaLHWZ43zHJ2JfhzTYt7PiNTueLSZDJKRPYwYi8BixqUbS8CHEi",
  "key13": "3GjfwQHUJNTTHeJiFVpjR586b1zbGJZsVbnyYcUwKBPqfEPD8DxEz6nx5vQDTDtXRT1g4B3cvJGMTqGQ1HH6YByB",
  "key14": "433EzqDzdhDe628Houn1oFMp7yVtFAkcN4ZnVrXVCfjBVawVz4PcmEuVjVbAEtVhrPfhtrDN33vdLCWErUsDTxho",
  "key15": "4URWWNwr4z8fzES11r4dfWTyKjos9M4Ku6AHunqtDbfRskxgtzmVMaiPE72DKpsWPmCknQoE25miJFi6Ai9TbGfZ",
  "key16": "5b9BZdppkhCtxpgySmy1S7KXF5UsNke7ZndcuUHkhRjoNsDcwTp922BAnNjKfjLwR4z297jsDcYRu684WFD51pd5",
  "key17": "2kUSoHZMBz2mz1D1ypiykUEwd6y2C59nxFeZbxniW8Hu6ZZkjFimMWKx9W9TY74HoEGF3YTQ41DzoGRu81r8xi3L",
  "key18": "2QNmtzSXuvPyhEBqUbN5ND9XgVFmD2YyFmUFQeR67VRvnyT6Rd93dNL31xoCee9HZ9EnqwvpPskSLtBsvE2NU3VC",
  "key19": "4u8Q7abyQfgDQ66SmeJUyPFuokWpbw6M1kfg7mzNnr7H5K5T8CU5Eer8ug9UYqKU6yVXawADWskmqsZpSwELCiHP",
  "key20": "3Fs8VufNTUTM7RjPRWNPb1fuz9V1AeYp2WuoxHb6gbwyTRjAcGZnFradVK4e5fJNmoPNw4NoeYG6dTRiwVLew2XX",
  "key21": "TfeywRvrphiY7VMgvqfP1fMWiM4yLdHeP8BHdgLDoCMFDLvTLXx1Reekc7y6ksdUaThDmRRJAstQSsL3M2UzhpR",
  "key22": "28RnVJ8tGe431zmmuiidSwvWTFDGzFihMXhTVozkorYGcVLA8e9SaeKkayV2qVCKHMZbfnQkREx5BfwRArYcsaiN",
  "key23": "59ogwNQ3FjTTK2NntURnrzsSdCHBRJNpZLjDNM6PRqwKykyGiTzBwGPgv2Zetm9T9Pq2adwpf4poHGyWWVoUAXJL",
  "key24": "23NN5eVwJRcee8Gki3Fjy3JhuVYzt68PFfp4QnYZoYx8NMCpv3FvgaqGswEuJ5HvAGHPso8VdWLpyFnSrQAVsC42",
  "key25": "ktDCKy5rYiWtmJNcac6EitebCwR14u3tP93ceHPPzca4vhjKH4Rj9gsUXGgKf2S4FigETbhdBJyFD56U4SqPE4v",
  "key26": "3EAHazosj4Y4rh2nyjctn7qS6ykHbNsNTagYgv78brP83hmKNK3gxSj5qZBW5apCPxLzCXXJb7cSPDsEiC7dLLSc",
  "key27": "4CX1LjDU5CxaaAucd8EHjPCbhBMJhzcB5e3mQpzuvuouHHkAmbihykn65evNhEafAwBL2X2dhPca9CbpzuDSr9J4",
  "key28": "saUzvwDcHHWZ4cg2jNEmv9Nc3VEfF2RQgZ5J6JioVce8LH8LDjBvYz1SvLqYb5b4eWHfdaeF22dUHWKi7MF6WaS",
  "key29": "65AY7UFYJ6BADDzDYU5UDvpTyxpYPcvSXqfNPmMmgfZ9e7nT1xRELRHEVGK8MY6U1juqRbauRHegUpWaw5YooHuq",
  "key30": "4xou3LEQGBHZ8N3a2o4EGRYf72Z2JPHTk5ArtFsyU67AXmRtjHHRnesJ4UAbC8NU8zrTx7bZgS6frVMKF2XCDUd8",
  "key31": "3vCaUAxHQ17kPC6m8ESnENxDY26L2acw4CAR86jUPEcEWH7CZBJRVxH7XNaBuKWtPmbDYCjJ8cEj8PFuMfF2f2Eb",
  "key32": "2F38Ym2yQZwmeazF4fv5HAVHww9CC4jDdaKRMjxjz2ekg453bvXeni4nQgyCdFapMUPZnzmnkTWrCAYWPF8nR2GH",
  "key33": "5pZRrEZD6fPWNyZVnBiByTsV2iBftSwBmbz1ub9DFtg3VxBJEivSkgvsUySnWejCEgCLVNHGy91cm76318g4GCGH",
  "key34": "2yFFPHfnCYeTPbPNoELAENvkvWBzqqT3J5QYoQ3VpAgDUjRtdXHgCW8JAQ6gH5KM9Ke5yq5D8AStgu3isWgcTfXX",
  "key35": "2VGL78SfVivA1HG7uTVfeYWdzA5tBMNTnRZ4mrbZKBq1kTKSPZx7Bb7Uvy1QG6axYScmHrJd2GHJ1obC8cN1UX2u",
  "key36": "uUu6rK57MRtQ35fqqdhKqThWq7Wdj4XQMWvupvuVsY8Uexy5VjT4s3CqWRmLXf1NWNaMBJHGuCSSNeeof2dwGiV",
  "key37": "cD88xdxzz66LW1kX5863YBYzB69d3ESHZYKJa9KtRQNeYDjZ3HxSZ9v8SJoh9jA7BXWfmWcTS1xJ3YSJnptwyb4",
  "key38": "5dGBGTfzdhybFfAQSNQWC1offoGjoLLCLGGYqhSMzfEvVLp5WczkQDnW2tZEMD6WXWKhwyygSBeVVkMQhUFr8ihU",
  "key39": "UbcGARokjG2JTuyVDEjBqM36BKMvtWBNQi7mjWRHeKkphgKZPG35HsWPF42oixqv427rXbjZR3hRryFm8r49GCw",
  "key40": "5Tb2bCLGoqqHfcwtsh9tcQVoqoB8oqDS6zYJcKapc4hTySjmz6FWHqYMhhemWVb7CuPow8U9V1uZfu4tKAtoMYVS",
  "key41": "4BiAWVMiiD9GJjsL6L5sQShWwHRXvoVtCXZh71KBQSAzuJMtLRc3eCsCLPputLYb9PKHVvA1CmL79LNy1efBkiuZ",
  "key42": "2JRfKxyuZL4BkQeaTx4dEzBeM17fFuXmeE4e4Z8M83w3ofHgxEPqtxHFZpFuLkG5q2zfA83zuqsRszEi6DndArtA",
  "key43": "28NvaPZaZ87sZ1PjQeAsx7eWHidhiiCL56zA3NFgBAwWh2jmqmcAwrD8gDBofvS1bBeKzqFFAyedRoFyGvrDdGKw",
  "key44": "QEC8yycQwcqVBx7gZvsj2XXJLPGzv8E93euEtreGZKW2gU7WGznpDXMXeEDAiiGck9CN6UTniY3HatKsqQ2YQGr",
  "key45": "4ygcvyLizbygriSzwMJb8Qy7vVGWFGudVWfLsokzyfYePxUbbv9kZv37Ur2fQA1Jka277ivbcrYYxD8AcbQNHeUs",
  "key46": "5YHpBYrTPKH8LBfDRHW1R81hBQq5GNsvD5s1VjqMyKf7gzpHPEVaVKZm6Vq7rYWf2gFiCi6Y3rSEWN24ouzMK95R",
  "key47": "fm1v5nq6CMs4HTNy2FsigYMKgxTRQDuhphAB24M3KJaSNN3X4mVKMgiP5i5S9EvwgtGKKMqPWJF2j9N23DddZn6",
  "key48": "32EmZdJNmuzVTK1DzYhc5ZGrZJUN8bHmvKcMbC4DSQwmKv3SBLVvrek7DfF4qDd84icrf2mSvfPkZxu3kc8Q8gus",
  "key49": "3N6YNN6KGviWm5N2CF5FKNQU8YJ1Fhn3rZh6BGNiuLdcnQiwyXwXZy86L7sKtVJsL43atSuB42NjvqUcjkWRiTT9"
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
