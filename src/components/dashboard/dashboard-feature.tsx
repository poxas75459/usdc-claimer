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
    "3opki1dqLeKsDxy9satRq8X2k2pGuYTjKj2uonVCtdZA6XaiKrW98SdjCgBWsdrGU33GWDM5TyHgruao6XekKArP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53D6kkGkuUFd8U7C2Z4S3eA4cGjjgBrttyJ2HvC5JE6HnwjvovBHhP4o1V1cV6nQtcj7Xx9MdGraWXtsz1U5ieN8",
  "key1": "2ax9pHSXoteGjw6EraNm9b1i1Jfu9CLk96VHoFo7LVodJAT7UZuEyqFcWvB2AqQTDCbiF4M9QQWcuXGk9t2qgTBW",
  "key2": "4S8doDtwpNLoc6EFBrHsYZVh43GKw1Ka1Zmetk35F96Wasn5fXPBqhmKzvctnkAexmGSQoTYtEZMsempS2rUUnf2",
  "key3": "5XeQYBeGDXDogrVvpjPgnP6g7Z3mN6yZAxu5oeJGvdWywqbK6E6UGE2S5XHwj5jnccvGD1HRXLrBmCRHVJwjH8Ay",
  "key4": "25fC6mNf9tyJsJJmkarBo5tRphFQQKZnwz5tXDVv84M7BFAedpgiCSuKLvrNHxsCZZVybuqMJHMZjVSX8pSAXH7u",
  "key5": "4xa2HGRG6WA3FLwo9U2sHvTunwY1rTCnf8VcWPmTspv2hsMMYKCtWYZ9kQXBankb1CVotCZw2DkgVD1WxUbo8UPi",
  "key6": "uLmMoQDPGcifr65TXpFZHSpKF92JWdUJrFRimm7P1MMHQuji3wAWWTRK6cSpx4dmJYct5oKWH9iSHw2GDUHobXy",
  "key7": "3RXBxw4bYesRG4FCBTLXFgxsqsy3wzNEnU3HzPvHCBxJPuWHw1VBC9ChUd9EZNpRJMB9PuQBf9dyW95WWjL4qzth",
  "key8": "hrbTzQkQyf62diFRqSLW2iHZQMjfMRMCa1TP5hz2QSEhdQdxPfWRrkPH1b61c8oQtY8gayEWasbEAA2LtGx1tKP",
  "key9": "HXCJu86EvPprY5ztxKh96NiCsMyCiNoHVKk1Gi8FPnQxMvAu4RH7uY4YJmPzakx4BNhsXcDjMv4vwmp39EnboCu",
  "key10": "4rr6xWP95hgetYrVHcX9BBM26X8PxTNshyCzrug2JzuF1BRLQyFbTb6Q26CW7qpfMJMxh1RYangtYtvv25trJiU1",
  "key11": "22S5w3UmQy6pqJNUxQQJs42skN6agn6jHZRXWjGLaFDwJcpNBkXx2SubVspKNB75Zwisdz73q3Y1CmNLoSVwReBw",
  "key12": "5NWvB4nFcgfsCCzva4NGKo9hmZddvVG8u1yZHqCxAGDPyKeaFXwcMJbNiwKjpJ82M5PohgAyxnJiFf3jnfUZGP53",
  "key13": "46UMh6uDWtn2fQMWEB6fw6K2VTZrZ6qNpjFvih5uaiFYQiaR6NkytUYsrNG6pkfu1KcBZUASgH1fwgjuhHBm7qQS",
  "key14": "2wJ6sChJGaa7SrUdWtxPBXe4vUmsYagn7E2Rk89A6nSbuk413e4FDxhHeqTFmuBAncqbrQXbtAdP5ztQrQEH58Rx",
  "key15": "4wms17etPvf6JqQnCFLoYAYjAfzSSGCC3DhuMGuKhHBZJww74Z1cf7S6oY7abcr8QJgMDvxVmhioxTXbRiiHWTLc",
  "key16": "3cjzmQhRgXEzxjWPbVDjPwtvAEk8mhMVCfVez5qGweRKFH8oefc6ckGmjEMoYupqSyyScH7CRkT5iH7A2EJ1jt3g",
  "key17": "3wJgHhz71bEzcCtSKjWyVrxL39Wke5eU58rRU4HAoQz86Av1bfWAXKg8vMkK5nNbYPEcFj491RS4tTNpUDq9pXYd",
  "key18": "2QpqL8RMNUqLpcFRw8273GPBGgSdxpz5tyJjRXYJskwXACki2ULaeApHaDpmr38shYXLHA3aLoamE2Sgppt816J6",
  "key19": "qSBUZuBiWec3zfmyW3Rs4VVd7nrKgGTSqczmswJSHEgoacRELgF1zcnnfECeggoTXpszkCCaNznoK2Q2b5m6QWW",
  "key20": "2m3XmKGzVt7C8uCB5L7eK6Dce1QqMZY7b7kqDHSQCQQpH6yTT2BdL7JWsuMYaSy2iP7hNZqCj4x9TxAMQt1w3Aon",
  "key21": "55q8QAzb1UQiuN3U8F9f9XHzuu6x4FmvWvQesDdD1KcA38qhZuX8H7kGy2uoL5wtZ1VHHP3KB7VqBKb7tygD1hR5",
  "key22": "2VghYeSvSrjYdKW7xkEnqawc5ZtQ2H9Do4ed8eupqEGYN5aXw8TimXccSY7zo8ndcsVvFZ9bB9W7UfCyK1gB3z6c",
  "key23": "4kpju8ePoBy66UUwtcS6boU7qNSCHhA3CBY9bCsZGqcAKtpv5jqGuinuA9j8XFfJptBkh9Z4Y2ped2mm2yGuQESL",
  "key24": "5uR1gpydxLVE62hugvqbRvNAX4yyZbSjQ4ToUrc1X1wfQvQUd19KA1Jp2CgwxeE7nMTLRxF7HEqaEtmJrq5at4Bp",
  "key25": "3gvAjv8Sai825omsrxMkTh4Nzxw9kExNxxjXShCuGPTL598KPqeNaVSG4ANP5VwSAYoHgFBaHKC98ErtD5X49RDh",
  "key26": "62B8tLw9MZW4qpL4oodu5CWZmX71nJehD9pidKEi3het8EACQYGW1Wev7Bzv3njQzf9nvWKbZZpnz3fYxJnPyT14",
  "key27": "3gbmBzWcstZxuGF4vGkji1TtV7D82jq3uggQdjqb8j5RnjsSSjPzPvfkNGjhrTvwf4az3q7DgnshJSdoq4VQm488",
  "key28": "3nhsc6qkHJceW2677PHPztiE3qHK4oHrCTVb8RVEwFeiH52k3tG8YgvxveWxed8uQuTwVGea8JPrKMBMua8NYXRc",
  "key29": "4iPnoGYaJwK4ix2sg28js6jMGhZr2ipYEfr8k5x2wwcQQppmvoRv3W4M3UmUhCZvHedX2ueDtSzohUZq7D5SgVPi",
  "key30": "5ere4zAhAvs8TZbwtYTXi8TpcU5mZgtJw86NH7WnMxoNAYniULkRyns868Ga7WjVFnTpUGyESSabLLPHNv5EqTKZ",
  "key31": "2Jmv8sgsLgQYZKDTRgpUUYBVFXdRjRWtpZtRNwQLkqYyn7Dp4hCPtzuAWJhLyZ1DAxWzBVJtHjvQcv9vxPHPtm2u",
  "key32": "4FXMX5h3Hbu6zfGmVY5piBkqQWdYaSjRdCCeBNRiFWNT13AAW3zsdNNoSW21Mfg7iupW5MqTZP1FBx4uRDqExUFq",
  "key33": "4NWEyHjdYuLRZY2Mbsrz8YK71K4E8gXMtJzmURHtJmj3XAPcdv5AtmjrH2bpubnLQHBP6UFLcxymNq3HTgyNB9Ur",
  "key34": "4WpY9f74MpEJRBeRja5CySzSJTcvjkxqvptN3TDVQE12fdFBN3rHiXZEfVwkfb1bJFjtvFkEH2dM5S9wTiu9P4JU",
  "key35": "4cg7N7kAtuQ2nEhvHbMQDhbyQWFVxBNfqkGDBurpKqYEiTu1daLJS3wPFsLAmQMXYhD6jrYjFsdwQrDoPSnsMfae",
  "key36": "3LUA9oY5JMtQW8T9H9zCMozXLFs61zBTZRT8QPRKJ6Rh46F5kxaq6xHkTafbeo88f5Dn18XJtYRyyk5HDPKA2tPJ",
  "key37": "8JZZAysVwJZ8Zw2XMEJZVTteWxoer2EETbpMYnJu29jyeguiJjMydBt9BMvRbuDP26d5AY2tfcpFSpA99exTcwR",
  "key38": "4zx3VUfT7GpZ2GUL3L7Xpsqk4aCrbKc8rKmcdBzFFZSoS28sMMdpnR9EMfUawSdv3Pf4xEZ6gettfsvcvmF4FgND"
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
