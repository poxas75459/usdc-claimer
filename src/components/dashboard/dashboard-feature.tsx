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
    "5z8RDdbamtHcG5zSSXr7NYYN3EQsqygde1zg6X7G6V3YbHGskXfr2k92BmQEUHb1jhcuQJPg9K6PQQb3seupwD3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y73sXASSMkmzMux3XBSSxkPVwrc9rjhJJxvscGNw5Xx9B1jqPQbVivdy9Tt5rNSc1R4647gvie8HwfQpyyRjLkH",
  "key1": "3pSxWXE7PbNE38Tk5Zoi3owfCfjhWZ9ZMYjLRUFgTEBhG25nByxaNRX9Xdiuj48qw56qjZ9EUKnqCivuugphhWYE",
  "key2": "YyZRWTQkMA8X7TY4XvjpkGFjxnBPoexRqgBU82rVMNSePzGZfbrfGpbSRPAD45VvR4V3AmKPXU5wCwZHRA9wHuN",
  "key3": "4uK9uTPoMWWVSS6yuUk1mcPSMbWgcun99m6R3rFD5EvJJKace8bTyRUqJYLDVGToLzEJmK4aYwq3HSZSYPmdLbbv",
  "key4": "WutKfXbAmcrHVUdprWQhqxQb3ZEQUhmmdxYrieMkyzQ3L2tSZvPwX6SVVhqwmV9uhT11MNB4Rwmq2mNhbbfxkpJ",
  "key5": "22Z2tBH8qRUqqhrTb93TQ46dcXphsjNnf21txZ5rXoN7FMf1cwXod4idZEt3X8iU9k4oPskooKcLRWGQLiHsUpH4",
  "key6": "291oXduPpt6ain5sxt6JuzN1ACxgNqNunMnUdEyQNcnS3oyuV9aQ7sjvKpxaiSnAGi3Q6gqS5misTGKubUp4XoKa",
  "key7": "2uEcEu76Euw9nU1cqU3LQ8zbMZFHdfgT5WQ5EFXmGq6boac1hmrpyBeoX2e6UioHQ8asYfG45bpHapWemBoJm4Wu",
  "key8": "5wRZUWX3eyeeSemmCMXpWKCLzYcps7fwNdm95EQXN75Jh3tSn58LYPfRoGAicTpkiw3GfYZXxLC7Btr1ztbs5AMq",
  "key9": "4TEXA2NJMqmtQfNzCxcXRjXmjymSgzhHRWf5GQTSxYUZ8qME8YLo33fxjgyNdCxj5aTX2CuQxRBJeyhtnVUo2CtB",
  "key10": "3CL4eNWC7CQkFJdGzB4aVNwKJ8tpWtycp85gL65WQALBeLp74jeHAGtDQCgeW3PZP6i5igiPAWbv6P2UJiH9ub9d",
  "key11": "4TZTp894RjuqCeDp2FYJ68nBV6yAyEXi8QeXaWoYK4eHocFXLhotZBPwKJvgqASp1KDLsUEs5JrGbqS7thX58vGB",
  "key12": "b9b9734EvTd49sAApdeofW8PBCL7FuXfw7THjvd9pu6FA1PYPcqU1STtzVryK2k4ZvJhYcK5w9uksbGbJVuZLck",
  "key13": "2jduHd39YaV9KqyGTXPij5wBnsJj6K2pg1YdDDQ4cCD64NHv7GTRmzi8bNw3QsvRAbgtL8CzUzCdUSZ5y5qr7ep4",
  "key14": "5tAoJy4nKQmaWRZ4xFtQyL33Q2cZVsXjKZQT7STXUziaJTpYiZbeQqftMGJuTuBGfdJGpyrtg4qduPnQ9Wfa6FHz",
  "key15": "25bTCkPueSB3VTHnbJS7tgYzUtaXj4jJDCWcHYfmNvgohaCJTAaaFfWV2Czq263wCcyZome2482hxg5TQTzvcx7o",
  "key16": "4XXJudFXPAkLutdaBWVScFxozXLaEaArnsho2b41Z5km86yNe8iWYpoMG9fes3XwEkMo1NCbSm8P1NmPcXHfcrpz",
  "key17": "3BmN7Nt1n4vrevA2gny76gHamYh3jPu5HNuff8Yheks1pxe3nDKR3ePmqXJgqNXtZSBX7CyuykwCzTk4CEdrAea3",
  "key18": "4LA8rz4yDe2u4hunsqZmGhHibgJiAzuYdVcGhCCEgKyiBWErW4BeH2PUVTm1966wNSYRxaCvASmbg3JfdW1aeD9D",
  "key19": "Nond5Y9sPq94rcTspp6omNHvpqHuBnuRJkknm6ayLDyW6WW5emSzWXVapK7qnNV7MYDZdcnX9GP5QrAFycfW2ta",
  "key20": "34poS1Kwcvrwz3pU7SAS2iETH6984AAFaa4wwKtg1PT5ewTi8dPakbAE7Ba81f1FJr1XmcBcmmTyUcfBSTKjSuD4",
  "key21": "233UbUycejRwfdv1ccofXBLEseRQRZ7ogJhmmF8aRGCJQsWZZdVkxTqXktedfW7Md5EHp8QSipyfLz6mBW6SgTbx",
  "key22": "637cRLKtgAEDaLZYBmzogoAtsjGZExPQAD5vscW2UKtGPhymhQpn7Vjc8qSz1sFsaigE7EiB5fa5eeHToLQtrZh1",
  "key23": "46dkM7A6Wa9sncNrQmR3DMZX5jyST5JKqZKGkGoTocDYCGiS7uE2sRz5KCJdw5wYGmJ87uKxJqxnfJD6cfGxXgqB",
  "key24": "CbNQMAzMfYScXCx1c1Y71ocyWL1HZ79pctc9AgLfugE9JE6xtJYUd4G9bES4Z9kqouxBgWkAAcVUbCBPhNESPu1",
  "key25": "4XQBFH5c6V3fHqemXSicQg15GtRnJnhPyqueC1Xd91SZvUoA5uhUHkWXq1dYHAu8QS96TgckTJDwGWzC7QxzZ4ep",
  "key26": "3enyhk4LvZ9q3LNK3gatNRcLti2pPNgupQaCfUTPmmZAsmuMtVL7qZTpEL2bD7rdpkGQDMgDhQtRaLmmZH3nSE3Y",
  "key27": "YBagaqxbKPKQgeGnCrj5x3tR74NBpxZGKRphbDYSbQoz1XQHhjY8emRoR8r6upTTG8oqgbpckd1S6hsWAjZMpXc",
  "key28": "4cWcMMjWEk7uZw6ShcaQx8tQUM9ZNt5jsRdGdr8k8Wv5PbajndMCr3ZQMKDmvdQ2LBcYnqvFsnPDVj2QyVPXec3F",
  "key29": "2PvyXoYXF2jxeyAXxfGn1HSNxVB9kbV3yhvCApfpLr9DTzmo9CcmLTnzRTkCG7R1NqUtmB1vTJ5BY59kzBEhh7qh",
  "key30": "aXAchCojbjCuA6TSaZJsVgHZ8TDb2GQ3xxEdCJ8RYBESPYuw47ZqJcoiowfZVpdA2MDGEjDnxsQ4LGQYjrYScLs",
  "key31": "2zQU52mDbGYzbmwibK1h5qcqXf75Gh9ikUbTp9UYXdHXWNiJg6jYnZQJRBGTpRkuBnE4mkXLVXo3VLuZB3aqtGv4",
  "key32": "47fG9SkTHfBweHst369gVf9u3YECDjcd7wds4c26FpqQSbfyjFUsHkquvTSuAGANmDvXcVk5r1iScqMkmLqZgypP",
  "key33": "2Co8S77jGLdPxrMfwDoavRnvDzhdTVgW5rK2ud9Q7wSSQ1GK63zbz7QxYRCPTZj7aHAHUxXs4ZVrYosZaSGHWZHp",
  "key34": "24FsMWRtnL2Sz2Dig4UaaMeqbUVegLRcQbKQfuvHsWpf9SCPZL35tLhCEkXB7LDp8L8p94pX7cG5FUmbwJtdxnfA",
  "key35": "4e2YeaAwkJ2FhppUyxQMQivdMziGqRWjM6HbFKoaqKfEfXq7UxbZrt4EW8VbjNz1KFUWGU66kWtyWNyxxe4mm1pw",
  "key36": "5H5UVpUCzfUnZV9PCHVEu74x6m9SYiBFEiWTuw8z47ea2hzoiQDT7cq6n8Co2W1FtBLJ1P4FzzkWGjp68AU6VzKH",
  "key37": "28bqTKgbcMYo3hWaRxpkVN1njscJ8WQh6E43GerBoE8pzYRAtUKb2SAhSpy7jUccQYHf7JJ1PptzCXeaaJ7Qgrd2",
  "key38": "5KV1wnXo8bUswerCKp4uuirUfHZEvedEqBv2x4jXcmRMqThYxEfEdXee4qcZ6SfngqtKr57kUriqESJH22w2GsdW",
  "key39": "46umotCeP9E98MSMHh7Ys3tgxTNKk7JQwNGqEugQd8iC6gxZKRV7kopu9hvrwdT71s7E8MZhaqtbevuxyncqMt21",
  "key40": "3G3jeiTcTpvSmKWnoEAPcYJYdV71YUBJoFyjSdmCkWeBMtwsmMY6s6fwKAq1SfLuaRRw7FxCVZFV3Cgcjs3dGwpC",
  "key41": "3D2YihLv9tssw7eS7UJUuirvEUFtXNB6YFcXDVdGFEqqsV8L39Yuikn5TPWPCWsv2xQsK3Pwpax2KjR2MeGfUTe8"
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
