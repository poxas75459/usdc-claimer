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
    "RzDJWpu6on3ee5wRPtHPWRPkXktJLk7ux5wCfbho8uEXbD8ZRd1C8dRxt45RaUj7YzJMS9rGXFCBWVDe7V5ah85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jx88bVKue4BMbMhZuRfLqGHYhcSpTeqbhS7bLe2Y7FEr2J9QPZs11eBhv5NBTtoQjDYJtH4nZXqjaxmnbybsrfT",
  "key1": "4NoanzoHsnPesn6YaGi3wYeX5c7bgtUBoFmSKaMuXAdpmt52uWgt4EXCi4AsS3v3HD2V5q78WeZqHWxiC8K2QYYH",
  "key2": "2BKYwQ4yJXuMqpMC6T6B4DNJTvy283FwfuqFgHdpc2dHF8t7g8iQSQA81Kr5VBFDKxxWQbXbhDmea64dkBHJVQeh",
  "key3": "5HEGk55oemruRiEsLHwjdGu3mQx9xmf5Zfftvt3e5MMxKehPWW9JhKDWyqPknNamUuau4Qfd48J133BJQUw1wwkJ",
  "key4": "558a5kNZBy7inUCXmku8vp73BctiYTDWk6X1KrT2fiGpLDXoe3g89bRK38nSXm5tkvMut1fEHW5MU6984QkgYUgT",
  "key5": "C8gD6Axj39nwwPGQf7tSnuV33nF4zYninKxYfM48MffaWH1pnnZVHXjDz8BSHsENMSsc9wcHysgtJJMHXxV8Ujz",
  "key6": "2h38GgLbP7S7Jsb9xQraHyhfH91DavHBN7S3XKht17q7NZ7k3BLNz4WXELWorV7WSyevZJEiiohNq4Xz6dnMsxRf",
  "key7": "2Mbb2AuFbFV4unaTW2buVgfpg91fK5qUPuE7veo2eqAzt2nCwFjtPrtUA5WAzFsvan79y7kd5EE89Pn3U6tfpxyu",
  "key8": "5kfuh2RV56ZgZ5eK9hnjLtEjBGXrjem7LDoYFaebybVrwURixCwk6cCZjGegCSikLJN2xXzj8Nqh3Cc9AbdnXwUE",
  "key9": "31PGXRuxgKLfuKyzCJDthoS8WgBk5SQfxrFqYMT7Xc31PjXNZEZRjhKmJZSN9qs2YTJJoaiGRcZW1NuKop3ELpt3",
  "key10": "2vEk6rYr9zRPYLjXjrYqqMAofy8XZNKJGfd4AMiqk69qJUywVzWQrW3JvbZpTVK4T72U7rVe4JU7JGysg2516uVs",
  "key11": "3a1irxZF3AUwpzX12bjkraCp21pyM3z52PvDiErWJyWj4jZyDKKftLM8zXYxuiCAupFsdEN4pUQeVvZfTQTFvN4H",
  "key12": "4RcDLaKYYBNK3AApEg7JZzqQFXXFFjDhjZeJjDK4PLaR2QDWycYyLDFzCnUQuWHHtqY3xmwieeG47GG5vEsXbySL",
  "key13": "4jUbigFFSybT6xf6rug3oUKWMNGXLk7VEwghBioWv2gFtWXfD6Y6fYVpkDY9M9WVmLCdfRqtx1Kk4m4bLmbNkuPz",
  "key14": "3yhLJMedAGCJcaMGu7U419NPQ1opgKTG45RQfj2XdqozGv65ayjuCvpcSiMAn2m3SJ85SWnDXkg3sj5h9AVNKGR4",
  "key15": "JSJ2ebu2sQc9Mv6o7dgwjXDHNmjyfEDohT77KaebYbHxSk27FdLuHhpSm8j1N2j7nm18ZZnH1jbcRU8Pcdr1Fxg",
  "key16": "58CQMx4v7TqjR9FEgrSxXUBEjBJBCuXHjLx7cBnaANTT36HXeYPqHAHNydz2HviFDL9ZTVpkvFZnjEf2bakGP9U2",
  "key17": "tmqFg4oeg3sbsGL4K7ePPSjiLCzsP991q2BJquFD6ZQPncjmMo1S5sG3ygmoo4d5KfNr9Uy7tYD6Tp7YMg5DPMi",
  "key18": "5Uitr1msoAYybKmWLUbJ2qyz6KWBKgDm6jrWG11LW2WbmuK8C5EPABfRoGRpEC9sv1wDSvytqN45Wt37CNx6y11a",
  "key19": "21NYiPjUpHaLWktNYBEbRBKeoHyATB5NSjRngpVKaxsjzuouLf1AFiwK5kk3ThRwWiR3N3mUWQiXSaMWjseWmpEY",
  "key20": "5PZb5LbB11sBC29S6xFpnhuaYjZef4rCrqy8odAqJwLUDn5UvS29sukxJ5zBv6tw54ueTtELjRgjHqiRGmu1nMUE",
  "key21": "4wzfoMDeemah8zLuF83Uc4GFnfBMTuxEhzxaG7aqk4QHnVEjeNFk6vYffU81gdA3onLsX8tV1CaJ5jkBHG7f5Rrf",
  "key22": "3VGZg8vMmGAMG2gdsxSSvDbLXThAiiZN7x25KLWZ5rCGudWy9gFMpJGWyyYfq7gtigs91dHZBMNfbQV6UtCaCHPU",
  "key23": "3zNUGp6QP3yN2eajQXc4RNALQttAzVmvVK7dQD4SV3tbkcaEzzSU2oKiKxhxqA8SxQtQapN83zaJPZabfsHU2pFe",
  "key24": "2LJ54iKo7reKPxmhuaRW7zYmVzXMUrVkQxUWRuaqvnnZqNZV9Kwctuo6BgbmEC6tY5mHfgszH5fYC5YCG17RUEXr",
  "key25": "xbKw5CixsLnZ5PvCWi6XYwaDzMd3MnpAnxK2u8CLWb8YZuSRMF4UXvkNih7SgsyHS4ETxS42FLavaYk6aXcyfDu",
  "key26": "3Kbem29vC1fYwf3NjxNh9HsV12k4Fr775sx87pU1FXZ4yehCtWPcxXFGaZYUhTnJ7T9qgPA6Vqfmaaed6Bbif2sw"
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
