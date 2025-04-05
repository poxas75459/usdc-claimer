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
    "4yEosnnB5Qpy3e2oH5JKvkyQ4jyD74bbQMZwn1GgoNkRGHg999LrrQq3ATiBLyXgqbxF98o6CPe4PGEzKr3UZbDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGwK84YeN421g2SZaruztmhqG6ZchH4UQgp1ABxvv7DjvctPRMXnvezFaLSMe1VEToHJJ2dCadKYW6Y3MGSWPZ1",
  "key1": "8mAZj3a4t2xi95SgEENJGY2ib3Xx6vE5kmGYJ82M2FwjKdgpR7JazsAvVTqCTYA2b9Ycu6puWaTLJTHqMkUe93W",
  "key2": "4fRbgkKf3SHmFBdwEmtgRs2azqXgfbNhHwnDB6vSR6uN5HWhQ9MpvVFcNuLMYGw3B6jXM4BvPzrF5U3eVxK3qC6V",
  "key3": "3gqYCsxVEsrS2SdMf1KNtUGjVYWKuZjGbiZtPmQzpvhefbfyhBrBbWB1wFzxxCEV7sV3WzwfebBZCy4KfVcx7a5k",
  "key4": "RaYsEZXJJpq92Zt3iM4D35Zd1PhpzG8iBbziB8ci45k1icRyFM2jRy4vPrAX1LxZXfe9wHthFBhg8TjCLK2eN7P",
  "key5": "2hMs14WLh2W8y6y6Lt9wo13cv5YyTe8SJeU9AMEnfkYDZ2tQS8VWUAvV436PTmJYTtzaVn6vgRv2cCFTu8rgvHAw",
  "key6": "5mWeu8Rkse8XftybbsPTAHxHjGJHWKjnytrG8kMisEJzzLD1Pj1zvVyVJJzUvoHyyN4pLxdgGSM6xXHrRhXSPFM8",
  "key7": "3FYtKVdWRG57xgkZUJqV7Fx5nav6RQSyH2Ukg6ByL2hidMf7UPMqnacPxEJHEezz29ptgrfuy3icZSuzyJMmLtwL",
  "key8": "5A82vr9mnCXTdfr6vTh5JZaPV4FbaWQYrZSJtMF4CUUdDK6VEDvPpevz5iYNvegqTbYiCv5mEUtCkWtQmY4tfjKU",
  "key9": "37AhJ3G8SeSzobwT9kb4dHHA32z3TpLYxFipushww8646o1RL4G4BMywEH4H9KiToo1KQGC8HLSjtNG5utKNW9Fu",
  "key10": "3HjG1T24FWkjJgdZ7kBqV7B8ua9pKfCPW569yqFGP9f9b4ozpZoTpAijmVw7azcZ9n1CGEeRT1ydBbswvmXuqFE6",
  "key11": "5Sm8QEXuWhdCRz1Ysmkr7D8rkHPgcAZyrnX57PL2496HjtcnrXDXxgXjR69a7aJ6CJoAhv5qCcBNRrm8v6Z2JbpS",
  "key12": "5Fpm2R1Bs4SMR2fhdFBLyxjCjAsSybjCwtKE6yE3BEVHZzXvfsT83yckYsJh5y4FzgXBWqkYM5F4mDk9Fdn4FMFL",
  "key13": "5o8tLTfLXuRqgnPzLe1kVNRiDcNrxgizTcxUAN7jgk1JNEg2FFKXAJYkFFfUK2jTWDAPh23JmqpYWYkuUv6ijfu8",
  "key14": "TGPnjjc8Fpos46h7uETodHbfDXb4QHH2LWftFC8Wz41nKF8ihzoNuonmHzF4c2JZhatUHEsnqdxwmj2JCTFaF4A",
  "key15": "XJtQZ3wawJxqtx1qycjXSSr2nm2CijdBYfsLToUKPnYTV8GyY5JqUPGchVYNrTGKvkkRKkiho1vZWimALGpTJUA",
  "key16": "4NCY9a5zyg11eQPEYhxaiFfxuxjzt1vJoUAkpw8Qhmvhzy6dT49sYmsNSVgNdZK1QtH4rW2rhBcgDXLgdCE56MLW",
  "key17": "63Ev1KaVXDDGu3tEkTVx9WZJBhAn4VTN57nf63kwQ95nJ855TuhLTwBgrbTZQ1dq6LKZPTrX6CMsLXfZXwrsgAkx",
  "key18": "5Xp681EXBURMizQy85w97Q7knTM5ELnebrNVTd5TtVNKDAjAT8WSqsiLtWe25p7EsaqXjpDmuR8fwKA7QCMipLkX",
  "key19": "4HecmdZ5smbDUHk7yqVyenj3AzUADWPKZwY4S9nyj2AjE83HRdiEAX31HsaUB23yPdzuAHNsGcfYh5nJUiZqNiCh",
  "key20": "3e2yc4XJVunL9gLD8b3uyHk9coWkkvtSVWpT2LJS5tgK5Av5kgG3ysXLipvNYQFnY1SAZSmQuoWQksKYRN14D4z3",
  "key21": "35zXp3WXaidGj5T6zWHqrLQt4onqfHp4x6bQX3xiMBeNfEsEsuCJBJeaPwViQ3nAgEAqJKPVhmviPgZBfQZecuW5",
  "key22": "4sVfrffUBFHdUtUepbYuQbJQLLZW1nGPAZFo9ShEN3rfib2DhKiV5Gti7oXj8fv2FD3Q465KhYTfKXL5Zb82P1mC",
  "key23": "2ZJYvJEerkLEBXT5C2uSgpg8CPuzxLfKwJ4ArfWrd33arxzvCHbtRncfVwdS56xhhy7v2iGcB9Kq3cP7v1WmZyxq",
  "key24": "2Twmhs8ykTorCxRSZgmNd7zgiPoqv1MtKUPG3BTvAGJ7dMqmRCUwf19dWesC58V43gmqPRfRZT66gnySAd4KTFNF",
  "key25": "MU2F4RYzdsVs2JksHbiEZZfyc2Fxj8i6gRG3nmWi1ypDm3KMV29ecZatrbNxgJmUXdtXV8U4PTPc3KAc7oZbdf2",
  "key26": "rbbf8v1uv6vN7neEf9sL7e9Q5tQbUdyWc4SH8Ym3kMMAbtqEXCHcPFbW6yznFFSUcmFYkt4nv89XmgDzFBnCLHV",
  "key27": "5vpxUeBVM1vtTtYHXfFu6QN7K1qkyUnsSjcMYmitWpRf28QU4EU1UJqetrcU5UEb7NKGZuYS3VZhZdYBs1qMHSNd",
  "key28": "cPdhUPgTphAxedF8VLbdJGMkZ2o8rqjjhGFgTEmqiH5PZd2odo87sfRCqddczAX3HBrwCv8pDmT7HnDYFvLCjnK",
  "key29": "47T3UF8X9yYLP6ZMsbVxcHXvjqNi1NUnGqJ2c99m8AewGQXPzHbQZ6VJ35EpFb4fs5DUVsWyqyU8KsZEJttLGEsy",
  "key30": "4k224bbE3aQUML1XxEU1SmU129ooUERWBv81GB9hrXHDtHVm7oQFQXYc2NQpF3iJNnusLkvF6iq72VG17yJmjdFW"
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
