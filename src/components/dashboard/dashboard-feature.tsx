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
    "3Tn8WdBkQiYqc29ZqzX2trug5snMv3eFGXJQQQJruguKVGujWjqKZncsandATCZppk3qh95oVPG46RUD9JLKks51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1eLrcJ4UNcdC9jichmk4hwGyD3Vvg3hsavnsZeJrMDhkYNRXacgNMBmJjxQhFkf6CFZ6itKA5z31xEBPAS4UgY",
  "key1": "2svUFXxn7RUX6Z2CknCTwsHRRdYuRDdmkL5NfU3WQ16aGbfrpT65BoqGYJTwiUWqoRe5kgbW4FDtSoV2h1PduAqT",
  "key2": "LWmcuPDQYHn7gomPyAKCWqXpC8DAW5iLFuiJJ1Sx5EvZQyhrPfy5dJojYxJbZKsED5QjYyeeJJHhCiEtjsgdCse",
  "key3": "3V2fuubmkQzyRLDsC33na1wnejvNN7yMki6zyHhpq8yQJJXvhPqGrjm2pd6yiQHwdCxvrogZ7EpL5neUKzEtqGsP",
  "key4": "3rWEDtdaMN88c3p2xi8YRhWbCjWfGZXd6hqUCTSyHgEhXY6Ft1jhLX1epnF8Z4krUVfJ15hbNtR55jGSzUYCTcrK",
  "key5": "5kJfAHcE5gF5GD6xNCzmCP37piddEdj4JnmWAxkDMMyq27w42nhjSqah36mmxNgk1NeCxFanjTHNkX638G3dq8ba",
  "key6": "37fybYpaX81itVdLxexJqHQw4z2ULJpH5SbqrbxdYZurQNbhtCYeoKT15MCc3tNbyTNr1uJ1Ec2yQiPchrk9uX3p",
  "key7": "5kkZg341M2dVBN2HbNEBgAS9Nc2zroEu59hushMK7y31hHzcaZhb8mKtDhi8MYDA8zaMPzQPD8qrmJKQhyrhY5eh",
  "key8": "rJttNGmAeMkLVeWTxbUadAWFkNYWNkCW2Gq8Sb2HwR3FujqUBpfqRx9iMgvjEczasy7FFVY3Pv8zQ2zNj17R3yA",
  "key9": "2xsBd1NuFYdC6Zm5BPbAYg51NzsuFesQADMAG7HUCNCQsE588XfQ8YxKsoRDuVRkwnZaKCzAPpNeznneubbVDvxW",
  "key10": "4yVa6r3NnX5LMVALVvEnTmHuVJvKvQkuh3YRPhbbWL2RT2De5tfPWxoMccRJPiqhnicM1p1WC1ddiaSwZ7FSYafZ",
  "key11": "2BdSaJaWskEih6STN9hy8f1kWefAjADkNgAKc6nw9Nrb8p6Vx3kBXdLVfoN3aVwkDYSEGV6NZY6cTt1JH4xjh7ko",
  "key12": "5FkRQViBJzTSXQZt2KJPtEGVn15J48UkVBdy9X28jaEa98PrCp5MXyQYR9mSfgAS6e8GdE9WF4p6BmRZKBitWfUg",
  "key13": "LLbqbpkbsrbrPtXU4JVWQEZdbVxkSZoSNC6KVCrzsaA4G79dKDjnC6WAQjMErLqwcqAE6tXQzGpCG63ST5B1stb",
  "key14": "vcfNJnnxSvWNQ9hdQeRJbtyKCMQF7BYypJxjabhTMf5FpEMMG6xUVwjbtadZeBuYSpzG1j26eJYaLx1npft2fY4",
  "key15": "4jZAkS33fhPEZJcMeGv4n2N2Cs2DyaFMTwr6qevEAVzrGmBZTgwTjEyjp7Bkxi7d3yLJriJ3DWqVhZgS3LnkuUC7",
  "key16": "5Zk3agE948uHzyrrNwGXf8Qw2nGTTNcj45VMum2owujyJeyyCH9KeTwVQKQPTSSAgDs84hzDmBtXEAfHAC9GSAJt",
  "key17": "31LaZdBetKtbhjnXs9p7VvRTCB6LWVqRKtRfyqfLPkqyD8H2j1zuzqStmXMBCH4LGgpXPPdf3vJZQUzNnTtAdjHG",
  "key18": "5Z4YUMd1sd3oegDKXA6Z4h1UkUr8ZVUZGMDPaXVufKVUwoHxEXxm4nbNY9Js5XwDRn3BvrBdhiuETeJ83ZFTzc2B",
  "key19": "2raxKTQzuYSDLJ2z7w9rxWibi9vutM1cydgz2kTuFFKJeM7DKfmGegv28DULYii26Py7SBFgw6pJZ4rPD98RmbCN",
  "key20": "3wD51BfudbAfZxgFtB9TbD46J3Nr9HGFXdcRh62xRGHggTn3fv7u3sHajkL44wwfacseXQuPQHvwwiffjm54wfHY",
  "key21": "5G8JgAQwTdKF1LD3pCiTM1KozknH9UHqXdPZ3a8tBcwfp4u4LPh8uBAv94Ge1Bd1fw8Umuqk5ydEqZf9dnXMVno3",
  "key22": "4CrzjJcgWCjFb2UHpZyFuYuBejH38drzsBCVSK5CerRVF7DaMXskWZajTtB63vHVpsQp5L58R2p8yhLtE6kWpRzv",
  "key23": "4W9yVojXPqENjkVe3oQ6gRjCfeHX2NzaTCvmQFfVFkhQKbfh1bAosmx4N42vwrzCMB6BgDwqvg5kxALWmrCYfyQG",
  "key24": "3FARoRBEwsobkmCLwLWVDn3s8trVmgnHHaqDgbLHrJ8H9rkwyCR42QVCUQrMtSczd3wSAxQ4WuS7HHU15cGTgsYX",
  "key25": "5TN85dvvsFgiomviSRfSUhFMEihRvGBpWu554y8U6FizWXMKSeJEJD7nKQDAmsrxJm7NVz9EKdqeEyXFF7wZCQ7",
  "key26": "Ac6kLU1jR5YP4UNT8pSZmoNGreK5i7p7tPrKCxPCGKFH4DxX4terLCoq1qAkVNViW2jjSBCSJPrAPC2yLxN3Vf1",
  "key27": "4z2bVWBmTPBdmA7vEEXZeMKkEWBiru2hdpPJSB7bDyfh4qWyxne79m2cRT4Ywhd7Mh613CoiJBUiGPKXgjaqfytd",
  "key28": "5HWvMYMWweSWJ4JGU93Ko82yQnpofHKN97uBZpgP6v3nPEhLxgvZTUK5RWRtqDgxBnT45w2huMhFGpC11Rfrr2xo",
  "key29": "66fizFaFMCouVf9QsZ26QUJQAB5kcsLqabDUAe3dxgmb8jsoA6HPjTCJV6uU7XXfHGJKsFFtWs7YtQdgsfKLyLpr"
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
