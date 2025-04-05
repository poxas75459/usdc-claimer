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
    "4Zinc8hXL2gn4WmUSitFThZg1u1E9g82C1UTcDJwKsEgXT8FpwK4C1b8xDAPKUG7GjiP7zPhfvDsys7HXvWtG5PR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yk6otzyFDw1KRRZaQXSEoA6iaPdpfTSj1TAnTDUbNDUvF85DJaQBGrGE3oSHawXoivBJ72ej7Sp8ep4F7hbdHWZ",
  "key1": "24aT3GQAAp4BuWTmZ9Ma2YJeLhTJcc2iJvhnvbXLjGkyRiRgANLcUL1HNUdeXhccJLcswmtochTMdRqZQmNs2Gd7",
  "key2": "2Zjd3Jc4mvS4b49k4iUbaHHhWD1qYMzFrPZrjpPumXKrnUM8LzKFeWftEDWS73P5Kx1A5CaLPrQPxqAGGXVVQjAH",
  "key3": "4kmQov7Y1oNZJdhZQwCm8SptAP9abKNECt4zS2m4ebYwPXNW9UTHwRkjaeh2Cmx1rcBqotXXSqqUBA6KSUF7gBw3",
  "key4": "4hwaoBEffRwfiWG7UWam6vRkNxZJVCsDvokXfHkph1qdwb2YvExWSBMUtupdTPFbeg4fYDZsDdb47hPMTKGnrtZj",
  "key5": "2SRsjaWfr6MdDNnqPdkUwkJTXFWfVTUBYvqhnAxJoMPfo59LsucuVBVCJzEpzFSwdMQinC242gpJgUGjpuyTQWTJ",
  "key6": "5nndjPGaS9Uuw39CGuvdyCsGnz8nZz4ghPqQtBivKwbFT8FA4KNjJGGu1oK9hNieUoZfEZ3UWfEKzjLUJ5gJgBxc",
  "key7": "3WqNedfuBS5zSUDPzbdjAcj5hJJGXtNRFgyUannJXfXXz2Y9rxp3fekoavBmJUeEDb1EFy2oWmJBqnL7TpAyDEUK",
  "key8": "3zwJJFRbCRFHhD1fZ5WLRQLRmW8McDEnjzheze3kDTcBfCKJ6KMAhoYg8pR51zXsL7s57qSXjje1Zfpvx7XL9UkV",
  "key9": "qjWS9fhgCuWDMZeGoj4mnGgnP5jwDbjZDPbCoXAs651QaemZ9MzQDdVUdukmptTVaY3CyLSKtpcVFL1nGNoo5rB",
  "key10": "66vnPr1YNwnJU4WWgyeUir61zeNcb2kxVtHL6frjGgtKiwV5SupUbMQ9mePeZAZfQi4Sr44T2iFVQKaPCXAyutjD",
  "key11": "WnJPHRJKpPoScyT7g9ms3vLKXeqwCBnPCtfcUvgQUaGnXW2SuLGWeSCQEpi641KX5uN9TXHVhZEK79R8Q3XYLFJ",
  "key12": "43bJW5CgVkpKCNtmjVYpLJmvGA2ammVwVLKHZajhKyzpbT6jSZsuNjnq8HQoVZzf8jdwFFtsi7rnnY8LHxVXrSCq",
  "key13": "2CeThGfAFZ3WXd9cjBLNZd5QRZbMkM9QoPN9TxND8awCt2YdFUky2VzmFstb3txshmF4PuSE5GVrzfw2Q1XtaMm6",
  "key14": "iwo6ecdQF8JKP8tx1KuZSoZba5reNoKHxDWUShkvQxx9gTPyC3UnYUCVej8SmMfEKnh7BpSUGQEHuiSBg3V96cq",
  "key15": "4Agy8j4tP8zd7PmgnMS4vCX2DHLmh7io42H1MxV5C5fuSmQArPMd7kg7NyySddy9Esf2UdzDgKtSXbaUL2T7EDXa",
  "key16": "3eLcQ1KFc3tfx4LAC4ur8bfiV3oSJFHCBC9JJ3NbScaus1hNMNiYSGDm4ZVLkczhRxeFiy16R4VHNsq8dYVw5T9p",
  "key17": "41gRsCe1poWYR1A7KZixMrxArhHi94K5g9fZdiHEz8LiDzq9RBxMBQcocfKxjUArgRaD34syLPJoYWpZEmYndG1C",
  "key18": "3B6B5EZWMZu2vSyemNJf21gwTvE3xXoYw6iYjTFmjNAjoVJAT8Dq6TxyssaynG2HLzFDuF9HE5EbsX3LcQbTx4gK",
  "key19": "2crfah6i9iqj9krkYRCAkkS4J5d7SWQzNQGC6dR5Ye63tWRGxBtd6R7R1wxuLPwG3L1j6YZnFjcSidmxondBPs1B",
  "key20": "33UV9jBZ8CfWxddwcgaXcDDDqercxrBJ5Y5k81qdpYn5FwheHKp7nRW38nM62u8gmJk7jwoRjMYTZMLJa8rg7Mqs",
  "key21": "2QkVimi89ySByXZofyrwL6NCX5wBcj4Nck7CRte84dNPftYsHPWW9KZnVFLxyLxjcPKiYDTD36knxjLi2kUJtNLe",
  "key22": "3ywh43e7gdFijqx312LUPdFRDgCmd7ntUdryTcj2uJ3ijM3ZYTHrGRJX11VudNpaV13CPosDdQXjRwZUVJ965oXD",
  "key23": "3n8HF1Mq3F6pkLLsFfb4HtDaQ9f9qFkHyjsfBdzNZ3oAwh6kQvuLm4LbE7ejR4TkEnStJF963zSMGmd2phb63iKg",
  "key24": "5yKN1DjHoBryVwypEQpeJQoDp6EftttdyjbanPH4g6Znm5cT6ZW76rd6X7qdnBksnJoomHpRzdLevYxPBw8AmEZ5",
  "key25": "5EqEXkcjhNgJEVmJSzCiStPhkyi6FneAwFzMwHemstHMwEYq6bc4MEab4nyZ8Y9Mu3GmUtZkQaKmUrKEQpqDvf29",
  "key26": "gCehBnURQYDybjMgP4aq1yo8qYkvbjUkVthLMyMVBLj1SE6QnS5tYvXXGa5E7V2DoZysNm78227EHXnG8MHVY7c",
  "key27": "4i56oJZZ7GNSEPFEJh4RCWNcYB4CotjiTLcPVWpZn573TAQp3tftwLDWXVgTXqTpq9HFkQSgbfiFLFppy2tojMoM",
  "key28": "j9VPr8r3GVK8MPKNeEAgNoDheoeyvvT57mNdGsdAJT3LZusQKEw9q4VkfPY91QPs5oCe99Jzsssa6CNsvaEtzuo",
  "key29": "5GFpdCzrvkWbVFkjc5HZJ2ctoninnm2wb8yvrYN2j4eQhvZL2wNyA3jBbhf98RwAh4ot4w2MDZkvQvcYNkT6HtGR",
  "key30": "5HHEZgBNMXyampnnRMGNPuetfMYUX2gCTwg2owRtyh1LmYT9wDHMJFdE4gue3qoUqWGeLhYgC2vzjC1yGREpvLT1",
  "key31": "2sir4qvQ78wm876XpbJL6tpcEuu8Kik2K5KR2Xvdp2wAFxbfTJeaT9Qb51exTeRrB9P4cXTqBQba85XgF64oxfoF",
  "key32": "419hA4EhWVFUfxMbArY1m1UWpfDsYLKQTPkozHvnuqpxb4T9wKTmBdHd9ekKZW9pk5coBHzXcMNen8SiXLUEJ68x",
  "key33": "NRbK7nceNz9pX4KpC7fUV52Jq23T5BW52Gc8iEWbcQuyUU6RCiDzg6PtiT9Xs3W3YNSfU9svGWpLXBSoB3T8f9n",
  "key34": "4zQSRwjuzLvhtHZykQ74QMcim2XBiBJ7eU9dcH42zdcXP9Va4hJAD2wtskumMMiWbrMedpksiUAKNzJceeHkeQdq",
  "key35": "2Jf57SzzWDu7b3kPfAM1npKLTpzKysqQQouosMzKFDYjVgx88kJjvGMVsnpqgE3144rKB7Yj2Pzf6AKkcXdyQ91g"
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
