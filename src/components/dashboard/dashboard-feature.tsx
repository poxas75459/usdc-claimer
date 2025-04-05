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
    "5JGH3eczHzjfFEmRPF4MDbPyE9sre1zXs5QkSn9M4kdp4mVvX2eYtGm7fA37AAJfmfW4qsrG8ccfz5qotJVBKEeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAgcqzPF4JDuyjhRBfirvEaD48xHqKsXDYHxJQfPUw99hwVZBZPrac3i9S4PxgsVqrtsBxfU6rBiYNTqCx6SwxG",
  "key1": "5sN3uwTw7zDTuRvtxG5YiMkmznSyp9X7CQdGu5TQ6gQcV3wN5oKKzJzhEJcKNipH1yJHWFJTWR6uU5Rkcpommapf",
  "key2": "3ZDCQP23p6n4AdYmU5q7cXn1M7oHVBo7k1zNiuQpzBZbsWjSrjyDLZ455mPE7ZfspyBrbD6D9ypW4rEkgHJ3xZNe",
  "key3": "qXawzdLFkTW2tQNSWDerY4pjgnk574ykr57oLzfemejsj6GgBZn9CVLnkBMj6DSKYFLb9y89cEG3CWs7cEjxRiM",
  "key4": "4eq4pKe4S7JKGMTVULQdZP8Bv3EMBM31M5YUUfEqJxCjKSPAzRVnJMMvC7sxm6RRzNo66cVjiputHfH3TQeEBCeb",
  "key5": "2r2fnYDgqZZJ3yN6466LMqC5PJTDDgyrn1iQ9qHpGtufhdD2SL5MZj2WCAUtXQQB7df76m37rDo5u5MrihyeahuT",
  "key6": "2QwPnhVDd6aEPVLzxtfh6PRhw8D15oTCA2to7MiWcePQq3yBNjkZgcyL7t9PccFEE2RPe45UC5bfxnm9YJzqYaRu",
  "key7": "UnU4N46aRn3uNxJ3JW5GAG6tZVAiZ28K6jqiXHbVQ3HtkLPWgT9fyPhJ415SjQefsUEKHua7NfbCK8gEcoVRJdo",
  "key8": "4Nahur7gVgEy8HYETbfwLaCHGScPvSC95XXTdMFzV31EQbqWmk8CFnBbKTLY1cqqLrM3iLaCWLBhEw8GA8Pi9Wgj",
  "key9": "QQwFtKdK46UpKVMe7BdSvbbwFxa4RpcfnV81vKw1w7KAdF9a7Z8V1A9cYhNWf1ZFrBjhCD5vYTcsJ3friv4WhDi",
  "key10": "2mwM64WyJHHZxcmDYSTTeZmgjHiSFJe1YyjTk5L8i5fXKPEz1Dc6HU8aCXo6hd5J1pJNpXjnzSboaap4san1ciWj",
  "key11": "2QdSsypU8v32Tte9L4aYrNwbjnysE9n1NJ8VmDDKpeKvsNUhmK5uVr45nWf816175KTmu94APjk9u8kAdZRm3PhM",
  "key12": "3as7knzxb4mDBd42FohPapwG4Qk3BAzFPEJUdNY1UXujHzRVB5GVW5JTWkatX4ESjbVXiSwmVhpBQwvb6GpkFCt6",
  "key13": "2sygDVp7Lkm4Whd48V4D5A5SKbR5iPvP9bYjRZtLQRgN2ay75BdqZ4iahg6FrohX7pSwgmjHEhUUSHok7zymCA4e",
  "key14": "3n3865TFoJtaos59sgdtJmkugp4RD6RaoAnPms2HocTF7Pcnn6szruzYpNZ3oEMoxF4Fy5ZqhMCqBPaGLaZdbTqs",
  "key15": "SbWEBviMsxNLbxKr1GkA99adn1PzGJTBvN23m4U69cewBGrXAFxC4y8C1BXNTanPE8YwK6nfNMbwN99dfdMiEQg",
  "key16": "4Qd6zeVdbAE3pyHLjAmBaCBAk8iotkjDyxuhnqyEFwsFF2FJHzo4VEPRhrsYdTsFZ4sijF1TtoJMFLHYcYn35RiB",
  "key17": "5yDZHkRu4gzRckuKshWQHj9fzLEzB1T21kbMzQxJDnnXHMkDbtomR6tF7MtwP8HTXkTb9HGens3xNBBTZ7VTVfdg",
  "key18": "3aXsdn4YNAx18RkTPjCruotvBNXULUBz1G88seAdSvd6SbDD4JCrCYCma2J7JmPyMVfouHgLnrYMuRwBLbvsJVng",
  "key19": "9NB8TwMHcWzrSVm39FvxQ2jJBNVAN9bpe2CF4FdH9N14Z2LL1e5kTyYCcRjXkxjnvXakTuiWMRR8UsAe5QXRxKX",
  "key20": "5kp9wUppEpXPouCKntUHaKeXJSXKBtTLPodBtD3dJujLF7qMVkmhQTS6ouK5qpLHVPsFSb5BZwz5pEcxQcBivzwf",
  "key21": "2iSUckaJ8E5x7wvVZp4VpxWNLFfUvrK9uvjBzkq858XSPHBopg3CnxoeXTyzCn6WD5qPkKWRp3eMhsNDb9NWkSQo",
  "key22": "3A99MNnqF1yuPWToJ7e3QQNKVe4R4UPitAXCkg3Jy6WXzFLU8z57C1QwuLuzmefMEUBMnxQFfemBsjMa2sGcwyBd",
  "key23": "4kJYqJRqGgzkwfUmPskY3JMAEEo2TEfCYf5exJaFBVBe96ZePJxTZwKhhDZLmG2kPJEboQtFxhq1kzavufGxahSf",
  "key24": "24Qjxo6gQDtu5GB2BA9jpML4HgFTx6VFYe5BphYgD7RUR1jM8riStksbUqAbyy9X662MDACngXY3N7JCwsxDerQi",
  "key25": "2cDtdf889ko3qJrfo4VewM9uYrq7D2c2uDpYBKS5smHmzn5M4QHPZVMZxibHJNdcMWdmbkK825V4QKC2o3KnZdFM"
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
