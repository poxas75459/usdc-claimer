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
    "2HofSGBoVgmdbdp9cjfKXk6W6FjNJc6HUhwyyEw3FWuoDcQqHnMmqVGc5Bcb2wy6t2qiXzHYGcE5SkYziaKYKffB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHa5s58FfS4kZ7PBb41Nx33zabUBZWdaewRXqHha6NiCfWjtZZmgLhX5dKt2ENrZjpx665YtwZzAbdwD5mDc66g",
  "key1": "pxDb3vGo5G6WBBZpWDc44BxYjNJoFq9p9cigMz9BPqEoidWG6RSb9TBjLVdNZk684HSfaWvwmXFgRzqppEqANnn",
  "key2": "UpmFSpaynYX2E8EUdRp6RaxzTvQBeVGrwhC5cZby4SgDoTTNSBtLxfUkXpNLwpNBeFKEA1S6NjTQ79SP4eHE99v",
  "key3": "2CPcW7rW9WGmqtJfrBKHCiSYKXQxwCEcqLJgE4XhDjdsttCMQbq4p71AKLAaUR4XAj2Q1awgK77zf1jRHEHZGS7y",
  "key4": "33ijsGRw7Rh4yi5MSq8zDGahUFSPaarcTy89zAXzWYvp7r5qZ3wtaBqK69TnbQkxoacftBp3KWjn4FjWgshCZR2E",
  "key5": "3hLJts9XC5ts65YSqPs52cfuygbNAAYVkkJPRvjsURKXtCJdzQVT5K8dTBT9QUFLaAq5ceqEcoBdgjQ3u3YF4z4i",
  "key6": "2pEjjPosNeg33djRd735U45ykKU78Uw4YFfx7WKG53tVwQ9XW7fgwrbkhuteBP1EtMp3GKAUi2pg5qsSMLzq11HE",
  "key7": "2fBApM5yN64S2rpGPUNw3c1oG5MA93Jro6qmroJip5pcKBkdPW3FtdvY1fqkkSnafJPXzgq2sUajEp2iwhxwjCSz",
  "key8": "4xBM7A9bJYR1bQWkhEKasjatoF4HSYkQBGjKXkqEWBcCbidimEp9PeRr4Kts5TGuPaq1BkPqquBTsDSN6Q3wS8dv",
  "key9": "zou8ndKgjCnv15qqi5ihJzVHTPjW7XxiD5JhNPXTPyc3Gb4v8bv65beqJcu4oHVzXkTX2ZKgq5gQftMZNK241oG",
  "key10": "2eatyfdSXALmaxKu7TfSmLewCnFbjWQL1T7PUNcZU36nqyEfVHMxDaaSHws3PqsQomUX2BEzWQbXWQJNQEqFMEve",
  "key11": "3kMTFjjZ1iLssts3XtyLZ5aSYVe6p899RJ1x2iAtM4csGYV1jWq3E5Tb3XFZVDN1i1vazvA7Qeo3tkTBJXHAfagF",
  "key12": "3D2SYBe4KXDK1MYjoe4BysmZTuQY3rUQrG7n26XuCcQaroeHjJ9WfoWUd7qYy2k65pbJrcccRtRNkvnv1FrgiNyu",
  "key13": "2RaVXEmJNXi2KzYDkKYy4HQGX1R535kfxHvjQY3CEYkUWSot1GqLuKsRhdCr5e1F8P9ZZSi9Te2QTKQLPrZ9Wp5s",
  "key14": "4erETsP63vrvT6h9eR5ZF8YZUNGjTzWb6Tbi2pepUsk3NNSS4Xg1RVKmLYznjhv9WgqhSHLN2sE5DRfWWt1o4KSy",
  "key15": "5RGgaNcc8r49YusvNSwYBp4KpvqaQWmhMdRdpLebeAUNgTskee55ALQmJkwfCzAYN7EKacKRv8EDCAU6Y6qitr3R",
  "key16": "5jbZ2GPSr6cGXzr53U6hzNzXagPkRttCyKe6DcgxmjLEoYoNhzi1JifYJMBicdVNZ8kGNMXT8ZY6AddTWF76eHPQ",
  "key17": "4JBRKHzKXAHPbomnj5dRbxAGfxtaq7XYkunNReRkzHpxYTUjfmzuEqWCjhdJDeEZoS8qisi4XTW38xmKM7ohZdcS",
  "key18": "qRkU95D3quwGe4d2t7EyrBkWfvvqHSBigTuf6gE4TjqFzgs5QBivCZFpRbNonGwggfrdY7T2tAdzpjwLC12EdPZ",
  "key19": "3Qp1rw6brKcNVuwMPDP4pgArXHqaFodDNymywcVxJA4UCCCn7cJVExs7yEwPMWRUAA8shgLWuJuQjKxnFYSeZvzM",
  "key20": "3kLwimxkkVdAvsTdw8sHdhVTqNGk4x4CgEjBrrzEZdLWvMf5fuHjYVxzsJ22sb6dbzCXKkUeySsBNS2k8Rx1oFGm",
  "key21": "56Jii7SMZrjamv35SwPogXn2nN5c8DqmA2eh4sKUEVKaMQ1cfsnyd9yb54ZP3nJni6VCJTYyY55bHSvBeFg9aSqU",
  "key22": "3jej5zMDTTjCTtcGyRZWNo1N19KfWdiuZj4MLSjkF8CjsDRUi4k9yhC7E76g4KGsdVdJC47cVoejnxYVd2biGtWM",
  "key23": "52qey2ejsYo1ArtABEk4CUo7yLgK9GyuzTaxkdNWs9tz491HTZm1ug6G8G9a6Hpf9AGoi8rrviPTWjUp7rpzj3Wn",
  "key24": "3fyo8pbAiDgfL1dsR3msLJFejraJ8rZd645HuhiF8AFhmZg63HuxNuZd9h2hLtGuMkQ1zEvHA4ifcTh21yYTzqLs",
  "key25": "tW7TnLBjzQBgY5LctmjTHDpjBiQ3oUu7BgcwvVUvTK1Bbg5b3CxqZ5vo5CCjawTLHbgs9FbrcSuEqogf1ZuviCn",
  "key26": "4L8MDYVDXpuRSReubzwjV3PEWDxjP4R5WAT8dabXQhb2deiX9aYAuqMtvYPwhbbENJqB91HvgGuWhYZrVCe9G7pN",
  "key27": "59uCB7v7GG5YfxdZFqoBTTSWvuYiJCto3YKyGjnj9XzRY74QjiWssxKeKYitvSyWwNRsawX9Nqj982HRGjj3XhZY",
  "key28": "hyQDKqP5kRXvBgVu1Lgg5ZDKEvjn9h9eB8XSBAFPdXS46FYFg5PMSMiukpuZxxLvoWUYxfKq8zQ6ipeyejVdBMM",
  "key29": "5aGtsvNR4Kho7jSF6XJD7v7WHhDkS98EN8vENopLsmvXYKPEmBguDnaATHHUZcTzkLAg5w9GKfHhtCYkwHurk1bx",
  "key30": "YzUoMajUW1VVHeyzgZBpVn7XJyqNCuFwHhhoVQ5kSnaxVg2XwmtULz6SK8aBaMkNr1cZ6tKyf1tPHawpuxc2n3g",
  "key31": "3X7xgNgXpsNNDT1zP7hc2NhEaDrJwqD2soVEH4XXeEnrF45wzyGq7Vg7zmT5NTj51bVL47G34jNnqXUu4xe7mUqC",
  "key32": "3EyrEka6LoR32B5tA4k6Hxrej6MT2gVStsjpHvWRjT4g9ttQ9sKwXausbJ3b6axP3X27D42k75SMpE9natgKDevf",
  "key33": "45hJv8qhLLxGJSxNAMQzBaRrvJXL1mccaWU3wggpnwZDG7nDUwvcYDP34b55MZTpv1QJCWcYCewGTtgQBuCRQxTj",
  "key34": "4Y42CniNkadpgTPD61d37mW81ASWrBbTMRh14ewJ4TxF7RfVkdBz64vbzq9nALQiSWKNW4U95bim711rB6Cs2izg",
  "key35": "3HxnqwUw3iCxjmQHyVthx19d3BBcAMqsLmCLQshe7BkXRLrihQLCJrJ7Wo3R5FDyce2ZHC2ahVT3C6DQnEQZ7kLP",
  "key36": "4kHHnMX6mup2a3rzmjyDBBm9HQoR7iJ48y6PuowhF7MumD2jq3xUbdDjtinry3ic3YtZknQVKEHAFt9jvcfgGDse",
  "key37": "zMMyhYYhQE9xmzUUq3M3BgAoe1NoyMdxQhHoMwzWdT4SSGDzhae5DUKEctDbtsUxGcDDNBB4LkrySaj9RgEEJwy",
  "key38": "gD9yJobcr2mtVXXWxNVYB6ZzJK4jHdbnsLtrzc3FLWR8RLumn54pWAaTxYUsGgeoL6FRjDyfKtRRhNs95uakocb"
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
