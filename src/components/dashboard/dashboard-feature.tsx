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
    "3D3eq8wdFTr74RmyKbQPMLzH1XmvcB2jcFKGf1UdEhWfb7daNqTwjx7x2jX56DwTdVmfbw9Y3qBDfo53fAsgAQGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8sLvf8kBszaP1vZ5qV1Ee9Egbp7iQh8xgPikiXUsFvhQUHnCfxj32Fq6Q4orQ79NVPwuCsk6Zoa39ZMkJquz5E",
  "key1": "1TVKRtJMCS3aEXgpvbQHeSSDLCxTNAcWvpgXPmJXsKPD6dzPn2ETWSEYAMhrEcbSW3pRbAfThx7eBeDSpWDH56V",
  "key2": "3mqjgf4Hm2Q7mu7wbWyBWvg6UFcYffKJkATqSJydKPC1qLs6FdBQBAbM7MfbptKrV9QBczHoh6YLAChp1EeoKTMa",
  "key3": "3zXdeRQg96QxPzStsb8zoLDZYTaizS6F1GnheEh3F2g1LrikHM7kLJN1FL2diXCP5sRpL1rtmoF765zWnQL1wby3",
  "key4": "uiSKrEJiVfWBYCqmDpYLuGbY8fLiHQWVq9SMYfPcwTQ2dyBoQMyqPdrA1T3tdejuiF6rqAtnL34XK5uurhDhygE",
  "key5": "3Bhjnm9chsa16BJdiM2cpYBWBhjS1jEHVx8cyMZxap8gWABWxsFBRig8tAj4ma4gqQ6mAESHWB6RpizGciHY68cN",
  "key6": "CFygnYg2ZU78RJvEXxXraGeQx6nNz27vzSMSjxm2pAxJrFviwAtnPYeXd6MKdkcUGEAcoMowf3b9h8TnaPeHdgY",
  "key7": "4vtnaeNgb8GeunAxkXk6U26BohcbXZ7eJuGDfrLfWvdshYiTiH2eFUKxrtzt5i7cYs22ufabSA27WuZGM71PQp8A",
  "key8": "4TUMwacZuF61bJtVbEA3M9HjFNoZBetPo33kt1BQyhgQNbUQxnAKHmdH2WJbZawxZEJgbLGj4VFhQqNWxzR9jRfW",
  "key9": "3TUXsFsiDKTM62pB1cXnmaWZeDFNiH33Fsy29qbk9BXQ8Xnx3dRi9uAkLb4obXJXZPjkThprBNi25oBxfKbn2JNQ",
  "key10": "2S3nSQJfYsFB657QMYRcs3VptFs9x9URisqWnqm5LTekz4EKXjzUQzL98jPv8fJ9avdRRsLJJ486ctpJFoFzfSGF",
  "key11": "5oS7DyDgoB4Ecy8ZnmUuYFfrHXDt1o7nLGAfFUX5cJK32SWWh8WdDkp3Rbm9G2fFK6t2rWiE2rxFv4a6LQ1fAxbY",
  "key12": "32b9gffPNKV37poPv6vm4XEScAcxjK78bnEGoe44LJEkH8ujEw34zkUbya53j9nxHypAZzyoJgd4QhMcGMpMZcYP",
  "key13": "5sJLahABBJ86Co8xWgoto6XYFYEup1kavhEHSWXd9szMan66t435mpxhc2eeXEgFuZQKXeQ35nbAorBwbL1ZFCAq",
  "key14": "2N63h27cJLyzSkMBMsTwzXiq7VmijB1gUYtXcFUZcg63L6nJqhX1UzjWSS8MtjT9WitU3YRcGSaYPbr1ogyb2Ckh",
  "key15": "52pQfBdma4cAgp8bARW941dCjREHX68GYMjzHSXvmbgFwbKDhfCxnidzTcL8FWqxDDfv6dgPHSZKmSE1XgCvCiWG",
  "key16": "3JWfUm7TpDTQVhjzz1dhghdX4LYb3wBEAXeQLGMVHJhwRJvWnT1eQDAQXve6KiYBwgnMfFW2dc9PXvqtARKwCaeo",
  "key17": "46YEDPKBBqoohB9Uytc6WEZ9Td5MjEpXhEm8CfKRo44UB9qHcaxKVRuKqiD7TwrganqNqJNbA7Dh9p7n4TgKynmj",
  "key18": "25LqQhy5epBr9zDf8GokfdDVXRTN5qnedC6v46JBbkrNTbgVJqfD2Lp7i96KiT1mCs2dJpxrJyttkDvzRt2rMXY1",
  "key19": "2RoKK5FTuYH9xRWW4TNhKkMjUPt4pX1G48vYsybQxMmNtq9KHPgcvg3UpVLnV1dx6a7qxw6wQ58YFz7DXbMTj4xU",
  "key20": "2sND2PKSQ9YQyihwHHCdkfEBKm4fGBx5mZnBYBap7Ww2LHEwndbdjpYewASJjywKY95XVpwCaNpfqyJ4vcPDtVt6",
  "key21": "4vvyLwFrXFEfbJVY2Fz5C6qL3cHXWbUahgXGfLZGKdomxUJcAaWBRrGov3H4x6iRcXwbQ7oLLQ8NJW6Wp5t3uchP",
  "key22": "5YLvbfAxyXGG3wKkvB8LcxRXwaswMk3SrQP6Bi4J8nXcfNpcrBZPGZ2dvw4C1je3GegfgzhZubbT5EhnyeXHa5vN",
  "key23": "3zZDb2xZvxHmPqxFjpqmHgV6cEL37LytyiDotPyjCrQYJkQsMHvDkiHkD9WSLxjkzVmbYeFQzwaz3XS473ZDmodR",
  "key24": "4fnrEojVMDE43yETthgDs1UmBChr7AWCKpBpXLfJj6vGPeFPQJJ9YjyfZArGye4iUziRLHCozw6TJc6i1JbWaMxU",
  "key25": "47ZbXEHeMknrGTafSz31e316SQrnrUjANha2UgKFiBvUESrT6dRYfDqWhhY5uRofrnqFDnHexQdT3cxokGprHjaj",
  "key26": "2HkARCD5Wh6byjN8Au4R2QvRaJkAAC345TbU5DoaWvsvgasQtQA339jDMhrRD5UiwNP2g1Cw8jPnVjduXuWPU8Zo",
  "key27": "52xLagBQn8tyNndaVBqRDEfL5WbGzotDZRyi7gHV1Xe37XfohP12fUfrwW42g6WGcXpbv3rR9Sae3FErUR8Q4dRU",
  "key28": "3PZrYZCMT5QnCwFyC8ki4GeeRxKaUT7VZL3Ayw4KfKFvHcc3AhWhWmfvqWotKxe8sbYsEpqogsi81wgY8k7nT98S",
  "key29": "5AVCTb8k6qnvqsGecPxSR5GoWGrzgDBj3johDE5ecRYXkgP5UrdGMkzZzVfBswNGsdLW5KXBTrEud27iwn1z4vVy",
  "key30": "5QFYr4tWc5eNYpmzYaTMPZxQZo6eux5GTD2hsShzrwd42jQsiNWqZBh8e1nmeAt4qxhwqfCRJsm1vPZVvPxTA64K",
  "key31": "2xcHG9YJ3e96SRMon9M1YWbHFyYVg5kRAQJzJBC47PXG6efovNwo7yjfeTRLpK2t6mJRdMjEFApNoV44s3oiBJaV",
  "key32": "2pCLWeiUByAPSfsWsh6Gd77C8dxATYdXZjRzuLjD6Jy2NekChigYwVoL6FRVHkCv92wg8e5377bjumVseL2gCZqs",
  "key33": "QqGk54tCQDd53F5YhwU8HbvnG9Gih3gdvJArGfVomiSqZ4GLPxarL8Edw5qhPwpvFG5VLhA4rSgwoAqwUmNNgWf",
  "key34": "3gjaiaCAbJHxkiF4GX9hTDNFzhbRiJR73ainTsUpSswMUjoUvjk9eJMMR4BfYa1BErC7YV531KmYsGcxGCQiExAE",
  "key35": "3yqiWfZu5nLREKYK1nVs5vrJ1tWe2v2x24fyHCrv4gUtQm5qYcHpLyPXpHMrxCkMJnh5TuAL1WDpiKzAZG9BJfnP",
  "key36": "t3tEQXawntATtM6sqekKBTA4Ek7buZkL99kqaok4rNwpr68qRMngvhvQs7oC5ETsY7VCft2u2AFMPxbjZ7zM4TY",
  "key37": "2LZzU3jQByZuGTADK9M5MEZcQseUSF3XMCKjgzcT7qephPertrFxvYh5XAqmkHwNZeNLHms2PJTJgcBdTQ1bJNDM",
  "key38": "2rgnjyLtdgX18kANYNvPHWPJyV89dDNU3uJPaVsqrUFTYLSEHJQukRj4UXTD5RkxdabGkTuxACXCZ5oQGqmQt6uJ",
  "key39": "4BiwLJouABikuEcApXidtUP9yFKJBAznt8mJ72weDzJ9MBVRPEu7dUPceJeRR8B1XbZJ4n2n2N2Ezsgt9wom6uRe",
  "key40": "2hpB58QSYyCamPYbjeN25pUNu7D5mvAnjhygBeFgDSpWGUaGXqurhnXk2QjRPb2oEMJ1KVK9E7oBfMSiQzrWhu8T",
  "key41": "43QT1m7f4qgPFwQCGbq7UQZdvY4bgHonUvEKtHdMz59VLEHM22HGTKY6BPjeNyTwkkU87DEcRHWzAVtAciyd33bS",
  "key42": "5SQtXWSdbv5sNUHJkQSCr8yfvejdtBBFPSiW6Z5L3EH3oajpdqHEsDd7hasrY4PPYaLKphGkq8DJgMfbhHk9wZi6",
  "key43": "49kqLqswnvh2Kh52zEaHg2X4rACcVr7yNQrzZa25Ypp8xSWwoSWCs8d1z5rotexHeymuEwuvWWFm3dVBAX8ZYAXu",
  "key44": "4Y2rafUr4UZKUf1oo48azTVyveuh64Ca8sxM6fpZUJq5ceZvrnW6KnwkQgpzZWcjBxyMPPNLAuXgUNmCzz7kD6te"
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
