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
    "2Yna6RUEjgaXVjgFm3xxGBJ6xvnk4kvooi3mfnmGEinrYe5yLNYhziTMkaK6hNkqNjwfHQB1nUPvxXDGTqRYtVtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxZ6oZGJhKTBTTJ1zpFCiFKsiCTptXbZWJRMxC2vCwUxiB9Rcr69Z8cw18HavCvPbJigR3vid9iUdPG1vrbHXhS",
  "key1": "7Tvm97LbmpRnbnNNkyGuPPKsk8bHeAJaCwTdcdXRD7LiMypiicXjWv2RQFBLrzx7tz3jP3rKhT7FahEQUmzoUCL",
  "key2": "5vTsHht69o8sUkLUCnaKJUcuYprc7E6J457BNC6s8s6fLTSmgM5mDNY1yjNpBoSprmAo2L94eVvUK3dNSBiv7Cto",
  "key3": "4qiNL3gWc9znn1oavQUoRRePMEHkz1Grg4cvsVuRVLaRvdK1bBVmvomGKt6xPcWa3JDjm6Le1NU1hoq3wTMjLfwE",
  "key4": "4qwoBuhf3mtUBQLfbu95h8FEqrqkmoVoefZozYANsPRC1b3kaYXG7W9DptpZZZnHGV5CwRq8LJ73DB3Sqz6oqxDd",
  "key5": "3QUL7fj9aLqMetXFYDUFqcEhdSjuRWHGzJcs7inJnzrK4aZWxSt45VMEmHw4PVuWWFvJMuGjQVje3QLCvVqHWj4Y",
  "key6": "2dpfxXfsSRxyRGoqKXRYzL8mcx8QfAuqxvKsi9rABdDTk637eEbBwzYtVPZngeRdkkCug5Tw33hFwyoXWnca3SvX",
  "key7": "2T52r1mZPyUJYCdFTvfbtKx7wk1ud9efSyfvzDFPJ3cRqAo8z343ba7VFtttdCPQYCrm3jGox8x6micemVnrdzoH",
  "key8": "5uBpR8Tc7hKk5YKmgZTUth55a6pzt9qtNeMfpiSLM2dR9rJJcoDSmKkJ6DzUki1C6P6ZyMTsUf2MXieRU4LLB8Bi",
  "key9": "3SRUohUqoDv6RcCzHHbz3xWt6sFESkwhQ7eszMeMnHgyVAgKJXntB8PWjxwk9PQPuTH8hrhCkqxinM9xBG9tCQ5z",
  "key10": "56DJ86z9JmLLUA8dosbzNxbeFKsXRkHMdg4KFmeuN7KQ9DhGdCzXgNmL4r3d7jFQmDDeeaBSswgrKDLXBPR9CHjy",
  "key11": "4tiTcsn6ZzbAuLMtaWq7srziLyUYfvNJ8xWRB8bZYCCD6CvjLU6MFfUd8QX1Hcna48UBTvcy9La4pEZ16ZDvG62d",
  "key12": "52RP5kemMUSwuWuhVL484EYJgBE8V3nneF3NvrQugpzqSidKpSuz7SjVLZhRKJ59ht6mmheSp3Uov2agd9QHfPvh",
  "key13": "2tf4GZ6kZj4ia4LYmeiadvzJoJXSLmF9QxtnngUE3MACjKxWkujVQr8TQ1gjuyqgrRMSnw9PFKMBg9GmTgJtXHXp",
  "key14": "fgMsN5HpVcFerq4zHeXjAoxzsVQGB4rypoudWo91WJLLLX9KCGcPSdz21994cNeFhiFatmGQSgzPvRfjGwSg6zG",
  "key15": "4kRurDsaiADCNzB6TuoErHuHXnYSCcv1Foiwnu9jjUsVUbpybdwdhdNbqYuyqedzC7nLpckADAR5C95BSSoASwhE",
  "key16": "56wtVAbmmHgZcLeyUxmA5rRZhKqZebaTnogivQvuRz36V5zVTB1y7ovWFmy2NZZxsCJCHxEmu23Ygmi9UGdSTMt8",
  "key17": "4eAcy3GLvpnatxwBLCJUeh26o5Y1ztJUuF2ZeuvpVg6jVMPkszYPvTpZyvnsEe6EMYwbJv9URCSKqRCnkzt5mJvK",
  "key18": "33xjSNN5wiyFmo6RpUErQ7ba8Neq8hVgyoUBFJiN1GZ7KQGAQnBt4cYF53zCCLBAJkKdCAXLzh2YjKmgXv2Dabzu",
  "key19": "2tgbgEQ3e2q4sgPSe9GXFJ9PFqSn3FH5vrvVb9GgpfuZvGHdCdrYF3mHfBPuYQ1TQYenaDK1wRAMqreyKxM2xGsu",
  "key20": "53cv6EUatCWJuHaLgXTZfyyZgEDLumcvyGRkZ8i3sVhwR12jD8YkgDE3zJH2vc2sBPuhRUPNUG6VMfnp3fSkqyom",
  "key21": "53bEBRQd9vdsU2VfWyMLB3rqAF3yixomBFMPzjxnzxghqFxksNJxVUbC7w11Wn3pzTyJz29vSMon6jcSW7gcfUnW",
  "key22": "335bZqzC2dcsKeXyg8DGDvxvkn8PsVj481cUSx3mUiBHhVssCvQJfSmyWTCroQCZoz8nvQyXrxN4zftTGaDcW3uR",
  "key23": "24A5h4qoDbyebYsKue8QxhFc3FP754gCVKaaXHmmgfsKdofoVpVaRU6o6T2uZvbkeJJcsJ6mGNEu6Kb6o6NMsB1w",
  "key24": "4s9dFrxTi6dwh4idfxgHs7rBfahLSsEFFjmtmneCa8WzYHEiNdKXKppJjxSZnWz4VLfdeBDqqetQJxQN2QMctQNH",
  "key25": "2VWxPWNcZt4tHqQERdUzkyNzL2FCWuABPjxdEVozyiVBC8jo3uPqvR1iFrdKhamt2bS5r9j4qjrh3pqzhLX2ERJk",
  "key26": "2Yi9Y4ULwMAR9iHMhTj8C1p7knXD8iM1MubxpaZddKvgMzpY3C9Tn4mgn9fK9fcKB9UYWen862rhNFva9PB3oo9",
  "key27": "erCenyFvoh6Y4Ub9vfHAZy9uN8HaxrfEaw3mzHCgAJyhAGuVFSLkaAHDPctUZf2ck8f2TLpcbUihSNWhCHD2HeY",
  "key28": "2tL2wdQisoVD3u8o5MWnbr2t5YVeyPpm4mw6kxhFHpk6iwRhsaxvsdqzq6GGrAau4DjfyNNG9jAJwFRhyKrjgVuH",
  "key29": "5A94WdY3gqRnAvSf3nVoEjQWLa3z1kB5D2fSYZ8ZaBqp1WE2LpjHCkRBzhtSZuXHMUvcsakgvmsqqLxpeZHQonQw",
  "key30": "3yHVxpMfE3ugS2bgD2sPNknnfTGEUwsKvxk9Ez4mYfA4f7BPCdWiYUiZK2nLNn68n5X1xBjc3bNrEwvtPUCWXvEs",
  "key31": "5kNFUQwbdr5PbVb1dEhr6Wm3ZY6LVfzBeXKauuJXLyRuKfiVBansqA4QuTXQ6aZPPQ4FxudxVDR9VrvLd4bszR6",
  "key32": "66nFYpUFmiTQb1uWGmGcdZN3KJ7p1VWJERkwGoEu4LtJxhSQLtoSFJCggwddxknGD8K2kTseVjaADTcpVpQoZRSB",
  "key33": "3ehM9rK9GJot7Fa1UrxHraBeYcko3PqTDn3S5cb7qRRVTEWZdYbgxY1xdWctv4jq99ueU4r11mDfU5rGtGTWZtYK",
  "key34": "4vQ1NGCzuUyNggpkLQGJmhqpwafXp82TexKzfLF4iVhAR5psUnhmVmg2YkJrBL5xrwFPnmm8p4ekQzp3MiTcAbyz",
  "key35": "3VECbL9b867NDbux7aXkReHpyoAjJFu2s2oFsuFtx1cEX8bVbaiV7e5Zsfq3j8zRUmXm6v8YTbgWGdaTxJ3VYKpJ",
  "key36": "3Tx2TXuoQ23HUVrkiCLJEGtYJmcHusYPi38wKnvisx5BtamxBX12U9vVSpQW9APmFatWjMNdLCUpi9H4CZjH9EPB",
  "key37": "3p2Vcrgq8kSCkUgP1pdocHQhAP9xqYUniZLUaB2CXdeEdNJVdq1ZCiwfbMJKQSjY9Ti89UgDkfPUW3YsDqmN4jFP",
  "key38": "2qB4yuhXq38LEmjyWUNQNit8SDtGPx1aX1U1GffCxvPpKHYP9K3uShURxExy1S7Zi1zipTB8m8U7EuxKw8AWk49V"
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
