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
    "ABUepY7uw7KqSYBASz3Xh63Du8btg26ww69PAS3H9pn614Vfv3s6d88cVZsxQTf7Xx84hF6TajEx1WF86UyzTPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CvzuLsXC3CwQzUP9fHcveAps2vmM3SYZgVLS6YfbqwHgLPg6DFBAdqWNJj3r56oRcVXegN5zMiKor7hb9xeEbFR",
  "key1": "3pQnJnpH4oeckZfigXXo38826Na8eSa5e44BatX9H5JggCHLeE8c5eXVoGmX7pEk97CB9YxTMtRrBxCAuxcWWbPg",
  "key2": "23Yms4bvaqQBSVifNJfyu5Nf3R9mPrwE827cwPZWnrttraRAhjasv2mWYLyrnpzzW6zsxgSiaHSACHT4vvviG74X",
  "key3": "vLxVxbvcEKm9mhbnx92v7d13yB7ks1FPx4iWKAnWuVpY7VT8ZW7n9URwZYnHLKBiEmiH4SZ6BG7AEYoJScxiCHt",
  "key4": "51AdHLeFEkyzC9txy8embfLDdXao1gF3Khq9MvEioBGC83qG5AhYCwfnBF1CXGPPjTZh9WztpNjBQTYGVbtr7Afp",
  "key5": "5AvhE9DgoVo6b8SraL88NRCy22j8rH4qDrK29Qc3fCxrzZmY3UezbpAAz6cqDfcqHcTWNjrnycbWYJJUnJnTent2",
  "key6": "4k3miDuYkuDjapYh5PtkgoK1YkRnFS75uko5ceNGm4LWoEk8ULU7SEJY2vZUyeH5PCiZtzpHMHMRgUmiX8cyLjx7",
  "key7": "2fVqsv6H68HzBCgQdiNf3gxeq8oveyPe6w4nccinfNzFKq5WTVEduhyz4JsBavKMbG23nSuK2oCgF3dGZ5LbhBaC",
  "key8": "Rc9Zon8rqExfFBMnW2AeNTqh2VdrH5E55pkU8hbJh23VxGNdvysAjmk6p1PFPR6QGYAUafhdX98TLQUXUNjsmmP",
  "key9": "4MA1GcxGQ3iK4AjBF5oNF6CV4w91pQ4cjAqfui6ssbREcgr5Sqh4C4RNZgnc2UqqPLZ1VkYaVrq1SFEutzt9d4U1",
  "key10": "2ic1QzAfL35HEBxLns9nF77gRzvVRgNweLRT4p8BtBXQdrUNbFcdf52zqfi6o5QUYETbrmRjTc9FrKvAK1KK3JAn",
  "key11": "4RQf8264ociEPPNXsqufefsKdgTpEmRM7FSzirudhaDcWGvNutcEUUPDZsk2r8nKmgggxpnqcNiNZfTjSnQTHMjZ",
  "key12": "7YYN5EExD3jQWjhdja6phVCXKHF81gxcdTkANGhUbL27vwoQTnL74u5qR7QNrTKfRUi7EhitEKVArmuxoLKomPf",
  "key13": "3d7ZJreFEz1tQFkndNvVMGBbvrrupanLNwaxetFqkAZEJH8upogBCPDQ8oPK4XxhDCZ4rSNqDWjo1Z5zcLA12N4N",
  "key14": "2oMTUvEvi4mhkNbMGAvQCz9eg9t7DY1kagMrALGSiHguNmZkUrYjaAj4UW81DSPyKFXXLs5oWTSjtMLYR2Mxp1Ki",
  "key15": "5NDNxkjCtWC8nPX7mXVF5JdW9bF8EbXrfnJPUoMD9CYKHiz89kUju5Wcj4oEnXVE1FTwUTcS5ycdLuDcqseW15im",
  "key16": "3jzFKPBqWrnRUtECewaJEmuZkkQD4rGXFQUPyyTGos2reKnKpqcxNbjSAQQPx7nrCJk1UvzXswKMrNuXbJw3DykV",
  "key17": "3wqdGk1ju145A2dv653rifSzjiDzHoKJd5Szc9E9kPUxHyZmi9EH9rdJbfQF4oMQvRbdTtAYNF3NNp6mLWdEnzjh",
  "key18": "bSTrLS6bravcPSYsRBCWRdsSxC4Q24gSuJnGEdwotgkWWKQh5TfgdevmxAwzGwJBSfihhAbHxhdE2YtNbcNpMut",
  "key19": "KzHuivLHBpaGi76gvwmWDdJQjkRVfojjFP37kw3PLZhKBfhjqEKqq8jN1cQeomjueLvnFy6hpgG7JYmH8bq77o2",
  "key20": "gBC2UsfAhM9Z1LgWb2YGoYV1nXnNVHRrgqCwSAAcMYjEXBGwfHkaPjLw8mnvdpTj2vEKPZBuPw84ka1ceSfcRBg",
  "key21": "62YDwtuYRfRxZQmps39Uuc6pYQimE9NMrjGZzyNP1NKCMXLtd7EBeoW5EUAzw8otWQRmz2bTnFGPAsF6dXfXKwjZ",
  "key22": "2GasTfZ3vLYKt8z8Lu9yjf8hCfL5xT3jDnDL3uhCLFy1K289rop7HxgDUThfGEEV4P572LJNpLkYhuH1mNzs9CGt",
  "key23": "4tg8z7PWkgRYWkqQsTv8ZXhMTD6hJPmhcxWwDwmmEDQjxBxdRgevHWL1W5fJxZb1W1BVQspVj8XtTcWJXTSS5nKk",
  "key24": "4Jvve6nnar7PPxsRXHFsSrf7iN4T3Di2ZMmWi5CHWVLCMZMJNvBwCvXXeHDrPdBBwZyhggi9XdsMn4pyUCmRBfzx",
  "key25": "s6LUBZDsNna23DbVmDdY5AXmAz82dKkfPiLThsvstxH5jrdUEHXeuLVc64siYajz6WS5PVUdVAXk1Sibc6v9oPx",
  "key26": "3a99GFFbjc1KtLd5HapRDjVEtG6nfmW99BuAhfEdXRqHnpvHrXG8r3xjRkpNFwfJKyBmeaZ5FHH93YNH8VyWnBhH",
  "key27": "tK1yz2VQmZaAUZeUeNmXzHDACrshHsmr4aTPXCd5aRgqjixhdohpGgVMxJgnUR3rd8PXweM317edZFUJ2X43brq",
  "key28": "uwk7fFh8JnXWLs3sTko5WShm1B8ndY5cZgdCBFP5UVrjJ6WL1H5PoVL6JZsCFPSi1eFyZLE5A6SmBhVGGCYYch5",
  "key29": "ZhBVwaEVmzUqAffQJCLNx5xXB4iY1Tt7wm8ZKBVHtbpPhHRPHyKTzD4ZqevYP6QcCbPAbNt8o79aVCd9p5q6j3q",
  "key30": "4WobvXM8pDe96QGP6QGaRY8HBmxQF2RrE6qTRPx2DGkRVNMhc9PCxbnjwM8EkA3MD6Eigsg2JGoocWXNcVdDegBx",
  "key31": "2a8CrT8YU5whMdzH3FE7Y1G6xJ4HEeEBA5rrTv7Rj9LR9uLm1sENSJ17LC7mje4JRue2rZWxpGwfsWXtgwBjD5ox",
  "key32": "omH3XsNEZ4gbhF44nSVfQ1ExfENxmCbongay6G55QQE7ACK15xLy5zgNgov7rHVt3En8yBTd6fuvgxSv3MFKEmM",
  "key33": "2rGx9HTMgVitJ7wKYCRKrjUQ8um4UrXA82WiRz1gGVeXcLvivyePGYhPW7rT4St6uFid7ZBkDcUT5kQg7XT2h8K7",
  "key34": "3J7DX8xucRVaiRutYyR27SxYpgnb6Pibw3ewzJrpsHiBwnjW4G3pXWaJJvK5bykPdBRkTXxJVT7xwHQ4DNEYP75a",
  "key35": "3XFXAobPJE12M6rEdHzkDd1fwyXTeBDv65j7V9UHvMTnBbfFHbCgftMUwoVhPSu9vrpPh7eExg51wuTsaNtnSk2C",
  "key36": "4hHYY779SEKNCRaH6xHThihrRSeYJ3XPdJTn6NKPZSkdsSmLQjt4vxxoGBWwQsM7vMnHKNdmJoguZUmdM9kYcmRF",
  "key37": "4GSVr5hABvEDAeK5HajMLD6YYCrHEYxL5ZHtRxpTpNbq9YG2no51fh13c9TjYWXfiKo1sATW8vKh4gr8NDZ4wEHo",
  "key38": "3qPTr2CNq1KMnF24QGRtzgsDTYEaALzsqpskjHtuughAquCHFkYCbQacXxhQDhhxYhexiv8Ent13EjpX1d18jh1C",
  "key39": "3EwgxaiGXvaqtnhrHqh8MoFAiRomasEg3jhEbuUKhZxPc6wUf9VpkKkRPLGGA9A1UasQo8sbfWdFN5oLMXrJRhgY",
  "key40": "3xLnZPAvtVE9jNpsqKD2qJGGn7r1fFMcMj3Ui8GCKi3uFEfqRLAFA4cq46ZgDKj9n6ber3nTYp9pBQAH5UN8h79F",
  "key41": "3GoFFSAe3RoWBACxEJpY1BMMBGSRxt7hKXd28qMS4tfZTJBZQ6EQZmKtNnP6kT7eFWhyRKayK4PRCj4QYJGfBnP6",
  "key42": "2RV2NUPf1jy4WhxYXeMawdVnbeLNbL2MTuf14NGvJhoVhgRJLdx735M2u4jFj39wvgGx9vopApvWV4NCck9iUCVs",
  "key43": "HdjLN1gVFHatWgBQbgqpVtiLiosH9SEohBPuHVMrsvU8vEdZU6do91PUmfAsQnDpEng1MjW2FJmmXMrBBP86bkS",
  "key44": "2TaygAkRuY4VGB5DV4FCYgh24BTrjJ3WmtKMzfiRm5DJTJVK6P6uvtJsKUcW4a8c9TDgj8XkpFy4gekzSLfsPVpZ",
  "key45": "5WNBXCy6k22C8KM1VtgRkfm4D1qo9cdzYc798keyesp5z6BCNqhrkseMbhs1Y73t7V1Qfq4551a3YxomdJa4hkTK"
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
