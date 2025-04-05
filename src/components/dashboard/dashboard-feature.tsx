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
    "Ute5tjwYLqAQjeSSAcMKMwCR17pJCTbt694CnAeZum7uMsxLPrhCsiTkqvUvi4nnPTniWHo2GL9S2XvCgorC3LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYZ3LZ2hbmUWnK4K6e3jaTtR91ti8NJmZUpyu5iLt26jHJTZ9TqWy2snAuSm4ULVBJZD58nmwupWFUJsxB5KVqv",
  "key1": "3ReauA4sTDsM1YcoH4ML6vtkFfjqEKmAmLEimnJdPPRFr7AERxmqBRRHe1wMZEGXpPtHka37XTJd15EsCnKkumQv",
  "key2": "4bmdZsXjuuEBo3RNAUeizvNbAzQKyQ6UwPD9iWEWdWVKnKXE2to62mrMHcbDNE9e1BRuKkwPFPuy1AgyH2bW4HhC",
  "key3": "ExLn8LVceFREggEzTJh1sxKMJD8UeLoRXRF77twXEUcTpXYJ6LGbeQPX3at5hrjZBSWkK5XvoYqZCaE5ZJJRevo",
  "key4": "2nERXBoqZTfeRuqJj1PdzMgWsjyLkoETZPkEz18UbqrVn6wbvPXhpbz9JEpq6zL2QG4Zaq9k7PT49dq72JuBCuwR",
  "key5": "2a5DtBsT1NK4VMhZWTZ831dLwWpznELEd5JiAs8Y86TnUzyCgiosFzWwH7Mwm7hqjwfJbRzBYFrcHHGbXwwR1eWt",
  "key6": "3yxPChRVcX93Gmqyrjsy4jaWKNvv97dyz3yiiU55F8y4dn4NhTcw1bsD7YcAMGRsBqcE1jh3eUdWNQ8LiwCDbapM",
  "key7": "4q2e8Jne8aKJDCNFaqduYDjCCzSnr6q7tMazjMwffQhgKfdGvbXHkSeGm5HdMEyTcYRWgMHKbbpLwbBCUv8fb8rs",
  "key8": "5JmkEypkL7ptKvkPYr4pShunpZFMyerrtc56xkmU3DmA5kEqQsWRdUQWYc3Rmtu1APHxySvDWcMtDviLWhq4EjTL",
  "key9": "xgz8MZH8hLJ1hZza5H82q6sfGrG2KxsaMyjgJnLyNaQJuzGfKhtBDVh9ehhLCFNj7X8Hxim2d32ViNCZ2Lq1ih7",
  "key10": "34RDhD2hHoreQHee4KHhjgJkHYbV8W6aPz4TLe8eDW1kV18JTAQ3rDwuyTHKsDRctwwNBXBk5NiAB6KirowXfKi6",
  "key11": "63SUXSoDGgJxCke8HqnGDhPkYM4crEQFrGVzzbFxhjbtxBDBnz9ahbX4B1jaL5xDJjeCQsgGNJn8aa5oYt7CfvS8",
  "key12": "4Nw5iLdYNmbtWWctZr3e7jpb2K3B5ehUhuPzDjxxbEcRyhF6d93zWw1MH9NrCxECutFhoQ3XKhgoze5Q71YT73if",
  "key13": "2LGXu9yZB7yfHqMnYAkQA7H3PfjocosgJu9rG9UYsimJ5gBBsXtRBhpPkSyaHy8wSWHWoeY2cXfYrbzXCtGFxMF3",
  "key14": "4GAUAbAZTjXn9bheYkQ8Wp5mbiogzJcxRfGLdLo4gJcKypAhYWV1yavUZ82jWu1yjNrCJgV3tcjwmXCp7z6UZuQh",
  "key15": "32Z8coUZWEH87jaz9GFtn53SqkH14BymYRse3HBADGDyucuyXAKvwcAywozrF58hCYrYkprHVMvgE9YrXj6QAYBP",
  "key16": "2Sf2AARsX2TNUtQ1ZBX8hPAGmShWyrfZUdSzpyFmZb6VEkWZZ6jFxRVziFt7RsNyYEXXMPMqLgdbHeDMSqoBe1dd",
  "key17": "5BMrqisweNpZnEqHySuPnBCT4qpj5FZDLHgvHWLxdVeYuq96u5DyW9QWqB62T7GAfzvbaomk6xcZHmCSugUxL62V",
  "key18": "4xbAQnTQgY1FnFRfyphRmUFXYrba87mMU9THJz95p1DzKNwGFzrkj2oTrMMKaaYoYRCjS6drAeD236vBCFLGTtRD",
  "key19": "2Bf4g2WS1nh754nHQYX8LcFV1RaPrLQ1sXkUKdVTanwjKZuSxC9hThKgWDQSyyZdNhMYLtpbN9i7TyRMExYxEupQ",
  "key20": "5woCw1hFBcLmYRxYUK42yogtSgqVdVYwKLgH7NizEi1PCfpzgDbyHKGx8Sq1Vs7aXqirp5QUxQZxmhYme4dGa73h",
  "key21": "3n8JAj4Lke5V5E8A5DgRkHpFfSxJ1sZDExBJfeBMxBS3hMmbpQHuGmBLMEnXZgHnBuwchsddbmRiLRoUUZCjo9R8",
  "key22": "65oDiQGjnneE81nDejEjwUwskTHFWzPNAGbw88K2TMpauzxh1kwa9dkZtTMrsyLBR9z7Pku9sFxiCVaa7NDCYRkm",
  "key23": "5xXuGFGT1B3crRxHgjoHmzqqcBm4iw368eb141hiRMreqBxWWsmgDEdavJDsPaSxo3T2yXwh6SrGhQRijxDerqNs",
  "key24": "2xe9ZBgVtRobmRXLiFzDYdTaQRzKkMCakKhT4MDsqfeZ6cbBgATmmyvizyWVkYNBwLZz54cgY26rWDyEsjHBxwfY",
  "key25": "AvXMjQmRRLiZpNU96TWHVDLjEDWT8HEMez9mN5kLubCbQfFiPGtTHmgGC3h4i2aJMSLCkTdUVf6xbQNrzaPXjVs",
  "key26": "3CciRWT7m7CTV4jB1ew4W6nxqqQkF3Tx7ppMXzD6m6DvcMJMdy4cpgqFRaaet3jQTCh6NFVhxFUzMnHoFJnK5QzT",
  "key27": "2LMQZs8DnJx1F3T3Lk8TdGTT92XsJNaxNfidyJhnP9RLAyXwwyj3oq6PgbL3mrV3F1WqsxantEzHfzHd3s2F1Ka",
  "key28": "2KEqZQP7YSxEfPqCb1ytXwqFr71uJYmeqUNSmiJE8FZC6XMExtj35eh4gsaGct9yFuPbPR2AG1bvfvfVAVSKmp3X",
  "key29": "4NXdqTZYdcMpTmRdhnV1BV9JsYcKndoxEAjrpmNB83s7KsSwCdFcDHMR2cy3QGaLzgnRFMDL5o1GG3pxNsjArioL",
  "key30": "2LNPFykDGHm7BWoaHUMBKqaK3ihNcHfhfWaaMwuPEzVEBGxrkkhCBxb4zBtx4rXhukeHb49d2GcNGK5euwB3pEHr",
  "key31": "4tZHfkpvC3MHGktkJ8opNJX6jGkrunde6dyLDPrxPUBbK9XJhjYk6e6gVBfxNLtEHBEL4huEv3RxuAwZV2paDUfF",
  "key32": "2pLX5ercBmRYvx2Sy81cBQDxyFEFkDQkHzz2Zk4Xk6AVh3A62qDdpsp3fuSdh1wsHAoeoRRmtTpg6iJu1aQbisd8"
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
