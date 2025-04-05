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
    "NKR8Hpfa2gYhiqrfk7J1ENew1bEW2zUfymevtmYjhJwW9yM57DpYyVqBdoo4XytrPshQHJeFKqNfRaceDmCcjhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSnApUhDKPjFJAwb6zAjQUzzHPtyWyV9HLXUp2FjjTaYS1NyLPWiy6NGehMMGMgxsB1ioWu5AmQZjyCVCYkEY5u",
  "key1": "4HaavGPrVyYG8X5a4GNtLjtEDQDnP4pyFxJWgVsvuHzPL84JDAtFaaz82PhUMvHRoZ3xTCvEA8q4A6rH1yMTXvbW",
  "key2": "2xPShZCTeFJrffpiRQeQ6aQiAq2Yc4w1Y5USTXpN465H2oDmDn2Z2t4Ca3Qvis4twSdSZWAcd8qezyjgmSi8FD6V",
  "key3": "3NPgrrQmyB3adRDxhXDvAzDnxjmzhw31wMYQ8ZjLdqpX8aXoKCjHeKfWt6p93BK4BoadhPGc9mwrQqCjQ9sLGDp6",
  "key4": "1Q47XWC3f7fpsveCQwXzS3Mhk9Z1HSDNLnxtbfPCUkwTgA8kVZSB3oW5XapLRufJXCFbmSoA6Z9LVjcEuUt5FQh",
  "key5": "2kPWp8qkpQZxz7vjTUUnGsRFL2getY3y3DzyRKPYp8MAp4WdgRiCexBPV9581W5ztSXYx5votnDPeDwv9xrsGh2H",
  "key6": "3HD4o8SAds9haEXPttwpsrw65RPip2FMzJcNafBpx7DyKZJyNunFxUsDLqwvutXZJVz2oS92SYBJkpXyHCtSdwwa",
  "key7": "5ub8NXjs9mvaDuZFvHFw86Ejm4XzZv3D8ELhzRkKpXKHr1nvFi6mHEPPxADpow9EmbcYyL9QDqx68hE8dCJtw2C5",
  "key8": "3NVnFAhgPhxuompxKU5dxhLarcZZhUejoBGZC4GUHGytLqLQBbH1UJiZ5qHyBkDG2nyymQeHvDh6zxpZ6fxTxKoG",
  "key9": "23qUNMZ9ZgRzsiVP82oH3z2TustnwGxcLfpVR5mEodfu5DVpLhYhwR2zdwxQXqdmXCLo8ByQb22uB8C1eP8CECVi",
  "key10": "5J9q3kQ9sffD1gz2YhbtmQYF63GtZDNFzfuqPyZqn7FMRXSF7akwwKqCS7SrfUg4iQxxJhHn76nRp9r26mMB4ZDG",
  "key11": "3LQeLFAUyaJq52bzQhDMstUbHtYjeAE3ttfV6zBuRceCRZCBcwoacCbjMpK1q3if2NY7Vd5rwfy3sF4Wxnbnw9i8",
  "key12": "3UmWyLD9dxJBCrUWSnxRri1YbHCixFPAbjtU5Pdf71im7HCgbBPggksS5DKZNmgrMoN9zUR7C85Ze4kgiwEGLVyV",
  "key13": "3qDTdpm27yZZWTKBrPd8RfgDoTNeTzFvkimpLqNbbw8skqfh95si26uGNmtvTWzt8k9699sqAZYUCDr7fzEKz3je",
  "key14": "2YLq8MrnNxXXy1WCrEALchS4NnnC6rRHTgyeAnbASp3SeZJamqtSWWj95WavzMSRBrMXvj3iuAJv2W3xfqXkDJxZ",
  "key15": "321TpvHMQu2oUshyc5BmdNgBwDgH4S4w7Rr8emKr2TeWc9fgTCLPnWYvqjbe4ghYrExThHNrcHKxW8VDxL9qJbiP",
  "key16": "56s8ZRsAaLCLfaBDrNdfLP7Pg3knusyzew2Wf5SgFWRRhgDzdsC7BY5UMF4aWjQkPYHdBqfUhUDSuWFqMCJ4Uzqt",
  "key17": "24a2viAKHsv6drgjXhTaBfReUTCZucRfuw5akCSQDi3YnANKiUxTGBnvPsPqjZNUFAiKKGFzBKa1QFAbU8axAv52",
  "key18": "63gnnoUf1E1YmSCQFxMTTiWbY8S7Egp6hju7AppYqwopGZ3171xjDJLhWHF5cKiTgf1a5ntf7CH6hCK1AyNTcMzx",
  "key19": "ZK8dHEfnXMG5KBTDR5EYU16G7RqnSi5R2n8XdJmQdpUQ5ZXd1GeMjju2R6g5Hztd1VSYUEMnEbMuiQq9eSKR5U5",
  "key20": "FR9bQixYNb8tTPh59cHiC734FBSrtMrazNtYmkh362y2HoJ5YFMhdqLGEFDqSUr6eAnMMXxKT1ieXHL6nxxd12U",
  "key21": "4wce1VdPMRBVgfiTniDg79NN9jrRHukG1tnJmRNNgAHXtE7Dwhexx4EqaCULQEgTMeWrPN2bFYykakQJ7H7YBqr2",
  "key22": "4V6cG1e9FVVypX8SFSATEMGFVsHk93fnfNtv4GqDP9TyP9yGXPQSoCmTY23Yd6o2PNmtpz5KiPuaPbCVLbqsasRF",
  "key23": "SkV9qjm9GddJRZLHwaT3ESmrusSrcpcK19PgmG4MCq2bUtbNsQtuBD4x8BaXGwhehBPV54hdDVmAeJwqTzLzJcm",
  "key24": "5MDb2TizzP4R1Q28dUehr5xh89bwy992eoobX3tx7QvxhzZvAG1Xdi5TabC8tqELydtWoeW5BEVHW6kGGhn5k6VR",
  "key25": "4jLo5VGNd9caN9vmbXU1QvLb8mBTMx8TgPrgJJTkTRiFR4a2HW3YG1LTAfLme5hhAY1cXsLvWGhmpLfc3XrUSkR9",
  "key26": "iLu5paFz5ow5dYbkq7Dzs2NgV57Z4emehcWwmSDBBqjeGGJTwJssiFxkza6tB8LXZxAjRiFsWhyuScgfeE8sTUz",
  "key27": "5HvjEZLNUEJBW8Z8UsMdApZk2h84Lis7owjZVHrk6iERHYrSKKDBqDEMoAhCb5YRZwfXnwzBXQKRW7uAMDpdZ8ei",
  "key28": "kKG5bw32DqSy2bUD9wtpMREgotwLxzSF96uuv7yonMG9aogSnFgVQWRAfyQNLDGRApa4S9G8Lbumfzeq8UNyUsY",
  "key29": "2QQKjNNhbxuem5qb38cutxAxknWCgH6MEJPBocuShbtuVVrzh8NqNZhmEFpdgMQyGeApSn1QNXRiMpr8tH5JgUyN",
  "key30": "4vf4qd2KaE5YWR1KSgMSFcQdqLbYPKetXtRBKfh9WiwueJ46u7qsKsoJLPdTjwVVht6rw3yGutsKPvAfE5SyjhxC",
  "key31": "2L4ZKRaXQaLU9JgXvn9GhSeDWEMEXLpHGWRnmEdDT2f8Atwxm2GiircEP2rJkBjUuHTXL9LewzGW7r6kbVNzMk8V",
  "key32": "pHNK8xJjHr1kAFuH5vN7srnJoRcAevLrkDYSzncG3FSPsJwM2dBQbCvvNia6y9UJZeUexSDfE1z98VGg9rmu9gB",
  "key33": "vxQS59dt1LbcvMYEbfydcaJHH678mFb88EGDJyyhqQYyfTYmq8spmbwr54j8dVBakZY6Y5AWUd5Rj87wGY8AEEZ",
  "key34": "gZe2yVF6uzusPuSumppcFZFoxSFvdhX1kMa5UN9UiFahGSAHP93EfchR9geBZwbaoDpj1nAcsKooYMcR3doZQbT",
  "key35": "2X7Uuy7EXezeiRA4JX6TsPiwPcUq5xrHEtAQTNbCUrTkL4SgLSnGicSQh9nZmKs1ej6FnGw8Bz3VE4ER7yN3jVLb",
  "key36": "4MJfyison7WTgNJPzcNG1foNtUKU3kJ7c4LQszae9Vu6w5vpYQsgdCVjDDsQpBwPxfqgVAhoPd8q8mkYP5GySkW",
  "key37": "3mVnidoZZ5MVDk7SVp4MzL7y7RhJwEQmCYcxmmwXtADHhUNxL12xs1jh1pz3g3vnD7bi2bBdBaQiG7NB9hYxEZ2k",
  "key38": "4txSesvW3PUrh4dBobCEmcACMkCsKgzNg3mNSiwU8mZTRQR2UtoiALMzKnJH67b1tGZU2gV3Hwe67aL69VjLd6v5",
  "key39": "5Km7qiWD5P8k1LEC3bd1CUbQzf5inxjd8zA5WiLPxqhYm65tfbvkJ7uA2kyfqydgyPxBwMQLuMo56pYLoGWRKcsX",
  "key40": "4w8nQVe9z8FSGihbjWEezbJd2CeWEEnVMfm4DcXQUQid9zSVCpwqNq9UiAHz7V8Bsix9XCDRrsCoNvPJHrbpHrGc",
  "key41": "4HMcupefJZZ5zuJKCgXdaecxFjRGgto27g9L8e79v9pDPFyUE7cEV5krGV8fecUoLyRnbX3CsWydAPTH4yzUgKr9",
  "key42": "3w36iknDLrShafwosjTroGyezWpQ2kubC8QjkAaEze2breSiDLAKvCtg7zA9hjF3WRZzzhuU5xNufekbFtaeDMfr",
  "key43": "3xAjMgcPfopKfuw7zv3tQKvS3pAKxAh3ngTkF1H7qse7BiDLJ46XgB6B1eHwichn1j9ud6QoSyjRZ5P2QPmuEU67",
  "key44": "2zAzy6n9N3H3Pc1gHNaWYdjLD9modCL1BbjAsZru1nD7jvUeyz1QK3s2V7GPEctcNQx5xZQB13bcc5yfHw7jaynM"
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
