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
    "2pkvND9qzfwfX3VoKhyf4YDREq373DVNYiXnbaF1G1fVsjpLPrqTLwgqNbTKwvqGwdUF5iAPt8AeD2X9d84ptPRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xAqkKDdNpME7B9EbYGGpddEsc8h7T2Vzk2ti6ToPwjJRQvP7Yw9HcwFmXp15W1RqS2oeSqEcZqiVMAe9abVTQca",
  "key1": "3gFFaHZixEic8scyzCYVoY2FTmMZm5ZQPk5ugwmmeKRBFDXuRosKcP2KB6nA9XWLJYRRFQ3zycc1VKV4C7j7gZPK",
  "key2": "xgaEUzBobnVe4mFhmXkBrGaQWynSALE4x1QAJ9tPGPX2u2UTmK88Dt9WjgrMyrjvZ37rLaMzdSKyb4NWxduaAox",
  "key3": "2zNFgxEzrjoDCQcjcQqp74BDw4i9iLMe549s1fjjUZad84YxGShNMgzJeZwJPwQyjNoAePQCL8k91U5z5sBEAtx4",
  "key4": "3eY8nHm5Z7vMVAtEHvEsimoXXjDiM8Kfk474adogJBH1TP6ACuFbiFKnWmy2ekyeeaF7ougPEubFbWUuGP5fRZPq",
  "key5": "24nzMyP3BVjNRtGTFa8EG2Vh4PJ3XhBkC1vsKLyZsmzgsGyxSc4QDGiSMPME3fFz2H5LWAZVnEuEj6LdudYGpZXK",
  "key6": "4wp6FDimNQG9gHX617fsiW1ZkkaByQ56u27my98uWUqtkUWuQvv4egQBbqgCfXyQoTAHXBbQheL9UASsCk7aGv2Q",
  "key7": "3C1mBxkmqP5nmLYB5wxwASfhkQqkvMYdMcD79EJFrEW7332aLYvmHPfS3qbSLtMHTQPY5Tjq1KW2qGrpj5Ar8DtC",
  "key8": "2ZJ6yCYGh9wvP6HhsqtfXP8XVfFpa5pyBY3sFh9jzLMTJZYSNmCGjPwXvQn2uNnL3K9dgXQf8ykjHSphap8G1tAm",
  "key9": "RY2Xx9YeiVeoDVdUW2emAXaLevVMjazRtGDreMez6Hy8Jtfn4w6ENZFPKGjeZfL2tmw6Sa3fTKW3ShGz4Rq9caT",
  "key10": "4dAp4DNNB9oaCwNvugYM6y8NP9vckHMdS53Nt2pHSueFAhFwgdvow5Q5t62KLV297CmjnZ3dSzMTdmVHvDq4erta",
  "key11": "3zQ8ajh8RYompV8UAZZBZHjYeoa7f3BqPAkYnEyzBNfjsFJsthfmXww9FNBJ3wHyBa9atgaytVprX9j4yNHRocug",
  "key12": "4U79JKMiKTkFd8RmQ21dTLJCaA6WZjdhR5pJqq5oiS7KxzibMx4UjQAKkHQUZayce6wBG9tLrSLym9bA3xmfi1Sc",
  "key13": "5UgMeVnD7fiaMJMuh1YZMXmbwRyyjJJch9mgCmNvnRyELByi2RSjRMN8nnC6NpeXsGsDMeJSyNNc6H7nKvwKX4aX",
  "key14": "n6N1K4Nwn21xnXW45Pf6gwuD4cJwiPia225aSxQUkTVKbxND96cTsiv48219gtQMoWrg6a9KFfyTGxoSMs7SoMH",
  "key15": "2omsxaBgTZYCVD7vzQMdGzBRzXtfPqdbyitaSxCdPBLcfx3BU7iRMuSNSm9MVNwqggNTnvmHN47ZZztTxGbRzHbL",
  "key16": "5TqPsuR5EDRwDeKThqF7Ei2cwKeGHKkaPwDuRpiREcsVKQQJA1wFS1DHPmXKxAnzLGdYGQ6ZZE7K2bD4MMW2TPod",
  "key17": "46FoXvetVXGLptDMuzuEe5etQuQJ7vUMFtwGtyG9pXMXw2rKAGVz4CSLvLHy5ZQgKJvWyhPoKVtUrzQS6pszwRbH",
  "key18": "2cyGAFfWPXv4pqs4FbtAuSuombRtQaSSH74gtTPni3eNHASEANubz217w3qvvh8YLH9qVw77e5CGMz1WKtJQiJdo",
  "key19": "2xa6GdUS4gyS67h9dDkAadggS275MWnka1iJkUn3k15CxS73my8wuDjYq3CWuaSs6tRKqn3wE7hcgydrjvxr3CKT",
  "key20": "3y4p6CygxG5W8jk8KvWX7kotptw5ygWHRWMMeEwki8Eufm1XBCGmAHdxH7S3uRqCTRUHmrioDDzMfZvgFMWAFjEE",
  "key21": "3r7jzn8sMcWtn5J6brx5tZF3Cafiz6i3pU5itvcjPQwANVeW7UtNhzdE3VLSa6t8MJ1rAchb8JocE7RgJ2Y1Nrr9",
  "key22": "5g5tz813UDKgzkZawy7z8UHUse5Z1FkfenoV9TFBar7bSFEsqrTfdwtUY3eGDUom4VkF9dVNqqrdqPuqC3Q6Z42a",
  "key23": "4yKenLjm4KsV9Jr85KujPZeArQD6zxrjUXUWJtddUZ5EmT2qv5mcsk6doUwEqsqBdc8AvUJyBUvusDu2ZR3dzsUt",
  "key24": "3N8bLMYkmaFgVhpyvWa2Esxet43gJixVZ1ErYnkK6o4Ci41RrvQQzooQD4cDndhFTsJi51Db9hWtomP1yfwdeCgp",
  "key25": "PTw8Er95sRT8TuE2LSn2jv6Zph4ExMXTQuFoZwibdk9eQH97yimyw73uRqu9jWMdJNn1psR5anntPWXEoiLzJQq",
  "key26": "4oavK1bE9yy9CoLkT5HRHTQu54JsWtasLnNPAzyVeAhezhoPHkg9EXCN9ppikCZFnTYps33u8xadrRGhkZatM81r",
  "key27": "5PaAqhvPvM6JPzCZLHEwERUQzAGDuP1WGPo6YgYwqqemy1rqyHQd4fkNQCShVc1kVJRfP6nzdJQu3gEiJQ17LQ4P",
  "key28": "2CnyBvMachfQU2zz2Vm8E8uPV9c8zJvBKy7QXyv8jLyd4g9VA2aq7UMvWqf2QMQxQZQYinnPFFayy5HFhSzMSYZs",
  "key29": "3qQc38J2cxx7KyEJzarWDMFhotNY7usY7pc9iU6iW7LWuRAqa4n4V88MH1NeHq6QWfjRvxD3WrDANkAXzVPppnHi",
  "key30": "3y7VE6uAGtsNaU3RhoeTKz5JDawRpe2UeJUCWMwuJZjmPVLxoNsLNUBKGVvuXtdibmuD2wZcgoFdCXLRK2tqZ8Ln",
  "key31": "4vCp5SCRHXQDVyrykwUYY5hVvsfJyukCTXGeDx52eoEencwehAyopmto7ant1jtXY86Vf8XukWHvdvLRanDHA7iq",
  "key32": "2ZCJgvaU49zaRCcgJ2UkSsnZK82AEUDMj2YX9S1weYpMkbkKFSCyhuZVsvVGtAm5urL7gLVb38PN8Y8PmTKvWYPa",
  "key33": "5gZddjyuFVquSdamf8PsF6cVaeNhR13NKsJARPoB7gVL6MadyFmomAwzg1CFyfUD5xsp3fXi7fuHc6xTpiocqo44",
  "key34": "2CnwNXojmyURD9gHzTfs5nF3nR6eWWgb9sqFHQEUov2B9vRwLCw5KFisDDyC23UAVAjM4Jm1rCnpm9sw4G2bNr6c",
  "key35": "54yWzVSTRWbfwUytT2xVZkbQx7fABatvWkxG5PwHyiNj6ZfRPryFjzAnyfxBQ95RiHw3hKHzgGtVg7QNBcMZ95pM",
  "key36": "3weiJYfEFyMTifeQ7rvuJHhGiLRFW57BvkfrztENumkW9agF8XhkLrt8jPELDmGEjJvqnWEGzLXv4qAfiBGqtCHj",
  "key37": "475Rkw7RmSRwLckvcrSsaGBTCzdWku15wbsbBpBomv6w7We7H9pTCYNGbjVTxM1aqBMmcDNyuzjAz1oRHVBoTnSH",
  "key38": "67TZrCHeMKCfYSJcP4kU4yJzUqWwfyNnXFvs3ZAcgpBAWiArvqNydVPc1aUacAiL44sAZkZafZP1cAXyPKGsi74f",
  "key39": "5oZMqqhrjxJEQTdj65QyJWjE4TZmmJsebzyD2ZDvW9qwK3R1FYHSVywsMrP1Ve6Kea6EWDbkzL25Z2EK5AWUQafD",
  "key40": "64cB4MQt7h5s1HHtqvMPXrEifJt3aTDgryswEN51uV3YAjvxNG8vNBAKA94bFSouqthPa3DN8CQFPSYGZbssL1cT",
  "key41": "5ovjgJFnWRiKHuuvX1NonHByZmaUsdvnM7HmkvVugzpZ1JHw4uWjdkcAncTtee3zY9tcuFoXqR4MyRja1w9URc2H",
  "key42": "4AYTNkGDcJJ8DLSZqgcbxWwouGk34bUbCLNoPpxGvSinVQpooT9RtFrMpq4TCFentiFmY1Y4KDqpZjS2PsfjBFKF",
  "key43": "3DZkpPe2XUQkqegMfkSoBjVEWyd7tHUm9HTJCAqn4ETHkDmu4maeghSD8ie3TZjagKxjXNFZVSLp5fC1T9DkK9cG",
  "key44": "4Eg8fMwCnk28vtrgLJ3Min2sfRWbnMRUsyzSQrBJ3GFUaf315vTR1yE7QGh8Pk6fkTkMjxeya3C5a7t5iDg6QMLp"
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
