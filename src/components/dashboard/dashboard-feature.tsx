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
    "55eCNzwi7JLKVYEfx1ZmAqZk5mEJdznib6gMhLgWZiTRfnWQxcGnkfuMAGCw3Pdw6MqRry1qFiRcu61q7Fq7ny8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6hETPAEByWMhQf6HxwpdqDfykS4R41d4LqeVgpubN76dB3iXmud8UzqzbnRdi79VrYJL8Cg1qMnAcrSLR8LoHU",
  "key1": "2s8q6UAnh8wNxGXXrtA53ZjcMffqYrhkEZxepiMa9nabXxhSCC2pjECzxSfdBunsWqyuBhKSm3qm92um3czV6ZyH",
  "key2": "4fj58JAGMPUWZ869ajENG8ou3tKNiPNNAagqRi9mzx1dLLQRbbeQqzL8ec7cCf6CCFfAkbwDPKk7UVhPggACLDd1",
  "key3": "3DComqq4oyMCFa2DFPeQFv2AomgsdXoAJU6Vh9KoxZTdGBQh9y7zaeimR4YggUYLN488cKZkC3S6B38MpJJXvyZm",
  "key4": "qTap99FxAGbxfS7oRHk1jWCzpYy2MatMDgxwhVriS19wLPobpbsbyRJ1GjEA3nb68ZnJDsF5VV3mAseBuRYe3Wa",
  "key5": "4Gj3KjxrM63nQXHaCU7M2KJv4wjyMbWJ6FPQoUxGngEzjCprXwayGN67JYDs4za7GJ8wfm97bNnNar9tWeaeonTC",
  "key6": "3iSJ9M3UdeLycN3TW9cvPB4hgvk2Q97cuXjmeCyYmvMg5WvVuv6kPfcsM96Upcs9SjqYicWmqvmLRTDKtnypoQi1",
  "key7": "7Xk3CoCABcaVfMMu7UVuCb4UZRZNoHYzZvg4G3xXnj7WhrKUG6jdMC6ViTWm4GTzMP3jNbfa5eZAbVMvJUNd1FF",
  "key8": "3bSMJnGuGvV4QGMnuoA5u63xNShXccg2v4aSvF1pzpeAcn59EGPnvmTV3wZSk8F7YWnwPjXhCm1oEbMLkfmpuCBV",
  "key9": "228iHQdVT4cxbf92rCFjM3vyd8Gv2ryKtdM3ZTf7x7DomoLrUa4Pka2vB8hy8u3e8itmHo8NYivy2YZXsZeG6uXs",
  "key10": "3HjYJnJmjg2mmbaCTsXPNYoqMtUq846wt4SVkDzYkizNnuxxzuCHpsFvE46bJ7mY4B8kiZ2MkjegyNejj7ZRcZgm",
  "key11": "53FffzyT8JmqT8rzXCGnVrFKREtjxFU3fLnSEW5Bq9eQQXuXNLFxk8uB3U1yLkXjV7XPHc53EQxjrMaFGwT9diuR",
  "key12": "oqurpBwE1RYjqYUjcjMK4dux1aYnVEPecAWyLhwhYWSQMC5SBSdfRjMSpYxbeBt23vVwqj66K98ZtPyBjgFs6Ku",
  "key13": "2h7qt4JjULkiqiXRGeHoV1aX92dkwrSiuSuFRBkHqGxGtXpRygiMjVf7xAxsktdCdSp9LyWJAtYjRfrWPF4xoXNC",
  "key14": "2Y2jiys62oFEoApFC2UDtvZf1NY8rhBQ7okwLmYuXqW4vTx9tZ8FcLaikahZ9Jqt1Y6guM8y5Az2g4zjyWVyuzik",
  "key15": "2nVRFdiC6XPkFWj9p1DBwjYh1qVTAe11ziqGHck7mdU3GbsckMGLCbJQTnXrAMo3nRMwoEESraTymghqE6bHmJFi",
  "key16": "41Phmqq7CjhQEmekDn7Lsi7gguVRkJMngTEgFwh7JFsHYrmDNpsLM5AoFBUvXWPqQbmVYh267yLyxqECwGPJh8Sr",
  "key17": "q28aWvwXrqWLkU4ZNS6xmEgphQ3VtyriSGaVeYYzqLhZFkSKCKLT7imtFSkmKWnrtBFAC2mXx3ynf6VgkdeVVKi",
  "key18": "UWg8oS8uNUhcUVHwKMwR8hbQMLCWNY4pj6eq5XWn1TorbYCyozPyoj6Dhamb4QifeC33Qr8SLAFVYwELzd9x52x",
  "key19": "58vfCAKTNupybLQ94nNMCQBPL3jKArfAa81ujxAA5QV3vq4UKMGPXXpPVZcVkpzQUJECSjAbht79BccYHQEkxZSH",
  "key20": "31Aj8RLWHkZABAxNyjEnRYF4BgH3UfHnJoiiRMNKmgVt8XqM7MTLR4BqnGqCiAfNv4CcCUU5yhKhXbwYiACAajKL",
  "key21": "43wuGi6vrRF9JUmCV4ZNj3S8CvPfwFM81bAe2t4D4E5pLYonH1nMYW28Mwvp6QqBQqmDF1uEHVtGpuHmi9BXJyUv",
  "key22": "5VAUF58SHyAeV5ayDxrcUoq7argSPEcnaDBETc4bXTREvDZePfnmXa88PE7Z8UVHGxuvFyZ1mfzK1iUi9qYZhYHB",
  "key23": "4B1iomudViMxNNiEs53q9ot6Uy68GcPhfWQ6xxgaQdbu3uECWDEipYCK4vkWddg5p9Qa4sLsg6Qg8Xq19ZopbP2H",
  "key24": "23hNgHzKbbRa1YAXG7sMpGM19GwDzL1cgMXCn3P8y3Z5po8XtX5FPgfoVVgXYri1BGXhxcBTfUAcrXzVMaug9geW",
  "key25": "aXcDdSgHERYJSegrqKsLeu3eLeH1t4LKwwwxgjLAj5reJ9GWK84AnaS2D9dfZa6QoViviUYf8vxLce9T9dzvoLJ"
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
