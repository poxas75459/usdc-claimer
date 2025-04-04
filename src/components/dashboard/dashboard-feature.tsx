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
    "aEU2P8JGdbcid4uYjATHzmBDpLfV4PkVKgCMDy5hhfpK9vyRXv9J7fUABVS7YfdguzEBbenJCgprvWj2gthwjqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21oBniL5M9dxjkdVNe7DztGgvbsUGXTxA7aQVbJX476KPEgmNHuKQJS3V4myUzAgkn1gXcZyVC2AF74LsmebdqUd",
  "key1": "2qqusT2hwE6q671WJZKDms7a52xmWsA9wUEtMvezz5dBPu1VN6F6XuyPq5YLtp4WfCQm2snJzrYhTknzQpFdygtd",
  "key2": "6ps6NjyYdf6PY3ZXDryKt31eCBjNc1ToqsBPUfvWNCtxA4NUa9ujBbhq6CEhiVXw1mVBcUJZZhfQ1kHTuVBcpMP",
  "key3": "2fiy8QjKLryqueDvPf4zXdCCbo4sq5TfGjGv9uuUrvRb1sz4oV85Z3KfW7LMBr9LoaYLZtGjeVf7g8Ld6J5kDAtC",
  "key4": "49TRCMMhzWAtbw2f7jZg2WynGBSyejwSgy7GqHnujTtzbX8xXUjYVKRAHSkvggKLihMet5LTm9gbFtqzEJpLL8M1",
  "key5": "2LnJK1WG4au3sTTm23QTFdd7BKhCzjHQicRHoCUR6JL8qctUDhgTKETjt3KTQg1oWssEbkfXUUX1bceWEmp9be3S",
  "key6": "4NtUZjoRzoBXGRtUnhMf2eydGz2PhVFGzutNurDdXkaauJWgdNyLvj26ruNnQ3YtRumvw6xVDabD44xS6oqPm5uL",
  "key7": "Kj9XC4PXMN1xHb6DNgjCK7okAnr1ZzPPXpCGPpj47otagEjcBsuRmVYQXGER4wqm7sfsn95qmEUYTx11RXdUv8k",
  "key8": "3whypc2ykXMVinZsQPMLJ5aFM7yNbYr186rbBpEjb7oubnsPmJYW1PE5Q7THX663UnWkDRvNeXxHvHkB1Bb4dANy",
  "key9": "YRTpVWvXZvDTUF4zyhz1CZWzpEfsqr3HF1hMUXxZDCLpATMzSng549qabn7J5uiVx3sQRupgRoBHSQAkPoa5CEo",
  "key10": "38RrtwEwNHqD1wmcLTF68dFHicCVBwxgRAGjHpZerqgAVewtC46xZZWTpALUxUwT7cmDhtmjiFa2BWgSivZVug9u",
  "key11": "5rYiJQdFJb123yv9cehDx4gcRW2t4Gk4fMFeTziN6JUPt9Q9FjJBSFWgAYG3NVChGwHwC3rBmULNXJHyhcwq2ViV",
  "key12": "h2UKpnLG8sFHPvarJS4qYAVwnxmSMK1gosLzoLhdcKDeKMRhH64rmTFKUohJxHhDzHC4LizH1jr3KndB1egD688",
  "key13": "2LQZ6D2gSfc7oJxVLizCUKWcnJsK5GdkzYGxXdV1n4r7Ss7j9sTS68sKV8SpxwfdBjEkBHwoNmEC1XAuZqvyy2eg",
  "key14": "3mURRfgCVQ5vgWgSfjBekpfL1eFE2k3wJQMFJoHQnN23kAbi6k8b4Y9cbBvGM1Qv5otRgKjtLr4HzBfvR4dTCmie",
  "key15": "RBCMbjWU3Dw51RztPVArbUVvAQcJiUtoTy9yx8QuAhqgctr3aZto5tAYqufpBnnqExfFTUX7zWHpK7miqN3GFQW",
  "key16": "MEpgiNZKEDEwzvGPf9ZP4dWdqQEDHBAFUX44U4Mfwe9EgSaKgfAfucbYXHtk4VCSETeA7hBC1q7VAMTWNtFtLrC",
  "key17": "5Dsh2iyNmK4juiTkC16NnMdmqpKb9nYEuoeFFeKTsx1HZh8dT9wyy3gb9WiNyskpNQSqxgr7k1zHmDphhKawHYeG",
  "key18": "2RBarrvRojBt6oj53u4bv8ZS5RkFxxr46fV3XZxjfaWcqcv69pqR8zdbqHmWRcppw9zfBbouEk66Jqrmh63fkJqe",
  "key19": "5CMoeaHMf7UYhJJ6mav6FAhCqvy4wCdiuP34o1AVfieuDkMQvbgiuGLYYRJuwqWFx8KE7QTUXhPaRzCAuhTxvhbL",
  "key20": "1jvPC5Xv65PjWUN3PuevHMuLjFcCXTmq3V43iz2ZCFey71oJWQKajdWhx1HXacmLWy9ZfzjWGkr1rnmE1S7tRtu",
  "key21": "45L7fjJHtiWq4zs69GwqMyAfUzuxTWQwX7mneGYsmaxVUcrufdav33aPnTgCJdNfPPa1ERDgCcLdZu2iSKQJkYX4",
  "key22": "4efbzX8sTKRCHkz2W4DzRLCyebB84MFHkFGuPXFcdqJefRhbLSrDkJvHw3y2Jyhs4YsmoeLKKBaCpgiPYCHwxTnj",
  "key23": "5dm4Y4YCX6WbREjnLyJRrurD4WNY6DyTCS2GZkKtFxrGcAExcSqwQtr19JhSBVQNX6opzuU7DWQvQjJ1NYXd9APw",
  "key24": "38gCR8kfkVzHcwyYARLyvRSk43tkTXhN3RtZuQGNwtZFv2eJBvWjdGGE8SjRLEjmrALUJ8VuemzVhJUUTseumThX",
  "key25": "nXq4xHd2K47DnnhZSbArzNPTA2YJ9vUcgGCmhUnBDpfUe81nL8BYZoGwFLCCCfCoLgX6eQ3ViZjPxvKTJG6TrwY",
  "key26": "26LqWcA3So43BF13cCkTYy8a6Ns6rCrijZX7Vvp1esQvZfTZwzLhX6Rzv8Ff1zkbUQnqpfrqVJfsN31u5SkrNmAx",
  "key27": "3Sn8Lw2RKeej2fyi2Lrtr2FfTDwCNSAMCTBXkba33khTkxWD4kCfozsEmiffrnLjRk4vGa1N3joWbRjom33guDT2",
  "key28": "5z1cGTYYNTXyxjttzXXVErCA12PLLmuAW7srrjW1tDc4Rn6oEybGrAU7MSM4K4NXRiKWTMRhfjU9EYcQUZ5QJpcx",
  "key29": "56XHJVcmdUqjot8yB8fFmyBezU1cN6wFbRfiXzE19cqEwB12HwrppjieCcWqU6c5zwg7FR912D3Q8RLRUbvoaTQh",
  "key30": "TP7qWAbFvNEPNvaeCAndxFkoQnqZ1SHobB2ps3fYv3Pyda8nzaTWHtzACLvqHia7cXsS1QMnMTFV91yoD9MLmks",
  "key31": "gvk5CkqWu484mzaNBw28LofpbReVfNShMBuzrzn4Zbw4oqPxuQgQYayfer7pwCrhhWBe1HRnGm3HbCRBiag6sBW",
  "key32": "2Moi9tKdYWFmuN3YdbxL5KTgGWoss9TFNtxtPcPHh3C7QBYmK848mqEa92uDs9vfZ5DupaQN8qMmcni8Jnoihwas",
  "key33": "51PTPqU4PgGMB5XMf6HvT8GtPoLFnGt2Rfz18CQHr7chBA5Y43kwmxBH7MPx3Yg7LnzGvz5BFL2TVA8xvfYqnPxB",
  "key34": "3USZQASqSd6RmhnJBFC6A82ULfrV9Hq1ZZmz9FbWGXhDi7QAxtjrhPwAcQJAaTVUo9fsMr6byTn47PQpx317fkJy",
  "key35": "uxTe4cR5W1M3rm8bE43tqQygQS3DXjx1Yrn5SmkfiPPm1ZgAYLyxnBVnud9WTYeYxLepDufnnDRY1bCWBCPK824",
  "key36": "211dwmsYV47RHGSPKPKB2uDsZ9vWzwncb5ftuTE2YUH6iFKKA69PaQsP7P8P1iX8gHANFuUZqkEdwHvRhkB389uD",
  "key37": "E6xHrSaD8Gx6vYPDGViwH6knNEJbgc77TNqR2vvs7qDv88G3VbmqdJoK3wPgqMES45mCs29FEBSFa2PeSgNhg7p",
  "key38": "4gRS35Mi4j8zzkC1BHgjGzemnaDKAcPyFLB5TSzsTyEmtkKeSPd8fjrM3rsQbqiQL4jPB8BmxXUc5VfUR46rPAUu",
  "key39": "32h3PkupyvcRS71Y9pW6Y83r8Med6tBGC5UQtsXSgbN3WS8p5BdufQDSAm5ufNAHaa2T5ZbDDJhCrZesa3K5Ejqe",
  "key40": "zYRd2PCEATykMBb2SUkaq6DMfRU2pnsmNzc8F4cUJE8doZkZhuYxQmwb1tqnHrjMkuArHdFX889egKyeY5ZcNLA",
  "key41": "4F1CTHNgou6ShhAAwNdAM6dZHe3vmVRtUb3mB4SCoNypXjAUP5EhUeX8wy9CAgvABHW5iEzrbtubap8LDYyk7NNe",
  "key42": "4dFTFaw9NmEGs2RNnozShEwDRC3FsnG3hXKkMuY2Wxod9uXGsWkw1yGnx6KA4ewaeKa1X9w6GUnaWKHz3xtZVbTE",
  "key43": "4KgBmwUfZCZsgspzjRuZb36CaRGYm61Yq35EyB63PAsMwjWFdbBUB8XAGeFVKAQZm388snVHKJiN32ZRjzJmyPP9"
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
