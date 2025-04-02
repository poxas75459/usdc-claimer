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
    "2FyE9UyYgRNae6JRqYgXWcKR4wyBoGM2BBgkqYG56iXXtAZL71EP7uVSCbjYfuAnYMKaetd2qZ2hhApjbN6ruDbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618QZX3fTJckT8UEcVzMKMQ1jiaeSmk5nznoZRQkzDdxR5nv1WUcgWNsvUPjq5c9rcpdcmt7iP9AC5CQ91j2PeV9",
  "key1": "4ZoTjW5EFtWdBBY1HUGYtraK1AVS9zMGFhGwVoQqEsYpC3Q9YZ4z6tkLhNoZ3RYMK6feKKXJPQ5e7UeThEbmfpPk",
  "key2": "3Nh2oDXYFxLtX9iMprd5FTYtRsJDrK9oNG4nPL76VmGU6g6Yje9sUitU1aKHqwMp7Tw2YfdLoxLjeV6ZdJQ7WA7k",
  "key3": "2SZWN1x99N3P6ahkFTbD94PW7cEJ9VUEqveZnTEFd5fKfakiqpT7TWdyG5pfenH3qGQKQYSbQUFVdtHvCAacRhuB",
  "key4": "3WeW8WRx5pdfA3s3AUzmcNxaLSXer4wFiooU8gX1eLVyDqKiycoPALNeiPJZMFjGiE44kGUFUFCeySn6bY2rNvMS",
  "key5": "mdsDoRSPgsw1KkZXwEVHNPdgPDT44i95XooZY2xe6xPd7SMnhNqmg5uAe7HqMCiNbkLnwqTV7PMEsLuYQuoBwQt",
  "key6": "hxYEvRbCAmmrF1Sqwb3XPhEmUUMscTFBUKUyB2UdftVQhpBGXPSgxkMPeTg8Qw79rKFkQcgzd5ZtVYopAUV8wKf",
  "key7": "BSWfSPgy6zm9hCsabrwhpdF3ptMRiUWZvZW2evwbcURcYhB52XS1SaTe9cp2Kwk3iL5q3vGfavDZrTnJ4JzFLFM",
  "key8": "3tk5yiXgsixnNo76a7UVtmKiuX3j1BTRFgRa7gB3iTd3GSDRpN8rEk9DPcJNepq2ukK49hfgZBr31QgYxeytgMAZ",
  "key9": "a9srwD3SCBoXtrampiXyjHeQAvbHK3MosuRtrrR6VKkYp5LAhDRQVphhK4y6S9vKfYibCikubo59CrTaJkYrXaa",
  "key10": "5xuPMmydGfYeQHcSj29rzyS6ruCwFtB2FGMgwzFK7PrRSmqpjnQZ4MF3Sgk1qgjmAbfqymCw3p54R65qgMSHwMmk",
  "key11": "5BxY6CsdP22jRhQ4CP7PpsZyr9yDgk8YwvZ1aTEBsBJrxef4JcP7uNNZrcDiZyoHTgmqz1BajppYh4DpXovfhbm8",
  "key12": "utGXUBrStxLUajAcKzoDMdR5cStrysTkwdEQRrXU3MvUfuS8BV8mU51bKQnw5wJTEquDpWiF4Gos1U7dhzPUCzR",
  "key13": "2AXrFPcVujkp21d4D3B77TQcDkQ9wZbMUp87hrVzFqCwYfQWgVP87T2k4BCWgM3mPjqEn49Zckc6UFVyykiSDF7w",
  "key14": "4PWTSgUwrsS5RJ15BfuFEzTEZNHXQ5kqzqZd7MNEQuS2Z9v2db71UULkKGXBsQh51ka5hkfF3s11Ny27YvFcR2eA",
  "key15": "5CWdNoyTvzcWRzaTjvZZvRsfcW4pk6mX9sstkmCVXajNw1JGnrPpLB2kng496SQjQwz6D4YoK7UTBZsfyKJZ3PUy",
  "key16": "Gn3otk5cX1wUvUNjsTh6n5zS5MAKTWAmsLXjKfDV3fKwMou35gpNisAxrQeai6R8DC2kUrjSNgs8Vo6ffUBkFPj",
  "key17": "3vhxN3cQjajRZ32a7EnnXFS3iDd7M3pkVaE7DarkgTAwZW818efuHHSUfci3ZxtPPWHdnWzVDhtboZZm3HpaNXij",
  "key18": "5YhLKTFva8TUBAcAb8Wb38KL3iA9XvkhZQbizQ5MrxcAKZ4eQ4tCm7hgoeAWHtHtKfaFEic5Xrt8Um8QwiaWPRc8",
  "key19": "4WaGzAst4q2G8Wc5UyJ8x8fBPos5uGRsZbJEJQkBrps9Psb72yu3GEonMum6mPG7ocLbUGkgBk7UtN2oqARer2f",
  "key20": "aTxknVCoFRbHtATpmGS7PGy3UwnjwTtBufjapWeGyzXjdnCHpq82x1TyxcwLHR2qpJryP7E2gU92y7Fx82JEf51",
  "key21": "31Fuz2Qs9oSwtDKVVzpSJbHiZYEZw9fhJVyKjvt2GnLJgR89Tp2oLx3pjxGqG1A1twbxr5HBbafiCqJXQ57vRrq8",
  "key22": "4uhRmfqWdfUEdTJNudbCVuDtCRNVDtnRsBp5x1BhoB1cKppauWcxx3X4KiatU3CzeJcmQNpSMFWNeZ1BKBsrVYFD",
  "key23": "2UZ5UvFBX9j3L1TMBqRRQhpmTfP4ecZKp86z6MPC3neYLz9u683p2JJBx8dC9U5MQdo1D6v2aKPU8V8MzjxbLSuU",
  "key24": "28zkSkKZFdR93JN8bXktgTmRtBCJ9yqdmWtEiYEmGonSWLvbLdSaJVcNnKQghmQqssnRXKLURDWG4bjDsry3Xc1P",
  "key25": "5LZUXSA8MYrJmgqQS8n8XTBS7wMwaTyDrQqHG93iiw5KrLdD7z4ZumLyFNYJ3eaUuSGrUzX2ZUf64JAcNsrm1WxG",
  "key26": "24n2FA5L9JARyiRJBcmUCYw5L1UFiPQmU11AwVCgM1qMgMXdfWkdkEHSoJBPpNBzyYDJWo4PkXj851MF5TrJhsRg",
  "key27": "2bWZxrfFSZLVjE7BpP2oTJx4xjbjiq4jFutQR5Wi7QWJRbmqsmvJ2Y74FEBHzhBnvsWvrbvv4tNHALMAFMHo5iG8",
  "key28": "4XPwQhf2P9eN8yRPefWPoU5uXacmn9GnaBYtGfPc42pkFsGkYeHkbSDHTrM1PTntPaKZt4vcAxNiqxKdgj11mpaJ",
  "key29": "4oPzYK289hm35PSmHonCpiMjqQ5YnGbjciQ9z1gB88zaexcBvxTdAbbowXMrVAS7XAJUb3CKZNXEiHien19up4Vw",
  "key30": "3WzLjATnS58J638nStpRK4JKewxH62Pn5ggsfxkfUhnFPPH7H3heY9kmDbnpYwd6fRwARvfgDnYfPwCrbxT8UChh"
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
