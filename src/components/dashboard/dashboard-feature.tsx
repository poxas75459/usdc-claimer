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
    "2JwTdsygcPbrcuKVBNA8nZtGbCL5LX4dSpr6Br9fAXgNUPLDhVeHi5sG1cJSpHQq2qeExRBZwnC8F22QexeDGkNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHF1cV8AsVq1HUzw2Us8nK7uQtYFdnRbpmHkWKjr84TUVQFCrF6fPWGc5tf19172CGEZKNYjfBJm333ATgM1JdL",
  "key1": "3TWkbwFt4igvPAJyboeGPVWwUEvVHrhuUshL5Pu139rguZJ4JpHAwA36RpJgmTMNjDsFmZ9pnfTYMP6qJTzEQTRG",
  "key2": "4wZGya8N1JA4mrX6evokCDc3bonVUQ5RD2rygr3CH3NYcvryaYi9MEQWv5vfUT1hAmiLdskjGvN4AvoCeYaBXhVr",
  "key3": "3tRA3q5oz2vUpJRcyB7cxcbTtn3EjiziuSWxkfvLsSBhTu9HLhVFw3WwbzFoPnbLKzzweZzRYSWH9eHfMmNX3HRg",
  "key4": "3simDHa4jo59iPess8DN474NbCsMnZBNZ4PDs8j6YBF8jmiCY8bieHNcjxSDW7Wc1U13ozGM7buw6gpLbKoucHsh",
  "key5": "5X9QPQ325PypN3Sn3PBoA7R6dTaMXemBjPHPu44Y2mZWRakGK7KYyi4KiKacr4JQGpfkhe58XURjZE8aEeDSXtMx",
  "key6": "4MkTsLrsERLdcvyWwdVwwYbZjcxzH4YzDjWQQeYXBEbR8gLA2wKkSmqLQbLtkE5S3p5dA3FzxLcfnoNLbPMfkSbG",
  "key7": "2AW5svastdxmxW1BM2t3pzTg2SRs1caD6Yf8sUztmR2fiY2oZcnvoopD2PRkon4vHthmJBipbtktotNMsH5yWfnp",
  "key8": "3s2a6jJJ17Hz6Qo7N2yurE1WgGUw4xQffHKESuaggku4HmRwF78dx89KYTEdu5qJPpGq2XyAKnsFAdBuJ9rvYoBS",
  "key9": "2hU1u8jWnWfHNSzGnRxjfhMh8TazexxLjAEkbPQtNxzd7CeZGxsBZBZB5W8Te5RGy9akPx7exxLZcQthKRoyhYJ5",
  "key10": "3r2PMJoNYb4WYQeLKCEEJ5vg2mgdDrcN2Ex1sru7QoifRWN39d4BJK7fFAK2sZ8ewaoqVLAgZ2p2meoqfpbNqBWi",
  "key11": "5n1LnzKXJmGLF5eJgsdPT8fqS7yHb5zmVTZFsEXFJuzq6Z127zm3vy2bjJbJUgT5CLiMYvX6E1tMfLGb1w1r5wXq",
  "key12": "4p5oH3SPB3Hmd7QVHPrynGrVmYeLUQV5EZofNCys3Z1AoJM7hYJdyx7w2oh76xZydomcMmhDBR7UXfHRXWku3NZ4",
  "key13": "2mRWtpTT6XZdYF1YRJosY464Yq4Xquo2taS6KzKL2E3oJNXJwPoAr3YPpdjoxARFe9MXJtC8gFBRonEJE1yGpeVe",
  "key14": "6RAQJ1UL7oq89MgKg6KNh9VHAjc844NNhE81ngMwZLYpnTH5fp3CTsE94BeuTPPSqaRdVCwt6ZddD51k9BqozFw",
  "key15": "5ap7eAP1iZonJfM6uQhVExuM8kEncAWTZb1iGwN8Wm3vRfLujQLN8HZtHYBdK3tjFGfQZ88JAM9oLTQCS1PH8keX",
  "key16": "2XkHxrJLHPwogAKzKZM84QiEQ3xVryimPvPpUvUVGAgHoFSpCvWHaiqpq8UWamkgFDBNo8ABdxiCNEopzMaq5Mic",
  "key17": "3GRsJD4rsq599gbwn32USdBKjzgDzhabtLEbWtRQSuKZky5WjazgMvShu3qVknDJMp72y1dBPJgnRTmVvDuja73v",
  "key18": "2nSVQvypwyB98x58Jq3SsdpZ8dXiMc3pi2jJuvQrFNEdekPEUEwsvckWbP1D1iWc1H6x6uQT5Egigq7SpzDnotQg",
  "key19": "2sfEGjiw7j1djjoFoThBGdScjGyXjHahWVrNLtm9QtSbRmSqLFAphcyTx48Tjepp8kKfBQCnbrJtahXXFLYNxNTg",
  "key20": "31xVQ5Yuj2PHKtt8hBmB3VCCo6kM5DKJ2ruxFnVfmYX39pkB3NekWPg2kSTkxKa5CQkH7S8fgBgTQFzc8MXZGMr1",
  "key21": "482DNevD184bfo8S4CMTz7rSQEjhYGLeM5cdTGn7TJqaPbPGKbYRLhDG8Aydbb81SQwgKVYeFqsWtXpf89ZYKoFb",
  "key22": "64zoFjjPBfD6PVrXgfFZdu3U1pxh7hfbdSpE2hSpshe8Et5Jt9VrcgwMXMqQCdb1RnW8ane6ZJRBJVuEsNEbKaxd",
  "key23": "3AL7Af4p4qW8Gb9gg1s6bLdCuRZqKtFoMYXDHG3152YFAUzExw7SmzXvCwrRqXB6G5uhp12QV4KEZq6YTzyJyi3J",
  "key24": "52kSo8vHdzd46i1TKbxwLhu3WeS9F9CMvRDDdDzuHAZBDyJtEsbqw1gxroZvufanD26uac9tbDAGW7NsLnX4NgqS",
  "key25": "7mvK65jxbjift8PMeCkGXsMYdRu5rbvtnn28xsSYrzwBPrGWfKVfFWurXb9b8nQz2GJDZc9oQpsZek9uJH3bRXr",
  "key26": "5zTCGfL8RbCJKszEnyEZ5euP592yQzoGJdCj2mZVWA6geb4H2Ka3m2djMzZ7tZKuESDKFJpSqrCyzm55epZqUaRy",
  "key27": "26YiueYyrRJjDssnYrG4nuDNk1CDctkfjg7HUECKTtDrzHTQe6ZQHipLixe837dWW9SSEUKqdtPX7CVNW8qK2KWX",
  "key28": "2Dp9eg8d8r8gGSBYYCX9cn3zXWykU8ck5y4fgvUcyn7cgR9JqcrYKEFU1BJExP9UdXTPb3qxZsymE7REjqBYajLP",
  "key29": "4Sc156qY99LaiFRd5rxa9zv5XiCrJHw3ZtfZ72pRAAFs9ga3tXESp4uAxEpVr9WEvWQHVbBNmkiMaStzVyG81qG5",
  "key30": "zZrxAkXUF4bMSkgwuwsUWpMnWPa7oVif1aPf7Ppsb9LXodESBanjhVJyWCMdJPrykzwJKAfNBmALMCQNhdAqwDa",
  "key31": "2dpr4yszqp2DkqPQtr7Zw1vXS9DGdGPdLK5ctMAC72NBxb7KFe4PKfaGyCcxzEL4UQWS5GxNMNex16tEqxcYf8k6",
  "key32": "3wzBuGpLPektbwAriDuvv5sJUYq9WUDjwBS2YHSnhWtyLJUpjsHtkB7sow11oRDVapsqhqfeTAABFBcb7LbP6Cd2",
  "key33": "3aWoQBanB5dLg7uirh1NH81ww55ySukYrALyp198X1xUtxDVgnpAdCDySAsK9dBe8bR4eQz1L2nyiF8oNYMboNp4",
  "key34": "5YbBAxgeD5FkxzCX9vLxnyxQgcXSDWJ3TqQjorBp8sUvscViferKdD6FD8kRshU6hFA1eAtEEr9oGM9cJanGVaEk",
  "key35": "5SfYs6u2dcNmHM4snRMyG1WqomGcoW1MG3TwGbLtU1y2HDYogtRZ9d3XppDnB8xLf8yjamn3Bq3cyUoSe5Z3htCg",
  "key36": "3aX6FBfZvRicy2BWqMn5ALYdiZmyc6DN1VA1Z7ApWQQRimmQy8Vm6skPpHM8wmRDzkXpJKmcsyYecSf7suTs8M1J",
  "key37": "2WoRde8XcqDvf6kq2a9rABe9hAd8dXXp4SozVTA1XqPErU24LBfLYerD2Yx7DUeQMT78vBjZLtQHeySw2PHqrxGN",
  "key38": "3YpSxoPJnbhPopF7R3ZrH9RrWKDEhwA5veRQ15wQmimrqQWcEMXBLLmY8T451Pn2ZxjHrCsG1JQtmWyN8tQsRMpW",
  "key39": "3HgXK2B6dzxfp8eKABYp9L2ewkZHTYUV4LHuQ3SEGPZboZU9AiC2tPFvdUw5PWvuohifFqSvuaDiBoe3bx1MdZb3",
  "key40": "5rqUK51bd4ekYHB2b8LMYNqQDHctLYVv8vrNU7jw2gYLE7Ayp1DWd8DHp9ofYoKE1xYKCoGdDw7XWmvaMCoLQ4QT"
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
