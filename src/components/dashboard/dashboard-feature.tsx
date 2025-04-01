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
    "3btNH2tUW31kf4ymYiDzUqVSXDWKhYuuWXP25Hx8MookMui4xiGEYXxo57pSSuv6JW1CZu1ra3Neb9aaU8LubaYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3jYY3oAYayfLBBV2D4jmhGqxYktAA1L8WbynxgNV8ZAgc58sMvoBJqj4tGJFxQa1ChHvxJt11CabebMHMnxYFT",
  "key1": "644Ud2mZQ8yuUtWwHewBFuP2M7SZnhXq1fHEyh5jU9P7tPvgGSH8deiX93WGWX2962fCzax9Gdcs8iZSYjwGBM9r",
  "key2": "31cC9gE2vm8tjCLTrUWny2VzRcCs7uDz148bcGJTmMT2CEMGVtbqww2dfCWjd8iGLQgbJ4yaU4EdmRSzdx6zMRxX",
  "key3": "5pHfT49KLgxd3EaDgg8DeearNN7NLb7stRdg84PhVo5ghgpxcFuwWVJ56SanAEyJKff6iQv4UnVeBVjFbyi579mr",
  "key4": "taDpjoWTVK88oAmRm8qVqer615quzFRLMYW6kHi61z9yqJFC1DVv2BZh4iT4gb2NcSss9Fhy25AzQcw3XeYqb1f",
  "key5": "3yiff6m6kFwNn22rBRQGxCVVSsohXGqSTWpKyDWyqzQLnpUv4aW1w2z4QBCippEqnGoumkJPi1ECggnFSx2fsD8A",
  "key6": "3docwN9oJzS9zgztrZR6CP8s3UBQ6oc5WjVUSUGMNxqkiSgw9Q6EwwmhCH1G6jdfo22f3Sb2r8MLpzm4iWJh3yCn",
  "key7": "4N3YBNWe5ttjqYhuqBTQuXD3ETMKWUBKnqi6LhxNjKk9UjzuHrbKmp7vTv2wJtgfMr8B7WsiASGpRLUjw7HsKNnJ",
  "key8": "5xEAG8cAPJPfcCuj4vUnoBcyPFT2UxPod587MpkQ52g53TKjskNPa3AoF8DNAraTmmn7iewAVaVNsss574qxvMrJ",
  "key9": "67SonNf5QBFNC14gUH5MkfEFA9ByJbEZq99rpcRL2sE6znXWqhdyr4rM2mbmkuXs5h895nPkBBVoehRLZ8aszoH9",
  "key10": "rpE9gCnYPD4KHUgPJkGom99CkAQDbZ553HyatnGTZw7diD2h6MctqCAJHwAdQk28oMmQko9dezYRH7Kzc4UrB8g",
  "key11": "24aAgN9Pug7L5eMP8vpq1mn7hczW7h6UJze9UHsTLnjrnAqAanr5v5y3r56msNEAGJwtSRkzgr6dpwZoPCtKDUk4",
  "key12": "44adbAf3q38z3i4Zkv96YE7D2haMdaFodswdjNTUfhYJxJ1Gk7wJaDn4RQFsnksVCBxpdwaRkVbFSXF4AUqYht7e",
  "key13": "5CHWMr5hwP62mcYMtJoWMZhbqgKzBJqmfJU4VxKjwqvMh6YX4zPGAaxfxnHzw3PZSckTHhNk6SdNvcB3NZxRpmpG",
  "key14": "5LXtisRfNnFYSjytPT2QZ5Debc4a3hgPmaD5qZPR6tmnwBkwe71759nNEfTwEVWYQ1q4jrhEzwD66wRF64f5pKpY",
  "key15": "2pBBRfcQVhbE23EJbYW2cGcAvFzuUy3zMD9KqYxXShGsoP8YH1cpefhn7pxYPpvrDP8c9JoJWy8EayNhYNmeP8Na",
  "key16": "5Q4QfJB4HPpowwVN5MQP5q7E2uTsyN6wibrXbJB3tW6bSTdJcQwosDBsFwq84i61ms8gFQqSxJAxnyWAasNrRxyU",
  "key17": "2R7gAbu1mgjBKcSLu8JxSvDCpVn6tB3VPDPUyQuEn3YYpSBX9gYsctbb2TX2RSKLH5Sp6AN5S3N47gyJ2YYEMPS",
  "key18": "SFityVwR5Kwt42egti6LE766tu1NaFiLY7EVFJJRpuex3Epxjos1SARatYuK2Ty9xB8JnV6ZFkDuQtCUJ125JKw",
  "key19": "3KcN75mdSFED4GvMCERwuot4Kp7DrxcSNuDpZDasmnyjrJnR7hosyDcnKntQbVggoQoRCYLv3VcF76hdbCJxcKef",
  "key20": "57GCqn7X4NNcxHkHSCzDUW9v3wq6Z8n1DCmGChzGbWV9f4JzG59iRbK7nbnbwswA3Dp4a8eyNPTptY3Z6DLYSXTB",
  "key21": "QSLPqh198jURn25pRtUcCkw8YdifkWddziQjD5oABHXeAdzTRFeaCQEtVBrfjzjeoG57HDsxEAgBk6KYgcbZgHq",
  "key22": "2qH1WCKtpu6646czVQ9cLHQiARAg2mUQ4YEVpTnzp5Lcoxfx1nMUi1iXLLq9A3vwqQzpBomqpXnosngW4zDGe8ot",
  "key23": "3bmBRncg2vGLBu5DEaUWUShH8QJ2Hxexu5DTThZiuZDaee5AiPeMQbC5H1ZN8Q8qH6KPpcYWczU3Z36VgLKeaESs",
  "key24": "4ix1vPFWThsZWe7V6hHort8Jbd6mDoqBvhRnFsvdwhGU98LuGwS5Pyox7ih6f4sKSSADXu7jDv1HL2tPWwnmd5RK",
  "key25": "3kuHLpVHXv4X1zYjgB14BthW875jP6YCmH1V4fC6yMXDpVfWiaabj4cnHNJ6E8CFLsjNDWZTiVex5tzQ7QZU2tR6",
  "key26": "3UiFWrmEZhurKT5MyAJMeCKk8WXYop4e7jQPkM15Eh1RRUffPV8haWjoM2jXWngSq2CsNcufDmcbobjMeAHvVgJf",
  "key27": "3zegDhENcgmDQHHgna2hoMZBJ2opacBBd1cKCjCmARHWUuPgi84udN1GAgqTTAYBPG7c6YJT1j2sRNUTF8Ztt11p",
  "key28": "4fjBznVXHJ5HxdE5gaPmRonuFMW4p7mmAMZdQL67WJFYZEWcMUci8f3G9PybjGzPBErqZJDUnCsnesLeDsFLsJV1",
  "key29": "2oYjuiFHZRdjesahKxMP3DxdAHqgTCEFYJrtUDaE5wxr9nAK61LDCZqTCJn9coABMqhbyqgy2UVF9rU7WY7xAqQW",
  "key30": "648wrCQ1ZWnFSS4TzCuyjyLQvzSWVTxxUyehwQmHyJSam3ksSrCeyub649PVkQpixewbseVTzvPUiPZa1btht9WH",
  "key31": "3LS4Lz39u8WF2ut6pbwBTxJMNWh1fkjLuS5JTyRd8T6GKTUfSDp3wptM2hN3tebFpC7e4yr2osa7WfSEwJcTwKCL",
  "key32": "2wEnwtvZbgcL1fZXTK7bBRpmTD5aQ73wW1o2JwW4eVbYBVa23hcdiZse3QD8MuUfCvDZWbnAHd1mf1DFwE2GyjZ4",
  "key33": "Z6Mm3NDzja2C9i8XcmHhtzB9zBVD5dDRzZc98bDLPdKrjSyG7AUG7GovdHbq3FHFUNrKBNA4wZGCsj56zdzzK3g",
  "key34": "58tL3YWD4TzsasUA2UppSKfR4J1VdpQscUhezjyPSY96XvSSXMzGdnBjYJshidivpDthSM8ffEEYp4oPN7UDSFXQ",
  "key35": "43L5qrG6HfbugdTttG2mze4dJRbDx8sW2KDzpku2AEWusLuLfm9FboGzavSveky4Cs66a9Cb825fyecUJGeSiVpG",
  "key36": "xM7D6B2pfyUPLDwQ9YAFgLvjiSkVX3i5J91rwaxqppd4dKzFT1Er5SVqFQyLs8XMC4fYbRfDFAbTjR7D6ArQzD7"
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
