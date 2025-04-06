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
    "jKzVCokWUT6bpT9sZPfEdvSVF5EPasKhVcvK5nixTNn5NNkCqXP3S2NVc6R4M8c26dt4Sgga5xXn2GWA3XYEDpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSRc55WftiHk3Wsp2vYcqXKQ4tTbXesvegH9sBBwHX5yBiJDPWQoTWiB8xqskHuSLhvpu6rQHmEzU18pzyRVBDN",
  "key1": "2UmG1H4DYFBtA9NWsKgdWRHNwHwaty8MrCN7yemLSh2cy2kbYKDXcBVTYSZ44fKDeuqTSM9MSG3fbkrJ2rwC2CJt",
  "key2": "5tLUZXQjg71SQtibfboU1zvw85auVs3Tr2Eiw4Z21EwkQoackmdfmYoou1gf1xMyswP8Zw427injB8dfKKj3Tp16",
  "key3": "25YfYihSSq6Fjn3KPHmRo4KYUmH6daCo1faRnX7wQ4Cysk1SZfLkPSK5uKQJP2RM5YV8XN1NhT3GqQ4YrEysKntY",
  "key4": "5AtLA8FL7bcKEfRuh3pf3LgB9dS9zVkhYf4DzYgkoqruVsgWaLcDs6YPKTc4CxkPgmfzAfmbn3dDGfxMGTN7pRxj",
  "key5": "3sPJ3ms2ksSKoSTCDzftedpTFG6CG7zvrF64uANo7LQ8AUiaj3gArntDnoN4gHhQQbJnMtzcdQK66W33vxBFg4bF",
  "key6": "2aV6uSrPPSLxhDc5nzyFw2G8d9Z7mQA6HmY3bwat9cuPmtQXXTjikE6DFhFE1fDpwiodMdRo3zVPvZdsvTuDU9gD",
  "key7": "3XmvenvbirGe6wYwRJfRmC6t4wr9FqQVp2JErdhDy69Kkfb3bG7EemPKWZ7wd9rAN9RNSBeDy47gbiSZkgUJ5bKG",
  "key8": "38aNejQkFjR3pfKbF3TCJ5qzxvC2kJhYVHPFJJfn97HWrXDZd4rHo6gvyA2QfFKTKZNthye5hgZYMZWUT9Pkm5xV",
  "key9": "4GKC8dwg3anphv49Kuy3bN6zrF3JErFD82oXTX4MkCCS9PEnjGGt1mZAw22Xxmpn6duvQsxcVfBN473vxUoqbTkS",
  "key10": "48UuBAFdVT3oSEPD9isbvAv3WQA3VRrqgEbSksLFp6txp2NwezV8XhEAjzZ6saTSKbRSUTCx9EvwpbM9zFivdDA",
  "key11": "JjZMaecZuXtJtWKK5Hq7nRComQYGHsV4fN97cLZ9DKMkCE9g6tRuqqTNZi2Ds3uDLwnvpBmPKFZQ2HBYjjNCGir",
  "key12": "MFattPEtNEiW7PuC95pgVGkHx2hz3JutGimJFUutXwH8U6v4yB1G5dMskiTRLrab7aUVVBGLBum2EudbD8u3mBz",
  "key13": "27WQaihHsK8eacJtakLEYpT82VBd3SVCDQL9pbjFSpxa4RR8CtEu22XmGF5htXeRB9Mw1VKQHsC5Nt1724fgSanr",
  "key14": "3wZD1baQGrhTsQzHZB692q8K6tPUwn4ro2qgEtBxqTyNAa2c8D886CWDAFZgPtyjuocpA21aEi3GUCJpHkuodEEm",
  "key15": "mwUDP6y3qJJM7mqYjc15orNQrbJ7wNJfnQ6omBS2UG2Nk5QHAPLf8tWKvtwMF8SoT25vPtoq4so2wTJveHg3X8D",
  "key16": "3E1m8NzgvwBVgZF3coopxG1JwMmz79niTwzkRzSDzT3YNUcRW7RvUQsP8zJXE7RypYsoMSDAFCjj7U3SMSEePj6K",
  "key17": "vRMQvnPEKVFTFShtVF1ZMEZ9Db8k3RHUTKBB2vxPAkUSGQAAjRMTZiZnFgEKPN1K6f5mdhoGnwn4684qHPpT86L",
  "key18": "27Gu9bKNvq74zgnWyZNkxSPgcP2eM8atjW6JBktgKfb9DMiJCYqdciJqs4KzUw9S62cHn5hovZuaapH4QSTk2XhK",
  "key19": "3Jqhdw46jce6bDzKv21Z14TdCN2gySnRjaQQKTCGnW8ukbZvgin3ZbTfgyFepeVJdKh7bENVbd9YYUcXjZTJKrR3",
  "key20": "p4mNjLwnWk3b1JbA9mKtp8kuECfyFRiGnK4nZV97dhUuyULCVYyY83XG1tRYZ6HPGdyVbPJnRLY8H92LhJcRBHg",
  "key21": "4EsTBVNpKB4grN8X2TXF1BHuc5sm3zjNWC2n65TsqK21R2M3art17L5aFPbpvo51mViVgjD6q7B9kpRLYWq4SiKs",
  "key22": "bCKjCuSv9BJ8wajkNqrhcnp3FTtcNwYFgdniXRLJgjgnoep3qAfkAteukqCkKFNEERW2za6bHP8FJ6a6kT6L47j",
  "key23": "3v4d7VFYd7hHpVwGACPhae6sNnuTzBdEymghPreuTfq69yBtZZN7xpe89xs46ecDofjxGosshLrM87smjNftMiMu",
  "key24": "zGRGMThMa2HHqicMtggKcjjNshgMSytZ9geBGEhLBn8vAD6KMheAiM8Y5Yjd71kdWvxcJgTjnA9LvgPW1ttFaR1",
  "key25": "5xwkDpceYDyBJY75mAf8iLSnuR3uBTmfrwFyFmx57fpiLmur84Ffm3nGUye4sjGZkjYvn3XeeHiupLPvBjApENHA"
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
