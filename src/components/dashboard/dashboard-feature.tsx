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
    "3svUwJAq2d2bVpBwNKiFnTeuxkHxiFRH3LBRSTTCo9bbZGDcwCuqZvMZH8iujqarLXmzHDAC51teoHtbsNh1DrEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPdBd1NCPv5UzV4ZqsdZd9xLZzoZJCWsFBBMPdhAkytYjsx9PR1QM4qP1he399DWQx6oDiDwxSFiBTAexmToiza",
  "key1": "xW6hskAFqiH49sAGUZADSQfdcekjxXkhre2MjjJmLCrijgLTGDk7oKzY6DgdCQDBK7tin8rhgrZNGp4JnfqszYD",
  "key2": "H4y3oLrDSAyX5ybLsRT5LackSspqmwrdJTwKrjdMhUbLJx9jzuwNiA3m5akRBsgfApsrwW8Eti1adtnx8ytsVHb",
  "key3": "5Zv3jeZxLuUyBDx9M8oUrFuhYyBuAXQHKWpb5fTuZVTCzXU9ihbD6ZuBgj9tHbZhPZrrJB46mkbbrub62xn7JZf8",
  "key4": "3Avb6d3t9ZtELU6xrUPZHcRQKKDh26F8hEZhgxyLWVAyTd5VHBaptVwJHjv9bLSmRuhr2a3GwGJna13oVuu5tZsh",
  "key5": "4yX1huPaugc7h2xAukRRSo75W118A8amXTWEFz5QW4GJfVPYNsFic3Ln6fVkjfJDYuCgfHYEDqfcnHJhTnrdKtEv",
  "key6": "2BZE7KyQWiKNXE3f5kjSLpkfmNiUPLJXEzcXypnReLDPWHx38WtXCquYEnJFhz9bsHmHyJbvrc2VwFZJGCbDKX3K",
  "key7": "4oPHk8UV8MksvwibnsD484AfzyFggAadGMh9ghiS4h2tRbv9ohEFLu6JjXcX5jUzA4AufPsigXvw4aC1eQGprtHG",
  "key8": "3FEEk6KkFfwNvmzcuEtpYouJ66smY7zhN7BHA9mDZQ59wEnGjyHn8XPmLkFHLtdNFUzPpDGoAi2dwt6tz5DEieTg",
  "key9": "5k4iDn7mQJtmxDr2zAU5U4BGqGiyPRqLvgaTyt71kaeWKHipdMB2WMPmM1KwV2o8ijcXiGY3kDCp8sumYaL911XT",
  "key10": "PgL2NBzvyGzCCWB9GFt4duNytR65qaEr4nzu3ZeyKGuP759x2MFD5QWWkiWJithQCed8E449jjVf5ByUpYLdjaw",
  "key11": "5JgFTEqAysA8P2eii65r19m64eA22bwrTKmLCUhhJUwbxWnvWESJJ65rdoMsrLh9pELxEaykwaJ4MS8bqHVaPwne",
  "key12": "5X1VdkXTLHq2rTJ6MMgHgR3xefmr1UCGhDZSYoe43HP4XvW2mCE8tPkzTwVaHZWn5dcnxUQ3zcaY4bJZoJT42jpS",
  "key13": "4uNHaLzPqinLgaMcnQauyPBRVnqsGuSgDMhoKonFF8hY9kvzBd6PD9hJVX2s8zVBMSkAKLHgwFUgmAMp4sMCpWRs",
  "key14": "5C1ucYxk6Ux3Yw6hkwHpBoWt7nBzCmZStVKo8CjZY69N5NKGEaFwg4V7rjxCfFdw86wUpNzKCSXq46NXyrqL3Nm4",
  "key15": "5gPWAop3grF5q9aFDJP35MHvCVnPGpX8deD5R9wRWA6DVPWLejrrXMRpMq2NhMedrNsN8sFiaqZewxuEyfZicai4",
  "key16": "34iutcNgdf71LdR6jaGMfPofYbjriEujPTLs992uGF4sf2732dvWosq3Rzu84CCZRNHk1m2XQnUJg3Rraow2qa5",
  "key17": "2Hs9DRaFxk9VLJBKkyyhYMA3vD2KB4dwH4JDkZBZuwSQYB1p4jA5aR4G8bq75FSjFGASGtecWxQ8YvWCti1kRFNX",
  "key18": "3G8gPufYuUr4JRMffMEj35rwdE24WVvdQ6aa5YuPivXVdhDD4PBnVspeLodEWdrLjiDzncmzZ8aUY3G6zPLc4Gyp",
  "key19": "4RfnDT8pFk7JHhCp4xrv7bzxixRUXJGBiW5KVPcvsW1VDa1rNu1qunPHVjjGzf3JNK9s3rBvfpdZ1xCd1Sb6oqt",
  "key20": "Xd93JjYxYjFgWmbRziBJQW91yRRo2fHmGtBMAVNUJJDsa29os8JPUn4hEMWDtog6rXWdEBwXsgkDK7ZSA2yoSzu",
  "key21": "3a9ipG7dMEcunAnoiPtC7noNyU4mWd9Q1QwJNkMs3BvKZj1UXsPQG5FpN9ZxoPjDwiaFg5mWXgHLPxKTAvE7cjTZ",
  "key22": "5H4EZRaxCtH5vtbwR1VBmJQz1dwmFapzq1aW4kyott6cLKfZe2W7w7dsYVoDkv4qFkqvAJbmNNZHm2AxLnzKFkyo",
  "key23": "5teMkEM14doeD6GpToPMHnDHPtxinLQAuA6LisWVcapNoea5jbhPESY7cLNyLq4RzonK498nxWRsmKVW9QocKPaJ",
  "key24": "2Ci51umaM41sr4ZfifvuXBno874q36STZ28GvUBLkqqxBQEge9usDpmNoBwZjFzLV6vgcWyxudzgeaVq7ULHyU2y",
  "key25": "4hNPvHkfg9Faf8cPtcsZF458Bpp5NNvxnTaPdVaRT2y7Mmp37pXvabL74uuNnpp3escrjNbWWmWk8KzG6pikzv6j",
  "key26": "kVxGB4UFJG3hZ8zHK4idLxRDuHwnNpNRNAshQzwZBZ5hg8q9Kpn6xi23mrqxomtYNv4kC6PjDo8XcWQH5PzMqjk",
  "key27": "5DqZA4SQrdjqAHNHEk81Wc9vecJtFRfdsRz9Mc3dmcc7oL2eHK93bF74fM5GHqw3dyrWhT1fbqk85KSf2QH4GHp2",
  "key28": "27sZJePfRdhCmZwKNRyxRNae2EQ8pgNRryLe2jddE5miCWxxS8PyDAacr2qyZodPS1mfE3gkhkBqBYn79qjGEEqS",
  "key29": "3dNGwKTeUNTuXBg1pJStao8iVBfWRZusviAx7DuzE6mC6xx2NodZnz4pizesJpyjhbDFuGvCRSjdjfGn6PFb9q9A",
  "key30": "2ynBtmUbCTvQnLW1KQ1K8oHe4Fq3q9Fz6fssELf1WsQxmHanSonyDzV2E7joKh2TWysZ6h72wUfm7DoNga54N27t",
  "key31": "3reaeTh3VFKRjv2SEHAkqEhMmDXKXVkDfJvTaeTfp9etwBXihHu8P6m4xW8NdxbFsb3jVyJVTw5Cd5TvsT2TSfi2",
  "key32": "421p4Y48CJN3nv68Tr1oJQyWkATfcV8XtCzmgAXkvBbR62uXGjVXE2qPTUdkufjbeSYAzTmDdN4zmHVAQFhwAsk1",
  "key33": "5kmtxeCgd31WhVDFTxT17KsioftUxHZPzq3LamcnoRUpEem635AvvNsADxQgBcTWCwEpjtveqskEKjJN1JwfaCEq",
  "key34": "567wDf6yaBRqrM8QM2aGNRtUnoZGMg1vv88u6N1wLmAQDsxHGfVXAi4yDR1gYaebycgD7TaNcdgdo5Pn4fUWHSqK",
  "key35": "2Wb5aQQWwEoxbiH9K9pgtrR2wrWgstMwGLdFg4Qg4eg3FP6BuME5LNcX6e4RPHjEzHomM4RyyfSXGHn6PD8FqrSx"
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
