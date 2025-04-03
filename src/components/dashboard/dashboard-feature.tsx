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
    "vdtCZH5KKgKw23sUSdwcui3yX3GTLGJjR5uue6554SZKxEaysLPN2QVohHa7HDRV3SXJ5Luk8VDRHgWqM1EdEaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BbiXf6eopjAk1AiinEv4WFm57681jzRKxhefcauvaLqbCU11g8fto3PMWYEmnjcVrbKisFc7kfbYjVfzPbB9NAP",
  "key1": "4EJprauEpFUQUgAJa357xomEasXB3PKofD3pAc3PFkUauhzGpmE9qm76KRFpq1ixp9Ax1s7ssoJYYFL9HXLQqHYh",
  "key2": "4gB3uzK46QtVce4jKN4StGGcDvEie1PTrgzQrWwshu3tp7kSCoX3SLQ2f1CnwKG6wv3wBFfQqL2h6e5zaiStWBhb",
  "key3": "51ko2fF3bZkgMNXg4sQQs28SjRcpS21KwDyvuDWyENP5X1mN5FLdSiX8THYseC3mAr8v5R9uKvSfWHLhxSbmvtKz",
  "key4": "AgzPZAiVYqQ9AneiHdskDwzWCw3tJXvtxmhkJx3hPEjyFrKDgWe9Qa4NqSkR3sovZnSHUWpCAnBMcFec64PRHaT",
  "key5": "nwkYKezHKuixjDHMJdg6ESiqwSf4qZnfuXd5Jkiu9dMDitKrZHNt3wyJLC2NEJjbowHzrDfEhJt9ttUp4nmaCXt",
  "key6": "4VzjJNnyH4SPw4m4phbTXZXkPBxDjeer9SvDfrU9e291DESdMso7r5sCBmVychYWLp6ZTJXYndexpLZSnJCjzyrH",
  "key7": "5Ha7cFobDxtZnxt7mSHqBUB5ZbBxtNB4hsHaFYPcgpEFEp7RQFcNbKkFDtV7kKbPeSd29VwwPNR7vZk27wJGB27r",
  "key8": "4WwKLbzd63g3E7TJPfz2koJs9nYTa5dAURjJpgr4gz8tG8ckw98MJ8JR6jo3xpahraqWe593QtLDyV8GMnyWTr9S",
  "key9": "4inWcSCMuzmbd3bMinjisj5RhKfxzRbyh6nAjwcfeMX3dodGmqU2irWKtKgDD4JgeonoheX23ozjJxgLUZTZB1G7",
  "key10": "678fzG85cNAXGHbFzmypAGoeQhZasfdWTCy7279fGGbf7FnY4JMnExu92k7NWF2f3javucS6E3nuxeFcUkKD68o2",
  "key11": "e7YGY1qCa7TJELdeER2UyD9BUNPmJhgHr9fSiQ2k88PSsBBSaeAYatXY5P3TPiGeoLBbtGbAsdx8gqxLmfkTkBA",
  "key12": "4nso1TVTPz11Jr9P2mJvMMEUBMSEAMnuHJjW7rgs7cBEqiFj2iYkgehJWK7Fbqup6HyArEDSPNnqcZAaJUN5WGhh",
  "key13": "5tnwpmFzVqwGZGeqM859UJxSVxkhXhCkF5qz4iq3P1AX9Wtj41iravFPuyeZNkvRueQt95JzUXGjYqWAU5U39Fm5",
  "key14": "4mUSsSVLwnHn58SP7r7emcyDkhHTJ5CQhGVy65MVQzpLTwUwXyrcAgzUzYFLrmp8x1EvZf1TSuWufzy1hgWrQ1Mp",
  "key15": "2ThZRkD99vvmis6ymGsZsyhigKCX3DQiSC3AkcPmhr5disq5FeRuR3zmFitLUMs4tRUi5ADfMg2zfkSsKvqFichv",
  "key16": "3ekwPxvg5Y3wfud56vAdRNESqfiFoSvifXdsM1skZSjELR2m5rRYWz8RM7evFrzSzz2u5htTGKcv3AbfTxbKHMu8",
  "key17": "KR1TqiHzgSMn1krRFmqDuWn2Wo4Xdyh86nUy3G8VLn6Wt6q1SP4qy81aDbNKHb9TLbvdmtUwhoq5UrSc31i4gZK",
  "key18": "wNx3y87UTrkTtUVuxAPq1nMJSxfE2iQ32aRYDQNeP8QSSnQ6EG1TfuEsXpo5jiBwpmv2dRTXVCtQgpojZpWVXLg",
  "key19": "2CowZjt6d5GAsZMxciA8k8wEE78dDAtR6zvp1DfuGt7C7gTvAdrJzQyFZWHqMDXPmCVaFtMmPRzMzRAkNWFkbYP3",
  "key20": "2ztddYsYWhyFPcRuuP7HsZP2rYksEeGjnbjkpq1pQiMMXGCGKQYRkBwyBEawfpashMzHaHKzsNFFgJyahdH9VLgA",
  "key21": "2hcV2SJALo8VYtEyHhJYUjdPoJ6dpTqtfsexWufQQfJuBeFqe4siDR15SzB39s3JvodiJ2pkRzfAB2i15MuFhM4o",
  "key22": "4WV8JSAoNvG6GXFcWS2KMCxaEyuSmZTrN6dgaRKeBC5Yv6SzZZHYdpFDHMTSadUAbCfvpAXoW7dLzLgxCNouTi8p",
  "key23": "jSA8HFu1z1wsigg1FiRo2eSih47UZAmXhfMFa6eb5GgGn9H68HofYTZX6GVzyS4mSvhTThAJRVFGDZokkZ6kfjH",
  "key24": "5bb4JH9DyGsQsPJG1N7oaZsECJmvNzvUnX73rrHaHCoeK4FxRLD62ohhexpkcKQVitx1HEaQT1gt22BCQtqhoCYr",
  "key25": "3McPUTLXPv73Z5mDPRqMpmDPbTTxJAoJSetbfznC5b4CNFefS4Y8SMt3KeeaMiNSDcDDCZHTErKgyZmqEyZmxsZQ",
  "key26": "ekG2HV2DdZsevrwFhxDkGWea5W7A1aBBoBE1dAQgSViE4ZXk3zeKtTENSnyBjFw1MwJnB3Jqbw61mT4S9VGcUNS",
  "key27": "4z3GRCZqtpYuWBxcWKrP6KqbYbmjjnkvbEAFfv9zgsx6E4PHHwUki7tuRG6co5CpZX62sstY2hwsk8xZVECLhnKG",
  "key28": "22H3mBJMm5bxcJ34Utf478R9HUCDozoV2Ye1YZqq91eThia8pHWBwL7YEoixPodLCUvCswBjCFXDrqNfr13ZS4zS"
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
