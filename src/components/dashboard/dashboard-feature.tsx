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
    "4UncLunWphHzBmG5SvK8UEpzQkTUvr8KUQzFXHFmLM2xw9FkTCSQCCtx8ymiPRWiXwmiSu2g2p6QL8QJdPuQo1rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h6j8hGcD7S3Fhn2m7mA5bEijREgwGQnZaYbKnU6xVP5Pg4TsMG9GaxzX62SMobg9gzt34DTSuyuWBoMQZ82e1p",
  "key1": "3wzvZJ42c5QUEfcEcySo93sAJFDCjnRtdVgpdhKEDXZjWYfmF2FBM4x6yy9fNcrb9jSA8tfV3cfY6t6XswzjMBzg",
  "key2": "3FqgvJE5itZEsPu4pJS9jvxTSikvXTCzW5S2kJkrtnWSoTFEyW7VXNMmWMsaVTpkXiWYTwUeQRwAqYqL5ZAndoMD",
  "key3": "cgZvEivgb656xt28aDSD7UCDjZnPLsTzicvYP5XBZCQpEQQJSjAsywfQ4q9gAe7sy8EzD81CTd4dXbxpssV6Joz",
  "key4": "26C8ddE5bvgtQeeNBgJ39MCuNtAEGWpEzpVQcS8QbQmTLpwrN6Df3omKsJYVmdEfgi96CqSLDuMGcBqpAQUKXJdR",
  "key5": "4hABAFRLiHM6gTYqRGWSPTV8wfFBddHACT5qq4ZmTKJ9R56zpxk37d3s97roRTrqJ8qi9K5ueQj9Htoof1qmvupS",
  "key6": "2FEbkE5rkr2KCUJvtEzeZd4AugV8im4RzJvGQgbB8ZLaveAX1ez6pY1TLXjwWC3ft9D8eBUwo26Eg2RTU76AU9Gh",
  "key7": "5y6ZYcU9g36nv5qpXjkDdmrjLJmuH6FNcg7GKw7u7cdU3PrCVd6L9oYAKBvY6X78wXazEJ1Lq8JQqj8rn7i9xNUC",
  "key8": "3MtuZbTa1LoV53Zd5rLG4uPrpLzcFS1kPeiXHKDpBZqLqjsfRWfXFDb1bQZzcVyJssiyXGnAZFfMjVvrG4pCxUDU",
  "key9": "2o9RrxMHpKsNKWChAF8hirVa6Zrvh6f3eHxZxLFHdyABdry8QERn6sVEAB139XiWqutQXaMj2UXKXBrNNDrPhMdn",
  "key10": "67Yt5iUCCHQM2Fpimqu7vopDF7L96mDzCXbXmo28quEgDsNZdGMCSt1RcipcxWzmrseVmMEhQFEjWSsP4rMyFKVL",
  "key11": "2yNGLN65sF7qU6vYU75KrQZuJx3zwLCM7wCNRYHqZJZNQpZz2siUFk8fugPbLCPfUAoryhcNFhhehBBXNgdZN6cu",
  "key12": "4XmCEppwotsqpSXmimD8AHHFtWfQhdt15AUfVXM4zP7dPugvq6pDEsJb5pPV4nrg73c39fXgRyZQ2M66XT7wGyGG",
  "key13": "3bQC6oa9dnspdjURc1pUqXxUgAFi1KLqoZfgg6VWB9B2XpWCMpBSzt4zDbHeen1KBExhZHYgAADUssfFWHcbwNsc",
  "key14": "jYd9UZPKiVqW9E9atdHpv4DboxFbjpgnc6QPXsKd3AmRGbLoDTKkhDzECLACqyRruwZcj6SmK4q3eSvsFVWMc4u",
  "key15": "4Uj1DREqHbieFfoKZ7D2UrZ3BTEVPA1WX5PZrcisGPZsU6PQ1Hug43rkLbkscyWQSucL81WbuY7X6GmPQv54hMY6",
  "key16": "3ERtF5qv3DiTS1icPoUohksePSDJwmMjF69ocUQaHsQSDvUjna785FtvHRd2w8VSwMZCEQ7EYCxnE8t8ANaktznv",
  "key17": "3GL49au2T8ML8AK7qMmDsd8Lh4GUi9WFk7t1fBLHa2oWwbFdnbJ1BfWKFnTng4agK3pjb39qfDpEEKArE5UVxTWh",
  "key18": "34T2hATBdNkBrTY79VmMAZMpaGtSnN3M4KNGnaxYAkxpRcxBR59C2EF8vzUJ7vKzBjkbBx5r8gYArLaHZHLjfsgU",
  "key19": "3A6rLxsWDSJZZSLTTxKSnemYY7Sy8Dq7sK7ShHeBNbVVJYeHpz1JL9q66xXeB1Ui1mzPRFPh1sRfv39A7L1saQqh",
  "key20": "3rsUADWzckVBwu2HC3quyiW7HvAuNQokTvDbZLWSLhdtB5dckw7qWwHrPB4NeJYBmztD6AagTPqfjCdWq3Ssua4d",
  "key21": "5rCSmb8VREBD2gZX1smfzQUmBwWXC8dKJQmAkK7uXtDXDzECZssv9tYr5WYuHNLNQBpSJmcAAGBWcpRgRRAXKQBB",
  "key22": "4MiHVshXRKfKJNEJt7xhYLYgYpkk3Eb4TN1mp6N9S9wkpDiTXMi8sXQCeNr6i7mmzKM2x6to9bRjbLNv9hGJSTgC",
  "key23": "4BTxiTtVE5d6mnUktGQAhKpbqv8yaqJGuNKKAPUyVRSck8FC3DGdjnMVXi3XCABCMrXTPojafr34YNVUXWTeutjU",
  "key24": "az1vhYFe5rD8yRh7dHpTqAioNbm7jYmdvR8nv9sBaayA73PJmDhGvzKYp5yZkeVYCDmy9UuokHkTgLQJswCMs5b",
  "key25": "47cqwtaBN2wHNz5EXp1dHsR9ZZKKP9UT3tgwy12oPfGm67rMcJZSLao94GNixaq9DGyEWxow9debtknncf4Qrhgc",
  "key26": "3rgfxAnr4uvifham82P4xYAmmqNsXqGDRuA4zvMt4FsA9MPzaGNXFpJxSs1sbpmigX5p9xmmBC88LJy5mzm4f7wS",
  "key27": "4ZsLFhifhRKYivN2yEfR2yUemTD3Dp24gWsM3Qffgg8GwBHs2Kum2igXEXRctWFbeRdPtqvDDsu9JfTDqowHYPXj",
  "key28": "3hnkmDRLF7VJ6RW3gc3GHPb9vHuSELYqn9Uoe6QWWDwwiV86knqV6JLergw1Y7wsJWhvFZ9KVt7AyZSzqdZJQbD5"
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
