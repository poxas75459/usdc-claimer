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
    "2RM6xZbqAGGWsXwLAS4P5a4hPsosFLBfmuS6TQ9G4N4ufm6wUHBe1VZLEWzrn16k6UjjjEd3g4VNkgtiC9d8CFYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BotWVcCs2q52dQw5Gcvx2NW6pL8VWeS5W148kLjEDY3SRmmxWgNkQWL4H5qDSfEGwxjpQxFKRVsDFBhtBx8pSbb",
  "key1": "297D9Q43mJLf2X4zjQCeLyVoiMDWw4DVi1ozm4kigLgr22cWqqpD28qrvfbumwYTTXFWDgBYJfWfz6ERvfDrQGZ7",
  "key2": "GV2hioTzv8cLvfpyDGN57btqsXZG4LNi88VTWAU2x2vUieFVF8FdtgEG7NLUpGqAMQP31BdggZMvx9Fp1REccZY",
  "key3": "41pjxVwHQpEebzkrwLuMeURZLyxDT62S3c4TYdeBTzdF42T7otTZQYRGgHi48jb3cK1r2EcVQFHKfdE3YKZ1KXLE",
  "key4": "eJgGAgYw1uge1yzSaWuNas4aotjmqQ2jb1hxhyPuckCXHvi2aDuYA2zLd8ZsbSUTRcJyDYrx9fdZ1F54tR4WLY2",
  "key5": "3xyeHCd5Xt5Pa3TnsMRQpsg4d8tu8GdtSSY8jctpSmgdNcPBT8fT85Y3RUqNyrQdesqg9A5NuJM97BTfJ3eMRhGR",
  "key6": "5zfuBXV5eCjchQ8fwQXSX6pN2QtQnZZycdcPdB5XaCB1bn29r97iRb3LAt9aAALsKsESJaQrvWPZQfCGstAuYmPj",
  "key7": "fiBNronbXBTNm9Lp7sSWAU7rSDxiVBKnzimK8RMpLJAhteHGE39TGfbyFhM7nWr7VgoUun6qAe5ZUUyErg8ivhn",
  "key8": "3VCP9Qo4vVW481P9vqJ5rWkkBFXsGZndG7JBdsmHYeMXXhqgPWP26b3wrXmP9N6T9c7QN1oBmeNEs9prgNCH41X5",
  "key9": "3xqhYUBo63x1oKPcRHVhXTTes6Vdoqzd3RFZcDbiWKMvC9TamqaYDaaNHV6ys5f6MPqAhGM1fJr37QwFkCXjach5",
  "key10": "3MXAw6F33cKowgo8AuL7ejJQ9P1nkQum8BkqHBdmaQvK8yGAUjrjbb7eDXsciZR9xL4rEau9uUMivuz9S4msFsUa",
  "key11": "24tRScowWLmAnE4uVxzYb8EAJFdkCERfQF7YRGMTYWTphaEJEhcPX2LMB8bvfU9Z4EmkFX9tAeBHbdzDjYPXwpEi",
  "key12": "58vvSP3D3TL4J3yTtTWvYLoT6swmR3nQRtBhPFXMgsu3EvWHwXmn1rSQy9XSX5B4bRiYUzsqSth2qgREHX92QQBq",
  "key13": "ysszTFdQ3uoHTqM9Q3q7zAJYFRwdJsmPeBDK5RAPo9C2Vs1TS1Vi9oCTQrb6ATfvdwruniPK6eUjn1VR6M9iTKL",
  "key14": "2V9MCiuRv2d95K4Pe9S5PMLgWhHkQxJhQzma3F4CXDoAJi6WmLuv8MNZMc5ke5YZ5dYtyAC87pUMDzUurskSkyNB",
  "key15": "4fY7NScF7DFJMbfr262ECjVbd7BigkoKtmMrPf2xZnBS7rg2gRryNVqaGWd2jWbniYADc5NToPKkWxfujBjgCjJ3",
  "key16": "3FWAsgDLvNd1hXeYCCU11PqUvVEKj3WJXEUGEc6haoRVYpjfw4KsQ7RMDeD3sf5GmKJVYJW2NLE8bVhpPmEefhLK",
  "key17": "4xEqhQ1SNHo33CB5TzYiYFrgVcpeJGANqfwjk8NKajc6n6ZaJ2YS2yZUjDZc2V1WHQ3gGXnUiEUD6ZTKXKZXnYCZ",
  "key18": "5oNpaHBDbuLhhLBpT2xcFAmvvqtbyUzbAh1BSDQjR5Mn9Ks2R24TKDteRDn27rbZ5mmUJLmv8cWTNqTGv9yEeSZg",
  "key19": "5SNPQDC4sveTThxn94A9EUgt7Yic2EY9dLzWsaEEjT8euBdAyJjmitQGGX4Qmd9WstS2kSytzbrmD7CRS2AZK9Ja",
  "key20": "3kpsU5z8WH1NAv6Wrtn6AhuVUgeeFv2Ln9DqxzvGKDtD4pv3MFZujJ9td3BpgdgNvxLefDT1ZwbN3ezTSx23jWXb",
  "key21": "Rg2iWqnARFcBPF5dyUBsqiLKs7JpTHczv2knETpYt5gLKw3anauzEqCWMCTLwNoAqJxh8ircykKWoV4ZyA3sy6W",
  "key22": "3ziFHsuh4kXmj96KKfSQEMVnxeB2TB3K6yVAsUtXpSkXBWHuur1zGpBJAV4SNoihJbE3HhfyxRRcuJeKyv9DWUmW",
  "key23": "2saTBTrkztq1CX68FGBT5A1PCM5R416KBs8dgNXQ3hUKgnQw4PEmw9kJWBMHfFJFe7uPAYHex4TiEwmg6dTLNVUe",
  "key24": "4ApnEZ1D2W3XgKeEcTZYKGJhySn7kcJvp11TmBy9fxqAGwxBJKMuXFWzW3mZrm2LLobUmn8671Njv3irttLmrC4n"
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
