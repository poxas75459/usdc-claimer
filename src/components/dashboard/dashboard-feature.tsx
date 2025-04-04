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
    "4vAk2HViPE8icLZuXfPTn7kpMhsc4y43MnGXB7NwHjqMqfKd43WH44SajBQKDdT7ujQB5ejfzMNgamqAppfAsn8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65D9Spn3FvGD1srgz3DBjQv5Z2qKvT6qAtfdfX8rbqrH7Qjch99nnfDnKo2R6yX2KCFc3cuBTvgnKxbdV5dyRi5k",
  "key1": "3fQm1Qbpcbbz2BvZ6Y51XCEmSvR7sCoXR1MfgpBRPabwGJjXP59CJ3ieU87HMy7DYduYVbAMy3Ut7WmhSRww94Uq",
  "key2": "2f2RkVVyVsFhPrJxLPvsk42qUVAnugYbQ6etdbT2NV56SPXvAt9bUdQ19W8mpSmUNTNdw9YQGw3CmCHauVsYRr6y",
  "key3": "3fhLPeE4NyiF1FQhPSmCd5x5o7uJyBcRTymr2228yx1pUQoevTTRwJH4Bn7F1XUrdLCSRLCyQtWxmsMrVEZetHbA",
  "key4": "4EBhdUQtxdq8iFe1SDmn6Mdh7ThTKWwR38rFotNAkLGiMKQnGqkwJUx7RUYA62c5wKPvX7ydxjkUgjjjP5q753Qp",
  "key5": "4UNbLK7SL6DrNVC7sQb64JYQJNySeiYTL98TPjUniWFyz33R9H9197ehFST1pFmc4qTJNF989aWrZHU9WgUTZn5",
  "key6": "3EfU4pr244vfAfk58Ugc9Ef6Jw8vfK7RvPU5UHD5JswbzT5nKvHYwGDu173fmYooRKj9ufMVVvF9sw5FqAz5WHcC",
  "key7": "2NR6Z8EDPgVt1zUgiSAzSYv2rAHmoYWHjk9ysxBuub9LNRrAsE5qLZDLpeWAT9s6kQFhVDHidYYbGneeevjLAJwd",
  "key8": "3ZXzqEULc4prN4RAZCaRntaKwJNiSogjZQMn8d7LwEwu8LMarA2c2eKWzYB61D8p92RSxo7ZaVrn8XBijmdfWFT8",
  "key9": "3W6aLktT2rjCTdTMLSGNSGCGx6bd2t6DcPfQnukfQtt7G3fyFLk9CQVuk7ztWj5FQ4NQSM1SDfZL3EJQjPvueT3s",
  "key10": "2moYJx3DCstTRnZUYjWffpt8uq4oa9Dsvbt2Q2SCCAGMrv9Ku1AeZzS5MwgefgmS2QkhK31LvM2UYpiMKB6wsn3t",
  "key11": "5cLj9e6TZmpmNze9yucSZXWjtYTDg6sfVwzntGSW8MWopzwiz7NXgSq7REipETrDYKBFwMskzHdB6EGq7zMg3mU3",
  "key12": "2gD43idgydowwLoL1RDjGtbgY7rDipkTca8tq5cMCrAMjRnTcYJsNhVwkXDCj9SSCnxJ2ZNoG7WKk2b4qtWuxfE1",
  "key13": "5z8mJ9FUHa8NgbCWjxnoJ5cQ6UAHrk2tiYM2NkYNMnnVLAawmhcz5pWPY8Dj94ZH6B118S5LpSCQvcNCXwFsVsCH",
  "key14": "4nVjikiVUrwg9HrbVFjvs7LxMd4xTNduUZ1UGgkNRFqsFYfeAMCipR4dCAFbFWfgBQsMGyHPiYjMiZM33gGfoMVF",
  "key15": "3PDvpgiSGQ95HB8Z6fkVupUtL9ZEDxij6HkL3YVgDkbyyEE9y1Dv9DjBiixXr5sqTud3mJLkUeHMxc1caPQJhoFD",
  "key16": "38KkpRyFTJAwavJB7PcDraqH6rQQ66GMfSnvjnKkNYMhLey63qmzPxR8RM4sVyy85X19yrpJ43FrrKhtxgDprJcW",
  "key17": "3wfxuxysoQABYVEa1E8rg2fwFswzpkGraBdjAspYtLhF1A6G9vfnbU4rUqCQp2GDE9UKktgUmDCqeGvMNo13Dpnq",
  "key18": "51kXv9HLzAnqEqEd8w7Y6RRusvLwdmhMFPUKqdLgCLXVb3c9j6xryaf5nyk1n4jc5Y8h2b19zjThjhuML3dkuyRY",
  "key19": "4j8TsiRfL8B47EZArVRL9WuXzuyk7McuQXzsyjjrhDNvw4QwxMLGuFKWmyjTmNry4e39iss2Jisxo23AzFQkAVjb",
  "key20": "4HnN6DW2ehoC75hsmB2XQPwedRjhK1FW5QwSBJVwqBCkREoPyE8GKzimTz2WYJwfkP4XCYsrysP6vfQq6dL6Fkk",
  "key21": "5gKq4sXFoVQDqrieKoiYiiKb5EsTwiHs6h4jhEr6dJhZcZuucrUZ1H9LLoK4a36qeXgNsqgYrPKLQ8SzEts5LHjn",
  "key22": "2vKqkhLSg3Qaw22YXJjdUDHGA6UYzhzp8aRiSpcrrnLn4AWPbtGiJbu2ZHs2Wrq3sjyGvVj4PT6f4ggvXqGrpSup",
  "key23": "3sf8LC9PEAmj5C4d3QgWT4FMJwkdFgbPW3opKz3LH9acsJqFu6Y6yQN7CPoqEwPF69uj7VvejsxxeauBVXsQTdWB",
  "key24": "2i3LRPraCkFhxy7nst8JE9yssZ1diccfYNhuauUNi2gxxH94XR2VpuaAQFRdtoPNM4EYTnVMt5VP7emE24xXg94q",
  "key25": "AzzfewCV5CaYP36FnKgDUqYAskYhwFhFbhaJzNeEHxGS9zA7yzxRfb55BvnkvcPXe7iNVe7zFEadzXaACQnUN6d",
  "key26": "45E49fNaKZ84wNzJPNUxjsm5c4FPKidAzqK2gpHvCJE57vR72ozphUmkhWhrU89KqCeTmYg4z2rJaEkiUq7VuQBT",
  "key27": "22qUCcCnw9o81F9godtcpmF3mFwexMFoAr2RbryhZsmpLpCNJcZKQVEYg2bryuGtuTySjkT5m71tjCRUgo4Usy6Q",
  "key28": "5Gmu4WhupCFrdqaZ6hjyqjpfNYiPouTh3VwfLQSj57GLEm6rh8seS4V9NF8qHjxTyZG3WcxQ5gWQefZqRE3Pqukj",
  "key29": "3FBzA1afHjubYGb8PghAAZdDZpR9uCfU5WcK6TAuAYdAWMDWQd3H55FgJNLgC49TyLyjzhrZVCMDJ7MR5u96Mie5",
  "key30": "23ohSCZhQXg3yD9juKtkbxi8YU4szat4Z2o8nPgZcMEcEfbAkduXacmirCq14CcYKHVr31mHZFf3dsNy5jh5b7H7",
  "key31": "52vqgbprQdxzXoPPisH9pAfJKtW2kBG1UChfTnVhEG6Eivn9KvKMyXDNbAQNgTDfpmJziiYChrrXxPUpPvKWCjpv",
  "key32": "2g8y4Lv11yaC5JENVHHhDMzLqfruHdv5tJe6dQnW8i3bHN9vt6uUajkiL4k2aVtQhkxDdLjfPnF3kjwt4VCgP2ZV",
  "key33": "2f4V5ACmicHHdFogfTn77ke6XikTuShnyv6SjQ9SkEacSyH4MgdsfvvSysGT8ro6gqWuUKQ5ucmzVKV44GPqjnU2",
  "key34": "5qKJh4MASuwHycXMDLGunA3zvUiWN364W9qfBrhpzmZ9waJ1yb4upoKgCBPEdq4koFSWopK8k36nWmERn2RUoG99",
  "key35": "2fsbvg32a3if7nvo3MgGjp7Kjrd5tLXWdoTVdnRoi7Kj4qJQddHvygueWLFaHzRQPTdDXWLkDTta3Aqu1Vv93azP",
  "key36": "4otQpjevHz8fwoCBwax9uiAQZsJWKJaPvzNGZ1ZtthLwJ1abkULE9juyWhdhWZowtzvjQiZwjkMdZnqNWK6FEdzK",
  "key37": "Z1wEUszXZZAVUjJanU6LGcS1C9fd6Abn3amxux4TkHuDnnaMk8kkiVDd2sDgKZsedgpGPX81KP98wPjaZwtrRUc",
  "key38": "2C3giryJGuxTBZbJ54HHvrmp1JU1pBaKjh69NkQXHHvDfoL1wvdRPqhxXZNrgZsvk77h3J14wyEzTj37Sm25qXZq",
  "key39": "5j2joicuFCU4EDn2CDBvkzcF1A61VADF24cgmqAiGvGwyKhjE8yzEfDtdhZTcJZT32J3pCJxzq2EZKQuzmaALDLZ",
  "key40": "4J6Pwr5q3Qo6Qn5jszEbBjbWTnG93MDVoWUeRdXkW8re7cbF6YQXvP73vdoWiygcXZAdxaGSNC5oLPSxoVF7SzY6",
  "key41": "eRfT6uVGrBGTx1XqcvgJ37D5enDn6ypnXsrNqDmdft1VzCJLPFjxzPRmUs7pXb3FFMGCbcd8uVJ7hLVag2Quo81"
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
