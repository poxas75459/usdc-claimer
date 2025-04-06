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
    "5Zdxc48KR61bMtHYpvEYF3HYK3D6TUtLrDSHvQqGdodgCWXxaxy4fAc5Cr7XetRuwgabiAVpiP2PZLsURd58r577"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVxdJijfFF8LBfJDfqftcRAduAUygCnfrBCBW9W4BmUuSHRweQZSBVLaskpoeVwXB7CsgFHNuNZhhdLy9Jh6uvX",
  "key1": "25z8UnNrg539rT59GbTMUK7DQ6kmBqoiWThCYPzUDw9RGP9xUfucwAhdnJDf9oR5ii1oHCySg2N8ohLyyjSYSuvF",
  "key2": "9gAqdgLLvsjP4BURwVspVnutwKnie9Quo6nJbPJhdRpN1tNyzCLTCD5cjAUAYJ632u9516vanYWTyopj5W3YjbP",
  "key3": "2ARagNJLSBqk7kUWowNbjpEQfgguHGNtXZwAwjfBpRNxeVNmnZd3pikVSdy3LBc7zarssysZGtWHWhUi8mNHdoik",
  "key4": "5Cb1n1BpsHN3CHcGPuKmDNZejBfm4xLmrTNhn9Ybw3EDABXCK1cuuxptCpsjheDnxP5ryWj4T6VruZGukPjMb6YH",
  "key5": "5FjsSqZt8RH3RQKcKrvEEnxxzvwdDJJakQRxh2N6gb5X5iYUyike78AF3TMK6mVEaBSMv3m7tCThq4ceBHKVJfUm",
  "key6": "5ZREjYZAw9pHkfrE9AkwjGysm9jc5WoZqh97gjujEMsJPgYT8hH6ckSR9MpRUoU7HvSLnn9jyfzJAXiNicf9ENP",
  "key7": "51YQ6D5od6UjR99EtVeL67C2JscUPvPw8dKgwmYtMAx5TqJMkXr4NbKKvj2jSM51Gnr44KXe2h28BaXbVE8x2LRM",
  "key8": "3vhFio6MugaDhBfZXHt7CnKX79tpGu6ToTeqtcb2BJT9tr4G8hiQyt8cNWEXhxVuvi2tESxRy8GwfikGXMEjEFMf",
  "key9": "2Eqz2mg4DS7mzCUhuzcvYwnrj8ny5aa3JRLPi4q3cmHfLJLFoyb75eApUtE4ymJCWm8rsuYTFKwJRv8ycJxhs3yB",
  "key10": "5cyaBcwXJSYocxFX8S67gKgEgtxdWKLbkS4HLcKwpUM9fyD1NFbidJPk6SGEX8GYTR9W7HYVHv9xCeHp7mJvKkp7",
  "key11": "3ewfjzDaHUPPoZih5p6e5WBWmFxcte1XFuRspKNxPjMR3pYJSrVox9WNmXCjvmEdtkH9pvGEoBbj7zFjSiKMmRo",
  "key12": "44WY6TD7cwEU6sVhob8iCSk4vYka8cgvq53MU6gw31Wh39EXDXF9yTepeKMcr1BvcbsdutYy1NfWdiaRoSzBwXT5",
  "key13": "2imDhuYUi5AzXofKRPpaVxhEJQjnwP7dQCGGT34dKTZWgr6anxT5JghXjKLuMAM7iqsdawX2E3X6FxaACVzPrnXW",
  "key14": "2SZAoLbTd2jJG9GwQKJKeN6UBdjcwpZtu97M4PndtDq19zVLKi4VT7vXZ22zbvNvQ7WPLDZRfCwC6PKiHgSGTrjq",
  "key15": "4Zf6SsJcG4J2qCjf5xS22fjwieoyxiSYD5hEuahEPXtqCrCFtrFNfvm1YqTaBWn2TncnmYrYRNU4N4xXDyKHqorD",
  "key16": "4325CjTGxjdFMy2xZvE4NozJcG91zNbMXz9WMk536wbYpRz9rZCBZi1oouzWqK7wN5v71JvvKzkioSVJDtG7ADgv",
  "key17": "Xwh96CUYBwvEgJVzFxL7R1EaXyPwMZ6mR5jy2jDBE9z5bGyUNbAHjxkoYPR3ZmWrfjNUtyfbvigt9o3kz9yPDrE",
  "key18": "5ARnXxcZyicPoAwJC4cSktKCUYfpBbbu628CDaxus15DYgQtUc5xVAvrCjhomeWu8F7KsENDpmALA65rNkZyRQA",
  "key19": "4b3kYqp7Hr9jTBjN9APx2Fztiy8wuoNSRw499sQnePgW879MYBZAeCUpWghfDZK9N9HVXDdzM9FfQQegtCgCRbtU",
  "key20": "4nGLsPA7NC2HbBgoJqSQuwBFw4p7jUb1dcj9y6Tt6HzR4uLsxNB3KasLjWL667p48KoMPziuyNu44TpCSzfYikre",
  "key21": "23TZegNNbfxGnzSiNjBZrEMheptmSmQ5X5EmoxuPueoTafbkU6jTnj1Sb7e6UVwMKdBCUWQsXA4U239TaujVSfQM",
  "key22": "4RbosharY7BTgUBcQLKuhpaui35PKNqRJDkmKcZ1UPgdZeL633rRex3VVrJUaDMLrwM8qt9Wc39HmkTT7KTnNrZN",
  "key23": "2yk3fffg7kufpHUuPHh7JECTKM4GDWXkn9bvT9ZRu73DuFQWcJ2wyfMoSMba67WHzxVJmQPwGBAAhEUSJk4o85RY",
  "key24": "4e2jMnXNwSoTEqR4VEEtohZ92h1JdumF4iG9RChcCizY42hDPKDeLjrMH6sLpH7KWdqhoxywCbWy1MaoSLakRCEC",
  "key25": "2mX2YPupNYMzkXN5oZoraDicAip2nQt3hSCoLqojKaLcUhf7DATBD26nqSENN6SYLKZgDVThAMdLF2vi8C8h7cmz",
  "key26": "23pozB45TQcAq8KQF7NBi3iS9ZwGNkCfeGtpK6T6V14mmuYPf2oKvFApi8v1kXoMS7VqQcDzBP5RdNvYHtf2ZeQs",
  "key27": "3GYgDhXJDsntXGAiT4WXPpjAxcY5nrHGaDYWJFjDoX3pLCBdQHLb3hWgpBNR7iZzYZ3dXo7m3PfedcMajg96iNkm",
  "key28": "3iNTAoyy5YS9uRegskx6mtw1NkBmTjcLa77Ndd6boxqxJxt2QT3SQfFJVJqZzpM81CP8mW56ZJhMDJYEphPQSV3c",
  "key29": "7Cyt1hksFjpCPwJcd1LgoqsDVyTGBk93buTrXZpLk1w5X4LMeLD2kizQru6rYF7yud1qQN9zPdLcynD9AQRi8bQ",
  "key30": "E5GXn3X9wKWyMQaQXpUWSDf5nwexxM27krCKcnjCm5Tk3ox9Qj964LZ2i1Dh6xXzH2QX4rqnzxacxjoEJaAVJc8",
  "key31": "2tqpP2UiqAWhSw7hDJ2EFr5SSswWhWQRnGnXPiuykmqeVLcVtBbRYMzsvPDTW32GVgBY5cjzoaBwt5RKqqSoaAFh",
  "key32": "5HLSwsJW3jNvuZqmazFavu974oJUtoEZfjY5t2a8dne9kChuaXdZGeSNDCvG7ajYm8AMFNrwe6tMnyQFMuTYVudk",
  "key33": "4hXz4wv9YLJig3nThKE7aYitJFdiCWWdT8MN5sDyLZ6fwDeGA1YhG1Qti7Uk8TJE8QfBH76733Y98BDREv9aZNqC",
  "key34": "26B6vTtGk1cE2UpDku5T7V6x713857BCfUPB7U1v9q3rCquHb6A1CfCgjdFQvGSidbWeZEokXesschNsRoCNGzmF",
  "key35": "df3E7ByxYQeULo8DikwaTpaBZKTSaVLKxeCBgGy6aSSbErupLE1zhXmzHYhfKZsbNVFeXV36cmJoanArSJfsrMD",
  "key36": "4RQWee1F9hVrGgCQceEu6ai3yZGUWZ5nbSWu9JD6ZPL4tUMvoFc3MBxh6pkgMA4tmr8g5BNFUPcoLwSvB5GdqUvC",
  "key37": "4TvJpJsKYkd9ECWJRNdfQciBGf9xxiXsdn3PczR8EmMraWUQB5PnZjFiPW9oNLoFaGB41ST9cYjom1jQj5z5Leuq",
  "key38": "q17NG5N9sxRhFMNnyFqdGpGBtFq5M9Pjn9PfHKfeEbCrukFDUM2k6d77U8tyiik9E4RzKyDVcoqtrU8w1WMAgeL",
  "key39": "3rCEe6N36QaCEGyJXfiUoC8BaXbAwvsKvSzu9V31tRXBxhDARqts9mrhDdD1hwSEVkTYn35hm4BTYTEQiURhh7to",
  "key40": "2C5K56gfYnA1xacHSCGi1Rt4ZQkeCRibDE8VvTU3EvQoWmV2YP97GVazwJpq2Y61U8XRAJcRQNGsGpUZkruS4Yh",
  "key41": "51pRHRZqQb6zUrzcm6JMV4xuRmR2C4QxecaUr7oZhHt4jGmL94PujiUy32RCySpTcVQm6yjm6APCNir5JvUv5LcD",
  "key42": "54GEqKo4mvPrNCshMR1oCgNWXk24apADoF96TXWinEQAK8A6T3e2FHrGGDRJqja8whkCKhBG4Pxuso8fZtpuoPWx",
  "key43": "53H2YSi8ctb9A2aknQozvDzNFRcYW7VctWjmy6qxtSz9EZx4r98L6Suud7VBwLE56JTZpa9GHHvrnx9QbENw5HKN",
  "key44": "5brRZFKqtxrKveVEfMTUnw1WW6TCDNu81Wy7y4FzvMd9yTnj7KDe3qDgTkQshQQBsFLasuov9VDzuTZJ744hv6ba",
  "key45": "Zu6tirKUYcGS5N9DDp7P6ySTXcwecqAFbRo6cEebjan9rT5fF1fNowH2E75PVckTPz6S4AD7GkN8S7eMNJC6Ae6",
  "key46": "2Qarq3JmZNeKL7meyjeQmvPYjMDXrJTpM7DcrQfmuN8b1pvWfTg6fNy1g4vc4Lrf1ePsuUgcG6PdsEcGebdnWs9u",
  "key47": "yzx4UhiTP2xFgyYjPhEh8bwbQz8SPtXFQHPVAZCBDccwTmCjc7kchRBAyMZ8rJ22i2Qq3B1YaAAZE8dTuuXrzUr"
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
