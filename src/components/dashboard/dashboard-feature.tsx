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
    "7Mj5Gjv4WD3iaAEubFP2ZjuRpS1s9tgjSTSGr3CSbwFsLSULPFf82CUkajNoU2Tdhntk2eBHP5QccLKKDbQeW5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFwdNo9zcS2s9nzmGSfTrebXzZt3GuFpBVwLvSkzfWnjNtgDonWYZxCgFJmHr2bS4ha1UCJf9VA52BYroXSVhcy",
  "key1": "23zGiwpQa86wpDV7hxWAmMw7VMffY42w49fKtGtyLT51ghujDuWrJYkytnNhe6ZnTcWeX1ui75XQm37KJv6RtZvg",
  "key2": "5R2KPaAxjZ7M2zmuuSckWJMXr4HRhEJbPPRxiHYZTX7HgipwJXC2H9FySkX6daHj6UwSvoDVBxd1z4ztZqfY14az",
  "key3": "3gpfDHW56k4fkB3idr6W3rntFH89errfMER9M5EQDBL2YAT7mfiVpKpDdSsGVt1XnDniF7NfpypwAUckzfjSw1UP",
  "key4": "4q44WA9SoFYEQCJFLvn7NGc2A5P6AMmQsRobGtiuk2TgasTQoFzFTFchHb7dN5wvP1mJpeposWzRTYTuPou1eEHx",
  "key5": "4tx9aj1GRujoojbiQKZtvsq3vHuTc6QsuVJXXnH4a6HiiKtowcBPaBwyxQuk8pPfNcdXdRVQAWQmmMfqqRiSNCUt",
  "key6": "2f5ekDf7g4w8Bes5D8LzaCWoxCU6W7SEEWZApgGSqa47VWGERh9qURH3w29nyQvAtvcyaP6A6U3FZ4dHLGLaisje",
  "key7": "2271nAPesvBG1PpFiGaNx1RCKiFDtg2Uhe63u54Sb4tQFQ7ZJjGsxUJQ6HFgMKvsHVnYK6NSP5wMC1mRMDUguvGX",
  "key8": "5WJJWNiLr4dioPvvL4hpfwm8E13q5iH7aYPVEV2HNjeM8VrZGDM3nXLMZKNjFQ7cdAYPc6bri1smXkRyQvZP4RWN",
  "key9": "otcn44gZrMWgV6Jwghy5kuKmHsd6vv9kWFShJpVqtTZCEDwGU8NGXU1qxc4QWjbGgSxPxhR6cjW6WCWgVpB3tyb",
  "key10": "P8XyjqXAPu8XMoHuX1HhhGKAGo4qtGNvH9DQLNYJs6MaYvpuPSdmq9bNkF65EeCS8H6w7ZWW2ac7LBzrUPBTuA1",
  "key11": "2uLyGdffNMdGgmUVv29jaF8to8GEEb74yqHYxZzXebgH6iTaQXrG75urbgDaS2imFNi1YnSxTwmPc7A12zLw62mm",
  "key12": "3KqnnNBxvGYSAKb399bAUdxApuCFq53QWHM6Su6hEd9K26cjYmgNNwsCcMzv8eZsRCSZKMQc28qmtkbAdURkp8Q4",
  "key13": "4NSos3dWaJEuaRk2SSjkTYw2ag5qVfajQES4D3iD6BJotP1PND5vuoMQfiGQt3MN2TjLpNHBjowpxF71CPk1Du6M",
  "key14": "4vRvZ3WPaiQEsmrfZ8AiyGrwUviU9JZTrb2ZfSs229hqk4SdnG65bd3YF68J7S8GKiPTXQtqFNquYgT1F9x2YszA",
  "key15": "RWzbQn7vKFBStmQo35SgAU6L5B82vqjVueh29VUgsspQAB4kHbbice5r9XupXAUevNvBgjxTj9hNm5qHX7AiuPb",
  "key16": "zhddK6DYfKD2LQQoEtLaLN8xQm57vRmXmd2LxVNfdWVQvxxYbKmt19yAxTjfE4ZK5tFr9pnRV4fMxuqKhfPDXUE",
  "key17": "G2BZYLbAMrb6VvMyWBRDE6cSSgZcPowYRgFkDFdyg9yHfoPDzH9hCmMZQQUC56cR5hVpv3eYxC6PXsvRRgVCY6F",
  "key18": "4j7gXUjKbHDTUUWA5A5SxycgrfF2AJzLzZM9qRJXnVsUtTeyHGoMS4K9dccbgEb7VYZ4k179axxzpArfAAzjqrxz",
  "key19": "671EVv4njwNj5VLjkwt6cDJ14bouaCLcZJ5ddZ4oFqhhvubQj5qK6y3C3ebrJBjJJz6cHNuyaNcoo5DmSUQFTa4k",
  "key20": "NdNyjoN1Q9K6whqV8pvWB9R3F833XU7zUpRmQNaB9JBMiFg86FfQA3VuTiEPr5YgEdjeJ8kGeCb4HbjDKY9t6pJ",
  "key21": "cD2agRDP3fpNeEzZoqyY6toSqqCUwKRUHJjftR1KHieHwTx8F5Ley523QkhZmiaM7NbRvoqNdKVdcMbQi8h7rFs",
  "key22": "5MJgfg8UvgSiHRvQjwWhgjvbZjZAj6BT76xjPkaowY8EH93Y2USixztCCmBWgwCp2wLbY5JUwyqAtYU1iEgCheaK",
  "key23": "3pKNVXUNYQ4sPfU2jqddWug9Mnf77XsQbWYTADWDuHFaBDabUf33DP7z9XxneLntnQa7RruDeG6LBsbkdXjJLcMg",
  "key24": "21qdNuP9WhRH2rUCPUrCrWYxhcoYm1xczXooGXriKV4s83yER4JTGiayVjmGtgMDCSHfdiTjnzXWXTdWXFAnUnpz",
  "key25": "4Npi44kogZhJmDfnuPzLQ4FGLRW7J9g5pHYddriTUam1qwTSMp3FZ2PEaZX77c3tDfBSaDvf3TCguBvFHFvjdFPe",
  "key26": "t72nNPrWJtvHs938VTMFX1WXfyGRABAp855rEmiypbBZsxp51BmGq1C9hTiCnpHZdhgcd2hUG854U43NcUGybo2",
  "key27": "21Z7javy4ajnAzvB1n4yYLwvNDndz8CvP3GHKd9BDYZwX2pFJtg82Gwff9Z8ScvW3cSaRLyZzBLCfsRBpHhi6QDX",
  "key28": "635iVHCZuNYuEXsjNdwuvyUNJLHbtEXsYFx8bW5d7LCifNKgiTcLUpUATjH195U3APNSg96HUrFU5xesgbfvfqfq",
  "key29": "2cJU6rGN5NuA94LAc3VgTSrVGPoLicxEB1y4aPsxdDu6nvkZXU5R4Xi3zz4Q59oNJMcAAqj9UANRVMaXYujiToiX",
  "key30": "2vUyrfasB6ySh1gfa3k43sLVnyUKBLN527bUQkZu3FxXi8EDNdG2yaeff314sY1jorHbNAYgGKB6zvcCf1CHeXQ",
  "key31": "4ZUmQdaFxaLJiFhswxUTtarsyt28GqY5TVfmBCeXYgdVQNYGQZx786EB3wEnsqTXU7YDkE2Hh5H4pwP5TaCdw2Lq",
  "key32": "7MCUix3DLhA28jDmJaKRSpqSahbHn8SnGXvh5rvQKu8fu5d5bjXYxXL5sfk6GXcEj9PUY61F2G4JufNfnznJ9Xm",
  "key33": "5xvMPPvq442hSJuFh6WBz19K2jd6oDbbhUGQV76zf6KfKEevFmN6f8yJu1jcFmvmu1XpePd6VQmvws8avW1HySS6",
  "key34": "4trr7Jpae5dmd79j29L6wZU2TJibNzPCMWgkUix6gVZqBFZn4YSMNJWq3cVByPm2NNcG7XcNGvT3zDqT7J1sToDJ",
  "key35": "2jWLYjqYsto1CKvFAkd3wk48w3DEDrjktCufPjYmcY8nDjWC5sRaJPcvXifVCgscTv7H5atBx6NEoa1EkWqGfKZw",
  "key36": "3v1s1SnBkPeB48vZjoiML2ZegQLAp8RHLPHaUHzJXCNp19tJwUCxoigSqoJ5vhJVVszmmW5oEoKDZwQYDKeNh5Jk",
  "key37": "2C6Asf3Ns9iZRD1mqakkkBTjdr5nAwq7aMXNtqfewd5jQ7uYL5qBJzpeZdFZ7H3ykP6bMoAkfDVKfBN1Vh8hECax",
  "key38": "4ToUwbmarmk2N4nfhFm4gFqmuLhANQSpdvPEGvgo49gLetHUBw6TD3sDtLmAPC13pT7BUPsm7dL4bxjrQX8jeB6W",
  "key39": "3XG4cBLKnJABq1jY8HYcz128SkjUS2bFcerUkq85Ccd6SzEZqHCrWmnXkeZDrdhJavFPp1vwBJ4uYkoJQqNT4z88",
  "key40": "33Jr7PJrFJQkToX1bbwYcidm8irAJZk2YQipW5TvEzjpSDDLXdnBfHYGvAFxDGDHEi41gHaoFDajWkBRCPSqW1iz",
  "key41": "3WNfpxo4x9ZTJAxeWC1dyUk8au9jBf39mZ3Gzd7pVbfCb8vxppi1f1P1o3ikvSFYxmQ9kgpMJazvPE6ciqE2Wmfr",
  "key42": "5z1CMS2fR1BnuHJPoq4parSaBeG14jNdXPbbnurntnmWVurNG1vLhEiuPT1meZ2SKsAai4P3PTn1HZ8UVdsg261Y",
  "key43": "24JM9p5WnQyKhF1CL6n7LGa9e795fop2mKRvHHWjGZD8GjcKEF8uvDjBrAwtdoKVRLmqucmJi7sCq9snEagQKCNA"
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
