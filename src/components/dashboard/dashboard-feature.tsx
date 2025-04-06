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
    "2QzEUjCQTHWSsXB7JWbbo9pxh1UEsQ9V1yCqsmhbgPcnuWhrDHS73KBHCdbHgQxtdcYTobZoTuesuVv8gRx4RrkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uJuxuDWb9FH9Xs29GymmScknZQJnAJ1DXTpCniZDnVLmvimAwCHQ22HRuzyGXPiYyb7TuA8AMCiEWbsqHm4kr",
  "key1": "4C7kEbGcgssxUW4BcWZs6QKYRU6c3rLEBTcaxc7vHNusPvHHmhM4EAF173fGLxkCiv8QFWjQrvsZkWHkAJLZZMfc",
  "key2": "5Z8KZwkYYyaV7ZJSEUJvefWPP27yHEgrxibqX9F13PfRHQR9PbLyezAZ53mF6z8hJ3b72cQ2v93etfkSaKTj7GWf",
  "key3": "2DBecFwwHK728mHYgEPyx2WkXf7xWdU4PzmoszrnTwV3eC9isufmeGz7713peGh8zHwPpBVT9FsoCQywb7DqfpxF",
  "key4": "4vXzUx6u354Ejs88SjRSEz8TMokkKm79vBPo2KzNCKVinBT1Ed3HvZUzFjRtWVm4CyveyJb7NWhEVrb8XXJvgZgd",
  "key5": "3AAqEpqHs3wy1oEJdU414M3HwdLppM95PbH6ZLKPU7mg72VfqxtZuPJ1qjfsEGtsxKEgeHQ95Kbwjpkmsxorpi95",
  "key6": "4g9B4DTvzGDSDSJjsVbRz2EU7LEQs1eHqifRrd9TwuE846BKdeXmVohNgtZbdKRgtYadiZY6JmAVdk2EGWcuxevG",
  "key7": "3BhgQcZYhj7crr19QtdZMEGcAj7R2NNHbY2ToRh8AXQjy1u1KA2r8mbdVY1bEG6AXwvoPPaRVYqSvWjyjQX8nztB",
  "key8": "47vz82CjdnLgf1m5EAcbNaZnT2H7sRmczBmy24DxyNZRo58UjEqhz62BnFaThGfTgpQNCUVAssDgMymfkPZJCrL9",
  "key9": "eRP8LwNLsK3QcJjqmh24ts99mehJaN6BibR5N3yjVjvPndwmPkyVSjX56pDTboazUc7tpWVuojjQi1ooDaCQkdA",
  "key10": "66uQC1e3gygM5597MmSeyd6S9CAfrmBa53vVKuHYcpZ3gBZXhPJXbqcGNADwkECx9wrqLQ3b53rReGK9VxsthuAe",
  "key11": "LxK6uG3mPFZCXzfqoqZkgXqmdGHE2CWMbDTUvxJNuETgQCNKJdxToiUrVJpQDwf2pJJ1LJ7DFWiU6tknnK4n2A3",
  "key12": "3YhtbG14Agx83YgsubfFd9EQwntJgPPjYYy3siNHbwrWoDRY8uce3vUiJQtF76Dybnv9UDvc1QyUysk6JcWGD7KF",
  "key13": "3kQPBk1yuxkQbNP8pPYYerBbobg1Jvzt2h6TxhyF3yanwNfwwg9LZ2LXGtvqk4jnNEpQpWYiWMRD3i4UoWQsu255",
  "key14": "4G6Vw1MEPeBFjxqtukJccbtMZ4F99fFCtwGMEsUYD7d9ipnq1mmWT7qchaTo3wpPzHEP4EkS2ace7iQhP6i6tdag",
  "key15": "2LfifkyMa9RYovoTS7RUMW5wm5nSGJvkhhhi2WM1RDi7Y2X2Ux5BouoHMZQsjJB4LqNzE2Jk84zT5gG3CULyxW3w",
  "key16": "5TAswV7o5cqSQRzDowLxzY7z3oHnqkzFiPDHFiJZchRCXkyhZtfTbLuNP8aWfMGwXFfbPgn8r1Jgicvw18dZzWjG",
  "key17": "4m6qQdg1g84wgMMko3K2Vx2feurCVrxBESxfbMGD671YfR6oMq16DJG8gvQuXmQYxCJxnwJ4HigpgaNNzGBYpktu",
  "key18": "2QgBrEqHUsFWjNCqdyDdCiqrTAzCcApMqD1X6Yybv8pjNzVhbqrQDy5gUz7WJKaUJkJ4nDufXHzW5JNcPupZdZ1C",
  "key19": "3sTuB8yHjvi94Mm5JAZ83hZD3JA72RTonJnnuZAr6zCeZfB5uG19kJkEieGJNXuQvVy2csoSzVBKjs4TJgdEsWg3",
  "key20": "62F69R1WFVzDrXdmGj7LdzadWaJ1vECgy414zPEMSNurcW5nX5p3hzkXNNCP99aJhSAu6YXoHhLx1qUqYHJxgsAg",
  "key21": "4zd9ZszG8bcS6zKYQUBbricjEDFa4gfEiYChsz5DhgtiKvVD4m4QRwZ4mpsHEKYcgxvG4MaPpoCk7uNQdVxsos39",
  "key22": "2cBTwQZ2JsJYDUxC43ZxbtfDd4GFwjF9xgx6MgnDUkDjGibCCRAPxoBBRugADrRT1Hzn5TmnUjcDxj5EpFgASvE",
  "key23": "3GAes1KmworrVS7BWtMFedq5wTr9WwwJTpyVBQNSoBurWZ8kanqypLkgJC4jj3WBUxgU9pD6ubzUR8Rrj7Zr1QqD",
  "key24": "2H1DMdmS4cPJWHAzKqCxP1BpnDQEAX9Rftit9UrL6KRP7CzDVLf6EPszSmdeBH2PeeochtotdERh3yCy3YXRhFgR",
  "key25": "59GknGvCGeCyU7RSvR4gYkQXVM1MqSUP3AHiVcWqTYgsvtAvuTejzhkvHrdFBSzNK7wrwyfd2xKJ4rQhUF544SSW",
  "key26": "4KggNwV717Wx5QoZwyLQd5XXcqWbQYgYQjp3UUC3xzk8YYvcEMsZXQUPQFJws4NDDU8vs7H8AXF1TpgSdA2UiAeL",
  "key27": "5TmKntiDZmVDjdzkWemSXQfNMiNQzW71nYMoD4PqGomV4DfKvHDRty9z33iVfDFvunjK3htx3xeXpVcprK8P839g",
  "key28": "4WdhoWZ2DNV1MXkQoQ5x8hMfDM3jTZe7kbVuLFCSiXCrWctUHncRvX6XaUUA8KXPnyU8Rr7cnxJhEA8t956mNpq4",
  "key29": "4Aa89zz37YeCjRgc1evseBYWw7RyntHejkj5po9BYNtrNT79Wub9ru5ocic8ZuaTsT54uy2cMcqncDekZeCh4aY7",
  "key30": "5iNH5khddKbsDcLav2sNSoqveEDWagZiK3K4Eas3LhiKc29omLWx7eb1sTSsoYHaAn5HCx79JhAydpPt7HCuXB8d",
  "key31": "hcffPtejHLJ1iXge1MYv2zBu2Smk5gDSzJWdxyEuy7rUZYdH6BxXDsCmdyg5FkHE3xxcGxippJFQ8xHNcKp233r",
  "key32": "5rRBBvww97dp39D9bYLiuCEw3jeXsgUQMWvzaxfwye8r8ndHsqqXWhR3391ApTPBMuavKwzzjhK6P2tR6F4ff8ke",
  "key33": "24FfTUmNajapPonPeaqLS89AYzthPmpUGUPspcvCVupaUNR71dRuQ4LstMk36Gm9QhRTLFpyW9uDxgXLYitqzSsT",
  "key34": "tqu3nnvxejSiZJx6cJtD69XCz2Xndp2iaxSmPTXmm9WWJWjucTTqAU673Pj26n4cRVWKTPeJo4QKPaUF1obvzD5",
  "key35": "46JFyc6iTvXQgCyNNu622SStaVkYSt9R3T21TBWShavBKfHrkPUATBWcLQci7JSzvEaJJTXy1Gr7nZxine845GWA",
  "key36": "4bDoyW21539RePW1H1p1cFFngKgDTvGCutfRARUDSy1tqtBWiPbon767LUj8EAU7Qr5i56Sj2vASivhvy4wPUVRG",
  "key37": "64jWyALsQgXJzsDw4jJWktWKLSJbtDCws7ppcTMih3tsJReba5bveAL5rgfXUZGX4Bk9tZ8zhooqhzEyUridsPqf",
  "key38": "22YBaT5PiJCcNquiAy9Mq6QPyDDyxnZXjBJVyzvqUhpQGzTrEovJXWoyEKuB5ErQXyZTJkeAHPC7zukeKmi7PC1L",
  "key39": "44uRK3Du72mrHSp5JDGQux5YCVX9ZUo8y8vgXtgb5sfg7wWfRuozUHasG4BwcRdq6YCai74YWDj3sx17dtCKBs1v",
  "key40": "4v3UvaRUnFtfhdXusmNK7dM4tgAaiC1Bj5CZH4AhHbvwpHwoCbwWJc3n3U9AkDxU9gvZpCacqJaUDZ5P9STW5YYQ",
  "key41": "2b4G6kCzmk5mHDCDEEdB8AZ4YaBtrUpSam9RxK7XEL6ifYZrCTjcu4WjKGjn7eBWr7Z5yF56e1EFwSDEnuydidbK",
  "key42": "N5AETQzKMKtfCJUzfpdpBwo1kWyM3RmX1yvRE2TcG9EBR72FdTvTfYCGHfMcT5otwDxcFv6gFeJNu39FUewnEvo",
  "key43": "57ef57Z6L9v46rMvigKCV42k2aQTUTP7DCjvZM544XAwXm34ke8RjhDWoP5twzx7jkmUnajrgbffhkU2PfC9JqT7"
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
