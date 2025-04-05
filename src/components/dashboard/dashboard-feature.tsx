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
    "3K5orFkZdRS4F8HZKEwEWvC2r7E3pngnvAeix9txANCxyDzU4UECMwwLhKHseDHdYqwxGd8rEuPMb2UcrZM7ZtHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62okwRRkRzeysMKcV4bio2ZJLkrqg2pEPdrxPNQ2euEBG5d3Y5p1LEn3QwdEE3VoWq3NoWJrrKKFke7sR25d6vNy",
  "key1": "5P6JwnoYbE72Zoj6gNpJY8i7kt63eSU1FDuJXRdnpKtN9YmzwLpCFdxi39cKFNysSma91MADhxuGGgDCUfmLjfTt",
  "key2": "4N5RZbnB6VzUxsQMHayAHuABcgHSCUAwo5QqGwzDrvEfkVt7uxLioEmDpHrH83CVm7W4nuXae9JRpYL9FihzLaFq",
  "key3": "4E63DRy4tk9dCTbA8cx8gteXZ6BuKEH9kgaxSUqb8z9Tdzv7gYaaRavcavQGVda7e9p62BJTA2fdPufojcEQ5m5f",
  "key4": "4ipjnx5eM5XxXmoKJ1dx3SoYCd6QjWt3KEKy2BHVFUDscDFiJZ9erQ6NdvdKv25uJeJcvwy8jc2q47rF9bKGyzDp",
  "key5": "2u59oEwzWw8btUXqePEVH2Ln6VbQib7t2DPXQE3iScTjwbm5yVw521spRxgoPBrLyRTVTkFCbe42RSFD8gk5m2rA",
  "key6": "57egULgpJAdMmZ9EVAMKwGpJUTCughb6ubiXHe1Xm2LTx7EjqspS8w2YrJkmBTQQ4cWkoGR33Q8vnoc9RkzgvLEp",
  "key7": "3y8EJKbaD5u1hCZ5snGZuhgpwtuLxrvrdeKGdmqU8ysJRCCXzjzJfXLs1d4q4pbweAKrj7MznXdyDLDGRfC5GJPE",
  "key8": "5D9szxew3uYzvWgFbBEhu7jpfrsNKQkrUWjxjsXqYtCQJn9NUTyS2P3zw2qZnWG5Bbck5Foywkh66guX5vZWXAxt",
  "key9": "4Kvv73ij4nxasJ9p61ucc12ttHh26XHQ7qUpBsUCKutpHJQqGW2CY9LD7JEbcLF6DCjbpK2RyUnGBKLGGz7Hv7CL",
  "key10": "5qV1RZdwz6NazA4qiHTpDTYrkGkSgBJ9rKJg9uHmDHzQ8oLLP8vgrbVVcDjgMWCWYxP1Kjzf8tRu5NC5jbt1qNx1",
  "key11": "2qHFaxbkY1gJcvxYXXcrHnhsfDQ7HtWP8bzH94kQawZBbnL7H5yCMu1YgxBvZXSKXoG9uYPxysU66icdKgrobANY",
  "key12": "VLcPUTwrtVPTzPRcpeJQi8isQuaUwsnjttGDkfeGB6FvuxD1b6hnJr8WRpzAEUBW8XJjrSyJJ8CacACZLB7sJxg",
  "key13": "5rcwpRmEVJK2xAWFzu2VFzbMtunK1vUgCS6qTys4LvotkovjP6Y2igx48TPaDMG1fJihM3QSYMpuhh4LgFtjdbei",
  "key14": "26YYSDBFAEdbz8cXpmLr4z71PfsNY3xsExAY6WKMbsRq4TzPeeZbWyvYG9XLAbkhUeNStyiXJspmEc4vhAeqJwWD",
  "key15": "Djhpp3FaAmFCdLejiuW2zVRNAEyB4TetrtKNvn8vR3PeHJ8QJh5MwbNU6exujFCJJMc6heVv2nRszyJRqFghkBh",
  "key16": "3AUe9SHoMi9h4rEsHVYArvAKDnYTU4bJ5dFqCiEna9SUcUFMcSUv4xRF7H2ULNbAZXvHRtf8rWt72STf1tiZ7vJP",
  "key17": "45DobFT4abEhDKSdV53vwyNpmnHUqyMvjivkVJk6CWyRaKi8CsDn5AHWokL23M57v3V97dD11zhYJHxHBWF8Neh8",
  "key18": "67SWnyNYVteJ7zuv8D33EVdKZEThHrq5r55QfE8cUYaHMEv2zgT9hc6XQT4h8QS26HTTrNKBvAtbaCgjpDTu9gFh",
  "key19": "5EWTFfBCRmYqRwqFEGMR4NhVeG493kXZwfjs6Pq4AFNG5SVmsnRmu8hspg159H3vGsdY2jsa7FUGvSuCT95cEnDw",
  "key20": "4uc3LQsH7C5LnV9RhW6JGfVgN1EyhmHT7hj5Qsu1VMj8BHhmAQT1bm82ukoiBP3iqAqsboVwvRs3bNP69kQS8UFR",
  "key21": "2hHAQJX7FXhmsX1Gmv43xvFVNULmPLUNma2dX6XM5Wjx5CsavnSHBsQDLJMY6SoVoazFZ9QUwYat6gdqKBL6i5mY",
  "key22": "2F9FhUMLskQG2Eao5gSdukfUTham6B5qfybXA2qtEqtMbQzp2HZb9nREDokdquaTjP1fzWiU3dZ6ZAwLBeCMVFz3",
  "key23": "3iBVATixq9TSHKfwjfw8Zj8s48EPsVqh1xuQp4w36YLPevXuF2QskBYg4XjnVT2rHkzQrfHGGFj8eEMUqAf2WuDJ",
  "key24": "38pGYoMLALdXi1VATymAhSGBoPUqd1B2GwuZ2k2szTnbfCmuyWuioucF4RZDx88SXFbuUurtWiEjUzbhQeGU29QY",
  "key25": "5Eu2G3A7boJ3rjj7KCJH9cHrqCHBAxqBuUezKAtkazvPer7iW6ohG4KAxCwSmLP2JMqghArD7y2CW4E5sKCyXuBd",
  "key26": "5z7Beosyn1GXpcW1Pc9hxgrnyPVAJpMNwywUCavt1ezmP3YJnD4FgurKfJJd9M2MRxnDeToZ9mhwUJHnWe836Aau",
  "key27": "2HSkJKVDE4ZcoEgHwBPzsbaU17dhx41xxF2P9aYBBtNKskS2ErEsdskay5QFaG664nXLSUP9QzVFET7tPQ7AQmwc",
  "key28": "TNRu5S1R9AsHM1d4oqV7mSYrH8ArY7P31qr3r2LJ5zv4t1cF9SWMQk3JUTkQhfttBT2aAqFbqKdeDV2UiqACuHA",
  "key29": "24VRx2UyncpjzWeEzYbF2icaZm4PjpQcktgxWK5Jxdp7EZTeki9kNnAx5L3rjwqMzmg2KaSz3F9aCvZrjNwwKkiU",
  "key30": "3TJ1cFgntysj3KbCV8jDgdSmE2hyKxpfBCJRUnjw2yuSxojCjzHPPbLPhjedcgN5dqimyVSwweyJULdNpaNTzFMQ",
  "key31": "3PPacdZ6vzv7JbL6v1uzGdY9QB7bqcH6EBSniWwnrgUZz1Fh2GWYJySC4ytipiq7JaeEBuRp1bau1xsiZh8mmAZm",
  "key32": "43JrgdE1VRWD8s6LxZNWgcUmS2geuJjDbZCygsevqhnoTQZbq5TF6yqGScC9GGQtsKwbXzxmAtdpphdxfpRnXbMa",
  "key33": "3fmfDU74zY6anhHDPCd7kYwwWjvJAo2ZtEX8gTMxKipm1mgJNN219phfiFN9EPKxMvUKbGXEz7G3LsA5TNh8AeZm",
  "key34": "53SpisosMPzD4w8FxiN78aLNAVG4qVdaoDXdNrzxJfwscT7hcamSj9Dzzrusc5k8nqo8tH53Dux9Fv1kKRtb8WEC",
  "key35": "4C6hYU1nFzAVTZrQjh4VoRqfdkw73gW2HWrxJ52YcvXmL68R6Cvkj9YRwmYR7FAMB2SFzEgfRP7BkDEwCHv5XefS"
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
