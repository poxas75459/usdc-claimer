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
    "56YacgzhU3cPXYwhxS1bQgXPQoE9Khf2VoUjLsNL6fDdZYyXVAVgxp2VjXjv4J6L92JmHBQW2dVRJYs6BGWki5Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmbwQtVqVCMRUB3beMqpdqLKz81oiCvLVndrvgAH4UbGPFpXaQBNuPj6ydSgsqSnBYDNEna6Lyoyqckq6xXeW3X",
  "key1": "2Cyj9aEKRkYKvFLM4SEZ3MSgRrrPX1XVwhjiYo7f5L3twVyaYmmNRdPeKpXRTqAhX9R5KLM9aheRofJ4GEd6xakN",
  "key2": "o4FyS3agdGfXnWSpXwkDPZmbZTs58yfkeG256m8ePbasBo11BfWjCMeZkqV2J7gP6E3zj3SYLi5cd8DnmQJWHFk",
  "key3": "4Rc5mxfGcaMYHggdVrTzRbsQQcrqS3NuFJL83Ucv7cnSqjUqXUeA9NA7d73Qzrooh7SGa17swE9EYSsKuwFn5zXh",
  "key4": "5sKi3m2PM177xsvh9bDz5FW6VobTsrFMXMdtq4wD7bbNQzzLPMfd4Bfo2Lx3s7xaXz5xk7N2C1A21LTr58UCy13h",
  "key5": "4tLPF18s6eyPUGGUcKwDGgzzJNsfSk8g5Dh3enXdXpQVi9DXGW9oPQXYqUwQFTc5gd3TzFoTmgZHXJqxtSQhut4P",
  "key6": "351ift1pD9RZ4wXrCaiSkN6Mdpu3EM49PBaJnCDv51qS7TVkWMFBzuBS1aKDfDxVqVdhjSF9ArbjQGBKraC4xmRS",
  "key7": "2PwoP2fyUFqPztoXRxKoEGtF1ua2xiqTKBhVK5HyDXL6Jn3PKgRdHQ7e1TwS9i6nB7KKLrGNxUFiS9ydkzz4VZ9B",
  "key8": "5CStg4YV7ArZwFPDmcuJW5XgjdyMrEB6qzSwKgecB4ios4FAgBD5AELUGHa5duc8xxdBHjxtTCswaf4ySLTXRDo6",
  "key9": "2jvT4jh7nN82GpDufNA2SqMfZSr7mMzYCzsEKZToDhWk69wfGfQwqsG2AVUqivNrhSBYdDWU9w38zdoNeWgYVPVp",
  "key10": "62gxX1SrvXzJ2A6dNXR2afmgNhu7enANVvsyG5GjipJqS5NFQp97YxEYK8ULHF3iZ7xP1QAkV4CGvitDtvqU2BHE",
  "key11": "qdQEFdTBdcqB8qqmuEE6FzTe7fNMJmq9xQDGFZBR1LwooSu8JZFo8fGmALWCxtKZeGbwTt7GRkJy85T2Miy9B26",
  "key12": "64n67ucP99w7gupzM6oDEWK6vrjTDQGbM86n47D5gSH1iRsgyuxNMREQHtxuyRckYKk61dy4teEoAuvodiomkZwz",
  "key13": "Bi2EuNTXwAVhKxGt5wkaJREEa3N6bn8uhobg7uCjbywBKxy2YnxDLNbyENuc5JuioM9p1tM7VsGEQ65RG7Cx7G4",
  "key14": "o6QU9419ehdZTK1cRtseuyy5R3nVqQCXGcBBcK1yjsYkxScKvTyRuZ15gFtzoHRf52cCy4zcxAMF9NX3qcjP7ZP",
  "key15": "2RaGjztkgCL1uEyVfEWfUsVJXZ74VtuZivNexCG6A7tqWjt85vHDBNAqJezYzLMC6UEmT13AZYyHjx5wnkmNbskj",
  "key16": "4BQTkJE7P3eY2Z5rtpmhgREenwNxvU2yiiv7X16Es4XTMrz1WgQCguvvkxopmhXSYnwaxC3r6krNmfFPeHLowwV4",
  "key17": "4gToBkn5XufvuTsYBVLJwk2NDyJChPr1LkGk5j4MJW4GKvKSidsUnoPfAw1DFfeCNmLksB4t1tmywpLvyWG75Fbj",
  "key18": "3zqFJaq6EnC5h5SDVNY9YhAkhL6y786BHgY4wTK6hkuZKzG36PSwZ7bDweAtF2QtQWW5GXP4wbRhgbLP77eQjoaM",
  "key19": "3vZQPpMx9wphCo6rFUcjLDHD56GkTjJSVpyFmS4Weo9HpN3QTmrrhH7gtnohoZm44wRLBUVP6bejMjaWCxjfDGEn",
  "key20": "45E4wazTPRYe97vemuT4x6mr3ioc87xvAGSfJ6dsisF3YAkvRxq4qwHr9vKALQa6853UKX5J2Z9mVqy1NYcc633G",
  "key21": "3D77mVpAbKHqu51vhpFnd9tswjBUtwZroA1dmGb7YcAMzz8q46WFUDyM62JuCkWmwiWrBD5HffuDVGawmriBygap",
  "key22": "4AYPphK6ZuLfRFJ6xRKFZ1wosNgw9QrcKq17gjkNb8MHjhmYEEtY1Gfc8t6dLANKfSR2FM5B9YMq9URZUojo4ktP",
  "key23": "4Uk3Qz5EXSH5D97uAGjKth8Q7inJwYgAAt6iD2ACLN2qjssLvd9P4dKxe6Ea8iRvozPHJNN5ZZmM3YgrHxpVPbVV",
  "key24": "Mxryfv8ZVTCMWpBm14kzpWuASYokDsRVJ9Lpw8PpLsgBJGT9BgZrVbWukT4n3hKgBXumFZb8ddc9iaYQCnf6wod",
  "key25": "1RyESq3w399x4vVvpMGiyGW1dLuqEis5aGUcyAWfhVaHCyr7saByd4733ZSfbfhz2qbt3GWJRrKriKypJk5qZHU",
  "key26": "9riAXpHfoHeisuDJ7BwZYKW4SG8zGVXTEqtwj8BXpEiuZquHvyLjEBFQgCBAaEhSNZNqHMJ3wKt9Mg9NrNKJ13M",
  "key27": "4Amau4z59rP5xQLmaWZDxshAuFWbvK3xsoLWUrkjrvyBqJf1K2QnbxXqCXHng4XrQAnttjnTsZour8eao9tPLTqT",
  "key28": "2bYNdy4R9P8uiEez4jPjkXC4T8oFMMoX9B13CqRTdXixyvJMBy96dWUtXsJWWePNFryyS1i21jcxzDYj5K2gWqC3",
  "key29": "3iNQQdtd9T7EAvGjvPRhk4EKF9rA4hrcH1WLNJNZUxnFyFLg8ybSZNQHmSKUiEoneRSA98xBe9T9cuaaQkVhqHyf",
  "key30": "584wFvT5bZoL7oLUCfBdXu8L8SfpbKMfwbuH8L5787KGfZss88yJffVFsb57VYkTqmFNG39VrKtk1Z17thGJMYzx",
  "key31": "49Yr1GXVdE2CsvCFdgjkWt4j4TKUyD4E4r1YBZEennvFgJVDwoJ1rpJh5FXR8adEkghs3jhmn2wnXf8m45esvhn2",
  "key32": "2XmqrYuvH4cszD661UW7E3D2LXcT5ei1qWQMoGTxsyjWiq4MZ9XAdqS9Zs2QxsFKF5fuFzuGc3WBmikx6qrRxpmd",
  "key33": "MTpH94UTutcJvs67uUomd7CCGAE1wWC18Hc6aiyLHy8iYuthWbSoKWmV3Az4vGEukUPk5HjpMWq9TqkdxjFRtA2"
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
