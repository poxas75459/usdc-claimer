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
    "paRcMDpcBoDvyH7E2d4rR5SzKgyXABnRNkKy6YG7wzw5Rf5foLeKpnqE8spvpDzvZWwqiZwxhhj8MwqcUpwE2p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6FQfeJsG8k11Dd2R36A2D2KZgztHhEFZ4twFqAz5rRxqEvKFdf3QLEth7TLZWMkKjGQ4oeegdxdEoNYPoyyLaq",
  "key1": "2bUKr53Q1H4Tb1nkDoHA3pNzuz9YwEUYCsxb6QF4N4G7rjr8zPxd9ycREeNprTBk32LyrfoQY5v6PZ1aWfVSXX8G",
  "key2": "421Vhzgq2MM8vnTyKCygx7nhA2bYbdU5ycjSQFujsux2DYRVYk6WwAUvmpbPvv53LiL5AwUgC87aAxKBY2WoVXq8",
  "key3": "3345JE367Ay2u7qvE6dEkcH6xoz8PAn3sePm7A6kD2Hs8J2reLurQ8hTPgDkfyv8Kn82mcTjJGvh5GYB2xzcUytg",
  "key4": "53YeboheAqGq5k6cv2hLuyoEnBUWRL1cm3VD3EWcyfV3rCxZQz5fBfhfAUsWw6dAJjkBS9SS9jUeFJuJhQV7WsBU",
  "key5": "5s1jcD2Wczrc7r8oVreYZdiVWygwpZMUF8wyhZ7Pk5ZyLjFqTmzyE9nLYEniouyn2sxftikMg325h57MPURhpta5",
  "key6": "2jbou6c13EAQeSXieaifoBwLu2hRMytCaTJqhMutxsWWMR9rsXoF4Z8JPV6LawH9D26usZZrU9yKq3weNBgtZ9qj",
  "key7": "2TQzP4ftoeXdbt5UGfKrymgzhT61qTeuhNZK3skbn6mzjstHV2ibs4UxmnYeU1WStscW2SJqWqGpEq166zo8MySs",
  "key8": "2m4EpiVhTyVkRKfSxhioDX6e14owXwpzmndLzDRM3nWTTc5VGwLQyq3suGbyVyEd49PhCAt3H5uQyMqr9iUKo2yd",
  "key9": "4V3Uuk26DJ8SHntM1xKUX973ECBn1rz6tXN9peMB3dro7MERz7nU3Ge2rvFqD9FJjTk1srdTAwwjWotaFJcPAM8d",
  "key10": "5Ptp9adKyGAy3UpEuzue1LgPfGXGMfx2VgrD1KXikMALh5hRRz9gdDbsbimVW5EPgcD5FUbJTL3pcmnA8QG6PFeB",
  "key11": "34PTZbyDUFF4H8LUkpcixzgMRZZ3BbhhbQpcUWcytuUVtMFFxGqzQP4Sg9tMR1UvgHnA7q3aDDekUts7FwD7WXuS",
  "key12": "iBMn7mJztotmV2K2GKGo7meYPJdMZkK3Z6hRbTvRB4XprYuF1n2K25ugRvfgjCWbQ7bJDgT2Xgrww845ho2Q8N3",
  "key13": "3UKXQUTTx2WWJYyjpx958QAkkXNNJmA7B3ARxK8JEEmVMepTJoTwPbAJyG54c18sXr6znuMQ4qu85tc5oMBuyNDg",
  "key14": "5gcujjFN6D4vcAnNvXQ7M3Ex578d2pKAzNTC9y4yijY3ZJvb3VBKgWosVqJCi2nnopxZ7AtSkxeBTgfphyeDsiVi",
  "key15": "2JENRysgYBHNooQKDZXaAVdUeX48petDjJZpdum4bozeBht39vksH7vauQZTsq8R63Qa6RXbSXsT9zsZn2v4gyw",
  "key16": "HWFjY1rLgYt32bZTM6K6wgsHTee3UWBK1tvwFBdMxWNTTamsAxrW9eZLUigmR9AMt5myb3yXZgUtf2k7cYDt4Fn",
  "key17": "4Qs3FXf3iGX2KoPvYnt3ewxeucomXPe5hP6NgWXEP8YHp1jDCZjZgd4s1FV1moeAKqk261a3rqLpLiGngvsdfG2A",
  "key18": "5vxo7jSUnrTNeHuTftsMEhgTySxhvivQNXeGQoBZNjgCVZNmDC946kBDMCFpBxXXPjx4R69EbvAjeqrArMmvRmB7",
  "key19": "5gAPAGmPHs4HJBYapSUrPL8uDEregUC67cZMMGesAXm1T7RjsGffc7ZboiR7X1s1FieY6mjfhqmb6Dz1wcCQ7GEj",
  "key20": "63scT3t4gMDjLqXnF82VgoREke2vsuf2KaJTz9mQyC7oXhK1rZFsWdyA5oBtEZ9q1DZM8bkapg79gzSkbcxaDPo4",
  "key21": "6qeGBgZ1JuASxJ9JLPQDDH8Z2hGf5S1vR1icr1j3aNYzHu3W2bCQMNpidVFfegJqKPdKjC868dbLDeVDte5Usu4",
  "key22": "3c74CVHBwh5TneCEFsjL46QbDu8v5hJhNMZU1ZogiVU1w5HKaADa3wySvRQjPzLVnHr6CAAsqraAjceBNhURcvFH",
  "key23": "6e3WjHTQuDfdVLAuN2Uuk6DG8G5iNBoRQHzHKHi1z1Ug5WBcNybdyJGoRtPw2yyEYv6HsRCS26VvBy6sWs1jmDB",
  "key24": "Gqs14UTRwdYtgynUu4fcaZVPdSEbBtsKSrwB7bGwXmvDqiUQejnwAEr4P8xdZzM3EfkFABYGbVaGfKJecKgX3kP",
  "key25": "5advwSvdGJFi94MLFkKKR9wez6RUAfxsgqzo9PT1ZGf5mx8B9TUPwdCTurE1fZhUMWzA1qs8ih2VQeZhjFo1CMza"
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
