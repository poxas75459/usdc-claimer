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
    "4TvL35QiH4xwZjRMux7xxe9nwpYxrkM6qLcXxpt5iw6Zr9uTg8ASetJVbicCfezgCkjQGAojSzcktYQDG2aBuZ3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRYqDQxLFSsTDurST6b26Uj8n2xN3RPZ8Wpuu1k44scrxm6PBGhsU3oZTpyB5AKRvDqwkrtszLLa8BqefciHwd9",
  "key1": "2FmVS1cXX8YK1v7ifAXifUxv4MHR9j1tQm1HmJDKff7GHz7U9uGtgRVAw21ev3VHGpnVfe9qW61stAdH8qC5eZm2",
  "key2": "33TC2FYfRohsJWKDBvUuLM1D5HVvnLiAuR4CgabGhpSWTqv5CpvZrBDcBdUL7w81EsaVPZUFPvbuu9zgGFabCcNy",
  "key3": "5KkvqweTBkZaUPjN4nfX71kG2PcWhXG52vQXfbf6pV7u6GsVUWpFaWAt2HUqfzY4sMWA3E9SajzkJsgFZ2YH9JaP",
  "key4": "4D34UD9BAS9XAkMvUDKFfKC1chouA8LY16Lci1nD8FobJYApNsMjh61VR5S6mX2oqboCKiPwRYfADtpNc3ajfqJ8",
  "key5": "5hoCBEtro7G3fEp5BKDJPvaUyow9sGb6TZR54oEB7Hgnf4MMLUAtNUqJUr1P1i7R8ihcoX7AE4yak8vNmKvQZWNH",
  "key6": "2R2As2JZh5NdXTurJLB8J935jqziCYAYPbCNvrmfn2pL3je7C1KosinQoychRoPQfFSzMdXrvporMZeaJm3PVT1Y",
  "key7": "2YUKw9ReK3iwr7ocxg5wxHpNcVYqiNFqWLKMcHpfYHA7w8Vv6LT33CFA4kNac9MTyV4ncTp38BVXvkkTxseWV5Et",
  "key8": "4yfNcdp4HHa3ZeaTFbAntTS9hETLMPEjDaJ2mL6bCuT3xr3VQJF8g6raZWqFdyoS3aAhFK7T2r6FSbeaGd6AqX9A",
  "key9": "2Em52rNy5N2uxuKVLupgUqMST59KUs39JkTdPX1u1iGgzJhhPnaq7QCvWtgBWTyfK5Va2LjLzS3fccJ5LLGJ3QyB",
  "key10": "2oNw2zBomJN9Bd4ptCXt4fE5ixURgCnnqoUzwMHXJuEqskq9LvfhiFfoLFCTAACAiv2n5sPBJLbu7ohd8KUKAM6A",
  "key11": "4XfBeU1qdXQsoH49cqXgnY8p68aRhjcNu7TBaQQ7JSgyjGWeMPvF6JFqJFPDVNe79SRhi4s9ArFdVnw19p31J49r",
  "key12": "577oXy53B5Nvdgkdc8XS18FFVRTw62dSGKghtnwMBNZYoUFx7WmcP5pqkfkLumjeJQcKYgZpL8W3M78kqwdxRgz8",
  "key13": "3U2xBk4KZ44Tv7JE7rFVNXkXdZfGhiosKJkfrp7xJ6xNVxXoog7wNX8hsYg1qUTDs2MsLGH7gy6iWR6beaGR1Zjo",
  "key14": "67jP54eWc1iFxthtJoEhqadbamrG9jDEyXHjM5XSf6B3NT3GZ28WuQK7WtRL8hCgYbKpDuNTfrzsoMcqxRQ3f3pb",
  "key15": "245ZZQproVBcw7zDVZLj8KT5GedrGxy8nc4AictQ3bqZa4JMhZpxuSJ3a1fVC6QtjUWirKL7nN9FVBtfT7QSbwLE",
  "key16": "3KFYw4u6uq7tCXjRunhrx9TuKwyAzJiMxqAejyFpQv4mYYW99Lu9JMt6QpdEkhLDHzPJmPQK3FBbUc9EwHQvQKV8",
  "key17": "4BkCL2QDR8QibrVJ3j3LKS9azcL98yJqcwES3KFK3BsA1dkRJToYDBf45dHgj6Ea5UStubBvhoVJzLVzREDE1cW8",
  "key18": "kxj3Ausv9tfTPwbQTDfAydLF8WSSyKLMPQWN9cCDPJCbNSg56mczGWKjneQR3GZfRkMiKN1GubXM8MP8QkukpY7",
  "key19": "4E8qmjhs6k31pPMWDLziVKXKkjhFNcvDWG9pvc2XYyQFJuPAzUZhbmXjMyYebsxDfHNd6ffRi7DhX8Hpcceyfkgi",
  "key20": "5q9pBrsoyWgAci5abz3E4rbTJafg756cgjLmnMJzfEY1SNe3jwHKydYACjnwB2r3KSK7xWqHNJo3LhLXv8dgbTB4",
  "key21": "oyWQoqBj86sd9Qif41NThxHzEtBiP16CEphmJb2bqm2i36SRX9r38qbWgi7rWmYYWkz4c5WGFfKP4Awx7TRhwNg",
  "key22": "5TTujQMtZuF5jHPELXrKns6hdsy1kMCJzGAijNnJwkMZk6CVL5TQ42RyvQo8n8x17PrJ9Cbj1FUGqVTCpdEVP18q",
  "key23": "23xrrvTEHNtPFQ3K4EBnmsqofwrdU8QUTtVuK8V8g1mAHv8RPhiGJ7WhETBBA34PFeHpWwWNp1q7MEWDVrbpJMgp",
  "key24": "4zbeCKPL2zFQVBf4f7fKQfznDzVFwkKsim31q9zMYoc9MYmKUDgASYDn1z39HgEr4zMGNtbWQTFdUckdRcJPJitR",
  "key25": "4FenZ181sDMsW1R3SEG13tNYk8SbW4jFSKDEubVH9sb3tGV4fq39TL1uNz4uNsYr4JEyEpYBZB1dPeWEKf1SESEF",
  "key26": "3ioAF8PzisEhjPq1BAzPbYWDB8RHRG4ncy7KCrZw3iUnnxBBvoafSbRKLdQLKYU9uvsjLqzkE7g77in9Hfg2piFP",
  "key27": "5ZbwrJLmQpzMnzorxXZMk9uQZWFaBDTmFtEDFRuQJP5gXk4YnzhzMuaPKip7SNGMd2yxbBAPz4LWwUFZ83wZqTnj",
  "key28": "eG3c2J46TcX1V9y7cZJXQgnLpWCb1fgGAu9vMujgwbKEhmgopF1dnNysHoL6bSWd3Wt1iLBB7CEmmf44kNRb9av",
  "key29": "4BQSm7kj8KYmo6ZiGJXWnucXY8Dyhqkna6hQgvbkE6b8AWsMbsiPVg56R469Bjr1SU5E9xybCnAXdDifaapND1X",
  "key30": "5PgSnQMTmcQ1HrFnrEh2WBcnQsVMKEmuyx9mHmcYG8Zu49kiZuEGnLRBbGZGwx1Ce6v2SYRwhFKj5DyrAZAivmv2",
  "key31": "54jUtHgTSwEi2CPNiAqYDSXQvGZ6HzB7FkEvqiGn18TFPnAw9fkEXygnEbF6SFLzht31DDoPRm5dn7KWGi1cbMJe",
  "key32": "2k3TaQJmzEhsvXwu8rL1SQ8R2spbLY1zvgWQ32DtbBaBTUM9mx9bWZGoGwgHq6duZscmocg9g8HzYsnxafUMp86A",
  "key33": "2B55mVwMNGcaUWpSbqwKUksvKrtXmpgK6cGnzr8HqNbDSkj9NrrSvo3mT5xMJZghogwNW46kUFnBXPSTCzcYtk68",
  "key34": "Q3dvJFUx1UvrjXAH8W7hLb28eRAR27YgxeqvMQ6Qn3vSU64g6PLit6Ynjd1dYuHbZTLg7JK2qbVThFquCoDcmqP",
  "key35": "QJKi6KLHC1wSGJ1EyuRtzG2q6u9CcHNNT2bvtD1ih8hkwUSxJ1L9u19ZRbgheaniunGPo86TBnwzke8BSXb2L5U",
  "key36": "3oG5cM6iRcJgeyiGoXQa3u5n4BBD6pHdMvE4oGteSgx6vmELYFAYEfzSx6qNmFb1qxa6mKZmaYeZiVCChCGd5cuY",
  "key37": "eHFDUTdo7QJpV3kxhR3u2FwA5FzE5RBNZAjZUsCUftwhzyBNv6WLJgnQzGQk7YJmKsxQbwRruue6VdhwKE9joNw",
  "key38": "dmTe9U28xBG3t8pT9fUJwRAtPCY7yHzEJim8TrzaLEo5517dLKQpv1uYbzEJPq4D6oXyY98jAUtEhSjiVhKjxaq",
  "key39": "5X9z98V985Yt871ScG2ZXv2JLW43gdc96S9QeJCAVcjnn6q4mFzYwoKEhxGumiEMt5rEMTitggjuk4rU6xWhuo7m",
  "key40": "3DbxmXVAiAZU5VdAUiDv76rZ7S2uFy3kJDYKaqSKmo3UyYiXJCLAYV7YAcBr45kts1C6JTNPwfLSAvbZ6kWCZu7Q"
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
