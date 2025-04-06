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
    "45vocy9eimvVRoUrDUrkEfGSXLdN9GcgkSjqyhuELNdUPSjtQiTCvTpvbD3TQrCJ5W3ibkqMmYhv1QHtGgYqsCSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yyun7sdBXQ7pg4BAz38gEPe4hsc4qDLN6zVMg8KnFvGURtdfCJKSKr3gDxK3y8s2Sb2aWYDQVicHmf2UwjMZabU",
  "key1": "12XSbFKZxSmTjb4orm5HY6yrXc5oJi7xEsRYF15vedJSQCL3v2KwQQirM6hrR3f3voKzamCL743a1CQLP5KsdQo",
  "key2": "2Z39Ps99pHrHFd2c68hVz2FxHG5uhGvXtZZbvvqrvGUXGUBVQqkhru5PzDWQ1nuj2igkREEdTuWmQvo5JEsC4UWV",
  "key3": "2V3LtozR5YB9fK4HJ4GQagznNRJaoLzt9mRnLJuMMyVyevBsfDPUcJRyMr6ps31VXRTg1k7jUZ5uDHhQDoYn5De5",
  "key4": "41Lhsdr1TNxMpcqwLLY7HhZuTnTUTPKszxnkntTFLiGcAvVLN36YyDGEqKY5axG4H5bvvqo1x6gwrXr9GRSRVUga",
  "key5": "cHGTZ5VdsvuKCq6fWUww3dXbH7LbBD4g8xZEuHheS9GRfiWtQfpC9DQXXrJGgpN9acUsDPjCkp8QwaDF11bmU1g",
  "key6": "AtCtx14C78jB4ENbSsSeCtn5Cp855y884mb8GrEtN1v43GB283KLNDaEvCjgoQWhf3TmeAWKf9NjJJsZdutEeTc",
  "key7": "2PWfvkERnj5cUbiTAJRZjkAYZoyWqjaapypQHvSmH1PjMaPJbfZRe1t292kXpmDXyac1pZdoFkMPmuEVUiiaKYr6",
  "key8": "2bZsmGvrBoytF3E97p4e9tpYfXqTubaMpTzSeatuWhezMvsDPLyZAgqv5wS38ps2ucXrvYRh8Emkkwzn21SYUofu",
  "key9": "4EUCyrdr9qb4S6FnQuDxki8cRWEvWJN6MPJvkE4c2DS5mbNeDFCqFmj9piYMeeH55STBDsYciN2ELVQyF79yXaZt",
  "key10": "126pKK6zfdsH64N1Aea11hkrjAmz1XESWhN4vUAHKGnc6G5oKbFoowgvM1q4WLdfJ9f1VdEiKYw541JrbUE1CP7h",
  "key11": "5Wmx73AteTvKuXKrqtp5F4eA7Hx6PuN2yF4xo1gEapW5MPKjyoxakriyXfX473gBSyq3aeLjr183nrSofatUbD87",
  "key12": "4vRnEGiYy5fuPMhPh5yQ455XE95YZjztK64zxZT1MPPnrWtatQiSrTnjZVKB5piMbvvudjVEDDpEAg7AAK85cs3g",
  "key13": "5F5CYkLH1dLRD9Nmix34KRaNFDZ77FuYkHrttRJdP7ymeEPnhNtSqG7TobCEo8Uu5XgQqfUYSywHNYyVbwPkx5P3",
  "key14": "3T28aUHFcPX1XoUHwDQDK8W7iULjrQ3fJZKX4tuUGTJGWHzNThn4wvBFMbZk52jJVVWQ6CuZRUvgQM4tCNpmHAFb",
  "key15": "3cRMUdL9hZNso7gLN9yrxjMJXJv2aD4B6crc36Q1vKuTPau6ML2jShP7Th7tyUkBMEKrRowCRoNvUVBwyNr1fWGT",
  "key16": "5716WkYJ2dxjjycePc3PPkNbiTTbm13cRsdSkBLMULJaPKsAAedD2BYJ7SgqWrFypVhWdjLzhgKFrYQFsJpgkh8d",
  "key17": "4A3SoSKx7gn765V1x7bYSdQbfLMjEW1qXTqErgWqwHBwcvj9Ny6fUHw5xJ4wiLtkJyVDk69XT844wws12ufRPDSG",
  "key18": "5FEUfrSVPMmxtaEtg8hUa1qUQS8n7Htdhzm3TrqW5ZJEcFzu8nTytRHzmZ4ZzuKMVhPq6QMwQxWKur4w9pd3Y2sA",
  "key19": "41yajQoNuCdwZeyfwnrUnGMi5SRpjFbXBqd7b8tsJ8UDrjFbffMt8svW8RGXV7T9JdwxMNX3rVpDSw4SRyWYehUq",
  "key20": "3bk125fFcD4oxV4krTQJiJprocmYvx2aZFjRUq4dAE818DHrUQQhXRGdefBGBaaYgNNiDuimgQSRNGFTxZ9ZZ1Dk",
  "key21": "2SZNngdUqvLvQJfxb8KGsTE9CCUXWv6C77bU8e72spkuzyasoGphGQPE6CSNZ1xcsHzwJRphN1ncvHj8W3jekeJQ",
  "key22": "5anjKSPPDVPzFtjR2TZDxVLQtRXXMkXYMobjBDDgEom2UHaagLJkRyjenZjLhYArebjgZBba7UTs8pEdHgj6Mnzg",
  "key23": "4Jub9UCzUTE5KqenyLbDABizFj5vSMypS6KBx1xkxkcmnQUEsoejaMwt7ZRD4NhE7ptyF9UoFN5HAruFqfK2cEy8",
  "key24": "2Dgxn5nh5h5TzvsaN3ubXxnfKTiyAvXhgNVEt1h6Z3gbet58uxaZfZn676yZyzQ5DwZ68w5z7gbrMa6nRDRQPjtc",
  "key25": "2Eqw2i8WwYsfZsNNJU3Nj4EccRqVwukQYYGFELXaKMS4MQq4gkAqWZ9BJKbz5U9N47LjpUjtMm8wbo1LTqftnfTv",
  "key26": "5D4hUY9ccm4akJKtgajcEtYjWjBAS37Py8yaASjrDf2FdQp5g2Z811bEk9ooSCZ6fJj3HcGwyVJRAuVjkhgnpM7v",
  "key27": "UYwEk8fDDEGugsz4Cp2RRBJmTMmapeLZ4YwrVdqeGHyVxrR7gEpGeFvStdKZVCwUV7ZKDVHn9EDWLVj2SHRVb46",
  "key28": "5HWPrMNCe9NGEip5iCoU9pmBr8eC5amLzywskVqZcpQmpuZzH6aKaATzaQsd7juwLcWxkjNwyNp9ck99fy83k6rz",
  "key29": "3dChvADhBkMHKEaJ7gGdJoFzsE7bqgMRr2Edc9fisEXbm8XT5Cm5xt6uRfTo3rkRC7oLeAGnZqJ1Xk8hmhTivnd",
  "key30": "4pfjtGhtA9MBBqNhVAwzDPQmCRd4KTLk61xNMTasLz9LbnuGTyonWJq3t4BAb2WqS9PFJvJqHxzA9VRhvxUYEwE4",
  "key31": "5TPpwm76CPmJNPiN5CjfZ4TD8wZCjuEf5Vi3raQ8WTyJiFyx1eGotmN7R8qS5L1PA2TGSTXAyD4jAdU5gkNpX6QG",
  "key32": "tY6SehXFaq3Ldr1NZP56YY5Ak8yzXWY6Wg5D95U1xz1CJ9rzyB6PDk46Kbfy2fktvbNa3mLCfGJGTkAa6zmq8qn",
  "key33": "29v69yJDAyha4fuk2Qm4KdHeGtEknE9LPq3fuRURZfFxK7qDXGzbEMB2BcrpsNe39X2BQLfmv2YuLkuBK4vmeUhJ",
  "key34": "3JFfGe7EU5tkqg65ouQ8fEq6JD8g15FR4EipzaGJp6Z611jPMZnHRN1duQHHE5PPH73qUR6km6FZzuLDpbDEztFy",
  "key35": "4B4563LUzmXReTVQQSMT9EWK5Qf43uDQkrmooYz6ZZMMDkkoPiaBwceRkzJE4oWuUe1MmQhYoHZnsWcjXpydXyts",
  "key36": "5eCJtuB66QMEfgU2vawBwpz2vSxmCyR6LwXJYf96yVgYDSsoemi6cqpUzQaobQDHSKdMyLkKn8N5oXKKYzqqMfER",
  "key37": "2X4ksxrNVcKCcGpGEEyoaEpPhkdgdHVWNZCCz6Aty5PqL1JjvwRauFNvYm4mZGw6WKLa5BCdtnMzwd9h7b7AYgZK",
  "key38": "3myyPCHbRtdvcn7PgxL3aDgVUAHWLHNNV1T74LjSD2cJhKFYDTbKTebAev56SDqwy8Mu2uaWngNoxXptG7JhhF3u",
  "key39": "CwftzYGikfBQkcYT4FaLVrRhYeWBAdR3KSbMXHfuRyk1QuFaY2o2sparGsaLS3j2u7LxTiEAKtxR6RW7Em57o5V",
  "key40": "5g7ANLtYi1ZdvzUwkqecjGPkZNg6SwoEzSdqgLP2QaMmL9WX93Gd9KLt3FTvWDsB2FWnd8QuQZYe75vGmBYSgXzs",
  "key41": "5cDS4eCHjx4tv4tavHB3suVXByKX46gyieuDV5jfJJMRsfVQhYMhDJk154MSgZX5izSE3cg4RoLVhbnoPUpVFCfV",
  "key42": "5xndyk2G3kY1EVwsC3SGeCzyjEA1VPtkJDMJFn2cb6h5PRLXq6edYJR4zQWpNMcTovEGwYB4QANt75gvvZ3uG82y"
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
