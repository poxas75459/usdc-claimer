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
    "4JjeGKNyhXCsqZ73CBDoTu5TYwpAQ1NXP6naoUkzh4WJELy4JTHY8LjCCY4rCcHosFWBr88TjJ7FM9T16pnajbSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uL9uQ14XEhksLcZK4bx9gGjZNeYU1S45EfFw9A3wUoeR1S4nN2EK2ZoNmpdX8jz3GcRmjUCTae5CGRKz4YYVqdh",
  "key1": "bcEqg3quQb3gdUwUo7Wx2KXCEqKkXAEAzQ3NMEYSzscXxBvR2nQuJsBtNpDbZNV9nNfhiXszDTLbD4SB48ZwezR",
  "key2": "3yiDgqhjef2URfjbCF5Lxqyvqu5MHjvm1dEJKQU6Qjet6GiNY6jPTDMyLHhRR8ijvwmQfFL8Q3chDbs9qKaZ4HtU",
  "key3": "2A4jy2gsGSr7D1UXvC15tkfHAaRoGYRGtg4ncbbJoy3rUhob48dVa8LNkJp8GzTxmaG9k23zxcS4QwsxmKC8qJdC",
  "key4": "5FF7ptMEFW1PPu1czAuFXNkzUrJNgncmdDmR6BTSxnbSHAfp5kYQKy4W6AY7dC1JN2YDa2oQPmmszSSWWKEnNJaM",
  "key5": "2fiUbZSsME69vTWUYg8DhwMjDjcrJDBPne4TtNxr3e2VXPFFuxho4F1ggA84E2xJqcx1NKh1dUwnmRnTgPPTy1qi",
  "key6": "ZwVm7CJUt3ABEAPkjAjawciezMRPWHRrHVnoU5vUuvWbTpptH3nb4vWyh5n3bnaomRcKNa76n2nWvAvqCgzcZnN",
  "key7": "5ETfk86XiXSuuXH5NNvqnDtU7Daoz5YBWYqtpEb6ic3tR9PBKhkyfevvDHqZsjr6yjakxaeRcUnE37x26jTCgKU5",
  "key8": "5bfhtWUHTJFsH4D22goRkybgQqNhEVHyXsNe2F8jJDmNyQK9fJpw6Sm8ReATKYcc14ffJxoCbvcU4cbpNZMQqm2i",
  "key9": "587HqoxL7yPvJVkKE5KJZbPkeENptCyqX1BQ82uXebhzDS4n8EyySVR8R4f3yHwLKH4NwtNFv49zGbQ1wpx4LiuA",
  "key10": "8GsnDy22i5J32CGnGHXmTcuBhqc1hhBjcHAmfwYv84j9tyXfAzTkpPcwDmymSYvCoedgHuFpR5KwPyY6Pi9XBYC",
  "key11": "5c9L92QTYYefxjwd6BsfW5YJQe3iDN9LabAWJs1fSca3DtVSFm7chLnZ6qdPsCTgCb4trFMSc1iciPsKeZT622vV",
  "key12": "2y5DJHsgcabuq7r5gGHixAB1sxDaBjiMQAEahT1njzTvvXqyZwTHf5vuTYikdyMGsdFmmVeYmiP1RUR1vLp1381X",
  "key13": "2etFmgByo7qr1fAbYJ6QFpSgQ5emS1mrCPAHB89Zd9NA4T4vUGupZcDJEvCSj6zfpRuzHYLNAboAmg2n1vM5J8Tw",
  "key14": "2GVYe8G9z1yePszwiPWEVgPY2rtDXnbqwYmYa8hTiPKEcuA31mVFsEcRUL52zoRa37sPXcqDKPqbKFiodcH64LcZ",
  "key15": "34GKQiT7zwSgjyjdpz93Pn1E41S3ypxa6mFRirTzd5zTLVwFLqHnhBaNsNXh7drBy2RHxGaNHz5RibwVepLGmpYm",
  "key16": "5Qsxij5SYWubeu9Q8QJNT9YzpGFP5Tdk23Aehs85YNjq3d1JPwmyUj5mjmoVH2GGZt3cQVd5abJEBJaHoDnn6Ap2",
  "key17": "brJn4qf4beWjtq3mNj8PK3qaZikgQqbBgYNrgHFZNkZPzDP2ft78USs6YWiLmNgEp5Kda8caB78V62UFCvguMT3",
  "key18": "8k2ut2TjvDfQfwW937vBjigDKW9ZWcA1ioEdYQhQJZ2qvHQNWZz8EVRP9bivjQG1v7PRwUeaP42FgDkUH7KkmLm",
  "key19": "2Szz69XUhPaWzM9NvBj8GxefWjWaZDu3FnrSdcewJTbBKcSxm8d85n86XHAgqH3PceTn9MKLYXDA4HUBQsrkwiXq",
  "key20": "429MmUsL3JafRTEi8wViZVSHLNGYwtffYX16VejnHYZtFnwHbcu89AfnDLMnCYGp6qJd7V4cCERKztQFLgBYVqt7",
  "key21": "3bnjPJJfa2YKVxtzLL7ZKg8Ec1A78YVKKgisBfhW5ujbMJwMcwab1fEAoXE2Et3mezzHWSS43vRyGXUZe2R56mmx",
  "key22": "36nYyaDaeyju4DsEDVbEjgBkxaQECJyiqW9XhR8oGRVAwhWsUEXBVGg3R4pBqU4t1YUCd4yHRaFstFaYJnWFzGzw",
  "key23": "5ZYuPhNeZ5vkDWW6ErXa1oJzKKzePyfu3dRf2BqEpgnFwdpAf8adEGsRNMtGubFa8TVAvvTYSk6ieRTKmWkbFEWQ",
  "key24": "3oJuQ5prkz4G5u9WnEX4vMz9sSukjkBKdYvTuBsYszyeVkqrnJTbFbUy4kmVFhZdgX3sWjTgu4ftyj18Cz3Yix5V",
  "key25": "2MJ7thFh5kL44Kn5RFSED81aHLe25vPzkxBr5hDJDGu5zYghp8aUPzHwVLC6hT8epuCatGLGrKietR38W98ujf9c",
  "key26": "4m7Xg4rU5738mej3wYt7AW3tFaNebyDXVNXzauiftLjMLzfhbaTpiGfr3GyrLC9KbPyHZaT5kTCDkZMfDzHt1BVX",
  "key27": "3hG8nfiGdAMnehUfUU5AnVqLVVZMP9jdxEjrScV9TT6Y1UsS7Yw5UpakkFiwgDebXrXLCWiSQ7qf6NezaJPetLfb",
  "key28": "3PKam2Vxtf8awjTHZsAnWtgUJSsCF3ncZheBUafU7fvGdPrKWVzZbnTJpAeZBimfWGmD1PvrjDX8H1Up5W7fXEqu",
  "key29": "21CvjZTd1WiD3SsaPwQfE7ru1xxDR7ytFifDwmM7CeqPwq27LgktZhDkbhw421VX71tE4ntvso21LCFa6P2JxvhY",
  "key30": "56WxjwsQnTypXMWhHN1CtXo8B4TSPkBNqAQaDG66uq7PL82N2a6Pnyv5jkfNjya5xRHFe8EHfmCPS92fut4iZ6tD",
  "key31": "5eu8TQUiSANezm298mJYYWqFuN6LPngY7xQG2hosH1dVNCcun7DPcSdj8anaKQbEPdZAULR1beDEEAnN7ZRrDY6K",
  "key32": "47TCDMemwV4L7n2j4WYhhEdsbD3uVr6yExMiXtG1CrsaYp5XA9rEFEPtbF2NLSCiGxJ5LPx52ZYwYBLLBqpjSDjj",
  "key33": "5wDBvpbEqqadBU4ZeFYRKqSCdnFT2s3QXHw2FW5Q5DwTAWWmr4aHpWpsunRJikK5ofXETtxPhGqdVQerWHwGvADr",
  "key34": "4JAi5ifnEPy55DR6TJxbghsNgiiziWxpvyc7GPz88obN8YD5rBgVGa4LPUHKuJQUyRcXbKzJsRPBWuvZ7xJPCzfU",
  "key35": "4kfHcZHPDTVFc9UNHQAdc1ytm1PhNLqzvmQFYLQM2xkjRaoNucPp7nJC4bnJ9vJc9iR2vjYoH67kCjCCuFxfLA3k",
  "key36": "46VFYZkjTKpZNJKPtCDh9YLpJYnqriWxysDNK2UEKbBPnj9yp3sK7KRJs4niip2Xip4fWUUCqcbnsTDr1Nq1Ad19",
  "key37": "3QWVHbs3yk9VKAprgTQ924ZcF1kBFC1ojsouRRQoqz9ew4nSJnek1LqLxBtJ9rYCqdV6GLjqwnhNKpJ3wMANmm4g",
  "key38": "3YZFJUqW8CqbKbLgDPnNVXxcXPH8tmC6jKLG7ya7rQbwDA4d6e5iLMQHre1M1TYbT6sKSxQanFEwowa21HkyCTPf",
  "key39": "4E7pQnK5rmxVDwrg3yByDGq683hVaZXRQxgtKqPpiUP4sVTj9iaEvrD44KYBsSU1gezmMAqZVEXxwXXR4DKwqXPJ",
  "key40": "T1Ax5sJq39p8tjReNpdQH9DMfEtpgXJFmCLY5PbsAXZZP6a7DCCDAubERgFtMMmUcQjCbWefks4LgFgSmJp7UGx",
  "key41": "3TiNx5Dh8s1nqRXLUd432dcvwKra95nzR5uzxVjWAQfbhsSbX2qhb9Zg8zUV8Ksd91Ywy7X7UyoTeaqucAUbuqL6",
  "key42": "BpwHhewpTUJD8Zz7aaRGuwBTDyRkRHzZ18eZLVAp1VcXxePoxuyk2DXgs4G1Sroq7azriC2d36YxaNVmwCLR6Mx",
  "key43": "249jd3mZUaEANisTYUG4ZC349gPkVKcWXjQdTJgkbwzXN5jYLwGk8Nt2hLgpcjkL9W16B8QX6Se7t7Lqd3zLtdsS",
  "key44": "39f9ZY5sfU364rJpRT4PPFdrnankne6XxFCsYEQYEB5JzSWsd7w4xBiCM3v8U259F7aEPVe8utjXoVGP3SuvEMAP",
  "key45": "5DtohyQYAbqGYZX9rYhifgQ24mDACE2RrsdEAWYrxLot4hFD9wRFo5oVQHmYzkX4oCgHERJ6rfMeMbmXG5UBeHPq",
  "key46": "3mCo4ir1ZqMWkwz3Upd9ZJJrFpSeCdFU7TtSWwh7g4Kk4WKFUzHumdC6ohQJvsNFjznhExD9HCKnkQeF4Jiz9QBZ",
  "key47": "RKbrNbugCYpCfvwEUxspsBbtZSQNZjiqYehzydPgyF7CH7YKTWXm9UDW36sn2GvCCkJ8Uu2ouL3ziV76PoSaNqd",
  "key48": "2zwjVDn7rGa4PYFiz5i921MAKx5tx4XsbASB7jXHXSqMTcP7eeEY8jYiJJRSEWyrsDFKhZPaXyh4bWRwwqEYbt9b",
  "key49": "UdbP9BewWHQqHfPj4PJjQbpnit6TJ84wY3PSTTFNVzeNEN8uwWPgJNG4uu8w3j9ye4UuyNj9BUK5saLGRNzTYQZ"
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
