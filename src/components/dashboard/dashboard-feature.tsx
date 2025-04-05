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
    "5r3Umypf5ASQF7YKWBVY2wbrWPM2Znfx3bbceV8YK1havGUKb8Rzc56z9vXehawLgtBbvGqbc5YYrZSZvYFKRfv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7htEKgqUa535kW7C4Qya9NEdvNFXMtm1NBBiBUzZ2R516J5XWogFL6168s2rygLChuqCVfp7D6vNBM7LX2N3F2",
  "key1": "2N3ekBYEYMfbyXj1St2JQMscwBK8oLyZDtdgea1LURX6HqqmQgJhDhodCp5AdG4kWXEHxbcV2Pe7UTS75Y64Wa2B",
  "key2": "58tSdKpQwnyqJS3CeCz2bMs3iiosKMyqfm6GJDKmqYVkqVj7Hdk6Rh8rcyX97SSAinzNSQM36KJtuna2qK67Bdpb",
  "key3": "5wt78fgFspcBDNQHJb6SVJs6Tz59Y8hBmzjVAtiQpimhZXmjDLictP8ssLrskB4gTLKiwqFeNZ2nqpoj2xW5ovvu",
  "key4": "rUsY9j8ddTMrgav9MiHMjnBewxjuHStTonkjYWQhXDrKoNPm7iH1FoANCRgaF4ngbLLzAMNkdmEh5acVxYgCRTg",
  "key5": "MDqWT2fFv2KC9QggaMyTTT8uo1j2T8h49faecjnG2Qk4fmoZxCEyqaoS6y864kGeF1U3mv2Frfbu6Kv1a82oidE",
  "key6": "44RjdbwDcr1KEMyxx1MfYitNWeBoVNZEjCyyABS6LpA14kCbPX1gvTUvaJZ3cXctmYpWLzt3rrMBv6WTsh63Uyyv",
  "key7": "4h4Pf6sGZ9k6gzoYXbDaAeym3UuQyUTPeHgQGoazt7fK1LeMRhttqhUt8KUiKqRXRsGruFWuS8xqjGjAXcmjc4MH",
  "key8": "63xN39rqGQw2z3puX3gqgE3uPrC7SZJF98u7Dd5S9rGM18YEVRuLVpydSKRP7eySo7NFAWnXBDvzJdnDLsaMkCoe",
  "key9": "CMxnVnw2e8o9RZWpbwyDoigD4DUSPRfR4K14LrrPcyCk3wqCDYYYxHumntTBAQQqu6WahpqurjpjuNavNWRH2SY",
  "key10": "3C9HPCeiDCxxh45517vA1hKLxKZJotskLiJF5CuKoGKfvdBMAdZKcum9czG6Fbm5KcbxHi2cLyLXsq54dCt51tKP",
  "key11": "3wFeEPJgTYFsCCZBzsorgBnckhjSvhJSbtUWE9F2bm9cC1V25m2GpZakHr2r3rENtdFjJDviN6mCpFP3h73LMpTk",
  "key12": "sHSHo7W3FiSbg1Hdcjqcn38W3Wpck7EgE7sXzfARPTYJ9X7C4qbZ41k618HT72WZM1Gtsan8hKsokEXa9VwCJDH",
  "key13": "5ZZnJeL218Fdh6C7yeZtfAaFPmT1Sykbnsfi7L2jwuZn9brYP1T9Sh3K1yRC5fmbp7R9P8MNyMKSMCnSuuXb1CGe",
  "key14": "3ZS1jHme7quTybYuZgHHe5kbPsqjGj6jzbkuxxZDhPYW6mavQTkwmC9MyHpWj5AGUuRoMB9FgNv96rTHqtXrTavk",
  "key15": "4GoRGuDQVkCWafPg16t5J3CEzT3aRTdRS3KTHMqZ94QoRTrX1Yb7QUgrYKx3WSFBHGrg6hmWV9QnvKnXawd8omZe",
  "key16": "2x2UjUhtTnKXdwbj3RpPobiRYVfz7pCdtn3aiAHdX38ArRGHkBcLMtxCMKYNcfAZmDeNojXjavyXoEYya9mo9TP3",
  "key17": "3tLexfkkAn22NEtumhnqWZSHiTmjg7mnm6Edw5VHxembjhMBJek8w5xC9xRUD8xWnrMTgGoC52uwUZW1fo9YHcTg",
  "key18": "5t8e4SouXsCaeynPUhjwaBmuUzujVRNAaz8HQ5Ysw8xkP2Hp4x9iQ8jLcASFQDEoT9WRvGLq1eR1RpLnhR9mQ762",
  "key19": "29xKNsSGTpT2qFrqzNEhyDxbEa3WbrDzfcM6Fdorhfz1NE3c8SCcecxNBUwS5hPzCePHSLp42AKf6D53AwLHFrzg",
  "key20": "35dJ8AscExCAu8fcfSCscP2c4F6xs4Qfmq4LxMneuLdC4v9oPo5ciE9Gh4BdQoirMGoLx9oVFBj82x1yq4vYTLU8",
  "key21": "4DYTQ8NKZ5vxuGU1BDsKJTBvLQyxBL939CcCcJYKQh1yoHnw9JEdrdnfEtsqRDaAeaRLpry78LFHUwYdMXsMiRvC",
  "key22": "4RVNZAAgqyqfcgS1aW9PcrUxLqhY6uHgL666hGvZa3kPw5fun1tgMecFDne9pJTE7Hxxoka39BwPTfNa2WXZpyZC",
  "key23": "5oJRMc4gDbhgKNpa9LdMDzJeBMCiTKV59Likc75YiF8GJTfFY7dQDXXM6wuSosccP9BVKTpxkSCJVfiu342kyvCY",
  "key24": "2pMc5QR2kzgFy6FU73EYDtqPre9xkWftqUsGuCZRvgTDwN9fBZViJxJqYjxeFs4377ckrGpZHzWNwfkr5LDJ2Spe",
  "key25": "ER88yBbwvQezAtP2VgTYD9hknhQQwMMtCDsewF1gYgYnAsbDiVbZSWPbcPHfbk4zT5Gxdb6neHtsCBqDbxGmXCF",
  "key26": "xDLhGEj4Xr2uwhau63G8H3XWNhwMQC4qPVENvFYZCek2bWpFgNotLBQ3BxuVuAgREVTgnsJns4YoGVoM7qJziUC",
  "key27": "4eRfPLd36cmSNV5qjmhFSupELFBbA5sM88WuQn6fgRWcV3nTj2XenKxtjN6yJp98eSkvAbiprMx3qbYUqyT23dSu",
  "key28": "4M8XBkRVykGZDWPG9C3RVfdMFuvEDcy7KJFaMHj6JZmYwoVWWYiFN534GT78NyhNqxGXWw1QaQ3tywZ6LP9nq2VX",
  "key29": "67TEUjZTFsD4be7QoxoKb7XnxqcBDpy1HrmmVBUJz8QHZdCpgTUNVyQ86D9z3qJx1BvSAsi3g8rxDhoWbjxz7SCr",
  "key30": "5Xws1s8UTKU7uYmjupgmHopRJLHZ93VdLo7sSnbX1ikEEb3yophyiMqKi3G81kQJgFgsDH9gVd7vqTyMbEgTTWgD",
  "key31": "M1y8Cu6xVY3HakAyCJFvngJAVgfiecLYhF2BC7RVAMTFXnXeHyn8ynjNiDFGVzntTJzBEP8VcDy1YmbdFiy2G4d",
  "key32": "w63ykmKHvEMmVvj5PTxzETvL7wdHRjKZoXgUk2o2Td61yUwitkSMArHUhqwddp3WJw9QNjPLozN1EYWJNmdbbqL",
  "key33": "5FhwWy48xFxJ1AoGzWSsHC36WF2vZMB8kyNhFUFsH3ybkxZG6WWBtjHZjqnqGrjy9fzdta9irU5xM9isXvXnpivV",
  "key34": "4eC6zreHV4UBvwaaVFxhGvhvQrHwHn6U8A9jwYjpRpXjtf95RPBViBz3EG3BY46NEEeYLPUT2z9ZFKaZqPUBbGRG"
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
