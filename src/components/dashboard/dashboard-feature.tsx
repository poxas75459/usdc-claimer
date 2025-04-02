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
    "2VWdbZPXMtE81z1dP27sHEHvKz9QJR71LitXgNgsqFE1DzJjnyuMXoXiWsfF1gwu3Nt1WYWmG89ZZwacgQHDesd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovdBxdNSz8fmYbyg42jAeCGfBDY1uuEAkdLj5Dpa71mra1CpQPJUGnnCkyedZ7QvUW9M9mkemiUcnqEFMyZUeTa",
  "key1": "57DAWR1JXCxUV7VUd2CgzSBtVZKTmgnvdWDjzTum2gjaHn6bm9vPPBLmiQKViUJBxyBjNiE7n8LYwXScR3ka39Wc",
  "key2": "3J4y82BskPSTp7evc6wXgmGxBMRecqC5sa1PTrrQc7iSK4abJjyXSaUsdxBokGAuQAyS7K8U33gwmWAJ4bh1F7gd",
  "key3": "4fV6kX6Pw6bvCzpnXGFhvtvEojFa8Hr2EuckUAWWXdGaZVKimPmNHqKsjVEq7BaWEpk9KAWADvC3vam1WeXGvdvR",
  "key4": "2LCt7nV8fk8xEKp6iEhyjb25prGewXYwFkLbuff44kwqmtsrukChLHJCqaV3WofctkAR8uSQtA7nHqxBbZvr1bYZ",
  "key5": "B2tDMz6wQJiCvKkrEUuRmPumMTbVT5k4dkyDZMutPjAywx3xBMFmYEjjEdhHrinVFqCw4LihWVtc68bHxtvgpkW",
  "key6": "42zZBY4RLUt6jgpQ2nQtcA3FLset5Wkgnwcp1wAosXPTXQs2F88gPkcUfJtZGt9oRx5GCvHT1ECBpGwfvUYvFHan",
  "key7": "2H9mELhgurL6UHCV5fJFqm5qf8ndqVsJW2qEfda5ShyXr1sdh3vQJUrhCeCNVTY6uigTzNyoU83DAGuaA5kyK9JD",
  "key8": "2KAF5gWjSNx9SYsvdd37mER4aUotcFqAxQrTm3inHuEQzBQ734uncg7xmbRAMNsbmBkEy1AwVTdR9xxSFVs9swxz",
  "key9": "5WPgVcLTxQ83eYtgDGdqkDZxJYqebBgwA6YNRJV33WH9Z2iwTwJ12WTzy33Ff5bv63HBfuskoYWe2yRHaNVixrXp",
  "key10": "4WVth3qZvA1yywVJrFsQiY2FgzVvr6UEaCRVf9k4gCJQbHspCMFUvextVdnUTCjTy2yKfL2MfFEaf8Sq1QJoepAT",
  "key11": "5eeraxXzqwYEmWKjx9AfxwpkdrkAP1HCJhAYSTcGxYyNEvCgENGxR64eCRTWSPtTpnVC8R9K411XiKe2Bc95BkaU",
  "key12": "5Mrgcdjcate7eD7ygQLV3QMgehNkx7H26ybLcc17gpMArocvwDs2ZFWxeWCAJ1hzFcJa5jV63VtcE9vzkqWPvMpf",
  "key13": "4PdW5VkJx7L5q71g43L9iJb9pRifDeAcGr3nEKbniBfLRMrwYmL1otBBZmRsWq3DpiGs7Xg1SqbnUtCgz6tojsys",
  "key14": "3W2JxcJT1ugMqKzjwxex8Vwk9aytUYL1EcFxesHqzF3bB6J9FojTeoP7Q9jLfd6ESYs3izVHdr8CMnDKZkbYAx2E",
  "key15": "5UiDBfWZ5y3zHs7h2GvtpxcR6Fh7saWULJGSGHFMAZTg8YyL6XDJZEvSoPJnCtEgNECxjTuxcRvsYovdC2tPsye4",
  "key16": "2ZmeV4fR8TVkUgnXAfbksykCAwcK13HbwfSRR1ZehYfrtdqMJGyGz5myrzBcRAbg3Nu7jcfqmMTWCNSzfpDRb5Mg",
  "key17": "4NnJcELhtdVCSscWLCFi7G2k6rU5VTvkNrtgY53UHykw44ECrkZdpFWu6TWsxZvUS9nR5Mk8GrvhFV5CDg9Sobmj",
  "key18": "5iBtYmgzpKiYSdtwHNKjSLVL3QpYgC7CuVVbQ2YEtXVJ9NxZR9e1VMV2offajkyhwupUx3EvQZbKkdwNiGmfixJZ",
  "key19": "365DdZYVaj1PxnTpKnbYv2tXDV4B1f1GQqo4nRU6pHhLE7Th5XekphTkFwpo5wmYWqbaJPHPuiDmALD1yq1biTLb",
  "key20": "5QRfaEHpDW38fSUwupk9Yim3gK2iWyBy86UjCyMWjdX6K33aUDQumMCBD7MCfFUsZsmg2ia6y5coFjRTWhcYiQdJ",
  "key21": "4dH1LXABGR9rMTfjh3eN7CyePr5Si7qumjTB7QhgygUcXkQYydm7vH7gmpECag3YnoGNu6e4EA2ZxMTb5bxaQ78p",
  "key22": "HQsm4evP54TaQHXyqP8GvFNsbHqXe6vFpNtKCnUHjgYywvgjqWbvsYDuJJM8vyuRZdziVPSdgLGiQZiUgKjphkk",
  "key23": "4BwDR99a9bFFdQb4ns8LLKzLGFw3DCPPYP7wd1D2gzaVxmQaPMdtJWhjwqGob2118JTxLbqXEeNdXkNZwMjpCBGg",
  "key24": "2vchD5o1M9ZS8TRA2ENNQftjQ6mxPjfGB98dP75kqABAaJNhSKUdhBxb2cY8U5cX7WYRWPdycUXwS6Jty4V9kF5i",
  "key25": "yDCjw2gMeP8jTQxNtDLSdABDTKeYhDQLcm3YEkjmhvJQ9CpcDXyjYgAgruAEEL4SHXs6muwQ8SXBce9hKVjGA2J",
  "key26": "2CEMWBAXnHpcusDAkP1rGQMbQ5XSVF1JftXqMFRVPAguoZCUe1yY3b6SSkmT9qpdCBCM3xdpiCh5TG79S2c6ZPYR",
  "key27": "33a5nv2A86LBZdNWjtLshgKRB7nqxgQPypkew2s8jfEicayGk7DY8kFC9mCtiB83eeJumaGcTMqpaFZ2mmhX4vS4",
  "key28": "2VtH86nBZAhRu1J3WLrbQWGMQRnF6ZhJYawhSXZkQ2516o24uWmPMXc1qGjWfbFKCvfqTSzih5MD2a5QtK2Umw98",
  "key29": "ZrQPTx284vdEvnbkY9dTVqopEr5FnXVVNFhh5T93SvyvAWRUmAzkQiA1QvXWiJeH4ycFEaQck8eQcQ3LbtwQDDF"
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
