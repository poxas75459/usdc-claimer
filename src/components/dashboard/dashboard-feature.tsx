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
    "4zJzL4rZABTsnMQooWb4fZHgLW6xxb5yaEPKT1uinme4LuHyUcfuyxVFvLUbhNMAX33xi36bUGtrmRtVtGPH4UMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDxKTt2mbtWzy4zBWXLteLMeycNUzoKbwFLU7i6zq2xpS2NHYrDL4okMkiAQrPRjN2V9NLSTgp5pRgbkMHnKwJB",
  "key1": "2tJhrpzu6nUtUtkwRbithg5v3sSwLUna1EsTHJbmVXorPQF1kMTvKorn2Rux2FxoNdh86cA3spBVq7hrsuPBgqmU",
  "key2": "2GVn3LWJm2ocohCdvPCVBT5BaUrm8U3xHKTf2pY8D32UAgfLC6JHarh4EWDj5BRaHrwPZc4LN1qyhSFbRiamUaCD",
  "key3": "3rv8JkVk3HSQXno8Qz5Yw1xwj6s18fDYuoEr6sc2ZrmNHM354E6DnmmkY6ZNf1eEPsj33aqVj6UBr38bEESmg9Fw",
  "key4": "5jshXbeHr7N63G9j3ov9ae8w1nYYKc6Gw6B57CbXR8hFcogNf7KYMYuPqEthfJ1akXsNkykz2d6SWTRUCfgo22qt",
  "key5": "3aEQkMXrUtPCVbgxDNwz1gNBZcxN8U3TBFYUZ41oV5quMm9pR7KYzti9Sho4DiQV8zA6Jwt5thRk9nxCzarEvnAN",
  "key6": "4aqq8mv7QREuTPUNQBZx7GTC8V3b1AjcPzoAmKDJydQgFzFxKMuZ4WpDfqKUUWdmQrAGxqZLC34a2KA4tfHM9yCF",
  "key7": "2uNTRdCRYxy6pgq3cndNDVLrcjHXvh42HSeP1YDHrQ7SF8UC3iSENXPWteLBZUXFnoUwHJzrkxK3vmWQHkQeuBJq",
  "key8": "3BPTZEYMed3Lgzmc1ZMDBKbEg3gyUrTuWSnmPJ2ashcxx74PZE56KTTqAGkMz94HerEZa9m5HuDk2W6kVviXvsrX",
  "key9": "2VD3FQGv4PbQjRDMSBhJGyGnCETAMgjC7L1XN7MctNAV7KjKBg7YBzXeBLKqUvcwo7W1a6GvLoM6r7uZFUkqT6RA",
  "key10": "3n8W2QVgJXCMPVJkUqMwyXbmA2JNGt8Ei1FricPxJVa9vN6mj7fYau7vBDUBBUwgdZp5d9nB9WvWWLFBiumT41T1",
  "key11": "2AjH72FiR71CjHhfabyjbsFSH4HKQHnuJNfEdVzS8G2mNXCAFgcTbVfTAJny8NkqEDV2KibajJFupUZBvXYpcvoE",
  "key12": "MhZuQ3i6GvhKH2bBcC8SExV99vbf26RBdL3dTk4WAnmbCGHG1mcLPGoy3aUUM7a3rtn2nc174hMyZmVwqFtrtVj",
  "key13": "2dzRgggAmYpgDBfWRNHmr72hyZ6jxCgvxvPgjpkt8cJo9GAytdiSXoShGS9ma9Tj9gYeNU8qFc48cDXnMmmxBgEa",
  "key14": "31zDnx86LoPXNgq26oCjMbWyRTG89yUkmrdq5pRPkA1k5mZGaTRtR3eU8UhUCCtboEkgnMnzHUGBJDfEmByrNb95",
  "key15": "d6pjPdB3WAenW9cidrRTaVCErUExwjyoSn3thMZtK8NgrmBHgdUhxL4rNok1PaAZasAUZLmFE3kBvXpNVK9wMLE",
  "key16": "4DYpc81WCbVw5ByXJRP1J3z2VbGaF7HURwyzakavi7duRpbbagRYfuRz4ZJ3Jh9AnkQameorXfAMJV2WhtNeWGeT",
  "key17": "3ZxCx2F2wyVzFEN6UmU8XuozFXLQX5PcfJWSovFRcQnngibxySVtwwFauKipzci6B3JGrU7FLH1ckyYmwwyU4gHQ",
  "key18": "26hUsAyevsfaybksSHqva4mbUJuzRvKNchV8c45yRDwy6e4AydKVVEcyfpAsoyF2SBeszksiamth4PygNJ3StVUX",
  "key19": "39Yx2SnBUmrnFniEnZ1Q6iTWmLSLet1wsp46avxtXU3h6jd4mUubqREaFW9N8zDWWNUJ4MDYUPEhmt9XPk48H4Zp",
  "key20": "4URNMRrcAmgbQPBXSzixBL8fX9kjmG9QhiJoffBBwKE55iXthBj5crVWtpsv3C16geUeUwUMALwnX3p3TsLjhzeM",
  "key21": "RxTYZcSVrjYRSsTbWGsPrLp1YWyF2wA1NmTYDL97xxZLBcwJx8QgmiZByZ3HMg6w3aVqonTrEiTSdMWyYLeUQmx",
  "key22": "3b778VVTV64xEVxBwfENVX2oT3QefgJ9Po5tCSR57g5XLaStcgtGt5FcBdPqzka2CPTqokNkSGvz9ZiWCPS5RCww",
  "key23": "2VG2NrEHF5NuAWMZrmhRtae6jgTMb8S1bumJqfnQZyTZ7nCNuKMCFGeMn4XCa97A4xzAneDWqDgqgA48xH71fg1e",
  "key24": "5GdqV5fnoYzG9sKQCGXT1zxBd3rhmGmHARAoZKsTRbX2vVmBMbXRdopk6i7aVAEEZEDApnMLkMMLGMgQwbZbb5Tw",
  "key25": "2oXx26VpdMtGhgb4WVyhVGhhQBP12WhtsiUyvyoCetULwA3Xnr5AUrQhwMmFcdtrFuvDcz8qcQqC18zru5uhFZY3",
  "key26": "2rvzzTqNcTPXf9CZgjDuD8PpwSMc2g6JExXY8BjERscrZ5GZzdZS5NLJ5i3eTgUFnCCMGszsWLvWpDmjvEcTkW9r",
  "key27": "5du5N1jFM6caWZcmW5ibB52KtMk912FjrEJvVvCuQx9Q9ndcbEkQ8EQ88XmXby4NU9eR56wd4r47ndgVQCGsxLgH",
  "key28": "5o15mfYsexpb8ff5jqHRSdmMSr2UXaTWLS5q1ML4mBhsh99c491waJJd2JjphxLvPnRb5sdZzUCvVpxPJJpF6dVX",
  "key29": "2casbPyZV1w9tYhNuWL5VcanRFqGLU5djvvvixZEpr9uFK4bHeCiTZDtsoXLhGyBxWWVSRBScByBdmPVbZnLqhAU",
  "key30": "2gpg8sgtUKVvRpgbjo97yi7U4Rx6eeHiZW74twXfpGdcLfuukEiLa21Rc7Xn1KBDu5S7NFG293B5yPAnLy5JFNNT",
  "key31": "2dB17iu1s1Khcb5FD77G7REDLtSmgbkZiGQTewRbvYrJwnJBVu2EqEwLGVh3pTjGAJkb82eHddoj4gfpfoQPvPFv",
  "key32": "61vCvJ7qur1B3pnX7WTXLyE89FMbomU5LQSdSCiXgbP7CH6U7GbqEict6c3FAcQyoijzioe5MxmyPL34UE7mpHRH",
  "key33": "22fnPPR2aaLSsbFLwUcbMqiZziMf14mLrqGTXYBpGf9iSn35sDp3hiz1PH3QdgQZVXykfWvUuZFEvzmmSgze1ANy",
  "key34": "4CgGjyrxMLMC6jQWoXz6UdNT3sFPp77RKvoKwYHC5ur2wX7uQpjoWpUBQgv2DoA12nd7iEmqmvJTVrUCgqDhwMsJ",
  "key35": "3TQz7eUu3b9q8kXZJBJGg52nk27bdkiv8ibXqygufVHn43q31JQYLoYwfjKP2zKXgo3Dp59oB6sQw623aYgJ7MXB",
  "key36": "2YBDnVgJ79CmJiUhk3gd7b3duWZB5JmXZVroxj5qFoic66oXDd3J9r3dnxS42RmvEoa2XhucevL2N9Vqs8XadZyr",
  "key37": "3CdjCNpakdR77QgY1Prrf6o3pR8u1KJ6yFBVgVWy7cxCFU7E7kS81Gj3Wth6A9ccY9TdbZFM5piLikKA8FeqYvxA",
  "key38": "564eNGKp1qVQLNTpxJhFBQv9yPGyY87NC2THQ7uPHAnwo1sAFtegQ4bUDYrex1AsCzbPt2rAfHq7jQSCipcNwmnY",
  "key39": "okNb1SJX4MCxaEfF9MjPGdJtj3CW8eqUo34yieJbRUXLzjTovnLKCqv9so2jo7STKy6vF8btjHSwXTkAR9pxYb2",
  "key40": "4J3Wf3NXPtUrD7PjemRCSfcJDWc1wwwsQDUPQj99TQvnF89U3xKqdHsddEdAj6QYU3d7T9Cbi8GvDyjq445LLLbm",
  "key41": "2UD93QoHyPoMPbwRM1Hgqg3RSMgctq7chhqJfoHqdgP63CXuEsnkpLpmTDgNeKVN78Y8W4QZeaGHKiC3tK5bYz2b",
  "key42": "YBPbMwWpdYc65JZLawDq6addkN48oUb7gG2UfVGvChDDyxPM6MwumswwaUjQn4Wdt5Yfqhwg5LTmULQNNZDx5Jm",
  "key43": "4imwXnANf9CQPrsdHEu4Jbr1JPCNRH6AtK1qXifHbM7cFUcjzZXpkZiy1hp9g4jL5db2iS1WzQAmgEJMfLSpbq1D"
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
