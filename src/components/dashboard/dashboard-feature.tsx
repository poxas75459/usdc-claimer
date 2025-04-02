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
    "3kwxnXZcHxQQjzMVFdwbtM8AgWU8zaETNfTwfnW5ECNcmu1mUMWea8knvJzDHfMeHgyEsi9Didu7eufQN3oNyj8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "senaXpx6TzxeSPBgZ3BMA56jURKHpWqSnXAxP2kU889hL2WfaXd5a2Ty91PqisrkCCvfp2gkYLrynodpdua1Htc",
  "key1": "2YbGn84KCXw7wHQ6wKrcKKm3mwqPkPGyoXAkSZCRfY1jiXYX1nUhhKxGBUY898faiDxvZVxddsKtUCsMuFHJYiZ1",
  "key2": "49Xnu2fShxFaefxEv1CYh8eksThdzdqftoMdsh53TJC9KSumq9n3P19K6KhQDAxQs274eTVJMnAqvUNCvWmoyhnx",
  "key3": "4NUtoEVhYG3mvx3W2WshgSCFHwwQKoTzizjfMnMDYFkJvA8mpqXxE7YY7b56qNqa5MREKPafb32jW6UFnrydQ5Le",
  "key4": "Aag1BjjyorYPTfGAsTrmp1rnQjycQWEhUtT5pYA8CSbCcREGRt9DoNQHwbwX2woYxx6ZzjJ9QYqc326dd9QTMNP",
  "key5": "7J2zY67VtxaoJoEQBCz1GNuXtUfNjCTnvjqGaNAztt2NdL4XxtWWgbLLeXhEFSRGxkTPCxDGsm4kNnW3PkqSfUN",
  "key6": "3i2p8f8zPnPLFNYoj5B9T4exNT9sCNaeDwwbNwUcRFbDaQoyMJkmzkq27MA8mRR1nKyb6qQpb9jypcSJh21WTLN9",
  "key7": "5uWzUn8jLwpb3rHHaf8zJdJjEaYJWd3pkYhU6VfNdQ14ZnYw6ucppwUqy5aAA5mZMUFNpH7RGBvZucRqSjH5yRpZ",
  "key8": "4CyZ8TyCgweG2pZZrEU3xhgBShn4MnufxrSTi5ZVTjdbz9PVKdttDmyQZfWHWYZmyFo3s559iTZxaVVEBnRdH8e7",
  "key9": "Ueb7X6G6bcW9gePWeoL53hmxdM6PP2kGUtWSKGNQ7hPHxNwz7Kij73r5mE8sW7HUSZuC7imCYczYFWWCPqXC9Pe",
  "key10": "277Bg1YqqQpdxBN4MybEvGWgf31B9UHWEAm5v9nEU1aqngsfiKZGfyCD8yjHnkEaMGKBGwidUtHyfcYU2R1JXsF1",
  "key11": "8RebYu7EpqPHvRxpiSEQcLyLsToeczYd7bsU5sgc63Ay31bLDWgvEg5K2KnxQGGuPAiUkSyzp82cKL13bvC8GKU",
  "key12": "4wDTHL6gTrEe1JLjtnJa4mDVhhfYjVD4xMemuu6QPvpuR2NHtdKzfZFq5yLiNFGgJVV8mYHSMBqc8p4wrTzu4mX1",
  "key13": "FqU5xtgpJHKvUVbpNMZdSqFWufRX2VvDXAQgjhZQw5R82rBaRNdxnKbgE4Be3TqG4eg43djoQRfaeFhudMsiB4Y",
  "key14": "2DM62PV3caX6pTDsHJvw7ef8xFPUyEgnsuHuVtpXzttSstV43nNrw8Jf6ZnaBkxBtbj2KbKPLfHwKqgDD9Dz4YzK",
  "key15": "5bW4oy54vjxsN9Pr9vW7wV5KkhRN3eJQkw9xuo85RXygrYBm3X1grKQ9J3mHdDeLwd89wWXv5fN3tsigwVCwZPVt",
  "key16": "4KX4E3E33rjFSWuA8jZRiX9YCcxAsfopoqZDQG43N5MBrfZiWfZdKm9yWnnVNYuuUHWGbTRErqYdpsD11TGzQpga",
  "key17": "38hfDKzuU8i1uJYgAehiW7YDN3xuR1AQ3fo4cf7eE2XutKQCuQngudAs6H5Li8JBTgSva1GdPzd9JN6tSwcayP2k",
  "key18": "4kJnCbgggxWUVwFQzGrGBEkbxBoezjCYwqpafZvyiLZc9hhw3Uygv1VdotqchQtG5peRXMiJjFfB62JDjSV6gWrQ",
  "key19": "2JtDqGY9UKwM3A1mqpfiN4EC7idSx6DkmidAjiYbKEkYT9uJeLWRe1utDD5AHyXUse9NvBQjRGmmS7U6HjRvd86p",
  "key20": "5eqLyjrfH4a9y62CLu5myF6qE97MQkjMr5MiT6iJrjdANfVFkg9Ce8oMVvKUFrFpSfTY6i2kDna6MgbXp2SRgRrT",
  "key21": "2neWdjuh8GVTcCCHSmcEWhjvCtM6h1XLWJJw9ZKmLf3uJ1nK47apK6g5uLAvsibj9q8cKe43TJcp6MQWYe8gEXms",
  "key22": "3qwsAGfeXRebgAc83r7GQ7Nv6zbbSKNHcgQyaGzpyRrkCCfmj3ECerKQ3p7fhY2T1MJir1Aa1Ygn4JJbkGmzTLD",
  "key23": "5crCWfbz33UMEDAFyUKAG6JRjhvUjWbGCJowaicHBL1hfaVzNDmtNWNXAJzTKe7xiRM5vgu6aD7aSouQ4JC5YG6j",
  "key24": "3Yp5963qghx6Zh7xd26ZWS4oY1PGQeZ3T6UoRkgUCehFLamp9aYg8bFnxZXGnwTfW4fmhDJMcwivmqFirMPbMaBq",
  "key25": "2PcuS69rjdeudFPFCqdHiKGMhj988WFwPqZibmLnmwBd1SJaHzbXfo912Vh4skzKR65Cmfd4eQihmkcUYXGKsosF",
  "key26": "Su8MgU7TfgpstMV3CpkKAKdtaXWrTBMzjL6wx6hZ5pcgWchFew6waPy7SX4aGnpfJXujWfjczEaRVkNS4o5cvoR",
  "key27": "5PdgqeeauEQYjVVnK7qguE1iD5i5GVj5xXTbMFHDPNy6kENgrpsYPWssbGfFP5pNMaAT4GLiozKEaw2wWDdZJE1x",
  "key28": "3awhnUey9fNqqXcmu9FqAwGcnN5UBevdRrke6xTKeDLEfWR7j8tpkBsw5qXpkVGySKbwmhD8sgpWrjgfZsVUys35",
  "key29": "3tpPNhX6FufGtVsHmod1MWD24kxVSQdCTEXQ2ujJwWmsyWp1LhxQNnahNMSkaGvzNs1zA5rKqDcHpxkpv817GtZd",
  "key30": "FUnzoiHPcNsQ4BtJ6Y8v1qdooT8MkWrvRVxFEuGavQ3x7eP5WzYhuqLPDDAwnkzfZ1nhokaDxKQoyBecCDuwhXG",
  "key31": "3b6rKryhoiR9889Dp1MZh26gZc2pHuNpbdcZiubBZHKjWZVDZGRkSm82VkWUxcAALQ9WEbhpZYjDuMH1e5Z3aiEV",
  "key32": "4pdGU9hiZv5i3yiwVh6us84QCwkHffP9FZY4omyURwP5No6cAVe8FfVNsmd7tEazB7EtocWfFJEKpEFYnm5PdfPG",
  "key33": "3oyB5xkfkPTpEiAXfkxpBpApeJiubNnpfZuYbQRAagtA3parLwiS11ERMe2QU8STBzs59YC4WWhx2CMfcSxMVw8C",
  "key34": "L2DG4LvsRieM1PCy2rip35vhfgZ4oNHqwL1QZ6wJcucuPX8XYrbDUsS9x3KmmNUAAoXgn4NdkDp3sSGzHqxcKih",
  "key35": "41x9PdXo8oAYHG19xTe45zFZcfPz5nygqBpJDWCjxiGPMN8nWmH9rLrFffVHqhnmGAuZxCYvWLXJY6SaPeSuuMyf",
  "key36": "2RxZFtz9NUR1eShh2U6oZ9GrEmNfBUQdNTDFrAfFzt9ygj6L3srsxhisvt4eRE3H7qhet8hL6wr4qYLsLEzMzvEv",
  "key37": "5Jft1KUoNWMbjRwGgwowLjTDFVjjuLD7C84Lu5YSMGuJMczbAPFjoM9UjeMsD9nQef7JrSg9eAF7gmPZv76Ft56m",
  "key38": "Zcjxqy34bxJkZfe5rGQ7PSxWhRS2KQ42tb7LqntCcJioXoQw1GzWf4pTPWZbnSkRk4UCcAaVmcgiqqTabqgsH6a",
  "key39": "cM3o6PNCzi7Hv7SiCGDytE2swMBVvD3ABGNV4KtnDQjdi4FqXTiC3HWFmnM2rFPJe4A1Hg7Ntevzo2z3pGCPSTr",
  "key40": "op6ngBuAWut3MioDQu1V3eeGb1caVEroF1F5hjGMbdC82u5ito2eJFJR4QmLtYBKaFdLjHGRkRqUiAtDsif2FDd",
  "key41": "3DVSVR1pa4P5PSj85ZirU7z8EGvFrjBmD8EiG96Mva9Nh98cpK35nggRYQqJfJ2g7A23JLYNXN4GKa4XcZQPnoi9",
  "key42": "5YTKQB178QYhdiv9fiRVKVDG2qmqKinnshbWrgE6FqPYzn55CnKvgNAzJxGws1WaEGVL7un9S1yDvrd1PqwzcEek",
  "key43": "KWVk4s9KDg9nJiRkfaP6WgwuGAn2tivMECkzE5RjASE7A3wYsQ8AsEtHfuXaUtGdYSFZjHGFSNKEiTXNCAenshB"
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
