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
    "3zqTfw2hrSNJ2cQ4RM6NUA3Vhxvdi5LmD6UTUG17AMGThH3mW2KqWHR3o16VRqVT5RVxhm2u35xa2zvDVvFyZYcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qLgHYftD6LqGY4KrpQT4VK3BrbTZCLoxjws5Lak3MLM3CMfjqJMYSJnHWC8B5ATXqqZxLa25sXCxm1YZTSSDfJ",
  "key1": "3gDJCE1kji54NF2dd3GQAU2uR7K5qY5rEx5Zqofh9LN8agByDQGsntMcfDVu6uJCst2ifPMshYmQBUFPswa9Hq13",
  "key2": "2oojR6zYoJ4sNjdqhs2vCP3Xby9NdbCQ1nTa7usgFbedC37UmBuXLABQLNeeK1MHTpuWqgncdtMY2JyJmJmiDANY",
  "key3": "7ipZHi8MXa3NV4DK58n9mxixSS4BRzEa9EAjPQXjXHxwGBV4CAuJs7zkyzyVM6SqqSCenaEMUu9NswGrwGcMirB",
  "key4": "2vAMbU6sBYvSyqu1YAuaAg3h9Ypn8tH3PAof1Mt9FdisFkE3eH8jcamuSxeA32iWzRDwHeCdD5hXhcy2HAenrrd7",
  "key5": "2cJr6AmDLiEXGCP2oZEP9pwLXMR7XN6WBqEWLoDJqthBnTeNCw2wzkXHYL6GzKg93jnEDiYFJ6j7CauHmExV7A4x",
  "key6": "NJssj2haxBKnbtdpyTXk7SSwAhA6KXv9LAU1v7vagHC1P8Sn5eHCnYLYjvgQ4FbkMrJBfSm3Cw3KHdPscRhL6ZF",
  "key7": "4HG8VZaQE6YZPk7oTeXJqkfCLphtDusowj2EXnPujQX58H3BHjsrMszN6HWDSw4zHFGH4eyHFpmhUazmnhgzTc45",
  "key8": "2Q7DXTqqbRYm8LJ2GUSwzAH1afft8mm3vs2pv2XN2811HjymksYgrs1FFZ9PuyBSvyakGzf2FgRdfGeTNFBb6cVc",
  "key9": "4SijNUnQ4xMueRH8JJwBdqQnQAyicoB2zeLNuhdyG9RCwSvsMV1h5Haa1QGdrenH1w4TV5VTV32u84y1VCrRsWhu",
  "key10": "Jgg3h9chekhGkdHcHCgmE31CUHBd9vKpd8753GHXpXnsA1xMCj4gE9i9UPUPWRQhGAavvAGitSdxHXqKgnfWebs",
  "key11": "4UTqEMSFzTboW7vh8TNMn9Zj5jBzQbDHeB1rzBvEAm18pRMWALT6RwVGUfPvTHXesqUrTKBjEMHHU5Lz9YiUJQt",
  "key12": "4iaz7yAXE9aHzVizvm4pnRQ3kNQPu4pTLXT7pNLMJdNzXKWRuG9oqC7uwaXiVgVrYHzZmVsjZXNA5eQUU81mGK9b",
  "key13": "3vxR9QwiuCfXQiTB1oLL6ypyxrGLYRaG8kZHSgx9wwshf2bEVi8juNDmPbjhJskyuW3Ct3CGHsQBUQUPuBqZCt8h",
  "key14": "3geonGxohfbpAGjC5iSwtLNqg3BtpwsLKq3PwWEXdgV5rgZk8zZ14GHME1Kg7iaAd88WFVg2y63f3iPtiGqMwSw9",
  "key15": "3drmYwqusHrxy5CHXbWGrh4hQ96191cs3EAx9YMQh4brkKuT5ucHRYpCf91nBPzitnPYnUcfox3VEbcC7tKpafvN",
  "key16": "3RDKp4CcZG46z7MmN14Mxi6g8GeEJsECxBnX4WZvoeAXi477Z2wd4oCXDTnjVkzhafUvhJruKn2S3biABdSPD5Mq",
  "key17": "3x2dXHs1i11mFSMRqDb7mmKm8DaUMAeK3YWm7pCLmPCVa3sFhnsEA4rbBRupVB8xL6ZsZ4usjVZUJZDNuv1AbtKE",
  "key18": "QExzhnLiu1gjA3FJJ49HvycQxbQNxB6Sin6hJHFVEw9cV5otMN5mfxZ1M8oaTWsnTQwq1AP7J9y3UCJbjs19vmA",
  "key19": "5U7ERfWzaxypfkYuMHcSGmSq7oBcAJPGynXHM3je19KvibuA36YYsD5QUAhNDgPeJwPx3fdXHGB86cJ381G362q8",
  "key20": "2imK7uMHvhSZu2uuUauEFdKZwiLbWu1jQhdXBihjLFpx64D3npBe7VdFiEmmTRMatXsh6ogWaXe46nFFdvcGxtfS",
  "key21": "d429rL3ahcCWpiUJdaznjKt6Aiq77Gvrk9RDJ9WDF5btP9xMZvdfcxybvgYLZVda8hDDt5gEieinceNDobgtQki",
  "key22": "V7N6YkwFtn2ppGVJwtCsqQPkKaAMdMSHqHTdWH9HW46JD5scDzxG2ihaTse6EmTda9JosNWU81Pzv8DopGz498z",
  "key23": "4vYeReCXXYf43ykSjpcafeoSMgEHjBP5dkMR6uBAEeoSPuXFLmERuNGsNqj5zQWyeiivfrhzV7Xe5zwZK8s5g3rr",
  "key24": "qrJsMXrjJwV6yppWNDURs6v4bwJATixh5JybsC4aJiGTpXAe8EqkYdxPQUxmeLCDfMkKDy9L93UPRE5idt3DB6m",
  "key25": "bsce3qrXKJJwFMUyDdBfFH5KCiF7cE2AH2tTrST576yVMpUBhiyLfi6H36oRjBbDUDtyExQrggzCNvEiucrgun8",
  "key26": "5V2Y8rZp9twcYPbh5VzpHHXok4DM5fANoqLo1PKys9cw44cZk5wHUAXzYzpndkGg7PBjqn9akDBW4xg2V4GEFDtX",
  "key27": "N9ib2SpdtwjuNKAaHZJ6BjfHDCEKMZYyy9w31EwRjkrRQSFzdNGvGa2aypty7c9pnaRifd6U1vU9HVozXY4eEe2",
  "key28": "4QhJ4H1t1waQnAHgCSmwE6dmwE2qaxpF51WzCLEbTFs5zTAicRyARDwJk2EGgbh7c4Npxtf1oYrZTk6kWd67hakR",
  "key29": "4HSKrkHgKLtejtEA8CCLpsvSvrfbvuL8dMXY9GLekoBnCCsVBNSirEqiWh6vGWorNBztnu94xTyFdhkNqHuycMWg",
  "key30": "5CNDZMeWxZ6cog8ijHihKnCyToPoD2AF3Y57tcDpd2tJ35raEgrp76X7JL9PLvNz4oz2xvJmMHDXh34q8UaYCaGq",
  "key31": "4hvtBudXBvyqFGLhUAna3XtHN2jaC1fX3efU2pXN6xtY8SHAHj742Q35RHK4kHPWESFXTXSVoAKsfp8fsnU5yhxn",
  "key32": "2JayXeqtxoWjGfQ1WbxJmbeVB3HJG6DrFdGuQ3319FXdHHgf7xgVW71mZjcMdWxwktjjkHkP7JeKxBwaq1d6xAF6",
  "key33": "2d2XMtKVntGp64bDxV5bDV8Ty6xaqG5rZw5u82hfcJxmXyfk1EFg6S2FDRxbpP7BL5QSZ5YX3L99NiuFeuVdzEho",
  "key34": "4CmdNvf8mLqyboGS8Hgu69gJFJKnVNX5Mx4WdrBH6vwzt4hs8poujJFrciXZBD3g9L37FAApQj2TwiwNwBAWn5AB",
  "key35": "5xTRmeXa58BqBYNrkjRjVyqs7mTxhVBrzS6D3FnQ47z892FFDhix87UZsXWwwv9fWPeo66sBC4padWG5k6SK5QGE",
  "key36": "WbbaUbYmakjHezY7jm58Gwj98czwoLFExjGHXP2Cisa9ACzRVhsmV1vMQYMv2mC538boZSCDZosCrgtUJsmx4g5",
  "key37": "4Mv6ySmTAmwvEf6uCgYHR5RK4rKLTBzJ9b3ZyrReLbCvWGT11DJ2BmLj6N6vyiuj7Rt59Pq43evUAC9uzjqocbrc",
  "key38": "3v88zRvGnFFFB5z59KSAyRVN5ByKDnMtLtm7ZGdXEwTbGuMiWV47KRPhGpcHDAKAop9TyJcFtMyGTBbALFfE22B4",
  "key39": "2e1vnSNw3NDKx1iJHVdjxcXXPEVrA6b4jdQ53nhutCwc3u7dU9DwEigBiSQCKvfcAmaXg29ghhmGs2zYXgheqGmj",
  "key40": "2TPv9inVCtu2MBptqmGDmTXZQK4LdVSqJ4Hxk4YerewQL2hgpTHqHs38sxYjiyLUVpgztNA4YRqrTvn3ZLAFRqjw",
  "key41": "4FGA2o8tthH9fcTKjVP2wGkweDXwJS9T362EHQDoJXHkY7jBzmH95xTA6t9nLw6zMqR1v6xc5Vxijregt9EqVsxH"
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
