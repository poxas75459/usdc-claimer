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
    "2FqGUtRcnUJb58JiqLxeQH9nZ6A1ckuE1HSe4EP9P2487fU7jC8HbTEGa44XxhM6tQeyHrdPKF3m3uaaJj6MPJYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgZr3e4mWj93inpj6L9S1Yg8PeL4xaafwb6jnf4LUAK4PHVyS6aqh4EHLSwqNhhgBZdKKM5JHHhvqGdoDosvk7L",
  "key1": "4MveErcyz1dL9sqckyJpjTawyxQUiqcgCyGLdEY4REEeVULAaQHsJxUk5y8R4Qp1vaztjytkqXjq2upLN5iRZwLQ",
  "key2": "2HKK2h7fEbttSBiaJbrNSjHJZKQHjL1cosfgaWcKcJm8hjncbumJiBVT2QaT6AKGN1hywUtasxyfbjNVUq9VmJyY",
  "key3": "4qHN2ed295bJcMWnDZGxHECBzpWmpBKhFAkzLpavCeth5LP4V9ShbvMFRo1QCYq4Urh1qQmCoAD9DaTrGzPTf6EX",
  "key4": "4BUMqvfsXjcbQwiZVHPK4ozoHAXyTDBNfjXATHdjyAxSU1kjMmEUsbVdKJXVVEeWk4nzZ1HJLkAx8hoQfMPoiMrq",
  "key5": "qtqFcHum6n9g3tCJRQJm7gJqEzpxUuNkzz7aTk9qE7EP5W8HUbXprARMBPS4wbwNBDmxm6RG2kAq2wqhRvQ29iS",
  "key6": "4VFKZpqNMcWheLBebPSUKciEfugyLnDep9144eHgFzp1ukRzLEtTQW3pSmj4hzL5zjmizQyYYsKMMdBP7tufERqs",
  "key7": "3TtjEXWt4AGcfrjcy9C37AoFCHSpFrBQ9UfjKnnZ3u6MCtWKVWgvymSXxc19PwJNy3sRyUqCwDCiZCbDRDtTZbby",
  "key8": "5JbhXQTAcCagJNXhnbBiN6pFJNgs1Rq636XYyyghUZJjCLXyY3wD5VYjp2vZmj8YzxY96UtQdah5nAFSwq32ja35",
  "key9": "3YzL6TzgEo7CcGRHjiZkAUUSXRm93cYwqGafxWtx4aRCzYzks4vxwvJiPukkSDkPxbkkAgPFCLVcu7M3L3pxXJzD",
  "key10": "3x578sw9eNTT9U2BnW6n7tN3Ds7DFpwgbQcBLyD6dNYXDJCvrJokWacPXNzLuJnCJ5BmDEJnU27jGio1VcxRB5EJ",
  "key11": "2ErpybwR9PJ9EEVgqqQT629D2ngFcW41KkfWqZnxyK35wz1Tz3E3yt8WUVyA1o1qeFqJ9vmdroQJp2SCv6jgUDQW",
  "key12": "b1smHbP7bfJPZnH9cLnS4VVrovwuWw9uepCahLsyCJRcfiUR8axrkHdEkpqdWuA5Dz1SgQGm3HHbTdjLY3nZJss",
  "key13": "3X7dyjCAouZ2hrd1YVhVewoQHCfwC2eDMNrhxvFotuoS7U1yFSV2bNgY7n4TFagqFWqgVvunzfiBZBsNiufXTPQ7",
  "key14": "64wmcsgeELGw1snSdLCV2cptgRvQi3cWvqgTdtzuL281iHz3KkV1bY4xGfbcxVRU7Zo7bzPWswTw4PuoawMUCgU8",
  "key15": "2m8tGG1MwArUv2zXZjW7GgnFQZ1j7EE5TwD64Ta9wiwwhrP9WjPF9D7ESoCFui1MWK79HAqrRywLSL6o6fgZZXFT",
  "key16": "35H4pwpmiXdKnYE4AcgdehFdh1Jz5HxuMRCfvv9Z2KuSxe1zrTfzdjYV285vNRmb9yzmEuW92jkobQYe7DHZx9sF",
  "key17": "5ZSHSGQGEJPRZ5mKs3pD2BZCfEBnffDSKcexTzXAs2HdKoJz6t9zReDCtFYhq2b6asJr6rbbMkKuYaLoMRPu3VYS",
  "key18": "hbTEz2jQTR4fCMJCgVHN66pkgM7WDFdCuQptwDsB4pp6uvtmad2GE5p2kmU6k5KcrzSxuvKg6UjTaSXev5yajGb",
  "key19": "4VF81KbFvYc1dS6xd2MM2K1HiwZQqJ4idcyDxAkUSGnq65TRgrudKFPKDerCArEjSUx1Kj5waVxK5bmZKuvbtTmc",
  "key20": "5V1oDe7a4cFeLAojTvWtMzgzCD8j8jUbU9yK9jmuoioxUy85kx63U7CgQgdVSz7Nnsp8YHr5C3axdPDUjaLLmJcm",
  "key21": "EgtoxcagSVYckovvc4r2yr2KwcN8PuF692rAzBbS2nuDqDB7EECKP7bgsXoVDgpdY8DoYPN7Kk2nMG2rfTQTCJh",
  "key22": "24ELAGe4v6yvKRsgv6UJVBitYVv5VHkCyqqEMqEr3XfnZc4y6xNDyUhXCjDWZNPLMN2a3v9ZcFVYaX29XGwZR9pr",
  "key23": "66sz1qsbw5KZu5vRzNYgZ6tzYxLTesw8pQi7XTAPqGKv4NMi5uAnbLL5m7QEFxdN2RfbCfbH6mRuc95YCisni7fh",
  "key24": "5XwkHKfKtimGyYT6n9WEXQqB26aA6cBYE57ZuvVuo6UiKpXiLL5PAVU6HJnSnyDgK8g8EcHDMYZkJVz1UvXDmB2H",
  "key25": "4bGoU64V9KmjK6757Q8GYPdZGgeWwPf8gyCp6Kw5AJ32MUUEhDTrJEiLREhW5RZy11Wq5pNGTjSvBuDRYRoWCcbi",
  "key26": "2UwjWZtJN8LYZSXLmkDmXK3rzt2ayQoe9Q72Jj4139UGzUECPyRj47Q8r8iFih7oAp4wAyKoV3QRSganXXKQGyme",
  "key27": "8RVj7AKQFsHRByci82uPg777efMfyQZnwonmraANCroprNLgaCLbpNuPTKtvGLocq8C9mps9umQwUp1VDYtiGuo",
  "key28": "5jeozBtb2kvnfZgcxDN47z4M4b7ktNhSq4Sz93sufrew54npgJbuZrHfKZoVSxVFE1gWcC2sJ8FtA6ZkDzFBoZHp",
  "key29": "37UKtjgSfdpszGqsce6TMS5n4GBBB3KGvJaNY5567bSazsVTbNv3fXNEMpaV7ghtpxf685Bbgfop5ykpSthtXMMv",
  "key30": "EzTJw2WX5Y6wxeW8D2AChwcgEzCaudGZ97yf5494HqPL4jCs8N5U9XbW37anpTv2eNPqfmog9Ehgu2zAMckbtnd",
  "key31": "3sbh2Nc6mNCd35s1BMQ3ssw8THZQ8wDMW2keVKNNC9ENqXWTdBWv9adSjLTTnQLcnhbgGm5gs726F1jMqHgGt7xX",
  "key32": "TXyRrZC3NMdxtRgXNvjAZx79wHgstJAUiUhwwgxzyhssuCrcV11Srdvh4x1kqdTvVKFNAqzq1ozVyywvPB5As6z",
  "key33": "3mg4JzbCtkGpi4xE2hH6SZxBHcmkJAfNxZAVzsW3MkVqHfrR4XRxarATHTw2PRgMYn8eVVQMojDsmkjzc2L3vaAW",
  "key34": "4rPD648DAerDZ9Q77XPQN4wcXFry7WN8Ni4s2ssfiPxquTWaBA7y9MEyoXBmMjF3v7R7ZhBALU6cgtbTP9ghNCr4",
  "key35": "67enEVXiV7RwP4K5irPCZ1BGn1qwRNejs1uE7YuN4YWjwgMRs2oiCKaWkN9MiUptggmxSYEBcBcwSGnEdnePQ2gj",
  "key36": "WsUg8kE6SfEwWR5qvqCaBbXja1Vd94pyxSTFsLNUkKvqpEkMtnqXi8sMjLrToCwU9GmbgDTu5k5QrawJgQGPB9B"
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
