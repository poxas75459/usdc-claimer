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
    "2xr7THwaCN18YW3usTWbeKDeCHXuF5dttA2fU1gxuNaG9Abnef2g4NvGiiXXo4Nmg2MiXYPMDwCw4tCAeUnJ37XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iz3W2wN1b5fhem6yQgyFREbmbnm9jMnDafWYSutt2PSj4QAu7CdN2QJfGjFgdFJXXzx4oYkfp3eMQQUexxyKNF7",
  "key1": "3ipMiU2MtqoKTAPPZVw9HEpDBcZwJSzSZyZDNatDxSfaPnKDa3zEQBUzAp8P7e9ebXEJ3ttxNjevNvBoMynNG4rm",
  "key2": "3j5GPLMuJYZz7RkpgybHT9qNp8kb2hryidnmH5B53HeE73ucgsqrnpMoqhfj4kZQQdG8AzLZxLb1fCKenqLCbCtL",
  "key3": "3XYfWDyfAv8UAvJCxptMTzeqVgeEttfLJ9ojHT7cbkQhpZYUaQAMjSk9qc8ZGS33Qzjgd4XmTzNg27q92aKn8Ky5",
  "key4": "oXyHjNd6L7p3KQ7cxq7j5D26P2mwWenyZzsSeY1vfjKCodZjUK3d3h3kguU6GJFniRgPPF6EoUZAHinZ4ADb4F1",
  "key5": "5ytNmET5rxRckg7FEby2J6gjSVUYM69BEyxQA1fUW43fU7WT7QbC5G8eeBfJWX7Mt7bPKvfNuK8GMEezUdHAm3rP",
  "key6": "2AeTTX4J8unip1bxMocsrvF8bzu6jUdDfnj4Gm7uGo3JepwChqYtZTUnCwib3d5dPQA4t2QBeeqykVB2C8VoEqhW",
  "key7": "4b8RUaUYmFx3Ng127qcRz6g56wVvKzsYUBgcAxErSgkLKticLuZraxctKvdhi53YpgPrBLYbUA14rhDyyzh2akJk",
  "key8": "23fVGrTUxCh6LryYvuu69fjfD59CM4nWb53EjU8TMto95QS5VoVrucJLtRgrXCn85UmEe9JtG9AQ6iFLPRFWsVE6",
  "key9": "3zw4Wj41W1i5nYfZWYsNdwsD4KZ3j1T9canAEXaSAoBnDgsvkKt4KTNtjJk7r5M6ZRSdfUwt4CLGzdJrTpsNtk3H",
  "key10": "3KYZHk8sBh7WKTSMX43BURkPKgciYiHUnbGzT4sthm62S2QzsabNFKuKhvddvC6zNMKBeNXk8rMSYP5M4GhkgubR",
  "key11": "4sRFk7unWWUGSVsk7PcEoYUynYxJqqigxLSCQggX4FZMLvjmNSrmoN4ETxi4FrkSQXZCSDjzKAmdbwxKxWP8g7hy",
  "key12": "4p1yXbUERN3PkeqTRgct4vendhRRRy5Kqw78ye9GQ4uVcR9rRU8gK6viQtM86VyF6hVTdLaXaMjs1AjBjdfQwwYY",
  "key13": "29R2fKw8n4dmq3giAwNm6PcEg5iLPrQPQ3qrEcMqXgFyaN4xAaS83s5iCmJy9XTX2F46XTuPogCAdZt3b4xLjT2j",
  "key14": "2HJynBS4jF8BDuX9USQx8dyRA6bgisY5vK8T1VZTDMGJWBxdtE5xXX757F3NbxsiaZxhvZkkjugMyLvWAabN7wFn",
  "key15": "5rvHgBGcdjJ4GNMvq7jrn7Tu1GBdMRvGtU4adRfJEi47BNAXeA4o83steKEjMqKBSGpkaCVFArtC73GtaF2UvUv7",
  "key16": "3pgwjB8TpZBda3TMmpDtjABb3SMqEm64xKLZjNWAVf7BVtoRBe7dwZYvmqJwLdniT2FvS8n2rk39DVAfTdTD5GxJ",
  "key17": "2vPyPe61dNKaG5nkRpVPXc47fgeS3FSBVu7J6CYKeE9E4wvab5MuGg2sd61JKrDqP9g7ZS4BEZazPeykuSpHZng9",
  "key18": "Je9pwq8mtxoRWwYCvFrw5wtSkDgEHNsHxJoV8fA7yq3Shs292aReXmrvnLy2eigXBCd5u2dv5s8xJ3Ga4VoWjxS",
  "key19": "3djN7NQ4z36r7JbxkpkNxnDDZhxrDvWCaXFZgpaCwTWFkEtaAXj53ZoFdNUMHBetL7NpuKHdHWdgyqXK1y32Rd7F",
  "key20": "3GGGacWiDGQv9ysUse1iFrRsafsFb2Rvg2ncArtmtr8tUszRFiJTaPUDp1fj9CR35j7RdTkGk4nNTSJ4pZoqeQ7L",
  "key21": "eE82xvd6QEq7XrY9731AT6grppZEpex8DnUZnT4BLhXmzhdiuL4aUuioqhmWXokUhTUbuTVxP98m3jswyM9ceE6",
  "key22": "2yL2ir6Gvz9drPaznFP292h3jrFHm1iWC8b1qkRxQ6Toq4r6RqBvffiqeSMckh9MNwbDwA57qckNrRVuNryTWMYH",
  "key23": "5PpqNg1yZSveq2aZxzDuMJFAYVus9GKUmXAb5Rd4sojzPrhFWgrZsQmZbg66XBMDPTJhCwEUrEvABVHazQ1jxERA",
  "key24": "4RdmeYeQhsF8B4PcszEQGSbMabjHgtYctDJ87rt8VQ5o87SMZ9CCekm2JB9vcdTNHHH49itz2EZgt7Mh1SEzsoL"
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
