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
    "3Xw1DM6KRYcJ1e4Ko9gMbSbBXCDTLEXcvrp9AbKbYrHtsLKx6e5Yz7t8WE3ouUEuLhZJPbUM8iwAiA8V4XP9YZsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDb1ZHcDMH8dpMhJaY4EQNm4sCYYHm2spmUs2z81M22rr4PAE7BBNBkfR8MiocSEJuBmQXqMSU4FMob5yheCjGp",
  "key1": "2ZZTxDhE2GurXBFdjdkn7Kjrv8TQTxNGuKLP7Qjd4a2Cbraz9wLTiZk9ve96jzYmEn79EuNrNg9NKavb9UNqKS3S",
  "key2": "5PxFkm8MrxPxcfTBV586ryUeKmgMVsk32E89hKNquK5YBZhwdyXGiYMxdmvAugRCQN6kr9EYMbyCwyiEZkTLP92t",
  "key3": "5i27Yta1ey5YSSSpQm4husvEwjKqwr74TX57xCBXXxFr8e5PfbJb5Mrmi7ow5RBV7FuzGnm7XChXypqLD2EF6Ykv",
  "key4": "4WkDFEyc7PALe7v5NncwDXmo5drbtmbspanZRh77FwsiiWWa2REn53K9GQUGmjiqTJB6dzKJFca3UGgkoPwBLst8",
  "key5": "Tid1WhR6cRrTE1HbEsnM1PNUDkENfJHPcZkTkfEKzDczz5Wf35J6k77Rj7aX7FnUWy8fCUVD7BhK7gppTBCPpcj",
  "key6": "3PpsUAwyof8HTmhdx9anw3aURsdySzHi8kaMiqCnJhpVkfJxGWAPZfKbYYXZMByc4hJWc2j1nbdfgUoU3P6jMiiD",
  "key7": "37LtQEFb9v5wZdprSvjF44XXZBeMowUY8JcujLcFBgmtc8383ycFez7Yig9mwQUgDY2pXWQUZE7gaX9PuSGtjhed",
  "key8": "2QGfzNf9kMgXkWxwuGZHcAqZr1nhNunqZGPqJTYAYBj14MyBEnrKFuNdZEjnGRmsrB9ryGAZWZpvCbQWAdPfjpuy",
  "key9": "2W3pBWEkZfGsZ4JdnbEc4QnSowFovjhXtAvipSBafcyWqFaf5Ws3nCHiJj3dz9E1UaDBU2N4vb9wAcu8Y3jExd7d",
  "key10": "3qfV9P1g7e2TT9sktuup2aowVZyfLLhrcpt93PxXq3EorMPDHK3WnPs3VHAgb2RyUfhj247n6sjTWhGTbGHhdeKZ",
  "key11": "67BoZqZeK6371UpTgD7gZSZemBWYKdBBrF2cHepa1MNyfyUpGdWumVgomAQLx8o1RYCSXJcr5ch7aJo9YWKF9puP",
  "key12": "X8Hvmfb4wh3WbUaWk7EjvRU7kCidkjshmKdhuxoATTKG5pTM3FEsP9CK5DS5L3HYXAVZJ65Cs9kayFQ7KkwLF8Y",
  "key13": "5Vp1qpmQXTYxYPJofJRdKneG21jay3zjonuE3pfjHQ1YStcEj19RCt1wgLFTYYL97PXTDrFMykosfGKCLHjnFTgF",
  "key14": "LT649QtgTefJd9mCcPsf1hUkuKzAPheDsZjidG6NTntB16mVoyzJvS9meJtVuFoPiSgHHFZSoZdNbsG4Hyy5kxS",
  "key15": "Y4EDaczXW8Jyp8YyRoKGkcJ6uiVj2HdWHJVcwKgBTojZ7hYkVD7NM2vqUqW4y1Eshmwdkx1cGrv13oY1uNKZmS8",
  "key16": "389HKFRgnpngR499ArwyvBd66FehLF1UeRHqTkEGg1mi4cbrKaKZUPsuvsgiERG5xhYBwctvUZUVtFmZtGnGb46B",
  "key17": "3b6kTKWTdFegEiuh61YyTCw5m6s2KatupFNentAKDXrzAEUvhbpBNwZhucVoWQtvt7F9dhAtxkT6dUQHtHyzinaR",
  "key18": "2932wuftfrAqe4fXyTtXQZop13FwxbGbMVAAxAq4D97QmzPAsWgrba5dSjCFVYY5o4XLiDUDEg26ej5H6YbfA7oo",
  "key19": "4g7zrt7K7john7REA2cFTTgLpSc3erdXhST7VCUnBXXLozec9pujn2nu1288C3K2onm3niowhhPLRzq9nNPYXhJY",
  "key20": "4N1Veh49cnjQ9Vyx1eH47ba6DnS7Zhh7cQTHyU6bFCbSSzLvXQ1CZxvB2VJXhVfzfgMjPDatxtDhywtPSBRoFWno",
  "key21": "2Goockg5mkapZzLJxTrLvKW49DJs8xK9G42zwDkKbAww9bcwo6Wy8z7H5jNCBpzgbqZsG3oTxSg958U76McBQiXn",
  "key22": "2pXGhc6zqQvnHVHXZtXW27HvESsaWs1x8oxrbckCsufGe4EDMBgLzZveTRE9rPCPQevJBnsUjDT3dpPSj8p9e9aa",
  "key23": "qdhYCALfpmDidtAnQj6oR7EoujDYZXFuw4b9EwmwWRvpkTQXYTqJvPZT6KSfjEhVjim5e3crbxkgTLg7H6tqVcK",
  "key24": "2JPdcGtJC7dWtkk8HrKKFnsnWF1SEV7MZVpk8WF6ockUo7yEJWmYVKW494n3zd2CGPp6yxKAKR9Z9kWHbNukLbns",
  "key25": "2M2C9FVFW1AXrg7i2MjycCaUByj5C3JhAns4oStZTpGdQLpXE1HWB1rXPprb8buD1isXWqS9B4EKPbvwWiuUEgMz",
  "key26": "5F5bmLkej3mzfu3tLCs8zkz1HX6qYTTxV61vDkuSpg717wGxeMzcvW6gLMXH3qwRFS1xikkB16iU98RZvqajLfy9",
  "key27": "2j4Uojv5NtLXxKzH99B87ou7m7gWxoCea3xgosdbLrFGM62bxWqPcEc8vPjvDEvq8quFxQERW63e1ztAvbdbyogf",
  "key28": "hqedoDfuUuPrbHCApM9s52ah44U2jnfw33sxjYN6H8XdNyhtqnund8W3iF1a3Ec4fabH9Mv3dyZ1NxkeQZbmcyy",
  "key29": "3cGM6GaMBxJz1h4aSRJBA1LUxkSAQ6vVNZiJyYqd4iLg4Ew4V9uHarb5HhWVuhgaYyEnoxNFnfGuQargxPzzFoGA",
  "key30": "UvRKrgD5T3bhjV2p8io74zxZ8KtzxuWLQcPCdPn6vKWV3PMJnphmXAB5jEan1b9M9iKuNHZ9BstEbkRtJ6khtsU",
  "key31": "25ANGq4DawUt53HFynxqJRGPm5LU9zv8UqjMVLZzjEK81pwnnbPtZU2pN61qxtgykyr1iWdmPAvQVJAspYLFU5uU",
  "key32": "5exEtYeRd58bJ8JSRddpA6LQyYiMUQAbyM5YZeDfsiKYN2iEkCHjKNqRrHTRepfQftX6v34HHYRGMUGXJsX5ZAqp",
  "key33": "5XrmhoAWfxfjFvykiCgtrtSuBMpeA1uD3gnbmurS5e5QCQH3oaBULYRz17JotodnFA2sSZhax68wZDxgfKr7GMJz",
  "key34": "XvNhstGB7CkUSmiFb7NJhzuE7dqztyJiXxP5EpWnJMyskm2iFZr4SJ6qH5UbjBb8L45MhT9zqx6v7HPcXYaqJae",
  "key35": "5uCHSHeWhmAE1Sfk3LCG2k8m7jg8cUZ5taRG6uCSaNJbLXizYnuEeZ2UdmsH5FZCuVWLkSGtzk8inVSmdxDUi3Li",
  "key36": "i7m2ZPkdFAwRrhsGQLMF43YMXmzbxXLUPnvGkh21euyBDWPKuFDiJp3qn4fD28boyHAgttWonZUwK8dyxjGQ9mB",
  "key37": "57EjKKJG3XVDKHmsYSnm1zd93FEVvHRpfXQatgPJd5siV6zngKebbSPNtBEtpR11oKtDubGkiycgmLb8UWeJqyH8",
  "key38": "4ceCaHNLMZqJyeTQxeCeFNosWQyjxrsFnHmMWSb241fHgajxH5UWbfeiM21mbCL4WAr9iPwXpKNh4YHb97hySHdv",
  "key39": "662P1qm79ThsHhvpGqsVnshnxwdQLRK1teU5Evhm8j37sou7fMjhNJrX3KMKVgCcZWSyT75p8AeNc8LJRZ3s5Prh",
  "key40": "3s4tQLxiGnh7D8j75GDUdyRv2vijoWUw9C6AFYn41NrWvau2MQKvWEGWN7RVVswhmStLVBteFY1fUEgnEWx9dWTQ",
  "key41": "5ABV5FS4i41Cw5UogYruzYuyxXag4CpNePV6fBAogUw8oRHVqSeYBGiiiDjEGLCFKZkyxn7B8KSu7erVTpUaA4Dz",
  "key42": "3mAS2dAWYLRD1HsuhiK8UStx5nb5RaXUdsCDGRLiGt6PSYrpBSWkHKEPHTzhBTN892j5uXKpFLx94dk9XJLAuAPH"
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
