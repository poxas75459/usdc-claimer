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
    "2ugJMyx3bwgDiHHJpCNecUsDHrCh97n3Rr2pvZMtHDMRnazLMWNgyhjWEpMMv1tGdYnSJmWpWe4xqCTFWaCWGmKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59q3gMnb5ct6JR7ZPDP1LnNq3nt7fEJdJUbqPygYG5xSYgdzm96B6fLcDYYmRX1apkDGijGeRp9JoMZLviodzvqM",
  "key1": "4oQRmGtf8tq44tXpssmrKtuwcEgecs3CwDP2KMNJkF36ZhJTnQ4bXjwLACRXFSKY2466Zf72YAs1p8MqvY5RskPQ",
  "key2": "5YLduvhPKxmGUhrEzxEakW58StTAq35zHhB6aX7FTsN9AqBCnPp37w9PcPngPhUzUaCKtFs5BTDqJ4UAP5zG9ysX",
  "key3": "4eUcHAQVJjEVHRTP9Ce736WSjTHJvkxZSheHGpFjZpoYmqXRYADvEGpbzYNBmGTi7AjFashbYT6TLorhKpKFeHA1",
  "key4": "5VvXciMk7CEfVxXJvJZ1fZKpkti7qFSgzNsdLvPdoKvHDzjFFHKeCB1tJLiwWfidEwR9C6qtTn1ns23fM8GtF7Dz",
  "key5": "48raGrJKpaSxpy3GnzJ7qLVdChs7RabSnAuD2oeuaPL6wYNDoninJqNMd1VdxYnTtMK9uuY4SnMDGSqSbkevujwy",
  "key6": "3amNrjS9zF57D945QUHx6h2bSsbuYiu9xv4yaAFMWbpoBHq7AWFNpgihPqvBGHfGpqTXDnXz8SPKSesFfnThkbmv",
  "key7": "2pWqFAA8gAJszJAnektpi6ZX51JffmHXKZk7EF6uFwuda7ShCgZCo2UUii74dcWxbvp9nHdd34pQ1fJYStjLdX2S",
  "key8": "5HnsRmkRgPU58zShUfFhTp58V6CiEwx7JNmtKXi9p5UZL9wcq97aBTtGc476yiMszxe4mdMeJZ1aYT8vpyu9JrKf",
  "key9": "66AWZ5ZRXzGGSz5DpYoQyCQJ9zE7id6g8PLUXGwE6vuzepuLcm789iAtcFSn55CaTVjxhp4EvgX5wWswNB93an84",
  "key10": "4CYF58herNUmxFMzSK1qpmjx2V2SGEaZKPgus6dwpmG9YMNPmeoprZoKERTYPhPYvx1vWFM9twDLVXGvrubWW7aG",
  "key11": "oENhN2P4eXYmBV3Vw2rGRmFxJY3qUSjgZ31t1j8N2FEtew45wfX8Mp9U3VzMr4MncFZVsmZcLgHtaeHc7HqyMjZ",
  "key12": "2djcES5BGmc97Mg8aM6SmiTYXZbe3uzQjEFgvooJX8KCcGyagu6dLyNZbYmyrZJy23sAwMQPtRSt1NwQGdNCprZ1",
  "key13": "2p6Vf59Sxv3LE86ZXYBzySWvpMpHSM1TUV1BGAZF2tyXEuDWYq4EKHVf4yPVJYrkouyfDT3iNKwmWnjkcNfxx4LS",
  "key14": "388VUgwvUmpFFqLp5KUtgvXVR7ajd9fEWVHKxdExmexcQp2FY8QkLhqpy11GxSrPDydSpNvgi7pQVBn9cXsCM1vd",
  "key15": "eehrYuw9yyeP3C5GK7VABn1kecLMRAwgjCvAdjcas5GLJ6YxE5ztBbtzS84ittm87xox3rHUJD3bt98W4X9642L",
  "key16": "29bT2RCdtUSteUSrADh8zHZRNawqBoM2z3B2KTKjn9sM9u5yf6W67XLefeUUhuLa2Cw5pXVoz4fEx89Hv9A2NRqA",
  "key17": "2UC6uzGL3wuVu1pXjDaaruFGv8UdaaLB8xumbYp7NLMYLRV4vpaaHNvMqgTWM8PUF3NrAtycMr12SfnV9c2r71PJ",
  "key18": "62nCAg2BKf4rCMEMESnHcXxXxLkTvY1epB8T37LR1CZaJ1Bch4u6wPMaSH7csgLZGYGf4P1M9dWpWaNtZZ921S8h",
  "key19": "3jQw7S3PWDFpK4RT8dbcvF3nKifoour1qgMZpwwLMs1oPpLTg94m1xfj8pHrJ354augYGw2EoTcjUmsz88LR9tWb",
  "key20": "3wCSzdy26HcDSaTuVnQkkPrfTyqj5YLzw3xPbjJfbcsLY6hTraVGJcq16if8Bvgzk2v8LVgw4pdhhnFG7ZDxHjNY",
  "key21": "3FDkmQNnt9fCoZK9g6Givm23rXYdzTdd7KDJXHZCH3ut9uk1pkssb7jgwhvHpBYDUZ26kNfuCFUkGWPVnVuec93A",
  "key22": "3Dtbu3rZ4GX629K7YZmKUbxsfyxtVmWYEu9N7QQhFTU3VS3F8bwcJmx9UzmKR6PCuLf5YXTNreHhQa19EgttwtJs",
  "key23": "61zSHcAJRk1nipF1osx4msdkejcTV6rkUwfzMpgxY8RA6zK58ViiqnnuehwbwMXFqTmpTj2uZiLFVkCAWfDjvwHT",
  "key24": "tiHoDHsAJmmpFMd8cBcxGHMRYPLSWQD7RecNTNP7CjMMRbH9e7s2sn7A5DV8BrprF58BivGhw2ENuuw3yDKkSJX",
  "key25": "2YDHJYCPKqUPN3CXSNGLJmhadXJ9QMEuwJKt4wbqebjmmNENMgx9CXWggQGAuft6JmQu7GJLiyTJPoSRVKBkUqcm",
  "key26": "FXWx2PCGGJmZNJo7xyAdbzrmSJW78KbPFQ6dqev8eHPHC27GTDWWccQasUYNUcCNjFViGbiotPtwbUsw5vE82Ny",
  "key27": "5h2GianYyDgRq5pAFzrFwCpZf8PTfoKAspzRfiBZ6DE2o5L2eGg9UfNzrDoiMZ3CX9wJH96uEzKd48CwiGHYYoBP",
  "key28": "2LZVoFLA3ovomc3JQ4FD19AU5fph2jaXD7YJJUxp7X5nAqq2F5NQdjE3j4SVxYBcdTGLKVNpX4myUf1FbSzyn7EU",
  "key29": "54YmUQxSpGgjZTBuHUkpa8GjWkmShNTS1QCoapueYeHHri8MLmEQhyBvms4HryATYALusEiaA2DW2nuNPeRZnxYU",
  "key30": "5x3wYJnSTH225MrReFJBthtcd1tPoBDwbdk5vTMtiruwz2HhpJXYv6jPHCcVCCqCxkBpuWC1B3sgRoWYHdevW39h",
  "key31": "3uTyBQ2pfsfzNzhypm57Qos7s3R3DqXY7Yjfvz6JqhHq5EWks2WT9SDZnbsmrW8qZSaoJ9VFdVMJQH71tJcjWcBs",
  "key32": "2Hy7MPZrJ35UNGoRBVWpWZgZhsfEf84piFGVSDgJ7WzNytEL98EeUNBnRedGyqvoJQpzPhboeXWC2myQSGAWddht",
  "key33": "5Y4SNMt66ESbmefFaqRLWQEgkfEhbw8fZQYLqdkQieS3wjY5x1jHgJ2tKvKN841LmwrRwzTBR82UqC8KLXkYnRbv",
  "key34": "3cos68X4J5xK7fiym4PSGKJ56u7vf4oUXLfG9k3j1si6cNddEDN76PZyt8Gcb6nmB1ShegexDiYL1gKg7P38LQrU",
  "key35": "3mKJzVAPLvDtuWUuKeHgBXchrnsZMsfjf6ybSMBHozj3k2Eig5UkeXD78Rorw5gRRUmRd7ABKTCPHvpJKrMXDvs7",
  "key36": "3VpL73rJQRU4cPAGseQ32FX7P1azg5tg6QknhKKVenVeyAL8JL3gMtWKt4hwKELxKWcxnhiFxp9Y2Z1Acvmjjr2F",
  "key37": "xZ3n9PC7SaZPDZPrMXCPJC565cKYrqomS6BcMVZDh89yQFPWMAmmaFp1EC3MNG1NPAz6SX5kasqtVtcA89YNP9s",
  "key38": "5a4MnwAUeeEedR2G9FmMH89T3HLUWaRw9pgtQnSgwbTR4XGS1pzhTWWiQ6JZRUXXtoMk7juewyQY7u1bPsJRTwyU",
  "key39": "5aV8Fw3AsaYpwu9ZmyzHemMZh9n6VizBPbGTBVpmoQGjxvMAzxVWQoSa7XdkvvGeVgrSG3RyqTuiYVRBwCM7mez5",
  "key40": "orzf6THvKaii9pkzegif16tMxqJ1UR4xk1MdTHpoB3zcGtRJV1nFRDRw3xSYUEHUR4q427ywajkrfitHx1qsjpu",
  "key41": "38HEauAdcaaJHcHXgtsPUkEggWS3Kyn11TNfk35ztXJ9G8sk7MALni4dbdMwTDHiJdw5qk2L46jpwtdsKRvwp8gx",
  "key42": "44crbtBZiutDSaPmU7vf3dUh848qvQX5dwroUZaAiTuf6FrCabtpgWH3LmVP45HWDztsVWxsXSmmRc4xymj7MPwz",
  "key43": "4bsAqqrTBSJGt3Cfa5kyaydxLiCiWvh36DTPgcoQ8ZcJ9wzFLh8Yyb4VMiieMVcfwd1jPaF3oihsnWaCNRc4SVLE",
  "key44": "CyaiQ1zvEbHMDDMqKjfQhfH3Yp5onrKGZDjZwsTU5FCYkaWwpF8aCQSm32mv5vmM9cSzNoXeZAFoJsxRZhoG1pF"
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
