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
    "V8tPMaqkiEiWjYZ9wTXBQADj8JrfEJ5Swnjn3yNW3u3EurVsu8YRRT6Cxc6aSSSdBg5PQEXTy8Gy88maJWs8Ewz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5WVY2fWYMxzv1HiTf8BhXtcjVsky1CYLhjg69myggn2KXazA7kFwh3sKTkpQ9JjnuhjWcWmRomj9B3mA4C2D7R",
  "key1": "3HX6YL1LXfRYNFPwjxUtAus6V1JvFpz3yGJuL1ik9yTqdAc91EpJgaVa8BXyx4kjzXuo68fhAAYa39udWjcQq6k9",
  "key2": "FZd5TammBSmzk3xN4K36Fg5UnYz5kimPWwMsosYbpNnFN7ZCnBwJ7rkggT81X3qpD5chL81DbSbEPYfBgg2qkdc",
  "key3": "2P8dc4Uy81p6AzxGswSPtLQ15MaSxiyEwPr4WmqTjnZegoHaBUP7K8HD9T4ZeVavM6pxezyJsCCmL5VLz1MnvTk6",
  "key4": "4eDaWtJ13PrSSyV7ZdyU8yi1CqRtvP65Dd9S7P4ZpQh2KmqeksA2i5qNL5J5BsqGVxs2BynP9hxnPQxgx7XZUy6d",
  "key5": "3eYp9rcfU687FRHWxTav5af3Z5BRSX75Yo3GQkyVr5PtwmWBncU3NuwDwHGBcXExwRkcC3hwdnBwsVLRwvHnQN1G",
  "key6": "4K2w5mUbFVyuxknX2FPLagAkBbJDoZxtxDRYpkSpFjdK2XEBRyRE1SCmTxki79bdLrZfwLNaNt3iCQKan5qVXSr9",
  "key7": "3UK9sRCc1mRbPBE2vskuJpGhjSvin8oJcDzng6XbkTLXPgcbai9tVnz5bK9Zv95vHniefXkQqR7UG3m9xbho4XKK",
  "key8": "5kTLq7ThHQxEYPjZoeDeKZBkLvHyuBbsn8Qb3BYf7gK4aYcNeeBgWVYwXpBWpVU7s249Ho7SomofGLTUr5UZ7a6a",
  "key9": "29Ay3BXVRJdLTsknYHiMm1khSYWkrwjnjEyWn72iJSBa568URFL2XobEMufWbBUJSkAK8E52wCrqTpcm6AKZCEjK",
  "key10": "QY4R8Hieoui8mBPkZUdgYSa7ePjKQ3MoEYgxaE9Kkmo2qUChQ7vc2pdXBegUFdJ99ARFFe7WuhKZDysMeZ6mkhg",
  "key11": "2Cncm8R6GRiweGou4h7JBvsPeoq2YaTfNAiN9o7XYKTNrzr9eEF4PXJPCKuzvHbwUsQ3KBphBpSqqLEVUunfUtr3",
  "key12": "3sxSNWxLdk3L1Hce4ZRa7qfToKgPXwCvcbi8ed5dzrGRKegKifBdXb5T4YXKQZUqsVPRmi348DWmfr36jb8PobQu",
  "key13": "4SRjkaWjDkPPf8X4ysS9mYJUu7rp6Jv1ysBFJCkdttp1zZ5myt8CUMqvGaSosxsP88ieHfACBbAatNpu9bX7sRNs",
  "key14": "3hAuJEmt6nsFTuJ6Exb2GRVf3qC6E9RvuiLzp3QnhJsvJ8XSsW6MRKa8FGZpZQndhxdXnbxo8KoYf9hommCJAhRi",
  "key15": "2U6PHbszYmNCsc4LmaZzpGNXpRKWGC93gZkM6WymeP539bbjJkGU6VogZfcf1Qym3CSY8WXpfdu41Deau4U5K2Rh",
  "key16": "5T5GEp5RuvsZueYao5eGU9394RWSQRpJZq5XzCw1rn9rq9dZoLuitHHcWJ8YtP1uyLrqvu6kwyUQxKPuPBbpndoy",
  "key17": "AMyeja4bZ1Tou81YSV7zzVKfE4kVHirKR1f1sCZDjKTNjshEqKfCWgZT4gtLrk9PcrPNSXUcEajBEnYFghNcEYY",
  "key18": "5aEwmguEZPQQFBiiJBVT7u7g3FB369Cx4EGRfy1vEsMi49TVwuYRCDA772Zp3ZtdVFtdeyoZL32mPY3SkvwZxY4M",
  "key19": "2Jtnrs3in1iyoQZsjZEhHwociSajD7oX8ggWhJpobLwPaTd5bgBKY5zMBg1uPFXGbVkexhPLMYc5aMiu8fJejMhd",
  "key20": "3bdLVkRh4XdBkykMgtZ6aLWmcL8XgdJMdNwCZGDgfsCA6QhDxXECxyQZknQShx6nKPRG12kGTKMPBS5AqLJH4B24",
  "key21": "5vbg24amQbQbY1Bk5boTkQ9vWcWSoeNckH3aqxjJxxeCN8KFmDdMRz9KxLHy48dmjAmi7C4naQbHynBXHy6DwttS",
  "key22": "STTvBeaTiUxhrffpwy7HzFfQLMbponrkuKnFt6RRLEGxywpLbv3iQnNZWq3M9emPCVvA4YGT8JCXk2VVbu7dC73",
  "key23": "2jEqa488VNm6qJorKNLMaqUT2i2TwfgmktHgQKngLopndA6Si82v1ZixaeVEJ7J6RtyBwo18FnEaUCkQTvCdtEF",
  "key24": "5NbreHSftun6E5wj38XvXgeGcoUy7wpmkwqdsgxiMyLSdD4aPvgMuXLTYYmeDGjrjxz6BKZJRiE5TggivUPp81Q9",
  "key25": "4opkqMGaDRbgeEhZGeAefbvRiGVHtnjdoRurtgLTz1v9S9T2tbSXVBLuv3DYwkDkXZ7yT8iy9zcTRkreKr87dkyW",
  "key26": "3AgNsSUZLYkZgWKYgRv9xHBZFm5L8hNCoCQMvcRLwnMf6oBGmRhP9nyGpKBSH3cFajMy1rS5FMM2F8f9VVe3yBK3",
  "key27": "5nhRojv8s6cwaHevHDBsUE3vVoJusGcaUM1ngZGcnqnpEYsLyMoRRn2CiD8SBDbJYXMdMRK8xJf8ynwuftGQ7brS",
  "key28": "5qQVPfpjopw2xGmYUP2z1Wg8rE4E1wLzbtUSEDX23VGJ8Rbq4BsXfkDhbMuzaou3kxjUk8MbjSHv8rdPLhoTwrW9",
  "key29": "452JqR6oWKsVDLC3wQwYeHhoEj1MevfJxCni7gyUqDb5DXQyHiuWGPbThPxnLXxwz1T5pFMZYAeWp5H57aJ66sTK",
  "key30": "5aTF6yRLFPoMqUxr4A1j3E175kk8VooaNLfxf2Qy1pysvwMJKTTdVxGpHWxCSfuNVYfmn3146FCJbHK3DBzNeACf",
  "key31": "5cP8FScQ3K6j8nVUA5inWHbAB8JSh3Pt2kZQWB7cHuUPNJD6Kg4w2pJ9ZjJg2TfSzaQAPHaf3ExnbBboaecKzgaF",
  "key32": "37ouxjZ62BJsqc1VkVM5RphkfFGSJ5JYP2Xk1mbSj4oca3z36Atv7ySHJ1tS9nDi9AhhfcCCouNokknPNFpAFun2",
  "key33": "3uA5V7fZgAxL9mXxEkuWQF5g2yMXeoCVwSyofzC8zDXzbzAZFFtRjtXXosfQYXHqmb5qU3Xcvtj9iy4GM7RgGsVU",
  "key34": "5ZtVv8SehwK1EKS7RxHcdmbgrvpNjY53vzaVomDtpQe66Hqw7Q575fXkpKZuebtswq1sFcG9M7SmN1zLj2DZdqKR",
  "key35": "3TsYzPiUMJDu2VpBMbxziRV32NeBzat43QXGgv637vtw62vQ6KkPSfxPVcnKMCeeLhsjvYHFkkPdCEbPSio56hLe"
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
