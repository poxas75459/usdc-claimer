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
    "5a8uFWFkTcZFhAqfnCzwF7z7vB4SQB3KeRWnzaMyu2nz4GVN6fbL5PqQTp8veCKPMRPqxYHsjE6wY8Y16craddKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wR8gjemVm665ymQCtJCua6uoPXDCXrEDByvEQFTVVmY7AdyswhHtrsqykXDqVt2hZwHe8YTLVnWRy1T3mAEP2T",
  "key1": "52M4xg1Lpean9PYPEdBYXYg1umpfRBTvqA333GMPtHS2aoZZwawdnDhbyJYKB5Bk33x7uLE8TwccK9HxhnC2eTXH",
  "key2": "5HCiY9fnP2e2TqPmNUfRGDbec9g2W5mNherYAzd3kxkb6uLYHy33bdXPFp8vmLDgwAUPKAZtpqk7YwmXx5wPQYzo",
  "key3": "2FEPt2wGAgxwiofTdSiKNNvveEeHc6yqTr1PRgAJVwEb2ze3vGoYEwy7n5acqSjfUEwGdRL2BiwCXpRk7Lghtwwh",
  "key4": "4BsbVJNKZAqaJVjMjBryk6CSK91UUCUR5XF863bGt1CMf4CW4D1awEx97SLaqSvkPMX5yjmNMrmMrAfB6A2gbTJQ",
  "key5": "5MTYAVBKcCYsG8kV5xXiF1qq26JHYih1F9tabjZ178bQKoRomV7SrcH8kFS5ubmts1bwE78N2H1cELk23Xk4wKTr",
  "key6": "4CnLrXxWWpghkSBdW4d8WBAYppwDh9qxd2d7N4BWiG5nrBsKSGY2XSPwd2oHEepn5y4LqrDtyeotaHFin2ZCjQc4",
  "key7": "2PT4eydKp6zQa8LFmGV9qmDW4bx3GuHNqfFS88dNZTYZJ75Zh5Q59oLk6vYPQt6yVBWmf5B5184sLN2dZu7ZHmr4",
  "key8": "4QNiE3pFPT2x1GrR8oDZPR5VEwdJEyxVL7oA4satxzPr3rpTvLx2M4CZo8V4L9gVV5w9G2jdxujtgCUC69ieuHwU",
  "key9": "5b5nvoTwZigpFzqVMkkUZc5UySRvNrUjAM2BuxUfbWkRYPhUxTokKhF3i8F8B7TUCvrYhghm26FqufjR6hRTcx7t",
  "key10": "4dPwECdkSBATwpg1oMNw55EqAoNNzRo7H7Z1DNQvAgY5DszkJFLPxzPJpaGLYiuNxxiv4iuvuR9NTPp9v1S3q5a9",
  "key11": "281vcMA2fq6TNjZU9Zb4Vw82k7cJueRU1KK25xhP5dZE2ZFdMjx8vHSNXKEc989fviRDbrjbRS4GhM19JoGe8gbG",
  "key12": "5trr3So8BZM7AsHDSRUx9ntpschGqNFgKpqKEUuFZ3NL1WLfA2EemvBH4sGWoFmhtfkm5sGSyWvys6XZNi6c7bSo",
  "key13": "58cQMGjMx3fErCh8SfJYTejck9k9qNqrv1b3dr5cLgDTjbhTGWuSaerzTNMi2cWWD1sTXRYtqrCHEtqdmtVqfxGs",
  "key14": "4XBNH7iT2Acso4rqgGofwRPSUCXNJPmDFXtEBLBhCjhqd27gNDwq8d6DYnMB3Do8ovVyijp3QxUC2qTM1NuyNyKR",
  "key15": "5Rwn5sJ21RKmzFQD61mu4HKZJEFLUAieMy44FYZ81HSfd2bohK4dfaw5VFJVCKMGkbdEufTTzKzvht6fiNm3nX5X",
  "key16": "5asbgVqWZsM2oqZK2RbYDuXuxcueauzhUCrV2psozAumb48E9vjt3bQhgB3xE7gBUTetDtDxcKoZT56MGsjNpasX",
  "key17": "3xVxaFeHvydyHemQ1z3PzttsNHdLGQAhXcvasov2sCieTZbxe12VhjUqqEToF63CJXBkLodNSyjNPnHS7a8xc3Wi",
  "key18": "4vDHoNwV5Q2CKj3BhQ7MYUgShVvzVKXVdsgM4k6MD6HwnqGicZxqhf98BGaPG131xrJWHkHZTdScU8pvpZpX5KJT",
  "key19": "2wK4DR284q9YAZExTB3Ut7hGQ6jkxSDw95NppvuoujuFwiR1MEHbvehLa5db8APEEHEeipUDcSFh5RVdRWpwazTj",
  "key20": "rswR4R7AgsoGmzEvamy9vgwCYBRqJD45EvTHovH9B56icfBFi92sLSdYUPmg8ASaasw2E3BrHKsbV118sDrWW26",
  "key21": "3PKGVT6feas2zVJwD7HXx44wcJYnqPg2BsbPkAyFjdgAXMeAkqSexgA99gD5TKLkojmkKmm6XYAsw7ftf6pLMgLi",
  "key22": "41fc7CXzzJF2RtY8ZXnckRZ1GQ147jJQBKfYA4KPMdM23tUXL3qhtJz9LdGJ9wQmSB337WxfHUYhFrmnXDKY7yvT",
  "key23": "5J3hinAP7QgN4FHSzJyPsYjj4sMufRV5bZUtntp3KQnDazftDezbsA8UFZxtxKCdrszTkBmLjCNJt6puFi4vnonM",
  "key24": "5jxYWAAwjhx3J3kR7Dprk4NugHf4bz428ajk42umzs4pFXfNPbDXAAnTdS1a5kKaHKmoqj5dKGtJ1tgq4usngN9v",
  "key25": "2mEBPTQzGguPV37yUZWUkskNBVXpBg94n6gm27GakgNVPCJ4Pqt27L5pTkGkksZCHHSQ7tZMgEhCpHWVagUpQZ1N",
  "key26": "5LNPPpgH3Uyk1DsmyJKtfEiCSKQKTzG9JA6MJkmHT4kXKXBJoA1RuZjhmvVXYvBCHxY77je4gQQY8bdPdRsJ59Rs",
  "key27": "4YntevGZFPwYaDrjzAyRrMwTAAeDLM9CAKSUbER6MpSZk5emksDAj4riQFTko5Fujg2YA9iQZUFucyArq68tqzBy",
  "key28": "3fgUfLwBNibBwmvfZ8S7LpQqgnQRx69zxbPNskY1oR2YmdMRd8DEbtDWoka7KVCgyvySEtNqRyRMRtoGmvcYv5Z7",
  "key29": "366ZNCCFLQ8bv4yHpkAYbc3bGfoo755cViEBCGwSpZsQDvT4aearGNvCLB9qM9HZmAFmzVYcX1oeYj7E22dAavDL",
  "key30": "amLBEj85JzP29rkLjDhdJhXxNryiBnfXiwsb9UMQzG37SRUfJzusSvaxetzZcc3xajJzGd4R66QrosArEPmGsYb",
  "key31": "4ry7xEMzRaFQkxocxpVFh93FgTzReAFHS47rX8YC8M93iqsZFWvVXd4JnprdVnR15BFzktPEXGTibXGE4SPv7QCm",
  "key32": "2eEi93u98rPfRK6B2JH1SvoZYRrkXYWHuGSG4qZrZ9gNUAUW6x6GJsNEDEYbxQCVxQ7dVxhjsZghJELxU4dJGn95",
  "key33": "SjKR7wUvqAFeavMACe6DSgKNzSZm9NGLgdmcqLBqEMAdm69svSCHoxdRep8Z9tJ9kTU6ajm4Z4yqa55Bib6wiCX",
  "key34": "3iD6VfHgsSM63cGzhXBsYJkc2ta4arryS1zBzJ2dVjqim9Wr6XuZ6GBNCLCbgzvDswXoZQTUWA6h22Kggcd7iEWm",
  "key35": "39XifRq7YZH8KGFXMef68PKx1LBt5FJo5ghDoWtazWG611Ss25MihoZAqcxtMiKCjCdj2JPo8VNDBEQNxWUuMeuG",
  "key36": "3ss5fFKvjpyPt2P9cotzPwqxeci4Sh9ioTbktyu8uHpuAsM5DEMZLZhG2hvL6uL2hrUpySn7PrXqjygHbJCkiiH6"
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
