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
    "YhW9wgsigRjCbMCyQRj59CW8CJZQRPswgEFHGf8sZEWWwqtjg22NYckQ7uBJCXueuwD2aovbhnKQEBNpJJSo9te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atwaHRPmYgvWqc6xeU47dC6RGwJN482geMvwvDdi6qvpagecqHpNuzps3maPx3TKn5Zk2atq9b77SFKviH2BE8w",
  "key1": "51Xz4a4JHtYQtpZVQzCU4NwjoBAddjz2e2gSwvmUYg7Qkxk9FNDgf1QjWpgycJW1A5DqxjHaAarSMBrPgU9J42fy",
  "key2": "5uWSKN3P8HiNXd9aASHVWXLeSmPejvb24TuLxPRijbAXrhj38roJJbEMfUyvzqy5CTT87y9bLqMv4BG8XPzmPxwD",
  "key3": "5ifeArnUnL9NEHwVSgCNhyp8ye5Ldq5UeAGXEkA8aPv9wPDoA4DeG5hRE8F4d33npPjoFJPM9D5KscbjY3kSZxsh",
  "key4": "HBnAxtukjwVxJPVHAUn1kVmaxmEbW5DFyhgmpomwBoeCbyL8zcdgaMaCm2wont1vwGiA7SouDotsFLhXf6k5sFW",
  "key5": "2pLBdPxgC4XZA9eYHbKiVK215DTjKuystkrgZXDja2VpexcLYWyZQ3M2RNFakhLVQhaGDjqYtv5rC5kweMpwnKpZ",
  "key6": "5utvrgesnnkQAQpWzEWYBeBXqMQiph7kTLuAP15ym4fSwKv95v6ofaUtgquAj3c1xTQTRAaS5ZddrubAc9dRW1zj",
  "key7": "4LnK8texvJU8hMZpQAigGg2h92uh8scwnnCCkQEC7maFwFjmkDSwX5QW4brMS4AkL6ip87ApoyU5TaBVJ8DHxeQn",
  "key8": "4f1CcLFadWa2Ta9X53DdpBuNpwsSkcMVywuEfP5x1RJdkQqhqma3w4TTkruB81PHRByi68EjLNerapwg2K23Kid2",
  "key9": "2C5RJdxDWxb4TNYpgyFfhZa6rzbrb3HkbzCXzGEVf8QvK5jyXTJGSPdxZLMmLUF28oN14zwzoYHboCs6KzLbBYRt",
  "key10": "5bYnmg7d16zunEAHYxkGbfDHYVLD4jVEGu6TzharEJhjV8JnnJSKjKJpdTh9ZFrTYry6jyKp78CvTRciB7Aqtayh",
  "key11": "5mSp2syQRX697SsQMwVdzSnSZDkywmQP1HchHM6LYeoU9ap1ZJSohh8fVLb3cCHUsA8jSqLiZSmsePYfR7osbnVM",
  "key12": "3sDsTuJE3EGFUJuY3VYXGBSv9NrTqwXY3a7Km6CgXqr8jWBKMJ8zQHgJtbYY8qKGyGhWWjqPtcJRNL1TPQqEFUjZ",
  "key13": "2d46dJCucPfHZEcpxwTuZ3fmGMCzar8XDuBi9jJQckXR7rcJ8qUqoh3XC5N4av9MxBzG7xTEjwTXr6MviA2oiLzT",
  "key14": "4y6iZ4WauwPJNhiHoDw6sjxCjQMVhnudpGBNGPAHWYb67LqBxN7XDd5DPtLrvxkd6hHNePsDAU7d4YXPxBmkh47T",
  "key15": "5NiZ3F3Kpmpz1qcLQL3uwXBkGgxNqpaYKVx1bybb7fyxfvB4npE2NBcoQoa46avP2NYYeCxZ8FiedYzkELvmWr4X",
  "key16": "3Zsb2Tec94DG61Ph6TChvT6jBGh7F5KKPtvx6wHTknPFtBroMUSp1NnGAMrrnHWA5TLtZ4UiGChbRgtwwZ9G7iva",
  "key17": "53QgjoHqrUfZnBm286CrNjvDmmi37aWYjki1AEyTCofZzDnnncpRkgp2dpxFC6i9edXRcWYVmZ8WMk1mVCrSZSsM",
  "key18": "o6NHZvHTQraq3K4q1azREcPs3rxKPwXSsSk4K7iPVZ9EavhWwPbmkRrzji2kYzDAFbnvy27HBiFcp2gMwvjirdH",
  "key19": "5HziqBvRYRXM23UCcDJHNaAPrtn2PrEsX24ur9EzmUVCa5Jai2Wh8DJYLq1rTK1qHXv2CMxsr5Te5ZzHRgej8pNV",
  "key20": "3HSAJcD7KogFzicoopMNmjoA2SskMet2nQCZ5so8k3TNTELhNBxYkcZnQvU6HoxtTEzTvV3VBCuf4sav5HR8rgiq",
  "key21": "2dh33iRQKRRVnzDHt8nXC3bRzMgd6za3j91NCocnCMaUqX9Qf2rfwvJpG6zeiYTi38hWXF1a7VZZs7jN36a8QMqu",
  "key22": "5U8RnH8yDFrLTiCbKGcLGLUpiBg6QByuYJL2MsyqXuvUw8Ed7MLHWtW8h3fy5yEahjmPJaFDpvhp8tgTb8rXrdhf",
  "key23": "5B5iGnQcLqEjxAnhjmpusp3uWMy4oG5wvw2R78m7PaV1tewkdx58DNboUBhtTxMXDQXMquJsEgwbHkAU91b8PdNC",
  "key24": "4cEzGwdUHc6QSEZ8ZZyPoeTXuRUTadpPUaecQpevrodes8G965eBYtoBNRFr9LikrPvPzxdAzydcWpepgRqjk3Ew",
  "key25": "rGnGTYausmKWnUFsUZnhoUUxPm3D9A5c9jWHMmMDGh5uiYYE3SUHExSYJ3QfTnM9MDoDvkWRiZ8RTBuwPrxdbsn",
  "key26": "5aY4CMTXTkYLRGwCt1aNKBcs5ZcsUX1Cd8t5P5uHNHost7WrQsPSKmLb3XAEv4P5XzxJoutq7oAHPbTz5GmXVykf",
  "key27": "Svd29opLeJnPEdxgE7redWVPZFCnnpNAxf2573GkM5rtxgoe3GeL2hJ4ksVUMcvtqtMvNENiL6kgufsFp2qvnCS",
  "key28": "XRQ51vwjR7bkw55q4ML6PmJkx6eEfsENMudx4piFhuD4iecDUWZSPrXdA4hTixRcMEcqqacERxZvy98zuSjyvzY",
  "key29": "2j54qAQ7v2SxCYyXz2ZocExgW6mWkqb7pYu8BtrjinrnSjHssqGfYZkY6CbSrgkU37CBSbhEkWDB26FLNZtopmE9",
  "key30": "47Z7DYwF5R71QsUEybfStH1mtnW3D5XDDNzBrDQ8MHHDkVH6eMNJfoYZ5j3ZMRTiAzGGtGjtvqKMRZ5ogfHsLxXZ",
  "key31": "44g5nCUFT4aycgEWtsJUuu9oBbtEE4WAkjWNHmRXGoxyVCNum59VxZmS8x8iMV5KEaDB9juwAmn7p3wANZGarAn2",
  "key32": "gk3ixYy3ULNiipErJkPsWrX547AcmC5QZMbSXuAdKo4rhFSnQnnPywzEX7DJXy4jLb9WEhdZ3ujDgs9EFaYcDG7",
  "key33": "5d7QvRtyP7Weho7nvHThiYVR48LPoGF23daiBgMSviR8ZnxL6xDauGrH3iYBLkhg3wMenNDUxxATcAb8fxWRNiv2",
  "key34": "2znP8d1qzzG2WCmC9jQtR1JX5SFJQNumX59xhzW72iHBCTeSZr3msuBnB5DyUCrWDp7jLrabSHD8ro7ZJwby5eCP",
  "key35": "5rinRCLFSfRddMrLHDTgmjChd2pWqYUtmL9H7as6CqYS4V37SEKZEo5MshBPsUiqtPexeNH8qYugDoTMyQ2YaRv6"
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
