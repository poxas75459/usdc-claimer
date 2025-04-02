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
    "3xNcvv9XQRa2k1dogYqFH9skko9mBkP4GzyyRXQUmi2jb6LfdvcpUm3CzELhqH7UTHAtAbdNy3QNVJgJPKiedxBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j28E6kYr1z8tNgbJipLpKDtbyZFTfsGy5Mg5U5vPG2bhdqSw3sr3zRWK29RCUJYoMieFKmkSN2iMAf9gpdmb13A",
  "key1": "feDx8agLgVPuAx6TvkH1eSzeHnsmQ1tPohxwGW174gHX6PbNrJ8YHMeT7CQx77Ar8uACfBScKbZrvx9Amt1RtVK",
  "key2": "2eXExAurmpv4Fpk5sq5BHwNPZR1KPQy4LvGtYxot58gUfPDV1NvqKJHZEk7Qc98EJGYPuqfKojC7joUKRfhKWm5D",
  "key3": "2d77cG6qzQ2B5MSSsvjNk5gUHH6XSpe9VhbWDVsyrxTWDNL3ySXaU9tXf2nMiT8UL4bMnp2FoQVWcfQi3TdpXH1X",
  "key4": "tyk4M8irDbuKi4vpzbrqXTH2RMCdtpggqFbtNirVdep7buchcYJth6rPH1rCNWktCPhA7Na1mdJpG2fViZ4DKps",
  "key5": "2Br3m8tCZzWjtV4BdpyMjMsemoZVF5yZU3ztA6yDuhRuT3Kq63P43DwhzzgBqPYtTHD7FdyLoxZ4GcBjqhmoawMB",
  "key6": "3nWYWF5dw3mkyv2tMJt1kDuCdxV4tuLuPnqBVtLtxATsgJP1BypCeqycsAkJXF3P2d5aYJDnjB6Pd8jfCf9HjgaR",
  "key7": "4ydByySjCXnoKJu8x1eNakdf9vNawJfwZNjoPKowq93kQUjXdUHLTaGWyUceQKT1vHGUpCcxx1RNyVgzMLGCGdUd",
  "key8": "MNmpxKCmGpyYwFYVzqDxE4jR81cjwRpuUgNZmSZYvuNPeht41n1xoSM2gDZY8VvEx7ZZCrMZxiGYgmTe5z3nJJJ",
  "key9": "5m8gkAGdFQzMaVPUF7DQWwFRHKjzfzrWsLnJx63Nf6M8Z6B1fpMKVHRosKWnQwy2baxWHjcKU5N5RW9zNrTkqBb7",
  "key10": "2gz6DtZA9XsUFRqFbM82NSLxDxeSXCpZPUhjbdmbYJWHFKBM3uMx7m2tAfbEq5YcdqtG8JZzy8Uz4XRxnokQ8BdA",
  "key11": "3saKXMYVryjyqpPajhPPtajY2YDVsMpX1X4jcEVwpUMvK4b3tQAdKcpAYbjoTjy5z2yW4hLSn5XGzgKsS2MAtvBJ",
  "key12": "4qjvj5oxN5yxxbPZPAgFGUpdxABczjCUVa3P167AQitZdnuQZhzCus7HupiEusvAGkSCmH9FQgVspJxZjM2uQkSa",
  "key13": "75DpkLv56z7GcLYpWpHa7a3xxBTqJ483T3Aez62YCdhG55FckSdCF2bmkXh88xDsbifq59CJzzMmHuDCLvqW8gb",
  "key14": "bCKTm7yqaNLm4nWV6qiGCDZVcLnhDwfs6wdoYfipotBUgZHB3YA2CayCKtvj9xsLiJKh7QZpsYpiAjB23F6R35i",
  "key15": "M5PECt3jdMXw7xqj2PHoVdrTjekGHZMvigyjZmNaHb2uwNYJWU1hEcVQwGn77UcvEXiRuTJCnM7mKfanmA1C4Qb",
  "key16": "Tobk4dHL8A3ZmfwzMcmu3JBfazayHUcL5FzvTgNw2ydiUzNm4NC5LzRiBmTEqdCSfmWYcL34hQ42hgQ2zZGUXAF",
  "key17": "2cwdkFgGmJpxr87ZmjqQANe5kHnrFZfP1iDux42EF2JPsN1yEZ2R8oC7gbPX1ZXxzGW9LXYJWki8yzFreLtCfZXw",
  "key18": "2DCx9q6QA7Y1TpSTUvz4PycceroQYLZpJk5zvWMtLTmBNN7vYeHzvFZeeafSR2J5RyAHG5DxPkGvUcsNQ4CkBkhU",
  "key19": "4aJZVUcf9VaJTM1pHFTGw7J3JD1QpT25SzPxKapRvSPHwRPk93wMwMLdgY1D42CCMphmnjmgMMKiPJqv9kgfA1bU",
  "key20": "jLYGAR58qkREM9LCQ6Z2RuArMftWtSZsay3atYJio6RhKXkkXBWhxVQSzTLrUvkGBP8s8Rpt1dYNxNjSGGnrP1C",
  "key21": "2Q8EbRp2C6mKGdgWtEtXSM2bC8k2L2EMoGpikY9zG2NeWMkooGhpnwuNwTzSBV9Z6vwQiu46VcjrvWXBwuYp8LgE",
  "key22": "2YjCw9ujtRtTh9PjVnUP7M1VyKmYFE8E9oxusQzEZYUvgWeKnRhsYnW4xQ6Qj4N7ovf8DcMDkKaJAhfj66cDheBw",
  "key23": "23j468jr7zfjkV6E5bUXq8m6TZeThei4gMCCrdjdtiXUQ3xV2xxXABs9bXZBvmYWv52JDxGQxLZe2Uuk8RKdJEGv",
  "key24": "6nTKEa6qqNWdAqkQFeGUWArYPm3zcaFVbvfD2ZT3TqqEnx8SAoYGyu5ppo6smcWcxkKWa2GvZJeaK72zXidH48G",
  "key25": "4WX6jXwUxLyjXHxKi9xVc3qSAyzKyLsLcYpqcRTb35vKDMwjdgAq6bxLhYEEhVvpwbmsiS7tRYRTT65LbeAq1XNA",
  "key26": "4JHHv3883wycNSETtH6EDXj8esbLD7PcZi3gGfEqEz3cFfSiq8mpS4KSbj5on8L5uKByP2KQ8LxvuLZetHuvU4Yw",
  "key27": "E1DKYMc7GRUGjrohny26Mz3DakCymeNdE2hG4nVeH4q8J8uyZCBzTtJUCBo2iYnabUSX1ZEuCHz7dFaVR1Yrj8G"
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
