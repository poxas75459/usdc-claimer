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
    "rAUGKrQhHQ7bFSb73XL5S8kpywCH7wkBz7NuQrWtKRggqQgeorAdqfrg8mzkwPCsbKk2TzfSk6sE9Hkn6jC6jzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ay5s8Jhcg3bXHnuUPdSyXMDACw7zw4LnJsYKd9m6GFhUG66ntbnXib18SpVMR6gF16MABKhoVhfFXFxy5FzFaHm",
  "key1": "4FuhcWaYoyBmmcvabatsoQUo5Vh1pTUkEWpn2DHW3591rMc9TpftWijfsVL8vat56fghvz7aXqpaQQJ5PF9jdpJT",
  "key2": "51o68ZSphkDssd53VGjqqQFGUo75Zcv2Yc2CjFW3CMgWUyvXYDULegcmSiQMiRhjUAPXu7uFgFmPgm8eAg47hRdu",
  "key3": "2PWptimzSFy61ipLTVfz4rjjCwBHGR8wD5CMY1W5ceDArziYE4gSLFaBkU5W5fTX4HA483qUDdkoX5Z3G789pXDd",
  "key4": "3nwpGgbhvZWntYEaH4M4yLKWXKLGLpVGmoX1D42SkWZ4mF5h2o6JJcVwSboBWR7NpHxt2MvTwmEPi7o862Axposo",
  "key5": "3Bn2oQuDZPnY2umwN9GP4qLyA5qTKL1kJZPV2Cjraf4BMD5jeTeiCGyZiWLTF5MCKf8tNN8E614z6WgTyALtqji5",
  "key6": "2HiyXf2QHNFmDasZVakPcAaF9RYyjoM9NYpdQHMNRpceUdWcZbT4ThdTETtf3tJ8ZiGtN7mJ1gd4UX31P815tet4",
  "key7": "5Ljn4eXD3WwQmRmBacGp9dwDhEwK5QuG7D4Q7ouNHD7UiPE2XwWZ2TfmSfcaefY661Rk3h3v4BabhpmRXERAmNRc",
  "key8": "2rDbuvm3cR6PyiREQY1kubo1RPJ5YbyQ6kw1oRaAMx8F6a3riQg5KX1Nw3KvsdE1bKtxr7xCmWHuRWHxkRTmUEPZ",
  "key9": "3eNWbs4SiiXPjzEtj1Efx3HDci2TreMw2zyzwhftBqQ94KNox6uYKz8U4hta95Jn7BdAyX2WzMuWKJresHHmg73A",
  "key10": "2enr9WaJDh3Ns44yLR5gBST5CTznzy4MdjXEbYY4QuEfjEvx7VbtyQRZetBy5DjNHGL9jKpVFLEQwhVJbHJ7NGhM",
  "key11": "5TBzHfuDxpmwYpssmNx3xZEjHmNmcCWsxcVrwJEKn9XU3MjJp6sXym3zEbEPjXJPDigWmcfRNofpG32w2WsQ7pEy",
  "key12": "4GgBnEMhoFP7pEMwjrG8ohc98sFZbReHKesLSwcFjKUHicJ7zKwNGLvzEsnX3kzzWE4Cop5PK3n5ixbVCqF2eVtp",
  "key13": "3sALQFNRSHgEYdZJtWLeBdy97wD8bVMQFA8Fi8YoSYo4rq45izP7g2ZVDJGjT9itWwFptZU6PwKySXH6947VeMD3",
  "key14": "qbUXuf2sz76b6gXQTygx1otFrsV1HEUneTvcrcthhcLoEapHPocPd5HMade52SSWvrCfBcrbR8X5a1j9m3KqHFY",
  "key15": "FvVpnrxNEW1XT46LKa4KLs3LsNoUJzcV3QtfCy4bwV17YJKSwxKjQRjnW1N7mTBqinEfTYyHnd4KUQPTMh9MWSD",
  "key16": "3NzuQRyKfoXvc6XHyQ1aC8jppH6VEigKn5GZcxobGWkXwqGBxhfTQqZyvuJi3wkU3Ak61MoGTXcEKqvi4Rrjt1fQ",
  "key17": "2js43F7SNhSfY7YKWfhyxyKBRYmVW2Xo8UeHyWj3FoSaoWf5qguiNRNUBvft5vdGoGgCqRziHVW4XfX8PQTNjV7z",
  "key18": "NA54DAzBUYckRmUopPBb1yH5f1S2MKk2wb31Fs4b3ocMr33cKJYeUHCmD6S4LzEpuGe7XaBJ16jDtC6bbJpwrok",
  "key19": "3dyzR8iGb3ks4Rv1YGVMGGkeiykzDfpm2pLtv9TbZKpuiKMfZMod1MLCpP6t2Axv92pAbSyusdcoxdSnHjeTJhTW",
  "key20": "613hfwFSjoZYbB6QiQA2mvCq6UvvhQ9b6zagYVbCEdWcfKNgqU1DwLGpjfvtWXMwEPv4vi2nVPX3sL1MgEwepq9W",
  "key21": "5JC7XMVWRqiKkvk1x1EnnD45yrutUNkXYBPxvjgYNwQryGhJ464PcQ8d2E679kakXtaQW3Rntu8NUjscMm8DQHX9",
  "key22": "5c7GMToPL72BYGzigopNGqojEnnNfeMBrw5DMEqkEi1QxbfQmviAZgDtnyurzxch2fwNYrD1qZVXBaaG8wT9fBqv",
  "key23": "2B2MbXNkzPcoPpTbVrt73PfqCtwzu3eLQaZJ6cxYxdRbgoamkAvWAfYadwvUwWneGLscmAymJoEXD9VaUsf9iogn",
  "key24": "3WJKTKZ3a5eXsAhff4X7ReHVkzLV664vp56pLBj78tvYiiF7qTbeNdM8LDdDCZyDvavvExR61F3ZkcF3wjb7oytu",
  "key25": "m9NBvomGvVrhTn9eiTm69JiNy8pv2w17TRNVuCzyk8NHCAsysmZNDdJActthKRAsiugw2yyzeQ6n4rcR29zUNkL",
  "key26": "3E6dbxbg8V19Wdr5d538sUcbbrTGp19XDUKT8H3RVWzuq6x8v162um4nESFHwbodoZvg7sZ1sq4pkDBW3G3cXSXw",
  "key27": "3fin9GSzeQyijb6HijRCR8T4CpmKdB4NCrfjHXZxcUYwjifSVURs5ukuxCRqDNtJqhF826E2YFiNh4Ki9j7MKSo5",
  "key28": "566thmMa1QvZvqpTZEjhSJFU4R2pijMV8cx3BVG9k1obBSmro56Pjrc19XBNWJJtuADdDmRNeqPdt92gVzZfc7Qz",
  "key29": "4QpDWXhVgj3T8cVWiSij4NawPno5oMtG627wieHURmUdSzEr7jKMAzH2aXvnpLgEcy6mzyP49rgd1PGzgTyEWSLj",
  "key30": "35WQtdMGtAbVyZsuKv2wEwMbTMVsCeGKfPc6rrXPn1GJTG3Xcj5vb3ZQmiRrYX5vuP7st43eq8g2tTDB2usahkme",
  "key31": "4YgWCBopTXsK8d6V3xHNqTrY99H7smgNsyY8pvHG2B1PriyuDBqL7T5gFn5eMN4bbEGFLV5NCtf8uHD45tJUaqe9",
  "key32": "2X5m2e2DRuacvYNjMh3t56CbvrsD4BnKvc1zN3sg82xYGmMZGEUVGnhxkdB8kkPrCZ6g4ZG4pXexLsWNrS4gvEzL",
  "key33": "5mRoNDAHamhLZGNuA78UQSANaAx7dwM81LkZwwFBepARpUHm3bHHchvZ8kq7BQXrSUqszoi5RizhQVU6ANBZjhS1",
  "key34": "5QB2QQ9zyYfACZt4GsMncezx3zTXF8aooysEvSxgPyPCMWJmSzbuuHzZP3HSENy4n6wc5255aJi67e9kpVyKk4TT",
  "key35": "2XbcGA9suSqDKuzgG98sVAxbQ6JJr5tJPYNNRi8DmGv5BHPLuSPtLNJGMxM7LjFNLF8QWQiTDEwTWRJhDzcUUKeF",
  "key36": "4o7peEs5Nk2zeUttzeXiYUukMsv68KX6nxqFCokdApP4ADZRjwNSFpUiuao8HyfjQnpvXEDg5vTt5eDvfoaiCzb1"
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
