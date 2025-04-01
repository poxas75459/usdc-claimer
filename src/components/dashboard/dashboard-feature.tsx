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
    "2qUWFcVLtKhT3QQUKgu4PRMwrNkMSM6Peo94CJM3QP1vFJCWUoxdEUms1SDi7Re6nLr8G8Y6sD382rzaZMhPtG34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49fzydbD9g86p5PfRx6uUXugzmPMPPdFNaadmxPzsiSbCRVrfufZj8X3upaUzKKTrFDZcVw6gycu1xn4mXLKZ9dT",
  "key1": "5SidiZUBHwaYs8k1rbFX1BG69YpiTB1q3rAnjPyZgZJoX5i5LP9kg7weESxXi3oZk3g37v2yKKxyu7SdqHPft8NV",
  "key2": "66bd4i35N4SkPEJQFLUjV4iqnxNe2TXu5AyWAEMtHdZm3VqrpiZRrtHCwdzkp1uAR1S5YW9mgvLuRci21A2GyNjp",
  "key3": "5TrGCcarxtq8nsKUTGc2DtVmyLRPejCgcsUUVbfZLGN1Gut9np1GVbVpE3tcjTRxa1eJMrEfSTCWmAdaXzHzkADf",
  "key4": "2ba8MxPVcdaTGdEXX8LKQEuZAXvMUveNDqybkfTirumyjT1UneEXn4N3qUywZqgWtB4v4SMkPcXQGjCg9BMKiYp6",
  "key5": "664AXiNwgkBVz2GgYCYNw13rwTs6QTtQ84eSrwwFzqkWZrrvQVo5UUSzGQu4kRTXyoDLjecZ9FCmHBJKj1Fkerzk",
  "key6": "4PF38PeyDrcFn7PwQJJnZTbHQ7USBJdHkXhG2TYvvV7e2T7EQntqgjAcz1t6AegZtwuKgxuKJnfrRpSrfBPSC3ma",
  "key7": "2AJYu7W6oFoxaXV4yqxar4aboZRHDeVRf56eiFn9sGVW2tuhYPj9E1g9aSrakQvLGVmoi7UbyV1GFnx9UYLBbWgD",
  "key8": "5nirLUPqRXAE7bB4fTbzSg7zAxE3DMN66yyaYKFc84BfqGTexAF7aC54d8oJwYMGTgCyq2zsQJv8VWwDaCXMU1i8",
  "key9": "2cgSjJ1odGTombb8g4qxiUYD5LS7bCyRjPy2CBiswE7Ucb1WfX1SX2Rw4r1NCxkignU4UPZkjvt1zZQaGaSK3fxj",
  "key10": "bVBe4i5EgxuQiY7q5Bt5qdBnmSMbkpTNyqkQtPUGvudGtDeYQ5fWzwh4gCcXLou3QMBoVhmKiKfw4EuDPX4zV1L",
  "key11": "29SJWTSmtD1uaV9YWnHShTuGfo6ZuXdjLKX8xBRFKjWiAJMZzrmD9J4dMyB63KHxJxgWD7N2BZjeGJRTELTFGXhR",
  "key12": "5tvGAyDgej3ASwJQzSA7wVU6X4dbG6EkJpY5Ue2qfkTdfRvKLdbKnXZqMTvZRrY2Qvq1jRcw4YSSYMfHcevVC99d",
  "key13": "3ZZic6L3QLHx3yegxqmomApXq55QduPXxb21RUhJYvLUku3H8LSJ1MezRSx2UdP1CB8jUTSXdA5R2yfaZ6GTZwqB",
  "key14": "5yG5YTTFikb3w27HxGQJ2vnfCvXR5y9N761fyZe2B6ZcDQjjSeZXovHfEc8XTzNyJcqEPkzCA2Vt6w6MD7CLVHj1",
  "key15": "Txg5mbyncxo6qnJZutQhjzvAnRT6SLb849mRmqZfmicuxvYZi9zvAqg3gaHrythfvk696beLUoHrcDvDbBxkn6a",
  "key16": "4GHv7nTPEvC5w35KbETNifpyKj4hM3HoEx3ew47YwzHJH7xXma9TWxRH3xEJe2Jds86mE5xxCQSpUJo9tSTDjXUh",
  "key17": "MPR1g4i8aQVpcb14oYQyfsAqQs4JxsNjhMmcgPUhCYokrGrnyyatYGso5XJ7ngV9BHEiVvECugaW5LvmyvZLchT",
  "key18": "3AUHbzGTKjoEqbTeH5j8CBsZMGfvJCsju8HS9fuWbudbXubVREYsehYwyf49gTisCPFxmNs5YHi5MUL9yqAG9aRh",
  "key19": "nzR4ENxaFrTVDi82dDyXS53Bo8j4HLL77t3kwkMvWpVeKXExo3dQNHduAuFwy2ESUP3YwUox3c2KQFJyeQYCayt",
  "key20": "MAko93WjkxkZXRsitrzYNYt9ci94jVJHhxrX32JRboAgnXCGSo4U13omi5FnxsbHdPqMTnbSuriAdRs25R6kTQM",
  "key21": "5gNYf5KJabFHLA7JK427rvjuMaF7ieMuG7iS1uuZrmgsFjzzTeHvzRHFhgga5uLx2N6f2yn3ymSRZXHuoSkAdsH3",
  "key22": "3LfkAFyUBLo1jRwFvhHkSts1nDP2cycSak3FHaPD9cRcCmxcqJ8UcStv1SRB6UQQMocMRBbE4ncyLNe1fMFDGi2w",
  "key23": "aJ9a93Yr8BdBdLzCdoREVdkVQ5HQ3y3ECCTww6uhwkQ5FUttEuA9Tec2drZUFpfxGLa4TgiDnecS9XthvZrRmwH",
  "key24": "258sXeHd9NBE2C9wqwvWiFDwnscuEnwcnsFwqbyXMajhWmgVDwYH2qc9kjEYJweBfYrYNsFY84ZaCjpigRgVCCbj",
  "key25": "NW4EEMWQH6KA8Vb1WT9TozwPxjppvAixXMqAhJW2sbWA27VtTg3sJncKPRuLpKa9LrXtdNvHNof1gQ1DuAwUEeJ"
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
