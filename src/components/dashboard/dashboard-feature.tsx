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
    "LQ8ijMCqHhiq5wqDGPapBPV45a4hzTZcUj3MBgVCHh4hxjSSLziTwUE2Engv8k4B89oiPf8gpvNTSBZ7rrFsH7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLNhwALH88FvaFB3tSncP5B2UxNihJagi48oThSyonfMxPYzg5sVQk5UgEXxWUk1jL8sDpbLvTarz5G5gB6zXB2",
  "key1": "2GriNhqxXhj8LX9vRFTbSBVeVcE9JWFweS7eCFo929sEQp79Rdz6SdUFH1da2K5qD59bksFDC4vq5VGKwNwV3ZHc",
  "key2": "5PZTNjCk2Gt21B1vbdoggZ7wuAa3R5a12CZvMW8jUdrAPDKxS5s642D8L2zdooiJqFCYZp6M7jkSkgFbDAvc5PUu",
  "key3": "4rGst8iYsVSU896aJURQDQnv465F85et6wqrNzTLtX875HeAZ9xMzdZ2PxVcMG9gupJwY7LG2AhKhzh1PFuWCeoQ",
  "key4": "5i2e25bx1n4DH6mjcXRxGrLTjJAkB1XXoYM5ujeEtB7kiwR7dszQGiU7SsW1U8mSTFjLWHzWWPj98SnrFmtJtkxe",
  "key5": "3zo1McCQYGT6euf54faG7EAi6xbTwuQ55Vgy6ESDsAG6PFkpLiftucnj9RtJr6yEmGUEVVhviPDUK2tZmbxJAYRa",
  "key6": "FvLPo8HA9SqBCYjRj8MXnbXYc4UL6iMcacSLFrxCZ2wQe8k3AaVMKiJ6Q5wcrxMLHvc124SdgV9bBJzmYsSK93d",
  "key7": "3V9Q3kHBibeACrTRtiDEQHHjHtrcQaw8bZTQwPwSHkd76tvV1gDqZNKCVSfAgGZAuowFnnfCLzsVju1czuvvbRTX",
  "key8": "aZSN4PEKQYDuejbS3MXteJzEiJaZ6Mubh3Xju9qDMqCvEb62D3cyU7hA9uNamezBNr6wxtgN6gcYLCBeEiJp7wr",
  "key9": "tq2oczGnANseNBhVyvs7yQYXBr6BWXANcjgThvZatr3L6sQnpHTeRFSfEG1aSE4ztwYrmAk7Hh79mzjAey2ZgX1",
  "key10": "TwKetB8SdzmNECXupYVjwaeFVszPBGucBKokweKAXsMfuz8o9mb1hcta38oJMM6nVKXqczUaU5inMjRnqp9zyU2",
  "key11": "2C7Jt8zfvwUhXbGaBsWKAYT8UmZqgEvKxw8dEkkkc6cRhJ48nnmEizbSmTc1GLyqRyhcXgR7PqAu2hnzbV7qYmar",
  "key12": "4sUy7jHSQQg4p8v1xmxmuSQ25omx7MK4njnGvSnnVe5HzdiQqVsxZhc4YA5DTcEg7NEyeYRnLUfdHmsciNTHzyr5",
  "key13": "5z6uWzgiHQSwCU4LTazbFzrwThaVW8QvaUCiD3JQBa8i2RksSFnnH9TbnE17B9kKPQrvXxt8AgKawM8LL6XtxWV5",
  "key14": "3iFCVCLTuhG3vqK6tD8BXfXenprPTv7LRKWjv1n1nvcUitEXWafw8E74wQ7CjMAXt6pTkCLGvnYe1yvTBdmXVs6i",
  "key15": "4HaYKSkUZRkNVwxyziQbgfrEwtdANTaHM9vBBTQQTm63J2E5eD8DYSorXQqo6g2k9CJQNZrJ8ji8wDtkgFWzXC7T",
  "key16": "dcciuaxiWZYuvTFAMqBn1QYtGqCoPXu6RC6rW5RpY8pNaGHAC2UeZZodYi5VwQ9q8BexzNQyDrpULY661kibovi",
  "key17": "4mhuqozwTsb9kR1p5n5zovLaf3sS9R4BotLPVQfj6wNoCNJWT2AbPaw4mAeXNbUqhwfsUqS3szy44a61eT1AzL1h",
  "key18": "3hWzLdnRtV72UcxBXYA2EDbe4uWMSvFX7WaoFacu2vNzujuFRZ6NSnYKCvMpkcU2JmtqfyRVW1SwRGQ4ss2cMqCv",
  "key19": "47Di5LSVBkJ6VJkRKepK2e2SVRBxFQgNpidwy8KCcqW7i3QXX7DJLciVpZMwupH5Gc9DiGjvPQSJwENcnK3GJszc",
  "key20": "2SeL2iqUjEo8o6W8CL4ZQLKKGG75ZkdKhuzXWuTvJJxbtLC4eBpgcMGG9ZuiCoYEdxtfGu5gE3WF9waLhtvhQoh4",
  "key21": "NgqYjnve1WBD8GKiVkcZdUaJuT4v883MtxV8Wuwqf4mwy2acE9U4kN29Y1t3JA4tDuqRBdSpdWhLTgH3sSP3BrC",
  "key22": "SHGFX7kwkSbhiJcEearobJBkwjPzHek8iiJTKsfsuHdigBjizsXsoc9TqXwfP3rRxtcDzaMJbEiRKRyhHTtnqHT",
  "key23": "2hK4ochmKjkEEb3npq9UfSgPsE7mLMuTMVrTgjBp45kZfjGFcTRzX222un4KN9uJfa6LUXFx3CdsNSpfvsVZJfZu",
  "key24": "4o37dKhZndF3ehFfqZUaURJsqbRvKQQ1JfTrStr3jvgWbnBkzLoECJW8C1CYW1tpVUHV9wuPBK28KYrRby5axVrB",
  "key25": "2LavmPRHGWVi8pSUwd1UePptCp59vTypBfF4vbFbWnPmCiC4ku8t4rcTg45gBVmkooxHjKz9KTDPSfoAZxQZPi2D",
  "key26": "2Sq13yj64EDNinsddmgSWskvRe8uhNEquQAtc6yZ8Phaz9Q72BYfVdX7aeBtxW9MuCwMnpMLA41UGo6L94n3hyDv",
  "key27": "7yG2DTDgxRNkdHZ1Btjaid3qu5qFRreosTFWkcq3dCouVA3wbjsgUziYXxp7AJbBoJFhpp8fcs3Syih5D8fnT11",
  "key28": "2sr2ZosbvjnipUr4ie92LJfSSYAtPJafKeBnVcPWmLzMBPdTdwmVD5RmHq5TVgfGLReqWZiXvEt26HkyZpP2yPpF",
  "key29": "37jXfDS95RwUu8YiYFYGhSyARiw1mMRB6VBifmE9L4Ge8L7jsvtP1n54Za5ydnQKqn3oduNAHncCcrqEeVXjSwjE",
  "key30": "5kWP8tFpzLbRVq8yETFcYVPV6TVpYmDg9bmNyoRfrapHYRSRVhaJdbRFBDXXHZeihPYGqa1uP3rvXmErf1wG4FTR",
  "key31": "65xguUeHCGmXTdEVVp6FPw3FpjfDqZjPyqzUQg2T1RBG8YmvcNY6d2q5N8RBa3M7YQbHYsbKJMYzBmZaf6ivbC4T",
  "key32": "2iX1mts61GVALxJnFyUbL7PH5rNBRviGYWJa6EZtD6gjDjRuxHJS7izt4qACiwCVgEUTAANxjQ54vYJmNMZ5JqG8",
  "key33": "kpdCocEmhqxRqSGkytz1zq6n1gScyJzz75Tji4DBj8sDWcrNfUcDRAYkKZHsrMaUus7cWz3AjgwbQ467qw4mySw",
  "key34": "CbN5DzDm5fUAQXyBg3THWQsCG6kJChJvNjjySkenzs58N1ogf47P4kdevQsTKA6vsQiV8w5CrUWLmyaNmdD4bw8",
  "key35": "2ps4b5r18Dz81hFbSVunNvtz8mCTAVGFoLNQ2wmqRg7NacFZggcspq9nFiUAf5YBNmYSwUMP3h1KhdZXqkgbVWY2"
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
