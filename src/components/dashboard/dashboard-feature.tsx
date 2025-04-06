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
    "ofbABinxY4X8F6n4dnSQegkjgk1nNkRFmwoRUKxULvWvD6HC9pXAoJbKz2TP2Au5E1Kyd2L46ugayLZHpvQVAtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUyD5RXDwLPVyDSLfam1gRBF88FByw8JSYn7obTpxUhfWL8yvCpUWiXPYwoYbx9abJ3diUK8PTizKS8yxuhUUx7",
  "key1": "5VVqWQj3sz2fEXEfB2R6kyLjYqUDu3NeZ5JNiWe8SQDuugyPd4yS6hGm4jbajPGKLRJhshopCmxWWQ86kL99necs",
  "key2": "2d4dJyj7yU69pQANTK7XAX9i7PnN5qEQLycDxAzxC88EQnMssnoLmvP96gJqj65pd5FjZa7EYdQHcSQJnf3CvC2T",
  "key3": "5XFvDbR7RTztdo3rABTwguAfSz1d3HeynLVwu33s7mS2cqZStaKtZM31JpkasjMee1YMs7YFsY1wEPui1Teim1qu",
  "key4": "5SdZ4jgR8JSwz426stKqv2pxA1dhhrNXVdBMFwL8d7TGq6LdGPz65W5j9PNt9Hb68p4gM6zKh5YHsoE8N7m7NHYE",
  "key5": "5Jo5oiDwDaeDzhv8zEnfCHqwWzPSPKJPsow6YRwfZcSZXs4yPQjjJD74w8Ro3FgEiuKHwHjS8nSdm7z9dmrmkiF3",
  "key6": "3eovjMmHNXgyfEtxQn2NtbsNw74qEsav1DndEZkWVJbPLcAH9wMuM7ujQLZ8n7tK5HLSZG1Q7v8aja5WXyix1qEV",
  "key7": "vuRxDhinjvpEj3ppdb5wXuv4voAyhEZBY5r8ErpCfnCDe9fyfgpufDMgrjAgmMriMWVJnvD11x1hjDrwXsqJpwg",
  "key8": "EKXfAWh6VKSCDJaaYLwhgAqGtwo4CuPyCwjJKGyQZ5qt9hcWkzPRrAuJ2MdraTyBgmUDs42gzxNn2qS2u8qWicm",
  "key9": "5d496abNhAWAvW8DedkeCVTCo2TydBuA6U8FfTk7jS5yTnqeb1TjtCmrWmHvM1ra27s1D2MwN85fyugP5mF2q4WR",
  "key10": "5Wts7RB2XGjvyqCu2CBWp7opcpzYtUvG4rPqKUWQYewqbDT5S3smTk537hrvhRNnoLQ5W9MpsUSmKw31hV3cbSAN",
  "key11": "4iSvBDTzpmATybmSiCEJTd7M8AvLsjiofqa3KLJvZSW8sh8egXkBmUPCGGNvmxwtVspaUYKweGZ9KHYG2wCz4LnN",
  "key12": "53bfnbqWwAXrXMQHCBzRLFWB79t1nWckSAprrmHVHqxi5ApwrSpkzRY1aXHzoCb4oaZekvHQAVFrhtoH1H2Ejxdd",
  "key13": "5AYfoGgizxtF9jLKyxucSGZyWzKiMeVjHxuHBJR7vhKz6x3t7qvoJgKBGde1UuhxWsquSuBNFoeuKmdDnw625tEj",
  "key14": "2yRA73wuCgSKPUR2L561Hq6omwBCCUCJ3HPsgzKbA4jxfVv6puPcQvrt8ourKUvzCQcFbnN1KArdQdfveAdcKrdC",
  "key15": "4hK5SejNhtVLuzQhk9YtU4pC4n9x8tPT7kQU4AdDu6bTkfeLXceBxBJTuFGnamL9ko4LJ3vRZofAjxb4jVSVL51t",
  "key16": "R7XuD18ymLHRkhkrDFMfyj2P9dULiBgZgusu931LH2NDc2mBn8C6qNvLbZyLV3iaM5yPqAg6HVrLQo9ULZA2659",
  "key17": "3my1gLyudmfxxhftKUzp44LwdcP5UU7fgBALR3AvCDww2jbDBgCQ67RnVcvM8sgteUUC9nsNY5JMdzW8Qwc2yUE8",
  "key18": "RxQsPHVxLGN5fY8RZa5tmz5PvgLLG1adS75fKP6AV2qUWcMKKCE8XmWZuqKXkXiYf6ugHKAtHpAZ19YDNqvsVfP",
  "key19": "zvzWN7NMXSTEdHftLaEZZVY1dtdaci1icKpQLurdCfp26dYYCxzqjFgeFiCYzSjw6G9SzAfZ9g2HqvvYts3r7Mg",
  "key20": "3Qxe51ksYUs9vcBqoLBqFPDiJ47RLyk48fozpiRsqu5tdLB8C5fWYz14ro9SW7qaaMVPCYqhqePtn2Zy8aGMmu8Q",
  "key21": "2kSnuPAGN9ak9U9gwcqdaRySbyzhwTDaiErnhpB7riMthMdHLRTJxodgmHDBKTB2zVB2s5DmhRWoqH92VVAUvNoK",
  "key22": "5HzYia46pKUjRjRLxtZrLY8TXdxL6XWhtG64CBxMWYkdGwuud1zrKiWiHf8C5QuyjFK9mZa3w8rHrgskung172YD",
  "key23": "4m9kt4emrY828YkUzg6GhrovR4nouAxMT12ErLhg64qk3E8pyB9rFD7uiFwVVCpdNWaoDMwN8snsjKmPKajURRqz",
  "key24": "2UgHoZfweGPaodAqEVf7F29FWLGRFkLJZmpfxgMrzfGGykYUnWdccwUAT9qvxgkn3FJSEYf2bzWWs3MQxZYa7B6E",
  "key25": "2URJhAqwBiyBZeb2Dq4ZT1TDikj21smvD7yhhDv6hiP4FRwjKtxFipf9kbQV183URq2Gpdnv8eBhMbUCQuMDsMPT",
  "key26": "5y5T6HchuqUrxX7j4csyCfM1dCjkVrhT4a8dMzskUdByU6Lqg2vSamjER2fLCkbiVuUBpAmzYEstNFSJfT7sak31",
  "key27": "4fYH2swvQg4An8AUoN4tSqoNGFFYVp8fzd4Capwkxd4ZdusuKQUzNmRN7P4aypDFGS8dE15jNgCnuVXKwE5gD3YL"
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
