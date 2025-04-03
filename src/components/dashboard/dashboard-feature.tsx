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
    "M1CfFVbwhipuHCVGkGCysLHJsubvLBCjvEgMyEvVBm38y5W8LhtwVyCUxkJaJQPsoRjtJ2vjH2ffeM1KzWEWNdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y91HyyQv5ffg1uPn79rmJiN8S4gYpyCJoqtRnJjVWjgDr6tHpZR3p95d5bpxHC4vZ7JUgJZdLv6DsSVdSiEzs8W",
  "key1": "2YiRHeQviMH4g8hx14tH8eqx5cjnRhJGxDuptSjaUU45L5uXQFZDpyFWerLepYemtENpiU4jjDaUokR1Gi48yWhA",
  "key2": "4Fvfjk99gDFimbhX8Sdw4j7UyRxk2YE9UB6D1hufLFuxJ7im7ocQBpEiT1xwrwCU6ryhUHHjdpUjUqds3cR94N1X",
  "key3": "VAzNJ3NzDpnvybAa5CyrNZpj4grELF5b4aVcu9WAL55gkYz3KvNm9CqTR5weoVFLyPfPZwpLfUuLCYX9Z9uAN32",
  "key4": "Jut6z3V1dWcsCyizL9SKB32zuHfv9eNcbYyoFotMerzhocy3B5MWV77Trspk9Lu9kVm9ko2YUSqjTNUZt8NSvXA",
  "key5": "4c1wvWvX6Y9bHq3CT3um7L6AtRsc5x3EFKSM6YfCzTprMwUZpYp78p6jYLMrvPpW4V47hZKZYu4rnQvBepxFYGN6",
  "key6": "258ySbpd1A79dVZnvZwWF9BkUWFdyoEjrZuZFk5to7m1WRBPTQzPVkE3UyH8JvYenHxhonsx24cNsDStPMqQPAMZ",
  "key7": "2EKQAZMDzmMMhBo5RRaDkefWjoH5YLu9oNsG9XNJLwwvY8zMiK27DxAr7kG1HmMH8SomjvLdXjeGqH3YPnUqy2vE",
  "key8": "5GmaYWudhvAiQeHXGJKFeqpDYT5A3kYWRQuReBsum432QyENZYsrRHzfe7P51iH8yT9Rik3QyZJZYREUmN9jTQSn",
  "key9": "4Snx48CHQgAgFa7938toUjA2dXxD2hJT638zQvaPbi2kupZtqKfBdxtxwcaBCMHHQWW5CUSF3b2ieTvFucjKwjFw",
  "key10": "2nu3M49UBy2KYNduZ3RbmwiqevPohX8Kiv2VHpVYvSGyeadA5hZEdeVSQuipq2SJXvq7eLP7EKL224DUhN4wmKMY",
  "key11": "4D5U7RSwHiH3Pa3a5cE5TooibQ814mHbFMdRgVTGu2iyQcJ31MD8kDtQnhrRoVXJGeM8LEocsnr65wBXUR6dvmiy",
  "key12": "3ibtmZVrLbaNfuporenmbzCUXRBLtatcFHCBY94m9QtL8AtQrCRacuQXfAUq7AWZCpRSS18PgMapmUMgdfnXCUFH",
  "key13": "5EHx8LEdhqAm3XMvHiwcbAjWBMuMvPZ2JdKHrd8jhui6YaqA9WnDu95brAPfRRuuyAbysbuzj5igaBFfSHGZ3tpr",
  "key14": "2j2heR63exND7WkbdLuPJAxSc41xcJ3j5E3rioX26qUqidqKFn7RWYYrB3Lp6Yu1Vo4VRt8jAjXyDvLdyD8gbbEL",
  "key15": "J1nBBghAB32aSYncZ1e7sZTqw3hPQpFThRBNkpGhBnJjsBgGq1st14ey6vYF57uZCYL4hVjGLx1RKbuFaGJKDnG",
  "key16": "56d5GgaubAZffqSDrm3vn9gHnczN794uKyhLH6SNaSrLjhAgUeGTsoDKs1CKGxWvJBkHuLUAPdrsktZKT1Nnefni",
  "key17": "2R7k8vMxicfnc5RAJ9zjvPZGAwHxwB6xsSaRArCEhDAdt3VdsggS2jRW7k1RwFqPrJ9yjEU2trNzKPJSC6ADDsWv",
  "key18": "2ZfdiLEX1BFUefKhnC5qC6srrVP8Kc2fG24NPbwJdXswfDcnsvQvVzK72LtStZ4cRrRPtxv6qdUGYaq4Pyfd5mhJ",
  "key19": "2ByYSBoosa97VQURonyWX5e7qYN6A6woa2tMtbzJfyVyubZBLYDoEh7jddyWdrmfD1Xn3ozNSyzTMBKrXfG2bzzA",
  "key20": "2k2wsbkR31nSbdBB6UjZguUFp7SBcP57o17yz4W1bg9TXRCmXSokwzatEFdSfuoSRoM7Jtmeujz2LbFg8L46uUfb",
  "key21": "2fAsGumu4aqeQW4hoi7uYhrUZ8LoahbAUUyRe9wDviowCNiG72yoQdrLKFXQ7M5KyCwKMd3kuvtoeunwrvA7FXfS",
  "key22": "3NHUdcp5rp3HuhAep5kHVtQxorVJj7bc1AmSssriHkYLw95kusZ2ocoz7E4zagKgzeQGaX8dvkKr6EZtPgKyErEu",
  "key23": "5MhYUjV2CTuAwEUVmNW3z3qkM1Fgic3RgCxcBxJhJb4MrFZMVUMPcLQhJCc4DTSV6cmFM7MWeAELWh63pn1fZexQ",
  "key24": "3FuUWQDzGzcNZVT7gntwXNdAqoQwX3Hqs3nbScybT9oRvVsERvgSoiN3eCyDuaNta2Tf98QPJyKEvqawLiN4rBh8",
  "key25": "3nJ1U8A94moUPCPUpEMeDVG1XaCQhzHKazMaHSQgcxcnpNVJU8D4XhN5z8oGv6F5R7x5oq8YaNWWgdaRVrWML5th",
  "key26": "56GUcY5VxySZ5rFTECLMFK97Hu1wjPR1okWgatcxNTMsoACDSVyPRvKe46bWZ55uR52zAaNMCYX4K4gzAR5vHCDK",
  "key27": "fhtHQ9YKd8tdzoxXW7kYMn3ceLmMMTQfQGDWGf17dGdvaaJjBT392TGJf3VbjaLaY5ZPmE6VuxngJrXadx1BKS6",
  "key28": "63saQ7f5CCvUkkKZuxnjgEhHi6k4cec9eHVpQ6VHBKKU4Z2GX63WDjGcFAyXASZJ82zh94hHbTcu44mFMUhNu5GQ",
  "key29": "5Pnhqnto6HWWKGKXHKLBcVY9EJkPNpsg4b6JXVDsmB93dSavLU4JFEYN74SxtaeVn6V1dZcsuBZic86ShGcPbGp5",
  "key30": "2Eeth2WoeQCJqpujXRSVLb3jRn4UtsvRX61Am1YCcY71mJFDDw5DnAr4KiuJPTfFATMUUJeXqd34MbLzZajyDa2z",
  "key31": "4NoVpmUHxQ9WN8HnKyNC82r6DN3TjYsXg7k36zebgf2SPK3fhd92sBfEy9L3PEeFU9WisQTzuAbwGRupZMRgM7Kx",
  "key32": "3Xi6t2RGS7Rjm2my5MfazbifWMEwjtTbQfauYw5o4CT6EPyivvq1h6Pv89V8Q7rJSWnKJczhytZEddPxayY4Z2fM",
  "key33": "2hPESd3Q8dXfNtsXLsa1ByLpLN2pf2LCEskzgy5UZnb9iC7HvZe7xnDror6F2pVeoLpZA2bw3Na6mgkMNxrq2rLm",
  "key34": "58gXfwMx6uMWXUjv1c7JY2Yf9ypsdVBwCWxgcpczS3ss6MbVb64sqPq4D6B28KfYkzZpBYvq4hzJgGevbbP2mbMZ",
  "key35": "rveJAfW3KqJvqFUdieDyuCEyNYbghRyaVP7gXZ2d1npxKQWBxxcgp4o7p7SLueP8ZC2SMHLRZ4YvRbeaMTdZxj7",
  "key36": "5CM5UyHSMa2cTwk9ZRUvF54wvbu6zkXMrUBgX7vwiqcHSMq9kNQQj1nVGubMYiEXN2qyd8JYyc4dPDNqtkabHEms",
  "key37": "2PY74xooVkg44R1mdc2bTRFCpazAYNCDpQCe9AsL4yB6HfnugXrDgdirm7CeK48dJigWFzYf2SNzA313F9VPdTeR",
  "key38": "4w1V2dBh5BGHv1GArAg3xJNRkMkPDWpQorVWPbxmYyACBPRjsfVpHkoekYGhKvjqcQAM5sZ1cxX2E8zx6GTy1mgE",
  "key39": "2izNo2EtRidw8e6vX2NTZGk7cJ6yDiem7N8WdWj12edFb1KsZA6ARBK8uXoLjvWpcSCjNtsY49sNrow3rxDLxECA",
  "key40": "48oqHrL5PFvKsw67SkEd1dLzYELrRkKZeaxL6XLjngd8U4fnK3gCU3ZT116LJz3kqkS4qEUpD8aueRkje2frDqDp",
  "key41": "4PH2v9GiWsRjx3SZDHCX4Y54Z9hmN5PpVfsry1x8FvGMVNUVdfLAaUSrhCPPt7p4ptURp2WRzbnQXqbwwRYAmd6T",
  "key42": "29YhgQdo3Rqn9sHxMQVc1TRGf2NnYQ6PioLa7z3UFfHRmNQ7rP3FRjHvu4XvZp8RRy1xSguUJZLoZp9woBEZ3VQh",
  "key43": "2wzxvZh3rMemv2Lto7ZtJQNGMdSC57LUDGAveJJ1c5gnCXbQmGGGHpztWA6LwyvwBCmxQWbJFiikcv5GPQFVY47y",
  "key44": "GoD7oYKFWbbouWksW6SsC8XFQ53gGjxCo21W2H4tA8wgWuWquhchsuSBEH1LwvA9rGWSjhz62AY1ww6o1qmTtmr"
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
