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
    "5thj7MriqWDqfgzVmfTZbhZHM14FVJn3dw9t1LTzVhnvKuZSDTJBGEDVCkZ1ECu897H1USYEFqGjLKv1bvmQUUCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxNAdH2yWXsDFC9fXE6eDqJYTUQinHEC9Gpo3QZv77DPtA2LiA4FbCnrFq8cn4fAaG7SNM8nwebo7KANyZTxXyE",
  "key1": "8bQKu7cfEn1NNvjyX6Rz5hoTsNuM57bdQY3PSBUR5Kq8pvurPaDTLNHmeKfL1tk6aLjZkAnoP2gm3RdkXnvLbJN",
  "key2": "5SMVW2kKBvBwKvR9CtpRFKc5EvGgYCkrtmmqQhwhgk7d5jcRVPcTEHh4SLG7UPp673YS9zVDdL4ueXcxipRazfb1",
  "key3": "3HtCqMiHpDFz1kohKqYbFGqZsC5tCg3vJXwLmEkzJmShiXNfcxGvvGsy7rbwhVtM7psdFitLrfQReQQB5n5hLxzH",
  "key4": "3GNRAGrpuovNiYJLt7WLnSLjFsx1qz1ww17fs8CV4UK3yrsbbFfVVQc43waimCiptgL8ihUyNmwM9pP3Xr6QCGB5",
  "key5": "55aY22pcNvfA5Mtjz76QR7YNShYC48fMxCEKS1NzgbTB4BggFRM4Y3suT5ujVXQxp79tJYvk9Zhn2G859zVzsZGt",
  "key6": "372YM99R3GUx85dfUnZQoBUqgmuSiv1yCZ7Wn1GivCQ21fkdHp5ziiMmLPZP64yZ83AqxTucEXnhDpCzgAzBGCyd",
  "key7": "25JqPrLfMuGArtEpRRi3e1NaMvMLC2RBzE9pvmr1msetntGQgTvrtKZQkE1BSp6uwVi9vrmr2Gj5mfSQYiqS7v5V",
  "key8": "4AQFKSkaHBL5poC7WZLQ3XGaHjDjwD3xa1mV63Tn6aUA3wB1yzP2rTYQFAfV7D3oJFutnQW9tFSvwrnWWxipSkgC",
  "key9": "CgimkBkLqpqYVbuMX9s56E5Y7UQ3bjrzDu8xmXBvjgTnGYyuN3EeVhfGXYwncweEqUts2AKrfyQ1FFa9ftdjewE",
  "key10": "4A582AfMVKjtxgcT247hmK136AF6DxHuYsoY7ALUYJfwgNybU4bXg1q9hhEHeHsCRhTWAALTuAb9PS9gVfes2urj",
  "key11": "4wCXefgwoRd8LexsaWtY1m38NF1amN17ynW4XmbgDLfNgzViB91hzQcjsbXqMTFRzuia3VhHYpeSiYfBqbEzBFGb",
  "key12": "4Gpvj5zzbBLazCZ3DkTyQHSan1HAwPSNWFXU85ShLzcLCqUmfYLCRzxTpcBvMtRmDrfm9xATxyYVVq6hnT3oNoXB",
  "key13": "3JEAWXEMukwy8jobsHrnxweSdNcW3pSYcmSGbwCaE2CEo4rK8H8ReF1XEQ3NtrvuQhXjP8PqQDS8B3shimsRKGwy",
  "key14": "2tJ4NDk4hxfVgCJwRaLoVebVc1B39JZhr9KDXcAcs9yo9QRoe7BnnP1WpPaSWhrELuGWFX2CNZA6ncyHQbRFVY4m",
  "key15": "4H3tDFXZPNf6AXCDqiei65YCXhMe4JCnucRUTHwAnfQvtZ8eFdtejiKyUAAB7kF45ZxRDp8gMtEYgqviCRF7V73M",
  "key16": "49htRHH8X43j7eahvk1vMW4H2dbnJ2U6c9QZjS6UWLr9fd8pCwZLH2Ff6mqbjrrQLNKZLxtrthNhjKBb8isiMVLu",
  "key17": "nvt7EdBdQJLDvty2GccbCh9wrHq5L7J8yWEke36aY2FER28XcZS2U6Bwtg57j1k6jnBErYKq6jgJtxisQrzj2w2",
  "key18": "5o4bJPyaG2HQxzHxroZiBVm8YvHCtBVqJdv6R3d1HjVM9u8tC61WVmZpVEBPRwFuNtPaJL2gD6iY7kab9E5q2Ucx",
  "key19": "41ebKuURwTDdSRbWFjCVKxpVfW6XH4VRzR4wcR7Wz1cu8qAFvrrTw7zXUQBPfJV5FoSCRKD4P3RBSXn1b9ZeM7q",
  "key20": "2rMukkkUhpUJuFrncfcWTj17mA6yQeynHzR9mqX1mLApcbrHx1S3bZzZLGaBBauvJ6rcF7TcRBfcynihE9wHuxZL",
  "key21": "fD8jDgNDv34UAcTUdhw2jjU2vHFxgCqtmY3AMkJrbZPgfRoANT1uNZvJ3T9uULLye8YpA6xoakjSxGk7GQtp6CS",
  "key22": "2r15Ggo2juNvnWeBCpSBJoDYVLTvTTxaFhg9xiwxkXm7MK9qLH85UWDS1A5JVmoB579wfQupwSEZtH71xHGsj7t2",
  "key23": "3aCdU9v2w2DyLXkAfj26jtdW9ytz9GHZMj4y6u9nfWUMzA4uX9DbMuArF6Hhv6vijhmPMM7HbBSHcuuBtCqFZ3K2",
  "key24": "4JjFGxUrnS1Fn7wgD8poN7sJcaWwtxdiL4Ee23iuggfg3ooW19684wcT9z7R4NmUsLua9zjcTWuF74zgLqxdm4uz",
  "key25": "VToskQju723uLJZpU43HCwZBtGY3trba5tR4T7i8AF5Y7MAdETT78Q5zKoQD8ovgawhW6j1RSqr5iwU6ztADyAA"
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
