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
    "3tuTb7jWAxSFjr3DQ38hcvXGfWbcnV2vW9674kV6mUy5cLdc93cuznxp6XMS5S3sK1ZEPh8cLtsqCSFz1MEMBnpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xwm3cFP9fiM53P1ynGKrehUkvb8vVReTm5sGtLWnqUte6CKHkREgbpzrQUaVzAeriE2iFYwtZwLV7g1a4kVGMyA",
  "key1": "469DASYHF4q4yHJbGvwxFvPS9GheyEbHLAhiUJ72ZzhyMwcSqBR5yRebgv8a63Nzep37zC5rUdKimGbaZvBc733t",
  "key2": "3RFvc1PDFx89iKEYvYimjUPdpqQY3NyUPvGzpFXzxVwoEHTTpeJH1UgRRSgE74dPAUrKhQn7ioQhpuyYBgotwF9U",
  "key3": "2CZCgu8uN22MVK7nYUpRxrdhHirov8Z5gbhaBiwYu6qWCo12mG6DZaEqnK4jQuoJ9Hv9eAMUzTi5UE281Q7s1bJv",
  "key4": "2SD2HyefjaRBULmZR2Fr8EAWLPBm6pGMfpsyPFxEFkznKczyucQuVhuamd8vu2r5Hb95hfRhDsUYYHvntanABBp8",
  "key5": "5Eushd3MnEbMsEqTtECQi5h8nzjUF9TWZNnkjKJco5k6AVqmzTemGT5zaj21psVA7uE9GtG1i5e7V7p1bkU85TSW",
  "key6": "tb2GD7DTQAdQrRcZry7Sqj83YMc1njxJG8P9KaYYUpVT3KWwqG5K4CYi3PRdGNx6io6rn6dhEGQRs3tSb9NbpCS",
  "key7": "3U6nHLTYZVU61YVF8kgp4jrbxhXkxGZp5D8VjmYMNReoqrRRRZBRhPtJP9k8FiLX7p8PCUF7EVkeCxWnry9G27qJ",
  "key8": "2Gt5CUA8KuDM5aBmKfJZuSbnmu1RVZrHpknNa9qVfnAdPVw7fVAa3a849VRijt5W3Szm2wUhhG9qozJtsXakFthS",
  "key9": "598g5Di11w5sinXFcAiZwXGPjz5YGeiKxTeHmzTx6S9PbYad7V84YFZm4FVy8wAKAuP7QBu5VUBz5GFuMCzmGNVC",
  "key10": "42RgfRUXRRQ2pa9YNuULsEvH7ZrqAfRRLG1nAqNBm7BUrT7xFbtgAfquouejwabxoz1tDhAwxo5BTjFr9wLHQN9D",
  "key11": "32PvG6UN36JgujQ2r3apKia5KQqJJcdb9VG29uEcr4nWb4N6yLkymixHdHURKDoGbR6D2C6Cg1UtM7MbYgAU2Jvb",
  "key12": "2ejFx6eoT2MZzfAMA7coxRAaFLXzv4zvPZ5YRZ53xBCfzUzLajxoKN22EqLdreVoMVxieCqHJjZmeevUHvqDkyq5",
  "key13": "5S1Bw3FowmYSZcZq1418H6nCJfr6EJt2UgaoAvRgMu62A9YRPKuFdFgXKKwCXVamP6VaShnZfSs7635M93Yu6PFH",
  "key14": "3QXnH6yJkifwi6j2DsYzAi73BFLpzgZi2CRaXFcWHwu5Mk2Zr2pwVipJFNLHaDdJupsB1rEsywXpFQWCH1UbsH5H",
  "key15": "5MjnPTgS6FQ73xFMCuwdqQmJPHVcYDUQn7mCQXaq6sChAQGLnYgs9JSU8JyBzahpHuVrXAmyRwDZ5KphWxUkTzGN",
  "key16": "37hQhU38wjTwmqrnNqKkBmckLjdv4DQ47ge2iML14TU3JwmHYEKZScfbdmE9rsq3oxApAmdsHZ8Wpenjia7ZKKxE",
  "key17": "cyyDkCjjtx43t9baNzRyC6Wkt2LbZAND5eG5vJyw1PaWAmMDvgvijjFEdRcF7SUmXCUtnriN12iRgPVxP9ugm59",
  "key18": "4mMhUsQffM6AMnC4pJNS7KL6hdag5DkcDfPbRXBMf8cXcoZcLsEzpAYLmks4L5CKUMsZKbdYQnxNL25KgqbvcF5H",
  "key19": "1cnLzf6vb6VeErGdweTtBbfQf5eUcze8EWmZ1aSNHzNyUUCGfw1UMTXE3bd1MtR5LFh3QMAqi98gNNsEV5gRELG",
  "key20": "4ph9dU64RpGTY5M6aFmuBFT1ownVa1VJ1mRVyKM2QEQZH9x3kCTC9uz91r3ajrCzPoviJj51D8K6mEGbyvnuL1G7",
  "key21": "2WR7fHFdBn6PZi3abRybhRPssNAnAYX5Ah6TGRuFw8CivYvJVz5jq9BG5vy7pUTmKU2oRrXipJeLF3i4FEyM64rS",
  "key22": "66znqwHk7dcHkWqPLTH1aFqccxTWAG4wjtLC4co4T45MHBAiR9MdyL7QS33USkw55XdATMHyMY4fmfATarLkkbhV",
  "key23": "4xGtNtFexpSboHYuB3kmfheWm51ubH9gjXwK9sQjga3ZuVVGj5w74xjTjwnQDkvKZXsDNrpTb7RN6QSgnbZomfAN",
  "key24": "4sUbbdUcgfsKRNne1JzdGw4dcEEv9nDr9nbYWuQbWkjQ29KVWrG8iNBVn3D1cPaoTCtD139i39hyRDfMuXdGXLvu",
  "key25": "2GTjDzmXZRJTf9Dan2pAfMFrHgo6hsQvjGeoDKrSwZUmLSTkHvkg74E18jLVug1hkULFaFGGoPqsE4ipu9n5aHk2",
  "key26": "4bCpx8RLwo6iaKmLqb1L3L6q8CdEoC2A5MmrpGQfyu49WvTLBhaxpAkFxY6DGeh14FC36vWQzk9sL7Hdzvj9Gimx",
  "key27": "3WWrVPnYCbcMKR1DKwCi9ND9BvQGwthfgqARttGxS2XUaVw4zmaPQCK8WjNxbgby1XkEm4j7EjabCwSVepjVn8CQ",
  "key28": "SZAVEPnbMcHyZM6MbhjM3HNvA9YgzychH8475mrQDQqfnWRshWGALb8W2CBiAG4hnbdyeq1UUCCNTdBBiMqx1JR",
  "key29": "5rxtXtKhdcRgqy9xHRJSV48cDjcUMnZg8zp7ik4kXd2sX69utwBvraYFWbD1EqYZDHTqZ3FQydyECCSuqwzSMQ5X",
  "key30": "63Rnhvdz19pDsrd6tJogLVd2AxDqep4BMx4MLnjb4WxukaJVyatdyK5xEgtHE1qydyLPRRWgdRy3r5bVfNs2drzX",
  "key31": "2uNzw5BYF5EQkmAmpNLEFXHKMXUcrtGnvgqTojeQoKs9s9khRLydqSFoKmejEqcE5EcWdYXuCVKgWu4VJ74whNpA",
  "key32": "2bF6taJJd2HW35AuwwNBWTb46KSnhUWb7FbRA2e7M8wxWXmfhLK7AnC2jzsSFB6Px348UHcPVBe7F6sig1GRJm9w",
  "key33": "4vhtj4R4U6PAvWEj7RjpSFoGYNHLi76q1ZhHHrRY9WqUt52ErYmyPcsajR7LdTXTHWJ5nXsoALaCKRdGie4BpZc6",
  "key34": "24RrSyqzFMRVp256asxhUbvGpoNFRkAjMWJ2cmFnYmfcw9LXfncvXwsL6Y6GgT8YYbXtYLhPS3e9zhqWi6XmVymS",
  "key35": "5MsDGgyQP1qPmishpzNAu3xk7YfFBsGi5wqzT9QTEEiGrhsDuqfmjyo9mYMPQMuhAs3QorguevFycnKCcCNpDQyV",
  "key36": "4c7c7e4SqUaF2VQZ8A3ZesnugACR4CNNogoaHN9HkQgrwbjg1GpMcR5a1WnWvwz6DaX8vvrvQybuWx1hwUadFx6q",
  "key37": "hTJ2PpDCAS6VWQoEdenBF6YS69JfHAFZCYCmCXLKB1H4Lx8HsoqWi4reSE2HMFvrY3Jz1ekA3DmpiYSAkC6UrTM",
  "key38": "LCJWxExG3c8RfkX8devy9CzcsJZt91ujMw6aV19beujP4WCGfTAbZfyBi4U1gHc18Bt41gQr8Vby6cTCKvyBmKx",
  "key39": "ZEc5t4LpsdSt19qJEbvSNRU48yyLmf8GDsbX8J47ak9ARDzyvWmgDceDUtmxAnmWRMJi9W4VTQeuWWFCz8Q6EG9",
  "key40": "4ug9fA9Dd1ycrhu6EBiGqFvx6C9D6zaC8na149xv1bSrBQXgKuw6D55TP5LEGreboSTmLgMDXZP7nTBL9BQeR5Fi"
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
