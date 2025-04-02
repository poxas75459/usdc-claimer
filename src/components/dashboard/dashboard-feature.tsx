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
    "2ctuYkhkt3WqS4g5GfxRvxafEQCYTQY9NRWLDADUSXret9gXP9e2nCXeJjmpFxHG6Fvk1rn9fX5uwnXtwYjkfTo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sfGVYEwpw7GUKJy6xrKTu1ozsSVCU3b5oSw1b4Mgd4DCaaU4ZGNUhvVvqiaEqXAZRapWHV1SFKsdCAx5VH32CT8",
  "key1": "31rmiK5Mpf7NuUmAhH6fzVkHrP4pa6YJvg1YGDthMx6aC1W2BmJbyXP5kdRNkTWnQ72zbQtcR715PRCFsDeUFJvK",
  "key2": "3yJpmbNH33wuXDRX2X6FBwzSWDTYWM8GNKa1pmkt22KSRdqci8V6qGWM9eMqfQVnSu7RBfHbqjnHg85a3q66zCM3",
  "key3": "2Awz7tmrvm1ZXeDbDi8bcK3DdQjC1GPMjwJG2JV4tfCSbUiCZuw9rdV3jrsCegpKEf3w2Natw5wFnKKmFhMQV6tp",
  "key4": "3U2nghVRjLMUXyUUwFmBQECQ91qvCwog3wjYj1zTRGQJvNaYuNBu753YZLnMTXbBnc5pKFj9U9a1HAAqt1qaNpKN",
  "key5": "3cu6QVuZthAarjXQNQ3gxqHSRrpVWmRscoMumeiwMu2sQc6N47hqhwjxVwRmzQeaumaKvztfock7UTYpBeaf2Woi",
  "key6": "5ipQ7KoJYtLFTFG9njGQXfLt5X7K4CD2GqckWvkSxaD8uNkXrfQmVBRY7TS187bty4p2G3KRHG5WAeRvqYpT7zrZ",
  "key7": "KfGFA6m9RLcc9Dk69qypxRtUc6tsHnyVAhpZEP9y1PC7WuPUrvLoDQefqPHDy4MUXV7WDWr95n7fxJpZv6sVqdg",
  "key8": "4wCnrMn9Zt48ixydaMrbzHmGvv5MH49G3CAshFYWzFXz1KyY81bLTpqeKRsPkCZHJEUNhxfueN9zbjnJNuzPJMiq",
  "key9": "37SGR5HoVyQiuZuQBdyPoeS7KbGPTogLPqTAvxWfQvLivw2VvDQjppAaB7r97nsiSKAaZ8Wp2rENkvozFxrJCPNm",
  "key10": "vhfwMH69bDevDwjZEVNAzJ5wnbwdix5hixtc1WQwWYgNzCSHFN6LD7JZit8u9K6DAheADgDSufZJMjNDUuoPDk8",
  "key11": "3SWNWPTSUBgNRmJUQtj8Xj75MypMZgSgFpyaXp67hDJL74KjFd3QjFDfFtkwY5Jn1pCifwivNzVEzkhXfTeMBVwr",
  "key12": "Tbg5Xahvxdpq2TeqUgP5RRXvLFT8BskWJimFPoyRhJwBWxsP8uFpQvtF2EARGTxHT1F97nU71g4xxMv7Fj4H2jR",
  "key13": "9AVQvbnoLzujSdFUVmxeWPyu3iGg1EXmB7aQV28eQoMshXfXoKXR4T2dMuS4Af8EbsHYv1DNwJwuPvMbhRgRUAE",
  "key14": "3sKJsSVrNNaNuQ7Hkay883vTidATyF7Gmy8MMdDWCEoEFD9LboRW58mnp8qmeVhoD57hqqYEjJjAidKJFoVWvZrc",
  "key15": "39USt5NtGX89pWmgqbMt7bZoC5i2L4spL2eVRy6LWbDYrVdqfQeLoNpL5Uke9yxTXwGcrjNptQBz6z9RB5PgjVw5",
  "key16": "5cBgkXmbkdeEpw1fgGsznACzCZZ7fMdXqyHUfG5BCXMSFNGEWzY7f4jttdVRAXEi9qb9VLw4fnX3W9TwPRs3g7ij",
  "key17": "46y3T1q4yyLHRDz4NnvVckwJrPg6KqrJ3cTMsGv4LSfi55gf2ZoFa9Uu23o5Wiggozs7ykUSioNHKwdC3AudDtpU",
  "key18": "41LivktVBce6Bsi1umRPkJnidUasVip7S46PenKvR7HML48PjEEG2WxnAne6xrMyX7j5cipZaNp6Q98GwNKasYFm",
  "key19": "speYmcJNrKhR6JCYSZLT5T2HvFn6fsCR4J8a6Gbg96CdfEuHSiTEZ4Kd3LH2KsHBAoW4iYjzfCB3Efpyk1Qj2w2",
  "key20": "3y7Q3uk6JS5wj9GfZkA79tEPwG9Y5CroxHMPEGoeF4Vj9wp3ktkheGZr36QzqEPBTiHxhrr6DCq8bwMzDcdPetv1",
  "key21": "4ChXqMgrH51PMDMqCZbtzZ1uyvC1ReJ3d45ZEVQmbDwMW5yGS7tfGhbY1rnZPsHvtTfkL2KsS7eiMRmZHbkA8X8g",
  "key22": "XZrH9DHBKzzUy1261WBPb88bzH3eTQvXmCYcq5z1bBFQYqgASxS8znGuLv7P2jBTv4RuybjJj372ZZEh4uhnMBF",
  "key23": "3EQDa7eqpmA3z4xb2HxsNUHdnha3ECSwWex8yWLQWwj589oxLQZt83yyTKtLsdqCiGMjGT8BLeByXGTiCbRP8grL",
  "key24": "48PChNH3gfCuwSqqpYk5qBSwv5H78fvBMg2iCkYjq8zGuBQCbw7bjLWbKWbGDHcJLZS9YSpVZvJUsS3UFn7pm1dE",
  "key25": "RmaGWcRTb48rx11wi9Ufj8oeyfcAuf9q34U2qootWkYFRN1ssDNHqhyZkUVb1df6kKHViWkyfD3YHWourRBBpt1",
  "key26": "4QpN6u3mpQhAJBFkUy297jEu6ewFwwexMXhpma1D5bHiDQYWGsVP4oo6yywDYVDxzbMaF4u4XYPqAWXJwvsHvbpN",
  "key27": "pGA6WAaB4pThtBjqB8tfYv1H3SoKQkZ3Ks7HKk8Y8ANtuA2FA4fHfkkLGrK7YuUu4cbc3fH7WAbmXgXxw3SKnmV",
  "key28": "3N91M5qKHjSskCa2Cwpqh76Q8KFXoyQdM5uDi6DFoXMm93qkaAr7f3iBqaggfL4QKQgbgZg9f62aquPfDmk41PxQ",
  "key29": "55iUxSJgbss29hTmTpaTAtG8BXTGUvtmmm9jHVGdAM2pgPXKGsLS9GtGXrM2YPvrz2vNo1sn1T9KjoyDzZPyhmVa",
  "key30": "2ENNr8vs6hcQRa1W1ikDUehtfrdKqTqnTD1RbsBpkQ35MMh58DmRj4UzLUoyrWFFrAh5DxhBrRKSiVuJT779MeSe",
  "key31": "vxUJ3JvAa4mjat3JV5Xb79NNsrr15aHs7dwnCTy5J4UVEYWiPKsZ6rs1W2vyGWLqVixmSntUVyiP77P1Eiq1DWE",
  "key32": "4Phg7P7PcZFzHxpfRtXAsHRVsaqbxUKbV3pUYjJftMXTtMF16qiz8yJ85E3rYq8abwQbRgZhLhHV6W8CeH4BVC2a",
  "key33": "3oktYpiahgLVktpFi6WpkFEcN2QyeocK2PE6LstXooQ1Aitu9EvbiSaLxuRYE7RvGnJyQsetM4oPbFfpv4cWGM4X",
  "key34": "3fw3ARJwB8AQRyhmir5uNbbrorfcZzwqCTdWwneU2GNZeLAKFZ8VbR9jNDbneMsBGH7esFeDxM3i6VZP83SwtWcM",
  "key35": "3bzgG2QsXV2eqBpcZJrLDHhDk8X5mG5pPnXsDAa1ZyXFMP5VzJjLXe46aH1k6mEshobbFABVfTpaiVskr6z5Rv6b",
  "key36": "4WcGm3ZPsxmnEzAUWDX9ojEJUywmnZaTmpWBDnvdC5hEFik43B4XdRNuB82boJvT3TyuV9gr4zSsTkRxKiJe46iS",
  "key37": "2cLjr5m1aS477kC1dE2wEQybBcRxLnR9pBe3BbiF5kPWABEh4U5SNJyvQYW17zVQtARJigBvoPfCjLjrFRRwreHx",
  "key38": "4ipK3ehXr4wTJE8ciKjtMQX1pz7MJBAyZCttzsqkcKmTxdoCbrZqnWkYUpedJPevfMJXrSRWieMkmwvjhSA8SKGt",
  "key39": "5wLgCkqZWGPm29pktD2Q5SVE9LLq4aXEEKCd1ioYLthjZcR2Z2xQffYK5qXmf9gpTSFCuiRztnMJh25D5SGTcKuV",
  "key40": "5br9gBAm7hFxwG5nHhDxnnFieqVx8jGQffh11TJgo6Mu9yn5Qbk7SA19i7pkP2fSLsqhnRTzuADRa18P6LjSeTAp",
  "key41": "2peVeCDmg5rve7T173PsQXcXKwESaQd95gxK2ME1Vs2ogMRoRtTzZzoJ9gzVxDyDHAp1ZnJwmHqabGTzisb2Ww6q"
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
