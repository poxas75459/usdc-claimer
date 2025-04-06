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
    "2kjD6TTbDPm893UpdoCN92TvcsuA7XrQJ8FECVcomyugoNy9Bc2gRKPQiWyMv9G63nktUS7dAH3hyF1L27VpA3ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qp4rE5LR8kkR2ARAK2pasVLBytRuNHtfDvaX8CjBTuP7KHU3QzAVs41xmPToUr8B5M4TSgLd3FjRhhs7rGdJRBt",
  "key1": "FDidaHjkUi36MCjVQkwcVMCQbCzEfN9oKiY34xHMkBJsQ4eMoPBZVh6iLyijFQbaGNHQrdGY7k4DBL4JjSArn28",
  "key2": "nMXyrJoY7yLDT3dREpySstAz5pMV1LBepQ5azboJWYCx8SRSjZsTaVNPTLUCPVo1iVXRiriF6E6xkXphnu5XcTf",
  "key3": "2awPo8SzHBw2WTMJnvdAWbTEt3P9zPDjJXy8jNML11m9eGToPX8C39aWi4XGxHUTUhTJzLjL9ZzDC8Bfs7WYXUeH",
  "key4": "299dRRX2uetFVNMY1N34cVq5VtwLyBJs4opfCA5Tc7dVzDcowPSyDSTskxEqcfzCH2D6o871zdVF2o9MTqb6CZam",
  "key5": "399JikYRppvLDAzxyRL963UaztrFceRHfqbCCFgRVhHkBpBFWsGQQy3vGmsVLsyADTdGGMPzezseVr7kRuYbL9uX",
  "key6": "3HTajsVi4KTw1zdx86HeZgZkyQngUkZw1A6TFQ8s96ZKF9YRnb71XR3QnSR8raVAhfLyiKdmU38RQo88YpGvaC93",
  "key7": "2xKevefLPjJsTJLdutfyJ2cNiZfwyqXt64RL91UVNLjMEPcTnJx49Pq8dw9DDMFVirvqr5qtdMjXptU9E1Y2kf2K",
  "key8": "23eViYCY6jG5RL7CMtMo7yx53Gg9DaHGkcaQhy9sdrrQUUsXhYxzAPkpTN2txfB9yU9aY1nGrXRqNiwqbQCCFkDN",
  "key9": "2TvSR2MiYborxbncczBjyLBSXcEtfBDeyajaNKKsCDgB9QJojjijC1RdtRdZryXyF4gEPwLtrCWL5nwqFR9kJHWq",
  "key10": "4rA3i3dhpUjQmW3dG5Sn4W7hGuopKSnhSpWyfjAu3Pep6Rq2xEYf5fyZqN3NjU61ErgJDUpciSAdV8hDYscUtLY4",
  "key11": "5ni4N4YnZjY8jMZ6HheTMHf4QUfbXAFA4UdCHc93rE9Fi4BMUt8wXwEykB6JHL4sG1DMLVhWWgUYoqUZSAw453be",
  "key12": "3yLfq6nojyCgH9CB6rr9fScW8VfKTHpUTjPrbjkRPbCe9XQFYiMyTsnuqqLmLybntBnrCK1VVu9XhxkNZ7oY142d",
  "key13": "4XKxDPJZhjfzLN33b9LxsY8i8Dy2ZyfVuQUpfT6axp8vMY5RhQwAVuyfLrsTWboc6W4k9Q8XNpxHGbDaE8znicrC",
  "key14": "55JrEGCMe8P4aBSJqW3eWhxPUQbZvkaHRuAhNoh2f2rDBkpUvETDDZskwfMwncJAE1uNJK2U3HPNeDVsMqbRuahq",
  "key15": "4CaZY81xScxsihzVfrHYE9nhPmjK1wAWvcf9DyH57L4MC1vAikeZvdycSAtc7jC1ajuAfb4kK6Xu5SyefsxzYMhx",
  "key16": "4JrLqtt6zJ5BFXg22AFQaLVQsp6PcpGs5C1ufe5wWVqJXzN1b2mFjjhuQbYTkzvntyhguXrPeRf4u6HkvbnBTQbM",
  "key17": "5YEdEHV22QTuFDHm7gw2oupimaS67q7bCaLjQo9WJpywZr9Lh7dpcJUyDCStWJu2YMENGH8WMyUkTyuRNTwj3xwN",
  "key18": "426CstsvVJMVyULWXwAmr2m4P6DkRvKxrtowdeXu8e2Eje8wrwY8yNEhdVVsFqLFGE2bwrS8du9bL6cddYUkkysX",
  "key19": "wd4HH2fFoC6ia7ePnyvec1eDUmvPDD3Jr29Hb6PZGMrR8TgYfWvCjjBbzkut5CUXYTm6eDPTX5sfEhLQFAtstUh",
  "key20": "2C286b7bQYjnsxU2KTrDdZF9Q6Fu5kP5CGiNcYLpDuaTgBsFYWYhLxdEbzhWo66zxcvx5mZUa9CqQKN44EcX41tE",
  "key21": "2i5VRdP2CPhqhuf8b8GwRQUkD2JQRaeY7NgpnMErXykB6HDs6UK7twyWEDC3LCnuYhSFH1tfnhifCxdzNL7hsqj1",
  "key22": "j99zUR9SDwoSGSQR2G5B9hiL7At564ALYtD83dWgzcc58REUgLy8bZrK7CmTukm3BVSjag3dY3kF96VduTKspZf",
  "key23": "2uiTuBNcUw2kJp7KHyTQrWjqyGRkHkCnz5Dm3rZCMeVT2J6nkZXxB7GxXLaLUGJppJLBWxQT6RzyWcjJjVWmDNFR",
  "key24": "3K3Ykc1NwVp31pXC7Q553pm9bZs44vEgGWHyYG1ixZJne5MJWun37JAeVRQcekGZRfykStLNkr4zj4r9u3xDo7Et",
  "key25": "25baNwyfH1zUaMJkXZLGNmGw3Sj6e3bCDvuU5LxAKa8AEvKHFJTt5tzapeedD5yUBw7BizFSM3NcKUHPByWdzkJv",
  "key26": "4NYBdxRZGgyzeQTYwfV3zyJAbyhhTPc4HaNfsYBFs8p5fxWXHscrCeQYepDAtiLSnRYzPyEFsic1xCBAAF8wmLrM",
  "key27": "25a2pHDwQtrvggBJgERke8R49CpW68Nmp8nac8bExhCKXBanM1uQmCgjFrXGui3ai48aE1r2tiLo2RffwzhBoc9p",
  "key28": "5DL38U7GfDekdpxK4pUdJCfCQwyYMaGTaS4jX7Mn2EX8PrXAYzw7c59wz7CWvyFeGAtqBDQwcDrZ5vwvK3RVET4h",
  "key29": "2kHCaP4zbCe3PdqDkC9pnMsJCAJneNHFvT2pGbRkbmo5xt3v3VChdT8dAzyrp8pYjbuDMmrhDwYWgi4cDyWBHJph",
  "key30": "3G8xgLeJ7sR9S3zFwEX4wzXuu2fa1Ki91tQzJAQrNtRm2sX5CybzdoBGgdK4ApjVzhFHR8EHeYKABTPMvBQHDJwJ"
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
