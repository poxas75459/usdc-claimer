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
    "4dvw18mQD3Dnq3ykcnM8yBzXCrtZzJ5WVNPDMzTa9tropR2QWyjz5p5wYXhrMpsL1WpnXXBV6dzHMvyhKD5zmNHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342STVwiY4KQhbMLSVzq8vHvByiEqPHVaBSxjAhnKUyv7bMCjBh6KXu7StrD3Gt9Ygbvq9Kq4a7kDmJUsqJUJZRA",
  "key1": "5t6KigxSav1KLRHFUxeSgpZW3tZ65hZnDfs5QGhjrJ4qWvmdmgY9Yn2PkBVPW6S2HP4uaFJ9iE6xp1H2jzfccg6d",
  "key2": "JATgAJQ2nnwnD7pRWmXXkuBiT2ieakS5dbY2K2a4AT94a42q9YbpeALDoyUVhxJQ7GKEEah81eTVwoYSmq7dkzH",
  "key3": "GsCsYozx8Emo1mqq9ThDCCNYdDCamrZ5hcjYEg4fexi5MhZpXJMUeFgxL7B1zKd4Wex4XcHqWws3koUgC4ecR2G",
  "key4": "46FzghZC5dcyPHSF6vpQzBbGjwywsJFAJVB3rd5nx61Mk9euqNdtmjh3SWtrcZQuwwwm5ivQuVi2JkQ5JQ4SVwdc",
  "key5": "2F19hrstecS7nGdQro4ZkuFg4yLVxCnUPgKU7Yd2AAUA6EXt4rGRhRw2LSquKm9HYCQFYYh11rVK7EUrCFvtNTnh",
  "key6": "4rZELKFQrr9vkG3kmUktUxYQ9ZEM9uFgvB3mRpXo1Y15xQxZxYDcGAY3NB7LB3jWQQ1CByaWuZaUEw6cbkRmJ96G",
  "key7": "2CqRZub2D87EHkPmJmH5brcLC7XtdGyQ85cdh62uwm1eV6huhKXoAfSfQFtusg1ms29XpxMtMDsD7HrYchmuQUKT",
  "key8": "G7hnk2p88HmLy5P4fF58f3sZazpskXapjzZ4JP4ghivTsvtjfe75uk6nsLhGJNBj7qpZpDLLR7eBHeEfS8GTXT7",
  "key9": "cQ5nUZGJoSZHZws6wA35V5rjMshrscGdpgAq8DS1r3QQfqQoC97wXnLjHYJCoJu877hL4L2jrq34kPNhJ9tpwXk",
  "key10": "5dNkcBmk47guKpwzpuMARi86CK9EgSX5aVhezzNrWUnjF2s2MgkX17fCvxgSKWnpQpcxoc9rciVBGmUHRGX18tGD",
  "key11": "5kdigfTxKaoSHkjLGFaHCH46DHQSUFay4KfXZbRsCgRCtsDKV9YxZ5BY4Rf7w2VXFtWDYRQvLD8AhQYVTGMNAMe9",
  "key12": "5Q4H5w2wx4MvYHyvXXky8Mdx16w2JrFrb4TVEsN3kZe3a2Kc1piaER5ekrLYtJppFpp4WbwXZ6CojagMJoiGiAXD",
  "key13": "3ibuzfrUg1gv47CtuLs7U9Fx2wT7czyTKZDKJULSwEuiRJPgZVP8ULau7d9bQdL9xyz7vakqnaZqAar5ZER6VNTe",
  "key14": "555RmPeNjK9qnWX84JgdTrsJpYx2nZSKwR9Qn7AQpV9eik19oVhtxmePoaRKpiy6en9hKQAmvsYQwNBusBHgc8Pi",
  "key15": "2hdb6MSpGf8utBy8KQT2TsCrvwdAVrF7hC8Ffn7dGtt9CoRuyt4yPWNMUSbzVuqKW9TxnSkQik4XiCZonwNWNKJL",
  "key16": "2iyYDbVHfRjfgcPEPDugk43y4CocG58vpNRWKvoigGxNFddgL5b6MET4t8imGthUSqUSmBiWWXhKGfypvdHFghjr",
  "key17": "34chpix1JvsegcxB4r11rMvbjZuQzXvjwEaAzTTVJa31yqAc549sFpsZ5musH7bfA4LZ4AauWbWUnh6K4qHUXpL7",
  "key18": "NTckfdCASa6c52XebCkUPyQ4QB6RdN3nZdMq2Mfj12PY6hVSZNVt4PNDF7jCdm4T64N9SK39dVXyPVL7BRejYAH",
  "key19": "5vX6hMheLRmSHBTCML3YBK8WEbwfXs658erSzcmbqEVy4SGgMVinHH9LZ9ybWg3FmPX2vKdFkbdvvAiZt9bKqaNs",
  "key20": "4KQfh1eoTm7rSqJ8SGUkqfGAXbwvLPeApyuFkXe8Ni6eXPHmTJYMopRDimRBxBT3x4yzPDfmVep6DNnN5PbVoipc",
  "key21": "rfJLu1BQRYswVMdg6Lx6dfnRaRZLMR38oa1mgY5pHjA8MSnUg2uFtYXUvikKacVBLC3tiRFDwZioafPD5s8YSqg",
  "key22": "3UREHDgG6qhrLHHeLKJyEvB52g7iVsD53GNUVu79PwUgihxNnguv9wE1aodQaB5Fp3bjYb6p9oB5WCkwriPGt6At",
  "key23": "58dXgYTXqwAvmvFKNCYqJNJu5kmyvHeqXpKqT5Km68HdF58jZmXx1Mv2Yznm8zBE7UyNdhs6TPezDHEKj4nCkMzz",
  "key24": "JAzhP3yAsWfBEnnSfRPnsamyBJmSPzJyjopsPuuk6eauEKsuxDbfwBBt4GpGLz8LjUjrGkCGZtSxuicZgshqHDk",
  "key25": "4UR6yGMGB7WkYCTuPsg9tggzV7wTwUmYM442EhZWdMovHFrAijwMSYFSAgGNaSCK7NKRvqWzjw2WhELPUSp3Uujg",
  "key26": "2SGgAUiRS7xkNRdS7QevsN661L4W7cb3EPvZ4ykKVbHqDVFWu6k427iYUywdGtHwsP8iYzB4bjJ7uCjZ3MpGfzCY",
  "key27": "a4xwFeuJxz3zHKjJyvbG8Z1DZUcGcg9Yn9uHSHhqjnUD2wTi24ziNwTfpmZDTtFwninqh3Gis9ELR352RmKNbXC",
  "key28": "4jEdHPsjnPBgWPRERkQgsFoRKCTEWMGARLHHZeGkja1ijs7BqGVKhEPYePDGfwQAJQMyuk86g7s7KfSTqMfH9ZFu",
  "key29": "3KgZQkjZg5areXy8eaoBFDfMGH6wBkRNpauHhBxZSr28nbmdpFr4zRcBwxokEngLXLVCk8KbF8Rog47fSCvPmeBb"
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
