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
    "4rT3PveBZgybGAuuFLazjR1cUDTM9t3ja9ZnTotfqZzgjNfqSHdsQ5wLMqVHY1nF8sY1DaZVDvW2ssp6yBrifGsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3ihHuM4W7Yx5te84WEdK48ve2BYfdZj8G2EBnRaGrLhFXi9zyGbLugBAF6Hk18tJAEtPwSUCeSpbpEfuH4Jgt5",
  "key1": "4g7dmFpTgRzc3HGkUGcQLM7mLduRfDioYLK1aWihraQaqQxhqpAvKhmXFdaeHsDiRxXDTzGuVtx5NC8fmczxBFLm",
  "key2": "3ZtYyTLxZR9KQsa6DAFRNGaJGwjRFVdFcCxdk9xYSywwafxGSYgnhtuEm9a24EXMakUqD5VSpNJttPWmy1GiJ9U3",
  "key3": "3UsYn83pJwBvZZAsxvxveQeatmxCL1d2qJZnXAydxc2Sb6FYAaKWMza9dtjre67UTxzBtX4UZraf4y6AicQnM18k",
  "key4": "5ZMqzJoiumW1FKmBo9J7pmq7EMgvwnBeYz7MvP7ww2pWUbC5PxUHuWHiwCg8EoYH2ecL8zaYRnR1HtcYotVbTRqr",
  "key5": "2NCyzX7mPRN6wcdU1bzEfNhZUeJmXguZnpP7TiRUpUENkccjw823n5FDyhqaJ1XFAX4CbVLQ2Ne3bxiX9xJPSSw4",
  "key6": "27z8xbRK5qPm5j46oKTbTxkbW5Uzb8v1EvV99DPivVucqcfk6NXynsGcB7xvCpVGhi1pG3AJStnG7RLg22UZuyF8",
  "key7": "5hFn5HpKp1SQwYx5Q8YS33JHLYD1S7uRfbdQ6JwbzGLuBf4uqanz4CMDUK5AWGnxDQ8jvf5Xf5uY1R4zpUq2zsBB",
  "key8": "4oJPVK1gyzhpWqTuR4H21C2KGqjMaKukwJ6HxQJ5cJbgXGLAGkzGjMLXCvsAeHbZRJGhiP1c6G1nQdP47GzMxS45",
  "key9": "35S9tNL4WKVgLqBgdSzGjeuWxe73aXzUi8GybbRHY2vbnn1kQ2mCvQrvPu83PrtZ67PjWdawciEXrZQGZ1JuifV8",
  "key10": "8PyQM5zFpyVzqvLEjthBNJV3Dj663ACXbnu5hN8BiisEMEPJNrf7s7mdjo78wzHAofwMTzMyDWpb3Dj1aSYN9Gg",
  "key11": "2ky9ZbZ1Ri79KBFCx4ADLZC36fLFfhzDg8xbTCz6fGgYsw1kTeCatKM7b51pGrpFQccsR9BU7LnpR2rupYWHYh6M",
  "key12": "3J2Apv4XC5eM5KdSHafcGYjd2mun2yj3G3r1yr5VWKkUeRPSaNrKt5bpUGJ82EfxfWsy1E3gitmnnU6sF8EBqEYk",
  "key13": "49sTSD5FTcstKfukYht9Pcm5ovbbZ2uisGkALWfZzrzSRHyPw74WfwrWRqHgs9DozxBThFRt6LCAQSquejn6nmZh",
  "key14": "2ZYJHsTB2uaDmciacdRazA1TRq2phMfbXicuGVojxmMe7JSyYNL8SPGMMT9Q4qT5gmz2Fqs6cWLHPKHKLVNSCg9s",
  "key15": "4DfG95VgpNRFURfZKcBLGwVXxCEGRn3i9CYBwQfewS8pPfwtdgf6yntsnXr9AssNSgd7YSPEA6JeTRvWUaRmbnR7",
  "key16": "Y2HZWbemaCUrmAeNHonnk3VBQUr7VS3nnYhXAAVnqpYfEpeiFi4r2NeXCxDjW4d95vTN8WtXQuwJWi9DzWtUvr8",
  "key17": "Thb59WuvXEn8RiLifyeCS7j6CgLcbcrfg2k4SQ58Lrp3X21n6VVrEoxmEpZLFkL7eE2UEtEinDNLpc82Qz19FYV",
  "key18": "59fBr4vv7CfdS7cs1RvCZYMmavzy3C9FzU6eayGCyhf9MZP22aZiaQT5xa8k1DXUHvFxxDRWothFEYcnBFzLKNMu",
  "key19": "34ZActpRxBFEAzewxo38QL33WMuGVEED2swH4VEXesf6UwuRWjfvzfpGhx3AAV3UoZEAmMqDMtq7UUDK1A4UCHjp",
  "key20": "2cVShFB9hBJFqusjigTt2w5BM2h4WSqsu4cAhBrMT4pnXjtdBjpEmqHiJ6n9y2W9KeM2KNyYnzhJT26PMnXoW1Gq",
  "key21": "5sm4joeiDsmZsNGA4iYC2chMiPpJPa2fU6NM4QbUvYdZDcTjAWw91514eU2bUUNEqZkNcyk5HLRstC7cZT7ofgTu",
  "key22": "2DPQ1L79aGubZCYiKnGHQ3jySRy6ph6zKjg8zXeC2TbqnXfVbFns5ycgtVa2CS4HS3zeVsnby3FnXmY59yFzx2gg",
  "key23": "2quSSHvkJy9UD95ATKEjvmHdShXdggjT3iyu42e1TDDTC5BfDrsLnEsPpqrgw2ZPRkJgiRRsfpzLjxHCXaS5kgqY",
  "key24": "w5z87DbyfxXDsP3y2mNhhftCodpe8gBWfVpJKZXnKD3DmumvyrWtuj184fef6uCpPoCkoN7KYrNxv6FoBMmqhTu",
  "key25": "4HQ2SG5fdrRSFijPJtJAc9FUHvMq9aTA5APYGapYBba4kWRt792uzXX9QDWazXh34Qu2FZcT9UZYNcEJZyX4CSDo",
  "key26": "3aFENaTELsjKrmb8oFrL2RsiPsFbSkeG1UyQMQxwenuhNGUM4dNLCLjYujs1TWmLBvfZvBiMjh8yvfBVmpnyBt3h",
  "key27": "4NcJAFiBBEMzcGFMZqAX25CBZUcTH1gZ7c1Y8NQPZ6P4HBcFkUbwFXtJyXGNEhVjDTTWFQrKCnqftAv1ZethahoK"
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
