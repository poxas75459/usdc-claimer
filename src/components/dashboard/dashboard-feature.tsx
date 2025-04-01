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
    "3391MB5mPwXXBwJvCb9UtDvEcYemH4veuPG9yuzM6iVY7mpP7U2B3Cikf2BSa9ejPYDdV5W6j9jAGFp74hFe8ZP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VhToNpyicRvZutXV7fPCQQfuLVXTczpwLLF82LQ1zDj3BAKXnmM2toZDgcTz9auuNMWXADZ3XtEUT6Lcyk6tCjA",
  "key1": "4CQnXxeTv8MmY5hJfkC8A5rSDYy4AXwtaKr3STT99rtFwoutffEjhQsD4CSZ4wNT8APwuthMR9qRU4xmb1MBJLQH",
  "key2": "5xQtWMLyGQhfpU4XxwMs983udXQ8F89y33bYq3CN9XJmCDfrpzzRUW6HuUiQCCBeDcnqZJ96bJSqJGcm728wtV6M",
  "key3": "6jGUq1TAuVtQXfxN1PHQYXr2Z9f7TyLDnHrfc4yNdLhzrPW9ZWEiXBNGMUn3PpTC7uUzcMmK7AJRRrUhvPT9Bai",
  "key4": "4Jv3V6tAv6dyduc6QX2L8k5Bus9E9VUd6gATHa5BxTYus6xZ76ommJBefZYwxw7XaWc7MgScc9i4xEAxwNWmHQSH",
  "key5": "4wDh6bYETe9g9ZW8AqwPwJG7qrApKjWyoaHCe4qd9Xe9sfh92mPeBrT9DfiCbieVykbX3scsNMbvJjz3jN55DqUC",
  "key6": "347C6KmXR5vLujGJAr3K9pu2ygTnSre87yx4bdHTfsBgDM6YHxc2ujE8mVCc3xHZM73uQZiaVUjPHqhwSuhs72Uu",
  "key7": "2Diw6UQ5fvhkbY5gvs5eQrkN4dh6MWYcpQ1KUPbyxczvzWTr8X4huJoPVJR4Kq6eee9R2C498F5CR6WGyJ7owg7j",
  "key8": "FpDz5n1vFu95UFW9GvpVecvJnjFa9nriphxvZ9NvtDS24d9rnohcLpAbLeoqcYhg1D1NKv8p5P5oSm2zUgamjsZ",
  "key9": "2j2nY5Kg87Q4qNJBF9ERTUdN9U8jRcLdTDK8T7qvZouyReQ34RfVWAn7dQBZyPvwfGDJ3d4YzFRsQHPMtWXdnEXk",
  "key10": "wFuG7wqbYfqMRGTdYve155JQ3XGJHjH7AxTHUY7VLHLAVaNaGn2eY8Wuoj5v2WZq2LbqouzuK8yrDzrsY6JL1Jp",
  "key11": "54AM5tkBKZbJNNwfcxyh4ANADGcJzFWXYwADibhhuCgFXSpcT4WPi6nccWyefz55PcQkibwL6HBTCiJzVbDidhpb",
  "key12": "LYJWSZPn4u2iMN2xUaFCDMaSNrjr5ZgVjbpExR59kwkRAn8FfBaBMTtSmYTNf7Vn257FBuKGU1MRo2gExjaARoG",
  "key13": "2RVUWAUMMP568r4nQqnZJMEcmNkxXNe5tNpEkMP8mezDLoUoLGtR1H8sdH4ibTCyWK9gaDXGUQ5Ezys5MFc8D3S7",
  "key14": "4HMDDR19m6cXR3ce92UizNRdedLt4ejFJxMUrZgLc1w3XQHaMS1AMGReswR7w2coo18W3KvKQFPMxv74pawBksT1",
  "key15": "66nAKH23sw7k7aFJAArrT4FHDpXmrANe5MGYnygwxqMojqdVAvbW9nv2yMM9Ry6B2MWuStD5PjRbpLZFF8SzuHRs",
  "key16": "671qbW1hY65zjZGtzN6XFtJiWJBfj465BPrLVfx1RmVc5LaxifkdBy8B95Bb5uXzPm2Cwo9G8VbB4s9rxZj4VNXy",
  "key17": "3K33CB7sMCfbug56C9Ju7zAWuGXnRmrXJQ4SHa3tCD44uCiocAeARQ9s6RdyHZNVKoN9bNztdhTHKXokm1tzEX2n",
  "key18": "5SEiZLccYk7GeSTnJcbn9K76rP6C2BxjKEN7zb5ZTiodGNbYMngRSHGjZ7uy7Yq1iq52UYTHNVyNTDyiSfjBXCzt",
  "key19": "31PSpR18cbqVha4PWbGAZD3YY6BGUvpPeNDFsxTMCUXDJZcDb1gwoAriGV3Rtc64pWHYvyRMW3v1Dqk2MBwToqyn",
  "key20": "3KKEC4ESYV3HvvZ8VQWE6cST6sR7nn1hKJgDntGVfEoUR8U9m8vFfSz79qjTgtLQwUmj9sURccNMWcGYq56FSCDA",
  "key21": "37LfZtFUBKtU8Vg81vmndjCvgpWq8zVf8JTFe3P4zz1sGRL8LCSFQzQhnXT2RnyyLwd3uPagpJjExdjwSjHp1r3P",
  "key22": "MjRXfXgkqTe6LKHqM23N3oMkreE4yxHkQG2ZMfqC1v7KAiVrTuaaAeayzeJzDPiEP3hr2zQDhyRGRGcotLTB93P",
  "key23": "2GVG87wuGwxkt6R7R5z9eb5L2untZ8JjS5XJntLSvDEVkQ7DRHyob9WjTV8q4B95Nk1ceC58sPpUhCXLAhGjKZei",
  "key24": "63f5H3mERN65vSezxe9xsUa75kBzQ9s9H6Bf4CortzGbrm5YfucfKDh7vKvxifTRCG54HtBswWUwF5uezm4AneqX",
  "key25": "BxSR1zBbhPNWLGyVJVbgMswV9pZeWpMfjmBk42ypnhvGGxCeSLWBmdfHSfNowbN8m9cm7EM9bt36vUpFgAxBGJV",
  "key26": "3icg1cYN8vo4mr8aQDcr2aWXvYoJf9hd8upMkaRDcWNFTmcKDMxEXxGFMQ8CBTRCPWDnYQpwGAEc5B24EmtfdRgu",
  "key27": "4TJh8j2i4TLARfQwD4w5SPp2ngaNzJTnmLJgqwFR483Jfcis2qDzgc6nmGSqvGPdkntLSsEYbt7RAdLLvhdaUr8T",
  "key28": "36qpwDLuCGREFNXf7Uj3PD7ZwQaHwfXVAADXoJMFq67zXWZhPXsfchJMmsEqhv2kLQRuQNDivWpqNSFXA8hEnxcD",
  "key29": "c2tHmEjiHZGkxhJQFVWH3KKbGsHCyzKtoew6cRcRSnYE7iRD76h6noe1UMFivqrGsy534GuAXj5pu9W4jmyHPgb",
  "key30": "3ZiN9BMpShs5Yqa8Fcavi2xvL8xA3nctU6KJjCeVmgTFDQS1LwWSgRqNHcHGJT5dS2VCJKEMPgYeeAhNhdYmYh6z",
  "key31": "TfWyKnWWkrUkfr6AxENTaY1nXW9UaDk6Hb9CRrygTHQLBHDvQ4GjkB3dF7dQGVseMYfhzwXy8jLCbm81VKU8Ymf",
  "key32": "63fMs5EHcrB7yt6zTiwupqGg7oPknR5VzCe6bXa8AxjwYt6pjWJKQHsPqZRNNAtYqnjgnSkyNNpNqbmGnkCeXwSW",
  "key33": "4fSKDJ5E4DQGuS7NW9bz4sRBvuqZLqzmjPfg2foToeR3okZdJAN7AKKBzv6fb8bkeZwXybuJ8Zrogm9yk39GW89j",
  "key34": "2AGMsvYQQHVE1PUJ1oNhUhRAy5PEf13WR7jgzvYZegyqjj1zRXQuMqaokBAmeihM5tEKDaiJwdogsPx1PSSb3bvP",
  "key35": "2X96pNFs7MfoFDv43xt4TqE5oUA5BWHc6HxQJ26BpEwzqML81qcFdczo37Ypdc9TxvXm6bgioknqc1oKSzwsuCzY",
  "key36": "kzccEWd4BkkjrcpKTYpriB4CpX5yWFZsNPdks4EmKFCW9153AFdGtGUCAR5x9TQ2WndU53hwxYvGfGTRaphwLap",
  "key37": "2TSw3vPWWDmzBrh83MBdaTffCPb2GVzscXS9zRyuu7XP77yQkW2nnguxhZCZMj3hHfhjLScnBj5A4UynyFyuTKbu",
  "key38": "2497TsSebNcmmT5uqu2jtBvKMsq4ttgSEMfu9Us8cB35Q3wqfnqviaAfpX4ABdcbwCSSL8yyMkF66Gnegn98SbbB",
  "key39": "8LBe3wDopvNP6qMEc8XWTFhDLmCrgPA7iqdMdPt217G4hAMpoCyqHtCs8sQ3NQyuQ8BJ6bgTHoDkzvPeqV4r8Qn"
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
