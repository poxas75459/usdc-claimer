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
    "4zHsuEQZpcpZfasmamwwgSwUF7TxtPCKAMgzyC6ux6ufYmiCTnbvNNHMnVta5ZfTsCzxB7ej14cDV3wi3vee2TgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmjNPxrEUGwUNxFw1bVyKWbUKCuVx6GnhE8M49uFHpUmnj94uaaktCTQeJc1TpJqtk99AjykoSA4yaRioNc1wHX",
  "key1": "5gSbSokdfKD97AKF95PwFsNfSDdpdfdr52aBCmVehsMY695Gfa2d6GfAuSX327ZYNA1woMNq1keT3WctpufBbvVb",
  "key2": "4wg5HGGXgc6aTGbsArrmTH9Rq34svNBR5NY9BZtUryrJzd9LMidpvSXoP7TFmCLR6mBevnb1731BggJovqFQoYKy",
  "key3": "49AgaZKWw24V3DnjvtXJhRxcqAdkUbLEq2sVr3xix4LF1dwwes3HkX4GBHhdFwL98ZDu2311g3gtAoBrYVA9t3WU",
  "key4": "BGcsyjCxzGXq4hUXrA2dAKm85BNG6F64JfutL5y8JNFJZ4pmYntnBrh8dToEs1ULajrEK8DJeKLJAHauVA13CGF",
  "key5": "2zhybWXubmj71kAgJQgTwJ9t2hS2D4LFn3qDYQKrTa323DopFx7BykNqWBQk15foRH3qjWULpg8VNh5tdMdQirCX",
  "key6": "4DdyWSPws6SfufkbF2Gcv4L2R2kxsq4bxFnZvvHiHxni1otQ7xiPmfSdLZhSUW1pPVJtq6siNBNwuuQgzSFJx6vC",
  "key7": "4rgcVGD6s4HJkpXyRS1gDeCikf7inaxc31PEeXJhtB4XEnaXBM5h39nfGC6ZWAajvjW1vs2WeX6jov5CnuyLGmS5",
  "key8": "2vWtvpUwPtjWuHLbLUf2FTg9pXGSLtPVbmq9Ny2WHrp9wUgoUYKQCzJMEK2Ju7MgT87UUdfUbNtyXJxrs7KiJmby",
  "key9": "UnVvTBBmw6ebPVJhmbrNSpcYz9JqMbPt8UttFDN4u6UfCN1B812hefvUjT5kEezhereJpRdXh8vKu9gccYjT5WL",
  "key10": "3mvffBin1Lf9awXpq9SefU8iVVUhRsUFX5mrghwCySxfET6t1dn82DHFs5tZxegtxeDwGH1nqXVY3xAmG26LcdRa",
  "key11": "4kaEiY5g1e2AZu965fbntvHP3r52PZ6K2Q5X7NbjUdSYYUabE2YtjDQ6pU22x3KZ3BLjDQDasunyVD1nXFvbfjWG",
  "key12": "56h17MXRsCqzsJVkV8928LpLySCaopD7EzmjGyF6E6E7pdM29wjc2yf79PYjSN2jAdheywf9a2uwSVk94rC7uQ6p",
  "key13": "4ri5ZTVs8Jk6Gb2jumBJiWGYBC2s45zYjhFrHThEQfr8GH9S633JoBARrnMYnh3EjiCXULSV2BKfK7dRYBKAGv5N",
  "key14": "44SuLDbNHNGkVr4gJtL8gPeDoXLh7FtehWS4zbzmbHqq834kZ9z8hMWCodTVDKcSL9hFwnxi4tkg2eDiHauevXK7",
  "key15": "5LKzxR4yUgLncSs9ZQcZiB5qoxFaDyQFfBUWsw4fBAni7pEkKF2WndQjgYzHUbZ7LfGzVeiD1ecxWJTJL2bT3Ajq",
  "key16": "3N6REaAhpVSey2DGHvoqnBQPsytDFxGi8wRqQECS15hGq72SWWnibrXQdnyCAup81iBNC73R6a6qUqNBS6HUyQSs",
  "key17": "gq2tNKfrJP4WQf9pe8CHusqyi3cfWuNtj1RWujdBo2LgLjyLqhiApoxeNHu5bkgaA4CQgLHbwfKbTbDM98vsPvp",
  "key18": "2WfycKTA3iftxehfKfVxQXBwUEPTmdC4Sj8oHZ8u4KGZ1vM1YuDDqEdzBXvhwjjMY1iGigjXqoXczJ1P8WrFmLmD",
  "key19": "2wGcTEXMQZRG1bnv5QfomG6ierx1nEeuK1NAdJBhvqDyvr1Wr1v7YV8oEXgkbCUauJmGfjRKq2miGHAztMFGfUu9",
  "key20": "2wBSt5r2DNPdoxkirnAdPPmmCKcnvJLKWNcHZzVd8m7gFKuJUQHv5gc3jVJrhHgKyEi2NQBVcEch4NnGXuEWuktr",
  "key21": "4wfjhfbLUV3fbwXijzF2Ayii9BAfNege6YGAS2f4qkDJncigroNRUPdT6fTKJbb4w4HSn8bh9oupCyq9znMFE8Ay",
  "key22": "tQf5JFC7pGv2UQAdUDUPMnTZpG9Xxe9ZRgUXpwDnjidUnE2fQE2L8uLf7AsqWVrwnZoiTWTNjFaoowMKCgYV6wv",
  "key23": "4h3Ht9YkTgPDHGcxj9VC2qpDYP7r1Sk7gu2qNUZg6YjPrYoJmEb99HWvvBMUp6kfBRf2nhhCqZK9Vt3jgGdgUhtb",
  "key24": "3ojxoQfGLWqKxRhQ7QCNKtSL66nyUj1DH35KdxX2Hma9BBKCjJAvKwujbZULpBpf3i4dMZngGUXzdPVYariTTkkH",
  "key25": "27GYEokvx4aFLyvMKrzCeY4pNWdnQ3f7fgsuBCbsQVuW2aNRDibNPKEHsEmopz6Mpfado9enhMuKFMbqMRzXhPj8",
  "key26": "5meAX2Aor4d8fPDqfGNFuuzqebcEPRT7E9ekgr7N4E382ue8FFt9UBw2wGWUBktr6B2wJXJGiVEAsXYhWKC79hCB",
  "key27": "52SETLBoPFm95sRus8GGqyxGepbdjw1nA2pu2TqoGs8q8RBCSB392KVG9YQY16tk9V76nqPvBGb87J8ELYjU8SG6",
  "key28": "5nKjfg7xJ1caZwagScvDBHaGyELTDtEEJ4xTXYcBEwjTipimRi8Md5GnAAh4ze8vzu6Wvz9UuH8w5exwhjgRC4fJ",
  "key29": "3HHq9TGWyjCg1HMQHuriV9ztnN7RCatZNTpVVFSovfQsR7oKfZLobEKy6YDc4hdekJRjNh9rbTotgKcihZqhseox",
  "key30": "21DK9uim7JNS8teBq4x74RZvkB5avBsfpJ26xBEDy1uSCpB2gYnUfLGeFhmnEMQP6tBMptL8namXT3akNRJEUNhc",
  "key31": "5YFUTGVdQFx2JWo2N3HbK1SGAHtGSdSaCBDMQWX7qujVbwCoVqy5yCFnLnAB435kDJoazaFyNR1kbRfWZGWoiMyF",
  "key32": "3Lj6prDUy1Y8S4YvfzkG5Ur3fsPHxHnHqoQdixQTZDq4XxepSkuX3oLmT4D3RnjrKQ6ScCYosUySWdRYnzKaFBnj",
  "key33": "4koGBsYcen4Epma8rYrjGZrBGmH6uZdJFYJRRKA7XqkUjKFgtpXh6YodAWyi6nRuuXK342zHZKcrPmSprJerVJzu",
  "key34": "4GtdvLpa35V7UYxbTXfvmLw4dPks8LxAGrT6a7y2oGHvgsXd1zhwqrTycXrzXrH49USkzZG414vU8zwxBTiYJZUu",
  "key35": "4PSZj2egu2Xk5PUJe13TVDrK8LCRhhNizLhaLoLUkN97nPyDn4hnTuDaH1BdCDQBpfNXzqf33NvDj3ke1uHo1991",
  "key36": "2N3o9SsZsJd4C1AfxizhTri1FQE9ccDEYhMm7F74Ced6Nr35j3j1gfuUX84nbJtBuBgvkGFB8qMVB793azTL1QhS",
  "key37": "2byhWQTRfdrwe4CVVnvCu5N4Jvq4VGHJmxR4nbTXJkthcrUtsZpV6DSyWbRWSNjijASJ7RN8YCDwhMXeUrdTGvmh",
  "key38": "5opud12HZAo4PWEWof3pG8hmdAUHrLWMAukuXaAmRnxu4B9ChSqh2DwRTThydSw1c4C6YRjPh54oVrd6iefW5iH8",
  "key39": "2sso4uFnVTCMfoQ9cYizMqNgMiefymJusB4RSRtYnj6trtNVKQuZH1ptaqCPQFexZaNa9tC4ZUZJGf23c6kDZJaD",
  "key40": "3YFP4mrRAAGsse3jR9UtBq55oxU3CGvzCqTyR6BT1Sp9gpcZaDvmhgKe4x7wdosfbqcRygPLGW3ac3DpV8vQrGPp",
  "key41": "4vgBRYrMmeyQNi7Ac5CWasNi7MufDKR97LFff224jEar5JoeYtnfJuGQfNzZLLF8ACmbQNugDxYpQu13sjjHcDH8",
  "key42": "4ryjB8qdZEXQ2xefyA8vsDVZ2X1frjyCbeTaCQ9baBsNoXDYx8x58jb5DqvvFYaCxyon4ojt6LeQYQseduEC25jt",
  "key43": "3UWBbb43P3wuApy4PFxpuK3v8uGsyY1S7jesonJ5rbBUXfcuXX7E8fT4ntrCuZuNGSq9GRjRa3M5H8sUd8oDjQgW",
  "key44": "5SxM2aEYDSos8oWKqgiQHfTUm7SC1iEgEe6uhpZuMpgvPFXFRm4txVkTUrzDnEWnLQzjAWy7dDkWL3b92b2TWDWM",
  "key45": "5BshGWhzttxGzBzH2yEPjEU3WdK5EC2f8V2VUqDYp8AS6isJTMuYv5PnQiFHYLLNtn45V4sgitKVhUcGfkL63Heb",
  "key46": "42AqMRtX4nQsT9gTa6uKJtsJdjbtyWdoLuTVsee4CPLpNfb1cWwH96yQAzQYv3TnYzAWc4nR2umsCTsHz9Bt1dLF",
  "key47": "BjdCrVpD8BB4BFZxctwkAh1ryofMtt1yHgcq2bWZwphW4PtRGas6h85TNEvGwoQgaRCGLJNb8HRULa5vaqiTHxG",
  "key48": "5NiapnGFcTdVYeCBc3dnmc3jA3Zvt8TWb5TYqjTgeVEYfjAaaYHz1qgPhQdyN5rs6RBMHT4fqaUy4vxqwrhgFQqv",
  "key49": "3Cuf55pKdBZbquFGkcnwNKuJpGj6RV5KyqYqQr2A7bHXFToK4RTR5h4Xf4iejcRLvYQswWoTKsdsRnMyMmTVUj6j"
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
