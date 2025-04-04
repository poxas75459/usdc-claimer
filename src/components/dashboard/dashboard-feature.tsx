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
    "5jq7QzaN4ii5o7Cv1a1qQ2BQP4MgijvMgpYQJ1ULDQvXM8r7ngFrP163TvtGvWJJH3Av65GT36moyxsMqw2LkBwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2amR6X6uav3NaAucmmjhMDVuTgEA8eWa16diUbcGKUvctojB4QzcTovcZ17Mbx3MpirheoNhUhkvJ6S6fL7PiRKG",
  "key1": "4kCH1Ut9jh2Hb7TNt3gBEnhGteZEoPb9jR8c3Y4Hf4FrJmnubVJrPhUg9ah8rbcXU99qy4UxSu7qCETDCLjMdR5P",
  "key2": "5J1DucZ2d9p7WzLwu7L6MVMACmfu5qsZvrNHejHL1PbMDfGcA5n2FwNrWvSYz8ZP41auNFAvneoNfCQXQLKT5p8m",
  "key3": "4By7QxQ2vwMCzrswmCn1wU3nfkAoaMBdRNU8HyeJc3ftiKS5y4eTHcJhMyhk1pEG97cb8qYSQ4UnEaDnPub3sUjG",
  "key4": "5qoaFV3GYx4bLcG1LFBj85TyBjU97vvVcKYrrjeGVpt6AEfaZfPfTPyMhY4HuUSECRcAMsYYKHtPcFDY6ibMMBnF",
  "key5": "5WREs8mEFAuBdTm2R5EkshA7sgt3iWr2KrF41gyk5ruSiXNhUL1tDMVPVuDsRwNbdHV8FM5KZk9BW6GUqWBKjEky",
  "key6": "2vZPLYsLf8EmPovi4CXjKkSZEMTZ1u4gmN68bSVBEWU7zJqSEajj2KyQ3VdV6o3VH3jNCmaQXhgV1io36s9WosrJ",
  "key7": "5929R9fchEQW1sg8FCZeeR9f5q2rtuZJnC9icLsN1UkuGkkXvkpwyHDT6hzXg6sZEFKz56qqXPJXfoP7Wq4Ue9oQ",
  "key8": "2LmEmctosHMGtfqUgdwuYwRHA5mp8Vx6ajbCLGt7JR71mL2tou9SaU5h28VQtQZbo7i4ZSpNiZ1pRdxP9RpVXpWa",
  "key9": "5xbDZeCK3X5xUeZc52DYC2TszLXozQSQShviYUR5UGbz6bBnjYk6MYbgr2Scrrbm57Up85qY7oNJoPJmN8L2UgPs",
  "key10": "4LmMzrUpX7Grx49LP9FYMRPyBBwoJVsjG4JTk3ja2JgxkqEw8ZgwKQUyyhbUwg4KS72KNgd9qV4ThSy832jJpMKw",
  "key11": "3v1Fwxt44WEbM2qqPYNcAHcZaU7AMoYAU5VWSAmfbQsiPYEzCEw7QRktkJT3AsWtn6Nt3Mh1joM3wcL3oECRiaW",
  "key12": "3eiqAf696P9MC6ZmcF3t7dPM3yLP7RMu3vxqGF4RfNYpH1Ai8j1BEbvj6N6yikZgB79P2pBSWr6QKkhFXQ9Yj4Sh",
  "key13": "YCHCAJ4HnrboSnt6usnhZkQsAnScZPypkSj2VfBZAFUd1ZJoAw6NrzWhXJvyMcovXZXVK2V8weMuW3CN12Vr498",
  "key14": "3YN9y6KuhJutFWSnu39dstG9RTjCbqpeYSNF55JXwMaWoXdVgFj5whm9e6AuCFurNQptjJMhMHNTGvqEFEGrZrR7",
  "key15": "2KrMnrCaC5zgrz1T5ChTa5i6y2MYXsatXQi2E1AqixWUykqhw2SY5mQrFkvGtPtPF5kH8qrB84cRn6C4MZLq66Es",
  "key16": "5ZVyKqiGhXrvdPRoofBzgDgsDd7wc8s68DhaV78Sw9muPEK1c56AcmXcJ6hQpfUbesXzP47VJgZQdPhthagSpiN9",
  "key17": "Kxza6b62WgJpcWVc1CXErNM22K5zLsbbqCe8FESuVBb8BajP2AfDcSCpHSGrfxz32fu3cWq8uxt6379mHPf3HKx",
  "key18": "4FHPxyfrxTqJmTXw4qkqNDSAqYZcQKBoxhtvjbn9PrwQdXfBPKTx9G1wxSJuxYC3tpcCy3kHFnenUDujL7oBBL7u",
  "key19": "QbAUC7LVhR6bGpCSjBUaDYfnSi1kyjQP9D6X6Me29Cbg2xpBrUfMDQq2XzcdzLh117KLwjn3dx4CpweW9Qd53QZ",
  "key20": "4euWMoAg8mPj57K4NdP72MWK5uZbLusrX9LogYysPR7WBwdEGrnnyQnj81eLWBu7wXUK4q3u7gZrLh7rYsnoXiLW",
  "key21": "4xBjUUadv93C9NCgXV3o8NzEzBVfKwvnGRoxTorkXhKiu5e8vEiso5p8VwhHzBEstkcSQhphptdWoNDWuxSPP56b",
  "key22": "5WPbbqV2cSHPaRRs6f6bqJg22aNNkq5kCmZbM8M3rTF4LrRpwM23MWLuHbFwER11dh5C4eiaqDikzn8Zwr7MYbXp",
  "key23": "5BGGYA62R8nrfwhdRRELjHqPM4eGNKMM2drekb3WucWjL6o9F19itRNFb7pf77QYqWnFxxzWWSiqAphWQEbzDCEo",
  "key24": "Nhn6y38r1tBUg3SJWhdKuekcdEknQWVu4LNruoRtzDQQJdJs23HKPidgKw4jKjRHGRubJvaxznHGef38K7kTULA",
  "key25": "4MGLYDtL3UZepLXwXZLd35qfZCPgJFe97Q8SUojt3GZbf3gv9gqQL5EoykTnHvL29KYV1LZVvXmX559Cs9QRJ6wx",
  "key26": "2wGUv2b8kGNX7WTLYz7MryNBeD1frYMGMJuGTjTKBfLHpd8ChX9ziBPLWkahtDA9yrdmaVqyGeT2hMpUxbT9B7ej",
  "key27": "32iuhtqFQSxpTAhABL9i4P8EZdE3s4J1gDcSXwdkeNdcADs1V68UbNyiw8NtjKDPE3mDUfE9o8xJjfP4Tk6KckjE",
  "key28": "5Z7bRCZ27aMss9MssnBKiCAXMS6bh34gmaiwsSuLeJqpAuLjZGgP8hL9TLSgbQzogMv1ZkUy6YFs6YmCL69StPhk",
  "key29": "3QWPrXgaySUBGEZVM2AGY43N1bRP2uHMQGjj2xtbwbFTjnK2e7ppsT2UDcnzrwuqRJJzHQfdSof2NPizCA17fwHb",
  "key30": "3Q3qd4ZtB4eCi2PTADggWh9mg4trLPjCq5oF9GgM1r9Nox5eCMwgxPvdrJ86uvfrvAMJ12dFJ4XvxywUeb3u8Jy2",
  "key31": "5ZbLFY3zSZyT7UQ3hu3Hjrb5tdqPSBNK7kQPFVgzzZ4AKHCw7MEM2cLiCC4DJJWNfFc8DyCbG1jrDTX72M7nx1aQ",
  "key32": "4wwHaVahtBGBamRy1BQXLTqDQD9EAFN4PV4MVUEJJGZmMjTxNThxZLWmyzcJQ1wAdDwzNw9oaGypyFotDCLCNmmU",
  "key33": "2CDBsEsUSfwNMuG1GR1aisdbdssh87vxfhFRTzw8KRthNpLLctmPq7avPesmgQT4XFtS53n2FajbpGcob7LCscZQ",
  "key34": "2oBcekLjEXV8PQtNeJJLKaYrUtXznoVQNxXhEaWMPcVYCSVKv6mLRkUe4vdkn4jNuq4c1x6Hstzr94yBQd1PAmeo",
  "key35": "2P2iqWBtCzj7XahFnXsQ8UerY2gRctaQoAMtL75Y67KxbzrvN1xchHZw9P7t3P8XpDweUyJ7QnD2W5H5sADUDFxL",
  "key36": "W76BnXtraapK5Nt88tLmsNtji8SrgpKUjkZxE2YSytdKPjnjvrp6Xubu55QdM54QpUwCXoVm9RM2PB89m4VeCvb",
  "key37": "FdmzPS7PJhMh9PFb2THZEtgKdeErCnJy2fXsNwfFtRhyGhzSW4ABEbXmu1t6zMasrM4PXFNUEGhBdp7p9WVwgau"
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
