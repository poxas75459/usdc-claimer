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
    "3ZgtZCCuFTMFofNhLEyz5W8ioYrDpETBPmmQByHLgQVGPZ5xnTRmCsQn5pJvnySK5sdUmy7qdEw9wby9URTnRT3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPmM1iWzfxJicpCovUF3bNiFjGPZ4iQTVkeovScXAZhvY69uYhGZfqFKuYYrrjuPHUyQwxZ3B7pT3XuZ3A8soem",
  "key1": "2dhsgs3Fr5U2TF48eVsxyA1GQBPVPY9zq3J2TBqwwymCT9qSQofs8YknnYPsQiH2akibHmkAEG7CtE5pYNsxexn",
  "key2": "5A19xumgWxPqKc8SGhKQs8FiTdKoE7HFTiq46hcx5RJocVgHUtHnhnd9v2dRXyX6dBnaeZSENWW2RKkyjXBkXib5",
  "key3": "2uUJX9vHu3g7jL4cydXMwd39xxifiQVLBNZ3PYk6b2FpR92ptVXWFgXFWEgMGRnw8EeSuuXHkF6euTfTELp7hNAB",
  "key4": "4ALBPac8SjtZiXGk8sxCjBbAgy8yAzynKeBC8vs2hFTVB2NCY34wmgYxSQfu5JdoMtpADfFNRm3dHhcpmaH6GqLo",
  "key5": "5hHGSJB3GWR1LboSEEdqtujmYJbAnTidbrXYsXxe58Rufa75wVxrjpuLrghfFFXhfbY7n2vv9znvLFicVJMen25y",
  "key6": "5Bg5ocQ4D7yZ4XA3B2npeuryNbHvjbmxq5Cm5ojjM8GDoyqY827iyYUgAij9ogzLDuBAH9DUvNuRLBDZEiFwYidB",
  "key7": "4K2D2Ctd5cRrcT8n5SGtvMWuPCT5jGzjypdgCknJViuU3XhTqcD15Cky6fDJfkZF63P2kdH76hKnJmPAhfatYDdS",
  "key8": "wwD5V7GT4o2Bic1cs3ut6EEZZ6Dfu3fUxv32qHQBCF1gKNTjTFXRm3wHAhZGfCreXB9NzZQELRShD5JiDDQ2La1",
  "key9": "48Xoeg6apyNPsJD4cbMrAtCzcE5AH9v3pxu5VktwMqaoWavHFJSTik77Yi3okkCwMSYj21TKYcRuLnBb8WYFDmt6",
  "key10": "5qyYaZn9dQ9rv2kCyCJAQQj49yeCE221V1opigFN3Wp11ix8cLTznQHPsMG9S51GxbyUZVdykR65NfGmnjDGcAzW",
  "key11": "33S3SPmxXdWd18fNmSCDfomEr52hkGZKJaV3odpeHr5LSKUA6zD3rSSzzQs2Lnf65hHhvKv4aGdTQ4Q8sgnNY9Mb",
  "key12": "53JVmRtEjU6JCKu4yTaxXo8NTJrQcZfNU7431pb3bSRBGLqzkfnDVk2tXPJrU3cSYVG7HjWzHJAKfCZ59jR8qn1R",
  "key13": "BkxEDp2X36VbTKQD4AenugEqNe1dGrXC76vL78Kpjsa9tFjMiVknndRZrsJoSYARNxSUpRV9Eo9BrzLRJ1JNo1o",
  "key14": "52FayxzFCq4RyAYdUzdKZceWCabsipxWr6uST7pUqtcZKSyS5LbqFDkADE2Q4ymxnULGeWDmsqbfmYLnapwGW24x",
  "key15": "345NchJdnGCYwXXzNLiNj1MVZrXMD4S2dk91ic3jrxS7t8n1kQm4jgJLhCy6RUUhdpz6MnqJd8TbyKo6vrX43hsT",
  "key16": "2qq2JEvjuivt5puZf3rQEpGzHFVwhLHaBKqfVsit8gbvLYAczUr4dGCtTYLUfcJvPoPdr1NmnZx4hkEPM1JjMDww",
  "key17": "5iPKY4agB4bP6XvdfuTPWqSQNSUqUbGJ6yw4gSgtNmPT4p8ELaoeMv8amy9Aeh6WX9rnJFERRfzatz2cXV2HNBzi",
  "key18": "2xwtWWGjPLxpmCocbXeqDU9zfqxDJVs7s2M1co4WqpSaQP6G9nHWBUPEmARGzpGQsQdJbc9TAjCgeg1A6A4p6jq5",
  "key19": "5Rno4yYf177MbViVzt1SPTaQhbenssJAGLLwGHeqgEhahiS7hGEbRs4SJdrNshfgXVSFfETJjKPmDZYA3rWyirE1",
  "key20": "4W9f4DYbQx3iqoy4ttkyBN9gkm4XYB1vS8tiyFGDk54MJqmuVqQStKBT1denw3pZtMy9rD8yKiaX2VUa26P2G6Lu",
  "key21": "2t5jcyLiwGcDCamByLCo7jdK2n12EwYTZgM8wRmNcTmbK76TWLjib2iv68HU5jrBYJDTecNqv86Wvnj2asc4ofGW",
  "key22": "5AaaxBLj4zZRLy8hUCZiC3hS9WJ2LThFhSJA6GLbPZuLYuiz3SUPKgWv4csy7AoCUYkPxDtEFeYMGdgNUpFEGM8G",
  "key23": "33w3dxhLcZJ13AXakMGvreG2PCCZ71Gb75evLv76dAwxr3DwVpMPpSMtYJx5zj1SCyUReTAd68FPBZDmmPZFYpe9",
  "key24": "CzcnW7T9pQBz1XvExEBKtAiyde2t2LaNJCmp49k6berJh3zefi5bzwgBV5ayw7PCoMvRGdvCgqnGVwGBsjuy4zg",
  "key25": "4A7VEqU1ZWCNAaVc65u7nb9EdKtYCHQGqkkXsZcqydvX8NNKUVH1HCco2jCJewvKptLKTLR9gsLMFgCbQsnaNBLB",
  "key26": "5iAGNwozNewuK2jqjU4fGuB3RMixXEE8tVZ4CJbq7osNSapVuUbJdpRRJa2862ha8KLAN45fjSotB7mVvFgChbz1",
  "key27": "a9cEqph3JfXfLWTpUKXX1YNiY9a87EJTq1816q95PUgHoMUEd8LE4XQziPLT3fDpVRpdz5TFCm5a7btzSkbANfU",
  "key28": "2mehsWu7YGP55a7rz9vRJEZTnPu4yj177wPJoLKH4umWUibtBZLqsHS6qLTorVp5QHjB9YnATfpHHGV8P1BVokPq",
  "key29": "5gYkcA7JZWT98ySTzFZSAjRzEvm46K3f2fgYwivHWBvYGroyRjJWys9L6PiyR6ikPvzCLgRSauYnYdTZF3PHC8XN",
  "key30": "2NPESChobQNPS632MpeTeynpeQBxaLhFQJT7vjvRmBzv1Q7HeP5JWPYuHdS4NNE1fKNqDsopYxAMsxfMVEvgV5pg",
  "key31": "iKV8bapyrdTy2bPFsEbYp9rCTVRZgRZ3NmWCze5KQHWa3aTrD2EcsXLehB6FEEMd4L4DT222AuAeNUsk87BLbxx",
  "key32": "4X7aXFJo3LSm1WRyJv57b5i5pkkDC9MCu1cxorBWWAhEWocYuNVkuwFZch8yvnKCnnpNXtf9Sn5XNKWiJ6KGPMLZ",
  "key33": "3bH32eMyY1HuApxGE4mFzv4fkTPPxNMxeehnVzQvXBx9GL4TEBxo6ZQj2migDpYKkUQ3MbS9qJ4eXs4twtJbu9R2",
  "key34": "2nLEnhyJGeAW5XqknVpAju9zYZdQBCdtebo7vTV2qBjQDesKQP7SBgeumcq6NyFridkZ2J9rkoGA2jktiVRYsHe8"
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
