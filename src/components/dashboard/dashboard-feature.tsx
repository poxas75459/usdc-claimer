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
    "2QPTJUGesZpt1Up4UeHH7XCK4XT5fmoa3QG971ZZb61rCTtf85L3KWSniubB3Pdhar5DAh4rcrngw7GXwPrU3fTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gEtGgMhJzkFJ3iyenbc1HGN64rpBBo1UES9qgMNYVDojC7ZoDBRzyWSmdNZ2pv761Agmhkqo8DmWeupyuw8sPs",
  "key1": "282UFwt8v2FLVKvrs8b6DadYic86a65WvtDbxs1S8kL9Urh45eYhhygmQdMv6owit9MGDFFsGt9m5zEU2UwC1fUK",
  "key2": "55EKhZwvK1MgBrj9gBpMoCRf1uxkWzxzSs1CYrvzAqKThNUcz4135jAE6jxJWW6u9HGvcAAhLeg1ivg6JXFzePBf",
  "key3": "5prH3ZJCvvMm32HMKBUixJU36MgCXvECuRtRxuW9ZgvJhAuDquu8mFx7XiAJJHV8t9cRUSFLY3Rv7nnUatQ5ytqY",
  "key4": "5JBCWoaDh8ae353ohffspAdrD4uzSsU4vnoSZUFTiSztKy7ex9HwXJn4KYsJLty2N228CHmBBnJ8qncTDbUpF42E",
  "key5": "5W1iz6nBKBjQBKNUEjYchEiGHien3DnF9icVvQZxxJq2X5Y6VWC8Qx7QGLNgQZ7oz8ZNG7KthCp4qAgifEkc5Z5m",
  "key6": "5HgT2HRtDx84pLKn1HfuDp5hgfAwuF446yXXhD9rdALTDwFezWiZQsjJLfMzrAHSQBmr2CFcsLbD1yR89TebR3jN",
  "key7": "2HUmkmK6tzpXDqWZNdN7mZRuq1L9Cu1P7TszQs5pwxGsjpZcxujMyHNZi94ZdHbgCxKwHumkQkyawJtRy5Cr5PpL",
  "key8": "2KSv3kQrAxjF3ih3Ggo3E7D6P8UtXTRdSqJvmeAgPjPjtMR7JJJaoaAf3n4S4T4fJ3C3F4ZsrBt4njP8sJ86iop2",
  "key9": "3PivLw86jfGkPkYb2RRTgobhh1jT1XvJYrFBV26WWUrUpCLdVhtwDufPoHj85f4px6v21UFU3c5JxDEKMymnjUJM",
  "key10": "2cFpEwLGeFcxffQixgaNS33oofLrezNfQSSpiG8LHcoofREtnwWrL9PUEitPQoj3cwQk9PhZReB152pcfdMM2CtB",
  "key11": "2P7Q2gcWGekNoYRog4m7D8EsmXcHXRenJA1nT9svfkr67jv8L8nigxRnYwGz7xBGyqkDkHw1t4cS7tTDXQVLPa2z",
  "key12": "5FpJtk34LZG3gDcXb23NX6keQ7sXT2uMtUZg79YYG2GAfq1mHAADeU3ZbzY24Pqa2vDXC7cZ2fBEreAQ726kHPx2",
  "key13": "315S5zeDHJxDATnfimhuFzSf3UUUKVkwYZ4J5S91Lg9aTSX77pPrVEgpcK39CToDw8NxDeNM7csSNpdLKPcPAZTJ",
  "key14": "BUW8brkTSkR3oBn4c7gDCD2Z8jEoVX8EYFnQXYKz4faue9p2ujkWZqjpXjDqV2yV8VqVbUE34YND9YaKSZue93b",
  "key15": "2jnAFnetWaLTcsESm1aUKFeFeE2kh2BW1Tm3Vaxq1qpKGmHGMFgg8eJdPgF5UbTBxy4LgBmUt8Rsa9vKGBq4Vmcz",
  "key16": "5E6nMhtHV2GxWHWxDF3qvXPC5NVrDreQ6PnaYeSKatuN1bYpQzs4ji8H6ei2ZHA9zGLxKaGmLmzepLFUFRRyrCP5",
  "key17": "67krVYwEpJie3pPjLWi49w2mb6EmkUdqXe1rFSs1VNjjPQTajASRTmk1Cn8TerecFemDP8mKVVQZBRtJpfzKzL8J",
  "key18": "5ifpyfrVvn8DnFim2YtjrhqTV2CiYTcGs6EbaFdRqCNMQqBui87btrzDZmMRQTaaK9Gz97io8FVGAkALf66Ys5Rx",
  "key19": "49V5oifN5ZdPnhqTY8fiCFZiJrMYBs95YNHhkdhhpYtz4P1pcvopjYpEz2tZ1C8Cymr76DEzTRJMu22WnFUmrXB2",
  "key20": "64z56jtffwntejdDzngCjTSTubxeqNFJqfWYE8PbcU1XEH7kDkuQcFFVshh49VrisDoT9ytCeN6vAhPrAu6gyW1i",
  "key21": "2QpGR1SQvAp4PUJic9t9FnAs4AZu4Nri216RztNyFcBsWfYR3Bjwfu1foGwgkz1qHCRQa6FB59TshjVaLo2XuXz7",
  "key22": "3uamhB1HWEjFEPaH7bRAFc9NCZa6pfEn5yHAUGD3Dff5U7MtqgVLx5GyNBuVZyLvn5sMapCMbMBAhx4oMMtwSUhM",
  "key23": "4yMqMPWR8EbpbGjCz1uhDxcKWwqngqWAQ4PFk9MHdBb6MyAwfnDxG7kSGRqToHtxUpvUf5sGVjZ2tjWSf8fRTTf5",
  "key24": "hva4K2Dv1MjfSDQWMfrgjs66kP3Y2UiaaHZcJ69G8nKVLefDVj5PZGM1ZXzsSDp78VzmENtKVzRQW5XVFAUwwuj",
  "key25": "2i9bxHWQepkJiThXRRX9gK6XBqT8rYvr4FYtXndEGKUQEuLqW5AkGBFEVm56REeWHYeXSj8FvjFzhzBYMb4zF1v4",
  "key26": "28CLr86FoFGb85EnvFn6TiTVrN5UgGNy39n2VTrie7fKcPXAVzKMCtd8j5kq9ZyFiNo3PyQQkvVhjgLoRj7dVnM7",
  "key27": "5VJ4TMzHNhGTZBJvCFRHT3uAxcQohUYFJaHH1soyBAUytj4xiAL1gQxA2xTWuu8ZzT4keobvCJpWTm2RcRAp4du4",
  "key28": "25vdDwGg8hAeCh2WKH8VccM72QQZXFNvFkeAD3K5uwW1oDLRnCfXydiq4jqGFPhnbbeS2GjatyoUV5kcW11SvSNS",
  "key29": "66ibFUmnjLLGp5q4QFSjmLE9BqcxboAswFRhKPpoko4Xn1jEU1vTeVCbCjFRNej42dMGJEpkXwTKy3Mqe7svWfXe",
  "key30": "4uYFK1iENE6SCyJfwkcQTC97oo9Yu9th6MykXmytx4WCnGscym3WpuUhhCJ6xr5JQwnRThMmgHXBh7Wau7PqYqc1"
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
