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
    "5JVyWEWrdLR3P3kJZELDKjvXvYd8QNsezzDhFnJwWKJkpiz3TN21BZ7t8PWhWQDhzpvorrLodSrMVmfrxuY7JCXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tq1CekY25rPtN4sF3ph7dzyc7pDZcUGU5jYaXxoGrTqokaMjEJ97CBYhLfw3nG8KKJ35dXkdGw2fThGL6vfeEF",
  "key1": "28DRGScdtWAGK7Ft3Qks8NJSwG6dyXBrNEcsvhqV1wdY4WUtAhTWJaVpHjmseWppGKLP7P3ir3rk7RwuoWVYZwuQ",
  "key2": "24mzmeNdAkrpQFqWjwo3ASjL26xzvobXat9os5me6M8pX69xQWn4EagEdMorQmcfdmveRXnrHXJYxHEcuZy2QYhB",
  "key3": "2PoyLXgG8ZjyR8MzLjV3aRkYi68n5JeFySuW5j7MrxiYSxovX3bWnUpJtAo3RRcqCMgadqHWbm7JnF7p1QGeFCbA",
  "key4": "5aR1Sh1tmkitBXKLWAMAPYcNFeqjFDVK36PQsoPvRJ3EvV5CAV5Pgo5KdrKk3C7NWYoEaWT2ax58GZCSHqHQKfVa",
  "key5": "35CbGLeD7mCySqVt8s1pDvPdERmZDnSwuSBPuGUyNmCaRWw17A2d422ewbGD8hgJmUMsNMWNJHzNWBvfa49g6nz8",
  "key6": "3PJD6Q4HRnRJcDo73F2UC31kQYPCmLjqHTxK1mFzbwxZ4nD9sjriHLP4WSTqV4hejYqv6U6VZNTmnLapkuR1fMkB",
  "key7": "66hzgsd5rjqdMRKMVZfs2EgJt429sm5Ft7C83WmHkJDWezTaAqSFsPq1YBPSmytJjaAQS1ACGvrsQwFoMST7vcnx",
  "key8": "4yGasPYmsLZq9Z8s5kHVddVR6ofYAZZJLbEPUn1TcsAA66QsZd8ZVN8Q1ckAJ5y6Ke4x4qbBERNtHxwmsVjtmPNU",
  "key9": "4S4jGadAzafoWjvxP6da6t7Tc3znqkjeor8YuyKc8hbxnZtSAzRPu8u96MZryS6iyiBW9DFok5WshkJcYL7jnzrM",
  "key10": "2LhESwLuuBA2r3rTBYhHNLNdkKnXbQytkypJ2hU4BXsmwHkbtCXUpqKgsKhtFtT7xMbJKyBAL8C8onwAUsw7pM7J",
  "key11": "2nNSDgRwGdMQWiyUSusYjDQKNrJ5qeePGJZy5zVuyTMzeC3rkx9YGNiUXLi6jqF6g4VScPVAioFE8ZdXqvzpCqX1",
  "key12": "4HtDGFFuGUnYt9dYeNAFaPdKv7NoC5nG4EZBrSwXUtBw9dwPZ8Gt5pm8EYq4iBtb4KPpsJWzNTvF3BE1XGiLqyp5",
  "key13": "3NiEzZu5ECzWdtaZK43VTrKtEp3kJ5adD7EYLPQhssxqranHysmdDFj2pAEzCJ8dqxS2UvCzG1wm8TU6SnZt3Yuk",
  "key14": "ZSruCDn98ifGP7diA83W4UTWB6cBYgigjyUo2QqNKjgcebc8TczGLoAEvK5j51EGA5agXudqg1W5Bgr94W7AH4z",
  "key15": "4VpnVBTPJz7WhiLKvtWNK1GwTTWpqnvC465WW7C2PRyeSTnZgVNsNyohzkSFR83685YdVyRBzH2QkQUZc9UFHVux",
  "key16": "4BHTYmmPJidgPdExbnqXCdNmaaPCMs5qkjFTCQSYHDqF8RWmGx87PZeCUHKHh8bxgvFj8fofaP8cjSoX88DC4VvC",
  "key17": "2Vk6ZocMB6u8qzusewkDAnFMMCKMrhtZkwNUNuMhuTM7oAGkdoPeudnGePcBYovYM5mfB9xYrXuLCPuWX2AS5XCC",
  "key18": "4KxjyHutznKeMgAihv4MGThawCtrshryonfmUWcuhTDsUmtDLaQLBtX2fHPmr6xETMsXzQenPc14V1E2QP4UNeZK",
  "key19": "2K2QpgPVqrJodBFNdZYSkvvqT7YoeMGrqgjc9rXYM68WXLxmNV8Kz61knPEcJcvXXjHzvALf9TnQyWs8Ehf1V4HR",
  "key20": "2f3ENtdFdTqzaWCBvPi1SsmfRFGN1MeJds1TxLtWEqwYn67v65izjFDtWB2gsWCpV5JkdkZCu8JrYfsd1k2L9PV7",
  "key21": "3mBLLikvVLLRoGbozbh3T4Ue6DT5BnR8FLSv1hqr4TzipBajtKdxouWUFCtQz8YuJgQ683ueLqfCEF5GFDpFokHn",
  "key22": "3dXbzUzowQ4o6dLhc5NqYDCfk4jouTQeNzwtbgbzvPjcSUAnxAJo9FT1ux8dmBjvBj1571CgAba1XS21F15RjE1s",
  "key23": "WFhtK9udeFg76U5Vk2uBtiaR97JA3R6Bo9kB5NioCX1sK52JB85sV3LzK9t6A6E2UEJtDKSXBRzjjrhDy5AgEoG",
  "key24": "39YKxnB9MNjVxsVv3inwZhmeb2QVjsJrkFSc5SuPgU891yJ1Sar8sbL7bFG5QFu5h6GzsukNSJbsDyY5CsPZP83",
  "key25": "2FWAwJCyKoiBWZvjQvPoghXy1xfi9znjKsZTXrrU1uvEGcVzVBZRutdSJK9tyKKeLYMgAmGLvqHFMFjQ5pZUow6L",
  "key26": "3Shfd6QzZUT26WpoySrmSaKe8YJeS9VQJkFLuaxe5AgcuAwsyCdPs1FE5kkH6oCFRNFg1XVNn9YVv7Vp74pfgfRv",
  "key27": "2HzUfPijLkke4yKdEsW2d3zPS9n8VA1fv1BtF4kvuSDXeespmwLbpihWew7mkaR5EcA4PPrrN6QB1p6PGmhZKB3e",
  "key28": "2F4ZAyvpsscBoLs24iP9js7Ys5fmC4oQheoK95i9pkWETKXu6VKLRucMbocbeHQM5gjk55SKTKNpK2JXujL3cSd8",
  "key29": "2YZtPLa9GRXN1LbUvsY97jvFU9dNStnsTD3JF6r2MGmjmsW3Lirv9uyY85ho4kgusgBG8f4DkQmKXLWZNYrDsMnn",
  "key30": "3ioLH6LjEczL5vPQq1MAQw3hZmyNoJGbs1hbKXbfd99V1XMQHHChBakk7F6gd4aE6he8LfvMA1jyvENQhLzBuSwP",
  "key31": "3jNsLGbZDnmrsgpW1GfS1AXLSKP2KFtSKLq6zqcD2epFibonNKUYgCJgGSNDW2qRxkmHDBc6NXvE2dEiYdaSHHkm",
  "key32": "4EYxKAt763vJHKHBSp3KvN2NGhMD7FY6V4SqeW7qsBb1LHcMEnbpWK7oXMfcVKUoMWTd7TcWzZPD9mMfuFX18PUg",
  "key33": "3duCrAoJZctYvsXSc1Fxgv4u6U2YjaK1dnnPa2pqVD5oafJgiz3AukrcpNnzsPPzEJRwwuw6ANioEuLygNdnQ1K6",
  "key34": "3u49xjQ7JYHCziBLXfzRihvQTGbUgoVQZoP93qPjiQtLPsEdEUSvZdXshbBu5ES6wxrC75duhXaY3dmt16roEUtV",
  "key35": "rA5WS3d5AFD6oyLSqsSUKF3ueG65AWdwzir6qKdGPpmYpii4DEVZRva5UCB8eWcWuZWsWiF2wzpt8yXxaLDtTPk",
  "key36": "5Tihcdso27NVXLXdfTkCT9BiB9GPeLgDGTF4opzxstRfbGSR7H97Q8Mu7jb22NySYnDNKgNsVmpEErX6eSbSVSPT",
  "key37": "2Jhe692WCAPYqdWNmoxiX1NvdG9zHaTwhAvWfjNK7GpKpcBaTN7ZVzevDEhg5esLQXQgk4bBYtPAFNsZuSFVzBd",
  "key38": "TycqaJ5vYchsWPmatJeP58TLFB4x7L3jH3VxULSpTqjvAcJ5ric9EiaobmqciCTmbp4avVWNU8nDzha479gXf31",
  "key39": "3jWmsKxaVrDEaxrjfwdbVoq88mZKyZTkytUbdDB3R9SX6aQyADovVzUvZTA5UkyKrCiK88d2omBxRYJ1PEsSRzRZ",
  "key40": "5YEwMDHSPGznVeJyqtCmbDXG48wr1gFmDKPsk8MsSmcTP8CaZuqfakAkrZQDbkZmgx4FVhC4Ezc7ZdLtme5Wi4xf",
  "key41": "4smZa1EnU8XN29dUb6zoUK7bXmzX6mW6NGcwrv5NAP3ByjDL6YTDiwk6nqQZVQhXeevek5DLwVrWqjSneMgfn8Xb",
  "key42": "2vvRoehwVPrGgemCsxWP2zBR1XaNLgLPKACD6aPcMH8a9KaycUJHp8xxFEZMEVgZm8PDojh3X4nCCzqpCMKmpMTo",
  "key43": "3F734odVxJzu2YunGYdjWDtpgvRdKrLQfEajiRucW4bSiUs8pQz92Dor7S9GX6kUwYEd5z9hUsax5eZ2VNPgJa19",
  "key44": "2j38QHzafRjCoJxhzu9wfgWPFBr3fKsdkp9tEdNFYGaULRZ9fkQU8w15tnvgsggdK99JqFucaNRQezFUk4co3AKU",
  "key45": "4Dzbji7hPRfw4BSZ4xXgCGzrDAgZYhbk4wuhuFndMT4fW2suCZWWnAki6sWUrCQMBgv3MYbiTkNo7bRQnp99buYq",
  "key46": "3e2nXxE8CeP8DGB85NnUJFfnjAmhQg5d9tthsH1QK4SkpenCjvfJ1rW6CERsNvdqPV7s63YTv66eHm2omV75pEJH",
  "key47": "3vmUKVL95JVEWWEq6WmiCxtyUnLEbM2N4Pr9VkAL2vhCBhjCKh6G5A7xU8o1T99XXFQTH1Jcy8Mw8qGT1KgrCdzd"
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
