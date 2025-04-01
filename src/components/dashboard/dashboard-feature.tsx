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
    "3hCwFVj9qkQTkg2KNE1mJxeVCFRLCZj35D6UuSN4afHb1Kxdsa8xMTvB5VW6cvKxGN7R5fAX62cAYrKqfKjMPJBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYPhyVyKY7YWwfCJXtVTeyfeRQcFP4uTxKBfEj7u2fiuzR6kAdsHqt7dRbYNJdHSzPKagFgxbuxa7p2vtPhApRn",
  "key1": "2qB39ckMzjXaLQfY6xDURo8JigT3YwbBCFRcF1cyhfGEsnyhsnUHY1JJQPC4Eiw2jdqZF9ii4Xp8sAehxNvdKmKe",
  "key2": "2n5pCBRxm9AJZbqJVXt3cgobJKyT5arn3MZRyayFK69vjT6syoSZQG2e1sg9PGgnnViRRJMjchja11fy5aW4NUTa",
  "key3": "5t98YSDbZUMR7Ar472YZKdxBgSi6Bf3ZXDo6TdtduUBFRWNxPx6TaUSRbsVi3eNfS8i1jh5ZWvL9zG5SqE1sCyd3",
  "key4": "4W2Mjq1HWz4d7JxXc8w1TwoWKzL5sebaEG5j8cUsaNgKRJu37BCgM54fsve1FYCeFEaGRku2oL6bRLAHuZqGp1XV",
  "key5": "4tjbdTdbCdp8sF8J4Na57R7dFFGXesu2NrnvG2zTf5EXzhMFT1qgXup5UP8HqgM9GYKEB9L2eCRxwxgtUmF7PcBe",
  "key6": "2djkHa81PeEYXpCeYAKreS9ac4PUQQt8GsRSjwrBwrTtX2QBKDXKNU1mekXrPde1hJmZxZM9SE1pxU8XEWRhd6aQ",
  "key7": "47yin1fyy9sVuSydeuPzj36XDfWRc4V63WPkFXiTnMux5mBpSa9u3CBKp6CixDfbqZTFMbYxW6Vx437psVo7YdbC",
  "key8": "4cN5dFikrcZu9X986fX2AfsJ73oB48U58y7UDhDX352o5i28RmRdFsCQkZGrKnrDTLFTLtH5uxXrzARTjNqjRdm4",
  "key9": "hcmT1GskmhjnGVLJn15Wry6AU3zRreDpZ6ASX2g3WkVV6zKT2qyqieBWZ19c8s4wh89zEgL5j8Ynk2L8bskNck2",
  "key10": "J25LTZQRYxR3MJrDuUgSRstcgEo5uE9qHbceKBxyq1MC94FVygCMA1LwMKquYb6NufwNWqWwvXPCWsPbHucuVCL",
  "key11": "2oDSvbC1XLBfrQBU6icB3mxaHhixxCYiLw8wp6MUB4JeHiBdre77vQTzM8xWb2jUqfFDYxCqfqGBWRkTbLyUeet7",
  "key12": "YjCRZufctBA2gwGAQAhF6xpNtb18Km2sZxrnx8vdcLMCuTjPr65bEf6Va7F8BkMFDj4CccUoGC63fe69RHpWxKg",
  "key13": "5nkb4jFxsoPiZpTX2otdTo2bXEjLnxZdE8wUiC8ztpEMyWp8BbXwhxcWxwuC67Y4TmqDyzjDrfkHpbWjuAKZ2fEu",
  "key14": "TpNTXULkJXfM3qqpP57ZgR5KMg4QdZXTad6Zmo9dNT6jDv7TgataZbPcBEG17847JESEhBeMrP5H2m5Ms5gYBMU",
  "key15": "4mnHKJhTw1Q5AQMiASQsSxAbuYHEThihsqYkTXunbggNPPrLmkMtnF7RWjpy8wbGZXMUySk8i8FRqg3CHhgRMnDK",
  "key16": "2FTEnYHukKZrMSuaHwokXq6dFmRik4TdoLVnUsDH7sLitYo2RkP4RsNSWjHVgJL3zAMDratSwGMtsxRXhLwK4UDh",
  "key17": "5vsiuAabPhThZshErBS3jJw3z2uNqmFn8jRkWkZnLwnSqcCdXdtXj1ESnAQp9j1tBx7nTrFLoxV3euLaAzPGuNEk",
  "key18": "2nbtoARZbq1k6ruQSkfjaSRAyJdvtw6S8fenhf7EJK7i5ei5zPddjRUVpyVdqonohUpmWrLCXmJULq9zj388FS8s",
  "key19": "3EZ9Qh1CaABu9XZHpEdTkAjSZzqaC7jfGMQqno9MxWh2Q3D7DwepLYGKAronzozfcadzhc6nS49TgE8Qh359GSB8",
  "key20": "3iVidwzFRvWRoSDF76xzvf2Uq9omV79sttbnMQRPuU4SKpzMC2uK1hV8FGdJJitsnVUVG1deTSCqnbRdiUTV9TUh",
  "key21": "5EGpiW8uJvfDad5YTWyXv28GFoJgXLhJrmmHpk64cVj6z5vnWQVcNe9wThDthRbPCv4A5goZzG7yRDmonv4ngxRh",
  "key22": "4jGTbKhAzKVKG6TRMCDwHPtxNzxgS6RaYDJQYwiviWJU8Sw48m5TczgtMuf9TSjWfnisfRixms9ejbwFfv1Ebmg8",
  "key23": "595rTD5dugL8wT4WhQCU9LFT7xNHe8ifoxqMvATHHxno4KQ8mN2dAKPb3bJiQBB2zM8azLMVV8zT2SSt9SH7aW4V",
  "key24": "4jvea549G811aiMdud7zPb13JMw1e3RtiLWp3GuRKEFSxd9avzew1493cG3XQUUpgjneX9KdweMFxLARhR92sFv",
  "key25": "3p4KX4WPMnAmQhdG6KE6AinAJTYsrcLowCromaxxNhfoGe9EgvSzH5CAKmeiyYdmJRmwShV4JvnXNNhEojLbtge1",
  "key26": "3EtejiUpbLuXTEWCi1s47VTBmHxbjEfNussQGffMXzmvU1N4TJqSvWNCMy3FA5PAtMssUqfu62wZL2q29vZgo38F",
  "key27": "3E9JvJGcHUzXH61UBnxMHYiMNWHEaVsx7Gz866ZNSscFmeG1oFkEi8wB6S94qqzH1tugDQ1Fgo3GXH3jfJKJCFLY",
  "key28": "43tcCRdjegdbU74YfNsQ7Bnu1sN28mJT29hve8uCNth69PMd59xU9UJ35qhmDx28W9yNBupjQePXb3qmfDKr5UbQ",
  "key29": "43DLZRgrUZHMh8TiDzi8GLZahfJ2Hv5qoEipNhTdNaFhZPrWXQK5nupM3vdZcXkrPVRcKdcSGqsFHp2YWh4M8sbV",
  "key30": "2W5MWXjKxf41Tu2YkvbzYEyg9sAnrWNZaG5cUgw3NQYfZV6oLwiLUydFATQVTrBY1X2DXVQxTfrw715423tMjN2j",
  "key31": "wTcoDVCw7pdwzF8yrSQX9UU7NTTcLSohqePhSnvt6iqst9y3dK24yas6hkdyGPz2o4kXZ7yayJMioKPVUvSGHfM",
  "key32": "3FRUY4DerpbgshbK6JgJ3r7YPYA61cu8MRy3FCzSmKNWJ9RGc8QuhBmAjD2yrDNG4czUp3i4iupvHsSBhw3rguyF",
  "key33": "5JURa4aZM4ZQbs1JJkkB69m6T3MoaS6dNSQCLDhV1x6E7nWY2bLi6gZu5CF26iM7VGFyQdwqV7kLU8T1Y2XJqici",
  "key34": "2y5e5nt13ay4FZkqFqpLGkGMgnRG59PoUSRQLiTNYpdYRQu5VW5dJWLidf7YmQktUP9TT6uge2AvwZnCRBqsZQ59",
  "key35": "5ZDwfRMN3tVM7XMTNZRYM9x9oj4VmnZYVQ5ZFxoCA3hTgqksk1biZEPaBh6JGWsW4MBEWuzDLGADEjg32iHNjFnZ",
  "key36": "4tcd1BnEGvnKxynfKGnYKiJ4hzrH9vQQacr154xMUb4ykR9DWCoA9nz4ctcRbzGAjcswYKP4dFpyJyvBqEjKz9kL",
  "key37": "5AA67MRyuYaS97xP4y1rcaB6AfYG9C3goeGVbcZPLUk9F53PcSXMNg7kreKcioA3WCXRekkbxpyAgh5KUNQTrBvZ",
  "key38": "HjeCsyfaboW1qbKYZydN519NP1V4vMyeZLGYBn9LQSpjYsYW4GQGTm3WvWRUyYqfxJfuhVxoN7KeqpnUFfFN7k6",
  "key39": "4KBVcZXvbfHuHi3sKdG6JazYSr3uhhkoa2rWVFKfq6JRZkJENir1nqnPrjj6Dbxfwx6GbkZdASiABq4rVjGbPX3o",
  "key40": "5LYkjU8oGnaXyrfqkXZJgS2phnf3NPmCnF5LRmXW657dARFaR7LL6pC7taETQJR5bkq5oGbP7srV8UZ6hyiR8XCi",
  "key41": "4Bh9opqKWMiZxTx2ZyFjmk78ieonmehnubjspy7JpvjcVEW5nEHBwb9PeNBfaGPiqUibvrPcozLxmWHb3cTceiVd",
  "key42": "4skyhFHWm64PS6ZbqmEDnmHDSpQqSYpvrtDFRPy3YMbhv11MjfbyoNTqVuXQ6rZJVTU17hsQ65qybTC4QqDogZuk",
  "key43": "5y54aFm2QAkaYZ1GGKF69qwU4Q5GoBhmZxqmrYNR71bREP4YNGy3Us1Ww4QoPEJC1zc9zY46VHtF6TSgmShECdMh",
  "key44": "52Ute7Tq7ask9i1bfcRKrBcjrf9TasHMpdm6Rf36mn2WLQHcyG9C5N94JSZxDw2sc7HcmCmgCo1zE2k9o4RiyfJL"
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
