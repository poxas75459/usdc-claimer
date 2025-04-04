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
    "sLDhP5Vpfw1uDCo112xxSkNpVf5dEFZYBwye9YXaz3wYr1P9D1XzNpGABR5VUzbapacyuuKze38tavEGmB4XfBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56kQipx9EKUXRMYKKHASovmExaRzepaT1mXyYhoTJvy5zvm17kchE45ARF3BoRZ41b8524gVUy6yQ9FH216tzorn",
  "key1": "jB5xQsmAodv58NnrCNkkbXFmrHYq4UU51H3KqM3JqH6vrYKYs1YwGBAqtTn9Wo7KjmzFu2c2auWpfeZxE15unuU",
  "key2": "4AvprDWdXvJa7JgcJRdyf2CJXxkPb9x9yQy1G1ygeyVSarfSWKnPSTdW53tNHSHQ7GNmuJieSTyucicDtNheDoFe",
  "key3": "3Fzyykwu7Pq4yCzoHZfLeVFaTWd8vXJNRpizW9JYGyPzdo89jzJnv1mL2j6ZJDJbYmvFUiMqGmsmkFrUT4tMfXMH",
  "key4": "4XVqW2iTUzX23nCLZSjn2NoBCy67YY5V5CjDU2tPMnyirKdtsSNqz7VNWV77oxXDqGDAqVBdF2oYes5qnxbBwFCJ",
  "key5": "2awtVrj5joxWB8uEYzwsZTShaHJo5ANYzBEUHvVMhzwUxZEL9qHJcx9jAkCnJTu8kSBWkpnfrsDLTwJRvw9cTUui",
  "key6": "7aVSHxfhjX4vPsptcZuM16kGMqiJxnHENVApjBES4HNsM9QmsMc3QmBD4y4JkmArgu5EvZQP4JcqjuLqcnpnZzZ",
  "key7": "3ScobW7dsbvxoD4ePFPFL9cz5rg9rWiX9NZMzbJDJ6sGY7BYbebfjSVRwMbp5VyQjQyxqcKnDLuyHShmz77AzeZo",
  "key8": "Zng3TR7qq8TsKXLuLW8yF59182533p1MJzMFVXQ38dZy3fhMFwXQVaiQX1REHycJTTC7Cww5aYkSDmiAJrHP8Ux",
  "key9": "2ZvxT1X8dCDg2oRdnPyKberjGHJ6VBA93uktcgNgMZ36XECsTicrNZ6FNEdZ2cWeYjh2EzaEaZzrhGecYN5CJUrB",
  "key10": "2zyGacij725GdydK9yoMBFGhux8ZXJdKcAdsjzZx4VeLKndviyW9bjfqpdFKNDM9uuUk9e4wTHJW7t4vmiFhHEvo",
  "key11": "39ZL84hDfccXjjXcqKyXg5iZAiWyWAZesQjRwZGAgc1DA6oiQgXwJ5RvsCwZKsxQ7TK15cU7CvMsxBomF5T3gAeC",
  "key12": "45jfdscuu1VpJJShArk3MFuFZHksEn5ep7TnMHnEgbGqGKe3X7rRSkGAe7LHXmgEoTAiK5f6LEwGjFzg3F9dPJAh",
  "key13": "3b9HxhmUKXmXSmg47zp4fHtKDFoWmkG4Y1fdVNA7QLeQrGNHBDGjtkHjKbFmrYwYdTWVQn6XpYiPqDrpZeKyqdKa",
  "key14": "31m3wf9YAxFYaa8HtenJn9orbGkCLn3HqBsRy4ME3r9pdCDNh93Wf1RnybxAbmaEB6GmjykUxjmcafKxtF2aprJj",
  "key15": "3suytayJeqKsFF842fyAScbcWSdcJMXJ6EvsuL6un7LMLYJvSgnaQP3phH9kCXtvGUPiB9JTBhPWWwEFEtkmTNjq",
  "key16": "23Au7YprkqWBeh65Rm1S5Pa75dNVipQJaajcMMGnWVhuTmM2XydUHpPS16jMUrTrck98ECxjX6XwKGfGHa1SEa4g",
  "key17": "41jAkMqCud9QsZH8WMBCkn883wNd4qXdr7swN22sxVG1VpknA2ynqFhXSztQrVqTYEnuKaFLgqcjgwQMxXGa8DtT",
  "key18": "4ivrqJQjHiVSG9EDtNRLBtqKqvvn1yC9T5qLRH2B31NSKyRMs4PiH3LxgYmw9k5UdbrVca1PPZ3d9bZTFZTD7AVc",
  "key19": "5TKFqZ1bdjJPivjfRsq9MHRzkzGHVc8rGXUoM7N6UeXx674hnu38kZAdH3uCh8ubJnEnMbkMWcSWWzW8YPWe9EiY",
  "key20": "437BXhL8wXVXEGK11ZTUi6FRgg1SRyVbwhvUQiJgmNNPvgtTQGUvoM1GogXEJe4D1ryMXDTQWs2VyufwqvC38ui2",
  "key21": "3LdunuxAzQdiX5WU1ipmKCtaZtpoTT93db9VdFx4731uJMeQMuJnGZD8LNTJxUkvVDzQM6vHtYdA4x57MagwSJQq",
  "key22": "5f8XfBjWQ66hRJapddrbyetyeMcgnEjw6kViqToZHT1z7Xat5NZCrkqA3k3sTdgPoJYRaoyFrYRwHWjheh9mujXF",
  "key23": "3yP6tcq1mLb1Js931eBVQxT2qFChHXYYmCayegHfwD3LYNtZHRs8bVi4MTiSttCzmjhEwFsvVKFnDe3vc7dZp9Zc",
  "key24": "3iWpU7zAgtDNBgobvV2bw4W2iPPyEU5QPEwVpi1E33LWPLgerKoSNaqZsQsW4rt8ULoYL7FVVJJhYqY1oRGrfVjj",
  "key25": "4uZgKcnXwecY4Sz8kQKe5fBjZDaxvWcucNxrGNJPJ9wV9uJ5BCiGqPisRvi1ponr64bS2DA6jQc1GqGPhLTqw8fd",
  "key26": "4x4z6JwdT8xcdfrabvHD41SK3PsydmoUvVAjtzAeVq2Sejq2zpUa4SxSCMosPa3ig5mP8zduqyvdqVS4pgEZN8ba",
  "key27": "5AV7yK6Q3bkA28w3a6BPL1Zw4iXrQUo5Avcv9BDhRdniBiBkCt8TNCkTDjBtmV8EWk9t3XgKEeGGUJZ462bpNWzR",
  "key28": "41QSzDCf6nriJAkURVyMUUmnoy3pcz1kv37xKZzBHwzRdat9946itY1wSRNtLBn1iprw1YJShSLZMz6UETHWqW4M",
  "key29": "2zcsne9oQFjndtAie5LhouhXQQhPJG69nrp7rrfQAh62m2euSixjRAAfSENa65zExq7ZXYxvYxGgNX1XVMDiMJTg",
  "key30": "kAg8aYhetqjPmLiVVGucJ8TyEWmKks6CiFkvDxfPSZKzYz77FR3phhjds4KYEZA1FkPsxidSqJJTszCfYGfdGFS",
  "key31": "5ery5b7byCpsjYy95bXy6jMiC4gGBPSRN7mu9yCc9SSDVZnNQR7VyNBc4wBoZ5sC9ioQes5xrqmzZDyHWBo6dPcn",
  "key32": "c7CWMP7KyHEzQDQbzBWZqifmk9zTEPc49oubMKTNLksnfa4EhKVW1XMFfnizAxYEZNt2i4bQKWZ7pNxgLS1SzmU",
  "key33": "2eNykP3tcsjtr4fCFo8TtkLCGj1M91ne3D7jZNSBT78jM8kyu4JRDCS1T2gF82uuirPPrmL6CcbQZWy9PgxEruFM",
  "key34": "4inwa3nAiFXY7AAU7xm8tBqUPanevGNusiLuoj2Yu8RxBf62d4vq4vF3oTrnU1tuozeCesHFFwYT2N3E9wFCVU1j",
  "key35": "2CAR4QUZ6eMEr5tkSsg6ca6LSVbMuXqqNzruniPx8LSDKR4tPxaDMNg6Uu2esiGgADHeWMfwojn6oMBUrj2JPpYw",
  "key36": "5pAd3k54dY5WqyXzXQzGEXQtmrB9x5ogt1wcTQev4imTx3UzVA7Qy8dwfnnW1hXnEdXEteaUNBZatWLsupqAcoce",
  "key37": "4bj514ETGTbRo8U64QjE1mExdVtvSoqpjzaVcRnZyr68AsnkBp5ptUiUAVSQrpBrEH69dpB2vxaUrxE4uAQ6TBLh",
  "key38": "j3YxHFzp1JHwidgGDQx11GitYofaCuzPCDBUiuRwwAVai13TFYhN765DPp3y677ePdMEB2AbcsiEvSMfFhdZvW7",
  "key39": "FeVeDdbXNjH569PVdemKx1g8YfJKim8Jm4qxY1SJHhrTP7d1cVQe5RNhV9F1gAvcFGvKsZWxVvdef7n2MubozVT"
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
