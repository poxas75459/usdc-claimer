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
    "27Vj6DRumLTRaEBjUMF2UVxEkYYz3qAfyiHR69uBeeTM5FCRQ6DAdoBGUgLA6Zo355YmreQxYQijG5rTo2ZPkT4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g92fPTgji5Xf1srNCaAbvJfbhgrn8jGwL4S5eqy14TYF8CPD2xxUezBPiL4J23xdYS31d4jQyQNcnL3YcL13Hyc",
  "key1": "TvJ78sLKGf1jcynz5YVp31CHV8Kt6NdajgwsiqC6U3K44B2S46xdNZfrh2RkeetFQzuSRBKKFz6MNjgy95b1yak",
  "key2": "4cMZBxpC7RJ1kBrA2cUUGhmNv5fVo5QcWaNHHit9aE3dzZudzgy3NqzspokFBheVgN664jDFeSrZd8StK19uY4To",
  "key3": "4ihxXyawfcg9xx7TmmvmM9zFdXdgJns82Dfn5jXrPPsuDSqUKP1Br9JJ1DupNe8YoFBcpnLopvws4T96ZMifGaUf",
  "key4": "5UouW1KkdESTUMksTPFi8XjT16gpRx9EQib7gKDkUA5vB9gr2Zooqgsed1nUVEEK56yz9fJMXZY7EcvwTb39VVbM",
  "key5": "BwJxrojtDMPWTkWxdXBWJc6sAh5ewuKajG2zbdUz9EvDR9wXH6Bmo9HkS8irfSjVMeE5NUE7FmmD45Pah8CpfxV",
  "key6": "3YUh1xVhnCTCPaSxxGynR8g8mgd7QEJu5yiSKBs7Z95PN75gwUuRKXvPtU2KP6LgRe3jhFzWKgxLkD7pRqn9WYoP",
  "key7": "2EEQ1E5fTrepjvjxETqGajj3Z9K95Hoy2dG29yGDWRRr2bs9HZEMaqED1ykKCMXdkUtjfF8M9JAr76Qb7VcFkkhz",
  "key8": "fjvNkS5dDCEWSjymUyt7aQmhS58Ehznz6vTX7NF7zgU9LgvLnzNy8iWrJbVYcVtbMi1zHj5FbbYVMAJcZwjLTDC",
  "key9": "5pxCq6Pu9rhR5UdWmuGrWmhT5zUH8pKMpx9DTKbHtN8kKyM2UufzH8ZvmryYdfwDMTGmXmc8Ntow6eSpEVK2SmU",
  "key10": "3cRQrnpaLbBiyRiiYF1psq8uuaSRQaz6nRdcUo7rih5cR3PrHWUHd1wEKoL2MCAQJwhuQuHQQG8Whdg9g1p2zSQh",
  "key11": "2Efcx8p6xbPjmEuEssSoCz5v3b2MwD6Vj1RQqz96sboDEAUcWWh8uY4Bt8zrbTsJB73L2fAAxZE7MzJpAGtCPWoC",
  "key12": "ePC8mieB6Tp6Qp3CY6aES8JXAehJjf1s6c2XyoEwBApT3zeECCN35QCCWdjUGEswNGjpiN8wCugexoaKvsg9HVD",
  "key13": "2xW4oEhAxjsz5QTnPFKNoWJfWSYv61cbvf6aWYmoBX2LiN4MXT9EQLMZzhWQLW9Fiv1xpX7RXRqVjSjEKC7hNFTx",
  "key14": "468CkwxN8c6x2k8K8NoyzXDu1XN8aVbZLECSMJvBuQLazW1yeb5bSfrUGLg5AYCKunbQqEfxXz9tstJn4ShG8gtK",
  "key15": "4KNZsP3656Nz6su2777bVsY23vKQrdxPvvyNHFE7HKdJWFLgPC5DqszmaNFQh1ahP1QNLHXg8ACkrHHH6FepSru5",
  "key16": "2pFE2bfnDzykF9hhzysjk8yTZaj1AbpwhcyrbHdVZTvwqDokb5V7ucB7vALsdmnWVL9cUAtofc4zw8pqXmN5iiW9",
  "key17": "5z3MWWWMWfLWvUaFj6C3Z2WBtRkDFBi11PXZxeLyMVJ8Ch8z4nMX2ZJVfuuF87bJgX2rmudHK7EviEdxsR7eov97",
  "key18": "22iF3gMfdkEwmE3bXTdBND9QwwLaspV1shYHRLd9uSULSLX4GVviwrcaKLeDubxbqAYfgzDwHSfYJREAWYPFM8Sg",
  "key19": "3EqTEjHUkEmfSGcKzLHMdKDBtuBXdcGNZfBn2ibC42BxQdDD6YZNCZ4rWS5pXGwUvGfBYpRb8w1jWCPZoi32AhLt",
  "key20": "3k1FBnYE76F7GPy7wV6QapFk5uYzpCqV9pgizVpg9gfjQC8krYAhrAYStVaJw8o64npJamss599cqffyAvg7KM8",
  "key21": "5pGqcZux74gKJkuRkBQUj9Q43Ep1bxFGiBRNMywLsDcmHwPZGDZ3QPELZ785qyG3EtBDFaxFPWKNMcTmtokfpBfX",
  "key22": "cR94GveXNisDmgFDgsdUXd3FtWGYmej5Sx5PvAoSYAbSQEQacFUhqoqtcXVezkJsXUCoLd1pnF3LAYFwGRHhp3T",
  "key23": "Yp8S6jm3fbrrd2QBAfsK71dNegxPPTeLN2WP8Na3pTZg6Kr8jtZthFdVzQnFuAp4B1iXES5htcHT1xvD6uY4VVX",
  "key24": "34uRK4u6pddoNdZyDsytz5BFPfjtxWnMB1dQD6GDikuiaW7ktU9rD2N3kC4Y1JRiU8H1P95axV5v2BtMtSFwkpze",
  "key25": "4iEULomUkWzx9LMenfmjQa1KTXDrYAQZPrRLLBrPKSHczSfZbxQvjFZFzmy6NrVqbftu95YMcRpR46xTLKjApP6t",
  "key26": "2x9sCkFQPiN7sfh4hhxYfWtvkquvm2xjjCo7LFrpecCnz7Z3raexkKfAoB7atBJyvegxz5ubdvfV5UqgzgMekuM3",
  "key27": "kBg3oW1s3fgnGWQySi8zigXsGHi8oZ5eESQnAobyuAu4nVHqtddBmC4v9R3Xd2eCtY4MuAqA5GCxHqszQPrHrzW",
  "key28": "FnNo3SNaWg7hSdFVSx7wSkfoe3hVA7w8zpHnBfMDoswZsZRScBnPaDmxj7kvSV6Zgw39HGPi9jp3GBm7dewmtEi",
  "key29": "4ixMN6W4RghfY9s5arS714ro98dqJSt4YWwsiddsUvs1JK2QvhYmyYb5HEQCR8g2ypJCiwWzSmFRaTz3ZNygNbcz",
  "key30": "An4PfxDKPqSRcYfNtNYRQuV4gjTNSC5QnN8iqnvUjuHGyzGawP1EQjmqYvnqtRAwguSPGm3mZ8wDAj72nU6dWya",
  "key31": "2LBiw2jm6hfwC8ATPRgbyTPkpxyj5ib715RReqr3wSpeZ7PDt42ahBNnkceAooHbmSbDAXqNKYkxedusqeVtEehU",
  "key32": "5g9jiJahynDYu2X7yugKtVXCosMsr58eD25EBXTMGARTzinZQ3GQvjbgiA8GoezxqjdyPbFZAtqKqHptg46BofFq",
  "key33": "5wmhL8pUzzbR8JKYSToeqnv1AbfpJHE83wAQEkjUaQHP3d2sEyrWgAegWYNhsLGu8Aww2yoAF1HRHrNzKXLe3Ydn",
  "key34": "4RxvoHhvLmDUn9YfKas4U2MT11FVB7Auj7Pw7wjVZaaaGXnvyRt5t7dttuEmXNX5JJ2B8tCxpWS2EX8wTqxvUBP8",
  "key35": "8vbaPGZ9JQm3jVM5M9BBjwjLaZ9tGJBiuRPYMiFv6yQvyEWgYXY6iHW4dDtim5wDLRoeEUARXsyCUQFL6sAvFjB",
  "key36": "36YfyNtBro6P9UCpFUqxQv3VzzsVzLLUJmRiuviKA1rmiBRJbbUKCWuttnvDCymzKTFJbRAesYuuu9H9RXbJo7y3",
  "key37": "5G3FTqBgEVDaCmuEiuX1tgBXckaVrPEER2LrfHiZu4h595xLsB9hjwcDvk3DNDa9M3hEeZXHiFqrLW9dEp4FxkaZ"
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
