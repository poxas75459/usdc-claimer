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
    "63Ab9cksBJqqBoqkngFJ18Zm9CdsKUcE7pPDEWUQAwUE7GiPrpJezDGodtHm5b75H97ydMdkB6jEFhRqrrajN2xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379mFQtLVcbBDQoayDWAM6dLm3dBzsADZknzgJCWyxhq38Rh1rJwaD8JtUvxRyBMtPsqnuJzPgELr9wKB7bvWnzB",
  "key1": "5BUGnpvPRiU8oqMkHZgMtLw9GhRpy64XkEdnBr6kGSPYYzgcWXr2XZMVApo1W8H1DFfLg9a4Sam6fofqPdmCYhqa",
  "key2": "2amebHx7TAUn34r4qf1RPUHCA7A1TNr63qcz93ZBF4kr36ebgH64n7oYjJ9XThVNeYQEN8SEy1dwDbXzAzfDwzcH",
  "key3": "2tAnaW1U6Jmb6tFANSmoVVqKcLCAqeoZvKgCyYxvHhYfHceFQ955se7AbKfvJtwWb1y8CcmHD5NPVa2YAx8SdNsr",
  "key4": "3q97JZBvqjuND1rEV6Mdssg9ELYjAzXZh4tMDhUszSXDhXfdgd3fk2E9rTRAdBNWPcPaAH2bfwWvMTqmDbbfhm47",
  "key5": "4Ps8wUnbW5JE3JbXJ3bF6KDaUEJHHvvJ11KfM2MnWAPnrFd9fqnn4wXnug99W6wN33CSNTqyScTqp5YFEReZFJBA",
  "key6": "4YmHrFVe3TKXN8SV2hNQCJR4w8LhdbjgDcrnisHAcCfjuXsRDA9BkT4Yx8YX1RHDS645bnxbPcuTUaPGixLtwdqe",
  "key7": "52nLNy9cUhcBg2s2AzY4a3vsMQmLqEAeviCLJFtd5iCJ5TFEu44zRgj1Ti6B6v19WsRNZiJrW59AxEZWEiruowr3",
  "key8": "4kaMYCKPi4gtYuJN6GkyKZeaidmEfrSdcrBfApAMW8DYJBHirT2CqYXJpRfhZMbchsL9FxtdHvXawBy3vQ27pNas",
  "key9": "QQUWYpiqoA4WeXJM9LxZjnFToHPTDW26ibBii1ytpZz27FVozTCem49m7B4xpm5agjX1xLb67CTEd8T345WpCkX",
  "key10": "2ecXqaUc2n8GQTaPdsWdsrtGpzckdLAZZx1F7BCfwGaoqV7YeNybFpKFcjmxpzHjpKNXgP8TkVx6huuMeY9N9GyM",
  "key11": "315Y19eU6bWoXNwB6m8TUCCgyGG8mKLnTfWKYwvgG8nXGCCGqZrvpATbBbM5HTDWsUYjX57Tii7ApanFSWHSUPA6",
  "key12": "5MbGDWq6hz8xrCxW1sRonXjtjkQAWo1vR6s2MV3bRWhQYfaDYWH3h8GiEKMpHhwRdoEYPPGHBD7LEXbriH677YfS",
  "key13": "2dZAtTkdniYnTp1ZonvZQgpCUpd9TtdFnhQ85yGLj12TUfV39QUFsNeVk8oW7giELpXXQ8DkRttKijLxndowGCbY",
  "key14": "ybejp4NzDg6CEErhT3DdRvrB2xGb5Zbebv6CwJuuzTKFYies9AFbJtP3VooR84Cd9x6y2QZ2xCYPWEGA1HNgaj6",
  "key15": "3e5BFHgjULEDHo8aefYKxkvE5xByfq6uijLrrazbSjZ274WEYNHTptzeP2KFjfAgnvVpipdneZS6LLDWhXCSwSqj",
  "key16": "5v3sVLNTPsXYhYC2Kx1Anjks7g89xBTdutgyJjxr1yYM43RJiXHXRzMN38WcXigh8yf1jyjXLKjRVdAGzWt59MAd",
  "key17": "3YFYayehPr6uAFyKXndkM4VcukquWLBUXeUgR795EgptZyXZc9RmeCQz2ETUJec4WreXZLFxxu9GJGUZLQaSWwEb",
  "key18": "4XQvx1rhzG2wzPYRUCLq6Zd7hF14fBwKEgZbGXQD7SAM74XKB4AuuZufS5RGW7VWapCMrcr3WmVHqLdr4DCb7DAd",
  "key19": "5Xf6HvacGXFx9QyGQgXWihXtkpMxaoJLZhGnZF645SAKiw3Vm2sRWkwcRyXkgAhD3oxBht1vGRaf4Ymj1yLjBmCv",
  "key20": "5h1KwhSGeCA39cipR2uqfXhMtZ1wC7ymctBnEVGJXenBjnjy9RoEMBHa9Jkhn3DCmQqKVtTX5ihf2C1uXGmyZMzb",
  "key21": "4rjnXcJ5fWwjCBTUK4NU7TcVnrfsd2NhS9Lb2UKJKVaiEpXdZCx5b7xigPbHroZjgSmVZkTs15hnSMd353yhnFFC",
  "key22": "2CMpU2irqpNCEHSpgJkJwHCA3ruT8mWdQx23DiYKC6WjN3rhjHZwBQnHvvD5b4cUHxpofq2gNQwUeVhURJbtDUPp",
  "key23": "4JLpqBvcxzah4G2jihJ8fBmeTQBDmopfVKe7zArNM1mxMUnFDc6jS8ei4QCVep6mgbYSrmSoHfBRXDe3CYstiWWS",
  "key24": "Qost2WBq9z384XP1gd1MMJBZJYkomicRQS8MhjDswq7kGCRbUdQFof7yvJrB2BUSfhRYKJEuQ63WJuwhbb7CWxv",
  "key25": "3v115DVAkUzaewdPhEKs7AjomnABM3XJGzDqxsXnMbvhp1DaRq24p6kuPeQeXqMFig2WLDaZXcK9Cr7taJiLfi1m",
  "key26": "3gaYg4CFcQ2XK7q12ZZ4JgGGiSkqSMoT1YhhzAwSZtL5tjB1QetTa9MahTFFFL767BFoeQ44aH5c3DWKwQZQhfDU",
  "key27": "1JWARR1UmP5c4pDMBKB79cKRAcL8NqudhA3hoYixT9GaTiBwY7pm5VKm5Yb8ijMzBUfCo1ms5vQ9AABkarB57Yz",
  "key28": "2kSmrpBhoXvbm7qGcpzNw7ZJL8ev7WcreQnhGtiZoa5E4vwDPr7D92ZrxccekBnhpiHEdwaRUbgbw2fvgmVw2UyD"
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
