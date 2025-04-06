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
    "3qt8JBNyzBUHWQ7FRvGt6zu4TGmHYAVt8AiXLkyx86b6xSGQhiVr4mr4gQQrgfq8xUi5MAUqDMUFH1yQShjZ5tRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVn55UrRR43vCBkcJ6ixp43wRQqdNPwV73PmPvgj8QZfBeMFPRMADQuw6PRaCDhDtPRyAar8SEMvEQG9bHmqcVK",
  "key1": "4oUDx6Ge2xmpyQQ8tsNZWKYiiNuwtB5TBEovoBWdovyohRUgjPUirPrCkuSHzMggSwKd1wD2ND8ZGJoP5Aj9GRPD",
  "key2": "TZWuRpCbf65xAMq14cP72N11YU66e3WsEnmYggHHFCEect6dV3GiSkN2vQVxYCtPZysLptsy6xp7X3p7mKKxMvG",
  "key3": "4N5BYkHr9QMBKP2Vi3Da7VGvBszFU5983dd8yjDMF6WmFMbbC9cPz1u1cTZaUJZ6wnYnzaKVrACN2VJwdEPVWiN5",
  "key4": "4QLoMnnLKD7x7vUT67ELE5H2PHQxLGnEjMB63W7NqZk7JTfE847UV7iP6gNq16infAv4taYe6npy1j7c7FWyzZGs",
  "key5": "4naytFCg5HBKYgdn1WcYHSWgybpqvpBtJrCwtpDmZcAeZrtLr6ubgdUorBrVGtAcY1WHv741nwmjA1yd9dnQJRV7",
  "key6": "2kRniuvycKdk2MQi4HmzSxPrXWwX8D5tJosd83868AYpWQhuMhHC6iVk5UuA4imTnHUeGvjv1yGgwwsy2V7tfXQR",
  "key7": "62Nmb3QVXZDr4HKfT7sxSfd4zuByEypyaNLb3qvSkkcVffataTKtw1LdWELzNiBDNVx5p5hAfqLxw6pBMiJuJsGJ",
  "key8": "3yHksSyVKSt5fkmqLp15eM82WuwvXhV53DN55fM4TnVWoryCsVgniQF1CrebLv9AcrbQ1guyRrFcyYUeB6foFg7u",
  "key9": "4fojEcA22waz2np6tCEuF5sPzaMPw8gFCmo5yMzWER1nkKsH1QzsLFdUJTF1s41nDChWPsEn1m2tahadZyhne74a",
  "key10": "54tUWFDfqSa1qgsmLQwkKHzfxnBokQPSzAUKzFyCQ7sANZ7UG7WPkSDwjpbcqR2sLqwsK36obGYWyQXey579So8R",
  "key11": "SduY1STDBEDArep5Lm8KNpQ1nHM7iB7VuDHLCoVk5xxpwLrqgsqdktBbyGXaJakWsh693KF36zuvcJ9U68Leexu",
  "key12": "3V3kAL8vJXN9sDnHQtwTd87CgiocznpV4xv9wbXEE7TEzF3rbb2dv5F8GjMopRcrKGd1ajHPCY85M9irmvpZgZsC",
  "key13": "5MqpBhNq6SL6B37FTVtvYkb6Lz5sep5bD7HQoGKWYsouzbZMZSFU9PVMY7hgMhn6wFmjtmoiGPrR7HYi9eVhJLVH",
  "key14": "5hnq3dUEgZabc9q8gwvb2a2UHK7NrQhSNjZUom5vjhztFa4YqPcgiPtfp4dzvdeFv1zrZhuBxUAfc6BX3LNtZexr",
  "key15": "4Hu1afVnPKrkmEDqv7c94FnUUfhoiAEzF2Z1GAZDMyTBenXWkRa4jyGXZiihtogjg6ybrP4GD12654mFAxiB1F8B",
  "key16": "129Hr6LhKH3BXvy95zGjbB9M8arYgbF4fefEDug31NhvnifFyHGUqQA1S16GrMCKgdZKRo7jZCBcgvApW6dMZten",
  "key17": "3ChfiQppT4JhPjprbWchM8b5gNffV9KV4z5hsNNEKVe2bRugvuVJxKauKAu6bmPeCjmZkZ4VpBKmC5NiK777jmDq",
  "key18": "4HDiPEAxWrWcFcyL8EB4wS6RhwFc4vXMdski2q51DYXSUiRsu1YPQJ6t1QjuGWSM7b1uEfT5PfrHwc34bJZRjFVa",
  "key19": "rNE2TR6WBvsCF1kepKQYnGNYwTwBkshVfgdH4SNN9hHoasLpP62nCtf6qE6kJLYe7kpFeQcF4HbWyqUkeCauYmW",
  "key20": "2YuYesTjWKjEDae3eDnxxTWueEm3RPBZ3C9GcQh4MfwAXXCV2aPsSarQuXeWHjY14dK9XDmkivgSYHGi8CQSwEks",
  "key21": "2NYfUzMs8TyuECAyHKmnthAtWChH7Vr3kWWxwYgjN4ytbcb4cGyrn4yKvic16W8KZAmsiKn7nejHpAdcd3aV2PoY",
  "key22": "2rWNy3gGL9kG6XM2b4rdusP28dv3mv7DUU7BLRtZYTX9m1jFWy79Nmj63iCe8Sh83T6C62Hyhpd8Rjvj6fNGf2Am",
  "key23": "5F9KSM4gspB3cyhaQERS8KLHJq8dmTwgQWhAw1qjgoX7VdaEMb5Tb62VZ3ueFPDucCTKvJQh9NZWqnqRki2xAfMJ",
  "key24": "4RmnVp2kznd2b92pWQoq7XvWcF7kPYPyiTPp4TLnvDHXqBizjDMYN5v4MTF8nywSkABaH9Aodq7NXaa3tsDbxsWy",
  "key25": "3LAhQHtrMnoFUn5ZZfHrMKNgP4vpLa2gQvxBR5oH5EFWaETxcWzRkazFPr9hDXnF4LFYsL3iGUxqRgtoZdboaQb8",
  "key26": "U7PFe1kiaSWDjgTZugdjydaXYCZAxNAqLHbv2V9QbA44jUhqmVKXY15f5CacywFG2JeWxw3NAGG4GjHrkGhhDsF",
  "key27": "42zqSdQNw3wBtDuzWkL74TL47utiyjCemPjJE3wZ7ybTp6h4qu1DYo8HBEEGzkeAiF3qcsVRPzkdkH8znf9ZHY2H",
  "key28": "Wy1xNtjHgJnLg1gHBCyU5jvbEwjVQAoBo6hLb5S7V2WBX4qGqqF352ZT7YrXUurqgQfSd8NSCovqxsPt6j1N5mL",
  "key29": "2Qm8esSN8BwkwdWQb6bn81wu9xwzS8a9LjTCQ4CEm5a7hUN4LPror8rSc1EPyk4rrRkRfGatmZvypmxNnne2MRMi",
  "key30": "4ia838BZqAexK8SYhBFrm3DxMVVVpuv5FWLu94UonwCfWBZJ8iUXLPuFV3Nd2DqQiZveVUjvG56o5VfTcEeGm532",
  "key31": "4ytPSaAJ9CdQdELohbcsdYmNFwt4nGJnPYnLFmVC33yRGf3VdfCofmQUAPByW5khcLesZiYWyzURWMnueztoED8U",
  "key32": "3hh56Kqc4zxASYV13pDau72TqDBrJkhiCZaDWUEGbB6DmA7X2hVQteJkQ7u15A5djfQ2tihDPLmKw2jxqDegiTSf",
  "key33": "sFVgsiUJHDiLGsMsXGZp9RJ9kwykVhQMUMXU6tjVaqumv1Xusts4cDreg2o2ZkJAagVqxr7tRcK3S6Rek2iDcpX",
  "key34": "4WU4XAPzeDo3Aa7S5eT1QE4bLeRv2ubrYXGFjeSonQFpF6Dcikpm9VPBtk3ZQNJyKjf8jrmtHFYvcT34nWiHF8QG",
  "key35": "4aw2eVCiSCY6X1EcrWqtLNY6QbhC7U9jjYr9wmXcuPgmBrcieVpCtiW2aUiqTFtZLehJWKEnSyNnJ64udQhx3vNK",
  "key36": "5TqFZcEDRVy8KnKb19zqw5MLP84BKGABzKTZfUKiYjbzewH96hbWPBU5v3cUTGT9eSZA7U3usDaKGni73LD2FfrC",
  "key37": "4QYE9YDRuXnzgub8KKuhKEWGXg9zn8cbq1nvFz3DPKx3q6VTdLAFHZCHJLcEk1QLopL5rSG3bvhH24A3ypnCCyEf",
  "key38": "inY7ifcws2V14mhiwsRJjyK9BDD45YyYfdXnB3PxRr6DLMSoLFLLSUxhfWntJ23DTJfQ2iAk1FGAJf3q9D4KCEE",
  "key39": "2nW8VKBaS6KLsd3WUKWX9v5KdJc9gt2hpoV6s1B9RvueoCchYG9RsDcteYsS5sGd6iL4CHYr7g3e9GY91FcKxj6B",
  "key40": "4a2e1vQ7Q9W5HsAGQsMRd3RZSWcrUHodQLFGf3qjv7VBUtC72SHrvky6Fnu9x5iLG3JGySNde1jhUXNftpywC3Ng",
  "key41": "iNWs7J1SyEaKfojbrjyfgkmAsy8iwtXb5PwhPQsEjXo5NQEWNqVWxyk9HSD8tv1QQVbdN7X8ge3mAQDNZjc4MhN",
  "key42": "3WDBVNfh26ornqiJKsduBF6zjnRdF87HmDB5qk1hJvcDr4RAJ2b7hQfZBkHKTk3pQWyxEVCGm1UMxgJVznyiMpCH",
  "key43": "R7LFnspRwR8yRY9s4KYYjBxEWFHfDu7BtEvcrtJSw7FNgVWgaHCoCG2CHwhmnNaQG7yfS7NW9wWNEPYXY2Tcfg9",
  "key44": "SSN5cw349kxigR6BATDKEvmGKePJkjFxm6PXVGXxe4W6qP3S35ko8p7Q5PtWqwzeWziuGcPNZ5pnNwvMzB4fyXs",
  "key45": "3qyNuMwfyj2ZjhfrC6HdSARviYF2Jvy96M7tmivN6vpHEce7EgDNyUmR2DDYLDmQCFMoxevNL3cSjBYYu87T78Mr",
  "key46": "47xVnRhjYRHvLAWzUzdG3x4zVjpBCPC6A3s8CvaZGGtb5NgrZY6asVVfQQG3YHH2JsVMoGP69sctLscWTSjCZvm1",
  "key47": "51Pd9G3tbJPDbrN6y5Tb4fWJ7Lt6LJA2J1jG3b44BbojiDBLa8YBx7JA9rRfDQKFp676WsKNT8oLnmaAh5JRuj5y"
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
