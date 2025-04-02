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
    "4asp44xCK325FfzsqdrssJss4rdwKVFLTx85aA7jnQuKXnQhjUMjuxeA5sgoyxseHKvuPys3cootgbsUB4bNMcmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yE7fXsvRQLBeTxEgcnbfzvnxRpsX9FaxSmmFWFtcbxxHuaXAiC5MUGVthx1CxMknyNsbRNnbrZgHQs1i5eDN2fb",
  "key1": "3ub9gtWxJNAyURreHPzFTRff2PGNFFv6YfFx8dYKAKKkNtwSmrQz7ByKUFahxPQy5MH1DwDu1VLwbBfAKF75YfHA",
  "key2": "3diXb5oxwrXmwxCt1yYb2sorK7ZHNPAHTq9GPPF8TcfKqsfR1RmWEGwuqEpZ6jSKTRHtGH6zggh7dM5SzWAEgfuu",
  "key3": "4XEpDqr56wr91CqZubG3K8uDi6Q5YL6rXsyz6Ueizp5eYfHYUPDjsDM7kHbKrGhVFoz5Wmmmztu1gyaZhHWEVN1a",
  "key4": "2GdEYgrivYzaZNV1AXzsA91DUan352aRLoBdXEGZ5uRbjDqHuTc43VhuWo6dAFYQWztDGBDREQbriatETSenNyFU",
  "key5": "4JisZeXPd3Us3TA2LNQvAN3hGmCPZYKGUv2psAPsyRVr5NgjX4q5xWVpaNJBGy9igwurggbEQAWcAkBrUrALoaVk",
  "key6": "5QmsBS2zrxzfkCSLV6Ud9BMaygEpYZRkqTUA59xLkf6bqRpHT1SviBXRJhnQHC7yNKc3LyTSB2sNGpKsRVamxXcE",
  "key7": "3s34hj8Q585kVcPG81MN6cwh4Xxriw13d5vH7BAGJmaQ6h4uySWcaH82mEn6XUzi1nZ8otbZ2woRoaThBChD1wUc",
  "key8": "4etTYyy8XEb5BTnPxrfh6m44xqq96xRXcaXfC8fgrCpeM3HmWEn8iTJA7CXFBW12qg2VniYz9Z21qf2SeNLTyZXJ",
  "key9": "2v2WzoySDbY6MvjcXtPdN8QvvKtsvHDdNhTihEw1GCCZ9YQAgja4FhMhQsrwkdqUuSkJPDrVA4AQrBj38jcdPrHb",
  "key10": "4rtQZ8dykXiG4DPjGFvyXKK4NCwwkt7ijztgRmoQdRUCRLJDwwtb3ErJMkz9tGX9BKcojB1MZMW1b6ub9MeocbVq",
  "key11": "2Yyg49RSzGDLUdUXazJYgr22Pm23FeS8me1EZ6urC2rAG1E9Ywa5L6XpBeki7QXfaxUErg5zx2wwijqvZ8qwuwk9",
  "key12": "2LJjhmHTPrxMu1dPWF65keWsaVbFvgcGzWY7hzenzFUSbhmPL5eXsTRyNwRkkoMUKcy3Rzvo4ndno8QUSwMdZ9Yj",
  "key13": "2CQgFA2BjEtehwZtRmwG5JveF4pacKKfo1Aja8dagnD76oJH1mhEbcytA8tzz1Fp13xEjUyvo3F75oY7RS2CmrXT",
  "key14": "2xNdXBNyy7DMb1uMCe3HCxX5ir8icrm3xeucwiqgWN4Qio3GiabVPYN6gvKzNWSvHDBTLanrYjshTVwdJRHZi9Dk",
  "key15": "4RgFeZ8ncrELY6z2MRHyCaQKtMjWWfbjZjp7cVaVrGMUXWu92R9m6kGgG8SvFVctFPxWYKkCJztUbYkzTQb6yBkA",
  "key16": "fPNNS7b7vuzYSxfE6DsH6kVw8XxTsAiYTAxFgrFPS1je1C9gB1yZGkSJVa1PmTwVHVpasiXkHjnqPFaYCbzcUbS",
  "key17": "LBiTaVAsHhoYMKSp1gPWqu73SKs8dZZz87qsWkP6eiBmv2sK3VrxMn9yhf4zMvFJywns4rkEZ4ytNQsNubVNfEg",
  "key18": "5rip8goTqRTy66JTbvRndbqNqCrzY9GU7mhd6L9Bb9zb6EVcmKYCgc4RdKFg8ASrjXmfoF1SNSm7cNk7RfVjaWyG",
  "key19": "5dUT1d8o1RKcMUGqfuhK5SWEM9ceZSX96SPoV42FhL2Ps5sACgmfVF2LCj7Vbe9NF4Gr5QCZTp55tb8yWnUU7iPE",
  "key20": "2FuwWqFpQyss9Gow4enZQR6FtKHh7PjxYLaJFj2yhWZZXk5b9wP8d7UMJaxEfuKBDZ1Vj7eWgvZat2dQsGcCB2K3",
  "key21": "51HQzqkAvnCNXGER3mERrCvpPigZ2eK6RUys1JasmuEjhdJyXFQPsDSBctmfSmLzFR9vHwu2gGZpMsCKRymCfz1u",
  "key22": "5MqrhnKxfaNLEuMhoqibC1NXCEe1yfboRjtdkKjnboRmfnAYccENqZ311AXTZwxxf7Gc2G7rfQdia6NGSkjGknD6",
  "key23": "3j79QLds8rMXAhmsMp9rCgcFvcTYRA2xF8Q7Nsy2PwHNf4LqZXL4bTyF5euqXGhzUhEnMM2CB11Ppwp7T8hHv3UL",
  "key24": "3poEowFU7bEMxScfUWwnfjfBnP3VjnwWWqjhmHPEF4UMCnTAv161ZPmN5RhEjk9Q3nVmMzRFnoY9AKDrPFeHBD39",
  "key25": "3w6fUstj1zqfg1EUAau5uG9qJ72Rf5FZC3AWsjNzaX7cx5W5ZhtbLdZMAyGvtBd7bP1frv62UQrq463LuDdkPPAh",
  "key26": "3Ko2XysgzxytYDJgycm56Nk2EoFqV1MP5o1Emowq62MzdetrZZvUANhztb7uDwGB9MqB8MHzHL3w7FcTocPTEKSv",
  "key27": "5nTNEUR7iD7tZc7WCPcqrDVZvdC2ksXetAojxiSepYKDNyqKhc28atmTcpNEDi4rfYUeeugZLGFEZKCBmLGLNFCo"
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
