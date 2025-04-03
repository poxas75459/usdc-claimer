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
    "5RC55RbbX77oStW1iJAur6S4HPgXfk6aixEZbLzBKMbpsDTCYeyi6RDzhmK83ku3UPh4X1c5wpVQJuVDW4xStecW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3dGAnQiUidzGudDfktPMukgcuqRjFoHHTgDZ3fR87ubcEMXkmnyQ2GRu3KirekwtQr1B6iGSPNjo6c2Dun56wi",
  "key1": "66GQ4MSsqQgtCM9BXGDJJuEuXAoP7rb7WTBkuuk5SJa1ErBmSihNMpHMK9XNYNpSxkBUvp19AfUXxpR76XVYE3Gm",
  "key2": "4M6zNSgKpoYt61FKnen4peRtLrzFk3Hqw9C1yYimuFiXgkcbSPEtcyLw2Y3qDA17xw1uGyJPKDj5kyvZ2Jyp86nL",
  "key3": "24UVd2Nn1LJu2o372cphWZf9tA23CPvidqmkMNRQNynmoTXdLXSLWjRVKGo4Gi6FaiXXNrWNaK5apXGBRLPQrE9T",
  "key4": "2Jcfvkha783oPdtP92hQJ6NkE1ho57PvrDe1XG8aptfUya4ptpBSWqovkhxq4yMeuzDFgt72LSwyR8zRLqd1qY9V",
  "key5": "3BPfCHyPeE2WTB1G6xUBkHychVQkRJ2JmczzVMnNr6Eh2NPfw3auLtUaoeo7cpSntHEVCE5yBj1a8Gmibe4brvqW",
  "key6": "3tP295gnE8BpbJ5RcFhLhNS4RRvjMMxJ83Xr7A8y5HPR7wzbAmu1EH8T5s32sP9QoaLf4JK1AXQoJsXoXfcE5ntE",
  "key7": "MUByJ9AKjPoMZHc3nbtW1HrhhuPgKuBPeQCq2Dha2wbE7MhZQfSM9FBYD1xKtzeVNB9Kq3Gu8x1vQeTLccmrhc1",
  "key8": "5rg1RBVzg8rr4iNL2rwLcjF2RgVQCWyRoDiNWnFSi2Ak1x7wkKqn1JF1qGAiYDJv8Msk4MXyVGGbKVuBt2McQrRB",
  "key9": "totBk1wM9FmACmf6R8Ft1reemRXJwYw8VuXMNxwUV4jGax3yy74VrN2VWG44LRHifxZ6kRmQFvzhLVhMqppomDx",
  "key10": "4dkZxsV5t76XkzNh5t9RLJw2on6Qc63jXYjQxLC9JG3RVp2c17DR56uD5AyzhQQfSVdG2dSb3uEQJ92i7wEfD6Kj",
  "key11": "5PW1vFeQd7HFQmMfY9TocP2pLiqUyYNwyqKWioyB2eRTQoFUHz3cqTvKwjwHhNyCF7nGi4SLWHzqeE6XYTLhnq2f",
  "key12": "4bn6brh85pwYorZtpoNSGQX4t6yRNL8ypcf1EUH5412kH8UVzC99amcjaKhhD87HFA191FNcPvkEZ9ooqJs9tDVj",
  "key13": "4yBQ9mvQxVkBxNpd5wSSastx2JJpWGzfwD9oARxryGz3CeFLehAzUe9iaqjTzZE8CLQkwEeSAfz3pX8ap9x5E18E",
  "key14": "3QS6BHGBaimu5HgxJoiFGoLBZCCyEYy9D8qx99DCKXpybfy15i9HmEHaEbq43gf9UoZ4rKfoDaZHoj7e1BYa52nu",
  "key15": "31Z2emTrBJb68uikBadckU1Ess7nxPNb8JggkyTVEboWqiDRz5sFKV7saN37mA1oAsNfGLQkj6H8qdJjEWBHYhxj",
  "key16": "5ZaXXa82dF2eF2TUrHGgZ755bo6MdxhPtmeA4vZSFUHLkaKXv5mXVrH6XcA8iv11LreSVPqpj6yFZrPVUUBpFKgQ",
  "key17": "356bwRcwusVL3WSu7CVojKnPLprynz556cPuR7fLQefFuHAdthg8hV5M8MfBXkLWKTTAB3MPXMmRM2UyrS2txtuz",
  "key18": "56S8iFCoJ4U8EvR7geqqTMvw15k1JRGqEqDqu6NKekaDMx27uhjJN2UH5qCMJGeeVVyJo6nHq7G3HVuy3jcvud8t",
  "key19": "fM4XGkNNvso8pte2kjyStbggJ1tkHiWZ9BtTJn3dQZaLCrR8LRHke58URFQNFj9RjkmfQrtNtiKjLynWYntqoc5",
  "key20": "62KS9yFBd4M3uq8NAu9pyESNeRbst4sxVWLzkkDEef5qqUtUUwEkD64YSdrhebcfFW8C7LrYxh3n4brQGr1CY99Q",
  "key21": "2LNfzXmbwwffJv2ezkkgsojvEtwbXgQmoQAHxXPYn2QoAxpqBQu1rg2hdMhhRJxz1ybriSziKaMjff18pkDMKTMS",
  "key22": "2JRrpSgaLrksxUb9jJrbzAwKAT9WqeXDaVa9VvnamboZSXQQFGkjroXvNf4VSUuVZQ4XBdifdkSSr59VCsNarftv",
  "key23": "3kkXd6ZHv12qxjAxacjpEwnfS2xncCQFuhVTJc54Lvm5wyd55Z99YfoKGEcRJZ6tx4LoTT8x6EorAKdPkmL5An1U",
  "key24": "JR6567RRHVuQNZmP8i5e7qBJV5m9nraYAkYgE2QGGuUriT1CDu1oPbAwW2JqBaHPDwNJwwFteczQ3TpXpPt97bN",
  "key25": "3e1KswAL5gpzPK1HwPDTiCaDfmSvNYy4R9TcYJS7N6N9sxv2wtR9evT5jJJ8FLykci8WeFT4eV7GZy64jizCvrNu",
  "key26": "mvwXmrb1djMJAURM4aTAeNufb7gMq4waBhJErevGrAiiEAST3Qx4ydJsguGChFwa6HbUJGwmYckAanG5JXrXssp",
  "key27": "65G7FPSurKGsuoLqq56EyxFESYaq5eGUmEdRo4oGLDMTjjA2EkJ4trty43DSz3ph3dYVg4S79ZRreKPqe4VJi237",
  "key28": "ZQHeQr65DkiAHCRDR8d2bpXXQBTtvuuV7rkHWkGWkrHY5UiEuAqna2bnKx4HCCZ4RHkaxw7wJLQ62rh1CmJBu1J",
  "key29": "2sjB4E199WVstyXVBDzWg5WNcC8eNssRHc9jp72VvwH7LaYN7bkiBmqJFu8DNEUW4oL4pfMng37Ho6EikbHQZFAt",
  "key30": "4E4HkvyPHkbN3gJhokFZfr73cACSUr8R6bxt4NSaJomFwh77zVZX4LxrpfrDtJdnpBb586BqYPXWgfN86k2M2zBy",
  "key31": "3CE3oWQm93AEvhioTDcSGGwpiVZoCpUfdurDRzFdAysH3ircLpHtufcX9w6mkwHUxGLNRzvSYb2WDBVutLoooFXw",
  "key32": "5NnGkcHnvfnv2S4KWUFCmRAjXTVCZWwru6NQGxCUj5CDPq4wwTGxYsKeTCRLE83mTPkBqUsQYjkYmmetsPPZG8Zz",
  "key33": "4hc14E69KqjFvhb3ozeVircYn8zWCZfbotGZG7oA5bgCjHk11NUu8FXbzG3F6yxPXkQjCHw4KwUds5QpmMWnKTZm",
  "key34": "2aDv7HX38QybcmJFh2QvvJ9pCNL1WkskVnDXKbT6PSfSQUYkfUX7XEvUM7At1Hg9vdf5bjUkVz61QLiu3uBxRobh",
  "key35": "3Fcw6upoB5j2zL8NfpJoib66NrD88kNVPKjzN1RxW7J7n1jUciDCibwx65z1iqfoPA7esRs9xAb48Cu8ARHyVEGe",
  "key36": "2AWNST3XAHEBgUF2d8Bwyg7yq4bM5zefCvKSr7vF7MBWz8odYQL2Ba2uMPU46tCZFvu68FQdNf6u3GNWN2C5shpz",
  "key37": "2QX7eGq9MdTerxTKLbfktkppyiz7TTViiKcLV7bPSnyfaEu9y4pmWrVMa3S6KLw8EpQaqUm7gAv75sYDbQUboM7V",
  "key38": "3phPR29GqYXn9YfcexezJPg7nRPL33oZDozoinsZoGJJw1BPEHY7pnzLcwu5yjn3GZWAS1R7a5zAvKFMHvwDjfqd",
  "key39": "3CaQF3ei251Wrsokn5vhL3bfM1oxUxrRwFAWGC1zUfkaUEYCYHibH9Tq1rwF1EFYwoax1cPiYB85jmowcrhsBoBq",
  "key40": "5QSGHaw1dkFtAduUPrKQKiCLm3JDR4FeQLwQyyaXedzun5SS1SCTTYaSFQS5SGFTYqYQNGhsv77wqQvjnLrUioqD",
  "key41": "5JPS49qtewbwDxxVxZ8WKQbKNgjr2WD16ToPGA9KotWwqYsqTAFdQbbVhA91q9nETm6LBWudzBBt2WpEYfVuXHir",
  "key42": "6699jg2fE9ELp2kvmpCtqACM4FmCDc9vxVQ8qaY7b6WSGXaf1KQqrjnUDaNEQzyk4b7dWgmjJdPZCULUBdjvkMzi",
  "key43": "3AYJSEhXbxuxJnWJStJxHfcH1Y6WCYJiqBmaWSMQkLH72VbBNwxPvTwbNuePZQdCp3G9YaszgqBjiXBJm9eLvEyR",
  "key44": "2h3coLjJpce3wtUzjdKuLwrwvj7tkb3DuvNJihWHk3wDzCHncGtxH7om7gF1Pesej25iUKNz14snjkAaqs5sVU4z",
  "key45": "JDuyqUcSxnGEnR1YAxArHtpo71iiGqw8CwVzmhhmH4G6NeqUBFXDTmCnmCnmsSnxzdLLmK3ggfKm45vVFbZMjkU"
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
