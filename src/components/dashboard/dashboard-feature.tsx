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
    "WUUjSvpptMCAxtK4yaFLuhQx5Tk445XKc4oqe6bZFmTMGXTjDXFxcisPq5fHbkVcuXFBPfpCbWBa4qpzSraqfYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2DGU3YcjYRvZjf59vec1P8Ppdy4BeF6Kf4QnCLqUrW3ZB7RTuL3XfySA7NiRfJ98zPd7TpnY2mKQmU85h73pV4",
  "key1": "4G7uqJJCWpA97MR7aiB3BQ5Ldqj615BANmEwMk8v9dzqKcwVwtRqdzWMPtyEtw4UEm9wYoGvzPKh86aDYScEA1Eq",
  "key2": "3WLvSHApfNJQzutiD3g2h2vJxf5VH9wuZfwEfQkPhtBG2N9N4t3cXrSNG9wAsKcDt28DaW3wKCfknBtvQUFPNPt",
  "key3": "3kDULHu6xUUeMP9MVYEZJPgtLJeQ9y5bi59WN9kBCb7suxTqjkdgYsrkJCsuxstqAcNSgWiCstKgZgRo9Bh9Dp3b",
  "key4": "4YRrXHf3XUj3DFfKFwcrUYZcNrFeiP2sRB7fW1W1uweF59Nm6EZcwStCUDnFWaHPVaqvdEbs1h5hSpesaPJhJmb9",
  "key5": "4ZyD1Mgn99WVcB6fxKXmDAo9nKZ9xFAtDiwY9kLbPFrJsjocbJKCK7H62PHQ1DS6bdUXs8uQgJWQC9FZduTaLvBL",
  "key6": "3jXTdURqz8uqmNiVwNckdGcZ3kSD5yp5gnSrQBC5yh2QG5RugWCYEvZ9wh197fLmYfzqEieLS9MNUGyb6Mck6tX4",
  "key7": "5JGgXAtEMHzAk7z6LSfV2GteUYsg6GNbHY1hfWHJ2LkECLmbqJJiE9t2gF6RogLDLp3hi6zmWRMSZv6KMSLJLqcN",
  "key8": "u2xU9bXacnoYMgNMZZZkHn9zpKSrtsSYLPr8bHWs4QbQZSNFbY2Gco48z3WufZE4ciu3cu6oHSLxUyLL6vosrn8",
  "key9": "2MFPjnRSnEGcfqLBEV35Jvfh3SqecK3wKmwzijRvvozWCW932xKv9fv6skeUJvgCUjj4UJMhwkdLZa5zNXk9Qkrp",
  "key10": "4gtuSV1DV4pYjGJmn7r1c3uioHjaPpaeE3VLY1reJ66upyKXBpCAYFQPU1mWFjmMRK3wFuU5UELmgrpdAyNvFZ7H",
  "key11": "6LQ7nNtmXQtFs1y5824tyQ6oVQQ6zqut4otL1cy2Y5fAbWiRTq12osgTpUFH36zsuv9Byxn36nUsNahJzEfxi7i",
  "key12": "48pyizz6JaQDA54uM8S8S4DRRDa6wm5i1kP6vT7xhjCDsvG8gtXG2gEJGULGqeRzhQRFFWRvoVhVvug2oaZvbmL6",
  "key13": "sE8Bxya16aTBdnc6X5ai4n39Q9vGxy4rJzSpUvcJw78KMTMDUME8sFEGzp899P7KYHZ7RSJbWKoDw17J6y9SirT",
  "key14": "5aYUgqfyy6VBjGMvHSzGgTMYM4vzZW9K9uJSegdERv2TgumNsyXY5z9AHgJyqchGWaGqXxv1F97unEAuvANhD83r",
  "key15": "54671bzfcgyGkZrDFwK46KLkMgRcGjGhiicKvcsfe88quAJnAsQQjiVUKph6hddBZPjWfMuxQL6huRxpqwiECfhV",
  "key16": "qpCXA2zEumEtbmHN4eMH9ac5eERNJBKfKjXAJSL8PT7cfZvmxMqzhjgviGd1gJkqWhhp39zwGUFMAXxQGt7rCfL",
  "key17": "3bVZCTcyhc1Fb795h3A8Ef2G9eM9e71gXMwFeT7jXdtkeY9HWxvL3K1i2PJeZq4Wy89kx27KU7usgXbCQTFJ7PZw",
  "key18": "44z7LAAyY6FTzusicqNugEwj7Z5qQAfu2tB3qWd8nvE5ZnvKKpPnxsRjRdPHtEhTV5HgweXqLHXnXrYaHkqodbEC",
  "key19": "2dssvgtS6pZNioRNonw1edbdB7a5je8bydagRLD63zKZfGV9yZz1yVMzbBxdoFNn3KVGsnFja4z3TvUETiAh72aV",
  "key20": "5CQDcuyUySs4G7PBPfNYr7Pt6Np8ccLYebuviDneNVPCCo4iFgdUiNTUMsZvyqwdtG7vrJSMugqyG3B4H6zEoH7E",
  "key21": "RVNiAhM1EuqvAv92oXioK1S5N3VGHFs1JjWYkqGXffLfEpKSEzpYuSjrWDkMng1kqPevhgZ2naiVPrm9s91GRXv",
  "key22": "2JWzKrw8KNH8SSJtuL1stbE4aFvWSCc8S5zY8yBW5tgWtpXWiPRCrrGZmXfHigRFg4hFXJjQ33R1NXVdoRfLQrhH",
  "key23": "n7jrkGQ9Bmi9ar3dwpNZduq1Pq8cM7WdmVqde2pTGvC35kHWi9krqKY59vPpuuQgTiD9P4h1i1F93Fjz9RAtnr4",
  "key24": "59e8GZqW27RhiNotvutvrT1dGP9YFBGjbKRr2Ziu6yVM2LKwZTZPVZPpGJonT6pFAQqYdo3PQM4XU6nGArrZ89rc",
  "key25": "4CgZWWN52AD8zfKgo1TjUAdyw4EmPNSxeQJxSkAXaFZkWgzJe5nHBgLJSwce85Kj19RKBoWaSpqZRP8NvzygjmkU",
  "key26": "3i991by1T2zUDnU3s3vSSyz9CaSwpK1QKuHG6HBhV7TKtJg9NseCAqyLZGewxajmXx39XLRwdUMtfcKwBH212vzp",
  "key27": "2jDs8SBneiVuB9QXaRZvLzjSjPRYgdYgijbeb2i5Cx9oEz7tAcPQaahXja2GncHmK26y6D8LUmyfwdTeHtMvC711",
  "key28": "nAS8yrTL438C82eWSH91TDAbba9WgR69g9PHhRkbXa6EaLHeNAB1TDAhWWQKeAJfqsurv2s1fmvW3VjMM2ebNT2",
  "key29": "4DrLNnDGzsnwZkBimQRNkuNSMXUVeNqTtJ3yokVJgLgBwhV5AQuo9YfZmiSGvowzPu6ETxhmBRk3UXUvQx5q5STb",
  "key30": "5QK6EPTam6P7DDJGVKU9YThU8xaXbCEAd6KMuoB3QyxeGdcwh6mVpebK6xuTEbmapGnimFT1aQnCMhS8zXYNEUbb",
  "key31": "5L8nTq1ZbZFchJZR5mBdQvxgF2LwrsQvwqZDy13n3KCHdAdY4vmkpouYdtTYUyQxhHC1B9ByAfCJkrRMQhHtBUPH",
  "key32": "2rZESeWK9Gwm71fK5j41TqyKDfTzYgWrBu2R7ebtiVG7i5MXQoZoJPdKGgA8wwA5tPqkJYkEbovv1jrVCnzcVkPB",
  "key33": "3xEm6mx8eSepogLV3ARHHQpgQUMUpUYC3odws9wscaQupYoxgqm5gMd9p1BUmGUVcAH5D1okbR6zpS6Yqq33fphE",
  "key34": "48U3THZnGgAxRjF2Vk6iuSyfGG7NYGKXTb5kjzT357RLy4gbuNC19mMegHuzxWcUdUftCQm6jeTLgDQQEyvVqzR3",
  "key35": "2917gbUB1xrYQ3uxubEPHwc4kAhPKQgSPAwPYYYQbaebpQv18We76HxL3GtQiX4yPZS8TTnhT6U9cMvCVd977yUX",
  "key36": "4LdDzLRsH743UmWE7USaZBwfsxRaHSmy1eJ9JzQsDhzaBhajnHe8ohCksEccjqHRiikdgfZNmRbN7PcxcNyBVNBF",
  "key37": "3QEE5H2fcMTokAw989NFjdxe4k945WH1EkEjh8UCCX1RWHrN1D4YrNx824Cf5Ev9Xbx9hAicYbbkCNnPMyfsZBSM",
  "key38": "fi4Up4XMXcGzxGVDeEVhzys3BDFh7nbWu99S251xGv5b61SLk533m3yxDbgG3pnCTkK6RGnDE9RiqsaJmT4pUPk"
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
