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
    "5tBVSs3UPMskwzEQLMhyRZeQLVuBMLNmBxcmoh8mhgVKU3ARbpEqPMsPvSvtiK3kyUQjQgXjuEwgvLreJqeTmVEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21wLndDSQgVhgnAiNQ1PWsemCEojaWc8AQKG3G2jmfx57Bxyg8f7puqtEtS3KxN2TorE8EJE6PwhQL23LgMPiLcf",
  "key1": "2PpMbKeguTiqGbGdzBbDFoGUZgrrpU6G6VJwXYLZedqhv8FhJTaQGiCxMTNkaPr4Zwjjkwxc1WBVMFQGvkR59mcY",
  "key2": "36Srci6vBPAb1TmH9X6KizqVtT6tkbzMPqzFw7zy3FecgaTioL8ZWvcA7rtfPqsQJpc5AYCPj4eATghVZoTv2CQC",
  "key3": "5RKLbL34i3BJuQS9nSx22tNgZRaStWMrXy2Zjo4f47JtJBJzrW4yr9UwaGCsqwG7bCwou477CJf9L135txGGe6br",
  "key4": "JspRyfsdoKMYsLuuN6MqkFEkb2r1MDxYwDzJbpuaRGaNAVS4nczWkTYaVxiLpERn6uMbugJzgNTAiNZyXmyHH3k",
  "key5": "39iSxjRfhjKyhzffqeABFEYibkWCg4fsQaivfpYTiNNnU5UhjJKaVai5QVBcqTyyeDaS1hyuzMXRE2sb8FbCJCQn",
  "key6": "5CbvXBcQhgiG8F4gV9z4M88TA27KusJHkoS8ytTZr2kR7CVCrD7dmhByxFtqLukCtY2BVZiMmPvVzTp8zVjnzgc3",
  "key7": "2hCrydwsxVAnJTPJULQgixXaqZ83Sug9yhnSce12LQ7U4BWz7ctHQz2qcQtRXNfkwGHktWjvMaheBiFNToEaxuxG",
  "key8": "4zDdVJfvdzDEoYsZSeAGQUu4JrhwfqL1Sodex3VJxxpDS4kRmWtK9EiSdvG7uHLURWky9f3Bz6FdvLLEyiTzoXp",
  "key9": "3Ymk9hsPjUZzsVREkVvcfQS7dj39sS1z1SMG7oQREJsUY9rnAYddoNse74f5mMeuhpqFkHQF97g5aP845NpEDRpB",
  "key10": "s4zLRB81e1y1n6m7uH1HDARgrmMhVxBHTQcE5X4mfTjR195HM8ref99wmRJRRmcf9S51NQWkGCWY5CjSMzKsjhP",
  "key11": "3cUtUcVdp2hDDAJSVUFxUgj4qksbEJivrdio41JbFZP37cwKPtqMNihe9QY4CN2tMjpXcs65mEcmMsatbvZdSBMc",
  "key12": "3JbfZPzoqpEWAADmG5Q5sevu1Q144S7P8CYhTmVKEB2xEvuPuDXAPmRR91RUUbWvYVWTdW3K1N2ms9zAmF3ukgMi",
  "key13": "4WSjwKewrjvzNBri57hvnaTbumppVPQGaN57CSnaMECYcLDqwa9Cg1w8D8E8vr7tNpoFjqtLZ113xAkwtbVdBihX",
  "key14": "3iHRoJa78V75WrgP3gvRt9JMDSupM52AJMyzatoR51iYA154yJRKjcNShMARsFx9nFuUV6J6WFYdGw4KzzdVM2F4",
  "key15": "3MRepMsBCA5gAcRzgwNojZ5Wn1o4TSE9M9GQkKpdWtnvozWbuFkj1m2MLgn28KT9u8FWy8mAHaafaf93a8Cghgic",
  "key16": "WCxKvakMbv28eqVQDkcxMTonnchFKiiUFM4Z9JVAsgXYWp9wjzhZ3PvyoM6rH1aujQApcmuQmX7SeGAjpGyLB17",
  "key17": "2X46GQVcjBLKrphEjaT7pRQMwWtWTv8G8As8JpPJCeW9czschtUsrwFNvQnAsDaaqesDzTsJzvqD7yag8CZMHZED",
  "key18": "46cYWcYEBFNcadXfypY576wgMJgcvHpPKeC62t6xMjfgzSFetrt2C3GZSUCvByBn5pga1hdeDE4jRce4MUZ6HRto",
  "key19": "NGP93mVd8xtdMMkXC4FRwxgMvu2pFMdTj7CHy1PAkkfiEpCz9BaBh9L5QQ16uwD3pQUJiDDFQvWjRNrmbrbMH53",
  "key20": "4ASHGx6tjyXJj2co8yMqEmhSGWJwDzBKqdKn3VDKD1a5t3YmKYyEyvTUNajGhapcqa2gHSewE3D3QJzyQbZkuAnV",
  "key21": "3NnBkLetHHC1umSk5YvCekqZoZLKrNyreMXTz6vB289nvWxBKUyqJ8Yat6At1ctiQV2JVHmqnBmWbQzfJR5dxrjz",
  "key22": "4DAQjgmCxuYfo1sbJx11LSJjhG7WGEkRge63wBwMetrvrcaCeQsNRzQppa5XC9fHKNTAesFwciQ6S986BMFf5jNw",
  "key23": "5avaXY87NCpZnfQFbuVy37yYN7hGzDt3iNZYikQdEu5U1qEZCdMS1uG3BcP5ZFaz4pSXSnQtM8iQF1BU1Ru7BT8W",
  "key24": "3Pz9W18DZo8ZrnjYvoYXtsyVnWzDvAhJFkaxgrqmnDK6GknQ5sdxtraxVpDhhpNibMo2FoiobqrL5WpETbe8Ec2f",
  "key25": "3MdXUdDwKYrPoZ4Ca7uSCMg5RZcxWMqcPu7gap1XEJiFwfgesiMCvbmFPZACth83xQtdqd9bE52xca2qEKRz8FFx",
  "key26": "3HVs2vfqxLyP6s9ZCuc3jpRJy8QkR3XeM8aSdLnuyM3jyhBExL1ijzunnMLiaMxkTX2UDHJbGp2nSrLMRPdB1qkK",
  "key27": "5xAEKHDLzFTNT758SMxyxPi8ZqdBuDFPUHF36QoHETbWgyUFaDDLaGjmtZQ1i875zgfgGNPK9voZvPwn7V7GEAq9",
  "key28": "53QJVa5LPXJvjach6nWosUajRHLiqBfr4tFUwqmCzDQ6rQ8jBfJDK5eLEjaYWHEhEk8Lm7DZcMi6twc4vKzpdUrd",
  "key29": "23pT1gGsuimCWzivfZFixZjxg5Ai2JfbGdRiQM4UyjB6dYBYGTnhAHKbH1Dd3S69Lz9eda9xuA566QXoyRoBpU5L",
  "key30": "5iHhSdtph47Csqhcz3r1AzsK7xdHAzZ7pHXdTLZVrfUWX92PeHQMfM9jWNXQVpqAc23ifMZ49wBVg386ZV9WavE",
  "key31": "2zqxTcceZ8gAEKTcg3mwoVrS9hLtk5ZttHrbM5sLYKhvgnV85xTqtXb78cRB1XiHsHxaNQ4DHBatTXoD8x6CUFYx",
  "key32": "4FH2f3opBkpTaMs6jEgYB2fKz2Dk7ryQceuLV4rAMSSbWFpqHC2PEKTDZ5ocq6XFTiuJ9FxV5Rk6mcod5y1fCyH8"
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
