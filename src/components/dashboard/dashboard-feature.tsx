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
    "Dun2kSN13zrrFe69sHaTW1x1KvQLSyCdhhn9hPQEpNhgfi1uTXp5p4FVZzjtJMKmtxEzS2XYjQFk9NXuHcGC1PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zc6pQd6Dn2PGNFARdVntBJgJN2SkagZFSkx1E4nr1SxKPoKdHn1JPbZemtgF5tbEPmrVNSrgeMB9tkvwkAUh8ee",
  "key1": "5rkE4mqXRwZ65zyAi3R9nQqE89WYEvSQn5Vono9sx8EaAwcktaoYuobiNa14HsYM5hLQuHnq84EagZ7YHpChkoCA",
  "key2": "5sQp5WhNqNwnhXPVMT8S2x3vDGnPRAWpU81Gkz1sTDnmPddragkATz9pAxC9ioQZwY6Tt7xDzTfVGEQcUjvZgowg",
  "key3": "2HJF7x5X38ojFrJ8UBr55ZMYkvNQewDw9bhZcYT2uzbNjB8TJ4pBozGf1sDqbC5tUwGs8Hv5V27fUzUK5vX6K5Ge",
  "key4": "2pCWhTdwTjgi59YMpeNc5aEwTBiQqERqWaSxm2UF9yy4HjRLmrDz43CEDmVC1RWbv35VcgkcdseyMdwDvfVRf6Ja",
  "key5": "25d7Nq21w2GcrMo2eKEfjB5kr9Mo2nXFuqjjN7Wk9bvuNqaQh6TedYM3uLHnYENn6aS8y3RftrAtYWdWagykQmGr",
  "key6": "5U8hJStcBTms6Hr8wMw2RTyFWRKVXVDgRnwa2MB9w5vs4EVSpL7AD2jAb6BzQJEss4DCXJQwjmndz5JfWKwqisCk",
  "key7": "2PKe38sLFtQGat2GkhrJUTMhNiC3sLTeGcY74ed2nAJ2uQBkAiHZCDFDBDQp14KVtTdeQybWDBYx2EkjgCTYvQNT",
  "key8": "5QQ3RPB2DbJT6bkXs3P56ABuAAJEaHq7f1dRCKhp9K4riDDNiM3dWbjZkL1kPfQa7u4sKczq7LoXK1btcKwR9Q3Q",
  "key9": "5ozV93AeWYb3R53Rz7cQ4Msent2d3z4BYSz3rvvJ1FwDhyamS5AAkAFLHXrTPV3jdyFcCiDEyNZbFatFkJZzoF8t",
  "key10": "596U8GLBh5rEXfFpPYefyhsxrc2Aubh2jALkc3zGySHKd3ZkJLpQ2My5mkqvCyXHTb9vGGDyKXFGqVLVHdpwqB7P",
  "key11": "5GbTd9b3u25YyGj7VTHcJAAoMk6nCMbU2PG8oDjmwgd51yVr3Rv15UMbMD4xZsgvgLiK41zMRHqULmNXzQ3Br3L3",
  "key12": "5d7MeiDzoVz7Q9DtzNpX2sxkce9uQcZxTPoSGghq7K4PGem9Sexh7uDgdbxGpZTZY2gE7bkuWQUfn1VtZnZBBAys",
  "key13": "2a4z9bG8TEQEdo8ou6WioC8wmXG1TvKiAxvxNfk4wx4murH3KU1B552m8rt65QhAyCbht5poDp7Ydc3PtZX3ogw1",
  "key14": "2uhBwGCeYJKH4hvJKJHpiYrx5VxqrQFZfjc6UWgdaPm9GvrwfxXvTzRBEwvoneENVABtrBWiXQrsXvsDko82AYj3",
  "key15": "3ah6gZHQwY1cgPr9ExQEYqzWKjtAw19h7ySApfbPpqMbMK8NtGwfL3FRcBvPxEtuxSN43J1QQvhqEC25uxqbBjQq",
  "key16": "4aBhMEW8DvnUaCXoeWF6LZkunfkYnxTkWAsj8Ug9NaSnRjReaXt5k9FdXUTxiBo2qXrJEG2c1Cu48VWLHWiiq6Ac",
  "key17": "5aMmVpV8tvUdpkSe4F9rio8zZ2NVp9GhvLGFPFeTT7FcntpGFYJU1uVKmPcRBt9sYUzjPMh3YtEqg7iXkNQjZxkN",
  "key18": "5qHA5EzdhKgWeeQgGGLtfbm52h8oMgpzhK67XiiY7FvTcZqAkLGfrHnW4MkGnZDg3EWUUAEoTMHa3vwzWzKZoS1n",
  "key19": "Qt4EoSAb8QVNbnqZZ8QyjNYoVs7H4H7QotzYaRqPxKXkSHeYhAAQevXx318MYzBG79TjyjJ84fK3MXiYFTHJMug",
  "key20": "3asHXaZEWzcuU1KJv8pLDJXNwEMT1Rox1g86Hrw423rQ31jwwrmwPdoWLyh2UGY3Bc9v4W5LBNMctKmJbWc2xy74",
  "key21": "344GA5VSksvuRmyGkyKdV87e3dZNwS38HuGM5A6jrdea5oDinmjvaHbrzteYe9hTbt3wNBayUA7V8yL9wrssbfj2",
  "key22": "XGjYn1U8vuwqK8cwDrtAdMLMDAumYtRoxbkpT7Rcjp94RLSsgrR1PasjdYYMydHAaqfNLTTJ75CbTNCeVhjQC1A",
  "key23": "32XoEnqaXFKyrHrxt3KxoNXvUK2ihwgM2SqjHdp3LBC95DfGqsHHzoRoBLFiue6uuahH3Zrv2cYH4cveuaHT3TJP",
  "key24": "aZPWGpZeuRt38XEmqiAj9rnW2q9B7vC8YrpUcqjszUrdeyTe8RA1ygAU1DLJE6FiWWHpwWchnW2nruVQF5TWeLH",
  "key25": "4oPS2tUsm2qMCuhoyJX69dDcgMCGJoeFDT2ztUqupmMup6Cntvin1NGojBrbxtTRbrUKxFxvzNQGmY8qxLriBwok",
  "key26": "2RQX9kc5KSZgnk1u9VoincPgEqvNmkJLjzFiabFjYw2176qREuRT7yJtmNEk3pFyUywmAE8TPZ2SzwgbKTme6CYi",
  "key27": "4DJtt2v2ztPRpWsSkMVK4N63KxD2HVwVPV985n9Awtiq59s636kYtAdeXtKXEFCi7hEAm1bd5PPN8zErG9oNHJNQ",
  "key28": "MgH4XcDMd2mqgZDnWLK8uKskJwasBwNDHBYVTp5rdfLopqqkX5dSUudTNpMcpfc8txAetqzqDCRDqF4CSnt4h8B",
  "key29": "3sCXLFQWeXJgS2y7ZKsrJoDPP71NEdt98sUyG5xCubpopMin41edyd4a2j6uob9aBJ91mj6TwfLiydidGnDNmb5y",
  "key30": "5tdCHDUPEhLvPb5MonCENLMY4iWPzWsTks5sxQWDgKmaHEJJpQs53CnCzSwTgX4szuvsmUMnxZKGZNMojgreYTQW",
  "key31": "3i8A5Anbnb5qwRgLSNzpRhgSHuqp2ni4vvCnJpQijZDUQJwBimN9xZhsYHvX7FcnMwGkYnxB7ovHrcTbqeAKUnXV",
  "key32": "2or4PnXud7y7AZfmNW6mBogxSV9JZdDddGsRE6VfFfWCgkghEUK6PFrPDQfAudouncybKhjpQ66QMXKBNGzb9aiC",
  "key33": "65SCKbJz5uByMx52J9aU5SbdJZExEw4DFBs6zosZtCvj9qXbM7VAaF8sFeGVgtK9FsWrSRh9wXnHjmc1DR23YCom",
  "key34": "3h3b5KjKrAh5TUG4jC8R3YYRkJLf5mCuaMQvCgnQUcBDWfka5xcSuATyaYCMCTyEcPMckpCKqj6s7ZmRVpetecTe",
  "key35": "3eRULrkoDpFQLkVnfm1AXNDPeSafP1TBqHz3E5iXQKwDLexSnebsRMDFDPqptVvNiSnuVdoG7HERwJwuGEWoSYzJ",
  "key36": "2w5kxXgLjYJRBvB5yyKyHc8r2h2o3vLk1xAi8J9mee9HHzsMbiQtpiv4p6WiaUKZa3oeYJayuHRUzAaQTNYfbSgV",
  "key37": "2FHPr11ZJd3nd8aanNesYMbZAkFt5kR9XJbrDeZFR9ChuMeYHv2Stp1hXB9ZmZWZisE5BfhFzV5L3zqTn7aQVZEA",
  "key38": "5cokvkoHCwvJ4daJXjk78qddYhhNKJsYc633JdkFtrZbSgCgTn3H5Hti7GabmUD1FcGKG3gwdgwg43vB8yQBe4ir"
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
