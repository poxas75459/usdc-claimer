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
    "68JqLoXTrn2PVG8Nk1uczURnRftVz5XrX5Gr7SGAMJMFJEjLaJs4WWqStr6Hfs7aufofKajwA5MprnwTYRD8EZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDGWMZjftjjLpnWd19bygvGADpHHeoAeYN54FFxbUCnn7HyzUWTj8sLsuG7fbDP1pYCZzdA7Z2JDb4ffb6pe3PT",
  "key1": "dRHibratUSpiZQmLphGUciGXEkyHYHLWDmWUjJ744f9rMS6sAjvMKPgaxb1A62xszmeu8CE8CG5Z5aDk46JWzSo",
  "key2": "4F5GtipdLdJtE1K7rsWiUthUmnbmZrKoVBygCRAmK1jY8BYmqjygKHyLxjRymE3wH3LPBD82RwpiGz9gpY6xa2JP",
  "key3": "5bNvWqzFqt58eJLMPjnU38mHS7uKfmeE2PZbqir4Bw9HUijofS1a86YfxQmTBy7yGPCpYWwT3L3Bxu1JaL3t6fQY",
  "key4": "65rc9v2VY7W9bxenQJALW5J3g8MkUwN2efNrFDsR2EUjSdpDehcn8F4uL72Aisv6xqGSrs6Baa49kPQpHAEmRyy",
  "key5": "2DJg4SQCjb7uqUkorKYGLC1uBjj1fBVLyD9HCb6iGjRFb7XBRkdtuzESpvqNvcwdenqd7qT4JLDP6VZ6VSn23BeG",
  "key6": "34C54SPUhnNyCgEfcah8baCWsPQjX1N2yMokxePB2Vyv3dYwWdBH2uQaspK8KwG3GT8JJnWXRdxDy8QSZrTpoeSo",
  "key7": "2q1n79YyKnH5xX1mQTNmz1TfNzmyGKBfCpYNTB71TWNe2YCcwUUQK5sHHUiyFZiBvPrSJQAWFL386utMmHpJba32",
  "key8": "4dC9reHXUr9zjQPDe4tuDoGtNrVMQXgLBSqGhbEPVtcFtti61MHHkMykfwiwLHWgRt9tVmGHmVoG49EGy6hfGfEq",
  "key9": "31Wnpo2SSBaRYNes8qmuYtgvFwzaM2opND1se85MMBjoDYrfMxwkb9h9L9TpMRK1z8jA3sFFfkpX566mVE8JqRE6",
  "key10": "64YAG3SsAxBsZ8dzJu1ReUSRbfyFVr7KjBUgLp365KmnFmNe8Z2XfJ5DHvN2mZmfvzo6oTiidL7acdnA2M3zcrMJ",
  "key11": "2kDUJuZswd3h1BhMGd2RqCy3Dmmth3B1TXh3jJMsEWQYGrsPk5LbXaLxK8A5thKFDHGKBigdEjpGMgpC5vc2RNL",
  "key12": "3SxmpBbDfMsYEVW7DDYzzm6v8oZyyBWyGetL5vXk48mjMgqBRA9DSx5PdMPPTuikw8QxqRWEfrQ99khaPG3cDGU4",
  "key13": "5RxX9BakdgUxFPURKP9Z8AVxkDeZXZW5wYeHK4Yzhdsx1n8wzL7iLp9a1CGsmYFWqVHqvPpRdT3LEa3NvRULw8P3",
  "key14": "d2YF3QCP8WFFFqLRxGbJa2MjtwvvD6Y21WpMgUdfjAoAZzFYTFL497b2K5cfViUvDkA5kjES2dcR97F4iABtSNB",
  "key15": "PL94zQKqjLRNMXPLm8ejN9gbXtxZYZVB4PanXgPZmtLkWPDsgKCpUz7xMA4o2H1Ln3S6j1W6irZvcu9f1yfedoZ",
  "key16": "3K6gmzA19ysESKAzCNebzADQu98SGAdKrBtrYEWVekNXsuUPYZCHTkMVF8z6mCu31vK3Em7NSdzYBVXZ8Z9JfySY",
  "key17": "5dnu7M78i5Mip12kmE5m9t4UXdiG4zG9gSDcZZd1wyzE8Y4Hj7hzJR5ZsB8ZQJkUBu3yiShpz72SNu3AExorDeSa",
  "key18": "4fgnXdYAs1Auq35DCc2DYnHuHG1gyC12Vq92ph843YKVXSzLHCVYJCudogQeF7Daqrbbco8owC9nxsU8j9HovLoz",
  "key19": "5tUTVmgkwRtLiKgAJDPBuAS8zNb6jWMARcwhPVLLvZB3WNjHH3T8EQMSPgpHpsqTfTeFR4joxdgKrMdckNkagLoE",
  "key20": "3eE55EKyR7ke1mno4df55ekAisDTrQBcoJaCi6uX2YJTJ9ZRB88iQ1qyNSWFpXr8oTmPgqKWeGux7xFAJeDu1GLu",
  "key21": "r2b7qxG9GGz9pn8QnsFkwthypbPgTYU7tzz7s3YX9XigJMn2jcCPRtK1BGNHPxj9QgoYNsY5xsamVtaxPPGMWbr",
  "key22": "3DZCU53mcCN6M83a53P4N4F1z5uiUckkepy3676y71MSkmxj36aNdcJpfhQyQW5seJhfNMqupRPD2Ey6pitczTku",
  "key23": "2i3TZYUCL2qwwd3UKNa6LWnmd1Z8afgeUF8Y4gPrgB7QhgYy5GxT62pMxXfqLb9XmKWRQ7gvhT1iC7F2eQ5TbTw6",
  "key24": "4fsUKhPc2cAwgsSS14wPLRpnYMmPDzRYToCJ4nvEWXKJ8DuydZ1YeqHKrM19B7TytUaqDn28CjQp3GoUf7LNyB7i",
  "key25": "4aoGEAHErmGeqRq3ZDDkBnF4pnLYKfNzpyvcDnVvc5iVf7r7XKsqZ6T4WKuLxKzBiTia6CgNetjt9XWeKua4h7KF",
  "key26": "2Rf715zu1vu5YcRN1XV9gud7ED9ZrHChr4yibtP8qrnYgfYqoifWrEaaUx6by8bs5gsqwhfMx1MMYcYbBDkfNMc1",
  "key27": "2abZX5gWgSUxG5m2CzVuQnigJzRpfAAKRKY5EudTjTQBqvi6dJHqf9bjCioT7K1VhfvVTRKaB99K8mt7L2G6bkB5",
  "key28": "K8juSNFqFyheUHGix2B9g8SfzaWT1qt8NvHZsZdgbWSk2oe7ygn8qAMkCj1itvGymtR6LAqrAMModgRoLANBNsp",
  "key29": "2grdvXSQ2pNcyTGXYoNVKC3X1meU2ANZThHFFGHPSYrHRensRsTR196zhhQYGRyLnTVrxiqGhFpJBmiDx6qve4zZ",
  "key30": "2ckWjEz4XRWB2Qe4n9d6Mrj3NqYzQ7L2ymTQbCVUF7pUFCmYLePuyjgXdPFE3dMuyULjx2gLRtYMKFsasL3WnjkA",
  "key31": "Zsz8vJSpQen1tQXc1HhADSDSBJihv84oTa9iVSTtFi5fht69Xq6Zq6M3SXcCj8ZmzD6fg78bGWi396XVYznQvcH",
  "key32": "3g9ht4ULQrjqDZ8nW5LbPw9QMtCToyiv5tVF14mPV3VLpZndd5VcstGRS4KSHxFgPyw8kdNceJWw55xpMGU15Qyf",
  "key33": "5VQ2FHyQYf6Lr95UzYqMKmATtoQYzqyNN1iTBuh7HGG2iKW1j7FfmokWV1siQBkM5sFnKY3oxWjTdGxGuKQxbpxm",
  "key34": "3LPeTZCn9donxuXDdF1ED7cJPfYn4aoS2F5YpxdnBmUUT8pU2APgNtWRUt5ZV4rsPjw2nmGzfpXXvvSb35r8uh33"
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
