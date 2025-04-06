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
    "5wqiz4pSubyPsEVbTydsYoQntEPXecTfQRKRJAH4ai3PdHFci6mbdJm64C7MCxNScaK9cukithh5Ba2brDrSKShy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6RWnnDTVbcQ3eo4vGLioMhCDu523Yk9b9a2qtPsBGvBkEco9BcaNhUrDNHLJrmyB25qmzXnXvYUVNUmqiotFf2",
  "key1": "4w13x2JGUbg5wyX4e4Ny2AUqHvUdwkBx1seLNhjiWjAdEF4NW8n6GjPN7ucxXZqR6kBVwa1sJLmC5Y6DRwAitjJh",
  "key2": "61aUtvYbFxZK8oAia3uciJb88VfsuFf9gWEgvhR1EcFjo4HMv6xnjxib5ZRGNpPrdetLyAw9xDCLTGUDyNQiMYPN",
  "key3": "3CMJAjB4tG4TcxGEvbycw8S9Ek1ch3cZgr43pcANw58Xa8VWYPJfXPvJjUQaxU9MHPjMitLyno638xSH8mchXR6e",
  "key4": "2CPQH3UaXwgRWBk96b8WvVbPkT4ojWA6tVAvkcbbGYwxcq8mEfZYRrD3Rye6Wq9KvM1WZBVcKns2z8XDd5jdBSCe",
  "key5": "5UUo1CVyzPfyqtobn14P9f6yU2XC316Jkut5wu1Ua9in3Z9KCCoFAeEJvZEzUEuusC1yzrN2kmVpCuAeG2k6sPLi",
  "key6": "2G2m1xF1hW8sr2Bmm6dXsRW8WiAUPdnsd9ZCh3FZ8pbjrQzgWaXBMEqzSSjipUuR3VvkekrH5RFvt7Sy2TSp23eB",
  "key7": "4yXbPLLzjxQ225mH6LYsabRtvVoxFJQyng7r4BtAt4BiAoGhBq9g2p2F3jvvLZz8H66Q9Ha6vT2YQoiWWFYPKR1c",
  "key8": "4aVTAxF49dAmR2xUY4xthSh4x3xreJX8gnu7Bs2NkKjtQKE72cHzbyUf6xBhxVozXzGb8HJ5jYJ5jgZsUS3wiWRh",
  "key9": "2U43XMvWvFw3Aejz6EZRTrGAg5wF7tZSQyp5doCFUv1JRJXDHZt1dELiRgMwzXwvj3DngjriHAn6JuC9DngALxJY",
  "key10": "2zJetfA7kwdagkSj59wGh863UWHt5Kxz9FCRzxWTosrsgVtGU2DsMUCmbmXWbKSN1rvNRjp4582Qs4THZAryfo6X",
  "key11": "36cXiGjBiaccyfCJL9sZTEzEoRiW6fa5MpqsxEYZBhyHL5ggAmg5pedZFF7bEp9SX9PrpJNbHdjuh3KW3nVo4KPU",
  "key12": "5VmDpJmy7QQfLH2zMYWWguYxfZi7gPCPi7nV2e1AnW13YxhL95bAKhLTorgMG6grUjZXZZNEEgKKtVWu2J8YbcLT",
  "key13": "54AduBX8syebXWHESMZt8SyVkDZQHM129Lg2aCJpdmSNRWtNv16kd9B6hgtHLxWsdWobN92WMUyYxgyy44FMmiuP",
  "key14": "2sfDWH3Jb8vhJj4pMjaPSDopgcGTH73xXMA3AG5EVVW3tho9qwKk7vfpY3AWC2i2D2WCPQrN8nuFSsznbuQfNiwT",
  "key15": "3P23MgVp6yZ4QpKCNqTvVszwCCz5ADDqtsoL6sLMLjYF6hdHkXqCMUsehKaW3mm389jwgdw7C668J1mnLXA8anx8",
  "key16": "Ez5gfYsXY1yRTRWVpQmgMV8fGcEMBqEFvzzBgwGpqiNdJ4o1EUAAV9Ykc8EuCeCXXouMu5adzUAFDakUK1UjAGx",
  "key17": "5t6gS8bGmXnCKuefcbkVNNgh99LuNoWYghEjyKxaxzVWVyEmAGJUWgidt3tYNnij3JZL5u4NYccZGwq2bgezKYvp",
  "key18": "2R3bZ6sbCj8fypzwUUNEqYsKWZJk58cacdi6F66Kyn15BjcJYcKRGG2Y1zHAQpgn5H9eUyoJYkfnvmU2nQWgq4Uq",
  "key19": "3gUqsAfdRDjAuc1HJ5dfXJQssw5kzBWt2ta3BcJfuojKtxe6LLKPx8YcGcdsyHYdA4HqmXdk7dy229VgGGSXRvy3",
  "key20": "39jZX2A7byAkMt1inNfTTLa9qZUcejiw8JoYwqjStN1MoNaUcDpVbepKS41cJtfLAcojoVZVazodygc79rRxfzUu",
  "key21": "HoGHqCTQvtqksVFoh557mSMKbShjbTjh9sEQ1R715HqSkNB6gLhTm43jmavuKnp57x7c5iMdEnmKTPwvmBxZqqg",
  "key22": "yzFbKB4UkYHFPk6uXxx86LDcVCkmxspMihS4BRrsTaQWWc9Ns4HiWhJoroL4xc1h8JMkRaMDZjfrQmrMtcmziZa",
  "key23": "3BrttjTj1VdEA3oLEeJmkuu3xC9djw1aMGFVj7qEJRZt8fs9EaH1VS326iCEWsUJrpFJckC2gVMWfwFEbzmhiFSX",
  "key24": "4r4nCsmoZVnjK2r4iFSU3Bmakr6qu8PEvMPkn8s7m7bScbZAwXTPzywEpP5RJckARhfa3CHQ7jWRzPvxFUFrDjND",
  "key25": "5NvQHxi1rDgUuSFhipzFrKcewgfBWLNd9xPqvphYTa7CFynGnRXtTRXGtvm4R5cHToubk9BvzfZD3GndbCKaVsqF",
  "key26": "4veQs1TMX2NL1v2XKxqa12nYFt9Th6jMxF1WMyhXZAEz8feKVu7tuzd8WeQktPS8ztmW8e4n6fGosV2fjTHwn2Wi",
  "key27": "4YovFSU3YojoWjGS68H6KLkaLPZDjpXAZUkBwKFZUiUuMe6y5PchpU3swffj98MHuL97WgrLV8VQg66GpNnfkQ12",
  "key28": "2WeZYQcW6uMQLcCcnWNsnzA2bfXmjV4wQb5392ticxwzfRRLaFJLyHKrJ5onRnU1SWMCkWPduVMBkx8DvVtdSWGF",
  "key29": "4ufeZaZPQ73HudWivUReCzvbMoUJnFG7FukkjJjLUAw4zC43g8QK3bJZCVhqpcsTywRw8wr3umAfWZqKze3UswNf",
  "key30": "4xi4JxJLaUfDF19L6pVasEhVZ1jKKzSvgYbfX2qV1wjcSy779FgxbHvt2kqCFjRuXe74u4JmYJBXVx9kCsyabUyQ",
  "key31": "2uK3Yw77HZrPeSFrEDiCLaUdZFB2GeiJk4FM516whPi5mQnA2NhSrUerBzyzU8mW64x5wrUuc5aoWTobdVCVfqsE",
  "key32": "4UHstDZgLTVdtJ1dKgweMkAPaEEZQXznYe5cKBUNrRe5WvDfsyuVaCmae3KK8hWN1f4aSkB1NkqaH7drAndiDhXw",
  "key33": "3ao86617LFSnFxrHESxY2N2pyta22eFdiWzGSqNZYnGFcQkvwYTRy2XBtbXEoTgSBonBSsMExfrC2WWHqPCvDLdT"
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
