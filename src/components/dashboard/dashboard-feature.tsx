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
    "3vGBf8NKuPkGhY1yg3c6zxwKnCVERJTZbdifqkCTRvszwpEGhmeJzdgrfUkPY7XvqxCuCsRapTFkcfsUggjTuXU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEpYi8cZRz9bk9xQztM9RCj55Q6Ayj74iAMEF5TwUL6HBUjUYQLKux7DxXagw9wd7gPaKyEwCMgcATixmr88P1o",
  "key1": "2XnpYxkKoAfP7pJKPBpc1MmtQFRpYnV2em6n1V8PGs9fj13FMsYY3sDbeyTgu1JN3kREDY5Dh5zg1y8kBE76hG8u",
  "key2": "59YvS7BsRNqzQnsgGpfX5bMVpww5QnsczQzLzSYRt3WAgLjTz5JmNdtcwVqw3t4sQy9khCjmii5JuvBemPbYdipa",
  "key3": "5tu2Kagx92DhpWMrWQnsXUxTwWeQhA7RnTQU9Ry3s5BL7ecBzQCM8yyFN8rqf3VQCNdLfcF2U7ZDpzZ1w1uGEupw",
  "key4": "4W2ZTfEBHHCF633wgkY61a5cLHHwwFgung2Q8J85ednNjcShHpkcKZqRqC3aMogRNcbKfJAyhBLvS2YKdR5gtWJp",
  "key5": "5Q6xadPHtcHkFnhxfqsoUBQHpg5Fok4SL1hutVVi3f3xhHpadxEahQryowoHqnfvkbjgkk9Lt7mbhebhLaDKvVaz",
  "key6": "3QKurvVGjux5vUsQ1FQUEvHEJt57oTvJb7jzodspYeCvQMNQcTqf7q4sF8VdC3BrpRuTTyuQieWCr9p62sSJiZNn",
  "key7": "4TzRqXjfwggbpLfzVte6GA4dMaSp2uX56wBjMTKarkJc8twXd3mR8SsPKgpsmp3ozGXyZyXNeChNyqzH8PUAirHn",
  "key8": "3wMEvxcYAir6ScddN9oChe6yKQa5C7DXcSXiNuaUzDw5m6XihZCjzSaSkbYdz4psky7KqoJUeCo7RJD7VDR4AEcp",
  "key9": "2ZeaVahrXHQQcZvbufFh6y9GHYS9EKck2gdjDjXTi2QRZbnk25GyCTQR4YqpQWW9i26LnVV8AtCLn8i6DBrL2LGX",
  "key10": "4BrrJjdLZP5DPee45aB9fspD7nFQEhBPvPXmqtERtZGD92tGUbCUecEPDCEG5GXZfWu2sWdQCsUEBar1qtvSoZCB",
  "key11": "3KKo22L2qyiyeV5X1Ku86dYrTShjCMnrw69PiDbx2EzxQdYBuvua1hkVs5AXE88nVshyFLuk7E917hy4xdX9kD4t",
  "key12": "56NmgXyGr8sJrtWZujMpaFQdjCvzhVNaAoHqbR8y3mrrHZZNNXRL7amuXNb9wscrxF1nWM3YvfYGisJ6D4Ln6yJd",
  "key13": "7Ph45bzHsWDQizDWnpaGzs8cTqWbLRaYo2fvzRKvMrU4hmC5TXH3c9TLsvpvjHq2EoGZqW7ikdq3txVGJzEWzDV",
  "key14": "4L99K3k2pZNv52uLRTKkZX9VdjYMX9UYQWoNsoEJQc9FNGnZrcrvdYuhE3NUmTJeENGTsRy7Kmoa3DnjgLQqvotf",
  "key15": "4XDd3FdLC46VqL9adPQBUQQfcsCLJdrTCLbyn3kRWqXjTxXPGH7X36LcCpQPJ5V5KqAwN9Nw7YNniXFtYvLpJ6Ur",
  "key16": "3ByjZEcamsCsouFYTV3J8wWGpmThZYSESbdcUjjZELaNFoSrbktoGyLcQfCSoPcCX5cpWn9BVjgZr84qamgbCoWF",
  "key17": "2doaJdkCEgZFDfmPuQbSXZoywEhYr3n3mYnWy81QPASv3TdGCNnkJr4aJCwvBRbvneJcjGNNw68PPzu79Xa8u2VW",
  "key18": "4kprZPXQEwiGrFcimQhUXpVChkAhLVHFVRh9Vn1ukvCD8LgYqV3F2sPwH1CFrVz5xYjgQidiYpwUYoYDqjUTkK71",
  "key19": "TH9wBEw9W57S7fsb2ho5VWXLfZFZi7cNTm5TApmXrT1rVyqE8c2r8JX84L2cvL3oJ8zJjm2af234WpHJd2q2Upa",
  "key20": "3NkZLcGejDG2YBBsa9xTG956cYdSPUGDwRFARzqunfgq2erP1nj5Rju8aHHLiy68azhxad1xPdEkTJgX79zpWqE4",
  "key21": "3QAm4KjqHhwhycRX2APL8JMFXmyj3J1zZqi8UiFDpupHCZe3f3Mk9Zzu1kUG35sSHx8NoWazryA9nD6fBt6CCBr2",
  "key22": "2X9zUCfxE8ya5sQr51TMwUH7bCW6GMF3nvP2oe5uxPv4fCGmneczZGFnyN415ox7M9q8b7U4eqiq7vLXamkiwUyc",
  "key23": "3BBgsz1T86GQtwkFB4i5qNQZE4pe7uBM9yBPTRhbnGJfMyPL6UccuWjDBpsu9wXWFFGQAosqP2nwWD3rUdgveU9G",
  "key24": "2WC45tRhFZx1enLtpvKhYpzU6Cd1ipfEXjaG2fah9E41yViV4pLcz3UAodci69fsUrUc9CJkiS2a1uRriweHwSYu",
  "key25": "2i9jcScQrMbzsCmqmvwSQvN7raw7UHwDxHPLJQtMPMc9CsQuvbgJtrsxpUHGqWBsVMZtpb6pGsiK2d69GpvULWFg",
  "key26": "2hRm4iAqpyzm6j8rmEjRh2Nk1GPejffU98LLgcNmEskuYZquQE3DSig1MZtMHqtMBTmn5UEzNVe2BtekrEZpRz9r"
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
