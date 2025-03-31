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
    "57QPG3yupMvSMk56CXquTibvp9zMvozNFMsf1J191gBgk15CjkccNMyScYnUhigBgavHGyyTFLkPaXHS9TQF2jTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWmVCh8mqbjey2UuQ6QxNm5ztG3afp8fzNgq2A7TchixfhqyZfSXDACUD8aVZepfT2A4udYjzWcLwuYmkaFNcJi",
  "key1": "2jKmqMcvxabkMUEBrFsmX9tRuPWpYzNuwJ57D79hrrYdsnW1dNM5R8ZtwYGwRDmPXnsWfbKpDgKgMQvUp7bDR2RU",
  "key2": "28FXJh5SzUQ3faq7okzjBzRVXg9XT2wepVqA97pUtsbRHw9DVfyKvo9H976AcCub9x32wb1eyior3xMBsbPXzqii",
  "key3": "59LVgYv8DXcUsBLfPeD3kPLVEm56qdxqC3bi8uU4mDWb1cV13E8gq3A6PB4bDCdxJSB5gHgts6GJc48PF9TcvRJ3",
  "key4": "2dZbYE73358iBYPp41MVD4WnC3pbi3gDfF5Z5K8zx6EPR8YPEosVEMR2Y3RbLPU8LxMRs2Pm7oHQeFRQRGG78QKe",
  "key5": "5dFJvZAWG258PFuRB5J8LJbvpw1h3hQpZME8EHBfjuZubrgZmUZLhzqr3ZL2eBvWzPpsfnKjU72Nj19KfLhpkm9a",
  "key6": "3445VGi7R2oHfChjNxPdKozRKYh5X6V6F8Y2sXLv7Xm6P4fnNd4R7pVAH3JDjF3hXhyBzJryJWkoeKYNn1vRdh2N",
  "key7": "4J4iQhF4418H2MXU9BiAeWw5QLD4NsGXZ3BX2hmB1fzRxVzPUFwBVmpUneqHLWweXWQfJfhx3nEftWBX7sBC5pD2",
  "key8": "NgG6i8JLQ3xCGmUQKeJPSe5DYpkmoZnmFp29i43SexQbCpLspWhnH1X2buUiKcDFXKpch3VTS44Xv4XE7stoj36",
  "key9": "4UnvFizVj3UtiBWLGv98BLtqwJ8CUm1TT9vhQwjpeiiRZ61cHJcHAaYnPPchbBH1PLrpxjebdtjscGkLuTGaEgx5",
  "key10": "uDfhWiUW17SLjSnhFAJqoewF38YtChP6Qt83SiNvkRMttFTthikyqykeNc3W7hck2MYmAQDfgKfHB9nCtCZHhKs",
  "key11": "43rYxy6fpLwWh4Dd9UkJk1gnGpJnj4bdmCBn7LLafyQsZAhZjqxuLE6rqZyrXVSjKXro6LmysZTMAh7DdSjWqrHD",
  "key12": "3587e3ZnrD58s9Y5Y9EyKDM1D6kcCUsAxZif8SNYHmnPxdfquh5pCJkH3heHPHXUyXD3xGQwQHAaUKQR5XFgA4vL",
  "key13": "3VetKwfUzuhB7hAMi1zSzB2TwAMkkkze4XxWQGSC7c3f73M3B3K6NdFQdqM9xWvwzu3fFqDdHyMkBXeN7VxRZ7DS",
  "key14": "4BQPvVvAJvCDNgc9kCEKw2dYtK3qx3uEbBbyZTzzNwQQoZPXdLMPnq4RRUEM4HbEhDr6gHKjQGzQYtEqwiXQwfvc",
  "key15": "vQ7sygRUYdbBCAXKhz13ahC5QCcRjGzYLz2BMN8akLwFS8huqMhwuafU8i8N2dgmVnvbvk5Hqx9xRCm7BtnXVqE",
  "key16": "5YsBuhtKNPWNDG7W3Pe4QwhiptWTw9Pu9dXaymWua3a13FNYFDyfeFn56Zs3hpAVA1MnwWvsGtPqKiE4Lcptmej3",
  "key17": "4tqZpkukLXrUcfc9RdKZuPQSEiTeRxuqGx8S3pAFTyKeKWegToTbHQX8QJsb8K9rgCbBfD3k9RKzayyU7376WsmU",
  "key18": "5or5zbV91iSHNZoAnGi4QAan4wawHQhXVqqTiKDTjPaoYqgBiP2DbLGcLuVGTnvXkPDqzQ3ZvoTij3i85eKAMT5q",
  "key19": "5xTzd81As1ZAGsbATg3qZsbj6GhwncmqiCys9WHechGfuR2gAHBzZoH9Kv59fW2wwaN2dFjDQmdD7umWLmAXBtTw",
  "key20": "3cgnc6ivZ8F7YWqrwYFUgRWADX3qqSuRg8uKzuw3oCgLU36BUfRpVG3RxuPtHYNmRBnvW1gzkfvbihg1MTALVXVt",
  "key21": "29MwRhMjrcmKTMBoebdr5YdpEbDhZBxYvuLjdVvBzBBW5yHwLD9arfQuwAZv13my5SdAZYgCELnjWvVTcqTDy2SE",
  "key22": "5hhH3Ti46ZPd4PkipLYmCjEWg1oeWBcwzzrBtqdUGxkZMee1VHob5N5NqsCSRxZSznYZqdoxdYeZSf7JAvuQazGf",
  "key23": "44FiGgyd2EUg5DqhK6KmEVVs1nK4BegFfjEx2bkpJkv8vgbKKTVygxLBzPY6zMLtY7ZMmRSr7ttTQX51DVwYrHVj",
  "key24": "3Fh6yPJ91DJQNLGJ7WYbMaejbZnsHriDqAvCGfzFV4YRBkLuwWSczwroGMxX71CnKqEg6BfNjyUiwA4efxL8Dn9T",
  "key25": "2tL9XENFsrj33gUkHYXdx6YeYcjCpUTsp5hpQPudTArj7j1stBwQgGT48XUYjV2qKKfdT9fSskRtj2tooRC79BB",
  "key26": "3XmWMTVFa82vR1kG2aurexrpXGvnTKsWqNZDjhHc3a686mFGAJGjcBXsas7qoTFLqoK9MDqnzQjc8fsGEodeLeh2",
  "key27": "2Y2u6TuR2MVd3C7vs8TLkiJjFyjbPUcWLPtzxKwrMZFhTSnNXbjVEdPTRGLEQyrMaQmuZeJiTFmVSdUP5r7SWjks",
  "key28": "5JaGsy6LymsUF8GsnTZoz64QTU4CKqzgfVbKUhDAyBS5UK72yBHgTSbvbmApaj1tWSRkKbU6qj9C9Di9Txjb4BQD",
  "key29": "5ETGBegE59GEgHBd7SayswdHXMtBH6KZFAxNxeNwhemwd2daioJYuYBSn19EmitLePJuiGeWCmcRsMoeEPtFZMwv",
  "key30": "xrjYhomsHBtkuA6TLFEw4BQSZL5jUp3sAFVAbtaTXjb6gsP4gytuxWCuk5CoRnUu5sftzGsL3RumBMzXqwQCoFY",
  "key31": "2twXMCqit9Z8H2udBYetHrt1Q9GSzRAe3GUTzMDYZgX3bds9dKDZN7Lz4X1yXDTbfx5aEUpGKZrke3BYcm3vxkkU",
  "key32": "3giDKdSj6ZziJpKe6s5BZst6gCxv4FJ145F7BmLVPegn5MYepHGB9BCUUSDFBTG6svQDrrNopcbTuhcFUa6dwx3Z"
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
