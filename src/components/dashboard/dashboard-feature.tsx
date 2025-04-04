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
    "35oz8NBETiBm1wg35GysnMGTFcnqsiqhUNhioDx3dAsdBVkJikmJTGxL3V6soomaTcaqVdw7ozH27k8umk8evsja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8WZ1vseFJ8KZntiEYDoCGzL5EkpKZEtwwf1fqka67Sx4YSaFd9E8kfDAxMzX2uh76UKJwsNKLjAfpMRbHyWN1m",
  "key1": "39GYyuZUAZ1TFr4U6Fq6yLAEt2UE3NopSRzFp98u9iNAx6mPMUt9SjrnjV6S94DR3cZethihVDUYqz9cbxRzFMZa",
  "key2": "419zgU8Pc2qTkDoyd3SYLkweSiu9VTq5HtuFWvMmXRDDkMHH7ZLfew3GGtJ3QbL5LFZnxgPeY7ztu1F4TaWibyMi",
  "key3": "38wiLfYrRVQz9RDLUsT8pQCSN2D49sqtJDtCMdpjZkk71VqmegomRKWHXFXhsdBPKZ9MFVUSNJsudCgqvjrjmHDg",
  "key4": "275maiUU9bTkxTw5aBsnoh8ycm9PHJBU8xe2KVtD6FfitTC7ea3HfPYLt9UUV8w4831cVTVe8hooFcji1JjgM6CR",
  "key5": "3xGDjdTbUhDDpYrNnArCFX4mFNUcB9pA5kS6Gn9GrbNFABCJLS2c2937nMbzwW4X7yHr62R72y4qBPR5LfAJBfUG",
  "key6": "5Td1BsKB9WQPzjMXHVGGvdTGpR7VkmM7acnRgnk5JikuASZRaAN6SHm3ptbNPutTzKnhrNXDiRPhfCica8SrQyk1",
  "key7": "5GcKzHiffCqBt1i9WF3wPfNa8EVPdKV82vXxh1f5aREviM9XbzCEpL9zu7Gyf9KCfrwSGEQCtARw27dxbHuReQmf",
  "key8": "562XggmoDgKJvfAE8XWQkAhvHjxLFPjZrGDg3YhRhwNAzPjho1aCcK6ownmefC8JKvwVo6N3WZ9Uw71WSfC12Lmb",
  "key9": "3zwjqXokYP2TKuztxC9NfnkG6ZcxFyRpJZoQrhosxRcg6GQqxnGwC9fbAWcK9tcrV3GUMg2NWt9LvPu1PKALkpP1",
  "key10": "4NwEgpZH4tDMyoYh6AQVqkYdykDtWUQB6fmjL5kXjxTnSmegFYUQoSRjWKcUWzmotqhQpwNtQYSAW5t28eazXpy5",
  "key11": "4SrMnEpFtSeDrSH4DbxuPJkLdxALGofnHwMLB4S59voNhV3MqhqE8uKgMJPysfHMdSidqH3qhea6nzrtByVdGgsL",
  "key12": "4NtPmpsbho6rQxzM5f7E39gdcyaiszv3kcfiRBb8fH9R1uM1sRBVKR94e3cG1XwoemPqbyKxPjsbtUcFKw88uQb7",
  "key13": "HfthgjCtu9bhwcYN8pYTbZqerCkhHuohqxb1VeUzs5S7WPV2jDANnBvS5wLEDzj58urjc8k2FscHQ1XdVoHgM9A",
  "key14": "3wLrLGCnPrZyeh1337sAtLdXTum5intZDtBwwZ1VW1zRa3NCN5e7qRH68oGVKJC9F1bACV1TDfK8zHBddhLw3unp",
  "key15": "3HV6TuP3jzGgarS1oCeaTWmYuFEq3FXsLUaNzLsgPaafyGagorMo1URGusCSd4mGxb67LDJc3uNi1KBSJ1Frc4s9",
  "key16": "3bJHwoHxyNditSaPEdnbMRwCR2ZvRRQGpBn8PHkRGKmpwRBRt3qPtKiw6Z9uGf9eWGVe3yP66ZdAoZ1fqxs7YuZZ",
  "key17": "2DzsecDzu4LLXTHKn2gcC6tAvUmjm7qXGwBu7GpDx4vd2dfDY8R49da16nMMNz3eihWWEENkfUJQWafxz13eAwtK",
  "key18": "2qePGav7YFcfzo7D2tsHFjUeKXyLHDJhVDWi6TugQif8K2PFV2i9e9UBXs8y6CfyzpgQM88TKmHQtjzkzDfioxH",
  "key19": "31bFrLoPcTqZTf1Fs1sHrsVMSaQqrxoJzZD26fvU7sGQgAEiP41jaMbdDijcTkN4d4ds4eiQ4RFWwo8KKoALxntH",
  "key20": "51FfjDLHzZ42T3e3FCzKvm2Gh4FQZuDPCithYBve8e5L7MD5PrMMjxu7ab7y1jyEgX5CFjEkYyf8VwhTmkMnQnCA",
  "key21": "2GqNRpyr7rZwwmCVbZ8hDgkcrFk17CEbqToPVMn72YveGbK4pW59hMesekdGtsCduiFLcsfT57StXn5e2wfJY36y",
  "key22": "4VCk8GvSpYwZjHVjdntGfyxVu8wSq72zp1MdHoCRkNVp3iZTr6v5it4qGYx54UQaXMywUwb4sJQ8KTkLrHRqp4G2",
  "key23": "5JmLz7zN6dqVPDyDRUYfZk25sYLhZ3njCQBQFhPX4TXB9nfUKuboPGj8AQ1Ki6jsFssn5hJfw7FuRxmiuUjKMW6Y",
  "key24": "6s238nFnssUEbmuTNTeeKmSdWPpqLZJyNnNmLvL78Cortju7vhiBuWsQxjW1zWkFMdoPL2VeerWKAVGYqxRmkGw",
  "key25": "43KomrherF1tAYorFum55a18m5zMyxt2Qth711TLVXxb595A6b9CDpwQUCqttDUcSqpUGcPzy6LWtyxs7cisoaqa",
  "key26": "3ifPpZxV3Xw9ajCxEhXbUTnfknLKxvVgwwqe62WdZJQ9HbGpBgARwPgawCvsaoxzLrXwFKChmNw4vKAd11SyDrqJ",
  "key27": "WYqHuvZtEDgaxDc61KY9WGMeP9yAefFKWg7uJBcZ1ikmREz5wvaAyR5wBysAdzk69Uixos6GSF9ThFjGQoHVetb",
  "key28": "3inSz8eLVQ7F9bcjBdcYCVoECmVhmHqvFKcFaEYMMp1YZ9vGDRKBc6RP4m6QNJyaWqByqbQ2ru5ZHF5B1y3XufXp",
  "key29": "3dxWUThhJrc8MprjVxDbRfRWAfGEwdmVCRNYU96K3Sni3wP5bpjaxDrNtHct3yaa6bAaGWbreaMmssbLbyYPSJuP",
  "key30": "ZBoYdhYecVHB68aALSbmvmRhoKqinDrzAD8rRfyffzDJCVGgun9qTZiHQxFn8UxeJTRn4GztcSKkVBL2EsjnZvD",
  "key31": "4RsAdzsMNyKQUJaZX4zDYphENjYxtHeTp9zoz8bUe7eBVi69XDH8S5AeQrCijF7R3byzFLh7ZPULxwzxsmwwhPBX",
  "key32": "2rSARDaYAKZxKUKBg3AvQbCNFwwzxPxXv1KeMVWQcy3vT3RtCvogZ8qEuVVVXEWPm4JePxYtj1a3oGGEyKy8yEai",
  "key33": "2FqxHtssDfbYLPzp4KKVEZQj8ZkmQVAsHrpSNHDjoEkR66yCnc74iqVrNRD78ftdEJPDBfiSzQHqAGvFoNhpQPcK"
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
