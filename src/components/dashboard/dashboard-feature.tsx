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
    "5WP4f6M554xMmvTbNqj5xf1gZGyAhoEGpuDaFDbAkPT4NxZs5BdZ37C7Mp9jFhssdNXrNQbuGuAYY2LJZwKntoMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CB5D4UfUJKjprmzVjqEvRoUVCMJ6hPmtLrFwDBV3TWh5fF1ehv9NEfoHFUopur4w2wR5xfKjxeYrzMZgJ5QvQGb",
  "key1": "3bmy5utXYFsHQZfDneGsRhkjcJJrqWXz2TUpbHa3FhZKTKx435xQdB2BMtPRcEMHZ9whUEZvXfkJ1qeNb6M8TnpN",
  "key2": "5x9LxNhsnxf4gJYKuGJdBmZSrpbivSdJJqU51TmNt2fX1Wa5QM9PJhD4wvFuxcGHZZ3hMoJj1UBeWac4gHT9jefU",
  "key3": "4mRzUP9PrUkChHyP1iadquSjguaHygGPdE5Zou4XTdkSGoGXum3yJQXL4zYBdLPDRbLnyvUwAtHFdsZqpVuRdVXp",
  "key4": "35w3r5bYpD4pRgrj88vX3qTAKzCwcSQUJrym5wnWQwGpo91onwAtgEvDB3HNvcmBzLpRCYyTekC3JcQxmQyoiqHx",
  "key5": "3TjYsNxzsiVogETwp1wZ46mTWiFFmnnDrkkNCCAvMPf4AScELpsf6nT2EuQMyefVRGukd2g9yg2KRo66ryZUDgGY",
  "key6": "49eK2SdL7MijbBGWjR4DfcajoJwgswfDdJZ4Qz35t3UVhbpJrkLggzUDjwnSdeAbCKBDJbovvQFJPJLCp3QbtyUV",
  "key7": "37ZWCy9bN64VCYwNTRchdaJSq8GqUeiAwmto2XaeUMVU8vEYgmdAwnC38JZnVCE1ewk8txJS25KW9Q6LiSomRXBg",
  "key8": "22jeoNHvWYqookq4kmGhyaP9uguwL4A8rdEH9mYanuvjsYgn3jHDXNFGAaKQNAMXZNFJ3Z1hrBJycQ4rYr6PB3N2",
  "key9": "2QPz87rmh14aAHSX9jAfhMXEW3Bz4t8kvpqbqejrSy58ULyGxa6sSFfzoxrNWPSVk4Nd1b2h6qRe7Rb8kZ3F7NEX",
  "key10": "4MWxQVKLvKzEtP7oEyW5MXgqoFLNfq57nGK22m6CcY43MdkvJSGGynR9ELQyojn7Sbvm8TonFZjHCZggM8pXruyX",
  "key11": "3qtxTGNy5pkw34qo9S8Wun1jdhVpgprKQgQFjcZuTewrws4xE9k4WUe2byL92SC5hRfxyE2BQ6DJ25323zatn67n",
  "key12": "5gfttD5Xb6TM38gdsELnLdoMSaedFJ7XM6KFcQNkXtAT2sLdtmHrhei95o9RBQrz7jsyZbP3utf8jD2dWMaAzN88",
  "key13": "2aFVXPUiRscZyDUJGnu878anRfEvmT4SHRdS43P3owtMKoBdpvUXUxqiZtErwFfXZo2C2yqaw4PB1yVjSGrGL9C4",
  "key14": "2LnhRedkY4tf11ztWtpTntGojaC9ht7BZUUb8rd9XVdsafDEjvMVM8cRDbyXxvAJ1pQrUijbwAPqn6mtKnvj9CL9",
  "key15": "359shnJ9PtnwvZ3n2GW5KXnAnka9GKJKVAWx5FYUdK4Lv59CybrKsp2ze4ozy8EXU4jig62zRHBJBTGuoBe7NhRt",
  "key16": "5NTvssDroZZwrk4yEdZ3B2Vx5NQeD9UnzoFg8RmJ1TDnAUaYzHZvtNQhaE5YbHo1A1M5q12pGsRrp2xPxSm3f8fa",
  "key17": "4a9NZMcR3zNi7rmNnTHexDouB2SdzdgT2VWUwUN7hWWwjqtHqNZrTBGvVSZzGxBEQiUuKWVxysF6PCXBctPyPyQs",
  "key18": "4BZpDwQSGABGQSwhjchRYjoKP8svFSoQPTR7RczTsy8t4BjaYsCxqRLbMVXXHG2f3SXrhFtALWLNLZx2BJcHnjh7",
  "key19": "gKs3ydwW5gSEv2FSzdwefHDB7CCTr1KWFq5sQv31vMpjCxETtTyScF3ajywrEYuMLTHQdFw8cb5UkxDRfZNxp2S",
  "key20": "5bVwG7UkzhAbhftBBFzio7Xg7bjuR8R5mknWyWeRhcn6a1iRyLSPy4PQrTZxVtsfvnZ85gfZYGnPmhc4ofqdb7Dg",
  "key21": "3wPu22JvZAmiwFW2RnXVmZgcH14acrX6mG2XPQgbmaopVZ6vvn3CsQVRcZ8TZ3wsSq6KZtjbmR3mqtPFS6wVxJjQ",
  "key22": "2BzUqicyWxuRWNyWTVbaK2PgurspsQy7jq2tVJgh6rFEbUbnWoB6fKiiCzt7BFnuwYBUtDbPf36oSvz9kyXPUqTC",
  "key23": "54i2DPJpKP3MEbByvkrV3NqXrqn6RFodcwfY2gc1HYDGLVUgjLCALXYtzRSA63wMbFpZTJsotH5rDwH8Q3y4NV9p",
  "key24": "5guo61TztiJxtCxS7n1bgrFNFfH3KrRYicJCyxog8e3f4hGPYXM4ikM51vjsQ1XZt4gaCkvnk26PM2zh27KxZEEE",
  "key25": "5ig8U3fFyATZzwozF7RViYLLSQyGhnxJd3fE4iV6ArfLn6SCjyRueAtmx3dMLwq9L6beGXyzNJQsweHBdS5MUm18",
  "key26": "4BVo87PVuTzF49FxFt4tdHYzqkXXHRs6G26UUmSJFF3TLzx5hr3zJLuTSqgiuyPamUWq2RCBeCbD48EAci66cDdp",
  "key27": "24Er1JgJzuGFoz7vJSkTp6Yx7jUJ4D83mPwLz2PjohCS4hjnWt32BqV8wAbKKD7N7viKwWRskEZCeNptkTchW6nU",
  "key28": "339miQet4PxUBB2E6odpnvCnEbG3sYDBEUkfginLS64hFibfjzcgxNwP2UCBRT6pREKN9V4SNRYEfdCwMBu5ZvnF",
  "key29": "4TBxQsSigXF62jVfiJryhieHbriQVzayarzsbJ1W2oVY1B6cpN7k6UchNQeqjrgVaisoZ54sf1omdTY6Bc4pr9pH",
  "key30": "5hQCj1atmxLtuAqy6oG4xE25J939GMvR1pkXu7JjZsrYmMiAww6w5np7i2M7CDNmUK7vsjQaTANQKUGDwzo8crcG",
  "key31": "wVb1jLvB4auPvoFzwumkssJvguRvTQ5SuqY1SsdM3JS2ZthziDdWHU9zFcT8JQ44BjQKSghF3YARsHitA5HoekC",
  "key32": "45faUyd2p7GRPAMFxprzA2JWqCNNQFmCBG1qKJ8tGgJuSTMVQiRQQWBHFddXcZqsxQMaUeVuvKVJnmf54F7gbjG",
  "key33": "pwtBJc6XhHJ4ZRdBME8JLjzJXHmm699bN9RPvnEDTDHSrYWpDWe5p5MgXMXtPi5tEK3uCoPdCa6fsgYJc1mSDwq",
  "key34": "4fJ132WGoxsPiGnnbnrgQmuVKmvh6dNvThDmJ1c5NLvSqQgUrtLEGCcWW3XzVrWyaBdhJGZymCwuQ62jecaSGygB",
  "key35": "5iT4zwcKBCoMfGwyXeHfbqK8NJewEwCriTjRvw43aBjjH1YeXFxf3Gn7ZzF2qogtQtadTkq2RjJpWma5XFxqSBXG",
  "key36": "3PQDdjbgpgrwMtSz8S9o7WA5PEtsiKaEv9d9F8gGAU4DNX2wn383Zk9Eu4JuMkzAbUVTErsZNapdT75RPUfL6LmF",
  "key37": "3zLeZximPHVbu6dh9XrAZ58U4hDtoUYKHPRK1wbw5u5MnvQgg7zLEdXMRiN2JVHfSJMCRsqv9qKWZ9L4NWjZJgj2"
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
