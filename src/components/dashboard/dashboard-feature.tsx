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
    "5NkHZGhJd2vQKXeZD3ATLP1NBXJXtB3uiG8Vb298YraiWSNDFT3iX6idgiUCKP2tGGrteeizuLTifEEmEFwgW51N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2K94nuMt5436e8ap38yh98qmXWh9piwWJhz9qPt6FKcSGyhdGU2xP3gYXvkwk22wRyksQgiRiHAfwT5MXfV5ct",
  "key1": "5bqSeqKDM5rK5zB52gZu12dSb5L8rBScL9448xRbB25n4YxMXsgBnPwnDr2HuFhxoVFrqVyQBHR2e7z1Mso9ZqAz",
  "key2": "2JqgQtSPF2wD4MUZtwQDEmzNr4TbHar7FLi6LKLCW3PCqGEoe1jUSuL8fNnh1HMnGsHiJMW9f6KU9bmtu2pzHJcZ",
  "key3": "4FYbscZcxB5kEbt42eWQtVE9TBjC9Qwsk59peb116E7fFMVv4d1axUufpQuY7enQ6RxSRCmVHH9vCufFoznxricy",
  "key4": "37VFnpvZUeYshpSR7HejGHZkqEGvnywyReCF1NkuHcTJMLB53eCwiBYu5QTCCm5E81E6wqPBvoTby1Q3tqurqH8K",
  "key5": "5cfbi3ba7bDynhe2TNKs3E7YYDjcyhYNdHjku1dnu4bL9RPd8WPLqYR47dnC33FBrfanFHr13RnCxoFWLUc2dBTS",
  "key6": "nRcL1v25T9669CCGxuDoNqoSstohwnUBucrkbXsiqWfcVikieSVXxrtiq3Ftmy4dpQyeeECahVoAgSdUnKKUckA",
  "key7": "kh6sJrMR83St9A1H7bxAck59RDhfv98BLG6mMp8YP1hP51hxxo4BTsW62vrGEPy1EYLV8nmkMXjFL3WCYJ9DwKD",
  "key8": "mDS6pstD4waEgcP6FATYW1GZAEm9oYQLaZZHKhSTiA9Rvit1o1nxuk2Fa7BKZQ8s1zwT5zxLoQFPpzTtbpMvsy2",
  "key9": "3DT7QZpGiLi8hrvUrLw4wG38YVseT4ePUHavuRK55FkoWg99MeTAhuLUX9ZtWagSHRnW315RekokE97veWarSjSW",
  "key10": "2KRGEic1MdPzhE5zNrkKMF4eFrUYWcqRUabbVkvVG6hCQgdygRa5HR7ivFp4g46BeVbHjL9Hi6iZ2Wm6zJD3Ngeb",
  "key11": "3v1hNg1WRd4nd1nDMRDhoFeMZ7BhNnxw1mvCu7jpEEHeU6wfxT2HHuC4q351LvbXn9jNjXQzFvkeWiZXFWM3Gp7f",
  "key12": "44Xo8AXm5L2zL6YC1p11D519hkXRJtYfU9YanbX5ZiNBzzDqT6HVi91zHmcURMssAJ594tJ2R9Yhkid9ocZ3H8wF",
  "key13": "3APBU9o2yHD3Bw1rN1w8krjRq4YHjpq1z4jztz6HxfRoU9H8ptzqaX5JCFb6iDzMPKCpW9iZ1Nmqmey3p2HCRAZh",
  "key14": "NZ1CA9w1VcHKXiFbeWfzPzXqrWFaa3fNvLUTPp8aN1yFzqorWPt8zEyjG88pD65RrsP4p5j12nVSHrqtNPjSC6s",
  "key15": "2ZwaJTXmAVvM9VL5eYCW3XegccuSreTaNExJgb3tsfgEsQ6SJ2YyYHNeDmZU3aK84oCDsMSMvte8baynQqtDyuRw",
  "key16": "3BtDHaQ9jF4u3YSzodoxBKgYKhvWFdU64AhaBXN4BYrxxV9aSefmn6euoTFKztC8uRekzuc1egfhvXb86xq6KRKy",
  "key17": "2zqfyHuJC1eq8JD5pkphUHjJCryzU8KL73AUcRaYDLNgFwt4smHnQLjxZzQJkdzaqfJXq1EJ4nBN9rnXoSQEkcBQ",
  "key18": "2Q8dmjt4nrQ5zFWNGS2AAKuPe4qbAKt1WMVCm8bkZuSuRiMC45QyVjg9kgY7vzCzZKbsJySsU9tgaAajCPWb221D",
  "key19": "67mLTbUkE1d7Sqp2AZu1XaR5QyqnvQnVgzwvoKqjBLThvGr91LnGtDwsCv7e7jnNNqGoWndpzUyzCVJ6CPVNsBz1",
  "key20": "36JvRhJDiF39mtZnCchUdpFGC7x74HFdU6npsSGxV9oqGtsmhXknCKd6PgPdTz69Vv5BBxkva6FU9wvo2FtQxuTz",
  "key21": "f6XDMRPUpzYzSsGnu5bFeKsy3YeDvz7cx9byD2vHkGdVtBCALaoUNhPTDmoChNgqPeev9SGgrs2aDZnSrVW9nao",
  "key22": "4bGNw5XYzP8VPnucSLtBBi3ac1bQMjKUGkkjhnJZy5YphYBeHWAbfUPdHKweWBweUfucDyJ5tUA3r3fBdna1n9XW",
  "key23": "3wxWenD1Eh7itqc4nx1feLEcQSYFt83mQr1oG8ejfX9YndLQWAbqHsVTpKZXV7kEvNYA7goQ69L8x7b2Qz2AEcHH",
  "key24": "5xQN4T1NW66HBKNT7H4bnLYMmpQaYMAoR72VshqthKyBKXLvhVPcnsSx6oGWRqHnTSKWUK26X3KNGiZwrunCG6gD",
  "key25": "2HndRSz9Zvm9SVBgtiMovvX7BBWaMM8FWRUerHp7WgiBiqiKx3zwR866zVaVKEqRMK4UQu6rHXfL2B3LYCnd2QDw",
  "key26": "2uC1Y1SiuDnSFBJKiAh1xjxjdVNrWoeoiEBNzKb7LL71mTmh13tE82PbJe6K3KXM6pKpEvgDJWVa9YR7prXKZoo",
  "key27": "3SKLCEKNDmpGpuFroGaovPQ5Hhy8K8EUBUzQc1YJAhZBkLb4ouDDpjGtojwangqLDM3oZC8M3iNJL5VZA8ZJAMxV",
  "key28": "AieCRD1iTeQYpNSnTNia6WdxP8N2HdJXkM5Wt7iatixRnsFavYkCYfSjPvmnzHyhvdMotsx7BBzt6EqKrh6rowd",
  "key29": "5BKh6ADbZvjTNvp7YscRS16f77A7PKrPY5Qs7tE9YyATN43orYTfximFLpQMNWFDSD53XmKmcmYAE2TXGKd29a4c",
  "key30": "2nYc118uhd114wvtSYkW9msoRQvvmgaFosSNnRgASS7rW2n3zL2mwFK8honktVFQPJHSg6UgEFRsL8RQiZn2jDh1",
  "key31": "LAxJUtPLwqgV2YyfMmusVnZF1Pjm5GoNDiVKHF4KaYRidExss2g7XAyxx3T8ee9aNBpNHjDXs3D4rGGyj14tRbY",
  "key32": "5mq3UMiMUL1SfuKQjMMt4uHaEdqG7R575yuQxeiVf8EzgmgJN6uACSSiBVcBupKJ3HmJXCKCqTCvZMPGbWQDXC9U",
  "key33": "2gDvdkAACGUoo4maAr2BpdRE2iPhURAehU9aZZ91WMi6oPy6SQqpatk6dVe6mVyStKVaGwWbEiCYQrpR494iCHjs",
  "key34": "5YMaJaZQ9c25ynoBn1aRHo23op9Cw872F5hD9Fb2tHXc4bjwpzBu536yRKi7W24dMAjQyU9xvWwqbtieX7YAwYWb",
  "key35": "2bvHH7wXhPA3QbddH5vdJmoHGhxSdpZG3eNf9hYYWXBNRbSxjTjP3MjG6UzuZtufqpXtm2cND4xrXLZms9ddom4G",
  "key36": "4fBAGrnb1XpJotSYh3UyULsteEqhLsrynCpncCtT24y7EZ6uHbpBZ1fQM61inFbPgngYAEpx1xayi7TcjwwS34Mb",
  "key37": "4vcLWcPAPXhysgtAfy3iQD5ai2DzZN7awgW5tkBh2rNhAj49KP3K1bEqLXtEJtUtx8Sv1zNCnSv3wDwLm6rbP9xk",
  "key38": "2sctYqHDmmNonpRo956aN25qWEgZpEJwiQSweg1VKcdBy5Go1k5bC89FJrBqH372MR6EfYiJECdXa6zvH8MzhGjr",
  "key39": "5PvhsgL6o9qFczsdj3iyXByGTC9wZd5zcXwgQsiDYBFxtnb3A5zm4qQBp4vaBBYuAouRvHMjWcEzeFjS5nJWpiFx",
  "key40": "4b6mZwQd2njwBGFY5HbEZiaep9caC7EKTxwkT1TUgq9tetrjwes3BJb7iyLbJjvwM7D47FFxstXJKu3Nv98fweCK",
  "key41": "4aooiKXgArCFhSJ28UtoUJYJNqEbeZCJ5QBxhXea8JtAgMERmKAwk3n1tvxQ1kvxXaMFDWqcEeN4U13kahCtnsxu",
  "key42": "2BjUss7EXdYy4riCQyqQXuM6xmDmFKA5yhiKwwrCim3S2an7hrFKsGpoCoSrU6RzCoxDTdgs5qT1P1TGCT8Zjh21",
  "key43": "Hvd7iswRAnRFinkTUkYNMm34keCHb4CN1a5dKN5wskDbagbh6Fc88k99XT8prMwFRS3VMV6A9nxgimW7Db2SFyT",
  "key44": "dYSxn1Ch2w9KzLj7WL1wHYVLNkNX75xEuYPtg7DWwRPXDdPwnq47gWoF54tdD1X9TxKrDuU1pwtExBNJHrVZHgU",
  "key45": "5VSdgQb3NCScUxCUG3Gte6hUxxrhFFaNDPLi8s7i6DmPvaBy29RYrJtjdHmJoLtZB3htZYJxudB3stNwuGpMcz8V",
  "key46": "5vdaVpDWEcMu6uSUWA1iAzPna3KNc7PZkfSBfMAjWoLWRPcLPU7UYpQdEUJXP9jWAbi4TeWMaw8HaRyToJhcDZnU",
  "key47": "3GMDYeoPgDWyhL59gTPQCALSgLFS9avNjCfzLGincVJ1aAJryxwoKbiQMFGPvoAsLMXncCBFGr7py4Nx3DK2tXwD",
  "key48": "4EBJ6wbn6nWzfBzeNzcrUGbnYFRJwZnqREbQHN9NrfNFERgmPV2eXZPELWKwPJzn6K4psQZwUtnuc5F2rST64CXe"
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
