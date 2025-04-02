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
    "3N8j7YUSNhFacpjqJyMPSjdwWonpLzUgF34AaLwy1QnEFPS5mCJL42sTA6DMkjg261oGsannWvGhk8YLs9pJGTUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kS7WK3gaXdBV916ysR4wCb8nZ1w2p6NQ9Danwc8NEAT5nBqDxP4ZTMZfpXoAgk7q8rMhBE5vtadUgU1XZeaMKBd",
  "key1": "jSiRLyGcescxe5ESAnzQuv96APJcinx6hC2Zcbfs3Abe9KZm8JaLJWdt3qzw9rcuzuF6P6yEEwKBH9xe6iTWvhW",
  "key2": "21MWemXqFEEwkuG18FhwQ2ZArEzvnhtBcaAbipDgUiZMspyuWUq2zhWpctycTmFW8Qa4CweTxjTjZZ7cBae4Lg7a",
  "key3": "3xMwnVTsmwPJK7Sw3W7Ev4FVa4CKa8gma7iSy7k9mcxokyHATvZasZR3E823eo4jvPh4EWW6vdvNy2qpKTWwBvCi",
  "key4": "9Tq9kNDUyQTtbNTrTsvL1u26o5Hp8qMtdV3LCrcveqSuAD8NpHTM7JbmwK8KvomgyboKgRYVEEdtLtY6cNXo7fG",
  "key5": "5MdrnpcjjWZh1rkCTPK8RcdCboThEcB4r1o9AyLhtTdBkUrXEpsk2aF1vjb4yCVjRXkk2kqyMY5RihGGtfsSGaQx",
  "key6": "fFnxwjKxSoUa8xbUXhcNHmwqU1Qsv3qW9c1Ns4zNPm3o9iCuEWjjRUqERdB7xc4BYnLnwfmU3wPsq5NiDnQWjKN",
  "key7": "5nquCvKCoV7uGF76dBWSufznaGSGydEaDUYff7tULNV3hiTLCVEt7dZeQ7sQrbiQm277H4YEWxGAwMFTmqeFgpYR",
  "key8": "2YQpJ5d5h3VY7pmTL6bjkeUJUBxPiFoSQYZVR5m2AMe57wPKUqqhd1pYCTahWhk6qdTvC4tRuWUcmTDpM9n9i6uK",
  "key9": "2hbD6Wzw9UBhRUGG5U9HpcTf6oVzs3Zog33mY9DHowhQm7uW5uRu7sfhCj49gYbrdtjf5PDcqSXYrJmY3qKGxscg",
  "key10": "4q4wCtUVYsgRe3F5wsiNq9Qj2m8WKiPAEWXMdRpMxbJvC94UcNEGU9R9ewcwfb6sKY8WzE9PHPGLsYHNDeRL55jy",
  "key11": "4LSfUg9iPJVboXyXQwfKV2uC6DQBZEHH4YCwWwy8xkiPBUdS7FCn6EtAMFGSsrnLgwTtydLsN1YLM9G21A1S563t",
  "key12": "5Nz8WRiEnup1TpxBy27f7boJW1ybLScxzYAvEVPbDWu8rMKVA4WNxXV9Pf1dHST2JrDqW92MLZyN4o5ka15mq1yj",
  "key13": "5r5qQdTUWUhDDVY4rjZ8B7epDhikddSRyLTwKUaVsmcGMZLDgF1qppkDiyTniwYHXaWKs94SWVn8RbZYxL2SVsC8",
  "key14": "63FD7AEtwSDNVbCBRNCVPJvFtQEHtL1QHkuooXfiQtGfoP42Asrgvf3mCoEr4vnY23U2VPQuoK4QJHqiAXJC7Vow",
  "key15": "3rvpCxKNatnjbGHVysJDUDLJ9gWrVNNYLcwNfyVngfca1HPWeZ5duZDXUK7uiKNfTKbWezyy35WdMeu7tqXYdCAQ",
  "key16": "3FAEBEFB6Kk36jmKHKEQkJziRbgoYZzo9c3uHNW1CAK71Vtn54NYJSKGDQWMjTdhPbm4XuQNH7zMu5EePJhJCd9G",
  "key17": "w4DbKZdYZBWs294a4RDycfrn9a1bcZhVZg2hJn1AAjTGqA9oqojkA55xYrBytAWkAqKX7EAYzQtmXE9S7hAVHK5",
  "key18": "zF7Ldw3iPEifa3VtVhURZUbeiTAj5AbMMto9qeLppBuCjn9rDdUmzLxYUuVk54PpdHvCf7d8Qokg9VxydQBGW7f",
  "key19": "BZ4i8jiQ9hTYRLbAkizo6rBHFcbZLru3HhHghfyeYbkmAGpVX8GK3iQwWpinQ69vbfuF2YjApV43ZNBwNn2Ui5p",
  "key20": "4fy7FUaWZ5K2Ubqfkr5nj2Uu2aDgYthLihVgeGLft4aGjhmWaTs2Rsu7cAFiuxPAtEQiUvGhexb3EhXzrcReBM4n",
  "key21": "4ZcptTJCZ3Qh47BKNZuVcMi2pFPBMVLJaS7t5KmyiLVBdUp4UCyVt8rhsemqYFsUG2rgJ4fK4zjRV514aT7rB8k1",
  "key22": "2LoMGGG4zkGYJv7z83Yjxg4MyGAJ4eSoJpaCACETqbwDzyTtADRTPNJ1FHKxPFDd4Mnt5kpaeE2uWSvisPHpDX1N",
  "key23": "3v59Bphm1usaFiYDyPrmTSyEhUVvAtPbBKVVB2uYZHSnZg4NMPXVn1qvFi1tGocksC6CdMekLHrDQZAvNgvWY6vT",
  "key24": "28CNrA8caDdDVfAqZjyPvq43LY4EhE7YhtCz7ZSbPe7P2DHhwPmdxpFBMiZimuDA4qDy8ETH33UAefrszRwGYA9C",
  "key25": "4g4nB21QECzzt8AzN9PBe85DfqVapHCR1se41cDC5CZyicLvGuS1JBApeKuVWM6H7yLg6CX9u3scA71H1dVnNGxh",
  "key26": "Pz4tyi5mcoTxAZyv1Qw54eypy7BYph322prqbarsue1xL5vwVubXPyn4yTTJcdQawUz4A1oGQDRD24HCmeTWyqX",
  "key27": "XngTTGeX48kkDhKEuxuBstMSj2eTvNXQdZW1Un5mc2ugQfwCyqKnbZgiF7UQxMNnXeFM3gWz2WSL1o4mmZzZCTc",
  "key28": "56wxCsDw4RuYs8ZLD9sM88Qi1u4hXDB4HsJUvTT2Rn4mukRXHYtXhGsSV1PrycQ5twcjqnJYkfLzJBGRdssrkqEa",
  "key29": "2VYvZv3J1Yyuniz7pyK3ninmDkHGZn6dETX19JR4yeqcBCZJqMoxP3iDMD99UELSdWrhu3mSyKDPt6TmY9W3ahCA",
  "key30": "v1zuTaBebVaHVSaoiB9zzzPNy9iFcZ1BMq4jN9vNEnaZTCu3V2FPXtpLnEdgcNwQD318NyMubwnWyi1CByk5qK3",
  "key31": "2M2SBVjQzSjz3cMEUKMjFVZqutDgeYtYCJLnVn3ywz8fC41pQuLUHmwKf3vV2izB2VCWS87xtU5SwZ73gvzhEuWS",
  "key32": "2PUrnkx4vHc9JCQrCbzGLnBWUi7fKZVLenVrG996fD2dJZXqLPWBZjg9y8yDgB9B2wrFc9vjyVtB4voA9yZx21b7",
  "key33": "3aw42XMY55HHjkqxNMo1TXcP5YC4khnJ2fD9T5wZLC5croAuuycCo8FdazjXHhpWPkb97e9E5MXBbhdPRko5ZP2u"
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
