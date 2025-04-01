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
    "2yjQS1Kcyz5NdH26NuTDRuHyJGzsn8mfiH3MTKxUDwMBz4Y5wSTSAJb8Urx8n8kbWtuNqmmYYWxrndKkXgRH337F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LqBq87gXWUuR6CzinacU7VBLfTyAP2e5q1SZrG2P3EVfuAaSSH3nKkQBj4EqpzzWHHEDiz2zeEzC7UfjjrUb8Wy",
  "key1": "5W5XarFfSaUshffMULnPijEFwXUYA5xFr5VUk97E4r8AX8cWNmWkaVaEnxs8qD9FyKvJU4r47nHwhQEosRxZp2Fj",
  "key2": "2iTa4gSqVvpbKMBDBJCLbecvdBHik261Xsb7JSJz3KTrZqHPFfG9QLK2aFMcNSmTDqZSW9SMaKcaU5tVB1gJUZwr",
  "key3": "65gF7ghKLmVCMU7vn68wnWdKwbti6YRGBFANGyUHDGic9re5JwqBHZzxddtW5ErM3wFsmTEpSFtsrqWzqefddoAC",
  "key4": "2stAhathzwGs1gh2jpupHuPm59g3x8whufUJUUNXD5jqtMqAowTMy6o6TsyMQEYEKncceb3YxSbNCe3VCTicx1Pq",
  "key5": "uhwcHZn1GP6DGAdhQ43WR1DQQqKVLU8YZgGwXCg1pqzoazbiY6E45PMb2iMsxCEGhU2UN66ouKCNtuXdwb39pwt",
  "key6": "i1mwHUEeXz9wjEWz2NpVDYAjaJ4KxdWvZVsDmRfAdG7A32JN5eyytSqJ4A4EYoNDwBYDEFvNXKyViLmhrqzCpUJ",
  "key7": "2gR1d9xDBEGkLxf3t8RdyJCwpwSXQ8qBEbNWdD1NpLWi15HScSwvrd3c6k9jo8PjccJsVGnBE6S9FU7WQsQ3ZyFB",
  "key8": "4nBDPpPhCi66JwwGbCPwUJRRzPRUfXBddTrrrdqPczLHQSJsS26HJ7KPgWsPJpqVd6e36RGpEC3bStDTDFpaAzXX",
  "key9": "5aXd8SbHqY5bQo91dR1HystBKLZut4ZxR3ii13tEY82coVyjRKkya27hQuWfoYS4QZAZVjmY6fkUFV5H7LBX94hH",
  "key10": "5xuFdKSqkotTX6GurMByenQc5K5Y4TLSVPu4EHYvesbkRRYuYZF446iGdgHaSEKT8XEek1ZniyJDbjrWzsodyNz8",
  "key11": "NUW6f3AruTC953ZhyMsEZYQanVM6DbNeBdBNpfiLhQxV9Y13ZtdTHNzf8vg84BfcB8y1o4tPniRCP3NbLq5ks85",
  "key12": "5Fhv4a5JUsJTX9V2m71eTU2yquCusdewN6R3xa8LND932yhXb7zsF14VTtkjVjcfUPaMoPVQA3R4pAf2C8XyvnAK",
  "key13": "uYRRrJXXuRF2x7uzdXVowkDGXcvx1AhcwwXzcvHDdWJJdnJgaaXLXNVU9Uoax2ou4ZUHbDqu5P5Y8W4LMVHzN6m",
  "key14": "2L9zjf4t63xT5V2VeNYjKopzysgof3b2FKU3m2Vec45kX5n78vJR1Gy5gXagkdADMevGmuev3vSTs9VqXmvutPgy",
  "key15": "5PakYob2YPqu26v8GBXoqVbdfaV5aSSKwduJ1sJDZJF3MVDEJr75tWeCCUfvVx62fiFgfgA2U9Bf3mTC7bHHpBv5",
  "key16": "5vEXbENWyrPSJ5ZUQat9xKhmuzEEzwtqjFe7RArRz1XT95veE9K7bxvDjj9sGDegSTJ6kpheJAQ6oWhvcardK7a8",
  "key17": "JvukEvfD9o2X3BfDBWaKA4mDbryogQffAaWqVC5UEJ8EaK6xv3mDCLXqzRQqnV1to22NH1R1omSbvtzadYFryG7",
  "key18": "5PbteuhsbJRnHPf2NxG3996xk2KUGVQ4b7fJEpg5TZv8G81hD6i7zewjXrvzAfrrCBPMEYqSzosVXtvb6nRdMx4u",
  "key19": "5vJs1VWHjEYx2gH5MNMvwCDJ56ViEFD48pHHaxmujTW3prZ3Vrd62oAZcupetzBqWtfwNMkKkZ15fMvNwapJG5rL",
  "key20": "tNkKKptGu4Z86PtYdyNFBJYJjBDzJ3TH5wNZHrNLLgtWumf6EE3fUVmTNY5J475Uyrz9YyW4q3dR65BF5n8BsV5",
  "key21": "udaxQdS5dfPxjrbrg8ZCD8robRoRyU4JQr2rFDAfH6ZBzZkd44sfr2o6W6WKKhbTJrhqnevTDaw2Zky3MAZgJjp",
  "key22": "3PHAftKYXK2LB6MbKj7WcV3esZ8WbBsBMwq2U5FBt7Vwivcy4YkhnsktnTss8gN7Er9yRo2ytkYyCcPyS9qPwZqk",
  "key23": "5HYKvNDFb47t6eZg4hg1N3ZWzJa72GeUE6AqgxgYEcLM1dHhKySvzjFizkG5QxdJFdardbhQDoruUq6SCnuNmE47",
  "key24": "3jvCmCuhL3DkqcKEJhy5QBg1PbHjhQNj1vXGPs6PX5dRksqpwBu8cWiuhum5ruxtMoYJmfdGcMUoazMLooekoUA9",
  "key25": "5VGtX1eajXwbnrM9fWz3YwnFt1xw1bg2cYWwrFTZRJNqJmA6grE6PiPXet6kF7z3QHhyELyxoWn2j7AH4UyXQj4V",
  "key26": "5GF3vEHfgRZGwwPtS33sxyUTJ2jDgM7xZgbB6kmm2mNhEVGvFgYi5RrnZVPHFhgiqn22GDQ7M5oCdf7J9QM9sirF",
  "key27": "5j48uf6iezEep5UYWz24v6irqoKhUdD5pNVk9BVpjGsrNd6VJ1tEcTWXBWLjP2C61bNNxtzgEwg3njmvU1Up3QNV",
  "key28": "3jo1QNozj7RbhxgAP9fxABm1X3XVzNYDbCqYnFzp2K7WdNRuX8CvsretqrYbztBFV6w5WRmHfBod8CL5wtRgJWQE",
  "key29": "5N1oFPzJFvCDnjoyJztaqDZj92LsEYphrJUA3nGDRSBwnsu3QeFp1HP7DsuMXQ5wmbZ4em51WVNFGr96znGeGf2R",
  "key30": "2xobRxZmAnZ74FemnnkAwQXj5PAWJYpF6rg6CkHv3X9feS47iTRswqLoQVVsNKcxpcQFeyhkDqRDqdggj9Nu27Ug",
  "key31": "3kvmVQUsMkGzKMPFHKvQq1kDEt68yL9Ed977rspXNknVUawQSwAiQH2bJbCxbH5yDwFZ4QFAido7dZaaDrhtoy8b",
  "key32": "5nz1uEPx5af2QiJG9Ew24eJaVGGJmrskVr8fFeaCtZCLpg6JWgeFgPjoBc1DhL9T5b1JsfP1wwi9qhQnYEVCJHpE",
  "key33": "yDT8QUwvr9BLUw6T1LXeGdFn51wjRTP8qPmokSMkNDGQpYxJJf3bLs14yYdf3mfvGn1qugpcXXYuDXQedBP7SHE",
  "key34": "4x9VA268Rx9kZGcV7qWbhf3iMLXGGVHuyndvRbHPcCJPwWUn8UgyKxixeqDHUKBDdGpdLq8iLoqCpcdEE9Jdp4tn",
  "key35": "2DHBMLer61tKx9vWrvUJDoPQDWeX2XSoBAPZz9NTWMcVnt2iBBQtmnTfYyMTgx1shLNEwwCaRu63h8ha7rygsbZ1",
  "key36": "3j2P6BV5RPxnPzS8gqgAemD8MABmPht34nzzMLEQ4gvenHNSPiuy549wLnA5ukuBp7eVC4CTxckNVUfTQ3zXKwoT",
  "key37": "3Rq4SaiscaVrCMz4SA87EXPj9i4HqVmQhXjxkJx5bWeoMNpk3VVuGsP2H1wm733npG57vEuYAV3Ag9kjRMxUx23J",
  "key38": "4cj3TvdPfhY9hG6pUCa7bjMGa2QXe9BKxvyz8akCE6H1oUCJi2jCjZYnVCgKGBm7h6aWUFyRMSTfptMVG34NsWjn",
  "key39": "2e48c693oyDKdx63mam8Lk84rMY35FXmZARPhM6xR3QnqYbdiw6TJA83zMvjLordtF5khhMG7xhHxiSMSt7i6UxZ",
  "key40": "26sVjWuT28zZxWB9WdGnVbvaaCKjovHw38VzYxj21sj2CLHB6QYDhZXewmEEVvJFG96JacNufSPQMJMYvvspFDet",
  "key41": "2V7WgyyAFDyS6ke9P6s36wNs4pB52hGxSNva5xNqicbc5B33rzwsjhgAWNXXqTgFZGpK7DkMQ9ULEFThzMY88iTi"
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
