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
    "5taRmPkg27sh3nimmU3a14A5gTWxDhHEL6J4W1EFAr7WoUHe6vnBAH9ebi6hpFPegZggQF7wGA5QwSb9JdE9jpfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPT9VwSGkz2fp2qmjFJcez4nUHCH7JT7qqLrTuzkBr5h6ykewcrLmWGg2qztX3wjezGa3SatiRayhmw7RHahXeY",
  "key1": "UfjCwYqRZVxyvWCuJpaJgiTtkcNYH3F2dF2djbfPFGB25MaC8o1ysVDhd7kMNvJCN2ZAJJupP3a87vVUiVVuXCq",
  "key2": "3tqycmzvhbm7JpQDdEbKkepE2LXf3Yx9CvhVoEm4RHFneWWsxos3C9iKtpXJfYj3FtBc9Z2fkCNrBefVrGcEoMXD",
  "key3": "2RbrSpDA4t6TAN3baxC4qpbrTgwc8E3BfoNr1vegWmLK9a9XrjhZYNtdVPjuGb9GhXdTKkME7maG8dvMPSzBu8A7",
  "key4": "5PwF9442KTd1e2nBQWpZR9RQjbMuCG4tpej4Vdous1pnEohpNsueQxDFXEYsDsoLXDrkC4z9qnK17SSnG6s7H6Pa",
  "key5": "5eNwoYYWMhemsFXwRaXC2Nzc1ys1sFS1KzNTaqfgzXuRvwKoWAL2JZ9fkfAATeG7Ea4PWcgFyjDRXmfgndeQehwC",
  "key6": "5qy9JUqU8XERb8XWcxdXzk6kEH7rof4Dype8ZhQM3wi5SfWPFZog8ata1RoC56HvRZpAf11RqWX1LV16Bq6b9o5M",
  "key7": "gnPdtkyYMZmieQnwf9Rue2TZoyw9VvrXQx9nVKnbb5VyfjHpwJJPpSWRReuHzRHWzpGCYuhk2ergZvfGgRcSmRR",
  "key8": "3TnCEimQ22ZyZvvMJP2bUr3qopD24e8cWa7V1cMyR9j2EZFyJCX2wqFS9QSnQMtdg6LjggehwHD5unwYkj7TBGjt",
  "key9": "4p6MkUxFKjrB64bYiGGnVRS1Wijczv5FRrU73wTiZY717JMy9hXAaGaRUPDy1CizoRgncfxxZFiDsvQk2JmvUX89",
  "key10": "4Rpjv2nHAaJHKaM5q7A69ivWtykjGhd595YzXabK6ZPwFEZeCCD9g32DmFgnf2QNFMCiVEuJjVVu43fhEjWRrSGa",
  "key11": "58AG44dCKMtvBwhWk1RvREU1G7QrxwEkwkd3wgkKh5RUTQkwhBVNbp2BKrgseGBVfgZ9TXVB7E5bh7BxdHE4VH15",
  "key12": "4RbcVmraorHWuXGgeo681R2KQygqHBh2XumHRnV3vj6r92UEWJzd5sh19FHSATLLK4eM5EibiA5kU2mof44ccVms",
  "key13": "4DEhbxg4gMohY1upzwhCYHjCPEUiUHwRaUnHDzgwG4nxDqCgvMArBhWpyA7F63GzeGV1PiwEgW5MT5g2mGnqthgR",
  "key14": "4AxRk3rhKuFR7d3ZzFka6WM9NeM6Un2KfgTZmCC9rkwHmh7B9zun37oDLFF1pRqLswCWKbLWiULsTifRbkBy2XcT",
  "key15": "2DyBPZzYQmXEmzcxtAzZBCT63bzbTj2XccukfMQP4GHq9sYUDjNivC1VCGDQ7C83iUpDyo7HBQ67LeCbBDdxWtsF",
  "key16": "64na8PW9PMEsK338ywPT5uQDr5CfLxA4XXAtJNYoaX8d1PAiMwJY9Pdp74qZLjSiKofApuC4UfLfAuddpFg79xRq",
  "key17": "3W3KKzmNRhM7BSKp6oeGhCwkXzQTXTShUFtwcE9JDcc3i1WtccdkiT3vitQTVZJxRmzG6PLYZFPZbYfUPxNidDti",
  "key18": "37aL8MjxQJQx4izsujNhFKHGdqteuiAEt4uvCDY8pJXP3EZ6cJMvzzXEgvE8xSuHfPn5BUur7prSapniHhsfVgQj",
  "key19": "3Ch58GSjpMxuL8LdHzdL9xRr8zy88WdmATbT6ZKHDusiN3o6W6LLnjAbSTZeNK4wfaTRfeYjqknBSkSUGFFESWNm",
  "key20": "2QvQZ8JjSTzJUdAeMn8Tu8r5pLLzSD6a68NvPithWz1KSSajwN8YJbz3bqYWVwUfmJBW5bp3cXRj8V4YC5KaVvoM",
  "key21": "22b9VXFotkavBueXiq6zTrdEvG4WJzSbxFd6T2wB6x6Z2hdzVwFXKq9CHDDyP3m5dTJv2eezqL4ZLCTHv4iqNw8z",
  "key22": "4cKPTAHVsAH1bc5HL3hMbPVdS2rK9JibufsuLn4k8ZRKVNE4AkddQjfrwyPpg7YHpZwasE7uRACtxNQaT1Edx8iE",
  "key23": "54WURjhmbXcSbDyqpseG9HfzEsgvkckdEC1XthrD6jf72Fqhk59sSEn4uMF8Z4AFGhqCgnXnRyks7iNDPqTjPqLj",
  "key24": "5E4VMzhyiNCV3S59NCUWTi1RkZPG6uwiN9DwG5JnKY6BW3veYz6FjVa4J1sjyzKiqNbDj3ppcVKe69kJcRQDriY6",
  "key25": "5HJPYmPt4Bi2R8oQe2EvQAU7BoGfrEhWcLwbJkVM7VSGVFGarnEM29PvXfp1pXVuFWy1kT37ntbJLjhqKboYp1B1",
  "key26": "3zgaD6NGaRb33NUsGwbt9392TR3g5XGGixxnJrrYZUYWfyC5yXjRFV5gguKARxykm9ocEBCNFgWs6asVAneXQWvm",
  "key27": "3NFA2JSS9Xiepgvi3re1HsErVEXHTVA46Eia5vneccF3zPY2Gmx6xBuuqd5hpyHW3XUxfVZNLC9TzwHSGNt1YsHa",
  "key28": "3gxVhPkC59Xk3zFVesFVdqpJiT7k7KSzYv5JwwKZGne61EPec725G4up1qJoyK9vbF4tA3KLvYSuXAvaniUka9Ej",
  "key29": "2MYwQdrzAFsnEZfURPNsRkCeH2LcGynBYW53QaZGqLWWV9arpyL1Bjin3ofD8mC37iBcJXCJL619YBgwWigW7mpy",
  "key30": "54PwkjhA9nYb593c1mm2GEpiAV4UgGHbeu4f6Xyec5QDNPw9JMEhe7uehT3NBiQA9xbtB8ahRJTVwaWYXkGFepTN",
  "key31": "3686dFrAWC7dpD3SWVA6GtonK4NDDU5PduBch1XsGBmwdxUChWH5nQqW5ZCzowRGnBmbJL4363tjc9Y2Bnmy4r9A",
  "key32": "str5ATa8fmua8FF9MEoPjWpdWHXXW5ZHqvdhKsBGFavnCzv1CjQeEBT8aTYYZjRjX3qLs13fsdwAZvT6arEQq7V",
  "key33": "3VzoJBLgUWZwJwZ3rE3MNh6tgZtTT3zfxhHvhy2TjZrAXPtPbBYULAUeLka8itDWqbb7oNNhB19cfxHQjCjFQBrR",
  "key34": "2EGqRFeFQkG3JajULrU684KpxMWSsZVQWPRgyrgKu6ZrLpXGcp75qdxVh1E4SuzqR6LAnm9j7KWV1Adk91UXZstP",
  "key35": "4xqfWovpBhbvunmhvT9Q57Dm5FSS5jr8Ap79Dx1kUAM1hBk8uzDsjAd9vkETMbHjp5PJWd5TC8Bf2g9rwu4ys7mA",
  "key36": "5nfN5zUxMJKXXVJEKupBGPPhd5qSWS9pBpAgXfKBF7ghGyu8rmUmjBK1v7HzK8qVDgWbENDWudSq4wGaAt9hpsxw",
  "key37": "4t4qCW3zV8XFBZs87eodmKREty9wxrHMeouisTx3P2Se4LfHZVLp1y53WZdzVQxgSZtNmU78Y84TBFV5bT6qMyFn",
  "key38": "31tawCmDYJJtBTvohuVGPqiNKAD9uSsfvLJwPJavF9CzieGRhUxiui2KxT1sw5kGeWuyUP336siixSP4XjCmW46X",
  "key39": "4TiPAWzTE5oPpFVn2c4uU2CJNNNTuumqP2Wx4JCXS2DbZpXgStTXBnL9sv9akuhLGbBwABSSFAHiy7ibsPrcvRrN",
  "key40": "2Vqe3TssvFgzjWEgdYfirQ1cEijsLsxVeiLJY9AWPcZQTzxzFh3NoXyNAgicxZXTTSYxNS72KSZ6Lb1dfeV4EKDB",
  "key41": "1new9paYNUoo772nVvgjgHdRbbK76zJPH95KbjaswaxrFHuKMUNCQiWgcMcbKBcoq9ZW6d9zRdAXqrWr4jB4NpP",
  "key42": "4t6ZnnnXpAWFmntwtPr1H5VcjqrhHRHXf7ZUvrn4aCdqNBibw5nwjrAZEuTkmA8g3LQrFwiAEUcFi8BQcyGLqXCo",
  "key43": "3aq28v7zfFotcEXBk1JAASxc5YKcnMfGJBaShxK5Nhto5RFQLZrnp86yGNUeKFiZzBT2nXjt1szw1U9r6TWpmZZ7",
  "key44": "66ueek6pUSutnpd5uCYarDoWbNr2QRC5VUEaZRmNcXQ3CBQNptTYRbM4j69ek9kJaUuzHYrzDfKU56dDfm5rXxkm"
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
