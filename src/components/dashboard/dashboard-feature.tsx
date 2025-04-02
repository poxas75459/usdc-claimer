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
    "59jtw61UaoYmqNf7nJCkSCeVxYKxCmwpn21U2tngq6dSuPjmSJY38bLEwEH4HspiJMA74peZgKP7W2Mt6hw5c23w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lzod6DEs66ZZdUU8vdrRTAcCj2WQNHcXdSm8q2a8oAUEmbUR5ErPaPd6SjAAvE4WXHEBYcw6BC9QKQncqXREVW8",
  "key1": "37bjGJhTK2dnbrDqfjPpeyawqiin5XWjTURUGEVNfJaoMA9TMni58BDwzTTwWuaCJtxBQJ4KRSG7icnV3eKqrucM",
  "key2": "58goX6fWecsr2QBeQAXsu276Z9By6UW7BcD7qe1jt4TTViDGnmG11iS8TUXdioHojhKbYYp6NSsqWi7zGqtG2NY1",
  "key3": "5nPLsaKgDvPtRrcgGSAE7JvC8wVBKnQ9YQoGLRGfRAGMWhKhCdCohaah3Fo3gJoaSENhaGN5ThVfBvRF8hf5z7R9",
  "key4": "2QNgrBM7QxVfsFcPyVyDcvhNbDckJh5A4MxyFoPgRbXPh8pWotGspHMVQor19gEUiWnMTo9ht1ajuAoJJMPFG9a8",
  "key5": "3Z7MCttaV3pfhvGJp1RfsB3YvcWeqifd16kGFgDgpTTjW6114A54jcaJJ1cydpBCF7dpZ9oZUcY3bKXRCeusKMnt",
  "key6": "2fW24Nf6TmnkS8rBg5v9PoNjpD67cFcERRfrGsyS7SyzgyX6RoHCVUao67Y3g2HzK4NHNFB3HDUmoZoD2XxHVjSH",
  "key7": "JCyfYa4bVpWZ2mfyNABQMBV8hUZYSYLappja86zD2TNHULgpHokWDF9iWbEtYqXcrEDrVMGBbQs6s7aDLEiseb5",
  "key8": "2uWHDgC8v8tfpDzCM8NXYibqTj9Lhvg2gD4JsFi73YPuH2R9jLT2uSixcgXr8WseSk5GwoKVFwHLDRAtt2iMHYRg",
  "key9": "5pPb8969h5Wi4PmUUB7wveDLQe8HJ9eJ5k9nwbVJWxPTKaqLMG9EaGEXHp3CJrWvjwP5ra8yo1t3gM4NJoX8CR2P",
  "key10": "4SNBVBQJXBrtQxvwW3Ni7jAsFAKRrmh18e7GSJvghEZnGtUKwNqdr5tNnctPuNfpDHb9V8FNTTUo4YhxzTJPdQR2",
  "key11": "4hNvtzCC6NM6gRbbRvqfgks9ZTBomSphy9X2BTBZ7cX2AnH75vGMdEADYFFB3zy1MDoQuBHbKF7n6kxssLPUFm24",
  "key12": "GyEDFUPZn3LTTRMvXEAp12pFTUft7czvfsvmhJqteTbuteRYLqvG7eYhzD35uQyjDZU33B49TMrFR1EZZzn1huV",
  "key13": "4Q1rBzaNM5Jmj7eaHKwXrUCzXGnuqAH2PhCpj5SL89rXEPD5Y21cixHCGFsqaWsH1TEjcuStGeT9LwVycwFa9s4s",
  "key14": "51ZgaJM891ww85fPhuhrmQB1kwAJnokRCnrd2DndMgJiR8WEow7MD3P8JQYx3NAUjSGDCtLSmAFcuhqSRUUpRU1y",
  "key15": "4N8rxe2UFGu355Rbm3uw12yohzxLPZ4NyPTKwemX7VqHha4k5ZmTLznATtWQ7Syfr2As8EixbUzWX1xz7Gnu3SYH",
  "key16": "46M8AtjqS9xLLhka3BtG43MXvTZMjyXmQsDcPPWGkXjGvcSuzYFubzGJGjGka9HTKt5CABN4YW4e1unPpEDgJJh1",
  "key17": "5Ff992W5BP4FvrTAGwLMSNvrYdJDV1dGQqUHSqFvRtwvQd6kQqP2ssXiYc8LUBBthCMPbqo9NoRZ74VhrLXZdrs",
  "key18": "519mWUnV5yYQ6g9VVhNb4pErgxpQkYDQjWLStpeFtT2raWWsRUXMmzbMhbDDSwuv5VhtQGvDhcuyaRFQeYfdiX9P",
  "key19": "4fBNghegFHV7cb9wuUBCcDNEFbdcVdtBYJmtotwojY131W8oFjVYgZ3L5GmDAJsFRDMFJo3oHLj4YRSzp3vsVH4f",
  "key20": "3LnD1rTxmwxEp7bJ2GfYmp6fhqY95GMNKPxhbvJZwfzghWoSkYtFj6dGKH1bFDtLBvjr7Yk9k1aae2eoXpJyfpJU",
  "key21": "3fFbteEx7XZ4jWxw5RPQNDUtFdhyJtWskEMDi5hLM3LNq8EbfQbicropQATmzsY996AGH8EmLwGhV2iZKoGEUcrs",
  "key22": "4Yycv97CAN6YevDp2S3DxFpK73t1epVJVmxm5MZQTJ5UpXFRWML5sxHNjykFmAmAu15okrdwEEKgnfXf76NXJZje",
  "key23": "5MCpKYFenBHu3HvuWBeKbvqHrZntyuBvyaH3z4tuhPHEitYet7jnB9LkCyq5AgTuQ3anAKxnuJQ6NKRdsAS3BLmE",
  "key24": "4jwZB8awRdXPSJvJbLRStsJFUV4a2N3ADb5cJsRXcMjoGnw2bqS58aet3GJiJLNyAa9DdDpsfRuh1GQgDhPtj4Ba",
  "key25": "4sg8CUiaa7uE1rHY6AZr6cEMRq7XZwXxGCAuddv7k86PqwmDBb7SZfd4VS7JSyaJQVymAxo8hf81ccir84tgYAZt",
  "key26": "VEZtBpFF9vXYrZYJacmE4aD2AuoedYmrHCtX3PM5Hu5VvfSP9T5ZiQTWsfPyc5chbjxSAtHF7auHuTDHU83deRB",
  "key27": "3kL62jqTWBRjkGkC5BdBSF2yWf2KjBfNFvkcEHUBhWi55sMAMC4vyiVxqtjTAmQfmY851K1i2WEmhPri65yHwDEc",
  "key28": "2hxTa95Yer2zsRqYBBcE1gCthk7MSX4fp6tdFczrXgP9FFuNooGWCMHzvapttH4dRy4VX77VJzkdFHTpiYaEfPY4",
  "key29": "2iTcfvYysbztKtATQSQWLLeMQhbmv3MKrEKHpvvRjP7dSdGHQPj6BK4msFmH6iJyyjGKyzvhAgR9jwkrQEqSEh5g",
  "key30": "4hewSLhDM5ofhWLFJR5R2NaH73bSGWcSXWEAVvjDRfURyBBEzGshZs9JcxHDNi1Eztp37YTaGdBtKS9meoWiyx4T",
  "key31": "45yjY7cxWUyFQmMnF9br9Ns2cttWmEkyi9k9XxPdmGVig8xFS9kCVsaidJ17k1VrnGnvHJp2GgRKR9QKCHNcr221",
  "key32": "4h3g61Bsy6oEmpoSRNw6HzuEjpVZqEWnHLHuitgtVZgms9A5HP7qoDDVtVFZnSYNKMG6eUbJuueetSANhR4B3mrk"
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
