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
    "3v8HnaEDo1eSSVg5y2HMyX8UvdZt8dcKN1M244Rr26KcQx8nG3U8d2ohNEuswjXAF7xaLLgzeSMJNTRmufSucox5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKs6iiTWAwXLqVZWMMxMxYSqLgBQrifXbu3bW3VLEPAPNDxFa2JJcUohCpX7jfmZo2JNK2jQ49ZPDvwXBsknLc",
  "key1": "5qrxoeoiBaDNHi8LaGBwXot6onZAnpVBZd7bwpn2WNtnxH4Przw7tT9T8LfnS3thAFJvtzeEtEam8xbwGwLYKzJo",
  "key2": "UzjxLpXuo1DzxN9BtHxeof54CwRKQ4yLCJWaFhKpLM2FmfCt3RSPx9AXVJJL5FDSRydffoFFyyj8xXUZoL46z5S",
  "key3": "2XgWD3vSeTxADJhMMBGoQEd1bEkZfSQyiRPm8hgfhwsaQgQQ5DRKXxtQm55qJ91tJaRfFfwLm5JdiEzXcyYrt814",
  "key4": "34tgUG1u5CnuoL8pTSXvSW58PWY6cwmHzQHG9mRhbPhy1ScUhxrUo2xhXrGGvrmXrzyWXVucMyXJrW9acPdE9tC",
  "key5": "4SS2KR8peWRV5s2H7Sp61ZkfjUuRSjFmD1nRNyMmGjpC7sgdEbfyRJUgcGFDDmcFBKFwbif4d31Ni4i3AvppJ97k",
  "key6": "33RMkEz8rTnWvMtgzGceiqat77wj2b6gGkrTCTXW892m6gCQ73DnMk3h2rHJkVjgLyprYYkAEYthy2G7dTHVMWQa",
  "key7": "4h1Zs8CMk493gWfsHs5c5PsSmfSJQ9Xkj5HhHHfnnPfaLrXZV2hB32X5UCsZf7sevXWfgvMGAXPL4rev9yjSECw4",
  "key8": "2r7FBp2gBxdpTf8auyVg88RPFxYypYDKjgLVJmNsyvNiaoLWXXWHbr3YAue3QBLJaDejmSxi58TThpuFkDYdQKBJ",
  "key9": "2DXYe3cQSBhGhx1GfgnmnBMRK5PN2Wq7oM18WbubJpWUbPE34EgDLGS95V59ePxoBWmfqfdG4QVPha1K4PuzqTzf",
  "key10": "4oi4jxJf3ySRu2jjgm1Smj1CV74Nk8MYZ3Y7amVcDkvPZEu18r94zic4QrMQhG7QVA6zKQGHJg19vAVWo3VXcnvy",
  "key11": "2mBwDZUMG2AgovYuAGLFzs9FyrkdkDokVkoJC3oAQEoQimZAWLhoxHzb6nGvNibEwrSDd7K7Tk1M4UhoGm7sGWRN",
  "key12": "3ap7BqwYAoFt37h7qd7tb6Kap7fxNbRBbiy13zkmZNPrxD2szqmpW1jBXY5fo5KGLND9UrCa1vNepfp2K7tHJa4J",
  "key13": "32kMSELvCSiFXqyhcaFNDh4PdBGXEEXQjfSnjAAHcvcJSgdMNhneVxGpBMeGFM14M3yDGagQLM5EB3FzAbrh8c7j",
  "key14": "3gTdRi8mNdwvaeAkSad4ahNYXtd2xMY8hdRaUP38JKmHcDaniNapoztHDCV7XaXtH2SoiZBBgikxinxmhNbwBeqD",
  "key15": "3s1uHridvuUpkQkbgf6cULwZyusH6WpeTJ7KQ3LxWMeycEDCDVdWRwqxzBWtCtmmZmEYcwsJAv7Nqa7VERMYzWoM",
  "key16": "5k5PfjuBvtw8SSVqrAFptKsgmXrEq95AriTvnNEWeoDEsUAz1temgHU8KLQk8udekwb2NEPSC65Y2d5oqbYM38LB",
  "key17": "mR3a3zMsjY33rzp4wLAqFZeuFobSndeMnf6TVhGXkMNztvuVjA26zswmQhUe52tP1AAuLCBMNUEXv22TYShayc7",
  "key18": "3FHiedvmxxsccXUUZiKuw9o8HNfysyhEwMb3ypacmPm2cqgd9yVoEemutzc8P4RvbheKETAmGJUCAFqmAim1NhKG",
  "key19": "2uGs9UcPiXcA1W7n3MsDKCpATu8zMz1dUobBatvZnUAAJfpDopsPuMo3RTxEyaSsanMAosWYgQJTMQ8D6fUXHhDe",
  "key20": "5auuwjUQVM898Didja3U5WvjrqXWBPDFJfpGaJqHkSLAD9fGy4Q2s3hL1QuhKmrRPoNfCBaWuYQjLUkAfwRV9kWa",
  "key21": "3mpSA1KqHtiDbgVyBjV8X6XRqDYGuCpRQJJncVVV9MAR2xVL7GCY66gwFhFyARCZsLc5MePdFd76k5ep2vzKPXqV",
  "key22": "2pegayD7UmraLJKK9xbriPWkipcgKwQ7Lxi2gi5R9ReELopLApivHeHkXk1A9ReSh3cNnhrqBDDtbthKL6imavus",
  "key23": "5TCgWixsJTFo5EXzHaScVSxFPLQvvJLWSRAP5PzuHCw6ts8pudeft6Eq2P4Mwh2dMRrwhkjicAuNeZ5aoQBBoiWy",
  "key24": "4YkDATX7VGeFE5W6q4Vt8qxV875ryyJprNCjsk9TgfVb1Gxa4chA2Jrc9K7kF6EhETZA3hw4QVaoiArX4mZmqnaZ",
  "key25": "ZKVCSs7MRx2KfoE2zP1MMJaKaT4dLNZ3LueBVAMwiyzGTm7GET3S41EXay9j4wmh3xkFfCr9UCtELi2AYWUwqLh",
  "key26": "4wSAtyQzkFCANn3uBijQ6YdyKGW6jqb9FMueVfXwqiZfHtN3XMTDKG3qzbsBUL7gp5E2muh5hXm6ExFtshZPD5m5",
  "key27": "d4nBMY1YNb45wTJtq2kTeTZcYJovFrGcVpbfFXrhx6G4p4QeWovXVvKmoi9GwiJwbzmkZHyG2vAyNsx3ZZHC1at",
  "key28": "5vwznU6jBfTzH388paEsjcspGsfsuSoaxkVn55oT7TUPz2jPhPWf99Le6aXiXpyhKYLQynaYTPKCwiT8JSDfaHK9"
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
