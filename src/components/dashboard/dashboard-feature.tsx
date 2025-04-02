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
    "4nqVGU2ycJgKUrWSSgx2oFhXjDZ2WtPKqe3GHis3TrxaU5jWP9spn6g2GnxyQkMpFkAVHnzrLu4gTAS43QnV6fAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3PHTpGbKZkwypJqdTEzkoUwwKY9Py9vhgR9zQbfabe8eH978nF49G7R7QzrbBnMKczr3YjuK3Eow3N7Q1Kgegx",
  "key1": "VLKZjDpxDfptkM3KMbA776bhRvZJ3ovsojE7GzW1BqwotzeBxp4xYER8LM2wXdqmyxtXPE4NzswQPCdm3pt1EgA",
  "key2": "Cf86wiV1p4KTJEwr2EpgoMMqphUzZaAqduiQaTVHGuRbK5AXohXhVxnhwtqBszAfVT22g7aVRNkWRHGogsx8Eza",
  "key3": "2aXup6PJRJ74P5ZZuqiYbrdQFBXzUaoLCLZxSXTkafn4L5uMciP2xwVcLBQRm7fHuM6aszfUG8cyQBaoejrrtav2",
  "key4": "QvwiW7ZHrUW7mjdWU2bhCfihpJWv5JQiCjpsayTcEfYj4LuapMgjo1RHsQ3qBNRwMBqTSW9g6cxMiC8zCn6Qh4F",
  "key5": "3ekgbe7vmpMD41v7B1jxzA8WYgZ4W9DEX1qKKnnXo2xDGVTDq1XBpfGLdjGLScH2pAxzrQHqUGnm9HhHrffW18E7",
  "key6": "2BkLTzTF4qj4thgkyjMo4mpt3f9tGXefRq6fjY2BKcN6mFKznyfzdavfJuboYbsCy8ZaKv2VgXcixbs583zicN2T",
  "key7": "6t9CvHjZ7Rw2pRLgNEi9nsMrgKjKUFuLPWjroA5CKoDSARFZ27PVexLrcRkAXucEtBPGSnq1qhQg9tQnxqvpW5Y",
  "key8": "3Ez1r48wLFktYhk6gZ1pRaopjFqKRNcDoPSH3ecTvee2wPKYLgA7nZ26j1km8UFaGj5xhPkbgkF8ep4TEEPAfRbr",
  "key9": "242qXo95VHXTYzeoXh3s8AycYXgcKDU2mvf5JMDfRsnLUgZwTFNQ1JEWF69ycuQ9EDwMteAGiBDyAuCajPfPqXxF",
  "key10": "2wfJiEGpVeUXR8FymtiQHDo3x57RH6kw8DEr77jDGPAfnMpTVKYSXhXymCihYuJuyYwJUnXibYRpHBw43xu9Yzun",
  "key11": "49HfGX7PKXwSedTzng11WaAU7Dgr16o3nCFvs7yTJymjw6tw7WYUycytq4d29ZmgkMowiNi78B52zn5peRq2Bxor",
  "key12": "32bwnGnLNFYUBfiQyLgpsB4im8BMEtPdScb13ZA4XisUHkK9A3PJwaSX284YzpoBTB8ZsUNNk4FJe9uw4UoYTKgV",
  "key13": "59ibTk72vEk9evXvSfh5jcgteU6NojrT7RvizK2fGQpP9qP3GSNCeUSg6fNp1jkjSpQD2XgzWu84Jjp93hnUjFae",
  "key14": "3ynjx27tEwumTwsX29zv3QY5jftuY54RqwNUP2f7dRNasEdjrZH7ycHyr3iGjSUWEn5q3vWQKCB7JtkcDpjpjqh2",
  "key15": "3VkRT6LmvM3fmLMsKbHPCARK7powxUZe4tpNGjEh5WDNSiANrppNj8t53fFo9HdoUanjizAiATHs5uq42kQbTkAy",
  "key16": "3qnUpYKjJMsMNLVy7oULBst5BxZXfgJdbhExQg4kom3crv28pL8F4hwhKkqAsApf7KATPbcUcBzbVPJfftmzVmgs",
  "key17": "3sXZ13k7t3PhLozjVqQMQa4w585jAyKEPZ7nYSDNSwD1xmt6MTgGfzV4xjH9L1MijxPLbJfNjmgHB2NbYDTdCzW8",
  "key18": "444jD6CFbcK1CqcgPLCuUFMvhsYsUZqG1qXg6uL82ALpeqztCvkEbfDkA8yXc6eA6JqB6TCn2rccXUrnjGYaTfWE",
  "key19": "54S1HWFp3DKgXVAk6JLBLWaziTJMhjfnC1XkL36V2CGNmTQ2L4eNdUE7ykKTEdjwJ7DJoqmh9KAtUGsZj19cyiiD",
  "key20": "2t6A61EK1rxAG1ty33yZiYn7we6CyYnuZzn8vd4yekXzrye71txTejWWEPPG93ew1zMNDw95nXfjoDwifdNjwyPS",
  "key21": "2yYpcaRMfHdXwdacpe6dBzLkgHDWYkJbkJ6JeRSwMbTN33epstY42VG6bJ8cYjQjewGJRbye2gfCsRW2Pox8AVBW",
  "key22": "25kXAT6CwXQoCQDGQWfxNzuLkRCS2sUq3hZ4XNWTy5H58ZAnySHhCLkWvrAWUw3KUvwFKBi2SPVXvfpqNQvDcBXx",
  "key23": "3eaRVZKrD1TeufogWLjGdyCsRXM42Xzt6Riw1tk3T9D8eqM6y9he4SLVHzMonN3uiX7TMw3Xa1oSj4SqggSoo34L",
  "key24": "29ejF7Lhzz8fxrXMsuM5krv5VdxSLmFuDLSV3pfJAt1myB4Jta35TnhYi9tiCfkWySr1YM5MisFsUJeJ8w2um7RW",
  "key25": "3J6k4wHiapWmzix34xTL8z1oLBnvSbKBFg5hM2JeRagFLxRCbnwHHR6KTv5L1YRe3gCsp2uwgayGN8navrUexPfr",
  "key26": "x51G7t5fyxUnR2nUsxzXaZAJ6AkFm6Vd8vmfQhCmY1zCqSFQKEk3ErMskNXfkyvKM22KcEdEg7mv2fjxBopLqjz",
  "key27": "4S8aqy5CiQsrwtcBnsvhKwNqwoGzHMmEC1BggBsNEJex5tJY5ipe9wXH1hdrrFK9XF7WjY37i542uEpJ8MpYPCvF",
  "key28": "szeLMbANDKxBQVYRuS4hYr75FEAqswQqiPLHNrcknvTUkgGKSZ5C84jG72R4aLQ9Uij1V84LmTdNqCByHPWa8Ga",
  "key29": "5Z8WBHL6UXKwXs4QcN1jLaYewuxhEEr8Pi2GdqkbrxV1D1uGVos7B7L1dfs5v9a2RAWQrqZJ9v4KUFW7ddgjMfa4",
  "key30": "iNQGrey7kmCnHmQZ4cvqhKQytYSyGsJ9pfdDW5V8ya6LWf4rSqGvNRe33CUbebYmEQoEnLL3wMa5iTSGWAG2Nks",
  "key31": "2Tcsomef2rR8ndMpu3NkbEoitENzZmtXnzoBaVWBSTcoTRPGRViSaHkAE7eX9VW91LgpjkzTajoqARKHRqHKQHe",
  "key32": "5J4DPCnu7tiXZSc7jKFWpEK3NaGMcL2gGGVwL43zvJWsmM8D3ji8ypGtE335YBuqDjetJ5uNYwqcu9TK63DUUv6C",
  "key33": "2PMRGYtvHn4w6Mj21udDP1eB6Dy9U3ac9CFLtgSQ7BToz52Wnv3Fm5hp2LarCKuDmwYWPUkjebcjuM4WoK6xx84v",
  "key34": "5fFsT5x2uZZ6eBDtfHSnDAtqwyuUcmshC8tJwNnPEpZNZkaXb8qqnzDx272NpNUwqiBCotoEMXo9ohFhb6FemFM9",
  "key35": "3roqdPKaL8HPXmMW2dPdZAL2c236Gc1m2DcoasERsxrJKGcqMW33kFFKuUFvf2GLcqpFbzbJYua3GfHF2xu4mM1L",
  "key36": "61dgsVPigfKAPpLR2CdsDiAo5fN9nTWwemhYZEQBHqJ5tZTX9bUv58LxzHFJszdtUcW8wXAF75S1BAHfbmvEdsQh",
  "key37": "2i2nRz3V8HqNPuryQsz3LiymwBMPPAZ7kMgmw5DxAEVDoK8cdEuGyqkbkYVTsesLBHGWqEHiGg7Rsv1nyGDKQaa1",
  "key38": "2VkacRSJ8u8YrFcFz2JwL72Yg8ci9UpTPsKFvs6ZK87grvJqMHBqiWb1Wukw7bTjea6SFRhQ7kBnMzgzmfbWtH7V",
  "key39": "53q2wHbneskLzpRwhkoh1yaeMeuUBRjTLu4arwaZyTRJwrFWk4AHLVsJfeKx4j5FmYyUvXofzgWuQMExEWder7tq",
  "key40": "3XoF1MACgCQyeqzAaTYPzRMLMKcCT6TWWoLnjwyiNvuP9ApCkA8YuSxQJwcxJZfngjcrGoAkbE28j6DWN6dyygv6",
  "key41": "3gjBD7Fs5V8Vs2u3wM1TgRkF9qUAAQ9apWWphxL5EDoS6uttdjXfYukiFQV82yue52c4y5XpGr2RtSvmngQib51q",
  "key42": "3qaauMJNHN8YApECt4Q2Y5kGuwa3D2vr6h6GgqQAaYrfUsBomPy8cpYtjEXGVLctmpndDRwN8UKGJbWDiM6iStw9",
  "key43": "4qPSJiFVD4JxqLY8hYER2LvPVrxS1wQ52PKszYAXqtmjQ8WmGqp5jSJqZEwaTeYZbAGHjEvKEs9VoApSNNcQzgQ7",
  "key44": "49f8zkibodFtNdyQt7AbAy81C1yXgL6dsFPrS4WC89x8UPjagnZi1Zn1Uiua4YQRyjZVfgRdktnyURKhtfLAa9we"
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
