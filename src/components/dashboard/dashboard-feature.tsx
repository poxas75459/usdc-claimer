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
    "sFNe3wHYHVppF9BEZunS948P767gV1Z8uoKU65BpVwQDGwtZt3RuzUmb7EdouB8PbStQEuxjeRPG2vSmV9L5txX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wJBkf7MM3otqP4Xr1JJecg88pzXTV1SM59hGmeQdYTf9YyEKgbkLccpxNFrSAoYMZ67dGjZ5tTLqJVMZbytP1q",
  "key1": "3ANZf5hhj1SUsWKd1ByWNYuEWeCYkixggB5xSP7x3kVVdoc39uTMbhsvQyeFeDHc8GcHqQxfKieoSNRHgRt2KchY",
  "key2": "5oGfiALRFfNAXxN9vfoB7tGpeeJ1MBAkCCMbTB3nP5HBVcbcggEHnHwHUpMcTDio3ELqQhVy5CsgwFp2Shp8BW9G",
  "key3": "3wZbE7Ex9ud94PVw1GVbhLBVk3y4Z9vgmnQoQkjEcdKCoKG1DpTtTvDDkG5VWAMtxKTLsEXSZ4m8n3ieRSHGM1dB",
  "key4": "3xkRzjPZkAJz8h3w9pqB4beii6NdpQKupAmuuX1g39dFzZdQEeK2r9tJyXRrkN9NuMSCDUTmfcxXKHyB2PhPMvGV",
  "key5": "2fvTpfzoCis3ZPwfRA97Ya4sinWEfRiQnhzTbqH2U9JVUGSP3B9HTjzTWMRT1MCKyMMYjdQRVnwoxTyZbEdKZxMC",
  "key6": "2Zmqm4SmK76ZxZhi2xa8gZgZMaiJShHpbeXm3yhikJCdVxwLAWiqaVXogJrLD73VV4JyLQCjrsoLi8R1EQe3BUBQ",
  "key7": "3ajtd2TGypszj7tCybwC1rdqnCEbEPAASHNaSrvLw6QtyQJueydCEbMGsd4AxQvecCxn4GzsjSq9kDbmdaLowhpd",
  "key8": "3AVXpdjuNwG66ZRxCj4S1a1XY2rnUBAnL9E2G9XwCMtKXobWXcUgyLDEfU49AZKEbJLnx8P3ksv7bMTTUGUyBDqb",
  "key9": "3AtSFkAW5wA3xuC3yc4ZYCB2fhJYmvkkfTRmWYEtKC3V3pAJ3WF6Cd8ovfoc1CckNQnGTKe6hQSpmFi3b4Tfu1ZP",
  "key10": "4LBYqnhmPn7vYRX5QQYs2Vc2tbBkze6MBQFRp6eFmDLc1mEktMmkgTEur4vVXr3uhS4msJHn1DUGNaQTakd4KNqZ",
  "key11": "3o5NexyeX7fNJcUjwEqTLEAFvQT336FYBorjeTtgqo9J4dziKDydArhFudjmUFqVmKyP2XavJdyVDYCGzuJvWeFT",
  "key12": "8yFtGs7W1QzA13pfSgRMAzoyHu84afuenbR8GT8jZpPBgyR4Lixk8kEgh4fLspvVr7d4oEt9zLdiGYZQ9pzBMbG",
  "key13": "4e3GYcRy5UPeZHeAjYodd7e6rfZqFanLXKvvhps7j3Lka43Zpzq4AsRxcMhRzDbkUnkVLw7uUEJp23j1Z2oqu8Dw",
  "key14": "km9TuToyETbk4QuurRK4iUds9PbGpcEKCgTnLb2DGHDqz3GNQKr1NFR3KZbZmTED8uS6qM3a1RSXk9tRt7ffS25",
  "key15": "4KPZZttK7VfwPg8Aa5sHNScTKD8tLrEUUAU3G1mDQE3vBL9M6pZXowXWx6uipc8JeorfAgJ5w4DzWn8rWiZfvTJC",
  "key16": "3BhooZvCJPHEPgRraREjppL6pohf7ZmZMfSgn3hbtRi1qQRtCC9GFWtycB6CxqvbDKH4JaEZrvSUc8HdsebuTi3C",
  "key17": "XYQFqWKUBm9MZhSfaTMr5JVQoyHS8rgNVkoo13CkjNs7BCuNWjihUAWr3QRPMpCoy222TUTuZcV3VpWPmCW9uHz",
  "key18": "4zsLim6vZGVpvsnubDnpYWP5TNmztYaZkDzkbsLD12PX42SYfrUNdfGtgUg12R2EDkj48KLHa9Ah9gC6D7FKFDGD",
  "key19": "bmXFy8dYDGo7Y5VjkZ4W1ykszR1kESUyoAeSdqDR9935k1uLQDR8nhahBrMNXQ4Wx826Zd4CTzao7wMjL1qaD4A",
  "key20": "4rA9BTKYYH46ipc1keB4uGQrRc6tRCmS96N8WSAhge2tCXqzzHBLfSzNRYSkJuGqRc8UvZbY94dHudrHKrv6jisn",
  "key21": "3PseXZ3pSCKNfp8R34JF4q23YsZKCKmUGGoXrtStqykgoa3Egavo1ErEeSJnd6vhZfToM1Bfo2c5GpFyomF5nAgh",
  "key22": "2ieUbMLpsnLSHgR6ASJ7nceGcC5U9SbLKxvXRp7GMTvr2cJtyvurDpcDb34KtKsyBFhazFL6H48wDcnjxWAR2Whi",
  "key23": "5VT2NSeuuDhwjoHQkTWMmvW61N75wgwyu1izXt62kPUM5RAmVfrdvogW9ErqvktV5sue1hWSzKWxvNW9KhWzrh49",
  "key24": "5p7iRJ6veB6aAxD8peDKrsVnt4LXP8fLGn6grssBcVCcaUrNi6wJu51FCy7ooCMu9bFzAP1GZUqBNhTgZanARj2J",
  "key25": "3oaxMEf2ujpWcndLsx6BqgzT9EqSjh1oPySBsGqhXgJyBKwNaZrNpZaXdX2iK3fqm8V3QFn5neA13maL9BJPEMKD",
  "key26": "3ZgsCikbQNLeJe2zo5PsSa9zwss11tHx61eJGJUAB5dtWopNmxK1eUJdAXDuP4kLzrVBBP8jAdcHhAu4mso8NDZk",
  "key27": "4PDVQ5Abb5sKPK3xAm1ri4XNjZoLQpAx8KRAYBVBGUyzjyL6tUhXCsjJ6F2RmXczg58cmf8v3EA4jvLwnVAmMDFy",
  "key28": "2pDM9qq1b3PmvY59uXhipnVLEYqbbkHv4FPvTDTuAgvsg3hZ5JxTPfPvZaQmgFMWkNHfM6QGjYeGLa7yvNSz6EvH",
  "key29": "2cvyuXXEQb1aWCbqnecfuyUD5m3jg6fqMM2d9QxBgTp3xyvKpfbhwsm8YHBGs4CLrnPDkDrRbTXVRBVnX2RF92ku",
  "key30": "3SWsEDXbYesisPQQosN4DtdjjcYcTdKZBhpSjrf82H7CWr5aDg5FrBGPoRzE6qnm6wj3KvF74UXMgidx4hyLcdVw",
  "key31": "5jb8mr6J9GUpEmN4e7nb6cWW9hMh9tQ4uid7wNosorCUjL7W99BxMYmhGgTfggen2w2zsJh34ZpYfqn1cLhgXZzA",
  "key32": "48cePzS6cqZR86WfnP6R7NVyhtjNPfiFD5tZEbLLqG9nTc2DzeT28xovZCf4NHvGPPajrawXybCy8BCy4riBVJGp",
  "key33": "NgXC7MqCnMT9K3pYxXE7fW2RhwtboqrEimdrUYMg3kiWzCANm1PmNvS7cNvGJEYbHy6uGtWjnYwZzyzVVSgERJw",
  "key34": "3shjbchdiHsMdU4F9ybRU7jsuj2cQsdeDrjajmdWoiKRCzdGrN9HEfUm3eQLVBetQQKrcyBovTSb5cLKJfR8n9Ww",
  "key35": "3Zu6227xEPnPZNwDyXfTt1up4sCSZjgQUvbSeYubNbgSX4AkVcrGpR7SGPvbD6WJgaUjaLq5S4MMwow3kWJTGUQ2"
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
