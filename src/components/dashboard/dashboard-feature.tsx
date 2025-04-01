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
    "3kJjo92q7kkCgdMSMqyNyroyu46wBUuUV4Hk9CCfDsiP3mgv1BmU2h2dZccgVvzYAAwo7WX6sXR7Fh2SriJtrijj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2TYG9aZUMhpfhAaYSpY39VdbZPq5mLhWeyqn6MCZwTRXUe1aPLZrZW3PTz3Jp9UTtwxjxcMeLLNdSWfPWRwNWo",
  "key1": "2Sz6C8YesPkrNbXzzstdXgv742wsGHwDF7GZv5MF78Qmf5nnzy8mQxsAYTjg4PLBvGhhBvkSFr7NiYoGTtYaVemB",
  "key2": "5LLpACzcppUnnyfcySonQKVtQEzGMFfCLaxPbfhpdonaJunPREreZ7f4rU13GnrVRuxjw3Jn7HVXNozzV9YiagUn",
  "key3": "34CBiustDNHH9s8eknCZkHZaubB8ogHSu44rHkQodtJHEZPeXkqAztxovpXvP8VgSP6ZZWFUAHWAkvQDsG5omgsJ",
  "key4": "2vFxCaLZUjeivb9HRsayanSsitXQFgC6LiuaiA5qT8BCTM3r2aSZk5y3NjH5dPC3mN7PphtU75wohtGPUnj2zqqN",
  "key5": "5YMnURqCQ439iz7uik6uYFCXnYDKkCGHTgkxCVpZCc645JpGwa1sNQFzsu6kBJz5ShQwjBDN2R7mAR9fpeC616YB",
  "key6": "3Yfaf1u5KB39ZneTuwY2SSgAm1DwAW2uXKVgCEokW9sFqj11fcJ3J4inT3Lj2wnBkgQoWuKviEJgLkproZiYcpCb",
  "key7": "24cQgyfqKbgogmTvbVECgCG3WxEyo6wWQdr7MhbKyKqq91C9giuLEjnnM2Yj2D3TiXCzLGwZLvnkfsNSbLtve8Xk",
  "key8": "2GYzQU6t7skBnj422XrwijUGeLn3mWPfPcxgfeKBFic4sEn8MG7HVjobdDrG4NN3Lk14MvkoBdhgsvSZt7vWPQuP",
  "key9": "4Uejyq2C6NUDxs9suYrstDp5gD9XchSg1QuG36aEej5UMtUC4z6E2xCVmmQCHnsWNgUinHpNPg6ggF4c8y6R2r78",
  "key10": "64L26r9ck6rCrkhacpDMjVVB8GTkPyFnojne4Cu4DowKp37PesG9GqUJHnFSCd7sRv5Gd11cKyFSfhugy6fTDJ7f",
  "key11": "2CJJWDY9aNhTCcUsc8GtXSxCdaEzJyjJfN9bAicggnqcz1vt7qLCq2gQ3LMcoqy6zVTrd5qZkdL1dLQkAZtzHJBh",
  "key12": "2RUjKbu8WVio3RkYVbvcnGnZTgf6VmbZ3KuUTfeCKP1eW3jmTiwnzLgWrBAfNn7mfu4k99amDAtadhrz7cA8sSxJ",
  "key13": "5PVnoFvFq2KCzMWDcGgExjrtMdhhmqrSCSUzJNMPv7BvMNnjtqpxhpVooTBX9xMQNzqd5d5vho8zZZ69ta42mNEV",
  "key14": "3f8Gx3H3AZKvxkbJZC8VAoDHGABVy8xwLHF9v9DNxCgFxTQZao4Z6S7biHUZvxQEMvXawnzoXCgTACbWFvSvuUEL",
  "key15": "4CbmenqXmuMXhRhQkqTYcKdSrcYDm2fRzxxEGwXwLhwrCCvSyzCuSA8CqtWzMZxcgJJEtidcpNcpg5QwnG5oRLei",
  "key16": "2nzZ31ti6JK7Xgvf7HF924pnazwyCjp5b5a99GmUuc7bzxXXe7xwGCUF5ijEmCBHr37yyRBtMHCSKB2yTmW6dTjY",
  "key17": "3EPKS8S54EncE83kJ4BmJ1rBkMWsJkto2tcM8BmZxVbCT32qE4GLj8z1TUX5gJ9rgYMY6bwAs1fBFrZVJMMxxTed",
  "key18": "3Kr7vMX6bT6mHe7BCAu46CYqiSaKxoE83eqKSejujG6eWPXgp5KV6aUioEjeeFf1W9fu2K2HYC1XjZyshMNaNy5p",
  "key19": "5dPW5YqVtUzjCmuVYD7Fs6Fuu9mdw2TLqjzsunB3iZ17QNiMUwwhf5YLyCmPrS1uP3Nej4WRpHGXV8hfDx3MpQ3g",
  "key20": "5uuYMV9JVPEWEpyq9hc8KfvbAcGhsaip3bYX8mdYsZ3Bze1xrMqqEXJsEtvL1w5ZhDU2jXJ9AzzjjuBCoJ2oyqap",
  "key21": "2zABaWgLG9PwPfAaRWpbQfGNqM12DZYFBEL1ZFYeLgYae8NKoWvKDWoN7TPsxocY5x46JTzkfn1UF2yLQFsvEzxq",
  "key22": "5RACjuWEkQzmMXpn7BCYyHSxfdVQDFVDx4R7UFBEnNVtosceLByQx4Rxd94WdXvsTSJTu92SWoeKrKT8W2HUiJd5",
  "key23": "2GioWYiQmzNKyqQEfZiGjRe9dGe75my5FgiBnEfvcAYBtA5hn8iEhMWXvyd5xsKvesGU4MC5M57dNuYfpwuiAz8G",
  "key24": "4XXxQ52jYqjWhTqwkTLQcnUkD3F6vtPMa9aZHJCJ2Evn5PyvgnbEH91BR15x9eLuvSLNC5R2B9aLYpPrWwKdPn7m",
  "key25": "2YCPG5xNGM4ePChgXRidFJpXHYt4JoBZrYambxmdvKfiV6XCLmn6C12xHzjcFNsHKUTj6B4a5n6iWaCpTGeMykqs",
  "key26": "28R8zFqa6FN3Uy9j6yUvBW1eyYiBzrAsCXLyC76tWxBmxvz7WGpUc8Ui56YB14rEq6UAeJYr7wWqT8nwiaeKmHtk",
  "key27": "xfbCMKUuqMd9y8PQXYdYg9fiaJg63cZJWrKn9Bj65xfHtVT74Cvoogsnuqc5BuwJbW2Ucn9iZgKUMzXN1T7AR7W",
  "key28": "rKGxLj8J2wC494UUMxKsKARLLowhc9k6AqLgBKaKxHGYpoRN1ehNY2FR3WdxFjcTM1jEEBbn4q5Wa1pusDmhCkT",
  "key29": "iVPQvxKjHZEKnt2GsSUXhXyB7w8uYZ6MmDSefCU4rZCrcm4mcDsPNJNfqTJoWihE6xX9H3rcjef27z5HWmyyvdY",
  "key30": "WUpiugPgtKLeEoGUdmcnLtda3JdjhD9Gh9oLpDVMZ3UMa9pcPJ3aFtXcFRKek4DQuEMzB5NXcXDXVMHHmV21QNC",
  "key31": "ANwyfSsmaXWwktEosWcQkZ2WZVmAZZZEy5JpVzRFbo5w76wzghHsVFiGd1EWHzPzE9e7uUaoAbX46KdGbDYqD6H",
  "key32": "2VmGhMwpkVxuGsg3AwXHPoQwM9nugjxCjrU5rHA9LCBx9YtBMT7w355wmapgR6AxuqTzw2B2ELpG7beF5q7hTvuM",
  "key33": "2yYajRBQxRm3LJnTnhEebY3PccTR72VJrCQn6L87VWiZ6eq9CSYbrnrJwPsxfK3AJ3rc2n4HhtVd4dMfvvShYvDv",
  "key34": "28inaVnQ7B9d24SYVxt3xwVBg33o4siSxzu8mUF4VG74P2PgTVExyeitgxkA4o7zfB8pMx1SpT5ocd2B7Zeh8U5H",
  "key35": "27HYH94yyUqpHr5RXYw9jRpjgA27N2i6GPKcMBmCFnKye5XbmUsJrKt6gmL2nEgequu5x69yXKuf8y27AgpETcc7",
  "key36": "PAyAzgCYfHDg5n3xVQojJ5xdffDqbWisSMiYbC6jh89ogN3h8rsw95H8Ay33wyYNebXBfve4tSxmgujNFCWptFw",
  "key37": "5S6aVGxVtjurdAaVi4QvwchkHWoGM3RSjBhVVS8RXhffwtZgqGCwEc91PxWKjqCMt9vmPgAi7SMUeHeUgForyGhw",
  "key38": "GDKd4wUiuWPXxo53HdnygknNSA3WQpu3murSLAPxUZivynYh9Krcj6ZyQs2WyDAPWhJSii5usZmDatsCHaXg5Nv",
  "key39": "2Fr9VZB6T2bHuHLhqMmsTfZXe1sBKYkVfePdXoD41PfcjoX7oYapeiEaxwAwkqniLc8ZUGUJDdwHUoyYnz6wNCs4",
  "key40": "3zCrNd84NBjgudxekzKN5EgS9dQUzWDCJ8S58U4kjZjBFdnAi6Kuw9XvZGXPeweWEV8hGpm82qUAqEoiAYHtWkRw",
  "key41": "5CQYXaMNaKFv6AP2hertPm54MnahuQ4LuhiB82qQdVaLtafFcbQkDmAvixsB53WmCynFC41EPu4M99kAH1yDd7Mk",
  "key42": "5t2guSvfcFys7WK5ZfpzdGUqmdwbdDZFXXfofW7kp5kWxN6PRT4NT1wWVpDNQL5EiGXMxRKw7GvbGQ1TPZGFru3r",
  "key43": "5YLVwWcDarSL1sW7R6BGtzJ5vd3rnYZ3iqFPrAoSRnv52s83iV7QcBagDkZK1u7sK8PX4ZaxE1UByk96u516axJm",
  "key44": "1235aAQPi1UD2NBzBc1xEEPEKVDxxZB5qq6ufmZvKVsByfq13Q9aZxasFEuPtCVqQaSmxmAMCAh2NsLgooDuSCht",
  "key45": "kqHCcJHWSrU2TQgDBwUynqakVWRDpSVrKojAy1tMhizfMmomUG511ptEzTjbrrsaivg148oYCksZDqres999DXd",
  "key46": "4oj5YWJFNyShTZSnDzBUAGPW3PHEygg4pTxqdHbs4mDtWcMvU7Fgqd6zMhjY6zeBeqouAdPfAExwntZvqKJh6L2p"
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
