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
    "5MQhfukK7NAxGJFfuuYPCVXuTVJauB3hyiGWzUjWTRkRSA5GAhD7wjSBnDX737BbuzUFdjeJmmicAdhjPZqVXqgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpBBqnSEfQhX8xpsEfefP9Bsiqook4QEQcmSLBbJwP9hFzy3qoXUxJcX8VXk2sYXkzMyGR1BvyH6Qkw5896uUh6",
  "key1": "5u8imDiEfu3hdTGLpXjCmQvREcZQCLQ135nNjjUYiKmrE7LbTtVM3mBxL4AJUin2ZvwcAfBPX3fovgkAPHsgqeQ4",
  "key2": "633Zsv6HxgwmYdEEFw6QCyarsH7neUDV7Gzh6kwv5dYKFREpJYSupJpsnqmXQX7B4UCehmeTBubcENB1ypVtLDPq",
  "key3": "4eY8mCEbzqbMwbdJG8qNbUQWmnGs6bQ7F6Hoei6V7qSuQ2saeunahgdH32yJRxmkQ6tWLU6UgXFk1NAn6wFKEZfP",
  "key4": "3xYdVAMtC5bHn52brD9zTpYXg2PCpmBf9QrWKvYAm82JKBhvtsXJsZX6AyVsyjx7pHFRH4XjxEMSn5ey1a1FqiDq",
  "key5": "Nj3CTuL27QuuGYtyAb4NoFmpFJs4cRUzZiCpYwGVXRRwGruqACnSc6JSfDoopcWTXdnCfnfiEkMz9Xndcs92PRa",
  "key6": "2wS9Hb7pN9NCHvjkbPjDHcuZQgp6sWgpNL9koQ5Ki5vVeGtp9oZ4YsHUWtBac7bmtQnj9pepd9NPdmyoqZPKXCn9",
  "key7": "45SfxL2odMh5THHRVPeSfuUriF1ZVexXpQCFY1RoQEKPULuPYzDqBvH5GeVFx3HLCpLaRKHsEofMePXfFiRGALQw",
  "key8": "kjhcr42SHMATJvG4BExBLCHvKKTQYHi7Jv2GwrtvP7RocW1GgHTmwNApWw9zeV3sXzuKdgU1USosn9RxXFfuAQX",
  "key9": "y9Mhepu8ARXZNTzdZ9MjSUhKHSqGefP36Kig5JJnn8LNSK43Ri6Wimb8L5Womdkt3CUBUifFd5ipPjX2vu7odUJ",
  "key10": "3GVjUS2uFRrEk9yW2wopQZVzezhsora9Awgk8E7pdYvbpb1rhTiQjtuSmzP1eTTyWEPZPmS8g55388oQHMTYfPyh",
  "key11": "2BZhAB4bv8ZL23LJoemRakCqFV47oRrHRQj63CvcwDVzV6wfYr7P6aSVhP1FwgY216okSqzFZbu2D9bFdHK1fZ1p",
  "key12": "5C8uzcxLv9kzv7PATLftFSJX15KmffDGfE4jLbPfHpVefWoGWKn8xmR4sKTqgpZwC5s6r16XzugbhTeqzQRuvPcW",
  "key13": "4TzdUfYit8AhWQrCcU4e3iMvTD48NVkXTyPhznVRkvJzsLQyeZLVGaP8WzZvn3ZtupGeTA5RH8kMdD1GY5MVWv6j",
  "key14": "3GfWfjEFxVKRQxijsxehxSZfvbz4xzYWDKHGEgZqudycbE9878qsg7bcS9HanZ2r7Dg2bcxLQPsfvX2znBEr8QU5",
  "key15": "5aCNsV2CjNeW3TnKZ97PVvmCAyfT3akZXbAmnAf6Z65Bv53WFGKPrQ8wB27xkpz6zZaSc7PYNMcR9AWuSgSqpdJy",
  "key16": "459afdTAyuRStg1SaZGRqi7dNcuZZxEQzh5HxoA36ZPmopZWFsPYphfxEuKSQPwpxFZ7RSSBj1L3ZTCVAVfLK13F",
  "key17": "5Y7Bu6DVV9QWhRczob5d5bSdpShiVCmXt9YppPfBn9FL4n4k6dcyTiYYzBe5FNn2EauGTZS3UC8XQYktdHcBwddp",
  "key18": "3A8NkMNjQQwWf3g7Kk6amFwquSx4ywoLHdb5mePqRAa8mCczoZPYzQUDyPeU3mctBg8dDk3U43ogk9NkXVYBa7Kg",
  "key19": "5T9AWqMXGvRqkyuFBEYMNGegSj1LnZrQMuCHd14weYKcUZie7aUiN9mS2kJ84VGZMqSCXwZgzxgcBxxxw32VvcUP",
  "key20": "24xEBYfwmYhTWrvpgfUAGGxNbRzth5NCVS9G9g1b4jvJs4aCEXgr9ixD4BaNs1vm2FzQ3p8LDCBrzdMLPqTHJCBs",
  "key21": "3uzghwoEEyFawEZDiWqnAPQSmMDQQn3ghxN7cFennvt8tJJ8aQFYPR6HbKcoKxhwFeDh1EpW4TJZPWys1QVa5ftY",
  "key22": "3ArEBgenveEUxJPiKicxr12vgvui1oSTiBdByMceFvmForjA2umLoQdopGzHNQ9J5ZrtsW6yUisxhwJyCQ3AernX",
  "key23": "sKaGpd9wfDEtn9mMGarDcRHn5Ea4ps7xfepxCY5X3UcDTYGjuvApmKuqk8TNGFXTB1nQUevRwqaqKChqFKVtQ5M",
  "key24": "5aP7BS9SHkAwzJWzXiz4StvrqGNTjVeZKAgDVkKcK6JAcdGdwubokizF9tka2VJqybrH1SzQkNRUWwHFRyc6gdot",
  "key25": "Yw3zK8hR99yMQdwnXshnBTHrCzVZ6Neq1bPQqdafn8vDgwxV3obDc28UPKa4DQux8r52VeNQFLQkYtQ92FFUsuA",
  "key26": "jufCtb8n7BbERLiFxSm7rFVg7Q2KURHXEYpgwGLWH6qEPUWdDKCRmo8fGgxbqjF1j3WXXqJZcHFBKqE48hJYenx",
  "key27": "5yroLGEt8gPpPACrzJAAhssA8wZeFyjMQPBijSqzDsiam55SszKbpQb8oAYNFrxLQncBymGjiB7pd4mCBJPjDGqa",
  "key28": "47Ux5YJ9FWaFs1jrHrzVA7CWLktjiC6ziqPX6rKwVBi3TsA2Cxq1nexeweuygSTzB85TfPA22bZsS8rQBhtast3Z",
  "key29": "37erhQCAx5f2G2b69Eb2m8N7wEHuqCbPKwt9iXHaEEYAPAQfeDyntpxGiF7SHFPCbX81waDj9Q6SvodmDhPMWcgb",
  "key30": "2jTwDWWNWo2BrZ6AqpsH2Kb3jxKhSVjz3sBstnfkcAQLHLms67GpnQc7wdVz7aXdhmkiKi2dPxfQP9WmqHDRE1rM",
  "key31": "E3VL58UFp9YkHyC5L5VkK8snb3FA71oEU2QE4BW5bqk1f9eZRcuJVcn5bzhUbU2QMMNTVrYK2qfHevEvMXW8DiW",
  "key32": "4WnYP5DQ9XkrWikA5S6RLYd6LcWSV6S2ucU4vBQUD71x8NkLwYPGr3emHjfDbEUoEaPT1fBnA65vGfGnPAzaNRQ7",
  "key33": "5YYzMuWA2M6UtjbQ741RJWehCaanxqEuJseVbpsosazatsDqAX3CfynTPsQ9tMdP21hgZuDFWVV23VaRUrgyNCH1",
  "key34": "3Aapd32w1EdswVHhe5tU4oBSUSDEhJmGX31KTPg2ksJk2ZHpWnCBku343kEyBseAy51jMBixhyggDMsC47qzSnfy",
  "key35": "2XXPQmuEK1sNk8frETxoK1CNF8nY2iFRuuYVbsqQsfjNb6WSGB5JXjdPj8FmMNF4YFMdbstCNHyqkBLBEp2vayF8",
  "key36": "3EyB1m3rk8ZfPpuaTiWphM16FVnx6JkwMMYzuWL2FP23JSAY2TGiY3yqprjwpSwzmXHfa1pi8CdSm1CJH2dV1WoF",
  "key37": "64anBUYrM1h6dzBAJCPZF4W3wBkj5JNkTxifVcjB3Tyw6CdPvxVN88P5oMS7DK7hbtbFzAcnM9726DMyut63dY4S",
  "key38": "3F59TYxWQXXh9C8MYdUJpBtUwPJBoREkGNeSYWVbq3j58LgkG5r6NJrG6zFwiKfTo8P19Y3ptMUSqAQuRUSmdtDf",
  "key39": "29vQRbZYYgQvdrPecL7pVgAKz2J36nwNns3oAiT73doVj2nnLYdNBrLswo6ZZXGjBuwLyaRhiz9YkCDWviYFR2f7",
  "key40": "3U7D65CUdMcbAZWkJaYEfLpyAKL6FeShjUUEfDSx2nMnjTHLvKxTyrygMJ8UHa8MsrUJgDVdBoHLApxYHSEtGE8L",
  "key41": "4Dc5RJHrXxLFVZF4ySenR3MvVjHKJMPeicV9zmERx6tn6aUSksvbVTQMgDwFYEC51gTU77toe1bJr5aEHwuxUy96",
  "key42": "3MydNc1xnU6UVTvJkHrn8dcudGcc1fypJfTHPhMh98UJ8eozfSXZSKfeyw1WDPtipWjMSRyrncQXiuAXKDbHfBEM",
  "key43": "2LT6FfrykFGV7eTstFbyeyie1GW3vb5k23YdDkLYULGExgx5hqg3jmEoNihNfgsB13GkYNgvXwRSo8Dwsn4E6jXk",
  "key44": "5P8S1sPbzgiDK5g1rbZ2zUHnXdH7tBZvrEgjqJFcxhGdEk9ZHggadWXLpbDh46KX34n5RrR3vBcXznMdwTdd6Zyg",
  "key45": "2EUKzJgrPqax89JUTTtXkN1Gg5BZXcLwfWm2nYEkMSYxmB1XLsUbHxGDb11yGo7dCQE99VpBSZbUypuUdAmVH16Z",
  "key46": "3yhPLZaMPfiZEhsev2MwbsYRraNzQfNshDkwwzpmLtxn6TbsQGtjRLPzw4iUTCYbGartC7UDQBHeAUSyANk8PgM7",
  "key47": "2HamrsCMb1RqxGZt8LrUpom8uP4cZr9VDVLyKpXL1aPU3uFvpJUrmmuzny3sHt4f29CWvGdL4XdAhmx7WGY44waj"
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
