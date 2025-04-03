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
    "4qxEhyAtR6RU3dKweGxhvFB3qC3mR53kexYGbdaX98pTSkXfMCUCSgtWNxeY25TqS8qZGsv9cuyq5WKcYcKJaKU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfXaXLJdMjHkAPjKeJgGqFHjBRmrfrYcauMEF22zzkEzBvcsrb7ZJCbmRAEUh7iQcTWfdz2VNQmAG879Hw9NYcr",
  "key1": "5DRBKfvwRw6z4B73wDHupg4ynsNQMNf5PNSCUSkKEHV55ZcuXKWU5QVjZ2WoqUNcsoL72aBcDHRSp4XuZsoC6t49",
  "key2": "3DdkqFQyb77jjnZGteJk8zJbqSw7X5XyTTCeXtiKYh3JWGskuaMEGPaMQR5odWuHVMYk2RnoJW9V415qPyNPwyFp",
  "key3": "jotbr2DdY4nMCqFGziupArWWrAdQgBejxEk51x2CFVPPLVBaXgj9q7J5xJwD7bFmj1J2AfYwFY6qattUQWstKjQ",
  "key4": "Ket4LCVS5ZZygXPGm9TxgU2Cjr398D6tSbbqU2pDVUcT2B6K5bZMa3KGWswUvmBrY7dw5FNzm1hXxtYwU2w97Y6",
  "key5": "3H3gUAq7G3wY6SXr1FJmeEJrXc7yXLRXMD18xEHjqLrpXuT5pjVrjViQqQ5Fpeef1d5kFMxrwX2pbHbCr7CJrt1w",
  "key6": "5TY6LzNPgyqWwWRGt4uWdhpncpnDhWdWi1PWZcbJySU6XtCKWA2asb6r1qqsxVdwGe8FyPeYWsBdCVXGZjK9ApXH",
  "key7": "4TLUu7qHkenKLmaCsSTkaigxDQmBYsnpTmCQknu9aFWCEfM9i1RBLbp8Rb1Dem1wgWK8gYVuuUEjkMEvKcAYr65w",
  "key8": "PmXTp5PdfMtoc5a28pjvzhZLipeSszYv9vLB5soqGcgCUwopihLnLH1q7HTnicFbnMamWvKmURQfp72bxiAcGdo",
  "key9": "4zt4sqVp2HshZMZTgwAg58kXjyb1smvQ5gRsi8tJedHAo848RqeJKBgrgccAp1D7FDgaaev2m8zqSaiYLnQ56ax9",
  "key10": "5gaq4q8MFAvnqdPRiLpBEbV4Y1vdntrzmwNpCLtL4VMPFxmqfBEZDrpDAXTnWP5cXFaanVwYWY5b3HxvEYK9fbBu",
  "key11": "2k2P2sXLrCgYLZte8cAvYEBzkF6YBVkep9Dmi4NHrAK8DPsgVQyd5NXy2egUAfTmAwkcnKDjMyeR6dthZ9UQdSnu",
  "key12": "HiQPBZahrBdFeDP6hwWQi4prQ7hv1F9wCtpqLj5tmNMB3nVY2LSwbg522zKDB5ZAtKpBsuAj7sTWdXkoqnQYdg7",
  "key13": "415PANPNq1MkQeCUjhUFcKSiHucuJLcN1NgdXGvJGFh7Ujo6quqa3RVSsKTZj1qzwNgW8GGEMwMDx7VLB7Nsjsm6",
  "key14": "MFhRmFp3xt6DsuxV7Nqfg8CHeYc5mSt6REQ4u6bSV6cNRUq4Ra4KA1pVYN6FdyxeFDhcZiNf9UjifcM7AsMYDgR",
  "key15": "4HuszYeizbbgjijjP8cSZLXDo8iYBszA8CRcWfkjMw3UszEhJULUCcbFXTzq6bEtKyjr8K9BHzSmsToscLkgvBRc",
  "key16": "3a8CHHNS4ZPQgKzuzPuzwPCqAdwSCdLG1KQKxj6QGULnvoNSXUjpieMrNtupDGp1ioByGqPHanrneiNRDnGmTZaW",
  "key17": "3zjriAerePjmYkenE5Y776pC8T7eY54mmTXj8b8Jzt3pPAseDBMLFHWpS8HJES8xXH4N6REUqahH46JQCT5BRbAD",
  "key18": "3gLwAoAHHoiwxK2orw481BWRGBXenD7fRjgJe3xsVjAznkLjdUUP2Q4Nuy7WNA2t5a44JfAABaAijm8vZZwMntGw",
  "key19": "56bzx7xHgjg2bEiMMiDn4y3BFkZtSeduo6nqZptCJ7GrTxeBxxSQWYLRDtEJaF6Qthj57TNZR8wnto8Ap9J78rWh",
  "key20": "5dECMiaKEjyjetJLtjrViQQvWBo1kQWL41m6UjjzRpE2pNHbMhk8cRckUU3CSYSg9QtNJSaFWnxfcPS5AwyFWjQV",
  "key21": "45qGDtPCRGDDoxexicNkT91BjL4FanQDHytFVeZKRQdumhYyprsNotiP8pdSDtN8hiyugYYBE2NnwTR3ZDb3XzDn",
  "key22": "3Fpo9oZpPiZRyCWoogBTbF7Fw1JfZSBswWfFsup1DS56yAH6h24noyBW72Dja966ThY3frGZWhBmrxRmh4tJDMzz",
  "key23": "WJx3Hyhkn5PXkPFLzZEwbERKEEnSStWgTWnNd6gDSvQanPWXvXNUf3BJY6L6PAFJCTNVbWQ7pk6aSnim7kFc1PF",
  "key24": "YE7xAHc8PLYzEDU25rGMiczUxGZKAvLFZsRE1NX7DfsCbFsE1rEgrY9BBR4KjTqjTRRzT1sT7rZHstzccj1p7FF",
  "key25": "2kTkVn9sa2NjFjftTuEYiUqnCodEWfgeCmwgRXZPpqDbTWies1XtSubV8J7Ku4C87jfNGxtvyrr5M5RqCZPNr9Y7",
  "key26": "5VE1v5rxCffRVgjEATVd1GhPhB1KmjqQUS1WYyCpPhj4JvZ4D75Ytxovz46BW37JhFfyr3BZzB3hNK1XNmLkrx8U",
  "key27": "MZS4qjmt2Y2BNd6FL4pht5PAN2gR7rnc4AFLuXekAn46AvYDPhRgYkceaAK89o2oJCMGv2BXmZVSPsbPdWKFvFd",
  "key28": "MtN4u7XbDnfYyvwGoxQWTdm4ToY7stJ7HMNzZ5oM1xDanwNRVi3DWiPgqjPgBK3LjqNboXyZfHaUmKzsfmEdbT9",
  "key29": "3pQU46H9afuB4yUHGfziNVN2HswvNGaGN6h7TfH3uk55etvAhkG9gv1KeSd6MPxaNWT973EEwe8ZzauSWyYB2zJQ",
  "key30": "nRJDP1fRoto5jnVGj9ok1oHRWRGAy4wicJGRJdAGmYXokpU4JyRSbfTbNGVdgYvQGmLTL4RdKHFMzrBvzwYE2Rm",
  "key31": "36Hocj3Bw8BdUMjzgx4aRgv3CRRWK7JvKpac1Qtj5qzNKqqhJLQetkVh16UW67LH8jVYdHKnm6AzHZk3EnuGVWSj",
  "key32": "DJMEPME2Y1bvcpegHPB8akcBJHoX3FkRivMM8cBHE4Hhb5rhccm6YEXEHhiBWkf97Md4hpMrgXCd9B1jZnM2Cy4",
  "key33": "2WUoWwJFHd7TCRyGFMdCvN8NGkMF8xcHcbzMafRGqPdxXxJT96Ab95eRBZad1cDbHsJhM8q5tMNNj8Cu5eUFp9aV",
  "key34": "4sPmPArxcnTHevRX3LGR8LaiU8kQ7syDcUou396MAgLZVE5APfbd7VKxD433ai8CAZsCnqrAavFRjV8SfdaTzjUh",
  "key35": "5YnjswCHoxq6QUtjW8bybmixHHyqGBxPLZc8fsJxf9AnZWHJeJNLzHw9pBrTA2Y5h2vHUQtkELgoMCurrwYD3MfX"
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
