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
    "26mwg5SQSnHumzLgvRRxUj9LrUAKehQjQPgfQaffpHRkKMabF8Pb6AUKZLMEqVV7WiDbBsVCLDynpQTJj3ytbrxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KB9CQ3w7LjgAw14aeRQ14KufPCdsBSei3qf8WkrwxtfiLuhcWNHaqu373DYbxzthDK9SzVD95k8q7Cy841EhDPy",
  "key1": "2GMCGbo8frxsAaLyCVL3QJi1myLggxWFswmF3CHeRMqbYKKecYuLXearY8Ptq4FkvNVn1hLsA6N5mXCaY2maBrWs",
  "key2": "2jjpuNJNzRgzWmpEy1ypvpGt8EWEqvyjWy18U2o9xfNGLf3NbTqNt5bpebyfpHMtU2ekSnmh3jomnwiuBNzTgB4m",
  "key3": "4P5CAxoSRdmNkQMK9bFDQUSDFZBxUT6ywiGrVbLjUFRHDHdcyYxU6GK4PfXeCM483w2Whr8reVu97LKLDGrtWxct",
  "key4": "GCFasgRmqQVenff5tTj5bQfL5qocgEm93R4PH9M7cDEwnJtPTeXPuY7RUA53K3uP5Br2sVHDy7EwQSvyd7Yy9DC",
  "key5": "gz6KnMZrdc27MDKmdoxAKFZro3Sy8fqvpoAiyg9E1BhysWPeJ9vqxehVoWZZ7f4T4KdeHo5Fvpw4wGBcX5jdQFV",
  "key6": "fh5Psg6KBY2kDn9Jb8aXoJunRJfVxT1AcdCkaF8va8Jcmv1BG3WqjuyXS8F7dwn9UQrL2o9cegS7b7sqs3QDQo3",
  "key7": "4BUyPA8eVbJejsxzTeegvZLZxmXR7TMNenGV6T7HYYLCZ3MoenCQep93cW7KscMRK5jLaSSViMbWhTbf8Rp75Khn",
  "key8": "3biSMkTAox2gn8DT29VFZYuBiCqVhAZ5RENDtZoGi7Z7LVBZz8q7zyQUsfSvpVM1xcvX4gfnxUy4BQoh4hsHkSA7",
  "key9": "3pv8t6xkCSwJzBhJ6bYwSmqUD7kmrDpPhw7m4zaSQVDxRwEDG21zU1oQv7nBUjTcr5gsdQvYAs3k6CWSMWprYeLh",
  "key10": "5mQkQHepbL9r4KiPNtMDH91Ahjvh6jWoWtBmqbPDHE9SYjqvZxJM9qWkgHdsgKkq2GkRFVEQCRYY8fCTuV8pjkxr",
  "key11": "5D2rTExjtvvgWrjUpv6WkV51kEKJRLpgwD3cdpZ8NM5husx7fNNxQr5viDJ5wJ1fhkKd5W8Efquv1omHJrapaiei",
  "key12": "2LN2H9dYthR9s7h76qsPfhXzGzCX1bydGMuTtcLnuCBiHttGaQXr9fMASiVWBhRJ9QDJ7gKaVncwchNufK6uZt9e",
  "key13": "3EboPVxFZHUvTHoQsH47pgJur2Wk5ZyrbxjExyUS7K2y1CAcF35ACGgcLchvWRQAbaX3eWovaL9mUZYnmMfvzQVg",
  "key14": "3cKh69sob4kNfCx9bygv3a63VnmFzX2QjFP85wPvjoEgDpTmRPapmU6HBH4oVrHvf2NJCe5ZdyLBF4k1VVs2JTKZ",
  "key15": "5QVXP8WWjtpjzG5Dxno8iAvLde9H3caSPEFuDDAdfWaQzimLjobfutd7aTYEMweVgoNDyMy2aCn2veAVwnkBA4vk",
  "key16": "4AEV3E9tatnv9Jwfu7YWgh4pcAvb2bv794hMbJb5X1n3kkp7tr2svE62hhfZ5qRRrUKpRvGhwK64xnvBhqcjCbe3",
  "key17": "3wyj2R4VD1LT6gTsnF2RA4NW5pzuyKtz3X5REQiK6kmeAMSwpVMe3xNp9eVdmu68HbFtFEmumnox8WjeUvmrcEWX",
  "key18": "4f4r9CxrWXf6tVLMqt9ic7qwoPh1onqvCS623k628gak6rGwv5nJMFuWaA2UtNGE2ykeRrLzhiouktoax7jBBqrG",
  "key19": "7VBkswZeheHj2Yc5msT7qvdBoTMbJeFYbh9sB7Z47eV7ooU8e8PVq8C5sYibbfNEs9ionHS2xNNGu2pMKFbsr2C",
  "key20": "LSLnzYziQ3pjqbbetd9gagYBxHMRCPwdy8P6oTnssjjP81p3e2uVJjVMvTJ2qhQEFekwDmhem3UgtNFgfxNfZoB",
  "key21": "xBr2Ph3fVUz7xVo6sDMnjEX4PzwSquMTZDcoF9VjskVxEBVjTB73d4rXmsUE7M96tSjW19TKPq67hEQmmxBB85N",
  "key22": "2ZKTUU6mS8Grf7R41gwHR77SGiKo5PkQvfLWxdNKSG5hubDzGX2XfA86jArpPKyu7wdtarY8aLCJMKLFfuYFWLxx",
  "key23": "4SAoUvtMvgbLwuHTLYNQteCbHBL5tS6sL3ZC6QTHiEcS5uHU1wvJy3YkG61HKeMNB9LRtc3fz2Jc1gHjFHsDrBAH",
  "key24": "4fT5bgkf1BKXY3puG9Hn9mibcmparrZCE76w7QDJ6fL9w4FUYhkLkxsNTYi3w6cy12XxmsicymJctTTmf2aMZ91G",
  "key25": "3pY1A27SzJDfiCNCBi5WTN7RjWjMrsp8aCeWdeVaw3AQVR3ZdTyNCEdZns6TrhWczM4cuQ9wGY5zQYQXvzKVCtc3",
  "key26": "4tuStFKME5Yxcu5f3Ywt4ycs86gFrFxgun4fqX1egVPEmokjYGx33N9iRpRGfaLvdRaxMiqqEnNuGkxGR2hGxErk",
  "key27": "LrmfRbchY15po7FPUsaK8joPc2gTwGsPg8ARfSmgHiptL6ER1jsEDBbTEffK4h2a7MY61sR6WKvxVracf3uWfxe",
  "key28": "2aqY8r7RLJ19CJhrHHYHueEa3tTyHEMCs4CsF4t4SHY5oRpgS6aJYRweNDrQCp5jWtxVfhDZPRbgmTx4TyZzxAaT",
  "key29": "5nHbkQxwvaF5aWXX5WU9GjwAgdU7uJ2Z3nF2MrCSaK6LJM9Nt29o6yLNVUU2G8CiyPbKpKAhP18m1oUhuhWzJwmB",
  "key30": "3stYu54BHexFzSGGqJj4WJp62qiHYuPqmi2zsK9Jd1wpkxDjdaMKUiSoxkFnvdH4uFXTp8wfb3F69hsJuSPBk95j",
  "key31": "3EHzdUTz7Mr4vpvt7ikYrFEkwAjkKu1zjPRESjsecRR2253CtKd8NiikqURdTzps1q8tjzMRKrMJ2WxJaL4ZKJP9",
  "key32": "5XsFEPxWJnjJuPDijy5xtFqbUV7UQvcg29mNGJ5Xg6LPQuZN9JuLt5QvmDzMAe9oJticSBzRsoibREwPQsK1jrgw",
  "key33": "3FQhaTK1MhGdJU5gyjSrPcAiTFk9hjzKsXD9ciUhLPFJyJ3SnBXpaWKBiRYyXWD9GqvHWVVRjMZLbG9kYFvnJ7Nt"
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
