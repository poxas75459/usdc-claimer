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
    "kkytrpRqCp95Xxxnx1MyMm59CH2HyHxBWFsn31BouwGiJTf9dHA76iqikh5i98YR7bXMXt1YQYmXEk2eHtpK37r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPAQof33Ypc8AZ6wrX25KwBFAmy6CFrHBRLRDi1wA4BZYNpMPyusnS7iuDDoCcXatqJaqxfpVqxSsoJJLXC1FrE",
  "key1": "3oFb2N5HNXmTKnGS1tUVXXsTG4h4y9P3Z19uu6dh32XTvXo6gvcBjrZB9w6f2L6DXHtJRP1kZTnfoLqEbUtmB2Cv",
  "key2": "5Faq2gdoxzhvE28miNJGqy7EHvaFBo346d6twBKUWPRfkR1kTe5LWQmxvngEUPNWFaRtNPn3poU8UV3RoE8xS8Z2",
  "key3": "3hVV5f2CYSVfkReVPhh91XJLZgGHkjrYhRZaHuwyxsqoxsrqdUxLVRLufqEcEv8TErNQvrmuYNcaDWPWrsD9DUuj",
  "key4": "64bNMocDiBKJLEhuEwYB66BaLmpomyMtGJ32vpyERSh5BJRj8zsbBjAXeAZFkLXvqGgeWhD5CNMvMxxyQ45WUdvA",
  "key5": "59FfVXp3qW7mUgksiDHdbk3PMpqd1YnnmXAuYZDjJaBMKGBBCMMc2pdVLFoQ32K982ZcrPkkFtgLBSbrCisK4vbe",
  "key6": "4bChSAgLd5eyGysVA4YxzgDVYNwNfxMwHSGFap4cK54ybuz7xzkofC71NWxPVxoJsD2eMTq5dXqr1GKiY1zcL8uU",
  "key7": "5wHgcPaThZgM4T5KFQbjXUsBorxt3cJwuqzrAzYHAuuhv2GGW4on4pMPkR63AwhhwxgipFLzHfusP2zhViJG4iFN",
  "key8": "3bYeHxkjC85MwqkHs9wFqHtk4nn9WUt37QL2KEPN1czg5znWb4uCoU9d9QGVc7T9CQpj713LPbA6kTBnYuDtDjuQ",
  "key9": "3bkXRhkAg1SNow1aAtqh6XoZN1nUSCxDJ8X1CEWdyXJRDrunXicidBL6h1mgMpwhhsUTRjkfK15djQQ1Nq5YrNiR",
  "key10": "4ASa9r5M6Htrfdsk8xkmANaiEKta9EpKUhsmsLP9BTp6rBYcTRU9Lf83pAyZeHkf6KNeDGC7ZBGEFiiBCcnWqfrG",
  "key11": "23i9Ezz6Vqsc87ajQNTcPn9J5TcxAUxNGcm43f6psTJbReadQGiAMbnCordQgvyuYJ4jDZKqiUrQ1RstLC2EF7Dt",
  "key12": "65RyPTDvc8FyankaDcTnkNRdddGoqDJy1dRkV6XfqLEtYRMGRKevuHQoeXtCtSd5aQ9bxqz9YP6FdJHxjf4y7b1P",
  "key13": "3i3iqXEPikztoGiMCWER2UqBMgcPUaXBfAXAqwMvzmfHBfRXMuJNQhxRLGXuX7JJeQquZRGLQxThztKv8EHXhVpB",
  "key14": "M6b9hUaWr7QRhGEQEJ1qGNUis2xrsvPUv3LD8To56163HcRvyzFtc5AQWuezVKJatapiZRTL2qhy11Sk6XYLi8s",
  "key15": "2km9V1BE3B7qxpxUpGuTpX7iEadTJxQWcrtoJ2P7Lz5mXJL2Rp6cr31XtfgqAQcG5z4Jt8ViQ8ekgxTCUGej4uni",
  "key16": "qJcQTrDyqqKBPpvU4C7LzUHuheuyAzc9DY6ZbHyB7GEZjfKHC1MgYRGPQQxhMsuW8bxXkLiXUMkSzAsp7m73Exb",
  "key17": "4cEbdwMCBqLaE67hK8vRe8Thxi3xdfshcgQv8pDqShDgo5KECMMSet7ztuCV6ZmrzxEB565U139y6GMCK1PYFVaK",
  "key18": "DyewgdsXgJdFeBfHx1YzyhS72dxmketcEtDP1SoSuYQqbc3YnBcEUKqmYaSSBoAkEUygufDsbEb15YLeN79ngTS",
  "key19": "2ZVsKQexP9NXeUrfZewNphBthKpL5nKhqJc9ckeU9n13xJsxVX45QKzFYGBpt7R3n5Pg3Ha7Lk212LVxPLabBwzK",
  "key20": "5xmuN7Ru2tj1EVtxMCnhBJN57cHPYvQeQV9RcRd5XMtv822BdDNJgE1kB5QERUS1rNzfZwat9kD7zawAsd5ntbA2",
  "key21": "FHKr1Z3qmnkD5ojWw3YPNJGqWbVrfxbxPrA1hGe2bYG9FQYV3yRx8KLqNxPyuW8st12LNXS9kuncQkR5nk5U3Lk",
  "key22": "5HH1WYbxKJXCGfTdDN3LFUd86ohtNmiEJhobEn4hR2MRprzrKzVX4GJrYVZ9PtgxHxDsPVCeVuB5yWjmJMQTo3EX",
  "key23": "2uSZZ5xAmGPoLRvMwjSR6EtnKVdTVqRwWUWCxTY1VnddvbcqWNUaQ7WA3gKiWssnBUJXuRHgteicZKo5MwFPaUfg",
  "key24": "4KiWbqSav9XEj8ygNuWTturZWuLCCd7G5x5yGyBAGUUUyc2V1BHqB4F19XnM8VSq3qDy9FQoo6SPE62cevJc7nZ8",
  "key25": "TaYzBpZEYPTQisVH2qZHZYBXAoHBrGQpNeaGqNLBevuYt6NoYdbfceYXn1zEfkJuNVKEpG5cgarbZcYaBMWCA2m",
  "key26": "4hwU8ts2VeNHaFqbWdnL5wGzbn5DcYidngGvi931AL6iDzvfGeb2jR7qcHGR6Ab47GrymJ8MvqeB6Rpza3o7He7n",
  "key27": "4ZbNi58YouNCxNssF1FPLkmS4DiKDtHxZgPgLaQ3byDJLamurrs5C8iavcXH5DRjruzbWwohUyhJer5knEVFsm7M",
  "key28": "4teD9vhJ8GMJoPvCx3guyR5USSZ9w7GGSwXMQHpsaTemwdxePW6j8WpmYXbmBDYCiANew1xzgVFdxwnPopiFZAr5",
  "key29": "5T2G9k4Wa2Cx3THecynifFcciJMsEtYPWjuhjkJTrcUjYsQn36TbkZ6bqZC3wFvwreiMcnAaeBtkpaajh9cdhAhJ",
  "key30": "3dYwXGyGe7cgKYuG4iduezTg8pfEWXd611aq2cpz1urBYH12CCQnBZwNE2WraJVzFH85KWR7onoLoVsyUzA74yoH",
  "key31": "3E4tRD2eFEVB1awFhbnDKDva1RdX3TEyxsKu8CbwhMwrrkCFFgu1ccjbUeQ6vHSiJpPDaHQY8gaqypXE2gLcsukS",
  "key32": "34KMCj8FEh2YKckWEgAyr2sWCucxAqPbPBDikyx2KQsLeuyJPT9tyFRMtDZL6HdzGfiqV1Z49F5iiwthKjtM8fgh",
  "key33": "9YUnUd7MnkFckSPvbS3hN3w5SFN6wyfoi9DpSjuTUTrgsXXWzRLhUQn9oyrzb61dd1n9V6L22voirwKMSkagt7t",
  "key34": "ukRR1Z6wqdiQJadeumd9jJBJHRu5w58TEddrx13MpeQgXm1sYj4LMPfotCYYa26qs5jCC4pfPKXteqM95sWzyeo",
  "key35": "56cPpmHpeiojo5sRqnGP9KJSN2ePBgqd6ovbMpuEJy3SDwNLmDEVfNgWAi7vFaJacpbjhQu6j4HNXewgweviDrK1"
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
