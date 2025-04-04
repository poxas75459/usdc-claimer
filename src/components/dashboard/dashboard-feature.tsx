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
    "2vYCQik6EaXyzJgL59C6b9Y5raLdaWzLxiuLKZJAE899LWTh7ewUGzRLNBp5gsVAaPChomibqvWT7gfsFJD6YrFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acNr5ok5Vy2jcMADrpuD8vm7DUuipWaYWCigHNFnJHXzrZvLpCsLtvoeiDgtPpKckXwSUmvsEXnHTETvuMDW6fR",
  "key1": "5YTFomrY6oDhxiHJUWc2Q4x9Y77rsZtU8oH6vqkwTC1SB1c7LAKMvxZYZaxak9DEExqYChbW988ydMsDv992ABAw",
  "key2": "LU3GUNB7S4mBbbN67fZdxsXxYasgKEziVwcqVWaHEe4naPVZJAxiQVVGkP14a7JsMPDR8JgCGZaYPnHWjGptQyu",
  "key3": "2vjDg3nQH2nbzymcDcEox8QBEkLLg3iadWs8MuwtqPjgdJ9NsEHbGkBBTVykRTqrSgEEFgVwSjhGYNk2MMRqPHPz",
  "key4": "44S9YYHgxtruV1p3TBxhB7v5h8f2YxWUS87d29FFVjMvJDhwdEjcFsE23yEVUep7ADhz8AtLSU3ACQH8uhq96RQb",
  "key5": "3rFJCoE3WkVgPQBGmbusK6gHhrkVts6orxktfwPnNM2nh541bedmPr2SCpHTQkNqMAdvBUXWw67Lx3u7ms9VmiSV",
  "key6": "4iqS4fyaYAMAFGBbF5hz8fShLhLGwtjmFQetqWbtWBtw6mP3HKBux7hjNEmfs9XpedDgYCALV1i7AEJL6gV1NGNC",
  "key7": "2b7ARtPxgzZYCNxgdgihpaWQh5CkRjg5uzXvBLhK83p4Z3ifAYq51saTKKZcVkpUtZimAbuKTm7FUcNGYB4Hi2oj",
  "key8": "3XKyuvUCEK35tk3GuUYF9mRBmPN5zQVAWhFVgRjMub12HVRAQThjj9MLWW2UcbBupN2E8hXcFtZD1Mq4PXqxho2E",
  "key9": "4ZFFSG3iTwkV1Thh4WkqULRbzzhvt7qxQkczEsderJQYSwpkRR9W6nW3QFpxtxN9pY5W8bb1mXiKpnbocbS4Qpfz",
  "key10": "5q1URS5UEgV3xxHXsjJFiRUJ6RpDdt49F671cdmBESJXSg4yVJ54QE2Wqa5MWCH5doX7iQD14fWq5yQuY2eyXpod",
  "key11": "5EJ3Y5NXxG3XQ1nnx8Qq6wTHX4kki2WadK57hq8cv1edNkiWkAUhARMRDQtNVqh43rqTWfNLmo7mjBppzYrrsrRw",
  "key12": "4fwZTnMk61puu7bd8WKgzYcLyXfnLteqZ5e2jy2c21zZ71o5SgQZwFojwKtCAiuVWtJwqaW2EwTQ75xoq8JpFaSE",
  "key13": "1csZGVpjnUYYSU2nhsUjXkKB5S9z4AnrvhrfPeSJN5qLwqYRy5ysHpQYtk5YQsfnLEvmZkU6fBTuKVDjQBwjtkz",
  "key14": "2HSqB5Jod1gAbAHFPBTsV7XppMJPebLZYziyRkyv7ukrbGT5vvCxaAiaPtAfbSUjmLGXSeaxQmzUqs9gh8qvEHib",
  "key15": "45HksKxgSZXYKB2FEkBWgctG84FK1wDMXS2qtLoUze4mza7m6QzZNTh9XSyVUtfdgu9NkhNctVYv84zU8n7uyqE9",
  "key16": "2ZZZio3ZwAWXPHzEAhKk7VNCrKXKZc4VwMQ3mmZAS8w1W2b3tLa5m86mQJUZVCQUTRPLLQ8DRXfk7WMaC8TmkWbA",
  "key17": "4oyFcvEPK3gkUopqKZHLaSKd7H3K5aCwnroySjSNzKp7z5txxXnxUtPBntgZe1SGyJcU3BWSNdKjjyCu8vhrjN8k",
  "key18": "5eRxyaG4aSfdu875j25suLe3YyaPGpb1jZKdCnQprA3C9aos5pZrPnKbLzG8pwtToQX3WTUyoSKXNoeVYjyLgEUT",
  "key19": "28Cxrc2r6Xjmq6wFbeGSV8aTmLqkkJ5bG62UPS6NFs4nQVSX5GXhKYBBbeyTtb5q517NuaLAdDZCtnnYHsHJCfR9",
  "key20": "5fsnmmhVfpJBxL7p4ZN6jbYhBtiW3ZGxki69i3vAAG4S2iVBCqLhLtekTf5ygtSKrwSVJD3PBwRcDYMdfLfv9dNt",
  "key21": "5B5YxN5fTXPDbn1arANf7JyKeuim9bkgoWxjpjsxgXoVrXPcErcZuG4x5qY5U86iLcRyLmTXcyh3VYe5YF5pqkSW",
  "key22": "63JfnVMkRiLTMT1fidcosQEyRGzZ8ztmcmVEMFq6yadx1UvSiPK3ddDHGeH2LysJC1kjnM3QTeGKZABNiPdaPZ4U",
  "key23": "4hY5Ta1abisJkEhDusgAwRQK43greCzjmVNzPfowQGkbfLPMn4p2abnqxYqq882uEXg8BHcLSutVyuAJHeK3RWUu",
  "key24": "5R1s7Z3wrqq8pF9z7dWBpTkRYYu64BvkTYBvV3wXzHUTFrTk12Uk7uAXHngvYbFSuFsTPQSSUn3wwdwetBh7T8Ac",
  "key25": "4fcZNMgiH7d1nzqe2AR7qce3cKTWbLxXs8f5KZCWqHcksghjJN8MDSaAWhouyccVhB4fLfzWt41sSNYGxdCeB5pJ",
  "key26": "3ABUqyehHPC7JGiHGKb8xrxa98YHsTdWmr49FioDz9tSW97wcPfBoEZ9u7jZi2Sr3jH4jQ2q6Bjiprc8hS69S582",
  "key27": "2ZXPrcN8tBDEJANG7xJv3xEeg1LjwuUD87wYfZTdHuaoQNdcv9eexSuFWtNKzQPAZFduwot38uopM4qk129j2QvF",
  "key28": "2cuHDwxHbj1YwqQmhNYjD73DAogsSmgzrm3dz7MF2BCYtiSHa9G2mB32qWmLWUVjE7cCHAYAS9eqJvPYd9euSuxT",
  "key29": "4qSye3kNF1EVmsGpeni57F8Y7KcggrwYrUTE8JW3Ze9WRmeEEzpHnYvuNjYF9oMn1Sdi5Rbutz9xqseURQs9g1TJ"
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
