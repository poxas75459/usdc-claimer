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
    "5hfB5wSoaY1bRXoSRxarWuaMsp8BgVasw2BQQrPLqX8ekWyi5WieKcM6vmudovz1JBS5K1cyR5HBt7SprqtWTpjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvifR5zY7ZxMH62ctvNxz4EZQBUfWbryYhwmCvakLmkAdRbfgTNbDpu3kvBBzGJdRoy5NUz6u8X3fA9Um7JNzsp",
  "key1": "9WgxpJxaQSC4JgqzbG6N8EfB5XEdXyFarBnAKU3NnyNupjnbZWoCXUcrYKHxFVrfrYPn3jcb8yzHyUgbyFimMjJ",
  "key2": "4gF8SqEPhk3xqp2k6F2ZYvoNdfqFXn8eGnkwKp9kBcctR4fWD7gheGtKKHzL1URKhGy9SdVDdyQoxwKcHUoU82qr",
  "key3": "5KeLe8o5dJx6M1fqjPxEGMUDGfsZgDDnmPjkTta5z4qaDhvQpPU9FfdeDZbZKCzb5qjkjZD9KuEKGCqQ9MML3fp4",
  "key4": "2mdxe4w6KBtHXrXBt9fF6PtU1jwY4jM7vVuHQHKGr5FzbZXegxHVhH3QYhpvJpW9ay8BCFpaWa591tKuAHRjQBab",
  "key5": "2ALSNtcqE71UVMQTWuXP8UFdyGak1RzE3wX3okcUZsEmJMaqGa2f7PBTgJ5MrMX7RMLTDKPKehnEZHjXkQBik6ky",
  "key6": "4GEAThNQFgKTay13poF4cKX1bSUSaxxCt7zZ3vbFQyVtP9tH7QCcvyGchEUEVYz4LCpjLcnHtBjQGWXFbXyCUFMQ",
  "key7": "Z7YEytF654n7mnoPxvZSkfPHZF3FQULrfbZSVmvGLKwg5saT974eJyHKjBfVbAqjTESBspaAqXZfG4iruwyPZv7",
  "key8": "5GyRhVjFbcpjEwqG4WYAcRoVK9fKuRPmC9ZWL7DaLyKAwCYF3zFL8BXugDdRWxW63QjcT1cU9S4xewDcTM8M2FZd",
  "key9": "5FNjDRuiWsG9M2jPQPmZGdsWzrozrh9ScGRky5qYNdNu5hJbL5rWYNicg9wvw145MbQP78i5mPfT3bwHkVQe9YVU",
  "key10": "38aPmGPdf14eohg194b1R564aJdwByV2npRsTUsUqEEYQ2Uc16ijtKoxEXnUHpfTKeEZCPv752eHqaRr17rFP8mr",
  "key11": "2vzwmAYp4YhQgrMpLLPgBqoQFXvPNUNvq9ZPCWLKryLMqoCLaKp4XarzfJi8PJk4733Ru5JPgVz6kMxcjDaqxLSS",
  "key12": "2Bw84fxaiXCMHo2YMvdfdQ1WcVEfRjv3qhGKXffVDHe3PtB4iBB1NrBMnD899GXCp2Vwr6zT7fkU3NmZ4pDhR3SJ",
  "key13": "2xYRuYhztcDFZ5M55VNEcUPGEKHruQCp6FpC4iHGfPdyw4D6oRtuA8xTUwjHHZqHG62FV8DUaDoFvNhrm2wmUash",
  "key14": "4NGMEqemwee7z5TU2qtc9XsxJUhWV8iRpieQKWLm7UaQLFY9EszR57cZJPywbBxzFZPEca5zr6CfkBv4ANYAGoo3",
  "key15": "54TzjoMBqFm5CeGjxk7AEPh6hJkD2LQ4zGZJEvJeFDDSNSi69g2CJ4yEz89BP1Ptm8hTzN5pZKcMeXBuGLrpFvU3",
  "key16": "2BX7z5XwHNCoJnpm2p7PFzHicdTQvjYTg48KxFXcnRW1MFdGkzgwmUKi9tHDzhjMmhcuUMCLiwdmW7JT5vSTPRtW",
  "key17": "4iMsqrMbrGc5fV3PbL5RHPvyRBExeTSfcvzs5eQ5vrhYJsgyPNBoqfRyA1eS9uEdbj4hEQd7xD4Fb7aCyPm7QoBg",
  "key18": "22N7qSsUh754TQpEZ4vY4s58Juk3uZS8TpEfS6sTnKRUA5kDNcGYJeKSzsNDyN6vTyMvFTMRXPJeCCyT5XRZxq8C",
  "key19": "55h9qbKZmREiucc7v3fgDVG5npwouAVxy7RsnBzcf7aSYLTtc61JcWzmJ1EZLthnmpPxQsg3YUDpJbRnjJPPZ59S",
  "key20": "3KGMbUuqU48n3TzCFWZKif57neCvdefr6GPN3h3vNKZCtaR1nLmE8p6i9PcdU4AdoPuedR8SAD5H4TPc4Hi1KXRC",
  "key21": "4oPA5UyVpZkB1W8gyhEMSdWvtaxMzcfur2X9eDMP2E348fNkR9zUTKa36qRTdoWoLpvT87zMC4ZwCmvgsPtHtTwt",
  "key22": "2aVFWin3nt6uPd9SzUpwPo4ivkCLSqYkkfYegCAu5f57LiddSwcVzLnPNd8EqCFHptUwdgP73PMF5qMZQcVmqtVd",
  "key23": "2jVALVvgwnpMoyUxx5enFgWwerZk6Ddk2hPjGoNkW1G9HjVyyu2iEiUgyUbx6We6E3tHX5xcRxLFF4J7NtgB1h7h",
  "key24": "4CcFP5qQNZ5UNcQydwXFJhYMvg7WicfGkVgUjMWqZuQLs9Vz3khUYRrkZz2x8qao9dSxXYm4ZDzEbXm344oWYoEr",
  "key25": "2RgQm3H5MeyJ9BgWe6mW3qXYyDqis8LP2qY1c6Uyd2sfzqNnWsDdevxQgacce2ZspDuL5QLwFvLNsjQcfSJPMPDY",
  "key26": "3CCKK2DCtAF1pS5oWzSjmxfLq18hZV2isgvzwtTPDXVrNdGAEGaFFuwyiYeGU5zzTQeT5hFfMXfoKtik9GpTLQeF",
  "key27": "8QCyjTLDMHtJdHzDiQgdHqngaJVjuoyfNEVLgfj4Esyp3F4KH2nss27ZThsQdsPFWiaaZN4qUTA5PZ7CDraceNL",
  "key28": "3Eo7eZnjVTL5QYZfTEU5ypJCqv4qSdxKabBLgYa5poCnLjcSPqnixTqYbERp5Cz8w8N8FqDEwz5HuzPkyYG1bVaG",
  "key29": "4sbazH1HPnKUN3kcYPHBx3bhiZBbX4EV4AvYkxrQgoMF2zUym4Nfco3EJMhxHknpqAvmTT8bYX1smPw4UJiPr42o",
  "key30": "45X4BCrJw4SYYEcHv4PcYCxf1Z9fa6njKL6mhuqoqnPbNgvQddBKBHxekFys5UhqMzDeRiRkBEAJEiDC6uxZj7Lh",
  "key31": "2CQN5n5pKoM7K9e44mQxpLrrnScdtJ3EmGm6nhrBKxuVqfyZArckZFu4yXZ18BzULd58vW81Xs1qLVs2zkKo1Qvz",
  "key32": "3e816BadMxkgz5xxEw25dArQ3YChUvavPqyFFiK1vVVhHfB5YTv1c2DjQ3PU5C15DRH8z6ZihG2qg6S4Z2HTqCng",
  "key33": "4SUnzuykVH58KqqPtxrzPnaKFBGssFiZN2NQyAUgrcdrbBGwY4hdo9wB4FbAEBjvYsZEsCvzptDug8wxKqxspvCG",
  "key34": "2qYE2drHLd2jcMf6Ntk8RwsrAvLQBGYnoxSirFB4d5nWUKRfpyoy2epBT2nEN9s6MhjZmB8m1kkg2DtUpZPEpvaX",
  "key35": "4H21VMnceKtR43PVtcYyypAfFUF9KdYojSZBrMgMGw9ZcPwpjjXSJYMFWNEMyDMLEmNB9SWasqJa2tweBXtZuan",
  "key36": "2dft7g2gKLYLH6haFMUX6Nw1r3oJiPwnQv1jz1WfVWfcuCMv2LQE1vumUi2XPxzpepC1agfx1mqQeokWNziAZDxS",
  "key37": "5AdbFgeRpnHWyTBg2jk4yyFyxQvBiu3EtEMPfCmPXAFLRe6uSWuHS6fQcdqR367C8B3SDjshXwm1vLfE5Mnnht1N"
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
