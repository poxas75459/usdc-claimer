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
    "5Tba5PP58g1yj7xZoVAzdK8eMc3GoozC8mbv8xWp5yBq6j1D1SwHJUzKgA6RwSzXoMRQHia6X4o2jaUzbpQsmoHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYpFhdT1iZ7nSS1Wkjnanq2oXnNcr2EhrVUYZgHRBYJTAgUNfwGb49XQUdJnzCMpnguys7BSpPt8CTQ8cXDS2xP",
  "key1": "42FzXx1WwoQ8w2eKCHJrMpFRnrvfC5wU49ddQKPgBFQTDXPv9sA8kMsNoUqAiTBy9HydiVGCrv2PxE3SDvrrBhP7",
  "key2": "2Jfanf3rgXWS1bVCARAyBtDpQTGYY7ZccdECjzyQuniQ6GezVTeR7qK3MvFU2MNiXdCN4X7D5FkBDp1sDmozLTPs",
  "key3": "dmYXDy5okRksM6WqxSmygjmTxGCtkmzJsq3p86N8yAtxU2SemLXNZe7HZu64sV9GWdamRbeF3AVj4vTRpuhaJb5",
  "key4": "nenB7zYXFjFgNtA4CBydF1oCoAumr1Z73fMbXsZgAMdhdsWQeGnAfzxZ96She4pWhXP3crivtum4EGjsgYzpp94",
  "key5": "4XHKcvQNHLU1bCNCX8PoAKZNfAZj2d5oY9G3i5RcHRuTyMGLXSY8xo26cogfqPZzZCgQUiprweTjQeC7Sw45Lg4y",
  "key6": "4NGDTtMCU5ngoRk9xkoL39qDDNygQpzaWzbqhUZ8a7CxdUawxsBeCu9ksCixV2j4YEXSHACoAy9dWfXHXUDLGxwT",
  "key7": "4sVZaHPfAbYncixKmmQqRHdv62wWfSP5QqoaLixYPpEyAAyeurpfqfXhJqDyZi4WNGDi39LxVoCPTLfiq9pE9w91",
  "key8": "Rg2qLXCB2vB3YMvGdt4nfFX5nWr1ML8HmMCUFwJX185jd5PygpHBenEqN1apnLKNUfoHQzMmsqENY3ecrVr4DGc",
  "key9": "3ihU4brxsTBymi6mP3QMjEwXdqdB8ekJQikoQiQfkKcJPtkszyFJTDP4XXktHduZb4z9kfqrdx8hDPRo5udeewMe",
  "key10": "2Lq8kUaCvH6gnwXxiMkF5yJMhoCYw4yKQHYoNq9WajpwaaMzEVJh5dxQFdGqZMUhoh9zrM34LSpjgebTzW5mDgcf",
  "key11": "LV5LP3phZZpQqH1vdfRRo5ipyFnr6JQqD7npr2tWYfsQJy1SyvmGsg42qQtxR3jy2kPJpkAoo6vpqE1J58NtBx6",
  "key12": "5BtnNGfSChJUSbFhZSt8uSRYM3m17MVXWQ2mxie1qi4iLxnXv84HniMzSWwQsaQTCGKFGWkA6D9EijubovCHS2UC",
  "key13": "4GXa65kAsh2L1HjArkw76NQKNeC8hWMyDCB1Pd5EAWvdxAdtsJnutL3in9tggCwWusNtjvWR6GynCXdmDRqg7DSs",
  "key14": "3mPL8G2pF7M5RSorFyiVVSzeCbXDZUkfUmyyqnGmHTJQBxsBvW9USC3iQYsxFFsjUSjDpH9swnTNvZERPjX3sHpN",
  "key15": "3wjix7VgcpAW2z41QMNQ98HG6hCVr4ZehaorKd9JMgwA1uQcFfTXqJaGnYKs9amkNVPEsqvgbfPuuJYuPMDjRLiQ",
  "key16": "3M7iyGrfhysqAmwrwwtZZW857VRYu9pbcAtqWoBKerq8ZySZYHasRHVJNjLQm65UEUAy6YLhBx3f8vQBs9e7V3tj",
  "key17": "46S1wvsUfF4AHQX91EXcvANwCLQivU7UbsfjqsZhmWZ39TwbEHQ4TzqpHukByY1P3pD43T7raRyu4gGd7hyexpm3",
  "key18": "fhJjBY38FbVUARrM6dgUtNJPJhM8FEwwmd3XEyi2t13XuvbdSqSYevzPviszDfJEYkM6v4cZ4ZVs8vAnbpkKSSb",
  "key19": "44YfPmXC7svVgRK5Q1TRzL4X9r7EbEKKnXDQZPbdmKppPLBDZf78mrHDZXaFLybvpLJ7rkv7ccGCXnLiURJJSGT5",
  "key20": "5GmxR2ECD8KoZC4D5CGcPVvizCqynxWKc9RxNoruteG8qf7L6kpLWAMtTVTthe2Mq5FSjxDJQcNfACPvv7zx28SH",
  "key21": "3uG3J3zDV5snBNmicpLNLED5obJYPVybBQPaW917rAyK76MDRzxKfe8a2HcgKTM4LdLTpQ4dpR19rfgirMnnBndF",
  "key22": "JGfHqgSjAecKCfeRbwytm2vJkj5oSjV5pGH2iwhasr1qyq1aKEvC3MxCkLHc12uKyZN1PAKvkmmknTiwYqwB6Uo",
  "key23": "3dRPKv4suDL5MvZs2TVZW7oMA53axhnnEwhHuP69AMysZCB4QjeJi1my4KcC3AGBVyU21EuvjQrofkVvKBmF1y3Z",
  "key24": "4kZsc2yXHT1EAV1Jr21kYoWbp2gYjj7KaBSt67T84oJHZN6VLK3h2YnKR3aaKDL8xwZNiXJ2bGSs9pTGKnhG6RVz",
  "key25": "4QCLvttanKWUK9DjJwHbpevyffWxhg4RrgTpV1EhJhWcRm5TXy3hYsVU9px3iNmhoYi8mUMuy7vQC9Dpt19s8LSx",
  "key26": "4XFxZd1UdsS2DXXGnAmRTfg1gmUuUroZHNpCihyRzQK62PrCETGUJUfisJ1a9YrFmUnpjRkjJ8BiihQUGQ8ELUiS",
  "key27": "5e6yWPNBVr49XzCFaxaL4BPAdPnfL7DurHHJDFKmf8g3ipwEUE668QZEpqhq9cFMTDahnUi4RbctZxtL8ahkYDoT",
  "key28": "2U5chDbnTcJSFj4vrYfjfQUDdUpi3WqikGc6uND6UqUUW6MV32U23Yi8HhiSrZKZzKnZ3oAPJoWvEmtrJWfHX1Eb",
  "key29": "3mLdd2QGDY6u2f4JBAMPhfJAZbkxXSZfphBGnB5s9e8yfkg288jUDJ1s5h4tcEXynf4YG4n6VCEPdWwdjnADRwTy",
  "key30": "j6z9M4XN4Ad74hLQ1CGxy2oWTRRa8hKixMCVNjY5SC7KMVjFLctY2YVR1HpdF2WaYUHASCevwtne9Xd8nd8L3un",
  "key31": "5dPLHRaRXSioS1a2tAwJxGuVeis3ehSP2HLasXuDack9p3xo57mwZiCopMmhcScJB9yWqV3KiKoeoxfQwdhHGVS7",
  "key32": "bv7qgGxtGW6oabHSLZ9ThHSb5HrTLk4H3B9uQhvj3nHdG7QXCaRYJ8ngLy8wjWzYmPoceAkFtRdHSFo7t8Fe7ND",
  "key33": "2bmneY3YArf2yjmbyrVYnpM4LcCYRUi8RGb2CUETAGzZ8XUSxNxz2h7Pr7qfbydUTbpFjVFCMuA2WPi7N5fFCEGS",
  "key34": "2uuJq7HWpzLhRHMbkdn3xxmKg18NVJAamMNFaLtFt9ba9g6rBtT7t9vhr95i2YxJq9yub3vurhsWhkWTgbCw6drU",
  "key35": "oZ3KhG857kiewhxpC2FLnxxdMKXDtbL9DqN7t5XDF6EoCPRCsCRtK9K2VBzztG9xmdwCqvGL8es8NSdgKQuDqUx",
  "key36": "Yu2YpxQjS8MMA7zdJZo4XSnJWnWminjM1UzWd1GZX5xjRPFcvnxVzemcmxktaepkDAtYVnqZWis41Qe3Tf66zYq"
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
