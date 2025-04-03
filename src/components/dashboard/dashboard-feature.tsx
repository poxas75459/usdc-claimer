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
    "4DavRgJcKAmQ2ba2t5BC9hCgk579cT7yXmW37qeWqtXTAMC7vW4QqaNo6am7VJeqCxBpTR7SZDZ7Xg9Uy8BRWYcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnuSJSo3qpzw7eJbpx7KpY3e1fxapgLrZ6ANhsoNdjohU9DMMoS63k4jJvnSY6rsQPcEegZsXT522PqpGnDonRG",
  "key1": "3SmNpcPEtYNUMpGAjF6bcE83KwLCta3cTDqrepGfTf4QtEhdPBxmbKvftSH4dBrTSNDGVy6pRymuWvXEkVpvBBWu",
  "key2": "ucyv4LyFykP3UCiY7CWFTkNpF6sSYhDQCy86UCKFwewMhTuvjjm5arpJ9zryvysmYS66WfckTdhyUuvApJbgqef",
  "key3": "4TE4F8wAxe7GcUYHGN4cxTDDBwsjJvdPPdNGEvf3tBL6w3wFn6XGEi5fkootRsLxMkHxfV93gmQTeXRedRdUDwNf",
  "key4": "2BVWm7D7rBCfqYyoQpnReTkAA5asccGP9Gw4s7ExixAdpkJoXzPDw2pVPEJpToLCNuUT8DpDWb7xoMasGFMk3n4D",
  "key5": "63xB5qZn9zMquDgxpDTCMQTgmr7ayKqkAyMCc7RVPse3rNrUGzU35izLoWp2KbTRsCis782AtCtML2Y4wTv4LqHJ",
  "key6": "4mw6RCtBN1Zzpti4KU7k6aLt6usaWuquWzGG2BpKR3ri1pFj4tAbrkZM5n6ZP64GsWTf2EM9V9LU79WWv3m4Uafp",
  "key7": "j1X8zFUPiT6vkGGMuUS4kViLmyU19WmCMYAeMH5NWfREHzQ5UZYZFk6sQ2bXVRXwTg144WWHGnhFcda2qzrY2Xd",
  "key8": "Qm1Z6DL813wXSFYszDL48cNBJkQv6X4ogQs55KE9pzjLBrLEaSLTSxHr5ETcvSs3DKdJxdveq2X16oVXhxRqjYL",
  "key9": "3nRC8cB9ZeSK9yDeCdNSoe7yZB697SZB6WUHETvQoPcfBnhUEEPrQxWBRNbKdtt3cyjqA3GV6gwBFzvXzUaBcbat",
  "key10": "qqV81ycTX1xnWUASUhiKCfK1GDSrWHmtjbfy5EtYKHAQWjTgSEk8UYh86R32z2naYoztGTpZzo1g7yRwy5UY6NZ",
  "key11": "25pWPB1JHR8kfrCyJa6goU3s4g3EQBB6R2BkBo8SLFSKY2wajmijSh6GodeTAZji3bhi4EmXD4f3qpqKNxAPeZKE",
  "key12": "2tjYj6fvoSaRQE61YyZ3mon1Z4iubCDLPFMrDAVmjYhDmQxTbPQAVApfYEL7oUfMgUaotg6C3WVtBSisFnuKYv2Z",
  "key13": "5gmLhR5vLti5pREpohPJSMCjWoqsh2FGXZgR7b6w2DZNpNmAEsrHZ5f6dLfQBBnHYnSgLv2KwudKKXAkjvZbAywj",
  "key14": "jFTTsBQa9zC86Q97VdXmBcDAjV7zYmW3iBxs4u2gYbmcTvU8tYpfFaSTk72246pRxW34SYZRGkniuhAYYhbrTfT",
  "key15": "28XGH1PGGMkgfS2Y1R8Liu2if16EWGa3oiHRfjMJLGCtk6e5XzM385xrKNKK28WWY2x6Kv77DwDMHJwmzdnVZ93w",
  "key16": "4HsXnqX7PVNTz5fKeVCarYZcuAp9vWydhNyZikc2s82UdBPmiF6PrLL8rT5AwNHkvCJe1m5JxM4GRwyFE13oEz8R",
  "key17": "3eT2Rrxd4KYXxLRFzAX28kZdMfH9YA85QC3wyhT2fy6gyiNhtiHbW1RqtWkxFi9ep8Emid2FVzJoouEWSLN6JoPA",
  "key18": "4LuHsptiHmcBqJKtdkGtXwba8ur1LCqzX8CoQHqU1iTivD8nWnFb9UdkppEMm7Xuhkwr5w8m4rSaPn2BfwnNstNg",
  "key19": "2zQSDvbkU26z5grb1TFdv9W4gNgfvT55XHrmgPT7pJU4qitWkqfu4nL4NTnVMqYKbAvqsWzby31Co5we8KvrQLnb",
  "key20": "3DAnzH26TpXgwzEgSZVsEUVJcUJwUmrV95UuRxYtbb4k3B19SSEgQoa3BVdvjbTd2smJcuUChQX9tDzRA6BRNkx1",
  "key21": "4eWpccoDXJRDor487RXQEPbDvqrDiYwPRNn5wcvqHo4MJkYHwzuT57GN8YPYsSUj8DiGiTog85kLvKKxzXSyy2XW",
  "key22": "cBxppv8gGHLE3VixXYwQW9sXEn4h2pBGC3do5dM24iWkg45R6KPxpmVoQhvkBYeRUAY2MEUSQpYTvCertuno8am",
  "key23": "4DfUYFsnF9dMo7EeDJjbYfMa38XTLSFn1j34CVnPLVvQCXqV9jLnkkziiuDALQ6ete74izBb3zPMVsqdYbjm4UHX",
  "key24": "2zvg6BefeMwzPDiPeH6VXUwqufrKuAyE3Tticxi7DRWMjcUAdePa84WFt8tT3onzFxQ64CuWaQXxxtAuFhQdRwfa",
  "key25": "7RumLYztRMDUZPREX8gPrzedXTvNbV3MuvWMpPeKwQ4D9n24SC2Aa8tHRqsLi1kMMLUHq1LCSgc2EgramewQ8ra",
  "key26": "42YsmMKNYvciTkhXExvtMc6e5NCozTQGCnZffr1qR2Cvy6h1jLArqg8iTNMhByiuJoPUuHK5Mydbgv6h3MtbZBeJ",
  "key27": "5y9KH7AYNiAkNEk53rSJScAkmdxEsoidEHi6kJZN17PP13oW5LAGr76ojcvM4BJsp6vsZA5XBqvEVkN5dHQvKxkc",
  "key28": "3djDps7f2Crvqsmz37ARNi4RcCsqKNs3jPFvJQkSi3wEjKkK3bNYyHU4iXjP2wGE365ARTxWiS9eMBe673pctsBm",
  "key29": "2r6QXWCkfJ6kUfn5zsxuuc8KABenqWPMMQZ32CytNZmphFVkrpSK3s4Khbm8EiNNkfo4wPbVxnLyUP6LrdswYRYT"
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
