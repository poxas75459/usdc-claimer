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
    "21UvzkCFvFpC2kvPW9anhRRi2nAWnfoojUBGbev41ir5ExwAZJ1YuCPuodTjjebKprDY5xtaLbUmsWKP7cBxL8Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkhU6eU2w6rhWGGJ8KbAZ8YQiBBzH9nWKqw1pYG73wMFqa6ivnjm1cA9bAuDsH13wBWGgAyPm5ijWKy6F5psmQW",
  "key1": "4GBL4nozsJNdu6GsZUxmU5GDfuftnALxZ4Rij9Am1fegjX39EqoBPLjRPcwAdbUMhX3ohHQhTkMjJ8ssNPoA8LKS",
  "key2": "2K7pM6J97Si2JZDt7ztS6Th1gpFVj5fqsi8AZgPm3HhMAdtxy1utBwyfBGbw5Gwi4S3wQV5mLW8AWFmr5Hsxm4Ri",
  "key3": "3njcJYDAwiHQdSo7Fi4FyP3PpqUDoic3UNpMJrXj67zP2rortJ8tQjxe44cBFmKhd9JdwcYszmDbkgSzdyxXH8ZY",
  "key4": "5AtJ5c9tkthb7EBhMJsgicn5X5WyArPK9egWcZbzZg62USWvWF1csoLrrQPMwrxM81FiyKmubrgasFJfYe7HkRak",
  "key5": "5Zg8VLrcbnBmqhegdzR85YYwQbwvESxjgnspG2Dr94qad8fEBHFW88u6bG1TMA8twRq9NHvw4LPqLJXTnUVeJonv",
  "key6": "UsoAzvqKUJpUBEfFCbL1nM68fbXtAJNpPT48DFJbyYLohcyZwXiBnkqjXaxK6gGV9L8LCgripxGDZ8JByGbHmxa",
  "key7": "4L1jVvNnvWjk7uDJareocjCeYxCyEiohQzTsKhG26BW9AybhuNeVp1xJvErjPxhz8FkJVu2DFupYxGQHwt1kxQq4",
  "key8": "5BQZ4gU9euFwNKBMHKqprTThc3PWm27Qw9UoPV3ayY2KcUKbkwRE4XaRxpzzRqtfQWJEpEpjupZWDVCfCWp9e1XU",
  "key9": "3cMaC1zg2xLKVmYvpZ2sNWXNeHtHTeD8nczKUXHswz7gqkMNcBqHPsKTmeyBSLjDbCp5b1GhuYWi5SFRbZjcxQbb",
  "key10": "4koigcrnix7mknqYwrs6eE2nUzujgGyJnz6nw74Ywn1o6SNV2TxEzsYPkjisvd2JPGJRRvV5k7XMyUGyGfaCWUXh",
  "key11": "4BLE98RXuq8pMfSFGECsiPWgQvZQarPwA5RwmBCNSyt4RnUtMNy8BbpoNtyQNuGQMW24mpXa6fSZbrtVnFmme1jS",
  "key12": "5D1RwWjC22t1oiFLHQs6VDkwximkQGeRwn5cE5GRxKBUNvUyWXuqmzJf4x891y6cekuyQpbje7h27M1d5SaFjVJa",
  "key13": "3BiHANDXCSkmEmaZ5T4193R8SLEjfYRZf1ApeDaV4Ahj3exLgmKBr1DeFrpz13Db8cUuKunpMXdY7qknzSmXdVpg",
  "key14": "JZNtNsWPpqr8xshDtypRJXmjA9o24EAbKkmz7uTCFzFvCvAuU26km11KfxKyY5xKZwHpBaMcqoP6afWRG9rBcHs",
  "key15": "515VRKYjSjfhWYBoGaMW6H4Gy1XgrEMmArw7fMxBavusbYptH5eGj44ZT5fpJmkz2SqKccLoSBwW4wH9aoQNawDq",
  "key16": "5U6ygNM34MikCBPawqWjuntkcuvTuaSEy8HnhSfNjvjrfSCTkp6un8CjUHa49e6WBdUQxQwf8a7Df1LoSB4u4s9W",
  "key17": "42pccv79gg4d9dXiNjAzjNBzPCs351KUWcPzWdFwtHt1LVcSJHsPgw67gEY1C89J6Q8gZJg4BgXWBNpYrC2jtoZF",
  "key18": "3MBytdJBGYkQuSfeLCMxJ4TFCwxHY87cECxKCwbQMsBnnxPh6QtX8FTx95yNnV5BYUDkxkpbbWaoLfAwVcgteirN",
  "key19": "2pYrQqmaMDPK7YzpaXBktcTkS7pRTnCnRZJwdat2jG1MzKxijroovrBVV8QcLsbLqKYrPKn5LgTjtFprgQPJEAyd",
  "key20": "AT8Wuu14id21hBKFyvbtCCXaxWqUmasZVWkHmzCztsMc2YP9tkPi24GZL4KTCNScEXHwCaM2m8CFaQnyrv1BTfH",
  "key21": "29A1FH2H4FdvHXwGTPpjYXAKX7PWNaAMwGwRYb1qEiJXF84cCrNAuQrEQNWXPf82vMAyGeXAUkGjRKC8K68c12kp",
  "key22": "5cC3Dxse3y2K3W3EtqCuaP78BTybpPdvcCvx6qE2Br2qd4T6mZj5xwKu1MmX3Sku7TfwftFF5bVU6kzBz9TE5K1R",
  "key23": "5ZGv2wKuFkSXSThUb2iFQSjUhWLEcH3CztPt39kGnHkMmXEQUnCWuwT7GskiBycYZi7XFhG3qt3RQrGSNXJmRYpf",
  "key24": "5bF7iKM4zBu6CG7UxpFHg3DSzSSm6oxTHh82uafrCKd9a85ZXaQoPY8kP6TMH7d4UsZSmaMNvkd397rtUANgHKJR",
  "key25": "3dMip8hFnmiaZBb6T1JRckocoR5uYpVtB9d7qfixTPV3bPcc4o19LSVEWeEAnMEod4kVmn1ifcChCrrmLZgGizrY",
  "key26": "3wd6mzqQ8XDvrxJs4uQgArcvkkVU39ZqpeLy2avUri1H2qn6usNuZzsqdhzv2CbaQhB4nkeqw4uCp3p8w7aBK7cK",
  "key27": "4FqzeLaGtKmErkMbrWY8eNfUR3bXfrsGFJuMUT1g6gA3wDeWEPnEh7yHBFmSvrZQWKk1J32Sce4G7j7cLX4Gg5Pn",
  "key28": "49QjEQfxTTTyCQzXQTB1ijt5Frtwz8N1y4i7L24r7dVEsQS2NkYb91EfeAjUQp1MWDwQHvHercUhgGJMENT7hHBN",
  "key29": "2ttvMFjQxDMQRkWQxYjzmQ2L87xk6XbNzJSt62e672R7VF6FPb7TycjaxmpRtxPvdVUYrYuKh6FSbp64x1mNkhF7"
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
