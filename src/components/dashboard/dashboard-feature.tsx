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
    "3g9biQ6rLzNVm2SJ7yMJ7iLAPv4e6ZuHjtnMZGEzTxURXkBU2z3Rqa8yAWF6r8KU6q6nbcXwoJmm3RmfgW2v76ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZB2oETNjFyjYBuDV9LiY2YkMD4UVKYMcqbxrByBgGsBQswq2USbxumz6Auc8fJLUbfVV2TciYcdhHYntSNBArT",
  "key1": "3G7L6rV7mkyfg57esjSVnj1hmYyAf1Vj3i5UVwhL6njMsWm8YDzmigLAMSy7mFJqQdv7xLVML9CUVQMmi7QaKfYi",
  "key2": "6GQkga5KP9wnG4B2DLiq6aCshRTwpTPnjyCsJE5qWVzXuJJDWTTAz2YTzDh4TNk4obmnVdeSkMA1UZTV6K7i4Va",
  "key3": "3DkPgSWhYUuPTfep1hXmngEwrnoVg1j7nQycKQSqnwRhuf2KLrTu6yYKVWKs3Xo2d318txk4ehMH4yfUFpndyYK7",
  "key4": "5kP9PASLRcgW6feFY3qRQtaqH5AaeNPHSkd6BC2CPS2MxJNPaaGSzhUW87Ltp3MbacAwe1JFsRYfoUuQAYBWGbBN",
  "key5": "2xYLd6QCfRhZTT5qELmoimX2go4jZ22FM1QejdMkdeFJvtAxDtzCiiNsbGbDS76itDoFz2ae22kjciZo77k431BR",
  "key6": "2AUogL5mQw3idiZcHjWCP9Lypxfmrd9282BsiW9D13yxNfPTsduKchKuZxNPh2VPG4kVmE6LcgrECdvquVPDKV6",
  "key7": "sNokceu4JF3uoZKiDijJC6mnVyQhctqhbWYwSJik52NVWfo2WR1ddqHVHu7KTuyb2cZUbAXo2Q5UVC3oMw95N5k",
  "key8": "2v1KuVUFfBcGMwctnAPphHiXaNVMbJnag6T4Zf7ptfiQH7oxaPcYWx5SsoFDvWBECtNuwe6Y8NYTf17BG1inDBzf",
  "key9": "m6LFSbaxfxk8zBVxsghepgvc2tf8qYZR6CNNtkfMrtMafgafxbungikanG1vE1soyzQsuRUmyX4iJg6joa9Qpbs",
  "key10": "3TMkbTKRFr8QTkQk7w5DqMLjKPtjUSNavB2zXtX8VXkLWjs4jR8aiLiBvcACGAHEECsRW5FNrW4wpGNSCftXZLBN",
  "key11": "3qhnDrCa1knDB9oY8K64L5on81XUAPSCKsSxbAnxnXREuR22yXH6Mv12R1grJKt7dtjvNVHN89eRpMKVfvG6DJpe",
  "key12": "bd4wMXeXpusnzr4EoYVwXXywve5mZP9ozaUpduAG4wBFz1Xb4vyPHXjx88QjMrgmV9ASCibBJQch94NTJMaNuUi",
  "key13": "2DbGqXntnc6X9ZvYzac75GzitDHv1UNo9CbsN6XGUjy74UitBqYUp6gka1dPhcnbqH3BiGoUCpaWzVjrEZh6cVfC",
  "key14": "27nx7kpMb2cTn9ANnZTU9YNXCVXzqMXACbW3V2Yq6LaoSpv5xDSokyYL719ToPJXcMcm6TEyiUJ7aLh3nNen5Rtk",
  "key15": "5dSitb899c8bXtWFmoCQ6D3FeUq57ov9p6vueTEvB5XN2GV3rcZvFKVWnNqdtwDbqDG98a2chS3jazNGnsULBoJu",
  "key16": "39QhsypzMyV7G26bmYZJcjiHKiWy5dvNMR1Y26NR28Cu1NM5UULX81LqNpuH65jkV95GYs3RCbrR1vHNzXmBEeNB",
  "key17": "QgRiA4ojcGUqg36t2FsRMGs65FnqZWhGvVX3SrJqkJMzP96FC9pKC2mLkKfWpcqKYBNSFeJB54qmHPZNS6PtEwd",
  "key18": "4Hpy8fN3p5HQwHeJGqgUnsoVQUCEuNMb7w6KUVM5eLrSgiYb5xs26y5VqscxA9FMbrbGw6C3eUJppxi59ypuCYQ6",
  "key19": "UYEZRkb5BHpZGS3CapTFsmNDfHBL8ndaSVr9pbfEtARixuZZyQRTwC2u7GpA3mrKyZ52UhUByjefdFHBPULj9dY",
  "key20": "2nzrMjbU7u5fsLtrCT6wC8vTgyGFbD92AdfhPpTT6VHdKcD7uTT5zEHp14q9NnsYzAsFDzBWCteNkFnNnSB9Q5jb",
  "key21": "NAQAoyY1ocmikbkxXMVtqkDhsSFyDeeeCqVB8LMqF3VnmGBkLEoP8bZbWrpk6Sz24ne4bR2BvXXxTosLTfVSTFh",
  "key22": "3iWFJYU2jb8fqAXaxad5eiAWu3ihQjQw9piCxSzGMLv45Z9hxpeA5j3otZPQB7SaksVrQcz738CMvXoxESJhvmVh",
  "key23": "2iL3MfqrgCYiRKvwVZEdznnFyjhcdaC4do287CtmvA1g1zdyYUfE9dV89KTUXLD3ctsaCwqK1CpABsGY9UHc9sqH",
  "key24": "38JVHRKrvzDnNpY29Eyv41HAUmYNRaC1WNg8MX9hAvLQxrX8xuvkWqRpk6zsGJPLb16F2gxWmQU1t55bbFpp5UX4",
  "key25": "3BCVUx2BDJZ76HDK1FPVoEVwXnjdVXhfjHQgV6y85nBdfS2xoLb5JBJzrayFQYa5HbaieeDbH7nYuf22nNFzYfD4",
  "key26": "4pZ7w32m9RYQnvgNtmXt8drsnz2jeYPwAc4bmbbbQputBkFQv6XzfFTZa3q1sp7iPz6K4dsoCtZcWrkjegzMebvH",
  "key27": "p9d5L6GajhTBpwuqsWJz6qkkg1WpuVbVqrSLpkW6iUwWMvJTAeAzv4s76YbXcPtQh36WKEiYZRBZDhtrtvCaFyk",
  "key28": "tdqpLmENi5YhBwPrwbQT547HpGSWbUiPoRYq15yadLpEPY5yeGEnUBwc3JjmDA94iekqK5rYhVAeLmyKuyYswm6",
  "key29": "2Hkk1Gjww2ZZWtt5eXvSizTzih4oreX9cQNKZashpzNgitVSrM9H8WThUuwv9R4caZHVgwR6SE8MkZkHphpK5sm2",
  "key30": "JJ6memG431jbX7kkWK6zzargFuUX8VsuEu5iowJJhxxzrmLCp83RiwQyB4Lq1s2ERPchTpR5612f75hjvSSaYBa",
  "key31": "va6MPSNTq8Q2qg353PhyustnvhdFSgzgxNXMvVPafe9HZRoAEEj28Z7w8MaUtwQsMd5ygKrjhc1saXCVr9tTxyw",
  "key32": "sF63MvwUF9kfh5k7USYFPQYdAABr1RY7MP5Y7aH2Aobm6RoY8NnjuZZGeZDBwVqh3ogAdAHdd8qvwh95nGRfmgZ",
  "key33": "3TD8tQLRNBBr4DJQvjrL8vt9p5o7E9dZPCyydPcC7GnHUV4r47bShXksV4BspTfChFjr84vWe5ezrsWDEdbYNmXx",
  "key34": "4BEhmE4CGwFwPmEcPjBiVGvGacYrfRhafmiKC5PUngTzNBYKBxbDdZAZ18ctL9guAupoAxBkQpxdoapvBCakHo8J",
  "key35": "5Z9qUexAXRDSMn9vVq7VTSrtDQjFSX6yCQSiZp3kQGt5guYtHSQKkFNA7dicRhHQvTUaqsAH8wUzkwfkW3R3JDFw",
  "key36": "3tYDNEYmr2YChj1GMfWL6V5MpgnZeHer6ZVsiztCRWqkHth1zULSMG2JSZZJFG1AUahoRWm7syUBV1xqezf7Cirk",
  "key37": "gSw8qmovMNXvZi3jeDq2sjcwjkSVcbf3ghhz14qSBT1hPmzZekDgjYoNk6TQNW4Rv18DQ6h4nU59ifoCnhfGUJS",
  "key38": "LcC2LCxoHacCMJQUECvp79tKZjhf19nu9hCfXC5vRz1jidD7TjNbQ1oVCHRyCUNaS2oUcWBByBHExiQpVsSgfqG",
  "key39": "2YgSZiWrUETxKkgnasYfnYSEBhjUmBJDNtRpTgNjoGAC4y26Yn4h6pb5udJe1iYhGvjB4JygDxt5tyhKq8v4hdFV",
  "key40": "41bnw7C1MQBScV9U6v4KsXqXLC8JV6ptmMRjKR97FV9J6soccS3NLe7vd3qoVj2opzyteam13iGHcXCKQufaBWC",
  "key41": "3yv7UyBHn6vGD4VEKefFzP2VQm4hYXauMDY42VjPMox49S5LmU9AnuLCxNobCxCEK7Z1G7ii3NX1NeSrbjYS64iy",
  "key42": "2PGjZZbPSBRVL8Xp2Ams8r3K5yAWg1rZPtvnzZygkELoZgNUsbLyxbp97dT5R4VmcyrprqZcHaZvE89rC4HnoPVQ"
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
