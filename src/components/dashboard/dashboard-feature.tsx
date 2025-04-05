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
    "2t5S7MEQtKTPjvA2XtHxLcF4W1E6z7YfTLToQVohbxKnK9pqFUA35GH2d26zYuh8R8u5NV1NWSByvhCGg6r4tudL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxrckJvK1W8rQ6SmawCFGme89VVY8mmnHTKerAZoPKQYktPpAFG3wXhxEWfk7WDtEG3NtZBdW4S85BgPGeyQFsw",
  "key1": "4tutSiMd3wSwM6LhGUyi5akyEAUBQVnRDLhoWXxATYoGGir8mwdDvQNM3xYYjaHJpJG3iLLH1jNkUDY9TTB1Y2WG",
  "key2": "5FhNY8NWRADM6Fwn4SfcaDgYUuUqUaa9AoK7DEKcKcTvDkuaaYncmVEih4cjAqWFY7bfabMsH6CoASoJ3gvzacnM",
  "key3": "4DHYYb7GoY2KUfSSFQk4ecPf132QdJNnoZam6CYRbv7p9Xth3DtdEFfY8CTfVhFmUeNzDx8j9RSr9e5Whdrpams2",
  "key4": "4vu6a1gBfhxXFAV1cvi5hXiJZkX7nzCMFAgoZWK2CtXGQt6BfqvQ8EEozMQ6d2VQaiqhcMSd65qHmK44DGLBk9QP",
  "key5": "4T6zy6fC2CgZDdsKeLTTKaV1qKexGU2hqF4rLfZFoi9mv8LNU1TBVdvC5mkFgP4JZCqMotwpd9wXrymwbA7pZqYZ",
  "key6": "cXfrnFahB84S1yDCkSfJKNzHdW5uCoatAqwKVgspEV1awfjpauPCMKz6dPxjrK1QH3VJzSkaE9nRGr7bKUka3YR",
  "key7": "WTiad3XLkPcm51YswXkqBQeSp2idZF3NSAZ8Z2jcijvkeg3Anf6evjNnRpUecz3eQ2yJahHLUzR8NRdWaVso1d7",
  "key8": "3Y6Rm9ohcnN34umqbhvKs8YgQP37qJgJyfzninuBZ2kPZz79MYPd735uFceBGLpJ981SfSc7fqyS6z1LNDb6uWRp",
  "key9": "4pxi5i7Kn7mnRqVZyz9FiGJktKeEeb823wkZEPEvyWV8RZ8VAL2MHjiMK9eqLoZgev41qXxkzPv6amrKbVjtGeVs",
  "key10": "5VAht2GB7V35hxXVmhnfMYjQugstDZQa5WL7vNURTauZ2BwPZsjogWEn1ac46MyjCMS9cmYyGS5M48Cf4RFyE5Jb",
  "key11": "6WxZNKRS86w72QB6fhUDoKE96aeHt8ZjkgVYqutV612DFpJ6jJFDXt9NAuo6WyGMwzjqR6b2SyeCwEY3d4niXYW",
  "key12": "jhf6eKiiKK7fzWdYojo1FoiTQ8cV7vEqVKXMcj2Kp8qaHrVhnQv6VWr7vSXXWaxwtD2Cd33tDL7Rbw5vQ7snVfN",
  "key13": "3JiP8qkQ4h42ZJA2SuAt5RUCdQHuAVKEe22MYqzaYisNc8BXCPk1QzTVJipXpK6F255vTNF4nt2GCM96TJSqtc8G",
  "key14": "yh6HYPBButRkFNuEB6TvCovbsXNwHM9pL1W6bBgYLA2SmrV9D4eogkEwUHwQWr2obsig1LUH1crUz1jH59AYhwf",
  "key15": "2jLqbUQ3qXPkcxNwHrfQPoYJegAwPYKXAJsiJkagj4myZHucsTUMfD5Hr4u4RE4QiRrRzyRRdrGcEAP9n6f1nHE9",
  "key16": "4g7HYJ8nDrMDRezhnpZLnz3ojpbiqvu5v1iMsTFAf3s9kPvPYGuBBgCDjXgKWm4E6oFn1CvSdjdc5jTXEBLASxLP",
  "key17": "3FouzKMVcNefgzEMkCuHvr3pww1TcnW1kw6PFDYC7eRUe5uFPZic3rEbcMF2fsmPYXtWdB8t4wR1CoF3UfrmEp82",
  "key18": "2BUgnsrHAVpmR5qkyi6QJV9WU7AHyokLyVhKUyKhVfg29Utnm1KnkcvAxnBwXukbL4HqLdACxMnzz4f5EFT1BTJh",
  "key19": "y1pJdxZryNXV2brge386vRFZeVHSbYJp2e4mby38dKnQMKwHvpbVrtY2VpUgfvAjcdfYF6gv7jpe7NrpJXik57F",
  "key20": "2SEMBs73haY1g2SJaewFBC3rsBTs8fEufLdZjXxvXJZ8iAuvGFTCW1ahmzWjQ6mVSB8TsTJJyKchvdhM8xBDf6vY",
  "key21": "3y8TRxSww1gR2MLVEgjsfD9Lz17CZBRwQGtDjvq1ZrJKAZfnm9sbZe4CZNStNmNCYzt8DNH6JLaEhfZHXMxbZnXi",
  "key22": "2ZPEiquwP9Zt4y4gEBnDgKxLEWRDBDeJ2qQ5ZLrf9WCLbpPtURHpCKmda2dckxgE1cEaK6Bty4RvvBxqGcPE9AXa",
  "key23": "2safykyfQ2ntXzWANiZCC9Qm9EBpVYKsgcfBPNposr3iTvF29qDveXzW3rbVJghohcFWWq18AYYCpJ1j78xkhqxY",
  "key24": "5jb3cihaVQTNuSmuwt1cwszNASg8WoADAvEPX1F4GuqV9Br2kGS8CGDMza6cvXHkWn1fPqvEHx2pmDpbgiknRnQD"
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
