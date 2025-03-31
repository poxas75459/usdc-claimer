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
    "2jbDAswLBGHgRHuVWCdq743zPrEkiWGaZ3ibzSNUSkZn17NREArBb7LDX32HUnCgeabjcLD8QCv2o5Jf4fURYsaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9383kQxeUkFzvUoZqVkw8LhMRcL9Fd6NQVq6CcgTTQHsSy1rdz3DQCx3ZvpPCr4PFxKBxxmJ9zVLazE1hY4Mfp",
  "key1": "LQF5x4MyEMBb6w4ui9CDriuNbbNeUWKtaYJBbRvnrHBy5bzmidz6jzhSBFMcwQcURSooMLDH5xatewwkiyRfZmq",
  "key2": "25ECpPD1NG2SfzKVDNzNiLdF7EySZk7xRt3TkhpDnSzd9KBTqk1un7ZvPBf4gQbwvw7FSHFEjZXnEcvooUCmeXAW",
  "key3": "34Xyg5bq81RotTLJjkzGQMnabSdGc4jLRA7FUPpJ68Ndubu3ZDnkhRpGvA8tRvTj3XkuHLvaXXs8FfNEgSjUvjNm",
  "key4": "4dujNaoFD5neTuraBPHxSL8P1czuUGqP54ezC652YguTBab9Hs2ibbKfcaeyBq9PFqAR7PsiWgo4ZYXbdGEmN5Re",
  "key5": "3KkwDv9XEvcmnYzEC2btcYzpzbiAfrsqyKm6jKd8CKzXMFNTXcGmMYCtyZQd76YdW6FWeQMAZNimCqaa38gXzkdL",
  "key6": "2ptzQxUN6SRvkLaYixz8SGL4S9PvCbUqVYJYmxJ5xdgkr4hBnmMPRJQYH9D7gQ9WwXDsyGZsQgrw5x1WFLmZQBen",
  "key7": "4o83vaJmtouZ3DE2EHjjSNuB9F7NphkNcLVmTYWJk4grSCUbGQDSNc946qfVtVeh692QGyXa8PR5UHkG2wh5R9NP",
  "key8": "4sq4wfLzt3uCeRvuZpUtaxFA79CPcRmEDezEyXDyVKJ9N6HTcGeWbTDQfXbep2ymhHi3J5fXoJQsHncf1LcLcer3",
  "key9": "4UeyvPxyxtcK2ASBz8qLgjMBhZk71JPUksoX3ES5jeSUULRZyhfonNMaNXMs4drLhUjoNXpQEZNETaCsveZa4Ji2",
  "key10": "2ZyipHsbihcS6XVps61qViE2Zjp3QvXgYwkfq4gHnceGaqtS6iXdMZuwbHSULYUrLewswBQgZKMzARPjWRp1DCzG",
  "key11": "2oftEjqFehnQ7WPESumTmq75WsAnsnishdQSdtdvC7kgz8Toq1DZ4V2rWMkHc7A1NzTo5sb39DDd73XsKWGSSrEd",
  "key12": "4nyW7T6jyYMWKXdXG8qwKK2R1PwVXzUSk9FrCgG6kBZ1kBBw3ZCrVE7Mx4DQ1DheYX6kzy3o9E1QEGyWGR3HaLzY",
  "key13": "48YPkc2qBSTEN2Yv1z8u721NvcwFBK6XFA9fgpoLZKJTL7PedmaXNY2rjggrRbxywJPc3G1y3frCeJARmCWSNzGs",
  "key14": "5KL47tDyAwqx51LUdwKB6byLJCzv9zZwEyQho4mkbssRQF3nzzGy7MmcAja6ukPZPGZYTMPixnN7WvCYtSDwk5w8",
  "key15": "2fX2s4EshtsYFrbiCY47ZJWHLx3hhvJHyZ62HbSpMnRTUDTuJrTxKaTDmbWtYHvUYn4AHkyfYGmtfpKBmZX7Ja9A",
  "key16": "3hKu8mYu6vxSqS8SignaLquqnBnWFCUHsQK2udy9N6RZagVApxtTZdfFLjq6LwCWpBc3h7oyFbDRUcwms3efW61H",
  "key17": "3GSFGJbw6Mh5pp4M293Dtykk2JWAygiAa9bAmGCbZB9zfWJWVLuS6HkHiEdMu9d8JqXKArGdNqjDXYZfScyjvwMx",
  "key18": "4ogQqq6vpscpLFgAbZ9QX2hta7G8i7LLcGz9HqzaoMXYqaKQtmu4oh8bAMFY1ckoLNzE1kqchBM2g3Ud9HKDsmxM",
  "key19": "4gd7MnJpgyM2L4qzwisgUPjhTEeTpCznTxsrwbP5q6CUMWSEVKuc1LcpBg7u5LR4UMgsqDYQWkUBnCYuxNZ6vv6y",
  "key20": "7YhcbC5FrzJgBfV5p1dP2fCNx5HBkpbFzSbFd4CfMfE7bG7LRLxs3RC4qgjLtkAzzJhZAL9X674a4B2jTsKPZuv",
  "key21": "4Pn7zadFtbmJp9ogVVKUfkSAiS6ZS1SDSeJ1hGTXYaYLBYo7WxyVRDtWPCL3nZjTYH7TdxqdeM56h383y55B7sL2",
  "key22": "aavkDj7g41BfeuES1f8VJt2FP3m6jcD4kiAW5gHDgBnKWB8pCyJYwLgo33okaNdihLrSSBuGroJ9nA3WdJyf6XL",
  "key23": "5EyYuB84VH4Nd2K3JDLdV2B3Y3AxrG6uKPmTP4ziYvJXvyUMEqTUp3HqGuee9LjjppJcxM4DWj11nYJaRSgutoB9",
  "key24": "5FVjYibSdS9spT8RX7oP6kqh7wvvBWLGDpxWsgHDLoq4tmiUPeCfB5gEgpgUqZUFQNDchE63MWXyT1tzeVVoRKLd",
  "key25": "2cf5AiUNW8yXpapWyyTLTZRHwhqhycUA24HVArpZZjSFDoixyb5EhRBwJhhm2jgFfbnAAbQjn7RG7ButLJBHBXQX",
  "key26": "4U1TPNPj8Tyr6XjPYsSYzQX3u69ndhjdns1CixPNWQsWng3icH7hFEThBecpznJ4sENxUq4hKFuf4qFpgMmWqZzd",
  "key27": "2GDse5HCV3UAA6FYmHJHqm8sVDC2h2kJoYVSahYe41BeYQdbdgwSM41VrrhRMg3FU7YbbwzWC4ZSEd4eE9pA7KZa",
  "key28": "2PdQt6JauR6DzpqPyhJJxQgyo1Kwz5KTj1kdKZWj3ZBEasZBP7QZuZqUqzqZmyWecozUKXPXx6QPGaVP4nYygqcb",
  "key29": "AgZ92LtxQxH5jjks19vPDy5aWBTDSGA9bhd92uS2ekTyjX2rmzRyacHLq9Qqz8tJQgCvbwhmYv6xCyFwJH9M953",
  "key30": "5cA1QpnaycMTwkKSQUgj8DniBsKkfiEzyUPbvpB2X3jdx7PmUGHmXHwtaXn5dbhHqN3VocYgsVkUEnkxyPdAmw2b",
  "key31": "3drpycmgqWp4dzHjbmMK5pSG41XVLnaZz2QKgVSuKLv2HezKSR33i2jGnZp2WEWJgfTw3UpJZbDGp9rVJF6hsF74",
  "key32": "3iAkJnW7BkJVCnTXfaeXZ92bUHLPW23Pf2Ttb2bwc5bMLwX7TLMzt54mqZbW4ZMREXeeoongis8ts317q2bih8wD",
  "key33": "1vJsj8E441Z1Ni26VaCWL3Kehk9Lw8jctXwYDQXQBU5DnMz621MHikuabt5DqRYVbZDsq597RRtG9Z7NVq9KUa4",
  "key34": "5ddZhNvfxq61HkweqTHAZyxcm4BRqQDH595SmNCoh6vsmuRpnsZ1q382r9Zhxh9Zff7EBXteXjtCxMshhMK2Wsiq",
  "key35": "2nMRQii9eAnrgv6SUCGRuw8Y5tDDpsLQrGUv2dyCiWXb6CBnw6Nx6uZSzEq9RtUNsPPn1w689ZQPrjzdw37eGbP5",
  "key36": "5F1pe2xQbN3cA1WTWHbUSK8Y1gb95s78XdjghkRSntLq9hA5ayKdzGByzFnXsYcLHF8iBYTfhAicxDRWmtpG9vVg",
  "key37": "5KtTzY1rnuahSLnniG87nV7imPmU1Y9kHBnEhxcjWcmUGKKxxiugwbQ1nAoB8NUBrw8Qq7wGhQaxszYq7t8gDwtE",
  "key38": "Qscw6mdogCeBpVQh829KYWtWexh3Zzjukje3264Eh8vZJao3KDDhFqTgQDvBpQnfbVyPMzvDtZoUTpnyQnmmBMz",
  "key39": "2PmCSQ5Se7nZCHZJnihFfKhi38uuwBdFSZsuLX5RpNAPv8TR26bFRatvGQzppnoRw5cBt7zEmPQMr8VKCFXNQbyY"
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
