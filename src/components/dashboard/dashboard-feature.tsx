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
    "X351RaNevCXqRS6XbJn99jm3ntA323mr3YCTd8zS3W3nJWDHeCXY9zYqjuY4AkezKpmo9p5swyXkHBpsHwTQxgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwRwGWtjmnTTw7ZTpRaSbqwa2qz11McW4NYRYaU6samcReUFqHX2oyQ3xRZrXcNoATCE17hPSAVQz7TaKrY1HjS",
  "key1": "47QVQ5jt6f29vF2bF4L2cMuQrfRrkH3PU21KKroDuZoaxuhZMjBewcz66Ardw8yi2EhjjfehCT5TSnxkaWq6vQNe",
  "key2": "2SaEUneCdLaTjFRGZPRjxZi526kjsxU5b5Gp6zFc8eUYH3YhsLjE5DTNxJZq89rCkX4kaZpw5YJZJkU3nUFHpiMk",
  "key3": "5nAFxKYvy9BhDpq9GhYc2YELBfQLYycWa9Db5PpjKruyjC3XnwEkszgLaUiLNYXcmf1L8jfLu3ZuW6q5Le8ftqu3",
  "key4": "ia6gKq6ZVVLZRYdxV5tWD1DrRge6a81rewXufb98v2RTfNMSxxY2BvmbNBf7pTg4TXRzFQsrne8vvHuRLz1nwp5",
  "key5": "22SgY7E1GETYDBVZgPAX7Mag987x61du7HZzUtawh6cJki31sTosvQmxWC1kcFkwRQEPYXnBTzg9VMk7a8or2DiW",
  "key6": "5hH8tNR8EQdaUNR7HvtDR4Lz84kVEUF4UedLCJShRiaa7bk5qxnNoKdBFHjP6pg983EtoE9gGNf7hbFNFj4s3zpM",
  "key7": "3n3uvjei8HrcrjheeDRzU2Dn21uocY2dPKB6nFpvnsWvCsd7mRwwbZMhrvzYanVxN3QabhBK331t584nCWY5sxDi",
  "key8": "2E7LBYaTKEwGuwv5gieBYnaCynbe8zGjzVqrGrvaaLee98JEZWUJXkCcS3Ey6VkPZaf1sZwxAdbb4SVSg1mdajty",
  "key9": "3tMfoxun62u7MqS5kUe46xR9YuSs9nCqNfU2WtAA5CGjHWmi13pRDLFjJkTjowxRcS8zZDgqSy8Fu1zaZWJ72cfy",
  "key10": "2XMzfU3KSJPTAWm8doExDENaLmFZXmeVCZk1pJubgJJKYJBjE7r2VMHwHEFFaQJ8deu3gNd5Ufb1qYVQitTDumHg",
  "key11": "5egTzn9NdJ9G3NoVjwQBF1WA9BWAmcyVFse4ErwPF4T5kzDjnnkCfQpJRV54W722rqjgtMmjTxv1NHsAVFqJsrYy",
  "key12": "4z4Dc6EyR9tTmYitz8rS11D99MqmRtQwNuqPrrMgJ5NsTeXABMp8x2LixF3PJTnys49TeYcBspS2QhU5cJ52e4AS",
  "key13": "jspBHo2PQ79hmot4WqcjeWH6WUXbBFL95VFwPmZpLrFfNUH2em6r6yjCLAz74x3jPieD1juttLuPvm9jzrbwVmL",
  "key14": "2mXPGgkB4oknU8F9PcSgce8vThn8DDZpkMwGz1h9RVszoT2hR5hHnsmcmWnu2PKdcVj1FidvSNr827Zt4PEuTtCy",
  "key15": "5ATtzKn8Mv9Bi4AZzNDtcP65S2KFhbE9ABKRYa1riUHTdkC28DZLFFkog13LyBUyufoVuFYzkEAU7Tft8LkSKbzR",
  "key16": "4UmWTrFZoHdqmoU3VpMtTyZDVBoH6jjkFm5L6a9kydDBUqUHcf42gSFqa8hJoYdU4dRiMLVKLaaNvKAqw8WVqnAQ",
  "key17": "Spqz8oXyAxuw1E2TL3ESbQxwy771m2yEfq2U8iXk9b6mnhLbPJ7CEEkkpCPPHjPqRoUS8DdQfNt6mzq7jAHAK2E",
  "key18": "4oVA2zrqbiEUK1yFCCM31hLETcSbW6komhmN8veJqnuAprhpZuwYi1yikHx3UBHQACeUSKBB49enUsV9bCUXHbj8",
  "key19": "5BcMaacvFiDY5a3JLpy2eiX3x6BwmfCLYZui2iDSnzfqCDA8AtMwd1h2oZZso3N9Wp9mdUUeNof9Mt9PdS4nXHzY",
  "key20": "5YsYiuav7Ltt1b3moDo3EqFVKR1JPscFbA5hwZEz4UDoCpGWPzGP5ESCZt3j17NkmvBwdE3bcgGxoT9DuxVSv64z",
  "key21": "49J85HL61Wt1m3VhTmFeF5ZY274TT9SHTbSfPhBrkSKPk9oPVXWg2mgwb6oPt4zsubw94FfFnHsNna3JJ8S4UH1U",
  "key22": "5HETxTdAHEVsvWPxviXtYZM5Pnt7AKmReyZNsg9AoL59429rcou4E6fzpRPbDpcdXfiZstic8n9NLutyVtCE1gwt",
  "key23": "3T1XUzJ67D8oKqdevJHuFZ1EVcBMd9TwCHWbyF3L7HjvQGXfZfbLgt9Kk6wexk47GogDcwuxWJi93Aubt8vLRVAp",
  "key24": "4ujEskftSTjA4snERcVvRrXJWPv85SDyYtALNDgobFSJ6eWE1s9FsUc1tioprmMWq1GW6LGQ4SteGRhDvErNwgb1",
  "key25": "4oGDib2s4cpkrczBGPmCtndMq4HfwhdnN3nMq2t1q7uruYwE2nVTD8sqBQUs39jsxiqzSYvfvWg5TfZX6VCnwURa",
  "key26": "5M2E124dWAYRFJ9soDiL3SGEMNoSkA1QJ17VN1xwePRNsYk6BxQfmBuz69Kwb2ung7oGJiP9wwsgxq4wpksAfLJm",
  "key27": "5rkXmQmKyuzZ65v96Syvoc6vE2GxdTxhdkpKw9PZEPJ6PtXFsVdjYipKXvcsa8mBcjjQX8id7bfWFPrhNUi2EwvL",
  "key28": "5HdytGpuL4569Rwmi46Xuke5noBQ2QbUYmkCQoykX1tDzjL1t1dmiTvh86xYjfe6bEkmULrsgogwUN7Ar6s95Hr7",
  "key29": "3ZJvuuUh96K9dbU8axTfHnUQidVYkTY6hFdRV2sGkESC8WAbgGm1FGzmdhajHycCtep1oskMgYB9Wvbj8j5Fy6QW",
  "key30": "5GVXzfjCqgyuWVSEMFJxvxFcS7HDieKyoYpQ7XMzJiKpjMtyF1kS7XhxKa18pN9SJ1X4u9cFvH3chFmGa4DsabZg",
  "key31": "2TfCc54gM7cjCzam1qAT9gjCDB2yEaSeT1B5uh4Z2d6LcDxrMdMVCY9efHAnbeAfQddtcfQWVKntRePgqF7VMHQB"
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
