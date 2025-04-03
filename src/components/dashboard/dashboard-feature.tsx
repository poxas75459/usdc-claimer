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
    "2DQuVyyU9Lhh8XfwGJpMkExkhgkqMYuJm3NC35zse5KX2SwfWVgoEtyyZJcSxK3L2u3PVdxmRJs9yoHiWfDESrDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rtkeNHtxXHKNUe8HJJBydygspeuzT17asq1e9BxZ9bErPyWj4dkASfwg5RpSxsSfFB3LaKQxZurcvE6hG9XLXB",
  "key1": "3rVEg1qsNWU5YXuRYTbUUWw9JME4cHxD7kV9uqhASA8h81CH3gU9FKi14eWfPQTWCLzJRjao7s2VjQHBLrdKnDPS",
  "key2": "4HHjUNvmCLTyhrFXseZdhKD3pD1mLwe89Y2agAzZM6h5GGHJNszrX2WvdrKoD3iwN2YLPVWthkkVW9sEuLjPtZ57",
  "key3": "5XTt1MemE9Rpx6kPhDis9ZJT1ZwPAG6KTLipqsP6puPFZEA7LvZWyr8iczJgVFVtaKYuo86dckQRvzyBa9Nvyde",
  "key4": "5H43JKch9EKtepLe29R8Kvs4t7EtQPWzpnn3RpYgWeRaEnck9qyuyamwZZnMaxqTXst8ycjqKLSFZXmTuBg1MssD",
  "key5": "3sDaK3H9n3jKtT1qMqugH58gtwprDL1R17GxV8GWYkKCyin5feXy8xpTeaTych6VjxJ4tu6YM99gF27BvMyjvsim",
  "key6": "XYw5Rr1eMj182N3wSYPdQ7zP7vCcsdsa4Ui7mrobEkUB5HH7GJpxk3oVnxeT96QmBTNsf1oiTWjsr37SyFM4d74",
  "key7": "5KurqQEtUG72zQZtvjJ251HSi5wPbB7szZdw7GtZom4vjdeieyQ8jXKSkUztmkkxvNMqbCgqQomFudHGu4FqV36G",
  "key8": "5QRZPgLkMCaHnRfNNe8eotSArcJ2DaAigmVMMiS4rGw7YzFTKYChqMKFP6eh3LABsj7KU8rAXj4wqdnheRhqNA5r",
  "key9": "2yyKkDnc67XziZbDajqjbZQwjZeRXY3XyC13Z9zzipK1uNG4Sq6AkqhEy56d4HcuMBMMWSPzCwijWegoFTUnhEZF",
  "key10": "4HW9P465Gcn98XnpfpjuYo2JEKL1xpd2XWPHHs4zuxy3RnCH2UdCitAL8WejhoxawtnDc3G5DpawSAAb3XVAheVQ",
  "key11": "5PyT5q3ouWFHFD533vfEd2EieGv8tbbR5VpQx6RmqNd3owKJQThDFkPXwfxXekRMEyVLmmi52mpHE8Yn21tUbUos",
  "key12": "3mpHVi6TXqTdjeWr1AJEjhsV9vK9izWZiMgi1TC2Bv8PskjBuE2tu1o6srTbvP8BvVtaHMtt95aYhNHurfpAuUGL",
  "key13": "2PaX8cdu835ZbkMnBRpieN8BppkL1jY7KuLVRXA3GVUYVW8iBXEqTVvB1WBR9xusUrGa99njpGWt9F36RP4QCUHa",
  "key14": "2hVK5KxSsCBHsWBtt74fBmDVk8vH2LYeDXy1L3PwXeY3gpeRzGjifeWVhuYB5RQUrykLs7kAJUTDggyjkNdDQgQU",
  "key15": "5KPzzb7SFLy6PayJwFRCYeHUhihgLLpVAeYyJUkWaWZrMDrEhWWNoFNuZahUmtec9FMWSf3xiC4xcZoBAHukP71q",
  "key16": "NwnRGG3n2CrvSBHB9VdvqAv7N2J1ESsjz7keaX8YJ6f8n6cgVFXJy8J7JyZE7nDuHoBubqtkgA5Y2vniCdGuKem",
  "key17": "5Ytps3PuoidNSGh13WF2zwA6vzfJGz4nGFxs41nsBnQWt2LNk84J1HpMomEDqAj6RJPKNynVwJ8JSx6aFLDdrgD6",
  "key18": "zM6nBSXcohWi8RBwGF5mWrVz6j2WNBreYsCbLtcV63GWCWWBxiWWsrJrqsbfYrrV5DZDrnqYNyKrq1mxcyk8uqM",
  "key19": "2eBxmN6XaV8pZF1jcAmZ2qzzSVeuu97SSTkMmCDxX6LMDH7dqGAV79JCUaQJXHSNW1HURcpvN3fMVLgBuecXFeC",
  "key20": "5ht7YYne2V9cEsu9f61URmTVMT9JhE9KQGVjtNDe2ArkrcshWrTEXtv6Lx7xuiaG91j7R48rMBhukrunrUnW7J6C",
  "key21": "JQmdctrY24AJ66HX3cBNpS6gaQji9gtR6YzcVT22hmS33pGNDgtM2sPKFJswiWJrt47cLrcm1nA3Usy6fcFbDs6",
  "key22": "rLpVDdL82eQTcMKpH2Wh2VggZK8d8vLUPoPWeNRyUHkdhtaVxLn2EPHq1Q1ZN8wszeKja9wffVdVKnyCZNV6Mt6",
  "key23": "47TNLwKEoEjC3wX876pJ8y8A14P3tgstFqQsG46yLrEgW1L7wKwWiRWxXWdifMygw9EWbCMrFcXWJHhcFsFE62Ui",
  "key24": "5vh2By3ASnnSK5aqovzsuW1GsEzApAJcWMgarawLabjn1X1xTdsowYvz3iXeWjtrUzyZoJPWr8bQXcnZSqvrFqe",
  "key25": "3gXGbhveWP1PUJx3VKNNk5GkXqyL7PM6TBt4iPmsaLG2hBpfL3LcQ9RarKAZ4QmrXGX2zGf8JYo7AmVhMX4Gi5ux",
  "key26": "41spUVo2tM44Mg4UXGwS8gPB1T3mfx8343Vh3ma18XSCj9gt5EBffg2XkdWYcrukiuww8U43ma8ZxvN8m8b8Tekz",
  "key27": "8CsVwsxH2p2NhDJbkUpmKxgHHWy7FEF7Lm3FDgxqqwdXTXyKPJF3Xf3ALAT7mmkkfojesuq9SiURog31Pnfj4Et",
  "key28": "5MV5LYdVGwjnqe53xSw4xdaoNbKZXkGqxpSrawfDAzCyAeSbgL7a8Rb8VMvRsuAy32yLsbqXab3iQ62GihkY5wmc",
  "key29": "5TgWHcei8BMBRiBYh7tmGfXZR813a3ejLd6uy8h5uViiRU9JCXfLkEzzE5CdYz1Z77b1n8aeNZkZNym3V8cJn4Uv",
  "key30": "35EUt7irQJxFKABGDgWV8nXgVqhYzSz2jfrPyJkFT7UM6FpZWyJ8iEWRhdH9X6ZoyTuU4wVbDMmLzYeoDqCqB2JU",
  "key31": "73vjX5EcsDKJFGBFsisDCQKo16FQtUMZymEf6u8QSGyBCHPayUrqpQTPxgENirLWSYjzRG5LzMLDHHBNg4vcLP3",
  "key32": "5LwprQ7FwEBFSDAvT4M14BbFjDY1bQsLoNxtENgqPeZDdKg6fsBbNiQJYVNEVJwKgoNqXSXLxZbMBwz2wpf5u5cB",
  "key33": "2WBcBMtX3tyxqFPBZb23yScqeC8xApZe76hQKfocH1Rz2ftSXHyGvW251buWC5LFhWDS28cswyZL6peiVSkUxbah",
  "key34": "49EdH8xk7WyFdDVrwp6s1T7q483ekmj47jWKipKvH75v7dG2ax1BqyiSN3wV9Uuq6VCZJAFX6RjDsfhozWnL2pLF",
  "key35": "5pUhWLX4pg7kHqAEN7sRih9YArirThUbZvANnKkhCwGEnZdTqNB6xDwy679w6S9wMkkfhf1LGWz33WTYf2262CLB",
  "key36": "5TcB9ZmoEzCVVgKgoaKhHy4YPGnSzCDdWLXRBggBEc4HKwPWL82Kz5DELTJvW55gwMjPEkaGT6j8NSchdjTWo7TW",
  "key37": "9Ca5taRUVgX5TorCKzF7WaXxevE4kJfCPXT3JwZgksStPRoCGqtSmEZ4yYZhFYMD5jMEhC5svH8bU3ies1xxiFy",
  "key38": "3CkFVmWDzsgYXfNFRpgx7G4XfkZ9SgT2dc8QMWJj1WZmygBm62ka4RYSMXiApDtJUGJYQFWjjr7N4bJXh7QrWwbi",
  "key39": "2QyqmVRvujeg755Ew3FiGcVA4LM8d4aMgCPeGuGGegRqXK5g1hAUZnH5dvgQrziDdsqBtbhjGjHv2Jw5cLijJmq2",
  "key40": "4CgRK4MteRFgWpXk7Ng41PF2LKfcXCAoKNaj6NUiTwxn4rt5WqXUmrD58mB24wmz73SpjzvF2qSSSrRA9kkKVc9W",
  "key41": "2mhNigW72zLVDYxLN7GPrUKrkXCjBrBPoZ2D8F7fve9XHmVVEo3UAagDEP846NZAKKRk1qza3SKme8CEXzmx99zh",
  "key42": "5nNmPSN8bbqeKB6stMioau6SkGGyrJRvF3z4tSDx6yudbUQbHyXNyRcN8vGZ7UQmKTD7vvTb1boL3u7unpEtzU4c"
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
