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
    "5hTkLvqqdht7twzJGPYq4nfULiMMA1TaB7EFg7p3J11tFrExkvufg31PCPUyyuRr2Cu4XUQaVD2MZJK4ddeQqfKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XihQWKVNLe1bPMmTqA74JTHvCSUCdUqEirNxTZuViPXDauuCwciRL2coRyrpuMrqdwVkHgJby8MgXPQ5bzmnETS",
  "key1": "5TLuMfZeMoH8dEGRp3XYa1Voys28Gdr64fwzvg2iNczsbRPYyHUpDaF7HDKQxYW9nxdm88tnnPZTBXVzwYhKdmH2",
  "key2": "4ZBH8n45nDDyeRSpAGRDYW1e2WsJcoArWW3a8eb2oLsp9QrAkSj65zyDhYNohrpADL2qnW3a1SYa23hkSDSktV3D",
  "key3": "25bBGhnuFWNsVL9dhqL7MgPghTigv6DHXz58LAS6qWMnaZ5DsofLyMQXJWMXxoC6a6eHnBvsztNF2Q31L5EYtkVD",
  "key4": "3TCdCmjzaDtgBZpBZaMXFU4h5znoXpAh8TZS5nxNfbQG4BoX5TRdR7YXd1FNJuNwKmiFc1Ch3Ai3qxuYt7eDeGQV",
  "key5": "2ZcoYbGfXby4ruR2A3un5aa6WWFBLR6TfBDYLaD2zoPdzi6JKabqTJJBoEW4uYdQ9aXSeY8LJ3qexzM2o4eh67Nj",
  "key6": "RiB4atTBpELop355QvCfsMUM1htDZJVVih7imA6co9a8xNir3N4D7fHAhPvYrbirTwevKZebj5PqNezAJt1b5uc",
  "key7": "5ELFRRB4eCszKivWeH62tkqeeRbYFQKB1bDN9xn9zBDpzB5CQS819giqvXvJLXH5MVZSULR9jA7N7bvyFwqFQkpH",
  "key8": "4MDpqpUZ986fDQsS7eg2YuR7CfzpSmYfet4FYB7XBxKjEGfYwJQ5mZuu4EcsANXKRD5HDwnjmLAnpr7ZCg3g2hdS",
  "key9": "5tAsmai18QxTZRuofvswaGMRwdMwymRcmeySq3bBrMGkbKYCtND89jetrowseSGjd4fVn6nxjjBb7KccNvGvzx8u",
  "key10": "2Yw5PpGGg33RGREKNNbjHsoPE4yHnYWfcCiiReXk2qDSXNKipuLdx8jipT23ftyHyFhv1BhumGjCmhgCdAhRceSh",
  "key11": "5v4ugi2EkShgcM5xvhNpFF3vGZSpyLSTpURnM9eYKxVkJxA7qw6c8PLVteK9gUrf8znmA8hJtDjbSefvCi3hWwsc",
  "key12": "34XtgxfH6zLAmV5S97GtR1qJdRFBeL8Mz8418Ps7bxNrJnUaE99Cap1WcJBn21u24b6dvn5dAhkmvS5RrySEiwre",
  "key13": "2KA8JaVHusFy76TNXVGnJa8691uKs7inaiWgBr6GwuKvvM43YqTsbMEUgqWiPxoczAC2qPS1a3mVCAEa1WgVCWDM",
  "key14": "DnyVgmwjkEv4ALdfKAcdibdNbdgdkijZbVZ1bYaEDJQjeuAiuTat8CiPpzHbApRBBDvpEfvHbbGaaxHkPiKzhvD",
  "key15": "kpK9fcdVpUht3PKuzV2RJTZogudnvuZjST3PknaN2LEtivz877QkGtSiuqHYM2QGPQZfcNQqnVBbhAE5isBtB6D",
  "key16": "3BAo93j5Rgevp3j7GiD2TWZKSB8aYh3b2QhwZKDVwm8U2NNpM9dMe9DKHzmtbYcTxo8ZFtkouZJDfdreyg5pJQNd",
  "key17": "4rpU93LfWRwH1eiq9Ydg2oKLyGx3e3q78GZvdR8Ah4udEXT5jnMUpgKAqTRa6gpQ1pQreu1htsww4QRwDo4xJz8C",
  "key18": "31V41m2b4A4BxvFedw4cHmDepP69HvZE2N5XWDWH4AGh2VUQKjGaWPhYPuKrQRupuR7QXSbui1yPQjkZd9bm9QnY",
  "key19": "4cpbB3xikL75PmXCqCzCJ36hUauqwt5H2S92AGwxmtJrQfsGxBVN3ioga9VzL9AQR4iDRSY9QFJHTQZBNUMCycZZ",
  "key20": "5XyqGZGKVUcqAG4tKD1YwFmAXt9hQxE2MQaZX3t6t8b57kEkmLgyx9t3HGrxuVaPGh6X5KXHD8RLhZaU3rAFEp59",
  "key21": "5QXwx9Hnkd19Mj3Lgu8ZUzWFFvk8ukMTFhF1r6tpCrFt7k3aoSMmi5pBi9EXmTTneSq4gRy1GhRums7T5Atckscf",
  "key22": "4dTeiNsRQknJw4Vsu2DJZobtxHSHvWtHPjbJhwmZudD3Tz2v8hb781rCbtYBpaMqqejGTYMmnVxCyj5bQ5aXFAAH",
  "key23": "25n2xD23u36jWjxmKEDxjVFgtExDegLPAJ9yPKKpzNbhapY1udjH1tacv1g4kidqgVox2Vdwy2abfyZxhyT6x9zi",
  "key24": "3fVvCQvoXhvg1cGkybfcD8AXtvSdEPLZMbsT15wNR3EadLkQN7EPLbxxsANNK8qbsQnJBQoEm6LnsSqc9e4mHW7P"
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
