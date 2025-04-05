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
    "43DvVtKLCTtSn5M94Um1WXZpEmBdXt34RhqfH83qYz1BKWM8ey1GSeE4WyKbdDpGPvRiTf2LmZo2xqHmsDC3PV6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imM1UYrW375ygh8uqPLSmYvoz14sTkgtkqxNyJWVMAc4C21rNFiwH7yePJiwYn5vqDQi6A84TYjV8QsWL1i3PEJ",
  "key1": "73hQtxE5crKR3Jh2D57YLSLCkkRkBAZCajSGZ4vCrdhEmL6cPdrrMBrkZFQomvKnNn3ERiXdeeBaXB6wr7fLqq4",
  "key2": "pKS3nWnkPxHAzYuYD2vm1dvsvbKfGkRQyTKu7nUKRinoa3qHdLS8riY3ohw4AtEoTk473e58yX9fuQLqcu3A84S",
  "key3": "5zM1DHvk1vdrzs4xnoWAvNPJmMVdbYKAdxwQ12JjQ88U3wFKwaw4Qov4BYQMa864fXYwRi1LgMAMSLqCgX4x3zP8",
  "key4": "5Eb26kQP9rJ85Qpt2pXczxy4eWFcGhVrmEZMWFj8X5WVaq6houLNyAorRfw3hTLZP9Dpg5T1sRfsEWf7oQooGnZ2",
  "key5": "5ttg8upqKNa2hnT7yY3rkecceJDy5VVPXfHYomABDsjQ3bYzhoJe3mQrmvNr2oDqJv7tjdsxXiGECeTCZCRVHAc5",
  "key6": "7pRt1MNEPAgZybEGrnw59f836GB9YZGVUBDsArSMwYNTEPFLPFWZg2NRK2XmRUXkquq4gjBKv4J8aXxwo6Y3zfX",
  "key7": "4X7TqTxkKWKjvaKpqMudVVxoHsUtzdnjpeHT24mxk6jeVkudnKMzcWokT6dejV6w1CSc3q1e66W8eid43sYoqH9g",
  "key8": "4zRRWkXbSuUJ5Enok8TqxsLe5TjSCMxmmGPapqx7kd4DNdvmHM2kskF69Cez4LZwgxSqPMH8wuwrDmYrU231NnB5",
  "key9": "49YE6xBqgtgtdn18jx3LhmW9pqxbaM63QY62NwhZqVKwDc4Z9CcP7gTtfxEdVyWDtsJcunqJQeBENXjKt7bZyN9p",
  "key10": "4fAWtmGuEymDbzeVUMVw13XBvEQZwv7DUNG3bn4SVCCDSh2m8tLNDnioXA3XpZa4QdJd7zL16upSie8hHNDdrPQH",
  "key11": "W8j88vAAEgqoTAdgNfTfjpSZmhyeQD16KAhJ39kvVLnFt8eEkC4tRsuzYbDec4ruaE7xtxSo42s13eByZdE9ecB",
  "key12": "5nNNFTRTrQitwNnnN2yTHRpFupXVF9zivHPvjsxG2etHHVbRk7oAG7TiKinvEDBR6jHuBz1aCLGWM2TabXQ5Z4AG",
  "key13": "3xV2NVggPKfmLR24vbze72Zk7rxQQqvs161eZQMrdoV7UmUaXteCvby7iVUpJz7Ghznc3jxz73hodZfCt5EapLBY",
  "key14": "3S7LE7UcaZnbwF59GoNG1X62es7qCn4VjVQ8eJLrSnzFvF9cUz8XWTtdoJPmYBYh38r1we4BDdB5ET7B1CCzouN6",
  "key15": "5gw9k2FXj3YHBc61RAdrmiQRueoKWYi8YoyrQPRE2PwWLGaRe8ziSkV9psFb5dDKeF2HerRCVxTKmWESL8kfhXUE",
  "key16": "2WzND2FTMDoYg53uaXb8ZGyhYh5tAWdjS7wYV3WmNZ9MDmtEA6ZMEyb2HoWvwK6XQf6BjMfCE55iUMybVuJ4QBUf",
  "key17": "LwwqqqHs4oV9YL2BmZ4jo2sxhvcfgT5XEzRpKZLffKwTnw6ZRKgYPAbYdqq57a98EX56Bt5vDKsC4Zzz2fnBQWF",
  "key18": "4wYZDPaPKwF5qTvxBmidsS8QRD5ci6KjbWaeUHm9pachuVqtAW5yuQGPZ2Ve7BZ6iyb3HP3z4wivQPWH7A9Je4JP",
  "key19": "5tyQHx4cJBgmh8dxQtPPG7qPoa8QWjZ63W8wkdUPik2maaXmN4Y4frtdqgcKMpWWsc2oNj2QYRBPBbT3fXPHxyEH",
  "key20": "59YgrQGxHe2taEXjjwX8MfvwvURpuAJu54nhWfFRxxSdLwDZEvytss7iCAfVCt4v1oZNs3DVZeLnGpysR8z8C881",
  "key21": "4A5f6Dp9ZWCvVr3oVxzWrHtK547sXwsiV5hzsWgVmt8mW2p6kTDKmbSUKvFu2jBda336vpofZihpBB1XmMYGLGGJ",
  "key22": "2eohFBrcN4SvYQvxUHztTYQ2ZFPxPY9NAoFSwZ2fAaN4t6dJEjmPctrxGBdiRQwVajmxYvCxEE9V6gjE9dpofbtk",
  "key23": "3CdnNA4ssZVCXnR9gnjrx2L1fP9qKdHwHUAMd8VfbuJVEyurRmj2YUkfTbRvqXzqzGTCsj95sWMyyphyEBR1AZbc",
  "key24": "4UfuMorVo2GkxNrDN34ya5eahm5xsK2FZLi8ymgrEU287BqrC1SvNgDNLNakjdzEr5BVS8bi8HcVs96Q5e4SFoVw",
  "key25": "4eDHmvRFgF81Nkr8ArvqAQoV5oxQtqtcTbR7fPyqkzXFh4h4bNWnN9S8dDKxPGbQuwpPPMXXym4jKBYVFEHNBQg1",
  "key26": "4juUp1zj8HMktxjeg8yBR9hySeymVQQQqYS7S2H42Ks3GPt9XNYCaNjitXYcwvjVc93Rk2E4yQeAxPYY5GvGTzWo",
  "key27": "2xdb5NkDW4cWzfpk3ed3C2bgwUvGLkWZaaSpatY75ei7YgQo4L7SYVqcD4pF6dd7RuRMNfqsFqf1GMSk8EMM5sho",
  "key28": "2bimQPBgudMSKFCV4fxbmhUPBnU2hU6ncEWTPAQm9wFZsXxRGCaKVNjSi2CmCsbyWmzj8VXvoUhFzs2w4EXt3Wg2",
  "key29": "tAXWbGgxU2GKQM5Zs7sXKb4qWrdbtjdG39T54eiD1nRBKeWUuuptenNyVTWVJsDsnj4UniWzjbmhiW8PbmiiB2S",
  "key30": "2gMceBgU1uKBhSmqjhmFwZuzmy4SNzELfT5UH9QJoxH1ELKVi4Cb489mcHToG6WB8rrC1WyzLP1khYKLNK3bfcoG",
  "key31": "Sd1ticTf9t3kaM1zacCx8CqRwARRb853KZc1MHGwCaxwKqZU8bKiP3V1NRCwXVrH5mWy4aBGR3d5ZLh284QhrCB",
  "key32": "5HwkauhWkKRmoCBefvs5SQB1PV6aM7WYt1p2KAW6d4AYLi89cvUd8YTzEqZ6cD1tXrjhVZiUxsCRmy9bsjsc6mWv",
  "key33": "3w9aGcWnRv5AgwJVyhN366wg7Dk1rNV5JheJKHdz9WCY3zg82VRDzd5hy87RjBRG6Vqm5e8gbJVumtdWshgTUTHU",
  "key34": "4RThYz3fxK5TadS1H4gcAi3QqsRdM65xqqSQhCoSPsjfdJwAUTdfkdLVLRW4gsxaqYDXHf58YQRsV5HneQuVb5Md",
  "key35": "2DrEXMUrTmG5YH86SvrMV7PTRgi2WGhPqnVrWkSuUNNFaE4AhkNQLz8yQMZ693GdyFC5dYNfS6vGTGw6tC4FxpF2",
  "key36": "2w6UoiW792RLuB9JWJ4vweUw6m44MomUvQCmZU87JQczfdhAMf6Z8PHu746o5xc1VNZQ6gYyG1VyeiSg4jcs4TZU",
  "key37": "2cxmSs1DY77mm9ttjLfSAGiPHyuhowCSmKHhqfAXphs5yCtTKHEamMbVdLAVXceZgXz5uhLYQKxQweAWfn5DvC2p",
  "key38": "5YBh3ea3QKmWyjfhV56QVv7DDDVCMNNqzbkMmgPZFTdAdVV89utPLZcovnXPRJMZ16VxU36k6mqzhd6Jv8xyKRc5",
  "key39": "4bCsEwyY6mW9YgtCZN76G1JXqvp123HN86wYENVCLcbnmcwHMAuAzyDpKrFeQMmhRTckGSff4VLAAwSHzf6YWwvo",
  "key40": "pABNEnyaTSxMKrmKDmYnCE1neenL1AiHx7w5FaRThx3cicDzVxMJ3GDe17vi88d4QLUMei4yTE85zKidf9V6Yg7",
  "key41": "8TRD38axDbDL6XqhdKbdBthExtGo9Udwn9cZmL49kwx2twkub14Kv3y96PYkG5q6brx942sNbHhdT7qqRR94UxW",
  "key42": "27FGnDdCeRevCP6ceeRrczzZrRAVfWfdkvkAcesAjw3WVDMcjZPYo4YNRFdidEXEK6drbP6hAkk7xD7JBJcKv4Xb",
  "key43": "5CYQ98AXbgrpUpKyBmEAyJT3Jewi4n9k7Vdcrkz6PtLMi39RiUcRLFPiqiPssbfonyHVH8Kh9TDp5CjcxV2xruf1",
  "key44": "31jprkRwefWJ6J52KzvfgCWu3nGnW4T9bLjSEPi19XWn6rpRDUGZXnq8ti7HSWg7reCLB8NjYjRH4LC4QzxFZGvy",
  "key45": "47Fm7McSRWjFBBr1jTAhxe13g8V43bLY9kB47ukVKxJwQJQE5JUYtSCAeKyxmhC57qQN7RQAURG1QGkqA5Y86BRS",
  "key46": "5oyNSBKCDmz9UohfKL8FCY77SQYbpGbUzUqR3UKWkaL4uZGj5vgqfJuWDdKR286Udob2zuW8VSPSRBHoDfZKnSSQ",
  "key47": "5PvCEUPoaWZyfVxEaGowMnDp5BEBLe5hg2mULXJo7Q8pTiuXbP3ch1QJB6wha3ZEuYEJBHa5QRCVcbVgQE2wCS1o"
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
