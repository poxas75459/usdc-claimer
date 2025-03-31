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
    "wLJtzBnuyjocCsa31MWDhEmdDsRyFtqSw92U6RrdwitCwcymbEnsmmvTprCxrWspd3VnnCD87rKKNcb4Db4zcva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pq7tsPbC1vHetXQG4xbcH1NAtnwddwpa9f2szkD3qMApQ6xtNkPrBAtuXsZP8kUnnK93uX59NoYFJ8PEPuN5LuS",
  "key1": "5C55sJCVDDD2RvqvgZaMxuuHAViU18gn1veZjAr2HTiuKeTc7vguBxDCKwjwFUVqEqezM53CL1mMJ5VE5HL71cTc",
  "key2": "5N3HjtHJnrWJSPZB8E3c9ULsirdRA8VDEESLppXqcU9gLxuoYCmAjrHDXcGPC4f2n4SG3hG14jdF4czv6oze1sBq",
  "key3": "2ACtw4Ux1tbQ5hnmb3p5BZfYXvU9bBryx4XUyQHxmRHef7adYXN3wdm9nw76MA8wNfrtb9MJL8YViXkUiQ9T3uEv",
  "key4": "57v5CVGsJc1KqndcTTTxbQ4b4jp6wxe9VKXXpy32HShJjByu9rvkcBHam3wxbXPvw8KszCFV9L8kUCgcA6GGKMUj",
  "key5": "2VGvXPWexNAhKZ37YaVc7cKLZesBjnkuUwvRaxhpKNzEUj7vQHnLD73gD6P3b7aZwwEcbL6JJ3xBcggiRhwkHejP",
  "key6": "Q9sWA2sUsnWr93Xm2bFHVURKRqY2sHDBru32Ua1bpn6H5sA1jJQrLWKfK4QEjVqf8PZbN3LYfPUZSuk6bHqiFgF",
  "key7": "4ioiUPfcrKG2rrenwX5swLx2cwL1PP5mqmXa4kk5mrfQHFGuptmfV1wDyzRo9b3RQL3T1FMnYeg653rd8DxDP3B9",
  "key8": "kBSaRgqqv3vPyumEbTB2BRcDhC7frCEuEWodDc2ryvTUhLYSnhKMtAjmxM1YYcwrUy8rzvAgJLbgYNb4YWPmQy2",
  "key9": "649x46q6heyotTnbXEMTYMEQjqTxaA2awB2u354PR8CwrZcjj2s2G5yA2R4sFAH4MzPAVPQEmrYJS9KT9cFrRMEf",
  "key10": "3wo1wAnws2vVqU2JHh746vV7QWGZ6SFDWLqNVntJkyTy8UBeMVyHsVzgBrzxgzNssDbDdTEtXTWL7yZMNDoWeGdZ",
  "key11": "5QiDE8wnS8av6g2cdagKKhKDtSZz8sYvcgVgPkQomhshnmhLK6TwnNjK8pdYe3i8aYSzh8Co885ew3JGPjDCTRHz",
  "key12": "54ViBsmzf31zhzy4J8FuTMnq8dYiyGYQZ51W2HJ4xEPEHLSSCfjAfNu3zEGQ1rh2hiGLWyv65WyEN6qBZg1yA54U",
  "key13": "3EwAk6hq5tBEiXcxX3kGNGQCCWoJaiVkm3Ur21UEsG4cAubRuxhrZxcHBG7Mq4NJaZ1aabPuoEPGdW1JtmRoLACq",
  "key14": "5mKTgSaF5TwUepFCvQxckHJYjk1SUzG1fpwKyo13p6BVB3WMzskjSeJBf9QUirMuGHv3jybewRvaFsVxPbYJLx3v",
  "key15": "3FUAXf9WLxMTbsoTtvQy7c5PJCX83doJ8bqaW2YoCcXcG1qjRZP7SyzjsvvkW6BnFMxBBeJnMVhvvKmRh7Cvo9cK",
  "key16": "4jQibSuypq8AEcEZB3f6iQcApDUv4TFwFtpzqAjLPTCXtLCok3MNPVsCas6qB2FNU2X4Vw1SvbMt1rUwLanhoz8w",
  "key17": "4TifabbEBd2tLvrhn9AYbcHCMm1R4MQTC1Esy4pkdFdTinweDjQWZuNAumRZgGr3ndBczMjdbHkbzENmaqJDUKAw",
  "key18": "3RmbpJDGUfaLELf2vdy1NBpgkEJbMB6ZBGsD6s5sJWDm4sDLYbbjqm6bQPcjaKqJXLRGEzyYjwBbJDBoNv8NFjbU",
  "key19": "45BXrvMWQGxMAzZ8tVFKkKhvHMoZYoVe4x3xqzazixZooZKh7pE6MEDdDuRBqYdj3vEBF21gNefsioDbVgaTtQRG",
  "key20": "4Ad9porW3EuNjDEi77ZoQEKGDrudB6xLCCSHJ8XFDiecqT8Th6g1wMnrsgtbDPSmgQfPSYtuovtUT4CW8fLrRALA",
  "key21": "2bNemxsZuWfmtfzMFt9EKAXX55kXkN4LNhuRNixPh8LiigcCKPVDvVsZwMRgnMZZvHBucoDzB1QEKYBDT52E5xnX",
  "key22": "3kHjpsuzEaKDPsUnqAisGu7Wknm7XVKZXA9CND9RbPNJ3RioYjG5pDnQx67jWQzyrfhL6oCF5yi9WnekQdpy6ohE",
  "key23": "dJSNhcyhdJ3NfxJ5AQPQVsuUUnFD3cy2ZK9UjfXgYRNsFPEZjW9vAH3reiyVL9W2jYCRzbNz4yEkkzr9Hebthz7",
  "key24": "34bcf4Fbjfkcj6pJ2ahRDgwaJLYr4A2xZPjM4yqnbQpq4rqqBQMsUkzeoSkeffi1DuNNd9f8HYWcNorV7YzPGYX9",
  "key25": "3ngdR62oDo7arH7CoLV8TACb7yPub9W4jkAfZwjNsCDqnHkBTNCgG3vZwHLpNLmR7Yf6aCfJ3CFL5NcS4WEBvzAY",
  "key26": "5D3uYhr7iUwC3V8rkFVsYZXKHikHfhaWC7t1c8RSm2drs9A8aVUjPgUq2HtJEBo81H5g6KL5kMtVHvFmHKBn7Zkf",
  "key27": "3NaDrX4aVjXjXQQv12UpDc667mDzjtg75Bjh8wTs9SLRSFu2AUZCExM2ijXgSY7ZuY8wj8DQCHWg7muiUYj2L4ga",
  "key28": "2ntkQJBwPvcLACjwunh4PCjeWbjWLJGHDaweS2CYBaL2wsEhby1nmiECk7oggTSpCd1PfbZMJX6p12rt7hE2qziE",
  "key29": "T1ELMHWvhDxb2Q28rohEy4eraGnWLMr9WAfmFbV49fcNEdD9nzeLvtc78dkcp2q6tfgR7ktSL6b9tsv4LveLodo",
  "key30": "2hkLSSqK8HmvULdfej9qACpfPqwGrXH7pRrGFujATL7DLPQwyQac8vVvraAJ3Pf4CwisEdLAuUYXrcr86DS1erb8",
  "key31": "3hW3bwKQFkaB1ZvH5ZbewD2UEPB4i3hNPZhAa85hG7FgQTTS6rEz5Aibt5WW4Rb9rfczoXCDmpA6UTRY4BFZzowf",
  "key32": "3TbHXJwPad8LbZNh9BWEF3qr5CDRNtMYfsiFTavMru1H8DV8VEGjbSfTfhnhEZM4uk7yNCEByWjezRZ3Admb1zTm",
  "key33": "5shBzsMiYzZCvX4ddtEnPQzq7J6LpMrbyU86odLDY4hcQmofDayLRg2eWpHFGCi5dnn53ygLDNRMC4QAxmX8ya6g",
  "key34": "5sGd5DZ47LTqhAUtTGjhxjhLWENgRaVusaJgfBWpEaZt8uCoy4G5EwymNU4bW1r3WK6rzBZGgFDKptnrzuaxLuaf",
  "key35": "4VeZAPTWYv8FgY6VkJoL2Jnjpe8mVgsigtyCaKjp5C8CQkyJG1Ri6QyHQtc6EkmB62KeFCtKc2iKTDuanpSdRHeN",
  "key36": "597zRXAEyr4vMcpnY7ZrEY5GPELW3wGQtkJbwDe1T8riKZgooWca6y1MFod2QrZDCgwf9wdMZndoe4eaEWE478vn",
  "key37": "4jKStPwr7jdjmfVQq5NCPitwjAGyiCW42kFGZDsKBs7rn3E23JjY7Pdgxh2LUrW7LEAG2Uzd87NWMWLzSWfioibx",
  "key38": "2vw3mXFfH9H3p54hMDCKQQMxvp2ygVpUTuxHRV7KuMAtQmVJXhGx6xgQ6GhVYPRK1V2AvMoUtDwVCQmjz8NHXhB2",
  "key39": "3x48xYTSZJk4W2KkuFLwscrmU7EVBwRLuCJms4DJK2MVxfqQzK46oCM2ddrEY4yiJmYEwzngLEC1oq5amPoAVqWZ"
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
