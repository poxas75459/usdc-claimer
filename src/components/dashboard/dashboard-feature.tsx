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
    "4QqP9Pa5NVrvqdYVJ5UG9vfhhioRtbv7ypCaZL5jTjqDmWD1yud8H7Gjrr74W2SRazuZ1USomsvzSqWBH93DGBhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmoquJURPB3yKeKxCQKuU95yc3xX1cca1JNX93GVsKhsUnraQ5iUzSSXmDUGgKZ66qdAUif42czazpQMowZQr84",
  "key1": "xzYmzXFVqs3q4agsUqj8fd1MDA9Lv3X47Lmiqc8Jad4bb3piAyGijYv8grUSed5B6cg4CkSJKAJfaiZzzQkPCJC",
  "key2": "2WN1c11QSdMFR3ZiNcCR98ja7nVdHE7eQ7WLqd6cVGXNERw2wynTGfymYeqCosmjDuR5Ho8nrN2xVsc2zPTSHN8v",
  "key3": "4fwF9H258WXDYoe5rZisr2uoV1i9hdZKFePiHRAJSJb8wfKFUDYA2cFW9F9zcjYJpKV7ZePEwyEgukmamCGDPGfo",
  "key4": "47uebdwYskWAxCBXsSb5wUW2kSd24vPb9T4NrGrVQdvpnmhp3G1U4L6HdFRPzAxPsfkBbC1uetaebXnZJDfsenAB",
  "key5": "2CvSnU8yruxoSJmA8P7QMKtJbpGVdsEcjvTfdsxdCquX53XynPYjVWZmbft26JQC3UJCZDdFpyrUnvPubExN5NX8",
  "key6": "2RpEynYAzrGxnLeaHefZzBnvapMeukmcbcqZJcF4EJKzTW8xiRTFnxUWiXQqw4CMwUgeoVZGVybhXbgQujwSGSyV",
  "key7": "tnPPcD4sFDWVvFV8S5jHr39KpgQbKAXm3F4FQDBagiSXrteE31aoQXyCRxwNkwcdDQmVMyQBjWZ8h4xYbwQa74A",
  "key8": "4srx2jUk5PDHUiwga6yq3dJX8bRF6FRRyEtnjYvgEQAGoyoX6FJhv2JcGJ5Q3iHAz22UDgw1cwcB21u4owbjxjzz",
  "key9": "2FzJL8wBtaigS9iFYX47TYk6gCDyc6MvevKfUgoNAr3KaLwKExsq6rbuLaszC5yFUch9Z65pm4QJyYAUKTtTmdqm",
  "key10": "2txfWCuyHcGj3KVkAnYoj5eFCqdmXV854JBymzhRkfzxE8D6Y44m52bXJ7DNjYzhiUn1zbafiwHF7Sah4ic1Vubc",
  "key11": "3nqCfnUGuRJCtVJPHjvNvrc5e6w7pebUN51atWMyY5yXYpkgRUQEwhp7gdvF9U62fmUjkMi2XjjFeL9zUbTky4cD",
  "key12": "2YTcze3HwVAvBhAetYm2MFNq9Mv8Cb9dS2W8uboeDMZkNPPHZooT77giXeuNpf3aUYYUYkSLKiv3MJbKh3orBb5L",
  "key13": "3kc1hAq7w9bWom4oyzvJY7Xx3ckeUgqg9VkSK8hnypEQqQ4jFgApKMnQACCFZCoF84mv6hjrP19rxAyEjpLj4DnF",
  "key14": "RxuqcDinnAwqvrSfVtqermyRnSsvjhwuwfBfA9D6773Y6H7aPa2RFNR6u7RMJQ7w4wZM6c4WsAEf5bCL6ruo6gt",
  "key15": "mdjgxb65aZMQJVwysDVKDKDfznikTbsTBqYPz2YZsj1SJskD6MR1MGJvJU55hpDvKUYL5V8s5Aq664LFigC87iX",
  "key16": "4e3fmphm6qMDsAVAY45ZNVRjY2DHeFsEpNaBjnfACyU3nxJTxXZJoxXE31hrE1ktv9pTCMTnL3N1s9cj9sXtfDnk",
  "key17": "3UtC7qHd4dHK8pMSA3dH37WZaV1LnYR6ZHGEcaoCNjCjQyxBWvmFy7G3saoMMoZ57jMStegFVZTtM2SphQ2T7bhD",
  "key18": "3YNweASEEVaDr6BcL91FyAe7XSCYdFrWcrfqirdvbhCHjix2XuQgFDXef2bcryQzySX7r58pSTinrqzCgbChUZeV",
  "key19": "xdJp46VtnHu6pADLZw6oLPjj8JzUWGF29SAcz37tBshVuYhtFgcdWK6F597XeR9NhgkD3xRnssxVWm95pXonAzJ",
  "key20": "5wZtHgSAMjmsrJYnkoAz5Yrop2ByqhrpWGujbrjawFsk3qu9bgBKHr1JFR2WiM4eqxGkcDQZW1JWyqufVscr18LP",
  "key21": "3mXTHNmuicVaJ2zJar3x9DgzHecfygFKog1hRYAreUSoq4n82GxUoQJha3687Mxc3uWYB1ivdqVHpQ7e8ZkxLn1T",
  "key22": "2xXY786cbFYfnXtzNgG9fcJTsHmTEfqRhkBcjMwkN7sXVAWtTcruxVwkqDPnRb2jurrpbbTxJu3rkZuE6vrGTNsC",
  "key23": "hyuRtHoCaxzTdkGMaGZXxHr58tPmxkxeBX5CMzforu1ig8KMJZhJtjmgQRLd7ipFwLbUvv1YxV7cPsUUqJTUKXd",
  "key24": "JnH6XwWM7eC86HJP5pFg2bCxEyk5Absr26psgw8KSDcnEgFH7MrPHay5uw4XmhJsNoKzcd1V7LHgPiYPs3zMwkp",
  "key25": "4cTNkgVZ1q8FdLFhG1nKRN1jdvHCTvUD9Ey2jA8CzyVXy2V9y4bR9S8FQkVqz5kUZWywj7kU4x5ReRjwo4qX5NHm",
  "key26": "5a6REwCEKtTRG6uhaxMmMAAqpGEM9JxP7XRxTwxGXhn7W6jh4G84vcjuQAEffUtV2HZgAi2kFi2hxgDG3x5iVJXF",
  "key27": "67SBjp9NQwUHzt5mQkuaWG3ErZSXgYiakTeqYtLA53o8fARZHFiXfrpWbofs3KJhHWx8aMd2m6w6vBW7yo4ZpffX",
  "key28": "5dVypHPSneG7ET6S2cn7gcSQtYtyQjUDGT845d9Vmyb1kNqt8SqoAWk9sfbL8H9QjVaRKNiHDS3EebmSbvvL7Yqh",
  "key29": "51hNVMFP8zod8yRqvwyzab6nwaHMRNMcstRNenQ6Cw3pp2YNbXtywEARup95t5ubPaQGHn8MFtQjEES3HUPESTpv",
  "key30": "5x5nvdXfqqKKh4CH1VwhYhFtBs4j4ASpUWeR8sPKNKBpq5pQLDjKAdUH4cVPr86J1Wa22spFNArfr9kFCEVSNyFy",
  "key31": "3mwQ8Zq7XpYHB29jYQ2yZ7DGnhA1XjGDvkZCcWQFW4knP3MFB5xr5tCj9RLZAjs1wRxnCZAyF5hPKLHQSG6976Jz",
  "key32": "2Rxt99731HppHu6VjwR1BhLqdp4qHUTfimjcBQ4YNEK5TLDMgfmgUe6maSGh7phHnmVqfupzcDrDHcZsQCfDA7Ny",
  "key33": "5a5UtrSoXwrbccLtrJkJEvd8C9xf2QLeTs3PBZnmNQa7EkGgD647ZVvVAeU7AUub9M1ZSkeKEWpRTc5EyeVJDfqj",
  "key34": "3nW6jzWiKorYo9vh18xpbyG5uciKhUjDafUdu5ZCD3j5bfutwGtYmxZdMd4goQtiFcnFJNL2vWarPK6HR2dg3rm2",
  "key35": "2r35VqBYxvPjQ3otqyJ1A5Mtx8JuuwNS1npqU9LBNFNrcakEKPpiLyjZaExs44sW7pAm8XAGHpuoWtJpNuyJfzBA",
  "key36": "523MUYz5um6dUBsXKrS114nmUhKykMWdEyqTo74p1apKMEtRBsGvoJFMAmeQd9FLdxjnVFAKzJcMJHGgk4EA3s2o"
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
