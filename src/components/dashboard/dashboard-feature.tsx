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
    "48a7eor8M3XXJbfje3oUDGNm1Hp62sCwR6F2wpKYPBtXLNdmLwFjSxFhgnuYguRtvkLDTtFT3cSvy7qL8ti2pmLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhbMSqddXVspWtBThTTd32dPbZT3nNpLA2rTJ3D8VP5caBkYmfAZpmpYj8GatsSpjZwuhux5vFPD219kY99cU14",
  "key1": "5RhUgRUTWHRVLtJ8jUqzHS4A1Dtsg6sKKjkdH1iHipDkgf7XhGhv8pXhpPKfe9mSXhty4e3HGXT1B4zjiprP9Bev",
  "key2": "4ncFULKEQxNVwr4BBooiwxJHfC54vBWWjFJcZaoYJ4GHbmYBPu5MJskR3XLTRLAaTpUB629iYkrieLnrPskYNoqB",
  "key3": "iu8pAgJPuaCdZvG6NAw6orDHrBPvDCbPwSHHpggKauNweyiWEBPkfSmrt4TfhYiTA4G9QqCrDUiAPjv4S5hAxQK",
  "key4": "5o3pgXmggA3JCKAhMa3MAwZj87aqXFyZXGPBoYJwVyEmR9D2P6xMmkWaJ7GGYKzCFQXaUXqDAza7zbNvct12yJSg",
  "key5": "3z27YkrnTMj1FsKs1J6hKYXSHcn46ZmkanXtDnqw2XDGQKhX8pc8CLBMJNUsH1VL2BDKAdTdUmGZhoNoqoj67P7C",
  "key6": "5Jzr7DpQELQgtycaEoq8Y7Qico1fXWfoFceuuuEn3kJqEwoNcwvn3aufcBqcz4Yp3MA1LyELASrDqLYSAbiNfqMo",
  "key7": "2uCbjhRotM2JrpfKPy1ov4Cr3F7EWZ33hBRUrZb2y1Q5qLdB5XkcPnrseGwktZLVsAXLxEjLhgusKb76fYC2zqUX",
  "key8": "4uDbH4vpfuiGXwDAkePANAXzofHP2R6rXyDh279uHnMYZAznCbvnZoamjuven4M8jmMQHAZuAM2pmgUHSTkDkiSX",
  "key9": "5njr2KPrAko7gAJ1LQEa5RW8aDmMniUjyhsTgMuJz5FfPoGpow5RWoqhajrh6iQHdG3vBvFqCK9XRarqLKPsnWBL",
  "key10": "5KUFwDZ4DHcX166fbR3MQ6JEFykRRcsJQQMQg59rnY4WMTUHiJZhcaki4A6pPj3hR2GpEGHc6TbaYoxnXmTPMmPm",
  "key11": "3285UekR7F12YK3JotVQtPCbvKJSWXmy6A3QgWDrEXs71Danc1bQLwwfjdzud5fK2muUVZHY87z4iTbek1mLuZcB",
  "key12": "2KgHWb562rYL7m8czn1xnbNmb89gJbVKtLH6B7fPkb1yBTSLuTja7u2eVoWZGt5ZLpw5wknq9uRx3XNAMuVRWzHb",
  "key13": "35UWAYjY3Wkb9quYS4XNLzukegCmc8vnQbRz8AzTMFHzLy4a8HPhhod7Jn2jY4gAUJdkVGmRKYgByNH1DZgckSbK",
  "key14": "5vQaybkJxod8BWgKDUQrTttKTVLF21jQndGEH3FjS5pbgbKgrBcDXakj2gUNKsM68Mbv4EeaNNEnsj1eCzPSgMFp",
  "key15": "47m1RFXuw5Fi2uQpseA2Pf8KwzU2Zbj2m1PJTMGYTCKQV6hcUpcxwNdE7vwsTNkz1XQutkbwqTc3g9rfsxAQmhqQ",
  "key16": "2kMRT6QJnJAExP8CtReZYw67s8624pWpzBYtgvf8aJ5qapwAC9kCWWhBUxxcQEMT4CZsu69xxACWq4sGZHKi7ng3",
  "key17": "3UuW7qMktaKJtN1TYTtBEmj2sMoxsobQxwhZQJeRyv9CMfeD85azBEp3BqFMimLxMnLknMU6YSq1c7vyDk43dNRZ",
  "key18": "22mwu4t4peENXqTojnAdrXYTaHYSSh58gXmKrEaVRvjX4jD7jEAGT3AYdjwP4maw5w6CWWTz99vapXYGVXQ7Dtib",
  "key19": "3ZBvK3aszMAeRWxjiW98SuUhim7JeUXzjgofC1EaWRNYp342DDdVo8eEe34TceGNrgpWfzN3LPTRvTBxFkeBt5vL",
  "key20": "64P3HSBYJ93Lrj58PqoPu3PtSrhoyDSpyR4q33u7qN13ETJeHMRy9hHbCq884rkTRf2UnRxwvo2RqpWJyzimxycZ",
  "key21": "Dj3P8kLsHnXg4wXWJgPDSwhjEzuKvfqptoyzf8FGDC3AmaCprp6m3dRjEsptU7K9THd2Ng1AzJUrU8e84Pzuu1M",
  "key22": "3FH24Djb78grsjvXj1h9x8p5YzU5zQBnSv8HTkC1Nxdrz3D3EaRk9oPBP3z8ATJT5ACzPJdsUkUYLzbVfBH7M5WF",
  "key23": "3aS1nMvH9W9KGJQEpynrB6Fxuw5guhjc49HV5P58G19gkpcvDu3AkMnjfsQKk4MrNLwYqn4BxJgTeegiAQt9pD4M",
  "key24": "4i6odcJzLjzYYgJLpe2DzJjmpaGYfthj8LAbRBLz2UuWDnaNnQzQaaPhsQrY9z58XEh4A4m8GyVMh53c8v2BJCUW",
  "key25": "4CFDqXtyySFu6JmHtk5RNfECnPW1ugXbEei1CrUdxSc8DUgEbqg2UrcAygbbMHk57K3z7qZLUMvAFDBADvBbRRSq",
  "key26": "3UnzTic3eGw2EBahWr3rmz34N5kSWBk8A4Av9kBLasQER3P5Yj1mdULBwYvhxJzL7sqSGwASiZiHoBpdU24RLSfw",
  "key27": "5dWESLhJXzc9EzVb3X6MpUheq2TpcexQPucN6L6Bcbc37AFhjKq5R8WbKycNSm5TYQwZPX9y5hQcExjBrfKZKArR",
  "key28": "Vc17dsCEWqpxHRY8Go82wVgf51WvoF6y29NxqmDE3gpX59cXYAaBLKLD3LHhZXNAgg7yCJ4YzGyn3YPa5bBjwDt",
  "key29": "4FYxgkg3dU3yiXrpZcfbSZpHcC559qjJ77xGX7ofVfACQXedeNG1gfDT6rQiADRJJ5XWNn8yEEp5RRXbyDKhQ6DL",
  "key30": "2tCMSATbLrxcJR4vkU2z9m41nqzXNfkMZSvVGxrri3K9A1aknnTnnp9qNnJaHncRYdbd643mupbyUHkYp3yBCHaL",
  "key31": "5vTNuDLJpQ1BQBxPsX8j8BezQLLNcCWXgF2frZfeRz9afVb4UFXWRBrYpEKRZQJmjfQTFvSncUqdehapp2WNxyEd",
  "key32": "bRDSm8uzXoPERVMFJqb7ThYEvXNe95G1UQQyjGkwbjLKZfaawff59gju1xxv8Patp1W8jbd57nieNSe3mRjUo3A",
  "key33": "koKBmSuGRhJF8yWZoktfj5ZWcMjoALr4cwtoDAWip94zWySrkmVHbabR8mHXjx7qCVMZB2ZqaKd6ZkeRETRkAbH",
  "key34": "5ctTaJpkzXDmQFeo1yyyTPvwuMUzZofJvG7bB4qsoUGvh4Pu5fSJJwUs6LVV5rbdJr9LtwX1atKeK1ideRMmAL7E",
  "key35": "2QiR9Ys34rdsjuRgZP2eGr1StMxfjjheCdUTXwnm9zjjNgaC8a8Vc6YkW22ChqersYZyAtJLFfjLG1YRnhqZn77t",
  "key36": "5eKyr12ZNzb4oiT5WMsUrjgd12pLG2GJ6PSuSJxHTFcvAStmvR3oA54PRbtUS55U8js2YLfmEVV11tgw64gqcp2R",
  "key37": "2UKo6m8SdvEgS87wwbF8wPZG2G5nDvxAdE6oWtRHhPWEwKRS58VKyszoxwrV1C32tg7D5A9KaeYnZkcUSCKeeN9d",
  "key38": "uQ6zVV8oi9cyaiN9PvxzNsmFC4FGxhoxsbkjsxrdUgLesxvmNpEkBba7rCVB2rZfYANqQcu7brpVUF1LsK93qpQ",
  "key39": "3e7zKG2BhrHr4AgaM9TV1FkzMYojLoCv9um8ZuhUQDtGCFwoV2f6K2LbRBGQpoSu81NwRUxrpTiEcCsEqNpzYR4M",
  "key40": "6ivau53HeTxiyBACLxnJ7urNehC18CJcKkfdb7oshQLqbLiYa2jfcfoJvqeFTsyPQC7QVbXMfDaSeeVu7oUDroN",
  "key41": "46zGxBQCKowu6ZUdW1xX2HhQU3ipRkyvfwrzCSvTCixPMFvxjjauMAQrt6hW2nmpUmecfbLt6636UM14UfdhkdHR",
  "key42": "3r2uHD1u7BZsEFHwYpk2nSCyjf9yK3EWhtPzfP7KvYQQ6PmDaoWzyVHn3oyeAxJo1B1X2hTRERtMA3e9Rnsey5uD"
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
