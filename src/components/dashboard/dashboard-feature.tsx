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
    "5Fd7gf1bjEwEnUkQPmt9pMTyhE97A8m4GcBAVR8JscZcGvNju3ipTvpMpQN2gYXbYnNDovofDTjdMCf36RqWUfTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3x57bReSKKEVriupXb8FNTY1x73L75XJhUBGQXL62X2f8RhPs5i6gQ8WWsVcoSXL4huStyQoP1KWKm7UAuPo8c",
  "key1": "46TFhZ5kAm3c2wcAhkST3LLT3LpFE3iP4is2V6uhn2PUV3toKnR3oXCsw6YzDm7qtqGFNBTJBNLmuz4zjz7QwkYt",
  "key2": "5TFACffbuZQoX97QVioZnb3cL7xBNvdpAprFCXWJjqbpcp5FX9q2Lp8SaeZKx9GPiEXjQqbACZaaHJyUtNW82e97",
  "key3": "3TmGV4rUguH4X2QFYrUbTUeDWEb2c8M5UeaAqrFhEDb4k96EMkEy1V7SLw2PGoJC9PwB22eZZAi5SxNg7Nht9RoG",
  "key4": "HhmSCgskcyAU7a83vuA1RQpvtX8WFaKWahUYPZth4scs7HAuqijcoCC7mTpG4dbL9qMnw4TXBcKK188Zh5SUiYN",
  "key5": "5V3aYd64TqphG98RpH13BdJsqvy7ydVJv8iaCfcTr1WUUDixhggvPd9MTLhRNeCNXZXCAYkQE29bKgnz9FxNR4jB",
  "key6": "4CAcMyNdhgKec7HotLQxfLqCqNFSwmVgCUfWwDihDbVkSAD2nrcyRSZpqvfsoVEKgxYrADK7JNnnYBVnQaLhyU8o",
  "key7": "2Coc8Rmyk4EwvQqRrNu5NcxVQpqVNWaZni2HDDpchTUmKCr4QzGzSFTyWk7XQYuXSueRLDnXRDfhKbTevGY97oVV",
  "key8": "59HfxDUFJHur4YrEiWjn4kkN6dK7Ev9uWNrU8iCbKKQboAQAVDNEKZZvjuVk2gGZoW5uNVg45zK5u6cA3sySQdZp",
  "key9": "46oazKdtTA3SU5VY7FVWk3jg3gPeySud1c19mGC118o39r6XRE2YJcXthMYh4dYrje7DErmYz6uaJzvMmTDHLPAb",
  "key10": "55hqTaJUvNkYbDzYNhBMLtbAJy6SoNPH4tZ9p6D1sBJ2h6KtDqbXYGJoDTLMRhhni6G38jTg6rbPxmGHBPnCqUpk",
  "key11": "5QiA4EE6o857MAYL9pcusi1r1BNHwnfF5T1m7VrekyrdpcF31fvbaRoLkSTFT8LwWm4pxGp1mvNEazKXyWsRfqp2",
  "key12": "nvMVeKN1AJGKzFXXM6FcN4qtZVzkMNNS7w9z37QGKv6bFX998WZCzE7XqsvgdH2mdyDEfKdCNAhdym6FWwzA5mz",
  "key13": "525w8nCof5uU676AXvm7NbJ3a3BweWKCBuhbhRuw6UofafDjSckzeeQ91KdCEWDrzZPU48UpUhmjrDq4eE6LtE8t",
  "key14": "4UBL98YFXEwvspAcK7neaLqv4XXPGGGvhJeVdczZxHBPSrY164jAqRb21Gbr4KjGo6tywQPwAjXdTAR69PdYaAaP",
  "key15": "o5ZULgksV6SqgDMGJN3rPya5ZwhWkYQGLSqYkRdXR4ERTHDTdVdcAi3Kp6zHFgCUA2PZAH6kMmr7gVqfBEJuLMD",
  "key16": "4kEBucD7yTdz4dCzrdEVYDatVj2ndjmBKd1An2PMjhsbvUcuknWUMN7n7YW3u4w9mYZurBeSQzajgv3AUWH7fDby",
  "key17": "RydAozTjXnMaBdAV93G3M4PruEJdPqZo2L1TX2hsByWVZcwcQGw83p4PMrSfqhgEac1GWRKBDK21itHf4byqjRs",
  "key18": "5GirhCVa8HDNNhEYxQAPg8kE1P3rYXnmAEXdS1gKjmqvAJvXF6bo1Xb2513k2xEdN4E72dmXFrkCXejdpFVbaUfU",
  "key19": "HCFxak4KKu9rCoQb5jUQ1P5ZeHw5fHjNahTRvP1ipGw3jhnweu5oY48gqN9oy5jC7e1MrYTULw24w53PQsWU97w",
  "key20": "5M1WrcCdTc5E8FWD1brJGp6JQ6bPd4uDGesX1oRVDALTRiHd352reb6uLbiNNPJpMJjCq9yBueo4SC1964vuQNY1",
  "key21": "3fNAQsZh2S3bGRWaqcCzWEWE8ixsfFD9yMLLCHZQcftAtzgjkkvbkedxuckwwG4xjAPBrnWZ4HaRPv36KK1KnYkS",
  "key22": "2ktjGdzDirjtKudz4tA9TmPGZfWhpcq54K23B9UgZxkfiWbuZJAXdPVHYC7tK1K97esTiHwQ13K8syxyPuH4PPmC",
  "key23": "3UqFPNBewvGuVmQwbqcyXvGMgLRogPVAxTbtK4Ua25WfmKkd747DFLj6s6wVr5N9iSsPpR6V9VRdbkQGNtFdwt3k",
  "key24": "3EkfBD33nEkQvytceeNFP2NsPrRXXovfqCis946muDSMizDTTk5ksZ8pbr6WKCsUhGMpDiYudR47J6FvW6Xu18CU",
  "key25": "3tStHR6Mc4PJW37QccEWXyDArenZeef6QkUGsx2gtcaBpSUxLpRUqmunpfnoqmCa3pxHGtEHsH6HZxf1xPTL8SqN",
  "key26": "23ZijBp1uL9vU2u3YMUMjuBbTyCUpmshp4ubxu26gZU8QaSefyqdQJPSrFU1fVt73ENUbFNoMw1HLwpFwkJzue2A",
  "key27": "62zrF5u3fAedynTzz97MVtedMcocV6wcyY32VhhdzEgXxrZqoZkygyjCkMJSucPzFY5Cado5Uu5sXpHx2qT3D7y9",
  "key28": "5sGQEXUBgE1KKYDQKczUKB5vLJARJXrXmPnqhQEdtccZhqvmcPY5rdH3FNPrMTQ5XfPzmZHdxXwjr4VWHShYzD8",
  "key29": "5B5q3ZzQYLBpdwvsSbNKf75FTuyU9LDuyhr5XWNaMrEvGs5e62r4xFqjbVmGJA4ZQUbDbvzN83EmPc7db9EVbkA1",
  "key30": "95riLZKacN5oSyUGQejz364NjC6nxBmFBiNHutq94wDDjmWyp87rpjjfQ5LdeKHLW8rgxafzsJx9fnPHRFs5Q9J",
  "key31": "32z4uSfeNLbHPtRa9XwWQybn95oXCuEoZSxyy5Vz14jH5v8eyvaHdkptz1XKXywEieuDRS1WrduwQBsb6ojAyRvm",
  "key32": "35WszZ3GeSH6mh47CfACASci6znXgEjvPMB72Rp7uCtVk7oM5ehYWeNtFtgzmBLx83NGWgpyh8YftvzDaHGjXZ6m"
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
