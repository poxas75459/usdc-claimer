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
    "4PDXQ6GTDvN2gvmLsTSpgqzVD43RQLEWVWrRLpT13MirAY4VkHdEYkjDKwdmSmfsQteNAXkEbU4Q4bLvt9jXuWgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqJ6U61Lbcav6D7bczjtXC7PEnVu8T1eWV6RjQJ9KDyktNUuqFSx9aM5TfVKJbqPBZQ6tEsb9oWDsLXtG5ZEi2y",
  "key1": "56QjpF5TWRKNS5qtdi9QLXq9Aghsw3t2exGMNsLz5GXP3785bF2kmekGUojE3DVx2zj1z2JXqTDAajdrhccwtgix",
  "key2": "54Q6y8EgdyizMoxsGX3moA5kCiDPGHRHBG1nwf9ydMRruJjm34AALGGFYDhWwYxnixd7X3rMiJv1BvgSncLSw3PX",
  "key3": "3joM5hRD5FoosjFicmQAsyYRj3ecX59joPNuKN9fscidxmF7NNzTaYS1siCF8afMa62ETLSQ33ARNYk6aFSeaCMs",
  "key4": "quUCmbEq93UAgzRe8LXn8SbzDfYKeUeCttHJQHZTqrdBMkHxwGeEyZy1e7cifHMws5JNFXH1jv6Xw69iANBqBTU",
  "key5": "4A4fE6zpXpvBJeBQ11UozE5AGMpMX9Lf6pPU3R4JZJUYfvLP3qxfPt2epZo2Mh71MuFqhYs9notmc2u3Bko15wXy",
  "key6": "4E4M3GWM3ygk7uhDuxfCrJum6irGVc7DNBCqGRAxbEmxNGVAP6LCZFrgdtCxACs8PUYdyuEjb3wTGkA4Xv2RVdwi",
  "key7": "4sssVJ2KQ5wgUciETgFYaFLkq6LqTnZ9eARqddrmCvEZkadJEgmEhL6k7cbhYAPvbL87hA7UTBdoWoZoqJg1FWD5",
  "key8": "662YRxsewoWkjZvonj94xXZuLZxmyTcL5H1d7prAYQEVYYNcou7dgw7Gv8S4btzvnNkdq1sQ7y2GkMiH5xbpmrzb",
  "key9": "2Q5FxCVfLajQiSPXhXjtrthWRUJPD43SgdoJv3KDEC7HnJoLu6NfWMVXNQGVme1JDT44EwZoV5PFF11z5kQYbYjV",
  "key10": "55r6QBc4JoS8B9Ai6ivDxudjMqp3sQbArkWNomhcCbqcbCgpP2jNRDvemUxSwAWYQ7c7kgCzdGwSD2N9BHCb5z8J",
  "key11": "3AKr39JZu1P88pY12L15V82n32ntr84UR5JBZsSGgXCT3CyAGRWwQKNJUf6nSZGpwDK7sef9nGvfk6bX29j6L2oh",
  "key12": "3ydM5fW6NYRWF3o5Pr422VccHcFyaP2HCQqamkwNVyKGHX2h16YLnNNtuHqZWDju3t7S88HGMJp7cVmS4SbfJu6i",
  "key13": "3yGmfsfUk3wvR6Bh3EFHJe364HUiYzdRg4fM2tt5M5otnCfnoPTvspnZJX3Pr7BKZLiV3LKD7myPggESXAP5USQ9",
  "key14": "X4aGRuzcqZznLW1NHmkTK6fwY6NJyKD45sKiEm3CmtCmkt3P7iNYFzP7Ta1YHJyw7oudrNxYot2Wp7ctKeVDMoV",
  "key15": "5EkviojQQ2L8ERgX9d3kvi1nQoEm6URpbXzKKAvi4gyJKKUPQmmApmCfanXLHN8ZK12xNeMj3wNUoRFB4Pkk1B9m",
  "key16": "3xCiDeJXCxqqqW4aiiZ1tfy6PnFjbiMGy4MParRDReerwxmCbCfHHZXVCmwdDi79V6p7rDJGy4pgNyWqG3oBZUV5",
  "key17": "3LCSJomAkSTXdbbpjsUw2fB8oNb3bhnQg2Y9xPTkQSUhTTpXwvnJgjzUDTwLh3KURThxSrRXgx24fjzYTiA92YNc",
  "key18": "4z4PjzXQcLugmtqdyiDKe3YAFQ1FPou57FCYcneU5spHMMQjHNUAAtZijV2iCYCJWPTxyTbCqsYCrQCuQH2WH1oS",
  "key19": "k39zsSJ1ySKwp1VAHpdjHtBb5YrdPBSKrYzAP6ALaxu4gtPWFhiBnZa1nrAkxVRMV2NP4yfEYaP3XFqTEwxvCsC",
  "key20": "3r2GzacAB72SZmiunyzpXBVj3Zu2HhMhCT7UUBcMYjW4B3AmG87wVZzu25sPzhL7LpBiAq6kbMgWXguqzKjnYUns",
  "key21": "X3KggfhQwtK2NnWV4K1ezVqtJQVYhHEwwE4QpYBcQhvh71vjEa7ZR624YYs9LEbYzANpvBfNisGxskvsoGF8JoN",
  "key22": "5rdG14AbbuqehC9wnYoKHexfZUJyS6QXFCijPFix2u7hnyJnyZynTbuZuoDK6V8TUhwJTH47N9JfMsLH1KHCLEVX",
  "key23": "61Eo1pFQiZ4pnit6cjzowJLW64GbPDMb1fSuS9PBjbxnNqbY1V82vvw1onADwyVNPuYUdeRoWHhebkXs2aKEf59V",
  "key24": "5fHzYvEStWimrRnUm8tXduARew321JvkxzqjLdStqtMT7DvEbmqG4rnBqgBuyntGCiMdnCErKB89eEV6fM7zdHCi",
  "key25": "4LyvmpPZzejH4CxF5t4faC5sm4usVv4eUbBAwVtJrJoJZzBcZtM4ffUz5rzTjrQoQVp4hzSmjBAbrq9H7WdyJpqW",
  "key26": "iWVfZQGXjPgriLQGzrQr5zr1JfFb67UYWzwpDqYY99Sp6r5hHeB9iNynBgfT1ZBBbxZQqi6XSRWNcv2HMqUu8m2",
  "key27": "3G4jAGatqn58ocKxZgAH6AhumcfqYqkoLZtPNQaHq46pjVT8tdC6u3Gu6dZ141LM8V2Fg9AmCZokeRFo3br3ELWg",
  "key28": "ggkSP8RCSg6pDWGzqNjWnjGNFSHqa3w7iqhrrnFu5xmQ77Lp9BFRB6pXeGGvPCDTpwYqYYdKjfQuCLhY1cW8Tzq",
  "key29": "123Et8mUWPa4zJHZ1cqz8t2HrHbL4f1AYZXZMiGWA1rxrtcpVDm6hZM7wiY2KE9gv3zkFzxhmYwsMB3ryPVm1KVD",
  "key30": "2rjbhnJzKKViCkeg17NKnUqD87wmxEpTJ2XEaQLYycQrZcu65sacYPpEgipbk8a9Jb8cRouL15VA24oATyNdr3Sp",
  "key31": "LZ4LDLHDuedbCCUrg8inwVgCyVNU2jrk7gvT5noRn3SDgm5eXZsbLsA9kpGKErrA76JQdE8fK49pcqoc6KmjzdX",
  "key32": "5CmynkiVdsFUKYUohfVCh27NQkrtm7zpFR63P6KxzdZ8YA1aCpML1GpkjnMPApMLE47HcrBeFwdbLjHE3Ls4BvR5",
  "key33": "5siQYpavg3ugDCDgCq1X1qD7yTq4Do9UtAKfEKLxFqoqXFrFa4uJh5XmAevHmkdQfcpUVkuGZR7zNpQSaLFjehTx",
  "key34": "511MrD1yNpABHLqdmKFxmN3cU4ojYEmdbf9tY3A71JMWLvnrKRWWUoPT19hJkMn7S5LACFXnypiaiumeChGi3BJk",
  "key35": "4wBNfCaHHmfznmQoGqJGjNg9Ywx3H8zEReFBgTJbmj5QBFQS7WUpvLVgkmMbNzwUeMhSLSCXbPR94Lkv2u72b44b"
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
