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
    "4g5sPSDDEGDyuoAwJkczFA4k4QE9CgfpjdWybq1TMpjxptahJYVJNMbR8GxvYkG9UwDuBrCSyhkDMKu8ps7fVsG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26MmeCsKkKGGaPS2V5Fk2hcPPpGBWU1LFoyN1WrP2yb4SH8MCiiWgedm9pLyt6pHUY9JHZFtcKxDroW1Br3ZtwuX",
  "key1": "4WuN3UiztTEiU4Hvg8FbPsnaiWgo9FzDmxNbs3u7LTNDMUDuxroyvP4P12UqgNpvYXYmrdjv725L5WVFcpi3Di3h",
  "key2": "55TAfwaDkZPrhe8RfMFhcPmx7rrkcSzbWwC9fPY6Zm8627G6H8EJVULiFpcpbo21ztXDs6KSYD4XP1gR6rrcKtSY",
  "key3": "3nNH2j9JV3X52Lb2WsD6yjk2eq7XLtDUKgVpo9vAiu7z4oL3cU8Um5TzpL9BX3C6dgUhRwRNxtEohxFkU2vVuvrn",
  "key4": "2J81HPtYG3D9sxXxigEfqAtiTMipUAy7ndzmnH56gxEos4hUjKvB79JH6jsFFzJ1YiX5vMh1nU9q9WkCJoGthX3p",
  "key5": "XP9LckDFfVqn2T2eGoeYiTanQdCCor2g87WBJbhZsvNpiZNEFi7MxYtrCSXp4i5872LhCXE8836ia69tBPTw1vb",
  "key6": "2LQMML5hoKAvm4EBcguCEtm3DggKSDKVMG7HsG39qqsseDV2u6zzDeBmvPrAPQwcDTxkWz62TRhzYhC2x3qDxbvb",
  "key7": "idXP6vrJSb4JkQKEwg5Xb7rxCpbjvUBbqJEZeJoQDSQHBWbfkgTaZZEZm5DrFnEtzaZHbNn7NgNMTDLkAx1hbe3",
  "key8": "2zxhGkipLbK1du5jQhFWNerjYjNnr7RzxWnURSGHwbpVhL1yCQM2EyQQnp2HWkHHkvrWoNfNnnVJtYHT6bRATs1L",
  "key9": "2vooSuzfgrQoZL41KKGR2yZHfcdJLFe2iNm5UmCUZB3bSVkK4wznDfLGiM4LxHWKMvQmbkELzkg3JNw8oC3bBh4F",
  "key10": "3FzFqv2HRigsHwJEymju22BrPdbsXMJyUZhyGpftmDbnNJguxvjWPp1mMJ2gGKTKQUT4kQ2vy7NqJqwJdcrPQvvh",
  "key11": "3SgteNioqFRw8pgs2XXsJiiuDisDc1avd7gbwdq5RwwqgEq7s4ueKk8k1AjvwB2cKexmifW2khHzpYqNARtuNDrR",
  "key12": "25TEVXVB4Yeubnq8sH98qJ9DhkdnkDBL38BbQ77QyHCQTq8WbzpPJiCsgVfqLk9kr4nXDVGqWoszBN18kb4sJdnT",
  "key13": "AshBztYXjUMHQgBH4Tf4CG7nskAb6tfzWiqRaf56bVVUzxjP3mRkUpDufLaefydsJLvFFByetbn1ybEjXqPg1LE",
  "key14": "2HBmW1fBbpWXt72fuLP5HW7XkFtfUkHt1ZHwg7LdcpCASToVBysUss74Miu6B4kYJegdspU5s92bCkzATTybBpeo",
  "key15": "2vMkE9sTYjfZqToqsZ3cqN8MDHi3YVz1fu3ajssiz5bE7tTeSbgNq1LP9Ys5kdeJ2ScRkrWwo6eGe4DcEU1RUPQg",
  "key16": "42ogSgY76mF7ccfs4TGd8dxaedBkgC8uqyBNTvPpZ3AMPmUH8XWQFSGT3yMtSKZewjiQ3TCqwSZsQx6qT8DWjN1u",
  "key17": "65AXjpTRJ5vZ7RTARxL88L2Ned6chKKP7BxZ5Atvfsq3pSrKAMbZY847Fv7URNAgJgiMR95U2brFTdV2hb4C526x",
  "key18": "31KbAFKCWLSbrWCUHzhiV2FechFzkmqjTGriTqP66sGa8fmaGY453kcF2LNDpmRoEEPkC5ZtgCGtisyygdPfdKyF",
  "key19": "38T54x2DELXiNSnw2dSYS3Q8ReGEB9hWPdh1TgL8EEAiKuVrQGsPfmLBqfqw1grvokrcatK5ZFJsd97qtXeemUZF",
  "key20": "66wZjHkgSBpuJxApsuH8X4GjhT2uBY2EvftmyhXUYGenyMjXm2uoK8UaD4c7Lj8EE9ArLkQUJz2vQUXaCRFG8EVE",
  "key21": "53b9Mk8qGWRupMq8GQ3Yt618yV46fwRNRjbU2s7nJ8mop3kh6zRCNQmfK2nvmLWfaT9ysgQjkf4r1FFnn7m6QmiL",
  "key22": "56yvnQt1KMSkxeDatsikcQNr3Kx4vh7vAEDKW6YW4P8h5x5zwjWN75iKX734YBsbMFPr43ju842VFC46XgM1pnPX",
  "key23": "4TZvy6QjWfL5QWTX8PeCmE9vH4gFYgxZU32fdWVMMd54aVTvjMck9oL2J7F8ZzGJPSGSKvofCHgyFSLaaByKWfYJ",
  "key24": "4TjWmXZWy6QEkuf5iGL98e1mP9XZduzYr5S52NTSmeAywWfAGxHBkwRWBf4KxeBsANLKB7vvX5i6g5u75KR2Cj6d",
  "key25": "5AGJbVsmUsV2giSS6PG8dYCrYcaua5wBFeWxMQZKQbzNKMqp1HaN2soG2UEUEEiq59dS7xmtQWp1BU8RMR18Raz6",
  "key26": "3DS7umfkeevPNrskYMV31w5Fmo65PZEaLoSP9aD5xuz2WpK2EnWe2rgEb3scpijV2gHTcaCiDgknap6D8dv4uZfn",
  "key27": "5e5Hsum5YH72HZvd6b3JgQLJDFUQgmrsuknxzUdG2RXh3ugpBK2AHZ7x9soBQrBrm3mwJFCybFmmKvKiAK4Gve46",
  "key28": "nGJNCHer7976wNhkypN487sdG6xbzQXjQZ25ty1qHDEGDrzmNWAhVQsq9L7xFX7gCSdiFYaSdSdLUk5EERKM9bn",
  "key29": "oDNp7ftcyGmir3hvQRAvHZRU2Ubudz7FBwtc869yfdHvNsqu5cVDBz6h7uZhHoscbt4FC4UAQiiKdsTuHk7FqFR",
  "key30": "5PbYRHwG4Hj7aL7by3gkNbnoSeSUyEsMnMEWYUo9uLVSnKHsfVJZhdfG8nitBGeGBNAkhLBTm7uSQQok37L8QXMW",
  "key31": "3NC5uxtiQm6aEePcAkHTKrhC5LZCzaGDeNedvfQKs5Twwye2o9LGbzFNEvFBv7hUzSrRWVLBwAFF7LLzhVYTs1yT",
  "key32": "4b2yqEM6VqyoZLGDFwrrGisUAhvXbVWaAcRyeck9Kagjqx2x5zBejJKAPQTPxjFN93MX9W4zNR9Jaje4MfvQkov4",
  "key33": "5er6KpMKrh3VT6VHQuEkqZu72msD7tea8c1WurbJuAY9WLMzbjMdTspHqb9kcbdb2i1d1SQSAZ1TE19DVEJw61RD",
  "key34": "nrJZ5oFB62rGzSMiYrnfZK1nhBMV35RZaTGekh8pyV2UVTimMpvxjhVVgJofkmJV7kNsv6SA5EUza2e352afghu"
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
