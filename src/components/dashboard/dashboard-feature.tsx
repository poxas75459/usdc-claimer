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
    "3tUaaKGzEGNBdaUjqjg2sG1XphHDPvbpzFakve19nedtLDxvxNv5kYxQ2LjDwxTef9xzZNwzckqt2m8tPBtkSuyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m9Tje6q6YHPenez5AXGFfNEzHpoSe9say3xhRyDKZNDhgrQKUjEemJys4RptSqHP24ANHbWV6W72Tbe3eJLcTYk",
  "key1": "5sD9r9ZrKGFsUyyYf5aUbhhna2MXRGrVixw6hTq8zieHvtP1yBLFvpYBWMfaAYDQqqoC2YZaQfrBuHUySEoWw6Ly",
  "key2": "61Bn2cz4gf5jNkxbmirSUP2JukfqrAoyk5WCfqBCC6qv8msey9nrRPFMqZH5Ct12wJepbsc3K2n2urSEu7S8Xn4r",
  "key3": "4MvotTKf6yJJb2SsCnBbMns7x5g7ja8QcMpRpEptFFo87QPdxRiTAZx7ZJUgfPCWdbQvKVuK2e3fH2tVw2rK2N9U",
  "key4": "zQiJWKRzUFjpNXWRwfgMHePBf8EuscN21dvRSjRLQZcE8ZkAoLAmuZFSf8EfFUKB4sityoLyCGWHETNLzcFPXwm",
  "key5": "RRRF4rtjK4uboSTdqHqqzioxNA8aYstcieH7AdfvJ9nLrtzL3vtGhWCopLSS2qobt8cfq5S4FoB3dzwXwdgBJSw",
  "key6": "2TcP6QcGibhtB5J4GgTPn4KcpNEbReknj1Dx9FtkRahkswFvksjZsgTfBdS7ipKo8NtpUNwGYVZWDbSH1WG1QpgF",
  "key7": "65xFaTGZi3V4Ju9Z3Z9gXYor7mT4gR27a7t331x5BapXGGmuuNhAKdBhBoSxhGGjLxWcSeUPF8bcu4xnRFp6667b",
  "key8": "5xaCntWZQkhGSkBq9tzqnTptoYbe954KLBh3tHjr7m54AzVhifoe3CYKfccaSCjiWtv5A4uZk3QZu4XnnV2RLinA",
  "key9": "31eSRmngMRXRsqjj4tDuuFEudGNccN92LkCNXryKNhiqi9hESj3NEz5t4xzVzTmpVVnhSFB9qTaDtpuDc4WNZ85g",
  "key10": "3P63YFeRdPzkcDenzyRyBkRpSSNcoTSt9w8bWXWpbtjgbMkCcWyXapg2Dc6oKHhNdJeJyEaEQJ9fAuEnd8ixnVmH",
  "key11": "5ASqG5wznvhLKssmt9Wwuf9RNE4H24okrFZbfRYhXCKiyhW7byzKNwB77xFeXmFewYRg1FKT8r5ZWUTAbhCxU1Hd",
  "key12": "5GfcY6PWghYDzBLnJEPxsr4AJxwzxiCzAeyvazZMxeTuVZtxeVyiWGmd5EWYSWtHFLijhFRTEfuNahJkzLXHWkRs",
  "key13": "YKU7yrZ4XDbEGxvagMrUPKxtjZvLKfnMCfPpjNvocUusjp4hXgxuLaoWmurKvgvzsCDaQea5x6GXwZqV9ZyJDyP",
  "key14": "3hDdgYfNDhTU8PaAVUFvnTsz19prDiaFU9zA55Zo5BWcDX8MB7e4P53qLJBHvnguViMHC3mhpZBVBRjekkPiyWFw",
  "key15": "339M6p2fSCnsK5Gt119imXzPUAgkd5gN5MHK4b7jVY8PUdZeepTUvkZshj2uMSpsdxWVcfPJv3DaRrJtrVpRn4kh",
  "key16": "5WvP836oPshFyEFNVWT4Ka7ABPEUXLcvR5cHGbFMw4SpjksqjJqx7b7rsyLCd7G6EJx7uUPCEXTNuh3doDDgiSqQ",
  "key17": "4kTHzLDuk8wxRYrARgTHWLbtHVA4aNSj3QMc2XU7RweVwKV6wAwV6QvYWRSirptxw8nHqoRs4mk7FB1MLkFSuWVn",
  "key18": "kxtDfFzFwH1iDStJ8bc9DDiie2tZbo3xSu49xKpe6L3uEJwzgxjZTsmY5swcpLfELt4GXbaorUcADqViuTA7iMU",
  "key19": "5AspDxFGobLY1TzAwNUxNHTnFx3dxFQYLogfDYJuBTfTQ3DURq4T9fb6W6cpBsQuL3YtM7ArWmbd5DS26whyxjGL",
  "key20": "5LU35RMDGJXHCEMSVmoKs9LujBhry14ZjLGApy6wMtVoQ5Fx2vDQFbwPWmYpL2gAaXFW67etWpUcpMq7b1gabShX",
  "key21": "2Rr4YsnmqVaaSuLZ1AgJZXeRmY3Z5mCRcRRCiQkrK5pR6p7SJZTJGoGnARz6fSq6ukMSCxMJkJN3hwj31sufCk4v",
  "key22": "57CQJ9bF5HRjrhT2BAcgKpEBogQ7QyJfC6zVCPx4njG6yDkjm6fJFF27Uoc6QQC6xBnLFUNeBxmii2TQuMjXgDaK",
  "key23": "5QzxZTZ8R27LADzgweDqay4tjKz2YnZfp4ZZffo9K2TbnSSTndxHUXmLsYibNECJX8mQ2g8dNfQsjCFdWzBh8rg2",
  "key24": "3BGJPBYXojN6LpyowEejMqfpurpJAL81956BdLkqsF6DzLKoYx7JmhoDVCLtPSXkdkVwHdswKM3EnfG3pR9TxQLM",
  "key25": "3uWAAL4CgD77Xurzx61iHfXmXmbX1nNn7gbSt4AfjjuWNid3LjAf5uzcDCDK7T4GvbhVLmJenkEp59SxzpLpJMMa",
  "key26": "3iLJTfikhbCvPfrw2EcTvdk8wB2Tv8AW7dCaLZAMpoDuc3cjY4AwNHq1DV9xcpHXk1y8ywZFiu8EQZjKTV3TSyHq",
  "key27": "CAjCJqnUF7qx4bGh9VxHK8LsuNs9UXfZ1gmJcxEdSnrETX8NYcpHav3nKsyMn9jAmynwRVYNeMNn5aodFQfwBEw",
  "key28": "MMfuCyFSdmBXD3sEgXykgrazxGD9JdosUBUasUDTQGopKyMhyBLcBbG8pDP3muh5CdTjTZmQQ2kQAmWjN4sykoa",
  "key29": "5hiqwBGDzMij6cBVpL5Qqj5sGBv1znwrkKxAsi3w6f86UDX6pNZb2J9nxRtSRsaM1Vc8TG41HeDzsAhG8XekjqYX",
  "key30": "329UrAPPEjbHrTNrFxScc4cn5pcL7yJeetj2kJrqEoDbDKjxNv8n1DkLmABaTfr8AE3WzfRVi9VNXHCK7bCKpyJv",
  "key31": "CjCnsRUNa8r5xUba8goBHcqpYbxVHE7GkWHQr3yqbyBbZGxv34RoErXd2X3VM5VHGAMg7djegt1v2ScYhmnZ5pb",
  "key32": "4Khy24GNXCM3ThwY3VdYJQ5ukDUjWzeq24o5KWjjcLitFgyfzaBxXFArVjxdTrM8UJCjG7wjBoUhHBbis5s3Lkb",
  "key33": "5Hspqr4fpmnsSFh2oFSATGXpy5Hsams2dYERnVcAWmzrb9MfqjZQmcM6AmL8qnmqVE4kLtHSW6pLiHAgVb3EotEn",
  "key34": "2bo3HAAduJipEg2kfCk7m9uSs9su7Qhp6wDnYYcMAaD3rFNeF8vU9RqLYpLk4WqPnt3S28ZoCEKUg4rjebb3ykEb",
  "key35": "5hUZk6Vf7CVnp8Lesy4Eb27yL7LEy1Dfkpu3rDt2rda5uBSnKrNq91bA7UKFruMFAEJw27s8TypYH2E811mcPJWP",
  "key36": "3Dab8DdJVV51uKuQMaJgujMHoYcBhgWiJqcT6S6EPVLwzSc7uDYvcyQ49qpGanbLmoJiaGj45QBajgBhSbo3LNNB",
  "key37": "Z6vZdoHuozVKVGTQvAar83UBbXoXHPTiKAWv6GHwg7Ko1jHyu7UZbcZgVpUkvEW1F6av59PhYcHpnJQwc5bHTXc"
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
