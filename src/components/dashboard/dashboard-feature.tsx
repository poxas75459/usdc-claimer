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
    "vnbB8K9v6Q8Aqawm7JfcfEaHmPsurgDx28pLnHwNdae8R7vMidnxh7WdArP3APrXCHeo5XqUkaHPkuRTfpmZuZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gLfBeLoPCv2jgDsZjTFpQPtLrqPY7MekwGrFhbTyMW9LCXKA7D3n3pK4fcDbfCA8uYi8hHRX4eaUearf4uVgs1",
  "key1": "2rPYPrWeCmeU6dmDNu9HMHRb4cFrhEWzj9ETyUUAA9KDSh9hqKHiaTbH8MBK5aPA6k6zEWgfyFGFgt93PCWP4SUD",
  "key2": "LTfiuRPR9BAAQksJrgLg6sh1PZzvGvPqdeGeubEwbMJitbD5u67GumDXXQzgYYpzBLytyY2sKX98Z8zXbDbJfcV",
  "key3": "2ZQ16RVkCU9TkmFykyYVYCntDhczVu2Hvgy26bwXUv5kLqdzrUSJtoXN5NNq88GNjKU4my3BMc2fje1CCETsfdzq",
  "key4": "4FHyoh7J5bESc1XkfoxsKBFRLAamaEx7PSJV7uTf9E9pVcoTp5z6bBuzwbyqqoTRuhZoEN9ixdmoNRy7jCRkZNJn",
  "key5": "t7afSsEFqBbPUx9KFHgtXwHyzEkJi7RgnHPxEJTALhFw2WwbMhUEwvwiFsyTPvzeyWAQii5GmNr4Rr5j5ZJ3FGC",
  "key6": "2cNd8yRzMJ3njxLXSPF4jMRxqJDvkD9Q2yvejZwZkY5vzfnbxyrbLszP4FGbZSTeBg9TynS9ePtmjagY599F3CZw",
  "key7": "5p8GXgsAUP5Jsz5CEzX9Zj89hoBif8TXuE2x3XHHQy9gDozU5dfpVhFctRDoHsAc5VAaudw8CYB5cfh6nPo16Vzh",
  "key8": "2P5peM7ZGDkV6MvhFbBX36bsHZn3XyWKJV8wYHiikFoMcFUnp3CtXYhpAVbZAREieZEApYSCbM9mx5gJvYwNohEu",
  "key9": "2zmcqGy6rndUmB7A3Foprrm9ckBJdypE7s6tGUAm6nZsgsxWYSr12aqrCddxQk5oMyFmuDYDjzeKfmdDnfDfrAYo",
  "key10": "AiShWHLxgS3DMuD4gYg7wKxFPfPZ4Em2C36xh7huDrTZrDeSwQHvRhhkwrKAf5M8psh65Cye3HoYBtFCJkGfhDZ",
  "key11": "5f5rq1jxqRepDCUMxHBBU8phFoSfVvH1XzE5Rd3JQFzGRFQjACbTyi7Zi6NwCgm6MQU2CsmaViGoCbwcqFB2XWw3",
  "key12": "222vrifpv9J4uB2TsAMFSMJsQrQ6EetNPMAgQ7TqfF1uAdPbJL6sD6en9sva8WLtCkG6JZssWap6GSZFmdMKiE5R",
  "key13": "4D5r4MC4nnFd1uF6e8bephU2ZvxD7YATReX11UXLBvNRdtabRTiMX3Wwz8bb4RJuMcBnePk4h2Q3SJJiuousT3bn",
  "key14": "7nxdEvJKQXN8gpXUvHLowSDCZqEAMZQazjNbgdRVKzFNXxSzRnSe92cbjVz8pipWRPVxq9asaL3hHNS2QcaxJEC",
  "key15": "3vZTkvq56upQSjZ32ijuqXhQpbeFgrbSQ6pywymKt2WAA7QU6PRumSsd1FaGzyrRuWAQa1z5Nf3MS4kCNoRMdf2t",
  "key16": "5whUKQMcAUPs2bHECgi8QamGpHnPjx339paQ2jCD74Smrvw269oa1eTaJ9f4KDeUbmT3kGCHFa8TdrQAyxUbRjjk",
  "key17": "32yNeve3MCmZv5CKru4YZSqtRVed5BsvPuSrn256vSw1MHk6F9FfoZnfhEdjjVMFja87KgTR8K4kLsHqZPT7ih1J",
  "key18": "5UkL9k9G54Y4gUpL4d5eCo5b5iVMt1fSgQVnNm1wnPHhFStdTKcer1pWui2GM3GqEAdHNR1QcjLRFwfXm7brJcpu",
  "key19": "2zpQpntuxPDMoPWnfTgS9yinMPM8kEzoV1qBB1y8iqhRv6o9kKBkUoyC2MW9DyDHA6x1RxghJ9buKsGLYMbYrTZa",
  "key20": "3NxNWSXa6H3wCoRiUAp7K99oLRA5Y5VNxDWpVbtBHXcCyaUydBf9BMnoDCFqhahcHXrFMvVYegozofm9MdomJiJF",
  "key21": "CFqCZbkz4ak36MXRvWe58TF9a7kfemH19rYrB6azdLVxun187BWUVk1FwLjb6TJEWpKxUpH4J8GmMCBFh3cxbp6",
  "key22": "5V454dk1AwNsgqdL97w9NHRk5CoKewnRPZ34P7iV5fWz7BiF2JT3SPdpSwor7cFtozLWc7v6j6ViB1r5EN8ucFZu",
  "key23": "3Ey3KzSAgfadKWoqTNpHk7W9WnKKyaYwE63xyAUpQKTxPmmU97Hu7xLyw3MpX4T9SbCLk1t7nA5ddhhGpFk5btPd",
  "key24": "wXT4wyje7LnPu84p6PtHSiNozVMgREEXQYdXGJjKbU4XAmJ9q7yGcBLZixuVhXw1FXryFcPGPo6KYN2C1amKex1",
  "key25": "4db1m4BBiGkgvMMThWRNEkSqsxPNiNZgevJrnqVaUWXQcL5E4MPFLksMLxnfUvuwJTp4RFCaooZBENfZoNyRxtgf",
  "key26": "4shKHiwbSVxpex98vpCuGYaXSp3acDLpdiBTGKNWTTHhKspoVsKGBdDEdrfA4Jq6LURPscmcN768TL8qUi2PSMxv"
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
