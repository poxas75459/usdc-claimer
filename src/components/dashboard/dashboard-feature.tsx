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
    "3b6aeHV4iC6vhcEiXbZXkYTVaQRzikArxS5DTUVaE4yodmx2Q64S9WkJFyjew77Gmmxba34NPX5rpJZbGobZmZGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2ZejDx98RtKBRyiee69mA9a4jS5Re92AC9YXz3BNnG5e7adYwCYPrkVrKhr7zPyXxLTTY2grZWXxXoxk9tjXqn",
  "key1": "5tBQAGt4kang7izDdvWCZ4CymBnFGAoaJcDesRWNzQAMRRwf2SdgMRKwXf8fMVESXJSKF8Cn7QLEFdZvSKeML3gs",
  "key2": "3rTG6NSaYYVzB8GFSQosCZdDKNdmHFrGVrQzZhtxQJLbvAzvmY5ad591VQt5E2TDGNz7yzVe6dFTbyQXkoVU2bkm",
  "key3": "27vf9sw65grRAykaaAJ8vRXcSYjTYmuKcF9uCu9YUm8LHocdatAzoqhe6Tz9ebFjXvuFKw4soZMfH7TN17T3pAPR",
  "key4": "t3psDAsTcETmHQA5XfgPo2XXNrGoWwc7V9SLEb1fRkw3sWU8aWpBsi7GBGVHLjmaqUAT64EBqjhppYhvAhoUpJr",
  "key5": "575KMjK5P2fEpSZqTq41Ztm2BX2mgoAVesv7qQjQFw3ZG9GbhxU3cKyYyjeoiWJxPHYQ5iFUCU41hrYFafAFNT8d",
  "key6": "4Am7e9jLeuKbH7dkbcjvHa1JfSTWGycFVq8Jjn1uoV35L5FTTyTbo44LhNALtLz88VFzaeg7JPXhvf88ZdCVUxtg",
  "key7": "RicMnxKii5u7Q3AKU78fLA5igjNefyXqvrebDfmzZUCsxxNpg1vAGEyDquVqyNhjBoWFdAjVbB3Xd7YexYHJf7E",
  "key8": "3S5gjXBwznrKPAC7XzTDuyD1r5LBMVTfSfQJ3vuwcTMgdtFrNfCdRXon8TXpsMJqZzmMfbaLv1ccb9XuwqHMpaC3",
  "key9": "43CsMzfPYXVaHt6Mr1jekhGzD7zgAmqkrNVLt1dEYYFiUaq2ycNBqPBpwSzNxJXtXPUGH4h69kCtprB6DEHc84es",
  "key10": "5vCuPnAnugLj6yrHimpygbuceqs5Lp2vGarsHQjhv8eNpqi763fXP5iLKT797CCHZzycMjkg2cmcpXEGrvYFqSkd",
  "key11": "2Ey1GxvSA8KshPDmmWL4JxMvJ9GtMNywCqRMDB2f9bxDKWVY9PuGhzaPfC5batpYCae4BbwaNyFXEf1dWKuc2g9z",
  "key12": "2BgBLLWJ5CPN9pauFaFWzJH5vTxFoXLFEFrsKiZHM4CrYndWfx5Up4vVepWeMv7vBirciaHYQEJaRcNBdWrjCsHz",
  "key13": "22ctj33ewY5j31g2AnGZDBQdFKUie5ond9mRAMR2Qab3nwQc9QS2E514inrD7fJeHq5pqZPQgno5Z9dq1WK6aKKJ",
  "key14": "4ERghgKAC3w96RUb1MiAiYAqpVUHrkmRn7ogprGyuHWPAEUxoavzcufeDw8qns1igm9JcHZ6tRBHcmHwvYwRRmef",
  "key15": "439Uia2zkV6xd6hzC8CdEo7GFSma3wAmtdkXt6B8kTD2HMsi7TPi26TwBKJtsTpWzse8SDGqeSi6gTjpQmWqzMaw",
  "key16": "59bueWjiJFJQHCw2isBpbDkPvZeKR4UHrzsFzJMjkKA6Xshd6FLdwQ7FVb4yU5Dhz3yAdiuD25224ML2BZ4SjxpK",
  "key17": "3xXJBapk762Yv5LR3mzM6rdHB4GU3XdpxsjJtGXmPjC1A1runLZz9uVXqErFdgovoqJ3hw42ztgkALXnFLxuz37P",
  "key18": "2YgmdwWJGcbohF4Zk5sWoXpmfTtipjxnapnha7t9mxQefAg3z9jC4veQgjUdnbqbA362ZQMo6D7dUpCwqzShSN4N",
  "key19": "4ZWzqtC4HCJQLpb2RifgLtwUk84qqquKfqhEdx4LZ1ffM2mvFWSvzVCXW7qkpYf4zpbvbaszLW9djzvLK15DBtdc",
  "key20": "2o8bYjaUXQwu9kQUGtiaGv8k4qLEiYugCMBV9s4VFWbKzhDm3r5uCQKM8ukx57fyNQq3gFqB8Avv5EEXk48wA31s",
  "key21": "4MLUfW3HtNokJk3nekQq5fxA7vefrQkeLUtVozRuCztr5xn1j3ukTdtHt2AQqNcxmcJeP1p8ry3Mp7LqdBuYfvPj",
  "key22": "5khVTB89VWDVLT9w39o89mWvXtWpp2pwhdg8txRPfub4PcPujz9D9diaSvosQ1EgDuZCfB4wubzCXPXVFSQvqef9",
  "key23": "5gvebKRnNrjjzgeDQaqngogEu4249waTRAicocEQZ9jF13TH5idvDymF8jTnUEgB7bZvwAtDBnL3VVBEoMyHuXiP",
  "key24": "3bKjLrCyWA6qfiefJNbGiQBiRm1f6KzHNgDNrM9BFgqZHuQvib7A7BFdVVtUZw7qFUjdvTpfc5qzb8d2sGdaeShr",
  "key25": "3kRkjSEMquTCuxBTAYFTcUuNWmHnXBzjkgDt1M3YoTJLXdxm5JUgo42EDLiue1iEVhzZWjacdnfmnRuZkYhCAJ8A",
  "key26": "2W5BCLA7oSiiLeEMEEDq9UUPwLsLYVmYf6iujouc4HJ7r58aQPzZQRSFKSAUao5N5vAx8Ymgxo9d2MhatXvVCuvT",
  "key27": "4zfPZjSRTDmaGF3SEh4uCewYJCHG3X6i6R98Dvc6ic5BbYpUay6KtxvYeAenDnT43bX8FV67pCPh9fhbqdnkpUWm",
  "key28": "3YUrm91mgNrf7VDy64X4hdbWrz4CEYTEiRZfNvKR48vD3TdZ3Wa3DRAD7uygdJAdYksh4fqa6CZvTYRHBtLrguKV",
  "key29": "5RUX87rwxzbmowm4NzGy8f6rt69jPmtADhtNtEvS7VshCeP8gaePgPEzcxPusiGHtuzAb7VyUxyhR99s5kZQFixz",
  "key30": "5LQEXSNUotXZ13axCq53scYZTRG8Ep3tkwqYh32XCkemyo6goQFLxoL33sPEXXZJqXKc47a3qmZDfjTVHNLfhaDk",
  "key31": "KM6MAFk72Z2v9HvbbZVhsPtVop3YZavExAtWUEEiRhYuTLTWo8AButxA9A9kuZaWZu31pS9ZDkF5956if2zsEUo",
  "key32": "3gk5dAnHLWGDkvUeis2vsHY4MvsSUdrT5dFbBMFFHQ2i7TjF9qxFeFYpJcuSAWceX1sz7yxXctMKv7vSpzP4WHC7",
  "key33": "4F29J8UyAi6zPHaqLvUDTsZmMMA3SVA1RA9BiMfGb3JAHCCYqziCFPW3oBkyT3S9n9vRbFN1wm9f7Q8ULfvmWgSB",
  "key34": "4oV1qGtTJSCVeigjTNB8sk1opabFMEP2ApfuAqx5RAzRf2v6t5v2F9RcwtANXchwtFtWhSrLY1pTDot2ENHjdgnw",
  "key35": "2tq9muDLvsw9QNigmzjgWKQBtqJzoXTp9DmPyYSX1dNsSGBGxWh4XdWaS5jYBCz3RrYzHJnbWyVTvnrBF5Y2FjVD",
  "key36": "5TqwRLfecZok9enMEhhSKwbyT1H8ZM4jGeYuGSpCBHpq7KLt4gTRxqT4cRCPHkL8AuqvzZDk4CJyu2kHFWo6WBZ9",
  "key37": "2vGZLRziwTajcnqU785dncfyp2efCqetX8ZXboAnfwjaaSskey6789G4fftd8daHa8iE8ZdBKx1pBZ6q9J6irSeY",
  "key38": "3bs258FcNH8TmqZBjLXCs9G56XxzeCmQwR7j9wcHSpECymTw1pRrNwFTcZgxJSm38QvzyQK2XPuUUwCsHXjQecu9",
  "key39": "WPwCt164Nj4Z7zCnhx7ghdiamDSqoNupCQfmsefECWvC9M3h6xcTmUgkavqaVWAsZvwFTAVPo68zVExcEeQSZdG",
  "key40": "2EQBFgC6iuTBDoA44EEbE4XtcJuc7CCAFXn8dEAyHtPQZaqFDqaL3wJoSH43SckiWMv6c6yTAzdibJrdquG63U9U",
  "key41": "51fQApvHsghn29pKbfP4Z5MHuHHVczUftRcVCkNhKSgjwzBdHGWCYESUpkPrCSFGTehwzVxasJ2tWZahrbmUZ35V",
  "key42": "4S8LbCadyTyL1Acj71nnPurGskiyFwQs6mu6BScRDTvcAYytmkUnjNQdEHtyvWaBt8gfAcVLzfXjg2HsxQptoac5",
  "key43": "5186mWfQBQ6y89ZWSjaUk8F1rdrfCuaqzb9sy8juKCXM1aLsq4VN5MJpohKz7LQ3CiAxmA7BbHPBDW9wXqvTQzDg",
  "key44": "TXKgUdigrAp121BMW9cxfTNTSjJAtR4XMTKfANiEGJFY9FyGgdsbqmfC3MUsLMFwnhwEN4TykhAYpgHsVMKAo7H"
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
