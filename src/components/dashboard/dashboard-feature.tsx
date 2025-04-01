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
    "1ruaKSXLzFkbdZYom655z85o8mRd4PQCJNWx6gQCoDfGRcLP6tUPxZLtdoa6oPDYJsAN8KDLFx3EH1qT3knutek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tv1C2iPxwVYrtvLGL7HPidhXtqkrjXGzfEgHyNv4QtzQm6j13dPWdd5Q1djPvwtWhQDA9pvkWCMvDZtCee9cqUH",
  "key1": "DQto3gdynJbnnJYs3TzEbso6HuK4T1tjcmGBtNs8iAySYXNbPYNMapzR5ATmLW2FSHDcY4jQWdz5unVR1mfoLJJ",
  "key2": "4xrk2onkyfr5NN89eB9FjBhKGyVkkkTshTBHxJ8YG5n4tLv6b9DJaW1bWfXz2xu2rpCpKngcSZWNAQsWe73bP7D1",
  "key3": "5LHCL2YTLNDMztrwQMdQAiBbpvQPJG4ckrie4TpdirBJ44DiEdH8npm2FVvbSDtW83oSUV9jpqGyvp5tCsLxoBKW",
  "key4": "uiNqXvEyYYk7L5rp6UpJviygyRijwUkmQodwRJmyE2AGcFWvWpJ5WJmT6zQMr8qdZFR49ToEaJAzD6B6wVFGZ59",
  "key5": "3XjsHg4XRCL9oappa2rfDZfGjuCeXyo5RFmrXhgGTLEDNeaQWwLRLeERWzywVHcB8AuR3MQLwDfcj8VUJWDGuH2G",
  "key6": "26HCjWMKSZcfgiQPVzwxcc6aLQE2JctbeQYEcRDtcZkoXYGhkyQ6r4RJqyUw3EHcGHb7wn8ZgWgGUuyfjW4RpVbv",
  "key7": "2WbmuLFaHW2h8C7QcdeBAxygPp6DWVKcAWwiPifQ9QkzbZH1puJBVA7LTB4of6ddEv1tDLS5LBkXQx7LjAemd6oN",
  "key8": "4PUDCRLzLEBZBVTLaH2Fz5biXj8bjZDJeLJ99KDADS53RmzEkgfiTtZYJYDpQvgJB5QxCocVVUUWadbq7Uk1xYkM",
  "key9": "4THp9XWYX6ZUgo9HPMJLKEafpYPsVxJdsdUYe5BFvHmhgqUWa9XfC3Zi2BXXtvN4CLpQ6ELypH99U8v3wgXg85Nd",
  "key10": "4AKSpEobApKgDWVbD7e6jjMn3Rx5fB9JYgzT12KJR6AA1GNjgB3efmKBsBfVvibPd2NTJRX2NWbY4DsxW1mV9kML",
  "key11": "67pWpHmUXkbsH1DtYUTzmjhWQ5Qw5iSahGjUZmSH2RwtNpcPFdNERxJhBj6SnJUj7QtCwdY13Lt7VNjyACUDiewW",
  "key12": "83e5GP3xhQHM6y5cWWRpeM3bf6quwY2iMsevStr84bR5M1HEMsAEPytomwhprEhqvKE3Uc1MasbUfZz2arjXnZx",
  "key13": "4zY86Bt7WwpAeWCqB66NjHpCXyyETD3GwGBecCAorjyQxXZQnk5dELCvMPB3iW2dQXM5aaC5gHgp3JNix5kAfRag",
  "key14": "24Ntet5tLown7UU5Zp1nVEFzyWK8x8K7t8cP6YhuAJyBQ74ZjtAgLUmd2A7tsqskFf2WTTt2FEQpwuFKChRbiD4M",
  "key15": "CKSNtKE16oJZ1y88VQ9V9o7aFvbTtrMZecotiRreSTahdmugziuNACEprRe7XiWcgmQRVePrGEuRteAUzbMqiBZ",
  "key16": "tNXHva3wYBhrbWN4QULkUG1MjDZNJmU8ypyS7ErxoGvub2E4x4vCkvd7VYghPzenx64Yh999h6LBArrxqwsQq6n",
  "key17": "4b6Qz8e7AhhMiEo1bCEY73Xah832KDmUDey1atiViyCwRVLkxyieHzuYPQLWbaEoBzC1RrgzxuyJMQJzQe1X9ro",
  "key18": "v1aKPk2ikmKHmChb9oeGGM7tX5No2b3GQm5cHyCH46PgmwJZXAh1ut7ViGsze2JmSaz4G9MCs1L7jwHJ8TCmdum",
  "key19": "RUkn8xFhqDv7vkechZLVhJPxrZim1W14y8jMVyC4wtht7XaJ7jnwfo5ysCuj9K482azP34LgesH6JHzs1hfiruG",
  "key20": "uH5KxK9jUkWEZawv2DbgS67kTkBsH6c1QXqCw2dKzunZ44R63ahv79yej8z3c61XoCBGXhbKmkuEecaMMDYUecK",
  "key21": "3w5JTAxzrtFzVV5JNwd1HaZXZXtspX1z7XfhGmXfn8LSXLNiSbUdhzVQ1FKh3KkK8corZxbmvw8v4PQ6Sf7J5hLX",
  "key22": "5Av4TjtTWJNFvia75QpyWgtj8PcAF1RZaRAaZ5eqyHW8unpiHzGxPezX7Y53jpPZNr1JPXKghVF4pT98vVaaHan",
  "key23": "2WgueKegXRDvyvSs7c5y5cgEVQ7kb3sb6Kne4rroduRQM8dhTLUSwfCSbFHp6hSxbWCcFFomeARfiNLgP2gVD95k",
  "key24": "5DhdY9ebnmnoN3bt2pxzitjrVUfDQWyPmgGiAEEMfcDPqKJQyqhjbfvf9UVNV1Hus1qRsFr851wgAuQzjG1mXcVu",
  "key25": "3BoqzD4C7rTKq87A2bbr2xr7CsXi1srUhEByChpR4CJ3itGG8zbkJPuNXtgYFSnfoHXaU59GLw67dPJMXyXywK5c",
  "key26": "5xaD4aqPRDnAaA9MV3K22Jadvq5MDr8b1JNX26A58D2FqJHTMk3JngJPgZ575XxsvxjScEA47vq41VhtfwTosxUD",
  "key27": "4pDNuv5ZagMVBUrfRy2atEqk3m7xPbfzHzdyex2q2ZwpngexiMjPU6irRfujpW7TNzaUsuAuKjWQ7E7QfN4DtAzp",
  "key28": "3Ma9fzdUAMU9qxxAEqMV4xMd6gQU5ZZenM42uQX9T74xqSzYs4DeujVuodgRvnya7R92qukG5HNUPJ9asdm1JJyQ",
  "key29": "2A3dh4M7d3NWuaCMZyCxUbvmwzAGoBE2Zz8TSD6iQSvfnmpQfunECTMZ89a81igt8HZCJq196gSXsmdq37RHFbHq",
  "key30": "5jckY6SifTVXYqURz9oNsR1mkwZ1NwYNT3EKyjivhBDkwoYLWSbGv8avHd3WCuKbRZFRHYotm4W4dVrif9eJND45",
  "key31": "2Tw6id7d45epaFuyFWujgHtFhM8PSBxEmYkCV7YwfE9dA9Hxc4Yks3YvqaDQYnZipr5Vn8uKpthi4t3Wcmv4YVeE",
  "key32": "56kaDd59TPwNTiwZ4GBwcuGF3YBaPu3apuyVwDMzD8XoPpMYm5H4Ta2pEtNiDcWCDvgVJT2HgjwY1UiFM9noupGA",
  "key33": "2TtkD9fyTRLGJ3LNxjij3oua9e7XYuK6PBYb8jgbJvU25caqRQH8Ubyxd96g79wTH6TmkhZckqonARiaSS2M7iea",
  "key34": "5E85PvTdgtRCH9bM5vCDNp6pvQoCL9P58f1pgj6tYVjvSj3aS2xehtos4U1gXDcRFzj9LCcwEkKaXieoX1DYWcck",
  "key35": "4YiX7UM488HrdpkcXTyyfR35Yx7FpBuf6it27Mf9YEYQKHjvwC8raGyWqZW33rMWLLfTFmd15264poBYACEVvCav",
  "key36": "gZjHSjViXGZFwdcZQ2e16Q4QxTXqGUZ6LLfb1XKNvWLVsur2dEooJ1BsRLPskUeAXvfxMWg9F8qu5aVBtcbrvXp",
  "key37": "2GYTkfpXrjL3T9jJvdnECKYUVfhtsbYEXqf1BVBGDq1bA29myBkggjmbQGvVBWSx2CtcprxXHazDLUidTqyHaJ8R",
  "key38": "63zqn5xyLzVrYBjZiBxpdpwe3fGjqtBVGQufhFiqbWsuQ9Yc37bwnmLGeWnSXbDE7oW7fVQegCezcNChuDoFaQaP",
  "key39": "3VYgM7Vh38qvtMctL47Qvx87sTALCpKYb7nVwT27Dq7Z3bJq9qgzegR1NPhc2Eiqkw8oJP13XnkjS1w5T1UPfQYm",
  "key40": "3dSscFxG2sqeqTAEhNKmJrzFL1i2kZcX2jpQuP55mMiqGJP5mTCCc9fcAy2XpQ1p7LsoUrFV71zYVGkLxQNQ1hZM",
  "key41": "4WL7H5yf42WX9yZaZRhudagqt2QBswYTUCVqL1Gzk11deK6bEmBh2phQgnU4scPST9uX7fLgigAhrnzmPVfQBxwC",
  "key42": "spa2JpFchoP5JFLb2KWSef9ffsTkpwp27oFk9EnopTzgthQRDxcy7W6AqUbXa6Dfh4vS1eBGkeYYw73w1MmJ2Zg",
  "key43": "jZepgCtnbjARsoVUpfJvoR5r7LL8M3nhXywyUZRFADNZLduSCsdRMCSCsczRVUUjupuEXAnAehbRYHPdkdUST1o",
  "key44": "36K33HJNnwv83cGPoZERMPW4iR3ScXtqLEFXqhUxJzZb8VTfeYbFASjQTrf4p3rS1oMWxKqAtuAtiJZyVdudmeiU",
  "key45": "3WqsM2v6vBcMWq9F9kJsMp99waury4HfmQcM7zgtmcWdPFJvCWnfXyFNcbXdWnD8x4KL9BQcRY9HjVTXEXp8Vpg",
  "key46": "4MEBxzzzSipxTjGz88xdpoZ53VQW51aYThanZ2j4cqywmT9TrZCPeLWdTJMXGTpAN11o3jbVMyfL9wuCwjPzWUPX",
  "key47": "2LXXoVFWiWBsBA53i4ba4qQqYP6sDPtjHxy4WvS9Mm3pf1X1QBBE7r6ze7tr8ueykHCGtQV9Lc3tm8kzstFyG6ee",
  "key48": "twZ6znXT9Tqze9ox61uKCQPPY3HG3LCjhzTrZP4bfW2pnPe6sfWbXyBNzBR2fdLhy9HrdHxEMgeYt6LWRFRj4Qj",
  "key49": "2Qsdk6cmXUeBqDwuY7aP1h4HMb2J59z9wTSTjdEes5iSvxERWFqnCaicRqxXGjrQCbc672pMRDg1GtCafd2ZYs9y"
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
