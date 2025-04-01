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
    "4UL5cbpxPSaKoGPe16ePddwTrF5rMK96uC8jVMu196SXVDRBdQZXrD6BAwzrxuxwkgG2ERahTt2rNp8Z58nK3sWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ9xGzJpdF9vCXzYiwpvm1HbwDegrWL3XdLw1Ueu6sSD65Hum3kBpNcwTwQWbbhS2SB1RamKTGpMikpiDnaEW1z",
  "key1": "2gDQkZDTB8YpguCNaziYsaXNo9RyX5ykCZs4Bau6ZtvpweAKW9sQ4oPXcnS5mTFzV2sBuedRq35sbad1CYgWFvZQ",
  "key2": "3RzC79VRuU89Fr4qDTJ1vXVA2feEaJQad9dX4ohqeAr5WdqaXQ2P8UWK75ttVTKa9GnfyunjCqYK7kTztrmLf3Gx",
  "key3": "5QWLx7sNnAJUSFyuLHgFQRWFJxNTK5ta327zLVMqQDXMj9Uqzb8yFQpYsqJB2KwtoaEGD4tyusynkhQMrEb9ATgi",
  "key4": "5u6g1gaTuGu8zqEXKE18CH8D4Vbq2DqHKtUjo1X6pvRy7rDHfKbCfjMvNEsZhBBq5xKHQW3SXJ5xhzfTwxgzzcWy",
  "key5": "4cMuUTqUX2gh5AKkqKEuSYziPBbnHhPDgK7hDFEjnGFAZnUz3ksDJ5kREhSTWBSCxe3cwiNXDhmsem2trx9aHBTa",
  "key6": "2jtPc1qey9DpaTUs7kPfBemmfNJZzEwLGjvcu46jypoLd35x5oQhLgjcjYiarezHocwqwpU91zq2K7HeZi5mqcg1",
  "key7": "5qHtGq6h7h6qJBaQpeWJSyS5rP1iPmctiyb8ZQbHuRf4zUnvFkffCSqDyfo83cRCi5P4kXgFEzuCqA2syhJJYWme",
  "key8": "itgV5ZpEb3sCPQNYBngJ9Q6K1qHMroYHzS8xEwLXGUp65i7PvsrpKJKCd9Lzuk5MnzBUx4hNHNNjwrogZuEbZMi",
  "key9": "4qJjFuYeiTEKNCTT2kYHgiyBgNMWNUfRujTRMuvayvkKGo9t2znSHNaHg2EP47zis6NpXaCrqG5CfsioLaQmfDU8",
  "key10": "2LR7ozKLCVS517F1E1M12dEzcLZjncKZCkPYJwzjwf25Q54KPRVRRRQD3Kuacc9tXfKXDQAM6EjP7AVKXpPaqdYx",
  "key11": "uouFypHPeooMouVQxECUUxd9pvXKoxDgvdWmVfHg8sqSjDFGQXKMESpGcsAXNSHWWqhDVPgGXJxMZ7BM7R7f7Zv",
  "key12": "2RnHPdV4ZWcKrVbGWbEqUoxEZsZg2rhpikVXFtw7LBjgnm6w2TS52hMQEb4iFeqMPGtraTV9UoRj8jtnBD4oJWEm",
  "key13": "Nsa369JfES6jWjsjNSn6QLpds4T9U7XeJ6RJSuoVkJyBU3F6ZFjZvfr6nYwGFAEfNpGeTJjH4DzYQcSVEBkgCf7",
  "key14": "48HwuFLtLePZxwBaGQJ4yVN89YfWh7cG7RE89CRDhVt3pehipiKsExfgUqNCZzjsXyhHZRT244RZFnryt6uUG2BZ",
  "key15": "QxtY2JMyWZ9j9FEB68EARsx2xxhequBkiaAFAUQaZpx3xETg3g2wsEzNP194eHBz5kNKxFYXECJ7SzbfmWbcL8Q",
  "key16": "kYzGXxpva3QfwYYtKyFGy1sy7htQAetYBy4tMKd9caBCCHmJLxYPDYz6koTUpPQidKTTWGSLay3ZU2PxZGTsMhF",
  "key17": "5QD6oGKkTfcoNe5A3YMKSt2QErD1TdMubXcsAGdRNm9Y8GFpaA5Sst514KteTjhKqLkkaZPfDnxzYDzWxBQgR5TL",
  "key18": "2m4YWnUy2vyr1gXUy1TZiAjH2Xa8Vc5miHKwbV2EhHsMFBpwncHj34fsQPNHz5PaEZaQBgA5SVqywSXn8eA53bJb",
  "key19": "3a7Fiq5jGwDCz3E2joutr9EkZqhqHqegs52ZZnt1m4avMhaya2fU97EuFyYAGPqYN8WzTRev6RsutK3RUXNbZgv3",
  "key20": "5ZrkXXoSb1ZtoYjU1YT7AWbWa6488XjxvmTGSbXKWxbWxHQd3AkAw5nWMfFgXH6xSy92EQVRgoT9KZzRqjmT1zXu",
  "key21": "5BL9o5uVmHa2fdpgDhatcLtQbYd5mjBjk192KCCsWyn4QTLnoEh6mHamNbbfaLceNCmX5Qre4GYG94uW2L6TNuzU",
  "key22": "3hvF2oZWWjBec61yqM1swz1NiyATq6x1tygyuPUuLAa7ndpTWx4UxYxF7krrjHmZXgCLNhgzJG7wwnmHXb2MFDqG",
  "key23": "3G1iM9xBvVHt9V6rQcmmpRPN2p8Znx8wT7dkC2c6aGiF2sK4cfYm2X8pgCoRkv8L9f4rZxbqRPPRoxfoHcZejZKx",
  "key24": "28qerpLsocs9G9WBzXvTDHGePghuiBUAVUHAioiKEQgxJC3iKAk3gzBMbwxMz4GA4LZYtWpFUPBuNexkr1apFtSk",
  "key25": "2T2je9DPzuMSbjEoJuY6S61SZmJgGgkTfME1t7722xeKVz82H2sLvfKL58aP4S2abj77NMnUjpF7ZaXgqHyJjeVP"
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
