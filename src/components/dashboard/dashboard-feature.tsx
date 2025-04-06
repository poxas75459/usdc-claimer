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
    "2o46Uhw1MSX2tsdcXAYi8F3qPFuhvqESdmrLdJw7A7N4GvpnuPetuwVvTFKicuqhrpLzVoWYKJd3bwiWbVStQr3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e5uhFpxmV4jc4bFoiBW8umMSK5XBCx89na7Fp9LiN18z6tayHzF8dQRRHfEgfvphwyYQ1tE8NCAdWLNahRWRNBx",
  "key1": "25orPBLjoaMq5EWnHvm4hZqec6yP4H7BsUy9W7Prag7UW64b84kcHHpjFKLyjoJ33yUYREr21tKFJLrG4oPWoxaM",
  "key2": "2NJ8viBf5pxxqfumr5rXpBgs7doahJe4qjPm67BUEj7QswJZM3Xg6VN9j6omZdK9ziiqCNz7zgHbYdmXLbvssyrq",
  "key3": "2Ks2Wppc6v8esEh1keu1JKGrsZcgTYLU5TFuc58GbvQww1fwpmMsaX7uyNBkx7VhW17fRpXMLhxGp1CjweFgusa1",
  "key4": "3TTHFSk3kpPx3o4dZ2TCMngUrNPnwbpgkw2CjggpE9wed42JP6e5Vu1iCb72q58ZYcsdM6nHxVDo2xyuCB1YGDn6",
  "key5": "4q2M3TfR2j7y3w76RQDcrvFpYFXEJ7LUN5jKcurzgV47d6iUuY7mjNhG7fUcAVk8jRSX1U2g8Wtqpw9YJyfJUBo6",
  "key6": "38biK7LEADKzDBrZ4x6gy1CVJMsmadW1KwUDo8b25eXJ8sprzB5FjT4NNsxDvWaEcuRBn1BuyWEPL1mYhFEskTuL",
  "key7": "3UMVhZSp8aiYpc2BpM7pT7NAPRkrp5dqE4S7prRN2KnbiGUjTuh7sKxeuJc2hpWysEATMH6sCi6dnbqiBDKoVHAM",
  "key8": "5kDD4fikr4rKNXkTYnJxy5ZbJefGXpFeVUbdmT7C6vTaGCd8rubtex1WxA3cBfnDhqpp1Km9qnCYydY3WVAhxDCW",
  "key9": "38Ke7VsCdLiZ214917xQXHT8EkEQjMWqMgY8SYuTKapSSwstjCM4VrNuDBQxrBYSiFVmGhvSHQWbUCU9MvBuYCRd",
  "key10": "3ocQpMYuYW8CznW3sdCatDuxKYEsqxBz5wvXAkUZ5LjLq1xuRmzpkwWnVHMzLkShMt4QNjisanfAp3dgqteP3Lbf",
  "key11": "45Q9GzBGJktsUcqFr72a3nPJq4KfUoKG8XPmAUKE64nyeBTV9XhMQux1LXjTRu32GR9p5L5fvVzbVNVweriZpcQA",
  "key12": "2tLMw2ekZhLpyiMDRtTJm8vFQRpEcB5c9YsRYwYy7WxJ9FggAh98J7fcueCefBUr3msKc6GhgAndjsJFvbBEUk2Q",
  "key13": "mRnUSFBAq3YkRSAyCVoi9SsUKCJ7x8nc3s8Na6wDbD3DcyAGuNfJMutYXEbwNRHjGXxgxS6mgxcxftezdTwe3kn",
  "key14": "D8QHTfQfZfXU6LdGgBY3Lx1DLHBaeBxydW919B9FT2ZLCRmumV5ZUwPJFoaob3j8UzqnUj71MBmU8QmXc6E6Pvx",
  "key15": "3npAYu5XHqapkzksnr8j7L3jUWmAritq23ApV1eL6dUoBaSLNBKwjDzw6Qu9CMv5baL5UDg7p37RdKE9TkvqK3S8",
  "key16": "5VLWkLoPapBY7yfqTg2wJUng4L9BNbPpSHLEnhjsAU7hQxcr1Q6nbq6yS1bu1ZgTNnf3x9D6APun2pQZdjVY56rX",
  "key17": "4dCUqBXgS1C43qLdJtPrFt4vx3uVmVsp4CpsShuPFJSNKVkWg3MMyfJenX1An7PVoBvboeN1vjTVRJoipwB2MtxW",
  "key18": "3ciAhzrMyA6k9epF9XJiZ6yoPsDKKmoHqe9EpDmtU6gPm6EM49LaugQNtcJSqzx4JTfBSWceZ2v57s2nRjk7tyCq",
  "key19": "35HqkEPDD624k4qwkHRxugZFBcDbARq1zAdwsHNuaTt8t5hFQ9FnKrFMe7DHndBULbYVXN9QHcL2MM6L5ePKmBx8",
  "key20": "3qzNN6nhRqX7DvEXxKGpyongWkmuy4MXrqUS9taFfJLG1oSA12tt6oLTZuE8GUkdz4NXtgvy5pw4CXPwe8XWrTG5",
  "key21": "55TAoejV1i5ZLXvq2hk9SWsQhwnXj8N5eYMwy9eGRsCyfGcsPbLr6An38pDsHe1mZohffkL7VJCb3XfXJrvsybcw",
  "key22": "25PcYW2TYfayEjyqsutjPf9dBZLCZhfsWHZLq98QsCYostMFTNCMr6Y1EBfa4yY9R8PV1QcLSpzvFdfxbvGNhEWy",
  "key23": "31VivPCk98xKG4pUHX6QTj32Aocy2PKqycdjVfEc2TXG3fyXsrQDpJrhaHfZgxJ3UYFzVNfUAP2q2bABxy81GTRD",
  "key24": "4FcaUWb4duHNpN42qatdLSLD9T37mwPi1K17kmyAXQ5HeceaWjDNx13HJ8RGwoe3735ewzSHhzpshmgAMLV1oh3V",
  "key25": "j63xx4wHT6Ku97dVEZU7FembcgBqWDiV4HSwQq5uEbpB6SokzzNit3WosYKDVgzZ3PNQiN7DSvADDMV6DZQE2vL",
  "key26": "2kRbxiQeoN9oKnAMB2LeobdR2GnSYWq9jwrEXGtpnTDbduWFti3LvjKEaXxt1Ax1AYeK5Y63wdtWoBLLoPNjA72M",
  "key27": "YHHousf3x7tHdeoTaLmiDttjvge12LdYLSLt8iwzvQXyaH1T28x2kjogU1CFsVXHxQJsNysh3EZ4vCP64opWv3p",
  "key28": "5mCG6a3iCHaF8MkwmSCgAHZ9uj6N7JmAf2Nc2ReJURnu9esiFuH8AyjTKrjHJ53TnXKeN79bUwqDJiwjimiGeSqL",
  "key29": "iZCVwJopKT3ssL78dVkgy45HErVXymyXCK3CEN3UUFyFEx4yrKmoCvAuYmEhCX5DN4VVeDCbFbSLfFG9wQ3t7GX",
  "key30": "mPqawnT4PeztjFCoXwnPsmy75mH5CNLmjsYh9JdNhGjRajsPMQpjj1fnWrMduRayJLgJPDDtiZw7HcA7iuRNY9X",
  "key31": "5Tgegb1nMvrMB83Wr4pw6ZLhTYHbqhErYnn5BWb5JG5x5RzDRcQe1ZxzuNf4B2CX9bXgfLPzC6idsRUPS2GTS9ic"
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
