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
    "4ctZRgdh8UaZqNJFqmT4cKTJwwyjJp7PRPetQNpAGcSAwQPyY7xGMfA7mcM3fRmhZnrEkfRX54uXxZi7deLD5zya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4eiodmDbprAxA5hmsbbM37zVMbYLn62mYPYJQcLFN2wFZ9TjQYwfPX7YCyEkec2T52aru8FCndFdx3HzyJqcZg",
  "key1": "2K3brCs42bx2w2Brya4YGkriLo41RaJMoLCj49T1hzQNxxMnaVw7BeohJwzM562kQ3njYNDvUVi2bcNWw4hamNTn",
  "key2": "5ukFdgHeNwaMPKBUkrDoZNz13q9gDcQx8KadQqyMnvgQ6idmXb8xMmGhv6p5K97uYXFZH6ZKAPf4BBvjAaEaqJS6",
  "key3": "3r2EVTMiftgSyxD7vMmfPp3BzjWjcDyBAxfg5hzLtpBQUvn7Eeifygd6HNFpw91tJXrAQNUfYz7QBT1EY54uDxk1",
  "key4": "54om5B3h7JideyFd7mRfzhhBzdpqMJH7Uf8QDyXvQnWQkNP1AkSfFX8RzHVmt9Pyxvr5jziBfLupigiHC3SiZUPn",
  "key5": "bJZd5Fj3ULV5Xf3jbgm52RnkGDxtnMzha4aPMHjqFdLYA9vn4UEDb9vrGvPsDq219nAxA5gP6iERkG9tRDpPAFB",
  "key6": "2UL5EGkiX6ZqCrdWNfxaRC6qSNZfYiyniNNNq4fXnJn4oHmBcoVYXCRTwXeNgWqDCjgKxmxWDU2nKvLC5MB4k4qd",
  "key7": "4t3NWT6zLeoXDbC1urnXoXxvAfmAqMAMNSnpN45Qc2KZcu5nU8q7TWREv17etbgPChXDX5aBPnPYbDbVGqHodmxA",
  "key8": "5PhHVXMR1ontgjoegg9b9TSEKpAcT7L2GN8VTpFWPQc7W1s2UYhPgiX3uz3iqAfHRSSRqMEBfCA9xQAYkfqcXdUC",
  "key9": "28Vw2TJMNgLBqzHP1gc2Uv364uJjPSmf9fayTVb5mnbc8mxKSXKn6bGSLvgaBkx7nhp2vYExz68zfRXfwkbtzyGc",
  "key10": "4rHR9DjmvL3utg5Lu64DvKsDtnWP57PoK63qv9F8cw866zzoqWphQQ7jMutkoENre487Hu9Sii7FuJtYo5oTJ98x",
  "key11": "3VRaHjGnSFfdEKzYAUunvUCBojjaCMeqpJGSj21cQvyVc68qUjeu6SMhUvbZeeGphtApSSncErPHFaM8yRLEkLvd",
  "key12": "4mwqsgehLuynBCpY7jbrahCHA39NGkLmQSpaan78CuV4PKk4oTRHe2ggU3vpqjonxanqpSTVV1H2hpsZsJKJpPZQ",
  "key13": "2eBHv1nRaQESEibrDTqyFzo9hKqSt7LLWo2YuDG2B81daxJFPX1MdpkN1q9bKT9quZg5xRwxRCwRY3GBu4Xj1mGK",
  "key14": "5AGutnmhpLavtbY9FmqXhna5sCqmsb64o26LK6Uj7YdC3tBZHUM2KXVpBLzbQfUqw43tEHaPdiFW3JDyrJ1UvdM7",
  "key15": "38eMoRnpRYaU2mHGcxKo4rAwZAMgaTiaSaJM2dK8Y4nhgVVBMp3X5Y354oazksEvyKjpNMMt4EohkxNYWK4PtrdZ",
  "key16": "4EKonhdFgHGnXzRbKnnbC5yvW4L8iKWepkAPUH4yXKSSm7fDL3jrgcBNaCqmqNjMSZ7w164ZV5gGT3KNdC8CccNm",
  "key17": "TDK5iXTFKQuB3YDQZSHpBPWYYUBywyNZ7b2DR7GXXcWbdVbkuNCGaGwFPiapJPXQAqQzC3Y5VukPHdG5wuXxCFo",
  "key18": "3FTAJ1VHxBx1wQDoqmQeCW8W8HSenkvtJBsmmLGCTEFoXkd3E9SMCpkPJxg5KBXnu1D3jpBz8K7JvGqwtW43Q4MM",
  "key19": "4xxRojo7UHdTdj2M81kbRT8yVNYLDECbnWJFEm6ctf21gEVp1NqRSS6oSMEd4XzBtRGSXLPjh26krWLUn94EjABf",
  "key20": "4vqSZWirVe2KvhD3J4W35c2MYBJqAzLV6eudTqnA8Y2p56R5PHDXjZKpzhfQfAtHSCgT4wxtSansZgNxFHivrzwj",
  "key21": "63ZqDL2M31jN6zWnzzzzWmSxe6hho5ifLiasbKSCChLreFkAdQTDdHEZTxpdWzoMNHSezJZgCQXgJ3t3npbPp73m",
  "key22": "5R4sywr1s4oRPn7jBnRwk79iUrzL3Yd4QfRehkLMfaARgXekPJ2wjQb6FRaWbg6F6QrWwg5EgFXeVa51eafBPWnV",
  "key23": "2uacV9UbHvz3BUQ4Uyg7hoAAMw58mP2sm2R9UC47A5CznGNNFXq5mERSQoqNxYuFaZH3z6qmRirsc8r73APoPXn6",
  "key24": "31Ts3t7qxgBLJJu8zdc9txDt2Xa9kJjK9BM9KL9xvhD1mkxmQgooCgYwpA33SgevUAffEFb1JVG7yvThJoMDd3rB",
  "key25": "3CB2oydmt5gaLFau1aJZ95fqb1efMevt1sxR6t2WoFNZqVch4gk1MXgfvjp8nhRwKefa3M83MTfAi8gdX9g3H1P9",
  "key26": "3FptCvAujbzCrT2mCAh5qqCpHMw2ANdYVPbkqXR5Zfrwa5ZfGab3Ctr58woYzvywM4SHgh6es37Yhyj884epVAGG",
  "key27": "2uowUVn37DwZqzoN7HuCEmZ72DMVYqhE8aSPixuThGbJ4hu62npC39Fpd8B2Qx1o9a5od4gqsrbRTx58z2W8a4Fz",
  "key28": "4xnboYd9oEWxE2kF2i62nd4CreBJbPoQme6mSZnLfp8FSx6WbEQQ4VR6Gq7TCXu6bPPmmVVBf9hE2ASFA46nsdE3",
  "key29": "2xvrvaoSh7sBP8iDpFiovc81H4rG5qNvcmYNN6NscLpwz7GFKRpoSH1htH47172ZKnGENbTLmpmUz3tUPJeYihPX",
  "key30": "3dgf1KXBmfJtdN3CcHb9CNKArEfAujpMsGPdzFPK8bcTHd8Ao31wNLeRs21HpZcSrfz74SKd98kSQYwshLQjxxEm",
  "key31": "4PCovvAouY1aVZoAE7qAaDuzMs4G6X4g25NuHbsYZMtVYLo9FCScEa3DzFxcKrp6XorHthtkPEVfXxKti5LkpzKE",
  "key32": "2zqu23i4hTFdzC1xoFQXQfyCcBDiq2dcYXnYoKioMMGSL9AxkWVLrJct7tG9eu5SmrZbmRVFNVNf2sAV1ENYv6iw",
  "key33": "5EKMGmKEm9XLR5n317s3vu42naQLbHa1UxVoyRXP7rETQfKR5tqLy7YVWdRZU5L68qkEaZhpYwqXiYKUmCy3idA3"
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
