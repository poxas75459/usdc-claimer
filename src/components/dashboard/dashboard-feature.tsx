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
    "3hKjo4MZzQgqh2XP9XxV1uvEAHmReYeSn7Cqn5CZvjLAhzVQ9otcvbNscvCddBAF5GbqoE8qTte8gYQAgAUDJ94a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29oFoZJAqMHA9zmXTnLWTgA5K1C3KSUA9MjVvqWrKfZt2hCzNzTNV7B148knubuqGjHgXdh7PGEp2kdvkeS4PXPM",
  "key1": "KLDFvX34HfXeaKd8tfJnVRdJGFGopq4HBbEFcenySMBLhqxXLLWnz27VF2EVKsiHjPQAeqxCzjAqxAp3BzuxcXH",
  "key2": "3c4RisSrjMTqy3u4hCF6MofuFp3u2sGWiFiR2jkJEGtbpbysV1APiusGSfSxmHmfsTybNPeH4ZADxEqNNqD4NkX7",
  "key3": "csTj2j5LHF8sDdbcujpvy4HiYreuFqRu3VMWdpJPd1HKA438yQeJmFPtM4i93a64L2iKKRQWEpFqGf1Qkp9btsR",
  "key4": "3VyXTWYgJB57JKimGfMBkXP8tarXSLwCe6aC1rXpeBTEXr6rzVWw3LzNRMPhdiLeam663Ao4hohhKXd8BAovWC8k",
  "key5": "TjQdRGHg9MknZkrCzWdpziXPQJjrZfxWn6qVd63b3HV5w9VpDeetrXJEQSFCnyKyuCnU51tf56toWxUAXWuQjR8",
  "key6": "cPgiNTJEtpfzEYXaZvLrUeB4KYYdVoZWbRBhjck3LtSx3jfCzJC93toFCiDZLvdRzWajf51y1sSW2BdN1T55wDj",
  "key7": "36LYBszHd443QZP94Q3F7Xksy23hjQaVhogqUP52DWVE1AkW4S5awUhELLXH4GMYfg5r7evCefdogCG7xm4Bmsd2",
  "key8": "Boeq9x9aVUFF34h2wq6Ky1LmKX7dMiTHyZ9wWJT8J2NUwzd9L8g7VT4fuf24UT5RaEXxcu6eCJhkxLe4Sxy3poL",
  "key9": "3nSLHAJo5FCcdEsR3vqtUtqLbdzKrqSDsoGaJEJiyWF1dNAZtHF4fJgQgGuQmTYpsAyeJegkzj9JxWK4gFZ2doH9",
  "key10": "3Lj6FGVywjhzMDu2KtFvpk8bW5W6GUectumuq5c2yts3Qxefb7UuYEsmCnL9jdR56Qnpvn9N4fojbvsaCo6FLAPs",
  "key11": "4WDRekouw9nSfoq7BAJJohxZUdFAvThUFeJ2cAr193NN4u5saaRyGxS7psBdYwrGi1pxS4XSvYuVpNvBMH56XJae",
  "key12": "3vqsmrYWBpuqspLPc6sSvhVpFxFgQV8MHtJb1r8Ym6P3rH3Hbeab6vYyikYjM8Ew6Zfr7joLyAQyUJr7mk5mKwaf",
  "key13": "4a1ewXkkVCDDGMaA13Y12XXE3rdpK6g7iLJ8j7yDVfHrLUx9NA8W25FByToxVbakajRqajy7FdDWRgdBAA5rmg3c",
  "key14": "4ANtxMTQDcpKENzYzRC98UGhBiUEt7QSk8u2JfZo9Bk7J1N1byjuerRQjFtKcsDwUpBjnL7yDKfWv8RqjcNPSz2Y",
  "key15": "2zUy1jQjzKGGUkgheMFoikg8n7cQX7GLWUU4fz8FPeuCwPJaf1UJ3dxBtvN15u7278iiQAX4uRwmJypo8E8RHSMk",
  "key16": "5pPcDAsGoTVtNyMHiVN2wPKQ75wxfQSeYEF8cgvoRjj4ovuDrLm3r54MpnSwf6UMdAv3SDAEutdpSe1gb8aYDUqF",
  "key17": "4Q2mz59WLzqyX73KHiwDuCg9ora5WSFLHKe2RM1vWDd8j36Kme5oCRGZ7D3pDiNYZPbxjnh6bM9Dqnx4ikzfDFjh",
  "key18": "Hr9oDSUp8vQ1um9WM2aE9qdJENFUPyKMN5BBtz5ViYcfMZwRnjiKTqhXQp7Mqqe8bCNDqiH4RYhojDcrHfqFff8",
  "key19": "qpUHqzR3Rpn6GwgLCLoy8E7aC6qTP3hZGcbfkW7TqGuxQmUr7aQFGy1ic3R7BsF1zzkQpoHAVKGYVLVpf3bATVX",
  "key20": "mfCHkArJ6C359BHHfjpMASv7iZwyjsQEmcCDhK5H2S1qgAzRpFMNA2ACE4PLjuPej7hDWiuixwiotWmm6TA2ftX",
  "key21": "5XbNvzxgoqX7DpzyXN8NSAbR1B6u4PqT9MekSWnZetAWvezcsH6SGhbuTHfxdbUCSpemM1mVyXNYCdjby7XUN8Zk",
  "key22": "3L29j9bbF5RVvhuoCxe2tkkUKz7MGDqXh6gVZeq5uVAK684cJTPhSXzXSFtxSzV7tiafKm7cZ74L3NqZ48GBXsvK",
  "key23": "3MNgWjU4g3j7APmsCHCC9vEtVfWbiRyTmyFR8B5DnYZMSxyxsRyFuEc3S7gNkyCsF7yLHte1b5MNEn31VYyfMFVu",
  "key24": "3MT9AmLjqFqx7Pxg11bjNxHQj9mP6To6Vnzcn8gALwChusGJ3MffNVzgq4j4mCve3vFdAqMiu1kgBZ1q4tHoPP8X",
  "key25": "hcQAfrNq7JCh5NnYd4544TVVnLMYUQQDsvyVYQvk3fBydQ52kcmqNiVvnqr2qZgkCigieLWm8xTaprxvzj14DbA",
  "key26": "sJLtebSg9DeYpvW8Vxp45nH1Th4o3UVWQyUdZsDr8hsJkEX6CTUMipCpKRUha5L8rdZ57pKHFJQXrZksgt5nBL8",
  "key27": "2TrS2Ls1JqpRcbSAMF1oEcjqhAMTd4YgkC9X5oq9QoeB87cXFE8piHn42SnzgmF5Cd5ozx4GpmmnWCRvx5jdPGCN",
  "key28": "3ATTGWcJgqyzDnCCde58tADta3Har9uZGnztBbzTAdxFFddBmCyRXHkqGdLMNo6NVhmKEAiTvGtyhukKkVUzyWom",
  "key29": "5rvsNjSxfKs34kQchjcUxw8Fmo7iiP9xyjV7B4B3LY3nqWb1k8DEoNe48UvqBJqj2rZw6HQau6smiEveRUtGTmKp",
  "key30": "3tXbTNUfQWurBZgEqpXt4iecPcAbzgAPs4r6b1Gp1SUhpNFv4ACXKeYBXAyXkxbNeyUF9gcgn3enYaAyHZvNPMw2",
  "key31": "4nqcJRdQKSTE7ATngdSqRmW1Krm4TA1TJRLT1pHoxD9HzH2uZwnXNJzi1e43MtkKBUQ2BeXny8jz25xzSvDfvquM",
  "key32": "31KV6C71GFJPhQaFv1aiWUG6Ka8tx8iv8okDhGoyeKHPyL7M6aqSxRbkzhYtSvVGTNWFkJPXpHUUVxmUCYcLAutQ",
  "key33": "3RZoksDqwXUY2qs5fMrxiqzFMAJbZLFiJsUxyjh5w5v3M37qS8E4ijNHCoCR6kH1htW7h35UESxtbhT6d1B5e4dT"
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
