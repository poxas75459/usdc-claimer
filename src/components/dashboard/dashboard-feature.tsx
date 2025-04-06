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
    "TTL4JAbp1rxpwi4yyiyUPbAeCdm6hzfjxXdqNgDqQpt9XcmcGLeMVyVCEQwefkyMYRYLDrY9T4ywkf9HWzQARSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwPummKrvHvAdDzrTd6zQA2cJZmokkvQ2qUqyYnwu61oTaJyfTRN1LyX9UqWN1Hr3GrCgerxTNQskHG5XhDPyJC",
  "key1": "EjHnrVUYWkkZbehxz83N7CKcVuvGb5AppmSY2dBZov11o3pUVfM5uQkhMv3gg1e1cgA4Mco8upYrvNmUbJyhVEu",
  "key2": "3zwYWDgChepC2FtqCESdfnmCnvuzEo7VTFQoxLGs3HgQVGqnARwRSFsTdbMxM2K7Xsa1JVAN98Zq6WswMPvS7r4J",
  "key3": "36oNKBea7VyAyuwKAuWZzhBeBn7xdD5ev1jgd9qkcgztTrjARuCcCdmmydtJxoeWnVbvqh2QBFPkA7KtnmZeCnA8",
  "key4": "3stbwi5HjCVunKg8rL9iGTZTJyXFknxUBSstQc9boCdnb95RUBVfz7L7Q7u7y1schgvf48M9g26H3MSnhwRRWeAt",
  "key5": "3b9Xg5EXcKM79rWuoBwxycgoDtRdyqSQc7vFeh4UkzMDLFCiYNfsEfj23Bev3nSbDeHnNWJSRNJxQE1jpj3Y5PEM",
  "key6": "wBFDMBrFd1SuVHkPSrTSNg1mK1cUNLEcYrddP7U18iAYL7Ensj53J2eAYjCNzajptUnZ6o8SxsMUt4zcLZfL7Sd",
  "key7": "4DZ3evJGi2ZwRzcLTYMNBHqbvfeXQqeQn98DbmpHttGiu4ti6ragvmzQTL31mutQsVkREo93EaLxCcbaxDdwo7fB",
  "key8": "5osXd3AHZYGnU4zLrDNDM1maE1msWStYB6wrPqoYRgnqSjN6QsDXjoY6yttr5smqg2istYVJM4tSGZwyQjkREYsH",
  "key9": "4U7jBBquHANPi4necNTFfuDXXC6pYxUArRsaWYVNTRJDTDH4amndBBEhQQyCH4evgRM39twZD5ebuZzRyxDDv2dv",
  "key10": "2FidvzFktJhDekLL11BRfVmDTUHc3dYTHUupCvJeNEmrV23ptGuoFU9KgADWYPqvrbKVKBS5nit1YtsLmdCPhZ2x",
  "key11": "4utfggxLLzwHpLzpcTmdXUzu5EjcyKJBBcZsKoicRXoG9FAm7Kwjp1JMnnUp5vXSh7hHYmogFEgDU8SpbnLkM14L",
  "key12": "4c6miPqqmcri3vj9gmEe7SjjF12dKzTpXrH88bWRzPPAKkD6DN88C5Mhi7K6f4kxHYY2gpo4aQ5wZ9P3iZEpBbYd",
  "key13": "2or5ZWgJV6dqgZLAqHvzK4a4paYZMdXvutV5vxwXjDWpaECombVTyWqfzWcAv9x8J2eHTmpb3SMMk6ywaSEpbaXk",
  "key14": "3Dn1bHdBLK1F2HszZ7resb45Vht1BUze2sUJVqQtGPDoWFZ5JCU7cNkG2AotMUGMfxnQz1BNM1t77CEhsjk8tkFQ",
  "key15": "321KMEBoY7EYcdMt32M646obQ9TBNeGH44KpLFuxm3pvTMJZWV67LEnGMsHfujBenzwLaJSSaGPvsZnmHmV8gu34",
  "key16": "qTYzBenR2PyaUNbvN9bC5GopxnaNRp7x25yXCkY3TZ3rJPBf4kyfgaeeKkxNgLkxG8dDV8n2hGFjp5YL9uJnqnQ",
  "key17": "3osPTGm9CHanfJyHgkXk5rghicxm8k8mR9fW2JjRKaMNpdJ2bWim9Can1BTV6TQ7ve8SPRjUnePtEqt6fvhuqMgV",
  "key18": "4FzCWZdvBt1bwTdiuQxF7GfUw9yLrvzru19KoKTxMAZbr2gKxyubwL5mQEmfWngXrgRe3YjtYgbJoDnWBtuFwNEx",
  "key19": "2xCi3VsahjxE2yxNG74nGMTWtWXuYakUMg5o1dz2WG3Ax8AX6YTsnYfcRksdXCeGABxyMHEFyafdZdjzreuPBGji",
  "key20": "411RzuGEhLCKt1ETedbuyBbHAFohieVpADgR44RnUZTaUVWFh3HWN1ncvYrfztMw5NrzMdfuELjkFL9F3BWJpL9q",
  "key21": "4LnxyHJnCRmKjNXod7pdSe1RxDo3TLa4SjH1TeB5jA82NCLLxQkP6vHLK6r9CD6AGCqpACeryNPsNJ5K67d8ySz8",
  "key22": "2u73nzrwCfqGrvP7YFDTwLPMNnQvbszAWZ3svn1bvV1beinoPaF3Hok7CeMekb3qfJ5cpwXqBUPPvsT7FQJ3gFox",
  "key23": "2CWjsxjvpRqKaB7ntxqmkaUXi99eUu1kSL8gn45hCTY4fgbXsvzZgrqkkQ6b7Xsjxcp1WZSBE2p2gFsQRMNVSoXT",
  "key24": "7nVysV84vbkSp55MEu8XKqFssWv7VynUBSQFaGhkkL66NyLPu3iz4Fnq5LAc9voUNwdANpZNpsN12PKhTse3pCK",
  "key25": "65HKC7esxADxPfFmBZhY43Jm3j48ZGzk57Pbskug7hd5hiNG4NrLQqPgJuQ3PU5J8dzWTCx6S6EGrGEv4ESgfFtU",
  "key26": "4fBAgkXaDjtxBvoDqUEhcUXA7jHp6S6qnDXLVBLRuxfgCtoZHWSmFBt86zg7sicMt7oY4i5EjXhG27MxEJKMkFZ",
  "key27": "3Yaz1z5Zc7QoXg4yMWHYmisDLtB3B6Hf14biVLYmtirPmKPP3QECLxzRupecZSxJE8eTNfiY5hwm5SM4jyMKQXju",
  "key28": "unf5AsqVAPAFYhevc7oFyi1XsEvBAbUexHnjwfMzAMgGzWBudiKCpSSpNjFtgNFoFBDTYAJLn8F3vq1JzK4aNPW",
  "key29": "2moFKMT7xoxYie5D9t1RfJ6PwG258xDaCg1zZwzGz96X5NVrqQnYjAzC2qvr27QcLnJuoHnXphUGtBXaRw7TykZF",
  "key30": "4fn7RmYevvhQ6kpgz6kBua6fysm9R6hH9YP72d9q75WBx5noxgeizDCyS185wrMgVGfkLrohWqbuhkvrR6DFHPVE",
  "key31": "4stDSf1F25bTZ42LTGTdFVkmoKdWbF5XVTWCbWSxb7nXHh3xFt8BZAHC6aBQwqGmzLQr8CDQhYUyBMZ2ExAbiaf9"
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
