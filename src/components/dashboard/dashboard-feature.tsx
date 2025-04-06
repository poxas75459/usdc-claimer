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
    "5wtSaYdes4mQCym2x7SHPtz5Q6puFfq8gnmiLcDheNkyn3GdWhQ6zHRYx77DuV6hWycMDthd89EC6bEWHupHZqCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWHWMPqYgLkSo3qNwjfueGm7sxSUFLL1ALXU8YxiK5u89JbWMx5cK7VmxyX5z6xgw9xFZyn9ET1xbKscEy3LEsd",
  "key1": "2AAkCD7Q5gnejGufBbCDfQgXphfLHPceUhtm9rQmW1C3VjWs5tJaakghgxbQUn2QcUmEw7m8C2DvbnL5R3ZWGqNp",
  "key2": "Qj1KsaDkDTFUtvtvUW12iVFyypb1T4RALZF2WXse556usWWiF4eLa2mUNXa16zfQg4oQvT15BVyYLQrfYr8AdQf",
  "key3": "3bEFPpXQRna2WK9giuRWfUP7XvUxLfCf3PxvVrgeuSfEJc7vhsEhnTfMyPAivvc1Frjhd4khTbN5pdV6djK93vS1",
  "key4": "FqesagsFjuutrfF4MevhBzsuP4sMW9nsV8QBJCqjhmX1mfVuymcaVZTzWJrqLtvuS2EcYG4z8t41J1uBywZ7cdY",
  "key5": "W6MPrxA6WkXUDmn3DFLPE11F7NkhGZWLHgc1aykoCzx3VwMhi84gzXkwfrEcumLxeN1JjBUoQ37JtsDE7DzHtzr",
  "key6": "2DHA7GHTu99J61dcdfX8kcjmFQXpE8TLKJiyKTEE3tD45XNLcNRGuj2C2uNC91Sue4kNjjmWJ9fi397Z9j3MqVtx",
  "key7": "MagBmWWhA4egd3NJg8Z7kNkApXS3uJHWXix6Y2NA63HnbzKAbLkeC8SemXcmFmqjeZWXDomNjQfeAcsq2ue2Mi5",
  "key8": "buDhxWxLsEhLxzYgh8jDCmxLcpmevht6qjPpGJqkZg2qJBLAqucLjuaJXVMpcEVEZ94J3fe74BGibkYqEhb4732",
  "key9": "3xpR78hSpKmpyJ8YnGQzVwHBndVjKpYw7tggXZbDtp2EYXNzJuuCBjdk2w5vwW2AjNHjhLjNjDF2koGPnhwPJBhn",
  "key10": "3KNLA77FXgoUxd9QgUi73DQrU7fNSMFEMMGBHJs2XXySCWRNvLKFR5Mgvvr4VZSWz5W5hKpMSUcK7Z17oPXmRwLF",
  "key11": "TKJZJMGMwcDEP2UQwHUvyoa9MmZHvLzSsLzEVrh49g9pJg5qzxFfZZJg3sgaxRdQQ1cChaD9PibH3EBQQh7KMW4",
  "key12": "3HQxNCq5cfZ4s8fMWChgubYgnrhRGpEqrtzX8dQ6XcpASRYLCGivweoGRgWk5ncrDLxqozevXCHxthvwzdSicsBh",
  "key13": "2btzdzmEjaihWo9JRekPfGw4saJCM5wVvXpE6Q6tz2HKMWzWTo4Qa6XyDiU4yqWVAQwG2Ub1iEHq2Q1wZHHNb16q",
  "key14": "yNxwzTTCtgJZATRUNsM8HSsEfFNJrEfRJ67X7m8aoVtACxnRpfskxabwfWS6NoL1UdbYx9F3GnZrt15kqwMNYuU",
  "key15": "2tfADQG15QraeaVNAg2Spuzx4z6Z7k6qSWuDozLQs3HA9cTgyapCDth3jPT84qy5oT1HbwbNvFNQARk5oLsCNWNs",
  "key16": "5ZRGrm3rQsGQqAv7G7DacZZWnNefYiRnqoBU9kH8JaYY289xu6Q6EoC2mpzu1xK66h4d3c28ZhPp1w8HNBbFGWEQ",
  "key17": "3f9R4WQFh6pfUFVjFMPhHmMUB9D35Ra41gbasr4eEqUtNbvMEsmXjwQVZh2JSWHF6wib1yBFhLxsBW6155CtdayF",
  "key18": "QUpX4eZS8wCTUZMsoNuBRTd6RKcVSS11NwNse7SFjnkcCmPAD1NwXakwbCYGsRX2wW6toHKaqvKyoecUSSaP2k8",
  "key19": "5Bksx3tNWeou4zpnsC3kww4B8VuHyfBdFmtYn1AXp2d5umTjT49dVBa3UuMdXFjkujnhitBj584pNfNokzBSu1TV",
  "key20": "2rPdKyohwVjsBUqE1oeBkjBFeVWCZMVPiAjWPV5nN4u4qrPtNsFWD1K38jNB69Cs8t4y52YrMm5rpNj4Wwm8VYej",
  "key21": "33MA8BSnpL8cysaukTnWhGCmmMyzdPWTQTATmDwmDA8qLhS4adqsb7jp7YsFT8YKuCFJ6idbv1zY1UvJJ33RbBzE",
  "key22": "4XjpBGfCBvE6ypgjReL7XBS1RBMEeJ5W1KLCRJJEJtYgJ2w1ZMycr13XA6QE4vb89scuujEpk2hkbRmRQt9JN1kM",
  "key23": "3zeuDsxA7JfeqPdREDiyY4o5DHzwhwQ6HezxbqSuHWwRCFxHm1Rahu9hDPmNfR4qz6Yus2crENzZwaPA7VenNUQw",
  "key24": "3dvLxyTCGMK5nr1WtiQ2rjvKb769mU8kjTh6vraYrFprjatU9WLGaH4rBqgT9faKUQtK922UFkLU6gm1jy22jUAf",
  "key25": "4fUQygUR4Cshik21yYtuWcPfpRFLX2wCLW59a9YsfgD2uB67QQ1D54hWWD2CBwc83Cj2prrzfEC2DyYv53uVLDYg",
  "key26": "uyzkp6MCqF5JrSbs3K1hjDztVDVFoCHvXW9nCq7vtnEKqmWyLQsukq2vLEKyCX9eUPGQnisSaaY6qGRFHE3wner",
  "key27": "4pVQUEgYWPtTty696RHeAJVCwpCFPVUZcPan5YCnnprxWcvbrAcJkqJxUVm15DkmtKcpyCxu51jthsqaeo1VtfU",
  "key28": "4Hz3imUB6k6FcKkhPU17Skp3fkaCtBfeXPGApWagnbLUGH5Dziax4SvFpfkZb5wnbwbbwov52PY3S5UgVwSzBFVk",
  "key29": "26oPft7CTr4LvoLom5bjt3YUmK7GVDyJyCTtpZDoEDnrhF6u4sHsBCLzybJaiGWJ6pjMp8QrkjQe5RFYXGQWLJD6",
  "key30": "3hFJmwaWLHyHaf9JT7YKvVJggzy5tddXUfh7Uh6RAEm3AZJDSpVkGf5cthMduCYWVxEo6JU8H3wTY6cBahQzHGH5",
  "key31": "sR3cU51TPw33cRKpsT8LqScbCEXzdf8jXsVMZhMaap5bZAQ2DVv4KC87JvSsVrZtTJY7ZXujDH2wwbg8YkJE3xn",
  "key32": "4jBgAnuAbhUiHFKw6A5kvwKxUjA6vtqHad3fKBN5ez1eEEAMbp7F35eEFvC9jd2ZNduSyPyD98sMJWPohXrNzV24",
  "key33": "5ZJFzW1Fvuz6bJtyaioJFkhEx2EBVexe6TPuPQ3n7Mr8SYw9fiaJQkurUnaw5c6t47vSVoQB3NoQYFHhy2ynBYDp"
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
