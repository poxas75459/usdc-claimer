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
    "2bRrJjGiPK6s7vqEnz2LYYZT7YUsniXbjawUuSi7ErGPtU4vAXS9M8eWpidmsZBaPqFBZbZaRXdRp1CaFQRUp7a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54pTcoHGuxEXCGpArPV1ooCg499LXNc6ut6auZ6UdzgfnY1iYpb6Pj4r2P5QvyUpT53vab5vqsEKcAs5boZKVWAJ",
  "key1": "2wQeX4JTVigRnuAFR1YNkKdtcUyqqAFztXN9JfoFqN6MuUq5YjBCxVTo61dHT54C4qPRMcJBSXWYvBSByA4eNzYV",
  "key2": "2YezdAxcEyTARTqnexSPZwPNC1Hd1AA5m8wZHRdXsfWM4C2Qpg9aQ8ddunkmRkJ2DL1vfnfJADE8j9zJ7p9eV6Vq",
  "key3": "3xuAAceYZiHAnuW8kaLXnTenwLkGxaFKejjhDqxft9FCmejhYpkef7MJuiQ6dgTmgKpyhfvTYdMwNp3CjCZJ9rMp",
  "key4": "3ivYdAK1cGYQDpNRBYakktADiaddmZt3jw9f64LTz7UWv8fTkPyQuJbAry3z3B6HFXmCVgSRAXG5m7vsxJv2gPUk",
  "key5": "5JWqZfJqRqkVUKAvELgw6CKzUW6RRrgT7kDcSaMawXSmXg9ZMKy4AeUypZw7PTzHfu8xRantGSjSszZxrQ1VDXbC",
  "key6": "4HxYTYYbyzKh84xx8CWFttj2Kzo7Ux2E2tfnQZv7hRuCqiGSPo8gP6DtwyvERVWQZPrAmMg5mjB1hotiQ2CxTsH2",
  "key7": "33g9WzpfTHKtYdjsrMiqZGoycs6fCFMLwMGJoGPz6e9BpFnFxEZAF3pY2SeWQHf7dTkGRdoz7aBL5XmX6Ab4LR5b",
  "key8": "672wDAapH1h79ziNc7JYFauAeWVLVRWgDFZ4ajFXQjQHh2PwkXMZdv7GDc3mfNWwWKLdm9vtFDqEXuDQssDXqHBP",
  "key9": "2TCWpQaGJ62UNxEpVBpDVUpAG1AjwYrCX9ci3pLrkN3cRyDhbkMUUhJdZMEAYKG49akoigD4GcKScDhh7u2t2RrJ",
  "key10": "5pZx6KW338qzJR3hHK78C5WcWpHHm2ebUrd1LFG4nYc22mjNaqVXwub16wZNo8dAqEVG7rCuqQFj96wVj1DMbkKr",
  "key11": "unUM3zdfvmxThfBFTioyowKfmX9eXrV5fa5JWxzXayYKtNwDd6cSGUFkrpDdxbzSH4atiFLG7Mjr9VVC1k62jtH",
  "key12": "3JbdRDCsHJBVTrtfSk8mvajPBLE6KZULei3S9uuGbHCrbFuR4Zc4jC6kzGX1FxJzDHymeDxMs4faGP68suMrZS2W",
  "key13": "5iokbj1M8ZWYbbrAhdJ5YMX1aUBK5ec4vwsAsT8JLf4Di9gU7Yd6R7DJBGpivGSYvgePuTajP88nJRmp9A6YiquU",
  "key14": "2gHgyhwMp7MeBRYYpRr3JGrGBRT92N8HL9qFPd6txPUno9SCtFicpdj2onNQgFY1qA6kJrpx4EZbrAotaZvExqRW",
  "key15": "yMuCp4vSFhNu3eQCiDpVZTQ9dcoTnTecMXep6qShNsndkGzb9zsntu8ZJxtuEE2kksT5uRWvjdbz56X3XpDJaoG",
  "key16": "59kKZZfUBwacb8ye3SnGHRn6Vj1xJZ5NwirZPHsxE7XTH1nBzCMxNjkAGWXtDcJwXMGH67NzZJkn7UPSBQvibajd",
  "key17": "2eXoJRM6Jpaf7Xd5F3CcCLaraFAbeTnAW3FqAWpEHQb7Y71Nkzm3xBfokkTaCdCxG2oSU6F4qnLbpyA41k76ZrX2",
  "key18": "2DFxRgDsB7HEuf7k3U3AwNM696uDinn1DgoXaaaxuJAtAXB67vVyDjhBv1D65f1t1JBfmGzr6Wk1Sz5RGUBD8rWW",
  "key19": "2c4yCpGTQ4DsAhQdKztxPvAa2HNYr5fJiec7UqwgXEAVissfUZeMopm3eDug9XoenwCMeEpUjwcXFSrERiMJXuqR",
  "key20": "61388WrthfHRMt6mHRW1qbm6PFQ7aqaoPFFBcyWNYmnVrhutVvvUFZ9edB8iZdQ1hVoj4HYVSxC7YeFnxWGmvrWm",
  "key21": "3qBwMHZi1Awxrm3gx6yXCNk9vcr71cqQfrEhw6inYKGXEaLvDoD3kmQtuVxWFXVEbTP29jbWsSMrbHnn5XD7jLbt",
  "key22": "4VAVJgp6j6Zuy812opt1qSNYsoV7hy7qP4FjeqrWuFYYhps1wPvN9VAux74qGJaRbFspFFnyAkpkaDiEjT659Dmh",
  "key23": "4KxWKfV7Yj8JQu7kWeye2GSSE4m85AxyvxcAUSitoAsg1cv2WxRwYrmvwwCokRVp7KKKBMjbmVti9q7jwzXnivSz",
  "key24": "8KcegtrS9RCRNLK29UqWXAmfuBw854e9Nig1qCqr6h6Y2zuTdwcQkejnKZ5cXb4hXc2cP1vXu3KruYpr1eyxtg3",
  "key25": "2TYaUjThmwfGr7gVyNtAZS9RRfS6QzFaLTJEnMnu5aXZKK3hSFMK8WDaP86eiwiN6FyUBEywdnxERS3ww1jUdTYQ",
  "key26": "5BucSYdd1N5QKnqGJgLqGKtrRcQFKZ7pTjeJHCB2NzzmL5NmCuRGvYftAZC5k67WrbD3FfH9ZbAfUyJBMphVxaD4"
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
