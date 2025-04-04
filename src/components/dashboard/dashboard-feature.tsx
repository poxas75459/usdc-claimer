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
    "4NsoXyBH3dQox2JxAFJySGZNLVxAg9ANBKH1qEdSXoZVGpZyWZKk3MFdY5saaiG3hamgbVv6nfgcYnqczZr1v3Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UB1U3KyS8qchEbA7ZvbsAxKumdhYkXaENAHMNKVHBrPWoDeztUitqJm6zW7karHKx7HqMurhjBak3EfcLervU6H",
  "key1": "2irMqzvJXVh7B5npWRDnTCBr2qMgSGCMaSjWJHFkpTXtczGBmEUKV2tyXhFHXEVPUi8KMEmQUBmEQA1o3B7Dc7ds",
  "key2": "2gH9FikFHFg1EbJduWFFcG7hw72exPxQyxfZy5eiF3KttfWVmb3iNSs3yaKRS3onkWPx1QZpd37jzYUBaytXGpgD",
  "key3": "48Wn859JSTGHVK1STgENUi6FLzSs1Zx4WFDsjEry3Fe63emTZx1s6Qf4RRxseNZZfvN8eBDKNRN6Dmc79Zd4udvK",
  "key4": "4osgPo6MvL4W26hYpxdNKxdKF4r65z7hWWz4EJq7vpSz2qRsZGDd6isJTZgiAkvDkewoBVq83JGDwgzDmKZBPn2N",
  "key5": "5VNosbipGPi6MFhQF7u3MM153zhpkeNcX4iAMCwBXZfZN7dDNNUmpoMYrnpyCpzjue3VAxhnbRM5tVB1tHBms9jZ",
  "key6": "o6sHm7nVFbMocEBkyRfWk5BLUKtoPeHeKAUBbfCGVcBHtvKPid8jyCpzAT6DgH2zHPGHjWuitnELXT6UaCcj4oK",
  "key7": "4EuN9LdajBMRwjoTS3rsLocAHcZjE1eWNrdosQvoXxhxKXgNri24updzoqFrJpGzH6yL1gPZAzkXVBAPFoTP6wVt",
  "key8": "3guRstdCwz4LXoipnW7UeAXViDgz8Hr1Gnxm5jbBsdnQ9m9HdEfHVcpNJ7cudwrkL8mi6KHsPvc9AQZtX4orWYQx",
  "key9": "5LaxboGeuJULWzXiPrdmeN24hoz4NBhwt6SdiW48RCb2XUVAf5GM5puv8NTWwpvp97GLXCxNgybeSQqrZyu8xgJ1",
  "key10": "3q4m1LqVgGwyCjinfnVHvknvqcrgHBwUqrTJWNHpDNTrH2xGShAddBfXYeCXG1NtrvkbE8FSVKdAqW3k7HovZQmj",
  "key11": "4JE3uoeFA22W6FzmjH1aK7r7SjgGHNzdgBZshoYLWJFwYfLkJ12x2be6nsfCLFFXJFaqJGvzJeotgRQas2N5c7v8",
  "key12": "2APxXDCzR6dvC9vWepq9vMoA5sk2VHgXVLt2VQYx3sNrzayUrDpMZqnNKmuCW7TyGNDQ6tJYrU1z5gWK1hwwNQz9",
  "key13": "42Cf1HtstuAGQxvpGh9KtYy8q8UbNtmGPRu9HLoDL8iV7tUXjynrbBa4hzNeMnVvPe8LR5i93ZYBgS4riSFFDUzS",
  "key14": "2ppYVpXitQuSkhnMnHZQHKpP2cyV3YNisRNaW2HkAWva1etWEg8ebh21NWoorAqnavUc19a9J7p6fgKQT9Dz41dA",
  "key15": "3DodbLCgYGVKfAKymb3oDgHU4aqnWdR5HoMWuLxsEKFEkTdS92AtN3o8MVNrhyL8zSDE3aXwMDFPAeZALMN9rK9Y",
  "key16": "2MGBr2WkjaQCahX6z96Kzpvz1dDgWqh5GDNdHHzqWgWznfX6A9qBPWuXan8Eve6DajqKJquKjRsfpzEZtX5LqqNz",
  "key17": "5wm6FyHgc12TCLADi1M29Cj4vqefKHfNfMQ2f6CHmtYM2pSrKGzX8d15hjgoZ6F2HHty9PYLkq2Gz7uNK5E9HfiH",
  "key18": "5WxDQFE813a8cn7c2rJAX9RKZ33ivKMXoy2XJeQSLfbv8ujA4W3rAKZABsHRzqMKJ9PK62fXoyerMtswTbs394QH",
  "key19": "5EiFGEmYLoxVhWpmUSKsgGT1JzYt3Xd2z3fTuU2oafy8jsNXn7ymx5NQfp64MXe1t3RiRNiRRgXe7MUXSbCU6uZ5",
  "key20": "4p48va99rgpbDfkYSrivJRibbpfsJyoR713Vi7iuLuNDuWcbpBZmf6HWqCa4bEykq4UdYm8gtR82Q7JsFSSo4a6V",
  "key21": "3DED7UzuWyNDjhxXYEECKbYBfL9vc93UrDJbUdZfAu3rULG7LxwWNgJYVbLw8cy433mfaWw9Movv9AFWsdGeY977",
  "key22": "5ae6QU7PvcHbjBf7Xv4nGWvvWhJEQL9zM4aBq4Ks3qVZTA53o4moFLG6ubxbHhTLRxheNCV3gFsEQrHAJLeB75wa",
  "key23": "Zuw38SSiN8mrNTxjEiwqGZsAUT5BmdVNeSXibcbqY8K6oTi3y79GwUEdTxmF2EizQyDLWmM4uBps6BAQMiGti6e",
  "key24": "Jy7oX7YuhMuqJVk2E3s5fJJkXy83vek5UUa4Zuto8jfML95kuFCbnRQ2reCLFypfMsm9s2UtL3F3xTH5vsaXPJD",
  "key25": "3izxudirrrLgYMBrYiCVPPvfrjZXDVUzmn5BEhJo93U9gSKjrnxqpqC89zGX5G1RJrMdo2cVTkb7ovkyd9Xyz3av",
  "key26": "4Nsb183UNRh4oup2BwWxdRfp1ygWNYUzYzHck4TSJk46is3idoFc4o9N1VBvN13fsS4RAL8xEBdwzKshmLbmwX9r",
  "key27": "2GQZ8KLssefFL4D5ut9bCmcRG5EUVT6bGApdSnyCwgarbTHCrLMDUZN8YD2o5cfEquVjixutfY5AWyaxzLu5Sy3U",
  "key28": "2rfL6NKWcJ2f8goZDSRToVtJkBKrhpoyrkP3Y3i6rjTapJbqwmdrnvaNWDxQi4QRqdgyKCgxXHdrYX61yYavTHk6",
  "key29": "nQt7hB4ZXGS2Exi2azvmXVa8Ye6nPpgV1NWFhiCrg8QSATksB8bTcwpvwESdnE5JDgMBLJy7EmyUjBafwgotMEh",
  "key30": "3B6HAUxazBSY9mANxUmYXHDMSKfxqUuzfVNT6wgpiNhS2YjAuKass3hiUe4G2wzCAdSoG67KpupucQTjhr5PRqfV",
  "key31": "3RGvVraAbp1ak1z9ZCV5dBSaCrrSraWU3tq3H4DDQgDjS7fpqm9qfKzgrr9AESKyKDWKvC2f4KUrTueJ5fUbVhRk",
  "key32": "3Q4hTjxoBG57tpPQkcvK7jrUYdjffn5nVzuyQZF7p8JTJTtbHFS3oTEvstiVU2fuxYoN3NSULxcgVJycpJshVD49"
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
