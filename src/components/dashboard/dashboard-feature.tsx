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
    "3heo7GuUx6k5UsxcXwsggq5TyBU2uLL1iEimy7PqNyqn19FaBbkLM3FZUEgNsypoUUooQ6zNYUv4LsZpvskSAKQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uED7bWToAak2GFw76czkCq9zgemzxcPAbS12es2HxxMiPCJ3oeXqJ6hXRFtNrLC5yS8gpVdk7CNmbq9USeGe8da",
  "key1": "3ktWw5FYXRHZoyhZ76uEh5LHALbeni1qzUmx1exBe8hP7fSNKsjoGv2BmoTR68zFEHvYsemFyKERdPkB3LrSWSpD",
  "key2": "vEL2qqLB5go4Pe3XwrWcZ1zYEjEAjm6zGSYfGRRhAxK3ZHFuVHzvw1Y2SXHrGqR2j9GfUajeqnh22J1y3NwzQ95",
  "key3": "3wqKBH1SA982WrqhxnMLCmwUGz46a4GNXeaRiTnNjYCZx3jMnjJN7WniMSMDRgWBAgLNsiLX79QSpQ85aCe2AYyo",
  "key4": "2ei2g5YAQYNPk5SCRoMQw6pDyqjb73V2gLNr5bjkcC8xCivMabYq3sRxmrPPGJv9XXrQTJahsdqVC2LHn3c18ict",
  "key5": "4h5Pbd2zF51VSXRDHW4x8eW5CsgdnXzAk8MuAXxXMP8AqDzcvmMZ8kKJBCz8yTfhhHKW1xFVVpTtDovrjWQ8WT4u",
  "key6": "4Zsc3Ja7dhyohSQ29VP8jhRcETCuG5FJAg4bqk9Jpez1zpTM7E7QUDyV3bgxSi8wPPxhDEQD58kHK82gdHTUEHRP",
  "key7": "5JjQ4Rr5fJ6uwbXqdys1DPoUqEzLfe4uzZmY5PuuQ1nMeHdEepgZPFJvJYm76NmMJzMdoZ7EWac4d4jaGqpGBfsK",
  "key8": "3hN1e7GuGE2gmUBvTWBHjJQxn6EL2KJW2BFdYfG7Fj23Z9XbN3Y42jydpFEQACqwnARbuB3ydMhnbEmhs1FS3bEq",
  "key9": "U5CaEveHZquWMErRDvv2svheugEFWjhtTfhmiFms5n4okBV7pi382LkMG8yGDt5Ts5nYxwrEB9W9488ACfR9TWi",
  "key10": "RymuT8p3vmtbMpAxktKo5N3eNtS3f2hs5MVtM1rtmZfqUKFhQ49sk4vA3y2LesA8un8PBAB75LcmtS6iSbLZPhK",
  "key11": "3JudYWySZRuHHX2iA1sZ3uUViTBJ3hhDukcvWakezchRGMRhS3NEaVp8WsVAURjcYZnwjKWZxAyMM27tSdczkv2Z",
  "key12": "2CJ2XiD8be6hfXfDL6wGayZqqiYs6WFKYF1JyiwKGCFakndvc7CDhVawALawxogkr6kXkL3am7moz1EN2qypLbkQ",
  "key13": "5xmENN4zRSeyCCERphhHYLAZEjNy6hr1wK7NX65AZd168cEQRnKnVvF6oK1ZRfyVVrgw8WjP6V7WNrtsVVt9ZHsT",
  "key14": "F2zzRBXMavowJMjDyuV49jUGFhdLaj5rus4dGFzpBfCvut1Zx7SuRnkWjLyVPRK3cWzdxorw9cTst77XdBXNueM",
  "key15": "3se6fn4FDzMjhJR8Ws1UzfB8j46uRpkDQkwn8SXM6ySc4uM7JmTqLAvJZ41Ri7qFPCxsgLinVr4aHZsvJXKzmXUk",
  "key16": "padVLuNKLhnpDDzGwsWic8nH9fAyBGVHDL1nVCe6u778UqfZhCGWpeaGwPctcbAsaNEBq324kREAU3d4iefgG6A",
  "key17": "2a4ZcMeZoPdSg3Jkpv3J27pww4jn1e6azx175iWYvjVQurDFWwTHh6Fnaf69B8xBxhmCgYEzTMLZtH923K6QNQyH",
  "key18": "4cCTnRaHXvkbCLYpgc58n12MPUN78Jo9KUeLERUKFhju5jsigZShZ4kNQ6w3z98H9gKx7LsyJ487UAWxCcqyBK5u",
  "key19": "21KWQXxZ6bTMudqazfo1tRqoQsCiKChMYv9sKJJsQFu44RWBowGXd27DecfUhFxdZwMVvByi4DoWxEoc8j3jUaVp",
  "key20": "3bmcD7r9Q3v5UErubpS5PzaSgg8eKwpbnhjjFscsmRFikm4WrJk1hEneVEfUTZ2k5eurjMPLs4SrTQS4JoJ8xLN9",
  "key21": "4vnwkzcBcqUU1iHFTfB9cE2nwGtEAUcr8CzEzMDwGZA4L6oMC3fEUjafqtMWN5LJUzoBs9dzqBL5wgGbPsSsSPD2",
  "key22": "5JqvqMEBkptza9bJTo8yjWiQqvMSfxdumd9GhmBti1NXnVZyyuPej9JK3a5HCD2EXmztHf9kDTQJeMyFWRfByoNM",
  "key23": "59Aw7T7pu8w1rYtysyCww5aVczpK5Yvb1yKH9pYJJhctw6NYHtgxA1pmoCZhc6Pd288HtrZc5SE3oZSDuQR2kcU1",
  "key24": "5WVb9wyNjN3trFPZV7NbqSr7xqLi6yP2rrDKLYxGxrc3Nyk7zkbVURNatBmsvRKJbQ2DzKkrPkJviB6QtcUK6pbP",
  "key25": "4BF2jjTY7Dn413HRq4SQuEe1zUuWiGMQaeU6YE7j7dUgVZ2zvidoyQAoJxm9PcDghpz65Xdwi7d6GcVehgJkNy6Q"
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
