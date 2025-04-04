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
    "2XffCKDymmyJCHKRV25WeBhyBc9JMJYEf1XqM8Guyci9evL7bsqmetDL6yqpQuzfeMqfb2iKPZJedM9MGaFmXziz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h54o5rKQWPY7cQpDJm3hCZK98YpVk2yTucRcbtjnWG2fNpc6PD9dwaN7HmLDL1r6FnmLosRV2UU5eqEBETjb5VK",
  "key1": "5ssgZxA9idokfcbgCGTxUx8YLVrvRuSzurwgufWNF8Ge9LQSPknAfM1nwTK2KbXrkwYyKzGg1SKHxSuNfVPzf8gK",
  "key2": "33UFhzZtBUKbUW9P4oRq3HwCmiQZQA5DtgHWBqSM9Q2w1oBPuthcp8AnWPSTQ1XtG21mHp31Xz3JW9vJq1HjSQuS",
  "key3": "LDCWphgFxWGGToh2xj9JSNi2eJtVxcyThZtnvDjzvpbj2hbRfGbxmCqtGZKUwcP1MhsuNhSAHP1bGBNF1nbkcD1",
  "key4": "5jbzqu7vZDjbkLE6Ybbr6N5xrTpWrS5WCp4GptsZbPf3UVySzDdAQYUvg5tfhfxVJKneWZLsgjH6UFZwvTAa34Ng",
  "key5": "4koBShQuDRQTSdPeqfxCVJhyWMZebnrSQUtM1M2td34LZH8t4ThzC2spuMEiXL7Vc4bdVNvaueqziYgg3gtTVGjr",
  "key6": "DwGSAMxn6sGRHrBx9y1k14BT8WQ9edjBG2xw3VZERCeWT5J4k6JZLg9zN3ucQ4aq3uxij7k4ugciJ5cWS4SxDqV",
  "key7": "41R9snCxAN88zcBKrDSzzqwfTty4Dp8aM9Ht3otWUnrMVJpF9N4ikCFsNrprCcK5sxzuWXzBv6FfEhV9jv1BJVQq",
  "key8": "57FPM1DUrB5JwoZaca3bASn7vrNTjqpPRUAALemiTdAp1d8FFDHrTKunpMFQQqWnqCvvjZHHS7WP1qjr7wYToVu7",
  "key9": "64pANrPXs4NEc6WJfQzsW3eucLLWA8bhTiNy45tEM3eWqT31CBmR3kVJSvRodpfuYmRuYR671sjpgwoCnvA2eBSB",
  "key10": "5Mm4jdoBL65oECK8ee1nFKqsKCbtyBcAKP2JtFniAkKjXRZqCe4oW69EUJUBZnTay2867VDJGRg6mQejFXdf3QZr",
  "key11": "3jsLwr1XEVQaSW8YMRZ5ahm6dr9BVBd2gt9fhk7iE51QLuuoKK8Praqx6tUdmPxwubof5EKDEEF3BdvmQFceyD1L",
  "key12": "5aCd82DKyKYd2VmRDKvYeaPUJHXNW7oEQ4SC5MjrZQuKvwwx4GXbawgQkSDH29v7AbFaRJfTEKkdwdFqYgKAsrBm",
  "key13": "5atZmRj4aHmqR8VUG1rktMzZXRydSAGycvRM4XsPc3dKvqrksp4sVtPHtWgU7CRZXqTjLUKCym9ay3JSauHBfm5k",
  "key14": "dKSDknksEncLM7F2MkPYr4nftTzWdR2Ds1KSsYWB63iN3xbBs13eCJvTWqgczaRC5Dou6SamcEyZm4todkVatPU",
  "key15": "47WLD3trLeM7UdPzzk3vHh7ZuEaC9kQ5CBmZFc9GzJusnxoDSMu6EGVyE7EHsTsdKo3oFgV3s1V8gbgFdJ13h4U6",
  "key16": "4EWCcAjySceMW23CuC8SiouEe3dqgk6QKnY1dsfs3SExRuf7wJmvqt9AK3vsdQVzFb21DgbDW1VERmRtWZLdBtuC",
  "key17": "34cqdw5vahAA1FkEzBtBkWdhSCeBKg2eRCkXepTq7ZF1KqfZNnscJ3Da1X8cYdjPDB9tf1RNsZME9cDtsGaZHgsw",
  "key18": "5BAPHgsqv1xCy1V2ZqzNbRSRn12Dtmhc9uXFUqhG8SJ56FvQ76magCcfVyPQ1ARHFFTzH7w2f6ankunJEDyKpKW4",
  "key19": "25Ufj9eKFXULmCFccdLuwArYfx83op8HZgLyCKX7gQxp273qHkdnv2wHRuEFXXkDrcB6sgRjMT9GFAJZ76mfBn1X",
  "key20": "37sCctvfzx6xpnZ8pnYSQNHwxnCqwAZsjemtBzBohLTwLNw8vdEahgW88UimyBrg4RLztDP1yeCRMXiEatVsJWZ6",
  "key21": "5hshtdJGiky3hfneYNvwTG2xkHa3Rb5inBfJevwtK98zm62Pceh5uakqSEgpCDJX7UR2Yg8UKs9aHv6T6kAvuwG9",
  "key22": "5ChJFsEA8CpHgxfYbLc4GB69QCGSqsmpA4BTiu6RraGU4sqwq1UtmLRwBrBEXZBGdEiLYawHwNkirFpBnPjikoLS",
  "key23": "3KS8HeTyQphcWHd1KDqLn696QYTTtZ9cLpt7edzuh8Rh296CkXQW2XSpvexGkTdtUj47Ph41CzqWRPrzAh8E7wt6",
  "key24": "zgwjMpcYAaq7or4GcrChig4R3CcwdXGkUB9FjbU64degUpJw28f3ypmZc9o11ps5n447iTAohe3WbuhQYXn8tHx",
  "key25": "65KSgJGgBZveG27arQJJC2p2onTJ6DpXHYFBAzozqdJ6PEVCDnDPTWpkpF2paEz2D82TGXhmUWQ2hvDq6rscEUBk",
  "key26": "4LXmzB96EbR6vHBgPiXEYnrdVrEzJdDdry8ZXA47e3BbC9iRQSrP5hMRyaaW3xG9JtimkSPeAPQSwZaqXGfCoWX9",
  "key27": "4M76YPvdAzcQq7LGV5nRHMWRbbzrLo4CnPZ8fmZnSDgAiXxw4meqz4XnR4dW2G1MddHESXpzrxuvZ51gg3qkdmAQ",
  "key28": "2H6VA6ty5o89WF3Pcf3ggNMzNTKqFEuhYKJbhoDBxf3eByk5J8R8RN958Fy6oAR6vWJ6nSXkVyXfJTnJxo4Hh3zY",
  "key29": "5YkSRK87EoAmDA99NDaf73QAGz5bECMT3ZvBiJcDemhwYm82mFAL8DXwhVHJcizpXTH5ZvMuJ2vW9GiwRUcgwERb",
  "key30": "3Z37NK36gPf8tXgQYKvcv1LrEhT5Dx4QhTWrWdpR7gtshtiHPn9wASnfHC5mgByFfudZH6D6SYjsaWTEtktNDVrG",
  "key31": "4vaypxsbM1pztG8pPdRu8ViG9vg1s88A11VV6siYNJiUpEsVdC7d7nVpz6MxZXKXpEUYz2XP6pY5VVn74xtP6LxA",
  "key32": "3uYKYQKc5c49RMEWVoxZ7Brf5i9Z9EfdichttdnJ6SsUhMK9vQKT2z5obfK9zRgbzmvrwqk5hvPXgXtpUQFXLXEf",
  "key33": "5Zkhy7yijma5NA5K3VnBod4rhehWN2r9wKKqDGeVMCoqap7XCfH1dcF7ZjUKkjnffDMBikV9FUXWicuhWwek4guc",
  "key34": "U6ahmgcWsZj9DsZcLCtqoL8gTxvMqvz2ubBFXX5NjPV9E9TwXZjAH4qF83wURcmgX35heP7MCaJ1rYQ9HwC3s8S"
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
