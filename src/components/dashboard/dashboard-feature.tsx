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
    "prECJtaxZLtVobp3vKBDpWVZmfGk3W3VfBRjNksjcWD7w34fdvvvmpcqwvfVgXdff6TjRPFkFHmZqySvGo4sAj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHtgWfumcL7qMbbjCUWjsFHqJznP7grmPtAQ5iwPDYQ2y45eq9tL2jog5zexLdmrLwWCX5KxCyXZKPfbxQ2KT9Z",
  "key1": "3Xkq1FaBKpsGhfCRukJvQXECzg6mskn1LMfLGNDAy8bKGzqtPG5SoYYms7ohEsyy64VYBTj75tdh91gBKmDJQL6X",
  "key2": "2AeDTpAqkiGk1aVPcD2iskL4pXh8xhrr9HXKU3wR6LHf2zmbaNHgmUvmZjHciLNx9o3tyn12QXLEkS8z3umRcFBE",
  "key3": "3rqK9oaufec6xX16DWeBLi9Sc1f1gbW2Lsf6Ym8L3kFDQDd1oDzJ1Grg4QympqS3NkbbDuBb1TTDTFG2nVHcZcJf",
  "key4": "2vNv8Paq8yPJ1JzPCM4EftQ1VJ3t9iAgqUP3WXzXFXLdi9NZfpkxG6KN4bpoTiKKxZ4h12fMkpBW1qRFKiUv81Rm",
  "key5": "2pBb2aBv5qpkQZnmxgznhDCzzav3LhnJ1p5SZJzrsqMHHK8xDakBJ79oTUkKF3zg8w1kyiaLpDGCycfkffjxq4pY",
  "key6": "5dVDf14mebPDaEZ9bYFbfsepvUv8GMsLUWwA1BUhtBnw8dQLJwLPpGsNXugyHjZ2gRUyVYMZU1z8RDXttRBJbeEK",
  "key7": "39uyxmg5SJw27j2zvxcNxGtQvfNjvcYmRL2sLWW6QyN6fBWivCvo5Ah8pcEkWdEwJjb79RVMaV1n15PriX8BUHkd",
  "key8": "3Ek8rxoPgM7ib7PEmBUUTWN86GxtE7AxePDqrxGpiLDdZn65szDcGJ5NeR2h9cTuGWwkJ7zwsmfBFR29EkvimVUD",
  "key9": "2HiQTSAyzKgerSrTwaLRhHcYAuooFoC81Zoxck7LSMJKwWNcscxx2DrtyuQevqQVy6w5JGn34ih6EeutMvfDuoee",
  "key10": "cKsJJKka2z5kyzpfenNJ2Zna45cKcHoTLQk1HyrjnyKg7cq2yJ9oEp4odx2m5FDxBM6CZxfynmGHfitZG63aedM",
  "key11": "e6h15qmtL5i6ubzCvyytraBTN5AU47HrHV71KwYox9GRzjcR5e1NbEa1fV8u448tUEdnbXjTobnZb7drMzstdR7",
  "key12": "2jpSvjuYVrf9jbGeZjnkeUYrB36m3c7a9dwZEcjss7scXQHCeEFggiCh4y6eMK9FybEXZZQx3VKkjGsGThBHQDke",
  "key13": "4J7kvZCKzRfAn6eSfQSV8W4sXj35VRrv6Wq3HAEnxabfSyXKhJbE9FxgfDFYMcbCT6KnoL9LTLRKdUdanZh5rfbH",
  "key14": "2XfDBGMBK7uyuWH2uEwM1qhPLW3tsFfkhwEVMZNmbXD4tyDSnYRanWBDJvhM3V8ygBjKCZxr8iRsK8722tWhJiAf",
  "key15": "dhfci1PQEHJJrca8NMgd3HvxojPLCxGLoNW2yQQ7nJWGDETPSnEYPLdJtJRKw9orAQVh5bogwnKdibUG1y9bEsC",
  "key16": "bF4hdXhTrYegWoLTmCcU4AJYnNe417z3TvK9AEEuSH6FACgnYrdxun5MskEHJcaNQbYo7qwELLNdhw1opvftUaJ",
  "key17": "497d9B4Z6ZCNgyegQYWjYA33vquwDmTp2iEgKTxYfE8u5K7giuTirahFvNgqnrQi6215UVRa4WGhmfeUszn3QDA",
  "key18": "4Acc8kB77FBrr8PBwad9YbfLL4mbBrSKh2SrFvhgMMuxrug63rYv5bWpEToamEDCHTGHeBwdarwfxfxiSwECWe8p",
  "key19": "2ybzV97ZDYAoALWeqaDCPU4pd8HuU3fdBUAe9s9kLocwnBk79UNZiczLENUH26vUfP53YeWtLv78NefnYpDMPaix",
  "key20": "2cN51pBiQxnket1vyDJJd2MBowF5C5eFB8Rc3F1dj3D3uzGyTckAHe5QucJpQH8bCAGuKZJ878EjT81iAzoH2wiT",
  "key21": "eGfdXwfUKshzETALWapZZmx5ZPFwKX6FXJ7C8SVwZrA81iSwHESaTd86d3DaYQPAxXjpiUuwxwz4iryLELMiEzh",
  "key22": "5zJ6u7CFWKajGF2cPXZkgUkfFtJNJaarYH1C2onk4uUZ9EHbTf963PuBK5AMGFZ5uPLjeowEr5BotHGdWLYCyzDi",
  "key23": "3tdJfaubnEn2sia1X7iufnQsk4rekfLx88VX6PrRcKg4AeLd3gsHBAPaxDYjqkA5rfE9HyEAJi8f6eFU6LdKtSux",
  "key24": "pEimwKVmJXKpg73n1br2Xww9kyu8B9zFLRGQapkNiqb3DzaArYoBbcLuXATax8784XmUWxSA4Wr66sbVVj9cx6p",
  "key25": "hzpFU6xh5AP1bhmSzE8Vp5JgrkyACETqxYEDZbXyQxV3tUeCFKNjebqCwWeA43cxEZpAH7qjyTAHMAs6JayLFs8",
  "key26": "5EZmGGphVDoanZsd9K1Hin3Bdc7LAJHM1848bN7MG4irricA6fKXT6YZ7iCs5PbULUd6Nipa8ZgGpQjvhp76oogw",
  "key27": "54qweWLL6Kz4i6F1AVvJ7nEbjtqbphcAzuC97Nop4u3HEriyGeFP54BacMjWgLsXE9sd4xTFmaAijNLPRkA5pELb",
  "key28": "4MrTGpq9xWV6jRCMprXYwKaw9mVcmaa9aUgiUmH4vLvSGUhNtJCgwvqLYAn7mEZ8CD7iJACmacPNokMQTfXs6que",
  "key29": "21JwmLymSK1xeCSM8oDM62Goa1LxrgRxw2gcCfGHrEAufJibixQgqDLXUcgpGownAMsPiA8oZpa852mGvw6bezB2",
  "key30": "5AZw9KxJDYXzkz17rMF2QFYnebxWQhYmU1NC9RBQUy9sU3kCjVm6RmXadbsx7w6vnaK1PBKBKCSDZsDD5DYFNp1s",
  "key31": "22DQbjU25NVmU3aTwsgVWQpLRuGQ8angKLzRKJANARxcFQGJBKahComb3RgwC9owPdFAmgF6AUFFtNK4wjBrneQm",
  "key32": "53cu8V24ixjk9DWYcXN6jNaZ7EpXtbMM4PkBGYgP3iWe52JWJLT8TxB8yXMfzMNYtJZU9D9pbj9NQ4wZf1b5HYwa",
  "key33": "4y87VnmVUjjooqKgjJw3m3xTopM5Fz4ErE1nkCZLsi36wueB5jou9hVsrAQLvB5BoeqXWftmaFVLZT8PXBfWYTrL",
  "key34": "3XarPX4oVRyo1Rw1ZL6iVMCYfztwvhCUyQ2ASojKSv3PPC9N95mtQumRNTk4WU7jALqkUzfr4ezLcpSEii9XpuAW",
  "key35": "SdyThawt3C5rxz664CcSkUHFGBEgC3oUJuCcyJ6Ru21WCtPstCqRr9acDKWNc5Q2HGdnfLFbk15E1RB7BiURBWg",
  "key36": "42YNeHiBANCLWjtT4SZjSKjJ4Ex7XZSLLwES6XUm7c8oexPKBVGpzcJ7qmTuiXuyp8a9R8n51Yx9pDTgD38XPb3S",
  "key37": "UcmpmivTih8jP8UKTAXMjthiusHgY79dHGeDjUFdRXcoRZMD7DrERqTvN9bjDKgNJvYbcL6FrAqpLtW7Cd8uqpQ",
  "key38": "3vHugLwUT65oBKTHXtSckNuwskEQQV2gSmm9VP8cATBVTEyd31px71Qg43wzQiQqFPnDwRMTSqN9Kb3qcYyYDavL",
  "key39": "5rGmcHKNk5RMobcrhps6U5NPcATKHTsUnA52xXj1DsFqKk3MQLSnHHaaEBhrLdakL6mjDKf7EjLkcaggSiHgxJab",
  "key40": "269XUmFjBnzxzo2FruDphrqEy8mLZkF3VzeQLwR9sMoSDyqL3hiA69kxTbyL86pFfHUcvRrzBnJAnZwduscXcb9k",
  "key41": "np47RMGvnM4XjzspxppdahA6kauGZhGn7gZsyogw1YTSeHGwLiSAW7Bam2pCR3vUts6KPHWuALk6bBSy3HowNWi"
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
