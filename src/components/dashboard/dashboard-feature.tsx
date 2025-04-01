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
    "2HLbJ24idk5bWRcorW9SntoVbZALvve6G1vwWQTgsrMKLEUmmZsBqwVA6ZuudsCwjF6aiheQaRryT8NwMGqHFnZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZLMQ1btAm78uNzkidny8mCyho1FQg5bbyBXZJ1NMT2XYSbEGfbKUxvZ4Vzd3bQ55ja4b3GeezKoCsXqKhBmmDU",
  "key1": "5KqQ7eBmWfxJdkUKLEsWWFahNUGn6aLGFK5D4TNE5LFf4czMsEDAuL9FiH7vL9xFKLXogeqm55eD8Ye4APYWYG7Q",
  "key2": "3mxbry7L6Jc8majvR46ALnPAy972nqp71ppGx9GdH13QjRqWP4EPeqPPM1BTehgSxsX7PU5ZGUbp1RfjdtLoJXx4",
  "key3": "3V9Ab9TmVqGsTZsdp8M6xkwTAKHQ7VmB5Exoj6HKNGHH2c6v8enHnixHckWrzZimaQnvHRhwejfwvzf5DhTBsnhW",
  "key4": "5BCky9i7EyUN2jrAdrL1cP76LufYYcbmHFvK1Q7kpKJThdc75Gfvh74EVNgW3PqagArhoMsZNRHQW1YS4XWGyVGM",
  "key5": "3ssrZAjofe7PdgTFkGNBmfRvycUfMvm3TrXsMzHoHUb3Z64YoYAYRM754q84nVJdXetGFTfLSGrCTNWNbGs38Dan",
  "key6": "2nHT5cixL63wcXULbbH3i5tPHyzc8eKWztbfZW9LuQptCMRQyan27AZLQpSpHxTJBFoNrGNvj355M4WcrJbh8xM2",
  "key7": "5gDyQZ1WwB7LKE7nyfeQN7mYUHSWxH6dLWr8wjgZf2KspyYqHR2171GyKkysngi3vE7uYNqQLNKHtaR4pjexjyY1",
  "key8": "3stf3UF5mC5vBVjD7o13YsqjGb1yAy96QwRHxQuayBektUoiTZJBVnMHJyZAHAqpW2yYMyKKRSkdAFj1JQH58UCY",
  "key9": "263tv4jaBhbvywCQQfC5shMhQoYynYhWFvTMp3hn8wE37RTTSnDYAbq2YVh9JDNDp5VVGNFHx4mWMSpNa6s5wvZM",
  "key10": "2qTgiBkenqi729jFPqzyZPADcY3XFH6JuJ7XgyW3XksbQvWDxYsyZts6o1sxwqS9Y5JBAuroDYrfk8FcfDQb8Z6E",
  "key11": "AeiZteqnLbY4GNJNkNNcZ8ZAdvrWhdGAUNt4kfabyXgVamCx21YHwvo1oD1s1fHgy8hyZR8Hsfe5PJ3NfZiwuTy",
  "key12": "4yHC8R7Q5RJ67BXynUPoSwVTgL7AEsQsT9qnrkzQe7ziHCw1f57vXmF2GzkfqsV6tewm6purodvZ8HvM8zAEqhMC",
  "key13": "5Lz5cWfyjBNQJQPJ8vznX8ACYBiEEAEsqNPznAa2NtZrZwRyBdQHHvZZf1AWnuDaeXJfsmXgCXFyZpTmZzpexkob",
  "key14": "4vnCzwC4RN4fDu3QPo3XiqpjUFkWrMRzHuj2QgjM8QWqeNpPCKG3rwM8hBCVhkEsK5B1x5NJsHWcu5qhmXEbNPRY",
  "key15": "5FTF1csfAgSFSzPakHn44BLLqLuqDXmSPoHNBURZG5NneiRTcGUhEYj32LebXn1U6Psw7CfZNA9dr3wtdSf7LpBw",
  "key16": "5sC8Z1Qt8RheQqmhHKXH3TUNiVHpQti9Zc52hQKiTKJ31isqe29Bs3121gKm7HRuvFX2hqGTiDGLXx2EXQMLzJue",
  "key17": "3GZJndJWNV3JXmAQvao3wjoGhjM4R2Jsc6ruhoN8SiW9BinRon5iUBgRUNskPrKdsyNmrKm5M75Wnsx7nRfxbVcA",
  "key18": "26ygA2Df4jvGYYVv5woseDWyRsqYAF2NCDfmKLTYgHiTR5D9aSY3g1fuMqVk6ntBDkhMoQQHzL2XAc5dWdRwA1fp",
  "key19": "53DUWmiFqvDXswicZqKrKkTq4oQiQVD8r8arALwgNu4u85yXZGzkqmagPBGzex4HrQZbZm9QnWovydb6yVH676iX",
  "key20": "2arhovQGdWVfpTMxwYMcjEqiAJ11ECoyGbjukUtbaZaqBUw1ay8Y6cc78FHkBtcxavyPigduBsc8nw5GTpS69JVr",
  "key21": "3Lf77pi4wzKv6iJqLhi1Jb8i5vqcm72UA5ZM1h37XhRKpHGVyhJf5uyZeBD5sWscznJnAALnrgBTZzZUhuTdqTCY",
  "key22": "4hcsoqh1RBmFQaXMbjgzCvGm3dYdC5LaHQJDfC4NAEum9eLVD9xET4hwHHCFbXMo6UNFRXHtYDnYgeFvvXu2cWiL",
  "key23": "4XkersPQemBvEYvwhDa96Eku9ztpcYBPS2DBfpowHCENetmyCXxrEcEyojtwUr6SZ1UH6m6bX4WyzFZtS7LKJu6X",
  "key24": "5zx2oLj5ra4evq2v1drBRksgLA1gQ57fLU4pfaxucQSEJWwHLbAhMqEKH2AzRKvG35H9SoJ8kMMN2YsHFSiJqfVW",
  "key25": "2NNPFCFPL8Y4zA4pbgM55DSAWAuqRjcHPGNCvehs9wGzLHwTbbfqzM96RE2gnMKo8VdAL1Lc62b2AfwJFpB4ocun",
  "key26": "5tPjbDzgm8ad1zLNmyWKk9medALjcZv8J8YKqFwkW4U9YwxbKZsmjPv55SvUUUpjKLiJE3DsuKFCQ2LcvkFVB78",
  "key27": "5rHNk48WUSPpnumcqzpytJZWeytm2p7Xb4oe2UYF7Sdt1zFWbB3B4rzcKmcnowT1eDM72f3F6zfSLdDnnRRrgEK3",
  "key28": "2mHtP3NBrSWbErQZcyLUdZjd7goHLXCEtWQ2wJGrkcXg6skVDdz9doVnWYxBygqgFEdtCBQmugXxEMLfwW5RGWdK",
  "key29": "5Zmua2EUjtSVaT9rZ7pv29vnDwLEcdreSZyzakkt779g2Q4BGAgYih3FXcLTnyC1GwN4doiAFLy2bTdhZyhB6kHQ",
  "key30": "3njK6fccyfDQw5T1X4dBNbt8vM9gT6ErxoEPWrGWDH7rE3EVWmLKjUyLA8EgvtnQxsxY7hxp4JAZCHRoKx2X3PaG",
  "key31": "2NgnbsrCjrRJBbyVcKTfENubhxrT4zE3NnXcc3o2mTW6gBVksxqaqLZfAg6xsAym6xBaJ1xSfZUuDLrcwTTyAcdV",
  "key32": "2SVMH8csmRUYMcEGR6uQtWJ6DXRYez28F7NQo8Lb2H8m49gh83CbD7whpqe8EqEpmNzBUzc12YEzSTAwVzVEdgR2",
  "key33": "3wAYC5jgFayv9DmUujE8Fqkyy1F6GPo6XYKhnbe8uxQeDi9yio4PzJ1Ck3Jqjq7YJNVPm1KW3sr8s8mcZdaGzjme",
  "key34": "3sDUVYziE8goEtbecuVJZoywsTnHFN8r5FAqgEAhj7Pzjo5zHc7NfybmtBhQq9LFRpGWq1tTc7Z3seDLsptstspD",
  "key35": "4v6UMssWw9GzjTY4s6hjV9JTBhw3K8K8CK6L8mCzGdpYq17MvsgAG9h1aJA45TgTAAnKu47A6ChG6nwtun6LQjpt",
  "key36": "4tZqL1msQo4Est8WjRxTdZekPjNfA1vyXkuXWEq3tYiSBka4C3VmqjZurHJ9MPbrc1szknxF74u2C22h9wrLt5xq",
  "key37": "25uECyxm7sn5wu6Ag4kc1rSz2MpPoqd87atG7FjWUsEv4SGTh9FDs9prEbBSANy6L47LMCVeRKAo7SEpDN3QVr6q",
  "key38": "3rrpgru9oz14atnvCDmoqYNw2XSBcfui3oDn6Zb9yyD3JwVj3MC4N6N4BPDyj8JT8nkgACm8aQ2o2a8rSbpNbCyD",
  "key39": "2WPFcwPj8HSnfgdNiihXSUghHxbDGbZxfiQpZuzj4C6B66HrYtLLUSqVgM4gBU27PQeofjMpBdxEct42xysgJCaZ",
  "key40": "31tLz3TgjTeKbH8TtXM6RPpLifBWGpsb8s2q2Ayzp1cmuG6HgB9HGBJbwLKJqjs9UKiooMH4m533eAe6QWcDPk1S",
  "key41": "2RxnesXXnPsiC43dfrSfCcCtPdCEp8UQspj1V5K95VZuzCYDq5ZKJewZ8iUDmqcY4CBFc3Ttbr24o2otjPfUeyVz",
  "key42": "Tm94izPR5QCNpi78JkSvKpmKc2tWbtKbe7wvj75yi7kDajNxDEsfJjBWrkUZf37Pz1qSmm9qYK2FPhuovEjB2Wf",
  "key43": "5PsQFDZeyZmu86iC39osvZApQRAomLKg14aDGv1E9S8yi96GHZsoF84CosDAVwomhnnzSrKXosR4cRvPYzpVVxKC",
  "key44": "4BkX9kCXp3tqP3u7bz1cMLu9oCgcFoQV4YCYBtBBDUEpw79uuAnodN91u7neAZ8zo4buMFmJuxip7nSKboA39hKX",
  "key45": "4sxJDpF13HorX5b9zmegALnbaJc2t2sq3SCxTQWVsgd4y582a11oikZsNCGpL2rpMmjCA4eirXxNjBojQeKnKk2X",
  "key46": "cCBi6JzaS84dSJPyCfTHBFEYADdaNzHjpdBs5MpNYXX1DWDfPM7mDSYAwnXci6vf2wkKghvxDDN6Ru67Wx7sEtX",
  "key47": "4H4uUMxM4v7TU6J9FoKc52a5bLTt7faRyRDZjuC7r5ANwSARuQGHMc3134GDWmz3c79NbMuahuJy2wYKyBnaEbvu",
  "key48": "4FgFWFWDnGJFCFWG7fZX91xFDE4GY7jZF2UsuJnmaAfQEHhanNV4Fxk7DvmzpPwC1Wg18QLfn9a95gogyQzADzj1"
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
