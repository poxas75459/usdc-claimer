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
    "3raNAPsHxvqG3FCK2T5krDrpmN4biMuAG3oBH5nCbqyiqm48Gcmi49reBbAXfjhWaxAFYvDsrwSprf3URQCpSDij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkxYQVCs4e9wpi4K1eLkGWxecUjGyGM56JBxyJ6q9p2VN5jvWE9JD3woFLs8x3q2nMb9iaGEL6KxnuY1batib14",
  "key1": "3raPiVXvcSNKWTiSJL76pjSRSf1w89ooiij6VSBRhyqQga2TiUBFZTviyhUuCMjdxkK143h3VY7qP4ixxXpP2De1",
  "key2": "PeNtGzdggMF1HA2Kes95SRX28eLoyXgHc6Cb6JdcDryfbsZFi4Difm1Y8cg7ubGvyLGZ1p6rN1sGzoEcFpcxyLf",
  "key3": "3EyUD2H6yjbgeqm7bCB1NmQjK64NZRzvneoD1FjVo6ZjvCkgmdmoRogwDhmTAWXap7qSwzpjwaRSWeiBKameJFty",
  "key4": "3o3rCzDw9RU9jfw53KQztsuqXP8quzGLnWqWFzXpp7vtPEgvmzX3RggWHp1K4uUgomumDpVrR75npZRUGfV9JQ6g",
  "key5": "5R1yoU6sFUV5cPaVa6renX4Tg8zMCiXbWD67HjNgkyWjHevpT1W7pBX1zSJF7EvNr9q1C7UK9o9AoUHKGDzh7BD3",
  "key6": "42o9LJTrGH7vjWT1DSKgwPRTn95LxHt5bVMSfsAFzrirztf6jan3D1bYb9yVCimH5SCpzQHXdbSUhnMPQZZhib7W",
  "key7": "3vn3TH2diSnxHBp4XtYMhynbeLp8aR3tQSdToRCDY5SoJAjrkVZ8jczMs9cqABoXXTKBCyZECzXiXU9EbNjsPJjJ",
  "key8": "5V5Q9gUs4USJyvWAmmkNy2cQbs3K8m13G5Jo68HGF65GkZwYxR5upLGk9uEBXbxr7QVHyvXLB2QMax8s77hBaVCR",
  "key9": "3rzg8JqssCar3Ujxt8mLutsSPGYBoUUvpjBRN2mGEaPuihG2Lz2z7MB53in2YQB2kQBvU53mc33NRLFiLT7QyVT5",
  "key10": "3M4nbKvKJGPeazCDLzJJfCn2Yi8mak1QTEP1EhdfVRT3uWdSXMnUnMdhRuTgHh9c7P9SV3invHYA96vkEtVXntbb",
  "key11": "4JdzU3kCEAddqEAo7BchRUoGaFPVN7ZHfFARPTQU6rnes78mebeXPFQKvvSBFznMntTNSjjdgVdCGWzaGEXVJqKU",
  "key12": "39ghtPm9n8FAc94WrKeuGVP8cwgPhHa1envcyUot2X8AnwWz8EGcNzWCbDurUjWEw5za7QRUJi9oP6EbWwrTFQhV",
  "key13": "5LVtPvxpJYACqiTEhKDVvYxu6ypPVP4avGwpkBr9QJqXf3F5GW9EeStQ7Kqe6vhcRjKomriRD5ueYeh8cGhuyV3X",
  "key14": "kizMTMwWvo9MkHZ5zXpUcAw74UYf5LMpnw2wSL2xxFzWwubt37ZSzfm2uzM6aJkwwWQ3SUgnzeFN3r1wmwygCSZ",
  "key15": "63KVJTNoMeT2DcoYaDJf9PYGbVRyKKq12yQLzGb5VVsTuTiNs2D9smQYNumHBr5USeNLjYfkpu8FJgzHDL3YZ8P2",
  "key16": "56PqBNMGK8Q1KkY7e3W9FhU4YEDCp4HsFxcxztRiwQzjqzkv3frZmsJTxhTDqoBKWG7q9ZJ6kkjJPbZHXYLWgbJ8",
  "key17": "2WgrRTGxHvBzbcS9sxRb4AJ1AVUJ8T5DxAs45gnymmqcPkBJcZmDgRKdN7VPdC8iHbsPJ2szwE9UscCW9A8jM5df",
  "key18": "2JTBypjVVbiainqfDM5YA8HhyjHmxeeLyni4ryvSvGHDZixX5x8UX5FUPdi1Wj2YfP9mbPzCeEu63rN4bxxTvKQ3",
  "key19": "5A6w3LLtZ3FfjfvU5XhbyEtfVo4VBtWzZjok176tPkmsi7PRdYza1HpZsXshmbPzUJKZiHaaSiJSGvw73w6LpwRR",
  "key20": "5U8CSbyPPMenfLG3H5A2gkchdP1ubq5eTZ5FjeyxzDGFujLfWZ9UjvXQSun5npgeymydyQY37MpGAAKhcqqmVvwe",
  "key21": "56hVF9RDT29g6kbKJ8c3CGZyjpRuSxqin3yGYp6F7CpBsXxEgVmWK4A7LQZH8Bpon477LoRGaDVGF66tXXBdYBfr",
  "key22": "2seNaRNE8ADH8EDmZ7TRXnxArSCekZmCnubCtBLSbewAoJ9a9RZyD9ZY5acz5zat6Bi1zm386pSQYDckcTjW2oXD",
  "key23": "4p8HbWYhGLhZ8k4UH4CquHHRRw6TfBrxB4NEKkuZPeSQx66kiPP2MWNEAsmwBXFqhTHGKcXWNcWpxX8wLSro2Zwv",
  "key24": "YYpd44asTEnSGofgFq9mYDv6vedihsgTHCdYYMCHhD38SnGD4mSybDC96sYi2BupCfERf9RMhZnfBvXZqrjMui6",
  "key25": "4KHcLtLyhL6XYDhz9gTaKv4YLuz5aNKJhpFpxTTrd2E4AYZ1TfqtY3w139di9q68DfbxncQ5GSGr5PDPw7K7JVrR",
  "key26": "2cNcRP7WZo1vpVaHQJnaTha4o2HRunUnkzkpwV6K8Qd2vj19F2DgtGZHGqmyuzUUj5oiYNk7ovkubjuoFUqhXRZb",
  "key27": "4rncSePTpVRYbTwvVeSwTLX2d9d32z2mG6XixrHGx9hPnZ3wFuTUME5BRtDtKmfKhyjQJf87KtfYUrEQCXYwejcp",
  "key28": "jc2WBz4ALdkhqsn6ac6yXKLNRKZMEwD9s5W7gyABY6mJpU6ksyMZpW8gqWMCpfgRKUdQ9ebprgqXqEWHKc6abdY",
  "key29": "3Tne3gvGDdzvtmL8Lcmcr4UvdTqg6krZeLFA8FdHS8mzPXkpr7j3Q1mvjPaBDGr6un93eWC4fDgEszc7bmftPs4",
  "key30": "4JY36bbZ9hmp6n6AJvRJxtqMr1wkHUvkjSNwUFio2ePw3Qs1jtxP1imWjZyuyLpk6XovxxFuSEYxgeQqHd6DdHNh",
  "key31": "5rBWR6kVrvrw1kTW4opvEJKyHzBt2BuGtkhLV5HXCXd7cT3z14ZdC7bWACfojSvYjVncvZ823MQKmdQneYiXEhMP",
  "key32": "YVJxPbvis5GKsV83cxaHMhf7hmU63KJqy4ELggGGNnFMopaRfc6TRqzgi9VGxQYcsTJoKja8ECy8ebYqRrPbMwX",
  "key33": "3nGtYzZZzKkDLWP58txsAHfULw2Z8BysnpiiWCFK7BFDhxEeM8kGiJrhMxwY2pt5S3Dag4xyfTqL6xzhfiT4wTht",
  "key34": "4GP6t7CJ9PHFpKjpkDpYPnYh1d11fW8kDGXV7Rou87FV6qx9Zrv8c7Q4FJUVNyML4YrZLHRmkos7g8yYBwi5uvqh",
  "key35": "3ZtnfVGSzG6uJs1rA2xQvF3aWahAojeVXNtoFnvB8PyBtz2nrHa1y54V23uaq6iFzMf6DKy2RXeSfNyzP8ZF5RpE",
  "key36": "4avbcaW8UCKFqWEreVSJJaTimFoQDxYNCkRhKfYox65reCxhJky9L9AdUAW7TVaibqLqjQY3rRrqzpojyJ3vdebA",
  "key37": "5Uz6zeW4nBySnzDSXWk3hHKdQbZCGY4ejqPQNRFcQVgAedQnuJbAVjLEgCaPzgGFQQhzNG45eNrsYsd5yXViR6D4",
  "key38": "BvHepx2dj95quyHqFeC7u949FQa1MsqSxp2KH4YHkSbEcLoWLKf7mx88NA9p2Pv8qW8icS57ZpCLi3RokyAm5DJ",
  "key39": "5HX7Kxs6wQZb99dHgBuxdQiS73XowDcpwZzTXhQ84tT5aHUXjv1VCkBNo93kbZ5xs17FpgK66xGLfhrCMZckJwV",
  "key40": "36pA4xBCyKUHXPrUG41rRsnmTN7iT23HNQ9Lr8cd2DDZz69mwh66Ak5RMjYFQiPQa2EnsvXfZfmRvsVfAiQ71gYS",
  "key41": "4w3iTHFNnsmfCR8bW3EPN8UXxBYX8kpztC6aK6dhhb58woqtRvCaYCujvs1q7A5VyZwxDgdAnKMiAEXkWVQbWhys",
  "key42": "217p3Vm3xixS1neN1q2cKMT2angTMWBA7P4wwHgQeq3ghCja6XPdGm1jLvhhyVchJ1skZTEeLohq5gCmfCNsDeL9",
  "key43": "2e7t3UWJfaMNhVTnQm7tzwqUMqiQ6Hf5KGapp3pBV5fPTVASw5tQ9gCJo9EJSVNULEV8KULNJLX4LSZEGBRMmhE1",
  "key44": "3Lka2VCrV4AVjdfFh1iDKHSmsd1Dj8Y62PSCRozp8KjyMPcKBuwJ8y7LaFsQctwuxAPmrVvJsXqbL2qRy15GyYLN",
  "key45": "31P1ofUUSgdw5FwtYJ1kDcjd8Xx5pAaT967KrBfFPuB1fyk55A8wUbvyqfpcUFFeRCVKpgV5GJaQThdap4W8dNwS",
  "key46": "3dX6bZNmXHwZxSgkNBWWsRBPp2e5EgprQRHoEDDC54Wpkp4dDyErg8EUABmxBT1dCaR52DCer7nqnbzRsXedu4YW",
  "key47": "5hsLbv2rvEmCjqV4jwTEmQQvprhm18jFfBWCVQoBVCmGLjWyWzajp4UnVm69CKNL1p32QRJzmYxuy4eoT8Ct9i2h",
  "key48": "52ycFyvL43C6weyYiaa7vEK9AV3BFDqjm2JNrR4D6d2Vj1NZ2c2C1tKjg4PJiAQo7Nrnh4NMGrEqZRo7FxAuv48Z"
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
