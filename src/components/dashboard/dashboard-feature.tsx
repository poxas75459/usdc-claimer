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
    "5cqyCF7V7jxcZSeNjNZrfvRQHvchw5guGHyFEjDeSEvtzfDEtehnwEgqXNh3sdfemUJP9SZkWmxYgBxdY3qfTTqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKwjALz1ugjwkYYkVwJgi2SwjZftzahbD5xkNQYyVzvq8QYeHPz73mwFM3KQ9B1L2jjtTt5Pdchd97n3Q5pazKf",
  "key1": "5Y2UkmNr8nc1HfZFhZm5dj6GN7vSMuWQhBPzTbUErfKMQCd1cp1mJ3onPQpVHvMprcnVu6wMLHgswaAuj2pT23wH",
  "key2": "2fp8LWpr6wjH9W3d325NgMPcvEg5E4JyohULGSAQnFW85XAEkQngA648JZL9fbHqi9ciSJV5nP7MzuzG5nFqdnE2",
  "key3": "56S2ir58mgp89YqLAqMygb4wwUbvCby3Fq8rjYMcDGHVfw7dwMuYP1pcyiF5F1KUtJGzu92ugbzF5KNe6NKiSwCN",
  "key4": "48LTSUVAabdZDGvCJaYYxt5hJQVzDDtPQM4RthN2trhhwLXGzYJ9rZZGzJf3NLkvEGR2vhv7QHN9BNSzq1yb2LJc",
  "key5": "2rTWYqSpVZwQgbCJdiHzEBVr1sgg56TmvoWHa7VShYrZEz7E4HcFnbQCRzZYRQweX1oagjpq1E2MHH57CQ1ku4w9",
  "key6": "PPopqsY7Rzy5eXz6jReCPTteYecYE9HZ52agfGS8g8jNHcHzDb6ZX8zbT6KG2qerdUMC9pUTGa88zqrKcvxSpQH",
  "key7": "3KF8ZcFMVJGsPcWVLQDSpKt3APSgw16DC6DmWwUcyRtaZQtQYhXBorQXMhuRwk9YowPqug8eoZKPHFoudEas1dVh",
  "key8": "4vqZHQDLHcnRN7RUynQ37BrPPF1rjc6gzA9NCh1WTUuZSWdUReJcVbpoDo986Gq7CgETgL1VdWDTPmB5xR8G1QLA",
  "key9": "3FzMZzP1yhA7A2R46fDENAPtf5o6xKsfk8AZ3QSXeLXN9fPi9U7dVx2d9XrcRp5hq5SQRWTA26ysik4Nqy9PZeos",
  "key10": "3HX1k5a2FjqWS3gLoXjvpZBg7AZKxAqv2WP1aywbauhEpzScjZ58F7LisEmU9tMG3CgRPzJNQxBwgLEYeJUnDZ8T",
  "key11": "4gYa6w9A943KvP89ZH9ZRBoGKyckXpKNQBui98i6PsXCi7SWLqRjiV8RuxFy5BrtnG5sa4KifNrc9wyh12Adto1f",
  "key12": "2pJ1cCxPVU737BwgeEkhGqmiXnRPCWRPc9Jwg7H3xXyYoKE6j445r8ucdBDaZweKS2P2A5nZ6pgfoRCBSUfWP8LR",
  "key13": "2k3vwRKTxd1mKehLUXTTnJes4xE1HLbRHqJVn27it1zqcSi8iwm96wajFJGfWQU6pD7hvyhh2opZ11T6g67DH8tU",
  "key14": "2mFdCVJ5pMJaQDUkLV3ZJjwSGnNZeKk9S1SB5bH4wcwLHbysF5VuQgXisL8RtNsbqcRsn9xYAuSpKUUt4Su5q9Bq",
  "key15": "2ibKK9v8NfvFg9S8Uo2kjmfLZcUWyZsq7Mh1oA8oewytuuZzuR6xXckn5d8rMCvZBZhajcLwFqQw3XCyoJiV7JV8",
  "key16": "3bZkb6YVT7FtvFknTCHMYfnWqpeAJPqokZx6672phg5pAg1WTr5Ei4g3FbPdWaKSYjduLQ1cx7wcdbQDrGZnEVQ7",
  "key17": "3U5w2KsZMp8oGWNNv5VKsqzuW1qmvbVx1pMkpP7iPQJacntYUbm2jqdCPr6R4iScbbr4d2wd84uHMWd4kK9EnaEk",
  "key18": "4tEJ5pUyt5nGGk2995ConJNDYJD2P2L7RfV7ctNhaNoxhvFq3kScnCz11G8Yrc336ff4EoJdbeQzcyddioXVCfXE",
  "key19": "5J9xNerqDR2qAsSQ2F6Njv6BExYdEWjckGdvQ82P3oH7V8UwKv8N925DJUsjmYzXdCfzWjzZhHUjj7GVCr2VdVoW",
  "key20": "5KwwgtbhGTyNRbhiYgG3c7DrRrMXBWkGDAH2LS3AM7zjmDVsi9M6TSbZkVgEVpVTD1yt8j4EasNbC2FWHTKbcXoA",
  "key21": "5HQCiEMQUwbbviJH7iz9153D96wdpsvW9ExR7JBqyhkbgNWwUPvmVMPHNXd6kdAmnUudYwVBPVZeHMPEdg4DfNDn",
  "key22": "2ZSjML1o6Zcmy57GwFTF7ab2gAkrW6n1pRw5yvZ462wciuWHVi8ohTNSPHUFSKit38aQSNSx21ohQYHUDUEQsLh7",
  "key23": "DZRwiu1XWSv3v7dy6n6sF8Mt9bU5mhC4sqsCVxvUv9WmkBRyGFED7Z9rmSjSYpLDmiwKcii6v8hNU6btZD3vagh",
  "key24": "5es1tauiX2cxSf64hBMuEM3TnXPFbN2GwHN8ArKrTHPwBgPhy242nyibXCN5Kq7XWfswttmQzu184XVNvqPDGWY1",
  "key25": "2h7H9wovF6r5UKDYQCmK7Beyx2NNTNWYPH8JqSapnjF241ZdTVnwL84gJTubW6eM98zcPUWgHZy3wxQ4sFrydYSV",
  "key26": "5ebvpKYaisPqFz1MfBPFCHiLZiG6kURW7GEL1x4FtcCNN6mWWLLdZDdmYAfTFYSNjGd6kUtHVwjXb782Sk8fpMVv",
  "key27": "5QtGRWwW2YnSKyyf5PfmqUM1wrh6mBHRawc1YiBv6X9G73sZ6Ke61z4fYAaBtEZzwUNvc3iwv5qdJnMm4CaGfSWf",
  "key28": "2SQargQFUiD8vNWS8QSsmVgG8DE47QwkJpGjTRcxxvFi4YYbachAbjXQ3Nn8WQT5HPw4jbSCDhRppeXXupHJBmED"
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
