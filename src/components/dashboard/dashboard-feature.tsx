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
    "2EDHeWUqqfn3J5JzeUk2Cdb1VCXifo4YLDRLtp7NAwBeGeTZ6fyTSMN8p9uyfJovyR5TEA213DysGhUu2nRbXyUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abiMfq4oPWxH5sd8eiykRHBD6159Wremr3P1YsSo1aVXLzKjFYcMBWpzP9m1SumDx1Hah1BTpYvMxUxn36Sg7S8",
  "key1": "a9ScoBBKmX7RDjJA79fgZZTUj9mWbSa4Baj9TZVHRdvUQBNaNTa2QtMRBGj3T9kr6FJtASHhq99am5ucAKjHwsx",
  "key2": "44nMkV2XwXjaXZJaVnA9N3LeC8NSZfmyDkp4t4T3VMLJGv5wVUuDbsESKzXxh2R4KWhvmxLpzKYaESmzRhZLWuDW",
  "key3": "EhMfy5D5jLbrVU5Jcqngqi21Y5zPKq3PgNXgDy4YGGkfSEVdJAsSBUTWBnYBWfFNqU6Yd23yMfk1CYGUvpyxy5T",
  "key4": "4Qp2kQBAqty3JgAHSKWaCJHtdoxu71MLaqp7itLPQKv5y62Vvd4dZjeGEz4v9CMUCKS12SmDeJ8nRNDLsa2hRH8r",
  "key5": "2q6n6b7J75GVd5u5ex2819hWKMU74H6Uip2gx5wyLq9sUSAXvjcGRceJYdsNMVc8Z1ME8aEDus2nYHqBPLq4Gfgi",
  "key6": "2rZ6ChkgZhit7CSxTrWdN8SSR1cSvMaPYsMAnLRdyZWJ5Ke1tZWu9TYCywE6xxcaCmT9hHBAyNZNDSjoKDvNUzGs",
  "key7": "GjrzB1xMmPkAb5TRa4BKT61GaGk9J5N1TnUh4sxy4r7jEvXo5whRx3qJQZd6UK53aCkMi6dif7472mv7PEGoVZ3",
  "key8": "54hM2JtRPRJam1xPG8SkiWma8F1hswGvJpUJAynfDh3cwmeeBqtxmrFA4viiBwTvodNKcdx3m4nEqCFXoGtXNFys",
  "key9": "9JGgPm8zCYBnFuk6RbbAhkJXPrJvhT9Y5No77gZ66CZRKtWovzBjnzxMNosx2QhBByGhxV9XkkCQidP1e9dBXTi",
  "key10": "4XnAq3HcacLruNT2QRvJQ15tbJhdR1qNNZryve6fkPh53iQxqVqi1QA2TfqJSRXdAFcHYjgBxY7Di4yXfXzADzRZ",
  "key11": "tqFG8AzJmPZdva9C2zhFJKLemqTdeQNxjKp2BBrbGsiMDzTZyFg6jdjHRJYLGuWmEMgTsR6RWZtDGfbcvipwdQ5",
  "key12": "2es5yZuEVPKNrqbPKu3mLyDhBpoEpQmxts3KHJ8jaqvLtoeLrFfQ3MXM1CA9v1mBUmkmT6xYLPGJmAgVvEssiAar",
  "key13": "64Ni26Dyfka6ZxyVgEYcytpaCiE8pDpSKy9Dpgjqb7wYStVcg8Q742RSjwhKQHHaQKiL7fN6TMEGmCrP6geCdgxD",
  "key14": "5pTgp2NptqZQB8AnNkNTSFYTkNnPeAFgSxGjjzCykyxjAkeaJCui69sAsMw5vzg7HKr978bvMyonr5emQwfSMvWn",
  "key15": "56oMDU6ApzWvu94bvFcrE1pazGG5maT5BH5AvHwRHeJuyqsNcdLHLw73knq4JsJ7NRYvfTpV9KKFPN4WbNxwUhsg",
  "key16": "2LQgPBCtxdk64d8F8vXNXuUKkAS9QP9mbGktjxLoji4UL7qAqqiu6yJt2Sp3AKCn3fs3SBRANY7hSJ1QCWVVx6a5",
  "key17": "2w44NMbLJ2e1s6orgmsjU2Td4tT3DDpSVauV5AHAF9FrVFFAUwLvWZzzXauodiCezo4jMaEAb5vd2wW6gvRSy4qF",
  "key18": "yXj8JXSKpRAGrq95QKhPZLt31xzc5McFQhQFEBYNBdAznpZtceqUhbzdenfHYJujFw8fVeamdrdh6ocEJikcX1K",
  "key19": "2HqkX7KpYsf5zyHe8b1MdbwPdx529bmLjmhmDhCLKKrUXZ8Fk1drw64tbFrDpH9ToitTEXR9xUR49WjpHjBPxokP",
  "key20": "PAMx9WYa4NKM9tE94tQdtGdpug11Az5RBvqnLBmjed6fB5zreRct7rWfvQddxTHcadRnAxwJ6shPH2m7q6Nebvd",
  "key21": "4VWGJas3hE4nqTtiakNjmdnxo7di8TtJkjYKE5MVFktEoNKhsDWXGj5CJbxkYGt7U4cpkLMcmLV8zMSHfnSfo9RE",
  "key22": "3FzBept3suVd3fH94tJ9Jbw1QMbbAo8MPSija4nCBzeTsDxS7eEeqsS8gqRhaQoecoJQPXSr3Pa9os4jVvk7aaDy",
  "key23": "4kR1GasvrPG2SbiwWpezKbmMqKneHk5kVpR7jZdje8rcggvvQKoWwUKK7SzrEGAWcCdBm9nhCq3dWM5aZs6zWXoS",
  "key24": "A5Csw7nFbdea8frDV9Nt6DMcCCGSjihEXWJKZhyF1MqMXN3SQ4JpKQAvLnew9tjv3E91e3BgteZ5FvwGgAL5uSF",
  "key25": "3tq5H6GYKrmZdVwEAeAizDdzZQcrmPVTf1kGNNb6bMd8TadZjiyucQJ1Sar7LuRQewsT5yoaV24PhhFwxfULR2dJ",
  "key26": "tTFtNu5rdQdAjNtYmd8MA7f9qPAoHUkEGKvgkQLWtbu5dRVA76ufgXrsgxiUe2crE2AbNkmrqV5op8fqTNxsYXz",
  "key27": "2iSuH7g15aKhuXBikNRuCX2tQtEWRdTvQZigia9YZe6hbZTB9SqEnGz5FmBNtXt21J9xoYW7XLwujYuyQCHbayFp",
  "key28": "5xVe5XfnQeYYxbP2FLbKmfr3kRoVHQMPQ6zpnXkiDHTwhNpaB7k9o8tcgKS5bQBprzZntknPQ36vVoijEp2X2DnF",
  "key29": "xmdS9ALrgUMaDneXryAK6NZ14m6eMCJauzJ8ZUL47d4ejxRd8CEALpmAAShaTE83MvVNVHdq7F1SirqV6qqRiLS",
  "key30": "25VhAhCQhWaUemiPVoaw5iSkbjjSjYrPxvpnhThJt21hvLYZUaArgHAFJYHnXWHrQZP67pDEWmNPMNwcj5iuFvxu",
  "key31": "BnkZtQQPE8HfRVsifiyEr6JLdXGe86enutemtHnfQv3cxACqCYPtfebkgcpdn2MyJvXBDZPDhWZgLBBHRyvsqk1",
  "key32": "5h9fs3sJytMNUHtTnspsGT6W4QnsiZjsPZKVdkKtEt9G2NzvaAq9eCsvVNpgp4h3vv3LTqZ3KqaQHyRzXSiEUHEV",
  "key33": "eQkNuH8tZSJkMManBcnTnMxqauSULdKekve5KKkrJ1P4FpC87L8LQ1tw4Bas3fMue3qFpsCx8NnnQe1DP7Er2pA",
  "key34": "PpLsrfh35scDdJmxrmMWbruhaU6KU4RXQruNytvWTvbyb4yz3fyxtEUhPmCFWkEX3ebCA4TaVifQXakeaS8GBqy",
  "key35": "4U3oq93R3QBitaQVcPEzZC5jF5hk38gQFa9RFmEULNjD4DeHEDxxSarEk1sMNBM53HhY158DokQGikRRmLLa5HDJ",
  "key36": "kXZfPuHHPVSDEYS6Xae6YNL8TgZwwkTBLcNV9C3NwNvHHGvS1GxVRbCeK34MuzYfACCYZss2nDnzFTK6TWXmSC7",
  "key37": "2g39ygNi9mcvd5xpH8ByCp5kLpXAjF87gpyhZFus7RFN2coSdc63pLHQfgMpfwi1SzGbvymcLmXJXbtz24HjU7us",
  "key38": "2nSoq2vbDcwdYaMK3WQMHYUWk1jSmn9C7SqL29tbNk3aVarBRroVE896cXdUDRQtUg5Wo917VuWPFxPG6iS37imV",
  "key39": "3XyDZMREFYbkNZSSVXLCBUkaPwkn8dXqia1vWfXXvP9ypPqwYmEKK1Ro4vY4z9aY3jjH3QpR3CnQ7bLA7U6ZLJq",
  "key40": "3RMw6ZGfeRJGdxrj1GZzBh8xRH6B2DUA3Dzsd1eUKyew853hLrABzyGqkWqUbPspFvkteR5mRq5dCrGMu6FHAagp",
  "key41": "256KgnJ5J9kZDuwBRYLDTZdqQb1JH3YZwSSHBttAV8b1jHnhRF1gnbCjwGzMbyggpDVvqgZnyMSqExYkCpuBS2TF"
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
