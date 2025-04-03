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
    "5fbHfgEY2JGAHLGmmBdJx74f1aGejj9Zzoz2FtUvbkQvUTrw7CTax7reUy8Z1qBukVq3Z6d2xc61U8Yo2ucUVxe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZHgYjaNZ4GgZJsNAJz1CwAzNNd19toLATEzcxHwXzvAj7vrtTANmPkwYXnRisnQVKHPGK1ygzRGnqZq7TGYSip",
  "key1": "CWrYKLAA7qaFXRvLpAQoem5nfpJ6QzTyZGJq92PvvqUduqfNHRXU3gmpSp8GyB27ezLQYKESULEiyWYvkcsFtPX",
  "key2": "2dbaTPWeBQqE7w7sGPYALHLTFQAukCqqpEC3amb4KBdWqCx5kRW2jbbBpHViLXD1aDEm9rjYvyD9SJ1HaWZav2LG",
  "key3": "3tgUGJwyEANQ1JMZRQg4gqvVWLgxi24788gEuJ1fcEnUQH3BA3M6uquzGkQSPzZH35hJuWyKYmCc5itcdqHSfSH4",
  "key4": "n6iiVXc53NpzaEcmn4xJ6FBC2CrMLELBGeX4HQ2CW3dRABzq7boeomVk3VqfdMccxtfJGJcrAuYXhdZq7EtkfQH",
  "key5": "5qxw8BFWXMa3pfWu3RPsvZvWq6VubcfN2mLdmWDEq5y7K9aZqXReLEEQmoWKQHSMTQVQwVqptT5ztXKyDZwYajXw",
  "key6": "3AJUshAbJnoeiCzn2TkJDDviwGtnYwkRtUSjyDp5WPkKP7UBheeQPa3XGDHAEy29MV5wb4iaVvWjiWDgX7f26bbH",
  "key7": "2h5cUjnXNaCffSEPVDWvyQPouWeXvj7LTtvKFGs5xJkcMAFBYbPuxVqrjnBh1TfFq38FK2vn2LeF3Q21CMmNDbUC",
  "key8": "wCLmgtpMF63ptkMvQ1gFwdWfxMjBp7zsFj2SP4ZoyMho63DpvAzTCJ2UbsvfzgFYkBntRd3LYe8BqyFyh1Ydwsu",
  "key9": "cMAWNmtP5ZNbuhWemw4Dr6dmZaDd5PFH2y1rspiTUeyMpeYW1AN4HNiaW9VsCWEXCgej1T5MUoerKKkXmKzRc8Q",
  "key10": "wmQ6jBrWbPWhM1F95L7fdkx9SCw3XQUG254Z2go9To1EjepRQunvGBXYLeNqQTHYdKAfL5QFy2RDx12957hFHm1",
  "key11": "5sD4BAWGXT6arZ84XjZzBg4LbzRZQRUQgq6ci6D9h3J78ArqczJKBkYUqPKRYHSr1fcgCKpzHUYjKshSp5KWJTZu",
  "key12": "29Vv5mXF2Zx6CUatVurn9jE2tSvTBivkKU1UBby1iRUHHVgTbuVHDi5bST24pbrEN48Ac1pg49PzNB8WHnyYuif2",
  "key13": "3yoAnhHSTkTxJSrtAiGJFAeQNoh2Spt18gM5hdrMPiLVdfpQPoVnk19R9eF4DXjNSkYjNUQSaqHB5nxUJGvEK9nD",
  "key14": "kfjgNbq4jhAMwMooSMv9kGBwza6kd3pPsB7QqNK89jR83kFWj5gxtycVZGrPiNbehq9MomYQ8egnixxBZcSV1R2",
  "key15": "3v8RDrQssKuTvbijVsmproyKZNjHpu6vyN2xc7E1HGTXKWDQ9wi8ecPyhjt7VCU8fpW6ivpiXvzKhKPx57WBKeZF",
  "key16": "5JTd4dWGxZ2HGHB2DuqbZZhoMd8HdbY11wtmTjrC8MSk5JTti2S1SgKMksicvo7EXdxsTLsi934qZTk5rByvCsbU",
  "key17": "4Q3LdWRCHuj3WJ8ogrjxoyUGQtmYyAZiyGo3d9SQCe7tXzvkZqBpKooPACW2e9Z9fJinhZJoXyPMLiS3nbpqD6Kq",
  "key18": "5iPwohUR6gypH6UMbbNj5iRAHgwTwkWpdrXZ6FQCAzxdVGs51RYvuboX9ht2SAdPwWDZrwAp29nhJMTUjPU7bob",
  "key19": "63f8SJvbYuautY1VZW6LBVoRLQWBgN4kuuty9HX5Cs9pUuoBi17S4phYeNxhv5C6EzN9ufYn7bqBUbsNy95GwuaE",
  "key20": "26r9beKK9GjBgA3TpcCapjncmq5M76CvundET4AjugamhzFpHB871RvQdb6K1NgQySi4snE4u7m6T1cbgb5nex4k",
  "key21": "3HBseqeKMGAArQMLutKou34GRMikEV7GVwWh8DRUZhaVu7TvtXwAQhqF878HBWuKeM49zbby939Fiv4g5WfnzwQZ",
  "key22": "4dD76s57T5WJv5tvGPHEv5d4d5uePsRAzBFpy9qgx8CJfZqTvwMjmU97NNyDwNxWb4XjXxM7Vntorcph5tAaHXpV",
  "key23": "2dwpgFQCfjmuoMxVaYuPcXWBpGsMWnsAkJgy4pR9oWLp4t99PNXNuBbxEWwKfNhD9Zr9AU8ins9NzMQCyyjiyzCp",
  "key24": "3R5b23WUf5Eggm6bEuY8meHXDeT6SqWjS3RVYcwvNc4wj2S3TBoawFJ83a4XRLZBuPvkVUmfqNBhMXQenhbHQBjT",
  "key25": "efy4DGkETxY6zd892v4MdbNHj7uqb5P2MBjY9TA6Ds7GSNuDPt1fMMKBsnhssHT4ZHRqFbrRKe4toscFihyuB1f",
  "key26": "2MYHtJxkrKSi1ocTZYGjyLgt6JBPkNSs2HokBuFJCVti2bv6KCW6ExGC79BTzr2cRtnHbmFzJuZFjdrxU9Akab7C",
  "key27": "aJeXwXt41akPCufqwAm8FxJZfpr6Ag2vDQMfybGpnPfFkTnVe43jqtukWLagaCRjGrDkLDe5TyTCfMpUYYZyL4h",
  "key28": "2ou1sAigD2QyE8Mc2VY1CHQmEciJLf4GuxGvwQBRgeeW8H6iiuALooKUCxLfoNH2Mmnmsva9new9gmYpY1uDGM2e",
  "key29": "jvV6dZQyn5uZVBGJKFbxVwVHDSmJzEFe6pPaaXKKrLwSJKrHTZ1fQKSv6zQKcDqkLBLa43UCtMdeu6jNT3kL7gF",
  "key30": "3YHgSk3xH7JTDcxnPw3ygyE61fcJZVVTCJWAS2XogUfAHceyxYMY1zkQGy9ym24ATyMSsMaXvaaqwSWPWnrnaBkW",
  "key31": "5rLZZ4tL5R6MdJNTH4PgB8dsX2TjdV8x5JZ263QFEkYoptNHq9PWzChqFEULckjWF45wpFjx7qJSm4mC2BVWzRZQ",
  "key32": "51uoYPDHa5YTnbA4u7J4D6PtmZVeYwTsxkYFJE3fLgPB63eA7p2LHMy81gKjPspKVHfaEzx69kZEfU6g6eKQJyxS",
  "key33": "5THxyxqeQDDMAxjs8v7mcvD6w1xi3wTidKYSZpdcVKuceVLfVEwyPTvJdzkmyEUDStcTkFpiGd73sWKpGZ5dSNXc",
  "key34": "3T4L5J5SYksQD5PsX4T214WqpsDVfJrZDxXQ7aePh8pHtX1qA2WEW8iSPHB5hYQpa9fKESMeg6pxyvderCEytgbr",
  "key35": "2ZuyEqRGUJx23AfMbJvZB95A47myyQeuL9Yg2fMG6LPMKgD2Z6VPjSuFKoD8qaf5C3htBUyk1LCdxHyfuLtPGKwn",
  "key36": "3WK2EdvARFpZnSdFBwgyUGZGjRDhjHLGxgqBq2Qk1MdxyVFJCth5pJXKcn9cLd8wAyVyxj4atDfzg5TseNDFCXM2",
  "key37": "3CnLsVVDH5uTew7qeMiwx6ZkZqbSDJjXpAm52b33bukNCUeB8iU8otTWY21gNcmAUw5ZUUEhHhYNauyk6CHDPihc",
  "key38": "5ReQvoW3oiJP5yQvsmd25UNPrUdreaiS5iuqzn2r23SuyzBcFvDoxzTGrgXRzWm5X1wg5AGbh7TZvgygz7DsEVyB",
  "key39": "3v1v49Ux1z89iQknk8DueyYSUzYgmj4p3kZJVafHTjsk55jZu2Z9S5wP9qRXDd6w6Xk77hs8GJRHUHSEfhmHS9nE",
  "key40": "28LcL1uodj2iX2UQrbQkY8DruDq1mrJjGYUX7Y8XHXZ6QFdLpw4WBfeEtgipZwagKCEXULpiRv1cFgd12PQpNNSH",
  "key41": "2T2cc4hKQsfD4R1K2uyTjEeewchFRZqZNSDRXwLxzFYMRLYZxKnbP9SpE81jJrKfZByPvXWt3DVxHbFWtDzJUV4s",
  "key42": "3kPvzymLTHKgehyeVYLAbGzZsq8XuTVSxWiFdTspFADDGvb8DZjHYyEDG9Q3FUzm84tJu9obBqVQcMmKKwYFCH9E",
  "key43": "5wS9mPY3THSrMELjR6zujMvNkE5GDrCDmWoVyMM1LL5i8ppFAxesvg4H3eAfXsdEbyy4PCVVxs3YRBnAwnUyHFWT",
  "key44": "2rdQeHQZot9m4aFziT9pjNAfSDsRE5qToapBzdmT8ZQy17t3CSGajYDgrBFJC7rsRNcZXCLkBajEFcyawdqUcbXS",
  "key45": "5PpYYZVmMNd52RA7jnttnRL2T4MHyZGLBDvuFsVExZh4i31wx2rhEv9cWEa5qxx2J4QW3R6R1cgXwKB8Ah8wmH7K",
  "key46": "56EUoq8mbYco5ggadJqUyRZgsBo8wusmq8KPTeYmPgsKNqTaCCt6AyAYpTe4Wfkfor3HAN8rZCUBMbGSuKLfQorD"
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
