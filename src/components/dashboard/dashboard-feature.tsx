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
    "2FGM2K8yPJ8x7wCKVmdm2qS5ptBGwUy2sHKDo4NYzfmd6wNZa5dnGmSVNH7NLcVaKFsqrgbT5FTVr3bbF2BKNrNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbHASvPoAEhqaPpB4WuN8yBKYk952Td9WoLJRUFJfXHeQT8nRiUDSBhhesNsPnqrhDWTRMHw2SMsL7keWp9D82F",
  "key1": "3DGEZYq3P97PmJp4w4C33EFNLi4LFLuEVfv4D5idb58E928YTrsaimm1GmE2hM3tMJkh2yZqUgJhaJyRYnLDuoRh",
  "key2": "85CSfyHyAM9Ck3RbvJZuqWPmwrSjrcYeEegpEAzsa3NgKPDz27jdUwQ33Dx76YtrUbx2ii2W6SQ48shNb2ui3wQ",
  "key3": "4KRjS396xpxEuKVWL3fvFaTTk7DNHRFWaHQyhe8XfRhx5CgHNkNiqiA1n1cA94CAGhsDCXm8pKvTeJwtXhvKMmRh",
  "key4": "5F72pGgZffhAmwvr4xUmMautf5Qab3aJp5NxZCX1HBQoNPzzNsWAEzk7NE2qkwjTgoP8KfRrd2NSqDotcA3mkozU",
  "key5": "5SXtNZC5ESv2j1sXQia6aHnDkts6kjoq2jXTnpx1UqbbzvMWa74DomcLPiDmxqiPwru83EqLHij2i9JptEmeRzhw",
  "key6": "2NHarLhd27KF7JozBkf6m9i8WRRtyPWw8iayFiqpPcLyvGyDQzTLRj3oDcCLzWhbrFWwqV7HRdY2ZU6vsF3qT2yY",
  "key7": "En7WjaNRezKiwXSJa7Ux31r2fBYdyUx3rzcbYgvU6VT8JfqNUUVSsmyYFA8VAEuGhtMEngmk6VDevopF9tXg4hu",
  "key8": "5AyJRsmruK7VXpvTUccgEP5X8gYbXyrfxT4FZxZiiu41UNMgJQ91EP49tLjdMERq45NGCkBK7zqwUJoa5vZGHsxQ",
  "key9": "4dvXG7FuNvo29hfG75p3b6fmikyJpH5DFyR78HbmW8gpSyaxwAPaeZWVgV1CAaM27rgsaFYB7pztD4npdtK4X4K",
  "key10": "5T9BUNDiTTj3DC6ActMe7BsXjkfQfMckynTcjtW748BsncLbwAdYQZ42a1FtSxCaFnpDKU952B65deViAvb1x9AM",
  "key11": "5qsdJ2ZZmBE5mZ2HXNHQ6aFqxCWsQCqXWJypXqoWCwvLRfHQHaKgnoYC8uA7td984X361awXRz62hKDthNzyHZXM",
  "key12": "3jP85ihFabcAnovixeu9NNFQMhd7xE8gVM91Aeqpnomg8BGfhfPkWcxYus5yoCbwmhJXHuAU2QJsyp8oGRZMds68",
  "key13": "qB8kyEADHpXSjsvcA28vXvueqb8p9rZmmQ4RJFqoCoNtfwtwHA6krjiVUBdBhFB8MdpyveXP842E1VpDiBAe7nz",
  "key14": "HtxpPtGsv6X4HhdFAX6gfKaWLXqudQ3WfZpByyEMnCt4MYA8jNENojM51m92ZiBb644wCwVDUM1xHwftcHap2bh",
  "key15": "2qyJdGhYWQ37d1jNSdQfCcRxSjmHEWXRa5Ty2z1WnzJ4eVA3mbXTRZGXhd5Fua7SW4oTeDfLkYYtsadPJr4ahZyZ",
  "key16": "2bqsbn2GpMgJEcUT2dCpv38N7cGE556my3sbuiwph3pumoQGg5Smpbx8LmWedsBHA9G5jNatF86MwYP4vQbYpYMZ",
  "key17": "2MjLgz6LxAn1nhwHHUqPPBdwmGyAuvQaZ9pLG2v4QL62DjowXLuroZohmtzPrR87XSDJYtb48MyhzKnB7DDsrgo2",
  "key18": "4s3TK659M7j9BvV1JH7sj66wDG5YofKjyVHv8mG1SZKKdhcjJL7iiU4DcduCwAE3H7A2r8m8v35m8auwe8FgtBqC",
  "key19": "5z8Dywq3T7XoL8v6LtAqgz1iyvBmHDmy7AjdfNtvwS6dMCAUZNLjGaZnvhZU14nBi63irbr7UJTwzsTyZWG5qcTs",
  "key20": "2dFCJMrPwKf5LPT7szPaJZArksMtjTMgQvFNW2zTmatQrbvZmJdtPE8wRYB3EeZcgbD2Q8UppMenuu12kySsN8UK",
  "key21": "2JjAZmxwehCB2eGbJaE83s9yQa7PLwN5UJQTZTwwKF7dPNuzeRYkS3yGFsc5CmyP3ZaQb9THdsomCmQNEkTwodSB",
  "key22": "3bh55trxVVTxjr93TRSTSormRkM6yC6xkXcm7rnNfvmH2u5qwhsz9HqSoHthPVhKPhCPWfhx3HtXUYtUumvGsDad",
  "key23": "2mPjJsqtL5TsJZqtaLpDzz7vzYnyytEBJxxsMgdHUJoxwbkoo1wjeMEbSDs2FDpDVA6d3gBxXG8TfXy99w5zviG7",
  "key24": "5QQVkrpgBCQGiHA9Dkajtg9DNmtDtVW8rVrpT41R1ZfxD8pZY8vtxvjNyWQy5srHtdUDjCZy7DM912aimeC8nd58",
  "key25": "4nFei5nMkvnr7oj3HBob29pueAnHQHaQcHQQgECGrmLWBqhUz9er1135gj5Rt2cKayvQSgxoBCewT6g7FkyEZipb",
  "key26": "K5kSiGxYGw2ofHBfA3Dea6eM5orVyug7q6kbdDy7ajeqXoLQzZXzKudJT4xQALobFjKX5QSpum5N4JKJ6HCQ7c4",
  "key27": "2f5uefZtQTrePWNookCNJP32m7ayCgT39XA4Rr2GB4MKMU8VMSj8xZrmPBt6rnGTpkbAt962nPMkP7MUmKngmuMn",
  "key28": "EZqNJYTnCUY9YLTi9VYo9F9dRt49DDHmejuuo2D7chaCVa7WF3HcVGYquWyFhLWcQdrVx3yPfczTXwvyBWTmcVr"
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
