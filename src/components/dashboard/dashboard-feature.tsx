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
    "2t3VYMfdn7unx9dyZ9PcvjAM8UypwXUEX2WeeFyYeBKzLMivgMxshgwKZTEXF29QgfrdwUWXHcVsRGtT1TJJ7Yk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7mnBpHwvmmCve4mPZ9AEVHZh82RegMyhqwFLsaHPAJmbvsnNH5gJZsw5jesFnTMSTqp6XPMMfwjJZGBNsMHB4G",
  "key1": "uujwsLuDwadN3ca7kGdRWox7GXbp81PJWMXE3LByutNZCap3uztFh6hYMQdnkFwsJEtv2WVzAccJguvdvTNxvJC",
  "key2": "B6D7aAu4v2eiV7UJZBtQDWxLcpBgwZeHNrF6F4oRL9wkfBdUh3rCuuTzKMuMeD2orpoNefVQfqrcUPSNdJf4zAn",
  "key3": "3YLro6cKgHyJvNth8uRFfNpTwYLu3Ls9zm5UeBuRvDJPQVbtj5fhxKFPct5jxT7zuLfxXihjfP2QVZzcCFLGfCHB",
  "key4": "22bULx9JCVoXFUtGAjZuTRBw2JmsLSHje9R6X1KzjaZBBQyutubfDWETa5jR51w4QYqjrDXxF5wPSFgs2WAdLam3",
  "key5": "61NLSVGLMEajkUFKtAUEV97uij4cEhoCwc2YiEjTg69nnBg7hngTkNDz1f2w1MXP9LpU2Tyx8cpu54XLA6QXr9NC",
  "key6": "38Sob6yf3gZ1xWsYews3Nx1Ujfhv8jWAjWYyRSgEJ5BSmJoQbGxmrzqxHu9GoqJ6S38zJk9iw9upkc5BjZfZANzJ",
  "key7": "4PAsoa7pNZ2T5mYSq8Xg7fD8UA3gYy7UTXsqcsC1MWPYsL82mZ773TMkab7vYLWncUyfm2dNp3QVv3UC3CMnMxaC",
  "key8": "3svE1PSYaxD2MdpDLgrwAjJNXn1VFuxvoS2Qwym8mKjhPKhEpcZC8baigFTNxyUj6T5Sn213g2hVaEX79PLZu313",
  "key9": "58TKRXeNFoYDfrVhHsCJhQr3M49Fwo6Vw8yN1Rkc75w2YpTCYDDHMKsHDtrt6KTs69kQDmGbtibUZiVQ9do9RtTN",
  "key10": "T2hYAJrQwGPUmZK8n7Bun96wV7Xx3ToHLKrjgNUa5hBZ5JDp77WnFisNn21GZYNXqVhtxqHMEo74diLjbZpkBHe",
  "key11": "2G2NFGk2LxqjVHJz825A4QQhz4w3n5qn5Xsi7DyaWXzJohT4FqYLLVVu5ywm7pbrntnJ4wXUwM3pFREZy1bW1uxJ",
  "key12": "yus7k92dFbKZe7Mdq76AYkDhUsq5HyvpBi8VwQHzTmuPpKPfo9izRPoaauZ1DhoubieCyUVAuAzTFNtMnat8pzg",
  "key13": "M7LNNSTgJMTP52EeSurTwTFd9X4jRkzGbzWxAPZzTMfncTYfx1J2fs45HUydDXo9yD2v5nNtrJzGhrxuLLD965k",
  "key14": "oFy7cXSCUR6aMr8vU3vyB519veQKs4Q4omDcYpbB6i1sPUZMFaEiJHhP1XVcguKN9fabAsQ8JZxYb2x37e5HBbi",
  "key15": "NZF28ktNXqYrh4P1gSfdDGyATg41EJZJkUWH32HFD2XjWx41ohNZLnCWgRpUqmjVHtkunsPcrQjN9qquFsjwApn",
  "key16": "3jAMWAMUQv5RT912TqueLqVo2zUXfwR48UYTmcU7pZ6WXXDpJ7wuUYePfksKF5fHZGf4VWApRHCJPqsJyrtKkpRV",
  "key17": "2fNHTYFV6EzogxzyChF4Vo75q1FggCfLPaxBPbHi6UbGS198tKMmRVjXiwjKM5RsSN7dMUwyhrkArtLicNhwcVEP",
  "key18": "5YY5KMKHjQ7qtJDL5aWvac8o9jDnNYnsEeZzYyq5QVfARoeMXZGBYLaDa9kxhULkFcQjdpK524mGrL1DhCCUJfLp",
  "key19": "v8edaxLoKobckECGkG7qfgRxhvaw6JTJoBQLPrPk5K5fJhgUwEVZAbS8GwsLZ5AW4cbieGypC1d3mnRzpcqoCdc",
  "key20": "3q4ndNuXGpn65RhqvVqyRFwUxPK3zbqEkeQqcgz9EMqELdkmBxknuw6nAZDxWa6Y7p8ktqHhqECSZjrCEV1P531",
  "key21": "5LYw7qRyRNzn2d2ZD5qaQtrwux4pKR4imwAsDHW7wZ5kWCViYc34dSpyCAFjYdVELUfbVBL7bYEtJTDwkoNnDTgL",
  "key22": "5G2DoJDwSiUg6xY4AdJgnDTtRmedevpZDWrL7tAva8cxW8eMYazqAVjuu6FAXBDeDh96DL3UmSTmvevCKj1Y6mML",
  "key23": "634UGz5BXRSbdnANeJh4TsFhMJZWpcYeGgFEpuhfPvrR63dtP9Pyp9z1euTuxVBuDEtopZsAEEjeBugpueqZadzC",
  "key24": "5NR3CvLhKtJvvGEirVxYbgbvFch5ZRQsyCbo455SxviBiRkFHGGMYANZuVG96DPJL5Pxg2SRSNp5Nxhmn3BFfZy5",
  "key25": "53trt8NhfUsop2kemdefQq3eJs7heiSCuigfZiMMJgy4Ps2346PatR7fYp1D8KGvhiB9hZ8dgJjzTjyWSxgpHnn9",
  "key26": "4wYGBbhb7fh8AjRduG8zLGXhGDQRahxugV2SASgx2w6BFNZmKgXSh7PWNF7BVsjimcJfSkpsRfKqkicn3NZRwsQJ",
  "key27": "RbudD4KDzN9xK2M4t4bQ9gLiTysCdiuZGQri3MWL899WhWtkmdBxqxjPSjFvniTEb3BXV7xRKcN3MbMdKCZ9YHe",
  "key28": "2LXAqt8z59UWqYs2AkDSUAu8NEFCxHve7XECdrXXL8zko1yugAuUQUUKibParhtwFer3Gg7hsgiFAgCU5CxKhZJ7",
  "key29": "5JqFGquCSjD5NVVEmhfMi7fZrp6qJRM5myDcY5FuHFcGBubfLksmiH7YHFyj6EzDNTjb8VNB1JoLAN6g9Q9srWVJ",
  "key30": "Cd3hndN3hukTRR3J37HuHeFgBUpfi257VfcQby1m9jcnrcQJ22DATHuaHVw4C5a8CBSNTZgwWZr4oSRZXeWstyt",
  "key31": "5AWAdCoHnMPrWHWXGKu74WHHK6BCNwnRAqqqnY7xfMGsyh6czLLqztXD4sFeinCQnq7yFHfZfUEqBtwPEQT9ois9"
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
