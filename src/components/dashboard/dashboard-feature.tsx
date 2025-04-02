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
    "2GAXDisEk4qoSRaunjJCDqrzxVEiYURvmaCaJLgtLYi9jgD5MwcfPKD97k4XpbHBbVm6azANxfDFGiM7aotoEQrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnfqSchLbmw57fvLbcjXG42cZmASSH4zKsPrDF9A632L93nXfbaV9gsLQKYtrcxwzxmbfyHvw8DvRpWpdugkf38",
  "key1": "3StzrYf4zbE3X1rboCgT7iPrgt9WVYEkjhLTeCPmkp81mS8jQF4Gg8yDjHfr678dPaSHNLNgKHjoRMAQH6GtgRnZ",
  "key2": "4rgw18LMC1A9vL3nGHp6Ubqc1z6vXr7f7gKFq6uEqGXpdCvrzKMSzns8wB7q9hmFZKM2dnMZWfYsEHUMLiVRe8VL",
  "key3": "3qFv1xwZ4bTbQ4ZuStEt1wS1osxDFjc6zLoFsTEz9xpTw6XeSza7Qc6wspdJngAbeE1cteBhWs6yr4fZ7HkjJ1km",
  "key4": "3fjPnjLEbKQWWx9opFpjLnJCCn2UCMpxf7DBJF5Z1wV1GmSWic2nfYbJBcGTERFRmn1zWvRo348mJkqNmkDZ2g7u",
  "key5": "ES4newutLkBHfXVpfjrqUZ6xEMjeBUqaES5oaMnBmYKbwakqn48bu5LFggeyF9bjGRpRd8q4AMAkarWK56enkBi",
  "key6": "5FdtHSdVShKSWDyxY1iUz27tzhKpVNxTyMi652eNKjmzKkYc8P6sz1fWjrdRzXJxJNepFTriMNiLr7cNjEt69tao",
  "key7": "4CQQuw9wrdsroLSChQE4XKk826ow83dvKcpT4PYPx9bRNixGqB8FwE8mdqVUbAPikDSL3riefzbf4Gq1a1gA8ktp",
  "key8": "5FKbRFPeA4ZzdNzhbQZiVTuynZJZXeJL4HGnJQEXUW1tKgr1SqxsHRw1bg6U8A8zWmnbpm4xkhnLW4VBuQawiNvj",
  "key9": "aZDPiEauDhPHLg8qZ5hCZj2ZFukvMYdiGcGkHZbXbaN9gfmXW2adeeRRQi2WxYAKEQbRWX25hGR7UsmWwTf528L",
  "key10": "5XDVAUMPiLAYoGT8deDdHEc3Wwtow1c5BNRJBVcmkxJiYUXBrdzPDxUbvzzRgzcBBzPnEe3HLf1f3SCU53ENpjRg",
  "key11": "iNxwz7WJN5hMjV8M49jLWzC6WZYvgxRxMCJ8MEQHF3bdPS4w4EqzBfa5LbKnW6KNimXPr9mkRGt17FDrjTCsouG",
  "key12": "5ujeMHEnVFcffAdc7mDEbWLpoXiWhutizNmR29zxMdyHVyMUqSTCBWTP6fT25MFih76Da7h9793HMHXHNCpm8XjY",
  "key13": "2n7jng7kuFLbpKD3DsTycFw5EJ5DMzLmspQgUmfikMC24F9gZxF3zRcvWukjhYmiRsavXutknVXSL9ndwc1d3wbq",
  "key14": "2wVpfXUkUTcUi3hPgENbSQDmcUj58bBnfynaVr51KQ4u77qjSzGWeMn69hGwCPo9upgEJXzyLF46VqH7WGsx8SwA",
  "key15": "3LY8wpzSktbbhxdDd6pfEKRtmnZqoN2kEcqAx9PBxmCocBYnWCu3LhU8Kdi1hbGpyiXUGvYE3j6LMQKt4EnMPWPS",
  "key16": "5pnWx8nZMY3DSUmq15dxpzDwWE7hrwcmARFCeMyPpW54v9CM5FGYrQpbjp8pCUAiQbK4EL6Gy23WWo4TC49vumE",
  "key17": "4ujac9fRyhg5RowUzjcDVtDDBEeNdDDPCh1hbZVvAdDSn5uVkCyQjZgrfqjnThNBVUHJwR7qp4VmRrh4GqK3Uxcx",
  "key18": "2Q1kvxYvzkFDNBH2R9dqZr3GNZJA6WFc9vNUR4vm44ihx3ZeYoqzfRLZD11gAB8FPpBqn3J1rji3BVEwGaV9wgYk",
  "key19": "4f7773SJv4NRZhfsWvwBhzVwgvjKtJ1ipoUyAnDCBhKARBZbsJvjew5Q4EHfFLSSiQnBtQcbZ7rbxdRVtt92nLZP",
  "key20": "2STVxH8YxzgoeSLc3Fs9DMtNpxbxcXVVcC5jhbzzXHDvafWtYywh92gHDpmVF2YYuhn3uY556gJno8tL6Bkun4wu",
  "key21": "36TT9zwUG2EgZZsxwcsg1TJfNb7wKPRXUKN2dkucQ9tAJkdZ7rNWCAmwzGEfTUmQcartFVJUqwnnDgcRbJnGADyS",
  "key22": "3wYp9bXhvgFxu3CzbLt8p3A6pwK3ZcM7eyF2JiFZTRTDnnqgJWTWSmSPhhcZyYgz5FPLXBhoJisQXm7Fj5vnytqS",
  "key23": "3miAU9ug3whguzbcunc8WgWzvjXtZUPK86xYqKpuCTH5CGYxYaSfzBVtH2bDXjkiAwkHz78RNgVFXiAZm8xHUfVe",
  "key24": "3xnDieLyuSJpGbcUq9kxn2uX14zZxBiqEN9hjDEUCjEmFfMQ493waoMx3kju4mhBSZTA6B3kMHeQVc4zFdS3E4Rz",
  "key25": "yEGHiBBqjj4D2dPqjwRygeZCk3tjBVeYkfsRys7FWipHN3ZfFN57uksGSqyxZ6jRHJsa1ZxTGu4p8tEMT7oTjcK",
  "key26": "2RFGUjsVEytzisn3jL6roMvQoR44AAVhUByYQgRBwnAi2FUb3wdrbaCjzPwafNcHexGWXaLLLJZTbPHK33XfCfn2",
  "key27": "4YFBRmrGCqG5E1zQRkNAsq9Eh4ConSov7YvpK6wEQU5i3Rtwu7rf2xswc6JBLUoReVgumJUZ8NcJwfd32UurG25p",
  "key28": "5eZbHiUUpE1LUgdBoqtzukKTmB9F4PDkuJU7nGhPPqvPjNqqrZR5ZRGG6qBmyviUFu61UcQosmRefyRghKbDsi2y",
  "key29": "3GHHxypdGrCpxQhEB6x6wComdRDGo69FDiNBCMkgwVH19GHM6LYWhgrqCenWct6KcmcmoB7TxKC5shPSppGUBQ5m",
  "key30": "3EGEByPv63fEnabBjWogqM9ucV9kLC16qyvAGK3amFXwDWRCVdeCHy7j6wgNqgkii5TZbD3JYYPFq3V7Y9NRodaC",
  "key31": "4qS8eyzYUZhTeqvmmcyeDTTKcDphL23xDrtnghoVRpRoQ8ogNP7G86tTDFusZkdcc79pr9Zt452bMCsceUFZYTKx",
  "key32": "2rH2n8Xwd32XarGDUvonVv1sH2rE7Wd58ucV45QqQnfibHgSeSYYvK4Vbsco7enK9HSBZWUytCJeFqqwUPoVgjrQ",
  "key33": "2V1ZxwXsXMDeqZ8FKdDBj56vGYNRs7iUb1zEE4gCGaQUW41a9FJCaKpvth6tiRqdB5412Q5u7m4CJwhuSeNdYSxw",
  "key34": "yUE4DHhG9ZNvaG4ro1tDykmih4VcXsphURCWyZspHHDWBSajF9uWQ6oDgmuw8qMrPM3WZN7bU6hMiZFwCRGP59E",
  "key35": "29tPXF8wUXhTY19NRsL9GQr9zkFRRRcziXunppcnqo8YjU7nAhE35B3AcAV9Zqup43kjS96KRjJezdVgagUvJeZY",
  "key36": "rgHzjz76hCjeAYNw8UpjxMZHGukuPie9PPDw2otsphSiCGH3Z94xkCnjX7HBPYrc4So2a3Q1S4ZgaegCeqPdm8F",
  "key37": "rVLTEPjRjpJJ3u3abKB6hoLTkMLhWnT8qaVRVKk4TLLA3oZesvfKjoQe2pao2XRdRZhsrk5oJUWsQ3WUT5k66DJ",
  "key38": "4kLpAS5iV3AcDdKGT4A37umfRjc2nJ46CBpjBosSUB53GF4S5rVzhijeEANm9QifC1NeQ6kwhrp15ksPd6ZaFpRm",
  "key39": "2Hf5voWDXV2ZiCTNPdEXZLQu8kY4xE7spppb6CBnwHhg4D5xJ5wYu9FU9prJ2UF1cAfQBWbhzkvgegbLNHcLj6gP",
  "key40": "2nTJhGxgkq2zsoyeLrqG4WZcjgv17uUTxkrhios7Ai1so1YPUrCL9dscafPrBkzNvzUSMPbVan8pKEuDA72h63tJ",
  "key41": "4kVo6xxXiwtkvymjgf9LBQ8GbnShovSniJf49dfP5tsmmzwEAd8W6p2ypbq4wgZ34YyDajbvbZCAoZ5ogwFYiPi3",
  "key42": "MbNtXqVLKzqU3D1r69Z6oKBVgjF9v8YcrkTQ7RFX6KNCBQVvWREhRoHqh2CT62Qx3YNAEAX6XSnjRstKVHY3Qg7"
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
