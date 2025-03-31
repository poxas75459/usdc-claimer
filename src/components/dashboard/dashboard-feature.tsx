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
    "2TPen6A7uqnS4FY3eY9BLKsuPAPMhBaN2s6hAmJhLbc6jn54Z57RWs1ncNaYEfEcpZga1vFtaYDwx5vrKTSUkoXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bacNR5LwfbaFQQsxpCB8eBJ7cQWKJ9KD5234ozv4mQjuQd3539vdBTmyJP7MzDUJT77Q6Ats2mZVvTiKfdWZnfE",
  "key1": "3eadcjftyyacQrY7kGadqKWBdMazbueHKQikqE9njzAxUAymHDjkMsg5StXwTBqvaojU2Yx7yqNDTXLfadiKCZo7",
  "key2": "59cX9DMNfX96XNSpX5ZMeqJaXWzsSdSYRcVdyrcBX1wpsv7NUjKHjNXJfDqkdrZP4tAShg5p8sQBAfwtfNboFQwD",
  "key3": "2aNEHK5636fhCi2hXCpP4vFYLYYBXfaNj7DjpJRbzue2pS6GKy6bgDraFyeFAdSBiGxUMvJYEhJgoWBhA4RSbwm6",
  "key4": "3BGpJc2JT2BAaG1VLy3j2KS21zAL1cSeSVAGAiy5UtVgfiYxdms41QKKtqgAfgq1j6RCJJSi6Md974dYvKS9rG66",
  "key5": "3WAGwDUpsgmFYvafLfn49XvuPRaDUZH2U4tMMafjwLPYa2wRuVK2iK69aPCup2TdAqtiALmBCkh5HERpc3WbRrKp",
  "key6": "3CgaKfa6JAVLXpo5hfy9YhjaArwGpwkDeS6nZyaR4exEunPaRiUuBF8aH8pYnMQwtsfaDH2bFKKETcYZKD4JPrZP",
  "key7": "2c2uo6VbjKZDWi4RaAhPKwWCsiWuGtzbi9oaErCSZZrAMrWJu8HmhBwytQ6HULVpcAmk1WiFRgXyXz3JTYVnqGbw",
  "key8": "M3C94kmCrGBi3yVn6s3Zs4xdEb7j9Yz5DmcP67bdEcqR5NDaDduBunKajps41oyCT2VhrjDWmVPZCv82AhGfbVg",
  "key9": "38HQU4jESetiTTzuW4vb2NRMHu68Cegpyybc2wqWPJbr4CQGyXgMoVJUMhVXAiXdyJtcKQw5gNkBiTRSebpthVK3",
  "key10": "2VkPaTF74TvvX22fSPKbsYXjEdV6znw7U1WhfPEgkUKDydcJL9xuQHDxDCvKfnBsF654anFeuU2hiMXcz5vJ2KG9",
  "key11": "2pxfPLswyPg6qny8uRLvEoFVChM37DgxbumyrEarFqpmbWimCPDgsyu5rP5z1LtPYYDFemxmRaLj2e8aVE5qym5o",
  "key12": "5e9LNThdvsu5swokLJHRCgLCx9XyvqQRZfgoLNRvReVBjr1udgpHZX8hmhpfe2UqFXzCcukpHSWEoPDXS3jfNyBM",
  "key13": "2rRiAr9XgEH2BXXmm7z6b5eH5chR7nrpQskshzfdEZG6sXX4dyaxX9AroLoq8fCaPFNg8PiFmtPfo8F7d5nhKyAb",
  "key14": "47pyo5qiNRPNbrBNcp5VLbacjPx2KLnJscbAwbTbg45RX5a43nXFGmikvLHkb6iNDqx9pQmZQihB3WvvZVk2VAxo",
  "key15": "4pebC2y9f5kFZbWn9fMfn1trZmSietzZfzbHP1qHLx5VP6vNhdrrCH5LzemdJgnKWMgZQ1qrMZt8jwV5GvUJf8Kz",
  "key16": "2rDCn91f8h1S9GxFGTeqqw7ngy5rZCNsCpGMDSNn3VMVCJrLEZqP1cL8SHUvDGxjjwJEXkdGNovv2xdeh9c7Gd6n",
  "key17": "2Vn1i864aCsre34beagKBsmTitFCd8KXYc2XCN8sHP2DXPvTc8C9q8BWZpqwDPsyurayETT2gjCbMaJTrTN8eybT",
  "key18": "S5e7K7mxxk5gz6M3q595Vw33AWNk3LjiKneNViguUedwMULaHzErXHPYUQS467Mnao1TU6ayRHiSTqNzYBZZPQ2",
  "key19": "22fPYGDXmJhCbGFANYyuxse6DRBjTQD5papJooZR13rUPXt5qR5V5cwNADkhHbXdpJWnPU8XjEnJwkEXiTuDo2SF",
  "key20": "1QbSLeMbKc2bZGLmK25YqkZ9u1uCdneqJe6GDmNmN1QAgeN7XaUYt2BnrMmB85pTZXSCPm68Se1gtnzJb7Bmk8p",
  "key21": "3F5CGTAiTgLhRvpg7xFRSwXPyrXhALxMyomyJiAmi9F8pgoSCXZZpFB3mxTh2od1hkCc52ZbxxEvj9WN63o3kGJ9",
  "key22": "PaDc7hbQ6r9w4SQhsiohtccCrheiR8Xi3cztZzQ2ieR3Po2FmTUJ9xoGWDBCEKNMhaSggh3hQpkPNXj9F1iTKzh",
  "key23": "3pRuzGt2d5ythjt35ng1h6TQiJWb3VviRbakuavhKhEjbiKyWCUKtsWSsSGoBWfNaSg2NZBfA5WcpWwNcXGdqZSM",
  "key24": "3pSjqRFW5ayW3VFoSAWLEhnfBctfqczyNGQRughnPAPDEigHtJMQeyUcMZGXsR7iyFWUkKxyS2CFVQELFiyPTEtN",
  "key25": "3sPXTdvAvUKZsnKikFCoN5gqHuuwk5rF8CrTYrRHrk11BKsqpXdru8bKxJcMCKCpaQVq8MyHQU5ZKcSwnbQtvhZs",
  "key26": "28gnDoZfakZQ84TDcX5Uhm1F7GKwi7bd32A3grZVCwqWLp6eB54MjNteoi2z73Q1f7ogY1RFj8S74oKtyF4P9WJB",
  "key27": "5snGGBzs5wCPcACS7b1sULFt5ZiwNkcFGiV5ADF3w46CGrjaP8BsAQg8NRsvn4ejpNhQEUDnLrStoUjb1HT4smh4",
  "key28": "5umwMg6NJWzSXYeyM2zNMt6mxhfAf6XxHhNZpDqiZVqiq8JKrPKSbTrN7o1CqHMzVNa3AQNKCEVkkB4tr4gTJQbH",
  "key29": "4jD6tec34uaWj93UdRdg4WfozStrs4x5ZhW1TtXfrxNVGGdxcLnwpY4Pb2hHsGQ1CAq7rsTzuEdkoxngAZWFAZ1K",
  "key30": "FMfj7BaJHU7gTpzjf6v5cQ7dQvUqvhxmvhjjnaQnWuXVwBK6EzsA16rKwyumUgG2YsT5tScmPe9ecJUorm4nzn9",
  "key31": "5QFkhKNjojTp3paE8ZGk8ebp58zbH4dLBSfTdabyKBBKYX9azvwBxpxce6cFy4LhjC7hHtAiVSLSviCu9VwgTg1j",
  "key32": "2NmGMpWoSkjeXiSeYjhQfc5wL1v1PG5Cmhq6HP1fKxXbx4kzRA7pDCVvd4BUv62RB3bUJZbxkWMtNNhSLd9FCWHP",
  "key33": "pHZGJUG14y7L4dyWWeUoTQTL46AkPwpSgK4gaaWQ8hEm26zkkpWNkt4Evg1Yzs2vFiNbvvTHoSv37KV1uzCETvN",
  "key34": "u5hPdUkEoTusZDMWJxy3KqR8yJcbpdGjwYPHhRXmoaMD6UtkmfURNPforQWdfXF2BQHB6fqQt6hiPiBnrW1h4Jj",
  "key35": "3LgA1imWypMZthPjWVuS7FTsCkDacJvHGquzwqjCG4nG9Hn738mbbjP9vNqLvdrP1yFeobNdErN7gkv8TooJfP5R",
  "key36": "RZMektcEjYrRihqQbNDAceayV2rdfS2yBAcBwpUSsFGZ3BwdJ5Bn39rQwmkXhQ18eyyxo3wfgZoJbQSdYxQyQSY",
  "key37": "4KMdHer3LvpoAZ8LjEJngXEoEyZNHWmz9GykgSNobLv84E3Lz49RqUtWjvD3PHur9rXRpuuk4n1hB8apdWuGGa3M",
  "key38": "5CK1tx589eWgsWejrFhYKN2xd6YCjwcaxqU7deUqdDbjBVSpNLDsdvyEfx6DEyEnssAnn1xJcrPYw4dj5m4LHsvE"
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
