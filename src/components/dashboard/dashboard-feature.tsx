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
    "3Nh6wxNm8bRhFMfyBt3iEMAvT9jRA91UuQGCLgGaxXxdYawMzRjku57eSJj2LexZEP1AfrWxjUs4s3ZmtMTuCBhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbsiiiLSHro3yyf9kWZuKYxgFvfu7tpsJ3s3uS4xJk4p8ewrnR9tR2jRNYnp6HjdpB4dDQPvvudJGx82rg3H2ej",
  "key1": "2iUcxhxcbc7cUSodqhyWZh6unPC4yyPk52iGGAWDKJbmRba3XwLsSbHzdnKRrZArPeSghywby1rbKvd6KBox4Hne",
  "key2": "5cZvfRtc51BS9nJd91zji2BjKfZKwHEAkikYPBjZcfjkXxPLe6PCyCbV2N3XdnC9Hv2sfeDmdsar6uUxqXNxPzLP",
  "key3": "4JDuT1zyDweU3PFP4utsLvSMA9CxSXsxJekdFBkoptsovq7csWd9LAwVryEHMwNhaVn1kb1DMJhJo97yLzd83zvT",
  "key4": "3FcWWRYQoTwYUVaoUop4rSMT84xJMi9LMSSgg3C61KUuWxyL1CqVNQ2PHN3wyEk4BXRPKxQFEQ5PwgKVz9z8yPg4",
  "key5": "4PtuvAU9DsSkfLTc2Si51gQnux3PRkSzHbukczPBnZJh52Rk7JaZh7La3xCJcc9u2Hw66XRWMHmywJHxuGFwnD38",
  "key6": "34pJ6Q8sEbkuLm5cwCM9419P75kNQAjvADF6meUdz4DnLzKNWzLbeEE7FhCpmCu19rd29bedxQTC5V1iTZ5VrnUt",
  "key7": "1Jk4vRn1aKEPhWs3n52D9zui5kw9YQPsuAmEYRQfmvtkZpGgPENwbeSNn3QAVB2QiSZufwubzSa4yFgwKGtr21Q",
  "key8": "5cYVLE8jQNDzV6Cebnm63Q2sXDfpjH9waSkrT7FNAb5HqVtfiviiugaXHC1bur3g1y1MinWCXXTtyeQjZqvDSddF",
  "key9": "i72yKS394bWFrBzD7KBxzRxWtue8BeRPb9xd6fydyn9UcPtds1QXvHYYugduHvPydLAGd8hqiuTtQDgiTR3oyBM",
  "key10": "3m3o3HeA5JiHrSX3a6MK8Aq7zcDg2F6BjqwxpiyJK2NN82fT1i6PtNhfkFXcjvjhRZTz6k3Gnsxeq9K7ikCompD9",
  "key11": "2J73dBJA66SgzoQD7x3JWnngTaAhprLfeHSZm1kFAg84mb844xDACC16USmgdcsnxA1nbqjmpAcxtVfU6g9VmiYM",
  "key12": "2qWmc5dTievFFNW7PdvER92fJsTN2hmZENKKKrGkW5r4Ved5uY7ujf3j1FcwXqZQyWoYeXL78TiTWVth1gr2t5jo",
  "key13": "22ZHk9Cg1EveggRhJiJrwvtETTfpKiBX8DUqSPgrRoHrhyAcHTm9zvq3SUC4kxUK46fP3Ng15XLAWPtsFoHjXLkS",
  "key14": "5k2GZknC31wdvDsFMJ7tNcjs7Ggy2uQkBVwD18AZn5baaRvH4ex34P3gdnJJ7C5tnSpyRDq7Lmg2bfV5BHQjF7ji",
  "key15": "2aTf7hrbdNQfS6mHG6CgHJQkBAKKh7qdsjS2tW9SprxCB9bJNWA1SxZ354KgJWakHpqq3KYrPW2BVG9Mset45DzF",
  "key16": "5epKw4eWUFMmPmJsA4FqCosEF9LT4CELwqM5ZPoLbHoENtTiXJ6dGvAoTchWSJxWypkYSGeiVnPjPmzpeZRMGHHd",
  "key17": "3eZcwz21nqkt9nfKRatESkshfvNvhth1SrFJGv6eK3PLKM2sh2H2LxNxXb6G1yB6q8W5Rgt2nxskcCdK9e2994Be",
  "key18": "4xRoF2btdHmRpiKv7apCUK3FDsx1EFANj9B2CcGM6ZmMonCivwdPuvdF6uwr7oVw3fQY5G9bKr99ovBCzozp1nVX",
  "key19": "wrnWrG6xUaF564t1FeeAPN5MHVwhGWhZRqdrm7fA36f9H6FdCmfAqxpWvnbuFjhRSRRccQYrQ5CarRE6qpSrQTg",
  "key20": "UFxxZTwt1WhqYYPEfu6MTZhYA8hMw8wAgZvRvS9kvrBXphZvEh1KQMX42PMvPkaC6VdoSU4A1MrrkNkwt3cCgsi",
  "key21": "5RHSsUZDEUwZKcy3eGPZRpiUzJkz3oNZwo6NBN8YcFzcoe9YA9zft7aYRAht4z7sFGbUNUacpo6LVwHus8aCWrXd",
  "key22": "4uN5B1gCJrG5aPMxSmDEUM6Hf1eefdYgykrHBGmYpUptqaDwTeZTf6C3H2suRkD4AeYsH2yyEwuUNc9WbJDpSoWo",
  "key23": "4bXzJyYN9oJDQuy9sq7D3vLHFdorK3ykjsCDUVyistNSarVRKRKG2dVS9AEzAbyo6tfCkGwReftzisy3oe8zUgwc",
  "key24": "2fvTFf3QeL4WdteGWzGsxKwbTqgH77gncWkEwE1KDWQnrzFKy222xMp2WcC4V6vNYovQJB745zVhdN5ByFn4ZZvi",
  "key25": "4KpuKSJfZExWzscrnRUevvA6YaCP5qJ97weiAbKjpF44n8GZseJAfMwhZcPPavzTEcTVbF7Fb9CTEf4yL6kGzpEb",
  "key26": "5aEDmcpfiUrxwtJjcC5ELyrpXprArrTQnvRY8S7k2WYgmP5jBu9ievNvkoarRrkS1BJEYNgWe2K9cenGU9prJfY3",
  "key27": "A6YAxUHDjCLZFHWbvyrGsuA1LPeEMVGAdN4U3DSYtS4AxX4DNViEWaF6PrbCVH39tG3vkEXWk6WXTNoRLjZoLuX",
  "key28": "QFPxyqkWRJ6HSXFMpBP6dyt3PbMwRyBaThe4S5gwTGee7GjCF6Gti76EUj5CJYKbTrtswwCAbzLdHmYgnTEphrZ",
  "key29": "eVB7XLoKcbTfpsSpzNvc8scakxmaCAxqswDE7BNrktK6YFFibsqYaMnKL7Ti1eSq34CQYywBGBKqYeWru5kdr2u",
  "key30": "zaoYxW2PBVKmb2egMGR3Ti7CLj9E5eB2okqLeZHfyqpgRAE2NKfShy9RFXoS2qrasjPQbLUUAPnvTecy6A1mqzp",
  "key31": "5hg52Yw74GVYMRinESTNyvAnrDPw5scFBr4fMghED3zn1ow9cp1aBF5ktSddqCHqHEqkzeQTCDoeFpsgdUw3U9nT",
  "key32": "5HJMhLbwHRGcwvBRaQyC1wLFz6Bc2GvNeQy3SgfeA9BNxQrc51u4Rxxe1F9B7Bcn4YYuWfQuJeMKFB18EmQWd1Mv",
  "key33": "3Y1sgWWkGt7hL2FUKGEUbXobnzJH9e8ypB8DkRMYfbrwAcFnF4AzVGjAXUe6sRHoNzMhR5bMVNBo9ptvmdi1yRxA",
  "key34": "fm9W5AhBEh5mqFX7cMR3WZD1WyHk19S9qEc5sBUJgBA4PGjh265XMkWzJBfrJvKCf4koLQ5fGtW3iMLnN7GEyt1",
  "key35": "5S33mkKyh6wmq73v46WhFzZzW294mUs2MMzbrDxEVqdujPpFwAT6kvLKkdRXDgkGcUx4Hs7gaR49849r5QXJvMZd",
  "key36": "48DdEfGdxNGHdVJrUKusdLtZsQKT2SS6HTPmfgQx6HDUy7mrMwvduqKFHz7MgVphW3RMipMQr745rf8aB1L5Z56x",
  "key37": "c7s3hXqAUkC1Yo6usowAMTfp5fPcjnfUniC9xoehwGn8a2DU215fL4vDwjUHwBDaoB14FvMHg84ACUNrgeah4ku",
  "key38": "3ViaHRdaBetK4BonKdxx8R4Su2UpepojohqgywNR6WbnumEJBFP1B5eP8nQEi86C8xYp7V42piPCGbZ8mpDMYg1g",
  "key39": "519GQq4JtEuP5khrS3k6dCbCy5hsyTaUsuQsSFvd3DjxBA77uJHbyRieXAZj81iLct34rEjesjRyVHWbdFrXqbxL",
  "key40": "52mzrB6pn6M4m8Xaw3ctKRXSmkQajJ4S5XeW6kFW1f5iRa2aYBLtsW4dx8a7H65bdVL57AVHm7ouR4CcW3naHsJo",
  "key41": "3cfFsCLwnho4ua1nmhaHCMc5RuCHdgLZWNVFXDRUjLCSss3ErKHxmEazM45JWKN5hBJnFx1cU5kEpRiJvYyG2xgk",
  "key42": "5wBUGv9PGDVFcGV5mjMVWAMBCz2T4FKNULCbNaApR69o4smUQyXfRcVL2mcpwLCTQKSTnEhB3w1PKojE2FgEeZoe",
  "key43": "2khHKro1VsU6s757TEK3Bxj5iZnHmmqPFp8BC4HXkayNC7ahrLQK6PGVFbCRmGErFRu3DAXbaHFyN2jbz5QzxE5b"
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
