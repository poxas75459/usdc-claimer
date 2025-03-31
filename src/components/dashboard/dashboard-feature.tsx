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
    "ZURnSf2puEGeXXuaQNeuZVM9PKz7LG6pc7aZ5HTwBeHjP31N1SQTQjTgUMdqtvka4DBJJiw4Gdkkmm4szTDwH56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9UC1WT2UHQomvFeawgCyvR55UB7xvewo82BJXwprbRffcBygTjDpecDu6W6xJsnLLxM3A24Ro83jrn6d7TL9H8",
  "key1": "2CD7t7dTB6thNUqmiXn5kKJSXdih8ZFhJyHva3kG2qvPpGDnAAoRzWiLdvCBWDdtJxK16cF9EArS9BUQehmFz3Lf",
  "key2": "3xUTKJTMHoBoFreUjQnGmswzzKCJTQw4LF3ruAmnd3QYzW2QVe4XHnjLd4WHFUfgXNq25gGUU1bT3seLFBDdY63M",
  "key3": "b39gwGUCFHzfonCkPfB3zA6WMm5xTye4gDvwSBuCbjNcP5rSszG48ZDg4YNsBCT1MgxEbHxjLZ4jaM3gMqR9g8u",
  "key4": "5ahyeY9mVhqaLTXnso3U8NUMQzDJ2wYEbTbBuPKULfWiix4dAUEadremvA3CWsnGqzYM7RKKfZD3fcYakVeDdGB1",
  "key5": "4nbcLy4xSaBaNrumAMuyChxdnUdgjH9TVB5fr8MMPt6V73fUaWaqtTUggaXhxcVm74zELWpnrpvFHNGznoBJqjrx",
  "key6": "3bVRBVJstujHVrX1eM83yVUCbMtMaFvffUnk2eZXrqPQ4N7tqk1dbp7jMwHxDP8iiLSWshcx7haZmEKECs8xsMw8",
  "key7": "2uHVYw7WYDNR24oQ14vu53v4kUFy4Tep1aSDkQY2VS3j2HFgcy67BRgSmXqVjj3pY3uRg8LGekHq4Sdoxb6Zoviv",
  "key8": "2gULDRWa7FjdQoDbPZjGSQi7GxeeewXN4EHt1apN24c32FpcqnFkUuzrBkwNFu4TBGaGXrAXSES3GptHJhy1EKyf",
  "key9": "2QGJPNuTs8uyGhywP1veWAN6x8bfvsY8QwiNAzhKufjcEBm2af6oJFRj6JSorWHD5WaJCP9VApqhuf8N2kBimtcs",
  "key10": "3rQKgCCcSFd2QPaAoFAQeM2mdEskgcuGHBLqrXL1ZpeQphnFN7ztvd8RgXcQCwbEVfTHJSwTE8aiQJgMLSZMzpU7",
  "key11": "VGwoSaPoihFHwGpyZJYp9gpm4ZnZBfjkvX7FyAseGEhDMNsMGSZyxG3DJoxbYdHv5UQBuR55z9A9aHfjqXBUub5",
  "key12": "4xvu59mgbuJecF1PkStEAye1KDsTRtrDA1bDRPc3BEyVBUVwk39g4dGFEjRYS6V2u5iuinJm1pgyizAu74yag68g",
  "key13": "2dxy2ofbzjvbNJvVdLWRPFjBiSsZYTayrZBon24tyo3LyRa8TySy1MTJqhuXqz4GGiRBNW8BUJ7o18ozZjz46Z7V",
  "key14": "4ojcqrtYtCzUnPfpFW49X1hY47ApQnhdim25ofeDgDPsPFgjRkWXn9PhkFXPVyjx5d5Kxs7LJRcubYAFwygz3qaK",
  "key15": "5oao5o9ydzpkMLD7rbd8S9p2hUVRiS3mJNgCCGAK9siogoBz4EvpehWdkaVYEKe7qwwaugNJqRTSVg11bX7HFwmf",
  "key16": "34MJFPGjLcVcmuQzVi2CoCJz1yetg94Y672fct6p6YjwHDBsP1qWaMwyqFZGG2vbZZzYfcH1sVATUZjDkubLcpuJ",
  "key17": "65cP2BPpNjNNPtw5dT4Xkqte3F9LgNn8bcM8S24jULu3kcTjQkdJxD7xmUJzqxj2wXBabEZLLVdhBawj8M5DUzcs",
  "key18": "22QerwWa8uS6QTudmbs3oaG26bNLoPgAtBfhrCZCVbM13GDjfVwS2SbbaBE89w9m7c1UvtZM9SqWeT2YJSninvWX",
  "key19": "265VRcCjFkLCB5J3z8qkAo82BrizkBX1fyeCJvVLoWVi7qMRe7L1z4XqrX9gxjBhroeGCNJRmjce27uN8Uv5VXJ2",
  "key20": "5GinxC1D8ZD6eECmnUjTXZ6NLkJvbrCY2RyEFeUXby1dMcMkhXVuCEsigw9jTmDa7L9VYrdM5baz936Hk4TFgort",
  "key21": "2pBGkER35Eys7p9y1TVcHpfH8ur31KddZLsDnd8uXHnfYhMtztgT6ge3z5aXzWs5EsFVgeX8LSADxLtXnwkQ8ors",
  "key22": "q7wYdHZ7YDpWeihRFierzAeVPwQkQRytP8GinSYSHGxvNqRCusYWdaL12mZFP7NFMqx82GV8y18EPuxaZa2WPRd",
  "key23": "2EbjkF5DtY4KaWaGWvxZ1vUrA6UbSqskN3XcqNDkRmfN4hsBeQHr5gWvTZqTh8B5rMyA5rYEpr1z32hBDYBRfbQv",
  "key24": "TXRu1v8gcWJQja7qg3GQfTG5yR6gcsyPEbNnMY3Co2jjtaKcpTceZ5cCXGDno8qDRYo4KFM8DKTqiDYCHF6Po2V",
  "key25": "5PZ3US3fp3LmMbHz7kJHjwMHycWmFkeSJNo3Ls4yJjK3RBjzGE5YjwriThQUtuwFP5QFGWpRNcAR7tSifLdzkUt9",
  "key26": "2X2EKPCmVqaLPwAnYb9HaHzbT83WfANHCbu7u1zjii3U9CtT3KaoqyMv6VDDrb9K8GnxSTXnPudaWgZZXj6wPBgF",
  "key27": "5LyXncVPSG8JG4Q799Wkp9nvharn8GEzwYYJnKtARkc9Qpa85Dd75iAKtpCvUJJ6LXUjYFgumJCkCZLy6pun8t4m",
  "key28": "7WeHY5s3mE5yKfJAZKucb5sEevEzLSHqt95HFKHvoYdyyneeEMTfcJvSDJRMZ5XbGxLewwS99uzBuAgpXnEybWG"
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
