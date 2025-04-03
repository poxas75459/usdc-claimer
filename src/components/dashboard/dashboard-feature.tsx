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
    "2tUYkgv7MfVeAw37tKDCChq2igkQRp6vqvLPrN7ncG6mcEuQ3pTFeWxt16Kbf4uZ4vQHD2YHJUBeuWT9hHKwUPtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxYfLD7CkxzRL6HywXQBDKhRXUNrY2uLuw2MjLdvCpAWoZcMGVDi1GLJfUhEsYpQVfSwWoQknpfXyyaJaEbZdGN",
  "key1": "HJ34qG9GitKXxYPhCP7TvqBM1kXNcGARjzTReoMq26W9r2Jbv1Q7kR7DDMfUTUGKXomY3xtXiKeotUtFPBC3kYA",
  "key2": "2ocjjdGcqGWgT82iCjk24r7s8xn21GXUkC5W7Qh6jh1P1P6XMfUoRtkFGymcrw9CJ4r5uPQvc6qqTe4tuGJGG7Gx",
  "key3": "5VzYoeEA4sLK1xoaZMBAZ1RkTgzU8qP9mjW4eDWpwxVw7MC1GAMVtvWSNdjkarMpSw3DZHb3AjpTiwwv7GfiMDN8",
  "key4": "5Rht9qWhi6uPLNGzdEkPwLeR3jDvt7MoTcUnbEKaBtgnMHwrH541gM2qNq7zjbWyiXgirS1e79J1j4DXhvwXfgkD",
  "key5": "2D3TjHiPjpYFWUB1tQJvLrqtkXcdJiViTq3iUFzVz3PirKyXR1mVM1WLwV2XTNdUXvfHWNPcNDGsPfPUDg3givgv",
  "key6": "2eSgJN1Sd3VxmycumYdrVuVXtGQqvz4gMXF4rdonzLHczsfadNuz83qvk8XhNMwb9heyHz1MLN7CgiNZ2LqmqnYw",
  "key7": "2EnyRBMtDCJngPQwofTy2tGSHBrPMDqVNmnN11RuNgJqr9U5UznFW9BufqMobN2QBxN44BwUZfEQ6oSdQYMZnjKa",
  "key8": "3p1bWW9xiQaMW3mSgVVvTNV3VyxRiJ4j8Aj3NadJ424eZypFtzta8XNKrSGg3x17eM87FMFfNPgE1tjUheUpRKHM",
  "key9": "2BMVTyQiDwELpnR9Dg7QhgzT1MUZxmsZsVbbYLiw2TAWM5qermyGqZiuq9wsNE4PxcfUmJBa9dVj52gzaNu6GGeR",
  "key10": "5y4w8oE8bDqxcPCtuvMEHPmf3xVuzDqXmedmwctaTqmp4QZFFFKwTM1F9CH1jRbdP9DUEQhKnJ6jVfHzaP9uXZQX",
  "key11": "3tVsLHE82hwzErbw7hpdv4bjYcekmmGu2jTo88RCT9D72HkzEXMHwqRbMXF5Ww2sn1NvpfT3skviGWciJgFa7PZi",
  "key12": "5zLJXjEiKUfXSovB9mTs4MpsyySWhcrcQbzVmCcmehCg8Hcc1WVjLgLFBpriTewUw17eqevnL3btsJY6SiPCvhKS",
  "key13": "2YrPxErqv9EdHFmhiFmU264yv4WVoKRWJsbSzzwprFd4Fdf7NC1DZmDwtvuksiuVrFo2QoxLcdNsGg9eYrpt4hqJ",
  "key14": "4c5HNmBAeN4VswB1czvJMLWbiSnD5zeWkJutACPyw5AMfvTaFoSqVJvQHPS8wqWpJnDivCe7QBBFigEYZzbGPB9g",
  "key15": "3VyDJX1KJvAoejTVj9gZQzwZoxHoxDQBsAkCyEiTingpdMQpSpEHnG6hNwaEBtko7z42KvDsJrGQQDFrioE83xfC",
  "key16": "5canwkaMuYFNtViTf5GPsVsZykL4WstpGBFHE67DeEuoKHsdWmtzre1TYkAGiRyvqRrUD8NQMney2xh3QUFKBmLC",
  "key17": "MaWzfKuD3t4BP98Liifnw7QiBCpJhYkhnTcHSS91z5nDUaCDnKE1YYJgLWWT2X9hsfEHTWXoGUe6VMzwBDvQvLr",
  "key18": "4TRTz8bVxov1tPqLRFMd6pA9YPgK3ds4GKXWf78rSBbRX6YyzCdj57jjBJU4xT3CreFCJ4y1ZcwLUCGdhAUqyd9c",
  "key19": "2qjcwwr8Jz1zuyJXLfJaMQCoTYpx4w9i2o3gGGRZnobXSB1m6Ex7U4tPth5QQuLK4SuDXSfFsv9kXF5ExiH8TdgK",
  "key20": "3jfjnxQaJyGetUS87rSJ1apvfb9L6GY7yJcdCieMsWHQ72qyUs9vYtbL7iKFBnNVaPBjNUfx667qD5JPaMEyQqgu",
  "key21": "2vgWiru2EK6hBiBZStMmyf8RQQLPMwDmJoQtDYqbSp1cwVesrSEmDLfLtqdqG8nkjXkKu9CCFRqqhE6gM5MCQr2N",
  "key22": "5VukJKjAN81isooY77GnPZzBvy2h33K3KqJuTjrSFX4Dkbembngd4oDMY6CF9Kq2bX451dTdy7DR7Qp6X26KyZSz",
  "key23": "3gfVm7Vt4uiJQ45era6zVEQDok4orBtCQ9sG6joL49nG8DCBxcphc9fjWfLrrLAkXQBwwCewr5ZTpg4urUfjsRyD",
  "key24": "5RM78omKr6rzdFvxp7qa6rPWGRpzQi9Z1gFiPvLvfRoVRR9cDF7uyQpniAFNYSgjHNiMKaHhvZdpH5CJ2d6syE3t",
  "key25": "5sTVSavXTUFKX2Y3Mk1ZCGn8MDnG7ZVL92kVToYqq53GLeUmK52aUBECpGhqg5kCrYEhJJwriUCUmvk61Sj95LE8",
  "key26": "5gFZFhzZ4tXU7fvB1R87bToEUBv6PHmKrw1hnYu3zUtWy3r1iYBGqgpEjBAqZEcsqPpRFVD2hgN4T9wV3vhw4YNr",
  "key27": "3q3AMR1nWTdr9nfhpWFUHXjEeuKR2bom1c9oSLKNejMnjy2zaGWZRDff2FF92ej3T37EEpFJVyvYmyGzuE3vAF4F",
  "key28": "3nV1C6xBbhWSiuUSL1JsLvUdjTrHi2TQRyWZJrGrHuhNCYN5AqyGZLSpnzW8k98LZtf43QdLUnDSqsbGxpH9AWJz",
  "key29": "3h2mzd1hUtEyucNJAab1s5DeqhfeH3EiGEmWxku8QBAmz4nohPHogTSAC7Uh8aRPw4XQKJw4Vx6yvFheJYJdsNJJ",
  "key30": "325JuPViEKTuCZp4oVDA1dMb8LEY1cBkfGjxjfenNEsJPmKjj3sNpvebYhUQN4t132hW26xqW6WN6fYmwEvnPQPW",
  "key31": "3V41SpKQWcqRMy9KRcaKQxPwSRnoNKhQufVR9D261nrLHTJY96aeRioxKinUC5NsTitAG6EKRWyE5voG956jHAHS",
  "key32": "2NLrZKx4fsY75FxFrBsFe2gbiLy8wninGTMKut4xeaJzhCWxTBQNVmTqrXEz1Vujh4CSiP5H2ZEbtSRMAi3AFckA",
  "key33": "2fBZc7PUVqiShnt8xfADN6aB61W8rAZAu5QbfwjbDF5EUpm6BdoT6ssgEeqEWeRJXaanUwF1NsxX88SXYQyQXbEg",
  "key34": "J8ZF1FNsr6sbMcJqiJKGRin7MdxFJfFBieMejBRVCMwU6kydGFptvt1iRncehcKbXtxrtuNYkEYXnZjTUaEvRtd",
  "key35": "Si8AV3faggRQ7GbZnnU8AAWFpivRjVvYkHrs6PWhbp5NRKiKXdvYgQk5b82B3f8apsWV1VJqWnfeEU8n3eGXu5E",
  "key36": "3myY6cw4tBMbjf5JTPz9kB5KkD2mP33eMi5qPT8Suw3FDKYaswUWgJNHNWoLkiUgLbB4ZUNzvzyh2zjLLKUThZzn",
  "key37": "MDVPWvfV6e1zNheZJevKXGVjNwvRgkH33WA8RrWU5Bf9VrsLN5P3GiBsqZPvaCiaP6WRRSXSJBV3V3AK9GoHrmh",
  "key38": "3mJrse8JHupZgggPasKEe4uG4dhhwkJbLSgZakrBgPg91hVX8JFeXju2cBactsvEpJTXWSaafEiagAnaCHXE8Qp2",
  "key39": "2Q3v4TwQjSRM3qYCDPw7oDoLeC6XwX3LuzMJFACJXHLjeCu4D6XVtAo3bvWjA1LuZVN2rEwJ3kq8qU9FgYbgDq2P",
  "key40": "4UhaZEz5F1az7N4VAi7yGbHEL8apCPdP5sLvGyxq3KZmispfghVVVMK5RPDuS1Qqho64McsA2Pqk9dcDEdfAHcJr",
  "key41": "3F2nWjYwTQxQmdSyfk9xRFa9iQDzUzcKeLFdErmcoCujZrspeQ2ZjLuN9JBfQfZ3UadhS2uKR9Ush32JQgsf8dJr",
  "key42": "3NzQuZo1Ju9tzuGuoxh69iQNkLyiGbCeLUxJ33emHGxFwtKYQhEJyeGEbQiVTCkT7m7sVsBNtJu85KdnY5UuyUXo"
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
