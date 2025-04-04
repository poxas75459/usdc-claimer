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
    "hVikgPergTFZpXP9KVMprSMoyqma7MNpbeSfX4By5XbWSf7pQQAqHgkTizr1uEknK5pUy5cnGszxmeasDgbqFDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AaTmBm3keVUpfWBAS3ePRJcQVjZcJ5LjT7zzZy1AkRjMWq9LsFKMULimWr3H2XMbcA7KjqmQCcUUBjwqi6ZA3Un",
  "key1": "2P97Ms48Z3G1GokcL8yvGWxPEUEfhwchXuEN826ZsfqJE1S52fNdszbArkVKb27S2YwpYUP7nCRGyjmH5s74igH6",
  "key2": "41YF5sNWxiHruHXyPuP4t9cXrb8FxBzaD6FoJjfmfCBiMqWZJZwuTLudhhvcPac8y9yfSFLr6gicGFUXqcfgfhcG",
  "key3": "5S89C7QyVaGY5eYBzpBpZAuoiknbMTZcPuJhVuFALCkmzYr4kUQT1XF4U923fcV7W7C2Yo41tP6hwMWLridNeRyy",
  "key4": "4eqhF68MEXpaGfW5tDmxLibV7mcQqEpHFsxRfRddcVBZzDVx2chWGmZzqvuzB9JdYb6uE6oHcDhaj8qFUgvwMH37",
  "key5": "2Ec79myUq11jxnh4gpPX8WPpAAEQWXYPBdGJoEXJ3iAx9t3UPCK5bHe4EEaBBdq6B3TdjZxqTqqCSUu2RgXtSLJn",
  "key6": "4x7mfv1NVjtqjMrwcaqhuQ63NWkAEBwSQgxhuxdRynp8sBtKqYZFnYihUkNHoH6iJLX2cKuMvKTYXhzr4niFum4w",
  "key7": "4uWykYyeJyK7PZhm1nScHmMbG2U4xmu7MDRYG1W7wTUxQRtCy57KM2hkXUoJLqz9ycRpNRkGarhcsuvuQ69cTjtS",
  "key8": "2874HRxKThqLW7LVcPCqQQBPTD5vqaJByimnRB3eHJqY6esNcexh8Gcs6wNYvzfXMATmRJhFHVBSmeXcYyomCXQs",
  "key9": "2cCQTEDhAzJnvfX3Egi86hPRva3p4SGupCTstVvH1uBCox9soXti96bJf7VHqKF9X3uL5nGtkytsvLogPCJJXhKA",
  "key10": "2BMmybFosh4Bw7iJJP8THAwNSoZ4jJyRFpaGUAA5CuGQ2KiPtodzUqzX7Cc1H6q8bEogSQHh5HMGeYizGDFPQt68",
  "key11": "4LAYzH2wcFXhEfbto6vKTfwBozz1gPmnt2BixZWEBoBzC4AtyaVLEmpeFRj1M28biaY3V1BqgUk88rHnXhCaLjWz",
  "key12": "5WyDcFrSqUWqAzL85dEVVDcFhPtKcAsXkqm6p1EMEpdwMayJn13iHSvRJfdTyP1HziUA92ELxXRx1HYLvctmPtxL",
  "key13": "4MKSUQfudJ1X7VPj2KMQY4tTF3HxgQKQT7PSy2xPogMmkP2YpWtFv6sxSfaBv4G8hcskQRcA33291Nk9HzmE5Z1y",
  "key14": "45NPds1aH29pDuxdSSD8yB1UEj8CmPu2QA93AUizgjeVgPUn5pStgZbTSnqdHrYZwfm1haQ1C3gGTPo1kkUxdrLE",
  "key15": "4pYqNvYtTzfawELurhDCs5tXeCrX6MnN2PXLy8vLZoXPuUL4tvKmsWog42bFZHj5qmmAYk2XQMrUnWLk7nkwLBVr",
  "key16": "5QzVAxe4hgebXLajchUxAcYYSckiH4tqvctqNopyH5aXQ2EFYXw5D6hB5PhdK6kHwRopTg23K4G52wuqV2WsCLrq",
  "key17": "3UXXoar4CNFPjifd25FtHkr4XCZcPLrFkMRiYBJDWvwkFG5gGKGE9yQHkwirWq3EgScSev2JBu2L9dEkKQL5Q5Cu",
  "key18": "3wgrApE2At674NXGLyvzexKGqDYHVXVaBG8yQRwtxCqfZHoJstoj379qWYwzufGVGhKJWvSrDH2gjeByg2J6NCUY",
  "key19": "5La3YxsDV7Xxw7R4NjQmoGr5WRRU884C5LoR88CUpobN9qXq9oJZ12X2vWtVLGtUMYLbQtHtJUBC4HRGaekrAjBu",
  "key20": "3tS4csMVQU2f1Kqqh4gchKHNLnQLTu8k4FHVWiGs8TBPLWph4DpuTPqyAf5ZZBE2WJ1325uyNEH2YDmxKtUvMmbE",
  "key21": "4yZhmiYiTji1Rpj6ZxvsCwUTGK1WH41CJxaQmS8TZAhJe1MoHhJ8eNZg1Gg9R8bspE7xxC9GUfnRZHaGG63f2cBq",
  "key22": "5JnwVQMM6kFpgMuTxPs7XhDEe65T59HnhCr6fwWrjaeYZTRNue6c2MGELcaAtEmdS4Hsp2USksb4yD4dzGTZwr3s",
  "key23": "3SyS1U9c8X6KVwAbrT8YMHtgddQpXszuEPoA84yP5fB6VExpLSyzKVYAbGZYNRh6W28umP2ut6joPbKKzHNq5MCg",
  "key24": "rbX11hYzYcnh3hqNw573Scm9xRRcFAUq3VnHXWeYbA6rS8ZHeswM8cVA8ncqc3syRL8eqvraQRRCDy3nBVnq4tW",
  "key25": "5EMpDbnAo5tdsfv8YjnQruCVNCQbetwZMzEe4dj4dgR9S9qENXsAYWZxnMUY3fNp3UYsWUei6DXzWsrt5EBduHua",
  "key26": "qt7xAMQFiifVzBGKEDu6MctZV39S6TwfapM5LZqePpGBixUtjWSd7vcWMT18zWed6mqjrQ9Kf8pMEwc9CUNXKAi",
  "key27": "5LTiiWjdRenLe5W3VF93Ej6CvK15Y6aQ73hm4UtiGGv3xDCbvCDhDfJcsWPv7fyYi184VgLZjUPnVvH43G7eWrje",
  "key28": "fSYygrFR6EMHWSeHBMN9BCxK3C7Tzhe6BPT5NzNmCQxZNwMc3sfBomKQFVpHNjK9Gu9hTW8bKmWh1dQdJqUGKaS",
  "key29": "44fD4NdAYVyC1fwvojczgWX7VFPnR6Y7wJcE674agfNPmBZsSguvD2jdUYZY67vTxo2bDDQWyvLEqmKpc7cXeTsb",
  "key30": "43smw6w2vjmwB29XShGC2NjnMMKLt5RGzedqvPAjbsxR3tPeuPppF4pB8Bd8WF56f7pSQmq35uWRNjWMUCGFFKg4",
  "key31": "1epKNtzoZir5TZgeNAB4Ew5YdGhM23F6b9Cqdrscnm2At5MAGx8pU5KyhAFGauPBqQS5QazNQ37nbTxDXBiE5qQ",
  "key32": "tzgxNWvzxFRTpuqVBF2pqCFD9a8MqqyWVjxV2zQGVzuUCWFDu8Mqa4LzD36bFYeTLQmGr1HqaEvYLhtcXGh6py9",
  "key33": "hgSoeC5WoHU7JGw3Ra3gww9uvuomEAxh2W2LphPALXJmGijyrDZfim3x52aSHDUf6yhzTng72o4MtbX36XfqqeV",
  "key34": "358tR5AprVH7wSHz7tMa8sd4L9P9hQ2eStZDbBxWEyhexMFopsoVmCoWHZ8tXcyZBJWWvuE6VLu4mU814skZJfGv",
  "key35": "rX7KgirG6rziKacn6DgpT9nEnC15vnuKFAvpfErX5CrZVrdLAsytfJcuY6vNzmejLemTrNNtcYhKw78rbVttjnV",
  "key36": "5Q2aEQwRVx6gMF8aRdGRW1M1ty9G32X9u1yjwkGUkxxPzAsE6aaxdVP9v2JBMb9gNDRyHvBhEWjKsKu98ytGMKVh",
  "key37": "2skWRR5iLjFRrEkXyaGTY7ySUa9548tfZEoDzNFLooc2LgNDCXXQ67fEELXD92aLuypWWyf5nMB5Bom6K3UrHpTp",
  "key38": "3bcBCRFiSpcUhzUr2VotVmEmHNSCzJSxiWFwt94Rrvihk4PXjQ2k4DfKysRt3THUPpc6F5ufWfZvHN4a6f8swjNY",
  "key39": "4815GeTx34sXuAfWKDRnCWTUkJQsserzjBdiy9EPyZnKaqYN18xzjedNhrvSu1PX8dcouWH5H6cQomvuqxQUd5sZ",
  "key40": "3BovYkt88qhdyCmGLkmYk5tpXEk7evBnFnzFyi7r6q1x6BDvzXx7RUWkzYbPePUzGov976UTsvgkYmjZPk4B5PpU",
  "key41": "2wEYV8Mt8g8v8yUAGQVZArYcAmNc86P53tx8z7tkTvbpP3MkooWVFCqNMMi8PHcTMwdkVjrEBMowUCR1XasjUutS",
  "key42": "4ajqsAtd7dbK9v9x5U9YrwMTZV8SAZtLWXNk4svNff1BNMunSsqSrJUf1ijsuCLuGsQYU2yhuq5jhz87gcgku8GN",
  "key43": "azxzsBC28gwjD6MnyWozhJGhP16jf6twVhzwgq3EZAWXFpzwg31W65WxmpQbftntiEMa6tfZ2W54ujkazSu1jXw",
  "key44": "4ZDcx2VwveH5JAxBdK4zZ3es4xeuizQmoAGC9sa8DA4h8Jn483C6S9rN5oDpykxaqe94Rhttf9YpnQ4zztFoXDDJ",
  "key45": "5Xm3v6WCZpjJScHbmht4QZ5K9em8WNcqVNB8AkoVoywXtXUioxPTFyvqWiXcfgydCtCXYkxyaxC1E1pQvepTqoVo",
  "key46": "UvEQAjbyjsWXt7aNYDrHDg6M6atjMBb5m8T15Mm8SCkG6XXSYc35J4b4MmmzQvEkEPFT7AJGXj7BHFizNrSL9Pt",
  "key47": "4UM3joqoj8U8yrjKEtYqwJ7poAh5hQ9mGxSRt1PKKY3qtFHNCS4rmyV9EhjrqhKabRcvdsC3suRmUjWrLzVMy8Tb",
  "key48": "3UbxU2T8GEEy4bk8Ea8FmectYe7nenApMskRpHK1MSHQwgcsv9pmChRndfb1dnyFgoWnA9roMS5MfdMtH3tMfRCw"
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
