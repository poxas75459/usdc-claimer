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
    "3Ri8ud2rbKLS1TuZ5oEHbRmSkJ66ReDJo1AgJN6qCGN3ZH77N6UdVHfNdZB7tT48XteDLTjixKTHuheZUqLBf3fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLwK8fEExdHSdK2yxW6G2WTRvX3aGayPKxwCgbqrA48tkhEV4Q1uuAkqcCZRMsAicHmFwKnTJ8GeFe31EBCxRye",
  "key1": "26jCWqsmSvySPp8rjyyCVZ9UDyTWGAd9TZJ1bJMi4K1AufbmWR5QNLSuUQaHSRZPVjHy2wLcxHq1a5yiNVNkfQxD",
  "key2": "3Hhm45hEkKgRxtuHX6kVkgFmqiEFVQrYEtauRNhpGpYDvT3BVFvTVvZghY7YAmdSePmvSSs9dwqyxxhqU15w88MP",
  "key3": "5jPcSLEjhPchodjy1RVEvFPvx6LW9xRDNKNa6dnjcAvyGcrKoAQkB8jK2a15GGv7nURzu1TCAF5RRLVf4RMX55Wp",
  "key4": "WMGbnEWXEww4PKcre6tggWpeuEziM3CMwP4D6uKmyD3UBfExMCqzgoA5twkSqKAc1s9tPimLaq7ofDWtmZJw7H1",
  "key5": "4MyGTSZ7PmUNEEYzAbS1iju5MwSA1KESH3ZFNk6pBLe15ceSaeaSyhDE1gbgPrNyxfx8Fj36fiM5rZJ4H36AF29W",
  "key6": "51ATa4qs9HY4JxNdvrHcoiEqAsE6kArancwjA2Ed7i9cNW7AURyy9NrmJRxP7CEiCSsWdqAeaubam9gvFxzCp6hL",
  "key7": "22pjBCERaKMVpm4yo7KPgFDcDST4GCDGLgC2g93X48YbQfiV9NeKG8XKENioZw7H36d3BykWvcaVX3JtgNzBwHAF",
  "key8": "4889rUbFfUd1iiFW2jZKGmozqVGQ9GdYa3v1XnkjRw4X425oaC1hSXdqnPTU4GJdsKWvRrQLPc4P1kSy8vAq5S3J",
  "key9": "2MqcFX9YZSedvnL1GLfHLabHLH4bjGuN8xW8y6MrZUTqtp4zuT6cmxGEkWF23PJTRh9ffd9A48W1M9FqE629xTJ7",
  "key10": "5ouEFoRPrGSv2Yp68pUhds1dpoGdgnqzcsjdWesyfZU7WLzpXXCCx1RArCgHYumjn28ojBzGb26ouGhN9uwCe7Ab",
  "key11": "4eByka8EAWv3e2rWET3Vh9x9rHZhR83zmLDcgddRaSVHfwK47NE3K4KYYK91JbWxLJCyEucLWgbxjXrdELnMgPuP",
  "key12": "3UjYGWuSBW2eDFaM8haepxLExf7Tk1mb9KVnbbmumun5vP8KKwvwL9Csv8UwFHMNRuWHfky3UR1M5XVh6nogdAtz",
  "key13": "2quuaSRF6n27pyYM4f2YxY421Wnc3X56sxft7JbPogwTDstHSVpuaMHUC5GMXGqxaFmKpurMoefV5VjZVwp7S8ZY",
  "key14": "N4fHQ54VsXCaSiZysENYEdfdjAv93kF8SZCnckDyHnhHUgjui7xaXjA1EFrvpLes3dLUQAiyc7gj7THf2QRaXmg",
  "key15": "xnePhhyPw3TaGtWYQFkjgTLKcR2FCFBJ6SdbbuPVZpDU9TfL4oTVGdVFSpYUGRekwUKeN6fwqdPyvmTByM36avh",
  "key16": "4zhqavjJBtS3r7cFDxWTDrh4NsqLYPniMKEH15LE9WZ91UjjHDdUmCvtYasMnnzUNx1R3TXeqkqkigVYXvJfiC7h",
  "key17": "4ZsQ5EP3zvimj9q93oB3fvWMk9szQAXFT6wAdm2jsAZiXEGWn2whQ3D3TZ9oebaNTSUJCur5kj5f7jgCDvqed2kU",
  "key18": "5dYhfdDfc4jaocUJhqn6UWe24gpRFMVAhq5QvdKbdEAECRBArGapDgcrXDDYpwq27yHtLTxtSNhwvHKeH25x5NkF",
  "key19": "2XNRrK9TuKxB78UQzGJUytdfdT9n7ehiRy69wt8beBh2ZXAbjDzxLN5TFUCu56Ac9CReL9MJBrnAnLogVzFtNr9n",
  "key20": "4dPhzKsQPvbShwnRmpN82sUJkUPcyMunJWtDJZdV5gewpBhkXZ5PMcWDsPQCw7yFVm8VYzawGW8YgK9BH9aaBoj4",
  "key21": "23G2VunkvTqHt6RRKRSwxqseWSaVrGSpGL88LuNm6hjSkgYhtKoGupnpMhGXiWsqT8FS2B2Skb6EWTjAMft1GHL3",
  "key22": "Wgkes5Pf9XSNLD7sucLxW3TstgBj189MHqA1TPWfZndAyPtGwPXaDGhEkCPaynrfETw8WgZQQVfx22rSxgkF4Bx",
  "key23": "59G2YCpgRamBZxtQpuyjDo57TWyfi6zqFDFUFD16bqGxAiLBaJsrSPSfyz4iqGp4VPA3H4D5XQ8C13cFuC4eAivK",
  "key24": "5LLqFCW9j9H3FaHaukoRSQtj5gtt2PTxGXPRKtFd7w4XxfM5K8NEkcwHYqhk98YJ1UgzAfUo9VCqxWMhLELFn4uP",
  "key25": "67qYqfBeFtCqo5Kqcg9g2GHesVUKj9jbZq6kYdSvJTkHiTB8AMeDReezT6y4ntTkFphmAe6s7LPd27brovqs8rTK",
  "key26": "47FgyhAXyMvkmXHLbqHbTjfkuA98VisNbs4sAX5Fuef3T2mZybYMpJk7BVX5jJgyngnrx3MpWJWQVBQ7ERAoXLxi",
  "key27": "2yuFueb5z4nnk86K89AaG2usNocTFPBQo1p7E9AZu74Ubvj4mnsv7V4YHRMKjfp4HzMWjaihWyiVaGHixzyyEeMA",
  "key28": "5fVGoZpohM3yA14RdCPnJdD65qHubvSH7XSDbCPQ1c2XHZ8ZVkASgKBXsKcEDWwLGKHytfK5LFR3Ms6xkif1nbYJ"
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
