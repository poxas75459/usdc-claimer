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
    "5fADMp1amtLiwKrS3QcXdvArv9ves2LtuaiwAGqSNT6twDsyDHPRkK44UiWRMXvsc5Va9rX1z7MjbCcprFRB9yDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNkUxoWgVK5b1CNG452vU9jnMnUffstMcsKcJNjRTGVgL9n9cpr6fFPFABQQWpKMWuR3oUWvPSdeDZKg2A14UnX",
  "key1": "4oNAGLES3rif99RcvqifF5DcTBfBDFN2CAzuyp3mb1hexhz5ydy77e9u4mfsNSnTCb6q2tHFkmcBPmryJcmLFx19",
  "key2": "2tej5jCpRyLvEcNH9SxtAg8f8zhQ4s3Bb5MmwrjwiTungaiVjcyyGU6qftRLykdxXdpEhfapz7vhw72BLvJ4bQTh",
  "key3": "29jM7zFFPdrqPEJ6UU5hi9jzZsSc5nboCCwrngFC9C5o2uD3VKztd1ctLSM8jJyWevrU6SZiMLR2ahZmPXX56LSk",
  "key4": "4bMwgF3exfbV73DNGJsaXSTsKyCHE4fBT3LQCdNSsJhtCgT6GKNfcmMuZXH79kqgDRmvpSULAS1JtQLBrS28rNjY",
  "key5": "5Njjafh16BoycB5F79cw1bDHsSms76fYEindHgj3qaKfHiFZxnw3pMgSKJSoyDno7A5DmnWYbPoah5JBefaH6iiU",
  "key6": "7LfVGCDnr6cmtoyBBTPhzR1hP7AzMWE6twqS2x31ftjbtQCRTmaoSpW6Tf1Wfxag4RH1DJYFk15nUMBpSoM5W1Z",
  "key7": "2ntxzrfcBf8oNejoUiFC7muGbS59pHcASRxK5JAzD5r8d1aye8QhKWS5tnBuSDT9boERCLHLnp7HK4ph1Mm6gD2z",
  "key8": "4uxRFmtDWuZDJb5d4DfRaBmfjo1Zp6Zgn3zjmYtSGYLA1TW8UY8rfBR8xYnufPGtxk7FweWuhmDb7HQCQCj5n4KV",
  "key9": "2qXDiRqkCrBTfEzoqdwKjagW7eZn8eAkjwuKkmPdCpQu7xGLRf1RLptKJsXr4Cn7Hkiznk2rVzkqtw9Tr4M7GSv4",
  "key10": "3kLGa6nHvt3nZ3uWThGG7XtyFoA1UfKicQeG497gpREqdbFVaUJMEicAwPyV8fFrVV5P1YWijkNurJvsw8wtcmtY",
  "key11": "4XLs8iMs1MdEUwvM2xza6NssDwyAPTd6W8MCnFQtQY1PAWg5yLccSUaGV2qRnRin2oPtKhxEdWckaWsjzd5kkecu",
  "key12": "zmCyjhGivzTkj7SdnVK96wssKEkJfV3VsFCZRYS6ckVztcuhR7yWibgaAEQL3CE8zm7nxjbDv2gy78NHRwWeduw",
  "key13": "3SQmC5hZ9DoTfmsQfhSHvmqhu7d2TomEkTFk3iY24tf15vMP97TqnCfjYdp9BSX8Hwjb4zgQpvBUhnnL35tbH6er",
  "key14": "4Wg5Rpczmvn1U43KiUstEFGz2r52VndQhXzW3FCvnJ5MuP3tp8tg9CqRVBbcJpvLfriZ8QLgiZFcX1ivT6tjeQQv",
  "key15": "4MrGVGJ13dEDcYaNjMLnr24T3Njq7aboRRzt5bPqxXXD7u5wAAyN82h3MyRzPBnnqw8UVyt9xUorVun9J4weUQB7",
  "key16": "5vmV4SGYMYLNqi2LyfwvBk18MXJHbRijdJhzYaoc3yBVa5AzVAhukEcLNQhyxD6pGEKRtv84tzKpyyTeTtZipNwj",
  "key17": "Lv8k3WKUmjTEXgE7JURsywtHDgyx12URQx7jEbmdNmd1U8J98goisvSt6AnSex4C56roCkeRoMyBUG44HWPcXrz",
  "key18": "64SBkFfctzwDV2yYydTLW22k5rZejWMDPFTcxHGSx66kvcL5a7LEQCz1ZbHeHo96noWpSPLLZastVdzA42RQ8wvr",
  "key19": "5yLnLz4XbYbXL2cDnhDHmpfNFNxnppCEaPqyWe7d8ycQSZmJ7iXXw5bABjn2k6SPpKtw76Li5mLMbie8AfeMiTLB",
  "key20": "ywCE2aT2dzM2yz5ZPNuFqBcRhX6vXqQbfbQM4ddbQfqf5ky26JQFRn2wUyi4QcXzC3NBZEUNiXN78tAwwXcm7As",
  "key21": "wrDP2r6qNV4Sjp8hb8Ny2bnXNfwrHbPQTCxE3AQaCWTsueKNqvuAqck8fEqDdue7qmVHYJCqMnd79kTTUVCHoXm",
  "key22": "5ayTG9C7HGHyjpXDMUXcsuUEW7Dvy5S6sRyBnF47PjryiRFmBbjEoXuDPpHMUBBsLM2GPE5W9eWbmX6UvRgTuB7t",
  "key23": "2vXrGXVMhu1wbbGZsQuEt8odjKshK7yrRUxLsbWmC1B2MzYycq6uapji2YuRhi3sp4PKFSRZ3FJT4Gh5Ur52Hk1T",
  "key24": "451ahykznzbDDTWjvJiS2tx2kx6RwfXwKAA8CvBosq3W3RsjLDgjphZ3CjmDvuu6TpJu6dicE3VuftnYuseC6Ya7",
  "key25": "24ADRrSDEK9NXAsHECKXUkTiAeaMgJyWybgcG8jqaC1piFk5Swkd1y8zgWeTdx2vMvZ2PeaSzQFx7jVxYnzjPNFp",
  "key26": "2uyNEhFDxSLiBGXaTNDcmoRWWmuKbNMFiXng7xwns2GQv4Uh2FxKLfe6pLoiLXMcfT8RdUKNcPLEC784MGsrrcvk",
  "key27": "3D378jb8FkF7jUE2JYnTearteBZ57DWheVAYU4ZwR3zpHCvi58BVEj2DDiJwzXLYEfTk3qePm7U7XxtjF5qruqHD",
  "key28": "3gCgSJQXREa9AnFd7KiAtVmRTsZKT94UMZakwjebfMBDsLniq3PR6FGzoumHRajimwyaGukMTCYkr8z7LdXXwhco",
  "key29": "3sKdHo9LeB9kaWNHpisqStTHFNzaSirWfAjbDeE5oo9CprEhGekwW5xg6GEhHSASdVz2McT1xLsRcDn7tQnphK2W",
  "key30": "3agbhWS5GGV3oaYAJj4EGtymUAgizdQauq9jgjv9y7kbKVbTbYqnNofxr5JKyoWGX3HYrJMGweR3xLY3snXqRTvf",
  "key31": "4nH7cH2R1nVLYPGrPAUMQir6BVGy519cyjCrCkU4LVQ3zyhWE8bkSN3HPSu16LPpCVLnjToVTso4KscnFD212sWr",
  "key32": "38EvSU9xSM7qe1euiBYK9aZ4raKCXsdvX1L3gJ8QZH8rA1Pux5bef6CMzKydKxMaabd7JYybkF3wE3p55gcBR6yQ",
  "key33": "5UwTPr2bnvdq7RL7hxadUWBZzLzAEkDLNmnZmuW5NcwJCF2GYaGZ4LAZUpvBcmWS1VuHAaYy8bNyd9cfxNU4tj4A",
  "key34": "49qRaLK1cT4PBfWi4BT3BvowH8caBpeQqAyd2vPFS4CfppEwE9qtpK7N9pSz6DgYLqHFtbxUCfxPEYNZMaB2r4Te",
  "key35": "326WBLCd7qtBW8jL56cCVUNFrgZmAgZRaa6pRVAAo7gG2wUqQ369iXhs5sWurGA9MWRcsErZBozswqexCUGrPHx1",
  "key36": "3S3otGnh8XzHLyb6fuyF9U9t7T651iVnyYPjSJMZzATLNmMcJFshGxNx8S3WeE99fiFtVo4PXSNR53hft1tTQUmC",
  "key37": "MR5M75Cyzj8S3FHHwAuM46xkSPrZKTSEJDjGpAnpfME9Q9VqnH5qcXXUKmvr6UQwQWqUnL4wNFzj2mQBhUT7e8b",
  "key38": "baPbV5gzrVNWEntZTWENPsDKLWAJs3f1m2ApAjZ9XBmANHL7AzbtEXBJXqVGmF6CmAF6Z58bjsgzZYMBuubkePa",
  "key39": "3sGbKLQRzd5D4Jpkv4TwdxsBgMyneJ7Fka8WyQiHbKdZJhV3nHhpp3Ep2X2d8jWEQ2zFjfKBG8egeLd3amuHgC3z",
  "key40": "4ATRkmdvi5DDfJzMdZ3SpVHSpBGgPK7HBL1HgithMN4pWw8qn9nSjBXH4p293uKu2i8BUMfRgnWe5zipqc2qCDu4",
  "key41": "4yJxkxXgazmeNVnM42zeAKy75DiFS7AeWjAQFhKk8ZUJJ7FNDipt1GYf55X7G83UenayD4YYN4HmyAjveL2jQZn1",
  "key42": "jfa7tm3D4YjMd5b3bHLZbe6CttZb3PLNVYtoL3zqEWoq7ZaHw6bjKopJPPo7mYDiqyLjawxbWcM8AMy9EQSTEey",
  "key43": "2pGAABVDjFwwxrsXwUxALGeAHzDtr9vzArejbSFmeiU5KsuMFfuaY4taoJ41EaaHRn6HrGuFFyhoNUnACbGWip6C",
  "key44": "5J9n9mG8n9TNZXXKT65aRWdBwhmdZBuutUyWQgX4Y1VJ8jM8Kuuy8SBhssDqYhej4faiQyEwNGxuKFsk4Us6UeDd",
  "key45": "2nKdP69LeZGbUbiLD7P8aZQGkfZQ6RAv4pzULKdPHZWeHXSx8by6LdRbWwAjpnKxgsyJzuYuDqJBxXLfy6nRnDcu",
  "key46": "5a7BU6ciTLJ7BuouiPgomevZkxuBmb47QQ2vHsxFbDe5oHn4VP9RRH3MsKAvc5j37PeGC1QozJXYc5vndCN8SZ3D",
  "key47": "4FfvJnZM4KVQ374WyLuHvgH3o2RXx4rT5bVYuPgxVpekcS91oTRENfdbh6GmQJaKnx1Pn9qbhVqHv1SwwYZSPqAw",
  "key48": "5GuXt5xDHLCAN2wj8WZ1osLpypHwBuELbUzJocQDhPnNEe8VUyTxK64SoMPG9o4csMgoZ8UWwZjkvMX3aMRtgEuL"
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
