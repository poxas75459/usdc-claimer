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
    "FMCcy4MUsnNq2Mc3y1UnLaCkXrynfYikEdCuPgcGvSXa9LZt7awmKWy56csw5QyagV9gDq8AjzNQPj23hDn4Lx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUskdUTj26VvbdQj5P1pgMj5yQrzZiawvYGtwmUqMgtS4MtoD3bJvZEPGXPvh6VSDe32N1n74kHKWyJHGDdoooj",
  "key1": "W1GDx2U6tHjUUqyV1UowkBMQwt4McYyoj7K6NmsuSde9gBSQaicmBosUMxf82qB5xqpCGHmoqYepr73ybpFvmHH",
  "key2": "451T9L6PwHW9vZbkHAhMtjieZYBS5eh6EwKDNVkcWuEcHaVn9y2hx2Xpa6tvnW7UNzjgH41qQLceT8Ewcidx9WwE",
  "key3": "3RF8grGJBViYkai692wqwe7AK9YmmBBKwQHmwhTykpELY4J8oiiZ34Ak5Fq9begBaKCmkSMy8W4CjbeF35HTPs59",
  "key4": "4CjjuoErbd7pqHXow2ACV2pLJ7w6iZuF7EHtpUHdThX8m9AFkNYUbUXn7uvGVQ1uA9wEaNouiRBwGrehn6zdcHb7",
  "key5": "3WdhmDJLwwoiGSBfP6U2zX6PNGUygVmtCgKpLTZxKAX63sR85XisWkmuyvV9hu5Q7Lbrd9Kiv1H8xzJKunujFrtq",
  "key6": "66duhmnk6n7Gne6UKjHaAEFSajGjuJkbFpcjGk1mKF9YF1GmV6LignZJACPxrPWRs54twMR54mVM3y14Vo4Vjjpx",
  "key7": "2P3qGvdZNT7MY6tNyvKLu6WwJfcR4EvdgbKbvntXGCcfQ8uoPaJGzQJr72VexYy1eEFjB3KMFRQvG6Vqg78Nvt7d",
  "key8": "22yUd5z8hVKqDDYYprgdxLrcsoSWNgaD4R7qNHN794L2zosLTZXMN1dgR83VRQBnFg1edqvyZZZz3mkriq44kC5p",
  "key9": "5JH4enah4wns4qrGWNvBVSzp5Sqq7izw6wPhwzHNPw42YqHuceGJEKgUo8BVWryXnQR1azgnM7gdPaqptMRhWnHK",
  "key10": "4bWrfXDJKGUiUR2XJNPGZVVfC5Nbt3jb5hxYg3vt6oBNXXXLT5qrprZgXCKH7XG6a2MrxWC5y9AyKDHuuTCYyCEP",
  "key11": "4YkyYGrWpptDargixfFD8rjuv2zxoE7PEf3Dva42QKYdg7QTnvyUzYXgjuEYzNjQCYTZ1pbj8HZwMNLiBXBPeoUh",
  "key12": "4emdJyjdEqY5DfVu2LqNLkaKv3WyXrbVX6Y2K9sPpTe17EzrLBkWqaU9ZThBsxPGscqgyGTvv7YfW7y6qVK8dZGQ",
  "key13": "4hYrHfhHXGBsob9JgRsCtV3sS1ALXS5FWCdSXxLLpxJiANg9XKMYfm5Q8Bxki877CZMxoNA1pcwDzyNbA2stcQva",
  "key14": "44t9ZcBErxRybfXS7vSWWT5ztvovYiS2Ljx3SKmZBu8DySQzPkmUTzt79uy1AZ53LLQFW4L8xbAEmod4NqfBcctf",
  "key15": "4CoswUs2X8oWSoPpbg9jAo6CFQ2iy9Gvq6TdBpoQiVS8DhXaN8kvJRqqUDQdnYfw7T6pjJvuq7dyy3CSmcoqoztm",
  "key16": "4Ga7XtpRYnAYgTHN4FRGefoxsLZQmDq1HJanRkmSAN19VoVnbHXdehxGzDjB5zLvJUYru3AM3N8q41rtsGqi4nbG",
  "key17": "7Ky8hQKzrVf295sLjSK76yDe3LjCMoZVq31sayavYpvpqi1geDuKChDjduWqd8NBfvFkadZp7GiMBBbGyLFGrrY",
  "key18": "3VJvqCQRHvBzMNWNDgv4jNRfiyV5swdaLCzQqDiUAK5CrnXCJCATGYcLassMaaLqztPPZRPhftvKAyR1hYnZV7Hy",
  "key19": "5RDRr97PjQDy2B5iPG8EDh6ir6XQFmYxN9Rsv1MDxpFUN9WNXZXDe5yGmkXppkjpFxMp29UEiDBmghrN6L8am8Q1",
  "key20": "25W6pnEJVmzYBArG5ZP8coXuYG5goACxPTUzsmG8vNc8HsUPGx8Wf49EkDwvHxkagHmjZ2sYbnbMz68TUVBA8FVb",
  "key21": "3yw9qUacmpKQtuHrtQSRTHe9NbYzuVoUoRuoztYd68XZ4zpewDrfc6LPYGeAyThY14jePfWd7cGrrUSWorDCvh1u",
  "key22": "jM1AiuQyM3qbXPEVwNHd2Dz9QQchW7vzXaW8gcbVQA9msbpm83TmCqsSixhu5usc3XGhipxChKj2CGkxrX1H18v",
  "key23": "5gEfV6kNoF9e5u2v4XvviVczcFagwFmiZKiSst7EpNg6G6oKmkPgNYfTEScsMibtfZnx6Yf7TzVp3HMzgGaZ9TQg",
  "key24": "2UQ8sT2mWia6EsWzKhANDexYxUdJ3PFLDPBvMVMkdiy2a2V93TYLuK9GvG9HGLTsG5vYsztUzxrXK6MRWza856Vf",
  "key25": "52Mh8ct2reUntvSXKgcirJiph8reAHW5FD8YP3QeURfH4aoXd6ySwhKFA3qbhVWg4CmzSA16gkk27fzMCkngb9ey",
  "key26": "2vWJu6t6yhp4vPKKhUEcbjUzgHbZzFtQUFXifeh73DTyV6eLTxKEB4UtrVgCXaMgFgEw1rQMfb1g13Y3wp76MLPQ",
  "key27": "5srjXmFNCFx5FoZJFeEQveuYhqYuDHycToibVSsskSph4xHL2ZDH4JvXPDwXhAbQgcdReit2YbfojwDt1ctoABwK",
  "key28": "3f1fS2b6AWJehsUrj6cfThAkdchNwrZdCsMqmapmobfk72NPXMDuiN2KtyKWyePJXdD2ExwN9gfmrJYzqvj9SG4D"
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
