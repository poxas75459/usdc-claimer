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
    "2UM2MVDtoZgWXE2E3r941k8nCZGCVELKNhWzh6DYif7eENpCC6a2aC5AkW7u5cMZ7aNgPh97RqnQP33TWMWkPMLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yM6JoaCeuYcJCykbJihzyNYHcS9ewUcZxiajYwjYsZtFSqbMECamECt9qEG9SmQJqP8cNuGhSXfJkUU5qJG3x92",
  "key1": "HG44KioxYNR1TXP7tbzKgKvYM4LsHoQ4JCW7FAqmnENkpVh8ScKtz7CRQ5TDLNFJvTNc1KtwUA5Kt5zXTsX3cDx",
  "key2": "2RJ3xtzCogi4CXJWWwNstuBM1SBGQ3p4yVaZ7EeyFRdUm9VnVfBLxgMAzQBtX1h4bKWLNB49W5bfqSZcgiDaSuhv",
  "key3": "aLjHA3HnDNtfe5ZZ8UTNXy5n6qYegDhrQPvFuBdeVLbubZ1yzH7beDz39Min5C4tnNFxaFRjwmjgCF2mLYzMJZv",
  "key4": "3gtSbJQgBs1RWrGQvvNdigwk2Hhff9EfzQWmnGRn4PgJNW7rywEXanH6z5UoFtNXKfywtkyRKWtHzEBoTwhGY9J6",
  "key5": "43Sdcu31heEyY2vK4K1BmU9eosJFRoVf8ptTsN7HzqjarE6NSWrTPpQRRKDciXdXi3KEUv2KWYsTb89w4hKH5ZNi",
  "key6": "5gQo1JWoFs3a4hQ7wJAudmvKWW8PgcDf8PLYE9AnLXRMGkAUnywZMvdMLGJoS81F8nktAfRuHS5nUDLcKXoVE4wE",
  "key7": "5zRBdHm4bKXsZcnDYknot17xaHzRWWq7RpV3ntNV2bviShd1k1htFeB1zHzXFvwRY3dw9fjtS5ymvamPM3WCWj1A",
  "key8": "E7gFdiso8YUjR77y3wfNLpRuFBiRFN7Wd6uDe4gtWpXDXLkgQN3d2yByY42tGcuBhapjzp1Kmvez89o1JyM7weN",
  "key9": "5Kg6cqVwFHetnxDi4Cuk2WsLQjLuFPRmvWDiuhcsxWy5DjwaKhgGs5dgBdN9fZjCcMarh1JZjJjBTb5PTbEJPkj4",
  "key10": "gfdBucX4SDz3qZqTVZhnTszYzW8A4Ej6haqZpmyVoB4UV2qX8GVRGqqNLTeopxu54BPdWA4uyxewhthxNJGVxA7",
  "key11": "2kQZpisebro2CFAP7Q6FBxUhPLYpqGW135yMfKbWV9XGXN76AirGz7d9UN57fRpsV1YSnqwcV8NJm98K5P8FsXmg",
  "key12": "3PW3G498tfNHiGfGiGqFj1bA2Yk4vWDuGdMuSYHJoBPHP2MfsxVKxq52Usor8NpRw3wjfANh7JBcwtVeb9s23MWk",
  "key13": "385o5qY4QV3x2JmuKS1NegbjmjooJhYSf2r9BKahHTH5Sdu8uCKwLuBFWvc2G1dT2Y9drjzozEadKYxqFmxc51Bc",
  "key14": "FivR917mGdj55hTdZRyDHfLEtgwbo6bjKKziVtYF9j7isPRUqWfkwM1pdcQvPt5zQCfTsuZVnjU19cam6DT3LdX",
  "key15": "3JDQ7rTBY4HaZPrXyfZC45gEfCvvL4fv9WRD6JEQFAetJbwcJMqfFhU9yNuakWyiBvosQg68aAEemyfFoXY6qvYu",
  "key16": "5DVQjo9GKByGvVSQwMV4uP3sDKvYE8Kqs8VwbVQr7dJNBkXHkW7VNPDMhGhWNB6svN3g7b3imZFwD37q93GK1DhS",
  "key17": "3RsLbH1JK1RqFAFWZxtx264Guno25TDCupCim8iD2rBSsHjgukVpVf17p86QEtBcUda4Hk7pthZme3X43hQY7jdy",
  "key18": "2p4EgMU6DznE8LadGo9PnYkgfs2z8Jja1ui7SjgAzYYgn2h46asTwWkaW9Y8ogas7BF56bQ4NRSw7G4ybW4owW6D",
  "key19": "2S1XmUXPkxYRHGcMRUTAuaxxqXV5Xgpy1hDFa7pzkVLeTygwP5AK3odAoDtoCakFgPr6utQeJZdHRU2FF3RU3H8G",
  "key20": "5nQPrPt3hD65DLr4YGwWEEXc2Y1R9TdTNPYxo6kwjLAm7UiPhUUCUvXsRHgzUF8RRS3hH1rshD6TWmZCH3A3oZaq",
  "key21": "2TkMAZg1hAF21vgY5q45FnWqbBDLcU7uuVip98CWxGbydGQwbP3grMmBg1AziQifFHZFyFMReYu3opuApk6YSqB2",
  "key22": "2QnibTWtfHj7sXCRR7Naz7xM59ENCL3VJHK2hU9o19HBvApwZAjgaKe5B41i3E9gDhKnWHQkyu5EFbgtqztD29Qp",
  "key23": "49RVhfzfUgwBGFCZNLuUNeit3QRUURmrk9yDi2rBHtE6Fte1yWNt9rmS1XvPNNH7zqreohjgwwLJHpnTNLhwnkxd",
  "key24": "3xsYDo3sYNnt7TemQHBuN7WLqZihgeQBmc3rJES7XfJbB1GrtrziwmdwnANJbJ7q64Y33i4h6iu7211Z5pyMueH9",
  "key25": "4jgz6ittYtGZVSWDahji384Q23G5NLpfdNdgFQUsVdgvZFYp9fMpZzByhyrc7UX4tupWJQ9Xv1Xc6yKhh7bxM7wc",
  "key26": "PnMLB8uuqYu6TMwkw3qTRThXjpCZiYRQqFPUyKpEFSA78eWCJEH53xtvysg3D74d6fUZoRwjvtNvHTXWUzNYcT9",
  "key27": "5JfS2FWafJSQUYJB2ykmp49RZAKTWUUuLhKgk6qAnDzCZewL7FuCgaxE2FH1nBTyStGK4bL2mBK7cEjrTzEWzvRb",
  "key28": "5aAqQdxigRet3Z2RNv5PcoPtGCEzDUmGsVtmE7PqnfwYnqMJsT1hmXNLC51tNHdc3PMSt15CptY3qPUtod1UCXzw",
  "key29": "3KsCUHLteLKEbMrsFcaEMwkiLZFJ5Uh7wLWZtSsV9simGCNYAyg2KE3or8b2xSToHkQL2WzBUErY9NpJLZszZDJB",
  "key30": "5krnvjMKXSNhPRRECUtBw2sS8z8aeK4zuHhnwniANeraJzAzmJfxnUi5oRUQ4jrnRVsimFuLnkH3zPZV7z2UFa1y",
  "key31": "ouMBb82bKkF6XfB2q11yPSwANDeeYhMuQfur55MzbTJLv3JFNYuEgb66Z6481X5EKTrHBfDZDwABg91thR4hpCF",
  "key32": "DsNMyyZqa3knDAZVBUim7NFCfX2V3DZSV3wXjBDZcoe5izGk5bJMy8njSGbJhjvCuEavYoHmpGdB9T2KnSHX6h5",
  "key33": "2xwY11VKSXdDkhzAzu12P9FXaPoEt8MsNDMUcFWy9mbmV9Cryn11gLAMwfYB7S4EHAjFg6Boh8Q6Wrgnkgoy6X32",
  "key34": "2Tkd81ob4p792PHz8XRsPNnbirUDMZnWU8kkBu8iujidegVAdTEbB6ngLYPmjDKiFNHpcSjcNxXV3Bx2ZUtY7hVp",
  "key35": "3K5UzcF4CFK3mx8UZe7GLhecytgsi2m5WancXG3cfhEezHFjWPKSCDJV5uti1GwDNMHR8tno4C9TNLxDmjJvwLT9",
  "key36": "2Fx9MPRYEvvrRHUQVRGSsbJdwhZfpAfsHsv2mzzqG1XRMTSSLedsTBgzUCGqzUwKeVcmpFLWppXPsUH3z9fMTtbA",
  "key37": "2sg5qddAU1TongcL6YDFEqhgvaPuHiqmhZjKaBpiL7kq1vADJb1kNyhjdUyp99H9Y9a87LKDbKY3Q3Pq8W5gYtNr",
  "key38": "2hGk7e6BLk8s26D4AqZYkb1xReecRaDfPvMT9J36tKcZdS7fRV32fAiDV5oGWqAATtp62TDCsq86z7N9XzgHqRUF",
  "key39": "2pTaoJhL4vwKKgZcGC8dcWUfGQt8287JzjM5guK3oUhRt4ewQ8XSDgRjaLhTh9A7nZnANCWEUtYJsri6pYQzs1Bt",
  "key40": "4cUst1DU6YtTScZ9urH84kfK79UYuMr7iEo4QFgK8EeP2Z6SLjsXzMSjguvE6X5MaqyKkaMwchnLZWs2GnNGJJDA",
  "key41": "2aV6wzteX1iriNQwx7bXgPwPU64gM34ErKqnewHcBJ9kowgAAP59fn6D9crvwXYs1U5qVWekSfQfoBHeeEGv6RPw",
  "key42": "2dctgqEzgUJ7RohjUBv1GaSK48LfJEU4FJ2cFAfQMvbDXm3fW2tAFZTsiw7GjK4L7QacjXH6zYGaiBVTAGi3Tjpr",
  "key43": "5F9Rd18ypLw6FwzDiaytqVKBJu3RfPEVpvm8d6axJrBv68mfcSYi8DvyNvkeh65WtHbA1Kyi5keN7HbAhXRaqbKM",
  "key44": "62Z4kprM62t8Uhr9viYwkkkrwmkWqgRbwZi73jiAx8JxY51KkMWY3FyanujtgQNAUtYPhYzj2mWeAgbu8uNKUCoA",
  "key45": "4LaUrjb3mxDJCzGqecg5MvF7HxoDfTDQVe4A12zwrk3JRp5xu69GXE8zZ8LWQR3tDu3zm8vsQ5boxEHpvBUtaXqq",
  "key46": "3GSsbkjyK272pjJNqp9Fx8jgwZtCQVz6UE249kKAdfRhi1qVNJKw5i684G8hWTuN4H7hFuhjfRvFU6dvkzce9FTk",
  "key47": "2p89qRcXmbtDG6yGdfdyGmBsQX8L6QmHqLXZvDabeU5U8LJCZNDYwt1h5Ze5EZvx94bZS1ATh47959WGcxpY4Xzo"
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
