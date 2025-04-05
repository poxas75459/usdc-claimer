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
    "59Lw5hzRSXeaCuE9dKHXs9uKEzxYMMMa5H5FJhbJpdzF2zReSdER2HBTWHHL9yPzhABg5DLd2kyM5NoEjJZhy5RM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2os1XUkhAMMp74BfaTDATXjib7wnhqMVQkaBqYVNEmhhueAsSwnuYjZdxsgGu6CaBR8L4ZExj5m2ZF9ksjuCu7sw",
  "key1": "4y7DCcJD5TG3BB6N93CfnXEkrvKRj4MSed9JerYxEzHHpBSkJKSRxu9GqD62JkKLpUiiQfnjgsg3rGUNurMkEooc",
  "key2": "5YBAwZf7w1XpcqAKCJexDnmmRsaGBGGPF8cYkW5oCEE4jkbe2VQxd2gihhVd1dnDGGvaGjN7oreRnUFqH7JaaBD8",
  "key3": "5y5fopE3orCnJoCK387ZvTF5XatBmfa8ySxDDq7WRz44oZBwkUJUBRcfJaiSH51i2s5TUMmZJHKmXu4U8DCJPAHY",
  "key4": "3XUMcFBt2sDpqHTHe992wKwp2AaQnhS4QuRP7jQXSHERQTVCcetMupEpi97RwAp3rgdifA1YAH29pHTTpHZeySvi",
  "key5": "36eLNeaKZsDUfqtawpj5WkaGzcRwqKxb2sYf6Lb1Jc74yRisSF6ofYUbwAU5m5VDoMXZS47g3o9J2ZEUcd7hhSws",
  "key6": "31qXwqtFXfpodzSaJdv4a7Df752nTmiRZxMsadXd14tFfwfF9Hgu4FgoWaBbwzcUbUjUx2mzEBLjmJBQXmVih1yb",
  "key7": "32iSw3aVSwkgP5nh3czKo1aSNCxLMXt1Unphi8Gp51KgZ12FsMoGLpLr4ictF3dW6dbhiMVpHZDgyMhHpXKzFQke",
  "key8": "57dME1R3r7Um64LixMxawbV6NZwxMV6F891Pna5B6HimStbNtphrpY6UhT6iDUKvHi99LvpLp8bDRuJHJzMgZTRc",
  "key9": "2DtvY6pC6LBfgPrFzuVSbLUbZubVpSkeJtfx8PRhVXxoSpDGFLtZrTfJ71Bn4Q6oVs2tkxUccsemJTb2QVk4BwZn",
  "key10": "3Akbf799TcA2om2yrzNFCio4PNUh8hudQaDeNz2H3wyQzmcbTq1L9byjuz2w7xJ7VKmEYoRqbDLjcwt3sKG7KGnY",
  "key11": "2ipYJGRH6vWYxqW4VnjyPLQMHxwmfaQjohFhQeP8EF2fbznTmF3HQxRymYkiB81oyhKnaPuoSD8H2Vsm2WaRn7iK",
  "key12": "3qAZnGgG4bvqdwDYrmQA7XWDUeuyuM8YKMifTXDF5QRpjnYZJNjY1X7zhYmmXY7PoKqo9NCm3t7Hd24wCvvrMio9",
  "key13": "USoSCWrauLTBFBhbxhHkiNQHa74mWo9nBG5jBUV6ZFuy2Z16xpANZwhpss6wu71For1zxskh2avRX2JTJ9xUSYH",
  "key14": "4YkJpXkMDm6RhrDQXokELUtwhSSjM8BPBSUbNAmVaJ6LqR6xBxnJHoSZKYriwrXyxydHBt2kRMLKMjGTtX5qAcfo",
  "key15": "4Ad1SkZNV2MGZVwd1L5W1EzJsTCEj5yKFARG1gAimznaF1uuy2guZNR62yYX4qrHrAEfFNLC4NMJb3o2UP17UKH2",
  "key16": "25PpswqNLVUEyTv4muEZCTierKqSCRq3XoupdPKpp3vj6jMddda1TLNm6x89A4qF8MW4X136NufmGq1uXtiRuJx6",
  "key17": "2EYS5vwMHVwZLRTrqgkhgPgVvaGmGtWrz4B95GmeDFbHfk6KzS8wC7FukMknuvWEB79uhw5hnTPvWJtw6b4rmCXj",
  "key18": "2thjKS2EvuEk3PxvP8P6e41AemBLj81Y8Yjhy2AoScryPoQ5xEVCVCU8CcuVQF4pWVJnZxZmXFL8VgR8Zf8jdJiA",
  "key19": "2JqosZHXFuqBdn7zRPJS8XdqzuSbCSwL86S2FuyzHpdNjd2a8hpm9Zi2bT9GDiNsnvSGMfbq2pu3iGLN7WgGkBRm",
  "key20": "TVADaiRBpGdAtWKXg2Sk5wZurRk3Hm4Mx4QC5wGqszDtAbcCjRwPxyJezJTJCpYqRQ3NTCdb7eKFfZHqzCWU4aX",
  "key21": "48zEi4ad24DBvumEbxGQsQh6HjJGDXC7kw5YThqUU8sSdYmPUgUCUVH3gU5vqA5X1t3HMq6u3srvrcsyjwhHDGiF",
  "key22": "2PLgVSXrKJbBYJcAFqhR4mQuE8biQ8fGLJvBtfvDY4aCeFakoEeon3UP5Qk4RhaiMgZXiDydFpXokWQko5GjDsdD",
  "key23": "43Awtqwd4mJTKXBTQbExyHJww1xPgMMLm8iWZ7od8yxutHRTD82BzytDCJCTem2azJHYSDFNK36qYDqL4NEBoxro",
  "key24": "2pzUXkoKtXjP3qfAJVNdjB6QczGRdSgETG61h6syCUX8Gp95w9hf6riove8EQnzAiytncpX4RMrTAcRmyyYqpmMs",
  "key25": "5saW446qHmVMFruRiKzYD4wsX77xwN9dTMB3m5r1RUCjp2F8oU4391ZY7TZESEkjX5AcQ3BVXh1fbdAVhANvaCMW",
  "key26": "AmhueEPJMLZ4cfjr6h4cbVFxNeU3x5P4kVV9wJQf2HcG3XjtdEQuP62wt5dsfsJmBGFfcz2NpKhahCzCV1VYAZU",
  "key27": "5iBPS9wZp4ddRGtQk4DRQNNiv6C8VKMM5vB85CEzUV12AkbGWVF512mxX4fniCobZet5tik87ge1sKyqofpsRUsD",
  "key28": "yeLSBK2QvxDYXhpcKKPeLYutzScehqahwTfSTDYgn3GV9c7jj2DhUT5jwEoRm355GhFozfSLWmYmVMbomXNHZ2n",
  "key29": "2Lwh97RZTGN6Du2jWcosGanY8e7XKmzi36WRRqAAF6K9fNdx1CusJrVMWcvRg7Z6aYqd699t5iMW6pNk25T98rp",
  "key30": "4LY7gdxJuMD35YkNaxQaU9v2yaVX6QvMuX3n5SJbSwDJpK5ZSwJBpP2761Q2zU1ZYtskBEJob1HrPaFavfCqbM1h",
  "key31": "2mskKRJ9dAGXjqaxdSuiPWYinKBhhrBkw7yxk2QvA84PivLfKdPY8oWywYQLRsuWGwDjRpTrE2AK7SZvWHMtr3xz",
  "key32": "4pSgRsYVUZNj2dNqaMtcz5aX6RzMiWk4KzfVyvFyBd2NPfLw9DvjFWFzVcP7FupR4zNzzxBmpNaRcG7D9hCYKL8Q",
  "key33": "3nSxJNRSgHX575hyjM8BNhRCL39QFpgZCiM4Zbtrrfy4SR4bCXhaCFESYNoCU3cdwod2LfhYm7m1cwtb5YWqByrD",
  "key34": "UdNjsVhzgddmfikcGaKFC8q5qMs6qtBBDD7kKKtdGv1KAR8x6vnEsj7N8v6h8EtLmL8J5aw6HHkeAVazSX29JpL",
  "key35": "2o4zwocC7rR6691ibMKoqk1iJpYn24QQW7TkPq3ZDEGetYt4wRa3Xj7PDt6JqY19AAC1DSKzJzd5Xnd6nJ1EG79K",
  "key36": "2uKwYhfjcePobeAi5fFCbTMqq3fwNE3Dbr8LbTBqbeRm6dW6m1BZ15MbUpLgpuKaWevDbXYydDjps45z9pTEuYZv",
  "key37": "3ntwit51ZXy2JJ9DHChziZnFsVZNkzXGH79qahW9xeX5keNYXrAb8G7wiGpRG1DBRZmjLXEMxGHkssnDKCD91VBi",
  "key38": "WoGCdf22P5u7crrnCHiqWHfMKaNLAjPL25jJQyCSLi9gT5XBv37hSp1NBTrciLQLfGqqQVCU37XouLTAqAe7V6f",
  "key39": "1HLoBy3DDhLtWERTrLgQQdMhU1odnsXTqTXioGYxE7XhAHfHwoiMeLTQ3fKTcsdvBfxnyCAF6ikBbYox5QT3WEk",
  "key40": "5n2FURqmHEWkYXDfmYKQqr5k6BjGexZbs6ZmgKsSx6UD6MFnezmBvDPJJWCwaf6JBMEwgXywBDPHk1BUrV8pkdiK",
  "key41": "inYLqDoKC4pcRXy2g4mgcASgxcSTNxThAGsEfbJzobft3bvBKx28spCkH1Eo9Zx6GhmRbDYsBTnPbWHamoErHW8",
  "key42": "tLLcah8rEM1kymriaBPFrSs15gJr9oeJNBu6ypeMSREgP6vZyUr26fVksVged48DZm175wvAnVbKbjR5RvbN2s2",
  "key43": "5zRNoiN4BPsY4dspCSP6RSKDec2HXkKwvttQqYeW9GeLisuVC5VfL9vS2fR57nRUUbChKUfXAsfxTFTVgjuzq5kj",
  "key44": "4bQCvqJoDW3WKghZhEQfcmKqXf2w7CPfvTUdVXiifdLrVuPP5NrnKpy2pQwdXe7CoHY54bYwDiwzQ8agVTm55jTg",
  "key45": "4inCy88qXnsJMTNmwzmtkcMSnBqst2SSkSg22BdnSVVVJF1CXJf6Hf96TFLbuXTVbPvXD6rHBvLmwHoFVEVA3N2f",
  "key46": "K4G3jVzEvHogobWNjGrAjP8xkHaiHBgr9dj5xFDmaqB17wjSPJeqPQf3nChiskkjfkLwyWimgzVF9Lx59xWDrNo",
  "key47": "48RgscAXvqPsgAU7kpF2AhjdTrg1KAo5dmuQowWNtwGsMc87vKURMXn57jizBQVYsY2kZi4RgwwP9CG9z2enp4WE",
  "key48": "4pPrGzoNHQCWEX3sfCzmGise1EFWuYPhzs6TSv7CUbFNxQ1B5WBj1xrg5AGorACBMiQ1vMcf5ok3NDMW9nhTdBta"
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
