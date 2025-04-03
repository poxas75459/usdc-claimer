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
    "22UCvkR6iyCYjxtd9WjBfpsS6RVAGh2nWvpuX23SZ4xy7Cr2D3rcnWj3E3XJwT13Z1rmjV4h64BZQQvHtpYWe8sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qmG9Miqk4QX3ERSBtwqQhFgCNc9fjfvpWrP84kpGhmpCG6mBvvRkkWxtgJzVhRaCGRYxhbnvBx7MFAhzo4QmPx",
  "key1": "55Qb5ohfMhaVRUSar3DWG8rqzSjAEuYSEmnYyVAB6Ne6ttLkbgdAWh7EncTSVyPKpCVQCxaAk3UpDZ4CxNeg5GLq",
  "key2": "2VK9HvjdSD72y37r4cZq3aLwGiD8SzY6LwhVmHsvLpZUKyHEjjXvtMTC4qbHJZ3JkwrsWbkhCPRRCgwMLGpbcaEr",
  "key3": "2HDipvKZ2ipkEccFZG14uG2PBsPE89iffZrUn6WQJUqjz9zEWLNxBpxsnDeQMmCN8Tj2Uu9SWZBtaqiPsoy3H6fG",
  "key4": "5t7L5uboajJrGLQ2i82xVvvx6G4B5G2uNQwnWdtBrk93xoRXyZZozUGUAChRaUGhzNSXu9Ad9xZmXMuf5RydXcrg",
  "key5": "2qRMiiGwb4NNoeua9r7vrtRStYKPPp8EQmS64VSzpWwGgz5wxYEoGamh5Kesf8DtN5kPQjLZgdpBuzyi7rnmvn6s",
  "key6": "5316P8UW4xZbSM6A6stZES6shS2AafJThTXwh6kUTC36w9LfYmFPXrGU7CBZqVsoPaYqkryQxJQw2vejnjgkaWAe",
  "key7": "5ic3FDonyDe5iYCLmJwm9AEPqBb9vTB2AQPXqrDko7tFGtAyAJbMaC1rawvVgQBzQMQQXVgeowVmXpzVMKNYYH8g",
  "key8": "3xcPmvz4ZdroEEBVvpVsjeR67NHYxBrRyeNgmT2WQcQ4ewyFxtxJkjypxrcX5GmzQJgNszLLDEUhbiUgTV9wBVmv",
  "key9": "4GKsquGgQ6ostKFJEye6a1VRHbL7hhaWUUnpL7wxSBeJ7izcKanJ5BgHyR1f7qUjZ74rPw4s4MLTTF4NGAbF66nJ",
  "key10": "dPFmrxkyHRL6XpnCL9KwJaKMMwjFt8fBSbkp8zFDZPsgPLmod2tTckdKFw4GZFYL9QZ5h1SMX7YzdnFjCqQadbr",
  "key11": "4UK7RFPMVd5Q1x7sFXr1eyD2S2xDCHNdwo7g5rAHHFGwumQhVpeakWMx55g9J4zv28LXsM4PCayoUW7WyBd9RTum",
  "key12": "4urWNxR5gEJeNV4tJ5N9nEi1p6k7KhMw1EXz7XuXwa173z1TZWRG7imCe5AmE7ZheRrEdFSLBB7neuXS4M3W7RGp",
  "key13": "5pp1dvie3LTmXk5C3zGqqFxUsmrGrE2c4QqgMvT3W2UwzetJhdaJQWgnhA9f5ULV6WvSoZWQZNbopyiAmq2mTXNz",
  "key14": "3oJvqrS5CgEtGihHrhdhNBt5iLGsXHWYgGFSXsEozAC7Mtd9Kd5Vm25ghVybn4vhTcuSj5DCSUBPzyYg1GEbasqg",
  "key15": "3ZfaJmUc2YgeeVaif2CThk3ZH2uoz95bRcsHuajNbE8Uc31SX7wugqn8wedeYNN6BTQJyM2RFoBz9hjEvz4TG25c",
  "key16": "64DHBxp7WhBQ6BhsnrkdSqLk8hBUeTfw9YtLzz5ZZng5UNrvfSyV2JpFwmrmC3YUaWDejKFgc92YTgpZzgnQKDLY",
  "key17": "455vbK9GfZu9kFeyVzCAheckyorSmKFycF6rBtu1VJWnpMXyprbLcjMH17NT6F4yByACat57nxqdHrV4Swwepu7Y",
  "key18": "64qXyksMD2NSqQKUX5cuRMcJLeqh5Tsr4Jq5cVAqeyh1gbXqK2a31H8BXv1tBbWkL65rLTUuY9ksBtcjYp6bPPcB",
  "key19": "3xGpLP95KQAUuQGPK66XQLbpatjNjLsYq5HPwN2Xbcazfou5mGhKiGt37qLaWEf4FCuPzygb35MA7rQYnDGnxRDP",
  "key20": "2crxxdujvwzazfeksnXdSD3a3HeWtBZnR8hPCH1q44E7F7YSa9uuWvCW8XdpVxQ1rSdNNTmcXmUM1SH1ZCgseaNa",
  "key21": "2pMHgpnMhi9dUvBjyDtxS1bKvYEiRnLtiLFtS5tQsrfmFUM5U9jqzYsxWAfxMM3MjsXMJ8i1SRE3VDzqNagEN3fM",
  "key22": "4ez1GN7xQ3Qx31vFdDMsdxwns74kQq2TztRaa88qxrJST3rBnjAKKEgBfecQeKmm2Z2AEfoz8rr73P3izsPvxNKw",
  "key23": "5eM56uttrU4Pdkrd1mruvjwXSoA21iMpcPhBj97xcuAbnYKYktmYpS9tEaZw1knDZfWE4JD84DMRQmE1YZ9ib7JD",
  "key24": "kNfCRieY2Z5F1F2YSwpMkYanPYaFRXa4GGfDA2kJUoWzLUFrmWZPk8tXH3iDF9K6KdwSzmXNPCsa9vkSdyx71Bp",
  "key25": "4V48PDXTJkAT2CsHcT1vAFDwY88PE6PRytAxyPpHxogho4mW9PLby6iKzdXBoQN4PMF5tWzmR4rsfu9dJxRHQbsC",
  "key26": "MHpUKt6j3hARHYVKpZEvPYjuDTU5UBmgQ767g6sFmSF95fbguSn1QbeGvnzfVhwL4jCHUQxywAu4k3sr4XwR3s4",
  "key27": "4WFuBndQEBWUdxHdnK5HixW1yEB7jLxbMnnT5zezqd4UZ6Gz3N8uKLzMbwWR9NwxV2v5stxJ4ztUyuxLBfMwAvi4",
  "key28": "4U3JS1dLnKfTdZcNGp9ry8V8TYWu87Wzmq7ouCcf1meMCu5EUh5Na8ZHeL9AqN72DzWJbmrRxgvfXLZFnaLdVHjG",
  "key29": "3hSBxVVwpKWMRM8L26m9KmdRgLVuY1Pz8KtDvk3dQdRVNnLzPA3H4ntkpbBEaNed1tKz9TCQ1hTz2oVgezR3mxc3",
  "key30": "5AWjzQDEfe5UeGiMdnJgBmMdVR33m4NJkJUJLChrkPFCM3pXdvLG4epTETj6Jvoi4AcwSGPYGrnqYmV6K2BXCBrD",
  "key31": "4CtnTfmUD7NReP9TnYHKCxTU9kt9GMPM1DWZwD83ByheojWPsA1nqe3pNuBmT4zw3sw5Jb1jfNpKLNsijFXopLPB",
  "key32": "4dSfLXoejFpa7BQPB6pqy2g3u7NNywBGeAZSh12xrnvrrszpyMt1W8Z3k9ypC83z4frxUL9qg8JSu3GDTBiCcusH",
  "key33": "56AtPGahPAiJaqKDaegT4n8gXaYqRmbdvE19BDv62wnefqe7UuoWqic89k93YkFmuAevK71RDWxw2sWkYncqWQ9g",
  "key34": "2XS4dEpXsNMrVdA5C9t9f9m76hM24YBBq8re8Yr7MEBtiRAGFXPDRCVxaJTnpSadWyakPdFt7r2Lgqx1mJimespJ",
  "key35": "3ipoj2VQPmWCCWBqFkL3i6e16P8KUzXKfVTeE7vM6jJ8dn8zMgQu164qF43qwDmCbtoyDSS6Qn1F5pBw6LpwRoyp"
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
