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
    "4qm8fMa243cwdyDboK3W8ckng4N64RAyaGAoJvRBatnUC496QGZNM4SzmDZUni1FytkdbqADbv3FxcqQ5EU8K5hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RS5bdZQtngjNZfQ6ScZwpuW9TFKe6kXrMWgYy5qDccrqfGD2BDprjmgVv86ysHYQ5r8u7SSqnp4x9oS5LbR3Nyb",
  "key1": "4qdou7DdZBDCTUELrUPJYLVQvchnFS9bGFg15UjeGxhdJzAAbAUEpABK4vpUGav5TqvY8RhUnmnp1E6EuvzwDJ5E",
  "key2": "4rLB2RuHtBZXB92xAhD9x1MN4M6yqxwXqamzWQ6tHAs7DyyJ1gbAjr9P4WZuBN3Q3dcB6PTA5aT8CKE3hTc3PJrZ",
  "key3": "2YbKd4VPs8pWVaczMtjBkkmKjVat6EFiGWSabHQEQsVK666nCX1xRMyao6fnwkYFhJNnyRPvKZxFuR2koW87xGSe",
  "key4": "5d7RYbdop9XFKwtzb4GLCorM3MX3V5LxJoq7RybGL2WvKAXBaUvfwQCRHuEUFeqBVZKduRWGKg9L1ngTQxWGQL3j",
  "key5": "Shpbir3Z61Z9oAiXap7mAhRHsKGHD8fAHbDfwiTwktAvq2Sixd3gS6ZnjuVHXP8Xm5gKxCrYbvB8tjqdxGdEjEN",
  "key6": "3TkKDyTaVQdT2TPsS9r2xUtkD1tBSxi617WuAWgHA6kF4FaaZxxnEcwtPqefmJ4zvBCSGpWUTeDTfJuSCRqdD12C",
  "key7": "tbocHTCcon74Th2ZXMHf23tsoNPYvHVgLpnkbhEz6UHUTeUaYssZvZ7w4RpCbB6d8dWks42ps4sEasR5eCVgYRE",
  "key8": "2LHnbmvEUTfdRCM7gejv5jiiJ4N6uiLoQxBERgj2s5kVwAjpr2oTg9fWkb7YvKUYNHUcXKdH4NFLLZtTP9uXFex7",
  "key9": "29q2RKwe75FnHBbmJczamymv4G9YgiEadFTtkWjad6ZwXiYAYhNk16fE2wGv1gEURaCzwF4EAG5FfDt9mgLEZemQ",
  "key10": "CcwrgkfAPWJNmd7DAZwSoCKpGVseF1KDXmbBSz2dPK77AcbrBXQfAqr4UVgmDhCoBgePejWd5RBkzNXStdEecYc",
  "key11": "5RFN5JR482JpT1HBGNhNiYfDVN7MHEMz6DAeTMJTJyyggqHQmwrAfiEsSt6fvGB1ai3BfDrn1LiwFhknzhpS8qoV",
  "key12": "5KpUYyc7Szt4xNJzqbjjNgijB5aaDqQFn9VTFJ38NvJmjf4LmuuzzgVr6F8oh1hRi8FmPYbd7fp7KS3LfuijFnMJ",
  "key13": "4DYoVGLrsGBZ5cSfS1Wk2FUiFVZz91z7kavHi7LRMA2GrDEoZcRgRbWfVMeF4KWqhF56qKr4hZRHCN4eFT8EGyc7",
  "key14": "5sJrqw49N44n4FVV5TmDyUxsUjRBckqsFsbWjKRs1hC8HeocjXfRWU2z7N7RsqCaq7kGtyvDf1WEo2FES2AAvgGH",
  "key15": "5bguvqyns88QztVmNtQAfgx8pemjEuxWnJWXoSowE3QEzcQFgKcfB3aF1zMrSs7U7EgYDd3iAWSbzne3X5p2DUSh",
  "key16": "2Km1kPJEAmXoKpo6dJfUYzH5F6jXaBv1eqdu2TPsvv5Sm2WULv3rLyZkXcQZAgpa8fLUd9KsNw1y7BkAzWr4VnPd",
  "key17": "BYMcSyseqw4S4jPSy1JzsZ1zTytJbmWVDWLHhthm2zfMGx5pRnH9fXEsAVbDDuTR5U33tq7vL2RG5A3MwjG6GjG",
  "key18": "4U58Q6Agbzk7LrGq1Vui8qXzDiFFPDJBgxJk9U6MHJjrXqwjU74eC7PdDDW5Wj3zKJvjRrseT8XXbRYUU8GTGR15",
  "key19": "2MxWiyrRVnKhoWcwQ1CuuMmTCHUr6ttRrx4X7q4XnKppkJs1Lk4P3fDoEGSyVjY6avh7HXsUZn6oGAF2ivqiUeJN",
  "key20": "WVNhDjwnpQrbDDSMPMH6utNTkfDYV7pHKXJS79NYQE2jfjwZ8w9ukTeHwcxYH5V4JR7uAXaDTV88KRNi9Ywndd3",
  "key21": "4VE92tRALgSaisGFHPTXmCkzaQMC8Bmf6VbEgkwesfZ1gUTeZHHf7CUBogzmktYhkWcFq1mgDsqarAjfgvLRGm7X",
  "key22": "2zCwPjv7tW8u645zyx9d4SKvqH7rKy5JWLdffhKiSmZhpE7nvkkidtu1i55JmbRT6W6txwEwLJAnAZcRaqmBvuSx",
  "key23": "dM2dEed33oVhqcpvfrZmJrng12YMgZAZ1jK3UtozDPcvS7y9ioVvxXMbg5dVwkzPTjdo3w7fFPGYfyP2FFoYnYa",
  "key24": "3zpUChGfG8WgpQzjjkUeqUjuKceisGprgyy26WbETarF56UBdGg3RFfNNQCRsJuDUbhuziKqgYoeZvHvvwkGSkCS",
  "key25": "4zzdrhurnHWozJ3eHMKLA8VbqMrJKDyKSDJYKDBpXPdsDusJwbtq26fqKzUnjH42RppTBYEWqZWxihRER4Gw6fdi",
  "key26": "2vmz18jWA4AyZPEqj1dpr98pib5Vig96qYXJkBR11jJmJPmXyoX4xA3Paojog5N2PXsoPMFx8rdRxt8RBqQCqdW5",
  "key27": "4Dcn8dhXwbyz62WUWvvPJxGQsK35vC2NbrutBJUdp2cajDyPLB5yFod8y1vMo62hcGMSzfjba6E9a9TCoHJk73KW",
  "key28": "4VP7os71GkN6haqFCoiEnwLLSY8HuFR6a69AzZVh27a5jp2w4HjAm8bvBQE5Gypz8u9NacY4supt4mwKWUmtGBQB",
  "key29": "2QwmM1W3RDUKLBSK4ZsZYnjMBk9J8h88tdXJQmndHKaXeekFbT4fxRewTAbQe7UwvwqfnuermVeoLsxgtH13wo1q",
  "key30": "fmR9mbB17ff5NVgWmeJg5zeD8o7w72f41oHe9MnTtyhjiSmXvAeKmsGqG4V98MzAWjWqmVf7wDPWbRuHzVX4Y4h",
  "key31": "5XLAK1WYQJ3eBMudr1dJkjCMrk1ZrEJeXKriAEbZ4Ejnw2XSbjR8FxEiEN7K4sKxCp6eBq1PxDeKczJCjNJb3jgi",
  "key32": "4ShvgZo938vsYZqUpWnMJRCg15jjjLr8pkWyLws1cXhB5TgdnzAMKWb4TCSEVqXPngRemxMjvFwRk2aoFhjEm6Jp",
  "key33": "2LnraLNXkf19gaMwhQiVhUwTYN5VR1hVvwczY57GmeGRTCy2sC2ubg2sSdrY5JtQSgwA7cjfafVQtYMEWtwGeeVk",
  "key34": "55SAiKqJjygT7JJ3xt5McaABRPvAuwCwwU4Wats4oe5PTnExok8Vpv4GMN1WjpDhwB3Z29oPcYfuNgbqQucXKP7Y",
  "key35": "2PVQN7W6yLn1qd59Drffmp7MLKQXEjPjkg8H1kDG5Pcz6Ck48KYMGQNXBut8WMjr2nfRGSz51vria6DTeEyj9u4e",
  "key36": "F2PYtyPmru8Hoh6GDS9jC6NBZXs9VudN8oyUWpE3TVBDUsmavQ5VbjPcTAzCmWizZoqN4J6xVq1irE6RDHFTZp5",
  "key37": "3duVZCruqSGFDhfrZK9N48MYjZQmiJybTcjYZGx321B1mChbm3MFC5JzLb73CQSBcSVCkGB5ftZsXkZWonz8BFa6",
  "key38": "3czo85y4PTwzctBuqHV5FcQiD8FMWX4ZFCGikLseMV1GcgcqDs6dpT2Ki11M8tpoboQtLxNNbrWxWuNH7VjEsFm3",
  "key39": "2rKCBYYKtzJgRaubpT2XLmbuXDcmaaiAvbSUToKxjpfiEozyZhzW9QUZixSHVp8bUygJjw2EQZbJRB4bPijKa9pd",
  "key40": "gZmVW75dWkVDqe7mEcZ8wSbz72W9bEaFH5sNSk3EXSvHT1T3TnMYn9HqM1MHxpp9CqKpLDbzjUD9Dd3ZuiKWa7H",
  "key41": "37N3FKXnji1swURaWHSeUAkf3LXDWA8N9wNhUhb7Rp7nJoXAr8xkTSmYf4t7HoXhbicaVnpj7gQJCTnbf6B2Wuyk"
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
