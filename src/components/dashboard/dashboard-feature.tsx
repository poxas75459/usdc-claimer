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
    "2i5VCzpmMfhbJGXP2hSj6wkRiFwNfQAb7JsqDiQRfzXyV8M8qm6x521HvRpKHnvaPMknESLzsRWS4S9BgaBDUXkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KShfkeKtuN4nU12kfWSfhUFvXzLySyfTYAMaeDGthj8CR2cEmPJk8HoFNVKHGa93yTr35RFyzqNjjpJASr7qJ5V",
  "key1": "4LAiCmLEVVd7nAU1kUhLSr5TMGAuX8ofRpgV7zAmGXczyXVv865ryvUx1gA7w55uhyQVcv12W9zvzcchcM8RCWhd",
  "key2": "3banbWG9UhieULXR5NzdMZoUyVp8ouwp4rthTLna5zQvbMeJLJefQEYhz8YEo12DrtnswB7QBpkYNhL4nfE7275T",
  "key3": "5JkZT5pXZXP3ZSXtwr2LpCzSypGk5nMhR9b1DGaepXCB13QpY61uxqCtGgbrYmu4byVjsDqYr1k8etsmXGQDVMyo",
  "key4": "5CUpyAEYSiU5mDuGBwPPZse7Sgp59Bz2cZG9uytLs8kvxBhta4JVeqVSmMaiuUcsBXY8QTCQAMp4Q978GUX7tCfk",
  "key5": "euwWrGu3UXTP9gXBrPax6fKoEx12SPxXXMHXSnLyEM6tcPEpBHNSTY1HsTeHwUTckcY7uUVhQA9CoAyieJDmrHf",
  "key6": "5ooStFewnZickquUod6nEPjhCKXfUDMMLoE9R3hG1BL6fZEzsqFZ7S15MKeeqb1ZRwVeRaEp9LVBo3aFkDX3JaAx",
  "key7": "3M1kYxH3goBGmsc9eLabcyjQarnHknq2wjgAdYCeMobticANhV2kqwMmG2XjZh5cCqMrVZQc3FJRJaEbw1wYg6LA",
  "key8": "3hafCdQsZdnGC3DuGMt1eQJa1YtVZxedSUP9hqiFMChVbYDqVfYPrPBK7tiTimpAwYMdh4R5FQwzjQVwWAFy8pzd",
  "key9": "3uJhZnjgEhERMfrYzSmESAH6qVBAVVJcWU5aBpPYu5WeEHBMBgJg4t1Ju7efGwUtwfS7JGogWuQF8fik2SoBiE5a",
  "key10": "4HaokG7uE41qXdzETRTFkX2r3CVSvnkEhy8F3axDfbA5DtU8LTkUNhVB73USoZTmLgq8HJ7QsZVsdseUC3V5T4ND",
  "key11": "4rcR2Hg6TQqVnp8QsVTSyV1XXxyTmivhx8jenAbB5nqaeH2Dx4REjwsxa1KR4nFaqVBJbQVZu22J4FsodbzB4u5G",
  "key12": "bcSaA4NNnETFJRXWzGQsM8DbPFouDgo4TmePVGVZ3F6GxNDxrpdSpZDDSjiL3HvZ8AUyB7SFPmTPhDC2jLHU2nC",
  "key13": "3MhjTWXij4LWmiRnu3X8fztYyWJJTZ3KHJzJz5aVQLUzQovp7VUkER6MizPv3obFYoAXm5F6cZqtx7eVNQ31ujgK",
  "key14": "3aejNzfbmHGhnDBkddnhn1rzJrsKbot7fbbtFFMXtfLGVMEMguFTM5eWjtotNC3hrjihonZid29ZEUpVBAHTBEGQ",
  "key15": "3TjvDzot1fxmPWkppPUe1vLM84ayG2UsfK6W9jwKypMPWTWjdMvfwsTdMpE4Y4VDj6eNxa5VacTmPBtaEtt534Ai",
  "key16": "4iczj8V4UhVrNQ2AoPYzzMErFVQnDxD7HPZJTEE26Z4ZoCVezB4HRoA2yxA2CwUHsneE6Ur5GwSa4mePTayrcXAn",
  "key17": "3Any2HipnkEKzjkmoruJejNSrgToJXTmQ6qsEBVDMiY5vjrxgdumC5tENRd5xNeXBzZ72jSxpQDMLZdm5EvvWGFf",
  "key18": "azV4mkEYRAxBm9qiiQ3XJFCVuYY48NXGUpbDJxcT9BNKbJpQkSRHbWhGLPbjp9o8Z1S16d6VWuQAQTBEXBCW28r",
  "key19": "FM6dNLGMNeDZ97BgWbGJ44Lgq3GEKJk1PqMXTcugYgTprr2h4KEu8DLgy8b3SmrJCdrHXBEGJ2WmeYum8jY8UGc",
  "key20": "2kvDYkneQ9wfg7GMUyTDar8NbgjAAfcbfNdGZYCBy3EhooWMi9eZCR8PJmTqMgfXDuUQ55uC24HhpvSTpBUhguPG",
  "key21": "24dk236UQvJzL8q4LJHzdPPvC6rHt7a2ZiCHu4aeDvSBr2AgDxykRtk5teXuYbg3zks7bKpJzDDYe2JNbYfk4EqB",
  "key22": "3pm5Sg14HJa6iAqoDtnPYSyYksK5mtc8DQqWfyWqB4gvszPZqYLyXuMGyM8V3rpgx95gMEGw3HQscFZXTveQLnUp",
  "key23": "25efXpbL6is91Er3i4eVVLjMp8JYsf3izutNQCUdJpaAP6qRkwLXTsLp88xZsa4dXjXdfgdz2Kd9DBDUh7vGJ8mt",
  "key24": "44i3JNfqGLDAxqk8SSxWS5N31v9pWYc6AsLA5uYudtr7EoVGxig2ucgWv5kzbCKLF66pBGfzvK53wLi5W7RCwrBR",
  "key25": "4MsaxBmGrTx6Xt9dpkxH6UNm4CEGRKfVqgB2A1KhMdwefKKhF6SuwiLRsfBTT9GkxcdySabXzX6P8tmw2SRfrM6X",
  "key26": "prGoidwHu1cjfmeEkNmXp1nmkyqtoazEQL95B9GRoSnwvhXLGQ3LeZFgPASJJZM22LYpQpVruhMgFfqsjNSJH94",
  "key27": "4jA3C6663xqCtDc5edSDeF9JM5h3Kb86SjTGSzCXRnUJRNNbpS3jDsNefwMhUGQinS3izF1gT94NaTcKCxfSGrCr",
  "key28": "5Bsd61GceJxf66swZpg1qHned1oKr3ZAtG2CBtSKDV1kYRSSL3Cr5CYAPkby22yBLpcvV5hbKqbWpXu2BcSnap8T",
  "key29": "3cuDuc7QgyeViextpn2GFv7AQHW1d2Gvprsos8JDpNjYmjw9XVKBDmhNgrX7897qpoJLAAWFYi9yD2dFSF2GaCjR",
  "key30": "Dg1AsHWCwe6q5Vu84grp5ajJCSrteR9WucmBKerv6di2D2nCJPg26mXUsAxRNe9tbYydfeS8Zo2THwu7Yo3cwPm",
  "key31": "4Edwp3ezi84tEG8zN7bdGzquqhtbw6ML2ifYoNpHJ7BndoPQwivGZi7SuKWqfPCg2eYqbybzsLYhYTTGEFveMLv8"
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
