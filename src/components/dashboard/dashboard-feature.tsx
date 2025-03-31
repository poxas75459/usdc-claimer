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
    "2PArh7F1hC75UBXngHtNPL62jNsXR3BQir7p8gtJUGisgnyQrXHtv3CqxLyJb5TbudKgkoL8vHkqtxWUWapm1gKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3fjH1uTbB99aHzE7yzycHL5h1ihU86dG7byT1tgN6K4s313GMj5wQrW77vHMADx8w3W3g4xcN9NoMF8iZapgLy",
  "key1": "2NacDG8f6t4piAuRt582hwx4bBv4CGctoSvpxk7kWBjR4X9nURU8K5omNRVqZUrC2Drznkz9jVMb7TjdpVr2Veed",
  "key2": "2S6TCjvoagPSrhES7h1aPD5cbqDXghAQBimfGN8yYk4i1Ld3xkWTDggXJXVnMqyNCE24sHCLW3yZ9kjoR7qyNeic",
  "key3": "5MWKjPgruL9fNFTPwFbBsFn9tbT84RLENh77Rb9HmZYR7gAxjTz3Jonsqqwv8XRA7sGYiZhb4rmpDftY6Dq7Nw5H",
  "key4": "4UaoXm47mqdoBP9aDMJPktVPxmsG6XxqNyrVWSvWRrPx1XE21F1uqQvwNeMma1QZWPdw6A1N4kfQW2GZcyRRPfnr",
  "key5": "574tXzwzYLMMnnihpZsFHprseCmW2fbGHc7YAE32UZKNQ9qWwo3FLjj1LNArVeWAcQ9Rj4W7SyD6c85a5uJHhf7U",
  "key6": "28PDRHdA2sfRYisyMLS8gwUxq2ohHE2j3Tk4qo2XrkbeMeqMhoAMkm5oKiXDo7mJvs9Pp5Uf23LshAqqmFcXTqmw",
  "key7": "2bEvvAKPW7JrwvNkwDfg8PgXvtDynXFGvjGeGYzY8CGdUbXQHvjewufTdJwjjKVVpQN4n8uGTxBmo1yCHrcnryFR",
  "key8": "64dJRNjDUrmFARurTQsYmvQ57KyLp27p7xFhHNpqTgjofAj6J9sSAvKu6R8jVozPVi8qsHK86WSCWAyvpShmMtyN",
  "key9": "26dnhLP62qm2FT6MgDEgLUswm8LSCr3zReUXD1JxMn6cJYiVs5E5gfh6hZECd229bAbLrDnCEph2wKBSLatmp1cN",
  "key10": "4LbArdgZsAySBoPEirrAEntiBVoUeumBJn4FyPjWbLLgtmenk81v87T55rQn7vXDJctBRH6s9vp7uRPtHReLjqTM",
  "key11": "44zVEaNobrHPQuGtvTLugk4s6ruGknqwFcdcFwZaT3CBjTjh1YvPjSKAbpreA5hPiE6AaFHvzQPgXaNzNTSp7bM8",
  "key12": "24quyDUvrGxw6ZBvGwLzohPLu9fzzU4aJR8TAnRYFeEWknsSYKQsD3iGovsqneLijzboTj3YfFYUWnHMCgEbyDmj",
  "key13": "2ESu2cecN56UdDtwDF5FkkdhcM3RWCdnPUaYkRenfnsZ3UyXsNxYr8Rm2TYSbftfX3sXWyH5zb8214Sszvbyah83",
  "key14": "2hykKzC3A7Zgnq2GiPcNajJRL2EeYW2Vrv8PTvxtGZTwQijwTHN8PkSMkSoGBFAornbgEt98uSzx2JxuDUvnuSc3",
  "key15": "2deaUZB79B3ix7AQriEogSyydFJoW6BYyD69yrqRNXQSpn7G3gWd76sbAK1Pk8MTHQcCUMCL6eND992peN6PzB1K",
  "key16": "PQnU5aWHgFBqRLqK3EFGhsHF8BX9E9TdgnoP5CpYU9Rf9HKGuE8u5sEYX6uVmtd8DN1FmBRXTkG9rfdymNYbXYi",
  "key17": "4mxRVTRgTsb8owMYRYSwNs74CTLK3ogwoTLzPX8414Wu9Y9cTsJqAV7UpUagkUrh3d2zSnMntCY46AeiN948D6oj",
  "key18": "5H1u9kJq8vVhtharz2Xz6LW9SJU7R9jRpib78dKhoJdJ1yRZZiQyZP8CFSVL1LzipbNtoatBsuh1yp3q2N3jN2JV",
  "key19": "5bMvcvTeZgAGrrEPcc3hxubtjTMKYK2uzeGkk15UKLJENVTnicHUHF3u4E88SMnKLgciF3Mr3YWshpAZbBTZiDDg",
  "key20": "35uLuN7jXqMecvZgnG73ipBM4LacGswSXSzuKcdZJTQiVevEbd542in93iUgCWBauQLvrN1px3gcfoACLaRTm1KH",
  "key21": "5uneJi5KChLhyyu5SYjrc7zuu1e3qiYaK18B6V67mjPnKdjbvaXtUuHUsfiA9qo2wvB8D34R7ve1kWJyFkmrYJyB",
  "key22": "33ERmxWGyHV1WUAUyURg1p53vHjsQ2ygAepXhKyxMJTt47E456igLuAWs1mB1pGszw6u2gJknR3CV5YN2oB93uau",
  "key23": "27YfVWsk5qon4j4Cwn7qcj1j3KYjJAS8YdjsNAyWTMmzkjiKuxADsTgERHCg8YuvZbSzhFpUiUpBeXiGKVoirMaM",
  "key24": "3xHNkyoi1tSFwx7bTDpNLo1dKcK5K7LDXnLtNxQasuu92nYVbnfAjBSHvkyJwsYNEw5YoMMpawv5jZn4v4o7ucyT"
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
