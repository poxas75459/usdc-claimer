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
    "D2X6LdVWhGuyavAg9E2ynF4n3vrnwArCzZTfs3SvLrSyhx655K43Rntf3rTPVZU5oSw2Ph8MCVNL1KVj8QkPDqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPRZKMJ3xmZ7wEyQdgzncsrSfEB4HDPTf6N3ehdMZqYvg2jG37DPocFd6MsSC2pBMmH4aUS1ewFVvRcAnbChntB",
  "key1": "3TjZxhTf9YLofmNxWcQspEtb6ePoHy5pJCzNRSmjjoW1PLrYi5nsBtmn6kvCL6F211np1oo4RC4wHU84dED8DUhF",
  "key2": "4Mduksc2EEKSEsFHMJHLVu8fiGok1h55Ut7M3Vapu9kfM7Y48ZXUyfGQYtJD1UJNY55sApT2RAfUjGs3V3uJTzke",
  "key3": "2kCz4pjPSo4s76qMsvQdW6ocrNBW8XwDLXnieY7vpfTjVfRXbXhRULELX5h1Jfn6bYENG2NjpehVNigMkos7ppC5",
  "key4": "3uFfpWAje1kFvMmzZuAoUsySHqH13sh6T6hriH9M1fCD2ADRm94uJ2hJCPJ4xH6NaqJV1wzvbz8YptPiGvknMxNp",
  "key5": "2KA7QmeuRTUgU6YH1LoAsMHmTm36xZr6x2xTcqFWqaDPYdebNdCZQ2d2J8bVVV7Ry2yQ14iWNei8YsGPpnNx3Kyz",
  "key6": "43EmWfw8LBpPR3wHzxKYbVaZXeVXtcViERehVciprL4b2o8UEosNjb5xBHHafh6rXux7LBrK7TfL8dsNnBHk8T21",
  "key7": "2YaqcBsWYRdtY68HJMRMfkLG96fD59uEkLYEbMh6kLZ6jfbM3FCXM331wMMkC2DGREsjF9UvqnWd1Zn9WLufZRUf",
  "key8": "2pULYoM6E3pZ3kDtitUUt1FgDaNvZXvtUbjuF3JQ1yyTnzX8USCCHKj1FaJ5RKxvCuehZDExZwveS8oN1JxA4ewZ",
  "key9": "6Wic3wepGyUqGWJbA8CgoZAkKsGFQLcFYrmwRfZeTYCmnLVaMp92CePKAQSaYAD2znDnKAHTcSbsWG4nRC8pVP5",
  "key10": "2Vj1QcddT5jAFn5S3Bjt2ZjKnFaPG3USRwtzjg1Wu155fXc3PGdrVVpPcThXrdLTxWNHU92yjYdWdhuoEhpSZpnf",
  "key11": "ozvsfbHSPyEG5XCcMDpL7VUMrbueVCc2FqTnE69Rz3F17PiYCwHJepBEjwrjMr7yxGNFfLGqe8dUVovYzYVYGfr",
  "key12": "5k2JSaT4Sj1ZvWdDd28TtrohLLJwjE42iHwt9dfUT294YUFxVZUH1X29fwfXnWaMezNSTdBLV4Uh4pTKPwf8oAGy",
  "key13": "krHZFSSiThcVDbTY6w3iTQB4rfdTXg2vg2ypdXjd8VzoP7T3o47BtVYdTmgTinomtqr2VsJz1k1M18ywf28T63f",
  "key14": "4816NCDFrGQgLBmpWZDyb9P5aorn2pvH2eE4ie3EAKS5mn4VEoffb3pG2ssCoBtfrThTZnGZ5jJmft5MewBW2sYh",
  "key15": "3xVPpPyTYMGgdfTFGGAMXbUDXtZhaxm9TWgvSEd2d8ntktJHpMx2F5KvUXn72VWFGySHnzZKaNsnofgqJYZbVion",
  "key16": "1ivsVFUZw2dWXdm7dr2xLcXa9ANtdYvoDAq9Cfor6pTsbvG8LBiX5rSkTYLyy9QSF57LtxZLsmwzjzLXjjNsfbk",
  "key17": "5LfXhtHZnN1sH2Foigm5ZgSGoPmzsvaZqW7CnFs2C7B8wEquJYYatBDRieufHw5E345biAKpW724mnLAbf91uNQm",
  "key18": "4cYeM4zSxT7WTxE7E3cPLjDx6GHGu3JkJYGCMrt7ucc1EVktUet6kE93spSc1deabBbcyC8hESmW6AmPvECmGP7U",
  "key19": "2PpaAqkVMZkAema8NcsXC83VmxW9g6YeMoCZhA6AziFnpToHuSzopXfS1z1zgcG8LtraicxfHYnz8Z88ngwzw25S",
  "key20": "5VTiRAcTKZDUcybv2pc2YGenuxFD4mnywiftHrcxiPBZ82ca5kgtiT3fv3AfmpusjqcrhJ1R926j2hxCxKM4KrTe",
  "key21": "127bfMRVAUFFRJn2iVB3xYGDUixNJxWFArDg7mvVbov2DMxx8Qj5TBW2XNuXzUSiA36Ej7hrmUnrjEbQJfVEQS6E",
  "key22": "34PY3Aiw14X92iVQyFYbUBUcBbaQWV1g2KoKdHEfSeRcYWSfd46gU8P1KrG8oQ4mcMZGSFED9GHiSeYDGjz9Z1CA",
  "key23": "39JAEjUe9DHrcpLVcJ4wP6CNeXpfsT559TF93npw3w4xX9Eqqx19FQ4QKfnCdDmzsNFextWjhk6ixsWxakg8FNAi",
  "key24": "3duQXgTE8snpRuiYQNYBJFCGuQaijEYqD3awpJaXEPtN1MfEJ6he6nuNQkUKN594dJtU4JHtNzK3W4Z5QBDzqPhP",
  "key25": "5afx3BMABoTnCnQubKhCFXbTFvvUDMwFUFgP2Fgmedi7DnhaMKBcX3sp4xgGe9hpEVNtmdUHi4CPT5oqtsBsstvv",
  "key26": "26p6zXRAXiF5tG4kvVaPnVHDXkyyHCkB21au4gGa1dCu3XjqXDNNDac5oyvNuKuRj19YaH5vBcJa5Joq8bjj293s",
  "key27": "2dTshHnmDeupL3CukKdvrWC8beYoWZB3FzfC2nXWnrTeEdxH8XYofr6WKqxtXD2FauTHLVCeMn4mhJ4oKpQrxvGx",
  "key28": "dktfQh6RkJjTK563iMgtGgYNjBPzKufzLLDBCYpvJ3JfGP9wHjXUN3Z4NKoDvEPz6wzpHQiLmeYV2rDcg3jroeL",
  "key29": "4M269SecGhC7vZNDxoDvTfXKcNqWJGVzBthDx4ZjJjWZfcoX12wjFRx45q7TyFFfKdcWK7Tk3zYBbBZQzbWgCSWU"
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
