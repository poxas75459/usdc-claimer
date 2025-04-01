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
    "61zzLD9fN52BucsXXN7w2mFpGhHTq4UysHicG8s7qqrscq41Sv7GiJYeY8uo8ZbCSGxMSYxRQDkAC5x7SQH2ic3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkJXBy5eQKAm1veXDYcTRKqyUPh1n7q5QEq8aA6e284sqUPQzmLT7Ye2PHE5BxNShXzShrKEwxsAWL6nYcJCaoS",
  "key1": "23x3JSLQo7FzPLamZzcyEppQtuuXhqvXEkWJiNiSchhLZ4pixbaZ35Y8sCbp4bSL9srbxjVzd21XVoxR9C7MqexZ",
  "key2": "4fX6mSxqNCQXujk2E4ADMhTmHbkQLRv57HexmiRVQutYqpZWkNWpte9n9MURbfgpgyQqFcbFuuLmqi9wK2bAQiic",
  "key3": "2GLVe6APHh6g4eoYq72wCi3qq3TY6tSEFcgoDnCo7TreMBxdfHPXH7NtNEGoQB1tAbNBSpGFgDNkr5n7nHYYz9Kr",
  "key4": "3ZUMV6MdLEnjZdRvB5ggZhGHXKKCm6QuiksRuXXLwkF93HyhbFGe5HVRMbZvJCfWrh2PgrtPpN9eXcquxn4hKffD",
  "key5": "5sy9SjnUTcci9vL4WdkSRbUaJLtmaZjZJGYvQBGfpMNKEF8DAn5EvQdqaVFxWjCczW1XRrqxjjkBTcQrJPnQvu1S",
  "key6": "833tKrfoax6gq3CqKtdUTDfSbVp7FEqiaZEwZPPrfeunqbc5fcy6JsFtu8fsnPPTXV5sghknSFKkKCJJs9ZN2uA",
  "key7": "JJSqRGmY1aLAnPSTZtQs6ThsnhNi3AdAMoTahLLF4TJYptLiYKkc7YkCUU8t1uheT4sgWCnLr11wycZEyrxm3oM",
  "key8": "27Jt3wzwgLwzbwoLrRZcngiYuDkBTrYpjUi8dtMQkNT8ZH4JqFBKaCnzCD3BVwYD5Wc2CNyEVBkinsmFBfsMqQvT",
  "key9": "5o6fVnFgigQkcGwKRfaJCTrNhej2oP39GaSwnDEtDj8TgvDZE9vuH4ZVKkhMz6xyRspNGHw9sMFsksyTsRRB3K97",
  "key10": "3ykbYDqXrBVK8kB197j14CnZqhdDCgEfCJzRDd1iQNXdnBWsHXQGsDBqr3pUy3nZ9muR4BVFTbgoTUAmW5jyX1St",
  "key11": "5uY5axYGvaCtkeSC875YrCyWcRDBuN1aUFAC8h8VxRRW4z65YXHh34re159KkorYaFdy18dmHmkhYxZzpy8T1qRg",
  "key12": "FX9TSYsCuNUvz33PoqD8e2L1QtdK5RCA5Ww8uJHn2qXcGG56QoBip6LWuJERm4oQoGjkP5Pr7ujRQF6cutk5UfQ",
  "key13": "56tFjUpVLKuV9gQngXE9xxa7dTCoQsZegmgfiWXvFjyFeeXakMiR7oKYLdQ1BGHw1ZYZBhd58L4GnaLfevDuLmX4",
  "key14": "3xTkFdu7x6tBmgE8v9eNTEX9Xc4b7zr3PFtzNRCY6qMnEMDBSXgtYoLueX2uuhEUcrmPwAwnpR4gU9Sk3cXKPpJT",
  "key15": "3bFsY42y38ByXnvdAjcMnQJuPwFGWPQfxJwWyxt11MKvgtc5GekRu3oSEQuMpN26DzdWBuyNA8174ZzUAT9vkXap",
  "key16": "5E5kUAwgq6THagvRGsCroJvH6HB5QaswbTgN3DUvvj5AXTN5t8TmgB7SWW8fxwwDNgC8gFQyvZmQXEkCEjbNu646",
  "key17": "4BforGaA7d5NPtYj1LQz21DZeGrxrnAqVtVf6UBjGjRLHQx5H9pWs3JFphDyvuSvwvg8nfArNrfydUpPTS4B1xDd",
  "key18": "4EucxBZf2iw6seR6DHRrJQq5VvsPbnQcGQekarAVgmkjgCq8YN6t3sU6rt3aaAsUh8ih5aMSx6qhT9kdhaaRbAvN",
  "key19": "QViuGdXzhKGYYSm4M7bK8p9uTb8D1xfqAzzjtozqz4Q4iWsUpfH3qDK6UdA2UjkaSvJLeYsFESsiYFMPr9eFnBU",
  "key20": "4pZRAifwKSnZjurSwB6sQdirpmzvKbCCdiwYs18wfLFpVZSgX4hsWSfgEjiVzo4XS9awuFcukNdZZFgUAyrQYq7M",
  "key21": "5b14BJ7ercNevyq9cu4QqbJy3swHTDBYfbPt83QiN8PHWHNqs6SY9oFmnYVZjbBWKVBLdVvVGoLJJTCzvUV5u7Mm",
  "key22": "3p7Ku9CfaZaMhED6YaFg2jYnBP5sCgjL1wK79kbtqgudmdqAJMKabSNVvRV2Zo9z3pSWraXMcAS7RJGd1U8C3EkE",
  "key23": "26PRsMgBQrAjxKd8NBZmms5FPCsPmadmxbzpD8zzkt1b6XnocxDrfB3pEqdREAwJddioQY4pUhKk9Sg7auDtpwAc",
  "key24": "64nrjb1HzRfCY2EMHewFU9TfBFJzhgGbDLWbazR4qPHTsaUYpRpW4GwTFsKgajzWBnbhoyzdeU5B7H2es7qVRJ44",
  "key25": "F9L83W8iB9bACoXTPL5wEgPbxy7cNCPpy1eHx8Vf61nsEmdgZ9bUNF8SmggcijCdZPZLcsha771SkK13bgQjBQ5",
  "key26": "612GQkuZ9Bfe5jMUf4gYEr9gPEHMPC4ZTygdgcHY66LKH6tzZpFomdWLP4rqShHfTL2QvxS2rUSkdvWQxnunUYmT",
  "key27": "43mw8XA6QuuKb58yzjrEaawUGzcgq3Jh8T3mrBsjQyYQvRXbhBG9xvmVVVyArzWEJrG2qPGnHw2WR5VRgA6PCCma",
  "key28": "3Hkk4zKoY8veuYT1Dmnx6rWq5iQpVKhy6Nc4h4vSwGmmohFU1vMhtLx4ge9Vw99hMemcx7PrcHoke6tBew2J6V5d",
  "key29": "4WgSAaNv6J6nsU2k8DwZ7axq2E69hnSFdyyU1ntXq6rwpsFXa2Cn75ceLFQjkh92Wf6umHPjkUdmqfz4ARdckiSX"
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
