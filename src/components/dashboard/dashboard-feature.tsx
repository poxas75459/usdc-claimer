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
    "udRkLNQqtdh5Jd3DHjANi9gdw3uUPdaQEk4CbFS5y9eCW9LKiE1rg1DkqLBKAc27nbVSU657LM9qzf8abuVxQsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtubr3vXjrXWqiFTmdrU6gKjJ6vrrdLQ4ZhbFw2qQrXLjNopCKWKVccbFwxYL8VtE9JEPbybeBTcqqEU1LQwTzY",
  "key1": "4H8tK5rcP6UPiWeEVh1xmcGEc8RXox7pdWvj3o6pLGbwV3zmNZVuEejjyjeGmVFLr9RoZrYBvzVWVPChYG4dFeHa",
  "key2": "4ARnqEF4Tab4LpPYksuvkvNbxzjqFwmv2GPCdiSXk3tmWKi25uvMgWGRTo4SqUifYeGA4pnaBViZpaBzSUbGNL7B",
  "key3": "32zSoLp9MrUtfECzWsVgEttoLhydRZYcsRXQqVvSGnHs5XD96BXhF6k9jyLARxSqTn2PFd8jq1buPja69qjrbLqz",
  "key4": "5dhFLkVYqfQshBxqwNsPDWbaJzfX5qSgJwd9wuWj3c48ZxqKyy4A2axQpTPKt27k7GCCKPEQXh9zMmFQxw6JXMKD",
  "key5": "3BUFAuwfrUSZasuJL2yKzgTLwxx3sMdzDzRACftoMEkrPjr7pJLb2oQxreyBW8gSicqfMTqxv451xcqcysyQ5DcW",
  "key6": "XkA271e3ARKJ4R92gdresWmhLmWxe1ho8R2XMHgvNxVMVw4iHPW1eZYDUUeDtWZhFdQkf4pqyuzTfZNHcmiHwW9",
  "key7": "3WSRAenXBLSUmoWSoWy2eQw4bQYfDjXQP9CZ9pyxRTkJrHziSFF1V71mJhxyxkSu5MUfvzQQo5NWgvHzSauSBZ1c",
  "key8": "3CkxuugVT2WUrfnAJzLMr3PTuJyXjP8wbe1ocWpms2jp747PEiRQnWnb8HkXeCm1bQfb8xFYm14NRd2voKmG1kUo",
  "key9": "4R3HgqAvYWyxnwssP1Vt7fGtzjijGkQakJPcTpdi5BMRA9z3gbYm3ko3RbzTvUkcWZVFojx8puf8n7b5FWaTKsVc",
  "key10": "4i1fRDiRrBL3XVyM364H4kmVcQom2EcxiLKCGCshnf86M1W382xvESMUP291GK6QYeBBcbH4BhSE8Jx5xwUm6s8o",
  "key11": "mUJaA5UsijTBMJnnWYmP7WKeBkeLwUfxuboNnqZ5tbDWmhi1xBkSM232NRvVn3yxqGvbFUkAoRb7MGx1p6LAVeW",
  "key12": "2YoEMFy3b8KwJcJWgnpLXXqEGREmrdhvHQ9K8n6KGNLfnQiUXf9AKfuGKZCxyK2sUaKVb4NSQYnGWvAbF3zwV86c",
  "key13": "AdBAbeRrn1sUgPgLY6ho2d72jTTuB1gUbEbDNEQEXew5bSTFnbkuL49H1G8s5Avag8GGTNaixPNhyyivSKWVfGw",
  "key14": "JKuYq35Z5R9cimVCzb4u2hovvGHE4o55RBVUKLHE7QE6nq1SMCGq24XKHNZCgyZtgZBw7Y3wpW1kNqk68DBSCqi",
  "key15": "ULqqoQS2CNEfSLP6xHqYdNXAHSmGNzqcwduxPfxnVZjndrJiRU6ZyVp1jd7fgro35aJ6na2pEkabwbubQaN2Rsf",
  "key16": "5Q4zJ3VFbXas5Tj3pAjyuy5fTYU3MLFo9EockVaDAqD84ahsVcpGPUrkQTmb4YNjwoNhaqGeNahzfg62Mwis4GVo",
  "key17": "631gLxDGDa7wTzhbwkGWKKXJBm7HtJzxMCz4oSenTVvjHWkA81jDVe2UfsNNEUc8mAwG6g9eWmHkkU1pRSiHyEmF",
  "key18": "2bn4u4bSURZCntpbSxFYkLHB26mP5rvop5q1Bs6k7MMJ4fm7g2Ko8dv2yEiBotRwSo4cCvxwLNwd9rqWEbeaSJ97",
  "key19": "AE4cjPkdoTTemLAFuGbTY3je6XRrfRh39zdf697P1gsro1w2eeZyoHAhmYYVacbrhvw6hTWiniUSHxhto8NEU1z",
  "key20": "34G2gQg4FyskbuTU9MhbhtG15VFUsq8FmziUQ7vYTN5gPBfsMumtXShGrH63FFkBZTHbyrB3smLsFunKhH58jdJn",
  "key21": "3BHRiUpvNB9AdUFbyk6UgkCvqHn7ypsoPXBZC76vUYvofgaA2pSCBkq5abD8r41v2hSMXeKSEkA67bKJyitx8zi9",
  "key22": "3HmFTDL1HPpYtL6EfqSDMSrivPNKvfWVAsfborARoYUkDZqHx6uDXeqTdHNsFuEadhL4TfpQy2LpcaXDPsTNHc6q",
  "key23": "2zgL935z9K3JQjB5mNkT7bnwpiEHhQtwTvm1WWK38VxhihBgCnzTcxGbsZtkaStmGNfdwvuMDdrpVpyWAK18e3fX",
  "key24": "3BGj22q5py1RoJrbcw6nPMukK6CsRuikBe6qMieZ6HXypYVf4f3jXQZSNcQtvuDSaCZHVevzvLfqbeCMCTVRYwWn",
  "key25": "rbXeBbtxmkT9kdAFAJCkFgmCnKEah1w1hLaKLSwaUcvursqfxaDvoYpSpJRuC1ZFdKj19pqEYGS5EjKUCZZirmE",
  "key26": "2d8LVESDgQbJYgs1oGKBpZqw2Gyh7MMbBpqvDcoozzipRC1UeNWRnPiB7LWYuMAgLL82QqrAoXvWpYY9zoKUH3r8",
  "key27": "5BnYaieDKFPUzM25QWqkJssPCzLapgFpSBo66xMm7PuewmJfBuxjrx1dur7A4Y8x1o6fdEqZHHJqpuPU9MhL2hwN",
  "key28": "4pDsUct7K8C3tHhNpZhH5dBcoZMBQxqicSxYCpgi93jMcdqG5ofHa7nP8LFWAQ91PQdDpouxk61j4XQWZKz6zyWR",
  "key29": "3YzwSmtjYFeoYVcRyxy9RYXxyv65aqvAhJMp1NMC4p5KREQQd9cHRvMHxZr1VLUdvJPmdgcPsuWHsMZemk7dLmZW",
  "key30": "GxXSbhRdB5teiu5btiJxNY5KDDGvxit2RNimD1iXgiPRcGwnwtF5XmJvp6JNXwneJSKx8r2Y8WGFqLso59Jg5cT",
  "key31": "5mhLsjQLgTuqdyzpE3CycooK5bQLtmb5KrzcZ1Vf6qKsAWp5fR9s6Cs6vnfFYdEoKwDxLoUqLA1Wgvp13owD9XCu",
  "key32": "4pDVRPpGhDxGahSJwAq841pvt6aCBfHN1cGQmA4qNN1RYiscnnXzyeYpC1r7QiSL3y5P4AmZtRW6Gr3sSNvyS4ND",
  "key33": "4H5tAxp49DfNtnCBtQeZXpHNnN7utyMxoBQRETJcc5yiHU3XdXzpnW8Gd4VYGQfFWoZR53oXKiSkRJe3Pzo4QoKY",
  "key34": "qHbuNBmt1caLv7DF6RiHkuscM2aG1ZBZ3JoSWUXRa5r1BeHx7FGJYmUwCwH4WswUZ48q2VABC7ZAYjhmsgyGnat",
  "key35": "3ZiQR6AMdCjxg9XLaBHUQK95jbCQ5Z6XGbikEfzbPeYz4TyUbA7XxLe4z3Q4rZVYvVUz5ZQaMLjwuyx3uDi71dTo",
  "key36": "3qkj2iczJfsC3SGPGE4fiCi8xDTFqugT2aAmpHpbB51Ue1LJY1MgNsTZe5zgBtE5byquDP5DGM8ayQnVGMruYABT"
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
