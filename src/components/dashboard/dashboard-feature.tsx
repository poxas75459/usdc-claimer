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
    "4ob62nZCgve24Ffj4q37i2xwuaboCgopegJr7KXA1xswzcFW3GrST15wU66Vt7ogywZiEvFSJfqqubNXwBBu9XsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yShuYQpUAsvfEBgaCbyvn5J1bKBS7wNTj6sYGg84bBqpxZSpoQe5Beqeg6pJGXBxwWnKrREiqveBKE9zP2t9j6F",
  "key1": "5erzUy8XWKSpb9b6Y19HU6fGf7t5xPQ8wxk2QhudzXTsi5ATenwBZykJxh1L1rx7NmfiB8E6kgg9ivrzN9XTmsVB",
  "key2": "2kXhtM3b8V9pwMdmwNkUoBVT99Vg1xMVtWiJrPrm9kXRrGdHPmUQ8aqNiyf8QvdXH55CJJYbfnj9X4TyEfu8jWiu",
  "key3": "5MKRc3d6CwfTfK8j1dE6M7dm21ta3Je5ejAxmn8iWctJrBPTLpZLCsES8c9bRb3sYsW9n8X7gjfrjkYC9TpqTYyY",
  "key4": "4uVcsJMvGGLAs3ifAgnEnJyQrTrMt2VRDTtkd65B3NoGtA6MU3BJJDT65n1vkgBS2KVJ442VmKA9vVDSV1fBrXCP",
  "key5": "3mu1Te4Z1kHwXHFRMhQVWsWgLxp3GW7NL1uVRcdnYthCBMj7x1GQXebbH3eia8Bed9JG8npc2JJLF7J55qXPBcQn",
  "key6": "MsKZzawmDSKG3GyDUwy5jvwtmRm18t2mBSEdxd9uK1r4ZyVyqcGg1c5wGBiNddRkfT2EHePiQACF8CLxRfxmAJD",
  "key7": "37g9HkEYjfm247vNrPovsujRn2d83Uz8CTWKLbf8Jy5xYJAi4NyPpZ6modsSW9i7Tve5R2L8WHgXmEqFsXM746wA",
  "key8": "422mCPFhqFTi2iZGTQgCFRFfZhe93T28FLGEdvAmR6MTRNSCvyYhKT3sCgyUNV75NrYof7ZJNAPXXVHXUtPntDXg",
  "key9": "3m5WEJ5CUwBWTE1attLRYgyBkoVKtCCBcmWfdYqKFTQ6hx1Q4ZBDSkxefa73qALTVxfJ9m93fzf2Mpfz2yy1s1A8",
  "key10": "3JuiZ1SEidfth9w9HrZANFfBWANuGDoS9kbRC1mXj4zu4eEhRMySUkERuUrw5oYN4xPRqH43dc3bELXUiTJ1t3Bu",
  "key11": "5oja4EuU6FbKmRFWKypBgaMKwGwEZMkrgFWmuWwUorQUqERV6m77SXM9gCQdddqsRHQRRVxQVaUUP1TWp1h2yWwC",
  "key12": "58yo9V6YDY7t7tTEX94KAMz3fjz3UBLVZp2Xsghs5sR6KW59p1zryB2r3QLckDT3y9QXcKpKBQpY8r7bqyhs28BH",
  "key13": "31DEKPpwgbQGwCAKxhpKkPohd3L9xVWyWM6aEqevbrvWN1TdaeUSoZZ5TqbhNJuRmbkWcCqvBor74wqwUwys883M",
  "key14": "3f1c5vvM2G5uYNmXk798z3MBTdmVaVt9kizv51mBRsxaHcSmwTyfbUwNUsLEq5NbKzLEGSm4xPJFYLjmStu84rPN",
  "key15": "5XEtVnM7P3zrXusB84MwFpYjzbBjBTMUhz1x6p1kRvQMSUKvsgzF93TdPNbaZ6baSg21mB2nJJoS3swU5mGo6WEe",
  "key16": "2J4Qqsu5gGzkyL5MxcBYj43EttctGhVvqVsFEdsHfSskCSAa8SE2LvCAmfkiPrV44bZncCi2FWbBqEjA4mjyUEHd",
  "key17": "QDdsZB9Hp8x9FVZ45WwRKApSiH9uGwoKP1U378Qbg28E7RqoFJHAJgaUfNCG2C16QVLgeXFYc57WEyRxNJoNJ2n",
  "key18": "dLZ7bxDSxqc8XWFyvVQv8fAsjTJaLTaracbXaPguU2a2TMPVWSXv7VLM1sxiTysRk17JBQ23teCxi1QcxZhSHuw",
  "key19": "46RRQZ1p9V8nsk9y1AogsYr1yXxt7JGc2qnB4Hy8RDeLyR6WUUrFHoi7YHe2njphF7NRG3s34ZDtKWdbywJuTM68",
  "key20": "4Xx1RL8sy2XvM8McUaXkNfbjM2eohP7vozoeJCCRVcmCZ54KzRF4ijE87Bhk4rCy3tCa6b88YARVNxSaj6ahktK9",
  "key21": "2dapEcQsEJj1m9mURbmUKu2FA9xn9tWLaT91WiGLtddJxoyiUSYLqZpGhJodyPT2KY5MVSPYCSvHxpQX4da4HSrE",
  "key22": "25A6jHBLjs2AfYVP2D77LV51VnGDj4hmFvNawbsfUacHFKZoqC6hsNVvtZThhzBmXbevnT1Vtuw4crp8DXK4iQBE",
  "key23": "h63CPvBm3Z3QxgCgnQaLP4SUuVCp7kj225XtvHxS2SA5heLvusp2i5dbZQxsBvbUSeGAa31Jb2XwWgdn7gYkgSj",
  "key24": "3d4pusepZP4JwuFxPjpGFJZErJ9HSMtuKTTkzBgbL75ajPm7ciWtFjEnqPknmypiRmXywBUREceRHSXRtp6NoUv",
  "key25": "2TgHdas2L3WEyY4xrYAYu9rEjY7n27LniURahuBqKYCXyCWZHLzt7szcnKLzwSxdo73Er3wZWmc3cgrbkm2FrHZJ",
  "key26": "2h2GLSim2cAXuFpJHaYRisd8ikYCM6xdDXSAUYdMGydCpu892iHfzBsRZRoFj9aaxqZDQ9vUkXQeqwYe9tVosjWf",
  "key27": "2G7VH3QKKbdWrWDzWQFtDo9X6r6NR7ePe4RkMEGrJy7aUPMqmtrYbc57id2X5sys6UzqP4QoCpRaBGreUCeJiM6g",
  "key28": "4FSYhjv1a6cMHmBMQnZXPp8uUkerZhAGVmMJbzZd1mRyQWYfCoEPhQCNXNig9YRPJskfASpAz8951ZJ5MzZtnuxe",
  "key29": "5KjfVV6mpyzFfWRhPQADyfK2x8EWfGp4iagbTifuonJYtYiNobwy5bj3i1XvUw3ykgSYNhwGukSGMQrSXXpH4WWc",
  "key30": "faeKK3DyWgzth1g828bHgAKWJthDCzAch2wgA68uALT3U6Vwt45mF5nMFJ9aZX9W9NQ9EiFuHSVLmwXh86CB1Mh",
  "key31": "2bZUxurvRRrbuj2EpABWRu88EnSfVz3FJxsw37doXN76jSoYFo74rJMY4aQrWs2PEPNo5hgztTZ5s1pM2RGf8bRM",
  "key32": "5o3gZh726jCnTp647cCePq4LkZpjfCPdvffmanjtBEsnose9NSWFt9Av45ENTWR8zpB93zjFFU3fUbqm8VbrQhxB",
  "key33": "2ipJ4jmhC8TSzTQUd2FdJFFuhaesHagFVm8ms1szAQ39m5xwG95kE76cwXfbS9afLLn2Zj493GAPTAefhcJeqxNW",
  "key34": "iUgYPCQCfNjxpJMcMwxHPbkwF66vxZB5zmTwu9q3s1FZHsk3AXDzVxoeCt8nGRmc1rdNRXU54SPaTaqMzqtLquo",
  "key35": "5DtFFQuKGRDpyuu6vCzdTeJg4V6xac9EgAU6GxFP8czP5kz2iUsoCa5oSxaMjAtq9gH3y5UNChfGkDDptsK5WKYM",
  "key36": "319fiUr4cYLwaUtymbZDJpT6rDF4QJS7uZtf5xmdS86LR21ivSAEbH1Mp5frusKuSAqaeWAdb4YMxKtAgKW8D7pJ",
  "key37": "2Sp6dcHUQRWN7WfYRscra35H7HT7nXSnnBXR3PgzwxMbiDe1k8MG28HU2wG43CnuXQ78XdwfL52jfhZDDJhBzKH4",
  "key38": "4TdFBdenS7D78gB2iQDmCEpSq6QDrAcW6Fn4zCWFncJroJozGXpVehtL6GppDUvhC52ryKTXbHbY7oQoaHgXatHw",
  "key39": "51YLChyiWp1tRE4PSnxPpapUJVp3d2myR1yGzqdWbXCRYbbEkakL47CVuuMLHQemnmecmJFMECANtBoqPmD66Cnb",
  "key40": "2XTvpVspnWx9Kz97sGD9mHKrAfKzFVs3718UjQUH6BrSFjDdLoWcWGMsxpG3cAj7EmrzRiRgqNtc1foZ5vjnZSh4",
  "key41": "38fae4BiEKGFcpAN8JWAWBdfdL1kvP2PicGN5QTTv1D56BLZdkuRp4ZqiPK2u1DrBoNFgqyPZMx64YCLdoFWM1YQ",
  "key42": "51bFxHujuc9visWN7yD8cAByerPKMoAuE1KtrtGyXw1wsfNFRPY6tWhNAsj39bsnSyNR7Mb3NyaFn6P1DJWKYBkq",
  "key43": "5g2akhG8YL2oArbcGX3atqSMdSjMk11APFCbuCNW6uk9Ba9aEfKAHTUtoqW2D5DLX58RygHLDJjz8EnusQnKQP78",
  "key44": "3dMq3m7g4i2Bc44UrMmQPgdq7fLfquVcBjesPeoc76tFsmEoCAPGcGm1opQtzBAy7JT5UuhAfMcumTJA9K3FA7f",
  "key45": "WaHg8DZA4eL7p6pKy6SgrBaTWDSXTu5cHF6yjuLEqHvZg7RpDtM2mycaDpwQbduTspiqmXrTrJo7bsLFLYoGf9X",
  "key46": "3XR18rEHYrvHrcJYXwXdZMXgCURZeH4d5QRV7pK3zy4s6GyeYC317kHyTUXNBysMStucZyyZJPSubn8ZMd7jCQsK",
  "key47": "61Adr1jqQjKwjXpDg595oDQVRuB6BBB8VZTA6aghnJJqSjuCQZ1GJ4R9Rw5pQfpVREpMpEQpVPvpadvoJyAsBdtY",
  "key48": "55HMRarxkPVpzJPAxwXVPz99TboDAvyCwzCYhAPxEfpmhR8YaCjHrKt8jtJgiMpCAWJ4KS11e7AwRwMP6HMtr18P"
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
