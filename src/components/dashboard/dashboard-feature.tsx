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
    "4iRtEL3jw9CphDmEQ1jQK77dLy6uEAENhvQVf2Vrj3g49UGgmoCiu42hDTn3J9qmCg65Rj5e3MTLejGEM8RVs5gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjtEq4J9LKyGYvwRcEGG9oxyKHciqzsiNta8rdYXQb529jLfTgdCDt6LQcAML5SR4G2BcEEWzSxJiMxzR8Az1qh",
  "key1": "46j3jxrRw67Fnjfwc1KotKXQe5KG3MDZfYRN1CuSvbigEvKTFQuz8GktRJW9CpVko6mLgWCeNZMGV6q3MqgpoR4X",
  "key2": "3jnvc7y4r6nvToN9pnXpPducb5wYYL7ASFQLHUM3rQteQZJ4Zzmkkmh8PrJCZd5Qm2cRusV76Y8U6iyZddUdnZ9Q",
  "key3": "3yW8hXu1ETNo9VnKmuwpieozTnZhyBtboWNPkdjy8s3MFAqhESNF8jRib7TEA8L5vk2hQpdFZzoKDixARjuKnoMR",
  "key4": "3H2cLwTmHrx4KbTGkAr7PMY84khFogwhzBE2j4p8bMNNoBpZtwuvqEJaE3gUeQux9uau1Wycmep6ZmGrvmWvt8TH",
  "key5": "CnuZNaEu6ypatafVjbp9A4wBa7JyKtr86NN4To82yU9CYepx7HLmecjJscr1oggLeT7iafsFSfF65pXKATvpVhi",
  "key6": "4FjMntZ8ceNyYSwtTHbk1BZmotd9FqAwxcMBuFe4SKGDE1PBv4cFFMgK6hw8u6WaUVJjyK6y3V48AhAKC7JrqNsi",
  "key7": "5mvwZBuFkKNYcd7wpHMDXgNKKF95p5Q6jyH1K4ECn5qgaDho2L6mW2udjwPPLvtHq4ydXqHc6tb7s9LXutAGVUqj",
  "key8": "p1hTPP6GvYtfuQQRijj8zME4otxYk8buEXe9ECbSkKbYLxrQTRkrZDSTL5AH6FRW4HB5uvykao51cha3fVgEtpV",
  "key9": "5mkZzu4MZTZeY9vNQEJ817ahSZCaiUPaGGNHXqxyJ237p5PyHjsuaQEaiyP3k95xBzexHX23zCqmv8q9LuTQEj98",
  "key10": "5T25X1nZKdyyoVhUbu1xxVsU3Q3GERhU61E1NThtc2vkHPjQpGih2pQWoLxH9y31WQVMbXMx8G4nLn2Zm8bhVsVU",
  "key11": "2wJZpkcG8Mw4M35EWXDgAwbNd4jaWZdz37WdriPxiz5S6kvkw8tq7qGrQSq8YUF4TBjzGvXmNLmA7SwM7xjPiwKh",
  "key12": "5K4KGyMkUpgghyfQbCk98uooi6sLv3cqiyUV5MggB5n9yFfYkmGigL3zYgsPuEQuah8ohip74HbmgmmurpXvH5S6",
  "key13": "2abAuwt7y1W4mnwKRWSnU5nVGCTTxXAx96DF1ZGWuM1zQDWDyhP42x2tzdzajFrDHXogf8F1AW3QGNDC6gz1JjBL",
  "key14": "37FDvcmNmQD6C5rpo6Bf4J6NFW52SyKEnyzjMzjpgR13jh2ufKK6gaTpVyvQr8hctSgUsP7WVturg3fJKod9q3g1",
  "key15": "RkCn3DBBWXQGPhY9QqRh9cBy26QK1EnNWt97Xc8nmaGbobhkF5e4ueCqjqCKjzkKxAt392EXoZjkT1XwFHbfwmE",
  "key16": "43yFDVFTHSxYKXJjTxWBLqX4hPVgDZr19SExavg6QyR2qC8p9xToUw9WmRmZd2STcHMSwZi63LJqEzid55Timgai",
  "key17": "KEFDuzk3pRDfoxkrVUFzJGtCftBGuVcZA5UjD3jjqBpFEc7CiGBoCWVZhcZCyHjCSE2WPbiHcCCqbjKs3R7Gohi",
  "key18": "2QRw8wYkfJVh73YjjNLPVxfcUDT2AwvDK8fb9HFKHgPjH7kqWrozPLMUUo1ogxQyTTZj4CXeDmUXcJKzpYbtWDnw",
  "key19": "4Rte2BwxNmZxjDXo8CkMcXhdvhPBLNiuGQjWLwZay668nTTN9ojfSnHWpbTy8FuJ8iTkQ1RWUvFGkDyM4RwYrAkM",
  "key20": "2X4VnrMg69swevZUu8SUdnNQMcLLjfFNN6nz1qeeDuNF62N4Ai9QHDCfyAuQ4pnxfok9gT2ug8BZeSz18oKBMKLw",
  "key21": "4ctW3CXWf5ZtpHizpL8WhgtiD8b89fcGhXzmJJ7pQbyVc6oq4xvuZAa9mdtLo4uWpsGJRsysUvky1kmFT5eNRUnU",
  "key22": "45LT9sAbj5FgC7pqs2c4jUH6rLGyQyuJB9DS9sLmUBW8BQF5PV5pWdGjtGWH1dnLtxRJFtMtp8mbsmrkJKcdcX3Y",
  "key23": "ECafX2h28YNjosWrtQ3gMAf4QZQe5vuhgn7GFtaKijmtKqyn2kjTGCrCrqDsucHBybc5xSroBAGqPtv2rS32CRP",
  "key24": "5Z9TPKpZsPenHxK15NHqTTcymp4Dv28e95Co3RgecAvtJSBhytHbUkYWErVDXB69RTfFcCFjAJ4GByZSEob777GE",
  "key25": "5kddkdvKcFATKw33mSaigeriXMEWPM8iz4hytVA8HLi4zp6XvTGx3oTsqeo7p86nyeC5ri8rHg1VCwQvqCevVKMr",
  "key26": "4XchFkzPECKTeUWXh75GKCmcAe9XLcwKYqVp7sawcrEjfq3jtzyHEGG167sAikR9ViEF4hB68UgeJHWxQYGu21EB",
  "key27": "51TdbEQAnYg4MpbwiSi8bHRmnULqqvHfRw4DQDAXPjmcZDyitJoPZaytaks7E4iuPgnhuaj5ZgfrE83G2M3zptfg",
  "key28": "3dz9zo8hxPQG2Z5bu6d6RM8mb9n964xwxoaDM8tsyZTVqvKvwoWhJA6mWaxnU8cciWSPVtB31UFAnTf9EL9CMErA",
  "key29": "2gDkDRAD7EuRpmkiCK7UqbWcUvykq7STpxrkPVgnK186iSQe4sC5B5jjgoKyrA1aDcarbTMxDEckoUxBJTpZUH5W",
  "key30": "2LRYeURYi6TXXmvpFULo3RjA2xzyH4WnjdYLSxYMyZdtRQboyvfc5MxZAvSZkwD5ijVnfRq9Hz7uxPFv7vh9wYWF",
  "key31": "49dU7ScJZHtjFKEk4gZxaZa8uMuDanFNqkZLGBETYhvUEiDjQZF7Zqvn3R14MM3SpbEb2Q5FFoa81fEDAgbd9DBC",
  "key32": "5kYkox6qbsaALry4ArFAmnCgVGdpMGM6joFaiCZGC49KPHUsVCZzmL6qiNvpWZi491uJv49ahYGcFQk9S7VmCGW5",
  "key33": "g9kpoCQnQ9GcnNq4hHs4Ui6srQa5FKmYWgmdkZzrowzjBZ4c4u2sS1ia1tmtr41ZFphEz7L1gBpP8cvq82BLSZo",
  "key34": "2ojk3aNkWBzLphNFf3N8n4EhwYaZnaR6FyKeEcfbXjUX1kMb2ptAtAnrSQp16fhJ1EtDWUsyZwNr35N4vQTbiHHV",
  "key35": "3qhfGfwXqiVEcXSvDTvUdkhfggqgsWiVYzbMnRHxdT3uenCjBzSac4dYcR1f9t6mJhbow95H9pVxpzq8bLTR4dnW",
  "key36": "5bsz2sYuY9Em3Gffq6bxgYYGyrfQ9kXTpXsNQVmaAQH4grSryQwLqsn2ARjn2cfqcHqHvLaRNySZzTkkTw6gzbJw",
  "key37": "58zMJjyCFJoxD2FPjgUgh4yCasVit8AXTVpafCFPHLJ38Wq1JMyhGDScew1ZvrbHM4R3WiWDW6ssKY628UBDgTeK",
  "key38": "CtLNPzSSTxEsRdXYhfycNZQbzvyuXAFg5yp4qnzrR9fW5MMtXV8xXg8rWBNq4BwjmfidquVykTnwZPh91o63anH",
  "key39": "fCMiH3QHVSiJSToUBkgR6SyZBi7oLdcpvRH4mGyYzTq4zwJsCLAskunoXquLzW15kWR1MVC9yG3uncGmqiVk5gg",
  "key40": "iweMapkoKiKJHor7rL9vUMCP3tyjmvoa73YqkHqLD7pMnWrkb1BvB9BVSiaqFPsupZW4kKQEdstJgkLrzMTw3Xh",
  "key41": "24tYJeJPtsDRQT558JH6n5XHiBfPuWiYM4Ghj83XFNy8n9x21TxaGaNBs2hTkgb7DYhNpa9oJHWFFaWF5BSorBBg"
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
