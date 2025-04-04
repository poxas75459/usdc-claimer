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
    "QyUXbAmDbW2AKe2SpWgCTYUzwbrbGJYbwNXPzzy5wNwhDYjrezHZFgZmtd2CP9Q7bm7qCLhBpUAHnvBcZofLm3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ye686X7mLUWHLpKW1fMtXAnZ8L3ECQTCCii2BeBwGg55zkpyD7xg2pwtXERh6XgpLK2kYUBhiBRgxBL8kzw9iEP",
  "key1": "5x7kbhyXhCvgp8zejRpunLBe4ZYb8abkrZW39Q1oNWLuhBwnMi19Wt7mE5nK6eeX3iDsGLM2mDuMjvSCPaWfemw6",
  "key2": "22ob9t2s8AFXCPKrG7Zxt3yC2XDZ2twLJczFzHxZScPvn6iyBtotWBPYd9Kq5Kaie1qmo8kGGLE6aVVGWXw3sK5U",
  "key3": "4USATYC6c1dvSVdWr3TmRi2mZD3UmJzVr99o7GYcwcEhyvksHLETUQpCvjyCYWssjif9MkrhdqD1xrXvj959cDHc",
  "key4": "5ngJmUuwkMAU2pwwGuYjtEWaK4oJ6YBVJrFX3dzbWBfm4omkrEhuuXpCbcUKU1nhV1FLGBekpE2dzxJeqPratAxJ",
  "key5": "36tqeTn1Ya5MLQRSCptgJtBi6zfv2fPLZ1MR48WpkvkfGqCXmhBhQ53LHVquRvtZmfeQmGoq6f7aurkHNf5bu3iv",
  "key6": "3FSD3H1XTjGWcMpoZpw971RPA7XBS9dfW7M3jXUsL2RL3EwoSGVZxDbTahkggbaFZj4PKKNjTec9X13wPLnGXgeH",
  "key7": "46Xpz37WUEB2Tcz4Zm6JqCXB8VGNmYUyxMHHGC662G1HxJBNaEqdEjdRzsZCupju1UVCrNwozTtiqXjznNiVEtwH",
  "key8": "3rJZpqTwWJE7VFRubGvUkg7pbZRNxxee2Py3NyX5o6UqzfHm1d3tVLjeiktSQ3RPT6VvrQ5HERNEGqTb6FfGvkcB",
  "key9": "3A5gbRMvkgrqwH9o5wqkRBxojQeECzzjRrUpWdvJyzcjPCsuxHar9fVoknorB8k5fnbYLHUVGgvhAndzeC3T5YiW",
  "key10": "5RRL263ezmigfPfhn23KnMUpqYQr8No8XyDKis9ZYWMBMzoMhjNj2YXU579cf2sxAd5ZfMgxzjWj1xKfj9W4eT7V",
  "key11": "fkHBKRffDu2PsxaRgU5X5RV2CjJJa9LKWtBStYJgQgYVWVuis4Ar6KEp4jqQ4gusty1Xb48g4kzZRoGorYY9SqN",
  "key12": "435qsnuUBFvz29fbekmUCZDJ32DC5zktuWxn1dGQZqd4LjWsmVKN9Yrk1bjjJ3MHtx9ynqnDJdDD8HXuYp8Mp3D5",
  "key13": "4VGhzG5QAFasFsTKvFHm5DdW43jue8syUsNGmTFvjDeHYmFRJRAgVqNRAonZfv8U7in2rTD4eUmAB7LNxcqXVqJq",
  "key14": "3kqmR9qDY5cm9hDDuyGJ4Fi49C1Wygy9rw94RJjb61QyN17YVABaBR7bfPTiLwTqeBUsbVsCgYuCRY8vp85ys9YY",
  "key15": "3zLNxTnXqxW9B6GWfmvSeqYBzDhbzgCkfN3tf5923R8cnKcA5J6vdKjqHA6mKY4Nrmx6otXKuFKcvJ3N1KonSEWh",
  "key16": "65jtSzNzfZvexCfg7DWE7T9Rmxz6hqeTWdHydZQcVPBG7RdKkwVURooLGWNLEGvBNEcdomvm88xmfnruWnD84ByF",
  "key17": "3FfCsgJsX21aTLcurGoTLwqf3ajx3PYTtsMo7VfU5ZSqwkxpJNKTiRLtNARfMkjyUbr5bhMBfWzaktJJ9SjEmitD",
  "key18": "5coCsmA1vuACNoxrpN6rVB3M1FME2MjSPJn45H2qEcfiFuvjqZuzguC9FofBreXaFMPdhLgZ1ku4c9dWMwEpp5K5",
  "key19": "5nfre6SNpmLvUkSfA2AaQN5FbjQAvjxqS5uwRmsZAM6CcZkG9hAkojq4eHm7LocaQ54vP3n4spYex3rWrC6Cu9Pj",
  "key20": "4YXzuSrXx3fefV38VSsEfzkXpYVH3rMDpz7bRHoic9ndTRcMMNdQoneiTAbJpKTZW2TXuTqzTkVfE41WuiEVbQ12",
  "key21": "5y75hcKGBoNA1DnvE9csPqURTvrxYTjUoRnDcMv5pjoL6mPaWQ2JfGBnZW7afgAi7ZoxGw65uYHi2z1NNsdvmCn3",
  "key22": "4Td9yC9yu1nvHzCEH2QzZgRGvDK4QrxXZ1gtExPgfbfKMmcgtkorsD47W83D8oAtnm5Zee1vtNHNwbN1vDjAS63b",
  "key23": "4m5DtY4cRKjtXzDmus2S7y1HEouZPgiZrw5QPsB5FmXLvDinSK324Hn5Mf56BCVSnkCewwadxzJREgvywWTszM1V",
  "key24": "4Qs68cPnfG4a7B6YxCnivQgqQQr5167JCXESDB8sqMg53SN4PNK4zEnfn3TpVrGXuHAULpLEdb8AbKcctnhaHxRM",
  "key25": "5XionWfhMX2ywmSHk9pyTsofMngtV6Hsq6hPmK7gU1s3m4hQA4HVuN9obzibR9PzL8ZEZn4wy5jUuLWRgv5XfkXa",
  "key26": "5BNywYQkgbfSdMDwXjCDkBt1rKuX4j4EDbuEWBCsrmJua3UffobtHpCZrMUNzCSnGZqdCwiAqQL38boAgWRSuTTf",
  "key27": "tBJMxn33fZA9zAKx8stD5Rj2XQWEBjRPktjX5og8FRY8rp1ae1mveQum7w5cpjo4vEUyrqKFVfLekcqnrHcufXe",
  "key28": "4JDLVVdK4XeA5H3Z9fCz4TEZcLkcTgfS5sdV41WBcPkXUsPZo4RaPJcA6EEKyhirtFXdMj9yerTTTcuRyX3Xzd9Z",
  "key29": "5EoMW1fKtqh72zDML2BxhFmSiaXmQDBXA6kEy8DBftmJhNAyfSVj37T3ggcK9HBmanP7FHb1GtHk1dkGDuYtuUrR",
  "key30": "49ESSBNgkmmGKuwpcBoscsSDnN75mX3da8LqN2RKJtHs1SWLdFAdfRFrgkgBo1uqhv5rqL9TA3MMAXZA5K2hrAKM",
  "key31": "2cK9bEk6Kx2EJz6mWt4CDDXsmvRvHfveGrVdHkskuJsui4Ycz3i83n9U35tw1G8uwe3dQj93o2yY7KsBnFjxLFB3",
  "key32": "G16LehAUEJ2rDX3DbuAncZATgTGyWnWXJWGrYLw8sPBN8qzV8bmhyDzeN6h5z2mHhLHCoV3Qvr4d1EUai8FwwDX",
  "key33": "38goG6ubH3gxPAupsHBMZSbttYzocURzFCvzMKvXLJDT9Le1PyTTJqEe9AZrwZeyomogdcbTpU8Q9d1jJ9PGe5w4",
  "key34": "2ZUBXYw1z9JbjbhCHzLFDKno9A24EeLDsqzAV7wS2AvgztXZgXQZ12jZxU2qyY7mdFSVJVTFq3ffzKhJT81pv3TQ",
  "key35": "34aPfWdSMAZsPSx7FG42Mg64nN2cYVPAPHkYMHpRiZAXSRfNmke54zoStdqYrdBw86U2kM3HvHp4GBjASvKd485x",
  "key36": "xKhqkGk5x5Ke2ZWTzKR3qyh732sVvy3vep8dUPo1KgVGAXYrwmBLQ9YeXTAV4EsveU4BBn4aJGRS5u8GqR8ASu9",
  "key37": "vHw532Ug8CHLCeJe3j6sSnotiNQHgGD57FQN62Z9bGH3zeEtSohF2hu1k7gYhLUkcNCJ1ysZN4emC9wJuYnkEd8"
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
