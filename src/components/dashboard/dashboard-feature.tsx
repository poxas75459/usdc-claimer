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
    "511Ei4DFUJX8RwaR8V7Zp2NwAUtQpq9Habd1PVchKpe7Ys9JiytLhY6HKtQSMtXRGa7tGtrYXzWoMn6VRrKGQGYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJjAHUvpMBA2icPNGJDjmjR1EyFcZkRh556Pn6HJyP9BuGkovKgpdx2Va3U66h1HforLzd4Wn8naxuJKEdNH5xK",
  "key1": "2gq7ejVUGvJNSdYb9sZqfxanJdu4xUKrm2mEsKxb2GNsxkNBzxmJc8w8VqayJayMLqs6r5dotbokQUpFsepipXmy",
  "key2": "3vuxbWF9FXZs76KnGE3DAM3KBAZyApd8cAGZbdPMMZZHjA7XTKCennQCvJzMG4VnVAg94Yvb4rKsRk7yp9wTVg4b",
  "key3": "3V4FJXRnnJNeiNdg4yT2PivjGyF8bNnXBrhenKbDGfFs2Hwioo5tmqUkThKz1555efcSkMgsFqjBWgC5bvir9G1r",
  "key4": "ZWDYiSDtELhU96g81nKHk1rMGJKwbBWJVepZgBBNZbAaaaeL5p6wx5UzXqQqy6SiH177FcS8SKLDuPbnTJENNWa",
  "key5": "4QUh6f1FTUo2jKyq1RPv95FNXoBDAvfAiZWVzRVKz6Heh89j5X5cpcNcxtcP6b1GMHCSXy1eYH3YMp7v7yGnevhB",
  "key6": "3N22BrZopWohHgzCTDNB7ZceYHnsywnWy5rWvTY4LKaZLZAvuaw76NuhELoYboTTZ9CCqCb3upkRySxD4xfGwek2",
  "key7": "2hfU9KjSZY72uK4FmE6BvjbsTY2fHQFonVawpHrA6HogQCirRiDcTxDShNWx5APQTB3kyo7u8ZC21NLYojwZCRCf",
  "key8": "WoqXFwaKwr43CEUd3NuL5Q5G8AdDeF9ZBqi5NThe4VG4RSGfQaAg6zMVbgdhkJsqtrnu2vrvRxB5XhqYdm3zmYC",
  "key9": "3MwzG1eW6oioi31HiKWHsj815ENJD1Ayt2ZS8bmKeVAuLSuZArMRkFy1CZXQW5Wibs3rZeRRmKsj1rMi2x8WKBwm",
  "key10": "3PNd7tNFtpM6ffYjoW6ysJYUWShs9awJgHKFK5UPabNJWDo3dPkRD9JuStqKrGJAMAUt6VxeFkLAoKht17p5q27F",
  "key11": "236x3SDW5tD2tAikVC5gvvT2eKgcJogGkAhPxykJgUUGphWhfQhezFhemC2oBYqrk6bbrCXzhDmmvikWTMo1UCWK",
  "key12": "5kHeYHucJKQ3c9JTx7ZqKXj6gSjNXVT5viMUs3r24ZbZSf4YJZQt6yiGWHnd6d6m8vbtjC8kYjaeyp5WiesgG1DA",
  "key13": "47iavc2vXhtYTnXkUP73a4biVTBmGu7GvtFLLaFGtqaeTd69u148XyoD17NApLu1TyXZ132dELf3ovAdc3hZ9t1r",
  "key14": "3WkQrdrZs2Kh2e13oX8cfEJHbMzT6pHtSZs4uFKvLWQbLgqe5gfqkyp6Hn4QwSYLQbbSarsT8oit61GT7VWKZB4y",
  "key15": "48eVWqQpdohNFnAxAf5qmfG4UKB7kDkc6VVcZeje7EnhURagYk37rmBwG3fwqYySeYB4oAEx3QGo7N5j8Jav54Jn",
  "key16": "2WUhJD5EPvH8iZdJiXbWn4BzRsyfBTmc5y7Pd8tYpFLZi6pbjixAMPpEzi6wtirG7jnRGX2bxgqWF2VhF2oKvee3",
  "key17": "4nFciwv5r6x3c5LqotvfjxNneGfcS7pitwaAjwUuoeYXTTdxVjafdZaymjyNoE9vortysPBYFAMZ6etvPZq1SGDk",
  "key18": "4s53bojhjVu7Y68cJudivWDcdrHV3LT7kJFTt34fPpUe2pHNrCxPbiJewryi4c13baws9vUhygLcXY4xtA3KcUTB",
  "key19": "9v7U1zN4Go3iTFv5eapfQrN87EYYN9MtZwx86rZmSw5P46ZNPGKQDXMVbtHKwGhSKBi7tQB8ucHyPywfoGo6W3J",
  "key20": "63uBg7F6LDbykAX1Sn2gufz8W8mzSWH7JRpfgo2wPpbNKEsvCv36Hsf9gpHW25wKWWh2tQpdJRnujxT8kDhu2L1L",
  "key21": "4Sjq4ppkYQvN3JVgofabe3wA4yCTuhdVeo6MrLvJGZGgVHb7TZYUJsBt71ocyb5smD5j6Sdy9uNq2YEJYvqJH3pg",
  "key22": "3nJVRWDodj3JtkWFLQrw8GVpE9i5b8qzQAERpij8y6W1aeaGYAgMqy55bvxwma34Yvxm1xtNSEdmZxeq12f4MKBg",
  "key23": "2crmZBN3otqE64jvGtgtMbtoRVP8iftd4jBFF9j7K4xPUQvXAHMtBF5atB8Lyo7Xru5eFaNASvWiGo6jNehp9YDp",
  "key24": "5RzZkw1yjJZjD8MzVLZL7LuFLpdZNL8fbMs45QuvQtJfJaoaobniS9NHiFpjGPpTazQLySrhexmUjJfXLQybaiXc",
  "key25": "5VSBBCAJ1it1AxAiL4nAmpCXGUyk52EPZJB9HmADyzaJwAwVPDMTmRvxpYmoAUqKEwjGY2o5j2uKacsEBJLzRcgw",
  "key26": "3yHNg9LYGxEfxrAWB6nb2pFbGbzscFkyuj69Aguaauhk7hD73ux3cKLCYW8sQo7Rd5NykNA3DqaFA8y7v64pNvQa",
  "key27": "5N1rxLvHkhuPKGbxiZ4UP7vEDjSDXJeDAjx3vTgJvmQS4ZevQrgPaoki9KQt3cbaHUX8QVMcuKKcJkfp2Ng4B2eQ",
  "key28": "3JCv3GLxcgdxasptrJxsRVw9hs2zF1TeNrZpgDzgdsKqWwix5r8dBfFbH2b17ZAJWXoAMTpQxJPVLRQPg9uQxhkj",
  "key29": "4FCRg8Fg8jUeWPYK2n7PkjRxzayV6uhhaHdW3STcyn6T4vAZkLD3JoyeGXk9gY44MXNSK4gNMeXxiokijo1D5mY9",
  "key30": "VHDeh6ZnV8PQHZJEbncGuGLq8WncAe5DTsHx77vB6734922iUHM1kUk9bcX7PYtQgbQJF2zNGcKUUATDfxA9CHB",
  "key31": "3AmU9zvCW8bkVAU1Ag5j2mszXtBD1p49kYpB81YGNCwvmiAqGQyHoNTZvavaxqv1Z9zr3QQbf2gaQNEoLeeQkQRL",
  "key32": "5h3woM5zunn6cSagGg9Sr4xxXTQ7FVi2p4cRWw8uGaMWhGtNVYsFogFiE8aRy1L8xDVWN2QSPRF48Rfm8BJvo73k",
  "key33": "VaX2Yf9jL1omayGPUUjx57yyF5e4aNWNwqqYAwZRT69Syu9CtjRyLvaQZG7MCu98CUn3HRyTC6j4fJNnv8pXmSZ",
  "key34": "3bRiFtN7aSY6U1nPBu7nJEPErKbL2EHH61nnSY66nm6ob7eMZQETHHhiVgP4CYV9NordHaBo4k3uAsdwQYcfEGtF",
  "key35": "4tfLUgTv9Y9gDVL8q9CRNNH4wJUMeBtr7ic879wj8Xy6Mqsj3TQ8KzLxnkxQYEUtFEEjWeiqVpcfePMq2tjuTgBC"
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
