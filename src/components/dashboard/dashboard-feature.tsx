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
    "4A89h9BM1DNVbTEV7nZoTm21M5yLgnC5s4LDWXRRDtCni1WTnd6PiWsLuvnBuomgzbYhA5pHzAEPA7q7CgkLkqUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wjz4ugqJWEecfpsd5ddUn9weZooHD9j1HHzHSBJfnEi17Dh4nPUSBufG3KjiyLKnXPmPY4pDKw1vqtjkGpZLWSz",
  "key1": "2TVmFt4N93aReBcZZGcg6vjYApKvL59D9mrjod7VwGtNVm3HsZr7dRAQvfgf7rmK5nNR6z7jSyAGSipNogzWb9mm",
  "key2": "2xPj12N8dRQYEnkw3JdLyXr2JFXMJEHTJxsFtHyHvidcNavzDnWF2X7zDuzNu77f1FHBaFnkkgChxQ234x6F68Nr",
  "key3": "4dNB1YT19EwwU2Tr35GxgmyfR6eQRRyYBTeBaja8WvZHsF4ccUZuTywKQPTdgofiJAX6azbrdMWCundaDbhuagf7",
  "key4": "2ZukvGKbhegunZSwaUMawLvjUFcSXbaPtYxLFgz6Uw33cWi97qLhkkKJSEmTZ79fMJd7DMA2uWGMZZ7ZarCqVqow",
  "key5": "236mXa35bFMYVWkqkxnifn5F1iPjQZfjYAWJX1DR7bSouAzk8bTrFNkNJj6sfyuehGRDypMBDdEDing8bm8e5kwe",
  "key6": "3FPagxZpQMpA3GKbDCDMRSY4reELE1VT86riAoJNTQM5rbY8WNRXUHczjTXuDYc2u84YJC32ecp4VVrBBEYwZ9jV",
  "key7": "3ofGL4RQac5sWBxz561PnztDVQ4bSfXS1XEYqdNRsvaiXGZJbYLs5Yvm7f9edvzfibNAfw5LaTZ3t3TR56bjZC72",
  "key8": "XcaK2v3Y3Z3fMaCajCeue8T3WanXA9UPszCRroLL3Roez4aZ9htHwdVpSsC1Jv6T1EiZ7DdyHSNrz1t59aRgdkH",
  "key9": "4kE3jfVNibU5dDVCnFW8mCE6tJ4Cxce1VJtEKUusXRSXouW4kWWZAogAiWdB7wGNpeVbvpkbN1GFgrsTTQrZK5DS",
  "key10": "4mmwMbDrqcaTX9r8PiqapLVW2j57fMiE5S5ztgqScTAJqmuZvQ2AFxT8zLknTGZPbcetVJahJpzv7qkYWBrPko9X",
  "key11": "RGgHhdUaTtE6CJDN77rn5rejaCDzw2ewuDo7mLY3b1dotLwhY7Lxh9sVWtBHa1sdeQogFz79cu2c6gH1n331w7a",
  "key12": "53NEzUGwbMzZ4TsoQU7HtGomeyaCYKUfxxpQwydoJFvxHmwPbZgkaSaf8y5jzNpDC7vXc5BufDq378msp6LxwzTQ",
  "key13": "3StQnNFvg6wa7ZoK5XcHRcnTrs49Qrfpj7Lgg9AyKj1PRRUcCvCcSJCqPcqwcftwYCUivPCBer9HuK6gF7D2QKxG",
  "key14": "fx74DfwKibrve12gFqMR2PY1A2f6FXthRBgRVeLAZq13uYvr3Zf26M9rLinGr8AZZvzRtFjKFDx9651cHk3vUMg",
  "key15": "4TCR3vezWyGKtLyc1wo9YGHn4Rt2wCvgf6UdHvhV7VEq1J3sR977daX93K2iSbUH54XNiKFjLqxtzsdNBABZN6G1",
  "key16": "4oSEY7jWzMZqPLPnH4WgtAaXEgXTLSU9CNpqxtKK8h3ePfhFFkduZdcTZz6ySpBUeut7dkiJYuP7oXzFsdJKs6c3",
  "key17": "4x6Ma5qNF2UUKvGAZ6HvZJBVv948jm2QzH2VVgtRGjzYvzpmBhS3qJLhY8vVWfRQkDEyrpFEy6y97LKkP2HcdQtZ",
  "key18": "3tBaScCtBmykpB3uxasuJWGiTx8E61pEUvozc89ZUrsZwVGEGxiT4V9oaets6PhBYmeMhvbg8Pa9VMQHZ3kTqFCb",
  "key19": "5MuiAm2S6yracH5BY5S2bbnbQs1vCnwynA1rKGAeYZcnSyA1XqU6SvEFFKFcsRyHdfvzdz4cHTx7ffqKvbK5tvrD",
  "key20": "VXhakbYNRdeR8VoKjqyvXktgTcwhTq1o22MRV8iq7uL423zwR4AvcmVHMW38LfCVHDHgfmf2Fp3S5w65BoDBf2B",
  "key21": "4WJ7AAhhq6pM6vBrTnyLgAYTQcm6871nzvpzLwJNVBzjgs2PQSkYjEzgsQYfXotu4ao5FodtUm2emCQs2LJtUtta",
  "key22": "6zEgzPQHJTfVNyScgWG8pdbUpugsxehneTVfQTAJMBD63H7UKyjFwoW8h3ajUXFhdbfUFZzva51DnyPasc5yoTw",
  "key23": "2ExtyjsLrgsHa9CdnzPwu7TTzAAEATGQRbrcjJCwBpxdHca92keegVRBr4deo3cqsuc87zXH49Sbacx5KhYKYQ1i",
  "key24": "5wkvpQ42z9R6TNjiJ2R6wzYUAkdpujZJBChzMJAW9HJ1sRfGhpfSAUzpkTDcGHRpY8XvrDLtHgppCMcMxdqB8tQU",
  "key25": "4Q3qrwfnG1rtT7TTzSPrxJ7vpcr4DQUeA3ti4gAhdR1xM2wTfDDPFRkHv3tJBvtxAFTDf789LVCBQVXrakjZTQdM",
  "key26": "5WUdcqZNFYGWVNngRqX27NiAF21GJ7ciAKaHC9o2nAgakwPqiLmToPURsytCeKYkJeBUQVLaSPKMUqmRrJq7RzTP",
  "key27": "ujD3psUnHH5rzAKiC5Kip3n1kPyXkm7EgJ9TkBwEAB2U4xfWhvvYXDjYiRQeRDdde5kKBC4Bu4wtdVmZkWRnWXc",
  "key28": "4wypGaEmmFY2VDHY6RVLq6yYteAjXm5ZPEXEFAfRBMoSRiFEucEaZGQPSpkgtraei7gCTaSh2G2R39yZrpeTbLYW",
  "key29": "5pxojaCd4KEoLJmrowjsfNDmjE6Soy1C7ogzWTYJXEyaqeUgEjunqfpoLaj4ee4h1NtLSkiFVvAeWVjMfKJWJkUN",
  "key30": "46gdvVb8FuhUJYfbpsLqfL5sAQhnEuxYiYUaLciDxqFXzgT55oRiiHooRt45ss9SKkaX1rXCsESK2DB7T4xYGPZn",
  "key31": "BtYaYpUUdPr5Bf4v3eRE3dvUoVckqLeognjjfJhSpd7hLKtWS938VFgnRiNTNEuvG6HNK6WxwBhqA6Zv3R6bVV9",
  "key32": "3vcQp1ci6BQRHJtYvFZCfEjC49EvNhadrxB8f5LuASLRJujdDsiJAgK33nNzdFGKhDeSBc6qicchyAZfpwKUoCLN",
  "key33": "67hgb2mdBmTmhHLhZMTiChZcrqnw4jvou8uPyKzWy5VKJ8USsdxad9d7at3rgVnCW6sG7qkypzY5J5xaZA7a2tB4",
  "key34": "gKJmvaMEwTkbFferbLPjsKZzBAnGeBzv25GoKBnZgLU8AcsSwgJYdsCzVq2tSUmci8Ju9Ld4MKv7hDLaoidQ8X4",
  "key35": "3ddkFxpL4rcDUBxVS7mSRv5K2zhASV2ArL6nU383EXfS7eBSmw738w7CjVc9opCquL8CeyviiiK9DBWTTXFDELCJ",
  "key36": "3sf3Qq55aDR1paKGokm3uB8ZV1qvd9CAc6bUp1JpdC8o4TVwuwDeetQpex1mFgQZEC3mWQMa8g1X8CCc5LGrPqdu",
  "key37": "2uQXP6BrixyRnRQd4hHetY4APAw9iRZEBTefmukyMqSVo4SxvnJSJfGaPpy14Jnqbj8QLe28Gp3fVidYcTYwqLUN",
  "key38": "5kQ3RSiPRdCyugkCESQHYeRQAxV6VejHwgETt4rqi9y7qZMymNAoAzwtruM1Mg3Wrv5kTNuzwMUmG4PxoiQfLQKJ",
  "key39": "3HgT1Q7AnXqNJ1V2Wbyuq6Z14HHE3w5iioiTrJZJJoKPgCbKDYhXEqDmXkcxJh3eFBieyQbaWxUwaMmNywYppp1L",
  "key40": "4BoHMWDLiKcghCqEuXg9cqEXDuvicM5nqPkeU2iHD8kUc8twVR6FAE7N8XW9Q1GYrgmgb3nVDC5GKU23k4yNPKaT",
  "key41": "3qaim1kBXBmJpmmisq6PiXysdosN4S4phe5FeK9qpgt9ggv8MyCLAS3JTULHhkod2JMAhSFdVuPt14z1bKSDLL1i",
  "key42": "2bUHGyb7e7cFQRknKrG6EudWhh5Gio6NcCkB6ExtyXKdtqf1JcgCgzhCpHXdQKx742iJ2LBMkdGY19UUN5rzuFy6",
  "key43": "4GAnnPbfcek2cc3WQGs15e5cii7vtF5qECYBxiiX8bof3kLoxLuLCU3qCZrfPuvFYDpHvW3p68sk1Ua5anxcbHkT"
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
