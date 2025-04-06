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
    "4BiUwvhHFEBLYCyrLrdqAWrVyReMhojQgeTBoV7bhaCBTc9LPXKFEGANAftvs11X4DCXY769MJpHLAf8UPyY5pKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oMiZDkk1RShe8WpLJRLvx7ZafJRWLxBJyd3DQiMJ1Hz4GDuN6vPzfAu6zYssHGYZ9eUZ22EoQVFGYCzekU8AaL",
  "key1": "3o5FNwS3oSv5RyUWqo2UFere73ndPSZ7EQspRzMr5owtTm963FDr9t9Mm2rdW5qgueiDVuJHjuRkn9ybXUiSNbLS",
  "key2": "3FpuJFXujrkDu3pSffHNeAR3T75eQCHmnvEhyr7b6K66JBFBnE4p8Eha9n2pxpiWgFqRLCnJP5AUFD3V3U31YdrM",
  "key3": "3V21rZXyKV4qnQPCsi5fR43K55oNZzxhhgSFDgyWKUee9cXfqZVjwbbT1pXsMW7AGwHENSp3ryQc5Gvnf4aYMw8c",
  "key4": "4PyBKT5RU9h7D4vzxhMCDTEcr5oKgxm327zChbhELpLjKjwwn4SzGDuD7qdfeXP38kF6GX6ph3vAVvoMEMMRnRLs",
  "key5": "418RkXHAmfmKXbFKXXuPMhKuP49gzKJHtBeBgDUc2pHgiNXPv1HAbFE3bJ3iSEHj7Njj2c8PipXgAGvbe6zQyFxY",
  "key6": "3fvSJ54eiBDNbnnX6HRYuN4MX3Ay8PbdZSwKLaRjhVHVGbjjHT9M1reqYpgiFRWwhdNvhqF97Hb4vC7AXMNTCpNG",
  "key7": "wa9z2dDGf6y7GKtEJ2pPJsCtv1PUrBpmS1g1L5qubUJpMWX3jgVzA2aBFWQ47BjGqwrYFVqh61wrupChVgNSMoU",
  "key8": "3cS7xtLN92C8v3DPKEF63u4J3yC8HtUpJPy69o88pPY1g6kLEbeGKViZD55gTnZwe6wKsRvjJDHwDd7a2VdhzgV5",
  "key9": "5Y8GToUyRTN2oza2eG1WLtfkcjHp2DFZ6QpKezCXYDAFncvJTn96LZCub2nFwKRmMGLQWALxaZ2df3fjouXhQv3j",
  "key10": "2E2u1GvgrX78wu39uKop8nBTZF2ZNuQXqnW3nyvbhVr4bZFJ7KrFQHZJibN8hw6tT3psJN3nsfgWTKG1kCsG1cbp",
  "key11": "5WeJyz1qeYm7hSvRsQrAo7GfHuvoPxZXLjBiPjhQN8oxxc38Uiwmmxfgkqe1tDLd56G6jvNq9agsr4wZbqBgyUGF",
  "key12": "5ysdzR9VXHzjPmGADvKqZhydj47XwTaw9A7rf6busgyx2WrmEuK6SkY8T1hqWKT9Zaps3B1BHZdjGTq9oMEWL39o",
  "key13": "5SWFKs1eb9Knj4pRCzjjV2YbGJnTeTSf4bRvxTXvUoeCH5s7uuwDZqGtBxi1KoW7sYrfRxCTRqHnswaXnf5DsKRh",
  "key14": "4apxosAgV9KNTQGxa4MNwCxKKa4rem6yrgXLyaTtPSKDErm3odti1p2wGGy7wFQu8D7qdzJCvEN7ytMaK8m95Ujg",
  "key15": "5MKmNdvAoHER9jB5ignkyhkzUR7HuEPJY5QKx4hJXFzmxN8vMk2k3h8eKVhR3WYR2g7gDtmzkvYZPjEuTNaFrCHr",
  "key16": "PFRfTCRk5tCd8gbnDKpHFrJjYxfNkCXgnSriTexMY4ZMvPUHB2R5gxm7NosQfAMWCN8zMhTfNQQoDhc3nwnvaCf",
  "key17": "42HXmzxjbnrwC6nJZFruxveTcTEVj32ZRXNeTTBiRFEihBJW3BuxgLjx4tmEFjaCf2Np1oi7LruMVCZxdhZRuWzN",
  "key18": "zpspXPCGUjQ3zaeonSLTxQgRniNZqpLc95hCqLeYzGra3AX2MmxHMAoqLAKYhtayVBoQTw3cjUVfEDwTdVSqCx6",
  "key19": "2eQ76r2teL16CSD3JaK87mZ1jiAwHxP9B5eRkCPBW7wJqubF4yzFuHm4SpWwebbnPgb2nDD4kUNvKCEPtPmbUC7i",
  "key20": "4nsGvy8eaaLotjUVNdfy38gFuHyJ9yTo2zodGtWAA3agyLMqAEFxA76YJ5NYpW7BrPZ8YaMDYCax2Jfwc1PEkRMa",
  "key21": "5DMt9qRdhKb55ZS7psMhaymHXJjVhA2c4VErWWFTeMuA3BjumCWbEGWeMwbnLhLpmxAnowPv5yNFY3hh2dqL1Rsx",
  "key22": "4CWyFGAd8axkshT78F7PUQwNmJrAF2W12Dk2NG6kvAKfjWMywBFSzjRn4nMZK8bDH4hSZM8ALTKjonvDyukj6vRk",
  "key23": "Z8Es1iy1V53rb8h3ZaSasf2eHigPdTwCCc3fgDmARQGDf8kCCuZizawBnn3itARpiyC84dZo7qX1p7eMtiHPTRD",
  "key24": "nyZwb4cLLtQ7tnSSLp7Xuyzysw3cC3gwydZtWj25NBWX3o72LoBYzrobSgyn2kA2Fbhj8hJEhgRvaRrXwDn6MiV",
  "key25": "PsfNcXFR5pxFbFonWeyaeDGNaaLok6DmvWvNyfBNqxR2DGXMBY2oehuDC7eHADd1JCtP8b5j6HmdtVkfCRxPzMV",
  "key26": "3HUSieFhjoRt3hXe3qnFyZ4kBaxHayLm44jkU3Xg7xaZYRJ6wtFKAJ1bFyXFh9PPrpNNbPUf9tYhTq6eXkxfa2VT",
  "key27": "4142oTnp2aWZQHRPo4RWCBuCFmDJ1YaxLQYBhu9X8ZQ4pnGxY3pag6mntW3SwoDvtCLiiTtYt5kxR5dDyzkN4Dh5",
  "key28": "2RRLr8iFKXQECQYSMBkBppMuPxvttoKczDgPDJ13W562Wr8afJGPLQczCh9yLB6SiqKzF5gTGUBCXw11H47sij9Y",
  "key29": "C5BQwWgmr8fThazuD1ycvTYxmUYRGwLbuuDFCkCNiw2czrhTt65dfnYUMuNbpfGK57WPDxGW5hFmUBupFZyM3mo",
  "key30": "3HNn5ebuv5a2GkSELN8bTEv2nRezGHk6Bug5PWQPYmpYh9hVWaJJZuE6jkFAFcKS6jyLcEM9khqQd8m8k8GuU7pf",
  "key31": "2JwrGseDNjJoaAyYRfmoBK9hPDNK8KhqeDgQZL1Lf4Gsnxj41jGf3WyoDTpYJUfKziEs8QsjVJSYGnG1x5JV9HQp",
  "key32": "4gz3eiqvg9qRje5uKRofZcJKVbExjWHTxUMxp18HJnxB37zktAyqPfe9Pv93id6Hsb11kPdrYspp5XR32cAo6f8L",
  "key33": "q6PqceqyUVVvwFDxFt19FqXHT2rRmfyjL85sRPitjNPJp9DoSkzoA6siqfMCGxtizLKUmLkXos95KRMkDZCBnc5",
  "key34": "fNtbpJLNyr9AvPdnbvJNearv4t5pi6hYeGtoUpWoPAwubAjscnQEQxBbJRGpTH2FTkVqUTzqbB8L3WxDeXgemNM",
  "key35": "5dNHNaKR7FbAQNEbcBP5kScvSXbXs6M2LB72mf6TEemEwg19DzdcRWZasbfDd4KzQs4WzCMW14zeyGV8nwLcEnR1"
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
