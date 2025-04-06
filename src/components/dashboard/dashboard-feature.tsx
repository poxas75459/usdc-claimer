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
    "3se5Fsh56BLiwvFXb1zpN1Es3tGNhWjjMxNXAi4fWLbP5ez9SdZGUbYsCxKHTJspWJ5wRkgEWW1RSjZSKUnLxanL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iD8zmZW28w1dazYJop7hvJfiZ2yLagUfnQQ7PDERWYqKyLh35hE8LVoh8E2xxKXphyeMz7YxSQu648RZerpVsfv",
  "key1": "5yR8rgUUhRAmCaxfU9vRwGeoFemvrGYMZbQBTCbLxVjMvTn5S55LcLe48vk9SCqQWYctvbNMjHoVcGiEcAuwdv38",
  "key2": "26j37STKqKAMjBbu46o4NctgKwScDdefyFNMKSBrK7sh8bS1kMk1QowVM9v4HAKfAE6tU78VdXu553XTfSMfQ2Jw",
  "key3": "p7j2uM91ZHjt1kFxTSrYPQF9it97gdGck2dGd2PhoLB1AEjTcmfFfN3EGEjbAXtkLKi7uwy3pTqxrWv4bLzCQHo",
  "key4": "3TmpDPaQ1znbgdTzLd3G26TdVKRzMV9svLTfaH9m9BHn9EcvrgNE8gifArKgAdtbv2oH9RLuDNK1BpLKssMC9tKP",
  "key5": "31cvAtqydqhjeEwKxaerij4jDnJSNNry9FqHuTzAV1Zyci7CG65SE9iUkCVS9aLYFsBq29q92GCCDtatU6Ws2ACv",
  "key6": "57fiXUaGJ7rsR8BaeJgjuSjrn8BYkmLN1EQJ5gucWwBAscAKU2qypg8hBNXXPVr9kVhrBki1cnYDpQmpey4RkPk6",
  "key7": "3Eis2kAPhnCcZ9GrcpNuweVLQT6oErHUcJwMYaTzNuk6wFaqfqDwQsVcwy3buee85rmqFkL5hKvGsWGuh2NywxYN",
  "key8": "oTdxigjQpzk4d4C2GYVMKqMkxajRga3ZVgC9p4hn3UST2p8aNVPGsc1vYwJ6DaX4HwCr9uVNZJrxwEjLET3v1Gt",
  "key9": "5LxH2WUTTFvhFXcXrGecrtNkaLsTHnjnp4UbMRdgS3z43hT5QwiAgh7mjT9DYfRKkhEmWjge8mSxC1uwWgw8mzGA",
  "key10": "4aExWPtEJgMEcx6aMSrQkt1W6L5NECNg8nUNHkis42WxizFkHxCGBssTUd4JqGntbsN33NUqGYTbaUkSUFSNFEcU",
  "key11": "3GQ9ZCViCru2dnhU51WQLeZop3Vbv88R8eCZ4rHAvQaNjszPYwkCMoBCNG3xSBnFcbtvKP8skQoCGQ8bPBDSrdPv",
  "key12": "64GxcALrtiQbSUTn2nYh7iT9jn3LA6JxvnW8YiNhKw9c7VsustRu1NhSGAdmqTvvnMYAAPzrobgnSq1tNjU2zQn4",
  "key13": "3HXc1aKzFpfa8yDFcmCDYiZU3H53mpJf3rPHJvzNp68DDEumG7CqfMQV1RgBUJWx3axUWrL1XKkf5ukL3qNackug",
  "key14": "2z4yK8LEnvzt1GM4D13tnzhyLN6kYdUhit3Fo99qaJm1gJbj6wB3YmqQBzhFiZRD3RM9Sa1mWCy9FFm6KHxePQYm",
  "key15": "DnkX8Z7wjrpzjyHoGjQY3JJ2EhGx6yrqFB4aFUQrfHxBYfLuc4w7T9ZLvCD9aXKUg6wqx83A6ey69bTNMcxpXR8",
  "key16": "66LQLWkpYeYJHMmb59WwbtxoetsqzceD7TQtTkU6sZyJnsQd1aG22mSMMTG2EvyRe4QLBi5Ehzi5qk5HKjhRw91j",
  "key17": "3VXp6EcbBykVbpi2EHF1UPrWGkDk1pTciUpNvQH6yxTvxwjmVGeMNY8kCzA9cCSXVMuCcte3vRb6XkUZQyeXPUDr",
  "key18": "cBimwpkxGFj44u76uhPVFx5hU4994QHKXNfEeo7uhdaGCMFzDACqoYioWwXXC6PiuDXao1k5bZrdbSSsaVoX7MX",
  "key19": "sSVFA4L7wdxGdnKgn18ecZQJEtqskDRLaDpbXh7pT6Byvf8LJRrXHN5pgZD5yrnEvJu11KdKuuoKkVHVUDxUPBk",
  "key20": "4XXwk7Zk6tzDnvy91fyLGivi3aH417VBdBGzB18EhfougNV443ppLKo3BzramLNw2nCmNv5ADWoH8525f7DjtuyN",
  "key21": "2f7zpJCxwX14umWkMLmYYMhaPeZsSJaETXDYpHjdmjVy4GqKk5TDC2sv3tjU8XiyGhJPb4a299DTHbZLUQWeQ4h",
  "key22": "5bV7jSrTJPo3jkuSSQFJ4ZcypRvrKnZNudxBor6sEwUPdu3s3cESCXv7AksAKeVi8QhencLvpWokaeQEQcp1yhLo",
  "key23": "385WXUeC8E7SDp4Zff2FZGGRBxFBquDFDRBwhYPuoxQH3SnCbJuBuLsn5U4ig9bujFsh2H9XYLEfJwsQWJbWmxMk",
  "key24": "3MMT6jYSdpKvyg6mh8YkU5zinimhkinhNXuSHvRpznmeNuZdArspZ9LvhDnY66PDRo4bG9sotuNPpDdzgfam25Gi",
  "key25": "2AtKVUhmnVcES58cAww4B5LW6csEQVw9YZoKvnm2ZMDjkym8PQ1VrTvnSkAfbaL7bJ8ii29LQ9kY6ykYvo9Hb3d8",
  "key26": "4EdbhhpQYQpWnqPxGtMqei2KoaKJTP8bXZTUHWJemrqesAS4vLSScVLsSTe4PoFLhAT16eXFxUGfyVXCveAeofEt",
  "key27": "4zsK9pEypvPgxLE4WNtV8xNDfgU79GpepiU7C9gPssCobDhLAEgrQoRCsUHbJk3w7AGHuHjfm8EcNq9WsuzsShcg",
  "key28": "67Lk11eDmTTk5gcqXLsuZXFZccKk2nx1QmBxPAGq2LJPqVmpEAMkev7f9xziJKvB6SV6jxxd848nVCxgvHgbRunt",
  "key29": "36c8yVsDS9mt1hjcuCjxBw8ePcFJggJKk13xFByFG5ELhXCkggySCUaF82BTcBi8jK62uPRNGqaJPvysQa9DcZdP"
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
