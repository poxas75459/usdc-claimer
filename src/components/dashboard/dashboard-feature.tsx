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
    "5de4ULkqD2jExxtExYi1TDpg2oAT6uPRMVERF7kfRnMfCoAZToAGtXm73dbBXQpfaEzgec1DKAJiQYpHFgH3TTJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PphrZyjSVfcjdyzz5T2uzbb8RzHwcyMzAwjSMCYjNf87jU5AwfihtYsbNcNNkQGu4U9WboJCZXqf41Vq7hnJhvJ",
  "key1": "2yA4euUN9pnXF5RXpg3UuLXACKc5ZcSV4oVMau5WSAABZQ6iSvscwXEx6PvBxcF6PUqF4HVHnqzMQFQe93FhyXx5",
  "key2": "5toncZ8q9iAp2dMFeiVVN6w5Wb27eCUH9Nh3dVQZmkx5cYpFJGjxdVi778AtqgLkp4Eye7BnB9hrsPGNn1xbsQKx",
  "key3": "4iBSap9HACVqCbdczuMFViQrCyRYMRnWdKXgbXjnkG3BZJsVJmiG1RSTGu7qk8yWGgvq1kGyib4eQnBL6Mn8Gacr",
  "key4": "43Hr2e6H8A8Hd33PXe3vbMSgkrSW3CZpBGDeLdzSvNQanCgVwiHF8WNXX6uk3VdUxbNt8i69aEBRCe7qM5VAcFy2",
  "key5": "4mTkWNTTxrFdm3DBtBiAhqESUa32edYDBCgwSQHsW5eEXPnRBrWQzYDN2FiRj2tGTNGGnLRHs6w2W69VPE9irqeE",
  "key6": "3HU9JR5nvupGagUeyYnknkKGJjtQcKo4LRekWrhf4PT9u6GnkBGUtFdBNUgajQQcKmEAy44WSzFNdfkcFfvjc3dN",
  "key7": "4GGokYHSC1hTrDTt3Jh2i7iTxtVyD2DUQNCT7azNae9yU4oQDuS3Bs2JPRwvJkKoDwMNUrpuAF55cdZCzT4MKRNF",
  "key8": "5fwUDe5JWRUutQqAAcvyA3NHZ6qZdHkvrmGmZ7V4uawTrhizNdZvzs9xQTfqeu2pV1ePHMcMxQX3awK6Bg7w3mK7",
  "key9": "3zvqhqnA3eaycHy4njeAAqJfsfu34xKsaw7SC6D5MkP6PZnYCdas5zrhP7DxtoXhwq3dUEYS7hzdfPGFp6jM8NKP",
  "key10": "2vsHqa4N5P54EGkxnkyyz6VXLbGAvPYZ5FonbYXZVDwbPBkxsaHj94MpFPaW5VzZKbhgUgtsWisqvrAuN6kFprTt",
  "key11": "39A4vZRwXBjBsiLumFCCe43Yxm9fP9XJ4mzqhV279HgKCN8JJNeXfKy15ayirXcVNX77grXHmpZwfjyypmcmMjYx",
  "key12": "4RsSNRiaYxdHBLTt4y4cZrZoxWQzL3gukBfSh9eZVSK9W8FP3dDy3gaDSNjAQXoLsmHF9wDCxJwYugXjoGih6GU2",
  "key13": "51wTwUwfJDMAs8ombko2ffpfU8VtEBmrEVfsnkcEPgTyJw39i3DDnWCXMY1CMKpBKvREuZksVcXhmJMrrrcAgFaw",
  "key14": "66RVsGmKVK1adJGZ53FzP5JNq5xFC9jAjLdTbTnSW9sg9J3zGsyf7yiz2ZFTm8HVCt5piAKZSGQpZwuVsQjdpd9Y",
  "key15": "4wZDJfNYn2mUaPN1yDc8hMP943oojLo5VTrrNyo92pzr2xZZVMQqjYV8WyU2A9ACCRcvPF4NFT432LXhLtcoywgD",
  "key16": "4SL4WeR26McB9dh7weR8wxLtc9a7mzprVa9nihGsqMm9gjV7kVnZ3hJuUJUEV6Yvipp62M65Y3QA6iJKxE1sd5uo",
  "key17": "3WpMJv39UW6DAjfwN8PbbSVPDyPFyiQXdBeoiF2V57cN2ed6VRDttMpkHqwzHMdt75ZYiZfpS9UQFy6y4v8Nppcq",
  "key18": "2vh6yXiEpFzH2Wbioxq1DbWw1bSaSjuZBVXCuGdKeynFtLeJ1hiwPrJUC6364Zn5tq45WR68CrVZiB31gUP91MGV",
  "key19": "5o4sWb8TGUU4MCchgeeKfjTLdcz933svDnNrtwu5UvvmYe6bojXB3cQNdwZoDdHtBavtdbu8BbYCrAdvX4vwLAaE",
  "key20": "2pZACWTUSRLSzt3vBz1YMtcGTasbxpKw9C6iBqNSJCj26FcRY7AUfMbr7796uDJChTk5BA3wmm4Pvh3TkNvQcPJc",
  "key21": "4bWVqYRdPkbq5SP74VH1cn7qx4T1xmnPfXcBvDtou2YXGeVpKLqn6v9a9Ng7VN9vc5BUHE1Seb4pM48qRpdcqf44",
  "key22": "1LrNZefZ5HyJBmv7VtUu8HZV9pMLiKXBgwGdNErdrQAQKGb6Gs6KTYgY4vw7jW6heASGYRv14FHJjxMMxU3rHqh",
  "key23": "4JcvAoACSbpKWLbSJXxNRdRUMiFToveHHjBaBZ3FqoZLbDKRBi22tHwnTMdwoz1mEGrjnojxPahsuzY3Qa4iDmnK",
  "key24": "5Qci5QR39dsopBvyJLim9F5KV9dnoait6gCouCB8n538e4wSrPR1MUtqw2VCUs9xMs8R7qTdYgEdAPL9huEe3Xf6",
  "key25": "3GSgJH9qoufgsR7NRUzAm4uNm5rZYNBxvSXMTkPjJEmt87Zj43mdecJaokjYbXpuTEhVZVrd1wZpNDsMgkBCs7Md",
  "key26": "4BP2jcsQCXBg3N4Ycw1iMaXqwUs57RiGEE22cbBhLNpQDNbGqs8UJGvKi9qoQpJbTN2jtQN2qMDEa1RCXZaS1vFH",
  "key27": "zv7Gdn6g36vm5CbxHAsdwyr2Xx48gcDLTs1GWj6xHHQwRL9oQC3ant8RoFFXFoM8ZAT11kgERAt2zKrcb4G7fBC",
  "key28": "4dyUZeWx4K3B9obRjwoyKQBh5iQFTzVx2J2gzY9CpVkehay1w9Rf8RdRU1tr6FUqTbiHXGEZRkuvRBeq3tj4j2RQ"
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
