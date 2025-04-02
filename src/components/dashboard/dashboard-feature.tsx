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
    "29jmWKgk5iixyYgPP9yvvUW4dF4bursUtEVFTQYX14YwqcwvCLpJczHcqtxFkVxUrj6WM9gdYmaBj3FiQYvSjVNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S89giCwGxeKg6vjzsxqWspyNMQVZ9hCHmPMquiotwcUiVVkV9PDg6A5sgbRQMHAzJYGKckwNzJzDjJXGaQYKwE3",
  "key1": "4gidasvFCFzGCSJqRU4CtXjg22q31nHzcHTpDV3u6tgWkjQiaC8ALbyobes261bkuyAvyov3QY7fWMtuU9KH2iTe",
  "key2": "389Ak9kPNSb4azuxiJ93udKBEYpqvGN3wsbyEUhNVHBPMJNT6BSYrAzfMczHh48WMtFtkvUi11eBGBBm3k5az3FJ",
  "key3": "2kaHifqZT4JX9oSsZtijuc6nekapXxejkSBdJUvZGbc5jdnyhJbN3cZoEvRyEkUXvV1zuxyES3dFnckUsF4QLrZ8",
  "key4": "2oMk4zMGhJrxyH8uwHBwectUWxat14W2ZpPC43nEDY4GrU8VcDeTvB87FnJTCpi7MbScq1H19h1F5bw63sEek9z6",
  "key5": "22aRkZpeDbpqmbFEgzUwyjhY1mZSmTMmyWTh6sx6MqDuGkprBcKUSWGweLDhQaweoNHYf1JmeeH2UTdxsZSM6PxD",
  "key6": "38JHgAPd2dgDFKAwk36kGpQ7NhWAm9fCkcUnnYZPvkZCEVaqaUG4xyGiKDQA257zhaf3wSdyaHFNTSzLq5GveLDZ",
  "key7": "4sVZBZahtW3eP6A9aTJwNTQ2FMQhntgMGupgdK29xM87KdmRA7DqGeTUmyS6ZxJYGVJQQp5HCrAyybNM2q7Uin4w",
  "key8": "3h8A17KbM14dgcmYUQ1cHd8P1t5QSAAz5r1US6wsF17JN6MRsBXJHEmF4Sj74XG5wemfDH7pRv9vbxAHxTowDLaX",
  "key9": "62yrZ51dCS44xW7q1dG1zWc7MCFYY47X8Aypsr6z1rTJFbmgH6uwzsB13ubXKY1Sic7c9Lv2oY3fMQuvJi5PUnN1",
  "key10": "4kMSTnN5yThVnJKv1VJutQsK7vwCKhFmCsZWzBJEDvybqHV5PFP4KMDQABnm7ZwqhfnYJ6yfL5Tub4YHpDkZGjef",
  "key11": "5r8MmefRQ9xygiKkR8QycUKiXPW1gV9yYwWxWCLseSXky5TEXzymbBSSdz6pJ4QQvkBMQAW6gecuRK3bLwjRp9Rg",
  "key12": "626vuPg2GxUUruPWPzwU3sueCPHfWnGYATaPRbKZPpFLJRKSXTzM8BYQsvFDqVTYmu7FqmHQtpXCHa1DqxhaSLy",
  "key13": "5ZvLJqQaUtJrtHdczYVYFqQV57hpQj2azDA5XHPKzJaVyXhUCE5h9p7MKGPTGHpggn2RoiMrAZYgkYQmDiNrfdXh",
  "key14": "3uTF33sjGKxmQHZgwYVArfZ9PjT9AYZwX2WrYuxzs4WJnkNqRxs79v32ZrtzGpyZrxWCQtrzDaUk6pXhTH6X4eKo",
  "key15": "2eiDGKj8qYsmU6tYmQKQWsZMpR61VKBZVJrNXDN1KdxHN3E2jx52y9UardhUa5rv1MU5cvgujqa3oCdaHYZNbREr",
  "key16": "2HrkczHhQhRVfFBACm8jhdtYDKGN8VwGSmNPDe35YZV7qAV2q25h9UxFBLPfGXvF6yDi4srNnRzkVMTbw7ChhLx2",
  "key17": "3hr4F7BMPDfsTs5xmamYyXXeua4ZMcu8AopVZrdBNPqJnFq5Rg74XpAoKaYtLK2BFkK2KeWeZ9CYqyuDAAJ5q5gh",
  "key18": "62ppoJqUrHSh7KQmiMH1QB1bVWSLdzMEcd9VsPND8oxJzrkueETKdyuK6RcToXbqtYPrm7V6meMoWEVbS9hTTjVk",
  "key19": "3qQnAPT91SNXhjzAkKYieMTYgYeAhVGdWxYbTjqasLwsJRHKWGGZ2GHPH1Kc8QJwKNWLwaTGGXmYE7MMABEqxrdY",
  "key20": "31kqXYkwNxXTcZvRL1WmCZAjznmMSVVGXcxsCro8EPj6f4oqau7xumhJdNKcaTuLq6yqYrWVkVVeWk4hdc5kmcjU",
  "key21": "4Fce9ePhQiq9Zn524qhoYqHDogkt14YhdGboTu86HMRZ4sTmAgjBBHFMfikBPv2Rkdm95eGnuJK73maLhs5rRoHD",
  "key22": "62M3W7kQQxp4Q1GJ5MgDv6wxA1v27fmR8ErvQBencT91EwbwMohBUctvciqAieEh6fpdirKqf5Payvrxb5XLN3HC",
  "key23": "dqMf8T7QtRroab2ntyiWNJo2ZDkUvMrSC2HvY31kUvmc5MouzDMskJEWxjuDWZo6BgsePoQCCg6iQkLb6oFxJqK",
  "key24": "3TDDAiRhFUviFAevPLNZ2CHwrLPMdMr2eTSNoCbjiPqgqdoULogXjXsv5Ur6bDowCtqvSAQYvH3YzUySHFoNS5WV",
  "key25": "315WeTCJYuX4QWZ3jaPNcgpsu9s3jLnx6tng7UMy6q76LiaWouC1oxkb5FTHesUz2odmNuY4aVKyvGF68LwCf5iP",
  "key26": "3WAcw8Bp6DbrYjYrKhJ7PHUyxExPzG9ZugxTT3A7a97csrJq4ADkLspHVMK1pvzzJyHBXzueiX1LZ6cC8oD54tM4",
  "key27": "R7Rrj2bnhA8KNqoReGQEBXkqrtZW1qbNeJf5v32BQyYo2dXZeWH1pQqiCBR6oGHarUF99garuZK7UhqUdETby1d",
  "key28": "4zraGnG6zd1KeXW94uJgTaxaCEEqQwrRUwkns7g1gArQZLsXQsQ18XQW6cKnB6tsZhxvMXnu6kdhjCDPxF4B3g6K",
  "key29": "2WgkweHpxQrknU7hZn97MZfjwG3qr9dN8fYPAdmkeHeNUrrZ1VTS5FBH2kok1oAUkVMHWu7GoabHEVMHbCMA2JF8",
  "key30": "3mdF31thymbecchg2kdeP63MLXUmVV7zWUcf5KAoeqRjkCLMKksBuHZhfoNNCFc7557KLfmW9Fhqn9xFj1THmHTe",
  "key31": "2JsBmGsqcMiXhQSizgfv51xEPGRbNgo6aJpaJke85ESwMH1KEXjVsDEvZNExE5Q64V7emQn2Pe1u9SkZU4PXcNmy"
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
