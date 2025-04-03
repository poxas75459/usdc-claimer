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
    "4TE8aJgbxyKThWZjbk9Z7G6sqMieLcKcrEfNX7uYonEZSjrebDzuXeTS2Ycbbr47yNH9ow2etETauVDmNGcYSCic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4nEAJwcS2M23KULLo3qchKvEvGEHLiNX7PFpZ73435qjuxCF13QvuSDVsRcBVg8dB2sEwuuGqYK3Z8apeXNCRW",
  "key1": "2WS2MuBetk4Eaah5NeswGRRoap5Xjv9wmSV2PLpMkAmfFMm56NkUJTUoBkwyXuuf4VrSyvUpJThc5pkv5dypXmsL",
  "key2": "2x2CLYWUt3TUrWaB72YPu3ML5J9anx2xoSUCAk75XsmHS1ekxiV4gWDBTLHoUQzDS59nJzCBpw6xkPTiWLKynR7i",
  "key3": "2u7H2tNC6gw255SPttb4cvV6Xfo1vouhXSNrAedusCaLnkmR7wfJ8iN3Dy2PdvVkHLNCaRjcHDYmDGj14cneGSKK",
  "key4": "31uTgcBRkkd9Gy6G9jxnoEXvvQ1ou7Evb8rFwXNk1r4WzgiNsDPAXGvgYQQh95XN1w1f1eKnVKjT8XEuRkuFrjHi",
  "key5": "64GGJyGSwkPcszPr1hASjMQRuYtN1oi3dyDMCCHTW9c5d5P2Lotzzdv8zqo7QDs8tGT52WKAZkgETDCeGSs9ukAL",
  "key6": "isgrXSRiznDjEMMbyxbkRPQnLL93fbmwAtsQQb6GndFziCiaZpYZCC4ew9E72qcLNCmtUnR2XdbCY8ZJqFx1sdM",
  "key7": "3KJLbV8jcvsDjiw1aZgAUC2uLmqutj4NojynRGkLSUxMQQKhzvDew3ypQ8vTxVq9bqX3dDXxxUjLzTVmttHFaiGZ",
  "key8": "2KVo4ZNsLRvagA1esQMZxfvUu5PCgKQyeqfRMuNr1vN2XhGPXtM8WHx1FjpJvGdb8bEHiBXcz2incvVmx9b2kknn",
  "key9": "2n34PR7jeP61aJQv4Yaue91Fs8X87qK2rAfnGsUUhUQpj3GpFnwe8d3PFLJvmdsVV6JsHTF2yqLHVjLyHPDsXcnk",
  "key10": "5unKgQhPRsh4mySHJU2rZLPK3G3B4FMTEPfCGWwnqBBfXrA7pg76RPt7Zkjapz7hgWT9bWtqTh5VbCNFKmdnaPTy",
  "key11": "25G9A5p3AcVCfFnrF4GGJPvXsCSWmJmyQH5AJphgshDwqcGsDjFijrMfwjAxBATEW4FkSSaCEcBejPQCET8o8NJq",
  "key12": "2dhYcSpREJuMBsSwMenjFxCKHCxczL66SieXhHjsh92GDCA9J6ZKmu86hHg8VBtuiphEDse9iEbio2nKac77HHWy",
  "key13": "FKhJ5dSGxqMpQe4ug71VUj1UWVUDYV6Xghd59PYzbAtNeXEze74A7gP9uz57jPQ5nBHdfCbtCFVoVGfzckVyGCk",
  "key14": "24eewt9hxtMA7UWQZJwnqRruFpV4xCiUZxSmKxZuxUNTUxjTheorggM5YnhF6ydVjoqcpkdimBBsejVnv96ei9JG",
  "key15": "4mMpHdYKjLjGGw9KPtiz4phdrLuCM7HENPQ8MjnP6i6NxUm1v6uwUTjEdtKcGPKNkrUo3dpXFU3ySrCs84Q89Ntj",
  "key16": "43NSxoVRCx958CaJcVvR5BdkbgGWrMkaRUd2Etd6h8L6tWr7fG9nV4EUHNpTzLUy1sivZqqBwm54XRmSPaT9mMjz",
  "key17": "4W88r7wFWjGndzSGXFenVH7z5YpxT8tYbUJJQXQHQgGS8pT88jNh6Lxbpd5KbTFyJ98BNtv4GFBf9gGVuCF5hDRk",
  "key18": "4K9wbxu5zrVedvWBQycvpuTPmZo8yNKFpmsasMdbmyfz6LrsXKCwGtTVU2xENT38K4a5SKBabsR35VyEyDybvXcg",
  "key19": "2Kt5hi7muo8vpsNUmd6Hgm8RS8djfGHtQWXxvfDYn8A8aV3je74vMFqqaR9hoY18nveN8pDxZ2LiAdz11EjfEJE9",
  "key20": "3LCayDynXND9k264UTUKWUsMuGPWtEtFJJfmqJ9Qd4St2GTw4QexG7SYC6Ead78uLRvJBNQHgMxUVidu21swVWJF",
  "key21": "3Yg8mBo6hNYXGSqHwqKT7AStFUpZUqwj3PvNG8vDxbsZoF88CXf82qxtXMVEZ7HQHSY6W24cQ5eUccKFQTEpsVQM",
  "key22": "5xnzfcJ6i8zuD7A2juBUJPk9WgHtFMEJzLxXR16jY51j7t24NQ6fAsDcUrjfUqZsekVikigBrenZycdEfUpcxws8",
  "key23": "3MpUWeGfauYxbetEfh5om1Y5fX1NwcKRLHNFGqcLAfRmy4DcFcfR26mca8rUuccMxLmmVHCN16qJPzAhpw6tsS1G",
  "key24": "3zU8sv22Lt3kjpXCBbR8vnySYZkGrNw8vJD2JFDp1gGRQaX6DsFbHLtwxJbW2QSFzLnYsSV8YHZDjahKSpBKjKRL",
  "key25": "4hV1VqPduKqHME5UciBwUnPPVvKQCRQUUgrBnKsufftvciDxfMCimaycK1G27srvp5F2AkvcxiopsyeHYXDjVi7a",
  "key26": "2MHQD53GqeZwV9Vo5k3mv86XaNpT8jngnw5D92UBYHGxPN9tTJp7SqX3szsaziGyEWy1AXzWG89ie3tZr1GK5Rns",
  "key27": "3HYKuarAf4BunPaJKGDJjqyXce2v9AiP6bvNJDnusNsvi2M6Dj9PuKYazYbujHBx9Z1LaQySo7QVpkUMb9yWTftg",
  "key28": "5GUj8cmNgC3hre4MndJhQfumVdLnosvhqXWD9RyeQfY41ryYXq5uckq8J9sDNT1qCYzFX526kJWBAaPDX8NZM21B",
  "key29": "49gpCDNHbnzwRstpZSCkssfACsCgvMakJ5TFbko6SEPriwNh3WCEFCm8yKrCB2uLNbiic7yv9F8a974UR9n1NYE2",
  "key30": "3Nb11oQm3j8bmsHKaU7MFsSNXfffau8zmPCUZ7NAxJdM4pwLZi1BKCLmaZQH7YQHpFjmUwRBBXUXxLf8owN2Jtan",
  "key31": "2Lx5fvrG5Y9gCbdGNizJNqtGGhWfEFnKaXeUtjcDT7pgpyZ5VxmdvGeG6WRJ6KqtimFD1sGksMYDBvTGtDeCd81z",
  "key32": "29pgmVvk3hCZNdn4o1eoCviQryCn3kvVwovD71kHW6jwYSUizKVV5SDNV1Kj3EZrRjPe9w1u9TpNgBzAEqVFCXk6",
  "key33": "51yZgudgrmZX3TqVJb1sEchZc8Y6Va9N2Dtpy7agyhAdVAieewELAxF9F3fjj25q2qvCok2U6UUrK9UgSqCiVHkH",
  "key34": "22vq2yCBka6fNFq7RAnjcHkSPK1Y2jocApu4YnJiNddB9eRUvwERLC8VaiRYqEt14VrjCyfpPLmW8iqDsGFAexVo",
  "key35": "2b1yWMNXTuUA3sYEGfyRkpzkdd7qXb1uRMaxZCvEZHP82W9xQrEsGzk7A598AhgNkinGYR5NgMG3BTumZMapmJYh",
  "key36": "5Tsd446ivwTLCA7mJ1FmdW7BVft2g2sim1QTZMikHAxrtxgN8dmp1nUEJooEWZc5BkBmCoL3Vtg55T53ydk6zTzQ",
  "key37": "BnP6Dc2pQqYjMz71sGsBnm5tTG1AGmENvkLRrAjM1NFj8b6DiNHD6utU6qkdE4rJpW3amUB7mBKbz7PNQC8MvKm",
  "key38": "3bv6eMHfC5Z28fM13dJmwnaPiDHSG4uLovJJwZgWohyW8fS4qdo8H4ai8QCxVqw6UJSCAzah4x9PXC6q9n2ZnRSo",
  "key39": "Fh1TAk9wqeNxa9h1vu7a4krFF65Q7u7Ekmtw99nFMRiXB1a8oLAEwfZoZHebiX78FC9cyiGCWpVhucbPau5F9h7",
  "key40": "5nGpyu3hsVRAAZBhY2zaBQji6XEsDtGbXf4wBrNqafdHBTSddD11kGk9L2J9CQoajmpvTBLvrXRFfUMjvsykYRXR",
  "key41": "3WR4iFhXbJETamtn8CiFuCcZ3yuWDjxTLxDR144efe9EEAzoD2me6wohRU5Z47iLEYom4VBdZ67X5Mon9HvfYo1y",
  "key42": "2cfdDmFdj3dA6qHebDRbBEySSQj1UEsGrgVGRmbfiNmZxKuGkLjfKTNHjFQprnHW8FuF178V9TTjhmp4RCZB3Zxv",
  "key43": "2F3KQ4QwpoNZLcq5YVMuoHan5DbMp5dkvuJ4gAUsJU4XM7xf76M2z8Z5Cu8ezQvsBuhAQTXiCAHYJpn8YMofKy6Z",
  "key44": "3Hs8gSDJYJiKq8Sgo3xSjWt3QDYyaGNtWwdBdquPLDxH4WuBTAyZKWaKpKxwwY1VQMjebX9Ltq5cjQ71EDYss45i",
  "key45": "5WotrDEQMnZbYxjVXiDasV6a81K6uH26TbmvKSxKUFLHGK3E26FFwvGYFgpeg1CFfHWqGkK6WbjiFPYgSZtMkz67",
  "key46": "3TY3rWw7aTP9NLDxGw7ms3iMdjFpJh4PTMHTZgg7xtuL6xGdRwUTtXf6K9DtnEvBYjTjm7EwiNgRayv3tU8qtULt",
  "key47": "3pfyyktoE9dYqu8VYjZtigTjbSAHTn2Ci8LizoQytTK5NYwpzfm13JV42igJS7X4GuJ7yBARePJntKWpvbiiVWv6",
  "key48": "2UorXPd6diYcNkc8Ra6qiBbso7tQc1JsBpL1SaWKEJK3zPC8ExQJ8VREeF5qvfxED76X7r7dyyHwbotWP4bYPLhA",
  "key49": "3shNinZJPZUJtVtJ4oNLb8HogVzSSXYnJ4imWURasQfD4H2GGSGUvtWVeC6gSoxEKsWR94erQw8wp2NMjLxXEK6y"
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
