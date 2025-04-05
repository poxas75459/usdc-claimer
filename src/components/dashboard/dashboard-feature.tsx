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
    "2xgYnaEqRjzSCWjAdL5E4skb2Me3cXgrZ4FzUbEone8W1v76RVRqp2N8jLqTy5gz54NrfBrdQrAAH7KxVLub8D5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXPfbWwRWA1UNuzBsyJXgNxV6GzMcSeB6R1cQnSbVRuP9NeoBfYin8UHvt2AFppSgir1MFB5y3MJMNZKm4iJ24W",
  "key1": "3a7Yke1xDayrMveJhZ69DT9MRMxhozU8VHGvw2cvYyY5hDMm26UbSudzkKMKaoaycrgytmKmmxGtrKr66gNRBrDL",
  "key2": "gkPsDXnUVL9DHvS9oPDLQu22ed629v9XQnn4E85xAC59Tq6p8ynX63aNZfYuXnEHUVtyqqs4dSjZ9df3399LoSH",
  "key3": "2j6QSjVogeW3tRKtQ1CGLKSRPaNNcg3R69weSnunBtxJpxAVhpUKbFzrQSnWLPL2PvXbwfyUeRMLcchtHphG3Kri",
  "key4": "4QBf9T54QnN98e3tLX7zRe2KQX8JvrdMf9wwWzr3zbyT8f97wZ537vhzX6nDg3pK1dNQ7No7Ui5N9cXbNKV2tgEH",
  "key5": "uqGprtV4n3pBc19G2mjoKMsN7Y6bJE9F4wzaGMavCDRumyU2vZdJqYYhojKDJMhDN8yTaEaWAr7kDqxUzi2iZ8b",
  "key6": "5rDsFLcuvhxrsZez8Zb8Af9NGpTjzZNCf8cFUuVi8Aid8tTrVZChCj8Ky9sbuvz2f1LnkwCrNMbJsr5gxKFXS7hx",
  "key7": "2vp44RkZtQp3txnhWHJk5EnNYYW5bFNaUdRAwDSGgUv947t2htFddPNThKWsKTUeW4dxJUyR4mhZ26mqLeaBk4fY",
  "key8": "5QtPmUyKzfUWamHbQUcx532RQn5hrthmRcgG56T7Qy3u1iBSGsb3mY5JYg2k1dj9RSdYwQfAaKRDh9zc4o5tfv2c",
  "key9": "31m2BWCyYT5cd4mwPEDP74SsraodQZ9eo9CpLn8iwpPgXBwzPuNdUVPGRTDqCMX3Kdvd27TURHup7w6YpjsQJExR",
  "key10": "2FUnY3zG4ax3y9Xqu8gAhKf5FBPgp9bmanwsxwfixEL14GYQ83uBNw6ukzQ6WksCB5qqshnBeimE6cwccx3BQQs",
  "key11": "25VE4USFP3Q4LbbPk4hMdWqw1tMXaG9zoj4HWqgfMY7otPMbQgXT6LD3fe3LQu3aoQWYk5uVQUSpBEEj1STGEFJ8",
  "key12": "3mZdxdbcPYQEjd59oCzfarvDS3jX9WraT6sWdaSZ1r9Bmfp1UgWvLgHDMXaWTMA1zAyQGubN61YC2FHVYYAUUiXe",
  "key13": "65ymkBpE7VKWmUbn4MomxUZgdTvjgbE8CYhqTAxLLVBqRvoHjHKe3KrpeHEhHZHew7K6xvdhFU1tcoaSutCGsPAt",
  "key14": "83hdoztiHpTJgFewHLZSEHBMnWAoEvgqMhKyrLkRsZqdDvNLiR7LiZD2p2nioogLjExjcbTVDdkW9jzvpwzMJLt",
  "key15": "23mm7QLES3oZHEPMVekVTfptgG8e1BJxZFSR6kBntKgg7uSJdNzKQ89d3f7yyzLd5EpbnJ2gxXZ71aCbwKDSDPoz",
  "key16": "22G9QSM8pLJYBDFXwQcxkD96ht2AW2F2stctfRTQHLJgNPP9YHQkSC2xeVNcng6Hu1fu4pxPvXLaLwjRy31D8J26",
  "key17": "5jexnG6cVdsfvWcqFAFsybCxtUsrCzb8b7aCSbLXSk1srt5aYvmRinfXvzWNQ35wF8RGtSSat1EvG8w7CrhKm6gt",
  "key18": "3LwQKFHAViMr1hEiY7xsyAWqoibug6S3EcmyWPisQrMfQRtjaSQQEeBDcAhKoMiFcLXttjrj6zisE7HW5pCSAVjT",
  "key19": "3nic2CYtv1C18He1AJ7aaDi1rUvHPbTnCcTwD69PRTwifTVVCMbrgNwc3inrADjmdytSwN7nLA4y6nnJPCikx6Xa",
  "key20": "4FRG6ASwHJaefynM95DvHVwuaRWZm7Yhxt1rrvDJLr1sxdDci9JLVX1muSwBw78D5zFCyLHnn2stH3hRbBogfXCf",
  "key21": "4hPpKBcqL7hBTvNiSK45JNeGN7pBtmTpTSLMFB2BCcgqVEcwQjoUnTEQiosZXsJ1CMee96SGaZTu678Nhj1MdHcV",
  "key22": "623QJPEs7DkXaW4mySJmW8yvGev9iEgG2ydoaibgwPPordhgBCZZ9Ttr4ANxL68V3DXSPm2ERuStGCvFFgG46gGB",
  "key23": "2JZti7wSX8Sm9XFUUd6gYcLuR73WVE7LH5uqCvDYtFVVKNyvoe26WJrVbfoY4oyeCK2jUc4NL7RFE1bDyLbUyjiZ",
  "key24": "vbcrfyzV5sEUdQVsBeSxvx4gy1E3yTSt219PXmeZx9buMYvP3AZKCZGSv1nKBrz7CPZ5i5xE8ZNP98wAW8t6Psp",
  "key25": "7XTgzJQzUjrsVhQLM4z48NKEMHZZGB5kVWyeggrDYvJqDMvCmcsnHr3tNvDdgBcYYxmNqsaraTV8t5gb8fCBLNS",
  "key26": "5yH6zQCK7Vyp3XtDAvUbXQDbrN3Ai2cAd4Bqo8UH4xB4td3KCcbPwWdK7qAgb4z9jqE3BuGZssYGpAJBPjUkr3Hf",
  "key27": "38Pgp9czcZ6rQ2LMkW1GLdrz9P1gr5pPJm5EeGvebD7TDixDeWagn7ofBCjwyRxnCHVoUmVJC2523Dkziu5R2wnB",
  "key28": "3s9hgc6ik7BePyye2VVRGrGKkzyr2Unt4gjqsHgrGVLpWV4X1z1eYiJPH2H6a1bmv7qn6QHce2JXQSGmUxCqitB7",
  "key29": "2FzHueFSgu32qKxruEwj63ijGQEWuCpLp9E8Ui7n2wr5ABqrMXsDLpoyy47DFY7ivEyc3teW5gFHBFDDwQbU5uFu",
  "key30": "4jv2rzQNsa7sGQDuMZ83jZtwm7YNVybM1Bqpqvw8X6X3dzQesNJTztGpcCX8CaAG9b6qRvGQxiQqHyzyeo9cQBvc",
  "key31": "29nqtmPbo7uTPy3UcWnezfjr3nha8kUfazD3GeYwyvsdBbsfKn4vEzdh7ApySFNf7yXKqywW2HgmQ4isUkSCv4jP",
  "key32": "3Pvn4bqztB3sQ7MtGKx1VSsYRj5TUKu4oVDfQhxQpDvmj83urdZ7x7UR2dJGvi83CVawGJNw8qxFhDmvfQQAyekL",
  "key33": "62VmSaCtVFB8dx9L8m9f8SuFMWjsQpCwcrYHwxLh6mXnorFPNEpE9fY8VkWkkFyMFcph76z8s9EY1jgpWJmTNNbw",
  "key34": "3rpmReAncqDmWBP6nKaWR6Ae1W83gpSgZh31vCr5g4TBSswynV3anq4MXpUR74tQZRdqFt7gWVEsyb5VTEPUvsHQ",
  "key35": "4We74a12pcYMpT5S3AdA43hPmTFeKCqnAaANjmVwBxpccrJnEhyU21hCT1dUP8Gde3UvAaefBK6RYBHCn4V8jfdt",
  "key36": "5ffyBc6YU64C31dpYMHrM3TFZQceZhQUwFFQ3YfSN2fMpaWNWNxktypnSmDAz9K3mH4CeQTMhGSTRzA5xeDwaCyJ",
  "key37": "ojXVhZrEBQUrmfwe9VzNEYbCgjUPDgm1GwU9Sc7R3Y9XTTzJEDnhDgeRqkgSegNy51Lo323Bs5BRE33wJcpZdxZ",
  "key38": "4aU1yASZRbJCcZeMvbz8VNACzCBgamsUGAmz3JtpGVjuV3i4rTydF2stYiXFDMNwLo5bwox34rvGXCB9JcTwKDuB",
  "key39": "46JNEHN2ZPCBt63zVJK3tEf5K9kg3SkDrWdR3cCqzD6eDdYKGny5h8pSjK93YfjXFMHM2QA3duJ3Yf2T4DFV4wDd",
  "key40": "4xY37wzsBbWhtSfSDfwuHoTg1xoKTd1sfD92rAetChwNair5A4TCLduFeGRK1Tcv9E9H9oS6Lmfwd2d1Dxn3VFae",
  "key41": "4KVtUCEpMqpn5cpKLk9x9H91cA1Y2bnGkL17du68qq8qt3S7ZkdgMmJqFAG3k2FHoUehWEMqLVyDVUvJGJD6DbmU",
  "key42": "2NvMz67AbMqtP4Cf7q88zTwk2MTshZUtmAXrrYXvtNsTpSzqsnDQcHyhvYoQ4jbtRUY7SpV65dhaitTAYVSvXa6a",
  "key43": "2TaM5E8HBx3Eeh2EM6Rjzez9J96fd8XAoBmWZXbs4u9BHLotgbk3d7Hgu6QvYbZPj5b3cYoBaj21GNqqPk3EkRvu",
  "key44": "3NyLuPKaxQLzGW4zR7DEDtmdbdHnLuycXXukhF5YY1tdQT5po5nSYTckDB8qJwb5JSxsmJ4ba3DumULmD1EnKLFZ"
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
