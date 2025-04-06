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
    "vSFaz7r1uXMAtr3XHic4ThhiubVqmzuDRMSHjkPo6qcXBfbPQiLY4kAD7DSs5PRgKm8hBKQTYybrKic2rHKTGUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tckNxNXjqwjaVicmmN4qMeQD7JnFstyvNLERchDQ1fnH5F1v2px2gXosFm2mz446C5k9i9fRX2ChJ7omrTtWdzW",
  "key1": "3Hy4zUFdL9TK81Gq54aMbr2cAzA3UfakFvR5B2BT6qPRpfS7JxhoNkZ7AUJPCazDLvYC38YieYUBDj6XmRzfgjuU",
  "key2": "4pEYbCddZG8cMi7ptRgMA5mUKHVdBDPuNaNHeiJwV2PYVNXxk7gNEy18Tz3scwfxT7SuT4UXX2zaskRgBqSN3ww1",
  "key3": "4bxpErQHPMbBXAVvWVWiHeyRYdQHQP3GSqM8oTGogz4yHzuRni9swY9FmdYC3PRuSPoNoBZqqKBJ5nuGpExQQur7",
  "key4": "4xqSYMs9xCkfU28tVLTfmViMkMezXuQKgez7ZRiz8T2uNMB1z9g8L5q99XMMa3JHgnLHenmRsgi2HFfnDUhBWUJM",
  "key5": "4kCG2ftrnqUzgL9xrQvAdMfapxCV66gYfFkYkXzkpGZChbmuThurBWycgK34bnoXfJxJp9Zz2g5c5enfQYx5Ktrr",
  "key6": "24tphtAL7YpjuNxSKGgDuwUfGCfnknudCGAYVLCDCtxVEYes7Hfe4LeVsgPkax37DNHs13oh63wBikZB9WFs95XP",
  "key7": "3u6tEZFqSsrYaXW1zn5gw69cgVxRM6PbXEAjWMrq32esVJgsXK1T4bFjfr7eoWJFAWodS4BeP7MdAxBeoQe2hz55",
  "key8": "2Q1G98uHqLD8Uvf8fTkyESp8vJxSBmt9MbyaTDXNV2qZqKmF8qnuWZkBc4dc4sFSyTS6WKQTVEWVgWgX7zCo1cqP",
  "key9": "3vdUHQES3gYJpBahZeFKFnjhAxzj4t6dWRHXLDTXLJHARgNnRF7hShUzA4pp4xPXwxiUDzxnFkb99Ymq8nYi8Z3u",
  "key10": "g9v4cg8T6WK2LgWyjVN8KMdgMvUtbGvfa4a99wUx7JwzEebN8e2r4mUhmEUuezFJ4RXcaZyNTqPCt8qiB6LADDU",
  "key11": "2mxacwgFdmK2hMywkFAgmvjnFXxBotFa3CYk477hRq57VGAiURvDMxpCg3SQAqBxH4Jks1irffZSeaThAF9DLHmw",
  "key12": "5LAWVXUzXpkAc3yj4JseQvTEqxViuUPh35SWQCmVrAwypzGuKT2PCr1gDvgxuVyydy5mULfFkU1AdeSKyWG1UbaK",
  "key13": "4sMKJct9aEYvCjVCsovrPegpfF3iMy6hnwrbuQS7uyAZkMSU5sQy3eh5fkYTLyYtXwFrhmTREo7iJZHsyjN4Nn1B",
  "key14": "h2E8QkX7N7MY6KrpktwdzHmXesx5L8gosyact5Rvg11vqo5omnvoXnaJRQjH49g7tesXsPt7rtkLy1ttaCfMFjq",
  "key15": "42PkcQNJ2LdRKCDjhrs5r4tKh31BUjBCoPHMnLZy16Sjx3u138KHWerAyYqfKLc8Jv7j9iQJEPZBKyiaxzaYh7iq",
  "key16": "3X76kXLbUswzioLMVMtomcQbGJogoPDvjvgc7puMEFat6exbd4gaDbYepP5sdTi6BaSugtC32n8pbSwLSam2om8o",
  "key17": "36ZSGZhtH455fUkg3YAr3LrMamS53HU2J37btBwTxdU5Vn8s2P5DUaB29Lg6VKXPcAEKktWCxbbJtkC59frv17tA",
  "key18": "5n4gD18jDdjitF1ZXULqAiMAaGWJ2zpVyPvNhz15MF28322sTFzfkWvsqiNpWeedLyBPLqqGzVnDw7mG9rbvcQZB",
  "key19": "3Qr8iLd8NuSqF8soarn9EeZnPiyfdg4hLokHKWG9Dg3EYjdcXPVZA1YjcYPBigFQJMQvhet9TY6QAxH9D2kKRQR4",
  "key20": "tS3f6eN9t4VYJsYVrdhi5TF4pwkUycXE1KHLz2kPpYKHswLijHbBbYf5zwAGJJxvfvaCk7TQ3P5mMG23TY26ofj",
  "key21": "3n9xZwhHe3ih8uLGqQWXstfFovuG7pZbmtochfH9SeRikQgR4akEPgBb8zYkX1kmL1wTMQU3KCpsvpUShiLkj5Ky",
  "key22": "4SsJYxZgfkeBT1eXuhDwjGDP3VmPLAQVQGDVqR5nNdAZmi1NfdLzcrVkLYJtZnxjzijorYRhKhuYAYDbQH1RfFR1",
  "key23": "3pFk2Vu6o6ix4oSRwtfVq9thr9cF71kAXgGmMqy72SGPV3ttXqozGqGY8b7nTtuLbiy1ueF3PQ6T8KE3EfMtyTCt",
  "key24": "5KvCivgDk42emzm2ZBJybPE1DCjJUFCPjbfJtwKUo2gUrX9zMn6J2H9VYqazu9F1u6weMfy2GisKbU75AwFbgzzx",
  "key25": "3y6Qf2acku8ZLok48AzrnPZc9dwdQKKDP6i9TdzWXNdBtwFfZt2oZe272XrDr1mXDo6hyz8jT5R3CLXebv4GaBYM",
  "key26": "4ikditXUrtmRRUFmWd7SmZo7TEkPTBu8cN31YYkjimrAjaicryidoZpi4FdNopbKBAj4DneZW2cHGpZE8Ca6MTXS",
  "key27": "5XM5FAujLZacmyeyXb8FkN5yuTq4t9donCPghTKKSUXeZ6erhZJUebnyKA8kiRLkdrGTQHTNR1XmXf9F7npBmR1J"
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
