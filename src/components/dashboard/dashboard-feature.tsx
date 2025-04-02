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
    "4CdVjCTtCNLNamrzMk3Q49DJSRd2dx93g2A7hG1DgVJ6xf7tyTdTD6iGfBeTbmENck1BhxZ8Gv9ZVYQyB1FrzmWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMgwzP7MiWiNpEjjxLbf2yngSxZV9zKYSzSk2w9m51hD8qgF7cmytj1QKPWUfrpjC8CSjjQgqP4nvwNn1rt5Qhm",
  "key1": "5iBGJp4Si4bzne6KcFZd1ZXmbFWR6TyXu7iMNEcZyT9YLKBhPp6o9YcsG3Fr427KmuA2e6PwBxK8KWzaSqxGv5Ts",
  "key2": "5hcTVTA8Gzn6cPS8qhxtwkX8o5T9wDj4ZFpTh829R1fuM1hiZWHvDTac3b8zrdror14XHz2R5fJxT3b643X9oFFN",
  "key3": "3Kj3wkvyfCtHPxsRNaSnhNErgaE2KwNa21se3MSdqU1bpNeipyeVdGoa94Q16x99cEGE8XueiKZDj6vNtEgPpzkd",
  "key4": "4WKqmmKTW2mML1zyfTPK14ermEXQf9ZDL42wc1r6F8C8oBjvjckzq8GzdoLFihaDLb7iFiptWzcU2AFv9Mg3R7R3",
  "key5": "53CdBzkzekS4FD6ZakVFp9f9fWJwWaUcfobzEbx6EBLztssMLDfhob5GvPuhWWqm5XZzHmgoNTHYBRgH6CDadpfC",
  "key6": "5WKUyRkReQPvEHdpzbFcvpJqY7kjc2kxoTEwt9toYCn8mHxfQGsfJ9bGEhRsmNrW7DTXBqcenRAGt9b5NfREfTme",
  "key7": "ZGRcAK53feW5JMAeFdkHcBCzXWxdiYaF3keNEvC9iJwjmoFuyJrDsNXtKk1JYkagAkYB9j6mwUZYwrMbiR3ET47",
  "key8": "465cxeyoUGKoD6FH9JZpKkwfxijXhKtTJbEVXP6moLDjym2w84PLyaCjqSptmgcPsXqf56VPpdZkdJYsTMrCqHZk",
  "key9": "5rf1qYLWqvCjhFMarDK2oFiH2JmxrwJtxCBsmm71JZ6ECgph7y521Ta6x5L5HYHMotWdq822uXeWqXjv5tSFsFby",
  "key10": "48pXj5J5SxRfPQWQuEjJaKjaKYsySgwScX14ycB6fm2tQjs7GpUZeKJEFTQbSbaTnA2XgqaGHDpDX4ccaHQxdnSh",
  "key11": "3knf4sk5UjpdrAWesGBwZeMg9mAcbAqWYKcXzYevRVzFxyrLuFAqmKucHxWzUbe2yzpKJG51aKub1bcmUiFTT9iS",
  "key12": "3B6zD2Zggv2TBRT79WKUr8UeexZNEgiyrCZxjfrd5EPwgkEFMVNQ2rQcw1sF6wCYpiT5kLacfNod8JtPBPLYNdzM",
  "key13": "2Pnjms5c9r24C3TPJtYWGzhUbQ7buM817cCuZMggafxSfzTx2nBG3M9TUFkDidTGH272xaDPYcMA3S2rGn2C8Tbh",
  "key14": "27Zyu8zJe5zg1oXoMgzh8NPQc8NMURsAxgwsu8Vzcj1S8owH72L9yUuJ41jwSmuS9VvN8QM4TyimSjyA8fBJAtxr",
  "key15": "3LrJdWd9zYSZoF2CDYkGTon7EPjAR2ZGN1C183AmpoC3f9G9ncghVW9LibV85EEv7GtnJYvGHZzQMm2KJRE3QqJ",
  "key16": "2c1gNGVGtCNDfKFeS63yTYwFXJMSu47Pqwh2MD4C1wt3YwxKY2ARGh7PyUfimv7FP4pgaN2nmoKysSAeEgH4fk79",
  "key17": "4pZGkEWDXK71KXYz5tKDQTcLb1hDyWpcHEoUayAhXWDWs1XtwCB6iu7FWsbeNF9JGkvUmoHXtS5gSb3BXinWyXXr",
  "key18": "2oLDLdmVfiuiVRBzxq85U5WarnspZTtzLkYM42j7Kshosqsy2Qrrcm9h5ydgJpa3LHYLv7Ub9xx2Mfp3jp3dPhFg",
  "key19": "nkMe8CwrikZhocpbyFtsBoV2G4zNt7rikbc7YoMTXNBL6xYs9jgLuBcBkTxoYtoQjroioDU9x6LKNgMGQhpoEXd",
  "key20": "TKGV9FpjiVs1PfjM81Vapi7kJqK6QqthxgjDwmd5Ride8EEEJRVP6F6S1txaMqVMhnS9i21LucFE4zkf1Xrxrtm",
  "key21": "63t2RRRxr1v1PYQpmfa1oWTMyyg7y96xtYAwDqxxDb3EnCW6Tw8GX5RDCCiKnhZ6DUavUGpuXHdKcDxerbStCND2",
  "key22": "3qDH6bJhKyECN85viHqooEjqDdkytR6ScM6ig2xJZ8UTTpt62ypjdkDnSHCJF1WpGS9413uif6EG1GeEkhKMdeNL",
  "key23": "5p6rSoXZBeWpSVyk3nTzhsSeWRDKwTiBeWDif8WBKyaE3NSKxrggAvuSLc1UB8WAYdSp7iV3VYfB4LnhgczXCoQA",
  "key24": "5BaEyGzn8AjTbNC7vrKDoKu4Gf6VP9StSx43M89yotrXpWtm4q7bS3rAgfdbNNxj3VNrKbMpwgEPo73RhVLfmobX",
  "key25": "4cSXAtPy4GG1k3Q7bf8je3eZfMrCBeYgVQajsztuDvGtLbkoCDARdZJ8vPx7qfYGutMo5Bebic2wRNCgVDvoRco1",
  "key26": "L1AJAYH7Nm2a4KMXakfdLn3WS6mrGE6fmbXcmZmocQCE6DGhsmA3p852Wx2ZNw1GMP8RSRdrFKbghYkBmxDRZmp",
  "key27": "aMMfVVVuYXJ5Nu8HreJz4NnEPAEaGtgu76URLh6xreC6UtMLKNrmURo4UEKZ1tbbfLDyEAv1iEjgFMfTz91GRWH",
  "key28": "5GypcSusdjavX8utRuYWGNv7ks9YjPAikAWkm6F5GFckKejLT3KAVftbmErAHkWuu4sQrvdSXn54j6mq3xY1DLT7",
  "key29": "4uCp8U56gFFaRSauiugqv2str9cyN2Ubwvnpi9qwyn69Cay8DiFEsoRTx6q2Zw8RqkzurgT4FuwTfQ1Zz6i7bZZs"
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
