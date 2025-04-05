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
    "2cChJZAwfmAhspHQXsLJJ4LxppgZWwoUJyTULPDuipDRe5zYi63yWh6zHbmRU8daD8K7Gspx3QW6xHi6mCu8VvJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p77p1EfNQ3ckHFG8oPpnHQrts5wbuxL5gTM8pUEDQEby2ERBYzcVjxTKvA1dUGhePQExLr4hmphmpzf9mMyHPzX",
  "key1": "4r2RUHDKWaL8gpuM2eaEQhV8H1dZj5SgCRkGPySk1X931JXMdeNHjXCuA9cTQSru3RT3uViah2bZn3fADDv2Zhe6",
  "key2": "4rUdxp7SLC4ysM4fUZVwEjMpwHvAoaCmPXP7gsdCzdcs77HcwzrV4ZJv2jve5vB13b1NkhcixB6R3nRTZgtXHsiW",
  "key3": "3tDcH1ejNoPAhzjYyxRReafwQ8YortQkBm5Zj4bW89PSrUYCqTcZNeveAdi2wWqxi3sfWgF82Mt6EGUn4ZhJ7REF",
  "key4": "5si1BD5awPVNorngan4X4QjjtzycQL6imbeGtYFMBDbFjmAHFr4DTfbmgXbvxtywpucT7DtPeEG1tRPfm7rMNFP",
  "key5": "629xaBjrEqxdnffkb1d7gUz1zzRvjffiq1c1BJWu2ZfJHcKtgysZ5n8tk4UVuvq9bxg9yA25ykkkZyfM2LaSzQTX",
  "key6": "52ApT42MECVBSANpwuycqDhox2ye7tJKuMCubDnzYnZUYHzaQB4EZ3c2eT5T2phrji5GMgQBpqxmLWvEHrNptaXY",
  "key7": "5ippTavrHUwMFnCurSC1U5L5C3XmbgZVKZFrJJdr1pt8NFwjQ9VSnUB1wmBzoKdHPNCHR5817oCNTK5XRzjgxUSX",
  "key8": "3MBvt1Lm2Hqyt3JMSrnvAvgJsFwgZqWCVtcQmXdHovzoJWs4U4uyij1DFwRHYQtLw2iPUnzaZCD9wXAWsp2vvukB",
  "key9": "gMpUhPUJuDjo1D5bPvsUCeidMmhQN5qRxVSG9zkQLwkguDJWjEA7cUovrLxhvXop572me8v4zeB7ruUTXJ7iPw3",
  "key10": "2LWp7j2qWDmKFLtFd86dkGemj9dC9d6sFFscUqGk5fpcJWN7FqDo5j3n9RxPfEQ4cNMvGewifPMom23W5nf9zmCE",
  "key11": "5wti5ZATfH8ceip2jWKWqC7A551uUgmrJBMhMusRzniqM6uisZkYNDggumxubmhWeW1DgEmBjEGBxQzDSMXGwDCo",
  "key12": "5t5cYonm9Hw61bewNqGtXo6uPhcNWrszzLYSdvigUApnzF6i8Q2zLQBA83pW8xNgSmPAfWjLbvPhqBNJUKNPwkZx",
  "key13": "4DpKpJAHTTqWDkkA36EPQkYwjUQLDCC8S7Mp5GCJ3xjiidjgbDVHjjzK9ZJnmfgsgMRHx4xzhP1TZedyCBeEVFr6",
  "key14": "63FfhVh4JxHBn3DaidL5jomm8usAx37bWKK4rW4kvaGsGbry1dRzDssFa4xjVKoPwSn3scUYshYHJYWJRD6p4ewp",
  "key15": "3tXUb3NaMi6ynoczZsJJ3kymmrkSY9nwUYEfubJwFhsU4RXyFitrWWA1awogRZ6Y6jh25SNiSrb1CMmjrJqchhX4",
  "key16": "26dZmwW8NRjHdHob7ExgKa9YSVTpH7Z1bCLqBPzzDd8uUhSDiYxnq1R3D5uZALV55o8rpbP4CjpkE6JEgnNQnC5w",
  "key17": "22HPDvMPu72xPT1KgcVzrguJf1Qj6Hx2kEGRMeKPvABCMQ8eRTW2oSvvWUnvyu8BfaNmj6tVKq9avpj99NZwA4Qs",
  "key18": "VMcf26fVo6jT6fpLRWnRcA24DPsxb8anwUtEu3ceN9SFbm879KZhQtJcKtqmxBQNxHcoAGzyX3fMqJaUtnbakTs",
  "key19": "2BKW19upEHakou2axvE7KUYxpdi4iRMDKZjYEUNmDFa6u4zPdaJqMSFUxDRhq36pocX5kxe7BDTPykBDuZoFcnZp",
  "key20": "2nhbJ8sxwppq2QJjHoob2JhRE3VYLCvKEyREGjdfLH2sVvTpjx9p3cJM7vzq3aFWcxP5ZJ2ZusqgsYeE7Y13J8Be",
  "key21": "2waJoeL9JuGMkhnEwDp15KPFZD94MMHVS8MccPkSk3gnmXoFnMWtBr46GCxKYmBA8vUyQsqVwxRz5BZ7Rn61n3RL",
  "key22": "5nhjgfqjo6nyuH7HfXFJBTzMxPWZeqTXHthZZoTs8ZgAEmNABGvXpphcQc3vauXKpWTHU3mauQtabTGf2t4tSWtk",
  "key23": "rssgq5LFnmr5qQeRhicxQZx3oEJrHtNTea17BjMV2DxNpiqSQE44t1vTpzbajnFt8T9i4yLW56CEmDBkeAhxa1o",
  "key24": "4noQ8hGUGJbBmH8gJb4TdCrYn1KnkRigLbwJXd7JHgd3HPzPbdhsJiw3WEucBuVx1XQKf7nvjbjBCeQgRu8nDpgS",
  "key25": "3Lnnt79tvcS9NGLZnVMyn7oZtELwpgpG4SbwLcszy6tcRugebdhXn8f45hLk8zZP9n6YhmCWdcdVH7yhGBsyc3b8",
  "key26": "58tubyhXvSQo16sq5229mJ6c3kM4cnDttNAaGiqDBNQ2D6PonpaYxbeRp1vExrKfmxGTyq5BQAFuWVBgnxjs5oiN"
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
