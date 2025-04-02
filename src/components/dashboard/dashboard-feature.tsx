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
    "4mDzgfVxyCXLtdQuKNkyHxmeeRD3UeFz2mYenBPSLdFA2ogwuLFoVv69iRVFzqJNu7wZcbpRYEwpQZDQjBYP55oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNsN2FgAWiF32rvUYFwbShmqErDaBqQLTMSofZazGHNERTqkxDwt6SyJ8zLEH5tLxXahwqvwCdxb2JRNHpdURjN",
  "key1": "sPKsYatebikcdyYhJRXvoePV8PM5cGmjhokpaGVRFZb4RpaftsH5v9L4vAA7zwGaWTpV5w3KbGwNwqQH3L1x4PR",
  "key2": "2c7YYJAjzXmbGpFp8nm6uiGjiYNP7vND7BzHau241XVKykikq7PF2mLAG9PsnMFKgPJbaE5n3s6htnwZ8FNzk2Ju",
  "key3": "VcvW5GMR2dqYfSr2nDgFHDfwFXsKKVWzdTP7s8jmRGCTPJpdG8eDxW7X2MYiv7Jj2Sd39GiGCuQ8uJHyaZG6Jtr",
  "key4": "2ekFXQBnkiGcx7DNvENDVDo9qcoCDLEg3LHw2M2wvYgY4fzKpwCaoH1q8YpGZLiivH7ZexQf2bTVtLrNNk1Qr6pA",
  "key5": "88B9QdYKRqCZAbWwxfJYJSUPPrNAihX4HLvvcHfuXYBUfDJizWmbYvVghFLVjH4DzvRCT15YjJF5BMKjsiQJswB",
  "key6": "5RN2HHxoHQ2SBQPvs7g8t77cABRuizhRtqgtPFEAqDMQorToFJ9DXD9MmxE8jjKWQV6vR2sToFr1AVNjWC6wukTV",
  "key7": "23TAoRV4HtUkUsWzquMZfTm49CbCmtAFt4TFwvVPZFckuB3eDqVaXBZ8D5hbzU1S9HbAHDDMG5345bD8RsYYPfuA",
  "key8": "3L2W3iqCXTvrzHnSbQExGeWU1JVj1XhbmSBAXhGvekBan5rNdgVfwjvkiFUd2ZmcEJpDHNHMUNcmucxJXREtGR3e",
  "key9": "3ZXiALhJgA4ApNFNpb3RMbCKs1sLWqBamFv3Nigxm82ZJFpxZSUnYBxX4DYMVcTJ3V5q6rg2J3qYrpurPTu6wJQB",
  "key10": "5vaj86CCScWWj3X3UkFyxsjpDPDdaK6Y7m7irnAvKKTe8SRi6Sdf2t3ht7gPxjAR9mc1phqC3Qye8YPWWcTnfgEN",
  "key11": "4w9iH1jndGJveXTeyHX3wUyxXrEjNTYiVBePL5BAL5zBbPfQ4K4recj5fquJ9HBFN5uvc5aBkoDTp9J5jRocb6vC",
  "key12": "2vpwVxQMPzW4jNmJ7gJC58CvzBQbWuLCcAj3ZXLWniHPYRL669BG6JKszYWN3sjXvWYeFnCqZdJU47qUGKsRx6Ev",
  "key13": "5GqQ84ny6Kyxg15e88s2eAsSZty2ZnAAst25ydt7Nq4a4HmrSJtqnKZrfihqqVNYhzRtQmc8k8ZTFVzvto6NZ91t",
  "key14": "4iwfXpd2PeBm3kQKNdkonnWgdk1JEnZEoCZFxgj83AdN5DXE7fawJSm9dBoxNJe4mAN2V6S21HheeMcQbdD1NhWb",
  "key15": "U4YNqJ1yzNddCe18rT3EkVbjGNLLWbDD4PSz3KaM2bdTRi98Vi4GwPSPuQtqn1GHpBCoFu1XA7T1heju8zwTG5a",
  "key16": "5VQSErcRzMUBoUKof9VsqHiwcp5msQym9SVW1RiPhwUaCerk9hu7QdEPhTTYKXBoP7mqYtmh9RD9z5A7YzH97nFt",
  "key17": "QbmjRDyyYeFW5rJwJLxGZ8Ei2ANjhYoUCqAYmP5mMwYAxZfnq2Rag2Za87WyhHNuRZt6auBPe2s3LLhSc43Ar1G",
  "key18": "2GzEfqEdi9YD6AiPdpQMzsCmRJnPcAwQmZVEZykAHJw7bJ47tZbaMYTSn9xF8Jzjt6WjEboMYNDtqdLogtRhWS7B",
  "key19": "3yDMeThCzXHfQ1uS6MRCJiyLnEVvXWf5Kwtd7CamTL7r3UoYkwKVdQsUiXDECLW5FeBe9wrL5ynCinhmqB1mnm9K",
  "key20": "26GA1Hjyob8Cq5KwbmKEs7Ld9PC755mn1Ebcjba5gtQAiWQkXKUsnWh9XwxP3CWQzgjFKHSTzT8oSHbii4ECnnZs",
  "key21": "2gMZucw67p9Lz5Tpwqu4Fuvu9qRRzJsnGCLHZ6ND73ks5nQWpSASrFqh6JgRZ4KuxP222YfVbuiirzvqMfJpdBA3",
  "key22": "xMvKfnqV31XT6f79bUx5eD7qSR2VfipV2CMqyoMQQoiB3EdDMyRxWDvc15pNWg6RVyJyU8ttZAJsJbzRwEMRP3H",
  "key23": "2FfKk2VvF3vnvG7ygAtoWhaV7pDH5Nz1tGxFo5qwDiRzqc6EtUpU6btdNRdHxWLpX4ZRNW17zbCixHW8WS1MseLB",
  "key24": "3QssxtJG5FqwEKD2TU5k26kkZmtUWa7gHbJujFcNxjvhgjs7Eusa82W9DqJN1QbdE9zAtaRe5dMKmP8knvgwuDcE",
  "key25": "2rfCTtMk12Cko6AEMedbEyqKYyDy2NGsDA9CFnARiB6XXsYfJPqBRLGwmTi8bK2bF7hTk9Kpx4YaGJxCm7pWMCYW",
  "key26": "5Ah7sL9FzJJ7K6yWVNi1jqcE9yEQuaMnRmWNj19nTcMJRXcHodx7ea1B5cmGrgRPebda8nsAfyVYY6HjJNPmeZ4i",
  "key27": "3Z8AKCpasFGpx4B1rYE2aYzcKqzzLZ2CWf456KECN9jiHeYpJubj11aNh3G9k41rQYHnypAmAHiQ7E4WxL8ZKVqT",
  "key28": "2BbEopyKrZBAGWRagV3mMSxqEY58tLvhngPBDpDic2PaoUaKTn615E6Tu3BRkYnsnyyt5Mj4v4BPeRREf1vimLfV",
  "key29": "3wt9FSMVQg3k37hewpu3upw2uYxjsDhTpNMPE5eTfQUd6nbQtKHcUNrdUZvwMcEicXmyntFe6xgmjRrqEqf1ggvc",
  "key30": "dq7KikozwSnkVAa7RZNgVpMZRJjX4F14YFktmkda8jyHWZfqKNhKAYvXABQyp19Q2dzr9m4KfZC2N3Tb5sAPHau",
  "key31": "3SjdpBRm18eTqbayzSiLpmaJrGstzkRWBKhAFqPmiW4QG3wA9B3PVV7dWKEysMCWsooWRtDyuxu9391MzBiDVZ5P",
  "key32": "5299FG7zrBqxKVbZVofhXrmbWWy9iQtNNtPKFmbrtpWsps1fq37fx3WRN7AqsGhRfnGTfr3yxeUi4AivJrkTgjXz",
  "key33": "4iSchZ9NQwKYJNYmNpADEd6Hp8rQizdufKn3eBac4fxNTZTAVibjBoZPXy6kMM1pm1AeY9oiZTiXXc9oNGxhuFcp",
  "key34": "PQEReyj5kMGJyM3BkzPDghMYqCmqwk7VYV8RJhLcDw2v4jL6G6pLt4cz9U5rtYTBViAzn498oXDFfe26bxiaBmm"
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
