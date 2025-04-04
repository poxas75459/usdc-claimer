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
    "2HrxzYKT9hWYrGeLQCgwxpRHie7os2JwEMovYattfS8jwLHJ1MPA7haW1QPdcuvJSM8WsAx22Yq7hLrUZTJfsnHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ketSuZDDK2tMTqYFM7tHFW1dy6TNLZG1WuBZYcuCRQtNR2uRVto5sZS4SEe31Bp6A6iaeLVXc2Gm99mMDFz1e9",
  "key1": "36Nkebb7FqHJUyugNAREWNg56xPfsXp4hcMFZxmq6TNXWJShWYyw9Kag27z4za5vyJU7us2BRUsHFtJHj46zoCex",
  "key2": "4s1HxPewJoJQth17ujXRjSZWCqpbtfpLCfqAEsbmA5BX3HD4xwAkcRzAKHmHVANjxJQg4eu9y1W9QBA6dNYSbXS5",
  "key3": "2TxBbb1pH6KJMn7fbZRqVQovUUwL8o5HTLmLyoiJ82QWfVCjC9wWt2aEgW5kX6jTK24U6eZPzq35bUgcmaiA15Pj",
  "key4": "3Wbfd4GLRk6SN7AEwDUiWaiFoS1M8qL5dAKU87dVB6D9MsLTmhzcJQ2DNuhruBHZ27BSnCksDAnSuReKCRMRp8vJ",
  "key5": "Yu4K5igNxmbwn5ScyuJedpjWMkts1VoffxcczuhV1xU1BwsFea9fUHooVBGC47dLy78vtWruKhQMMBxqLjXua3n",
  "key6": "4q1s5cxzH3zzf76vshffKDLxNoWiYEqn94zY2q2CdkEhu9zMV8RDrxCCfPUbAxvZh1vF62tomjwR4Gti479wmuFL",
  "key7": "5VSnLUe2Ui66VvWzUWnwwK2ShzuuvzPmgPQg9m4fGeNcBGv2iNvd7Dro9NCnv7eVWwouZt7Bxez7QCFipsdK7sPm",
  "key8": "5aH9KUhq8zcJBZJoG5qfp7BbgEQXM6xJGsC2mPjGiKZY7j9o4CurJgp4u4V9GnBFtd8fpMxEAXMCPh77bavy8UGk",
  "key9": "5xvE4XWwMAMiUZw1DLZQF3MaTWC7VKWYVjf5ktWHv311Bsp7mgkrt2fjWAsyzFkoK5WiRirt8pGZy3du8FPxX7w9",
  "key10": "3KL62hZfmfkYNBvGe9N5RKWLGuZHXoRcbewxA3LUsG5gqTnib1cpK5Mq3AM3PJgksx8yJuDpN9twUN7oNaEDprFp",
  "key11": "61tP6KwzrTBLWA8hiHFnBgyYyUTKPKd1QFo15gVRgj4mKuc8YmMDvtQUug2mPKh1oM5r4tTuHc67ZPcfBfzBiTKs",
  "key12": "4Tqcc23LJwf1NBVNV7VMNN5YoGM8s1hsNQsYVoYhS5AhxZx73dnw7HKoxDvkcJSb53Uq2mSprUPMwNzR3uKQVjMF",
  "key13": "2ep5cxvB4nFmXpQNAPdQKw6NcxxCnRgwutFHJ4Dm72RkdzHNYsHzKu4P4TSLCZi96BNPm4fJSv9qLosLbK4QByVs",
  "key14": "3tQPoqJnmbtkbjoXY6Fsobi1JUnw14jBuJ9RmNRZvF2zF5L6hVeuzqypHGMRbBXicUmoqbg4XySxoJMTgm4BkNDw",
  "key15": "Cg1z8otyiXXgFTDb7J3eX7jW4mdZ7WzhrtVgHFJQhad4ncAaJdgPTYYNgxd7b2KGRC8nRZJC8yiQ1xGriaCVAaD",
  "key16": "5mtgPVLBuajzcBqJJVZEK6vNfTHL68v1eKB9WxzAR6g8HP4jms9DVRWt9rZFCXekYRCQM2tSAxTsmBQR1QejQ4fQ",
  "key17": "32WRukttKYVETrZBUVAndqxiSYJC1C81wWxVgSKQyk4VKTptwxHMCwCDU39zzmCT64ZEHBhgr6GZ6WnHdkftqcze",
  "key18": "NFF5vMmCtwCZG19S9cCwiccpX4Jxe1TUke4RUoL9t6jNu8RDTQjxerHvjSfPcyVxukJjXKmAjwRRZHTFBhh3CJw",
  "key19": "5xHjbuKodFin9wincqaYgpFAMeJTeEDiHtCxdaD3X9qiCvG2fdCsahDTTMFzzPi7pQTQbfqW1YqVkhwMppJm6aFz",
  "key20": "36nrDtuE3wbnqmUzJwbJLTxVRtS5aQQXmG8X1ufmRxhvEQmzbP94dcsgud1BmrPcYaPHXDTEL2oiGcnJt7ZdvQko",
  "key21": "5nsEeas6zjKrKkBZWcieBUZY3WahQf7E2L7BxaE2tbyYBW2PNkjajQFWkJUghcDpnKsTPmSF1pdmRRzcfTk3TH26",
  "key22": "3vYdwQw6BrMxc5Sg5oGMqR5d6nGUNFGbea8nCsDoERLRXQutrYdPDZxb72bRSCkLXZcbwgJnYq7WnZ2hXpeakXXY",
  "key23": "3Vr6wRsqX659iRqRHvico7xmQue6c4Wn5938AnwvEGc3bQscPPW6xHihRkBTzkYw1DnRvh8XaJEcEFkJSJJeirZ1",
  "key24": "64aRnZJGxjfdZLgc8uhcpJfDG5nXzvLGTUqF42QUQPhnorYMr9uTxQeCouvf1AHymnBSfufqMm1oPiSAmwAYpE6i",
  "key25": "2f56LyJCQa4G9gJq42QqFG9MAeCjyQ3Q4XMPGc5gcwug13t6LDZiUfVBtkCVNLN8zDy5sSJHmBG2qd9quQz461vX",
  "key26": "2pQVnEbZ2aUag4zjnbMYJE6EV7E8XD743MQnFePEN5reZZxm8stWpLBQcSjRyja2ZnjJKmKTgepsGDnqsDAEtK7e",
  "key27": "2YaVUQBHaX1NehFsjKnjjUYV5ZDjjhh4fYUTVbtNL27SMipYRuZgtDqcp3jBkVEoqQMujppSnT3i6x8NrG7SwZZg",
  "key28": "4KsQXwyMpX1eqFYgxAbRJnWx7TUsvmXM9uZxYowTdQivgYBG3Rqu3psis46Ae3XWas5E6bTCVcVxXh4xxr89uEvj",
  "key29": "2EikA8hqru4QAqtKfWFFZMZ6NdDePGPzkogLAVjmGxceqtoxUTury2WvnjbKFmJzRLrVCNwVCf1mrUiJpiJkWAjp",
  "key30": "37ax5s4WQM1UPAgQ151kLbG9439GADfHZPv5GxiCYjzqDnq1tX3Fs2vi8sEoYXcnMK1Q43YWV8g3zaaZ5mFtksvr",
  "key31": "2xGSQ3qhtSCCwoisVnjVPg1iZ8UMhzmE656yMkL8NA2pMyGLfh1Qn1UPg7eviRmC9eE4Qh477mNjdNbkReMGf39t"
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
