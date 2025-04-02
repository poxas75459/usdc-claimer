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
    "zjGqS5xRQgpzk4eG8axBbFns2JpKVWasHFXKTjPgkwRfKV1NyM3jqhJBhDd8SjmtVeL1iZSLYrYhKtsLeSHAHXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8ummLu8A8HZFnECKgeYs9r8fQ3c8trvbyywPGkEjDarS4c9NwdYf8syFgCvNmq6FHLwo89zgArAXSqj3HSunUo",
  "key1": "g3g1WTFtLqDi1Mnv7d735zu69sJ4FxEcDWKrtqT1whDbvJi4tLYkYbZFHez57TrYQwd3yv2FuHp1ZFUjsykocJY",
  "key2": "3GymD6HJUFD7sdwAEEjJRUsmuGR6p9Ju2GwhrdLEtxdqHDvWMDti4RfpUryqh2eUSSspYCS4f5kgMzbLv65yRcDU",
  "key3": "4DDNctvgr42eXPAmSMze9H1NjNEkFNHwWzM34wDWwabxw6bFCe6uQyVY5VUh6SY4vyQEJwHZxfnPgiqUKWfmiY4h",
  "key4": "Zfxd56oYcAeAxWv1pNG7AZQSieh5asE2QEQLZx5RtJPmi1ehdWkSH1s1v2BKfsuRWrryCWwfKCZHNC3Mkbv3msp",
  "key5": "pxbwuxyFMJ6nA44qoQPGiqq4suwz2SAEDStQv5QXvCUko9oqX5fyrJwVQ6tuD2ZXi4B8DnKST6YRSiwZEcjAdSh",
  "key6": "VySH6rT4noENcSGEZdsUsJ4myNN6DctpuwYnxxsu6UqoJ43pZL5T2tu4wH5UkanjPmNfEof5rK2vMm6tEcpvUJp",
  "key7": "VxJmNgxvNTnXaa14v7UdT4goCU6PgtW2iAN7hMzMkAAhauimfdRtWezfXHp8xWNCkufjJiLHTMshZB4xqGp6gWv",
  "key8": "4wfif8kevfdH3PKWfHjJ6prpfdNKGDMKjHSLAmYKgUcn7TujAN8VyPJaANmCDNn6G7j5dXhUQJkHHQdiLTc37Bos",
  "key9": "44kbfLbMiuQekp1tUm4acMW6UqRhjc5EULpDK5Ymsmdn29Bj2SYycQ9Xa8sDRfqwAyVAXq3bppgSH1LD9kq8Q6zN",
  "key10": "bJQiyHDL3FUmBz22zU5Xuv3g2hjNEHYKe587FPnAj2tAuJBMT8uJyF81ydCTQ2vjPUH5hQay9T1K6oCYiwWTVz5",
  "key11": "3RrJaviFRYzxQdtzAkJKMX8hC76BEEs3AGs58WbWyUqNV2VBGQMXKTiz9Vyu9Uo3hwFXDvbm3zG3HnkMkgaTCS8N",
  "key12": "2mpUETc3UxUCjc1HJd6ss2PJJ4pNcr3R1grgRVwhBMTUPZC3hQBtcwDe9cE1MSrov7YZ3qCAcexWACigcFHhP2cp",
  "key13": "5kt5YqdMmbfujABEPE6FqNga9Fno9hodDLTyGrswckKcHcr5eGfrPzxrYuee4p4Pzh3of3qMTAnjGCMUnfdZmzT9",
  "key14": "2EKcEqBc5XmCcuK2vtq4kY2oHz8QQgr8CQ4qWcnW9fLePqZNGSfWTsuuNJERfVi8FZhAz5eztqJ9W8Lgu1ELTHuN",
  "key15": "pP7ByHRcjfNhE27FxgERnpYdNXdRP7LgtWiwZLUczkQtqtDdKSvaoJdpWZEGEMtyHG4d41xWR7eKzrjdKQ8vERu",
  "key16": "5PSvu1wNMx3MgL8KLXaH9ZwFmYqpDGH9aGrDfu992NhWDvX2ehr2j3AaMc92Mk2X5Xv6rre2QcseZApk5PDmEgNB",
  "key17": "KFtKtnoQLpzSvZjpyX1jrEK6e7KsXkoKNd3gmpWrvV74XXZnmVtP8BM5cTJqi5Sba7mQY6fvVVhNHj5NxJVnLeP",
  "key18": "92ZWHgcwbsr9U5X16Bf7m9WC8q5SvRm8FWfDMd8oxqDTbtTwEJEUFkryXd3e9KeS75G82ckGXtVYyaqNWXNDVjT",
  "key19": "2jAbeWd11n6MeeNcxSx1S6dhezBqt9g77YdAKey4QnryCayn8w6hXgTZBBiR79o8zukuVNWYGVwerTnek2RuQHhR",
  "key20": "2eY88kL4wF7QtenusNZTyH1dWsG6irN5haw5QzyU2BwtR4oTHrndzpRxcEN2mT1CDfkqyM45yczZ2mtVWX8qvnKC",
  "key21": "22cUQY7AjykkYz2HjMKiFStQkJExtSvueuyATx53Pej6BtZ9gvE2mXySWuiBBwv8tJyJLNwos7HoaAkvjqHwpEV8",
  "key22": "DCrDF8wZLL88DHPEAaashPiJ8A3dD7xK6icSLQaZG3VzAXw2mXCjgGw9KK1ebajbp79LbCKpfe7x1kVHYA1rvgA",
  "key23": "9tyznbEFkot8xyQipSJZp6UiV58XfYBSgSsKaNV1LTTWBezhhgWuy7uHcpEKm8sDZFMEUHcJ4dco13SApopg3a5",
  "key24": "5SSdRCi5X3NefLUrEpw2ZHcnLAZUAhS665rCAwzVjUhsqBH84EwFRVEq4VB67gjfRrsc7B2tamkunSQSuoKnh6Wp",
  "key25": "67C9mT21eQ7T87Yvw15np78jnhDEE7YgoxffmgVydx5KxJ4KZ6doKsM47f3G8pdkFBHozMkb2iCQqSDrwNoTsW2s"
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
