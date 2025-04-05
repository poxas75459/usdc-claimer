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
    "4QdtSmQm7vtgySagsFh6znsuXAiMNfFc9FuZ9oDjyN6T1DmYp3V4p3u3PsbbiT4STBPPKcVBWAqC2NF1ShjPzAXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bW4SgNMEoC5PKPDaNLoF6WeDntnk3x9i7qRVXbxy5i8fDzwySono7oVzbTH8VLWc78c9m111QMY6m5VScmH3hWm",
  "key1": "3xrTfbsY4X7htb31YFU2Zyej1YuS3mrEX6dbVJWt8GLWUwFa4wNKtR52YiUC4WeP8LRY5Grw7aLA3dwUWG29wMLG",
  "key2": "W1P2tLXph6HZFxhYQF8SjUnDbZb7YSNj98fKLa3AmWjHzn9Nw5Q4pAEVjgdVMehWKV2KCGP4B3D3amy7oETVhaG",
  "key3": "TbF1udGC1biPR8dTQWYZKNHqXxyt988PC2BX8tA6SWRGa7Em1LajkAv996LQmGRDxBcgVxNtAzkQssjxhMfL5EW",
  "key4": "4xo8UJ3xEit26q6GkMcMb5zJNQPsS1C9UfyZHcEcdcgxqH35CFqMUrXBuTiLaS36qgCbg6fGbQufXvpWQUP6ZZ8D",
  "key5": "4TRmshKKXfDL1qXiG3ApW2ivtwawdL7iu8NEz6W7nnG4n6BRPXHCGRBCCK6R3isPMRw2cH1LgxHwk34r2PSL2xSb",
  "key6": "4tvgbkFAXkxEjYbfUqNihCb8tRTH1i9eYuRj9BcQPjxFeXjUnaMFxJcHpsWCxEREtMh4vPgWSxrMtLXJFpC7JP6Q",
  "key7": "2FVYX7yPhcBhR6ZcXo1iXF6N4NmsH2jeHUA8ifHPeH2CHg5n6T7KDRRYd8ZUGdSRHX1B6jd93Zbhw4dMeQXw55m9",
  "key8": "4zcJmBQ9L5kRkkR5NHyANcaaQf3AAdHRk2dMX5JSkHT1YDZttJNNfqv3VY1AEVptnvA6CZyhy3TgUGTEvZqFxhnx",
  "key9": "32RtLWJFCimHXeX25ADQeW4LZjpdK2DPMJaW7B21kuwR9mJJBp9Hb7VPQZD7jzi9oxaFdz6BEC8cFqyo2hTQeAk",
  "key10": "3dFJmscFmfprArwUv7HU1vJCGcJ2EXRuwgEdsev9JWL3BBiXRGgV2FpeiS1hLAtnx6QUsjFWapFCWV241jSiQFSb",
  "key11": "4Do3ecijLoMTqJtrAaCijYehV6UFxBjVwp7FRn4mmXA5yd5GPV7AF6xgEjEiNsf3GEpyvriAbUXgAfUtNWAyZ4F1",
  "key12": "5wAimUFbJBsa96YdaehrzmR5EgAvwXkHy7UoZFtnDw1wrteXqFxwcnaYvJjHiycV7Qm6wVxHSzCHeDLQUvbmEfvN",
  "key13": "2hJjuw1q7i8SU4SrC7Yvs1aD2PCd1eabfQ2dJFwzA2GbgwoPrLWzsE48bhmh3SXuDTWSxq1BzKFMUC7JLF4sKtgn",
  "key14": "4z9YeskuHFj7uhgRMKG4pNSqgSw2obGj1aUjSDx4T9KVehY7EY8Nxj6yrNftzYzkhiuNwvhjoyqcWyzsZgqiFMR",
  "key15": "ci4P2TkkAvvCcMP98JRihAHqCFJmSthTcqtWHwaS2nSvLZdrANfgoDpkwRcc3nJ69X7H5TMdkatkainS9XsDMWn",
  "key16": "2Q2eGoFA1wbQf8iqVijZDwyTroucmjGSTrdfA7isJfjKxYAbahjxPazeaxHC2fobQvX6QEGzp7NGWuZW1GqQbJP1",
  "key17": "4R6x7GbTdTsmreXEVjcKQEzjwPjsVMDVFjSk8p7wENErZEQfBTazS6vapHvuSks38pNTyvXbi6Cf6wL45uWXuLWo",
  "key18": "3yTkJA129CtNZVWVhATphxCNAWUivn8RZeYGknQncaLQMQ9qv9RPyeRtkNyCr6Am3PDv6zZH8u1PZLPWnY5RgEf8",
  "key19": "5HWdURVd5fJEcdaNdrZoL2jbKfj3AfnBFxcupYoke2tLkp9sgAmyFh2FFT2oGof3WR6YYEhQpJV2JvqXdkVqNbrh",
  "key20": "5PQmZqeWZfTC7gS2pvCtgepsmLpfwh9qCMSyHrUj72EfRuv5iXWGjDk7X5m1Yen6YaBjmxVejs1VAUVpCWm8C4Kb",
  "key21": "5BmA6UadE3GgaY3pJpb5GxeUH88QLJsmpMyG4vwiknYKkxTvzzyKFs8LCFTPaUvaQi7igCVAysYn4VUk7YFxNFU5",
  "key22": "2S2iHjU9JFHyKS8xxweEYTDhAPGg2bXM53FEWVJkyzgjUr4F1HfvUWHXNLvvBfbcPgNMaByRipS6PHVCngcYqt6u",
  "key23": "2tTa7jbVcYqHrPj18PV18VKFpU9jPGE3bFhCaTCYkenaL1TLECzBdg3iUMgYzWNC9hi1Vajzq1vYpESb4gqANpqg",
  "key24": "3BWPhYR93yKYwT9fa9wuFHfMmkQzyWDZ9YjZnMkywLy1Ka7WBpwBKcXs7QUnBRp4VPfRZiXEwqYLJED2HEcPAdBA",
  "key25": "4hRbsWD1JLfYXkV1r5FXwfVs6d8EChvWBKiCgLHVAFaCsMZqMGhHTN8nXke4meSVsYoZK8G2S6S6Gy8DiXez4zYb",
  "key26": "MrTgPJiLsgQn4wnr3BeUNEQgvidhWf6CJwCPTZ1WYxtgV5rVs4rduBE4vY1ZiR6PxgnB6hXBgkTdCGNj3dkrRSp",
  "key27": "5jaatxUV3bpuZA5sKoqgyPtQiq9PAG4oBuzBkqcMdfsdap81NgaxMmwgTtuoaYH3bPWw4JUZcNWScJFt8Gy8LZSb",
  "key28": "5dcxgjKUnTYogmtSYUd4fjvdLys24S9X18i3EirhtgFxLjmbvpB5SEfVPWdfAXK71XFqzQPS9ZSAPtYDY4T681ut",
  "key29": "zz3cGQNgY71YuGzA4Sw3J5do1vvMe4en7eUep88rrYZkXNid6wGfNWaNAgY2Litpx9HBmtKqZLvAFW1MZCcyoDX",
  "key30": "4Wvf8JCTpc3Soi5kEuYcZi4SR8QJ68HDj7dpkjfxzTBegoBgaK5jDrgKV57BHgH8JeDDnGBPJ1U5z72tAzU74HUF",
  "key31": "4uLMJNEA4TsPPUHK2Ub4e2Cm5cauSPZuKp5jYos8Zg8F4BBfzKHDyRkCRSw3xvbxtSe63yB7mSo3RhtrHiWrHEow",
  "key32": "5MwiQ1SzqfK15m7QcQJ5K17AgmUvZn2yLvV4aB1fYcMx5Fyhy7RuCkLPSQ33muY1g27N11yb3LR2FGfNAkmW2PWt",
  "key33": "iafkZVTLku1sXi5Vp5n61aVK2KZFDgHbh9iW5TL5mRZes6FoYiYusmuT7NYDcLDBFFtWqSY3LMm8XjoxgWqa3ic",
  "key34": "TJoxqQvJaLBmKFMpA6kEHPLCqdjfzoJrfCHYM7TGqFxtgC2ra6ZXWjCDQEKkrRMcj1yXdQE2FNHKFR4oQtYYWQ5",
  "key35": "3ssGaR5bsJPcL1QrrGzKZmNCCKnL8wpRWSafTnAwRwVYeu6MGLuvkbZGcDZPRZ43typBzeyoPousd3PfH5rwp6Et",
  "key36": "3kR8nkmyPdJXCgmSvLqpnK21MRChq3U5ouNb1KhRWKkNRYyn6VgEXnmc8iTqJEJowF5sfoTxvi9N1Jc65uQfPar9",
  "key37": "33gzpY8ZC8NSL3ykHH1NU8n68imxnLH9aQA8GDoJ1HFC9yHvvQktD6fDvdjQpXer4t8MpLrQPQvqJxhEQAwop7uu",
  "key38": "2HSetLjPAsZ3zNm5JVQSLWZVp8ibuCAR6nwzA6ANyfWJMAAWfVzxigCmsPi1bXokfpFbEodWtwZ2o1MmjaozZ1w9"
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
