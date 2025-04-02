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
    "D5UskiWoDpLPG6Vt8LMa4FLLe7QK2W2Dm9qrrUVRGh4dg54o6qTbRoFjibkWZYNaLDMVwkNvdrBEK3g9TbE8BdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qA8JojkCzicTtFVh9oepb7gXXZycdnRmpGrH4PwgzdTN4Q2Wjx3ds2PSRUxqQyAfYDnZUc6ufTWUii4ruCK3jdV",
  "key1": "5bpXL6UMtkjB4CqdgyLNsXtrxYbjyuMyDka8MvEGCZujW69od4XXUvvbV5hdz8pVUocdYo9EBG2XPyw96XarB2N2",
  "key2": "4vwwavWaUgKyhsrH34BkUUYVR8Ca4k7teJr1gSrcwScfoSGfcoTNqrY9eQXvbBANUfZ6K457MP981P4yKhcot4kL",
  "key3": "3UkTnaDKAnZu5QtEYoVDbwm89f5rJSmjph3L1efovnyjUhRYnNJp6kq2rfJyehHEXvXBdSd1wK22VH1srkZdjth2",
  "key4": "49pT6PYkoUbgeoGXv72pdmrshzaffRnJ9FJA88dtTJsMSVjtcambmVzB89FJg8xNPYJPAjCcsmowhwgQDecBFgpb",
  "key5": "4ZbpY7y9GLQP9tKcqQ8SkJML5ZVkME3rSpZeK2zRCizXxUYbKTHQG8pJutFnwzCVuE3B7bYBuHXa5Qea19PHGWmK",
  "key6": "4qQDJwYCaxtzscDfSpTv9ScBphNwWbaGE9cFJsVYPhdEWPYAdtxR3EugMT871zsPr78Kc6BBs9us4ZgXgBzdVZtM",
  "key7": "uPgysbnnJn1ZtPNhgk1L4qqr1Bh5o1uDqzsU57nLTcC4KRWjyjV7XS8mS99pMCjqeakvtC7yMQvFEzkJfMzwiDb",
  "key8": "3645pkbBxSB96SoCFZkWTZfisXG1NLcJck1Y269CZkAphM9ZTf2xPQaLp9LXkx2k93nhk9AujwvVNYc4LM4CspjS",
  "key9": "nvEWSF59DfuMu3Fumsu2fDscSu6TH6K5DjsE75YUYS8T6vjACMg5R3yzKzkdjVx1z6zWiqR8QTMaLZuLH9pPXaS",
  "key10": "SacEbXgVtrbH3LdTW7Teaotu3kUaj16YDnQxXekaNRNZhnNY1nvGgm6zzpoQwGQ1EiDHFK8w71zvE6zoweU7asf",
  "key11": "354qXoFfrUxt3RmQY34PGNtC8Bqfn34Cx2sRaFMQpHe8xJ2NPt3fMBSw2ZKwXCoUC8d9LdiW6SQkT3m7ZGJ2LwSg",
  "key12": "r68tBorY2LRPkNqeDSYaodabEoNT9KQdgchx17mujHPL6PBJ1Sn5sq3WU3sNTEoawQnYpUCCz33ZGpYwRo93LSE",
  "key13": "icoE62N9TPTpMg66jBoU6BRbjP5bq4GqVuQMK6YyYMwA6iYbyURwo2bqMnSrxrAyYhgx4gGBYcDDeaXAxk5Hspo",
  "key14": "5Xwn6Q1zDRD3rVuGVDFt8ZvCqkHTBmW54dp1qMacDRdUWZRZPhKDjX2G741VERxoW6mGTCDNcUUnRSvHgWH9Qv1D",
  "key15": "5XbgvoA7ieYZeKSEur8dfoVXjNSEBmxgHxhszmG6JbQsRrVSRhCC7WQeZQykAgYhuaiNdtwPxznFQnQ4vP6w3B1C",
  "key16": "3c98ApyqA2ve1PpbM7ZeiXHvyCr8Gd9MLTw8C4zTpST2YU8BPdd5qYQD5fbxRArG8vbZDTR496J6GnLLBXFpR1cw",
  "key17": "2ZpyBd2JfXyTp5RhejRvVoxW95n8cvxLqxZdzPbpqcktzoL2j7K2wHho5VEuq1yLhULwQ68cGAyPMJfJt4EdsHmv",
  "key18": "5bMW7Es9xPXYffHBVHN3qE3FsU8cvgUqZCQH7K4fbtXDsx4prPCqZAhDPitoC7Zgydvk8b448yBs5ufuNVjyVmYv",
  "key19": "rCG4QGGPL1tzpbeoRWzFLKNc1CUkJcs3ShduBp9rECoGsBoHB7hMLxdQ8STKHRUMqoBe33JSMU6pwEp4mL8YoWG",
  "key20": "28gAEBo7PbtngkYfVkq72gf9DZmNaxWuq1J6rinAnkmLwzNhm32JW5TiQewSGP8u4hUaDg191RSMFpfEkabYQNdx",
  "key21": "2rUvbvLXx6S6HmfznadXSS1n1kaYoGBtpmSM1f33j2XE5erev34A57aT5U7seZ28VT25NVvz9AL6Jhd2XFDWommR",
  "key22": "5LerYQWme47pU6KbTYgwmdVVisGvZ3Sq9yGQtLtozZvVcoeiyWh4Guoj5KzRf1Fb6VC57sj25jyptUw9mze3JVSk",
  "key23": "eK915wqhNzfGeTNPvLfWFmyTycVftA2E4whYvPtmVpCEeSQXkKNG7RNzY6GZ2kipJLQngAaxF1zCgFe8dnnGzBe",
  "key24": "3LbdpxZKjYcHAhJKCW1ek31Fqdgm9KgHWyu9dKaxoKhRiGkTqp14gKaoqgfnqm5WV1eD7hcGN6v3kjqJ2f9Do7DR",
  "key25": "3JdWftHJyQqEvGcjudWNJwZHzWfpk9S1DEjjCKc6MQXtLnHJQSHthKwEnrhDm1dJxpHpqWUjC49wKpqTA829NfBM",
  "key26": "4mmHCxibo4kSNveD7RjQHSSzEmbCE9Ps58CXChuj9GTcFyxg2wSchWU5EhrxV4reen1mDja5UxQMN6dcxmXSqDd3",
  "key27": "3WStNkmY7YqVwHD5GpjzV4DtiTukFxBKtrNuVczpjE6Dx8qPj7LMasX1MhiUgtqmpe572P16rhTpbZ9B7LcADY8Q",
  "key28": "3A6ijDSZU2ZqcHQsGrUana3ZBUsHtrfoTvifhcf1jyBXEcEq3noH76xFqVDmsT6RKVHwjGL5G7bKJLbWn7BtSYZg",
  "key29": "4AseczogqZZSEfywpC1mJwgNJjrME56FZTG7GxmydSvb2syr9VErji6EJkchTvE9VEsog4W7A1AwAfkKV1ymdLif",
  "key30": "4q2x86tvdSVDyonEFxLRhGf2644ZvhqK5A85v4euqnSaT366p2KCjN8UX2ktEdHa8jiLXotbYSFMak6uGULYbp19"
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
