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
    "5jgwPKz1nQdfuqNaBhuD7oSnbHVnro3SJLzsPK5jzoPL7Eq62rG6AaoAKKCLimysTd4h75esf3XXCShQYnofW82n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VBntHx75XhYrPf321GH2SFBWo3AVT7EZwmANkCs4tdQBbJ265Kehe9uaVri5tiRM3gRE6raARmp4wUsJgDkpem",
  "key1": "5Q3yYcod5nrsV2JtEvtBvv6hEnW7wUJG21E9LJMHkRn7FYnNhY2sMUYrZ4WUUoMDjubPHqULmVcfnTvBq1c4XnHn",
  "key2": "5AiAFFJamxVgAe1p8Nfu9y6dNEzqCvyLjV9qkeuUJ4WXis2HdqvEiEoUSAc3UKrerwCndTU8Dn7j9DHaS7SvnT5t",
  "key3": "2FmE9pCEdWwncoRkt1VSDaA56rCnxkctRCJWL6BPjgiqCiuEeAw5T2uVJSHdKegSd475iQcdMYwGAZDg9kKG3YZw",
  "key4": "4wUsVJ8XBbR8My9GsokPt3io8b2dQfTbJ6L5zjg8xvnLYa37kngb4AjmWZkmDtnWJuan6YjY9LFLd6K8KrLV1CUk",
  "key5": "3ZdrouDf9GbzKKozw56vfa4sjnFvmew1MkDGqkYiJB1PvE6W1Pad8BghGXfFa6EgDfPHwVYAykAWY4m1S4zjgJVC",
  "key6": "5C8y2MsTvSLyp8iNP2ZhQuDR2qftAmD1AhxhhZtsUxgyJddABkiDzetCvzXWx1ita4TcPPU6bx5pSHjA8hFKxiW8",
  "key7": "2KRFxzGzGNa2e2fXvcAF6c3FQbGiUDMEvQJVh1Xm6KCpriNzp8Uhnd5xV1z7nkqewhvvxmKPgXvnPbXMsNGv5TVC",
  "key8": "46WRHyF9GY8Qz5cJJw2kK7kF5P7UVLvKehqFm2gkxiibdqL5m2DYHPsKHGuwjF2j3SzTVzKMUDgASCJJqTSjRD2L",
  "key9": "2vwCiibge3MKawzHk9gCat4QcpsvgvCnoKJ6E3i5c9f9LHd14fwF5Fb899BhdyvxxGmR2oQBkh56fLvnCMmbM224",
  "key10": "4zwcmZPwurpnMBDojVe84NgoDfnJiQuuZRc1X1eJynsgkQp4a4yUn1re8C7SSNHAH7zCTnwDCzDmii5Egvzv7SU9",
  "key11": "3wvGGXvVSVeDR4kuMY3TcJQpbi7kUTLUqMQtqVPk1am8qXbkX7axqzrVUcFAdgBz1EdGkbPqJFXc7xGrvJPeWoRz",
  "key12": "4BMhWfi7Ds7Pq5xi1UWMEynBwMyDCa1y3qZN9WaaKPNz5k58XrEWsasTSzxVyc6HSRk9YAfKSfpt1HcdvczSNaF6",
  "key13": "4wuY9mrrJoP5ySYvYtPfYPWj5wA6iCgPPT3Pw25LqCH5abtz7V2YigPUfFqf6oBXn3xD1GzLBvpqXcwDkqehVZJm",
  "key14": "4kwYcmgR159UZXFMCg3ZgNUookAKNs5aYE3WCxbmpMKc5RmGf9HSaPrbU1SwYYbFQdZaJeZDjQkR5n5FSKhtKhLn",
  "key15": "2KnbwbFq6kDUBZQZZ4LFgbNv6NR1nwBB1zSXokDGPMvo3LS16XzUEvENWm8jpCwEXrFYRpaJsfyEcDEipp3wQipj",
  "key16": "f96GKjHN7v18myWcPMNrPmLozSxAV2ZVPQzBwdGGk9QDyNAuwa1KyuBNWCft94TbNPwX5PNya4K1rPp7xS36K3r",
  "key17": "2otxdQhFmCmQX2DnVjCLGDMH6Gi6UTVhShPBcn5wdVfjZWVeNK5LpHQgvDFUgv23Jwo1E8q1p38rcunzD2Bo9KGW",
  "key18": "2QRpx3u5GcnCDNowFvXoDuPCsB69RDtBWMEtvrmBwbCjse74TMHtUcckon41gf23ZSqDNXJPoQGC1AHuWgZnCNKe",
  "key19": "4vu3HvRhhYh84NnUGa1fqF5TyHF82DwAijKDxdFktYT89PSqvQfvqhAywp1VqNNiN5H9ZH26eHexoWjSYueRLdsr",
  "key20": "2YVv2hfiuQHiE7GKwDJ1JwmXHkWX5BQq5QP1jN42qPmjEJUkC1dc4m9dQw2ayd6BuxhJA6C23tugN5J2iyhcMkPz",
  "key21": "5vMqRCvR96QPw2BtK9akfYWfUhVBy5fKyzcZNpAfL9qqyC9s66MLJQPijeSREFoyhrh2voqcR27a3LXATTVhpcY8",
  "key22": "45G9b6zgGu2CybREmxLntysZ2HZy59faWtqZPyryaUiWL69UUKsJrKuFsSDWn8VBSRXfDnQbfs5sfxRTkAqDmhTt",
  "key23": "3rsgXAbma7juqSRo5dLkDqwJZ5sLLEo5ycGp2r9kwWHpNtFmFSD2ZE5MrJhCEVJT3z7BPUBSBfWe1RDiVZsK2qpT",
  "key24": "3USiR14NHQkEvext33Q7GibuyJkiUrNxaajfiQnrUHz7nqrLPs9rBofbFWkCAc4PsuL81AAHY5UbmRiX1y6vZSvL",
  "key25": "5MACTr4jyTaRD9o1RNPuve2VRBMCjvwhj59muv9iH8opigKori1rhDaqA8DsoCbaKSNNk4Fycsz8Sa5hhgYjP7Va",
  "key26": "GcEBaj7XQo3hp3P4iZsrj6jv6LktuGeggVTgELLNBWeN9w7jqT3ZoJhFxfApVAsyXjn7xaNZbLMKBX9MtVNwXkd",
  "key27": "224JD346Ck7MUmWeGJQJvhbr9VE5866K34muhFhzcWavW3AKn5UiYC1cVLXNiFYuACEuYQ5NMbYPFoyWxjisgDAQ",
  "key28": "dXSjFjX1Cu6cdunkMETGoREr659yfLyPEhoXwb1ZCHQGG8NQavicxzGbT7UdMBB5JYUFNN3uFfrCr6yKtg65wEm",
  "key29": "4L3vABpq5yKmDhyScQBsKrGvLA2NrpFsRtm4zc2iy2oqXA6BeJrZZbfP2Bkdm3ZLUpkX7LNtCreSbj5U9cqcvWPb",
  "key30": "3MyrwakiLVYgXjLPKxQchCR3hEV61pAavN7DhLeLqYNHWgVyYgNhyaqHzEm9jJu6wP5jELzjVA2mvGemWVZu22y3",
  "key31": "wxZY8m2o3VjPjJTbSvU7aZzcdRmnum4vdhyCK2kmZ3WXKXqnd2TogbuRPGF8zfYe9PHVaMLF6XMxdYMjdCvZycN",
  "key32": "5NTUiPkkezdcp4hDsZCYfkfEgT9eVsna7471V4vjDXAQeaJeGWWFpZcqX6pbQwU3SkewSHgCxsw6RQxZqmVLDx9S",
  "key33": "g846WSenaVkvNiJVYtcULodnmAU4MrdyWydkAMnyaiw82jvxwFZfYvWryGa2BXM4wjH6sdMo8jspXp5khEUjqtD",
  "key34": "Sq6qu9UBz1A9zt7nXWkyBHhyphJtLQW8jrn7rvUXQSwAfwCHuTFaeU2QWCehqTBHvzofFKbv4yeGQNWizqou66E",
  "key35": "5Mt1jHirVCfkRYRRb7Gr59xjxzzGTFN1hd1tdJnDFYSnMb3Y336Wcyi3DtUdvhLUhCMFbSmWpV8jUhiAMaEV681a"
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
