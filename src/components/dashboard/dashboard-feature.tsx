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
    "2U6whbcReGo1QXY1pvv93sEfSwQL2fWn98wwevccGXxnpEgSiEn6Kb2MPNehFu7pWt5fvC4hTSfx9pDj5wz1ppRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbySJB46eYgSFHjFhzvygeiiTVYakXnooBBthDi6zex7HQRRjGDt7o7EPsGe37vg26v7K4aLpZm51i62harcTo9",
  "key1": "35gpfSURid3NWhJFZKPd7EGTB1jfNtgphRB3x2Q4KKYhxcb6XaxWiN4ibdj5eWd1VDRnPp4i6KKZH7WVgbqZwMu3",
  "key2": "3ERuRco3eJCvZYkRJ3aFbi1atcNSVUTLM3Xxa4aHzL9TP5zXLSH3iH5E16dBrozPBTuQwEUyFtBQYEUdHGFffbdZ",
  "key3": "joBhaTepMD2WooUmWhXT4R5ik1AprjUsffN7pT1YWSaxrRgNjEFhPX5673xx9nBs9HwmbEMU2gjLahz1UCihgMg",
  "key4": "F8Pt32s4fpxiH7rHJCfoCPWFRSrfoQYergf4pAKPNCL5PYEbGne5iLGxGXfwFe1L4TNo1qTQPWrkTqnxbFkmzMn",
  "key5": "2xaUYq3Fq5nqGLxH489y58bEFhmM9kBpXLRFBRdJP1VPuVAu5nxL8bAmwA4fUZtN4s6ykMee5uMC7cFvXv8vyZwT",
  "key6": "wqqaEdiNAHsFvZZPxpoTzJBboLuAWYuAyaawPDfPfVMsbTpfvU557KhBk1VcUTEKGuDKJqQptDk6ASzPynTpPy2",
  "key7": "5NnEe8bouSeS31MP4Nd3fUgEzcfEn99tVCQ6T6WEH8CffDhHhHASRmRw4WvFRL77Kqnbup3iQW1JSt6vWDnt153u",
  "key8": "2KSKyKQNW5LqGQq7zbYn8tfv6HyuxJTYJ529fmmg1wneFMHvNtw1RJVcDW6aHnNpJ2RMJzsrbrwxKpB1Pzb9KKbE",
  "key9": "5JjePmdVYG6TXPeqoHCWYdWUZ6bRj7XMbQniT4eaDfnhdArn7S1Vao7jfJb3s1i2xXQ6Nx65mQZGL29FsPa7KkU8",
  "key10": "5MFqt1VS8Gzz7rpgLqkYpQ2BUHQzGuDPJW6GekQqmfViMysbjsFLCvpxDLYhQKcUZwJapGputcV1K9KAyzi3EK4C",
  "key11": "3LduRkPpLyiqdXHdkxxpd3mUmfSng9HF8uhNm6zobbf3PrxCHKkjjAGTZU3XMT9UaiE4vg2AsUPitTU7Rog3CTz5",
  "key12": "3iYN9iQ6HzusiaDbSeTp1K2yJMZutKdDNQFHn4tT3eAs4D4cdHhwfczYwt2pxiRqjwVJfJy79ejYqJKkbvsPgGCK",
  "key13": "5k41HbEmwvHUrLBYktW62bYrPqhzsLauM73jaYw6MKo82YRrR3PKkZpTPcPxUN9BnBKvwQiSyJkb93Qo6KTovNvJ",
  "key14": "5psVYuMcEYRretzcgs4HWdj7fW6wcuePX2ejjRLt8Tha3AH2GSaNyoApXJTHvJyiHqjSQdfZy9rLS5eCXugi6vNh",
  "key15": "5vZv3G6z5zMq8mhefCkqoibBRK4qNDR7FaRhPnLGRW2EdnCPyPU9j2wiQW9CTJ1Bpe9CpwaKnL6D9DAvkkizDSJ3",
  "key16": "ACsAqBwAi73uPTvDcQNnFF9xEPRYbxGw7Yo7yPht34toe3fE5Jn2dVLTWUxVqpKVjjjZDkyLXwi193rwtUoJMYb",
  "key17": "GrtxhbvvvpE91zgmgWtLiNPUkr8munPpfLpeeMWK4omTfEzWcnFPcunACxyW83UfMwepqEJC6EDp1hBvYhzC2ff",
  "key18": "3B9U9w8QyFyEsmwd5TSduBZCDuSrLF4KCFaoerxwRZHDoxScMMoJ1NGWug3iAS2pe1MLJZyfw8XkQEHdHEFGr42j",
  "key19": "4xgspkEh978kiw8N9MzZzqJXFJkKgPTAigSRy2yyzuBePvMp6G4DzfGoLAYo45ENzkydcFgdc1LnqYAeKyHEhAnq",
  "key20": "58PEeKs5QvxKAygrqhhruUWBLRKerJ7sWFieEmQuy7Q7oiGxE4qivbdHQWAWVkyvkwNrMuExq3qghq2EqWUVWxsZ",
  "key21": "yMpzSohTAFY2zAM3NkbBALCYLcFF4sVA1LEhtaSmpgUNmhKHCZyjEiucjkugipRPxK9ULpRujqdeLnLnW9u582E",
  "key22": "2H8h1WpVi1PZAi4CGk3LrXekDzu7sHtK2YZ7Tb4sBNzvZ1Bd3F8LkcZkTZqoqKHgq3aRhK1BaKA6yLy1jY96ht1Z",
  "key23": "5FcSMLvMnwQmXKmx33BmEyKeD9pipxxdqo5hWzzSskEsRgnD8Tv5B837Yx9Rfqg3EAVPNPhc7BCnSS8HJHVFfeZy",
  "key24": "5XqZ4Z8bBGDSAH7DCLzKKVBPPcdvV9x56MvPJrJwe6Fq8sMwFL5dZUyUGKK5851H64gqYBhbqDMejBSA6j2eA3XT",
  "key25": "2Lq7mGR4oTXhjUFzumDvbnt5seJxD5kECJkHYXGQRCVBah7XDSbjrGvcz4Hbnn2wr33Dqy3PbGXZP7kV6WLbN5uJ",
  "key26": "52BDVs6xJcyKS5BW35PxZy2eRT423w498BuHPZZb5TcUddQwiX5yx7jc94WN27Gq3qCSAQz8wZxACMUoHLLDWCfi",
  "key27": "5A54zHCdTHFHeb9iq8wzERSXTR6bZSButXQftRDPK2H1KGUnHHMorGGG5hQ8jg6hKQYnVFQNsTgE8U2wj9Uw7Xmq",
  "key28": "2uEEJVongQJUoNJTBLKULAPXNpWYXK9Btxz6ger2sXrYdTo6EMGLMRAuVvVN37VkXHr5T3TnpGaN7PnnkEpekxfz",
  "key29": "4jgN2LiwvZqfdAvJN7kzFiSbuY7XGh2EQyyiN9iKHUpVDS5yFor8oeVxNHd7MApifVBTjeiNxhjGqqhEvo5yeDts",
  "key30": "3b4KfMP2bHBjiweXCogZxqzyxasjiwV6uZ3yTt4CWnAz5DaWd2QMAxArX61sfnW2AucMcRSuZwdRovYur46TrdKw",
  "key31": "2pyKdcA9AMmxPKBbMRgEf4VewKzCfCCe7JGPUMzbCMn9XbJ4BKhbZ7sR3NN3sRV9n4VTHkZ2JGBA1QgGeyg7MBjv",
  "key32": "53phavCHZBMXii9igX1pS3Q2sTen8W6M6reLAvxz6NKU8tZaokh5Rc3HLMmtPA6SKUPgpwrg2joxwHz6PqSeoBHC",
  "key33": "27mH8BW5RRQt561YfDFVDp3oHCjeW6a7MdJDNcr6QvzQ7zF6zwuQPaFxgXBKNtUjJQj9sJ4rZJCyg4jNqoET8Ckn",
  "key34": "VcNrtUs7pHQRQapPic1tiagnPKpagSTtgabtKrJMvw1Z7CDb7arGcseNEvx5w71cBzS5dicH3y2pH81JqDKqTiE",
  "key35": "3EKqCsJ8tMUdncCjjP9P2maKUcZq6j1iEJPxPpta32di1vmg8yr1cX5gwbFJ1NwQeb6MNg9qo7bmuxx3BwqpwDSF",
  "key36": "5Y3PhYGocZCrX5pD7V9NJT8tLCrcWzBWNkCRAuCYzz7eT5AcwPGxFuPyZqM3QgdfqYGvBH5w8drgsKSZCdhbnrnG",
  "key37": "7gMbFwM3ceMxoHgYE7b3bTxTXjhp7UCCBbiXLr6QMyy1GCZecpTYa7QCkeRrp1TyYR4R8tSLDbnGDbhnaMSy5rW",
  "key38": "38MRC39S6Gcjs6o4pjNjV7dywmhgCQQuXVfYrpfjAC14y7oWPKsDEijqEVBP9Rgw8Krr8Et5wByWJG4UBrTvcQVD",
  "key39": "3wHm1nDZyu5wgf7JJ1QUwp7FQsYx4VYTsADhHCUQgZntUDfWqcsUMf5xKbzD5C9pYyJK84mgWu8CNHtj9A4CUJBp",
  "key40": "4UwAcoQp4pBPdgGoSrrLe1yQ5U6MaRt727dWJ5Aw1PnLFsVj4mFpHDthjv3cPP766s8UHHQNvFeYzteTxcgUjHd",
  "key41": "3vdVAVZee3cgqcxvsJK2Jkt8CoPxwvUv7QAWai5QJTXNPx2GG5hY13TMiFSBzZEowH4ETKD9ZxtvnBBTaeCwFcjq",
  "key42": "2hTBReZaQfXeGAyfhQ5h3ZCbhsVLDRXw9fxWAy4JiAas5hnYUCoSXEHd1vxqDgurViTiuNB5LUbvzwbkXKSxTpD7",
  "key43": "VacqhWoHGbkhna3qJuYNFaAd6s1hWFZ7zYezS8LeBvac1r11tWCEp9g3HxL7MFmw9aQpdZ3mghVvbjVFxmf35bX"
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
