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
    "2ofSUCycsv4GggeNFHdsaoRihX2CKtV1rp6LUqBfHKUcUo2RNQ3DG2fToConTESHoVFR3jMFtGnHuWZtyBpJ2F2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxV2s4jZCadUGdSZNYtjAhvUtWhP4xbQ6mENXZLpyCPGqXstUWBxPPpb1R7JCmdo7MHw9B6VCC7zR5ijim5q1F4",
  "key1": "u2gB3NdivbNJVq8ueYpy3CkV4eWGcuMAZohnPxakpbi4wDELaignjanfmX3XBYrEj18ZRFLth2efBLD3ndpQa25",
  "key2": "39bvXcKHbUk8AWJfWdtRpGkWPP5m1kH3NJSyLxXkDkeWXndjDL6xA87P2UnLct1ESjJB6GXo7kTHTuB37LAKVz5G",
  "key3": "3MiHQxfL3JxE9W6jvFLB42YpSZpLMnDakQngxAYRHwJS6Yb7wycAp1xMBLJSQzX7P89DGpjNhFq99PdicxpdQY8r",
  "key4": "2BBCzurpYNcAobNmAwhJVJA1vxmrNHaVpkAKv4iPuNJA9Z1ahW1huKWowwWt2f6H81ohjqSGVVLYSfo7qc7txGuE",
  "key5": "4y9jDBPtDhZ5SML4qgvH9bvYwVGS8K8dmUqYq5gBjPFnGoKPHC3SuPEooyKaCxX2bPnH2Nf3pxkyzpH14HvTyEpw",
  "key6": "5VmhNW5a5Fwoq5w9aDAVpNyPW4B1QfW2uy5qkMijpT4ZjT2qB5Cp6hAEaJJgLASEzmLAjtxjNqX4vXGTyK3ixWQf",
  "key7": "4LHZoRg66Yu3GafKTLBKzJ4tqTR8RVg9hbKfHinfF6WkUKG7w5vigLo21uRpxhg9eZuearbZfCEUge8Tkf3QhbUD",
  "key8": "2LkVyYv9vxAyoTkNh8GdYPXZQNWD4wjAtpBSxcQQnVYNv4pESwRHYSNixMdN6EN3PuPAJrUjWd2F4XekmRshap27",
  "key9": "2HKyzFwqW1n8G4g3kMxo5v1yXrWyPBhEf9dwAQcQaCuBpsS5MRQYBG1z9ztSpS5C5KJNhTwiLfVbJfX1vE5LTsWx",
  "key10": "5kE4sbW15eHFw2PvRtVZt6NEqgCihRSiPuvNkCoNAUhAR7tqfmvCszXFD1R1wRMLLkJuQYYgXB8tXkgwnEQLbYoi",
  "key11": "4oGadFsaEUzZDgZBKtQ2Qc18FfTjxozXvBrrofm9rYtuhyaF8mDUCrKMSZ16nSPQGPsKUXKurzkvfY3YkTMpuUZC",
  "key12": "2sMjmQWwLqRwkRGnbR7Zc8kWVeearrKKL9KVkC5MxiFUL5qz3EPD5HCSyX9fHtRz7fKeangbEy6KA5CG1ZYr3kNp",
  "key13": "57hsPieHmGupDsEoFURvrq57zqwSeHWGXHcXgEaVezWmSCHGqPhX3vgNbLUim6TtET2CKz3UU8bJC92CxCHrxFZN",
  "key14": "58mEnt8soeDtsChDJTXm42SePnh8FPh42M6Sb6UUnyGm1Xqkop8Ps4THtTG6VEek837rBwCU1Ru7aj1zmc8NJVee",
  "key15": "31jVH2SH1c2GHBYZFKBeC6M6rYM5woTiQLi7PfS4v66pGSfTGcz1d8EXng1AskhwCbVJ8BaNmU9DCd6L6GZzVn77",
  "key16": "5BsUaL1pJffB8r97TRwyiGiSJ62URrFLKnSP2VFLZ1nr7PYnBZkteMwJf2M1dY6g16Q4JG5wjHHBvpqnWdApds2q",
  "key17": "2g2LyBndEaMwzYe3uSZ3nYTYCKHV6gFuc3QTsP6GTBhBysCnbuYwBK1bNQ4d4zYBiC5QhQhx1W1zZsynyaRFo1hN",
  "key18": "4kePCSd9SPhvGAthVpURcXQ6UxUD7Mck4BAV2KSehcsban5LsgXC9dtUvuHVo9auEbcX5sraphvF9opmVx1gFQDD",
  "key19": "4XU2kXeZwssZScz3fvh2WpRkTTTZ3vYKp8sVs4ZE4C8FmzZQw67hdrantP8YFiCyau8KmvzSp6v57yGNvRapUecJ",
  "key20": "xufPaJamfuBsAdAHTVtnkRwEY15gczFcv6Km64DX4tGxRKHRcc86nVFmTUqCowApyg9hZEz5DCVp2WxV6FnkrCh",
  "key21": "56uwZz8LTYY2HoJZbBB2iyTX5V16aftBoaFVvg6SCg813RqgSGXECQYL1TVFiizGbYXhYgasJbZraqkHo3msLemw",
  "key22": "42wPCatvktZ3Rf5oUBHoLwFq8YcSd2QNoP8e3EGDrRYr8vWfDYRpRy1zrTwZXpVHpmqZTjsQKz5Kina6j6DS8voo",
  "key23": "561THekt7JcFh7HUwLyQwXcjYGLB9NdNbRvTP4rQihW1TNUs7EbvyeHnbmZ6kb2rCjWWpmGregNm3FvbSEEx7sDp",
  "key24": "5NDutB6B1WHztRgKn5tvz3AL2uheiixBFLFRL6gmofTHUQPx6wJmA6MbdaVaDxtYtrVDcWUGyWLFxGutaUgVwnYk",
  "key25": "2TnQegu13Ge2fAf9oBoFyvq6eFQkHpbAHrTD3ZxEbEnxR4erikGoivCqq5fQpAKVkwRyaan13QbKoX8dWMew3dah",
  "key26": "2xKSRne4RLUPrym68jTUpoqiQgxVnYnjvwppWGVRUVqUP7M6XkPUmfjsvCbNzBcKaW8p9cSRmtgMuEz5M1ZtziQk",
  "key27": "36Ee2XH145nBL1mQcgNw6KnhoWVVyQttFmCBn1SEUDqHYGm3A79KfNBfAqmBgSgs3Eo8yGVfCsSwWfsEmaJtKuAp",
  "key28": "2M3QRvSSDPSNSWQDJau6qYEUPAbfY1WVZa6ZXNf25urPP7433Jvx1hwTx9SpAVm14iVUTfiQu2TBoHtJxmT6pV11"
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
