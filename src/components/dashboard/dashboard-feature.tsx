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
    "5Ft3y9JBHesonK8BvgfJHYZF5Zdde16Ss5xqAKBE4JFsfZyiwB6FyHMmMdWckkwGcwUHC1vEEJB3rHeHJXwwLRSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxUNy9LAHe9AqdgVjDefkLrFyVjHgn98yeRqbXtbBK2xj2mipYBukcLtmGE2uCZJVBezjeFN9mBXv7CkzDtb22y",
  "key1": "2EcDihnn71wcFuvsgumq7tvzJw3tR7LzpNTmSDNA9KMmumgoacT8AwijZDgpFcDaDxhgqkmqUiRxr4Cq1LbZYUKh",
  "key2": "sbYrTqTW26wWeP8g29WiXKahbmvwXAcwFKc4qWRmtWmQGYLsqfs4aVM4fjJmYddveTGFHyy8j1wBouYVSQRDcQa",
  "key3": "DUk8EJDq5V6oPCEoTid7qKN1mHASL6znQjVrvVJD1zLWxxVd5UxPHAzQxktTi9f4nchATcUcETWfyTJ8voKn6yY",
  "key4": "27ERN2uzdE9TPF5khwx884FYXqxtDqCdVg581v6iBSuiGTFYqbpd5tm8TzkWsQCyp9QfoVeydiaubafM1CDLhiM4",
  "key5": "4JxSjYu9fHYC7EyKVmibZ6QCb1CMfPVuRsHi9rYVQXrTuD5dxowFfkPmbnFuPqRFUnqk8VMZyUntY2HqFDyMTrL6",
  "key6": "4YEi9uXfpG6GfkrnMHyztbWq9T3HLRjD5SrM6y8UYdTM2zAR6JrmpeKVb8SofbiiERDGK8aHdd57ErwC3tcxwVw7",
  "key7": "2x8KxDhU2BxtwjvnkZZiFusDUYoUvnFcbhUZe4Xd6hsmyRUQssuNQyWtfKMn89SMrqEy9JR3cf2y49WYpicVErsy",
  "key8": "5WZMoJX4nmtRqui5tJPa1NDFrESuj8ZZYoNbT7WsHKHNfSrtQqWnesPRFTy2nmTidccrTktdqYP8CUSvMuBP9ZSk",
  "key9": "51Rpd2iqiHQft28MxcU7A7XBxiennGFRfwsub33k2GK1tDFfxmw1M3UoduJaHBEci7q9BCHNAdUth2hR8cq8q6de",
  "key10": "3MiEDnhN9t6yBx2cGsacoMNGBoCxQyNmJnXmZqWk4dtimVEQWynepG1GaxMhLcnAWkaCtPSYn4MTZnC9MPwbBFnV",
  "key11": "4zxrupaTQA7gu7t89xLBCaPkxPo9ZWMnugSBsCDhK7mM2J8p8Npk6Wqp9jjfKiypcNkTF6AGrwdQi8WTfyaECGUo",
  "key12": "gUmumjLwfZB8aBRy4xy8Reu9fyMZhNnbsVebY6FCv2ZJ35HzhzJu7vW1iPtCKdia7WYtwWUHFSuuGmVmuqPkdzd",
  "key13": "4kUXKhT5SMdtFBS7v1uELMvX9JVaiUmmavHYq1TCggrqoYifmAziGtzxpQN6UYNj1QBbXxKwh28rNxgKrviq6VwL",
  "key14": "2Y26ywvp83DsVUQXuZHDK8bt2aQTXFYs9PdpQhwK4YaRwd5Rb4rHWjETQeCbjuQL3qrjwsv4Dt6xBwQf6YokRDvj",
  "key15": "2sqgj2sgQA2xm2VXTisf67JNsUZoZ5A18yEpqh5tEnqxkSzT3ymFyGEpUeJQ5RCeu2x8b8va7FZMy6yHQbtbjoJW",
  "key16": "5NKVPmwiHe4u5bHjkcK1Y7ZSiWsHUFvmXyjwPCjqpd54AzNpJPYkjX1NNKQae2UJjjD9CUX1irutpZMshChj1xh8",
  "key17": "BRo6sM2jpmuPUUKR785p1jd47tSqks16ueKJ837VTghgS9g5FdcQjyyWgszeaJ3QRoZYejhnbiGxagduNpQTdx9",
  "key18": "3PcsTmD1mUSVGQd8Zbhc6nLyaSfPMjCYo62BpUYxCdyn7uPdoJ1UYTSsafdLmLvMT9ShjtrnJw7FKfhum7mQ659H",
  "key19": "2fMUew5LBx4FhDRwqnaQWvnoJ6iPVLnSGow4AWFsV4V6zBPY1Zmb2xr3ThTBxqcHmMCgP5cSaiaY2bA5peqqBByM",
  "key20": "3sJRuPxC7jNa7GUvYC3uLkPQ3GaAuW24mtnxK8imkdAUGpLyncDAvNyiGxzpDx6rJpVyeLywxLiwA4Zr2YTyP9bi",
  "key21": "5jDGRhnX1a1bsXeU5tfY39Bc76svwPTSXgbLRinsq6g7YE6GPwQwvnBWHhE8VLQAmh6tkp35Jf2QW8LaX5d6Tmmh",
  "key22": "7EpSpi6jvVyiGWW7TTbNnRou13cu972zDABeLr94ob6X7ppDKuLURD7p23QwKALqrX5xLeBAvSKqksQJ2Mb3Ska",
  "key23": "2SjayDmf81uM7qtd9A3xNYekqaBMWqj3frmdwKssVdJBR8iZYA9juPfisJuVHdk33KkpK5aw4tU3PURaQsw9TG4T",
  "key24": "2iPmb6vYBGRW9LhEJUjpfUrGHwsn5JtmSdJMnKXH1tEvAy8o5wd23PnsYAX8yiAZdx75sfcaMk3Jzb2m7e8aBfaH",
  "key25": "5kvHqYB52m9E2ozXuTjyzfJAFfncPB2wvYPigHfqngPHQgdJz75s3Hc9DzE8jqhZxfDHMZzLtaFpBu1Ggf2VHAki",
  "key26": "2t5SeHdncS8z5Uw8ipisi1iQSswshJa4jBoHq2RopbofscVK6Wucj67zaGioM2BiUQui4995g53VzBiMW8Pzy6zA",
  "key27": "JiiiQwB2eimXbk2oTR1a1kSGZmV4jcPo6mY7Dtcay9EqbLEwkpbucX6K7HPddbvTPw5gvdvJ2QtgFFe1uZnQ52r",
  "key28": "5APgminXtKiBCKiyWGWmCdXYrnBhZRm8m49shQ1wzdoP6MStJN7McvESfw6NW9n5KmMVXFx3zQoySrMM8Wv5CbG7",
  "key29": "3oRuwfVTKq1xAp16TfsDU3Kuch9YXQbfM93y6YYutJJxaoiyyUj1Cv6LMxp9ViXshdezxQiY2L9bx9KNsS6vBxJB",
  "key30": "2qDF2YvXYoBzhy1Z6i65aifWMFNDCWTFG2rCviFD8tJBtKM2cUe1WBkNHzocbe2nyehLK87RyDJsUNEAnKv1STtx",
  "key31": "3qsj61M1asNRYd36fXs9RzaBZJK67dJGeYT4mKt2rWN8risxM1EUZNwNL7vcXmYYUr7VUGyqLTvBJHueP9btybYA",
  "key32": "29kQWdcEpPmcyNGPF1jbUNARfYiyuajMpKVQHrDhATpFXktsYv3B8pvs3aUu1zt6KUjrcrkiKYj5hdhxsAghKEdE",
  "key33": "3rWR1S1Cvkro8P11gXstbXzUrbNGWGZh1qD7sDhf4aMT6EGochWujfNWc4Tk1awAcgeCJSvwTxAxB1PrxYTRRfjP",
  "key34": "56GCusmj76Fvw9bkUpZ3Fk1rU41QEgcv9tfLhUw5N7zWDvDuCB85kq2vCAbsMwBWbPQQa44KoGX6aQKjK1D3q7C9"
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
