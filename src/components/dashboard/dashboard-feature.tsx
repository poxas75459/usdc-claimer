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
    "2aB7rPePBg3aJnCFq6SbV1LRmVdRXTyMrgQ3RHjncAPABAPaiVo8qJJcs25k5yCADaxWLyYsdUwbvnRfBdXckusq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMTqUSQRxzqeB3HVTPhDHWeT6oXXwLAvoq88chkA6khr9rB3xraftiuo4NSfn2xgZJCgviy8rMHwwHvdgqSXtCD",
  "key1": "54G2dbVKW6h342cpAL1Qa9MgAPDBtL2b5FQ7BBywweDoVizWFdLP9SoH2rWFe4vyAKQAzggMm1AHEK5L5x4HozfX",
  "key2": "4Pfh2uK8jBLny3NJjvwb2zxBr6EeY8hC6oKjEUqHaHoH6ZsMHXyT93AnsJTJ78bqtG88jTHHkXGAg9thiBtjKNa6",
  "key3": "4Se4zxVojJ4MMa9BR4SFPwZFVBgw9PtQFLgDEahC3c3Pv9CJmXG3UHABcNkvSWohzV7zV6jxV67mfAkWLbcBu9gZ",
  "key4": "27xRPzYtgWgihPYMgaFaMJFw3huvVTSrqccWDZWpAAdiszYKapFc9kA4Yy5jS6ydDHzRosACCTCuA2cUvbacFZgs",
  "key5": "4QgFX2cFT8rZr7BW6ukpjdJdYfoy3VtUZnR8iokGakYWYuW8bNpwdEueGhByjwtrAiJkLGvTeRv5W72h2qCURY6S",
  "key6": "2YbuRqUpqBkFzHpWwy474gsTdkbgBCzooVgz2yYxxVvtkJFaTYpcW8SMxijy7NPrAW56EkjWSSbuQdUXBNHadf76",
  "key7": "bdnNADWSkFkb29y6ZyKCRKoJSpKdnsuFfhKUkujy85oe4gV58BW6hKgXHKQp65DJsPCUJKM45pGhG7zLm9gCpE9",
  "key8": "4YBs2Xs4qhdXyzTBBYE9iGAUHtiF43x58z888r6jTdnLKDkyFeisbyqrq4KNXKea9LJzTQaYm97YfkAaGUBcCmZS",
  "key9": "2fPio54ZQnjoXQm3H4TFUbEkkBeXkBCtufeUjTyXmdJY3HNHvtWpmiFZ4DTgVrKR7ohnCzuNWb1o514y9BuLAQcv",
  "key10": "2152kaRNmA5A6yPsBb9aa6Yp3iDXo9L2mLy913CDwhKRXHzBFPd2ESFchQzXjt2AjDMKhXj3QQ5Fk2rKe6spVsAV",
  "key11": "2KhDqGWLMmb1R8MZfes1KkyvZYLqocv9uMnUAXALk1hfgJgsVJnAymLVHQb84wnvMNnPVDggRzp8pnnrgdZZ3tv6",
  "key12": "6DfGYWs1vFe4vucMWUP2Lj2ho5KPU3eEs2q6uZjqkgAwQezpgUi8JWoSC7MCtD99J97PNa2E8BQXUrGLFXoydZx",
  "key13": "2SQ5aTzwmWsGy2CEeqvi2fjxNCMqbH87Ehfeo1mMpwsGobZfRsnGe6vftvUnS7zPxWwZdKeYMXATxpqsQdUoQJyK",
  "key14": "5fTSFXtS87aacvZeNPiKhj84GdYo6CMFGSbvN5X4FotCLEjLvY57GLnsz3eAQTHFzZdBxr7ckbCd2XPaGTYScbBC",
  "key15": "582earw7qpJcBk8nTUy2BmEJWH3Dms6cPBiMoAefM2xCJPT7UMJQ4xuneaVU9YsjtUQtj8WdJxBD7vEotoBXpKUe",
  "key16": "4GZmQKaRAcbpRGsaACaUgzZtpmUQn7x6wjy8L7TiDtGsknyRRApLE1RjYCL1B4znbhTBBXwdEV2382sAyVVZq6K",
  "key17": "4p7zEaMtKNBxCsNcRZ9dBTMY7ZmX3ZMpQQSops8Hc7Eh7vQjRp4UFbiW41vy2w5bmJza3iapFyARcFj7gZQKkBeN",
  "key18": "3CVucCrEpqpdRkbmri8Lv1s944iPidvDoQSDMbDmpp5kiGVxPB1rinopkvRrmDg5TmnrJgxKLeYtdAr1sMdHaNvS",
  "key19": "3NQkZeXfLyvgxkwdBppyZccDArtb49teNhPCigT4VNtTzXmhd9YerEK5NmHGg9NLiqvCb1hKndqDut5Yef8sfPCw",
  "key20": "3pSvu66JB4E9h3WBSfbpdAQS8dAD2cmK7gWatqfNewWkb9tjQz99khGjySa6TWrX9DLxWVsNWish2jiG86xn8QbT",
  "key21": "4XykrQwGxggzFUmLuKVnzqyCCNcLmPHMnSVXKvKnEEwicxJ96NSJ1igtZ1ybmdgfafyGu59VEooHefURRcEam4xZ",
  "key22": "5AFpe54qt9Si72MBXXKwmNnMKkcvfGq9HftWeiXjmQdV2iLPB5gy46GoYfEcunZxfucxTRuTbnc2zqGGDtuMXwim",
  "key23": "aEMRZ29fjMan1citqNFFsbrhEg5Y3F9v4vPpnhth4iydxX4bz7A4cd3cnruHCyASjz1cV23EEEDFcyRN2MCJY1R",
  "key24": "65tJ7h3x35csh5Mn5F6KLhoSFmmhmXzs86J6vWmyLLaeMCuojZTwR8D81Lw7ubtrrxt8V2uUimY62FMpmTAZBaco",
  "key25": "336YWhtbcPhtiaM4keorSMAtm1kLJB51ZpHJ5H9N4zQHVRi7ForGNhP6M9VbAufZNsdQ77X2ZMtydcBrB6gZJuw4",
  "key26": "5WSHuocWSTm91wu84oF9vuPSq5av8isQDzmiKzxBXo1iH6JHAKqg7ZoZLTkHKxn1AXs5XeparBauvwXS2YBE145L",
  "key27": "4H3kYjw3kARMHCBps6dvfuQNUAmG5EyVJ5cFGQXNasepLDCzwiFLTVF41Lk1JraLd6PJv2PMzYxByR9VhiK6u88K",
  "key28": "5DTEaTV57Zntzn4sZWqZbBWtakw73XGZVhBkeZxqg5ESNhcACDAJN6LLxadS1KViY9jFADif5DfKBggbdC8ixEXy",
  "key29": "5ot1jb5Y9MAJMJgUcb2ojcbLfPHRVGuFkDo8RiR5Wa7vkKM5xtJiSwfh8HEiUarASTLqsQbZmCxNkvAbVLdTTquP",
  "key30": "35XKZXfXvjTt2rsb2wct2fJVXtizuVL5a1BymSKzs8Zkv3CgWP4VymYyhTYz4WLUYrBYTcTAaYSZ12gyNTgeu2aB",
  "key31": "4F37NP63j7A9qfJpruQM55SozjSnXothfmYqoR7dJXcCS8Uvjr8fTqBvnVBCErMyR9qWXRcembfMAZMboGqPdv4g",
  "key32": "GKBpEWiC23aGiYckcGhuiG15CkNj9McieXYprrfagBmDzrGhbwRrBEjYYXmxFMXR7GnRGYsgaaGxKBGiNLDCP8J",
  "key33": "2gmvb4DmkMj5BRvTTr3V1Ayf2L2vYkQemqEpbpgbALFk9Hu2ekfWH4Q4QFtAMVV31dJ13LEhfGAGarCCcBHnSXTs",
  "key34": "vX8deX7K5tWL74zv81bMsPpCGTZtFxLPfhWXMqXLeSZrgXU67BJUJX5KoVayk4XYgAK99f2ofDok7Ps3PewM7qw",
  "key35": "55jh8Srv26Nv7HWSTLpuEKQg8KxCh3phc3acNjtjBAfQwAGmy4HTWQooBrMkCQNDPFdtYXV6HvDwDiGq9d5GtSVw",
  "key36": "54Zp7EV69f8sH4YgJZuEddzZAWjoC4WmDgfWPLrxgdx9Ax6vXv9c4GPfg4Xs92iwvRCA7xnv2Bm5yPQwDX2Komdw",
  "key37": "581H4yS5WzyqrFyCfmH23qXWUtGe4wEHHGVtxgx7MvZ3rXNXyxAZcs3oU8ttGiVxZgMciNEwuNQPj6RV3BEmqXc3",
  "key38": "2kBAS9qAZqfKaUxNSKghrjTCwB3p2xcSDaJEWE8wYu3LiejgGA1qyigA2hehTgbE2wBpDT4EEZj228cbnXhmgnd7",
  "key39": "5jETnr1oH23KFNuhKgpa7zDzj8R6LWmVT9CpeWqmW3LuR5CnoL7pZzAmtjddQHM9CF6yvupxWZemNFb7WwKEyn34",
  "key40": "wsjkxSpvTULRwTiFykQUzNCLTBnFK2erux5qnqGEE9RoFf5mVRt6BksMDxxXjCFrVZsyp7znBCpNTyGj4rgcQxf",
  "key41": "25Yj91zyi5L7hHpyCqdqLsi1La2eX3y9eoaSrQujFobgxB6htFhiL1JZk9VLEpBfpdc5akyg3kExeQnGVvxUPLC5",
  "key42": "zWze3ew1LCJyHq8sfgJMwnQSSzjprhVdE9yUBKv45oA3Cmm48BNdMPTtuSMAu918qGW2SgsxcSR3Ch7Yyw3n1Pd",
  "key43": "3LgBsyxVm6CeZ58YyEY5kjUin5osv2K3r4Mrj5t871KUAMvySpUavsTDshbxbXyoikDRKDtnQgGxZagya7XUKBK2",
  "key44": "4fUypChmDtwgAvAj8pCjdNi9FEmSVRxyT974EJdmkoB7QZ7xmWu88taKNu1AFq6TQg3u1kui5gqX6YxuMXFqPZzZ",
  "key45": "4QhBqdTUzYFhkBEH8jZ9HXJMwsRMVsmimMdFAxyaMFoKskkP3beFchCMcpEnBpTja1Qut4MchrcF1cdeCeBCeFXc"
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
