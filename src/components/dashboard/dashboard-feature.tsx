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
    "4kXR4UUeD8b1URUQAs86hWmh2yDiww3QeSCNCcHTbjueGuhasrg5qn3EmEMeBKmheZCArc5LvLRKfQyyNkJH7zGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxXTzT9APRkVb3G8K7ZdnRFD4Xojh1bYAqh2krAs4i74Kqoo7WAWh19ZQjrVZL1RWAGvbAp8vA9yoi8fwW2edDv",
  "key1": "49vzwvjkuJFjepmrYoFEaNDJbXRVf3aEJwZerccZPSn92N2gDVnRnQnA1cufdEuqxTTvCzqHUmSyS8dguycz7KV5",
  "key2": "48djbk2NEcAjMhis3G7osH8g8RWsHZ9ygfegTucjikfCWVyBrUXpFfAhLCrGWjzByreoWDMSpYuVP4cd86DnoYwt",
  "key3": "pEUSgjFj9uCJ3z8D97gSSrEcP2jbJe52w5cnut2KZzC631VnRRjQu469VxLad9Q7Ab3EmstDnMJGtNW559YnH6Z",
  "key4": "4arPjKZrhTRLYbi7edKVv4cuLvBp4NytYnXRBQRNqfwfMWyeDpKEbmEWBeRu2UGymCnPDKg9kbd6L3iALW4xSVEc",
  "key5": "3kLYZUka2TRkCTFHh5j5tSZ2gB2fzyDd6StqHUThV9G9ow3SD97AWCLWhRHUPDesx8a4PFgqDXmVKCFKcbUbF8uF",
  "key6": "5aiV2hh1gu539sfKnKnv5tQn7DaN4ErkLdjWYQ8zpYCD68uLRnQXaVanVBJ3Mi1n43rzCUjhaDiSGLKd4TfZMAst",
  "key7": "4DamSmaqsQZ6w9PDxEPvvMiEEMagk1s7nL1je7TPHtAgkUhxftHszex744ETvv6gxBm2f1W5m4kAUhqewXVN8cZn",
  "key8": "5748wscidnD44mFXdS7fmyyNosjRSL4JJWS75zvraxpKAs4pPFd8bfZuXvXKHNvoQVXch3cAtUiRyYNMK8MpZXXN",
  "key9": "2xujYbvnvbuUwwnDGhbrmzQGHCkAXUr3VfDtZoUkPK9Haq9xmt3CPjRRpp5hXcnEkejEZqvsrti7LC225qUGGzFQ",
  "key10": "4d3yeVMy3R4SFYZFoJcQtMkXzYbjUJppRuWvQ3GAiBs5d7HaWTontP3XEdBotUtDeXXZzReuSx4yBom5GwzSsZiV",
  "key11": "4JS8RtirGduqdYb5baagm1xzNQ3GavJhh9ExBp646rewLhqYjVwqTG7XUywoyUYoc4FCAHVbeymcMAJU3FXB4Azr",
  "key12": "q2h5Sr81TF3KeYT6ijZqGRzL64pBMTnFvvrZbUYPuiDwb33QmtwAjPceu1mrRuMDCvMP7qANUqvvxw62HbPLKUq",
  "key13": "3tGkApidJfaciVJ3ztGjCsHQg3wUEtNn1F3pdcAK1KZ32RgwM3vzhFM51veUCMXc3nM1QwRxas5WXu5Hv38jSvtj",
  "key14": "52JtpozoydDppP6t6rSGXv7WURXvQja6G1bEqrgAjrVFMzBZ1EhAQjxmMo4CFZZwHbCdGkfXmVkyrgRC2j3LK4x",
  "key15": "4mmRSu89HFs6kjXGZCUEMW6M83bFhoddp2E3a9ky3zD1uN9QmxZQUANsFZw5N5GeVbMnuyK8usfpdSwB8R89jqDF",
  "key16": "3irC2i6y4eigP8qPVRA641Mk468eB9Zqwi62tWRYf9hvJux3uBWdunwHyApFLzPCdRcEBVSPCTFJqZQSHQoXdb93",
  "key17": "3h6gmCEvz53c6BBf4gocMyrvyH5fCKKMukSrmC6kox2EfSB2cDeZorgnMt84N2ePBaGsyfqQvcN4dNxSTSZMe5DH",
  "key18": "3WquG3PzxndYtrpACW3FQctMXWgHPmmRDx4KAMSAYGNfZ1JNu5jjpdBMcqwnzv8gKZHHMcbHCZVghRGDhbCaWuzg",
  "key19": "tYe4mPMDA9ugfNeJhUTUuV2EW9FNZ3nYzw4d84BRLWBdzdhbmMdCFcGXPpSrTtGYMVkHK93WseUNirzrj1ojMSh",
  "key20": "3a26xoC58zjhm2nSFLZRCKX6TUi4VPJ5j8KCrZySBVqPu41Nza3qnYx97dM8wLT5STzsQf6ABcn1rCPAgraTWTbN",
  "key21": "31XV1rwxPyJbhQXhY8h5UqvgVG83JXR7BhASteWkNeuZZV1tB1D2icCuiH4x1YhnmKwVcLchYprybhT2ipF4euc9",
  "key22": "3nLJE24vhESMPJKcSRAR7N3WpRY7cMSZpNCwciymKRNNGghkxp6jWM36wyKDY23DBir1c13CyBJZvS83iKSFc8nr",
  "key23": "9H4Jru2hYDEYWxirbKM4jm8xfFgTweEfD9dwCcMna2keYdyfpeHthQXD92zYS6CEBA14vmqPNWKBydUeejzv73f",
  "key24": "5LXUdmFgDQBBv7esdNPA6DS9T4j255tcLotwYsmevQkToQmT3dgJUw8G7KAQhhZMMG5YntmJq5JuYkJCte3LBQQf",
  "key25": "2Hm4vkCMVT1vkSBjv1m1ydSuWdwDDNYV8W2Sxv9dTGNWUrj4s596AMj9J144hVTGG5ME5UpuvU4UMyPmGYkizuGU",
  "key26": "2meRVqsuhgyHRK5dwJjx6dFtUQ7LNEwBsFDm8t8tnoSx7SLAfnaNCcjwNzh9vgUS4W71H9HL84SfRgKKcxmnvaJu",
  "key27": "54ScNuZfbT1tnq34zvxpD9zJDwd5urSPYWzr3vEbLeWLKr1Y3h8xbTDN8cQV5cS8y6s8tVSwJHKxzGLjZj2fBfMp",
  "key28": "29LkmEfCB1V2hqipLqZ92fW3k5wUB15546i1n5juN6nYigCsiunTqocR3JB6tmYWqnPWSjqC48mcR5HedU59jHCZ",
  "key29": "3kjyiPGygTe86dCxyuZuipuMKY3HGgiDhvGbLLWdAFPkYGwtz6HS8brhVgrxx5PYN8zbcuwqvFGmvi9RVWd7DiwH",
  "key30": "2N4PbvpVBZXqN8ieqpY2ibto9jz4PM3QuE38YpLcxLBBFPtUhRibxTBMgVAupfWAHEeqcYpWjrixNSbf8jwWs7N5"
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
