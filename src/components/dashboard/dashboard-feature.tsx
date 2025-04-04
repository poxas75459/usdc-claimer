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
    "44V2fvrmv7esfpjAMGSeFxRRbXdZ7eGy8V7BJPMFxdPgPwuW43LnsrAHW25hVmfYpbo6Pd9teNd6wxBWJxanWatF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXP3Fa5qCQTNbq43WAmjkngGVYKb9djiGfVgzvLpDrvLBUxkYhp7sb6ifxLQgz1AGxRqYLD6fD9JnpHy5L7AM4C",
  "key1": "3i4uPFnSgRp1KQbdM25UcU2cabQv2bB5ck9p6iQ82k7V5hYZp6qo4f4yybirbxG517PE3hufvQnQ5gtCMS6AaeTJ",
  "key2": "3zuA8BLcoy8qp5wSaERggTeA4M1ykjQEG4XDqiFLaLbJ9ewwqbPbsN8c4UHwpFEsGKa1CFfyK1AzhkAW4ijemmEz",
  "key3": "4cRWcog76xrdYP4rkeKHFBcNws8nMnrAq4fuJf57xSyv64ahtiTdjEeo4UFSBCbYGYjQX9z8jd38tr2GToSvF7rU",
  "key4": "51Qtv3PvmH6uow3WJsUa5VBv7aozjs4r28geXbA4jUKDVQQBoKJBLGcCZcjVBFqxjkp9PsuMHbTjRVkP49fCs7fR",
  "key5": "3DXiKRY9c2CX7Finn7hfw9uZx7RP1tGG8E31yohosjFb4HPg1pWscjwedoVsM8nQM1jwRqKM1rtZca3eXbL3rukY",
  "key6": "3QYSHzL8BGG3vHR3p8ffagDskkwp9WFc1cwd6HKocyb2szcqGKTCjns4D4JUCNQ1dpQpVZHQc5NZtvNXvFjaVJPq",
  "key7": "3gEmVGPiBFQssREuJ6xwns9VXsfooqvaaF68yjTLr78FFCSHByGDNSm34qMs4mEX1JYYXveFNEqFrcgJEapD986c",
  "key8": "5tyEgHNDGbXpC7ijcUYsM7VkVWbrWpS4A1jXq79g5W5Nj5s8NzVBoowqzyVEenFD9LEundkWR5UdRVWZrXxtqa1f",
  "key9": "66BEDbbuPGChCLLuM8YAAspMysWs9Xm8NiZdDUBrjjfT9KHqVY74M7D1t4jWvfMwwVxbmfcsxausZf4gMrFUdjAF",
  "key10": "212evzPuY2fLZYGMzcik6RTZk7BdH46vkWDVvemJeqgPvMRXC8j6VmtnL53uaJNoAxWj8mu6A4sMbAtQsDj3hUms",
  "key11": "5Eemvy2W1A4wQnqZ4EYzAYFPeBkZHXfKLj23ZJ7pvBGP82G8Mk8HqCw7jmqCBx31Qu4E6pKHt419DACbMAN4uhyG",
  "key12": "2Xd9ypDByfESw1Xivxzc9dWHFSoaXCaobEGEc4yPZZFL3W4x8W4QNh3xyTgHhBaL7Jj8DYe5SAJuJYmN3bZqGa1Y",
  "key13": "5tS2URpvFCyPpKgArHUYrMHfMzzfT3b1UtFi1J55DuDVVpQedBvB1Hp9wN7QdkT2LGHaNhRkiDpxm9m6wLij5zWm",
  "key14": "53ABi4gGJ3pZvViBppowHJTGmjo3vkApkcodgpXkgT3CxZihiWgrc3nUQqybHVHzgaByY9p4QRLRywR1wWWBrLyZ",
  "key15": "Gy4T7YTQq9PxV4gZ8gsaHG16pdN6kTWkkdNxdGfTxMKxXfxcKy4cC7csyWUsF1WBAcPMJKG5KfaPjAdKVvPqoFL",
  "key16": "Nx78xkTVpv68d5ZvUPXaGGs6MEYe9qysrRGM2YPKCSbbbhJxQD7KAQe9yvJXxUGi48SHvbQqRJ2vPhJN9UYw8Td",
  "key17": "oUEymP9aPEyS4L5U1bg1HyzkSwD3KWBgPWvLZK29WgwdndQHriH5QPi8RW15uJJ873rr8EjNYJUZfoFyn4Sox9w",
  "key18": "44RUhXwqLtNCcNwBHmsBAatiHdHkNtS6CS7iJCoGQD1MTPywXp5kSgpotPhyrtV29FatGzEPBcNS5NDJxymVMV3",
  "key19": "5WBuK4Tho8zJyvE1SktJevTbhiSbCQhEdssnPeUo6544Btw6fbz4Ff1AxuGz1zqQjbGwKhXhpnHhFgmkSpj7mQGU",
  "key20": "3nNJNGTudfA2NeS46GrFLfFLT5wqYR3xRwmqucjVHTZxFgEUQPh77qjcUAYpDWkmFbNtAt8xq9CtQRjSV5jipfsk",
  "key21": "4eP9qPF6sd8Ht21gFsK2Y1G1abSe9PcZXnaPMFvVYbjdruTRejSFaeEvdif31txHFQPpkhM84nrtirX25RsuFiVE",
  "key22": "536ZDsBy3hzFUhkVj4dDUXXd66J9ErSBSnnbc9eb1E26vQqGzKoT2qxTxG539axHAyUU6yuCGsMZJUJpZMrQbSKc",
  "key23": "4ZHE1ggfUSYmjjrkPUzJtto7qDYpjUJL79C8CmjZDc6ecCVfYGNxmXYDmp5DqbYaiaie1LC1oGhZRb6M5jvWawso",
  "key24": "3N94vRdNawDLN3V1F3DQz1kfP5vdp1vov86BKo7TyPVVqMCFjYipCQMdsqEmY9nbXH1QKvdm32ZoZfD2Mo1Z3jVf",
  "key25": "5MUWzzX8Zw4LuKBuRAMqkNArjqr97n3Jm7uFNAPynLt6NhGXWTZS8ib3n9b734ZiCnfp1y4mMwNZce1FsDN3Bbmz",
  "key26": "3Q7QExr73K6QSSLMLdg7dx3eL6bzbMcRs3tTWcrgPbdj39eEHYy58VbKzov96yzPHgN9CQUkih8vN2VyybFgLdjf",
  "key27": "3VXd2dscdnSUhHqXYALTgK8XUSoVNG6rdPyskWnYJJi3TVnbw8Vt8WB6BYYYf56xzWAcfj3CG6pUh2aLRGHVtpUz",
  "key28": "3tGJ2wTbn1JJ6LtwXRieMJ2UETChJgeyGg8zhqrFyJc3sqdLMyMzAVWYNywNVx6NNfkJjdtATRQmoM5sDTMSnQ9k",
  "key29": "fiirToWeBszk9MBJExUgfqGsiXqx6pDaTgmtVogB4uF9ThSxdsMH8UeEocEtFSTQ9Ag2XTRf2XX9Dd3G2JHtNaW",
  "key30": "562nM4YUZLKtXZNCvRmVVyABHKk7MhuJtUgaisQ4Fme6B395ogbXBkNXzvNBTHbZu2468yJHAHrG1DJgYqWCS7sv",
  "key31": "4ESZURG1wivUYCF8ifeJqGToHBWgRfgWTToZ1CZzLiaiNbQm7Qs3KQoyfiENXhPQ2Knfv9EGvFxTh1SY8Ry7iAFF"
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
