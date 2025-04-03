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
    "3BTEZ5snhJfS4Z3TaS1kiqhBBoYu657LcnbRG8QXVfmtPbZ1kCjDDR1FHSSfFGM3ykfogeERLyjYzh35JHxxBqc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38a95U2Khcm3EW8KW1aVJAKaNpBs6oVRuopyTzoj6fXBEkpSJ3MoSW7GCEaPCK2qTvjZZRw5TZ12SSskQseEFQmc",
  "key1": "2k2cjH1P2w2N7eHcLyyU6UWa2zrvBATRkiqVUMb3TcKLUNuMYtda7UYiGne7EaFPXxcirWK5Wpwb488kYgBTVy42",
  "key2": "52MsSQVcyeQpcL8QRPGYMBTt723oMNZmWEutMWX25CZx4ooqxWZtdCQcdyhHXo9uj3R13AiaXdvzDejw5JSAbZxR",
  "key3": "25whywTukDe21a9aDN9rWeV8mYvPaVTWzbWkBptjZam45BFTQdBT5qdKUhdAHSA3xMB47M3SGyzSKfp2Gq7YsGsA",
  "key4": "57Z4yfERLrr3Q6cttjbtvSkih5KtAXw2nppHqS9zqWwEfSNgfW9g5ZChmQW1APAHiy7JoZasza2H1L53D38r2EAB",
  "key5": "4B9UCZMpgcZAbQGLVYopv6EHtVRqDdx8RLCAUVFZ1amcY8egXodjGL8rMExf87DDA2mv8cM3CU21223nypUwU9UH",
  "key6": "4hn9iPwVKZGqbDRPX16BPTnQzMurCnLfXanwCAPDVQQYwSf7wjq5woenWXNzk4jZ4uxRXVW3SFBs5q1rE1FTEQsp",
  "key7": "3LwaeAz8Sz3FhTGS2Vg84VbXtu8XCCaCqe9WEUymDhY5qyF7yxNxJHDxjnH3MGqWU3GEJmYPwkGwdjYWJUkRpguN",
  "key8": "653vn3t3KkVGyvLtvuKTcPedxNtFCXAzgNQTztFmnUf6zssSddQwzMUAZKuT9Qvyiyetz8D28xyZ588oHB7fpWba",
  "key9": "3S26YQzzJovhFo69wR2hVsujdUVrhQ3NshwhxgUi4ZsMf15sDDWu45UZyrumchjoBMZK1PNyofQfbFV63RjRMAU2",
  "key10": "2fgM9jfzdt9QhjWrv3rm6NEzUQQCTst5NQ9e1TcysFHk9Mv3QmoQYUjEyjrKtcFVYxQajjtcg3bobpjxGVanjf8Q",
  "key11": "5xjyvN3AZHUsBk9h4YZPrewih4FHzKJ5EC95GgEm6hnSGVep7U9m4SHP2yJn8nbDRvCYhiaZraxbGwX4jAxY47d",
  "key12": "Muvi7K8BaUqNdnVbwif7u39G3djBgrdF6doMsktgCj9qQvc5SEzoDN8gURVrB3z1HvTkPNhZ7eLBR9fR8yF7uuu",
  "key13": "4VyjnSxCtRBYxV6xwYXxWsSFDpVhPM1hHRkjxRhqVboVkRCvyJJS7VuGADH3NbyPYPY5aXn82X8oRGBW8R46D36w",
  "key14": "4YRgKRUfweew8MfgDjfaU9PyqNogZ9QJTuHBr9jgNbfabXx6YUoKZ6SNX2qCSx7S5kkJM5qyFHdB7hH451zuHiCs",
  "key15": "kCRd6TVQUf9239RrML1ZgxXt8XY6NF82vD7juGipM8qyUxx7BPkCtSSBDn1XojUifYDPhdkn7Jxeqxp21ATMvxd",
  "key16": "3jqPxATwvNLZN23YVX1d1pMpwxDcL5EQfY7zJbgKSar4qY69wS1ycP6oXukXJWukz4aHrcrR9XeiBkTLmaDziNti",
  "key17": "5aXbqVXjRZThxR5NqTNb1duEapKQFU7pCzTGyfbz4vZDXNvrdqHvx6pgdb653sMsf95nMywsb2KSGrXTYdBNgep7",
  "key18": "3sAxczgxbaMzrT1zjahrYvCktSeAPrhWV5xTTbCq8rkqk8CgYJQKtETPmhq4ZDfTesHa8g27fe4AjBKVXEtTsu7x",
  "key19": "5BhfDrjdSJswYcviaN7U5GPSZYJZQQfgsfHGeGSjrK187SrcAH7kSuiPWCfwD93wSkbzPmUnfNQwdfuYmv8mqNSc",
  "key20": "41e4m1XDCKE7kshVXveFWpzzckdivzMTuXGsuvhxkLJ3KRDqSwajhTscAoFcu7Sikdp9DiuHMf1XZy3CpMZcU9eQ",
  "key21": "YeFTqDhygztoqcbJmGdhGyRD9tqvXNeTC88moeREFkpztY9Cpj7K7d8YRX4uiHkbpKiSh9d55k2FunkNzbNN82f",
  "key22": "4s17eMkS8SAbuSmsRDyNv7AnQcRn4dJ6Pv1dg9YpE96qBuqq1e4Cnx7GxuqSHUZamrXUVAMZAFSk8ZNUVof6APdX",
  "key23": "24nxmaxQZiGKToqRvjWqGdbaAM2L78LZE8Yj3LWVur3o7A11aUDmLmHGkXKoFLD2mP5EKeZ1Rc4SP78re4CvfDKo",
  "key24": "3tVjRHa1MKZUTT9o1F56S3tSr2ZCMgJzQA1GXw6LqwmgVFQo86cesCyRGagwjXGJ8Vw6yA3iwVDCERoLTGVnv7ms",
  "key25": "34m4cmfm5dbhnWmnM7cwGRk87yzucjuNUfEvsBzvZEtG75GovQfZ45MR2461cShrcFJVeXD28CJt1yVsj7dpRnzS",
  "key26": "4dxTSeWaR55h2mSN4zkKK8QtbuCyxu2yPh2Mhhg6F3frFJ27XwScqTZQkENHvTZd4ns8ZXVf8XY5cmwcB35J7arN",
  "key27": "4sW6JRdSTZ5hCnseZ1CCnt878oK4hpePtA1pFSvbHBQAd49uVj4CHYMFCkB7gcfbfkSCywmrvw42EHujMRXrSkYj",
  "key28": "3EZnbNhJMKzTLnQuyqtBrF9CkGxju7F8CszcXq6LQMqiiFraayqBZBAUmnnQf3yeKKbcsaPoiDm5MwNo24kwvy4G",
  "key29": "4Qq9G1L1t25L6QusrFf3LZTWEr6tb1odZYVLGQcTwuZSgdm2n9Cre5NNkXzA2WTW1XziVJpQP2jf9rEvREXLndju",
  "key30": "1Yy2Pofn983Ee5s1G8Bxoj2EPTpPvPMWKHqQpZwijVGT3eMWfcb4BsNcwCkntTFQcMpdtjBZbfZ4NNgNnNWqqao",
  "key31": "2biR2rmgxeHShnQ9PsDMSMkFiZpRwH342S47H2whMPNnEnqJTWrPTVqkRwuTNN37Afi7nRF2aBZSaqaRRoHff4DB",
  "key32": "518qEfCnafQ6mNUKWcLN6XTwD3tNf8LMeNt9LFYWT5nCecdu7zs5LKS1jXBA8q8tofoehLj2jx4HwYiWbVe7Kxsk",
  "key33": "55Mf8To3GNMua4pxRhU3KmkP62WPUwPEoWyugnmp6SgjgVqAMeyK6PG3JZ8nuLV9TxtpKaNtjC22gLHB6GXNt4QB",
  "key34": "63c5enbWGde7AUtBfantM1NAHpkX8cAe4861vgGmgNqnidLs3wUngXCfZmmubWwoYvcRjRadJ8mxENJLRRAnjNRV",
  "key35": "5nSxBiDAYmK4tcNaCv2i41UKsSoy1E9s9kBxHSFip56f4CqSjSYxPboqgnFDtXZ7ABqYdTuL4qYHyYjAuUnvKQ1a",
  "key36": "66TQ8NzhxJNrp6DWykaikeR5huLUUwDgryuiDWeU8KnzXKL6VCZbXzcggPRurijKHg3CrjeNBk9p2gQSsD6DEskQ",
  "key37": "2TWXDYjY6bWnaZ3VhWWqpEPWDgHD2N4kK3FQMtxM1T6nd7GEHnMxTrxMAsENQsKouWRh5YcSdNQ52ZaNvr4MnYqt",
  "key38": "otk7Cnm41fGrWneT7AB6ajYZwDpBrKo19LXEaR27MnnFbBhhwqWSwx1AZCE48fYK3uF4Hnmd9rWY8yTJ5UxcL9p",
  "key39": "4x21nU6uyM4UF2UaneCd84MMH4yZtDqvC5F1JZdSRu3Fco3xBQsuBRHRT9Xj78xGFtxnxE5YG3CoND5TiABCx8Rr",
  "key40": "122RyQkdSQ8zWrRkEcS7jn6N2ejk1uueqSZTcytaCZgN3CSHxv5MPSYnWVETGwCnporWHNpc4WvLt88L9xk78H8K",
  "key41": "2Auz3LFyb75XeJW3D47Ez7GLwNumHMqRXgDpUctyxyM25hs1vhAiseXbYTp2fNsBAANXxKHSEGMbGEEtfxD3wKBy",
  "key42": "JgTSmMBXoZfVtTiXdtyLwuwJmiUgPy6YD58cAeB4C8tWQnbLyEkwWbbu8kDQsNwZR6Eg7e4WHkvBWiw8RAuU4Sk",
  "key43": "5dHcK4XD7uAMNEWf4z71Wch84za2hw2hYcDbGvvPwobRNXz1MnLjRwxrrvbzAZErjtyLjLrKBsRus6TW45ShE2rg",
  "key44": "3jvuHoSz9Ky3TMAPuSdMANbr8yUgwkMoPNmqPxHuVjXQNsAtgRFQpZadvTn8RYojXsyk5KL2AUBEC4VCCaVtZ4LV",
  "key45": "pKogxiqNiB1uf34XqdEkXZTSiQxMqw49UJHzyHdappneRTHBP1NHCxesxXRMYMXnW3oJ9a1YQhhLUX71FumuyMC"
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
