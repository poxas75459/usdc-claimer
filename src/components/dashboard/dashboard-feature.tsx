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
    "5w3Y5z8FEbFbvzawsix9xvAzx5BMy1fV3CXrrEfQLWCAeJoWAu6g2Uf3yBbz9VHx1Cgc8DH4PCAQjpMoPmQ1pPW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SPgfQwYxCdtdfdJNaXPdREhbQ8EddT8WPbRHJPbyAk8dar6iDwBXUyCaPoFWdJgD1DGs56MHvMfqW7tYGWtS5L",
  "key1": "3QLxx4aQWZssXaqjw38WGcpNsf7ZxmmuKUGzXCAAyLcpSWAL5yr8Z34GsiEy5tTDYWbMbZN2kbosj6RgLHPJxxfL",
  "key2": "kAiAoybhEqMn4xZmxWkVGHrjK84ixyh1FHisNdyNQ8RWUdycubE2dry4bnLbGtvp58xrEXShRVFbhSPu1HQ5AFK",
  "key3": "38XU5anLM8H9ruFixaipyxpZf5fqbqAbxzsgseERLKcpthVsVw8a82JKM6oDoK37DmyKK4YBTccFNb6ybz9xcWw9",
  "key4": "4rLuRdJPQ7k5tn6H9jcporyJ7daeVJma112fkTagykWb6WsvX1va9YFd75RY7JTePoEHUUR7XUHPR3tHWkRW5q2o",
  "key5": "5eDA1qr6fvrA9iHRYoKSRBGh1ua1YFXS82aJoKhbWugC6PgP4nzPt3RgH86uFVb3gd9LitBvQUqPWcqqgCebzpk6",
  "key6": "5pJnzmBnWP75BqZSuyQynfa6xV2cuksGk3vY4VNfKwWKGhtAAxuJ2SZ6HaM2iXXyWRwjX2JjWvAkwzTfgHW6kCZH",
  "key7": "3d81q477pBJrCqLXtBrLxA8UMshtdrbLccxmvxUHZFcCupXawwAnrmyv7iRDfExjWobv4KA4qofcj5TXWfNntUzL",
  "key8": "4u8wxFyzSsmeTu2TBqRRuyiU1EhbkjH2vD4oCMFvUCNZk4c8iGCR5Wc7bNaZ9nCkMp5HfRWXovDcsuuB8zpA2NZb",
  "key9": "3UmmUpkdZyvNnw7pA2ceG43KLBDFea4Ui1qFWMhBdhNzFM1MfKx7yfR3vaCzxL7r1sZbSsWzrTDiNYmpuDXPDaU9",
  "key10": "5igbWan98uwu6PY2XoZTncKLkREQo586bdmCfijdkMatTzsVLCiYVAk4M6w6NCHKhgvwvuv6oBpSP57NVcPAj3fV",
  "key11": "57CT29HASQVSSCAorb1CnsS7jHRn8pkTz9urZLALYLVJXbb1VbcUCNCoVDpKa2aNdQ2mFPk6kCwZHGQCL21kKJeU",
  "key12": "2FbRsM3LtFYh4eQtJxiju7w7UsRGB9oBNpZ7WLSRN7vXg78cHo1fH9xmEMyRQ78b7m5rv1ACzE5JSCciQEcCN6gV",
  "key13": "3au1vjfML2NsovFAztBKDfhuhnwtsyePTjo4cxBe5EV3fekxDfQft3SGki8Jj4gDPtMM8diXHxwUmUZjPATL3xJy",
  "key14": "LNmRBQZeaveXED6wv76BELvEHRod6RuZiohap3LocLiy98ydrQZWVZgXuqnoiQfHCHUDMjUxkerG7RN3Smg8xmL",
  "key15": "2gyV9BVSbaqABuWAmUo12t3R9B3jxgvhN6SqUXjbZ5x5AVV7qgc5HZDrLZD8z1vF8uXYpf7zJkEhc4Q9FWmZYTqB",
  "key16": "5M34MUjiGqYrmu2DQDeNj7dpgW4Nburb4N28emsVnMWcePj1pWg9gWtZqL8c15sdKACQES2r3GTSECUM4vqZaRfZ",
  "key17": "24BFAzJ22wDVqziZQ41fSvCbRu1ZvcCsn36MbbZ4ELGqN8L9Kuv963VWH53WShrzJA6ZfRvELSp92uLmFjFczu3C",
  "key18": "53eJJAugs9uJXL1asoGeBasReeFK6C9Ge6r2Kkuih6mVzxmMubVqFLRRgG1HBghJaz9UsEX7nSrLhvVvATJM8sP8",
  "key19": "4otTPMDj1zvq9kLuo7gzzwxyC2GCUQMgFNGsg4kP4Q1qETF9U6AucwsbUpLCC8v2CbfbvXNsjfqXxbxyA8DvMZfF",
  "key20": "3GPgTtumgt3qcmUoUggmG1ikkC92msu7RpJZuNCBdXaVyees2FVS7hH5KiBT2uibCQ6yQR4vj8shEdr6kp6TDH88",
  "key21": "22nf7zX2ykbGVxfuX6weurJ7WecsN5LDx1btY4hRauusPubsfAck2Jvpe3pwqUPkBed7sfaw8wndnPYpBn8F5wVp",
  "key22": "rSb1S23ir7u7jw72GMX3fc8j2YwrNQz1yEt6rCS3yA7gUKvHTeGx9pfKw6nk3ScqZGdnRkECJxXp7e8hGkeNZgb",
  "key23": "1p5uDUsMUA9mVEt6ehpXmyjmTYQEfCnRn7G6JTypw1chN2HpBqiP5sxEyJLG4NckCVcP6gjAY83E2ZRi3spf4Re",
  "key24": "fZrHL4LoQDibjfuyUKJ2HGfKxtbgf3CqQqMKH2ohUtXb99vxuHYGsmTMDu7yoNUcfYDykkvGscexatgbDede3iy",
  "key25": "4ggDLs9X3afkGuq9aDTBBxW9wTuUQAqyrNXEhe2G8jQiWMrXd6EFG9Sk7cH1LEN6Pdds4NSgXrQ7fLzwc1Zo3C7Q"
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
