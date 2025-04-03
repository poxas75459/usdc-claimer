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
    "5ff1EU6yoS32VZtXy2D79dVpwTcbDVEvvHwgGfUYzLau6ZJwffT5FXbsPfMWdSRNHCj1rZRYyqJSpWTvjAs4aqZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEKU8wCWxdGwtuu32UitFQEFjbWDMkZknM3gLGR41kCw71Aw9Kjbi7woXtqjK7RbHTM1Z3Tj52TUJdoNomuj3mG",
  "key1": "4yaMcTgncCsrApayNLSVty1wtGFvnzGAEf8r97SGBFyPHEokpuQcxC8bWYZmMMhtaA4R5ayaUq63icPj3CAaC2ZN",
  "key2": "4ab6FitgxSvH7sY3rozHfVM2z41JMPsfUUZJHtgsLyTJ3WjFrAaJ8xaeDN8vRkQpV6qw5RTaN4F3qRWk5MQvEwwH",
  "key3": "4THhGm5ueAdssBc8J4NnAhv3CtWoe33LZM5wRAzsGJRyuwo5n7WaBtAnHd2eNdkLt3SiMg7DZPXpsB62342Qc1LV",
  "key4": "3yEczAAnMuyv7nACEqjouuinAzgnu6LqMZsT2Z5vQvotsrW872sgbpsy7NENfJAU6weLusMokuwmZiFUV1Cakafi",
  "key5": "3BY1ynKSbRyWuL2cCctztTLE6NPhcmeAszXt2upaBBbSAFTmBHHxmQobyxaWou8irmACB55fq8nPUBnMgjtoMpKk",
  "key6": "WKUZYE3SdCeYAAz67VwKGwE8E5jmfpWUzsCwbymyfMMHADnj4ohniPbLRtVXo1SwZTeTmjV14ADyNVwbcnejFfY",
  "key7": "4ANUxiij8AnGsQmubGzgd3kqgHssxBesDHpa6jaF5YmRjk8G421MrsHoMNTYmNibmJrQp5vFKrFUB85e8gQe1xWi",
  "key8": "5rpxgUQotmtxVgwGYfJNPKGmeCZaKxj4o5QgriUEZF9RPka63VQz9TRTr3CNTvBpHEPFNFJkAgfSvST3yAaxFyD1",
  "key9": "3VDD4NPhjS4HX2BbNttXAdFkwJg31sxNSwWb9CXy1MZhqjujQ1osnUEW6HtYgVABokkfZLk6dDP1iwXeCD4BQV6s",
  "key10": "4fCj48df1kK9jNv8futt85u5E2wwAERM1QQ8vk3MGofftcPLMnfJyWcMWBpfwPXmqekTWSR5pJXNv4TdM6CaPwYJ",
  "key11": "3o1AnFmWjmoRpCqEzaNCCfmQFs3pZGRqU8CzzZeDyoqGK2Jxe15aTLn45dtqA2DnzUoSaYDWuJjAQCufyUhmJQb8",
  "key12": "5aqiSJ1LUUfzCh1PRLbRQWKiywXcpn1x5R5wmsh8eAtWx8zL9bm15U9ivceCZoSwzeMsMpjoTgoBoWM1sRHnoYW7",
  "key13": "4czTLs2ATKuoau2gcHYCingN9v1bh7XDLFdgm19ZdXx51NNKq7USZgyP6HmyS9GFKVpnNak4oVUxatQjdS1snjTy",
  "key14": "3fZ4P4GgH8q6qqmSw7fa7brEq6DMAWZ1Wd1w13QJzSE4ytiwjeaSZ5t6SrnK3uiW4nG4mfmze7UBCwby5WkAYhKR",
  "key15": "2csUaMZJiMMi2jcN9rP9j7oMmzgmYyBcyjRTiv33uXouJ4EbgFdDNaETscd6gbqgXtFtnhBuSC1rBB9FMQmdfidx",
  "key16": "57AWdrJaKfvMxiVkdX9St9eNMA35vc1BbQ5182KeXg1EriaHFMnT1x7KQLpCPfMZngUGJxsbBV1xvwQiGAiExPPG",
  "key17": "2mr6HoS4w1o5uzEr5daNtziCwykQDPD2uSeeDyzCAbaxTSYx1MjiAaHeQ9N6J4KjNCWqLLoYLoR6Ty6zYomNN43r",
  "key18": "t6gRBhYEaai7CB5JLwAqfdFtq8GUwb5mhhqTSUVx7BYcs5kbgih4cEAqFqCcQqEWz5LsAtCVf4mwhbuUTB7Wqid",
  "key19": "3PBNngzz9BVXkA6kLZM9qjyxE1DCwjt3svNn29vFURGfctw35JMpkXeQk7UcCAQB28pTWWWW66kLJZu3cTz4Scof",
  "key20": "4eCNsUB3pFVjsVJ26mvS2W6tSZR2M4vopHTVNtSNAPwG5pKTsBGDvPbWX3Aoxy7CPA2kZt8Bd2sjKitwuGU6Xbgu",
  "key21": "WEJDz1h8nHXNnKg5xXM2rpCg58Gqr896k9rt9ixva7aAH1mpftpMCy6MC6CriUiBtQzERKgPeLPTX23y72dSoXb",
  "key22": "5keRLEx4JWCtewHLcvDN3cy3Rz3STCEioMmMdyLm7T4gBjAxHqxEvMg5kATRVqdNagh2htBvJxhiQQAs4kJ2K6PY",
  "key23": "5mjwgPwEqb6TP9s1ySYz96cXabqAaF2hBKCvb435QsV3xJhj8EobzX1ZQGvAcQLRqjdFMcESSk78BqusgSZYENjG",
  "key24": "x4wqKsmavTiFZ28wnJFR6PjgxmzWbiYAsKPCZSkX5pCZqpnDptURypUuXmwqZBee21LyXwDsFh3UgHDHuSSq267",
  "key25": "125qD6QppYDKUigqNLi1Q1N7xY5wGhDNvtQjJK15B3UBHY5WYiQ1Qu1nBWLoN93MNjFNJJ2nFwzcndoe2Zo8xdNt",
  "key26": "X5H8Adj1DCG94bzqSwyu9vWBEQxNV7jaA68bqdjL6prpcqTYMjjGAQSCxWSpEQvUg8q9pQW4ZQKtrWjxYXSebX5",
  "key27": "2JUrbvWxTE3qWr9vC1w3ZrrSPHb3mpZmTkasZtqUgmGTA4wJKGRN7Dh46G2MLc99E59byY1FbY6TxPEMqau2TYkN",
  "key28": "5KRPnpaeB7vTxjEujmMLsfPiZ1Y7GqgKBfZeUwHqsQpSTrUqfSjhizvWijxJVLyYe4UTYrFW5bVkLwQrxYVWzumt",
  "key29": "5axnP55qmnWhXLDYDyUqR8iGexg1aJw7a4LtiALumKrRuZZuSoVBW9nnL97n6ikc6hQrwq3v6nPyAiEh1LQh6LFm",
  "key30": "233EZAnY4nYfj4E9SRY2MBVor22YkjkxpVt3y5SiCeGw4xVeami7UQEpnPpFVrGgCFfZjhX2RJh3mt7UQcJk57tE",
  "key31": "2qw4ztxgzbHgXGyTYfqZqi1vNaKgBkDDGBJ4kwh5vZ7sVR61n2aS88kwSYpgMNgFA9a1jojsNjpN6AdhKPMox47e",
  "key32": "4RwVLnvSkY9kuTugCvnQvGv8UUFMrwTUKA1w9oW86Xv8HspiGCEEXfgVoKwtikyPcXjySFvRiiyMdrsMyKzCKSnz",
  "key33": "2Ru5QaMyxehWt87oEmEpaNRq9bu5GwjAhxvQQMxWsskztVRi6XBvUWAGeYcZeujDRXAKChjw3u3JodzUvU3PR6x5",
  "key34": "5yfTgWzbQegxAsjhxAGgH27mZ9L7ZHYLNgy9k5hwCCPC77BKDguWVv4We97bnjwJY7KBddLmb8CjJfkSuXUPDMAn",
  "key35": "G4N59MNqA4QbgTiTdhRvjH733JSMiAVbHxEBvNM454BmngdDYgkqpMyQRzxCx7Wfcjgnib6WUa95tEruoBGgr8p",
  "key36": "3K5JUS2BaJkygcR7fs4c5JKj6Ut4oDy27o5PS939sLKavot1UJzHHnytbadU2xGLSFjApCmFtYxHYs11maPm7nYF",
  "key37": "4UZahGqg5zekLQEqbspr41BpMFowb5ZeGfj4SWu5KrXLJ5mdDjeXHzz9P5DLnwrPDmPGRUaoaTpaCPrFBv9bTXHN"
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
