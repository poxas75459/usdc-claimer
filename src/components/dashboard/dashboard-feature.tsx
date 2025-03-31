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
    "5U2ZfxTLv2WXzPFgmAgXHx5m1ypM56u7sVuNVohZ7k3PKNraYNWCGTdU5zL73efu9EKoYdQZyMY7BqH678J1aTje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sdRnzyBcMMGKMUEqnAPL4xzha4xpnfoUrEdS3UiXzYKx8QfwwHR9kQ7CtRD4BReVdzTVeonw1KSCN74grwXm26",
  "key1": "35tczpvqnewsZnPU5TCfUJ1FUMjYU9byQCSUYv8ZRKHcZ1MLyZzAbkYpRjdTNWD3djoRdV8VRAYbncE1thNXdNsE",
  "key2": "4up2efkCCa3xUNSEDavwE8Cdi7NoG6P2yJLWz1cdwbibydoQLuyAGDR1TANmViQodvsWaciXoYfHdph4Dk8JtzYC",
  "key3": "3AyhVyanHVwJVajuw9a2cC94DDfwyhbm4pb8bmvtTfitR4C4Q6nUZrvsUCCJvCEtuH6UuX9mVd6qfNCLv77Xq86L",
  "key4": "44Zz9ui2jmxtLnFBeHchqjr32pCH51oZK95Prm9nZ2F9VSDn9B1P5f7PG2Ex2LTcAmjTD1MXdcGx67g7AEfd1HEb",
  "key5": "47pvbrFV7nkx5rZ3M6PBwe6Q8mnz6X5Y32WkjJ1Bg279CVzLrkKU7B6APtwZccYDyrF4FfuJtCHyLC8UGRmz5vw8",
  "key6": "2ZbrJm2fpyYZ6n8GmpvZHEktwqGkjwxRJgFLn7zy31m4S5cWCt7FZ4XBGGNRmNKNJVVZnEk1755gqXfj2yghJPrk",
  "key7": "54sYfQVFjVmYWqi5yygbhHd8zPLLgcA37srX5Dtw9xSuavCZvvGPLrkyKcippEfpg6qPGj5aNJgJcLVJkAAzZiNc",
  "key8": "5L1MS2VcasRTAZxGFjVjBd8drsdLojiVf6MSCLBtqKsKWcRLjFdbW1hqtWFP4Z77y9ZXq678FQicSJf9rBDycTnG",
  "key9": "4zWcQqiYQ5gsGBYnrqkCEhXguoFrjoxHdyPt5nxubxtVES7cosPwwbEnGKduuh7g5B9zUPWKePPJUvGpALDvocFw",
  "key10": "3MPd81PTDWVpdRTuuTqFpKhaB9421HgnaxYevCbykgVCzZMqPEXbCYcC9vLpzQYkMUsM6Gmp5qrsoHkrP6GBbxAx",
  "key11": "5Jc475b68S4ZZXFkM9L3RLz218mfJtMajcuYMNge765PPSuE5fMbkHs4UQkTHXCZEkgnpFwmAvZbVvQLttsZdy1",
  "key12": "63cEUxTyUdz5jc59ePwj1gNZCZ3Zzda9Y8VL41kQGPsAcnAh6qb91ZMWEzhhDh9bzUkhkHiREJNHhQEZNvSfn6w2",
  "key13": "4DxHpgDMsQCiVFyJ7KcaCRW6UP9aWWdyi7BCnC5Xon7mpEi9A1MAj9gJr7aDdBmUfFMfKaP6j7XYxhkucUgNsuag",
  "key14": "3wr4pKxtKcAat3PUguXgxGjPM22x7JnuASioGdsfUtcxSjfGhcHeURsMXTPhJyteEELdg3aTovfWRKT8XzaBjd9y",
  "key15": "4Rd6YEA46AtDCRv4sRywtBNT6QqCjiHyRgciLmENWitezibEH7GbP8PVNVSPtjzZ5vaa9Jn4yfZ7mRXX1ScGQ9my",
  "key16": "2XVXRALashEgHHxyMkVsFgMGcXUAeCs1EMnaw4KqhF9ZSdSto4iEjNb6AWVThbgDDGRdYgoVjMxRHTZ85VFxiiNx",
  "key17": "26nnR4bVT2V17b1e8GT5eu7HFVUCzjko7hynSfPpJVsDVHKrGdeMSTVEetbZgUjwjRBCfziYdLiVjVWHERs7qsHq",
  "key18": "5iDh6mdRFsiKVDP8RuWg5tKyBcMVyEQGf8ZoW2moLyfWH9S1FAkfJHYmzgpBnB4yZ1ACuRLJjWx8dgKStYxtANbi",
  "key19": "65NgfWtyQRAwYB1U6DZzUPUaHXEgz6MfJ6EaZNxsbtYTo6FMx8aV2ALErQWJr8hcBJL8CMKBnrR8Lth2zfLf5Q9C",
  "key20": "4o33YEqYqwSF3dR2jTpBCZCPjhDLe1swRQ6QZ1fxyqdykkKk5xqNm9kmTCbMjZf9QWTbnX3EpMSXQcLAavkj26sA",
  "key21": "2zpMBenhxBSdh9m7Bd1qGCHVboQTRQnvUuoqo7zjqBaAuGg4zic9YtWjHNFyV4yW5sc3huj1HXVwHrXxCGpVBozw",
  "key22": "27MpdFWeGEKCvXiihYQbUtxFo9uBvyz7E3AioxPk8ddpquK1ZbNQMYjevvwq7ENUA3vcydutxwwmaRN8Hatxpqd6",
  "key23": "5QQnsDuaeFaJiDn4Rv6xKNiSicSociqy6oyifUHpDPrim5Nw9jbKeC46ECeQJv6fCB7tSvbyTGHo4tVJErbiD9nq",
  "key24": "5iBZXNL8iF7ueoSbgb5pG8XR8Q8rAoM1NUGjdGMhrn5g1WSPB9Av2kkef9wqqvoFkNxPEBRSdaogB2pKD7nCBu2o",
  "key25": "44dTRsGjAZr9iUYeyriMds5wSVrsDqftjTGorvkrxJxuPybQgGJSDnePebhUUNTFR3pg21mH87ohYb8xHc3k7wXW",
  "key26": "36GiGvwF9dFibKJCf64ryaYPmAEJYrz3wPpJLPGaLwZW6EqPTEA8Khvp5ZrLfER8GbpPhBi99qNsHkkHqWntJRik",
  "key27": "4UTbEoLxrviYEh6qGpgLApFtkm8Y31o526A8oULXP1CNveDk1XdYa8EL3jdN1U74PzangwQxu5JZVWDHPRqiySTN",
  "key28": "38VPDPMmbe6mdnfCoragQixkWSD3j3ENDFba4rMXFzKtvMpaLxzHQyvngtg1cz5JLWAAipuENji98wZLNdZG3Ect",
  "key29": "5KGHwxBVCD6F1j86xceyCZqZaHTFAVYFcFwddtqxA55pSMq3EjswR1C1SXQbV6CVjzRvUteY5HDyjMKUfdDVDHj6",
  "key30": "5qH5qGvTrQxsA1QqxN5FdA1sy8AhMQEPvMoWU2XDPZBEe9DCsxeJd6Hz6AK1zewyt2vrE25KjjuxkQEMGcMqzrTL",
  "key31": "5sQ5P4qPczuXpezk2JA3rSaRLJiLCKXecWVjoBxUwcJiennGLwjqQyKHBScj5p6Wa1boWRKHF898fc3LF8JUKEez",
  "key32": "eFURjSdG3ykDit98GigDd4ZuqNfmdFaiqksNwXWoT3KoqHSNZGJUgUfPrmvC9jGtxCcVExhAB7C5WMD28ejUE9N"
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
