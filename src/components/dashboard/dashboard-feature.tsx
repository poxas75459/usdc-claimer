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
    "3o2ob8ozZniHbP19B1aEbqZ5NDuewueX72g3zFeA4Bbp6QY1uLS7VcqYVtDv7ToprkftVKNrHEprW24J1q5Xmm2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyrJpFRbwkAN5neAWKXQdjgNFjxtm1ZK2ip82SdoCEvbt6cnKak3i5j5ygyY5kJh3AnsE2omZ28rnQTsHnhx97E",
  "key1": "2Mt1jQ91a4GRXpiRChuK8qMMRYiLYFhU2B9bqZgyzyw4azn1f9eZBrMj4M3vwEzAzHCMGRWwWvhHrt9aRLfL87DM",
  "key2": "5FCh8XZ7w6S4MwofP8mMDwDgU8B6PNqb5xjqEgb6LCghUDzXdFaPoQTu87TrFzztmDaGmZQEeywiru8EUeug1qas",
  "key3": "4kAe1yk1ioEF7HQGdLyW722nWCB2o1PtsefoK7jmZuoxBRy5Sf9ikMHWHG5uLyVjSCDnf3MeFqukzezh3QmnZ5bM",
  "key4": "2zFaLL6rAiJY45omCwNVGmECyTBUrmwk5XGif16koApoGg1xojgv9xPu9mWEREDw8FBW9be441vqWeLmFUYBvbcf",
  "key5": "5p5NvJaU9EWju1dn755LWpbENw5dMcynNF4dgZEcmJSnV7eCbUwQZWLbFE1cXSm2Ho3nSAZwRrYzJvzg2KZi8RrJ",
  "key6": "4w16Xs632fyMtVpu4rA6H9UdVR7eK3rrHgzF6Uc3ZdMg1e9AeEoKDT9RmZcQ1mghoFPnQagZQSDnqvaVJCuviLN3",
  "key7": "2NGzCvtXdY6NkADd3iqsSfdVjJePoniB8Hd9HvB9gKhWGhDWr64jGJZbRNiNGCvidYfC4SaVfGrkJDHAbaPMrccp",
  "key8": "59FknxJJcAdmvD5CRbDVKuDFEVXSzjeSpgzP3yxRot8vaUH4nhVZmVkfgRuvJDq4s4zr7BxJQh4Da8Nwj1aG9C8e",
  "key9": "4CpR5Vz8sZKF6CbKZB7ALKBT1LPyiX7eQE6FQaDBd6E7Rvbw9zQ2CKLoAAEHMd45LjiUSoqx3Nyyo6ZJBSGCWa4q",
  "key10": "4PGvNBzyeUGW3p7VPvmTr28GvhwpcKJ7BRYPpX6Usy2MBAWFYmrLRz2RyoEZ1FJs8XXgrsD1txXAy1UyuLxxhmrC",
  "key11": "YRxDdv6LkEiBqrfATnmUMcTP8S1nNGjfe4RhxRgtehRmwtZSyYYEsmNM5bY4iWTv4oWDr8vPiN8Q9HSo5VNkXQD",
  "key12": "XUyGqneGMkYHzqcjBgKTNEGu2Q25e7EDpieX8o6z9aquigqUtq78eSjromRpmUBREFegKoLVz9JzN4KZZGcatjV",
  "key13": "42rZJivAeJS1gHL6f42aYoJLx6eiSTugySoKapxFbk2QwG38okY7S63wwUGEUnntc4Y5yZdv1dmbYHajLadyVeXB",
  "key14": "492rgHxDTdRskMxCYRdi2WPiMfQ3KedDFLxG2DScSnoimS2kswRQiuikd9PUNPf55yGXsFR4WYBeLXtocJ18iyVV",
  "key15": "622tEham1uiGudRYYwjzAYiy7aemuMYJjEo4Dk73eq7WPc15MTuWtfVqZukP4qdNbTDzK6PSuC3a8Zz31Q75QZ4c",
  "key16": "3DMZaauBxZZJjfX3HG5dysuFV2Q1vu2fVb7WX63E3c499dyxJ91PguUmRJSDkc2gMTJv6RLUZC6w8uArRoD33qJq",
  "key17": "3MrzhejRJeE24VdqybTwojDoUUCG1E941bksADLWiymvKyREx6AzbDp6venPrsgcTdNYzGSj8zU3eUmNzcEHw8je",
  "key18": "F7q22qQn1Z4Cme1KToZMTMBUzrenkw6iH8foQnnZvHR7nnNdp1w6oE89s7PYG7PQPsPdCnrZhczCmSvEUKfFVR8",
  "key19": "3u1v6qBdNdACUARph1nvffY4hEiy4Bm3Q6w7ToawdFyPxCr1YamQbV7Nfdhumh7JmT58JRvxLm2yfHLPCD8iyJBb",
  "key20": "3r9yNwKdXzhoSVAdH6QavR7spnFxnsvQnjfhZy7WzzZahT9YLnEFVoJUu1hE8M3zmaGn3PXYhqDhZBZb5Et4FTwn",
  "key21": "4E5qDFE1SNMUPD3mQa5JqZ2Bf36czXPWLAqVgtGikRDL7JTU8mJk3pdBS5M2i58bSHntz4bUx5BWX9pbJXLXdjeP",
  "key22": "fpTDxMcHe95Ao1euqjhUAowaHAYNDcezU592DLH6uMKEYAtxaYL1SSjL3MuwkzXkr2jTKLw7jMVWfG2SAqKFycm",
  "key23": "3DcPZ2q2sS8qRdcFDuhqcopu9tnE2oxCJSxsMec8HqLzsGfVE5PoZnfBDoffwHVJ3t37ujgdPLBqHEXAFF3sec9v",
  "key24": "5t6wQcAvJHeT4Sadf3iqMTBY9LV2J2YG1uyiZDL19wosUVhfH7ant5VqmptXZWp3Xn1JyAmFyiwipDawZMf3ADn9",
  "key25": "8KFwXdeMuyaSN5yE4AtTgp29rTdCcaTYNqaHtDHsPRzGiBG1Quz3yqC4FqWT21hwRAz8a4rgVDWnYCH6uuu4VJ9",
  "key26": "4imL7rYuusDtzkUXJFiw86YWY4MSXUS3nf3fb8FqkMCFaFFK1Q7P6ychQHvFoz7FdD3dZPe95JPGvMJbZtZWHX6E",
  "key27": "XD8Msg6Srhp1F5UfTqRPN1woUXAt9dDWRDJMWPms2uLwrKQTc3PkbKgZEP1Ss6KFVYmcWkxp3dd6MqyngujrNVA",
  "key28": "J8sHLenja1kV6YqhW17jVRv932McABSAb8o24ku1YLSt2coxJUkDMNTXtF3vhjhhECXJqve7zBHT4HQV4c2YGZV",
  "key29": "29zP6qY9SjX5axaNGtrn1xCzHBovVTP45qGChcWudGMzRg5J8p1UJxW8LCbAeaoihU4DefhbTtNia7tEENEWBs6p",
  "key30": "4jP6AJ5G44YLK59dkfa7EEM4CexvMrDmjG68trEwA7kS8jTzTDB4M41hQTuF9hwYPN663WHaxPwxxQZkVLfzWxzZ",
  "key31": "37SF4KqU2vUZWaKH45ohiQM18eHWkRUbz5Whvqr9JyZJme1yt6jxkAMwasFZWmC2PAUMbgMri7EJ1hEuNm4Ps97V",
  "key32": "5T7yz1Z7cS1xNBhSc91aQBpNdZKkUKysH2tySauR6gXPQkdRbsDhWDjeKwuE5emGGWcBZSbsLrUkFtwdYCRjg6Ut",
  "key33": "5gq4aaQwEg9TVhB7AdrFQFzxx2kuKi9mggyExmhEnhAeRy4C38WwuN5BeV2WxrXWjf35TTWDk5V8BNLCRp9rjFwM"
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
