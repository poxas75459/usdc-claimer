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
    "2V9ttfxty5MjVttSv5znnv1wqVTLB9vwJUpkT8UqCx8sDAh1kkUTDzQ334X28ckbJXJxC9PKTBK3VijjYMTRMWm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6zA3rdpxtS4dEAUn2GprQ4fnAzNsk73P9fogkpSSvdUSmr55RHroTmJ5ADLRYZQZnXmkAzjh5hLv185vS91sEx",
  "key1": "3R3wcCGAPiMM3Gjc4FpCWVoevQY3y2aGR6nNQ9gTEQkcraeF6xVTuDufRE8U4ayaqF5iBNrqiamgxo3qb8CjZ3H7",
  "key2": "3MKyXyGNmfTXCfdyvo6MkNPEyEfnscCvxqqCzmmsiBEwpwUT5RG9Ew8v6Jv1ShHGtUvTGnuoN194ZoNp5sVGYbv8",
  "key3": "34P29qSG4E2psGKCRcbJkuYwy5scgH6qbX3EUqDv1d8J25eNrnL1ivhukFMfDakqbD3oJgUdZde8h39DZDxewDS8",
  "key4": "2E3EugL8KppwkGGwcYKzmKCPPfwnRGDFTjsm2M4xZfXx8QRGeMATcepFhASALV5GgXDnYWn3g1cpswTmnwmLXUTb",
  "key5": "CMJ4tM79Psyd7kZYmUMLexJH31UK9N2tTTkqK1pue2iahahjpqWF2KyLsFXJgjMWSqeT9yvYKdgayT6njYNfkHR",
  "key6": "4jpMkyTWFeSYEZtT9JzJBh12nEfkGhtiZhBSBjKUVjvwfE5NK2Q9G7xyWszycwfvHobuNr15nSHET3iuzbnXrtpT",
  "key7": "5icwAGSzTewGNqvbkzgaWt9LG379DHnrMX2twjnh8Fxr5cGbqcosVjQ2jcC5Twd4qUp7FdrxyzR2663sHyLM7vN8",
  "key8": "2jJVA8NRurMNorRUUauFEKSuUDWhamtnvFjQCFjdAw4g4YzSqaY6CKZVNxeGSjsMcZVZEPvkeP8bEpAFU1MXFKdK",
  "key9": "GJGTNrWjFwW2yYHh2NvocBkN3rpPBV3eNkXSZmPqbR7LHZisa3jJjLxNTeostrkc4EbjoN4uNZxEpDB6wRB96ms",
  "key10": "5CdoDzUSA1nt25Y3cumo2t9WVEJLzUEBYuykUAJuFbAvSXQTRr9PrH8y7MohgzE8dWZBvcuRAGVWFM2T76ndjikn",
  "key11": "4gLQKPzLmWJbAuTFoYSTdsrtnSWfhDqeAweLugG1zoAweN9PohHZq3KSaQpUy78Zp9ciGwiDnoFBwibZxAcHJ7Hv",
  "key12": "5wJJ21eWY8bwpSvcgUitNYve1uBTHEMUCqV6h4rK8K1mgEhJ115rNxGMdisz4zUFPryvqfxNb6ung4vDhZ9A21A3",
  "key13": "4BB5tpEQ4kihUZsPdzd1uTVPiYn4eUeHiU1eq4HXns1DLEVMESD5ZhRdsmoPbmhS7ZWfZRDJc1ddXHjAKgmB8NtR",
  "key14": "4cgdAcgbHbdETVSzLS84YwPunWMbDV4WM4voH7kohUSKKQ9zhmNG3Y9vGuuxCQrVtU8F4UVU3wcDRmHERonbGZwK",
  "key15": "5tDnz2Jgf1VBBGyC99gvrs5URjtrEpWsSrtqcKKMzArr9wMpUFG53N4BapNxQ9C5jPZjtewEBqqma53We6rNvvin",
  "key16": "29uHsaHYyMksa7XduAn383ApcuSkzt4MgaN2Mbn2ZeizLiPb9gjdxDc4wXpgPAGabPs9dDCrqRL6uVUqBUApRLD1",
  "key17": "2w9bt1TAZoUmwimzAG9CkBXqF94dLgd1eC2UASeai78czrTjBsFrH9ULvoaefw3QRsd9g22oR2yNQEGMHTRiwa2y",
  "key18": "2q42Uc4wtru5oaFj2jwonBHRCrVLMRtxVAhTUGLE4mR6fwpJ6sW7iWhouZSdQ6HrwPCZ4AV45ZXToubunRsfz2Xw",
  "key19": "4XyfELD3S6VStHiMzvj2VQFtZNd7Qm6m78SoEU6GbbsdhKrTfJqWrW4kiLpmiPCJSefeEKHNcGzabwivwqSjCjV3",
  "key20": "26iZjbBbPWuJifbgb952UPvHg27eRepzSd9Hadkot95298v28kKgtJpb3nRJoZhDYTBWU4PbkmKy4m5SZmTFhZcP",
  "key21": "5eTYsZrk5Bi6xxfziVXz1B1G3Nvx8s4uyih9bNcpwczDJyL7qhwfgdbu5GwsHipfuHdabw6us9UsUJASKat3tFn5",
  "key22": "2oApty4mgksdfZqVi2dBS3ipBMLBPAvcGShDFaZf1zqy9hjk6TLSfrPKrE2RXXQus1oWuqtmUerZZkrwZvdNttPZ",
  "key23": "2mcrzVFHx532U8uE6Vo1nobiE6urW1rQAmZRKQDtRn9bnw2KmXsge59cNKRR8phGsFHtwNrw4pDa7FLpSu4P5adu",
  "key24": "3Xz1secnBnvP8iWgLfhv3FPN2dycYEMdNCTADNgbNcVDidVATAtNXExqdYb1hDE6q6artm9cEnSofCDGqtHbQBLQ",
  "key25": "4PAUfRXEy8HU8Xp5PjTzZQW4uR92mNwMPnETtwLxxZxocjX5J9DTYFeA8HhqcV4vWChJggeaX3VkikBrkVV8CM3s",
  "key26": "4RQvAdnXZwvjBFotMqmFUd9caVpv3Rpc5WnnX5DCd2yp7retGeVSSC4WmZ9E4zsQayTzJfEcw2AkzRNvPYbcV577",
  "key27": "5TsVFd9MRkKVcUjV4w4WmiNyqnZVMVfpiRnxLaYoDvyiFQRRUg36YnXwdzasg99NrGygwqpFDpzjLdAe1MP1PhGp"
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
