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
    "ZSN34FYh3yHy5maWUYQyivjt4T4HLtyVxXwvQxZZs9URCL7g74DUZ1VAiRsZqxXmNaBCqodRsNjLxKwCY1jY5nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srePkJ8gZyt6DhfHZVQPfouJhxY2n1h6mfJonTKjdhh9dpCgGYmEdSufiEg4a6kLQkQPRhyzDpzbhb4Xh6HYEd7",
  "key1": "vzmUgghVRq2xLeE6YwmvbsGkrghYEYhVPvozywsFTMEW8iBC4BaDJoW5wWDmSivN9QSvfs7S4yCjDNA3E396vHn",
  "key2": "3GshPxHZNm7yZczzJH2h6JhREHNboS25wDC3eaePA8gnG7R7GXagxhRzEVSuhsAd6ay8eSyH6ChcTmzMbLHApM3M",
  "key3": "27QwjLmMWPUuCXWzK7nw4yaHigZFMh4YrWXjHrKUs7nDKLKfborPbio3hmwHZKbcL54BbMxcwDdBPnFJDyxW3fmh",
  "key4": "4dG3UhZ3aar2BxLxHJGKDYcqk6Z45K5BMANHGv3zVJPy1JH3uryszncDduKfc4c2b4Wu2Pi5mWyJrHscz9Dkhour",
  "key5": "3giXwzt7J7FoKzqEsUPwFM3UG5W4hKWNShpRHEo9P6e33D2WqwYbq8qThexopytrHykDFJToautdxewMiwdmLrVC",
  "key6": "c3i9jKyZnCoBY6XA6uTkkQLwgtSesNo9qpdpaB67b3N6TtUbeVehFWWiHQPAUPM3GPjoFEECkYvzLkDr81FQSpN",
  "key7": "4Bk1aj96Cf91ztwf3rowLsKzjhNh8oBCGpfPLffNGvYYNknNRcweiux9kxJj7diYwsSfLc3KjwUA3xeiibsH2nm8",
  "key8": "6711naMKaJmQ2V6iyC9qtxS3XBPyKiHEAxdbpsijbszRYKDZuBtqs1J7RJT953rzAYkVJ6pExDNyJTXTNCsYQ3iX",
  "key9": "4vYRtDJmEvsK4maxzQtReAYheugsDWLvF4jmoUhKKFDSRmVjubVhe33VLPUKQKwNn7nXZzX3SqZhgYQmsQxnDMd8",
  "key10": "3Q5bBhRixuMrh962iedVqz44e44eSGpiYZGE6iZx9QXLjMBCKQkSrNwKj5tRXUSoqGYEos3D7SGLaFqZnJueTehq",
  "key11": "3m9h5iXqhPzna6Nciujs6ZkQsVE5thncKcNoQtdh9BpELcMKLdrXgbneNnJmEV6JzK7sZcfkQZUWT96rLoTqjk2u",
  "key12": "5kP5jk4o1EvFt4UmDsm6JVN9L2XU9fgGC6dP8nZMq1xEtGzoH8sxWRVSgZLXsdRvwQyNJ6SXfyQys6dCFTnq8RAW",
  "key13": "5dfTCEDUMwWke8vK1gXNR35vnV3aogrotqxQss2Gw9ARyNa43wFST2R4jamNBSziXBdF4SVY1fGKNGgoeqN2YCtc",
  "key14": "52z92VhrHTwcmsT69ooHrmx3Rac5bhcZzdKbY7ygXK8LTQ91RKRkANHsHwYEfBE6vDHXa5XfAzmJC7t9oGxmqtCi",
  "key15": "bpJDKntGAi67fw1m5BK2i77MPgRxQzAK7khsrK7D6YcFu6r1RQTaokM31pgcqyuXFGvkQ2co4nAnJVcnRhF7V4P",
  "key16": "4kHHA669GRFCH7BZoFKUoDW1TxbgThgZcRtaBg2XNvDWUioanh4Boztgorg98RoPtPGZzorYMB8GTvuLj7U7wX3Y",
  "key17": "3vxxb9oU2RhLDia9NTV6iwvj5sLraztwiCMiphDGd5JidAEN4dDkJJm7UPJXEWYr5nnGv2PLMMbUe7cXc7NLbA9T",
  "key18": "3KDqoSC4UDN8v1iXJfcujiXt7Jm429ZhHbZME69L8gxcypgezixm4UrxyqpRC5Qg91C1gs3MQGYTLHgZekcDwVMX",
  "key19": "3qQveotrB382o88DLZRj6UjfpCy9nqEqytCRK5iV69xMaqRw92vricKKTUpzac1qnykVJ8KwitW36xkHct6p5VdF",
  "key20": "4tTmMLRG2chFk8iARfb7aodyBtYZdnyGLj6nPjxrT7V5RDppkdxi1DqMH8J8cCe5LNWbKffJusahrLEmQzxrBRHt",
  "key21": "44EY1r28HcYfcAiKMD7w7HmzKSJCnnAagLcSDwmY8T6VXANhgRCyKRWB7d9kXTMoq9ijjCLEbGzfjSRswnaFibwG",
  "key22": "2FjcXEA7A8zjF3t6585PpBAmsE9bCow1AMACyBmqdyC46Pp7QCKLoJR1XWW5HcW8cHxmo3hbeqgnWSZcTrcTw6FR",
  "key23": "XcJGLsWAfknAoDgazmz2kYTeh3N9DwQf1fEbSx9pRZHJo4xmjPubrgMLF127ZgM6vVDvpLfGu6R1GMjUrEFpbbf",
  "key24": "4ajx2G54eDiwTdWxu29YySa61Z19K9kCH3x6FGPdCr49S2X5f8fN4zM8WpbhXkf6Ko1nMTb5HkDFJ1fn2WffXSLs",
  "key25": "5bzudUpfG9bZ7rmPPkbJwmvUMbEbeczmuRtiXgdqkAXHLRknAFc61nmFfBQzUxnfGVpDBChrS8t32RJW4ShYkxfB",
  "key26": "3SCSrXcdyoy2eSR67zLRUFhmSGNGGutmhy1iR8czWBZ5ZMrp4fUnpRLE1gCbZJUg4gedwSzUgA3wVpQWHf6MWWX6",
  "key27": "2iKy5K3UMeMNVuRhmtBQVTg9zmqsVnrC9oiECr1nEQ5SAZxe1XjxyGH3vWbecECh9t1VaQjfrKmtrffFUWdmvEDL",
  "key28": "2wPAAa6L8gr8y51Kd5CafMRN969vL1rhS8W1s77VyeWFG1CeRgoxHpER9T7WM3NffALJYpE7RBQg5xuNXSETYKGp",
  "key29": "2tYitS5eSZq8wcSAAP9X8CyUZBZvu5ig349MGbS9f5RpqKv6T5zoen54DnzBYzybGTBPZdD9iNFmJaNuHFWGLi4Y",
  "key30": "5WLQvDJ7jdSRRgW3emeFCeEpeSpczGn4bDjXDWYXjzHisn3mzTznbEDeGP6RHScj4HS62yjoE2ia3V6MB52rdRKF",
  "key31": "57G3knHKND2v4FNad6nvG6fw9Yzsh4Hd4NwoN8qbnBaUisEr37EtgG9hoe8cYjvcEroEQXGz9q36scBLt2qEHkwk",
  "key32": "2HVyz9NgkUXAzrUBCMqhz9XzSxUitEu5MVZxE6aeRmErei4BHtYWsiWCXMEEPdQUezwHyKfg4kspXyikczDFZZWo",
  "key33": "2qtXqwCpDk8xzDRgvGKbAcshQ6QFPU7QL5g5tpCqEa7ymAxKEuceg9oxsPGxJ2RD8EFBeSSue2TqRcpZM9GNwYWR",
  "key34": "3MRQbUsYWzwjcr1euH9XTtKGrTL2VSG6NyfjpmLYTLjRUskDHtJXjXSFKFCLzKoEHMT122aJ2raDNSGx25zWHDu1",
  "key35": "48psvjktWmMrjdKSfeG6vNF7ebiC5CWdqxipn6eixD3AhwbPq98uqEhS6FePFAtBAG2Z1Jrndcc1cb27P9qNCKHr",
  "key36": "54yVA9yPZmvNwrxvGwYJEp9qxoisn3BihGTe8cH4guZeohaDseEPB461CeDuARkvSrbYARWbQ1HkdsRoK3RSwKc9",
  "key37": "Rbqa5RuAuo9jAtm7CyA4w76FewG5qmejaTsDMvRcCyY9y4S2V7ZzfvLqn7GJTW3DfCrxXLTt4NjHsTwoQMhPUVp",
  "key38": "3RY9MqiK4yNBwdvutXLptU8AR9iUmYqiuc8KLgg6D18DXdaBgZW7VEaWHHTDRX7JPwqDYPXj5faQviNu13pYdM1r",
  "key39": "2hranTxLLVjoxtjQhqHa7ANiTWSTMGwRqQdjKEhXG3AY6T3twBiUrCdr5KmvEpurM33MYUHVNiRavnLUFnYqWPD7",
  "key40": "5cjCWpp2yDVxRkPUetWY6wuM8kYMg7iaXb8kPE3ZHS2td6z5ipAzXgZ5Fefa37jnojAbLYfg5sks9FJ6fsYeezeh",
  "key41": "d6UVkVK1CV5k74Qk1pDAMamFCZnQo5wjtCjqWQcLLK3ptMxHtNgUze2zN7XcrHzjAk6izyMy41h93TyjDxKLBPH",
  "key42": "2YRfUJUL1bZfa43ZrQz9yJwJcdSTycKxGvEnxs79QD8BZgEaCZwvpLPZYPFaswfmtXRHngsRLQLuqWWNsNuuseCM",
  "key43": "nuWQLzrnLB6EmLx4C3oU4L2QmaV6HfaVq1ZsAcedZYFPM4q9Boqnm7py4SdjB2g5k6enAGLj55fchda3w9fjXxB"
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
