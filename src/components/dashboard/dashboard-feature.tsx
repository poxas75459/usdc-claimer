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
    "4J4WBrZ48XgmYPqLPMShFHzmH4rYHXWARzLz2BJUwMqHogZfD8EmQNxjixR8eUjj9EqkaWLC8LwM9Gu3ahxmsARf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iX8oY9keMasAe9H9LhVLJF4qzvex46Bo5brHuPhbTCRUAjJN5Gi5vanARKXHEMqN3kMvjEkmF7a1s7wzF372WDL",
  "key1": "3w15j5jqA9Txi2MjKeTMmPUsG4eTxxqah9FWfbW8QbajLmQHy6J95iQXFLtks5xyFA4hgsX2SdGcHijTjQ74Pswo",
  "key2": "5BaRyBzHVSR8oeTEx9KtkrZnMnqujKHkKo22Dj7JMKSRKPec4GXPbmUqg4e37zhSfmtPz34JAEUvDzzJVqGsRwHf",
  "key3": "44c9hWjyz3QL5gfF1zuepqq4hruVf7xonpMHeEEqG1LaPL5EynPNMHoitG5iPfnMwbVZtGZyQMbLuYxhQSrXYpN7",
  "key4": "5WQ2D1rEZc9HQ6k3pfJPFQAdoKPnyCSkzicYS8QkS4wr1sH4nQeVJteDzVKFcTJ7L8hTNjTbYxm9C2TwtrN3jf61",
  "key5": "5R4aXAHwBGHgNW4dPGWiQWtmHv5qiGpuFyFJpZ5zBZrivX5iRSqiUTYudaR8ZTg1ieF3xaw4igiehRE91uCyFyJt",
  "key6": "6K1SWTmaDJWZ4NLwV8Yg8ePwPY5D68Ynh6fJGYs4NzfwK9bEtJBLnCWLtABDBbLYYviFGst3pgazQc3nvGmNMUZ",
  "key7": "2U5sFchpj8wXwaXov4YJLxt76fAozHiwuNygRRHPvZAJmnMAWiXuoxtfmyeqfPSgeZuWe29bhx5HmF5t3HYrw53m",
  "key8": "3LyQbJQWF3krrmnSr2f1HaLCxdWe8Lbjd8ZD4DBpxh1RaqxMeCFm5bYYXb9nwerL6HVE2ZmQc98ymsEQXDYWM1qv",
  "key9": "3Qt7rosvFUbdyUXQivjVAz6Z66WCuFpv9rzXh9jbJp3zsKhsudNzxgXaifAtfvTKPncEz5HxgbbjVE8SYN38mHA7",
  "key10": "4BpvBWh35tK4VQB9oNLnHfvJ32sK5MWwRgPiNDYJ6h5kUzWqDKTyh2Vb5Znixd11Bo45yiZzMkJhV7XHwy5Xy59x",
  "key11": "64HSGGJmGhwZuK9e3RGULjoEnXi42fu2W8o2wCWYNrcVRPHvVFNGDj42bpQWaaMNQ7xTB8rPMEeVh5aDYwAzPUiy",
  "key12": "445fiFexcMxbKwaCzU2ZSFsuqoJLRwKhG6mS5YcgRroYb1yZexsFKB7vcp1UcwWw9i9Z5sezR94ea446Sndd8t2a",
  "key13": "2StVBbY1NUwPbVXcwue2ZrBT3EiJJMVcLAK2x1kXSnMeNfYYg6hfot9UY6pthSuK5KmBK4QiPfJSSD7EASuV37RL",
  "key14": "4yXvHzoMgRGCeftAJSHMfZiZtqkJRv5vKJp79z6ZT6dWXWTUpxSYuuT6UPUc8Vb3emzWY6s16aat8ogjhwWyFNtu",
  "key15": "VoKacNZkjVYzdATzvBbGvPjbkTyShSKzYqkruowm1adG5wACeMho2R8cYT3L4ZMnyNP8KzARy6B4Rthrb8Qs85Q",
  "key16": "5UFPahDvA4BbkwuZ5bMuPMA4U1wFVLoEoF7JH5EfF3QxpQBXSUJCbf8gWVzsbo6LdEnE3hHKbs8C3iF9tBREDdXs",
  "key17": "5TBWCFRSSWeVSFL1r7Htgs3zmetePDfdKoGtnS1zsdbxZdkceqZsKZFzTk2jBCLnf9wz5mRHFqT8J98DA6XhVFhj",
  "key18": "382eensmKxctEFj1DCaq8dixat9wHDECciD2tf9u394bWPa2jm161ekW1q9U6CQCFympfMs45LPLuhLFDz3j6Tt3",
  "key19": "69j3bjKL5Eu445faPZhJsNb4BHp8D9CmBca9KNx751KqzBRHR2m2EQdFryyM2r8wYMjrR2KfZdyA9bg3wCBePAc",
  "key20": "4DHz7iTw5ukrzU4D2ReAamMaT784fLbxraKMFf2Zf85T4oyeGr3eUCMtjnyFPKhqFFePpiagtpAs17rjskUdaZQ3",
  "key21": "4LoK3bTj2jWzoLeBgYx4BVe6scj5v7MedXuEjHJoGGqd18GzbTrxmwKP3Me1igbMWv1pTbe5haLQvhag9NVcCXUv",
  "key22": "5YVBxqpvh9GR7f7RZnL8JMy5Mgb9EY9Ui2K8EQKLM1KzLW9YMZ3FrKRh43xMzU59bda9ziN1e9DkE6Y2tqoqfGuk",
  "key23": "2BPh8kouhJp3f1CDaEyhb714nMcQa92Ys55VnzwB8VNTKKKeeXmN4dJGrHHbub5BfUXnQeStRFK2r6bDNUkrTyEj",
  "key24": "3CbuZbaduRXifYUFhfvS64dLRbjEYQvyA5yFUh31veNxQCcJfoNKYCzKALaSV2SQy6cVctx68qYap2uAzJmrRk3A",
  "key25": "MoymqEntLYsrXSQZvK9oBCkvqd1dDxsygyCDeCzEEJVj8E6GtEbTp4SPrDvBFBzzScza7GhXYeFkspZ31AjGwPr",
  "key26": "475uArps1NtiJMeCmdFCVV9XcCE3A3pUQqRz1zu84zfWMM8CVcF7ddjgP6XzLtDnD85TbQvN3sxeK9as1aLyjSfR",
  "key27": "3NWZtNC5hK8qYFtSMnFdSNakMB25uWgdc8onwc4oDJrYS8hHxQNyKg8bSS7LRn7WzSc4taKbTdHZ9Gk3CKbuGnkc",
  "key28": "riFhCRQBNZK4NF8D4KHXWSF7QGxwPRjtkWjfpDp1ebdK33Dop18VMCkXdB8kEzEBhrCqgX3Z2zP2vfhTf9XVNAY",
  "key29": "2Ujih6cneWoE69LNCVKB4yDcZD1hBEkJThrS9x19NqVuX7EuPpytRZd1XvaZJEwFcfnjQ4taHLQbtKjU812m9Ubo",
  "key30": "5pDQi5h3JndsBmvBwCNgfySqE8rwfdx3x4EQdD9kfKp53dUwSxa6QdxGfX8X5FMkGzrqLVvq41pVWmwR9A4AojRX",
  "key31": "8ftfHe3W7766JgFfPWWG5pG8jrjPjsBo1ptkCBcbn9X2y9J3JvZDPjBUc1oyEjEcUnUr4n4WUpvYUzpdwEb8PoT",
  "key32": "4JhDCnFMBKgQjBYZsSewxWM8aQabzFeoiDsyr8Wxm3vrqm28ALHD9pifJknpNgXkMMd2FWUzBZHX8NLQPbAWV3RH",
  "key33": "5hpi7xnMoguVEiorpZTEXnVxvb2LKdkhSTyxawmoo2X1YyUfRZLoGoy2qRsp7SUSnTSTj3rk3ANtBwVLFq7spouW",
  "key34": "PH51akUdYWrabF1QjSZgafurM3kS3oWJP3zaKZWQV9JM9VR2VyA7W8ZGXCDNfGC7Z6drRAjWhsWTYiMxGogYXQE",
  "key35": "44Q6hrsXNPAKVCkEdxhovb76VgscYAPeyr73WVLmGSqjabrd9YRCByHsNScyN5Q6Q3tUC2PbGiyXhhvs33S5a4Aj",
  "key36": "3UhNN2CtYxoo2wgZXYX5SJbRm6VrJ6oz6RAq1zt15PY2JJCxXHwQqdAz9FQA8QnHgoAMUH5jqxfn1mgskaeagvtT"
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
