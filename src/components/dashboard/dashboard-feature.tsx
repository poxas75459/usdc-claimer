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
    "S2bUfmxfVQZiDYZPV9zrtgysc9um75dZy56iB147vTkW6d1BV485qdX7WdfujXZQM3Bo3va26u4JKShoktN8DBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CsoC8wtxzNLoREP4ACeXFWuHmAMYHbyQ4W9dzzR9jCpoQridrFU4b26AwmHC7QWY32reWpdJDuMnJJKVdVw3bHT",
  "key1": "3Yt6nLMx4usjVgixNsQwwAm5r2MLdGmcnc1xXcgWpLgHx4Fkf6Ms4LRgZAnCfdAugkW4FV8NYuVVt9W8FcF2EPZi",
  "key2": "5JvUMGcCnVifhRC8ipKZTkk8cFFkgd4fqPq23A42KbPLCCQFQ2Uz1jdzMea3fyctVm54inQ8fdMh4iMUPDdciqLA",
  "key3": "2MV6Tt1CpY5ahYXrWBngKVsc6npZwtAyRKtYF37PfnL16LorhLqHKNeHcRGJzdEsmZhQWgcTtkKeUeyENd2MVrAc",
  "key4": "3mXj2HrGUAP17LykSMEARMkdir5efUmTKQjxvi5zjyxLMxtFqBe2HcUvLsRHeSGb5uN27SWStSkzK1zzMFtge36C",
  "key5": "5dwnUAisUamyk4WPBZ4CfLPXCfz4gia6UvDwMHCAnTMsLwSRns7bnBbLsUYgipG6tqYppNvJ85LQH9pZJXo3egvZ",
  "key6": "4eZQKVXNeK3VvTMKShTmRbqXBA82r6ouwqxCu1tV3ibv1PffpXTNejJTzefzLjauviwVEFLTvgFisk1czzqgm7ot",
  "key7": "56nSrYAkqGRhBeEExuWyEPim3C292WYkUTysLCPfaWvEqAdB3cW8n2cYQfXaXQiUPq33Q6cBxq72sxsB8Ni9W39r",
  "key8": "5nAQ8s8fEv2m4H9HxjyvZXkT8pzbNyjLiyMkRYbNQ4nQ2jAuWbt4WfbXrfp6TGgGSgVE6s4BaK8MEhJyW6BF4A4a",
  "key9": "33uAMXSPMKAmLbSaSq5fUnopPGApUipJcoVKBqK8o5bYs8uNLghXNhasg66ue24XvRDjkVMec1cYjFnMkqzUsBiE",
  "key10": "4xj7RZcXpu1Ash6Us81vBN9Jeis1kxS1NWVHdQuFbxaDZZfJcFRrZjFv9FwXyGHEVQk8hchgieqZJRPX5ubT5U58",
  "key11": "2v1aKFyRpGMuVUpP29wgcjTTTeNgq5R5sPVkckEUZ2DbZaEbzE1E8sY9Ju5PUGkzVddZ24Tnjn6ALBdKKk66gDRD",
  "key12": "4nC9CL3edurWG8bjzwHwSNokvpXpphGaaxPy3DKqBoFEFpMcXZS3sg78kF5gSyumXHDEd73RWYhcLdBxgoZ44wQZ",
  "key13": "4bU425Y2onysernpfVhkLDNR69C4aZ42iauWCrLTcU6oNejdKraXEs82gkSpE3Wr6VjYgR95hvSUMPixsxZLUaZq",
  "key14": "44gjU8rrhojE8hzCgSFah917RnvsLU48xjgLVnw5cHfV3gekDqBXAmNndM1JZR67p1xRnCoGewA5H4TSsB1CcjMb",
  "key15": "4b7AYwLT73ZBoeb7QxAbnhASh9qhjissu9TdKnvvdGAKLxjcntHQM2FAEVYiPg6McoyKknq4BiM8nw29LWb3a3sk",
  "key16": "2aVALswYbFrA5hYjRQ5D7gxTHhCVJhZh4RAZgKEzsK72ZfRQ83UTZUCDxsB9iNx7x9YU6cLJYQNFhgfN9ua2GmzE",
  "key17": "5mfHyQHiEhr6FqDLKqtkCk2VY73WrkSjYJJkj4nfbuQRwWgUREiRXHoPLXGZCbs24f6PMidnUCEPMoi5KxkX9mgJ",
  "key18": "2oHdz2qZGffgvEZE6vVR1A6jVk7KTGGNQ1hdrDvStFPGnTGEW4EWerveqSS8a3bzzj7p6kC69QA534wTiLzawdPs",
  "key19": "5U2iRe5wLSZRGeD6pEBfEYWxDgPjrFkMLNR7ZWWs2XD24NzivBDbwAXQqZoR5MY1zLQPacbwZ6k4eE7JDCZyt4Ua",
  "key20": "3jMMdatBZuibv7y879eVXrMBMkKxU1pF4swJeoofEWoHeprndxt9LvjfLhfsVjGnNVvujWLT9xk9ge8MVd6NsGAG",
  "key21": "3C2Tit3bu3NZy4HxKNk75uLU8CHSFyfe4CK3GJNZwVXSo1c4NU1M3nm2v99zsn3XRbgifjPAtLCkbURzXyyJGSkg",
  "key22": "LynZPnbVBn2CyN9h3izZTXWkG45WEgDgb34H9CnPJ2iP3xUUKgZZq2oGwkeFfjApUDgVRzvM97qySD7GcHDKuKP",
  "key23": "4rbWA6ZtsEaeHgUTTDG7dNXN7udcXXbYyFT9QjMQPYPtR9ZmBv9muM7ffs3Cz4NoLFEpMLw9zKxgPA8dsGYw8tkD",
  "key24": "4FjQvFN4tzfbYfq1A8Hnms5rjSH9mioTcRWJr9w6YftHX7W7rhCt3Jsf4HgT1ZD5AsFophj8uFnMpUQjLmAd8QoJ",
  "key25": "qhBchYzEUmDCpDWwttmKSGEGetDdxSWd2uBuneruFpJi63h2XV9jbcuqQcsGWYSeeojUn4Qs2akLiDP9LFkiWsr"
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
