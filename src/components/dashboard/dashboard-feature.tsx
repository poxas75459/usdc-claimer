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
    "2F83UqgYWpu9S2bJyR64ENpHG6Z1QGPnqVLympjFu8pNUu6rcAWMZ7r5MtRzaTiu7p8hb5eKFbCjpHVZyB8XGVxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdrakNmoHtjeob51Xc1mEFyH1pveZVhWraYTivd2jKrpvvDwdyh13fxB6yU526YmqCKCB9HCbFWUmvuNAkJsAuf",
  "key1": "3GdYJRMaiWBueTVj7kPDCgf3LHjDgcy86JxgU6Qj8rbQjTSPLNYha787CffYsRQNt5yNmUCjKh8Vjobu9LEoKNjV",
  "key2": "bjWKzD9XW2Kgu5E1tpEnDtjLH1QDtw1hCJNVjFyjS4eeysCLhhJMkyHEYdC633sk67nNs7WvapE8GJvfpX2ZEx6",
  "key3": "2Leu8zz3zZZqCrgWjme9ppJjKb1ZjKqWzAZBLDfRq8JZyv9zf6xosgLhTZsNtXyVrnMsVmqt5dSuHBdqD15yXiR2",
  "key4": "49SmRHoxpmeiSpzJysKJ69SGUqr87oUZWGBfZoc7JcxyjYJ1Kmw7JRLNKjYkQuZRG7zNxNUxG8ithshzWDWSgKgG",
  "key5": "33N6Qt7jL17tj1UzbpZgjGZZ1GMa9nRRXmD5gMfcagZX8FaGX8AZiCYQkwS8THLatn3EWH77i4oxpGQzDKURCv7a",
  "key6": "3NUFNzBm39YgGTodb6XDGUqcWc1QDKGMiRDFbtwDGJEgVWZ1xjUoqsTGPrdyUssDLKbtCryVzQ6iG57rzWaQTAs6",
  "key7": "65Pa3aHTngykaw4BQPm6w5hK8Thtjk5XWPgXdEB72nLtw1Nt1hPan4zEPCVTRR2B3VpBfYCVp1cGyZihpPwMMWcZ",
  "key8": "sWp7DVQZ23pF2pNmPVWbnmcTAxbewrWw9DTDusZQuazeJvUema3cF88V1CqZLftPLK6wi1BmHkesS13Bh98PwyA",
  "key9": "2wxdpvQ42TV1d43zRkYGwxxMGAy3e1zR5HuCiexcwzdFpDmabeE4hQQXtwy3ViDTNSsZE28iQLpwbYGgfo11GSj9",
  "key10": "58Y3F5XUJB7BTf8gt8E4tFGXjvmnBgoX5HdTDT6wH62qaYGry1Exk6igXs8zq3WBffYAbhGunn33PU2QyhcbX2fB",
  "key11": "zJFnPPwcQZh3UfXeQC6ZYQrsMx1qLJzft71nq1JcEy7fQJSNL5qnhGE7N9BmvXNykZPZsV2j343r4HG2cwXgCAa",
  "key12": "5jYW3XG479ADCgY73nyU4JpXLJDLeJPFBz75iCxQsRShPAnrhN1BmFtT3kYyEbsU5CV6ZhFTNJZicMxQEAD64irg",
  "key13": "57PG3y1HXPv7zm8xMDFuvGhhLa2QbuHqsGXfZSHkyAexpWUET3yG8J7YAGZ9D4EgCoEdVw2MexkrzLcxnhpQCYyf",
  "key14": "4VAeoUqt2Csg2rqhTYaSzy14nFhFPWxa9esLE4KmQ6sJLYUpZJC2TwfHcR7VwaGJeU6KW4AsHBSb9rm7XGhHfuVq",
  "key15": "3No1E5siFdb8VRJcnvRKeEZt8TU4dRvFoBjzNC4r7i1eyJAsPshetM3YUjyK4j5tNjkymXkuEZ9hRuLVACRRJJaJ",
  "key16": "5fY2JBuKCczvN2EMddoJ57bweLjmUqopq14jKJKYQ288P6Zdx3vP9153SpxDjXT2nEsoVJAoFGut1NCo1DHJhQ1g",
  "key17": "4GzCjZwu2wg2XvZQ6ReryFPi7orVK1mbifg4NtN5LCQmHpgbjyAYGZc1oThEfz75F4rPU5S7S7B5YJyZuT3aHf3p",
  "key18": "4xWkyDCsJFYSYh9i6RCYXrv4Hy8CmipvfiWMruniyHYqfwwVF6Bmtw7Tjqkh6V557UmTEhckGJyg1gp8qrezETNj",
  "key19": "vwpppmjBPcX6FfJQUxxGD6FTrsaFinDSntGSUGfiRQFaUWTYCbGCNF9qUysVz2Dz5TKGKsEKNMs6ebTZMRwF8ZW",
  "key20": "eXvM2SJ6NDwvx6WbirmL28vnXT9UcNiKfj3texaVfp7LSYTwe5ru1Q4TM2U672pM5tzxbxsRMmfWc8vjiRdXyUx",
  "key21": "MTAPbkGPWBBBBCKtRyZU58ss7Mej2ABDDbMmrncLa4ZgQbFDoLwoPCVQsW8Bkx2F7pxuYsCSaJyK7xFdkyqArbr",
  "key22": "4Lu1W8GBUSy7tKLKhdf3TVwcfoup6vC3ekypRPUn1NdBZ5J3eDeq6RyhQYE1v9FjBgsMs9zojv6TZPxHR5GXBkkn",
  "key23": "5zdMiNNz2htxCDUVC6kvmyJNakQdeSyFWLYVPKMiADnsgeQua1H84R4spRTv5CWh1JfWS42pcNUypmjmXG3Kbcds",
  "key24": "4bZAXgEkRmVD6XiF3CQdnGuwk6VbvtWZ8AScf7HexYp8oGvRhnbTPY5PwVjdnK79Pqf3qWChrfzGQtCGnmnUEjRk",
  "key25": "z3uUFXK1heRbb6MTqGWWehnhHxiddC2Bpr75tMZExBjnsQVzq3VrqcERXvebR1bzkhLWDRD4kQRe9QTx2PH33Ye",
  "key26": "5ruDfNM72kGqvcFmD6xp7ETgzwH4LFhCXvK49XYxoXHsqXDzHKwgJ2kn48mVgW63wjoVdgKbnUuEZ9L1pLSndJEC",
  "key27": "2Ux749XRh4bDd85a9Xm126gxVjfkZaa9aN32DkjNs7XYnabswngx5jQ55kE6LqHRCsV16Rxgdam6h882ZugSZLr4",
  "key28": "2bQuW2eTuASjG8KpHj88hEykaGqG7m1rzQ7yKxYcH9xRdCG4uCvYfbryhAB5paszGaKsbbgmYogTFJ5dwkcqziwY",
  "key29": "4BF4yxR5ZWJWyhxjhFrG9wKzNZ9U3ygXHpgm8RmED6NGzaZhsJ5LceH98TYAxycZjxfGYXyYGpShQ9SZn3ERBeGt",
  "key30": "4VRTeuY1YdXkyM9QNKM671HfwPa5GsqEJZCtEdjJQjsmt1qP5nhRwP7J3YxP4PYkfjmHWaFT5gTYZ1e1KqWBVhHA",
  "key31": "2RdRobTwZhayW6NNo9ySkaWzM83ApmjsDDoVgzAoJAwuCRWo3Xpmd5A2cNGXbY7j7owrfW9coJvxabWTnsSCmi6D",
  "key32": "5DjykZrJMU8EzXDeu5Dy5b9dxxkPxzgjdg8sSJA8A8x6Eodx9QSKUthAKQmMCR9yhV8dqJo8e5JEXSLtLMBF1RR3",
  "key33": "4mN7YbdT9ALCtK1fJNQ7frvt6fWEmTYNEx1j9RCXiAgEqNiMFJcPuHbEzReKLacu1JRRyhY9hnYHH2xhLLzLotT",
  "key34": "5vHjzeGJuj7qZs1YgbcLRstBUgcBGPEk7ohhEb56Uvnh7SEKD5PfP7uQAFgZe6wvqmdma8XFapny5h73FLkEPVLv",
  "key35": "2pK17Ek9DCX8njpaCdeoHwBzFggqRiyrGqEkDBbkrSSdB7mFL7UkBnG5RztA3djxmuEbgdJuKwYurDdVdU6benUH",
  "key36": "2k1bpnuddY7tVaNgQ2dkQYDeYtWgRqpxFXpaTdNb35LmNSf566Ftnz5BNhrrh3KbeAtgvad9ezwTqdVdxszekrrg",
  "key37": "fxvV2wk6n7cMMdaJxPEcpLDvrhpodkU8h4TWC3GPpDobfFzybUN5xvJVScakUM4EmsaxEEvfwFwWDTLdd8Tbx6N",
  "key38": "3mu34PoVTTrfGWxHimHy1i8k6A1surp8w5rR78bHDxTHZGNgKsffCakEhT6c4GXNEXamTdSVt4Vb2UsZBJZBgUsW",
  "key39": "2jkgnPbnhrjbEYZKZyuYXnrjn494LYn27YPmYvGA1ApnM8FiXgBacdM8BNTo9MHSopSDTgzkGd9RG14GdVAyvQ2d",
  "key40": "3KTrPzExkHhnb79ZCcjG29yGs8H9HyLGFVQeHTNgfXJgV2kMpbWzy36hgcP6WPnfqevzioDWXjqqxPRUchSuwGPA",
  "key41": "5Vx9TUjWFvpoiXq7C8pE5QGSfe6B8gJPkVHZGpKEZwmyoYPuUakiZ26KLGjh55kmeJET5cuKxZkEoHQvtcwwtPgW",
  "key42": "5JodNYJ81m4KSncB6LcriQZCgTh64aJJdsMdFuyF4fYNQomkwLRJybPjH9LRAhCX7xDBxFTmEKQAj8szQG4hiWeK"
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
