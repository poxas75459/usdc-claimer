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
    "4AdqPkTi7L7w3QTaDm6YCecuS44CJB5MqUvisiwmBxwNiXHEmGdBRUeRZza2YjxDBfbmsfy45gGibKJyrBVFr25U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TgwNwZs8gUEtv5wsJdynaR2CvvU1PnQYbBZMiRkS9MBcmanz31RHFmWY1t1mahiYMqCRZwTr8fKFHUfNHXZa7a",
  "key1": "edLqHWpy9VMBePzP4TBNDoz39Q4BjSUTgKU5RT3uHEuGjF8YFqgrLEeo3c1Nx3tfpTzZkdVVuvzBRLABu7suXoQ",
  "key2": "2uyJ37XQB281ikzyQgf9n7DL2fzFTwYS1rP4Eg4vdgBNcbNn8Xp7kzkNXCUodQ89Aw5DQKSfvGuphKH3NNCRXv7",
  "key3": "2m2CnGcVwTPLMbC5DKDYqqZme7uBBvtfrBvuAchnacWDbqS59pgPcPRgjCjzzigKHbuFxp64uNzZdYeWYfvLiAEi",
  "key4": "4zhMa8kj44HUbBhcry9aBZHPn1fPggvLJiRfqP43c6PWiwmCvDr5LhA61QBLpfNm3zP3nX5FEQUPT8L884TpBE9J",
  "key5": "2AdWBawsZD1X3vvKhALTB5jRAYFGbr7ns1FCaJBUC5XxihegbMFT1aNFLAZWMWEwvH2bLEgx2nVkgrNiH9QTpbKz",
  "key6": "67kJ3thHJH544niT9wEEYnQbPJmxXFY1cfcWmZCom5fQ9RuYVdPdsWbxsZ8mGC5zXthSrsHA5jDeGZRNW4JzCKe7",
  "key7": "5hRTjoKziK3aFvkkyzDRCGhgtb4RgUHbKxDrnq4cuS2yFaNpzkDCuLajaJd9kyQMKupggy2hk7uC4wuN5g6VV6Wh",
  "key8": "5dTCaE4UTWH9Db36tN8kdVFBpCBeaXLC3RnuDW6a7dMPd9DGzGMD2CRuURdj2L7PWfsC6rXCMW6m4H9rK2RrVK1t",
  "key9": "3zPrufaHZRhBQMW21K8JYMqZ3sGa7Tga2gD6u657whmccJL9rrFyvQVk81uwEp5UHcCnuFmVpYt2fCVePeU2eGqE",
  "key10": "2c7kzdSJnyKKBQAGEK1zyw16uHVwHGwrC1wCLqoghPAYT3X7XMJBRLUiPupNSFLCmVYn14xzF7749DQeu4MBwN2B",
  "key11": "33qPh3EPEdBwSr3NiB76Y6MQyuUDC6aUDKfQXCmn3uufbteH9hhVByJ7p61LwHu28EYF77iPd2YSAHvjzHG6LwRH",
  "key12": "5yVAGuNdj7Kc6o2wJkNKPfF5Yr1nsuJ57RnverMSNq8hMzapWMaxhye58U4Cceigk1jCHtQF7KMgQaNGEjVq1xHw",
  "key13": "3CN5upWm9CKwbuAtJ3RkKk5jDuD11jdF84w2gzREbpUdtf1oV6c3FzeqNDBGce4f53PgSSh9UjP6VQZozuWucRtE",
  "key14": "5BXSWDqT6q3WC6FZkEbX6xXZs8h1AridTMWMLnsSpsShBxKnU3B6sTucDZuy3rBoCfvn13quGEdaBxec47P1Av4F",
  "key15": "646S3gnpvjDcnBRiyEzjeJMHtysuYpK6Z7CCjNvBdnS3uVdGx9HAhaRtAjYAN9R4L32yurJwiBKH4tAUovvxmWQd",
  "key16": "AZjheGzYb3LjGYAZfx6Dr2zhXrMKVcVJ9bXpYcezyjb5aT1apx86n7ymJKyfEuYL1EMmDrLZi1SFZG2t16AJ7dR",
  "key17": "65GC1kbWTgcKxgvvHt54S8Q1p2S3YUwQjC5kyDLRY1xK7j6QyG4V622Q63HGMyuRTP6cGSpNxpYztDfNkjFductw",
  "key18": "sRtp1pBDdkgMDQZQYgsVcuwx49vxBn9HUtWkoyKwT9X9yDHbuojzigBxqaNBfNNHsWncMSvdYh6FRnmptPeaq78",
  "key19": "2FRN1NCymvxWKfgHpXYiW4fXNbySzcarM1WWkaTCG9pfQ6Eszw42MHEwHTNz42hm4tD6s8T3pNMbZCxDqpUJfJcR",
  "key20": "4N9BnhgZHKg7bNmB5SXFeXQfi6ybi2hCa184RUuNdjMtToXtPzVcz7mtfCUbjhS5bHvXTwwgLD6uJxQ6NyaBkqtx",
  "key21": "1oCAQDzvrSHm7ZXXXgSfCMpS7RBr6eXimKeiCLZdLGz5EBykntbjuLjiZBXYwucSGgcnftWpfRAp9HXA9DNvVdo",
  "key22": "24yfkmdD1ycGAACb9EWvu2hGjd5R6PwLFkrGQ7erME6FCMJMHQwFGyzZgZgHr4psYZWNHvmx8VYTnL4BjbLjw3kK",
  "key23": "qF8xzdJWZ4SztPtCDkHHAHs7cyn9yQRiUQYhG925j63dvUpaqrQP8BMXKx113m9Z8n3CD9dxars68BifHAq38vm",
  "key24": "3QFwxwUuKZVtnQaYtrhFep1XxXKZ8kgb8VNoQU2kU5vJfAGbs4fguEVhQDA7pJQCbyksY8AH9WzpPBjZKFvmDsi",
  "key25": "3xMdcop2nbTNQmqnUom9dT5zHkeansbtzgenRkBcWnYTr8QBQye9xHC1ZXuSQhDiMtUkzaEtaZyiQPRmsa7M5bdY",
  "key26": "5xyAQtNdYkrKCtERgVxcnvMghg9oJwmDzEf5wj581uB5VFURWKhPx9MCPrwLbDgKw2ozEn9mveMxPmf531hijLnr",
  "key27": "Th2p3wrCrgx9yGa8EiHDx4bKMoAsBhkz1nnMWeYxaazgmALPxWPs7crv8kUUukLSGZJd3v29aUnWzoR48BZozPY",
  "key28": "brGBoU5eX33Y2RwD1H5bLuKiVM79gxnAyqSk6VgRkzanqkuy1omaFzJhCBgP9ndnTCi1Eb4g1XULdMPwgcxCt9X"
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
