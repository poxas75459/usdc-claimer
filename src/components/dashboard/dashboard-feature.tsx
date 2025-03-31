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
    "5e1fKaS4tdYL3SHP6ytkokXgJH6iyMHYHDPx4bZWATMkTKuKmRNEbF6TFnP2C43V22UQX3Rsw1xXWoCbphVuxbRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJ7fGUxneo7AKEFoQoT4VCtRhAAoCnp8yWXypqTrGZHyVUzcmQuahjgMXtaSb4skfZNXc8eacXer14ixw3MmUt3",
  "key1": "4r7jsxXiwNeECgUxcjAzPsdPVCUEC3oB7eyhTogD6TXFVhifkrk8nh1wnGj8QAe8YNYKR4yCoy6BRDCvyzyyidLN",
  "key2": "3Q6oX5kQFZQgH64VBFMvyxFZhFMwTtnqm7hud3juAQsracyR6c318q3SzM28N3fZugpn1hWPWtcLF9eMZpFFG3L3",
  "key3": "4VQBRmqHr6CpxmV22xHkUV21YJ13sGkFm8YACPGxLjbTNoLpDp66yJ5tqRsGBENAZRYdXes2iJcGNoZpkPos9Ksg",
  "key4": "E7LWVszoruk47571jwkcbfzuHHFHftCsCwzqBc69LU4xMPaJrcmfXm9YgDd6wfuhJUb9U1VTJX5Jy7nbxEeAMLQ",
  "key5": "4meHkFANnM8SmQJjZJNY6jX76xnafg5T4x7wbKrtTYPbSoqG7ERfLtLhe41qgSmuguZDtXGuWFRR9Zn7Se4wAQ2K",
  "key6": "4nCJCgmGKnAWHybQczVGW9A5yhZhqThV35RWMLxJKoLr3YXcD91ZBgJtsigE71zGqBNQgSxFT2MrgYT8jAnWAAjx",
  "key7": "4e8pj3UPYUvLMiZ3uKVVxDxTJJod1MvH34hzis6S8yA1zuD33Kx5QongAZbvCmChwef8z6k8ZvavJTSQW4JGPM4C",
  "key8": "5k4aRf1RfEXjMUzX4VHnd3CHKKfjfNdnzba5exDNDJmkzhoahPLiejbwNeueXXtcdgPxsqbdGp6oQNt1acvmgHTY",
  "key9": "2EnP8AmeFsKtT4278Qa8Pwvn5q1WqjScnKDmgecFRphpWcLeJbixHxQyEiSz2YdJBfSbzEHpbcQyt3BFSsXLXr5q",
  "key10": "4rwzQecN3m67jJdGV2dLYwRjeybuuhLAM7VcAuhgKf6FaeSDJqjd6spWLY1E6TAC4ZPGi5KMfDoV9QiSb8MbchTR",
  "key11": "2EJLB6xuYeeFm1dntkdJux64QQHbym9iKrQ8DZw66SPaDno3N9SsRzY7zEuL7s42LByPZrf9C6nAaTdkqN9FuxbY",
  "key12": "41jKRvqUJQJdBvyt3hHNBmM5opWZjpyhuy8dHzhiVaC1yfseS9skxRsXMyrNxjoBYcgo6962zX2sgiPkm56hFNiB",
  "key13": "2XwusXEwWg8jskbZrJphyuAVgoGGLy2aEqQJ5CR1uxaCZJbCFY3mS7fGH1nTmqzuJe3rDAH3TZpdqAg2msBW4Dsk",
  "key14": "4soiKxdRrnjdmjZ9ECa2QJrWqPx1x7WkxNDfGNER4suJmNnQmbs2ER2V6YJWUQYUraGRdxWcrWoyxdHqKFCzfM2Q",
  "key15": "4PinihEbCEyyBhr2YQzo5LNva4Xg6TKT3GNgxpcQvbgE6DfaDX9HcdDu8tKQaukWetk9KgG3wfs6ByCq4BQyQTEX",
  "key16": "2xWJzDGSxMR5tXJXzatJRbqYiGS9Cc1dVy6KxpgpWKLGCJSATQdQfSy83kpN1CX2M6v4MgYie4cv3SRHUMdjVQRG",
  "key17": "265YfKZSWtoDm6y5bwWX4g7A46agwSXGC5FyLHGu3mEXJS5Gy3NcTs1aHf7GaMztCcC8u9ec2ptTNs2MAH2mVddg",
  "key18": "My28YpCJiw9Kr6yH5BGgjBhAiNkvuDjeegKPSkRweqdz5JpuVU2RTmMwWAGdrifRAuFXAtA7nChhwhRWMbAV8iW",
  "key19": "xq9rhNXGVg1j8buoQizxHU4nuVrEJ7Y3zquoKPvfa5k2nePYdDjxEvyzEguW4bX41MGW3JzX5jzdVXZFBBz6UM6",
  "key20": "3iSLBcdVhZTUa769fiKeZaffrbawbptaCLbQvNSRA9HrctM1W8EJLdkXgj31wqXXARWEejDgQg28KsGMWVFTcBCY",
  "key21": "5mbQ5485fo53WbQnyibMwwvPqeiF6GVqb8w94DFVZHTvGDdy8HJvs5rdmpbsw4pjxSL6k95MeQ4M25JLRXtmzH6a",
  "key22": "5wJD7tMgup5Q8UfZuLUBrrFAkqK8ZLip5cQWz3gvJAktVqzbxZsHxAu6mV95qgXMscdgTBYkAmhgYhMYRKwPNgy4",
  "key23": "53WHj3Se96ahReygq6xioPYpJiHqBmWQMKzmF8HZyd4qUWgPeP3t1cMwoKSTFYpitV2uW2GD1vNiUySxZEFKQzvq",
  "key24": "5wfqgcAszBkL9pRVKgJ93xS4HkNwRhRRxrGJTbNmzKvr2o8cDSmvnvQAHDT5azW11Yu3A7vA9R4cvFd88p8VwVe3",
  "key25": "4zAURd8t4Uhd7q4FmQf8owPv31m9rUMkActedB415yGxtNWJydAGKRdMR1RbQ2QicGTXxdvcxXU8ZXG54vUmKuyo",
  "key26": "4mhLepsXN9sWcQTwfAbHrpd7CigjyhorJUVb6ScBY9RZZwPusF9xUjYsdvnZSbxGBJp4WeF8nEVYtZuJsnrGjAVs",
  "key27": "5ZiXwG5X25BXFPUqLzNgqwMAyicF4XvJNphg9zVwcub9E6RMPCLXY5qFmYfwp4yMKtqQ6xXDqNyrduS5217ez2BM",
  "key28": "66miYgdoHoyXm7LB4eKHWbLNSFf3F85qdFjZf8zZAHHwpaTkJUDPPeTAXbwBJgGHgDYu5G8Y7Cux5GrBLhwNGjSC",
  "key29": "427975itywUe311MdBQqVKRotZLCLbMc3isysZdVvr8mQB4aatCcuXm11fo45B987cwrjFSQZYrnTyQAcFjYWMyT",
  "key30": "PqYgaqLABHaTmBJtLVj4JPx42Co3XGeqVb8RmJQNTrVkt1bxrxKBi3kVvU7V3cUA8UQZykg2dgxyNcjnrv4metk",
  "key31": "4gKhigvgdA2APCPva6GddeijNXc5hjMsAyXNHdFYgB8u342URvfSan9TEqLeMdAsU9kaRDWVYSdZgBud16inEhRn",
  "key32": "1HFbE5urym6N8zumZM28k71r38h53GRcJxuww9uJqR7PssNgmBL29WRTw3RFWbrjNjTmhgvjUSEXbkYfBkoHz3E",
  "key33": "efEY2Xog1nE6zknV1B93B2UvgU55qWoGJhFAcVfr5geoS8xSF3mgukaDQ22Qcyvq41UjubeNVdGMapLBYZhTmR4",
  "key34": "3DsVSKCSZNquDXeLUcBpVr6K1kWvwaZasTmiMKZd9eVsUnQgAdsHfjfGTFUwuasCpc449t6uA2QeGGfiZk6Rjy8M",
  "key35": "45eXQv145QSVRHUtsT8y7GSffVqGz1HkbE2wrRJWRXfV37FFyfkqyiKSWuf1kySYRir3FJ6VvT4QDQZuai4a5VFM",
  "key36": "YF4749MUe2N5Yahs2Shrt4xG3Sw8bnYDDvAtbKnKdBg5VxF4pAAm55JHYNXytUKV8Kh7xkFF8oYo5Mu8UHV8XYF",
  "key37": "wwXu6tJYiH2HUYLN2sYacyxw2tQDgpLE68C8thBFjH567mA4eESbRA1EQCckYmR9VRBhW4yCECYB41UJBtGKn6D",
  "key38": "2FYKQB5JAVbUvVfDkxzTD5sFFY2CbXZ7YXFeo9QAQAyQCpVypnPRYWEE7fhEwv797yCy3FuiGwsDNCvnsYiox2Pj",
  "key39": "2C3pLNVhFWg97gZzKZakPvwxRNS8qeur92Ahorj9FwWceFcyzuxFJf1yYghFKwWTGpw2jxB3y6UPQzwAiDAQ47rA",
  "key40": "434w7qV6EHmnbyEj975NBSHmXGHJYeVas5ZNTvh1vhe6Z9SxwEkD97iyAsPEUk9B83JRzBWWws3i3tyQxVL5YoBS"
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
