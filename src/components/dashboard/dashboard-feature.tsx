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
    "V1PWVn5VEjaL3aqDf7cggXj5gwG9Z7RrKWntw3EBMevAxmhYEvUnFKqKjmQk85Gh4x1jRQoTpwZ9msu9HXr2A7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FiZytCsDuh5bXuaTPxEs8fqQxLsFgEPLgvbD9YKU8jJ1Rz4qwH9eycAKFdPMuXH5PC1HopyXaVZncdh7j1WpFGp",
  "key1": "5321WALAedp6LnyRTb46uJTKEyo3fFizGyPn7qAueHPzRSXTNpMkAsY3XzjZQ5N3U3rBiHrUeY2iD95c1WjEdujd",
  "key2": "36sNrCmgZ8cajjwLQibFw1RE4iT1Vxgjmp3fBXVvziqWooQkAYpyeAED7H85CxjijfMb6QaFpzciiAV2WTg9zxxw",
  "key3": "2FpFW5KYWB1aFdWvDngsbARhjyRPuFpqzxaB1GXDqHCy1PbhzEqZaWygB5q2uNvGPUtSvuZbQSD383hvJTKa8yfN",
  "key4": "YV2G6ExHNg8wUBwnFTioJp5noZLfBUGnqbftoB3C61jLU1xcMmXaxvdnoTCAXaXwezEj2zgUaKKP7kbvZ7WHPMm",
  "key5": "5FtwauLaEatEXB7Z3Dptc22oSXBPXDyJirtiXF7oDnoxxLLbhLTGP9NzDsSvmagoBuyRvkvRckN8Ry9Rzn73oDNQ",
  "key6": "3qH9hLr85qhRwfv6juZ2zoUy6h7qPtwMe27AZtvU9jBXFqHq2V6snJ7DUkyvXNkuacCPP8qYvzECKRHKDW4Nq4yj",
  "key7": "4Mmh8GkW22EYa6atxkSGgfJAo1WmXaCemR7xSZewUh6HDnkxuKF9uaXqQ4LRNKabudfHcDBvLuHqL3UfRTzqVsRn",
  "key8": "5QXPcqtDADFS9fWnut1wiHANj5PGZSDRpD6ozcy7oYRyJb1H4U2BXYQwBnNWVW55tqRvyftRjrefoiPK9YUAV331",
  "key9": "2Nbvx45dJncNDNG3QBza5uhwfp6xmpbAFKsUs1WyWhULciBJ6izzDEvQeFAy75jmmzhAud9pxNMJQBUZk2oVW3Ao",
  "key10": "44ftQAJphnNE13HM99aA2ZVvGK6S1pbZqtbn6zaN3PKNw3NEtcxMPD9JLKcT1vQ6Bz7qwXYHzh8UEvKhbRGSvMKP",
  "key11": "4vtoSVUhyQFaprKJaP2k1CoYnh4kp2hVXFmeL47ja5pBEykyAmHkU3JxN2dQ8F9396xPucsUmraYdHDy1BHyo5UY",
  "key12": "32pAa6CfwrmT7n3yRap9NaPqpd85GCy3DotmoAs9ZjsCCXwjUdxb7MZy7QmGRiPxx8QST8vGqjWWgfb8D1Vs8bi",
  "key13": "4JcoX3EAvupCJGDXe9iYMZkDAQF8b5nkNjefUAaHKNVCLdN4XEwKc1e56iQrWmXruYb9JDTd711s7HNxh2i3kMLr",
  "key14": "2PkQsfGMzP5QyNs9JpkBRUasrbstj6PaQyRieAWMCea4dPSECJYxPJsp26QzQu1CFdGBLPL8MdP7YDZjyTxyzB2f",
  "key15": "3NmNipQvsvz2RvJ1PK2TLZaTB9Nbrpr1GLf5LcUPzGqKQrZtALP13RExBvxuEckXjfnKpaPYbTXG2Fi3xm2pCESP",
  "key16": "5qb31G3Dr86NJLzgzaZkMHuQNA4RZ3rc2i3pwuyhd52zfyiUY6Tm43ktXuCF7dCgz7nVYSLds7U1i9yUiKAbpHJB",
  "key17": "3DPhpwyrV7yusBvQueP3R3CzSvNo2DLAMXeSgLxYxTwmcCum83BdkFyJCRcqbs6iZiUPPwNgxT5Ft9aXQ9QBVDTz",
  "key18": "4Ajyjj9kXR3AJqhM8thRn1Dy9VdQs8fFvfGsEZd5pZZMcoDAPC3CZqGoiyZ5Gx5pTahf68ytcFj4Wjtj2ftYfsdm",
  "key19": "3MqD86cMYke4sCL1mj4meisJiuRrwM83J1GBhWZU9hPDyMABDZVL3fp1sQLrFJt9NVpfCcREp7sjnnoaJbJMFJQY",
  "key20": "3H5c55yk5mhpYH1TBC8QjNE8JYvaKLNfbwXFhJKepBKtsPw86FiMbz6mwRfTvZAXfEm6oMfPX31AUZiZp8zoyrya",
  "key21": "p86vp6sUEXScerqUpoDQr8j5RMbHKVaNRVND7SnpQWGao7V9XhGzZyqivVj3oWxYdQVGT5YtuHcPAohYTXs9qmJ",
  "key22": "3ctHewPSSrjWRWMTu8tRL4h927eHhrDNZNH8coG99pit4mqnAqZLNiibrawbN8UQTVGGcNGztZanEqb8D45icY9h",
  "key23": "21khe33sx2JTkUdMuSFyGt8y3AKfEuKvscWCRH7obydGTyH2ourH3bSQkbaxf8HaJRQnKLrynqHCEYPjoRf8mDLD",
  "key24": "4aqtSMgPu7VeVTgF11otiyyyDdXgNMZXm4a3ftPay1scNGGjGjGmLUXmyLbgQXCSYYXqV2hef1buUtzPoz8Qyeso",
  "key25": "39ts3uFhGoCh5ZHGsS4RrkZJ9tC7e9FTPMZ8P19c8fCYSSH5ZMicsxNfv3vkfz6irTd8XzTUJmz1NYVFVniaFVxm",
  "key26": "4XGACmFPrJ2skqayKJU3hj4NNLg1tPPbbZmrJE7vUz8X3SgZeJZDgXDBife6HP19voBoGbmPHiF973C28rTskmJf",
  "key27": "4bixrhF8cuQWmQMGeFViZ3R5HCxPvhHxTgeVM2XfFhTLpYQL7XXXcXovzTijQwCGPoQcMymJnwSwCecV2mXQcUnG",
  "key28": "5HbQe95AXDbpwomrPugBqMeCXZD88V4mLPjCvygg7HLSZQUmfZSujUosCzhBwZivQLjmRtQG1AawkMgMCy3Ueerk"
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
