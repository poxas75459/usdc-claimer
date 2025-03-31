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
    "7VArm7ZgmVptxBjVDjJn4Xyo1cSXMr6fMwjEXWyzrGCiNiZWQcVEJJcCY7m9QdBSFZ7TM5bgiJE3ULNKU3ZyH8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L811HcvTSkaN5ptKZhwaRzHweLTstGvW2wYFB4kXJ8DpKqFWKE2PjruUttZasSHW4CBGBTTBx1HUQ5cRS5x6mkQ",
  "key1": "4wGRs2tKncU5XvmLtnQ7uwE2V6xcNVqLVwkLDJaWkhqNiF28cUn3tZRCtpeeFiwrkQc9XhP2F5gkgr4a1PNyHCN",
  "key2": "49S2gHvaTarLeL49QNmYVk1i9tjrfVdsERkVt5AGeu89VnpyAu4wdViPTPPt5FZkYzd7SL3rvJV941yxDPL3wwrm",
  "key3": "5pR28JKb7YZhAcsdzXraLm7oxnvDiFx5qeWXCfcmof5CqiH1KRY7VkLxwSibTzPyrfg7wbxfvptX4dzUuHkBfKpB",
  "key4": "64HZHYDkQtDN97Zhv4M1zChr2o5YVMrXVW6feweF6ojNuTLQpdPh3f2ZbkwHQKR5SVifXbcM8dkxLY85z9xVsnbP",
  "key5": "3hk79EXTTcKyKq7d6MKuESJbkoAWiXRdWbJfCyJi2gT8sQyng6W1Pe6w8XEpbqTwXNyVPDyWobMpeortr3gNYxdZ",
  "key6": "3cPCCrpocUYhcLvuEyYam5R59FALuDxKT4oKuxp6NcEyqWnUsS3JYABHtBzWdgWsaQiZ5aJLkAqjsDrDtu3yaZ44",
  "key7": "5p3Z6JEdjQ2qSAVJtWXG8bFKQdKuf2uZFQxRYx4QQiH6NC4UmTJSCJpvaHfQqsyVBg1WWAwXjZrg3JdtyvBkbfkF",
  "key8": "5GQFhRrNZUoq5sS1WggC7W9GrDnWiRiUJjj7bBpHvFpYgguGCJJ3DMGhEFNU95piZn7xSRzYqsBgbuoEWogLLuNY",
  "key9": "3rEsCgeqydt7jX3Z1BRUkDZDWQmz4bVJKqJ59q8QrHMZhSxc9uZajGLUbArkNiQSJ4pcauQUiZjmgpiDrR5PgWFr",
  "key10": "3G3ABaJDsGjw5Nw5i9YQvELnKNDAQUgcU8WPCrWVTXwW4G9h4MYrheGRAwBJK5QgsmVzPr9voZpMqeavuA743NpU",
  "key11": "2aWcc55PxxrTbxE9TCcZZnEApMoXz5XUGcCcNxYqUTG1n7xcjJCe8hN9EeqnrbVxGL5JX1jXBSAeN8ikgyk5fc5K",
  "key12": "5DmQ3qwzFStL7QKphyuJSd5KkF6ohHRjMFrFA7fdcArZV59oxKZVQnCJHtzBGb9ufvDrrSEdVZtpx4JcWhuzxmUQ",
  "key13": "26eY2Vq3LwcGT4GjWGTDt1tH3a9Bx4uVemtZA8GdprwuNJidF7rj7j1tXDmSbghy2QNh4RPBUgBpLWEzJ6nYKbh4",
  "key14": "4DMtc5rYACJaiM1pDFY8qfoUAKJCHRfe5iA4vpeGKYZmAoN1vwfsd6Xwegw9XTyPk7QPnCSRLHQ7bBodxEBTKxza",
  "key15": "jRLpCtGu2fkQAZCW8AhwaDW2eWL9pTZuZpafWN6CZXWMoAMjp4hvCJfzNG6HLwyopnztSjVowMub3VTybh6iG5J",
  "key16": "YH8YqVKQHA9UAM2xebXEAUHg4kTzp44CnepitQBTXip683s5UbQRw6zpzgrANPLNHRiaDbmnXyGo5284ZMetJkf",
  "key17": "7F8q54vbCh3w3WCCBBP76aF2YK6W7ebdJLFitjWPxTgGjaJSDtbRPwv3yJfLEnjo3ubUZLx2FKat3KMyKqdMUvU",
  "key18": "5nUNkLnuWa4wdgSBuSwj5YTKgTP5m4gUav7oCyqBoSMaL4YNa29ivKz1xLCSSWMfYQK5E83kAHXLnroGHrvMwGHh",
  "key19": "4riFJAGv8kUZXffyJfe14pyJEh9iBgJaRoJVkXCa7L1VCKZBRQuW3MFivTxDvkerwRPHqnPZERL7y7cebRcXddUw",
  "key20": "4G3vFNEnN6T2EPMiFmkZrchbFcXXz188eymo4L6GaqdEjAFANSRc7MveXdo7uCGUkt9VbebjULjSxgLaFf73CCgq",
  "key21": "2pzrVFneyyY4YVveTZguYnjXELsmk4n4dpmzTxAQVrAiw5vEBYMRS2gFTRALJhsrAiu4nHUkSXnhqW8aURP1Xb3d",
  "key22": "3EVMooacc7Sq5seMpgCeWf4ZYFN439s1fAzxwNKvdGgrvPe4FkH5ow4qcViJykQiGAM5DdvVUR2NLMWoDP4MenU3",
  "key23": "2sX7MQ6NJ5pju3cJpivn13rNuj4xECT3abBQmntSGACy6vSqmMuKY7EUM9iuhoVDK6iCstNAsDz9h5CrW8BZCx5M",
  "key24": "52RyzbQnfboY7jF8aYGNixEJGnJ9rzHqhz17GN4FkTtEJSBzTyc4Hb31uv7XFoEDUVYobQ7b2XG6j8teBxom7Jch",
  "key25": "61SPpdDcLbEiPF99YEkzYe5sgL3cCr7nUgsYGqoawYR6uW7TxfvCQEnGmjUUYs9AeLVg5wp5sb6iz6PCZZTbruCQ",
  "key26": "vxLGVJE7S6F6u2beU5T6jaA9pHa8PEuuHCFg8QmdCvfroSghDM7ZpBLproekxomBCwhrmrt688snXGbjQ5233SB",
  "key27": "2c1XJZqaia6xX1Gi9L4ainr8h1TjMQyWdMXBcY8hZdXUqCcjiVxw8WxwWp2Yjic1rN7an1qPzdWECey9NuFYWyad",
  "key28": "VjmELr4wbpiAKPi2iFM37RPKuqe7w7kMMjp5F5BmKBJ3edeZpb5Amzpm4JRjUqzV7wyjguq2dwaBceBRn4qFFX6",
  "key29": "3aULLgJM2F96878MEarMpZoSkAbnX8gTTHQnE2FNQEXnjfMCjXdmn9UWYguq53yPtfjYPZeyxtgu7Nn6U3jFA5gd",
  "key30": "5Ddc4PDU53CBhaz3TAFR3AnNoPYBcw3VbajFydYhfA1h3cPdpJoXMe72mJXZruUh4uBkLyRF8rSZkQC5bYfKuhjx",
  "key31": "223QTUHaPNYzTbgmzMVawr4HzDEoiUEEZPTgVRjbMSkAZTXKyeZm2trhUArYWNk1QHAkazAEG4zwm4PjG6r5rcz7",
  "key32": "Q3SfasKY6u5fkETFxnAqk9TSCz8wX7jCAtn94kUVEKRaGYJPqEKugLWRtkWocsigR4F3wf4fbLafGpunTR1Ye5C",
  "key33": "2ekofbZJYcPBbaMBxywY47xMwrazc5S8ysLzb8vqFHgE3TR2qxcXwoaZxgJKKgRdASg39nsBms6bCA93QnBC2Q31",
  "key34": "29SHzoYsLhKo992nscHjW5ZCLejtkQBauojqg8n65p9FWPh4Ayer1NBU5yWdKFc77spZJxJaKVKr8NWRwckGLKd2",
  "key35": "4xygh8BrKutd6fv9bn3surZsvGLjzzLio9JoTkFVJkywLJR17KvUJDZWqq3rFRdBoXwV9StzSj9QmSjgB2qTZhje",
  "key36": "58EG3jRU2PcUXS8kYQgMiRS6Ms16GBatwA8wE5uHC1ecwLnQVwRCcsAU1tjsCWbf5YFJ5pP3sPrUAc4Z3cs2TYA7",
  "key37": "4itpNoqJWWChRcZpGyVHHk5a9eMoXoh4fPG6EJF94khWm1v1cpoiu8wKpVWSvaQH4txpFCHsZb4ToXDozU5F2mry"
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
