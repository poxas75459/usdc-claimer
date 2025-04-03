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
    "Ed4dyEKiS4R6EDBRmWt9R6rgntHsLzdVX3oE8ZbtbaQZF5V439G3jH48aB2Hs6sFe23BCyGNNNNKhYFXkBe54Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xb7Tt8kMFS1J23cNDVN5NBqc4xt8DjBAwzqqA3mud8Yn4huFPnuoBtGWN6RRx24cHcDCub2xQJ4PZ8qZJM8NG31",
  "key1": "2SwZq4TRXfigtvXPL2LgG8sRYSZKrinfuTrd1mUmA11r3VevXtmYs1LfdvZvHk8RoNKsBGQPCksKLQbaBnmpD82f",
  "key2": "4NZxxMLuwwe5P9LEGDGbYorWtsc1ZL22UxALpuEUD4pjjyXvCvddQfJTqJRD7Ch5LAFuYvvN8aQkAtWwwvutkkho",
  "key3": "2Fud6HPUKT2YygQ8oxmqEt54U1yTjRFAnxf8F2KMu92h4g6Q3sNkQcVB4XP1CP83cuWtiFf7ajTxhCjW7B1DjGBB",
  "key4": "3u5C7yi6AUssi3UzpyRwNWjNEPmxXxd8C3zeWKjr8ngDB1xRheyebzrHM8SBubSjUfeLzwzhKcMTXaeik6vHHRx6",
  "key5": "5iTXj3nqbjJZmm8kYUHZixvHY9kdh8kzrFUdQ3iVjqBZfUgfQ6G23A7VjkPhRK2L65BFEtsaqFkWFGBakWgWrN2L",
  "key6": "WmyWg3M2V3Hkv82Jyc9Kgs4pjTHmAUxoRLAeeU46dnKy7qSt3ySEhSjxVCC32wUgLSQaMdB35D9DkFbMMec63nY",
  "key7": "4fcbeUmY9rzsoq9HPCmhMqX7AqwiXa6FXM6iBbCgURuex6YNZpU5e3pV3U988wUSoXN75HCDCZqLBCkBb9Ykguj7",
  "key8": "5JnJdRvfFpU2HTHZzvMMsCgAbVh1Ykw1F6gvcBo2DbC2KZhpRjUPmxSwn9HKCUbWoSxLhaot1KgYwDHKz2RMkhi5",
  "key9": "4ySXzffur1Jzy6fuwFAjSKmuK17u63T8mY12Cb5G6WmEFGyn3SUTwUP6XkpTf8zDDvjbN5Czyn9JDfYyczY9mshV",
  "key10": "3pHPmfXdBpV3kzTcdqarYK5YGLMuaV1i7L7ygGJmdDprwhQgi5F7tVC5bnTwfuohomEgEYWfwruraVZjhUkP7SbU",
  "key11": "3wQ1jwkt6E7LP9wipYCdVk4dG8vrAm9x9WNYArthZdQAb1UNHP5e9UnkjJpsiJfQ8pwqUYT6zXbD9AhCNUrevyV9",
  "key12": "3LPECkevQ4DSLGYSCD4NpvXEQH2NAzfdokK4aPGjaVDy1YY9hoSaj1xqxM8FBA8Kx2KiRDj8D9Zr6SgtZXz8gXiE",
  "key13": "3Xf5HdtrkavECbgT51VckEcxzzMnqifvsRN7UV6XK4Xw2izrqpVeN3ukvADEdujfw9Z5LJB2DKt7smcL4mRK5Qtm",
  "key14": "2vNzXq5TcctZTyzgg8U7T8CHd49ANmEWbfTakrbjQPFTG6iJgKL3z55JfWbQQa3eKuTX53cD7waJvTuVARZmpATg",
  "key15": "4zcrpzojKnF88gKjsnWncyoafWBZqTYYdUu3c5uq1T4oDuqzMRZUtDZpGa26m6mFs17ZJMF7BywcrGxNwBfaDCLC",
  "key16": "568zx3yDWcQb9FMoC9QRK4uFWGV3gAgHTuVZKh5eLr7s3zAfeuVkuQncA9JCpvY7pJNmgQDhCLfYGRhSPj8Y6tQa",
  "key17": "2w1tyuLdVMAsPAWwyFg2uY6nJtTcjn2p91RpH4JP8UGJAAYPJPZ4UDb4Vm1mG7H8uzMu5QjFBiKh58zpva2MWeeB",
  "key18": "4XEUYrm9Aiu9F9uU2hhCdf9iwgBfKP1c334bXgL3L87YBnYh3PuknxmnbXk9xjzQJMJqE2tkLj91FpGT2bzZoK41",
  "key19": "65RPmHgchc4J2eh1XMH8rpXinSkQpczM8BpxPGoviQmYMsQgKgbx9gdSD4K1G8RavtHsNkXegudLhmzGQv48j2wR",
  "key20": "4aNHAVGUX2nJ2Yt51gVVfZKhV64p65PonCnYQaar8s7BeQdBLC8qeDFZpV2m8YAvUCgMnKDPVGD3swVMB8uqKcQm",
  "key21": "2V1xKpg137EGP5d81CRdaYUWGfwxxtXRc2E9SuH6gFS9BJ2Szadfs8E6Hhsa8ZXuWuYzs1Sa5CwhhVBuwe1Tmwhr",
  "key22": "kmAYoKjjLPq8WEUv7vUaM4ZE5sZZLayYBwXWcoFUHQWatT8V23bMtjREhkzAEvTc2XCAw3FhaJcH5WuaQXenuPD",
  "key23": "4r9vZr66eNVdpa3AhKP1bLG2N5xZaxMSFRTzxHrjtb2TDgbPftys6S99YFswRQiRBCgM4oGoGf4EmhxL6jx7e31o",
  "key24": "21R6r65BU9HD6UkYcsSHi3ywq2rYmYoYjci2dzDkJSMRhTi86pATENiWvY8cyk6729dk9KJ7jbztpwe8o8mtvGbE",
  "key25": "2ANuqYwpS9FWF1YCZzDEwxKfg3YLAcedvx3cBWyxQ65GCue2J8WK1hpFVjTEeFXBSgjqoKdeQcmRwkfaHaioQnee",
  "key26": "3aSTg99vUPq5jpRjHyP1mpMSDB54o4juEwtgztqDagEVrQQtbdAymDeWzZe3dD4Aew8ACUTrZJNuYLXwucXQ69yE",
  "key27": "ABaigpiMkkkZeTNGk84wBmga5aXhnRR4UJnq4zp4UqzLZDm1izeHDvqa36xwqec8Bxnusu3jc3Tref2mnMYWLQX",
  "key28": "4ALLnkvvNgk561bHFkoVi3Yyfwa64Edj5rWTL9vJVne2AsGRTRoW3q1Dwjd61H2EKabh5cuDv1dnefdYgHCyMFb6",
  "key29": "4FMPWYRSoU2f9TufuV65nTFM8szWDJ3FABMEbJ5W2gtXpeQM2yX6E7JPFTHy237eAfxgXM6EqSbTDsbb6DJFwP9d",
  "key30": "2zfJiYEAHrhermB5QfMyhTz1ogT95x8JTAXwUmxMF6ATabvBkvQa2R8TGzBsmqrZR5ciBtaPPa3wBeY2KdC5mkUe",
  "key31": "3DjP4TWF4HP8vHYuGhEbArq5v5nipjfhq5tq52EqjX5iBdFfzXsGKbNqgRbhwYLWuVF2evW1PSEbrbNemhLqfYNp",
  "key32": "2mM2iWW72fUyAF4BTzx2mzGRLiWwpXaqS3aiK5jbGRYN1p52XSf7vz88zFCqfBCwKTxtyx4nRirJRAeAzSKSzp3Q",
  "key33": "32aqzmuw7zS6aMqBDZ7h8f6vRa895CH3o6o1FcpGHpFu6ResUf3MEo846eNC7suNfsfnEiRerfBn9YaP2fBd3yn6",
  "key34": "perK9rq5ErXBpvnPiFy1twpWL5d4NkNwpgA1swE4d8DXwm6y89TCwKRSH7wDgSzYFSYyy1dNkQB6cZzJBtDcCcm",
  "key35": "2SykcviWX3f3hBk2FXqDs7YLHrVsrnCdVKo8ssp46JZ5zTA68WfCGQnY7H6n2E9SQhzCgebpHvrz7Q2mPsQX4auP",
  "key36": "5zdKkYMMKNi5rndBYFWbEeiAqeYNsWSPVr9pnoWM2o5nvjtaxNs9QPsrZwDVhoYNKZdobAom8J6oPdTL8js2or7Y",
  "key37": "wGiGLXscTWzagx8pMkLiy9Nv1Cy2hRErHtUGWgCF9zewYsWmHU8sWRAjz8f1hH6Yw1qsyju9q6LYMixEC93m7Gp",
  "key38": "HWfJSLw7XCtD48idzT9nxCF6uAABEvyNZbEkY2sKNPun6aYuTHpF8y9WsU2V4yMoSz3Z9UGhvU4dH16vLuCTMK9",
  "key39": "61fdLqZY2rCCoQPQM7mUML7ctvADdVuFdUFtiMpdaizEmCePKw6Mjd8ePWYXJscqvceaob5ppKCftNMWJyMrGmQK",
  "key40": "5dcAabx3pyEtHmxisM2xWLQBXDwZi92rfQoWXCtep4mVk4zxSdzWHo9wHNikbex3zR6zxxkwtRvZdj7Mv4JYPjLT"
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
