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
    "3rnT1GuK6HuUTMneNoj9ye7fNYcP1dKgArNMH6ZNek1zyaG6CxyfBkq1VkjL5cA18jFzmKvaEyrH9YptC5sGHUPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3cEFUxKcdWX9W8jp6afMD3AKBw11dyT72XUFYzN8HtzSNZY52N9zcG6LbtjrzDpy18f11YoWLSRLtQEHP4jCi8",
  "key1": "29nuYjz3oTe9vbo8Qpcu3NEmVpJCAr4gby2StDT1iQsHTdp3hmUhpD3UQkbGijU9sBZ5HfK941k9wvTH2RExJZWP",
  "key2": "3hiJJZRad8RQ4FASQzoSo1E66cmiMDjvVgZ8SnurYoaKxiNipW1YNRHT5qs6fwNPvXCFiWCVpqaCrAJuqNR6YbQr",
  "key3": "3NJJUZrff7QSAG4o3oSkftBZyVbNui2paLmxFgFb8JcpfjDgL8BBUtA6svyUjvxPEkfELRoco7w9WaEfvZAdw8F6",
  "key4": "3KQbQ33QngAH1uQpc12pvEp8YFY3zULbFDX1vmgrHtNCi1wGbXf62FV5tvVZkGdHV3PLcDZLyrWmy2ze76oPy5dt",
  "key5": "3wiFcQ4mhurADmnENkLYLGu6W9qMWWfYqwZhZMecPtynKU2uuB65MWaVznSZB2R24CMPELN3jtBmrL8vT6fjVQwo",
  "key6": "4S7RBEwi7z56fgKCLcfFmXX4m7ztm9cQE6tsHnZZdudunRWZxATTpbZY9YzQwHtxdhdyaaQQGzJneZf8rhTx4UEw",
  "key7": "JfmFuB9AhALbXvaX1mUwnJrXi65uGMDHDbTmrmqViBN9aWcSFrLvZH6Qt51zrMKfibPcxU2mDEQpGs3eVKNXc38",
  "key8": "632CrhjkDRSVL3LTCzucbiAZNy9aNBjDYXA3cLeSRmE5r8bpPa1kS3GkAfQBTU3sL22pMkGhCBnmbjJWePxhNdrq",
  "key9": "2mBZxC1cM2RQJ4NFUpm9KxCy5hRTX4LXtcWXHzcFZds4g1iBBjWmpxrjfoCqaCc2n32aepMfWYcNWc7SMJR2c2NQ",
  "key10": "3LRPy55T8qegnxheKT8tZxDVGvCHCUo6goFqhzehUh1p9b29dAwKJSq9JyXt3VPEuj31kFzy7Wgfd1U931zxikgE",
  "key11": "5TSEjuBZ4LtZyXyNhGcZsfGtKZeXS8Xmk4LDpnmYaE5ymr3eewpErVMkyTrNHo734iRWCBSDJ92LmJqaHreAx8JQ",
  "key12": "5DiEkxCpmSjzVtBxQBs83joc2wBEduSq8d5qPYqRBcMoYBP7ww16exPR2QDZ5V11DpDH9EMZc4nk7sL5yHizCio9",
  "key13": "4kiY5UdX9ud3bZS7Tdn2h442jACu7Npwx86RQ48H7gxocLXZxB1QU3SQwgHFF4VyMgemBGbBDANGXFz9hrgxraWK",
  "key14": "7uNafPqVr2sPofPpeG7E1w1RBcf8qCecXv6g92u2ydyAxNnnSKZECj4zareT8F83HEkGrLXutEn6xd6LHCn6LGc",
  "key15": "3NNjkA5rZmJcFCrPaqHW6WmRpwESWSLFHRfHJguSKtMgjih8X6k7NLLe8xJBUJyimdtA1mPqXhUcAtHFfxQBwYnh",
  "key16": "3nG4AgtCBDE2ZWR434Mf9eSzewhxNAi5VVTddagwg8mSHjyKAKndykBdHicLshDt2pJT1kEYhodjWecTsgcA9aoa",
  "key17": "fjGwH6wbtBivKLu263Q3vBm567Zz2Vj95nZ5HSt9Vf3wkE7zKpsANHvwx3yhA3K8FxRoudaZtYusRmUi88aQVi9",
  "key18": "28mDfa4AzmLJGcQz8dyCQ4Kw2BsVxJXxC1gdYrSHn6DXzHwaEFU4wh8aKD9PFd367DbqiJqN4vfdB7SHjAm84Whs",
  "key19": "37LxVuRcktN8L6ppT8VEbS4i3whjw3U3gddJLKRoqtwuxLq8dPugPn73fCtZU5dp6QCY7jhnsPfJWWM57NJ3VLnb",
  "key20": "5rkpCRFAyvsZPJFpuUmNCn6nE2pGQ3jUkDUqXpsArfnYPiNuGwBdCGGVnAWhMMd3vroEpZo3YJxxH9d7QGfR61qP",
  "key21": "VYpPxaAgCxATowmdHoQ45x68iXYyCvkg9ZTfvwwcPVpb59VR5cYpgyLHnT86FHRfaUJoDXjitBQKk8dfR3nvqra",
  "key22": "52isqoDBm38fA4is5NzH7PNcUmVoqCBjf6ThfQQW756FaQxW6vbF2B8HnYHUNJjxA2YqecdknKmpqbZGZx9vSFxj",
  "key23": "2o7PFupyZSxdoE21jSKyV1ZmzkzeBPfeBEoA8fRJ9C5p2UTDQdYW9MLvtvSwfbxLj6j7SDAmyKHpxo3zVct7mA6f",
  "key24": "4zhU6moTDudyuP4DNqS2AsvPDR541kZnLoGrAnuFvR8VWDdJsy279TwCT5fgZ4Qa57jm9F1ub3MhpQf5xTLwvn6n",
  "key25": "3pMj7UgrSxhrv6feKdQfjaf2AfsviBvqFyQxBCSLgjrvSktgJXK6ECBXHfpK2cDhQbbVBRtFbUtu9t8KLFNtLw8i",
  "key26": "5j43TuCNFPRVvbMHLPgzhDTk4iv8Nxw9JZu7y3bzggP3esEhtqfo4XvXv9hovocN9QqsGwnRnxhjMLTcyvwA8oRw",
  "key27": "4im5SsE3oJ1WHKEqMnTSoZU54xjTiprsmcxZVEGnQQ2Nv5PQEKCM7tU9NzwPz56YZvZVZtVbTtR1STUTNZEP3q75",
  "key28": "BmG4hKwrWZRgk3shqD2NgjoRnqxmndcew7y3cPvbWNBEgdieJkDrVwJehke9S2uSbKtzGSiZnU5fAQaooGhLXg1",
  "key29": "41kRp77kvopjTaJkUKsjBgMwFiouN2Uo3mMNVPQt8mWn7y7VnhuyFXvd16tTXCDJFA3saPRT879XSqVyDTjGk6CC",
  "key30": "4XyuUGAFm9qhm6ikgq48WTJbYGaARxpwZoBjUb346LSFjMdyekHFx6BQww9K2UvK5zNwPtf8BbVFxsFXyw7Zmm92",
  "key31": "4Aqe9AyYXtR5sNjHs9rTzc29Fj74jCzxv13vtA4opvDjkJd8szR3hnLPgtVeB89wh7qJYqg5DBQoSWvz53w6oQkY",
  "key32": "3HFTdsmXtoAT4AV9HFGyAJkWYQr5Kjzj822EkxFXtsfZjAAK7o9yCHoSmavdnt1yJQqNgDCgpxp3WZDzeq9BnWbY",
  "key33": "3nGbu3CdmeaeCfCseCC2vSRxenFeQbaQxhoMDx2vjLVguK7LcPCHWonYSh6Y2Dz3uNMu5akCvy2jUcJVRxghmHvX",
  "key34": "22zoughMgsFvZGgMWxg9FfATSsrqXeNzxBKCZZrnH3BF5ZkKUTDg3QULa4UPhjs71wFndjbWvyxmrLjpcNE7aJPy",
  "key35": "3XxtnQJn9VyuJuvFEyKNRMyY6Fa2ejKvCMvRGwzW4sFZHh2G7qZK5XmjTiMyGmewKKhQH462YNB156BbHyDsTmhj",
  "key36": "2cSbW14Jwox1LeHo1VvtoTUCwgVsm3AQa9LvbHbkvmrWaG5uzKa7MEM84JACLBUH9YtCeWRoA5RgWovDdUG2rs6z",
  "key37": "2VaPSwgaiGcKatNLi8xPYbTEmKVHQGf8xhK7BAJ9K8SD6WGCkQFbvvBP3TVt3iDKdvqUT57MVctGcCNLxs5JGuyY"
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
