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
    "2r5nzrh7xtfneaxrDLr2kwixuLrf6KoyxLcMz7256HsdGTeJocVmwhLfLBvG9mdVhYB2dtufhgwkVbkV51742Ljz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVGPFZFFCu2hHn3qZfX1WK6YAMcrV5Ty7XfSfy99sxqGVfpxNB6vzomFzEJ12r2TP562XTGiVq2CbWjmBTDLvTd",
  "key1": "gtb7C3D85p8VkfKFTtHSwPd8U8QBvEQJmQUobzaNi6uQFyYLrS5KxDCjvQUua9nfYiJWSF11cJq4XrbbGdRYRhw",
  "key2": "fP9AdiGzjf5hnvvHjhU22jQVgiBnZoZPpRysJqHLjgvB3LRk15tv8pVgCQfbZ8GbsAuw7ECJG7x7gmR1BnrK6Qn",
  "key3": "4KH7pnVJ3yawE4cWSWnPq65ugpzhSP4odvquNFPYYSNQtzugWPZaNMXecPthEfTbVmZz73taFMGBxjZFNM1UsbND",
  "key4": "5k8A347P15bZX33eNC7Q8tfvb7gGDx8PrdiJjuybuvWT3nwEixEPUiAVGkWyEX77tgHCdScRBDufLy2xCZFxcrFN",
  "key5": "5nTp3oTQNtrKXVH33NvJu4sPsibiaGXsz9GsY77btbus5wyAJcgcsG8RkLAU7qdTo1jZy3F4kyN6shWLM64eMGxN",
  "key6": "2wsjUU5GeTiDbQQR5FPCFL114XLS4ZSszgnm3MdvLgtAqv1ASmnEKG465kr1mDTT9d48r9Gk4P5TNA7HFKiaVLpY",
  "key7": "5m6GBcsy7R6WnsM9bKgmJisiQ2KwJrY1ddDkHx8UDzDMLNTddrJ2gp7e9w21ddspxWZXvdEZy2s71wWrt1HsKK42",
  "key8": "5uc6b2qHbsuVJfNn4ziAPBwjJAn83Zz1hZ2nAELPpTHYGbAYCjZh7RFT8bZbmfJr4DnTq278d4Ngf2ANtmhPkf2w",
  "key9": "5xrdtc9Mwh8Wo2LTsF7Zf9d1VN28AR9QHNShLvPQDDCjwMgtKDY2xdKHAKqEbRXQjrnvt8UpoaqqmBMJNbvgu5er",
  "key10": "2xKbZ3Dbc6Ldm8tbQte5THfwvFHuqyDGM6HBXQxD7MgydcJF7NAEjuFA8DMuDQutKY6Pf9zU7WRkNQabzmYZjaNk",
  "key11": "4gWBdrp4q2B9UFmuNq8LRduZxGwx9zVoKDvKKmXnRa4XkeL13cpwaKxqQkbZxDVvGnDaCTitBok1x3phN4fqS44k",
  "key12": "3hixNTyyEPfQn4YdPY5S3qjBCVfiEvBccffCvuy4MSgQYsZvVSUnQDUXCMGGnUA11vLPGha7BbboeWCKBQ6WWHXT",
  "key13": "4Fzn3PSyZvnqAxhgBhS2bsn1yNecad9fucP3nDTU8ny1NbtBEB1Vjubo2R3bphUYMVSKiwWBBdNBfd1CMkDtL1pt",
  "key14": "2EgimLC17BpauukeksbC8YKzpmKpawZ1dK7BXgfSLLuyUTEwfsK1xeChBb1hi1LN2z4yKYyMgWfVMGfjtCWwnQsp",
  "key15": "3zkJ3eZDf84gorg6DhB6BwoiTwciEjL7DJGTbvj43hLwgm4wDKjU3LncCAwYp6gtVyMXUBGcnzatRpvYQGft2FiT",
  "key16": "2KqqRxRaGrXBfpo4gMcRUf89YC1uyjFkXftvEuoS9aRS4grZszTRpg2G6UrfZvHJhnRLLzy7Lv31KTsFiHC9exop",
  "key17": "4RaeTFBAeNfd9xX9Czh3XkMgaFzAxJ1GPaoGwuYk4QERJW4yc4f1A4AGnEPDrx1aazxtivgNCuQAmW1mrLjLqmnu",
  "key18": "5wjvxnzwVo8CTBfohGXBib8zGxeJVxewPUrz8gdnkpicrNTefmvafpUxBf9VBJ6mcY65xrjdk9eD5b7vQ6rnASdX",
  "key19": "5dms8bGjfKXM39zJ8BTSeZk6J8GCbaVFMHe4JyUFde32U56yYHcQ2QsLrDTCg2vZnotadjyECtmkFo5EAujHGcbD",
  "key20": "3yfsoHrtEJuZ6AxqYCXHxi898FKjd9uUJa95m75N3gGVM17eh7EQAB5EaFUSdwJ16bsAg6vFqNduWCyhsBfohQuD",
  "key21": "38rYJUYB34L9CqXuafk4zjxbapMEauAFjDKzA5ZGmBhJNqywXvogT4xioj9K6sLUgEZsrTDj4rZJrUkruPSgytus",
  "key22": "3WqfwH58VfqjQRMeSEgoGukLp3aiKWPkF31GNSCq6PPj1XR41LHQqCYbcrKYQwkh1YmGaZHniXNCpBQRZLcaEF2N",
  "key23": "4F3wPYDPmqK75LbMHyYuczka2DpsgXtyeyJfcXMT4yeTFVVdiLB2zV5LPHf6a8hTh6qCjpv1VgvUJKZGNFP4Hoiv",
  "key24": "3u84vtEfe7qnpfLqT7RHsfkTjnj8pL5wy4yoThf6TbaXQDrLMEGNqkAXxyGUmQ4jSFmaohQ8GXodBJav2Hh5RFeN",
  "key25": "3LWAwYzKzhH7X2aVa7qMup3t7xYG9X1frDfoDYr2zDLsm4JuEeZt2kgzzL4wya2vNHJRq67GpEiuZziYUcRYMnrC",
  "key26": "35QfRQZosFS9PtEkXbM8id2zS7AX87yqDZdRMjqG8taC3ZdUDZxaeYFmF5vi5uQXvoPD9FhhUPViRp2vHcgQqXAK",
  "key27": "47i7HkGdBs4uZwEWspqzbospPAAwZwgAhhuhLtbgW6WnrRwQH2LhYvDRnDjsLzHUyKCu7cP6dSuk7m5dPDUAPMED",
  "key28": "mS1G8Ee61ganu228pdBpdh9yfgj2jYbGHyjX85pFoUzsCzrjnKRmf6afX9wCjbaLcEJuXqfEhLR6kwc4xR2eSq8",
  "key29": "5YiLSxwNZw3TSeoxuELTbS4cKYPQahb8PBSgHELobVvUhmYAhXujnnGYZHMoTbFUKtMuuHmhXH3ibNEWmLTvQnbP",
  "key30": "521JxP3QgLjRTTz1pTE54ZKoaPTeDb1nYgdPDaodk4Xwn15GJQRGK2md8GDakF7F7eiDmCEZaXj9R9XgotLprJRw",
  "key31": "3T9JMTMWtzgQ1g2WfXnS529whqb49MsgXahym7qt1fgzojCLXQWXnWVUcxY3dhwZiLWknfWKXr87q3E96Wcy37GG",
  "key32": "2tWuSbLNwbzQ55dGiutUwCUJA6fVkZuDKCSLRYrepaEm4CcYyhmm6rChhid2Lgqmxtxtzw6kXZoPqMFZHRXYgD5Q",
  "key33": "5Z5u1pTriEQbRB7vP8SfERSGBJNxAh4TkJjS1htDFwzFsLWHBybXEZAaQNrZrgm4PMkSPazKbvaUFmyVVF13cyb1",
  "key34": "N3bRpJBfnbg6o3XTD7U1SegxpeSabcZpuAL3FQgDDxPDjX8ov5K4D79m7xVXNQCUfwCSGkLg5GpxEd9kuYLNptZ",
  "key35": "4p82N6GMFAadrMUaS2j7qhBRfaMuC8JjnaSEN7v9CUii6XzbvpxWdCuW11yMwomXyStdppozfuihVxaiTwXJkiFL"
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
