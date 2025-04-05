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
    "4K9mPWnwymm8J2stECVTrXCdiZy7jhG5eGbcLX7LXvauVT2KBLeG5QFVCHajswS5yCXenExzGZqvxwzTMf7n9TTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35k937X9AAWp5z3HsDX7Etadv9vYEoeLLHmYWPjKL95x5D4AUou84Dy1r1n7nYcbZ1wpMS8Sh8QoAStWwfiR8T28",
  "key1": "3rQpNZ797NaMqyH7de2rMs12sLoULhGP4yz7g9CKNKJyprqpDivDHYZ4UU252XGzS9YXfemvgC469DAy6uwkwLRo",
  "key2": "5fSatQr3Rd9nih9CapxQPmV98fHG1Yianf7Aow1jsbhRbBeb5i5RSbEGe38BvcJ9DvYHo8HSHaqE146Z58fvSGzQ",
  "key3": "4w9wnaBCcZrPCjZHA4mbw2tWHtEfkGWwCChiqCWtYMW7F4rAty3EtnHhDnuLMehReahaD1fTPgfYJFrXsCb11pYW",
  "key4": "5dqt1W6q5gK4Qj1xadww2qyFWUEFdwMPoB8kKsw9qE3Th9SnWhHRJn5BznNuqUn9qNVhDAG4VUWAhXLdcskiDq1q",
  "key5": "U5xuBFvVgHQdgrRm9CmA6hLRUdBN36xpgotUJ5uMC9FuRaJKaXhNZpBnimNqWeu6QLcK2aG5PGb2q42a2zmJiED",
  "key6": "4HBy1LcQVCWQe7LNr9RKtUrTSxzD93dxtNsJjSpidXeUkftgm4em6f7Ym2eTy5erNcz1XPqfJ5vwKKmwbYFSfT9C",
  "key7": "424S6YhyGp31wDtyYB7DA7sbNmGR4kCn6wYz2QY3Z8TNEp5Bp2LUxYZVnwzR2LXuKf7JjQ7Gk8eW62V9cxBcuWNJ",
  "key8": "2JPFy8sUW1XTKRmmC3sUxJu2A7PZzapesnVmHMd7oYodNcVhs2hswvBEBkhubCFSmBkftG4vKXxi2M2eQS3x9PTH",
  "key9": "25KjKEJ74TMK3rosVCPDPsnDvkHW8kf9BYWGnDxqazcNs6kp6g1YQFWjfwgqeF6Qp5qBcXuV7MZEvmw4RZR1ao7v",
  "key10": "2qxB32vDHGuZuRLZ6yLm4yeCHJXiwNvK4hxLLfBMxwBtHA7jwyrAuXiZsnxXxU4wsBSiJwYnjVjWFTHTbFYvEagq",
  "key11": "sPnWNgewfmFCpDZduSVHHtUipMV3jdGggkednJzaJQB65UQQZ6jCRe4UXMs2F65MSypyjVyVWCp6gEkgQqQHp6y",
  "key12": "8rbRkHGNEhzxe17a3qXQoPjzoGTvn84Ke6JUy8pv8p5Q6Jy6WSbWfSgejWjRXAfrQpN2VVKDKvGQZV3b6RR2gfP",
  "key13": "2ZpCLQMidECBBYkB2Z63VnAC3yWLLCaUkyZbDUTTtrsWKe1MDo3afHFp6LxXfcmJXChNFpNkGmq84rhUmcNNJ1NF",
  "key14": "2D2tPio7FULSyXN8qf7fyv7KB1xot77rmHUNvNZbBajXYchj7e4HdvLEYsChQfinHmBC1jmy4fnS9j4E79LC61S8",
  "key15": "4zBXirVGpkPG1mJT8EwBbEUQBEb2n91PvedbWgLKG1RnzcLL9gqGRHCYTwVhfn1DcHhVLJrRdgFcz9pTaC5EyZgy",
  "key16": "5CQsk15n7mihcktcarHkKHtfn9b24fczcjVQRU1DVbJcF67jmHyfJyxpdJucC3Psh82R5Rzwa4gwiRGiZFE3JYSb",
  "key17": "4XPjN6HPeHo3nDjyysvAeLr476dgbPqoU5PB3Dko5UaCQQqn5QjYxBf6NYzNNwMZXKcsmHGo9gctDqnzT7vxF5SX",
  "key18": "67TFidJQm9dg8kf8EWWa91GVVSFxSsqnjxn9Z12HWykotUkHyYwzaZeL3GPfx8UsaFxoUEE7FkzceY2kRhQUaVAB",
  "key19": "4EYwSz6DDear1ZhA49Lj56CMFKoX52GAkM8N3y8KyvgQ8bQqr7LaYr5A5YM3tsA6ZQcHoTEVEAjXCnWCcnuh9RQ",
  "key20": "3bQDGdgb7U5qmGSYzLoPDWBnzWhccvqou6TQ5h1XQY2JjAqk4R7TTQ21GmKm9ZGmcjskoGHgfSudMZm34p4LS85p",
  "key21": "78e29RmPrRcqmYqvvW6Dkd4KyJN5xmabW8kpkS9bWMnK8epqMGMSk372LuY1foQrEndECS48R1t1QLaGxBea7Wr",
  "key22": "3LiS6ExmLccSmfFRWExCJwA8kHZCNfdUKS1BFy3Ygtddg24H3MPm12XqbUz3djQbRu78NTtwHQrujjtk8iC9xxgh",
  "key23": "5qd7YX5MU9zYPLZtrteGY8MkQEJ1EHFEbMLdBKaXybZXEwqDmgV3bCe7P3ywL5q1BxGxEb27ZFsHmbXopG6Ukhyf",
  "key24": "2ywG6B7MYtH12Qzrjqorv7zhJa3nyWLi9fvMWsQutLnpcVzde3WXCqE83nLq2kPq3WyLmsQRT3Kbzv8VK2bfmY17",
  "key25": "PZZePTQouDR626GnnPqfnphs32smLbhagReN743LRbw4dX8f4bX7g2yZzXb73KCXqFVPSd7KMGwZVL2Xw42w9gq",
  "key26": "5xfPVCJFZQ3VDmhTQvNCg6odCWedDqnDda4Ci6Pjx4fgj9w7JW29PcVuY1RHbZtT9VLU757yRN1Cwgsdxn6QFRVQ",
  "key27": "NuXYAf7Lk87NoEHdKbMVdjEcBvTU7bGEUAdd2Firx7omoAugAgq5RicDerwm8VvWBiN9wUY7GCkKxhK4e3FSFWV",
  "key28": "3aEtBPHGwCsiNe32sEJ1n92XPgmZ8Z7bLGZNmQnbviVekFbuYupg6XpFgFhQbj2ZaGHuZXbcQVeuhQJR1YDWngmZ",
  "key29": "5htmSepPhtHw8NkqZs97dQ9QfeC82rp9pDHw1QDzg4VJkAfWuY5LSKvDHrCkoZar2Xg29m6MgYYCBC96mbRbdyEY",
  "key30": "4W9XEkHsFaBcy9ZE3EFrw6usByyMdTvHdrd7gC4zztpXXrhik6L15LzrU5RvwNMWGESrYorjzjaiwRDTSLW9isdA",
  "key31": "5XCcyxihguR29gMZr8nEaxwZGu1UByccsdrcv81st7GtBjPdbJWkXk7Fch2FFQXeWW1jWpeNUB5iiX7TZdpRp8fV",
  "key32": "4KEupRWnppJt16AbnCuRG8dYvPPK8YgGPzFYqmKQaF6R9JS4EGdUsuQHBrCjvhsrzZE39Ttnh7U8MeqsnP1tXoBU",
  "key33": "4335iMbEH3Lr9y2kXtxxqMDWf6DUQSJp4nHUGr57YVxJ2E1ii8tH1aEC4SqzB2DZWp4HRNenf5aPskiZyZbMkFda",
  "key34": "2xVCffo86sSAqGHEgprF9vyTniPmAjk7LBgfUYZiNPpZqAJTEQiWDANzAqG5gCcoxzirVaLye83e3ykwJDaUyaxB",
  "key35": "4nr32XVuED4hw14uEJzBBmq97nYXziWoASWUJUEupJy5HPKKsPbCpKbtbzU1cTtFTX5HtZU1saaSoJL9yd1AsSec",
  "key36": "3bY69QHfAc33NMGWggGqV7ZH9vz9J2pWn9FbhoNYn9cxuoD8gTrhr8FAPF1vjqW4QdoGo88Y8UUFp1SDVheCbWjg",
  "key37": "5o1aou69FsNJ4VVg2QiDRWQHGeX96UuKQnmhnB2rszqNTvJLSi8EBqnTGVX2mPpzb6Rqid9RiRnWEL65PSp541Qc",
  "key38": "253esbo6uhznEj1eTogmdAS52Jbd4iJ66EYn9srvwFFYwqSpX81W8ETMT3DxwvqXxWptn7LpQ7LwXULi48bg4zcS",
  "key39": "4RAqm5ypBohasndG9Zcmi6KgVyNKN3Jzu3cYvKMiNAcoq2PM8zahLbZaqheeWCqoy4NbmCPBFk3yqfgsGTgiD7i5",
  "key40": "2ZqMnDb25QvuD1zFK7GdRf5BNYfft8Mj2wYSckVA7sFaoJtpNfV8y5k2gvmQzJZAWegzcfKA4BzKSBdZrPNcfWjr",
  "key41": "9dGTsg7pzVNe9pottSwwje7reqd2WhPsfWAzwntmWVs41ozESaqFQucoJXBJ9a7YD1f5BdTu7VzuQEUwH34iyqy",
  "key42": "JtziNRRqAqLUzCifgV8jv6Zf6oGAzWWTN5zRfYkaxKHQ4dGmuSDYjtbhNtxNRaUqQXWmFuFKZMLgjbmeoGsCpx7",
  "key43": "2iFRS6NtJQfYp6EdNSrAstPT7QptLFMwK7jCGVQZfve1Mspb2PuLenwe4wXZyPJhejLsvgvcmzeHDkJRZq8dPYTR"
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
