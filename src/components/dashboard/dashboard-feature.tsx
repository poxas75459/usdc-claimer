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
    "4CcGSr3zrDXfuAk4tR8tCxyv9ZjW9TkyYQhnTGaKTCySvHRmtyzPbPnpGvrs59XPomJMTnw6phg2wV2kXyMivQhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKnrYpi1A17TH5CAEd1f6TpkGJSPrtXLZtfSvqZaRAxN9rz9UiyMJuzz4tt6wgSVz9qCEVesA9JSBrqejkiw4C4",
  "key1": "YVegTPv48r1AgDadrmhBZ4yuC6PtJ4wYAq8U2D2pYu3tAjsFqVsJPehiX9L826QfxH9EmyAtKzGKrduTAnY2osk",
  "key2": "37tV7jeHBQssEiDJVS4E61DbfZVa3SYxDofjmw9Ay73WChdQPVRg2WemMmL1o2mt5hkjDf5x1NjmRtRxoPt6Ygxu",
  "key3": "3riDyZrQWLWiLx6qoZByaHw3asVJQmuMsxQbDmYvgiq55SzdS8GWCZsviZFYzGJHTPc9CUbgnhce9U2MnCqaYTGz",
  "key4": "2A51fAeKr5x1ywNMXJo7S5vBRyJyqMaVxXTsydmk3XPTaG64AL1sqJyGsFMV3Ryv3SMkXaDeE1dFLMpMARFgm594",
  "key5": "peWPm3Veqp7j21FH2yJjKqw559QyqasFNwc3fi9whXHQzgbMZyhK8uF64DzLKiLvRaBz7mu9HNrZUY6LLziu9Yt",
  "key6": "3wztyu9DAiEe5xP5A5uC53Y4h1MgZmRTDbh1M3tZGWRCNr6WLaNtRZnYGbvmqX5GcwAjhy1exqzDUSCfyWXy2dgC",
  "key7": "oPKN7quZzgn2u8JRmMYEJxuYoZTudf2hpK44rzTc3z1egUJo7HbD5xL8CVa7nXWnNzHx6pbfS6mwvsegbVFYsT7",
  "key8": "4mjB64jpZc873ZcYja57KKW4dkvDv9ce7PSi3Lg9dpRe7mE2RgTh9iYjV3BQC3XUsFrAEkZyTVCsTKM8nLpLoLEo",
  "key9": "2uxKVjEs65z5PgQ1zZhmhLt6pg4RKJpgUkkF6pwPTWS7erC7LEndjTWHjZz51zoqB15FYWXWE9GwaTiEPPfE3EGt",
  "key10": "2HHS82WVeW7xaVLtti6r2YrgTvT7pyznqCcxiDUxtQ6r6hZsMdK8hm6Liw1dRQx4v8cbfKzW9em5nuMvourFcFRz",
  "key11": "2UEzoNgmRiRwGMqQMudzPVBb2AzaCzN9yN8M9RbtNuHMG5Y1yHwahz7BJhR11SM1B5zfsMZpfrj8xyfvZRAYXuSu",
  "key12": "399ZfyWw6UBCk9QMeNG4b9ZNz6tfhX4Vv3HdtSSMN7E1vyTr5g9Nir42Ga3WwWY9qHNBdQYqqdki92E8zSgFFaL",
  "key13": "dNaXYQFT2R979pNR1FodWsozmrMBJzH8RZ2yDQqUKB3baT2zxJFHCmTKv33T8SEKszsfNKu1YrFtmexb6HUPU5z",
  "key14": "2FVgcS35gngd9GGqDuT2oB3RuGj6LxfGVZkUSLZH9qmgukYmotPXoowasyTycgjZa8HYgEW1Cq3f9n2yyqgiDMNq",
  "key15": "4VaVdoushqMHmrLmjvjmgRJY6ypFzSKBsZGnmsvnUnAzete558yL6uJSwMGdNGXmgbzQYUK6jxtgoT1Nw2UANn9N",
  "key16": "3xi7VBKbF1qRuQpNDYqcjCjSTTDNXMZzoTTQzguCfYQXiMJqLRbUAvfJhy5JT3fcfvaRHD6UqLiewwn7sDanhXaG",
  "key17": "4VCm854HdZW8a33Q18tmr5hSyk11JD7fjc4LEKQkunNSvx67fYNYswijkKKUVj9GTyzbz3tKeD1aCrvoGVQkrrnm",
  "key18": "ymCM3WRLeYETUmMRhQga4DRKcruoBAAJAUBHpuHnSb8k7gQFHmep9j7RhJR3uxujhz1vkaS7Fqid7hbK6D9pRi4",
  "key19": "qTo88KpdR2YZDxFwNVPgCwhHLfhCbekcmePZh3hMWvTMBQUAE3bAbjrEkA2vYzvUbmvTJADnPNXmLv2Fy91cYDy",
  "key20": "5Xkhi8kLHm1zH8LE5AYy6BYETbKktD8TuCJjne3n7G3foBC3Bhfc4smQqcES21RciU4paTyuxmE1TTpbqERf3eju",
  "key21": "3irEKbnc939CJ7oeXx5L1YZTWvV6ZHRw2swG7koQdk1NzUAQNFA9vLDViVYJKidqjXbMVfK2gg4xwXtR4D7gFJsU",
  "key22": "5FCtZKtN6U64cHzwJto2J3bxugFd72uhCBKquuEtk4DNzFBPPjcnzfdFF59hjrhCfzrL4cKP4on3yqsUJFAZemRX",
  "key23": "4AJQ9s1Y48WvpFK1acWqi4ERsJj37cHW6juPyoZ7o3idRq4WiVoJDigLGHZ9stq4WCUqPCneVQANs11X72icqDKc",
  "key24": "3owbV1AdN2pwSoSgWUMsbRxb5GZShP65Dpffy6TxTNzJtVRE3im32NztMyRigfRgLP8DPE9ov7gJ1yjMvQ51DJM",
  "key25": "2GzQbZWUCeBMCQWDSb4fh6HK2dgiw7zJkYeJWSpxUudVxA8a837biD9Ht61eaYVjuV441myN5vHypvrQSCP2uQA1",
  "key26": "4g79CUM5R4qkETVRGSUapWyi84WrwaBQxNuMerQwU3DAbTYX133Md5MP4wByM2yaWc5dCqppCT5iPM1tHSSpriik",
  "key27": "4ZyEdQAhd5NPvqGPK8DfuJiESnGrNgEZd7GNrfp1TSw9K8FrZo6BiTquvFf9wYuWaEEFKAx97nU9DVENv28ozdyz",
  "key28": "26DWHhjBmb76DsiqP2fjhjvBAXubinPDrf9fEVrCoRTKZz3V3jexk8kKUiw5k6EicsC2o3aaxiqyJkys4XpVJBhH",
  "key29": "3vGMeHS1MUR1N8T3i1VQAaDrBWMhwJLdkwWUi9CGhVawn7ZcLjcoxBedFoCNqU4hHexcq2nL3smDktkPZgxaj3NN",
  "key30": "5vtVorbtH7QPbAft3LsYs8QSnGTJE7Xt9mHRzGYLRzTKbvvcqU5f3cYBTCAkFL9oi51A8v7J89dyXgHnXKpbYDtz",
  "key31": "2nFAk7bT9Bt6Zd4UjBegNy9bbdvHiZziEMh8meqhUK5hkM1rT8fVtu8ieKyRF61RPwEMrXKeyioYRU4iXVP66zn1",
  "key32": "5pcPqG5ecSq2M1z5HGKFCNSwN7bpqJ92PYqVsoaT6pL9BeAeTGLy1oKLGsLekp3Lz7tdwkAwrg2ajuhAtuNNbP5m",
  "key33": "3CdvVHi1dGhQVXV2GbhjeY7KjYWfmJYA9Sk72gWG3UmGJEfefZAtvrbDXKnxgraf5FzBNRmM5212hSCnz7Mio1jf",
  "key34": "2J9nngqixB9kF4m2GgFeBq2QZ7dvDhjiGKnc8AjBRs4iTcd2wx6FtVoVmh925Yw2KvCdLV7TwJ2ABcj5GSdAucZS",
  "key35": "5wvNxH4WXoAxjL1ovV2zRRP2Z7iAGP4XTa8iKkre3X7KfaEP2TzneXHCjvggjknPYS2SoPPMHWPXGsnkjKghp5zo",
  "key36": "J5Z3E1HxiSDSbxM9W5k1xb9zgARZKwe8yMJG66CHJPXMBaceMY9zPRXLRMovFcXEaYNndvUwv74LA1cex5RUetP",
  "key37": "29DXfTdiz8mkgJf3Vzxcgu6n8vj7gdwDuD8Fu3kRewEVvGCbnfqfA9Mmg6r2QRcEe61Hew8couuShaaoS7LL6LaN",
  "key38": "62pQRaADJsEzMzzzcY1mKpTZ2b7KxYRBJxcRmNTKs2PvcV7tLz6ofD5h85LpnWPGcRsVx51tDfsyopWDChXKj7D3",
  "key39": "2fWgbP4jYRgHyNXPUY5tqUinuL6v3CEVhPhYPTRFe4xNbxxm5tYpcneDDMsUupjwy5ZPiaZAWg3pDZobBMCoZ8Ep",
  "key40": "huJCQqQV5D52wcmcTkToLEUE9B61VUVQper93R4SYmGmW9UAfhagyjSg6DekZcXuZW7fiMebG9MchfgpYA8urbg"
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
