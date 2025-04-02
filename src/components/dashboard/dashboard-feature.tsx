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
    "2nfdK9p2nctGWtvWmkisoX9dQmhozP9C6qWU5WEKzLt3sV1oJyqnTraLF3ibDXYHnsAWtcvtMPGT1BANowehY4pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLt2TR64tozMKFS58Vgq4ZRYxaQc2aYfNc7kN9FMegsLhG8EEETgDJS1GELLKWumaUGggjSsUNUuGoQJGBvm2zE",
  "key1": "xwbm4hUD8KYWtHE2AXW3oRRsWMbpxoygZwqqaq7qGr1oCoTXqH9LAjkhWExr2kkMqTvP6Ff7YgRzZZJ5EaWqpG7",
  "key2": "43TEMMW5MikBrFLycW8Pr7w8gWjjLKB8frAREWHyaXAp99LFNNTrhksqMjXtPoxFq6VpvoBEoJAT7d3tA2ivh3NJ",
  "key3": "3CeqMGcadjaQWFJLskxJbgakuDRmPkFeQHrAPhCs1AM4wE84uRkhRBiLhzAPrwMhAYkKaSUUGLr4dTyqoeJeWeNR",
  "key4": "63vgaTd6TQdswGqfryNmS4ppNyNyusSksU9SaCWXrnuK89vao5w14Ud6PQa5Mkj1ug17b8Hj3fKBZj1Z1nrp5ZKs",
  "key5": "2Qeyv6zVr7PpqFo7uZ7Ttuiq7wZbn8Ko7muDFpqyLsMGsYfC9Tuy6bUwXCy5pkBfay7AbcBttD1hskhHosSCgpx5",
  "key6": "3G4QyoAzUHn2ekAgB1fHwaJjPvFiucEfqUakzL9yA2L7eBVX1hT1dwKjwyyyLUpSi8vk52Co2WXvRXb9P1Z2nthf",
  "key7": "3FSJnTg7pAZRpRUfMW96DhPJvbWh942HYwCEqz15Ms3b91HZfKzBrpcMLdea6oVaEvirzqvgvekZgLrrdrxRETW7",
  "key8": "2KCygt2LkCW7dgbD3KYmiEb6woEwgEb4e5qqjyeE3JWj8rakNfGX1zZfBiUQXJKjoSqxWBFeSUMz2Aq43ktkZFJw",
  "key9": "3VuFiQaxttH7UijgoFK4a9JPqVpWqyHwdfvDkHe3Bb4mDidQsQxZLNNQjbWGUQLNGEp1YsmZaxoVxHbPsaQWq8Ef",
  "key10": "3zr78xq5daus3rL5nbtL4B4wnqAuiNWHoDCtxwXMyAxn55hHY2M8BvK5hHNrCzANUUP2xLvBDxMXZ3UtRcX785rK",
  "key11": "3kmt91Tkw5x6SGHNYKPxJFNrvmpmLVjFANHzj5Kqfg4DHyNLdr9EL7AkZJmzmKt712zNqnheZhPQoCnxf6J4oGes",
  "key12": "2HDbTAcz8oxv1pcoFBaYivsXYZxMxEGmmdgGq1dNgtQV1qV9Hxa9AJFnsNpxQWNeYkjHrYxeBrAhncfsjicsrbPg",
  "key13": "2xTJe2jBgHHnrugWNN1BSmyJNhJkdUWZTgCveE28ZW7VXHJzpWcQoNcxAYeK9YJ3zmmC8r2gvdse1W9LeB97aCPS",
  "key14": "2FRzfU9ZWFeUSFUD8Khk3hoUvbnxkAyZzJUHTW6vkrMfdRUvhhnfp4EEkWkY14egtjZPwemoprA4wUjeYpxTbnfp",
  "key15": "3zMkGVzkXs1ugNpGhtyGm7guxnWQ9Nt6grJUSFLVWtNnJi7MFH9ddNTwbUymBrZo1cXJM8Krdpvi2igzXMAHc9PJ",
  "key16": "5Kj5C5r7rAGWDk1T8SyTKZhqNQvzs1NYDfp4d7CynSMCisSYVCJ1JWEGCFZJTM9tf8wHgkT6hRMX5rwgzivq3Vu7",
  "key17": "3sW6oiwQ2FH3T1toXrdUznKsoF4QyF6q93eYo7UjjscC3AZuWhqyD5H5YtYQDxYvLfo8MHF5pTAfMGq2CJsC1JeE",
  "key18": "5pxH28WnMHXeVDMFBqXAzm4UEmdKdcWJYDapSUERMQ9o8ySHCpoCAVWDo9xssZptFwFRasKBkCKhUXSCe3nAyuRh",
  "key19": "5YdbYnZ3UmnDxuxSVKZeu92ciiyeQLSyVFpMXppztw4jaqrUwFVuETryZ5URpQxaSGsBog9KMTWqXhNKA45GEPuu",
  "key20": "4yEbSSTFYV3sAnWwT38WkVdYaWr7uX7hGy1Ttdm6LrWpmjuovzv31Ttr7qDGnc9MnzPwDNKAP95t1RirJVqq62dB",
  "key21": "3HmQZxaLJRikev3XU6h2YeymCvqGAgCrUVTuFjZU3fKXS98d39A95YbJy39LQSN6cv8PGKPUL7dJVTEQwDZTeY28",
  "key22": "wE3cBkRtomdeumqgKpPkMEzPzBMxVYMCcmy9TQuYRENREpjRhe2ZT8DM4KMVoZtvpaCGmkkE6v6eRspqeT6khY5",
  "key23": "3BBebSPPZgDpBERHcNy5MAchyoLSswaACqvdhcmuGrMMGPHfcCL8yCJaM1fsoNuEFR5qApzNGNcsfymUEoZXMt6F",
  "key24": "67FvgyRspaM3UcuWgK4az6ZsrvRJc3t8mjggXKmM3f5r1k1BtPe6ajZG3wwZiihwaux1yV1rQXdiED44m5CTqNUq",
  "key25": "2bkwUgTqe2A8H9EmMQGaHU4XGGdivdkej8yiBCDLMwhZ88b1hti7aiJfENy4u9FFmx7GBGwfoswae9skwUUyZ6hR"
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
