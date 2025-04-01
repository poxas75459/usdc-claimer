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
    "65xscnoTC7MD8LnTKiv7m88MBbLfT8zShYo8z2Lv91jVhi6XgbhuabcJvEyhn9RZXAs8if32ZfWTSDyvFDRaapRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ave8TpXxYbGNaMYZxwVygSxhgi3rF5Jo8mJeKPXXijyA6jcnFot5YT2Ybb9JDjV1gkYGkAMY4MSkkMd4mYa8S1d",
  "key1": "51A8eHDqiCSECdZmdFxLcd6VwtRTp3xUyQtmsNv9pH3LE1NL9nzcuJi4aUkCnbRL4sCmR1ZuPDHSy3sw63jNZ5z1",
  "key2": "4sjgVh7UfDpCF1d76iKNuSETnvjXhUFLbXsQTA5wHzsroEvf9vppiuJnDyXRDt8gMrGfsN8hfqmxLCxXnZVyBUjd",
  "key3": "5CGMW42M6fExhiXYsxNWwZy41iBUSpYUACMZ6SBc8jFKhMXnSfsNzd4wVrQmXWSZfXKMT4HPzz11J5or5RrYwV3w",
  "key4": "2GvZT2R8gSKExxeRjmUv6tGaY3gtEr8hXY2VjyNTUwXtddrGH72CBzbDLCwkhf1oAhdqUhHwNvoMKw9RcbfqmH7u",
  "key5": "5aWik3FGMVuf1zN27hnL62yURgBrbuAco52btznSTCgSj2WdFpEJvzbtta9L8KY4AogMPVFUtBb4W3gCKx2r3s1y",
  "key6": "5kFS7SgTG6pumE7dw3kAtoYsof6cUEzS3pmxKi3QFUTNQhe63NpKzcBzc8Z1AtefBDaK4LKgncoB5C1QVaR5dy8b",
  "key7": "3PagduV7YKsu7U5XfQedts3YFQkvU6UsWuELt7nyAcotBzLtCsSFuhxSvjuhvVaPGJwngSGGVNzCfw5yDvDcFjrh",
  "key8": "4cZzyAd99xKXjY3UJ5opRE5RPLtci6beKA3Qa4dbZ1UCG7JayvZyj74q1QUtWEnEsWghEuWsmPWujPLCP8ecyaW7",
  "key9": "4X6VwWhK5MnvkkXEE4W51z5GXurRYi1L9EJL71ieC9f8XoJLwBFwNKJQsNCbmpeg6Yzks6V6bUoK89G8dmegrtyC",
  "key10": "2Vp8DJTCxZj9yR7djYq5yTR82AVBzK5gyPhJkrg8Bku4QGHutFiUuMpKTTJTP8TmuRnLWFAheizSgY8EHpTGq7Ur",
  "key11": "3otdhaMkUszSw3chUncJGi8n32TjQ3vuxJeDVWxRFPN6WD5cPqnFLv9kYrgmX4nX7ngJbpkZENZXpSUNtC1z1ubr",
  "key12": "52oo582Hj33zmotVGZimYv6ZuVVLUGwYLkMcBvRh9DUNjeQHsCoPEx6vX2HZ1dW6JvFBkzJxWaokYZ1hPu9iADBF",
  "key13": "4EUxTuSTtET1QBXNUVFBVZTKF2LpqqKTBazjBUECuFojUYg48hq2jTVixnQTEJ5LM1W6zpgZMZVfsEuELwnsEC2S",
  "key14": "4pSAxVdWEo5nbPD6s2ro5tnGkWLzuCn8RAPjejXycEAKDqjkeopKnsfr1bmzCgyPWooZ8eHrJaaWaxWF4tTCf7c",
  "key15": "4rBXvYcJQcfaQAN7WTME3z5ZectiM9eFQUX577KDxKip7rTUeZGL3vUiBKnCsFQDpMnSXorR34svgxE4k4FFGc4a",
  "key16": "MpjjwoABUXj5rJKCBRCTMJugi5xGoEPMp4WBEAA14ABpKsGe9h51yT6wSCycxYjfYRRWvkqbxA1TC6p57j3VZBr",
  "key17": "4n6raiuy1JPBMqDEpMW7YmDPfV4PSQHyJzLyLnJ4AgCW3nN7LNpvzq3szMaC7jxVUETniXz1ivMw97aXW5RC2Trd",
  "key18": "5yQfGjNM1fLY9dhvVxvDhtutrktgRkNnqK5xnY6AKv2QKVkxsvYBxqviMihUpm6DLoGDCQpxtWiwPrGATyT9762X",
  "key19": "2LPWkHPdR1dLPk2RPj8cBUaTckAwxuz7kxxZLP69hQkKqsUT7JQs7zzgdF6w4TuvxDLo9fxtpNeR9t9D1sRa1Dde",
  "key20": "2qG7UPxBC7hzczDMLbzG61Nz9k7FJw9aa24rrBaNn7RQhq5HboehcHipHtdmQwSo2brtbb1oN811zyMpbzrfHB4K",
  "key21": "5HuFY8wAGe4i3MtE2UmhMiMXWcRFrTsfzy5VRHPHVxNkCQ5tozyYnoukCQS7b8kjD3s6dnawjQUjw2put6K7zozS",
  "key22": "3NjQhvPF2dw1XWmtCjmMChwD6C6ijRHuJBauYChRg6PCNBYvvtDBN4HrK16pr3DLMBhYAyRo6q3rTonn3jm4ZJVT",
  "key23": "8wbz1d4vHweXa8sB5ZUUCx7u7UnAz4J8N5pcBct4ZSRwRzbyUB5ymYTPGLZmps4VciMKNSmazaDwyuZz4PPZdRX",
  "key24": "rfwjD8BRay7U4aAjsCUeGJpDLXCopfn3dqXh77dtaRtPAUqvRLWCXYrg5Pn39pmDGj2fKwZ68fvRYrBzaJpaa2s",
  "key25": "2g7oEdFmTcqC55gNU13xnHKBAEmik2BJggaNrmp1CMic9AvuFp2RmYdhToFPSvEe1K2b6fMcaNkYfVCsBUCH9ZNc",
  "key26": "2tEXUoUf3YzHFqgykfAMJZ28X2QfV56ARwwRHsLAdLK6b4YPsupCqs6jd1Cvh195jrCNq9BG3nRXjof6dhkf826F",
  "key27": "2Q2Vnr3FirVgPTuypr6EB3TbnzsTyN9jHCLkBiPGS2iYhNZqwBFMwRe7Yqp6X83SMbRNUe6NmFAgbYk9ZMbpyaHN",
  "key28": "26fk8W7tzAVDDJAVY8zj2JgkLXVBnRrCCXeLPNb6KgPnHpSGxaVkCDp7uuAu872oQoB1SgomYdPnuKM4y7h9HsTf",
  "key29": "5EenfwazosHVkubNYFt7S6XPyFEgdAo4iAb5WHh2DuKrAXH3kHYKGLsjqan9GqTghTn1ubMmEUeg8wjUmTDSJchV",
  "key30": "RiQwvShWkHK6k6pQPHjsR5oatQXQSRTCyt3orM12AG1q2d2Nee3f5g59MVuoeKfu3P1RCsVHyxK2b9fcspTHgV8",
  "key31": "THQCXDTFPsPk6RBb9wzd8zsSronbDQmAh8wFDjHEUnZks2mK339zPTuqCR7nXx6UyHKob2yHv32erYScB8kYqaU",
  "key32": "jNGPJzxgU3S6eFovLvxe8FRRhnr8NCXW1uroderDuxEviF32TiJmDVhL5fcAG7JmHXUo7uhh2CznQdEUL5KwwoA",
  "key33": "3Dt8bE3AQr7vyGB87HiKHg73xRXBvy15ZRtJNJkH2uzKKtgb2N1Axi8RwauehRXeiFR2Z561bUYBcZm2FHNmZm2h",
  "key34": "2rdKpuKSbQRcdDDGoqo8Ld7cBGHMQTUUDeAxpYwDQ5vfQGjVhcfHEHWFi32jFDnwpR1Frz7thP9aT8X6TEx15QRV",
  "key35": "UuFqfsHP31RmmjD4p2UL57DhS7YQGKqCCBdk2VTNypeK8R7gFgg2qvkJjAYJCkQia89PVTt1QEjPT6DCYXExriG",
  "key36": "kG7sGEaMwXu5bHcJESLBPkt9hhmZMazEFJiXqNUWGHCfAEm3YLKC6jumktdggzq5ba5NQrnfNe2SXV5Sc4uqajy",
  "key37": "48DCMn3HVZNRTdR2Sd6AECKPiZaJvJay8eQ7gqnHn2xeTngQFB9TUArFJ5DQcbSYJ8yjgRP8kwF9HRkxPAnxcLa4",
  "key38": "2hWeERL1zsx3z5YwcJ1dpvDqt7Mt3uwqqk2CnoCPQU5xH6KGE2dZfZrQ8UV98aYZqkKg3u2975pSxWzPkottj6j4",
  "key39": "3YnP6qPcqcdVpFkjWzVrbu8384tyWFHXwEDbL3DJ6p9Md8c8kQnFhV73GvEJgi3sWQCTTN4MdsT8WN8SWJunMtWS"
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
