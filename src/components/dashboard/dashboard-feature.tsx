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
    "3VpRxR3bgmXMN4bjcjXooWoQhZrxDp7U7TRC4MKsKkUTzgRRkDKQr6FRFEsPVBttZFnuv8D3uciJ853VHJtNLjpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqJCvuNVPASQSGD9e7RB2spe7XBq75YnLebNPS8BEK2WdbJwoso8Mv75RLnPbfGQBvgZYqtU2K1rANpYWyL2EgG",
  "key1": "23Qw68NcLKzmbxhpzpo5nUX3zXv3NatwwVJQrGpBVjTiALo9afXZs9RXqiGKvKca2U2pSws3w6qujRncBJJX9dfa",
  "key2": "5wsCPQBuASRiiFs2fHF3to5emiJweuspvFNrzygJxVtT778zMaQGjjUmw4UtScmgpVPLz13wkKEdDdmx5pJoijMU",
  "key3": "5TDskH6Ri4NyxiwrRWTVZSt9ieaHFuyYf9gQV6MHE1aS1KyGoR4VbdcmYoVqQtrugBpWMi8bQgjPUNt74dwZfMBp",
  "key4": "5kgbRkTVVbHi552PMGTdrdnqSS7zeN3TNpFM7WN4UGm2QZTAM2JEcDVj2TUdGUT46DY9mEnUWXGNanKv6HQHKxg8",
  "key5": "3iEDnppAqYvBMaznQWvweSRe62WGejLSyADahpa5s81tAKT2NnmYH6BSamUKSqJWtEoGVhLUgDrvdPVz7aYhJU2",
  "key6": "32ynDZR5FUTRLygDsS7ZgehWe7SH6t2kNsJ7ToXw8C297njASBE3vYggqmbHT1fM66w9uuL5nRpPZCK42675EAmu",
  "key7": "5KYiMNYzyBUyVnkCqmLb6KdapwvYxD49rU9vj7V71k9KCgoDSd8bQgbgn7Tg1jX12vX5vKR7VpvDhdYk6V1787Rm",
  "key8": "2E7YhWCXeBqHjGvhDZF36wFTSAvh6X97jBhP8aacg4FvUm6bg78MXpnzgN7wCRqV27qhBb1TW4epn8gaDhyvNt95",
  "key9": "65Mnq2vD1M1Y4fEk285Hq9pwfwGCcN6dpztMgTqmnnhAJx57YHLGDYAQyegEB49YdLug9FHMagERrWUKEnWPoLp8",
  "key10": "2kDZYAZCy5fVBRe5CKhM6nrqyYsFZtAbQULDfWvY98V9haqZ9CMfQetMneeThudyCFFELdgEYVi5c6yFDw664FCG",
  "key11": "33HiizySRbgteVsyVhmfZWWD2GpPV84ouV723cHyzX7yUTprkqkCqy5XVBzkeEFh3UirYX1FaxGb73YwpuBC68YP",
  "key12": "3avVLwBQEU9hETYn1N7hG8su3ShRsJkHH5FN1FgamStp5kHASqQvCxkqGV88wWiTVSqskHUf5Rvj2j8sJND9VvDd",
  "key13": "2QAGUcDgJmbFeCHXmjiw1HbYUCQi5UB7u16J9MWwENjmy44qVvuUJT6WZQX9WRckrwHJSeU6b9h9HhgiNeZwMFJx",
  "key14": "4XLMTAWAbqrc8wSWPA3ZsL7EcLQ7C86rqmAgd92JdUw1zAZtjeQnVPG6TkbxxJ12dRYFYxKcyqmT7J4gHyFumd6b",
  "key15": "3WLVE8Z2XRsEVxUY3TdAieXPwY6wV7opASUc37w57K1nYEWK6g9uKJF4vMTuANESZhGhrsV9XcCmWjWPbo4DL3iM",
  "key16": "5SwjrUvoqqu73iHFPZJKdGub6AYrLePCat9NZvak36B4Mbej96UT64957aQd8vstmiDAdQFSvtFt2TRAQGDzPiUv",
  "key17": "3dMfF1VD5SkVNHEx9SF5eQaytf77JkZ9mR81Td5QipFKGWuwziQdEf8oLXkchFVMt9WXPQDbMXa5Tqa2P1jtRDjb",
  "key18": "XTcPmtSLqqyZrfcPSMGSoBS8oZH3vSxEkoe7JmjFZK9EB5kputoTJQMEQ3oyghrPejmiYi3dk5HmUaWtnNVBeax",
  "key19": "2N6k7UUm9t2uzPdYQGQc75zXt5TaPedXWFKKfifR6Vh1pgP2xW3iXZHWTFXVhwmxqbgwrqyhNdpNudyw91z3pFGA",
  "key20": "5iyPR7No6T1tPz4F6GHA4td71QBUWRr1NrWvmFbdMXT2wBrWooMprrfXnnYyYdqge5ry2R8rbpjK7i8zsKMkxGPa",
  "key21": "5TaiYwAAt6YAH5mbqJk4Cu5moTSRs9Bg9XEhXNC5MBmt5EB2Zs2JL4CohDgPeEHMTXWcQvZTmSpKqoYmccBFpFHv",
  "key22": "3zrY89mZHCS74fFCLcDC49ryf6sn6eS2uTrG4FzLm7f3ZZ5iTCdzJVAxbmy3qkKsCY5nio3ZJftzUuMvyJKZ4td7",
  "key23": "g1ZHMmjF62fSKf5C6Aznm5p5rV9pe9HgmAaphKJ2V5bnKeapYT1EcmQ9gPsCj5xBufiXRx29Ud7BbMsLBQpGwP2",
  "key24": "4yXkDyHBGWwYwyPrSiZUzFKTdyYd6UeMet199juc7KiqS6Sp7f1MpHZBfbzpYAvrGCW2JLyxW8sX7Hdsqi9yeSGo",
  "key25": "3WjborQjciCoyXgJtNBozyFZyRn83ehYTAESuUEcLWuGdHsMYa3PHgUTCyqiRC9ovJX7y2QBoZEMxDpKvWP9gH8X",
  "key26": "3Z6uqXshKVTMDDkeKnxUkuwfa8XGUoRG78GMr7aLEjWveSzvXTcVdKnNzQQPvnYerWtHwvoX4g9a34eYeiowxCVA",
  "key27": "35SSz94p8WTsEhVvpn4Sdxe2UMngmEAd39irMoSZsG2ewSW2djRUdj3f8PmVPphodSoY5auuTkGcnQUJDxrt8LSK",
  "key28": "5KG9dFZtypL6GMvdKZjwP7XYRhkymxZmxbpTckwAWvQk4CnJbe5nYcn6edeLmZ3MvWrbrkkKU892FAtc3YYK1Nbk",
  "key29": "4gJeScoy1pq87ZU1Dsw6pmNJjdhaQ9KUze4ecPQLM8GT5f1DQqt4ZJZ3fuAP2YZUsLmvAE6z5qNgdJ5sXRwyNCfW",
  "key30": "3GfZgeQ4ToWaP8viVuwMuQkQtMkC9tSg8Ds1FSe4VSbfUTX1MwD2nsrkz3uwg1Ao4KhnWeJXFqpzzSXPRS79V6rR",
  "key31": "2iCtfepCeGKavtHcGeMxeKVYbCp1pZJBumtRMRNspZqR43oFfKixVxpsgMBem9QG8S9LAR54U5bKAVxLLe2B29TP",
  "key32": "5rASikKBUrtS3jn4MRdrC9DL31zNzGmDVYpdKwDAqMH7QJSjay5VzdZrTGhWUYLheSNY7kiVTJtGLbhGACsGdXnA",
  "key33": "5BVcVVCJXsryDsRmoXjbu77VhEkZjQtPF6TkJJd4SfXW4zDb3zaMYsEV4CjyZBExjhaiRNATnN1rh8vjp8RXoCch",
  "key34": "jKAADTn5uYaA6HeBSGTkSqjDTE7n542UWpcvBjhhcj4X6PF49WZwEBx93mtJoVJ5sYaSUGi73xyQFWMws1oAbcG",
  "key35": "2QQbAkiNk5h4HqSzsCRdTFbUU6YodjZnyxZCGpw263rv7XZXutjP73UsoiwjgkUmw7Fz2M9zrn1XCugdzymTW4L2",
  "key36": "2Mnr8nEWFGaYkwZhAxdfvzGKgoUeLc9MPKqBhNxeRpu3PkCJhHqy8YZpgd2F8F3owaF4pg7VDcog23yd3Wm1rX7H",
  "key37": "41KkqpWvc1EXbBVdrob4rQ3umzBUPStGS24vdbJss6VEpUFiay7R1CdrcJniafYdtY6UmGuaFhCEuMd7uyWYMtWo",
  "key38": "3oCMTkmkwyXCZQbXCj2BbdzqqjNXVhcXQGQ1541ZGgVR17ESifCXrdEy6fP1WxKhaNo4W4mwpac59LnS7tfKeKMe",
  "key39": "4gbPWYifzPJmCwUnftcvd7MoXkwydxKhw9JvRb5pA96wUFUJdAMuzY46yNzCxtLiArv1Ye5CcdfDqbYHQcvM1JFd",
  "key40": "75WuUYzHTdqcVu7RyVF15o4A1dumEYgd4sdvbGk9mDD3ErPJ8DpBGYZkXw95iPq97i2CVoiL1viYcxtX9fqkkNy",
  "key41": "2vX1Q9vMDvFSZdBKkbXUJq89GVeUS76fjeZDx1mnQC514Rs7naoQbWi8BQ2DzG9G8G7FzJZ64BpVxXSiiUeeMxNL",
  "key42": "5CPxumWvssV234pEhQ2owDLT2TDdmt2ZxdXmmm8mjFfg8pAvESyB7dEKgqNvhg8a5sNyDdsJZ8xnJn5G3imeEyxx",
  "key43": "4nCjSG8BczrtaEHTMbXU3KZEqdg8WT7t2sBKCSajKRQsFAJdfDZqAV2vtuKTvcC5NDJrRMuJdYqMZ4x23R3H6v1n"
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
