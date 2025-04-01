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
    "2iJiQBe5XSxW9LTucnEurq1E3R7ugrZ45tNjzfsnTfbT3mi3oj1WoSj6Pv69AmJxNTWuTiwaJpfqBHF4GWyL6cLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUAc6LzmmDFcddGNmkvbQNkN741rwwYQ8MNbrqKBbEfmtVvyu9wAnFpLbcHiM88rmR1e9E7JJF7ADpgwNdnJoH7",
  "key1": "5zEBY7L8XRLYBdtVzxWv4mkzoeyS83qGWwkEbqhPYPek7A1Ep1HAUQKWLBhHSNjCmWrAysNnwPB83J27sEK7Bd1p",
  "key2": "3F2LRtUR3FBtLSfXtgw8D2HqQ5wCX9mXuCtvk3smLPUEVhT8tDMTDeN1f2fKj2J8exfVBuE7XHqzcyrjJGiu6Mf2",
  "key3": "2BEXCmDRqWm2XhLCGHanTzfT6UHPfWgTdXJevTZ9RuHKWzrQZ3T3SoJa7iNAiXwQytLn2zUZms9BMkJPop9CNrz4",
  "key4": "56eXhUv21g4P1umxXcKUF93GbA9wTjgfCMqAAhHbBGNjkTgQ6mVHXhYqV4ACzRkahsbAJYfJtDroi4pLWbC31tjJ",
  "key5": "afULNcvRDMadHBNbTUKEhchticVuKMZjBpHii1SFBYdXoAtzEuHxsWcZTJF7whJoxHbXrSXGFzHzXjWbr1t3e48",
  "key6": "3DwUo1BwinY1vsuM9DvaAhCPpzQGSV2CZ7VFeUCaNum6qTF17sicrbJygudtWqeyi5gigrarE2pCEE7KJhMYXbKb",
  "key7": "2sWr66jURXNvCcsTtWhusZebkdtikc6z5Xj7WuggXmHqBPyUVG8QWirUY1p4S74EHdP68UrhdLiExTjEETHWSZKW",
  "key8": "2y78Qv6AwY91XeRjTDEQV5UBe8m5aJDad4zefMDYxN1ANePZsDuLk2UmDoaZq43Mif2bxygj6NiaUNT1SmnoFh9n",
  "key9": "2GU7WXGVAHMpsWnGXNXpSWf83hAnDimyg7C8VesA4PwhBWXaEV5PBFPonhQzVtKy6s1WsR2hikXsyH1BcW9CwC9V",
  "key10": "39Sh24JFtRuqGNpcVC3pr5yDP2irQebXVNatZgWAecYmUmMMDj9fZYYS2hUm391pu7iVFHo2dYYc4pRztmapd7iX",
  "key11": "4GftYGtzkGa9yf5LZFupzk5kjfxqKXE3hUBTvwTc3T7vQxTjWsP4LwoRKZG1dEon4T41GwVfiwxihXkCkPFPCnNq",
  "key12": "3Xqqd9B9ZEBpttLqCuZn7597V6N6m5taWPBRv8ehhHRqeqYaPtt9Bnjx7bytCZFtmdpU933q4RPgMC1vVahHvgyA",
  "key13": "2fm56xh6Nahpf4bPn4QnJZRpW49nVqnJhxnnR5se3rY9r37Sjs35pmfo8LqLJWPwPMCtSajpPppWfKTowe1HP4sg",
  "key14": "4b5DVPKkXz8tLvh8CQMAuJTLEDiv4GFmcPhe3fNvceVQpE98zCHeKPQFpgSFJbLbFQS9kJJG65xcSuGnbCsU9xDo",
  "key15": "aoiQPwoq2JDGXsYrs2havZKbZM31nVKkK4fidn7sH5uYAFaskjSZS2DMfJjt1pv9RyfQUFbE2B5XLej95jUV2h4",
  "key16": "4mFuwuqYVKM5HYhhsR6fWcdom1pntnTZsoF2jiiLxRogSwiXB2R5wmKT2TYpWkubgeJ9B9wQYDsGon5rxEoAToqz",
  "key17": "SXX9uRvuUYMXDCwjg9FP2sgBYc5nkSXqnuq7r1W6F14MfysdR15qrECx6d3S5qbscBFDdogU5gVhCxk8A35UMrY",
  "key18": "5HZgsoAF9N5AfYZYmf1aFxBb2sXpPj1tNTP6wzmCeMXtepFj59Leo3p1ghi7QsxxGNEor2aHXpi1tgDitBYPEdsJ",
  "key19": "4Jdcqt4AveyiCVPSuDMgNJNGu6a5Pppoo6rRpDucpkFVKgxwuYQHpGM99RbwUUsgkPi6xyMubfnwGkgahstknfpa",
  "key20": "2UkbiN87V36VXFdHsxgJWizZDQkzurTuaUpEgGdKLSE31c5cg2JaDdBQR5oX93MVyj4EDwoBjsaXJPEmi2vH5Mm4",
  "key21": "3uChehx7qZ5aRHCjxDfdTBdYbrPrhHbEqPT2q8na44mHwnnSWWSX6PHLAXGz28psMLg4mdbSLzsT9ikm7qQQ1mGV",
  "key22": "XUsQ6EbUJmgeUv3kw1miFbn3GaFPWXZk5m1QcAs6dqH56Y14HzPSVSVB6HwhibzeH1ZxjpFqZG5G2b7KD2Gy6h6",
  "key23": "4U3KvUtexfuhorS8hdwo1REbMuVQJLobKsUiKTZ8SqsRjBVkzWEGtbKWBVXxsiBKBjBcUJZp2qEyyiWhWHBZ1ym4",
  "key24": "2NPUsWfLrMqVxbyARfMGNfJnzkDFq8EgqpF5jPhbFEwCPa1RhEoswnaAa6R6qN76rqnfLDfNcWim2EnaNuQrHkvN",
  "key25": "3NdupdpB68qkefQVSKn6uWn5ePNnsjEAsNEQWs2NtyZwEg2tC1kYRvu1fgsFU4o6KcYkxvChXXu7GNjrohAoFVt7",
  "key26": "RhBbWJzbXeqWKpPhbgPZK3RwPbWA6dbhkdEiMPNeZK98EgNMpBb6GhudbGVrUd4Faqrj8PNUhvfPWEBymUXywGJ",
  "key27": "53VJcH7VNLzmhxEWgTb1Cp7jj6UPSv9oB95xPHvQkZekFhFb7No5gpDGBq3Xu3e4zoRfyoyPoJhjyEtRuhZwhFFJ",
  "key28": "9vQahwKxeg1Ky79nEAFumED7j6JxC6y1zBxE2C9zSKc4h8cDQBtUnLhbL7VQ4mkj7HxvKe4Qb1tbMYf4arJkbLV",
  "key29": "4sMZxdbBouGpuJ6xbLq1KiRKymY9AJoGHwzA5gYuAvPTD5zvkvutHzc3de662fbrPAXzYTLnTRBQZjwDYDnhXfmh",
  "key30": "35rhokovkraRfVm8KuyzJb3ayxKqfA4ueaZXesC1nL4UzQkHYfeNfixqEVNRjiJe2YFxFYPLcEXnLzYcCRWZfVez",
  "key31": "5KHVHvsZUo1qt7QPkm8nhQB6zBLtaom94KRxbSiRi7Q3hD7qeXwEtQ9LtHU9crWvfX8MxgvVkb3X4c3ZKtzmjM4d",
  "key32": "4b9SDPHXrGqZBP7GvockoRJ4GyCHm1xHBHf5ZQ5kUu2uycNyoUzbEqdZ3AUkw85kSC36u8oB4oxwdwpbeeVEQ3cW",
  "key33": "WfDp53bPAmhYJRLot9Pkt2GqvEhZ4bNe7t49bmyUE6qwupcCNPQHe1rv3KPYPt5jKTxWvQXAGXqSdEYabMWZqrn",
  "key34": "3VB7RQ2M9LXBPVsz8GxRXer7pwjEMBWhwtgHuhHSAPF4BSvY1kBjobXLppj1Pchx5hkdqkhRcmqmUY2CvYehYRL8",
  "key35": "5es9MnT5B8qUZ5jAzK5oGnegF4skes7vDz7uSmaTjgGYUbsfFHD3dSVX6hXYt45MZ5byhLSGSQoojLv53LWTtmbv",
  "key36": "5qthRH4WPmb6cXPZPVDXTXZBoEHa1mYEGMXCjJZPYvCBjGv7AhAPNiSofCEH3mZ1pD7NU5r6YfjtwhY2C7ZZ7kcN",
  "key37": "4HZvXouTLQEffLnNw7XmwfBVS4gUUfDhbSu6PMsySL7KLzcgvC3e3neMKEy6sNVhANG7Nmg3oDzCPH33QGxLw1uJ",
  "key38": "5ZuDG45zW6qN26A5pU6fjg2jYZobcKVYtXHedXzRyPfFBiWNYKii6NJUQu67VUfMw8KroSws6kp7RDJoYB1RLZTA",
  "key39": "2BdAY2igXgS21A97oJYrEAssZ6deEpbvryibT7foRu4JiryxJVzKhDHqidgoXy1USEengfxzKdyPKqa2PCdPdbpm",
  "key40": "Bf7Yh4Hjr7bKyyU7rvY9YUPHbxVeKr6FYJBkW2qpPQL1RhJcPQos952a6M7WqSS3bKY1NzkJKoWdSCjdMt2urvN",
  "key41": "Sxm3nGjYiLLAZhp6vx1c6GqrrA3smSgQAKaFt42wPtkgAFmkYj9jug7b8JRxPpEuGYkFQpSkBxJAzg2uhw9e1XG"
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
