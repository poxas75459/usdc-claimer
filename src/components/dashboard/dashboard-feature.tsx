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
    "5HXKV7q17fzGyeGnPnfaQb1hoDLJCH5kGjDhbhykZpBSR7xLH6LW4DDnKabcoUWZx6kt1E6YUTzV1rDwTtasS1SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inRmM9UG6QK8m3Eb4T91bhPpb5eB2dbjqc5k5xv9dxGZMvuTGCfeSwfpPq6a47zmu11FKuhkPPJ5pM9akr4PuYL",
  "key1": "4twJxcD2ftNTLczyx1mpF1kYKxU2fgJQDC8HCdQzf4rpmBdtF5GLibCBb3qLrXbEn5Hen61JYd2dBmgyPkioXvrC",
  "key2": "3rfyVEEJqjqzmSu52BZnqaxzbpzsJQC7xBiELbQZG6dLQXu1Turc3cCRQ9ZTftHkgMviZ9EaJuHUBnLkmFxVJmxV",
  "key3": "4KDDULruvvNbc8NcmKhkz2VWcZo6MP3AXtaTPys1kqVRWFAPjn25TMmXyXBbTh9xL63AYeodRTdQpxnxwy4etqmq",
  "key4": "2gHdcLQV1edsSq614j7ksgQBmKV9nzEmiTjmQhzuZXJ7UmZnk7MCEnUntULTyEDqdDzu3yK428S1oRSRwkT3joqS",
  "key5": "4Ve9cqfw6XwMr8XSkuYmgS3UnVKVGWNufWW6rQSUDawMZrrARJWkB7x4jQHXxQSmeyfnPVP6sqXZP8zrvpvNfgRi",
  "key6": "4KHqA72KncDE2bnb3YYop3T5Tt1wjRcD7oZefyNASwCoFZbYw5BD8nWtqx1viQYBZWhDQKiMsNKW1Vm4XNWH2usp",
  "key7": "3QhNtjcAVoeUPpammjBEjp666JvajkvGojQQ1bZnqVd3ggNjcTvo4qgxV8Cf2d8HL3vp1bf9ko7WCNQAX786U5qK",
  "key8": "WJvzSbNxBzq7JyDMb8ftQ6B3KXEXE2GdEyfCW55dTyxZQAzUiW382GRDFNgbMFF7MBhXXeWJUY3zLogaHfhXWqq",
  "key9": "QgzoeXqL5VPHUXG2mKzhiVyoHGTmtaeZZcZ6FNz6HDgfA7qk9aM2C3LnvHGEWnEXVE1KpuWkshxE6BfKw1fBzWH",
  "key10": "3Fy7ZWooTxLgcFXhHmKXcAMFHGPkpPdJRh8b3ZweYt4JU9okTnmB6wkUakhWSMjeEZzGKKQ7MWNDw6RibEiPqKCR",
  "key11": "3dtSQ7ZZc8R5dqC4nymoBNc7xi7DbNHtwk7vSkFCXevXTVhSqY253jEgyso4WGp7y7Nwu8nfYU5oqZWcun62hHVC",
  "key12": "5dBiWaLoEUDHpaZTLes4kMbWtvVYgK3QzbGoVNfZ9CiDyPqX9joU8ckTMfZDsxPmX13heX1gYskvEgMqDZE9Q8jk",
  "key13": "4jLxfz7cLz1u2ppJCzBEeZiuoQTfHBcifumgQrrMxzHVLXgJX8YKpCCbsEFk52MEgNUuUF5DFMnPrMA4WxQQKyFu",
  "key14": "31tNGKLyd2o65GXmt7xiEcGyK2W6eoxNyZiHqr9ppi4pPtPCQD468hAeVZSphCy94MNhosopg4xuXKySq5hCGbcX",
  "key15": "4j1Njm2bHHhv3z3Faxr21ETTaMEh6Zm91EmFKjuhagwiLW2HMc4wFLYmr6fU5hTVe6d17hCoEFPPVUhAcSFj7VDq",
  "key16": "z71Ek1zWkah6uJ4fKN7Gf5j8VAtJuDtwUb94xfZkt5iLvURrym8w3MaC6fiQXbu2Lq42qLEzGjcCnEgfSb4BKu6",
  "key17": "4THibtSW4cBXRcY4kjdaz1neuBF34vcmdhJpd9mNou6a4u8icLhnzDWdbjokhGfDKmPUvP9shETYYeE49oxrPQDh",
  "key18": "3SjMa9LtxTwrztQCJ6GQ3Ag7DcBBThNMysTKwbKKF1HDwSE7XrFDr3bcbscHkmm158sxkpBngh9GsbWY23LkJDKm",
  "key19": "4xt4UqKef5zb1q2yrZ46xVcsarZXKTc4NP6WRjtUaryg8rjvgq2d6RaA4JAANAtJhaj3DsLKHoGFMEF584V4TYms",
  "key20": "3rb3mR6fPDSRLb7Tmiyp43tAgYnbFxpHBsrSmPaGVqYdvKcKn5zeuqMMHZxjReyu9jUyh5UwzwZBvkGR8wuh8gH5",
  "key21": "4PhuL13F6ZB6vYykFvgshoHic1yiShkhJfaiEmVtNNATU6BFfuiB8x3mE9xBS3vAracnPFxorD7iVYemwcBVbmWh",
  "key22": "3CewFyKcqrbXSh5QSdDgznkijXEKX35vZXK6SpEeKFMkEMnvZ8po96mx9WUqLqfkYkJTYCLZi2Sm3qT5tc45M6U3",
  "key23": "c1S8KsYRtYjvN6pzvakWJQfe7Z7Tu5ize8ujHBzjjQVkycVupJArysaZm8sZunTuYhpccxezkHFzsZf5Lxh5ZL6",
  "key24": "2FeNmrQpbYu15AFzwevtR41QUeSm3YFea4w8c6jFqjwhR9T5goxmABrg2irHHdKmiZporUzrNNZZGN6nTyT5kJxB",
  "key25": "64CpxFjGGZNDhZsjFkQ9KfCFiK7uGBXrap8cjA1b5s61FK7q9kEC5iDvHBwbY3ijpdeqQQtD1bKcrFR6fvcoVU9P",
  "key26": "2bXwFUCKE5UicikXHCj9b6WwrXswsd1FyUY6g9UJr2noQGEfGaAH6vtdGyyqZDQ2rRxdZPJAozESKxVtsN5pKaqu",
  "key27": "2Nc9f8UjbtFkPfD8WH1o9uLyU7EYic7wWcAQVvig6EX9GCenLpPKGCkyCmrJT1d1DnDnU2JXkYZQeXUDsEvnyVu1",
  "key28": "wTjmS6m9SM8Wv5vTEf1krx7ApHbno2CsDiFU8D41p1exJtetupDGkD7ZC6YmVAqpve4HSPJ3LZoSCg4GQVBP8je",
  "key29": "2mH8FcZncgCtax6LjzBcNtFm7XPn2JzDzLRn4ubtWRYaqL8mYSKVXxQeKuk9AEvH3dEQbtNB99ad5ghf4az6UVhb",
  "key30": "31pUXUAzrH2ojb1w4MCpLFPskgCM9RoTH1KSbXmnukQ2NaGVm69hiWaTMPPNn7u65FTCXEhJYhoEZHYuiQwBNpQv",
  "key31": "5Lm3Mm63BS6K9mUAei8WCcrbKtoN5My72pfKNP5a62DzFsvhUeg9WVZyjeo2zXCXv4sgANJGgz5TAzoJixAk9EVM",
  "key32": "5JQkFBmpV7KNgTQgqwZy1TnSCJLJ3LQvkhb6JFJ4NRvYN53dtVZvSQGfw8hSAnwiXTj2eV5rmUvaA5oxbnDRoS15"
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
