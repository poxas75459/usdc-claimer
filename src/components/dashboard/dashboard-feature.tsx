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
    "2MPJWDr8A73z2zjmgwWGbzU6ssKi35zU4FH7PUs37EVumiqEnvShFL24HLmkG24XKypVu9MUg24vdxTYgb5x2AGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCMpP6PTLDckR3HGVgfPwKMjkArhNjShk3T5yKZPbMfuM4p9FrHMqH87DyffvRf9yB5gtsL937i4vxf6FyJgxs2",
  "key1": "2hjfsYDX41HBmc2AoNB3EMRpWFZxuB6UMvY3X599qVYhatZ59kXruqbFDupQBj7ri1xTDGS1HtBmyypmuymNRUUN",
  "key2": "5i7zGqt3GKvtLXf4cWUmG3DkLui6eX3Mxuxm7sKZDvCNzvyETCjypBS6pd1zam8RSpHDWeV7CRDq8nqTH7p8stAx",
  "key3": "wws7eh5uQF6pcCB4PpqmASgyeJP68FfgRUPYDsaNJ7kgxdvq5Pi93kCuM83H7raQwqru2szUMBWaTzvB4CzFxfF",
  "key4": "4wR9EohwQey9DKzHaHK21oTJso2u7TGTHN6Ju2Uov3xrxq7bfkysVThEJv7gZvMqW2ARNmizfNp7z47ccHKYHbgF",
  "key5": "Q2JnzDLw1mFdjiuCWN6bdRt3wtZGRVe5TvDQLFrm56jpqQ5rshMSSHkGEfr3NQhgjTqNVJvaFpQhAkt5ZLJATkC",
  "key6": "5bTNtnAqfXhEB11Cn3HvSrh8VPWmpNh6keQRXy1x4Sz7zNGFmBi4gd2JVKZiY2PYwqPe8Zt2Gfjv8cc26tiDrZLu",
  "key7": "R7DKWnwggRhjHUekH9byCAdn3xGLb4YbmUA5qEhBh6VJLAx8ZyEwUs6uxX5i2XfxqiedRjdgbwDJeTXgKA9T2L8",
  "key8": "5tnfHd5tF2gjEhBaepypjuDmLG45Q6mPvSu85ga3ptXh6dvhaSHqCC2MhUAyQnRiNKganrXXNkmgsTq6sEXN6wxg",
  "key9": "5MBryNnwvA6CStkTCk6qaDZjR1GhLRiZbgi7crKVY6hJyGfhZS9EsH5prRxkYiJAhEE7ADd5kAqQ4DzxdSewRBjJ",
  "key10": "j9CPovG57tCmBribw5CGWSGsLxGJPpL2MZyxCxtPAfrfeGbPHq6cykudqwfoooo75HwfmDL4ERV3osTv86h137V",
  "key11": "3XrQbgLs8gX2gMcFuKmz6UKxqBeqhbY2fNrGCnUZZaa3DxBRpjdVHYho4F4En22dmVAXG8dQqrjKRKG8QR16BVB4",
  "key12": "5SWpFk5mLrnvfFSrcf4f8g9D5eMV56J4xUUtzHW9opymobZHaU2aCqTNq8diQsTLVoaeFwHysjoikbNh8bFDcty8",
  "key13": "5ddgLXqeCqcbNbV7qWGDEHCZCF1TRv8iss8HoV7TsaEwWswSyAYxhpMfvQX7ZxKBvtNTEz6wzqcD2m8XQFwWdd29",
  "key14": "5M2jUsoxA8vGW1zfqe6fRZCficwLy4JhEezWVmsojg1mAWRgDP6cYJWnRMMRMgryssPKsakQsQvXtu2gHUi3quEy",
  "key15": "64uazHDCzBRGYmizNjCJ7QV2DmpLgVriFMv73MCvAX4kpKHE6cXsX5NfS2iWAWf7iEWHFT7L3CMWWr7a3D52AVM9",
  "key16": "3tZFT49xBhq8FfaS6EpNhJQxDUseCvhCk2GosehNoB1NgZcfRyBXgQPaP1LpHBmkUmZzyeh4Zg68ycuEh5PpxFSS",
  "key17": "5kt5UFT785jetaA9xvuDmzmT7vxEr5W7nsMJ3bqgeZn1N38bCR6pkEhfF12GPj4gqFpEBvrWe74uaQ55695Lxf4Z",
  "key18": "4jtpxBLAEasRUtV9LaseiWbPks3dHpi1GRcyeAR1NRFfmpsSzqeggXJT53wwFhqZxH2F6zaMTkt165tBfp1UF2Gr",
  "key19": "2FpRALmS4uyXm4ZyJPeXcsJCQabtcL5ZkD1qa2dR3fiM5YX4hUV79yqLujhhL5FabfjnLjxj13kt3sNYWbF5EZqZ",
  "key20": "2ECk4oAqbnuACqz3WweydXDHxkqoEgJdMkPsSLH3y5kK53yGqxoSuvYkpnnqtW81auGRyVYquTJUrz4QcqQ7zA38",
  "key21": "4mB1vXhK6n4N4w6nS9ZYhKPdoKRQZxq45vrSfHMCQeR3R2QLxGhpjBbBhWPJhi2RH4vdReXMigaJ47b97xgrpMRP",
  "key22": "4YKVLWgjpUMHwfoZGLZ1i6CxsAnpK4qGQr1encZXQRD6qNQjexoZVVnd2LnucWgEwqmTnDELT4FvXYoyH5K9UPdX",
  "key23": "4CxR3HVreFH2n2ouL13aKVyFPJvtULDQAxHy4LcQxg2U1ds2X1629BX7eQzpqBkqcrCGqkjkwNQZSGC9hxA3ELvb",
  "key24": "22sTvRLzyTEQMhD5TFdzb7KBdGfJ2g4bo9grNYYLEpjZT8dewSvqd1AetEhD7Za2r9VaUUUw8ytDU7xei7B6VBCw",
  "key25": "pQcKHUnjbiz1bkkrwioQ7QhPaKdhLZA5bF3552rcieD92vtvHeeugKGentvmNc8toWJs1sziQ5qZinz2wja42W5",
  "key26": "3MYQ2jD7myCSoFp5pAy3T5HyDRKiCZJ5LRYszLvhEqsqRY1hyzXeNv4314848F9REEkmUGgiZ4i6FMW4KD7AQzRd",
  "key27": "kZm99LDYVVUFppKVWbeEac1zpxqMrLuWorBZ4pJB6ppcnwccQqhXLSh2DibhWo841D3TdMAVNfX6Cb6ow6o1LCv",
  "key28": "2EoJnYcFpm7GXbPEExEaGBjaXkPyVf1DVQ5yvxgQZxfhUaZS3Zcp9a9ooGQaU3xsQrNbR3a6sePcm9iiedD4qx8A",
  "key29": "4XL1i593jVKsjtYKtNVTuVCkjysC6AjAsCz7kvdReNV9QKff8qmegD7vkBfjwGgna9BDNTzmoAXdTgPp5Efc6TyJ",
  "key30": "VyXoYjNNjFH9YQHQhMF9TcLt63b5jPGWaCtkb1DaKuqYmTcKxZ7nQS8eJmsDz5bZkY1E7y4cdBgxautDZ9tWRN1",
  "key31": "3Y65J8Bn2CfNEiRpyjt54Wrh2QyHsCAWvbdtyxxqQd1J5Vn5r4xrQqW6SVp3XicEdVT2d1CdN4GmRYhXiTc6K5Z9",
  "key32": "4yrmgzAQeuFNFjqRV4Q197ZuCLFkZLsbSGXvcmaQZjLvXpxcv5dCKhrxRB2Sc6mdji8tUXemXH4eKfzLkQmL7687",
  "key33": "5c4KmCxu39aBaGoAbf5sTeK8a7f6YGZbX4U7B1j4Ufn7wcv2PwMGsFYbp7wPDTieb6UYbP8SHfDXsqKGLfUKRVZX",
  "key34": "5N7ZZY6TfBC8jj9YRjEHgpEZU9BuS5cgyQT7p1reMA2iLwE2NX67oB3epzZFMaQGL9euNNLZFsAK5naNNa7Vseif",
  "key35": "57YAcHmYPdMXebbPx183DZ5N2Wz6NWzdCMRquAAiEi7HSsmHLaJzgw1dgRiGctrcJipWrLvWfA9FKaU5sU2cg3cu",
  "key36": "4Wn22t3xBKJnCakPFXEXWu3n6B6aBRnqd4bURaVsE5kW9r6rh8SWP8grzo4yLsWeDLaMjoQLqt9Pa6bcvMJ7Ytps",
  "key37": "oiB9Wzsn6DhNqAsQgGiuxafdj2UeUetXiSeVmf61xaX9rMZNQLMez6ZNQWvUQYYF1VrF1umWn64pb7rAMQiQUgw",
  "key38": "5q9KYvmxs7Gwe2wmhYkvwHgRapEFXAGkq4ZzFfzqKcPJbxrxjgcBEac6jhSBxUWmku1XaV1mknCoNTEzPuMSHC4b",
  "key39": "2AgipBiGrnhhV7yLJwEB8XPzrsMWGG5mnevk5SeP4BYBtwctD2qjAEM14fM8AQsSy3GCBWHZ67FZaymhxdXq4HeG",
  "key40": "5xm7TJ5BXbinWJe76uokYB1sW3a5Fpip8V6eHRDj9Ju7BxiiDK7DfqwcwAvZs7bGdJgS3joDyG5oCe3wJNDD5bAh",
  "key41": "BjJyFm7RNx5nZCQFCQvFghCxffCK9gsADjv2ehK59f39iXDfanWzePoJGG3M4VppiaMcLkvXkLbZtDGKewobM8V",
  "key42": "4Rk6Q4Nu8Si6aeTBu5zRxhtKE797NatizVDG6LDPaVNw2oh58Nq7YRjMRXYznQpJjTqFZY3jZn3RrP22vFpSuwWC",
  "key43": "JiM1Rsp6GYLLjfvnyD1PffxTcjBa8gnGTmSuEVH81QBNNgBWnjfKaoqrDR32xttJp3xsz49QPaACZyCudfptcg5",
  "key44": "2T1JXnB12seY4jRXgK8Wg1d8Jyc7msuXbcxS5zsDZXgVAswhbbMU1Kj3Uz6nGKPyu33Y7YE7N6ciQ4vd6KoXihLV",
  "key45": "448FSU8x6zL9a3JZgJPqG1kgBbv1UPX4pcJHooYeo9XAEf5r8RBzxAKyD6vJyWvJcFNWvceCCE3vR6kyGk6BRAHA"
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
