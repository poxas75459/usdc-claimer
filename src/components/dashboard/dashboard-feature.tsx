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
    "TEY7ksNMuw2EN6YdmUDCDkup77cqcdZsF3SzpGTJKshjHeC2gVAbeXBZkNsqEYBw9QuByhHybvqK6Hffpr7gXRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFojYvLGGUiZaAWHEYgWJPrpWgt3HApgk6d1zEoccroYoAMszNYPaQ9FM52aKVQ5FHsaBo74AkXCAP6pxdPHnRN",
  "key1": "5YpZ168JGBAVWLcTysDUSiCtcHvwb4f14pk7FUNyuwGfmxzDmoEUP728SpbFGuSQCTXDLMRg5SwSKwR9mPc5w8N6",
  "key2": "5cdK9cZtmoaq7q1HUgkt6UC7vGXR1zgdhvq58Wr6jmEAnW4qNDXEGgPq3FD3HtTRjPekHXNXmtgYPb6M9TkpbQGh",
  "key3": "2QpJ46LZUxHQ7BxFV581W4YzAPK9x964HcgTZPbxHKnyNmSx5mxFGXu2oVW9yi3bGCpmyxZwDW92t4RrShNgTWGB",
  "key4": "hSWGwXNbQP3uZefuDSBobfA3EpHhiKd7b5uu7TpgjqtAVLFQf8eUpXKftHawoxQd8f76BKiDHj8VJTmMnhewS4v",
  "key5": "3ZuFREvDWmSpwWNCYKWkegQkRt5fg5DSGTEnyb7qEU7Pf2skbwFcDuEMQgDcvB4oj5MhNZmJHvvfVQnoq2aZ39hw",
  "key6": "67apy25aeshM5yYLXhdP48mjSYrRKbfp4jgwsiaZb5sH26kn862gy46Couu1wDtSYxLHD4JQ4MMHPeX9nM6Fyebk",
  "key7": "48nqXLYQQ9ciY3AuL56zSoacTD4Cm9sD2WdDNni4QdqoN6ZbG2QqHkEBBuz9Z1rDuiLHoA5Cq8cJoVtsxLNzYvFY",
  "key8": "4PMZNR3iDz34HgFHrFGZBT74mQU882hdyvfMKY9vZ8c5kuWiKpMrJ4k8sGovuDwMvEpPfzZLUYphssw1GKDAKkQf",
  "key9": "2Z1DE1bS3nW9QLp8agAcQwKmSMLeDQGWzy3jBBG7s9NVbY6VeKrH8PcX5nkZPzf5kVngqXa6C3Grvk7UQLBGJD3d",
  "key10": "5fxs1apfM8Q3j7n9RNGKe7WQbmFMCP7rmQ3mcY3agxLFeTNuRxjUQqv7rBkYy1asBpxVYkAmQq2gtM8xVgmYD7Mq",
  "key11": "N3rjTeXoDV4txYtBssXFFyY4sd579Q8m9311FEkEXTsf4iWPhyWTA9mUS5eEX9VJFykJRtfnETgR3B5WtwZenUt",
  "key12": "3L1vVT9DPgdqmn1vYt6NKSH3iWWVq8nkzT72ihtWqQPrGgG14bgcfeAt9RvAnY43eKErJYXrjJ3UQyFdySzEdwdJ",
  "key13": "2zDw4moF47EGYVKns7yxycMBiCJjcLamwNSDGNGfyXhth1uHwVoGVNcKWosST8ZACBr8JyzeEjaW95vwhC7FgYN9",
  "key14": "5Q5bZwHD6VV1zgHLJeuPTudERgxnin2FRMYMkJauZwaYfssY1HK3GRzDcMa7euKQDHEN9jPkGgrFLtpsmXCn9ufU",
  "key15": "631BNCbG2WHzA7RPxxqrNhrgWyRgCXwFvmBQNCSsPjPZgaT5suVKqKYJ4fboDqQjVbb3FaF5s92fDBpY4dJ6qfxs",
  "key16": "29KukZpwWaAQKcvuVUYSA6KYhiFRN6W1tCmJ2FVxXDNS55u8C5cNgajSP5eK4YdanAFBy6n3guizEeXz4P2piVZ9",
  "key17": "5nKmywnETJ2Ap86XjS9AWRwJAP9Bd9Fx2vEMXpnaHkfGLZqcMasf55D6ULRNsSknrPz6VyY7SsQ6pTTEwSvYHoHH",
  "key18": "33mVg9ZSBNQuNXm6S354Ubqt6dnRSzULtFJ13kHrY9TwDyeG2CbpWYDcZq4ientB9isG5pQAVrzJX7XQfQ9xyxWb",
  "key19": "5egcEKptGwJbdG8VQN7bTp54Yu8fHDrZrJmGMYyFaPF4mS3njoj7Ne9sp92YapMrbwCafYQZV7FkquqmzYFJS4nq",
  "key20": "4eE29nZxLyW3x4mEZjt787rZEbzm252jvw6iLEpkizvED8Ujz2S5GeSqBDKLEBtLEmrVVhq7BT1dWoDt2fpZbRMK",
  "key21": "2mVKTDxFMvL2FWQMQspv4ayMBfAEUZAyyZPD7LSN6JXoYmKKNTxJTfRbrk4meYTTv12VSfiC5qZtHeEkkwhj8gWG",
  "key22": "9hifXRoCiMjiUBiwjGk5Us4zNoi5zU1fbG2wUhpeUJz2ofocq1twFMctKDU1euZNwZWVKEFeAarXooEYXJ7aKrU",
  "key23": "3cJsR2iPbeFP3VuU7oA7yNPK16QXKFyFgH61UJcnwQ14cBefTJbJfZWd9uYk2ezHgHyRLyznohoEFgyAuwdKq7ne",
  "key24": "5NdtM9UvG2ukhDxgmicnnMu24yhuKfmBEL7wrZTJ4FPZoM8CayURcHSua79q56cziBLpaAMeDS2A6Yx2VJikpm38",
  "key25": "2qpeBRrTW8BYeFqpmYmjLFTA238vbc3GNHAacMoKL8NopXRyYmLZgw1Mn2ELG3DXrtwBcM13bwxPWgdZTNcghehh",
  "key26": "5bxFTPjzvG5A2mczCfahsBGp23GFmcikQ5eaMxfTHpsTnkqiqELptyXBBV7SwXk1HUoGfKiWpCgWKULUsb8Ermtb",
  "key27": "3p3Kk4FJw5mVm6ahg2AXgqupzCoYSjUYqnGzCpfev7UUSVkPJXgTuSme5yRSUDAzWFbSEX2CPh5kqxfznGTyDNDj",
  "key28": "2hKefPDBjHBHPEhAdF23Z25oStvXX5RoxTYmxNx8C8poTzxtbYcb4ou44dkV9QJsBc8Fyuq5YXfs6nahersh4wx2",
  "key29": "4hNGZPiK5XkRkX3RQGay6RGcoqekXUW5z6DkcxxrzzaLCABBjJ2HTNmaBQp9wK1rBA4tjyw1rDP1VraVXkvYzi5D",
  "key30": "3GPXWdpeMa7eRxps68PtyWMr4hVa1PsTiobTKoFyWuo94jawZ11WFbftobDenud43fkwvj4jqwbkEF7wiajc72jM",
  "key31": "4FVG5VVyyGxTcpuEmPDjAGFuGFucYxj53bmAUozXsCWJF4DeayR4EhaKUVLWX6TBqzX7e4TzT4cC7SZ7esnM1oFU",
  "key32": "365cpPcLxVRWEe6toMGujGPGJfPenF8F9VBAAkSGGAwvJ7WcgygGAaGd5JPDDbs4L6FumBFPdMdUPjHcPHniB8kB"
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
