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
    "p9PabhP59Qqug3g3Sf1Fnaz1uSQJSYCT8dUq2xgvuvXeWNVLKtve97AYWPTn5trZofUtNyTDUEhMpQwASmBhmKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qdbtr5HcyWpg15g9ab23rYoF5NoWt8Scq3BSjmxQEBfWrZb9uM85XnwJgk33EYqcisUPxHrkLpkjcCPuJtNqa57",
  "key1": "2im6NHahZ79krvFeJPbt1mronwB5pPUAUN8fuhCttAaz3d6WbqRi7aw3tUJwNk1GkEojH96ZDd4EHhuMgPBv5JMx",
  "key2": "VEwJgYrbZU61oM1Ut9dYbJU2WTsMnHduYJkiTG399xLmgtcBiwzgZkRrNT7rEFgVMjyhgPxewcxHL45uW8n8Ve6",
  "key3": "3JgMZh5T7SiQ2kpo4fd9RRATeXcJC5mRUDZ8S7xdSxVgDzDadqPEU65VE5ubbKWXaPpo8G1e2g9J9PULeG8Jtbhp",
  "key4": "3bBW8H9XsUUQ4JGTxWgdUrPMNdc8JWTZY2WYk7gKRHwcxDNJShHxicxPUYFmc7wJVGhezcrqJwwj1z9NS3fGxwnC",
  "key5": "47aMZnAqxnANwUzTBU1hmCJNFhEWhmTzeKRp8jPySCpyndUJVWAYUPcPANTAAjr9kga3H8BddjMCm3Aq3BcjA7Mu",
  "key6": "4hvWevaWKXg1gvytG4Md1EKFnL1Ax9VYRvHrjkHTBwx8evduBCJVX3SCWnRYHH3u4GUoJbHftS5xvmwhnzny3CkF",
  "key7": "5m1pwmq2UbSHPPkuaXap9DYDXhSJ5mjxhmFEw8aaXd4e6zo45kRcGGryqypxoWTi3A56JAezxXZjHsQhYr1jFCFY",
  "key8": "4CPKntDtr57eZd9dpxoSJhVSyhp7P5SU1ZS3qunm23G2JNH4msrNa13tp2heYG1CcwGAoEyANwgUvbkJNczXv363",
  "key9": "5thzgPYymXnjp7nNg9NitpytyBzmJkgJjzekuzPAKNDcMP49kD3m2yAUyYV2VrxEd6v4fEZgdSEjsmKu4pte8Sco",
  "key10": "ugJ51NTNMeijtYPEHWYJmGTejGvtUyqMVbsRZNY4DkEVBQiRVYT6ZwmUfe2468X5K7wbJHWDFJYnJLHnxebJUmG",
  "key11": "4Vde9CGkDUnBB1uyZRsjJ2RDawii1okxfhpqzBxXcAEoUdDNYB63d1BqpwvcZqZVwagsexJQ9RWW1XQ1Ppkxmha",
  "key12": "5o1S9HxLdDfnPt5NnoNGAQdydmQqo5Ge5pXHvcnD22mtqPhfHgVdhFyGYnoM2gyMtT5Drc1bbEBMR1it2VUU13Fn",
  "key13": "3QebA7gb2ngFD7fMQ7m5Q1M3vRE4PMLLYFb39o9rdAn5rDfEZH7n74aQoEG1Hm3dhRcGTy8bAzMQF7aQ7NqfmzZL",
  "key14": "4tLRybM5FvHJbjDWfKyCkSA5QY8AXXc7PMry8GEXvh9vTFKZoCCWsoACWVEZYmKxp3Bd8PcXQqzzh9LREfin6EUi",
  "key15": "4PcLARDQwm41dboAmNBUTLsv8QPmUYji1B2ZQNMLRKZpfu8u4sakB7wVtkFSBmcambnvbxbDENZi8zq1qgyCmeLQ",
  "key16": "5p3EzDT2GRobBQyid2SXEmZtyYgCKVAYxgAAo4KfDkSp59QUJfR2wx9t8WTfE561oF7UkkRSDj48TELqWXNJoXSM",
  "key17": "2qexewF8zezsLQfGUAgMCQgUCCD1DHSSnYz7fU5yU1cvr8m45pkvriHYuixbbjBPp9dZfz1uotMt1wM9sXjNP4YE",
  "key18": "2TLsP1kqumDjdHLgkahD3wCkTquPTC1UdQoj5XcyoJnJ9EugKuWQrkZ2WUtUdzDe1cj5dvuWqqtnEpn3o63DdSvv",
  "key19": "5czH61GxGfp98wpuvodwGKqvsbpjArz7gaZ6B1rEPmpzo5oW4ZsTYEiQViK87FvGKP4Fn6bW93cRLwbm8V9uDLjM",
  "key20": "5PQitPo2DBee19C6VpaEPbKZ1ZbU3Uhhp8Soa3XGNzpztuKVTRFiPMrvYXoXX4fqrQB5qQVqSW6uyKQcpSo7tQ2b",
  "key21": "FQiChKh4hoJbiXWbkz5zqbq9oGs76muGBFhKsDECndZeLt89Zo3Vsxq6JNgCDAHeNuuWR32bQTu2JVFH8mrPF1r",
  "key22": "4bzAdiBmrQdC2xFX3axTVGMENskDneyJHgv6xSzPp76rdYB1vry49tLdS3LKQBS7aXiREtnbGYoeLHgL11jK9AE5",
  "key23": "27G14A7jtw8ofk1zgdSAm6ujoNpaN1tEx1eAuapunM8mtqTpJaJuTNR6owtJKDFqMqGqxqVhLCn7sXVEp7QHDMiF",
  "key24": "25FUeotBGY6e6zCHWS6yUoThz6emNynJWudxvEypD1DerGy56u7RbCj1hLLCou9uEgD1StJAqdLYcgfTfNqdTLnH",
  "key25": "5UMX6BbSMBpBzwswKGfAkeEfk6deQoHjFWVL8VERtF9gKsXYJpVshuBbyC5dEBsZyY4KUyEYJxfmLUwJfj8d2MwE",
  "key26": "4Fv6SvoM9xkDi8j3bKn69ArMb6z1QP1VYErnALEYiCdRTNeK4YYkPXcn5ryGR3V5QkPxWAsgxSULDNNJ2qQv7VL5",
  "key27": "2vjfsfSZ4x6wX8uLqs6j78QQgK2QLn83AK5m4K1j5kWHeG6h42v72qnwuHPF4sEs7tCKepxWGDMjkjciEM83kka1",
  "key28": "4vi6A33xgz5GzjiH8FYg5L7usCnv1DQvFT6WKgkEVw8qHvvajecUbhsoBqAxubLWr1VnZ5d6oTUBkmn7na6a4eC6",
  "key29": "pMiuzWePfe6cP9UNA9ftCMAGnnBkZXaPsSG4yq3uF7v5JN4XjmWT3VDA18BR1SgkdMFafEhWujvaaUYuxcojufz",
  "key30": "2pwa6GSZYpeSWyKFxxZDWuVriPMRbxLMKQrroJ6oVZiW32JAeJQnmr5pEVUdms57JjDjhVYtYBbeAktB5S16W4DK"
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
