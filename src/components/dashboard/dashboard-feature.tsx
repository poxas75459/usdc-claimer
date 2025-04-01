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
    "24uukcHCa1RGNQEBfRmnTFN55uFnjmWF6aXtHNd3YXkpQupi2N2WTyEEZHcaoNFiNFaFk5XspesCZdyQGJH1rs3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ev6tChn6ZBSz6EP2FbpCUpKtAyfTyhB9mruJGwFJaUZwa5kNaWnc6AETQpkDUsJeeRGKK96dBqUvk6vzxRqvb5f",
  "key1": "4DQSM1tMFApSVSeRx7rtBVqVcyxoEDN3MaA82PmjhQFexiSrjdSDaoq7t5zLPwU1KS9NdbEg4cLdRPrXKiXzdrDe",
  "key2": "42zHfd3U8srY7nNP2SjTLw3imvP4f71DxhMzvosdxJcLMjqukimLTswSreg69scQ7VFH5uV6gKVqP4YLo3N3c2xG",
  "key3": "3ynYb5UUqza1dxfPzzYdWwnaamAEzvAPu6dYbE968TbVJfZGEbg3CyWxZAZfFkdw8gNoXrPAdAXg2o2BnirKBGzK",
  "key4": "5z4r9i5B49mSJkdvKfUWt4unbNCQAFz9qydsd4Gg8zXrWde5GSS2UjWMCtWNBhPS3pKfAN8cgxVtNBNW3rEher8S",
  "key5": "25Bom5VvcdrHgQr3aZYU8BFr3U6Ft622aP6atxi5tsDe2FAiNMjPSAquLBHizhtcD5ec38KUqLaD6AGUAi1ZYyaN",
  "key6": "4bMnGwag1TUdpK7sJPYWg631BQ7X5A4oEU498M38pYWZ37VvsgWDFnVpqwtEpPASW8vqwsxViQPjtthR7XVL98q1",
  "key7": "5374QcLaTCYo9FTr1RsCDEHpqv4avLmujGEUaM3DU7bSNwUkLCBKDRAFUduVN6MK7M7fALJ6GTkmrxqRcaxE9TUy",
  "key8": "4bhJgc6aJGSyMeTy4rU2F6J4eWhySHnVMKfLWNkTQtsWi3UvP6Nz7jR7mMv3JYEVD8rZaGmVhkom8Gmzvquteiot",
  "key9": "4nt94dBV6eHYHcgWPRDpKefXKcgGJ59jJ33dpj6re2wT91c737yNZP2tcnpqq1iDndQcGGHyqDNNkA3tyKrxy5RW",
  "key10": "2hwBLzjCtrV9r3XnmbakrVUMDF7szdZodybrMAj3iHHsuDrwaJBcuN9rRsEnouufjE7vQUwhvoibYtrKyQE4XzQF",
  "key11": "31R67AhvM6uKvqMBXwvqM7FPbdEaWG5PLPj5a9xtj22Sa9c8ALE3pmsv8QJZHxBkyHCBF8KspyKgfK5ZeNft7CkU",
  "key12": "5UzPNizkHMEmmDqHzhH6KGj2x2caUCfpLTV1VMdhFzsekfUHjPRMEKxeXLBDMYwozaWnmHGRgiJLeFYrwPBwtEVT",
  "key13": "UzK8uPwCW4cE7xCywPdSmWPprA5Q5tzkmMK66xShXhzkgi2wPAMnqYryRAw6qFuE9fjoTaz734yvDiQmd9mnkTA",
  "key14": "DNSjRyFSofFMYmfiwTNh76dh9ycEsqLQWrXrjuHHA3X9UQgjqmrjox5U1iWzwcy3nCMcZXC2ABEZ9MzJpqPTtcD",
  "key15": "4z2LCwfkHRGxtQUC6peoP36d3ecnnA1BfmYee4REWRPXg9VhcbbhnggyQMAdRhNqweru41Q5pE1zpPwv734CRBbV",
  "key16": "2h1VtBibPdiWvBHJdx5tNKQ79AbWHtth3Jovao42idwjtq4UAfFpKyeJHmNaiKEaUwBTMXUV9fXiw3Z7nzqEg54m",
  "key17": "5EdcGSaGvLjEXTVhrmd52JpjtEjswUMdgQDwe1KsDUem2xhbuMTT9tXuRoYYGfYziGjRu6zwBnMUxQu24RgHMJ4c",
  "key18": "hN2oJA8BsqJ25SJobu3hC5XqVj2rgR9gKXRv6LGGXjfhtkLPEivQL5vjssK8e4MWj3fabcXErPFWHBdRhMvzK2m",
  "key19": "55UNb5YV65pUA2xVf4BjH41hqE1MT5aU6nCBgbskaqnAzf7kADAD11LLoSwRQkTDiWFPZayvGxboN2kEQk6ovMSe",
  "key20": "3qUuPLscGDuMDrQxA3voUvWh4NUHA7rqzjVd2YqKmSFa1xrj6fVm1eDLKMCKzuoJHZX9h3RQkprVGeQJUi4tnH3C",
  "key21": "2424GxkfY5YGbmaGKaKEBW24i1ZUonguqZpmy3HmSaDyziUEFhWpeM2eL4frnU89W6fJsrtGbqwSkkyGN9CR3hPY",
  "key22": "2TwZUdjEZbpGxzkvNitj8jkWF8yGiFoKHVWDFn94eTYhD2vsnvJMK48BDyseY4MUoHWRFhkxeZNireK2d1JXxGVS",
  "key23": "271mmqz31vXKKnSj2JfzxnJ6d16G61HXt8nrP5tRDkRNvunXkkuwHz6MD7JTkraaCbYkVdyqTcoH3tsiGra5h9t9",
  "key24": "5wGcDjMYjbErHKAbmQ5ANd3H1rZpUe1rKtFPk1sMzLaRUHStgLX8M5VDaq6PjCY2dZcZjyUHkdGqcAMruQWZJiDX",
  "key25": "5PZLHR6P3jaspqx7DfNpsYqZ1JAYmADvoTCmvNzUoJjMKg8JEeFCcsQpFWjqekKiVDbDaX48h3pBuKERxXaTLxbG",
  "key26": "3dFgKkixQVVjWgTg31L3PpryLXGRfM75yWrjHtwXKg2TSMtRCp9tuDxVZBgchXi8ZaXEiTp4jYQGQBfZ3VsQCbK2",
  "key27": "4xrSq2UvKhpivheJsm1SfUoSbFRRgrtZY1KNo7sSBb34xo358cmRgBGy3zrssxwrQLLY2nGJFoDXDfVhXEjx5QwW",
  "key28": "3y7XJeu78S3hRFEqXSswaLbAoXeQbtLauFMMnDRZYtU8UBsiGGFykoSDmktYtRTnDrSMdV8bfEdK3veeGdYVybm3",
  "key29": "5yumBZE6ju5S1QhiAoXcvKhihLSZUfGdmL6FjD8j9sUygvPa2VCSaZVXVUsJVr5i7z2znmRtZsuZYKaBgDirA34E",
  "key30": "5yTbJJQDuE5ztaHRSjPQQ2G9aHPwYFeuLdFUYW8KiPkAsCYRef19ZYb8qGJHjuoaZF1kuzBBo2saJVP5MyPjWb1T",
  "key31": "3RWKr1cN8zSxyPNK5fLniqn5AWvxDJb58jgEuAD8sKcxu8HbvFQnXN5zr9H8NyJd2LSAaZ4uATRQ18XUnf28uoVQ",
  "key32": "5J5xFsVvKcF7DSUc8E1u5xLjfWzLaCKDmPzR7H3YqmnS71M2yqG5s3xnz1ogGDrnSjY5nbqdaDph5hBbgFes36vE",
  "key33": "Uxrx5pNm8j8iMmKB2e1wxEYjt1s27AhhcC5JGbavHJLBHzmwZEAQmHLA92ncaPk6MKkjas2A7H5FyYoDDdQT6fw",
  "key34": "HkD4hvgCycGiiFHG5CGX3Co1FYQdowdzroBXMroYEcQirg9MjjcN1F56L2AQLVFJMmB14ZZebYGL7gbkCQyGdi9",
  "key35": "2Y1vxfjsm7uiqgTwa6HkKJamPZzavqEcZStDNp6jhJvs1EhibdPitp99zWSgscC2gS4bE16Ta74GQJ9chTnZsWEt",
  "key36": "4a5HM48do48eWpSbkTv9gUdjmgjKfFKSjm11CVQwtFw6bAaph7zD61aNtgzdMkr3ijFs8bhQi6ks1H26APcE2ckk",
  "key37": "3HiiQoexQU5KwKqjYrjytwZUXYW9cFv7Mej58dJuCZFLb9GgVuLDJPRFGTByjCDBZBT9zYfhoD46jL8ibyE72xPv",
  "key38": "5REmviTHC4Wdmg5W9Ru7qK7r9Gmh132WHaLnfu83keahiYaQJc2h5hhRGXjFZSRbLBnGQpDotFZWo5GF7o4m2eAQ",
  "key39": "4UGM21NkqmvPcWTKQKEh5P5i4LBqNTqoSkw2pyfnuQAhXr1E9w8CDTGXUZmAvxHG2h218hbxXTrHuBu52mQzGNLr"
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
