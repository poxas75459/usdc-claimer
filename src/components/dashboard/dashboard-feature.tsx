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
    "4MMMXCpDegqSQedksEq4tJVYeKQK9jJ6LbU1R6pdXcQdbyK2UPoKDZCkS8zU5SKsjregb7pNjZ5YS6gFZXo7KGFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RA2yMngjTHSeJhuz2WAC6LaNhRaXg4NJQRRag6FRVbBJaXxM5MHcodG8dJPaDC2qZiH2QWNKEuKDMg9otozGWSa",
  "key1": "53GSXwrgWKJtYQvbu7P1vHKo32zXPW7tVcS4MHePzEEDRuXYCxtMD8XyU19Du9FLohsUdpf9sL4T8f4hSmXEU3rC",
  "key2": "443yN1ieATxXMN6PDX4smPVw4ELkpXwXEtJQjX6QzemSjdYmTEdn738mgLZKokwS82BrtYxuYKLKyUVRmRRuTb3G",
  "key3": "4HCBvvBdzHg96VqeD3Zk1yaNVfstbkeqeDz6HUNnvT8SCv1wMSpFK6P7ryhuhxiUmtfwu41KoSAQ7wCaA7xuFuaT",
  "key4": "4UPhczBjxYbJhfA7pPDnMXRxYVZZ4z32WdqcjfS25aeGN772TbZGZJpwjmxjXFRXw2tsoT31XjLpPS3QErwvH8cL",
  "key5": "2sGS7GsWrTXx77r675gJd29yazSz7huvfppQXEmJvSgic9ZY4rL8H19rzUDyXYcefiw8RxYVhCKTwAzsafcMJtzc",
  "key6": "5xyVQ2tpTqMjZBPnSLrcK7tSveqeVgF62AYdiqsFS9M8BqZVXfpmXUUS4rS7YrbpWrLn5LQ69nzfmxJ4S3JA2vnq",
  "key7": "5V8ZpBuieXWaGeJATTLjVkX2gPHfYPHWczvJVujpSZLU7486ZmHXJkCQoJu6S7YiYhdW8aZdgUemm8AQyz4FFPMU",
  "key8": "3gvZHR6RsTGSdECmcWug7qm4ZfUAhtZVvVCyBjdFnGTh2PWgiYbKnSkLTe1fTQGJ743G1LSTpnwXJMPQCe7f7Tr4",
  "key9": "2pwZhM4i7TK5DG9zfVPtYtZP9AR6qZaVopKX2AZz4KdUbdfVmJznMM3P91vpiQxmCUosUastbVHSdMTiMfuZXMdc",
  "key10": "zWMSJWLReJhz8ukfqE4y7TpYP9Erj7LYXdQtC14xsxtb116bMErao6ycDmCZL5T9ZZhKEteGgAmgKXNRTWFCv33",
  "key11": "2MDUC1zUEYrHN389A69FMoYSrwTnnB9yXFZRozA5Z5Semmh2vCpgk29ZYgCG5ERWHyNhLR64kqEx9WKpGWfWpdUv",
  "key12": "2PSvmrXJV2LUoAnfymnt4NhCXjK6Wcob69qpqWuc8FudYuLhcziymaqeq9V74hFEK7PeZM8iQsayYxnavofot4JC",
  "key13": "4GxhDHqV6b5EowutK2kwjiJPf8dkSgZWQqL3ePEg3GfgvcbGQMYMWG8Hp8bbYy1mNoQuUQtfa8K436NFfRAdYVcB",
  "key14": "3TYgawuevZaJRZGTFnPs1NoboVA8kLtacc3pxfPcNUHX3rhYHuUJUcD9buSq9cVZjhkbrTSZ4oxbButibYbWayFH",
  "key15": "61XLHU9C8jvkeWvvj97cZws9q6sru2L8aKAQNANthGLX5toEWQo7RSqf2D3bSCHpo67T96XPqG11BPGBKWpxBLM1",
  "key16": "4JRUui3BvPtKjziQ81M183hhHCfteEoPaykufApntZvquKSWyHZKjxXxyiu9eJsUcEM1scdRqf9TqV6Qsn4YqAEA",
  "key17": "5p75gP113bFK8gjsdLvixzyYpM8H3BvAa7n9YaYG5ERvXEwREXmjz8Mf62onA6kowGNEJu9HQA6k8CXQs9V47UYW",
  "key18": "3AhmZFBD9FiPewmJn139wz17Xujd9G1bjLPgF79UFxkpcrgcF9RZoWFYitaBVjyknwFe4Xz6BjK53MD3DTZBLTmS",
  "key19": "2j65DY4D5UWYbeKTZze5u4JdiG2FAmTrKuoTKsqgkTR81xSqYE5tikHg95CkZjCFshYpCiiP2fqry94bMbF4K1Ti",
  "key20": "2x6t3Jp26LG5GjM9ujqNj3UePdSFWCEBeZesEkMnhrYQpSFQGP3CEXXA6tS5WNYfHCCfkQtaNnxQmdh8SPNH9g8p",
  "key21": "2JJgYzty2MCoNCzPTUFmQnvrHMjyNtrgGSu1YukAUBBnjqp8SeNg8bmKJkix2Ax8P6pPNY2ENybF4cQuv3vAVjZ1",
  "key22": "5WpueU8CY4iMBs4FV2DErpREg5EKisUwJEG92d1jfh4jUhvxvNzJQY7ywtYseaj2oe1jw45MtNvvxLMGgKhXGmca",
  "key23": "25dfTs2Q3RUF3N7tZYwiBB8gxWVp7D8pQkhKo4uTs8Etu6LB1kKgqYQsA6a5nsrQFHUxKr3Az75C224wobhmj35G",
  "key24": "2YBKbWUXxhRKLP1Rq5pMccPhDe5ZDAyf4bx1CeckNywuFraMyXgwfDg1befhRNCPy7ekdXBtSxx9WjikAGGV5b1J",
  "key25": "2Q5mP2q1gkXZQucFSTVmwra71deUyP8LYvfgPQnTGNWUxUbot5VRraTumcux1CfxyAQ5pazsSfbvABmBGcE7D5Hj",
  "key26": "4VHEh96zbaYNjdHxAbtHC7pEK23xFBDHPnKHjZ4d9yHPuhKMPKxCVXd78VRd4F7PzQEj3Mi7AYg6NVatJeJT7eD4",
  "key27": "2Ts9oktwLQvXsoxsZS97mpqNXYcZfw8EBMow4KQnAAoUoPF4XZiL3vATSTfQuy4NBXmnFAMmhfUPXMd4cWQ6GGSK",
  "key28": "3oaCuBV1qbiJwio4vnJF2tkKYPjVVGMsq6ojRUJBDr7kM35xu4ehZC1TgqT5jSaxJWMt4FarsLMoqEumJCYKtJvh",
  "key29": "34okcbBcJQjwVP3yC7Kzt8fa98fEd2moWmP8VoTzNfhZMSiQgrdsGSy9CtXrataieJKmsQoLeBfVz8iddqQoVXEA",
  "key30": "HbFZPgHH4q2C3Qvda2k6GazbEetp3h3oSxiPg3r7qLjJGCgmsLKt6YJWP4TCX1DmbjueFfiLsCJwqKBEk9KgyFR",
  "key31": "3ePMuhJuiKKfJzdY9duQTmgsUGoHFF3j4UBoh3NSvTFksowYNm7Xj1H8qsPBPn6G5zn5VUBDh24t5kKtEqMX8q71"
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
