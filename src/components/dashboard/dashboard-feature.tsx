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
    "2bRqP8PWxMBNxCZFUXFpwxyaLMdE9gR3J6tJZrsqtrNxmCu29V8N2r8supA8t9cVBhgQpPV2gqWtqNCp7awJhZMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57mtbMXpavaSKHSAQeducoVC7tXKDVAXG1LWUCZey93qEyMC7KnGCAfmFBxPYoJyz3ASmBqTzZU3yXEiJf2LGuj",
  "key1": "5jU9xMzzeLwyC93mvFDhW5pPL8DWHDeP8kVN35giXb9dFN2bqpfrewNYzTxdtWwAZYbpC5fhQJ7ZNSkroAkRWZTB",
  "key2": "5UDnBFzRrNvVQEAkNH7N5XcBqHmjDvuq5UsMak67ngUhtFS9tsqjpQvGeDZM69wXoqmEWvdBXpdBQMff3xH9AoSd",
  "key3": "4RyfUPts8Bdt7Gg8ucRnuHe9rNAYvbKSSymve4QJRhNFi4sobmf1quEphfy8vZAJW2va5m2BXJyynfS5Tqyh1gya",
  "key4": "52e1Bkar2psfXwemFHWrHvY3tCKWdLhNTuy5asbQNpivBsPqzHNnSJFDTe9qX36K7JsxNceqxRGcu9mPV7SfHqa9",
  "key5": "dWtU1bYvfxmgRm491yWuC8gG9RdX2KApdg3KhTx6qP9prsU4RcC7PRLzgLRjEMf82sySeVgZZuexehRKGDQ73dT",
  "key6": "4SD4k17VTqYRLQegx8d2EKCkCHsP3NLAmYfQXfNSjcyLpzhMR4R3X3jEtyyc3huhohGaxeFA83u9KHn2DCtwnXmt",
  "key7": "24Z9jCZyQD2nD7Z9DQ7Hf4VaC5swjTcQDgARwxBxrhCrenQAdTDsmY1sGPscLQ65vs7Y3nR6cDu7Hd2EpABJGuXL",
  "key8": "44RfB1tsAoQHxQ6pvvnVPeXNDuxSP91xBUUcT6H8hin7EkfFVozGcZnzFEXsyQnmB8CiVcCToX5LDpW5ZrwvrgSY",
  "key9": "5XA9gWH5WLuxeiBSp1mT8d3wstC1dBYBFBv9VhJEjMgV5EkY7s9PaZkjCzd4HEomaXjpdoTa4YMVTfwNuhZDP1vJ",
  "key10": "5qB3hQ95YVqxeXR3hDJBx3xtMaz9SrcnWcCHazBVcqA67We3dbif53Fefdnvbn4hw7qQjwbWkixjh9nu8iM5jQcY",
  "key11": "6vYA41GaQ8nsVcvp2D3AVrBsYiR4yBcMXCNsvmNJTon8wzugjTTri13yvseTyovkiy8puUWyHu8UwbgH3u35HQe",
  "key12": "5V1nh57Afoa6dP9JPU81KtJMU6QGdw8bwc6xh4aEjSH5bgojGPMZGsaM2jo4LhFnmntSwhHAsBy3uBuTPdfoYB2i",
  "key13": "2xckwJtunBryCyBkvDTqS2jkiLgqAuZt1wuuRfXEDKvJu9kEPP7ckfzT2ACTjddXjfiGAuM5ep5Zp4VYupjmSZkx",
  "key14": "36yy2VuhDCYSmgRpLE7WU9XDKkG7RoniywFcmUQvKpVfCDu8iPyw8mXVSpBF31TReBqcygw7KSpvYXb6HcYf3WkW",
  "key15": "2cVZnjLURSowZkmiZSrYBTDA5vTQK5zZStWusQHSzhYXFp8XR3fABHpzbdkC114uo8u65HmkwXZwESs8RSQsUbbh",
  "key16": "YaRCggfUqcbKQ3MeXahfy2pCKSCjJCyS3KkNMoDCxRgAgEZ8EWiiFG1zyrQBKBo9iYR42JRFXx5QsMFGe3KF6sZ",
  "key17": "55SVHNnLfHr6fMpZtp45KpdXsyosKCyb7mT9AXmC1yw7eGTEm9Bz74EWLsUhidm3GR3gdurkKcBoJVqYfrq1a4H4",
  "key18": "51Adr79kmv3pjeuxbYpnModzqf4gVA9EmHGrCQ61qkcEhAxCCgfx78vpPdZSn4M2o2ZzwhHZGQthWfaSG4nwuD2p",
  "key19": "4AoEtn165FNDmrr7TKsm4kekXCoMrCqnA5ZKyUWfS9YQurjYZRgamHQFEeuSxRqBja74nZQ3MPjgEoC6hJv1BaS9",
  "key20": "4DdPQu2yEhEG8PcmDf4L13qUF6ukSYjmDdVzX6bPdRBfqgCtXFcJhEFAeFbdhWz2x1n5FJEwY2dutt9YdzcyBXjN",
  "key21": "3XbvZv2DoZiLcKRhYuM582qKNxLKGKdJPtdbbZFf5WWuyhwuhKkF98pcJqAKAME4mdvGwB82fFQYyVeFgRbndAMb",
  "key22": "ekCYPw4rcPmkDspkLnfnoEBYUW6D3457JaA9XdxUQEB8n5VwY3fKxc5gLgszjcFC32qQN6jYLPrwG2BmgEQqN5w",
  "key23": "PWAtZLJZ6TCm3CZqjTbdzUX1DNZeReeLL1cEyaFke4kvJf48Jyi3RehnLw5aDAFvPjJq32txPfahUvz4moQv3E4",
  "key24": "5XG9eD37c1Yio2W9DTkXRL9eZBM6xJkU5BxSTNvueDqstviEAKbg2vLtSiNBPFnnaPDj2dtvogymMuuBNUsbzZZ9",
  "key25": "4bazT6UWmVJ3sUDnX6tL3HfT26VbCeTZQrQuJ3s8UXTKSMdFBimiUkEG8p1xZDn5dm4DXpjpPkZw1WoDCTCxN4qU",
  "key26": "LYz46AbBpGfBXxdwCRPP5GxGDMrLrGKQANc24Hw91PDM8J1w3iBfyowZRbSjHw7V22x9ktkNa9CMK5H6B3VCpkJ",
  "key27": "TAWnGfpsGx793sNrfJ8eFWMMr35A1qXiJwJNx6i2nPTSgNPBnPuFGD5K1A6mBBf14YUx4UmvceEXgVdN4yg5gHw",
  "key28": "3m79xF2efUXJbTpdQGaxYqo3SBTGTymn89JasQah1gK2f397ZPK9Wo7B1LN9RZQd8iEkGEK6XKexfRxXozRwc9Q",
  "key29": "5XXHVUH81Vvg3qEL6Sr518PVxpUCXzu5QjXxTp1MYwN8sQVR5GTZvp1nF5avzuPCTd7r6nRxpjmjEkGJyQSzs6a7",
  "key30": "5uGZrzbqqTFKUPU1HRyP5EpiVJw895azFBd2EGjFo3feG2i48azkjna95kenaNZwLzSwkU2AnyA67oQwMLbNcXox",
  "key31": "67A1JGWoBPgVq5d5gkfRJce2FUsRKn2bN9NKqbUKqrkMdbEGtVFgTLbaRxMSaX26484q5ieK8wzZTfqURoAnMY3J",
  "key32": "DAFQnEe4owTQFEzWrh6rTkawi8pbSnCuwYXjruoyTwt6n9FPWJGT3z5CRW9NVBGFBkaR53CTeJ1Qo9B1TiTqWze",
  "key33": "67UQskRZ9rYrQsWAcz4zzXdkQs8WW5NV6BudKxoyf2Rd5LkiQeoLUD39Sv2w8BXi3UJTXEk9JbkPsv5TDZ4SAw7B",
  "key34": "PVqgoLvbyAS7Bazad2SPUcJCQyWyuFP13DQzsnRGC3Tz6KD8FiSTFc2HFoPD8RhHTMPzh7T5igStZXtpcYjE37f",
  "key35": "5bSQjLPMnN2gCBCvHeojPiZhd9uLkZX4prBWo8yycxYtkiKUkwWuTySBbXNAdYsZUQnVdud3rHpRaNc1MqjkRyzv",
  "key36": "H7B1A4oqNRvmSuYcMehFkeBszh55cbTDqvVJL9KC85JX9wG2M5vmAfxj6goFPQ4RNR4KHGh3jYVDCpMwVyYQFDv",
  "key37": "35X7cg9W2JEdPvvH7n46qDfvRpLz1Li1gm7S1C2n6a7vN1NZ6DWe8jHdhtMsXauqHGiz6uzJv6uAJDQbESLfseGF",
  "key38": "5EpwsiQMg2bHHWfBgBWGiPdYrBVmc3TcgKACTHsZmrtTbxsYdVg5qcZPToQuWyXAPoFgeBe4eFXy4oXL5cMkURaz",
  "key39": "3uJs6WXJANzL27Z3qGxZbkcXU47i6hp6eKz9bnHQYgBr1ahHSVuuDJ1EL9VQqmPp6TXTyDBnCC2jkQphz92JwQzb",
  "key40": "3nsZ7fawtxurGQsCgz5ZHdf6iUfQMaSfnjX7skQa2mNUqmdJPpBvBbtjQvCUdgkRmXvJGW5pSSpw3uxfiztVLZQv",
  "key41": "3EBuAcMhLWfkEEUhhhu5z7F6ZS4c23tHfdNgtkNjSAwmtdKFERswQb66VR5WkrkJ9GfLtPqQDtAPKDqAjbahKR2",
  "key42": "37oVxyGWqx9zvYB7yvtgGBSSNAEA3MPXi97vx38P6NW9K9MFLjvKmejKawMU6UxATQUZFXG6AmUYS69m8PCHyoZx",
  "key43": "3ic3DTqGdbKw3S945JBSLFkhkQ16uNybxSCMBTrAc3HZ3y4JuXzLAdaJeDSjEaHcCmBTj4MFhQLGWT9wP6EbSdEt",
  "key44": "4toZccngvDowrNxhE5BAvymuTxwznQFsywo9zRHhZ7nEEeXw9FQX1ifRXkYLurF3881gVrgDufxugPvrCYtPQu2i",
  "key45": "2uyS45s6o3GuYDe393dkSbqqppwghwrM2Dp4KPGjjig3S3NGuhW5wb286JSAPR5ZGdMpHGnpC8qULXvEJUBXyzPe"
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
