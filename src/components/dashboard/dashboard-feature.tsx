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
    "DXj41A9Szr1zmhJNtQuZEfvGrKB5N9E4vGr8ffibiW6PretK6BPGJ1eSZc7dhe678pQkpz93qRXxhgyAkw5WeE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUWu4UFkM5PXQZftEsyvWzRUHfPmXYh6j7obDVV6yypPeaW6gkc6w1PfV6otjsxUMQ6qPzeR1edM7G47QqL8VpR",
  "key1": "4da9WzRitD2Gwo5iL86TuBu14hPdPqYonbr56XgJE5ZZ8S7cQHVVC2TRPq5wLhjz4BCs3Y74NFGz5kRmytJgiAVR",
  "key2": "5xog5PMP6BSP8NudtJqYnQtdQcPaDsTzECG4uXGExoi5vyN5yx6JmyLBGS6sBkQUsuULe4RiMMSX6Gvj1dJekxic",
  "key3": "23MBnyiqsBuUA8MEoCHyuzYhQ9JQtsYkTczVhqJjyPbxQ6KjKRWZjyvySYnGwHfQd3dz3R9Pk7xUCJNqEAs5wm2E",
  "key4": "4UfDKwoRAnfisAZ47iybQ3xg27kdCLFuo8zpjuWjN6fadKxEqjprdGmmL2RwzDB2npiK6E3L3UgZ7e3MkwghdWRE",
  "key5": "2gzospf33h1roNJS9r5PvpJkxuh786ffvcDojXZNiYguyyvNoMCSrSnKHya7tcg6SSQcsGvfD1LUhsQ2fevWXkWD",
  "key6": "665Qt8shangA6jNqLFNuxtW3EzwpqcbiCbn8z6Vr6pYSXkpFp91mYm3KuJnCiAWUA5VMkAJbaSdfRKQQRZT6jcPy",
  "key7": "4nmREczdx6W8BQCCoUwRYRuemjxmnaTEPEdkc9xVs9RnDxBz1qdgQuAToxUHr51EHqsce5uBTeh2qXxAMtVEgHDL",
  "key8": "5D1Veomw541PpW38FAncAXN3jrSD15pvXu4bFKXkSJRozUW6Qke1G2Lo5aoBm5hGzUfrWcU15vYTjb8Z6ppBejFg",
  "key9": "57CdipV5YhFBK38kYyDsQrmKLjqBVP3yQA185U5cxuobXPfuCB5WzWyRhjxjrLXUYEEJWPFu78P5YhwooaXJv3qE",
  "key10": "5vVzqFkdtb8kXAoUsEwPpmZfPoC81bLTXBSvkb14LzvtwVv3kbhykrjY67KG67DjyL519EEXtwbnwLgYaaDNR6tU",
  "key11": "61utuT2cPLa4wZspLM22pq8zXp72nsgY6Lf6bBJnGQVExHgFx6RB51aLcJi6uo3AeDpGsqGvDJREgM9EN9Wb4J2A",
  "key12": "yHC1sQDzY9CLDUKGYEFJy4GXzZjveoM257UyS5vhXsddk5eKQZQFccPzgTiK2xzghK49XcwaxJKaSpcmE4jznPv",
  "key13": "NSntVq3VSfdGxtezKewsgLYb6aMz4v7YcV1yxS4XcAp9m2c87MqKTkYFsGG8zshCmoe5ww3JEPexkfPBYBQtjkj",
  "key14": "2QCe4fgxprLhZHGZnYaeVR83AsHvixhjw4VYQf7J6rLRbjbh2GB95q4TbBZL9AcQZoZEnDymM1AGWs2DXD8kjRGV",
  "key15": "3uXn479E7a4XBJmdC96a8ehBuwDrw1wPXvvVu8Vu5BNSa7p4ghLbRupCTfR7SnyNhuktUgbehTUytquCZJ9ZADFd",
  "key16": "2ijTeCB8x18UgRUwjYEQNRui1MKDJkUTRCvPDg6WMNMEQFRVXrYSpgjS838qX9ax4FcTmkiTfyPStx7mr3SJo8Bj",
  "key17": "2FKLvqSWGmfzcRVGWVgVduSgi9nhdVCGRQYS2RFq5jLNoXSrsCmC375ZpbygTpx6fea5Kux56q76LxurpTCjSvTh",
  "key18": "2jGUKxguTJ6YkDtZhJf2uWV8Dk9U58cKdoUorDjGUDn3hnGVx3xZdp9gcuhnS6xN6gtveUxcV4oiBStbKD9qjDTB",
  "key19": "giyXdaJ5dxhupLqwvtmfC2B456UBd1TCndEwpXHkhXwAbAxYiATYYuEnMsdRiJjDkHZChgcfNVmSST8dVu7x78Y",
  "key20": "5bcnEoGgD9ZpRkSxkBXuLf2sY7bZ1w3oASmv4nKJAm7jwHZFmM54ZUFZgmtut3EssjxqCZqevAb5L1NgyNPVddmR",
  "key21": "43f9WCjyE9D3CUgxz4FPu5knvJpvEzR6FJwRJCD57FYztKXa319MMjNpTds1VjsxensBo9RGhrvguRiyGxPDw5oW",
  "key22": "2tgkstWXLwfAPA82fpYTMQ961b5k2fDCSGLtKgErMqXewuGhuUL8CJbmtsxrb1df1LSGvxYtddmdjQo1hssD7FQ7",
  "key23": "31c5rvAHnFGJh4Y1kcxbFq8A7GVvP3i7VCysWhifv7aTm2HrhfJeyC3QBV2u8C3nCL4xuwzQ7eZVupqw4qtdeFUF",
  "key24": "4kMaH7zXESBLLR1JLGfpjrxCy8TBmgh3USotEappQtdnxBqpgu5Abb8SEafPVKcdHoztFxAnesPMwZgpbjsDxYQo",
  "key25": "kkXt16Lfuc3o3pU9e9TckkC9Q7JEtihAHa1iDfsgMidYbZmTG1PhJntNW7DMpMXEvT2TxfngRqWzRsD6yUfqJr2",
  "key26": "6ZFXFvfH6zaFg5cchd1k4UUSqT3KM85eYY9nHaMDgrv99oYuU2khrenRwhn48hAm9YNZXnhWoQqxERSEteoXATk",
  "key27": "5PoAh7FQenjcfzG4uGK6dKKPNaehXzbGJmGe7Bby2mxiJc4dmRmr4MhAAhCHNcCXf5evHjiL16o2kYoZYKHVAvXD",
  "key28": "3uMWqVTVFMJbnuXeCX2WWKwFW7YWtiYQRKZhAigXwTaghQgJzPShsEHsWhBXYe1uKHDw6Qbsmx7e52VJb92BhVDf",
  "key29": "2pLVa3VRtgrjfeWBz7i2BDAsHZ1C5XVxqMbuRnKEVwNH5xsxjQiH5cWmJBVm2tnyi3bVnLiWE221d6PjP9X7pDFn",
  "key30": "3Fop2myBxT6W6a5hug9mhgy3tZJJDnghfUknWbiPL5XrNzuQrSutW4KcfJZymbWmNRRaNm2Qe6iCyDsBGi43EPgh",
  "key31": "fsoX4tav12fLZpHqRpohfbkR7kh3y9bPmwdpwAYhPzvhGKvM2kbbENiG5qhE54Jboyq7YafUpvAduZKHV5x7Xvg",
  "key32": "4tApzb5bzRwY8TFHsrFHZQRbYaxmW8ozQu5Uwg1aXiZjDStQAPpZEjk4DXguegp3togVZyGUHeE7yyrhbfRWYAQh",
  "key33": "5zCKQNK3na9AXUW9pYrRmJoKER1Thf1c3uxzrAdxB7wkrNg33NJxToWokPZXGsa1QDAqDVpk5SdwwaNgQgJAk3BA"
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
