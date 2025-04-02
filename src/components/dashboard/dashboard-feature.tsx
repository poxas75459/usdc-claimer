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
    "4mzPwH3rASU7UN2aU7wvdUKDyyZEcea1noTdXtCpoX8rcftGpPoS1xmMW5JMzqEfBhTQnk1bxusBbfPYXZGAtuNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CNJrqDzhEJYoRzzu5i3QD22fu6vYBEXQNiqCDGx2sFWdxK4k5Q8htiE3AXcq5irqPwdymdvDXvciiKR7RL3Ai1H",
  "key1": "yGrTLhaxL8SXioPa3JFKiE8Am8WKRbWBfwh9RtS9sj1SRN1Wu17gJYbJP4QNvd5TapiakLfeBa7rLNaHVVpGUf8",
  "key2": "5CzHDLcwmLpEV2qBLo6HhngCg8C5tSVY2RUXr3bWsTfpogtme72WvywPGcupzCK4JZGW4QJ1btxcvgoPn1NmWo72",
  "key3": "3jrTGXuEYkkbYw94bj6uPTS37jZZ12fFi5D3EVTo9vEu4z1gYXBZqyjAzxCuWqv1AmTYxbbsecPxHK5iH6Qf24fN",
  "key4": "wpx2Ntd8jaCc3v9gDgM2YxAB7uTJ8Ly6RJcGZu3aTVEsaVW5LRWAg2euUywBN6FDtAKpKfvPv1QBubUewGaDyXN",
  "key5": "4nfvTjch1SVwy1X5AxxqK7ZYxVfQV1XmE7h2CkGYgyZnejrgL8BDjnagATyNgXyf56Er7xZqnFCUf79MbxrzuCu9",
  "key6": "xdfhZ3WtntraLgZUig3Qm8bqX9LiaDh7oEsyecyNGjaGDN6C2LbPneuZ5PhbEs8xC7j8sphjHX4HAWvV6p8eFcK",
  "key7": "4aFLxgRfdj9sQW7vWjsz9ishF5aDH7E77DzhG8K97LQHY6NPtMQq1FhhtNbbqJRcoVLeHrqXy39nQCZygBePVXpe",
  "key8": "2NSLT4m4VzSjNc7DQb1syKMpMLceMGiEQMjEcT3D9Fmm6zv39EYQ8f81GnG3bELiJwXiowik9GUKj2bkC1zWDvfA",
  "key9": "J6KduVDGZ7sG7XCc7QwyfXYaQ2tXC8BvWZEe8NWKE9Pf9WGDyKQbjE1muzTofRmSMdCs2bq51wggYLyfWfjpKp5",
  "key10": "5WhJpAxRoMNpTCfhJC43D63GSy7giuX6ZsLKxB5GUqCyBKsRZ6w9Nkskt6Rh6aStTwu8hQAtm1P4jYHRHQynPXvG",
  "key11": "2cg49nPW4h6ED5Jqaonx6H7tDKDMDJTwRmQFECZGJxhsKySWFSVwvBK6rwnjVjzVMX6e1GqNxD8J2gQdU9s94oJk",
  "key12": "2iYKKiVVmCE6ULr5yzMqVtAVq1Mkba9RhNifWNYXZ5GrSvZJC9gnSBvgoJFS7iNhx3JDiY9UhX9ze2meHrXSRRdX",
  "key13": "5by5GhgnJqcTMxe6o2Jzv2kpY2eEu6FqeqjAbAeTTE1N7vq69ug776T71d4WTCzs4PBSCxJSH3J8LuFK7T1Acte8",
  "key14": "29RSx2KnCBh9bBmx81EWTgXG5qU4ZiirRhCuLPjTLYH5PyDgBaEkYnbm8DRQzSAu34B5mSs6uTxJVTGcfZiUzuk2",
  "key15": "4ydR2hWYHphj68c8pKQ6LmphEmpUwwA3FQy3rB82PA71JqERzHD2K5fRfwMnt5BnWE13DDWJajbaCgzvj14LXaMQ",
  "key16": "5Z2Kz517Ck7bixQ9o5Yh3aDMdmd9pJUSnZZqhmhepNEkquxRgMssjTMqNDk3H1mF6bGXiXWsH1TfjiDGz8PdsFqf",
  "key17": "3NPYhgWn6JY8XcUugPG62yN7sGAbtyi8mpigYXjqQMeL4qu6s7cGNxuCc2YHgoQ76PVYNMTCPeUhztc97xRWqHQK",
  "key18": "qhHXVoUpQSN45XKHWVrw3MZNQie7qzz3EJowa4eJFKi8bYUBUxkkd3T7WQzGLf1fAmTB1V55AdMawSmaLao7QVJ",
  "key19": "7wfkCcg7f2mXqNEAfjRMN2EX75jL1PB5vDrnzeQYjxTRmoXTyaEhk6yeWEdGRxr9Kv8oLAqeLYXu1WGiDn9wEY7",
  "key20": "42vHbPPDgXTDjrzjV5eQWwXNTBTPnB2Ke2M4uhzKVx5zRSL4U12ZpVeRPV7TtgFUrR1S3LvCTGCGKKQan1drgEvY",
  "key21": "4VEd772gUVy8m9uiM162Q7aSgcs5TRYJCQrjyNfyqAT8YKHqxpaWEgz8aWd28XTrCunoTEmf33XkpKt1RcjFo35p",
  "key22": "3Ubij7gLBS8gvyax24YsGx9spS45Dv1ptifmVdWRhjudQr1RdM1L7oDCtWdaEVQpXVLWeeZ8hQi3v4k3pNcpP9JK",
  "key23": "29D9A8McYvP11R563Lse4K8pHCwoMQosmV7pT2bYbPiQoU8ywpNymZ1YPAh95813GDT4rMTpJftxBxLshmnah2kW",
  "key24": "3r1xgeex1CTmLudBVuWAwDRdhRf9qzcpD28NoEbvk5w7EUTewsrnBt2z6bRzb3Qh79ChscNVvd88k948APFi2R8a",
  "key25": "3WfzxzMAhxqaLUiBhfqLP3h3j8cJ7XPCGZi5aGKuSFnW6enqUp7J2aNLg8fitjcq2pyuje49wPgnsTfKT8FPijrM",
  "key26": "3hYsvGmsj48HD21ZxYMGU3DKc2ygiXsf339zWcUDEoTqDY7nsYnaNYUjvTw8472SxS3N5CN9rN9Y8HxjqtNFycvo",
  "key27": "4zFcApK8aV74TY21uy4WrrYCas5KiZkrpUgF69amrkR3MAjVnpNYkTKuaCc7FNRbJaNYEd49ZqZQAyhLbKppZw88",
  "key28": "RBoeaNqZUdFg2Nvu2f9X8ifP59J53hu9kqMc5t13BxNvBrXHk9qX5ez2yZVc49fW9YhhxHFAeU7nwwFNew4H8hB",
  "key29": "YdA3T9MkzyZuwLhSmYhwCBi9yv8cjwNDwrgthHbjTb89eK4y6VcTtg6ZDoxA45LE2Huo9EQSC9aaqZZNg7EgMBc",
  "key30": "Aa2sCVYs68bo2ZVQtoMFGoQFJJhasikbVaqKmEUGvvMEEZmy9KqmGTpEDdMamBXsxh92weMc6W3JG73QFtofLU4",
  "key31": "3aXB8GhfRDi7YB7oApLs8CazKF52BsqfKQ5jFfBycGptCrcVo8tx5v26XLoFWEWFiagcdSSMtdxuvfwqWW7ydSgn",
  "key32": "5jHPJMp9ZFXx8yQV83zC6gAqn2wN3htXAkZtpdoankTJ4r2zR1c1w4bSv9v7XuM3UYZwZAjD6eX91kaTvBexnnLa",
  "key33": "3X3n6UoExNpLErbjFsEkYAz2iV8xq1ki7uEnEFvRaE594VtdfnUCNb5krbPWvTVfiryxHUnMhCabSZb4fuZBqRGV",
  "key34": "4RXUnTQ8AHbxFEVVkLp3Vzi9ERJLNZgCYfaENweoWddG4ddk5FGLHFZxAQnwzA1iq523HzVuxWNPbpkJfbV72Jkh",
  "key35": "TmPZicfNE7pK1CX4RCzkXJYczUaePnZwq9hLtpH5G9yUWEysQ8sXT1xJQ5U2TfwYeXKxLq4EN5EjbWgunUZj6n5",
  "key36": "2VyEg2PAkKKreYiPy5obWbCJL5UdcbUTuxJq8nJvP61trZYH8AkX6sUGCm7gkx6V4DPVey1y5kaFPT6jg69BUSQx",
  "key37": "4gvTrEyAdGtbT9GvXuuKYCJfvK35fgZYQqE541J7ZPshDBfUD4mJAxQ8mPiDrdQxDGz6WCWF1SR7x7RS45Lo2zhD",
  "key38": "5LHf5FdUEkE399Dy3LjEP5BYWo1QBV7wth1w6oSJN1YzEV1xcD5H5GFurJCAQozDSUdcN7ukdmJcacVgJiSDvDBa",
  "key39": "2rtN1uZHrRVjfpgBA2nT3jWJbmCH1ptAGovWNzd3uATJKmaPkCDuf5MUSvmUD4gFe1f4euAh7ySugVMnSNzLZLz5",
  "key40": "51dw1GXbV7X2odxNKVehLCDujcesDAkdxbpdciS5Wjazp4rV6v7it4HWVdX9HQXc5iUnthvsaMsJpBdTP55tzwdU",
  "key41": "egpxFGGeohHoPXD1Y6KE1UQgx7yF1StAfHpydqdXmkTt1CvyLVW8xheUu2hwCPPnRA6zHzVoGCkyB8QqGEBhv21"
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
