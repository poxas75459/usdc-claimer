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
    "3dBQVZJR6YEwHj3762DSsQLSWWuKaJUSbPCKn1iPPxDvAT6DZ6jEGfYb3Xnd8GuYee8Pb7TpHNCGvyFAiwHWyGVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5TdvG2jkJsuPfV2agS8dxP6pjoj46mHJpHjMDSnbHopjGpg6oetFdNAYcD77uERpMZiQ4wqpzniSfv3AnSPdq4",
  "key1": "272fsq159obiMdDLsQpvRQ3Z7QYwfCFyNagQrSj1KYe8yfSLh9cmwk8w1CtR8EWoNeeWWqvrXjb9s6GwQf4fJMPc",
  "key2": "5gpT2VgdcHP2vgMEgb9BsqD5SJ4Gu6xi9ZXvsBDJ26GDoGYZeE2oV5SfZjowsfuCjrzK4cazyjrZkYfd5RbQJ6YG",
  "key3": "5D7Wbzjiqg39YVwwtreTxNTMnq28P2jkNfqHymdKdLgSMTfTVTLspeHY9frdHS3hDKny6ScRkwMvWUeR4pMj97oi",
  "key4": "2CsrCMY5v5rr2aM7xYQE9BYdzkTs6UekeN5T8yYY2wZFcgJ6GkHJk1Muuh6xPLLj4bkr1Q8HhpNs2mu8LBpq8iRi",
  "key5": "4bSbSw1Hnu6XNjkPf1gcRxsbpBo9f32NPNpZQ5o3z6UtqcNXfSzBtcd4qbiW2GTfve5CVNjHtPrA111LEtx6hjeS",
  "key6": "5mHbyMe8mGuiJBys4WyktGWYojM28GYaXZibGKvpJsVNDQC5yujNYk8YbStz5Je1TFWR7w7rjhuEVwoYJhZrjWem",
  "key7": "4VhuRHKUF3ddgPVWsYsnrfwJfqvmX2hTCyZuQ7aioPF37B9AdtmZWNAsfcSxWjiGrU3RaeGhiSmRYbWBVWTyhKSc",
  "key8": "3UCF6VHtJyHYs3fTBBwNawgCxupgZ9Va1YYK3cN8nfZxbNxnqcjzbvHvby1vMvBtmCnMvS6oum8Hpu698vZyaba2",
  "key9": "2BxpGhWdkhqRTLDazVr4Mo1yPK6EshQAJHYayNXtxHxWH35PiNoaDW1NzK9Mbre4ieF7kgQSXz57eXSNahUMuARj",
  "key10": "7mZnKpXzhd2SjdDLLDzZcAXEdwX4b6VjRs9npUf8UEkNvKMMVERjCvcSAkx8aCAE4LxR5nVauseBdBfrtQZry19",
  "key11": "2aWkyoJPT6HN6ei5TWnQRMoeqUnuY3ENePjrhG8BwTsDVV9YkPHeJk2e5fKSFcK8NtEDZNh3kf58LKxqpWjkeJXD",
  "key12": "3hbiocdfwxsGke3JTN1gGSumSYqGr2V62XCpYKZ3N64tf4UfBMmdYXfUuRAtXLiJtQk6gpcpUVyANrSjmm8r635x",
  "key13": "21bRfX3niPYz5v3ppEYCtTn5vKL9Zg42SMEAdn3cQqALXdAbRh8WxLcaD8iuCnZoohMTq8aMpBAAxXaLeiRAnzcC",
  "key14": "6411AyMFXkXYswcUMRpFy3ZZcuRKgNg7t1LkkjuAGqxJhGGcB1Ah9becJxWpJLqacYjBhfTjnR1zky9DTw6zgGWU",
  "key15": "5192WA6KJcBZVSu41JhTibiRXr9pQLi2pJsjvw4Bcto7p2qj25D3NhNje6hwE6kUG8JLt8eBepfruaqPoz7VnSJN",
  "key16": "5HUzKMkDWdwAeQeyPRWUDxeZKoGGcPaM5k8pSjqauViG8tURgwZMuG3rmko1EoduDU6zJ3v98pYygYDE7M1k8DFx",
  "key17": "msMkUKwVKkg6bXUGvpkJMWoxwBEUKDBxpdt9p8oUYZ5cqBQF3pXNcPmEZou5kVuFTNNcHDdiBTKVvcgVovbTmvE",
  "key18": "7a7kB6NBJFTya9VvE7yUVfr7jz4RcRPe3KG2UNPDxdZ7WZ5YESxAfW78jzJFvZ9ZTv1nxqfxE8MYmTtRW8x6J1g",
  "key19": "4UA9WiGpHTBZDBh2npKFKcAUKoXtdnftSVwKVGao7csWjY8v9de9RcmN6xKHemxo46gwNV7spzGRqdQbixVKyBsw",
  "key20": "zUHjn3RRH4uDCHoSf7dcWKmxm3aPwTF4WPaiJfcPGPdKjGb9EkZPdeddSzedxifhDoPRDCbbcQ1MaAfXiW2FHMd",
  "key21": "JCqAQzhFdBycz4ALVddfaAknXQvah8H9YBBiWdq7WkDr7Ngtx8qK6178Ceh8ci1wNbAFojqpHZAeRWyXNLX3Bg1",
  "key22": "3Pa6pTQ3xXtRGtvzKuEY16duwgaVFt3nw4PB2Zg8Kp3qnbSZM4CcqQHse9oKRCq1w2rfWnWNk4TSSNWBMifc1T5T",
  "key23": "5pBmcYzxyjxPX56su9d6pVdwrkLgJScLmazNwseXVe4UxVjZfnFGnPf1pDK9kbypm9uZdsL5p3Zh6w8q61VDmBuk",
  "key24": "v1XRAmoKJcBg2YWn5DKLfdjdM6YWkitmk8tEjWcTvHiZP7i8NEJzhTUZLRCNYDdXCubFVqMTbBgwmWAkHvhSXsj",
  "key25": "3oC9vB8eGKF7d2NwejfdjMXQrwmZvXgM5Z2RTqsoheaoDAgAqBpdArmd42jRpyEvNTCvEqmjdHAFXrzTwrLRxRys",
  "key26": "3nbMwBthv8xxFTFSTjKFtp2Q9h1f93egXmdFBhcomaqj8KbgeswxVYUJMScg8ij1cPU3kmp45BujBw3ttJTazDdb",
  "key27": "pdR4rgHDxftsqdeA9mWhr72wZvmx3oL2gFaigiGyi1vjcUgxz8YQdxi2h5gx435nXjmTeCNw8TrQyGBuWhD61y5",
  "key28": "2HRntc1S7vQ2e46bWVKJnAvwv6sEZsMQK9iBFTbz15UDfSi9p7jWzG1bkg3mwgxPz7xnmzsy7KbEZNGBEwFrZ1Xv",
  "key29": "45ao1rEx7c3RMhJK63T6GZMeDCi2XAMJHfrod2au2XX7mMZU9bbHehghQBtEuqgz5SoBs5LwS6bavdP9RZqLpMXe",
  "key30": "AhqAyKHsbeWY3bKby5XGYiApGMHeVXfqNdAh5mP8RF3uZC6C8YbCoQeZzcuTz4Wv4tVM6Donf4YFRQn6iXMS9WV"
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
