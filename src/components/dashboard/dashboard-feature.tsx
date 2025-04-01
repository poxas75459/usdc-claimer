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
    "31tu27PUz8fGsmZHSgpq7HqYBmU16e7sMjdmya4eDRKYn7eayn5nf6aRwFGRQK1UwM41P7nBZNdQfNpd28N12Qyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27wd7CibENha6hzi55hKWAGjEPLs7dd8ibtkG1x8vciLtjMHnHZ9tckDUKuMrWKprZ52SGxoFm62c7qrz2Py5YHR",
  "key1": "4saDEVox7pCNYdgio1RySTx5i5ocXHQTPJW2p6m8jH2g86WPjWuMwf1efzB1kwNWk2EwEVFtnzRHCKQ2AWEfWJPj",
  "key2": "5v731yotGu9FuxkWz9nJMy2dCubsPSYdtetaZfwnyGSzzMmcHjfZMEPuvL6FZgQc2R6JqKz1kJtWY7UtsnMRxHSi",
  "key3": "5hWXXMF3ZSK6w5mfJKS9CdsXQEgTbpatKQRukVorBasBW8hoeMuZoZci2eHnHX9KrEp2yep4ggmfWf1CQXHqHiy8",
  "key4": "3WqGAmvx2s9XNzoqgdvkMNYXaAsZ1cbrJUS3pW5muXbNwJmzsa4FcKUtT3UzhC4JyGukX7H4Dod4T6CHPoi9gLMf",
  "key5": "2x7VvPPuMjXiR9wenLSRQqsNovNfaint4wd2p4EGtcAGFppKWV6sK95rKWGuqDXoHiDaETr9ZK1Bz8pymcmuRLon",
  "key6": "35TwJZYMu7KmmQyvqanVajr8dHK8fVsij9o5S8QszktHKf7PNrEDhfHigfMTMJUyDfbfJdAJGouP1YBKD5me1QAg",
  "key7": "3r6JQH8EFTAFwS9y773SCvwxf9zfvwTqS783SJeGuF1RwD48oufMfM214FCBHkHXGRFqHaph2rEjcPZGQ8uPSkAr",
  "key8": "2yBwmvgPpi4pAQfgURfb2y834A5jZvd4NUSePrWXpShhM1v5JMJCwpJ31njqXeRc5NcPaZJyRExoNpfGgb9LzEzk",
  "key9": "5itWQS2c2aL12big2qEHnaX8MGx8MWnPFQSuAfie3zaQCp3TnWxT4zbHkbgsDV9Epj1Ps4K2dw55np3qcUPyRQEt",
  "key10": "AhBLgjcSHqK221bvKcNxhaeUNjLqfesii9mTryoxA7TjXy4XBUcQpyTMa8kUZfAZLvabPczzb9YfWApNBJLmA3R",
  "key11": "46JpcKBn2D4fdRovfzAkRvVE6NMFwFc3yAJUsTnRTXe42k6hGd2PLshCbKyS3Y7Bagf9P6A3nnD68afFsVcd8qgd",
  "key12": "3j7Yx2o8YMFktWdRSruQAiQUDtTFDJfP8S4nCVbcWU2L6dMuRMQVhFjBhPp3JN644biX6V1HY4sprhUS6BqfaYH5",
  "key13": "HHmk4iZxDKAVQu7ZoNdw1KK6zg9i5c7czBgrpA7XYVQDeuxbR2u2975m8gHFdMMWxKT3omssNXeoATrp2CdDmxQ",
  "key14": "2Bs1bAamomeeqoMV8FM7RBdDWAKbgGEX1bKbKr94fdehbvzBC7wWCbfNKnmZNhZj4GREQxbqWhu61i5Z6VJt9hfF",
  "key15": "4LsLWmN9CoWW8rfHMjDNsmW6Vmm3rQ8tfBQktsMJsakPrUqv9NduBB44NUSrRCKEa5LbA4Fq3JJjW8L12MRDh6sD",
  "key16": "23jHHbvWDEgGUiKwCekQZFPcRh3egNBbvPV7bPyyGcFRDzPhBQ9RCgPTZytcP8uADiMVFpvnhSS8ntRtsZNYz6rY",
  "key17": "57fFXWdJrVgnqHxSDTqgUPQqV3LwciUSK1571pm11drF2tMNZa2SfdTaBzggsFEAQadQyWbbVG3MKdis9Lw3KxPs",
  "key18": "2E3WzeiKJv452X1we4eLAWPDExC6SkQeuQNXVw42EmXmUdjvN5kd1VN6sAfayfqaDTyAPRHm1mvz3kdXYbxsSoCe",
  "key19": "42Y6H2RNUXytQ8AHFsTxmzzgU5mJHs9ccKLSycMByoQUjh7HfkvoHnATPNGVAJ89JiLEqhXjU1iwwBEbBn7zqBpP",
  "key20": "4qDoEWz9bCxDZQQX5fF7oejQyubaFB1QFjMKQ4toGFnC5xKtxMZiE3vdXU2aAQbnpGnMohHoF6dvSrq42tT2FP9P",
  "key21": "RPVhoTV9XDXXfMZJTEw4teUGpraqetoMYbdhwK8DkkBofuz74YsReWrxAdUjyUctNoYiqA6rJSnxEBVGPr57Fw1",
  "key22": "HZp1syHPRaq3jgnkXb7izh4fpvrvTvV7yzNFqJNv2gYTSQXQtT5KXC5wCqxWuxMMxTDd95tuFMZACUEztD1hHkh",
  "key23": "2ECqabDcmgEsMkUSsHdB95kXrTDcsj1tsmY1GVPo3vXiJM45M9VTFJtdX644ZU28mimmKAy4W4qk4VZSFkgTeiat",
  "key24": "29FVLuHwMH8qQCCKVTLXM4iZMBHwrENfkCtQs7rhuoWT6kSwbu9Tqr7f8jPgdktRimpn1QsYw5bU6uBfvNfKHCaQ",
  "key25": "adf3N23Zn7e21Biqv4qYKvXPmYvB6YSY7zK5MuNvQht9zCdgSeddhfPdijz7VbAScQgSm7nZuYjjZsJUJAKhT8s",
  "key26": "34twjj9LAerVXzhLLssSYLoPGbZcLT11hqChaFWCciCkG1dnWZ1Ms4rmiJq42hoaYh8Asjhvt1xZ7t47wRbpkurZ",
  "key27": "235cDTjzEYBjP5igpUTwvTRGx5teRYSDdByHfUJZhpsprqevbK6ELc6vDEdHeQVpgEpoXuvdzd89MxHRhRxb5noo",
  "key28": "2FDYHrE95rK9kgY9qmoKehku6AhHEDfB7PeAG1aWWpMiZ6iTPGSxMmkdjdvd5AD6KxMHjX5yMDUxtXLWTtatijsu",
  "key29": "48SqtrupWrnHe5Zn5hW7yWrPdt6Gidb8E7DQQ6BTMDxuvFGTPePnLQCwvEzVcY3MNC1EzMW8vXpDbVsByGZATwjm",
  "key30": "2GZwgwCh7jNU4EMde1ZvpzVKJbGV98hrHfohL6j9BFLfrprfwXZMNokeKqfpEjvwAiGm3CS7vx3knuWLphxNGZv5",
  "key31": "58vudfQEa5hcKFg7xyBiKYdY47GeuSipsLNCckM1J3pfFtfPu7ndr6stJ2EwfNfDA5KGftjGoL2tNDStZhGHM9H8",
  "key32": "Y9sAmYR8NFwWiCJ1CGasyystHhh6eRQxPRmspoFBYYngnCg9S7REroYDhqqnN6BCa6M16qHDhLBRtugBQeeZz4w",
  "key33": "2xZupCWCzpDKYDHfFwUijpNUqAhp7h15tdtb8SzGV7K35pe7zrXhNTpb73c8Q9m6ZiZTduz4udko8UPJwkgdzx6f",
  "key34": "Z4nQjYY2ppeyskYSpekxMpiSfzsHRs7mJT5i2LC2GcTy3a7jcWLRQCsQZccNvd9h859jN5Nc7hdxPEcbJ95NRk8",
  "key35": "3AG2VBSG5y9gf9tmS5Xkx2QqKQ39zVx8t4xEmLPLYUiMHQfAv9uNHfPCLiaj8Y3GMJXjegc5UMxYFWCNsSDbmiem",
  "key36": "4EFVErPs1XQi3Pzj6qmWtHsXJccJXA9WhKiggHWi3c4Sk7yn7i5ZjJ6WzNv7SY12WAjbxUM25ZTW4s2i69LBgdNz",
  "key37": "58RmY9PaPEetLGjiuKzx7BajoK5eASHkuVHpBmaKHirgc2PtfSaPpdUUHYnMz7xpejzgWwuMi7s6xXMMPiHqP46g",
  "key38": "4weFbGTX5JG4umTX7SruH2Zznzch5PpHKQ9BxV6sqGf5DHKs57tv6DGcyKtc2SpAuH3VfucAfMhKMEgsLD6HVf7v",
  "key39": "3G3Z298HRPEg57hcxdWxSxgGzNp4P6JA4xW9CQFWvWbLfDAcow7mvXU4eEm4jdH8bdXXos9Cxws5reedNPSWxXKv",
  "key40": "3zRzX3zUY3xce9DCRuat9uMXyG7v7aRpGZKBGfvGedwWX6HUA3j38HEyf9RdS8KLVpyPNvJzaQ9pak9G14rvGx7D",
  "key41": "4RBXGAiBQC5nsYtA46q3QpkCjrPfiUF8nyz1V5iU7WyQ7dxG8b48Hj3aJUhBKVGV7F5XrDe6a8Y5fxvLXcJPhh8h",
  "key42": "431w2hGhLAg6eLr2RTzNh9BUCUvFvXfmZjghtrYfyuyJQRCg9pPkwHhPVcoHehmgBKcFrZ1VvQz32xpJcSNnQS8n",
  "key43": "3vQVbBfuzJAWAF9tGT95AQSyYtfWaFgwgSQEceNHdAmBUrECjSmSBFFLAvBAhRr9EqC37b2bEBtcFmqN4QsEjieT",
  "key44": "4byzSuuAWb8KyaFHCYMya8XfbzV2eQddoMJCTDGB421e8jJsnTrL5V7GZtngfakMoFyGhkeCzc3TBSjYnZ9nfJND",
  "key45": "4V1o7uYEeBv1A6wiTiPSafAKzZxFFfgHvUWNBEM7aVvdZ636eRGoXq9E1oJE2y71PoWE9mcAHFkPPqcchVwcBXEu"
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
