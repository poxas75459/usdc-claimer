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
    "37ngVgC44x3mH3qcYA8QQmBfnWv1pr8LCgXQGGsfZJs1ASbNRb9fBBassrukYyTAWvpFVMYcPo1bUC6sCMmJB2hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zfLxXdySqFqVj98XsyZ7SVJiw3x5hhHgtd53LrEb61wwUQjBzDNtCm4aSZQRfqptERTjUFJZoMb3N9PShgHYSd8",
  "key1": "ufJLZpDL77G3eWe3htGUe8djFq1cvLcFjmvEXC72MWLnriDHHnN5eEmoMEkukhJNYqsh2h9nFG2eXkktg8hNMcM",
  "key2": "2zEkaynyyhTg5YeTkJKXcFjq6thW2yRuuJyHoAbPUviZxB3aNnnxAaDi5wNYbsAEG4TLjDRtARsRCj7DW7qXQehN",
  "key3": "4Zrpt8xBeHMQGaobva6x9rJhrzVp3Y3ZYuHxzrSeRob4YotacZ9kN5vXAq7oEiYYAKjVmfVytGHNn8kmTZ1QqaPv",
  "key4": "5PiTJFJRZkyVnEN4oVBsKT2ZQKhjy6hK31QasQaMDkaHfzvuFTbTtqnp6mvXhpPopPm8pkL3AkiGd6UiDnFRNS1K",
  "key5": "5YUdi6vMxaaf6TetzdNfE4ECxkDT4Gugbd2eZQatwd7Tver39rz3cHa6SiBmM6uWFzeBMuNKAoNgDfDTmzaUNcaP",
  "key6": "Ae7KtDcSBjqFQUCGJJzdTxc2Ap4XFxvKvFvBWn8C27x6XsCqm1PaTchxxpTqGNuRRjWoBE3ypodP13rCsEbNEyp",
  "key7": "5uWz22K4BAL41J4vovf75PqG68PBJbAbZ8VbeSC5Xmorcysqt5esDsqFse2LRgjUFBMh23xYztQQYhSqNf1aUA59",
  "key8": "2SP24DRbm5FQbt7uZFUMyiNkRWF1vYQqbr5qH1bYJzyedc6Ecg4L7EtJg5bWcCt3KjHFJXe1naJeUjUVTSnLyGLM",
  "key9": "3zfa46KS9deD6NroHS8SWWypDGaX84cMpchSwcpTcXu2E78CjGxfF1vfe5rmDYEovcnnZbm1wBCgCLbNwCsXCxgQ",
  "key10": "2eo9JyEpEvAY8m8hEMBzwEANymaZcnvirUMnvB9jsPzUZ9bV3cUhvDn1irr2eWnT8xGM18a3z18446ys7LGKM9L2",
  "key11": "2cvab41eboP6RSwhJyC1h9iSjZwCKeaDj3QtMBfZ2MwxPB4cxA3gri8rGyWyapmiFreUtwfEuJDW7dvfQVx4HXmg",
  "key12": "43Bcwoex4cVPYM9ynrhj51Wf8VLNXHhf7gLkP7jj5TovUNoFnRVJE8ivrw9Uer3xVx5VMdY6JhM8Aj5wYxZw7BEL",
  "key13": "3nGkQQnmc3nwmZysP9mbiSmVYfphVVNd6CGKkrnFi1TZT46LyJMuVdwq3f4WiLHqfqgz6vRAq6UsJDsF1j2ca1Yq",
  "key14": "3E6jopck5Sk1rzTRpxnDyrmDMehSosq9P5tQbPaqYFdm2UboUrvX4d8pm52kKERGdEvnSCzMJ6aV5RtfB7wjqpmd",
  "key15": "1izmLP4BTDG5SVw7TMKob2n9ShrKh8FRevnST4ijuWVhGXuwUpseU2JtZYxXm2EBd4nzjWyzLSJjmny7LpRD4f8",
  "key16": "2rnn1BCz6QqABkkwubDEqotkeyD3jJveCMnuYsZkqPBE1f98QcTiuX13cwRZTKiDXGgzNovzHNgey8PwXTDuvKpE",
  "key17": "2HvpzBB82PpPpL4M6VYvH2BtwXSY4R2ZGpBuJ2js4F7QV776pvBTwH6G7Uyrhk33jVZ5PcNNR3ZsHTbqF3bm8i84",
  "key18": "5xG7myACxz7ncV2BpstgVuifYmrMapvjqkoVFsVLhbBmsEZUdzynA4ExVjXM3CCiVyjdakkRcUYBvZZVUMDNLkKj",
  "key19": "3hG9nuAQiajLu7Nxs4hHQ6TPeqeowMGYqWksEcDwmADUXi69VWd8XV8GG3yQqwaDUF5KZSE38rVx1m4rk4qerFDA",
  "key20": "4bZBhrWjVroBDjmLkojLk4Uu7Dn4UJNS4m9VZHAj8rg1TP4QngXagBxd8e1UeTY2UBP5xXA2E4VsGXdhrhdJvz9w",
  "key21": "2mPTWo48aCBhLZf5MoUzucnjDz1F36ridbQ94r7xB65dr65j1xTPK6QyXiephc7GjJBRstqKEoNdqzjZkVWLwHUc",
  "key22": "2SK7NG7RnWN6sZtjjrhQ8pbavAzXM6PDdcAYo9EXptB4cSWba6KeFaU7Y1DbLpSiUw5SiQb35wwc9eB385MJozsC",
  "key23": "4BCBiForFk64Mn9pMBUF7bVjYfU6tm7TzWB4WfHwtZ468Q8XGkWaQHQmJayhUbKH9Dr8uc9tuPYY5krx3hACYubr",
  "key24": "4vVi3dWdnztzZEdsrtz4jAC95oTYzf7arzA1yWA5V4uKASFeYRNTqxwfmhbQqoHiRJSQwB2fanTEmUuztLj69dGv",
  "key25": "fxrC7dwakzd98fug8TxnSxgjtBDGJnQJSZqzC3QKfsiPfWjG3Ajz7Zyr7fFqbne5JNezFABjzoV2SfMLxf287z1",
  "key26": "4NTPmDLSAF96Fpewr8jtJDzyy9B2H8fWDMDkDfLbu1awMFDxGJTFWM5pNALfQvkSiWatUgHrrKG89T98ptyg7V8P",
  "key27": "5uR8SM8CdPWUUMrqs6jj4yXBzNNjEfviPQc3heGk7wjSU3wEFtgCLWa3oiCLoziTm3Yrux7Pa7h8h1vNT3a89udZ",
  "key28": "2oTXwzi2h4vLGowcuuoR8HHaxtYEMaSmh7Y9GJA2XWLQ7ZEFTffi7drYNCCCLgZy8XGPRh6icTdrnKjF4amB3t95",
  "key29": "JjY9kNJmJC5PpHcXKxFQGWqRXJDv9yECZbeE6hpoCnEKNYPjkdzpH3SxRGDgUGRXw94eVwJSTYSHL6uCJPhPMfU",
  "key30": "2rF76zdbaRVPuTW8dWjdPTwPipjX8Ws9wwypKKyf9fnDFw3dNUEEGxARFZ1kTqwXwQHx7qxh9V3rhYsfza9zMtmk",
  "key31": "63q235cWC41MeU3oMmBSxTpCgbbnExkT1pSyDFubzaNdvauD4pFfoFn5bndxC7FvJL8jZv72tTid6nYbZavLz6US"
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
