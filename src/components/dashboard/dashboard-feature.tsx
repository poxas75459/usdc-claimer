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
    "2bKB6fsMM7MCNCvNRrLJ9M7osJ9BqiP7FKjLqCqnea5beDkMRTRA7abUJsLRsn8A2MC729RDar1qPf7tgNdXcaoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTLQMEpuc3V5Zs5Ux3GzBE7yofw9i3bXWxXRoSugWGxQ9q1443hsFqWjgawXFXFovxyeRNtjW66wiGkoG3Geat8",
  "key1": "678ziaFbXuac2VAUqVAKC4K1QCwzWbx2NnAZKBfLtEo2dvCPTZZ8A4hzBpcf4DecDZ8WzzgKZuvHUfWtERsk1V3H",
  "key2": "2CJFpNufutU6nUAyTPTuQzSCA6789LSGMUHtXdvJq84UGD2SYodchmSQ8btwWDhJEY4B4cgHqVXWzouRaTvNpYgp",
  "key3": "5XhHBewE98cKDSq35E38zY8VzrSFMzrsYd6vmg91hLsCnpx5Qvk6fyPvp2znpjfrCk7gWkXDNYg9fo8hXL5tXrBB",
  "key4": "2YiVgNDzYTZBD17bqxHEgZcJpWHRFAWG8fbbPY9SjmuKw9h5Wb88rp4Tixs2ZLWpNyDcnAXSt5zj3KkXzFdM9czN",
  "key5": "4933m86Rgx8hCsfiTd7PSrVHqwMZfDArXW6Todg29qJN5ZZMKrGXkSLRfmfrMfDv1dMBeY8StZ1pyAUDtfMxNEp4",
  "key6": "3mq21JLm5Pc6gXr3kaiC8mLuj6zAK31mNSbfGrWEesKfVsPvdn3mPwzwZtcN5M8K9EPjd8Ry4XEiAntAGgKMVCgo",
  "key7": "41RXHdRMXCVF2gSy3t9oUPt4CWQuCW6fxJfPA5DGHSaLicDAujt9iFSUncKUg4P6GSFJcmSR3UyGwrMELQwX1QwK",
  "key8": "5BEeZTGAGkByFU7Xb8UwnwEyBUNuhq3Yv6sFXptrgKytBmHsQxfJeDVWzTv3evHS4Z6SCrxixSkG95zJtHRBcT8f",
  "key9": "63yjyKkisMDmyY6YZBkrwzK6CStFnC9BmjEbzyA3zLUrSZ5etsoho1ZR9ubtZqisaet23A5xDAu3i6GCjgX1Bdta",
  "key10": "4uV2p2GZzBWJjfnLrPeS9pqEVs37R5ngqa6jMqAtEuaV6KtSD1PAhKv94UUkSdTXMypK9NzF1hsCphDVZTQPvsWt",
  "key11": "5GJrCsZpefeyiirUq55fbmFu3YfXFPfjuQwRAhGWjVfiQQGj9q4KHZU7noaEB1ZxzJssca4kdiqcmeRjBsQL4Yx8",
  "key12": "5VbHidFFtnxb3vVtYJ3JeNg4tMH9kjgN2TM6LuUG8LnJULACKkmGb5dEwPZBvWrqjNJDvEXb5sVdAonyi6hYK6A2",
  "key13": "4D5ArP8MKtstos4S3uy9f7EssuBuhe1onaP6k95y3iQNZHz3ynbNp5edUuDquGJjXMAwqC7tb8ka8wZkkFaxo6Um",
  "key14": "5EqaZb1YYVLSL57EDoXMGiWkM1dHJkLxFfhxPHimcy8jVue3xXGetoGKdXyFfW75Tizx1AF4xW1LpJwBiUed248y",
  "key15": "3nERB1zBAiaXK5yutDY36LNWwVAozT7MCZ5Feh52ewDgJEHQTdzpKfnjwMjb5ZpYg2X2Qdep9jwaugXSEMe9t5mU",
  "key16": "4No7pgXYQ4Lbsdi68N2Bssae377Uss58S1rjXJvaDA55N4SKpBUJyipzQHRP39TUcvttHGDoxpxPRnSsRA13F9Pb",
  "key17": "44wi9v6G1YiyiNNXnyev1pMTroy8WmJvt7UFJch8Gr8dhYa7tSr7qMob4oZDpbKFyNrmhVsp3dzH1vUScviSVHZZ",
  "key18": "8NU9oC81pBaEBYUvhNQVW6vwFpAQZdvdrXAEcgvy3drX2WwWh9MaG2mR54rhRXpUzP8fNoC837yCsqTaXFmKq9d",
  "key19": "4VHEJ9cVQn7Kj9B9AGwQRwrYDfaapWH7DaszrTJ3Qaraf7grgnwHNJDdu1BzQdEPCh7SBFXAx4QYHaipXy6tSUBM",
  "key20": "2Eafps6mhPdeexjLAApoXwhXbAg4icjZyzvKD4eEGZrYAsp6HP2boVmqEJ55jGQRq3Q2Guub5i6xnxC36tSqYiwD",
  "key21": "4GnvBzYo39VBVup4RGScX2XpF24tDyQzuhLHgBNqnTTqzfJ16upnyRd9nRNahXVEbC9d5EEHkumwVDyCikzDcyGg",
  "key22": "35Rh13LEHss73PvUENehJminnxf6GAvrKRKESqf98pz2rRpZm5cpRXDkbKH2Lc9zpakPMqwWZQjyK4gPDb7trZFe",
  "key23": "5WdtLuFYpR5uhjRW9cMZAaqYiyP9UYBdD22mk5bKL5CzXxqTKcMrZySMVwuh8fjEazemqSJ6b2L1xT9YUemvmeFp",
  "key24": "2dudGLFFCN8vntgXf1ZuJ8JsMMg9hyQtUaja8fJS4TyBghXy31GGcaJfnY959FmTPn4jv9m66sNMwM5wVASmZvhE",
  "key25": "2VD4MmSJRTn2FhvVuoMBj2U7ekgW54HakHtSjyFK9Fh8z9ZfB6v1rbDk5Xodsi4wSLPGWHFrhz5tW7fJWLJ8BQLf",
  "key26": "47Tp68QvtcQsP98P1ADj3WTLz7idBKqQjbqoC8Bc8hCkrpMwJYe8SPBZdQVRn5GPMUxXkVS7xLuc8qx3qhWKzPev",
  "key27": "3sp63gHDHjNv5PrZuoQ7d6bRd2LMfs7tRFUcN97zmpnbqaMmHXyufGbtLDZGsuz74YX8Rxs5w5YHyxgiZ9he8cfW",
  "key28": "Re2oFPPazfH4vsyirvgrmBLDHuyaVtLK31bgTCkvxQf5fCGQN8gf1mtB8AmnNKsWr6QP3Jshz9uf3uWNeezhZuL",
  "key29": "3USG3w14oDNbXUeMj4mPKbgtU8DrvRrfrUME29w5Y3hGvE5c8y2C1nK5jresy65kNm4Hiu1gNM4KV2e3pQmmFTY9",
  "key30": "2MsDQ2Uf39P186w9TPgvsB76vMYLYkpSfrp1gEp4rf1v4S4arhiw5p9X2RQQ4Ut3kyd1MsNuowLZXRsjJUHi32EN",
  "key31": "3dwB7U6G5Z76NKkCn3Low68MtEvu6SXwe5ArNNxaX331orRAoCuN21vHiKYCRMG2NutuLUeSNbFTWJdyjiXbWfQX",
  "key32": "4HczPtjbZE9QpYrHKcdfoY6HxrkXYLWWh7UBYceKP9XFSS4oXidczLaxAG4PdR4rmPFetYVSStw4b1f6AbxRepvs",
  "key33": "2Pdc1ZemTdhNFdGmPctXxiEmWpHLhCqNZnD4Zpc7XboLFyEDXLHQ7EA16SssrTAppJ3ZJj8iaDLNRLUZcE7gtif5",
  "key34": "5z5BYPYosNTnudAZ2oEwhuPNDu9aGsQW3mPnopAUD6SzF2oJLwBKpmTdfJMZgSSBx6fQGTvKQHNvmt2ZpS2HrnFf",
  "key35": "5gSZwxDqV1hBLzoqARfd8qrt61NrwvXJdLjdZdhgYVsSCAXaLZUzmAd4wRP2tEv2C9QyhRsUSWndZszoeuFwCksL",
  "key36": "2EQEX5vob3aUzszULnnoZzUk86A2gCKjQPpzhAij2MdTBK1goszAdJFJVkeXh9Wc2wWzpYxHPuHS1W8imoBHNTc5"
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
