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
    "46M8ypcazGW88KvcRMm5TCM9E5yE6H5sjvjgVrgq3Ya5w1sfA2oagLCD2rxWRitWrfokJrUi23iPoMgtJaRz1u28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ED4J6L9bGnBh8UvqydtyLopP6hdrammVe8M1Y9std2PhMKyKUZpkyuRxfqFrJfP6sD4hsdpHcNBHdS4xncKqqLA",
  "key1": "9UkropAinzo1kLdk7HYTY6KvvHdhDnSLPw9FKhmcTzMQWf2WiGNoXL1DXwtNvf5ax7DoWMuV7mudJd8rpX1YXW6",
  "key2": "2tq63fPbeVPCfiJEQQ1X9RcXe7r81NcgJbAyB59MWD82C6wU3ZkUosBFZhQ4hENhwsoAdQZnQp71rY4ewPCmLVJV",
  "key3": "5Vp3W8ZsMQo6gNw24vML82veQpCJu6759aPZWwv47uFjFXFtb1EHNVuq7Xqk96CF1t3ey4QXzyMMcF1s2P7SQrKJ",
  "key4": "4wZtLBEAS51pKH18R7zgcuiP95hx1w5EkqUcEjXCD6P6B1Xvcwor9bPmXJJSegkxJT3NFLvhShT3MD47EoyEgWLH",
  "key5": "3bzYAgDLKRAXjAi2LtbgtRRhGP4jBME4U22qSopmYAmgWshY1BV92EqsnHE711GTEnPRnGzjRp5rz3nr4in1yaQi",
  "key6": "4RutLCAQeJ84E9Xfs1qfDrJtvQcqHRNbUH9Gto84SaGjruPrBuMa5XRkSDhQEXCjRQrNaEoV1w4Y6g4dNNtniGdy",
  "key7": "EmrZH36bbmSaqqFDU8M1Xx1cXpB83oM4k51ss54LgYPQtitE9pQm5HUFVMye7juHZkHzA88n6XfFzVnHzdhyvx3",
  "key8": "3Y6vjPnufnbkE4TFppsZybLSuZ678mnrD74964ZBax1WZZ9hnScDZJD74eA7aYHfGUoeBEJ3qzR1qMzN5r5gh1ME",
  "key9": "3VReNELHtmbSHbkxSXyFfvuW1i9eyGuhRxDLNzppiYrN14Hg3b9PEb7HBmEXVm6B7fH9DiDQbLUxZJr1R9amk91z",
  "key10": "4JH6REVnWwgzPXEDqL9APBNTJ51SFvR1iHfUTUJA8uAcTTazCSs9TXA2qPfjqciETC3nqrG1vDDorfSgL98KaMJN",
  "key11": "4BpCNzg9Y4fhf9VtBwneVJSB9MiMbFLxdgDjUfMMnyHowdJ3CbJD9tLzLx3m1jiGzgoPqA6zbdFPw48BQp47WuVY",
  "key12": "3iAAEoUiv8KsMtaS2s5djnbRZfA4KghE5GG2og8KBmEQnf38qf2tnsVpUYf1ergaXjVhMaHN2SyJBzWzvdouynxp",
  "key13": "3XjFYi2bXY1JUkLVVdpn9SwFwNNnVC2sgMMSWZFXwf2Qg2gUrVNnVtaS5fkWimT1u2ngVsVupRowvyCYa9kt8xJu",
  "key14": "2PmkBzwkUwmxAyzuNYRLFztZdKDkbTNmgJFDSwDfbLSQ8wkGaDAXTmC7jd3GhPbDayPpHtb4w1ciP2Km8AXBhWXj",
  "key15": "3GBZShTHfbnSg7kEWvvhMZjZnbfaJ8ooGgPscLxgvcHDgNLht1tdGDuahvYdCrz4yBvpjRGuFhFpwZYK9biJ1zwi",
  "key16": "4V1SL9dBVHaxQupQPzz5Ey4o6hW7Fi9nCVfj7SC82gjYAzjfWg27PnevdrNE6aCXUym3fdJAsKRnwoQzBFy2iEJJ",
  "key17": "di21XwXYxyV7DpPHLRZHVMQrspXpGHWDAkLoT4k96Xg864i7dU71izNaUVuoN6xdD6iTgwCu8drkHMGg7S44zgq",
  "key18": "63hiPaC4dAdubBf8uA6q8neMjz5kYhaFY4F2u9TTh8DD4eQotyPFcDxP4gfRwzhytnCPXPS9ZRNMVHcN2fUvRYTy",
  "key19": "44wrWAbeauXfPWGACaX3EEt8wbEHjQsgJu8vbDmQ6ho5Y9kV3jesE6D7yyvELTAiJsX5zH1VoPRtMyGjBF5egT2o",
  "key20": "4Z1qkbvELSdDssgcjfB8BLrbiP9ergwE3YvASCVE3jqRUmwu9gqK7zH9y8VFYPoerrC6GWnLuCYuEbZSyBaNJtFR",
  "key21": "5P1pFjEGUkEE5qPqQcKgubCLKmg8hbXaqLhwECxuDG2W9BytVetj4c57JgBLXnVfMMdy8gYq4DL4HCt2RkjDxmhp",
  "key22": "3g185bCYQN6DQtk3GyssU4gss1FTujzGtLiBgNFbKzUSsHt3DEHthFondpC61uyKRc5cNySoGB3CjRC8kotzfgJN",
  "key23": "3mjG8Qi18WmkTkiFLN1168oar3R7BgbKAiU1JRpWsLFTX51rTbyfVfJSFUXTD4tAG8uT3b42bMdefTUsbpC2iFpq",
  "key24": "CR4qsmz1Q4NRioMQ2Aw6KrMDzVNehUxErYVbzXuFJcLxKaKoamtugaMmoYQ5rshmRZiecxPDpuBWRv9eYzbD3bb",
  "key25": "n2XzdEvxZwNXo3hwemWBPs8bQX4GaW29bAw551TbjVGi3dT1MLK36PiBzgXkdyZ8waXcb9XetDnLymQjJgmMAW9",
  "key26": "3tPfeqaQAWrfjUGvsVX33avWPjwdRXUGVVnJ6iJHS6XUvL7L1gVKkfQfG1x7GwFpL7EubAPS4YCG3QXvUynU52Jy",
  "key27": "2SXvCZbirFoiGcdHmZF8KVNbYGrViRS6j55Tusf7wnK1r36t8DFKPqoujmC7CYYRZ7xqDeJ6ZC9seDY6JzwcRcQE",
  "key28": "612YJ7MwzgMRQQCuYBJMrc6ou6sGPZaGLb9b7tcBpoJbMEJBiHfpnzdbJ5mGmPPKvxgqdNub7hLhq1jzHNXxcyso",
  "key29": "66VCz8GKULPuTKNGkGwsjhhzUKqgFgpAvFyxLuJxhcNXJto3tNFERuobKwysJF8f9zk3MN16g6Rce1gRfxqFLcuN",
  "key30": "589eNkqbXBAnwWcaLReuadedKG6qBHGMxKKiTMnBRtWpASreMUsDaUf8qx6UgMZGqy13F8y41ShyqJHMUE9EUm2a",
  "key31": "63LMYPas2jTvof4D7Mx9meAodE5us7b4b6xvsGB4776duzUERw4RSHewz1gw6QCsL8z1dvN7GKvQtreB1y2avNsy",
  "key32": "25uZ6qbi4YPdpbMFGj61nX6johRdrSvZaeTm4PWRzHEcVAR3L1hUpxqrNN7E1Eg2i3taCMt4iXYV7vNdFA5GKkzb",
  "key33": "5psiR5dRQav74y1UBSAkLYmjyRq12J2wBiVf6ZLLr8hkFbUbQaLrCZnpNhr42iCSUsozcpw9YoAy346oLy8UZGRq",
  "key34": "fdfnraswej4czme1bLnMP6riJV8q9ZACAHFBREsBs24Ecg86Z6q4x4nVodYDJ5mdbTXcivD7CvaqvpSpKdTcPmY",
  "key35": "3rFvhjFrU29eBuDwG2kNcyXS4ypdhaRL4eivTBRoZrZk4S8k9HQzaCtJPq3RaMFwSVe4w4bnqmef8VggVuiBKsFU",
  "key36": "JHeNt9J1k5jEWZzw6xitSf79W5Abu7yeLFkhmon8xqE3FFWwzJgTWanfuBDA7NcKmo6b8Cm3qDnS6onhkygvxEM",
  "key37": "43GhxCWobu27NLho7QAXT3G9W9mw4aGhnaxYcc3vbvvFYLqRQhpgEXFLZopvenVrm5KCzqpb4eoLNaY5CUb8t3PS",
  "key38": "5jXhdBQYejtmFSbn9L5ApQnJqzQaZVSzyR2vdgUHKHJTi2iDFyNYXRNGjZUVcg7C6LWgp297Nh2xMse3Z587g2Z6",
  "key39": "4tb6uFzrrTfpTG5KWqrtbmZPDCf2NENwTniV6BBot3oEYu1ZPGHocoZmqRH3hxo2Xb7T5qGokiDKRdiN38r7yTRn",
  "key40": "EVGZVrWGVvMqQ1Q23SRBLitUo4kY3XeCS295vUbu41UwyuQb8hqVZH1Rb1hVzw2Z3TN9yrX9bVTW5d3sArWFWGg",
  "key41": "6ksrZ3grGXSGEZe7hHcwuHAcZKLZ6ELqmS8HQmZD7J7G67UYJPdZYt3XmCY3x9q4yFP3yQ4j59mTKtGGoEo7MK5",
  "key42": "4FD4ELT6REgXXLd9PjZSa4RCL41tXyqGmeY1kAqqPKJmKgWdeZRRSqEZ61cGbGBmHWR7vJM8m6ugMRDUzq7gnK23"
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
