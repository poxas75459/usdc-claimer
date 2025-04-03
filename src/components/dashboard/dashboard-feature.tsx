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
    "2cGDTE9yTSzLUiwVzBfApqzBEUuyeSWPKTHm9z8CGDMA7E69vCtAsEiNim3f1VvtxUpAB1WKqKmhh85eU7qhKoTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t38fJMbngpDueyvq8txQDM2oT6E7AUuw7SJUADsTHPR2TFrro4ww7feRGxNwExtfsfN2x2TV4S44B3KM8Tj3xfk",
  "key1": "2WHjPpRWZ37NWHDwytSZSPD4EKndXx744Ubh1qyVqhVUS1iZeD8eJsoSq84PLmS2YYGczfUMaiB2GNd4aywZbfBf",
  "key2": "2TcSxkEtZasQxCLYVd2ydUFickiaWEzSfKan1mPxDjDZGZ7tqjrTA9tY49ED7dnQkWXxNZqAssieAcSj5jqHEJZS",
  "key3": "3aZCmbBLV3oWCP1NhURBzDN9bWGuMi4qCHP49tcRJpwvk6yqeGxiyVn7X92spdgneNbDkSfS1n1g2chCcjLjNNjq",
  "key4": "2VQtcW3JeJM7wutPeFR6Gjmm6sGsM2BGKe3eZusoJtx569VTBmxjhye7uQEpYnP5kyEUvraRVq2rNveSDAjHa5AJ",
  "key5": "4zzR4PGLgnX2a4wPUxdkmF6bpeLYKCDNQTbMXG3xfncYVY5X4Y9ewm6w7Ydf1C69wEGoxo71N17wnRohHVQ8bMEQ",
  "key6": "5Kj94K4hcA21hkof1ueneKD5yfSkTJ8jdSVn4XKHaPBGp78AdHS4bWpgqH85GN5pBAPhMWfubAE6EPToXaVAB9am",
  "key7": "5nZ66nhungSVnehavdbuani81ZMExmQcTPuQTvLg9hx7MzH3Vm8sLpKdajYiW2ERUstXiLEWKHYevApn9xUaxfCt",
  "key8": "5BkSBqhxBtzYAB2tHt5FREgsTUZ4hHvjh7uy2PWYf755zHCfcvf4HcPjsVqfGd9YpXiSZLShaX9QoLAMqhFxtrFc",
  "key9": "dmd2xo3qFE9ezYpW9dZkptiYWazKBXBaNp4C5G14ArtyBRhJStMgrzDZXGKQnvJHeo3FhCKt6gkuVZKSvDPA9bE",
  "key10": "469r5DpEFkHXHFgsff5fTo3BEui3R2io7pQWMhqhghHG2Y99uzya8PzNtZkaz4RquTWfB2M1B2V7X3jcGWejerTP",
  "key11": "668aRrJzcRMumQUVMPoMrPXxB6KrDqsJWLnEFRDoSkBDzwyjVxrstMihCzEYedaoPNPVFMr3VN8n7XQXBxvG4moA",
  "key12": "5W6FwK1G8VwzAG6atyPFy7tqRJDtTif9Ys1Zi2gyGCPZSMPCxkX1zYxBNHVJsEWxCdTLoBYNg4wZjQue6mQUcgu4",
  "key13": "MJFqfSkwLSDhF6T4KJ3WgWdySdu3TLMjRigTDRUkTDMyAF1wexF4eW4bVoUSDhujJ6USykZTwrjKNzaXirtHfxG",
  "key14": "3aaqnXTi4b5Wj6hbsP1wybF5APMrBajL2HPwHrQRJ7QY4rFegbLLuEDpf2NfkbGNhTrhE89RqrDrb55mRbgjWMgu",
  "key15": "56C7y1PNEjCvojBYRQfuKYm2YqCiLDgj6orCnGCyFWEm1R6WDrqAoZcxu73L81Z8avTCKrJSqitCKw49HYfE2G78",
  "key16": "3uzoZwB7GituXHpqh7yTs4iwVnNt9xoAHqeCG62aLDHqnxmpaMkRFubBtXwzeBTnmrsbiqxvd6cxqo7a5N1wBGzj",
  "key17": "5aGBCnXbdK1qfo77geo6hA1ugdEMHB66eS8D3AFNdei8BNMAMzcfdToQCjU5MjLLYkLKm9TJNqxK1bCP5WGmKphB",
  "key18": "3F4RrKwmYbywYNfyy1s94412CjHnfcDFMqSfCdNpDTqeesH3d5SFK9B7iVBfmz46iNBBwbfz4wHji7JGcRhzWuUK",
  "key19": "4dvLVzMuMUipDD2PS9nvLk99TV5WCizhxv7bJcqtH72M2EPJAQMNHgr5R5FJFL6eQLg8sRgff6dhxvkGjjQxVPfh",
  "key20": "XugFhJYLu7Aug1rCKoJ4h9RQXGgfB68nsELBphKnxKdB8auzeYYeuGCYgCtzGMACWoiX9FiEkQ4KPvpBADUEMHc",
  "key21": "33vd7JtTWZPmZzxvxRMFrtWiFqGDAwFXM5JJUz7tg7KjRspkSmYTenpBLMmGuy2jXyp4HRfvebHjwLJK1G7XLhxu",
  "key22": "4y3TePndTKNhhTXRiU5NYT6QrAkwLUJf51NSnjXmGGHvHLpv5M465f2TmHvYixUHS6NbbQN9cJ3LfShc8Jnm5MC",
  "key23": "5EausYRH2LKyHfMKWr2pcMGFq3KCQKmaMhA6U5ZVGWoPf2FCFFHFXNdVza3MsVYHTGknhkWHxuQSkBwTtrRkqrCM",
  "key24": "3dFUdBVcKUjZDRk7C9tEgyroJLf3FvKwWTXDwsZhYpbY6u8FjcevJ523CtW3JMuBNHCaTMAw8w2ehbVwTwB75skK",
  "key25": "3a4d1nAh85TSRyEmdXNdz4NN1gSQhssuH94sC2otpBw1GjWP4h1mQc2N72sWHmb1zTztpGBPd3MYZ2WeEa74CDbA",
  "key26": "2t5nfmwb5VTUCQ227E7N3z5NCmNfs33iWTfxhpm3hUAEr93tcDs1XE2ASc3jayaTB63B3gxfe9QhXw2ExXds39Ci",
  "key27": "4m4rsgf9PWALSDDwS4WkhsdzkAD2zzEhHBt4xBRNzNzXnDk3v78rMzJsbXhpKYKQtxCxuooakgw48GLHhfsEo4WF",
  "key28": "wG3P8ZajBVnKRbcuepA7bE44h6zuzESe8G8o5qYF1o2YECaapiWFFnxeGh2ZgNCiZt4pZwXcNDBXtFBPwWt9WUp",
  "key29": "4xVB6TonKTk6rPEVvjuzkLFm7YWPmd7s4NTE64yuEf5KkTka5BZRvd6B1fQ6aieHd49sAJFjmLudT9gqimGqF9VF",
  "key30": "3DRCFNFkdGqQrxkkvMedjjbXqxBP3V1uqk8oePHLGdn6ZspkwUu77FHsYqiGrKP1S9gwAdiHAU8hRjaxen7z3x22",
  "key31": "ijajjAFqBbSgUWJ3H9H8FfqSPUGArpZvN6o48kGYdehdeV5DquBqNZgFEVdrrHtk9Nyx4UdPhR8JHDfkKwdoiLt",
  "key32": "5u8h8W2gWSLoY9ovztfAaeRvaupQqB7XmB3btCknFDZpeLoXgCFyV8EGfmMj4SwzVh6BNHxwDaTFpzYxgH9NZ6TH",
  "key33": "3QXYhXfGhmtidvdwtavysyUxPRxSYE6h98CDshmTunMmLFkmFFHNMU2uKTGgewbcAKkdr3j5nJ4SqReKmiAnYrFQ",
  "key34": "3xHLAzKAt7qMQpdrBsA48tKX8h63NY5iDN1KSXXP2jgmzWvhKcjyNnA2ZjzzttNczoNzKtvGUqBpwu8XwWaSHnNV",
  "key35": "XqRVHcfgmU3NeL8DHWSEHdkkfnvQH9zWYBa1HTR43eBi241DZ8qV8GA3FLj2rN7EYsV2SYM8QY44yVfasVAZyY6",
  "key36": "54x1dLxwc72ih3Q6R2bE9aUoX2DUgxwXBhdDdpfwWXUdEpTBFNmLSE3RqMSzCtkEHqSghUTJbZFVTsxNSocxSZEN",
  "key37": "3zzewwdRxEBKjGU6ugXVk8Z1Ly7kLZ5s8GNJNhpN25Mdtz84QGBFtoAZk4bDLFFeMSo4QgSKJfLagMnU8o2xCMr2",
  "key38": "2iVDs9uabLDbKZkkHYXfbc3FzWqk2nWbZCwu13rwrTuGMb2GzvRUdGvji5szPXMYX8BkCTRjxiGbB26nfLmCjdLZ",
  "key39": "aQPRkxSoXLKADTmsEWrcoDco2sUZBc2WLTuRFUSYfM9Br79mNFCv6nf21MsqMqbr7DHc3aT3eSmkzzU9nyACLrv",
  "key40": "3SkHGXB9b8ErWx5mtmARnAPqViBvV3zMRyJyctP4CVbqnf1aRbN4e3qbThukqSgeCFNiFVHA8X58seuskFRbPzBQ",
  "key41": "WW41n7LiDm9yhrATV6zdVd1Ti1RLRgB5aCEtEWWj2NiMuKQREjqT8uNRkXuETRtE1hnmYcbvREGNz7J1MM4nQVC",
  "key42": "8pVgmQ92rYRGgh5jckgpP5B6GnkSHcrjVg8gdWM8Z41CBwMkQ68XnPii7R651PpCfMwremdwMmQqbkpxqQsJPZ4",
  "key43": "SHotDxTaFKTj2BuHVERahPQ9RW5Pt3VUyQtQs27xkkC3kKEzfrgCb3R16g2iA8YfTA7GtQB3v78x2FV8q2b3WxM",
  "key44": "7XQFYG9jazBj95FTvheqe1EPXLKeGzU5M9VCq3TUgfP3M9TKUsYDS6YpywxWzsGFhDkw9feUQ7RQWAuRuBf6CdX",
  "key45": "2a2GaywcpXBwhJiL3j2EQrAZ4GHbDzsKBtQrGh82wztumipwTarhFtXiQpYMsfCjvhDJxfMSRK8KE4TUxoRRu3tP",
  "key46": "5KM4VeSXCcSMJ6qVRBUwaJDckB9BzekMscUx2goiyVQ9Vi5AZrmaeDLpdJ57rraKFZaHQ9qyiLTBXhpid19XsRxf",
  "key47": "4XP1WEJjnbDxF8Mcp9786LtiQGV44cucQ6hNeGLKwKQ13AF1XvBbM3ucxmTp2XRxY2Nu8NaodQGAoSRjmuFx5yKg",
  "key48": "5pSDPRc1MUd8F4PNDJoXsjhnkD9iJwGJ4kMm7JUDq5aAfSFWcSsHdcaGdGAwAotx73FzGqpCaBzEYhXdEpNxFRes"
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
