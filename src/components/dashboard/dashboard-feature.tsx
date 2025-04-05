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
    "2pHaopsJaYVTpcaWG5GByiiuyD74Pr3FvbLFK6V8ssic67UVaATTzWJtzxHWVGgDQ8vXHoj1ivyrM7k6KGj9ZyuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yLPyPYvsvCxbUF6LNfprF6hPpa4knou2XY7T4bm46DKebJKsSpom6BiD6A5xPSbQDbnn2YT6izXRk9zvhyNRw3",
  "key1": "4hmdVjFQJe3L57fEGGeuAsbzqRCBqxCkHqd8GA58sj17sKv7Mc17rWdkW1fvcHkry5LhGULhBR1QoZW8nuuNxArU",
  "key2": "27ju8jQYzWHxWL7gPq7Kz23UQjLdzY5fmJ4kzuTxNEiAyynhAAVKwTNm77cHHtN8V3GoW6oK6q5BCTnFXyBi61ck",
  "key3": "5WVqSSrpBFq2i6o5f3dQpt1dPSU31ZqpPuLk4VAhhGN8n4JMo4QBwfYgpULf3dJxp65JUcyMiYbtRfVCHipS3UJA",
  "key4": "53oGHh9qQnKcJ3jX5PTJKzddVfsZvuTd2L4aPgAgNj3Dav1csisSHZokT5iX3B5bpfNfeUpUumxyAZe2FXkeExRy",
  "key5": "4iLiBWh41YqctEKC3BbQjRZD28oA9Nb4E5CwDWv3NVrHA2MLQnVG81KR3THDxRanqTowtfAkHBDunR1EXYLVaJG8",
  "key6": "27Y6oEYYbZkpbfTBjpyUYR4w7Xi6YgjYz228T5DSuxubn4EFRt7YgxA78bEHPEQSeqVCLyUT7k8udZvQKPEcBRob",
  "key7": "7fG3uLSRqjcZrYbBDPfZV6ohmh9mesYzihKf3Wadik2FN9ohoFTTa2oWi4m4a9tyiCMtPdcKvZuLAYLgZkMhcxv",
  "key8": "2mPxUh5XJ2o2dWXFzpKnr7iRWy8BNLG3a1dqX33tUikjPVZLRcK5VTe2nLYbAKWCDJgoey82xtYgb1KGPBPRSuck",
  "key9": "57HBaKuvLgtmNeFLoYDbun6WY1cByL8FTGhuK7A5ddXojiWmWUuJUSZ5v8fiKxUKSeNue13APKzC3ijU9Ym7AaLV",
  "key10": "4u79LQ58dEKT2qAySaoTr6QcGCpycevViVKTmLeXENJqA7JjiJigUhnxrBHqK37gErJBv33EgvwxQzoWGougJrci",
  "key11": "3oWbqM6UyoixyWXSHsd5BpLpBa9SDQTjsGxdeDZY52ggAYj2LTkoKne22izaj33mmRshqrgBLqGTzAKiypXg7MEU",
  "key12": "32bKVsJeiXomxUwc4uMa1rRbpiictpwHTKrZztAKauPzMZXNpV96He4eHnkGAwExU98kCQy6sVHDwdWSUoY4HuVj",
  "key13": "596xL5gSncjAtWntiqjucXPPcLLnqB2QgPZQKiNhmo55oaBmhLkx4tsrLqEANNFipZfCmX7pnhoZVba6vsaznEPH",
  "key14": "jWfQ84kwD1WEfLgb2gaTNhfCjWZnJmSVV3r8ettrocvzym9qGjWx81ZwPPEoi2FQLskdue3cFadPDaojpH3wbQz",
  "key15": "4jb2MziGYNWpNSGknLVi1RWPHUn9VqHao74HWp5gDwiJsbQxyHgMgb64Qta76YRxvgYTEnTqc1NAf1j5Cw9yHeFo",
  "key16": "2zfHeaY5mTAeHe4CyQ3oV6iDcmAWsySvxZHZsvdsrPY2eobrPymWuM3J5Vk7JU3Ghe7ggAiLpN9DLMi6i9AN8tTq",
  "key17": "262AM1kVdspaGMrnvMncpacMrVQLAUDZGXkce9sdYzKm56ZRKYGeECAKturL2AeJKtdp2sHqZCjsL7ShVtxLeiZW",
  "key18": "BCfFsJCVR5VJQoV4k7EcSYJMEFVQtXvy5aBMbWdtcDpioXVNJUm2NFezKaGMpq1S6DwcWPo3qF38qQF5BvS5djF",
  "key19": "67HSxCqxzDm1aoNHNFuS6hTBHEgU7krBgdctfyJVtsLkPwn2TDaJ3jUXn3ML5bNUJChtc4fbpnUvQJTvfsz55175",
  "key20": "62fQdpyoTpe52cF1RHYWxtt82LGMutQKZ98CpM2cBgYNN71XX7Pn2BiHNe91Am9wJLNEbE2VJ5SXiUXFwoVS7jJ2",
  "key21": "5s4F1jz9YDBqA1yGYwLE2uidTFMfWv2oXmy6EMztHYQuy8aUPWNhnZWam7UsKFpd8bCbFy473Xw9Z7MebeKFVyjD",
  "key22": "5wWPBkS1T5GcmgKbNyy5Vo9PFUkoatBiLWed638Ka69JZVHPA1JH58fGSRs6ZTdTegKVMN6N25nXjpHysXJiGbKG",
  "key23": "8NGExawyZr1NV4562hJ2zXAzMBU7Kw2SpTmMjPGU5yRj4kUnbwzkF9LLYWttpPyL3D2tfdEK3KNCU7SiUqKSpse",
  "key24": "3JMBn6RVjHj3xsB6fX4Y5WZsW6svfAAsayipENkD6aia9HpmxwqNQnUjBR48ww9UMPEmq16tHFeu9rJHZV9hZ2PN",
  "key25": "42Sqr9TEbsGp3UWMhB8nTceHTxAqdU2RXLqEMgogsAiXmts2H6m1YnDQ5WrUQUzymX75vzdYeLmn4V6LMGKrXybu",
  "key26": "4sPzjtecQRzXppBduhi2i4h1Ff9eaaT1axVWNdZGQKnduBMjD3N7iD4KQv7qJx2EiQ4ghevjS2qEUELigaLWWpj9",
  "key27": "R6dZ3FKu91w8wStSWACYF1Vdq7RX8iLooRwj3JLvVHfvBscrWTfzenX5F9T5kV5jKRuJn6PvAAzizBEwez6R4ZY",
  "key28": "22KAaY4bEpEY6dV9y4U52bQN1SCKadoaUectyjHdeBxKGYP35V9Wd1s9jkUaub2bdqiyHPinVWxbi5GXd6yW5ELN",
  "key29": "5RG4VsdxxEh2msWgUtP12BM2bzZPCJLAg9or6vxTyZMN4wnwVwKDZkyAEQWMKzvFwBco8K6DTRVikJ6B5YgFDsGE",
  "key30": "yCfhfnbrcBsE2AzWKwVH9ufBgtHHCNttd5aoeHkpxSoh8aTKxxdFzdixKxjYxJQYHL4oANGQe5oanfJSExJdLUW",
  "key31": "4MxEEkHMK43TcsnVLciUKJJ2wTS9dtcsCg9zv5kMHhEnjRL8QCpVZ6wEAhxCgbziSY8cKFMCMk9bB12Ki5T7sFTm",
  "key32": "45fXEqHK5yyxpZTcz3UQYzC86gg5ovQmFYVicXp2zGsW5JFX7uwk3v5vSvPJmcN7omJVg1LhehKhEkF8vLz9TVkZ",
  "key33": "56Mjan22HsamGUK5NnBoEJjSssisrC1bcif7ezwwoFJVhUX2YkpnnMLUqs813wAajjyFaPUyxmWF162KKJnWGYKi",
  "key34": "55ugBqty615hQycq6uT9HBdHiBvPoaDyGnHLZ3vXPHvWqBxkzpndzVVwawB3jLWYoFx5VEGV7DB45qK8Cx6yZm63",
  "key35": "4M9QP9WuwFGBwupKjnLzwqDAdfoA5D2eTgkfhtDf6huGfGcBFxie1oq1MtaDSd6tj5aZg5NvpobHfvimFUBzXNyJ",
  "key36": "2WShfBRMJvLXbj8JHMuuPB4EqJip4aQM1uTnBgTNhaWWiScuZqq572AbY4mLobMcSafa4pe6MB9dv435cpnFYDbR",
  "key37": "2krddWywbJ6UJwTmRh4pJ4qhy2HPNfgZAMMAPq8rnj3rvfW3s8ruMF41wk7p5J1Bjb7fTicGLYEYkRhYgMAbMBF7",
  "key38": "2YCFzAU8CU2YmhjpNf7mMCmFE6RWNiuq7WUN6qWuBApdS4hjvQEym9SVgEeJk1XxfHPnDE1F38BMVrTFobuGcz4i",
  "key39": "zjxwtavVHXmEF2vght3oFiFJEPSfrWz16PixRWpS1nG3FwsV11RqyFec4eRnTXJmJyFtL85ePkeDRMk3cLjynLp",
  "key40": "3CRU6XxdU6nQXRC9rQwo2n7oHgCuKZrsV1ipe4ZVHM8abF5H6rsVKhy4oZW8vzzusQs1XyhN9TwPoWFsFhKdn2ph",
  "key41": "2Chnd9eFqpeDKNe71kMyt6PWM6b4KvZxbDoGR5gPnAvwD1ArWjWc4UUTAdEpw2gh1x7cGt9KBsFe5keff6PiSCG9",
  "key42": "3dyX5C2HnnPmMAKh6bJ6Wh74jjzoKr2cSEnKreqZ6e3vYeWqQpjZLPkzeZc7h8dGKNPQ1xsu41FUd6yLMs5NonCm",
  "key43": "5u5qaUkAkQCTkrFmovuWaSQsPJFNhFBXr1phXZERTSRicxY1ueuv4MJjwFH3iBVhxyzGA7AT2mDV2r74ZGMCK6wt"
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
