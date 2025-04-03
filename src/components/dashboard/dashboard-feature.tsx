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
    "5fGugevQeZxH6LsMmti1dbakoR6ZyFd5c8TQA5nStHVkzKLcDxUyojFuEziwSw9vQEktmVA9A7aaRuDqLWqUZ3rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n7PGiwaswfCKH52L6iaPkYG3L481n6raemEVhmTvwThPR3nYgPPF1pFnZUwU6uDMUUWKzE3FMKcpXP5RYVgsVPP",
  "key1": "7kF82ixCooWDKWx6f7gZNtKcAbtkeCtCcCBqG4zcm7Bakg1ws2kMQnjyom1DH17FQaxwLxGgvz7NXevV9KmoRvE",
  "key2": "5hP7Fv3ocXGNCEun6xsf2K6GPYcwvBszxpTt2qr9xedxDVSRLJSLbP5n646L8npkidG9FKauJfN11M9jdPncczSZ",
  "key3": "PVMMzaB41B6LRUBhVbfgWcV2YBuNNLtCa8PsUkFYvmQkrrevjfhdngLf4SXXbFJFmmpFFodV568SpJUGbVxf6KY",
  "key4": "Kqea45WXKu6rDsqsP1ocYzgLgMro5JW5jSKFDkVJFcjShLVr9b7npQKv5d4iXbt2wRFQPxeDAdDBua2vNLRwJ7F",
  "key5": "2UWcitVdcExyeKDpdvhH9XRhMs45z2SAhRR3GfXuoTNJzhWRyCLQkdCG9SwMJWvMZi3HdEUEqo5TZrdmxnhrrVXV",
  "key6": "54j8Fmfaot1ED4RfZAScxvbP66YvuY4GtfdGKm4tjw8Dx6FUQyfbU8szHPvy2VxnuMH4xy8rzzS1DQBRfcXoaC9i",
  "key7": "mYAGjKuenosvir1U6Sr9gugCRXiucQ3Ya1MzAVmPnuQvaFCY5bTF8eK93n6zg6MEVtyg65t21s64EN8LtTNwUbC",
  "key8": "5NaBgkHdoq19KxvoQE4yPj8hhA7ovMMheY1bE46ekuaAbvwtdkPfZUP7WUgPrYac2g4QCMSiYbtDZyu2aoCWuu71",
  "key9": "5c8vqcwsENS8EiWRbCooCm9KiyB1cBAFVwDQUKZnWQCNZk9ekpsJdgF8iU5orxwpDrzL1rAdYSYHAwyD1y8KT6Um",
  "key10": "5f52QeMwyRjY7UzVSeVSDi5A2cWeysBSeh2G7hCcURB5e9Jo9cfVAZnUC59xmYE3kvJf9RHrW14gJKiqS9fpLX7f",
  "key11": "2f1qhBWzWaddY1y7EdxEDmvbCYFxqTMhanUQ3DFiEjYREkGjFfYXrDVtU9HtwKLp4yKCR1BFPFfapJWaQbXNaNRW",
  "key12": "5Lz56oF2zigWrphVjtL1As8EKiVvTxJxARMjrtDMNA4cn1KwiYLMhu2gSyNK96Rjst8rou7sC6RBytC9m7aS7e45",
  "key13": "59apFC3TMELjv6Smiuqb3pqzM4qaq2ZnVUe4aZEMJDAbjpvtGGUiF6gEtx8SoxVo7QPRAqCjApDGdejzZNFyD4HR",
  "key14": "2RDjeiMiAFwjNhTvj9kSk261LPCUWZhDJJBFtu32g9kkTRUmuukvtCvZoRz4MnnRhUNd37Rrqkq383s25QjUJXZ6",
  "key15": "45gzaLpDXecfMGhgdkEhuCRo2WhXUJTrPwSkqnWX1GF35u6KUSPGq7LLhhusAnrexhbrt3T4L6Nb8EwLnPZGWYu2",
  "key16": "2rVahpjxo8fKi3Xe5ws6iMH2FsZMEZ4HtpGKp6mcirBmM6gSS9yJz1VeD5aw2u2sqCzX2FAg2SZqPVkEgFLNY8Ay",
  "key17": "22quaNTS2pdPMaQzVxZY6UdszwAQ87xoH1a945qFsfVCUsQETqSWWFLd13KbmzYtQ3Ci3H6vppDYLvQVUc48HGgz",
  "key18": "62278uGBjKtBjAcfj8SapLon8ae2un9TCfyHa3TUGocAFwfZuEdQws9XNQXuYcAEfTsjv6U4mcvYaAEqD1MR8K4",
  "key19": "xpwTiCTyNcSpe1siExZgpnW1HjEFPu4JovNvE8GWpKppMG3xokSDCeQFnaK3XRE9maof9RzHT7Bxyzi858Kekvx",
  "key20": "3HccJsn3SHp6nv8f274WqtZte5JHwa2iVhdZMZqNR1BryxLEQM9UfhEYPGJ55UCjuBFaTB3cnSZysKZRdYEccMJE",
  "key21": "A4QhJ9XmFTjgZf6StC12xLGvTpZoXABH6To6pqvCtsRJJZT7sP4D1m3q8Q7RdPPepprp7QcryjYoFcQXFsqSejY",
  "key22": "2ciZFBWhJvP3gq5TBbB9UMmSdapfHZUesmm6pK2rjdniFBD5f9NfChAS4k6bTgQ6Kvq5NkqZJZjo7c5H3uEbqjw8",
  "key23": "3HVPFmwi8Wo5ud9Zujm6Kjh78RL9ytTMYTC9ycbJRZkFgEP3zbnMyxc1wwERYFY7jBvhnhh2qTnup6sYC7UPFi5Y",
  "key24": "49icn1hBZ8eYhgnGXkiq7D6oGWymd7Xvt4VWSt9CjjzDGsbjWb9oRGss7Pzubrm2qCm9miN9KryCXcFid3yuSrx8",
  "key25": "4d7WqW2eFDRxX2c6H1btUgG4uHfQMo6w7FLXmQuC5eYhNwhZ4hDQgUnQe8QhtgEKs78R534sE6TqGXggE2npTi7F",
  "key26": "3KtktAzV8xkdkEPqtBVUqEz4nQNRE59cCdsXGzpwH2y74DFn8gmwU3eZcuebU6isQLMfadRDpBYMS9KFF9roXS9Z",
  "key27": "1pR8xDTNG4XXnZ9FfECXmbGoWDjC5f6uDWBmMTfgFUnR6qvpvBa75Kq7KtJFT2efNXeM4uNAuw9bABAAKBjDdFU",
  "key28": "2K4DWtGznAGyEWFxpA2rMfCuXjRH22vhQgUSD3a6UiRs98a9yvpbfFT5AHRdD2wQDHRUHxoFU3bZcDyDMLctVoiL",
  "key29": "2dKqraN29TfghSXcXeMicQ9uLdSkoaMjayttxwaRETYZ4Pybv6vRmQjcTqRnr6nzNuq3eBaU7a1EbaKTo5aMZe6u",
  "key30": "2s2LmSfxEENiAb26qnz8vD7rN8oWaQefFKz5PDd1VJa31WZ7MfZDbdJmisFpGHtuHoR5YzkptcUV79wZ9TZ3QMVv",
  "key31": "5j6RedG8C9NTUvtMcX5gMoKJG658W9Cch7u3JostnZoe11hGbuPUz6ZuEvsTWxTiVXCzS6shNyaxdv3mWGbiTwkX",
  "key32": "5KfxQ3eDNKCBBRDVZSH9jsbENrma4E3Ak2C48RWMEqsoZBkdsg6KmiqsbgTtrredngcoNjSRQj66bErk9gGwV1us",
  "key33": "2eo7iwPS3zA5RbXMWcmQpdjW2zHtgYYvDPM7539aM3S6jhsAa9uGq6zGp4iFRPdjxs74f25hbnMLFRvN7YuHASeW",
  "key34": "4gSgfTsZrYhuNQM88NKN6nC9JPAgbKr3oVgiRySUz84nQCdoDJSiMu5gRaGgEnnxGWHFJSxodCkuAMqgK52yg2x1",
  "key35": "VjAdQMZNHSoXV2hQodxT8dhWxdSMFPLwtSxq6zpKBX5WVxsXyu7EQuU4VLwyqLDdgidDW9mVdJye43Sjto1UdQR"
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
