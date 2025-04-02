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
    "39fAHV6eyKBZxLDSHqzMAQhLr2dvUaJXUVcQps59gYDMKXWgtpaKkANRdE9rMw7waG7kS6Gxs9n7R6B6vEwok5U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zA7A9vFz1WRrr3a5Wy34YKWYZXgGwJh5pk7RaexCu8tDgFYR61nuhgPE9wTSGjBBgW8NFAnFPSgu1QmyCp2mbLu",
  "key1": "55YVsUewP8S7a6Asi1hqWTQULrVqKPZUx6wZmwyWdvHtgVNdiFLDkzqFasCacX86UvR95nuXTfJCnAN9JFRisFAq",
  "key2": "5asNpJ569ujUy8dkGiF1gHwMRMmsDZwrNXE6M8VWZDxMCBDL5sjZDXKi34RSzT2PWWwGYzFLPHgbyNNF7cWANDB1",
  "key3": "wQh3XXXyiyTN7jv8JnJaV1gfj35Dm6p1yuXqiaZxBFamagtrW6MPwAiMQ46AzZQcNaHwgzEgsqJrkusCJZcPbdm",
  "key4": "5PMjJM9XQogJytQGb4JtrnEmYBL5xHEb2hncfpXuBU37daBqq8RcWAh4veBgvaiep3eU7kG5H9CGV8aGCc2J9a31",
  "key5": "3ys8HyNKxfqFcpkSQnCC3dcV3XsFUKDWJ1TYLSDXF2Asy655Z3XHqXoojGbmC7ebsyW2hTNRYv9iZCdjkYzX6Ece",
  "key6": "3sgoKkFZn93vWmZCoZUfhSBBGv6GzgtHcnUzuYvJCzCFMvXWRwxskqzvRzGJpyV8uKyoqDJV5ss3cHV2WU4fSBP9",
  "key7": "2v915oisXx6jsjkkLGJPPLc4B7yiTfNaVREmVzWDXXKKcdCCZsFgBb3PkjkVEiSAEteDBW7MwFWUtrUU91ro7Z7G",
  "key8": "5XRW9zNEokRWn23HVJG8UHbfkGyKxyHC98m8sBfLJjZYKhkaaZ2dapGB37zaYgTtKMeK2oCkBkxyoSw2Qr5gqpUK",
  "key9": "3aV1CuuVPUj2cev9mxaH2mX1EgpPMnuE9VQZCPBird6J8PF7Co5fnL7MWsjSL9y251PAUhQSGhJ6Ft6qFLGRboes",
  "key10": "ZahrLvVgo8b4LnzTrVj6mMcrsHRQXqPaHszkLhgLcxLVhxFj9qUc62FuCr8Z5WPbTY9LEvgRxTqVW9sQFhvphYs",
  "key11": "4htUkZhyn79isbVVhXkHt1Wnh7iTATyHBzsZvrftQYuhWc2avQ4Bk15FMBAvCXzdysRQtq1SEGUBoENEunAwD6LN",
  "key12": "41aJSvPFQYntSTxyfqMvD1qeqT6SEiECPwgYtYNyC1j1C43ZZqevhvcLP4rp4mRf36tf93aBZxLwCBEXRe6EPRVr",
  "key13": "2QPivZcVV5Kwg9JtPoTfySYxfgfj9Ug9Hx9uqcvgJVTxw4KMKQMz5yUnj5d8ndmvep7JzRLroHaWc7bAJdopcZrK",
  "key14": "3RdYE5k51r2DpB9wqrnN1nLEuXznUGBoBmsPwJfSCMbt7srB4gp41L2aCgrSKc8YCCjP8fpmtsSSfJickN1JQPqR",
  "key15": "3thjewTVfNDidnHGre2yiB8JuhmNtf1RNYEodvxaTR9Kuv33mh4QRzLZMpskJgvivfHQA1VGZXtyKEXhAusJk4yt",
  "key16": "2a6FvjJGZPVAfRihPshN3doH4CLUKPnWNRqKDMZMcqSzc5H1eGtX2M8TjaDUhEQnwLMi4t3cFuNQzsfmhXvU6RzL",
  "key17": "4r2RfxVM6ESXS6xKj7gRmekJ2BLTQnatTURvx3sNereberAicwkWUzQDXocFDMXADyp2tZu4X1vxvc5fkpKHLB6Z",
  "key18": "3MkidXMt3VszadfMwkJzGoeDkYx68L9XyxXCEBAZZ9Rcjo53ZJtrSSZaHob4rLhQLGksS6wqRucZZaVYvMf89idm",
  "key19": "65cSNTrK7nHmPZ218GgsyU4tiiczXwdzVqjaxcSbyWQN9qigvAQ9ZmALpxoHrMgg9Gc6Rsp2JvpoRgVtdwumFy6t",
  "key20": "4Tvt4GbXyTQgGPwRk7Q1dNqwWLKahS4uZSNDdPHhuyZLBfWXoxR37XDx4uksSYrsHxTFG9ZL4vV2SomSqUvRWta4",
  "key21": "3GxY23AY5q4tV6nXVqpBPcFs88mmaRffkQ9iCk3uoAjPU77oqbCvCciirvWBcogsZiEbDwNEwyrNxLMPLBDRGgmi",
  "key22": "5jwXQ194BXWK7ETygS9o7Jyo8ikwruogbptxCoyYCYUXDgqjfpmmfgiPuMSxsynvBpLYRpQjZ3RMKfazYLhmpc3F",
  "key23": "26LNERhSnXe7xd7GNEbLbqGUkGDnARCW4xGqEvYGUp8z6qzMrBSzGtZDKVM7w1VuxhmSQJZEqj8SPbvyNB4XrR84",
  "key24": "tkYgiB3fAmm7x2tyLpya9HGwXhveuEpifbzksZmP6woY1CpAVKAX6XrcXnRrHCriVppjfDrnfXMjRvd4vGVmY5q",
  "key25": "RVTBrquCbf1y6dE2xxDQcwAKcvFZazdKnSVSRN8gE2kNAg9M5Ni9Lct5CPUsVRvJ94UnMXyFTnus2ePJpL8EwpB",
  "key26": "2Ar3KXJaRpXZtM5GVihzzBXmreFFECUMGiTELCAmv3J9HQZgEmi4PfGAPs7aJdq6CApctjR75a6A3Bjon6BKBWMd",
  "key27": "29QsmLi2t94zZf6v7F3nTAsBGAJKongKbiAurGADm94CP2pAsysWtA9LX16rCd4c8UStww5Un5yAzFCsEiTm4Ax6",
  "key28": "5AMM9Xee1j8uYrtF9WhNjQBpqK6pPUEwSFBZzx764QSxniJNb4VNJJDVZoiu6iZnGRRfKB9Dx4JufKXK6X5YPU9M",
  "key29": "VwN6mE2wBse3bQyzUBsSoP61XcVsg1hSZ8yK25CwWrmoq3wo3ME7XLre6No8HGfbojTAa2d51CfQpc5QHwwpKbC",
  "key30": "4fzoAYKPJF7xsBcRMa64u9b8tFMvAeNLXKGkbACwtCUUKG5R1zCFkck7N94BAfKhT3Q6xocotPEdvjExrMsPZwYP",
  "key31": "56MpwpP3ryVBgXybbrwjaBCoNB9UeiztdSM4ctQnzjhV3VEVYSDxXqHMLvXY1ozN9znn5VKPm8RtT4FtPdhEEL2o",
  "key32": "4Cf5E5yWSaDvPn2jBUoJkJJtqv2TEdmRddywRZaU7tQiNZsDxMPW7VgoruhVCaEDK49JjkP8m77JppoKZS5thEKg",
  "key33": "65gJSFag6rWr2entg16RBZvHEn3Tn1Mi3iM7D5cBA7Gs193ZybA9AJCppRqK1vF3Cf2nowJuc5Lt5b2yx5dydcdN",
  "key34": "5yGb86Q1kwWwWVRfVqucKfMf4VgiUE27nbF1nGC11ZvZy4r9wttDfQUVQu8ec2XadYh3q5RKKX8qJGZv1XrdN6B",
  "key35": "54KXpd8ESKgYoi1MsKExDnytfiiNca7Ja8aq1RDvGyuDmGE4X6w22WmdQ86vbzbdbU38UCAuD4rr9oBRd7gYxWVV"
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
