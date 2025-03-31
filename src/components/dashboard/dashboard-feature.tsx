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
    "43duZSiuDazbR1nRPB6nKsKKjPzBQwReWQ2FKTogi1qyBUW87xYD6UZLESyNW3FUdgcpThAJ9Hp7TRdmvxuwsted"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uiaz8TaaPqgb6JU8r6ajrbsNeJDK7Rwx9fhcEjWsjFhuKTYazM2JsQcAoHDLN1WwQX5JPaPNJWkKDsEojZiPbHu",
  "key1": "577ySggxaxzzhbgTckYNq2mVQ4CyYPdFHEiNkmp3vBjBpJnxoxNFawWFRNGSPhkZY4t886JG4uEjfweRVJHraGnz",
  "key2": "3FLQ4u7PnRmFnSoKuUNS61nrJhvPv8bvT8BCW8Zf4cnLqeeoiiMFV9A1BkZZmDTeW6i68WQchPgvvoZ2fMrXHwuS",
  "key3": "655HqZPcVhH8hAop6W2QAiiYmgNPVKgZ9i4Xsqpx1CrXSLfhSiGV3fHwvr6y8hdTtTfcYa4XPaHJ917ffc6inyfR",
  "key4": "4b8S3An2PvTMgpwzFJjPj6aRcgZwFiGJYADPqqpdz58upA8mgMPHjwH1DAd3Ypyqsom3WmTh4MwCunYhsy3R5Gbd",
  "key5": "4sqLCGddiSFrruVRwRfVE2yN2uPaXUAFPvTEEjCMknCAZrUXjaRcsPPKgio44s8hGLUbVA1sUqtxdCKMPuiQSSCg",
  "key6": "5xhdNbccbqtWSAo2oTKA4qz6SLfVRtGbwAN7xscpcnwKLX2DLfaDg2xRNcfzRXWgqoHRh92qExJmqynELSzBFT4H",
  "key7": "9JqKNwqVuiFkJRSTtavmjLLGmACnW5veHCsp6TTx8k46t7DJqXg1ESyNmk68y8fH2Q7ms1wr6ufnQmh2paD7WHU",
  "key8": "2gSN8kfPUeYvshAxoRetSYDzG7JAiDNav6kwiZEsTjkXDfokPGA4NhzuXm1Up5RZaBePzn5SLfjGaYA5bpHpTBhe",
  "key9": "63M5Q9pHrdv9WvqFKDzMMc5pYV3xSZ5RuFSjCRCfHK8MDkbcFDUDZFjv7BMH2JWSWt7RU4EdPqF49yEhTBBn6rX2",
  "key10": "4iV4rN8umpnM9kK1rxtgXWB26FaN3Ha97YSY9SdKQyDVheb7FsJ3YVUpw5v5BKVjdX2R56S4vQJSEU6EhjXuv5To",
  "key11": "2xNiZyKoReuTqDT3RgVJgUfjz7GRbD34EayUvNPanQaybPuy42oCzXYtFLShtD5S11TRpgX75EihdYg4cbSxxyaK",
  "key12": "MfRxrZnRgaLcYZ7SQKGooSzFamy6VCw97ipyXSwZtt314QK9mhGg6wqUDJq3NCyCTZJfT4VzAYr7AYsAuU1vN8m",
  "key13": "4sgFMzivKida2XfGsELoVxQVFYkPsrGRVRda9JRSBNnyiv1HkpABGMH1oahmBVCKNbYuh1hoCckEJW4u4cqM97zo",
  "key14": "4L29s1N1GZS9Km6JFvRo3Q9yb3mzAwH57NKrCDKcJuG6L1JdkpBMCLsy1Qv7zxhByYVFS3e8NbCyy7XmcUPUie1u",
  "key15": "3NrLF9P7xr3wZLVAPNSZwXgUmdUewAC21xyBTDW4L9oPDM9ND26Fr9QW1ctZVmVAiQQv57fQRvdZ7NVLipoRsb3E",
  "key16": "37uywEuMYMQDsD5ArMu8pnRdLAzTZoBunAsa6YSttjMzMNchRwQgjj8UMYG84RZorXW9maoXj4Abm5Nk7Fx8CSX8",
  "key17": "5XX9eVin9dWWbRtdCjXtKkCirWyPTyF7RSrRuc16GNmQpC72osFDDtpNi2V8iYafYLXHLLsPGJGihM3TP9VFuG5L",
  "key18": "2yBUws85d8JpBN1T45jwf2u5HHfUb3XWX8ALihasbfCdxTqrtStLZ3D3ZhLwG5RKoBPiVZtz7Lbr56KbQ2YLRwua",
  "key19": "4RGN2ZxqATLLTZNXCM9LwPGB22KRVgsshGwWzWxD5XMRGjpDieS8ArwUsMddsrQyAVuPXvdTimUpAVWmsJ6PwnMZ",
  "key20": "46sqykcJEts7xXnituNsMmTzHTY5ZWSuivLAjziEvvZ5UbFNFhHZBgA2wshs4bHkm59v9oPFQ8LVwjKk9oM4rrs",
  "key21": "1MKPqgaq4aANah5KL7SVcJCoZxA7WZmRqRaZhCQFWge8CNHE1j2GaPoKBbn3pFWqQBNEqDuKY3c8sggobLM5795",
  "key22": "3hkMSqGv62qHESEff6qgN27eZrR7Hpoun8hWyEuEvTvmoHH999GYQ1F5eWPyspXBQEW8sXTEVtsXJnQyqmXnUZoo",
  "key23": "3N2d8KWndsU8NG7pBNY1HMPqh1SpMFZH1n4itnbWc3PAzuyzWYzUhvq9WmkYPoLPywd9iRf8iWFCTe7p8aLRCt4s",
  "key24": "gZ3ntTd8fkyuTd6ChJW5icPeUCgXsb7R2NBaw8eJUYA8hfB4teLorofrarEdbNcCgcBpZX2cN5wSMdMmiBkUMjy",
  "key25": "33iJLWWETnRkuRznZaR4VGykxoC3t4bjBmb1imNW3e6wq5GjXDNeGyqgfhp8FR6kumCEk1Yqps2LNorkazrLEzE8",
  "key26": "2LC9nvYKPpdfb8YWXcqDmJ81qv8tiM534FmwWcm71hjzJY1YTHHFNccQaudHKscbXAiGP7JHskgsqkhUWhMFUgEv",
  "key27": "5VYo3UzbzoXcPMsYZKYb61gUSGsCtBov4fTrT9quXf4pzcgPTTwtjvrFkFc1dRxf5QkbhrEVmFnQoq7sMbHjDE7s",
  "key28": "3VYniFuUaZLZxDnQny69dV6FrA23EwmMW7NCZLthq7pQ2iH2SZKaJ34ANpXX6ZKqYJWAz2WVNw17Md2UohBsc8Xv",
  "key29": "3JuXb8ZDHZPCJaocdEixJYzi6pj7VMe4HwQRrhPMDuBigYfZ6SDcRa4f1CuF5XgU3NjGbvA79nnmUB24uncLj4dZ",
  "key30": "4h4AzhMkrLFu6HgnuQiyNjTALZe7qruXdmaweC46Goyv9KpwDUrwYgqe8i96WjVES4Q2dXfKktZ1VxrzLxk7osQZ",
  "key31": "5pmcoS9zu3JZN9zer81U8Bo9qp7Mju9u8tNv7aPBMtWRjBynADZQAYrvBXUKW5SMdX1nwATeqzrD6jUPsurn1iFr",
  "key32": "44WqRWs7tzi6xK2u881RQ8tzPuWNcuzFsFRbZAxjBvigUpP5iW8FShtM4pRstUnG247bnnebajoc8EhCAaa9YzLR"
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
