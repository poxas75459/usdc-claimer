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
    "3LgMkRxnpYyDvHkRii6W3YX26KU83572YWre1UNnyArJHDXyzdE1skaK9wkmaDVYHhbHgu1sTV6DhPfmqworLrZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hjtr4GtavWxGkhv4HH3TwYbwapvM1mDguJbUG46WWZ4zgTwaXBYjWYhUazQ4qMRbBQt2iinrurj9oDZoaC9hcA7",
  "key1": "2D7LohMN8s2fE8XrjLN7ZPsuQixrYXaV36UBj2gNVq2ZuLxVAXBuBQWkhGwUuf1cotHcF56pDWFHEr21H7rragLh",
  "key2": "5WYHvwCYR2Jdbr3YQCsfhiyb15K91XAxxZRJo5KiexsayXbFbtiY4YTXfZPVA7anRnvx2cVZP4ajqpBzuQycEtQk",
  "key3": "3qa1kvZvneYZnhuCaFYsFU8fALncwyF7kCrkHJmjFWKons7LANwUoiV15e6Sd7AkxTwRqYQH2HWF4qMfGz9bZnYL",
  "key4": "5JM2tJZb4PwVjoPttr2u6cPCziUQzshMfvQ5BBPkY92HEUywLhkGRFw2xSA2DXaDqA2mm52WWtx85peDddTG1RzY",
  "key5": "QSFKRauB3vgncN1cWmg9YmjxmCYYw5WxWdfBa6nSmaM36zahVV2YLojCZdGPa9iVhqjDkmVWh1YDReQeVcCfCf8",
  "key6": "4Dd2GNGq3m4DuRUT2DxzDAnsaawxhDGqVTtTKztPsZ36kWn6W9neeNUBqMnt6NwfaNu4XJcMtpbXhgvKDP2FCkfE",
  "key7": "2vHUrDtcRxsxRbDKSE8TGB9DXuSe4enX3BWJqdjSu6GW28EhDSXP71FUJQtzxXwcXSJBVz6gi5tSKaJWhZQjwNhe",
  "key8": "35QmWiiz93ZzaYTodESBg3tAnYv89fQAUTE5JhkAjZk33ZJtyhsSVoDQC34wZ3RFtdBLPabtspX4TyYKN26mrcDH",
  "key9": "3SN9agiyLe16UgB7nvN1jkfRNs53SBcb8cKPYgRFub668K3s4Ve9nb9dJ6hzwrp4hmZev4JvbB3c1T3rhYcXc8Fm",
  "key10": "1rE2gHfdVXbbEB3ajUfkzbzufDshfL9Wvs9qAfMysUbK5tj8wpEE4YU364MF2d3QoZoGqXfQFM7c5v2nnExKTgV",
  "key11": "3UGUTPfcWkgQdbxDwFmCJPg2xS6SmA6d8GVrBgVwG25J3Fs6KhiMg8ePKZQjRNqFyqu289mVQvSQoftsvwWjDWtn",
  "key12": "Px3njYjuoVvfmzGCh49Pz7Agyan7m7SPCDsNMZ7VHDBLe4QHJ2MVBPNWcbnTGNvxSeEQp6X4zsQNDUtMS9D1uRW",
  "key13": "4B5PfxvXPoTVHXTDyUBpfhkaVNDASup2GdU56n24iwBNqPPb1GakrW3yPzAQUmdHp17iSthwhXzDvhCXL8XgMhXi",
  "key14": "4BTzEGk8kWNF2QGv2qFgWFB41rUTioCW9489Wv2QdHYywtT9bjy5y1gvFxuqprUe3SsHNaiBVcmKGEVvFAVTtgdg",
  "key15": "3TJFHDmAYpvVG1DUbPNtNPnqN2edrjvEHkTJdxZhwGXv8579QZPQRdedaWvkq5qFVCqnPmVCVnybUGo3jUXuXbvM",
  "key16": "2YA9yiEgYnkcGfyHqGjDeAj1rkALJBaqUbEDNwidNx9pJwdiXZW2hpW1BueXxMut4rLPZHokkTPo2rTWCv6ftjDf",
  "key17": "nrZwC6KbAMScgbkgrywWqsUVESoHiZ5rbgc11hYzS6GTDujj8iurcZa9cxitT8Z3JzkBY2zAX2niXBvtHNebQ72",
  "key18": "mxL1ewJJFLTrWMtNNVCSfw5a5MAvcYVyQyqSeqULfAxYtLyMipuHpcEAWnwyuNhqjW2j3TUQS6rwFXE6d4wCdKc",
  "key19": "5g12BNCHCqs8ES9bwQHEzxYNCdRZUKiNpQiHf4AmzyEnJjHQr3ZPjA7R1e5QBfGstz1mpFnVCit7BVgXmrPNjYXT",
  "key20": "2x2b8C8JL7T1hQij4eDJiENEd3Ppsu41tbmmfnwGSVAyHf729LhXZxCDcZF9abmHknZ6YPANGLHB3MojJPr3ZjB5",
  "key21": "5wrgwDkPLE2yXa1DRKA3Dp6xe29Svhp1ncAGw7HHAGri1TZDirvvufn4Fdjxokp8yKPxfzn74rr5QtroQdMdxX7",
  "key22": "4XuqE6NPBawnoPSwboj2KbNqMQ81LM64vsUArGPATzSm4LD9kNZ4rSsFDKQtHjDZ2dYFc1Tp9WXFP39EKGEwE4MR",
  "key23": "3LzXdThiweDu11uw38WDNWUD8REfSwYM5fHTEZngMTUx2W3AUjmqG6ntkDf1GmELz7J2fye8AH1bv56sAHuCZySz",
  "key24": "mHXn43PWnMfXkNe1JUDJ5LbKCFpGUegzyNXq46KHMvsDrFVK7tRoF2uaYEBWiG7fCRtP6rbt8t82cSRrD4giHED",
  "key25": "3YRiFrN49vgrJHCvfFtiERKGBPW9W1uDYvu2ASQvex9KyN8kEWx2MKAZEfhWpESs3jz4xaCvt549RAEYEHpivkPF",
  "key26": "4PKHk2PwmupZn9YaxVLZqqTqbMFUUnscmA5eswZ5wew18gc9ViZZ8m6MyN44oHzzZECAR4VivQWxURAcv5WNqgeK",
  "key27": "2qi8uw1XZpVDcH5CBurLfHAhVXsFiPyK5WYEV45TfAEDGxNLTfMyjZruaaZQ3HPVwfmKEmEjZfa3AidST7JKkz8G",
  "key28": "4isRbzU7yUwHb7Ad5MPjbNZk4zb8XoTL3mWKTs4zr9uvpxRT7M8zxQ1m3kwnxPT8RfJqLXbViF5Sh6c45bJwz3Vu",
  "key29": "27TrnZ3Nn6UpqxFFBfP9BTbg7r56MtdrKgCXPah3b8gc1kC5fCuthuX6hV2EvZPRoQqCH6nnMtxf8viy82iBNXLE",
  "key30": "5ysBZv3bqGJs7Ucza3gppN6qq3ArWQjb2AGwdhFW7WemUZyKNpUN2AKy4HwSskUJwj14HawZm76tgF61qm6dW7GQ",
  "key31": "N3R6hG9n9qLSpMctRqyc3o4Pu7XoinymnudpvborhjDyySBcqF9e2xtBKEzpX6UksBFUmcGfdsLFLerj6YSaP4i",
  "key32": "4hD7Q1WqKTDYV7sqyi4vkYbjSJANhMJy27pZvaWvrie5BSko9yeVMy2zhbfh43Ncohd6D8tbsjEC1whTKwMz2My1",
  "key33": "4dLDSP2tw9S8bcKih7jz4SxJhjdUmB8cAXMQHxXur8ja6mfyQfs4hWMt2qQW6fekGTiqEuLgR3DP8EnPnkhUjM5D",
  "key34": "4zUgYr7G7guMS4CMTHNrpmb5nE9mqjLmkiG7mfGQPZdoWHZfXmF733UtAZ9eP1hK3NEo4cAYQUuEBYkr36ygbXgP",
  "key35": "G9QVgq5Ktw2JmGcxbxkhLHPvHhX99Hrw2KCNYWTcbGhxTWw6ycRtQAuSEcsKDxPyvW6sPDpsLkmbe76VK7DxTPb",
  "key36": "5w57uFtJDmpiXh3HfuYKJVutA2MyzFTjL9sB964pJGEcAmgg98vsLFjW7jaYgyQbXRT7w9UX9nLv5Ze6bT2S7eWa",
  "key37": "5KbW8BSD6xp1BT6DH2DU8aLonrnk7DwamtxyTN6Z2aWBLsAA6o89jju522eUmg5KqDa3neohqUdzABUdB98hPoUC",
  "key38": "2M3UGaUo9K7sPD1pvUGCQ34bVpTS5VaPXE2eW4AU9vm85PfF6XuS5URnnKY9JhLd5B5oJUbUMvz2gD9yg9hsR7KG",
  "key39": "3vbLSDbEEDwtbcQSofjWMeivoeRSSnDuTFAU3cJUQrHNZP7sJn3rxNwp8YBsf6eeK9CoAbZE2NAkko3t9dqEvQ5b",
  "key40": "QEUPW7ZzQhnreLoS3XfaTZNo6qV2acW4M6BbnAARCfaLY5GbFD6FZJofMY1jmUCEabVDqMqdL7hWwq5CxL8FAFu",
  "key41": "5KqfzmPpPRZzFeRRq5LuX4eKuZ3J5uvZKErW2iMJFefu3oWZ2ZjDz7mJH3TETECDpM43p82abVuD1RK7MxwvEvKV",
  "key42": "28Jw4QerdxuKvR5UASgQ2ptAdTWZkssbqXQ1vEvBAGbeKZXaQn6N9SfMPrewziGmdxAjv7xEU9WWEJGncei2uxSv",
  "key43": "GF2XiSumqaZj3LRU2c4HUbfoKXZVUCmNDNiCnJ3uzuP9MFbMSoQ5Xq4ErQu8TJo96trL6yJ6dbbtXx3tuDvL3Dn",
  "key44": "5hdytYCMNpsoqFDTZHibSnrjEamKQ4z7xnhPApcYivgYU22g9aD5SmioVvSbE3T2wUTQc1jMTzSiQWmHHFzDnuz6"
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
