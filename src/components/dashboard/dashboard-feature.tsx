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
    "336rpiet7EpcpKfEM5ikKi2AMzJNeNTfzpyjF8c8gWrnKbt1nthozkTxs2pAxdQDZi78eEuCPG98A2khP7DPCkdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZHZ3CBnKPnjWXuQsU27ezuUgD2eaidwJHojqJcmzv8byEJhdaU3oaiC6i8QHvNLMgQqUMa5ZKG866TUtft9B5g",
  "key1": "QLsu8Pk4zpThTH1QrWbY7HuKvw5vkUE15SGX3SeTiTmp4CYJW3JboCmNkMRiokoRMDPE1FEGEGowBXkQXdBCyY1",
  "key2": "4Dui4E2SgevzrufE4BHkQGNAzBcSkd3r7znoynErF94cNy9msjgZtw5EL4tkYZuhWmsYLaUKbXXAhYssbn7JDJtN",
  "key3": "2XWSvpaMUF3cbTBSmqJYQXDuByqjU2WPowboWhqDQAzg94WKS9ZZpukVbJv5qWCMFUdC3EaVBsHSHaXwfCjNvpn2",
  "key4": "5eb6prAp79pugFtnwEPka56UbSvLp5gzdkPc1KepfNM1vaeS82EshTHFxNLhRJ2Bo8WgwaH7pNtEbuCFcJqawrkd",
  "key5": "3VqRwq6FKYi1aMHwSavZxHDGR5m8YV4MW3MDY3FBNpfwZAVayhoFpu4k5mu7bvjWqL37FsUUnUeu2vhsgeu3Tq8f",
  "key6": "2QgEvFGGaUFZfcrHFuUtEpoor8MvoCvStcJQb8dos3LbQfHuFJHfWB554yUxr7fAXYQhvhCzqShH2iJoPSB7CvjE",
  "key7": "3qR1rxVNiseKs11WF2rsLS1rN57jyhHDwDXgvgoqEt5CopHtRStS4LbHkhkU5zAZH2tXthR2JuRdqfCKZze6op7",
  "key8": "5F5ud5A6Afg4LiWQVuGX133CHj88AaKdn3XiTBmN8Jb32AifCaTf3Pyhwz6AoXvvgta2RuFhW3mL2PmZsNtC9UjD",
  "key9": "3nT2MgHo2b8HDd2o2ou2xTeRkuUxhJkEWo1Zff4aSxuWds5a9FwkZeJJpssC7McgxWtfjRJ3dhaQvo1PBCLczArc",
  "key10": "4UqQvppSbC99psAmZq15UHfAHrfUEPwdSJayg87RtkVymuVNqzjPbP8yVjxGQyXBQEqTjCRNEPhhmcY28d7YfWf1",
  "key11": "HF7mAjHdEwL9dj66MXUMdVBTsCStwaPVvq9CYnn9PSPG4RK8Th7a4psP6iZZ6CQ18FCb3gNjQYZ289M49mWgzTM",
  "key12": "5uWFfUMk9NKE44yusmRvUtBwr62wLo3yu8VepUFRPHQStmQTtwNUeoUPxreoBxoFScmvcpATR47aJvQPLRpSe5N8",
  "key13": "2m6eeebWxt6dgLJb5ts6mFo99sdNdnsecnbHhb6TzpM9Sv4XUEFpsxeqxgkaaRPhU6jXe4vrAPJtQdTCgW9zYvji",
  "key14": "2ErGp9J655y6BZnMqDwzosCSqoezyTjXodPrLeanCXgfEbCdZ7gTt493Lt5oZkAQe5Jmzh3TumvsrP6K8P65iTa6",
  "key15": "SNHfkE6bVNy6uBKNBYbuU8QEBMEjDKN7qV64wZ7rrxAFM4yhu2QhxnC1yxLdKgd51p7QRkkgKmjUzexGc3BK1Dw",
  "key16": "4Ray4p8D38VJHfzFCEuwVtBHA9cHySEXvhmhGvkHJsA43mnmqD8KG4MrYnC5YFL7MNftkVMTcDdLC4j8SQN7LTyi",
  "key17": "3R9jvsB745aZ6BttZXqmpnSLoacxRv8MmUCpDfTsC2hWFFPxbKzn3qPQyMZK1CSRbK4SSEBgZT3Leh7xra3izUY2",
  "key18": "4LNe9AFiNhMEbPfSe4YX2VBc85GTu87Egg85xadsPpfFrrXbhXUTGmFsNBpT3scSEHQx74oCERRZPKGgRXMQSok6",
  "key19": "26SEybPYsmBVddrb6pZuHEsJLo1iSrrM4xmFTro6VZLgDaWdjRsA1QKLeM8RUzZXU6kPWtc7X1SDkxXmu24cBDNh",
  "key20": "3oUueyxmXr1kr21DkMaBXFascoE9kVRnWobJVptkTcSz2FMUz7hF33qzxHxaZHYy6ErFnFUuk1hZnoTNoCDNFZNx",
  "key21": "2CUQ9qzsQyh5huA8XXgEsxgxq2wtkso7B485dh3S5aBjsZskZeCF4joTjpGkiAkDw68KVPwpCrh1av7UCNsa4anS",
  "key22": "4xHEC3r76LVqGMnQSuhSpDbCfw5HL6hy95UAbeU52KMkBpERrUXojHdZYpfEh1zJbqD7yZtTiVcLH1AbCdWTPucS",
  "key23": "4fRZh8QhjYjpwnVoCtGvBEbhjRqwDBe22ypZ7gJa2zxJ4YMWqvM4rfXRfWvt8HehphxLJrcLoqaESd9GRBEmvsWV",
  "key24": "NsdtpqokD1STpWEiJqZchNc1epuyEvu9SoPUFtWnDtp4cS1RPgppvxGX6Sew4pnphjyoUBw3YASnphKpr7zHKdY"
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
