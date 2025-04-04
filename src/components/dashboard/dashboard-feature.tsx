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
    "iBLpW1vmznRXjVQhBbGFiJLXX6uvJwtGwgY5Z5aqcB1uSeXrfPpGJRCsa3zK64shkKbWdWL4RibErCx98mc7VtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6yqUoohq2wy3quaReihUn4pKZ2ueQn995WxjqZhdK6ZGsrbtYCnz1Ruath1ysm2BUYkAnmcyiwex2xx1KTvxx9",
  "key1": "3Zw8Lu6QsP67jEZWbWfq6p4Jd3CztTtj7bDmuAPqtqsqyXZxvK1v7i4JwdqR2VjZ5eTwyj3JGu3ABPKUepYNbcD5",
  "key2": "2BJE2ScTna2vwnFWQ4QEMKTasebNpQGagViZ5km6my1czSD4KffVe5mWonYMmjJXzicSci1hqAsKMiRCN7EuM58w",
  "key3": "4fsk5zrzFrDGahXR7wwQfc2SSS8LGPkQBEEaPxZxCtVPZ13o93EYEcx5uQJ1Sn4fcB3PnvNXfnzMgDUPgV2C9Wes",
  "key4": "dSUmqvLLAKTMsX26sNZ7doHKkMtZ8fQAAdKVAUsXoJmEuqNkgG42yvC4U3ghhGJoKpkLSo47vwAqotJAGTM7YAw",
  "key5": "xCswF7EcWUqUXttQejLf8pLMk6UzTNJ7kCaXNbpHJ9NHhkfuyDXV2wAgmee1mZPM39NhLVgT5uDPg9sAMtoWVd3",
  "key6": "5Cep2ZLPFHroXFTVZpSACpwgPoviDSShuLvnWDd1t7uX3RvMek68mweQrvne3RJ7S3ZQbH6zPWAuQgY4SjuGBFgu",
  "key7": "5fSsXUMt9VbVmg4wL63TN8Cf6oFVYqcwBdF4MZuWDNAAj6uUqcM3XXiYCuRY4oy6zYpw2ZcMAQ4KMXNWi5UNEx2w",
  "key8": "5YSDWFGB33bQMVSxue8gsCJLeZiKct3qja1oequbkNxB1sLTKn4zp8HWHcwdEkkBFko51MhZFwBM4Mz9D4FSixmh",
  "key9": "3iwtVqxXvucETbktETUtHUBAb1AJtrnNETz1fXarFyDxMSrhnBJf2a42YhQBDUjGt9WRhUFNZXBxJTDuTGiTGU38",
  "key10": "2mKWYNy8euna1EyETUAPnJX2iyb1Lfg641QJiz3XGMe2NoEokMzYQv58STy5hQ1m8XdDvirBRbT5xEFhG9cooAR7",
  "key11": "5qkxH7gGr43uhFwLbNW8d9qYUPL9MfyR1dKHJjMfYbBj1cPKKBdPkH2sg4RJ8H5MS1BmR3DgSwTGQhT6vKXABGik",
  "key12": "3kyFn5AeTVrzMcQwHxVwNhu7qDagkuxZ4QpDMK9eD4xtMsthSWybrKhc8jr8LiKJ6cF1Scb1WPdMCYu9LXeQMUrR",
  "key13": "5xrd5dEXJG3uN6HDqX9XQdymbRt3J5YsiZAd59HFhtbokB72QiHEuAvnctcLhdj4tgPQDcXo5LdBNfCuCbJqaJEw",
  "key14": "5fQ4RZ5Ct8UUjpA6NcjmZvP4gUvFSFmeyRBSXH7Qh2GwTe5NRPbPApqcA5FhXWHSSjUFt7K1UMBFYinhMds8zgz3",
  "key15": "Eof87XZ5c5gRUjtsaxkR2oBBVWVvCpACrNccD3y8KXc9gVzn4w6ugYXTu75EEsmursN2hBxsF4vpU49fbBrTkwm",
  "key16": "577tusjDRS5EiFSuiRtw5V9QGCHYQbJzQxgaLEsZa3iYkhjGm4Riw9N9gG7vcEJLickd5RxLqJ7dRf4frrqWLGix",
  "key17": "2qP2bJqN2xCqEQXuTCo26MYuEc5dPKeXCjx8i1bSUVGfyR46sV3pame2JpDq9PjtgQTEgUd5KU1VCnb6XYAYSyv6",
  "key18": "4Xsmj711fjU7FqGaYW9JkkyjWjQQ61KnpSCR4tu9QJWzPn5jd4UaEwiYztPMmez34vPiv9qNmoNEgx4MsThyBD8U",
  "key19": "5hfEcWZmvbpb4difHqjSHsaqJvjgtthUZwmZ9zAZRFB7EtPkidgoXSJUJm775NduHhYThFGZAaeEG4pqKBRhPtGZ",
  "key20": "5mK9BPz55s4kwmfGVKxfXxs7dhFcPeviNjbWdguMTpdsBYrr7uk6JR38kXxdfhA7FZW6aebe4euxqMVeq437fFuA",
  "key21": "5GRpnCt9oKyqtwcwFqeeChGNLVqufBn1zApp4tVGkdX4A3mp82k1RWrAwLgsRJHLSGXjWpMimjds2hBq6QEZK6Tq",
  "key22": "5Axsj8f4gFycF3dcmR9NgeruH6JkjECVXFtH6wNRMTQzSRMZK2Td5JPTnN6ndTN7vkrjK625DnrT7cjEoTHAKtUx",
  "key23": "3UGmV5ofvq3ghTszNXAEsSw2d7j7kMXDBDcfnKpxWNuLjVFJahZpzKTdSGWP3yprePxXWhDf5wWPTJLbFH7teQ48",
  "key24": "5UvBUXB2vdFVQPFyXcCX8xaAJTNPC37MLxp9WKuR15qipodEe5rNrGPoL4HPKGWMxTiZuagSoQx7H6aSFCJJgY2F",
  "key25": "yTNX2Bz1PtUGoFc4N2DVsDArJUH1NUwmncGuejjRFujiGC72qXyWQLBw2LhxWRDYiW9KBe3QSuUveYAxvbVw4Go",
  "key26": "2zBQCDEkuMbAZM3cGUz7fscsNkGw4vPQeVnqfepzKswmzuTqXUNac1nuRfd4HRep9ySVYAeyoRT9r5zYTuaTz7BK",
  "key27": "3uX5BrD3q1oemrt32fym5rRAcpjDYCwJVwULeAye6dztdM8saJ1FwH5v4xRiiSy1E9iXr4SxCkRNPZvU4ei3pQZV",
  "key28": "58hS6ofsct1wDREzhj4q5FUnveuHiKyu3Fo5yCwYubhQryFan5JywEDmgKGAQ546EGKVJyU9BHXSXqeovsWTFACC",
  "key29": "mLPggZZQ1VjouvwhYkw2ozmVhBXHdcnv983t4XCLrZWKt6xiBtuFssaSHvGaVxvgvyCxuwbru2zZRD3ZotU3L84",
  "key30": "5QXJJPDzPzV4iNeVg1QjnopDR9vwvjLkgGm7DUeiAxTRtiEt4N8URd4v9wYCpXXfdp96rUy1zNh5fFBzfZDeTbMH",
  "key31": "6VSdL1QnpiVJT7nFg8rLyKX9FLNurqh3vKDfDyEKXM2V1nuBdQggcMB29AiEPMCrThcjSULQmS1K7JSFa1MjMFk",
  "key32": "iCkSke5spanmByP97bnRycpivUswAnpX2AvKnzsxX7YkQYhJTBQa1AR8Ea4T7To9adaNNiamTW41NQDjJDwSnrV",
  "key33": "2VT3UMq6QVuurY8Ea74bRCsYPfVL4Q6GGTjMGbbwKhgZhfH8dCRpG6pZYtf78apYNJBtWV6WNSAGFxeij4kCirBv",
  "key34": "HTcHrjEjSK9gx24Sk1nRjMNPgrSMfxLNUHVauuDWZzMeRXM3BhQiicZpUo2XRwgfYXNDYfkeaRFqD9Z6en6ejxJ",
  "key35": "3r2Hf6PEPuYpeDfjii2MwjMCX7z2kgCJHKdo95LaU6KN63opABFrFQdy5pxir5LRiYEh6eb6axDu2rHPdwv6LRW6",
  "key36": "3aYLQboktBKzKuL4W1uqKx9jdaoUjQe2QTWygZxLNxqu8toTrpbkGhdsZqzKggSHuX638v2DKhD1ssHhFqK7hubK",
  "key37": "3TXazonrcWdTobztp9eN4ukyGZAggxjY9qPTJY6tr6n1RTXfU1jZbaNJVgkc8La4UuqU9Pg3HgArLsBoxnxJZvca",
  "key38": "3qggCxehqr1r5RHk3AquA6C4odVei35R5Px7YbNbG5r9Fcme9u6veQmwyemv6poMzB7eQs6Vmu6aDEpN6w9VpN22",
  "key39": "2xsjNkNDZ3cGv2CN2My7qX5JntjMVToV6Cckd1ptu364MhsVSQRYt9YvoLDCE8n5MasxPpRfYuc92z97zsUdx8bv"
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
