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
    "3PiKPkgKLcUVgYdgLauYhUdRGeEKEEmEhQBgXAN7FggVBCSGVussggc7HG5MhU7bFG38XKpGrxafAN6grzU7B1CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwm45kumJXJGusy77ahicBbHwB5cBvNREH6HpPEfxgiuzQdG3PqLDknGodoC8QmuJVgFnm1xpzVGSxXgkpjrLya",
  "key1": "2bb9WZpAM48eKF6muJyA1qf3fh3zaReenmirQD3C5pNx3zfQEpzUbE3HbAmjdQU8JJrKFnxYdYXj8SrsyHGuki3t",
  "key2": "4CAnzLzZRgt95SkbmGXuEP3JTvKZmwnkQrumkmg4tTqtjGpwNTSNhPsrFDcQ4TRrkgnt7X4fWa26MrZXAV3fJ6B1",
  "key3": "fCJH3opSwy4AAz98kHznDZyVF1P45TSSB4dW1EHfZeq1FTud8utvGzhyQjYaCrjtzJn7FCfGsyVGauh55ct2vA7",
  "key4": "2KNrxVVXvad93d5CkbB4fd84VQDNitYqZPbHKw74ZSFRmdadnvJ65ifgK74Mw7Vdk8anzgRKT8VaiJAya9jZ64wP",
  "key5": "4E3muVSYDCdJggVBZu1wNfZCPS56VygG1WT62G54GeN7n1mSF7ZjD6CRcGQNHpFCzQGM4Q6yYNzhM6qXq2WrgsEY",
  "key6": "aig7u1ngGCpHN5XQ1NSi7ByRRgsvjXCyCXr6n3manz5ZTS6iVVPpYgPiPhciqmcTGLhgCFEEivSj3TtCEr6gDv4",
  "key7": "2pjj1qho2asAvKjqAgt8F4DVKaFcbe4NjSWe1sM4BHcTvEyo34Q9dNR4wE4tgiiU3FSMovNswEBzeQox3Tmz6bzK",
  "key8": "483JJJ6NsvrCCvq2zmZRkiL5a8McwxAf5zmDd1LFeGoMotzxSNpKddDZp6cRiNY5iomvYJnUc9rC5jVBtVcPJKjB",
  "key9": "67UYdBhh8VXyJyZ9FyswidhdzjC35rASeYVkbPkZZyQ6szLiocQBLY4sxkyEC91Hp8bR4fM88QYLv68sKokSveXT",
  "key10": "4fTE6ttbrmNqaT6yzw6iNkegno9fN3qb82phMZvc6wmW7KVz1k6kmXxVXkzqG88poCiw4FbFnxW7rHnusKvYmJmm",
  "key11": "66EAu9h1nbjWn1okjDP3H6QWgV3ue4BAkwbkEF8FnhmNaWinz62DxJrvSQBXByioajKwDF2fKZ9SPee3woGxv8V6",
  "key12": "2fYCESNVj1UBzd68Czox3NYmfnCBDovbUrDkfb95FS5wpDQctEatjATP5diV3hoeFu6uyYBNxTdQjSZ6nLV5HVSw",
  "key13": "3KxKKxzWatng5HNRLrJnwh7Lce5zUrNqqMKvDm853As96ACh2uMNZu16e1fgHrkkrNoRYcEhpj5yYMDt1QkowJkp",
  "key14": "3uMbhSAvkHLNczxJCTY5FbHFxiZhXZecFVaGveqL7RLnzSTDyCcqGijMSj37PRr5w75Z6n9iYZYDL2XYJczv34e9",
  "key15": "azTD5fySR2Avb1XRsp9RbErrssC3amqFH93rsfBufkmtRPJtPbBAws1u74SS1KTWmBUi1mvTVkrtL18Ugn5aLFd",
  "key16": "NWD3M4tjWXdmBZFaPiSbLxjC4viLVwhmbEgPA4nbw8M2ZJNERnTFiGjjPpshqKNbD5J7yCkx1GcWJsNU6dDrLzz",
  "key17": "3QZ9wv5dWGUosnPDQdQ59NmGQPe8irT44tAcKDGb53VfN7a1ZVkCiyvquTL9krZ6yjRZPgzTZocooQsY3czUypqS",
  "key18": "2AagrWMAWDYMWG5sZh167aePKfCtE3Z17zR8wey3Pmhje9FCBEY9ZgVWLmezZeTKBXFPQ7M3bAdYkFwnZPnQ5okY",
  "key19": "4UPBdkxeNsJEPFSqFVRQ8H6dtJ3fuYCadDK7zwfixextEL6ibPFkD1uTWHn8TK29DEmkKFDoRi1U1RsUD3cZyr43",
  "key20": "21LAAB6ZKshUE6cdWMFfqx5pQ3Fe5yYw4fuyGKFve7uFWmKAwpSYQ2QeUDaQp1ToPGSGJ8c4henJ3nFM2SXjKJcC",
  "key21": "4W2AsHEUdTawQ3EWzZ2TVqSKD35B3LWuddQKS7fzH4fAEzQGA62heu5tXzBmC3Jx3Wr43DYMrBKXCQyiqo91myqx",
  "key22": "4PpRvNyDro63GebEBPXQVUBSNsSpmkBT6qsqBD9Gg3g4ny7YYMKEzGXUYXtBDLf9yUeAH7nGSLTHeTEYuav5ZqHN",
  "key23": "4ip2NVhv6QGZ3QK6WbZibsgxWQBvvUgcdBbpHqFdFQJRWCZ5prztnKf9cXWqDhrhNRgaezrSoaBRJc9knGHsWzGS",
  "key24": "yACGvwFmw552oT3fauGqyd3HWnt2YKksth81EFZ5oehVKYwUL6btsFEHyKfUceqazsAUakSEMiwjPDK65Bbofxm",
  "key25": "5tnsPJhgR7nz66h2jbr3EsGr8NzMkZXSmvHVDLUQZMPkkEm9WrcRhMDf9GnDrwyRzMbg6yNRNL8CKdjS4597p2F2",
  "key26": "5KBNj7eGbdLqUJ7BKgn9n6QCFMR96s4RF5qaxzmY1zRrxZHEj75sDimGY5dD3o3s4h3pGkKURxE8SG7dB33XuixF",
  "key27": "42yo2n7opUGF2AxbEQt47uMyNpA45mw4SFq7rsKqK9Jrbj1HZ1rbVDoLHSiBKuTDV9LDJ5AWzE4xmnvpVE6S2rLi",
  "key28": "4DCh8DgD6qH9gYk82CAKbFxb4FXfGt7vYS7fdbQJ6BbTAAPgsdkfw2NPsdJxiXapTBbJeTYLMcW3VuWnxXyg2MpF",
  "key29": "61PxfodVUQWBeGGXuEW8pRGVxXvWVp5mJyKfSoaK2EASrnSN7EyZtmfQgyURGueKdHaokJo2vWNwiKYtpDSupHd7",
  "key30": "BP3H4hr26ac3CyPKrhE8JsjEBBjeEUWugQYaNkapEVFcLigvvvNM1QdXQ4Xuy6NWikbkENiafjztJcVhnjQt99a",
  "key31": "2GNaiitwMPYfpPE9otT9C6rNMyCUbSU8tzJVVwHNQ2qDqyN4VD6XNFLNLCtf6LmVRgo2kGjrfvFYZjJUrACzp4M4",
  "key32": "4DCuvR2mUTDzHeHHkS5mpuQY41Sz3up7ViQTBAGyKV6124UrQDfmWJGZYSggHVLRv9vHKxG2FASBo3XWpsywxLfe",
  "key33": "5tmcNQKm2sHvVK2j74sXk5QQKa1rstYGatBrJrNvP1pk18HzMJtrZXW6xh3dzo8TXwyoWeMtQo9uhHwBcNevZ9JT",
  "key34": "55Zq2JZayrzUvvCK5aedpK6Uf9zBKzFoxybiyAzU2kKGEhZd721sEgY7nxFPwAqdCXYtuc6ge9UZwKtLK5CpTgXB",
  "key35": "au2hT8yRwExUN9Da5mAmz9Y67Xj6Er3rvYBEoK86cPwjVQPKWEuWrQek3w2WsWhrXJn1ehr2638vJ6hSFM5apEb",
  "key36": "29ydjqEreaxhvLKyAqE4q4bh55117mwwqy768FAnu198a3PqfrxeBXVYysv2YHnVBEdF9CqD9Y9wqWrsUqYWqhyG",
  "key37": "4sAiyJf1RvwQT1MLZVmowrv9Nepr2ojTjzCVAxSnQSF9L58ZE2XFrSFq4KmKfJkjgED3VsMEm9nV1VSoXkHiN9S9",
  "key38": "4HeG9rjbJ5Two8irzHnhPVY5XgoopJfhtPdfoCzrmGnEWPkav6CXnwhDAoXEtQAKmNkKMyDqMeh4bsjZd5smDSHG",
  "key39": "GhgJ7a9ZjwQGihjSuviPYcqbULzhh73LrZyaZvLvpFMpguqr1C6tEdVCHNSM1CCyD4SWxpr85KuxkNSjHffuZMp",
  "key40": "E1qyiXTeqSTW47K3hUiUcnqZTmRBZAx93M6oLLa8H3QX3babtKpTHRfWR8seqCyaxH8QcDgPxgZrKzauiBiSrTg",
  "key41": "5asGQjgtVFJeaGwnGusenJJvxV4N9ziPHAWz5YYWsRej9wZvceHvbXH3WkZrYYUqENnyvWSa9mVd7iW2HLEb3yts"
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
