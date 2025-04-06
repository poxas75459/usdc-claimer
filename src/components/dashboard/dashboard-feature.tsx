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
    "39bdckyj8S692PEVNX46Gd4PQqnu4fFxGGePSCtKe75rgUWYXdB1ix3TqR4UpkzCENMHekGZwqfy3ffWM2KbfqhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBiBNDJm2WYo3VNTjZXK5uJipieUb8T94NGftSCavZfy4F2mE6zg9CG3JcGGqmJcBPshGRRUXkAUfcFUSSo7ijA",
  "key1": "3h19UvU3WWgjB78uEmWPrgokGtMRezvs1ZbHhyRLLrRc5UhMjQQ1nP9nAnaPVWMebqZAPYndbWU6h3F18NgzMSMR",
  "key2": "3VTAnnuuzNExwkh97jsfccVYbaYLobL2D2sR6bD6vFWo1zw5WoBjSnpNKgfKaVv3nXFZ9vWLhutj1Yj23cqV8nWd",
  "key3": "2aWzzkSRWNGxwKwHbNaGkv4C65chj1buJSffQA65XsTxLQ2cqcMXX8WZ4wdnREXPWPrHeEfVQiWasmLmyDu6AN8y",
  "key4": "3RYxz4h1VrBfq2DPATt9NBRqncaoJ9eKirjVZaGQ5sydhDEFTdxfRu9fRuVxWuWRvH1H3qv1n8RjSVSQ9nMaKM1F",
  "key5": "4aV9jiKiunRNAtj6vo7LEN1esetXqWaAxfvEDYZpLDiZUHQc2nCMEsLaMxJ9YWfX2UjDJCKRFBoGwo4Tp6Y3BYG1",
  "key6": "4BrmH95P1K9kuBSq166cCRNJk9Q4LFnqgqnd7YU6otJqhjJhQgVA72D3ZmRi5PLCEhdcAYwTns9tWjRhEzVEgHnn",
  "key7": "4VhYTdCSq8LJLseRrnpqJSzPRWX9ZRmmvHfS9DFAqBfciNWPLKryc8sjTks8htZ97YHA5T6DHNpur5dtAxKtHxCx",
  "key8": "2WsEBd9rT8LfHGWvjRUGJ9mCoKr7QSRN6RPo6ztGaT4RLyrdZwzFSqiT9556qBxXU4PP1xWUbe1Z9dBQZmMuxv7M",
  "key9": "3AUst9ygnmnNwkhorytbo6TgXtDdfZsaZnxmZeLDvroCy8dXRySQzRwarAuGWrwkmAgSPwonRqvBATxk8Waos26r",
  "key10": "2BBYSDdE4rRLoLeJHtdRo6riswZfVUpacoFRd7x6HNZvf1xE94taZQg6GZD9VeFQiLDh8sap39BthzWmksJXFtph",
  "key11": "BHeFKwt2jSAeXezHk5iiHUschJAgmTCPpC3s8VCm2tqUTHSgdvqaroPcm31qUs23JwuGtBKYv9ksUxP4UDH89dB",
  "key12": "4KKCs4CgqhYDPNX4B8dhyWQn7uSfCFqyQ5mPMgJgFJCyUPizXMMCNPEePsJP7j6bKXnsgsNDpH4FbRBcGr1KmGMX",
  "key13": "2Kv1MvAEwadzFVGhAzgEs8ehrC4c15epUH6mW1Mew34xE1xKTme8qncKsdXeHHijH8oE6AvcNfiZkubv8zQJuosu",
  "key14": "3AmKTLBTTpkDDRsN8s4wRV2fCweES4eMNnPUR9hQi5RnAooj5RsV8W1i9887sc8foECiFLvHKDp5WWd9EHQabz8g",
  "key15": "APz7PFYbY8KNRrenynKxbbQGmVzcx3ymCbZsbZcDk4ReynLPCdfbe4iXGMdCHXx36SiZ9dycrHGYQWRZHwaCyVq",
  "key16": "GbQd6gE6nJqt3XMKfgCF3eamSjVS7Dbcr6cAWdJz4seftNuUfQRpD8X5AUYPCn2EQXjSCwoAUUYaJ439o1ykHFa",
  "key17": "B6JhimTwFT1PoxjXsPx49EtFWaHiM2D3UUH4R4bkoehcURUkBU2EGUz2S65ijVCKff4qVGJvqYiziZEr47QZ48o",
  "key18": "2BS5RLT4iJ9ZQmPCqUqhD5RUnGRWJtFV5ZD9KbESRc3Vje2LgFTHzpGagitfFNmVxARpcqPhk53EkuGKKKHaktTX",
  "key19": "4Zj7F5SSVVZCXXGvEc3iQmJCuTgWhRN3K35KAWDA9xRqAoJcEdWkTqZFSMA4dPLYRMtZxo6Cs8ojoB3SQ5kwmaCe",
  "key20": "4PVDQd6umpoGQ9oPNv9PfzrFzaAggDmkv9pmmSRbrVTyiEMzTg1pPScSgXxMLNb6ZaqKbMsGYxWX7R2jrems755o",
  "key21": "46x2vJP4Qj9Efd4J9851kjFXZFbVRPCGApwdo4NdpQPgstgpGcQxhC2tAjuVtRM2ndYcETbycGqPpu5gQN7EECrp",
  "key22": "QXSZtAzBAPdpJGxxQ97FywjihBrSp3j2htuvxcWjUDAtBwP1iRATZz9e9SXn3VSKrDuPQ7wp3F4LVWYdGrqgxqz",
  "key23": "327DytdMWEqy2jFmJHyhDFE9yk5GWGCLNhE3aJGf9JP5tJ29DQzqZbdgviouPzhuCEvYvQ25WBuhxQo3kNc1qdCA",
  "key24": "5ZevouPZx1bS5zEeLNQbTzEuaczrMPoE42xFAzsBnJD6UwEzuK4VHPbUxNoXm75T87b6p8qsqWMFAg7S9MJuxhQh",
  "key25": "4ub2kSLnTJDi719K5MjsZTPpJXbgTbdjXkwmEYz1RBFE6Z6YwvyENyXdkhQZBTq1B6P4CKrVEqcgDsuTAabfF6uL",
  "key26": "3ACBtJFXvKMZCBNzrf8APpmW1H7rgs1Y7y8qD7tqSkQhGig4sCFtdMzTLBbUdit6suryUNG4ARg1bBCu38tMvsMu",
  "key27": "2GLi655MQNhj2rduH1VRDKQTzP4XvWXpiV9oCNR6uapgrYibWEKA6oJytKQZCLE28gPHSAw8UCrQvtN12P37Z77R",
  "key28": "3RTv3Ja61mRTHRvCerCLJHNjbwtkwWpJCRXymL2mKoZim1bVD4EJQ8uHJ1eZupGB7FaNjTyRCfaq5s86DADMp4nm",
  "key29": "52VmzyvzfnNfQf5vmXF6TfkMKk3RhaBTTCxRnaRKCgBQazf8hvFDcqe4M17eHubE3Z2N8ZPBMenE82P25662KQNe",
  "key30": "nbeMDuEhVmYwRPvtAVTP8bZHJEdjcPhN1GvRmEae27hfhESpYcRhPPK4PNdz4QtTcca2NrCx5aZmuVdTMHYiFpM",
  "key31": "2W6KHDPjsDnYhi4rqo5szrxXddXuCDh2Zkb5wZMi1BKtrgsMpYfMaNdvV3Aj1Vq6Zm9956NodBtKQojAFrzGo9Ev",
  "key32": "3P1FQSerN2Ddpy7V6MQ7jQ3sg49niTXVd8CMwgzS3B8a7b1i3TCoF44x7Wfkeu54CeuHQ4qxP3NQDwE78R7FYzYz"
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
