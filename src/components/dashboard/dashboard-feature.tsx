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
    "5vVcUqFZC3nB4KWiPDNshRw4H8hv4qdaY1gRmNhjgs9KTKtkvaADdLdj4DH2YHH5XwAV2dCtKe1pqUUH2qXy8QS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TbdXRJTbFRZXMVhCMT26dx9CNhvFP6inJWyxo6f1hNmf94fxvugbfPtRux7uwEWJun58fYXtPhWQGdx5HdCGS2M",
  "key1": "2Gsq6stV5qu6ognLE5QtMq9jaXKoAuwdik1er96vSWauGaty25GWQvCwSgyvpL3tRVfTcB1m4HLKfNHTsBnJMduN",
  "key2": "4itMmEXaVu7KbCEy3g4hw5JtdTv9Y2Z77SRkyDmnsvfKCTmkoarGt4mPGRVY4N9GGU5Npz9dKrEEVWCvGThPRJTw",
  "key3": "3BxmPKFD7iGaQ7g2X2cqryQrzq6FauuhBDJjEjLJpzF6nVYw7fy8qCYaNo1HPpptDVtisRd53SEo33q1YPnZibmh",
  "key4": "4CNuKhZHwVgKvY9kECJMziLFR454ixgtyJdo3RrQrGUmRtwFXphqe16fg5TLekp5ASWyKBCakx42rPCbF17znFcZ",
  "key5": "43TZuEA6RwZNZF1t1ggtcn8ub6S8tTehJsBZ2em5byw5TM3dgW5RQivG1PqhTDShW4QvAiGDypPoPaDZQMGB4sPB",
  "key6": "2JyPU9ZkL464p4FC7H3aszu9o8v9k8mJ8hnqFbDfR8TvixuY3TKEMXLXGdMQTStFYzF7msVdQrYg2Nxib89uM4Be",
  "key7": "3Cmfxh2HtNq8ddv1LStAQqB854JoFqNZUQb81RfscEmWSRKH6X5vtbUucAG8ggrW1zqt29bCjLZAJRPF8Xt9GTy6",
  "key8": "4dhkgfEf2enmNLRJkqoMNzFYMbUVrrJDgsQnRrYLHkoxrvurPANbzahWCET9qXfp5eBqW5DfBZrypoL9FGVqT5rS",
  "key9": "5pJ6mNJXcvxAnZZkgMiZpo3qQ1u1SYHLjdRi5S6ZNEh1h2U5cm8ms6XAhDG2rnuAvD9m414LTm6UYvza39ZCQtEm",
  "key10": "4BRNxSa4eXU4ZXb2ByH3nLNftyvqdQadhNWJ5tXBbFVhoS2ECiViKhPSZDziABmS33tEJSuFQbz1BoFmHu4gjwK1",
  "key11": "4vTnYozhvbeXgGyCmHgPGBDRiHAg2jT7M4HWa3UGEzTcw48tC9D9TgRznL9BYzeT2w8hbph2kVr6mPPhbCD98rHm",
  "key12": "4hkTsdrPYzosxny7jGf5o4Pi4jJmrdZ854mvyEyyK6RZWJpZkZGmAuYLX39Ruc2MXDB6Q9pJdxF3MjJL8vRzn7AK",
  "key13": "46oB5CF34FHe4SemGhTTC6t4w1kyi8dvFvfQRUaLj5XvLietNceiHhAcprm7LQk8kuX5FGyiUgU8YZQrY9j2Ccgs",
  "key14": "my8e1N4pdF9uqUvcQgkdg8dTERUi3QNZD1jLwUkYcX49LMupRajs1aua8wvucRU1A3dEfuyhon8pboHpP4B5PGe",
  "key15": "3Cn6p1UU2hmeGcvFUvNKEZxEN7JtmPy7ReJXQkuAJnYB41PsWvPuNLDaQK8Mjv6eci2pvqsmQVf7HPjgbw2t5cHB",
  "key16": "63ge4FaoNdN2iMeiUwj9tQEJEi8oz9e8QhtL4Yc4s8whf8jUfqRNYd9neoxtagwtXtoDHXsVoWvUnXErPes8iSWx",
  "key17": "2eBb2nEfnxt3ifcZsdHnf9LAXEQSLMKZHf9c2oxCrHM91y9sJRwXJGbUauxBLPFaGPE63Cf8WGcPFhHAYH9QENKF",
  "key18": "4YeuUXyLLZEoQJ7MTPJ6ZKg53qxZuTfwt78sQ5FwwAmrvq4Xtp7Vd1eUjiJrN9YoMqhqHy4qxuD8Z3ATv36ETPf5",
  "key19": "5nuRRmA4B6vnr4h26y4orx5xNXHCB3iAmmLquneLrtDdgVefMhZ1o1c6psajUVk5PCrGNa6ivHwt1TwQki4xKJVY",
  "key20": "3kcHhe3zrRF4nCQ7KM1F6N88wpjrc1psRYvkf5wmiV64suAJ7kp2HvFwjrChq4qtiM7BLgNBnvzyGfi8rujthbAt",
  "key21": "abzffQrP2hGPhxWofystu3tbyhVV4XzfC5DzQ4f9ckkVGVhGpNJgKfS7Jnb9SMSMQjHmYeZBPMUcpTjFBqkyLaY",
  "key22": "5RQSGtvbdezcfCNRhriwJVvyg1bKqTrpRXUjst33UXTVFcR9E6anaY9wYGdPV77cpoBN9QFFRUJwiyM6FVLpAteo",
  "key23": "4RcCUrpJEc6RFBwyJpMmV7ScQyHxP5JkbK9E2JVvZnGR5bzqJQ1otB5RpsCNpw261gju9XFG8PGoDvHmah8bkHTn",
  "key24": "5xQuPLyjehytFGHJBoEGJGuao3WaEQ3PFE3x4S9bBdhvgxDQ9cAzymETu7JmfGMTRVw6WsmwcEYRKrNeAZ6dFx3q",
  "key25": "y6CKBe9pDcG9BAnGT2htXZVYXwkHbhw6ibLEeE7vbQv3nudg3U3JMCqZditcmc5Rna1Ld7vwyTwzZP8H2UYqd7f",
  "key26": "38tHGRFbL89c5QgpYcfj6s7znLjZ3bJEMGPiXNHpcSqzRhsG5jLzgryy3rxXKxpPXUhLJfVZ6wDUmeB4FYBsB2XF",
  "key27": "43jjVR2GwJAV13VYzCUVKue7gj92oVYemhtYCXFN7amPjDRjqjae5WNSRyWmPiNQPTNsoiTQ9D5P3nkcFkYfBPG6",
  "key28": "5qBoP9FDJt52LsPqAT5Gp3974tEUYBXkp8Rev7tedeKcXDXnpc5byyhmwCsFx3CQneCGgMyAm4AvZwbwZBRHsiye",
  "key29": "2b5j8j1jAf6toy1159QdBzRZVc5zzdGgVJw3Zk7PcnpMDFejMHzgx5NhhdsJHwtcX7sLdLGk8xYWhVdt41HRGUA",
  "key30": "23F9VfLexQU2xrfjyyeQXSrVNCd6CYiJFnScbw9KG46vCvDPVKd7453h3w9iKLSeeaP4a1zrnLUhhrPRb6Mw4faz",
  "key31": "kVZZ3uZcu4V98rGbFmRcao4kgrbu9X18tPVyEVTgK1hPvQqYWDCiUFS6B3Uw69PdR11CLZenCChsnBhgfeCdRJF",
  "key32": "bptsQLk5NRHaWDy8stmke4MRoaRnsANn77rBz9p8gN5LwLpqkeT9HJkbeb5DNUrvoBDRH73CrrkZREdBbbYb7Ao",
  "key33": "4K7JVE3M1S9YwK4BP9ig1oapBLDEBxFvAS87sKVNbNHDTSWk9Kqq74dAS77w5nfszUtMLTrC58ZKTifUGpE657ZH",
  "key34": "27jyywzFXPBPi14uefwzditkUwKL5ptFPkUxbWvVu1epKoPufM3pasBYECdP6pt6tNLB8b1xDpd3EbfiMuBEqUAa",
  "key35": "5cKxF3ydLVPpD1BfWKPTmkMiWXLRD12Fcb7GBrNWhAE9WvQg1Lp8cF7EzXqfqBeCqgTpxqZUCZVzFH5gTL7M3pmD",
  "key36": "3GkbMLVp7BEXNmp498BNPsUwdtgM7p8jQTXaFQFpSSWCrydHe7Lu62oeFeo9iTBp9m3aCehD5qYVMUqMhxRcd2bb",
  "key37": "3kmP5CuBqS2xntfTVaNGnNNw6n7xgUkG51Q4djfZ8bsSFLQqa2rVVWLyiXKbaqqvmhNL1XzqGtXRVPfZgapMLSMf",
  "key38": "4WAZszBU6xSDhw9jG4mAxLSoZyRT9Epkg8FFTzniakWVYXqcU9aVbRaGZCtWEEuxaCtKiAhEh8FEgtgcdoNoxDRV",
  "key39": "3gHPRd2wZ2WfR4hCDjehYGSCYXZYd1SbvE7SNup8ydwgGoaVwkvaQ6vrDMdvQDC7ZEdjZc7ZmnqPeLsLiKz2vmKp",
  "key40": "48R3NQpAJMZixjZ5uugvhCrjmuLUmmVt5x3rXeyioZYWjeb5jHRqcHe3ENxc3cPhagy4roq39GsTKpKRpwbNF1Ay"
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
