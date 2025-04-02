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
    "251qubD4LqSzk2Xa9EukhFySqAYpFdRbrhmLurFMWxYSPN3ExEdpoBvFWeCbe5DU6Qk6YZGED5PEg4PvPTtGPfze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psUmZgquWs584QBCEXs1TjMsNpEQpg41dVfryaAZRDcvRom48X5gB5NQzebQxj7haDLm2XGe9PQWYp8rBppn18z",
  "key1": "5wWzgfxdJSMSevDWjQz8J3uZ3N6ee2FRx4kUGYxQK8fSSH4RTvkvn3Num73ww9y6pS4hN43V9bmtoLKnHTWMVkNc",
  "key2": "41MJpJrkdvnaG2sMZ6BpHPwGHro7bo3rDUGpRkfkuqzd66hEYnygw4MTXwooFiVyLjWBX2yE3Do3k6hfQXLBnZx8",
  "key3": "Uz5c6abJNbpqRChBbuK1mTmP4CpbJHWomoc9gu9trh2teFV6PuNGDBZ7QJZYeP2a6Z6uj6SVyyLvLy6wcHtLjEJ",
  "key4": "5CgyeAX8usE2akyuDdN8U8cBhJqqJuP5PTq9qjbFHxMW3i2xmGvznqo9bac4cp3RrbgPbxwXzwQGjXsn9Y5spFsj",
  "key5": "5fqgjHYHM37g6SDRYS6LVUxVkTtNWE9QQQnXcsWqzLZggLu6aKp77MEGWGQZuB7JoLdzJC18gCtW5UV23jH7D5t1",
  "key6": "2dyMKb4cokbxvNNy6mQ6HGAM3VtsAZ6bh6gFaPqvQi21znF5CMmHJSst6YvPGuKVs9zXmWvM3rdkn4UGdVR3facE",
  "key7": "47RsBXKdDM9yS3Fs87pLMtQrzU12TirdkZuqKf73fwoDC5agLsX9XfwuYfneBZNUcMMUvfVGkpgVMh9Adz7Nfg94",
  "key8": "5mMtpYoNwZcsgzpapAF7BcXwbRb5ngx1QEnFm29DrNJ4XY6gHGjLmSdY7p4Wu29R56doY5hG3gynstKEQPjRW4cw",
  "key9": "vZFdcaaEiKDKC2hPr4RcMx8Ja3JbGEj9oBJNPa3N7oHW11DFqFze3eRvJzRj4XfPzy56Vw5d5Upbh554JTG89zL",
  "key10": "4WhrWshPtejBJejxoiQQpibku3i6g9EdoaMWjrQN4jUyFcZ1FzKU4LWFy6ZaZSfobpfYCzYdbwpstSbyQr9JnjQG",
  "key11": "481cJo3yD2qYkH5GuzfmikaHicFQvSmnW3qunM4HPtFFSNC6n9gKEJfEoRyQSmAoPmxiUertU1tJnpoZiRhCW9yF",
  "key12": "2SunhtWstsArTRGfWAYkXZeJHufd2jJb1dBjmSGCKF37G17KdkG3hoXsXvofk8hqs95572iRXNCUocrMDDgdAvPn",
  "key13": "3zv8jjnW9sT9cVizZZPyDVCZzhKtEMXqtKvG3YhE3Fcfe34uN2Tu2GYkLheVYNbPz2jH13jCJQVdBDWaVFgaZHR8",
  "key14": "3qXTFp8TEYBn5VDUdXdikcguNEuqvToxSvsdVcUdik8JxizSA9AhX3JzJ5HXSFrmnxPC4a3aJS4qZ8qXA2VoR838",
  "key15": "5LSUiz2rxsKgGhW7m363oiBoLcekaTakwQPsX1Fuauxswb16s8BUwxXtrNQxduB7Upv1ymVekZKYjQJkU1LN1ETp",
  "key16": "5HFPN1yeo4X163fwiLDgJ4Hmxe2acmRacaqFrU3WBiu1BguLBW4bTsLVG76VHr22cwxB3dEtuu14joymhpAAL3wT",
  "key17": "4AuuEFBgA9mFksq8yFvki8CV7h2MzVU4kQVfMfMX5RMtVnqwZ7FSWa4Kzr6TYteFBySR5yWRhPFhjYZssHLULFA6",
  "key18": "y2yniZrb9HNfBv6HsdpbsEsDKRabo11XSX6kYWfxUC4aguGnYe6KZ14ewwXBB1jxpvLWDLVBAukfr173HhG1crG",
  "key19": "5KtSneGtt2xcAVnZ4QBwUgcWaGBdjt6KWz2K55MdfKJLHuUPcar9dEkuW4rscav2rRVsk198Jrpc5WWjAuZPe15a",
  "key20": "36A3oxU9KnPULk1MAapiXA9dZmm7FJEXCYLxZeM7BxFQkbqzWCFdiWgDfAZDrkki3xphN2NnkmrWtpYwvq2YNHsg",
  "key21": "5fV9YWM87RWLzbSeAjGzLqTcUXMtvMRmMW9fw6EEctzGd7R9o93cRCSgPpFxYcxK5mKjwA5w67Tuv83r74BUT36e",
  "key22": "5vgapWZx5mtNmoKRkVxnrUeDHEEBFrEJkE9XScGNhL7jHksfrmuL2uRanwaXQPLnwkdZyCk3eya8idKxYh6Htcjn",
  "key23": "4Fpm8B3p32TBN8RY8Tu9WbfXkAaxSJzvYfzzZfQFwY39zf3xsn2eW91C5WVVJbcaMYUvm6Mm6fgfyZEhzgCw6KJW",
  "key24": "5rBFFsfxbYG3G6MPruVq9YXx4gAVhc3kon271YEQkmcafnwjZG7wurjbUvQezZtBmHai9JLALrVfSxKuCmwCPcJN",
  "key25": "5XVqMpKxptQEtpvCQLj1u4vtMeGoTAeHxEChM8JHWtevTCXTAEqSgXP9dtrEBT8o6G6VtgSGRx4qYQzqBd8Xtmwd",
  "key26": "4QxEg5PsbEHTG6zhpXDJ9V9s79iSxY2ciJuTj51gsmv21m7vbqM6hSbw4c9Ud2jb12Kse8cZAZPdWhf3D6ruj5gs",
  "key27": "2GHhLT93pPtn7YdvfkRYZhfDdxd6YGEHFce7G1NBEMfTgPUvdXrjynDensqjYPKqDaGMVRJFkR4B5B4NTU3qtVcm",
  "key28": "JStzErzEAidHY2gSrxPoLrnXAdn8askMK3xiRLPf3Hw9MDK1VCWyZjY8BQb7mNpX4wMFWWr9CCmqb8LphDZa8sy",
  "key29": "KpcA9Ku8nxRDd3iZ4dJGnsiYn3jJceSQE81SbsZzmajv24A2HfhsFdoBpyj8iJ2mjDCmC4VDCN6WTtiLUE9k7MF",
  "key30": "2dqsohzExAxfdaEfVpF6ivn7AxmpC8y98cP7FAQ6CuMoxnaPUzAosJCuzgYGU6NzQ5m4br71GfaBxNWW9mF1etbB",
  "key31": "5T8BW6hN4fc5jVFKpamRegLBQqzYgGn8obMUqGSMxXYhuDuzoR7b59YfJ1LjGAF9Aws5ppoUifSQPLFjDpM5SfFg"
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
