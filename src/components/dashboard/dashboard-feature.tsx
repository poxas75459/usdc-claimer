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
    "2gRZZoaJ2kwYv53sZvCmUq7nFfBwQmn2eEyWuXxpudxEKFFYCNRTEBJ2oBKM36j5CHGJzARfDaiPKeiYwof856Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFexKY2L7xxe3oZQEHyVHEwtHoRMTbw4xQ3diJiuc3j2x4GHKXovzTfjLKe7hecUisJMKbnYY4LigHgoXUGcC2L",
  "key1": "323nPdKxospGvSZC6LFjrvCcG88jabMJvXUwZLs664dVGyS6ihnSUJSfX9zVhHQ7ZuAUNyN3Cnog5XfCqYUTURHL",
  "key2": "S1FPpkDTa1K7Lp9hAqmMdfSsSFeymi6MxBNP3tpcRNttu1KfLPiUjW2rpfYyrUL4uhLLNfXUDcmxTrSy8fwTmqa",
  "key3": "1USF6WrTRv2GEiMRpdL1J74MtNugwLm5pmtvU6jViudBNzg1udvW77rJiQdmp29xkC4zwvijNNs2tuJEFT9BEB3",
  "key4": "4tRrUaFqjyH9wPTGShhU9mGEgYp1jgK28AAtJXLZx3A1j2YEKzAATXb1kQpQJw7BQ7akDDfZBJbtioLZxtDUxDnE",
  "key5": "4mcGzqUwMmC4s1nnKNWv3iWsBigBYQAgYPktqNjrVsdm2YjrpAxXvKt6HgV5Hb7ornJ653YQj6FrEpp5w4uro4eL",
  "key6": "62sYEdY2DTGQDHLYq2dXAiSmfKkHL4i7JAeLC2Gr87tDpMW2DTpUY4ZQQ4eki8qMxKZQQzbAZaCouRZpfGEhnoZf",
  "key7": "21NtFkzGrZgdehRh2TEgatJBRjZ1fCsLEg3rYfaaubGRLfxVRpweDzzMSTRYouXNnFoknDHK37EENaniiajxCv5N",
  "key8": "2WAWGmvnAnwFAGg2U8zxpsyhXWNgNEudBGUHCgetw8zcCbjc3zagksx77TT8xsok7Jh8tXapurV6tQBspfG7Hx2Z",
  "key9": "N89oVapGYhgk8R9X278UGs3aRN1xYscjtvdYFgYycLe7NGjpmazjHDr4MAt7B3Sv9UTDX9k2eeqPvZPQJrR5hTg",
  "key10": "3n7GHFX8o68Az7S9pLLxe3VDNqJ1N9VmYiQkySphqi6fmCHbsDcdyhTeGwBQBq39Hd4KCMbqc9UnBDQhEH1b21H5",
  "key11": "5TKhd6FZz1Pv7drtJ8Gsdace2vB5Kd6LBE8QdEMLiLm4ZmnVsAFDrCL5WVF4VDUtxJXVow2UXTAiQpB2SQervCyv",
  "key12": "4oUee7eArixqb3CuHUnY45BmSUq4YixDhHDU9gCRNYpDdHSgipaFLvmpJBZztkyQzb9HQiTkoehfB9YYnLk6CuZD",
  "key13": "4GV74uvVfrzqJ3vZSwUXjvHDLDtdMAsufpNQCERQmMP5A7iymrLLx8TzAYQMTTFi5bxHqBjhE4CQhcs5uWgqp7EQ",
  "key14": "4vxWACvSJJw2sWpaLL2oWxuaL9ZBLgCwB6TXYTEFKHPEtYqMZ417DvTf1reZjFjQxbY7tfNBh9s1asqts64fLrpV",
  "key15": "3rbM8oskUCSXB3Jd55x5KD4jJv21MzvdzovU4BAQMwb1kBGenfrKK4pyxehEUj4uU9Ctr85JCx53Q2gNpA2mvP9u",
  "key16": "39fm8kNLZLoKA9ECPiA9kFJ13xwAEMoxuFLAGbceWGFtnhCupbqfeZj9yoFZpBXfKvMTurPdgzLE4wYuk3DsGDjU",
  "key17": "5CtVzmyvXWmwLgcWz8ZgdjvbZhKhHCo6Pd1f4CcE1eNhi7A1kWA7WPVd7v7bmv4moTuH1HfEe5XbiPdGc1sYSwdd",
  "key18": "3BitRUM152YT2PXNfmxGcnXZYXvaNFAZUbdN8GDN88NFetwzM4ohNjDr62MhTJswGSY5yJd73cz5Xe4kKJV2gMtu",
  "key19": "3r7Ukgu2eS5zGVEsWbRyNQDVkBkDiEjcLU229dGWcU54r8ZgBbrdywD4mV8A7cNPac2rL36yXuYogxCPfG3qoUfq",
  "key20": "4roHr5WaF1bMxLPTam72AhyqV6nbDCMsbTnAGVBo7g8739tcWcJ98Kvm48a4KDNLshD6exapBnypQoue7QM8yY2x",
  "key21": "4JrxfLWCtdt8KELqK42yU6h3A6phVj3qbXmLdPN5zhDm6MBq719HZiY17YqNBJtBSnwcCeUeyH4N2iLdabunXgXm",
  "key22": "2pdSuZQf89pF9cjZ3EkePKs3oYvAoposrhJYGhH4qKVvf5hbEwPMdYHnDxiYkBam38SEx8EEfGmPVTAWEsbcH6mn",
  "key23": "cjuVXzTBNbtyRFD2pMh64ZCBvxeBBDRpZmiQ4E56MqKMZL3k6pqA7Q1WaJCgRuaMJbiLHeZk6o88tYbrbxPQ7zC",
  "key24": "2G5eoBQSmcHBqtRnkNtPuE7CRHtkx696AUZHkowwHki7QfGE9c7k26GXYPd7xLjCEW8mmehQ3CdyKrMvND2RL91K",
  "key25": "5PW4SnB8p9fcwLkQCUdaooKxGFg1NXcSFYRMhbaTRbQrwHjPDSpJcvraMa17sZk1Zdo7v9BXN4g6QfALT1SNZzNT",
  "key26": "2YctV2T4wJqge4LHPzezmFMBnkpVnuwbJnnULtELFr4Pf8Giv582VfUFzxT8RXoKTbsf9Gy5Mj2MtD3EbzRaXSVZ",
  "key27": "5Tk79Np5xGbkvcfS8pNhmQdGCrTx5qQCEjEybzQrmwLyWBDeoSwBkyWUnCRLMhN1yXjPQjtQ7TQbnEKdyvRCabFJ",
  "key28": "n9zEbaGTqWHtwFpRfoJCbFaZvj5NqqPiVH2K74yy4y2qmZvEsUoLuhEvMBxySfYA7rnNHE52qtTmfeCwx2dS3ZF",
  "key29": "4q2KXCMK9xiDxahiRtCfxNvTGU3znXkwyHPLKEAbn7t4VNuYjgRDsbL5M9YjYSq2SqaQspsMwis6ndRKknaArPMr",
  "key30": "trmsdiFMsnNApyTgQmsnShhShLLMoviRvpykcEaVrpxuGpzrNLRQDCMMmwAdqU15rYxtboTF6LSJ1b4kBxfzrdV",
  "key31": "z4MnzYKZnmpMZEAWMv26GEWKF1xuonc6pu9gTsTM2BYM8bubH9mi9o423Bz7UtsSxfkxrAZ4wxE1bYfh28Gw8Mo",
  "key32": "pQtgofWbTakbRkyroCuLkXsyiC45Pqd7cFshXSkN7sP9vcLSqU5bF2dRDofoTYUje2EPB6JL3t4r2BfpWgFoeZu",
  "key33": "21RbHBT9XLAqyb26zFhpGcCDPnBKzWr7exqwizpgAxKFJQgGpfGsjMSiDggCxxfdY8qdAFDqiXDEToA5evj3GyEV",
  "key34": "LZtnRLoDM3APj5tLRSjPVCWGiRCHdNpL6Vvh78rVHXzRq1qmGnTBMUCYoUoxaJpxs8u9vJ1jaZGmo5m2b85wBKL",
  "key35": "61bwFbeZ7EWRqticd5zx4bu6iXaVvxopwEpzPsXwDzeJp6Gr8WyFPa8vmRjMfNdb5gGdKM2ZL92afEWmXrZEirD8",
  "key36": "Q4sPaREWeZadH5dsWj6KVh9NE9HSVxtfaWbZSjvAqYtTtL9ARQ9PEV9gsVhMKip1De5P1rvS3N4UuZPV5K5oe6q",
  "key37": "4VPBUsSMZ8ZKCEBDes7XJgzV2dvWi7rwXtCefYkz55aMCB1tzE9QtNYa6xxbNdrjpBujENzVUwY67npg2yRPAnT2",
  "key38": "2TuJA7Bk7i19TkjdFn9Hm3xLKtXHxL17tvB3kYQX6fc2GqyUW69fBhDmuAmZVV5BhMntW49F86QF4NCka8mjEWtJ",
  "key39": "2u7jxpRV1F9RpmsFo2uASR4W8R9LhVfnPaFEq2d1i1wrjTyS6cUxH7DGzbLi47Pixymz2HFijWoGNukV9nkDHxqv",
  "key40": "3PeEb9PSeyNgmF5rfG3T39G7mB13xk3XVdRwcfnscGtMD24r8uoMukAyJ8xFxEVGwbqmHfPJ953g9Sv8c77HAGen",
  "key41": "srqcu7Za3JuKBmCZjo5LLApNPYucwJWoEdKgKrZX7BygvNFFA6MXUrqmEE1VUDUWfteYM48brZZtzkRuaDxGuh3"
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
