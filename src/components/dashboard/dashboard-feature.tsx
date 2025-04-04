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
    "LrSfLCdUhEn6kKbcbtkc2WDzudBJkoXJbdu7XL6q93Ns4L6M1ExGxS2M93bRnEAu2Ex3XtCSujC9aKfCCoHK9yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DwSpbwR5nxHYFF6TgLif3Vb2HERJZFo4asmJLm4YaARWoJPvPnXyHie3kEFBQMzeryv35xnjU9YHKfkQ9wXMgB",
  "key1": "m4fa33vGpQVZNTihUjw2ZPq8bH3s3CYKnMy7qRCnABiLY89EGAfpqjbFs3e9yimDGS98pr5uQErEwqz6uaGtJSS",
  "key2": "2kAZtwrDHZaXA2eQMLPhc63i6EkteHMRGX5UP6b5fuGbS2YTgorc8kTGWi3qXqvY5igVkhaubK1ohVABxdFhukpN",
  "key3": "53PStniAjQ7hNEKx35WFxJ6XrPo9rhW1krBV6caeoRb1Fu6Mh2fWupnVh5EP199MESGrWqM7H23rB49nYuJezgnL",
  "key4": "34VWe9h835auw6iBKExEUXtshF6YNGX8aCABcnmY173jrCjpCvEvW83oZVWMo2qRcSjmQgwL5J26Gz8wQMNyoY2J",
  "key5": "5HbJnseP6FvACwrGy63cJLgizWYWTvyNCrpU5dtog3mvmg2yDB24VVnEMLV8eTmBrdi2KZJ2AmqKfc2cFHgNW1x4",
  "key6": "2egQPzRNT2DbLjJb3chGpKDUKqHJr2J8t6EWZTxtScjq9EfQWiGFoYb5TedmFvbiELXsshmsUUsfgoyYgu9vJq6f",
  "key7": "4VbDjoce9XZqmmJ3v2qAULyB5655TXxYR2qdAwU2p9Ks36dgY6bTrLviTmS82rm3mDG3AdprCMy5MwjuoCbprMBs",
  "key8": "2uRrS1mJchGCC43ekMQ7UM7L6H9sDdngr17ptWTHDa8btanGEmg8e7c62e2XRAK241PZQBfXpxFXbtpteX7LjZdK",
  "key9": "58nkE67BdtcBCiNPjrUbSZG9HNCXF6qHzAKao62uECjcwdgjwQtSazzjiJSSSHXLBGHJEL3cfF4cffHv11REtLGj",
  "key10": "4emd8dwUFZSy1bCdcVxVTBE8cd2GxSYqHf25NB9XRvAQsjESTort3oUhMfB1aP3csQ96nGUpb9GyHTZRUTUM5w2D",
  "key11": "3Cz53UAtpeHnWPcfnkK2CxSGchYJFN6qPcbp3fGJUkEZ1MPWbPW1ijKMxV4GSaPKiGN6kuqsoCMnJteVGeE4AQgk",
  "key12": "4vWtyYkYdXD96qXw6LiAR8qtuVQFZTy234UQgCspjo9sSk3eNAkFY52xFRuCvU6RMfrU9HxeazphPRDWpTtoZZGs",
  "key13": "66zwSP3SDTR7roD9X3EWUdyZD4X2LGR3XjGeJrxrsjsqnCnG691ymU9ggkAATgTd5m4C3FRTg2wfpTeD5kgZ9Ftk",
  "key14": "3MzqiyTDV95xoJ6duvghKjPtTm6W2tDtxQHhhnkumamjZHqVEcXTQM9mmzYooAFd3u7LBbNFNESUwpuAfgQyAEtz",
  "key15": "2ttNnZ1Zim43uTP8fDY7eLXQgzJhEbTfdcREeyYrSWzHYc2WFykGeDZBSvLnUg9TEevKtcNtayjAoJN5kbxLiLTK",
  "key16": "3ECwYHGGXhHS2E9hBnZAU7QV38UijgEcUdo45wcjunz5svzfQrGKPmUMUwtDFczVAdhPMeJkQwqxauWEFeRex6nT",
  "key17": "4j766f1jyYvQj2Gqcbj3VtbBjpBZu4oRqcx6fLphiTGyY7UcA4Ez94qJaKtQQGj3Up8rwCeAtr6B2y6wK1JooX37",
  "key18": "2J6HU8H9GvLUQLcJTufWptMBMTdQtqhB8AR4UG6urtfGhkRUDiN9g9KL2yKQ2moZq4SZX16YfpaTqgPnwhYgnB8x",
  "key19": "Eqi1wGu6WG91fQf2VXYNXH9hgXqmrVsUopEBmV3issK1s7m3aEdagR1wVj6ZiUdP7E4kEPvHbYKfL423R1zhWWE",
  "key20": "4Lrjhd2Jmz3NG3yHkpyp3ZycN59PvEwMmWiGPimNDBXZVJvjexhXozkCf8k7W2A1Rh1i1DSMLqaADbLByQLDPKk5",
  "key21": "4TSjo8AiBc85kuJbpvJAScQc7bof1Ee6fpAstXv7WNRNvgdLwFT2NsVJpjQegZHFbZQrTcxBtTuSBqb3pMzihJGA",
  "key22": "21PS9oz7VPYSbRRDUq2THganRkshdkKE23GEXpiS5vLPXcGYRbNDZc45qWkGwB1LabR5R7uum6GaCWWEjTYwQ5Uf",
  "key23": "3ebkzBhvLcidydf55XoHqsWG6KjKDFCURAvne3DUtX8ydQyfZP1ibFUpLn95iiZfhgAoKbDuAHPHWUChdzjvvCrD",
  "key24": "4g3j48qxPiQW9pbvKKUMkPRNrzXE4XXKteXUJ2drkhLTD34GLr5A7XyovKZuVa2MdNbigNoHaqa6i7b3Y5uCp4et",
  "key25": "5cNk58JqKcegJ7wAEd7AZFeRiNXPFrhN2bHzExs6wSGxXmmUQvvZdw8zJwJffdLZuzbjiRB8W3Bhksovir3NxHCv",
  "key26": "4gyDxySKwVtvXmah96HmkiZcHaLGaX1vQhAWMDZxChHzQa7sU8cL8b72fMHSDxBRmnk7KGig3sFPZW5vg6CY6cMD",
  "key27": "2oEGiZGRZVUoHoUejAobbq8Neq2S9yhSsiAC584QGSG17WjszwMvViHULGC8kS3dgVNRKxzVQU6uqragPPYiTD9R",
  "key28": "5f3GY7Q3Hb8c2UnPdMSjyBHFejy5zR2vHkr94fF7BvRgiiVunw5orAL2d2g6Ebdnq4kNuZ8hLbTo99FE6dgYm6Sf",
  "key29": "5tweCazLPnzPgXnXVFFmB6oXsJEVHW9qxUWWJUxSftmigvit8546LEPoBhLi1BLiTrumwa4WMiASTgqQKnygpL2k",
  "key30": "38UaqiNqizFrFvBa2hDmqqtmvEX18r8HcPu2UMXY6SzrbAyfbHAyTcM6L2LFvkh7iYLVjHVF98F3Dk2XJM7xZGwp",
  "key31": "42xaR23o2WhbFp947aJJDyP6WPxX9kHCE6SugxPA3zLK5FMtiJG2KSyRmBgcZje4uoRLxP5tVfEAgCG2WSfc2hMd",
  "key32": "4EpKkQK5G5u4gbxmEu7qxEF5ub7QskgdEE2UohuMXUC2HnwQgWqMxDwnu87ysGvPU5ATcTSiCHmNUrwjnFYZR373",
  "key33": "3vrC6nRiAYmTWmuoP6zaSszfXThTn56z4GUYNpTGDzHnavYGWjgMUrKLA6EC3RtiUdbr6ZUrkNkcp5rWt43j73Fh",
  "key34": "418iLPWg9m5jTpTSyHLtymodWNK6km1n9DqsoeNXAAtPi7WxtH4ykXj9T772WiGfdJA7CBBtV71XZGFoxrTBBYzR",
  "key35": "2vh9dDF5RTHnTVfv1mVv1YaRP9TSKdS6yGxpUnX6MjpEDixcSFhPan1n1ss9fT5QXtfLRe5KrPnS9ETMTx8JJzvZ",
  "key36": "26yAa7d3x9VV9NRKUQkmFtDjkqZ6JH6FFYh7o9Wa5xbG4GHibFkULuo3SkoFFbPFBiEFQvwEm8oyskdCgfdJPZ6P",
  "key37": "am35asFY4wHdDv9REbGHRB6XXvkJ9iSAf29ZtUWESB7Utm3y96t8WaPTQt1iFXvZYAqS9KFcaqk5YUfBDXdqFBi",
  "key38": "qJ9FrxbqvztQP6QZ4Rb8c2Ai7aRaEMkSMa1ofFYiwyrVVmvuUSzCo1MkCAVKfiTS3ZY8nhjucWfhkrwkkzLkoDA",
  "key39": "5Duz3XSzLkweBWPw76gjhkJuq4cW1zVQfvAEPuMCARdDi5kr52sxgxydsAY9mnwLQAjDK5feBd4YF8AdmHU6x7gR",
  "key40": "3vEtnH6ueLHntCmzW6wYTwKXZCLRaN1jAa5ScuXB1wBB46Uuqr6VS2HfCmYngU4Xcnt7dNkEGqqi4KGrSTnPW5EA",
  "key41": "2C2A99oHW6DQVV7oXrXMS5HosRCH3crT2c9c1DTzcL2RaYmWtB1kZhUgxXrs8dwPrMiM4yqHKsXZRGB53TaymtYC",
  "key42": "4fkb853GL7hxPw3AiP2EbmnKouQBdZbamY6vB5YFw1P978RWSCtcZRqhWvvN3Bs2LTNnzw44Yo9Gi6HogXknobcA",
  "key43": "2rypGRWhqfYiy18zDkTRHaZaaijbBeioWhJetr7SqQEnGuB3WovMa7PxEKUUBbjTHsmzsRjcBjLvAi27JkFXxgXx",
  "key44": "4cDUcpaEQHWU1FpvR865CaVSQbQKDQ6A8RMA3DCdWhg8JXKDJvRN3GEbgWmMR6HZDcg7SUo1YVcUBDmSfjNM9BL6",
  "key45": "54N6AxeyRc57BzJGetDcKsAvvAoE4xQiMaTqYagSoHUn836vktutmVay4NC7vvTCLvJazeVDWMD3cWPDCMDJ7uUt",
  "key46": "5v1o3NcvQRLfNXkWTkm7cWQfwwgwsPY9KEqZWdgvZuzvGFhi5qfjhkMbYQdNQFj7XNwAfwGY9G1eokAXNUfD9A1x",
  "key47": "36on1w1dL4x1DnzE9ZLH8EeCLh71k9fUhLdVLrAwEhFdwZqiMEb9LTnFU8uHgwvggis1B22iVywFXkjbCML2s8Nf",
  "key48": "2dPb7yDQeKUc6jL26iyY58okBXCaTetVNSbFaypgbU3ZZUHh6BVkyMAJYZmPn5ta8ne6wPQQWHqvn5XHnLUuGXug"
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
