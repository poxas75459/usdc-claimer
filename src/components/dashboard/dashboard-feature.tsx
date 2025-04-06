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
    "5qZ6uTHtHfM3vpdaU8BUARzM1QVv9K15Yrug8aTTib2CzHxVSADxjHCHNgQBfambZZgowJ98nZ6LK4y58A1gJwJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8mC4EoHnSL1xAQr5sDu5h346EbfwABzgfocWurMNBQDmk6Nsrwgot31Bek2MM3ZzRKTXtRTveTe86dyyrVWxeV",
  "key1": "24EKXCJYdPFBRBmrCtkiV4jpPhNGwgsN6RymQKWGCA5dCakSh66me5qGrZdAmSuEAdHs7DysCwvvS8ENYnyrHvhy",
  "key2": "5MmtLUdtUHgJ4vQXK6SkM4NfsBVcTa6io6JwgVr4icawa3C9FzEWUeC33HUABHd7TKXuFEcLquM7YkWSkB4F2D4B",
  "key3": "2crBe7SY8Yo9pj352xPfYQTmsxnrpBdKgGgRbULPdttnnY6Mi2jmpUkDADtc2Em2rLz1vUHM3n3tV81kLjy75i4r",
  "key4": "3RJkMY1JB8qwt4TrdQyEXrNasQDJ4CrkoVTDvZfuk5GK8knqg3nd8nYtzXTH7Lkt5eiUKHrfvCw8cYkAMbsV2Wef",
  "key5": "3we7t3AvrAdirtYTSe8orgr2u7fBVhixKT6Gw6riLxuo5xSM8mBiB4A9rWSZkZfpPWPRap9DX5bKAemRdDzWEXfU",
  "key6": "LytXFmynEivQqMjqVnYMqRrmLe9f1QMybAvpnoczEUTnRqGE9UuS8PZm83SJmtNh73ejVoWsjLVefuKjVYat1UU",
  "key7": "26PjoHPttcSnD1wLCwruugbXcN52RbwNM17NzZCf5kLj35fYPbAkcNrmZ2Ny2HH8STMG7CJWUANtii8kjk2MoLnL",
  "key8": "3vXu551xfdx35fqhcaLBLvPKSDqWbhMvfUFxdDQXtUXtMCbh5qonZ2ipeKEQS9o95tb4tqdEgY9QJARciw6k9d67",
  "key9": "2kbUcqZwDCBj9RyYRkfYZkNnVJSw1ZQ2r3Eer3wcNQyeQYnMzusYL2ZBjt5SsrVvHHtM89ZFqpp32TZQPm2coJU3",
  "key10": "4Wm4xqxseHr9z8rNP8eFbPMZmy1BnYGy6Xp2euTXxXvKRvMuYnZ8SZgudinDvZLcB8629nAY5Qkq8Fjk9oV9Z8Dr",
  "key11": "5UtXfSCpUq9mJbDARJTMUwuPdBR9fY5tMhbeYmPXkDshQqQk4NYn3bAKmC7S14LH5MpuPe2XAUgxaTaXp6o9ZkJa",
  "key12": "5K7ZL9Hxwr9xQDc5UoAGZuvjyho1CDofjTtoX1P9g9mNCcMQKf7BB4a7m1h59jjJcTpo9jHoVLCunKjxm1GmrxHL",
  "key13": "4xBGgNitUmHRreEEpabgh27LE8ds2AdrorrqRdafg3ozmBUY23Wkv8ECjKS8mk1tHTBaZmDhdZZMJwEEYePnuSEJ",
  "key14": "3AK4uJuDhuabkXusB8abrbCD19KDhUTd1rkopNPayBxGw8A29owyMGtscBUZUsi98T2u1SFoVjvtSqA9ouiDBRYx",
  "key15": "4ajiqMfRPGHMNJY4xHLNFuEps9eBZMEJxKJJfe3ZZCCzsmBJsQYwMZb9r3kjXpLHoFiDN2h4aPWvqXdSu1UAjPZy",
  "key16": "5GAPXjzUznMhqs7nNNDCmueWcWLc2Aq2KuaTgekjEegXaoEifvVskvHAPZrXKPecguZVyPqbAGTqD4yBXQQfGm6c",
  "key17": "48btat9PMHT5q49Bi3hx7EsthvRbwZFM5w2X5TNgisrK4QMjtjcu8gw2mm2TbKPo3ENE9Bpn7BbsbFbqBHD1ztuJ",
  "key18": "3fsX7XfLh2WzWa88MZjPLB7AWZt6CxZb6ZhNcb3zsA1GBNM5CksmiCSkgReCYTVADTi8SVKpVZtzDPv8xKFuAHWK",
  "key19": "2JCcjp2NG2qRa23gCeSi4GhVh5DDqE2MnpwFSn6cD86B6j9PA5DuEG52j6fJFhZFnLjF5Thbwuvkid1gPXaNoqxi",
  "key20": "vMtGgxwseb9RQKbz4CUTqyrn43nqyBzTGHdbGbzJZMtsM29ZmnVkuYSiPpE4oJAAZ4yDfTWBjnK4jaLt5NtdLmm",
  "key21": "5jc9GcdzNwyAuUfKghkW3EKaB3Wqz9gUrfR1Ks5UT4rqFPAYcpQEe7hsJQ71vC2fgKDmVWiZx3sFu419wqJokqYy",
  "key22": "4gPRQUCKXwhkgo5XZo2VNKokeMtzfsR6EFr8qbPwiD4AYYpYdUeK5Nvbb7pP2hbZNgsDKxUtQ2yBZB2ubsz7vMcX",
  "key23": "4Y8zZ7sAGSscGJcUh8nk2dM1zrwdznNXwz99uxsao2Ew4K5xfx4fqCJeqWD2m1cQEvSGnhyUhueoXqHhDRsv2NK3",
  "key24": "4PGBecBcq9edLmMbSZzC1Gw1ss8kBQJW9W9eK4a3odT7M1ZJKsaxS8yGP1AcvUFjS6PMQE69cRzkiei22Ndwu1bG",
  "key25": "44WDXHhbw6eV9Zt5i8eriCnUBYgqmjZL8c3vb6hXUSWuByz9FGNoqz6qxNUAw3UmCD8cjR6vCBHWdivEjwotXxHu",
  "key26": "2NSxcF9T7mr7moyLv2TWBk949d5tkFcfNw69f1Qxjxk7PGwMxHgrh4cj7K9D7KhazgH5npvFucTiPPvdeE78hWvg",
  "key27": "5jGMPNWJz3HQgraWebA4WqxsuXcts9hPyP1S2q5aTyPF9VHcq5xbTQtgHKAf6CvbNDaZJzpEcEbusYggZZwnvxvL",
  "key28": "4ME9mjHWD9ZyFDx5P1VyBZGm27dWSkGtZVor4rMFCLXNtgd1JiwbEvYKfpDFJuGNW4rxNuH9wXARwFiBG4urqtKs"
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
