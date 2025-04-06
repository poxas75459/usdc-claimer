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
    "3Eagw24G8V7s6s5jH4i7arMjhkbZsCcRUYeKn1PQuKEknsyaK1Djx8LJW2HnJf1Ds3C9G7MWBP1SBHekXpF4Jc1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvmTyVPjpsNruj4b5tzjAjDuQ7iyS7GyPGy9uQaXDbWP94enHGtzC8skZKRNbw7XBMEmoM6t1CStzs7nrtYRPk",
  "key1": "3S4upopVWnVskW3xmyvCXL1ehZjeKiH1tY7Q3Fk2G1JD2Ktkc8XeW3CKaajYZL1iwnxf6BL8a8UJk2gU2byA4a8D",
  "key2": "4x9ztjy539NKcctiE6zoXL9kFmJB9tJJ4vhfaSj5dpvezHBNXdSnZKBjLqHFvAqYwiouJn1JmgT8oGZWPbyReEcS",
  "key3": "4A7ypE7qKz4zc27cdDT2QnyjUFDcaaGVkv57avQqSo5VYJZGKZ5ep7YEcdDJ9ydHRmqy7Rb2WzMUX8aV44fDhaDs",
  "key4": "66oyHCtLvgDv5FrxgxwEjt2d7vmbemZiWrAyB1KQfFJCsry9DtQ5dgMJ1HP2TL5YEQACwG9bDQznMw9Ae7wUFhmx",
  "key5": "VFbnAX3qLw1SeCC3v5foDn1Mcz8CmjQJYqX1PdnTi854yTxQGbSg2NKBdsvxn6EfjvFYBXaC995oESC5y5EAKn6",
  "key6": "2nQ4jBKzSrSSTvw78na7FHCPGZ92BkKC984ggBAdBTcmHQFx1Qv37MSRCrrdBcpMpXxHcSooSAvFooSZ84643nrU",
  "key7": "3wxSdS8WKWjZ4WLkyA1rxytoi7bhKJ4Ub4Q7xfFQgdQLbesNKbUdTGUyB2fFADLk6d84oACtKZenZRCgSoj5fKCz",
  "key8": "2tWoCfieZ8zSHRZ1o7wBSYFn54kekpNi7A7HbGSBSgKcTbFeMaZhYmfudrEZaYNyxJQhBwYr91RK9BcHWfKqsdCa",
  "key9": "3ReR6sr1HaCPF1Vyse666iUGsbEJpMGumziqEKFx32vtcg64sEKUSqn9mq2QiPLJ1buSZUe2QRsHCWRahU9yna3B",
  "key10": "4LgC9WyMW5eKxefrPdTnCXtKbi4FgRcqiVwMtKRBGaukDQ6crQCiu2TSe71E8uEewPQ2jbFRfurbQ9zBdMhm9wd1",
  "key11": "iFHRiT6ih6ZexKkrZJ3ZnQYfg4t5Dsc2LvP7fN5kLG6Vw7n5Sij3R3p1qhfD6BQBqxYMJ2f15mttSUbsoeDYrVV",
  "key12": "65XX17id3gzrLEJFr3CPoRXp26vYPxXBfebSKx7sJpEqbBKyrtx7BuM8bEDge5CLvTV6rtabTSay479zp9DXcasc",
  "key13": "5JqRquQrnUqcnpUBxXkxo3vgwWkh9tbvBhMpWwfBBcmKnujK339hT9Jf4Cv4rvES83WhJeFByLo8swxkbBiTasM1",
  "key14": "5X1o3nuYXiZs4S3ckKutTxZCYeaxetMoj5iRkvJKRDSseXiJvZ2t4jV56gmcq2h6HtYhzhC3LxeeL6EftHwqCe8W",
  "key15": "39boa3r1ntzfbPhyiENnWhTRV3xbXFG9n5YE3gHTRhbZfWzCur53u42FMynRyUMUMeHtPAcSieWfyLP8x53EVdeN",
  "key16": "esmMoEWznjA5EUZZh5K1G8sgZXTKQVnrHH47EFLKnVtTHeVSfag4crHRyhDF84zRQ5KRPAJSdgDCHoCfWg83Cq8",
  "key17": "3jcD9jPWyZoQ9gZF76zViXRGNMEmRtrBBDbUcAbkbdr3hDbVYU6TNLom1bmb4ZpBJEKH3DftfumYyn7reH3Rw9uE",
  "key18": "5g86WDdPLvwQUuyUra4Mt8ZGRbpZ7fXarN2VYmQKKqHYae7xJeJTGFbPS7VLqqXLgbSsSBfDzyxEfBWQSvxxASy7",
  "key19": "2Fpa4KHuSVngeU99YZrqLAoGkNMW85ehDSiyxNp9VoKKSag4yqBT4stxM5KuT4C6wjxPjoEUoHxjDpGK8qTVCYz",
  "key20": "2RAcSXipxTqDwj6iviCzRfd8EeFPgsJEafuHkwMsFYee39iGYmc1MeQEK7ES8rrsi2KnNQYCpnRLpm5tLyjX4zr8",
  "key21": "vs8Nsw6HPsjtgoy1GbY1vtSPCgTaZpqbD7d6eWQG8FNSptwev5FYm7n2EYF4XYLz7kb13JFQ9BYYpWhTqivGpDG",
  "key22": "24fpyXR1UwoxRRDzXAm7gecYbMfXBraysif9Uwcnmzy4pRNVBEp6r36xWuNGTeawJw4i4GysPETS8vbN6bGYcUYa",
  "key23": "5rV3VZuup49UKXM2oJ3LkfdHJWP3kYrMDn28pAgpn3MtUj3k26hweRD8Q9VLFedKWhq7H8TRR561GMSaEgQwfwtv",
  "key24": "4yKx2yW8EUgKwJKTuwsyxz83zxCnUGwgn4DhMNniy2D4oam1errevQ4FGUutdn7maTcJyCtZ9hbr4rpofh84y8oj",
  "key25": "62yNxdMbGqwmWhaVbysr7FfMQUn23W8P1E81NSKECbUYgosdcFdaxgzxkDgtj1p2tWnCD9apX6ePgESqid2jZ3Kg",
  "key26": "Miw2g8fznWifqt4W7WLSrWSfSjPqXdH9pQQoWZiKQQPkDUBuV7ghdFQHkVUks9oJ5aMDBxAfaC5TdSPHLq5uHDm",
  "key27": "5HQkrj3x2naWhwvr5uTPQjVRiNxPWC7wYJu1ptwhyaDFTZ3wi5mA8xqyjbWMJZSvAUNUPWvP31NJ27qNCAxRUWmF",
  "key28": "5sutDKCqw35RRTe9dPoHij7jXKU3ELe1CwpXp6dNhfmNBQoMgtMieXATd7eXxMCjKTa9Fr1BgyCtzxKkvBkMfLJx",
  "key29": "5HAc5AYpJc9YcAcbEJYYh3xttD5P37cjdK7HQ6nbQ73rnD9h14DY5ZWMtYiwWrWYaxogcssNBgsoXtGS9kSCE6mR",
  "key30": "4X2EBYbs1Ec33ZGwXu9MVZGQy9zqzzLSFofc5LqXsBf2A5mWKENbDyoLfwWsWg2n1wqA4Hzoo4mFFb38ugZUehAL",
  "key31": "67HA5JVVoMaArjUSTQMYTpnRvyL19gCEULK3DM1gkVrigVNNYdEZQKh9qBwK85CefwHVi68933mHbjzHjYKvGR7j",
  "key32": "5RKyCmtpDGCCxTVd4vEnxfP2oidLe5G7XTtTcTJjurrs72fhEFy1cYfz3Whyfr6qvWXUAYNdGarCpuCg7nScWCDT",
  "key33": "3TDAxdoj7kAr31seibxqsMPm9MJQpViTTttQUyh433dkWdrE6QKsmoadQAECfTjradKUpjnXmxwhbZ2us2U1PsDo",
  "key34": "4jC6GtJ5LSfTYRFqScgmK1HxuTfV21koFtJyAzauhYRWbBT9QEtsyFLY13CpGHCPJY4b2VsNVMzNGR5Ja6Rz5ggg"
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
