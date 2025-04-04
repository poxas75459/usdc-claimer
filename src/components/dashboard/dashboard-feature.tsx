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
    "65xvNsLfF6UDxy2KgmToXdV1SSx78etJCuKmLkHT8mNpziEUT4rk1P7MVoRXqGtz5u17FpbDP75ZE3A1gRCmfTsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxVjBpwKruE2EG2uzSmoJwQ33HzFyZ8SgQUuZdm5LYKaRj1AcgmjN5ZUJYqjtBzfqMGp2P7nhR7cXjwdZv7n2jK",
  "key1": "5E2tMaruA2fELUsXTsbZkVZ3paQq4uU2k9PvB9nGRs8QHrE5GrM13c43dfYSwWZuSWAZ41mzdtFYJiGAJTqdrifZ",
  "key2": "5Q8vtTbVqhpCUfGHxFe3bZ9xsNtssoT81wTQnSCc2Ms3mxoRveKU3QK39ECDk7BCgnmCqbU8feyVCcxfr19nK6BL",
  "key3": "4ME12pqsZ8nHFNiq3mD4rZqiAudG6Tr7c1zmb3RQd6e45PE5uECcuapu9YFMjUfTDB5QD7WsPTZ27au8xqJ1QB7j",
  "key4": "3gNXzEgRgoPNJXfutC4VWxfk5ts1YrwaJQ5BuW29JR3DTHhp3yHTZbEWTAGQxLtD9QyRkvLt1QzUGNQ82Lna9yGi",
  "key5": "4XsZzEmbTwv8geBANe5cpERzKnuPdcR188rFh91mEV8nreR1J3UJTjyzsiJjpWbKSAPQ1KYbBQku1fiCEH8b9P1G",
  "key6": "wYHP8bWEgdMmc73vKhcXfKBg6K4wSo5si4eNXsYg8n31oCPZThw3fcYXBXZ61uW8r53NgT4Z6aRB64GCaXTKRz5",
  "key7": "KQJUYaXNHWUaYDkwDHTmujAZ5Y4pDqDVTHSQcuQgKzdK9Xo4p29VAQAUJHmx5AXD6xBYp9DPoLjzKhDTzKDJ7Cr",
  "key8": "3FmJV9bQR5hKyzGBADP5cp7g8ttxG3Sh71mu2HY2nWkW9darri5qnb5y5eGVWHxhAQzTrnj48PUbSneJnEYVh4ff",
  "key9": "axoq7hAXb2S28wC2jopYrG4ypEeGoptF5Tp5ytqh7a1cM6WSZRJKtwb2zGbMkpwk1yEmJvKvWyxR8iSSCc8fz7G",
  "key10": "29SVjqznW2Kms5NgTsY5zeNZQ72neMMFPQv5giWtATzcY7gceHNmpGRHbek7mRMFrcPRstiss92DVGFvQJYCQUJE",
  "key11": "icZsJ5D5gd2JLjj68m93h7WMQE2qXcLQbyWJg6vLhZxifF1hjDgVF2wXLMbog2iWQUcmUSGghnYaDPtSxNQNJQy",
  "key12": "5D7jA2DTDax9rmdzkZvzmjjJwkFXgz8WxU3BTr6NPVUWKxVJC3CNyWnFnbs56bqxRBoQYx5saywqwJVRiTkTUaEp",
  "key13": "2zfHQEcdGaTR4wrp6RqAxoCCo2ZQTnf2nKPps2L4qnkbxL2QwdVWFBSpAGTCutAr616JpPKiff1bBjynRmE2j5E",
  "key14": "5XxWC2V4CudB1SY3xj8oCinTkn7dNmDUeJu2fxwRm4FasgvMdhcGT1xGUhMw56aXkH56bL842CwgcUad3QKm16xx",
  "key15": "3qM6TUXZMZQhLpfSr6wLE39XeA1DFxjRB5Vqso9mXFvQXQ25ykVZwFKMsRZaHb5C7NE3Q6sEfExo2Zd3423s2VX9",
  "key16": "2yEpkg9Kyn94x7gWoR4mgLXmVCC1W266Kd9NgFMHR7nuKbDTKMRPEoA7wgSnA9nD2x9szAKNNVywBkG5JncEUGw4",
  "key17": "36Mx97gsSXH7Ek1kGkskBSvUYHa68X3ue2hVg8M1QfH6Eqvx34pb6w25rKuijUyEH8vMF5CXq7y6Ciwby4Vkz4Z3",
  "key18": "5tiJTs8AqLKQh2JSyJxuodHsdmWU1JZzNfstub2cPQtVbH9S5Wm1gzThpuJFcUSNb5k2YvDpyA22mdJ3ugmfhmvH",
  "key19": "QoMPiP8LVA4XbpJeNLuFqEUDMtWDAa3b1wL9HYzAMXjpe5hv73W73KaUDaRj26suPPY4T4WUMsVJkR2xUoWSQqA",
  "key20": "2WtNfw7c4oacbJhRFS7EseuadJu554La5wEHPiRoXj52Bmt8Wx7RH5qiyJTKDFZw3jnXG8CYnaACGAcwJCXwjY3b",
  "key21": "2oGDcxUXq9SfTGYLsXwA9ZA9dHMdTmfstNcH4wcG2Euk6gqiSHUahXEN3sLUcehAUiVrEnZWBNNz9JCe95Lie3VT",
  "key22": "Lee7azaZJxKEZYQPiVgeeofQE1GYuEE1g2AczPT89PGNjuAbw9nDr9FFtJq4DSUszeQKJdwCZBDSAC3ZQuss4kd",
  "key23": "4JFeesN5GaXSw2R9DGKs9GoudqGXFCXCizXKTokjXHcCQWq6z1EWvRAiNgUkzw2q8MA54oKkbf4E9pdo9yibJHXP",
  "key24": "4Po2tjBSpdHctbhLATCuSuQuYWLnjHU1QPoPKX3num1F2U2qgeYZkxTi5f9nkrZ7y3yCH1r1RwFX9g4RgYkBYoAV",
  "key25": "482pBunRHSqbpH85LNp5BXvUZDwg8CQ8MAXUvLeQhgDQaJwTPDR2kw73gvGjZyusnZhNSPG5dvMFjZU53LygBScD",
  "key26": "5NuVpPabRZkCgPgMN6EenH3u3gKxzBkPvq1PSzZMHnR87ar9YSSJprA3obpZPhbL3HqYX49JWUWbfufmps1qKwaE"
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
