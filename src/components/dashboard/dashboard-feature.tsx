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
    "41YLXWxbC9i2o35hpP5Emhy83zfbQpRVsEDLNBjxwguAWW95rf2HTXfXyZH9NAF8kLKKLZxRWxtcDkDfGpN11Kb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtjuNapsh3CfkUHjp8S6X3y923oRmAo7hKJpKXCeLQAVT6pFAZ1fQiEv3xzwRUs9s4kMeZygomyVchrSp4bR3tk",
  "key1": "3pzYpJKX1DcNyFUK6gKWkKwbNb9A2V6adeDYCHF1YLZTHfaZoveXFYcZ8C2MbEX1AU72Rz3QFwMff1Yt7dAphHNS",
  "key2": "8pN5zLc1g3ATGC5VUZqwxsBGbiwD3CsKY1pet58JRzTmMR52aa2aJ4DoVE73LkRPBUwzLM4sKt6LEaS6ZcijPFf",
  "key3": "5KJLHMEHqtCvHWUtwgH8A15PKHbEWrUjs7xGySaZXHnZk3GBp8q5nx76euaK8D7JvSZTyKwmMXiL4mxwUUqrgdrC",
  "key4": "3zh1q3LfQUC7zrW8dYFEh53PGPtvE1ohZSNz3VqVrJ8Z7qsbVTRd6WvU6Y7Jx9GVGxcNMUtpjcYn87cHAmeaLuaX",
  "key5": "22Yjymay6APiiKjd8mC2bkU3XpKndK76VyH8gYC5VubMvX962Hp5mTDUjrWRu3iBaqnqbce8dsUmVAbSCxZ5itqX",
  "key6": "41PBreJuGBoocRNJ4bXJM3e4Kswr3tXUN3FQfn8AietzNuhF6mHdZCDR9ejRmoquhQL5SXMpuhovNVkiFSkW4o1u",
  "key7": "4we8kzWmtJSn5CFVXmfizAHokGioDDdpJ5VkJLng2bKKTpe8jdruya1PzBPzDSQQLkXsiKgJTUmtK4LJJKR9jERY",
  "key8": "5LrSWNPrNKMZyntdRvofJtKRzqQxQsQb1qMJaA7x6vVom8VwREhB7StkVZA1MHNCAjJhb8wLPYgT3rxiYehqYZgg",
  "key9": "2SGRcktfgZEpFJCZxbSYz7rHdJPREkvBTkV6xmR2AL1A6u6gyT7kPLNjVgF2HBzfpu6jgKfzBtfoqRUCTxc2VB3f",
  "key10": "54vQPcSGwsF9AMHXdwpstnkhYSrbzRmYSbXsU7aCjDp8T8DAJbNJvnpz3UKEmHB53GcUERP79S3KMF5WBL2aKiqj",
  "key11": "29NkpSajubpwtRuj2VBiEw5VEvDAxv1EnmgXEANktMC5UKu4EWmzTbBzuhS7Hvi9JKSEfsoNgWUVaqRWZxd72Zbf",
  "key12": "mAQW4LCWXsDTaWunWdAUnkJi1B23rD6XKQghyUTBtsZfJWwbbmSrnj1wmX95rJFMp1mGJBTqYyWiLVw3uuvQ6zG",
  "key13": "6BJ7KiCearKgG1Sw5yKGbRCWb8jf4HieypSbvsuwyPikdx9XHmY82FRp4xLt1jDNEjk8TEMpcUVHGoUopGEKx5C",
  "key14": "5b4gLUdLVnEoQN9s5QVpfd1TLmkPjVWL7xZtpstwW1Cc9Z2qFjNsuPbq56UeiPK2j6TXpQKXGcPM8TvDACzaEDn7",
  "key15": "2AR4KnH418ZgiAQSwY68NUZqikT4iNCFbc1xCYGsZsgAh458Z3uB3D58Am4SE1didAmWGdcZQJQike4cpHbCmiuJ",
  "key16": "3N539oVbPo3VeAw7xg2zC4SLFxp1Y5ATZzojGWVGY694RcJndLAzfUxEihP12o7Jii2gxNPMx8Axi2PdDzDswfom",
  "key17": "4t2kCCsN9BimNuq7XfRhFFHMfjtnijmCw1uHBZYkVHAP8dt45hpxZycrHRwNT5LVkLJSajacagrgjKureurZ5Mc5",
  "key18": "4xcpbnSM6HAvseY6Tpn4tvugEkVEk5t9944B8DqHwkMN9M2c7NAEhuy2LR8AwjxaNbnX1A4cqrw5SjFvFtT2JNKh",
  "key19": "5wfU6JdDtcFJ8KEn145ktwVC8yTgtT1jTQS29Z1JSryEcwvPougNAianwS7EHfkucpTf7MW2ddvTbpN8KdEhqVUP",
  "key20": "5aSg9aKNgTSC9x1nDyyyjcDJs2PvXN4Jn7ECekRzrkH76cqqLc78hLxUWRN9n4nZeJaUQfG4xxf1BpezV1SH8SnY",
  "key21": "36rabNPMw9YVHiiqWzYUMkYikAwkiProWFa7pDEVywnP2nXJ72hnsNEZZMfhdx9EPm32Dy7oyPsMQ85ye9tGvaH7",
  "key22": "MC9FhoxreQrgfx8RaRTTitLJYi7cksg2edvCUgMeTFZKa2z8hv4F8yvhKqYVtUSs4FT9i7LzxLGPCzUbmTxAP4r",
  "key23": "PG1ch88CW4n7gRnc4exoJUssZ5o5x84sr2UL5JH3Nbygk7avm8BoYPEjQHKtww7PrH9XK1sj42gCSP7h222mCaY",
  "key24": "TLizQ1jsuEfpkjkyayguFkmghQ6SPFxWnzUHr16Djh1rnMnCbU1qGbD2h3ZUfnSwzFkcUjjhEeKpdeUZYBDjCRw",
  "key25": "QEVirY6YSZVTFJaupRP5sLdJWa5SSgKhpPGSLnn94UHjxf7WeETXMhjdBVNH7Ab6UXMWdBYZ48HKH1FiqDYxgLv",
  "key26": "fT5JKeBTcJoNi8vStMhqhqE4CwgA5JRHvgBZrJvBXw33ndzuXB1fweDzbHP1rEPgMxq4i2mNa4ochSDpPvTY1P5",
  "key27": "5Yj89BpcpSq4Y8kPZtKtGMju6jaLX2MZVC6mkLvVyND9hTJ8RS5UhTpNuGifeCrQqPfgU1XtN3sbdz6v9QAnmZxT",
  "key28": "uFhWjfR99wunn4NAHQcwwAwrHwo92s78oGv7isQWnWF6Ydv4Cvz2DHEEfE2Nvrht6t4UF3RjQ7LY2YTsaPHzGFP",
  "key29": "EEmCRp2ibDh8KVeD4124d61kHrxEeFBmGjYBotyaYZsFJQi4iUnsoUvgkXZT3q6JVVk1SvmYRxkxWSTbfGsxsN1",
  "key30": "jYsogVzhJkDkDHrceMnK6VTHyCTmPFiy9FzqNe7AmgMq7kYUNBHyjDW7UrLdh997QhV9FGGPBdikB1Vc2FoSCoH",
  "key31": "4eUgTxgUVQdoY6pJWtCHyHrE165Vjc745dSkvywgge8FGBPeJ9x8wCGWSXiLUdVy6eDdUzo8nA9kSfh5HYgU2UMg",
  "key32": "5eLZehrVM2mCzAAbPNdWGAkvQgvedMn5t6irVJYpvwS9hNku4Unigm5xEnLPjMW9Krvu3jfsrDBwuowNxTG7nUzc",
  "key33": "Gaa6xhBGjrwt2jPmNZS1aSyWCDy7rDu8uXBViU36KCHRrEHwbDGWH2XRZzc7sWJiKeR5MDu4s6GNW29H5AYkM8N",
  "key34": "5ZtQCZN236D89JG6VyFkzoTSZgaXZnV1kaNDoDf52bGcpdZWVrGJQ9M9NQJ8Xv54uj73Bud9WNdaUV1j5Ko8mHuc",
  "key35": "2BZy2mPxNtCZA2Ech6EFALNwaz2Q3YsDiPxovViCSk4RcJ8RWjeTxyok8GkReqJEGkdbw9akgPcuwp3ktLZhKain"
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
