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
    "cEBmrbiBaQ5P9mJHQpV8Vx8LiWFtf4PZff4J48uKxkgxHARHpdbeXdJCf7wT2noTjDfG1qcY9DgA6G3zEDH5ewH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLz2c2Y1xjBpjK3gG7h9m8ycYZxs3qA7Pz9T5Dp3fLNTJV3ps8B8JigmpNyMfKrc8476zLCVPZycz1DBfs8LMx9",
  "key1": "4e3RNm2jVwrsdDUyLMGuo5DSREErcVtuDq6NPshLDVhWFY2EeTGan6Ec8cG114HG7gK5Pdzx38BM5SL2R1Zab7Aj",
  "key2": "LKBZQohACAMrqmMM21tWQk7VpJCzW9w6t78Yp2DS2n53LgRjKgNu7z44QGv9mJ9VVWumuCrS9xpy6MtwPwZgJf2",
  "key3": "2iBDadRfxWthdeRVdeNuBMrbrkryG98hfYDZzVSStczMt9QdvABfmjVsSvFnhDQH37hYQoqXWmmVkFC8mLePPMti",
  "key4": "4gFbrxky174gjx8fb5iYfoVjRcDUCHuUcYdtpK3JqsQ1F7LUYQRbQkhQWyfQzUqN6D8BjVkYiLBX6nCoYo6kZ6Ye",
  "key5": "31a5dLKCexfqnZGzsGbSyYW9TsEYHH66ocPnKjkaFV26p2LStNgtMh3RivfotfuGGTHYYhLaHUpKFgjBJJYPAdHQ",
  "key6": "3asdnEJ7ZYXe34jGPRGpcg5PcaQopyqe5SfFubtz5935yro1HVY3mGN1HTYppnzdz7B3R73QtS1A6WZDrAeyg4XJ",
  "key7": "2R6384WhkHPMmdHTwT47K63MWT86L98jU4iVDsFewx7GAEXtYfLFfmLd5yPUzB4hxxhA8QWnvqghSGapoEE7Mo1z",
  "key8": "4EFVPcR82bTtgvXZ1PqqTHVnDmR7mAVkFayxV3qYkMApXEVZgRRUDgs2b2HgRqY255xZNnCakWakXvGF5cpReeXA",
  "key9": "2Lz1DTTbgBc1gXChGXPaaec8u598PX11f3oEHKdonPkmvZmxDQnsVAPvR1dcfRLHT5daRHnmcQVbSNeDwRwPmukg",
  "key10": "CDJHWnxWDzhLHMEmoRWS3qYwkPQ15rbYDtA68awGo6bFFLD85EW3LMwdsPERMRrAZt7jzKwUVp3E7YyhubcnZf8",
  "key11": "3LV2K8AWyjKXdTJnVm1bAushz8wFUX2FTNSNU9s8VMRL7uY5574R6UXBAmmHfQJahADmLs4CBZU7fpGQuAzmpvCz",
  "key12": "4G5EmARCGzudm9kxXtz9DzpPCdrbmx9qioQg5nDHDh8mYmyV2zT4YeBJ8JPuWJ8RCuGj28cy1JeHaEsZJjakY2KU",
  "key13": "4VDjZkeqbdvN6VaQxAyT3FcPTds8Fabuwba2tA1bmcKiwwJzqaErqeFvNV1hCidGRWy9Xqip47cvdzVc7FaEQ26k",
  "key14": "2zToiKK5dcsbegvyQqK5ASG21KdbfQbhDtgEubeAf6WbdWJ2yg39k4pm1MhqLo54caPwnckSMw9izQsvehZx6DrT",
  "key15": "2nq8VRAbdHXe9BRsms5RZ8ApWdEtKUAp2ZnwKFUH7wJ83Qvw9Gs96U4EuDUoao76euv8LYuYzyRnQqA9EeRUs2KW",
  "key16": "4qVyjotB1wGhhTZF4mrc9Ttoyo7EBsWCxWe1PJEZBezhr54aQc4ikyCjhW4yvcjjBgGwCtzK2c2pxcN9sUykQivj",
  "key17": "3DT9MbnMv58hyw3Jh9XasyM969i28B7RDUZMoXqmDgZ3dsq2pbYirJBUP3oJfYjhP3K6PDukdJRTehV69Htinjfy",
  "key18": "5jwGEr1menuM1B1BthWGbQvoTHqAHPQnuMpcn9aKvNR4NTkF3mD1ExiGp8py2P4Ly3VzTudfdinm1fJoRyB1Gbe7",
  "key19": "dTENs4zqXC7VBM4Uq4XX1Zs2NQbWwqL7B5a9Zy3GHsbzhiEhmkV2kg8tXBwD8qUi7HhdLyMVqbfBTJcSxpuTvuH",
  "key20": "1WoavLXPVf8vH2Vi8Q6wAWuwipxDtYQuTc8znHpha12ugCZDHSBGU1F7eNCCwu4hKnDaGthvHnjrhvgUMZegYK2",
  "key21": "2BvavkWuszZLtnUazjMRputhKVywKq5BaNMjVaTWYqojHCNsymNSnS6zJ2YP5GNkZU9RHfUJRDMuNjSK45UioZMH",
  "key22": "34oqNchbxPdPcGRbXdz5xGQaZfzztS59biae155cw5zVZoxAffL1sEqWVHPWbSJoEwHwQyAi8YEmd5ZbTuKn738a",
  "key23": "28Z3QVhacAXgYapAxhfb3CbpbCehFrxWFK7cxW8kvAj6xNpurvir8bLAqyPixdgpzdd8vAJJaTBhBLQfsV4N3F8p",
  "key24": "4JNUQQ7WZUvwA9tYJqdY5k4s1Zrp5CMpu1daPkT7NTe4eSzXb7NHvFGvBHBABproCfjREarA6QAmg2mg7aqXfMcv",
  "key25": "5Eo5EqqGwwhUsYmHMnJxhQMBqKdAJvSWQbTmBjVtC7kX4ZW9QptqDzjSUb8g1AMvJuVXzm3Tkx2P5NUAMyA75RoM",
  "key26": "4TfpJaoW9e1CSVx7X1DqULTpRUrmmvAJHvjLL5MFDGN2s7AqQsrNBx5xgux8qnkrPeXHm8ULDXN4AhWdd9f2yzid",
  "key27": "2gYMNuMwtdhBoPfsnQdDByim4CSYDeqi9rRaTPMFoy8nDhrHaezFqAipjjNM3nPtNN2Vz8uTipKXDnn2g1BTPgPN",
  "key28": "3niG5mXaSmLHXky6h3EpSe92X8TGruv5sKJGqQRZzsvsBg28sNyA22FyoZbdg8gsNdsAKzSsfeASMiGnD5qtdXVT",
  "key29": "2V4Z8LjdLkCdkzuQTbMfDSbavSvJHzGT9dkZqzdXAfu3LcB2KLmKBj81y2ceDAWbHcccGgPWPiBtMG8EAqQV7YPZ",
  "key30": "3urASM5VH5U9Yd3H3sUkHGQH8zMtatg9qrGC7vuY47nHY3TPKwEmgSKoV8HwBfCmEZvyHst7i2dPQffFzWfYmKjK",
  "key31": "3gDnAETvFq4s1JuKZMNPfRA49RRptZ6brX7o2Ws5fFrqowYxPTmWQs41trjDP8tbYU3PnPcz699iHHkh5FLyHNJg",
  "key32": "36FRBBxTcGUmbJEtU5ejpdvkGMe1UssmfTRHWor6LCVyzGLcyFhwVRazRaDx7ksUpKRUs8UX5FG9kMSfJy5Mr64d",
  "key33": "uqP8tdLoCxkMAn2oUoKFLeKVJKWEQ1uwQoGwhrcvdTkrrzfyN3Sw37bC9iMaNgciK6tP3RryR5fiXAZ5RYypv75",
  "key34": "AqvScjjR8piJTYo5qSPkJHDrDkSah2cNcjggP6kEEDZzg5Q1GUnADPsrMdpsJH2ko5bLQBDjgszXzupovFVmKBe",
  "key35": "CF7iNPLWUt5DMXTMVVoWtvdK8oCSq7Vo4msCWM41rRDjeLypCusX2zd8vYxJzGduegqPUByboktv3bMBfRzAFVS",
  "key36": "jjMn3Hbu8ApVfLUNjsHu9HGBcLPeayov3yy7GyCV8VaMzJxqgDLASGhPQF3VEtCFQpeQwUfGzdqYMtrxzLRmpjp",
  "key37": "2joASKwnYh4aAGMJsceQersoUzDASEJ3nJh5FBLKXr5MXcMCxPStzj1hks32YMoMvtox8EPDhV98PwXzsv9dUNsd",
  "key38": "58cBUtdBJzLypTKnWiADMYyr6HN77vVY7ncbWTqeTPTCbGnTjPnHbr8gNTwhF2RMDmUKQJkxHbZCf1T2gDMuhuS5",
  "key39": "3vhLcgXsHnZanf1GRgiEnvDVrCiyTVt9QYHKJfqeMiexmFyApeYNS4AjXDYzk6xW7iyf6qMvpdtaoHzDsKQkqkzi",
  "key40": "4JgSWqWxDtDQQNeyD5qLN3eAKRdgVBhsobPmHhQYv7BBJnoYwbD69Qojbfa1nNnXfXBh1ao4JXDPRGEZighaJW91",
  "key41": "67L9CXucFuRLwbbA52MmTkb9eijBoGyHPuU1axg7DmQBJXN3Dc2z2RFsPHA1xPWj3214oSi4sZtjGbszHYfsAFpe",
  "key42": "3NNwvVPfFRW3i7bnTxvnf45Cfus8BRkp8VSbTZoSg7shLqzPn2uUPtqSfhMGH6zKWvBR2tk5eRiCQcAbYWy3bgWp",
  "key43": "5Eo2oKZ4PEEP7jRXbsWmjuXhhFQHUmsvKkbnHwL9sKeuQhzwno6ffQNjqAQEYfXSHFgC5rd3NtpAkKpD9Rp3zLPw",
  "key44": "KM5jqjdavNrGjwPdrfBz2KirvCwaB7AkuBiyyUVUEVJjaJs254L1UnCCcADm44DzJE6uXmxfmPkbvVnbiHBWQdG",
  "key45": "3gMFGgiTCSCoeE64wJMpSht6bkHz7HmxcLSTvmmVxyA7Qnn1P5edNsPvyiLJ3bbo4YkopgcnZt93P2a8Cz53ctyT",
  "key46": "3MWbM5AnQr7TDrYSoCaVtYN4BL1Q2DdKcerddr3MaFCdGoLLLC5fGuLb3tYXgtWtTgTSzWRvyXoUUujCRkZwLCnu"
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
