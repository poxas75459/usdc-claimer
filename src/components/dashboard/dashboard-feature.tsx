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
    "wBuuUU9Z5oahhqgVD8eVx1BAbKSy85UwQFEoxKjKSYEgAKMga9vrF1a9WivsLbMDTNS64nzdm3WkMU1EnahuVMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KycGesTDr5ZVV9d4sMuCsDoeG6r6qTFbs6UgnTwCzxnjwyNhpQEN8LhEvPekKohv1TZiCD7u1ErPucxAvGWCPsk",
  "key1": "4rPmMSX9kgcYF5i3GrFBGnMwijU7m6RBGWVEvfpBrjoR8hXhQukAt7m44hHT4upRrZuP8Wh4V6GiHmuGFaWrLVi7",
  "key2": "C4r9o38dDKLgVP81LWKwLXCUwh89BgWGUvSBLkK53pbS6PQZ7EeJjU5fvch8GHpBJTFZwPGR5Ng1yXFFq6uGy9c",
  "key3": "4icSU6zdMkLRBHQf9u6Kfr9dBAJ3u5HWA8cLhs2suMH2B223hpq9UrxBEgwgQADcgdyP7okaSDuGKcL5AnuK6Q9L",
  "key4": "3PnHXKWTTJAVMUk5jbruf7gK4mwo659Z9TQvDLt3zcv3XBFCipEpGPwKAP1PVHwViNf2YzT94g6dt8owjwodrXt4",
  "key5": "3mfwRRD3Z5aZVtdGMZAr5TxBC9mY94RHRaGTnifBwSFHXkxHEBJFaaLX9ohrcrfSonYmbgxYF7UirACqL6ggz327",
  "key6": "5yKVkEe39cQGvXstY4WFykSaHFR63ZUXLGWtccbcT9UwuuqwoH2DQ3tDLbuE7X6UuvAAxwvQa1jNB6QBPbPT6DMB",
  "key7": "3TsBYk5huWykoJSrSX1EBSRQZ3cZuXjVCgUby9HZmc4n9Wbo6M5jDAXdXY5wqFt3XTNDNqTeD8Mjw3F36ooWoYon",
  "key8": "F1wXJeukoEh97Bo4EG7vruRwNzzMwpLCaYygrcBXuSxJHbmex6YG3jwNKG17W6qJ5FZidMNDhHUq5nhtdCpufsi",
  "key9": "2P8uMqdH3BsVVwBMd4viJonbZLjsss5wQhUmWAgtEGxmQSgUQKLxov6utsgJVZNB3fKT7CcXtd7vquaV48bzc3ME",
  "key10": "3C3m9qpFJUwQQqpNtNPgC4tQiy6jDb6DBSxnsJqe1EEDmbAHnCMs3cscBLHdxJU5nJHZWj446gWgMqGGG1XTrtfR",
  "key11": "4oegSBiVMGZMiwEsk2jXNAaiXbV4JPFkQKtGobP26ubig5zkuD4USTNeWqUMtyQ1Z8QQWPrMv9j8QgtuQoE4FQWQ",
  "key12": "5cmhsABN3YY1sXrHCEDVJvmnq1A9uG4G2XHy5WKdWajy9BuL7jFomRzSow4yL9ePJjQXPVh9yp2m9JorSTHAM4Ua",
  "key13": "23qVAb2Lh56dkaMMqgTdXCK8jhMCf4AXuqZ9PVGkGAedRFXhC9C4N2ndhYDSrhtFiydpyiwp6Z13KkjusUYBZXod",
  "key14": "4SqUq4DEW384ZCGXPxU2pupBrVTbica7KRpfMJizRM1TKuQmecaR89y4fKuLWoNyWuZYuZX2fGosD5vYt4YcK7ZR",
  "key15": "2ksQYmnpRj35tEoHvwsPiGp1x7zPTR91UCPEyEyykayW9tDPSrBNSG57LnUxp3HEH2Me5tPsNn5sSf86qtdEPkhR",
  "key16": "WA67hCZTr3ZT1ZagXBFBVFN4k63Vyu5JFcJSKcU9ZebWSf2zGQhEwUoAZG1KKcmD6WzL9ZmzsyDQhNQnKnRfFeX",
  "key17": "nTQKkecDp8QqJLVcyeNXZKXLEYYrSc7hoFCjNe83mThzEynzaWcRJL9EazLSi2wtGMbAXQ66qvN3ZJbAmeomULN",
  "key18": "3UCxntjkLASJKzBaRw7wHqghX3c8XwUHdKNLueYc3cdMigwhf7bcctyEpE6TMUq3GXVRDEaSrdqTDQ9gEfBqxkuh",
  "key19": "2aPqze14uCn1c7N9TSwiXxpo32fCkrQgiHNrPYJY6LQkKtD1A9TTFxPwJjfwg3bMvEBSofpN28AXmh2LcS4S6CYh",
  "key20": "4DKgC3tvfVeFy8df8QYY2PC2rRefjX4459qVLXowCY7gqhssqJAbMdzjUZETsn2mVWaUMvC8hGLy7fPgrxLRNgpv",
  "key21": "5pi11HoyKzuUgVtLtwtVedzAjMEpeXcg1ybAwZC5sCbmpHMchyrGTza2QzcFpCEAvjYozDRcvtrxy9y4qUNhxzdb",
  "key22": "sxiVP5TPTevHiLSx5MpDSyVAFDpjnAkqMtop8bp3zDzu8gEdarJxFEX16fwWphWPg294Tbg8VMMX8n1qwsmA59v",
  "key23": "2s8jL4ZUqCNeZxsVRqgKHmvCbz8EXHMNeB54sHq5LBgabGKwhoc3u7W2iZ3ovYDpQZFmjgsW1mZW5C1NtKbuzCFv",
  "key24": "5QdMNBXJZ81XTc1qJyjxNbog25UFjzz27sTTRw5t3wLQXgFR1ym4w5rvq29SJAT2CCuY7fovVGuuX4Nu4CDJZEQE"
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
