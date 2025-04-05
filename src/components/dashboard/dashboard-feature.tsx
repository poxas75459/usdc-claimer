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
    "38EY89vyvGuH4YapBuQyhQVhsTEgUiSb5pwxw8ctD8CbVdPu7V1zc6SFH29rRw8GMqQYxPY7Gd5JVxWyJ25SLiZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocTfVa8jPDYeFLB8q9VBDAnitPMegoe3p97BYRyF9do3vNcyXNRMmeAsQSYte3vfBffMR6b6v8ePFtK87kpWvxA",
  "key1": "5wZoMCBTmMzrcwz1Qkz8BDVG9X9HVSrm8kBY3nMNUmBefgkg17nbtesyprmNo1Kf1xeHqZoaoj7YWRGxjmBjZjC9",
  "key2": "2LPvitMMLSZN6CSM2Wceop5iD1KPjKj6Kf9LzqzskxM9AhZQnBHbAJGqhKapGmWrgrj3QZWNKZcMkCHnw81ZtqHj",
  "key3": "48WkquVCXp5PRJkLdeJ3kfZnMXeDZW7Zi8aYG1f4Lu9b7LpK13hgwVooKyPaEojZy8KNVFMX2NKaDQ5Qq4a95Qp",
  "key4": "3kUbYB2fpippt9AAZZfADCfQLukTqh89ypBwkno1wsJLtcTs7nFCfonE7hVGauwpPn2oMVmp4ohL39EYVUd8Gpsu",
  "key5": "5npXYZYdbJMh6rVeJeWuTvSYkJFfTsLr1U5zFsFSATmTofQjNxCdpds3f5masRc6zG7R1W5Bbx8czwitzT4sLkZX",
  "key6": "4msr9Z1tfG57ngkTFRaoYihy31yt5siYqK7uCXkMn8oeDqmDZKAAEKFb3bEcd1waSxDTZaV15ZECY88V87BsTUZw",
  "key7": "4a3Ew5MyPVP5wCLrTmMGsm5xotpX5WmDz4Sf2PwcRTmQ376Tym31DMjCVSXgEdTMNsYzriF794hHq6DCuH6ae7m3",
  "key8": "3phVv72CqKAGXqiJTHNPKqM2W1DWdn7QLVbMT4xGc78cKPewiq75UH9szXPiuNMsLfir7BUVYE8ahWiJ5GVTscsp",
  "key9": "4XdXyFN52UjDao8cDJjjfD1RGEfr9LXa6LP6ri7tZUtfZSRAM1st3GEbt9Uq7ijASQjX8aACqykZwQPVnM4EfuLR",
  "key10": "aKboiFLeas6YNsLZztqz5KgJVWp29gUP88HE7i8mcDRiiGXCkgFteQ6Vb2pmXVYbtaWUM5THL67Ucr3CddHcfhP",
  "key11": "5kYENmGZg4C4yvrkd3RvAX8MxVaiUaH7qjaQyEWJenNBoziBFqREUehBu7RvojP3ksteRcXQTqWpWFbUvEuoYM4J",
  "key12": "49r8KVGEmEcZ5hX6t8ah9mBgVn64CmftzkhwYsPaPqVfmcz8ZcXDKXAcVRNx2CDEZcm84iLh7p4sDFnz1sYHosxS",
  "key13": "4nRvpcA3umuNCGAmYWt5dJG534rkYFWobg8SQy9ohpQiyPntyC8bj3FFENCVt4jgGxrF6zLBntoBAy5y2kjospDJ",
  "key14": "4EWjoLbLU5bkLZKA6scTwp6HyoftzfadDhFNxvcgh24bwGt9DTKpJi7BWokQ7mywZJMvF6WqjRqbcbznTpWBJVfQ",
  "key15": "jHSGKh129WUj5C1BGvBKfvpAr4jysma2Yk6t41Fu85i3DuQjjoooCwRtVh4mjsToZr1LhHWyJFDtkdDYELbmcyM",
  "key16": "3dbgQUXYcfCuEDtSn2HMnH6oKZE7Rb4E19i7ghXBxMgVmu2QyMYXr2uHxypmujLXB2KMTQJkJPUq1XCstKv97meJ",
  "key17": "3jShXZo9GMTuW9Wp6KyvkUsNnbV4VdRZHrJCXnjENtTe5zZrVNTQ7Cg81NgPLxHpcFQvk7XGSNLtp4fbrDC4gjHH",
  "key18": "3eQhGaHiGK14v9PQWPvAxiQByyPsfnXLja2CVSAGuDso3XEjbRRjXKdsinf14pWZPjBLzX629jy9ipFUSap2pGNN",
  "key19": "GznYw4CLczAtbdEvrf6yQ9JdJqnrwcCy2PfHD86KBhZ9FTX52Qr7Xz7yNxE3N29h2BR8CMJ9zUUugLwo4Pw6FDC",
  "key20": "67859ScnATjKDcJ2WcHFjLvduq3gTKXRx1Xzfy32jPznfY4rcQjbgb3KK1Z9GZHmaJKjC7hZEW8BVMaW4rXvLW1f",
  "key21": "3ECehjqsrroAoDfRb4U66gGzEhVmxwv7y5rfAXWoNNScuUWZSGEeJ5GhBaCR9iZwKCJVyq2PD2e9j2gNuTN6Qv6P",
  "key22": "Zvt4bSiVx2dZd1QkiYnGEDvXMNhKiZHypPLpyKmvN2LS1HQ7gpo8DvKF6PyzVS1Xw5H3xE2TJpdjn8QKsghvio4",
  "key23": "gEoJ1nDosgdrwymaJiHnbdmFg5rQybE72pY3Xy656Sd4zowM2Dmv5P8KfwgyE6cStiNYtGnnJTShWnqtQLpNJb5",
  "key24": "5PkY9bycMdSWAQ3oddXJKGrZZeSvZAmpXbeGwcJcPu6YWUgbuiuJBLn8SLBFzzNAzLQBM2ZZn7LbiyEZdPLNURAm",
  "key25": "5w4NZ8eg4kAMZz2Ms4VsArFMYw25HDE18eb5nvJY8e4rvS9jdrCqvRh4vgQwkQco53HJeTfPy2wnS8J8HYtwsqaf",
  "key26": "9pUCfaTkxZS7DHNz5ya761EQJjRsyGcRvVhMnhykZZuFcYUfTSQrs9GPJfethXpS8zypvKh9LG8JUv8YEEWMfkh",
  "key27": "peSpdBABSstR6BDX5XHPP1Q8bFurjhfEWPXwBPZ7MzFcwBTKKedXKz8osR3j8DckMXFijpgTRFLmCL8KgUhwMhP",
  "key28": "3Je6osXNhHBkRTvbq7S9DXah5pL1myBerVCRNijgpEm9SSpzrGb1xHCuLK2MjHJWKnKo9pmkB2HArFCcn3nBqUNh",
  "key29": "2oKjkmNWsbYfbs8YmLZjqzn4EgpT2rfpsLQG6Cjs21jxtQ7GPpuJWjQYhBSsH3wpbb8oirz7BbBxFEvtek4a4HH4",
  "key30": "kddA2qDJivdNoLebuA2hCYSYFSfD2eHwcKomJK5qWkGZ4337GJNCPnJaPejPyZLxbi3jwhC5LdCumvJPsScFzVY",
  "key31": "2EuYoxiQWtroeJJANz1kYfuqxRnbevxUzVrYFncE7qK9LyrDkBnwrzWv4mLCV17CgVVUhZe3V1mjye5Dcu5kuGDq",
  "key32": "45Zx9uEsPtKQHeaS3Tq1Y6hBZproSchG9YcoaeDH9mezHftsARg4xwgeFckKnHzUZpeQGv4F1ECnWzAugRuKtxgq",
  "key33": "qWZCfkdS2ZUZuh8wVNXBgp5A555SEFMLHdhKG9Vg2AqkhQ5wAde6nxXjEDhHGo24kGr9qW9nNK3st6DECf88Ps1",
  "key34": "4MWoK9hUtxREE1NJPH1jnyGBNJoQkG9nbaf9nismBmfxELHCuA8VmLxQGV2xbnYZJNfNHLETXxHRGDjDXjxWnZcV",
  "key35": "3ArfCZojdVqmWK58zFgChzeU4qKB5SLm4gRyWQob9AthMXAxiyLsfL8JB1virQXefpjNywh6rj3wjCYChrmdx6zf",
  "key36": "43gcpWntNUQzcJTPS2AN1XvNbWn8uSUQckrU8cqtGgeRmepMEUeNZfSDyLirhTPwR1NNWMwXrw7Z4UVKKxmHhA4b",
  "key37": "ZuPK2z8YFKVixs1b3PHs9qhVnLpdG1udoxfiWBSMHQkxAkHnJodCshnbwMRwmiTGPWmEkVgTB8ETEf6jDPxz4rz",
  "key38": "5uVB3wjdpLc8jN4yCHHE5mC2GjW2qVvLGiu5d3N1bVSdQ9q5BemBEdTbYNhHLEJeNJxcSgBPng2eXSDS2i1vWtpf",
  "key39": "4zTaw6fR42JLqG3RDjNeZ99rv2e5YrQ6PjPna6V8eHck6qWtmHmjg2fuj63mZG8gnxZq4tkk9Z7oevSd7kUSsiqz"
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
