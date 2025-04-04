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
    "vQBGkctbzkV3PvMSCMe2qjVnyGQBwBTDwgABZGWLnTq5x9C91o6WJAQTwZdttLzFz7cTUpUjB56of9HYXDDDqLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZ66EsJ389oUqGHZSvSxcgBuBQ6pxrgBot3Giq1Jj7a98Jt4AKTadyGxfPZEktsythq4QYJ73R9DUyQBMHYq6xu",
  "key1": "4MpwG5jyaCXghN7y39fg6DSG6oSmVHWH8ZTgyBgsycALRcmXzmFtbDSdv3BDEVpSJHcDbCq2NUFxafHK9DmcYbg9",
  "key2": "2qcPgyoAAJqE4MHNCiJzj7hYCGCRVj7LiZr3eWi8zpMQ316J4eM9WRHZZVuUDXpQigJq4fDKQ3trFV5Qd7Hy9diL",
  "key3": "4jdGYvxXGJFk5UHFCc3Kh2pLPWnpDHY1GGwUUKZS2yBsWYQrGJLjuJ7u3KkH4iq7nEBvbXyFotd7MBQGsDxWp57M",
  "key4": "4WgcL9WU73A3HQdQTNhtZRvh9TRm87SMoSchWzFLg2UBAHddW1fpz7q2YfepGYoPMy5stAcEmhvXy4FnyibkWdVR",
  "key5": "2fNxBXAUkvoNWyGSSjXC6K8EPwu4EqtWYD4khMUKjP2GCeSxENLRDarNjM78e99nvmQVuEgY4BKb7twt6SfrSo1h",
  "key6": "2NngLwGek1PXRzycLiJcSFEW3uExPQ1mLvcVn632s9SH3Vfgfhq1UxHmb2qmTVK2qeyUEEvKH57FxjgzfXndMpvN",
  "key7": "pf3c6U4zdFFFsPuUU23159HB3AuPZYV6piJ2LPG2Y5DnxFzHE98JMSj54KGBVu1cA6hNF856nn35zXXHDZQB4kR",
  "key8": "2ouBJeTfm6xQd5YiuRQ6Yfm5MryR9KorLfcMrVKV5eziy8LCPxrpZfEYvqUBgwBaUZUB1q178c24no7Buy5c58dK",
  "key9": "Z9roCuryZEQTaKbHPfHMBsBY4DikUuidqeJ29VRZxz24C76w2qMyPATGMMFSmQcpGVez3Fg752BYEZiNt6cA8mb",
  "key10": "41ui13Rptb3FU9nTUg2MhGjeyQhU4rt6Mvkv86wNpsZmjmZGBJoSzLGbw1t2NRjaXDpCf8MeM1GGkPKCqp7zaWZ6",
  "key11": "5cvmdGPRGWJ8tVAauK9Ve5n1RWCJwfo9Bb1rGtwWF8T4wNxZxFKPezm23ojoEf7WZJ54RRxaRgG1AeE58TmzH74c",
  "key12": "3Q4sAQFL6GwyiPjrnZnuSPxPZ3brBYVAQP14KyBbCXQhSeHCjb4pvrfqzfNSbsnadjPBHf85DZediLW3UMyCVvuR",
  "key13": "3mdUNGCffiqEQhgfa9B9fjKyoA2Ex8RVr3HHrWgkghvrFZJhyuuD4vc3GLJYanUEfKk2bU1oX612GT56WfsuZb8J",
  "key14": "5ryRuRGBmpo2oHe25Gye3MD7LGLEiumwtz858843AM3KaAGGvg9g45PvCawVmEZj9ki6Bse6JsurTsCBZhC2HEs1",
  "key15": "3qiRfuKY3GZTgJEaFTR1iJJTieW9cjmgPRtqyZ5Shyk68JaMYFCPxwreiSn9spckqxe9HPxPFchK2ztHhYDoSkDi",
  "key16": "3v1E7DFiPp1BvM5hskUUdfuKvx2iJRsnPJx94xGPZYxhtBvWxkVNQsHPavZ2NHwquxhWF27AC4kK7PtpQQdDGzoC",
  "key17": "2hkqNLiuzUkNWpDTGZ9jTabJ73VqdJn3dudpPUM3GkLbH9gkMQZAcx75N3S8QbvDKBGU8P1ySNoGSx7Gds41MxAp",
  "key18": "eiKjQBhh77jQZMxk3RGPyvqvEja3DyxLUE438t8by7jfPKjX8FrHLNunBaMeWP51BrQVTmN5PeVUWv8JCS5KEkW",
  "key19": "CXmeyfAKQnpNTJFoFx2NRQnskLUN3h4sDX5yhEgMaSp4ThaULbgsahcx8eWgoJomyu5ukdsuN3vvLBY4mA3keKC",
  "key20": "2qBy18cSNn8m2r9QQvpwFBgyp5qKtRJCWabAaVW7c6akDqaqaFU5xkmyGjgr3SZpW12XZ3ev1FQMJcyZQMgYpyH3",
  "key21": "3fjiNckWsEJFcJkUDNp6R6eUMsTZYGuu6EG8hiUBJrKCyr3QpeCgWNRe8rTaTdau1dWfqtY4tbGsJnHrqvLxbw7c",
  "key22": "2pbgvSvF1gStwwSL2fx8ic8tmgtiTU4PA4p8LoLYGRjKp7ZV1qbHmx9BuomDwvsVMBmpx9UwZRNhnhKan6zo4Kub",
  "key23": "2Zz9v2CDWwbNUuzD1rD1RaWFvwmnxzjr5SmUHwPaJcBxvnwzFKePncGB8mY2LrwEfHMwNLmpF1T9YCgZjXhiXAfK",
  "key24": "afHJrYZAuQKkJESts9zwnGMqiiMPaNYuQCVmupJFJNFFDdEusLCT1iHEXwNKMfPzR5hyNzf8LfeV7XqbfSYnU9j",
  "key25": "28sF98MQsKXFs3W8NivHU1z9UVaJTWJ9JHN7tnVEdGJWj71HcTtwd3xiPZAGqSB52obRjGj4N1spkhp33dnFecwk"
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
