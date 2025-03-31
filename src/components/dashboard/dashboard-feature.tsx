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
    "49hCWZasoBSu8pGx15VWC72JoK8oDUoXjdc3ph1ttYrSCX1Rffj1VB8R2QqNNJLxfFeSS2B5d9iZtQmLx85dJTUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4RtwbYgptRkeoXHBw1SVeizZHkucmNBE6jzoAf5niPkWPGPBqJMwJVpMvkNrmu9U1WKV8e2LrbxP5P3nt9GCUB",
  "key1": "5t8YDdpQYKwvGZkSN2b5XgQDxkBnPFvj2mnFKiNj5nKtD4YLVQ7gaRvasV5fBpzDebJfMC3fqPxYv2CYeHs9wH7M",
  "key2": "28ZNr1GkU2fGeccBgyF7KXvKuJYwF725Ass9DqrWHBtcXFxKCuihyHWowquxr5yxWMt874LyREaraV4e9dG1frYq",
  "key3": "BuTs7KKRrU2Siav15rDJEV33YkWRpgvvryU15K2ERwt62xJpNsjiSSLZDQTtU7kPDjxtYh9AeAi2Dm2WgHR6UCt",
  "key4": "2KuM3xeJ85CpDb9kkgeuzANh8CuJkhjf6VR6PE39v4nNAfYKqfkTgKypP7GxvUc2LRJVS86gTYHX6Mq65DbUzs9Y",
  "key5": "3Nr2usSKM5aBGdujXQsMJEauESiH9q6pU5jXARTRPDQYu8JFGCCEnkbuwVRbR2pFpFhYT3HHBGDv6FYGnF5chLWL",
  "key6": "3KPPBmCCedCUZAbmmmUCSE9tkQjdwig37Uce6kDRcnWLjCDa5tf2Dnj6HtEznZpwkVTb5Zw3U7eXfeA7jTCeqo6X",
  "key7": "5QZaESH4s4aSqMiwaAJNG9QYVTqmKjVZvQaaH5mxwKj6EGorveotzGa8TaJdkxh9h5TxynR9zvAY9cqz8RMYaThw",
  "key8": "4NH2LW75ziQFHmLEcW76kmCjB9p2BQf56sVu5bDhQoRMUK9qFYrFVhokCTERvMRwmyHAjBrMyQfXwWLsLd7Nj3iJ",
  "key9": "Tde51vNUn2fzW7zPtXzFkfqqK4wHjRow39iK6dmVoZWTLbVwZcDuRCovPamt3yKipfFTo6emzEEWXvB2u7FQ5c3",
  "key10": "4RxTPfuXuMjnb8ttHvrRbDCzD84pLLfM3M5MR4WdtoUJLzWjZPiTouPJWrHEwavnQ7S4rd5jSPMpDqtci3JkoV33",
  "key11": "3aEC7ZwRZF4ze4s7QUeYn4Qwt9ibwFUUwS2opTXQBZizGvLqFdRFCgLZfHAXtdEGkEetgeAryegx4kUhXe33ariX",
  "key12": "5o2zL7rG3RohFSbz7aonWrocMVArmta4WuTNAeuZeqhjBupHuAqBMteZ82wtTkUASc76fEfbdEeVc2Mn1REq1z2y",
  "key13": "LCMmA4AKZod2yQyvLX5zEWA9EA36iwEAqqCUJVHoj5eD4f6NqcvBGXNP33386H9unPeb9TYnf4RyzrG8p5beL1h",
  "key14": "4THLfDam56m3WDBUtJWoncfygVfjqCohGYaVwJhfDsQKZNrNJRr12XkYjz9JtkhJDfubXBdUXzKyFhLdF6s3mJei",
  "key15": "zMBqHDFRKbGxsyGD53HqUXTex3qZeoZbFM4couaVBR1Uz9j5QmuSZkgHyYkuC8mnxw2oAK4TQurxzCWLtYUh5Fb",
  "key16": "3tCmKtMyN4j7jcgdqxUJbx92kanaJhgN1ugxqLuzCzYuHuuTfhUt6JNySji9QRQZmG3kYyzVUaPZq6xBrcZZnRZB",
  "key17": "4hg8wwSqQveCCMvkiBzVvf7SjNDxdHpmTUykJuTfaz9eBTcKopxkn4wpzuoGejvQZ8LS3tRvuVm1aMH3vJtrrQbe",
  "key18": "2vHHYKNiFDh56ytci6Jzq2NPyDznfxitAwLtVzeG7eE2zPySuJYdb1rvVasU7E6Qtouh3VdSuZ9H5Cr6poycLJoG",
  "key19": "5URRkXJrYYqhEfNbuJBXXv2Z2snPEp3jYsKCQsHcAcuUnLantntsWewXPv6FcMU3qeUKyDoKbpGUZaJpJ737tne8",
  "key20": "3xwSaacSyLBfK9LC2SFyhSrmb6UjZuGrtWRHcjnRUbTUpyDd58nXZgEpJAzNdiNLwCLhWQGb6Uco7HbkNXsXNPHT",
  "key21": "5fCngWh6cvUtzzGXz6TUM4JoStCPF2fZ8Aw2dw6UcuJuaSeJMogrroXkmMdM6gtpyQdBVqLufBwn1rXfSro67Q2e",
  "key22": "3s6zFZ8ZP22qyJoahjPRbB5BKe4QTMQHvyBSTvjkabWo69GNRzsf4bfugefcyw5URjj9cR8Fcw2hhFzQRoi9PrYg",
  "key23": "sSD9L4wuvMyoJY2DkbnLut13pK9heUt6Ra1eaE4MDtZnjtL5d3ayXNwykKrBRyLS3U3SNMoMLDgJFBkEJ549M5Q",
  "key24": "3hKES8foFpRtLEfbWMm77LfQaS1dZqFV8SAbWTKkp21igUqxxNx1arpNZvkfqsrQsA656Y5YojLz1FpV3mRJrEVf",
  "key25": "3QXxhA7hcgNwWWnaRUmPFwr5RtCWMFQbBezVaxb7EYUcW8EMnp3Ehxn5BoiSqH4YgDKv1wSCF6VA2BmCuavsJsHM"
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
