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
    "3URq7a5YtRR4FKwF2aYKW1he1RT6bH5kG1BgxE2KpW7e2tEnamLHeDE6AYTYFHgta2Jhb85h4qaac88Sz1gb8Nzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvhMiJi2uWyFsb3FW3PrueMq4RNU6tLyKPicTHc3D8ZsWwi9t4KdWPz5LuLGMs18Y2nMBeFKjuCf5hmnAddmEBC",
  "key1": "LhybF2sJdc4noefpCuRg92Q5WgncrFjqvFLZEPTYdpGbHGUJ3ATzEczPcKdXMu5HDE2wxjynmPyrN1mEvuAZkpU",
  "key2": "5qUAwjJg9WyYyRQsxoNSHWZeD9hidwUmdf3k9ev7Tg5arsfDMtobLLtYvPHuHvHsaKVcXGaJVAi4xzHwhrWBxoCA",
  "key3": "3gsCnjPFobuDk6hGnvLrR9a4nnJ7dQCowueT7FvV2oZ3BmmxxP2aDrrNaUZduDXCHwTnQEuyCGu2Q2BJqidCv8ss",
  "key4": "9gBVicNJ7fRUhsNDM1g4r5urNGjBxztWdSooJgbvpriSJa7zUSzn7VSBF4xH9VQ4NRnzZpZATJBgzj1ZPxLK3py",
  "key5": "2TQ9WSuwmRmnjL4SFPWRFMtKnPx8odz18ibrfcdkLfVjeUVGcE4eNNNjrph5uxn2qzWYkYs6DKccJAhexdSmBPvm",
  "key6": "kZgMNvkCH8z3SrmkZ1jyZKAGz2Qk8WM2kuk5T9H56uSwCJ2BX4ymDhdZo3NvUztw6d7tQ4viULkFkQ5mh1w1Pbd",
  "key7": "2n29NKJAML2L71W2i3bZasJwXF3Tu2GHFBq6vrHG2XWtwjEyX5C3nsUJzAKKgjLoB6728YUQEyGo5pR1YZAkEWp1",
  "key8": "54BpVunztLXafce8dF7HxPbmxMQ8uvLpvGoVzj5kZzrRwXJ1rndccb8XRQ1BQETrBhwaNuE7t1o83GtX7wkyxMtk",
  "key9": "5mXxRRYCfkwkUGLpzb7tJ5PWHTqo92HNXQDrggkWWcQnhdxLxkDQ88a7zk8Ly4QLtqCfUaxHQkkQDeBqL1CHxx2D",
  "key10": "4S1ixZKsc8VUFSAEZzU9K6cz7qaxmV513buFNS2Vhgq5MZQMgLJLnjpxYYttWsrRfwHeppP3Ugk52UdErBPxJvrL",
  "key11": "2zRGdmuvqPEnwnrUCRnGmXxJCogKVDKR1WB7DEWGANVomshVfqbuLXE6ZnzLA6xfBVre4UyXRny9AehnqaUKgUu5",
  "key12": "3Er6V9kodr76PReVjxgzVxJj1QrcPYMPxrCaWT13VyMFYncLD4CUYSrxPtfiE2ikg3LSaycgQYBk4Vbs5CPARkQE",
  "key13": "5uJt9GNQVibTcyqTBon8Rx292L7RBLVFdLizAEwnZXPTXT35NZQzmmaujRk5uWHSNptD6QLSWHWgeYvhUn3Vd2w",
  "key14": "53psVvxHjgd4ikd3xEjXJxcAT1bHFqZgJ5Vqpwh6LL8zenzGmKZrK31czfQuUPMGs1pRd84WLyGYoAiNRVTcL37a",
  "key15": "3zmt8gHoY2ExF6H5bfQtJD4RaGwwvzRbFDvreVFGaFTkAZ7ibeCvhQbvvnXFxspCC5peN6n1b49pRyR8mRM8sPEQ",
  "key16": "49vTNYV3w2tbiBCcwvQ5QTXJXEGLvExirAFdsnkpUBFqri9tGtaDXpWo63nMKvm2pjwLHzDyMRihFR2TxVnsbgT4",
  "key17": "2U2QRmqNf4omEEkK8cAdeEDT2Pt34dCk2j7JQ5o5ESLu9v7bzW5juDipiySo1U2oxDGEAQgPrr54wMbJy9tURZvR",
  "key18": "2qXRGnsbtiLeCBPBrh7bmVKuE47s8arYrYMXy2RW1aMVr22TQpXQq9RYav8bFQX6XB6EezRXudyvjGGqmYKm2ndd",
  "key19": "M8EFdt7cyctaXoNA5W45i7BpXx2nLvhpXzhjC9nL9ukHZzFRNAB8W7k5JrXNRzi3We2QJhwLApDrsYriPPSHjST",
  "key20": "3d8an6uSCWzMVZCrjHRkKWmR1o8MfgDZMnrevQAFj8MaeeGy1YMw4yDqvp1ijDzUse3rrktBaESsZGy7bXwinSif",
  "key21": "MQ2LUzkzBEAF2cijfAEnJSt98fF43F3jCtMyUgvPkK9fZg2kZPVFbecjcxAPGemkNXpYSs7txniUT9ozcjYB9Vd",
  "key22": "5b7WGhc4XWScX6m9RD5jGxSjyBjktJtjY7rqzknnUQqQv51KYFfvvVeXke82Z39bb8wYVgjznen3y426TGHQ9M1G",
  "key23": "KqFz2v8n3LBCBXRt7GRQvGn1pc7s3oFAbURE2VjRpVnvKuRKSXzgJmsBg7GUx8AWrjBxZbrfVUeZxN2CpJWYj6E",
  "key24": "sUkYLEx8HGUNoysUtET2ak9qUQheJ9wM9ttr9Cur7JywvuPNx3fNajgvw7MxfwEJoQ1JK2pEbNMQbK7JfxfZvmM"
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
