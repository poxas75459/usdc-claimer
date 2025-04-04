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
    "3MqBgj1175rtnFTDiTsCsgqSkGiHPKrMHNLt1De1swrhSbQcZmsEu7VWQYsWqRMT7jhHSz6pPTMRVrDr7WHvW3U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjMuocLNk4EeCDJ8ra9ESJEzEB3xXrBLmABF3EGXqwbfAmEqDCgNSK5LKh9LSrjcxpGDyBLeDhiFTfU96ULXCR5",
  "key1": "3Tcs8iWMBmf5qZZ4f81RQ6opiZ4SzfsycRMyzLCcCBg5DWnFAYunzGRv5U3koypYga78Q6x8z1bqtoC8ugJGU4RW",
  "key2": "3Staseeik6w1L71SaUzERoYyd1geeU4gaEZYiGrRzDf2mDn95BoNvq2bVWptdj8Vpt5VSoaS2pa6sDACJvZ4Hgdz",
  "key3": "DjxTgicomHAoMzStzaaDNckKHgWDRNM4Yv2vdycbUTqd9yUv3SWAEfL9Lzhje35GKyKG3yi1wcdYc9jZZv1i49o",
  "key4": "4LsCRBfbSTV61qFvtTGo6UUromoq6JMw9BQZGekpSG2u8ddPT2ThcMrs9SDUgVvZ9ZwWwwHsVtoeHWVXXevc7DCa",
  "key5": "3YcNnNCJHvxc6GzQNGohj8udqa7FJ4scV6EaEsxLkHSXmMu3HYkrBaZZ7j6KE6TYH1thpAkgjfLGqQeLgPNccSQL",
  "key6": "D29gzwqsLmzGJhxZrFtuMvv8PaFZWGLL9SZ7jBTjLmufVEQuyyZwJyAjqCUS8QH4XTyK7Y7u6XwpASSqXKiRiiC",
  "key7": "2e5VBxnWqNTGBPTPsFXLSeia32Kh7uBeigavivHBM2VqgpQYrMBbrFGBU8h7PNeBkwrZ6qbj4aWqDyEyeRvh9BRo",
  "key8": "3Gj7Uqhncc4yinyUYYZ1fY3BsUtCyE6PLkp3riDjoCHwHGSaANitmg3HdprQyqbeJq859E7R1yZPfp4MTuFYvpZe",
  "key9": "4J82sg65ASxLddj6kmsEjfnh2EuJzzzC9n8bdcAndPHeKW533sRU4Xm8rsZ1qEH6wndGdGV7ukvBm99vNTDEhhwZ",
  "key10": "4UEr1Gz3rjQHCxsnTLvsuLneq7ynNCfJ6HbVCvHUgrxGwYbGLrSWe9NGCkkw3AcJQtHNpGeaGXMBc9N9LKgjB7b1",
  "key11": "2Fc13MchyruSWmfhUeNRdt14fWvfm4JzLNgQzGv2Goo4MzxH4V3x1xZu18aBwHiQS6fE2DVmuoZg3nfvVxUeHmQg",
  "key12": "pF7HV1JPfiWf4XxB7pmQov8XJ3UEX64rNMnGuihrYx5aN8VwcUBHT4z36K1Shi1nUcdWAvZyXt7FkvusCzjd4tw",
  "key13": "4EhsDnLmqpvLLdho3Zukv1AGv3h6PcAK68wSsAggzs1iCLosbwJHgAPM4KQQoz6DF1mSQ5fYzSyqYtaoR6yZZCX5",
  "key14": "4zMagE8scNfQE9AzS8uF3y5e4kCwBuCAVPpeTMnYevy872i9zM2o3W2BtVy43t6doJyh91cWYjqA8mYcVahvWq9R",
  "key15": "2CVZyWwuCibt9dUDUaVX12pTTd5Q8eH8Xdnps5HGucEmhDayfhUx1xuUgjtZmXduoHhGCbUqpNtwtafjnpo879xk",
  "key16": "2VaBvkrVzGLhuiu1hhMy3F1P2KZ2uHxPzLZmccoUubdnM4qDKmuhpjpZxpe5aAQBGDyXPZB2PZrsNzY9EG4JhakF",
  "key17": "56PTZao38xi2YY1a1z1enfJKFRBrEjQNqFTRQF9R7VqcKPy6ir6zcqWx5AG9mzGjHEb75XkG9GsUWigVaXYEUYz2",
  "key18": "3jX2QejzsrFFotdegmEEgpe9ndWBWHgfq9C9jbGkMSvv3gTijPZXenqCXtKagxCgBcNjfZPiKvuiR2iLcgDPSUDz",
  "key19": "1CWGxS1AjpqMkwbuaao3z1mQKhKfUPc1oZLEazewsaGemtdnarYCFSmYb54PaaRaAG5dNKSgFM45aC2yyK3AB88",
  "key20": "26xiWp7fDZw9ZcZZGuFy6ubnnyg5pmbvj6woNy7zHfqwqVa7GHLitqQsHxA5ADXeXo5mhmePHeNRdzp96Rv8Ckc2",
  "key21": "5iQMAowSy6f5CLRQuSQCRMAZknyTF4qGKk79MHZjUKQ8N7qCfEBnTeMTKAhCCTixh6u7q7x5Rihn5v65jxQ7q7TQ",
  "key22": "46vMDHTECz8nmb3pZnt52ZQwpuz17X3TMdbYr54HUyMjJxzkA9ouMqCJpREHrVhsFrzFUbpToS19N2uN74ayMLEM",
  "key23": "38Ry6KoLvHvsdLYxkBUgWe7iPSeyZKqUdh4wpEXu1PowESFP4RwbugqGdcdeDoiqNV3tX1yRtwb5nCWeh8HJMkjK",
  "key24": "2wWN79AiZJF6KNQjc2YZnbzEcQcFo5AYi8oajqFiB7m4daqoioQrfUWsJsnDPVZwGgyhVQMYHzHfprskxAZP2Dds",
  "key25": "3AQ6bSkBB2c4kuyFkDf2Nkb9nAvVpvcTrMnLAKVazH58tfhcMUMCuXfxK8GKk78TUYpDQ68ogWx6i7kHBZakoas6",
  "key26": "2XxRqenU2CDWZ9HMyBfpm4qNSchgPE8R7n9NAFoaWy7HAMnvdQGekUtxcRPM1jMDozMpWNJDiFvX4AMcKFtdmqb8",
  "key27": "4TBAzA8jhbS2v39G5wUbK3y7J4eGC4dQPpyhYBrfVynsbMMaEjaXRVBCZznf4Ld37YJQ5rPoV96F9nL7QvKcX8pf",
  "key28": "5a6cs21udFQzYmGcr5NhgK326YqjTEi6ss5i5bN4Na4BrT26PRdv1CBZfutp4yuGvBfZVFPxdWYRz86XfSNTGuHx",
  "key29": "632U5Y8hz324a3BRGpctehgEn3rqqotYpRC4Sqg5VudQYjPThE7fZLDpuCduiGswcUHBmUnJ2uM8Zb7zNYNorfiP",
  "key30": "4vWxgEJVTL59rWY67nPwFiemo8mnfjH6oPNmgWAJdP8jrv6QAQKKh4FfdmFyRXUjHU9te6bsQinAB5hFB9uipPe6",
  "key31": "2yHyxt6apw4uvjbvdt5msrBXcFkXAsi9KD8kzkDYqufk43ZKnzLQwK654SGp26XrpZXo52uKbJdmhf34pdTWcjqJ",
  "key32": "4WHqpQSPm3wkCXsAqhobkztoxJjLVGJjmSRJ9bbiXH8WvvFENWHRBmTbRN8zosaVy3ffnnh3oCtEPrfj7wwVy5uC",
  "key33": "2uJRKEuTBxfQR3E5KnPn98yHpoYsnhUR81QeRzmVgBtBhK4rWAg1x73Fmqq7QgUm5zR8CvbQiM4HHubeLmad9umd",
  "key34": "PDd4fSLz8tZAcnT9ai1M8y2NHpFs7K9tMztV99uH2qgazK1tFiywimGQTjXYw9Qn76WGpmPJrn5X4tmVkVAWDCp",
  "key35": "54hQpNy5znU9CLV9A221T7aYWWehm3MuGP5XCVMEcictV4jduEc9UMebGEtquTgMngJdZD8ac4EC4FsmwiUqEeGY",
  "key36": "5muUvcE5tKsx7dTDNio9F7nTQiGBhhgUisPa5TnmYUzeC14Kwarh1ftgg1Aih9PETdZQrY7Ytunv8Frxa2xKq8Us"
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
