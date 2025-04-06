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
    "YDiMxh5gkgwwwtbFugiktJX9otzsnQisEsxURtaKqa2DRAYJgipmt4qu95TapoF1VciwBzNEaJShSesjZBQKxPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXBThQku6YhnaXaSZCUUhQuJPyADqx6NMETo81u7pUGj5Ao2yKLM5biG7pHCLkwfk9aVjgHoYdG5EbdB5TEWYsj",
  "key1": "5c2EZ9DrXpWPL9RaZMNoHemoz8Q7MFscdKqi5Sb1U1xfPQQY97KXeqTBaggmLDRXhgnqxAYteGbLyh7Uaq5auqae",
  "key2": "2krfTw67QCJJYGP2aaQiCyqj51C38wB6batngS19oQAVSsWbFf1h9GCkMdYmAgt9J735gfefHEN7UnxE5nnkZxGU",
  "key3": "c7UW8YaJWdL7FTrgm9HLbdxaXrAbnSDCm18NqnJAjFp2NTwLKbyXnz8n4jvRRASuKgLv5DNdQfRfLk4Mz53HQKg",
  "key4": "3GPdZ8p9XmaUXUFDwijtwdFeCda8h3rh7HhcJPbuvQYybpZjduZ56YvXwTQ5EYJZDB56kxRT1M7YaS5h35wKUdL5",
  "key5": "5siedQM3c7uVzdrzwTdYxsFBsY7svJnrsELfo2ATL2fg9mZKQNhrvRt5ECE5dyiknkfAUHSNNYcxDJpqNRpJQKH9",
  "key6": "25oQZe9Lr96yxACVin1SFoTg4gEGtpgBe9rnhXnmzgbuJyKHYn9wA1vkKLa6jZtdnqBnHp9XFiBRJA4QtuoCwFQw",
  "key7": "2Fk5RquAFv2YngoTuqtbLFTiVov4gszYiGkm2sDtZNYaWjkmxb7LmeUQwTuVWzgn5R8NEiXZd4TNgMEfY4fLxYH4",
  "key8": "43Vjc8FDuVT9VdwvL4oZy2AqBMLajSseUc3MCgM2eHfhBVJ9o1UMwk2bD12goczpUgmyTV6Dn8VrWomGwuPEb6g6",
  "key9": "5YKZsGFKVerRmCuT1mJLA8vLneJga8CcDYDj7UGnXQCLu146FV9wm39HzT7PqK3arNSazpiXh6JzaPMmXtueWSyf",
  "key10": "5oKJTbjHqNzxzcFVSzySt9gFmaJCa8UgLRAT8FrV9Lk3WvXJuNi1wYuuKuGveKJn8KbtVKKEXrp5UupQhsoGPRs7",
  "key11": "3qmwuZKVDpQbjWMda8GMb2fhokSUA3Jbnp98uXUd3jPjeVknoXaP8wsJyixLg8eojtHHqQjFZVaiSHmpZh3gaYML",
  "key12": "5qFf7pJZ42zddfhUi4V5tAFkSr7qJQNakAV5cNKztzgDMYM1PYvUzwHcVN3GiBCtFLJutbQk6Nz9Mk2Bf2Bjrd6N",
  "key13": "5tVN8iNQ9ELRMrnx1QnT1NT7zbQ8zFALLR71dEM5uVNVtufP7SiaznuHZXmqgzHiZoKznTAF1j993umm6MXjuCNR",
  "key14": "3ctcYX3Mx2NjTJHhG8mnTiECt9ypmJmbE6bW6vP8Frk2dYdD4jkWNSf6gAdmTQLTqTxSisCsFKRAzrP1UdPntH99",
  "key15": "2qiftRgV87TxDxRH7E9My2kTcdsxH5ya351zb9Q19a38wWseLaiqJXuGAM6oDX64Y61DyWgYNmNx9oF6PEFw8xqo",
  "key16": "2vftqs5sccJqLDV7cAfrSqJXdujAwXxXSug5UaeWPRW3482vDvFwayU4rsoUKptgxzfZvN7cKiJvey5HG3dY8h1E",
  "key17": "2JKKwgvt5XpxHAkcYsQB6JhNA5s4yzXz6CBoJ94XpMnXPxSsHhybzY6ChdP64PXBYKtM2mg1sqKSojvru13TMptk",
  "key18": "5CAk7MeJmRpuxfB1bBbkscdiUJeb2Mvt1yfSTX3qZrHEK1DY4RRmQgXW1PYmP1zVbDsFb8jVpcbk3Sr9tRtAJhCU",
  "key19": "5zcNVWocmLmGe49Z7Y9vTPi2nkry2ucxr2LPLxABR9ZchR3eEkmFgpuVaqBcFaNmvXjQffKYuJ6bMGEWfyhLMwsa",
  "key20": "4P3tixiKaoP1htxW4kmjFGo6iMx9QUWvAmjGJrsC5bXk5QZUMosTPARRizbbufcBcHpqDJk24r9pYxYy2bG239Mr",
  "key21": "57FPNKypCJnX8vy15fGnmUoETSzE8SBVpXCypMktYZmNb17UVtG53BcW1emNa3a84DwTkJ2fJDhvXUt5RBxmnrne",
  "key22": "5VAK1bw3Spn6imSgRk4nWM8QTjvECfko6X3oJGEV4Wwc3rjrZHHUFeVfjrDAoDmQ6hP3KLtnFmU788ib3Ltomhn1",
  "key23": "isfdwLiAA74QNUi5EAC47c2J1io7W9oRvegQZg4aYykJBFcCs6HG45Doee9AZtEF9CYDrae6n9aR3hnXV3K5L5g",
  "key24": "3hHC1Zwy4hqFBzJufzn2dNeS24fUHmCcaSWowitnEL56u5PyXhH3sGVRJtgASmjyXzjoVND9qrRSkZbBxRXco5Yu",
  "key25": "4BWdXZK6enLEMNqusJL66XwP6ANpvWsNpPasVzEBJoTuQW7MJUYWAV5YcaZCc4e9dH8S28rnriZdYGSqHzpPaQCR",
  "key26": "4T5wULKnu1jXP48fjg2VzdX7AZPieRaXn73SqsPfpan6vkvDpd3BDtFvbquAryZyEHPDTfc8jDGNnQFfNPLCkgxo",
  "key27": "4TF2KzW9not5UK3aiiQKAgRZikdG9nhUr4BQmNLS1bojTcKR3iUzpadrEganu411LkBmBs2HK98DDj7Q3x8u8cgo"
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
