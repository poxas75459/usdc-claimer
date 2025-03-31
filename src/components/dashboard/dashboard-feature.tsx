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
    "5ARGwuG3xD8BjRvEGEwc88x1UUWTrNcDR56gfEw7qvEgcweqMQMEF98Dg6wzS7JuRFTj3s4h7seuoHJ5kv1CJvzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqs2jEXSKRSh49wREVLVpaBSREVLejGS3gBCvbfbLdZZRZUP9mJsKvJULyJYMZCNGzY7QmkCvn6S9AihQsTzmVC",
  "key1": "KAikwDKpXoN9ibfTCcUY1C5A83AjsJBemYhH62KDBKA3mkKEmHzNjzHerWhDfTx5bdLeADpTMWBTiBPhvUAdoiH",
  "key2": "T8rcG3QiiGXeW7bvqkFTgriCyqcZmBRiF6zz8qeyawpFjQjeyqSxLLMrgg5SLrpNHDbCYPqaG6FFosYWcHcyeyE",
  "key3": "4hyYeST6VfVEsKpkL2qKTBxNPzzgiAzVFbQGqVXNeZA57GU3YjynSyrUmB22gaLPmCWkdUYs5K1kLSuGBkfSr1Lu",
  "key4": "5w7KQv6zXyVFUegFGozHLpnMPugfDcmsfZbMHu24enD3RNqA47teFknKE3Ve6wUfF693Lftf9ForEFMXgcR7M9Bd",
  "key5": "4T7wXhhVo6A3Kza8KgJk72s6tJqgfopkbFfRy8uUmoSren4agsSb6rEevwgRKzmNL47gaTQrHPUNBt7xxfSgKmiv",
  "key6": "5AJXsnSytVLtjCipjefLyvnFuEq9z3E8invTxXSh9EF27GQWK8ySGNaibcukeCgU6gquA6597DqHYvrJRLMpGDmm",
  "key7": "rQNken5Ht6MZWFuprX9JARrTNNSpBcbYggd9XUUdb79GpHwueDeyK5QPmGQGiSLJ9cLRn5rGQ1uVSfPKBcRR763",
  "key8": "5QhSVBw4Mrn1qhzExawETTjdh69sy7qGxWTYkexChSTpjffaiXrS6sfPpwhjEtjqVs6RdwqbnAfef5vciZgNQkgv",
  "key9": "3H8B7QpjKSYjS7yE6rsiWwT9tRQtoZbghN6u4e2H2c81oASkNC2LEk3Ff4WmnxecxkMNLbTfbcP6hdTaFyCvnGAd",
  "key10": "M3vrVeY4MV1wx9fEA2mQu89EVPeSoNpFLx1JnuTDHSHTcL93x743RfnuYYSVjPVxkGWpZRWa6kPJCzonB8j65uY",
  "key11": "4VpDKGShB1wZmHDwnodNdknJfie2rnFXvahMqk1v2DVR5kbx5HRCpWzAonhKCFK1TQyGooCNARBVA9ix3qwYJEof",
  "key12": "5B8vkPhoKNKXsUpqCgTtJ6Pys9SCab5TbXLqerYjEHp4yT1tgKSbVA1ZidLpHCBti7priAK3kCWb8bJMKz16xqSy",
  "key13": "xnqPWqWpWRSdifKcWy6V9Donh63fDMevRejz8fY2cBceSwdVpFD7qfaUdLT84g3o5c4kjkUkza1xy7WG8wnyMP6",
  "key14": "3QUb2xGmipPrsQYYKLkY88TgYfxv8VW7Gncj1uG4uPpZgL1fxxvAmmNfv2dGBMWTXfAB833forxaHmuFN1PJpppY",
  "key15": "4aPcaXgpbd1gS5mfXeEAt2tjgQER8mFdzQsQ8sBRUw5fidYhAQMYf9LswNctHDDaEBnFkUb6YYNire5z14DX7ZpE",
  "key16": "2W2bZc1dYqfa9VgrUpFiBMaASbbPNQpKQSyZJGLAgqCwQrdg37SJEw9BzDMoxwDnHBXQowcFYVqPLrdyxbBSsYRx",
  "key17": "R1gywQwUCcwWCadWuPhMWxgL6T6jHarvMvDEnfYcu1Dy3i9fsFoiymnmg7dr92qREBmeVWmEHtuQbEhCL3KFUqN",
  "key18": "4i2E9UEp92HExBTgb8W5a8g8zE7Cn6mbqpb17KudUyqnMcpfUFnaDfughujpJkxM7AzuK6MtobLFNQTCucAfGCUq",
  "key19": "YsxZSmq3Ln3TDFcqLsCHNpDUojFw5nhhSTemrdDogiN4faAu8Lyi9Xnzqx437wSsL8t6E2Kj9d4dBKxFyyCywYy",
  "key20": "2rYkvu4qGdVHFVxnbrvFN3RjxEADAYLKbW9ZqJh6bKWmoGTFaZL8viL5qsPY4E4JKVR1SinrbXtT22g5umc7UUVb",
  "key21": "2DkCL782spjEGc1uKMqJwHd6MBA4e5evfEbbQ1Y8Vhd2yfK9wQqiUtq5y8QeN3e7TR9zpFn2J3x9RSNZzeZGfteE",
  "key22": "51Ce9kjFGAEDUFi83zt8RHRBCPMPJgMTPN2Mamy5Q8d7yEBeMC3ajFNeezhkbmfGX4UGswuvRhBMQgVqNq8hgHhF",
  "key23": "4rfXNgwsw8T9GQRYBFHrQuNBxMibxyyQDPx7HFtdG4rUecncxGghcQqW5sZcMuQnMCb6iqNZL9AdiY5uCJmmQVp2",
  "key24": "9xTBdeyN8unKhWFUk1QyDP8WQUsGAafbDDrwGHuNwPBZjucQo6Th9TJ4A56Pri2pB86EGYjoKcNdSexphyDXpHg",
  "key25": "qJ5o5xr9XJ7pZhfo5sXBjk75WZeai5vXZJNZ67yXmySou2iy2rWTjR8tAyMm53w34DDK4ks43iASfFe1PHSw8dn",
  "key26": "39J7Fvmk9gxieHuuGo8efcaP82eop3h7twNh89krzUSqHMN82JLUHyTVPDUkdHwmXSZ7g4c1vDBiTpsd2PDLqCWs",
  "key27": "5E6SDEA3DAnaD6yqz99TK3okXkpgqaFdzB3ymZWNSC1k6ZnFJe3eM7g7yECxe3mT9ZbZwp21VhP3n8b1mkHD9HBa",
  "key28": "3HzLnno53YNxH4Pc8ZkHwErR7KKQr5njjZtGqtB8P7Mou13mhANRuZrH9sDe5wt2FkhZV89oS8dKzfiTEmaRxcf8",
  "key29": "4ukJMyvadjjxGW8P8udsKNmprVjAjW7f6JeNk5X2e6YDvwg5FbJwoSm13TKxh67cJEzjL78cpfBowxcfG4QpGxe3",
  "key30": "3rYGeCuYfzheWEWRf2dKdy4LKMWmXyPiQwBfidot3Fs5nJCYbm4bqSYkL8Hj2CT5dyMaHSXHeHgJGTjqutffCKgP",
  "key31": "4N5f6WdVX1cNMnhavjZ5PjMYqzAbGscbxwWdT2NcmPWDMBZj77yUkshmdfrKXmEB8tSh555wVaX9cmTK6kz9Pbaj",
  "key32": "sUByhXXcBwevBpdB7wmdxGu7EDodRoU1KaThMPSaWsqefK7ohYEAHYwjEm455XJfegA7Z86RsHLb9DZ5s7pDFaZ",
  "key33": "5MPHHADG8qnwhaBZcQSGSdajaq95zzZcTucrehXMGC4tTs7msJn4eXdEffk9oAFHrfcqsGUyYro8WY7VrudWdWTA",
  "key34": "BB1eo77UXckejmWQMDvL5sUFvM6DzE6RJgLPFDFNZXRi7RZGykMdxU1mJ9cNiLfFXid67366anz3XRtupBwV7hz",
  "key35": "3oWrRg9jxib59VGc68bTp5crenRgfb1XXSgdpEfQFyjtLLz4PU7SoEMJADNCLAiMmskQpA3LT94Lt2BvrctbMgsD",
  "key36": "2QojZnbhdpxTDuxGmapYYeZ2w1LMAfbHEYKa2kRCQ1vtNbg3Q3hesnxoD1AcaPV2fLKsvmVcoKQtYovNSq5oRytn",
  "key37": "4tHsWEdujc7MC8Uo5L9dJFBrr59D32EqjBri4U9UXGNrYVSa352zAdiifbTsG5Mdb7ZUgJZcgxeTUufR9KN4wATX",
  "key38": "3rWzpZXp9ReXt34S6F4ZF7QhpSfGU9uwn7vVdhxosWKvHzcWsa9vZrjv9NTamrLugF14TdqdEov2R7czHrmMBqvy",
  "key39": "2gNA3nzx86dnbYJwwbKrPdWbEsicP4sZpwrufGL4HVEGS9DwB5zk6q5qzo95A47Pn1pHeWLAaaeJXZnRKijfe94n",
  "key40": "vTBMbSa37saZounaJPuLRjHPccvorVPgP1aWMVADTQ5Vmjdzv7g8rgXwuNB8Ph7X7SR8CWrmGg5CjZnDPkSCsvB",
  "key41": "3x9KELguxzqKNEsE4rvUegAjB8K1ppjfjBiapPEp4PVm1k6vGXLRgyEZzBtHXxr7yHCar5k2hw13i4fEhjhafctw",
  "key42": "2vqmv9ZBs3nMXP4Jx1owdTNJAs5cFYz7fVw1LwZAyYeo9riLEx5vx5ry2jv1KbMWUf6gCgu8T7aMD64N9jV9otP1",
  "key43": "3SNGUsWhEQngv7ghyJFvkpDUcGKxGgej7JAQbfKFJ47WrZTeiUx97tpnDgYnKkmVAHbGKXM8oNLAnfj7Su4Ke8Y7",
  "key44": "25xTRWNUY7ErH9BZccuyazA7iVrJKcFWYbwK3G1YK5XpJees8rf9wf2h9HPfmJu7YpqjTRDKLAH4H6k1GnqB2oV3",
  "key45": "4wdEYfD6u4YhTFAVfe7tdVjHiusf3Q2GGcj1o8yrwPjTGgm7pAjUQHLEJYEjcXX3nJQJaF5q7Jkv7GJFYujhY3nb",
  "key46": "2oAjCUaBuB6y72smod9EATKnyfXgpszaPdz4zX6r4ATGn4BXrH291Z3aey1Y72AyEXF7GaEp7GDkJumRuFfNCsKh",
  "key47": "KD5aQDPghRp1Ac46M4d45mjmbapLzAfWDL5kaVL8J3QgShnNFZdSjqb7hcYcMbTAUewP9EdtWZxgNo6oBFaZA7B",
  "key48": "5oLywpyvBB1eDTfYQm4dF3ta1fYJRBspyxXwE7MW2LyCrrooHhpqcmQx3o8RDptCnnYwtnh9HUJ2mwV1euMDCExa",
  "key49": "4XXwAd5F9RrzZSwLN1X8Tmo7UeS2yw9yEcgU8TCcnb9N7Yb48NLTVn61nJ5Z65a9LaLNFy5cgehVj6igjryjjANG"
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
