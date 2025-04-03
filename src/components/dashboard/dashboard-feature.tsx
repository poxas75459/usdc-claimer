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
    "yABDT17CRK5VJyCrGhBPCGzLa5iF4fTJapa1d6cJQCiCsqH6AYG7Xn3QDJtQJHNBNefWG1VwN2rDHAzGyQpbStE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcKDrPgUviDd6WManP8hJkpxQ6j4iUjKRiGDsFWZgCQJv3x8fWPRjpkxyYN2tXuD4pETLGtvcJYGYeVKMCksJ1k",
  "key1": "3CnWkNWL8QgtnTYMs9AbGxJfegRftdUM2tMu5dvT4WPQrM1xiom17LD1X85kUajyPwepEyCLR3Rxx52HXyeULS6i",
  "key2": "FcXXQqNdspYQJJRj4w6ZrEdBAHvcUijdhTm3XPTa36QH8zqC2K8ckotb4L61bThdkJyYGkxyE483sTVRWt1Heva",
  "key3": "5JbQGSbUbLRMip7o3sghz6c8WtgZnVa2XsnXAvXikUYTSUKQB9Ycm5ZZXiqqGvRH2mEJjkhXLkb4Gf6dnkDm4H6J",
  "key4": "2JsVmsWUKJLzoUb35GicF4MEGfjxLB5Dr59Uch1593YiVzwoAJihEwkVJabaXd9vgPFdsfUS1AKEMfEownosN9zW",
  "key5": "4RdwnJEzrBJyXrEtTdCUxEBK6rNHh2u54iiZ1AZVrDGc5h1vYNhzJxopJiV6Y3LNspx9uZGGXmRZo1cHSDdYVhpY",
  "key6": "3Lz5HYxN13ZWksv3iUfyhQgrifYTWEjF8xFmYSVtkYjEzmPZBFnD5LYZDTpkdzLBYy7vRjqVjVxFwWXZ2ZC4aiuD",
  "key7": "2jbcxN4aiRxg6pwh2rWtuYsPqnNXrAhXb6rLJjDQbBmk8N3npfNaJRwRT4cek1NnZ86YvTjvuQXzPeKcrxhqJSn2",
  "key8": "2LnmGSwshgqNgbRvhAzLZRu1w9Znknavf74tBN8DV4LqteMEZdyAFLj9kA6g1CHRQw1NbFVmtKETpbN7bXNn9LX2",
  "key9": "56JuNuVq68gWPMQrs1niF6P7XC7FudR5MpxJnaFV4KePHzqchVSEKwCeT6TKikESvF8P5S2NQV8U4Ze6JFiLFBr2",
  "key10": "3bEniFCP6U73sW6mxtczUDBsj9CgHuXK5mCTx7xVQV3i2ZnbLPfrtgemgkaZRrRDcksk3qp5XD2bX3L5UawRZeM9",
  "key11": "4oZBMCJB6x8Pksf1gSCUtQRmCNzXSgLUJ5TDPFeDYvkfqKtKt6zVZyQEGYz4P6ZSybtGftqpyL7u54k38Jb9QvvZ",
  "key12": "4bbn5GoZSNE7CkP7Aa8V2teZe7tPCqPV1JYE5hpYevvTXZCuAMbBi3TnfkxnwC3wDizjVesDxPdt93rE1wpKJ5Cc",
  "key13": "3dLq46HwsJc6kUpZff7GtbknCUkU84g7R4rm9WgTrqJUR1somK99oDuR74sDsYnqCdoh7cPci1J3b8EG6vSojA4p",
  "key14": "3ggG7xn2BnKR3q8C9rCVVXiJqxmABqfhQHfDWY4TkwzfWneHzzWpaopv4sC8RaxpNSb73akkVBWqvfronNKQAX8j",
  "key15": "4V6N97fzFbz8A4ZpV8WQY5GY2immyqAR4UBByZDsN284HiW7DPhfFtVbGDniGUBoaL51zDZhW2W5KYq3zXpBTPML",
  "key16": "311rH9BEbaSYK8mb9Tt5EJeo4vLJFaUbzjpNPfyNypYnsqp7ZaAVW2jFF2dvhM6Qp39y7C3f8VEqfLem2wvbE9qJ",
  "key17": "75qRQsFZovgPpUeyVpMH118wroKva13Cf92JCcKxaPRKNP6i8NKLmXx9dWtgesfVP9YQBMrQTRTeuYsF1VGzLHK",
  "key18": "2iaHGvUAyNbsfBhTqJyqudNxKDT1DfMif6qH3SiwgDHWTJn5vrvuV5gtiDi1GtMdvKz8efFQMcBe4XR6tQku82FE",
  "key19": "5nhmNPuWe5dKXezjRJT5pgLdtKbGAzh3b7tZpJuFCmAzLFQhqEFdSUvEMq37CotX4sdJmdEuXdKaEcdWkAz2rPhb",
  "key20": "5mrp1K9rnYNgfPNNE7vRT7NbRpq8hFA6hQAgQT9cdmaS35n2qPDXXVyjHRdRXnfSQ8Chv7g1HCkExpSiCcCMJSX8",
  "key21": "5zkogNa5wN1h77GcY8kTwVcDcWxQDNq42WAuASy9SbSE5war6RiXmFKUKksQRLmLgEz1rMBcShArsH5KSK3kHehF",
  "key22": "by8VuDzzR2ykfSkPX3c6CSmtQyRkRvUxoeVzDPCQSqmNgjXM3mf7cTSpfkQrWkvARdrxpESgEBejjdEU1APrSAv",
  "key23": "2VC2gB5eyxhj5PfNuhiZANwnVBADzXmyv94ajd7RGSySVAnwKcD78DgXAAGk763RsKifMsYPhXxdJFrHUGf9ihqB",
  "key24": "5Uwy4KzwVns6d29bgtYKKHTnqJ3ptAkMBVRKPxEeBb6fK5RZCnhgPEcVaTDDstsZVt6fNJYWoVNnRKiK8qdTH9Ym",
  "key25": "5w62yvDdAVLk2oEkwLgsSdm5YuYhCfUxYFoAisbUYQZQzRBAwrTBJQAZr8P9WjeiZvbqDNMdVELVxMuEoeoeDdmA",
  "key26": "4BqhBf3yvFQCMFQYzTBMtxMQgUUCDHYdLddCzQg5kh9sikZKpSiLWzK8MSuxjcaNrHAeXM6qZzXFgfzrVbEGPbJZ",
  "key27": "21r118R4TYU3EYJ2rXHbrzCgmwBG8X1a76rYEe5X2ymZMoYByGeaTaLsWo7bZCGwRPjtjDiywoqrr7W5Sr6HPUv1",
  "key28": "3xyxsQQ3E7Pgg1LETGRTZicsdDeQWNRuhNdX2i1i5FEJ68fLP6g32bYvEdUPd8t8JSmEY9dxbcMe6jm9MsRJffW8",
  "key29": "2uP34P1DqDou23qLLK4wC8pPCRv6v88NL3xuqTeCmMDbbHnruAc83FLNn2QfdVgRkMAUFCnT3ybNLfXwWmq3Yopy",
  "key30": "5jpaZoj8ZRNKqWEDiPvsr5W3hmasvrS9su9E6zS5Sq9DNLMeriGyxiKohD3Gqebn6oTfoTQTVMZ3pDFMX7xRzLtm",
  "key31": "3Z6jHqsXXhAjxTAi7guJaBSisJmh9aPmH6a7oAGPdAcTJajFbwqeScWbeuxX2j9SWdSJQugCpVMbQrGGfUVyM9ep",
  "key32": "zLYnmkR76z5yy2SknPXjCWgtquJsWj3RCiqbFggw88keMbSen9QzVoAoLWUuG2d8AopWr8qTSd3b6Ui1R6X171P",
  "key33": "HkqQTR9JGKTo583hyLBQcarQDFgNqnynR3gZgVBtzDMdTmPpLJ3hpDQztrjCz1cZgF7eUHHvVgERpqWZVE6sUoD",
  "key34": "3K4BGnJgyhm5m1vPfhs2mSfdnYXu9e5T5ggH9V1ekYgSa8LWoZsTmZR6R57Y84XLFzqNTMFHVb6cdQgWXv9iqEzk",
  "key35": "56ZDvyMgDzdEPgSGakLb5Ki7a9S5QxXuvGXFgWqwb3CokefBS3tYQQAg5S4RmhczqChkkQM83HQ5FXy5zeWEXxz9",
  "key36": "4eLD63idJrZfyiVYDzBy3YVbysftvhsngqpjKiwyzv6taovnR4c4MBHCvS626od6CkrZypbAF65uvRCGRVnTaa5c",
  "key37": "KDPN1jHFiExBSp8WhySiQpCq3Lsy9wpGCodWSCs9XHaW9VrijT2kjFKtqgjoRQVx3fR3KV1mYHMFxTZS4diynTu",
  "key38": "4Bkyo9gB4rZieErv71yxkoBSq8mkMqwXSyqGfLNEZV355a2ViFYB4tzzwNT98sEuqLCWoTWE46NvfQN6efQQomT",
  "key39": "fxGggHECT4Gbpj2hFmiFZNz4YThoavRV9bHsk6PC7pbgZvcEsZhcH7aFfp1kpHq5Uot7JVy13kXeDGhA6szYe3D",
  "key40": "nx9TUAjdbFkQh8cJqQEHT73FvMzGBsKw6hwFLBb3EYZuAj2NexNnjE3WcioNLKr5fmiy7ktrTw6po6zAX31oGJ5",
  "key41": "4ALBhzjsPrfC1DJ9r62QFUsZosxd14yFtYL5Jn7FvweqknnGpKAMK6tcyoQtfd56J6KqTxHp616h6SnvcbdsbdgX",
  "key42": "enaZ7gDvAYTrkZV4Nh4SxsjfFfaW7XJ7QorLNE6oos9j2cHvdV8Hw9cftdf7wDMG6HpFqyxTFEkGqY1xPQ95GTD",
  "key43": "2pHeiEzWLWczsiitAXEUoWCiur734wc3HgeGK6uzdVpqU5xXwd2VftWfmdarNQAKymrvPq7Kb2eiPy9jnBW92HU2",
  "key44": "5AbXe5d28PqTJvyxsfBWLBqPDeEDhzkjKakVNbHLZ6st648xwEmWAXmpt8ZswEocFAakfuuJKqsH1VKD4nDzhkDz",
  "key45": "yYwPpqjAtU55FDLwujem781QutpmYjTXjQqJkgte24xfwxkg1juD9eM3pzFcEc5tycSNorswPupNUn6SQoWvhxf",
  "key46": "4G4JVRkiFvYESqUbKRETiCPYus6k9g98euK2F3Me7e8wC1VvfkRywvtQPa2HzpdcLa9PMU4vB7eLG9qt7JLqk5Tz",
  "key47": "swUiySxHucrKg5DkzKbkWLp5FracjkBemmHkjYRNzkXGXy4gWmQN89dQoB5C1K3XmC1BJJzQqxvPiX6QdhqE8ro",
  "key48": "4uRtCCAD5vxvzDiRDzSH6WsdkaAjjbDsqenLzesJP6QyjHdryE28gVrkJ36RAvxcu6JpCdK7F1Ed3waViqv2h6Lg"
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
