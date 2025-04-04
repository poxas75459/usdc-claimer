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
    "4dk7MyUXindLzc96kKjPWwKxpVqFjvB9zGCAP3tf2jnxNso3E2J3Z9Sn5LjN29kQV9dVsDu4reou93a2d9LHdVXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXswfVa7uRYuvpa9354EZ6TRwM6yY5AJuw64swLgCiwzrqfoH6g4kRhap2e9ViKXDe5dqDgk2EZ7du6UN3zsaQA",
  "key1": "3xCRbfDrxQy8asm2gFq3RNhMeaukn49tq8U8TaXmgWRRCgfXKTM263qWkufEg4fu4WZ7NvRY995m4cpxwkb1Kr93",
  "key2": "2qVwv6z1VKbmVQTdKqmrgmQUmAALNgnUjbw3gBrNtftBE4YJjg61bfdSCGFkVvjRJY1tMZwrR9Xzhwix1pDKHZhq",
  "key3": "5esuQiTjfQM6vpMq4uL4MdrM81R3tKmaJoKdwzn6ZpRWkgSM6wLcppf9aws3XU478xPh1KKi5yANDV135kctMvqB",
  "key4": "5nXmJntPYocdx7YZ9YELbKSK9FrGYLMxPE19xB95gsD2WvY2WXaQHTGbX2n6FikuW9XAznWkkzmN9ydAoV2VpRGB",
  "key5": "4hEG6WRa6csTF2a4hSWNxeDD9qfpqehXtSfv6xPrW837oNMRp6YxbT9opzEUb2E7GoAHauPpM6QFq8trkrfHMT6z",
  "key6": "Vrn7W6btuATtyYQugsuUjGURC7nwjccRCbk4hzeCSDVvaiQ1dXk5mRonXhJ8NKoy8kLj7ApaaBFWHsDe2iNzxNY",
  "key7": "59DVXeGHzWjrt64zx5ixZEyZMGduekkSVdoGDTkBy1wQqYYPCe2KJdguzH8HV6mtDQXAdrvfg15YU5RaqU2rGBCU",
  "key8": "4JkmUgyhMPPRSxCR6YFy88rAynJimvQxSALsToGkiJf5HxC9ixQamrA7hwJuSMQUsTQGYGgvvWGyvuSkXxPkPDgx",
  "key9": "3BWrEdGk35Stv9tGmvwakFRhbPueZ1H7i5kLaprwgXQoGpvaf8Sx5oXVLRVk3vvcQ8JVBywTTeFY3xvkCQm8CPtX",
  "key10": "5ehokmFfq9hti4MMJhR4PdoFLE1xpLaw4QUy3PbMT6xzm8bJpyw742oGJCHAPxQ1xjys17NuLGjA413TeiL7sjRr",
  "key11": "3vwgZhZXe28vc1dXwvkYQuzLJkAvwYmfkkNryS7yc938UY6gWDvVpcFbaPcfMfUcpsWwUqmDJC9L6gHS9SWC5XHu",
  "key12": "2UxsEjHJ8V4apCU19JQjfovQVVNrNps6AAbCSGG4tQx2MWt9zuPXhU3JLDK9Yt24EHGUg7WJqwvpTb4YwPGf2fPk",
  "key13": "3S8FXVqfLzBmScqpRCuVtPqYMrCu68MdCd4W8ERjGjqS24MTZPzGvx1G3dA7y5vQ9ZuQUyStERiYbep5Y1qVuTRi",
  "key14": "H9b4e9n7qG3cjeSmSJu1ECSVqdBQQG6VGwBLxzkXLoVdKzf8K5jUF5KmuJJ58vKYmG8fLkv6hJB7DZYrHkdUCct",
  "key15": "4DKuWSEXJi7YMJsf4FBFBLQ2LGs8F33uNveewCZiXyW7XEPQZeNRXNg2ahyERMWgGANucur4Kar9LLYLk4iooHN6",
  "key16": "5wRz4JRCF2ZSkYTwphJbDymRczJYX5mYxBM2enjrJbdzohweDXFr61Dhg27jkAKpu9RVXHYtknEcieecAqvHt5e3",
  "key17": "uYvxaZtuN73iCkSbdWkA3TKQMPMNKATzZNQtCFbX9PbpqwxrSYT64WDEtoNKmjrKbxwnKEG1U9TfJU5hG6PDkpe",
  "key18": "5QkdJKDUuJMbkRUiYvwh4mchHLtSpRfq3SDkkevXoMXLwoewrYb7vRgcbRjB7J3KAAnJU84y1pKGyCVrNLwtsr3H",
  "key19": "5oTpnosSx7JKrtkc4HSYPK2vKU3S8eFm7mMqj73xe4AnCfhH12Bc3gG96oJeQFVbqjn56LvKNQy9gDtzZVedKByp",
  "key20": "39dnac35xHHuDS9kbio4B7gCyrUzaoAqhY5zVKMzVQPLKiQVGQTL6o6vDp78BnbdTPEFSn8SStLM174Ki4WojM6R",
  "key21": "2zLHJ446fRi9Lo19DFrotkHvpKyoP5wnBa3s4wNrRuARG9pXiHF17SuSKDf7JSFC4b1ycYvbCJ6edXBtQGJdYYjC",
  "key22": "jzKocSDrbF5ubq2gxJ7ndaksaEKgyx5h9a7No4YTLsStRpriZb3kNq7pGMap4jQGyeLkyAKzLWZeHFzwYhK3x68",
  "key23": "4SdtEDBR5KBevE4ochatsHU5xRdFGuaJUbFGXN6KP2M9a3VQkez7uVfjbbK7oZqthZZeCBf9vq4ge4CJRtT1fiop",
  "key24": "5UGb9va9wAPFdjW5iz3KDEdKidbXtxkgae6u5hHvFWWu2ZRPB8Bn8syPN3QP24pZzwU9KHjRsLzXRL7Eyb54bhy4",
  "key25": "3BLvwNMemrxXHtFdTijUywfxM4pgXtMoUVRqLuer5Ch8ifbK9yig35BiboHMbhyhigLWNY44x4tRSZyQ4d8pTtV6",
  "key26": "5VRXJRtJYpcV6eceoJtFJL6YwQJekcZvDWv11pLzRoTXyX2Wr87u5DhBbxcdh5hJ3NusiRuH1TcxiGYCvXH9URgo",
  "key27": "GuErdP4NQhRZMhwKvrkLxTpBnY4JJHi1CWEb9jaZMw8Ru7uWvE8rjnVSK7XdGhkQLYt8Qv8E7j57efxbXM5opmd",
  "key28": "3gsHBx33qrv6fjftqcUoom81T6uQ7B9TGUPvYU9xJzvYRTBHXH4nwYvddjAHM7Rc5vVyjVnBcfWcUdEwmf31UUEJ",
  "key29": "3VWQupf16eX1pjZHzUdoGfLN2wptQPgGESD65rYqwhzm9MgGtv8DWnZCHfTxFD3DKpFAjZdqkagkRByWg9DQXBZs",
  "key30": "3eM8qsaq8AEWmk2Nv9FsKtkpR4hwE92Cwh1hjcGsnRT3SwbcadYnMsb3XMFRbDfTVerPQVHB8YPPMRCgQMap71Cc",
  "key31": "4Rw5hmagNBDpVUx7bzUSfbr31VUmsE1D2scsVHZ1iEpGkSNCJMng6yfnVGUHaS4dS91qiJzCw3zD1Dfw3YY4uRfb"
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
