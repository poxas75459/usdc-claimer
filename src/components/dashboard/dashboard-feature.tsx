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
    "4ojvBMqEDQadNsyyzVzTgX6vk5jjNFcrvTCWF1vLdpB2vJdwQ7Vk4RcuDeF5GWMqxZnEJpizHv5SMUtc5tD4fR4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9Qfg3YB44YH7sUBDPJSn46PedqgG8pduDcfLLW2VnTADVMGX9XS1vdm98smaxy2miJ9HDEHXHY3CrSE5nmoeVV",
  "key1": "3TGgVP1ywyXShnd3RUQrtn8nC6qgnSyciuJGDK47Jg6g4EL3xdFYXDpsAQtzdnrG6fpD8qd2anpjMeRWu6J471S3",
  "key2": "7bbBa8NdUEyFXQfoQMzVsGKuBLR4WBEggJ1dMNyE1bCA5Y68mic4YQaNQ3tk7XXe7kWxFSm2breV8P6JcrqbXE3",
  "key3": "4bbGJBf2VSvhUtZofW9ETrpamHo2f2QkbNpno5KmaTEuu1yoLf39BuLShQd4C47WBUatnXUTfFbt9Jj5Evf45uJr",
  "key4": "2ibWhhuYv2JN2jHtWZR9eENh9YQCrp6Bi2E9PUknP1FMDVAwYqk7yPfr2MQW7dA3muif31VpqR8CDfRYzpmJRgfg",
  "key5": "51xmmJCUGweWq2cqGozWopJiFoaJmHD2qr9jSMbBRNxgfSfaopLczzVXWDkmcUcXodjuxa1NukD7vR7LnecWgdN5",
  "key6": "5khGmhaiTsSBLkVQvHVaTngyJ3TGyPCfbYJ1jqcrx5D33W3tShjWKs9c4h4EAnPrwsUJvLQnSfdqnJvLdpMwcCvH",
  "key7": "651LukVYgwTjA5ox6CkF2FJddvfCEMEgPyxqLps4vbEvNxSaCmzi4kAE7h2Sw3UwYMJQwvyq14QXV4UDQrBLhTPW",
  "key8": "8KSY4XRLhUzPTw4b8xemBPLQKedEP8XSZy3CX9d4osbUHvNnuymcwAas2DW5i3SNiEkRRojuZftuUbA6gDWb77i",
  "key9": "6xgtRVm4AwaGrRNmTCMi3fWMzXzBnWnyJWRLvG35q1iEcrm5UxQ5unbkC5fmZfuRwbE7vYbcJ8DuZ55f4BWTap9",
  "key10": "3sRqqYFknK4uasU7JmzfGL9jaqMRE3L27J26V3Kp2BGUEcJkbUmPasMKkvd8UpxrfPUzfmyDa1LVufnbYFQqEvtp",
  "key11": "2mSPEDVVZQWui2vWR4mmeYJ8x3L87yNoBHnsvom45v8dVmhyjhFEaqNdj1zzsDSXvZTu7mAqCH3e5qRYS5568AzS",
  "key12": "2XSbwhetwHieTfB798CjuYzxrqqFxVfpDWZNuD2DNLQM5DgYvSFZSejN6tjgUwt4U1fq47D6u17Hvs3DUukashdf",
  "key13": "URXsJcDabRGF5pBRtUMx9sLNpAcDQd7HrxRveZZu6fg1YU2RD9B41nF477XHfcZt1nQL58DtpdYPYExqjFvJCCA",
  "key14": "5LDKsUGzUwmNEUChfG4PyJgHnqgYVGbxhLcUEe74KmDSR3f3mDG4rXQBDiLkXZpMNdhReVjhqgQ85So1HPwdEQ3X",
  "key15": "311vscLEsJmncsqRFiY2oFkrGRAoYc4EKR8hdutPUwHsaUY6Z3pNFS9KEQ1NA7jsxMBVRcqADwzCemfQLqB8bieC",
  "key16": "3FzGfqSc85J9w8wxdwsMS66BFjj8JiH8bj1bGRAMnVCB2JRXpKZnYGeBYJdzKXp2tuvZzXRweaGQ34UFmuC5bbMv",
  "key17": "59fmTMAv8dBTD6T8dw8ZaaGgh8kPXQhks8co9FDCsKgkqCHavKRa5Ghr1ooh4La3adVVdsYorhZgjEvmFAtCWKL4",
  "key18": "4kZPoW4EfHTTAHF2wyU9hmV1vsWaqZkfESjNEfpgsyzpsq4YMNEH8ospSjnWvBVNneetTQho3mG6r93NxcYY9prP",
  "key19": "2qPRaaoHic8iW9ywXQRJLHjP4v5sX9fAtbEvN8LK8rSFJsmuXCFtAFGrvqxCz58BHUzZwtg7ZgZgVpnwcUNdJ9ky",
  "key20": "5W2JLosNjsqeCdLQHuXbqxHuWaQWu6UcdUKL2pPeCXoQSyPeZxbfNYFchf4CzZBQUyQeHmDgAbmrtCSrd5hAqnoE",
  "key21": "3tsrP5yUbm7rHrFCy8rftCe8W4oBL4wEX3Fwd2ecc1BWFusvfguK9BkTS1GL7FcUWrUHRXkq6THNvzKm3yvD1xRA",
  "key22": "3Vf9YbsyAqMZrNyx2ZbtHN8K4Fu2ZiCLbPkf8w2bs4KejeczCLaGYUoGaaB3dHnX95TS9a8Zjv2BfpsvxqCwn5NK",
  "key23": "3e7Xge6F2mgQbMXY2JYRYtPFQf4Yo4emEc3AuezN4AfCyN3gWiy3PUv5cvCyGkzx84w1UB9s3Kwrbfa674QRJGMJ",
  "key24": "5r8X3THUDeYUupQkGtyzQX3oiHSeBEaZpnDR3qarCiBTZRtELB2yW28wuksrzfeLpbFiFVpAGHeMnP3Fy6Dmw1SU",
  "key25": "3p95SPy7FhrdZZvP2QAi9w8XgxEeyxcfqynfgxhGUnXNFdnDJKSzEHVhJamv5fTmSBx1ZkaEVLrCa7aPwAecTRDx",
  "key26": "29wxMfKZs9cGJW25c44QPSyUtg3U3PVAA4sssNjd7wRvzCQfuEaxm9DNQFsSVxXc1Bw2nfR3HqUG26vGfhmbKHW4",
  "key27": "2UQdTKUrMMCbcdXDEY7rW3KEYPgGx2Srd8sWwsuL2b1K4jSj7Gqic21FK9KJeuuB9UZLsK8WFv2aSm5EowGeK1qg",
  "key28": "2UCNhyKbM5Y6HPbW5EnB9KCUGgtxM1kVwo9hDVfYngbr82H5UWD6CtLFasLCjkAoNmfWqzeGLMDw1HuwfRifM1Go",
  "key29": "4UBq8iXgJsLCdCGBnKPwZDmTVBqJmxXHiUipe2QjCx252LiYXm8Fuuv7No11g5L3iWhUjjHwH1wQSe6QLG7byAh2",
  "key30": "55dg3txX7v9gquUmS145H8aLA4751vFHqAnxzRBkNDg3vd6LUWEUhjmcV9BdstnRPrR7YRPtiWwz2rVEu6Gx8DU5",
  "key31": "2HYb1VTftMT4j3x1B21SPfMvq7spVvc6GEpQ679VNXn5fjSsUPME5f8oSyKRq29mtJZZz4GRGWzBgkTSjBSFJa8g",
  "key32": "35YE1L4aTDzSnd9ddhRDQJBWjdsZBzKywVH2TG9Fa4sEjKcpig7KWFoTxRgdsPqnd6eCL35eWvJ639DhaRwU5sB5",
  "key33": "3YEY91WuHD9ruBTJtxYooUhGYohRVVKgDhYQP7iMhX1XRTwpmWzQhmzQ8wwX3pw9irHFkycNbHHXv4NCzG22bkjQ",
  "key34": "4u7P1B5S2XMFc4DYcNMYfHH1SpB49GkDcioWobR9MkTLev4BU2fa5DFtippKe13jS5omfbc3b5uYULMLHs9Bf6WR",
  "key35": "XSwUwHrRhD6pQMvmtHnk6svgwzgZpdm3YpUGihoPwPVGZnfaG4dEvQkoLVNj4BTp7JqJuvkPVRWNp1U9yA91TNp",
  "key36": "v1YeWZJV4udoWNvJLr5cyP1ez7rh4FxWroMEeorhceQr1MBDc8j7JCi9GSkp68jvyYbPidbNKv7GxJFeEWsYGmp"
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
