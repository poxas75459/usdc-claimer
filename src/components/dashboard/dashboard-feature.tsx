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
    "gTfZwguR4X67YWA3XJUgC9upiAFui1abzf9akPAADFWqMDf9nAjFeDsuS6SgQpHMU7KgDhsDCkpBwfSQb7mDZY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pu83ivxmM56JT7VE8nbeUVv3KwE1vrAktWaVDDqpBc4mAonPxdPPgzpFUdbZM6dYYSrApvnwrBNkS56cVQFwBpn",
  "key1": "GCmLrn37xkAbfyYmXdWb5h3iLc1P1FjnFdZH5V1dr2dqGc7ynVLWb6E44JjQBGr32SbWWPWstXRU8Kc75xnq74T",
  "key2": "2AYda8ZciUKHcxA9HgPnYDt95tvNAUb84Qo4KTegLXd1EYkUVGmBHuVvTFm4Jpx19Z3FPHoEzAoNm14PekY7EcE5",
  "key3": "5bRFovBjyYF4bVM9WXxDMsDsvGb6a4cz69Hsm1VvyCxYz3amDvyoNjT6XpbM7YtduBVEygsjk2SKLNm7q933sidS",
  "key4": "jEKcr4su3bGkE7nCUNh9rHbcV8x9dytWtsjVFP5x27YjVjUX9LieLhzppTDSVRWnSHdzx4JJcuArCutfiDTGXvb",
  "key5": "2f4ByJrNkCohjfeBsW1QMGvc3Ysgt27wEW8potK6yBUTDkySLL9Vn5zyBpvWstfuhwBLLvdKA8FT1J5WEGcHVhNP",
  "key6": "4HRNqqzL8Xi9pJJp4Lw6MQ4Rwa39KdzMe3HLTwbHvyFaHq53syigJuzP7N9fXyWrgnpANWLGJxSm6uXxW5t1Rk9N",
  "key7": "38NEWbPhwgmcL8N8eTSUepJxPcMHXXuSgnHM4GhNg2kHA22MeJdZYt572vnNSMBUuqD6nTbnn5dSfgYvCrjSZixV",
  "key8": "5fv4E4ZQMupTXD36VLF4NyQ7tWj5vGuBJtX96AmBma8QB26pBGWyMB7ngLdrGD4iUueAaQxL9RjCs8spjscCwLLr",
  "key9": "2SZ6QcFpuDB3HHtwKdcCrNUmEWyDmGTMjyxZ72u8PuL4ghFNj6w3iRn9V6yGSyn5xSc1vr6UjDpby5hMRHMAaXr2",
  "key10": "5WjjThSwE1DEc41YYPSgcAs6LuY2vS189HSpPmpTemYctMrJe94kVQCE9LHfsKvE8CbjF6GVAAQV8tc5MFbELESL",
  "key11": "2yLaUXj5nNZx1rj4QhzVG69hzDqsSAQtrGmCCygwc4unQvuR6Axag2Q3j7akSiJTSYc14T5mRDRhmirN3iNaA8rt",
  "key12": "4By6oZ2SfXCgwJzvxPTRZ3GXkec5zcJKw5P4AUbxmkpUKz2U6ESVExTSRtgSwYv62UXGuKbKk1CDoHxQhmCXycCH",
  "key13": "ALViaFjaR3fnMHtmpcU2Rr8XvJfNJxKYE9EyW29S7LHhrxt1htz3L38SoebZhNQbEwWPibU52ppenXKN7WqCmUk",
  "key14": "4FSjsHFpHKa6h7gWJZjpQr6vfFSnMfctR1VwAuyL5LvZZiAGjBsaQx6VJ94T6cwW4nF8WRKrw2MqS12fuKf7VN1u",
  "key15": "5uNszinEVaxUBSHYBNGmfmMazcU6YovxHX1GjHfJ6PNhE1CE13NJ12tLzMnTcB9A2w43rDyDTSUDQXzUpXpoYvEj",
  "key16": "5iTbc6gfERRhS6BuapfcKfYJnSN8ygYP8mjZoPqFxnY28nu5TgZrmaxtKt3Kbm2eHhPFn6DWaM5AXLnM4pNheBDR",
  "key17": "4J56cArod4Za2UNyuxaPfuZyuzBUdVuHAVcXP9iXgCGoAm5TAX9vrq32gb93m1AMaSN4YmmheqM93jg6Y1fP65cD",
  "key18": "3S2svXf9Bf4kYNRon3MoFJUAm141uUGmrXtAkhq2vspWXhBkrTyg6gmatJWxF7KFwe2MPHTtbRo77pqTSnVKGFmY",
  "key19": "FLeUGBSmTSEYqoUKR8rNX4YFwAs9ssauhSJa56WrtcqyDm5odZhrbW8bU5r5iVKAanFUWR7SFQGp3SPD7uVsWpV",
  "key20": "cLmGYJwW8TEZqxEF6Qyv3N8NveZrDMXGf8wjfpcHLELk4DrCAQhQ6u7roJj6UNPAsUbxeu8XNbWQx4WZXgw6kf4",
  "key21": "4pCcPdEgwRRkwjyTn72woHWnU7kcshuxcVvaX8T594UynsH1wvLFkVxW2rkZihZSDMdWPSn95bmw4wTERYknK3XB",
  "key22": "3AV4fpw8c61J3RbnAwqqzwnq8PfUu3z9EZt4zdc57XEW6RemZZG6cvv1RVBZGxZ2fzy8T8hRhFjpZLMv7cMGqKsq",
  "key23": "4zTCSKBbmeQC96ARnQ6NQ7y9FFWVKuBw33yz9uNrfHQv2Xj1hYxr64vL6TmQjso4xsz5sdVRd3YndQP3cX9Ww7xb",
  "key24": "2EyTttktJk6apfckUiHyEnvR3AyhxUGBG5dbfKnmr2uLyyitgsBBcBsBhMd63gGQ3Ag8MpkaHwfhSQRPwJ9hK7gP",
  "key25": "2e4M7Zh4y73ynLBbCbXDR5rrAeCogSJE4UA4Vt4REZTFeedyW5ERiFjmZ9oZXFYvbfJeSA78LsS2G7FYD1GKRUZC",
  "key26": "2P3CU54svSTKTgXv4K33qNmsACwMQH5D2b1KABzrqPXcjPLmJGe7q4rDeNXYmBSpx7CMgnEWBYzUBMFJzMpZeMT3"
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
