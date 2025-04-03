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
    "2tdun7xdB36oE8eEVvAyJedZ9kUvDveK5tJ1vMak4uHnTRdnAa8wu6dm8mDLQNiJZcWEJA1QkzhhEQCpTuz8FBsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3Tic3iHxWX76mkYKxihxHnxdA1Xb7vJpkMUP7q8SwGmyRFhSHLvADnqXYXbAnT4xmedm4R7Q3qwJALeU2GAL5S",
  "key1": "16d45rLBsQhV6oFuuWmEJFMQdVxanVu2dyk1F9AA4FpJ3QNFaUCL3EH9JMG9xYcGpLewSiJ7PNMD6hzmgvmLD8N",
  "key2": "3GiPw5846GoYmdAwtzYa9mZySDFSzJfuV7LNqoxgXUg7dvGrmGuLkFRBuTqWLBdVFHfsyq4kvKHrCPDatyuqNF1g",
  "key3": "24EUFckxDif3wFZaoCu93PpcLTjGzBuhyLS8rCMFM8F1GLwm7FJKbcYUW8B8g2kz2vyag8QWzaYn6CuF3JwzaAxs",
  "key4": "2ReQxsqyqGR5FXA8GWDMZQiGhnuihWcpycdCjQpyiU7ZYYDdKdW7CwQiwJaj1sqQHhs6zSNAGMexZkmcEpQTk31T",
  "key5": "2NfgSJX5YwdvYTJSGVXN6uusiTs4enCJ2J5UbvS4rAddkX56cFPeram4JXeEH77c87b96NW2tFmmiSx3qVsLpeW3",
  "key6": "5A92xhErAjKjGgDWwZGh5ni8MU8XrbTwvtZCpwo4NZAaJWo2TWR4dBy1diNGpQZzYXCiqZe2tv9YRUcsBHMAk4cY",
  "key7": "4AGK2TiCaYbAwqYPSiHjUnqwSvHHriZNYJTRcUj2uJQLPorED9dBkLwUkrsQcvCaynKMxdHkthDqLHZnX8PJC5i9",
  "key8": "3ZuxWbhuJrVVPTMiJYnyYbF7VaEhxD27F6Gm6xwxq66qGRe5HPbh6j59hoWiTTFZwgNLJcQ8hN14HraCBoJ4D6Gs",
  "key9": "42RsqokFoY8V8zjenHCtujRpvBpo7Dy2Fega5MF2V1bVK2Y6biY4StpXVyJWbGRPTkuqXuZrrrgfCypxHRp3aPVM",
  "key10": "3tR15yYCqt1nWYn2X3s6TBgVsPCaGA3ogupm6SvsymMATCNNmiCVRhpbiDKwsY1Hrm6LQfgVSxCSrVwrDRDv2pEV",
  "key11": "32Sysj8VAY4bDXqNkKQwXe8nit7863Kvq88GiVqHAHEGXnrtfoUhJ2k2xSoeZNXZpchKAgM1yriRwsBo9yDkF3Nx",
  "key12": "u3RY3G4q3W9fVdwQYHosmCA7FtVZGLbvn2h3tk2Hhxna2jq8BXFLMkxTtSUwiRY7XWfHB4sWjQ2fvnGATgmHBfz",
  "key13": "qscV9DVUYswCa5NrkxF3kS2KFdUAbShkEwZfiHSdTwd8cp17QNT8SxnMrwLeoHDA1VRqG6mTTs5U7bsEpZhkSiy",
  "key14": "4FCMeqnuECrGv7CsZLqNoQ235LWVrYFzFPGxfm9v4h9eTgfYzUJaY7WCCEr91GVXuk1Dh1gRgXnerFCEH3BG1w2J",
  "key15": "4uDdn2UoZLp2W3GEojsB6VTYtBMdT44pVd33L4UB5U3gVtnXNkm8rvBvPqBHyHtXCExoabohzgZxnJcxA6MqgUhQ",
  "key16": "2W5idqkbKhSXQUzG8DH4o6YveDg9DYTbYQff4sW9dfRaRK2b7wmqoRRw2NeBJj2JBUKCrbm6VjU4ingPeqrWVFya",
  "key17": "2YkwpSoDVT1dB8vzV15TgG1hL4QscxLiwUfxy5gaH713txT1wayamBLB1Xybt7DRKRR6kBffzJyAPCGZycR5FMNm",
  "key18": "3KjLyhYMEAXitRnxC4oWiTr9cYxLKWC1yi4yJMScHcHVmrWUUKnmHYgqoWUeHN4BadPdkSfX9uFt6Z56sLmb1Jy6",
  "key19": "125jf4nKuTgKe2uwptpmZxGwoW9ea2wPRNZaQacygJ4GqpXsQwc4Kz45Rt488HL63VvzKNVnQA6FHJjNKTREzrNS",
  "key20": "eQGpaQbL3NFxojARczYKtGUVpgYTdGsn4UGvrA4sKuqcSwtRcs8zKioXXs29cUzyA2P7gHL118ZFTMcfvcHemq8",
  "key21": "3atonUuwV28pYNmpyMNsVkWTHAhS739g3QcdA69az2girbH2Typz2MaoEe7eJk6C2ze5o5YKvPxB266RNgycTDLH",
  "key22": "5EHqUWhFrYjyvjr9XApws2jA9B8ED4bgFgMJjD5Xgj6RJY8tpvurt2ZowbHvfZb4S9CHTm2L3vRriDv3UcGTjSp4",
  "key23": "3suukMQPY8YVe2jaeeLc5ixXgtwX7zpqj6ijyGofJ5cPvf1yJNNJXTEvWoWtuVCyRCW8tsDYs8AQ1XsKHPC49rC4",
  "key24": "4wwDfSFf1f2WRTqJZxtPYKYzzwmJL333adtAvd7UkUG9HTPBzGiAGtpzNBzHgS6RM8QDoGnE3sQ1FKBHnhVpYj6S",
  "key25": "UfLVqt8NgaRqaPjB451hrwkBKrHeMsWtTk2H3xusRcvx5W68oSsJ7MkvrZdbgXmYd6dnULjwtKudamkDVtqhVe5",
  "key26": "48zh4keq5NaGkEn8eftmENwXYMxsjyVuUVPbDxfbXtoLGkfeaCh55g9CkBy3j2FPG7SBrcJ9nfcyKsXLSZuDhkt6",
  "key27": "a6J8X7JvZhHKRZYRGB2YSMgEDdzNnWqAiqNuuMjQQL7qSqnMg2DMgP8s7fk1AMDEVKVigrQNswVea6n41XWr8rb",
  "key28": "4XCsZybdobAYgxgiuTcNCUbvEDy7kEw51DdnfzhwUsX2F43MgYq8PWkifuKDAG5PSJz8KtRRmkkqczyrcYx7foW5",
  "key29": "4qgJf9QnVq4LNEvJ9Bg3cmEXzZAVz1bvghr8Mr5FJdgdREjxoN1tRx9Fvz3LDV2s8nvFHjN1rXcuXuAgmt1x6uLG",
  "key30": "3f9h8RZb4bFKQcdZcQwYeN5ALfcC3TwRVdLJX8QabbuTUMpDr3F51n7hspWQWUqUWnQrB8jgeGphH6MKd3JgF5vw"
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
