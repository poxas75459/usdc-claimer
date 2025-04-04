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
    "hNaQU6R9mdxfNUrUY1FuSHrAu28bixbQCevUKVXA7TxMrQebvazvVCnoQj85DkaNLP8ukqtTXzonzpM7cNKXsnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxykT8x4TPuRuWVp25FFcNzcgQuv4jY5VNeMeHPHurktS7Azmvg3y7Z5mZsN5Ej9CRi7NymijtTuDZno45PtL7e",
  "key1": "5rrAKSV3QtykxwUFb3EcvdRoUdkGwnFoCTX5sBir8metKNnJEoQBmsZMnAZjEF5He7hTzV5doNMrQhrog6KVdgsC",
  "key2": "5E8bEic8ETUCpE1ReHvJ5f5n8EPNKeuyRy6XbDZCgX6LeuvR4G1LANn7YiGEi3yDccL5vzyNbU62Zw1J2RUyQFks",
  "key3": "qs8SZb91KXs1QmZsfUuH8TBunmfLAyMHhjW4MDxiW5jbgQNdtnfTtXe5SQhfTMHhUaet7TvmAgjTW2wsYDmajWV",
  "key4": "2T56EHNNJbS3J8x7GtJFNfAWkPcoRjD5ysZUZZdhkSr3u1KwrTn5BS3u8biJ1p7gnFEAmWKqM8cxvtvfnANrPtWF",
  "key5": "4pniDLzEqEAW7iUGPvhvLkbjHsQb6m8Qen1Fy4FXyriwfwBBKCbJPUGJQFTZpPxhyGCmQKKvZAnSYFq92w6VMc2N",
  "key6": "2Kfh17j4qiMzKKS1XPDL4xdAHDUaziKHoupN4dMvqAg5hbJqt8iwMUZBaHyvR9zvw3HHafKUdVQomAuo3nLtSEKt",
  "key7": "2g5ifLwTzjJaXJFqCqzfmRDAi5Y8cygZ3HNU4wLrmfFZ1fK9ioaFYwB9S3BvizxHuWeoHXNTakCVv2KNNoEgLbTy",
  "key8": "M7kdGFHLx8ros4xC8AEwDpjGBGwK9X3XWdZ3GCgVn5LXVYogZdcketAc5ydEkvmqNEdRXKeBfyH1nxVZCppZUXC",
  "key9": "4DVKe1BQVCPy6vgrR7S1KNWsLqVay3hrcU88p7ckZ8oG94AH7EHnGYaWepnUuTqDdwaU5QUUtof8xTqQUzzTMeEM",
  "key10": "2JtTXruoTrBypBhEToq34taZZi8wSpqaTb4rLjnFS2uafSFfB2gc1iDTF81ETro9Ee7v8njzmYjsod6tPMRS39pL",
  "key11": "YudYjvLjVs4syuboKkxc1MAwBGU8H3hwaRwGHgeFRaLBox6vEJjBEgwFHPdCayXx2sWRovsoPYKSfcYz2Ds7ohV",
  "key12": "5Ro8Tk2LQUXtm69hGA98rBe44GMyAkoxdjLX7EU95sHH1LtFeTFPUvN5SMxkbfDdHFi25tYdoDhA2WHhvcx139LE",
  "key13": "2R4kwQwk4mD4619LgcUuZWeRrbC2BPUk8uSgURNKmiqvdaYYzraRU9cf4PDHSfGcv8zgddohHhPfPbEDPZJFVGDk",
  "key14": "2Pn2u8sX1Ko6dLrsDnsNvZ25e3QRRJ6ktBvszb7spMzDeWQkC75hA5LYxRTv4cWogV6U6rC4j2GWf1kNA9UKVKaV",
  "key15": "PcnqaFp4Vyk5XLu5T7YqKohjtXjLu8JFUi5KFdcGG9dQeuiQ6nQaqjMTaCa8su1TAGMDuqwmc4Qg1bAFUDU1tSf",
  "key16": "5qKScEd6cU71ydUFitaAQK3PNhLRHKvFNZepUQt2h15LHU8prfgKH7JY5FJkYZ1Wu7rJujpekT3d1NCH1bEcdKxf",
  "key17": "3oAsMami9HtYeH3duxy6cZPiqj2KV2t6F1aLCABVVnfujDdezRxFAV4QcUijWZDxNVEqFicpXUgNQ8rrUDWtxCjJ",
  "key18": "3gkJiaGeFF7LhEfbtfDpzh5tHvnPvJESRpAPEtHVMdzcPesJpLKrL7uRBkzvBpwVyEPUPrmVm9kUwr4cp3Wnnzvx",
  "key19": "2hSEuS7BMSzbgb3eMV5Po9trXxGeQysju8spwfjiw7m6AvW2oSqiW6n7kE57vPAqHUoVec72oJXeXbu6etCjkmd1",
  "key20": "2gjVbZhBzrM8HELLFEHFr2mpBJKeo8gsPCQyVugdFmkr5e8fFa3mXGJTo9FQUHwSoWiXLzbx4pEcsw4nvaEE49Ri",
  "key21": "5pbZRQLLZ2mXKPpsYAcza7p17uUukuDGGtkeYqpcqXqRjk2Q18AexuyFnwSgr7SGeaip2Kx3GDdjAkxqeGteUUow",
  "key22": "3WKpJ7wSHPn86GPdbWk7rWzx9rWpNXjiuqfUmcdBULfJtmD4yHLuRTBSHaXypRmNbpogfZJHymNyZ9aaBN9jxTYa",
  "key23": "pX7ajghdbrEJr7HngZtrqyveBHLzFTyNGJj3GLuyLxMCA6Thd9BnkZ2nNf23MmT9bUTJfpD2cwpHJXiAoGK56Cc",
  "key24": "3HxiZTXieS2tWHZPmmTDSG5Fwjjb84BqXHbDATSdHHxWSia397TEbJRXPKKhu2HYqSFfgfJwowrtLap5chs4fabS"
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
