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
    "4vqSSYbGKxNb5noqLyLaoj1EJUfUJkNPuN3JshpsXaSkHhMGSboVZbEb5rqgDZ279A9S5MhanZGc9QKkBytaQX5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMdW3ZF6gr7hLn98CY7Lh31jBhHFbTA3XmBB3BVRtbfSkuYsERwS85ax2WdeUJRR9J2jPCWKuv5XV599qo1TGxE",
  "key1": "2ejebNuoyMh3Q4ZduxWuUwN4GmpHV5xJMFHp6wrHxy1WzrMMDhgVkf2e7CzdRQm6SuXYtq2Mm3ukc7MJDVqpvxMy",
  "key2": "2xiMzRDtausB4N82cCHpE3MNj9cFBNwTUxq1jnwqZ7bGeq1wEeyjbDgJyDW4nTKTKDo1Fb6Y6vSiXTSw7mx49Lgr",
  "key3": "2SUsxkyFKJnXLpwmw8vqqsEo1w7NGwVggj6eUHugob5B4KTM4rwG9Ah231RZ1YwRwgttL2VKk4JrQF1rHSmwa2bR",
  "key4": "4BL2fE9jRoDCJNtVsmsye9rxeLUEAv89QcijN6ApqtuKUG7yVgpTuAugVFWhVcqJH1zSKCnHaukP5zqPBQaEzdsH",
  "key5": "3Moo8oLkhKKbwh8JzGjh3GGxUBPDg8Lp81pc56xmMsuKfpwknLoRCYvdXHG1XCCuhFWR958GMFEVLscEfQoAiqNX",
  "key6": "2Bz5gtcLTyzjEsyeuMuEXbrs4yP1JsR2RLiU5bdsQiTVHbbkcU4AsnXBpTnfttdnFwXWwg8oYQ99va2L361KuWqV",
  "key7": "56ABQrMhyHzNEhRCUEo7n6KWmxmzW124X2fGtEtSn4RTekSYiS1u9U2jwuhvpxby74RgUhJXNdga26hRC4Y5nQSg",
  "key8": "2nJtDuKFJytEETnp1woh4A8nLxjUXwKns85rSJq7XvpDoYWMP9KoUW25F6ZB5RQUhUUitDqvWraVr6gKTpRCUR2Q",
  "key9": "3NkYZENf4QnrDYEKeWziJ6ckFiJhJfjUBjvqNbgvENdo52KLUEtfmDRMqMQq5Txj9hNZg6Qc3z8G4EXiidYcUsH8",
  "key10": "2AtWM3jDrv7gig2GYrX5fVjQXwp77x1fCH4Z94XExkTwTZbkNxQoFEBqKXbqdPLuCfRPXPVxh2cUha7jPWCXxBgn",
  "key11": "3QsyzgJ1TWbo3EGE2BF1LkjLMPoe38kGt7TyZJvN9eBLcpegyYz6RbypV68uT5AuzEHqgMAhXJo1gPTMtjWHvhZS",
  "key12": "2965Lft975f67YALEUnggshPRyxvWWwmuedd8xEPQicQopDF7s5gPnQUXnHNYnXjcMvxCW4oRQrNgWmhsbcizKXJ",
  "key13": "5pgQMHqzbAkKkRSuZFpbuVqgeyLQztmSQd9dCw4j96FD1QPhRLdvwpenGzPEJ35Tg88x3vcvQaqwR9E3zHyEmFQH",
  "key14": "3CpgRssgc3Zo3xkx3h8rxUW9g17CqRFGR8dGa1qLrsSqrREV5M2WkHt6R8nWmR1U63y258uyF26zQTjg8qAcChVy",
  "key15": "4i2Kk4Qkj272XYxy46SSXHRX3Y6SMjstZbwsrCgUGLUKNT361m2RS6pCb8MNzpUvAETa2bz4dKvE5fmpFpzQ7Cem",
  "key16": "631rN8qohRH5Teqn2fr1JKs4BVswKbpV8k7KLa2FRQp6dKZ4hY6AFZgkbpvwVujuJrLhvUEPDCfycKfWXjHW2Gk1",
  "key17": "5LVAs1XUPLoctb8mJU1gEJ6VJsbrtjA1tM51yqJaTySw9gKDrJUpW9MBF5bUab8osu3y7RYdhUbtj9AGzemyzCM8",
  "key18": "652vcREy1y7VukgzC7fuaFs1fz7QrwvdEKADhR2pQNdVMguaALdrvEY6NKLKDVp3JkaE7KBcFEemA8eD5pVg1et4",
  "key19": "3dZqCVgvxZjbuEpgsgi8mLEnUhiGcy5tiYSVitb7Z5EBfQKZJ8S7JhyEGVth7n9uVAY8RRNcmHpXjA7Q4Y36mqgv",
  "key20": "3PWv6RbYsAnD8V2mGN7GhuRvpT5k8PdSykxL56Yyk4WHKxravig2mfsajxo2bXCfQtRYqP4Jz9qzV3BgRALJxq3L",
  "key21": "4SLgS7CvzU3m2mR4LqbdWbUTr7fchrk6yJ3zKikt7CGJUBBNdrrjv4ANvJe3XfCPjsFYxuSBsaM5sxa6EKBMCXvc",
  "key22": "4zK1jWQo9JssSw1kBEGLDzhrcSmDNhtRPLen7xkPX2JLhu8Z47WjFdraE5ADDUXPXLYxprrcjjMSzW8a4uMqzsjE",
  "key23": "XKWwanzqWTjjEFTd5mkkdWjgydfxr33F1KBTJNdNjbyvCD6YWMvrQdgM4NVPjGyb29QEd1Q3XrprXnKDxVW3s7M",
  "key24": "2NmXkLXyco7V1kpEKDKRb8GpBGRDCMMQi4AcqE3SrS7Zva9FVhXS7Div1szRVmBWFyKP6LVg1yETpejZcAdJtu4P",
  "key25": "2AGqtPwc7etwRUFsZadLsfXkfTGYtqGdN4f1go14nafUc4w8gqkwrDgutiTgkQmHKrJQuyBJnd2vVdts2kwkFEcZ",
  "key26": "r67BjnoA2H1woWtJgsEeUdSYsQmT9XE7Z58wkppNynt4JbZsUg3cn1PYZkcKPuAERdExga6HdtJFcKFaKAvPVNB",
  "key27": "5qdQtqhTLu4EfoGXenDv9fD5YjawccD2ziqJpZLMPQyu3YVX8v7my4aDcEpK7K1C5WToNLBcxNCuJAxaJ6jcN2a2",
  "key28": "3T5s8H85Q2PivdVe4ocdy4yged9GeVZ5jc7Yq5bv6oeheEsBk429Ftczp3fHEmbX6oEgiF5kfd65HZJDrV2QbqUk",
  "key29": "4HkruHReykXmeMd7HTSWM1PRexwUhjsK9GZQMVY4q1qowHS3vmzvb4x9m71457qJkv8FaUDwGRmGF3vhbSTqSQ8q",
  "key30": "3v5mj5rzu3sCyg1yuQpwwAjkAa4feAs3nVzMATMszM91Ko1SsWHNe3crp6ZEE8VyfUvowbPPx1ZvxM2JEwgLgd9p"
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
