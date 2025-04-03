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
    "2G4U9TP9fZRfGGzXEoLqRKcdv1hw3ePyisLL5LBQwk4YcdEHwsqLcjQnJ7KB4LJZnGYxL4snuQ2uDGJm1BphSyv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYXKFxYDRqcSEgp2cW1LK156Q7fasM2D2jioG2ehVcdjZ45mh23FT9EXxunrSfNoqRhHtu772iW1Nn51wDd9AZG",
  "key1": "5PAbTMaxS6LKK4EkZG7YozN1ct2zMtHAbmXKRvFgTZXPwUyFjEfbwnzUqmY9UbCuApoz5v714jB7jJnvKqmno5Qy",
  "key2": "2E1p5fyAJzT7UZCmUcM5NLwNmp1h21N8bEB7zBADJTpk4oNxpFLZsnGZhdta8CiTv6nkQ3ti4s9X3vVP79tWz3xU",
  "key3": "fhtM4NWSVB3YYme65Y8NpW1ZgnQdU5LzRPdRiYyJM6cAVdTFMmzydL78uavmJJVrStdWMwRwhja9nxNK7TVqBUz",
  "key4": "4a1JzephFdgb24M8QxwFmz4iPDkfdhF9pD6dQkFE5RVf8heuY4GJBDFcaT6mmTmoPPfxwsF1wELWvuQVVJL1y5QM",
  "key5": "344KyfvKg1FCvZTjJVViLvyDHv64cBahxwaSWA4ZiEZAoRHiHeHMjdtX9NLcHeHxcDceuDHoBXQf9wttFmuiHoRS",
  "key6": "2rbQ8M2SD4CwqCWZrDYTbetTDsMtcPnDuXiN4mVJpo2tVKeyejA3YHmziZ5cfwDK92r5ie9jAPzoZ4VoNGrNPAr2",
  "key7": "2QyViNX8GZUzGbPbSGo3eFPQQJ23Y63cMEWt4NXtYjEVBMVV4Mzyhhm2MG1ZYTPVcfYKW97T7YwopUxYD6TeCQpu",
  "key8": "2XwssV4rFQE8XDhYqooFisUtodHYcCSfsThAT3UKDki1Yrq85dNB11Usgyrrw3QuU8EMUchWQa9n5rHf2mx9SvKy",
  "key9": "aZhHXPwmnHqZCq3HEZyUZTNVHJS7pesvBnXTd3kgBRE9AUwARL9nTpNakb2MN74cs9mLSYPHZ1qELnQ9UAJn3Bj",
  "key10": "3SaBdJWBGR3Fx2qc2SrWHwHYyiKjKDWX4Bf9GPUUYNt7fh27yJ8XDTeXW9gPcg1P5YcSQSY3eUdxQkak4hoSHEZb",
  "key11": "rTx2pHh52G2HyDY3rEA1WXF48xn537SDUvAezysVAcuWn1Yj8qk1WbwxM9CJpp9z2Dmc4V3LE1xDsWBy5w7qs3q",
  "key12": "3kGCrxnyqWTZNiYKeh6UYRtSqvxBgsGxDfSxUjF7nY6kAthowd4xrH3TTGaNF5kvoVDkoejfnWwqKsRsTWwUAauo",
  "key13": "5587pLj1urzKjFnYikaRyPBMZykMbZyiRFxmYBukFqzrpxXx3Ns1z6QTRdmnHJLHdkzD3KwDbaUjYuvd2gPsB6Cd",
  "key14": "4aSYYPYFyjsMwvJQ19nmhAzrejXae3mVQH6hdZiVJfvb7eDxcvCMo6jLmbYgosBAkHpdqQNaJ3J2AzZehvtDCWXY",
  "key15": "8Tex44kjwj88mV7vL5p4qnFbcCCzWMez77BmoJNRk1yEcud2zFgTBco5LrAP7NyzWa4Fm7JGtY6djhzpHePHn2y",
  "key16": "5UTJWiD2n3nLuaDeMB3862YpSNUm6odPYUxamxQBb3FxRwViw7UTqkjjTxrgTHa3u9BpFAZMfcQCdHMk36C1tpJf",
  "key17": "2E7bG5rTmYYwsiBeifB44YADquskZVStkA62oRrLUefykyKHd4FuFisMea5smVZe4bWzZnU22sNumDpswy2oAnCT",
  "key18": "64VVUipxRaXUGRrQpt4cHNeuuyoiSWgoDVhgh6mxJJusZE44CuBKdJWaHcwiNUToa7tiHE3xbJcSzyVCFew2KKvp",
  "key19": "26TveGxbs9dfiQfkExstizTfXyZsgmE978KEkePYvSAnGzUmfB4UmbkD9ZmwBx8QrwyXaN2Rc4xdA7o2RoLRpqrK",
  "key20": "QLtd3nZyrYDZeBFAok6fa2wZZXwP3WpGFUk6VKZhLjwU8qcmWKZLoRBR62ERkvueoi3ZsA7UuEmCug9fDjWxa4j",
  "key21": "4e9SJXPVyaSaPRZHZChkNWHso3mtnojA3ABgnXSoykGac4tiNmBqXvMmED8yLxMiAvpKrosMwiFvhUHQF1LwyHWG",
  "key22": "62P94gFMsxrfkeFtAHE3oE7Tqbzb2oY3pgLJfqEwL1foRGqu3eLtfWarimeGWNfUuinGsHr2dtS8yfXUnQRZKNVG",
  "key23": "5fEp9rpRNuDR9FAL3sqqy696UAZHL3qyqyLDSmq413cSUk3T7Lh8UMevHhSgBukfLHND9VwzkcSDWqjnpbvEMTfV",
  "key24": "34cDhx8o7hGZk9XS8EvfE7BJYENrEKKFYuskZAAsFUB9WPdco9hjW2szT96oY2xNFXxX2w8QjW2LNncAh6m9NWjK",
  "key25": "4XZ2qvs1Wk38zxA5sCWvjzdJc83HfmJ8xHyZq1uMpFqbCuNMrSu4rzyKyD1Y1YhpBsH2SCnBf8sceGoWVaoKVLGS",
  "key26": "381nhW412K58XQGGeutryukPSa7b6PWbNcDfGZtwaH27K6iKdJ7kwdvRkfw9T96PhPqUxcHMBUPWewB8Jm1VPucf",
  "key27": "4zhtQgBx1dD4eU6QjrkGsp84f3RGFJzsgNsgEBYodB6oQMxTaXRviJk8Bzt1wPwxFYMMsegX9ZwPRYG2Lqrc1FtZ",
  "key28": "3yCNf2W8cWfg8nGND9Cg59UUEd6zCc26ZPtZeyd92D8tNoW8cA9sMKaTV6UTzPV7GhzjeMfgKNYYx4WWvv3qBjJw",
  "key29": "2KB52aKHzhacfnBMCYmAYoyCrtXpEBwzHKeAxk5Ybwy6uYMFX9xEQ62EmsDFscQHGHnSrbLr78UYJxPvgf6ZVEVf",
  "key30": "4WpMb7vVdtmmNud4x1NZ6yafnsMwm1xbU4MiBwU1gjSZkRUeXbhRDVXZHi46g8vtfsxbFr3cAD2G2KxGJ5sBUFGM",
  "key31": "6WscWDkicEVMm7eYxm1ET5WcHtPgNQxMLPEnSDGXiCCxTSUA6UEJxn5dpSwFc1U5iugv6ibSCaFajiZa53vDQWm",
  "key32": "3WsSXeds42HZyjpQrxct6ByNBknnfr3ijowjxQETaBZBM7LSWpkCr1AAL6ErJEyMY2F9jPRWbU7sawsqxxCAnfpW"
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
