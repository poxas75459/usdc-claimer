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
    "3o8TMBsBXRk39ZH1HdJ4ukeYw3kk6jVvGZ7DrJTh73yYtmz9kfLGrAmDxMB6A3if87GcJS7LVkCHbKJm6HpGwRAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvzPeTf8RScSyU5qjq9h6F12Qf94wqW9uUgHAGR7xbArXTdei7yLjidbwGsndgCSsXyGkGEUiZjhigW17j6Gc8W",
  "key1": "5y4TSXtAw2GPM5zwG4DbxnXz5zwuNeF2Ww97nqMmwpcKz3fJu2B9yzQ4xoaWvptG5RxgTacFvS1ZSN6MikMkjFhD",
  "key2": "4wTbCZKjzH1D8hNPATYmghhgovPLJNtLUaBLcGh8tfFxh32PPnLwMwrQUXKpLreKYpq2zguSN7gxeY6eSvXPYYWW",
  "key3": "GoNCL162VMZwtieS9Y5BFggawcSvW5WWdWg8Lo8sCDh4n7ZHiVQ3uMw58wWJBg3mSMvdV9rJYDFBtBPvWnFeBvX",
  "key4": "388y9JyQ5zuDDEaeoMwUapTn5dR41H5GaVACz9vFNMcCQDJfo33iphESFWoTLFqR84wXYN6Gs6dZ1maagGwgB9Sj",
  "key5": "5GCsdcwsqyvwCgw466GXvo7dWtGSQbjtU2rs4vd1upR9vZGRkk5QpiXdJKBuzuefrLu2iV8SMHxwwqtPy3VkVPjt",
  "key6": "4jiUmfJbAQdxDi8iCcr2JiJZWjFqna6cNyMTBzCsE4iGG7EbTCpMAMXbTAsp5h6MKZXj8uP1iaJpE7NFbiNTdfcM",
  "key7": "3Rw6BUSp5Qg8JhNSHuqSxUg2ZvzGnYUWj85pMguShVijEBt2zt5zJ7zTiE3kchP2fMXK8fmvZvqAdGe1YLmthcmM",
  "key8": "4kAR55eYU16XvM7jUWFpuuNbPsiKFqCPkQgyb9DdKwL7Cmu3rnKJi5PZdW4qQVAAkx36daJfVwZ4inGRh92g7dsW",
  "key9": "22mxdRasF2UEb9kA7rYypK9L9EhZKVMajtXeizuY1xx7fD1HkR8CbbYfsFwepiaDhchcy7EihsEyoyMQDAZdo9wE",
  "key10": "wyZi5eXthhZZvpHxWDc8aCP5QnKNSuXhSeAAFnrE6XBD8NgbTbSJLucaYJDPhzyZJVqNz6hG3ySE2jX3inSR5nP",
  "key11": "4cQf8YyvXAgUJmngLCjbBXDjET31EBeKBfUQqXJh9oWynxwoyXF52XU1NRi3k1qvJ3s5ieRoooCGjtMfkyKknYVM",
  "key12": "4mJusAuEARFbpe2S3K7GPfxGvhQ3xVkrBAUexa3nk9dHAEdWXMQN5ZYrJjS4614u9awhw7tmW8SN8W669gMsMKoP",
  "key13": "4fxe5Kc9CHv46GS3AEVtpNvmUaixkU9wAwa5EaPKtSbvMrukWUxh7Qg6W5GqKFV5zoW3vB1wuwx5PbQg1geD3xp2",
  "key14": "5SXCLcEVgJH2m8U4MtETyLcBfNwdk92NmhG3txQgnSDQ77zLrrJkaec5HkGyEkLb9JgjF8eYpfxBZbtqgmGfaEHw",
  "key15": "2V6b1sQYzRm71WhCco1AmuBeZg6g8tTE5pYQ8Y4RqbhX6nCcA2sitqtgxqwBtYdMseCbbJEKuPBpjsKYPibBs35g",
  "key16": "2gstUY66qwz2Y8iZS6PgyK53S9LP87YHNuPjaT6jEKjzUt62GeC6ddQVLcJKDRWUiYcXKMqcLesMrQEXLSKcg7kk",
  "key17": "5T5CmNyw8YXyttAoXM51bEfm3a6KGQVcCJEmQdXQ6rHCUMn7YjfH1fKnUxSTHsncnvXyYvWTmMBG6yyAAgGxy218",
  "key18": "5cE5bBomvYVmb4CpcRwJeVQS5LUPiYwSL1Hwv5QCmAencwxmK1cpkcXWTcxhUPw5Zjv6LJfx6XbpSsxvhJtaQfQM",
  "key19": "2pVFCCN9xTfZom3tgYptmiypVYJp15fhEFWDWhS3F7gsjgmQobgmdNMg3Z932G9WoLkhwFnLuQuPAzMDwHUUZWVL",
  "key20": "4rry5TPcCDZ8Puisj2H1LjSP3Jr5KdQReGa5y2kZJ26ANHyD9wsfYc2ReWgcSgacsyPhS98SBoyz7ncC3oFwGiVm",
  "key21": "qptPFH962TboKaWFEMLkQfQHfy7roYjzTvBk4teLvgUedrT9ckNqFuJmyqSYnPWMrxk42764ZHC6DLeRJvaxLqT",
  "key22": "3b46PN3C6kyA2kCTmu6asMjuJG6PjKtJncUmuL4CyiQG3dnLV6NKBJoceEYnZYy7VQGF5rt5aw4AUHUcYAzXaqLa",
  "key23": "5uX8nQAooRvmRGkamZgT5cFbETE5ENHogZfDecutvsVxVX6yMEsb5NKG747kn6AChMGsYkmDyBXdRoXaMwhuKQNh",
  "key24": "73sgTETq3eRspqDgtFs6QCHATGov4N1QuKTcsFLPynRWtk1UH15BFoNszorMbT7KsymKcXcPif1einke5G6BNgb",
  "key25": "3ZQdx5UpiH13Rj7EzGAtEMYLTFiYkJhNqgwuyy9cABEMkGiBNMuLgHSzcqMFUx311atNszPXFDVYSaVXq5tC5HqX",
  "key26": "2C9iTt1tjKgLWDavYEkZcaV5dDB4cjqjLW3LdcKKt8tC9nK1owCMF6U9CwUgBsQ4crWV21b9FC4g54WbWdcG6UQJ",
  "key27": "2yabQnGaqxDmVYpVrTGrQ2DiYH9eRKfnWGeGGQYK1cCzh3Q1HoUQJtmy7htzqCnCdKFQBn81eSar7mqXWwsxaKXe",
  "key28": "2BsnV8wosB5GGnEViztwafHWeaZWWdS6KrfFy7FvXK6keo6y2SJc6hdT5ZakMYBUwAmNV1kzBQnED9PZ9aMz2jeG",
  "key29": "3yEfBpzhopjHMeta6De1e4YLZCxL8M4UMCfTbUat8BC8ab6mULGtKBw7gD2CerjzsEMW1LZsw8Ttcke1gQQzs6bC",
  "key30": "5pTiusxNhqHK5gMZ9zWyz7dGtep7NSrbG5oGXMc1318Tva9Ah7wxTBuenBxjtPrnGMgYyd2x2KhdCZDpV4sE3hnW",
  "key31": "3idLJjni6uTB5Qm4yjB89RudJwkGFC46ezGPipZqHLcWa4QqCTsKc2JBYG9YUGrSgUufy89M97GRC2BCbKVQz6Uq",
  "key32": "4sEGBq8KbaPdB2KyzXGmjTpseiMJa8EnGjE2VtPx4Pkqa91s7bgj4Sj496Wz3R1jDJzQcM8oRxE1cUMEUWpA8Wnu",
  "key33": "oR5ghUjyH3sH87524BQHm1aUN82EkuvQfQ6i2scxuUbLfuS3F5eitKFaGHQ8XEw8nonmxcffoes9e4CRnKpH8dZ",
  "key34": "8ZvvYWdNt5K15DZQr9ymfotUaZyfUr8YvoGULNHFbgVBfeKezLwaK6jVLmM33DSRQxN8TdFYB5PNqKT4wcRcVTe",
  "key35": "2aarrXGEJ2xYFmCFGtCtj3qL1WvZnaW4uc7CqUzcdFtcTzstUQnpApT3juzRi5HiSvbx4YRQkFTGcExP4wzv1yRR",
  "key36": "2KJ517KoY2zXqtom5zdoEhipWVDM7SyV4zoQsLtjWkk9nBQCabWTMLvTVhsxaPTEt6tygYHz4aRZoUGpgWhFMSCL",
  "key37": "3LPRerdudsptc2w7XHAhBNkniNpG6MVqnYrfaMgWPBkqoEB6uEa8J7GF3kRdoikNpd3MRArrWiah5SYGCVdaF5XX",
  "key38": "4BBKbwew5L1oZqLLjSm3JsyvGZTEjSv2G35dGi6wf1fSPTr3hAjVHgYfZLtGEtg84swnitWynUWYD1sFuFKwrdSB",
  "key39": "5Hsy2zxBqp8Ft557eSXCis7ky1MxNxexmjWqZadgxHvfZeoLG34LVsAFeAXSYinHzV3tqZ3Mf9otXVRUUv3TS358",
  "key40": "5waenkZ1JTL7dKXhv21LFQwdER5EjDq27Cy4yfEzWncuHbthnBTNJkkeuh9Sycjbt6tsTib77rPyhyL8GwE9muTS",
  "key41": "5Z46zqojLWYWnfqqp4zCJTHhMjsAhRU5ZECmi94HcWrqR8Rkdzz98r2YAMVEryqUoN8semoriBT1iez8P48ELT41",
  "key42": "2icUdEAeS4qZbV9vnvVWGrZetHjPtBbMe4ACR2TD6xDGT2uMFK8UngPfqEDRTLcUtGgTQ3G4YsVwWw25qAxXw3ki"
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
