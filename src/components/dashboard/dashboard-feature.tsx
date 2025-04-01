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
    "2sQAWVmZz7CnSnuxWejQCWHVmdfKNu6boKjAhJmLK8ynRt92nxEdo2BsrpFUfZhkT46yUBpghSgoC77KbKZ5mqU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4few67LFaEZvrjVrMA5i3JBNJNaAskf8bwRd8V2L55S9Yk9QFhcH3tg7zQNW1CUWefBLXYQkd8NHHNn2hx7DYZWN",
  "key1": "4ngKe7CE2bUhZ5xnfdqzbPjAjSXxYsjMmX7T1E8D5T6DoUcwFsxnJNubHkDbuH8Yh8ZUp5ehptjmAcGoCzKtJW6",
  "key2": "5gTRCFy15Hh6EKZYjjxVbn1xRaYaww6DfBhFvAX4ynqsCiinoBkHUzgxRqhUodkqTrudV2ekZjMSfMf4DBpdfvic",
  "key3": "oraR7mzR5yDgHkheP5Dgc7B5RZrGURjY1SZtuT3T3Q8Lxevzt4QBTcPABRHJ2DjMLurxEnTuJs8TinCYPhd6Fa1",
  "key4": "3wH8v2eQtZnfHX5bMWgkwn1qNhfYSoAeGWWdceauFjSdcHrxb4D3u1s14L9io9LUZkzNGe6zmijBHWVZvTgemHyQ",
  "key5": "2XjqTbgAgkVJu24BfEFeQaVbmvjCQMY9iMAzNUGj9K1HDMtkdhqoG9qMUYdJd5p3mXUqZcdTJ1Ffbvd4yV7QoaxQ",
  "key6": "3dVzvaSRKY8VdCmWrPeQqofqPkcBJCdBUQ3GXoW1bzjXkdSLDsPJQP5majjc53JFbvqeHUFa6sjjcq51rSFZnsXW",
  "key7": "4TTynagmKJMPob9D3Uhb8AczGRCBTtm445SgcrVpNgNqpuL1o5ENe597Bu3PpNoCTxWiePA4S7KoWUA9KBzetgb4",
  "key8": "3tGk3LTexdJjNv9muhf7PeUntoVbLFRgZ5RP1vnSy1MSfwSejQSTHu5FgbeEsY4EmPrdGW76wDqAgKfGiYAUSdGt",
  "key9": "cYSqyEUFe7TurmsZTGuZd2aLq4hRv1ppvPcpCCA9cncp5194pXZGDgtBLX3Jm99cn5AF2YDaU7fqP3pqrUwjhoi",
  "key10": "48mBwu7HHDV57s8x1ay9CfNNCzYfBNWrieL6eHgysthMgpVM6CzH9gbCvoQmE9XSew35zDuoGqFLknp62cb1ZJQu",
  "key11": "t8FLbbPft1TzzWpohJtDPP4bvzPsULhR2RyyQjQgxeCjwCyprsnTbYdvmJQNrRJjVmtUXKwxrsYLQakqmYErMcr",
  "key12": "43WE6Ve2JuD6bgUz9tkfhx1pgkQRKeHmNgcEAdX2MScPAzqUoy9hE6Pbb4fniWduz5LTtgXp5dSuw6roZEgEKYQH",
  "key13": "4uafMsC8dtmA8WHZUrDrs2dnwdxEDEjdkkWFMjZVSQn9VbXJXAwTv2L2FSJje5wAtHt6999rs9LiWWgByUPvaJ7S",
  "key14": "2xBG2a6eWnCq5qtSHcdCQSWSJ6ZuBmY4NGV5JHgy8SDzBE25swQ7EjMrNf5BqEnGV1LPRqreNdhg1En1BfgAQf4Z",
  "key15": "24qPuBiSpQctuJaQX9AbucJvUzxSdozjEoBAaKJUbGT9yZPd9yNTvpLvcMsui3e5yzNyrNfjK7ndujVqmMVNwi7r",
  "key16": "5FKpsHCfYMzyX7T2pxFM4Ze1sLSSaELdUQbMaSaKs9i6bKaYnMdimzBb2jrRLAXakhSFMSREhuccKHYimAXPxLmT",
  "key17": "4cqA7vps9eCQFP4kxeWrQL4xDGyadPLwjQMMZZj47WKqUzTFs7hbqVc8oeiTYMvtHJw3MXdToYR6muS76t7DF8dp",
  "key18": "fLfDgEU9B3Fw5BSJcfMfYQtyLkE8fxRQG6JkcejcwTkEweWUbcmDC9AXyL4SBHKzNcZfmabwP2cYeoEuTKztcQL",
  "key19": "VPCFKf4RAZdYkh1Spn7xyL1SbuZAfzJ9TwM3FMoKk2M9edLpAAWg8vf6QnikXXjMKoEGS3zJz1SVGjShTnSgW3m",
  "key20": "53kc7RpSxnqvnj5frzKiBg4tVvMH16ex5zSqjbVkryyYBCWSvk2yHDQYHVHb3EQs5dcjiH37KqXEPeQcS2QVTfZz",
  "key21": "2Gqxhw4uLKcUW4WGYjW4nAUpPQZASJTbs34R9EK5Yev26U3JYH496eeLznWFWYoRFntC7d4yK1HEwPPLNeUitoDZ",
  "key22": "qPsb118p6ecXQvWBYYXdBk6aGsqeV3jgiwRfLfYDiU189wGMrGyepwAQw3He8jKEqieTVLtgk4zJUY9CAeUgCkL",
  "key23": "5B5UsavSgZn5EEcr4bsasKd3Bgrt6JcAmiFQ8GvQXrSsfEMxrodNqFmbwJAb2b24KcPGtzRwEWv94AUECDK9Zfa4",
  "key24": "5cyvMKCcdF1MRPoh2b8PiqQbdzXacD7wyiNuxtKyE5ckRhnyCEA8hGYbsYmavNmBCNZ2NJzL5akqLwZnw5NzZxAm",
  "key25": "WvSafn2QrQCLp1tfPnvKUbndqHeuiYHYBUCkCqX9pT8QVFgqSX6XFuToyz2P2KqN2cv4gmymkxEaCWtDDMVZeRt",
  "key26": "3CxDYstiFBJ6X9jzZ499nA5RDAtZeUwjZDjutVdqsHkQPFoEpT2cGJRDdyuzsr7hgANEW2X75Rdnmgrt6X2JoKHU",
  "key27": "59jz6mkFeM3FK7S9XkK7dqYpdnhynTAoHNWoXctWsJeSXAHUSMdodMsytpi4iwWBeyhUYaAaohmi2JY1eDM7TGL7",
  "key28": "3T9f1TuozTf1pnVAuxfSnj2AYppouLUsemBJjypDGe53huvGTDfqMtBjZMrtpd7ZC4wFYXbSEx64rXKtuhGcFS2r",
  "key29": "2cZEcU4fPG5gFGVpH7qxN2dzp2JZrQgDxaD4WSZibzMdBXmuBTDtj9kqmE55tTATdokEnPAZoUEDQYNfvwfNLm9n",
  "key30": "2V4KzUELDkKudJJ7k8fSvVn96dfgfGF1JiXPTHN5xdwQN5FWDUzbNaDHVP1N7ZDWh8a5CFMNz15T654sgPnG6f8C",
  "key31": "2uEoYRSqCyoEbw2SPJzRWAMpErpiN2qN9NnB3QqdixDca6RfJLZZRecRbq9317DsghXmCmyV1ivvaNeous8MygXR",
  "key32": "38p3BKyyFbdqM2DWnYCDTW1wNwiPq2HmnrxEMZ8Lsp6XiC1d6YUd5V4LCghgLqHFgYred8iXKVej3CrqytW59ErW",
  "key33": "3XLDuGaTQECKonNygZwZ7RQe8dtPLvSnXSYKRwFwfxyiwVV8PuhocSGNcKiv4qNonKmEed5ZcaKKRNafvJH9ykTQ",
  "key34": "5LmuQzc8ACWpS3wPGkEmuXiHhz4e1EoZaCY2dwnumwGhTfSi2LmEeKjaCR7mWCCYEa8ZYLgFiRwcHofnei7VEJAh",
  "key35": "aMfmWVsixrbc9p9nTBRuZf49sgxzmL7ySPmrHRh9qEcSyapxxsdgRypwDzL8TgGwVxDzBygqVpW7csRxjTngPqs",
  "key36": "5o27ogVakauvQg11SnR4aNqnwjLJq1NgdzNJzPNdTPDesv3mH3wJ7ic4CsmNwauCt7WZdzZ3EsQ3kK1rvoz1mwfp",
  "key37": "5Pb99KsASTdGTsofziEPHxvyhosvoXPBeg9XWjN8V6ouQtLKgbNW19ZEf5o63SWhBR7Xs36rmE6GPMz4mUGsGqy8",
  "key38": "3MbXaCkGpTP4Mgwkz85zVsCB5LEihahLtUzSNDm6fGiVZw9dsEAoQVhypPyRCbqMntpRabdJVN4C86fBBRsEb7wT",
  "key39": "Q8Rdut62d5KbbjZziFtC5tSLzjQkdJqcYT7ottZX6XxteC2ctoFkRbEAGNLtMNYTmYeo2Nxg9RXiavrVqtzLkKJ",
  "key40": "2J5czBUjVMrvEYVpGWYtPFa7ehp6Lk5YVuKmgnnvJUJDcDK4c8aQ4Fzr3xE8QEKp18EqDmXiy9yHXMoGmbFuFrDK",
  "key41": "4QosN7y3jscg8XjR49cUHxqsGegCYU92tqqSF9H1RgvMVr5vqi1dmGUGnjkhUiiSuECynDVhVSKC6dd3shXNxVhA",
  "key42": "4kVgX8Fymcyw7ZtUsaZutxCGWgQygPcLLCacJhSsjeg3vNSbTq15z4oJnuFoghStNhPAgu2zLv3UpGMFV6q5k9Nz"
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
