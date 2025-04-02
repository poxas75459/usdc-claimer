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
    "2XQig9qSugfpBwEwqjphTRoEcSeWv9rsyxKJc2inPZ9EBzQ18kYYWaT2vAqVy7XhXK7E2gcCYbgZiNepzALjL9nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s73suFboy8Wy6pBmJ3eStRigvcCq7mdA2ing2zDPaYmen6LryLjbQ4VsYzwB3EthVp6HgEfh1izewipjhHBt58L",
  "key1": "2sBSKrKbYfJtuU2qcMyh2geW17NoqGevHUMSBunspsTuEwJanWt6AiMNq2TWXKcuZgLsDrFbFq1Awsde9TSTXkwu",
  "key2": "6Wt6RBSdVrjKEPXZHWGcQdx4wEjLL2EWmkmKgYgXj49pagxHMRHWTLd3YdRWEodwSgZ9qLShQzYmZVc4S873Mht",
  "key3": "osk2XzPTuQga1XmxsVmdn3jGW69m4T4ckV5mSJvq4fZBLrZZmaZcPmUa19zASTJPpzHKE78wSzBk3BzBWf4R7bX",
  "key4": "2gFecoC2of1uKzy4M1EUq7e1qkJ6VAFCkhX2135FkjVJjsiKbuXdKnRKjMGfYT9TFSE3EowdQCKm2djtj5xefY8T",
  "key5": "5t5BC1cNxnNLUPrpxMEAuqqApCozaTGQmJ58nFtfv6x8dhxKYTrxS3GGWfJAfkhRLQund3N2FXM74EjMnW5EEe7A",
  "key6": "4FnTAFJgsQMT8aZxMHitTHjGk4Zz7jqvvK5Yvofot3hv33avaBLPjxVzXoZV3T6mJFYnJBd9Bf1ihgRFW76DLQhE",
  "key7": "5oKaqjZUU9ajwDZf3YeuYXjuVUTZPAY2BsM6Pv6YLsx5zcc2VHF973oER4NYd7Likk8ieWNsh73bBTXoLvcZLuAs",
  "key8": "2CUjF7cY7E6AdCRo79XV67kZ1xxKAUakML5xxP3iFv8zoVAe4wSHDkHYvxK2Y4dBqcDviKy8TDa3s9YgKy2QH274",
  "key9": "5ZsH2gXdkAJGiAUDXJ294sVpoNnYStqw89cf8ZgFRkpUfELuvf9EjgpRyvDR14KYWUNMSCN5UK1mcT5onEL2tAFX",
  "key10": "4R5uCZm4GpJKgLdSDgaS3kCxH9YNPiTxN3dSaEhLvNBUN4XSN94ryaKYpPUCp7UmeUU3C5sgFc9VxBnpweREYfTN",
  "key11": "25YKtFVYkjUjrHSDJQhpZjbkNMB4yhsHLuHhqgynQjJS19aJcQdWGKdWYAYqrgHn7bbyYa8yyzJEuN9EFsTWLUy4",
  "key12": "3XmBYYangZhPcC198s8GWMux6ST5FBbvmzrkjDv2FjKUcuwdgqE9s3qKdb6UDXfUkFnF9FyKGXy8V7rwHfsDuzw",
  "key13": "2j8NwvNjyuo6WKNXZkPc1gcqwP4myjmumfcBYGJUFHwwqSE3qNLEKMjpKZtACcmDFxBYBRH5bd5TsUJmEMchwiP1",
  "key14": "2NqenhjsuaQ16y85DEXw9R9xAGLdn9Pi9VvV8bfeni7wrX6wfyPwpRrVFG79NSCgcZyi4Put8keT4MsPqE5Fa7Sd",
  "key15": "NnwTb2zbYk9KnuxQB2CpLqKac8d9jfuxSPGngfwQqv6FKSnnSjxyGkM6g93sALbv5UM7b3a8ECfg6txb56FZaPH",
  "key16": "3J9CUeWuLgm7M1qyqsgK9BUswsChcWsJcpAgP3Hj8kt53GAhyb7tYwitSfRkJBjCsVinb3EkwDsZ3eyrMMheEY5C",
  "key17": "G3wpXqJsdTqgUbj8dnytKhqb6avpJH6gMyH8okqwQUNXn2Mz7DGzWxyzEXaU12pZTJfARae3RBaQf5Gv8PgD8gv",
  "key18": "3itjrzpnWkCwLam5XMUX5ZY9qNNzr7AURwpNvaRW9oNTNifHuKZGuhWhdoSHyjuuJYbqJUmMbJ4rjZVJbUPwxq6Y",
  "key19": "TyLoYo1PEWyAbHQeDSJjnuyY9PaP5MsjAjNpmzqFnVvXt2BYnx2nVnNxVnbGoXsTXySdXPwXWxTh9i9pGfinFQL",
  "key20": "3E7rKBDveTpYriusgceaqdR8ndmrcSrFqVvxVywenPfygcpQWnRKvHvPvLEGiPtR2PdfKgomd2x2LLspcHrcgShw",
  "key21": "4gLsCsctAbSewm2SH5Wqo73TWdDzdeTyER8LeSS6aMH3QugbzTAg5snUTorWsytgpUmmnbozfV1pQkBnjV1YfdDT",
  "key22": "4Yc3zbfTVFFU7bsmv5Mea1dJRs1KumZ1D6YEC1b2jsDHNvHwjJvqVjEyWkTJWiQRd4pV2JEPQFrWqVHtEHdzxCV2",
  "key23": "YVUJxQXb1KsnaDqGqnAZpvyLRPVQrFZhBYUybRbX3Tk8c3eVENUK8MuaxGPrgkzr9SvDDsHNEvSkJTjMkDFt2GL",
  "key24": "2RgrToWDCavJkWvB5FQy9Erx12CNgKdURN498vyoWynG3B8Hj478tTc6d4pYEmrhavgzP42e5DUbZd8vTxWQJg3z",
  "key25": "uS9Xrd4SXfqDJg2xKJcJ9AR8mBxTWVSWg5zeGQEfSio2eY8NrCaeTTqUj4ozG455eBF8Rsy3uFx1shVFcJGyVEt",
  "key26": "2rbiVAVw3t2hJwzX7eMy8QGsmTPSU3otvHVBAQrikCyaQmjQGambSQrqqBLXkq5tJ613n17pH8zJPWPpBWCVYHos",
  "key27": "3NAp4FWZkQrSH8KQiqcdJucdAnQqkNE8bEup8rJJDf5kLuzqcCMmysz9xzi4zjXqr3WKVjDwsFiCNQpt2Q2u4uyX",
  "key28": "3tqwLwZVrKcPPXim1ipjvGNzu1akGDVjUfE81GiSXFpyy7rqCDeMVgThCjJt1MNmHSv4nzuVatWgW2SpzdFDDrcc"
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
