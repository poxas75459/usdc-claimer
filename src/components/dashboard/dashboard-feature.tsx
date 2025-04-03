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
    "2nv37BmKD4GEWYL13n4nzw4j9HUQbPJZvV157cXCvmwx1PCpiveNhSMtyCyeTkoNoChj8hdWqiTGpEqwGn2KRAXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UYKegXUWKPhi1QH3ZCYjUQRDL7uRHTrpSCSw9Jns7nQXBDnFtHuQaXECTk3CsGf9nguadSUw6E8BxaAeZt2yux",
  "key1": "dhDfUFFdV62hQ3dGp6TGhgH32H6ShdWiNPsiZsNH8BK6dwXJnLB99u3E1o7f1QPRQ84kRuBusTJeMMPnU17SmxK",
  "key2": "3aAwWSp9Bv49mFb1PWY5GDipk4mLK2kDSSpqzymVDdLUdMHjqoJ39gzJg6gy9xXiPpZzm7cdtzFEvkYwX58RThA5",
  "key3": "3Z8TgvEn8A657FTnwb1fWmBD8s8qtBEMbiHPfH8PxngBziSjB7hMmpHABhWtB3vMJKALeJAraACgUApDi3aVujYw",
  "key4": "2Vu1HhWj3pkY5aykBZa8Fda8P1KUMpP8Q5rHKeFMp8eVKBMWkmeFEHnTYFw3h1Ub5Q7i84rPTCQhcEvUAxQvroEb",
  "key5": "45WeswpkUVicb7t6iL86rZMYTE8h7z7nb7Etk8EzBEgc3zHNAMfwP1478ec7bnvpngcVArTkRje1RAJ1bhJdhJs4",
  "key6": "5z9Jzz2ALzcKtLWrmxhx7Nph5VDcJB1RZQkWDUqhuSF8Adz2SXDyhxsAjc1nd9MfFb6qDPGYoFdF2euueUTu1fqT",
  "key7": "4wEXCqavtiRWbaDRywhjKUD9oWZy7PfGzwVGbKiB4B1KUuWXThhCWGjffjg8kkyinJW9hU1JVfL6ge21pmRyPMUT",
  "key8": "3aQMHkSQH7QJz3vHcAyvWh3kwZjRyGv3SP9EuQt2cEu23MMV7dBJBjcDn6h83VEoBjMAmA5VwPYZESFQ9q2nRpwc",
  "key9": "3pBu2cfMVov2fF2KYWyeGfbQHbW8qZFru9yN3ZrAyzkRY2SbD247DRSuJpNKyEfAj7UUE5YmzfFJUtQLt1wp9DW2",
  "key10": "2jQHQ2YBFVsD2HzvRybZr8i6pJuCxRtjq9WGX4LZ6jBfL4BAfnrceoyGfT7K96EGejEeAb5S8bLEtoscBXJyjMYJ",
  "key11": "4fjWAoRK3mJGrK7ZFhBBxiYJkL72Z89KMYokN9iWxgbmBZ1GMYcCjCBh61VqVRfP5rbtcjCStpSsw2aThY9S5tdT",
  "key12": "2WSZmmg6Svunes2jv2rgkiMsRiX2Nx6tq9E93p6ogEfXVWbANzetAdrPR4RmFAUUpokLERVdedrXUw8L1UDxDwfH",
  "key13": "3wwwKFHHMacDM3Fok8gtydxbNMxKgHN4vwoBK7NHQ8WQxMQiqKGAAecfb2K16DP93nd3zTeBfCzCcgQ417YSHCXB",
  "key14": "4qG3Aez7iW5uSgUDe8CWMZFxnL8aV9Kp852Unkd2fccgffqCLvbU3M2YkR6Gw9sz4x6cC1FA6N7t1oRfHd31QBwj",
  "key15": "3ySR3oFNqVTvJFCzSeybkGzy1FDPA1YkaBkRpq85vZ3hNpw3hMt296ybQif9jp8kFT4B4XqcEjnqxku81Wc56J4Y",
  "key16": "3vyTtV5TQ4agEM27LZCGzBhjDtde17D3T27vbHQh7MEztX1rU3EDXjjH55m21rkoTTK8BYB2Mc7T1h9yb8xT4SEJ",
  "key17": "2ZjvLLpLmrwLwp3yNEwsRbMkGx4t2XT6woybTYKDZtWibfdoanjWWozcEKciryy8Gi2GuyxFrhrFo3x4CUNQp8br",
  "key18": "4qSUe85ERo1YofuomTzcMajgjQK9uNhuTB2zmi7vfSAxgTfZgHdbUqC3GyWfwbNt7s6Ui2WzgZEGQAtiY6U61eUt",
  "key19": "5X4VDjp2EUVWmSE9bF3gjMcxmrWfWZ9iQB5kknZzuN4cbyVoBByMRKBoTU59PApbx4NPq8nc75D7xgxQgCCx3oZK",
  "key20": "42JaBZAgWh2FyvFc2ewbKJEKsynhWpcPAXvBmCeDFw8kzYun8ZCryWGAa6PCgkRgkv9qRsBqJEq3M3zssaUYfhce",
  "key21": "44ULBnNGxBxUWkq93Sew35GoJCnKoy2wAuSdyeYRXuFWCzrPfqWZuJhujTSUhHY6XxBNjfHjW5qiihwaccu8A45o",
  "key22": "2yzzpowDMBQvsFxutYXXgSfMZu1ixRVE36wvnLVUK7ibcgmuWjyAUE5VuwtPb85DPNAqDkQdTicsdV8H24FysV8A",
  "key23": "3stKMp7ZFET4Mo294YjhgbMC6gTQ8HttkY3UFbPbiWfVYtfYFpZjr24uaq3oTF1wJjAmqnxXN6uZxKz6GbFghjDv",
  "key24": "38e6YFaUWXPDGBbx4p4o1xvB5ZXWAE5LPQRE3JUdhmqkbbwqPkHWW4mpokSrRLTkAFRKei7wpw6qcA8u1YpLdtaB",
  "key25": "3QJ1EVnSVZ4oBjDxaYv31Q5F5AfQwxBLXrZW7sDQGcDxNuiZwTznnnZLL3LU5rwKvGe1aHFNhvHr8npXSgphgUue",
  "key26": "5iVS6pfYxtJxWiyDtLBweULZWZRNLXquejQ951ybzFuxLCpKxi9VthH8Sxzca35XcGynRUA9E2w76Hc787y487ag",
  "key27": "3KXcxCFbsxeKmH929qQwhR8SMWUqFk329xMh16Ae2qcGhfDtiUMTv1DYekb89DRtg1CWdgBFkWF6i9FoS2Dt3tU7",
  "key28": "kh3WRzqsbdxfCPUEPQZUV6rVNBpKtxiw6mbvXqW7ND1pEGJMBx9TidSwEdjbVntsMfzaRRsKmtXLoqALHSBXGsZ",
  "key29": "39xAwHHo3Q8hZdmdgZzEtxPxrdAHcDTViGnE5LWWRL6vAc9hDWhMWkw3neD3bZXFnAGvobB1euaVhxtcUT2reeEv",
  "key30": "2mKYveh4khhr2fYeYg5gzEhLgyghZkn2wPkDB5kT9eEXbVgbdfyH4Qv1uMAnFsxp1ahS78d8igV2buoM5Unq28yX",
  "key31": "4bBqXigtPUVskVUkJHF16vX8UEfkBdur2TuP9mRP96CsTVBGURNJAJprgs664DXjwkhBCTt6UrczsdozWeDn3oa6",
  "key32": "4dudwanBrcQ55CJVXHVXtLnpBkiMJcCWYywkMfnA2NDXrAhzS9VjQxkSgwWy4hdFb3SQ3r8bFzgcrKipEpP6GZ9a",
  "key33": "3kDnN6UWLjAqnM7W9CtmyjLsLEtrLjqrGu1FUAQ7Z6uoioY2iZbDmNzVUnbBBAwXk34XatbXdaQURiFufXWsdBEw",
  "key34": "5J4eC5epQNxpXkfJXYBwWNSKoDGsT88QENbhZ2xH5esCvDPRmyzT7jH3vZBYjRHYdPscP9dN1mwsD2m9nHg7Q38r",
  "key35": "3cbX95v6L9wPqRG5XgdrdmRLqee8xNcGuyeW2XqR8aFGModfhxs7nPB2dABuYog2hGs8hCizA1iwReaGqyXYCQUQ",
  "key36": "4bzyzcbi2VcrE8YoDEPJBHXD8WhvH35zweMGQ3YZyjVH3tPnv9x79ZPN48WLLxHhY7efy75Lwjvqge2urouX8ncL",
  "key37": "2osjipmv6bGTSafsw1cWVTf7xbif4GVjk2cwDUSBo497oDFSwPbkbrnkkLnvVQvVGeC8X3crXi2mgH61YpT5qtXc",
  "key38": "64T17bprSTJBhCnahchyynQYaCW3W5fJmfhdUKYBsgXVgcbAC8qxMRnHX8LCKy8Wqk3Kf2t4nQrUEMqRSRuQBcam",
  "key39": "2rHERNibkQiay9cnNVAtS9ErCU8LMjhWnRJ6tBRJDtdovRTR4sx4YAD9ijALejGUQGVSrkgb4mqyVhhJixCjYhbT",
  "key40": "321jYnQJshBDWYqPPdqi97FAFwisUj5i3UTsiBC253oH9BSP9PQRhru8LAvcYjsvWknDRaiJq5hi8CZyV5Cc7gJ7"
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
