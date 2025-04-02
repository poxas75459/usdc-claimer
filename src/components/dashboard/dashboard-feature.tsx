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
    "31N4zbKHv8K2FCk8KB693J69DeEkUP89LErhC4qzhTJYBVj1DUnfbbSd3GM74KxmSQum6wbeQruykg1UCxrcueyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUekMSxRnoU6ucF6UxULeeAWuwzYosHXtUfvGnFrutddNfsAsRHk52fSryjUwEUcUfHj8X6xSTV9LAAtKqvxnyS",
  "key1": "42ub9f9Ub4oQ6Uq3ztWfBo7R2biD6DeHGHkQSLTepBvPCUEgfPbjv6FRaxRowYFmJBhouo7Kr8y8C4grWEjNUkZ5",
  "key2": "36ni3UgNK5XSfmHgvW7rpFAau2rVUgmDEuwYefbj6x3BrHpFt9PqPzih83agAPNZRdHyBn3T7ozFGr5YuoX2KKhV",
  "key3": "5rEKz1wTx3omBgvhTtSzQFWLFxJ6WQuZe8zMJnsR4nDY5YzDWpZqyNqiDq99VZgH9t6GXuEfsZorMmZJwzs3qdr5",
  "key4": "4iu4U639pH7FLhHQVGCQKLquknmxxXdgAAo5U2nGDi3cB4LEdgjmtsG1bHWVzudif5PmTU5e5FAdxYNendPfYkDa",
  "key5": "4VYXkQE52XtHWLWgtkZeWiui48t5FqEmy4CdmxwNgM2LUvvMgD8wPt72hRBdFKx6Q6FfZ3KUUUNW4eQ3UiMs5NmR",
  "key6": "ek4PgNjhw1qhfQRT4DTd8Gk5EdHcUuxBW63gHmAU2neYScFNE7YBA41qW2dWAJc7SuFo447ZaTMaMF3fTRXoPC5",
  "key7": "GPzNa2T3PcQct6oWwGctsZQxbo2KvLCSn12qxUgL9dbqgWvXfEdVj2qsvy6YLrn7zoiX5MHaMGqZcXJxm1hhgrk",
  "key8": "4YKk6ahXpwpeTrAjy4kGm9XPiFPJavYigNRz9znQRAVcgTXzFv8ifruo84weURu6zKoxRs7A3hsmxmS764DjuhD3",
  "key9": "2P7dP7YgCEkYvr2o42Hg9hAQhm6xbWFrYjwzqfCvc2ALYZDWa7R21oCZLUfQJSv8tJwMd6hMbgJG1ziwSLaxeMgN",
  "key10": "4xFNb26XjjSkRFrtQ9T8LJamViFfyr8skeCX5gVULyB5odUoBAdzf79LkfnM59pMQqidKaztX6NitcPGNBP2bnST",
  "key11": "31nRoEVRfE89v3GUExVYiqHywPTNX9Sr9cRcmuZhrQGtEseh2SB4bSdgycGeAjzabKjfB7hJhscWFntgc5cRKjHq",
  "key12": "5z2jgm4uncActYjKw5hU5853fbM8DtFyaD4FS3LCDhhpyXFaKEhRb83cz6dnALMTotzUaiBiUztn4ex3vxhFutPQ",
  "key13": "4Nrn8HXxFF2CDQXoepFQzWcrECBuHwgK8i22h5strdZJWJwjfADEiECCQQYzpL8wWT7RBXqJTJMMo7zFJ26vj2Nc",
  "key14": "fW6eEebJv9DYhm9S8CLhxe5KH1DFeYMfnmx3tRSZy88napydrvg7SV5k6ZV6WjvXNRVfFghf3kKHfYzBXSrVFJz",
  "key15": "53EEos5GLyw3ihaQ1t86yXqXASM5ScTUEAZHnSknUbgsXHjBuAK1eKgbSjX2J7bVptZFDqe4WJZYarQWEexZZG2S",
  "key16": "4TTgUQ3iQ4gj4SNeYSKGfTNbr6tPz6pJbxGEUPQGWtGt3LVRW4dsDySfWzBPiY1WrrM3Rw6c6aRPyBPvYezzjp8N",
  "key17": "sBoFeHaLKc1ySW5GKMoGB8JHRV1i5VwATjzXjiCHfYAfFqevqdmJncHP9FdZu9apmLH7Jx4qnJpmfKeMR4cMoSa",
  "key18": "2b3dXHavDCPoJVVQL45ZyijAkKFvahy6D8L1ak6mS9aKkrv14b4pTX9fEJe6mymXaJzGkoNMuT56KQetCfJZcsi2",
  "key19": "5Se4MPZznBLqRwUhuLSeRtpRHnmqV44Aw2kMgwSLuQb2rV6HyzKAGaGqoAjBwYWd1FfnzwH5FeVy1XzCgtS9dz9a",
  "key20": "32JLtu5VXtfpwgpNmL2p1hc6qZohLLMKa9e67fVEFpdiNCGdMYz2zaXbdx4uRmy6yEfW4V6m8aG21U7wnkijgMKC",
  "key21": "4cf7xbsaYvdpV1Hz1ai1rrEfSkQfqSE2WmyREGZbrXCvwvzVZsB95XiH8gBX59e5nH8A2LMx2zqFKiMznAhzYLE1",
  "key22": "29Ku1qYZrTz86gD5cY3yigxDegzLNuzy1N4jgt57NxTRAejDoeaPwjNvdn8yCjNixThv1PLmxiAHib36C5LezAwe",
  "key23": "5xQxZR5DaqtzXGBr5oaEkhQma4F25n6ertQkF6kVzASUm8ah2gvnHPbfH1cTtcAi2AazjXzY1YwwX7uT4fPAXdBN",
  "key24": "KXSs2qWu1EaQ7vb3b1VJZhShY3NpJvYTm1i5gG94yNKYoVWyFZHeGv5kU9MzhzYaVx3e8hepTocUn4nvxQzJfm2",
  "key25": "4F4Tm8PqT9Y6GR452k1FokHuPAqfGWz7rTSL9nXhnxZ7r5E1EPtc9SZ4LaArEtWJnCEewX8nt6yD4VrEagTXTvtA",
  "key26": "2ZaLabDdv8ccc81TEjeewNuiT8pCBQxvsUaEv8TR4kWjDGZh1jtSFLToRuVd5jjvdWFrkNJeyC5cqRK1nzMKUqzk",
  "key27": "2cJRe9bosztVKbLDCc8pf19aUA55CoZJZznzfJS2cYXWHf2uhtt22t9nudAwVERpxvyEcNnavr55D3vpWwZDrs1S"
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
