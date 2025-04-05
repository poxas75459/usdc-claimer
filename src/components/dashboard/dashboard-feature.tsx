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
    "4eWSJ9SBi1DGWWoHJsHFVRvaojCVvp669fydQ65HNTXLd6S89Jif7oWjYeQUGeaUxyWCgztorRwwm2V913gzvs9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvEja7eHoTQ3z5g6UDPZsBCnNPkuS7aKHtUCyGz2GkTZ2Eraq3JD1yevMwkWxzbfRpXUU3fiHgXcEF91wfB7Xry",
  "key1": "5x3n7EVvXArSAgZv3NE4Ptxd3eCb5WQSfhhAP8yva3ZaaruUHPq4YSTrGd1DGqbduVop3DS7NidHq4QMnASsUoLJ",
  "key2": "22b1VcAAbbn7bpCKme7VtFkTa3GHpmuoqHJCFiWRnD1kkgmX36bK2Ce7PBccV5sJ9ZotgA94Afd7XXLypKnRwBmf",
  "key3": "4wxgFVfY3xhwLRxvAi1yodzaFbgFBQJBe1Jbx9NJmD5W73H8XndkhYdMqiJsCVpHbxQS6e9qwZUJWRZg1obzEvGH",
  "key4": "2syeEFLPwGe4vy5hDwm2BBN2TfWjg5rScW8zyw2ztUTsF33CKmfGi3FRDedr7Xm8MEsk8BySjgfFxbXJbAKhNMFS",
  "key5": "4YxL7xDqGc8SkwwiQ4qBRNzfg3R5WUdraCfisyuwk6b6eTp394ecDNtzu85DQkAVvptQnRP8MNggeNxv1Ds3ZxnQ",
  "key6": "466swE79uaDFRbzDJ6vuv1zTsYxAvNUrpdc8LC1duzXfhkzSHNhgEStgtsG3yH7JY9huwLKpg2se8ZUjFSw4Fdf",
  "key7": "4MKLvHA2ZB3SffCEZ9QX85s5jskaUbVrxpj981VwSXswiwQbegKNjFb9YwVNeiNskQ8Qqr88TcuPm5cWPNE3Njte",
  "key8": "Qk3SqxpkLwN72VACeYk3Jjtd2Cm4msgFnHitkNmC7DFJVyk4VbnooyGM6dkAicHMsP7G418MBS8vJq84gjvSzQA",
  "key9": "4YQxux44oPTMBCsWFXiNKoCnNy9Ait2wZRAJBJqKwPtfR8JHBKXQhFVG6S1J7nEH6PYnwcKgorTGaT4yNE2Rmyfv",
  "key10": "255jmrMQwkEtaMEXv1yvDKpNXwADHczZRWYMqo5EXPb4ormjM6gcv8nqphhBNY3nsdxePweuPWVmJmDs1uwazy7V",
  "key11": "bkW6CT7mgjZE5WNofyEc5puUNLLvrm15ycUcU9ATxWSH3F45YEp9ut6DfRP9Nsdhr996aPqcRZCBso9ruu4Z6mE",
  "key12": "ez9h8oBJXxDjv8wWR5NQTWoMGr6YDW9GCfgbrK6v7jUzBENAmiXTD1sxMZ19C7R1iRQBJEN9WMDTA1ykH8miEKD",
  "key13": "2YcDnYZ6F1k6Tm1g48aXb8FBkWUHWuK7FuXFjEgi4dy7NvJkwThxPjN1XM9g4ADMyJjQEP8MQzjQ6enpvRfhYYkV",
  "key14": "4n9ddVRuo1pBjpSoNQyprmEFagUcZctsu7pLL1VXvnMVvBB6vaCsURpSuaKu8c1AQBtvCF9AV4b5sT2xYKufdhmH",
  "key15": "4A7ey7SpjCymDXWkZAn2Fut7kKBeep6r4RY3haGQSnUqfUN55Bk1y7Tc3r6zCjwpVwTgwULmBKdifezffcp5fDEw",
  "key16": "TqzCyt4EiWMHek67xdQAWQk7CDNAHtJtLysmDVTEW43PR8MJ4dWTt3FViUFveoZeGXC5GYisTfXvVG3vuNvpXaK",
  "key17": "4FANKdqwgw3xj7EHRzrTSkYp5oVkpUYg8xdMeqzrwB42uaUETvVN6zn5FrFfQbmiAomo5tGDRcgLv2Q4VhJUh3to",
  "key18": "3hmLexdNwnoRLKkesoaL6JfbRgy2noFpRJHeFT1JpoZm24inNJv8WbDWso63x9Ao9YSjPePtzSj9GzVYFm6M7YbS",
  "key19": "3ZfLYFKvYssaXQFs8B1zraJGxeGTbPSdaCk4JRV2dRwe9kciW35i6WDVKLZkAtwDQy3kvFSVu5eHBb5BANfSuhjE",
  "key20": "5pyiGuRsYXN7ekHyNF5qrGNnZQs7dE9fXhXpSDmSUcn9mSX3FjeHNGpTcguvrhkkXv6CSfxAZvXoVzpH7Y6fP9MM",
  "key21": "4peWBzTa6wv4arKBVQ1KtY2zTP8mHk7MsWXtttr3sRoMFvY2gx1Q4PDyhTPn9gAE2LAbv3bbtiMoJCRMCBoBsY1m",
  "key22": "4rbKa1UrZFRpuEHJ5MpX2vNEep3zzZnNq4mVDnfL8DQ1BfZHrP9ruCc4KUUBSkg5kSvGrteQ5431YWCX9THqwvGx",
  "key23": "3FkBCvgMihU4FnA4KbjsN9tRdwvEhqtVikfhfjbvF8qjCsGG6feEdoQSYv4kbX5CxpZxbC9uNiJX4hmRntE6j64B",
  "key24": "5Mxh1Sv1SAkcsUncBekTrTb1vgLtmXMVnoXyFAk3W96iXcpwk7vYsfXuvrNybDbzSDWHG5gTeagvLJzNQSgpWPM5",
  "key25": "dbwFKLnRH5aimT4XCc5SP9qh1bAbDaD7dqCJRa9ptHWcCBXP6AngovDL7ktcq9CaVLcF28UdQo9uEdqKzX4spyM",
  "key26": "3HCNjCxghhX4UA4AiYv1nuoCLU8pTo421fBcTXc14qA8wm3g9F8KB1CgJWcPs8Kb4Dqmk3gZpzsYvg4SRjg2eVeq",
  "key27": "5BaoJi7JkCreg3YEfCMwEUS99QMMPnTL3ywHWbiU4fJ8VX5kPAdSU8viznNnB1s7R3ViFSFrmBVFJV9u1wzHbA8G",
  "key28": "56PuzFdZiTEnakT7UxQamAD9B9JZtMgZEQi3xfxXSrixMTuydYbRPxdaRFTEbs1DAtSbuR66TwdnYUNu8JZHAuXH",
  "key29": "3uqQCueiiujnQhCrMaZS1SuNstroGAgkLcVMk9Wb4YMQmKE2AfTZiX3c36V8sLQ9MDR5vMLGqZHfUk2XS7PLiQ8U",
  "key30": "26dGgZbATPuFW32DVUiQxi9fY3Zovxe16qwxQ8bnXTfXLukJKLeuUaSaei2tXu11MNktdBjrgcBPbeDNSYNfn4KW",
  "key31": "hirhe6fTJdBZrZCPcUwTQEgXrcPvcbedTCJCXobneDHkRdRgENwe1pS5DYwjhiZJWPxop9auLW5HbEsbWGLkdwV",
  "key32": "3Dpt8NBtioJcbPHixzTdrLL6zLycWAk28kaRXRr7R7RKMfqjwadjnAn2Han6szFsGYk2KfhHeuMox7vUjtYftC7U",
  "key33": "KVVTyMSKnN77RNMWF7f99ZyyRacsMNEKuPeabZ9LJtkj9Jrg3XGakd7qR1VoeKpRQ46XtQf8WuBjwEuRN5oeVEd",
  "key34": "3xcpzmezGCAREVcMwB6i6LKjc9X5L9u4SrJjjeQkgC4R3YQetdMVbq87XKnvYPr5E1me7cFaaCxXkSyqQQJcB5uA",
  "key35": "4vbBE7FgPXHjk27pBxANuM7brF1REvtVMKcBHex8uKSYmcgdQpSrpiH3M3YA2Z8FXqi8NtVznQCzA8p4YMAU9mgm"
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
