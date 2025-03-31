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
    "36kw1AwtGdTZZkfZyTH9SnYmHkX6yG6jvrnCxYvCLaotMgzzfeqjsTRTRHw8jsmCstDhebm45unTWmKPGSmXESdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CBg4vwkPF9Pauji5mEvXpwwwooMvvEhHQEj4SvjnE2r37vUcF9uQnaTnge8fRqR6EgYJNfLZpvuVp2RY8dPVHAy",
  "key1": "3G8RZuxvKzhL5Gpt62DmGtcPrVjc7AxFRSvAfcbKWBKegf4G8qhjBB78a5GEFryFMc6Numav8aDZSnGoLNpE7s24",
  "key2": "henegeFGzYsLcxUufDBi8FNPkf2ByrByvFdhT7ctQYhsSzd1EzK4uviQ5dQbKKnAdGUyQEb1o5G5k2Gwg4oTHAz",
  "key3": "3QCU3YMgHVpUugVBLLYTLZKUsRvKmS5nNZ9SmS5wfkmZ8HmH1g1Bn4M5D6zRM6iyEVmuobXnxhRFJRC4uLwrCAAQ",
  "key4": "3sUqMiGGjmAHUw2Qxaq8LNqMEujjDnZqd58vZujoE9fkd5cRery8acUSwbaAMpX3X4s3gbj5bTm1ZnXQLKRQXtRK",
  "key5": "3XvXqKFgton5oDF2FAh9uTJ5aqFVvJxaBBcme9GAe3pqncFpJsVf3dNLUkhYiVSDNVWXcbyMjgAqy4mcj3ukQE1Q",
  "key6": "UnApXSwWbE1sX63pzkMY7MpqAXpdqK1Jkb7GXBuaUEtN3MjqrxasD67eR9TvX7nTM99hK72xBVnRgUaYrsHZ7iY",
  "key7": "4FCrCdMPHiYcXBQQEtBaBx7oZkQbUyyWWcYQ1BefJ9sdtB98HUDUx6CbDhgYc5uVZRXGHumEEs7fWZ6cGC8mYzB8",
  "key8": "62PYufkZdy2vnhD9ki3ZkjEfkbuLvFfqriPjCk5RMdeFi7daarGupPqm9R6R1hejQ97qLRRga4amyeeW5Ytpe8fz",
  "key9": "3djZfGLd9yNhWBVLmNJn9KHvdrQPK7bc9YYTrFGYaRDeZdhb2V8rk2BKecbMJNR1W7hXoBj1dzWrvvpwxPnv3V81",
  "key10": "39rhzxTkLaD7zaeBmCtkV7vA3t32CLskcQdxD9m7gADkU1s7pMWZ4fgbfFGqhgEoYzry3GzfEoP1NnVfPiX7r81x",
  "key11": "4iUXK6SHGgqXhfufo8Qy7EC9VnyLqaKKr7X3NMYFXqNmEj4NnnZ74jesKMxoV6CFB8eyCjvMHn56BS3gk3xdZr7M",
  "key12": "2B7kjnMJkdayA8sr4nKF5GK63LKcP47vZ8TaF6H2Ch8KdS82CXjfL45pF62TmHy9PdWehgN3jFi5KceaMS7p4oej",
  "key13": "WbNhLoDoN5RjuFaScvXLgvTezNeSuUD1GGMrxoAa8hFNZj2yVNS5D4brvczSBDW45gWR6JStPHxSgSS65XXHjw5",
  "key14": "tkJXEG6EXJEpkWS5waE6GCPuV4qafZrjT9Bbsne6TqJsRpLHQ8xo5qEan99B6rocA4RoybXbSg5NVCPNWod72Br",
  "key15": "5yf6dEYT6B6uExm43aNbwKco3VFfFw6mWDZMMkMMGm4WFW7gVS8s9qGgYqFRFynht1YMSAvSU8n3w11UcL8mJGYe",
  "key16": "4GrViRoHYWFVRjZk2FW1YRSozeBchAfmVREh4HzoTAdju1XVaSbQ3r7SoCcQAMCT31N1HnCoFaCWcXrsKri3eQhU",
  "key17": "3ikHYB6WHaMjXjHTsPPS3HE7HRmRdqX1W544r5Buh8LmSgQpvo5uy9K7faimBun8avcFpiZ9QNJYfz9gERAtvSMB",
  "key18": "kHoisbUwpg3xgyHh6rjF8ZP54QTWjgpWipnNLgek2iR3pnUfV7sp64GeK5ANcfRWyMPyiXTjfKU3p33X1E9kPpK",
  "key19": "4sXZavkdCTAQNjsDYW7CCPtvgj9tEUT1cgGCJmkSJbMQ8Ci9eE8KX7ttAwV8AQxRR1nMwj4Rm1GsDYfvefrM3d6o",
  "key20": "KcrxqHueo6g29J5yc72LY74PKRgeUPvtaDEDUShDic2y8sjZZ8DUPdEWqzKjSNZ3HGYasEZB27nxbXT9UYH7kNo",
  "key21": "4V2WpVTHDxz4Nph9NuifNkFoczLCxAVeHz22UHctPmhuT7CSAE1JUh1CnMV5gkMdznsF5xH4yF5KGezao7VBHGU7",
  "key22": "4zsDawoBfmoVxCUDNtncn8GMsBZN2Y51Q7bAZUkXEEZJ8yL6WdPzfThs7DkXAFUWeP25FqMoSCxx6iK1gNR5zc3n",
  "key23": "5MD4UDPiD2Ygv7tyvuqg2RQnXDnfkjSz94rU5LHCYpFXpeF2KSzGbUGZ4t5BmLwTniy1GvZcQPJAi8aYkmH2sdkv",
  "key24": "4zuMXkRcNFggG4AmKL3NJRyQH6xMNapqCziU5qqUeu4hDUmVuVh1BGsiHbgBba1HYo7fwaYTYDcijsocANDRHjf8",
  "key25": "4NAcY6AXGW9bE5yQJ8z2fTzRJbn7zvFh71XcvZQLQMZNyYNGn4NzqSB6PzWo1xoNCXpcKNVxQ2wmKXNHwz8nureQ",
  "key26": "2CsR8DBJFLNDDAb1FL5qhn8xZH8yLA5fVehuSit4tAyLNDN4FM8T8gaoyBfDZMjV8wgo3M791cHqKykaQFyimjpr",
  "key27": "4P6pvbjKZxZg5VQpYs9ZVgtFDqui8MYeQYTrcf2NDXknGzZ5kKjnZ9EiaBmz9rWTm9Li9th58RDseFn1twVWSHyB",
  "key28": "4X6zuJKTS7FgCwKaqxprkooDEKcUc1T5fDgBxujL96RJpRRU95PQzVc5Z2BFsSuG68xS5BMFLA4pjPHehtch5s4g",
  "key29": "RZBfnzwXp8tqb77RXdmWHZCZiwaSwo6XCDwVpfFtaAVoLLnZjLStCBaW2tnFSLWcbNuvGGmafAtUvM67ppL38Lj",
  "key30": "32bSJoXraBs4hmftCEdoi69DeKjrnFTwFnoqKkxtfeSAPqaT9CJkPyRUHDp7RxWLseuA7JyBstDqnpEPtjG3ycx9",
  "key31": "4iChcno1nkfV4iXUZzrUMk9tHFQv9rRoeXA5SzJsUZcZeRroVCJnCEtbf2zRZggKHVHNYe1MbFaB2XZ95gsN4yLp",
  "key32": "3bmTqR4DdzApZG5kenFVuBA6gsfbohNfDrV7RzH19qf6vs9uLvcZ4Vk2TuAuoSy84PJuxkHCfB93LubmDMFZAoWh",
  "key33": "2qXXvsnQCSZWQNiHAhkeeQy49kJDQRUKdUXwGrZyu5Ym7mozbVw5tPshLcF4ByiYLnP7RwUjtsxRBawNDX1LW1Fu",
  "key34": "MZG6NRwAZdWz7XQbk686T1RqRbgore6nQjg4QF7Pp1nJnXqYeEuNi5jD7pjCqcL4YfAUeQkiYMmnNJAJJPyFdr5",
  "key35": "27WiDXt2DCAaFaVQpGbe3M1BYNz8ck8NetKT42bXAQsdUBqaXukrF1HR8AYDBSZbU5NZUVGYzQQFnGrHWXdRYrx1",
  "key36": "219bKdxwjgDPdp13ytZ7XMnNr2ZYYKcQ58G3wYP7d5L3rAEkzbEsC1FmsnG5tbAuwbQnWkdztNPXTpqdjkn1hWtq"
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
