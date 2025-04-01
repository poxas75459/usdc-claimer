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
    "3KREuoGdaj7MqcqxNLuqUCGs7TKwNok6EFRhFBX4SshmrbhdkSnixMR34rVsf5Xwd3LUuW1JFwFV29uQDW7xUqPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mo9QtVGSmHpk7EjvHDc3sJatQZnh3dDiDitYYDZb8xCBBLQSxwedTGpsN848HrBT6SosUePAq9jRgrdSsG4DCHV",
  "key1": "2QLFe8gBmUaSdqvtekRp9GJXtSLJcaQmS8DeTiaBD7y2TMbmk8N6q5sZh9FsQ4xTsPPGm2CF4PCDyqJFqCtSPiQ8",
  "key2": "5oiabRZbhmPcHD8QGjJ1Frjt3FSA7GasJazLDQFCtBV58wCQh2VfErZjWTt7AL2UpZpLCkKbxMMm6CtSE1rwUugD",
  "key3": "235WbwbSxm1yE3hh37d1F2v5YqH49Vued8r45HvLkiVQJ83M7ny255fVe6ssg5WherDoVMoTURYg5f1GKsZQP43t",
  "key4": "48rCy6UvenjQjYQfDHKPJAZ8SQTFmLBEBPowituBKXFTAKAMAdqKCcyrqM4jA1RzMaEzaUm7mwDpvFyfuqSayKnN",
  "key5": "229DZm9sUBe92Uhzc1yaxmyxYBt64oqfwe7zBPBdG4h5vG1c1d7QchGNp4hwUTEuPUano6qZ7dkWSeYsrr5n1LAd",
  "key6": "X99cHgSGr9NnywSLfGL25ivRpMvtP9ZkdBcT8onPgHkAZCqnNqF3bJMekJeETg2XmNbXuP3ueAatcG42aZWj1uB",
  "key7": "4BWAgpBC5o3bHqmT3ZDk6pWyidVWx4rwwfgWrwLE4mrLLqXH8oYLw4AeSWksmrNNwa4St4DJk1mBjNTvek44DAVw",
  "key8": "5xtzEJsoj9GG6KFXZ3cyjME6DJezKKGqgirozKFQKurMVwckB4TbF8Rk6xs3yEy8vdwKAqx1MwNWmKuPhW7uV9n4",
  "key9": "5bieT1rCttwBbJRHpw66LDbvp616bNunNa3JyZ1kBpNnKZfNsTFowbxTHTsAdNK6T56ET48peYucxyffRVQnAQwK",
  "key10": "3HxFWrh96MZzZ42Z8dztMktceGpA3JsGibSyHF5FCCRGqsxo6CCPeiTRUvTEEB3zkELorwdpKGnVWg5gAp2DTK6k",
  "key11": "2PMxPUc9jx1Kf4S86GDeFo4P3BZ62ufxE8MtMPK8xT7brwCwhYuDGBUciGrY3HTKjuAmsR85ZhNdYacZyV5msM4U",
  "key12": "2gEh489TBqzZK4r7yL2xxp4nfa1MjY9sAn6b4LgDMuaVGsHLZRfdqjsJarBwmPva37hz83WPjs23pa6HFpXbrUMw",
  "key13": "7vqATMD17X7nc8GpShYMEFWmERHZBkP2bAjqGcpBJewJmQqGvUdsbwoMGPfLuku4YgTkqMQfUgXDiGTcVzutLY2",
  "key14": "qwbZ9pNyU8D7upXrFrGVb7uwqGDCyL3VtXiayfA32U7Y3zJYbx2RSyLh64pEGPSBdVHb66ybd5nsv3x6LRWwi5K",
  "key15": "9UQX1GiTVgocau9NUWk7JwMHeciEZ6A1S8SkYAE88jRpXfNWdTri7DKnozYPtaEx84y5QZpnAQXtri7Ezh3eECM",
  "key16": "5JdjPuxAaZw9ESegd8BYbFucQQV4uiFJCA5Q1vNx3dK4J2hDYsLdfD22B8AnxrMtdmd4r8NBX6UbyFa8x8w9JJar",
  "key17": "2FENrEgqJKcSHF2pfMjzSqxKEfYA5eTW3tT392rM5GRDjmURwZ69TnZXaXxosxz39khzuZS9C6JmSwenjwsvJA83",
  "key18": "5eGsmoFGGrT6VPCZ7HGL5a4RDdjRJur8d9b9tnXjbSokGZN54XhgZtSB41YAnsvdsdBdwEV2qCeeAThU6v9ai3TF",
  "key19": "26tqhiEGyQLPYeRQ5GTsg8P2NhZzGUU7gYZ2osabMxmtYiu4gv2ZuxL9ss9eKfYbi1zymbF9AfxBXcTiHB6N4ma5",
  "key20": "4MWJsduwkN1K4avXwfRvXymNjAMjsAp6CRJ1wVDqofr6a4GYEcz5Qvws6qwVYqASjvgoVAy3MF2DmqjGfGGzqFzh",
  "key21": "56hcc67KSCg2WKQMTDDFrjGS1GXvNghKGUsxcwkiKYBzr5Rnd9N1NkkrRt7B3xXS2s7fYa4sToMRt7wppws4qJwA",
  "key22": "4TkmY9z5qWJdajyxoQZz7gjERwKyhLMMiCCJAuAMcUMrJUwh3qwpQvcdaTGSTv7NAnG8Y3RciCug1Uije5WCkdmH",
  "key23": "3jJXAg8RcSEV3dCsjyxqcvHAjt5BYz8eXQYR7qtptmMWCmpgk4asanXG1wTuP9N8hBxBv2oXoRaT8mT8i4FKjhUR",
  "key24": "5uCMWyYtcfsHJLaYQRUrsQwr62qBnENAu8fXbPzZCA1td3ffkdv74xQt1y3TX5HhXcDKaJiy5jxWrDmJSuXsZnqD",
  "key25": "2WyxgSpoXJ4A87KPwBhDaiiVD8LUWWAZg4Qu7bsyQx881jMzwpVKRvqokFZTZN5WL8rtgunxi8zDAMi6Kaz4M98i",
  "key26": "MNkQkNkJDKeS1u52C3gY4SykjQ14stwJwvuZJRnQkhxUaJWzjue4ePG8CvvqQigvGde7yr7Sp7DiUzKVkeQRw2D",
  "key27": "3DxpH3Qje3tWsz2qrTDV9x61drZwsjyjjLCYpseEBMzGfBbQCNLie6KkTxB5PdLMct9rrsPT43XUj41jbzLHsN6y",
  "key28": "376sSE1ZvjQJM9erymp32xccmBqwXWM3GvjYMR9VwcKsJaMbHRyCa9pUQB8BZNbHsrY4Dd82oMWAuJYk9PJzgckQ",
  "key29": "2m2MCN5TPikFmsK9SEVeuQLYMAPxX7f2MKikmncPqmWmCWQ3rMMPQQVfZEUAQBX6cZsBqEWy1kn6MDU7M16c7Q6w",
  "key30": "3Xi7zG5WXop7Rch6dgRUc1su9DMwyWPYEzaEsgMM6Upyc2kXLUL1D51PmjFTgpJHffsz5S7iV7qgvubHewpRyksR",
  "key31": "3vuKXW11kDfFT2WmFb9XccVsuuLd6mermU22bQsx3VJcUyA4HnVyg62mySabj2JrpZPRX7heX8do3T2LTHCZXMHW",
  "key32": "2D2Ym6QD5LqkBHrv4JkMrcqdu52cV6XrGfM3MJvmSZmXCZvAy9EKhgaKicQ17wRFFyyVABTcmZ1VYW98ymBKbeFk",
  "key33": "3vBfadvyPpRFb2xpyHYe8FfdMLrGxVGUBTULDVExwjged99b1qM2nKD6x3UeT1MYfmCkEjtpnj3r32wWq6S2eepU",
  "key34": "3F7ru4pcx3V3GrpNnLL8YWCgGL1qf8wyc8ffSURUu4PGLkeTumcKDBhEJzSkFgPsby1o3GgwJh95hEs9z9faAGaZ",
  "key35": "3i9z8osSmTfseDmiJ18kr5zG52y7PLdeS1NAmTdWZcrfJsvE4h8ERBLsgvZHE5z9VT4c4LA22FCGbyRJ6cs7cehx",
  "key36": "D4C2QjNCKSbNeiFiZY5CqNonnDsmn1xzCuaWDYaZXEJDYE4Kmd9rZxMBH9u3adV8Jt6VZKL2BMq4sAv2yviveZL",
  "key37": "4jpiUHzfMNN7Ccj8q8swXjm9LU1CaK3oR1uxid9nP74MEofBqBuMQEJKMjetLrLJKv7ZeGP8Cvig6kHTeFEcNBFb",
  "key38": "2qsqrDjLMQ5R9nZ8JLDtSyX9MYSoxSi5hnUuHWDoaVzJoBSUKvqkzgpcGdLAMQMcH9676A6j7G3LvXRhMCwBtXev"
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
