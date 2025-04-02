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
    "5po2nWSX6cTo3Ju9eW4F6p25cH6LTqFcCGbTJyzpzgcSVR2tPgwVEZQxKZknaWpDwQ8fqWaMu7EgT84bhWMs5kUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBDLD7HpMT3Cr2wCTTveXBPXYzo8H4XB9nnQVJKsofZC9CoAGwQnRQUYHcCt8zmkxuKeThwxTgSyjAMNL4n85ow",
  "key1": "5WVVg4kdnPKdQj1HQD5pzR6cAYQjigJfq6UJgiW7RvGji6PNpV3CdGKBxif9tT6g2s96LTjsQvfPm7KvMFVTFeNB",
  "key2": "45eSaxCTqrFrDQNFxNvGkA25nY5ZF7fxasidsGrwTEnPpBygdLfmsnGBS7nxdAYvx6j3B4QbGavgxcaN24xbbLB1",
  "key3": "5TUw77rziMuRGzEKpWw3CXqyNws2RkaFBjzYyVdskXVaE89KY4584psxvrhPLxnLq1MNLoDeghj7PrzutH1pw9mG",
  "key4": "3ss5xGNyqfL1teXa9RvecpHJNJdWYerbwejVh3gdPKHWQCTDr7v3bWKXG32Jasd8Um7YzT8ksqCR1hG7qtUQvtzS",
  "key5": "4uQnDBPX5BBmCirKp8uVgCNDnD2y6E54Ezd4pKJuzSwbfrFhiD4grSHj8Tpg8L55ZdA9gLVvPPwadAXxLiBFDVsc",
  "key6": "5kLWzY293cJVKX2FEpmNchjrdEshLWovAJZmLfhVmU4RCgrewKdPKWfdtUSuHrW7hgCru8Z1mAknR1mivteVjrAj",
  "key7": "Arn9fbea6fcVbee5jq7Yg3kqgQ8rxoTcWdseBrkxz4AGVEV5SbzvtFcA6nw6bshnL1oSQ4avh3YPWU5eAZf2yDJ",
  "key8": "3do55qkiEuJgzQ2sF1kzgmcWUWpUdw5Ywrh1AisUcohdcJbTBvRTEuEqAiAq5Rg38pAy4xnk2KGGEM2MnNShwWL9",
  "key9": "368THWK3u53Nn9Y9xX99MigaengKPd5qivUu24f5Yo5g4SQSxx29oQ4psoTcc9aB1EmeABsAbpdzcYYKYZqGQ2kJ",
  "key10": "2xqXymnBDF9sws33svGYwidf5ED2kPtEvbCwUZ61m6QXCVdfgbF3K4YmnEKN6dLSTcuNbY57W2nTmBRVKykFgENG",
  "key11": "53cDW6ZFJ6t6CcexuuKoag5iwzppqBw2CVsuCgRSP62wLSBdaC88Hos4o4eibFiCvgaEYLKSDRWYnUmGwH3bgoez",
  "key12": "5e1g4FN6gfXv5eNCzArkRM13vZ8mfcUFe4yNhaAk3Q2LkpNEuTUddfHyJyhVsovM6S78cqDS9EojiMPbZ9tRPfxm",
  "key13": "42cMVB8t2nykg9hcDsgZmgbNbNb4jupUNmFUjdVbf8qEyvgWGaLJiiyy6MGYghFSa8zyVN3Bc5qZXjCEh8sx83q3",
  "key14": "2QBipgWDJU6T4oBTQ6pTss8dLjUzRUkVmY5Ad2ZJqdEMPeGfSzSyLZHgyq6eHyLDokHTMJi5TGHDDPpoze2gHLT4",
  "key15": "2YCZbfqZTX6FQWLqCekHf6b4fceNpmhUuZkudXtKkdQUXL56pamn196U8cdhWA1ExC6g6SPsX6MgBdLK1uGysgjt",
  "key16": "5pwGrn3SSSKAfLrHyatCo2A6ZkmvJBzyV5G5sbAEAJxP3h1sCqvRLa2WartD2BhNt7zsDkMw2xeC4WmefgNFoYJC",
  "key17": "3iBLYcuUqr2gHgTYdCRn3WeFixbuWMbqWDXXE9RxkR3CFfNNCsUUXT2M1NvdJpmN6fDFSAZkyxR8zqTm8ePLRiSr",
  "key18": "3Q7Ja5K6Vt7VPFaBB9Xn2oPDxeE6ZNq19dMhfRA53t9uS7TmZHeKnVvDKVMVSjYNCVUTpWXehK8tHLhSbZ8E95h2",
  "key19": "2VESps6o1Xv1ZSNGQzZazXQoqaLXBVSSTctcZipUxeL9zJqwbfvzCqFs5NfJaYCudMuUjDe9oC2myZ9zS27UkBEs",
  "key20": "3rwVZ4qaa8i6mb8ioK28Cy6nqZHsXsEyZvoyYGg2saopai1aMby8e2AzkQ18qXWv84ZpPsGzGadAudxeCiyTZb8T",
  "key21": "4d8WTEPjwJFpaEJrWxHEMSHzT9Py3yw6HAJ5Yuv92yRFuYDaRvfiuFX2m8hHCjTBBwTE9GhrJkxQTVGszCodwNZ",
  "key22": "4PbQkgNhWXh2ZnTs78SFPBxzfCqz8dhQUNFqiJus6G2i8SHGYfe3J52f3tMvdgKuq3Zi2GVFhTZ7uK5RUimoe9Ld",
  "key23": "4rNofeTQVTA3pcDUKwjXnJMSWpd7CCEjibVjp7dm4N1VUJ1XqxW4pGD7URPQizJ2Ra6KJXGc4Zw7BnuHQSZJWUJj",
  "key24": "LYDoxGpq5Voq9iP5DJq7W9JQLFV8nTHdSimC4bTXAoLVbyQ5mRAJW4GfLm1Yw5524Fi51DGcV2r9oyuAQB1kasZ",
  "key25": "2fwVtTtXx2QBuqCB9eEhPhcdCnLPNPkb9XukGsyecDBX4pWQdF2wVhoZL7TZLzSojrgwXcr5gnpT4iw42PuN5SYH"
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
