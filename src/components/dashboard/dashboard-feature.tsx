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
    "2spNbEpiFxSy7fAgMhdHJcsHsk1PayQB16dyoDU3SF8Gcrc5TAi3SLE33wuzaeHdwp9u2t1PoDgRbgYNHabVwFLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YHbCxV5mzCFaVhKB2eoCPVSor7vh4JfRYe9NbkrGop24ts9WuyfAnE5UQDv3SUbY2GYxk7UFV9d1Gr6yrc14U8",
  "key1": "4atZsqHRd3xnMgmSYobawvB2m8ayn8oB3fbmZdCpLsg79wEra8h21JvxuKSpDpKxDUj63MaNwGDKvqLnhp5L8Nff",
  "key2": "5YfpqeMeuWiYTNR2UwpTB754wSgdq8tvUmuS1WqRfo4WJpSE7tsW9ja7y1SranV8yynjBTECcipHHsHSL9n7tKws",
  "key3": "5CXkhVFh6VwhbdCwZnHekud9u9VozwKeYhoLtUsPxh6jkTG2a91JZ3U4EuZvNz8BHmvBocPYQJ85qUfvz5YvBqp1",
  "key4": "4MwFfKk2jjXXNaKVUByVjRGtHEH5Vmkkan9nyiK76KK37W7Ktui2UXZQtcQSJ7SwGtcWn4C4GUAooLxDYDGpkRkc",
  "key5": "63hVzAi56FznTcZGpYcsS4jab6jXNUx7yJQjiv99qpRUeUA1nFzsm4sRejFL28jmagesvsGMR7UKMS9wWY4Hxfwi",
  "key6": "3UvrJD5tSgHzSKEKLAjV37aihzDPnvT9PJhZ1JbrTjCQAamHSu7yGTtjog25S9oqRzHriof4BM6xwUQx9wVUUfCg",
  "key7": "423MPgWHFBh8aP4zRC3jd6z6BXnZJ4K9SDMBrF1mntvJeKdqs46dGHCty8ZVV9x51UxRGAq7MeiLSkAeKfYsodu2",
  "key8": "DuDUxJf3ME41A9u225kYmQXEH7cFaWqDd1ZDPsKJNgipzKPVfnSzx5tniDFFi5BAoZTd2PxsfnjwGP9qGQpUi7j",
  "key9": "H8Dt25aj1B66pN1vj8pusJnizLofrxTNCvGLLfdfttMohaWcFmwj1gjV5dJqTNjCjSPuApvRtTKgLtjsLt9cK3q",
  "key10": "2bCU23ViQ5WKjh3kEvv9Ta89MaVLTcCbLhW6PGgUY3PEvntYU6YFviQRGc9Qd4NUhe3DZWCVgKNnhwWmuuRLsLUt",
  "key11": "35F1ko1T5GAXYRnPJFaSJxiFVoDBFFpqpiL46rn3fFoCGndDYCRZTEeX25DCVTo7e2H6GDcdeARQxxxFPDj9GCaS",
  "key12": "3rKEesTVBkMq4uCoKLuuoTNtEPE5QghAZArL3bfEXDozF3WzshDL3LCmuNzHW6QAyuEsn3tQL4sfB2QDRtZ7Y91F",
  "key13": "5mZ3yeEG143sP84rVZsPbs2XTjBBUH3tBDDGeuCRNR1hLC94pYmbFjk1J3wrUfLw8UNQ9Qv9gQd82BRKp76ETzoZ",
  "key14": "8AtgoAbigT4R2RCFHBFNQJmFWraoJ93Hs5mm6kmF3B42LTevnip3pqaJmgiogjGd3wLS3WpMj5e5EUMcgQ4PHGf",
  "key15": "5bSp21XEHcxyWCCCJWdsrbqx3ABvCwAUEXtZQjYGQtcEz7nTUT5GQ8Fy4NguNGWvV56Ungj6f4kQSh9H5QZod3bz",
  "key16": "JybXqcJz2xEHz1d63z73YCDVztdpSbEk2GJBsi1tb8cpNhmTsTxjeLgcrLnKkHApFEJeFqmv2RULXP34fSAppwF",
  "key17": "25uDpAHt6y56ARQZ1fGeaSA11cTg4YsMjJFHnFHSprykGgK5tdGEXh8VLuae2BadiSQCTYb9ytW8vnvXL3RB6W6k",
  "key18": "yior5n3ayjt6hh27NuYbokTAiMF5typXdXKT1sNy6egGjdruEE6Ku6Wh96qy6iMAFB8uw583L2eV5VZo12khPbo",
  "key19": "5LSR16QL8Z9c7DNS62ch3dQLLzWJQ2hGkELNqCVDB1caXJ23eNLAwhnxVXxRU4KTHW99gx1Ji68zykp6YgWR2UaR",
  "key20": "Aitka2NWQ49n9PwjXPrfkjcBewjpZSuK17cycivGYZeRGipi32yiPDUjWwHfpHVxVNZsWUhAXVt66nj8czzuwQR",
  "key21": "xRGGpPFLLjTs3Kf6jkzLQn2qzQdxuyNz5UauJr9tpXF8PkF58CxMB12Gea87KJgyHsUgTuzCboBLF6E8mho1C6R",
  "key22": "4yeWvLBcUNMo85hvUkhVRqW9ZJEoVT9rjdBW8gJ8xGaqcWQanHDered4zdSwBYCT3FqjDaPjEp9yiArxAAZGjP8U",
  "key23": "37pdbQg2w4MztjrcLoxskqP2yMabFvbXNUTNrTLmNLucKyhScHQ62upv6QYGNS8CMBhDrc92izdhdpfhQK4JGRmr",
  "key24": "2aET1Wr9gECtuqMNbZnzx4WLBVz7zyZCRrLP8gWhTA22bjYxNjmC9YVLbSLRLXomPrmALsE14zuUzJU78dZJeAG4",
  "key25": "5Rr7gVPSbAsyZ3eo9aTAzG5i5k5meXXGqN7f5Byf1uVqtRQYZHTY8BSxNpo1fDTkbG99KmU1B8TwAxoczSfs6ohC",
  "key26": "2PzF6HFPTQK2mcZ6cZimhBSSrZ1sj6SQYnS6am7ubc8o1EaTNd29q16aNVXGJG2zWYBBg3dKiuAiwUyTAv4kxMf1",
  "key27": "3fyZx9cznnhRedxJ7iPEJmpsTLTHjW8LohqPEq54B2bnvpCuaNBEKwJ4j8w1vRTugkEkGjLz82r5FB9m39CcqTYC",
  "key28": "2AvGQXWNkPi9harmYtZMprkTiHhBTomwxQB8ydGfqJPKNWgGxbSXeJ66sHWo4RjmAazRRTMYabB76HidFxz9zbmN",
  "key29": "2ANggwC89N1eXcEGi2rTzB9Y8xkVxdCs8jWbT97qRm78X67ABnVptY4DP8Gr9PEB31m6JqfcBfeLyCER3socYAdg",
  "key30": "3Kp6c3XbYkTWf8FA1pccufo4jE9euz7WHp6U3z2C18PUgiAmGCkqbyEbKrbZhW9YNHePtgFZQG1sWcnNXByw8PNu",
  "key31": "4RDids1uCuyKa9RzJKypHezQAsEWWkhYoZNt6CAYDhbBMHPS1REZ9ofUBg37bYNBApPrxftiKZfdcS218uoqTiGP",
  "key32": "4fgPDwYqXfStSkXzpnVq4kfP7s13y4Fagn6VY5NLqVKPVTAzrDBqWpKdbRE5HjRbTtSuCeqRPkW1YAeSXER7q4jo",
  "key33": "oTCfj75XDVJyngDWPvjP9tq1zYNtSxEa8MU3uAFkTCrvXDRBsx8oVL4Mkk8MML1ZFZ3JVTVMmntoJRF42ZDQGX5",
  "key34": "ngswfqrLvXFQdsWg5vtVHhGYZTQUPGoLCRHNnk8oV46zdDc3sWtAYdNyhJ4W68cvuNHsKwKqrp3vhXSGvnkNmN9",
  "key35": "238EdHjrdDYdVfi8kDR2oRTnqqDrHxqKhHuTn9CnkcfHeR47oBytZVTaYbD9NfbyEsZFqt39XjDcUWEC6MGJVRGk",
  "key36": "5Y1WF68kKJqaP8eF9YmZSngjdhDg59fWengTjg2Lr3HXHWGEsr47EVtmME6u9YRPCU1cbp9Vy91962Ztq6aig8NE",
  "key37": "3EWgNhfiLjJ2UVdfyBy3bRpAeJaUXUNfbwf8Y8nbumuCx6FNAafBWcuJMqHSXuWAuoR5BCJLPSP7AgBAbRqh6VXs",
  "key38": "4QZKLUUWShmQvdvvMTBwpGrUvAxbPCfePGsKtYh85s4YeicWZ8ZuuQQP3QQvmevharSgZu4FKKtF274ubTx8Y39s",
  "key39": "5SN6SuWHTqLPgQ2dSm6PK6392xovNb3fpoDJc5kMDmwHL5Xkh9xmGbrt3B3L7wxtjuYn3dvMA9YV4EDy9ZbB2hfu",
  "key40": "3RmZTBLmBtAy3tYQox2dwTgpX48f7tSBUK4pm3Y7N79Ap2sk8s1czsecy5FjoJFnFb8Z5kfncWZAFde1nvaSgR5o",
  "key41": "33RCzjMY3p6qhi9i3NeyPTNLBnvMuefYTF6jMP1RaPYZNdASci4AWVTo5mY6EgYDMCCyGkzhcgw4eSaJVx52p85h",
  "key42": "4ewv8KLRsuavj1QovLtdGnmRiAHf8WxAtSp1Ep52Dewu7umhj6DLCSoVKnBYaqb7dgGYYCQSirh5nnaaTvEbswXc",
  "key43": "21gwVjoXHtDmDmd2ymEpMrDKzJ4Pc6urg42HMUQStApVBsbc7gRbWqMRu8LDNCzrU1gXMAHJehmWi71kadpJyJS7",
  "key44": "59h18X9eJoWwB5ao9gN3Btaft7HjCCB93Z9iGXHBWtAkxZxF2rRwN5JkbmnbSxXQ8kHAPHqpWVBQy327Pi3fR7aj",
  "key45": "2MESSfg5rPeqvJk3PKm5i4KnUQkFaqU11Twtw8gcqniubobiijEqWsZ9TseWLgUNQ5wYyhzixzeVH8LsW5wabyHG"
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
