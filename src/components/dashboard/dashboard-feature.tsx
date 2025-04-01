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
    "2B6ieLRDaVmKHnP1k851qZg7sQHxo8dhgvbht7zbuxkA2gdzAzwXhKQeVkEdk8SrQpvZRbvvDmqLRQXFHqesh2pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hS2HcRRy9Azj2AacBdA7bos41Kp95WGSuRkbNQrqatV2crJE6qSKfoDwb3y59XBLfMLjjaBGbQMpCu9py3o9R2v",
  "key1": "4RLwHEVBUDGw8zGkdxVsMr2vtVcQNPvtEQGZ151WaLt99egvY6BtVRobSWfqffN6JeFXJkE9wgpwR8eaULXFmTd2",
  "key2": "2NDJQ4QxjZW4hN5gW9WDdmvhXR12BQrUxm2KoTEvuCDDxkPP1rkwNc2DLP7nMbBvnnT3C2rT9dcHEDDV8JETBpPG",
  "key3": "5cyuUCsFZeYf7jGaQ2Ft1PYEgHGL8wbbAiYW1EehhMBMY2XdZDaJAhi5FqSAK7uVth29aEpnAqnsqNqU6x5TpTWP",
  "key4": "2iyuhtT2tdL9jG5XrD3SMfbGZ78h1tJ6KKRKpkzd42SXAwSKZiARPWmvq5apLT9yEQG2pT7KYNiRR7JN52mqFJQ",
  "key5": "3htNHdQhoRxLckj1G3NnGuUxLcuX9GLMjNfGaHfMxqsw7uPEtvWAsKnfnoyuMfDyefoN9TBvgbH851tK88JeFJHo",
  "key6": "3cwYGKiFbmRu61mk5sYRvvVUNmejyE6sqMVWHrsQrNi7GzVvae57ePaHtBJ7G77LtcBYh5QnYrVJkyV6Zt5c9iQg",
  "key7": "5gufyRK63vtDnhSSU1J2VX4JFR7sgH6U1xVsVJuzPea6awDQXYVdZrfBGe2qi58HZVk6nvKHbhHrTax8HZqLQSbF",
  "key8": "3ozTYDQALFP6eePAHePuqRRgNbAui6s43JDagaFmHX8Cj5xTXXWwU37uXAfHp6ftVc8ct7AGVnTYFUmfd7PD9hfG",
  "key9": "xj5GKyxYNuWL4dSedU5pMoB5XmaMPSdTLrDAFCGgKgbkGAj3y6t9KTWRrNj4V6yfj5nVSvfNsmsHmXNzVSfQS8i",
  "key10": "4RgdL7L8NJgrca1CnnkUdQNcK5FsdcmEBCBZRzdGz2JocYMZZ1YqMt6tnpThDfoV1bW1DYRtVeB2rAe5MEmWSYA9",
  "key11": "3G9bsykPBuixCyhXwRBq1nMLY6V6pLKzHCbUStEFfZUmgTQyUfVhqMg2pGJgjJRjJVPM18suWHxk3BkwirSkdTFu",
  "key12": "2dJaALMgFY91fRCNLhTQv7vFQiBtFLjVSMDuJfrD59WDsZpM3bEWm7s5F869YnueyTPiVjkXxjXxNnKtL4qBG337",
  "key13": "5LxNUruGwuMMXMwmFh56wD777BDbcwKQz9S6YACVokV18cvhnNYjzQ3otx1aQuYKPhEGJ6L9vMxVrremGNicRwXD",
  "key14": "8G7vXRo1J5dvLDQXQwQx9HXLxWjhy6FgFUfDeUcNzgmRWxkjjyA9vzdC4wtHeNYaswsQA3zmBmCZ2eHNRAkVqHf",
  "key15": "4UDiu5T5xdoHqg751zwc65zeAdCW5eWbiEpizUbybN3oSmWKRdVvw8TCZAY42mrgMNScqQwbY22854jgTCWoU32z",
  "key16": "5cuqf68hwpgU8hYKaH3vcy4WqxkZh4ExBAS3Rg4BySJ6wEhyiuHRucYCTCTa4Qkpbvf2KCcSFJDds5WkFdzUdDjS",
  "key17": "5DLtdmrkcSr4fyEXwvXHsGM3v5XcgdP6kr2ukudFYsjtwqPTekYeFReMGkA4npu5Ad6mQSV9re4Y6yATHEP3vjCp",
  "key18": "ijbpv5aLY2QqJU2wEBaFRncotRVcs7sASokPt15GikbheLk7GpCgF64iX7h8X5SsttziD37aMAqqqRCxHja2m9F",
  "key19": "BniKFkWamVPs9xngs3AHYqkXStJJZt33tDP3hZjzvMzx2xuYChZoiBRrJf46A42p8fYYWYjjQ6aPg9Vb6ppTXbH",
  "key20": "4cGRsJgR6uGSYo7FSLJBsoyj5b9T7jbJcL5qMZuV3Jfu7rRfzephjD961iNTvZhdrFP2UQVxm4XJhcLJi79pBtrq",
  "key21": "5eMdQpP1CyhzYwc4ZjywMqB8DsBjgiRZ9jMDxMwmrFJXxFHCjHSn8gFmgAw8EtZLQHixM657frWRLfjK7wd55UWQ",
  "key22": "5J1TLi6jkP1vXdyDHfyMV3w7zvfdUBH1mBDNAq2u8GwoRD3bGU35ZWKjJWFF7P8DaT4QYgxGemWWmjwCxBaQ5K3U",
  "key23": "5HqnujeUzzhY92ziZggZGsgCWmDycLRQsDTYQWV7hNuXdTdi2wNxNjNeVL5MJe756Pa6hmzSiwtrPSPkz4H2aNhJ",
  "key24": "3Vnk6jSyXqLiNTEkqHaBuQCtN2nh7JPY6ebY2VtoXYacRyUrhTuuGESyiiaBepxRBTBp4BhbhKLqkfBKubdnFVgj",
  "key25": "33HiswZgtk4LJf8Dmc7UsXmvVcjzijFHmZLX1LdRX2aeAVwTyBufAdthroZhwizRqgivmPMuuX8BP41qEyeUsJvX",
  "key26": "2WtpaSbshwcisQMfydUSHnfqazCE6TYTi3uZ8bcMKhAgfVAfptXWfqMCso6X6qHacQieNcZZKviarYyHE3wdpdHQ",
  "key27": "aho9UiS3qeSynmeLwf1SrMpLjyuJ6T3yAFyG9A9r54P16duAWrKRTxaYNPR8YDabiBKLXxUpiNYn99ZnjPwVjJC",
  "key28": "62oyxcKNPZmh4ndrmcuP2feys1W9uCKAFWXomAuPZJdRFFJMzWG7SKVb8YSumKLTzucrrn37d6LYJg3ZZBtLKsvE",
  "key29": "JwNSpSng99ZNRCD8mFh5s9cbSprJ3BiokpcMRrSZzxeYcu5jceddc6u4VNFSo3cqGtT7y5zceHbgKDGWGWrUra1",
  "key30": "3gz3Qq29zU5mK6ihv6nMVDMZ21p1aEN42BxWNg8aCK2EVFRgpa5doWRTEXBL92oi5iR1LAh6SHuLF9gpCzACofCw",
  "key31": "5khPJYj6WgEKtT7dR66XjYvy669ZMTW9q4uxr14JgnDUXfuuvHfAjU9rq5AinhhUYBYauW4JxN1ezeGxJphf8KmW"
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
