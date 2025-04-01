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
    "5PrR9eaqduzKVrxFpNgVfkwsdeA9NptLwxNbrLD1qskRhQDucifZu4Uvc9wDKHiGdKZhScBFjCzummsm3SuBv9yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P3T9Ak8fVrYGT79hxQU46xthYPob8cHZ93QjfA3ePM6SYJM2rscgS1Nk6aXC6YCBC4bEeS3MVdSmcMBqgCVPqzj",
  "key1": "3nMvLEkLeGDbBw3ySoX6V6c7W63utzH8GQE3pxzgzK3L8FGq3Re7KZ4Zq2wkzbaCivbZ9C8LRagyeFWnexfgc8oM",
  "key2": "5gNU1tD1wuJCBftx1mVakM9G15yc4B22cEEY9sN2CsyiVa8vzJ3rcqFP1MkQrxFwWmbNVRb7nsUiTVfBByc6aaMY",
  "key3": "ELeo4YhmCp7pRQut6eybd5S1BqZStsQfYBkNhzXck8CTnZiCpz6XjiKHPgWf96F2Q4M63X2X4LXGXiv5XCcisLW",
  "key4": "43NH1ocgnYsrhUq4ciT5cm5rRF1RBB5c4Q46KgFg2PjTCahgrDxPf3JTa37u8ccyErKvtUZ6sB9PDu5Lk2Ybx9v9",
  "key5": "2TUTgr5fpuzchncfroe5VApzaEXHJMpNwWty5pELCNtyZsnzMWE8dcgAQr3xNKhJApN2DgPdAQBkNBvWfe7sVByr",
  "key6": "5adc2ZzekUGUoLA1P6MutGnmT6WJygBJnGPSXfUKQLhdeEdpvf6FBwThksa2f8CrkbwJWSLJptw4KeUfWGsfdqJ7",
  "key7": "48QjNn2SkquokYpU3aE5VPyfWLCU7HHQgq476bBusNUVpCPfhw4gkDtF3FGPxcWddpoUDx6itoUhHC6oTdQLdTX4",
  "key8": "3BUQ1zGFcRKfts7TeBKXBZm22c56gQ2gazohWZmvkrBvsyvFVRGvNm3LLbyWsJ9tvjNoCwncb73zNbP86XQ6wUd6",
  "key9": "454evzUbCDp6LvhuHktL4Ris2v8W5JSbGtJ9K5SqSv54Uu5u8ATKd2vLnN3cEox5gKAT6fpy46dFc3E12S8dJfmT",
  "key10": "4tZHmBodq5PxhnqaqWPxZVVf29fGEwP2CLKuohTrFDieW1hUmrNDJgZZmCyjHk4up4EQcbmgNAgsp639mvT6zAGA",
  "key11": "3JMJvQFrySJmV9yY9g6hdLVyAP1bz3APsHPsfaCVQNNv6m1YBP8gFVM6jHyRAfaATw1bYewW3ax1Nh6DqK15Fdep",
  "key12": "aUDCFaEKGffcwqpEHaqp3sgTAksUhnKRHPNeaYX6g4Jn4hk2Z6aQpghPcYgfLa3YpoYYcREYHDsH8c3G5udbpx8",
  "key13": "HnXu3MAHpKRHMpKVGaJmnm5bjkAVJrBA9swMA4TSVyrLUEVk5BVzPrRF6zsQpGTTJiLtVQAKkKCV9b63sqZ3svv",
  "key14": "258jNFSjhC19pTpdeQ7umm2xgAgJCvi4CxRmnVR8BwqJfKRJqcGNwchzMWKtmgsTn1d881vKVLNFU82MxgezTP5p",
  "key15": "2RfDW3fF4r2FSFc7hGwu92XeRymWs7mxhDc3cmHp8GdFVRGkqoBVX9nLkr53M9sHR8j3QMoVzsr152B33MannBnN",
  "key16": "VMBT7z469y4h6pyEp5xXB14QAs2nGKXDEsP2m2EbUi3jTFSK4La48DkX7F9jH4k5PNyDe644HPT58uWcEmWFe1S",
  "key17": "2j26cnqPVGXYACv5YiZ9f221nwHkJDxj5J1Qn8T4CMgDwhrS6k44CJPcmNa8oaX688k1sLhs1RnbdW18ypx7JjDv",
  "key18": "2vqahvfwxBXTbzVUWgpwvNDwUJvjbAKvuExQ4eRkk9HKbyYvGotP7SfceVX7s2M8DCrpw4fYY7Uy1krvRcBko3sM",
  "key19": "5RCUR13LJ6MZhrYCgbdCJv7JMk6TLqoJht2H7wZhyTEnXmKBjm5eFdvx43KVdLRG8J4PHrDkusRWczFVJQHUzz48",
  "key20": "3UTkRPkR8SMewh8td8z65tTmXpuhsvxoBDmkPzNscKBjubfn9e9fb2a5VxPfQMu7kEkWhQbFuVNv1wMKR6DRqtY6",
  "key21": "5U22BwdmdEYiTZ5n396AjafJaUV7AuPdvk54Zo4PeNex2971FiBVAFUGt4sB7QHQGBnD31XLZbrpsmLT7YoouLHy",
  "key22": "2xStY54JrQtgfgnr6rSZmshGnArpe2ZBEKktLa8p1oPfTdSWjh47ph8sAtRi5QLisFJXYfTDoXvCzUoGo4XNrtd9",
  "key23": "61fXaZGMW6qQ2bjYouhn71kETmCfpB8dfLPsWVKH8py4qkPjp4LsESKMpNXdJ3EgTLd1dk5nNStxpzNQRC64sriN",
  "key24": "2D9bMgZDJeirS81YojAGmsRrimgJaJNZxdUW9QPoVoYaRpjQNgQALgdhARoaosRby4pBvcJZvMnZMwKuQKKW5xsz"
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
