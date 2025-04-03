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
    "43UcH67sk1otP1JB3Cep3kV32wumF9YNyucP7LwytTfM7a3oo3X6L6dQ3Em4u18YVkjKGV3QR8HBwyjYeX5vBoLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LkV93nBFt96N3hsMxPWpWr7i7ojy4Tjsi8F8oBMLPst6okNbekm5iBdhvBJQKkiXGdZawuTVkQXV9md2bBoyhB5",
  "key1": "4ruBhuX2eXeY2j8xXz6oS6fgxkpGwrEr3oFzTwCAFvcD2pe5AGndVBVQcNfmTwBbbCJfukMciRfhyafykVXGUDn6",
  "key2": "4M1WK5oH66z3jrBLkP6tWqW3SiahDT3bunCjLLtV8TwowcNyUjRhz7ooT6UMnKfEbFQcoT17Tvfr2cabdMxMDGid",
  "key3": "2cCJZpMrDi2pCyt95J4SsUeDimXq7eqUqDEZWg7js8EhXZD9hjNnSqL2ptCNbykdJs4svtGr6CESuuPUS1eu3ope",
  "key4": "4V9b3k2opJQo2uJ193pu7o44SUCePYcyVUtyb76o3wZB13XBdTCgLsxnNstejLAKib1hdDNHrjRmCtmCGS83UYyz",
  "key5": "28h2sduSFCQkwgFcBe8WvJ3wrMpXkajz8FD6F1EizAbtaDf6ZFwpBiF1r3kDwUiGR7H5U131mRyM5Hr4ZsBxTgHd",
  "key6": "26UQMShtea91cLhNHFdMtpSfwbc412NdJWANoatUkUFBCDHZYdWXYSR7qJSLaFFzcYM3VtSzNKgn8PKgnc9piUz6",
  "key7": "5M88AKSxmw4XjSvEWHdwKAP15bsNZaS4TewhGNkJcrWuizah5XvR57FaDEcJTQY9kQe1reeq3WruERMjELCezMnK",
  "key8": "2ENnWzjVeAzQxgzkUAJqSxWHECJo5ednvtvpqPSPZAVCy1pnd6Y72puUSEwi6LGndQWBLqtS5uxCHEhCj1siSSgv",
  "key9": "4BhCijuNS67f6rDxKBe5bhZ4qidTJYUn8ohZyif1zay82ivbyY1UK83nLsQkFgyDDnBjNgtZkjSjiMDQxqd9MS79",
  "key10": "4iTSV7Lik2A8qKZc3aRGyPBzBUERvCMf9VYmYBfni7TnryyEt6ySduV1KKXZt1bXsBCY2ozym6KMmTpXHkMPm4ME",
  "key11": "xNZyCEV9s3MsGXMkZNADRCKbVg1zfidL9QzGUYwiSDiA1CFG6ZHdtn6dTtw25ux2F5LEJLXbJnehn2ASF7fmzYB",
  "key12": "fzSia7pTDNodoL5JjjaLvbhRngxvGPX2uYtGKeDYZ7j8e2Hv6YFAuJmKnkfCk4b9pXeUF4vZgYJ4GZKrjc7u78k",
  "key13": "5tqVejNvhZKRUYsxTSAkWYyx8cnnQuBGxTTv6NpdXzicBZ7pfQxrhX3KUqkvrCwJSa5KoKQjuXiMmecc5GrZ4C6j",
  "key14": "4as8d98hLG7tSFFtQtENQ1EHvMKfTTxbYZ2hp1m7yyfYCSHzgsPik8k8CyAr5h9fB6dJQx9wD7YioQAg15aS8KVm",
  "key15": "27kkYGoZQeNaHPFRCmLZMVkjpBrUJm2CMj5WAcWVbUhco5Jtkjh1uhUtgpw2tw3p7Lty4JznjqYJFj1ZVcLz26Kh",
  "key16": "2rafsHJ9gG5WWJNC4MKEkm8hBEug6K7XoynnRSnBV9xdLmrMJoZmNeMr8YAxeMKWbVwEYkBWXVtmR4p5Y4hFaZMS",
  "key17": "3rcvEwdUdfDECwMvdybRTMptHYq8FoZcaGRBAKvji1saxYFraeXTgEMYREyDuk4heBjzK8K44wuzamtLwZGST4Um",
  "key18": "5dGmqkpqgDYVYqCDFvUq4oNTXSy82eVB8fFP8bCP26UGWhbpUdRxwPYENBEijYNwCZcBTWV4jKTKCHbpnfVwV94i",
  "key19": "4aZ56z3thv1pKVNBbQJMPw5kC4UAeaD3TmiVbpmR8GBVSQCbYZ2Kg9s4fjYyR5qs9sncb1TTj5M1pUkZA269xYPz",
  "key20": "3S82GFAQDLYoXAM9TpoVLpLhjAS4wkxgVvHuQNmBcFv6v8AMsCYvKsuB9sh337CUVe1uydF6HqG4hDz95C3Q3QPR",
  "key21": "3rS5jX8UNbmarzsz2RYjCjvXH2AGSYVQt2X5sLvp3uvcEjKV3WwhnqbanF6BhptTMQDqHRHhYC8E4HU6MqCg1ijF",
  "key22": "4JgfatkPvje3hzD1GfnnB5DPmFcsaM2CwHYTU1vUY6pRAmYKTzWpaciPUQkJNoaiM77R4ccYXBJrWbzZGV9J5x5v",
  "key23": "4U23MnkH2TEe4pKoH361i4mtntJPLGtPTdYqqxd3Kmc4QPf44Z3UESqJsje9kRbtFpQg6YxiVQjt5rXUu2yJK6JL",
  "key24": "48zgdP2v5QUi3FMUPbojLkVErPVHmrt32gKRReXkjYqNhS58zg4EWvhBjCvV1hEK6PfAgUh73SqCHVcr76krVEo6",
  "key25": "2RKuyFNG9h2WGu84K5jWhSGT3SbqKpxUcgnz8MtRghy7eAeUf5NDoR3c5TycdVJUtZCiCEpy9X2b6oesYdZDeaZK",
  "key26": "2KmRNU5WCHqjR5k7HqcFtzKkJaaQg9bmVVTteHaSkeay1XdFwKMRb3NhiCRVD5zCCc2UKmYZbP9svTGrVCkU8EDA",
  "key27": "4WwRd9CG2qMBrueLgLxXMypk7YZekagx3NDsMhXBwoRWijJiRjQvH4eptFTC4K1kRbPh4zXq1JaekJFzuJZ6fQHB",
  "key28": "4fmN1vFKsK3dNDugRne7mgozaHRmUNj6ao1MNZzCxv3TS5KTuZpmjqqkkv2rqvaTwSDLHRYq5Qgs6gPJ2khcfE5D",
  "key29": "3DVJyxptZbekezT9vnzbaf4PPumbztNDKKK8JcCG6uKhyyHDrc8xwg5dUsoLwjwYXsLN4A3GZ1bBtbxjV9KACSuh",
  "key30": "5zzf9gtwgMghX2eKA3aeDVKAkd4St7pLeZg1pDUgEYDDksbGqMziFGwRVMXthizS44D2HV93u5KNfpPUvkCRkbwR",
  "key31": "5RNm7gWfCtvxHNBrXfUsCKU6ew7hJFxdXtZ1hknvoUkXBZPApWkVmzQt9UmybfWtyj1kyNDfYHDQVQHzHvDkNxHx",
  "key32": "4mLE9shMeteZa8c9JDTtSV7xoXFgCtmW9nbx3jFPvGGuVSpS822o67dY4S38QoyHf6WFGp8bWUM5d8q92y5fz1cQ",
  "key33": "4ynv6iN9yM6mMvKCE82zzBtoZSedBTMsRaS9qE5WjZgF56gqdYRG41id4dWTXBhBVf48gkBXuVe7pdEro8GZnBCE",
  "key34": "3vfaoG7eqTyHkSiEk1cGzN3r3s6CnBGYp6oPMcxqU678CbNVtp4Lyy5PPGsabpLQqqzzi4BLtV1v7TYLWNmq8z9E",
  "key35": "25yFSHnodP9BZ4HMYhK3iYDY4YnMdA4eGhkrny3gfKAP3cgPryCYqUsqhMbZqExokYUut2ReQhabRmw1G1MzWrXg",
  "key36": "43KR4P1cbNdBKBAvbb49iTnJbtTroiSKNVTMGoRW7aMmoUH5PKYhZbGaGg2ENa4i1JP1U1Lj39WgGRihJ2nt1vvZ",
  "key37": "5rqpb3vA4jY7pnEYwzs9PZAMemFhMZ11JfArxR1Hr85HPhUDC8dEFti6pAtqbCpaeKGwSMycG7Rt76wTSWo28V4w",
  "key38": "CXWcPKMwjNReqEb5fvaeoavJzQZmLBF5sYdAETjDhaB6Tx1apWv6ajLaXXPfP11MyUucQwk5xVwpSDrMKd5DWag",
  "key39": "6zp3WkpP97f19PmxHFixs71VZWQVwKXB21yirn8858Md6U49GN5XXcaxauPPs1mRwrn2exbe5X4GnZdBzLeszWx",
  "key40": "4RUmcopSFxP2Qb3eRZmuzFmFgGmvgJdPyKF11CRb9h3kjQasuWP9DejxRNmYigCq9u43QzPVC6MdShAKGFze2p6Q",
  "key41": "3u1Cw7YhSSE7DCp4cpGmQR6dz9SQ331RceBgr4gQhKzzwap9ufkyRqNDQv8BrLe3svEK67kxsHBqdQoV6GLytnN8",
  "key42": "35ii9pL7P8stwPiYJdLwxSfrS1qgsYYo2VHHNbXPq2omyHS2nn2tgpi9jxGvjFrtMMZJrPsxeqkNcbDnnoWLcsru",
  "key43": "66dThmMQAFvCL8R7LL5mFR2byXobUGYXd2dzfhGWDi5AaCqe3AxunBahSCRLx6HX193rp5JX6nBSDwYem8mbum8V",
  "key44": "5X2iH1DWiEq62AvWWbM89BiHLop54artC3LB7YDRPSWML5yZjvV5s87iJFdC3KAMeyQ3DaGkwo77VUc8JGkijMK6",
  "key45": "5FKETKXKG9Fi8EzQdzEMyjeneFA38YsMYnEDFjbUq9BtYsCpYoSVBE5D1wvQoNZn9XyySxPdHcDbszSi8RfZ7Ex6",
  "key46": "66jC5MnvHNvVFapMM3pshS2wBtrGodkYSR7bRFkSWR5NyVhSsmqkzB69a5yyoEfqo8KnmKgSWXRVD33NQYN6W78j",
  "key47": "4C9KHUCRwLXEYvFoqBx4WD96ureDQnkmSdnovtRjaoDZP2qpceyFt4XfCP7oyLmHnw9DEegEkiEN1mUURa2nZgHX",
  "key48": "4sRB9sg8kzFQWEyBF6wbSZQqBzFsEm6EWzfHdgTk7MFwZVzmo1Eb9ptnJQXbKVnMUxUJYzGntaLBZW6FSZqUawXK",
  "key49": "5ZutcYXHvkekiiSRdW2yXGHa5DfcpALYTdUhnPFCJXHou5tDTiowLoNizkcENBSrQK4eBkNctvjg1ww5CEMP4zCg"
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
