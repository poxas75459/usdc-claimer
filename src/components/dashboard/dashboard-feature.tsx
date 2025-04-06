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
    "31HsyeXbV5eDDRq733iexSHfPmSLEh6yKXuDA8K9qSoCEt4cRh4te1gW9SttL314tzq8ANrPZg118jpVUtXTc75b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfFSWz8WWGQo6nbJZq6uhqwWKwSJ9q3hQVJFRmTxiiaoMts5CGEdrwqUGo7KdEJQKW2Qkf7p2sNnPuBFnatqzEV",
  "key1": "343KA2LQyYj4xniD1NdJ1vr976JMafAkxNZYmnwGWNtDMvcYDcyUSp6J5N81ZvhJpw69PhE3pXV7zygBodNotM8m",
  "key2": "4YNEUBiiv6Ea4kf8DHjj43WBZFWeSXxJ4fVud6DUakfG4NzXD5bWMGnmjKD583hrocoNnPF5zDGuTbQeWAEe58cM",
  "key3": "3nLs1EAcE4gU5oXhbhzximTvpoF3f1cWZt5ekgYvtdqmwLG8B1z7nXiz2hNkTwVae3UjoUJsxjfJdzmhYNgTYJJp",
  "key4": "66jSwqpz3hVPn3wdePs1FFGHpBptQgKa5Qykg6Smu2CFaThmt1UDAfZdVVeVX8E7cb8HFTwWX9FJA3grNLuzbxRa",
  "key5": "5E6fQZ7sFWddJ7D74bG2NnQYvim7zwLE9KGQbvcw7MRYACrXFmzURuFa1jTG7p8L8q1KbvMsQpydKQv82e6ZkHEW",
  "key6": "3YYTprtzwHhDW49yQp3QQMxL3erbQhbmzARd6i6jQRSUBVG5eLfNJL3ESSVh8PD8g2Aw8rceFug4pc3rvGpreUqV",
  "key7": "JjJVmRUB2JngX1EWuVpEhCbBAumhC6iknivEXPqkyF6BrZmbFCCE8zt1XxUkuXi6PnqjfomypTqwg2ietpesnc9",
  "key8": "5Rt5N1pzYSykH78fZ6rFsyKqBBhEkvfeVGenG9Y7BppDWXjqBG7XTefeed8nqXjEpPfa8wbee11CKjLxv1KjY8ud",
  "key9": "47C2YXxkSBhwmvnwaRTnyNZnBWyTi1UP4vdkhyf5s2gmngyp9fiFmtD9UWgRvxqEzGHWesVEDZykkiWZHt1a2Nx1",
  "key10": "2wFupsDATY2FWWfNXqRiRN9Kk4ikcmSjGJkjwSaZFKbbT3CVYBsAuH46g16V5W7WRa28AKH3seyo7ggXdPx1Zj1V",
  "key11": "3rjhmmBufv8EcDbKSduGbCqRt9ceHeno6UyxbsG7HP7tnzKtPJ6UhECAmnuzjhH1tgAXEw3BJx22iScGZ77tEe3A",
  "key12": "4MLamcEWohuyD6HW7bdZUGYPMVkqDZKgQH9rdfDSPz8gZ6goiWHNHDvM9pdNWWgWmsGCznMzLWmrbt9zeuiTeWj4",
  "key13": "3htPKJAcqyNeaQWpm88Pyku7zWnfZy6h9r7J6egQuhykj3Ee1p59BHCBXEANkGMhXDTMqkqgWS8TDEeVENzHioQU",
  "key14": "3kPAbSXn9nHDv1RCs693HNsvDUXMGpyoUttvS7Js9KULBFmbi7ct3JKCcTU41ViPKr4PwdqQhkbuaLuqFf2bS6tj",
  "key15": "2rc9nbixdHS6b3rqoF4GqNjLvwXS6Bif1aWEWtt9PfbQuse5FnioDzN25gJcaiXWWvMXqcX64KMiCPDAJJcXZ2Li",
  "key16": "4bTFiKXT1qYhre4aPnRby9SZNUqC7MLEQ1Pyu7ATBFdqYjcVJ2TQZJCiMzH62cra7o8m9RS4hE3GenLVRrFt3kad",
  "key17": "ykKFP4raPqRSTSddkjjThVagNC2hKBXWRidhEC198XrLCm4Xhet9aUc8XRHUugqNGuE6EbLnwk6cqLJQtsk9pKn",
  "key18": "5DLSUf1aw42c3SJPEf6fH5mDbvPc9j9aRFD3Dxn8Widg6c8xCRjxoYp43tPehS9wqCN6VnaefutjpgTVNLx42J8A",
  "key19": "3FjTbPkLtuz2BxF48to58FwTYRy82Kgm9r6BxaWzuWjzNWvoSyJpuZ4woc54qQyxhhx9WMhJ3HBJELMoH3Sjhs21",
  "key20": "2ukkjhEi6apcpdBY5YbqxKAnRtLxs8RY8yHDniKSnTCKsKSXksshpQCWPVvDdfX3r39LRLDBgLVSDpwBuG2Weecq",
  "key21": "3c9NpxJDXqWrfBYqcBRtwmDYPmsgv8TPbGXdE3WzmEMGjn2iTiEtCPJ6i96PdtwGfTiGjWJpvmBVwMyUD39VMksT",
  "key22": "5gGdAzE9TxURcFfKpPbAdKLjUZJm38eaZ3KDAz1BqhXa8nTicBib6dPAa1knrpHV6eJkwRvYgaCVZunjhZoFKXcA",
  "key23": "4wX5QGm9c83rQZWe6x4X9Acp5qcD45nvRhFJiiZR6WkdE9YF1GV1fcw8JfPvwf17L9yTJEBts7xQZL89APkdqvSN",
  "key24": "5qAw4N1nhwxjthFmKCsTyLfx6pmM3wa3xLQ8cNi3NDvUgiJGj6jSQPeSgGupKPjdZ18AVSBCgZ7nfbj2M9CvMTx9",
  "key25": "4qEvbEJV4MHGXCDMaSaJ46Ry17TedfJrtZ8hx7w4xavUyKQfwuWHhPBkmU9Ru9jKG9FL1Mk9MTDGmyKcHvtZLhks",
  "key26": "4CTLdiVgd5sPsqoCrunEvQhYjD3VUTnJXmjroTbtSbL3GNoQ46MsEqrGHNvpiDYLz4Dc7x8f9ypLsBFNBNfgSjS6",
  "key27": "arzVyfeY8dxm2bjC7o6fpfhsdoxuJeZQGDgq2g9k7xDzpTRKkAc5ntkr8W4dXq1kvwPtfe8cZjt9ULkXYUXEeSw"
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
