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
    "5dzWpJ9CGy52LrCLys1KeWhPtpupb4uMijMYSWWoGTxqyXPtM6ZFMY1TLxwthA9Kym9nxmtvPMQJMY64WGtYMWDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeyvN6yaT9VwMaE3CyGz1FzuP8hcJcZgYNAFY9UdZTbcobu7ryMp5CkCQP3D8WoCSEcGrrxBx1oTzHzYSKjFdF2",
  "key1": "3vgfSzXqV3MuVqqXhDTWSQehcJ4tbhtaASKbdDFKKdnWYwMink1JBe9A76yg6aK5PxEDSXC5QRnYonvExsT6f7NU",
  "key2": "3obmobg56hipJbMgmgoEHBSXhvVhvkDYGdtjmUyAwFmHHjbz7rcMNkREw2Yo8H6DwiTaVRA8oxg4HWc8F16ZNb3a",
  "key3": "2yA3FubBUfwNPG5pdaVTBMTtdKhrzZXmsFMNkUNghyZg1yhvUQ7BazHQdKjEFxqiJpgggfhzeRMSxuCj7193TZa1",
  "key4": "4YwymXpPbE4F8kLthJacWvguZssxcG17RgUvc2DBZPzoYmoHVmQvN9hmfhk6bLmuwrq4KmdjZfibTHcyBxSA38mF",
  "key5": "3WRqiHX8YJoLvJm591zeFr1HatAHFaRMcHTBPpSLRSXTpThXQRLdhhaoUnRQwioxJ7AxP7JYMeASq1HDM5vRJJNX",
  "key6": "4gtV8pTehUQQdB3Pe8zavuNfHRahCGe6KR6y4JFFoWQeX4BSQRJ1K51r3n6t8eGssHYiZja1KSCGrZKEMkBa7QwS",
  "key7": "s3QLRH9xGzS7Qr8mTSyLjfmrMH5WnqCwKxfUMGZFVg8v4x3NQShsj8bxZcSPTuUYLAgs7rxePHWKEthTZLBqgxw",
  "key8": "5eh97TyVJ1xMJ76PeCobz3mvvXfwrXj7qnTAKmeCa5nvfrZUiej6VCN3nFQPWHbZELv4HnaJphTc2ozim4zYiaYH",
  "key9": "4phax2NS37G36yoo4UZCgzwCze81njnxqF9678RQRAmyVwKkAtMrFxnppF3dtfrhrn67vPSkMNQJwjtfJm3Ztkbw",
  "key10": "65ruVzr1tNuBm2W8jmNUVR9kticBegfnKLTL8or9V7Enc7JpWK57ry5nYJ1L522gL3hYieUiXdg5yE9Ky4sHv6v9",
  "key11": "4BsGrtaJiG3kTDRgThZgzrBrGUkDv7kG2KQCHmKqLqRxJB2owjhjU6eh3pupYcL9ExY7h9btNqLGpUyff4xREvRe",
  "key12": "3tz3b9jqdimfHgp3BynvM8tRFrr7X2jarCv2UvnViTsH788bnEnNSCvx6g9SFdE9ijFLNc8SehXuqyotqmrzmc9q",
  "key13": "4G8rZGJK2Zt53epE5Kx58rEkFKmWqN82udvFcbG1t1JgYUUttkhfjrbdgifwKUzop8yTtWuknAZ2E96nKNhziXLa",
  "key14": "3rZUXrvKnFQhi2g5ZuioaRwSLdiviKypTHZm2XmqKoT7CgriQPPaZ8JnqkV3c9c3xSTxxywXMvYYMb2TBPL8iLsy",
  "key15": "4GsLJLuxLnkZUj9aNSwSiAh4aMozx753ZGdM6o4Ng2QXsnwHkMERY6d7WHVdkS2D8oJFdPmZXJ2AuwQp9SPri8tS",
  "key16": "4QxMY9jXGzeD3HW3ZuhX8kCVRBz4BENzCV2s5r1jATGbUvijnA27kP9tnkpmQTYfUTyBfzxkwMzeVyyFcQKrX7gn",
  "key17": "f9QJNHhEmtSwZUPf9xYwTk6Z91QZqe8Bxjjd9GS9r7PSxbZBfCTSeWfcwBtTCQ88YUjJJU89j18ovoX3CmJYvPR",
  "key18": "2v7Fvpk9c7j81LMxdr98y53vug7xUnu9jywdNL76QE1oWHXwjKmsahonqGLLCnm9RTqF9qxTvBcUASjJSGymbxbW",
  "key19": "4hd2E1eMS62pneZxN9aaUSkQzTa5XuMRY9LxnMcApNVbNzuh2WxrWcx6rBYw6HBbFR6a38L1YFvRBmGFibeb8qsD",
  "key20": "48gondsHmMM6gk5n8HTyAEuSgA9UCXdfrHSFNu39ZWSNgnbAyJ6TQJbxkZi7MF5TQqPpqNXTci1PPeiWe1ppqwvQ",
  "key21": "24J3EdNVxYB2v1qtWUYRZ5FXDmjHK2XvyDJR9LxZKeXCgxc7tvanGYeTSGKa4HGYazAzAG36sa7uvqRbrnJAkZhW",
  "key22": "jyWtT6BQDeG6EffS9EkWbt6gfDaXVhMZuxBdVFNZoL4hGctu2NNepjnEhbarCvQ6wtarcfGrk3LrX2xe4kXNp4E",
  "key23": "5kaUsixeojFRgWpAdgwcRATmhoUFD8Dj2cTNFGYhDASfVnrWNou2GKvuMfyM4Hch3c4kpyoNWxv8xaZURNuPqy8W",
  "key24": "53WKRrcur15PxrP3L8Yw1tohRm9vuskecMDvv4Y946HndyDCC5SLCeekiDf5FFgFxQtVa84gP9E9sigz7u6KXfm2",
  "key25": "33Rcu1K5qSoDjVePmmMtPWDwn59vEkpRHQpXZcuZaZLNs1iqf5evd3EFneynkHgGemYXyrrdN3iHMwC7fdh8KrUe",
  "key26": "2TDL4eVGqZpv4R5wbmimWUZiAn6Sc9UdSoSBPuEjfJHBLtUB6CbccbcLFPTAfTWKqvj8SkrFTnq91AZ4eW4s9MjG",
  "key27": "2f7MsACCMFyWLabyNqcTxE8zfjfN5boAX9y1SWcKNLbDof4DNpuZ6jUtSnmHZbyJ6prj3iYvuSdowkvtEyniAWpX",
  "key28": "5oC24FFCEN7eYN6NsNhnFwYD6QBUAX83qz7qs6MDeciqAH4MVsPzbm4xGLDVAbvFeJAWyhSGVbF2rfL9RTkB66iQ",
  "key29": "2FioJiNxeFRYp5DjKtbuWrq9N9VWJC6LyQE1FCNjqCEjjTeKHLgx9fn73erPFwj6Qu5UBBzdmyQo96WoAxQtQto2",
  "key30": "5XvGJYDzpGWXuc2DGqagXyNB6GzA3kMfBxu7KWHCVDJ2PAFnFN2mLx2GyNBQxRbLBFLCzYda3RCoThoPUCWfrxKL",
  "key31": "5rJtmLHaLnwaQ2KUnDxQqcz3KRwvxheEZJuxgYhymiaz9Bjt4476BvhXdVyFCquiet22umjnPpcD3RSbP2Tx4bfo",
  "key32": "2aYQUF31rK2Y65K4MeKGJ2KuUXxjuSd8tQtpvujZtKKW1738i3mQvwTSRT3ibbBak9FeuyJviRSiaicWtK4aUVeB"
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
