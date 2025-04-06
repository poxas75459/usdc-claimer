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
    "2g8PsXSMKkrCWidFnzNAuiHLhcxh6BKRiq6FYydWThu1DQkujF7BxFzfujwQM3QkfNDuVZQcvopagWUHHtzF2VDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVmmhsLcGw15D594T7FD5zJ7Vf6Rqr7B2PrhjQ735Z3ZryaydJYjJXEBmfiDS2M9rSCEqgCiA935h8QTjE4ewiw",
  "key1": "Qb23C3AWZiWUqzhTVLSebwrho5Nzoa16RrtBu8J9EVoobagmk5Gr57aDkYe13YJCYBijoBJu4iC9eCjKKdPVpis",
  "key2": "3XvUG2H55UwdshV9NCjJDeV3YSwy4fMYufm5gkRC3nEDP6cxpnFdWjygqeVU5x84dQVsSr5Cwhj16BzVK4yT9dnv",
  "key3": "3rp1nka6xMcRcQNzv6CTpLfoJAKMJP15Jp7qZ7ZnBSJLDQ2hfhHzYKtsvMkJbwwqjoK4Dcct9nFdRYV8XjBD5X7Q",
  "key4": "4YtxvBGqa8rSUQudMWvHatfg3uK1ivWvmbMn9gky97UHvaVzDp7c9NKnV9VRTaq7mffTnzLKmtJ2Ta5HDHemjYvZ",
  "key5": "2jcVZTef4rmJDcYbUhn5Ldxt91T45KNkHb1DdFpNJZPr21M53BmQXEYcmJoDNaAs1Fm65jPsRNvxoJfNiXW4uRdi",
  "key6": "5iRCNTS6zuRwLg5DHHYR4y6L8K2juo6pxPG5y6y13QcpdLEqECJP2LB4n6tUSntj9MLuo75K392dUfLkv5rGVmSL",
  "key7": "Pc95hQALoCy9VgWAWuLDWtZxoPjDmPGbttjEbjYobrQoQ2PGthMDzynW6kPxAunzvVSXUpjEoCKbVsJm9jGx41Q",
  "key8": "5BRYQy3RcSUB5sXCLq47zjDRsVykQ9gi4YLBxtr9ZY1ajAcJkqHHtRffdgShaarM6fFXkCjWvZEPrudrQEmvPXoS",
  "key9": "2FNx4Ceua3v5qQ14bnLEaRkEKzCqMgEeLtCxf2rscRbXTSxtzj3fh9vVBznuaJ4Pzz675oCsLep5vYVY6WRNuaqg",
  "key10": "5VcFm4uyqqfP5Y36Z2YAXiCpJHosbvBmUDPWPXmGuhk5ozgdQxGPxM1E7TiR5GsiSLs2L55hh3ajMoEYQk9DBUkW",
  "key11": "61BMNYd1k37hcVEoBLcC497bqfZvq1EgZirvy8xRwphDbWMhfePxfp9ebY1TzkywdCQrv5wet6aW3N61CKymcDzu",
  "key12": "5CdKopajnQghEyPExQXdWNEL7WrzS5aaqwKXmXNGmHKw8iWPJJnnj2bkTTxVBcCmqwrZnG5V4ihQ67q7LZJECc47",
  "key13": "2K5b6GYsjvw1ndq9H4SZUCG4e12uuFjbYXW6pGb7mB4a9wHFyEyMEj4x5CEaKWzeUv76mdrmr5bUJkT8KBSmicwY",
  "key14": "4wNn3ninBBiB1GiQHpw4VtonktgHVQqzKnvVLPKYK8qxmMxDR1vp64yXYUbWs5iLxEJhxMwMKFxdfZgcvmW2aMh7",
  "key15": "2CbVbQZSF6bjocAX5VErZbx7P2FjAA8jmtthdfnAsGewsDZfrFVP2eUPomec1sbUy3Y82ZeHzcfApHCYprpPrexo",
  "key16": "4Lj9G6aup8vq9vJSjXh754fJvTxTKUFQKtfB4BX7eohsAqHE58ZH6JsBxA3vWeZ2yE61wo3udmeRQx7NAUnLytwd",
  "key17": "2PjcWNQh219VRWkiUyu6KX7ukVeLuHc4CnUshktLbnX18a41WK6TshbKwAs7wEbuxHdQirYSZ5cqo7f6Ws5BAr13",
  "key18": "4MT7oxEugktzvrm299rjuWBLBfg4qpYpsJTShCT7BFq8YU3ix6TCVZsSMgLoWzGyEBxzqv2gyReRs68jVujSGYU6",
  "key19": "3MZ9oXVumaKuP1B7izkng4SvfEdPz1gN1JKm4xsezL1G9bXvH56qQRp3uvQ8AxoKXQ4pThCpyjejDH26MVwMrjPs",
  "key20": "382PJ5BArnCtGwyq7VC6gfLC8otbcgvuLSmC2iyYePyPztT18g5CazBarAxtxHzeVaNECp97JDMY7Phh6SbURrSa",
  "key21": "43dK63GYCCbhQ5PqDFNAqV2LcZTb8JSNLd6GeKHxEMeP62r5th1t8Vqu7hPxjcvxZSmXQtBSGqvSHzhBss1AnFn9",
  "key22": "35McnzTcgpwwZuUzajuW2t9BWMeRBS6otw4dZa9mqh9kGWsNLg1Lxbs2iQ9gk6WM1vfkX2itHRjtPDYmKGYVntgC",
  "key23": "7NmdE9ApnMfHcEW6fGXwZUbEvpeKan6r4Jm7SLM6kAvKdjsGNztdEt46pBrUugmivQG3GfBWADb1zSPAfUbpXV4",
  "key24": "526XVT4i5nPVoqTypYD3GNmSfuaUDwiwgpLi8aZmxLPhJnuDqqU7BHmq66UCr94sQfgW6r2WNhNaBvyoeopvBE8h",
  "key25": "3SShqtHQ7TXQ24xKBFbKtV3bytcaSGCvPbVqyYj7khXW98GPV2Tm1qWbJ8bLVJP7FvjuGtAhN4N1fksvnbcnbC4U",
  "key26": "2S1XRQrQ9oU7dpx8K1KGwDV9EmEWvzq4wbhNTXU35yFyKZJYuQDTLATEAVZmjFWfT9xZ9mDK6EdFc24ugtF8PRjR",
  "key27": "38c4G5AybnZxinSsYAvmooE6riMzUyTeo9paHi3P42q3kKLutfMZtaZFwgUAVaegEaFhaUgxWzkdvvoAFDU9cvPP",
  "key28": "3kcLxrLpUQu6KF3JZE9tRMvbqoWhMWZ6H5wZxq4gnxqpWRF3p5rDwfCTUHrAbXZgrWcNGyGFyqMooBTZipTKLtmS",
  "key29": "2gh9W2AFBJZmZzPXns2z2bsWi4WdFzxhwKJMqPJ17kftgo6k2bcVy7zvMWYCDmLAXKfpVSVGdtf5JVSUthKBXkfS",
  "key30": "4K5jidU5CvnwP35euEkGV6CBLaYmJhMFoXupyYyaHhxzU5oKn6oTAjCfDymDiTuENHLi4CCm3h5WEqVwiDgiVPsR",
  "key31": "5Rc3n9jPX4352iSXJcgGqq8EUo8xGZGZ8DYYRvjmDrugahKvqQTFoAcZXcyCDVSuZgd2YYif4o94CFqx9sMbGgAe",
  "key32": "3kiBY94MJUDMqvR7tn1mrhFWzACtpEpQ5b8BDEyFt9hSjeJpAzaECTf9G6VMLMQfDTGUGsLLd1J9zGzuAhVbco7m",
  "key33": "2Z3dW1dotW8EJRQeF4gdV9XPWKsJTVeVgUdFGsanmKMqPfSmhFDAjbne9ThedHEEAXXXbTFVAkq7KYgSC3XinPyP",
  "key34": "2KTUohhtANP8yueNiLAR7H2qT1PKw7wGo73rT2hkzfneJjw3QEe3n8EtTckvdNn4H2H5c2m3F8mvyHZq3yMz7Awi",
  "key35": "3eq5ZDYdT6mBPBCzsQiCgswSkHPU77G3fEhWu7hXs1Gu5tTwiZD8CDM64B7HEcdM1WZJ9QJuVuSa8osEXEmqgcgJ",
  "key36": "2ynXSCkprz6zJS2h6v9dBrVgUa5gYu7G171AxkdZfQCbr7jzeqTsKfDi1bwkQF1BiE8q72AtCpKWM4FgCWj6Gkh8",
  "key37": "4W7z3QFZcshEr9xwKMHze9EcJrejAPFHBYTtoNToDuRQQw5tHGj86P3334RVGLm292fQkAeCUwrkysTuUCXjf5vB",
  "key38": "2KbQTwPkJGxuQWBTDU2rKjo8FGfU7umMThoXKL82PC8hvT7HUjzRyKTZYX3cMR9yKg44Jt3Nw9tuwiaGg9VV73Jp",
  "key39": "5zKbLPz5FFt2zEnAFXGd9Gp1cKakFnEsaPNXRQFt859c3yC1zLV2eQWS3ehPSEUB9JLXSNyrVuH13tr6C7YCktt7",
  "key40": "3eLULY6ddjFaidSJ8DEGMHd5ngPnRzNqZMnbwYeMJ4SR5uhcsSXeRWfKG6vAhdkV86MYQRvTGSJBx6xckTYbZGEW",
  "key41": "5uiE3tZh2MKZG7f7oduRXUyPqKcj7BZkR17DANy38sjAshZAtjc3qpzWa115LrBKriPL3KrJWUQ5Abea4J4S8etL",
  "key42": "45bES2jWU24hhR495qK5sm5hPSLTzgsNnL7gaoBUVyASD9xwzNgHnN8WjSvoFYt8dLj4seF7T4Qgdoce2gr2DYKg",
  "key43": "5aX8ktFrDiqtKFeTfmj5MSroMk1i5rWyg1jQHkPvzHMLfWXFN3FSHZTzv2REW86qCymYXWLq6uXMqA9oFrUtasVi",
  "key44": "2edqCw8Uh3i6ydBkUEYu3QPFgEWNF21aJbVNMY1HRRdEF1Ve2cdvtEhb7N1kYcB1tZ3F2JwUoW9G1BL4Cqg2i5P1",
  "key45": "4td98RevdddVHWx1tDRUeV5gurPm5VzVRjjt4mizUYyf14hwfPCyBVFU96EaoskwQAw7ZGZ25Wvxw8MQkMkj53XJ"
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
