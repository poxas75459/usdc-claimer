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
    "4YpC1qAKvh9B5iFJBy5Qcb47onaSvpfYQfxCHBkxVKhBCCaH2Ub91CmBaWyR59ATbXzdvARkicp8oLAtSKpG1uKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQy2FHTSPGjJuVEDgn2mcYnUThQTN1SypsFdkoNp9MCWj5EBee8ggFdEaJ1MjkY4Kn4tt1ztxtqv63XNNQjjVcX",
  "key1": "5REn6H38ryzY937GdMtReSBdnZXZawji8B5je1A2zeafBfm4oz6W2eyHHuQjR2jtzgj4du6wn6GXx2CMGFifVCLK",
  "key2": "4p4eXLKnBNpJDK8d1mhy2Xii221RCiXQrWrDf5oQLpYbX7xDFwHdub16hWErwH1eerUwS3zgUwsBrp1M2G8K2w8G",
  "key3": "nGvdqBzvUoBbCQofhh9x7UnTpuKhyFWZuRaLQqqeCDAo5QfXjsmoXiCASgfydoRSGHksqctknEHtBP8pNtWE5jv",
  "key4": "5PgbVYwQesCWk2u3iGNdvwX35JgMNgFjtA5mJheiortqvHyz8ueyuPbMvZimJ2HuF8RPG3xr92P16s5mYSLPmhBu",
  "key5": "tfwpNWJMpRDqJzynMqDfnfqqxmpzwgmzHADx7Xg9mXvUAjiEZUTJ4EUReDa3gVKJJNt4jM7zi6jj5cU1mFs2vRH",
  "key6": "5MFK89XhGq9y2TifxoLovZdDXBdiAbSsq5CFfqgtrskVrXfqwtUwZCaYeYWuQ7MRRBgS4dWXHsV2dCto4yc4BMC2",
  "key7": "2DfLhKdK4nCfgCTmpMLmtT18s4n3MYPVth8qq4ZdUDynyPawfUw2sRBLwtq6zNHqZYirpCz8sF1UjNXqMryB5LHn",
  "key8": "5gtTVCXaE1VXyrV19xzCu4dZhR12Ynbz9tLybVJpHX3VRPTnrz1UU6YNoUniyDXKwubY2mTfSX4hKmzD7ABd4x4k",
  "key9": "28Ht8Etk7H2dZNMqUgcnRZzU3UPhwZtar9ZPoc5PRu4CbEqQzxMFS666gEm3TEDDdNpHcWn72JCxv51QdrKLCfbY",
  "key10": "ipoVXdZjwWufTKAe43DqAZuSYyyYvH99NsGPaULxLPJfxUEN6i2AWEqPJjxXiX5NnJ8qKRKdj9wVHxd466SMZQd",
  "key11": "93CgZWv4uizrLrbxjLJhihJXJJ92TUKWCuahsaYfd1zHbmzweBtfAgSyapRpjLBiWf3Q43NF19sB8GmBUwju4EY",
  "key12": "66djhwA2F1wquPGShkpaeuP1bMeBqbZWAPNsiH4UFeetc1oUJ8mNYzFFq8iJh7UVEyBYrUvjb7THCdB6LCcZPyiA",
  "key13": "3Pi4MvUP4A27u6iYc8hFC3fxQemAJqz4gKLG4K4QU4GoRW3SKrAg1TQ2pXEVhuPmkqKtRrf6Uhczv2bEipUG1Uti",
  "key14": "TcvKhKrdXnw9fRRkSRE6T94gbo54ZH9NaDgjwa61b1YwxMtKkUHUTD4JDcTDsLB3nG4bwzMnuTULz5G5icvajgu",
  "key15": "3gm2vzZ8ZzNZhi3SigwJpRdmYphvQiqbXio68TJ2Wj3LAaNFTCmLzDnri8qvGCCJr9ZP5uAfarZN6f7vuXhRiQBK",
  "key16": "24Mb86vtqSgVmWsd5ua1vegJG1MJyVknmd2hN6ZyDv7RpnPCwSXZLeYcaTGTHo5AZqJ948HQcewymUQryU1N1LnQ",
  "key17": "5ZuTaQ8Fqa6xvuAy4jVWGdg1Ryjj5LJw1K6nu2pZakR45KM5RaK1AfVVRiHBXWBmjhyTRsxNZHftN8KvmefE8LQk",
  "key18": "3rQnEqpNKNoGwKP79U4fkFz5wnV5hyaTdCLVzR5vMr3Yn8z96jSKerfE79Wex1ARPeMuPuAz7fTkqtAr6mviWM76",
  "key19": "4R7eLM3AQG9U8aYmV8dgMcwwC3mkxATe59pY1hy3NbZveQiJR2oCytXjpMV23TNr5ZaaNL84k9LK9zRaaSh1VA6h",
  "key20": "3U72Eij1FtAwMfrDJdfPbLb6ixsL1dyrmBuyRJGZd9SX9vuUS9FSj3YDcZopREYbGzDuWLbvYTGwa8Ghq5kcTKFj",
  "key21": "4w8T7TMVdBra7D78AD8CkYDj4MFTAA1dwFScCZeWQnp6cpicj4jUyaNNuEnivWup5bEQ5sKtu1kFCsCMZGDFdpEK",
  "key22": "3LRtN3LHF8ucVZ6X5XvEeTNQo1CLHypKXLhLzywa4hJLLs9z1uQc9DREnpj8MhMJygze1xKNKe6RWpMZhAGLdQ68",
  "key23": "3QqPJhvDKnf3S3FgxqGykjueZeANWczD9RHeKdCVU5jUDJPhN5EHQUF9w5iQ3D2eWw5agU1ZvrxsPzMtqRrFS65q",
  "key24": "3jpxxgdKLtoCEBzJPub9TTRn3A6GdDDSySEjhp4tuG3XoidWnJ2CXvE67DdWQgZKozWaQ4ZbAX2RoyRX8ht3AJYD",
  "key25": "4Wc2FUmpvoF4gYdUJjJzFGdHD2XVZmqGFk4ZRsYbEdE4DZwhDNTVj2DQCJeA5eD1ZxqJZTL8VnuDkfUr5tkVWxS6",
  "key26": "PYfcUgkZJ1ErM8qNdwxrVUBA7AVqiPE9EzDcv2iSgbGAdv4GUoEFh9xBJQYE6zpvjWdMnpeii921vn64PM72m84",
  "key27": "4TsxpLxPLH6oG1aDkQed1osGtNgPGY7B9C51dwNXzeZMb3SQZmvFUiPezRpcq54jLRreYSTpbUkTcZnD4ESJLLWU",
  "key28": "3DDKTULkugwmwgCbhfJ6Lb61UvuDMBRd5ZM2wta8Do2dYPZ61UE5haUPp96i44Cnmz6VKe85uTpG4RSpd59BDgxA"
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
