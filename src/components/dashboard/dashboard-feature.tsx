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
    "2cCAYq2CpYLeCJrjayxARYcRxEnZuAxeSpXtP54Kw6vHAUUMeLhyD4RnYcY6JuLsuTXqCjd6BYmTPAHCCabWU4z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5cQKsmLXZfFUUry91neuki58DUDaVkYAqFiF72GtoQMNZBKQZwpaeqfTtA9Hm4vwZoN7rohCVikdjXcPdxgFFp",
  "key1": "33TLsp7m6fSgyA6KiawR7PFJwN7gkcD7wC9dEDmPMNTFuHsgzVcR52JUs3X1g6F1vUtTcsaZKRKBcP59Rjuq8Z21",
  "key2": "5rJJuzN8gcahTUFoYKrh1G6s1z5kKtTwE15rhAA7dZTjXJuy76BNeo62coFD642iGwv2papfAnhREoZLR44dzrYF",
  "key3": "4cppNWmLyiXJHF6puqpuqzgVgqEd8ezkjHKHHjMP9SSGAwF21WP77cvFc8gymZeJPbZZd39h9HEvmoANJSZKSV5k",
  "key4": "4pobiGbbE5f3MdN3GGxvGwNijtvikUiR2KjoSSKJKJaKrjH5dTVH2ZmxMN2xiT2sLgtomRe8hjReTwAQm3AYrHkB",
  "key5": "3Ev6TDGdwZRbEsrNXdBstfz7AfVTTJbnBY1Lfy1VMU2tCu3ECuVNqAz26r38gndqoJYEYTv43tsqxFqi5rzkTJBW",
  "key6": "5iPmKSQFcEfXJ3KLjKkqubipiTtLBjDH1AAp7PGxEqHiwAzGokRVJEGf7y9pjtyHFu8hyjSppidFnaC6rFeKMefK",
  "key7": "4ajPWGGHkrqbYZnqwxbDmfHcQ7AbbTEGSz89hJWncPw2BxjMCfYDg6yhzZ4zoudJ3aSNG4BskRdL7mHGLauioCqy",
  "key8": "5mP9v6q8pZ5CjzeGFVVdLQUEAb142cY6M12b7n6YqvE3HAk2f2ezrMok5WscAeoajnesPTQo4aUer59vqA41d1H7",
  "key9": "2kQjng7pbGiSZSGX6FLNXfYBasSNiZJ62qXSWgtmRQoociS5BRona9b3EK26dzxfr3EKuph8fqCHS1HWKM8rH9sY",
  "key10": "4zrk2C1J5nuEzrqWB88XRVvuEdj8UKQ9jFn9SKYrCQ7n8YJUwBCvMJxmqFY8L5acuvXEx7zpKDCRQ7RZVdyHzJwU",
  "key11": "5kyCANS5RDB487XNGJJBbPQFndxriQzohG5qZb2ZZUKBQSuSJDFT8eUnR9DfDDXUJUjs6mp53LFqiC2W5ozU8Pmi",
  "key12": "4RokvtoqriCh1k5xiJFvqCzZS6xGw1gXmkLHLUfNMGUQJgEFK9wiE76AYMtmqeqWtv4GAa2tUoJxsfbyC692g15S",
  "key13": "41BTVE9NFkFbLjvgvMWBVpuAfNBq4qWkdG9w9LtpUekf1GkoV4TDfNZVhQf3KAQaxeBRGePZsztyJpb6hXVAmUQX",
  "key14": "4mt38DZz9XFx7EQnf8DyM3Xz6ugeVrapqNuVkbPeLgNCafG5CgpaRSEgtkdh1c2JebBvhqYrCmfYSFEpcoLDGgxR",
  "key15": "5x4NjKP8jSfKzeLPrGzPQwxA7zzVPWdYdbB6RZ81q78eEXT2AfNm6hHoz6d1FV6q87vXNmsLXRAv2xzMbr5yLkEk",
  "key16": "S1mkBSJzHitgMpyPk7ngj4J115m3yvZkxbWngCDYGxAHLEE9YAaBQ54tF3enSzBJmdEg4mMX3pqrm5o6xtYQY76",
  "key17": "2sth4UtdLmjL7Y4UVgn67UAUDddiXmnnzvzMeRbDbCeUFyxudnnj2Z4QkonjsfdMaWYwDdaLhcJ7nZJQ9XQmCv4q",
  "key18": "5sqBt6czkZgT9FNgXHZQQvjSQKG5UDA7xTApMNGEdPwQZjsgywCZRmCxTafSby2TpZjsdg8VRPZDH5sva2PY3CCc",
  "key19": "4eNkZCjSxaZdWehmGyRvdsiC8hBdSio9W2rUMy6rbSVETVMcRq3anZAM49xPnRH8Qw7ugivFy3yx2EEWdqeMawsY",
  "key20": "5wPZ2YohwDbryBqhtWzEPMinvtzAncPZKiQbKZ1PoD6adpBjHrB3rkF5d2r3ZP76SBVXBa1fXa6Gza5uKXDDozQ3",
  "key21": "3focTjX9aE7BECJDFdUye1DqnUWTnw57Xu41kYq9NYdae85Yk5U3Ts4816VKeKvch6Dzxx1pqSJ629WVcHHL8o7e",
  "key22": "2gmczXoEcZjSKmiN8vfkiU8xPj2zLn4uLcQCiqHMf3fRGj7QTJdWdSHd9pXmPrS9neguKBRwxGDbjKTkc8H8NMQE",
  "key23": "3C3H7iMw3MaLsBm7usBnf8GrW8rddzNiaudf6cWew7j1irbdocCMEPkYyEmcJGoAQEjqCzZ7H6kHxviXcYJ1ML7N",
  "key24": "45qpLdejF7xGpH6JUAziiRPsiMjaZPb3DMyyNiGc2SaqsVtHEDAbt98K53cpXuUFKWuhgDXxAM7qbKKzuX6Ce7gB",
  "key25": "5xbiHmshGLJvef3jhGieU6CDyBWTxbcjysp9mEnVNBdSKGquCTwMUYVuyYd6ftisUzBuSahkDxHj242vAv77EPsV",
  "key26": "5bQwHihTe5zqMVo6wgVB7r6TfPypTDh3vRYuHr6ihwFast3duokVumBLoQ2dLmemGv55EHWDAhZiQGTaBmTpWvYN",
  "key27": "4Sgp6vbuSL6MjQEbFdryw4iSQcUYxfvJvci9WgXqV9EPgjxYEbJYNvXbofohe8vp9B9qGdSVhAVhAF9ZADnXYbx3",
  "key28": "4iTdS3jdtZrimDZNQGQ6eRfvRX1B4q6m3yZvmVontoXaWqLy4kQYSMLjHSFN42VKJBLYYiMC474MmK6fKYHZ77fT",
  "key29": "3fWJHCwbkkVjr6QhQeCbH7GV5QmGs9S6YdWX6M5Burjyd2RxPDryGGMBv4GvfmXnBeFy8ZepAtEGkkGbU2AjSiDR",
  "key30": "3WRPiNDf69mFLmAToagWqFRLA8BWgyYFAPZmqiLpn9DrFnsspMraaXMmbCWwWt99ZQdhsafRoyCb2GbMRKk1jdZE",
  "key31": "3CMT2DHoivfkoQBqKP9Jjz6KXgQ4BNxGD7oxfQG4MMQrMtnuPxyJnEwJHkFKBfQ55ACMdX6a5EF6xCSSbH8i8STL",
  "key32": "5teCi6SaD1bGh8jU1CRM8fqCMHeaMQbx78Xd7AN3yUssksiZDv5XyBs596q5mYcrz8Th9moZGNQboFagMQh6ciSn",
  "key33": "47JnNaJUT9NcGDjJ8tvRE2GvkdXz5rakxvfJTBHUPyLdKnWerGn6rz1C9Btd97r3gPqovcorWz29PgW6zkT2pWW1",
  "key34": "32TvnHDTU7wv8KK2LE55FhRuD4jNkBoLRyhtmciWD3M5TD584S2XzHnGCx7CsMpsMxA5ZY2SkAKwMMqaAVjpCusc",
  "key35": "52gYcjmSyK5yKZpy2kofPw7yoLTZwpRa42NyDLnMreJHb6MM5xSkhmaML4huP4ySeWYB4q2yjxSqBbidBcw7ZW89",
  "key36": "2RuRmJh2GkTgmERo9ZBbCDiBm2jyPC2bYqeaiUWgJ9wNiNNjw9nsMMAd9FtKLfK2LDCroMaYChqopYXLPmPVR7n6",
  "key37": "3vNbpL2at6CDz7FE3D25KvePxhLbgYf6345WH7sA6HsrTkp5iFCZMQyJH3FhXd8mayLKnZeg11NgyGsxeZTov7Ge",
  "key38": "2wsWTEiveD7gSwoPFEe7hEU28tRCipH7zUcQxcZmHZUBbir6pCoawMTLrvJW12qbaC8EyJjzMfMGuLcBPyUk9eLz",
  "key39": "4f6P6DhLCU5KRPyBrVjYsrWWTwSALxFZFMpVkrUviL5VGDLHnofKCySp5AG6MMe7Ro2mB2jCDYtgQJiV7yBfuoa3",
  "key40": "33H8RPi6ggPvHrHhnbuce8RiRRKVpT7EjgmXFnfhaqSsND7NtXSYUAohqQ6LmeCo7LbkTeQLoPDjwRZWUrLYt8Ya",
  "key41": "5nbyS7j9UHHCdDj3UUpB2Bp3G7NCFraHRBdwbPsoDaqfAT2vUwR1qxyMAopi6U1ANaV7gF9AA5wq3utJ1imrGsNq",
  "key42": "2H68KUCmXd3AaEbVp6aP835oggdZconsbBFbFGc82QNHDWed72MbbceptEMgzBwtgJqsBGJG6pssfGP5uQfgdsD5",
  "key43": "52D7aA5AsGn7AqR2bW51QVLDgRkj7GUZ8o8NUzPAm2SDXe72LNoviTbwXCCvUJQ7LMhVxepptFX68sNZD6b5ePuU",
  "key44": "5y5X8TJX9g9emDhYjQ4gbYAFPNmdnX88YBDuRZ9kDmXkyYdVkkAXTLZAUn2WuyFQgBnojaWyqjA7QQ6e9C3jXokr",
  "key45": "3766BmMHGX25r4VahfyBKzV5bbYBAmwJMGVcysc5QNrsdFJYBKkRJXCL2zmXFhkUTQ1KQEgHoz4Gh1wWmzzmDXe9"
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
