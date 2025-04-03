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
    "5FYj4m6zyETkQcqWLTk3SosAp8Wpyg2xjg7kfGHFNdSNEnyZVAjhff3YhsrbCv6qp3fT4CcCUktGRN4G7cFYUu4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLz4diZNCfmeq3uKijz7RDn8G9AfAcVREiNz7ZXnATjEZptBzzrZi5Q1uyAiH4wY3UYQoJzZ8uZ2nGpQTRwxwsb",
  "key1": "ufxKZYxMcTkiq4VvtEKGiUrRb9TNysnmnuqjjkJo8TFutkgh18WtEKhEdNj16Vd6Zztik1sY39Qrc67PkpLYw6E",
  "key2": "guw1M8Rapzek5yP2oRK5oJcacjVqJWasuLwF8J8XBryoCwwDit9bMsgQGKtn8sQZJ2BvEoUjGKs6TckT9yBGp78",
  "key3": "kXdQ6SCw2XiASoCFonAMGJhP3Ax8THbdv5vHzt4XbvP8K4gFe4cP6qHbNo7n8B6ARv9fTxscQzTJdRPusuDsR3u",
  "key4": "5MCccY9Q9Fdk5t94EG1wabPH7vJVrmQYBpphJ3gbuTcCB1UJMV5hHupQtX5dhrQpWWy8CkhtELEBLTy7hgsjkTUB",
  "key5": "4PWTss77DcAiLeeiEj2hKhWEw7yhWrAj7PinxyWYoP4vKNhsBLQvbtrY4cW7ZZMkZoiWJh6TGsPVKzQfJEEQf4Et",
  "key6": "2YVAso9pEibRbBWxUCii1PGTuZ8JF2pZdroJWvTkzzqgv5XZHnsqDAdieBp54qaYYujbjvXYLkeVqrRkkdKhRfBv",
  "key7": "53q4WG7NCnBfmLEQnTk8k7f5QdsevD3UKQrXdLo3pjNCuCDmKVH7nyroS4M8LviBsw424D2gdTfweKKsak64SUAR",
  "key8": "2pKgUc7QtCywsAAHwZ66WuR8aJ1aqQvm7hAF5oXwAMm4WyiHY1Qx9fBdS7Df8butqVrxz4JsnJsFbcBFW1Hz2DMP",
  "key9": "4aMPwaACTiRCQyMt1uWKunvuqjwcq4MRNoDJcZcnKkQVs7XWUgXx2RZ5mSnhQ8tWw8urvu8nKDfgh4NFD8DxnfE1",
  "key10": "1Zh6MR7X8JisgJAPT3j8fBYKDsQW63utQX8LDmaTXFKJUBqBDfKBfMsE3JnVzgtLYnru7RMXPTpXF2WAxdk5PXB",
  "key11": "4QH1kurfPjSAshAE2k7TWCYQKskmQ8VCny373kwoiPoNEmzMQEJRAhD1Zjv3vubjgnwBXGqrkxJwsnZRg3Cqprh4",
  "key12": "45rLuXAysQQVD98ziaJS6TNi9hzpWq51bRq9QXfngHt5kgMRremyg4WFJQn72Y2Cfb2PMYtPoZCSnRL5BNdjbojH",
  "key13": "4mH4j6kJWTkvFbtd4wQxcAZst9ZNqXb7oGZE8zymdzr7msAgnHx8C9dSffSmmh4UnTsf465ZNHMPt4w4uJ67rHjU",
  "key14": "2mwHRhLgCwq4RmbwvFAAEMBbPv23ukiKS6hwiswXBoiP7SuL6q3fQyuCz1tEKoJudENudwC9EPVgRV1meVzxcFnq",
  "key15": "NbAqSJxi9BAnx24gGrufcjcDcpmVtioiDXhkdwpPKuWYG5TxuuVkrfwM9eC2UZS8QzFzNuQAezJXbA74eRHuzHf",
  "key16": "2S1wqJpDGiBN3tqcQVL74bdNRsCa9uQ3EL82eTM2rH5SCkdsL2Ja62Wve6zSDDKhaBDvKCUiGghvbxJHzGAa7T6Y",
  "key17": "5e1S7r4UBxKDUQVK2YJS5LTEiyqmwZNc2LXREtrfXwJoYHSvxWR7WzqpChB7cZjLoqE1cHPvqiMvcoshJRze8dwZ",
  "key18": "32vqJh1Ue4YVWB3wXAhbVNgPoUov66bcneJKX3my2w9xShLFpWzWrMtq1AdCKin3Q2ZqwNhhXCBzofwRCUZBKsBW",
  "key19": "4qhqaCCuVqUnUcUgDHiQfe59veCfgiW3kSkHWWoEp2nt1u7NEKFeAxiKuf1RdW4aTCeuJAFH93pSSj6zimvuc7qn",
  "key20": "2jdot6KScLVCPwYCcqESzexa3TGfYSCmJboT5stLFB8cf6tQ3HnHiSjENe6TqEKgaTs623G6GMJM299kSfbQQEg6",
  "key21": "5JcjASX4wewLyj354hvBTt7pbBo72DAE9ofe8rrdgzbRJB52HSkz3RCizrGYmcZ3abxEggm8hVhL8PXjj7kD29K5",
  "key22": "2drv7ZrJTnfkGoJ9YisEAKPjtYZ9RK5DsPy3jPvhcr2FRqbHE4bEnznYZhUoza84ap3iyttMu3FgyusMb5U96GMQ",
  "key23": "2ZdRpvZi4Ew8drjh8Agsk1Y6FGpGpwS19eHqHWdpDiCtn1C7hxpCCcSwc7QENLbHtqiyZqyr9wnykAroqN8QNWFf",
  "key24": "XRNzzZ3EzeW6YnFJDabwVskmXaH3VV8KJiQhW9BwMBAWgSBSgHBm8jTjR6TfFAUcCQGScqP3Vc2vRUbQCMs81a6",
  "key25": "54KYWdcztRSLkTnkD9ACtANuNbnKHb9dNkeFCuhj8hoikMcE1Y7fLPjWefDowM3BHgbdLaryECfXC6oA6FfXDG4W",
  "key26": "5j4Upgtq6rVUK36AtxsofGguHDgNVXCjpujhFCP66T3iWnqGPNZXPCuwwj3o2XaNNkrGPigQY9FAySPNcWMcYmZD",
  "key27": "2kR3Dc3nNgQUgvtEq4bssac9XcvHqv2m4Sr4vpdWwjEczWrxAbNYYVTLpthZWg5PVhei8WpHguHzAYNdCsvkfTxv",
  "key28": "4RL7dHFLJS7KSWnhpXyyTSNw4TCMZKf8gESq5Ua98Bycpdfr7nnDbQ4zCop5RMM31T2Zgs8eetzgjKKCruPvpMcm",
  "key29": "4fC2DUFqbuvfXweTtVNtFKzHxQddAa7F6FD3Yh6YfVKXY6qKdnAkJk4E4Fwa3jurXtQtytvTpmiUVLexbAvPofZG",
  "key30": "3fCQ67EAgeQbX4Qm81MEBNwNeDreuVWJpYURwRA8u8VJPWWwZJKwa6nieiTfvQxoZfybnTrVb77DTWN4HVAzg2Wf",
  "key31": "5CYvYtthw7zWUjqBvns9K1kRyN9dh18ojG1VRRRFku8vwBGnvQDbunhJ6jukzzNcqMWTxHND7MG4Pvf1shS1EYz6",
  "key32": "3NfG9oXEV7HVKkVNiBLHpdiqXzpP7YK5PRY4QZebVz3dGN29VDgZKZr285Sy8tRTX9m9shpSGWzyhyRTnK2CjXAN",
  "key33": "2zYy2HoYSisGiph5aEMuxavVPotCQLVh6c98dujLTxG3UxGZYFq96HLHr4SHtb7iuLAmmbnyvxoa6VrdvyXyorje",
  "key34": "34UesQ2PPWnoFf4URwr4J9t9REQwFJhXY75h3DH2UZ74coHRZ1rWVaK8baPLzqWTf2DSqorW8XpiQ26k9Xj6iKEx",
  "key35": "3AoqCze6PKgJSATRV4Un6mjWZ8b26t25hVCfJMTELTPctpJ8ZCDUu7WStyXLBd4jucydMMAoUaEFQG512Brh3Xup",
  "key36": "4Sh4dW3NiVcLyeMPanzC5uFbW9naE6ygkLYk21Vrt6TxHTtiBXKr287mCjgHj2xX1CSF4gHUALwAHg75UXV8tXPE"
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
