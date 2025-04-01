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
    "491pTaNps36zmDYfr54S5YtsJypMbpUyNaDpSCYVTrNbXBApf8CvfR9SLZWqVDNTdCDsZRKZDbPgosbeAyY9iRap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mu165gHdxntGhVFfuMbT8Y17W8Er8iMLqGSkNpE5eKFHDQ8xoKTp7Z9Qf36pyGRm38c87rDTFKMKKDFNvrXDWzw",
  "key1": "2WoXo2jXUx2hssQ7sZjTLb8MkkWP7jMEPWivUWuSqnWjDxzsM8qXsk3GDFCYWEgGjwJoLFESj3V5zNCQ9cEczJHE",
  "key2": "4va2cbZanB6LLvDRdmuvwWg9Q8t2VSu88rVqEkcGAqutN6bzKsCC1kzup3VfGAnM9LPUEoLtJuxZxkdsZ31KN6X6",
  "key3": "5v8xJhkySeEC6BLhnMYTGZeLDS9JudmWDdp17dquNeJ58P9zcCzp3aDcq8JkNZfyTJYFbbXB5ZtHf8TyLVbWWT1U",
  "key4": "4VDrnjeuWqRDVDHdmiZPfygJHMLCFZDUzdjyXbGA5xB526bFV45FUwfVuTLwsrpkZFvUaLq61dhF5wZJHsMAuSzC",
  "key5": "2CcnkcShcJBHWnadunE2ydNWEbueGWjVcgEVTToCSgmxT4zvu3KvQrnwmcv4mEszR1V81RXEuEJtvAU2Egh8WYLs",
  "key6": "5j3JKoAipRwvvviGnwPqoniEFNBxmjqJbQaQ5d3Y2KeJmVnEcFTJoofPmaw74Mxjy6Dzmz9KbLXQoNauSagtDtub",
  "key7": "Gwsi6QUis9LAWdSsJMYek2nsSj9MQqFvVBS4ZCbgPb1rpGnkHYSWRvTJWfnpPg6gbfiAmJD3WDsuAeLxLS8khpi",
  "key8": "VYdd7Cy6Ytvr2DkX8WtUyMKUMF8v576dtr5kuWcjVf56xAjNHyz5kyxRTjVXhwogcENRy72e1T9tmHHVVkD5pb5",
  "key9": "L7nM365EgpajZWzBtxRNNmCVkwBFFnZ9JQNzNd5Z1G4j6RtaLRvnABodYZxnKBeCNVkRPQ5yeEVrxSj8joSDJXt",
  "key10": "61aQCTngkmHaskGXDrGNwDMe3BAN3ATnoEyjjx1EdB6PJ4NtrgXmDST4WmLe6i2sNBBnvRQVGdBTzUeYKYkuPm5Z",
  "key11": "2k7JUQGPLbdmaMwtJf5YsieQiCsP2PQW5zmChg4zAHwAB7T3SsNmnm81R5bAzUY5qMFdSagkZFLr2gjBQGUdxoiB",
  "key12": "5XMMBAqhyvntLoAGquU8aN7quqgQQXBWErdurgNhTymwWRbojA9osYBjHr6C4vmguj1FXPcxZhMxqPwCbF7mrxTV",
  "key13": "4BcyKPzfwrXGV8aQeYC9EaRgrfzJteCZjYfCUne96sFYE9NbSBMY3ieKq5MLW8ZyZ8UhkwHJp7hjv2Z3d5sp2x5W",
  "key14": "4XGZmTR6V7Lcp3iwaUZqcYgKCPwJuGFH1pZPTkSJeRoiJGeKskKGg1KmC2iHMh9xfSVNxaYUJQMVQH6SnxAhkzcv",
  "key15": "bWKH3povEqdkKfTnoUX8krc9X2zYrjkQz2w42KoqmPckzeC8U9NEn63LABZGJeY3dWN7GpiZQhYja9QdXT9p526",
  "key16": "5nSbTCuU4F7Jti3hnXBA1nw23N3XE5cPgoPVggyoaLztQ3QcaRp9A6kL118STZrFpYtMV8NAk7vUYvKgNdmweX8d",
  "key17": "5vGcCUUKbm5DE2jLSZ6mbEXiyC9EXcS5Uv4vJnz354K9hR5CxfCsUU9wCePMU7aBUQ1xRkA6FEPDBafVt7oWGhbQ",
  "key18": "3XFs3GQAgSofiQBxjxzsv5h7vbATQuj73KADqjH7uac2TU39aFcWp5MSSFJrJxXdJmWkdePfVgpNnfZM2PxR2EoC",
  "key19": "9gACFoDuVbnoS1k7WDoJ5HS2wUU9Vqs8DgNpW4WSj3fzymSggyaUwLraheAzhWwLZ8bn74eEPJss23WAgvS58ns",
  "key20": "5TPqSXfWFGVVfdZ5mEbHrtkhL8Zytrad6Tn5uu8Uomp1y4TZVec39eK2dWAdsvpbwWra7Em9zfGtKhFxaZ41srsU",
  "key21": "H2Sts69DuEhNPJqkdB9NEXd1VyufmkKLN4QemtkBq4oxyeRDSiKgQ1PPqEiCU25dyNaRX4p7bX1r49un1Nut57R",
  "key22": "U35Tr6ccRW6DmKg46yaW4mNwufAgKqBLwan6BMkU8nFsYN7uSUvJGbN7bkGqppziqxRb9GbvMAgaf6Ci2U4CnQj",
  "key23": "65rxUvja13UynnZkLU3ZVfGpWCgegwots8MRSm72xgYg5G77jZxe9dNi1g7A7e91NQZudczCd7gFVb7PGAzhu37R",
  "key24": "4bGFBwgbZTrGQQSowapA5iP154CEwbviMH1fhPYUgxHZ6NoGCBee4NUSjCFuKrKeB3etgj4FzXYucjTDscKtCpMA",
  "key25": "48Feh3wuRUs7AMxQcSQJMJd7nRWMtEG3yx5AxfYRNfm8AHX531EtT6NuyQAzwXd9Ea28fM7JWjY4F9ywcUu4uWRa",
  "key26": "1nDKRPhr58ArStBax7Kxft55DV1He5MHpyAamrHL45AweBVo6XPSPEz3kTff5PHXofoevzjS2GXBWZGaxXyAmrR",
  "key27": "5919pYbvVAK4PVzxn9XNY57WeVNLe8CmikcTBANHAw9R2oxrS7n5zWJbTWUxpn9gKz4q13ECqmkYWpbEeeDAuFrD",
  "key28": "5jtJXGwcfjDv6X4YL2uyShNEfBJJjQ1ronH45nmH73izRvWuQQk2bEfkwvouBDTsYtKfbGwtQ3r19f9XJht4Gd3H"
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
