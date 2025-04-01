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
    "2fPTxfFxkRwfBex1v8EtKfezN9bv7ACscJRqP6aWShesY4Fz7A32Z5XcvJ1SWyYcaH3aATb2H6f7FDVrED35fhZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vP1SzDQHPQ2uLo9Awn5RqbRYGBPgiiiTTdEXE83gNL95JYPygfv4PEj8hHq1SpuFKA3VrqcfwJWLRxQFnPV547G",
  "key1": "5Cn44QNXSJia6CJbdzNFWdjVtKUXhqpd9v7CHiy3DtKFjhWU2zgek6Fdy3Nwg2axXaiP1FU1Hs8EVBWTxsaWdZJC",
  "key2": "5C31TUooxpgZu5oVefptbrCDJSKpT7x7hy4UYZ8SPKanhvmtQCFPd8kTUkjBVJz8aZyLYueezjknZqCRBVeu8ESu",
  "key3": "3Pn4SatK6Bec8kLavNkPKiiZ5uzUFJJAfJnvHKabfQtnNVpU99uLs3WF2uaYKVr9hESRr6fHfmk2kHyBNBz46noK",
  "key4": "4K26XZShxvuc6rMstgHDDQSA5Pr6V9Za5xuzAFJuSUae9KoHMKwWDpEDrZMLeT9iRe9PHAc9dcHXPHXL53YLLTv2",
  "key5": "3Cd2ugx8QVYQtWfgvwfTNEBX84RK3eRnTJfXhQ9NZJkuMQQ5L3JXTiUseKkJ3Gg7Qy3zYZHhu5Jci1aeNSyup766",
  "key6": "51xENbnqnV8hGikMGUjEpYiJxBiXbh2cbyE9gbJJMVNEuK6VwSrZJsSSnjzLbSa8NkfxPGFiRVxXyFXPtZ5kvihz",
  "key7": "5hoe5PNDPycEEjeKZcyU3xRB29GN8X8U2ptu4Ja4RqyKFy83Vt5a5ZUr6zzJk2kQtzZ28epzGWG9JgWLcKREA9hn",
  "key8": "5DuM1k2bhMsEn22MrLMRivmYZfTqr4UPtEQVX3YKVQSQhfsmjQYotQd2PQcWYsi52Rgrce8EPWPxabwk5dqq2xdC",
  "key9": "3roUNvcdoEGq3Cn1RScpxzMBd8zxmkATqD2vQLD9EmogB4uJDUH2oXiDwvk3F5z5P3YGdDL5Do8h7qtemiHS8A6y",
  "key10": "3vgw1W8n4TYfe5pi9msLo5MUbu7adeZBXhmrMRnWPXjBGkNgBS6Q9AQUkBvrdtx2o6o3h8AeMGtuLQvZdNUsLiAt",
  "key11": "2kdj3zWGVJQbanNg9koxHPJCk4HRpgABTvT8Wx7fAyFgFWcBvZ2teQJMEajYbghWkTqgEnu9f1GvGZuT4MkPh6ii",
  "key12": "5zD3y9BCSDz8FyhfJJjdXvXFD3wn8WWYGQUbo6GBY1cxWTEXDaAMCrHtXBoo7mQBzQbpCqnBmigv9fRWrs7bwfza",
  "key13": "5dY5VtFQpThN78iZu6jgJoQ4HwujXPMoEeSb1NTKHBKrCt5bTcnNjrtRzm6HkD3K5jN4bMK7xKLtNV4b5X1fLxpe",
  "key14": "357Hm9sH6XLgJxpRvWNAGfeUNLW3jVGHD1kUbSa5tTU1SSF9GArQdSf4gJYfYQZuCfpzXz1EFy4ZKYT7YHVZ9SCE",
  "key15": "3AfJ3JUFALi72k1gTzCZW7eDWvLei5YAikURToRujCWGHSU7oGwtuQz7WKxuTCkCMN8j7XX2dfr58DKSkbZLnCoF",
  "key16": "5Qm2LSEd29izaxiJZ1pN3opPNVrpZGdhoDP4z6zB2K3sRPe1tykb1GDLG7hphm4uLD4qMuH6APZwUyUKLSgUoZ6k",
  "key17": "4HLNaaRaFrF7VA9ENRyuVCZBwc5ooY4oMDob68o5tCN4VdRo8iDVfwTwzVVSzgCQjYeRTMGYKMsahtkfWWb7W114",
  "key18": "4zu7ehwTaXjvZgWF3JbQ6wLbGahKHX81o2o8QRMht45HEMCrdDFoBUAG3rJqR9EZw9a8ky81Rjxc6tD6RdzLAeHq",
  "key19": "2xMnozhhXvqEJbVDa6LrSm41Xt59pT4D25VwXvJHX5aMpAEn1mYPUQJ7F7PLePFyzsxc2FCYx3ioWi1sG8iwGcx6",
  "key20": "3NyhA3mWbTKYy3whvt2VFc5JCU95D9ewpUw7qbTaVe9NDWjareG4kU1udDvxWx7ntRHgrgzC7yLSiEKLzTT5tVmX",
  "key21": "42GC9xQC2YWnK64kp2YpymmtwovHmdNSH1ppTs5hkS3pf1QJtoNnLuXyLFw9L1XK6zMdjyrqFdmvB41rLZY7XYtd",
  "key22": "2UDLSMhLHQLuVTLTjQvnavAduPjfi7cuNSUZ2ah1DrAKJJMvFuEjuBWZxBWZcFg1cc4mn4cAfKMM9vqTVACsbGQ",
  "key23": "3F6NyouT8yvkWvYqtBJyEEh22KaRYQwyaGRvKX6W3sHtmaqu1DweBuvEM6SP3uekDq67nJEMYsUv5LqoSeN6qae2",
  "key24": "zUhY5Ca7cJgWCgp4V8F4W9L7QaGCdan6PQ3dENPmSi7FwHgcj2msgc3VZxb9uC2iGVWUzq5m7ePW9iCtiFrjiDw",
  "key25": "2tU4iT3QJkCGU7SK6nzRb48K82zQ6ej34bYD51Md4CAaJviKSXrpsYWzLfTXei7ueUgHE6PQ62HJeRiwPG6tAXfN",
  "key26": "3xJvd1PPKqZ3rDzVgp9odFaYfzTeQtdiUPsK3EK3tUyppcLuUeyZhB8mahh72sp6Lkaios6kpFhPTXhgtQRDastQ",
  "key27": "63L5hUJszqNJFTD2GvunexCJYTT9iRU87xXLpYYtyUFjihUktk4pakWVEh84F75aL4hJTRa3pi2H2S8UjDPY133i",
  "key28": "3hLcBX1V3MTthcjVWZSZMuEFAXu39MgSxWathnsKJJv9jGxi2QtMY8Y7V2oaUGY5fdUz9sSo2WYiZ7y9DptQcS8Z",
  "key29": "2goaphe16r8gzXiPpKbkMRDTJLnKhph97qXfVGAc91mboDgPHJSVCiZyzGCAcMF6XxfM4eNqnEFtqJExM7g51GQy",
  "key30": "3GuY5LBqHFwEQ1tMEJugQQBsuYS6id8shEivBRbCpSWUgaxHsYdzapUEaz3QMyKmikw1nQx267Dv222n8Me4F5WR",
  "key31": "k2P3wTzjRMCHdmn6G5Ty78hzxMPaPR4a85qU8JjkVZ2tMcELXt4vHyXTf8UseMFeteAhpGLYxvpQWAVkoPS28i4",
  "key32": "61TQRqoM9RTsT8coqvsfovx9nDd8oDTDGkXku49V8x4i7LzgrUdZ4V7o6GJs73EajgdLjCRvvyNyDVh4BcTnJQ78"
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
