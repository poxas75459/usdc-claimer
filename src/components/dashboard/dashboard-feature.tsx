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
    "4ciWvPiWNRoioABcEwPApV5dNxGZJh8nSt5UL2dKDtKxzRCXRTE94mpfs9WuYXnYpuajsZFjvPyb4hnwo5wiMiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8wDPezvsQ98i2h2wSHMbWoaKAhx8CXCyLM36zeGgc7dhbxMkDxfUfUkFPfTpwVou1THBamTj9PJddXpWQoLMre",
  "key1": "32HVVyxYNX3NWjGHFf5zEmPnxZkWkn8csLQq6hnaoSbzoUkVGkzN1cEbdibXZDAi3ZEqQRTPtXmdUECAjQrQrUuv",
  "key2": "66L64NAJ3o5DAgbCpX8JfmKDPJBbL78vsJzD1N3ZRzTojPo4UiFfo56K7DXCPHnC2FT9XKtkKLyUnsmKjFp5exyG",
  "key3": "4HuKwjdGc8qesSDqcKfUpLpog7CnVS1bwiw6vQGuhLTy2swdJDHP1QjP1FGWxprrqGcbS1W2BcMR9BxAz45xEamZ",
  "key4": "3G9m9KkX1moqbW2wWTwbcDEZRt5QSDSCKu744opyauKvqQZzy7owS5hnt9Rs315C1mmWRezww3CB8aJnC4QZafpW",
  "key5": "2kLLMr5m3bqxoGhbsG9vWt3P1bASjc12Xj7mz2aBMEV1Lq8pB3nwiEChypUAVsGxrA9DAHmDJxUnN9bpi6np6zTM",
  "key6": "3t6gHzGhBiYAaDUFc9PJGL2Mucc4MrdWgStG6KkJnBfZ7Rtfm7UA5vV2V72M3yhgf2RP9DNCsTR3PvKmH2EPQzK",
  "key7": "3VDTaDss2guT4qTS85cWT9TgCMkkKZkRy8pRVSbCfohKiYEdoPuHNzvkqMR1hNkd3TrXA4hX7bMmfydALus9SrkJ",
  "key8": "NJJ58ngNCfuar65AzVAGxNgNtr1Pzv7Tbn689FgGaZMvsjJWVd56qBrpwEebuTcfHTbs5YnR7g55Y2p28xH2Y7Y",
  "key9": "22NHHL1NhANVFv6diEdfisB3j9CdzmNXDLE8bFuxCNHrW23JJ1cd61JwKh3fCVZpw4hJpgZWoHBBiXUY7UseYjPf",
  "key10": "55A2okdRQW7PkpgbQBxwRuacfQTzysDRtWZaJrVpbawCMYjW625uxYXnivdTD62SmTAUJwvYgH8gzm4UbrNB4YaY",
  "key11": "4ZKpNt8H9e3x9HruGg92YxAiBp915UGdndLmDG7mGdLxLr9Fus2yV1ddhTpv5NXXXK4txxHR8f7ur89V6VaDZLh6",
  "key12": "3VHoXMrRZ9Nhwce8DxQ9aJeyNZukJcLZG33abgUznFQFBCnb2Zqr2Qt4X8mzzGXQ7UaUuuoCLwLoJ1xijk9qgCzR",
  "key13": "2LxEfUrK2sTQDP6o4ctGZSxT9yCJWCYF6MBd1FmJDJrUCiVf3jZ2Uc5ZSTHDSmUHd39Ze3VVTgzrJfB16YjS6KAE",
  "key14": "4HfZ7r6mJj9C3iv2nTGKtMjqAjSP3BEkWYfU4GdQ3R3MxmbupUs4XASFbybDeqQKABnjrcfULj7CwtWoX184VazV",
  "key15": "346gMXqrHmaCCvK7GWcwua87hWU2qa9FdTNPz9UVESoVz3gxrQqMGRgNHMcZEFXW9jGbW4rSGg9sRYcrcX4PbPzM",
  "key16": "UkB3TKghjRjXKJJE2jrEnX4GTuXFgRiRiicSXwLTwi3ZaRgaBSkpvGnUeXVc14zRSdiN79FY5CCETg2xNWbCFuL",
  "key17": "3sSkLPM79BHWYnroNB9zKYar4rCHSEgbnkVZP9wJJJTtXTSLKov9dJLoUTgmvCnvgJFcpYHv9zwUGfRSspJjAHpy",
  "key18": "2kYYJJpuHGRYdTqUy7jpho8xGD3p6YHjvZauEZxasDDuZK4PUHDvu7GuGKHPeYoAhhWT4Xu4ELba8JR82FzNbBHm",
  "key19": "uRZSwD8Hda5xZubK1ywxCT5GtdNo7Cb6RV1aE7guTgwVhSmJ6RdZmq7E5gRJQzY3GxchXz5tV9PF2g6YkWBaFFJ",
  "key20": "YuAKrtF22aAx8ZKxUYvbSQWYdjqC1E2b5UbvMcRvPuEcjYbFX5AArrKVeyoFhsZE8r1t6YwaLFbpdq3ZqkkwWj4",
  "key21": "5wWvqk5PQvLJgb4gExjQZm9t8dzzUw3AE5Xc7oiEgZ3E5Qz9uAy2qWSDXUQ1tALSKkRPQLLbh3tkfXLUuvL6Wuno",
  "key22": "5FRpZwWiEwMAQzPQ39RXJfrSqjmWHJQM3KyjVFXPfQw6spzWX1SbzDCTqvFEbqQ5a6qEE1v68fWBfvB8vaVH7hgk",
  "key23": "61dkKk9X4BX2Whku4U6XoG1kbB19jKUZUPyK5PAt7s5QLQsFNJmeJjpcHAzaTqfNuPUcYFgxKWYN5bX26hYfbcPs",
  "key24": "3H7WcA4f3H37PAjqogzxfLZKmLtzmtVUEFBGKkDbY7Y8JRmb3PNrSYHh2eZvCyapsZoVP4yMn9QrbJxKay6kbq13",
  "key25": "5C3RSvZEFqTs7CrAwyUDAMyGTds55hKZWNrNQdMos4BnQSivFgFyoLbNi3s4H1uaUt7UYjjrbB9UdtfPC2pqrgxR",
  "key26": "RnL33z5Cmytr629KAy1fFgNX37WAD9yZp2EMG5g2S94YdgBQUrtnFMMMw9WYYx6yz19ypYZUUw1WkCB9oVz6rND",
  "key27": "sgUjQ4zayp6o6RcCWDFUTi1LuEfXoZqjtfkTRp36NVRgRWyFDFUmZrNr8jJKeTemntDnTF8MWoboC7vNK6mmhMj",
  "key28": "2N7v9xsqyPjKJKBwvBQ8tkLx8PLwz4eUGvrBpjUuELX1RUdtgqbq39bXpAN6HMurmDvMmUHN6cJPr5wWtu3viXeq",
  "key29": "37MgUKur1zidHDyBqYKArcY3gFAbt2Sj3hWLKRp8snFXDHwA97YfSfMwtimoJZZNKvZcpHeGSN9ozYMw1UkyS22",
  "key30": "4hd8uDutMnaBkcMCw4GVEDAqBRJM8rw6YNRSw7fQ1yAWD1gLEidSyeK1PM98xKQsbTkGepKxYRJUygwQQ2CbZTss",
  "key31": "28sC2kAT1kqYo44DbGQEgjhtLkwLA6cah6CTcHLCeSw8vMqoSYYQzgA8tGHaCnwacA1nRYVnySnviF4viRKjdsx3",
  "key32": "4GvouDTC26GL5mkmxHAqf5K73aEyUvKsFuQyGdm7VV5PQz7TbaxSeH9TaebKBKCj2JLuRpvzEpFdZxb2butYhPWZ",
  "key33": "3dTpd8mEnx3nHsXkzoF5mvgFHzcaC2U9k4mNwGTAQm23vWEapQuoJhHoercqWvHAqjaupSnRwdc4QXcbphxnwHK5",
  "key34": "qwPoqktqLiLvboHcxGHXLGiyGF49s7LRowzePKrXuATpdZGzxNgKLEwR3AGiAncNaY3rt5Tm6x3rhRqrAFvKEcf",
  "key35": "5sFjFwVfWdf6JC97mC91wnSsJYyqXvmtuwy8RCqkxpz9xcKSELcTrNDq9aaBfMGut59tCXiqFf8f5KTTQaHSVQHW"
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
