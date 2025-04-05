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
    "5BZ3ETacQFsY2mGJmdsXyySv7wWYZNtt2sT6bgsRK4xrY8s4RzB6oUVTzejH8RviPgzQ52dXnLfNgcRJSRJJ2jLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BD6qmqSPfpSue25tn1eJqjJ5WLQtHmhxv3e6zdZrWsUE6vuxQMSpGzgsBXw6ykirmdLHfr9UcgLRdczFAQ4p8f",
  "key1": "5GNA6N5BC6GDeXx2vjuEhGBxsxkqGfmedUsLAs7t6iBNc1HsZCkxqx8V8UoWYrHC8Pz4BQjzSCkR9r8itzp7otaa",
  "key2": "5s71QYuejjgfWMbQSWJN45SdssHqp3uHYzsp4GsgdbR3tZ4BYqWDcuySjSh1dmGvXCqR4s4xY5Gn4CCj9h84fWV9",
  "key3": "UChEEiuFCGBEsGsepVXAqMcj6YkmyXWnZduHUjggyonfiECyTvQQnjgtxYkGLiDdkU77BhBNTU9eoYtvV2MYKgB",
  "key4": "5ALiB58ktASkiJTR6JG8KkubhoGvw6wDKpNeta2JSbh337EjjABDYoESGHKFhEScAvDmiQma3VeCRKFpkoGHMsy3",
  "key5": "4T7URGgiPSh5KGPNi4dKCJveYMe4xLERafz3jocUH5NqPRgPDvTxWJF6rLc17bh2qd6Us9rwidu7xdXh2CnYffnf",
  "key6": "5d7xwCfbTykrRpaqpN8LNbbRsKuMQ7QiScpWYiTprbvhm8v3FWkxG4uXSsM2k3iQ8sNRWDnPjjPxN1LBfBnrCB7Z",
  "key7": "5z4NMKT1788NqyUw1tBKrusqxnX3gzUsvCM4SdSPMuL9Wp6ZpyMCHqmgLGQPkzpMrT5MDGSQwxRfY4B83nj2eJcW",
  "key8": "3AJdAGuAHiYfR1nB96WiXy7UhhfDj46yXYiXjA2qsj8BmULjBcsNhLbLQirjeZi6xo5m6PzVvCNiwT45TXC2kcNy",
  "key9": "4j168LR8NFRqGAoxrjfbuhodEHNXLDZ1qc4EM5v1R2QZKhv5ejrt2bcVMbfsGKT5z6Sy6gTDD2PcuJ3uJ6TvxEVM",
  "key10": "3A4VAC9EbMtQvZ24RqbK67MZqKTqgALeVQrnaxGhkqKCQ3b2tDrgLyw7sqJNRoqXGc3sibqhhAZMeh1j7UNWFBTL",
  "key11": "WCvpkVhnLxJHU6ycnhLduYuh5NM8EcQwp9mEwrbCLdWYpnZ8u22gzBYcEWt3w8FXCrtZVPktffFYocsu47xqwBz",
  "key12": "fZS7RkgrsDCfsdWEyyMbZfSsrVHWbVNc46tLy698UkuPy9KhVSetxUb4ghkymGUUCqm966cMCrYeoyHVjfLGjPC",
  "key13": "4EPMMGYkhpwqB4DQZuug1Zz8pSvJJRLbxn8BqfjiKYurn7VZiB1g5q6HYHXKyTQL3qPNMYQywoLUEBpJm3LsaFG4",
  "key14": "5LxFisZofYeUGDJwVt7nd4ZSxAgTTzFMqDEN9X71Erf6kdVP22nepuX48QpuSmoERQrWfaTXzMJ81Hj6KTpJd7i1",
  "key15": "4GHMdtjECoXVVbMmMLg6fQ8FqpjFo6qAL9fapCrzYyBPvAhgtb3Qy2ZFFbRuqVDz6xXN8YoXAgzqNoHp1SXqZTBM",
  "key16": "4gr6EJsPcceATjjsNQZk8YGCJ5V1rX2yAgk4W5CoaEX3bNkjK71NF5QUjk1Kk84Xs8WwkQs32rXd9K53Ks1sbQ7C",
  "key17": "5acaQrGqmSMjCFufrwViEiqMnsBqs3LZ1euFYKb3ytWJCFYmQfQUzU3SPCXVKEN6UMc11NKL31QpN6BY2wEvnid8",
  "key18": "3TuStRMK6zuuz47Cg3guJp8CSc2tPnJQUAuaCM1JZ2tRyzBpZVb68o7H8svYgb5GN8X3NDauLwTZLSWpy6ha4dBR",
  "key19": "64nCSAQbNJ2YhyYfKJpiXskMvhvCzWN3r5Nz1ZKG1fvqCxUsvWGxzddgX3DMqPWnZXdEnKt9nvx9vX9bSxm3Acvu",
  "key20": "2rEpUwP1k4ktubfPeP7NDzjMcSpGUeUe7eJLD2WzkixLGT6B6h5xEJdj9k83otLVdv9kqJWQ5S6UMVhbxgHEoHTo",
  "key21": "4T8LjJbvj94hey6f1Cn3i2yrjpJVkg9uJP4MMddyyFDgDtUkkyvWQxkQjDEiVNGy2dd9NSZqrBjoNcT7hiYemwWN",
  "key22": "3AAUSNFML8YeVboJFjgpkaQrx67kA6ZLC6ktgNfRqECqvN6MHMshq8xkq9aL1WEJETHCV4CgD7jt3r8JC3F9yqKF",
  "key23": "5g5RoWNWreaSJ6tebTsQ4MNws9KHrrKoEEoy8HAvKue2q8x7Y2dK96zNV7NEv7dwyzwwJJE7yRAXdjWW31thntfF",
  "key24": "56qk7LuGV3GC9ghZDPfZsRQE9mk3dUy4mVSw2FdCxZrvq2sVBnxx85EaHS2BDhZQzmJSdAMEVhUeXyPMgqqbNZh2",
  "key25": "2vdtGU3d2rhX4WgkSxU4EhEj3ZZzF1nkQS8pMAJDKCp6BdBFB4zysTA4rRK3NJZ6pGAvvpQDvNkr3sUaGdcmFv1z",
  "key26": "3sNEMRrRXDBnrwZUJiGAAhox2KHWwEmN1Syd2kQGWc8auoXonGdxaAHm2wrY3LxAXSLQ7BsBTuJouEiY5e8PNn8m",
  "key27": "5g6GxvKcWBgajmT5i6S9YqmEA53HoXB2mWDJPZwydf7D82jucneHLCoSHa1912Lt48MF3CGYPyt4kamKhm4Uf37e",
  "key28": "64YKWtXyEHQ9NfB5cP1ybug5uAE6cHb21cYGayXf6nrD7Xks3Ra4AR1xkPX5NTmbP5NvTptu99qG5ub63FLoF3rv",
  "key29": "5p5aLzMAwSBzH3wTSkyXjhVHgWSxiuh1H9Cqf3sy7LHb8GcFe8CnvuQdUjxtFEsLZtthyLjncZ4yPnRMTd2PTZxn",
  "key30": "3pkqFuvKMqBMborTxKVebwktYKneAAFGZMA6gxHgsEPG6GXxUEGuMqTxJDNaFmpB5DCHai7owcNbwR49AgTHJvzz",
  "key31": "39mubKaZrCKGnUZXiFmNXyCPc1u436JD7pLHTtn6QqYdPzVVjcwfoGg1uVU5m8SZ9VHxtNVjznmwwab1KEYdtXEL",
  "key32": "3SucE4c1wCT7Gmpu33uiLy5WKQmEG8aMmgMczqrP8nvXUpNuLzc6dbYksD7qZH8qS4QVqpptKtV25fnmVTn3PFBe",
  "key33": "3EhstZBcBZaaxHqbg3vnL7WkUteGvWgQU3zdz2or46fjoHNMFPdcAErYdWXemQxoDboyVVdQp8RrpRcZJKaJjhfu",
  "key34": "24HRMKs44LvjMMrCi5bhwazedknokqmSbEqujCyYAQpbMQbrqysax5UMTo1PK11L9gPJtXG2U6BbhKTHhS18HF3o",
  "key35": "2cEhTkJLe99xDknYQnenG6bA1rAXjmBSWu8Q1VjWRccZzSq5FkA1RE6Jp2V5bBehw6fi2bvtmytqVGixJzcGHRfz",
  "key36": "2YRiCZeBcXGeZCte9GzyjDRyS8BTBbd323GdoG99wJjiWvhWAajm5hvkEopnuMPx9BD4X2nh5n1eh2FTBHjeQXHs",
  "key37": "4gg1XtodUmS3MrZmyPpCJAS5RexGxjKA4MRrKMjDJVRc45khzkf9j41yN657attNXYympdk7wqndTY2o6DxrVgLh"
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
