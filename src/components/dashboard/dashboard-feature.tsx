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
    "4QWtQQrZtRGkyyLWkEcnEboYGLBAc69xZiq7iBaEwPGPcEs6iyviK6Ht8aNgSG4VYvQNRtWnYefiSgLNyDTQ1G4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r3YnriLCunxq6ZzP8w9o1xUsmE47E9UMm5Y5BoBUybiAdqcykfc12giuBcfxf8bj5Mex6GtBpEepgF1fYtHvv6v",
  "key1": "3Q9vwjkE5WbeTCHBo8vT3EZQLiumZMqFnZCaTtKu7gUzs6RRXQkvEgJENaXEyMhB3QorGjRgJf4bF5dTa9XGbnhR",
  "key2": "1yS5RkBErBr85m8ibSpiZ4gHquVgUHLHCsnvRm1uE5LEr672zHa1cgNy9E8euAeo9Wge9BWpt4ZkWCzX9qfJqr",
  "key3": "3gLWuvq7xfrn3CDH5tCxH3ugUaGbGARB92LsiewWzyCpoBbFYoYH9E1rqjEUQHWGJutLaMiJXEiUctvQp9PiS5we",
  "key4": "4ZSGWe8oaSQ24WxrvqwW9QbYTXSjvwrKy87zYiVgkZgSVButEZytozCdWCMxJQapW8WKZsjqsFxHnt9JGDMkCXKS",
  "key5": "3xSnddX1Jzd3Tkt35wGjVYMERhHYXvvsuARUeXQrDtU5m6jm8btMo8e3wscEHBsngxVmvzNLoc93NkfN4AChT5Dt",
  "key6": "4nzh4wKuUX9m2LuLjDs5J5X1RvA6ftUzU8w1dwP7e7Y9tV97NpSx5zewBf6hEYR71ZQzcGJashdMJjzBh94raDHf",
  "key7": "4R7QpM5uyYgoSCQ354KSaYBJ6MAWEqPxdDRpgcuRZGZapk4VVhDMFdET1pkEdNhp5AeZ7c22QAz71vftBZ3mjZep",
  "key8": "3HQ24uS4nL5N7sLeP45MbFuZP6SjPjPrhSc78toACmLdg5MuUBSpGANZ2G54YtJs1fMoWq2N3aLjowhF2UGeMDTs",
  "key9": "4bnfdyHM5aqAjU6qKfoaKgwmhMVgECeakBYmLnGRZUW7ko5UgtB7ooZDBrCJjBMxw2ny3budidUkgKpbHBfz57pM",
  "key10": "2n8UGJp4n5ihGLvfjpwUF6oNvUUqk3zeJNmtrKYoqF69d5KjdhwJDRPESn8YnJXUNryzE4cUc7HdE4NTUVxRxEvp",
  "key11": "YtLJXobZFCWxEZAiG3LjNdiFgeTPx6Js6X9b6zX9qd5kUkJe4Gzwki37gTKLG7gdktXFK4eMGPT4dgt3ik48xVo",
  "key12": "3Sr5UQqraxn8qyBqBQB3FT9QuwcYBjCoufB3WZ1NkW7NUeh17sB96wjQMMbWPZCv8Dowzdg9JYwku7fiaeZt9rZB",
  "key13": "45CEfxYSvhXE3GoandCzZpy5EdLAJrGWpa49XeoLaCn71aj4N5DDNz7hWGHjbB2dYPQ4czYdLD4CnbPYFBHBBx6w",
  "key14": "5ZQNt9A6XKPXHYjncB9MypN5iwQC16F5qbLfRSnfPi4gnk29cuMGvGaPCKuUnP3kR19b1qoBndeqBSW8wshWHhM7",
  "key15": "2nsy6evdJH4aCAfvFyhBpHcJRDhLRgmujDPjmhB5vAdnhPgCyWRzWeKhrfsZLrXKyjQSQqJ6ZbhwZKzaPhJVERv5",
  "key16": "49cFLna4tHpRmw75kdstfN6FKVYyixw9uRhdksMAeTAfTjqBr1CP31x3PnwZzDmKEU2Dx2agPm8dUoPYFPvRtHQc",
  "key17": "3yoLaLwgKCEURqGPExfAwo1k5FXBxmeQTTL2bqWyg23oqEYTQ3Tzt5oXvxuvyhR8D7bx2bEYyajsuq73hZnFp6J8",
  "key18": "qqvrwRjSHshMJNqVywq6CfoH528FoRnUDPw3ZPvvzZuQcTT2txmyqUashsxne61bGJRW9XfFT4dzAXPxoSjZCM6",
  "key19": "5RoEy8GturrRPpkF2XQnttE5Uu6dsdGSQQ5stRWh74mPRSrwquPbZN1pD61Fv5SmNvcmkxSz57ByE7PhA2CpQzDB",
  "key20": "5CAPPoeTqtocwkTnvJEoGd2F9j4BsdZTHnVX6qbh8SMgUSXW3MTToktmBjzLGvzgAomXCzcdFEEdUNvmwFJv4FbU",
  "key21": "5ci12eui5p4Pg3CVzqztkGmHZKTP9oVJJZC1nrNHwELuGmbwqdXMgWjFDkYSKfxNPEpeRAXGkENCQCyi7iMfYmyM",
  "key22": "XcrABuvSyLCNxWqate5aba4Jv1sEPRWYmYS6WKZiKQjg9FzBsz9XPi7cfS2vaQuupmLkEWBQmEqXodaQ1mE5wVY",
  "key23": "4DBm4AzeFGeNHytrxUQr4bjfsHiF4H8winSZQcXNSiN69nn2sDZwhH1BzRsQjTYzTN2pKV68ujg9JM3xX8t9K2Le",
  "key24": "3eQdt1QFKrP53hdPRrLEwPdH6pyigQqHdk47a53RViMZkeJq8MfJXZK1NzaFUhSkB4rphr2m6RqQSP5orbKKngmy",
  "key25": "hM1Cnj7sysJgJ7uEmhkY9z9vHo6tjsvthpEm4EE8SQygyPEbSedvdqByEjiMuGhvV2CAqAqzLmHWACPZysPzXpP",
  "key26": "vvL68PtfbDtuHwzgrKZRK2va1T4Erye9f63U787GjAGuaJVycw7cDSZbe8TfLitKU4neaEhJFcTHE7pfKR8Pq9Y",
  "key27": "cAVgqu7xsb9G5xhkZvsQiXEaDC2txBzP2KtEbWEXgsKSdyJ3zA8p4TDWm3vrErUVq2FRGGQ5WFPYL3EbdRwVwwW"
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
