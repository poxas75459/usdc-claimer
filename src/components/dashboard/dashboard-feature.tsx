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
    "5xABaGBqweRPjtQCEXwCxpjxofoYNqyUfNpa1ET7ZkTdN77DhR24iBMAMURq61teZ4uMhGuoQRCaFAziCr3maKXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRHnawKtfTnx4ykF6wnUQBTAGGyfjnpPUi7wuBdyTuHQMdTs88hk3fhATJLkQcCUpLbmZpzuPLvmBkTDV6Hb1RC",
  "key1": "3uDmizL2UmXL6GbxDJg1YNxQDkg7cK42oqCR1gAtPtknumaXoKLJsXLtpyFGunJX2wHYJcLSnfYxhcT9YFxncRUq",
  "key2": "5xqbyBq9GzbJyguX8KmADZdrcXgdnD5am4Kn5rYfzSDKsPT8pm4AXwD57mLGK7RQ4gxH2t6ccXbeqLVk5jC2noh7",
  "key3": "4KXHj7aw3V3mYs7KwnJtWYn7yHmH8S2cFv1mTzP3VxcQTsjxT39NhyuADdcVNKpHVhvY57kUc76LFsvvUswgMhek",
  "key4": "56dkUsfYp2KxaJR5m7ae4KCjmqQk1SXfyZCraBVt2Q9btcPNENJB7hzXuoqHstv5LNp7ecgyuiaVCCvt8iEZn6SY",
  "key5": "36E8ySsRzYw2Y63ZasXZcSzFednTo3BxcJ36qa7LykTrNvEw2HCwRBqMLVTbfWZ213obP3e5GyJvw1Mq5sRSWthZ",
  "key6": "AjrrY2ZcJYFuYnemtBHekXvBDGgLntxZfPyP561aJKud4scQZxZ9yQhpcosNtE6XkE6qWmsVfDZtLfUKvYKaPcp",
  "key7": "2gqvy6nTtJLe2d6f7xQptc4kEsQ2o62u2ZdcHKChL56efdcrvtnxC59cbU6bonD9ZThpDcAeDwB7xVn65yqGgrqY",
  "key8": "63W81cDvy4JKDvwbAhBFBSQXV4LMdDE7eGx9dPN4zjgVrRzJnS9EhwZHjiXkQmG8z2gUYgYbG6jas5zHM8nQEdkM",
  "key9": "5tD66NxGTXf5hR5mQUEuUMQLRy7dTndq4u62cMp4msh24QmeDLuw7iQSmzkL446jRXxpJLjSNUMDJiSR2pcoGbPz",
  "key10": "3aZimjhgj6LJoUvfUja6ZtAXscvM8DRDGfgEbmAMjTD2ejBH8vQGMdZzYi2XNR5TmS6AWcXoX1btcma68Zxrrart",
  "key11": "5urqRjczAp2UTEDzb12GPRTxLNd9v6CCtefQEVNAkHQWxsZuGsSovQbc8SfqYwJ8HJ5wyJjaNFiCDh6TUSv8UTvT",
  "key12": "3nPx1VCSYGSwVBXUwS9aeryxgBi1iVpPA52xfEuCq4SdiMXV4dWA4tkGoAUnZEYyZVppGh7wZDeko5jcHfDmsAHj",
  "key13": "gF12GJggMLfvkfjSaxt73XJ3mBiTa4C2KgWzFR6gzpXXgxX35x75roryetajH6qU94MrLxYUWr9pFV1YmxNzRWH",
  "key14": "3rvgZJeLuaknZGXSXBmPpWiRi81XarCpoGGc6UPFG2T8R2DZ6qniFdWxhBRVLHmUfjcNoxXmttPkYbvTrpqobR4G",
  "key15": "2BaW6X8up2axTfUj3rH2zaQNcYrraM7SQJMUXKcjNCBfFCRhrCh8Fq79uhmt5sLQsJFWamPCPgrWmA5eQkSCXZvw",
  "key16": "37gHmjTAtKXWSohVHarP6FBjYHBmW5uSBSwLdXnsdEZPqvW41L3j47AD8siYJp9bD1jgyqcir8AxsN95jGajwyxt",
  "key17": "5g9f5JbUiSpRVJWTjcC8gJqdMNjQG5B5ZK2EcmZYXdtM7LqouJviDph7D4yVh2drTLigmGBaYiwZMdGRpUPeQJrH",
  "key18": "5wc3N2Ur8iNaRwy3Qudxg3M82Wpf8arAqiggMSv8qRpEQenL5idnEPSKfYJuG2iqfKgN17YYWi8z4x1ebYBtLM95",
  "key19": "3CjJN5oFehzaC6M6sN7Z3H4aCDNncsmbgEFKEsFTtiBKZMJM5Smpu72G6ZZ6D21C38Kdm29NyvgKGL3nhbm9EjSW",
  "key20": "tGroJ1vgDGNVfi6B6mneE2bwAGA9ruPZAjGgbUbyXun5oxYw8oZDyukpjkP8TdqtFvqWEj2ArbpvYpZKUDfGfMq",
  "key21": "3wnR28R7xD6n1sKxuyvoH4NsLLJ1mvFANCgnE4qe3E41vPwaVYgFGHDAkfwxeTkKB8gYbsXGHGGas9UmCSecsTMG",
  "key22": "4edRrvrC14vbkBaTo46bsWJaZK9mS941Px4GBo14Q9U5TQtYSpeBocVzRRwJ9Hyd2NPsK1EK3iZP7Wf9Nxo9HyPJ",
  "key23": "424yo4RCk9Yei7Gwi4XjKkmwQ5kGABnW6VyhNnFpoisw8o8mkpHhgcHvAhs3mXPgCHxKonmT7GVMNfaieEC2rKd",
  "key24": "5gNzZ2sT6Ar3uYeRnWCFaKKQAXMSxJAKSA8JvAVJyBVtU7qX2sddLd97UmAqzszbamGWwwKUb1UaqBTfsBJvMDk1",
  "key25": "352nx7fwvUcnB8cGDCrfXgGtSYgbkEZ5jwYgRZiCDszfFGWkQnnoLDjiui2RC3r1Z3Sm7K5qrVaBa1998DnzLizD",
  "key26": "Wv4XqjzUVbhRhPcUtszUpG9q3ZHHyLmcBNbT3dqToy9yKfBtCrN3LkHhGE973bRbn3Vahs9xY9oPcyjnwYzV8nX",
  "key27": "2zmqRhABCaa8ybbygsjEBuQhWz3ocjvDQ8wEDedMeh3HiwH1TraFdhJDqtiMVyQ9qi7qo2kSqGwdTDiGaokYZFyW",
  "key28": "4gJacHWuT1mZn3BFb51x6fB7L4w1E7YqTSRyR5pUN813GjPeHthTJjAgfXpiEKH13LzVtDBKXogDiXNE7D7ZFgDB",
  "key29": "bpxrR9TRVpyBshGPgRkdw8MYyJm9bxhFMNF5QcDiVeqsMiWBu9f9sN9LMuFCiVtxkgbJDkiBozYwNPGP27ZAKsj",
  "key30": "23eR9QCUEhhG1vPgHiJhnBkL6zV6EgPhUutNvmkiTWxVxBeq2heTHHDq6H4oDCprfMaUEPwL8jiec3FeD2QkVkyL",
  "key31": "WDt9V5ycAs8No77BqeBoifMPs96RgUTKgvyqGg85yKkvKFTBtPVHWBHyPCdbK4JFwxVAtPXy9fgydqrFDFN6puS",
  "key32": "5RPTuq4CP6rYWJZY1qzJSfhYmFh6AEA8qSGxheLPRNfXRVnpqdLu3v7AxUyJtZATDHNXZyXGZrs72NcRJqam7Hw5",
  "key33": "64Vkb8cJRsBHwhWj9kj2kC85jGiXF3DWH7SHLmmHHHYJjNcr7b613yTax7MME1KGatDHDSUFpFN3dGK6cxcarTRF",
  "key34": "HjG3j3nFahRYtTujjFvtFdVfp7Y42DwifNSLUXTYWDiHgyHbbgF1WZumukKy1PVHRaqMC5sdU5rypz9174TzdV2",
  "key35": "gALmB6cJugv4TSdvmMh846ZpL4L3SGpoaazwwfVEJ1GgomSsiYXWhcDFsgtd9fMfkyzCAUq8h1KK5662GcFidcg",
  "key36": "3rSgtWnVdiT19cBXBTK8eRrsGYyqHXSNHVSJ2SwraRW3Bekv3AQQyuwiBuMyAcP1tpfmJJWbjtSJPPcGyvU4aN1U",
  "key37": "3krTvodgWwW8WLuKCaFSpeU6ffVkMUeqidYCXszxKcbsjyvcQTiC7DVZQVieApF2Js9VMSACPjC5gutmPaG6KjG6",
  "key38": "2QMh4c8TwuYWWPmkQHnGc5fRV69LiKmB9ebcP6TFaYcfS3La3YEWGeM7s8s2SDkxMHBjN27W25G31UTwUZUXY4vx",
  "key39": "21b7Nygg4qjDLjhstkw2P5XMUhNzKFfBQSnTGPY7bCeZHNqsUSCW5X347stJxJaXv9iK2aYEJbKiqV1xnceV51q7",
  "key40": "fzvVX81GfWUwtt1buYJKdtL2GnPs28o3uJ6DHEcQJRyYTdotdQL1khNqCiR1cg3QgyH4eHPpzuorjYdraQE19Tn",
  "key41": "58thBydtsvrpDApA5NKLht7t93GMdozpj4Ezo5HjJXXuF7WURftzYQ44716rHGjUZoRoVA76f3LxoUHCw8yumKPz",
  "key42": "28KJC8WEmskwfX1yWC8auwAv8BD2utBSyGn5rt9zdQX1G8tSTiBBFuev6GsGxDtwmTw4iB5KgydtwE51f4v4ZpSk",
  "key43": "2g5JtqiSx7U1f55Tf9Kf1oYoUznyB55FMT3RcKL8p6H163Lv5KAQ5hMANSKi3cZPJgVViha6KxtNyoLTWvXugiu7",
  "key44": "5WmqyVC5uW5wyVkTtJgjT3jpgAhAkMU8BLL6hWBK46vaoknKy6LYyP5b5UNqtKcBo8LV3E4ALSgHZJUypFGn6kAK",
  "key45": "5RkYZvuVgE2sYrfCdxYLa3PYMnngTpmU6ju85r7dGz3YXbDb1ojveBi8i6KsQkhAEqvc24XGWLX18y73ZjawVxKD",
  "key46": "2P6xhndx6DGx9vVt7gT6fA536tpQHhnRAjERzSscb7f2cMpzrMu1MFTTijXHHNzoBnhvYJFbMCT7caqtNAVbDMFM",
  "key47": "4jupwqQF4VoFKEPqXyYj98hRHEm8Y6MTmW8X4Z5JrznCPAXMER2BQ6Rz45YMBsg4VoAgTduFiPg8Ps4iqUdy2PC1"
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
