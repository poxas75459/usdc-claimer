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
    "4Xtg8tyijprs8MMVi7L5MhJBa4T1WAqGGt4d5YW9c2PSsmuaaJVgVyWP3zs5vY2peQB72XpEBL4bZhUrXsiBrvQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvbtmBk9W8enEVV5Ch8zU3QKduWu4QuU1W2Jx5zHtBQ11NGsW4zusc8E9PgCGJcYFZuzn8zKRY5uzZArr11SUAd",
  "key1": "7oq3Gh6ov85NNHajTCf95en9cQTpvQ8kfn677JYNp5qEQGG7tUUK4ZdrEUGMPe8mt6CCJ2yYEPgujUYQhocLkRE",
  "key2": "4DApLZ8dFYFM7YLExgfXn26fR7sVxHa6JRoYBkkp6wWsJYC4vFsVdHRoNcRQyZUfWRSXcRohijouRqayd8ApvKhK",
  "key3": "3r87f793qjwJiqZiVGxmPSdS83Fs4DjoHWkqBWPnGR4qNLe2qSNHENEGFxoXXQYLuTHyaqSWHdGkiYHCNm9wMbDG",
  "key4": "4k1S36KMtajFx9Vp1vwfXZHqcdf2cohfz6XfgyTJLXzGgLZcYVhbi4PhLGZvhCqwBtBxMxK7fdCRhWv5Nexx4XDc",
  "key5": "5DGTBqQRyLfBJDgskFfzhqB8RLuBZbfXpwj1dJ7QEKuSGx12wEwwf5NYyjBTCaCQtdG1wkLo2dCX1MM8DFr4MgAv",
  "key6": "ia13ke58RfpauA6EsJhpXBRyvCZ93ACtkVAqGs11EXLXhYhCzjYzhcAF5Vu9RzHJ9qrsevxp4F3Linmvb4y6RaX",
  "key7": "3YfxK9sAmEhTe6tuM8ZXHQe7SBQin5pSTiy2e7PvPwfwKsVUXJURe6wLgpqQxr2PRo9hmQ1uENTtcwUo6xz1KFFq",
  "key8": "2pAi82vi85bTFsi6jqLdgLfE6CuQjmYUs23VJZzyWQpRj5mDFerL8oew6CUzRXSZBDVMApYCiApCALDDKLYuh22n",
  "key9": "3eEtzPxDU1rGAMHsRe2sq1XotKbnkSAzMgND4t52iZ7qWwAZKehynbwJ1r2Bpncyvn256JhXfRJvPUT54x6DVuhh",
  "key10": "3mzYX2xRpXx2Dd8xLMFSJ5EoSXQDGwfeivzp8uK6aovLTuPVADwCK6AXqNXazw6mD2HXsgzch9UcUd9yj9hDMvnF",
  "key11": "3A3qwCw62ti7GApwfNBTwxtvLRtjTTRwv28pBMCvA3JgnPT8K6jzcHAuJsYhq915SKPAKyYt7kowTYTJbG7EmExr",
  "key12": "2AvuFbDBq3Ron2SQYzd2XDaPpC6Krx2cH9vr5XXukRAPkzyaB8j2L8aH1akEFv7kM5rWXnsm4mq8B53pLeaHS4zW",
  "key13": "5HmXmHMHevf3E7TJXSuksWwxxoPV9jxrCaaXpGZv5gsWex4hfabugqaceEhSwLMSiAX7Zrk2EEdtYfUchQJknjyz",
  "key14": "2bRXYMho57hrimpNDygTrT5QxAvK7qin9v387rDVoW5uAqL7ZhkRqw2Ke3ajCABvjmS4MxfqebiFaA8wzVEUNAbt",
  "key15": "3aKaeX9f7Y1qY1JHU5vXenpD5BB6tY22TfUe1CjjxmmxSmYZye1dpbZ1ogegQka9iLG1gKPQCcCvXKCy2K3HRWQ",
  "key16": "22esgcbHQcsY54gVjxQ7PXXMLQyeNfhwCFkMrfhG45hLrUXZ1RmZRp6YWGSZ1wCUBEMD5UDWaqhcUxvTHRfr6wei",
  "key17": "uT47jP2jWgsZSyAm4r5duYexdWzJTdv91pxeWFJBZajSLAbVMzXr2p71RMenCbDSJvqf5cqKJpBqrDoWcHuYzK4",
  "key18": "2njktAAawNpnxZyFyTat9aSsU9vNeJgZnQqLYUmsRS7rftVjQkY6VuT5ZTZBXLBXjkvb8x9GZFH4HZmUa3fYPLru",
  "key19": "46ikurckTZeemsUxvFeCBhLtPEaEr5bwavoXqk9FFZBoLqNUcmB7BjmpVrSHqAu7pAdwBjQAJz33jMwMuYdTZXSf",
  "key20": "4SQAu8aiWUY9rv9aoVXrEabozBXYXjmCLB8ZtEXnb2mX7rmH8ebo7H8DjDaaV1JvbnCyZNkzzjus89qYs2X7fuC5",
  "key21": "2btQDjMdtTD9trs2ZrZkCQnhAdk1ousT85DWpNxPiBfGwNdcGQz4Cf9M8CJDv12EtWEGqAZiPWAzw8dxfUN66bWZ",
  "key22": "5GxgfEtjuw9hVH5RVXLuQdFGRFymqLtvCkmU9HDbgQLxX4HUKdN5Ka53pQxdxQ1xT8bdGxRZVyv4WZ3bR5c7GBss",
  "key23": "5AnmNNyJEXDz453RjjjcAnCxAtnhtFZ9xuTQfjafii58wSRb7q6VAMgo2ewsUDs3t2wW1mBmsuZYGYNfCv9vTATw",
  "key24": "BcSLMM1eK2pHdJ4ozbZ7Wyc5m466zowtFKJc4NUDmunyPgNSzrNkwKKe5EF8wcpwVzg73xm9CUS7zxpstnLYDfw",
  "key25": "5xFGEo9BKpjw1kyFLWnsvvvHiZ2pBjtZtqx6XkumQZDbeHfiDrjGdavffWncqvHx72mYJ1vdNsXy165cG5bNKJga",
  "key26": "4pR8spqBnfu7Djz5v9J5P5gDUHrP9EcxtWiyV8D3zHMVQsKKW2cS5bFfvzgJWN3kmQqhcDEkQK4yG7rgFMuE3aa8",
  "key27": "5KJW7wofTEjVuy7PfiEGtnXoShfNTCmHsuBVH6GqU3qQ3mm8rMyDRbbwhsvC7iKXYtzJTgkUun7jEBPEEcLZN84Q",
  "key28": "2koWNsydHSYucDhqsgx1ntBc1YKx4wWmmmEkqwYYVvjgfU9XHPZ8bzE2NvFa11DcKB3r6544pk921xxLHbJb5KGb",
  "key29": "2w8M9SjzPVrAFZxX7ikH7EjDhWevf68KyErG4JtvoxiamRrwi8Zhc1FB5YDnvj8DWrvzRMx33Po22NndXuKMCBaE",
  "key30": "4Cv8ZUpPWueU647AGSzgu5cF7VX3EbXoPhms8ab5yZTqqzveW1fyVjTMGpExFEtUmW8Hovf4KgjYhVUj3dJSB9Dp",
  "key31": "2bDVrbv8nfzYxNBVrwJN82uV5jDMKcj6y2Tqtoe2KjAscSWKHcSjipQbadz91wCR9hpi35CxnbfeBRfLusUMREC8",
  "key32": "3JZKrme5yHmv9pfMwSKFHLoaE4YfTMahy6BUeJXR3WrP21ituog4U7EyXmWBDWQ9EZkZrNUoYxNZzUxJDCr48koY",
  "key33": "2aERZQ9r6tV41hD2ecP1gU9SEsNb7b3ZMwLi6wjZpT2EkXeEt7qWPzuGAuYz5YrsJD9QkBwR3uhQzGLaeG7FXspp",
  "key34": "iYzcnZT5TVXxFMNCvzZZWE7e2UdCQ9VMXbtFNpJxVu5WFKrrN7zVA1w1EUqBGVxevociMJ1KRfcRVb32Phyr7hd",
  "key35": "5cwYo3t2YuVRxeMqP1WSx9vi9jq4rsKWB1TsbxUXdDYesubeyS6xLALycLV6cS4rjDtuCMVy6ui2WpnuoGgn1Gxg",
  "key36": "3PkrRhdDGJrcFpSYGXCAWf8R5RsGhFRzFd5uqnPic87RUWcDssZWhdXbRA5VbFEMoSdfDhsNUEANuQmAcjfXCyq1",
  "key37": "2zdASZ1Bsze3J6jjaYapF7gxKCuZJo2gWb49Z3Ezvgv4BJqmC4fjLXAt3BJXXsNnPi57w2Lv5S2DXwnUronLfCDj",
  "key38": "3gbQEX1Lybo6GcHbXeMBgfjobYyG9RcwhKLLemU3KzD4nu4hSTjLvE7FxpDxKN8Bez9WPDPtwsuWWvMFugjiCr3j"
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
