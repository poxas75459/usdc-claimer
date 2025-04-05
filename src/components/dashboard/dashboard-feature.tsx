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
    "3u3cxL7xTEfY3EAJrZBLbdqdQEUDUqqvJbdqEtk9f8Yo3hsgGkWfef35RXdkohf8fCfC9SzK3eDz5AseyJruKbGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbcnXCg77aUJUJdZkvpYqBwuTUqR2NLmgvd1uCxMj6dqGt1yfATNsGVbnP7Vy7kNzCVUoBwYT2L99hNaFbodoPq",
  "key1": "34WvhJUuXgQ2tCPcS4NQW7LqVfutyJb2nu2DPt8xRjrUvgH6PUfwa6RN7e4EhgEuw5HANQSFSvxo9wFWnNX9Vymm",
  "key2": "4DJPnY7USVtayMHNzbgXnAGpwT2g1pZNa5KP5G2oyMMEtuW2yiYHDCVpdpQPuX3oHYgSM61zcxG1fNUgyRE3ffMr",
  "key3": "4DFLzGDDoqmUAuVR2SYj45aZmubc6S38cBmQ2cz3PtL6QnbTz9NH3peSGkNk1QoswAo2ghrsu94XZtQLiAV9TksQ",
  "key4": "3QWKZwGmRgWAcpk5BqcDfvxWteHiERZFBRVHNdSfv41Z42kbEMnbbjBcHW8yZ8bwcMYnBWuuxaKFVniyLuB3Zkm3",
  "key5": "46ra9SNV2pf28spyZoD1iWQWg4JSMQSYjf4bbiWhSQxbYa6WapYXth3zR49H9XdvZtkvn5uksxR6xzqd8qfcqBrn",
  "key6": "m5RDjkNuEVxdGZExJTvPc73UfatMfroZ1mJty6WgcVkiqTtECyjnZ8K3eM5FJ7LNeaWq1cwqXeGDKECKfNLan2K",
  "key7": "4kVDQEDro7ot6WY21H9REnLfpPMz8bCroJ6KHaW4hrwqzpzwdNM3ywAfvuoaYnQ3xFFBd6Kmt4SEdRUtB6kYjYyV",
  "key8": "3ANJkKjjuhaj8yX2eprg7yncPpyUXUpkTUABoMhHNMRnc4MjR2xvMhmyXjW1pqoF8sDxToUQNyZUjy5RZEv6hnRb",
  "key9": "3yKws5fhtfPCFAjuM4TBDFVzGAsvYD7Fy3shWksZYySUWmwE3x8SkHKekeRTH4Ux66Z8AaxYFjHQLPA2a5VSv6uK",
  "key10": "5PDubPcZBTi54SvU1t3RSGrkA4D6tPDLGmA3BfjuqBZTkHA3ZTTpYVBnwJykrYE7jH5KFcJW56VsST5vuenjXnnX",
  "key11": "3ztTy1f8u8YsiucPkxTzVfTFih4R1DRwkQmivbAQwdAZ3m6wF8YFLnRTF37pHy4FVUHZL5pa25Pxpwe2Ly68vehL",
  "key12": "5HFHSDZcTKiotHsnvgqxrEmevusNVCJHnv6GwChYhdnACGshefckbrPsnTaPnpAfKigzYqfJ6tusF62hR7rPMdUk",
  "key13": "2WTJkEM3EjD9BJSFB7QqBB3mVjn7WSFCu3vajsQPADxBLsEyzkag5AFG41nthGmrQnb1i2kmazGBr1GhXFym3qmH",
  "key14": "su9z8fGBDWyi4TBzCq2HxZtKWvXYBkx64an2cXs7td52RNaiNEbZ9YqTrp8UKtWsG5cUbQUgB7Np7yHVjm5CABg",
  "key15": "5Zn4zFjcvrUBeybacKC237R3xXEv2A48rA2yftuXPfdDi3G259i8T9U2pCLq9hiXeBqBDb8cdhAWNpyZp6zTxKGj",
  "key16": "3tFKaZLFETmnvFS1PhKjBZyyj4Y7BHt8NDLCDU7eDWWwrXer5eRWecNM84nPgz6sXmzdgvFpG9YALLo9GavuZ4ax",
  "key17": "C5vhgMJ3buLNQQXXcGntJ8ckUixpfFndDja2SgsSPVCDWXBwdiL32dTmVCjnQm8fKAMvdxzJHgqVFh85ej2jygG",
  "key18": "4Ri6szorAJbs4889TvGa6kx4fmspir24XzXLncZcd6G8SNdq2PXPGkteBU8dNP3M6TfkerKSALPEGHniLzh5Ti4C",
  "key19": "L3dmWxwixYLmWZbcXmh2bDGeBLS5WkBuZU7hGE2R6usQQbDVQfsQhzPBLMHU7ZUxpUQx4tVRLfKoTQz1RcrNrq7",
  "key20": "nBKHCVx9hasqDK1mVwj3VAPkyX4fxpLaaWA7mFsgzJdwcPyv3z4VMm5iaL7ZqoeFaJqsrkh3c1Pc4KPREUQbJmz",
  "key21": "4J6TrP3PPh2iYdfmTuZQKrSjbvLWRRWQEyWBCjDWazasPtYY5DbTJuSr1eUzjhm9JNHbKcmWaMrEYJfCz26w6Qkc",
  "key22": "sLjE3xQMrtUoREh9uw4Acmu3VE3aQoxNaMH1K6bQfAE74pXjZbR9T2LTeJc5aE9KqLCEN8zK4wpDsBeKKtxFtUs",
  "key23": "23ne8xbTzKk2TKZpGc7d6mybZLFZs6jWScu4aVdhU92aJ5wFHykwfgHrMu3EzNfCSAFzwtgJm4tUdRyDWSNdjDKU",
  "key24": "4cbZTrRrnkhxTzQkDNT8dbo7vn238qMi82zw9mQdLeqxdLa7KWCU7pGMyHT6sJK1so12DS1oRJ51eCkqF1DA2Beo",
  "key25": "61BvP12b2r81YmGPQGC99J3cs7fMj869kadZCMM2S8ugZcDQoNcwSJXuCmSR6eFXse33AQarYCu4DyMGXSbNJjqJ",
  "key26": "22M7yVCBEo1emJZeAcNrPwAY2wrMPPjtmsk9L4GkU264XKPisyBGjnJME61J75eLQEVH5F1hrgW5zvHSshR3JdKZ"
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
