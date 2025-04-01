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
    "2YrZ2Ryu6T52uGFPuToTkDT92tEpAmvaTEhqgXNpraEQSSdkEiutXX3mLky8y4tNv6qj9XJc6JziiQ14WHQVxuVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsniYw32TqZh6i2xnLMpwXYXQKRt9gZDDNicbWRUCwbRoAxauwgKz6dtqRruXXUtFCfW6iZp8qMK8YXX53W8kNs",
  "key1": "uR6HkDW1xNbSRvBWFKBof4w4QEJsaqHoBLn8JQRMARiwd8fN1Q6y8KKDvDrSzhp1V8ofpSrPR8kMMPLQkiTmoaE",
  "key2": "Hss44F9Mu5xZM4zmyfh4CqeJUBS47ma1ZF7b3tJzzf2KUc6sRsraZzUJh75AqCzB6pjEUzHoDmzDbY4EZVLfAFv",
  "key3": "mofyb6gh9rCpRg1GkGZFpfAa1xQCjHAknMAnsn6RfY5oYf2NGs5evWXaE7qc7mYM6Ly3Bjqk96dZwEtQjz1SgfN",
  "key4": "2sDhk21KMJZLiuKKtukgWD7pSvae5VSZnun6Rtu5oWaVTmHiWhUSciWGYda6H4nCTibJbaPjMSg2oAuPV751utRo",
  "key5": "6qopGtBSGFij9Nc6jyVBXrZtLGsj6FFPAgsE7fvBLHZvVMC6hZgS6V8BUTfG8wREgdf5JjUgctSHDZy6oq43AvS",
  "key6": "3ov2Akn55nzKhcaf8kP8pJKBgbV55HoM8WTHNrX3a7qL1Cy9g2VFPf7PaqZmk71Z5A1LZhfvqZWWDEMXcuGW3MDX",
  "key7": "14Nrks6cQYYdyRzpaSs2jZGryRhjy3MZe1PJwwbT3WQtau9bJFhe78QrTkKFnZzTt1dXqC17myVY4gUS9G9EFJ7",
  "key8": "26NuYZ7Gx4Y9zc4QZTUr9HgRHe2grS2CehePGbQ6YNCPYcMvq883b4fUSASFJXKVQj2zj42Cipvex4TCz9d3yaaR",
  "key9": "xyPhyfnUNKA2dRbBU1Y2JPjX857uSvK2Yr51RwEPdcacEGx8TYr7Mz4SqABgmXCWBEsZW3VQNyCkdjAtVXa9EsP",
  "key10": "5mdBGQH5VZb7yuEo4ZdCWr2miYNUxkWuRvGJgdLSSe4oQf3tPXLAWLb9QeGoNQVDbHbDMiyaesoDwhdUGVnLP81V",
  "key11": "5Hn5vE93zUwNj76QgCpj4yttLmbv9gGE4pHkaub6UPx9BWD6tTZ33C8gnjwJSLRttBo8uRyuwpwN7ojHUW7TQNDs",
  "key12": "2xps413uUX1DqDAV7w93LTv58ekpmggKe3GeewHoGuZ33jJTMEZ3h5T1C9EqiwrBAz1HMnDTJAj64TgR1GS5fwmm",
  "key13": "5kcekvKCpUUdhxthM5rzVyFqNQ47BhE46KU8Y9aeYuR7GU4b5kwwDaqTKm1c8i7ZagHfve5KPCwD3YzMjSGToiyZ",
  "key14": "5UdHnfADRjnkeF7qkDTAVeZZAhNsc8XUT14wiYFWfCgpk2b49gGvE8wGrbYEzfDUciXx7ib8p6mKxsiNxHvQ3xHP",
  "key15": "5jjzDjFzUNx2ptKttUqFYJJx3TmeUx1h1BD6AXyfdGcQbPwFgaWSzJgh7MYrbcnCDVdaF531dDEGnAE4K7yv1hka",
  "key16": "5X2LN1Gzp4SJGyy14F5TyeqBuKjSaL38mKfX38DNAmETp8dSLDFwj2qQ1qLHFnVTTYKrAvjwYVJJWLzD2ZA9vtuc",
  "key17": "5RqpKYvtW8mh5vbH12jnrJtpkceKuNJ5kdj3NUDYPYHA8GidyuHTd2pGGz3ZtaJ8cUkg5bwMJpP5bb6PRozBRH76",
  "key18": "4aTRWbdLBAUjrhxQGPbVdCrbrYvRBLQhVhg3pkutRKkgsTLeQgNKRwkCvHtLFvGdMpRBYnLmy1QTA671rp9u47Ae",
  "key19": "2tum2VpoBRe4ezdHJ3xTLDTte6F7TZaG9WGk3cJcbCfyLVrHeucdjdpD6zib5UwBSrQEWktf3e2wVPhzLGhkHy1Z",
  "key20": "29B3obH9UqMMjFcCJZACC8r9MpeRqvQPW9s3QUQp519e8wZVvtsJPTWNYscxQyjhBb3ZVpS633PD4qwg8NYvuSXq",
  "key21": "4JNJWGPWXKZagoFcezAoPCYumZzyWDZC8ZdD2c1kNxYLW3YrNHsSunA76osWCkYEMkiyZ3rSmx75pEvQLLh1pFEo",
  "key22": "3Tm7bVDcvGNJaHcRWKhSPcyMfNkVUTqhnSRh7XnC23VKSaP3x3WG8FdcsZqNykaeAEKkoD2A7zmY4ksCouozvEhy",
  "key23": "2FAc6MrZyJE4Yb5okQ3pYvmceh3LnTvtWntdcZXQWnDjCX5PDwYuwLbD9Q8KSDs8yJmtiS4gnVKFspiv7Pncakj",
  "key24": "iFohka2D31QUE31ehD7WmxXrv7VABaccpZDjdm3T93MKHdfAxXap9wJadnTsVp6C96MHnftufayP4jZ4VTpA7sX",
  "key25": "PGGM5evDAigCuK4RNyxtiLnSMJko1KZXsDpEmu8WwTuctX3xudUVJv2gjAfLkXhHVNsVMYTvqqzuSPYYtX83r4w",
  "key26": "3DXjqTCN6GUsNSoF6goxyaCgDm6EuHs27zP5QG3D6s9gKpbrpY2ELdcXH1hgCf8vYddcDNQK3wdjhG85z27BLBEM",
  "key27": "dcXgfFkYcdYzrRxkjjm3DWuN7441Syzv6d9YkbmMfKctnTKNEu3q3CqYrnzz4XGtVi2jywiaScymkdaVnPKUv1p"
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
