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
    "4psX4xtSXJUZSeEkcVVeDJo3zezwYFZSUjGBBEWKBBDTtGMQr6WiHDj2o8ep5opwfp6bQvRNkgJkxH21GbLJS6Sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNoHcYsJqfD8K31pXiFPepJH2KvnGoaUqvcCjVFffTkS61GKM5DnEhrvsYZL4Lc5wjn1zAdsJk67AsNxNcT1vq4",
  "key1": "4huqut7h9yjcnaPbibkYBjFjh1LNUQ7NaEaeoMB9GUUtyL9Ga5U1Wjxd3dnCSEsatJKUEKppr4hkcPaUWYN3My8F",
  "key2": "Jmpvk4ZJ8XkzimwG7PfdY4VrJXAzUZaTJcrhaMy2c4wrJnKPmUtqT2mQiYN7xbMrzTm4fZ15ZkFB4VCf6dbdz9W",
  "key3": "3q3QzhMw4KgVK2wt5UCFm1yUSHr445BFyBJjFLjCmFCi9aGoSZj1jEFwm3ek6HvdD9X1qgi6bmri9YrmAtjro21G",
  "key4": "5zx5SgYB3QV9CumE3iE62BXt5eYCgLnn8NjVqevFEoUWExHcYYKSdDK22EUwt1Lmx19PuSFp9zBGgJBeNRpX62Nv",
  "key5": "qf5SBCsFeQUJKbCxPCkMM5vP5E6AcSqvWWumw6N1kgfnzmgbtomTu62wzAzrZT9FeWKYt9WohhdkgYUHDsaFcXx",
  "key6": "2PWu7yNfpd8j5r5iPKnzzTosAVk8TWt1se59LhL3cZA1xPBdi6z1Ptxt1rJSaLUmB6aFxYur4HCrQ3q8K6ajrPR3",
  "key7": "GrkNPbWgF9CAd3RkSEqQTGwag3GfU86g6Neu8SdMygmpwcM4d1mwhEAgQ2xMkSBpk6C1ei9VanW3nGPdNA88N4Z",
  "key8": "52niKoKh2suTb5Dfj6tgA67cxfKn9Fith5LKeNT1B5ctSKjA2qXaQWTvWoDwAH57c4hMs8JtQ2qYVJGTCLySdZaq",
  "key9": "fqd4F3ZoMMyA3irXX241xVYJWk2vZhoFNpu2EYW9rugYt2k9UxCWeiXTyacDDjDcMXZM6jZH6zxbounNYpy2YkC",
  "key10": "5VD1T4oCPwfHbmabJRULYgLXTFuQxLAzwqXrRGs5SRSBVMFhPiSzRYGBqQd79BQdi7zydoTEXB2qYqLpMpdFbw2z",
  "key11": "5jUx14F9zeRLzjU5uXDhtJNVrrG9mvcG5KV7esDp3bjvWVCQcxWWEHrgxBd4HRz53P7biH5PFptr6s2g7iLeCaad",
  "key12": "3SXRGzAMy6rDmUskJj9WsNK64hRShDDhVvC5FT7DkrcZGQHjqKLCJzAYm7M6m81icj9ijkQph5YHjSwgA4dDVyEw",
  "key13": "3oE3PrrZgHSNK66ropabrdD6utt5u2AxxW1sU5tH19Ccmo8no4n5RN2ZS34FdrAsgW4jtZM1b2ByjjrUTXq1QxPV",
  "key14": "4Jw8fECiKfz7hYHMc828sj7F5At5mYyatLXvVcBCxY64TaUZQs2A1dyTyZ9ToykKgvyPETc7fXtb6mfETcTanwBS",
  "key15": "4CpXakWpTSjHZBdV1Q5mpk3TRp1f2eqid3U9jbjyhLqEGR6GtdA5ajAe3oA4jABSD7kGnPBBgCCLH6ohu9hs1EgP",
  "key16": "4C7DNnGP181xeUpiLdpSDsM3MuaWv8c67dn7G8jKaR7VRZeBRcY1UKe7aNRCgWtBTV8a4gcg21nUaFj4Dc4FoPFt",
  "key17": "4nUeB7gSLq3gM8TWjuevFHsBg7frL1Fw2vSJsLxQZRU3NVN7TMvq66mHGNGs3djYE32GkQYjEop9Y9nTFChnBvHz",
  "key18": "3hxsYH2vARiNbpCZfpkccvLSjNjnj5Ffyy7L32ko3Wp8beHF8hxigbskbuufQR6F8nRqD6PgMSwzrLmMXkHDv7Hd",
  "key19": "2YdVNRiNzQcVJD6ueiqiXKKQ4abfFhu2HirQuSwZXdwwDJEMso3fF614BpLG7k69ENax5fYkamadJwKjoMK4jVXp",
  "key20": "4GGbK6VkHaGQbQnHP9frnnkeAjYUMAbhoRn95Pd9QQqCeQXEStSefowAdi97SPqG2SJnjUnPNHp4Gnk76uZZhWRd",
  "key21": "FUp5bYSzYngD41ErNHNDcESKUh2ogKzagSZWS5WqJtRgKNGc9cxiCUmjmMhdHpzEuTTGos6Mbkk26symVmp9dVK",
  "key22": "dt22qV3R5MmU6z4LP1Vyk7fDB9bBLz4oJtHVMHcQeYxLCkXeEYkSYEmeMGYpY848BLairjuSeLYDrqfBgPSm778",
  "key23": "4kaimK1szPrqzL9NWoh6dQNPPkskwzCcrCd9H1699RsPBmMoXzaBNGKDurmCUAs9ADVBonW4JAnMvMtm38KxedQ6",
  "key24": "3ZvTXTRwbfQSPj8MnZpJhG5PMV3CzKBb3taeETHp7CmVYcuCYtdfpSobGBwrjbSzPLPZwYbFK8Sxr74y5HGXgqed",
  "key25": "3pv9KWYivh9wDJDgtTESwxxNBc9W5Yj821gVdazy9JcUNt6qZRPKpcibT5e3k3RdWNXRbayHT32UgBpGiKL6xYE4",
  "key26": "3HrWq4sj7CTsb6dm39cv1YRLRHmAJSsSr4qu8xVV9C5cXD9W1WAsoGmqxc45wnWLcemS1cwfNGKZ6Db3RmBypWXA",
  "key27": "5nZTXbUj8Y1BJrLkkHYdG5DeoJBchUYk2bNrbXJrG3766Kpq8eSU6AykBBosnwDqEavF9N2S9S8yzbfWu4Liar55",
  "key28": "2qDyBeEqjY1QseJXSnCBkNVnQMgHTdne5592d5uyrnHrsabdnGBQC5zoLHE8os6tAqwKJra3LiRdL5qBSjxw4iaY",
  "key29": "3G6GJRib5VFQ2T7sn7vyoh4nH8B9cuw3yMfbSsN21f7U58yry2jTag5TEEWoyYaL6Svfp3oNvAJFngkrsyLvzeE2",
  "key30": "4s2eDtJCr1Jj2uFZgsRteKZ36ydty4xgamgNcDHr5P8kHaTef3CfeWgSa2zgn7k13AoqArTqQwuPRNz7W1XVYNNp",
  "key31": "3nVmdA8paKnbGUmLfasX4TSDVMrKCgWgzMYW6gPMWB5adLioHzSEmgpQstNdZ3L6fZFDZ5ZXBG6i7kAQFY5vYYsn",
  "key32": "3F6fhRoxyNgaqmg7PWpvh9ETkbYvnBbQnjq2dKEpYp4iUtqD4met7X4iR315FFQmW1tf4aTnGCdgrVXLdC7EypUK",
  "key33": "5fTZ82s4iLd8E3ggtFfSj1pXykTGi649fcWt9T3VV7WN81RwpVJMnS9PPFjESYiNjVzQgy9UCW3BaSW1qWEtgW4A",
  "key34": "5g8Dk3VzA8N6wqMaaN1GRK2ZNT111F75Ep7ZMx7nu1CaPrjc5YxeM1P1zww1H7eU54w5qheSXYYTGGZQCq1arS4x",
  "key35": "5PyTd5nUBqVfnVxsEpRvbUsGi7Vxm9RYZi3dJAWtq8vRu9VkyxDWwjuHGSCvrZ3aCRZiUWu9D2ZSjFAZRGhCb4WF"
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
