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
    "2XnG2BpZfPFGAdzysfxEgMGJ6sC5NQPRrjc3qfGkupzW2vqM84RKPhAVHToEYEGoH75JCaEartb9Nd1KNPQToHqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541Su7wpBkrZp9WcxuUUYu29UQ2NA6RYSEaDBTu3ZPuvkU4jFhWoWSi1aGTY7vH8LaSspCHYBk5CP1gzEt1SqUk4",
  "key1": "3ba4qUw6P1EVoScwijsswWrRUcB8YgSXq4QifTmWeXsrma6rgdPrXqmbYDXDT1DaxnB6e2DuoBAYNzom3BTKsgoX",
  "key2": "5AwBMQ4Gkfbd2NZaAx2qf7FCZiNPCY5itEptEfbaLMrTTVCsV3hdAEQEpTUvUy4sihzb1V9gkw7xwzzdSsTWQqZT",
  "key3": "32uysjc9fkPWfTthNdqzJuHR6GxExdrF7ppSknaLLNGzKSSX36ZNHB5AiyP3ZXhnkAXbotFnxBGtWnHm2aQ9GRF8",
  "key4": "eb1oXnu32XxCrMmC42Me2NKBDtFvALfKF518tBp8SteUTh8FibD1qanb9TznQEFwGNp2Qumq1688saH28xjmdFk",
  "key5": "3ju5Groh6x8QYzjq8n9dFdMMimAKNA1JAyT5zRbc6Zb3jXtm5k69iB3M1CZprAgd2XawBuur6RypsyUTxrLwdHJ3",
  "key6": "3NhP2H5U5bCW9FyibXwPtGmys5QoUJDWWPo4Vxr3hw8zRHCZ34zAxVEK72ufP6uXmDUDnFnEt1QSKQi4B6pGZLNm",
  "key7": "kZDwiBsTa8kzHvT1gWTkFjoKSxv1tV7gNwipq3LzQjXe24n2DfYTAJVL89Qu8SN1gcKE3XrTy4YSKGYMcJVMUqT",
  "key8": "492WqohqvwVQLhi5EcXVePdggCgvUXNY48BvxAg1QfAJgFpWN2xK2cB47NTv3e56R2qWFNW9e5mWadpAqjD2R5iW",
  "key9": "5s1bBBfjPM1867BJmmcXhZDY7CuyEPAjbSZZ2RC8MnuSPvLBM9ewTYfRAwWyPqFE3h3fyb14k6ehsrY67ax8rUQc",
  "key10": "4pL87PPMv8YWCqXNr68Ej2qkkU94vhrxWmyaHEVvEkLNBvDedL1wZKoijBP5a5PGdwCXWgJYHBa5oC4a4BFipVwj",
  "key11": "5UeqLoe2YD7n965NWEWVerBSr97kf8B6eUHv5dV9UHunhQQLUmT8ZneqnSUoi4TJUwEpC4ReAeTs9C6zbjX3MB3X",
  "key12": "65Wb32ZVBrDTYVCpRyprFzddSxeQntaeCn5XpmcKGBsz16w515ZcX6T9uwSZwaD3LE6FG8dweLEaNknxK5Fsj4Kj",
  "key13": "fx9j66jtxuRrSefJLhnLszipqRmwMFKTmYkHesN6FWMQxMqggZ7CmDp4ysgth5Xypz71m3yyDDSTwS85LQXjgu9",
  "key14": "521Yw5Dyt67xfjX11gYuGDtFtp5sZG4x5kSVR4CWFYdXxRvrrj48HWCcUxh8Y5tWjY6UDR5MWoTht2WiDSwD5Lf1",
  "key15": "4238qoue7fGCeTPQ5Zkpbs5bAFKro79ktfS1XzhwVce5Tbx9S4bkburSYLRJN9xr6P9vACXVRy642wYaZsrmtde",
  "key16": "3R4SYW3wQNu6eGLPks5o3akdaGg9KiENN92RqmdHqKbEgE9JiVjwxA9Q32V5XybQ5ytk7DNmfNQDaSG6NuMFrRAe",
  "key17": "4GSGpUSZyVxW4nMMy1o264iJBRG4eLsdsMAZaoJswYVSzR92JJa7PJpE7d52YEJ3VR44c7mDCL1nLHi2XhMEazGK",
  "key18": "4sbzio39SK5Na6NYVEC2x22hDTJWW7cwydkyWVpLK5YwDkAcTiurweedgpYRiHLXNYux853U8wj8pAvJ37otnxfN",
  "key19": "5nFVGxsLF1SEvdD62Qkmr2yqb7pPPEQrX9gs8ZfMo9BqL7uy7pqjRLfBP7zq4pTQxD5b5raZUkN6r3vbs3t95pgh",
  "key20": "4QBX1q9m47mdFDt6uDvehXem2ecnJCpvowZqX8PStr52tSGpSZt5uZKuqpLhsSJY1DLxmssCPw1FvJBfwr54gpJs",
  "key21": "31Ubut9mhcBzXzRmnJrageeDf7F3hFWbFsw7QZikfhBauKDNrvPw1L7nz4ynSFj3oPkFUQ5vo2bHHVRMDvJwPKAH",
  "key22": "w7sDoTqWzUTzyHBr7ewPiKKV8jZw6LTREv3gamCvN958za2r47m1uSPHA3bef68DWQ4ks1emmGgdcvFaH2dYnT9",
  "key23": "2RTN4Uk33TS4snF5WnjeLYKqEUUXztxmYMgSnBVw51KE98JdFUU8ZzkTe165329cqHYFA4mwiAhYBSVKptZV4qHW",
  "key24": "3JdXYjcU8oRMcUijJ7h4b8ycKhYCyzmoL5Sv1CmasAFvEjxMQHav7zdK2jEmk4MFWcT2VLJPsbwRga7D29qtQS4n",
  "key25": "512zWmyuiwA6vpoCujakEVmiiSV85mxb2LwqGP2m8yTwUvRxasG7TaYdUtWKi3wdMttScgEaEiNjRCSycTYs3tjg",
  "key26": "2Y3REi99uhXpez5mEdMGiD1onQK1pwQsjqht8Yevj1FatzHZTcGVFqgtNoESkWeMxF7cDFh2BxRXvz7FcxdWYF4H",
  "key27": "5K1R5LYrYdZ7rxjSfAem8CkMTXNU55BKUiAjCivEYH3mTQwGtE4Q5YgjiLzZ69DrU2d3rL4ZDLMts8hPtgSUAJUs",
  "key28": "ERrYoBqhdLUrkodzHPXJSMZcRSkX3ZBaBjoE8UQitegA7yZMqL1V9juYfogZz9xUPLpXJAkotvN9bjrHUfR7ZqW",
  "key29": "4zJPJMRJM7VPosz36mCikrtaXJwKy5Es6AcdXS5V8PuZmYXjKfRLesjyjfmdFQum1YQ2qDohGbKg9phTPpSQvJY7",
  "key30": "az7edpRqdrUe37wGHaMCSaPqqqEqgEhLpzV9TABfjfWwQMopkxW8JfGVPKN19tFMNxX4LQvqNv7of7xmYa8Bpr5",
  "key31": "5oyrrVPb8KVCBZLvoz6funacv1CF3qmzT3K5iG7x1JkW9uDGgUp5aiKvrj2HWjXW8XFfDVGWLgSV6F8QT7pgRTtp",
  "key32": "3m8o1EPeZDXpyNkmVdLvNeiM3pnKdnKPHux7zHsPsF2Ps1k4rpfqSUCSDreCs2FNFaSPNpFp9W3Q1uvbUeWMxqjh",
  "key33": "4fdKCANZTxZhgQWUxqAEcMA1my8t1dxmnLVCVEHHdHQs1wA4EoXoTBpUJA3pvD1Z94EgSDR1rbyKat3a2ArErvpU",
  "key34": "3SHH4mqTxQuZejXEX6r1ZuxA5pPbZFgSUVjop3H74NUZ46WL5sHYYTJ8ADgvvFVLQ7zS6cC9chzb36mGTNhoDFbE",
  "key35": "3PeJEneLMMCMhHFpKiAtnMLBSWw2Rh2u1P4RTiX3M9CKc7iQUhbJoiCcyQF8KqZGMWjctFKojBSgx9i8QASn9rd8",
  "key36": "2KyJ7cqyoQzBLzr7q6YtCfgchr1whWa6PiNT5s8GozFHSDk8837xMZVufhuexgz4aZnTwBFZd8q6Ex5vkegTyfHM",
  "key37": "41dVyyeDmV9Skx28LdaXAeeCebhb1bd2Q8FWqvSoVVhvtPkD5qNCR9boaWRW8NtPFPxreW1aCtEp2MzHUX5K5mKz"
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
