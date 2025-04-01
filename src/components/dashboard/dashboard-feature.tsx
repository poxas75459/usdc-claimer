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
    "t5mXMP3LKrgW1H8HiNpXfe4HH23JMKRL1Tme88BU5HHsAsxZRa6WCbuccmyFoFLRRSTjPnY8wqv7yad3uJ9VQu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arQgvQVKuoLVcYoj25AqBRDrRw8QWy994YyEkb1AaK8w5gRwEB7JDP84qffW9prnrtcjSKkCJdDm1zAwy5gymWp",
  "key1": "5VdM32ipZ8TJdN9eX5q4rhLnGzbRCE2rLS5xEuhUbn66N7k8Ku1sXoUcD3wio8iRVXnNJJAVhj4Up93U8vNrbqcE",
  "key2": "2f8zHdqPkResNeUpzag5EMwFVTdC41zj2k81dwNVyzTtsknkL2hKZkZaMv2yywZNsoEQDyJWeXgBxzR2NiMAdG5H",
  "key3": "3bRqsqZsEWRNa8YDyYtp8iqaMQ5EsMH19e2nF8Hwe8SV28QuUF9hrARwxts4GxkXEV4ixKiz3C9VX62RBWVmQR35",
  "key4": "3oReb3EGcMcuxpLajCbC2J8t3kn3WhYzDjpJEikaJAnGtaNk5pXvyf3mgF8zrzFUZmawSP2J1H7x9jEiTLJx3AYV",
  "key5": "53dzGFR7PCyrAbMMTDtWGAetXnTTSx4Ho1SQ5oszPvBirRGVT5KmEHmcZMxd5GLErw7BNgAZPXadCNJQfvGbdzvV",
  "key6": "671NtZmEqb9HyKFQU7fwUkw9TtWwrq5BRdiD7YFw14xYQE5CGS7oHgpXzRbYwQXMbz3dom6bac1Fz3DVB4nYmBys",
  "key7": "4mXj9x4Rqj9r2aQzPh9gNETxxLQKxP8NkUiqEvsET66QPV9BGyt7qrM2Tyvbi1W2tbEzcogkM2FG9ra9PeST71qC",
  "key8": "5NBsyqWqwnr2j6g3q7LWepjMAV3PDxh1BHDQ5qUZVY3sA6dW2t7cxB1McfcazNsjN8CH6fsboKbnHmELkW95uC4R",
  "key9": "NBE673i7BkwQyjXNJp2pxxnUT7NpVoBQ3wAbTvDFtjwCRCED23Bda1vL94Y6qQeM6vBN5mfthZhrfpCcLvNLN63",
  "key10": "2PZWTmHnWsBqBy6VjQsHVjLwv2EfazAGHoaU5Ayat5i78tg82Nyo7BaSaFD79g6AgbfwGMDHoQWAq3eDeomDDL7p",
  "key11": "56UTzgRpER4om4BrVysG9MJjPfmTkFs4cNkZ1NHPZp8SDRKwvJhnqQkuR5yPc322JGySgKk7VgZBXyYoQsx3mcFV",
  "key12": "ECTuMTSGYdzrm1gPtF1dUwBGb8mP3BPHvGCmqXt3mjdwfBgsqoWTNnCdnr7ZsbqVx3bBSCK2pLTweZ1ssCrApUL",
  "key13": "3w9bKFvAZNYhrxeipMXAGu8s8R2fmm4WyDeHegVDn1N4PtywUzaTUJ6Tyjqv75MnHyMBdepakBjmJsyDJ3knYogB",
  "key14": "2162UKQULSYjM8gtCkxqLg5xdcPALmvXNjdi6egxM694T9VMQygEXRHA8t88wsvneco69iwTrNSYbWG3vjVEGKki",
  "key15": "5t3ezzgtD49PFhTmXTGsSUaxXf3cwgWgFZoCEJ34vmTj4WCkHPGhMiApQFh3nsm6SUHUFaefd5MRVA8u2TdtvvNj",
  "key16": "GfP9QNLcREpA7F1ZZ18Sk6V8b9X2FsEJAhK6LSgPfqbbiSHHffvZRhwaeb8SuDgscjAuHn9rZBGx8Zmdxod3J5i",
  "key17": "3svVz5uT9ehNkVCaXwu96p25uURiDLL28S7aSR74Gw5C1ThVn4hgyR3YDLfaVCTVhqke2BwRu7v7N8dZKwBFoMja",
  "key18": "4eqdA76bWdVdxtzAXAzMfkPhAPtNE2ggwyTeNXsZGFRWh7yiaDzed3mmVDyWKzFRAVk36t3HyV6nNrp6JR6NbG5n",
  "key19": "2ZcnD2sBQf4KTK6DQNHcMPaS9TB2KBpk3rokcbW9RN97ZVNBtvqerxPL3FF3Tm6Pk2mn62CYSvHrfMURXMjtwX2v",
  "key20": "4xkB4vxh31mAiLMjTR279KkgwD77TEY44A3bx5r3bUhcMRZ6xjJ4AtVDtCULcGCZwzhrX4ZctfBLnFG4w6EtM7xt",
  "key21": "2kKo89qcTJZJBijJPtyngthvaHrneE18Pj7PHw4CVRDVcjmLZyAsyGLUxQPLwr5zLovXoUg2Z5gwfHjjcLEKEqKH",
  "key22": "42ZiA73r9HaxrhHxBmUxQnEbjR2jjUN7cCYL4ktubeKw7UgnYS2Gtim1CY3GncM55ogJCTrMg8b82JjRB26MV3XD",
  "key23": "BgegCeWqYFnyLRL7ezo4M7kXkyoPKKte3D8r85Rx5HzUw1peHif8mut2Wmb8hkGGcNm2hvpSLwtRPh6owvoxKRP",
  "key24": "KpktAirBHN5tpxxGYktjPhy8gApPv8ptBdusAQs96ucZ721Yzhmq7knpD2FGdV7BWei6MyU2KkRd8zG5SCSTSmd",
  "key25": "5DPmCsg2ADRsnk7AEJSrVWWX2fjsm55Fqu2QKCA9RNfzfzsPkxiiJ6pNiPT33pX7jknGXmqzvE4LHX5MrUpMiNWP",
  "key26": "5ZpAdrstjaMMDrNRqKjC6pGcoKJvoSdQ2weicDTh7ETGmpR2XEWBmPypuVUV53gNdhwJ8CHznswvp1T3XjeaAfR6",
  "key27": "39FAR8HKfvQSiaX2dtLeLxhyGvAJUxkgEBDVWe964QX2WaQprFz7SCyWMyCb3ahkqbg5Ma4Upz8FXc4mFN9k7QEv",
  "key28": "ABFKJPKeH453SPugkudjfspmUceFYAw5zG1Gv1qTSCY17d9Ma4vFg9ZMGhG4t64hgPvYATTFt91bh1BYLhjgsxU"
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
