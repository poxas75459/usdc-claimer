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
    "C2fiCRa9eFmv8Kd8DMEoyBvV7ptAkXWBtKedzn3yaz7b1oJ6bWuMKdCZxxhEnnMdY5xdJGW1RGsCtMutNiv7kbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2graaAT6Chy59jveEwYQSA6fWNEv6gExpKYg9FnZbznd2Fiy6PwQeetfHtvoaoU7B2HUWxtRUbw9oe2kCiwoAJ7N",
  "key1": "4CwG9sW17QGom5VQLwVwZCFQi17RtwpFFAnJ8bv19NZYvfpueGLA2VFfcEuKx2Gad3F4nsAqcMbQZtVEdfNAYbmC",
  "key2": "4BbUuNV1Ev4ddZMF3DLfK4Wg6jTaijiyfT2AUzVB4La5V7hWkJKpyqtnXLwM8yzyvVFk5Kp2hV7MZpn7y7k5VmmS",
  "key3": "s5a1Hp992XGk32w9eea5T2s7Pw8gx2mskbG1xrBWAW9J25fYf1P3Jm7dkWPz3VQamLsWzMieydWfHLfHCpt6gm5",
  "key4": "XvzC4gnU31tWxq7bQ2hkybfu6QtEiaq3bPqvkfUtwqzJRCZ1Qg8vjC4jUvihvHTrZ13JqPHxEt4GQzhP4DaFsdp",
  "key5": "AGxpRgz45qNnhWy9nkS9JebSFB3hdD4rzAVEhWEP7yXVNaRQt6tgTuVUtrn3bi4uuG1t6vhjvBjiiWDHGESMdpR",
  "key6": "5iaP3gVf7MnGtWHTtPQLj3VN8y4w4pFDp79Fd9dqvHjVpuD56z4Kgd1FZHaUMicWA7T1LCnxt9hWZ7jeK2AkM5ka",
  "key7": "5Km6ryuBjPWyEVE5yEaioXMhRFSFnbrRfRSyqTrNCZTeGgw78kzhh94EpXPtYQGLLPQWb23srGMDkjGAP8FPzS5",
  "key8": "5j3xm3MoRsu7eFDNCvCZg7ChdTz7Der5EmRP6nRw1b4VHNQstuuzM3cf2sRhs339Gh6SZLwFGSSD6wgL8xFwSi4C",
  "key9": "2sYw741d5sfb3LdDMU9Sz9Vc4z6JUtST6SY3qEmQQwjWcavPv1KtUisWKVpqSCxMWjALP4QDhf581cWGSsPs92La",
  "key10": "2iwLnXXhBEDCzUPWiB1KrPZB7furnxJ72RgdaFmLL6LFnmBRbsLgwe2gzeEsigBnVJ4LEL9jUyWDo5r8jznfGri5",
  "key11": "2kUR86JUwzkYVmpPsdVG5gLoznF7hv19QBZXCZjKNVuUyHJh7WeUrKwJnULWBMxK6hBbuzpviyxxTP8myGTxFoQA",
  "key12": "2sJ3si95jphaLNCHDz49Ut23EUz2k1aJnYqq2XNzRrKuHfCrx4SJbLxBYhzjm9jVqFshdN6HExFeUGRkDPEk8Tp4",
  "key13": "ZaF7t7PzXXaY5YudcqJLydDJuRy5NZgZtfrSsNYDhXWX6cyfabzEuX7ifYWnLeWuWutT9WTkzdwosTdmrWLQPLo",
  "key14": "2DZ3K6GDogMqHvkZ6vbyUyJ8DrkJEh6rXyF4Eavj9nHYVQ7xMgVW8rJ8N7oQtBxqncLocczW2FJAyc1e44wCAmzS",
  "key15": "TdHricESZEjjfG7MLE2rQFjpz5ukSQPr9KhuaZdQT3F84kT2iffSZjvBpcUeBm3rYbdD9oLKExGRDgNLbNeez2G",
  "key16": "8rqPTPZZAm2wFHU88CJvYmz3LNyrxshUtzY34tGWZgUpFuL7TFzWXSsa9xvQw89dzqdLQPPbkUnyvvtawUtn8U3",
  "key17": "29fPENPFqrSP6UGKQLwfmkw9EJ9zXB9u7tULf4MeBU4emxS79zFUHLuVXBMApBbPdMN1JdrmJVkf1ArKqT1UHzXi",
  "key18": "3GU4fSMP1UJWWJY5qppUptPTFTbS3QvUmw4B6qQA9sJmPUyM4oQTqRsLcqotpRkYciAwFYTE9LCpZhRQPmDMoVCM",
  "key19": "9pdwpn5wa7N4FPR3GKYedQGQ95PZDoBGNqHfajEonk2kJAwNcoxpm9wyXM7r2YapZgyrYHxkjB65gyXCkUXdD4b",
  "key20": "64s7T2gUvgw9nULmKt7sdKeu3xPYGxdr9WB2gbMaSGyQNKnNemnCQk6ADsu9J868VcjTBsjHUAPHpL4H9Z6nzre1",
  "key21": "5q43bFK8Toi7ntnVusGjS2ziuGQvtvBKQRNNyZBNpa3rGrTwyyBNTmG5Na2XaDcRpExXF8pKhu62Q5ecAXHpT7Vq",
  "key22": "5VorFU6xF29GYEHHPZ4ZpFEb3hxc89KzGnsM9AYrQym3r8vuH7RPmcVyHtraEExu4DqxmQur4cs5yPzaWAnPsqna",
  "key23": "3ptNecCtoZt4zjHYd8QJLyntgSSffsbNgrowTrpxAi6xgXqyLJ3LtbsCqAtrfPFyDu7F1ZUF91qF9AKCZ6p3E8aH",
  "key24": "5M1pAwdyyZBcavDTXKCAG9oTbvHdBEfVkrZBdjX22PZLTkxVauFg9XpGgEmZGrZQ6izcFcSDHsWwdNSkQQ1qSHku"
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
