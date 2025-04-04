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
    "55jymz6HWHkfRz9zDyXCssDt285d5Ye2wL9cBQQRe4yReYCnGYZftdskFeuHwZQXRNnUaJzrso6HpDCNAGsvVKyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDKA1SSjBz58x3To1QekPBtPo7rD1e4nxVrVc2Tgh1x8wmyJ3m8U5EWKW1SKwbd8YYhhinX6MbHiefXFyYtqNr7",
  "key1": "U5DM5Cyy7Uj4S7oLWin5r1HYhLrMvauYQYnUjvzrYaMGGA5tMvZ5cnLczssuw2PeLEjBhVHAiRxm5P1mY4WX6eA",
  "key2": "TkmfbWyrKqowCWn12brSPnK7ZUTQFkkTcRZ8wDwRTuUW3bgWMPUZieWXFytcPUniUfuMFu62iTNUMpq8sTwcnbi",
  "key3": "4Pq2dF24A6iwdS3mHmzzgL6VTxEGnCPWt7qRbYuz1vYUWMrChbvD8veCpnsf26FWVM1CstDBeFSTpuGDawsF9jVh",
  "key4": "oxjvhVFLekMjMT7TRtBgKhQF4inQJHnWTap1puArTTbdfRe9XiBTdEy5DkvXMwe4rdmwvgL8TyorvPnkdQX4v6p",
  "key5": "KVmCFeB6GWZgk8wdBL5mTAZH4kbNRwFi5eRVTQ9cgzQdK83zcst9jiASoFAXj1ebWoTbs4jkHZwhbbetfCwToKD",
  "key6": "TVwrLxEMSNNqt3ButZ2LkBWH8udmFiUqbro2SrbSkawWfoYgVyqAhrbJst8CgqRvwT8RvkTe1SNEqJi3TaDG14P",
  "key7": "4ZsFprqUsfXDCsFcc8w2marDsA7PGk7HxR8hupzAb4EbDF75K23hxaqt3wdkBmci6hJSdu9vQdAht4ZR2ENG63Nx",
  "key8": "5wzR3mdgZ7KuV1BZWWX2NktXJJmzfLGDaurtdeX5B7u7zpewqghx6q1GDkADtaEChwCHzsjkVj3NGAzcwivKsff1",
  "key9": "2J9ZefRPbytNTqoxaP4W9WtxhebZxtng6ywQgsi8GQ2TTTad4kZXwA6oEvqNahGub1qDPDQxHahik27JjWPmhe5z",
  "key10": "avcuQzMb7qB2W89vuch2w2YAfsY7qhy1ABh1bdnd2iC5SwJaCX9LD1UbXfaiajGkB9WuNfHQFczhGbiRPf1V2f8",
  "key11": "5xDPyDzb14UAu9e2hcZWJnSZmZSu646cWhwTcc4QKS5LEYxrg6zAoaU6yV1cTDKVaNC5uJEsf4dPUJ6yCj7ym35g",
  "key12": "2HFFg7Crs9Z84Cf8LhBdPk5pP3WbwQFLwvKdE5Lwz87uwEUZ2Wac4yYAfwU5J657KhwzfYyS8h3CDseoJnQQsDGS",
  "key13": "4PVwh5LynDzo6gL4V47fAKPFEgzYgRwruwF9FNMJWUARQMbEhvz1j1mj8NnEki9k8SkV7ByiKMGXD2JAQfxED2Wb",
  "key14": "3wRmi9yY613R7gwHduBEKBkRTmTCYQvNV7D9weNH9WBgTyuNKcWpE2y8xs9zdJuN2fbWFwwT32tmVDfkYgAx8eL2",
  "key15": "5UyUroEV16c8xe5MVXeJ7iynFVGNF9DgJf6o2TkwFVNYaCeCtvS7UjHF2Y33gXWNSCZg7er7xugEHfKMozRvNmb4",
  "key16": "nq1rfUDLM71RCdwGJKgcG9zUM8djVAPwiEw2tg62XBq5Xd6xVVczbjaD2qfjzkZKrgAZJQbWy7nHh6G8SpPnKZg",
  "key17": "3wAXoBasHDHQ2aLBskU3f12EpezurAVrZjkorogQ5WbxNEm9ahzrajZjK6QWLxJfPMM7hMwrMaic79i8QYwozTTh",
  "key18": "2KnmvwmhZ22cGgPQPskUYsxKRPLonbAsmmtBhNSfaGxKuBwiPFAEP3cEgWfLnyCSpatTBnrX6KxhboLzgrLuThG",
  "key19": "s82B7186qJsytRY8CGHH18nNbu48j5PzSnAe3TWbhcscvRw6V3QFvUBd6We67HjkL9kxuR9DkE42AksHzZ6bbzZ",
  "key20": "uHcSgwShDuP7VaaqdmuNHw5CPqELU4e3HTntxX7YvYEE6tZ21GQKbTjNtN1o2qmEEL5kqn9PQyRznZBzmc8huv9",
  "key21": "4req4agwM3GAwbBEByNDsf8GTaYzbjvvT6noZ9wKVB4KUB4k9YwLLBmPsaQaZkp32c2oZ8ZDgSeRWL2rFtXkRPmh",
  "key22": "352dfQq24nuiHAFLGuMYBW9YeM6nb5gaeHQqZ9CPE8USepvQncLRZ4e9Y6fYgqs6wvzbwVzEvucTZ9chiSAyiPmH",
  "key23": "TU8rQUEpg2H8r4YWbqEQ2fd4RtbyPpLYPA4d8UWWYma7XTm4Aaao7Nzrsqz4nXHXei5FwmPkxe9n1uDsD6faDVu",
  "key24": "3yvnBJ11ghY6ufAJS45kfw97yjQifHLz9mJBeWdFqxxDq2n5KoD6z8FasxuBQANrGAod7KBMNjvWVB1ruBUjGYn4",
  "key25": "scPs29L5r6jrcehuYxrCMJgQp8jA5YvizGEDv6DNv7syNrbpNsXsiESddtTADpMdpaCPMkdNhjWusNsScWgudaF",
  "key26": "5M6h9AgNpBhVZBarKUMAfWdSs6JdaMe4FkxBEMtFTE8un95qnEntzMPQSX8X9K7maquLFyMeYxuJZEtNduisp818",
  "key27": "3EhfYtS7oCBcSz7zoU7DpbKy6ieB2HR9HPPRYCW9rbaC6CPNFkmayas1uzTn9JJJtME45q89VATcdr8AEbu2eidU",
  "key28": "5kg32UPxzCvTGqXdSorhRo32TYrzoxvqE5dxNemhztf3waSXPzejtyZaV4sE2DW2ryqBQ4gBCnHGTYB7bYSBkeHj",
  "key29": "2Yae28BMB5g7yGcCebbXCNDrhNeJLkqtKH4cRzuUZvxzjnVHumBBoq154kDGHFPa9YPQmJkWqQV4kC82xcmTdGMs",
  "key30": "2NzKwvGs319AXbAnRTFQdfmjC4Qg1xqZrNDX9V4HDU215XCvgjopZgd9u2TNwYRuqsvmPPfk5Kfr6Y3RvJ7NnEkG"
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
