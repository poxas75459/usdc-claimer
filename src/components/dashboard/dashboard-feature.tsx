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
    "2pFVU26s3D7NhrNqPZCHb1CBTR3FJRqtqztuLjFUQYB1RLxbptwjpjvYh4ff3mmNRU7VayasPJoVqhukW724uFLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JDVWpuAZZFEBqunD92Bg1iP3hHA21iynHkT7F1akyvYEUkMsb5VkEsTpHiYKkycuSdtaHVSufxg8823qFuWTX2",
  "key1": "4xaUYRjExLbDRzpwBRDtSxgENPp1dR4Q2rawbTd4q6aydxzWCy7njUU1JKtzy1WbYXvhJEWriXLFpj8YAv7wcf5o",
  "key2": "5hKKKLxZvirwP5vK96CuMcgEmVgJNbeTxH8fYFmcneUiaSDPfkE85NMhEFqKHsiQeBpsuJFu1ViJQeRj82ehzv9g",
  "key3": "Mwv1TBPNtwec6capgghWVPkcnL9EoQWdSGHTt9YZkf2gwptSBCFKTUjRHhjGwjLHHpQ3CDKbS2GSuZVR7T8kJnZ",
  "key4": "k3Qwe3qHu6Ut8WAZb5c3ZKS2FGdLfGEVABMDJXC815YMxL4qH4ZYs9yJictkWWNaPMAdJd7xJHswb2JpNUjTzxE",
  "key5": "3aP51669ZB2HiqGfxjC3wUEbgWzksh9gj7NnZ2wFJ3r7qGsna8ow1PybJkAScE59EZHJwMS2HAb57n4UK3MbYsiL",
  "key6": "5EEYiiqMGNh2QGyHaTQcQpN8SeszSKtAyUQ62pawp5mDEjiNgURUAbTAAQQ2QZRyTkCMzRS3P5F6VNyudVtdRj2i",
  "key7": "2krqQTBvpn7D775qsAS1DPqJWWNQxw4YbhyoL95yE1n2v4RvYMkLj41yzCuUjthGaEVVFu46U8iM4Lyt5ihmpRqK",
  "key8": "2kG2zsEZJC2Y1QRjAeZEgnGMqiAc4LLtKHSb4jGLDCAeVuEpYcuusbqt1Z3LgJe2Q4D9tCU1LA6vB6Z1ffMuqKxG",
  "key9": "246ZWVExEi8k6LjT4GYtCAAngisre4TuuLLdg6iabzozrBLJocKomuiYqUa8Qk5DgiPb6ZgaqnCi5FguiTMjo1nc",
  "key10": "59HXy1kBLy6VSLdd1YBpHsKhU1o3ugNnFEjw7QMfoDJgSbAS8UaMDttRbYimrUTzdhmXmet3qcui1bGy5k89pHTp",
  "key11": "3M4HVMjHPF4YnNqV2dRKUdxnTn4wQMMjUeZn5uzRBw9fSX7yhQoaHQQG4HRH1z4KoGzwbgtQT2tgDGzNyt3BoWi",
  "key12": "Fru3MZMDYHFBok36AYHCr3Y7yUTPARQsFCzmuRKUSjhWpnu4rtSBiY54jmVy1atpJJ5qQcLs9tQry64UDtJQhDN",
  "key13": "4YzrxBNePUFz4sJH8HpKP3jkhKmKzWZNpYDcxdYp6STgQGneMPZ4BMGiw9vMF1TGZ9YPW6KkTpPo7HrLbc51maGC",
  "key14": "3ZLTNXby987TxUFP5F2UeAQRTfs3ta7Pis5Gqo6M4uDBm9wBv9PkhLwJZEX9gzSW8soHeE3R6EDH8LFYNcLxUKzU",
  "key15": "3zywTuCLacHaYDoX6jzWX79GQyEfbBKzbaoHJUvdFheBsHy5NK5c5nm78vo3ag5mh6DxkUNhWyLjpYMmA5Nf1jJm",
  "key16": "4KDLqngbrGMSK5sntAvee5YJwa2nDXYs4RCumUfBHYDpGjkLBV8CGRZz5W8dPdKeY6q4JyWfFJLPkcoQSA95DSpZ",
  "key17": "5qVWQZueumRT4xTDiMYaMUC9HFZQXUJjhjrb8GPRvQQUvL9v8HBSdaFZQHwtQzMMLNyDJZjGAiTGFapg4ufcZ4S7",
  "key18": "2XKNgyyXUU41tH9vRruscJthQCg5jbeKQTzA1Y1WjM4Yoj9Li8PQgVwqh6YejJ8BL49EoKeWnE4bBr5wb5zHN6XG",
  "key19": "3UkNT7GekQ5GLuwdXNXPi1nEjHynUDw1DdqyCMuKdHUoLRut8riUGrJw5tq7cTQH9u42i6T2sLZAXHNjy6zkbpo1",
  "key20": "43TAsHcnJC8yX483SvpuLYDZQ9JP16cMrFL6VH3npm4eTMwLiMhKzni2JdBZwtBpPcaRvtegiakMGfcW4Cvrfktz",
  "key21": "24CantYfr6QVcuyvn7CmxafZzcQVW34Aq6jFM5hAMbQLxWLrxDHJfYhibN5NXPCdQXSp8LHMSD3jtK6zpk8QQsM1",
  "key22": "3J433Tfxs1HKvt42VxVUPvRZ81buqyvveHYkb2FzFkJFhYRBfdQQCe29yMe1wbDEjDWDxnCTfAJ3mCkTJsTzveZ8",
  "key23": "4RbZLCJKKV8UtREQtFMF7NBNgWrPpZE3X9bNFPmLPD8wtUBDWGqnnA7ZqFdxVQkXbJDwhrcUMB8CZ3oobYi8nzkw",
  "key24": "1JtgxFgbNH49wp2hPspLfh4Fap21GVd8HBrp2crkXDP6LtoaQGsFQuJmhH3x1UktMWMDj2VvGKebYH6q3SyRQ6V",
  "key25": "EcVwZreqaxNrJ9YXyaMuwwv7rFk5yPhqVcaUVJX5ajKKLwWi8ps2qDsmSK5x7zBvgDZdYP1ouKD36rDCU4qhHb1",
  "key26": "5y8DTkFTSAkckF7oNuR8Gmjw1zTt4aHthVJC99UDrqq932LXL2iLekfdaSnZqD6ogjnwNM5Kcf2hT67MMBdppHH5",
  "key27": "MvxtyRsB15TZG9eGv6UMmWoQQUjJrS9BZ4oyFQQGFjJkiQCnbTgXxbAcqjQnPLSuyLbeJ6oysioUUPZweL9zhcZ",
  "key28": "bizfv6cXAZjcHKfKuMydCLT1K6QY9RBw3CmniU5AK3K4FTUrsxPfAx1yLr1xeF5fGMc4MpJ95V7AjAGWCVutufu",
  "key29": "4bZKGGanCv96ywAZszerkHrmuoyxHP2d1TUe6tjvhUubuvCfRUyovWuBvUwg5Xs4bGqLoJ6THvd68YWJ9rSQeWvm",
  "key30": "2JEJfyAyGnFtaFoBxj8JwiU2SWFs8RaTVSxyMPEqsxFDcj7VQyZYJcMgL5eDh2VodMH2zPTsVQ2tRWbp99iUrKFs",
  "key31": "5NMyFgLJ3BqzmTfrcJ4REEmVnAw334FTeTgKErMtAtDcBiBZthZeM4MRKUXxMgeCcZ15wJczs4PhgvGPUhoPaYTF",
  "key32": "XTDWeUixAJ7xvPre78kJwcuQ1y5NRbuUhTjFEiqByAVTaUouDGYPR5dijyD9BwoXUNYYw6EMdN4CXpdrmoykV4S",
  "key33": "LhQxJT2KeHrHupXYdsnUowBKdsnpxFFtCmq3gjbb9KTJiBJbZt61S5mVyLeWes7nr18PwvguVX49iQKNkUnd9Yh",
  "key34": "2uTv9xuEfExqc6eXtrP5mEiwRAnTEetEAmbrxGvH5fX4bPvK53smdT83iHoRFMBTbHoKiMkpXMgtbHi5ZoD9fyc5",
  "key35": "3dgJ63xoJ5PwZTcF9KraZFhUzPL9s5j3zL1TrKY9gpoi37XaeJqLfZwoFKSeutaH6Q1i7VdGr82UQR6Y3CVViQy8",
  "key36": "2y6TTtjJMvhnK7EverC5pFxR5qV4krwYrk6fkpTMhrHdAhXsVpV6Mnq2naqNAeSS4Gciru4iLe8g5tiYYGxP5Vk7",
  "key37": "KsYgjQRHKZmBcNZLRugPmNaPBHCx2Yr79qbMYTdw6EicG38SQDbLvE3RrBt7UpmM61EMrqxZmbQKGmYgxKnLsDA",
  "key38": "5NATCckqLqx3c6zJUV7UGo8xQQZzr6wPm4fGAeh6jy57ZqxmoY2CcEqMtwHG6bfXmM8aFhXt66cdJEfrFv88Nci1",
  "key39": "5ixUyNQoC5iX1vEA76P6WEKhurpEbWm6eo1oNmL1KEZ79Y5C5dNFbzWCzq91SLNTBfa7zctH77JN89iqWY7iK6ba",
  "key40": "3QN7HVnVMmCYdFSCPw41fYbBSf7hQvtS6ySZ89Yq5Kg5nKi5PvJiYgyS3tuahtUJJZP2ZpSPa2VgTP5GJQ9B7qPH",
  "key41": "2fYAZGDm17MHRuaicgKCpa1C1THzCmHoYWMWMQqbXj6Ngx3W9ExgJcEzsQsBaKuEZP6dqvA15ytpCwmWewpHgtYc",
  "key42": "3RBrELT13YCitaXm5DPmZ1ztGTPWMUjfr8Kbk2q4sBCxpkFRTQRccA2DVWP3MDrD7U5qH6wWPqNxXqYMg65NZP9S",
  "key43": "5FFUvtAYjiP3u1U5ChSimaMiGYEJBPv3RwD1J3A6tUnuRGqv7QnaV1mK7ccRV7XDHQXQdjuZU97UKcFouNrk9rpN",
  "key44": "5jrgSL23jYEP2YTTZeGC59FsYzD7zATxSEJHsRewWivt9c6ttuxaC2wFRpcUM14wahQzYYR3KNDtreeQ8TRzosmU",
  "key45": "2NGbuieHyMxe4YRF5Ro1R5Nv47gR2TneCSVfgsfCv3DE6cxeT7NsBYEWk5H9Xfmj4ugPBbd8qu4ixwdxqHArymzL",
  "key46": "4jrekAYSPHyVURxRs3AULUkmHu729E3cSe6L1WBjE1PCfGSiQuLteokfeNmedJYpAZXwdDeJvHehVdr282SrmFmL",
  "key47": "2kYXAwnnG4o6rj5Uk1AsS1ptqhnxSbUdcUQFGmgg816eDwBkkNTn3cE3za1gdfEWPbsh5TS39mGTEd9XbeZsooFv",
  "key48": "doAfZ4LuBazmVVFQBqGh7BDfpSm6q8g3ZVKHa6Fu5UF4nuV5uHhx4fhAcnDZfqsXrCKPAuMsgpRgkvYFDgKbVXw",
  "key49": "y4qEuehdgMiDEQEyZjhMZC9wsuPDLTwhR5ocHXLXh2t5j1VYGcmMe6XweSnLVj6TNuKLumQAJtXpjAzDrE7rhRd"
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
