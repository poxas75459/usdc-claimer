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
    "3Fm1GEXfTB8KMLg1YaqRVKmrg1KVDKUnyA7vCKaq8UPJb4bT7S4JKHYMqJPZjTvBDBpnmZMpfsymUWB4ZzD8eiDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A27cgEfhruLnHAqmJpa6LfoX5PEsqPw6JQxq1bLYyu5xyMTp2xBjprdmN6fghiHWDCu96KcQXfHKWA1hhtva3YU",
  "key1": "5qVGJs8qmb1nKa3kQPvLUzAM4ocxY84XdeoajXhhxFTpfKDHtaE9n3RpGaNuTZXQJqLuLnh9v9sENMZNAjFBeAkr",
  "key2": "5ue1v1knnm12HkWoJcgEAZ96GRGSv7rugX12MiFfpUFZ29FkB2eCBGghxMRZHpg8YoMea8iGMsxfdJgSEa3k9Wa4",
  "key3": "Y2tNq2xsr5V9nqSD13RaJGFBcgENXDrERpv24EdN1etxyQBzb4JHs9ixwD3gQtpE5Bc4Rfg296iGxrAFesnghpu",
  "key4": "2A3aqRpebJFduwtRU95fXnyhAk4RNdn11k8jWotZ1oqMera9RUYt3EvPrf4jWavNtsFbKqjdd4skkqzoobNwaAuC",
  "key5": "4e4UVPL1cp3DoYw7NokTcQfDhnoF7kmuEbVyTEBiYo9sG7X5QC4uE1jcp7QTXxtvoJ7pY5niG6ACCuaC7w8uiBXd",
  "key6": "2K7Ej4XY3pDT6xAreJRofqr9fbjjuK6ZCigmCmL4icEuwx941GzCZf7gMnzS74fhW7TBWnRYgbpkJ4Fnq3ZFpda7",
  "key7": "3SYYkgR4u4gBwXnUDb4S9BC3qn2NNzkZomyrFwcSD1rGoLUfTAdJuAPvGHsq2MnVdfWqsiVX1BVenRXK4Ripc6TG",
  "key8": "42vHs6P5oaE5XFBPxkvmYkMdmUnCX8qdszyRLXKZnMxYVNVnM5p2GNMuiTg3beuEmmj5PaTEC3uuNMSvkRgEVKfc",
  "key9": "RvymtQKQDUG8T4dm3RiHHDbuDn8rGFkykEnNumagAtbsthwUsQ1DLntHrZ8hcF7sHEGuouvkkxtgvaEwBF4gkWQ",
  "key10": "5GBJh71cbHNduNhS3RQoJZoFtkLwruDYNsq9kjyaLdXbP5K17ZMFvR1WnZjT4UUeuSZtpJ8DyRz3mprXuTmGwQSM",
  "key11": "4ZM3E8eEUT6kdP1AuVvcdm4rxsMDTFyYtYC5YkFRjU8ADfLtZ532tQXhZ2Qnt2QzyNoEkkvsYVKfuxL5D2UZusZk",
  "key12": "53fxr6tmmmZrWNLGBvb8FW4gAWtJuA1rzDiEwPZjC6Rk8ZJNsNL46k6Y9Yi97breHRUsiGzep828o8sFYzq9CGXa",
  "key13": "2HALVVZZCDogBup2nFPqHeUqDvUD6FXwooY9dUgie9bswRkPKgKRpAb6zFRGwvVHhPTtD2QJ7HfXndupW7RCUtQa",
  "key14": "26HmEuTpD9K6NfWQ9WmmuvftDrveQJosWxGNjQfJuTMZFP9MGB2rvy3UDxZhfvhkogrXvpSVNExhZMryS9NbqqjC",
  "key15": "4sJWQdtjENQfBLiSBrKbYjgSSUuyrzsZ1AzS75myysptt4RVozWiWK7eLAzaNHeTo79r4ZLZxvyiLsJFPpLYSQEk",
  "key16": "2jZxE2SDBZuPhyY13W2HPHLoHxSL26nTtnD9XNjavMRjway5X8eGKs5t2wx6gmUMnYmPLFL7rnyZZF7AWH4mZj8o",
  "key17": "652BfSEijsajxdKLJihCVchXy4uvV1d9uNewRXbQYjRzGJQh8utr8BFvdcZA2SrodF8CFvkZ1caD89sJZWzPNr7V",
  "key18": "3RYmuSygt7hB6kA9Gbn16regiX1oWbQYC2pppLXtzkGACGtXEi73AoP6xLc3mYaxyYmLHuqQD8BzHhw2wVQRkbP3",
  "key19": "2GRLjgCVLyCYYD6sWwNi1J7FKUeKtLNm4qj8AD97RJq96pEv9p9kamQxYpuY8xBFMoV1TedCuB7zYFgjZKd8c3Bi",
  "key20": "4krZoHyGdcgMz6UHAVyu33aZgBTYxKWZnvnvY6RwsP87QaRT7M1Y7fGmw9W9cMRY8Y88Q4JfX3NWaUtrZdJu7eGu",
  "key21": "2Jvu1iyn3pFZcp5Y4X3wZUsAKkTR6wW67UjJXRGBJiQHrqf7BHAFtpjVhU893DhaHw8Gpub22wVcvZcLXDwhu9vC",
  "key22": "4rt82zmcWCFan6dKeAeN5RHjfr8brfheo3znEjKdB9No4TWxgEXSyXL7U6JKWVjFRH8oxc8MgYJJdVWvY5yaukAp",
  "key23": "22ypdATBfQBia72DBjMtSmAZQMjZm3MXGovVD4YHyDagCjyHemLPHmPVPRN8buviv1q4bByVw55vG4DjQFGaquTT",
  "key24": "2hWcUvVSqdhfawVMVrwBnrEWZqbz9LHRbTqWbnvLGM9ULBnKUBZNUQvwT4kkmmB12GPpdAWBKVPNjyi7tS7HuEuh",
  "key25": "5Vd5WiCuzKYaXJVZp18BdMQoayhSHSBgAqVyshBPT46VbbBfwEEZHt74KvhgFy79kmESo49oAfvt8ENQGmnCqVgC",
  "key26": "3tuGHCeD5VACScPXAqLvPat9aNroUErLuYByGbVWVF46FUmQZG2S4Fyzij5Z6JgnkppBiW7kR9mDFTNuZdPjc7rb",
  "key27": "3rngjeV9nAauvgLbhWhJgGreKmGocCeHAXTFpKHidQrQFSZQEoNpzHVHL8b1TQkivnfbT1kiVxfZ6t4aKP3nFzr7",
  "key28": "49MtVauTCcC2ZewBLPXmz7vTMDxrYEW5UFaQ8qWR1iGZT6PxFxAet6Kj2kJzzM7ktFe3XQPLYRG63hzVSUxiXtWE",
  "key29": "DaQS2j2g3qboPCgxXKLVarE7cD5QmQZzHy6ro1o8Y7ZUQAtmXRTKQ1h6NNNhcHDnicBPxka3Ya3C1WQgeNiveK2",
  "key30": "3pLJ48Fdg6B6nDY2A7pSdL4zLwMW9sg6F5zaZDtKyQW74cbM8o38YC5hteRFsAj5WZf94nnzqkZHRFs5Kw4eeFYi",
  "key31": "4oA1t1qK3xyiKeJAuzLj8vv1kDpk52YX2N6PQKDCkjSnjiCkEKC4T5MQk4dXRx6JjmtH1o95xeaxKhHH1yqDaDPo",
  "key32": "45QuacsnoubqMns9wu4GVxjDCKQoo5HxBG378QGHVsY2xsLUCVdg1xArt8LJFYqD7U29MyUwuG3fxfbSeQYjQUu7",
  "key33": "4iDo5Q57Xs2b3cwnwL6cuntPpGvn1e7d9ukiQM8fMU3NBnw8MfhTxc6LjcXd7kpK1aVVbWBxQLsQ1rs3D6PoaFKV",
  "key34": "S9nXRgweuRK5B2FP1XyCje8YTVnPGijZ9ArngVCcaQvfk1UgVqfveqvNo45zZ9BRTAmh1SGKX8rN9f82toy4C2W"
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
