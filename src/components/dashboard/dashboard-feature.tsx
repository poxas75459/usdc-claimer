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
    "2gLzshqUUcNQAQQkZ9X2sVgszagLV2NSyUhtTssBHN32qyiFAvVxGA1iMqryBVWDo9mZZCsujEJZDSdcsk6r7vmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e473sv19Wxv5vKqRS1Y36BpN36yjnBBoFLonq1YHjXoaVkQ6voTG6sfaLPCLEtmYVUJpdUXEX8SFtyfp2UxvLLH",
  "key1": "3sC6QJRqm7wqZnTgKkDrXgu2n2i6LwrtcWQ39RDMbAtig1Gs83AaERa1mziuv3xF5Cr8j6AeaH3Fhj8R4chqppQF",
  "key2": "4yAUsg4XS7Ug9fEAYw7WAR8TWAexp3xWRCJTKTUF2t7gKfaX9tSqeqUbbY3PYm661AcLoSXLSDf8NsHt2m8se3Uj",
  "key3": "2uCN82K2MpLaTqHgrrdZoW9SHdHn9mHjqsBshqExSs4vacWVRPtAQbqD7J3i3gAM72wJ1kFt3hq3YT1dJysrUR1z",
  "key4": "452upP9xxFGCks1NuZavKPTkvRQGxqo65nw5XSjPch66Rf8EUATgLAyaBVZEE8zoQdDDefYR9XnMcEh3JsHvNfoq",
  "key5": "4ph6kvjRffbMkmzNwBsACPxbvqRjKHceFo1rAbYj2xHepJ3fmWhfP3W4R2KkokETYWdtPkLVzqWR3r61JbcmyCqp",
  "key6": "2n3QSXPxJLTS74Rj6tNVKfFeuc13fu9oVcjyEsVBhKmEby2wWgWKrjjWbZLQRqgsFgzPbFjgoLvW2CqTYJ3c3sk2",
  "key7": "p1HFZb4D5tNs5fdDNiWi7oZtED54b3c4oNfvkkEv4AEu996PfXdeWwrqAg1dBKZd6RrqiSS7XH9sQVbYA27GKf1",
  "key8": "2dbogG6MkBLuC1pn34jScxMJChZdTry3yAyWCi3KVhRGxHBFQXweMAy9mNYrvkpYnJinMF9Toe5VCLMR5SeHLCTC",
  "key9": "1ZAhPjQK4zdGJhfDzc2Pce6X7Xg7CzqLZPjH3YGe29bmu2b8fjh6PRWLZzFxtrEuq68NLaSVE49qiJysh81DjBy",
  "key10": "4GW4WzFeqVFihbsHLi5P7RpmSi4TKmwAmkDX7x8uwWG7gF9SyBKtwy4tmEQ37ZQ62dJGYTcJWSPUcfWeo8HqQJAJ",
  "key11": "3Syp7ugt5FVFc1yQ9GPgcRQiFaj3sJbHhes9ELmoxCjBDjkzWLnkrbKu1ZymHeiRDwvmaexwDd85w4Eyng3ezGGe",
  "key12": "3oHfrPYRojBxoEF2WrV6yF8tedLrRK9yhJYP69XE9J9r84AjdnQkJgVtyUTYroUQGcnEU9Z9MSf9n8dkDTYSiMcs",
  "key13": "E2d4dp6WyDPznR1ezq4TXwFt3oys7vzGL8qYFPs7e8k3LzJ4okWGNoYsv9UeNPuSAWWmrD2tg5Ekj91DoqpJXh3",
  "key14": "3tDLG61mVa1Fn6JEZi6VZ9W5d8KNKLJjT3t2yPvQeS3bdgYkES58cJ2Pj6MSUw5C8du1oKfc4tLrCVBGQ3eX6kiZ",
  "key15": "3L9w4dCHKFYqaGAiVu4So5x3aJbm55HAmdjt6pzuWxoVJpTj3g1q9qNnmQ8Xc7GikCCeNeTbsHjwRuWpW1HFWdxf",
  "key16": "4JQ7giQz4CFACJj3mZYnuHDCXSL3TwHR4UHvp3bizPikienEnvphYcD1dxsqG1tXST2bm8fi7foRrpsa6onZaFFX",
  "key17": "527q2WXx8vEQBNV7vzy47WZZhfNGWiVv16qKFoAQU8ZAgJsATdUjaRwnF2gKcAmAtUdprDbiVC2vTaPt6eKhkiCL",
  "key18": "4CLUHmhtpanbu4Xcos1b2Z15Kp6uThPpeiuhk7NF8PHj9zG6PcJAYiq2bDxS23EN1KkRXw64TUnuFxdoBK3SnKoz",
  "key19": "4cLDMSU9Eghc15u4rXo8jjYmfGE658AJe37rQAtMZLL1pY41iyWprfxTSzTvYvSqQ4VTBrJFh1KuHtoWwFfmE3qb",
  "key20": "JuyGLK5FBUF7EFRPRAaVJcTtjUDeHbSzFsJ9c2WB7nUCwmE6KHrh2B3gWKE53vqSqWtSPpd85XRYtWiWYPpxSRW",
  "key21": "gicKVzgFJ35Uj3K7JVNs5kTG8JhGRAkWpJajuowLgsujnHnCC1yFGHXNdtUVWzKXHsYyf3B9hEwtFh48YSF28zV",
  "key22": "282J4pDmG9sRN5Kbnis41HGhw4Si2Fwfriv3k38SdbPFunGGjK7xzxmXNV9XbUUxDdNAUDZGGjgnremhaz6fXqSs",
  "key23": "2mzveJ27TbFEdL3Zqd73n4zy4yK2AhQZQ5uBcqqGYmKLVXyu8rQ9sieSH1qHBb4fLsSiVERsP4FJARK6AFAhvJY8",
  "key24": "2nnb4s91pRD56oaqj76ohBfh9rhzpewfW4myDhS5mwjMZeaWThpC35V2xk3UcJWqWSJTo8cj5niTsU3p75yFpz2q",
  "key25": "4cnzwBNvf9wY6TBZHgPu2XzFpqr4aLpd645YfNqRiqcy98TjKwBbJsgwtyG4tVxFVDucEMcw9XpVT7aTuj4irzbf",
  "key26": "23dMSVQqo2Ya9XmHD6FuXhP6FdSKvzYWv91LM6mn1FEN9wX7pyrHRkhYz5oFUiy4ynXk3nykBeRfHxDTnsriUh7Q"
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
