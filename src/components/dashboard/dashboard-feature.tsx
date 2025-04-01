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
    "ACdZmPA58AhqbMtrrCX3CC4kkqf1aQVrf7soptRsgh6ZKZt2TKvGk2BkaeoDPQtXhsaYSv2GdA4FUaqqaY4p5z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652pQdEoP9TxJ8BUjrtkkv6nXQ5nsY1zHPwSvRuv2Q85PWv1oURjcUr3Mfc5MtuH6GVRCwbHoJnwBFb9mCNX9mv4",
  "key1": "4syvVjjEr9bxo4kBjuQn6uHTfjXvJFNGcAwRvcfHNv3atEN2qaSKDyWQJaVLd1k4CUoi2UgcMRt7a1P9guQJEspD",
  "key2": "2uwF93mVQjG3xaSj2PMBes7aNn5XBz2Ye8NZfTJEjUM2vpAsdEtSFQzksBV1Tppmq3iKK2p421v8YxTXL9Ct2cxh",
  "key3": "16b683hCrmL16XkFsHeMQ9QupvJ99JQGzcbnaXTuQZhSAvqJrVkXQaG8zjYt9iBNnt9rmPedeJEeRdjN6z6uPAM",
  "key4": "tDbCwRHR4yh2FQroJHpC7FwQtnETRkvfEi8upEWoKaGs4h6s2ngXGixDAuj6mNi1rUyXfgBBUrd24Y5yhd27xt9",
  "key5": "X8hPJ6fHyurePuG6XzLmkpxES6Xdv77tLaotmkbVWhQEFotDAdF7mTfEiq7xuv3hRerNq98ArFcyJD2CTg1HGdj",
  "key6": "65NJE66vsXeXDusU74nj4KjCQsNVpkwUzXXn6jNSnezP149iGnneKDzE4TQrXqttExEFQwFfmV1v5z79H18shNt5",
  "key7": "39vqj5Dx9SCWbpaqLcmXxSefTVP5mK1U114imtNMaYLEe86upCLy51pzuYLmvWGvDrSvkNLGH24xm6xyi7M5TQAU",
  "key8": "zd7H331YbwLYG7PR6SeLFht7xJXQuJYiCwvnGW3yPWdYQH1wtWFQuenfFdTTTugNPFRC3yxaZvVMYebie6XuEjY",
  "key9": "64HzxAUdeqAjXUEgRqPAcNBa8RXhZSojCPwZPjSNsEscUPXAUZN7qQxCcugRvJXNL1FV2rmmzebbBUS9Y5QVRhzk",
  "key10": "vWwusbD4TU5YhHkvTgQF5zxqpddBMKuXmKaZt6ee2jwKwLgLrW4thFyyMMYVdhhY2gZEY87qSYLAoqWM9vMB4Lw",
  "key11": "4yuYQzUrskuVm8HtvJQRv8KwwBBJCgD1KdANF8kFvmknRiafsBbhbiVkHYLgsPxHUbmzBrJGjxNnNTR7743LaeNi",
  "key12": "5FdoiGryAbALBknn6EMoDMp5sPtsU52LcPgKAy1Qp8aqnF4tXUknuNFYGhnjbpAy8jg1zxdxx9HTuRtiyACGA37J",
  "key13": "5ERLqrS7VoWYjoPvBpJ9ZeBye9JUMuyko4o8xr7L9syXmxVzGEh4ArNtwZPmefDL8H2kt8PG9HRmXmNub8bPvywf",
  "key14": "3XMb152EeU4vHLbM7yrsEuu6YvF7FFZKv1XjMDkCwwgRNNeU74nZvBXKqMbphvgztaCnR27fT2yNNyMubSbkxA3v",
  "key15": "4TWsG5KQMw6YuSWDc9gvFa5ZuweojtzDp2Mmv2a2HvszVCzvNKyA3cLsKraQgzSG3F6CR1QH7Syh2L7LXPmr3roq",
  "key16": "5UxXrZeMCMFzENbvqquaPSc6gMJtmPSQ7WTWmcxWTTS1zb9rNiWeY7qSb8ZmnuX1J185MEyWCKtFxzMA3HTLY9Px",
  "key17": "2BnpDKXkuwgwxwCqocxLJLNptp6g1JrXrGxBHTwDR3vpvVCFyoWcG4ypqabmcpU4mJE5yoCxjt5nhE8rngtM7qZq",
  "key18": "kKttTj1vdvedDTn3mHEUyNqvc8JZPo2qWh29VdPta99YBPd9D9pMv7RR14RwCTDiPu2PQiWoGEmr6RjPGBvnekw",
  "key19": "4Knn4sGwEBKMx2fXmKRm5MuXLn5uu6yHX98Q1FjGNVN8TYvbiWJd7casQKk9rpqJXLWRK78kffwZoxjhwsys4KUP",
  "key20": "dEwZQqBbavswkxKUJg5UdNG1qMwtCdNMNLb2RzK6YsjSvMamCuNehZ1z6HLubVkEtDCYUXjsCoUsLZy7MmvFghy",
  "key21": "2mMG6B34i8PnohpwrLbFNLwdBAy7jxo7mabYLdvT2CNwwFGWScY2S3wbzvj7Ti1iHPXcHNZDcuWgfNUNXX9JVSFH",
  "key22": "wFBdm7xL6KsmtT8N6KdYy31SANVHFy1VejfX9iz84ksStgcJQnWbutX5fr57xmR76hR41MHsh6MJQQCKGz5uowD",
  "key23": "KPfZyzfeop4xonH1YZknQNAkpV1HSYDAut8m6E5xMEqS8mwUV3iB1koCN2UeUDrvRjCEifbFtfcTsQYqgs3hBpq",
  "key24": "225y8UYef9KwPgLANNHdKAk4WRCWvRtWeGMWS8FCqK7PpagoTSCGWySVw3wUnuUMX5MpqPuBYMR3Pi3KSoKJ9RQ9",
  "key25": "2zgaxxaiBQZCBWKfPGvrvg6g6td1HomsHMceoi7yW7Hg6uxcShBaXDLydbQ2suAc1PHswM6q3H5wdbpkwFPoJvXY",
  "key26": "Jdwr6ZKF3GutDD5DBMXTKJcf3HgySDqgcjZjsHa3TCgrF1axzsX1xuy34nTAXds4W4VzGcUR1HvXx3nj3h93A57",
  "key27": "49GZQpvtxYb86tEB9vcG61NoeibqgSg3QLzmBbNqRbPaTaMNXhsVvYZcuueHk2Lx8x5u8FCbzTCDMA6e1YTbbCYw",
  "key28": "127QsWbCcWb93XMQmUV2xS1zB97VDbzH7aLuCEj17K7YhT2TteqqbrPz1hcnTnU3oquTfbiUB2CNyKKfvosQXaLF"
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
