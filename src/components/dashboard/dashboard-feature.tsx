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
    "d994ZRiTq1tWK8BRF3JwUCkMC9jmW1QtmHU4m77zDWiz4T3pkjp4PDrUrrdkrNpTTCrSZwMdmLuW4Lae45mqiUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3NLvET2BvCAyVUhsSFs3umXhCRD9fv1k2VboBnRNDMVqfXcFirDHYiXGZA2cmVGRQD5mj6X1r5x3yj2iQNR6xo",
  "key1": "63ft6fMez2dxsMUrPeATCZCXjkwYE9QSSyk7nXF8BinxiE35riSCvHv8yorABV8U72g64xm3mtjwQPWLrme4Pyqo",
  "key2": "2a6ugzctAhpJDJ5gaVRvWDcPA1SL6iGwYFerSrNQThFyZXNdNaYvBeEZZ1157ttVhLToroUw47rT1zhqaQ5i9ufR",
  "key3": "33wiZZ4Tf3tkzFtXVuVtuxkjGnhavmTngaNvBpQcGm1n3ky7NGgtFAt4whyv53t1YA6m7zuHcP8XGBxc5f2UxEYw",
  "key4": "5DKNzf8hyXurrvVijLqeiE8vT3eMYPCHRKXFyLFGezB2Yrz2EG72Su85oncytpaVwGNN4ZvvppsafHyg2i178BbL",
  "key5": "6MtpS1ncasAPi8u6Ney4LjS5mLaSRjHh2h3iA9goVBxPQHkTwMtkd7CVbaZ1E38JrBkwEG74cwjStbU6vkRbVs2",
  "key6": "5CWcE9rQ7kbTJsLp9RycbYwH4Hw4DnMrnFZ2uAZaZgCZz6KeNbbFmd5ATB2fSbvt2aNrREY7uKm2Z6NnnkFxBn6T",
  "key7": "38y35Y7z9Qy7upT2ogcCBEAFJV58MaWExQkww9JCN7oDFEYHvwhQXKBExamTXVGAxngzv1SY8ajr9e1pb599r6k",
  "key8": "26v7UWqnxWq8s2bemjxVq6guqjZ1Np7wTxbFX8JXqEY7F6mX5npGfphdpbKbcZpyCMh1SA6Bgf46YTMdqKG1zgno",
  "key9": "5C1KaebCnPkW7r4JB1yHRtivFUA3iWhmxPM5u9HFxCAq9TJ6L1VtVw9BPDcSUo84BokbowXKAVjATHyDxC5T7n5V",
  "key10": "2jY8Towcdcustu999swEqCkMNeXBM9nSuXBTsoR26abzmZCtyUN16AMP57GdAkgku4CeYUJn39Cg3DLprs6SjpxA",
  "key11": "5QBXBaMoEkstcu3L9AoGQ7hob9rWhSAREnVRYXMGMTFu62i5AnusD3cmGMhomUEqhNR9J3n8UpxVbPHVeZbzbE7i",
  "key12": "57FZer2cLcKNfDfSw4GFNReLv66pvGG9p83GgakLB4s1h18zGd7N9ySjW3SwcsedkdUJWiGFHQKXz1g8V3gRYKG",
  "key13": "2jS8N1n9Vh6hqC9y6AeZGJ23e9xxGAQF4SciHiwnVE7Q6eitEnHRvEHv1Xm3X9S2oq7TozNxr23wacizTvjQeNSx",
  "key14": "3DnzrZaBFodSNtH2GuWFBxKhQZhWmcWTbfMAMd9Pk7YHurFg2qRrYAqGEGxrWFumBeQur8K9ugTujuq4JqZ7sApK",
  "key15": "2wxnxLCPNcgPX4wTHhmichNR2t71KHg135JV6cb6J8jqafK6tk1faNREzf7MwqBUEww1qXCKJeEiLWdV4kPEP95d",
  "key16": "a75qJgDfjng54QXaDbYeBGYxTeiwhsjKfRMXJHTRUHsYYDG3cTXsQUWq2yDUdMxw3LUsTYZ63H1ohVsW2NNNd1j",
  "key17": "2XKwr7jw7XLtnq6TEDeJNbTFjFoAmBVUVijRD5v9sonbjaV9isxqPWYyMkCpCrwQniAMZ65sTR6JQ4MaPJbhpDcY",
  "key18": "65cBzZwyQJF1y7yz1XNYR6gRwFYK7HRmr278Q25v79UkA6FBbLdSs3WVZCsXHdWYLK7KYBjvua88uRa2zfbu9WyX",
  "key19": "P7SEbyust8RVkaLH21LECiQ5s2HwFovGiPRcxUZSxcN7EsxUokYWLcX3fHrQ3XgntZB9eHFjxKoQTjLQWqkfXzv",
  "key20": "5G1qsDr8StkCPjELDRZsBcZh5SW4Zf1n1YRwrca9UBff2ZJoiz52o1S8CSaGZLp9GBzd8rDPwf8tDLwXPta4Mh8w",
  "key21": "2GW7gMj8v2TLeobfbeqFzCC148bHh1JmezMkzLiYwA3r4VQuZmZFVVBZ79frgVduQcfrbJDmxMiwv7rpf2dopSFt",
  "key22": "2Gu2XrdXfA6mcP7tToKYvsnGgmzbHRPgErEcQRuXAshZaCvKrb9gUtaXUUsBmt18mHUkiWdg2GYcXhwihShsaA3o",
  "key23": "4cTCoANuaziTmwP8CqC8jCA3ps6GqC4QzpijKHaoynfxqejLTLX7P7hKQnHYMdn36JWPPTiuKUefsC9xy3vxcMSq",
  "key24": "3Ky7vKjJDsTzdzzNipWbuAgMBeL6zRguG3nXX3b28XxDoG4597enVN35WWoNzGmudevgLV4M1qnMeKXyG4aZ88kU",
  "key25": "RpgTe6GjvxMsoSQgr6SvJ4FJoF9NTQrvXoXPKrxk9DLF59gxGxJY6kYx1cd8PmX9y6hCMeFJtVEiEndrW27ZzFr",
  "key26": "5zh6vedFHfhx82Y6HUdJETYogFpzMRyscQhvbQqM3MkeH7G2shQNq5uQdJRyFtksKN3aPw8CLhytsA7FjKm1dhaJ",
  "key27": "4xVKk7QmoghHyL7m1ctJEJ4UwMjq9H6e2BpPNxmsyv9RiPyimd2Tx8AcgJ9yKiH4F4Z9AggaZ5x2uxVSTwRWHbKG",
  "key28": "3FzdWfKHMRRLX6zy3MMaeoHbZDHhErR8EUdePN7zKpHV3h5VczBb2UxnfYsncUoPDuGHWMyMWbq475fn21cg7HRJ",
  "key29": "23jYqxJb66xJBRrUa4uEJHNK8b8gQsKYqd3b5Yao1T8Dr6G47cE6qA71r9dWD1S3AYHznvrsqXQ7gX4ZamR3ro9z",
  "key30": "3qRcTZgihkFh63KCBRiUbXznjzKbopJGeYE8vixh6F6pER8txHtG5pnc6hGAqnHHeb6aJizjJEFxdbrJgyuraH3J",
  "key31": "2hqrgTV5mrM1hVjZoF6PamrmXgQkSDfp4sFAhtHXo9fLPFbAQ4cX7aLuWUPifoB3Jf4BiDkzmMU9vZz2JD1GZvrB",
  "key32": "45USGZe92L3QoPc7wuMCVTEJfpUP6wcrJBQ4QS9M5spJLQa3JsMUEtDc9s8mAXQpF5JgNYwTeyE3kc7KrgTF16Tp",
  "key33": "4XksgvxUsYWrRKBcQH48EqW817KHPg6vhZirfLJvdi9FnfQTN1wTuxcNB79KqQemhCRn6VtVyEsGC24Rp34DQxWT",
  "key34": "3ZJimiAjWsJM7V3JAUP4umnJ6Ntu9BeKWyHtbjttgUmEsQqfC6nWW5JV8hzRJQ785UKQpN1oZTVHVPaqUimuHUC7",
  "key35": "4Sa6Ek74mxgFNs4tsd6MU3JhWZXsPU8qna5ZXLA6jSWn8cFsJU9AQMjUiJNrqUVyjs9sRMVrLu1SXGBJhLTeyoQE",
  "key36": "aFNUzReVgtvqswRPzT9t9mmp99ztDSmCzBZKaTLCpB5DbTrtxELk66fqUqjT69uKsxpmeciqpeJ4rhaM3eGh5HA",
  "key37": "aUFT15njPpSsu8FeCiyWAgA7TSNwG3nKNCRLmMzt6ZWHtmru6HhZF2HoMosrjMETe11iKMGApAtmTRfjLqTTkKZ"
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
