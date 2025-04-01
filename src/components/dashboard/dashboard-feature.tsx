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
    "24C8uvNcLoo21sz31PgAnAeeHzP1h6VPYAep9CZ4615Qjkt2nkd9UA1haeL1twtUFUV3q7H82sMAhyPwEaXWdrTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GdT7Er37Xaf8pKHF3jdU9dLezc59RaDCZzwt4fysSb9NVwHfzRYudBdnUbLEwyfuYrZ9bFbVKmrYyFGNVdDREm5",
  "key1": "4yCZkt4cDkXuAfWdPXH2GpLbVee1GSiYoeEu9bBkHMwzjby1PuyHhXKGb88mSuRePqjt37zdGFKuGFBqUKgCC2Ty",
  "key2": "5QU3Wt9SksnUHrQ4s4ff8HYJY7vRaQHQrHEiycJduxrxuN2r5xkG64AgjgFyn6j3vms2KfjKuiusHCYoGXHpd8YS",
  "key3": "gjpo35DgHVDCHFswM4HSQ1c4d9LoNePGf8kRET335ZwH43PpzpvZHXfPMoYVGUYxizoPBbgkE8PK4UvahK4BypQ",
  "key4": "2Anh5fdDgRRgX5wjXmLb9F1WguQ14MwrmBKweG5Kmsu2EkePLpGrPto7Gr4GfTcMxAFoo8EgxEbRGAv3V59VFW4i",
  "key5": "5zq9nNcPPK42MbqsFsEPzXUhs4F7mNSHJnZj3Xo8pKq9cpLUYwgKZZECcYvHfExTXBsEGnPuiA6s2WHk6viQ96cx",
  "key6": "4iLiJNpBmd92nCJXiQ5LQecJwcE9BNMU3u2rDZfvBdPvNtDqvKg4ECof4TP2M861JswXyakPeCziaqC6rYj4Bsb3",
  "key7": "5eGnHJZ9ExiKkSJFU7JQguvYgw2FDjtKRSTBCx7gRu2V6s8crxVJGg7GVHz7WoMNa6UcTWXTNWK3pxoqQtodNWPh",
  "key8": "2tkCPKQkstYhd3nXUGmDbTY1AohpgVi2XtpGZnTCS7bpfUkzPinbXwkC339xJj5jZgpSL61y8T3RAdvxMPDfDEV4",
  "key9": "5qzjriHHLg5HMUWinh7bo1w62ZXmdDsfnFKsAeN4EWxy6YDNo79s7tXpTskZf1Yp3E7oGdQuj3UeBbZ81fmC61uy",
  "key10": "3eLquJqDh6e6r24bpDTqxUsi5y6tgQBeD5dCrjPAuJZAcEyuAByT23sSEdUuxoyp7nW6n56CNt2qveFfBqEhKCzW",
  "key11": "65wbBYYDyVUaxQibDqsGFqpsxXa5FydBRz55BqKsD3uKKLQP6sZR1KUD8MDazmuPsFChFnPH4iwrnJpcuwQQWwEe",
  "key12": "3gqW5Z1DhGBQT8J4jGLTYc46fNHz7TZVdV2Fc2JVJyaS4BFXS5Gg67BKwNKrzb9sWvxExDq8GyxtCNAmERRB7bkF",
  "key13": "fHbG2B2uGRHRbxroaeja9rfg7zD4rkdY1Vmu7UQXDw1YMrnyXb7Kz9qrC58D7qhyCdYEWgnsQKK3GBAkfc5Bvoy",
  "key14": "2jQrycXZtUfV3X5MxVw7MWZCZXrnBDt6jRwmafpgGnZ1P5uzEdPaHEdniPYsd4TsJ4mvfSKvGBFa7yPEN2j3uqJh",
  "key15": "3VxzQDvwfS69koLhW9ZDCdAw2WztNjFgEwdw3HiTkUWGNjR9zUMtqej6xLSev86HyaMcgPE4wEHLxk1jpHpFic12",
  "key16": "26YaovJkjpR1VXr9ip1evrLtZ9bPVE6n2ez5GaFMK3wSAbWGy6UEWzMcr8Kf1tvbfhfesHCj8FVM1Mpr5e72ou7y",
  "key17": "3ozHxc8Xek3K1SRZyqvkhBSSAqEpyzRwaY2j8piuRDzt2XxitbTJTgyv5Aozry1tgGci9JnvXC4Z5i3V1JxsRq1X",
  "key18": "4wAd24o14ZSHxFGtVkz1jYA4HVj8EqZBFjBxafjKw8aodBtBt2Pn362FLwi1CLwkGSwLApase4Lt8JdJ2j1D1kC6",
  "key19": "3c7p5RL2ifgZ17gF42cHjeqH76tC2HvioQqhKGJsfCGFCuSkRzWKwQ9i4zSPN5Y6t4mrpYx9oavgtzWPSki2wpYH",
  "key20": "4L1wdi3cyRi32wCZABroTrQxdBqhxkXHrhynNLEq42hFMD4nAQU2PA1ffzvDfP9Q28JF5rWrfxNznquPpmqXJqN4",
  "key21": "TSfb1MzEfaDkH4WbpfLxTJpdKJW56mN2E3uXeyL11arhSmAAMANWU3pt8q6FG9JS9a9AohG43mq2eSeAKRGCzKG",
  "key22": "3N5esnuXj5P7wHtpbJNq56Ve6EWCsAH34533i1PbYMcFoUFLiyNgr2kLuvByUHXH7WE1ZkaGLTssZ2tGq7H2R5c6",
  "key23": "663YTq3Bjf7fNi7r15gU5EvUWjeK2KJ1otMd1d9mYqJw3a68zCcy6m6PF4GUdY2KYpL9rDrepKQicEFGXwbaSGHw",
  "key24": "3AzoH1gi6UfX5W6fZbfA8f7vCyMBZwFfUQVqiH4yjWXTAYrT9gxzQMFDB28A8zbXLVsxEdm12XrhgZXpboKTao38",
  "key25": "5j9u86ErENMHLriVgMmTyKmeXWvUMHtKWKTaswHrWGhc9GM2Fk3vcy6uc9vv933LyZyjEmEvC9NAUismQ24VoeNW",
  "key26": "2PEGdEPeEYomqWtyTLkjnTb7YMFR2Rpq15UMm7tijpSQXuKn4ENYdrukq5pif8qaNbA5kPz4E5Z54fXAm7Xaqs6J",
  "key27": "48LZFm67mr5j5sQUvm66tsmocdw2kjW5DK2Uzsigi7jBYdoKXxDa5gtuj1skdVSDujG3GSu7jrtuue9vsFRtaJb7",
  "key28": "Qwg3S47aYJ6MSyukPSiVa4YPEXETM5fTiTv2kN6fFBbdNrBjWf4mwVdhTQZuDpouLxThZvNiuEVMYUkEJm9HNVu",
  "key29": "4hCfYFh5Q2EVwSBYcdg7oaBFYfDUudx75JwEzyj5oUvi4CLz6koePVvG9fmGB5rd5QS9Gr3WdcrUeRZw3qYC93qA",
  "key30": "3ye6cmhtSi1R6H7PMMRLhrGWKVoUboxx278b5zAXAYk9NwfLF1M79zuZNk5fhF7yzDX74dFYU3BFYkntusgbiTMM",
  "key31": "3TnXAhziHGcbnTfUXruzRy9cjH9hQwctZesAKVWMT5EWhcgcGnP2ss3aYcSbpH8FksCCojsnzV4rnf4Qy26iaeiW",
  "key32": "3LkcQv11LuRyzd41PbjqR3yye4sq8gC4PdxLpPbM4vy87xPvaJSKAKrzj24wYeqgNF92pE1q1rewfkLs9rW5LpcG",
  "key33": "4fpUQmCYBBXZ7vjdBpgHYoKbgDUfE3yBxgASiNXRT4ebsNtSdH59iMarE8BJntZRdrkCDD23pc2ah1d467PFTJNa",
  "key34": "4cx7kBnxQo1CCwHbUZ9S9aWvb8nEdRc4DrxtBGAx4EY9nNKGq4MSgENrvWRvj7XM74tgJFkDsMLk4WbewqLFxSj1",
  "key35": "3mgcavQx5wRyYLy6xRaptKjvhaoctn1kvDZNLQ1ZkyNWF8G9iMjhowdrsV1mJYmHVwGfuS1zPgc8yG7QfK1C4fdv",
  "key36": "QCdFopocxaZyRuFRW4RyrmVY4qwrasn2rxKXsvxzPD9tYfjQrhxBYTvCpMHVkNMCRdfJPT2FTUCjvRZk4gzpNPr",
  "key37": "27sVrjcjD9EpgFjrui9vSi29Nafs5wSMdYusayBUsH1PnmGKhnrtUsTKLtNfXZ1GBRLw8pGve7bBEGZxszQJbL2u"
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
