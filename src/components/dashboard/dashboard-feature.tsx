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
    "2JhxnZWG82CuoYgk2LrELpavACXauouH2pBdeGaihuKEfVLdXbbpPMzNsef8GJPp95dui4Su3yBAzgSkiJKrGvso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389KXygUxvTStKjGDtgUC54AnbkasZRTaAovR76Q9ekNouatbgmHr9bbujD2TSQ7YPR7UVUnehZ8vmecRJh9veRH",
  "key1": "2MtP58DuFASVjHKsXwRuYGh6SJyQiLCcRoWxd82GqzpHkSohiGmqnAJ9fDhPweXss7r2HkExxHngigbaF8EYfFgQ",
  "key2": "5NxgTkAKJa1JiUUzMxfGXtNmZ5AMhJmbkwHbbSEsQKgHxWMf16GgyhRbKNvgWg5Jh2FKcc9NUpX8d4ujuXx6wZCn",
  "key3": "2FHqd6Cifksjb7bbnhgBbm3NpKeCYSGsDzKv3Gsoa4z8vw2c5nSQKE5qCpEs77VEzh76FDJfx1HF4ojh5HRjgnr8",
  "key4": "LpSX7LHDGraGCHiJC1Dw4VE1LgiSSqbE5LBqavHiU3RQudgcmYcN2swHLW5SfinAmFYGzPhZBv57Qx1eDrVChSK",
  "key5": "4Sfd92aRCDzYHy6LmjQN2KASFhQPKLLChJcFbchnMwLGM2gGqPphd5hFghRt1zUjDmG5PiqPSJfXTfy8jjns3VVz",
  "key6": "3bPiyJnP1TDp1VTgwjdJmsKFiqhnJvqtEZtMwjYfEfZ9n9G2UJ5Fzv5fTkUAZFB1bV5pU8TfBBEUckHzWQ8XBPL1",
  "key7": "vuX8nHYjA1zMxSQ4MJHiu2gwxnaTvwUdnPjRWTLQYUFdq1TZX88wvF6qpq9r82v1RqmamZLUa75YuqZANkRB7kL",
  "key8": "vj469cjT1wPWzVpHhJtJZEhMmLypPz8SwByMkeGAaChnF7jyHcvAkWbhF69CXPnd49H4rkBJPQodEYT9nmRo4cx",
  "key9": "3uzfU4LRZXfJG2S3NYoDZ2JBuZSxZyXfhHJnWwEusJAN3BoLXBdYHdoRL9WqVvZwAi9For61SZxwQsYoPFpUBG51",
  "key10": "4NFfMnwYEXw1DSTXV2CdQhRd4s67AHsWxmTpUokyvzEuH7yYEmPYgi3Zsv9dPT9YweaWaPFxf1CPQmwkLgAJF1h4",
  "key11": "5zvtFuNtztg84D6mLezkLUKxvsqf3vXZjmuzCoFvvtFtUB41mFfFKn9S4r8hGcPSww7XEMKGgbLsXmo3aocqN7Nt",
  "key12": "46CGtN2uKY5Dq3nV9C6djdm23ceCPD8YivYp8REoXpN11M3z2yM8363cJPW1DLBLMdB5pXEoJs96TC4wnuBFRaMu",
  "key13": "2pMmffhPBPv5iWyMJxeE85EcP5hrgBcaVzJuwr9h4tEv2oqWRWUA9Bk4GiKVo5nZLguVyXTf5XM5LkhoResnyyUV",
  "key14": "3fdS1vcjZoJikgbRqJR1zuuxBPkSbhmrPB2Bm3kfadKuv25i2kuM6FD6T8cY1fYNnzzVNDdNAJJGNBXnLH3v3BQF",
  "key15": "pnzkPKePG4U123EeQ7JYUfR3Fb6wHp7jFFNCQT3JLQcRs9mBamG5sPDkppzaqCNzVb1dWHpR9Zrhbweg7ZGTFR2",
  "key16": "4fZTd86A7jasxxkoYv7bJmudRHjAYQM3YiAECY1MAa2n59UHS6YRnktg3bRg4mPd37Rhc3sDYoEdkQh7hPh1Y6Yo",
  "key17": "P9iGnxjyE5w97Wi3fEQXDbMV4N9TYxRNhQvdBJfbSeoQ8EoSoyMLRkz5pPh3AFrtdbbW8Xkszs3QLW6TFZjT7C9",
  "key18": "5QfNp6QfW9ysvULGUEqHScVXzNg554sABK5ZMkYndEXeWeJhUuEiDZTctzX9vaRG9XoEWbRCDqwrtkK3nZmJY9gP",
  "key19": "qvb3sGg1S5ZgR4x4KQk8V4QB7uTvwTnVWMeRDGS82w5UMWnojybUxdHtHPYDHn68p6uHx8YboPEmTnKDgjXrG7u",
  "key20": "2Xk5p987NAtzUbjrbRsZTLER7uxeZUbgK5AKYXVjuMfQTZyBcNc4vArfYCprWxym12Q6SwmTWxMbhxD71aKLbxx8",
  "key21": "4wRWjsAG3JhUDAPp2etgNysHZcqazyjbjmu8VHcwMN86X17AoWk3iw1S3tBTB1NzKXqabDLGr3xv1shHeo4eBSyM",
  "key22": "5uH8TZf1DvziBvcvJyGvMkNV4UWUh5NyjoRc4oHU38UDEFG2ionZZyzZTk51DJuufm7hXjnU8V8J1fkk7HJ2oUEx",
  "key23": "65uyL6APmCM73jeKJQypzvmVGYKRU6ZNY7cFY4FdvkeT9Zwu48Lm3tP6TRGJiS7X4f85Y6fzQJchDL7EA6FvyN6y",
  "key24": "4ZYHtVM7hxLq9g4o8yp3arSeGnKnTQfT8EfW2UXj3x5FiYbtArhZDSpKdJRZnbK1xx6ucjFVerm6kTq15n7kkiQw",
  "key25": "5oBoCiaih9NyunSEteVwQD3PVaL8DwX7mDTWUdEVRNzADMsAkzYcJHAkXGxwwAynmNroSYfTxMxGGoUbCHL3RzHe",
  "key26": "5Lw5Jty3hnDQzZW8PCwRFy6RyExLbyZqyGB7gVzurgSacyxUFonzdQCstqqgnU2FCJ37YcgpLfp1tY6sAzaWDYYn",
  "key27": "4tubmWtKquwKrTMj1xeRWyxyvSaDUVhdHb7U83Yjsky1hSbP2amww6xbvYG6zsRQbyM77S5uCkZD4LkDvRQ6yMRE",
  "key28": "5Px9govLZadWyyuJQjbs1m8hEbxQv56gWTGPtMCqUSjxrWTSefTgDTQCMxjJTJgk45DDS8Yd2zJBcgwTBwW7AWg7",
  "key29": "5KrxEqgCjqmDxxoLYdWUEQLL1oG15iTD5bLeeHvH2ZuezpD31b78PEnjEY6ReoGxaMPwk9G6eLgAdhUvzKQS7t3y",
  "key30": "3BRVdCToU4rbVsjb9UFcmmDASUo5gKzFT2fJnjkJQW6pG5t9uZqepy94rWzDwi2sbRKK2yripaRSEcmPxcNkY6ib",
  "key31": "4Q8mydUo4t5VrZG4qpQmk2nQeYJjQBJRizqyn6ozDn9L1W2SbWv49d7wCsuF32D8ZvsW746DZWcsQZQViL1GaNd3"
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
