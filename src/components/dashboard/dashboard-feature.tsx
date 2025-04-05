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
    "2kJQ9UmnrbagBRBiTsFfwCcZvM64NPAvMRUpn6ZjXs5ScKrpoY8dMNg9tepDiVMf6GhMLexQyA68SnPDJgt1sT1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFvNVseFfWABunJQgJrTJqw8jR5bSQeUi92n4E9GeJ1B3x2s5h1CLhVqB7te7bH1ANovsDjcyADUKAB9PTrdRu6",
  "key1": "3HKgUe7Gs3rUGomAa2mJXHKbprhB1LtzBt9fWxAx8KTZzpo3NvANu8MTDe4zSLpxubtF4Lp8deZYwP8vraeqhArh",
  "key2": "5REh8UeR4ej3SfrG3qKSQLcf2Y7HU5hnHr7Gw5ejHKEX2wndKnhvL1cNXFMAb2wSWHmut7GdHBYW7BV2WJPGw6k6",
  "key3": "5MHkfCuCs2X4zyMRYgtKPxzjGiHPiDL5xxEtAoaHzqStNt9wgJsKTkHokPiEV3EGrZrq4CTpFbcDeUPEr7HmvwPb",
  "key4": "4nUHrJAixa9Pc41xXGdcUv57u34Vs72ypBnUhPW1k6EJvqZJzXQMRYcypXAz8tpWs93EH9RET1gW9J42bC6C2gmy",
  "key5": "4fFfcAyXuRHmVLXiniEBQ6pTU8HSJvcykoeDLMQCcLSvuFU5SGPxaHoJKmwb2wTtuxPQezLJzm4uEBp4e5QUesXF",
  "key6": "2tAL67fYz4k1jCwwJizHg5AGuUqwCgk4Xf5n8ef5vP59HYL6dGNaN8K1rMf6ACaRkVMznz2cqyeSMstr43scZnq5",
  "key7": "5pWP6HHUN6rQy6EpzUgoUqdqNcgvw1ModinQfQRDfrDXxpp1JdZRGgdNuMZZ1npdCm66VHVm2pi8EDRDBn9TidWW",
  "key8": "4eQf5BJop9omc2xd9WUsLzFrrNJAPYmdxQ8vDt4eWFiZk1NrENrbJz2WcsLn2afvhWwAFzayNA38TJT2eKb5Vh4k",
  "key9": "3cNoKDZh5hmEwJWkSQFUCgrv5iiCgNWWZqiRsWyDaBPia3QeUZPygp9QqDxYZMXciRoReM7GwHQa2SbQKdGaF5YS",
  "key10": "5G4a4wLsjbeZVYMDYFAFLmrqwQkYigF1jvQLSwB6DxeEvRdUu3EYTBGpXoPq4qoivx8ETYbhBPJq1JE7FDPiBn8f",
  "key11": "4CVyaiS2wQHMrUSbKsQkU9z54EZTboAGaccXxsxoaHLjPcwX4hs5uZAVDXt8r4ALEgayXC8SmjE4YcowVxx6xoxa",
  "key12": "j6ffVUui9r4xwdD6P99NuiDZdtELxL4r45qTM5dLTS1EL2niRgc3A13o56SsrhKrku4tssTG7VF6kv1cC7vBgeN",
  "key13": "3M1eEDa2CfopCHuLr2zy3Qq6jWWt8CjdnDRwEpZ886hyr8qGsmKrCCWWsDpL2hBXtTocyUUDoxotU5iF9PNRhvpe",
  "key14": "31fbQw8cMuLSSh666yQVg4tFyBnk6AriEkA3z5yEXaJmg2B8wUw7LZqoAfiXii4vjXb7E1akwTCgiLgBCPezSmtS",
  "key15": "Fgu4vuXb1PYCETFwyLYw3oUQZzfYagCcsasXJ6zyPpnikRDBwFcnxQyEEC4sCbcyzPoJXg5x6QNzNqyCc3Fb1jC",
  "key16": "4KQvdPobbtr9Bovy5sfYssHPddHKPSa8B1ceSAeVTyjKrMqjNCyUoH1GaYKaKQw4EcdgVbY7VCXQAQ9rXnwbQuGv",
  "key17": "2yuxbU7soWPuiWYj1sz9jFL3yGTcxLdGt9SwaDRBm8WCJVkUAYcEzJJvUgqNjL6awb7HMNXhF1p36RA9cCJHkWAT",
  "key18": "5FAr5h3EsTxnyg2bWQyx84VnJ7GXmGkeYk74F7ckMKKwDHFcatRS2bJPLvtZLiN1Wp5c2pivGBWY4vM4PCoiVQA2",
  "key19": "5NDCNRer1sRkRUuXmWnuVGVcdNT76kyyyouHy1fVrsEQnTVn7AcN4kBUFvbVJAvgDiNpiBqmYxCiujmbANToBEBA",
  "key20": "5ge323NufguTNkXtjbCoLq4G3B6GnfMTNX2zy7oZ9yydnGcEiVAfoWLNSGkt5rBUVVZKaDdEX8eqsQJYr3HeQX2e",
  "key21": "3pyHsqxkw7REnFFWecw4GgNzHZx3LoinkobHZ13nSRmm5GkhifqbYgsMfLyyuRSot4cbdgv5PXGAdyq8SjXYQjre",
  "key22": "3TFvGWHbTVKyzZ3gbLeocNBX5nj8wou4Zhrrn321FuHSbVw141aKyMKEvgTp6bbiRR8DzYjLktUARXoZ8QXncwKZ",
  "key23": "2kT7nEPUvHW5WPpMFGCmeN5RkT4GdJZD5E4A8Yscp3BqoH67QnLxJZcUhE7cwSw4rQ3hMzDo5DnYn3GfvZFvRo9z",
  "key24": "5MZZsJPUscJWc9x82qfyogRqKtETb6bHLqx3qXgQAS8XVMG8duwpG9YBJEtmUoMHDSnRwsMGxLTnPGCeqpvqcUDM",
  "key25": "55V4vzexPg69UtZkcrCMLeVuSfJRedvpKbr1ULoMft5bGRykWtJcaQSA7oEdGLuqLVUrkHTui3tDgBwVMQAS2ydV",
  "key26": "24MhBmZF3PoeriM6gVVB22k8PET83CFMcJRqutiL9CNWbsR3BXt4mU5GU8krrXt3VE62StbNzekt53XYs4AuKtPP",
  "key27": "hYuhMzw1DWavjE4he2SgzFJ2JTMLDfTKmuUNC2Cu8wHx5kVo71dNbVDDaonRmAR6TCBaEjNJRXbQJiRp82EjYXe",
  "key28": "2PiHPXTK4Y4zZde8QRXPZAMi12947eXDgkX93cRDwLoRoh9Hp1Y6b7zeHwsY45oGFhJR97PbdFxGZCS3nJaiHXp1"
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
