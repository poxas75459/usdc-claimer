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
    "4JSp8SaH7Kh1xmkFobxJbSHWQMg5Caepw4BuHVAweaipzP5vvt9LPhJtV9HaSQvVrcpKqavhZZ7JBKN7ouRb89FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BD33SiVaRCLDuHra9jezBgPJum9jcmZZ1WcDWoq6fnjMKamZoqrCm7jJriK3V29i9dhNRbU8FedBzMgPVSbEmkj",
  "key1": "2EoNV9bs7pdkmkgsKyFYErW3twWYKxJRGpRKfFSSUyeWi69hziciBGdQtqPxLWx35toX9eQPgp7qU9fSYn1GC52C",
  "key2": "FuA3dhJeExqTQYBRmSNDBiFn9TftFr9T2xKzbpzQ7X9LiiK1z2VEEAWZeJjhnzQpdVYdRybNwbwmw69shfyEJrC",
  "key3": "rqZJiqPJuLtMxabcfBzkEpTC2tAsFP5jGQehQD1rYiFeUYxu1bSVfXbvNWXtRDLvpGBbpzgLBC7Y9YoNQXtV9GA",
  "key4": "2EyGt6qoejE5WVNcfpmaWttC64XberUfExexMoJmZbWQL6TCNXbq95SnSJbXDNT1RncAkoJpNoXHE9X93GbNWu2X",
  "key5": "4FGtGbXHUMTCfVrHMZa1Z8go6LDmUAErCHUzTmFTQD9wCYwae5Qn9LhsbUrahyHiR8NL9vhx1iUbap2SgVhvNW6",
  "key6": "2fYA4d86CiQa2so7xZZ93XK21FfhsSdkZeEDuGFvXMyMyfvAtubqmNrqdikN6nHwNgaTS6aVHmtxNPKQwz9x7S65",
  "key7": "2KXUnxzcCDm4Dxc8KTJsuiXNCTuHz7WyQJRBdE8BDQmsd2HAgtSr63gBVxETyCDAvrQo7FdA4asDuLw3nr9k7jfQ",
  "key8": "39Nbr8YeLoVzUroSWbQ1uMg4AygSzhmCkhPjm1BzRr2N9WLDxg1n3gsuEPfJ1aYk8rqo5PzAMHPBbBHGsfd3fJrs",
  "key9": "Xui1BHZV9Qjbvd9iDhPf8WGjJthPDTtnRUg3Tw1gg3HPTMP6BHJnwUQQXTSseaeBUbSJiS8TqAW9m6adze48CuZ",
  "key10": "3amsHw5FyUgsgzFcgJqtk1gpUXY2qqZ8g9mqRqpkJUKyVFjMJQEFERugyaBTcSRGG7idf6yv6FhhabWDCDa3BhmH",
  "key11": "4wntEAtNa8jyUyaqdyqQo6VvxioyoRL3xuWEsTjhkGM9tGq1KBLS9rdALkZ2NMjk9rrJV8xer9udbpeBQw6SDnEQ",
  "key12": "5XAyvtnhPy876Wa91xfvb7ASC3LZVpKuZwEmd1K4xhiUZQ53mSPkm2KfUPfokfxZjZmUcgru3wDCBYnwMiJR3Ywf",
  "key13": "KCQa2Z2rAVmQAvfG7QoESYXGEwdNpGchqbPnbq8F7LzbNWM6NfiTdV2mV7Eayrx2hMeCJzaR1RMLhnkuCh5oaKr",
  "key14": "XTzqdn7mULK6dEvw75sxt4Yn3fRVZvirtE2nR4nkKhGjZ6FMbW59wdktJas2brfFuUZsRBUyUk5iPZB4D4DJTdU",
  "key15": "3rs38KkzNsqEU7WETgTWihuszAMzLueYH1C22QuLEe29KinYboBwjPreFJqKELg3jZscfDHMcE7feEQsNLTNowEi",
  "key16": "2QRUYoGtojubHRDurXUPJyHMkCH6vehu253Cp6D16Myi6jzY32Sgmo76zoaj4JHeiVWGpKaw9cSkd86aYAympLLu",
  "key17": "5byyhycWi4BRRAJkSqohj7be4XJ1XJPNmWFCZqivtVVVc38iNNLP2e4rNeXh1sajGai3BJdQK3PJj3L95eJVWfN7",
  "key18": "2ndDkGTFa6eEfSNfN9Mo9PcwJZNN9CL39C7YtB4STXFtRPF1iYiFF6gWit3TbGnWfeMQvmEezfjqz44Gy1mhs5yn",
  "key19": "2njBVAQ41Vjw9uhPXFqrRLZwUzoJhxMG2YB3nKRKEjaf4abmKiKhfegXujE2r2dHW6Bq6ipJVBtFUHghGiz7NNS3",
  "key20": "2SmsRXAyYySuRguZnLAt6D12juWyJdaCxXDWof1MzsQfgsBqAHNeAD25fFoVzWzSQ3UicTMWcYyCE4uoUU5a88uX",
  "key21": "5jYQMztPzebWFSu7XRVGDQ1oRZyCZ1ng1nj5j7SrXnQvHgFFysx6CVxV4PHoZ3surEBCPbPjjUT6ZpUK4oeV9kX9",
  "key22": "3kPhKAUZhxyG4iTNWymSRKj9WwJsomoLxoTC6HoZCc2iYne25oJFZwD9p5CErT9eMi8JMKk61C5XmemM9DFTVxoT",
  "key23": "5UCkYjWTpyWL9gSfyJeAM13MKdknmtacbiHeb9Q9CqHfvxaPnj6aGXmoz49BT15zDyrp9GZ58ZwV7xcuY8LaHEhu",
  "key24": "crqpLAfQWXhmHbwNegfHSv4PPUozvPucusWpe2o2kZQ42j5a4D6apksoCBeNcgbhk9EHpsEfUmSm4ePR6AFD2dn",
  "key25": "2aVvF8UYoDT7C1cPFi5xc8VHbvuzJz4KA6gnzrtj9FbY3LRCKB2KuxQ5dPc5ri6t6EtNsrZ4BJ9KmR9Mfa4CrA4u",
  "key26": "5bQVmwC7A5AWqHX6X3yFLqXEWdyeFTquf1bGc5zrFv1XAYtRkrtuFq8CBpWBnrpkR3pcZC38yiFNQ4vERJWgR3JX",
  "key27": "3UBMtdASehTgXF22HWG6JwMEvhzKHiJBKgZ16hXFGBraR9zfNg193LtXkqgGwoBqAxHzqcFgzLqfydAo75SqDD5e",
  "key28": "2XEMMwVb2yMCPD2EvEiZ4iZ7NjFjGkC7pxVCe7P7Yx1xy8XFunthp9m5vm4FfCT261f6nHLYzTwporuGiBQ3PyxR",
  "key29": "45DcZDfVPUYUdhnu7vp3JkdU2NUfcH21e9VXj1XigpbyE4LNXsCifyqZtEEXep1ppWcK6dURWYMaHuZoESVU98wX"
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
