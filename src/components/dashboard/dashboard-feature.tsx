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
    "5nyeyArEvg6GVbhonrW1mJA7Hu3jGaCCmCGiDjZVSAG4bXDe6nNmk1qJENxvwysxWCR7ip7xLF6TKqzgZUJxNAFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BKZBBWDd7ygdEZfAafYeHwqTQB7591Hg8iJ8dizGTdc7zMrn9cEJb7tVjtsT5mSPKBkAPatxs51GdPGiHfFwTrb",
  "key1": "4EWxRUKw53uWSYDgkvwaqHwg7eYTiBJhYS8MD6LPppWspKTbd1N1Mm3AQedSMmomUKgEUY7mJC9qSWVxsX2ZzjRW",
  "key2": "3N4SCGbWboGA8HGyE9CiQjaitdyXMPops1qCmUzsxuwgUCSJKdtQRUV9bQzyfqEsf1SSGfvzKhLL4L3RaSzW9FvF",
  "key3": "5LHD1gVZYXU7oGr2mFSAiGHqF7UmjTBW7DrivNC6wdFCzsyM8gQD58KkC9QsNcDsWHAv4hWy9J2NQAq8dtXFgA11",
  "key4": "F2X3CFG7VjSZdho66k1TSCi4A3BBTADHWvWsP4kG2ckNFNfFjYUcy1SZNZijPbYJWSaCGqh5utRAZPFivNPsHKS",
  "key5": "5LQGDRf6UK7Xr6pDrdpyPZnR48CqZqvY8sAsLAeCxMuqbRxpHxSeJJWToNeBofDWneDXfPEaQwVtMjtP8S8hMzFc",
  "key6": "3fT1j4GRgaERNQYbw3a3Pe8L3m3zNr2xmXWyUmBh3q2ACH8pLRu1hmRutsaW1AGAgnagQD8UcKAj16jxuQuAK7qK",
  "key7": "3tL6QV4cTSh4E7cvk6wHMPvxoW7rdTTmqqvTN9H3q3snkEYT6c9dSGG6JpHWSKQRL5pW9YTJUGnHApRBDR3yymQY",
  "key8": "3RtkeQwftrBLoa8ZmTQgD1d9HHMkfGrYRLVqHww4mnmogeXNxkHjfpAepAHEURD385TPNw78KHumEqDVc3mkfTkW",
  "key9": "3rLJoo3c5g5ibkkA536bWzkhEoshTCnCoi7Sty9RJfVcawdFigsYZXQ1MgaG3LoiqmZBiKLxeSQt2bNLmRXKvT1p",
  "key10": "5hihNfyG1feJnJBRkf1JfK7CBQaaga9hHQRg2cNPZzLZCa4YEGW34YuMdY3TvjwdqZyk9kQQcG8wDq4rfTfvLUSr",
  "key11": "33ZKijxVKXi2cRkvMxhzTQuhozjiaTZbeEbyoSvv6nMU9LJNCXdgLkgNMdXepZRXxKMEYWBaLQZ8xXsP6mtEJjTw",
  "key12": "467GCiVksZFxebmXSefRf2D8j35STDduxqV8MJQhxC55L2Ro2Ji4tqwMiUJAjssXVd47YZcjVh8EbD62BGeZapyV",
  "key13": "4SSZgxndHSKh3FuyknonGJKcu8zDBBapxGd9fmAdAPU3pX25ah348pBax13ETkyAa84ge5n3t7txQKwBQu9yfgNp",
  "key14": "4MZgi74czCBfLJWMVVTL4fNyjHjoMM2aG2BuVp9XbLvAfEPtyWH9PnuLEK9DCQaSuVp7QGAtrcud6ZsAeAMHwXqp",
  "key15": "3gVXovZtKqyXsAQv1qLNBqqsBDN4vSVkSnrGUS2oULvHLMmByGsTHfe5FjNqBwLH13Xn6PBx6UVyhzGYVMbbpysU",
  "key16": "eqtob9cZU3ywTz6aguRkHV1Fk1CyS5MqEVUiqJ6fFP3a1KBLuzXWD54zpd28rVXzpCe5pwsUBCntQzGWznZYyk4",
  "key17": "4LL1ZJfJpK1ck8FKHVrp7vaaDtCuBSCGpw8h5zKbcK5SNjfmZDj9AHbLU4hWtM1oqdPH1dd96i4mVJRN422fkpfv",
  "key18": "4u4d4wzYrWaiZ9hxpLqdzmMYSjkPAxExbak7jUrohbPdoxXu8QsEDQ3og1z2jbVqE6tPJA56sGFXfXmUuax7mHGd",
  "key19": "3jYMq8ceMKhJBs1tLHGgRYMz8LBV9GD3rgLRzMsRXLGkB9UhdiwvbQRoAzjD3Q896KKExWhmbGqw3o2wbGxMso6v",
  "key20": "2KGYvqQWJVbr7uBSDZNPZyXm1hZeVP3tsQvEk9UaT22gQ3dtmNkFo1PYmB53L9nDKdyL5nJuroVN9CwkNviZVcDF",
  "key21": "WbkR16JzNjCCqAiSY95W73t8XRfkU1WAB9btZA5Xu7zh5bMRVTijFyzR2iAb5ja4eVu2p9avhY4YJkJCi5KeWNc",
  "key22": "3b47gHxCmiqu6CrnaKjbiGdN9Lhpoz8cFYSjzeh3xZazapu6X6SzCjzpeHctN8GEqTRaB4DmumHHc7mefBRNVV6S",
  "key23": "3AXADgpiYL5h4po3fMi7biHx4m5EG3DWqhY7fNrfVg96TudAmAaUpjP6AaU1CdtJMaQGRyoEcTVPz1Rt7WJ3SZv4",
  "key24": "3V6twD2mGXHNsSH1MCCF3iCTeB5mYE1uxWYTW8g3iT7iEuhphZsX36z6tvFMcPmNGxfrWYcRNATCEvoypq1v9i2C",
  "key25": "42HUfMaLgL3ea3jh2qhMajGMKhtEijY2HxUzHJ2VyobQgeu8mbA8FpbrdM7K3jjQeKJjeEh7T54NcBhjuW5FsxWi",
  "key26": "3JNrVZWnmvNBupzNuS356tGYSNHxER3K3aPi5d4TozYo3CNXFnUiURMAc3c6wamYDhuFKtUEwAWjLMyxDv94RLkt",
  "key27": "3km7JcSuPZRN2huMHUk9uNea217PtzitiCuceoNGHs7WeohugNrgNWZmsCmSNxD4xV7A7u7StdaU4UNyxGpCYNRe",
  "key28": "4jjpQ7TFM3Kg8cFrmUEDumgrwM1F32TSbgSG3873YkZY3RKJmy8RpsDZypTRvcJfnD2d2xxSooDi4jUbFnZspkD6",
  "key29": "2d6ZdMY3ptSTxSxCW3YijtT6Heiz9XGi3duqKcE8CixHazSCHvxffNBrV5az7LwzCsxCn9c4XtWogMQrzou3rfGa",
  "key30": "3NPsKZx3QJpZQgR9CmMKS3rLCeLxziniBkziEMpDStserDc6teouYRrn2tQzHBGQKy2sJ19LJFG25YhzV8fLqkcj",
  "key31": "3e68ow8Ftw2vS9vMZUq3NHBPR6Gn3TfdMQQgRoRiQKQMuJk8xsDFNZoM1RH7iEAxk8uXuaixKGHkYc3u6F374BW8",
  "key32": "oNFcGZW5tvrvrEf2EG2GwdF82zSbHoucZVhdXt49HLa1SGd8JqxMerkoTPTSV2YFf3xQeTtx2zij7N8SRW33bUA",
  "key33": "5wBxk6ud1r1dBLHcZqBqeuuexr4Jq3SAYm1XCAUgrwu6sEPcyw9nkTjAwpUG7YfdfKLkp6ZgR9S5DHFEthkMv61w"
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
