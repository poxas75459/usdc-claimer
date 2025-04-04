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
    "2o4Xcvk5rihSADp7k93DATCjUbmrhMeL5LPa5m4PfR1wHTKddN2cAAV4dBmiVzWpBFP3TrKQgRnkAbjcNujJma6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSnbKutqDNPiE8AyshB4Ry2xsu2pSw4ydQa6W57TSQHQFviG9dPMDEivBBY1cvrsPFe45N7K5TSeeu7AMMbJzbT",
  "key1": "2GEvUykAZ7LKo6qRoKDnxtHieM39CidxUddzPNfpPgqahoi9KsQq6uKCifuqZ8ALfgHSzkwkKpbAd9ZaPEDBs4Cf",
  "key2": "4URzB18bkZoXdFbfg6VjRCf8mUpZPpvpFBiiXywhFBjQ8vEAxWE8jhzxLcxE5HVboyNPeGUUHCteY82ZmxE6J2gF",
  "key3": "2HdYKoykCB6BSaPguzBDwL3RMw9t83HZKScd21n81MBwbCtMcq5tJP7Yn9tfmCyJYfupyRo3kJupWaXLT1mM6Hpm",
  "key4": "2j5s7GKLVeVpRrw6kuePYmCqN4L8eU5XQP1f2FwkNs1udfEhuGXoTgXjrqYeEYvc95YKk8MWhXVzrBrKgRjqrbU1",
  "key5": "41KXNGHRZmMwYTPUuJiNiM27QeitTdAqWYZ1XZfTyeQ5qS1BnQ415Verqq2ZLxynqqqCjFJ3T9u33xm4bKScyJdV",
  "key6": "4wuqZ7eUcTefCM7qKmExKT8USdwXkACoFqUkEwQEH7NNXExKPubAQf3vJbsdb1yvmcUAvSYSqwDbc4FocerLA3bG",
  "key7": "9QERxMiwfPGDEcAdhagRyMUMjzkdtTkFm2PxzCBpNJ8QwU8jsgBuvq3h77wmh8dGEwiRbLkERXQtvnfZrrSSuVC",
  "key8": "5cnZtr5rfm6XYuqnLyFUA8qJ8hE4Vk7ShRK1bFkbmmTnqDWzz6XYdQVC4aQGucPbAke3M4mF5k44eqTu7HJKFbQZ",
  "key9": "FK2xkCpw93zM85hoDAyKgqM2d9QNZEZtXpdRsxqqH11Eg73Z2C97sgK6bMioJ5cqnwKaZfzJXFnf3qtcwyhx5LY",
  "key10": "4J8QRkMw1iyUnZJHH9tm7Xs7YQJ5mULZfUiC2XyRHHjQLpH8AMEPEHd6TdBaWk2o7Dccq6XP9LUPWC4acmj2hBM9",
  "key11": "5sn4B8GyJKsafe3THwJkQMQVyDnyhrfDUfWs6ZrYuHo6qVei1uwPykCFrzUB3iCgWnHB5nrreNTyDSn2pMHttSV6",
  "key12": "3SyfQyfNFEAzmyDzsBgJKTDvpC6vja9m14H6VkhQHiCh7AQCrcqrDhSbsocGRXYjgfPSKSkM7caQ5jGbkAsF3Qhp",
  "key13": "4e3QcYZan98x1ZsJXqYU3sRkhvnvX9TRigquwgiPQJRiQ4hfUfNXBaEqK3nxnSUpozmu5fGdrkybPGtHprHAmF27",
  "key14": "4bh5NQWKw9m8Pw8SAsBirtnDm8Qqpoua9YbsqWMXCYJbAmcURYfU82FD5juberZ6XqaVAMrriE4YrVsfytX87nF3",
  "key15": "T5kdQd4ZY2Bt6QmSqDZxX6i4ZecHvxehhy2N9W5tXKkCGgqWxRrfNxLw65hUF1jSCtkkhudjAvAqYkudYHpu2S6",
  "key16": "K9FZ6sfbMinMiMuK7NADNR8u7KkDs1cMPamjy9TKYwGBaqaer2KoYoHXCUpV6GeqRWzUBtWDnDPY8LJvwoTKw5v",
  "key17": "2uNTXJYi6Yze46NrCNjS9RQWeJFUS1fsTbmur7VHFAnB3Y4BA77CKPXHpqxSuNvR3Xi48YoAwwdNyLMUvQHZRn1J",
  "key18": "2aiybraHB2df3oeGxcqqyPAJDWH3zmRkDC2iJ65jvs6AFUxCT1BXiDQWZKHxhmkDQtpXPNHcH7GEaWrqnPRvMXBX",
  "key19": "TzFXsVFTdoEPunCY8KRNLg1JX4C4ViXauGCvXnqbLLGkhfBhLazXcmSoPzadXVFszcuZNd979ruSGMqyAdncPYR",
  "key20": "63DwCcDmXghdfbS4G2yMeMr5FwcJ8gfULqF2ri4UejKB4MJXETBa4Rd4hzDgz9NuuDtTSzP3BavpvuDEHFB8NdG8",
  "key21": "2Zm9LjwuyPRRdzkQKc1rKatbEnc12y5WrujZBYfLdaW4nBRCUtqAq4B6bLdCehsz9Mj8HJPVoSsHG7QnVPi4YevP",
  "key22": "5Lm6F5wofsRLmXUnQVv8qra86PSyvxpq7U7Yk9nTnY4YYAfQw2EFJTUQS8cPWSqnAc6N3vzL7vaK9DtWdo2xrwzg",
  "key23": "axpmRiAxWECBLTqrczMEQyY7t255fViN9qqxdBFdk8zHCL2UhpHvCth21ZHkAhiCJwhezLcD24W1STCnh1X87x3",
  "key24": "27pP9GZmA5YrQR24y56TQuacC2Dp4CmXdZk9iNqkqtN32zKRDfQKuTzYequzNGU6DFuKHic271wpJbrwMFqra3MH",
  "key25": "3f7g2LjHsR52vcAiTYd2EuCWAtnJbeGCisdTY4PZqWgnH7n3W6GPuxvokwd5hU2cJziLeyKvhSTsCULSFnoAWyPE",
  "key26": "1pzArVVtQy2PqqepUWhLArnbTaf8J51UzRmvZG7iap9pkR11L6QUFar5r3JMmabFP97Y9P4TYZM1YjBvwciPkQh",
  "key27": "7RHkhZkbivUj4dak1CtEW7PRWNsdPURbZ3vzwiuVoEa2wNouRCRg4y84zU8yM9T2FMRvuUouHaoYxB5YD2DcnBQ",
  "key28": "2VkTM6oa3agFZtJ9GSTz1MoERJR6wGyscbbd6kufBRoHmV288G1jzoFHJzSsPvp7KezR9Jvkm22dDykpS5iFa3Ny",
  "key29": "4XbKvLpHk61XzBTvFLyTfdf2iKfokFqzKndt3KhMVfMw5Azc56qqvEicsfDR4JLKUnBV2FbJriUZpsTLRJM3Pr2b",
  "key30": "UMJRhTSVzJxRiAH3SuvjKE7PH5S2dLE2gsarHZbiJtFNhGyFwwo3znXMM3feBm8qb41JYbKyeh1Rx9b6AycWBVf",
  "key31": "2rSAoJjshJ9781ytZyqMVEU7dePCARNc8qatHfNDjs2GbXfe4P98YTLNAG1QycxGiaVfsjkKKPxMtVGQHorgZmgn",
  "key32": "4P9GMdN8GxAX3humpKdj7ZoA9oQu5uQX9V7fTmuDPNEok7DsyYv5WP9xUMTTrFZ7Vv68oLdFZ84ezvyqMfX7Dytc",
  "key33": "5pZU4hucNejmyP7XBHccG75skn5ZQuTBJrx5X6auPsUNfVGNW2SR3E1LrYVoRFriWSbp9aGYZ7X8ZRLSyCAawgEm",
  "key34": "CLLouNzv26654XpirXPY81JGbQo8zQ1frWXiJKGURvbHnxhaAicsrZeJxKZk59jGybkJc9ciaLfW6dbKLvvEqfS",
  "key35": "25jupzTXjkxh2tLYEDk9SYpN7UGC3ioQsvnRYbqcykGtAeARUKwT5LfHxdMKwjsJysAVPj7iE6AE2SHUsAfSuQBU",
  "key36": "3s4MCiEWDFbmNiNsr8hmnA2xmhfivqkPYQC9xC2qmTVFSh6YQcYkFQutpfeoj7QbhRdum4vai6DYZgnHDQfCJyTH",
  "key37": "vBpzoRm8djyyFX6HNBx4AB4Fyn6g9NxFAMSTSwuKcHkTzAEPCwQFbL7dpKvhrnwiYMxK998AoENn7fB6m6C9xbx",
  "key38": "5QT1XuHAyQmbp1pytWEc9dp9Jf4Rf73nJcNJzhU3qmcChDLyiFKYtjSamvZXuqK1JpwtFyqwoB741dtp8KpXENXe",
  "key39": "5dp7afMFdG2tFa9FjinBHsybT6oD14wZ5kLz2WdACnqVw7Yf4socBt7nw5PM75upc5fS6TzFZ6tSVh6fmXX2jcGv",
  "key40": "2mDKvoMSULGAzguoMpvA877a3Xqn4gbqV6jcAicWY2psw81X7oCcxc6H1zUnwjcXL4a8ukS499c6rki9tFZRBMD2",
  "key41": "2cd2oMqN62BeHBLX6zHNgMXQmHY9fNmN3Ybkcxwo2yzbFoBcnsoWZnAhEihqT3emiyxfmmsCgrDgNExAyV1cgwow",
  "key42": "2ibogbqJwxo196W44HGJ3HDne7TJekiuB3c8KSiYbj3FUXG9KgWUhWDzJ4DU3rhDReYwD8NpSR38vB2jWyX2jtim",
  "key43": "2z6asxCjKmWNPE5AQ9S9Td8kJ4GmBXm5oLt2imvkX3Ne73f7N754dheJa1R6KSrQmr9hjNEeZN51LEMroPJbpr2u"
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
