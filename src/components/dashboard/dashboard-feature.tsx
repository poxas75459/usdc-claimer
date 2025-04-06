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
    "2mgX42pojjsowVJHvihVnhtmGK7xcmfuk5YjaQtNC9H3NVCi2HZCbyNFPaUSxvCdvrCof1rdNn4P9bqiRij7wFKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZ3toQVfckqox2hrS4HkxXKyd55Ydc44wHsiEMEbYuGD8N8eAhzH2BqNuehkKpJ9rttzZge3RPHp7aYDf9JzXCA",
  "key1": "2892dA5vVzcZPRaPFjUpRFJYx2RNWfvq7Nc6zcsE1mf5TNUuvNJrLKXPgezZ37DEqdWEAgmSNzxfpw5d1RcPE2WG",
  "key2": "3kNZncH6AVoLK1esw7cmAHZsnZWarAUZtX4PjrRmsEwTKNdYNLqwQGkdrDBDmLpev1bCUYuMqV6ArBD2kuiXcXaR",
  "key3": "2UcmAPSLRR9PujpyDfe1r4LJUkSQ6uYYtdAJb4aCcgxSjteyGcntb3bC982toA8C1TKtaE91e2EwX31cNGWm5iWT",
  "key4": "2LqT3HVz7YJ2GzLPzkLJw2azmxVT9DG92C8kUk8vd35uJT3SwYsowrWKXzEg695NBrzZxmE33ZU8QhL7naqk3vxj",
  "key5": "2YPUSsAGt3Punj1m1AxvZFqfN6sewVRsHx1kZmmH84LPZn3S1wZQVqGBKPfk3WcAai8RoqcFV5JnKMBpDSmZrKq5",
  "key6": "2u13PYak1JwDQ3Pd63Zuf4WVVPuJWzB9RwTGBMV92TWmjgPVXzBwPUTUr4ZKoaZorsUpPv2yGhW2wzhUn389ZQT6",
  "key7": "3xhgPjoJxGXSgXEVjV2gi8tHBLgq6NBc8w6ReS6f1jkty9txm4VwjyUE3pwSD9egP9a64jh3qycqSTUKHuwefnzs",
  "key8": "5dzR6knuxdvUcYCPAvq9bJpCTL6Jcp3yz8ToXEi7roHiWGwB9Z36tbjeGaFxJMT2yTkdwF5ukgZKCWCLj52UtiBE",
  "key9": "24k6GsRNVuFxHEBq7SwQVDSXkyt4LiqYcLNUEGggD6LQWmnxXAFQVxKfcPCYAJ4NeanohZ8E3xXJEEeMvijeHnwM",
  "key10": "4VZJWh8FWp5YwEyUrBhA7ahpbVGbKGe3W6ThRsmBNrXX1ZY7ABtnp2G2EXPMznmJLjWEsTnoH5DySGZrMU77deR3",
  "key11": "2uQD5YW8AYubKyLbut5yC74fVLGsnyQak5zL9EwhU9P64nCPZDBeGd4t8edqqpXf7fWvCoZkXvHa7NaQQLGG8VrP",
  "key12": "26Cf2kQTKRX4uEu7PFLu5DfKq8EX5xVnH4Tnwq9Ca9KkfENUPXKaQhgAj5XHEL7eo8C1Kv9H7PXuiwTLQQUv7wpx",
  "key13": "47ncUcu9p41f1qFRDAwyXEDBLQvHEvRj1QJ6tcBznXifjpQ5AixNTn6NXvzNNtVGjCajxrQ2Dd8gLAfgu7jYherE",
  "key14": "3taDesnWrJW2GPoYt9kAVGjCfHLuARq1UAZeS9qrcCDbKqF155tkCEbwqxeFzBzD2S4viFCP7Esu2iJzVkNdXGse",
  "key15": "3JyipnXpmaZfbY7JmTdnq1F3yHKxZ4ZrPRV8QDaDAkDkigoseHQfTCD1iLgPP1USsPqbWGVSB8CEgrYesQZoUMrS",
  "key16": "41QWsc3Ws3nDjJQArsUhurhUUaqbz4kUTg1kEu3s6S3fRiQoFN6cUMEyECZMgReUwaN2cM7bum2WG5kvtWdZMdJC",
  "key17": "4McfMqvKmWFHjV3AXoQVnqxuHv8fPoKUqABVmkMpTuXRHGSDhB3uwTVHkYXFTAxgDwSXiHiLcVrfWJRrDioxX2VW",
  "key18": "bU3scBqLy3fZHyv1DakDEGJLi6ax157Grk6EtwHUZQGF7bMpfXSqirMZrzE7tMEADVUJJaPK16qujUU81rbXALw",
  "key19": "9Hg5diMqZMBrR6Qhbdx9qsVkzUgeU3XSHoj1TXjAy1XAVhQZZFAxCLPJ8Grh2qQDAhda1yfgXQY5HmzayEJamKr",
  "key20": "3zFSQqGvqaN11zJfJ5c5rZXZJf6gQXzBTtHmQmF1Pb6hg6Ld9NfiTdhUSGcTgiwdAQfR6xS61KSLsEYBNhNKcFfx",
  "key21": "48in4VAJ9ZQRtP8z1WrJ3tTVaaxCxtwdRLnbS8iC61KGyNNNCLYBpi7SpFYgtXtZxxRaqBkCQa5zrAG72UqKnZnt",
  "key22": "45CmEdxjEfjiJGwF7jbFZTUg4Z5W85JkLyXeBHtXL7LnCg3KiP1MjGmqVouWHkBCqzkewjYwYVDCyoejQVKY7Vdx",
  "key23": "3ZKTAhqNqS8EcShibkmPCSxGJVc63nLYUAFkMxztHGZj9d4F6zXTL9uENbWoz3FV3aroE5BerckQXk1CL2Wdu9hy",
  "key24": "4fCUYZzBpeJkEfVsMGXVhQTU3hrnjRgNqxQVBavLTx1dwJG8fJgcyTrJdAUNqiGCyyxrAGZJWNjy42wEU4a57sR",
  "key25": "4vAMtpm3Xc7RrDJ4rTEzMqq1mHYPpghRj1ujtnvTyLGYmZf7H34ixvVciFxPGbVai7oSVAho8GYaB5m6QVUbTUFj",
  "key26": "mMVvoAsW4uczfxPgKpTdoQCouevLyWZT6NS5vHNY2tkNLju9Mq3cnbap4PXrCBAz8miFjSLQqUfLRDdiNC6o2oC",
  "key27": "5hnL5GrycoxERoG8EfzjMdukqCNF1VYATYNxhFzJpMsDnx47ZHqKB1pZ2viHTrQ3TeTfAMboVPaYLC8CmawmPBbd",
  "key28": "Gc1QhYNYdW4S2zbxgzN1jgZ4vLrvaxrqnKSpVjWoiMUS2jFPTFFb3vvYo2RuiwBQEVMv5ryMRkTGKFaoQFftWWJ",
  "key29": "2Pb8JSqpu9JadAQ1L48AehxUWK7fLwpQbUg2LqYtrMTcpk7w4ttfwMdotGbgF4GK4J383ERQsBa5MANBckudNtpB",
  "key30": "XTEoEgCgu3Tem9PqLWL93ZHcNAo5JEpnmMaPWfsjnz1EWVx1sYWnYRL7twKxvSgBBtajWLiYSfdu9NUf5EtCyXC",
  "key31": "2zUgjkEn7zRMP1gNeu3zarvcfU4FSuQbaBGas818ZRpVVqgcdXtKiSYvp8YThJXraLBBayQG4zjCa8KLH3gzKAvz",
  "key32": "5t6p87KAB9PsqN44fF7Ti1uvuJJGrSDUvaebetKkEVYWX8tCKRZrbWJFsq38aBtZPEWWA5Zjy1myVucVfa44cDWk",
  "key33": "QCfZwuFEKnjtwVJnen6Jy4yWLfgQ4CM64yspc3LRnsDJSHMHMpyYPiKg2BLnXU7iWcLPJcdsE8nf9udWz3U3A8m",
  "key34": "5J5hgdZCBYeaMZJ9Ur7fYWxFePMQ7nFWcgvLxmHDZmUVQaocSoR3JgcTZUNfVjX9398xAf39jej3MU6F5mYfWLgt",
  "key35": "JkavBCm7qxLKgwsGqcxcUrPZAdrsyuBw52idbHU64KScuQwQuPzrLehoZUN9MN3FxJVu7ZrsJJvebJP5Rwbwju4",
  "key36": "4UyW1BGSHWjmKowkocdRfGW2XmgJyxc6JQRZXfcq7CqQN65Fb8rhq4nvA6YeUZhPet6PAzfBWB3TYPAaTWHCepEF",
  "key37": "H1U7WxFfP9kD7x6N4Gz7pRyKbKqySby9ZJw1ne8AaTyzVb7gAuNtdkfB8zmkvmq9oe4zA2BrxfA3rXhcrwa3NFv",
  "key38": "2RZHvWZE2Xy735UE5m6tqEdst2kd4Hu69zY93qmTb3EggbbQWrQ4h24hXQzpk1JSefr5b4Js4q6TC8brmbmrrDQ6",
  "key39": "4iCwDjE6w179T127ForJAsNtvRdTt8MVTyPrkcqt4rDX5nRQeHAXSSePZyitGX2H9rTxuRB9BMo5hqhrfRrWCRzM",
  "key40": "3vau3MTmYL7pFLYKcvW5u6ESkrMz73o5ntGmKEhzBSPquhNvhNcnn4DpW6P1r6Znmo3PWNoYFdSw8dBGUoLfWa9k",
  "key41": "judnTrbSrNozD11pbyzorC9D2RPdn9NutMoN72nZLnvDUTJNmgURyqLtNqaZkQRvDgRDKARjGi2XB4ebrVGQX5f",
  "key42": "4eTG65gMsEi8hepjVYJNFr3Bs5PdmNUyqqobSWbbFrASMbrpWTJRffZL2nee8M7EXaGtNuEsHFgbh2WZ7bSSSyrA",
  "key43": "57DWRuPT3fanErQHLppi4yTyEfebkjtdJLU7JRx9ahREaxkWSkFp2TE3XWtdZc2Znn1s9XH5z9shYLhF5gAEYL3x"
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
